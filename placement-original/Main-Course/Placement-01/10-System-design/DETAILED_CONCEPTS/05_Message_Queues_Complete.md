# 📨 Message Queues - Complete Deep Dive

## What are Message Queues?

### Definition
Asynchronous communication pattern where messages are stored in a queue until processed.

### Architecture
```
Producer → Message Queue → Consumer
           (Buffer)

Benefits:
- Decoupling (producer/consumer independent)
- Scalability (add more consumers)
- Reliability (messages persist)
- Load leveling (handle traffic spikes)
```

---

## When to Use Message Queues

### Use Cases
```
✅ Email sending (async)
✅ Image processing (heavy task)
✅ Order processing (multi-step)
✅ Log aggregation (high volume)
✅ Event-driven architecture
✅ Microservices communication

❌ Real-time responses needed
❌ Simple CRUD operations
❌ Low latency critical
```

---

## Message Queue Patterns

### 1. Point-to-Point (Queue)
```
Producer → Queue → Consumer 1
                → Consumer 2 (one gets message)

Characteristics:
- One message → One consumer
- Load balancing
- Competing consumers

Example: Order processing
Order → Queue → [Worker 1, Worker 2, Worker 3]
Each order processed by one worker
```

### 2. Publish-Subscribe (Topic)
```
Producer → Topic → Subscriber 1
                → Subscriber 2 (all get message)
                → Subscriber 3

Characteristics:
- One message → All subscribers
- Broadcasting
- Independent processing

Example: User registration
User registers → Topic → [Email Service, Analytics, CRM]
All services notified
```

---

## Popular Message Queues

### RabbitMQ
```python
import pika

# Producer
connection = pika.BlockingConnection()
channel = connection.channel()
channel.queue_declare(queue='tasks')
channel.basic_publish(
    exchange='',
    routing_key='tasks',
    body='Process order #123'
)

# Consumer
def callback(ch, method, properties, body):
    print(f"Processing: {body}")
    # Process task
    ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_consume(queue='tasks', on_message_callback=callback)
channel.start_consuming()

Features:
- Multiple exchange types
- Message routing
- Dead letter queues
- Priority queues
```

### Apache Kafka
```python
from kafka import KafkaProducer, KafkaConsumer

# Producer
producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('orders', b'Order #123')

# Consumer
consumer = KafkaConsumer(
    'orders',
    group_id='order-processors',
    bootstrap_servers='localhost:9092'
)

for message in consumer:
    print(message.value)

Features:
- High throughput (millions/sec)
- Persistent storage
- Stream processing
- Replay capability
```

### AWS SQS
```python
import boto3

sqs = boto3.client('sqs')

# Send message
sqs.send_message(
    QueueUrl='https://sqs.us-east-1.amazonaws.com/123/orders',
    MessageBody='Order #123'
)

# Receive message
messages = sqs.receive_message(
    QueueUrl='https://sqs.us-east-1.amazonaws.com/123/orders',
    MaxNumberOfMessages=10
)

Features:
- Fully managed
- Auto-scaling
- Dead letter queues
- FIFO queues
```

---

## Delivery Guarantees

### At-Most-Once
```
Producer → Queue → Consumer
           ↓ Message lost if consumer fails
           
Risk: Message loss
Use: Non-critical data (metrics, logs)
```

### At-Least-Once
```
Producer → Queue → Consumer
           ↓ Retry on failure
           ↓ Possible duplicates

Risk: Duplicate processing
Use: Most applications (with idempotency)
```

### Exactly-Once
```
Producer → Queue → Consumer
           ↓ Transactional delivery
           ↓ No duplicates, no loss

Risk: Complex, slower
Use: Financial transactions
```

---

## Message Ordering

### Unordered (Parallel Processing)
```
Messages: [M1, M2, M3, M4]
Consumer 1: M1, M3
Consumer 2: M2, M4

Processing order: Random
Throughput: High
```

### Ordered (Sequential Processing)
```
Messages: [M1, M2, M3, M4]
Consumer: M1 → M2 → M3 → M4

Processing order: Guaranteed
Throughput: Lower
```

### Partition-Based Ordering
```
Partition 1: [M1, M3] → Consumer 1 (ordered)
Partition 2: [M2, M4] → Consumer 2 (ordered)

Order within partition: Guaranteed
Order across partitions: Not guaranteed
Throughput: High
```

---

## Error Handling

### Retry with Exponential Backoff
```python
import time

def process_with_retry(message, max_retries=3):
    for attempt in range(max_retries):
        try:
            process(message)
            return True
        except Exception as e:
            wait_time = 2 ** attempt  # 1s, 2s, 4s
            time.sleep(wait_time)
    
    # Failed after retries
    send_to_dead_letter_queue(message)
```

### Dead Letter Queue
```
Main Queue → Consumer (fails) → DLQ
                              ↓
                         Manual review
                         or reprocess

Purpose:
- Isolate problematic messages
- Prevent blocking
- Debug issues
```

---

## Performance Optimization

### Batch Processing
```python
# Bad: Process one at a time
for message in messages:
    db.insert(message)  # 1000 DB calls

# Good: Batch insert
batch = []
for message in messages:
    batch.append(message)
    if len(batch) >= 100:
        db.bulk_insert(batch)
        batch = []

# 10x faster
```

### Prefetching
```python
# Fetch multiple messages at once
channel.basic_qos(prefetch_count=10)

# Process in parallel
with ThreadPoolExecutor(max_workers=10) as executor:
    executor.map(process, messages)
```

---

## Summary

### Key Takeaways
- Use for async processing
- Choose based on throughput needs
- Handle failures gracefully
- Monitor queue depth
- Implement idempotency

### Queue Comparison
```
Feature      RabbitMQ    Kafka       SQS
────────────────────────────────────────
Throughput   Medium      Very High   Medium
Ordering     Yes         Partition   FIFO only
Persistence  Optional    Always      Always
Complexity   Medium      High        Low
Cost         Self-host   Self-host   Pay-per-use
```

---

**Next**: [06_Microservices_Complete.md](./06_Microservices_Complete.md)
