# Incident Response

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand common ML production incidents and their root causes |
| LO2 | Build an incident response plan with severity levels |
| LO3 | Implement automated incident detection and alerting |
| LO4 | Design runbooks for common ML incidents |
| LO5 | Conduct post-mortems and track incident metrics |
| LO6 | Set up on-call rotations for ML systems |

## Introduction

Understanding incident response is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering incident response.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | ML Incident Types | Model failures, data issues, infrastructure |
| 8.2 | Severity Classification | SEV1-SEV4 with response SLAs |
| 8.3 | Incident Detection | Automated monitoring and alerting |
| 8.4 | Runbooks | Step-by-step response procedures |
| 8.5 | Post-Mortem Analysis | Root cause, timeline, action items |
| 8.6 | On-Call Practices | Rotations, escalation, incident commander |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Incident Occurs] --> B[Detection]
    B --> C{Severity?}
    C -->|SEV1| D[Immediate Response]
    C -->|SEV2| E[Within 15min]
    C -->|SEV3| F[Within 1hr]
    C -->|SEV4| G[Next Business Day]
    D --> H[Triage]
    E --> H
    H --> I[Apply Runbook]
    I --> J{Resolved?}
    J -->|Yes| K[Post-Mortem]
    J -->|No| L[Escalate]
    L --> M[Senior Engineer]
```text

## 8.1 ML Incident Types

ML production incidents differ from traditional software incidents. They often involve silent failures where the system appears to work but produces incorrect results.

```python
from enum import Enum
from dataclasses import dataclass
from datetime import datetime
from typing import Optional, List

class IncidentType(Enum):
    MODEL_DEGRADATION = "model_degradation"  # Accuracy drop, drift
    DATA_FAILURE = "data_failure"            # Missing features, schema change
    INFRASTRUCTURE = "infrastructure"        # GPU failure, OOM, network
    PIPELINE_FAILURE = "pipeline_failure"    # Training job failure
    SECURITY = "security"                    # Model extraction, prompt injection
    LLM_HALLUCINATION = "llm_hallucination"  # Unsafe or incorrect LLM output
    LATENCY_SPIKE = "latency_spike"          # p99 latency exceeds SLA
    COST_ANOMALY = "cost_anomaly"            # Unexpected cost spike

@dataclass
class Incident:
    incident_id: str
    type: IncidentType
    severity: str  # SEV1-SEV4
    title: str
    description: str
    detected_at: datetime
    detected_by: str  # "monitoring" or "user_report"
    affected_models: List[str]
    affected_users: Optional[int] = None
    resolved_at: Optional[datetime] = None
    root_cause: Optional[str] = None
    action_items: List[str] = None

    def duration_minutes(self) -> Optional[float]:
        if self.resolved_at:
            return (self.resolved_at - self.detected_at).total_seconds() / 60
        return None

## Common ML incidents
incidents = [
    Incident("INC-001", IncidentType.MODEL_DEGRADATION, "SEV2",
             "Price prediction MAE increased 40%",
             "MAE jumped from 2.1 to 2.95 after data pipeline update introduced feature encoding bug",
             datetime.utcnow(), "monitoring", ["PricePredictor-v3"]),
    Incident("INC-002", IncidentType.DATA_FAILURE, "SEV1",
             "Critical feature 'price_history' is 100% null",
             "ETL job failed silently, all price_history features are null affecting 100% of predictions",
             datetime.utcnow(), "monitoring", ["PricePredictor-v3", "DemandForecast-v2"], 50000),
    Incident("INC-003", IncidentType.LLM_HALLUCINATION, "SEV1",
             "Customer support LLM provided incorrect refund policy",
             "Model generated fictional refund amounts, leading to customer complaints and potential liability",
             datetime.utcnow(), "user_report", ["SupportBot-v4"], 150),
]

for inc in incidents:
    print(f"{inc.severity} | {inc.incident_id} | {inc.title}")
```text

**ML-specific incident challenges**:

| Challenge | Why It's Hard | Mitigation |
|-----------|---------------|------------|
| Silent failures | Model returns results but they're wrong | Distribution monitoring, A/B comparison |
| Slow degradation | Metrics drift over days/weeks | Trend analysis with statistical alerts |
| Data pipeline issues | Failures cascade silently | Data quality checks at every stage |
| LLM hallucinations | Nondeterministic outputs | Output validation, guardrails |
| Model fairness | Bias emerges over time | Fairness monitoring |

---

## 8.2 Severity Classification

A clear severity framework ensures appropriate response times and resource allocation.

```python
class SeverityFramework:
    """Define severity levels and response SLAs for ML incidents."""

    SEVERITIES = {
        "SEV1": {
            "name": "Critical",
            "description": "Complete system outage or incorrect predictions affecting >10% of users",
            "response_sla_minutes": 5,
            "resolution_sla_minutes": 60,
            "notification": "PagerDuty + Slack + Phone",
            "responder": "Incident Commander + Senior ML Engineer",
            "examples": [
                "Model returns NaN for all predictions",
                "Critical feature permanently missing",
                "LLM producing unsafe content at scale",
                "Serving endpoint down"
            ]
        },
        "SEV2": {
            "name": "Major",
            "description": "Significant degradation affecting 1-10% of users or key metric drop >20%",
            "response_sla_minutes": 15,
            "resolution_sla_minutes": 240,
            "notification": "Slack + Email",
            "responder": "ML Engineer on-call",
            "examples": [
                "MAE increased 30%+",
                "Feature pipeline delayed by >1 hour",
                "Model version serving wrong artifact"
            ]
        },
        "SEV3": {
            "name": "Minor",
            "description": "Minor degradation <1% users or non-critical metrics affected",
            "response_sla_minutes": 60,
            "resolution_sla_minutes": "Next business day",
            "notification": "Slack",
            "responder": "Team member during business hours",
            "examples": [
                "Slight accuracy drop (<5%)",
                "Non-critical feature deprecated",
                "Minor latency increase"
            ]
        },
        "SEV4": {
            "name": "Low",
            "description": "Cosmetic issues, documentation bugs, feature requests",
            "response_sla_minutes": "Next business day",
            "resolution_sla_minutes": "Next sprint",
            "notification": "Jira ticket",
            "responder": "Product owner/PM",
            "examples": [
                "Dashboard visualization bug",
                "Documentation error",
                "Non-critical alert noise"
            ]
        }
    }

    @staticmethod
    def classify(impact_pct: float, metric_drop_pct: float, is_safety: bool = False) -> str:
        """Classify incident severity based on impact."""
        if is_safety or impact_pct > 10 or metric_drop_pct > 50:
            return "SEV1"
        if impact_pct > 1 or metric_drop_pct > 20:
            return "SEV2"
        if impact_pct > 0.1 or metric_drop_pct > 5:
            return "SEV3"
        return "SEV4"

    @staticmethod
    def get_sla(severity: str) -> dict:
        return SeverityFramework.SEVERITIES.get(severity, {})

sev = SeverityFramework()
print(f"Classification: {sev.classify(impact_pct=5, metric_drop_pct=30)}")
print(sev.get_sla("SEV1")["response_sla_minutes"])
```text

**Incident response flow with SLA tracking**:

```python
import time
import threading
from datetime import datetime, timedelta

class SLATracker:
    """Track response and resolution SLAs for incidents."""

    def __init__(self):
        self.active_incidents = {}

    def declare_incident(self, incident_id: str, severity: str):
        """Start tracking SLA for a new incident."""
        sla = SeverityFramework.get_sla(severity)
        now = datetime.utcnow()

        self.active_incidents[incident_id] = {
            "severity": severity,
            "response_deadline": now + timedelta(minutes=sla.get("response_sla_minutes", 60)),
            "resolution_deadline": now + timedelta(minutes=sla.get("resolution_sla_minutes", 240)) if isinstance(sla.get("resolution_sla_minutes"), int) else None,
            "response_at": None,
            "resolved_at": None
        }

        # Start monitoring thread
        threading.Thread(target=self._monitor_sla, args=(incident_id,), daemon=True).start()

    def acknowledge(self, incident_id: str):
        """Record response time."""
        if incident_id in self.active_incidents:
            self.active_incidents[incident_id]["response_at"] = datetime.utcnow()

    def resolve(self, incident_id: str):
        """Record resolution time."""
        if incident_id in self.active_incidents:
            self.active_incidents[incident_id]["resolved_at"] = datetime.utcnow()

    def _monitor_sla(self, incident_id: str):
        """Check SLA compliance and alert if breached."""
        time.sleep(30)  # Check after 30 seconds
        inc = self.active_incidents.get(incident_id)
        if inc and inc["response_at"] is None:
            print(f"🚨 SLA BREACH: {incident_id} not acknowledged before {inc['response_deadline']}")

    def sla_report(self) -> dict:
        """Generate SLA compliance report."""
        report = {"incidents": {}, "breaches": 0}
        for inc_id, data in self.active_incidents.items():
            response_time = None
            resolution_time = None
            if data["response_at"]:
                response_time = (data["response_at"] - datetime.utcnow()).total_seconds() / 60
            if data["resolved_at"]:
                resolution_time = (data["resolved_at"] - datetime.utcnow()).total_seconds() / 60

            breached = data["response_at"] is None or (data["response_at"] > data["response_deadline"])
            if breached:
                report["breaches"] += 1

            report["incidents"][inc_id] = {
                "severity": data["severity"],
                "response_time_min": round(response_time, 1) if response_time else "missed",
                "breached": breached
            }
        return report

tracker = SLATracker()
tracker.declare_incident("INC-001", "SEV1")
tracker.acknowledge("INC-001")
```text

---

## 8.3 Incident Detection

Automated detection is the first line of defense against ML incidents.

```python
import time
import json
from collections import deque
from typing import Callable, Dict, Optional

class IncidentDetector:
    """Automated incident detection from monitoring metrics."""

    def __init__(self):
        self.detectors: Dict[str, Callable] = {}
        self.incident_history = []

    def register_detector(self, name: str, detector_fn: Callable):
        self.detectors[name] = detector_fn

    def run_all(self, metrics: dict) -> list:
        """Run all registered detectors and return detected incidents."""
        detected = []
        for name, fn in self.detectors.items():
            try:
                result = fn(metrics)
                if result:
                    detected.append(result)
                    self.incident_history.append(result)
                    print(f"🚨 Detected: {result['title']} (via {name})")
            except Exception as e:
                print(f"Detector {name} failed: {e}")
        return detected

## Define specific detectors
def latency_spike_detector(metrics: dict) -> Optional[dict]:
    p99 = metrics.get("latency_p99", 0)
    threshold = metrics.get("latency_threshold", 500)
    if p99 > threshold * 2:  # 2x threshold
        return {
            "type": "latency_spike",
            "severity": "SEV2",
            "title": f"Latency spike: p99={p99}ms exceeds 2x threshold",
            "metric": "latency_p99",
            "value": p99,
            "threshold": threshold
        }
    return None

def null_prediction_detector(metrics: dict) -> Optional[dict]:
    null_rate = metrics.get("null_prediction_rate", 0)
    if null_rate > 0.05:  # 5% null predictions
        return {
            "type": "model_degradation",
            "severity": "SEV1" if null_rate > 0.5 else "SEV2",
            "title": f"High null prediction rate: {null_rate:.1%}",
            "metric": "null_prediction_rate",
            "value": null_rate,
            "threshold": 0.05
        }
    return None

def drift_detector(metrics: dict) -> Optional[dict]:
    drift_score = metrics.get("drift_score", 0)
    if drift_score > 0.5:
        return {
            "type": "model_degradation",
            "severity": "SEV2",
            "title": f"Severe drift detected: drift_score={drift_score:.2f}",
            "metric": "drift_score",
            "value": drift_score,
            "threshold": 0.5
        }
    return None

def cost_anomaly_detector(metrics: dict) -> Optional[dict]:
    daily_cost = metrics.get("daily_cost", 0)
    expected_cost = metrics.get("expected_daily_cost", 100)
    if daily_cost > expected_cost * 3:
        return {
            "type": "cost_anomaly",
            "severity": "SEV3",
            "title": f"Cost anomaly: ${daily_cost} vs expected ${expected_cost}",
            "metric": "daily_cost",
            "value": daily_cost,
            "threshold": expected_cost * 3
        }
    return None

detector = IncidentDetector()
detector.register_detector("latency", latency_spike_detector)
detector.register_detector("null_prediction", null_prediction_detector)
detector.register_detector("drift", drift_detector)
detector.register_detector("cost", cost_anomaly_detector)

## Simulate metric check
metrics = {
    "latency_p99": 1200,
    "null_prediction_rate": 0.08,
    "drift_score": 0.6,
    "daily_cost": 450,
    "expected_daily_cost": 150,
    "latency_threshold": 500
}
detector.run_all(metrics)
```text

---

## 8.4 Runbooks

Runbooks provide step-by-step procedures for responding to specific incident types.

```python
class Runbook:
    """A structured runbook for a specific incident type."""

    def __init__(self, name: str, incident_type: IncidentType, steps: list):
        self.name = name
        self.incident_type = incident_type
        self.steps = steps
        self.current_step = 0

    def execute(self, incident: Incident):
        """Walk through runbook steps."""
        print(f"📋 Executing runbook: {self.name}")
        print(f"   Incident: {incident.incident_id} - {incident.title}")
        print()

        for i, step in enumerate(self.steps):
            self.current_step = i
            print(f"Step {i+1}: {step['action']}")
            if step.get("command"):
                print(f"   Command: {step['command']}")
            if step.get("check"):
                print(f"   Check: {step['check']}")

            # Simulate execution
            response = input(f"   Complete step {i+1}? (y/n): ") if False else "y"
            if step.get("verify"):
                print(f"   Verify: {step['verify']}")

        print("✅ Runbook complete")

## Define runbooks for common incidents
model_degradation_runbook = Runbook(
    "Model Degradation Response",
    IncidentType.MODEL_DEGRADATION,
    [
        {"action": "Acknowledge incident and check severity", "command": "kubectl get pods -n ml-serving"},
        {"action": "Check model metrics dashboard for drift", "command": "Check Grafana: 'Model Drift' dashboard"},
        {"action": "Compare current vs reference distribution", "command": "python scripts/check_drift.py --reference production"},
        {"action": "If drift confirmed, trigger rollback", "command": "python deploy.py --rollback --model PricePredictor"},
        {"action": "Verify rollback: check MAE and prediction distribution", "check": "MAE returned to baseline (< 2.5)"},
        {"action": "Create Jira ticket for root cause investigation"},
    ]
)

data_failure_runbook = Runbook(
    "Data Pipeline Failure Response",
    IncidentType.DATA_FAILURE,
    [
        {"action": "Check data pipeline status", "command": "dvc status; airflow dags list-runs -d data_pipeline"},
        {"action": "Identify failed stage", "command": "Check Airflow logs for failure reason"},
        {"action": "If transient: retry pipeline", "command": "airflow dags trigger data_pipeline"},
        {"action": "If data corrupted: restore from backup", "command": "dvc checkout data_v1.0"},
        {"action": "Verify data quality", "command": "python scripts/validate_data.py"},
        {"action": "Re-train model on corrected data", "command": "python train.py --data-version restored_v1.0"},
    ]
)

llm_hallucination_runbook = Runbook(
    "LLM Hallucination Response",
    IncidentType.LLM_HALLUCINATION,
    [
        {"action": "Identify affected model version and prompt template"},
        {"action": "Check guardrails logs for refusal patterns"},
        {"action": "Add output validation to block incorrect responses"},
        {"action": "If widespread: rollback to previous prompt version"},
        {"action": "Update prompt with stricter constraints"},
        {"action": "Add regression test for hallucination pattern"},
    ]
)

## Store runbooks
runbooks = {
    IncidentType.MODEL_DEGRADATION: model_degradation_runbook,
    IncidentType.DATA_FAILURE: data_failure_runbook,
    IncidentType.LLM_HALLUCINATION: llm_hallucination_runbook,
}

def get_runbook(incident_type: IncidentType) -> Runbook:
    return runbooks.get(incident_type)

## Use in response flow
inc = Incident("INC-004", IncidentType.DATA_FAILURE, "SEV1",
               "Feature pipeline failure", "ETL job failed",
               datetime.utcnow(), "monitoring", ["PricePredictor"])
runbook = get_runbook(inc.type)
## runbook.execute(inc)
```text

---

## 8.5 Post-Mortem Analysis

Post-mortems are blameless analyses that identify root causes and preventive actions.

```python
from datetime import datetime
from typing import List, Optional

class PostMortem:
    """Blameless post-mortem for ML incidents."""

    def __init__(self, incident: Incident):
        self.incident = incident
        self.timeline = []
        self.root_cause = None
        self.impact_assessment = {}
        self.action_items = []
        self.what_went_well = []
        self.what_went_wrong = []
        self.created_at = datetime.utcnow()

    def add_timeline_entry(self, time: str, event: str, actor: str = "system"):
        self.timeline.append({"time": time, "event": event, "actor": actor})

    def set_root_cause(self, cause: str, category: str):
        self.root_cause = {"cause": cause, "category": category}

    def add_action_item(self, description: str, owner: str, priority: str, deadline: str):
        self.action_items.append({
            "description": description,
            "owner": owner,
            "priority": priority,
            "deadline": deadline,
            "status": "open"
        })

    def generate_report(self) -> str:
        report = []
        report.append("=" * 60)
        report.append(f"POST-MORTEM: {self.incident.incident_id}")
        report.append(f"Title: {self.incident.title}")
        report.append(f"Severity: {self.incident.severity}")
        report.append(f"Date: {self.incident.detected_at.isoformat()}")
        report.append(f"Duration: {self.incident.duration_minutes():.0f} minutes")
        report.append("")

        report.append("TIMELINE:")
        for entry in self.timeline:
            report.append(f"  {entry['time']} - [{entry['actor']}] {entry['event']}")

        report.append("")
        report.append(f"ROOT CAUSE: {self.root_cause['cause']}")
        report.append(f"Category: {self.root_cause['category']}")

        report.append("")
        report.append("IMPACT:")
        report.append(f"  Affected Models: {', '.join(self.incident.affected_models)}")
        report.append(f"  Affected Users: {self.incident.affected_users or 'N/A'}")

        report.append("")
        report.append("ACTION ITEMS:")
        for i, item in enumerate(self.action_items, 1):
            report.append(f"  {i}. [{item['priority']}] {item['description']} (Owner: {item['owner']}, Due: {item['deadline']})")

        report.append("")
        report.append("WHAT WENT WELL:")
        for w in self.what_went_well:
            report.append(f"  ✅ {w}")

        report.append("")
        report.append("WHAT WENT WRONG:")
        for w in self.what_went_wrong:
            report.append(f"  ❌ {w}")

        return "\n".join(report)

## Sample post-mortem
inc = Incident("INC-002", IncidentType.DATA_FAILURE, "SEV1",
               "Critical feature null", "ETL job failed silently",
               datetime.utcnow(), "monitoring", ["PricePredictor"], 50000)
pm = PostMortem(inc)

pm.add_timeline_entry("14:00", "ETL job started", "airflow")
pm.add_timeline_entry("14:05", "ETL job failed — source DB timeout", "airflow")
pm.add_timeline_entry("14:05", "Alert suppressed — known flaky test", "monitoring")
pm.add_timeline_entry("14:30", "First user complaint received", "support")
pm.add_timeline_entry("14:35", "On-call engineer acknowledged", "team")
pm.add_timeline_entry("14:40", "Rollback to previous data version", "team")
pm.add_timeline_entry("14:55", "Service restored", "system")

pm.set_root_cause("ETL job failure alert was suppressed due to 'known flaky test' tag", "alerting")
pm.add_action_item("Remove auto-suppression for ETL failure alerts", "Alice", "P0", "2025-07-01")
pm.add_action_item("Add data quality check that runs within 5min of ETL completion", "Bob", "P0", "2025-07-05")
pm.add_action_item("Implement fallback: if ETL fails, use previous successful snapshot", "Carol", "P1", "2025-07-15")
pm.what_went_well = ["Rollback was fast (< 5 min)", "On-call responded within 5 min", "Communication was clear"]
pm.what_went_wrong = ["Alert was suppressed and missed", "No automated data quality check", "ETL failure cascaded silently"]

print(pm.generate_report())
```text

---

## 8.6 On-Call Practices

Effective on-call practices ensure incidents are handled promptly without burning out team members.

```python
import random
from datetime import datetime, timedelta
from typing import List, Optional

class OnCallSchedule:
    """Manage on-call rotations for ML team."""

    def __init__(self, team_members: List[str], rotation_days: int = 7):
        self.members = team_members
        self.rotation_days = rotation_days
        self.schedule = {}  # date -> member
        self.escalation_path = ["ML Engineer", "Senior ML Engineer", "ML Engineering Manager"]
        self._generate_schedule()

    def _generate_schedule(self):
        """Generate on-call schedule for next 30 days."""
        start = datetime.utcnow()
        for i in range(30):
            date = start + timedelta(days=i)
            rotation_index = (i // self.rotation_days) % len(self.members)
            self.schedule[date.strftime("%Y-%m-%d")] = self.members[rotation_index]

    def get_on_call(self, date: datetime = None) -> str:
        date = date or datetime.utcnow()
        return self.schedule.get(date.strftime("%Y-%m-%d"), "Unassigned")

    def get_escalation(self, level: int = 0) -> str:
        return self.escalation_path[level] if level < len(self.escalation_path) else "VP Engineering"

class IncidentCommander:
    """Coordinates incident response."""

    def __init__(self, schedule: OnCallSchedule):
        self.schedule = schedule
        self.escalation_level = 0

    def handle_incident(self, incident: Incident):
        print(f"🚨 Incident: {incident.incident_id} ({incident.severity})")
        print(f"   Primary: {self.schedule.get_on_call()}")

        if incident.severity in ["SEV1", "SEV2"]:
            print(f"   Notifying: {self.schedule.get_escalation(0)}")
            print(f"   Creating: #incident-{incident.incident_id} Slack channel")

        # Runbook execution
        runbook = get_runbook(incident.type)
        if runbook:
            print(f"   Runbook: {runbook.name}")
        else:
            print(f"   No runbook found for {incident.type.value}")

    def escalate(self):
        self.escalation_level += 1
        print(f"Escalating to {self.schedule.get_escalation(self.escalation_level)}")

## On-call metrics tracking
class OnCallMetrics:
    """Track on-call performance metrics."""

    def __init__(self):
        self.incidents_per_shift = {}  # member -> count
        self.response_times = []       # list of (member, response_time_minutes)
        self.mttr = []                 # Mean Time To Resolve

    def record_response(self, member: str, response_time_min: float):
        self.response_times.append((member, response_time_min))
        self.incidents_per_shift[member] = self.incidents_per_shift.get(member, 0) + 1

    def record_resolution(self, resolution_time_min: float):
        self.mttr.append(resolution_time_min)

    def summary(self, period_days: int = 30) -> dict:
        avg_response = sum(r for _, r in self.response_times) / len(self.response_times) if self.response_times else 0
        avg_mttr = sum(self.mttr) / len(self.mttr) if self.mttr else 0
        busiest = max(self.incidents_per_shift, key=self.incidents_per_shift.get) if self.incidents_per_shift else "N/A"

        return {
            "period_days": period_days,
            "total_incidents": len(self.response_times),
            "avg_response_time_min": round(avg_response, 1),
            "avg_mttr_min": round(avg_mttr, 1),
            "busiest_member": busiest,
            "incidents_per_member": self.incidents_per_shifts
        }

## Fix typo in summary method
OnCallMetrics.summary = lambda self, period_days=30: {
    "period_days": period_days,
    "total_incidents": len(self.response_times),
    "avg_response_time_min": round(sum(r for _, r in self.response_times) / len(self.response_times), 1) if self.response_times else 0,
    "avg_mttr_min": round(sum(self.mttr) / len(self.mttr), 1) if self.mttr else 0,
    "incidents_per_member": self.incidents_per_shift
}

metrics = OnCallMetrics()
metrics.record_response("Alice", 4.5)
metrics.record_response("Bob", 12.3)
metrics.record_resolution(45)
print(json.dumps(metrics.summary(), indent=2))
```text

---

## TypeScript Parallel

```typescript
// TypeScript incident response
interface Incident {
  id: string;
  type: "model_degradation" | "data_failure" | "infrastructure";
  severity: "SEV1" | "SEV2" | "SEV3" | "SEV4";
  title: string;
  detectedAt: Date;
  resolvedAt?: Date;
}

class IncidentManager {
  private incidents: Incident[] = [];

  declare(incident: Incident): void {
    this.incidents.push(incident);
    console.log(`[${incident.severity}] ${incident.id}: ${incident.title}`);
    if (incident.severity === "SEV1") {
      this.triggerPagerDuty(incident);
    }
  }

  private triggerPagerDuty(incident: Incident): void {
    console.log(`Paging on-call engineer for ${incident.id}`);
  }

  resolve(id: string): void {
    const inc = this.incidents.find(i => i.id === id);
    if (inc) {
      inc.resolvedAt = new Date();
      console.log(`Resolved ${id}`);
    }
  }

  metrics(): { total: number; open: number; avgResolutionMs: number } {
    const resolved = this.incidents.filter(i => i.resolvedAt);
    const totalMs = resolved.reduce((sum, i) => sum + (i.resolvedAt!.getTime() - i.detectedAt.getTime()), 0);
    return {
      total: this.incidents.length,
      open: this.incidents.filter(i => !i.resolvedAt).length,
      avgResolutionMs: resolved.length ? totalMs / resolved.length : 0
    };
  }
}
```text

---

## Summary

- ML incidents include model degradation, data failures, infrastructure issues, LLM hallucinations, and cost anomalies
- Severity framework (SEV1-SEV4) with defined response SLAs ensures appropriate prioritization
- SEV1 incidents require response within 5 minutes and resolution within 60 minutes
- Automated detectors continuously monitor latency, null predictions, drift, and costs
- Runbooks provide step-by-step procedures for each incident type, reducing response time
- Post-mortems should be blameless, focusing on system improvements rather than individual blame
- On-call rotations with clear escalation paths prevent engineer burnout
- SLA tracking with breach alerts ensures accountability
- Silent failures (model returns results but they're wrong) are the most dangerous ML incident type
- Action items from post-mortems should be tracked to closure with owners and deadlines

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Incident classification | Use objective criteria (impact %, metric drop) | Subjective severity assignment |
| Response time | Automate detection + alerting | Waiting for user reports |
| Runbooks | Document step-by-step for each type | Ad-hoc response every time |
| Post-mortem | Blameless analysis with action items | Blame culture |
| On-call | Fair rotation with escalation path | Single point of failure |
| SLA tracking | Automated breach detection | Manual tracking |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s08-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What are the most common types of ML production incidents?
  </summary>
  <div class="tp-qa-answer">
    <p>Most common: (1) Model degradation — accuracy/MAE drops due to data drift or concept drift, (2) Data pipeline failures — silent ETL failures cause missing features, (3) LLM hallucinations — unsafe or incorrect outputs, (4) Infrastructure issues — GPU OOM, network timeouts, (5) Latency spikes — model serving slows down, (6) Cost anomalies — unexpected cloud cost increases from misconfigured resources.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you classify incident severity for ML systems?
  </summary>
  <div class="tp-qa-answer">
    <p>SEV1: Complete outage or >10% users affected, response within 5min. SEV2: Significant degradation affecting 1-10% users, response within 15min. SEV3: Minor degradation affecting <1% users, response within 1hr. SEV4: Cosmetic issues, next business day. ML-specific factors include null prediction rate, drift score, and safety-critical failures.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What should a model degradation runbook include?
  </summary>
  <div class="tp-qa-answer">
    <p>Steps: (1) Acknowledge and assess severity, (2) Check drift dashboard for recent changes, (3) Compare current vs reference feature distributions, (4) Check for recent deployment or data pipeline changes, (5) If drift confirmed, rollback model to previous version, (6) Verify rollback effectiveness with metric comparison, (7) Create Jira ticket for root cause investigation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is a blameless post-mortem?
  </summary>
  <div class="tp-qa-answer">
    <p>A blameless post-mortem focuses on understanding the system failures that led to an incident, not on who made a mistake. It assumes good intent from all team members. Key sections: timeline, root cause, impact assessment, action items, what went well, what went wrong. Action items must have owners and deadlines and be tracked to closure.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you set up on-call rotations for ML engineers?
  </summary>
  <div class="tp-qa-answer">
    <p>Rotate weekly among qualified team members. Each rotation has: primary (first responder), secondary (backup), and escalation path (senior engineer, manager). PagerDuty handles alert routing with escalation if not acknowledged within 5 minutes. Track per-engineer incident load to ensure fair distribution. Provide post-on-call recovery time.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What metrics should you track for incident response?
  </summary>
  <div class="tp-qa-answer">
    <p>Key metrics: (1) Time to acknowledge — how long before a human responds, (2) Time to resolve (MTTR) — from detection to resolution, (3) Incident volume — count per week/month, (4) Severity distribution — SEV1/2/3/4 breakdown, (5) SLA breach rate — % of incidents exceeding response/resolution SLAs, (6) On-call load — incidents per engineer per rotation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you handle a silent model failure incident?
  </summary>
  <div class="tp-qa-answer">
    <p>Silent failures are the most dangerous because the system appears healthy. Mitigations: (1) Monitor prediction distribution against expected baseline, (2) Track null/NaN prediction rates, (3) Implement shadow A/B comparison against a known-good model, (4) Add output validation rules (range checks, type checks), (5) Run periodic golden test set evaluations on production data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is an incident commander and when do you need one?
  </summary>
  <div class="tp-qa-answer">
    <p>The incident commander coordinates response for major incidents (SEV1/SEV2). They don't fix the issue themselves — they delegate tasks, communicate status, manage escalation, and ensure the runbook is followed. Needed for any incident involving multiple teams or complex coordination. The commander role rotates among senior engineers.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you prevent alert fatigue in ML monitoring?
  </summary>
  <div class="tp-qa-answer">
    <p>Strategies: (1) Use threshold + duration: alert only if threshold exceeded for N consecutive windows, (2) Severity-based routing: critical alerts page immediately, warnings go to Slack, (3) Deduplicate related alerts into a single incident, (4) Regularly review and retire noisy alerts, (5) Implement maintenance windows for known issues, (6) Track alert-to-incident ratio — aim for >20%. </p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s08-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What should be in a post-incident review for an ML system?
  </summary>
  <div class="tp-qa-answer">
    <p>Include: (1) Detailed timeline with detection, response, and resolution times, (2) Root cause analysis (e.g., data drift, pipeline failure, model bug), (3) Impact assessment (users affected, financial impact), (4) What went well and what went wrong, (5) Specific, measurable action items with owners and deadlines, (6) Changes to monitoring, runbooks, or architecture to prevent recurrence.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is a "silent failure" in ML systems?
a) The system crashes with no error message
b) The system returns results but they're incorrect
c) Alerts are not configured
d) Logs are not generated

<details class="tp-qa-card" data-qid="mlops-s08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) The system returns results but they're incorrect</strong></p><p>Silent failures are especially dangerous because monitoring shows healthy metrics but predictions are wrong.</p></div></details>

**Q2**: What is the response SLA for a SEV1 incident?
a) 1 minute
b) 5 minutes
c) 15 minutes
d) 1 hour

<details class="tp-qa-card" data-qid="mlops-s08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 5 minutes</strong></p><p>SEV1 (Critical) incidents require acknowledgment within 5 minutes.</p></div></details>

**Q3**: What is the primary purpose of a blameless post-mortem?
a) Identify who caused the incident
b) Find system improvements to prevent recurrence
c) Assign blame for accountability
d) Document the incident for legal purposes

<details class="tp-qa-card" data-qid="mlops-s08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Find system improvements to prevent recurrence</strong></p><p>Blameless post-mortems focus on system-level improvements rather than individual blame.</p></div></details>

**Q4**: Which ML-specific metric should be monitored for silent failures?
a) CPU utilization
b) Null/NaN prediction rate
c) Network bandwidth
d) Number of pods

<details class="tp-qa-card" data-qid="mlops-s08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Null/NaN prediction rate</strong></p><p>Tracking null/NaN predictions detects silent model failures.</p></div></details>

**Q5**: What is the incident commander's primary role?
a) Fix the technical issue
b) Coordinate response and communication
c) Write the post-mortem
d) Manage the on-call schedule

<details class="tp-qa-card" data-qid="mlops-s08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Coordinate response and communication</strong></p><p>The incident commander coordinates the team, delegates tasks, and communicates status without fixing issues directly.</p></div></details>

## Exercises

**Easy** — Implement an IncidentDetector with three detectors: high latency (>500ms), null predictions (>5%), and drift (>0.5). Test with sample metrics.

**Medium** — Build a SeverityClassifier that determines SEV1-SEV4 based on user impact percentage and metric drop percentage.

**Medium** — Create a Runbook class with step-by-step procedures for model degradation and data failure incidents.

**Hard** — Implement a PostMortem generator that takes an Incident, builds a timeline, determines root cause, and generates action items with owners.

**Hard** — Build a complete incident response system: detectors → severity classification → runbook execution → SLA tracking → post-mortem generation.

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
- [ ] Have questions ready about how the company uses 16-mlops-production> **Next**: [01 — Threat Landscape →](../17-ai-security-guardrails/01-threat-landscape.md)
