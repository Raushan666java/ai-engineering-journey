# Chapter 2: Linux Fundamentals for DevOps

---

## Learning Objectives

- Navigate the Linux file system using standard CLI tools.
- Manage users, permissions, and groups to ensure system security.
- Understand and manipulate Linux processes and signals.
- Use package managers (APT/YUM) to install and manage software.
- Write basic Bash scripts to automate routine tasks.

---

## Theory

### The Linux Architecture and Shell
Linux is the backbone of DevOps because of its stability, security, and powerful command-line interface (CLI). The architecture consists of the Kernel (the core), the Shell (the interface), and Userspace applications. The Shell (usually Bash) allows DevOps engineers to interact with the OS through commands, which is essential for automation.

### File System and Permissions
Linux treats everything as a file. Understanding the directory structure (e.g., `/etc` for config, `/var` for logs, `/bin` for binaries) is crucial. Permissions are managed using a tri-partite system: Owner, Group, and Others. Each category has Read (r), Write (w), and Execute (x) bits.
- **Notation:** `-rwxr-xr--` (754 in octal) means owner has all permissions, group can read and execute, others can only read.

### Process Management
A process is a running instance of a program. Every process has a unique PID (Process ID).
- **Life Cycle:** Processes are created using `fork()` and replaced using `exec()`.
- **States:** Running, Sleeping, Stopped, or Zombie.
- **Signals:** Commands like `kill` send signals to processes (e.g., `SIGTERM` for graceful shutdown, `SIGKILL` for immediate termination).

---

## Examples

### Example 1: Managing Permissions
A DevOps engineer needs to ensure a log directory is writable by the web server but not by other users.
- **Step-by-step:**
  1. Create a directory: `mkdir /var/www/logs`
  2. Change ownership to the `www-data` user: `chown www-data:www-data /var/www/logs`
  3. Set permissions so only owner and group can write: `chmod 775 /var/www/logs`
- **Expected output:** `ls -ld /var/www/logs` shows `drwxrwxr-x`.
- **What the example demonstrates:** Applying the principle of least privilege using standard Linux tools.

### Example 2: Basic Automation Script
Automating the backup of a configuration directory.
- **Step-by-step:**
  1. Create a script `backup.sh`:
     ```bash
     #!/bin/bash
     TIMESTAMP=$(date +%Y%m%d_%H%M%S)
     tar -czf /backups/etc_backup_$TIMESTAMP.tar.gz /etc
     echo "Backup completed at $TIMESTAMP"
     ```
  2. Make it executable: `chmod +x backup.sh`
  3. Run it: `./backup.sh`
- **Expected output:** A compressed archive in `/backups/` and a success message.
- **What the example demonstrates:** Using variables and system commands in Bash to create reusable automation.

---

## Summary

- Linux is the primary operating system for servers and cloud infrastructure in DevOps.
- The command line interface (CLI) is the fundamental tool for server management and automation.
- File permissions (rwx) are essential for securing system resources and applications.
- Process management allows engineers to monitor and control system performance and stability.
- Bash scripting provides a simple yet powerful way to automate repetitive tasks and glue tools together.

---

## Exercises

### Review Questions
1. What is the difference between `/bin` and `/sbin`?
2. Explain the meaning of the permission `744` in Linux.
3. What is a "Zombie" process?
4. How do you find the PID of a running process named "nginx"?

### Application Problems
1. Write a command to find all files in `/var/log` that are larger than 100MB.
2. Create a user named `deployer` and add them to a group named `devops`.
3. Write a one-liner to kill all processes owned by the user `testuser`.

### Challenge Problem
1. Write a Bash script that monitors a specific log file and sends an alert (echoes a message) whenever the word "ERROR" appears in real-time.
