# Deployment Best Practices — A/B Testing, Monitoring, Model Versioning, Rollback

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Design A/B testing frameworks for comparing model versions in production |
| LO2 | Implement monitoring dashboards for model performance and drift detection |
| LO3 | Manage model versioning with registry, lineage, and metadata tracking |
| LO4 | Design rollback strategies for safe model deployment |
| LO5 | Implement canary deployments and shadow testing patterns |
| LO6 | Performance benchmark models under production workloads |

## Introduction

Understanding deployment best practices is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering deployment best practices.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding deployment best practices is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how deployment best practices works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind deployment best practices
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | A/B Testing | Traffic splitting, statistical significance, metrics comparison |
| 10.2 | Monitoring | Latency, throughput, error rate, data drift, concept drift |
| 10.3 | Model Versioning | Registry, semantic versioning, lineage tracking, metadata |
| 10.4 | Rollback Strategies | Blue-green, canary, feature flags, automated rollback |
| 10.5 | Canary Deployments | Gradual traffic shifting, health checks, auto-promotion |
| 10.6 | Shadow Testing | Dark launches, traffic mirroring, offline validation |
| 10.7 | Performance Benchmarking | Throughput, latency percentiles, resource profiling, load testing |

## Chapter Roadmap

```mermaid
flowchart TB
    A[Model v2 Ready] --> B{Deploy Strategy?}
    B -->|Low Risk| C[Shadow Test]
    B -->|Medium Risk| D[Canary Deploy]
    B -->|High Confidence| E[Blue-Green]
    C --> F[Mirror Traffic]
    F --> G[Compare Offline]
    G --> H{Pass Criteria?}
    D --> I[5% Traffic]
    I --> J[Monitor Metrics]
    J --> K{Healthy?}
    K -->|Yes| L[Gradually 25%, 50%, 100%]
    K -->|No| M[Rollback Instantly]
    E --> N[Switch Router]
    N --> O[Monitor]
    O --> P{Rollback Needed?}
    P -->|Yes| Q[Switch Back]
    P -->|No| R[Keep v2]
    H -->|Yes| I
    H -->|No| M
    L & R --> S[Promote to Stable]
    S --> T[Update Registry]
    T --> U[Archive v1]
```text

## 10.1 A/B Testing

A/B testing compares two model versions (A = control/current, B = treatment/candidate) by splitting real traffic and measuring key metrics.

```python
import time
import json
import random
import statistics
import numpy as np
from typing import Any, Callable, Dict, List, Optional, Tuple
from dataclasses import dataclass, field
from enum import Enum
from collections import defaultdict
from pathlib import Path


class ExperimentStatus(Enum):
    RUNNING = "running"
    COMPLETED = "completed"
    ROLLED_BACK = "rolled_back"
    FAILED = "failed"


@dataclass
class ExperimentConfig:
    name: str
    model_a_name: str
    model_b_name: str
    traffic_split: float = 0.5  # Fraction to model B
    min_sample_size: int = 1000
    confidence_level: float = 0.95
    metrics: List[str] = field(default_factory=lambda: ["accuracy", "latency_ms"])
    duration_hours: int = 24


@dataclass
class ExperimentResult:
    config: ExperimentConfig
    samples_a: List[dict] = field(default_factory=list)
    samples_b: List[dict] = field(default_factory=list)
    status: ExperimentStatus = ExperimentStatus.RUNNING
    start_time: float = field(default_factory=time.time)


class ABTestFramework:
    def __init__(self):
        self.experiments: Dict[str, ExperimentResult] = {}

    def create_experiment(self, config: ExperimentConfig) -> str:
        result = ExperimentResult(config=config)
        self.experiments[config.name] = result
        return config.name

    def assign_treatment(self, experiment_name: str, user_id: str) -> str:
        experiment = self.experiments[experiment_name]
        if experiment.status != ExperimentStatus.RUNNING:
            return experiment.config.model_a_name
        # Deterministic assignment based on user_id hash
        hash_val = hash(f"{experiment_name}:{user_id}") % 1000
        if hash_val < experiment.config.traffic_split * 1000:
            return experiment.config.model_b_name
        return experiment.config.model_a_name

    def record_result(self, experiment_name: str, model_name: str,
                      result: dict):
        experiment = self.experiments[experiment_name]
        if model_name == experiment.config.model_a_name:
            experiment.samples_a.append(result)
        else:
            experiment.samples_b.append(result)

    def analyze(self, experiment_name: str) -> dict:
        experiment = self.experiments[experiment_name]
        a = experiment.samples_a
        b = experiment.samples_b
        analysis = {}
        for metric in experiment.config.metrics:
            vals_a = [s.get(metric, 0) for s in a]
            vals_b = [s.get(metric, 0) for s in b]
            if not vals_a or not vals_b:
                analysis[metric] = {"error": "insufficient data"}
                continue
            mean_a = statistics.mean(vals_a)
            mean_b = statistics.mean(vals_b)
            improvement = (mean_b - mean_a) / mean_a * 100
            p_value = self._t_test(vals_a, vals_b)
            significant = p_value < (1 - experiment.config.confidence_level)
            analysis[metric] = {
                "mean_a": mean_a,
                "mean_b": mean_b,
                "improvement_pct": improvement,
                "p_value": p_value,
                "significant": significant,
                "sample_size_a": len(vals_a),
                "sample_size_b": len(vals_b),
            }
        return analysis

    def _t_test(self, a: List[float], b: List[float]) -> float:
        import scipy.stats as stats
        try:
            _, p_value = stats.ttest_ind(a, b)
            return float(p_value)
        except ImportError:
            return 0.5

    def evaluate_winning_model(self, experiment_name: str) -> Optional[str]:
        analysis = self.analyze(experiment_name)
        wins_a = 0
        wins_b = 0
        for metric, result in analysis.items():
            if result.get("significant"):
                if result.get("improvement_pct", 0) > 0:
                    wins_b += 1
                else:
                    wins_a += 1
        config = self.experiments[experiment_name].config
        if wins_b > wins_a:
            return config.model_b_name
        elif wins_a > wins_b:
            return config.model_a_name
        return None


class ABTestMonitor:
    def __init__(self, framework: ABTestFramework):
        self.framework = framework

    def generate_report(self, experiment_name: str) -> str:
        analysis = self.framework.analyze(experiment_name)
        experiment = self.framework.experiments[experiment_name]
        lines = [
            f"=== A/B Test Report: {experiment_name} ===",
            f"Models: {experiment.config.model_a_name} vs {experiment.config.model_b_name}",
            f"Traffic split: {experiment.config.traffic_split:.0%} to B",
            f"Status: {experiment.status.value}",
            f"Samples: A={len(experiment.samples_a)}, B={len(experiment.samples_b)}",
            "",
        ]
        for metric, result in analysis.items():
            if "error" in result:
                lines.append(f"  {metric}: {result['error']}")
            else:
                sig = "SIGNIFICANT" if result["significant"] else "not significant"
                lines.append(f"  {metric}: A={result['mean_a']:.4f}, "
                             f"B={result['mean_b']:.4f}, "
                             f"Δ={result['improvement_pct']:+.2f}% ({sig})")
        winner = self.framework.evaluate_winning_model(experiment_name)
        if winner:
            lines.append(f"\nWinner: {winner}")
        return "\n".join(lines)


## Demo
ab_test = ABTestFramework()
config = ExperimentConfig(
    name="v1_vs_v2_classifier", model_a_name="resnet_v1", model_b_name="resnet_v2",
    traffic_split=0.3, min_sample_size=100
)
exp_name = ab_test.create_experiment(config)

for user_id in range(200):
    treatment = ab_test.assign_treatment(exp_name, f"user_{user_id}")
    latency = 45 + random.gauss(0, 5) if "v1" in treatment else 42 + random.gauss(0, 5)
    accuracy = 0.88 + random.gauss(0, 0.02) if "v1" in treatment else 0.91 + random.gauss(0, 0.02)
    ab_test.record_result(exp_name, treatment, {"accuracy": accuracy, "latency_ms": latency})

report = ABTestMonitor(ab_test).generate_report(exp_name)
print(report)
```text

---

## 10.2 Monitoring

Production model monitoring tracks performance metrics, data drift, and system health.

```python
@dataclass
class MetricValue:
    value: float
    timestamp: float
    labels: Dict[str, str] = field(default_factory=dict)


class MetricsCollector:
    def __init__(self, window_size: int = 1000):
        self.window_size = window_size
        self.metrics: Dict[str, List[MetricValue]] = defaultdict(list)

    def record(self, name: str, value: float, labels: dict = None):
        if labels is None:
            labels = {}
        self.metrics[name].append(MetricValue(value, time.time(), labels))
        if len(self.metrics[name]) > self.window_size:
            self.metrics[name].pop(0)

    def get_statistics(self, name: str, recent_seconds: float = 300) -> dict:
        values = self.metrics.get(name, [])
        cutoff = time.time() - recent_seconds
        recent = [m.value for m in values if m.timestamp >= cutoff]
        if not recent:
            return {}
        return {
            "count": len(recent),
            "mean": statistics.mean(recent),
            "median": statistics.median(recent),
            "p50": np.percentile(recent, 50),
            "p90": np.percentile(recent, 90),
            "p95": np.percentile(recent, 95),
            "p99": np.percentile(recent, 99),
            "min": min(recent),
            "max": max(recent),
            "std": statistics.stdev(recent) if len(recent) > 1 else 0,
        }


class DriftDetector:
    def __init__(self, reference_distribution: np.ndarray, threshold: float = 0.05):
        self.reference = reference_distribution
        self.threshold = threshold

    def ks_test(self, current: np.ndarray) -> dict:
        from scipy.stats import ks_2samp
        try:
            stat, p_value = ks_2samp(self.reference, current)
            drift_detected = p_value < self.threshold
            return {"statistic": float(stat), "p_value": float(p_value),
                    "drift_detected": drift_detected}
        except ImportError:
            return {"drift_detected": False, "error": "scipy not available"}

    def population_stability_index(self, current: np.ndarray,
                                   n_bins: int = 10) -> float:
        ref_hist, edges = np.histogram(self.reference, bins=n_bins, density=True)
        cur_hist, _ = np.histogram(current, bins=edges, density=True)
        eps = 1e-10
        ref_hist = ref_hist + eps
        cur_hist = cur_hist + eps
        psi = np.sum((cur_hist - ref_hist) * np.log(cur_hist / ref_hist))
        return float(psi)


class MonitoringDashboard:
    def __init__(self, collector: MetricsCollector):
        self.collector = collector

    def summary(self) -> dict:
        keys = list(self.collector.metrics.keys())
        result = {}
        for key in keys:
            result[key] = self.collector.get_statistics(key)
        return result

    def alert_if_needed(self, latency_threshold_ms: float = 500,
                        error_rate_threshold: float = 0.05) -> List[str]:
        alerts = []
        latency = self.collector.get_statistics("inference_latency_ms")
        if latency and latency.get("p99", 0) > latency_threshold:
            alerts.append(f"ALERT: P99 latency {latency['p99']:.0f}ms exceeds {latency_threshold}ms")
        errors = self.collector.get_statistics("error_rate")
        if errors and errors.get("mean", 0) > error_rate_threshold:
            alerts.append(f"ALERT: Error rate {errors['mean']:.2%} exceeds {error_rate_threshold:.2%}")
        return alerts


class ModelMonitor:
    def __init__(self, model_name: str, version: str):
        self.model_name = model_name
        self.version = version
        self.metrics = MetricsCollector()
        self.reference_predictions: List[float] = []
        self.reference_features: Optional[np.ndarray] = None

    def log_prediction(self, features: np.ndarray, prediction: Any,
                       latency_ms: float, error: bool = False):
        self.metrics.record("inference_latency_ms", latency_ms,
                            {"model": self.model_name, "version": self.version})
        self.metrics.record("prediction_count", 1,
                            {"model": self.model_name})
        if error:
            self.metrics.record("error_count", 1,
                                {"model": self.model_name})
        if isinstance(prediction, (int, float)):
            self.reference_predictions.append(float(prediction))

    def compute_accuracy(self, ground_truth: List[float],
                         predictions: List[float]) -> dict:
        if not ground_truth or not predictions:
            return {"error": "no data"}
        from sklearn.metrics import accuracy_score, precision_recall_fscore_support
        try:
            acc = accuracy_score(ground_truth, predictions)
            precision, recall, f1, _ = precision_recall_fscore_support(
                ground_truth, predictions, average="weighted"
            )
            return {"accuracy": float(acc), "precision": float(precision),
                    "recall": float(recall), "f1": float(f1)}
        except ImportError:
            correct = sum(1 for g, p in zip(ground_truth, predictions) if g == p)
            return {"accuracy": correct / len(ground_truth)}


monitor = ModelMonitor("resnet_classifier", "v2.1.0")
for _ in range(100):
    feat = np.random.randn(10)
    pred = 1 if np.mean(feat) > 0 else 0
    monitor.log_prediction(feat, pred, latency_ms=45 + random.random() * 10)

stats = monitor.metrics.get_statistics("inference_latency_ms")
print(f"Latency: p50={stats['p50']:.1f}ms, p95={stats['p95']:.1f}ms, p99={stats['p99']:.1f}ms")
print(f"QPS: {stats['count'] / 300:.1f} req/s (last 5min)")
```text

---

## 10.3 Model Versioning

Model versioning tracks the full lifecycle of deployed models including metadata, lineage, and performance history.

```python
@dataclass
class ModelMetadata:
    name: str
    version: str
    framework: str = "pytorch"
    architecture: str = ""
    training_dataset: str = ""
    training_date: str = ""
    accuracy: float = 0.0
    model_size_mb: float = 0.0
    input_shape: tuple = ()
    output_classes: int = 0
    git_commit_hash: str = ""
    experiment_id: str = ""
    tags: Dict[str, str] = field(default_factory=dict)


class ModelRegistry:
    def __init__(self, storage_path: str = "model_registry"):
        self.storage_path = Path(storage_path)
        self.storage_path.mkdir(parents=True, exist_ok=True)
        self.registry_file = self.storage_path / "registry.json"
        self.registry: Dict[str, List[ModelMetadata]] = self._load()

    def _load(self) -> Dict[str, List[ModelMetadata]]:
        if self.registry_file.exists():
            with open(self.registry_file) as f:
                data = json.load(f)
            return {k: [ModelMetadata(**m) for m in v] for k, v in data.items()}
        return {}

    def _save(self):
        data = {k: [vars(m) for m in v] for k, v in self.registry.items()}
        with open(self.registry_file, "w") as f:
            json.dump(data, f, indent=2, default=str)

    def register(self, metadata: ModelMetadata):
        if metadata.name not in self.registry:
            self.registry[metadata.name] = []
        self.registry[metadata.name].append(metadata)
        self.registry[metadata.name].sort(
            key=lambda m: [int(x) for x in m.version.split(".")],
            reverse=True
        )
        self._save()

    def get_latest(self, name: str) -> Optional[ModelMetadata]:
        versions = self.registry.get(name, [])
        return versions[0] if versions else None

    def get_version(self, name: str, version: str) -> Optional[ModelMetadata]:
        for m in self.registry.get(name, []):
            if m.version == version:
                return m
        return None

    def list_models(self) -> List[str]:
        return list(self.registry.keys())

    def list_versions(self, name: str) -> List[str]:
        return [m.version for m in self.registry.get(name, [])]

    def delete_version(self, name: str, version: str) -> bool:
        models = self.registry.get(name, [])
        self.registry[name] = [m for m in models if m.version != version]
        self._save()
        return True

    def compare_versions(self, name: str, v1: str, v2: str) -> dict:
        m1 = self.get_version(name, v1)
        m2 = self.get_version(name, v2)
        if not m1 or not m2:
            return {"error": "version not found"}
        return {
            f"{v1}_accuracy": m1.accuracy,
            f"{v2}_accuracy": m2.accuracy,
            "accuracy_diff": m2.accuracy - m1.accuracy,
            f"{v1}_size_mb": m1.model_size_mb,
            f"{v2}_size_mb": m2.model_size_mb,
        }


class ModelLineage:
    def __init__(self):
        self.graph: Dict[str, List[str]] = {}

    def add_edge(self, parent_version: str, child_version: str):
        if parent_version not in self.graph:
            self.graph[parent_version] = []
        self.graph[parent_version].append(child_version)

    def get_parents(self, version: str) -> List[str]:
        return [k for k, v in self.graph.items() if version in v]

    def get_children(self, version: str) -> List[str]:
        return self.graph.get(version, [])

    def get_lineage_path(self, start: str, end: str) -> List[str]:
        visited = set()
        path = []

        def dfs(current: str) -> bool:
            if current == end:
                path.append(current)
                return True
            visited.add(current)
            for child in self.graph.get(current, []):
                if child not in visited:
                    if dfs(child):
                        path.insert(0, current)
                        return True
            return False

        dfs(start)
        return path


registry = ModelRegistry()
meta_v1 = ModelMetadata(name="sentiment_model", version="1.0.0",
                        architecture="BiLSTM", accuracy=0.89,
                        training_dataset="imdb_reviews",
                        training_date="2025-06-01", model_size_mb=45.2)
meta_v2 = ModelMetadata(name="sentiment_model", version="2.0.0",
                        architecture="BERT-base", accuracy=0.93,
                        training_dataset="imdb_reviews+amazon",
                        training_date="2025-07-15", model_size_mb=440.0)
registry.register(meta_v1)
registry.register(meta_v2)
print(f"Models: {registry.list_models()}")
print(f"Latest: {registry.get_latest('sentiment_model').version}")
print(f"Comparison: {registry.compare_versions('sentiment_model', '1.0.0', '2.0.0')}")
```text

---

## 10.4 Rollback Strategies

Rollback strategies ensure quick recovery when a new model version causes issues.

```python
class DeploymentState(Enum):
    STABLE = "stable"
    CANDIDATE = "candidate"
    ROLLING_OUT = "rolling_out"
    ROLLING_BACK = "rolling_back"
    FAILED = "failed"


@dataclass
class Deployment:
    model_name: str
    version: str
    state: DeploymentState = DeploymentState.CANDIDATE
    traffic_percentage: int = 0
    healthy: bool = True
    deploy_time: float = field(default_factory=time.time)
    metrics_snapshot: Dict[str, float] = field(default_factory=dict)


class RollbackManager:
    def __init__(self):
        self.active_deployments: Dict[str, Deployment] = {}
        self.history: List[Deployment] = []
        self.rollback_thresholds = {
            "error_rate": 0.05,
            "latency_p99_ms": 500,
            "accuracy_drop": 0.02,
        }

    def deploy_candidate(self, model_name: str, version: str) -> Deployment:
        dep = Deployment(model_name=model_name, version=version)
        self.active_deployments[model_name] = dep
        return dep

    def check_health(self, model_name: str, metrics: Dict[str, float]) -> bool:
        dep = self.active_deployments.get(model_name)
        if not dep:
            return False
        healthy = True
        issues = []
        if metrics.get("error_rate", 0) > self.rollback_thresholds["error_rate"]:
            healthy = False
            issues.append(f"error_rate={metrics['error_rate']:.2%}")
        if metrics.get("latency_p99_ms", 0) > self.rollback_thresholds["latency_p99_ms"]:
            healthy = False
            issues.append(f"latency={metrics['latency_p99_ms']:.0f}ms")
        dep.healthy = healthy
        dep.metrics_snapshot = metrics
        if not healthy:
            self.rollback(model_name, f"Health check failed: {', '.join(issues)}")
        return healthy

    def rollback(self, model_name: str, reason: str) -> Deployment:
        dep = self.active_deployments.get(model_name)
        if dep:
            dep.state = DeploymentState.ROLLING_BACK
            dep.traffic_percentage = 0
            print(f"Rolled back {model_name} v{dep.version}: {reason}")
            self.history.append(dep)
        return dep

    def promote_to_stable(self, model_name: str) -> Deployment:
        dep = self.active_deployments.get(model_name)
        if dep:
            dep.state = DeploymentState.STABLE
            dep.traffic_percentage = 100
            print(f"Promoted {model_name} v{dep.version} to stable")
        return dep

    def get_rollback_history(self, model_name: str) -> List[Deployment]:
        return [d for d in self.history if d.model_name == model_name]


class BlueGreenDeployment:
    def __init__(self, router: Callable):
        self.router = router
        self.blue_version: Optional[str] = None  # Current stable
        self.green_version: Optional[str] = None  # Candidate

    def switch(self) -> str:
        self.blue_version, self.green_version = self.green_version, self.blue_version
        print(f"Switched: active={self.blue_version}, standby={self.green_version}")
        return self.blue_version

    def deploy_green(self, version: str):
        self.green_version = version
        print(f"Green (standby) updated to {version}")

    def get_active(self) -> Optional[str]:
        return self.blue_version


class FeatureFlagDeployment:
    def __init__(self):
        self.flags: Dict[str, float] = {}  # flag_name -> rollout_percentage

    def set_flag(self, flag_name: str, percentage: int):
        self.flags[flag_name] = min(100, max(0, percentage))

    def is_enabled(self, flag_name: str, user_id: str) -> bool:
        percentage = self.flags.get(flag_name, 0)
        if percentage >= 100:
            return True
        if percentage <= 0:
            return False
        return (hash(f"{flag_name}:{user_id}") % 100) < percentage


rollback_mgr = RollbackManager()
dep = rollback_mgr.deploy_candidate("classifier", "2.1.0")
print(f"Deployed {dep.model_name} v{dep.version}")

health_metrics = {"error_rate": 0.03, "latency_p99_ms": 320, "accuracy": 0.92}
is_healthy = rollback_mgr.check_health("classifier", health_metrics)
print(f"Health check: {'PASS' if is_healthy else 'FAIL'}")

bad_metrics = {"error_rate": 0.12, "latency_p99_ms": 800, "accuracy": 0.85}
is_healthy = rollback_mgr.check_health("classifier", bad_metrics)
print(f"Health check: {'PASS' if is_healthy else 'FAIL'}")
```text

---

## 10.5 Canary Deployments

Canary deployments gradually shift traffic to a new model while monitoring for issues.

```python
class CanaryDeployer:
    def __init__(self, name: str, stable_version: str,
                 candidate_version: str, steps: List[int] = None):
        self.name = name
        self.stable_version = stable_version
        self.candidate_version = candidate_version
        self.steps = steps or [5, 10, 25, 50, 100]
        self.current_step = 0
        self.candidate_pct = 0
        self.healthy = True
        self.metrics_history: List[dict] = []

    def advance(self) -> int:
        if self.current_step >= len(self.steps):
            return 100
        self.candidate_pct = self.steps[self.current_step]
        self.current_step += 1
        return self.candidate_pct

    def rollback(self) -> int:
        self.candidate_pct = 0
        self.current_step = 0
        print(f"Canary {self.name} rolled back to 0%")
        return 0

    def check_and_promote(self, metrics: Dict[str, float],
                          thresholds: Dict[str, float]) -> str:
        self.metrics_history.append(metrics)
        issues = []
        for metric, value in metrics.items():
            threshold = thresholds.get(metric)
            if threshold and value > threshold:
                issues.append(f"{metric}={value:.3f} > {threshold:.3f}")
        if issues:
            self.healthy = False
            self.rollback()
            return f"ROLLED_BACK: {', '.join(issues)}"
        if self.candidate_pct >= 100:
            return "PROMOTED_TO_STABLE"
        next_pct = self.advance()
        return f"ADVANCED_TO_{next_pct}%"

    def get_status(self) -> dict:
        return {
            "name": self.name,
            "stable": self.stable_version,
            "candidate": self.candidate_version,
            "traffic_pct": self.candidate_pct,
            "step": self.current_step,
            "healthy": self.healthy,
        }


class CanaryAutomation:
    def __init__(self, deployer: CanaryDeployer, metrics_source: Callable,
                 health_check_interval_sec: int = 30):
        self.deployer = deployer
        self.metrics_source = metrics_source
        self.interval = health_check_interval_sec

    def run(self, max_duration_sec: int = 3600) -> str:
        start = time.time()
        while time.time() - start < max_duration_sec:
            status = self.deployer.get_status()
            if status["traffic_pct"] >= 100:
                return "PROMOTED"
            if not status["healthy"]:
                return "ROLLED_BACK"
            metrics = self.metrics_source(self.deployer.name)
            thresholds = {"error_rate": 0.03, "p99_latency_ms": 400}
            result = self.deployer.check_and_promote(metrics, thresholds)
            print(f"Canary check: {result}")
            if "ROLLED_BACK" in result or "PROMOTED" in result:
                return result
            time.sleep(self.interval)
        return "TIMEOUT"


def mock_metrics_source(model_name: str) -> dict:
    return {
        "error_rate": random.uniform(0.001, 0.02),
        "p99_latency_ms": random.uniform(50, 200),
        "accuracy": random.uniform(0.90, 0.95),
    }


canary = CanaryDeployer("text_classifier", "v1", "v2", steps=[10, 30, 60, 100])
print(f"Initial: {canary.get_status()}")
canary.advance()
print(f"After advance: {canary.get_status()}")

result = canary.check_and_promote({"error_rate": 0.01, "p99_latency_ms": 120},
                                  {"error_rate": 0.03, "p99_latency_ms": 400})
print(f"Check result: {result}")
```text

---

## 10.6 Shadow Testing

Shadow testing runs a candidate model alongside the production model without serving its results to users.

```python
@dataclass
class ShadowResult:
    timestamp: float
    request_id: str
    stable_prediction: Any
    shadow_prediction: Any
    stable_latency_ms: float
    shadow_latency_ms: float
    stable_confidence: float
    shadow_confidence: float
    features_hash: str
    agreement: bool


class ShadowTestRunner:
    def __init__(self, stable_model_fn: Callable, shadow_model_fn: Callable):
        self.stable_model = stable_model_fn
        self.shadow_model = shadow_model_fn
        self.results: List[ShadowResult] = []
        self.agreements: List[bool] = []

    def run_shadow(self, features: np.ndarray, request_id: str) -> ShadowResult:
        # Stable model runs in production path
        t0 = time.perf_counter()
        stable_pred, stable_conf = self.stable_model(features)
        stable_latency = (time.perf_counter() - t0) * 1000

        # Shadow model runs in parallel (doesn't affect response)
        t0 = time.perf_counter()
        shadow_pred, shadow_conf = self.shadow_model(features)
        shadow_latency = (time.perf_counter() - t0) * 1000

        agreement = stable_pred == shadow_pred
        result = ShadowResult(
            timestamp=time.time(),
            request_id=request_id,
            stable_prediction=stable_pred,
            shadow_prediction=shadow_pred,
            stable_latency_ms=stable_latency,
            shadow_latency_ms=shadow_latency,
            stable_confidence=stable_conf,
            shadow_confidence=shadow_conf,
            features_hash=hash(features.tobytes()),
            agreement=agreement,
        )
        self.results.append(result)
        self.agreements.append(agreement)
        return result

    def analyze(self) -> dict:
        if not self.results:
            return {}
        n = len(self.results)
        agreements_pct = sum(self.agreements) / n * 100
        stable_latencies = [r.stable_latency_ms for r in self.results]
        shadow_latencies = [r.shadow_latency_ms for r in self.results]
        return {
            "total_requests": n,
            "agreement_pct": round(agreements_pct, 2),
            "stable_latency_p50": round(np.median(stable_latencies), 2),
            "stable_latency_p99": round(np.percentile(stable_latencies, 99), 2),
            "shadow_latency_p50": round(np.median(shadow_latencies), 2),
            "shadow_latency_p99": round(np.percentile(shadow_latencies, 99), 2),
            "disagreements": n - sum(self.agreements),
        }

    def get_disagreements(self, limit: int = 10) -> List[ShadowResult]:
        return [r for r in self.results if not r.agreement][:limit]

    def save_results(self, path: str = "shadow_results.jsonl"):
        with open(path, "w") as f:
            for r in self.results:
                f.write(json.dumps(vars(r, default=str)) + "\n")
        print(f"Saved {len(self.results)} shadow results to {path}")


def stable_model_fn(x):
    pred = 1 if np.mean(x) > 0 else 0
    conf = 0.8 + random.random() * 0.15
    return pred, conf


def shadow_model_fn(x):
    pred = 1 if np.sum(x) > 0.5 else 0  # Slightly different logic
    conf = 0.7 + random.random() * 0.25
    return pred, conf


shadow = ShadowTestRunner(stable_model_fn, shadow_model_fn)
for i in range(500):
    features = np.random.randn(10)
    shadow.run_shadow(features, f"req_{i}")

analysis = shadow.analyze()
print(f"Shadow test completed: {analysis['total_requests']} requests")
print(f"Agreement: {analysis['agreement_pct']:.1f}%")
print(f"Disagreements: {analysis['disagreements']}")
print(f"Stable latency: p50={analysis['stable_latency_p50']}ms, "
      f"p99={analysis['stable_latency_p99']}ms")
print(f"Shadow latency: p50={analysis['shadow_latency_p50']}ms, "
      f"p99={analysis['shadow_latency_p99']}ms")
```text

---

## 10.7 Performance Benchmarking

Rigorous benchmarking ensures models meet production latency and throughput requirements.

```python
class LoadTester:
    def __init__(self, model_fn: Callable, input_generator: Callable):
        self.model_fn = model_fn
        self.input_generator = input_generator

    def benchmark(self, num_requests: int = 1000, concurrency: int = 10
                  ) -> dict:
        import concurrent.futures
        latencies = []
        errors = 0

        def single_request(_):
            try:
                t0 = time.perf_counter()
                self.model_fn(self.input_generator())
                return (time.perf_counter() - t0) * 1000
            except Exception:
                return None

        with concurrent.futures.ThreadPoolExecutor(max_workers=concurrency) as ex:
            futures = [ex.submit(single_request, i) for i in range(num_requests)]
            for f in concurrent.futures.as_completed(futures):
                result = f.result()
                if result is not None:
                    latencies.append(result)
                else:
                    errors += 1

        latencies.sort()
        return {
            "total_requests": num_requests,
            "successful": len(latencies),
            "errors": errors,
            "error_rate": errors / num_requests,
            "min_ms": min(latencies),
            "max_ms": max(latencies),
            "mean_ms": statistics.mean(latencies),
            "median_ms": statistics.median(latencies),
            "p50_ms": latencies[len(latencies) // 2],
            "p90_ms": latencies[int(len(latencies) * 0.90)],
            "p95_ms": latencies[int(len(latencies) * 0.95)],
            "p99_ms": latencies[int(len(latencies) * 0.99)],
            "throughput_qps": len(latencies) / (sum(latencies) / 1000)
            if latencies else 0,
        }


class ResourceProfiler:
    @staticmethod
    def profile_cpu_memory(model_fn: Callable, input_data: Any,
                           iterations: int = 100) -> dict:
        import psutil
        import os
        process = psutil.Process(os.getpid())
        cpu_samples = []
        mem_samples = []
        for _ in range(iterations):
            cpu_before = process.cpu_percent(interval=None)
            mem_before = process.memory_info().rss / 1024 / 1024
            model_fn(input_data)
            cpu_samples.append(max(0, process.cpu_percent(interval=None) - cpu_before))
            mem_samples.append(max(0, process.memory_info().rss / 1024 / 1024 - mem_before))
        return {
            "cpu_avg_pct": statistics.mean(cpu_samples),
            "cpu_max_pct": max(cpu_samples),
            "memory_avg_mb": statistics.mean(mem_samples),
            "memory_max_mb": max(mem_samples),
            "memory_leak_detected": max(mem_samples) > statistics.mean(mem_samples) * 2,
        }


class BenchmarkReport:
    def __init__(self):
        self.results: Dict[str, dict] = {}

    def add_result(self, model_name: str, version: str, result: dict):
        key = f"{model_name}:{version}"
        self.results[key] = result

    def compare(self, model_a: str, model_b: str) -> str:
        a = self.results.get(model_a, {})
        b = self.results.get(model_b, {})
        if not a or not b:
            return "Insufficient data for comparison"
        lines = [
            f"Model A: {model_a}",
            f"Model B: {model_b}",
            f"{'Metric':<20} {'Model A':<12} {'Model B':<12} {'Δ':<12}",
            "-" * 56,
        ]
        metrics = ["p50_ms", "p99_ms", "error_rate", "throughput_qps"]
        for metric in metrics:
            va = a.get(metric, "N/A")
            vb = b.get(metric, "N/A")
            if isinstance(va, (int, float)) and isinstance(vb, (int, float)):
                delta = ((vb - va) / va * 100) if va != 0 else 0
                delta_str = f"{delta:+.1f}%"
            else:
                delta_str = "N/A"
            lines.append(f"{metric:<20} {str(va):<12} {str(vb):<12} {delta_str:<12}")
        return "\n".join(lines)
    

def mock_model(x):
    time.sleep(random.uniform(0.01, 0.05))
    return np.random.randn(5)


tester = LoadTester(mock_model, lambda: np.random.randn(10))
results = tester.benchmark(num_requests=200, concurrency=5)
print(f"Benchmark: p50={results['p50_ms']:.1f}ms, p99={results['p99_ms']:.1f}ms")
print(f"Throughput: {results['throughput_qps']:.0f} QPS")
print(f"Error rate: {results['error_rate']:.2%}")
```text

---

## Summary

Deploying ML models in production requires robust validation and operational discipline. A/B testing compares model variants on live traffic using statistical significance tests. Monitoring tracks prediction distributions, latency, throughput, and resource utilization in real time. Model versioning with semantic tags and metadata enables reproducibility and rollback. Rollback strategies include blue-green deployments and canary releases that gradually shift traffic to new models. Shadow testing runs new models in parallel without serving their predictions, validating behavior before full rollout. Performance benchmarking establishes baselines for latency, throughput, and cost across different hardware configurations.

## Practical Takeaways

| Practice | Implementation | Key Metric to Watch |
|----------|---------------|---------------------|
| A/B Testing | 5% traffic to candidate, increase if significant | Statistical significance, lift vs control |
| Monitoring | Prometheus + Grafana for metrics and dashboards | P99 latency, error rate, request count |
| Model Versioning | Semantic versioning (major.minor.patch) in registry | Number of active versions |
| Canary Deploy | 5% → 25% → 50% → 100% with automated health checks | Error rate threshold (e.g., < 3%) |
| Blue-Green | Two identical environments, instant switch | Health check pass rate |
| Shadow Testing | Mirror 100% traffic, compare offline, don't serve shadow | Agreement rate (expect > 95%) |
| Rollback | Automated rollback on threshold breach + manual override | Mean Time To Recovery (MTTR) |
| Benchmarking | Load test at 2x expected peak QPS | P99 latency < SLA, error rate < 1% |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl14-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the difference between canary deployment and blue-green deployment?</summary><div class="tp-qa-answer"><p><strong>Blue-green</strong>: maintains two identical environments (blue = current stable, green = new version). Traffic is switched instantly from blue to green via a router/load balancer. Rolling back is a simple DNS or router switch back to blue. Pros: instant cutover, easy rollback. Cons: double infrastructure cost, no gradual traffic testing. <strong>Canary</strong>: gradually routes a small percentage of traffic (5-10%) to the new version, monitors metrics, and increases the percentage if healthy. Pros: gradual exposure, lower blast radius, real user validation. Cons: slower rollout, requires sophisticated traffic routing and monitoring. Choose blue-green when you need instant cutover and can afford duplicate infrastructure. Choose canary when you want to validate with real traffic before full rollout.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: What metrics should you monitor for a deployed ML model?</summary><div class="tp-qa-answer"><p>Three categories: <strong>System metrics</strong>: latency (p50, p95, p99), throughput (QPS), error rate, CPU/memory utilization, GPU utilization, request queue depth. <strong>Model metrics</strong>: prediction distribution (are we predicting class 1 more often?), confidence scores (is the model becoming less confident?), feature distribution drift (KS test or PSI compared to training data). <strong>Business metrics</strong>: conversion rate, user engagement, revenue impact, CTR (depending on the application). Critical: set up alerts for P99 latency exceeding SLA (e.g., > 500ms), error rate > 5%, and data drift (PSI > 0.2). Use Prometheus for collection, Grafana for dashboards, and PagerDuty for alerts. Log every prediction with features, prediction, confidence, and latency for offline analysis.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: How do you detect data drift in production?</summary><div class="tp-qa-answer"><p>Data drift occurs when the production data distribution differs from the training data. Detection methods: <strong>1) Population Stability Index (PSI)</strong>: bins features and compares the proportion of samples in each bin between reference and current. PSI > 0.25 indicates significant drift. <strong>2) Kolmogorov-Smirnov (KS) test</strong>: non-parametric test comparing two distributions. A low p-value (< 0.05) suggests drift. <strong>3) Wasserstein distance</strong>: measures the cost of transforming one distribution to another (Earth Mover's Distance). <strong>4) Feature-level monitoring</strong>: track min, max, mean, std, and missing rate for each feature. <strong>5) Prediction-level monitoring</strong>: track the fraction of predictions in each class over time. Best practice: compute reference statistics at training time on the training set, then compare sliding windows of production data (e.g., 1 hour, 1 day) against the reference.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What is shadow testing and when should you use it?</summary><div class="tp-qa-answer"><p>Shadow (mirror) testing sends a copy of production traffic to a candidate model while the stable model serves the actual response. The shadow model's outputs are logged but never returned to the user. Use shadow testing when: <strong>1)</strong> You want to validate a new model against real production traffic without any risk to users. <strong>2)</strong> The cost and latency of running both models in parallel are acceptable. <strong>3)</strong> You need to compare prediction agreement and latency characteristics at production scale. Key metrics to analyze: agreement rate (how often does the shadow match the stable?), latency impact (is the shadow model slower?), and confidence differences. If agreement is > 95% and latency is within bounds, the model is a strong candidate for canary deployment. Shadow testing is the lowest-risk evaluation method but requires 2x compute capacity.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: How do you design a model versioning strategy?</summary><div class="tp-qa-answer"><p>Use <strong>semantic versioning</strong>: major.minor.patch. Major: architectural changes, retraining on new dataset, breaking changes in input/output format. Minor: new features, hyperparameter tuning, improved accuracy. Patch: bug fixes, quantization, optimization without accuracy change. Store: <strong>1) Model file</strong> (TorchScript, ONNX, or serialized format). <strong>2) Metadata</strong>: training dataset hash, training script version, hyperparameters, accuracy metrics, model size. <strong>3) Lineage</strong>: parent model version, training job ID, git commit hash of training code. <strong>4) Deployment history</strong>: which versions were deployed, when, for how long, why they were replaced. Use a model registry (MLflow, DVC, or custom) as the single source of truth. Tag models as "staging", "production", "archived" to track lifecycle state.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: What is an automated rollback strategy and when should you trigger one?</summary><div class="tp-qa-answer"><p>Automated rollback reverts to the previous stable version when predefined health metrics breach thresholds. Typical triggers: <strong>1)</strong> Error rate > 5% (5xx responses). <strong>2)</strong> P99 latency > 2x baseline or > 500ms. <strong>3)</strong> Accuracy/quality metric drops by more than 2% (monitored via shadow scoring or human evaluation). <strong>4)</strong> Memory leak detected (memory usage grows monotonically). Implementation: the deployment pipeline monitors metrics during rollout (canary or blue-green). If any threshold is breached within the observation window (e.g., 10 minutes), the pipeline automatically switches traffic back to the previous stable version. After rollback: <strong>1)</strong> Preserve all logs for root cause analysis. <strong>2)</strong> Alert the ML/infra team. <strong>3)</strong> Block the failed version from re-deployment until explicitly approved. <strong>4)</strong> Track rollback frequency as a key MLOps metric.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How do you load test a model serving endpoint?</summary><div class="tp-qa-answer"><p>Load testing determines the maximum throughput and latency characteristics under expected and peak loads. Steps: <strong>1)</strong> Define the expected QPS (e.g., 100 req/s) and peak (e.g., 500 req/s). <strong>2)</strong> Use tools like Locust (Python), k6, or artillery to generate traffic. <strong>3)</strong> Start with low concurrency (1-5 users) and gradually increase until latency exceeds SLA or errors appear. <strong>4)</strong> Collect: throughput (QPS), latency percentiles (p50, p90, p99, p99.9), error rate, and resource utilization (CPU, GPU, memory). <strong>5)</strong> Identify the bottleneck: GPU compute-bound (increase batch size, reduce model size), memory-bound (quantize), or I/O-bound (optimize data loading). The key result is the "knee point" where latency starts increasing non-linearly with throughput. Always test at 2x the expected peak to ensure headroom for traffic spikes.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What are feature flags and how do they help in ML deployment?</summary><div class="tp-qa-answer"><p>Feature flags (toggles) allow you to control which code path or model version is active at runtime without redeploying. In ML deployment: <strong>1)</strong> Route traffic between model versions (v1 vs v2) by setting a flag percentage. <strong>2)</strong> Enable/disable specific features (e.g., a new preprocessing step) per user or per region. <strong>3)</strong> Kill switch: instantly disable a misbehaving model by setting the flag to 0%. <strong>4)</strong> Gradual rollout: increase the flag percentage from 0% to 100% over time. Benefits: no redeployment needed for configuration changes, instant rollback, per-user targeting (internal users see new model first). Implementation: use a centralized feature flag service (LaunchDarkly, Split) or a simple database/config file with caching. Feature flags are complementary to canary deployments — canary controls traffic routing, feature flags control feature activation.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How do you ensure reproducibility in model deployment?</summary><div class="tp-qa-answer"><p>Reproducibility requires tracking everything: <strong>1) Code version</strong>: git commit hash of training and deployment code. <strong>2) Data version</strong>: dataset hash or DVC/S3 version ID. <strong>3) Environment</strong>: Docker image digest, pip/conda environment freeze. <strong>4) Hyperparameters</strong>: stored in a config file (YAML/JSON) committed alongside the model. <strong>5) Random seeds</strong>: all seeds (Python, NumPy, PyTorch, CUDA) fixed and logged. <strong>6) Model weights</strong>: exact model file stored with version. <strong>7) Training pipeline</strong>: MLflow/DVC/Airflow pipeline ID that produced the model. In deployment: use Docker containers with pinned base images, lock dependency versions, and run the same container in dev/staging/prod. The model registry should store all metadata together. If a model can't be reproduced, it shouldn't be deployed to production.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl14-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How do you handle model retraining and redeployment in production?</summary><div class="tp-qa-answer"><p>Establish a retraining pipeline that: <strong>1)</strong> Automatically triggers when drift is detected (PSI > 0.2) or on a schedule (weekly/monthly). <strong>2)</strong> Uses the latest labeled data (may require human annotation). <strong>3)</strong> Runs automated validation: compare new model vs current on a held-out test set — must beat current by a minimum margin (e.g., +1% accuracy) OR demonstrate equivalent performance with lower latency/size. <strong>4)</strong> Passes through the deployment pipeline: shadow test → canary → full rollout. <strong>5)</strong> If the new model fails validation, it's automatically rejected and the team is alerted. Key metrics to track: retraining frequency, average improvement per retraining, time from data collection to deployment, and number of models rejected at each stage. Always keep the previous 2-3 model versions available for emergency rollback.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

## Chapter Quiz

**Q1**: What traffic percentage does a typical canary deployment start with?

a) 0.1%
b) 5-10%
c) 50%
d) 100%

<details class="tp-qa-card" data-qid="dl14-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 5-10%</strong></p><p>Canary deployments typically start with 5-10% of traffic to minimize blast radius while getting statistically meaningful metrics.</p></div></details>

**Q2**: What PSI value indicates significant feature drift that requires retraining?

a) PSI > 0.05
b) PSI > 0.1
c) PSI > 0.25
d) PSI > 0.5

<details class="tp-qa-card" data-qid="dl14-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) PSI > 0.25</strong></p><p>Population Stability Index > 0.25 indicates significant distribution shift. PSI < 0.1 is considered no change.</p></div></details>

**Q3**: In a blue-green deployment, what happens during a rollback?

a) The new model is retrained
b) Traffic is switched back to the blue environment
c) The canary percentage is reduced
d) A new model is deployed

<details class="tp-qa-card" data-qid="dl14-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Traffic is switched back to the blue environment</strong></p><p>Blue-green rollback is instant — just switch the router/load balancer back to the blue (previous stable) environment.</p></div></details>

**Q4**: What is the key difference between shadow testing and canary deployment?

a) Shadow uses less traffic
b) Shadow results are never served to users
c) Canary is faster to execute
d) They are the same thing

<details class="tp-qa-card" data-qid="dl14-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Shadow results are never served to users</strong></p><p>Shadow testing runs the candidate model in parallel but discards its outputs — only the stable model's predictions are served. Canary serves the candidate's predictions to a subset of users.</p></div></details>

<details class="tp-qa-card" data-qid="dl14-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) major.minor.patch</strong></p><p>Semantic versioning uses major.minor.patch: major for breaking changes, minor for improvements, patch for bug fixes.</p></div></details>

**Q5**: Which latency percentile is most commonly used in production SLAs?

a) p50
b) p90
c) p95
d) p99

<details class="tp-qa-card" data-qid="dl14-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) p99</strong></p><p>P99 latency is the standard SLA metric — 99% of requests must complete within the threshold. This catches tail latency issues that p50 would miss.</p></div></details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition**Easy** — Set up a simple A/B test between two versions of a sentiment analysis model using 20% traffic split. Generate synthetic results and determine the winner.

**Easy** — Implement a feature flag system that can route traffic between model versions based on a user ID hash.

**Medium** — Build a monitoring dashboard that tracks inference latency (p50, p95, p99), error rate, and throughput for a deployed model. Implement alerts for threshold breaches.

**Medium** — Implement a canary deployment pipeline that progresses through 5% → 25% → 50% → 100% with health checks at each stage. If error rate > 5%, auto-rollback.

**Hard** — Implement a complete deployment lifecycle: version the model in a registry → shadow test 10K requests → canary deploy → monitor for 24 hours → full rollout with automated rollback capability.

---

> **Previous**: [09-model-deployment.md](09-model-deployment.md) | **Next**: [index.md](

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 09-deep-learning-pytorch. When would you choose one approach over another?
2. Design a system that efficiently handles 09-deep-learning-pytorch at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 09-deep-learning-pytorch. What was your approach and what was the result?
2. How would you explain 09-deep-learning-pytorch to a non-technical stakeholder?

#### Microsoft Style
1. How does 09-deep-learning-pytorch integrate with enterprise systems and cloud architectures?
2. What are the security implications of 09-deep-learning-pytorch?

#### NVIDIA Style
1. How would you optimize 09-deep-learning-pytorch for GPU-accelerated computing?
2. What parallel processing patterns apply to 09-deep-learning-pytorch?

#### AI Startup Style
1. How would you implement 09-deep-learning-pytorch in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 09-deep-learning-pytorch?

### Resume Tips
- **Technical Skills**: List 09-deep-learning-pytorch under relevant technical skills
- **Project Description**: "Implemented 09-deep-learning-pytorch to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 09-deep-learning-pytorch in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 09-deep-learning-pytorch
- [ ] Practice 3-5 problems related to 09-deep-learning-pytorch
- [ ] Prepare 2 real-world examples of using 09-deep-learning-pytorch
- [ ] Know the time/space complexity of common 09-deep-learning-pytorch operations
- [ ] Have questions ready about how the company uses 09-deep-learning-pytorchindex.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 60-90 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Deep Learning with PyTorch fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master deployment best practices?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of deployment best practices helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding deployment best practices at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of deployment best practices like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply deployment best practices concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of deployment best practices?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply deployment best practices in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (24 minutes)
**Day 2**: Complete exercises and practice (24 minutes)
**Day 3**: Review flashcards and take quiz (12 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying deployment best practices to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production