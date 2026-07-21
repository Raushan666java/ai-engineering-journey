# Alerting & Incident Response

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Design alerting rules for production AI systems |
| LO2 | Implement drift, performance, and error alerts |
| LO3 | Build incident response runbooks |
| LO4 | Establish rollback procedures and postmortem culture |

## Introduction

Understanding alerting and incident response is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering alerting and incident response.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding alerting and incident response is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how alerting and incident response works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind alerting and incident response
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Alerting Strategy | Thresholds, severity levels, notification |
| 6.2 | Drift Alerts | Data drift, model drift, concept drift |
| 6.3 | Performance Alerts | Latency, throughput, error rate |
| 6.4 | Incident Response | Severity classification, runbooks |
| 6.5 | Rollback | Model rollback, data rollback, version revert |
| 6.6 | Postmortem | Blameless culture, action items |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Detection
        D[Drift Detected]
        P[Performance Degraded]
        E[Error Spike]
    end
    subgraph Response
        S[Severity Assessment]
        R[Runbook Execution]
        L[Rollback if Needed]
    end
    subgraph Learning
        PM[Postmortem]
        AI[Action Items]
    end
    D & P & E --> S --> R --> L --> PM --> AI
    AI -->|Implement Fix| D
```text

## 6.1 Alerting Strategy

### 6.1.1 Alert Manager

```python
from dataclasses import dataclass
from typing import List, Dict, Optional, Callable
import time
import json
from enum import Enum


class Severity(Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    INFO = "info"


@dataclass
class AlertConfig:
    name: str
    metric: str
    condition: str  # >, <, >=, <=, ==
    threshold: float
    severity: Severity = Severity.MEDIUM
    window_seconds: int = 60
    cooldown_seconds: int = 300
    channels: List[str] = None


class AlertManager:
    def __init__(self):
        self.rules: List[AlertConfig] = []
        self.alert_history: List[Dict] = []
        self.last_alert_time: Dict[str, float] = {}

    def add_rule(self, rule: AlertConfig):
        self.rules.append(rule)

    def evaluate(self, metric_values: Dict[str, float]) -> List[Dict]:
        fired = []

        for rule in self.rules:
            value = metric_values.get(rule.metric)
            if value is None:
                continue

            triggered = self._check_condition(value, rule.condition, rule.threshold)
            if not triggered:
                continue

            last_time = self.last_alert_time.get(rule.name, 0)
            if time.time() - last_time < rule.cooldown_seconds:
                continue

            alert = {
                "name": rule.name,
                "metric": rule.metric,
                "value": value,
                "threshold": rule.threshold,
                "severity": rule.severity.value,
                "timestamp": time.time(),
            }

            self.alert_history.append(alert)
            self.last_alert_time[rule.name] = time.time()
            fired.append(alert)

        return fired

    def _check_condition(self, value: float, condition: str,
                          threshold: float) -> bool:
        if condition == ">":
            return value > threshold
        elif condition == "<":
            return value < threshold
        elif condition == ">=":
            return value >= threshold
        elif condition == "<=":
            return value <= threshold
        elif condition == "==":
            return value == threshold
        return False

    def get_history(self, severity: str = None, limit: int = 10) -> List[Dict]:
        alerts = self.alert_history
        if severity:
            alerts = [a for a in alerts if a["severity"] == severity]
        return alerts[-limit:]

    def summary(self) -> Dict:
        counts = {}
        for alert in self.alert_history:
            sev = alert["severity"]
            counts[sev] = counts.get(sev, 0) + 1
        return {
            "total_alerts": len(self.alert_history),
            "by_severity": counts,
            "active_rules": len(self.rules),
        }


am = AlertManager()
am.add_rule(AlertConfig("High P95 Latency", "p95_latency", ">", 2000, Severity.HIGH, 60, 300))
am.add_rule(AlertConfig("Error Rate", "error_rate", ">", 0.05, Severity.CRITICAL, 60, 120))
fired = am.evaluate({"p95_latency": 2500, "error_rate": 0.08})
print(f"Fired alerts: {[a['name'] for a in fired]}")
```text

### 6.1.2 Notification Channels

```python
class NotificationChannel:
    def __init__(self, name: str):
        self.name = name
        self.message_count = 0

    def send(self, alert: Dict) -> bool:
        self.message_count += 1
        print(f"[{self.name}] {alert['severity']}: {alert['name']} = {alert['value']}")
        return True


class NotificationManager:
    def __init__(self):
        self.channels: Dict[str, NotificationChannel] = {}

    def add_channel(self, channel: NotificationChannel):
        self.channels[channel.name] = channel

    def notify(self, alert: Dict, channels: List[str] = None):
        targets = channels or list(self.channels.keys())
        for name in targets:
            if name in self.channels:
                self.channels[name].send(alert)

    def notify_severity(self, alert: Dict):
        severity_channels = {
            "critical": ["pagerduty", "slack", "email"],
            "high": ["slack", "email"],
            "medium": ["slack"],
            "low": ["email"],
            "info": [],
        }
        channels = severity_channels.get(alert["severity"], [])
        self.notify(alert, channels)


nm = NotificationManager()
nm.add_channel(NotificationChannel("slack"))
nm.add_channel(NotificationChannel("email"))
alert = {"name": "High Error Rate", "severity": "critical", "value": 0.12}
nm.notify_severity(alert)
```text

## 6.2 Drift Alerts

### 6.2.1 Data Drift Detector

```python
class DataDriftDetector:
    def __init__(self, reference_distribution: Dict[str, Dict]):
        self.reference = reference_distribution

    def detect(self, current_data: List[Dict]) -> Dict:
        if not current_data:
            return {"drift_detected": False, "message": "No data"}

        drift_results = {}

        for feature, ref_stats in self.reference.items():
            current_values = [d.get(feature) for d in current_data if d.get(feature) is not None]
            if not current_values:
                continue

            current_mean = np.mean(current_values)
            ref_mean = ref_stats.get("mean", 0)
            ref_std = ref_stats.get("std", 1)

            ps_value = abs(current_mean - ref_mean) / max(ref_std, 0.001)

            drift_results[feature] = {
                "ref_mean": round(ref_mean, 2),
                "current_mean": round(current_mean, 2),
                "ps_value": round(ps_value, 3),
                "drifted": ps_value > 0.5,
            }

        drifted_features = [f for f, r in drift_results.items() if r["drifted"]]
        return {
            "drift_detected": len(drifted_features) > 0,
            "drifted_features": drifted_features,
            "feature_results": drift_results,
        }


ref = {"input_length": {"mean": 150, "std": 50}, "sentiment": {"mean": 0.5, "std": 0.3}}
detector = DataDriftDetector(ref)
current = [{"input_length": 300, "sentiment": 0.8} for _ in range(20)]
print(f"Drift detected: {detector.detect(current)}")
```text

### 6.2.2 Model Drift Detection

```python
class ModelDriftDetector:
    def __init__(self, baseline_accuracy: float):
        self.baseline = baseline_accuracy
        self.accuracy_history: List[float] = []

    def update(self, accuracy: float):
        self.accuracy_history.append(accuracy)

    def detect_drift(self, window: int = 10, threshold: float = 0.05) -> Dict:
        if len(self.accuracy_history) < window:
            return {"drift_detected": False, "message": f"Need {window} samples, have {len(self.accuracy_history)}"}

        recent = self.accuracy_history[-window:]
        recent_avg = np.mean(recent)
        drift = self.baseline - recent_avg

        return {
            "drift_detected": drift > threshold,
            "baseline_accuracy": round(self.baseline, 3),
            "recent_avg_accuracy": round(recent_avg, 3),
            "drift": round(drift, 3),
            "threshold": threshold,
            "alert": drift > threshold,
        }


mdd = ModelDriftDetector(baseline_accuracy=0.92)
for _ in range(15):
    mdd.update(np.random.normal(0.90, 0.03))
print(f"Model drift: {mdd.detect_drift(window=10)}")
```text

## 6.3 Performance Alerts

### 6.3.1 Performance Thresholds

```python
class PerformanceThresholds:
    def __init__(self):
        self.thresholds = {
            "p95_latency_ms": {"warning": 1000, "critical": 3000},
            "error_rate": {"warning": 0.01, "critical": 0.05},
            "throughput_rps": {"warning": 50, "critical": 10},
            "cost_per_request": {"warning": 0.01, "critical": 0.05},
        }

    def check(self, metrics: Dict[str, float]) -> List[Dict]:
        alerts = []
        for metric, value in metrics.items():
            if metric not in self.thresholds:
                continue
            limits = self.thresholds[metric]
            if value >= limits["critical"]:
                alerts.append({"metric": metric, "value": value, "severity": "critical", "limit": limits["critical"]})
            elif value >= limits["warning"]:
                alerts.append({"metric": metric, "value": value, "severity": "warning", "limit": limits["warning"]})
        return alerts

    def update_threshold(self, metric: str, level: str, value: float):
        if metric in self.thresholds and level in ("warning", "critical"):
            self.thresholds[metric][level] = value


pt = PerformanceThresholds()
alerts = pt.check({"p95_latency_ms": 2500, "error_rate": 0.03})
print(f"Performance alerts: {alerts}")
```text

### 6.3.2 Error Rate Monitoring

```python
class ErrorRateMonitor:
    def __init__(self, window: int = 100):
        self.window = window
        self.results: List[bool] = []

    def record(self, success: bool):
        self.results.append(success)
        if len(self.results) > self.window * 10:
            self.results = self.results[-self.window:]

    def error_rate(self) -> float:
        if not self.results:
            return 0.0
        recent = self.results[-self.window:]
        return sum(1 for r in recent if not r) / len(recent)

    def is_degraded(self, threshold: float = 0.05) -> Dict:
        rate = self.error_rate()
        return {
            "error_rate": round(rate, 4),
            "sample_size": min(len(self.results), self.window),
            "degraded": rate > threshold,
        }

    def error_categories(self, errors: List[Dict]) -> Dict:
        from collections import Counter
        categories = Counter(e.get("type", "unknown") for e in errors)
        return {
            "total": len(errors),
            "categories": dict(categories),
            "primary": categories.most_common(1)[0][0] if categories else "",
        }


erm = ErrorRateMonitor()
for _ in range(200):
    erm.record(np.random.random() > 0.03)
print(f"Error rate: {erm.is_degraded(0.05)}")
```text

## 6.4 Incident Response

### 6.4.1 Incident Manager

```python
@dataclass
class Incident:
    id: str
    title: str
    severity: Severity
    description: str
    detected_at: float
    acknowledged_at: Optional[float] = None
    resolved_at: Optional[float] = None
    assigned_to: Optional[str] = None
    runbook: Optional[str] = None


class IncidentManager:
    def __init__(self):
        self.incidents: List[Incident] = []
        self.runbooks: Dict[str, List[str]] = {}
        self.oncall: List[str] = []

    def create_incident(self, title: str, severity: Severity,
                         description: str, runbook: str = None) -> str:
        inc = Incident(
            id=f"INC-{len(self.incidents) + 1:04d}",
            title=title,
            severity=severity,
            description=description,
            detected_at=time.time(),
            runbook=runbook,
        )
        self.incidents.append(inc)
        self._assign(inc)
        return inc.id

    def _assign(self, incident: Incident):
        if self.oncall:
            incident.assigned_to = self.oncall[0]
            self.oncall = self.oncall[1:] + [self.oncall[0]]

    def acknowledge(self, incident_id: str, responder: str):
        for inc in self.incidents:
            if inc.id == incident_id:
                inc.acknowledged_at = time.time()
                inc.assigned_to = responder
                break

    def resolve(self, incident_id: str):
        for inc in self.incidents:
            if inc.id == incident_id:
                inc.resolved_at = time.time()
                break

    def register_runbook(self, name: str, steps: List[str]):
        self.runbooks[name] = steps

    def get_runbook(self, name: str) -> List[str]:
        return self.runbooks.get(name, ["No runbook defined"])

    def open_incidents(self) -> List[Incident]:
        return [i for i in self.incidents if i.resolved_at is None]

    def stats(self) -> Dict:
        total = len(self.incidents)
        open_inc = len(self.open_incidents())
        return {
            "total_incidents": total,
            "open": open_inc,
            "resolved": total - open_inc,
        }


im = IncidentManager()
im.register_runbook("high_latency", [
    "1. Check P95 latency dashboard",
    "2. Identify slowest component from traces",
    "3. Check if model version recently changed",
    "4. Rollback if regression from new deployment",
    "5. Scale up if traffic surge",
])
inc_id = im.create_incident("P95 latency spike", Severity.HIGH, "P95 went from 500ms to 3s", "high_latency")
print(f"Incident: {inc_id}")
print(f"Runbook: {im.get_runbook('high_latency')}")
```text

### 6.4.2 Severity Classification

```python
class SeverityClassifier:
    def classify(self, impact: str, urgency: str,
                 affected_users_pct: float) -> Severity:
        if impact == "outage" or affected_users_pct > 0.5:
            return Severity.CRITICAL
        elif urgency == "high" or affected_users_pct > 0.2:
            return Severity.HIGH
        elif impact == "partial" or affected_users_pct > 0.05:
            return Severity.MEDIUM
        else:
            return Severity.LOW

    def response_time(self, severity: Severity) -> int:
        times = {
            Severity.CRITICAL: 5,
            Severity.HIGH: 15,
            Severity.MEDIUM: 60,
            Severity.LOW: 240,
            Severity.INFO: 1440,
        }
        return times.get(severity, 60)

    def description(self, severity: Severity) -> str:
        descs = {
            Severity.CRITICAL: "Complete outage or data loss. Immediate response.",
            Severity.HIGH: "Major feature degradation. Respond within 15 min.",
            Severity.MEDIUM: "Partial impact. Respond within 1 hour.",
            Severity.LOW: "Minor issue. Respond within 4 hours.",
            Severity.INFO: "Informational. No response needed.",
        }
        return descs.get(severity, "Unknown")


sc = SeverityClassifier()
sev = sc.classify("outage", "high", 0.8)
print(f"Severity: {sev.value}, Response: {sc.response_time(sev)} min")
```text

## 6.5 Rollback

### 6.5.1 Rollback Manager

```python
class RollbackManager:
    def __init__(self):
        self.deployments: List[Dict] = []
        self.current_version: Optional[str] = None
        self.rollback_history: List[Dict] = []

    def record_deployment(self, version: str, model_uri: str,
                           config: Dict = None):
        self.deployments.append({
            "version": version,
            "model_uri": model_uri,
            "config": config or {},
            "deployed_at": time.time(),
            "rollback_count": 0,
        })
        self.current_version = version

    def rollback(self, target_version: str = None) -> Dict:
        if len(self.deployments) < 2 and not target_version:
            return {"success": False, "error": "No previous version to rollback to"}

        if target_version:
            target = next((d for d in self.deployments if d["version"] == target_version), None)
            if not target:
                return {"success": False, "error": f"Version {target_version} not found"}
        else:
            target = self.deployments[-2]

        rollback = {
            "from_version": self.current_version,
            "to_version": target["version"],
            "model_uri": target["model_uri"],
            "rolled_back_at": time.time(),
            "reason": "",
        }

        self.rollback_history.append(rollback)
        self.current_version = target["version"]
        target["rollback_count"] = target.get("rollback_count", 0) + 1

        return {
            "success": True,
            "rollback": rollback,
            "current_version": self.current_version,
        }

    def rollback_stats(self) -> Dict:
        return {
            "current_version": self.current_version,
            "total_deployments": len(self.deployments),
            "total_rollbacks": len(self.rollback_history),
            "last_rollback": self.rollback_history[-1] if self.rollback_history else None,
        }


rbm = RollbackManager()
rbm.record_deployment("v1.0", "models/v1/")
rbm.record_deployment("v2.0", "models/v2/")
result = rbm.rollback()
print(f"Rollback: {result['success']} to {result['current_version']}")
```text

### 6.5.2 Canary Rollback

```python
class CanaryRollback:
    def __init__(self):
        self.canary_pct = 5
        self.healthy = True

    def deploy_canary(self, new_version: str, traffic_pct: int = 5):
        self.canary_pct = traffic_pct
        print(f"Deploying {new_version} to {traffic_pct}% of traffic")

    def monitor_canary(self, error_rate: float, latency_p95: float,
                        thresholds: Dict) -> bool:
        healthy = True

        if error_rate > thresholds.get("error_rate", 0.05):
            healthy = False
        if latency_p95 > thresholds.get("latency_p95", 2000):
            healthy = False

        self.healthy = healthy
        return healthy

    def rollback_canary(self, new_version: str) -> Dict:
        if not self.healthy:
            return {
                "action": "rollback",
                "version": new_version,
                "reason": "Canary health checks failed",
                "rolled_back": True,
            }
        return {
            "action": "promote",
            "version": new_version,
            "reason": "Canary healthy",
            "rolled_back": False,
        }


canary = CanaryRollback()
canary.deploy_canary("v2.1", 5)
healthy = canary.monitor_canary(0.08, 2500, {"error_rate": 0.03, "latency_p95": 2000})
print(f"Canary healthy: {healthy}")
print(f"Action: {canary.rollback_canary('v2.1')}")
```text

## 6.6 Postmortem

### 6.6.1 Postmortem Template

```python
class Postmortem:
    def __init__(self, incident_id: str, title: str):
        self.incident_id = incident_id
        self.title = title
        self.date = time.time()
        self.summary = ""
        self.timeline: List[Dict] = []
        self.root_cause = ""
        self.impact = ""
        self.action_items: List[Dict] = []
        self.lessons: List[str] = []

    def add_timeline_event(self, time_str: str, event: str):
        self.timeline.append({"time": time_str, "event": event})

    def add_action_item(self, description: str, owner: str,
                         priority: str = "medium", due_date: str = ""):
        self.action_items.append({
            "description": description,
            "owner": owner,
            "priority": priority,
            "due_date": due_date,
            "status": "open",
        })

    def generate(self) -> Dict:
        return {
            "incident_id": self.incident_id,
            "title": self.title,
            "date": self.date,
            "summary": self.summary,
            "timeline": self.timeline,
            "root_cause": self.root_cause,
            "impact": self.impact,
            "action_items": self.action_items,
            "lessons": self.lessons,
            "completed": all(a["status"] == "closed" for a in self.action_items),
        }


pm = Postmortem("INC-0001", "P95 latency spike on 2024-01-15")
pm.summary = "P95 latency increased from 500ms to 3s due to model version rollout"
pm.add_timeline_event("14:00", "Deployed v2.1 model")
pm.add_timeline_event("14:05", "P95 latency alert fired")
pm.add_timeline_event("14:06", "Incident created")
pm.add_timeline_event("14:10", "Rollback initiated")
pm.add_timeline_event("14:12", "Latency returned to baseline")
pm.root_cause = "v2.1 model had an extra attention layer causing 6x compute"
pm.add_action_item("Add pre-deployment latency benchmark", "ML team", "high")
print(f"Postmortem generated: {len(pm.action_items)} action items")
```text

### 6.6.2 Action Item Tracker

```python
class ActionItemTracker:
    def __init__(self):
        self.items: List[Dict] = []

    def add(self, item: Dict):
        self.items.append(item)

    def close(self, description: str):
        for item in self.items:
            if item["description"] == description:
                item["status"] = "closed"
                item["closed_at"] = time.time()

    def open_items(self) -> List[Dict]:
        return [i for i in self.items if i.get("status") == "open"]

    def completion_rate(self) -> float:
        if not self.items:
            return 1.0
        closed = sum(1 for i in self.items if i.get("status") == "closed")
        return closed / len(self.items)

    def report(self) -> Dict:
        return {
            "total": len(self.items),
            "open": len(self.open_items()),
            "closed": len(self.items) - len(self.open_items()),
            "completion_rate": round(self.completion_rate() * 100, 1),
        }


ait = ActionItemTracker()
ait.add({"description": "Add pre-deployment benchmarking", "priority": "high", "status": "open"})
ait.add({"description": "Update monitoring thresholds", "priority": "medium", "status": "open"})
ait.close("Update monitoring thresholds")
print(f"Action item report: {ait.report()}")
```text

## Summary

Alerting and incident response for AI systems requires a structured approach: define alert rules with appropriate severity (critical/high/medium/low) and cooldown periods to prevent alert fatigue. Drift alerts detect data distribution shifts (PSI > 0.5), model accuracy degradation (drop > 5%), and concept drift. Performance alerts trigger on P95 latency, error rate, throughput, and cost thresholds. Incident response follows severity-based runbooks with clear escalation paths. Rollback procedures include canary deployments (start with 5% traffic) and automated rollback when health checks fail. Postmortems create a blameless culture focused on learning — documenting timelines, root causes, action items with owners, and tracking completion rates.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Set cooldown on alerts | Prevents notification storms from repeated violations |
| Use canary deployments | Test changes on 5% traffic before full rollout |
| Automate rollback | Health check failure should trigger immediate rollback |
| Document runbooks | Every alert type needs a clear response procedure |
| Blameless postmortems | Focus on systems, not people |
| Track action items | Completion rate indicates organizational learning |

## Interview Q&A

<details class="tp-qa-card" data-qid="ev06-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How do you design effective alert rules for an AI system without causing alert fatigue?
  </summary>
  <div class="tp-qa-answer">
    <p>Effective alert rules follow the "keep signals high, noise low" principle. Key practices: (1) Use cooldown periods — after an alert fires, wait at least 5 minutes before firing again for the same condition. (2) Require sustained violation — alert only when the condition persists for N consecutive evaluation windows (e.g., P95 > 2s for 5 minutes). (3) Set appropriate severity levels — critical for user-facing issues (error rate > 5%), high for degradation (latency > 1s for 10 min), medium for warnings (cost spike), low for informational. (4) Use relative thresholds — "latency is 3— higher than the same time yesterday" is more robust than absolute thresholds. (5) Regularly review and tune alert rules based on false positive rates; retire rules with >90% false positive rate.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What is a canary deployment and how does it reduce deployment risk for AI models?
  </summary>
  <div class="tp-qa-answer">
    <p>A canary deployment rolls out a new model version to a small percentage of traffic (typically 5-10%) before full deployment. For AI models, this is critical because offline metrics often don't predict online behavior — a model with better offline F1 might produce worse user experience due to latency, verbosity, or unexpected outputs. The canary runs for a validation period (hours to days) during which metrics (latency, error rate, user engagement, quality scores) are compared between the canary and the baseline. If metrics are stable or better, traffic is gradually increased (25% → 50% → 100%). If metrics degrade, the canary is automatically rolled back. This technique catches about 60% of production issues before full rollout.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you write an effective incident response runbook for an AI system failure?
  </summary>
  <div class="tp-qa-answer">
    <p>A runbook should contain: (1) Alert description — what triggered the alert and what it means. (2) Severity classification — critical (users impacted), high (partial degradation), medium (potential issue), low (informational). (3) Immediate mitigation steps — "Rollback to previous model version", "Increase rate limit", "Failover to backup provider". (4) Investigation steps — check dashboard X, review recent deployments, inspect error logs for pattern. (5) Escalation path — who to contact if initial mitigation fails, including names and phone numbers. (6) Post-mitigation steps — document what happened, update the runbook. Runbooks should be tested in game days — simulated incidents where the on-call engineer follows the runbook without preparation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you implement automated rollback for a degraded AI model in production?
  </summary>
  <div class="tp-qa-answer">
    <p>Automated rollback requires: (1) Health check endpoint — returns model status (healthy/unhealthy) with the last successful prediction time and current error rate. (2) Health check criteria — rollback if error rate > 5% sustained for 2 minutes, or latency P95 > 3s for 3 minutes, or prediction drift > 2 standard deviations from baseline. (3) Rollback mechanism — the deployment system (Kubernetes, CI/CD pipeline) automatically reverts to the previous stable version. (4) Traffic drain — stop sending new traffic to the bad deployment and let in-flight requests complete. (5) Notification — alert the on-call engineer that an automatic rollback occurred with the reason and metrics. (6) Post-rollback validation — verify the rollback resolved the issue and the system is stable.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you detect data drift in production AI systems?
  </summary>
  <div class="tp-qa-answer">
    <p>Data drift detection monitors the distribution of incoming features and predictions. Methods: (1) Population Stability Index (PSI) — measures how much a distribution has shifted; PSI > 0.25 indicates significant drift. (2) Kolmogorov-Smirnov test — non-parametric test comparing reference and current distributions. (3) Jensen-Shannon divergence — symmetric measure of distribution difference. (4) Feature-level monitoring — track min, max, mean, std for each numeric feature; frequency for categorical features. (5) Prediction drift — monitor the distribution of model predictions over time. Set up alerts when drift exceeds thresholds (e.g., PSI > 0.2 for any feature). When drift is detected, trigger retraining on recent data or investigate the cause of the shift.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is a blameless postmortem and how do you write one effectively?
  </summary>
  <div class="tp-qa-answer">
    <p>A blameless postmortem focuses on understanding what happened and preventing recurrence, not on who caused it. Structure: (1) Incident summary — what happened, when, impact (users affected, downtime duration). (2) Timeline — chronologically ordered events from detection to resolution. (3) Root cause — the technical failure that triggered the incident (e.g., "rate limit not configured on new endpoint"). (4) Contributing factors — conditions that made the incident worse (e.g., "alert was silenced during maintenance"). (5) Action items — specific, owner-assigned tasks to prevent recurrence, with deadlines. (6) Blameless culture statement — explicitly state that the goal is learning, not blame. Effective postmortems lead to systemic improvements, not punitive actions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you set up a severity classification system for AI incidents?
  </summary>
  <div class="tp-qa-answer">
    <p>SEV1 (Critical) — complete service outage, incorrect predictions causing financial/harm, data breach. Response: page on-call immediately, 15-minute response time. SEV2 (High) — partial degradation (P95 latency > 3s), elevated error rate (>5%), feature unavailable for subset of users. Response: page on-call, 30-minute response. SEV3 (Medium) — non-critical bugs, cosmetic issues, single-user problems. Response: next business day ticket. SEV4 (Low) — minor issues, feature requests. Response: backlog. Each severity level has defined: response time, communication channels (SEV1 gets company-wide Slack alert, SEV4 gets a Jira ticket), and escalation paths. Regular incident reviews ensure severity classifications are applied consistently.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle concept drift specifically in LLM-based applications?
  </summary>
  <div class="tp-qa-answer">
    <p>Concept drift in LLM apps occurs when the relationship between input queries and expected outputs changes. Detection approaches: (1) User behavior drift — monitor changes in query patterns, conversation lengths, and topic distributions. (2) LLM provider drift — models get updated without notice, changing output style and quality. (3) Knowledge drift — the underlying facts change (e.g., a company policy update that makes old answers incorrect). (4) Evaluation score drift — LLM-as-Judge scores trending downward over time. Mitigations: (1) Continuous evaluation — run daily evaluation on production samples against golden dataset. (2) Feedback loop analysis — track user satisfaction trends. (3) Scheduled model comparisons — periodically compare current vs. previous model versions. (4) Knowledge base refresh — keep RAG knowledge bases up to date.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you implement a notification strategy that avoids pager fatigue?
  </summary>
  <div class="tp-qa-answer">
    <p>Pager fatigue prevention: (1) Severity-based routing — critical alerts page the on-call engineer, high alerts go to Slack, medium/low become Jira tickets. (2) Alert deduplication — if multiple alerts fire for the same root cause (e.g., "LLM API error" plus "latency spike"), group them into one notification. (3) On-call schedules — rotating shifts with clear handoff procedures. (4) Escalation policies — primary on-call gets first page, secondary if no response in 10 minutes, manager after 20 minutes. (5) Silent hours — suppress non-critical notifications during nights/weekends, but allow critical ones through. (6) Alert fatigue metrics — track notification volume per person per shift and aim for fewer than 5 pages per shift. (7) Regular review — retire alerts with >90% false positive rate.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev06-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement an alert rule with cooldown and sustained violation detection?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>class AlertRule {
  private lastFired: number = 0;
  private consecutiveViolations: number = 0;
  constructor(private condition: () => boolean, private cooldownMs: number,
    private requiredConsecutive: number, private severity: string) {}
  evaluate(): Alert | null {
    const now = Date.now();
    if (this.condition()) {
      this.consecutiveViolations++;
      if (this.consecutiveViolations >= this.requiredConsecutive
          && now - this.lastFired > this.cooldownMs) {
        this.lastFired = now;
        this.consecutiveViolations = 0;
        return { severity: this.severity, firedAt: now };
      }
    } else { this.consecutiveViolations = 0; }
    return null;
  }
}</pre></code>
    <p>The AlertRule class tracks consecutive violation counts and a cooldown timer. An alert fires only after the condition has been true for N consecutive evaluations (e.g., 3 checks at 1-minute intervals = 3 minutes of sustained violation). After firing, the cooldown prevents re-firing until the cooldown period expires. This eliminates alert storms from transient spikes while catching genuine sustained issues. The rule evaluates periodically (e.g., every 60 seconds) and clears the consecutive counter when the condition is no longer met. Adjust required_consecutive based on how quickly you need to detect real issues vs. how much noise you can tolerate.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="eval-s6-quiz1">
<summary><strong>1.</strong> Why use cooldown periods on alerts?</summary>
A. To save costs
B. To prevent alert fatigue from repeated notifications
C. To reduce system load
D. To comply with regulations
Answer: B
</details>

<details data-qid="eval-s6-quiz2">
<summary><strong>2.</strong> What is a canary deployment?</summary>
A. Deploying to all users at once
B. Rolling out to a small percentage first
C. Using a different model
D. Testing in production
Answer: B
</details>

<details data-qid="eval-s6-quiz3">
<summary><strong>3.</strong> What triggers a model drift alert?</summary>
A. Increased traffic
B. Model accuracy drops below baseline by threshold amount
C. New model version
D. Cost increase
Answer: B
</details>

<details data-qid="eval-s6-quiz4">
<summary><strong>4.</strong> What is the primary goal of a postmortem?</summary>
A. Assign blame
B. Learn from incidents and prevent recurrence
C. Document errors
D. Reward the responder
Answer: B
</details>

<details data-qid="eval-s6-quiz5">
<summary><strong>5.</strong> What should happen when a canary health check fails?</summary>
A. Ignore it
B. Automatically rollback the canary
C. Promote to full deployment
D. Retry the deployment
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Build an alert manager with 5 rules (latency, error rate, drift, throughput, cost), cooldown periods, and severity levels. Simulate metric values and report fired alerts.

2. Implement a data drift detector using PSI (population stability index). Create a reference distribution and test with current data that has shifted by 0.3, 0.5, and 1.0 standard deviations.

3. Create an incident management system with severity classification, runbook execution, and acknowledgment tracking. Simulate 3 incidents at different severities.

4. Build a rollback manager that supports version recording, rollback to N-1, canary deployment with health monitoring, and automatic rollback on threshold breach.

5. Write a postmortem generator for an incident. Include timeline, root cause, impact assessment, and 5 action items with owners and priorities. Track complet

## Revision Notes

- Key concept 1: Core principle of 15-ai-evaluation-observability
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 15-ai-evaluation-observability. When would you choose one approach over another?
2. Design a system that efficiently handles 15-ai-evaluation-observability at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 15-ai-evaluation-observability. What was your approach and what was the result?
2. How would you explain 15-ai-evaluation-observability to a non-technical stakeholder?

#### Microsoft Style
1. How does 15-ai-evaluation-observability integrate with enterprise systems and cloud architectures?
2. What are the security implications of 15-ai-evaluation-observability?

#### NVIDIA Style
1. How would you optimize 15-ai-evaluation-observability for GPU-accelerated computing?
2. What parallel processing patterns apply to 15-ai-evaluation-observability?

#### AI Startup Style
1. How would you implement 15-ai-evaluation-observability in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 15-ai-evaluation-observability?

### Resume Tips
- **Technical Skills**: List 15-ai-evaluation-observability under relevant technical skills
- **Project Description**: "Implemented 15-ai-evaluation-observability to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 15-ai-evaluation-observability in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 15-ai-evaluation-observability
- [ ] Practice 3-5 problems related to 15-ai-evaluation-observability
- [ ] Prepare 2 real-world examples of using 15-ai-evaluation-observability
- [ ] Know the time/space complexity of common 15-ai-evaluation-observability operations
- [ ] Have questions ready about how the company uses 15-ai-evaluation-observabilityion rate.
