# ☁️ Module 4: Cloud Platforms & Infrastructure - Complete Course

## Week 10: AWS Fundamentals

### Day 1-2: AWS Core Services

#### Understanding Cloud Computing

**Cloud Service Models:**
- **IaaS (Infrastructure as a Service)**: EC2, VPC, S3
- **PaaS (Platform as a Service)**: Elastic Beanstalk, Lambda
- **SaaS (Software as a Service)**: WorkMail, Chime

**AWS Global Infrastructure:**
- **Regions**: Geographic areas with multiple AZs
- **Availability Zones**: Isolated data centers
- **Edge Locations**: CloudFront content delivery

#### AWS CLI Setup

**Installation:**
```bash
# Linux/macOS
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Windows
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

# Verify installation
aws --version
```

**Configuration:**
```bash
# Configure AWS CLI
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region name: us-west-2
# Default output format: json

# Alternative: using profiles
aws configure --profile production
aws configure --profile development

# Use specific profile
aws s3 ls --profile production
```

**Environment Variables:**
```bash
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_DEFAULT_REGION=us-west-2
export AWS_PROFILE=production
```

#### EC2 (Elastic Compute Cloud)

**Instance Types:**
- **General Purpose**: t3, m5 (balanced compute, memory, networking)
- **Compute Optimized**: c5 (high-performance processors)
- **Memory Optimized**: r5, x1 (fast performance for memory-intensive workloads)
- **Storage Optimized**: i3, d2 (high sequential read/write access)

**Launch EC2 Instance:**
```bash
# List available AMIs
aws ec2 describe-images \
    --owners amazon \
    --filters "Name=name,Values=amzn2-ami-hvm-*" \
    --query 'Images[*].[ImageId,Name,CreationDate]' \
    --output table

# Create key pair
aws ec2 create-key-pair \
    --key-name my-key-pair \
    --query 'KeyMaterial' \
    --output text > my-key-pair.pem
chmod 400 my-key-pair.pem

# Launch instance
aws ec2 run-instances \
    --image-id ami-0abcdef1234567890 \
    --instance-type t3.micro \
    --key-name my-key-pair \
    --security-group-ids sg-12345678 \
    --subnet-id subnet-12345678 \
    --user-data file://user-data.sh \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]'

# List instances
aws ec2 describe-instances \
    --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress,Tags[?Key==`Name`].Value|[0]]' \
    --output table

# Connect to instance
ssh -i my-key-pair.pem ec2-user@PUBLIC_IP
```

**User Data Script:**
```bash
#!/bin/bash
# user-data.sh
yum update -y
yum install -y docker
service docker start
usermod -a -G docker ec2-user

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Start application
docker run -d -p 80:3000 my-app:latest
```

#### S3 (Simple Storage Service)

**Bucket Operations:**
```bash
# Create bucket
aws s3 mb s3://my-unique-bucket-name-12345

# List buckets
aws s3 ls

# Upload file
aws s3 cp file.txt s3://my-unique-bucket-name-12345/
aws s3 cp folder/ s3://my-unique-bucket-name-12345/folder/ --recursive

# Download file
aws s3 cp s3://my-unique-bucket-name-12345/file.txt ./

# Sync directories
aws s3 sync ./dist s3://my-unique-bucket-name-12345/
aws s3 sync s3://my-unique-bucket-name-12345/ ./backup/

# Set bucket policy
aws s3api put-bucket-policy \
    --bucket my-unique-bucket-name-12345 \
    --policy file://bucket-policy.json
```

**Bucket Policy Example:**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::my-unique-bucket-name-12345/*"
        }
    ]
}
```

**S3 Website Hosting:**
```bash
# Enable website hosting
aws s3 website s3://my-unique-bucket-name-12345 \
    --index-document index.html \
    --error-document error.html

# Upload website files
aws s3 sync ./website s3://my-unique-bucket-name-12345/ \
    --delete \
    --cache-control max-age=3600
```

### Day 3-4: VPC & Networking

#### Virtual Private Cloud (VPC)

**VPC Components:**
- **Subnets**: Segments of VPC IP address range
- **Route Tables**: Control traffic routing
- **Internet Gateway**: Connect to internet
- **NAT Gateway**: Outbound internet access for private subnets
- **Security Groups**: Instance-level firewall
- **NACLs**: Subnet-level firewall

**Create VPC:**
```bash
# Create VPC
VPC_ID=$(aws ec2 create-vpc \
    --cidr-block 10.0.0.0/16 \
    --query 'Vpc.VpcId' \
    --output text)

# Enable DNS hostnames
aws ec2 modify-vpc-attribute \
    --vpc-id $VPC_ID \
    --enable-dns-hostnames

# Create Internet Gateway
IGW_ID=$(aws ec2 create-internet-gateway \
    --query 'InternetGateway.InternetGatewayId' \
    --output text)

# Attach Internet Gateway to VPC
aws ec2 attach-internet-gateway \
    --internet-gateway-id $IGW_ID \
    --vpc-id $VPC_ID
```

**Create Subnets:**
```bash
# Public subnet
PUBLIC_SUBNET_ID=$(aws ec2 create-subnet \
    --vpc-id $VPC_ID \
    --cidr-block 10.0.1.0/24 \
    --availability-zone us-west-2a \
    --query 'Subnet.SubnetId' \
    --output text)

# Private subnet
PRIVATE_SUBNET_ID=$(aws ec2 create-subnet \
    --vpc-id $VPC_ID \
    --cidr-block 10.0.2.0/24 \
    --availability-zone us-west-2b \
    --query 'Subnet.SubnetId' \
    --output text)

# Enable auto-assign public IP for public subnet
aws ec2 modify-subnet-attribute \
    --subnet-id $PUBLIC_SUBNET_ID \
    --map-public-ip-on-launch
```

**Configure Route Tables:**
```bash
# Create route table for public subnet
PUBLIC_RT_ID=$(aws ec2 create-route-table \
    --vpc-id $VPC_ID \
    --query 'RouteTable.RouteTableId' \
    --output text)

# Add route to Internet Gateway
aws ec2 create-route \
    --route-table-id $PUBLIC_RT_ID \
    --destination-cidr-block 0.0.0.0/0 \
    --gateway-id $IGW_ID

# Associate route table with public subnet
aws ec2 associate-route-table \
    --route-table-id $PUBLIC_RT_ID \
    --subnet-id $PUBLIC_SUBNET_ID

# Create NAT Gateway for private subnet
NAT_GW_ID=$(aws ec2 create-nat-gateway \
    --subnet-id $PUBLIC_SUBNET_ID \
    --allocation-id $(aws ec2 allocate-address --domain vpc --query 'AllocationId' --output text) \
    --query 'NatGateway.NatGatewayId' \
    --output text)

# Create route table for private subnet
PRIVATE_RT_ID=$(aws ec2 create-route-table \
    --vpc-id $VPC_ID \
    --query 'RouteTable.RouteTableId' \
    --output text)

# Add route to NAT Gateway
aws ec2 create-route \
    --route-table-id $PRIVATE_RT_ID \
    --destination-cidr-block 0.0.0.0/0 \
    --nat-gateway-id $NAT_GW_ID

# Associate route table with private subnet
aws ec2 associate-route-table \
    --route-table-id $PRIVATE_RT_ID \
    --subnet-id $PRIVATE_SUBNET_ID
```

#### Security Groups and NACLs

**Security Groups:**
```bash
# Create security group
SG_ID=$(aws ec2 create-security-group \
    --group-name web-server-sg \
    --description "Security group for web servers" \
    --vpc-id $VPC_ID \
    --query 'GroupId' \
    --output text)

# Add inbound rules
aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 443 \
    --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 22 \
    --cidr 10.0.0.0/16
```

**Network ACLs:**
```bash
# Create Network ACL
NACL_ID=$(aws ec2 create-network-acl \
    --vpc-id $VPC_ID \
    --query 'NetworkAcl.NetworkAclId' \
    --output text)

# Add inbound rule
aws ec2 create-network-acl-entry \
    --network-acl-id $NACL_ID \
    --rule-number 100 \
    --protocol tcp \
    --port-range From=80,To=80 \
    --cidr-block 0.0.0.0/0 \
    --rule-action allow

# Add outbound rule
aws ec2 create-network-acl-entry \
    --network-acl-id $NACL_ID \
    --rule-number 100 \
    --protocol tcp \
    --port-range From=1024,To=65535 \
    --cidr-block 0.0.0.0/0 \
    --rule-action allow \
    --egress
```

### Day 5-7: Application Deployment

#### RDS (Relational Database Service)

**Create RDS Instance:**
```bash
# Create DB subnet group
aws rds create-db-subnet-group \
    --db-subnet-group-name my-db-subnet-group \
    --db-subnet-group-description "Subnet group for RDS" \
    --subnet-ids $PRIVATE_SUBNET_ID subnet-another-private

# Create RDS instance
aws rds create-db-instance \
    --db-instance-identifier myapp-db \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --master-username admin \
    --master-user-password mypassword \
    --allocated-storage 20 \
    --vpc-security-group-ids $DB_SG_ID \
    --db-subnet-group-name my-db-subnet-group \
    --backup-retention-period 7 \
    --storage-encrypted

# Get RDS endpoint
aws rds describe-db-instances \
    --db-instance-identifier myapp-db \
    --query 'DBInstances[0].Endpoint.Address' \
    --output text
```

#### ECS (Elastic Container Service)

**Create ECS Cluster:**
```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name my-cluster

# Create task definition
aws ecs register-task-definition \
    --cli-input-json file://task-definition.json

# Create service
aws ecs create-service \
    --cluster my-cluster \
    --service-name my-service \
    --task-definition my-app:1 \
    --desired-count 2 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[$PRIVATE_SUBNET_ID],securityGroups=[$SG_ID],assignPublicIp=ENABLED}"
```

**Task Definition:**
```json
{
    "family": "my-app",
    "networkMode": "awsvpc",
    "requiresCompatibilities": ["FARGATE"],
    "cpu": "256",
    "memory": "512",
    "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
    "containerDefinitions": [
        {
            "name": "my-app",
            "image": "my-app:latest",
            "portMappings": [
                {
                    "containerPort": 3000,
                    "protocol": "tcp"
                }
            ],
            "environment": [
                {
                    "name": "NODE_ENV",
                    "value": "production"
                }
            ],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/my-app",
                    "awslogs-region": "us-west-2",
                    "awslogs-stream-prefix": "ecs"
                }
            }
        }
    ]
}
```

#### Application Load Balancer

**Create ALB:**
```bash
# Create Application Load Balancer
ALB_ARN=$(aws elbv2 create-load-balancer \
    --name my-app-alb \
    --subnets $PUBLIC_SUBNET_ID subnet-another-public \
    --security-groups $ALB_SG_ID \
    --query 'LoadBalancers[0].LoadBalancerArn' \
    --output text)

# Create target group
TG_ARN=$(aws elbv2 create-target-group \
    --name my-app-targets \
    --protocol HTTP \
    --port 3000 \
    --vpc-id $VPC_ID \
    --target-type ip \
    --health-check-path /health \
    --query 'TargetGroups[0].TargetGroupArn' \
    --output text)

# Create listener
aws elbv2 create-listener \
    --load-balancer-arn $ALB_ARN \
    --protocol HTTP \
    --port 80 \
    --default-actions Type=forward,TargetGroupArn=$TG_ARN
```

---

## Week 11: Infrastructure as Code

### Day 1-3: Terraform Basics

#### Understanding Infrastructure as Code

**Benefits of IaC:**
- Version control for infrastructure
- Reproducible environments
- Automated provisioning
- Reduced human error
- Cost optimization

**Terraform Core Concepts:**
- **Providers**: Interface to APIs (AWS, Azure, GCP)
- **Resources**: Infrastructure components
- **Data Sources**: Read-only information
- **Variables**: Input parameters
- **Outputs**: Return values
- **Modules**: Reusable configurations

#### Terraform Installation

```bash
# Download and install Terraform
wget https://releases.hashicorp.com/terraform/1.5.0/terraform_1.5.0_linux_amd64.zip
unzip terraform_1.5.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/

# Verify installation
terraform version
```

#### Basic Terraform Configuration

**main.tf:**
```hcl
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
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "staging"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

# Data sources
data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "${var.environment}-vpc"
    Environment = var.environment
  }
}

# Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "${var.environment}-igw"
    Environment = var.environment
  }
}

# Public Subnets
resource "aws_subnet" "public" {
  count = 2

  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name        = "${var.environment}-public-subnet-${count.index + 1}"
    Environment = var.environment
  }
}

# Route Table
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name        = "${var.environment}-public-rt"
    Environment = var.environment
  }
}

# Route Table Association
resource "aws_route_table_association" "public" {
  count = length(aws_subnet.public)

  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# Security Group
resource "aws_security_group" "web" {
  name        = "${var.environment}-web-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.environment}-web-sg"
    Environment = var.environment
  }
}

# Outputs
output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value       = aws_subnet.public[*].id
}

output "security_group_id" {
  description = "ID of the security group"
  value       = aws_security_group.web.id
}
```

**terraform.tfvars:**
```hcl
aws_region    = "us-west-2"
environment   = "production"
instance_type = "t3.small"
```

#### Terraform Commands

```bash
# Initialize Terraform
terraform init

# Validate configuration
terraform validate

# Plan changes
terraform plan
terraform plan -var-file="production.tfvars"

# Apply changes
terraform apply
terraform apply -auto-approve

# Show current state
terraform show
terraform state list

# Destroy infrastructure
terraform destroy
```

### Day 4-5: Advanced Terraform

#### Terraform Modules

**Module Structure:**
```
modules/
├── vpc/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── ec2/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── rds/
    ├── main.tf
    ├── variables.tf
    └── outputs.tf
```

**modules/ec2/main.tf:**
```hcl
resource "aws_launch_template" "web" {
  name_prefix   = "${var.environment}-web-"
  image_id      = var.ami_id
  instance_type = var.instance_type

  vpc_security_group_ids = [var.security_group_id]

  user_data = base64encode(templatefile("${path.module}/user_data.sh", {
    environment = var.environment
    app_name    = var.app_name
  }))

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name        = "${var.environment}-web-instance"
      Environment = var.environment
    }
  }
}

resource "aws_autoscaling_group" "web" {
  name                = "${var.environment}-web-asg"
  vpc_zone_identifier = var.subnet_ids
  target_group_arns   = [aws_lb_target_group.web.arn]
  health_check_type   = "ELB"

  min_size         = var.min_size
  max_size         = var.max_size
  desired_capacity = var.desired_capacity

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "${var.environment}-web-asg"
    propagate_at_launch = true
  }

  tag {
    key                 = "Environment"
    value               = var.environment
    propagate_at_launch = true
  }
}

resource "aws_lb" "web" {
  name               = "${var.environment}-web-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.security_group_id]
  subnets            = var.subnet_ids

  tags = {
    Name        = "${var.environment}-web-alb"
    Environment = var.environment
  }
}

resource "aws_lb_target_group" "web" {
  name     = "${var.environment}-web-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    enabled             = true
    healthy_threshold   = 2
    interval            = 30
    matcher             = "200"
    path                = "/health"
    port                = "traffic-port"
    protocol            = "HTTP"
    timeout             = 5
    unhealthy_threshold = 2
  }

  tags = {
    Name        = "${var.environment}-web-tg"
    Environment = var.environment
  }
}

resource "aws_lb_listener" "web" {
  load_balancer_arn = aws_lb.web.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web.arn
  }
}
```

**modules/ec2/variables.tf:**
```hcl
variable "environment" {
  description = "Environment name"
  type        = string
}

variable "app_name" {
  description = "Application name"
  type        = string
}

variable "ami_id" {
  description = "AMI ID for instances"
  type        = string
}

variable "instance_type" {
  description = "Instance type"
  type        = string
  default     = "t3.micro"
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs"
  type        = list(string)
}

variable "security_group_id" {
  description = "Security group ID"
  type        = string
}

variable "min_size" {
  description = "Minimum number of instances"
  type        = number
  default     = 1
}

variable "max_size" {
  description = "Maximum number of instances"
  type        = number
  default     = 3
}

variable "desired_capacity" {
  description = "Desired number of instances"
  type        = number
  default     = 2
}
```

**Using Modules:**
```hcl
module "vpc" {
  source = "./modules/vpc"
  
  environment = var.environment
  cidr_block  = "10.0.0.0/16"
}

module "ec2" {
  source = "./modules/ec2"
  
  environment       = var.environment
  app_name         = "my-app"
  ami_id           = data.aws_ami.amazon_linux.id
  instance_type    = var.instance_type
  vpc_id           = module.vpc.vpc_id
  subnet_ids       = module.vpc.public_subnet_ids
  security_group_id = module.vpc.security_group_id
  min_size         = 1
  max_size         = 5
  desired_capacity = 2
}
```

### Day 6-7: State Management

#### Remote State Backend

**S3 Backend Configuration:**
```hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "prod/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}
```

**Create S3 Backend Resources:**
```bash
# Create S3 bucket for state
aws s3 mb s3://my-terraform-state-bucket

# Enable versioning
aws s3api put-bucket-versioning \
    --bucket my-terraform-state-bucket \
    --versioning-configuration Status=Enabled

# Create DynamoDB table for state locking
aws dynamodb create-table \
    --table-name terraform-state-lock \
    --attribute-definitions AttributeName=LockID,AttributeType=S \
    --key-schema AttributeName=LockID,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

#### Terraform Workspaces

```bash
# List workspaces
terraform workspace list

# Create new workspace
terraform workspace new production
terraform workspace new staging

# Switch workspace
terraform workspace select production

# Show current workspace
terraform workspace show

# Delete workspace
terraform workspace delete staging
```

**Workspace-specific Configuration:**
```hcl
locals {
  environment_config = {
    staging = {
      instance_type = "t3.micro"
      min_size     = 1
      max_size     = 2
    }
    production = {
      instance_type = "t3.small"
      min_size     = 2
      max_size     = 10
    }
  }
  
  config = local.environment_config[terraform.workspace]
}

resource "aws_autoscaling_group" "web" {
  min_size         = local.config.min_size
  max_size         = local.config.max_size
  desired_capacity = local.config.min_size
  
  # ... other configuration
}
```

---

## Week 12: Monitoring & Maintenance

### Day 1-2: Application Monitoring

#### Prometheus Setup

**docker-compose.yml for Monitoring Stack:**
```yaml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=200h'
      - '--web.enable-lifecycle'

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning

  node-exporter:
    image: prom/node-exporter:latest
    container_name: node-exporter
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'

  alertmanager:
    image: prom/alertmanager:latest
    container_name: alertmanager
    ports:
      - "9093:9093"
    volumes:
      - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml

volumes:
  prometheus_data:
  grafana_data:
```

**prometheus.yml:**
```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'my-app'
    static_configs:
      - targets: ['my-app:3000']
    metrics_path: /metrics
    scrape_interval: 5s

  - job_name: 'docker'
    static_configs:
      - targets: ['docker-host:9323']
```

**Application Metrics (Node.js Example):**
```javascript
// metrics.js
const promClient = require('prom-client');

// Create a Registry
const register = new promClient.Registry();

// Add default metrics
promClient.collectDefaultMetrics({
  register,
  timeout: 5000,
  gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
});

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

const activeConnections = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);
register.registerMetric(activeConnections);

// Middleware to collect metrics
const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route ? req.route.path : req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
    
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
  });
  
  next();
};

module.exports = {
  register,
  metricsMiddleware,
  activeConnections
};
```

#### Alert Rules

**alert_rules.yml:**
```yaml
groups:
- name: application.rules
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
    for: 2m
    labels:
      severity: critical
    annotations:
      summary: "High error rate detected"
      description: "Error rate is {{ $value | humanizePercentage }} for {{ $labels.instance }}"

  - alert: HighResponseTime
    expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: "High response time detected"
      description: "95th percentile response time is {{ $value }}s for {{ $labels.instance }}"

  - alert: HighCPUUsage
    expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "High CPU usage detected"
      description: "CPU usage is {{ $value }}% for {{ $labels.instance }}"

  - alert: HighMemoryUsage
    expr: (1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100 > 90
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High memory usage detected"
      description: "Memory usage is {{ $value }}% for {{ $labels.instance }}"

  - alert: DiskSpaceLow
    expr: (1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes)) * 100 > 85
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "Low disk space detected"
      description: "Disk usage is {{ $value }}% for {{ $labels.instance }}"
```

### Day 3-4: Log Management

#### ELK Stack Setup

**docker-compose.yml for ELK:**
```yaml
version: '3.8'

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.8.0
    container_name: elasticsearch
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  logstash:
    image: docker.elastic.co/logstash/logstash:8.8.0
    container_name: logstash
    ports:
      - "5044:5044"
      - "5000:5000/tcp"
      - "5000:5000/udp"
      - "9600:9600"
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline:ro
      - ./logstash/config:/usr/share/logstash/config:ro
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.8.0
    container_name: kibana
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    depends_on:
      - elasticsearch

  filebeat:
    image: docker.elastic.co/beats/filebeat:8.8.0
    container_name: filebeat
    user: root
    volumes:
      - ./filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
    depends_on:
      - elasticsearch
      - logstash

volumes:
  elasticsearch_data:
```

**logstash/pipeline/logstash.conf:**
```ruby
input {
  beats {
    port => 5044
  }
  
  tcp {
    port => 5000
    codec => json_lines
  }
}

filter {
  if [fields][log_type] == "application" {
    grok {
      match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}" }
    }
    
    date {
      match => [ "timestamp", "ISO8601" ]
    }
    
    if [level] == "ERROR" {
      mutate {
        add_tag => [ "error" ]
      }
    }
  }
  
  if [fields][log_type] == "nginx" {
    grok {
      match => { "message" => "%{NGINXACCESS}" }
    }
    
    mutate {
      convert => { "response" => "integer" }
      convert => { "bytes" => "integer" }
      convert => { "responsetime" => "float" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
  
  stdout {
    codec => rubydebug
  }
}
```

**filebeat/filebeat.yml:**
```yaml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/lib/docker/containers/*/*.log
  json.keys_under_root: true
  json.add_error_key: true
  fields:
    log_type: docker
  fields_under_root: true

- type: log
  enabled: true
  paths:
    - /var/log/nginx/access.log
  fields:
    log_type: nginx
  fields_under_root: true

output.logstash:
  hosts: ["logstash:5044"]

processors:
- add_docker_metadata:
    host: "unix:///var/run/docker.sock"

logging.level: info
logging.to_files: true
logging.files:
  path: /var/log/filebeat
  name: filebeat
  keepfiles: 7
  permissions: 0644
```

#### Application Logging

**Structured Logging (Node.js):**
```javascript
// logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'my-app' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Log correlation middleware
const correlationMiddleware = (req, res, next) => {
  req.correlationId = require('uuid').v4();
  res.setHeader('X-Correlation-ID', req.correlationId);
  
  logger.info('Request started', {
    correlationId: req.correlationId,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip
  });
  
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      correlationId: req.correlationId,
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: duration
    });
  });
  
  next();
};

module.exports = { logger, correlationMiddleware };
```

### Day 5-7: Disaster Recovery

#### Backup Strategies

**Automated Database Backup:**
```bash
#!/bin/bash
# backup-database.sh

set -e

# Configuration
DB_HOST="myapp-db.cluster-xyz.us-west-2.rds.amazonaws.com"
DB_NAME="myapp"
DB_USER="admin"
DB_PASSWORD="$DB_PASSWORD"  # From environment variable
BACKUP_DIR="/backups"
S3_BUCKET="my-backup-bucket"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# PostgreSQL backup
pg_dump -h $DB_HOST -U $DB_USER -d $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

# Compress backup
gzip $BACKUP_DIR/db_backup_$DATE.sql

# Upload to S3
aws s3 cp $BACKUP_DIR/db_backup_$DATE.sql.gz s3://$S3_BUCKET/database/

# Cleanup old local backups (keep last 7 days)
find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +7 -delete

# Cleanup old S3 backups (keep last 30 days)
aws s3 ls s3://$S3_BUCKET/database/ | while read -r line; do
  createDate=$(echo $line | awk '{print $1" "$2}')
  createDate=$(date -d "$createDate" +%s)
  olderThan=$(date -d "30 days ago" +%s)
  
  if [[ $createDate -lt $olderThan ]]; then
    fileName=$(echo $line | awk '{print $4}')
    if [[ $fileName != "" ]]; then
      aws s3 rm s3://$S3_BUCKET/database/$fileName
    fi
  fi
done

echo "Database backup completed: db_backup_$DATE.sql.gz"
```

**Application Files Backup:**
```bash
#!/bin/bash
# backup-application.sh

set -e

APP_DIR="/var/www/myapp"
BACKUP_DIR="/backups"
S3_BUCKET="my-backup-bucket"
DATE=$(date +%Y%m%d_%H%M%S)

# Create application backup
tar -czf $BACKUP_DIR/app_backup_$DATE.tar.gz -C $APP_DIR .

# Upload to S3
aws s3 cp $BACKUP_DIR/app_backup_$DATE.tar.gz s3://$S3_BUCKET/application/

# Cleanup old backups
find $BACKUP_DIR -name "app_backup_*.tar.gz" -mtime +7 -delete

echo "Application backup completed: app_backup_$DATE.tar.gz"
```

#### Disaster Recovery Plan

**Recovery Procedures:**
```bash
#!/bin/bash
# disaster-recovery.sh

set -e

ENVIRONMENT=$1
BACKUP_DATE=$2

if [ -z "$ENVIRONMENT" ] || [ -z "$BACKUP_DATE" ]; then
    echo "Usage: $0 <environment> <backup_date>"
    echo "Example: $0 production 20231201_120000"
    exit 1
fi

echo "Starting disaster recovery for $ENVIRONMENT environment..."

# 1. Restore Infrastructure
echo "Restoring infrastructure..."
cd terraform/
terraform workspace select $ENVIRONMENT
terraform apply -auto-approve

# 2. Restore Database
echo "Restoring database..."
aws s3 cp s3://my-backup-bucket/database/db_backup_$BACKUP_DATE.sql.gz ./
gunzip db_backup_$BACKUP_DATE.sql.gz

# Wait for RDS to be available
DB_ENDPOINT=$(terraform output -raw db_endpoint)
while ! pg_isready -h $DB_ENDPOINT; do
    echo "Waiting for database to be ready..."
    sleep 30
done

# Restore database
psql -h $DB_ENDPOINT -U admin -d myapp < db_backup_$BACKUP_DATE.sql

# 3. Deploy Application
echo "Deploying application..."
aws s3 cp s3://my-backup-bucket/application/app_backup_$BACKUP_DATE.tar.gz ./
tar -xzf app_backup_$BACKUP_DATE.tar.gz -C /tmp/app-restore/

# Build and deploy
cd /tmp/app-restore/
docker build -t my-app:recovery .
docker tag my-app:recovery my-registry.com/my-app:recovery
docker push my-registry.com/my-app:recovery

# Update ECS service
aws ecs update-service \
    --cluster my-cluster \
    --service my-service \
    --task-definition my-app:recovery

# 4. Verify Recovery
echo "Verifying recovery..."
sleep 60

HEALTH_CHECK_URL="http://$(terraform output -raw load_balancer_dns)/health"
if curl -f $HEALTH_CHECK_URL; then
    echo "✅ Disaster recovery completed successfully!"
else
    echo "❌ Health check failed. Manual intervention required."
    exit 1
fi

# 5. Send Notification
curl -X POST -H 'Content-type: application/json' \
    --data "{\"text\":\"🚀 Disaster recovery completed for $ENVIRONMENT environment\"}" \
    $SLACK_WEBHOOK_URL

echo "Disaster recovery process completed."
```

#### Monitoring and Testing

**Backup Verification:**
```bash
#!/bin/bash
# verify-backups.sh

S3_BUCKET="my-backup-bucket"
TEMP_DIR="/tmp/backup-test"

# Test database backup
echo "Testing database backup..."
LATEST_DB_BACKUP=$(aws s3 ls s3://$S3_BUCKET/database/ | sort | tail -n 1 | awk '{print $4}')
aws s3 cp s3://$S3_BUCKET/database/$LATEST_DB_BACKUP $TEMP_DIR/
gunzip $TEMP_DIR/$LATEST_DB_BACKUP

# Verify backup integrity
if pg_restore --list $TEMP_DIR/${LATEST_DB_BACKUP%.gz} > /dev/null 2>&1; then
    echo "✅ Database backup is valid"
else
    echo "❌ Database backup is corrupted"
    exit 1
fi

# Test application backup
echo "Testing application backup..."
LATEST_APP_BACKUP=$(aws s3 ls s3://$S3_BUCKET/application/ | sort | tail -n 1 | awk '{print $4}')
aws s3 cp s3://$S3_BUCKET/application/$LATEST_APP_BACKUP $TEMP_DIR/

# Verify backup integrity
if tar -tzf $TEMP_DIR/$LATEST_APP_BACKUP > /dev/null 2>&1; then
    echo "✅ Application backup is valid"
else
    echo "❌ Application backup is corrupted"
    exit 1
fi

# Cleanup
rm -rf $TEMP_DIR

echo "All backups verified successfully!"
```

---

## 🎯 Week 10-12 Assessment Projects

### Week 10 Project: AWS Multi-Tier Application

**Requirements:**
1. Deploy VPC with public/private subnets
2. Set up RDS database in private subnet
3. Deploy application on EC2 with Auto Scaling
4. Configure Application Load Balancer
5. Implement proper security groups and NACLs

### Week 11 Project: Infrastructure as Code

**Requirements:**
1. Create Terraform modules for reusable components
2. Implement multi-environment support
3. Set up remote state management
4. Add proper variable validation and outputs
5. Document infrastructure architecture

### Week 12 Project: Complete Monitoring Solution

**Requirements:**
1. Set up Prometheus and Grafana monitoring
2. Implement ELK stack for log management
3. Create comprehensive alerting rules
4. Set up automated backup procedures
5. Document disaster recovery plan

---

## 🏆 Final DevOps Portfolio

### Capstone Project: End-to-End DevOps Pipeline

**Requirements:**
1. **Source Control**: Git workflow with proper branching strategy
2. **Containerization**: Multi-stage Docker builds with security scanning
3. **CI/CD**: Complete pipeline with testing, security, and deployment
4. **Infrastructure**: Terraform-managed AWS infrastructure
5. **Monitoring**: Full observability stack with metrics, logs, and alerts
6. **Security**: Implement security best practices throughout
7. **Documentation**: Comprehensive documentation and runbooks

**Deliverables:**
- Working application with complete DevOps pipeline
- Infrastructure as Code templates
- Monitoring and alerting setup
- Disaster recovery procedures
- Security compliance documentation
- Performance optimization report

---

**🎯 Congratulations! You've completed the comprehensive DevOps course and are now ready for DevOps Engineer positions!**