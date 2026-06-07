# ☁️ **MODULE 08: CLOUD SECURITY**
## Cloud Security Models, Shared Responsibility & Cloud-Specific Threats

---

## 🎯 **CLOUD SECURITY FUNDAMENTALS**

### **Cloud Service Models**
- **Infrastructure as a Service (IaaS):** Virtual machines, storage, networking
- **Platform as a Service (PaaS):** Development platforms, databases, middleware
- **Software as a Service (SaaS):** Applications, email, collaboration tools
- **Function as a Service (FaaS):** Serverless computing, event-driven functions

### **Cloud Deployment Models**
- **Public Cloud:** AWS, Azure, Google Cloud - shared infrastructure
- **Private Cloud:** Dedicated infrastructure for single organization
- **Hybrid Cloud:** Combination of public and private clouds
- **Multi-Cloud:** Multiple public cloud providers
- **Community Cloud:** Shared infrastructure for specific community

### **Cloud Security Architecture**
```python
class CloudSecurityArchitecture:
    def __init__(self):
        self.security_layers = {
            'data': 'Data encryption, classification, and protection',
            'application': 'Application security, API security, and access control',
            'compute': 'Virtual machine security, container security, and serverless security',
            'network': 'Network segmentation, firewalls, and traffic monitoring',
            'identity': 'Identity management, authentication, and authorization',
            'infrastructure': 'Physical security, hardware security, and hypervisor security'
        }

    def implement_cloud_security_framework(self):
        return {
            'shared_responsibility': self.define_shared_responsibility(),
            'identity_access': self.implement_identity_management(),
            'data_protection': self.secure_data_handling(),
            'network_security': self.configure_network_security(),
            'monitoring_logging': self.setup_monitoring_logging(),
            'compliance_governance': self.ensure_compliance_governance()
        }
```

---

## 🤝 **SHARED RESPONSIBILITY MODEL**

### **AWS Shared Responsibility Model**
- **AWS Responsibility (Security OF the Cloud):**
  - Physical infrastructure security
  - Network infrastructure protection
  - Hypervisor security and management
  - Hardware maintenance and replacement
  - Data center physical security

- **Customer Responsibility (Security IN the Cloud):**
  - Guest operating system updates and patches
  - Application security and data encryption
  - Network and firewall configuration
  - Identity and access management
  - Client-side data encryption

### **Shared Responsibility Matrix**
```python
class SharedResponsibilityMatrix:
    def __init__(self, cloud_provider='aws'):
        self.provider = cloud_provider
        self.responsibilities = {
            'iaas': {
                'provider': ['Physical infrastructure', 'Network infrastructure', 'Hypervisor'],
                'customer': ['OS', 'Applications', 'Data', 'Identity management', 'Network config']
            },
            'paas': {
                'provider': ['Physical infrastructure', 'Network infrastructure', 'OS', 'Middleware'],
                'customer': ['Applications', 'Data', 'Identity management', 'Network config']
            },
            'saas': {
                'provider': ['Physical infrastructure', 'Network infrastructure', 'OS', 'Applications'],
                'customer': ['Data', 'Identity management', 'Device security']
            }
        }

    def get_responsibilities(self, service_model):
        return self.responsibilities.get(service_model, {})

    def audit_shared_responsibility(self, service_model, controls):
        responsibilities = self.get_responsibilities(service_model)
        audit_results = {}

        for control in controls:
            if control in responsibilities['provider']:
                audit_results[control] = 'Provider responsibility'
            elif control in responsibilities['customer']:
                audit_results[control] = 'Customer responsibility'
            else:
                audit_results[control] = 'Shared or undefined'

        return audit_results
```

### **Microsoft Azure Shared Responsibility**
- **Microsoft Responsibility:** Physical datacenters, network infrastructure, host OS
- **Customer Responsibility:** Guest OS, applications, data, user identities
- **Key Difference:** Microsoft manages more in PaaS offerings

### **Google Cloud Shared Responsibility**
- **Google Responsibility:** Physical security, infrastructure, platform services
- **Customer Responsibility:** Data, applications, access management, compliance
- **Emphasis:** Security by default with automatic updates

---

## 🔐 **CLOUD IDENTITY & ACCESS MANAGEMENT**

### **Cloud IAM Concepts**
- **Principals:** Users, groups, roles, and service accounts
- **Policies:** Permissions and access rules
- **Roles:** Collections of permissions for specific functions
- **Resources:** Cloud services and data that can be accessed
- **Conditions:** Contextual access restrictions

### **AWS IAM Components**
- **Users:** Individual identities with long-term credentials
- **Groups:** Collections of users with shared permissions
- **Roles:** Temporary permissions for services and users
- **Policies:** JSON documents defining permissions
- **Identity Providers:** External authentication integration

### **Cloud IAM Implementation**
```python
class CloudIAMImplementation:
    def __init__(self, cloud_provider='aws'):
        self.provider = cloud_provider
        self.policies = {}
        self.roles = {}
        self.users = {}

    def create_iam_policy(self, policy_name, statements):
        # Create IAM policy with specified permissions
        policy_document = {
            'Version': '2012-10-17',
            'Statement': statements
        }

        self.policies[policy_name] = policy_document
        return policy_document

    def create_role_with_policies(self, role_name, assume_role_policy, managed_policies):
        # Create IAM role with attached policies
        role = {
            'role_name': role_name,
            'assume_role_policy': assume_role_policy,
            'managed_policies': managed_policies,
            'trust_relationships': self.extract_principals(assume_role_policy)
        }

        self.roles[role_name] = role
        return role

    def implement_least_privilege(self, user_requirements):
        # Implement least privilege access
        minimal_policies = []

        for requirement in user_requirements:
            minimal_policy = self.generate_minimal_policy(requirement)
            minimal_policies.append(minimal_policy)

        return self.combine_policies(minimal_policies)

    def implement_mfa_enforcement(self):
        # Enforce multi-factor authentication
        mfa_policy = {
            'Effect': 'Deny',
            'Principal': '*',
            'Action': '*',
            'Resource': '*',
            'Condition': {
                'BoolIfExists': {
                    'aws:MultiFactorAuthPresent': 'false'
                }
            }
        }

        return mfa_policy

    def setup_cross_account_access(self, trusted_account, permissions):
        # Configure cross-account IAM access
        assume_role_policy = {
            'Effect': 'Allow',
            'Principal': {
                'AWS': f'arn:aws:iam::{trusted_account}:root'
            },
            'Action': 'sts:AssumeRole'
        }

        role_policies = self.create_iam_policy(
            f'CrossAccountAccess-{trusted_account}',
            permissions
        )

        return {
            'assume_role_policy': assume_role_policy,
            'role_policies': role_policies
        }

    def extract_principals(self, policy_document):
        # Extract principals from trust policy
        principals = []
        if 'Statement' in policy_document:
            for statement in policy_document['Statement']:
                if 'Principal' in statement:
                    principal = statement['Principal']
                    if isinstance(principal, dict):
                        for key, value in principal.items():
                            if isinstance(value, list):
                                principals.extend(value)
                            else:
                                principals.append(value)
        return principals

    def generate_minimal_policy(self, requirement):
        # Generate minimal policy for specific requirement
        # This would map requirements to specific AWS permissions
        permission_mapping = {
            's3_read': ['s3:GetObject', 's3:ListBucket'],
            'ec2_manage': ['ec2:DescribeInstances', 'ec2:StartInstances', 'ec2:StopInstances'],
            'lambda_invoke': ['lambda:InvokeFunction']
        }

        actions = permission_mapping.get(requirement, [])
        return {
            'Effect': 'Allow',
            'Action': actions,
            'Resource': '*'  # In production, specify exact ARNs
        }

    def combine_policies(self, policies):
        # Combine multiple policies into one
        combined_actions = []
        for policy in policies:
            if 'Action' in policy:
                if isinstance(policy['Action'], list):
                    combined_actions.extend(policy['Action'])
                else:
                    combined_actions.append(policy['Action'])

        return {
            'Version': '2012-10-17',
            'Statement': [{
                'Effect': 'Allow',
                'Action': list(set(combined_actions)),  # Remove duplicates
                'Resource': '*'
            }]
        }
```

---

## 🔒 **CLOUD DATA PROTECTION**

### **Data Security in Cloud**
- **Data at Rest:** Encryption of stored data
- **Data in Transit:** TLS/SSL encryption for data movement
- **Data in Use:** Memory encryption and access controls
- **Data Classification:** Sensitivity-based protection levels
- **Data Residency:** Geographic data storage requirements

### **Cloud Encryption Services**
- **AWS KMS:** Key Management Service for encryption keys
- **Azure Key Vault:** Cloud-based key management
- **Google Cloud KMS:** Cloud Key Management Service
- **Envelope Encryption:** Encryption of encryption keys
- **Bring Your Own Key (BYOK):** Customer-managed encryption keys

### **Cloud Data Protection Implementation**
```python
class CloudDataProtection:
    def __init__(self, cloud_provider='aws'):
        self.provider = cloud_provider
        self.encryption_keys = {}
        self.data_classification = {}

    def implement_data_encryption(self, data_type, encryption_method):
        # Implement encryption for different data types
        encryption_config = {
            's3': self.configure_s3_encryption,
            'rds': self.configure_rds_encryption,
            'ebs': self.configure_ebs_encryption,
            'lambda': self.configure_lambda_encryption
        }

        if data_type in encryption_config:
            return encryption_config[data_type](encryption_method)

        return None

    def configure_s3_encryption(self, method):
        # Configure S3 bucket encryption
        if method == 'sse-kms':
            return {
                'ServerSideEncryptionConfiguration': {
                    'Rules': [{
                        'ApplyServerSideEncryptionByDefault': {
                            'SSEAlgorithm': 'aws:kms',
                            'KMSMasterKeyID': 'alias/aws/s3'  # or custom key
                        }
                    }]
                }
            }
        elif method == 'sse-s3':
            return {
                'ServerSideEncryptionConfiguration': {
                    'Rules': [{
                        'ApplyServerSideEncryptionByDefault': {
                            'SSEAlgorithm': 'AES256'
                        }
                    }]
                }
            }

    def implement_data_loss_prevention(self, data_patterns):
        # Implement DLP policies for sensitive data
        dlp_rules = []

        for pattern_name, pattern in data_patterns.items():
            rule = {
                'name': pattern_name,
                'pattern': pattern,
                'action': 'BLOCK',  # or 'QUARANTINE', 'ENCRYPT'
                'severity': 'HIGH'
            }
            dlp_rules.append(rule)

        return dlp_rules

    def configure_backup_encryption(self, backup_config):
        # Configure encrypted backups
        encrypted_backup = {
            'encryption': {
                'enabled': True,
                'kms_key_id': backup_config.get('kms_key_id', 'alias/aws/backup'),
                'algorithm': 'AES-256'
            },
            'retention': backup_config.get('retention_days', 30),
            'cross_region': backup_config.get('cross_region', False)
        }

        return encrypted_backup

    def implement_data_classification(self, data_inventory):
        # Classify data based on sensitivity
        classification_levels = {
            'public': {'encryption': False, 'access': 'unrestricted'},
            'internal': {'encryption': True, 'access': 'organization'},
            'confidential': {'encryption': True, 'access': 'department'},
            'restricted': {'encryption': True, 'access': 'need-to-know'}
        }

        classified_data = {}

        for data_item in data_inventory:
            # Simple classification logic (in production, use ML/AI)
            if 'ssn' in data_item.lower() or 'credit' in data_item.lower():
                level = 'restricted'
            elif 'email' in data_item.lower() or 'phone' in data_item.lower():
                level = 'confidential'
            elif 'internal' in data_item.lower():
                level = 'internal'
            else:
                level = 'public'

            classified_data[data_item] = classification_levels[level]

        return classified_data
```

---

## 🛡️ **CLOUD NETWORK SECURITY**

### **Cloud Network Security Controls**
- **Security Groups:** Instance-level firewall rules
- **Network ACLs:** Subnet-level traffic filtering
- **Virtual Private Cloud (VPC):** Isolated network environment
- **VPN Gateway:** Secure hybrid cloud connectivity
- **Direct Connect:** Dedicated network connection

### **Cloud-Specific Network Threats**
- **VM Escape:** Breaking out of virtual machine isolation
- **Side-Channel Attacks:** Cross-VM data leakage
- **Network Snooping:** Traffic interception in shared networks
- **DDoS Attacks:** Distributed denial of service
- **Man-in-the-Cloud:** Malicious cloud service manipulation

### **Cloud Network Security Implementation**
```python
class CloudNetworkSecurity:
    def __init__(self, cloud_provider='aws'):
        self.provider = cloud_provider

    def configure_vpc_security(self, vpc_config):
        # Configure VPC with security best practices
        security_config = {
            'vpc': {
                'cidr_block': vpc_config.get('cidr', '10.0.0.0/16'),
                'enable_dns_hostnames': True,
                'enable_dns_support': True
            },
            'subnets': self.create_secure_subnets(vpc_config),
            'security_groups': self.create_security_groups(),
            'nacl': self.create_network_acls(),
            'route_tables': self.configure_route_tables()
        }

        return security_config

    def create_secure_subnets(self, vpc_config):
        # Create public and private subnets
        subnets = {
            'public': {
                'cidr': '10.0.1.0/24',
                'availability_zone': vpc_config.get('az', 'us-east-1a'),
                'type': 'public'
            },
            'private': {
                'cidr': '10.0.2.0/24',
                'availability_zone': vpc_config.get('az', 'us-east-1a'),
                'type': 'private'
            }
        }

        return subnets

    def create_security_groups(self):
        # Create security groups with least privilege
        security_groups = {
            'web_server': {
                'name': 'web-server-sg',
                'description': 'Security group for web servers',
                'ingress': [
                    {
                        'protocol': 'tcp',
                        'port': 80,
                        'source': '0.0.0.0/0',
                        'description': 'HTTP access'
                    },
                    {
                        'protocol': 'tcp',
                        'port': 443,
                        'source': '0.0.0.0/0',
                        'description': 'HTTPS access'
                    }
                ],
                'egress': [
                    {
                        'protocol': '-1',
                        'port': -1,
                        'destination': '0.0.0.0/0',
                        'description': 'Allow all outbound'
                    }
                ]
            },
            'database': {
                'name': 'database-sg',
                'description': 'Security group for databases',
                'ingress': [
                    {
                        'protocol': 'tcp',
                        'port': 3306,
                        'source': 'web-server-sg',  # Reference security group
                        'description': 'MySQL access from web servers'
                    }
                ]
            }
        }

        return security_groups

    def create_network_acls(self):
        # Create network ACLs for subnet protection
        nacls = {
            'public_subnet_acl': {
                'rules': [
                    {
                        'rule_number': 100,
                        'protocol': 'tcp',
                        'port': 80,
                        'action': 'allow',
                        'source': '0.0.0.0/0'
                    },
                    {
                        'rule_number': 200,
                        'protocol': 'tcp',
                        'port': 443,
                        'action': 'allow',
                        'source': '0.0.0.0/0'
                    }
                ]
            }
        }

        return nacls

    def configure_ddos_protection(self):
        # Configure DDoS protection services
        ddos_protection = {
            'cloudfront': {
                'enabled': True,
                'origins': ['alb', 's3'],
                'behaviors': ['default', 'api/*']
            },
            'shield': {
                'protection_level': 'standard',  # or 'advanced'
                'protected_resources': ['alb', 'eip']
            },
            'waf': {
                'rules': [
                    'AWSManagedRulesCommonRuleSet',
                    'AWSManagedRulesKnownBadInputsRuleSet'
                ],
                'rate_limiting': {
                    'requests_per_minute': 1000
                }
            }
        }

        return ddos_protection

    def implement_zero_trust_networking(self):
        # Implement zero trust networking
        ztn_config = {
            'micro_segmentation': {
                'enabled': True,
                'policies': self.create_micro_segmentation_policies()
            },
            'identity_aware_proxy': {
                'enabled': True,
                'authentication': 'oauth2',
                'authorization': 'rbac'
            },
            'continuous_verification': {
                'device_posture': True,
                'user_behavior': True,
                'network_traffic': True
            }
        }

        return ztn_config

    def create_micro_segmentation_policies(self):
        # Create micro-segmentation policies
        policies = [
            {
                'name': 'web-to-app',
                'source': 'web-tier',
                'destination': 'app-tier',
                'ports': [8080, 8443],
                'protocol': 'tcp'
            },
            {
                'name': 'app-to-db',
                'source': 'app-tier',
                'destination': 'db-tier',
                'ports': [3306],
                'protocol': 'tcp'
            }
        ]

        return policies
```

---

## 📊 **CLOUD MONITORING & LOGGING**

### **Cloud Security Monitoring**
- **CloudTrail:** API call logging and monitoring
- **CloudWatch:** Metrics, logs, and alarms
- **Config:** Resource configuration monitoring
- **GuardDuty:** Intelligent threat detection
- **Security Hub:** Centralized security findings

### **Cloud Compliance & Governance**
- **Config Rules:** Automated compliance checking
- **Organizations:** Multi-account governance
- **Control Tower:** Landing zone security
- **License Manager:** Software license compliance
- **Trusted Advisor:** Security best practice recommendations

---

## 🎯 **KEY LEARNING OBJECTIVES**

- ✅ Understand cloud service and deployment models
- ✅ Master shared responsibility model across cloud providers
- ✅ Implement cloud identity and access management
- ✅ Secure data in cloud environments
- ✅ Configure cloud network security controls
- ✅ Monitor and audit cloud security posture

---

## 🛠️ **ESSENTIAL TOOLS & TECHNIQUES**

- **Cloud Security Platforms:** AWS Security Hub, Azure Security Center, Google Security Command Center
- **IAM Tools:** AWS IAM, Azure AD, Google Cloud IAM
- **Encryption Services:** AWS KMS, Azure Key Vault, Google Cloud KMS
- **Monitoring Tools:** CloudTrail, CloudWatch, Azure Monitor
- **Compliance Tools:** AWS Config, Azure Policy, Google Cloud Security Scanner
- **Container Security:** AWS ECR scanning, Azure Container Registry, Google Container Analysis

---

## 📚 **QUICK REFERENCE**

| Cloud Provider | Shared Responsibility | Key Security Services |
|----------------|----------------------|----------------------|
| **AWS** | Provider: Infrastructure, Customer: Data/Apps | IAM, KMS, CloudTrail, GuardDuty |
| **Azure** | Provider: Platform, Customer: Data/Identity | Azure AD, Key Vault, Security Center |
| **Google Cloud** | Provider: Infrastructure, Customer: Apps/Data | IAM, KMS, Security Command Center |
| **IaaS** | Provider: Physical, Customer: Everything else | VM security, network config |
| **PaaS** | Provider: Platform, Customer: Applications | App security, data protection |
| **SaaS** | Provider: Application, Customer: Data | Data security, user management |

---

*Module 08 provides essential knowledge for securing cloud environments and understanding cloud-specific security challenges.*