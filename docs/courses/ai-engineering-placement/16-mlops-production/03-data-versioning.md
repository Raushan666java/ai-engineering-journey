# Data Versioning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the importance of data versioning for ML reproducibility |
| LO2 | Set up DVC (Data Version Control) for dataset versioning |
| LO3 | Implement data pipelines with versioned inputs and outputs |
| LO4 | Manage dataset drift detection using versioned datasets |
| LO5 | Integrate data versioning with experiment tracking |
| LO6 | Automate data versioning in CI/CD workflows |

## Introduction

Understanding data versioning is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering data versioning.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding data versioning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how data versioning works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind data versioning
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Why Data Versioning | ML is data + code; both need versioning |
| 3.2 | DVC Fundamentals | Git + DVC for dataset version control |
| 3.3 | Data Pipelines | Reproducible data processing stages |
| 3.4 | Dataset Drift Detection | Compare distributions across versions |
| 3.5 | Integration with MLflow | Link dataset version to experiment run |
| 3.6 | CI/CD for Data | Automate data validation and versioning |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Raw Data] --> B[DVC Track]
    B --> C[Data Pipeline]
    C --> D[Versioned Dataset]
    D --> E[Train Model]
    E --> F[Experiment Tracking]
    F --> G[CI/CD Validation]
    G --> H[Register Dataset Version]
```text

## 3.1 Why Data Versioning

Machine learning models depend equally on code and data. While code is rigorously version-controlled with Git, datasets are often left unversioned — leading to irreproducible results, silent data drift, and wasted debugging time.

**The reproducibility crisis in ML**:
- A model trained on "dataset_v3_final.csv" cannot be reproduced if the file is overwritten
- Data pipelines with non-deterministic transformations produce different outputs each run
- Team members unknowingly use different data snapshots for training and evaluation

```python

## Without data versioning — fragile and irreproducible
import pandas as pd
import os

## What if this file changes between runs?
data_path = "data/training_data.csv"

## What if someone regenerates this file with different preprocessing?
df = pd.read_csv(data_path)
print(f"Loaded {len(df)} rows — but which version?")

## Better: track the data version explicitly
from hashlib import sha256
with open(data_path, "rb") as f:
    file_hash = sha256(f.read()).hexdigest()
print(f"Data hash: {file_hash} — version: {file_hash[:12]}")
```text

**Cost of unversioned data**:

| Problem | Impact | Example |
|---------|--------|---------|
| Data overwritten | Cannot reproduce benchmark | "That 95% accuracy was with old data" |
| Silent pipeline change | Unexpected metric shift | Preprocessing order changed |
| Team misalignment | Wasted training runs | Different features used |
| Compliance failure | Audit cannot trace data origin | GDPR right-to-explanation |

---

## 3.2 DVC Fundamentals

DVC (Data Version Control) extends Git with data versioning capabilities. Instead of storing large files in Git, DVC stores metadata pointers (`.dvc` files) and uploads actual data to remote storage (S3, GCS, local).

```mermaid
flowchart TB
    subgraph Git[Git Repository]
        F1[data.dvc] --> P[dvc.lock]
        F2[metrics.json]
        F3[model.pkl.dvc]
    end
    subgraph Remote[Remote Storage]
        R1[S3/GCS/SSH]
    end
    subgraph Cache[Local Cache]
        C1[.dvc/cache]
    end
    F1 --> R1
    P --> C1
    C1 --> R1
```text

```bash

## Initialize DVC in a Git repository
cd ml-project
git init
dvc init

## Add a dataset to DVC tracking
dvc add data/train.csv
git add data/train.csv.dvc .gitignore
git commit -m "add training dataset v1"

## Push to remote storage
dvc remote add -d myremote s3://my-bucket/dvc-store
dvc push
```text

```python

## Python API for DVC integration
import hashlib
import json
from pathlib import Path

class DataVersionTracker:
    def __init__(self, data_dir="data"):
        self.data_dir = Path(data_dir)
        self.version_file = self.data_dir / ".version.json"

    def compute_hash(self, filepath):
        """Compute SHA-256 hash of a file."""
        sha = hashlib.sha256()
        with open(filepath, "rb") as f:
            for chunk in iter(lambda: f.read(8192), b""):
                sha.update(chunk)
        return sha.hexdigest()

    def snapshot(self, filepath, version_tag=None, metadata=None):
        """Record a data version snapshot."""
        file_hash = self.compute_hash(filepath)
        entry = {
            "file": str(filepath),
            "hash": file_hash,
            "version": version_tag or file_hash[:12],
            "size_bytes": Path(filepath).stat().st_size,
            "metadata": metadata or {}
        }

        if self.version_file.exists():
            versions = json.loads(self.version_file.read_text())
        else:
            versions = []

        versions.append(entry)
        self.version_file.write_text(json.dumps(versions, indent=2))
        return entry

    def get_latest(self, filepath):
        """Get the latest version entry for a file."""
        if not self.version_file.exists():
            return None
        versions = json.loads(self.version_file.read_text())
        file_versions = [v for v in versions if v["file"] == str(filepath)]
        return file_versions[-1] if file_versions else None

tracker = DataVersionTracker()
entry = tracker.snapshot("data/train.csv", "v1.0.0", {"source": "raw_export_2025-06-01"})
print(f"Tracked: {entry['file']} @ {entry['version']} ({entry['hash'][:12]})")
```text

**DVC workflow with Python**:

```python
import subprocess
import json

def dvc_commit(message="update dataset"):
    """Run DVC commands programmatically."""
    # Add changed data files
    subprocess.run(["dvc", "add", "data/"], check=True)

    # Commit .dvc files to Git
    subprocess.run(["git", "add", "data.dvc"], check=True)
    subprocess.run(["git", "commit", "-m", message], check=True)

    # Push data to remote
    subprocess.run(["dvc", "push"], check=True)

    print(f"DVC committed: {message}")

dvc_commit("add processed training data v2")
```text

---

## 3.3 Data Pipelines

DVC pipelines define reproducible stages for data processing. Each stage has versioned inputs and outputs.

```python

## dvc.yaml — define a data pipeline

## stages:

##   preprocess:

##     cmd: python scripts/preprocess.py

##     deps:

##       - data/raw/train.csv

##       - scripts/preprocess.py

##     outs:

##       - data/processed/train_clean.csv

##     params:

##       - preprocess.min_samples

##       - preprocess.max_features

##   feature_engineering:

##     cmd: python scripts/features.py

##     deps:

##       - data/processed/train_clean.csv

##       - scripts/features.py

##     outs:

##       - data/features/train_features.parquet

##     params:

##       - features.include_interactions
```text

```python

## scripts/preprocess.py — DVC pipeline stage
import pandas as pd
import numpy as np
import json
import sys
from pathlib import Path

## Read parameters from params.yaml
with open("params.yaml") as f:
    params = json.load(f)

min_samples = params["preprocess"]["min_samples"]
max_features = params["preprocess"]["max_features"]

## Read input data (dependency tracked by DVC)
df = pd.read_csv("data/raw/train.csv")
print(f"Loaded raw data: {df.shape}")

## Preprocessing
df = df.dropna(thresh=min_samples)
df = df.select_dtypes(include=[np.number])  # Keep numeric features only
if df.shape[1] > max_features:
    # Keep top features by variance
    variances = df.var().sort_values(ascending=False)
    df = df[variances.index[:max_features]]

## Save output (tracked by DVC)
output_path = Path("data/processed/train_clean.csv")
output_path.parent.mkdir(parents=True, exist_ok=True)
df.to_csv(output_path, index=False)
print(f"Saved processed: {df.shape}")
```text

**Running and reproducing pipelines**:

```python
import subprocess

def run_pipeline():
    """Run the DVC pipeline and log results."""
    result = subprocess.run(["dvc", "repro"], capture_output=True, text=True)
    print(result.stdout)
    if result.returncode != 0:
        print(f"Pipeline failed: {result.stderr}")
    return result.returncode == 0

def get_pipeline_status():
    """Check pipeline status."""
    result = subprocess.run(["dvc", "status"], capture_output=True, text=True)
    return result.stdout

run_pipeline()
print(get_pipeline_status())
```text

**Pipeline versioning benefits**:

| Benefit | Without DVC | With DVC |
|---------|-------------|----------|
| Reproducibility | Manual re-run, different results | `dvc repro` reproduces exact output |
| Dependency tracking | Implicit, tribal knowledge | Explicit in dvc.yaml |
| Output versioning | Manual file renaming | Automatic hash-based versioning |
| Partial rebuilds | Full re-run on every change | Only changed stages rebuilt |

---

## 3.4 Dataset Drift Detection

Versioned datasets enable detection of data drift — changes in data distribution between training and production data.

```python
import numpy as np
import pandas as pd
from scipy.stats import ks_2samp, chi2_contingency
from typing import Dict, List, Tuple

class DataDriftDetector:
    def __init__(self, reference_version: str, threshold: float = 0.05):
        self.reference_version = reference_version
        self.threshold = threshold
        self.drift_report = {}

    def load_version(self, version_tag: str) -> pd.DataFrame:
        """Load dataset by version tag (simplified)."""
        filepath = f"data/versioned/dataset_{version_tag}.parquet"
        return pd.read_parquet(filepath)

    def detect_numeric_drift(self, ref: pd.Series, curr: pd.Series, feature: str) -> Dict:
        """KS test for numeric features."""
        stat, p_value = ks_2samp(ref.dropna(), curr.dropna())
        drifted = p_value < self.threshold
        return {
            "feature": feature,
            "type": "numeric",
            "ks_statistic": float(stat),
            "p_value": float(p_value),
            "drifted": drifted,
            "ref_mean": float(ref.mean()),
            "curr_mean": float(curr.mean()),
            "ref_std": float(ref.std()),
            "curr_std": float(curr.std())
        }

    def detect_categorical_drift(self, ref: pd.Series, curr: pd.Series, feature: str) -> Dict:
        """Chi-square test for categorical features."""
        ref_counts = ref.value_counts()
        curr_counts = curr.value_counts()
        all_categories = list(set(ref_counts.index) | set(curr_counts.index))

        ref_freq = [ref_counts.get(c, 0) / len(ref) for c in all_categories]
        curr_freq = [curr_counts.get(c, 0) / len(curr) for c in all_categories]

        # Simplified chi-square
        chi2 = sum((r - c)**2 / (r + 1e-8) for r, c in zip(ref_freq, curr_freq))
        drifted = chi2 > 0.1  # Heuristic threshold

        return {
            "feature": feature,
            "type": "categorical",
            "chi2": float(chi2),
            "drifted": drifted,
            "ref_distribution": dict(ref_counts.head(5).to_dict()),
            "curr_distribution": dict(curr_counts.head(5).to_dict())
        }

    def compare(self, current_version: str) -> Dict:
        """Compare current data version against reference."""
        ref_df = self.load_version(self.reference_version)
        curr_df = self.load_version(current_version)

        report = {
            "reference": self.reference_version,
            "current": current_version,
            "drift_detected": False,
            "features": []
        }

        for col in ref_df.columns:
            if col == "target":
                continue
            if np.issubdtype(ref_df[col].dtype, np.number):
                result = self.detect_numeric_drift(ref_df[col], curr_df[col], col)
            else:
                result = self.detect_categorical_drift(ref_df[col], curr_df[col], col)
            report["features"].append(result)
            if result["drifted"]:
                report["drift_detected"] = True

        return report

## Example usage
detector = DataDriftDetector(reference_version="v1.0")
report = detector.compare("v2.0")

if report["drift_detected"]:
    print("⚠️ Data drift detected!")
    for f in report["features"]:
        if f["drifted"]:
            print(f"  - {f['feature']} drifted (p={f.get('p_value', 'N/A'):.4f})")
else:
    print("✅ No significant drift detected")
```text

**Visualizing drift**:

```python
import matplotlib.pyplot as plt

def plot_feature_drift(ref_values, curr_values, feature_name):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
    ax1.hist(ref_values, bins=30, alpha=0.5, label="Reference")
    ax1.hist(curr_values, bins=30, alpha=0.5, label="Current")
    ax1.set_title(f"{feature_name} — Distribution Comparison")
    ax1.legend()

    # Cumulative distribution
    for data, label in [(ref_values, "Reference"), (curr_values, "Current")]:
        sorted_data = np.sort(data)
        cumsum = np.arange(1, len(sorted_data) + 1) / len(sorted_data)
        ax2.plot(sorted_data, cumsum, label=label)
    ax2.set_title(f"{feature_name} — Cumulative Distribution")
    ax2.legend()
    plt.tight_layout()
    plt.savefig(f"drift_{feature_name}.png")
```text

---

## 3.5 Integration with MLflow

Linking data version to experiment runs creates a complete lineage chain.

```python
import mlflow
import pandas as pd
import hashlib
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

class DataAwareExperiment:
    def __init__(self, experiment_name):
        mlflow.set_experiment(experiment_name)
        self.client = mlflow.tracking.MlflowClient()

    def compute_data_hash(self, df: pd.DataFrame) -> str:
        """Compute deterministic hash of a DataFrame."""
        hash_str = pd.util.hash_pandas_object(df).values.tobytes()
        return hashlib.sha256(hash_str).hexdigest()[:16]

    def run_with_data_version(self, data_path, data_version, model_params):
        """Run experiment with linked data version."""
        with mlflow.start_run() as run:
            # Log data version info
            mlflow.log_param("data_path", data_path)
            mlflow.log_param("data_version", data_version)

            # Load and hash data
            df = pd.read_csv(data_path)
            data_hash = self.compute_data_hash(df)
            mlflow.log_param("data_hash", data_hash)

            # Log dataset stats
            mlflow.log_metric("data_rows", len(df))
            mlflow.log_metric("data_columns", len(df.columns))

            # Log model params
            mlflow.log_params(model_params)

            # Train
            X = df.drop("target", axis=1)
            y = df["target"]
            model = RandomForestRegressor(**model_params)
            model.fit(X, y)

            # Log metrics
            preds = model.predict(X)
            mae = mean_absolute_error(y, preds)
            mlflow.log_metric("mae", mae)

            # Log model
            mlflow.sklearn.log_model(model, "model")

            return {
                "run_id": run.info.run_id,
                "data_hash": data_hash,
                "mae": mae
            }

exp = DataAwareExperiment("data-aware-training")
result = exp.run_with_data_version(
    data_path="data/features/train_features.parquet",
    data_version="v2.1.0",
    model_params={"n_estimators": 200, "max_depth": 10}
)
print(f"Run {result['run_id']} with data {result['data_hash']} — MAE: {result['mae']:.4f}")
```text

**Data lineage query**:

```python
def find_runs_by_data_hash(data_hash: str) -> list:
    """Find all experiment runs that used a specific data version."""
    runs = mlflow.search_runs(
        order_by=["start_time DESC"],
        filter_string=f"params.data_hash = '{data_hash}'"
    )
    return runs[["run_id", "metrics.mae", "params.data_version"]]

## Check if a new data version changed performance
runs_old = find_runs_by_data_hash("abc123")
runs_new = find_runs_by_data_hash("def456")
print(f"Old data runs: {len(runs_old)}, New data runs: {len(runs_new)}")
```text

---

## 3.6 CI/CD for Data

Automated data validation pipelines ensure data quality before training.

```python

## .github/workflows/data-ci.yml

## name: Data CI

## on:

##   push:

##     paths: ['data/**', 'params.yaml']
#

## jobs:

##   validate-data:

##     runs-on: ubuntu-latest

##     steps:

##       - uses: actions/checkout@v4

##       - uses: actions/setup-python@v5

##       - run: |

##           pip install dvc pandas scipy

##           dvc pull

##       - name: Run data validation

##         run: python scripts/validate_data.py

##       - name: Check for drift

##         run: python scripts/check_drift.py --reference production

##       - name: Push new data version

##         run: |

##           dvc add data/

##           git config user.name "CI Bot"

##           git commit -m "auto: update data version [skip ci]"

##           dvc push

##           git push
```text

```python

## scripts/validate_data.py — data quality checks
import pandas as pd
import numpy as np
import sys

class DataValidator:
    def __init__(self, config: dict = None):
        self.config = config or {}
        self.errors = []

    def check_missing_values(self, df: pd.DataFrame, threshold: float = 0.5):
        """Fail if any column has more than threshold fraction missing."""
        for col in df.columns:
            missing_ratio = df[col].isna().mean()
            if missing_ratio > threshold:
                self.errors.append(f"Column {col}: {missing_ratio:.1%} missing (>{threshold:.0%})")

    def check_unique_constraints(self, df: pd.DataFrame, constraints: dict):
        """Check unique constraints on specified columns."""
        for col, expected_unique in constraints.items():
            actual = df[col].nunique()
            if actual != expected_unique:
                self.errors.append(f"Column {col}: {actual} unique values (expected {expected_unique})")

    def check_value_ranges(self, df: pd.DataFrame, ranges: dict):
        """Check numerical columns stay within expected ranges."""
        for col, (low, high) in ranges.items():
            if col in df.columns:
                if df[col].min() < low or df[col].max() > high:
                    self.errors.append(f"Column {col}: range [{df[col].min()}, {df[col].max()}] outside [{low}, {high}]")

    def check_row_count(self, df: pd.DataFrame, min_rows: int, max_rows: int):
        """Check dataset size is within expected bounds."""
        if len(df) < min_rows:
            self.errors.append(f"Dataset has {len(df)} rows, minimum is {min_rows}")
        if len(df) > max_rows:
            self.errors.append(f"Dataset has {len(df)} rows, maximum is {max_rows}")

    def validate(self, data_path: str) -> bool:
        df = pd.read_parquet(data_path)
        print(f"Validating {data_path}: {df.shape}")

        self.check_missing_values(df, self.config.get("max_missing_ratio", 0.5))
        self.check_unique_constraints(df, self.config.get("unique_constraints", {}))
        self.check_value_ranges(df, self.config.get("value_ranges", {}))
        self.check_row_count(df, self.config.get("min_rows", 100), self.config.get("max_rows", 1_000_000))

        if self.errors:
            print("VALIDATION FAILED:")
            for err in self.errors:
                print(f"  ❌ {err}")
            return False
        print("✅ Data validation passed")
        return True

validator = DataValidator({
    "max_missing_ratio": 0.3,
    "min_rows": 5000,
    "max_rows": 100000,
    "value_ranges": {"price": [0, 1_000_000], "sqft": [100, 10000]}
})

if not validator.validate("data/features/train_features.parquet"):
    sys.exit(1)
```text

**Automated data version promotion**:

```python
def promote_data_version(data_version, validation_report):
    """Promote a data version if validation passes."""
    if validation_report["passed"]:
        # Tag in Git
        subprocess.run(["git", "tag", f"data-{data_version}"], check=True)
        # Update production data pointer
        subprocess.run(["dvc", "tag", "production", data_version], check=True)
        print(f"Promoted data version {data_version} to production")
    else:
        print(f"Data version {data_version} failed validation, not promoting")
```text

---

## TypeScript Parallel

```typescript
// TypeScript data version tracking
import { createHash } from "crypto";
import { readFileSync } from "fs";

interface DataVersion {
  filePath: string;
  hash: string;
  version: string;
  sizeBytes: number;
  timestamp: string;
}

class DataVersionTracker {
  private versions: DataVersion[] = [];

  snapshot(filePath: string, versionTag?: string): DataVersion {
    const content = readFileSync(filePath);
    const hash = createHash("sha256").update(content).digest("hex");
    const entry: DataVersion = {
      filePath,
      hash,
      version: versionTag || hash.slice(0, 12),
      sizeBytes: content.length,
      timestamp: new Date().toISOString(),
    };
    this.versions.push(entry);
    return entry;
  }

  getLatest(filePath: string): DataVersion | undefined {
    return this.versions.filter(v => v.filePath === filePath).pop();
  }
}
```text

---

## Summary

- Data versioning is essential for ML reproducibility alongside code versioning
- DVC extends Git with data versioning using hash-based file tracking
- DVC pipelines define reproducible data processing stages with dependency tracking
- Data drift detection compares distribution statistics across versions
- Link data version hashes to experiment runs for complete lineage
- CI/CD for data validates quality, checks drift, and promotes versions
- Data validation includes missing values, uniqueness, range constraints, and row counts
- Partial pipeline rebuilds save time by only re-running changed stages
- Remote storage (S3, GCS) enables team-wide access to versioned datasets
- Automated data promotion tags validated datasets for production use

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Starting a new dataset | `dvc add data/` | Tracking large files in Git |
| Reproducing a pipeline | `dvc repro` | Manual re-running stages |
| Team data sharing | Remote storage (S3/GCS) | Shared drives or email |
| Training reproducibility | Log data hash in MLflow | Assuming data hasn't changed |
| Data quality | Automated validation in CI | Manual inspection only |
| Drift monitoring | Compare new data vs reference | Ignoring distribution shifts |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s03-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Why can't you just use Git for data versioning?
  </summary>
  <div class="tp-qa-answer">
    <p>Git is designed for text files with reasonable sizes. Large datasets (GBs/TBs) bloat Git repositories, cause slow clones, and exceed platform limits (GitHub's 100MB file limit). DVC stores data pointers in Git while the actual data goes to object storage (S3, GCS), keeping the repo lightweight.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does DVC track data versions?
  </summary>
  <div class="tp-qa-answer">
    <p>DVC computes a hash (MD5) of the file content, stores the file in the cache directory (<code>.dvc/cache</code>) keyed by hash, and creates a small <code>.dvc</code> file (metadata pointer) that goes into Git. When pushed, the cached files are uploaded to remote storage. When pulled, DVC downloads files matching the <code>.dvc</code> file's hash.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is a DVC pipeline and why use it?
  </summary>
  <div class="tp-qa-answer">
    <p>A DVC pipeline is a series of stages defined in <code>dvc.yaml</code> where each stage has inputs (dependencies), a command, and outputs. DVC tracks the hashes of all dependencies and outputs. When you run <code>dvc repro</code>, it only re-runs stages whose dependencies changed. This enables reproducible and efficient data processing.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you detect data drift between dataset versions?
  </summary>
  <div class="tp-qa-answer">
    <p>Use statistical tests: Kolmogorov-Smirnov for numeric features (compares distributions), Chi-square for categorical features. If the p-value is below a threshold (e.g., 0.05), the feature has drifted. Monitor drift over time and retrain models when drift exceeds acceptable levels. Combine with MLflow by logging drift metrics per experiment.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you link data version to an MLflow experiment?
  </summary>
  <div class="tp-qa-answer">
    <p>Compute a hash of the DataFrame (using <code>pd.util.hash_pandas_object</code>) and log it as a parameter (<code>data_hash</code>). Also log <code>data_version</code> and <code>data_path</code>. This enables querying all runs that used a specific data version. The complete lineage is: Git commit → DVC data hash → MLflow run ID.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What checks should a data validation pipeline include?
  </summary>
  <div class="tp-qa-answer">
    <p>Essential checks: (1) missing value ratios per column, (2) column value ranges (min/max within expected bounds), (3) unique constraint violations, (4) row count within expected range, (5) schema validation (column names and types), (6) class balance for classification targets. Failures should block the pipeline and alert the team.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the difference between DVC and Git LFS?
  </summary>
  <div class="tp-qa-answer">
    <p>Git LFS replaces large files with pointer files and stores content on a Git LFS server — it's tightly coupled to Git. DVC works alongside Git but stores data in any remote storage (S3, GCS, SSH). DVC also provides pipeline capabilities (dependency tracking, stage reproduction) that Git LFS lacks. DVC is preferred for ML workflows.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle data versioning in a team?
  </summary>
  <div class="tp-qa-answer">
    <p>Set up a shared remote storage (S3 bucket or GCS), configure DVC remotes for each developer, and use <code>dvc pull</code> before working. Define data promotion workflows: developers work on feature branches, data CI validates changes, and merged data is tagged as <code>data-prod</code>. Use <code>dvc tag</code> to mark production data snapshots.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you version data schemas alongside data?
  </summary>
  <div class="tp-qa-answer">
    <p>Use a schema definition file (JSON Schema or Great Expectations) tracked in Git alongside the <code>.dvc</code> files. The schema defines expected column names, types, value ranges, and constraints. CI validates incoming data against the schema before processing. Schema changes trigger pipeline re-runs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s03-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What metrics should you track when monitoring data drift?
  </summary>
  <div class="tp-qa-answer">
    <p>Track per-feature: KS statistic (numeric) or chi-square (categorical), p-value, mean shift, standard deviation shift, missing rate change. Aggregate metrics: fraction of drifted features, overall drift score (average of per-feature drift), and data quality score (combination of completeness, consistency, and validity checks).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does DVC store in Git?
a) The actual dataset files
b) Metadata pointer files (`.dvc`)
c) Compressed data archives
d) Only the data schema

<details class="tp-qa-card" data-qid="mlops-s03-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Metadata pointer files (`.dvc`)</strong></p><p>DVC stores small <code>.dvc</code> metadata files in Git while data files go to remote storage.</p></div></details>

**Q2**: What command reproduces a DVC pipeline?
a) `dvc run`
b) `dvc repro`
c) `dvc pipeline`
d) `dvc execute`

<details class="tp-qa-card" data-qid="mlops-s03-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) <code>dvc repro</code></strong></p><p><code>dvc repro</code> re-runs all pipeline stages whose dependencies changed since the last run.</p></div></details>

**Q3**: Which statistical test is used for numeric feature drift detection?
a) Chi-square test
b) Kolmogorov-Smirnov test
c) T-test
d) ANOVA

<details class="tp-qa-card" data-qid="mlops-s03-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Kolmogorov-Smirnov test</strong></p><p>The KS test compares two distributions without assuming normality, making it ideal for numeric feature drift.</p></div></details>

**Q4**: How do you link a data version to an MLflow experiment?
a) Log data version as a tag
b) Log data hash as a parameter
c) Store data path in run name
d) All of the above

<details class="tp-qa-card" data-qid="mlops-s03-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) All of the above</strong></p><p>Logging data version, hash, and path as parameters/tags provides complete data lineage.</p></div></details>

**Q5**: What is the primary benefit of DVC partial pipeline rebuilds?
a) Faster iteration by skipping unchanged stages
b) Better model accuracy
c) Smaller dataset storage
d) Automatic hyperparameter tuning

<details class="tp-qa-card" data-qid="mlops-s03-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Faster iteration by skipping unchanged stages</strong></p><p>DVC detects changed dependencies and only re-runs affected stages, saving significant time.</p></div></details>

## Exercises

**Easy** — Initialize DVC in a new project, add a CSV file to tracking, and push to a local remote.

**Medium** — Create a DVC pipeline with two stages: preprocess (drop missing values) and feature engineering (create interaction terms). Run and validate with `dvc repro`.

**Medium** — Implement a DataDriftDetector that uses KS-test on 3 numeric features and chi-square on 2 categorical features. Test with two versions of a dataset.

**Hard** — Build a complete CI workflow that validates data quality, detects drift against production data, and promotes the data version only if all checks pass.

**Hard** — Create a DataAwareExperiment class that computes a DataFrame hash, logs it to MLflow, and enables querying all runs by data hash.

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
- [ ] Have questions ready about how the company uses 16-mlops-production> **Next**: [04 — CI/CD for AI →](04-ci-cd-for-ai.md)
