# Module 10: Database Administration

## Database Administrator (DBA) Role

### Responsibilities
- Database installation and configuration
- Security management
- Performance monitoring and tuning
- Backup and recovery
- User management
- Capacity planning

### Types of DBAs
- **System DBA**: Infrastructure and installation
- **Development DBA**: Design and optimization
- **Application DBA**: Specific application support

## Database Installation & Configuration

### MySQL Installation
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server

# Start service
sudo systemctl start mysql
sudo systemctl enable mysql

# Secure installation
sudo mysql_secure_installation
```

### Configuration Files
```ini
# my.cnf (MySQL)
[mysqld]
port = 3306
datadir = /var/lib/mysql
socket = /var/lib/mysql/mysql.sock
log-error = /var/log/mysql/error.log
pid-file = /var/run/mysqld/mysqld.pid

# Performance settings
innodb_buffer_pool_size = 1G
max_connections = 200
query_cache_size = 64M
```

## User Management & Security

### Creating Users
```sql
-- Create user
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong_password';

-- Grant privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON company_db.* TO 'app_user'@'localhost';

-- Grant specific privileges
GRANT SELECT ON company_db.employees TO 'hr_user'@'%';

-- Flush privileges
FLUSH PRIVILEGES;
```

### Role-Based Access Control
```sql
-- Create roles
CREATE ROLE 'app_read', 'app_write', 'app_admin';

-- Grant privileges to roles
GRANT SELECT ON company_db.* TO 'app_read';
GRANT INSERT, UPDATE, DELETE ON company_db.* TO 'app_write';
GRANT ALL PRIVILEGES ON company_db.* TO 'app_admin';

-- Assign roles to users
GRANT 'app_read', 'app_write' TO 'app_user'@'localhost';
```

### Security Best Practices
1. **Use strong passwords**
2. **Limit network access**
3. **Enable SSL/TLS**
4. **Regular security updates**
5. **Audit user activities**
6. **Encrypt sensitive data**

## Backup and Recovery

### Backup Types

#### 1. Logical Backup
```bash
# mysqldump
mysqldump -u root -p --all-databases > full_backup.sql
mysqldump -u root -p company_db > company_backup.sql

# Specific tables
mysqldump -u root -p company_db employees departments > tables_backup.sql
```

#### 2. Physical Backup
```bash
# Stop MySQL service
sudo systemctl stop mysql

# Copy data directory
cp -r /var/lib/mysql /backup/mysql_$(date +%Y%m%d)

# Start MySQL service
sudo systemctl start mysql
```

#### 3. Binary Log Backup
```sql
-- Enable binary logging
SET GLOBAL log_bin = ON;

-- Show binary logs
SHOW BINARY LOGS;

-- Backup binary logs
mysqlbinlog mysql-bin.000001 > binlog_backup.sql
```

### Recovery Procedures

#### Point-in-Time Recovery
```bash
# Restore from full backup
mysql -u root -p < full_backup.sql

# Apply binary logs up to specific time
mysqlbinlog --stop-datetime="2023-12-01 10:30:00" mysql-bin.000001 | mysql -u root -p
```

#### Table Recovery
```sql
-- Restore specific table
mysql -u root -p company_db < table_backup.sql
```

### Backup Strategies
1. **Full Backup**: Complete database backup
2. **Incremental Backup**: Changes since last backup
3. **Differential Backup**: Changes since last full backup
4. **Continuous Backup**: Real-time replication

## Performance Monitoring

### Key Metrics
- **Query Response Time**
- **Throughput (QPS)**
- **Connection Count**
- **Buffer Pool Hit Ratio**
- **Lock Wait Time**

### Monitoring Tools

#### Built-in Commands
```sql
-- Show processlist
SHOW PROCESSLIST;

-- Show status variables
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';

-- Show engine status
SHOW ENGINE INNODB STATUS;

-- Performance schema
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY sum_timer_wait DESC LIMIT 10;
```

#### System Monitoring
```bash
# CPU and memory usage
top
htop

# Disk I/O
iostat -x 1

# Network
netstat -i
```

### Performance Tuning

#### Query Optimization
```sql
-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;

-- Analyze slow queries
SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;
```

#### Configuration Tuning
```ini
# Buffer pool size (70-80% of RAM)
innodb_buffer_pool_size = 2G

# Log file size
innodb_log_file_size = 256M

# Connection limits
max_connections = 500
max_user_connections = 450

# Query cache
query_cache_type = 1
query_cache_size = 128M
```

## Database Maintenance

### Regular Tasks
1. **Update statistics**
2. **Rebuild indexes**
3. **Check table integrity**
4. **Purge old logs**
5. **Monitor disk space**

### Maintenance Commands
```sql
-- Analyze tables
ANALYZE TABLE employees;

-- Optimize tables
OPTIMIZE TABLE employees;

-- Check table integrity
CHECK TABLE employees;

-- Repair tables
REPAIR TABLE employees;
```

### Automated Maintenance
```bash
#!/bin/bash
# Daily maintenance script

# Backup database
mysqldump -u root -p$PASSWORD --all-databases > /backup/daily_$(date +%Y%m%d).sql

# Optimize tables
mysql -u root -p$PASSWORD -e "OPTIMIZE TABLE company_db.employees;"

# Purge old binary logs
mysql -u root -p$PASSWORD -e "PURGE BINARY LOGS BEFORE DATE_SUB(NOW(), INTERVAL 7 DAY);"

# Check disk space
df -h /var/lib/mysql
```

## High Availability & Replication

### Master-Slave Replication
```sql
-- Master configuration
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-do-db = company_db

-- Create replication user
CREATE USER 'repl'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';

-- Get master status
SHOW MASTER STATUS;
```

```sql
-- Slave configuration
[mysqld]
server-id = 2
relay-log = mysql-relay-bin

-- Configure slave
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

-- Start slave
START SLAVE;

-- Check slave status
SHOW SLAVE STATUS\G
```

### Clustering Solutions
- **MySQL Cluster (NDB)**
- **Galera Cluster**
- **MySQL Group Replication**

## Disaster Recovery Planning

### Recovery Time Objective (RTO)
- Maximum acceptable downtime
- Influences backup strategy

### Recovery Point Objective (RPO)
- Maximum acceptable data loss
- Determines backup frequency

### DR Strategies
1. **Cold Standby**: Manual failover
2. **Warm Standby**: Semi-automatic failover
3. **Hot Standby**: Automatic failover
4. **Active-Active**: Load balancing

## Practical Exercises
1. Set up MySQL replication
2. Create backup and recovery procedures
3. Monitor database performance
4. Implement user security policies

## DBA Toolkit
Essential tools for database administration:
- **MySQL Workbench**: GUI administration
- **phpMyAdmin**: Web-based administration
- **Percona Toolkit**: Performance utilities
- **pt-query-digest**: Query analysis
- **Nagios/Zabbix**: Monitoring systems

## Assignment
Design and implement a complete DBA solution:
- Multi-environment setup (dev, test, prod)
- Automated backup procedures
- Performance monitoring dashboard
- Security policies and user management
- Disaster recovery plan

## Next Module
Module 11: NoSQL Databases