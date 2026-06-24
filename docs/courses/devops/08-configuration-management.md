# Chapter 8: Configuration Management

> **Prev:** [Kubernetes](./07-kubernetes.md)
> **Next:** [Kubernetes Advanced](./08-k8s-advanced.md)

---

## Learning Objectives

- Understand the purpose and principles of configuration management in DevOps.
- Differentiate between configuration management tools: Ansible, Puppet, Chef, SaltStack.
- Master Ansible for automation, configuration, and orchestration.
- Implement idempotent configuration management.
- Manage secrets and sensitive data in configuration tools.
- Apply infrastructure compliance and auditing through configuration management.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| CM Principles | Desired state, idempotency | Tools converge systems to defined state |
| Ansible | Agentless, SSH-based | Push-based, YAML playbooks, easy to start |
| Puppet | Agent-master, declarative | Ruby DSL, pull-based, mature ecosystem |
| Chef | Agent-master, procedural | Ruby DSL, cookbooks, strong community |
| Idempotency | Run multiple times, same result | Core principle of configuration management |
| Roles and Playbooks | Organized automation | Structure playbooks as reusable roles |
| Jinja2 Templates | Dynamic configuration files | Template configs with variables |
| Secrets Management | Vault integration | Never store secrets in playbooks |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Configuration Management] --> B[Ansible]
    A --> C[Puppet]
    A --> D[Chef]
    A --> E[SaltStack]
    B --> F[Inventory]
    B --> G[Playbooks]
    B --> H[Modules]
    G --> I[Roles]
    H --> J[Idempotent Tasks]
    I --> J
    J --> K[Desired State]
    K --> L[Compliance]
```

## Theory

### What is Configuration Management?

Configuration management (CM) is the practice of systematically managing and maintaining the state of systems and software in a consistent, desired state. In DevOps, CM ensures that servers, applications, and infrastructure are configured consistently across environments.

**Benefits:**
- **Consistency:** Every server is configured identically
- **Automation:** Eliminate manual server configuration
- **Scalability:** Provision hundreds of servers identically
- **Auditability:** Know exactly what is configured and where
- **Recovery:** Quickly rebuild servers to known good state
- **Version control:** Configuration changes are tracked

### Idempotency

Idempotency is the property that a configuration management operation can be applied multiple times with the same result. If the system is already in the desired state, no changes are made.

```yaml
# Idempotent: only installs if not already installed
- name: Ensure nginx is installed
  apt:
    name: nginx
    state: present

# Idempotent: only restarts if config changed
- name: Copy nginx configuration
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx
```

### Ansible Architecture

Ansible is agentless — it connects via SSH (or WinRM for Windows) and pushes modules to execute:

```mermaid
flowchart LR
    A[Ansible Control Node] -->|SSH| B[Managed Host 1]
    A -->|SSH| C[Managed Host 2]
    A -->|SSH| D[Managed Host 3]
    E[Inventory] --> A
    F[Playbook] --> A
    G[Roles] --> F
    H[Modules] --> A
```

**Key components:**
- **Control Node:** Where Ansible is installed and playbooks are executed
- **Managed Nodes:** Target systems configured by Ansible
- **Inventory:** List of managed nodes and their groups
- **Modules:** Reusable, standalone scripts (package, service, copy, template, etc.)
- **Playbooks:** YAML files defining automation sequences
- **Roles:** Organizational units for playbooks, variables, and handlers

### Ansible Playbook Structure

```yaml
---
- name: Configure web server
  hosts: webservers
  become: yes
  vars:
    http_port: 80
    server_name: example.com

  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Copy nginx config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/sites-available/default
      notify: restart nginx

    - name: Enable site
      file:
        src: /etc/nginx/sites-available/default
        dest: /etc/nginx/sites-enabled/default
        state: link

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
```

### Ansible Roles

Roles organize playbooks, variables, files, templates, and handlers into reusable units:

```text
roles/
├── common/
│   ├── tasks/main.yml
│   ├── handlers/main.yml
│   ├── templates/
│   ├── files/
│   ├── vars/main.yml
│   └── defaults/main.yml
├── nginx/
│   ├── tasks/main.yml
│   ├── templates/nginx.conf.j2
│   ├── vars/main.yml
│   └── meta/main.yml
└── app/
    ├── tasks/main.yml
    ├── templates/app.env.j2
    └── defaults/main.yml
```

### Comparison of CM Tools

| Tool | Architecture | Language | Push/Pull | Learning Curve |
|------|-------------|----------|-----------|---------------|
| Ansible | Agentless (SSH) | YAML + Python | Push | Low |
| Puppet | Agent-Master | Ruby DSL | Pull | Medium |
| Chef | Agent-Master | Ruby DSL | Pull | High |
| SaltStack | Agent-Master | YAML + Python | Both | Medium |

### Ansible Modules for DevOps

**Package management:**
```yaml
- apt: name=nginx state=present update_cache=yes
- yum: name=httpd state=latest
- pip: name=requests version=2.28.0
- npm: name=express path=/app
```

**Service management:**
```yaml
- service: name=nginx state=started enabled=yes
- systemd: name=myapp state=restarted daemon_reload=yes
```

**File operations:**
```yaml
- copy: src=file.conf dest=/etc/app/ owner=root mode=0644
- template: src=config.j2 dest=/etc/app/config.json
- file: path=/app state=directory mode=0755
- lineinfile: path=/etc/hosts line="127.0.0.1 myapp.local"
```

**User management:**
```yaml
- user: name=deploy group=sudo shell=/bin/bash
- authorized_key: user=deploy key="{{ lookup('file', 'keys/deploy.pub') }}"
```

**Repository management:**
```yaml
- git: repo=https://github.com/org/app.git dest=/opt/app version=v1.0
```

### Jinja2 Templating

Ansible uses Jinja2 for dynamic configuration files:

```jinja
# templates/nginx.conf.j2
server {
    listen {{ http_port }};
    server_name {{ server_name }};

    location / {
        proxy_pass http://localhost:{{ app_port }};
        proxy_set_header Host $host;
    }

    location /health {
        return 200 "OK";
    }
}
```

### Ansible Vault for Secrets

```text
# Create encrypted file
ansible-vault create secrets.yml

# Edit encrypted file
ansible-vault edit secrets.yml

# Run playbook with vault
ansible-playbook site.yml --ask-vault-pass

# Use vault password file
ansible-playbook site.yml --vault-password-file .vault_pass
```

### Infrastructure Compliance

Configuration management enables continuous compliance:

```yaml
- name: Security compliance checks
  hosts: all
  tasks:
    - name: Check SSH config
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PermitRootLogin'
        line: 'PermitRootLogin no'
      check_mode: yes

    - name: Verify firewall is active
      service:
        name: ufw
        state: started
        enabled: yes
```

### Ansible in CI/CD

```yaml
# .github/workflows/config-mgmt.yml
jobs:
  deploy-config:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Ansible playbook
        uses: dawidd6/action-ansible-playbook@v2
        with:
          playbook: site.yml
          directory: ./ansible
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          inventory: |
            [web]
            web1.example.com
            web2.example.com
```

---

## Examples

### Example 1: Ansible Playbook Generator

```typescript
interface AnsibleTask {
  name: string;
  module: string;
  moduleArgs: Record<string, any>;
}

interface AnsiblePlay {
  name: string;
  hosts: string;
  become: boolean;
  vars: Record<string, any>;
  tasks: AnsibleTask[];
  handlers?: AnsibleTask[];
}

class AnsiblePlaybookGenerator {
  generate(play: AnsiblePlay): string {
    let yaml = `---\n`;
    yaml += `- name: ${play.name}\n`;
    yaml += `  hosts: ${play.hosts}\n`;
    yaml += `  become: ${play.become}\n\n`;

    if (Object.keys(play.vars).length > 0) {
      yaml += `  vars:\n`;
      for (const [key, value] of Object.entries(play.vars)) {
        yaml += `    ${key}: ${value}\n`;
      }
      yaml += '\n';
    }

    yaml += `  tasks:\n`;
    for (const task of play.tasks) {
      yaml += this.generateTask(task, '    ');
    }

    if (play.handlers && play.handlers.length > 0) {
      yaml += `\n  handlers:\n`;
      for (const handler of play.handlers) {
        yaml += this.generateTask(handler, '    ');
      }
    }

    return yaml;
  }

  private generateTask(task: AnsibleTask, indent: string): string {
    let yaml = `${indent}- name: ${task.name}\n`;
    yaml += `${indent}  ${task.module}:\n`;

    for (const [key, value] of Object.entries(task.moduleArgs)) {
      if (typeof value === 'string') {
        yaml += `${indent}    ${key}: "${value}"\n`;
      } else if (typeof value === 'boolean') {
        yaml += `${indent}    ${key}: ${value ? 'yes' : 'no'}\n`;
      } else {
        yaml += `${indent}    ${key}: ${value}\n`;
      }
    }

    return yaml;
  }
}

const gen = new AnsiblePlaybookGenerator();
const playbook = gen.generate({
  name: 'Configure web application',
  hosts: 'webservers',
  become: true,
  vars: { app_port: 3000, node_env: 'production' },
  tasks: [
    { name: 'Install Node.js', module: 'apt', moduleArgs: { name: 'nodejs', state: 'present', update_cache: true } },
    { name: 'Create app directory', module: 'file', moduleArgs: { path: '/opt/app', state: 'directory', mode: '0755' } },
    { name: 'Copy app files', module: 'synchronize', moduleArgs: { src: './dist/', dest: '/opt/app/' } },
    { name: 'Copy env file', module: 'template', moduleArgs: { src: 'app.env.j2', dest: '/opt/app/.env' } },
    { name: 'Install app service', module: 'copy', moduleArgs: { src: 'myapp.service', dest: '/etc/systemd/system/' } },
    { name: 'Start app service', module: 'systemd', moduleArgs: { name: 'myapp', state: 'started', enabled: true, daemon_reload: true } },
  ],
  handlers: [
    { name: 'restart app', module: 'systemd', moduleArgs: { name: 'myapp', state: 'restarted' } },
  ],
});
console.log(playbook);
```

### Example 2: Configuration Drift Detector

```typescript
interface ExpectedConfig {
  path: string;
  expectedContent: string;
  expectedMode: string;
  expectedOwner: string;
}

interface ActualConfig {
  path: string;
  content: string;
  mode: string;
  owner: string;
  exists: boolean;
}

interface DriftReport {
  compliant: boolean;
  drifts: Array<{
    path: string;
    type: 'missing' | 'content' | 'permission' | 'owner';
    expected: string;
    actual: string;
  }>;
}

class DriftDetector {
  detect(expected: ExpectedConfig[], actual: ActualConfig[]): DriftReport {
    const drifts: DriftReport['drifts'] = [];
    const actualMap = new Map(actual.map(a => [a.path, a]));

    for (const exp of expected) {
      const act = actualMap.get(exp.path);

      if (!act || !act.exists) {
        drifts.push({ path: exp.path, type: 'missing', expected: 'file exists', actual: 'not found' });
        continue;
      }

      if (act.content !== exp.expectedContent) {
        drifts.push({ path: exp.path, type: 'content', expected: exp.expectedContent, actual: act.content });
      }

      if (act.mode !== exp.expectedMode) {
        drifts.push({ path: exp.path, type: 'permission', expected: exp.expectedMode, actual: act.mode });
      }

      if (act.owner !== exp.expectedOwner) {
        drifts.push({ path: exp.path, type: 'owner', expected: exp.expectedOwner, actual: act.owner });
      }
    }

    return { compliant: drifts.length === 0, drifts };
  }

  generateReport(report: DriftReport): string {
    let output = '# Configuration Drift Report\n\n';

    if (report.compliant) {
      output += '✅ All systems are compliant — no drift detected.\n';
      return output;
    }

    output += `❌ ${report.drifts.length} drift(s) detected\n\n`;

    for (const drift of report.drifts) {
      const icon = drift.type === 'missing' ? '🔴' :
                   drift.type === 'content' ? '🟡' : '⚪';
      output += `${icon} ${drift.path}\n`;
      output += `   Type: ${drift.type}\n`;
      output += `   Expected: ${drift.expected}\n`;
      output += `   Actual:   ${drift.actual}\n\n`;
    }

    return output;
  }
}

const expected: ExpectedConfig[] = [
  { path: '/etc/nginx/nginx.conf', expectedContent: 'server { listen 80; }', expectedMode: '0644', expectedOwner: 'root:root' },
  { path: '/opt/app/.env', expectedContent: 'NODE_ENV=production\nPORT=3000', expectedMode: '0600', expectedOwner: 'appuser:appuser' },
];

const actual: ActualConfig[] = [
  { path: '/etc/nginx/nginx.conf', content: 'server { listen 443 ssl; }', mode: '0644', owner: 'root:root', exists: true },
  { path: '/opt/app/.env', content: 'NODE_ENV=production\nPORT=3000', mode: '0644', owner: 'root:root', exists: true },
];

const detector = new DriftDetector();
const report = detector.detect(expected, actual);
console.log(detector.generateReport(report));
```

---

## Practical Takeaways

1. **Use Ansible for agentless configuration management.** No agents to install or maintain.
2. **Design for idempotency.** Always use `state=present`, `state=started` — not imperative commands.
3. **Structure with roles.** Roles make playbooks reusable across projects.
4. **Use templates for dynamic config.** Keep configuration files generic with Jinja2 variables.
5. **Encrypt secrets with Ansible Vault.** Never store plaintext passwords in playbooks.
6. **Run playbooks in check mode first.** `ansible-playbook --check` previews changes without applying.

---

## Chapter Quiz

<details><summary>Question 1: What makes Ansible different from Puppet and Chef?</summary>**A)** Ansible uses a master-agent architecture<br>**B)** Ansible is agentless — it connects via SSH<br>**C)** Ansible is written in Ruby<br>**D)** Ansible is pull-based<br><br>**Answer: B)** Ansible is agentless — it connects via SSH</details>

<details><summary>Question 2: What does idempotency mean in configuration management?</summary>**A)** Running a playbook multiple times produces different results<br>**B)** Running a playbook multiple times produces the same result<br>**C)** A playbook runs only once<br>**D)** A playbook requires root access<br><br>**Answer: B)** Running a playbook multiple times produces the same result</details>

<details><summary>Question 3: What is an Ansible role?</summary>**A)** A single task<br>**B)** An organizational unit for tasks, templates, variables, and handlers<br>**C)** A type of inventory<br>**D)** A connection method<br><br>**Answer: B)** An organizational unit for tasks, templates, variables, and handlers</details>

<details><summary>Question 4: How does Ansible Vault protect secrets?</summary>**A)** By storing them in a database<br>**B)** By encrypting YAML files with a password<br>**C)** By hiding them from logs<br>**D)** By using SSH keys<br><br>**Answer: B)** By encrypting YAML files with a password</details>

<details><summary>Question 5: Which Ansible module manages system services?</summary>**A)** `apt`<br>**B)** `service` or `systemd`<br>**C)** `copy`<br>**D)** `template`<br><br>**Answer: B)** `service` or `systemd`</details>

---

## Summary

- Configuration management ensures systems are consistently configured through idempotent, automated processes.
- Ansible is agentless (SSH-based) with YAML playbooks, making it the most accessible CM tool.
- Playbooks define automation sequences with tasks, modules, variables, and handlers.
- Roles organize playbooks into reusable, shareable units.
- Idempotency ensures that running a playbook multiple times leaves the system in the same desired state.
- Jinja2 templates generate dynamic configuration files from variables.
- Ansible Vault encrypts sensitive data in playbooks.
- Configuration drift detection identifies systems that deviate from the desired state.

---

## Exercises

### Review Questions
1. What is the difference between Ansible and Puppet/Chef?
2. Why is idempotency important in configuration management?
3. How do Ansible roles promote reusability?
4. What is the difference between `copy` and `template` modules?
5. How do you encrypt secrets in Ansible playbooks?

### Application Problems
1. Write an Ansible playbook that installs and configures Nginx with a reverse proxy.
2. Create an Ansible role for deploying a Node.js application with environment variables.
3. Implement a configuration drift detection system using Ansible in check mode.
4. Configure Ansible Vault to encrypt database credentials.

### Challenge Problem
1. Design a complete configuration management system for a 3-tier application (web, API, database) across 3 environments (dev, staging, prod). Include: Ansible roles for each tier (nginx, node-app, postgres), idempotent tasks for all configurations, Jinja2 templates for environment-specific settings, Ansible Vault for secrets (DB passwords, API keys), drift detection playbook that runs daily and alerts on non-compliant servers, CI/CD integration to run playbooks after infrastructure provisioning, and a compliance report showing the current state of all managed servers.
