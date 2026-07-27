<!-- Clear Language: Keep sentences under 50 words -->
# Process Management — Monitoring, Signals, Resource Control

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Monitor system processes using ps, top, htop, and process trees |
| LO2 | Manage processes with kill signals, priority control (nice/renice) |
| LO3 | Understand Linux process states and the process lifecycle |
| LO4 | Configure services with systemd (units, journalctl, systemctl) |
| LO5 | Apply cgroups for resource limits and control groups management |
| LO6 | Implement process monitoring for AI/ML training workloads |

## Introduction

Process management is essential for AI engineers who run resource-intensive training jobs, manage model serving, and monitor system health. Understanding processes, signals, and resource control helps you debug performance issues and keep systems stable.

## Prerequisites

- Basic Linux command line skills
- Understanding of CPU, memory, and I/O concepts
- Familiarity with shell scripting basics

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

### Process States in Linux

```mermaid
stateDiagram-v2
    [*] --> Runnable: fork()/exec()
    Runnable --> Running: scheduler selects
    Running --> Runnable: preempted/time slice
    Running --> Sleeping: I/O wait
    Running --> Stopped: SIGSTOP/SIGTSTP
    Stopped --> Runnable: SIGCONT
    Running --> Zombie: exit() (parent hasn't reaped)
    Zombie --> [*]: wait() by parent
    Sleeping --> Runnable: I/O complete
    Sleeping --> Running: signal/interrupt
    Running --> UninterruptibleSleep: kernel I/O (D state)
    UninterruptibleSleep --> Runnable: I/O complete
```

**Process states**:

| Code | State | Description |
|------|-------|-------------|
| R | Runnable | Running or ready to run |
| S | Sleeping | Waiting for an event/interruptible |
| D | Uninterruptible Sleep | Kernel I/O wait (cannot be killed) |
| T | Stopped | Suspended by signal |
| Z | Zombie | Terminated, awaiting parent reaping |
| X | Dead | Process cleaned up |

### Process Monitoring with ps

```bash
# List all processes
ps aux

# Custom format
ps -eo pid,ppid,cmd,%cpu,%mem,stat,user

# Tree view
ps auxf
ps -ejH

# Process by name
ps aux | grep python

# Specific PID info
ps -fp 1234

# Threads of a process
ps -eLf | grep 1234

# Sort by memory usage
ps aux --sort=-%mem | head -10

# Sort by CPU usage
ps aux --sort=-%cpu | head -10

# Show process environment
ps -eww 1234

# Security context
ps -eo pid,user,label,cmd
```

**ps output fields**:

| Field | Meaning |
|-------|---------|
| PID | Process ID |
| PPID | Parent Process ID |
| %CPU | CPU utilization |
| %MEM | Memory utilization |
| VSZ | Virtual memory size (KB) |
| RSS | Resident set size (KB) |
| STAT | Process state code |
| START | Start time |
| TIME | Cumulative CPU time |
| CMD | Command with arguments |

### Interactive Monitoring with top and htop

```bash
# Basic top
top

# Batch mode (for scripts)
top -b -n 1

# Sort by memory
top -o %MEM

# Show only specific user processes
top -u ubuntu

# Monitor specific PIDs
top -p 1234,5678

# Update interval (seconds)
top -d 2

# Install htop
sudo apt install htop

# Interactive htop (better than top)
htop

# Tree view in htop
htop -t

# Filter by process name
htop -p 1234

# Show process tree (F5 in htop)
```

**htop interactive commands**:

| Key | Action |
|-----|--------|
| F3 | Search process |
| F4 | Filter by name |
| F5 | Tree view |
| F6 | Sort by column |
| F9 | Kill process |
| F10 | Quit |
| u | Show user processes |
| t | Toggle tree view |
| H | Toggle threads |
| K | Toggle kernel threads |

### Process Priority and Nice Values

```bash
# Start process with low priority
nice -n 19 ./training-script.sh

# Start with high priority (requires root)
nice -n -20 ./critical-service.sh

# Check priority of running processes
ps -eo pid,nice,cmd

# Change priority of running process
renice -n 10 -p 1234

# Change priority by process name
renice -n 5 -g python

# Show priority ranges
# -20 (highest priority) to 19 (lowest priority)
# Default: 0

# Real-time priority (RT, for time-critical)
chrt -r 99 ./realtime-task.sh

# Check scheduling policy
chrt -p 1234

# Set scheduling policy
chrt -f -p 50 1234
```

**Scheduling policies**:

| Policy | Flag | Use Case |
|--------|------|----------|
| SCHED_OTHER | NORMAL | Default time-sharing |
| SCHED_BATCH | BATCH | CPU-intensive batch jobs |
| SCHED_IDLE | IDLE | Very low priority |
| SCHED_FIFO | FIFO | Real-time, no time slicing |
| SCHED_RR | RR | Real-time, round-robin |

### Process Signals

```bash
# List all signals
kill -l

# Common signals:
# SIGTERM (15) - Graceful termination (default)
# SIGKILL (9) - Force kill (cannot be caught)
# SIGSTOP (19) - Pause process (cannot be caught)
# SIGCONT (18) - Resume process
# SIGHUP (1) - Hang up / reload config
# SIGINT (2) - Interrupt (Ctrl+C)
# SIGQUIT (3) - Quit with core dump
# SIGUSR1 (10) - User-defined signal 1
# SIGUSR2 (12) - User-defined signal 2

# Send signals by PID
kill 1234                # SIGTERM
kill -9 1234             # SIGKILL
kill -15 1234            # SIGTERM (explicit)
kill -SIGSTOP 1234       # STOP
kill -SIGCONT 1234       # CONT

# Kill by process name
pkill python
pkill -f "train.py"

# Kill all processes of a user
pkill -u ubuntu

# Kill specific signal by name
pkill -HUP nginx

# Kill processes matching pattern
killall python3
killall -9 training

# Check if process exists
kill -0 1234  # Returns 0 if alive, error if not
```

### Systemd Service Management

```bash
# Systemd service lifecycle
systemctl start service-name
systemctl stop service-name
systemctl restart service-name
systemctl reload service-name
systemctl enable service-name
systemctl disable service-name
systemctl status service-name
systemctl is-active service-name
systemctl is-enabled service-name

# Service unit file location
# /etc/systemd/system/service-name.service
# /lib/systemd/system/service-name.service

# List all services
systemctl list-units --type=service

# List failed services
systemctl --failed

# View service dependencies
systemctl list-dependencies service-name

# Mask/unmask (prevent starting)
systemctl mask service-name
systemctl unmask service-name
```

**Systemd unit file example**:

```text
# /etc/systemd/system/ml-training.service
[Unit]
Description=ML Model Training Service
After=network.target
Wants=gpu-monitor.service

[Service]
Type=simple
User=mluser
Group=mlgroup
WorkingDirectory=/opt/ml-project
EnvironmentFile=/etc/ml-training.env
ExecStart=/usr/bin/python3 /opt/ml-project/train.py --config production.yaml
ExecReload=/bin/kill -HUP $MAINPID
Restart=on-failure
RestartSec=10
LimitNOFILE=65536
LimitNPROC=4096
CPUQuota=80%
MemoryMax=32G
TasksMax=8192

# GPU access
DeviceAllow=/dev/nvidia0
DeviceAllow=/dev/nvidiactl

# Security
PrivateTmp=true
ProtectSystem=full
ProtectHome=true
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

**Journalctl (log viewing)**:

```bash
# View all logs
journalctl

# Follow latest logs
journalctl -f

# Service-specific logs
journalctl -u ml-training.service

# Since last boot
journalctl -b

# Last hour
journalctl --since "1 hour ago"

# Specific time range
journalctl --since "2024-01-01 00:00:00" --until "2024-01-02 00:00:00"

# Priority-based
journalctl -p err -b

# JSON output
journalctl -u ml-training.service -o json

# Show recent N lines
journalctl -u ml-training.service -n 50

# Disk usage
journalctl --disk-usage

# Vacuum old logs
journalctl --vacuum-time=30d
journalctl --vacuum-size=500M
```

### Cgroups (Control Groups)

Cgroups limit and account for resource usage of process groups.

```bash
# List cgroup controllers
cat /proc/cgroups

# Check cgroup version (v1 vs v2)
stat -fc %T /sys/fs/cgroup/
# tmpfs = v1, cgroup2fs = v2

# View cgroup hierarchy
ls /sys/fs/cgroup/

# Create cgroup (v2)
sudo mkdir /sys/fs/cgroup/ml-jobs
sudo bash -c 'echo "+cpu +memory" > /sys/fs/cgroup/cgroup.subtree_control'
sudo bash -c 'echo "+memory +cpu" > /sys/fs/cgroup/ml-jobs/cgroup.subtree_control'

# Set limits
sudo bash -c 'echo "32G" > /sys/fs/cgroup/ml-jobs/memory.max'
sudo bash -c 'echo "80000 100000" > /sys/fs/cgroup/ml-jobs/cpu.max'

# Add process to cgroup
sudo bash -c 'echo 1234 > /sys/fs/cgroup/ml-jobs/cgroup.procs'

# View cgroup stats
cat /sys/fs/cgroup/ml-jobs/memory.current
cat /sys/fs/cgroup/ml-jobs/cpu.stat

# Systemd integration
systemd-cgls  # Tree view of cgroups
systemd-cgtop  # Top-like for cgroups
```

**Using systemd resource control**:

```bash
# Run command with limits
systemd-run --user --scope -p MemoryMax=16G -p CPUQuota=50% python train.py

# Run as service with transient unit
systemd-run --unit=ml-job-1 -p MemoryMax=32G -p CPUQuota=200% python train.py

# View cgroup for service
systemctl show ml-job-1.service -p ControlGroup

# Resource control properties:
# CPUQuota=200% (2 cores)
# MemoryMax=32G
# MemoryHigh=24G (memory throttle point)
# TasksMax=4096 (max threads)
# IOReadBandwidthMax=/dev/sda 100M
# IOWriteBandwidthMax=/dev/sda 100M
```

### Process Monitoring in AI Workflows

```bash
# Monitor GPU processes
nvidia-smi
nvidia-smi pmon  # Process monitor
nvidia-smi dmon  # Device monitor

# Watch GPU usage continuously
watch -n 1 nvidia-smi

# Monitor specific training process
while true; do
    ps -p $(pgrep -f train.py) -o pid,%cpu,%mem,rss,vsz,etime --no-headers
    sleep 5
done

# Find GPU memory by process
nvidia-smi --query-compute-apps=pid,used_memory --format=csv

# Monitor disk I/O per process
iotop -o -p 1234

# Network traffic per process
nethogs

# Process tree visualization
pstree -p -u ubuntu

# Full process details in /proc
cat /proc/1234/status
cat /proc/1234/limits
cat /proc/1234/environ  # null-separated
ls /proc/1234/fd/      # Open file descriptors
ls /proc/1234/task/    # Threads
```

### Resource Limits (ulimit)

```bash
# View all limits
ulimit -a

# Set file descriptor limit
ulimit -n 65536

# Set core file size (0 = disable)
ulimit -c unlimited

# Set max user processes
ulimit -u 4096

# Set virtual memory limit
ulimit -v unlimited

# Persistent limits in /etc/security/limits.conf
echo "mluser soft nofile 65536" >> /etc/security/limits.conf
echo "mluser hard nofile 1048576" >> /etc/security/limits.conf
echo "mluser soft nproc 4096" >> /etc/security/limits.conf
echo "mluser hard nproc 8192" >> /etc/security/limits.conf

# System-wide limits
# /etc/sysctl.conf
# fs.file-max = 2097152
# kernel.pid_max = 4194303
# vm.max_map_count = 262144
```

## Visual Explanation

```mermaid
flowchart TD
    A[Process Lifecycle] --> B[fork/exec]
    B --> C[Runnable]
    C --> D{Running?}
    D -->|Yes| E[Running]
    D -->|No| C
    E --> F{Event?}
    F -->|I/O Wait| G[Sleeping]
    F -->|Stop Signal| H[Stopped]
    F -->|Time Slice End| C
    F -->|Exit| I[Zombie]
    G -->|I/O Complete| C
    H -->|SIGCONT| C
    I -->|parent wait| J[Removed]
    E -->|OOM| K[Killed]
    E -->|Signal| L[Terminated]
    subgraph Monitoring Tools
        M[ps aux]
        N[top/htop]
        O[systemctl]
        P[journalctl]
        Q[nvidia-smi]
    end
    style A fill:#4a90d9,color:#fff
    style J fill:#50b86c,color:#fff
    style K fill:#e85d75,color:#fff
```

## Real Example

Think of process management like running a restaurant kitchen. The chef (kernel) manages many cooks (processes). Each cook has a state: working on a dish (running), waiting for ingredients (sleeping), or on a break (stopped). The nice value is like priority — head chef has -20 (VIP dish first), dishwasher has 19 (low priority). Signals are like commands: "stop" (SIGSTOP), "continue" (SIGCONT), "clock out" (SIGTERM), or "get out immediately" (SIGKILL). Cgroups are like sections — the pastry section has a max of 2 cooks, the grill has 4. Systemd is the restaurant manager who ensures all stations are staffed and restarts anyone who walks out.

## Code Example

```python
#!/usr/bin/env python3
"""Process management and monitoring for ML training"""

import os
import time
import signal
import subprocess
import psutil
from typing import Dict, List, Optional


class MLTrainingProcess:
    """Manage and monitor ML training processes"""

    def __init__(self, name: str, cmd: List[str], gpu_ids: Optional[List[int]] = None):
        self.name = name
        self.cmd = cmd
        self.gpu_ids = gpu_ids
        self.process: Optional[subprocess.Popen] = None
        self.log_file = f"/var/log/ml/{name}.log"

    def start(self) -> None:
        """Start training process with resource limits"""
        env = os.environ.copy()
        if self.gpu_ids:
            env["CUDA_VISIBLE_DEVICES"] = ",".join(map(str, self.gpu_ids))

        log_fd = open(self.log_file, "a")
        self.process = subprocess.Popen(
            self.cmd,
            stdout=log_fd,
            stderr=subprocess.STDOUT,
            env=env,
            preexec_fn=os.setsid
        )
        print(f"[+] Started {self.name} (PID: {self.process.pid})")

    def set_cpu_quota(self, quota_percent: int) -> None:
        """Set CPU quota via cgroups"""
        if self.process is None:
            return
        pid = self.process.pid
        cgroup = f"/sys/fs/cgroup/ml/{self.name}"
        os.makedirs(cgroup, exist_ok=True)

        # Configure CPU quota (e.g., 200% = 2 cores)
        period = 100000
        quota = int(period * quota_percent / 100)
        with open(f"{cgroup}/cpu.max", "w") as f:
            f.write(f"{quota} {period}\n")

        # Set memory limit
        with open(f"{cgroup}/memory.max", "w") as f:
            f.write("16G\n")

        # Add process to cgroup
        with open(f"{cgroup}/cgroup.procs", "w") as f:
            f.write(str(pid))

        print(f"[+] Resource limits applied: CPU {quota_percent}%, Memory 16G")

    def get_stats(self) -> Dict:
        """Get real-time process statistics"""
        if self.process is None:
            return {}

        try:
            proc = psutil.Process(self.process.pid)
            cpu_percent = proc.cpu_percent(interval=1.0)
            mem_info = proc.memory_info()
            children = proc.children(recursive=True)

            stats = {
                "pid": self.process.pid,
                "cpu_percent": cpu_percent,
                "memory_rss_mb": mem_info.rss / 1024 / 1024,
                "memory_vms_mb": mem_info.vms / 1024 / 1024,
                "num_threads": proc.num_threads(),
                "num_children": len(children),
                "status": proc.status(),
                "uptime_seconds": time.time() - proc.create_time(),
                "cpu_times": {
                    "user": proc.cpu_times().user,
                    "system": proc.cpu_times().system,
                },
            }

            # GPU stats if available
            try:
                result = subprocess.run(
                    ["nvidia-smi", "--query-compute-apps=pid,used_memory",
                     "--format=csv,noheader"],
                    capture_output=True, text=True, timeout=5
                )
                for line in result.stdout.strip().split("\n"):
                    if line and str(self.process.pid) in line:
                        stats["gpu_memory_mb"] = int(line.split(",")[1].strip().replace(" MiB", ""))
            except Exception:
                pass

            return stats
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            return {}

    def send_signal(self, sig: int = signal.SIGTERM) -> bool:
        """Send signal to process group"""
        if self.process is None:
            return False
        try:
            pgid = os.getpgid(self.process.pid)
            os.killpg(pgid, sig)
            sig_name = signal.Signals(sig).name
            print(f"[+] Sent {sig_name} to {self.name} (PGID: {pgid})")
            return True
        except ProcessLookupError:
            print(f"[-] Process {self.name} not found")
            return False

    def wait_for_completion(self, timeout: Optional[int] = None) -> int:
        """Wait for process to complete"""
        try:
            returncode = self.process.wait(timeout=timeout)
            print(f"[+] {self.name} exited with code {returncode}")
            return returncode
        except subprocess.TimeoutExpired:
            print(f"[-] {self.name} timed out after {timeout}s")
            self.send_signal(signal.SIGKILL)
            return -1

    def cleanup(self) -> None:
        """Clean up zombie processes and logs"""
        if self.process and self.process.poll() is not None:
            try:
                self.process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                pass
        print(f"[+] Cleaned up {self.name}")


if __name__ == "__main__":
    trainer = MLTrainingProcess(
        name="bert-finetune",
        cmd=["python3", "train.py", "--model", "bert-base", "--epochs", "10"],
        gpu_ids=[0, 1]
    )
    trainer.start()
    trainer.set_cpu_quota(150)

    # Monitor until completion
    try:
        while True:
            stats = trainer.get_stats()
            if not stats:
                break
            print(f"  CPU: {stats['cpu_percent']:.1f}% | "
                  f"RAM: {stats['memory_rss_mb']:.0f}MB | "
                  f"Threads: {stats['num_threads']} | "
                  f"Status: {stats['status']}")
            if stats.get('gpu_memory_mb'):
                print(f"  GPU Mem: {stats['gpu_memory_mb']}MB")
            time.sleep(5)
    except KeyboardInterrupt:
        print("\n[!] Interrupted, stopping...")
        trainer.send_signal(signal.SIGTERM)

    trainer.wait_for_completion(timeout=3600)
    trainer.cleanup()
```

**Expected Output**:
```text
[+] Started bert-finetune (PID: 12345)
[+] Resource limits applied: CPU 150%, Memory 16G
  CPU: 120.5% | RAM: 2456MB | Threads: 8 | Status: running
  GPU Mem: 4096MB
  CPU: 145.2% | RAM: 3120MB | Threads: 8 | Status: running
  GPU Mem: 6144MB
[+] bert-finetune exited with code 0
[+] Cleaned up bert-finetune
```

## Interview Questions

<details class="tp-qa-card" data-qid="git08-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What are the different process states in Linux and how do they transition?
  </summary>
  <div class="tp-qa-answer">
    <p>Linux has five primary process states. <strong>Running (R)</strong>: process is executing or ready to execute. <strong>Sleeping (S)</strong>: waiting for I/O or a signal, can be interrupted. <strong>Uninterruptible Sleep (D)</strong>: waiting for kernel I/O (disk), cannot be killed. <strong>Stopped (T)</strong>: suspended by a signal like SIGSTOP or SIGTSTP. <strong>Zombie (Z)</strong>: process terminated but parent hasn't called wait() to reap it. Transitions: fork/exec creates a process in Runnable state. Scheduler picks it to Run. I/O wait moves to Sleeping. Signals can Stop or Continue. Exit creates Zombie until parent reaps.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the difference between SIGTERM and SIGKILL.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>SIGTERM (15)</strong> is the default signal sent by kill. It requests graceful termination — the process can catch SIGTERM, clean up resources, save state, and exit. SIGTERM is the polite way to stop a process. <strong>SIGKILL (9)</strong> forces immediate termination. It cannot be caught, blocked, or ignored by the process. The kernel immediately stops the process. Use SIGKILL only when SIGTERM fails. For ML training: first try SIGTERM (saves checkpoint), wait a few seconds, then SIGKILL if still running. Always try SIGTERM before SIGKILL.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What are nice values and how do they affect process scheduling?
  </summary>
  <div class="tp-qa-answer">
    <p>Nice values range from -20 (highest priority) to 19 (lowest priority). Default is 0. The nice value is a "niceness" hint to the scheduler — a higher nice value means "be nicer to other processes." The kernel uses nice values to calculate the process's priority. A process with nice -20 gets more CPU time than a process with nice 19. Use <code>nice -n 19 command</code> to start with low priority. Use <code>renice -n 5 -p PID</code> to change priority of a running process. Root can set negative nice values. For ML training, set nice 10-19 for non-critical experiments so interactive processes stay responsive.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does systemd manage services and what is a unit file?
  </summary>
  <div class="tp-qa-answer">
    <p>systemd is the init system and service manager for modern Linux. It manages services via <strong>unit files</strong> — declarative configuration files with .service, .timer, .socket, etc. extensions. A service unit file has three sections: <strong>[Unit]</strong> — description, dependencies (After, Wants, Requires). <strong>[Service]</strong> — start/stop/reload commands, restart behavior, user/group, resource limits, environment. <strong>[Install]</strong> — WantedBy specifies which target enables the service. Key commands: systemctl start/stop/restart/enable/disable/status. Journalctl views logs. systemd provides dependency-based parallel startup, socket activation, and resource control via cgroups.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What are control groups (cgroups) and why are they important for AI workloads?
  </summary>
  <div class="tp-qa-answer">
    <p>Cgroups limit, account for, and isolate resource usage of process groups. They provide: <strong>CPU limits</strong> — quota/period, share weighting. <strong>Memory limits</strong> — max usage, swap limit, OOM priority. <strong>I/O limits</strong> — read/write bandwidth and IOPS. <strong>PID limits</strong> — max number of processes. <strong>Device access</strong> — restrict which devices a group can use. For AI workloads: prevent one training job from consuming all GPU memory, limit CPU usage to leave room for model serving, ensure fair resource sharing among team members, and set memory limits to prevent OOM kills of critical services. systemd integrates cgroups automatically for each service.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do zombie processes form and how do you clean them up?
  </summary>
  <div class="tp-qa-answer">
    <p>A zombie process forms when a child process exits (via exit()) but the parent hasn't called wait() or waitpid() to read its exit status. The kernel keeps the process table entry (PID, exit status, resource usage) until the parent reaps it. Zombies show status Z in ps output. Causes: parent process bug (forgets to wait), parent process crashed before reaping. <strong>Cleanup</strong>: kill the parent process (SIGTERM) so the zombie children are inherited by init (PID 1), which automatically reaps them. If the parent can't be killed, you must fix the parent code. Zombies don't consume memory or CPU but they consume PID table entries, and the system can run out of PIDs.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the OOM killer and how does it decide which process to kill?
  </summary>
  <div class="tp-qa-answer">
    <p>When the system runs out of memory, the Out-Of-Memory (OOM) killer selects a process to terminate. It calculates an <strong>oom_score</strong> for each process based on: memory usage (RSS + swap), CPU time, runtime, process priority (nice), whether the process is root-owned, and whether it's a direct child of init. Higher oom_score means more likely to be killed. You can influence OOM selection: <code>echo -1000 &gt; /proc/PID/oom_score_adj</code> protects a process (never kill), <code>echo 1000</code> makes it a preferred target. ML training jobs often have high oom_score because they use lots of memory. Protect critical services like sshd and monitoring with oom_score_adj -500.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you monitor GPU processes and debug GPU memory issues?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>1) nvidia-smi</strong> — real-time GPU utilization, memory, temperature, processes. <strong>2) nvidia-smi pmon</strong> — per-process GPU metrics. <strong>3) nvidia-smi --query-compute-apps</strong> — PID to GPU memory mapping. <strong>4) nvtop</strong> — htop-like GPU monitor. <strong>5) gpustat</strong> — colorized GPU summary. <strong>6) Memory debugging</strong>: set <code>CUDA_LAUNCH_BLOCKING=1</code> for deterministic execution. Use <code>torch.cuda.memory_summary()</code> for PyTorch memory breakdown. <strong>7) Memory leak detection</strong>: monitor memory with <code>watch -n 1 nvidia-smi</code>. If memory grows continuously without release, there's a leak. <strong>8) OOM recovery</strong>: <code>fuser -v /dev/nvidia*</code> shows processes using GPU, then kill them.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: Explain process vs thread and how they appear in monitoring tools.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Process</strong>: independent execution unit with its own address space, file descriptors, and PID. <strong>Thread</strong>: lightweight execution unit within a process, shares address space and file descriptors with sibling threads. Each thread has its own thread ID (TID) and stack. In ps: <code>ps -eLf</code> shows threads (one line per thread). In top: press H to toggle thread view. In htop: press H for thread display. Python threads are OS-level (1:1 with kernel threads). ML frameworks use multiple threads for data loading, preprocessing, and GPU operations. <code>/proc/PID/task/</code> lists threads. Threads in the same process compete for resources together; processes are isolated.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git08-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How would you design a process monitoring system for a GPU cluster?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>1) Collection</strong>: Deploy node_exporter (Prometheus) on each node — collects CPU, memory, disk, network metrics. <strong>2) GPU metrics</strong>: Use dcgm-exporter (NVIDIA DCGM) for GPU metrics (utilization, memory, temperature, power). <strong>3) Process-level</strong>: Deploy a custom exporter that reads /proc and nvidia-smi to map PIDs to GPU memory. <strong>4) Alerting</strong>: Alert on GPU memory > 90%, process crashes, OOM events. <strong>5) Logging</strong>: Centralized logging with Loki or ELK, including journald logs from systemd services. <strong>6) Dashboard</strong>: Grafana dashboard showing cluster utilization, per-node GPU usage, top processes by resource consumption. <strong>7) Auto-recovery</strong>: Systemd restart policies, Kubernetes liveness probes, automated job resubmission on failure.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What ps command shows all processes with customized output fields?

a) ps -a
b) ps aux
c) ps -eLf
d) ps -eo pid,ppid,cmd,%cpu

<details class="tp-qa-card" data-qid="git08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) ps -eo pid,ppid,cmd,%cpu</strong></p><p><code>-e</code> selects all processes, <code>-o</code> specifies custom output format.</p></div></details>

**Q2**: Which signal cannot be caught or ignored by a process?

a) SIGTERM
b) SIGHUP
c) SIGKILL
d) SIGINT

<details class="tp-qa-card" data-qid="git08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) SIGKILL (9)</strong></p><p>SIGKILL forces immediate termination and cannot be caught, blocked, or ignored.</p></div></details>

**Q3**: What nice value range represents lowest priority?

a) -20
b) 0
c) 19
d) 99

<details class="tp-qa-card" data-qid="git08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 19</strong></p><p>Nice values range from -20 (highest priority) to 19 (lowest priority). 19 is the nicest.</p></div></details>

**Q4**: Which command views logs for a specific systemd service?

a) syslog -u
b) journalctl -u
c) systemctl logs
d) service --logs

<details class="tp-qa-card" data-qid="git08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) journalctl -u service-name</strong></p><p>journalctl -u filters logs by systemd unit name.</p></div></details>

**Q5**: What does the 'D' state mean in process status?

a) Dead
b) Uninterruptible sleep (disk I/O)
c) Detached
d) Defunct

<details class="tp-qa-card" data-qid="git08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Uninterruptible sleep</strong></p><p>D state means the process is waiting for kernel I/O and cannot be killed. Usually disk I/O.</p></div></details>

## Exercises

**Easy** — Use ps to find the top 5 memory-consuming processes. Use kill to send SIGTERM to a test process.

**Easy** — Start a process with nice value 15 using nice. Verify with ps -eo pid,nice,cmd.

**Medium** — Create a systemd service for a Python training script with automatic restart on failure. Test by simulating a crash.

**Medium** — Use cgroups v2 to limit a training process to 50% CPU and 8GB memory. Verify the limits are enforced.

**Hard** — Build a process monitor script in Python that tracks CPU, memory, and GPU stats for ML training processes and logs to a file.

**Hard** — Set up a GPU cluster monitoring stack with node_exporter, dcgm-exporter, Prometheus, and Grafana.

## Common Mistakes

1. Using SIGKILL instead of SIGTERM, causing data loss from unsaved checkpoints
2. Ignoring zombie processes until PID table exhaustion
3. Running ML training without any resource limits (can OOM the system)
4. Not setting ulimit for file descriptors when running distributed training
5. Confusing process states — especially D state (uninterruptible, not dead)

## Revision Notes

- Process states: R (running), S (sleeping), D (disk I/O), T (stopped), Z (zombie)
- ps aux shows all processes; ps -eo for custom format
- top/htop for interactive monitoring; sort by %MEM or %CPU
- Signals: SIGTERM (15) graceful, SIGKILL (9) immediate
- Nice values: -20 (highest) to 19 (lowest); renice to adjust
- systemd: systemctl manage services, journalctl view logs
- Cgroups: limit CPU, memory, I/O per process group
- OOM killer: oom_score_adj to protect critical processes
- No such thing as "D state = dead" — D state is I/O wait

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain how the Linux scheduler works and how nice values, cgroups, and real-time priorities interact.
2. Design a resource management system for a shared GPU cluster used by 50 ML engineers.

#### Amazon Style
1. Tell me about a time you debugged a process that was consuming too many resources.
2. How would you ensure fair resource allocation in a multi-tenant ML training environment?

#### Microsoft Style
1. How does process isolation work in Windows vs Linux for container workloads?
2. What monitoring and alerting would you set up for a production ML inference service?

#### NVIDIA Style
1. How would you monitor and debug GPU memory leaks in long-running training jobs?
2. What happens when an ML process hits a cgroup memory limit with CUDA allocations?

#### AI Startup Style
1. How would you set up process monitoring on a single GPU server with minimal cost?
2. What's the simplest way to prevent one training job from starving other services?

### Resume Tips
- **Technical Skills**: Process management, systemd, cgroups, resource monitoring, GPU debugging
- **Project Description**: "Implemented cgroup-based resource management for ML training, preventing OOM scenarios and improving cluster utilization by 40%"
- **Keywords**: ps, top, htop, kill, nice, renice, systemd, journalctl, cgroups, OOM, ulimit

### Interview Day Checklist
- [ ] Understand Linux process states and transitions
- [ ] Know the common kill signals and their use cases
- [ ] Practice explaining cgroups to interviewers
- [ ] Be ready to design a process monitoring system
- [ ] Understand OOM killer behavior and tuning

## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 35-50 minutes
**Prerequisites**: Linux command line, basic understanding of CPU/memory

## Tips & Tricks

**Tip**: Use `watch -n 1 'ps aux --sort=-%cpu | head -10'` for live process monitoring.

**Tip**: Set `ulimit -c unlimited` to get core dumps for debugging crashes.

**Pro Tip**: Use `systemd-run --user --scope -p MemoryMax=32G` to run ad-hoc commands with limits.

**Pro Tip**: Monitor /proc/meminfo and /proc/loadavg for system-level health checks.

## Memory Tricks

- **RSDZT** — Remember process states: **R**unning, **S**leeping, **D**isk, **Z**ombie, s**T**opped
- **STK** — Signal order: **S**IGTERM (try first), **T**ry again, **K**ILL (last resort)
- **-20 to 19** — Nice values: think "negative = mean (take CPU), positive = nice (share CPU)"
- **Z**ombie = **Z**ero resources but **Z**ero PIDs available

## Further Reading

- "Linux Kernel Development" by Robert Love
- systemd documentation (freedesktop.org)
- cgroups v2 documentation (kernel.org)
- NVIDIA DCGM documentation for GPU monitoring

## Related Topics

- Docker container resource limits (--cpus, --memory)
- Kubernetes resource requests and limits
- Cloud instance types and resource allocation
- ML job schedulers (Slurm, Ray, Kubernetes)

## FAQs

**Q: Can a process in D state be killed?**
**A**: No. Only completion of the I/O operation or system reboot can clear D state.

**Q: How many PIDs can a system have?**
**A**: Default kernel.pid_max = 32768 (can be increased to 4194303 on 64-bit).

**Q: What happens when cgroup memory limit is exceeded?**
**A**: The OOM killer targets the process that exceeded the limit within that cgroup.

## Important Notes

> **Note**: Regular monitoring prevents incidents. Set up alerts before problems occur.

> **Note**: Always use SIGTERM before SIGKILL to allow graceful shutdown.

> **Note**: Cgroups are essential for multi-tenant ML environments to prevent noisy neighbors.

## Security Considerations

- Never run training as root — use a dedicated service user
- cgroups prevent fork bombs and resource exhaustion attacks
- systemd PrivateTmp and ProtectSystem improve service security
- Monitor for unauthorized processes with auditd
- Restrict who can renice processes (CAP_SYS_NICE capability)

## Next Topic

After mastering process management, continue to cron automation for scheduling tasks, backups, and system administration.
