# ☁️ Module 10: Cloud Security - Complete Guide

## 📚 Table of Contents
1. [Cloud Security Fundamentals](#fundamentals)
2. [AWS Security](#aws-security)
3. [Azure Security](#azure-security)
4. [GCP Security](#gcp-security)
5. [Container & Serverless Security](#container-serverless)
6. [Cloud IAM & Access Management](#iam)
7. [Data Protection in Cloud](#data-protection)
8. [Cloud Security Monitoring](#monitoring)
9. [Multi-Cloud Security](#multi-cloud)
10. [Cloud Compliance & Governance](#compliance)

---

## 🎯 Cloud Security Fundamentals

### Shared Responsibility Model

```
Customer Responsibility:
├── Data Classification & Encryption
├── Identity & Access Management
├── Application Security
├── Operating System Hardening
├── Network Configuration
└── Firewall Configuration

Cloud Provider Responsibility:
├── Physical Security
├── Infrastructure Security
├── Network Infrastructure
├── Hypervisor Security
├── Storage Security
└── Global Infrastructure
```

### Cloud Security Challenges

1. **Visibility & Control** - Limited visibility into provider infrastructure
2. **Compliance** - Meeting regulatory requirements
3. **Data Breaches** - Protecting sensitive data
4. **Misconfiguration** - Exposed storage buckets
5. **Access Management** - Excessive permissions
6. **Insider Threats** - Malicious insiders
7. **Insecure APIs** - Vulnerable interfaces
8. **Account Hijacking** - Compromised credentials
9. **Lack of Monitoring** - Insufficient logging
10. **Shared Resources** - Multi-tenancy risks

---

## ☁️ AWS Security

### 1. AWS Identity & Access Management (IAM)

```json
// ❌ INSECURE - Overly permissive policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}

// ✅ SECURE - Principle of least privilege
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "203.0.113.0/24"
        }
      }
    }
  ]
}
```

```python
# AWS IAM Security Best Practices
import boto3
from datetime import datetime, timedelta

class AWSSecurity:
    def __init__(self):
        self.iam = boto3.client('iam')
    
    def audit_users(self):
        """Audit IAM users for security issues"""
        users = self.iam.list_users()['Users']
        issues = []
        
        for user in users:
            username = user['UserName']
            
            # Check for access keys
            access_keys = self.iam.list_access_keys(UserName=username)['AccessKeyMetadata']
            
            for key in access_keys:
                # Check key age
                key_age = (datetime.now(key['CreateDate'].tzinfo) - key['CreateDate']).days
                if key_age > 90:
                    issues.append({
                        'user': username,
                        'issue': 'Access key older than 90 days',
                        'key_id': key['AccessKeyId']
                    })
            
            # Check for MFA
            try:
                mfa_devices = self.iam.list_mfa_devices(UserName=username)['MFADevices']
                if not mfa_devices:
                    issues.append({
                        'user': username,
                        'issue': 'MFA not enabled'
                    })
            except Exception:
                pass
            
            # Check last activity
            try:
                last_used = self.iam.get_user(UserName=username)['User'].get('PasswordLastUsed')
                if last_used:
                    days_inactive = (datetime.now(last_used.tzinfo) - last_used).days
                    if days_inactive > 90:
                        issues.append({
                            'user': username,
                            'issue': f'Inactive for {days_inactive} days'
                        })
            except Exception:
                pass
        
        return issues
    
    def enforce_password_policy(self):
        """Enforce strong password policy"""
        self.iam.update_account_password_policy(
            MinimumPasswordLength=14,
            RequireSymbols=True,
            RequireNumbers=True,
            RequireUppercaseCharacters=True,
            RequireLowercaseCharacters=True,
            AllowUsersToChangePassword=True,
            MaxPasswordAge=90,
            PasswordReusePrevention=24,
            HardExpiry=False
        )
```

### 2. AWS S3 Security

```python
# S3 Security Configuration
import boto3
import json

s3 = boto3.client('s3')

# ❌ INSECURE - Public bucket
s3.put_bucket_acl(
    Bucket='my-bucket',
    ACL='public-read'  # Never do this!
)

# ✅ SECURE - Private bucket with encryption
def secure_s3_bucket(bucket_name):
    # Block public access
    s3.put_public_access_block(
        Bucket=bucket_name,
        PublicAccessBlockConfiguration={
            'BlockPublicAcls': True,
            'IgnorePublicAcls': True,
            'BlockPublicPolicy': True,
            'RestrictPublicBuckets': True
        }
    )
    
    # Enable encryption
    s3.put_bucket_encryption(
        Bucket=bucket_name,
        ServerSideEncryptionConfiguration={
            'Rules': [
                {
                    'ApplyServerSideEncryptionByDefault': {
                        'SSEAlgorithm': 'AES256'
                    },
                    'BucketKeyEnabled': True
                }
            ]
        }
    )
    
    # Enable versioning
    s3.put_bucket_versioning(
        Bucket=bucket_name,
        VersioningConfiguration={'Status': 'Enabled'}
    )
    
    # Enable logging
    s3.put_bucket_logging(
        Bucket=bucket_name,
        BucketLoggingStatus={
            'LoggingEnabled': {
                'TargetBucket': 'log-bucket',
                'TargetPrefix': f'{bucket_name}/'
            }
        }
    )
    
    # Bucket policy - deny HTTP
    bucket_policy = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "DenyInsecureTransport",
                "Effect": "Deny",
                "Principal": "*",
                "Action": "s3:*",
                "Resource": [
                    f"arn:aws:s3:::{bucket_name}",
                    f"arn:aws:s3:::{bucket_name}/*"
                ],
                "Condition": {
                    "Bool": {
                        "aws:SecureTransport": "false"
                    }
                }
            }
        ]
    }
    
    s3.put_bucket_policy(
        Bucket=bucket_name,
        Policy=json.dumps(bucket_policy)
    )

# Audit S3 buckets
def audit_s3_buckets():
    buckets = s3.list_buckets()['Buckets']
    issues = []
    
    for bucket in buckets:
        bucket_name = bucket['Name']
        
        # Check public access
        try:
            acl = s3.get_bucket_acl(Bucket=bucket_name)
            for grant in acl['Grants']:
                grantee = grant.get('Grantee', {})
                if grantee.get('Type') == 'Group' and 'AllUsers' in grantee.get('URI', ''):
                    issues.append({
                        'bucket': bucket_name,
                        'issue': 'Publicly accessible'
                    })
        except Exception as e:
            pass
        
        # Check encryption
        try:
            s3.get_bucket_encryption(Bucket=bucket_name)
        except s3.exceptions.ServerSideEncryptionConfigurationNotFoundError:
            issues.append({
                'bucket': bucket_name,
                'issue': 'Encryption not enabled'
            })
        
        # Check versioning
        try:
            versioning = s3.get_bucket_versioning(Bucket=bucket_name)
            if versioning.get('Status') != 'Enabled':
                issues.append({
                    'bucket': bucket_name,
                    'issue': 'Versioning not enabled'
                })
        except Exception:
            pass
    
    return issues
```

### 3. AWS Security Groups

```python
# Security Group Best Practices
import boto3

ec2 = boto3.client('ec2')

def audit_security_groups():
    """Audit security groups for overly permissive rules"""
    security_groups = ec2.describe_security_groups()['SecurityGroups']
    issues = []
    
    for sg in security_groups:
        sg_id = sg['GroupId']
        sg_name = sg['GroupName']
        
        # Check inbound rules
        for rule in sg.get('IpPermissions', []):
            # Check for 0.0.0.0/0 (all traffic)
            for ip_range in rule.get('IpRanges', []):
                if ip_range.get('CidrIp') == '0.0.0.0/0':
                    from_port = rule.get('FromPort', 'all')
                    to_port = rule.get('ToPort', 'all')
                    protocol = rule.get('IpProtocol', 'all')
                    
                    # Critical: SSH/RDP open to internet
                    if from_port in [22, 3389]:
                        issues.append({
                            'sg_id': sg_id,
                            'sg_name': sg_name,
                            'severity': 'Critical',
                            'issue': f'Port {from_port} ({protocol}) open to 0.0.0.0/0'
                        })
                    else:
                        issues.append({
                            'sg_id': sg_id,
                            'sg_name': sg_name,
                            'severity': 'High',
                            'issue': f'Ports {from_port}-{to_port} ({protocol}) open to 0.0.0.0/0'
                        })
    
    return issues

# Create secure security group
def create_secure_sg(vpc_id, allowed_ips):
    """Create security group with restrictive rules"""
    sg = ec2.create_security_group(
        GroupName='secure-web-server',
        Description='Secure web server security group',
        VpcId=vpc_id
    )
    
    sg_id = sg['GroupId']
    
    # Allow HTTPS from specific IPs only
    ec2.authorize_security_group_ingress(
        GroupId=sg_id,
        IpPermissions=[
            {
                'IpProtocol': 'tcp',
                'FromPort': 443,
                'ToPort': 443,
                'IpRanges': [{'CidrIp': ip} for ip in allowed_ips]
            }
        ]
    )
    
    return sg_id
```

### 4. AWS CloudTrail & Config

```python
# Enable CloudTrail for all regions
def enable_cloudtrail():
    cloudtrail = boto3.client('cloudtrail')
    s3 = boto3.client('s3')
    
    bucket_name = 'cloudtrail-logs-bucket'
    
    # Create S3 bucket for logs
    s3.create_bucket(Bucket=bucket_name)
    
    # Bucket policy for CloudTrail
    bucket_policy = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AWSCloudTrailAclCheck",
                "Effect": "Allow",
                "Principal": {
                    "Service": "cloudtrail.amazonaws.com"
                },
                "Action": "s3:GetBucketAcl",
                "Resource": f"arn:aws:s3:::{bucket_name}"
            },
            {
                "Sid": "AWSCloudTrailWrite",
                "Effect": "Allow",
                "Principal": {
                    "Service": "cloudtrail.amazonaws.com"
                },
                "Action": "s3:PutObject",
                "Resource": f"arn:aws:s3:::{bucket_name}/*",
                "Condition": {
                    "StringEquals": {
                        "s3:x-amz-acl": "bucket-owner-full-control"
                    }
                }
            }
        ]
    }
    
    s3.put_bucket_policy(
        Bucket=bucket_name,
        Policy=json.dumps(bucket_policy)
    )
    
    # Create trail
    cloudtrail.create_trail(
        Name='all-regions-trail',
        S3BucketName=bucket_name,
        IsMultiRegionTrail=True,
        IncludeGlobalServiceEvents=True,
        EnableLogFileValidation=True
    )
    
    # Start logging
    cloudtrail.start_logging(Name='all-regions-trail')

# AWS Config for compliance
def enable_aws_config():
    config = boto3.client('config')
    
    config.put_configuration_recorder(
        ConfigurationRecorder={
            'name': 'default',
            'roleARN': 'arn:aws:iam::123456789012:role/config-role',
            'recordingGroup': {
                'allSupported': True,
                'includeGlobalResources': True
            }
        }
    )
    
    config.put_delivery_channel(
        DeliveryChannel={
            'name': 'default',
            's3BucketName': 'config-logs-bucket',
            'configSnapshotDeliveryProperties': {
                'deliveryFrequency': 'TwentyFour_Hours'
            }
        }
    )
    
    config.start_configuration_recorder(
        ConfigurationRecorderName='default'
    )
```

### 5. AWS Lambda Security

```python
# Secure Lambda function
import boto3
import json
import os
from aws_xray_sdk.core import xray_recorder
from aws_xray_sdk.core import patch_all

# Enable X-Ray tracing
patch_all()

def lambda_handler(event, context):
    # Environment variables (encrypted in AWS Console)
    db_password = os.environ.get('DB_PASSWORD')
    api_key = os.environ.get('API_KEY')
    
    # Validate input
    if 'user_id' not in event:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing user_id'})
        }
    
    user_id = event['user_id']
    
    # Input sanitization
    if not isinstance(user_id, int) or user_id < 0:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid user_id'})
        }
    
    # Use IAM role for AWS service access
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Users')
    
    try:
        response = table.get_item(Key={'user_id': user_id})
        
        return {
            'statusCode': 200,
            'body': json.dumps(response.get('Item', {}))
        }
    
    except Exception as e:
        # Log error (CloudWatch)
        print(f"Error: {str(e)}")
        
        # Don't expose internal errors
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }
```

```yaml
# Secure Lambda IAM Role (Serverless Framework)
functions:
  getUser:
    handler: handler.lambda_handler
    role: LambdaExecutionRole
    environment:
      DB_PASSWORD: ${ssm:/db/password~true}  # Encrypted SSM parameter
    vpc:
      securityGroupIds:
        - sg-12345678
      subnetIds:
        - subnet-12345678
    tracing: Active  # X-Ray tracing

resources:
  Resources:
    LambdaExecutionRole:
      Type: AWS::IAM::Role
      Properties:
        AssumeRolePolicyDocument:
          Version: '2012-10-17'
          Statement:
            - Effect: Allow
              Principal:
                Service: lambda.amazonaws.com
              Action: sts:AssumeRole
        ManagedPolicyArns:
          - arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole
        Policies:
          - PolicyName: DynamoDBAccess
            PolicyDocument:
              Version: '2012-10-17'
              Statement:
                - Effect: Allow
                  Action:
                    - dynamodb:GetItem
                  Resource: arn:aws:dynamodb:us-east-1:*:table/Users
```

---

## 🔷 Azure Security

### 1. Azure Active Directory Security

```powershell
# Azure AD Security Configuration

# Enable MFA for all users
Install-Module -Name Microsoft.Graph -Scope CurrentUser
Connect-MgGraph -Scopes "Policy.ReadWrite.ConditionalAccess"

# Create Conditional Access Policy
$conditions = @{
    Applications = @{
        IncludeApplications = "All"
    }
    Users = @{
        IncludeUsers = "All"
        ExcludeUsers = @("break-glass-account-id")
    }
    Locations = @{
        IncludeLocations = "All"
        ExcludeLocations = "AllTrusted"
    }
}

$grantControls = @{
    Operator = "OR"
    BuiltInControls = @("mfa")
}

New-MgIdentityConditionalAccessPolicy -DisplayName "Require MFA" `
    -State "enabled" `
    -Conditions $conditions `
    -GrantControls $grantControls
```

### 2. Azure Key Vault

```python
# Azure Key Vault Integration
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os

class AzureKeyVaultManager:
    def __init__(self, vault_url):
        self.credential = DefaultAzureCredential()
        self.client = SecretClient(vault_url=vault_url, credential=self.credential)
    
    def get_secret(self, secret_name):
        """Retrieve secret from Key Vault"""
        try:
            secret = self.client.get_secret(secret_name)
            return secret.value
        except Exception as e:
            print(f"Error retrieving secret: {e}")
            return None
    
    def set_secret(self, secret_name, secret_value):
        """Store secret in Key Vault"""
        try:
            self.client.set_secret(secret_name, secret_value)
            return True
        except Exception as e:
            print(f"Error storing secret: {e}")
            return False

# Usage in application
vault_url = "https://my-vault.vault.azure.net/"
kv_manager = AzureKeyVaultManager(vault_url)

# Get database password
db_password = kv_manager.get_secret("database-password")

# Get API key
api_key = kv_manager.get_secret("api-key")
```

### 3. Azure Security Center

```python
# Azure Security Center Automation
from azure.mgmt.security import SecurityCenter
from azure.identity import DefaultAzureCredential

class AzureSecurityMonitor:
    def __init__(self, subscription_id):
        self.credential = DefaultAzureCredential()
        self.client = SecurityCenter(self.credential, subscription_id)
    
    def get_security_alerts(self):
        """Retrieve security alerts"""
        alerts = self.client.alerts.list()
        return list(alerts)
    
    def get_compliance_score(self):
        """Get regulatory compliance assessment"""
        assessments = self.client.regulatory_compliance_assessments.list()
        return list(assessments)
    
    def get_recommendations(self):
        """Get security recommendations"""
        recommendations = self.client.assessments.list()
        high_priority = [r for r in recommendations if r.status.severity == 'High']
        return high_priority
```

---

## 🔧 GCP Security

### 1. GCP IAM & Service Accounts

```python
# GCP Security Best Practices
from google.cloud import iam_v1
from google.cloud import resource_manager_v3

class GCPSecurity:
    def __init__(self, project_id):
        self.project_id = project_id
        self.iam_client = iam_v1.IAMClient()
    
    def audit_service_accounts(self):
        """Audit service accounts for security issues"""
        request = iam_v1.ListServiceAccountsRequest(
            name=f"projects/{self.project_id}"
        )
        
        service_accounts = self.iam_client.list_service_accounts(request=request)
        issues = []
        
        for sa in service_accounts:
            # Check for keys
            keys_request = iam_v1.ListServiceAccountKeysRequest(
                name=sa.name
            )
            keys = self.iam_client.list_service_account_keys(request=keys_request)
            
            for key in keys.keys:
                # Check key age
                key_age = (datetime.now() - key.valid_after_time).days
                if key_age > 90:
                    issues.append({
                        'service_account': sa.email,
                        'issue': f'Key older than 90 days',
                        'key_id': key.name
                    })
        
        return issues
    
    def enforce_org_policy(self):
        """Enforce organization policies"""
        # Example: Disable service account key creation
        policy = {
            "constraint": "iam.disableServiceAccountKeyCreation",
            "booleanPolicy": {
                "enforced": True
            }
        }
        return policy
```

### 2. GCP Cloud Storage Security

```python
# GCP Storage Security
from google.cloud import storage

def secure_gcs_bucket(bucket_name):
    """Configure secure GCS bucket"""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    
    # Remove public access
    bucket.make_private()
    
    # Enable uniform bucket-level access
    bucket.iam_configuration.uniform_bucket_level_access_enabled = True
    bucket.patch()
    
    # Enable versioning
    bucket.versioning_enabled = True
    bucket.patch()
    
    # Set lifecycle rules (delete old versions)
    rule = storage.bucket.LifecycleRuleDelete(age=90)
    bucket.add_lifecycle_rule(rule)
    bucket.patch()
    
    # Enable logging
    bucket.enable_logging(
        bucket_name='logs-bucket',
        object_prefix=f'{bucket_name}/'
    )
```

---

## 🔒 Cloud Security Best Practices Summary

### Top 10 Cloud Security Controls
1. ✅ **Enable MFA** for all user accounts
2. ✅ **Least Privilege** IAM policies
3. ✅ **Encrypt Data** at rest and in transit
4. ✅ **Enable Logging** (CloudTrail, Azure Monitor, GCP Cloud Audit Logs)
5. ✅ **Network Segmentation** (VPCs, Security Groups, Firewalls)
6. ✅ **Patch Management** and vulnerability scanning
7. ✅ **Backup & Disaster Recovery** plans
8. ✅ **Security Monitoring** and alerting
9. ✅ **Compliance Automation** (AWS Config, Azure Policy, GCP Organization Policies)
10. ✅ **Incident Response** procedures

**Module 10 Complete! Next: Module 11 - DevSecOps** 🚀
