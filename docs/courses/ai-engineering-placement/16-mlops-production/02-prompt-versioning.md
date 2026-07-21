# Prompt Versioning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand why prompt versioning is critical for LLM applications |
| LO2 | Set up a prompt version control system using git and metadata |
| LO3 | Implement prompt templates with version tags |
| LO4 | Manage prompt lifecycles from dev to staging to production |
| LO5 | Automate prompt evaluation across versions |
| LO6 | Integrate prompt versioning with CI/CD pipelines |

## Introduction

Understanding prompt versioning is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering prompt versioning.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding prompt versioning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how prompt versioning works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind prompt versioning
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Why Prompt Versioning | Cost of prompt drift and regressions |
| 2.2 | Versioning Strategies | Git-based, registry-based, hybrid |
| 2.3 | Prompt Templates | Jinja2 templates with version metadata |
| 2.4 | Lifecycle Management | Dev → Staging → Production promotion |
| 2.5 | Automated Evaluation | Regression testing across prompt versions |
| 2.6 | CI/CD for Prompts | Automated validation and deployment |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Prompt Changes] --> B[Template Versioning]
    B --> C[Evaluation Suite]
    C --> D{Pass?}
    D -->|Yes| E[Promote to Staging]
    D -->|No| F[Revise Prompt]
    E --> G[Canary Deploy]
    G --> H{Monitor}
    H -->|OK| I[Promote to Production]
    H -->|Issues| F
```text

## 2.1 Why Prompt Versioning

Prompts are the primary interface to LLM behavior. A small change in wording can dramatically alter output quality, safety, and consistency. Without versioning, teams face prompt drift, regressions from unintentional changes, and inability to roll back.

**Real-world prompt failure scenarios**:

```python

## Scenario: A seemingly harmless change breaks production

## Version 1.0 (production, working)
prompt_v1 = """Extract the customer name, order ID, and total amount from the email below.

Email: {email}

Return JSON format:
{
    "customer_name": "...",
    "order_id": "...",
    "total_amount": ...
}"""

## Version 1.1 (team member removed "Return JSON" line — broke parsing)
prompt_v1_1 = """Extract the customer name, order ID, and total amount from the email below.

Email: {email}
{
    "customer_name": "...",
    "order_id": "...",
    "total_amount": ...
}"""

## Output became unpredictable — LLM often returned markdown or extra text
```text

**Benefits of prompt versioning**:
- **Rollback**: Instantly revert to a known-good prompt version
- **A/B testing**: Compare prompt versions side-by-side with metrics
- **Audit trail**: Know who changed what and when
- **Regression testing**: Automatically test new prompts against a suite of golden examples

```python

## Prompt version metadata structure
prompt_version = {
    "version_id": "v2.1.0",
    "prompt_hash": "sha256:a1b2c3d4...",
    "author": "alice@example.com",
    "created_at": "2025-06-15T10:30:00Z",
    "git_commit": "abc123def",
    "model": "gpt-4o",
    "temperature": 0.3,
    "notes": "Added few-shot examples to improve JSON formatting"
}
```text

---

## 2.2 Versioning Strategies

Three main approaches to prompt versioning:

```mermaid
flowchart TB
    subgraph Git[Git-Based]
        G1[prompts/v1/] --> G2[prompts/v2/]
        G2 --> G3[git tag: prompt-v2.1]
    end
    subgraph Registry[Registry-Based]
        R1[(Prompt Registry)] --> R2[Version Lookup API]
        R2 --> R3[Active Version]
    end
    subgraph Hybrid[Hybrid]
        H1[Git for storage] --> H2[Registry for active version]
        H2 --> H3[Runtime resolution]
    end
```text

**Git-based versioning**:

```python
import hashlib
import json
import os

PROMPTS_DIR = "prompts"

def save_prompt(version_tag, template, metadata):
    version_dir = os.path.join(PROMPTS_DIR, version_tag)
    os.makedirs(version_dir, exist_ok=True)

    with open(os.path.join(version_dir, "template.txt"), "w") as f:
        f.write(template)

    with open(os.path.join(version_dir, "metadata.json"), "w") as f:
        json.dump(metadata, f, indent=2)

    # Git commit (use subprocess in practice)
    print(f"Saved prompt version {version_tag}")
    print(f"Run: git add prompts/ && git commit -m 'prompt: {version_tag}'")

save_prompt("v1.0.0",
    "Translate the following to {language}: {text}",
    {"author": "bob", "model": "gpt-4", "temperature": 0.0}
)
```text

**Registry-based versioning (with SQLite)**:

```python
import sqlite3
import json
from datetime import datetime

class PromptRegistry:
    def __init__(self, db_path="prompts.db"):
        self.conn = sqlite3.connect(db_path)
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS prompts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                version TEXT NOT NULL,
                template TEXT NOT NULL,
                metadata TEXT,
                created_at TIMESTAMP,
                is_active BOOLEAN DEFAULT 0,
                UNIQUE(name, version)
            )
        """)
        self.conn.commit()

    def register(self, name, version, template, metadata=None):
        self.conn.execute(
            "INSERT OR REPLACE INTO prompts (name, version, template, metadata, created_at) VALUES (?, ?, ?, ?, ?)",
            (name, version, template, json.dumps(metadata or {}), datetime.utcnow())
        )
        self.conn.commit()

    def activate(self, name, version):
        self.conn.execute("UPDATE prompts SET is_active = 0 WHERE name = ?", (name,))
        self.conn.execute("UPDATE prompts SET is_active = 1 WHERE name = ? AND version = ?", (name, version))
        self.conn.commit()

    def get_active(self, name):
        cur = self.conn.execute(
            "SELECT version, template, metadata FROM prompts WHERE name = ? AND is_active = 1",
            (name,)
        )
        row = cur.fetchone()
        if row:
            return {"version": row[0], "template": row[1], "metadata": json.loads(row[2])}
        return None

registry = PromptRegistry()
registry.register("translate", "v1", "Translate to {lang}: {text}")
registry.register("translate", "v2", "Translate the following text to {lang}. Only return the translation:\n\n{text}")
registry.activate("translate", "v2")
print(registry.get_active("translate"))
```text

---

## 2.3 Prompt Templates

Use Jinja2 templates for prompts to separate structure from variable data and enable versioned template files.

```python
from jinja2 import Environment, FileSystemLoader, Template
import hashlib

class PromptTemplate:
    def __init__(self, template_str, version="0.0.0", metadata=None):
        self.template = Template(template_str)
        self.version = version
        self.metadata = metadata or {}
        self.hash = hashlib.sha256(template_str.encode()).hexdigest()[:12]

    def render(self, **kwargs):
        return self.template.render(**kwargs)

    def to_dict(self):
        return {
            "version": self.version,
            "hash": self.hash,
            "metadata": self.metadata
        }

## Example prompt template
summary_prompt = PromptTemplate(
    """You are a customer support summarizer. Summarize the following conversation.

Conversation:
{{ conversation }}

Requirements:
- Format as bullet points
- Include: issue type, resolution status, customer sentiment
- Max 3 bullet points

Summary:
""",
    version="v2.3.0",
    metadata={
        "author": "carol",
        "model": "gpt-4o-mini",
        "temperature": 0.2,
        "max_tokens": 200
    }
)

conversation = """Customer: My order hasn't arrived.
Agent: I'm sorry about that. Let me check tracking number #12345.
Agent: It shows delivery scheduled for tomorrow.
Customer: Okay, thank you for checking."""

print(summary_prompt.render(conversation=conversation))
print(f"Hash: {summary_prompt.hash}, Version: {summary_prompt.version}")
```text

**Template versioning with environment loading**:

```python
from pathlib import Path

class PromptManager:
    def __init__(self, prompts_dir="prompt_templates"):
        self.prompts_dir = Path(prompts_dir)
        self.prompts_dir.mkdir(exist_ok=True)
        self.env = Environment(loader=FileSystemLoader(str(self.prompts_dir)))

    def list_versions(self, prompt_name):
        files = sorted(self.prompts_dir.glob(f"{prompt_name}--*.j2"))
        return [f.stem.split("--")[1] for f in files]

    def load(self, prompt_name, version="latest"):
        if version == "latest":
            versions = self.list_versions(prompt_name)
            if not versions:
                raise FileNotFoundError(f"No versions for {prompt_name}")
            version = versions[-1]
        template = self.env.get_template(f"{prompt_name}--{version}.j2")
        return template

    def save(self, prompt_name, version, template_content, metadata=None):
        path = self.prompts_dir / f"{prompt_name}--{version}.j2"
        path.write_text(template_content)
        if metadata:
            meta_path = self.prompts_dir / f"{prompt_name}--{version}.meta.json"
            import json
            json.dump(metadata, open(meta_path, "w"), indent=2)

## Usage
pm = PromptManager()
pm.save("translate", "v1", "Translate to {{ lang }}: {{ text }}", {"author": "dave"})
pm.save("translate", "v2", "Translate the following to {{ lang }}. ONLY the translation:\n{{ text }}")
tmpl = pm.load("translate", "v2")
print(tmpl.render(lang="French", text="Hello, world!"))
```text

---

## 2.4 Lifecycle Management

Prompts move through lifecycle stages akin to software releases: development, testing, staging (canary), and production.

```python
import json
from enum import Enum
from datetime import datetime

class PromptStage(Enum):
    DEVELOPMENT = "dev"
    TESTING = "testing"
    STAGING = "staging"
    PRODUCTION = "production"
    ARCHIVED = "archived"

class PromptLifecycle:
    def __init__(self, registry_path="prompt_lifecycle.json"):
        self.registry_path = registry_path
        self.prompts = {}

    def register(self, name, version, template, stage=PromptStage.DEVELOPMENT):
        if name not in self.prompts:
            self.prompts[name] = []
        self.prompts[name].append({
            "version": version,
            "template": template,
            "stage": stage.value,
            "created_at": datetime.utcnow().isoformat(),
            "deployed_at": None
        })

    def promote(self, name, version, to_stage):
        for p in self.prompts.get(name, []):
            if p["version"] == version:
                p["stage"] = to_stage.value
                if to_stage == PromptStage.PRODUCTION:
                    p["deployed_at"] = datetime.utcnow().isoformat()
                return True
        return False

    def get_prompt(self, name, stage=PromptStage.PRODUCTION):
        prompts = self.prompts.get(name, [])
        for p in reversed(prompts):
            if p["stage"] == stage.value:
                return p
        return prompts[-1] if prompts else None

    def rollback(self, name):
        prompts = self.prompts.get(name, [])
        prod_idx = None
        for i, p in enumerate(prompts):
            if p["stage"] == PromptStage.PRODUCTION.value:
                prod_idx = i
        if prod_idx and prod_idx > 0:
            prev = prompts[prod_idx - 1]
            self.promote(name, prev["version"], PromptStage.PRODUCTION)
            return prev
        return None

## Lifecycle workflow
lc = PromptLifecycle()
lc.register("summarize", "v1", "Summarize: {text}")
lc.register("summarize", "v2", "Summarize concisely: {text}")
lc.promote("summarize", "v1", PromptStage.PRODUCTION)
lc.promote("summarize", "v2", PromptStage.STAGING)

## Canary: 10% of traffic to v2

## If metrics degrade, rollback
import random
def route_request(text, canary_percent=0.1):
    use_canary = random.random() < canary_percent
    stage = PromptStage.STAGING if use_canary else PromptStage.PRODUCTION
    prompt = lc.get_prompt("summarize", stage)
    return prompt["template"].format(text=text)
```text

**Canary deployment strategy**:

```python
class CanaryDeployer:
    def __init__(self, lifecycle, metric_threshold=0.05):
        self.lifecycle = lifecycle
        self.threshold = metric_threshold
        self.canary_percent = 0.01  # Start at 1%

    def deploy_canary(self, name, version):
        self.lifecycle.promote(name, version, PromptStage.STAGING)
        self.canary_percent = 0.01
        print(f"Canary {version} active at {self.canary_percent*100}% traffic")

    def increase_traffic(self):
        self.canary_percent = min(1.0, self.canary_percent * 2)
        print(f"Canary traffic increased to {self.canary_percent*100}%")

    def rollback_if_needed(self, name, current_metrics, baseline_metrics):
        if current_metrics.get("error_rate", 0) > baseline_metrics.get("error_rate", 0) + self.threshold:
            prev = self.lifecycle.rollback(name)
            print(f"Rolled back to {prev['version']} due to error rate increase")
            return True
        return False
```text

---

## 2.5 Automated Evaluation

Regression testing ensures prompt changes do not degrade output quality on golden examples.

```python
import json
from typing import List, Dict
from dataclasses import dataclass

@dataclass
class TestCase:
    input: Dict
    expected_output: str
    evaluator: str  # "exact_match", "contains", "json_valid", "llm_as_judge"

class PromptEvaluator:
    def __init__(self):
        self.test_suite: List[TestCase] = []

    def add_test(self, test_case: TestCase):
        self.test_suite.append(test_case)

    def evaluate(self, prompt_func) -> Dict:
        results = {"passed": 0, "failed": 0, "total": len(self.test_suite), "details": []}

        for tc in self.test_suite:
            output = prompt_func(**tc.input)
            passed = self._check(output, tc)
            results["passed"] += int(passed)
            results["failed"] += int(not passed)
            results["details"].append({
                "input": tc.input,
                "output": output,
                "expected": tc.expected_output,
                "passed": passed
            })

        results["pass_rate"] = results["passed"] / results["total"] if results["total"] else 1.0
        return results

    def _check(self, output: str, tc: TestCase) -> bool:
        if tc.evaluator == "exact_match":
            return output.strip() == tc.expected_output.strip()
        elif tc.evaluator == "contains":
            return tc.expected_output in output
        elif tc.evaluator == "json_valid":
            try:
                json.loads(output)
                return True
            except json.JSONDecodeError:
                return False
        elif tc.evaluator == "llm_as_judge":
            # Use another LLM to judge quality (simplified here)
            return True
        return False

## Example usage
eval = PromptEvaluator()
eval.add_test(TestCase(
    input={"text": "The sky is blue."},
    expected_output="The sky is blue.",
    evaluator="contains"
))
eval.add_test(TestCase(
    input={"text": "Translate hello to French"},
    expected_output="bonjour",
    evaluator="contains"
))

def summarize_v1(**kw):
    return f"Summary: {kw['text']}"

results = eval.evaluate(summarize_v1)
print(f"Pass rate: {results['pass_rate']:.0%}")
```text

**LLM-as-judge evaluation**:

```python
def llm_judge(output, expected, criteria="correctness"):
    """Use an LLM to evaluate output quality."""
    judge_prompt = f"""Evaluate the following output compared to the expected answer.

Criteria: {criteria}

Expected: {expected}
Output: {output}

Rate on a scale of 1-5 where 5 is perfect. Return only the number."""

    # In practice: response = openai.chat.completions.create(...)
    # Simulated:
    score = 5 if expected.lower() in output.lower() else 3
    return {"score": score, "passed": score >= 4}
```text

---

## 2.6 CI/CD for Prompts

Automate prompt validation and deployment in CI pipelines.

```python

## .github/workflows/prompt-ci.yml

## name: Prompt CI

## on:

##   pull_request:

##     paths: ['prompts/**']
#

## jobs:

##   validate-prompts:

##     runs-on: ubuntu-latest

##     steps:

##       - uses: actions/checkout@v4

##       - run: pip install -r requirements.txt

##       - name: Run prompt evaluation

##         run: python scripts/evaluate_prompts.py

##       - name: Validate prompt templates

##         run: python scripts/validate_templates.py

##       - name: Check for prompt drift

##         run: python scripts/check_drift.py --baseline production
```text

```python

## scripts/evaluate_prompts.py — runs in CI
import json
import sys
from pathlib import Path

def validate_all_prompts():
    prompt_dir = Path("prompts")
    errors = []

    for template_file in prompt_dir.glob("*.j2"):
        content = template_file.read_text()

        # Check for required sections
        if "{{" not in content:
            errors.append(f"{template_file.name}: No template variables found")

        # Check for unsafe patterns
        unsafe = ["ignore previous instructions", "bypass", "system prompt override"]
        for pattern in unsafe:
            if pattern.lower() in content.lower():
                errors.append(f"{template_file.name}: Contains unsafe pattern: {pattern}")

        # Check template compiles
        from jinja2 import Template
        try:
            Template(content)
        except Exception as e:
            errors.append(f"{template_file.name}: Template error: {e}")

    if errors:
        for e in errors:
            print(f"ERROR: {e}")
        sys.exit(1)
    print("All prompts validated successfully")

validate_all_prompts()
```text

**Automated prompt deployment**:

```python

## scripts/deploy_prompt.py
import argparse
import json
from prompt_registry import PromptRegistry
from prompt_lifecycle import PromptLifecycle, PromptStage

def deploy_prompt(name, version, target_stage, canary=False):
    registry = PromptRegistry()
    lifecycle = PromptLifecycle()

    prompt_data = registry.get_active(name)  # Simplified
    if canary:
        lifecycle.promote(name, version, PromptStage.STAGING)
        print(f"Deployed {name}:{version} to canary (staging)")
    else:
        lifecycle.promote(name, version, target_stage)
        print(f"Deployed {name}:{version} to {target_stage.value}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--name", required=True)
    parser.add_argument("--version", required=True)
    parser.add_argument("--stage", default="production")
    parser.add_argument("--canary", action="store_true")
    args = parser.parse_args()
    deploy_prompt(args.name, args.version, PromptStage(args.stage), args.canary)
```text

---

## TypeScript Parallel

```typescript
// TypeScript prompt versioning with registry
interface PromptVersion {
  name: string;
  version: string;
  template: string;
  metadata: Record<string, unknown>;
  hash: string;
  createdAt: Date;
}

class PromptRegistry {
  private prompts: Map<string, PromptVersion[]> = new Map();

  register(version: PromptVersion): void {
    const list = this.prompts.get(version.name) || [];
    list.push(version);
    this.prompts.set(version.name, list);
  }

  getActive(name: string): PromptVersion | undefined {
    const list = this.prompts.get(name);
    return list ? list[list.length - 1] : undefined;
  }

  render(name: string, variables: Record<string, string>): string {
    const prompt = this.getActive(name);
    if (!prompt) throw new Error(`Prompt "${name}" not found`);
    return prompt.template.replace(/{{(\w+)}}/g, (_, key) => variables[key] || "");
  }
}
```text

---

## Summary

- Prompt versioning prevents regressions from unintentional wording changes
- Use Git-based, registry-based, or hybrid approaches for tracking versions
- Jinja2 templates enable clean separation of prompt structure from variables
- Lifecycle management includes dev, testing, staging (canary), and production stages
- Automated evaluation with golden test cases catches regressions before deployment
- Canary deployments gradually shift traffic to new prompt versions
- CI/CD pipelines should validate, evaluate, and version prompts automatically
- LLM-as-judge evaluation provides nuanced quality assessment
- Every prompt version should include metadata: author, model, temperature, hash
- Rollback mechanisms must be instant and reliable for production incidents

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Iterating on prompts | Version every prompt change | Editing production prompts directly |
| Deploying new prompts | Canary deployment with metrics | Full rollout without testing |
| Prompt evaluation | Golden test suite with auto-checks | Manual spot-checking |
| Team collaboration | Registry with metadata and audit trail | Shared text files or chat messages |
| Rollback | Instant rollback to previous version | Redeploying old code |
| CI integration | Validate templates in pull requests | Merging prompt changes without review |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Why is prompt versioning important for LLM applications?
  </summary>
  <div class="tp-qa-answer">
    <p>Prompt versioning is critical because small wording changes can dramatically alter LLM output. Without versioning, teams face prompt drift (gradual degradation), regressions from unintentional edits, inability to roll back bad prompts, and no audit trail for debugging. Production LLM applications require the same rigor around prompt management as software versioning.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are three strategies for prompt versioning?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Git-based</strong>: Store prompt templates in a Git repository with tags per version. Simple but lacks runtime switching.<br>
    <strong>Registry-based</strong>: Store prompts in a database (SQLite, PostgreSQL) with version metadata and active flag. Enables runtime A/B testing.<br>
    <strong>Hybrid</strong>: Use Git for storage and history, registry for active version resolution at runtime. Best for production systems.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What metadata should be stored with each prompt version?
  </summary>
  <div class="tp-qa-answer">
    <p>Essential metadata includes: version ID, prompt hash (SHA-256), author, creation timestamp, git commit hash, target model, temperature/max_tokens settings, and change notes. Optional: evaluation results (pass rate), deployment date, and associated test case IDs. This enables full auditability and reproducibility.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does canary deployment work for prompts?
  </summary>
  <div class="tp-qa-answer">
    <p>Canary deployment starts by routing a small percentage of traffic (e.g., 1%) to the new prompt version while the rest uses the production version. If metrics (error rate, latency, user feedback) remain healthy, traffic is gradually increased. If issues appear, the canary is rolled back instantly. This minimizes blast radius of bad prompt changes.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is prompt regression testing?
  </summary>
  <div class="tp-qa-answer">
    <p>Prompt regression testing is a suite of golden test cases (input/expected-output pairs) that every prompt version must pass before deployment. Test cases include exact match, contains, JSON validation, and LLM-as-judge evaluation. A failing test stops the prompt from being promoted to production, preventing regressions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you validate prompt templates in CI?
  </summary>
  <div class="tp-qa-answer">
    <p>CI validation checks: (1) template compiles in Jinja2 without syntax errors, (2) all required variables are present, (3) no unsafe patterns (injection attempts, system prompt overrides), (4) template passes evaluation against the test suite, (5) metadata is complete. Failures prevent the PR from merging.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is prompt drift and how do you detect it?
  </summary>
  <div class="tp-qa-answer">
    <p>Prompt drift occurs when LLM outputs gradually degrade because the base model is updated, the prompt subtly changes over time, or user input distribution shifts. Detect it by tracking evaluation pass rates over time, monitoring output distributions (semantic similarity to golden outputs), and comparing metrics like latency and refusal rates against baselines.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is the LLM-as-judge evaluation pattern?
  </summary>
  <div class="tp-qa-answer">
    <p>LLM-as-judge uses a separate LLM (often a stronger model) to evaluate the output quality of another LLM. The judge LLM receives the input, expected output, and actual output, then rates quality on a scale or criteria. This captures nuanced quality aspects that exact matching misses, but adds cost and latency.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle prompt rollback in production?
  </summary>
  <div class="tp-qa-answer">
    <p>Rollback requires the registry to store the previous production version. When triggered (manually or by alert), the system sets the previous version as active and logs the rollback event. For instant rollback, keep both versions in memory and toggle via feature flags. Git rollback is too slow for production incidents.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s02-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you A/B test prompt versions?
  </summary>
  <div class="tp-qa-answer">
    <p>Assign a unique version tag to each prompt variant, route a percentage of requests to each variant using deterministic hashing (for consistency), collect metrics (completion rate, latency, user satisfaction), and compare statistically. Use the registry to activate the winning variant and archive the loser.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the primary benefit of prompt versioning?
a) Faster LLM inference
b) Reproducibility, rollback, and regression prevention
c) Reduced token usage
d) Better model training

<details class="tp-qa-card" data-qid="mlops-s02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Reproducibility, rollback, and regression prevention</strong></p><p>Prompt versioning ensures you can reproduce any past output, roll back bad changes, and prevent regressions through automated testing.</p></div></details>

**Q2**: Which approach enables runtime A/B testing of prompts?
a) Git-based versioning
b) Registry-based versioning
c) File-based versioning
d) Memory-only versioning

<details class="tp-qa-card" data-qid="mlops-s02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Registry-based versioning</strong></p><p>A registry with an active-version flag allows runtime switching between prompt versions without code deployment.</p></div></details>

**Q3**: What does a canary deployment for prompts do?
a) Routes all traffic to the new version immediately
b) Routes a small percentage of traffic to the new version
c) Deploys the prompt to a separate server
d) A/B tests users with surveys

<details class="tp-qa-card" data-qid="mlops-s02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Routes a small percentage of traffic to the new version</strong></p><p>Canary deployment starts with low traffic and gradually increases if metrics are healthy.</p></div></details>

**Q4**: What is NOT a typical prompt regression test type?
a) Exact match
b) Contains check
c) Load testing
d) JSON validation

<details class="tp-qa-card" data-qid="mlops-s02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Load testing</strong></p><p>Load testing measures system performance under stress, not prompt output correctness.</p></div></details>

**Q5**: What should be included in prompt version metadata?
a) Author, model, temperature, hash
b) Only the prompt text
c) CPU usage metrics
d) Database connection strings

<details class="tp-qa-card" data-qid="mlops-s02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Author, model, temperature, hash</strong></p><p>Metadata should capture who created it, what model it targets, inference settings, and a content hash for integrity verification.</p></div></details>

## Exercises

**Easy** — Create a Git-based prompt versioning system that saves templates to directories named by version. Add a function that loads the latest version.

**Medium** — Implement a SQLite-based PromptRegistry with register, activate, and get_active methods. Test with two versions of a translation prompt.

**Medium** — Build a PromptEvaluator with 5 test cases (mix of exact_match, contains, json_valid). Run it against a prompt function and report pass rate.

**Hard** — Implement a canary deployment system that starts at 1% traffic, doubles every minute, and rolls back if error rate exceeds 5%. Use the PromptLifecycle class.

**Hard** — Create a GitHub Actions workflow that validates all Jinja2 templates in a prompts/ directory, runs them against a golden test suite, and blocks the PR if pass rate is below 80%.

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
- [ ] Have questions ready about how the company uses 16-mlops-production> **Next**: [03 — Data Versioning →](03-data-versioning.md)


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

- How this connects to MLOps & Production fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master prompt versioning?
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

Understanding the evolution of prompt versioning helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding prompt versioning at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of prompt versioning like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply prompt versioning concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of prompt versioning?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply prompt versioning in real systems?
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

When applying prompt versioning to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production