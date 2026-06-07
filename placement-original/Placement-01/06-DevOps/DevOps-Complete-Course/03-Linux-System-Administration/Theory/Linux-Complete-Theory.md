# 🐧 Linux System Administration - Complete Theory

## 📋 Linux Fundamentals

### What is Linux?
- Open-source Unix-like operating system
- Kernel developed by Linus Torvalds
- Multiple distributions (Ubuntu, CentOS, RHEL, Debian)

### Linux Architecture
```
Applications → Shell → Kernel → Hardware
```

## 🔧 Essential Commands

### File System Navigation
```bash
pwd                    # Print working directory
ls -la                 # List files with details
cd /path/to/directory  # Change directory
find /path -name "*.txt"  # Find files
locate filename        # Locate files quickly
```

### File Operations
```bash
cp source destination  # Copy files
mv source destination  # Move/rename files
rm -rf directory      # Remove files/directories
chmod 755 file        # Change permissions
chown user:group file # Change ownership
```

### Text Processing
```bash
cat file.txt          # Display file content
grep "pattern" file   # Search text patterns
sed 's/old/new/g' file # Stream editor
awk '{print $1}' file # Text processing
sort file.txt         # Sort lines
uniq file.txt         # Remove duplicates
```

### Process Management
```bash
ps aux                # List all processes
top                   # Real-time process monitor
htop                  # Enhanced process monitor
kill -9 PID           # Kill process by PID
killall process_name  # Kill process by name
nohup command &       # Run command in background
```

### System Monitoring
```bash
df -h                 # Disk usage
du -sh directory      # Directory size
free -h               # Memory usage
uptime                # System uptime
iostat                # I/O statistics
netstat -tulpn        # Network connections
```

## 🌐 Networking

### Network Configuration
```bash
ip addr show          # Show IP addresses
ip route show         # Show routing table
ping google.com       # Test connectivity
wget http://url       # Download files
curl -I http://url    # HTTP requests
```

### Firewall Management
```bash
# UFW (Ubuntu)
ufw enable
ufw allow 22/tcp
ufw deny 80/tcp

# iptables
iptables -L
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

## 📦 Package Management

### APT (Debian/Ubuntu)
```bash
apt update            # Update package list
apt upgrade           # Upgrade packages
apt install package   # Install package
apt remove package    # Remove package
apt search keyword    # Search packages
```

### YUM/DNF (RHEL/CentOS)
```bash
yum update            # Update packages
yum install package   # Install package
yum remove package    # Remove package
dnf install package   # DNF (newer)
```

## 🔐 User Management

### User Operations
```bash
useradd username      # Add user
usermod -aG group user # Add user to group
passwd username       # Change password
su - username         # Switch user
sudo command          # Execute as root
```

### Group Management
```bash
groupadd groupname    # Create group
groupdel groupname    # Delete group
groups username       # Show user groups
```

## 🔒 Security

### File Permissions
```bash
# Permission format: rwxrwxrwx (owner, group, others)
chmod 644 file        # rw-r--r--
chmod 755 directory   # rwxr-xr-x
chmod +x script.sh    # Add execute permission
```

### SSH Configuration
```bash
ssh-keygen -t rsa     # Generate SSH key
ssh-copy-id user@host # Copy public key
ssh user@host         # Connect via SSH
```

## 📊 System Services

### Systemd Services
```bash
systemctl start service    # Start service
systemctl stop service     # Stop service
systemctl restart service  # Restart service
systemctl enable service   # Enable at boot
systemctl status service   # Check status
journalctl -u service      # View logs
```

## 🔧 Shell Scripting Basics

### Basic Script Structure
```bash
#!/bin/bash
# Script description

# Variables
NAME="DevOps"
COUNT=10

# Conditions
if [ $COUNT -gt 5 ]; then
    echo "Count is greater than 5"
fi

# Loops
for i in {1..5}; do
    echo "Number: $i"
done

# Functions
function backup_files() {
    tar -czf backup.tar.gz /important/files
}
```

## 🚀 Performance Tuning

### System Optimization
- Monitor resource usage
- Optimize kernel parameters
- Configure swap space
- Tune I/O schedulers
- Manage system limits

### Log Management
```bash
# Log rotation
logrotate /etc/logrotate.conf

# System logs
tail -f /var/log/syslog
journalctl -f
```