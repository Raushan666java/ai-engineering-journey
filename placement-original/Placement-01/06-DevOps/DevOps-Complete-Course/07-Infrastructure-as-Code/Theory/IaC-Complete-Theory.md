# 🏗️ Infrastructure as Code - Complete Theory

## 📋 What is Infrastructure as Code?

Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files.

### Benefits of IaC
- **Version Control**: Track infrastructure changes
- **Reproducibility**: Consistent environments
- **Automation**: Reduce manual errors
- **Scalability**: Easy environment replication
- **Cost Management**: Optimize resource usage

## 🛠️ IaC Tools Comparison

### Terraform
- **Type**: Declarative
- **Cloud**: Multi-cloud support
- **Language**: HCL (HashiCorp Configuration Language)
- **State**: External state management

### CloudFormation
- **Type**: Declarative
- **Cloud**: AWS only
- **Language**: JSON/YAML
- **State**: AWS managed

### Ansible
- **Type**: Procedural/Declarative
- **Purpose**: Configuration management + provisioning
- **Language**: YAML
- **Agent**: Agentless

## 🔧 Terraform Fundamentals

### Core Concepts
- **Providers**: Interface to APIs (AWS, Azure, GCP)
- **Resources**: Infrastructure components
- **Data Sources**: Read-only information
- **Variables**: Input parameters
- **Outputs**: Return values
- **Modules**: Reusable configurations

### Basic Terraform Configuration
```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t3.micro"
  
  tags = {
    Name = "WebServer"
  }
}

output "instance_ip" {
  value = aws_instance.web.public_ip
}
```

### Terraform Commands
```bash
terraform init      # Initialize working directory
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Destroy infrastructure
terraform validate  # Validate configuration
terraform fmt       # Format code
```

## 📦 Terraform Modules

### Module Structure
```
modules/
├── vpc/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── ec2/
    ├── main.tf
    ├── variables.tf
    └── outputs.tf
```

### Using Modules
```hcl
module "vpc" {
  source = "./modules/vpc"
  
  cidr_block = "10.0.0.0/16"
  environment = "production"
}

module "web_servers" {
  source = "./modules/ec2"
  
  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.public_subnet_ids
  instance_count = 3
}
```

## 🗄️ State Management

### Remote State Backend
```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
    encrypt = true
    dynamodb_table = "terraform-locks"
  }
}
```

### Workspaces
```bash
terraform workspace new production
terraform workspace new staging
terraform workspace select production
terraform workspace list
```

## ☁️ AWS CloudFormation

### Template Structure
```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Web application infrastructure'

Parameters:
  InstanceType:
    Type: String
    Default: t3.micro
    AllowedValues: [t3.micro, t3.small, t3.medium]

Resources:
  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-12345
      InstanceType: !Ref InstanceType
      Tags:
        - Key: Name
          Value: WebServer

Outputs:
  InstanceId:
    Description: Instance ID
    Value: !Ref WebServer
    Export:
      Name: !Sub ${AWS::StackName}-InstanceId
```

### CloudFormation Commands
```bash
aws cloudformation create-stack \
  --stack-name my-stack \
  --template-body file://template.yaml

aws cloudformation update-stack \
  --stack-name my-stack \
  --template-body file://template.yaml

aws cloudformation delete-stack \
  --stack-name my-stack
```

## ⚙️ Ansible Fundamentals

### Inventory File
```ini
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com

[all:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/id_rsa
```

### Playbook Example
```yaml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes
    
    - name: Start nginx service
      service:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy website files
      copy:
        src: ./website/
        dest: /var/www/html/
        owner: www-data
        group: www-data
```

### Ansible Commands
```bash
ansible-playbook -i inventory playbook.yml
ansible all -i inventory -m ping
ansible webservers -i inventory -m setup
```

## 🔒 IaC Security Best Practices

### Security Considerations
- **Secrets Management**: Use secure secret storage
- **Least Privilege**: Minimal required permissions
- **Encryption**: Encrypt state files and secrets
- **Code Review**: Review infrastructure changes
- **Compliance**: Follow security standards

### Terraform Security
```hcl
# Use data sources for sensitive values
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "prod/db/password"
}

# Encrypt S3 backend
terraform {
  backend "s3" {
    bucket = "terraform-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
    encrypt = true
    kms_key_id = "arn:aws:kms:us-west-2:123456789:key/12345"
  }
}
```

## 📊 IaC Testing

### Testing Strategies
- **Syntax Validation**: Check configuration syntax
- **Unit Testing**: Test individual modules
- **Integration Testing**: Test complete infrastructure
- **Compliance Testing**: Verify security policies

### Testing Tools
```bash
# Terraform testing
terraform validate
terraform plan
tflint .
checkov -f main.tf

# Ansible testing
ansible-lint playbook.yml
molecule test
```

## 🚀 CI/CD Integration

### Pipeline Integration
```yaml
# GitHub Actions for Terraform
name: Terraform CI/CD
on:
  push:
    branches: [main]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: hashicorp/setup-terraform@v2
    
    - name: Terraform Init
      run: terraform init
    
    - name: Terraform Plan
      run: terraform plan
    
    - name: Terraform Apply
      if: github.ref == 'refs/heads/main'
      run: terraform apply -auto-approve
```