# 📜 Scripting & Automation - Complete Theory

## 📋 Scripting Fundamentals

### What is Scripting?
Scripting involves writing small programs to automate repetitive tasks, system administration, and workflow processes.

### Benefits of Scripting
- **Automation**: Eliminate manual repetitive tasks
- **Consistency**: Same results every time
- **Efficiency**: Save time and reduce errors
- **Scalability**: Handle large-scale operations
- **Documentation**: Scripts serve as executable documentation

## 🐚 Bash Scripting

### Basic Bash Syntax
```bash
#!/bin/bash
# Shebang line - specifies interpreter

# Variables
NAME="DevOps"
COUNT=10
CURRENT_DATE=$(date)

# Output
echo "Hello $NAME"
echo "Count: $COUNT"
echo "Today is: $CURRENT_DATE"

# Command substitution
FILES=$(ls -la)
USERS=$(who | wc -l)
```

### Control Structures
```bash
# Conditional statements
if [ $COUNT -gt 5 ]; then
    echo "Count is greater than 5"
elif [ $COUNT -eq 5 ]; then
    echo "Count equals 5"
else
    echo "Count is less than 5"
fi

# Case statement
case $1 in
    start)
        echo "Starting service..."
        ;;
    stop)
        echo "Stopping service..."
        ;;
    restart)
        echo "Restarting service..."
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac

# Loops
# For loop
for i in {1..5}; do
    echo "Number: $i"
done

for file in *.txt; do
    echo "Processing: $file"
done

# While loop
counter=1
while [ $counter -le 5 ]; do
    echo "Counter: $counter"
    ((counter++))
done

# Until loop
until [ $counter -gt 10 ]; do
    echo "Counter: $counter"
    ((counter++))
done
```

### Functions
```bash
# Function definition
function backup_files() {
    local source_dir=$1
    local backup_dir=$2
    local timestamp=$(date +%Y%m%d_%H%M%S)
    
    if [ ! -d "$backup_dir" ]; then
        mkdir -p "$backup_dir"
    fi
    
    tar -czf "$backup_dir/backup_$timestamp.tar.gz" "$source_dir"
    echo "Backup created: backup_$timestamp.tar.gz"
}

# Function with return value
function check_service() {
    local service_name=$1
    
    if systemctl is-active --quiet "$service_name"; then
        return 0  # Service is running
    else
        return 1  # Service is not running
    fi
}

# Usage
backup_files "/home/user/documents" "/backups"

if check_service "nginx"; then
    echo "Nginx is running"
else
    echo "Nginx is not running"
fi
```

### Advanced Bash Features
```bash
# Arrays
declare -a servers=("web1" "web2" "web3")
servers[3]="web4"

# Loop through array
for server in "${servers[@]}"; do
    echo "Checking server: $server"
    ping -c 1 "$server" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "$server is reachable"
    else
        echo "$server is unreachable"
    fi
done

# Associative arrays
declare -A config
config[database_host]="db.example.com"
config[database_port]="5432"
config[database_name]="myapp"

# Error handling
set -e  # Exit on any error
set -u  # Exit on undefined variable
set -o pipefail  # Exit on pipe failure

# Trap for cleanup
cleanup() {
    echo "Cleaning up temporary files..."
    rm -f /tmp/script_temp_*
}
trap cleanup EXIT

# Input validation
validate_input() {
    local input=$1
    
    if [[ ! "$input" =~ ^[a-zA-Z0-9_-]+$ ]]; then
        echo "Error: Invalid input format"
        exit 1
    fi
}

# Logging
LOG_FILE="/var/log/script.log"
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log "Script started"
```

## 🐍 Python Automation

### Python Basics for DevOps
```python
#!/usr/bin/env python3
import os
import sys
import subprocess
import json
import yaml
from datetime import datetime
import requests

# System operations
def run_command(command):
    """Execute shell command and return output"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True, 
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {e}")
        return None

# File operations
def read_config(config_file):
    """Read YAML configuration file"""
    try:
        with open(config_file, 'r') as file:
            return yaml.safe_load(file)
    except FileNotFoundError:
        print(f"Config file not found: {config_file}")
        return None

def write_json(data, filename):
    """Write data to JSON file"""
    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)

# API operations
def make_api_request(url, method='GET', data=None, headers=None):
    """Make HTTP API request"""
    try:
        if method == 'GET':
            response = requests.get(url, headers=headers)
        elif method == 'POST':
            response = requests.post(url, json=data, headers=headers)
        
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None

# Docker operations
def manage_docker_container(action, container_name):
    """Manage Docker containers"""
    commands = {
        'start': f'docker start {container_name}',
        'stop': f'docker stop {container_name}',
        'restart': f'docker restart {container_name}',
        'status': f'docker ps -f name={container_name}'
    }
    
    if action in commands:
        return run_command(commands[action])
    else:
        print(f"Unknown action: {action}")
        return None

# System monitoring
def check_disk_usage(threshold=80):
    """Check disk usage and alert if above threshold"""
    output = run_command("df -h | grep -E '^/dev/'")
    
    for line in output.split('\n'):
        parts = line.split()
        if len(parts) >= 5:
            usage = int(parts[4].rstrip('%'))
            mount_point = parts[5]
            
            if usage > threshold:
                print(f"WARNING: {mount_point} is {usage}% full")
                return False
    
    return True

# Log analysis
def analyze_logs(log_file, pattern):
    """Analyze log files for specific patterns"""
    import re
    
    matches = []
    try:
        with open(log_file, 'r') as file:
            for line_num, line in enumerate(file, 1):
                if re.search(pattern, line):
                    matches.append({
                        'line_number': line_num,
                        'content': line.strip(),
                        'timestamp': datetime.now().isoformat()
                    })
    except FileNotFoundError:
        print(f"Log file not found: {log_file}")
    
    return matches

# Example usage
if __name__ == "__main__":
    # Check system health
    print("Checking system health...")
    
    # Disk usage
    if check_disk_usage(80):
        print("✓ Disk usage is normal")
    
    # Service status
    services = ['nginx', 'docker', 'ssh']
    for service in services:
        status = run_command(f'systemctl is-active {service}')
        if status == 'active':
            print(f"✓ {service} is running")
        else:
            print(f"✗ {service} is not running")
    
    # Docker containers
    containers = ['web-app', 'database', 'redis']
    for container in containers:
        status = manage_docker_container('status', container)
        if status:
            print(f"✓ Container {container} status checked")
```

### Python Libraries for DevOps
```python
# AWS SDK (boto3)
import boto3

def list_ec2_instances():
    ec2 = boto3.client('ec2')
    response = ec2.describe_instances()
    
    for reservation in response['Reservations']:
        for instance in reservation['Instances']:
            print(f"Instance ID: {instance['InstanceId']}")
            print(f"State: {instance['State']['Name']}")
            print(f"Type: {instance['InstanceType']}")

# Kubernetes client
from kubernetes import client, config

def list_pods(namespace='default'):
    config.load_kube_config()
    v1 = client.CoreV1Api()
    
    pods = v1.list_namespaced_pod(namespace)
    for pod in pods.items:
        print(f"Pod: {pod.metadata.name}")
        print(f"Status: {pod.status.phase}")

# Ansible automation
import ansible_runner

def run_ansible_playbook(playbook_path, inventory_path):
    result = ansible_runner.run(
        playbook=playbook_path,
        inventory=inventory_path
    )
    
    return result.status, result.stdout

# Database operations
import psycopg2
import pymongo

def backup_postgres_db(host, database, user, password, backup_file):
    """Backup PostgreSQL database"""
    import subprocess
    
    command = f"pg_dump -h {host} -U {user} -d {database} > {backup_file}"
    env = os.environ.copy()
    env['PGPASSWORD'] = password
    
    result = subprocess.run(command, shell=True, env=env)
    return result.returncode == 0

def backup_mongodb(host, port, database, backup_dir):
    """Backup MongoDB database"""
    command = f"mongodump --host {host}:{port} --db {database} --out {backup_dir}"
    result = subprocess.run(command, shell=True)
    return result.returncode == 0
```

## 💻 PowerShell (Windows)

### PowerShell Basics
```powershell
# Variables
$Name = "DevOps"
$Count = 10
$CurrentDate = Get-Date

# Output
Write-Host "Hello $Name"
Write-Output "Count: $Count"

# Conditional statements
if ($Count -gt 5) {
    Write-Host "Count is greater than 5"
} elseif ($Count -eq 5) {
    Write-Host "Count equals 5"
} else {
    Write-Host "Count is less than 5"
}

# Switch statement
switch ($args[0]) {
    "start" { Write-Host "Starting service..." }
    "stop" { Write-Host "Stopping service..." }
    "restart" { Write-Host "Restarting service..." }
    default { Write-Host "Usage: script.ps1 {start|stop|restart}" }
}

# Loops
# For loop
for ($i = 1; $i -le 5; $i++) {
    Write-Host "Number: $i"
}

# ForEach loop
$services = @("Spooler", "BITS", "Themes")
foreach ($service in $services) {
    $status = Get-Service -Name $service
    Write-Host "$service is $($status.Status)"
}

# While loop
$counter = 1
while ($counter -le 5) {
    Write-Host "Counter: $counter"
    $counter++
}
```

### PowerShell Functions
```powershell
# Function definition
function Backup-Files {
    param(
        [Parameter(Mandatory=$true)]
        [string]$SourcePath,
        
        [Parameter(Mandatory=$true)]
        [string]$BackupPath,
        
        [switch]$Compress
    )
    
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupName = "backup_$timestamp"
    
    if (-not (Test-Path $BackupPath)) {
        New-Item -ItemType Directory -Path $BackupPath -Force
    }
    
    if ($Compress) {
        $zipPath = Join-Path $BackupPath "$backupName.zip"
        Compress-Archive -Path $SourcePath -DestinationPath $zipPath
        Write-Host "Compressed backup created: $zipPath"
    } else {
        $backupDir = Join-Path $BackupPath $backupName
        Copy-Item -Path $SourcePath -Destination $backupDir -Recurse
        Write-Host "Backup created: $backupDir"
    }
}

# System monitoring function
function Get-SystemHealth {
    $health = @{}
    
    # CPU usage
    $cpu = Get-WmiObject -Class Win32_Processor | 
           Measure-Object -Property LoadPercentage -Average
    $health.CPU = $cpu.Average
    
    # Memory usage
    $memory = Get-WmiObject -Class Win32_OperatingSystem
    $memoryUsage = [math]::Round(($memory.TotalVisibleMemorySize - $memory.FreePhysicalMemory) / $memory.TotalVisibleMemorySize * 100, 2)
    $health.Memory = $memoryUsage
    
    # Disk usage
    $disks = Get-WmiObject -Class Win32_LogicalDisk | Where-Object {$_.DriveType -eq 3}
    $health.Disks = @()
    
    foreach ($disk in $disks) {
        $diskUsage = [math]::Round(($disk.Size - $disk.FreeSpace) / $disk.Size * 100, 2)
        $health.Disks += @{
            Drive = $disk.DeviceID
            Usage = $diskUsage
            FreeSpace = [math]::Round($disk.FreeSpace / 1GB, 2)
        }
    }
    
    return $health
}

# Usage
Backup-Files -SourcePath "C:\Important" -BackupPath "D:\Backups" -Compress
$systemHealth = Get-SystemHealth
$systemHealth | ConvertTo-Json
```

## 🔧 Automation Frameworks

### Ansible Automation
```yaml
# Ansible playbook for system setup
---
- name: System Setup and Configuration
  hosts: all
  become: yes
  vars:
    packages:
      - git
      - curl
      - wget
      - vim
      - htop
    
  tasks:
    - name: Update package cache
      apt:
        update_cache: yes
        cache_valid_time: 3600
      when: ansible_os_family == "Debian"
    
    - name: Install essential packages
      package:
        name: "{{ packages }}"
        state: present
    
    - name: Create application user
      user:
        name: appuser
        shell: /bin/bash
        groups: sudo
        append: yes
    
    - name: Configure SSH
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^#?PasswordAuthentication'
        line: 'PasswordAuthentication no'
        backup: yes
      notify: restart ssh
    
    - name: Install Docker
      shell: |
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
        usermod -aG docker appuser
      args:
        creates: /usr/bin/docker
    
    - name: Start and enable services
      systemd:
        name: "{{ item }}"
        state: started
        enabled: yes
      loop:
        - ssh
        - docker
  
  handlers:
    - name: restart ssh
      systemd:
        name: ssh
        state: restarted
```

### Terraform Automation
```hcl
# Terraform automation script
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "staging"
}

variable "instance_count" {
  description = "Number of instances"
  type        = number
  default     = 2
}

# Data sources
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-20.04-amd64-server-*"]
  }
}

# Resources
resource "aws_instance" "web" {
  count         = var.instance_count
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  
  user_data = templatefile("${path.module}/user_data.sh", {
    environment = var.environment
  })
  
  tags = {
    Name        = "${var.environment}-web-${count.index + 1}"
    Environment = var.environment
  }
}

resource "aws_lb" "main" {
  name               = "${var.environment}-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = data.aws_subnets.default.ids
  
  tags = {
    Environment = var.environment
  }
}

# Outputs
output "instance_ips" {
  value = aws_instance.web[*].public_ip
}

output "load_balancer_dns" {
  value = aws_lb.main.dns_name
}
```

## 🚀 CI/CD Automation Scripts

### GitHub Actions Automation
```yaml
name: Automated Deployment Pipeline

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  automated-tasks:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup environment
      run: |
        sudo apt-get update
        sudo apt-get install -y jq curl
    
    - name: Run system checks
      run: |
        ./scripts/health-check.sh
        ./scripts/security-scan.sh
        ./scripts/backup-verification.sh
    
    - name: Deploy if healthy
      if: success()
      run: |
        ./scripts/deploy.sh ${{ github.sha }}
    
    - name: Notify on failure
      if: failure()
      uses: 8398a7/action-slack@v3
      with:
        status: failure
        text: "Automated deployment failed!"
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Jenkins Pipeline Script
```groovy
pipeline {
    agent any
    
    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['staging', 'production'],
            description: 'Target environment'
        )
        booleanParam(
            name: 'RUN_TESTS',
            defaultValue: true,
            description: 'Run automated tests'
        )
    }
    
    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        APP_NAME = 'my-application'
    }
    
    stages {
        stage('Preparation') {
            steps {
                script {
                    // Load environment-specific configuration
                    def config = readYaml file: "config/${params.ENVIRONMENT}.yml"
                    env.DATABASE_URL = config.database.url
                    env.REDIS_URL = config.redis.url
                }
            }
        }
        
        stage('Automated Tests') {
            when {
                expression { params.RUN_TESTS }
            }
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm test'
                        publishTestResults testResultsPattern: 'test-results.xml'
                    }
                }
                stage('Security Scan') {
                    steps {
                        sh 'npm audit'
                        sh 'docker run --rm -v $(pwd):/app security-scanner'
                    }
                }
                stage('Performance Test') {
                    steps {
                        sh 'artillery run performance-test.yml'
                    }
                }
            }
        }
        
        stage('Build and Deploy') {
            steps {
                script {
                    // Build Docker image
                    def image = docker.build("${DOCKER_REGISTRY}/${APP_NAME}:${BUILD_NUMBER}")
                    
                    // Push to registry
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                    
                    // Deploy using Ansible
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: "inventory/${params.ENVIRONMENT}",
                        extras: "-e image_tag=${BUILD_NUMBER}"
                    )
                }
            }
        }
        
        stage('Post-Deployment Tests') {
            steps {
                script {
                    // Wait for deployment to stabilize
                    sleep(30)
                    
                    // Run smoke tests
                    sh "curl -f http://${env.APP_URL}/health"
                    
                    // Run integration tests
                    sh 'npm run test:integration'
                }
            }
        }
    }
    
    post {
        always {
            // Archive artifacts
            archiveArtifacts artifacts: 'logs/**/*', allowEmptyArchive: true
            
            // Clean workspace
            cleanWs()
        }
        success {
            // Notify success
            slackSend(
                channel: '#deployments',
                color: 'good',
                message: "✅ Deployment to ${params.ENVIRONMENT} successful!"
            )
        }
        failure {
            // Notify failure and rollback
            slackSend(
                channel: '#deployments',
                color: 'danger',
                message: "❌ Deployment to ${params.ENVIRONMENT} failed!"
            )
            
            // Automatic rollback for production
            script {
                if (params.ENVIRONMENT == 'production') {
                    build job: 'rollback-production', parameters: [
                        string(name: 'ROLLBACK_VERSION', value: env.PREVIOUS_VERSION)
                    ]
                }
            }
        }
    }
}
```

## 🎯 Best Practices

### Script Security
- Validate all inputs
- Use secure coding practices
- Avoid hardcoded credentials
- Implement proper error handling
- Use least privilege principles

### Performance Optimization
- Use efficient algorithms
- Minimize external command calls
- Implement caching where appropriate
- Use parallel processing for independent tasks
- Monitor resource usage

### Maintainability
- Write clear, documented code
- Use version control
- Implement logging
- Create modular, reusable functions
- Follow coding standards