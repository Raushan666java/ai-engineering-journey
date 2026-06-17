# Chapter 5: Big Data Ecosystem Tools

## Learning Objectives

After completing this chapter, you will be able to:
- Describe Hive, HBase, Kafka, and their roles in the ecosystem
- Choose between SQL-on-Hadoop tools (Hive vs Presto vs Spark SQL)
- Explain when to use column-family stores (HBase) vs columnar formats (Parquet)
- Set up and use Kafka for streaming data ingestion
- Compare legacy Hadoop tools with modern cloud-native alternatives

![Hadoop Ecosystem](../assets/images/diagrams/big-data/ch05-ecosystem.png)

## 5.1 Hive — SQL-on-Hadoop

Apache Hive provides a SQL interface to data stored in HDFS. It translates HiveQL queries into MapReduce (or Tez/Spark) jobs.

### 5.1.1 Hive Architecture

```sql
-- Create a Hive table backed by HDFS
CREATE EXTERNAL TABLE logs (
    log_ts TIMESTAMP,
    level STRING,
    message STRING
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ","
LOCATION "/data/logs/";

-- Query (translated to MapReduce/Tez)
SELECT level, count(*) as cnt
FROM logs
WHERE log_ts >= "2026-01-01"
GROUP BY level
ORDER BY cnt DESC;
```

### 5.1.2 Hive vs Spark SQL vs Presto

| Feature | Hive | Spark SQL | Presto/Trino |
|---------|------|-----------|--------------|
| Engine | MapReduce/Tez | Spark | Custom MPP |
| Latency | Minutes | Seconds | Seconds |
| ANSI SQL | Partial | Good | Excellent |
| UDFs | Java/Python | Python/SQL/Java | Java |
| ACID | Yes (Transactions) | No | No |
| Best for | Batch ETL, legacy pipelines | Unified batch+ML | Ad-hoc interactive queries |

## 5.2 HBase — Column-Family NoSQL

Apache HBase is a distributed, column-oriented NoSQL database modeled after Google Bigtable. It runs on top of HDFS.

### 5.2.1 HBase Data Model

```
Table: events
Row Key         | Column Family: meta          | Column Family: payload
----------------|------------------------------|------------------------------
user_001_ts_abc | meta:user_id = "001"         | payload:event_type = "click"
                | meta:timestamp = 1700000000  | payload:page_url = "/home"

user_001_ts_abd | meta:user_id = "001"         | payload:event_type = "purchase"
                | meta:timestamp = 1700000005  | payload:amount = 29.99
```

### 5.2.2 HBase Operations

```bash
# HBase shell
hbase shell

# Create table
create "events", "meta", "payload"

# Insert
put "events", "row1", "meta:user_id", "001"
put "events", "row1", "payload:event_type", "click"

# Scan with filter
scan "events", {LIMIT => 10}

# Get single row
get "events", "row1"
```

### 5.2.3 HBase Row Key Design

Row key design is critical for performance. Monotonically increasing keys cause hot spotting on a single region server.

```python
import hashlib

# Bad: timestamp prefix causes hot spotting
bad_key = f"2026-06-12T10:30:00_user_001"

# Good: salted key distributes writes
salt = hashlib.md5(b"user_001").hexdigest()[:2]
good_key = f"{salt}_2026-06-12T10:30:00_user_001"
print(f"Bad: {bad_key}")
print(f"Good: {good_key}")
```

## 5.3 Apache Kafka

Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications.

### 5.3.1 Kafka Core Concepts

| Concept | Description |
|---------|-------------|
| **Topic** | A category/feed name to which records are published |
| **Partition** | A topic is split into ordered, immutable sequences |
| **Broker** | A Kafka server that stores data and serves clients |
| **Producer** | Publishes records to a topic |
| **Consumer** | Subscribes to topics and processes records |
| **Consumer Group** | Multiple consumers that divide partitions |

### 5.3.2 Kafka CLI

```bash
# Start Kafka (with ZooKeeper)
bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties

# Create a topic
bin/kafka-topics.sh --create \
  --topic events \
  --partitions 10 \
  --replication-factor 3 \
  --bootstrap-server localhost:9092

# Produce messages
bin/kafka-console-producer.sh \
  --topic events \
  --bootstrap-server localhost:9092

# Consume messages
bin/kafka-console-consumer.sh \
  --topic events \
  --from-beginning \
  --bootstrap-server localhost:9092
```

### 5.3.3 Kafka with Python

```python
from kafka import KafkaProducer, KafkaConsumer
import json

# Producer
producer = KafkaProducer(
    bootstrap_servers=["localhost:9092"],
    value_serializer=lambda v: json.dumps(v).encode()
)

for i in range(100):
    producer.send("events", {"id": i, "value": i * 2})
producer.flush()

# Consumer (with auto-commit)
consumer = KafkaConsumer(
    "events",
    bootstrap_servers=["localhost:9092"],
    auto_offset_reset="earliest",
    group_id="my-group",
    value_deserializer=lambda v: json.loads(v.decode())
)

for message in consumer:
    print(f"Partition: {message.partition}, Offset: {message.offset}, Value: {message.value}")
    if message.offset >= 10:
        break

consumer.close()
```

### 5.3.4 Kafka + Spark Streaming

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col
from pyspark.sql.types import StructType, StringType, IntegerType

spark = SparkSession.builder \
    .appName("kafka-streaming") \
    .config("spark.sql.streaming.checkpointLocation", "/tmp/checkpoint") \
    .getOrCreate()

schema = StructType() \
    .add("id", IntegerType()) \
    .add("value", IntegerType())

df = spark \
    .readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "localhost:9092") \
    .option("subscribe", "events") \
    .load()

parsed = df.select(from_json(col("value").cast("string"), schema).alias("data")) \
    .select("data.*")

query = parsed.writeStream \
    .outputMode("append") \
    .format("console") \
    .trigger(processingTime="5 seconds") \
    .start()

query.awaitTermination()
```

## 5.4 Data Serialization Formats

### 5.4.1 Parquet (Analytics)

Columnar storage with predicate pushdown and schema enforcement.

```python
# Spark reads only the columns and row groups needed
df = spark.read.parquet("data/*.parquet")
df.filter(df.year == 2026).select("month", "revenue").show()
# Parquet's min/max stats skip irrelevant row groups
```

### 5.4.2 Avro (Serialization)

Row-oriented format with embedded schema, ideal for Kafka and streaming.

```python
import fastavro

schema = {
    "type": "record",
    "name": "Event",
    "fields": [
        {"name": "id", "type": "int"},
        {"name": "timestamp", "type": "long"},
        {"name": "payload", "type": "string"}
    ]
}

records = [
    {"id": 1, "timestamp": 1700000000, "payload": "login"},
    {"id": 2, "timestamp": 1700000001, "payload": "click"},
]

with open("events.avro", "wb") as f:
    fastavro.writer(f, schema, records)
```

## 5.5 Cloud-Native Alternatives

| Hadoop Tool | Cloud Alternative | Why |
|-------------|------------------|-----|
| HDFS | S3 / GCS / Azure Blob | Pay-per-GB, infinite scale, 11 9's durability |
| MapReduce | EMR / Dataproc / HDInsight (Spark) | 10-100x faster, SQL API |
| Hive | Athena / BigQuery / Redshift | Serverless, zero ops |
| HBase | DynamoDB / Bigtable / Cosmos DB | Managed, auto-scaling |
| Kafka | MSK / Confluent Cloud / PubSub | Managed brokers, no ZooKeeper |
| Oozie | Airflow / Dagster / Prefect | Modern DAGs, Python-native |

## 5.6 When to Use Each Tool

```python
decision = {
    "Need interactive SQL on data lake": "Presto / Trino",
    "Need batch ETL with ML": "Spark",
    "Need real-time stream processing": "Spark Streaming / Flink",
    "Need low-latency key-value lookup": "HBase / DynamoDB / Bigtable",
    "Need reliable message queue": "Kafka",
    "Need data warehouse with ACID": "Hive (ACID) / Snowflake / Redshift",
}
```

## Summary

- Hive provides SQL-on-HDFS but is being replaced by Spark SQL and Presto for most use cases.
- HBase offers low-latency random read/write access on HDFS with careful row key design.
- Kafka is the de-facto standard for streaming data ingestion and event-driven architectures.
- Parquet is the default analytical storage format; Avro is preferred for streaming serialization.
- The trend is cloud-native: S3 + Spark + Kafka MSK replaces most of the Hadoop ecosystem.

## Exercises

1. Set up a Kafka cluster with 3 brokers and create a topic with 6 partitions. Produce 1M messages and consume them with a consumer group of 3 instances.
2. Write a Spark Structured Streaming job that reads from Kafka, aggregates event counts per minute, and writes to Parquet.
3. Compare the read performance of Parquet vs Avro vs CSV for a 10 GB dataset with a selective column query.
4. Design a HBase row key strategy for a time-series table receiving 100K writes/second from 1000 sensors.
5. Translate a legacy Hive ETL pipeline (3 HiveQL queries, 2 intermediate tables) into a Spark SQL job.
