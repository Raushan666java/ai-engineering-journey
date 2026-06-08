# 🗄️ Database Management - Complete Theory

## 📋 Database Fundamentals

### What is Database Management?
Database management involves the administration, maintenance, and optimization of database systems to ensure data integrity, availability, and performance.

### Types of Databases

#### Relational Databases (SQL)
- **Structure**: Tables with rows and columns
- **ACID Properties**: Atomicity, Consistency, Isolation, Durability
- **Examples**: MySQL, PostgreSQL, Oracle, SQL Server
- **Use Cases**: Transactional systems, complex queries, data integrity

#### NoSQL Databases
- **Document**: MongoDB, CouchDB
- **Key-Value**: Redis, DynamoDB
- **Column-Family**: Cassandra, HBase
- **Graph**: Neo4j, Amazon Neptune
- **Use Cases**: Big data, real-time applications, flexible schemas

## 🐘 PostgreSQL Management

### Installation and Setup
```bash
# Ubuntu/Debian installation
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start and enable service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Access PostgreSQL
sudo -u postgres psql

# Create database and user
CREATE DATABASE myapp;
CREATE USER appuser WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE myapp TO appuser;
```

### Configuration
```bash
# PostgreSQL configuration files
/etc/postgresql/13/main/postgresql.conf    # Main configuration
/etc/postgresql/13/main/pg_hba.conf       # Authentication

# Key configuration parameters
listen_addresses = '*'                     # Listen on all interfaces
port = 5432                               # Default port
max_connections = 100                     # Maximum connections
shared_buffers = 256MB                    # Shared memory
effective_cache_size = 1GB                # Available cache
work_mem = 4MB                           # Memory per operation
maintenance_work_mem = 64MB               # Maintenance operations memory
```

### Database Operations
```sql
-- Database management
CREATE DATABASE production_db;
DROP DATABASE test_db;
ALTER DATABASE myapp RENAME TO myapp_prod;

-- User management
CREATE ROLE readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
CREATE USER analyst WITH PASSWORD 'password';
GRANT readonly TO analyst;

-- Table operations
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Backup and restore
pg_dump myapp > backup.sql
pg_dump -Fc myapp > backup.dump
psql myapp < backup.sql
pg_restore -d myapp backup.dump
```

### Performance Tuning
```sql
-- Query analysis
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';

-- Index usage
SELECT schemaname, tablename, indexname, idx_tup_read, idx_tup_fetch 
FROM pg_stat_user_indexes;

-- Table statistics
SELECT schemaname, tablename, n_tup_ins, n_tup_upd, n_tup_del 
FROM pg_stat_user_tables;

-- Vacuum and analyze
VACUUM ANALYZE users;
REINDEX TABLE users;

-- Connection monitoring
SELECT pid, usename, application_name, client_addr, state, query 
FROM pg_stat_activity 
WHERE state = 'active';
```

## 🐬 MySQL Management

### Installation and Setup
```bash
# Ubuntu/Debian installation
sudo apt update
sudo apt install mysql-server

# Secure installation
sudo mysql_secure_installation

# Access MySQL
sudo mysql -u root -p

# Create database and user
CREATE DATABASE myapp;
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON myapp.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;
```

### Configuration
```bash
# MySQL configuration file
/etc/mysql/mysql.conf.d/mysqld.cnf

# Key parameters
[mysqld]
bind-address = 0.0.0.0
port = 3306
max_connections = 151
innodb_buffer_pool_size = 256M
innodb_log_file_size = 64M
query_cache_size = 16M
tmp_table_size = 32M
max_heap_table_size = 32M
```

### Replication Setup
```sql
-- Master configuration
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-do-db = myapp

-- Create replication user
CREATE USER 'replicator'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'replicator'@'%';

-- Get master status
SHOW MASTER STATUS;

-- Slave configuration
[mysqld]
server-id = 2
relay-log = mysql-relay-bin

-- Configure slave
CHANGE MASTER TO
    MASTER_HOST='master-ip',
    MASTER_USER='replicator',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

START SLAVE;
SHOW SLAVE STATUS\G
```

## 🍃 MongoDB Management

### Installation and Setup
```bash
# Ubuntu installation
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
sudo apt install mongodb-org

# Start service
sudo systemctl start mongod
sudo systemctl enable mongod

# Access MongoDB
mongo
```

### Database Operations
```javascript
// Database operations
use myapp
db.createCollection("users")

// Insert documents
db.users.insertOne({
    username: "john_doe",
    email: "john@example.com",
    age: 30,
    created_at: new Date()
})

db.users.insertMany([
    {username: "jane_doe", email: "jane@example.com", age: 25},
    {username: "bob_smith", email: "bob@example.com", age: 35}
])

// Query documents
db.users.find()
db.users.find({age: {$gte: 30}})
db.users.findOne({username: "john_doe"})

// Update documents
db.users.updateOne(
    {username: "john_doe"},
    {$set: {age: 31}}
)

db.users.updateMany(
    {age: {$lt: 30}},
    {$set: {status: "young"}}
)

// Delete documents
db.users.deleteOne({username: "john_doe"})
db.users.deleteMany({age: {$lt: 25}})

// Indexing
db.users.createIndex({email: 1})
db.users.createIndex({username: 1, email: 1})
db.users.getIndexes()

// Aggregation
db.users.aggregate([
    {$match: {age: {$gte: 25}}},
    {$group: {_id: "$status", count: {$sum: 1}}},
    {$sort: {count: -1}}
])
```

### Replica Set Configuration
```javascript
// Initialize replica set
rs.initiate({
    _id: "myReplicaSet",
    members: [
        {_id: 0, host: "mongo1:27017"},
        {_id: 1, host: "mongo2:27017"},
        {_id: 2, host: "mongo3:27017"}
    ]
})

// Check replica set status
rs.status()

// Add member
rs.add("mongo4:27017")

// Remove member
rs.remove("mongo4:27017")

// Step down primary
rs.stepDown()
```

## 🔴 Redis Management

### Installation and Setup
```bash
# Ubuntu installation
sudo apt update
sudo apt install redis-server

# Configuration
sudo nano /etc/redis/redis.conf

# Key settings
bind 127.0.0.1 ::1
port 6379
requirepass your_password
maxmemory 256mb
maxmemory-policy allkeys-lru

# Start service
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Access Redis
redis-cli
AUTH your_password
```

### Redis Operations
```bash
# String operations
SET user:1:name "John Doe"
GET user:1:name
INCR counter
DECR counter
EXPIRE user:1:name 3600

# Hash operations
HSET user:1 name "John Doe" email "john@example.com" age 30
HGET user:1 name
HGETALL user:1
HDEL user:1 age

# List operations
LPUSH tasks "task1" "task2" "task3"
RPOP tasks
LRANGE tasks 0 -1
LLEN tasks

# Set operations
SADD tags "redis" "database" "cache"
SMEMBERS tags
SISMEMBER tags "redis"
SREM tags "cache"

# Sorted set operations
ZADD leaderboard 100 "player1" 200 "player2" 150 "player3"
ZRANGE leaderboard 0 -1 WITHSCORES
ZREVRANGE leaderboard 0 2 WITHSCORES

# Pub/Sub
SUBSCRIBE notifications
PUBLISH notifications "New message"

# Monitoring
INFO
MONITOR
CLIENT LIST
```

### Redis Clustering
```bash
# Redis cluster configuration
port 7000
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes

# Create cluster
redis-cli --cluster create \
    127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \
    127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \
    --cluster-replicas 1

# Cluster operations
redis-cli -c -p 7000
CLUSTER NODES
CLUSTER INFO
```

## 🔄 Database Backup and Recovery

### Automated Backup Scripts
```bash
#!/bin/bash
# PostgreSQL backup script

DB_NAME="myapp"
DB_USER="postgres"
BACKUP_DIR="/backups/postgresql"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=7

# Create backup directory
mkdir -p $BACKUP_DIR

# Create backup
pg_dump -U $DB_USER -h localhost $DB_NAME | gzip > $BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz

# Upload to S3
aws s3 cp $BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz s3://my-backup-bucket/postgresql/

# Cleanup old backups
find $BACKUP_DIR -name "${DB_NAME}_*.sql.gz" -mtime +$RETENTION_DAYS -delete

# Verify backup
if [ -f "$BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz" ]; then
    echo "Backup successful: ${DB_NAME}_${DATE}.sql.gz"
else
    echo "Backup failed!"
    exit 1
fi
```

```bash
#!/bin/bash
# MongoDB backup script

DB_NAME="myapp"
BACKUP_DIR="/backups/mongodb"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
mongodump --db $DB_NAME --out $BACKUP_DIR/$DATE

# Compress backup
tar -czf $BACKUP_DIR/${DB_NAME}_${DATE}.tar.gz -C $BACKUP_DIR $DATE

# Upload to S3
aws s3 cp $BACKUP_DIR/${DB_NAME}_${DATE}.tar.gz s3://my-backup-bucket/mongodb/

# Cleanup
rm -rf $BACKUP_DIR/$DATE
find $BACKUP_DIR -name "${DB_NAME}_*.tar.gz" -mtime +7 -delete
```

### Point-in-Time Recovery
```bash
# PostgreSQL PITR setup
# Enable WAL archiving in postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /archive/%f'

# Create base backup
pg_basebackup -D /backup/base -Ft -z -P

# Recovery configuration
# Create recovery.conf
restore_command = 'cp /archive/%f %p'
recovery_target_time = '2023-12-01 14:30:00'
```

## 📊 Database Monitoring

### Performance Monitoring
```sql
-- PostgreSQL monitoring queries
-- Long running queries
SELECT pid, now() - pg_stat_activity.query_start AS duration, query 
FROM pg_stat_activity 
WHERE (now() - pg_stat_activity.query_start) > interval '5 minutes';

-- Database size
SELECT pg_database.datname, pg_size_pretty(pg_database_size(pg_database.datname)) AS size 
FROM pg_database;

-- Table sizes
SELECT schemaname, tablename, pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables 
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Index usage
SELECT schemaname, tablename, indexname, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes 
ORDER BY idx_tup_read DESC;
```

```sql
-- MySQL monitoring queries
-- Process list
SHOW PROCESSLIST;

-- Database sizes
SELECT table_schema AS "Database", 
       ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS "Size (MB)" 
FROM information_schema.tables 
GROUP BY table_schema;

-- Slow queries
SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;

-- InnoDB status
SHOW ENGINE INNODB STATUS;
```

### Monitoring with Prometheus
```yaml
# PostgreSQL exporter configuration
version: '3.8'
services:
  postgres-exporter:
    image: prometheuscommunity/postgres-exporter
    environment:
      DATA_SOURCE_NAME: "postgresql://username:password@postgres:5432/database?sslmode=disable"
    ports:
      - "9187:9187"
    depends_on:
      - postgres

  mysql-exporter:
    image: prom/mysqld-exporter
    environment:
      DATA_SOURCE_NAME: "username:password@(mysql:3306)/"
    ports:
      - "9104:9104"
    depends_on:
      - mysql

  redis-exporter:
    image: oliver006/redis_exporter
    environment:
      REDIS_ADDR: "redis://redis:6379"
    ports:
      - "9121:9121"
    depends_on:
      - redis
```

## 🔒 Database Security

### Security Best Practices
```sql
-- PostgreSQL security
-- Create roles with limited privileges
CREATE ROLE app_read;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_read;

CREATE ROLE app_write;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_write;

-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY user_policy ON users FOR ALL TO app_user USING (user_id = current_user_id());

-- Audit logging
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_connections = 'on';
ALTER SYSTEM SET log_disconnections = 'on';
```

### Encryption
```bash
# PostgreSQL SSL configuration
ssl = on
ssl_cert_file = 'server.crt'
ssl_key_file = 'server.key'
ssl_ca_file = 'ca.crt'

# MySQL SSL configuration
[mysqld]
ssl-ca = ca.pem
ssl-cert = server-cert.pem
ssl-key = server-key.pem

# Connection with SSL
psql "host=localhost dbname=myapp user=appuser sslmode=require"
mysql --ssl-ca=ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem
```

## 🚀 Database in DevOps

### Database CI/CD
```yaml
# Database migration pipeline
name: Database Migration

on:
  push:
    paths:
      - 'migrations/**'

jobs:
  migrate:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v3
    
    - name: Run migrations
      run: |
        psql -h localhost -U postgres -d postgres -f migrations/001_create_tables.sql
        psql -h localhost -U postgres -d postgres -f migrations/002_add_indexes.sql
    
    - name: Validate schema
      run: |
        pg_dump -h localhost -U postgres -s postgres > schema.sql
        diff expected_schema.sql schema.sql
```

### Database as Code
```python
# Database schema management with Alembic (SQLAlchemy)
from alembic import op
import sqlalchemy as sa

def upgrade():
    op.create_table('users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(50), nullable=False),
        sa.Column('email', sa.String(100), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username')
    )
    
    op.create_index('idx_users_email', 'users', ['email'])

def downgrade():
    op.drop_index('idx_users_email', table_name='users')
    op.drop_table('users')
```

## 🎯 Best Practices

### Performance Optimization
- Use appropriate indexes
- Optimize queries with EXPLAIN
- Regular maintenance (VACUUM, ANALYZE)
- Monitor slow queries
- Implement connection pooling

### High Availability
- Set up replication
- Implement failover mechanisms
- Use load balancers
- Regular backup testing
- Monitor database health

### Security
- Use strong authentication
- Implement encryption
- Regular security updates
- Audit database access
- Follow principle of least privilege