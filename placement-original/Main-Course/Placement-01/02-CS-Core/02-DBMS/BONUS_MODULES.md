# 🎁 BONUS MODULES - Advanced Database Mastery

## 🚀 Module 13: Cloud Databases & DevOps

### **Cloud Database Services**
```sql
-- AWS RDS Setup
CREATE DATABASE production_db;

-- Azure SQL Database
-- Connection string configuration
Server=tcp:myserver.database.windows.net,1433;
Database=mydb;User ID=myuser;Password=mypass;

-- Google Cloud SQL
gcloud sql instances create myinstance --tier=db-n1-standard-1
```

### **Database CI/CD Pipeline**
```yaml
# GitHub Actions for Database
name: Database CI/CD
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Database Tests
        run: |
          mysql -u root -p < schema.sql
          mysql -u root -p < test_data.sql
```

### **Infrastructure as Code**
```hcl
# Terraform for AWS RDS
resource "aws_db_instance" "main" {
  identifier = "main-database"
  engine     = "mysql"
  engine_version = "8.0"
  instance_class = "db.t3.micro"
  allocated_storage = 20
}
```

---

## 🤖 Module 14: AI/ML Database Integration

### **Vector Databases**
```python
# Pinecone Vector Database
import pinecone

pinecone.init(api_key="your-api-key")
index = pinecone.Index("similarity-search")

# Insert vectors
index.upsert([
    ("doc1", [0.1, 0.2, 0.3]),
    ("doc2", [0.4, 0.5, 0.6])
])

# Query similar vectors
results = index.query([0.1, 0.2, 0.3], top_k=5)
```

### **Machine Learning in SQL**
```sql
-- PostgreSQL with ML extensions
CREATE EXTENSION IF NOT EXISTS plpython3u;

-- Predictive analytics
SELECT 
    customer_id,
    PREDICT_CHURN(age, purchase_history, engagement_score) as churn_probability
FROM customers;
```

### **Natural Language to SQL**
```python
# Using OpenAI for SQL generation
import openai

def nl_to_sql(question):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Convert to SQL: {question}",
        max_tokens=100
    )
    return response.choices[0].text
```

---

## 🔐 Module 15: Advanced Security & Compliance

### **Database Encryption**
```sql
-- Transparent Data Encryption (TDE)
ALTER DATABASE company_db SET ENCRYPTION ON;

-- Column-level encryption
CREATE TABLE sensitive_data (
    id INT PRIMARY KEY,
    ssn VARBINARY(256) ENCRYPTED WITH (
        COLUMN_ENCRYPTION_KEY = CEK1,
        ENCRYPTION_TYPE = DETERMINISTIC,
        ALGORITHM = 'AEAD_AES_256_CBC_HMAC_SHA_256'
    )
);
```

### **GDPR Compliance**
```sql
-- Right to be forgotten
CREATE PROCEDURE DeleteUserData(@user_id INT)
AS
BEGIN
    DELETE FROM user_activities WHERE user_id = @user_id;
    DELETE FROM user_preferences WHERE user_id = @user_id;
    UPDATE users SET 
        name = 'DELETED',
        email = 'DELETED',
        phone = NULL
    WHERE id = @user_id;
END
```

### **Audit Logging**
```sql
-- Create audit table
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_name VARCHAR(50),
    operation VARCHAR(10),
    user_id INT,
    old_values JSON,
    new_values JSON,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Audit trigger
CREATE TRIGGER user_audit
AFTER UPDATE ON users
FOR EACH ROW
INSERT INTO audit_log (table_name, operation, user_id, old_values, new_values)
VALUES ('users', 'UPDATE', NEW.id, JSON_OBJECT('name', OLD.name), JSON_OBJECT('name', NEW.name));
```

---

## 📊 Module 16: Big Data & Analytics

### **Data Warehousing**
```sql
-- Star Schema Design
CREATE TABLE fact_sales (
    sale_id INT PRIMARY KEY,
    product_key INT,
    customer_key INT,
    date_key INT,
    quantity INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (product_key) REFERENCES dim_product(product_key),
    FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key),
    FOREIGN KEY (date_key) REFERENCES dim_date(date_key)
);

-- OLAP Queries
SELECT 
    p.category,
    d.year,
    SUM(f.amount) as total_sales
FROM fact_sales f
JOIN dim_product p ON f.product_key = p.product_key
JOIN dim_date d ON f.date_key = d.date_key
GROUP BY CUBE(p.category, d.year);
```

### **Real-time Analytics**
```python
# Apache Kafka + Database Integration
from kafka import KafkaConsumer
import mysql.connector

consumer = KafkaConsumer('user-events')
db = mysql.connector.connect(host='localhost', user='root', database='analytics')

for message in consumer:
    event = json.loads(message.value)
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO user_events (user_id, event_type, timestamp) VALUES (%s, %s, %s)",
        (event['user_id'], event['event_type'], event['timestamp'])
    )
    db.commit()
```

---

## 🌐 Module 17: Microservices & Database Patterns

### **Database per Service**
```yaml
# Docker Compose for Microservices
version: '3'
services:
  user-service:
    image: user-service:latest
    environment:
      - DB_HOST=user-db
  user-db:
    image: postgres:13
    environment:
      - POSTGRES_DB=users
  
  order-service:
    image: order-service:latest
    environment:
      - DB_HOST=order-db
  order-db:
    image: mysql:8.0
    environment:
      - MYSQL_DATABASE=orders
```

### **Event Sourcing**
```sql
-- Event Store
CREATE TABLE events (
    id UUID PRIMARY KEY,
    aggregate_id UUID,
    event_type VARCHAR(100),
    event_data JSON,
    version INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projection
CREATE TABLE user_projection (
    user_id UUID PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    status VARCHAR(20),
    last_updated TIMESTAMP
);
```

### **CQRS Pattern**
```python
# Command Query Responsibility Segregation
class UserCommandHandler:
    def __init__(self, write_db):
        self.write_db = write_db
    
    def create_user(self, command):
        # Write to command database
        self.write_db.execute(
            "INSERT INTO users (id, name, email) VALUES (%s, %s, %s)",
            (command.id, command.name, command.email)
        )

class UserQueryHandler:
    def __init__(self, read_db):
        self.read_db = read_db
    
    def get_user(self, user_id):
        # Read from optimized read database
        return self.read_db.query(
            "SELECT * FROM user_view WHERE id = %s", (user_id,)
        )
```

---

## 🔄 Module 18: Database Migration & Modernization

### **Legacy System Migration**
```python
# ETL Pipeline for Migration
import pandas as pd
from sqlalchemy import create_engine

# Extract from legacy system
legacy_engine = create_engine('oracle://user:pass@legacy-db')
legacy_data = pd.read_sql("SELECT * FROM legacy_table", legacy_engine)

# Transform data
legacy_data['new_column'] = legacy_data['old_column'].apply(transform_function)
legacy_data = legacy_data.drop(['deprecated_column'], axis=1)

# Load to modern system
modern_engine = create_engine('postgresql://user:pass@modern-db')
legacy_data.to_sql('modern_table', modern_engine, if_exists='append')
```

### **Zero-Downtime Migration**
```sql
-- Blue-Green Deployment Strategy
-- 1. Create new schema version
CREATE TABLE users_v2 (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- 2. Dual-write to both versions
CREATE TRIGGER dual_write_users
AFTER INSERT ON users
FOR EACH ROW
INSERT INTO users_v2 (id, name, email, created_at, updated_at)
VALUES (NEW.id, NEW.name, NEW.email, NEW.created_at, NEW.updated_at);

-- 3. Backfill historical data
INSERT INTO users_v2 SELECT * FROM users WHERE created_at < '2024-01-01';

-- 4. Switch reads to new table
-- 5. Remove old table and triggers
```

---

## 🎯 Module 19: Performance Engineering

### **Database Sharding**
```python
# Horizontal Sharding Implementation
class ShardedDatabase:
    def __init__(self, shards):
        self.shards = shards
    
    def get_shard(self, key):
        shard_id = hash(key) % len(self.shards)
        return self.shards[shard_id]
    
    def insert(self, key, data):
        shard = self.get_shard(key)
        shard.execute("INSERT INTO table VALUES (%s, %s)", (key, data))
    
    def select(self, key):
        shard = self.get_shard(key)
        return shard.query("SELECT * FROM table WHERE key = %s", (key,))
```

### **Connection Pooling**
```python
# Advanced Connection Pool
from sqlalchemy.pool import QueuePool
from sqlalchemy import create_engine

engine = create_engine(
    'mysql://user:pass@localhost/db',
    poolclass=QueuePool,
    pool_size=20,
    max_overflow=30,
    pool_pre_ping=True,
    pool_recycle=3600
)
```

### **Query Optimization**
```sql
-- Advanced Indexing Strategies
-- Partial Index
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Covering Index
CREATE INDEX idx_user_orders ON orders(user_id) INCLUDE (order_date, total_amount);

-- Function-based Index
CREATE INDEX idx_upper_name ON users(UPPER(name));
```

---

## 🏆 Module 20: Capstone Portfolio Projects

### **Project 1: Multi-Tenant SaaS Platform**
- Database isolation strategies
- Tenant-specific schemas
- Resource allocation and monitoring
- Billing and usage tracking

### **Project 2: Real-time Gaming Leaderboard**
- Redis for real-time rankings
- MongoDB for player profiles
- MySQL for game statistics
- WebSocket integration

### **Project 3: IoT Data Pipeline**
- Time-series database (InfluxDB)
- Stream processing (Apache Kafka)
- Real-time dashboards
- Predictive maintenance

### **Project 4: Financial Trading System**
- ACID compliance requirements
- High-frequency data processing
- Risk management databases
- Regulatory reporting

### **Project 5: Social Media Analytics**
- Graph database for relationships
- Document store for content
- Search engine integration
- Machine learning pipelines

---

## 📜 Certification Preparation

### **Industry Certifications**
- [ ] **Oracle Database 19c Administrator**
- [ ] **MySQL 8.0 Database Developer**
- [ ] **MongoDB Certified Developer**
- [ ] **AWS Certified Database Specialty**
- [ ] **Microsoft Azure Database Administrator**
- [ ] **Google Cloud Professional Data Engineer**

### **Mock Exams & Practice Tests**
- 500+ practice questions
- Timed simulation exams
- Performance analytics
- Weak area identification

---

**These bonus modules elevate you from database professional to database architect level! 🚀**