# Chapter 10: Advanced Configuration Management

> **Prev:** [Terraform & IaC](./09-iac.md)
> **Next:** [Monitoring Basics](./10-monitoring.md)

---

## Learning Objectives

- Master advanced Ansible patterns: dynamic inventories, delegation, async tasks.
- Implement Ansible Tower/AWX for enterprise configuration management.
- Use configuration management for compliance and security hardening.
- Implement configuration management for containers and Kubernetes.
- Apply change management and auditing through configuration automation.
- Integrate configuration management with CI/CD and secrets management.

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/devops/10-configuration-mgmt/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Dynamic Inventory | Cloud API sources inventory | Auto-discover EC2 instances by tags |
| Ansible Tower | Enterprise CM with RBAC | Scheduling, approvals, logging |
| Compliance | CIS benchmarks automation | Automate hardening and verify continuously |
| Container CM | Build images with playbooks | Ansible inside containers for provisioning |
| Secrets Integration | Vault, AWS SSM, Azure KV | Dynamic secrets at playbook runtime |
| Delegation | Run tasks on behalf of other hosts | Local execution for API calls |
| Pull Mode | Ansible-pull for fleet management | Nodes pull config from Git |
| CI/CD Integration | Git-driven playbook execution | Run playbooks from CI pipeline |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Advanced Ansible] --> B[Dynamic Inventory]
    A --> C[Ansible Tower/AWX]
    A --> D[Compliance Automation]
    A --> E[Secrets Management]
    A --> F[Container CM]
    B --> G[AWS EC2 Plugin]
    B --> H[Azure Plugin]
    C --> I[Join Tokens]
    C --> J[Job Templates]
    D --> K[CIS Benchmarks]
    D --> L[OpenSCAP]
    E --> M[HashiCorp Vault]
    E --> N[AWS SSM]
    F --> O[Docker Module]
    F --> P[Kubernetes Module]
```

## Theory

### Dynamic Inventories


Static inventory files don't scale. Dynamic inventories query cloud APIs:

```ini
# inventory/aws_ec2.yaml
plugin: aws_ec2
regions:
  - us-east-1
  - us-west-2
filters:
  tag:Environment:
    - production
  instance-state-name: running
hostnames:
  - dns-name
keyed_groups:
  - key: tags.Role
    prefix: role
  - key: placement.region
    prefix: region
compose:
  ansible_host: public_dns_name
```

```yaml
# Using dynamic groups
- name: Configure web servers
  hosts: role_web
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
```

### Ansible Tower / AWX


Ansible Tower (Red Hat) / AWX (upstream open-source) provides:

- **User interface:** Manage inventories, credentials, and playbooks
- **RBAC:** Team-based access control for playbook execution
- **Scheduling:** Cron-based playbook execution
- **Approvals:** Workflow approval gates
- **Logging:** Centralized audit trail
- **REST API:** Programmatic playbook triggering
- **Notifications:** Slack, email, webhook on status changes

```yaml
# AWX job template via API
- name: Trigger AWX job
  uri:
    url: "https://awx.example.com/api/v2/job_templates/10/launch/"
    method: POST
    headers:
      Authorization: "Bearer {{ awx_token }}"
      Content-Type: application/json
    body_format: json
    body:
      extra_vars:
        environment: production
        version: "{{ lookup('env', 'CI_COMMIT_SHA') }}"
```

### Compliance Automation


Automated security hardening and compliance verification:

```yaml
# CIS benchmark compliance checks
- name: CIS Benchmark - SSH Hardening
  hosts: all
  vars:
    cis_rules:
      - rule: "1.1.1.1 Disable unused filesystems"
        check: "modprobe -n -v cramfs"
      - rule: "5.2.1 Ensure permissions on /etc/ssh/sshd_config"
        check: "stat /etc/ssh/sshd_config"
  tasks:
    - name: Check SSH permissions are 600
      stat:
        path: /etc/ssh/sshd_config
      register: ssh_config

    - name: Remediate SSH permissions
      file:
        path: /etc/ssh/sshd_config
        mode: "0600"
        owner: root
        group: root
      when: ssh_config.stat.mode != "0600"

    - name: Verify no root SSH login
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: "^PermitRootLogin"
        line: "PermitRootLogin no"
      notify: restart sshd
      check_mode: yes
```

### Ansible and Container Configuration


**Building Docker images with Ansible:**

```yaml
- name: Build application image
  hosts: localhost
  tasks:
    - name: Create Dockerfile
      copy:
        dest: /tmp/Dockerfile
        content: |
          FROM node:20-alpine
          WORKDIR /app
          COPY package*.json ./
          RUN npm ci
          COPY dist/ ./
          EXPOSE 3000
          CMD ["node", "server.js"]

    - name: Build Docker image
      docker_image:
        name: myapp
        tag: "{{ version }}"
        build:
          path: /tmp
          pull: yes
        source: build
        push: yes
```

**Managing Kubernetes with Ansible:**

```yaml
- name: Deploy to Kubernetes
  hosts: localhost
  tasks:
    - name: Create namespace
      kubernetes.core.k8s:
        name: "{{ environment }}"
        api_version: v1
        kind: Namespace
        state: present

    - name: Deploy application
      kubernetes.core.k8s:
        state: present
        definition:
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: myapp
            namespace: "{{ environment }}"
          spec:
            replicas: 3
            selector:
              matchLabels:
                app: myapp
            template:
              metadata:
                labels:
                  app: myapp
              spec:
                containers:
                  - name: myapp
                    image: "myapp:{{ version }}"
                    ports:
                      - containerPort: 3000
```

### Secrets Integration


Inject secrets at runtime without storing them in playbooks:

```yaml
# HashiCorp Vault lookup
- name: Get database password from Vault
  debug:
    msg: "{{ lookup('community.hashi_vault.hashi_vault', 'secret/data/db', url='https://vault.example.com') }}"

# AWS SSM Parameter Store lookup
- name: Get DB password from SSM
  set_fact:
    db_password: "{{ lookup('amazon.aws.ssm_parameter', '/prod/db/password', decrypt=True) }}"

# Azure Key Vault lookup
- name: Get API key from Azure KV
  set_fact:
    api_key: "{{ lookup('azure.azcollection.azure_keyvault_secret', 'api-key', vault_url='https://myvault.vault.azure.net') }}"
```

### Ansible Pull Mode


In pull mode, nodes fetch configuration from Git and apply locally:

```text
# Cron job on each node
*/15 * * * * ansible-pull -o -U https://github.com/org/config-repo.git -d /etc/ansible/pull -i localhost
```

**Use cases:**
- Infrastructure at scale (thousands of nodes)
- Nodes without direct SSH access from control node
- IoT and edge devices
- Ephemeral instances that self-configure on boot

### Ansible Molecule for Testing


Molecule provides a framework for testing Ansible roles:

```
molecule init role myrole --driver docker
molecule converge    # Apply role to test container
molecule verify      # Run verification tests
molecule test        # Full lifecycle: create, converge, verify, destroy
```

```yaml
# molecule/default/molecule.yml
dependency:
  name: galaxy
driver:
  name: docker
platforms:
  - name: instance
    image: geerlingguy/docker-ubuntu2204-ansible:latest
    pre_build_image: true
provisioner:
  name: ansible
verifier:
  name: ansible
```

```yaml
# molecule/default/verify.yml
- name: Verify role applied correctly
  hosts: all
  tasks:
    - name: Check nginx is installed
      package:
        name: nginx
        state: present
      check_mode: yes

    - name: Check nginx is running
      service:
        name: nginx
        state: started
      check_mode: yes
```

**Benefits of role testing:**
- Catch regressions before production deployment
- Reproducible test environments
- CI integration for automated role validation
- Documentation of expected behavior

### Ansible Content Collections


Collections package Ansible content (roles, modules, plugins, playbooks) in distributable bundles:

```yaml
# requirements.yml
collections:
  - name: community.docker
    version: ">=3.0.0"
  - name: kubernetes.core
    version: ">=2.0.0"
  - name: amazon.aws
    version: ">=5.0.0"
  - name: community.hashi_vault
    version: ">=4.0.0"
```

**Using collections in playbooks:**
```yaml
- name: Deploy application
  hosts: all
  collections:
    - community.docker
    - kubernetes.core
  tasks:
    - name: Build image
      docker_image:
        name: myapp
        tag: "{{ version }}"
        source: build

    - name: Deploy to K8s
      k8s:
        state: present
        definition: "{{ lookup('template', 'deployment.yaml.j2') }}"
```

### Delegation and Local Actions


Delegate tasks to specific hosts:

```yaml
- name: Register instance with load balancer
  hosts: webservers
  tasks:
    - name: Add instance to ELB
      elb_instance:
        instance_id: "{{ ansible_ec2_instance_id }}"
        ec2_elbs:
          - myapp-elb
        state: present
      delegate_to: localhost

- name: Run database migration
  hosts: app_servers
  serial: 1
  tasks:
    - name: Run migrations
      command: npm run migrate
      run_once: true
      delegate_to: "{{ groups.app_servers[0] }}"
```

### Ansible in CI/CD


```yaml
# .gitlab-ci.yml
stages:
  - deploy

deploy:
  stage: deploy
  script:
    - ansible-galaxy install -r requirements.yml
    - ansible-playbook -i inventory/production site.yml \
        --extra-vars "version=$CI_COMMIT_TAG" \
        --vault-password-file .vault_pass
  only:
    - tags
  environment:
    name: production
```

---

## Examples

### Example 1: Compliance Scanner

```typescript
interface ComplianceRule {
  id: string;
  description: string;
  category: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  check: () => Promise<boolean>;
  remediate: () => Promise<void>;
}

class ComplianceScanner {
  private rules: ComplianceRule[] = [];
  private results: Array<{ rule: string; passed: boolean; error?: string }> = [];

  addRule(rule: ComplianceRule): void {
    this.rules.push(rule);
  }

  async runScan(): Promise<void> {
    console.log('?? Starting compliance scan...\n');

    for (const rule of this.rules) {
      try {
        const passed = await rule.check();
        this.results.push({ rule: rule.id, passed });
        const icon = passed ? '?' : '?';
        console.log(`${icon} ${rule.id}: ${rule.description}`);
        if (!passed) {
          console.log(`   Severity: ${rule.severity}`);
        }
      } catch (error) {
        this.results.push({ rule: rule.id, passed: false, error: String(error) });
        console.log(`? ${rule.id}: Error - ${error}`);
      }
    }

    this.printSummary();
  }

  private printSummary(): void {
    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => !r.passed).length;
    const critical = this.results.filter(r => !r.passed && this.rules.find(rule => rule.id === r.rule)?.severity === 'critical').length;
    const high = this.results.filter(r => !r.passed && this.rules.find(rule => rule.id === r.rule)?.severity === 'high').length;

    console.log(`\n=== Compliance Summary ===`);
    console.log(`Passed: ${passed}/${this.results.length}`);
    console.log(`Failed: ${failed}`);
    console.log(`Critical: ${critical}, High: ${high}`);

    if (failed > 0) {
      console.log(`\n? Compliance score: ${((passed / this.results.length) * 100).toFixed(0)}%`);
    } else {
      console.log(`\n? Fully compliant`);
    }
  }

  generateReport(): string {
    let report = '# Compliance Scan Report\n\n';
    report += `| Rule | Status | Severity |\n`;
    report += `|------|--------|----------|\n`;

    for (const result of this.results) {
      const rule = this.rules.find(r => r.id === result.rule);
      const status = result.passed ? '? Passed' : '? Failed';
      report += `| ${rule?.id} | ${status} | ${rule?.severity} |\n`;
    }

    return report;
  }
}

const scanner = new ComplianceScanner();
scanner.addRule({
  id: 'CIS-1.1.1', description: 'Disable unused filesystems', category: 'system', severity: 'high',
  check: async () => true,
  remediate: async () => {},
});
scanner.addRule({
  id: 'CIS-5.2.1', description: 'SSH config permissions', category: 'ssh', severity: 'critical',
  check: async () => false,
  remediate: async () => {},
});
scanner.runScan();
```

### Example 2: Ansible Vault Manager

```typescript
interface VaultEntry {
  name: string;
  path: string;
  data: Record<string, string>;
}

class AnsibleVaultManager {
  private entries: VaultEntry[] = [];

  addEntry(path: string, name: string, data: Record<string, string>): void {
    const existing = this.entries.findIndex(e => e.path === path);
    if (existing >= 0) {
      this.entries[existing] = { name, path, data };
    } else {
      this.entries.push({ name, path, data });
    }
  }

  generateVaultFile(path: string): string {
    const entries = this.entries.filter(e => e.path === path);
    if (entries.length === 0) throw new Error(`No entries for path: ${path}`);

    return entries.map(entry =>
      Object.entries(entry.data)
        .map(([key, value]) => `${key}: "${value}"`)
        .join('\n')
    ).join('\n');
  }

  auditHardcodedSecrets(playbookPath: string): string[] {
    const issues: string[] = [];
    for (const entry of this.entries) {
      for (const [key, value] of Object.entries(entry.data)) {
        if (value.length > 4 && /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(value)) {
          issues.push(`Potential secret "${key}" in ${entry.path} — should be vault-encrypted`);
        }
      }
    }
    return issues;
  }

  generateSecretsPlaybook(path: string): string {
    const entries = this.entries.filter(e => e.path === path);

    return `---
- name: Deploy secrets from vault
  hosts: all
  become: yes
  vars_files:
    - vault.yml
  tasks:
${entries.map(entry =>
      Object.keys(entry.data).map(key =>
        `    - name: Set ${key}
      set_fact:
        ${key}: "{{ ${key} }}"
      no_log: true`
      ).join('\n')
    ).join('\n')}
    - name: Write .env file
      template:
        src: .env.j2
        dest: /opt/app/.env
        owner: appuser
        mode: "0600"`;
  }
}

const vault = new AnsibleVaultManager();
vault.addEntry('vault.yml', 'production', {
  DB_PASSWORD: 'p@ssw0rd123!',
  API_KEY: 'sk-abc123def456',
  JWT_SECRET: 'super-secret-key-2024',
});
vault.addEntry('vault.yml', 'staging', {
  DB_PASSWORD: 'staging-pass',
  API_KEY: 'sk-test-key',
  JWT_SECRET: 'test-secret',
});

console.log('Vault file:\n', vault.generateVaultFile('vault.yml'));
console.log('\nHardcoded secrets audit:\n', vault.auditHardcodedSecrets('site.yml').join('\n'));
```

---

### Terraform Plan Parser

Analyzing Terraform plan output programmatically enables automated compliance checks and impact analysis before infrastructure changes are applied.

```typescript
interface ResourceChange {
  address: string;
  action: 'create' | 'delete' | 'update' | 'no-op';
  changeSummary: string;
  before: Record<string, unknown>;
  after: Record<string, unknown>;
}

interface PlanSummary {
  additions: number;
  changes: number;
  destructions: number;
  resourceChanges: ResourceChange[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  warnings: string[];
}

class TerraformPlanParser {
  parse(rawPlan: string): PlanSummary {
    const lines = rawPlan.split('\n');
    const resourceChanges: ResourceChange[] = [];
    const warnings: string[] = [];

    for (const line of lines) {
      if (line.startsWith('#') || line.startsWith('# aws_')) {
        const parts = line.split(':');
        const address = parts[0].replace('# ', '');
        const action = parts[1]?.trim().toLowerCase() || 'no-op';
        const actionMap: Record<string, ResourceChange['action']> = {
          'will be created': 'create', 'will be destroyed': 'delete',
          'will be updated in-place': 'update', 'will be replaced': 'delete',
        };
        resourceChanges.push({
          address,
          action: actionMap[action] || 'no-op',
          changeSummary: action,
          before: {},
          after: {},
        });
      }
    }

    const additions = resourceChanges.filter(r => r.action === 'create').length;
    const changes = resourceChanges.filter(r => r.action === 'update').length;
    const destructions = resourceChanges.filter(r => r.action === 'delete').length;

    if (destructions > 0) {
      resourceChanges.filter(r => r.action === 'delete').forEach(r => {
        warnings.push(`Destructive change: ${r.address}`);
      });
    }

    let riskLevel: PlanSummary['riskLevel'] = 'low';
    if (destructions > 5) riskLevel = 'critical';
    else if (destructions > 2) riskLevel = 'high';
    else if (destructions > 0) riskLevel = 'medium';

    return { additions, changes, destructions, resourceChanges, riskLevel, warnings };
  }

  generateSummary(plan: PlanSummary): string {
    return `## Terraform Plan Summary\n\n` +
      `**Additions:** ${plan.additions}\n` +
      `**Changes:** ${plan.changes}\n` +
      `**Destructions:** ${plan.destructions}\n` +
      `**Risk Level:** ${plan.riskLevel}\n\n` +
      (plan.warnings.length > 0 ? `**Warnings:**\n${plan.warnings.map(w => `- ${w}`).join('\n')}\n` : '');
  }
}

// Simulated terraform plan output
const planOutput = `# aws_vpc.main: Will be updated in-place
# aws_subnet.public: Will be created
# aws_security_group.legacy: Will be destroyed
# aws_instance.web: Will be updated in-place`;

const parser = new TerraformPlanParser();
const plan = parser.parse(planOutput);
console.log(parser.generateSummary(plan));
```

**What this demonstrates:** Programmatic Terraform plan parsing enables automated risk classification, destructive change detection, and integration with CI/CD gating pipelines.

---

### Configuration Drift Remediation Scheduler

Drift remediation must be scheduled intelligently to avoid disrupting workloads during peak hours. The following tool implements a drift-aware remediation scheduler with prioritization.

```typescript
// drift-scheduler.ts
// Schedule drift remediation with prioritization

interface RemediationTask {
  id: string;
  resourceId: string;
  driftCategory: 'security' | 'config' | 'tag' | 'size' | 'missing';
  driftSeverity: 'low' | 'medium' | 'high' | 'critical';
  affectedScope: string;
  estimatedDurationSec: number;
  canAutoRemediate: boolean;
  createdAt: Date;
}

interface ScheduleWindow {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
  timezone: string;
  maxConcurrentTasks: number;
}

interface RemediationSchedule {
  tasks: RemediationTask[];
  scheduleWindow: ScheduleWindow;
  proposedOrder: RemediationTask[];
  totalEstimatedMinutes: number;
  windowCapacityMinutes: number;
  fitsInWindow: boolean;
  overflowCount: number;
}

class DriftScheduler {
  private windows: ScheduleWindow[];
  private history: Map<string, Date> = new Map();

  constructor(windows: ScheduleWindow[]) {
    this.windows = windows;
  }

  schedule(tasks: RemediationTask[], currentDate: Date): RemediationSchedule {
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const availableWindow = this.windows.find(w => w.dayOfWeek === currentDay && currentHour >= w.startHour && currentHour < w.endHour);

    if (!availableWindow) {
      const nextWindow = this.findNextWindow(currentDate);
      if (!nextWindow) throw new Error('No available maintenance windows');
      return this.buildDeferredSchedule(tasks, nextWindow);
    }

    const prioritized = this.prioritizeRemediation(tasks);
    const windowCapacity = availableWindow.endHour - currentHour;
    const windowCapacityMinutes = windowCapacity * 60;
    const totalEstimated = prioritized.reduce((s, t) => s + t.estimatedDurationSec, 0) / 60;
    const fitsInWindow = totalEstimated <= windowCapacityMinutes;

    const allowed = fitsInWindow ? prioritized : prioritized.slice(0, Math.floor(windowCapacityMinutes / (totalEstimated / prioritized.length)));
    const overflow = fitsInWindow ? [] : prioritized.slice(allowed.length);

    return {
      tasks, scheduleWindow: availableWindow,
      proposedOrder: allowed,
      totalEstimatedMinutes: Math.ceil(totalEstimated),
      windowCapacityMinutes, fitsInWindow,
      overflowCount: overflow.length,
    };
  }

  prioritizeRemediation(tasks: RemediationTask[]): RemediationTask[] {
    return [...tasks].sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const catOrder = { security: 0, missing: 1, size: 2, config: 3, tag: 4 };
      const aKey = `${severityOrder[a.driftSeverity]}-${catOrder[a.driftCategory]}`;
      const bKey = `${severityOrder[b.driftSeverity]}-${catOrder[b.driftCategory]}`;
      return aKey.localeCompare(bKey);
    });
  }

  markCompleted(taskId: string): void {
    this.history.set(taskId, new Date());
  }

  private findNextWindow(from: Date): ScheduleWindow | null {
    for (let offset = 0; offset < 7; offset++) {
      const checkDay = (from.getDay() + offset) % 7;
      const window = this.windows.find(w => w.dayOfWeek === checkDay);
      if (window) return window;
    }
    return null;
  }

  private buildDeferredSchedule(tasks: RemediationTask[], window: ScheduleWindow): RemediationSchedule {
    const prioritized = this.prioritizeRemediation(tasks);
    return {
      tasks, scheduleWindow: window,
      proposedOrder: prioritized,
      totalEstimatedMinutes: Math.ceil(prioritized.reduce((s, t) => s + t.estimatedDurationSec, 0) / 60),
      windowCapacityMinutes: (window.endHour - window.startHour) * 60,
      fitsInWindow: false, overflowCount: 0,
    };
  }
}

const scheduler = new DriftScheduler([
  { dayOfWeek: 1, startHour: 2, endHour: 5, timezone: 'UTC', maxConcurrentTasks: 3 },
  { dayOfWeek: 3, startHour: 2, endHour: 5, timezone: 'UTC', maxConcurrentTasks: 3 },
  { dayOfWeek: 5, startHour: 3, endHour: 6, timezone: 'UTC', maxConcurrentTasks: 2 },
]);

const tasks: RemediationTask[] = [
  { id: 'drift-001', resourceId: 'sg-prod-web', driftCategory: 'security', driftSeverity: 'high', affectedScope: 'production', estimatedDurationSec: 90, canAutoRemediate: true, createdAt: new Date() },
  { id: 'drift-002', resourceId: 'instance-db-01', driftCategory: 'size', driftSeverity: 'medium', affectedScope: 'production', estimatedDurationSec: 180, canAutoRemediate: true, createdAt: new Date() },
  { id: 'drift-003', resourceId: 'bucket-logs', driftCategory: 'config', driftSeverity: 'low', affectedScope: 'staging', estimatedDurationSec: 45, canAutoRemediate: true, createdAt: new Date() },
];

const schedule = scheduler.schedule(tasks, new Date('2026-06-25T03:00:00Z'));
console.log(`Schedule: ${schedule.proposedOrder.length} tasks in window (${schedule.totalEstimatedMinutes}min of ${schedule.windowCapacityMinutes}min), overflow: ${schedule.overflowCount}`);
```

**What this demonstrates:** A drift remediation scheduler ensures high-severity drifts are fixed within defined maintenance windows while preventing schedule overflow.

---

## Practical Takeaways

1. **Use dynamic inventories for cloud environments.** Don't maintain static host lists.
2. **Integrate with a secrets manager.** Use Vault, SSM, or Azure Key Vault for runtime secrets.
3. **Run compliance checks as regular playbooks.** Automate CIS benchmark verification.
4. **Use pull mode for large fleets.** ansible-pull scales better than push for 1000+ nodes.
5. **Run Ansible Tower/AWX for enterprise teams.** Web UI, RBAC, scheduling, auditing.
6. **Use check mode first.** Always preview changes with `--check` before applying.

---

## Chapter Quiz

<details><summary>Question 1: What is a dynamic inventory in Ansible?</summary>**A)** A static host list<br>**B)** An inventory that queries cloud APIs for host information<br>**C)** A manually maintained host file<br>**D)** A YAML file with hostnames<br><br>**Answer: B)** An inventory that queries cloud APIs for host information&lt;/details&gt;

<details><summary>Question 2: What is the purpose of Ansible Tower/AWX?</summary>**A)** A code editor<br>**B)** Enterprise Ansible management with UI, RBAC, and scheduling<br>**C)** An alternative to Docker<br>**D)** A monitoring tool<br><br>**Answer: B)** Enterprise Ansible management with UI, RBAC, and scheduling&lt;/details&gt;

<details><summary>Question 3: How does ansible-pull differ from default Ansible?</summary>**A)** It pushes configuration to nodes<br>**B)** Nodes pull configuration from Git and apply locally<br>**C)** It requires a control node<br>**D)** It only works with Windows<br><br>**Answer: B)** Nodes pull configuration from Git and apply locally&lt;/details&gt;

<details><summary>Question 4: What is the benefit of using delegate_to in Ansible?</summary>**A)** It speeds up playbook execution<br>**B)** It runs tasks on a specific host (like localhost) while targeting others<br>**C)** It delegates to another playbook<br>**D)** It creates new users<br><br>**Answer: B)** It runs tasks on a specific host (like localhost) while targeting others&lt;/details&gt;

<details><summary>Question 5: How should secrets be handled in Ansible playbooks?</summary>**A)** Stored in plaintext in variables<br>**B)** Loaded from a secrets manager or Ansible Vault at runtime<br>**C)** Hardcoded in tasks<br>**D)** Passed via command-line arguments<br><br>**Answer: B)** Loaded from a secrets manager or Ansible Vault at runtime&lt;/details&gt;

---


// configuration mgmt
// cicd-infrastructure-automation implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'configuration mgmt', data: { topic: 'cicd-infrastructure-automation' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }
## Summary

- Dynamic inventories query cloud APIs (AWS, Azure, GCP) to discover hosts automatically.
- Ansible Tower/AWX provides enterprise features: RBAC, scheduling, approvals, and auditing.
- Compliance automation uses Ansible to enforce CIS benchmarks and security hardening.
- Secrets should be injected from HashiCorp Vault, AWS SSM, or Azure Key Vault at runtime.
- ansible-pull enables nodes to fetch configuration from Git and apply it locally.
- Delegation runs tasks on specific hosts while targeting others (e.g., API calls from localhost).
- Ansible modules for Docker and Kubernetes extend configuration management to containers.
- CI/CD integration automates playbook execution on infrastructure changes.

---

## Exercises

### Review Questions
1. How does a dynamic inventory differ from a static inventory?
2. What are the advantages of pull mode over push mode for large deployments?
3. How does Ansible Tower improve team collaboration on playbooks?
4. What is the purpose of delegate_to and when should you use it?
5. How can you integrate HashiCorp Vault with Ansible?

### Application Problems
1. Create a dynamic inventory configuration for AWS EC2 instances tagged with `Role=web` and `Environment=production`.
2. Write a compliance playbook that checks and remediates SSH hardening settings.
3. Configure an Ansible workflow that deploys a Docker container with Kubernetes integration.
4. Implement a secrets management pattern that loads database credentials from Vault at runtime.

### Application Problems (continued)
5. Using the `ComplianceScanner` class, implement a complete CIS Level 1 compliance scanner for Ubuntu Linux that checks: SSH configuration (no root login, key-only auth), filesystem permissions (shadow, passwd, sudoers), kernel parameters (IP forwarding disabled, source routing disabled), and audit logging enabled. Generate an HTML report with severity-colored rows.
6. Implement a `DynamicInventoryManager` class that: queries a simulated AWS API (return list of EC2 instances with tags), groups instances by tag (Role, Environment), generates an Ansible-compatible inventory YAML with host groups, and supports filtering by custom criteria (e.g., "all production web servers with instance type t3.large").

### Challenge Problem
1. Design a complete enterprise configuration management system using Ansible including: dynamic inventory for 500+ AWS EC2 instances across 3 environments, Ansible Tower/AWX with RBAC (developers can deploy to dev/staging, operators approve prod), compliance automation running CIS benchmarks daily with email reports for violations, secrets integration with HashiCorp Vault for dynamic database credentials, pull-mode configuration for auto-scaling instances using ansible-pull, CI/CD integration running playbooks from GitHub Actions on infrastructure changes, and a self-service portal (via Tower API) allowing developers to trigger common playbooks.
