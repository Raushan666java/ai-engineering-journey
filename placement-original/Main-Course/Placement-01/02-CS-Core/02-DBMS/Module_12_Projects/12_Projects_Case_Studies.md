# Module 12: Projects & Case Studies

## Project 1: E-Commerce Database System

### Requirements
- Product catalog management
- User accounts and authentication
- Shopping cart functionality
- Order processing
- Inventory management
- Payment processing
- Reviews and ratings

### Database Design
```sql
-- Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Order items table
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
```

### Key Features Implementation
```sql
-- Inventory management with triggers
DELIMITER //
CREATE TRIGGER update_inventory_after_order
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products 
    SET stock_quantity = stock_quantity - NEW.quantity
    WHERE product_id = NEW.product_id;
END //
DELIMITER ;

-- Complex queries for analytics
SELECT 
    p.name,
    SUM(oi.quantity) as total_sold,
    SUM(oi.quantity * oi.price) as revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY p.product_id
ORDER BY revenue DESC
LIMIT 10;
```

## Project 2: Social Media Platform

### Requirements
- User profiles and authentication
- Posts and media sharing
- Friend connections
- News feed algorithm
- Real-time messaging
- Notifications system

### Hybrid Architecture (SQL + NoSQL)

#### SQL Schema (User Management)
```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    profile_picture VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE friendships (
    friendship_id INT PRIMARY KEY AUTO_INCREMENT,
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    status ENUM('pending', 'accepted', 'blocked'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(user_id),
    FOREIGN KEY (user2_id) REFERENCES users(user_id)
);
```

#### NoSQL Schema (Posts and Activities)
```javascript
// MongoDB - Posts collection
{
    _id: ObjectId("..."),
    user_id: 12345,
    content: "This is my post content",
    media: [
        {
            type: "image",
            url: "https://example.com/image.jpg"
        }
    ],
    likes: [12346, 12347, 12348],
    comments: [
        {
            user_id: 12346,
            content: "Great post!",
            timestamp: ISODate("2023-12-01T10:00:00Z")
        }
    ],
    timestamp: ISODate("2023-12-01T09:00:00Z"),
    visibility: "public"
}

// Redis - Real-time data
// User sessions
SET session:abc123 "user_id:12345" EX 3600

// News feed cache
ZADD feed:12345 1701423600 "post:67890"
ZADD feed:12345 1701423500 "post:67891"
```

## Project 3: Banking System

### Requirements
- Account management
- Transaction processing
- ACID compliance
- Audit trails
- Fraud detection
- Regulatory compliance

### Database Design
```sql
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    ssn VARCHAR(11) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    account_number VARCHAR(20) UNIQUE NOT NULL,
    account_type ENUM('checking', 'savings', 'credit'),
    balance DECIMAL(15,2) DEFAULT 0.00,
    status ENUM('active', 'frozen', 'closed') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    from_account_id INT,
    to_account_id INT,
    transaction_type ENUM('deposit', 'withdrawal', 'transfer', 'payment'),
    amount DECIMAL(15,2) NOT NULL,
    description TEXT,
    status ENUM('pending', 'completed', 'failed', 'cancelled'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (from_account_id) REFERENCES accounts(account_id),
    FOREIGN KEY (to_account_id) REFERENCES accounts(account_id)
);
```

### Critical Procedures
```sql
DELIMITER //
CREATE PROCEDURE TransferFunds(
    IN p_from_account INT,
    IN p_to_account INT,
    IN p_amount DECIMAL(15,2),
    IN p_description TEXT
)
BEGIN
    DECLARE v_from_balance DECIMAL(15,2);
    DECLARE v_transaction_id INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    -- Lock and check source account
    SELECT balance INTO v_from_balance
    FROM accounts 
    WHERE account_id = p_from_account 
    AND status = 'active'
    FOR UPDATE;
    
    -- Validate sufficient funds
    IF v_from_balance < p_amount THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;
    
    -- Create transaction record
    INSERT INTO transactions (from_account_id, to_account_id, transaction_type, amount, description, status)
    VALUES (p_from_account, p_to_account, 'transfer', p_amount, p_description, 'pending');
    
    SET v_transaction_id = LAST_INSERT_ID();
    
    -- Update account balances
    UPDATE accounts SET balance = balance - p_amount WHERE account_id = p_from_account;
    UPDATE accounts SET balance = balance + p_amount WHERE account_id = p_to_account;
    
    -- Mark transaction as completed
    UPDATE transactions SET status = 'completed' WHERE transaction_id = v_transaction_id;
    
    COMMIT;
    
    SELECT v_transaction_id as transaction_id;
END //
DELIMITER ;
```

## Project 4: IoT Data Management System

### Requirements
- High-volume sensor data ingestion
- Real-time analytics
- Historical data storage
- Device management
- Alert system

### Time-Series Database Design (Cassandra)
```sql
-- Device registry
CREATE TABLE devices (
    device_id text PRIMARY KEY,
    device_type text,
    location text,
    installation_date timestamp,
    status text
);

-- Sensor data (time-series)
CREATE TABLE sensor_readings (
    device_id text,
    reading_time timestamp,
    sensor_type text,
    value double,
    unit text,
    PRIMARY KEY (device_id, reading_time, sensor_type)
) WITH CLUSTERING ORDER BY (reading_time DESC, sensor_type ASC);

-- Aggregated data for analytics
CREATE TABLE hourly_aggregates (
    device_id text,
    hour timestamp,
    sensor_type text,
    avg_value double,
    min_value double,
    max_value double,
    count bigint,
    PRIMARY KEY (device_id, hour, sensor_type)
) WITH CLUSTERING ORDER BY (hour DESC, sensor_type ASC);
```

### Real-time Processing (Redis)
```python
import redis
import json
from datetime import datetime

class IoTDataProcessor:
    def __init__(self):
        self.redis_client = redis.Redis(host='localhost', port=6379, db=0)
    
    def process_sensor_data(self, device_id, sensor_type, value):
        # Store latest reading
        key = f"device:{device_id}:latest:{sensor_type}"
        data = {
            'value': value,
            'timestamp': datetime.now().isoformat(),
            'device_id': device_id,
            'sensor_type': sensor_type
        }
        self.redis_client.set(key, json.dumps(data), ex=3600)
        
        # Update moving average
        avg_key = f"device:{device_id}:avg:{sensor_type}"
        self.redis_client.lpush(avg_key, value)
        self.redis_client.ltrim(avg_key, 0, 99)  # Keep last 100 readings
        
        # Check for alerts
        self.check_alerts(device_id, sensor_type, value)
    
    def check_alerts(self, device_id, sensor_type, value):
        # Define thresholds
        thresholds = {
            'temperature': {'min': -10, 'max': 50},
            'humidity': {'min': 20, 'max': 80}
        }
        
        if sensor_type in thresholds:
            threshold = thresholds[sensor_type]
            if value < threshold['min'] or value > threshold['max']:
                alert = {
                    'device_id': device_id,
                    'sensor_type': sensor_type,
                    'value': value,
                    'threshold': threshold,
                    'timestamp': datetime.now().isoformat()
                }
                self.redis_client.lpush('alerts', json.dumps(alert))
```

## Case Study: Netflix-like Streaming Platform

### Architecture Overview
- **User Service**: PostgreSQL for user management
- **Content Service**: MongoDB for metadata
- **Viewing History**: Cassandra for time-series data
- **Recommendations**: Redis for real-time caching
- **Search**: Elasticsearch for content discovery

### Implementation Highlights
```sql
-- PostgreSQL: User subscriptions
CREATE TABLE subscriptions (
    subscription_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    plan_type VARCHAR(20) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```javascript
// MongoDB: Content metadata
{
    _id: ObjectId("..."),
    title: "Movie Title",
    description: "Movie description",
    genre: ["Action", "Drama"],
    release_year: 2023,
    duration: 120,
    rating: "PG-13",
    cast: [
        {name: "Actor 1", role: "Lead"},
        {name: "Actor 2", role: "Supporting"}
    ],
    video_files: [
        {quality: "1080p", url: "https://cdn.example.com/movie_1080p.mp4"},
        {quality: "720p", url: "https://cdn.example.com/movie_720p.mp4"}
    ],
    thumbnail: "https://cdn.example.com/thumbnail.jpg",
    created_at: ISODate("2023-12-01T00:00:00Z")
}
```

```sql
-- Cassandra: Viewing history
CREATE TABLE viewing_history (
    user_id int,
    content_id text,
    watch_timestamp timestamp,
    watch_duration int,
    total_duration int,
    device_type text,
    PRIMARY KEY (user_id, watch_timestamp, content_id)
) WITH CLUSTERING ORDER BY (watch_timestamp DESC, content_id ASC);
```

## Performance Optimization Case Study

### Problem
E-commerce site experiencing slow product search queries

### Analysis
```sql
-- Slow query
SELECT p.*, c.name as category_name, AVG(r.rating) as avg_rating
FROM products p
LEFT JOIN categories c ON p.category_id = c.category_id
LEFT JOIN reviews r ON p.product_id = r.product_id
WHERE p.name LIKE '%laptop%'
GROUP BY p.product_id
ORDER BY avg_rating DESC
LIMIT 20;
```

### Solutions Implemented
1. **Full-text indexing**
```sql
ALTER TABLE products ADD FULLTEXT(name, description);
SELECT * FROM products WHERE MATCH(name, description) AGAINST('laptop' IN NATURAL LANGUAGE MODE);
```

2. **Materialized views for ratings**
```sql
CREATE TABLE product_ratings (
    product_id INT PRIMARY KEY,
    avg_rating DECIMAL(3,2),
    review_count INT,
    last_updated TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
```

3. **Redis caching layer**
```python
def get_product_search_results(query, page=1, per_page=20):
    cache_key = f"search:{query}:{page}:{per_page}"
    cached_result = redis_client.get(cache_key)
    
    if cached_result:
        return json.loads(cached_result)
    
    # Execute database query
    results = execute_search_query(query, page, per_page)
    
    # Cache for 5 minutes
    redis_client.setex(cache_key, 300, json.dumps(results))
    
    return results
```

## Final Project Assignment

### Build a Complete Database Solution
Choose one of the following domains:
1. **Healthcare Management System**
2. **Educational Platform**
3. **Food Delivery Service**
4. **Real Estate Platform**

### Requirements
1. **Database Design**
   - ER diagrams
   - Normalized schema
   - Appropriate constraints

2. **Implementation**
   - SQL DDL scripts
   - Sample data insertion
   - Stored procedures/functions

3. **Advanced Features**
   - Indexing strategy
   - Transaction handling
   - Security implementation

4. **Performance Optimization**
   - Query optimization
   - Caching strategy
   - Monitoring setup

5. **Documentation**
   - System architecture
   - API documentation
   - Deployment guide

### Deliverables
- Complete database schema
- Application code (any language)
- Performance test results
- Documentation package
- Presentation slides

## Course Completion

### Skills Acquired
- Database design and modeling
- SQL proficiency (basic to advanced)
- Transaction management
- Performance optimization
- NoSQL database usage
- Database administration
- Real-world project experience

### Career Paths
- **Database Administrator (DBA)**
- **Database Developer**
- **Data Engineer**
- **Backend Developer**
- **Data Analyst**
- **Solutions Architect**

### Certification Preparation
- Oracle Database certifications
- Microsoft SQL Server certifications
- MongoDB certifications
- AWS Database certifications
- Google Cloud Database certifications

### Next Steps
1. **Specialize** in specific database technologies
2. **Learn** cloud database services
3. **Explore** big data technologies
4. **Practice** with real-world projects
5. **Join** database communities and forums

## Resources for Continued Learning
- Database vendor documentation
- Online courses and tutorials
- Database conferences and meetups
- Open source database projects
- Technical blogs and publications

Congratulations on completing the DBMS Complete Course!