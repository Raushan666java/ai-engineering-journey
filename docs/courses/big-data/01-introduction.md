# Chapter 1: Introduction to Big Data

> **Previous:** None (First Chapter) | **Next:** [Chapter 2: Hadoop — HDFS, MapReduce & YARN](./02-hadoop.md)

## Learning Objectives

After completing this chapter, you will be able to:
- Define the 3 V's of big data and their implications
- Explain why traditional databases fail at petabyte scale
- Describe the Hadoop ecosystem and its components
- Choose between batch and stream processing paradigms
- Set up a local Spark environment for development

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| The 3 V's of Big Data | Volume, velocity, and variety define big data | Choose storage and processing based on which V dominates |
| The Scale Problem | Traditional RDBMS fails at petabyte scale | Horizontal scaling beats vertical scaling for big data |
| Distributed Computing | Data locality and fault tolerance are critical | Move computation to data, not data to computation |
| Hadoop Ecosystem | HDFS, MapReduce, YARN formed the foundation | Concepts survive in modern cloud data platforms |
| Batch vs Stream | Trade-off between latency and throughput | Use batch for hourly reports, stream for real-time |
| Spark vs MapReduce | In-memory processing is 10-100x faster than disk-based | Spark is the default choice for new big data projects |
| Data Formats | Columnar formats (Parquet) optimize analytics | Always choose Parquet over CSV/JSON for analytical workloads |

## Chapter Roadmap

```mermaid
flowchart LR
    A[3 V's of Big Data] --> B[Scale Problem]
    B --> C[Distributed Computing]
    C --> D[Hadoop Ecosystem]
    D --> E[Batch vs Stream]
    E --> F[Spark vs MapReduce]
    F --> G[Dev Environment Setup]
    G --> H[Data Formats]
```

## 1.1 The 3 V's of Big Data

Big data is defined by three dimensions that break traditional tools:

**Volume** — The quantity of data. A single dataset can be terabytes or petabytes. At this scale, moving data to the compute engine is impossible; compute must move to the data.

```python
# Simulating volume: 1 billion rows
# Traditional DB: hours for a simple aggregation
# Spark: minutes with 100 executors
rows = 1_000_000_000
estimated_time_db = rows / 100_000  # ~10,000 seconds = 2.7 hours
estimated_time_spark = rows / 10_000_000  # ~100 seconds
print(f"DB: {estimated_time_db:.0f}s, Spark: {estimated_time_spark:.0f}s")
```

**Velocity** — The speed at which data arrives. IoT sensors emit millions of events per second. Batch processing is too slow; stream processing is required.

```python
# 10,000 IoT devices sending 1 reading/second
events_per_second = 10_000 * 1
events_per_day = events_per_second * 86400
print(f"{events_per_second} events/sec, {events_per_day:,} events/day")
```

**Variety** — Data arrives in multiple formats: structured (CSV, Parquet), semi-structured (JSON, XML), and unstructured (images, text, video).

![The 3 V's of Big Data](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/big-data/ch01-three-vs.png)

> **One-Sentence Takeaway:** Big data breaks traditional tools across three dimensions — size, speed, and variety — demanding distributed, schema-flexible approaches.

## 1.2 The Scale Problem

Traditional RDBMS fails at big data scale for fundamental architectural reasons:

```python
# Single-node memory limit
node_ram_gb = 256
dataset_size_tb = 10
dataset_size_gb = dataset_size_tb * 1024

if dataset_size_gb > node_ram_gb:
    print(f"Dataset ({dataset_size_gb}GB) exceeds single-node RAM ({node_ram_gb}GB)")
    print("Solution: distributed processing across a cluster")
```

The core insight: **horizontal scaling** (adding more commodity machines) is cheaper and more practical than **vertical scaling** (buying a bigger machine). Google published the MapReduce paper (2004) and GFS paper (2003), which inspired Hadoop.

> **One-Sentence Takeaway:** Horizontal scaling with commodity hardware is the only economically viable path to petabyte-scale data processing.

## 1.3 Distributed Computing Challenges

### 1.3.1 Data Locality

Moving data over the network is the bottleneck. The principle of **data locality** means sending computation to where the data resides, not the reverse.

```python
# Network transfer cost for 1 TB over 10 GbE
data_tb = 1
data_gb = data_tb * 1024
bandwidth_gbps = 10 / 8  # 1.25 GB/s
transfer_time_seconds = data_gb / bandwidth_gbps
print(f"Transfer {data_tb}TB over {bandwidth_gbps*8}GbE: {transfer_time_seconds:.0f}s")
```

### 1.3.2 Fault Tolerance

In a cluster of 1000 commodity servers, hardware failures are routine, not exceptional. Every framework must handle node failure transparently.

```python
mtbf_per_node_days = 30  # Mean time between failures
cluster_size = 1000
expected_failures_per_day = cluster_size / mtbf_per_node_days
print(f"Expected failures/day: {expected_failures_per_day:.1f}")
```

### 1.3.3 Consistency vs Availability

Distributed storage systems face the CAP theorem trade-off. HDFS chooses consistency (strong, via namenode). Cassandra chooses availability (eventual consistency).

> **One-Sentence Takeaway:** Distributed systems must navigate the CAP theorem — choosing between consistency, availability, and partition tolerance — and every big data framework makes this trade-off differently.

## 1.4 The Hadoop Ecosystem

At its peak, Hadoop was the center of the big data universe. While cloud-native tools have overtaken it, the concepts survive in every modern data platform.

| Component | Role | Modern Alternative |
|-----------|------|-------------------|
| **HDFS** | Distributed filesystem | S3, GCS, Azure Blob |
| **MapReduce** | Batch processing engine | Spark, Presto, Trino |
| **YARN** | Cluster resource manager | Kubernetes |
| **Hive** | SQL-on-Hadoop (data warehouse) | Snowflake, BigQuery |
| **HBase** | Column-family NoSQL on HDFS | Bigtable, DynamoDB |
| **Kafka** | Distributed streaming | (still Kafka or Pulsar) |
| **Oozie** | Workflow scheduler | Airflow, Dagster |
| **Sqoop** | RDBMS ↔ Hadoop data transfer | (replaced by Spark JDBC) |
| **Flume** | Log ingestion | Filebeat, Fluentd |

> **Pro Tip:** Don't learn Hadoop tools in isolation. Learn the concepts (distributed FS, resource management, SQL-on-data) — cloud-native services like S3, EMR, and Athena implement the same ideas without the operational overhead.

> **One-Sentence Takeaway:** The Hadoop ecosystem introduced every major concept in modern big data processing, even if cloud-native tools have replaced the original implementations.

## 1.5 Batch vs Stream Processing

```python
from datetime import timedelta

# Batch: process all data at once, periodic
batch_interval = timedelta(hours=1)
batch_latency = timedelta(minutes=5)  # Processing time

# Stream: process each event as it arrives
per_event_latency = timedelta(seconds=5)

print(f"Batch: new data every {batch_interval}, latency ~{batch_latency}")
print(f"Stream: latency ~{per_event_latency}")
```

**When to use batch:** Daily/hourly reports, backfill, ETL jobs where latency tolerance is minutes-to-hours.

**When to use stream:** Real-time dashboards, fraud detection, monitoring alerts, recommendation updates.

> **One-Sentence Takeaway:** Choose batch processing when latency tolerance is measured in minutes or hours; choose stream processing when sub-second response is required.

## 1.6 Spark vs MapReduce

Apache Spark replaced MapReduce as the dominant big data engine because:

| Factor | MapReduce | Spark |
|--------|-----------|-------|
| Processing model | Disk-based (write intermediate results to HDFS) | In-memory (cache RDDs/DataFrames) |
| Latency | Minutes (warm start) | Seconds (JVM reuse) |
| API | Java (verbose) | Python/SQL/Scala/R (expressive) |
| Multi-stage jobs | Each stage writes to disk | Pipelined in memory |
| ML support | External (Mahout) | Built-in (MLlib) |

```python
# MapReduce word count: ~50 lines of Java
# Spark word count:
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("wordcount").getOrCreate()
text_file = spark.sparkContext.textFile("s3://bucket/input/*.txt")
counts = (text_file.flatMap(lambda line: line.split())
          .map(lambda word: (word, 1))
          .reduceByKey(lambda a, b: a + b))
counts.saveAsTextFile("s3://bucket/output/")
```

> **Warning:** MapReduce is rarely the right choice for new projects. Spark's in-memory model delivers 10-100x speedups, and its unified API (SQL, streaming, ML) eliminates the need to stitch together multiple Hadoop tools.

> **One-Sentence Takeaway:** Apache Spark replaced MapReduce as the industry standard by moving computation from disk to memory and providing a unified API for batch, streaming, and ML workloads.

## 1.7 Setting Up a Local Development Environment

### 1.7.1 Installing PySpark

```bash
pip install pyspark jupyter
```

### 1.7.2 Running Spark Locally

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("local-dev") \
    .config("spark.master", "local[*]") \
    .config("spark.sql.adaptive.enabled", "true") \
    .getOrCreate()

df = spark.range(1_000_000)
print(f"Count: {df.count()}")
df.show(5)

spark.stop()
```

The `local[*]` mode runs on your machine using all available cores. This is sufficient for development and testing on datasets up to a few GB.

### 1.7.3 Docker Cluster for Development

```yaml
version: "3.8"
services:
  spark-master:
    image: bitnami/spark:3.5
    environment:
      - SPARK_MODE=master
    ports:
      - "8080:8080"
      - "7077:7077"
  spark-worker:
    image: bitnami/spark:3.5
    environment:
      - SPARK_MODE=worker
      - SPARK_MASTER_URL=spark://spark-master:7077
      - SPARK_WORKER_MEMORY=2G
      - SPARK_WORKER_CORES=2
    depends_on:
      - spark-master
```

## 1.8 Data Formats for Big Data

| Format | Compression | Schema | Splittable | Best For |
|--------|-------------|--------|------------|----------|
| CSV | Moderate (gzip) | No | No (gzip) | Interchange |
| JSON | Poor | No | No | APIs, semi-structured |
| **Parquet** | Excellent (snappy/zstd) | Yes | Yes | **Analytics (default)** |
| ORC | Excellent | Yes | Yes | Hive workloads |
| Avro | Good | Yes (in file) | Yes | Serialization, Kafka |

```python
# Reading Parquet in Spark
df = spark.read.parquet("s3://bucket/events/*.parquet")
df.createOrReplaceTempView("events")
result = spark.sql("""
    SELECT event_type, count(*) as cnt
    FROM events
    WHERE date >= '2026-01-01'
    GROUP BY event_type
    ORDER BY cnt DESC
""")
```

Parquet is the recommended default for analytical workloads. It stores columnar data with embedded schema and predicate pushdown — Spark reads only the columns and row groups needed.

> **Remember:** Parquet is not a database — it's a file format. You still need a query engine (Spark, Presto, DuckDB) to read it. But choosing Parquet over CSV is the single easiest performance win in big data.

> **One-Sentence Takeaway:** Parquet is the default file format for big data analytics — always prefer it over CSV/JSON for production workloads.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Horizontal Scaling | Adding more machines to a cluster | Adds capacity linearly, cost-effective | Distributed storage and processing |
| Vertical Scaling | Making a single machine larger | Hits hardware limits, expensive | Single-node databases, legacy apps |
| Batch Processing | Process data in scheduled intervals | High throughput, minutes-hours latency | Daily reports, ETL, backfill jobs |
| Stream Processing | Process events as they arrive | Low latency, seconds-subseconds | Fraud detection, real-time dashboards |
| Data Locality | Move computation to where data resides | Reduces network transfer | MapReduce, Spark tasks on HDFS/S3 |
| Schema-on-Read | Infer schema when reading data | Flexible, no upfront schema design | Data lakes, JSON/Parquet analytics |

## Quick Reference

| Category | Key Tools/Concepts | Notes |
|----------|-------------------|-------|
| **Storage** | HDFS, S3, GCS | HDFS requires cluster; S3/GCS are serverless |
| **Processing** | MapReduce, Spark, Flink | Spark is the default; Flink for true streaming |
| **Resource Management** | YARN, Kubernetes | K8s is the modern standard |
| **File Formats** | Parquet, ORC, Avro, CSV | Parquet for analytics, Avro for streaming |
| **Query Engines** | Hive, Spark SQL, Presto/Trino | Presto for interactive, Spark for ETL+ML |

## Cross-Application Matrix

| Technique | Data Engineering | ML | Cloud | Business Analytics |
|-----------|-----------------|----|-------|--------------------|
| Horizontal Scaling | Distributed ETL pipelines | Distributed model training | Auto-scaling groups | Data warehouse scaling |
| Data Locality | Co-locate compute with HDFS/S3 | Cache training data on workers | S3 + EMR compute proximity | Query engine proximity to data lake |
| Batch Processing | Hourly/daily ingestion jobs | Offline feature computation | Batch analytics with Athena | Scheduled reporting |
| Stream Processing | Real-time data ingestion | Online feature serving | Lambda architecture | Real-time dashboards |
| Columnar Storage | Efficient compression for ETL | Column pruning for feature access | S3/Parquet in data lakes | Fast aggregation queries |
| In-Memory Processing | Spark DataFrame operations | MLlib distributed training | Memory-optimized instances | Interactive BI tools |

## Chapter Quiz

1. Which of the 3 V's is most responsible for breaking traditional RDBMS tools?
   - A) Variety
   - B) Velocity
   - C) Volume
   - D) All three equally

<details>
<summary>Answer</summary>
**C) Volume.** While variety and velocity pose challenges, it's the sheer volume of data at petabyte scale that overwhelms single-node architectures and forces the shift to distributed processing.
</details>

2. What makes Parquet better than CSV for analytical workloads?
   - A) It's human-readable
   - B) Columnar storage with predicate pushdown
   - C) It requires no schema
   - D) It's faster to write

<details>
<summary>Answer</summary>
**B) Columnar storage with predicate pushdown.** Parquet stores data by column, allowing query engines to read only the needed columns and skip irrelevant row groups based on min/max statistics.
</details>

3. Why did Spark replace MapReduce as the dominant big data engine?
   - A) Spark uses a simpler programming model
   - B) Spark processes data in memory instead of writing intermediate results to disk
   - C) Spark is written in Python instead of Java
   - D) Spark runs on Kubernetes

<details>
<summary>Answer</summary>
**B) Spark processes data in memory instead of writing intermediate results to disk.** This eliminates the disk I/O bottleneck that made MapReduce 10-100x slower for multi-stage jobs.
</details>

## Summary

- Big data is defined by volume, velocity, and variety — traditional tools break at petabyte scale.
- Distributed computing requires new approaches to data locality, fault tolerance, and consistency.
- The Hadoop ecosystem introduced HDFS, MapReduce, and YARN as foundational components.
- Apache Spark replaced MapReduce as the primary big data engine due to in-memory processing and expressive APIs.
- Parquet is the default file format for analytics (columnar, splittable, compressed).
- Local Spark development is easy with PySpark and Docker, scaling from `local[*]` to a full cluster.

## Exercises

1. Install PySpark and run a word count on a 100 MB text file. Time it with 1 core vs all cores.
2. Explain why gzip-compressed CSV files cannot be split across Spark partitions.
3. Compare the latency of batch vs stream processing for a fraud detection system that must flag transactions within 100ms.
4. Set up a 3-node Spark cluster with Docker Compose and verify it works with `spark.range(100000000).count()`.
5. Convert a 1 GB CSV to Parquet and compare query performance (`SELECT count(*), avg(x)`) between the two formats.
