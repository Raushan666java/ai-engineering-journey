---
slug: /16-mlops/ci-cd-for-ai
title: "Ci Cd For Ai"
sidebar_label: "Ci Cd For Ai"
sidebar_position: 4
---

# CI/CD for AI

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand unique CI/CD requirements for ML systems |
| LO2 | Design multi-stage AI pipelines for code, data, and model validation |
| LO3 | Implement automated model training and evaluation in CI |
| LO4 | Set up model deployment gates with quality thresholds |
| LO5 | Integrate model registry promotion into CD pipelines |
| LO6 | Build monitoring and rollback into deployment workflows |

## Introduction

MLOps bridges the gap between experiment and production. Experiment tracking, CI/CD, model serving, and drift monitoring keep AI systems reliable. This module covers the operational side of AI engineering.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding ci cd for ai is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how ci cd for ai works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | AI CI/CD vs Traditional CI/CD | Data, model, and code as artifacts |
| 4.2 | Pipeline Architecture | Stages: validate, train, evaluate, deploy |
| 4.3 | Automated Training | Parameterized training jobs in CI |
| 4.4 | Evaluation Gates | Metric thresholds, A/B comparison |
| 4.5 | Model Registry Promotion | Stage transitions via CD |
| 4.6 | Deployment & Rollback | Blue-green, canary, rollback strategies |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Code Push] --> B[Data Validation]
    B --> C[Model Training]
    C --> D[Evaluation]
    D --> E{Threshold Met?}
    E -->|Yes| F[Register Model]
    E -->|No| G[Fail Pipeline]
    F --> H[Staging Deploy]
    H --> I[Canary Test]
    I --> J{Monitor OK?}
    J -->|Yes| K[Production Deploy]
    J -->|No| L[Rollback]
```

## 4.1 AI CI/CD vs Traditional CI/CD

Traditional CI/CD pipelines compile code, run unit tests, and deploy artifacts. AI CI/CD pipelines must also validate data, train models, evaluate performance, manage model versions, and handle deployment of both code and model artifacts.

```mermaid
flowchart TB
    subgraph Traditional[Traditional CI/CD]
        T1[Code] --> T2[Build]
        T2 --> T3[Test]
        T3 --> T4[Deploy]
    end
    subgraph AICD[AI CI/CD]
        A1[Code + Data + Config] --> A2[Data Validation]
        A2 --> A3[Train Model]
        A3 --> A4[Evaluate]
        A4 --> A5{Pass Gate?}
        A5 -->|Yes| A6[Package Model + Code]
        A6 --> A7[Deploy to Staging]
        A7 --> A8[Shadow/Canary Test]
        A8 --> A9{Promote?}
        A9 -->|Yes| A10[Production Deploy]
        A9 -->|No| A11[Rollback]
    end
```

**Key differences**:

| Aspect | Traditional CI/CD | AI CI/CD |
|--------|-------------------|----------|
| Artifact | Compiled binary | Model + code + metadata |
| Tests | Unit/integration tests | Data validation + model eval |
| Deployment | Binary rollout | Model version routing |
| Rollback | Code revert | Model version revert |
| Monitoring | App health metrics | Model drift + performance |

```python

## Traditional CI pipeline

## on: push

## jobs:

##   test:

##     runs-on: ubuntu-latest

##     steps:

##       - run: npm test

##       - run: npm build

##       - run: deploy

## AI CI pipeline

## on: push

## jobs:

##   validate-data:

##     runs-on: ubuntu-latest

##     steps:

##       - run: python scripts/validate_data.py

##   train-evaluate:

##     needs: validate-data

##     runs-on: [self-hosted, gpu]

##     steps:

##       - run: python train.py --config params.yaml

##       - run: python evaluate.py --threshold 0.95

##   deploy:

##     needs: train-evaluate

##     runs-on: ubuntu-latest

##     steps:

##       - run: python deploy_model.py --stage staging
```

---

## 4.2 Pipeline Architecture

A well-designed AI CI/CD pipeline has distinct stages for code, data, training, evaluation, and deployment.

```python

## pipeline_builder.py — Define and execute AI CI/CD pipelines
import os
import subprocess
import json
from datetime import datetime
from typing import Dict, List, Callable

class PipelineStage:
    def __init__(self, name: str, action: Callable, dependencies: List[str] = None):
        self.name = name
        self.action = action
        self.dependencies = dependencies or []
        self.status = "pending"
        self.output = {}

class AIPipeline:
    def __init__(self, name: str, config_path: str):
        self.name = name
        self.config = json.load(open(config_path))
        self.stages: Dict[str, PipelineStage] = {}
        self.run_id = datetime.utcnow().strftime("%Y%m%d_%H%M%S")

    def add_stage(self, stage: PipelineStage):
        self.stages[stage.name] = stage

    def run(self):
        print(f"Pipeline: {self.name} (run_id={self.run_id})")
        for name, stage in self.stages.items():
            deps_ok = all(self.stages[d].status == "success" for d in stage.dependencies)
            if not deps_ok:
                stage.status = "skipped"
                print(f"  ⏭️ {name} — dependencies not met")
                continue
            try:
                print(f"  ▶️ {name}")
                stage.output = stage.action(self)
                stage.status = "success"
                print(f"  ✅ {name}")
            except Exception as e:
                stage.status = "failed"
                print(f"  ❌ {name}: {e}")
                break

## Define pipeline stages
pipeline = AIPipeline("model-retrain", "params.yaml")

def validate_data(pipe):
    print("Validating data...")
    subprocess.run(["python", "scripts/validate_data.py"], check=True)
    return {"data_version": "v2.1", "rows": 50000}

def train_model(pipe):
    print("Training model...")
    subprocess.run(["python", "train.py", "--config", pipe.config_path], check=True)
    return {"model_path": "models/model.pkl", "mae": 2.3}

def evaluate_model(pipe):
    print("Evaluating model...")
    result = subprocess.run(["python", "evaluate.py"], capture_output=True, text=True, check=True)
    return json.loads(result.stdout)

def deploy_staging(pipe):
    print("Deploying to staging...")
    subprocess.run(["python", "deploy.py", "--stage", "staging"], check=True)
    return {"deployment": "staging", "url": "https://staging.api.example.com"}

pipeline.add_stage(PipelineStage("validate_data", validate_data))
pipeline.add_stage(PipelineStage("train", train_model, dependencies=["validate_data"]))
pipeline.add_stage(PipelineStage("evaluate", evaluate_model, dependencies=["train"]))
pipeline.add_stage(PipelineStage("deploy_staging", deploy_staging, dependencies=["evaluate"]))

pipeline.run()
```

---

## 4.3 Automated Training

Parameterized training jobs allow CI to train models with different configurations.

```python

## train.py — parameterized training script for CI
import argparse
import json
import os
import mlflow
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, r2_score
import pandas as pd
import numpy as np

def train(config):
    mlflow.set_experiment(config.get("experiment_name", "ci-training"))

    with mlflow.start_run() as run:
        # Log CI metadata
        mlflow.set_tag("ci.commit_sha", os.environ.get("GITHUB_SHA", "local"))
        mlflow.set_tag("ci.run_id", os.environ.get("GITHUB_RUN_ID", "local"))
        mlflow.set_tag("ci.branch", os.environ.get("GITHUB_REF_NAME", "local"))

        # Log config
        mlflow.log_params(config)

        # Load data
        df = pd.read_csv(config["data_path"])
        X = df.drop("target", axis=1)
        y = df["target"]

        # Log data hash
        data_hash = pd.util.hash_pandas_object(df).sum()
        mlflow.log_param("data_hash", str(data_hash))

        # Split
        from sklearn.model_selection import train_test_split
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=config.get("test_size", 0.2), random_state=42
        )

        # Select model
        model_type = config.get("model_type", "random_forest")
        if model_type == "random_forest":
            model = RandomForestRegressor(
                n_estimators=config.get("n_estimators", 100),
                max_depth=config.get("max_depth", 10),
                random_state=42
            )
        elif model_type == "gradient_boosting":
            model = GradientBoostingRegressor(
                n_estimators=config.get("n_estimators", 100),
                learning_rate=config.get("learning_rate", 0.1),
                random_state=42
            )
        else:
            raise ValueError(f"Unknown model type: {model_type}")

        model.fit(X_train, y_train)

        # Evaluate
        preds = model.predict(X_test)
        mae = mean_absolute_error(y_test, preds)
        r2 = r2_score(y_test, preds)

        mlflow.log_metric("mae", mae)
        mlflow.log_metric("r2", r2)
        mlflow.sklearn.log_model(model, "model")

        return {"mae": mae, "r2": r2, "run_id": run.info.run_id}

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", default="params.json")
    args = parser.parse_args()

    with open(args.config) as f:
        config = json.load(f)

    result = train(config)
    print(json.dumps(result, indent=2))
```

**GitHub Actions matrix for hyperparameter sweeps**:

```yaml

## .github/workflows/train-matrix.yml

## name: Model Training Matrix

## on:

##   workflow_dispatch:

##     inputs:

##       experiment_name:

##         description: "Experiment name"

##         required: true

## jobs:

##   train:

##     strategy:

##       matrix:

##         model_type: [random_forest, gradient_boosting]

##         n_estimators: [100, 200, 300]

##         max_depth: [5, 10, 15]

##     runs-on: ubuntu-latest

##     steps:

##       - uses: actions/checkout@v4

##       - uses: actions/setup-python@v5

##       - run: |

##           pip install -r requirements.txt

##           python train.py --config <(echo '{

##             "model_type": "${{ matrix.model_type }}",

##             "n_estimators": ${{ matrix.n_estimators }},

##             "max_depth": ${{ matrix.max_depth }},

##             "experiment_name": "${{ github.event.inputs.experiment_name }}"

##           }')
```

---

## 4.4 Evaluation Gates

Evaluation gates are quality thresholds that models must pass before deployment. These prevent underperforming models from reaching production.

```python

## evaluate.py — evaluation gate logic
import json
import sys
import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, mean_absolute_error

class EvaluationGate:
    def __init__(self, thresholds: dict):
        self.thresholds = thresholds
        self.results = {}

    def evaluate_classification(self, y_true, y_pred, y_proba=None):
        self.results = {
            "accuracy": float(accuracy_score(y_true, y_pred)),
            "precision": float(precision_score(y_true, y_pred, average="weighted")),
            "recall": float(recall_score(y_true, y_pred, average="weighted")),
            "f1": float(f1_score(y_true, y_pred, average="weighted"))
        }
        return self._check_thresholds()

    def evaluate_regression(self, y_true, y_pred):
        self.results = {
            "mae": float(mean_absolute_error(y_true, y_pred)),
            "rmse": float(np.sqrt(np.mean((y_true - y_pred) ** 2)))
        }
        return self._check_thresholds()

    def _check_thresholds(self) -> bool:
        for metric, value in self.results.items():
            if metric in self.thresholds:
                expected = self.thresholds[metric]
                if isinstance(expected, dict):
                    if "min" in expected and value < expected["min"]:
                        print(f"❌ {metric}: {value:.4f} < min {expected['min']}")
                        return False
                    if "max" in expected and value > expected["max"]:
                        print(f"❌ {metric}: {value:.4f} > max {expected['max']}")
                        return False
                else:
                    if value < expected:
                        print(f"❌ {metric}: {value:.4f} < {expected}")
                        return False
        print("✅ All evaluation gates passed")
        return True

## Example thresholds
gates = EvaluationGate({
    "mae": {"max": 3.0},
    "accuracy": 0.85,
    "f1": 0.80
})

## Simulate evaluation
y_true = np.random.rand(100)
y_pred = y_true + np.random.randn(100) * 0.1
passed = gates.evaluate_regression(y_true, y_pred)

if not passed:
    sys.exit(1)
```

**Comparison gates: new model vs current production**:

```python
def compare_with_production(new_metrics: dict, production_metrics: dict, improvement_threshold: float = 0.02):
    """Compare new model against production baseline."""
    results = {}
    all_pass = True

    for metric in new_metrics:
        if metric in production_metrics:
            improvement = (production_metrics[metric] - new_metrics[metric]) / abs(production_metrics[metric])
            # For metrics where lower is better (mae, rmse)
            if metric in ["mae", "rmse", "loss"]:
                improvement = -improvement
            met = improvement >= improvement_threshold
            results[metric] = {
                "new": new_metrics[metric],
                "production": production_metrics[metric],
                "improvement": improvement,
                "threshold_met": met
            }
            if not met:
                all_pass = False
                print(f"⚠️ {metric}: improvement {improvement:.1%} < threshold {improvement_threshold:.0%}")

    return {"passed": all_pass, "comparisons": results}

comparison = compare_with_production(
    {"mae": 2.1, "r2": 0.89},
    {"mae": 2.5, "r2": 0.87},
    improvement_threshold=0.05
)
print(json.dumps(comparison, indent=2))
```

---

## 4.5 Model Registry Promotion

CD pipelines automate model version transitions through registry stages.

```python

## deploy_model.py — automated model promotion
import mlflow
import json
import sys
from mlflow.tracking import MlflowClient

class ModelPromoter:
    def __init__(self, tracking_uri=None):
        self.client = MlflowClient(tracking_uri=tracking_uri)

    def register_model(self, run_id: str, model_name: str, artifact_path: str = "model"):
        """Register a model from a run."""
        model_uri = f"runs:/{run_id}/{artifact_path}"
        result = mlflow.register_model(model_uri, model_name)
        print(f"Registered model {model_name} version {result.version}")
        return result.version

    def promote_to_staging(self, model_name: str, version: int):
        """Promote model version to Staging."""
        self.client.transition_model_version_stage(
            name=model_name,
            version=version,
            stage="Staging"
        )
        print(f"Model {model_name} v{version} → Staging")

    def promote_to_production(self, model_name: str, version: int):
        """Archive current production, promote new version."""
        # Archive current production
        latest_prod = self.client.get_latest_versions(model_name, stages=["Production"])
        for mv in latest_prod:
            self.client.transition_model_version_stage(
                name=model_name,
                version=mv.version,
                stage="Archived"
            )
            print(f"Archived previous production v{mv.version}")

        # Promote new version
        self.client.transition_model_version_stage(
            name=model_name,
            version=version,
            stage="Production"
        )
        print(f"Model {model_name} v{version} → Production")

    def deploy_with_gates(self, run_id: str, model_name: str, evaluations: dict, thresholds: dict):
        """Full promotion workflow with gates."""
        # Check gates
        for metric, value in evaluations.items():
            if metric in thresholds:
                if value < thresholds[metric]:
                    print(f"Gate failed: {metric} = {value} < {thresholds[metric]}")
                    return False

        # Register and promote
        version = self.register_model(run_id, model_name)
        self.promote_to_staging(model_name, version)

        # Staging validation (simplified)
        print("Running staging validation...")

        self.promote_to_production(model_name, version)
        return True

promoter = ModelPromoter()

## In CI pipeline:
promoter.deploy_with_gates(
    run_id="abc123def456",
    model_name="PricePredictor",
    evaluations={"mae": 2.1, "r2": 0.89},
    thresholds={"mae": 3.0, "r2": 0.80}
)
```

---

## 4.6 Deployment & Rollback

Production AI systems need deployment strategies that minimize risk and enable instant rollback.

```python
import json
import time
import random
from datetime import datetime

class ModelRouter:
    """Routes requests between model versions for canary/blue-green deployment."""

    def __init__(self):
        self.models = {}  # version -> endpoint
        self.routing = {}  # version -> traffic_percentage

    def add_version(self, version: str, endpoint: str, traffic_pct: float = 0):
        self.models[version] = endpoint
        self.routing[version] = traffic_pct

    def route(self, request_id: str) -> str:
        """Route request based on traffic percentages."""
        r = random.random() * 100
        cumulative = 0
        for version, pct in self.routing.items():
            cumulative += pct
            if r <= cumulative:
                return self.models[version]
        return list(self.models.values())[0]  # default

    def set_traffic_split(self, primary_version: str, canary_version: str, canary_pct: float):
        self.routing = {primary_version: 100 - canary_pct, canary_version: canary_pct}
        print(f"Routing: {primary_version}={100-canary_pct}%, {canary_version}={canary_pct}%")

class CanaryDeployer:
    def __init__(self, router: ModelRouter, metric_thresholds: dict):
        self.router = router
        self.thresholds = metric_thresholds
        self.metrics_history = []

    def deploy_canary(self, primary_version: str, canary_version: str):
        """Start canary deployment at 1% traffic."""
        self.router.set_traffic_split(primary_version, canary_version, 1.0)
        print(f"Canary {canary_version} deployed at 1%")

    def increase_traffic(self):
        """Double canary traffic."""
        current_canary = self.router.routing.get(
            [v for v in self.router.routing if v != list(self.router.models.keys())[0]][0],
            0
        )
        new_pct = min(100, current_canary * 2)
        primary = [v for v in self.router.models if v != canary_version][0]
        canary_version = [v for v in self.router.models if v != primary][0]
        self.router.set_traffic_split(primary, canary_version, new_pct)

    def monitor_and_decide(self, metrics: dict):
        self.metrics_history.append(metrics)
        # Check thresholds
        for metric, value in metrics.items():
            if metric in self.thresholds:
                if value > self.thresholds[metric]:
                    print(f"❌ {metric} = {value} exceeds threshold {self.thresholds[metric]}")
                    return "rollback"
        return "continue"

    def rollback(self, primary_version: str):
        """Route all traffic back to primary."""
        self.router.routing = {primary_version: 100}
        print(f"⚠️ Rolled back to {primary_version}")

## Simulated deployment
router = ModelRouter()
router.add_version("v1", "http://model-v1:8080")
router.add_version("v2", "http://model-v2:8080")

deployer = CanaryDeployer(router, {"error_rate": 0.05, "latency_p95": 1000})
deployer.deploy_canary("v1", "v2")

for step in range(5):
    time.sleep(0.5)
    metrics = {"error_rate": random.uniform(0.01, 0.06), "latency_p95": random.uniform(200, 1100)}
    decision = deployer.monitor_and_decide(metrics)
    if decision == "rollback":
        deployer.rollback("v1")
        break
    print(f"Step {step}: metrics OK, increasing traffic")
    deployer.increase_traffic()
```

**Rollback automation**:

```python
class RollbackManager:
    def __init__(self, registry_client: MlflowClient, model_name: str):
        self.client = registry_client
        self.model_name = model_name

    def get_deployment_history(self, n=5):
        """Get last n production versions."""
        versions = self.client.get_latest_versions(self.model_name, stages=["Production", "Archived"])
        history = sorted(versions, key=lambda v: v.creation_timestamp, reverse=True)
        return [v for v in history if v.current_stage == "Archived"][:n]

    def rollback_to(self, target_version: int):
        """Rollback to a specific version."""
        # Archive current
        current = self.client.get_latest_versions(self.model_name, stages=["Production"])
        for mv in current:
            self.client.transition_model_version_stage(
                name=self.model_name, version=mv.version, stage="Archived"
            )
        # Promote target
        self.client.transition_model_version_stage(
            name=self.model_name, version=target_version, stage="Production"
        )
        print(f"Rolled back to {self.model_name} v{target_version}")

    def auto_rollback(self, alert_payload: dict):
        """Trigger rollback from monitoring alert."""
        if alert_payload.get("severity") == "critical":
            history = self.get_deployment_history()
            if history:
                self.rollback_to(history[0].version)
                return True
        return False
```

---

## TypeScript Parallel

```typescript
// TypeScript CI/CD pipeline definition
interface PipelineStage {
  name: string;
  command: string;
  dependencies: string[];
  timeout: number;
}

interface PipelineConfig {
  name: string;
  stages: PipelineStage[];
  on: { branch: string; paths: string[] };
  thresholds: Record<string, number>;
}

class AIPipelineRunner {
  async execute(config: PipelineConfig): Promise<void> {
    console.log(`Running pipeline: ${config.name}`);
    const results: Record<string, boolean> = {};
    for (const stage of config.stages) {
      const depsPass = stage.dependencies.every(d => results[d]);
      if (!depsPass) { console.log(`Skip ${stage.name}`); continue; }
      try {
        const { execSync } = require("child_process");
        execSync(stage.command, { timeout: stage.timeout });
        results[stage.name] = true;
        console.log(`✅ ${stage.name}`);
      } catch (e) {
        console.log(`❌ ${stage.name}: ${e}`);
        break;
      }
    }
  }
}
```

---

## Summary

- AI CI/CD differs from traditional CI/CD by including data validation, model training, evaluation gates, and model registry promotion
- Multi-stage pipelines separate concerns: validate, train, evaluate, deploy
- Parameterized training scripts enable CI-driven experiments and matrix sweeps
- Evaluation gates enforce quality thresholds before model deployment
- Model registry promotion automates stage transitions from Staging to Production
- Canary deployment gradually shifts traffic to new model versions
- Blue-green deployment maintains two identical environments for instant switching
- Rollback automation must be instant when monitoring alerts trigger
- CI metadata (commit SHA, run ID) should be logged in every experiment run
- Model comparison gates ensure new models outperform current production before promotion

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Setting up AI CI | Multi-stage pipeline with gates | Single-stage train-and-deploy |
| Model quality | Evaluation gates with thresholds | Deploying without validation |
| Deployment risk | Canary or blue-green deployment | Direct production deployment |
| Rollback | Automated rollback on alert | Manual version reverts |
| Hyperparameter sweeps | GitHub Actions matrix strategy | Sequential training runs |
| Model registry | Automated promotion via CD | Manual staging transitions |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How is AI CI/CD different from traditional CI/CD?
  </summary>
  <div class="tp-qa-answer">
    <p>AI CI/CD adds four unique stages: (1) Data validation — check quality and schema, (2) Model training — parameterized training job, (3) Model evaluation — accuracy/MAE gates, (4) Model deployment — version routing, canary, and rollback. Traditional CI/CD only handles code compilation, unit tests, and binary deployment.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are evaluation gates in AI CI/CD?
  </summary>
  <div class="tp-qa-answer">
    <p>Evaluation gates are quality thresholds that a model must pass before progressing through the pipeline. For example: MAE < 3.0, accuracy > 85%, or improvement over current production > 2%. If any gate fails, the pipeline stops and the model is not deployed. This prevents underperforming models from reaching users.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How does canary deployment work for ML models?
  </summary>
  <div class="tp-qa-answer">
<p>Canary deployment routes a small percentage of traffic (e.g., 1%) to the new model while the rest uses the current production model. The system monitors error.
rates, latency, and model-specific metrics. If metrics stay healthy, traffic is gradually increased (e.g., doubled every N minutes). If issues arise,.
traffic is instantly routed back to the old model.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is blue-green deployment for ML?
  </summary>
  <div class="tp-qa-answer">
<p>Blue-green deployment maintains two identical environments (Blue = current production, Green = new version). Traffic is switched from Blue to Green atomically via a load balancer. If issues appear,.
traffic switches back to Blue. For ML, this requires both environments to serve predictions from the same data source and have matching infrastructure.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you automate model registry promotion in CD?
  </summary>
  <div class="tp-qa-answer">
    <p>After evaluation gates pass, the CD pipeline calls <code>mlflow.register_model()</code> to create a registry version. Then <code>MlflowClient.transition_model_version_stage()</code> moves it to Staging. After staging validation (canary, shadow testing), the same API promotes to Production while archiving the previous production version.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What CI metadata should be logged with each training run?
  </summary>
  <div class="tp-qa-answer">
    <p>Always log: <code>ci.commit_sha</code> (Git commit hash), <code>ci.branch</code>, <code>ci.run_id</code> (GitHub Actions run ID), <code>ci.workflow</code> (workflow name), and <code>ci.trigger</code> (push/scheduled/manual). These provide full traceability from model artifact back to the code and data that produced it.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the difference between shadow and canary deployment?
  </summary>
  <div class="tp-qa-answer">
<p>Shadow deployment runs the new model alongside production but returns the production model's output to users. The shadow model's predictions are logged for.
comparison without affecting user experience. Canary deployment actually serves the new model's predictions to a subset of users. Shadow is safer but.
gives no real user feedback; canary provides real feedback with controlled risk.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle model rollback in production?
  </summary>
  <div class="tp-qa-answer">
<p>Model rollback requires: (1) Versioned model artifacts stored in the registry, (2) Traffic router that can switch between versions instantly, (3) Monitoring alerts that trigger automatic rollback when metrics degrade,.
(4) Rollback log recording the event. The registry archives the current Production version and promotes the previous version back to Production.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is a matrix strategy in GitHub Actions for ML?
  </summary>
  <div class="tp-qa-answer">
    <p>A matrix strategy runs multiple job variations in parallel using different parameter combinations. For ML, you can define matrix axes for model type, hyperparameters, and data versions. GitHub Actions automatically creates one job per combination. This enables efficient hyperparameter sweeps in CI without writing custom orchestration code.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s04-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What should a post-deployment validation check include?
  </summary>
  <div class="tp-qa-answer">
<p>Post-deployment validation should check: (1) Model endpoint responds correctly with healthy latency, (2) Prediction distribution matches expected patterns (no empty/null outputs),.
(3) Error rate within baseline, (4) Data drift metrics compared to training data, (5) Business metrics (e.g., conversion rate if applicable). Run this for.
a few minutes before fully promoting.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the first stage in an AI CI/CD pipeline?
a) Model deployment
b) Data validation
c) Model training
d) Code compilation

<details class="tp-qa-card" data-qid="mlops-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Data validation</strong></p><p>Data validation comes first to ensure data quality before investing compute in training.</p></div></details>

**Q2**: What does an evaluation gate do?
a) Routes traffic to canary models
b) Enforces quality thresholds before deployment
c) Monitors model latency
d) Archives old model versions

<details class="tp-qa-card" data-qid="mlops-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Enforces quality thresholds before deployment</strong></p><p>Evaluation gates check that model metrics meet minimum thresholds before allowing promotion.</p></div></details>

**Q3**: Which deployment strategy routes traffic to a new model gradually?
a) Blue-green
b) Canary
c) Shadow
d) Direct

<details class="tp-qa-card" data-qid="mlops-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Canary</strong></p><p>Canary deployment gradually shifts traffic percentage from old to new model version.</p></div></details>

**Q4**: Which MLflow method transitions a model version between stages?
a) `mlflow.transition_stage()`
b) `MlflowClient.transition_model_version_stage()`
c) `mlflow.promote_model()`
d) `mlflow.update_stage()`

<details class="tp-qa-card" data-qid="mlops-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) <code>MlflowClient.transition_model_version_stage()</code></strong></p><p>This client method transitions a model version to a new stage (Staging, Production, Archived).</p></div></details>

**Q5**: What is the purpose of shadow deployment?
a) Serve predictions to real users safely
b) Compare model outputs without affecting users
c) Deploy models in a different region
d) Run unit tests on model code

<details class="tp-qa-card" data-qid="mlops-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Compare model outputs without affecting users</strong></p><p>Shadow deployment runs the new model alongside production but only returns production outputs to users.</p></div></details>

## Exercises

**Easy** — Write a GitHub Actions workflow that runs data validation (check file exists and has rows) on every push to the `data/` directory.

**Medium** — Implement an EvaluationGate class that checks MAE < threshold and accuracy > threshold. Test with sample metrics.

**Medium** — Build a CanaryDeployer that starts at 1% traffic, monitors error rate, and doubles traffic every minute if error rate < 5%.

**Hard** — Create a complete ModelPromoter class that registers a model from an MLflow run, promotes to Staging, runs validation, and promotes to Production.

**Hard** — Design and implement a multi-stage AI CI/CD pipeline with: data validation, matrix training (3 configs), model comparison, canary deployment, and automated rollback.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design
