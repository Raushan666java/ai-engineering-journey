"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75508],{

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
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_03_content_filtering_md_b80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/03-content-filtering","title":"Content Filtering","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":201,"frontMatter":{"id":"03-content-filtering","slug":"/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering","title":"Content Filtering","sidebar_label":"Content Filtering","sidebar_position":201},"sidebar":"coursesSidebar","previous":{"title":"Prompt Injection Defense","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/02-prompt-injection-defense"},"next":{"title":"Guardrails Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks"}}');
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
	sidebar_position: 201
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
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
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
        children: "flowchart TB\n    A[User Input] --> B[Input Filter]\n    B --> C{Toxic?}\n    C -->|Yes| D[Block + Warning]\n    C -->|No| E[PII Scan]\n    E --> F[LLM]\n    F --> G[Output Filter]\n    G --> H{Safe?}\n    H -->|Yes| I[Return]\n    H -->|No| J[Fallback + Log]\n    D --> K[Moderation Log]\n    J --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-content-filtering-overview",
      children: "3.1 Content Filtering Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content filtering for LLM applications encompasses both input filtering (what users can send) and output filtering (what the model can return). Effective filtering uses multiple techniques: keyword matching, regex patterns, ML classifiers, and LLM-as-judge evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom typing import List, Tuple, Optional\nfrom dataclasses import dataclass\nimport re\n\nclass ContentCategory(Enum):\n    TOXICITY = \"toxicity\"\n    HATE_SPEECH = \"hate_speech\"\n    HARASSMENT = \"harassment\"\n    SEXUAL = \"sexual_content\"\n    VIOLENCE = \"violence\"\n    PII = \"pii\"\n    SPAM = \"spam\"\n    MISINFORMATION = \"misinformation\"\n    SELF_HARM = \"self_harm\"\n    CHILD_SAFETY = \"child_safety\"\n\n@dataclass\nclass ContentFilterResult:\n    passed: bool\n    category: Optional[ContentCategory]\n    confidence: float\n    details: str\n    action: str  # \"block\", \"flag\", \"warn\", \"allow\"\n\nclass BaseFilter:\n    \"\"\"Base class for content filters.\"\"\"\n\n    def __init__(self, name: str):\n        self.name = name\n        self.stats = {\"checked\": 0, \"blocked\": 0, \"flagged\": 0}\n\n    def filter(self, text: str) -> ContentFilterResult:\n        raise NotImplementedError\n\n    def record_result(self, result: ContentFilterResult):\n        self.stats[\"checked\"] += 1\n        if result.action == \"block\":\n            self.stats[\"blocked\"] += 1\n        elif result.action == \"flag\":\n            self.stats[\"flagged\"] += 1\n\n## Toxicity keyword filter\nclass ToxicityFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"toxicity_filter\")\n        self.toxic_patterns = [\n            r\"\\b(hate|kill|murder|die)\\s+(you|them|everyone)\\b\",\n            r\"\\b(idiot|stupid|dumb)\\s+(ass|fuck)\\b\",\n            r\"\\b(go\\s+)?(kill|hurt|harm)\\s+yourself\\b\",\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        text_lower = text.lower()\n        for pattern in self.toxic_patterns:\n            if re.search(pattern, text_lower):\n                result = ContentFilterResult(\n                    passed=False, category=ContentCategory.TOXICITY,\n                    confidence=0.9, details=f\"Toxic pattern matched: {pattern[:30]}...\",\n                    action=\"block\"\n                )\n                self.record_result(result)\n                return result\n\n        result = ContentFilterResult(\n            passed=True, category=None,\n            confidence=1.0, details=\"Clean\",\n            action=\"allow\"\n        )\n        self.record_result(result)\n        return result\n\ntoxicity = ToxicityFilter()\nprint(toxicity.filter(\"You are an idiot\"))\nprint(toxicity.filter(\"What is the weather today?\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-input-filters",
      children: "3.2 Input Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input filters protect the LLM from receiving harmful or inappropriate content."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InputFilterPipeline:\n    \"\"\"Multi-stage input content filtering pipeline.\"\"\"\n\n    def __init__(self):\n        self.filters = []\n\n    def add_filter(self, filter_instance: BaseFilter):\n        self.filters.append(filter_instance)\n\n    def process(self, text: str) -> Tuple[bool, List[ContentFilterResult]]:\n        \"\"\"Process text through all input filters.\"\"\"\n        results = []\n\n        for f in self.filters:\n            result = f.filter(text)\n            results.append(result)\n            if result.action == \"block\":\n                return False, results\n\n        return True, results\n\n    def summary(self) -> dict:\n        return {f.name: f.stats for f in self.filters}\n\n## Build input filter pipeline\nclass PIIFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"pii_filter\")\n        self.pii_patterns = [\n            (r\"\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b\", \"phone\"),\n            (r\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b\", \"email\"),\n            (r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\", \"ssn\"),\n            (r\"\\b\\d{16}\\b\", \"credit_card\"),\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        for pattern, name in self.pii_patterns:\n            if re.findall(pattern, text):\n                result = ContentFilterResult(\n                    passed=False, category=ContentCategory.PII,\n                    confidence=0.95, details=f\"PII detected: {name}\",\n                    action=\"block\"\n                )\n                self.record_result(result)\n                return result\n        result = ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"No PII\", action=\"allow\")\n        self.record_result(result)\n        return result\n\nclass HateSpeechFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"hate_speech\")\n        self.hate_patterns = [\n            r\"\\b(hate|attack|destroy)\\s+(all|every)\\s+\\w+(people|group|race|religion)\\b\",\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        for pattern in self.hate_patterns:\n            if re.search(pattern, text.lower()):\n                return ContentFilterResult(passed=False, category=ContentCategory.HATE_SPEECH, confidence=0.85, details=\"Hate speech detected\", action=\"block\")\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Clean\", action=\"allow\")\n\nclass SpamFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"spam_filter\")\n        self.spam_patterns = [\n            r\"\\bbuy\\s+now\\b\", r\"\\blimited\\s+time\\s+offer\\b\", r\"\\bclick\\s+here\\b\",\n            r\"\\bcongratulations.*won\\b\", r\"\\bfree\\s+(money|prize|gift)\\b\",\n            r\"\\b(chance|opportunity)\\s+of\\s+a\\s+lifetime\\b\",\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        spam_score = 0\n        for pattern in self.spam_patterns:\n            if re.search(pattern, text.lower()):\n                spam_score += 1\n        if spam_score >= 3:\n            return ContentFilterResult(passed=False, category=ContentCategory.SPAM, confidence=min(0.5 + spam_score * 0.1, 0.95), details=f\"Spam score: {spam_score}\", action=\"block\")\n        if spam_score >= 1:\n            return ContentFilterResult(passed=True, category=ContentCategory.SPAM, confidence=0.3, details=\"Low spam suspicion\", action=\"flag\")\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Clean\", action=\"allow\")\n\ninput_pipeline = InputFilterPipeline()\ninput_pipeline.add_filter(ToxicityFilter())\ninput_pipeline.add_filter(HateSpeechFilter())\ninput_pipeline.add_filter(PIIFilter())\ninput_pipeline.add_filter(SpamFilter())\n\ntests = [\n    \"Hello, how can I help you today?\",\n    \"You are a stupid idiot!\",\n    \"My email is john@example.com and SSN is 123-45-6789\",\n    \"Buy now! Limited time offer! Click here! Free money!\",\n]\n\nfor test in tests:\n    passed, results = input_pipeline.process(test)\n    if passed:\n        print(f\"✅ {test[:50]}\")\n    else:\n        blocked = [r for r in results if r.action == \"block\"]\n        print(f\"❌ Blocked: {blocked[0].details} | '{test[:40]}...'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-output-filters",
      children: "3.3 Output Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output filters ensure LLM responses are safe, compliant, and brand-appropriate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OutputFilterPipeline:\n    \"\"\"Multi-stage output content filtering pipeline.\"\"\"\n\n    def __init__(self):\n        self.filters = []\n\n    def add_filter(self, filter_instance):\n        self.filters.append(filter_instance)\n\n    def validate(self, response: str) -> Tuple[bool, List[ContentFilterResult]]:\n        results = []\n        for f in self.filters:\n            result = f.filter(response)\n            results.append(result)\n            if result.action == \"block\":\n                return False, results\n        return True, results\n\nclass SafetyFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"safety_filter\")\n        self.unsafe_patterns = [\n            r\"\\b(how\\s+to\\s+)?(make|build|create)\\s+(a\\s+)?(bomb|weapon|drug)\\b\",\n            r\"\\b(self.?harm|suicide|kill\\s+yourself)\\b\",\n            r\"\\b(child\\s+)?(abuse|porn|exploitation)\\b\",\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        text_lower = text.lower()\n        for pattern in self.unsafe_patterns:\n            if re.search(pattern, text_lower):\n                return ContentFilterResult(passed=False, category=ContentCategory.VIOLENCE if \"bomb\" in pattern else ContentCategory.SELF_HARM, confidence=0.95, details=\"Safety violation detected\", action=\"block\")\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Safe\", action=\"allow\")\n\nclass BrandAlignmentFilter(BaseFilter):\n    def __init__(self, brand_guidelines: List[str] = None):\n        super().__init__(\"brand_filter\")\n        self.forbidden_topics = [\n            r\"\\bcompetitor\\s+(is\\s+)?(better|superior|cheaper)\\b\",\n            r\"\\b(our\\s+)?product\\s+(is\\s+)?(bad|terrible|useless)\\b\",\n            r\"\\b(guaranteed|promised)\\s+(results|returns)\\b\",\n        ]\n        self.brand_guidelines = brand_guidelines or []\n\n    def filter(self, text: str) -> ContentFilterResult:\n        text_lower = text.lower()\n        for pattern in self.forbidden_topics:\n            if re.search(pattern, text_lower):\n                return ContentFilterResult(passed=False, category=None, confidence=0.8, details=\"Brand guideline violation\", action=\"block\")\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"Brand compliant\", action=\"allow\")\n\nclass MisinformationFilter(BaseFilter):\n    def __init__(self):\n        super().__init__(\"misinformation_filter\")\n        self.misinfo_patterns = [\n            r\"\\b(vaccines?|vaccination)\\s+causes?\\s+(autism|infertility)\\b\",\n            r\"\\b(earth|climate)\\s+(is\\s+)?(flat|not\\s+warming)\\b\",\n            r\"\\b(COVID|coronavirus)\\s+(is\\s+)?(hoax|fake|man-made)\\b\",\n        ]\n\n    def filter(self, text: str) -> ContentFilterResult:\n        for pattern in self.misinfo_patterns:\n            if re.search(pattern, text.lower()):\n                return ContentFilterResult(passed=False, category=ContentCategory.MISINFORMATION, confidence=0.9, details=\"Known misinformation pattern\", action=\"block\")\n        return ContentFilterResult(passed=True, category=None, confidence=1.0, details=\"No misinformation\", action=\"allow\")\n\noutput_pipeline = OutputFilterPipeline()\noutput_pipeline.add_filter(SafetyFilter())\noutput_pipeline.add_filter(BrandAlignmentFilter())\noutput_pipeline.add_filter(MisinformationFilter())\n\n## Test outputs\noutputs = [\n    \"Here is how to improve your credit score\",\n    \"This product will guaranteed double your money in 24 hours!\",\n    \"Vaccines cause autism according to some studies\",\n    \"I cannot provide information on how to create weapons\",\n]\n\nfor out in outputs:\n    passed, results = output_pipeline.validate(out)\n    if passed:\n        print(f\"✅ {out[:60]}\")\n    else:\n        blocked = [r for r in results if r.action == \"block\"]\n        if blocked:\n            print(f\"❌ Blocked: {blocked[0].details} | '{out[:40]}...'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-topic-restriction",
      children: "3.4 Topic Restriction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Topic restriction allows or blocks specific categories of conversation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopicRestrictor:\n    \"\"\"Restrict LLM to allowed topics only.\"\"\"\n\n    def __init__(self):\n        self.allowed_topics = set()\n        self.blocked_topics = set()\n        self.topic_patterns = {}\n\n    def allow_topic(self, topic: str, keywords: List[str]):\n        self.allowed_topics.add(topic)\n        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]\n\n    def block_topic(self, topic: str, keywords: List[str]):\n        self.blocked_topics.add(topic)\n        self.topic_patterns[topic] = [re.compile(kw, re.IGNORECASE) for kw in keywords]\n\n    def classify_topic(self, text: str) -> List[str]:\n        \"\"\"Classify text into detected topics.\"\"\"\n        detected = []\n        for topic, patterns in self.topic_patterns.items():\n            for pattern in patterns:\n                if pattern.search(text):\n                    if topic not in detected:\n                        detected.append(topic)\n                    break\n        return detected\n\n    def check_input(self, text: str) -> Tuple[bool, str]:\n        \"\"\"Check if input is about an allowed topic.\"\"\"\n        detected = self.classify_topic(text)\n\n        # If no topics detected and we have allowed topics, check if it's generic\n        if not detected:\n            return True, \"generic_query\"\n\n        # Check blocked topics first\n        for topic in detected:\n            if topic in self.blocked_topics:\n                return False, f\"Topic '{topic}' is blocked\"\n\n        # If we have allowed topics, at least one must match\n        if self.allowed_topics:\n            has_allowed = any(t in self.allowed_topics for t in detected)\n            if not has_allowed:\n                return False, f\"Topic not in allowed list: {detected}\"\n\n        return True, \"allowed\"\n\n## Configure topic restrictions for a financial advisory bot\nrestrictor = TopicRestrictor()\nrestrictor.allow_topic(\"investing\", [r\"\\binvest(ing|ment|or)?s?\\b\", r\"\\bportfolio\\b\", r\"\\bstock\\b\", r\"\\bbond\\b\", r\"\\betf\\b\"])\nrestrictor.allow_topic(\"retirement\", [r\"\\bretire(ment)?\\b\", r\"\\b401k?\\b\", r\"\\bIRA\\b\", r\"\\bpension\\b\"])\nrestrictor.allow_topic(\"tax\", [r\"\\btax(es)?\\b\", r\"\\btax.?return\\b\", r\"\\bdeduction\\b\"])\nrestrictor.block_topic(\"illegal_activities\", [r\"\\b(drug|illicit|illegal)\\b.*\\b(trade|sell|buy)\\b\", r\"\\bmoney\\s+laundering\\b\", r\"\\btax\\s+evasion\\b\"])\nrestrictor.block_topic(\"medical_advice\", [r\"\\bdiagnos(is|e)\\b\", r\"\\bprescribe\\b\", r\"\\btreat(ment)?\\s+for\\b\", r\"\\bmedical\\s+condition\\b\", r\"\\bsymptom\\s+of\\b\"])\n\nqueries = [\n    \"What are good ETFs for retirement?\",\n    \"How do I diagnose a headache?\",\n    \"How can I hide money from the tax department?\",\n    \"Tell me a joke\",\n]\n\nfor q in queries:\n    allowed, reason = restrictor.check_input(q)\n    status = \"✅\" if allowed else \"❌\"\n    print(f\"{status} {reason}: {q[:50]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Category-based response handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TopicAwareResponder:\n    \"\"\"Generate appropriate responses based on topic classification.\"\"\"\n\n    def __init__(self, restrictor: TopicRestrictor):\n        self.restrictor = restrictor\n        self.fallback_responses = {\n            \"blocked\": \"I cannot discuss this topic. Please ask about a different subject.\",\n            \"out_of_scope\": \"That topic is outside my area of expertise. I specialize in financial advice.\",\n            \"sensitive\": \"This appears to be a sensitive topic. Please consult a professional for specific advice.\"\n        }\n\n    def get_response(self, user_input: str) -> dict:\n        allowed, reason = self.restrictor.check_input(user_input)\n        if not allowed:\n            if \"blocked\" in reason:\n                return {\"action\": \"block\", \"response\": self.fallback_responses[\"blocked\"], \"reason\": reason}\n            return {\"action\": \"block\", \"response\": self.fallback_responses[\"out_of_scope\"], \"reason\": reason}\n\n        return {\"action\": \"allow\", \"response\": None, \"reason\": \"allowed\"}\n\nresponder = TopicAwareResponder(restrictor)\nfor q in queries:\n    r = responder.get_response(q)\n    print(f\"\\nQuery: {q}\")\n    print(f\"Action: {r['action']}\")\n    if r['action'] == 'block':\n        print(f\"Response: {r['response']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-safety-classifiers",
      children: "3.5 Safety Classifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML-based safety classifiers provide more nuanced content filtering than keyword matching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import Dict\n\nclass SafetyClassifier:\n    \"\"\"ML-based content safety classifier (simulated).\"\"\"\n\n    def __init__(self):\n        self.categories = [\n            \"safe\", \"toxic\", \"hate\", \"harassment\", \"sexual\",\n            \"violence\", \"self_harm\", \"misinformation\"\n        ]\n        self.thresholds = {\n            \"toxic\": 0.7,\n            \"hate\": 0.6,\n            \"harassment\": 0.7,\n            \"sexual\": 0.8,\n            \"violence\": 0.7,\n            \"self_harm\": 0.5,\n            \"misinformation\": 0.7\n        }\n\n    def predict(self, text: str) -> Dict[str, float]:\n        \"\"\"Simulate ML classifier predictions for content safety.\"\"\"\n        text_lower = text.lower()\n        scores = {}\n\n        # Simple keyword-based scoring (simulating ML model)\n        keyword_scores = {\n            \"toxic\": [\"hate\", \"idiot\", \"stupid\", \"ugly\", \"terrible\"],\n            \"hate\": [\"racial\", \"religious\", \"hate\", \"superior\", \"inferior\"],\n            \"harassment\": [\"harass\", \"bully\", \"threaten\", \"intimidate\"],\n            \"sexual\": [\"sex\", \"porn\", \"explicit\", \"nude\"],\n            \"violence\": [\"kill\", \"murder\", \"attack\", \"weapon\", \"bomb\"],\n            \"self_harm\": [\"suicide\", \"self-harm\", \"hurt myself\", \"end it\"],\n            \"misinformation\": [\"fake news\", \"hoax\", \"conspiracy\", \"cover-up\"],\n        }\n\n        for category, keywords in keyword_scores.items():\n            score = sum(0.15 for kw in keywords if kw in text_lower)\n            scores[category] = min(score + np.random.uniform(0, 0.1), 1.0)\n\n        scores[\"safe\"] = 1.0 - max(scores.values()) if scores else 1.0\n        return scores\n\n    def classify(self, text: str) -> dict:\n        scores = self.predict(text)\n        max_category = max(scores, key=scores.get)\n        max_score = scores[max_category]\n\n        triggered = []\n        for category, threshold in self.thresholds.items():\n            if scores.get(category, 0) >= threshold:\n                triggered.append(category)\n\n        return {\n            \"text\": text[:50],\n            \"scores\": {k: round(v, 3) for k, v in scores.items()},\n            \"primary_category\": max_category,\n            \"primary_score\": round(max_score, 3),\n            \"triggered_filters\": triggered,\n            \"action\": \"block\" if triggered else \"allow\",\n            \"needs_review\": len(triggered) >= 2\n        }\n\nclassifier = SafetyClassifier()\ntest_texts = [\n    \"I think you're terrible at this.\",\n    \"What's the capital of France?\",\n    \"This is a hoax created by the government.\",\n    \"I feel like hurting myself.\",\n]\n\nfor text in test_texts:\n    result = classifier.classify(text)\n    icon = \"❌\" if result[\"action\"] == \"block\" else \"✅\"\n    print(f\"{icon} [{result['action']}] {text[:45]:45s} | filters: {result['triggered_filters']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LLM-as-judge safety classifier"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMAsJudgeClassifier:\n    \"\"\"Use an LLM to evaluate content safety.\"\"\"\n\n    def __init__(self):\n        self.judge_prompt = \"\"\"You are a content safety judge. Analyze the following text and classify it.\n\nCategories: safe, toxic, hate_speech, harassment, sexual, violence, self_harm, misinformation\n\nReturn a JSON: {{\"category\": \"...\", \"confidence\": 0.0-1.0, \"explanation\": \"...\"}}\n\nText: {text}\"\"\"\n\n    def evaluate(self, text: str) -> dict:\n        \"\"\"Evaluate text safety using LLM-as-judge (simulated).\"\"\"\n        # In production, this calls an LLM API\n        # Simulated response\n        has_harm = any(kw in text.lower() for kw in [\"kill\", \"hate\", \"suicide\", \"bomb\"])\n        return {\n            \"category\": \"toxic\" if has_harm else \"safe\",\n            \"confidence\": 0.95 if has_harm else 0.99,\n            \"explanation\": \"Text contains harmful language\" if has_harm else \"Text appears safe\",\n            \"action\": \"block\" if has_harm else \"allow\"\n        }\n\njudge = LLMAsJudgeClassifier()\nprint(judge.evaluate(\"I will kill you\"))\nprint(judge.evaluate(\"The weather is nice today\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-moderation-pipeline",
      children: "3.6 Moderation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production moderation pipeline combines all filtering stages."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModerationPipeline:\n    \"\"\"Complete content moderation pipeline for LLM applications.\"\"\"\n\n    def __init__(self):\n        self.input_stages = []\n        self.output_stages = []\n        self.log = []\n        self.stats = {\"processed\": 0, \"input_blocked\": 0, \"output_blocked\": 0}\n\n    def add_input_stage(self, name: str, stage_fn):\n        self.input_stages.append((name, stage_fn))\n\n    def add_output_stage(self, name: str, stage_fn):\n        self.output_stages.append((name, stage_fn))\n\n    def moderate_input(self, text: str) -> dict:\n        \"\"\"Run all input moderation stages.\"\"\"\n        result = {\"passed\": True, \"stages\": [], \"blocked_at\": None}\n\n        for name, stage_fn in self.input_stages:\n            stage_result = stage_fn(text)\n            result[\"stages\"].append({\"name\": name, \"result\": stage_result})\n\n            if stage_result.get(\"action\") == \"block\":\n                result[\"passed\"] = False\n                result[\"blocked_at\"] = name\n                break\n\n        return result\n\n    def moderate_output(self, text: str) -> dict:\n        \"\"\"Run all output moderation stages.\"\"\"\n        result = {\"passed\": True, \"stages\": [], \"blocked_at\": None}\n\n        for name, stage_fn in self.output_stages:\n            stage_result = stage_fn(text)\n            result[\"stages\"].append({\"name\": name, \"result\": stage_result})\n\n            if stage_result.get(\"action\") == \"block\":\n                result[\"passed\"] = False\n                result[\"blocked_at\"] = name\n                break\n\n        return result\n\n    def process(self, user_input: str, llm_response: str) -> dict:\n        \"\"\"Full moderation cycle: input → LLM → output.\"\"\"\n        self.stats[\"processed\"] += 1\n\n        # Input moderation\n        input_result = self.moderate_input(user_input)\n        if not input_result[\"passed\"]:\n            self.stats[\"input_blocked\"] += 1\n            self._log(\"input_blocked\", user_input, input_result[\"blocked_at\"])\n            return {\n                \"allowed\": False,\n                \"stage\": \"input\",\n                \"blocked_by\": input_result[\"blocked_at\"],\n                \"response\": \"I cannot process this request.\",\n                \"details\": input_result\n            }\n\n        # Output moderation\n        output_result = self.moderate_output(llm_response)\n        if not output_result[\"passed\"]:\n            self.stats[\"output_blocked\"] += 1\n            self._log(\"output_blocked\", llm_response, output_result[\"blocked_at\"])\n            return {\n                \"allowed\": False,\n                \"stage\": \"output\",\n                \"blocked_by\": output_result[\"blocked_at\"],\n                \"response\": \"I could not generate a safe response. Please rephrase.\",\n                \"details\": output_result\n            }\n\n        return {\"allowed\": True, \"response\": llm_response}\n\n    def _log(self, event: str, content: str, stage: str):\n        self.log.append({\"event\": event, \"content\": content[:100], \"stage\": stage, \"timestamp\": datetime.utcnow().isoformat()})\n\n## Build moderation pipeline\nmoderation = ModerationPipeline()\n\n## Input stages\nmoderation.add_input_stage(\"toxicity_check\", lambda t: {\"action\": \"block\" if re.search(r\"idiot|stupid|hate\", t.lower()) else \"allow\"})\nmoderation.add_input_stage(\"pii_check\", lambda t: {\"action\": \"block\" if re.search(r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\", t) else \"allow\"})\n\n## Output stages\nmoderation.add_output_stage(\"safety_check\", lambda t: {\"action\": \"block\" if re.search(r\"kill|hurt|bomb\", t.lower()) else \"allow\"})\nmoderation.add_output_stage(\"misinformation_check\", lambda t: {\"action\": \"block\" if re.search(r\"vaccine.*autism\", t.lower()) else \"allow\"})\n\n## Test\ntests = [\n    (\"You are stupid\", \"I'm sorry you feel that way\"),\n    (\"What's my SSN? 123-45-6789\", \"Your SSN is...\"),\n    (\"Hello!\", \"Hi there! How can I help you today?\"),\n]\n\nfor inp, resp in tests:\n    result = moderation.process(inp, resp)\n    status = \"✅\" if result[\"allowed\"] else \"❌\"\n    print(f\"{status} Input: {inp[:40]:40s} | Response: {result['response'][:40]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript content filtering\ninterface FilterResult {\n  passed: boolean;\n  category?: string;\n  action: \"allow\" | \"flag\" | \"block\";\n}\n\nclass ContentFilter {\n  private patterns: Map<string, RegExp[]> = new Map();\n\n  addPattern(category: string, patterns: string[]): void {\n    this.patterns.set(category, patterns.map(p => new RegExp(p, \"i\")));\n  }\n\n  filter(text: string): FilterResult {\n    for (const [category, regexps] of this.patterns) {\n      for (const regex of regexps) {\n        if (regex.test(text)) {\n          return { passed: false, category, action: \"block\" };\n        }\n      }\n    }\n    return { passed: true, action: \"allow\" };\n  }\n}\n\nconst filter = new ContentFilter();\nfilter.addPattern(\"toxicity\", [\"\\\\b(hate|idiot|stupid)\\\\b\"]);\nfilter.addPattern(\"pii\", [\"\\\\b\\\\d{3}-\\\\d{2}-\\\\d{4}\\\\b\"]);\nconsole.log(filter.filter(\"You are an idiot\"));\nconsole.log(filter.filter(\"Hello world\"));\n"
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
      }), ": What is the first stage in a moderation pipeline?\na) Output validation\nb) Input filtering\nc) LLM processing\nd) Topic restriction"]
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
      }), ": Which PII pattern matches Social Security Numbers?\na) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{3}-\\d{2}-\\d{4}"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{10}"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\d{5}-\\d{4}"
      }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
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
      }), ": What is a graduated action in content filtering?\na) Block, flag, or allow based on confidence\nb) Always block all content\nc) Always allow all content\nd) Only filter output, not input"]
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
      }), ": What is the LLM-as-judge approach?\na) Training an LLM to be a judge\nb) Using one LLM to evaluate another's output\nc) Deploying an LLM as a judge in court\nd) Fine-tuning on legal documents"]
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
      }), ": Why is output filtering necessary even after input filtering?\na) Because the LLM may generate unsafe content from safe input\nb) Because input filtering is unreliable\nc) Because users prefer filtered output\nd) Because it reduces cost"]
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
            children: "Explain the core idea of Content Filtering in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Content Filtering."
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
            children: "Describe a production bug caused by misunderstanding Content Filtering. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Content Filtering from 10 users to 10 million?"
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
            children: "Compare Content Filtering with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Content Filtering."
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
            children: "How would you make an implementation of Content Filtering run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Content Filtering that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Content Filtering explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Content Filtering\")."
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
        children: "Review complexity and edge cases for the classic Content Filtering interview problem."
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
        }), " You should memorize the Content Filtering chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to Content Filtering is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Content Filtering is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of Content Filtering is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of Content Filtering on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Content Filtering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Content Filtering (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Content Filtering problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Content Filtering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Content Filtering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Content Filtering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Content Filtering fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Content Filtering is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Content Filtering is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Content Filtering, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Content Filtering asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing Content Filtering."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content Filtering appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Content Filtering helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Content Filtering concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Content Filtering skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Content Filtering to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content Filtering is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Content Filtering skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Content Filtering code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Content Filtering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Content Filtering code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Content Filtering example code."]
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
        children: "Explain Content Filtering in 60 seconds."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Content Filtering."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Content Filtering logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Content Filtering daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Content Filtering patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Content Filtering principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Content Filtering shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Content Filtering to the business outcome, not just the code."]
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