# Week 5: Data Storage & Processing - Complete Content

> **Master message queues, event-driven architecture, stream processing, and data pipelines**

## 📚 Week Overview

**Duration**: 7 days  
**Difficulty**: Intermediate to Advanced  
**Prerequisites**: Weeks 1-4 completed

### Learning Objectives

By the end of this week, you will:
- ✅ Master message queue systems (RabbitMQ, Kafka)
- ✅ Build event-driven architectures
- ✅ Implement stream processing pipelines
- ✅ Design batch processing systems
- ✅ Handle data consistency patterns
- ✅ Build pub-sub systems
- ✅ Implement CQRS and Event Sourcing

---

## 🎯 Day 1: Message Queues Fundamentals

### Learning Objectives
- Understand message queue patterns
- Learn queue vs topic vs stream
- Implement producer-consumer patterns
- Master message acknowledgment

---

### 1.1 Why Message Queues?

**Problems they solve:**

```
Without Message Queue (Synchronous):
┌──────────┐     ┌──────────┐     ┌───────────┐
│  API     │────→│  Email   │────→│  SMS      │
│ Server   │     │ Service  │     │  Service  │
└──────────┘     └──────────┘     └───────────┘
   ⏱️ Wait       ⏱️ 2 seconds    ⏱️ 1 second
Total Response Time: 3+ seconds! ❌

With Message Queue (Asynchronous):
┌──────────┐     ┌──────────────┐
│  API     │────→│ Message Queue│
│ Server   │←────│              │
└──────────┘     └──────┬───────┘
   ⏱️ <10ms              │
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
    ┌──────┐        ┌──────┐        ┌──────┐
    │Email │        │ SMS  │        │ Push │
    │Worker│        │Worker│        │Worker│
    └──────┘        └──────┘        └──────┘
     Process Async ✅
```

### 1.2 Message Queue Patterns

```python
from typing import Dict, Any, Callable, List
from dataclasses import dataclass
from datetime import datetime
from queue import Queue
import asyncio
import json

@dataclass
class Message:
    id: str
    body: Dict[str, Any]
    timestamp: datetime
    retry_count: int = 0
    max_retries: int = 3

class MessageQueue:
    def __init__(self, name: str, max_size: int = 1000):
        self.name = name
        self.queue: Queue = Queue(maxsize=max_size)
        self.dead_letter_queue: Queue = Queue()
        self.consumers: List[Callable] = []
        self.stats = {
            "published": 0,
            "consumed": 0,
            "failed": 0,
            "dead_letters": 0
        }
    
    async def publish(self, message_body: Dict[str, Any]) -> bool:
        """Publish message to queue"""
        message = Message(
            id=f"msg-{self.stats['published']}",
            body=message_body,
            timestamp=datetime.now()
        )
        
        try:
            self.queue.put(message, block=False)
            self.stats["published"] += 1
            print(f"📤 Published to {self.name}: {message.id}")
            return True
        except:
            print(f"❌ Queue {self.name} is full!")
            return False
    
    async def consume(self, consumer_id: str) -> Message:
        """Consume message from queue"""
        try:
            message = self.queue.get(block=False)
            self.stats["consumed"] += 1
            print(f"📥 Consumer {consumer_id} received: {message.id}")
            return message
        except:
            return None
    
    async def ack(self, message: Message, success: bool):
        """Acknowledge message processing"""
        if success:
            print(f"✅ Message {message.id} processed successfully")
            self.queue.task_done()
        else:
            # Retry logic
            message.retry_count += 1
            if message.retry_count < message.max_retries:
                print(f"🔄 Retrying message {message.id} ({message.retry_count}/{message.max_retries})")
                await self.publish(message.body)
            else:
                print(f"💀 Message {message.id} moved to dead letter queue")
                self.dead_letter_queue.put(message)
                self.stats["dead_letters"] += 1
            
            self.stats["failed"] += 1
    
    def register_consumer(self, handler: Callable):
        """Register consumer handler"""
        self.consumers.append(handler)
    
    async def start_consuming(self, consumer_id: str):
        """Start consuming messages"""
        while True:
            message = await self.consume(consumer_id)
            if message:
                # Process with registered handlers
                for handler in self.consumers:
                    try:
                        await handler(message.body)
                        await self.ack(message, success=True)
                    except Exception as e:
                        print(f"❌ Handler failed: {e}")
                        await self.ack(message, success=False)
            else:
                await asyncio.sleep(0.1)  # Wait for messages
    
    def get_stats(self) -> Dict:
        """Get queue statistics"""
        return {
            "name": self.name,
            "size": self.queue.qsize(),
            "dead_letters": self.dead_letter_queue.qsize(),
            **self.stats
        }

# Example: Email notification system
async def email_handler(message_body: Dict[str, Any]):
    """Handle email sending"""
    email = message_body.get("email")
    subject = message_body.get("subject")
    print(f"📧 Sending email to {email}: {subject}")
    await asyncio.sleep(0.5)  # Simulate email sending
    # Simulate 10% failure rate
    import random
    if random.random() < 0.1:
        raise Exception("Email service unavailable")

async def sms_handler(message_body: Dict[str, Any]):
    """Handle SMS sending"""
    phone = message_body.get("phone")
    message = message_body.get("message")
    print(f"📱 Sending SMS to {phone}: {message}")
    await asyncio.sleep(0.3)  # Simulate SMS sending

# Demo
async def demo_message_queue():
    # Create queue
    notification_queue = MessageQueue("notifications", max_size=100)
    notification_queue.register_consumer(email_handler)
    
    # Producer: Publish messages
    async def producer():
        for i in range(10):
            await notification_queue.publish({
                "email": f"user{i}@example.com",
                "subject": "Welcome!",
                "body": "Welcome to our platform"
            })
            await asyncio.sleep(0.1)
    
    # Consumer: Process messages
    async def consumer(consumer_id: str):
        await notification_queue.start_consuming(consumer_id)
    
    # Run producer and consumers
    await asyncio.gather(
        producer(),
        consumer("worker-1"),
        consumer("worker-2")
    )
    
    # Print statistics
    print("\n📊 Queue Statistics:")
    stats = notification_queue.get_stats()
    for key, value in stats.items():
        print(f"   {key}: {value}")

# asyncio.run(demo_message_queue())
```

### 1.3 Queue vs Topic vs Stream

```python
from enum import Enum
from typing import Set

class MessagingPattern(Enum):
    QUEUE = "queue"  # Point-to-point (one consumer)
    TOPIC = "topic"  # Pub-sub (multiple consumers)
    STREAM = "stream"  # Persistent log

# QUEUE: Point-to-Point
class QueuePattern:
    """
    One message → One consumer
    Example: Task processing
    """
    def __init__(self):
        self.messages = Queue()
    
    def send(self, message: str):
        """Only ONE consumer will receive this"""
        self.messages.put(message)
    
    def receive(self) -> str:
        """Message is removed after receipt"""
        return self.messages.get()

# TOPIC: Publish-Subscribe
class TopicPattern:
    """
    One message → ALL subscribers
    Example: Event notifications
    """
    def __init__(self, name: str):
        self.name = name
        self.subscribers: Set[str] = set()
        self.message_log: List = []
    
    def subscribe(self, subscriber_id: str):
        """Subscribe to topic"""
        self.subscribers.add(subscriber_id)
        print(f"✅ {subscriber_id} subscribed to {self.name}")
    
    def publish(self, message: Dict[str, Any]):
        """All subscribers receive message"""
        self.message_log.append(message)
        print(f"📢 Broadcasting to {len(self.subscribers)} subscribers")
        for subscriber in self.subscribers:
            self._deliver_to_subscriber(subscriber, message)
    
    def _deliver_to_subscriber(self, subscriber_id: str, message: Dict):
        """Deliver message to specific subscriber"""
        print(f"   → {subscriber_id}: {message}")

# STREAM: Persistent Log
class StreamPattern:
    """
    Persistent log of messages
    Consumers can replay from any point
    Example: Kafka, Event Sourcing
    """
    def __init__(self, name: str):
        self.name = name
        self.log: List[Dict] = []
        self.consumer_offsets: Dict[str, int] = {}
    
    def append(self, message: Dict[str, Any]):
        """Append to log (immutable)"""
        offset = len(self.log)
        self.log.append({
            "offset": offset,
            "timestamp": datetime.now(),
            "data": message
        })
        print(f"📝 Appended to stream at offset {offset}")
    
    def read(self, consumer_id: str, from_offset: int = 0) -> List[Dict]:
        """Read from specific offset"""
        # Get consumer's last offset
        last_offset = self.consumer_offsets.get(consumer_id, from_offset)
        
        # Read new messages
        new_messages = self.log[last_offset:]
        
        # Update offset
        if new_messages:
            self.consumer_offsets[consumer_id] = len(self.log)
        
        return new_messages
    
    def replay(self, consumer_id: str, from_offset: int):
        """Replay messages from specific point"""
        print(f"🔄 {consumer_id} replaying from offset {from_offset}")
        self.consumer_offsets[consumer_id] = from_offset
        return self.read(consumer_id, from_offset)

# Demo comparison
def demo_patterns():
    print("=== QUEUE Pattern ===")
    queue = QueuePattern()
    queue.send("Task 1")
    print(f"Consumer A receives: {queue.receive()}")
    # queue.receive() would block - no more messages
    
    print("\n=== TOPIC Pattern ===")
    topic = TopicPattern("user-events")
    topic.subscribe("analytics-service")
    topic.subscribe("email-service")
    topic.subscribe("notification-service")
    topic.publish({"event": "user_signup", "user_id": 123})
    
    print("\n=== STREAM Pattern ===")
    stream = StreamPattern("order-events")
    stream.append({"event": "order_created", "order_id": 1})
    stream.append({"event": "order_paid", "order_id": 1})
    stream.append({"event": "order_shipped", "order_id": 1})
    
    # Consumer 1 reads from beginning
    messages = stream.read("consumer-1", from_offset=0)
    print(f"Consumer-1 read {len(messages)} messages")
    
    # Consumer 2 can replay from any point
    messages = stream.replay("consumer-2", from_offset=1)
    print(f"Consumer-2 replayed {len(messages)} messages from offset 1")

# demo_patterns()
```

**When to use each:**

```python
# Use QUEUE when:
# - Each task should be processed exactly once
# - Load balancing across workers
# - Example: Background job processing

queue_use_cases = [
    "Image processing tasks",
    "Email sending queue",
    "Payment processing",
    "Report generation"
]

# Use TOPIC when:
# - Multiple services need same event
# - Broadcasting updates
# - Example: Event notifications

topic_use_cases = [
    "User signup events (email, analytics, CRM)",
    "Price updates (cache invalidation, notifications)",
    "System alerts (logging, monitoring, paging)",
    "Real-time updates (WebSocket broadcast)"
]

# Use STREAM when:
# - Need to replay events
# - Event sourcing
# - Example: Audit logs, analytics

stream_use_cases = [
    "Event sourcing (replay state)",
    "Audit logs (compliance)",
    "Analytics pipelines (recompute metrics)",
    "Change data capture (database replication)"
]
```

---

## 🎯 Day 2: RabbitMQ Deep Dive

### Learning Objectives
- Master RabbitMQ exchanges and routing
- Implement work queues
- Learn message durability
- Handle backpressure

---

### 2.1 RabbitMQ Architecture

```
RabbitMQ Components:
┌──────────┐     ┌──────────┐     ┌────────┐     ┌──────────┐
│Producer  │────→│ Exchange │────→│ Queue  │────→│Consumer  │
└──────────┘     └──────────┘     └────────┘     └──────────┘
                      │
                      │ Binding (Routing Key)
                      │
                 ┌────┴────┐
                 │ Routing │
                 │  Rules  │
                 └─────────┘

Exchange Types:
1. Direct: Exact routing key match
2. Fanout: Broadcast to all queues
3. Topic: Pattern matching (wildcards)
4. Headers: Match message headers
```

### 2.2 RabbitMQ Implementation (Python)

```python
# Install: pip install pika

import pika
import json
from typing import Callable, Dict, Any
from dataclasses import dataclass

@dataclass
class RabbitMQConfig:
    host: str = "localhost"
    port: int = 5672
    username: str = "guest"
    password: str = "guest"
    virtual_host: str = "/"

class RabbitMQProducer:
    def __init__(self, config: RabbitMQConfig):
        self.config = config
        self.connection = None
        self.channel = None
    
    def connect(self):
        """Establish connection to RabbitMQ"""
        credentials = pika.PlainCredentials(
            self.config.username,
            self.config.password
        )
        parameters = pika.ConnectionParameters(
            host=self.config.host,
            port=self.config.port,
            virtual_host=self.config.virtual_host,
            credentials=credentials
        )
        self.connection = pika.BlockingConnection(parameters)
        self.channel = self.connection.channel()
        print("✅ Connected to RabbitMQ")
    
    def declare_queue(self, queue_name: str, durable: bool = True):
        """Declare a queue"""
        self.channel.queue_declare(
            queue=queue_name,
            durable=durable  # Survive broker restart
        )
        print(f"📦 Queue '{queue_name}' declared")
    
    def publish_message(
        self,
        exchange: str,
        routing_key: str,
        message: Dict[str, Any],
        persistent: bool = True
    ):
        """Publish message to exchange"""
        self.channel.basic_publish(
            exchange=exchange,
            routing_key=routing_key,
            body=json.dumps(message),
            properties=pika.BasicProperties(
                delivery_mode=2 if persistent else 1,  # 2 = persistent
                content_type='application/json'
            )
        )
        print(f"📤 Published: {routing_key}")
    
    def close(self):
        """Close connection"""
        if self.connection:
            self.connection.close()
            print("👋 Disconnected from RabbitMQ")

class RabbitMQConsumer:
    def __init__(self, config: RabbitMQConfig):
        self.config = config
        self.connection = None
        self.channel = None
        self.handlers: Dict[str, Callable] = {}
    
    def connect(self):
        """Establish connection"""
        credentials = pika.PlainCredentials(
            self.config.username,
            self.config.password
        )
        parameters = pika.ConnectionParameters(
            host=self.config.host,
            port=self.config.port,
            virtual_host=self.config.virtual_host,
            credentials=credentials
        )
        self.connection = pika.BlockingConnection(parameters)
        self.channel = self.connection.channel()
        
        # Set QoS (prefetch count)
        self.channel.basic_qos(prefetch_count=1)  # Process one message at a time
        print("✅ Consumer connected to RabbitMQ")
    
    def register_handler(self, queue_name: str, handler: Callable):
        """Register message handler for queue"""
        self.handlers[queue_name] = handler
    
    def start_consuming(self, queue_name: str):
        """Start consuming messages from queue"""
        def callback(ch, method, properties, body):
            """Message callback"""
            try:
                # Parse message
                message = json.loads(body)
                print(f"📥 Received from {queue_name}: {message}")
                
                # Process message
                handler = self.handlers.get(queue_name)
                if handler:
                    handler(message)
                    # Acknowledge message
                    ch.basic_ack(delivery_tag=method.delivery_tag)
                    print(f"✅ Message processed and acknowledged")
                else:
                    print(f"❌ No handler for queue {queue_name}")
                    ch.basic_nack(delivery_tag=method.delivery_tag, requeue=False)
            
            except Exception as e:
                print(f"❌ Error processing message: {e}")
                # Reject and requeue
                ch.basic_nack(delivery_tag=method.delivery_tag, requeue=True)
        
        # Start consuming
        self.channel.basic_consume(
            queue=queue_name,
            on_message_callback=callback,
            auto_ack=False  # Manual acknowledgment
        )
        
        print(f"👂 Listening on queue '{queue_name}'...")
        self.channel.start_consuming()
    
    def close(self):
        """Close connection"""
        if self.connection:
            self.connection.close()

# Example: Order processing system
def demo_rabbitmq():
    config = RabbitMQConfig()
    
    # Producer
    producer = RabbitMQProducer(config)
    producer.connect()
    producer.declare_queue("orders", durable=True)
    
    # Publish orders
    for i in range(5):
        producer.publish_message(
            exchange="",  # Default exchange
            routing_key="orders",
            message={
                "order_id": i + 1,
                "user_id": 100 + i,
                "amount": 99.99 * (i + 1),
                "status": "pending"
            },
            persistent=True
        )
    
    producer.close()
    
    # Consumer
    consumer = RabbitMQConsumer(config)
    consumer.connect()
    
    def process_order(message: Dict[str, Any]):
        """Process order message"""
        order_id = message.get("order_id")
        amount = message.get("amount")
        print(f"💳 Processing order #{order_id} for ${amount}")
        import time
        time.sleep(1)  # Simulate processing
        print(f"✅ Order #{order_id} completed")
    
    consumer.register_handler("orders", process_order)
    
    # Start consuming (blocking)
    try:
        consumer.start_consuming("orders")
    except KeyboardInterrupt:
        consumer.close()

# Run: python rabbitmq_demo.py
```

### 2.3 Exchange Types

```python
# DIRECT Exchange: Exact routing key match
def setup_direct_exchange():
    """
    Use case: Route messages to specific queues
    Example: Log levels (error → error_queue, info → info_queue)
    """
    channel.exchange_declare(exchange='logs_direct', exchange_type='direct')
    
    # Publish
    channel.basic_publish(
        exchange='logs_direct',
        routing_key='error',
        body='Error message'
    )
    # Only queue bound with routing_key='error' receives this

# FANOUT Exchange: Broadcast to all
def setup_fanout_exchange():
    """
    Use case: Broadcast to all subscribers
    Example: Price updates → cache, database, analytics
    """
    channel.exchange_declare(exchange='price_updates', exchange_type='fanout')
    
    # Publish
    channel.basic_publish(
        exchange='price_updates',
        routing_key='',  # Ignored in fanout
        body='Price changed'
    )
    # ALL bound queues receive this

# TOPIC Exchange: Pattern matching
def setup_topic_exchange():
    """
    Use case: Flexible routing with wildcards
    * = exactly one word
    # = zero or more words
    
    Example: 
    - user.signup.email → user.*.email
    - order.created.sms → order.#
    """
    channel.exchange_declare(exchange='events', exchange_type='topic')
    
    # Bind with patterns
    channel.queue_bind(
        queue='analytics_queue',
        exchange='events',
        routing_key='user.*'  # user.signup, user.login, etc.
    )
    
    channel.queue_bind(
        queue='notification_queue',
        exchange='events',
        routing_key='*.*.email'  # Any event that needs email
    )
    
    # Publish
    channel.basic_publish(
        exchange='events',
        routing_key='user.signup.email',
        body='User signed up'
    )
    # Both analytics_queue and notification_queue receive this
```

---

## 🎯 Day 3: Apache Kafka Fundamentals

### Learning Objectives
- Understand Kafka architecture
- Learn topics and partitions
- Implement producers and consumers
- Master offset management

---

### 3.1 Kafka Architecture

```
Kafka Cluster:
┌────────────────────────────────────────────────────┐
│                  Kafka Cluster                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ Broker 1 │  │ Broker 2 │  │ Broker 3 │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  Topic: "user-events" (3 partitions, replication=2)│
│  ┌───────────┐  ┌───────────┐  ┌───────────┐     │
│  │Partition 0│  │Partition 1│  │Partition 2│     │
│  │(Leader: 1)│  │(Leader: 2)│  │(Leader: 3)│     │
│  │(Replica:2)│  │(Replica:3)│  │(Replica:1)│     │
│  └───────────┘  └───────────┘  └───────────┘     │
└────────────────────────────────────────────────────┘

Producer:
- Writes to partitions (round-robin or key-based)
- Waits for acknowledgment (acks=0/1/all)

Consumer Group:
- Each partition assigned to one consumer in group
- Parallel processing
- Offset tracking (at-least-once, at-most-once, exactly-once)
```

### 3.2 Kafka Producer (Python)

```python
# Install: pip install kafka-python

from kafka import KafkaProducer, KafkaConsumer
from kafka.admin import KafkaAdminClient, NewTopic
import json
from typing import Dict, Any, List
from dataclasses import dataclass
import hashlib

@dataclass
class KafkaConfig:
    bootstrap_servers: List[str] = None
    
    def __post_init__(self):
        if self.bootstrap_servers is None:
            self.bootstrap_servers = ['localhost:9092']

class KafkaProducerWrapper:
    def __init__(self, config: KafkaConfig):
        self.config = config
        self.producer = KafkaProducer(
            bootstrap_servers=config.bootstrap_servers,
            value_serializer=lambda v: json.dumps(v).encode('utf-8'),
            key_serializer=lambda k: k.encode('utf-8') if k else None,
            acks='all',  # Wait for all replicas
            retries=3,
            max_in_flight_requests_per_connection=5
        )
        print("✅ Kafka Producer initialized")
    
    def send_message(
        self,
        topic: str,
        message: Dict[str, Any],
        key: str = None
    ):
        """Send message to Kafka topic"""
        future = self.producer.send(
            topic,
            value=message,
            key=key
        )
        
        # Wait for acknowledgment
        try:
            record_metadata = future.get(timeout=10)
            print(f"📤 Sent to {record_metadata.topic}")
            print(f"   Partition: {record_metadata.partition}")
            print(f"   Offset: {record_metadata.offset}")
            return record_metadata
        except Exception as e:
            print(f"❌ Failed to send message: {e}")
            return None
    
    def send_batch(self, topic: str, messages: List[Dict[str, Any]]):
        """Send batch of messages"""
        for message in messages:
            self.producer.send(topic, value=message)
        
        # Flush to ensure all messages are sent
        self.producer.flush()
        print(f"📤 Sent batch of {len(messages)} messages to {topic}")
    
    def close(self):
        """Close producer"""
        self.producer.close()
        print("👋 Kafka Producer closed")

class KafkaConsumerWrapper:
    def __init__(
        self,
        config: KafkaConfig,
        group_id: str,
        topics: List[str]
    ):
        self.config = config
        self.group_id = group_id
        self.consumer = KafkaConsumer(
            *topics,
            bootstrap_servers=config.bootstrap_servers,
            group_id=group_id,
            value_deserializer=lambda m: json.loads(m.decode('utf-8')),
            key_deserializer=lambda k: k.decode('utf-8') if k else None,
            auto_offset_reset='earliest',  # Start from beginning
            enable_auto_commit=False,  # Manual commit for exactly-once
            max_poll_records=100
        )
        print(f"✅ Kafka Consumer initialized (group: {group_id})")
    
    def consume_messages(self, handler: callable, max_messages: int = None):
        """Consume messages and process with handler"""
        processed = 0
        
        try:
            for message in self.consumer:
                print(f"📥 Received from {message.topic}")
                print(f"   Partition: {message.partition}, Offset: {message.offset}")
                print(f"   Key: {message.key}, Value: {message.value}")
                
                try:
                    # Process message
                    handler(message.value)
                    
                    # Commit offset (exactly-once semantics)
                    self.consumer.commit()
                    
                    processed += 1
                    if max_messages and processed >= max_messages:
                        break
                
                except Exception as e:
                    print(f"❌ Error processing message: {e}")
                    # Don't commit - message will be reprocessed
        
        except KeyboardInterrupt:
            print("\n⚠️  Consumer interrupted")
        finally:
            self.close()
    
    def close(self):
        """Close consumer"""
        self.consumer.close()
        print("👋 Kafka Consumer closed")

# Example: Event streaming system
def demo_kafka():
    config = KafkaConfig()
    
    # Create topic (requires admin privileges)
    try:
        admin = KafkaAdminClient(bootstrap_servers=config.bootstrap_servers)
        topic = NewTopic(
            name='user-events',
            num_partitions=3,
            replication_factor=1
        )
        admin.create_topics([topic])
        print("✅ Topic 'user-events' created")
    except Exception as e:
        print(f"⚠️  Topic might already exist: {e}")
    
    # Producer: Send events
    producer = KafkaProducerWrapper(config)
    
    events = [
        {"event": "user_signup", "user_id": 1, "email": "user1@example.com"},
        {"event": "user_login", "user_id": 1, "ip": "192.168.1.1"},
        {"event": "user_purchase", "user_id": 1, "amount": 99.99},
        {"event": "user_logout", "user_id": 1},
    ]
    
    for event in events:
        # Use user_id as key for partitioning
        producer.send_message(
            topic='user-events',
            message=event,
            key=str(event['user_id'])
        )
    
    producer.close()
    
    # Consumer: Process events
    consumer = KafkaConsumerWrapper(
        config=config,
        group_id='analytics-service',
        topics=['user-events']
    )
    
    def process_event(event: Dict[str, Any]):
        """Process user event"""
        event_type = event.get('event')
        user_id = event.get('user_id')
        print(f"🔄 Processing {event_type} for user {user_id}")
        # Add to analytics database, update metrics, etc.
    
    consumer.consume_messages(process_event, max_messages=4)

# Run: python kafka_demo.py
```

### 3.3 Offset Management

```python
from kafka import TopicPartition

class OffsetManager:
    """
    Manage Kafka offsets for exactly-once processing
    """
    def __init__(self, consumer: KafkaConsumer):
        self.consumer = consumer
        self.processed_offsets = {}
    
    def get_current_offset(self, partition: int) -> int:
        """Get current offset for partition"""
        tp = TopicPartition('user-events', partition)
        position = self.consumer.position(tp)
        return position
    
    def commit_offset(self, partition: int, offset: int):
        """Commit specific offset"""
        tp = TopicPartition('user-events', partition)
        self.consumer.commit({tp: offset + 1})  # Commit next offset
        self.processed_offsets[partition] = offset
    
    def reset_offset(self, partition: int, offset: int = 0):
        """Reset offset to specific position"""
        tp = TopicPartition('user-events', partition)
        self.consumer.seek(tp, offset)
        print(f"🔄 Reset partition {partition} to offset {offset}")
    
    def seek_to_beginning(self):
        """Reset to beginning of all partitions"""
        self.consumer.seek_to_beginning()
        print("⏪ Rewound to beginning")
    
    def seek_to_end(self):
        """Skip to end of all partitions"""
        self.consumer.seek_to_end()
        print("⏩ Skipped to end")

# Delivery guarantees:
"""
1. At-most-once (auto_commit=True, commit before processing):
   - Fast, may lose messages on failure
   - Use for: Non-critical logs

2. At-least-once (auto_commit=False, commit after processing):
   - Reliable, may duplicate on failure
   - Use for: Most use cases (with idempotent processing)

3. Exactly-once (transactional producer + offset commits):
   - Complex, guaranteed once
   - Use for: Financial transactions, critical data
"""
```

---

## 🎯 Day 4: Event-Driven Architecture

### Learning Objectives
- Master event-driven design patterns
- Implement event sourcing
- Learn saga pattern for distributed transactions
- Build event handlers and listeners

---

### 4.1 Event-Driven Architecture Patterns

```python
from dataclasses import dataclass
from typing import List, Dict, Any, Callable
from datetime import datetime
from enum import Enum
import asyncio

class EventType(Enum):
    USER_REGISTERED = "user.registered"
    ORDER_CREATED = "order.created"
    PAYMENT_PROCESSED = "payment.processed"
    ORDER_SHIPPED = "order.shipped"
    INVENTORY_UPDATED = "inventory.updated"

@dataclass
class Event:
    event_id: str
    event_type: EventType
    aggregate_id: str  # Entity ID (user_id, order_id, etc.)
    data: Dict[str, Any]
    timestamp: datetime
    version: int = 1
    metadata: Dict[str, Any] = None

class EventBus:
    """Central event bus for event-driven architecture"""
    
    def __init__(self):
        self.handlers: Dict[EventType, List[Callable]] = {}
        self.event_log: List[Event] = []
    
    def subscribe(self, event_type: EventType, handler: Callable):
        """Subscribe handler to event type"""
        if event_type not in self.handlers:
            self.handlers[event_type] = []
        self.handlers[event_type].append(handler)
        print(f"✅ Subscribed handler to {event_type.value}")
    
    async def publish(self, event: Event):
        """Publish event to all subscribers"""
        # Log event (for event sourcing)
        self.event_log.append(event)
        print(f"📢 Published: {event.event_type.value} (ID: {event.event_id})")
        
        # Notify all handlers
        handlers = self.handlers.get(event.event_type, [])
        if handlers:
            tasks = [handler(event) for handler in handlers]
            await asyncio.gather(*tasks, return_exceptions=True)
        else:
            print(f"⚠️  No handlers for {event.event_type.value}")
    
    def get_events(self, aggregate_id: str = None) -> List[Event]:
        """Get all events for an aggregate"""
        if aggregate_id:
            return [e for e in self.event_log if e.aggregate_id == aggregate_id]
        return self.event_log

# Example: E-commerce order system
class OrderService:
    """Order service that publishes events"""
    
    def __init__(self, event_bus: EventBus):
        self.event_bus = event_bus
        self.orders: Dict[str, Dict] = {}
    
    async def create_order(self, user_id: str, items: List[Dict]) -> str:
        """Create order and publish event"""
        order_id = f"order-{len(self.orders) + 1}"
        
        # Create order
        order = {
            "order_id": order_id,
            "user_id": user_id,
            "items": items,
            "status": "created",
            "total": sum(item["price"] * item["quantity"] for item in items)
        }
        self.orders[order_id] = order
        
        # Publish ORDER_CREATED event
        event = Event(
            event_id=f"evt-{len(self.event_bus.event_log) + 1}",
            event_type=EventType.ORDER_CREATED,
            aggregate_id=order_id,
            data=order,
            timestamp=datetime.now()
        )
        await self.event_bus.publish(event)
        
        return order_id

class InventoryService:
    """Inventory service that listens to order events"""
    
    def __init__(self, event_bus: EventBus):
        self.event_bus = event_bus
        self.inventory: Dict[str, int] = {
            "laptop": 100,
            "phone": 200,
            "tablet": 150
        }
        
        # Subscribe to ORDER_CREATED events
        self.event_bus.subscribe(EventType.ORDER_CREATED, self.handle_order_created)
    
    async def handle_order_created(self, event: Event):
        """Handle order created event - reserve inventory"""
        print(f"📦 InventoryService: Processing {event.event_type.value}")
        order = event.data
        
        # Reserve inventory
        for item in order["items"]:
            product = item["product"]
            quantity = item["quantity"]
            
            if self.inventory.get(product, 0) >= quantity:
                self.inventory[product] -= quantity
                print(f"   ✅ Reserved {quantity}x {product} (remaining: {self.inventory[product]})")
            else:
                print(f"   ❌ Insufficient inventory for {product}")
        
        # Publish INVENTORY_UPDATED event
        event = Event(
            event_id=f"evt-{len(self.event_bus.event_log) + 1}",
            event_type=EventType.INVENTORY_UPDATED,
            aggregate_id=order["order_id"],
            data={"order_id": order["order_id"], "status": "reserved"},
            timestamp=datetime.now()
        )
        await self.event_bus.publish(event)

class PaymentService:
    """Payment service that listens to inventory events"""
    
    def __init__(self, event_bus: EventBus):
        self.event_bus = event_bus
        self.event_bus.subscribe(EventType.INVENTORY_UPDATED, self.handle_inventory_updated)
    
    async def handle_inventory_updated(self, event: Event):
        """Handle inventory updated - process payment"""
        print(f"💳 PaymentService: Processing {event.event_type.value}")
        
        # Simulate payment processing
        await asyncio.sleep(0.5)
        
        # Publish PAYMENT_PROCESSED event
        payment_event = Event(
            event_id=f"evt-{len(self.event_bus.event_log) + 1}",
            event_type=EventType.PAYMENT_PROCESSED,
            aggregate_id=event.aggregate_id,
            data={"order_id": event.aggregate_id, "status": "paid"},
            timestamp=datetime.now()
        )
        await self.event_bus.publish(payment_event)

class NotificationService:
    """Notification service that listens to all events"""
    
    def __init__(self, event_bus: EventBus):
        self.event_bus = event_bus
        # Subscribe to multiple events
        self.event_bus.subscribe(EventType.ORDER_CREATED, self.handle_order_created)
        self.event_bus.subscribe(EventType.PAYMENT_PROCESSED, self.handle_payment_processed)
    
    async def handle_order_created(self, event: Event):
        """Send order confirmation"""
        print(f"📧 NotificationService: Order created notification")
        order = event.data
        print(f"   → Email to user {order['user_id']}: Order confirmed!")
    
    async def handle_payment_processed(self, event: Event):
        """Send payment confirmation"""
        print(f"📧 NotificationService: Payment processed notification")
        print(f"   → Email: Payment successful for order {event.aggregate_id}")

# Demo: Event-driven order flow
async def demo_event_driven():
    # Initialize event bus and services
    event_bus = EventBus()
    
    order_service = OrderService(event_bus)
    inventory_service = InventoryService(event_bus)
    payment_service = PaymentService(event_bus)
    notification_service = NotificationService(event_bus)
    
    # Create an order
    print("🛒 User places order\n")
    order_id = await order_service.create_order(
        user_id="user-123",
        items=[
            {"product": "laptop", "price": 999.99, "quantity": 1},
            {"product": "phone", "price": 499.99, "quantity": 2}
        ]
    )
    
    # Wait for async event processing
    await asyncio.sleep(1)
    
    # Show event log
    print("\n📋 Event Log:")
    for event in event_bus.event_log:
        print(f"   {event.timestamp.strftime('%H:%M:%S')} - {event.event_type.value}")

# asyncio.run(demo_event_driven())
```

### 4.2 Event Sourcing Pattern

```python
from typing import List, Type
from copy import deepcopy

class Aggregate:
    """Base class for event-sourced aggregates"""
    
    def __init__(self, aggregate_id: str):
        self.aggregate_id = aggregate_id
        self.version = 0
        self.uncommitted_events: List[Event] = []
    
    def apply_event(self, event: Event):
        """Apply event to update state"""
        # Override in subclass to handle specific events
        pass
    
    def raise_event(self, event: Event):
        """Raise a new event"""
        self.apply_event(event)
        self.uncommitted_events.append(event)
        self.version += 1

class OrderAggregate(Aggregate):
    """Order aggregate with event sourcing"""
    
    def __init__(self, aggregate_id: str):
        super().__init__(aggregate_id)
        self.user_id = None
        self.items = []
        self.status = "pending"
        self.total = 0.0
    
    def create_order(self, user_id: str, items: List[Dict]):
        """Create order (command)"""
        event = Event(
            event_id=f"evt-{self.version + 1}",
            event_type=EventType.ORDER_CREATED,
            aggregate_id=self.aggregate_id,
            data={
                "user_id": user_id,
                "items": items,
                "total": sum(i["price"] * i["quantity"] for i in items)
            },
            timestamp=datetime.now(),
            version=self.version + 1
        )
        self.raise_event(event)
    
    def process_payment(self):
        """Process payment (command)"""
        if self.status != "created":
            raise ValueError("Cannot process payment - order not created")
        
        event = Event(
            event_id=f"evt-{self.version + 1}",
            event_type=EventType.PAYMENT_PROCESSED,
            aggregate_id=self.aggregate_id,
            data={"order_id": self.aggregate_id},
            timestamp=datetime.now(),
            version=self.version + 1
        )
        self.raise_event(event)
    
    def ship_order(self):
        """Ship order (command)"""
        if self.status != "paid":
            raise ValueError("Cannot ship - payment not processed")
        
        event = Event(
            event_id=f"evt-{self.version + 1}",
            event_type=EventType.ORDER_SHIPPED,
            aggregate_id=self.aggregate_id,
            data={"order_id": self.aggregate_id},
            timestamp=datetime.now(),
            version=self.version + 1
        )
        self.raise_event(event)
    
    def apply_event(self, event: Event):
        """Apply event to update state"""
        if event.event_type == EventType.ORDER_CREATED:
            self.user_id = event.data["user_id"]
            self.items = event.data["items"]
            self.total = event.data["total"]
            self.status = "created"
        
        elif event.event_type == EventType.PAYMENT_PROCESSED:
            self.status = "paid"
        
        elif event.event_type == EventType.ORDER_SHIPPED:
            self.status = "shipped"

class EventStore:
    """Store for all events (event sourcing)"""
    
    def __init__(self):
        self.events: Dict[str, List[Event]] = {}
    
    def save_events(self, aggregate_id: str, events: List[Event]):
        """Save events for aggregate"""
        if aggregate_id not in self.events:
            self.events[aggregate_id] = []
        self.events[aggregate_id].extend(events)
        print(f"💾 Saved {len(events)} event(s) for {aggregate_id}")
    
    def get_events(self, aggregate_id: str) -> List[Event]:
        """Get all events for aggregate"""
        return self.events.get(aggregate_id, [])
    
    def rebuild_aggregate(
        self,
        aggregate_id: str,
        aggregate_class: Type[Aggregate]
    ) -> Aggregate:
        """Rebuild aggregate from events"""
        aggregate = aggregate_class(aggregate_id)
        events = self.get_events(aggregate_id)
        
        print(f"🔄 Rebuilding {aggregate_id} from {len(events)} events")
        for event in events:
            aggregate.apply_event(event)
            aggregate.version = event.version
        
        return aggregate

# Demo: Event sourcing
def demo_event_sourcing():
    event_store = EventStore()
    
    # Create order
    print("📝 Creating order...")
    order = OrderAggregate("order-123")
    order.create_order(
        user_id="user-456",
        items=[{"product": "laptop", "price": 999.99, "quantity": 1}]
    )
    
    # Save events
    event_store.save_events(order.aggregate_id, order.uncommitted_events)
    order.uncommitted_events.clear()
    
    # Process payment
    print("\n💳 Processing payment...")
    order.process_payment()
    event_store.save_events(order.aggregate_id, order.uncommitted_events)
    order.uncommitted_events.clear()
    
    # Ship order
    print("\n📦 Shipping order...")
    order.ship_order()
    event_store.save_events(order.aggregate_id, order.uncommitted_events)
    
    # Rebuild order from events (time travel!)
    print("\n⏰ Rebuilding order from event history...")
    rebuilt_order = event_store.rebuild_aggregate("order-123", OrderAggregate)
    print(f"   Status: {rebuilt_order.status}")
    print(f"   Total: ${rebuilt_order.total}")
    print(f"   Version: {rebuilt_order.version}")

# demo_event_sourcing()
```

### 4.3 Saga Pattern for Distributed Transactions

```python
from enum import Enum
from typing import List, Callable, Optional

class SagaStep:
    """Single step in a saga"""
    
    def __init__(
        self,
        name: str,
        action: Callable,
        compensation: Callable
    ):
        self.name = name
        self.action = action
        self.compensation = compensation

class SagaStatus(Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"
    COMPENSATING = "compensating"
    COMPENSATED = "compensated"

class Saga:
    """Saga orchestrator for distributed transactions"""
    
    def __init__(self, saga_id: str, steps: List[SagaStep]):
        self.saga_id = saga_id
        self.steps = steps
        self.status = SagaStatus.PENDING
        self.completed_steps: List[str] = []
        self.current_step = 0
    
    async def execute(self) -> bool:
        """Execute saga steps"""
        self.status = SagaStatus.IN_PROGRESS
        print(f"🎬 Starting saga: {self.saga_id}")
        
        try:
            # Execute each step
            for i, step in enumerate(self.steps):
                self.current_step = i
                print(f"\n  Step {i + 1}/{len(self.steps)}: {step.name}")
                
                # Execute step action
                await step.action()
                self.completed_steps.append(step.name)
                print(f"    ✅ {step.name} completed")
            
            self.status = SagaStatus.COMPLETED
            print(f"\n✅ Saga {self.saga_id} completed successfully")
            return True
        
        except Exception as e:
            print(f"\n❌ Saga failed at step {step.name}: {e}")
            await self.compensate()
            return False
    
    async def compensate(self):
        """Compensate completed steps in reverse order"""
        self.status = SagaStatus.COMPENSATING
        print(f"\n🔄 Starting compensation for {self.saga_id}")
        
        # Compensate in reverse order
        for step_name in reversed(self.completed_steps):
            step = next(s for s in self.steps if s.name == step_name)
            print(f"  Compensating: {step.name}")
            
            try:
                await step.compensation()
                print(f"    ✅ {step.name} compensated")
            except Exception as e:
                print(f"    ❌ Compensation failed for {step.name}: {e}")
        
        self.status = SagaStatus.COMPENSATED
        print(f"✅ Compensation completed for {self.saga_id}")

# Example: Order processing saga
class OrderSaga:
    """Order processing with saga pattern"""
    
    def __init__(self):
        self.order_id = None
        self.payment_id = None
        self.shipment_id = None
    
    async def create_order(self):
        """Step 1: Create order"""
        await asyncio.sleep(0.1)
        self.order_id = "order-789"
        print(f"    📝 Order created: {self.order_id}")
    
    async def cancel_order(self):
        """Compensate: Cancel order"""
        await asyncio.sleep(0.1)
        print(f"    🗑️  Order {self.order_id} cancelled")
        self.order_id = None
    
    async def reserve_inventory(self):
        """Step 2: Reserve inventory"""
        await asyncio.sleep(0.1)
        # Simulate inventory check
        if False:  # Change to True to test compensation
            raise Exception("Insufficient inventory")
        print(f"    📦 Inventory reserved for {self.order_id}")
    
    async def release_inventory(self):
        """Compensate: Release inventory"""
        await asyncio.sleep(0.1)
        print(f"    ↩️  Inventory released for {self.order_id}")
    
    async def process_payment(self):
        """Step 3: Process payment"""
        await asyncio.sleep(0.1)
        self.payment_id = "payment-456"
        print(f"    💳 Payment processed: {self.payment_id}")
    
    async def refund_payment(self):
        """Compensate: Refund payment"""
        await asyncio.sleep(0.1)
        print(f"    💰 Payment {self.payment_id} refunded")
        self.payment_id = None
    
    async def ship_order(self):
        """Step 4: Ship order"""
        await asyncio.sleep(0.1)
        self.shipment_id = "shipment-123"
        print(f"    🚚 Order shipped: {self.shipment_id}")
    
    async def cancel_shipment(self):
        """Compensate: Cancel shipment"""
        await asyncio.sleep(0.1)
        print(f"    ❌ Shipment {self.shipment_id} cancelled")
        self.shipment_id = None

# Demo: Saga execution
async def demo_saga():
    order_saga = OrderSaga()
    
    # Define saga steps with compensations
    saga = Saga(
        saga_id="order-saga-1",
        steps=[
            SagaStep("Create Order", order_saga.create_order, order_saga.cancel_order),
            SagaStep("Reserve Inventory", order_saga.reserve_inventory, order_saga.release_inventory),
            SagaStep("Process Payment", order_saga.process_payment, order_saga.refund_payment),
            SagaStep("Ship Order", order_saga.ship_order, order_saga.cancel_shipment),
        ]
    )
    
    # Execute saga
    success = await saga.execute()
    print(f"\n📊 Final Status: {saga.status.value}")

# asyncio.run(demo_saga())
```

---

## 🎯 Day 5: Stream Processing

### Learning Objectives
- Learn stream processing concepts
- Implement real-time data pipelines
- Master windowing and aggregations
- Build streaming analytics

---

### 5.1 Stream Processing Fundamentals

```python
from collections import defaultdict
from typing import Callable, List, Any
import time

class StreamProcessor:
    """Real-time stream processor"""
    
    def __init__(self):
        self.operators: List[Callable] = []
        self.sinks: List[Callable] = []
    
    def map(self, func: Callable):
        """Transform each element"""
        self.operators.append(("map", func))
        return self
    
    def filter(self, predicate: Callable):
        """Filter elements"""
        self.operators.append(("filter", predicate))
        return self
    
    def flat_map(self, func: Callable):
        """Transform one element to multiple"""
        self.operators.append(("flat_map", func))
        return self
    
    def key_by(self, key_func: Callable):
        """Partition by key"""
        self.operators.append(("key_by", key_func))
        return self
    
    def window(self, window_size: int):
        """Windowing aggregation"""
        self.operators.append(("window", window_size))
        return self
    
    def reduce(self, reduce_func: Callable):
        """Reduce values"""
        self.operators.append(("reduce", reduce_func))
        return self
    
    def sink(self, sink_func: Callable):
        """Output sink"""
        self.sinks.append(sink_func)
        return self
    
    async def process(self, stream: List[Any]):
        """Process stream through operators"""
        result = stream
        
        for op_type, op_func in self.operators:
            if op_type == "map":
                result = [op_func(x) for x in result]
            
            elif op_type == "filter":
                result = [x for x in result if op_func(x)]
            
            elif op_type == "flat_map":
                result = [item for x in result for item in op_func(x)]
            
            elif op_type == "key_by":
                # Group by key
                grouped = defaultdict(list)
                for x in result:
                    key = op_func(x)
                    grouped[key].append(x)
                result = dict(grouped)
            
            elif op_type == "window":
                # Windowing (simplified)
                window_size = op_func
                result = [result[i:i + window_size] 
                         for i in range(0, len(result), window_size)]
            
            elif op_type == "reduce":
                # Reduce each group
                if isinstance(result, dict):
                    result = {k: op_func(v) for k, v in result.items()}
                else:
                    result = [op_func(batch) for batch in result]
        
        # Send to sinks
        for sink_func in self.sinks:
            await sink_func(result)
        
        return result

# Example: Real-time analytics
async def demo_stream_processing():
    # Stream of user events
    events = [
        {"user_id": 1, "event": "click", "value": 1, "timestamp": 1000},
        {"user_id": 2, "event": "click", "value": 1, "timestamp": 1001},
        {"user_id": 1, "event": "purchase", "value": 99, "timestamp": 1002},
        {"user_id": 3, "event": "click", "value": 1, "timestamp": 1003},
        {"user_id": 2, "event": "purchase", "value": 149, "timestamp": 1004},
        {"user_id": 1, "event": "click", "value": 1, "timestamp": 1005},
    ]
    
    # Process stream: Count purchases per user
    processor = StreamProcessor()
    
    result = await (
        processor
        .filter(lambda e: e["event"] == "purchase")  # Only purchases
        .map(lambda e: {"user_id": e["user_id"], "amount": e["value"]})  # Extract fields
        .key_by(lambda e: e["user_id"])  # Group by user
        .reduce(lambda purchases: {
            "user_id": purchases[0]["user_id"],
            "total": sum(p["amount"] for p in purchases),
            "count": len(purchases)
        })  # Aggregate
        .sink(lambda r: print(f"📊 Results: {r}"))  # Output
        .process(events)
    )
    
    return result

# asyncio.run(demo_stream_processing())
```

### 5.2 Windowing Operations

```python
from datetime import datetime, timedelta
from collections import deque

class TimeWindow:
    """Time-based windowing"""
    
    def __init__(self, window_size_seconds: int, slide_interval_seconds: int = None):
        self.window_size = window_size_seconds
        self.slide_interval = slide_interval_seconds or window_size_seconds
        self.windows: Dict[int, List] = defaultdict(list)
    
    def add_event(self, event: Dict, timestamp: int):
        """Add event to appropriate windows"""
        # Calculate window start time
        window_start = (timestamp // self.slide_interval) * self.slide_interval
        
        # Add to all overlapping windows
        for i in range(window_start - self.window_size + self.slide_interval, 
                       window_start + 1, 
                       self.slide_interval):
            if i <= timestamp < i + self.window_size:
                self.windows[i].append(event)
    
    def get_window(self, window_start: int) -> List:
        """Get events in window"""
        return self.windows.get(window_start, [])
    
    def aggregate_windows(self, agg_func: Callable) -> Dict:
        """Aggregate all windows"""
        return {
            window_start: agg_func(events)
            for window_start, events in self.windows.items()
        }

# Example: Sliding window for rate limiting
class SlidingWindowRateLimiter:
    """Rate limiter using sliding window"""
    
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests: Dict[str, deque] = defaultdict(deque)
    
    def allow_request(self, user_id: str) -> bool:
        """Check if request is allowed"""
        current_time = time.time()
        user_requests = self.requests[user_id]
        
        # Remove old requests outside window
        while user_requests and user_requests[0] < current_time - self.window_seconds:
            user_requests.popleft()
        
        # Check if under limit
        if len(user_requests) < self.max_requests:
            user_requests.append(current_time)
            return True
        
        return False

# Demo
def demo_rate_limiter():
    limiter = SlidingWindowRateLimiter(max_requests=5, window_seconds=10)
    
    user_id = "user-123"
    
    # Simulate requests
    for i in range(8):
        allowed = limiter.allow_request(user_id)
        status = "✅ Allowed" if allowed else "❌ Rate limited"
        print(f"Request {i + 1}: {status}")
        time.sleep(0.5)

# demo_rate_limiter()
```

---

## 🎯 Day 6: CQRS (Command Query Responsibility Segregation)

### Learning Objectives
- Understand CQRS pattern
- Implement command and query models
- Learn read/write separation
- Build projection models

---

### 6.1 CQRS Pattern Implementation

```python
from typing import Dict, List, Optional
from abc import ABC, abstractmethod

# Commands (Write side)
class Command(ABC):
    """Base command"""
    pass

class CreateUserCommand(Command):
    def __init__(self, user_id: str, name: str, email: str):
        self.user_id = user_id
        self.name = name
        self.email = email

class UpdateUserEmailCommand(Command):
    def __init__(self, user_id: str, new_email: str):
        self.user_id = user_id
        self.new_email = new_email

# Queries (Read side)
class Query(ABC):
    """Base query"""
    pass

class GetUserByIdQuery(Query):
    def __init__(self, user_id: str):
        self.user_id = user_id

class GetUsersByDomainQuery(Query):
    def __init__(self, domain: str):
        self.domain = domain

# Command Handler (Write model)
class CommandHandler:
    """Handles commands and updates write model"""
    
    def __init__(self, event_store: EventStore):
        self.event_store = event_store
    
    async def handle(self, command: Command):
        """Handle command"""
        if isinstance(command, CreateUserCommand):
            await self.handle_create_user(command)
        elif isinstance(command, UpdateUserEmailCommand):
            await self.handle_update_email(command)
    
    async def handle_create_user(self, command: CreateUserCommand):
        """Handle create user command"""
        # Create event
        event = Event(
            event_id=f"evt-{len(self.event_store.events) + 1}",
            event_type=EventType.USER_REGISTERED,
            aggregate_id=command.user_id,
            data={
                "user_id": command.user_id,
                "name": command.name,
                "email": command.email
            },
            timestamp=datetime.now()
        )
        
        # Save to event store
        self.event_store.save_events(command.user_id, [event])
        print(f"✅ User {command.user_id} created")
    
    async def handle_update_email(self, command: UpdateUserEmailCommand):
        """Handle update email command"""
        event = Event(
            event_id=f"evt-{len(self.event_store.events) + 1}",
            event_type=EventType.USER_REGISTERED,  # Reusing for demo
            aggregate_id=command.user_id,
            data={
                "user_id": command.user_id,
                "email": command.new_email
            },
            timestamp=datetime.now()
        )
        
        self.event_store.save_events(command.user_id, [event])
        print(f"✅ Email updated for user {command.user_id}")

# Query Handler (Read model)
class ReadModel:
    """Optimized read model (projection)"""
    
    def __init__(self):
        self.users: Dict[str, Dict] = {}
        self.users_by_domain: Dict[str, List[str]] = defaultdict(list)
    
    def project_user_created(self, event: Event):
        """Project USER_CREATED event"""
        user_data = event.data
        user_id = user_data["user_id"]
        email = user_data["email"]
        domain = email.split("@")[1]
        
        # Update read model
        self.users[user_id] = {
            "user_id": user_id,
            "name": user_data["name"],
            "email": email,
            "domain": domain
        }
        
        # Update domain index
        self.users_by_domain[domain].append(user_id)
        print(f"📊 Projected user {user_id} to read model")

class QueryHandler:
    """Handles queries against read model"""
    
    def __init__(self, read_model: ReadModel):
        self.read_model = read_model
    
    async def handle(self, query: Query) -> Any:
        """Handle query"""
        if isinstance(query, GetUserByIdQuery):
            return await self.handle_get_user_by_id(query)
        elif isinstance(query, GetUsersByDomainQuery):
            return await self.handle_get_users_by_domain(query)
    
    async def handle_get_user_by_id(self, query: GetUserByIdQuery):
        """Get user by ID from read model"""
        user = self.read_model.users.get(query.user_id)
        print(f"🔍 Query: Get user {query.user_id}")
        return user
    
    async def handle_get_users_by_domain(self, query: GetUsersByDomainQuery):
        """Get users by email domain"""
        user_ids = self.read_model.users_by_domain.get(query.domain, [])
        users = [self.read_model.users[uid] for uid in user_ids]
        print(f"🔍 Query: Get users by domain {query.domain}")
        return users

# CQRS System
class CQRSSystem:
    """Complete CQRS system"""
    
    def __init__(self):
        self.event_store = EventStore()
        self.read_model = ReadModel()
        self.command_handler = CommandHandler(self.event_store)
        self.query_handler = QueryHandler(self.read_model)
        
        # Subscribe read model to events
        self.sync_read_model()
    
    def sync_read_model(self):
        """Sync read model with event store"""
        # In real system, this would be async/continuous
        for aggregate_id, events in self.event_store.events.items():
            for event in events:
                if event.event_type == EventType.USER_REGISTERED:
                    self.read_model.project_user_created(event)
    
    async def execute_command(self, command: Command):
        """Execute command (write)"""
        await self.command_handler.handle(command)
        self.sync_read_model()  # Update read model
    
    async def execute_query(self, query: Query):
        """Execute query (read)"""
        return await self.query_handler.handle(query)

# Demo: CQRS
async def demo_cqrs():
    system = CQRSSystem()
    
    # Commands (Write operations)
    print("📝 Executing commands...\n")
    await system.execute_command(
        CreateUserCommand("user-1", "Alice", "alice@gmail.com")
    )
    await system.execute_command(
        CreateUserCommand("user-2", "Bob", "bob@gmail.com")
    )
    await system.execute_command(
        CreateUserCommand("user-3", "Charlie", "charlie@yahoo.com")
    )
    
    # Queries (Read operations)
    print("\n🔍 Executing queries...\n")
    
    user = await system.execute_query(GetUserByIdQuery("user-1"))
    print(f"   Result: {user}\n")
    
    gmail_users = await system.execute_query(GetUsersByDomainQuery("gmail.com"))
    print(f"   Result: {len(gmail_users)} users with @gmail.com")
    for user in gmail_users:
        print(f"      - {user['name']} ({user['email']})")

# asyncio.run(demo_cqrs())
```

---

## 🎯 Day 7: Data Pipelines & Batch Processing

### Learning Objectives
- Design ETL pipelines
- Implement batch processing
- Learn data transformation patterns
- Master data quality checks

---

### 7.1 ETL Pipeline

```python
from typing import Iterator, Callable
import csv
import json

class ETLPipeline:
    """Extract-Transform-Load pipeline"""
    
    def __init__(self):
        self.extractors = []
        self.transformers = []
        self.loaders = []
        self.stats = {
            "extracted": 0,
            "transformed": 0,
            "loaded": 0,
            "errors": 0
        }
    
    def extract(self, extractor: Callable) -> 'ETLPipeline':
        """Add extractor"""
        self.extractors.append(extractor)
        return self
    
    def transform(self, transformer: Callable) -> 'ETLPipeline':
        """Add transformer"""
        self.transformers.append(transformer)
        return self
    
    def load(self, loader: Callable) -> 'ETLPipeline':
        """Add loader"""
        self.loaders.append(loader)
        return self
    
    async def run(self):
        """Execute pipeline"""
        print("🚀 Starting ETL pipeline\n")
        
        # Extract
        data = []
        for extractor in self.extractors:
            extracted = await extractor()
            data.extend(extracted)
            self.stats["extracted"] += len(extracted)
        
        print(f"📥 Extracted: {self.stats['extracted']} records\n")
        
        # Transform
        transformed_data = data
        for transformer in self.transformers:
            transformed_data = await transformer(transformed_data)
        
        self.stats["transformed"] = len(transformed_data)
        print(f"🔄 Transformed: {self.stats['transformed']} records\n")
        
        # Load
        for loader in self.loaders:
            loaded = await loader(transformed_data)
            self.stats["loaded"] += loaded
        
        print(f"💾 Loaded: {self.stats['loaded']} records\n")
        
        return self.stats

# Extractors
async def extract_from_csv(file_path: str) -> List[Dict]:
    """Extract data from CSV"""
    data = []
    # Simulated CSV reading
    data = [
        {"id": "1", "name": "Alice", "age": "30", "email": "alice@example.com"},
        {"id": "2", "name": "Bob", "age": "25", "email": "bob@example.com"},
        {"id": "3", "name": "Charlie", "age": "invalid", "email": "charlie"},
    ]
    print(f"   ✅ Extracted {len(data)} records from CSV")
    return data

# Transformers
async def clean_data(data: List[Dict]) -> List[Dict]:
    """Clean and validate data"""
    cleaned = []
    for record in data:
        try:
            # Validate age
            age = int(record["age"])
            if age < 0 or age > 120:
                continue
            
            # Validate email
            if "@" not in record["email"]:
                continue
            
            cleaned.append({
                "id": int(record["id"]),
                "name": record["name"].strip(),
                "age": age,
                "email": record["email"].lower()
            })
        except (ValueError, KeyError):
            continue
    
    print(f"   ✅ Cleaned: {len(data)} → {len(cleaned)} records")
    return cleaned

async def enrich_data(data: List[Dict]) -> List[Dict]:
    """Enrich data with additional fields"""
    for record in data:
        # Add derived fields
        record["email_domain"] = record["email"].split("@")[1]
        record["age_group"] = "young" if record["age"] < 30 else "adult"
    
    print(f"   ✅ Enriched {len(data)} records")
    return data

# Loaders
async def load_to_database(data: List[Dict]) -> int:
    """Load data to database"""
    # Simulate database insert
    for record in data:
        pass  # INSERT INTO users VALUES (...)
    
    print(f"   ✅ Loaded {len(data)} records to database")
    return len(data)

# Demo: ETL Pipeline
async def demo_etl():
    pipeline = ETLPipeline()
    
    stats = await (
        pipeline
        .extract(lambda: extract_from_csv("users.csv"))
        .transform(clean_data)
        .transform(enrich_data)
        .load(load_to_database)
        .run()
    )
    
    print("📊 Pipeline Statistics:")
    for key, value in stats.items():
        print(f"   {key}: {value}")

# asyncio.run(demo_etl())
```

---

## 📊 Week 5 Summary

### Key Concepts Mastered

✅ **Message Queues**
- Queue vs Topic vs Stream patterns
- RabbitMQ exchanges and routing
- Kafka architecture and offset management
- Producer-consumer patterns

✅ **Event-Driven Architecture**
- Event bus implementation
- Event sourcing pattern
- Saga pattern for distributed transactions
- Event handlers and listeners

✅ **Stream Processing**
- Real-time data pipelines
- Windowing operations
- Stream transformations
- Sliding window rate limiting

✅ **CQRS**
- Command and query separation
- Read/write model optimization
- Event projection
- Query optimization

✅ **Data Pipelines**
- ETL pipeline design
- Data extraction, transformation, loading
- Batch processing
- Data quality and validation

### Projects Completed
- ✅ Event-driven order system
- ✅ Kafka stream processor
- ✅ CQRS implementation
- ✅ ETL data pipeline
- ✅ Saga orchestrator

### Next Week Preview

**Week 6: Distributed Systems**
- Distributed consensus (Raft, Paxos)
- CAP theorem deep dive
- Distributed transactions
- Consistency patterns
- Distributed locks

---

**Continue to Week 6**: [Distributed Systems →](../Week-06-Distributed-Systems/week-06-complete-content.md)