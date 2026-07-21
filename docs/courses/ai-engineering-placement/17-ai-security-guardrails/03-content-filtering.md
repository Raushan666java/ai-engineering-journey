# Content Filtering

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand content filtering requirements for LLM applications |
| LO2 | Implement input content filters for toxicity, hate, and PII |
| LO3 | Build output content filters for compliance and safety |
| LO4 | Deploy topic restriction and category blocking |
| LO5 | Set up safety classifiers using LLMs and ML models |
| LO6 | Design content moderation pipelines for production |

## Introduction

Understanding content filtering is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering content filtering.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding content filtering is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how content filtering works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind content filtering
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Content Filtering Overview | Types of content to filter |
| 3.2 | Input Filters | Toxicity, harassment, PII, spam |
| 3.3 | Output Filters | Safety, compliance, brand alignment |
| 3.4 | Topic Restriction | Category allow/block lists |
| 3.5 | Safety Classifiers | ML-based and LLM-based filtering |
| 3.6 | Moderation Pipeline | Multi-stage content moderation |

## Chapter Roadmap

```mermaid
flowchart TB
    A[User Input] --> B[Input Filter]
    B --> C{Toxic?}
    C -->|Yes| D[Block + Warning]
    C -->|No| E[PII Scan]
    E --> F[LLM]
    F --> G[Output Filter]
    G --> H{Safe?}
    H -->|Yes| I[Return]
    H -->|No| J[Fallback + Log]
    D --> K[Moderation Log]
    J --> K
```text

## 3.1 Content Filtering Overview

Content filtering for LLM applications encompasses both input filtering (what users can send) and output filtering (what the model can return). Effective filtering uses multiple techniques: keyword matching, regex patterns, ML classifiers, and LLM-as-judge evaluation.

```python
from enum import Enum
from typing import List, Tuple, Optional
from dataclasses import dataclass
import re

class ContentCategory(Enum):
    TOXICITY = "toxicity"
    HATE_SPEECH = "hate_speech"
    HARASSMENT = "harassment"
    SEXUAL = "sexual_content"
    VIOLENCE = "violence"
    PII = "pii"
    SPAM = "spam"
    MISINFORMATION = "misinformation"
    SELF_HARM = "self_harm"
    CHILD_SAFETY = "child_safety"

@dataclass
class ContentFilterResult:
    passed: bool
    category: Optional[ContentCategory]
    confidence: float
    details: str
    action: str  # "block", "flag", "warn", "allow"

class BaseFilter:
    """Base class for content filters."""

    def __init__(self, name: str):
        self.name = name
        self.stats = {"checked": 0, "blocked": 0, "flagged": 0}

    def filter(self, text: str) -> ContentFilterResult:
        raise NotImplementedError

    def record_result(self, result: ContentFilterResult):
        self.stats["checked"] += 1
        if result.action == "block":
            self.stats["blocked"] += 1
        elif result.action == "flag":
            self.stats["flagged"] += 1

## Toxicity keyword filter
class ToxicityFilter(BaseFilter):
    def __init__(self):
        super().__init__("toxicity_filter")
        self.toxic_patterns = [
            r"\b(hate|kill|murder|die)\s+(you|them|everyone)\b",
            r"\b(idiot|stupid|dumb)\s+(ass|fuck)\b",
            r"\b(go\s+)?(kill|hurt|harm)\s+yourself\b",
        ]

    def filter(self, text: str) -> ContentFilterResult:
        text_lower = text.lower()
        for pattern in self.toxic_patterns:
            if re.search(pattern, text_lower):
                result = ContentFilterResult(
                    passed=False, category=ContentCategory.TOXICITY,
                    confidence=0.9, details=f"Toxic pattern matched: {pattern[:30]}...",
                    action="block"
                )
                self.record_result(result)
                return result

        result = ContentFilterResult(
            passed=True, category=None,
            confidence=1.0, details="Clean",
            action="allow"
        )
        self.record_result(result)
        return result

toxicity = ToxicityFilter()
print(toxicity.filter("You are an idiot"))
print(toxicity.filter("What is the weather today?"))
```text

---

## 3.2 Input Filters

Input filters protect the LLM from receiving harmful or inappropriate content.

```python
class InputFilterPipeline:
    """Multi-stage input content filtering pipeline."""

    def __init__(self):
        self.filters = []

    def add_filter(self, filter_instance: BaseFilter):
        self.filters.append(filter_instance)

    def process(self, text: str) -> Tuple[bool, List[ContentFilterResult]]:
        """Process text through all input filters."""
        results = []

        for f in self.filters:
            result = f.filter(text)
            results.append(result)
            if result.action == "block":
                return False, results

        return True, results

    def summary(self) -> dict:
        return {f.name: f.stats for f in self.filters}

## Build input filter pipeline
class PIIFilter(BaseFilter):
    def __init__(self):
        super().__init__("pii_filter")
        self.pii_patterns = [
            (r"\b\d{3}[-.]?\d{3}[-.]?\d{4}\b", "phone"),
            (r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b", "email"),
            (r"\b\d{3}-\d{2}-\d{4}\b", "ssn"),
            (r"\b\d{16}\b", "credit_card"),
        ]

    def filter(self, text: str) -> ContentFilterResult:
        for pattern, name in self.pii_patterns:
            if re.findall(pattern, text):
                result = ContentFilterResult(
                    passed=False, category=ContentCategory.PII,
                    confidence=0.95, details=f"PII detected: {name}",
                    action="block"
                )
                self.record_result(result)
                return result
        result = ContentFilterResult(passed=True, category=None, confidence=1.0, details="No PII", action="allow")
        self.record_result(result)
        return result

class HateSpeechFilter(BaseFilter):
    def __init__(self):
        super().__init__("hate_speech")
        self.hate_patterns = [
            r"\b(hate|attack|destroy)\s+(all|every)\s+\w+(people|group|race|religion)\b",
        ]

    def filter(self, text: str) -> ContentFilterResult:
        for pattern in self.hate_patterns:
            if re.search(pattern, text.lower()):
                return ContentFilterResult(passed=False, category=ContentCategory.HATE_SPEECH, confidence=0.85, details="Hate speech detected", action="block")
        return ContentFilterResult(passed=True, category=None, confidence=1.0, details="Clean", action="allow")

class SpamFilter(BaseFilter):
    def __init__(self):
        super().__init__("spam_filter")
        self.spam_patterns = [
            r"\bbuy\s+now\b", r"\blimited\s+time\s+offer\b", r"\bclick\s+here\b",
            r"\bcongratulations.*won\b", r"\bfree\s+(money|prize|gift)\b",
            r"\b(chance|opportunity)\s+of\s+a\s+lifetime\b",
        ]

    def filter(self, text: str) -> ContentFilterResult:
        spam_score = 0
        for pattern in self.spam_patterns:
            if re.search(pattern, text.lower()):
                spam_score += 1
        if spam_score >= 3:
            return ContentFilterResult(passed=False, category=ContentCategory.SPAM, confidence=min(0.5 + spam_score * 0.1, 0.95), details=f"Spam score: {spam_score}", action="block")
        if spam_score >= 1:
            return ContentFilterResult(passed=True, category=ContentCategory.SPAM, confidence=0.3, details="Low spam suspicion", action="flag")
        return ContentFilterResult(passed=True, category=None, confidence=1.0, details="Clean", action="allow")

input_pipeline = InputFilterPipeline()
input_pipeline.add_filter(ToxicityFilter())
input_pipeline.add_filter(HateSpeechFilter())
input_pipeline.add_filter(PIIFilter())
input_pipeline.add_filter(SpamFilter())

tests = [
    "Hello, how can I help you today?",
    "You are a stupid idiot!",
    "My email is john@example.com and SSN is 123-45-6789",
    "Buy now! Limited time offer! Click here! Free money!",
]

for test in tests:
    passed, results = input_pipeline.process(test)
    if passed:
        print(f"✅ {test[:50]}")
    else:
        blocked = [r for r in results if r.action == "block"]
        print(f"❌ Blocked: {blocked[0].details} | '{test[:40]}...'")
```text

---

## 3.3 Output Filters

Output filters ensure LLM responses are safe, compliant, and brand-appropriate.

```python
class OutputFilterPipeline:
    """Multi-stage output content filtering pipeline."""

    def __init__(self):
        self.filters = []

    def add_filter(self, filter_instance):
        self.filters.append(filter_instance)

    def validate(self, response: str) -> Tuple[bool, List[ContentFilterResult]]:
        results = []
        for f in self.filters:
            result = f.filter(response)
            results.append(result)
            if result.action == "block":
                return False, results
        return True, results

class SafetyFilter(BaseFilter):
    def __init__(self):
        super().__init__("safety_filter")
        self.unsafe_patterns = [
            r"\b(how\s+to\s+)?(make|build|create)\s+(a\s+)?(bomb|weapon|drug)\b",
            r"\b(self.?harm|suicide|kill\s+yourself)\b",
            r"\b(child\s+)?(abuse|porn|exploitation)\b",
        ]

    def filter(self, text: str) -> ContentFilterResult:
        text_lower = text.lower()
        for pattern in self.unsafe_patterns:
            if re.search(pattern, text_lower):
                return ContentFilterResult(passed=False, category=ContentCategory.VIOLENCE if "bomb" in pattern else ContentCategory.SELF_HARM, confidence=0.95, details="Safety violation detected", action="block")
        return ContentFilterResult(passed=True, category=None, confidence=1.0, details="Safe", action="allow")

class BrandAlignmentFilter(BaseFilter):
    def __init__(self, brand_guidelines: List[str] = None):
        super().__init__("brand_filter")
        self.forbidden_topics = [
            r"\bcompetitor\s+(is\s+)?(better|superior|cheaper)\b",
            r"\b(our\s+)?product\s+(is\s+)?(bad|terrible|useless)\b",
            r"\b(guaranteed|promised)\s+(results|returns)\b",
        ]
        self.brand_guidelines = brand_guidelines or []

    def filter(self, text: str) -> ContentFilterResult:
        text_lower = text.lower()
        for pattern in self.forbidden_topics:
            if re.search(pattern, text_lower):
                return ContentFilterResult(passed=False, category=None, confidence=0.8, details="Brand guideline violation", action="block")
        return ContentFilterResult(passed=True, category=None, confidence=1.0, details="Brand compliant", action="allow")

class MisinformationFilter(BaseFilter):
    def __init__(self):
        super().__init__("misinformation_filter")
        self.misinfo_patterns = [
            r"\b(vaccines?|vaccination)\s+causes?\s+(autism|infertility)\b",
            r"\b(earth|climate)\s+(is\s+)?(flat|not\s+warming)\b",
            r"\b(COVID|coronavirus)\s+(is\s+)?(hoax|fake|man-made)\b",
        ]

    def filter(self, text: str) -> ContentFilterResult:
        for pattern in self.misinfo_patterns:
            if re.search(pattern, text.lower()):
                return ContentFilterResult(passed=False, category=ContentCategory.MISINFORMATION, confidence=0.9, details="Known misinformation pattern", action="block")
        return ContentFilterResult(passed=True, category=None, confidence=1.0, details="No misinformation", action="allow")

output_pipeline = OutputFilterPipeline()
output_pipeline.add_filter(SafetyFilter())
output_pipeline.add_filter(BrandAlignmentFilter())
output_pipeline.add_filter(MisinformationFilter())

## Test outputs
outputs = [
    "Here is how to improve your credit score",
    "This product will guaranteed double your money in 24 hours!",
    "Vaccines cause autism according to some studies",
    "I cannot provide information on how to create weapons",
]

for out in outputs:
    passed, results = output_pipeline.validate(out)
    if passed:
        print(f"✅ {out[:60]}")
    else:
        blocked = [r for r in results if r.action == "block"]
        if blocked:
            print(f"❌ Blocked: {blocked[0].details} | '{out[:40]}...'")
```text

---

## 3.4 Topic Restriction

Topic restriction allows or blocks specific categories of conversation.

```python
class TopicRestrictor:
    """Restrict LLM to allowed topics only."""

    def __init__(self):
        self.allowed_topics = set()
        self.blocked_topics = set()
        self.topic_patterns = {}

    def allow_topic(self, topic: str, keywords: List[str]):
        self.allowed_topics.add(topic)
        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]

    def block_topic(self, topic: str, keywords: List[str]):
        self.blocked_topics.add(topic)
        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]

    def classify_topic(self, text: str) -> List[str]:
        """Classify text into detected topics."""
        detected = []
        for topic, patterns in self.topic_patterns.items():
            for pattern in patterns:
                if pattern.search(text):
                    if topic not in detected:
                        detected.append(topic)
                    break
        return detected

    def check_input(self, text: str) -> Tuple[bool, str]:
        """Check if input is about an allowed topic."""
        detected = self.classify_topic(text)

        # If no topics detected and we have allowed topics, check if it's generic
        if not detected:
            return True, "generic_query"

        # Check blocked topics first
        for topic in detected:
            if topic in self.blocked_topics:
                return False, f"Topic '{topic}' is blocked"

        # If we have allowed topics, at least one must match
        if self.allowed_topics:
            has_allowed = any(t in self.allowed_topics for t in detected)
            if not has_allowed:
                return False, f"Topic not in allowed list: {detected}"

        return True, "allowed"

## Configure topic restrictions for a financial advisory bot
restrictor = TopicRestrictor()
restrictor.allow_topic("investing", [r"\binvest(ing|ment|or)?s?\b", r"\bportfolio\b", r"\bstock\b", r"\bbond\b", r"\betf\b"])
restrictor.allow_topic("retirement", [r"\bretire(ment)?\b", r"\b401k?\b", r"\bIRA\b", r"\bpension\b"])
restrictor.allow_topic("tax", [r"\btax(es)?\b", r"\btax.?return\b", r"\bdeduction\b"])
restrictor.block_topic("illegal_activities", [r"\b(drug|illicit|illegal)\b.*\b(trade|sell|buy)\b", r"\bmoney\s+laundering\b", r"\btax\s+evasion\b"])
restrictor.block_topic("medical_advice", [r"\bdiagnos(is|e)\b", r"\bprescribe\b", r"\btreat(ment)?\s+for\b", r"\bmedical\s+condition\b", r"\bsymptom\s+of\b"])

queries = [
    "What are good ETFs for retirement?",
    "How do I diagnose a headache?",
    "How can I hide money from the tax department?",
    "Tell me a joke",
]

for q in queries:
    allowed, reason = restrictor.check_input(q)
    status = "✅" if allowed else "❌"
    print(f"{status} {reason}: {q[:50]}")
```text

**Category-based response handling**:

```python
class TopicAwareResponder:
    """Generate appropriate responses based on topic classification."""

    def __init__(self, restrictor: TopicRestrictor):
        self.restrictor = restrictor
        self.fallback_responses = {
            "blocked": "I cannot discuss this topic. Please ask about a different subject.",
            "out_of_scope": "That topic is outside my area of expertise. I specialize in financial advice.",
            "sensitive": "This appears to be a sensitive topic. Please consult a professional for specific advice."
        }

    def get_response(self, user_input: str) -> dict:
        allowed, reason = self.restrictor.check_input(user_input)
        if not allowed:
            if "blocked" in reason:
                return {"action": "block", "response": self.fallback_responses["blocked"], "reason": reason}
            return {"action": "block", "response": self.fallback_responses["out_of_scope"], "reason": reason}

        return {"action": "allow", "response": None, "reason": "allowed"}

responder = TopicAwareResponder(restrictor)
for q in queries:
    r = responder.get_response(q)
    print(f"\nQuery: {q}")
    print(f"Action: {r['action']}")
    if r['action'] == 'block':
        print(f"Response: {r['response']}")
```text

---

## 3.5 Safety Classifiers

ML-based safety classifiers provide more nuanced content filtering than keyword matching.

```python
import numpy as np
from typing import Dict

class SafetyClassifier:
    """ML-based content safety classifier (simulated)."""

    def __init__(self):
        self.categories = [
            "safe", "toxic", "hate", "harassment", "sexual",
            "violence", "self_harm", "misinformation"
        ]
        self.thresholds = {
            "toxic": 0.7,
            "hate": 0.6,
            "harassment": 0.7,
            "sexual": 0.8,
            "violence": 0.7,
            "self_harm": 0.5,
            "misinformation": 0.7
        }

    def predict(self, text: str) -> Dict[str, float]:
        """Simulate ML classifier predictions for content safety."""
        text_lower = text.lower()
        scores = {}

        # Simple keyword-based scoring (simulating ML model)
        keyword_scores = {
            "toxic": ["hate", "idiot", "stupid", "ugly", "terrible"],
            "hate": ["racial", "religious", "hate", "superior", "inferior"],
            "harassment": ["harass", "bully", "threaten", "intimidate"],
            "sexual": ["sex", "porn", "explicit", "nude"],
            "violence": ["kill", "murder", "attack", "weapon", "bomb"],
            "self_harm": ["suicide", "self-harm", "hurt myself", "end it"],
            "misinformation": ["fake news", "hoax", "conspiracy", "cover-up"],
        }

        for category, keywords in keyword_scores.items():
            score = sum(0.15 for kw in keywords if kw in text_lower)
            scores[category] = min(score + np.random.uniform(0, 0.1), 1.0)

        scores["safe"] = 1.0 - max(scores.values()) if scores else 1.0
        return scores

    def classify(self, text: str) -> dict:
        scores = self.predict(text)
        max_category = max(scores, key=scores.get)
        max_score = scores[max_category]

        triggered = []
        for category, threshold in self.thresholds.items():
            if scores.get(category, 0) >= threshold:
                triggered.append(category)

        return {
            "text": text[:50],
            "scores": {k: round(v, 3) for k, v in scores.items()},
            "primary_category": max_category,
            "primary_score": round(max_score, 3),
            "triggered_filters": triggered,
            "action": "block" if triggered else "allow",
            "needs_review": len(triggered) >= 2
        }

classifier = SafetyClassifier()
test_texts = [
    "I think you're terrible at this.",
    "What's the capital of France?",
    "This is a hoax created by the government.",
    "I feel like hurting myself.",
]

for text in test_texts:
    result = classifier.classify(text)
    icon = "❌" if result["action"] == "block" else "✅"
    print(f"{icon} [{result['action']}] {text[:45]:45s} | filters: {result['triggered_filters']}")
```text

**LLM-as-judge safety classifier**:

```python
class LLMAsJudgeClassifier:
    """Use an LLM to evaluate content safety."""

    def __init__(self):
        self.judge_prompt = """You are a content safety judge. Analyze the following text and classify it.

Categories: safe, toxic, hate_speech, harassment, sexual, violence, self_harm, misinformation

Return a JSON: {{"category": "...", "confidence": 0.0-1.0, "explanation": "..."}}

Text: {text}"""

    def evaluate(self, text: str) -> dict:
        """Evaluate text safety using LLM-as-judge (simulated)."""
        # In production, this calls an LLM API
        # Simulated response
        has_harm = any(kw in text.lower() for kw in ["kill", "hate", "suicide", "bomb"])
        return {
            "category": "toxic" if has_harm else "safe",
            "confidence": 0.95 if has_harm else 0.99,
            "explanation": "Text contains harmful language" if has_harm else "Text appears safe",
            "action": "block" if has_harm else "allow"
        }

judge = LLMAsJudgeClassifier()
print(judge.evaluate("I will kill you"))
print(judge.evaluate("The weather is nice today"))
```text

---

## 3.6 Moderation Pipeline

A production moderation pipeline combines all filtering stages.

```python
class ModerationPipeline:
    """Complete content moderation pipeline for LLM applications."""

    def __init__(self):
        self.input_stages = []
        self.output_stages = []
        self.log = []
        self.stats = {"processed": 0, "input_blocked": 0, "output_blocked": 0}

    def add_input_stage(self, name: str, stage_fn):
        self.input_stages.append((name, stage_fn))

    def add_output_stage(self, name: str, stage_fn):
        self.output_stages.append((name, stage_fn))

    def moderate_input(self, text: str) -> dict:
        """Run all input moderation stages."""
        result = {"passed": True, "stages": [], "blocked_at": None}

        for name, stage_fn in self.input_stages:
            stage_result = stage_fn(text)
            result["stages"].append({"name": name, "result": stage_result})

            if stage_result.get("action") == "block":
                result["passed"] = False
                result["blocked_at"] = name
                break

        return result

    def moderate_output(self, text: str) -> dict:
        """Run all output moderation stages."""
        result = {"passed": True, "stages": [], "blocked_at": None}

        for name, stage_fn in self.output_stages:
            stage_result = stage_fn(text)
            result["stages"].append({"name": name, "result": stage_result})

            if stage_result.get("action") == "block":
                result["passed"] = False
                result["blocked_at"] = name
                break

        return result

    def process(self, user_input: str, llm_response: str) -> dict:
        """Full moderation cycle: input → LLM → output."""
        self.stats["processed"] += 1

        # Input moderation
        input_result = self.moderate_input(user_input)
        if not input_result["passed"]:
            self.stats["input_blocked"] += 1
            self._log("input_blocked", user_input, input_result["blocked_at"])
            return {
                "allowed": False,
                "stage": "input",
                "blocked_by": input_result["blocked_at"],
                "response": "I cannot process this request.",
                "details": input_result
            }

        # Output moderation
        output_result = self.moderate_output(llm_response)
        if not output_result["passed"]:
            self.stats["output_blocked"] += 1
            self._log("output_blocked", llm_response, output_result["blocked_at"])
            return {
                "allowed": False,
                "stage": "output",
                "blocked_by": output_result["blocked_at"],
                "response": "I could not generate a safe response. Please rephrase.",
                "details": output_result
            }

        return {"allowed": True, "response": llm_response}

    def _log(self, event: str, content: str, stage: str):
        self.log.append({"event": event, "content": content[:100], "stage": stage, "timestamp": datetime.utcnow().isoformat()})

## Build moderation pipeline
moderation = ModerationPipeline()

## Input stages
moderation.add_input_stage("toxicity_check", lambda t: {"action": "block" if re.search(r"idiot|stupid|hate", t.lower()) else "allow"})
moderation.add_input_stage("pii_check", lambda t: {"action": "block" if re.search(r"\b\d{3}-\d{2}-\d{4}\b", t) else "allow"})

## Output stages
moderation.add_output_stage("safety_check", lambda t: {"action": "block" if re.search(r"kill|hurt|bomb", t.lower()) else "allow"})
moderation.add_output_stage("misinformation_check", lambda t: {"action": "block" if re.search(r"vaccine.*autism", t.lower()) else "allow"})

## Test
tests = [
    ("You are stupid", "I'm sorry you feel that way"),
    ("What's my SSN? 123-45-6789", "Your SSN is..."),
    ("Hello!", "Hi there! How can I help you today?"),
]

for inp, resp in tests:
    result = moderation.process(inp, resp)
    status = "✅" if result["allowed"] else "❌"
    print(f"{status} Input: {inp[:40]:40s} | Response: {result['response'][:40]}")
```text

---

## TypeScript Parallel

```typescript
// TypeScript content filtering
interface FilterResult {
  passed: boolean;
  category?: string;
  action: "allow" | "flag" | "block";
}

class ContentFilter {
  private patterns: Map<string, RegExp[]> = new Map();

  addPattern(category: string, patterns: string[]): void {
    this.patterns.set(category, patterns.map(p => new RegExp(p, "i")));
  }

  filter(text: string): FilterResult {
    for (const [category, regexps] of this.patterns) {
      for (const regex of regexps) {
        if (regex.test(text)) {
          return { passed: false, category, action: "block" };
        }
      }
    }
    return { passed: true, action: "allow" };
  }
}

const filter = new ContentFilter();
filter.addPattern("toxicity", ["\\b(hate|idiot|stupid)\\b"]);
filter.addPattern("pii", ["\\b\\d{3}-\\d{2}-\\d{4}\\b"]);
console.log(filter.filter("You are an idiot"));
console.log(filter.filter("Hello world"));
```text

---

## Summary

- Content filtering applies to both LLM inputs (what users send) and outputs (what the model returns)
- Input filters block toxicity, hate speech, harassment, PII, and spam before reaching the LLM
- Output filters ensure safety, brand alignment, and factual accuracy of responses
- Topic restriction limits conversations to approved categories using keyword-based classification
- ML safety classifiers provide nuanced scoring across multiple content categories
- LLM-as-judge uses a separate LLM to evaluate content safety with natural language reasoning
- A moderation pipeline combines multiple filtering stages for defense in depth
- PII detection (SSN, email, phone, credit cards) is essential for regulatory compliance
- Misinformation filtering uses known false statement patterns
- All filtering events should be logged for audit and continuous improvement

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| User input safety | Multi-stage content filtering | Single keyword check |
| PII protection | Redact before LLM processing | Sending raw PII to LLM |
| Output safety | Validate + fallback responses | Returning LLM output unchecked |
| Topic control | Allow/block lists with topic classification | Open-ended conversation without guardrails |
| Compliance | Log all filtering events | No audit trail |
| Accuracy | ML classifier + LLM-as-judge combination | Relying on one method only |

## Interview Q&A

<details class="tp-qa-card" data-qid="ai-sec-s03-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What content categories should you filter for LLM applications?
  </summary>
  <div class="tp-qa-answer">
    <p>Essential categories: toxicity, hate speech, harassment, sexual content, violence, self-harm, PII, spam/ commercial, misinformation, child safety. The specific set depends on your application domain — a financial app needs misinformation filtering, a healthcare app needs medical advice restrictions, and a general chatbot needs all categories.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you handle false positives in content filtering?
  </summary>
  <div class="tp-qa-answer">
    <p>Use graduated actions: block (high confidence), flag (medium — log for review), allow with warning (low). Maintain a whitelist of false positives. Allow user feedback ("This was flagged incorrectly"). Review flagged content periodically to tune thresholds. ML classifiers should have adjustable thresholds per category.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the difference between input and output filtering?
  </summary>
  <div class="tp-qa-answer">
    <p>Input filtering checks user messages before they reach the LLM — blocking toxic input, PII, and injection attempts. Output filtering checks LLM responses before returning to the user — blocking unsafe content, misinformation, and sensitive data. Both are necessary because the LLM might generate unsafe content even from safe input.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does topic restriction work?
  </summary>
  <div class="tp-qa-answer">
    <p>Topic restriction uses keyword patterns to classify user input into topic categories. An allow list specifies which topics are permitted; a block list specifies forbidden topics. Inputs that don't match any allowed topic are either blocked or handled with a fallback response. This is essential for domain-specific applications (e.g., finance bot shouldn't give medical advice).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the LLM-as-judge approach for content safety?
  </summary>
  <div class="tp-qa-answer">
    <p>LLM-as-judge uses a separate LLM (typically a stronger, safety-tuned model) to evaluate content safety. The judge receives the text and a classification prompt, then returns a safety assessment. This provides nuanced understanding that keyword matching misses, but adds latency and cost. Best used as a secondary filter for borderline cases.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What PII patterns should you detect and redact?
  </summary>
  <div class="tp-qa-answer">
    <p>Phone numbers, email addresses, SSN/TIN, credit card numbers, bank account numbers, passport numbers, driver's license numbers, API keys and tokens, database connection strings, and full names with context. Use regex patterns plus NLP-based entity recognition for comprehensive coverage. Redact before LLM processing unless PII is required for the use case.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you build a moderation pipeline?
  </summary>
  <div class="tp-qa-answer">
    <p>Stage 1: Input filters — toxicity, PII, injection detection. Stage 2: Topic restriction. Stage 3: LLM processing. Stage 4: Output filters — safety, misinformation, brand alignment. Stage 5: Fallback response if any stage blocks. Log every filtering event. Use graduated actions: block (certain), flag (uncertain), allow (safe).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle misinformation filtering?
  </summary>
  <div class="tp-qa-answer">
    <p>Use a combination of: (1) Known misinformation pattern database (anti-vaccine, climate denial, conspiracy theories), (2) Fact-checking API integration for claims, (3) LLM-as-judge for nuanced misinformation detection, (4) Confidence-weighted responses — if model has low confidence, add disclaimers. Never output verified false claims even if the user insists.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What metrics should you track for content filtering?
  </summary>
  <div class="tp-qa-answer">
    <p>Track: (1) Block rate — % of inputs/outputs blocked, (2) Flag rate — % requiring human review, (3) False positive rate — incorrectly blocked content, (4) False negative rate — missed harmful content (from user reports), (5) Filter latency — time added by filtering pipeline, (6) Category distribution — which filters are most active, (7) User appeal rate — how often users challenge blocks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s03-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you handle content filtering for multilingual applications?
  </summary>
  <div class="tp-qa-answer">
    <p>Use translation-based filtering: translate non-English content to English for filter checking, then process the original with the LLM. Alternatively, use multilingual ML classifiers or character-level patterns that work across languages. Be aware of cultural differences in what constitutes offensive content.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the first stage in a moderation pipeline?
a) Output validation
b) Input filtering
c) LLM processing
d) Topic restriction

<details class="tp-qa-card" data-qid="ai-sec-s03-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Input filtering</strong></p><p>Input filtering happens before LLM processing to block harmful content early.</p></div></details>

**Q2**: Which PII pattern matches Social Security Numbers?
a) `\d{3}-\d{2}-\d{4}`
b) `\d{10}`
c) `\d{5}-\d{4}`
d) `\d{16}`

<details class="tp-qa-card" data-qid="ai-sec-s03-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) `\d{3}-\d{2}-\d{4}`</strong></p><p>SSNs follow the XXX-XX-XXXX pattern.</p></div></details>

**Q3**: What is a graduated action in content filtering?
a) Block, flag, or allow based on confidence
b) Always block all content
c) Always allow all content
d) Only filter output, not input

<details class="tp-qa-card" data-qid="ai-sec-s03-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Block, flag, or allow based on confidence</strong></p><p>Graduated actions use different responses based on detection confidence.</p></div></details>

**Q4**: What is the LLM-as-judge approach?
a) Training an LLM to be a judge
b) Using one LLM to evaluate another's output
c) Deploying an LLM as a judge in court
d) Fine-tuning on legal documents

<details class="tp-qa-card" data-qid="ai-sec-s03-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Using one LLM to evaluate another's output</strong></p><p>LLM-as-judge uses a separate LLM to evaluate content safety or quality.</p></div></details>

**Q5**: Why is output filtering necessary even after input filtering?
a) Because the LLM may generate unsafe content from safe input
b) Because input filtering is unreliable
c) Because users prefer filtered output
d) Because it reduces cost

<details class="tp-qa-card" data-qid="ai-sec-s03-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Because the LLM may generate unsafe content from safe input</strong></p><p>LLMs can generate harmful content even from benign prompts, so output filtering is essential.</p></div></details>

## Exercises

**Easy** — Build an InputFilterPipeline with toxicity, PII, and spam filters. Test with 8 inputs.

**Medium** — Implement a TopicRestrictor for a healthcare chatbot that allows medical Q&A but blocks treatment recommendations.

**Medium** — Create an OutputFilterPipeline with safety, brand alignment, and misinformation filters.

**Hard** — Build a SafetyClassifier (simulated ML) that scores text across 7 categories with configurable thresholds.

**Hard** — Implement a complete ModerationPipeline with 3 input stages, 3 output stages, logging, and graduated actions.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 17-ai-security-guardrails
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

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
- [ ] Have questions ready about how the company uses 17-ai-security-guardrails> **Next**: [04 — Guardrails Frameworks →](04-guardrails-frameworks.md)
