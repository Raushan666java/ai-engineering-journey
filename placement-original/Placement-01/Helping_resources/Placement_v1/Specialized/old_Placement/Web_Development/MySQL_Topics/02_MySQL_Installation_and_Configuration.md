# MySQL Installation and Configuration

## Installing MySQL on Different Platforms

### Windows Installation
1. **Download the MySQL Installer**:
   - Go to the MySQL official website (https://dev.mysql.com/downloads/installer/)
   - Download the MySQL Installer for Windows

2. **Run the Installer**:
   - Choose Setup Type (Typical, Custom, etc.)
   - Select MySQL Server and additional products
   - Configure the server (root password, service settings)
   - Complete the installation

### Linux Installation

#### Ubuntu/Debian
```bash
# Update package lists
sudo apt update

# Install MySQL Server
sudo apt install mysql-server

# Secure the installation
sudo mysql_secure_installation
```

#### CentOS/RHEL
```bash
# Install MySQL repository
sudo yum install mysql-server

# Start MySQL service
sudo systemctl start mysqld

# Enable MySQL to start on boot
sudo systemctl enable mysqld

# Secure the installation
sudo mysql_secure_installation
```

### macOS Installation
1. **Using Homebrew**:
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MySQL
brew install mysql

# Start MySQL service
brew services start mysql

# Secure the installation
mysql_secure_installation
```

2. **Using DMG Package**:
   - Download the DMG package from MySQL website
   - Open the package and follow installation instructions
   - Use MySQL Preference Pane to start/stop the server

## MySQL Server Configuration

### Configuration File Locations
- **Windows**: `C:\ProgramData\MySQL\MySQL Server X.X\my.ini`
- **Linux**: `/etc/mysql/my.cnf` or `/etc/my.cnf`
- **macOS**: `/usr/local/etc/my.cnf` or `~/.my.cnf`

### Common Configuration Parameters
```ini
[mysqld]
# Server Settings
port=3306
socket=/tmp/mysql.sock
datadir=/var/lib/mysql

# InnoDB Settings
innodb_buffer_pool_size=128M
innodb_log_file_size=48M

# Connection Settings
max_connections=151
max_allowed_packet=16M

# Character Set
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci

# Query Cache
query_cache_size=16M
query_cache_type=1

# Logging
log_error=/var/log/mysql/error.log
slow_query_log=1
slow_query_log_file=/var/log/mysql/slow.log
long_query_time=2
```

## MySQL Workbench and Other Tools

### MySQL Workbench
- Official graphical tool for MySQL
- Features:
  - Database design & modeling
  - SQL development
  - Database administration
  - Server configuration
  - User management
  - Backup and restore
  - Performance monitoring

### Other Popular Tools
- **phpMyAdmin**: Web-based MySQL administration tool
- **Adminer**: Lightweight alternative to phpMyAdmin
- **DBeaver**: Universal database tool with MySQL support
- **HeidiSQL**: Lightweight client for Windows
- **Sequel Pro/Sequel Ace**: MySQL client for macOS
- **MySQL Shell**: Advanced command-line client

## Starting and Stopping MySQL Server

### Windows
```
# Using Command Prompt as Administrator
net start mysql
net stop mysql

# Using Services
services.msc > MySQL > Start/Stop/Restart
```

### Linux (systemd)
```bash
# Start MySQL
sudo systemctl start mysql

# Stop MySQL
sudo systemctl stop mysql

# Restart MySQL
sudo systemctl restart mysql

# Check status
sudo systemctl status mysql
```

### macOS
```bash
# Using Homebrew
brew services start mysql
brew services stop mysql
brew services restart mysql

# Using MySQL commands
sudo mysql.server start
sudo mysql.server stop
sudo mysql.server restart
```

## MySQL Environment Variables
- **PATH**: Include MySQL bin directory
- **MYSQL_HOME**: Base directory for MySQL
- **MYSQL_TCP_PORT**: Default port (3306)
- **MYSQL_UNIX_PORT**: Unix socket file
- **MYSQL_PWD**: Default password (not recommended for security reasons)

## Basic Configuration Settings

### Security Settings
```ini
[mysqld]
# Disable remote root login
skip-networking
bind-address=127.0.0.1

# Password validation
validate_password.policy=MEDIUM
validate_password.length=8
```

### Performance Settings
```ini
[mysqld]
# Memory usage
innodb_buffer_pool_size=1G  # 50-80% of available RAM
innodb_log_file_size=256M
innodb_flush_log_at_trx_commit=1  # ACID compliance (0 or 2 for better performance)

# Thread handling
thread_cache_size=8
max_connections=200
```

### Character Set Settings
```ini
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci

[client]
default-character-set=utf8mb4
```