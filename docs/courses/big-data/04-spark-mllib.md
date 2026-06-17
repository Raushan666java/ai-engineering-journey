# Chapter 4: Spark MLlib

## Learning Objectives

After completing this chapter, you will be able to:
- Build ML pipelines with Spark MLlib Transformers and Estimators
- Perform feature engineering at scale (vectorization, normalization, hashing)
- Train classification and regression models on datasets larger than memory
- Evaluate models using cross-validation on distributed data
- Export trained models for production inference

## 4.1 MLlib Overview

MLlib is Spark's scalable machine learning library. It provides:
- **ML Pipelines:** DataFrame-based API for constructing workflows
- **Feature transformers:** VectorAssembler, StringIndexer, OneHotEncoder, StandardScaler
- **Estimators:** Algorithms that train on data (LinearRegression, RandomForest, etc.)
- **Evaluators:** RegressionEvaluator, BinaryClassificationEvaluator, MulticlassClassificationEvaluator

```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("mllib-intro").getOrCreate()
```

## 4.2 ML Pipeline Architecture

An ML Pipeline chains multiple Transformers and Estimators into a single workflow.

![ML Pipeline Architecture](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/big-data/ch04-ml-pipeline.png)


## 4.3 Feature Engineering

### 4.3.1 VectorAssembler

Combines multiple numeric columns into a single feature vector.

```python
from pyspark.ml.feature import VectorAssembler

df = spark.createDataFrame([
    (1, 0.5, 10, 100),
    (2, 0.8, 20, 200),
    (3, 0.3, 15, 150),
], ["id", "feature1", "feature2", "feature3"])

assembler = VectorAssembler(
    inputCols=["feature1", "feature2", "feature3"],
    outputCol="features"
)
transformed = assembler.transform(df)
transformed.select("features").show(truncate=False)
```

### 4.3.2 StringIndexer & OneHotEncoder

```python
from pyspark.ml.feature import StringIndexer, OneHotEncoder

df = spark.createDataFrame([
    (1, "red"), (2, "blue"), (3, "green"), (4, "red")
], ["id", "color"])

# Convert string to numeric index
indexer = StringIndexer(inputCol="color", outputCol="color_index")
indexed = indexer.fit(df).transform(df)

# Convert index to one-hot vector
encoder = OneHotEncoder(inputCol="color_index", outputCol="color_vector")
encoded = encoder.fit(indexed).transform(indexed)
encoded.select("color", "color_index", "color_vector").show()
```

### 4.3.3 StandardScaler & MinMaxScaler

```python
from pyspark.ml.feature import StandardScaler, MinMaxScaler

df = spark.createDataFrame([
    (1, 100.0), (2, 200.0), (3, 300.0), (4, 400.0), (5, 1000.0)
], ["id", "value"])

assembler = VectorAssembler(inputCols=["value"], outputCol="features")
df_features = assembler.transform(df)

# StandardScaler (mean=0, std=1)
scaler = StandardScaler(inputCol="features", outputCol="scaled", withStd=True, withMean=True)
scaler_model = scaler.fit(df_features)
scaled = scaler_model.transform(df_features)
scaled.select("value", "scaled").show()

# MinMaxScaler (range [0, 1])
minmax = MinMaxScaler(inputCol="features", outputCol="normalized")
minmax_model = minmax.fit(df_features)
normalized = minmax_model.transform(df_features)
normalized.select("value", "normalized").show()
```

### 4.3.4 Feature Hashing

For high-cardinality categorical columns (millions of unique values):

```python
from pyspark.ml.feature import FeatureHasher

df = spark.createDataFrame([
    (1, "user_abc123", "page_/home"),
    (2, "user_def456", "page_/checkout"),
], ["id", "user_id", "page"])

hasher = FeatureHasher(
    inputCols=["user_id", "page"],
    outputCol="hashed_features",
    numFeatures=1 << 16  # 65536 buckets
)
hashed = hasher.transform(df)
hashed.select("hashed_features").show(truncate=False)
```

## 4.4 Training Models

### 4.4.1 Linear Regression

```python
from pyspark.ml.regression import LinearRegression
from pyspark.ml.evaluation import RegressionEvaluator

# Generate synthetic data
df = spark.range(10000).selectExpr(
    "id",
    "rand() as feature1",
    "rand() as feature2",
    "rand() as feature3"
)
df = df.withColumn("label", df.feature1 * 3 + df.feature2 * 2 + df.feature3 * 0.5 + 0.1)

assembler = VectorAssembler(
    inputCols=["feature1", "feature2", "feature3"],
    outputCol="features"
)
df_features = assembler.transform(df)

train, test = df_features.randomSplit([0.8, 0.2], seed=42)

lr = LinearRegression(featuresCol="features", labelCol="label")
lr_model = lr.fit(train)

train_pred = lr_model.transform(train)
evaluator = RegressionEvaluator(labelCol="label", metricName="rmse")
rmse = evaluator.evaluate(train_pred)
print(f"RMSE: {rmse:.4f}")
print(f"Coefficients: {lr_model.coefficients}")
print(f"Intercept: {lr_model.intercept:.4f}")
```

### 4.4.2 Random Forest Classifier

```python
from pyspark.ml.classification import RandomForestClassifier
from pyspark.ml.evaluation import BinaryClassificationEvaluator

df = spark.range(10000).selectExpr(
    "id",
    "rand() as feature1",
    "rand() as feature2",
    "rand() as feature3",
    "CASE WHEN rand() > 0.5 THEN 1 ELSE 0 END as label"
)

assembler = VectorAssembler(
    inputCols=["feature1", "feature2", "feature3"],
    outputCol="features"
)
df_features = assembler.transform(df)

train, test = df_features.randomSplit([0.8, 0.2], seed=42)

rf = RandomForestClassifier(
    featuresCol="features",
    labelCol="label",
    numTrees=50,
    maxDepth=10,
    seed=42
)
rf_model = rf.fit(train)

predictions = rf_model.transform(test)
evaluator = BinaryClassificationEvaluator(
    labelCol="label",
    metricName="areaUnderROC"
)
auc = evaluator.evaluate(predictions)
print(f"Test AUC: {auc:.4f}")

# Feature importance
importance = rf_model.featureImportances
print(f"Feature importance: {importance}")
```

### 4.4.3 Logistic Regression

```python
from pyspark.ml.classification import LogisticRegression

lr_clf = LogisticRegression(
    featuresCol="features",
    labelCol="label",
    maxIter=100,
    regParam=0.01,
    elasticNetParam=0.8
)
lr_model = lr_clf.fit(train)

# Training summary
summary = lr_model.summary
print(f"Training accuracy: {summary.accuracy:.4f}")
print(f"Training AUC: {summary.areaUnderROC:.4f}")

# Test predictions
predictions = lr_model.transform(test)
predictions.select("label", "prediction", "probability").show(5)
```

## 4.5 Cross-Validation

```python
from pyspark.ml.tuning import CrossValidator, ParamGridBuilder
from pyspark.ml.regression import RandomForestRegressor

rf = RandomForestRegressor(featuresCol="features", labelCol="label", seed=42)

param_grid = ParamGridBuilder() \
    .addGrid(rf.numTrees, [10, 50, 100]) \
    .addGrid(rf.maxDepth, [5, 10, 15]) \
    .build()

evaluator = RegressionEvaluator(labelCol="label", metricName="rmse")

crossval = CrossValidator(
    estimator=rf,
    estimatorParamMaps=param_grid,
    evaluator=evaluator,
    numFolds=3,
    parallelism=4  # Run folds in parallel
)

cv_model = crossval.fit(train)
best_model = cv_model.bestModel
print(f"Best params: numTrees={best_model.getNumTrees}, maxDepth={best_model.getOrDefault('maxDepth')}")

test_pred = best_model.transform(test)
rmse = evaluator.evaluate(test_pred)
print(f"Best model test RMSE: {rmse:.4f}")
```

## 4.6 Distributed Training at Scale

MLlib performs training in a distributed fashion. Each executor processes a partition of the data, and the driver coordinates gradient updates (or tree ensemble building).

```python
# MLlib trains on the entire cluster automatically
# Configure executors for large datasets
spark = SparkSession.builder \
    .appName("distributed-training") \
    .config("spark.executor.instances", 50) \
    .config("spark.executor.cores", 4) \
    .config("spark.executor.memory", "16g") \
    .config("spark.sql.shuffle.partitions", 200) \
    .getOrCreate()

# Read 1 TB of features
df = spark.read.parquet("s3://bucket/features/*.parquet")
print(f"Training data: {df.count():,} rows")

# Distributed training — each executor trains on its partition
lr = LinearRegression(maxIter=100, regParam=0.01)
model = lr.fit(df)  # Runs in parallel across 200 executors

# Tree-based algorithms distribute across executors for tree building
rf = RandomForestClassifier(numTrees=500, maxDepth=20)
rf_model = rf.fit(df)  # 500 trees built in parallel across the cluster
```

## 4.7 Model Export & Inference

### 4.7.1 Saving and Loading Models

```python
# Save trained model
model.save("s3://bucket/models/random_forest_v1")

# Load for inference
from pyspark.ml.classification import RandomForestClassificationModel
loaded_model = RandomForestClassificationModel.load("s3://bucket/models/random_forest_v1")

# Batch inference on new data
new_data = spark.read.parquet("s3://bucket/new_data/*.parquet")
predictions = loaded_model.transform(new_data)
predictions.select("id", "prediction", "probability").show()
```

### 4.7.2 Exporting to PMML

```python
# Not all MLlib models support PMML natively
# Alternative: extract coefficients and deploy manually
coefficients = lr_model.coefficients
intercept = lr_model.intercept

import json
with open("/tmp/model_params.json", "w") as f:
    json.dump({
        "coefficients": coefficients.toArray().tolist(),
        "intercept": intercept
    }, f)
```

### 4.7.3 Converting to ONNX for production

```python
# MLlib → ONNX requires intermediate conversion via sklearn
# Best practice: use MLlib for training, export coefficients
# to a lightweight serving framework (Flask/FastAPI)

# Coefficient export for linear models
import numpy as np
np.savez("/tmp/model_weights.npz",
         coefficients=coefficients.toArray(),
         intercept=intercept)

# FastAPI inference endpoint
from fastapi import FastAPI
import numpy as np

app = FastAPI()
data = np.load("/tmp/model_weights.npz")
weights = data["coefficients"]
bias = data["intercept"]

@app.post("/predict")
def predict(features: list[float]):
    features = np.array(features)
    prediction = np.dot(features, weights) + bias
    return {"prediction": float(prediction)}
```

## 4.8 K-Means Clustering

```python
from pyspark.ml.clustering import KMeans
from pyspark.ml.evaluation import ClusteringEvaluator

df = spark.read.parquet("s3://bucket/vectors/*.parquet")

kmeans = KMeans(featuresCol="features", k=10, seed=42)
model = kmeans.fit(df)

predictions = model.transform(df)
evaluator = ClusteringEvaluator(featuresCol="features", metricName="silhouette")
silhouette = evaluator.evaluate(predictions)
print(f"Silhouette score: {silhouette:.4f}")

# Cluster centers
centers = model.clusterCenters()
for i, center in enumerate(centers):
    print(f"Cluster {i}: {center[:5]}...")
```

## Summary

- MLlib provides a DataFrame-based pipeline API for scalable ML.
- Feature transformers (VectorAssembler, StringIndexer, StandardScaler) handle preprocessing at scale.
- CrossValidator runs distributed k-fold validation across the cluster.
- MLlib models train in a distributed fashion — larger clusters mean faster training.
- For production inference, export model coefficients to lightweight serving frameworks.
- Pandas UDFs bridge the gap between Spark and Python ML libraries (sklearn, PyTorch).

## Exercises

1. Build a complete ML pipeline that reads 50 GB of Parquet, creates 10 feature columns, trains a RandomForest classifier with 100 trees, and evaluates with 5-fold CV.
2. Compare the training time of LinearRegression on a 100 GB dataset with 10 executors vs 50 executors. Plot the speedup curve.
3. Train a K-Means model on a 1 billion row dataset with k=100. Measure the iteration time and silhouette score.
4. Export a trained LogisticRegression model to JSON coefficients and build a FastAPI inference endpoint.
5. Use Pandas UDFs to train a PyTorch model on each partition of a grouped DataFrame.
