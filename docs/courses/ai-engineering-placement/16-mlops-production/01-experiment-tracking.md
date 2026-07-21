# Experiment Tracking

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the importance of experiment tracking in ML workflows |
| LO2 | Set up and configure MLflow for tracking experiments |
| LO3 | Log parameters, metrics, artifacts, and models systematically |
| LO4 | Compare experiments using tracking UI and programmatic APIs |
| LO5 | Implement nested runs and hyperparameter sweeps |
| LO6 | Integrate experiment tracking into CI/CD pipelines |

## Introduction

Understanding experiment tracking is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering experiment tracking.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding experiment tracking is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how experiment tracking works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind experiment tracking
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | What is Experiment Tracking | Why tracking matters for reproducibility |
| 1.2 | MLflow Architecture | Tracking server, runs, artifacts, registry |
| 1.3 | Logging Parameters & Metrics | Autologging, custom logging |
| 1.4 | Artifact Management | Models, plots, datasets as artifacts |
| 1.5 | Experiment Comparison | Search runs, compare via API |
| 1.6 | Hyperparameter Sweeps | Nested runs, grid search integration |
| 1.7 | CI/CD Integration | Automate tracking in pipelines |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Why Track?] --> B[MLflow Setup]
    B --> C[Log Params & Metrics]
    C --> D[Manage Artifacts]
    D --> E[Compare Runs]
    E --> F[Sweeps & Nested Runs]
    F --> G[CI/CD Integration]
```text

## 1.1 What is Experiment Tracking

Experiment tracking is the systematic logging of machine learning experiments to ensure reproducibility, comparability, and auditability. In production ML, data scientists run hundreds of experiments varying hyperparameters, model architectures, data splits, and preprocessing steps. Without tracking, it is impossible to determine which configuration produced the best model.

**Key challenges solved by experiment tracking**:
- **Reproducibility**: Recreate any past result exactly
- **Comparability**: Compare metrics across experiments on equal footing
- **Auditability**: Know who ran what, when, and with which code version
- **Serendipity**: Capture insights from failed experiments that may be useful later

```python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import numpy as np

X = np.random.rand(100, 5)
y = X @ np.array([1.0, -0.5, 2.0, 0.0, 1.5]) + np.random.randn(100) * 0.1

with mlflow.start_run(run_name="baseline-random-forest"):
    params = {"n_estimators": 100, "max_depth": 10}
    mlflow.log_params(params)

    model = RandomForestRegressor(**params)
    model.fit(X, y)
    preds = model.predict(X)
    mae = mean_absolute_error(y, preds)
    mlflow.log_metric("mae", mae)

    mlflow.sklearn.log_model(model, "model")
    print(f"Logged run with MAE={mae:.4f}")
```text

**Components of an experiment run**:
- **Run ID**: Unique identifier for the run
- **Parameters**: Input configuration (hyperparameters, data paths)
- **Metrics**: Evaluation numbers (accuracy, loss, MAE)
- **Artifacts**: Binary files (model weights, plots, datasets)
- **Tags**: Labels for filtering (`{"stage": "baseline"}`)

---

## 1.2 MLflow Architecture

MLflow is the most widely adopted experiment tracking framework. It has four components:

```mermaid
flowchart TB
    subgraph Track[Tracking]
        TR[Tracking Server] --> RS[Runs Store]
        TR --> AS[Artifact Store]
    end
    subgraph Projects[Projects]
        PR[MLproject YAML] --> ENV[Environment]
        ENV --> CODE[Entry Point]
    end
    subgraph Models[Models]
        MR[Model Registry] --> VER[Versioning]
        MR --> STG[Stages: Staging/Production]
    end
    subgraph Registry[Registry]
        MR2[Model Registry API]
    end
```text

- **Tracking Server**: HTTP server that records runs, parameters, metrics, and artifacts. Can use local filesystem, SQLite, MySQL, or PostgreSQL as backend store.
- **Artifact Store**: Cloud storage (S3, GCS, Azure Blob) or local path for binary artifacts.
- **Model Registry**: Centralized model store with versioning, stage transitions (Staging, Production, Archived).
- **MLflow Projects**: Reusable, reproducible ML code packaged with conda/docker environments.

```python

## Setting up MLflow with a remote tracking server
import mlflow

## Local tracking
mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("house-price-prediction")

## Or use SQLite backend

## mlflow.set_tracking_uri("sqlite:///mlflow.db")

## Autologging — automatically capture params, metrics, models
mlflow.sklearn.autolog()

with mlflow.start_run():
    model = RandomForestRegressor(n_estimators=200)
    model.fit(X_train, y_train)
    # Everything logged automatically!
```text

**Setting up the tracking server**:

```bash

## Start MLflow tracking server
mlflow server \
    --backend-store-uri sqlite:///mlflow.db \
    --default-artifact-root ./artifacts \
    --host 0.0.0.0 \
    --port 5000
```text

---

## 1.3 Logging Parameters & Metrics

Parameters and metrics form the backbone of experiment tracking. Parameters are categorical or numeric inputs you set before training. Metrics are numeric outputs you measure during or after training.

```python
import mlflow
import time
from sklearn.model_selection import cross_val_score

mlflow.set_experiment("param-and-metric-demo")

with mlflow.start_run(run_name="xgboost-v1"):
    # Log parameters
    mlflow.log_param("model_type", "XGBoost")
    mlflow.log_param("learning_rate", 0.05)
    mlflow.log_param("n_estimators", 500)
    mlflow.log_param("max_depth", 6)
    mlflow.log_param("subsample", 0.8)

    # Log metrics at the end
    mlflow.log_metric("accuracy", 0.942)
    mlflow.log_metric("f1_score", 0.937)
    mlflow.log_metric("auc_roc", 0.981)

    # Log metrics over time (epochs)
    for epoch in range(10):
        train_loss = 0.5 ** (epoch + 1)
        val_loss = 0.6 ** (epoch + 1)
        mlflow.log_metric("train_loss", train_loss, step=epoch)
        mlflow.log_metric("val_loss", val_loss, step=epoch)
        time.sleep(0.1)

## Use log_dict for structured data
with mlflow.start_run(run_name="with-config"):
    config = {
        "data_sources": ["s3://bucket/train.csv"],
        "feature_columns": ["sqft", "bedrooms", "bathrooms"],
        "target_column": "price",
        "split_ratio": 0.8
    }
    mlflow.log_dict(config, "config.json")
```text

**Metric logging patterns**:

| Pattern | API | Use Case |
|---------|-----|----------|
| Single value | `log_metric(name, value)` | Final accuracy |
| Time series | `log_metric(name, value, step=epoch)` | Training curves |
| Multiple metrics | `log_metrics(dict)` | Batch logging |
| Nested params | `log_params(dict)` | Param grid |

```python

## Parameter logging with hierarchical names
with mlflow.start_run():
    mlflow.log_params({
        "model.learning_rate": 0.01,
        "model.n_estimators": 300,
        "data.train_size": 10000,
        "data.validation_size": 2000,
        "preprocessing.scaler": "standard",
        "preprocessing.handle_missing": "mean_impute"
    })
```text

---

## 1.4 Artifact Management

Artifacts are any files associated with a run: model binaries, plots, feature importance charts, confusion matrices, dataset samples, or serialized preprocessing pipelines.

```python
import matplotlib.pyplot as plt
import mlflow
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.ensemble import RandomForestClassifier

X = np.random.rand(200, 4)
y = (X[:, 0] + X[:, 1] > 1).astype(int)

with mlflow.start_run(run_name="artifact-demo"):
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)

    # Log model
    mlflow.sklearn.log_model(model, "random_forest_model")

    # Log feature importance plot
    fig, ax = plt.subplots()
    ax.bar(range(4), model.feature_importances_)
    ax.set_title("Feature Importance")
    ax.set_xlabel("Feature")
    ax.set_ylabel("Importance")
    plt.savefig("feature_importance.png")
    mlflow.log_artifact("feature_importance.png")
    plt.close()

    # Log confusion matrix
    fig2, ax2 = plt.subplots()
    ConfusionMatrixDisplay.from_estimator(model, X, y, ax=ax2)
    plt.savefig("confusion_matrix.png")
    mlflow.log_artifact("confusion_matrix.png")
    plt.close()

    # Log directory as artifact
    import os
    os.makedirs("summary_reports", exist_ok=True)
    with open("summary_reports/model_card.txt", "w") as f:
        f.write("Model: RandomForest\nAccuracy: 0.95\n")
    mlflow.log_artifacts("summary_reports", artifact_path="reports")
```text

**Artifact storage options**:

| Storage Backend | URI Example | Best For |
|-----------------|-------------|----------|
| Local filesystem | `./mlruns` | Local development |
| S3 | `s3://bucket/mlflow/` | AWS deployments |
| GCS | `gs://bucket/mlflow/` | GCP deployments |
| Azure Blob | `wasbs://container@account.blob.core.windows.net/` | Azure deployments |

```python

## Register a model in the Model Registry
with mlflow.start_run(run_name="register-model"):
    model = RandomForestRegressor(n_estimators=200)
    model.fit(X_train, y_train)
    mlflow.sklearn.log_model(model, "model")

    # Register (if using registry)
    model_uri = f"runs:/{mlflow.active_run().info.run_id}/model"
    mlflow.register_model(model_uri, "HousePricePredictor")
```text

---

## 1.5 Experiment Comparison

The MLflow UI and search API allow you to compare runs programmatically to identify the best performing configuration.

```python
import mlflow
import pandas as pd

client = mlflow.tracking.MlflowClient()
experiment = client.get_experiment_by_name("house-price-prediction")

## Search runs with filter criteria
runs = client.search_runs(
    experiment_ids=[experiment.experiment_id],
    filter_string="metrics.mae < 3.0",
    order_by=["metrics.mae ASC"],
    max_results=5
)

for run in runs:
    print(f"Run ID: {run.info.run_id}")
    print(f"MAE: {run.data.metrics['mae']}")
    print(f"Params: {run.data.params}")
    print("---")

## Convert runs to DataFrame for comparison
def runs_to_df(experiment_name):
    exp = client.get_experiment_by_name(experiment_name)
    runs = client.search_runs([exp.experiment_id])
    data = []
    for r in runs:
        row = {"run_id": r.info.run_id, "status": r.info.status}
        row.update(r.data.params)
        row.update({f"metric_{k}": v for k, v in r.data.metrics.items()})
        data.append(row)
    return pd.DataFrame(data)

df = runs_to_df("house-price-prediction")
print(df.sort_values("metric_mae").head())
```text

**Using the MLflow UI for comparison**:

```bash

## Launch the UI to compare runs visually
mlflow ui --port 5000
```text

The UI provides:
- **Parallel coordinates plot**: Visualize hyperparameter combinations and resulting metrics
- **Scatter/line plots**: Compare two metrics across runs
- **Run detail page**: View all logged parameters, metrics, and artifacts for a single run
- **Compare mode**: Select multiple runs to see side-by-side parameter and metric differences

```python

## Programmatic comparison with statistical tests
from scipy import stats

def compare_experiments(run_ids_a, run_ids_b, metric="mae"):
    def get_metrics(run_ids):
        return [client.get_run(rid).data.metrics[metric] for rid in run_ids]
    group_a = get_metrics(run_ids_a)
    group_b = get_metrics(run_ids_b)
    t_stat, p_value = stats.ttest_ind(group_a, group_b)
    return {"t_statistic": t_stat, "p_value": p_value, "significant": p_value < 0.05}
```text

---

## 1.6 Hyperparameter Sweeps

Nested runs allow you to organize hyperparameter search experiments. Each child run corresponds to one configuration from the sweep.

```python
import mlflow
import itertools

param_grid = {
    "n_estimators": [50, 100, 200],
    "max_depth": [5, 10, 15],
    "min_samples_split": [2, 5]
}

keys, values = zip(*param_grid.items())
configs = [dict(zip(keys, v)) for v in itertools.product(*values)]

with mlflow.start_run(run_name="grid-search-parent") as parent_run:
    for i, params in enumerate(configs):
        with mlflow.start_run(
            run_name=f"child-{i}",
            nested=True
        ) as child_run:
            mlflow.log_params(params)
            model = RandomForestRegressor(**params)
            model.fit(X_train, y_train)
            preds = model.predict(X_val)
            mae = mean_absolute_error(y_val, preds)
            mlflow.log_metric("mae", mae)

            # Log parent-child relationship
            mlflow.set_tag("mlflow.parentRunId", parent_run.info.run_id)

print(f"Completed {len(configs)} child runs under parent {parent_run.info.run_id}")
```text

**Integration with Optuna for intelligent hyperparameter search**:

```python
import optuna
import mlflow
from sklearn.model_selection import cross_val_score

def objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 50, 500),
        "max_depth": trial.suggest_int("max_depth", 3, 20),
        "min_samples_split": trial.suggest_int("min_samples_split", 2, 10),
        "min_samples_leaf": trial.suggest_int("min_samples_leaf", 1, 5)
    }

    with mlflow.start_run(nested=True):
        mlflow.log_params(params)
        model = RandomForestRegressor(**params, random_state=42)
        scores = cross_val_score(model, X_train, y_train, cv=5, scoring="neg_mean_absolute_error")
        mae = -scores.mean()
        mlflow.log_metric("cv_mae", mae)
        return mae

study = optuna.create_study(direction="minimize")
with mlflow.start_run(run_name="optuna-sweep"):
    study.optimize(objective, n_trials=50)
    mlflow.log_params(study.best_params)
    mlflow.log_metric("best_cv_mae", study.best_value)
    mlflow.log_artifact("optuna_study.pkl")
```text

---

## 1.7 CI/CD Integration

Integrating experiment tracking into CI/CD pipelines ensures every model training run is captured automatically, with full lineage.

```python

## Example: GitHub Actions workflow for automated experiment tracking

## .github/workflows/train.yml

## on:

##   push:

##     branches: [main]

##     paths: ['models/**']
#

## jobs:

##   train-and-track:

##     runs-on: ubuntu-latest

##     steps:

##       - uses: actions/checkout@v4

##       - uses: actions/setup-python@v5

##         with:

##           python-version: '3.11'

##       - run: |

##           pip install -r requirements.txt

##           python train.py \

##             --tracking-uri ${{ secrets.MLFLOW_TRACKING_URI }} \

##             --experiment-name ${{ github.ref_name }}
```text

```python

## train.py — script that runs in CI pipeline
import argparse
import os
import mlflow
from datetime import datetime

parser = argparse.ArgumentParser()
parser.add_argument("--tracking-uri", required=True)
parser.add_argument("--experiment-name", default="ci-training")
args = parser.parse_args()

mlflow.set_tracking_uri(args.tracking_uri)
mlflow.set_experiment(args.experiment_name)

with mlflow.start_run() as run:
    # Log CI metadata
    mlflow.set_tag("ci.commit_sha", os.environ.get("GITHUB_SHA", "local"))
    mlflow.set_tag("ci.branch", os.environ.get("GITHUB_REF_NAME", "local"))
    mlflow.set_tag("ci.run_id", os.environ.get("GITHUB_RUN_ID", "local"))
    mlflow.set_tag("ci.workflow", os.environ.get("GITHUB_WORKFLOW", "local"))

    # Log dataset version reference
    mlflow.log_param("dataset_version", os.environ.get("DVC_VERSION", "v1.0"))

    # Train model
    model = RandomForestRegressor(n_estimators=200)
    model.fit(X_train, y_train)

    # Log metrics and model
    mae = mean_absolute_error(y_test, model.predict(X_test))
    mlflow.log_metric("mae", mae)
    mlflow.sklearn.log_model(model, "model")

    # Optional: promote to registry if threshold met
    if mae < 2.5:
        model_uri = f"runs:/{run.info.run_id}/model"
        mlflow.register_model(model_uri, "ProductionModel")
        mlflow.set_tag("promoted", "true")

print(f"CI run completed — MAE={mae:.4f}")
```text

**Experiment tracking maturity levels**:

| Level | Practice | Tooling |
|-------|----------|---------|
| 1 | Ad-hoc spreadsheets | Manual logging |
| 2 | Centralized tracking | MLflow, Neptune, W&B |
| 3 | Automated tracking in CI | GitHub Actions + MLflow |
| 4 | Full lineage & governance | MLflow + DVC + CI/CD |

---

## TypeScript Parallel

```typescript
// TypeScript experiment tracking equivalent using MLflow REST API
interface ExperimentRun {
  runId: string;
  experimentId: string;
  params: Record<string, string>;
  metrics: Record<string, number>;
  tags: Record<string, string>;
}

async function logRun(run: ExperimentRun): Promise<void> {
  const response = await fetch("http://localhost:5000/api/2.0/mlflow/runs/log-parameter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ run_id: run.runId, params: Object.entries(run.params).map(([k, v]) => ({ key: k, value: v })) })
  });
  if (!response.ok) throw new Error(`Failed to log run: ${response.statusText}`);
}

// Similar pattern for logging metrics and artifacts via REST API
```text

---

## Summary

- Experiment tracking ensures reproducibility by logging parameters, metrics, and artifacts for every run
- MLflow provides four components: Tracking, Projects, Models, and Model Registry
- Log parameters before training and metrics during/after to capture full context
- Artifacts include model binaries, plots, datasets, and serialized pipelines
- The MLflow UI enables visual comparison of runs via parallel coordinates and scatter plots
- Nested runs organize hyperparameter sweeps with parent-child hierarchies
- Optuna integration enables intelligent hyperparameter optimization with MLflow tracking
- CI/CD integration automatically captures every training run with code version metadata
- Use the search API to programmatically identify the best performing runs
- Model Registry enables version management and stage transitions for production models

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Starting experiments | `mlflow.set_tracking_uri()` | Using default local path for team projects |
| Logging parameters | `log_params(dict)` | Logging one param at a time |
| Model comparison | MLflow UI compare mode | Manual spreadsheet comparison |
| Hyperparameter search | Nested runs with parent-child | Flat runs with no organization |
| CI automation | Set tags for commit SHA and branch | Running without version linkage |
| Artifact management | `log_artifacts(directory)` | Logging individual files manually |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Why is experiment tracking important in MLOps?
  </summary>
  <div class="tp-qa-answer">
    <p>Experiment tracking is critical because ML development involves numerous trials with varying hyperparameters, data splits, preprocessing steps, and model architectures. Without it, you cannot reproduce the best result, compare configurations fairly, or audit who changed what. It is the foundation of reproducibility in ML engineering.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are the four components of MLflow?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Tracking</strong> — Log parameters, metrics, and artifacts via REST API or Python client.<br>
    <strong>Projects</strong> — Package ML code in a reusable, reproducible format using MLproject YAML.<br>
    <strong>Models</strong> — Standard format for packaging ML models with metadata for deployment.<br>
    <strong>Model Registry</strong> — Central repository with versioning, stage transitions (Staging, Production, Archived), and annotations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the difference between parameters and metrics in MLflow?
  </summary>
  <div class="tp-qa-answer">
    <p>Parameters are input configuration values set before training (e.g., <code>n_estimators</code>, <code>learning_rate</code>). They are logged as strings. Metrics are numeric evaluation measures computed during or after training (e.g., <code>accuracy</code>, <code>mae</code>). Metrics support step-based logging for time-series tracking and can be compared across runs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do nested runs help organize hyperparameter sweeps?
  </summary>
  <div class="tp-qa-answer">
    <p>Nested runs create a parent-child hierarchy where the parent run represents the entire sweep and each child run represents one hyperparameter configuration. This makes it easy to view the aggregate sweep result in the parent while drilling into individual configurations in children. Use <code>mlflow.start_run(nested=True)</code> inside a parent run.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you integrate experiment tracking into a CI/CD pipeline?
  </summary>
  <div class="tp-qa-command">
    <p>Set CI metadata as tags (commit SHA, branch, workflow name), log all parameters and metrics, and optionally promote models to the registry if performance thresholds are met. Use the tracking URI from secrets to point to a shared MLflow server. This ensures every training run in CI is captured with full lineage.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is MLflow autologging and when should you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>Autologging automatically captures parameters, metrics, and model artifacts from popular frameworks (scikit-learn, PyTorch, TensorFlow, XGBoost) without manual logging calls. Use it for quick prototyping and baselines. Use manual logging when you need fine-grained control or custom metrics not captured by autologging.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What artifact stores does MLflow support?
  </summary>
  <div class="tp-qa-answer">
    <p>MLflow supports local filesystem, Amazon S3, Google Cloud Storage, Azure Blob Storage, HDFS, and SFTP. The artifact store is configured via the <code>--default-artifact-root</code> parameter when starting the tracking server. Choose cloud storage for team collaboration and local storage for individual development.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How can you compare experiments programmatically?
  </summary>
  <div class="tp-qa-answer">
    <p>Use <code>MlflowClient.search_runs()</code> with filter strings and ordering. Convert results to a DataFrame for pandas-based analysis. Use the <code>order_by</code> parameter to sort by metrics. Statistical tests (t-tests) can determine if differences between experiment groups are significant. The UI provides visual comparison with parallel coordinates plots.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What tags should you always set in CI experiments?
  </summary>
  <div class="tp-qa-answer">
    <p>Always set <code>ci.commit_sha</code>, <code>ci.branch</code>, <code>ci.run_id</code>, and <code>ci.workflow</code> tags from CI environment variables. These provide full traceability from model to code. Also set <code>dataset_version</code> to link to the data used. Optionally set <code>promoted</code> to true if the run triggers a model registry promotion.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s01-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How does the MLflow Model Registry work?
  </summary>
  <div class="tp-qa-answer">
    <p>The Model Registry stores models with version numbers. Each version can be assigned a stage: None, Staging, Production, or Archived. Transitions between stages can be approved manually or via API. Models are registered using <code>mlflow.register_model()</code>. The registry supports model descriptions, aliases, and lineage tracking back to the source run.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which MLflow component is responsible for logging parameters and metrics?
a) MLflow Models
b) MLflow Tracking
c) MLflow Registry
d) MLflow Projects

<details class="tp-qa-card" data-qid="mlops-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) MLflow Tracking</strong></p><p>MLflow Tracking is the component that logs parameters, metrics, tags, and artifacts for each run.</p></div></details>

**Q2**: What does `mlflow.sklearn.autolog()` do?
a) Automatically deploys models
b) Automatically logs params, metrics, and models for sklearn runs
c) Automatically creates experiment names
d) Automatically tunes hyperparameters

<details class="tp-qa-card" data-qid="mlops-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Automatically logs params, metrics, and models for sklearn runs</strong></p><p>Autolog captures model parameters, training metrics, and the fitted model without explicit logging calls.</p></div></details>

**Q3**: Which method creates a child run inside a parent run?
a) `mlflow.create_child_run()`
b) `mlflow.start_run(nested=True)`
c) `mlflow.ChildRun()`
d) `mlflow.sub_run()`

<details class="tp-qa-card" data-qid="mlops-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) <code>mlflow.start_run(nested=True)</code></strong></p><p>Setting <code>nested=True</code> inside an active run creates a nested child run.</p></div></details>

**Q4**: What is the correct URI pattern for registering a model to the Model Registry?
a) `models:/run_id/model`
b) `runs:/run_id/model`
c) `mlflow://run_id/model`
d) `registry:/run_id/model`

<details class="tp-qa-card" data-qid="mlops-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) <code>runs:/run_id/model</code></strong></p><p>The <code>runs:/run_id/artifact_path</code> URI pattern references an artifact within a specific run.</p></div></details>

**Q5**: What is the purpose of `mlflow.log_dict()`?
a) Logs a Python dictionary as a JSON artifact
b) Logs multiple metrics at once
c) Logs parameter grid for sweeps
d) Logs environment variables

<details class="tp-qa-card" data-qid="mlops-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Logs a Python dictionary as a JSON artifact</strong></p><p><code>log_dict()</code> serializes a dictionary to JSON and saves it as an artifact in the run.</p></div></details>


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding mlops production is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to mlops production.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: mlops production concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In mlops production, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

**Easy** — Set up MLflow with SQLite backend and log a simple experiment with 3 parameters and 2 metrics.

**Medium** — Implement a grid search over 12 hyperparameter combinations using nested runs. Log each configuration's MAE and print the best combination.

**Medium** — Build a function that compares two experiment runs using a t-test on a given metric. Return whether the difference is statistically significant.

**Hard** — Create a GitHub Actions workflow that trains a RandomForest model, logs everything to MLflow, and registers the model to the registry if MAE is below a threshold.

**Hard** — Integrate Optuna with MLflow nested runs for hyperparameter optimization. Log the study's best parameters and best value to the parent run.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 16-mlops-production
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 16-mlops-production. When would you choose one approach over another?
2. Design a system that efficiently handles 16-mlops-production at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 16-mlops-production. What was your approach and what was the result?
2. How would you explain 16-mlops-production to a non-technical stakeholder?

#### Microsoft Style
1. How does 16-mlops-production integrate with enterprise systems and cloud architectures?
2. What are the security implications of 16-mlops-production?

#### NVIDIA Style
1. How would you optimize 16-mlops-production for GPU-accelerated computing?
2. What parallel processing patterns apply to 16-mlops-production?

#### AI Startup Style
1. How would you implement 16-mlops-production in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 16-mlops-production?

### Resume Tips
- **Technical Skills**: List 16-mlops-production under relevant technical skills
- **Project Description**: "Implemented 16-mlops-production to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 16-mlops-production in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 16-mlops-production
- [ ] Practice 3-5 problems related to 16-mlops-production
- [ ] Prepare 2 real-world examples of using 16-mlops-production
- [ ] Know the time/space complexity of common 16-mlops-production operations
- [ ] Have questions ready about how the company uses 16-mlops-production> **Next**: [02 — Prompt Versioning →](02-prompt-versioning.md)
