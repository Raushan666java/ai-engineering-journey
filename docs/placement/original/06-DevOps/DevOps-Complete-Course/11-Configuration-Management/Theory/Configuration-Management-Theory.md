# ⚙️ Configuration Management - Complete Theory

## 📋 What is Configuration Management?

Configuration Management (CM) is the practice of handling changes systematically so that a system maintains its integrity over time.

### Benefits of Configuration Management
- **Consistency**: Identical configurations across environments
- **Automation**: Reduce manual configuration errors
- **Scalability**: Manage hundreds of servers efficiently
- **Compliance**: Ensure adherence to policies
- **Disaster Recovery**: Quickly rebuild systems

## 🛠️ Configuration Management Tools

### Ansible
- **Type**: Agentless, push-based
- **Language**: YAML playbooks
- **Architecture**: Control node → Managed nodes
- **Communication**: SSH/WinRM

### Puppet
- **Type**: Agent-based, pull-based
- **Language**: Puppet DSL
- **Architecture**: Master-agent model
- **Communication**: HTTPS

### Chef
- **Type**: Agent-based, pull-based
- **Language**: Ruby DSL
- **Architecture**: Chef Server → Chef Clients
- **Communication**: HTTPS

### SaltStack
- **Type**: Agent-based, push/pull
- **Language**: YAML with Jinja2
- **Architecture**: Master-minion model
- **Communication**: ZeroMQ

## 🔧 Ansible Deep Dive

### Ansible Architecture
```
Control Node → Inventory → Playbooks → Modules → Managed Nodes
```

### Inventory Management
```ini
# Static Inventory
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com ansible_host=192.168.1.10

[all:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/id_rsa
```

### Dynamic Inventory
```yaml
# AWS EC2 Dynamic Inventory
plugin: amazon.aws.aws_ec2
regions:
  - us-east-1
  - us-west-2
keyed_groups:
  - key: tags
    prefix: tag
  - key: instance_type
    prefix: type
```

### Playbook Structure
```yaml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  vars:
    http_port: 80
    max_clients: 200
  
  tasks:
    - name: Install Apache
      package:
        name: "{{ item }}"
        state: present
      loop:
        - apache2
        - php
        - mysql-client
    
    - name: Start Apache service
      service:
        name: apache2
        state: started
        enabled: yes
    
    - name: Configure Apache
      template:
        src: httpd.conf.j2
        dest: /etc/apache2/apache2.conf
        backup: yes
      notify: restart apache
    
    - name: Deploy website
      copy:
        src: "{{ item }}"
        dest: /var/www/html/
      with_fileglob:
        - "files/website/*"
  
  handlers:
    - name: restart apache
      service:
        name: apache2
        state: restarted
```

### Ansible Modules
```yaml
# File operations
- name: Create directory
  file:
    path: /opt/myapp
    state: directory
    mode: '0755'

# Package management
- name: Install packages
  apt:
    name: "{{ packages }}"
    state: present
    update_cache: yes
  vars:
    packages:
      - nginx
      - git
      - curl

# User management
- name: Create user
  user:
    name: appuser
    shell: /bin/bash
    groups: sudo
    append: yes

# Command execution
- name: Run command
  command: /usr/bin/make install
  args:
    chdir: /opt/myapp
    creates: /opt/myapp/bin/myapp

# Git operations
- name: Clone repository
  git:
    repo: https://github.com/user/repo.git
    dest: /opt/myapp
    version: main

# Database operations
- name: Create database
  mysql_db:
    name: myapp
    state: present
```

### Ansible Vault
```bash
# Create encrypted file
ansible-vault create secrets.yml

# Edit encrypted file
ansible-vault edit secrets.yml

# Encrypt existing file
ansible-vault encrypt vars.yml

# Decrypt file
ansible-vault decrypt vars.yml

# Run playbook with vault
ansible-playbook -i inventory playbook.yml --ask-vault-pass
```

## 🎭 Puppet Fundamentals

### Puppet Architecture
```
Puppet Master → Puppet Agent → Catalog → Resources → Node
```

### Puppet Manifest
```puppet
# Basic resource declaration
package { 'nginx':
  ensure => installed,
}

service { 'nginx':
  ensure  => running,
  enable  => true,
  require => Package['nginx'],
}

file { '/etc/nginx/nginx.conf':
  ensure  => file,
  content => template('nginx/nginx.conf.erb'),
  notify  => Service['nginx'],
}

# User management
user { 'appuser':
  ensure     => present,
  home       => '/home/appuser',
  shell      => '/bin/bash',
  managehome => true,
}

# Conditional logic
if $::operatingsystem == 'Ubuntu' {
  package { 'apache2':
    ensure => installed,
  }
} elsif $::operatingsystem == 'CentOS' {
  package { 'httpd':
    ensure => installed,
  }
}

# Classes and modules
class webserver {
  package { 'apache2':
    ensure => installed,
  }
  
  service { 'apache2':
    ensure  => running,
    enable  => true,
    require => Package['apache2'],
  }
}

include webserver
```

### Puppet Modules
```
modules/
├── nginx/
│   ├── manifests/
│   │   └── init.pp
│   ├── templates/
│   │   └── nginx.conf.erb
│   ├── files/
│   └── metadata.json
```

## 👨‍🍳 Chef Fundamentals

### Chef Architecture
```
Chef Server → Chef Client → Cookbooks → Recipes → Resources
```

### Chef Recipe
```ruby
# Install package
package 'nginx' do
  action :install
end

# Manage service
service 'nginx' do
  action [:enable, :start]
end

# Create file
file '/etc/nginx/nginx.conf' do
  content lazy { IO.read('/tmp/nginx.conf') }
  mode '0644'
  notifies :restart, 'service[nginx]'
end

# Execute command
execute 'update-package-cache' do
  command 'apt-get update'
  action :run
end

# Template file
template '/etc/nginx/sites-available/default' do
  source 'default.erb'
  variables(
    server_name: node['nginx']['server_name'],
    port: node['nginx']['port']
  )
  notifies :reload, 'service[nginx]'
end

# Directory creation
directory '/var/log/myapp' do
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end
```

### Chef Cookbook Structure
```
cookbooks/
├── nginx/
│   ├── recipes/
│   │   └── default.rb
│   ├── templates/
│   │   └── nginx.conf.erb
│   ├── attributes/
│   │   └── default.rb
│   ├── files/
│   └── metadata.rb
```

## 🧂 SaltStack Fundamentals

### Salt Architecture
```
Salt Master → Salt Minions → States → Modules → Execution
```

### Salt States
```yaml
# Install package
nginx:
  pkg.installed: []
  service.running:
    - enable: True
    - require:
      - pkg: nginx

# Manage file
/etc/nginx/nginx.conf:
  file.managed:
    - source: salt://nginx/nginx.conf
    - template: jinja
    - context:
        server_name: {{ pillar['server_name'] }}
    - require:
      - pkg: nginx
    - watch_in:
      - service: nginx

# Create user
appuser:
  user.present:
    - home: /home/appuser
    - shell: /bin/bash
    - groups:
      - sudo

# Execute command
update-system:
  cmd.run:
    - name: apt-get update && apt-get upgrade -y
    - unless: test -f /var/cache/apt/pkgcache.bin
```

### Salt Pillar
```yaml
# pillar/top.sls
base:
  'web*':
    - webserver
  'db*':
    - database

# pillar/webserver.sls
nginx:
  server_name: example.com
  port: 80
  worker_processes: 4
```

## 🔄 Configuration Management Patterns

### Infrastructure as Code Patterns
```yaml
# Immutable Infrastructure
- name: Build AMI with Packer
  command: packer build template.json

- name: Deploy new instances
  ec2_instance:
    image_id: "{{ ami_id }}"
    instance_type: t3.micro
    count: 3

# Mutable Infrastructure
- name: Update existing servers
  package:
    name: myapp
    state: latest
  notify: restart myapp
```

### Environment Management
```yaml
# Environment-specific variables
# group_vars/production.yml
database_host: prod-db.example.com
redis_host: prod-redis.example.com
log_level: warn

# group_vars/staging.yml
database_host: staging-db.example.com
redis_host: staging-redis.example.com
log_level: debug
```

## 🧪 Testing Configuration Management

### Ansible Testing
```yaml
# molecule/default/molecule.yml
dependency:
  name: galaxy
driver:
  name: docker
platforms:
  - name: instance
    image: ubuntu:20.04
provisioner:
  name: ansible
verifier:
  name: ansible
```

### Test Kitchen (Chef)
```yaml
# .kitchen.yml
driver:
  name: docker

provisioner:
  name: chef_zero

platforms:
  - name: ubuntu-20.04

suites:
  - name: default
    run_list:
      - recipe[nginx::default]
```

## 🚀 CI/CD Integration

### Ansible in CI/CD
```yaml
# GitHub Actions
- name: Run Ansible Playbook
  uses: dawidd6/action-ansible-playbook@v2
  with:
    playbook: deploy.yml
    directory: ./ansible
    key: ${{ secrets.SSH_PRIVATE_KEY }}
    inventory: |
      [webservers]
      ${{ secrets.HOST_IP }}
```

### GitOps with Configuration Management
```yaml
# ArgoCD Application
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: config-management
spec:
  source:
    repoURL: https://github.com/company/infrastructure
    path: ansible
    targetRevision: main
  destination:
    server: https://kubernetes.default.svc
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

## 🎯 Best Practices

### Security
- Use encrypted secrets (Ansible Vault, Chef Data Bags)
- Implement least privilege access
- Regular security updates
- Audit configuration changes

### Performance
- Use parallel execution
- Implement caching strategies
- Optimize playbook/recipe structure
- Monitor execution times

### Maintainability
- Use version control for all configurations
- Implement testing frameworks
- Document configurations thoroughly
- Follow naming conventions