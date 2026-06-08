# 🐧 Linux for DevOps - Complete Syllabus
*Duration: 6-8 weeks | Focus: System Administration & Automation*

## Week 1: Linux Fundamentals 🟢

### Linux Basics & Architecture
**System Overview (2 days)**
```
Linux Architecture:
┌─────────────────────────────────┐
│        Applications             │
├─────────────────────────────────┤
│        Shell/CLI                │
├─────────────────────────────────┤
│        System Libraries         │
├─────────────────────────────────┤
│        Linux Kernel             │
├─────────────────────────────────┤
│        Hardware                 │
└─────────────────────────────────┘

Key Components:
- Kernel: Core system management
- Shell: Command interpreter (bash, zsh, fish)
- File System: Hierarchical directory structure
- Processes: Running programs
- Users/Groups: Access control
```

**Linux Distributions (1 day)**
```
Enterprise Distributions:
- RHEL/CentOS: Enterprise-focused, RPM packages
- Ubuntu: User-friendly, APT packages
- SUSE: Enterprise Linux, YaST configuration
- Debian: Stable, community-driven

Package Managers:
- APT (Ubuntu/Debian): apt, apt-get, dpkg
- YUM/DNF (RHEL/CentOS): yum, dnf, rpm
- Zypper (SUSE): zypper
- Pacman (Arch): pacman
```

**File System Hierarchy (2 days)**
```bash
# Standard Linux Directory Structure
/                    # Root directory
├── bin/            # Essential user binaries
├── boot/           # Boot loader files
├── dev/            # Device files
├── etc/            # System configuration files
├── home/           # User home directories
├── lib/            # Essential shared libraries
├── media/          # Removable media mount points
├── mnt/            # Temporary mount points
├── opt/            # Optional application software
├── proc/           # Process and kernel information
├── root/           # Root user home directory
├── run/            # Runtime data
├── sbin/           # Essential system binaries
├── srv/            # Service data
├── sys/            # System information
├── tmp/            # Temporary files
├── usr/            # User utilities and applications
└── var/            # Variable data files

# Important Directories for DevOps:
/etc/               # Configuration files
/var/log/           # Log files
/var/www/           # Web server files
/opt/               # Third-party applications
/home/user/         # User files
```

### Essential Commands
**File Operations (3 days)**
```bash
# Navigation
pwd                 # Print working directory
ls -la              # List files with details
cd /path/to/dir     # Change directory
cd ~                # Go to home directory
cd -                # Go to previous directory

# File Management
touch file.txt      # Create empty file
mkdir -p dir/subdir # Create directories recursively
cp -r source dest   # Copy files/directories
mv old_name new_name # Move/rename files
rm -rf directory    # Remove files/directories forcefully
ln -s target link   # Create symbolic link

# File Content
cat file.txt        # Display file content
less file.txt       # View file with pagination
head -n 10 file.txt # Show first 10 lines
tail -f /var/log/syslog # Follow log file in real-time
grep "pattern" file.txt # Search for pattern in file
grep -r "error" /var/log/ # Recursive search in directory

# File Permissions
chmod 755 script.sh # Change permissions (rwxr-xr-x)
chmod +x script.sh  # Make executable
chown user:group file # Change ownership
chgrp group file    # Change group ownership

# File Information
file filename       # Determine file type
stat filename       # Detailed file information
du -sh directory    # Directory size
df -h              # Disk space usage
find /path -name "*.log" # Find files by name
locate filename     # Find files using database
which command       # Find command location
whereis command     # Find command, source, manual
```

## Week 2: System Administration 🟡

### Process Management
**Process Control (3 days)**
```bash
# Process Viewing
ps aux              # List all processes
ps -ef              # Full format listing
pstree              # Process tree view
top                 # Real-time process monitor
htop                # Enhanced process monitor
jobs                # List active jobs

# Process Control
nohup command &     # Run command in background
command &           # Run in background
fg %1               # Bring job to foreground
bg %1               # Send job to background
kill PID            # Terminate process
kill -9 PID         # Force kill process
killall process_name # Kill all processes by name
pkill -f pattern    # Kill processes matching pattern

# Process Monitoring
pidof process_name  # Get PID of process
pgrep pattern       # Find processes by pattern
lsof -p PID         # List files opened by process
lsof -i :80         # List processes using port 80
netstat -tulpn      # Network connections and listening ports
ss -tulpn           # Modern replacement for netstat

# System Resources
free -h             # Memory usage
vmstat 1 5          # Virtual memory statistics
iostat 1 5          # I/O statistics
sar -u 1 5          # CPU usage statistics
uptime              # System uptime and load
w                   # Who is logged in and what they're doing
```

**Service Management (2 days)**
```bash
# SystemD Services (Modern Linux)
systemctl status nginx      # Check service status
systemctl start nginx       # Start service
systemctl stop nginx        # Stop service
systemctl restart nginx     # Restart service
systemctl reload nginx      # Reload configuration
systemctl enable nginx      # Enable at boot
systemctl disable nginx     # Disable at boot
systemctl list-units        # List all units
systemctl list-unit-files   # List unit files

# Service Logs
journalctl -u nginx         # View service logs
journalctl -f               # Follow system logs
journalctl --since "1 hour ago" # Logs from last hour
journalctl -p err           # Error level logs only

# Legacy Init Systems (SysV)
service nginx start         # Start service
service nginx status        # Check status
chkconfig nginx on          # Enable at boot (RHEL/CentOS)
update-rc.d nginx enable    # Enable at boot (Debian/Ubuntu)
```

### User & Group Management
**User Administration (2 days)**
```bash
# User Management
useradd -m -s /bin/bash username    # Create user with home directory
usermod -aG sudo username           # Add user to sudo group
userdel -r username                 # Delete user and home directory
passwd username                     # Change user password
chage -l username                   # View password aging info
id username                         # Show user ID and groups

# Group Management
groupadd groupname                  # Create group
groupmod -n newname oldname         # Rename group
groupdel groupname                  # Delete group
gpasswd -a username groupname       # Add user to group
gpasswd -d username groupname       # Remove user from group

# User Information
whoami                              # Current username
who                                 # Logged in users
last                                # Login history
finger username                     # User information
groups username                     # User's groups

# Switching Users
su - username                       # Switch to user
sudo command                        # Execute as root
sudo -u username command            # Execute as specific user
visudo                             # Edit sudoers file safely
```

## Week 3: File Systems & Storage 🟡

### File System Management
**Disk Management (3 days)**
```bash
# Disk Information
lsblk                   # List block devices
fdisk -l                # List disk partitions
df -h                   # File system disk usage
du -sh /path/*          # Directory sizes
mount                   # Show mounted file systems
findmnt                 # Tree view of mounted file systems

# Partitioning
fdisk /dev/sdb          # Partition disk (MBR)
gdisk /dev/sdb          # Partition disk (GPT)
parted /dev/sdb         # Advanced partitioning tool

# File System Creation
mkfs.ext4 /dev/sdb1     # Create ext4 file system
mkfs.xfs /dev/sdb1      # Create XFS file system
mkswap /dev/sdb2        # Create swap file system

# Mounting
mount /dev/sdb1 /mnt/data       # Mount file system
umount /mnt/data                # Unmount file system
mount -o remount,ro /mnt/data   # Remount as read-only

# Persistent Mounting (/etc/fstab)
/dev/sdb1 /mnt/data ext4 defaults 0 2
UUID=xxx /mnt/data ext4 defaults 0 2

# LVM (Logical Volume Management)
pvcreate /dev/sdb1              # Create physical volume
vgcreate vg_data /dev/sdb1      # Create volume group
lvcreate -L 10G -n lv_data vg_data # Create logical volume
mkfs.ext4 /dev/vg_data/lv_data  # Format logical volume
```

**File Permissions & Security (2 days)**
```bash
# Permission Types
# r (read) = 4, w (write) = 2, x (execute) = 1
# User, Group, Others

# Numeric Permissions
chmod 755 file          # rwxr-xr-x
chmod 644 file          # rw-r--r--
chmod 600 file          # rw-------
chmod 777 file          # rwxrwxrwx (dangerous)

# Symbolic Permissions
chmod u+x file          # Add execute for user
chmod g-w file          # Remove write for group
chmod o=r file          # Set others to read only
chmod a+r file          # Add read for all

# Special Permissions
chmod +t directory      # Sticky bit (only owner can delete)
chmod g+s directory     # SGID (inherit group ownership)
chmod u+s file          # SUID (run as file owner)

# Access Control Lists (ACL)
getfacl file            # View ACL
setfacl -m u:username:rw file # Set user ACL
setfacl -m g:groupname:r file # Set group ACL
setfacl -x u:username file    # Remove user ACL
```

### Archive & Compression
**File Archiving (2 days)**
```bash
# tar (Tape Archive)
tar -czf archive.tar.gz directory/     # Create compressed archive
tar -xzf archive.tar.gz                # Extract compressed archive
tar -tzf archive.tar.gz                # List archive contents
tar -czf backup.tar.gz --exclude="*.log" /home/user/ # Exclude patterns

# Compression Tools
gzip file.txt           # Compress file (creates file.txt.gz)
gunzip file.txt.gz      # Decompress file
zip -r archive.zip dir/ # Create zip archive
unzip archive.zip       # Extract zip archive
7z a archive.7z dir/    # Create 7z archive

# Advanced tar Usage
tar -czf - directory/ | ssh user@remote 'cat > backup.tar.gz' # Remote backup
tar -czf backup-$(date +%Y%m%d).tar.gz /important/data/      # Date-stamped backup
```

## Week 4: Networking & Security 🟠

### Network Configuration
**Network Management (3 days)**
```bash
# Network Information
ip addr show            # Show IP addresses
ip route show           # Show routing table
ip link show            # Show network interfaces
ifconfig                # Legacy interface configuration
route -n                # Legacy routing table

# Network Configuration
ip addr add 192.168.1.100/24 dev eth0    # Add IP address
ip route add default via 192.168.1.1     # Add default route
ip link set eth0 up                       # Bring interface up
ip link set eth0 down                     # Bring interface down

# Network Testing
ping -c 4 google.com    # Test connectivity
traceroute google.com   # Trace network path
nslookup google.com     # DNS lookup
dig google.com          # Advanced DNS lookup
host google.com         # Simple DNS lookup
mtr google.com          # Network diagnostic tool

# Network Monitoring
netstat -tulpn          # Network connections
ss -tulpn               # Modern netstat replacement
lsof -i                 # List network connections
tcpdump -i eth0         # Packet capture
wireshark               # GUI packet analyzer

# Network Configuration Files
/etc/network/interfaces     # Debian/Ubuntu network config
/etc/sysconfig/network-scripts/ # RHEL/CentOS network config
/etc/resolv.conf           # DNS configuration
/etc/hosts                 # Static hostname resolution
```

**Firewall & Security (2 days)**
```bash
# iptables (Traditional Firewall)
iptables -L                     # List rules
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # Allow SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # Allow HTTP
iptables -A INPUT -j DROP       # Drop all other traffic
iptables-save > /etc/iptables/rules.v4  # Save rules

# ufw (Uncomplicated Firewall - Ubuntu)
ufw enable                      # Enable firewall
ufw allow 22                    # Allow SSH
ufw allow 80/tcp                # Allow HTTP
ufw deny 23                     # Deny telnet
ufw status                      # Show status
ufw delete allow 80             # Remove rule

# firewalld (RHEL/CentOS)
firewall-cmd --state            # Check firewall status
firewall-cmd --list-all         # List all rules
firewall-cmd --add-service=http --permanent  # Allow HTTP
firewall-cmd --add-port=8080/tcp --permanent # Allow port
firewall-cmd --reload           # Reload configuration

# SSH Security
ssh-keygen -t rsa -b 4096       # Generate SSH key pair
ssh-copy-id user@server         # Copy public key to server
ssh -i ~/.ssh/private_key user@server # Connect with specific key

# SSH Configuration (/etc/ssh/sshd_config)
Port 2222                       # Change default port
PermitRootLogin no              # Disable root login
PasswordAuthentication no       # Disable password auth
PubkeyAuthentication yes        # Enable key-based auth
```

### System Security
**Security Hardening (2 days)**
```bash
# File System Security
find / -perm -4000 2>/dev/null  # Find SUID files
find / -perm -2000 2>/dev/null  # Find SGID files
find / -type f -perm -002 2>/dev/null # Find world-writable files

# System Auditing
last                            # Login history
lastlog                         # Last login per user
who                             # Currently logged in users
w                               # Detailed user activity
history                         # Command history
audit2allow                     # SELinux policy analysis

# Security Tools
fail2ban-client status          # Intrusion prevention status
rkhunter --check               # Rootkit scanner
chkrootkit                     # Another rootkit scanner
lynis audit system             # Security auditing tool

# Log Monitoring
tail -f /var/log/auth.log       # Authentication logs
tail -f /var/log/secure         # Security logs (RHEL/CentOS)
grep "Failed password" /var/log/auth.log # Failed login attempts
```

## Week 5: Shell Scripting & Automation 🟠

### Bash Scripting Fundamentals
**Script Basics (3 days)**
```bash
#!/bin/bash
# Basic script structure

# Variables
NAME="DevOps Engineer"
AGE=25
readonly PI=3.14159
declare -r CONSTANT="unchangeable"

# User Input
echo "Enter your name: "
read USERNAME
read -p "Enter password: " -s PASSWORD
read -t 10 -p "Quick response (10s): " RESPONSE

# Command Line Arguments
echo "Script name: $0"
echo "First argument: $1"
echo "All arguments: $@"
echo "Number of arguments: $#"
echo "Exit status of last command: $?"
echo "Process ID: $$"

# Arrays
FRUITS=("apple" "banana" "orange")
echo "First fruit: ${FRUITS[0]}"
echo "All fruits: ${FRUITS[@]}"
echo "Number of fruits: ${#FRUITS[@]}"

# String Operations
STRING="Hello World"
echo "Length: ${#STRING}"
echo "Substring: ${STRING:0:5}"
echo "Replace: ${STRING/World/DevOps}"
echo "Uppercase: ${STRING^^}"
echo "Lowercase: ${STRING,,}"
```

**Control Structures (2 days)**
```bash
#!/bin/bash

# Conditional Statements
if [ "$USER" = "root" ]; then
    echo "Running as root"
elif [ "$USER" = "admin" ]; then
    echo "Running as admin"
else
    echo "Running as regular user"
fi

# File Tests
if [ -f "/etc/passwd" ]; then
    echo "File exists"
fi

if [ -d "/var/log" ]; then
    echo "Directory exists"
fi

if [ -x "/usr/bin/docker" ]; then
    echo "Docker is executable"
fi

# Numeric Comparisons
if [ $AGE -gt 18 ]; then
    echo "Adult"
elif [ $AGE -eq 18 ]; then
    echo "Just turned adult"
else
    echo "Minor"
fi

# String Comparisons
if [ "$PASSWORD" = "secret" ]; then
    echo "Access granted"
fi

if [[ "$EMAIL" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Valid email format"
fi

# Case Statement
case "$1" in
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
COUNTER=1
while [ $COUNTER -le 5 ]; do
    echo "Counter: $COUNTER"
    ((COUNTER++))
done

# Until loop
until [ $COUNTER -gt 10 ]; do
    echo "Counter: $COUNTER"
    ((COUNTER++))
done
```

**Functions & Advanced Scripting (2 days)**
```bash
#!/bin/bash

# Function Definition
backup_directory() {
    local SOURCE_DIR=$1
    local BACKUP_DIR=$2
    local DATE=$(date +%Y%m%d_%H%M%S)
    
    if [ ! -d "$SOURCE_DIR" ]; then
        echo "Error: Source directory does not exist"
        return 1
    fi
    
    mkdir -p "$BACKUP_DIR"
    tar -czf "${BACKUP_DIR}/backup_${DATE}.tar.gz" "$SOURCE_DIR"
    
    if [ $? -eq 0 ]; then
        echo "Backup successful: ${BACKUP_DIR}/backup_${DATE}.tar.gz"
        return 0
    else
        echo "Backup failed"
        return 1
    fi
}

# Function with return value
check_service() {
    local SERVICE_NAME=$1
    
    if systemctl is-active --quiet "$SERVICE_NAME"; then
        echo "running"
    else
        echo "stopped"
    fi
}

# Error Handling
set -e  # Exit on any error
set -u  # Exit on undefined variable
set -o pipefail  # Exit on pipe failure

# Trap for cleanup
cleanup() {
    echo "Cleaning up temporary files..."
    rm -f /tmp/script_temp_*
}
trap cleanup EXIT

# Logging Function
log() {
    local LEVEL=$1
    shift
    local MESSAGE="$@"
    local TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    
    echo "[$TIMESTAMP] [$LEVEL] $MESSAGE" | tee -a /var/log/script.log
}

# Usage Examples
log "INFO" "Script started"
backup_directory "/home/user/documents" "/backup"
SERVICE_STATUS=$(check_service "nginx")
log "INFO" "Nginx status: $SERVICE_STATUS"

# Advanced Features
# Process substitution
while read -r line; do
    echo "Processing: $line"
done < <(ls -la)

# Command substitution
CURRENT_DATE=$(date)
DISK_USAGE=`df -h /`

# Arithmetic operations
RESULT=$((5 + 3))
RESULT=$(expr 5 + 3)
RESULT=$(echo "scale=2; 5/3" | bc)
```

## Week 6: System Monitoring & Performance 🔴

### System Monitoring
**Performance Monitoring (3 days)**
```bash
# CPU Monitoring
top                     # Real-time process viewer
htop                    # Enhanced top
atop                    # Advanced system monitor
sar -u 1 5             # CPU utilization
mpstat 1 5             # Multi-processor statistics
iostat -x 1 5          # I/O statistics
vmstat 1 5             # Virtual memory statistics

# Memory Monitoring
free -h                 # Memory usage
cat /proc/meminfo       # Detailed memory info
pmap PID               # Process memory map
smem                   # Memory usage by process
ps aux --sort=-%mem    # Processes sorted by memory

# Disk Monitoring
df -h                  # Disk space usage
du -sh /path/*         # Directory sizes
iotop                  # I/O usage by process
lsof +D /path          # Files open in directory
fuser -v /path         # Processes using files

# Network Monitoring
iftop                  # Network usage by connection
nethogs                # Network usage by process
ss -tuln               # Socket statistics
netstat -i             # Interface statistics
tcpdump -i eth0        # Packet capture
```

**Log Management (2 days)**
```bash
# System Logs
tail -f /var/log/syslog         # System messages
tail -f /var/log/messages       # General messages (RHEL/CentOS)
tail -f /var/log/auth.log       # Authentication logs
tail -f /var/log/kern.log       # Kernel logs
tail -f /var/log/cron.log       # Cron job logs

# Application Logs
tail -f /var/log/nginx/access.log   # Nginx access logs
tail -f /var/log/nginx/error.log    # Nginx error logs
tail -f /var/log/apache2/access.log # Apache access logs
tail -f /var/log/mysql/error.log    # MySQL error logs

# Log Analysis
grep "ERROR" /var/log/application.log
grep -i "failed" /var/log/auth.log | wc -l
awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr
sed -n '100,200p' /var/log/large.log  # Print lines 100-200

# Log Rotation
logrotate -d /etc/logrotate.conf    # Debug log rotation
logrotate -f /etc/logrotate.conf    # Force log rotation

# Journald (SystemD)
journalctl -f                       # Follow system logs
journalctl -u nginx                 # Service-specific logs
journalctl --since "1 hour ago"    # Time-based filtering
journalctl -p err                   # Priority-based filtering
journalctl --disk-usage            # Journal disk usage
```

### Automation & Scheduling
**Cron Jobs (2 days)**
```bash
# Cron Syntax: minute hour day month day_of_week command
# * * * * * command
# | | | | |
# | | | | +-- Day of week (0-7, Sunday = 0 or 7)
# | | | +---- Month (1-12)
# | | +------ Day of month (1-31)
# | +-------- Hour (0-23)
# +---------- Minute (0-59)

# Cron Examples
crontab -e                          # Edit user crontab
crontab -l                          # List user crontab
crontab -r                          # Remove user crontab

# Common Cron Patterns
0 2 * * *           # Daily at 2 AM
0 2 * * 0           # Weekly on Sunday at 2 AM
0 2 1 * *           # Monthly on 1st at 2 AM
*/15 * * * *        # Every 15 minutes
0 9-17 * * 1-5      # Every hour from 9 AM to 5 PM, Monday to Friday

# System Cron
/etc/crontab                        # System-wide crontab
/etc/cron.d/                        # Additional cron files
/etc/cron.daily/                    # Daily scripts
/etc/cron.weekly/                   # Weekly scripts
/etc/cron.monthly/                  # Monthly scripts

# Example Backup Script
#!/bin/bash
# /etc/cron.daily/backup
BACKUP_DIR="/backup/$(date +%Y%m%d)"
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/home_backup.tar.gz" /home/
find /backup -type f -mtime +7 -delete  # Remove backups older than 7 days
```

## Week 7-8: Advanced Topics & DevOps Integration 🔴

### Package Management
**Advanced Package Operations (2 days)**
```bash
# APT (Debian/Ubuntu)
apt update                          # Update package lists
apt upgrade                         # Upgrade packages
apt full-upgrade                    # Full system upgrade
apt install package                 # Install package
apt remove package                  # Remove package
apt purge package                   # Remove package and config
apt autoremove                      # Remove unused packages
apt search keyword                  # Search packages
apt show package                    # Show package info
apt list --installed               # List installed packages

# YUM/DNF (RHEL/CentOS/Fedora)
yum update                          # Update packages
yum install package                 # Install package
yum remove package                  # Remove package
yum search keyword                  # Search packages
yum info package                    # Package information
yum list installed                  # List installed packages
yum history                         # Transaction history

# RPM (Red Hat Package Manager)
rpm -ivh package.rpm                # Install RPM package
rpm -Uvh package.rpm                # Upgrade RPM package
rpm -e package                      # Remove package
rpm -qa                             # List all packages
rpm -qi package                     # Package information
rpm -ql package                     # List package files

# Building from Source
./configure --prefix=/usr/local     # Configure build
make                                # Compile
make install                        # Install
make uninstall                      # Uninstall (if supported)
```

### System Optimization
**Performance Tuning (3 days)**
```bash
# Kernel Parameters
sysctl -a                           # List all kernel parameters
sysctl vm.swappiness                # Check swap usage tendency
sysctl -w vm.swappiness=10          # Set swap usage (temporary)
echo 'vm.swappiness=10' >> /etc/sysctl.conf  # Permanent setting

# Memory Optimization
echo 3 > /proc/sys/vm/drop_caches   # Clear page cache
sync && echo 1 > /proc/sys/vm/drop_caches  # Clear dentries and inodes
free -h && sync && echo 3 > /proc/sys/vm/drop_caches && free -h

# CPU Optimization
nice -n 19 command                  # Run with low priority
renice -n 5 -p PID                  # Change process priority
taskset -c 0,1 command              # Bind process to specific CPUs
cpulimit -l 50 command              # Limit CPU usage to 50%

# I/O Optimization
ionice -c 3 command                 # Run with idle I/O priority
hdparm -tT /dev/sda                 # Test disk performance
iostat -x 1                         # Monitor I/O performance

# Network Optimization
ethtool eth0                        # Network interface info
tc qdisc show dev eth0              # Traffic control info
```

### DevOps Integration
**Container Integration (2 days)**
```bash
# Docker on Linux
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker $USER

# Container Management
docker run -d --name nginx -p 80:80 nginx
docker exec -it nginx bash
docker logs -f nginx
docker stats nginx

# System Integration
systemctl status docker
journalctl -u docker
docker system df
docker system prune
```

**Configuration Management (1 day)**
```bash
# Ansible Integration
ansible-playbook -i inventory playbook.yml
ansible all -m ping
ansible all -m setup  # Gather system facts

# Puppet Integration
puppet agent --test
facter                # System facts
puppet resource user

# Chef Integration
chef-client
ohai                  # System information
```

## Interview Preparation

### Common Linux Interview Questions
1. Explain Linux boot process
2. Difference between hard and soft links
3. How to troubleshoot high CPU usage
4. Explain file permissions and ownership
5. What is load average and how to interpret it
6. How to find and kill processes
7. Explain different types of file systems
8. How to troubleshoot network connectivity issues
9. What are inodes and how to check inode usage
10. Explain the difference between systemctl and service commands

### Practical Scenarios
```bash
# Troubleshooting High Load
top                                 # Check running processes
ps aux --sort=-%cpu                # CPU-intensive processes
iostat -x 1                        # Check I/O wait
free -h                            # Check memory usage
df -h                              # Check disk space

# Log Analysis
grep "ERROR" /var/log/application.log | tail -20
awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10
tail -f /var/log/syslog | grep -i error

# System Recovery
mount -o remount,rw /              # Remount root as read-write
fsck /dev/sda1                     # File system check
passwd root                        # Reset root password (single user mode)
```

### Hands-on Projects
1. **System Monitoring Dashboard**: Create scripts to monitor system resources
2. **Automated Backup Solution**: Implement comprehensive backup strategy
3. **Log Analysis Tool**: Build log parsing and alerting system
4. **Performance Optimization**: Tune system for specific workloads
5. **Security Hardening**: Implement security best practices

## Resources & Certification
- **Books**: "Linux Administration Handbook", "UNIX and Linux System Administration Handbook"
- **Certifications**: LPIC-1, LPIC-2, RHCSA, RHCE, CompTIA Linux+
- **Practice**: Set up virtual machines, practice on cloud instances
- **Communities**: Linux forums, Stack Overflow, Reddit r/linux