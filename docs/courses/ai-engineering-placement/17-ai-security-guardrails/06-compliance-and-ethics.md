<!-- Clear Language: Keep sentences under 50 words -->
# Compliance and Ethics

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand AI compliance frameworks and regulations |
| LO2 | Implement GDPR and data privacy requirements for AI |
| LO3 | Build fairness assessment and bias detection tools |
| LO4 | Deploy model explainability for regulated industries |
| LO5 | Set up compliance documentation and audit trails |
| LO6 | Design ethical AI guidelines and review processes |

## Introduction

AI systems face unique security threats. Prompt injection, data leakage, and content abuse require specialized defenses. This module covers threat modeling, guardrails, and compliance for production AI.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding compliance and ethics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how compliance and ethics works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Compliance Frameworks | GDPR, EU AI Act, HIPAA for AI |
| 6.2 | Data Privacy | Consent, right to explanation, data deletion |
| 6.3 | Fairness & Bias | Demographic parity, equal opportunity metrics |
| 6.4 | Explainability | SHAP, LIME, feature importance |
| 6.5 | Documentation | Model cards, data sheets, audit trails |
| 6.6 | Ethical AI | Principles, review board, incident response |

## Chapter Roadmap

```mermaid
flowchart TB
    subgraph Regulations[Regulations]
        R1[GDPR]
        R2[EU AI Act]
        R3[HIPAA]
        R4[CCPA]
    end
    subgraph Requirements[Compliance Requirements]
        REQ1[Data Privacy]
        REQ2[Fairness]
        REQ3[Explainability]
        REQ4[Documentation]
    end
    subgraph Implementation[Implementation]
        IMP1[Bias Detection]
        IMP2[SHAP/LIME]
        IMP3[Model Cards]
        IMP4[Audit Logs]
    end
    Regulations --> Requirements
    Requirements --> Implementation
```text

## 6.1 Compliance Frameworks

Multiple regulations govern AI systems. Understanding which apply to your application is the first step in compliance.

```python
from enum import Enum
from typing import List, Dict, Optional
from datetime import datetime

class AIRegulation(Enum):
    GDPR = "GDPR — EU General Data Protection Regulation"
    EU_AI_ACT = "EU AI Act — Risk-based AI regulation"
    HIPAA = "HIPAA — US Health Insurance Portability and Accountability Act"
    CCPA = "CCPA — California Consumer Privacy Act"
    ADPPA = "ADPPA — American Data Privacy and Protection Act"
    PIPEDA = "PIPEDA — Canada Personal Information Protection Act"

class ComplianceChecklist:
    """Check compliance requirements for AI systems."""

    REGULATION_REQUIREMENTS = {
        AIRegulation.GDPR: [
            "Right to be informed about data processing",
            "Right of access to personal data",
            "Right to rectification of inaccurate data",
            "Right to erasure (right to be forgotten)",
            "Right to restrict processing",
            "Right to data portability",
            "Right to object to processing",
            "Rights related to automated decision-making and profiling"
        ],
        AIRegulation.EU_AI_ACT: [
            "Risk classification (unacceptable, high, limited, minimal)",
            "Conformity assessment for high-risk AI",
            "Technical documentation requirements",
            "Transparency obligations",
            "Human oversight for high-risk systems",
            "Accuracy, robustness, and cybersecurity requirements"
        ],
        AIRegulation.HIPAA: [
            "Protected Health Information (PHI) safeguards",
            "Privacy Rule — patient consent for data use",
            "Security Rule — administrative, physical, technical safeguards",
            "Breach notification within 60 days",
            "Minimum necessary standard for data access",
            "Business Associate Agreements with vendors"
        ]
    }

    def __init__(self):
        self.checks = []

    def add_requirement(self, regulation: AIRegulation, requirement: str):
        self.checks.append({
            "regulation": regulation.value,
            "requirement": requirement,
            "status": "pending",
            "evidence": None
        })

    def complete_check(self, requirement: str, evidence: str):
        for c in self.checks:
            if c["requirement"] == requirement:
                c["status"] = "completed"
                c["evidence"] = evidence

    def generate_report(self) -> Dict:
        total = len(self.checks)
        completed = sum(1 for c in self.checks if c["status"] == "completed")
        return {
            "total_checks": total,
            "completed": completed,
            "pending": total - completed,
            "completion_pct": round(completed / total * 100, 1) if total else 0,
            "by_regulation": {}
        }

checklist = ComplianceChecklist()
for reg in [AIRegulation.GDPR, AIRegulation.EU_AI_ACT]:
    for req in ComplianceChecklist.REGULATION_REQUIREMENTS.get(reg, []):
        checklist.add_requirement(reg, req)

print(f"Total compliance checks: {checklist.generate_report()['total_checks']}")
print(f"GDPR requirements: {len(ComplianceChecklist.REGULATION_REQUIREMENTS[AIRegulation.GDPR])}")
```text

**Risk classification per EU AI Act**:

```python
class EUAIActRiskClassifier:
    """Classify AI systems per EU AI Act risk categories."""

    RISK_LEVELS = {
        "unacceptable": "Prohibited — systems that manipulate behavior, social scoring, real-time biometric surveillance",
        "high": "High-risk — critical infrastructure, education, employment, law enforcement, migration, justice",
        "limited": "Limited risk — chatbots, emotion recognition, biometric categorization",
        "minimal": "Minimal risk — AI-enabled video games, spam filters"
    }

    def classify(self, system_description: str, use_case: str, domain: str) -> Dict:
        """Classify an AI system based on its characteristics."""
        score = 0

        # Scoring heuristics
        risk_keywords = {
            "unacceptable": ["social scoring", "manipulative", "real-time biometric", "mass surveillance"],
            "high": ["critical", "health", "hiring", "credit", "law enforcement", "migration", "justice"],
            "limited": ["chatbot", "customer service", "content generation", "recommendation"],
        }

        desc_lower = f"{system_description} {use_case} {domain}".lower()

        for level, keywords in risk_keywords.items():
            for kw in keywords:
                if kw in desc_lower:
                    return {
                        "risk_level": level,
                        "risk_score": {"unacceptable": 4, "high": 3, "limited": 2, "minimal": 1}[level],
                        "description": self.RISK_LEVELS[level],
                        "requirements": self._get_requirements(level)
                    }

        return {
            "risk_level": "minimal",
            "risk_score": 1,
            "description": self.RISK_LEVELS["minimal"],
            "requirements": self._get_requirements("minimal")
        }

    def _get_requirements(self, level: str) -> List[str]:
        base = ["Documentation", "Transparency", "Human oversight"]
        if level == "high":
            return base + ["Conformity assessment", "Risk management", "Data governance", "Technical robustness"]
        if level == "unacceptable":
            return ["Prohibited — cannot be deployed"]
        return base

classifier = EUAIActRiskClassifier()

systems = [
    ("AI resume screening for hiring", "employment", "HR tech"),
    ("Chatbot for customer support", "customer service", "e-commerce"),
    ("Real-time facial recognition in public", "law enforcement", "security"),
]

for desc, use, domain in systems:
    result = classifier.classify(desc, use, domain)
    print(f"\n{desc}")
    print(f"  Risk Level: {result['risk_level'].upper()}")
    print(f"  Requirements: {result['requirements'][:2]}")
```text

---

## 6.2 Data Privacy

GDPR and similar regulations require specific data privacy practices for AI systems.

```python
import hashlib
import json
from datetime import datetime
from typing import List, Optional

class DataPrivacyManager:
    """Manage data privacy compliance for AI systems."""

    def __init__(self):
        self.consent_records = {}
        self.data_subject_requests = []
        self.personal_data_inventory = []

    def log_consent(self, user_id: str, purpose: str, granted: bool, timestamp: str = None):
        """Record consent for data processing."""
        record = {
            "user_id": user_id,
            "purpose": purpose,
            "granted": granted,
            "timestamp": timestamp or datetime.utcnow().isoformat()
        }
        if user_id not in self.consent_records:
            self.consent_records[user_id] = []
        self.consent_records[user_id].append(record)
        print(f"Consent {'granted' if granted else 'withdrawn'} for {user_id}: {purpose}")

    def check_consent(self, user_id: str, purpose: str) -> bool:
        """Check if user has granted consent for a purpose."""
        records = self.consent_records.get(user_id, [])
        if not records:
            return False
        latest = records[-1]
        return latest["purpose"] == purpose and latest["granted"]

    def register_data_subject_request(self, user_id: str, request_type: str) -> str:
        """Handle GDPR data subject requests (access, deletion, portability)."""
        request_id = f"dsr-{hash(user_id + str(datetime.utcnow().timestamp()))}"
        request = {
            "request_id": request_id,
            "user_id": user_id,
            "type": request_type,
            "status": "received",
            "created_at": datetime.utcnow().isoformat(),
            "deadline": None
        }

        # Set deadline based on request type
        from datetime import timedelta
        if request_type in ["access", "deletion", "portability"]:
            request["deadline"] = (datetime.utcnow() + timedelta(days=30)).isoformat()

        self.data_subject_requests.append(request)
        print(f"DSR registered: {request_type} for {user_id} (ID: {request_id})")
        return request_id

    def fulfill_access_request(self, user_id: str) -> Dict:
        """Fulfill GDPR right of access — return all data held about user."""
        user_data = {
            "user_id": user_id,
            "consent_records": self.consent_records.get(user_id, []),
            "stored_data": self._get_user_data(user_id),
            "processing_purposes": ["model_training", "inference", "analytics"]
        }
        return user_data

    def fulfill_deletion_request(self, user_id: str) -> bool:
        """Fulfill GDPR right to erasure."""
        print(f"Deleting all data for {user_id}...")
        if user_id in self.consent_records:
            del self.consent_records[user_id]
        # In practice: anonymize or delete from all systems
        return True

    def anonymize_data(self, data: dict, pii_fields: List[str]) -> dict:
        """Anonymize PII fields using hashing."""
        anonymized = data.copy()
        for field in pii_fields:
            if field in anonymized:
                value = str(anonymized[field])
                anonymized[field] = hashlib.sha256(value.encode()).hexdigest()[:12]
        return anonymized

    def _get_user_data(self, user_id: str) -> List[Dict]:
        """Get all stored data for a user (simulated)."""
        return [
            {"data_type": "profile", "fields": ["name", "email"], "retention_days": 730},
            {"data_type": "interactions", "fields": ["queries", "feedback"], "retention_days": 90}
        ]

privacy = DataPrivacyManager()
privacy.log_consent("user_123", "model_training", True)
privacy.log_consent("user_123", "analytics", True)

## Check consent before training
if privacy.check_consent("user_123", "model_training"):
    print("User consented to model training — proceeding")

## Handle deletion request
req_id = privacy.register_data_subject_request("user_123", "deletion")
privacy.fulfill_deletion_request("user_123")

## Anonymization example
record = {"name": "Alice Johnson", "email": "alice@example.com", "age": 30}
anon = privacy.anonymize_data(record, ["name", "email"])
print(f"Anonymized: {anon}")
```text

**Data retention policy enforcement**:

```python
class RetentionPolicy:
    """Enforce data retention policies for AI training data."""

    def __init__(self):
        self.policies = []

    def add_policy(self, data_type: str, retention_days: int, action: str = "delete"):
        self.policies.append({"data_type": data_type, "retention_days": retention_days, "action": action})

    def check_expiry(self, record_date: str, data_type: str) -> Dict:
        from datetime import timedelta
        record_dt = datetime.fromisoformat(record_date)
        for policy in self.policies:
            if policy["data_type"] == data_type:
                expiry = record_dt + timedelta(days=policy["retention_days"])
                is_expired = datetime.utcnow() > expiry
                return {
                    "expired": is_expired,
                    "expiry_date": expiry.isoformat(),
                    "action": policy["action"] if is_expired else "none",
                    "days_remaining": (expiry - datetime.utcnow()).days if not is_expired else 0
                }
        return {"expired": False, "action": "none"}

rp = RetentionPolicy()
rp.add_policy("training_logs", 90, "anonymize")
rp.add_policy("raw_user_data", 365, "delete")

print(rp.check_expiry("2024-01-15T00:00:00", "training_logs"))
```text

---

## 6.3 Fairness & Bias

Fairness metrics detect and measure bias in ML models across demographic groups.

```python
import numpy as np
import pandas as pd
from typing import Dict, List

class FairnessAssessor:
    """Assess model fairness across demographic groups."""

    def __init__(self):
        self.metrics = {}

    def demographic_parity(self, predictions: np.ndarray, groups: np.ndarray) -> Dict:
        """Check if prediction rates are equal across groups (demographic parity)."""
        unique_groups = np.unique(groups)
        group_rates = {}

        for group in unique_groups:
            mask = groups == group
            group_rates[str(group)] = float(predictions[mask].mean())

        max_rate = max(group_rates.values())
        min_rate = min(group_rates.values())
        disparity = max_rate - min_rate

        return {
            "metric": "demographic_parity",
            "group_rates": group_rates,
            "disparity": round(disparity, 4),
            "passes": disparity < 0.1,
            "threshold": 0.1
        }

    def equal_opportunity(self, predictions: np.ndarray, labels: np.ndarray, groups: np.ndarray) -> Dict:
        """Check if true positive rates are equal across groups."""
        unique_groups = np.unique(groups)
        group_tpr = {}

        for group in unique_groups:
            mask = groups == group
            actual_positive = labels[mask] == 1
            pred_positive = predictions[mask] == 1
            tp = (actual_positive & pred_positive).sum()
            actual_p = actual_positive.sum()
            group_tpr[str(group)] = float(tp / actual_p) if actual_p > 0 else 0

        max_tpr = max(group_tpr.values())
        min_tpr = min(group_tpr.values())
        disparity = max_tpr - min_tpr

        return {
            "metric": "equal_opportunity",
            "group_tprs": group_tpr,
            "disparity": round(disparity, 4),
            "passes": disparity < 0.1
        }

    def predictive_parity(self, predictions: np.ndarray, labels: np.ndarray, groups: np.ndarray) -> Dict:
        """Check if precision is equal across groups."""
        unique_groups = np.unique(groups)
        group_precision = {}

        for group in unique_groups:
            mask = groups == group
            pred_positive = predictions[mask] == 1
            tp = ((labels[mask] == 1) & pred_positive).sum()
            pp = pred_positive.sum()
            group_precision[str(group)] = float(tp / pp) if pp > 0 else 0

        return {
            "metric": "predictive_parity",
            "group_precisions": group_precision,
            "disparity": round(max(group_precision.values()) - min(group_precision.values()), 4),
            "passes": (max(group_precision.values()) - min(group_precision.values())) < 0.1
        }

    def comprehensive_assessment(self, predictions: np.ndarray, labels: np.ndarray, groups: np.ndarray) -> Dict:
        return {
            "demographic_parity": self.demographic_parity(predictions, groups),
            "equal_opportunity": self.equal_opportunity(predictions, labels, groups),
            "predictive_parity": self.predictive_parity(predictions, labels, groups),
            "overall_pass": all([
                self.demographic_parity(predictions, groups)["passes"],
                self.equal_opportunity(predictions, labels, groups)["passes"],
                self.predictive_parity(predictions, labels, groups)["passes"]
            ])
        }

assessor = FairnessAssessor()
n = 1000
np.random.seed(42)
predictions = np.random.binomial(1, 0.6, n)
labels = np.random.binomial(1, 0.6, n)
groups = np.random.choice(["group_a", "group_b"], n)

results = assessor.comprehensive_assessment(predictions, labels, groups)
print(json.dumps({k: v for k, v in results.items() if k != "overall_pass"}, indent=2, default=str))
print(f"Overall fairness: {'PASS' if results['overall_pass'] else 'FAIL'}")
```text

**Bias mitigation techniques**:

```python
class BiasMitigator:
    """Apply bias mitigation techniques to ML models."""

    @staticmethod
    def reweigh_training_data(data: pd.DataFrame, sensitive_column: str, target_column: str) -> pd.DataFrame:
        """Reweight samples to ensure demographic parity in training."""
        groups = data[sensitive_column].unique()
        weights = np.ones(len(data))

        for group in groups:
            group_mask = data[sensitive_column] == group
            positive_mask = data[target_column] == 1
            # Calculate group-specific weight
            group_count = group_mask.sum()
            positive_count = (group_mask & positive_mask).sum()

            if positive_count > 0 and group_count > 0:
                # Weight to balance positive rates
                weights[group_mask & positive_mask] = 1.0 / (positive_count / group_count)

        data["sample_weight"] = weights
        return data

    @staticmethod
    def threshold_adjustment(predictions: np.ndarray, groups: np.ndarray, group_thresholds: Dict) -> np.ndarray:
        """Apply group-specific prediction thresholds for equal opportunity."""
        adjusted = predictions.copy()
        for group, threshold in group_thresholds.items():
            mask = groups == group
            adjusted[mask] = (predictions[mask] > threshold).astype(int)
        return adjusted

mitigator = BiasMitigator()
df = pd.DataFrame({
    "feature": np.random.randn(100),
    "group": np.random.choice(["A", "B"], 100),
    "target": np.random.binomial(1, 0.3, 100)
})
reweighed = mitigator.reweigh_training_data(df, "group", "target")
print(f"Reweighed data: {reweighed['sample_weight'].describe()}")
```text

---

## 6.4 Explainability

Model explainability is required for high-risk AI systems under the EU AI Act.

```python
import numpy as np
import pandas as pd
from typing import Dict, List, Callable

class SHAPExplainer:
    """Simplified SHAP-like feature importance explainer."""

    def __init__(self, model_predict_fn: Callable, feature_names: List[str]):
        self.predict = model_predict_fn
        self.feature_names = feature_names
        self.baseline = None

    def compute_baseline(self, X: np.ndarray):
        self.baseline = self.predict(X).mean()

    def explain(self, X_sample: np.ndarray) -> Dict:
        if self.baseline is None:
            self.compute_baseline(X_sample)

        n_features = X_sample.shape[1]
        shap_values = np.zeros(n_features)
        prediction = self.predict(X_sample.reshape(1, -1))[0]

        # Simplified SHAP: perturbs each feature and measures impact
        for i in range(n_features):
            X_perturbed = X_sample.copy()
            X_perturbed[i] = X_sample[i] * 1.1  # 10% perturbation
            perturbed_pred = self.predict(X_perturbed.reshape(1, -1))[0]
            shap_values[i] = perturbed_pred - prediction

        # Normalize
        shap_values = shap_values / np.sum(np.abs(shap_values))

        return {
            "baseline": float(self.baseline),
            "prediction": float(prediction),
            "shap_values": {self.feature_names[i]: round(float(shap_values[i]), 4) for i in range(n_features)},
            "top_features": sorted(zip(self.feature_names, shap_values), key=lambda x: -abs(x[1]))[:3]
        }

## Simulated model
def mock_model(X):
    return X @ np.array([2.0, -1.0, 0.5]) + 0.1

X_sample = np.array([1.5, -0.5, 2.0])
explainer = SHAPExplainer(mock_model, ["sqft", "bedrooms", "age"])
explanation = explainer.explain(X_sample)
print(json.dumps(explanation, indent=2, default=str))
```text

**LIME explainer**:

```python
class LIMExplainer:
    """Local Interpretable Model-Agnostic Explanations."""

    def __init__(self, model_predict_fn: Callable, feature_names: List[str]):
        self.predict = model_predict_fn
        self.feature_names = feature_names

    def explain_instance(self, X_instance: np.ndarray, num_samples: int = 1000) -> Dict:
        n_features = len(X_instance)
        # Generate perturbed samples
        perturbations = np.random.normal(0, 0.1, (num_samples, n_features))
        perturbed_X = X_instance + perturbations

        # Get predictions
        predictions = self.predict(perturbed_X)

        # Fit simple linear model to approximate local behavior
        from sklearn.linear_model import Ridge
        local_model = Ridge(alpha=1.0)
        local_model.fit(perturbations, predictions)

        coefficients = local_model.coef_

        return {
            "feature_importances": {self.feature_names[i]: round(float(coefficients[i]), 4) for i in range(n_features)},
            "intercept": float(local_model.intercept_),
            "r2_score": float(local_model.score(perturbations, predictions))
        }

lime = LIMExplainer(mock_model, ["sqft", "bedrooms", "age"])
lime_result = lime.explain_instance(np.array([1500, 3, 10]))
print(f"LIME: {lime_result['feature_importances']}")
```text

**Global feature importance**:

```python
class GlobalFeatureImportance:
    """Global model-agnostic feature importance."""

    @staticmethod
    def permutation_importance(model_predict_fn: Callable, X: np.ndarray, y: np.ndarray, feature_names: List[str], metric_fn: Callable) -> Dict:
        """Compute permutation-based feature importance."""
        baseline_score = metric_fn(y, model_predict_fn(X))
        importances = {}

        for i, name in enumerate(feature_names):
            X_permuted = X.copy()
            np.random.shuffle(X_permuted[:, i])
            permuted_score = metric_fn(y, model_predict_fn(X_permuted))
            importances[name] = float(baseline_score - permuted_score)

        return {"baseline_score": float(baseline_score), "importances": importances}

def mae(y_true, y_pred):
    return np.mean(np.abs(y_true - y_pred))

X = np.random.randn(100, 4)
y = X @ np.array([1.5, -0.5, 0.0, 2.0]) + np.random.randn(100) * 0.1
importance = GlobalFeatureImportance.permutation_importance(mock_model, X, y, ["f1", "f2", "f3", "f4"], mae)
print(json.dumps(importance, indent=2))
```text

---

## 6.5 Documentation

Model cards, data sheets, and audit trails provide the documentation required for compliance.

```python
from datetime import datetime
from typing import List, Dict, Optional

class ModelCard:
    """Model Card — standard documentation for ML models."""

    def __init__(self, model_name: str, version: str):
        self.model_name = model_name
        self.version = version
        self.sections = {
            "model_details": {},
            "intended_use": {},
            "factors": {},
            "metrics": {},
            "evaluation_data": {},
            "training_data": {},
            "quantitative_analyses": {},
            "ethical_considerations": {},
            "caveats_and_recommendations": {}
        }
        self.created_at = datetime.utcnow()

    def add_section(self, section: str, data: Dict):
        if section in self.sections:
            self.sections[section].update(data)

    def generate(self) -> str:
        card = f"# Model Card: {self.model_name} v{self.version}\n"
        card += f"**Created**: {self.created_at.isoformat()}\n\n"

        for section_name, section_data in self.sections.items():
            if section_data:
                card += f"## {section_name.replace('_', ' ').title()}\n"
                for key, value in section_data.items():
                    card += f"- **{key}**: {value}\n"
                card += "\n"

        return card

    def to_dict(self) -> Dict:
        return {
            "model_name": self.model_name,
            "version": self.version,
            "created_at": self.created_at.isoformat(),
            "sections": self.sections
        }

card = ModelCard("HousePricePredictor", "v2.1.0")
card.add_section("model_details", {
    "architecture": "Random Forest Regressor",
    "parameters": "200 trees, max_depth=15",
    "framework": "scikit-learn 1.3.0",
    "training_compute": "4 hours on g4dn.xlarge"
})
card.add_section("intended_use", {
    "primary_use": "Real estate price estimation for residential properties",
    "out_of_scope": "Commercial properties, land-only valuation",
    "users": "Real estate agents, home buyers, appraisers"
})
card.add_section("factors", {
    "demographic_groups": "Tested across urban/suburban/rural areas",
    "evaluation_factors": "Accuracy by property type, location, price range"
})
card.add_section("metrics", {
    "mae": "2.15",
    "rmse": "3.87",
    "r2_score": "0.89",
    "performance_by_region": "Urban: MAE 1.8, Suburban: MAE 2.1, Rural: MAE 3.2"
})
card.add_section("ethical_considerations", {
    "bias_mitigation": "Demographic parity check passed (disparity < 0.05)",
    "fairness_metrics": "Equal opportunity ratio: 0.97 across income brackets",
    "privacy": "No PII in training data, all data anonymized"
})

print(card.generate())
```text

**Data sheet**:

```python
class DataSheet:
    """Data documentation for compliance."""

    def __init__(self, dataset_name: str):
        self.dataset_name = dataset_name
        self.entries = {}

    def add_entry(self, category: str, field: str, value: str):
        if category not in self.entries:
            self.entries[category] = []
        self.entries[category].append({"field": field, "value": value})

    def generate(self) -> str:
        text = f"# Data Sheet: {self.dataset_name}\n\n"
        for category, fields in self.entries.items():
            text += f"## {category}\n"
            for entry in fields:
                text += f"- **{entry['field']}**: {entry['value']}\n"
            text += "\n"
        return text

ds = DataSheet("Property Listings 2025")
ds.add_entry("Collection", "Source", "Public real estate APIs")
ds.add_entry("Collection", "Collection period", "Jan-Dec 2024")
ds.add_entry("Collection", "Volume", "500,000 records")
ds.add_entry("Preprocessing", "Cleaning", "Removed missing >50%, outlier capping at 99th percentile")
ds.add_entry("Preprocessing", "Features", "32 features (12 numeric, 15 categorical, 5 derived)")
ds.add_entry("Legal", "Consent", "All data from public sources, no PII retained")
ds.add_entry("Legal", "Licensing", "MIT license for derived dataset")
ds.add_entry("Ethics", "Bias assessment", "Balanced across urban/suburban/rural, income bias < 2%")
print(ds.generate()[:300])
```text

---

## 6.6 Ethical AI

Establishing ethical AI principles and review processes ensures responsible AI development.

```python
class EthicalAIPrinciples:
    """Ethical AI framework implementation."""

    PRINCIPLES = {
        "fairness": "AI systems should treat all people fairly and not discriminate",
        "transparency": "AI systems should be understandable and explainable",
        "accountability": "Organizations should be responsible for their AI's outcomes",
        "privacy": "AI systems should respect and protect user privacy",
        "safety": "AI systems should be secure and robust against misuse",
        "human_autonomy": "AI should augment human decision-making, not replace it",
        "beneficence": "AI should promote human well-being and social good"
    }

    def __init__(self):
        self.reviews = []
        self.incidents = []

    def create_review(self, project_name: str, description: str, risk_level: str) -> Dict:
        review = {
            "id": f"eth-{len(self.reviews) + 1}",
            "project": project_name,
            "description": description,
            "risk_level": risk_level,
            "status": "pending",
            "checks": {principle: "pending" for principle in self.PRINCIPLES},
            "created_at": datetime.utcnow().isoformat()
        }
        self.reviews.append(review)
        return review

    def approve_principle(self, review_id: str, principle: str, evidence: str):
        for review in self.reviews:
            if review["id"] == review_id:
                review["checks"][principle] = "approved"
                review["evidence"] = evidence
                print(f"✅ {principle} approved for {review_id}")

    def get_review_status(self, review_id: str) -> Dict:
        for review in self.reviews:
            if review["id"] == review_id:
                approved = sum(1 for v in review["checks"].values() if v == "approved")
                total = len(review["checks"])
                return {
                    **review,
                    "approved_count": approved,
                    "total_count": total,
                    "completion": round(approved / total * 100, 1)
                }

    def report_incident(self, incident_type: str, description: str, severity: str):
        incident = {
            "id": f"inc-{len(self.incidents) + 1}",
            "type": incident_type,
            "description": description,
            "severity": severity,
            "reported_at": datetime.utcnow().isoformat(),
            "status": "investigating"
        }
        self.incidents.append(incident)
        print(f"🚨 Ethical incident reported: {incident_type} ({severity})")
        return incident

ethics = EthicalAIPrinciples()
review = ethics.create_review("Customer Support Bot", "LLM-based customer support agent", "limited")
ethics.approve_principle(review["id"], "fairness", "Bias assessment passed all demographic groups")
ethics.approve_principle(review["id"], "transparency", "Response includes confidence levels")
print(f"Review progress: {ethics.get_review_status(review['id'])}")

ethics.report_incident("biased_response", "Model favored male names for promotion recommendations", "high")
```text

**AI ethics review board workflow**:

```python
class EthicsReviewBoard:
    """Simulated ethics review board workflow."""

    def __init__(self):
        self.members = ["Dr. Smith (Ethics)", "Dr. Jones (Technical)", "Ms. Lee (Legal)", "Mr. Patel (Product)"]
        self.pending_reviews = []

    def submit_for_review(self, model_name: str, model_card: Dict) -> str:
        review_id = f"erb-{len(self.pending_reviews) + 1}"
        review = {
            "id": review_id,
            "model": model_name,
            "model_card": model_card,
            "status": "submitted",
            "assigned_reviewer": None,
            "comments": []
        }
        self.pending_reviews.append(review)
        print(f"📋 {model_name} submitted for ethics review ({review_id})")
        return review_id

    def assign_reviewer(self, review_id: str):
        import random
        reviewer = random.choice(self.members)
        for r in self.pending_reviews:
            if r["id"] == review_id:
                r["assigned_reviewer"] = reviewer
                r["status"] = "in_review"
                print(f"Assigned {reviewer} to {review_id}")

    def approve(self, review_id: str, comments: str):
        for r in self.pending_reviews:
            if r["id"] == review_id:
                r["status"] = "approved"
                r["comments"].append(comments)
                print(f"✅ {review_id} approved — {comments}")

    def reject(self, review_id: str, reason: str):
        for r in self.pending_reviews:
            if r["id"] == review_id:
                r["status"] = "rejected"
                r["comments"].append(reason)
                print(f"❌ {review_id} rejected — {reason}")

board = EthicsReviewBoard()
board.submit_for_review("SupportBot-v2", {"fairness": "passed"})
board.assign_reviewer("erb-1")
board.approve("erb-1", "All ethical considerations addressed")
```text

---

## TypeScript Parallel

```typescript
// TypeScript compliance management
interface ComplianceRequirement {
  regulation: string;
  requirement: string;
  status: "pending" | "completed";
}

class ComplianceTracker {
  private requirements: ComplianceRequirement[] = [];

  addRequirement(reg: string, req: string): void {
    this.requirements.push({ regulation: reg, requirement: req, status: "pending" });
  }

  complete(requirement: string): void {
    const r = this.requirements.find(r => r.requirement === requirement);
    if (r) r.status = "completed";
  }

  report(): { total: number; completed: number; pending: number; rate: number } {
    const total = this.requirements.length;
    const completed = this.requirements.filter(r => r.status === "completed").length;
    return { total, completed, pending: total - completed, rate: (completed / total) * 100 };
  }
}

const tracker = new ComplianceTracker();
tracker.addRequirement("GDPR", "Right to erasure");
tracker.addRequirement("GDPR", "Right to access");
tracker.complete("Right to access");
console.log(tracker.report());
```text

---

## Summary

- GDPR, EU AI Act, HIPAA, and CCPA are the key regulations governing AI systems
- The EU AI Act classifies systems as unacceptable, high, limited, or minimal risk
- Data privacy requires consent management, data subject request handling, and anonymization
- Fairness assessment uses demographic parity, equal opportunity, and predictive parity metrics
- Bias mitigation includes data reweighing and threshold adjustment techniques
- SHAP and LIME provide model explainability for regulated AI systems
- Model cards document model details, intended use, metrics, and ethical considerations
- Data sheets document dataset collection, preprocessing, legal, and ethics information
- Ethical AI reviews ensure fairness, transparency, accountability, privacy, safety, and human autonomy
- Compliance documentation must be maintained throughout the model lifecycle

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| GDPR compliance | Consent management + DSR handling | Processing data without consent |
| EU AI Act | Risk classification + documentation | Ignoring risk classification |
| Fairness | Regular bias assessments | Deploying without fairness checks |
| Explainability | SHAP/LIME for high-risk models | Black-box deployment in regulated domains |
| Documentation | Model cards + data sheets | No documentation |
| Ethics | Review board for new models | No ethics oversight |

## Interview Q&A

<details class="tp-qa-card" data-qid="ai-sec-s06-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the EU AI Act and how does it classify AI systems?
  </summary>
  <div class="tp-qa-answer">
    <p>The EU AI Act is a risk-based regulation classifying AI into four categories: Unacceptable (prohibited — social scoring, manipulative AI), High-risk (requires conformity assessment — hiring, credit, law enforcement), Limited risk (transparency obligations — chatbots), Minimal risk (no additional requirements — spam filters). High-risk systems require documentation, risk management, and human oversight.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are the GDPR rights related to AI and automated decision-making?
  </summary>
  <div class="tp-qa-answer">
    <p>Article 22 gives the right to not be subject to solely automated decisions with legal or significant effects. Additional rights: Right to be informed about processing, right of access to data used for decisions, right to rectification, right to erasure, right to data portability, right to object to processing, and the right to an explanation of automated decisions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What are the key fairness metrics for ML models?
  </summary>
  <div class="tp-qa-answer">
    <p>Three primary metrics: (1) Demographic parity — prediction rates are equal across groups, (2) Equal opportunity — true positive rates are equal across groups, (3) Predictive parity — precision is equal across groups. There's a fundamental trade-off (Impossibility Theorem): you cannot simultaneously satisfy all three unless base rates are equal or predictions are perfect.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does SHAP explain model predictions?
  </summary>
  <div class="tp-qa-answer">
    <p>SHAP (SHapley Additive exPlanations) uses cooperative game theory to assign each feature an importance value for a particular prediction. It computes the average marginal contribution of each feature across all possible feature subsets. The sum of SHAP values plus the baseline prediction equals the model's output. This provides both global and local interpretability.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is a Model Card and what should it contain?
  </summary>
  <div class="tp-qa-answer">
    <p>A Model Card is a standardized document that accompanies ML models, containing: Model details (architecture, version, framework), Intended use (primary use, out-of-scope uses), Factors (demographic groups, evaluation factors), Metrics (performance across groups), Evaluation data, Training data, Quantitative analyses, Ethical considerations (bias, fairness, privacy), and Caveats and recommendations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you handle a GDPR data subject access request?
  </summary>
  <div class="tp-qa-answer">
    <p>Process: (1) Verify identity of requester, (2) Locate all personal data across systems (databases, logs, model training data), (3) Compile a response with: data categories, processing purposes, retention periods, data sources, any automated decision-making logic, (4) Respond within 30 days (GDPR deadline), (5) Provide in a machine-readable format (JSON, CSV) upon request.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the difference between demographic parity and equal opportunity?
  </summary>
  <div class="tp-qa-answer">
    <p>Demographic parity requires P(Y_hat=1 | group A) = P(Y_hat=1 | group B) — equal prediction rates regardless of actual outcomes. Equal opportunity requires P(Y_hat=1 | Y=1, group A) = P(Y_hat=1 | Y=1, group B) — equal true positive rates. Demographic parity can force equal outcomes, while equal opportunity focuses on equal accuracy for positive cases.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle the right to explanation under GDPR?
  </summary>
  <div class="tp-qa-answer">
    <p>Provide meaningful information about the logic behind automated decisions: (1) Feature importance — which features most influenced the decision, (2) Counterfactual explanation — what would need to change for a different outcome, (3) Confidence/uncertainty of the prediction, (4) Model limitations and accuracy metrics, (5) The ability to request human review of the decision.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What should an AI ethics review board evaluate?
  </summary>
  <div class="tp-qa-answer">
    <p>Review boards evaluate: (1) Fairness — bias assessment across demographics, (2) Transparency — explainability and documentation, (3) Accountability — clear ownership and oversight, (4) Privacy — data handling and consent, (5) Safety — robustness and guardrails, (6) Human autonomy — appropriate human oversight, (7) Beneficence — positive social impact, (8) Risk assessment — classification per EU AI Act.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s06-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement data anonymization for AI training?
  </summary>
  <div class="tp-qa-answer">
    <p>Techniques: (1) k-anonymity — each record is indistinguishable from at least k-1 others on quasi-identifiers, (2) Differential privacy — add calibrated noise to gradients or outputs (epsilon parameter controls privacy-accuracy trade-off), (3) Generalization — replace exact values with ranges (age 35 → 30-40), (4) Suppression — remove identifying fields entirely, (5) Synthetic data — generate artificial data with similar statistical properties.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which EU AI Act risk category is completely prohibited?
a) High-risk
b) Unacceptable
c) Limited risk
d) Minimal risk

<details class="tp-qa-card" data-qid="ai-sec-s06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Unacceptable</strong></p><p>Unacceptable risk AI systems (social scoring, manipulative AI) are prohibited under the EU AI Act.</p></div></details>

**Q2**: What does demographic parity measure?
a) Equal accuracy across groups
b) Equal prediction rates across groups
c) Equal precision across groups
d) Equal sample sizes across groups

<details class="tp-qa-card" data-qid="ai-sec-s06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Equal prediction rates across groups</strong></p><p>Demographic parity requires that the probability of a positive prediction is the same for all groups.</p></div></details>

**Q3**: Which technique uses cooperative game theory for model explanations?
a) LIME
b) SHAP
c) PCA
d) t-SNE

<details class="tp-qa-card" data-qid="ai-sec-s06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) SHAP</strong></p><p>SHAP uses Shapley values from cooperative game theory to assign feature importance.</p></div></details>

**Q4**: What is the GDPR deadline for responding to data subject access requests?
a) 7 days
b) 14 days
c) 30 days
d) 60 days

<details class="tp-qa-card" data-qid="ai-sec-s06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 30 days</strong></p><p>GDPR requires responding to data subject requests within 30 days (extendable to 60 for complex requests).</p></div></details>

**Q5**: What does a Model Card document?
a) Only model accuracy
b) Model details, intended use, factors, metrics, ethics
c) Only training data
d) Only deployment configuration

<details class="tp-qa-card" data-qid="ai-sec-s06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Model details, intended use, factors, metrics, ethics</strong></p><p>A Model Card is a comprehensive document covering all aspects of a model's lifecycle.</p></div></details>

## Exercises

**Easy** — Implement a ComplianceChecklist for GDPR with 5 requirements and generate a completion report.

**Medium** — Build a FairnessAssessor with demographic parity and equal opportunity metrics. Test with simulated data.

**Medium** — Create a ModelCard generator with 5 sections and 3 fields each. Export to formatted text.

**Hard** — Implement a SHAPExplainer that computes feature importance using perturbation analysis. Test with a mock model.

**Hard** — Build an EthicsReviewBoard with submission, assignment, approval/rejection workflow, and tracking.

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

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 17-ai-security-guardrails. When would you choose one approach over another?
2. Design a system that efficiently handles 17-ai-security-guardrails at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 17-ai-security-guardrails. What was your approach and what was the result?
2. How would you explain 17-ai-security-guardrails to a non-technical stakeholder?

#### Microsoft Style
1. How does 17-ai-security-guardrails integrate with enterprise systems and cloud architectures?
2. What are the security implications of 17-ai-security-guardrails?

#### NVIDIA Style
1. How would you optimize 17-ai-security-guardrails for GPU-accelerated computing?
2. What parallel processing patterns apply to 17-ai-security-guardrails?

#### AI Startup Style
1. How would you implement 17-ai-security-guardrails in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 17-ai-security-guardrails?

### Resume Tips
- **Technical Skills**: List 17-ai-security-guardrails under relevant technical skills
- **Project Description**: "Implemented 17-ai-security-guardrails to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 17-ai-security-guardrails in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 17-ai-security-guardrails
- [ ] Practice 3-5 problems related to 17-ai-security-guardrails
- [ ] Prepare 2 real-world examples of using 17-ai-security-guardrails
- [ ] Know the time/space complexity of common 17-ai-security-guardrails operations
- [ ] Have questions ready about how the company uses 17-ai-security-guardrails> **Next**: [01 — Computer Vision Basics →](../18-multimodal-ai-voice/01-computer-vision-basics.md)


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

- How this connects to AI Security & Guardrails fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master compliance and ethics?
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

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of compliance and ethics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding compliance and ethics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of compliance and ethics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply compliance and ethics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of compliance and ethics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply compliance and ethics in real systems?
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

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of AI Security & Guardrails?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering AI Security & Guardrails, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
