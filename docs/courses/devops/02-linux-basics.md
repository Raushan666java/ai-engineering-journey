# Chapter 2: Linux Basics for DevOps

> **Next:** [Advanced Git](./02-git.md)

---

## Learning Objectives

- Understand the Linux filesystem hierarchy and navigate it effectively.
- Master essential command-line operations for file management, process control, and system administration.
- Understand file permissions, users, and groups.
- Use pipes, redirection, and text processing tools.
- Write and debug shell scripts for automation.
- Configure networking and manage services with systemd.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Filesystem Hierarchy | Standard directory layout (FHS) | Know where configs, logs, and binaries live |
| Command Line | Core utilities for daily DevOps work | `grep`, `awk`, `sed`, `find` are indispensable |
| Permissions | Read/write/execute for user/group/other | Use `chmod`, `chown`, `umask` daily |
| Pipes and Redirection | Chain commands together | Build pipelines like `ps aux | grep | awk` |
| Shell Scripting | Automate repetitive tasks | Parameterize scripts for CI/CD |
| systemd | Service management and boot process | `systemctl` for all service operations |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Filesystem Hierarchy] --> B[Shell Basics]
    B --> C[File Operations]
    B --> D[Process Management]
    B --> E[Permissions]
    C --> F[Pipes & Redirection]
    D --> F
    E --> F
    F --> G[Text Processing]
    G --> H[Shell Scripting]
    H --> I[systemd Services]
    H --> J[Network Configuration]
    I & J --> K[Automation]
```

## Theory

### Filesystem Hierarchy Standard (FHS)

Linux follows the Filesystem Hierarchy Standard, which defines the directory structure:

| Directory | Purpose |
|-----------|---------|
| `/` | Root directory, base of the filesystem |
| `/bin` | Essential user command binaries (e.g., `ls`, `cp`) |
| `/sbin` | System administration binaries (e.g., `fdisk`, `mkfs`) |
| `/etc` | System-wide configuration files |
| `/var` | Variable data (logs, databases, spools) |
| `/tmp` | Temporary files (cleared on reboot) |
| `/home` | Personal directories for users |
| `/root` | Home directory for root user |
| `/usr` | Secondary hierarchy for user utilities and applications |
| `/opt` | Optional third-party software packages |
| `/proc` | Virtual filesystem for process and kernel information |
| `/dev` | Device files representing hardware |

Understanding this hierarchy is crucial for DevOps work because logs live in `/var/log`, configs in `/etc`, and executables in `/usr/bin`. When writing automated scripts or configuring CI/CD agents, knowing where to find and place files is fundamental.

### Essential Command-Line Operations

**Navigation and File Operations:**
- `pwd` — Print working directory
- `ls -la` — List all files with details
- `cd ~/project` — Change directory
- `cp -r src/ dest/` — Copy recursively
- `mv old new` — Move or rename
- `rm -rf dir/` — Remove directory recursively (dangerous)
- `mkdir -p a/b/c` — Create nested directories
- `touch file.txt` — Create empty file or update timestamp
- `find /path -name "*.log"` — Search for files

**File Viewing:**
- `cat file` — Display entire file
- `less file` — Scroll through file (press `q` to quit)
- `head -20 file` — First 20 lines
- `tail -f file` — Follow file in real-time (crucial for logs)
- `nl file` — Numbered lines

**Process Management:**
- `ps aux` — All processes with details
- `top` or `htop` — Interactive process viewer
- `kill -9 PID` — Force kill process
- `pgrep -f pattern` — Search processes by name
- `pkill -f pattern` — Kill processes by pattern
- `nice -n 10 command` — Run with lower priority

**System Information:**
- `uname -a` — Kernel version and system info
- `df -h` — Disk space usage
- `du -sh /path` — Directory size
- `free -h` — Memory usage
- `uptime` — System uptime and load average
- `lscpu` — CPU information

### File Permissions

Every file and directory has three permission sets (owner, group, others) with three modes (read, write, execute).

```text
-rwxr-xr--  1 user group  1024 Jun 24 10:00 script.sh
|  |  |  |
|  |  |  +- Others: read only (r--)
|  |  +---- Group: read and execute (r-x)
|  +------- Owner: read, write, execute (rwx)
+---------- File type (- for file, d for directory)
```

**Numeric permissions (octal):**
- `r` = 4, `w` = 2, `x` = 1
- `chmod 755 file` = owner rwx (7), group r-x (5), others r-x (5)
- `chmod 644 file` = owner rw- (6), group r-- (4), others r-- (4)

**Common commands:**
```text
chmod 755 script.sh     # Make script executable
chown user:group file   # Change owner and group
umask 022               # Default permissions for new files
chmod +x script.sh      # Add execute permission
chmod -R 755 directory/  # Recursively set permissions
```

### Pipes, Redirection, and Streams

Linux uses three standard I/O streams:
- **stdin** (0) — Input to command
- **stdout** (1) — Normal output
- **stderr** (2) — Error output

**Redirection operators:**
```text
command > file      # Redirect stdout to file (overwrite)
command >> file     # Redirect stdout to file (append)
command 2> file     # Redirect stderr to file
command &> file     # Redirect both stdout and stderr
command < file      # Read stdin from file
command << EOF      # Here document (inline input)
```

**Pipes** connect stdout of one command to stdin of another:
```text
ps aux | grep nginx | awk '{print $2}'
cat access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -10
```

### Text Processing Power Tools

**`grep` — Pattern searching:**
```text
grep "ERROR" app.log                    # Find lines containing ERROR
grep -v "DEBUG" app.log                 # Exclude DEBUG lines
grep -i "warning" app.log               # Case-insensitive
grep -r "TODO" src/                     # Recursive search in directory
grep -E "ERROR|FATAL" app.log           # Extended regex (multiple patterns)
grep -c "pattern" file                  # Count matches
grep -A 5 -B 5 "ERROR" log              # 5 lines after and before match
```

**`sed` — Stream editor:**
```text
sed -i 's/old/new/g' file               # Replace all occurrences in-place
sed -n '/ERROR/p' log                   # Print only ERROR lines
sed '/^#/d' config                      # Delete comment lines
sed '1,10d' file                        # Delete first 10 lines
sed 's/  */,/g' data                    # Convert spaces to commas
```

**`awk` — Pattern scanning and processing:**
```text
awk '{print $1}' file                   # Print first column
awk -F: '{print $1, $3}' /etc/passwd   # Use : as delimiter
awk '$3 > 100 {print $1}' data          # Conditional print
awk '{sum+=$1} END {print sum}' file    # Sum column values
awk 'NR==FNR {a[$1]; next} $1 in a' f1 f2  # Join two files
```

### Shell Scripting

Shell scripts automate repetitive tasks. They are essential for CI/CD pipelines, deployment scripts, and system administration.

**Basic script structure:**
```bash
#!/bin/bash
set -euo pipefail  # Strict mode: exit on error, undefined vars, pipe failures

# Variables
PROJECT_DIR="/var/www/app"
BACKUP_DIR="/backups/$(date +%Y%m%d)"
LOG_FILE="/var/log/deploy.log"

# Functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

cleanup() {
    log "Cleaning up temporary files..."
    rm -rf /tmp/deploy-*
}

# Trap for cleanup on exit
trap cleanup EXIT

# Main
log "Starting deployment..."
mkdir -p "$BACKUP_DIR"
if cp -r "$PROJECT_DIR" "$BACKUP_DIR"; then
    log "Backup created successfully"
else
    log "ERROR: Backup failed"
    exit 1
fi
```

**Key scripting patterns:**
- **Parameter expansion:** `${VAR:-default}`, `${VAR:?error message}`
- **Arrays:** `arr=(a b c)`, `${arr[@]}`, `${#arr[@]}`
- **Conditionals:** `if, elif, else, case`
- **Loops:** `for i in list; do done`, `while read line; do done`
- **Exit codes:** `$?` for last command status
- **Command substitution:** `$(command)` or `` `command` ``

### systemd Service Management

Modern Linux uses systemd for service management, boot process, and logging.

**Common `systemctl` commands:**
```text
systemctl start nginx          # Start a service
systemctl stop nginx           # Stop a service
systemctl restart nginx        # Restart a service
systemctl status nginx         # Check service status
systemctl enable nginx         # Start on boot
systemctl disable nginx        # Disable auto-start
systemctl reload nginx         # Reload configuration
systemctl daemon-reload        # Reload unit files after change
```

**Creating a systemd unit file (`/etc/systemd/system/myapp.service`):**
```ini
[Unit]
Description=My Application Service
After=network.target postgresql.service
Wants=postgresql.service

[Service]
Type=simple
User=myapp
Group=myapp
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

**Journald logging:**
```text
journalctl -u nginx              # Service-specific logs
journalctl -u nginx --since "1 hour ago"
journalctl -u nginx -f           # Follow log in real-time
journalctl --disk-usage          # Check log size
journalctl --vacuum-size=500M    # Limit log size
```

### Network Configuration

```text
ip addr              # Show network interfaces and IPs
ip route             # Show routing table
ss -tulpn            # Show listening ports and processes
netstat -tulpn       # (Legacy) Show network connections
ping -c 4 host       # Test connectivity
traceroute host      # Trace network path
nslookup domain      # DNS lookup
curl -v URL          # HTTP request with debugging
wget URL             # Download file
nc -zv host port     # Test TCP port connectivity
```

### Package Management

**Debian/Ubuntu (APT):**
```text
apt update                      # Update package index
apt upgrade                     # Upgrade all packages
apt install nginx               # Install package
apt remove nginx                # Remove package
apt autoremove                  # Remove unused dependencies
dpkg -l | grep nginx            # List installed packages
```

**RHEL/CentOS/Fedora (YUM/DNF):**
```text
yum update                      # Update all packages
yum install nginx               # Install package
yum remove nginx                # Remove package
rpm -qa | grep nginx            # List installed packages
```

---

## Examples

### Example 1: Log Analysis Pipeline

A common DevOps task is analyzing application logs to diagnose issues.

```bash
#!/bin/bash
set -euo pipefail

LOG_FILE="/var/log/app/error.log"
REPORT_FILE="/tmp/error_report.txt"

echo "=== Error Analysis Report ===" > "$REPORT_FILE"
echo "Generated: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Top 10 most common error messages
echo "Top 10 Error Messages:" >> "$REPORT_FILE"
grep -E "ERROR|FATAL" "$LOG_FILE" | \
    sed 's/.*\[ERROR\] //' | \
    sed 's/.*\[FATAL\] //' | \
    sort | uniq -c | sort -rn | head -10 >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"

# Error count by hour
echo "Errors by Hour (last 24h):" >> "$REPORT_FILE"
awk '{print $2}' "$LOG_FILE" | \
    cut -d: -f1 | \
    sort | uniq -c | sort -k2 >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"

# Endpoint-level error breakdown
echo "Errors by Endpoint:" >> "$REPORT_FILE"
grep -oP '\[route: \K[^\]]+' "$LOG_FILE" | \
    sort | uniq -c | sort -rn >> "$REPORT_FILE"

cat "$REPORT_FILE"
```

### Example 2: Deployment Rollback Script

```bash
#!/bin/bash
set -euo pipefail

APP_DIR="/var/www/myapp"
BACKUP_DIR="/backups/myapp"
RELEASE="$1"

if [ -z "$RELEASE" ]; then
    echo "Usage: $0 <release-tag>"
    exit 1
fi

echo "Rolling back to release: $RELEASE"

# Verify backup exists
if [ ! -d "$BACKUP_DIR/$RELEASE" ]; then
    echo "ERROR: Release $RELEASE not found in $BACKUP_DIR"
    exit 1
fi

# Create a backup of current state before rollback
CURRENT_BACKUP="/backups/pre-rollback-$(date +%Y%m%d_%H%M%S)"
cp -r "$APP_DIR" "$CURRENT_BACKUP"

# Perform rollback
rm -rf "$APP_DIR"/*
cp -r "$BACKUP_DIR/$RELEASE"/* "$APP_DIR"

# Restart service
systemctl restart myapp

# Verify health
sleep 5
HEALTH=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/health)
if [ "$HEALTH" = "200" ]; then
    echo "Rollback to $RELEASE successful"
else
    echo "ERROR: Health check failed after rollback"
    exit 1
fi
```

### Example 3: Resource Monitoring Script

```bash
#!/bin/bash
set -euo pipefail

THRESHOLD_CPU=80
THRESHOLD_MEM=90
ALERT_EMAIL="ops@example.com"

check_resources() {
    local cpu_usage mem_usage disk_usage

    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d. -f1)
    mem_usage=$(free | grep Mem | awk '{print int($3/$2 * 100)}')
    disk_usage=$(df -h / | awk 'NR==2 {print int($5)}')

    echo "CPU: ${cpu_usage}% | MEM: ${mem_usage}% | DISK: ${disk_usage}%"

    if [ "$cpu_usage" -gt "$THRESHOLD_CPU" ]; then
        echo "ALERT: CPU at ${cpu_usage}%" | mail -s "CPU Alert" "$ALERT_EMAIL"
    fi

    if [ "$mem_usage" -gt "$THRESHOLD_MEM" ]; then
        echo "ALERT: Memory at ${mem_usage}%" | mail -s "Memory Alert" "$ALERT_EMAIL"
    fi

    # Find top CPU consumers
    echo ""
    echo "Top 5 CPU consumers:"
    ps aux --sort=-%cpu | head -6 | awk '{print $2, $11, $3"%"}'
}

check_resources
```

### Example 4: Automated Backup with Rotation

```bash
#!/bin/bash
set -euo pipefail

BACKUP_SRC="/var/lib/postgresql/12/main"
BACKUP_DST="/backups/postgres"
RETENTION_DAYS=30
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DST/pg_backup_$TIMESTAMP.tar.gz"

# Create backup
tar -czf "$BACKUP_FILE" -C "$(dirname $BACKUP_SRC)" "$(basename $BACKUP_SRC)"

# Verify backup integrity
if ! tar -tzf "$BACKUP_FILE" >/dev/null 2>&1; then
    echo "ERROR: Backup corruption detected"
    rm -f "$BACKUP_FILE"
    exit 1
fi

# Remove backups older than retention period
find "$BACKUP_DST" -name "pg_backup_*.tar.gz" -mtime "+$RETENTION_DAYS" -delete

echo "Backup completed: $BACKUP_FILE"
echo "Size: $(du -h "$BACKUP_FILE" | cut -f1)"
```

---

### Process Monitor and Resource Tracker

Linux process monitoring is fundamental to DevOps operations. The following TypeScript implementation simulates process monitoring, resource tracking, and alerting.

```typescript
interface ProcessInfo {
  pid: number;
  name: string;
  cpuPercent: number;
  memoryMB: number;
  state: 'running' | 'sleeping' | 'stopped' | 'zombie';
  uptimeSeconds: number;
}

interface SystemAlert {
  type: 'cpu' | 'memory' | 'zombie' | 'oom';
  message: string;
  severity: 'warning' | 'critical';
  timestamp: Date;
}

class ProcessMonitor {
  private processes: ProcessInfo[] = [];
  private totalMemoryMB: number;

  constructor(totalMemoryMB: number = 16384) {
    this.totalMemoryMB = totalMemoryMB;
  }

  ingest(snapshot: ProcessInfo[]): SystemAlert[] {
    this.processes = snapshot;
    return this.checkAlerts();
  }

  private checkAlerts(): SystemAlert[] {
    const alerts: SystemAlert[] = [];
    const totalCpu = this.processes.reduce((s, p) => s + p.cpuPercent, 0);
    const totalMem = this.processes.reduce((s, p) => s + p.memoryMB, 0);

    if (totalCpu > 90) alerts.push({ type: 'cpu', message: `Total CPU at ${totalCpu.toFixed(1)}%`, severity: 'critical', timestamp: new Date() });
    if (totalMem > this.totalMemoryMB * 0.9) alerts.push({ type: 'memory', message: `Memory at ${(totalMem / 1024).toFixed(1)}GB / ${(this.totalMemoryMB / 1024)}GB`, severity: 'warning', timestamp: new Date() });

    const zombies = this.processes.filter(p => p.state === 'zombie');
    if (zombies.length > 0) alerts.push({ type: 'zombie', message: `${zombies.length} zombie processes detected`, severity: 'warning', timestamp: new Date() });

    return alerts;
  }

  findTopProcesses(n: number = 5, by: 'cpu' | 'memory' = 'cpu'): ProcessInfo[] {
    const key = by === 'cpu' ? 'cpuPercent' : 'memoryMB';
    return [...this.processes].sort((a, b) => b[key] - a[key]).slice(0, n);
  }
}

const monitor = new ProcessMonitor();
const alerts = monitor.ingest([
  { pid: 1001, name: 'nginx', cpuPercent: 2.1, memoryMB: 128, state: 'running', uptimeSeconds: 86400 },
  { pid: 1002, name: 'node', cpuPercent: 45.3, memoryMB: 512, state: 'running', uptimeSeconds: 3600 },
  { pid: 1003, name: 'python3', cpuPercent: 55.2, memoryMB: 256, state: 'running', uptimeSeconds: 7200 },
  { pid: 1004, name: 'defunct-app', cpuPercent: 0, memoryMB: 0, state: 'zombie', uptimeSeconds: 0 },
]);

console.log('Alerts:', alerts.map(a => `[${a.severity}] ${a.message}`).join('; '));
console.log('Top by CPU:', monitor.findTopProcesses(2, 'cpu').map(p => `${p.name}: ${p.cpuPercent}%`).join(', '));
```

**What this demonstrates:** Programmatic process monitoring enables automated anomaly detection, resource tracking, and alerting for Linux-based production systems.

---

### Shell Script Validator and Analyzer

Shell scripts are the backbone of DevOps automation. The following tool validates script correctness, detects common errors, and enforces best practices.

```typescript
// shell-validator.ts
// Analyze and validate shell scripts for best practices

interface ShellScript {
  content: string[];
  shebang: string | null;
  hasStrictMode: boolean;
  hasTraps: boolean;
  functionCount: number;
  lineCount: number;
}

interface ShellIssue {
  line: number;
  severity: 'error' | 'warning' | 'info';
  message: string;
  rule: string;
}

interface ValidationReport {
  script: ShellScript;
  issues: ShellIssue[];
  score: number;
  pass: boolean;
}

class ShellScriptValidator {
  private readonly strictPatterns = [
    { pattern: /set\s+-[a-z]*e[a-z]*/, flag: 'e', description: 'exit on error' },
    { pattern: /set\s+-[a-z]*u[a-z]*/, flag: 'u', description: 'undefined variable error' },
    { pattern: /set\s+-[a-z]*o\s+pipefail/, flag: 'o pipefail', description: 'pipe failure detection' },
  ];

  analyze(content: string): ShellScript {
    const lines = content.split('\n');
    const shebang = lines[0]?.startsWith('#!') ? lines[0] : null;

    const hasStrictMode = lines.some(l => /set\s+-[a-z]*e[a-z]*/.test(l)) &&
      lines.some(l => /set\s+-[a-z]*u[a-z]*/.test(l));

    const hasTraps = lines.some(l => /^trap\s+/.test(l));
    const functionCount = lines.filter(l => /^\s*(function\s+)?[a-zA-Z_][a-zA-Z0-9_]*\s*\(\)\s*\{/.test(l)).length;

    return {
      content: lines,
      shebang,
      hasStrictMode,
      hasTraps,
      functionCount,
      lineCount: lines.length,
    };
  }

  validate(content: string): ValidationReport {
    const script = this.analyze(content);
    const issues: ShellIssue[] = [];
    const lines = script.content;

    // Check for missing shebang
    if (!script.shebang) {
      issues.push({ line: 1, severity: 'error', message: 'Missing shebang (#!) line', rule: 'SHEBANG' });
    }

    // Check strict mode
    if (!script.hasStrictMode) {
      issues.push({ line: 1, severity: 'error', message: 'Missing set -euo pipefail (strict mode)', rule: 'STRICT' });
    }

    // Check for unquoted variables
    lines.forEach((line, i) => {
      const quotes = line.match(/\$\{[^}]*\}/g) || line.match(/\$[a-zA-Z_][a-zA-Z0-9_]*/g);
      if (quotes && !line.trim().startsWith('#') && !line.includes('"') && !line.includes("'")) {
        issues.push({ line: i + 1, severity: 'warning', message: 'Unquoted variable expansion', rule: 'QUOTING' });
      }
    });

    // Check for cd without error handling
    lines.forEach((line, i) => {
      if (/^cd\s+/.test(line.trim()) && !/cd\s+.+\|\||cd\s+.+\||\|\|/.test(line.trim())) {
        issues.push({ line: i + 1, severity: 'warning', message: 'cd without error handling (use || exit)', rule: 'CD_CHECK' });
      }
    });

    // Check for using backticks instead of $()
    lines.forEach((line, i) => {
      if (/`[^`]+`/.test(line) && !line.trim().startsWith('#')) {
        issues.push({ line: i + 1, severity: 'info', message: 'Use $(...) instead of backticks', rule: 'SUBSTITUTION' });
      }
    });

    // Check for trap cleanup
    if (!script.hasTraps) {
      issues.push({ line: lines.length, severity: 'warning', message: 'No trap for cleanup (risks leaving temp files)', rule: 'TRAP' });
    }

    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const score = Math.max(0, 100 - errorCount * 25 - warningCount * 10);
    const pass = errorCount === 0;

    return { script, issues, score, pass };
  }

  generateReport(report: ValidationReport): string {
    return `## Shell Script Validation\n\n` +
      `**Score:** ${report.score}/100 | **Pass:** ${report.pass ? '?' : '?'}\n` +
      `**Lines:** ${report.script.lineCount} | **Functions:** ${report.script.functionCount}\n\n` +
      `| Line | Severity | Message |\n` +
      `|------|----------|---------|\n` +
      report.issues.map(i => `| ${i.line} | ${i.severity} | ${i.message} |`).join('\n') + '\n';
  }
}

const validator = new ShellScriptValidator();
const badScript = `#!/bin/bash
echo Hello $name
cd /tmp
rm -rf data
for f in $(ls); do
  echo $f
done`;

const result = validator.validate(badScript);
console.log(validator.generateReport(result));
```

**What this demonstrates:** Automated shell script validation catches common errors (unquoted variables, missing strict mode, unsafe cd) before they cause production incidents, and enforces DevOps scripting standards across teams.

---

### Linux Process Monitor Service

The following tool implements a process monitoring service that tracks resource usage, detects anomalies, and generates alerts.

```typescript
// process-monitor.ts
// Monitor and manage Linux processes

interface ProcessInfo {
  pid: number;
  name: string;
  cpuPercent: number;
  memPercent: number;
  state: 'R' | 'S' | 'D' | 'Z' | 'T';
  uptimeSeconds: number;
  threadCount: number;
}

interface ProcessThresholds {
  maxCpuPercent: number;
  maxMemPercent: number;
  maxThreadCount: number;
  minUptimeForAlert: number;
}

interface ProcessAlert {
  process: ProcessInfo;
  reason: string;
  timestamp: Date;
  severity: 'critical' | 'warning';
}

class ProcessMonitor {
  private alerts: ProcessAlert[] = [];
  private history: Map<number, ProcessInfo[]> = new Map();

  constructor(private thresholds: ProcessThresholds) {}

  snapshot(processes: ProcessInfo[]): ProcessInfo[] {
    for (const proc of processes) {
      if (!this.history.has(proc.pid)) {
        this.history.set(proc.pid, []);
      }
      this.history.get(proc.pid)!.push(proc);

      this.checkThresholds(proc);
    }
    return processes;
  }

  private checkThresholds(proc: ProcessInfo): void {
    if (proc.uptimeSeconds < this.thresholds.minUptimeForAlert) return;

    if (proc.cpuPercent > this.thresholds.maxCpuPercent) {
      this.alerts.push({
        process: proc, reason: `CPU at ${proc.cpuPercent}% (max ${this.thresholds.maxCpuPercent}%)`,
        timestamp: new Date(), severity: proc.cpuPercent > this.thresholds.maxCpuPercent * 1.5 ? 'critical' : 'warning',
      });
    }

    if (proc.memPercent > this.thresholds.maxMemPercent) {
      this.alerts.push({
        process: proc, reason: `Memory at ${proc.memPercent}% (max ${this.thresholds.maxMemPercent}%)`,
        timestamp: new Date(), severity: proc.memPercent > this.thresholds.maxMemPercent * 1.5 ? 'critical' : 'warning',
      });
    }

    if (proc.threadCount > this.thresholds.maxThreadCount) {
      this.alerts.push({
        process: proc, reason: `Threads at ${proc.threadCount} (max ${this.thresholds.maxThreadCount})`,
        timestamp: new Date(), severity: 'warning',
      });
    }
  }

  getAlerts(severity?: 'critical' | 'warning'): ProcessAlert[] {
    return severity ? this.alerts.filter(a => a.severity === severity) : this.alerts;
  }

  getSpikingProcesses(window: number = 5): string[] {
    const spiking: string[] = [];
    for (const [pid, snapshots] of this.history) {
      if (snapshots.length < 2) continue;
      const recent = snapshots.slice(-window);
      const avgCpu = recent.reduce((s, p) => s + p.cpuPercent, 0) / recent.length;
      if (avgCpu > this.thresholds.maxCpuPercent * 0.8) {
        spiking.push(`PID ${pid} (${recent[0].name}): avg ${avgCpu.toFixed(1)}% CPU`);
      }
    }
    return spiking;
  }
}

const monitor = new ProcessMonitor({ maxCpuPercent: 80, maxMemPercent: 70, maxThreadCount: 500, minUptimeForAlert: 10 });
const procs: ProcessInfo[] = [
  { pid: 1001, name: 'nginx', cpuPercent: 2.1, memPercent: 1.5, state: 'S', uptimeSeconds: 3600, threadCount: 6 },
  { pid: 1002, name: 'node', cpuPercent: 95.3, memPercent: 45.2, state: 'R', uptimeSeconds: 120, threadCount: 12 },
  { pid: 1003, name: 'java', cpuPercent: 30.1, memPercent: 65.8, state: 'S', uptimeSeconds: 7200, threadCount: 256 },
];

monitor.snapshot(procs);
console.log('Alerts:', monitor.getAlerts());
console.log('Spiking:', monitor.getSpikingProcesses());
```

**What this demonstrates:** Systematic process monitoring detects resource anomalies early, distinguishes warning from critical thresholds, and enables proactive intervention before outages.

---

## Practical Takeaways

1. **Learn the find-grep-awk pipeline.** It's the single most powerful pattern for DevOps work.
2. **Master `set -euo pipefail` in every script.** It prevents silent failures.
3. **Use `journalctl` over raw log files.** systemd's journal provides better filtering.
4. **Always trap cleanup.** Scripts should never leave the system in an inconsistent state.
5. **Use `systemctl` commands.** Learn `start`, `stop`, `restart`, `status`, `enable`, `disable`, `reload`, and `daemon-reload`.

---

## Chapter Quiz

<details><summary>Question 1: What does the `set -euo pipefail` do in a bash script?</summary>**A)** Enables debugging mode<br>**B)** Exits on error, undefined variables, and pipe failures<br>**C)** Sets environment variables<br>**D)** Configures logging<br><br>**Answer: B)** Exits on error, undefined variables, and pipe failures</details>

<details><summary>Question 2: Which command shows all listening ports and their associated processes?</summary>**A)** `ps aux`<br>**B)** `ss -tulpn`<br>**C)** `netstat -r`<br>**D)** `ip addr`<br><br>**Answer: B)** `ss -tulpn`</details>

<details><summary>Question 3: What does `chmod 755` mean?</summary>**A)** Owner can read/write/execute, everyone else can read/execute<br>**B)** Everyone can read/write/execute<br>**C)** Owner can read/execute, everyone else can read<br>**D)** Owner can read/write, group can read, others can read<br><br>**Answer: A)** Owner can read/write/execute, everyone else can read/execute</details>

<details><summary>Question 4: What is the purpose of a systemd unit file?</summary>**A)** To define how a service is managed<br>**B)** To configure the kernel<br>**C)** To set environment variables<br>**D)** To schedule cron jobs<br><br>**Answer: A)** To define how a service is managed</details>

<details><summary>Question 5: How do you permanently prevent a service from starting on boot?</summary>**A)** `systemctl stop nginx`<br>**B)** `systemctl disable nginx`<br>**C)** `systemctl mask nginx`<br>**D)** `systemctl reset nginx`<br><br>**Answer: B)** `systemctl disable nginx`</details>

---

## TypeScript: Linux Automation with Node.js

DevOps engineers often automate Linux tasks. TypeScript with Node.js provides a cross-platform alternative to bash for complex automation:

```typescript
// linux-automation.ts
// System administration tasks automated with TypeScript

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

interface SystemHealth {
  diskUsage: number;
  memoryUsage: number;
  cpuLoad: number;
  runningServices: number;
  failedServices: number;
}

class LinuxSystemAdmin {
  private logFile: string;

  constructor(logDir = '/var/log/admin') {
    this.logFile = path.join(logDir, `system-check-${new Date().toISOString().slice(0, 10)}.log`);
    if (!fs.existsSync(logDir)) {
      execSync(`mkdir -p ${logDir}`);
    }
  }

  checkHealth(): SystemHealth {
    const df = execSync("df / | tail -1 | awk '{print $5}'").toString().trim();
    const free = execSync("free | grep Mem | awk '{printf \"%.0f\", $3/$2 * 100}'").toString().trim();
    const load = execSync("uptime | awk -F'load average:' '{print $2}' | cut -d, -f1").toString().trim();
    const services = execSync('systemctl list-units --type=service --state=running --no-legend | wc -l').toString().trim();
    const failed = execSync('systemctl list-units --type=service --state=failed --no-legend | wc -l').toString().trim();

    return {
      diskUsage: parseInt(df),
      memoryUsage: parseInt(free),
      cpuLoad: parseFloat(load),
      runningServices: parseInt(services),
      failedServices: parseInt(failed),
    };
  }

  checkThresholds(health: SystemHealth): string[] {
    const alerts: string[] = [];
    if (health.diskUsage > 90) alerts.push(`ALERT: Disk usage at ${health.diskUsage}%`);
    if (health.memoryUsage > 90) alerts.push(`ALERT: Memory at ${health.memoryUsage}%`);
    if (health.failedServices > 0) alerts.push(`ALERT: ${health.failedServices} failed services`);
    return alerts;
  }

  logResult(health: SystemHealth, alerts: string[]): void {
    const entry = [
      `=== System Check ${new Date().toISOString()} ===`,
      `Disk: ${health.diskUsage}% | Memory: ${health.memoryUsage}% | Load: ${health.cpuLoad}`,
      `Services: ${health.runningServices} running, ${health.failedServices} failed`,
      ...alerts,
      '',
    ].join('\n');
    fs.appendFileSync(this.logFile, entry);
    console.log(alerts.length ? alerts.join('\n') : 'System healthy');
  }

  cleanupLogs(daysToKeep = 30): void {
    const cutoff = Date.now() - daysToKeep * 86400000;
    const logDir = path.dirname(this.logFile);
    fs.readdirSync(logDir).forEach(file => {
      const filePath = path.join(logDir, file);
      if (fs.statSync(filePath).mtimeMs < cutoff) {
        fs.unlinkSync(filePath);
        console.log(`Removed old log: ${file}`);
      }
    });
  }
}

// Usage
const admin = new LinuxSystemAdmin();
const health = admin.checkHealth();
const alerts = admin.checkThresholds(health);
admin.logResult(health, alerts);
admin.cleanupLogs();
```

## Mermaid: Systemd Service Lifecycle

```mermaid
stateDiagram-v2
    [*] --> inactive
    inactive --> activating : systemctl start
    activating --> active : Started successfully
    activating --> failed : Startup failure
    active --> deactivating : systemctl stop
    deactivating --> inactive : Stopped
    active --> reloading : systemctl reload
    reloading --> active : Reloaded
    active --> failed : Process crash
    failed --> inactive : systemctl reset-failed
    inactive --> enabled : systemctl enable (boot auto-start)
    enabled --> disabled : systemctl disable
    disabled --> enabled : systemctl enable
```

## Mermaid: Linux Process States

```mermaid
flowchart TD
    A[Process Created: fork/exec] --> B{Running}
    B -->|Preempted by scheduler| C[Runnable]
    C -->|Scheduled| B
    B -->|Waiting for I/O| D[Sleeping - Interruptible]
    B -->|Waiting for disk I/O| E[Sleeping - Uninterruptible]
    D -->|I/O complete| C
    E -->|I/O complete| C
    B -->|Stopped by signal| F[Stopped]
    F -->|SIGCONT| C
    B -->|Exit| G[Zombie - waiting for parent]
    G -->|Parent reaps| H[Terminated]
```

## Deeper Explanation: Linux Performance Troubleshooting

**The USE Method (Brendan Gregg) for Linux:**

| Resource | Utilization | Saturation | Errors |
|----------|-------------|------------|--------|
| CPU | `mpstat` (%user, %sys) | Load average, run queue | `dmesg` machine check |
| Memory | `free` (used/total) | Swap usage, OOM | `dmesg` OOM killer |
| Disk | `iostat` (%util) | I/O wait, queue depth | `smartctl` errors |
| Network | `sar -n DEV` (bandwidth) | Interface drops, backlog | `ifconfig` errors |
| Filesystem | `df` (space used) | `inode` count | `dmesg` FS errors |

**Quick triage flow:**
1. `uptime` ? load averages (if > CPU cores, saturation)
2. `dmesg -T | tail` ? kernel errors (OOM, disk I/O errors)
3. `vmstat 1` ? run queue, swapping, context switches
4. `mpstat -P ALL 1` ? per-CPU utilization
5. `pidstat 1` ? top processes by CPU
6. `iostat -xz 1` ? disk I/O and await times
7. `sar -n DEV 1` ? network throughput and errors


// git
// cicd-infrastructure-automation implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
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
  await proc.add({ id: '1', name: 'git', data: { topic: 'cicd-infrastructure-automation' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }
## Summary

- The Linux filesystem hierarchy (FHS) standardizes where configuration, log, and binary files reside.
- Core command-line tools (`grep`, `awk`, `sed`, `find`) form the foundation of DevOps automation.
- File permissions control access at owner, group, and other levels using read/write/execute flags.
- Pipes and redirection chain commands into powerful data processing pipelines.
- Shell scripting with strict mode (`set -euo pipefail`) creates reliable automation scripts.
- systemd manages services, processes, and logging across modern Linux distributions.
- Network tools (`ss`, `curl`, `ping`) enable connectivity and service health checks.
- Package managers like APT and YUM handle software installation and updates.
- Log analysis pipelines combine multiple text processing tools for operational insights.

---

## Exercises

### Review Questions
1. What is the FHS standard and why is it important?
2. Explain the difference between `stdout` and `stderr` redirection.
3. How do you make a bash script executable from the command line?
4. What is the difference between `systemctl enable` and `systemctl start`?
5. How would you find the 10 largest files in a directory?

### Application Problems
1. Write a bash script that monitors disk usage and sends an alert when usage exceeds 90%.
2. Create a systemd unit file for a Node.js application that depends on PostgreSQL.
3. Build a log analysis pipeline that extracts all 5xx errors from an access log.
4. Write a deployment script that backs up the current version, deploys new code, and supports rollback.
5. Implement the TypeScript system admin tool above. Add a webhook notification that sends Alerts to a Slack channel when disk usage exceeds 90% or memory exceeds 85%.
6. Using the USE method, diagnose a system with high load averages but low CPU utilization. What commands would you run to identify the bottleneck? Write a script that automates this diagnosis and produces a report.

### Challenge Problem
1. Write a complete bash framework for automated deployment that includes: pre-deployment checks (disk space, service health), backup creation, zero-downtime deployment (blue-green or canary), health verification after deploy, and automatic rollback on failure. The script should log everything to syslog and send notifications via both email and webhook.
