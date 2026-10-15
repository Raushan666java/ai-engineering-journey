"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5508],{

/***/ 73504
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_03_content_filtering_md_b80_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-03-content-filtering-md-b80.json
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_03_content_filtering_md_b80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/03-content-filtering","title":"Content Filtering","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":218,"frontMatter":{"id":"03-content-filtering","slug":"/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","title":"Content Filtering","sidebar_label":"Content Filtering","sidebar_position":218},"sidebar":"placementSidebar","previous":{"title":"Prompt Injection Defense","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/02-prompt-injection-defense"},"next":{"title":"Guardrails Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering.md


const frontMatter = {
	id: '03-content-filtering',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering',
	title: 'Content Filtering',
	sidebar_label: 'Content Filtering',
	sidebar_position: 218
};
const contentTitle = 'Content Filtering';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "3.1 Content Filtering Overview",
  "id": "31-content-filtering-overview",
  "level": 2
}, {
  "value": "3.2 Input Filters",
  "id": "32-input-filters",
  "level": 2
}, {
  "value": "3.3 Output Filters",
  "id": "33-output-filters",
  "level": 2
}, {
  "value": "3.4 Topic Restriction",
  "id": "34-topic-restriction",
  "level": 2
}, {
  "value": "3.5 Safety Classifiers",
  "id": "35-safety-classifiers",
  "level": 2
}, {
  "value": "3.6 Moderation Pipeline",
  "id": "36-moderation-pipeline",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "content-filtering",
        children: "Content Filtering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand content filtering requirements for LLM applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement input content filters for toxicity, hate, and PII"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build output content filters for compliance and safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy topic restriction and category blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up safety classifiers using LLMs and ML models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design content moderation pipelines for production"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems face unique security threats. Prompt injection, data leakage, and content abuse require specialized defenses. This module covers threat modeling, guardrails, and compliance for production AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding content filtering is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how content filtering works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content Filtering Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types of content to filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toxicity, harassment, PII, spam"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety, compliance, brand alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic Restriction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Category allow/block lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety Classifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-based and LLM-based filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderation Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage content moderation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    A[User Input] --> B[Input Filter]\r\n    B --> C{Toxic?}\r\n    C -->|Yes| D[Block + Warning]\r\n    C -->|No| E[PII Scan]\r\n    E --> F[LLM]\r\n    F --> G[Output Filter]\r\n    G --> H{Safe?}\r\n    H -->|Yes| I[Return]\r\n    H -->|No| J[Fallback + Log]\r\n    D --> K[Moderation Log]\r\n    J --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-content-filtering-overview",
      children: "3.1 Content Filtering Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content filtering for LLM applications encompasses both input filtering (what users can send) and output filtering (what the model can return). Effective filtering uses multiple techniques: keyword matching, regex patterns, ML classifiers, and LLM-as-judge evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom typing import List, Tuple, Optional\r\nfrom dataclasses import dataclass\r\nimport re\r\n\r\nclass ContentCategory(Enum):\r\n    TOXICITY = \"toxicity\"\r\n    HATE_SPEECH = \"hate_speech\"\r\n    HARASSMENT = \"harassment\"\r\n    SEXUAL = \"sexual_content\"\r\n    VIOLENCE = \"violence\"\r\n    PII = \"pii\"\r\n    SPAM = \"spam\"\r\n    MISINFORMATION = \"misinformation\"\r\n    SELF_HARM = \"self_harm\"\r\n    CHILD_SAFETY = \"child_safety\"\r\n\r\n@dataclass\r\nclass ContentFilterResult:\r\n    passed: bool\r\n    category: Optional[ContentCategory]\r\n    confidence: float\r\n    details: str\r\n    action: str  # \"block\", \"flag\", \"warn\", \"allow\"\r\n\r\nclass BaseFilter:\r\n    \"\"\"Base class for content filters.\"\"\"\r\n\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.stats = {\"checked\": 0, \"blocked\": 0, \"flagged\": 0}\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        raise NotImplementedError\r\n\r\n    def record_result(self, result: ContentFilterResult):\r\n        self.stats[\"checked\"] += 1\r\n        if result.action == \"block\":\r\n            self.stats[\"blocked\"] += 1\r\n        elif result.action == \"flag\":\r\n            self.stats[\"flagged\"] += 1\r\n\r\n## Toxicity keyword filter\r\nclass ToxicityFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"toxicity_filter\")\r\n        self.toxic_patterns = [\r\n            r\"\\b(hate|kill|murder|die)\\s+(you|them|everyone)\\b\",\r\n            r\"\\b(idiot|stupid|dumb)\\s+(ass|fuck)\\b\",\r\n            r\"\\b(go\\s+)?(kill|hurt|harm)\\s+yourself\\b\",\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        text_lower = text.lower()\r\n        for pattern in self.toxic_patterns:\r\n            if re.search(pattern, text_lower):\r\n                result = ContentFilterResult(\r\n                    passed=False, category=ContentCategory.TOXICITY,\r\n                    confidence=0.9, details=f\"Toxic pattern matched: {pattern[:30]}...\",\r\n                    action=\"block\"\r\n                )\r\n                self.record_result(result)\r\n                return result\r\n\r\n        result = ContentFilterResult(\r\n            passed=True, category=None,\r\n            confidence=1.0, details=\"Clean\",\r\n            action=\"allow\"\r\n        )\r\n        self.record_result(result)\r\n        return result\r\n\r\ntoxicity = ToxicityFilter()\r\nprint(toxicity.filter(\"You are an idiot\"))\r\nprint(toxicity.filter(\"What is the weather today?\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-input-filters",
      children: "3.2 Input Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input filters protect the LLM from receiving harmful or inappropriate content."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InputFilterPipeline:\r\n    \"\"\"Multi-stage input content filtering pipeline.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.filters = []\r\n\r\n    def add_filter(self, filter_instance: BaseFilter):\r\n        self.filters.append(filter_instance)\r\n\r\n    def process(self, text: str) -> Tuple[bool, List[ContentFilterResult]]:\r\n        \"\"\"Process text through all input filters.\"\"\"\r\n        results = []\r\n\r\n        for f in self.filters:\r\n            result = f.filter(text)\r\n            results.append(result)\r\n            if result.action == \"block\":\r\n                return False, results\r\n\r\n        return True, results\r\n\r\n    def summary(self) -> dict:\r\n        return {f.name: f.stats for f in self.filters}\r\n\r\n## Build input filter pipeline\r\nclass PIIFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"pii_filter\")\r\n        self.pii_patterns = [\r\n            (r\"\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b\", \"phone\"),\r\n            (r\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b\", \"email\"),\r\n            (r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\", \"ssn\"),\r\n            (r\"\\b\\d{16}\\b\", \"credit_card\"),\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        for pattern, name in self.pii_patterns:\r\n            if re.findall(pattern, text):\r\n                result = ContentFilterResult(\r\n                    passed=False, category=ContentCategory.PII,\r\n                    confidence=0.95, details=f\"PII detected: {name}\",\r\n                    action=\"block\"\r\n                )\r\n                self.record_result(result)\r\n                return result\r\n        result = ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"No PII\", action=\"allow\")\r\n        self.record_result(result)\r\n        return result\r\n\r\nclass HateSpeechFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"hate_speech\")\r\n        self.hate_patterns = [\r\n            r\"\\b(hate|attack|destroy)\\s+(all|every)\\s+\\w+(people|group|race|religion)\\b\",\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        for pattern in self.hate_patterns:\r\n            if re.search(pattern, text.lower()):\r\n                return ContentFilterResult(passed=False, category=ContentCategory.HATE_SPEECH, confidence=0.85, details=\"Hate speech detected\", action=\"block\")\r\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Clean\", action=\"allow\")\r\n\r\nclass SpamFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"spam_filter\")\r\n        self.spam_patterns = [\r\n            r\"\\bbuy\\s+now\\b\", r\"\\blimited\\s+time\\s+offer\\b\", r\"\\bclick\\s+here\\b\",\r\n            r\"\\bcongratulations.*won\\b\", r\"\\bfree\\s+(money|prize|gift)\\b\",\r\n            r\"\\b(chance|opportunity)\\s+of\\s+a\\s+lifetime\\b\",\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        spam_score = 0\r\n        for pattern in self.spam_patterns:\r\n            if re.search(pattern, text.lower()):\r\n                spam_score += 1\r\n        if spam_score >= 3:\r\n            return ContentFilterResult(passed=False, category=ContentCategory.SPAM, confidence=min(0.5 + spam_score * 0.1, 0.95), details=f\"Spam score: {spam_score}\", action=\"block\")\r\n        if spam_score >= 1:\r\n            return ContentFilterResult(passed=True, category=ContentCategory.SPAM, confidence=0.3, details=\"Low spam suspicion\", action=\"flag\")\r\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Clean\", action=\"allow\")\r\n\r\ninput_pipeline = InputFilterPipeline()\r\ninput_pipeline.add_filter(ToxicityFilter())\r\ninput_pipeline.add_filter(HateSpeechFilter())\r\ninput_pipeline.add_filter(PIIFilter())\r\ninput_pipeline.add_filter(SpamFilter())\r\n\r\ntests = [\r\n    \"Hello, how can I help you today?\",\r\n    \"You are a stupid idiot!\",\r\n    \"My email is john@example.com and SSN is 123-45-6789\",\r\n    \"Buy now! Limited time offer! Click here! Free money!\",\r\n]\r\n\r\nfor test in tests:\r\n    passed, results = input_pipeline.process(test)\r\n    if passed:\r\n        print(f\"✅ {test[:50]}\")\r\n    else:\r\n        blocked = [r for r in results if r.action == \"block\"]\r\n        print(f\"❌ Blocked: {blocked[0].details} | '{test[:40]}...'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-output-filters",
      children: "3.3 Output Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output filters ensure LLM responses are safe, compliant, and brand-appropriate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OutputFilterPipeline:\r\n    \"\"\"Multi-stage output content filtering pipeline.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.filters = []\r\n\r\n    def add_filter(self, filter_instance):\r\n        self.filters.append(filter_instance)\r\n\r\n    def validate(self, response: str) -> Tuple[bool, List[ContentFilterResult]]:\r\n        results = []\r\n        for f in self.filters:\r\n            result = f.filter(response)\r\n            results.append(result)\r\n            if result.action == \"block\":\r\n                return False, results\r\n        return True, results\r\n\r\nclass SafetyFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"safety_filter\")\r\n        self.unsafe_patterns = [\r\n            r\"\\b(how\\s+to\\s+)?(make|build|create)\\s+(a\\s+)?(bomb|weapon|drug)\\b\",\r\n            r\"\\b(self.?harm|suicide|kill\\s+yourself)\\b\",\r\n            r\"\\b(child\\s+)?(abuse|porn|exploitation)\\b\",\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        text_lower = text.lower()\r\n        for pattern in self.unsafe_patterns:\r\n            if re.search(pattern, text_lower):\r\n                return ContentFilterResult(passed=False, category=ContentCategory.VIOLENCE if \"bomb\" in pattern else ContentCategory.SELF_HARM, confidence=0.95, details=\"Safety violation detected\", action=\"block\")\r\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Safe\", action=\"allow\")\r\n\r\nclass BrandAlignmentFilter(BaseFilter):\r\n    def __init__(self, brand_guidelines: List[str] = None):\r\n        super().__init__(\"brand_filter\")\r\n        self.forbidden_topics = [\r\n            r\"\\bcompetitor\\s+(is\\s+)?(better|superior|cheaper)\\b\",\r\n            r\"\\b(our\\s+)?product\\s+(is\\s+)?(bad|terrible|useless)\\b\",\r\n            r\"\\b(guaranteed|promised)\\s+(results|returns)\\b\",\r\n        ]\r\n        self.brand_guidelines = brand_guidelines or []\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        text_lower = text.lower()\r\n        for pattern in self.forbidden_topics:\r\n            if re.search(pattern, text_lower):\r\n                return ContentFilterResult(passed=False, category=None, confidence=0.8, details=\"Brand guideline violation\", action=\"block\")\r\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Brand compliant\", action=\"allow\")\r\n\r\nclass MisinformationFilter(BaseFilter):\r\n    def __init__(self):\r\n        super().__init__(\"misinformation_filter\")\r\n        self.misinfo_patterns = [\r\n            r\"\\b(vaccines?|vaccination)\\s+causes?\\s+(autism|infertility)\\b\",\r\n            r\"\\b(earth|climate)\\s+(is\\s+)?(flat|not\\s+warming)\\b\",\r\n            r\"\\b(COVID|coronavirus)\\s+(is\\s+)?(hoax|fake|man-made)\\b\",\r\n        ]\r\n\r\n    def filter(self, text: str) -> ContentFilterResult:\r\n        for pattern in self.misinfo_patterns:\r\n            if re.search(pattern, text.lower()):\r\n                return ContentFilterResult(passed=False, category=ContentCategory.MISINFORMATION, confidence=0.9, details=\"Known misinformation pattern\", action=\"block\")\r\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"No misinformation\", action=\"allow\")\r\n\r\noutput_pipeline = OutputFilterPipeline()\r\noutput_pipeline.add_filter(SafetyFilter())\r\noutput_pipeline.add_filter(BrandAlignmentFilter())\r\noutput_pipeline.add_filter(MisinformationFilter())\r\n\r\n## Test outputs\r\noutputs = [\r\n    \"Here is how to improve your credit score\",\r\n    \"This product will guaranteed double your money in 24 hours!\",\r\n    \"Vaccines cause autism according to some studies\",\r\n    \"I cannot provide information on how to create weapons\",\r\n]\r\n\r\nfor out in outputs:\r\n    passed, results = output_pipeline.validate(out)\r\n    if passed:\r\n        print(f\"✅ {out[:60]}\")\r\n    else:\r\n        blocked = [r for r in results if r.action == \"block\"]\r\n        if blocked:\r\n            print(f\"❌ Blocked: {blocked[0].details} | '{out[:40]}...'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-topic-restriction",
      children: "3.4 Topic Restriction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Topic restriction allows or blocks specific categories of conversation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopicRestrictor:\r\n    \"\"\"Restrict LLM to allowed topics only.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.allowed_topics = set()\r\n        self.blocked_topics = set()\r\n        self.topic_patterns = {}\r\n\r\n    def allow_topic(self, topic: str, keywords: List[str]):\r\n        self.allowed_topics.add(topic)\r\n        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]\r\n\r\n    def block_topic(self, topic: str, keywords: List[str]):\r\n        self.blocked_topics.add(topic)\r\n        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]\r\n\r\n    def classify_topic(self, text: str) -> List[str]:\r\n        \"\"\"Classify text into detected topics.\"\"\"\r\n        detected = []\r\n        for topic, patterns in self.topic_patterns.items():\r\n            for pattern in patterns:\r\n                if pattern.search(text):\r\n                    if topic not in detected:\r\n                        detected.append(topic)\r\n                    break\r\n        return detected\r\n\r\n    def check_input(self, text: str) -> Tuple[bool, str]:\r\n        \"\"\"Check if input is about an allowed topic.\"\"\"\r\n        detected = self.classify_topic(text)\r\n\r\n        # If no topics detected and we have allowed topics, check if it's generic\r\n        if not detected:\r\n            return True, \"generic_query\"\r\n\r\n        # Check blocked topics first\r\n        for topic in detected:\r\n            if topic in self.blocked_topics:\r\n                return False, f\"Topic '{topic}' is blocked\"\r\n\r\n        # If we have allowed topics, at least one must match\r\n        if self.allowed_topics:\r\n            has_allowed = any(t in self.allowed_topics for t in detected)\r\n            if not has_allowed:\r\n                return False, f\"Topic not in allowed list: {detected}\"\r\n\r\n        return True, \"allowed\"\r\n\r\n## Configure topic restrictions for a financial advisory bot\r\nrestrictor = TopicRestrictor()\r\nrestrictor.allow_topic(\"investing\", [r\"\\binvest(ing|ment|or)?s?\\b\", r\"\\bportfolio\\b\", r\"\\bstock\\b\", r\"\\bbond\\b\", r\"\\betf\\b\"])\r\nrestrictor.allow_topic(\"retirement\", [r\"\\bretire(ment)?\\b\", r\"\\b401k?\\b\", r\"\\bIRA\\b\", r\"\\bpension\\b\"])\r\nrestrictor.allow_topic(\"tax\", [r\"\\btax(es)?\\b\", r\"\\btax.?return\\b\", r\"\\bdeduction\\b\"])\r\nrestrictor.block_topic(\"illegal_activities\", [r\"\\b(drug|illicit|illegal)\\b.*\\b(trade|sell|buy)\\b\", r\"\\bmoney\\s+laundering\\b\", r\"\\btax\\s+evasion\\b\"])\r\nrestrictor.block_topic(\"medical_advice\", [r\"\\bdiagnos(is|e)\\b\", r\"\\bprescribe\\b\", r\"\\btreat(ment)?\\s+for\\b\", r\"\\bmedical\\s+condition\\b\", r\"\\bsymptom\\s+of\\b\"])\r\n\r\nqueries = [\r\n    \"What are good ETFs for retirement?\",\r\n    \"How do I diagnose a headache?\",\r\n    \"How can I hide money from the tax department?\",\r\n    \"Tell me a joke\",\r\n]\r\n\r\nfor q in queries:\r\n    allowed, reason = restrictor.check_input(q)\r\n    status = \"✅\" if allowed else \"❌\"\r\n    print(f\"{status} {reason}: {q[:50]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Category-based response handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopicAwareResponder:\r\n    \"\"\"Generate appropriate responses based on topic classification.\"\"\"\r\n\r\n    def __init__(self, restrictor: TopicRestrictor):\r\n        self.restrictor = restrictor\r\n        self.fallback_responses = {\r\n            \"blocked\": \"I cannot discuss this topic. Please ask about a different subject.\",\r\n            \"out_of_scope\": \"That topic is outside my area of expertise. I specialize in financial advice.\",\r\n            \"sensitive\": \"This appears to be a sensitive topic. Please consult a professional for specific advice.\"\r\n        }\r\n\r\n    def get_response(self, user_input: str) -> dict:\r\n        allowed, reason = self.restrictor.check_input(user_input)\r\n        if not allowed:\r\n            if \"blocked\" in reason:\r\n                return {\"action\": \"block\", \"response\": self.fallback_responses[\"blocked\"], \"reason\": reason}\r\n            return {\"action\": \"block\", \"response\": self.fallback_responses[\"out_of_scope\"], \"reason\": reason}\r\n\r\n        return {\"action\": \"allow\", \"response\": None, \"reason\": \"allowed\"}\r\n\r\nresponder = TopicAwareResponder(restrictor)\r\nfor q in queries:\r\n    r = responder.get_response(q)\r\n    print(f\"\\nQuery: {q}\")\r\n    print(f\"Action: {r['action']}\")\r\n    if r['action'] == 'block':\r\n        print(f\"Response: {r['response']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-safety-classifiers",
      children: "3.5 Safety Classifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML-based safety classifiers provide more nuanced content filtering than keyword matching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import Dict\r\n\r\nclass SafetyClassifier:\r\n    \"\"\"ML-based content safety classifier (simulated).\"\"\"\r\n\r\n    def __init__(self):\r\n        self.categories = [\r\n            \"safe\", \"toxic\", \"hate\", \"harassment\", \"sexual\",\r\n            \"violence\", \"self_harm\", \"misinformation\"\r\n        ]\r\n        self.thresholds = {\r\n            \"toxic\": 0.7,\r\n            \"hate\": 0.6,\r\n            \"harassment\": 0.7,\r\n            \"sexual\": 0.8,\r\n            \"violence\": 0.7,\r\n            \"self_harm\": 0.5,\r\n            \"misinformation\": 0.7\r\n        }\r\n\r\n    def predict(self, text: str) -> Dict[str, float]:\r\n        \"\"\"Simulate ML classifier predictions for content safety.\"\"\"\r\n        text_lower = text.lower()\r\n        scores = {}\r\n\r\n        # Simple keyword-based scoring (simulating ML model)\r\n        keyword_scores = {\r\n            \"toxic\": [\"hate\", \"idiot\", \"stupid\", \"ugly\", \"terrible\"],\r\n            \"hate\": [\"racial\", \"religious\", \"hate\", \"superior\", \"inferior\"],\r\n            \"harassment\": [\"harass\", \"bully\", \"threaten\", \"intimidate\"],\r\n            \"sexual\": [\"sex\", \"porn\", \"explicit\", \"nude\"],\r\n            \"violence\": [\"kill\", \"murder\", \"attack\", \"weapon\", \"bomb\"],\r\n            \"self_harm\": [\"suicide\", \"self-harm\", \"hurt myself\", \"end it\"],\r\n            \"misinformation\": [\"fake news\", \"hoax\", \"conspiracy\", \"cover-up\"],\r\n        }\r\n\r\n        for category, keywords in keyword_scores.items():\r\n            score = sum(0.15 for kw in keywords if kw in text_lower)\r\n            scores[category] = min(score + np.random.uniform(0, 0.1), 1.0)\r\n\r\n        scores[\"safe\"] = 1.0 - max(scores.values()) if scores else 1.0\r\n        return scores\r\n\r\n    def classify(self, text: str) -> dict:\r\n        scores = self.predict(text)\r\n        max_category = max(scores, key=scores.get)\r\n        max_score = scores[max_category]\r\n\r\n        triggered = []\r\n        for category, threshold in self.thresholds.items():\r\n            if scores.get(category, 0) >= threshold:\r\n                triggered.append(category)\r\n\r\n        return {\r\n            \"text\": text[:50],\r\n            \"scores\": {k: round(v, 3) for k, v in scores.items()},\r\n            \"primary_category\": max_category,\r\n            \"primary_score\": round(max_score, 3),\r\n            \"triggered_filters\": triggered,\r\n            \"action\": \"block\" if triggered else \"allow\",\r\n            \"needs_review\": len(triggered) >= 2\r\n        }\r\n\r\nclassifier = SafetyClassifier()\r\ntest_texts = [\r\n    \"I think you're terrible at this.\",\r\n    \"What's the capital of France?\",\r\n    \"This is a hoax created by the government.\",\r\n    \"I feel like hurting myself.\",\r\n]\r\n\r\nfor text in test_texts:\r\n    result = classifier.classify(text)\r\n    icon = \"❌\" if result[\"action\"] == \"block\" else \"✅\"\r\n    print(f\"{icon} [{result['action']}] {text[:45]:45s} | filters: {result['triggered_filters']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LLM-as-judge safety classifier"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMAsJudgeClassifier:\r\n    \"\"\"Use an LLM to evaluate content safety.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.judge_prompt = \"\"\"You are a content safety judge. Analyze the following text and classify it.\r\n\r\nCategories: safe, toxic, hate_speech, harassment, sexual, violence, self_harm, misinformation\r\n\r\nReturn a JSON: {{\"category\": \"...\", \"confidence\": 0.0-1.0, \"explanation\": \"...\"}}\r\n\r\nText: {text}\"\"\"\r\n\r\n    def evaluate(self, text: str) -> dict:\r\n        \"\"\"Evaluate text safety using LLM-as-judge (simulated).\"\"\"\r\n        # In production, this calls an LLM API\r\n        # Simulated response\r\n        has_harm = any(kw in text.lower() for kw in [\"kill\", \"hate\", \"suicide\", \"bomb\"])\r\n        return {\r\n            \"category\": \"toxic\" if has_harm else \"safe\",\r\n            \"confidence\": 0.95 if has_harm else 0.99,\r\n            \"explanation\": \"Text contains harmful language\" if has_harm else \"Text appears safe\",\r\n            \"action\": \"block\" if has_harm else \"allow\"\r\n        }\r\n\r\njudge = LLMAsJudgeClassifier()\r\nprint(judge.evaluate(\"I will kill you\"))\r\nprint(judge.evaluate(\"The weather is nice today\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-moderation-pipeline",
      children: "3.6 Moderation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production moderation pipeline combines all filtering stages."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModerationPipeline:\r\n    \"\"\"Complete content moderation pipeline for LLM applications.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.input_stages = []\r\n        self.output_stages = []\r\n        self.log = []\r\n        self.stats = {\"processed\": 0, \"input_blocked\": 0, \"output_blocked\": 0}\r\n\r\n    def add_input_stage(self, name: str, stage_fn):\r\n        self.input_stages.append((name, stage_fn))\r\n\r\n    def add_output_stage(self, name: str, stage_fn):\r\n        self.output_stages.append((name, stage_fn))\r\n\r\n    def moderate_input(self, text: str) -> dict:\r\n        \"\"\"Run all input moderation stages.\"\"\"\r\n        result = {\"passed\": True, \"stages\": [], \"blocked_at\": None}\r\n\r\n        for name, stage_fn in self.input_stages:\r\n            stage_result = stage_fn(text)\r\n            result[\"stages\"].append({\"name\": name, \"result\": stage_result})\r\n\r\n            if stage_result.get(\"action\") == \"block\":\r\n                result[\"passed\"] = False\r\n                result[\"blocked_at\"] = name\r\n                break\r\n\r\n        return result\r\n\r\n    def moderate_output(self, text: str) -> dict:\r\n        \"\"\"Run all output moderation stages.\"\"\"\r\n        result = {\"passed\": True, \"stages\": [], \"blocked_at\": None}\r\n\r\n        for name, stage_fn in self.output_stages:\r\n            stage_result = stage_fn(text)\r\n            result[\"stages\"].append({\"name\": name, \"result\": stage_result})\r\n\r\n            if stage_result.get(\"action\") == \"block\":\r\n                result[\"passed\"] = False\r\n                result[\"blocked_at\"] = name\r\n                break\r\n\r\n        return result\r\n\r\n    def process(self, user_input: str, llm_response: str) -> dict:\r\n        \"\"\"Full moderation cycle: input → LLM → output.\"\"\"\r\n        self.stats[\"processed\"] += 1\r\n\r\n        # Input moderation\r\n        input_result = self.moderate_input(user_input)\r\n        if not input_result[\"passed\"]:\r\n            self.stats[\"input_blocked\"] += 1\r\n            self._log(\"input_blocked\", user_input, input_result[\"blocked_at\"])\r\n            return {\r\n                \"allowed\": False,\r\n                \"stage\": \"input\",\r\n                \"blocked_by\": input_result[\"blocked_at\"],\r\n                \"response\": \"I cannot process this request.\",\r\n                \"details\": input_result\r\n            }\r\n\r\n        # Output moderation\r\n        output_result = self.moderate_output(llm_response)\r\n        if not output_result[\"passed\"]:\r\n            self.stats[\"output_blocked\"] += 1\r\n            self._log(\"output_blocked\", llm_response, output_result[\"blocked_at\"])\r\n            return {\r\n                \"allowed\": False,\r\n                \"stage\": \"output\",\r\n                \"blocked_by\": output_result[\"blocked_at\"],\r\n                \"response\": \"I could not generate a safe response. Please rephrase.\",\r\n                \"details\": output_result\r\n            }\r\n\r\n        return {\"allowed\": True, \"response\": llm_response}\r\n\r\n    def _log(self, event: str, content: str, stage: str):\r\n        self.log.append({\"event\": event, \"content\": content[:100], \"stage\": stage, \"timestamp\": datetime.utcnow().isoformat()})\r\n\r\n## Build moderation pipeline\r\nmoderation = ModerationPipeline()\r\n\r\n## Input stages\r\nmoderation.add_input_stage(\"toxicity_check\", lambda t: {\"action\": \"block\" if re.search(r\"idiot|stupid|hate\", t.lower()) else \"allow\"})\r\nmoderation.add_input_stage(\"pii_check\", lambda t: {\"action\": \"block\" if re.search(r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\", t) else \"allow\"})\r\n\r\n## Output stages\r\nmoderation.add_output_stage(\"safety_check\", lambda t: {\"action\": \"block\" if re.search(r\"kill|hurt|bomb\", t.lower()) else \"allow\"})\r\nmoderation.add_output_stage(\"misinformation_check\", lambda t: {\"action\": \"block\" if re.search(r\"vaccine.*autism\", t.lower()) else \"allow\"})\r\n\r\n## Test\r\ntests = [\r\n    (\"You are stupid\", \"I'm sorry you feel that way\"),\r\n    (\"What's my SSN? 123-45-6789\", \"Your SSN is...\"),\r\n    (\"Hello!\", \"Hi there! How can I help you today?\"),\r\n]\r\n\r\nfor inp, resp in tests:\r\n    result = moderation.process(inp, resp)\r\n    status = \"✅\" if result[\"allowed\"] else \"❌\"\r\n    print(f\"{status} Input: {inp[:40]:40s} | Response: {result['response'][:40]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript content filtering\r\ninterface FilterResult {\r\n  passed: boolean;\r\n  category?: string;\r\n  action: \"allow\" | \"flag\" | \"block\";\r\n}\r\n\r\nclass ContentFilter {\r\n  private patterns: Map<string, RegExp[]> = new Map();\r\n\r\n  addPattern(category: string, patterns: string[]): void {\r\n    this.patterns.set(category, patterns.map(p => new RegExp(p, \"i\")));\r\n  }\r\n\r\n  filter(text: string): FilterResult {\r\n    for (const [category, regexps] of this.patterns) {\r\n      for (const regex of regexps) {\r\n        if (regex.test(text)) {\r\n          return { passed: false, category, action: \"block\" };\r\n        }\r\n      }\r\n    }\r\n    return { passed: true, action: \"allow\" };\r\n  }\r\n}\r\n\r\nconst filter = new ContentFilter();\r\nfilter.addPattern(\"toxicity\", [\"\\\\b(hate|idiot|stupid)\\\\b\"]);\r\nfilter.addPattern(\"pii\", [\"\\\\b\\\\d{3}-\\\\d{2}-\\\\d{4}\\\\b\"]);\r\nconsole.log(filter.filter(\"You are an idiot\"));\r\nconsole.log(filter.filter(\"Hello world\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content filtering applies to both LLM inputs (what users send) and outputs (what the model returns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input filters block toxicity, hate speech, harassment, PII, and spam before reaching the LLM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output filters ensure safety, brand alignment, and factual accuracy of responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topic restriction limits conversations to approved categories using keyword-based classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ML safety classifiers provide nuanced scoring across multiple content categories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM-as-judge uses a separate LLM to evaluate content safety with natural language reasoning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A moderation pipeline combines multiple filtering stages for defense in depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PII detection (SSN, email, phone, credit cards) is essential for regulatory compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Misinformation filtering uses known false statement patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All filtering events should be logged for audit and continuous improvement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User input safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage content filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single keyword check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PII protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redact before LLM processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending raw PII to LLM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate + fallback responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returning LLM output unchecked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topic control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow/block lists with topic classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-ended conversation without guardrails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log all filtering events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No audit trail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML classifier + LLM-as-judge combination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relying on one method only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What content categories should you filter for LLM applications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Essential categories: toxicity, hate speech, harassment, sexual content, violence, self-harm, PII, spam/ commercial, misinformation, child safety. The specific set depends on your application domain — a financial app needs misinformation filtering, a healthcare app needs medical advice restrictions, and a general chatbot needs all categories."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you handle false positives in content filtering?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use graduated actions: block (high confidence), flag (medium — log for review), allow with warning (low). Maintain a whitelist of false positives. Allow user feedback (\"This was flagged incorrectly\"). Review flagged content periodically to tune thresholds. ML classifiers should have adjustable thresholds per category."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between input and output filtering?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Input filtering checks user messages before they reach the LLM — blocking toxic input, PII, and injection attempts. Output filtering checks LLM responses before returning to the user — blocking unsafe content, misinformation, and sensitive data. Both are necessary because the LLM might generate unsafe content even from safe input."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does topic restriction work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Topic restriction uses keyword patterns to classify user input into topic categories. An allow list specifies which topics are permitted; a block list specifies forbidden topics. Inputs that don't match any allowed topic are either blocked or.\nhandled with a fallback response. This is essential for domain-specific applications (e.g., finance bot shouldn't give medical advice)."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the LLM-as-judge approach for content safety?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM-as-judge uses a separate LLM (typically a stronger, safety-tuned model) to evaluate content safety. The judge receives the text and a classification prompt, then returns a safety assessment. This provides nuanced understanding that keyword matching misses, but adds latency and cost. Best used as a secondary filter for borderline cases."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What PII patterns should you detect and redact?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phone numbers, email addresses, SSN/TIN, credit card numbers, bank account numbers, passport numbers, driver's license numbers, API keys and tokens, database connection strings, and full names with context. Use regex patterns plus NLP-based entity recognition for comprehensive coverage. Redact before LLM processing unless PII is required for the use case."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you build a moderation pipeline?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage 1: Input filters — toxicity, PII, injection detection. Stage 2: Topic restriction. Stage 3: LLM processing. Stage 4: Output filters — safety, misinformation, brand alignment. Stage 5: Fallback response if any stage blocks. Log every filtering event. Use graduated actions: block (certain), flag (uncertain), allow (safe)."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle misinformation filtering?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a combination of: (1) Known misinformation pattern database (anti-vaccine, climate denial, conspiracy theories), (2) Fact-checking API integration for claims, (3) LLM-as-judge for nuanced misinformation detection, (4) Confidence-weighted responses — if model has low confidence, add disclaimers. Never output verified false claims even if the user insists."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What metrics should you track for content filtering?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Track: (1) Block rate — % of inputs/outputs blocked, (2) Flag rate — % requiring human review, (3) False positive rate — incorrectly blocked content,.\n(4) False negative rate — missed harmful content (from user reports), (5) Filter latency — time added by filtering pipeline, (6) Category distribution — which filters are most active,.\n(7) User appeal rate — how often users challenge blocks."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you handle content filtering for multilingual applications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use translation-based filtering: translate non-English content to English for filter checking, then process the original with the LLM. Alternatively, use multilingual ML classifiers or character-level patterns that work across languages. Be aware of cultural differences in what constitutes offensive content."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the first stage in a moderation pipeline?\r\na) Output validation\r\nb) Input filtering\r\nc) LLM processing\r\nd) Topic restriction"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Input filtering"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Input filtering happens before LLM processing to block harmful content early."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which PII pattern matches Social Security Numbers?\r\na) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{3}-\\d{2}-\\d{4}"
      }), "\r\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{10}"
      }), "\r\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{5}-\\d{4}"
      }), "\r\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{16}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) `\\d{3}-\\d{2}-\\d{4}`"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SSNs follow the XXX-XX-XXXX pattern."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is a graduated action in content filtering?\r\na) Block, flag, or allow based on confidence\r\nb) Always block all content\r\nc) Always allow all content\r\nd) Only filter output, not input"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Block, flag, or allow based on confidence"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Graduated actions use different responses based on detection confidence."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the LLM-as-judge approach?\r\na) Training an LLM to be a judge\r\nb) Using one LLM to evaluate another's output\r\nc) Deploying an LLM as a judge in court\r\nd) Fine-tuning on legal documents"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Using one LLM to evaluate another's output"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM-as-judge uses a separate LLM to evaluate content safety or quality."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Why is output filtering necessary even after input filtering?\r\na) Because the LLM may generate unsafe content from safe input\r\nb) Because input filtering is unreliable\r\nc) Because users prefer filtered output\r\nd) Because it reduces cost"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s03-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Because the LLM may generate unsafe content from safe input"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMs can generate harmful content even from benign prompts, so output filtering is essential."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Build an InputFilterPipeline with toxicity, PII, and spam filters. Test with 8 inputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a TopicRestrictor for a healthcare chatbot that allows medical Q&A but blocks treatment recommendations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create an OutputFilterPipeline with safety, brand alignment, and misinformation filters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a SafetyClassifier (simulated ML) that scores text across 7 categories with configurable thresholds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a complete ModerationPipeline with 3 input stages, 3 output stages, logging, and graduated actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Content Filtering behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Content Filtering\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Content Filtering to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Content Filtering (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Content Filtering and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Content Filtering-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Content Filtering in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Content Filtering builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Content Filtering before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Content Filtering is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Content Filtering in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Content Filtering is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Content Filtering is ___. — Answer: O(1) for hash lookup, O(n) for brute force"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Content Filtering is ___. — Answer: SQL injection, prompt injection, key exposure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Content Filtering issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Content Filtering in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Content Filtering that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Content Filtering in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Content Filtering and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Content Filtering to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Content Filtering from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Content Filtering when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Content Filtering twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Content Filtering snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Content Filtering listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Content Filtering to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Content Filtering by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Content Filtering to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Filtering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 17 — builds the foundation for 03 Content Filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Content Filtering with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Content Filtering fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Content Filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Content Filtering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Content Filtering?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Content Filtering?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Content Filtering asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Content Filtering?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content Filtering is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Content Filtering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content Filtering emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Content Filtering today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Content Filtering — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Content Filtering changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Content Filtering is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Content Filtering skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-03contentfiltering-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Content Filtering in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-03contentfiltering-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-03contentfiltering-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Content Filtering approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-03contentfiltering-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Content Filtering NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-03contentfiltering-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Content Filtering applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Content Filtering (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Content Filtering (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Content Filtering-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Content Filtering in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Filtering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 03 Content Filtering pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Content Filtering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Content Filtering problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Content Filtering is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_content_filtering(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Content Filtering.\r\n\r\n    Key concepts: authentication, authorization, encryption, injection, XSS\r\n    Complexity: O(1) for hash lookup, O(n) for brute force\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Content Filtering here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Content Filtering without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks",
        children: "Guardrails Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content Filtering, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Content Filtering depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);