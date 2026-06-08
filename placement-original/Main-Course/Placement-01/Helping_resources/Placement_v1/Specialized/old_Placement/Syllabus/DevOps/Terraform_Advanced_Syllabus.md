# 🏗️ Terraform Advanced Syllabus
*Duration: 4 weeks | Focus: Infrastructure as Code*

## Week 1: Terraform Fundamentals 🟢

### Core Concepts
```hcl
# Provider configuration
terraform {
  required_version = ">= 1.0"
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

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
  validation {
    condition     = can(regex("^[a-z]{2}-[a-z]+-[0-9]$", var.aws_region))
    error_message = "Invalid AWS region format."
  }
}

# Resources
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name        = "${var.environment}-vpc"
    Environment = var.environment
  }
}

# Data sources
data "aws_availability_zones" "available" {
  state = "available"
}

# Outputs
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}
```

### State Management
```bash
# Local state
terraform init
terraform plan
terraform apply
terraform destroy

# Remote state with S3
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
    encrypt = true
    dynamodb_table = "terraform-locks"
  }
}

# State commands
terraform state list
terraform state show aws_vpc.main
terraform state mv aws_vpc.old aws_vpc.new
terraform import aws_vpc.main vpc-12345
```

### Terraform Workflow
```bash
# Initialize
terraform init

# Format and validate
terraform fmt
terraform validate

# Plan changes
terraform plan -out=tfplan

# Apply changes
terraform apply tfplan

# Destroy resources
terraform destroy

# Workspace management
terraform workspace new staging
terraform workspace select staging
terraform workspace list
```

## Week 2: Advanced Features 🟡

### Modules
```hcl
# modules/vpc/main.tf
variable "cidr_block" {
  description = "CIDR block for VPC"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "availability_zones" {
  description = "List of AZs"
  type        = list(string)
}

resource "aws_vpc" "this" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name        = "${var.environment}-vpc"
    Environment = var.environment
  }
}

resource "aws_subnet" "public" {
  count = length(var.availability_zones)
  
  vpc_id                  = aws_vpc.this.id
  cidr_block              = cidrsubnet(var.cidr_block, 8, count.index)
  availability_zone       = var.availability_zones[count.index]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "${var.environment}-public-${count.index + 1}"
    Type = "public"
  }
}

output "vpc_id" {
  value = aws_vpc.this.id
}

output "public_subnet_ids" {
  value = aws_subnet.public[*].id
}

# Root module usage
module "vpc" {
  source = "./modules/vpc"
  
  cidr_block         = "10.0.0.0/16"
  environment        = var.environment
  availability_zones = data.aws_availability_zones.available.names
}
```

### Functions & Expressions
```hcl
# Built-in functions
locals {
  common_tags = {
    Environment = var.environment
    Project     = var.project_name
    Owner       = var.owner
    CreatedBy   = "terraform"
  }
  
  # String functions
  vpc_name = upper("${var.environment}-vpc")
  
  # Collection functions
  subnet_cidrs = [for i in range(3) : cidrsubnet("10.0.0.0/16", 8, i)]
  
  # Conditional expressions
  instance_type = var.environment == "prod" ? "t3.large" : "t3.micro"
  
  # For expressions
  subnet_map = {
    for subnet in aws_subnet.public :
    subnet.availability_zone => subnet.id
  }
}

# Dynamic blocks
resource "aws_security_group" "web" {
  name_prefix = "${var.environment}-web-"
  vpc_id      = module.vpc.vpc_id
  
  dynamic "ingress" {
    for_each = var.allowed_ports
    content {
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
  
  tags = local.common_tags
}
```

### Data Types & Validation
```hcl
# Variable types
variable "instance_config" {
  description = "Instance configuration"
  type = object({
    instance_type = string
    ami_id        = string
    key_name      = string
    subnet_id     = string
    security_groups = list(string)
    user_data     = optional(string)
    tags          = map(string)
  })
  
  validation {
    condition = contains([
      "t3.micro", "t3.small", "t3.medium", "t3.large"
    ], var.instance_config.instance_type)
    error_message = "Instance type must be a valid t3 type."
  }
}

# Complex data structures
variable "environments" {
  description = "Environment configurations"
  type = map(object({
    vpc_cidr    = string
    instance_count = number
    instance_type  = string
    enable_monitoring = bool
    tags = map(string)
  }))
  
  default = {
    dev = {
      vpc_cidr    = "10.0.0.0/16"
      instance_count = 1
      instance_type  = "t3.micro"
      enable_monitoring = false
      tags = {
        Environment = "development"
      }
    }
    prod = {
      vpc_cidr    = "10.1.0.0/16"
      instance_count = 3
      instance_type  = "t3.large"
      enable_monitoring = true
      tags = {
        Environment = "production"
      }
    }
  }
}
```

## Week 3: Multi-Cloud & Advanced Patterns 🟠

### Multi-Provider Setup
```hcl
# Multi-cloud configuration
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
}

# AWS provider
provider "aws" {
  region = "us-west-2"
  alias  = "us_west"
}

provider "aws" {
  region = "us-east-1"
  alias  = "us_east"
}

# Azure provider
provider "azurerm" {
  features {}
}

# GCP provider
provider "google" {
  project = var.gcp_project_id
  region  = "us-central1"
}

# Multi-region resources
resource "aws_vpc" "west" {
  provider   = aws.us_west
  cidr_block = "10.0.0.0/16"
}

resource "aws_vpc" "east" {
  provider   = aws.us_east
  cidr_block = "10.1.0.0/16"
}
```

### Advanced State Management
```hcl
# Remote state data source
data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "terraform-state-bucket"
    key    = "network/terraform.tfstate"
    region = "us-west-2"
  }
}

# Using remote state
resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  subnet_id     = data.terraform_remote_state.network.outputs.public_subnet_ids[0]
  
  tags = {
    Name = "web-server"
  }
}

# Partial configuration
terraform {
  backend "s3" {}
}

# backend.hcl
bucket         = "terraform-state-bucket"
key            = "app/terraform.tfstate"
region         = "us-west-2"
encrypt        = true
dynamodb_table = "terraform-locks"

# Initialize with backend config
terraform init -backend-config=backend.hcl
```

### Provisioners & Null Resources
```hcl
# File provisioner
resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  key_name      = var.key_name
  
  provisioner "file" {
    source      = "scripts/setup.sh"
    destination = "/tmp/setup.sh"
    
    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file(var.private_key_path)
      host        = self.public_ip
    }
  }
  
  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/setup.sh",
      "/tmp/setup.sh"
    ]
    
    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file(var.private_key_path)
      host        = self.public_ip
    }
  }
}

# Null resource for triggers
resource "null_resource" "cluster" {
  triggers = {
    cluster_instance_ids = join(",", aws_instance.cluster[*].id)
  }
  
  provisioner "local-exec" {
    command = "echo 'Cluster instances: ${join(",", aws_instance.cluster[*].id)}'"
  }
}
```

## Week 4: Testing & Production Practices 🔴

### Testing Infrastructure
```hcl
# Terratest example (Go)
package test

import (
    "testing"
    "github.com/gruntwork-io/terratest/modules/terraform"
    "github.com/stretchr/testify/assert"
)

func TestVPCCreation(t *testing.T) {
    terraformOptions := &terraform.Options{
        TerraformDir: "../examples/vpc",
        Vars: map[string]interface{}{
            "environment": "test",
            "cidr_block":  "10.0.0.0/16",
        },
    }
    
    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)
    
    vpcId := terraform.Output(t, terraformOptions, "vpc_id")
    assert.NotEmpty(t, vpcId)
}

# Kitchen-Terraform (Ruby)
# .kitchen.yml
driver:
  name: terraform
  root_module_directory: test/fixtures

verifier:
  name: terraform
  systems:
    - name: aws
      backend: aws

suites:
  - name: vpc
    verifier:
      systems:
        - name: aws
          controls:
            - vpc_exists
```

### CI/CD Integration
```yaml
# .github/workflows/terraform.yml
name: Terraform

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  terraform:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v2
      with:
        terraform_version: 1.5.0
    
    - name: Terraform Format
      run: terraform fmt -check
    
    - name: Terraform Init
      run: terraform init
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    
    - name: Terraform Validate
      run: terraform validate
    
    - name: Terraform Plan
      run: terraform plan -no-color
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    
    - name: Terraform Apply
      if: github.ref == 'refs/heads/main'
      run: terraform apply -auto-approve
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### Security & Compliance
```hcl
# Security scanning with Checkov
# .checkov.yml
framework:
  - terraform
  - secrets
  - dockerfile

check:
  - CKV_AWS_20  # S3 bucket public access
  - CKV_AWS_21  # S3 bucket versioning
  - CKV_AWS_23  # Security group ingress

skip-check:
  - CKV_AWS_8   # Skip specific check

# Policy as Code with Sentinel
# policy.sentinel
import "tfplan/v2" as tfplan

# Require specific tags
required_tags = ["Environment", "Owner", "Project"]

main = rule {
    all tfplan.resource_changes as _, rc {
        rc.type in ["aws_instance", "aws_vpc"] implies
        all required_tags as tag {
            rc.change.after.tags[tag] else false
        }
    }
}

# OPA/Rego policy
package terraform.security

deny[msg] {
    resource := input.resource_changes[_]
    resource.type == "aws_security_group"
    rule := resource.change.after.ingress[_]
    rule.cidr_blocks[_] == "0.0.0.0/0"
    rule.from_port == 22
    msg := "SSH access from 0.0.0.0/0 is not allowed"
}
```

### Production Best Practices
```hcl
# Environment separation
# environments/prod/main.tf
module "infrastructure" {
  source = "../../modules/infrastructure"
  
  environment = "prod"
  vpc_cidr    = "10.0.0.0/16"
  
  instance_config = {
    instance_type = "t3.large"
    min_size      = 3
    max_size      = 10
    desired_size  = 5
  }
  
  backup_retention = 30
  monitoring_enabled = true
  
  tags = {
    Environment = "production"
    Owner       = "platform-team"
    Project     = "main-app"
  }
}

# Disaster recovery
resource "aws_s3_bucket_replication_configuration" "replication" {
  role   = aws_iam_role.replication.arn
  bucket = aws_s3_bucket.source.id
  
  rule {
    id     = "replicate-everything"
    status = "Enabled"
    
    destination {
      bucket        = aws_s3_bucket.destination.arn
      storage_class = "STANDARD_IA"
    }
  }
}

# Cost optimization
resource "aws_autoscaling_schedule" "scale_down" {
  scheduled_action_name  = "scale-down-evening"
  min_size               = 1
  max_size               = 3
  desired_capacity       = 1
  recurrence            = "0 18 * * MON-FRI"
  autoscaling_group_name = aws_autoscaling_group.web.name
}

resource "aws_autoscaling_schedule" "scale_up" {
  scheduled_action_name  = "scale-up-morning"
  min_size               = 3
  max_size               = 10
  desired_capacity       = 5
  recurrence            = "0 8 * * MON-FRI"
  autoscaling_group_name = aws_autoscaling_group.web.name
}
```

## Interview Questions
1. Terraform state management strategies
2. Module design best practices
3. Provider configuration and versioning
4. Resource lifecycle management
5. Workspace usage patterns
6. Security and compliance implementation
7. CI/CD integration approaches
8. Troubleshooting common issues
9. Multi-cloud deployment strategies
10. Cost optimization techniques

## Hands-on Projects
- Multi-tier AWS infrastructure
- Kubernetes cluster provisioning
- Multi-cloud deployment
- CI/CD pipeline integration
- Disaster recovery setup

## Certification
- **HashiCorp Certified: Terraform Associate**
- **HashiCorp Certified: Terraform Professional**