# Chapter 3: Apache Spark Basics

## Learning Objectives

After completing this chapter, you will be able to:
- Create and manipulate RDDs and DataFrames
- Write Spark SQL queries and optimize them
- Understand Catalyst optimizer and Tungsten execution engine
- Configure Spark applications for performance
- Read and write data from S3, HDFS, and local files

## 3.1 Spark Architecture

Spark has a master/worker architecture. The **driver** runs the user's main program and schedules tasks on **executors** running on worker nodes.

![Spark Architecture](../assets/images/diagrams/big-data/ch03-spark-architecture.png)

[//]: # "Spark Execution Flow"
![Spark Execution Flow](../assets/images/diagrams/big-data/ch03-spark-execution.png)

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("architecture-demo") \
    .config("spark.executor.instances", 4) \
    .config("spark.executor.cores", 4) \
    .config("spark.executor.memory", "8g") \
    .config("spark.driver.memory", "4g") \
    .getOrCreate()

# Each executor = 4 cores × 8 GB memory
# Total cluster resources: 4 executors × 4 cores = 16 cores
#                           4 executors × 8 GB = 32 GB memory
print(f"Total cores: {spark.sparkContext.defaultParallelism}")
spark.stop()
```

## 3.2 RDDs (Resilient Distributed Datasets)

RDDs are the fundamental data structure in Spark: an immutable, partitioned collection of records that can be processed in parallel.

### 3.2.1 Creating RDDs

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("rdd-demo").getOrCreate()
sc = spark.sparkContext

# From a Python list
rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(f"Partitions: {rdd.getNumPartitions()}")
print(f"Data: {rdd.collect()}")

# From a file
log_rdd = sc.textFile("s3://bucket/logs/*.log")
print(f"Lines: {log_rdd.count()}")

# With custom partition count
rdd_8 = sc.parallelize(range(1000), numSlices=8)
print(f"Partitions: {rdd_8.getNumPartitions()}")
```

### 3.2.2 RDD Transformations (Lazy)

```python
# Transformations are lazy — nothing happens until an action is called
rdd = sc.parallelize(range(1, 1001))

# map: apply function to each element
squares = rdd.map(lambda x: x * x)

# filter: keep elements matching predicate
evens = rdd.filter(lambda x: x % 2 == 0)

# flatMap: each input produces 0 or more outputs
words = sc.parallelize(["hello world", "spark is fast"])
word_list = words.flatMap(lambda line: line.split())
print(word_list.collect())

# reduceByKey: aggregate by key
pairs = sc.parallelize([("a", 1), ("b", 2), ("a", 3), ("b", 4)])
sum_by_key = pairs.reduceByKey(lambda a, b: a + b)
print(sum_by_key.collect())  # [("a", 4), ("b", 6)]

# sortBy: order by key/value
sorted_pairs = sum_by_key.sortBy(lambda x: x[1], ascending=False)
print(sorted_pairs.collect())
```

### 3.2.3 RDD Actions (Eager)

```python
# Actions trigger computation and return results
rdd = sc.parallelize(range(1, 1001))

# collect: return all elements to driver (dangerous for large datasets)
small_sample = sc.parallelize(range(10))
print(small_sample.collect())

# take: return first N elements
print(rdd.take(5))

# count: total elements
print(f"Count: {rdd.count()}")

# reduce: aggregate elements
total = rdd.reduce(lambda a, b: a + b)
print(f"Sum: {total}")

# foreach: execute side-effecting function on each element
rdd.foreach(lambda x: x * x)  # No return value

# saveAsTextFile: write to disk
rdd.filter(lambda x: x % 2 == 0).saveAsTextFile("output/evens")
```

## 3.3 DataFrames

DataFrames are RDDs with a schema. They provide a higher-level API with better optimization through the Catalyst optimizer.

### 3.3.1 Creating DataFrames

```python
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, IntegerType

spark = SparkSession.builder.appName("df-demo").getOrCreate()

# From a list of dicts
data = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
df = spark.createDataFrame(data)
df.show()

# With explicit schema
schema = StructType([
    StructField("id", IntegerType(), nullable=False),
    StructField("name", StringType(), nullable=True),
])
df2 = spark.createDataFrame([(1, "Alice"), (2, "Bob")], schema)
df2.printSchema()

# From CSV
df_csv = spark.read \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .csv("data/*.csv")

# From Parquet (preferred)
df_parquet = spark.read.parquet("data/*.parquet")
```

### 3.3.2 DataFrame Operations

```python
df = spark.createDataFrame([
    ("Alice", 30, "Engineering"),
    ("Bob", 25, "Sales"),
    ("Charlie", 35, "Engineering"),
    ("Diana", 28, "Marketing"),
], ["name", "age", "dept"])

# Select columns
df.select("name", "age").show()

# Filter rows
df.filter(df.age > 28).show()

# Add column
df.withColumn("age_next_year", df.age + 1).show()

# Group by aggregation
df.groupBy("dept").agg(
    {"age": "avg", "name": "count"}
).show()

# Order by
df.orderBy(df.age.desc()).show()

# Multiple aggregations
from pyspark.sql import functions as F
df.groupBy("dept").agg(
    F.avg("age").alias("avg_age"),
    F.count("*").alias("employee_count"),
    F.max("age").alias("oldest")
).show()
```

### 3.3.3 User-Defined Functions (UDFs)

```python
from pyspark.sql.functions import udf
from pyspark.sql.types import StringType

def age_category(age: int) -> str:
    if age < 25:
        return "junior"
    elif age < 35:
        return "mid"
    else:
        return "senior"

age_category_udf = udf(age_category, StringType())

df.withColumn("level", age_category_udf(df.age)).show()

# Pandas UDF (vectorized, much faster)
import pandas as pd
from pyspark.sql.functions import pandas_udf

@pandas_udf(StringType())
def age_category_pandas(ages: pd.Series) -> pd.Series:
    return ages.apply(lambda a: "junior" if a < 25 else "mid" if a < 35 else "senior")

df.withColumn("level", age_category_pandas(df.age)).show()
```

Pandas UDFs are 10-100x faster than row-based UDFs because they operate on batches (Arrow serialization) instead of individual rows.

## 3.4 Spark SQL

```python
df.createOrReplaceTempView("employees")

result = spark.sql("""
    SELECT dept,
           avg(age) as avg_age,
           count(*) as employee_count,
           collect_list(name) as names
    FROM employees
    WHERE age > 25
    GROUP BY dept
    HAVING count(*) > 1
    ORDER BY avg_age DESC
""")
result.show()
```

Spark SQL supports all standard SQL: JOINs, subqueries, window functions, CTEs, and set operations.

## 3.5 Catalyst Optimizer

Spark SQL uses the Catalyst optimizer to transform queries into efficient execution plans.

```python
# View the optimized physical plan
df = spark.read.parquet("data/*.parquet")
df_filtered = df.filter(df.age > 25).select("name", "dept")
df_filtered.explain("cost")     # Cost-based optimization
df_filtered.explain("extended") # Full logical and physical plan

# Catalyst applies:
# 1. Predicate pushdown (filter before join)
# 2. Projection pruning (select only needed columns)
# 3. Constant folding (evaluate constant expressions at compile time)
# 4. Join reordering (smaller tables first)
```

Example of Catalyst optimization:

```sql
-- Your query:
SELECT name FROM employees WHERE age > 25 AND dept = 'Engineering'

-- After predicate pushdown (filter applied at Parquet scan level):
-- ParquetScan [name, age, dept] - Only reads 3 columns (projection pruning)
--   + Filter (age > 25 AND dept = 'Engineering') - Applied during scan
```

## 3.6 Tungsten Execution Engine

Tungsten improves performance through three mechanisms:

**1. Off-heap memory:** Bypasses JVM garbage collection overhead for intermediate data.

**2. Cache-aware computation:** Data structures optimized for CPU cache lines.

**3. Code generation:** Generates optimized Java bytecode at runtime.

```python
# Tungsten settings
spark.conf.set("spark.sql.codegen.wholeStage", "true")  # Default: true
spark.conf.set("spark.memory.offHeap.enabled", "true")
spark.conf.set("spark.memory.offHeap.size", "4g")
```

## 3.7 Joins in Spark

```python
df1 = spark.createDataFrame([(1, "Alice"), (2, "Bob")], ["id", "name"])
df2 = spark.createDataFrame([(1, "Engineering"), (2, "Sales")], ["id", "dept"])

# Broadcast join (for small tables — avoids shuffle)
from pyspark.sql.functions import broadcast
joined = df1.join(broadcast(df2), "id")
joined.explain()
# Result: BroadcastHashJoin — no shuffle, df2 sent to all executors

# Sort-merge join (for large tables — default)
joined_large = large_df1.join(large_df2, "id")
joined_large.explain()
# Result: SortMergeJoin — both sides sorted by key, then merged

# Shuffle hash join (for partitioned data)
spark.conf.set("spark.sql.adaptive.enabled", "true")
# AQE will automatically choose the best join strategy
```

**Join strategy selection:**

| Strategy | When | Shuffle |
|----------|------|---------|
| BroadcastHashJoin | One side < 10 MB (default threshold) | None |
| SortMergeJoin | Both sides large, equi-join | Both sides |
| ShuffledHashJoin | One side much smaller than the other | Both sides |

## 3.8 Spark Configuration & Tuning

### 3.8.1 Key Configuration Parameters

```python
spark = SparkSession.builder \
    .appName("tuned-app") \
    .config("spark.sql.adaptive.enabled", "true") \
    .config("spark.sql.adaptive.coalescePartitions.enabled", "true") \
    .config("spark.sql.adaptive.skewJoin.enabled", "true") \
    .config("spark.sql.shuffle.partitions", 200) \
    .config("spark.executor.memory", "8g") \
    .config("spark.executor.cores", 4) \
    .config("spark.dynamicAllocation.enabled", "true") \
    .config("spark.dynamicAllocation.maxExecutors", 50) \
    .config("spark.serializer", "org.apache.spark.serializer.KryoSerializer") \
    .getOrCreate()
```

### 3.8.2 Partition Size Rule

Aim for 100-200 MB per partition after shuffles:

```python
# Adjust shuffle partitions based on data size
total_data_gb = 200
target_mb_per_partition = 128
ideal_partitions = (total_data_gb * 1024) // target_mb_per_partition
print(f"Ideal shuffle partitions: {ideal_partitions}")
spark.conf.set("spark.sql.shuffle.partitions", ideal_partitions)

# Repartition and coalesce
df = spark.read.parquet("data/*.parquet")

# Coalesce (no shuffle) — reduce partitions
df_coalesced = df.coalesce(10)

# Repartition (with shuffle) — increase or redistribute
df_repartitioned = df.repartition(100, "dept")
```

### 3.8.3 Caching & Persistence

```python
from pyspark.storagelevel import StorageLevel

# Cache in memory (default)
df_cached = df.cache()
df_cached.count()  # Materializes the cache

# Explicit persistence levels
df.persist(StorageLevel.MEMORY_ONLY)          # Default
df.persist(StorageLevel.MEMORY_AND_DISK)      # Spill to disk if too large
df.persist(StorageLevel.DISK_ONLY)            # Always disk (for large datasets)

# Unpersist when done
df.unpersist()

# Check what is cached
print(spark.catalog.listTables())
```

## 3.9 Reading from S3

```python
spark = SparkSession.builder \
    .appName("s3-demo") \
    .config("spark.hadoop.fs.s3a.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem") \
    .config("spark.hadoop.fs.s3a.access.key", os.getenv("AWS_ACCESS_KEY_ID")) \
    .config("spark.hadoop.fs.s3a.secret.key", os.getenv("AWS_SECRET_ACCESS_KEY")) \
    .config("spark.hadoop.fs.s3a.endus", "s3.amazonaws.com") \
    .getOrCreate()

df = spark.read.parquet("s3a://my-bucket/analytics/*.parquet")
df.write.mode("overwrite").parquet("s3a://my-bucket/output/")
```

## 3.10 Spark on Kubernetes

```yaml
# spark-submit to Kubernetes
# spark-submit \
#   --master k8s://https://<k8s-api>:6443 \
#   --deploy-mode cluster \
#   --conf spark.kubernetes.container.image=bitnami/spark:3.5 \
#   --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark \
#   --conf spark.executor.instances=5 \
#   local:///app/my-job.py
```

## Summary

- RDDs are the low-level building block; DataFrames provide a higher-level, optimized API.
- Catalyst optimizer converts SQL/DataFrame operations into efficient physical plans.
- Tungsten engine uses off-heap memory, cache-aware computation, and code generation.
- Choose join strategies carefully: broadcast for small tables, sort-merge for large equi-joins.
- Aim for 100-200 MB per partition and cache datasets reused across multiple queries.
- Spark runs on YARN, Kubernetes, or standalone — config is key for performance.

## Exercises

1. Create a DataFrame from 1 billion synthetic rows and measure the time for `groupBy().count()`. Optimize with partitioning and caching.
2. Compare the performance of a broadcast join vs sort-merge join for a 1 GB table joining a 10 MB table.
3. Use `df.explain("extended")` to trace Catalyst optimizations for a query with filter, join, and aggregation.
4. Write a PySpark job that reads 100 GB of Parquet from S3, filters to the last 7 days, and writes the result partitioned by date.
5. Configure a Spark cluster on Kubernetes and run a word count job. Tune executor memory, cores, and parallelism for optimal throughput.
