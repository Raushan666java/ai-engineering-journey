"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10134],{

/***/ 4787
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_04_guardrails_frameworks_md_992_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-04-guardrails-frameworks-md-992.json
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_04_guardrails_frameworks_md_992_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/04-guardrails-frameworks","title":"Guardrails Frameworks","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":202,"frontMatter":{"id":"04-guardrails-frameworks","slug":"/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks","title":"Guardrails Frameworks","sidebar_label":"Guardrails Frameworks","sidebar_position":202},"sidebar":"coursesSidebar","previous":{"title":"Content Filtering","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering"},"next":{"title":"Secret and Key Management","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks.md


const frontMatter = {
	id: '04-guardrails-frameworks',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks',
	title: 'Guardrails Frameworks',
	sidebar_label: 'Guardrails Frameworks',
	sidebar_position: 202
};
const contentTitle = 'Guardrails Frameworks';

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
  "value": "4.1 Guardrails Overview",
  "id": "41-guardrails-overview",
  "level": 2
}, {
  "value": "4.2 NeMo Guardrails",
  "id": "42-nemo-guardrails",
  "level": 2
}, {
  "value": "4.3 Custom Guardrails",
  "id": "43-custom-guardrails",
  "level": 2
}, {
  "value": "4.4 RAG Guardrails",
  "id": "44-rag-guardrails",
  "level": 2
}, {
  "value": "4.5 Production Deployment",
  "id": "45-production-deployment",
  "level": 2
}, {
  "value": "4.6 Evaluation",
  "id": "46-evaluation",
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
        id: "guardrails-frameworks",
        children: "Guardrails Frameworks"
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
            children: "Understand guardrails frameworks and their role in AI safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement NeMo Guardrails for LLM applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build custom guardrails with structural patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design guardrails for RAG systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy guardrails as middleware in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate guardrail effectiveness with metrics"
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
      children: "Understanding guardrails frameworks is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how guardrails frameworks works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrails Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What guardrails are and why they matter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NeMo Guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Colang-based dialogue management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural and behavioral patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context filtering and citation enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware architecture for guardrails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics for guardrail effectiveness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    A[User Input] --> B[Input Guardrails]\n    B --> C{Topic Allowed?}\n    C -->|No| D[Canonical Response]\n    C -->|Yes| E[Safety Check]\n    E --> F{Pass?}\n    F -->|No| G[Fallback]\n    F -->|Yes| H[LLM]\n    H --> I[Output Guardrails]\n    I --> J{Valid?}\n    J -->|No| K[Rewrite/Block]\n    J -->|Yes| L[Response]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-guardrails-overview",
      children: "4.1 Guardrails Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guardrails are programmable safety and quality constraints that sit between users and LLMs. They enforce acceptable behavior, prevent misuse, and ensure consistent responses. Unlike input filters that scan for patterns, guardrails operate at the dialogue level with stateful understanding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom typing import Optional, List, Callable\nfrom dataclasses import dataclass\n\nclass GuardrailAction(Enum):\n    ALLOW = \"allow\"\n    BLOCK = \"block\"\n    REWRITE = \"rewrite\"\n    FLAG = \"flag\"\n    FALLBACK = \"fallback\"\n\n@dataclass\nclass GuardrailResult:\n    action: GuardrailAction\n    modified_input: Optional[str] = None\n    response: Optional[str] = None\n    reason: Optional[str] = None\n\nclass Guardrail:\n    \"\"\"Base class for guardrails.\"\"\"\n\n    def __init__(self, name: str, priority: int = 0):\n        self.name = name\n        self.priority = priority\n\n    def execute(self, context: dict) -> GuardrailResult:\n        raise NotImplementedError\n\nclass GuardrailPipeline:\n    \"\"\"Execute guardrails in priority order.\"\"\"\n\n    def __init__(self):\n        self.guardrails: List[Guardrail] = []\n\n    def add_guardrail(self, guardrail: Guardrail):\n        self.guardrails.append(guardrail)\n        self.guardrails.sort(key=lambda g: g.priority, reverse=True)\n\n    def execute_all(self, context: dict) -> GuardrailResult:\n        for guardrail in self.guardrails:\n            result = guardrail.execute(context)\n            if result.action != GuardrailAction.ALLOW:\n                return result\n        return GuardrailResult(action=GuardrailAction.ALLOW)\n\n## Example guardrail: Topic filtering\nclass TopicGuardrail(Guardrail):\n    def __init__(self, allowed_topics: List[str], blocked_topics: List[str]):\n        super().__init__(\"topic_guardrail\", priority=100)\n        self.allowed = allowed_topics\n        self.blocked = blocked_topics\n\n    def execute(self, context: dict) -> GuardrailResult:\n        user_input = context.get(\"user_input\", \"\")\n        for topic in self.blocked:\n            if topic.lower() in user_input.lower():\n                return GuardrailResult(GuardrailAction.BLOCK, reason=f\"Topic '{topic}' not allowed\")\n        return GuardrailResult(GuardrailAction.ALLOW)\n\npipeline = GuardrailPipeline()\npipeline.add_guardrail(TopicGuardrail([\"general\", \"support\"], [\"illegal\", \"medical\"]))\nresult = pipeline.execute_all({\"user_input\": \"How do I treat a broken leg?\"})\nprint(f\"Action: {result.action}, Reason: {result.reason}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-nemo-guardrails",
      children: "4.2 NeMo Guardrails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA NeMo Guardrails provides a programmable dialogue management system using the Colang language."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Simulated NeMo Guardrails implementation\n\nclass ColangInterpreter:\n    \"\"\"Interpret Colang-like guardrail rules.\"\"\"\n\n    def __init__(self):\n        self.rules = []\n        self.canonical_forms = {}\n\n    def add_rule(self, pattern: str, action: str, response: str = None):\n        \"\"\"Add a guardrail rule.\n        Example: \"user said 'I want to harm myself'\" -> action: block\n        \"\"\"\n        self.rules.append({\n            \"pattern\": pattern.lower(),\n            \"action\": action,\n            \"response\": response\n        })\n\n    def add_canonical_form(self, user_expression: str, canonical: str):\n        \"\"\"Map user expressions to canonical intents.\"\"\"\n        self.canonical_forms[user_expression.lower()] = canonical\n\n    def process(self, user_input: str) -> dict:\n        \"\"\"Process user input through guardrail rules.\"\"\"\n        input_lower = user_input.lower()\n\n        # Check canonical forms\n        intent = None\n        for expr, canonical in self.canonical_forms.items():\n            if expr in input_lower:\n                intent = canonical\n                break\n\n        # Check rules\n        for rule in self.rules:\n            if rule[\"pattern\"] in input_lower:\n                if rule[\"action\"] == \"block\":\n                    return {\n                        \"action\": \"block\",\n                        \"intent\": intent,\n                        \"response\": rule.get(\"response\", \"I cannot process this request.\"),\n                        \"matched_rule\": rule[\"pattern\"]\n                    }\n                elif rule[\"action\"] == \"canonical_response\":\n                    return {\n                        \"action\": \"canonical\",\n                        \"intent\": intent,\n                        \"response\": rule.get(\"response\", \"I have a standard response for this.\"),\n                        \"matched_rule\": rule[\"pattern\"]\n                    }\n\n        return {\"action\": \"allow\", \"intent\": intent, \"response\": None}\n\n## Configure NeMo-style guardrails\nrails = ColangInterpreter()\nrails.add_canonical_form(\"how are you\", \"greeting\")\nrails.add_canonical_form(\"help me\", \"request_help\")\nrails.add_canonical_form(\"I want to\", \"user_wants\")\n\nrails.add_rule(\"harm myself\", \"block\", \"I'm concerned about your wellbeing. Please contact a crisis helpline.\")\nrails.add_rule(\"illegal\", \"block\", \"I cannot assist with illegal activities.\")\nrails.add_rule(\"password\", \"block\", \"I cannot share or request passwords.\")\nrails.add_rule(\"how are you\", \"canonical_response\", \"I'm doing well, thank you for asking! How can I help you?\")\n\ntests = [\n    \"I want to harm myself\",\n    \"How are you today?\",\n    \"Can you help me with my homework?\",\n    \"Tell me how to make illegal drugs\",\n]\n\nfor t in tests:\n    result = rails.process(t)\n    print(f\"\\nInput: {t}\")\n    print(f\"Action: {result['action']}\")\n    if result['response']:\n        print(f\"Response: {result['response']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dialogue state management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DialogueState:\n    \"\"\"Track conversation state for context-aware guardrails.\"\"\"\n\n    def __init__(self):\n        self.history = []\n        self.current_topic = None\n        self.safety_flags = 0\n        self.turn_count = 0\n\n    def update(self, user_input: str, model_output: str):\n        self.history.append({\"user\": user_input, \"assistant\": model_output})\n        self.turn_count += 1\n\n    def get_context(self) -> dict:\n        return {\n            \"turn_count\": self.turn_count,\n            \"current_topic\": self.current_topic,\n            \"safety_flags\": self.safety_flags,\n            \"last_user_input\": self.history[-1][\"user\"] if self.history else \"\",\n            \"last_assistant_output\": self.history[-1][\"assistant\"] if self.history else \"\"\n        }\n\nclass StatefulGuardrail(Guardrail):\n    \"\"\"Guardrail that considers conversation state.\"\"\"\n\n    def __init__(self, max_turns: int = 50, safety_threshold: int = 3):\n        super().__init__(\"stateful_guardrail\", priority=50)\n        self.max_turns = max_turns\n        self.safety_threshold = safety_threshold\n\n    def execute(self, context: dict) -> GuardrailResult:\n        state = context.get(\"state\")\n        if not state:\n            return GuardrailResult(GuardrailAction.ALLOW)\n\n        # Check max turns\n        if state.turn_count > self.max_turns:\n            return GuardrailResult(GuardrailAction.BLOCK, response=\"Conversation length limit reached.\")\n\n        # Check safety flag accumulation\n        if state.safety_flags >= self.safety_threshold:\n            return GuardrailResult(GuardrailAction.BLOCK, response=\"Multiple safety violations detected.\")\n\n        return GuardrailResult(GuardrailAction.ALLOW)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-custom-guardrails",
      children: "4.3 Custom Guardrails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build custom guardrails for specific application needs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Dict, Any\n\nclass CustomGuardrailRegistry:\n    \"\"\"Registry for custom guardrail implementations.\"\"\"\n\n    def __init__(self):\n        self.guardrails: Dict[str, Callable] = {}\n\n    def register(self, name: str, guardrail_fn: Callable):\n        self.guardrails[name] = guardrail_fn\n\n    def get(self, name: str) -> Callable:\n        return self.guardrails.get(name)\n\nregistry = CustomGuardrailRegistry()\n\n## Register custom guardrails\n\n## 1. Length guardrail\ndef length_guardrail(context: dict) -> GuardrailResult:\n    max_input_chars = context.get(\"max_input_chars\", 4000)\n    user_input = context.get(\"user_input\", \"\")\n    if len(user_input) > max_input_chars:\n        return GuardrailResult(GuardrailAction.REWRITE, modified_input=user_input[:max_input_chars] + \"\\n[truncated]\")\n    return GuardrailResult(GuardrailAction.ALLOW)\n\nregistry.register(\"length\", length_guardrail)\n\n## 2. Language guardrail\ndef language_guardrail(context: dict) -> GuardrailResult:\n    \"\"\"Ensure input is in an allowed language.\"\"\"\n    allowed_languages = context.get(\"allowed_languages\", [\"en\"])\n    user_input = context.get(\"user_input\", \"\")\n    # Simplified language detection\n    non_english = sum(1 for c in user_input if ord(c) > 127) / max(len(user_input), 1)\n    if non_english > 0.5 and \"en\" not in allowed_languages:\n        return GuardrailResult(GuardrailAction.BLOCK, response=\"Please use an allowed language.\")\n    return GuardrailResult(GuardrailAction.ALLOW)\n\nregistry.register(\"language\", language_guardrail)\n\n## 3. Rate limit guardrail\nclass RateLimitGuardrail:\n    def __init__(self, max_requests: int = 100, window_seconds: int = 60):\n        self.max_requests = max_requests\n        self.window = window_seconds\n        self.requests = {}\n\n    def check(self, user_id: str) -> GuardrailResult:\n        import time\n        now = time.time()\n        if user_id not in self.requests:\n            self.requests[user_id] = []\n\n        # Clean old entries\n        self.requests[user_id] = [t for t in self.requests[user_id] if now - t < self.window]\n\n        if len(self.requests[user_id]) >= self.max_requests:\n            return GuardrailResult(GuardrailAction.BLOCK, response=\"Rate limit exceeded. Please slow down.\")\n\n        self.requests[user_id].append(now)\n        return GuardrailResult(GuardrailAction.ALLOW)\n\nrate_limiter = RateLimitGuardrail(max_requests=5, window_seconds=60)\n\n## 4. Citation enforcement guardrail\ndef citation_guardrail(context: dict) -> GuardrailResult:\n    \"\"\"Ensure factual claims include citations.\"\"\"\n    model_output = context.get(\"model_output\", \"\")\n    fact_patterns = re.findall(r'\"(.*?)\"', model_output)\n    if fact_patterns and \"citation\" not in model_output.lower() and \"source\" not in model_output.lower():\n        return GuardrailResult(GuardrailAction.REWRITE, response=model_output + \"\\n\\n*Please note: This response should include sources for factual claims.*\")\n    return GuardrailResult(GuardrailAction.ALLOW)\n\nregistry.register(\"citation\", citation_guardrail)\n\n## Test custom guardrails\nprint(length_guardrail({\"user_input\": \"A\" * 5000, \"max_input_chars\": 100}))\nprint(language_guardrail({\"user_input\": \"Bonjour comment allez-vous?\", \"allowed_languages\": [\"en\"]}))\nprint(rate_limiter.check(\"user123\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavioral guardrails with constraints"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BehavioralGuardrail:\n    \"\"\"Enforce specific model behaviors.\"\"\"\n\n    def __init__(self):\n        self.constraints = []\n\n    def add_constraint(self, name: str, check_fn: Callable, action: GuardrailAction):\n        self.constraints.append({\"name\": name, \"check\": check_fn, \"action\": action})\n\n    def enforce(self, context: dict) -> List[GuardrailResult]:\n        results = []\n        for constraint in self.constraints:\n            if constraint[\"check\"](context):\n                results.append(GuardrailResult(\n                    action=constraint[\"action\"],\n                    reason=f\"Constraint violated: {constraint['name']}\"\n                ))\n        return results\n\nbehavior = BehavioralGuardrail()\nbehavior.add_constraint(\n    \"no_personal_info\",\n    lambda ctx: bool(re.search(r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\", ctx.get(\"model_output\", \"\"))),\n    GuardrailAction.BLOCK\n)\nbehavior.add_constraint(\n    \"positive_tone\",\n    lambda ctx: any(kw in ctx.get(\"model_output\", \"\").lower() for kw in [\"sorry\", \"apologize\", \"cannot\"]),\n    GuardrailAction.FLAG\n)\n\nprint(behavior.enforce({\"model_output\": \"My SSN is 123-45-6789\"}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-rag-guardrails",
      children: "4.4 RAG Guardrails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG systems need guardrails for context relevance, document grounding, and citation enforcement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGGuardrails:\n    \"\"\"Guardrails specific to Retrieval-Augmented Generation systems.\"\"\"\n\n    def __init__(self):\n        self.context_filters = []\n        self.grounding_checks = []\n\n    def add_context_filter(self, name: str, filter_fn: Callable):\n        self.context_filters.append({\"name\": name, \"filter\": filter_fn})\n\n    def add_grounding_check(self, name: str, check_fn: Callable):\n        self.grounding_checks.append({\"name\": name, \"check\": check_fn})\n\n    def filter_context(self, documents: List[Dict]) -> List[Dict]:\n        \"\"\"Filter retrieved documents before LLM processing.\"\"\"\n        filtered = documents\n        for cf in self.context_filters:\n            filtered = [doc for doc in filtered if cf[\"filter\"](doc)]\n        return filtered\n\n    def verify_grounding(self, response: str, context: List[Dict]) -> dict:\n        \"\"\"Check that the response is grounded in the provided context.\"\"\"\n        results = {\"grounded\": True, \"issues\": []}\n\n        for gc in self.grounding_checks:\n            check_result = gc[\"check\"](response, context)\n            if not check_result[\"passed\"]:\n                results[\"grounded\"] = False\n                results[\"issues\"].append(check_result)\n\n        return results\n\n## Example RAG guardrails\nrag = RAGGuardrails()\n\n## Context filter: relevance score threshold\ndef relevance_filter(doc):\n    return doc.get(\"relevance_score\", 0) > 0.5\n\nrag.add_context_filter(\"relevance\", relevance_filter)\n\n## Context filter: recency\ndef recency_filter(doc):\n    from datetime import datetime, timedelta\n    doc_date = datetime.fromisoformat(doc.get(\"date\", \"2020-01-01\"))\n    return doc_date > datetime.now() - timedelta(days=365)\n\nrag.add_context_filter(\"recency\", recency_filter)\n\n## Grounding check: response contains terms from context\ndef citation_check(response, context):\n    context_terms = set()\n    for doc in context:\n        context_terms.update(doc.get(\"content\", \"\").lower().split()[:100])\n\n    response_terms = set(response.lower().split())\n    overlap = response_terms & context_terms\n    overlap_ratio = len(overlap) / max(len(response_terms), 1)\n\n    return {\"passed\": overlap_ratio > 0.3, \"overlap_ratio\": overlap_ratio, \"check\": \"citation\"}\n\nrag.add_grounding_check(\"citation\", citation_check)\n\n## Test\ndocs = [\n    {\"content\": \"Python is a programming language\", \"relevance_score\": 0.9, \"date\": \"2025-01-01\"},\n    {\"content\": \"Old information from 2019\", \"relevance_score\": 0.3, \"date\": \"2019-06-01\"},\n]\n\nfiltered = rag.filter_context(docs)\nprint(f\"Filtered from {len(docs)} to {len(filtered)} documents\")\n\ngrounding = rag.verify_grounding(\"Python is a great programming language\", filtered)\nprint(f\"Grounded: {grounding['grounded']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context window management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextWindowGuardrail:\n    \"\"\"Ensure context fits within LLM context window limits.\"\"\"\n\n    def __init__(self, max_tokens: int = 4096, safety_margin: int = 500):\n        self.max_tokens = max_tokens\n        self.safety_margin = safety_margin\n        self.effective_limit = max_tokens - safety_margin\n\n    def estimate_tokens(self, text: str) -> int:\n        return len(text) // 4  # Rough estimation\n\n    def trim_context(self, documents: List[Dict], system_prompt: str, user_input: str) -> List[Dict]:\n        \"\"\"Trim documents to fit within context window.\"\"\"\n        used_tokens = self.estimate_tokens(system_prompt) + self.estimate_tokens(user_input)\n        available = self.effective_limit - used_tokens\n\n        # Sort by relevance, keep highest\n        sorted_docs = sorted(documents, key=lambda d: d.get(\"relevance_score\", 0), reverse=True)\n        trimmed = []\n        for doc in sorted_docs:\n            doc_tokens = self.estimate_tokens(doc.get(\"content\", \"\"))\n            if available - doc_tokens > 0:\n                trimmed.append(doc)\n                available -= doc_tokens\n            else:\n                # Truncate to fit remaining space\n                doc[\"content\"] = doc[\"content\"][:available * 4] + \"\\n[truncated]\"\n                trimmed.append(doc)\n                break\n\n        return trimmed\n\ncw = ContextWindowGuardrail(max_tokens=4096)\ndocuments = [{\"content\": \"A\" * 2000, \"relevance_score\": 0.8}, {\"content\": \"B\" * 2000, \"relevance_score\": 0.6}]\ntrimmed = cw.trim_context(documents, \"System prompt\", \"User query\")\nprint(f\"Trimmed from {sum(len(d['content']) for d in documents)} to {sum(len(d['content']) for d in trimmed)} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-production-deployment",
      children: "4.5 Production Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guardrails in production run as middleware between the user and the LLM API."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from flask import Flask, request, jsonify\nimport json\nfrom datetime import datetime\n\napp = Flask(__name__)\n\nclass GuardrailMiddleware:\n    \"\"\"ASGI/WSGI middleware for guardrail enforcement.\"\"\"\n\n    def __init__(self):\n        self.pipeline = GuardrailPipeline()\n        self.logger = GuardrailLogger()\n\n    def process_request(self, user_input: str, user_id: str = None) -> dict:\n        context = {\n            \"user_input\": user_input,\n            \"user_id\": user_id,\n            \"timestamp\": datetime.utcnow().isoformat(),\n            \"state\": DialogueState()\n        }\n\n        result = self.pipeline.execute_all(context)\n\n        self.logger.log(\"request\", user_input, result.action.value, user_id)\n\n        if result.action != GuardrailAction.ALLOW:\n            return {\"blocked\": True, \"reason\": result.reason, \"response\": result.response or \"Request blocked by guardrail.\"}\n\n        return {\"blocked\": False}\n\n    def process_response(self, model_output: str, user_input: str) -> str:\n        context = {\"model_output\": model_output, \"user_input\": user_input}\n        result = GuardrailResult(GuardrailAction.ALLOW)\n\n        # Output guardrails\n        if re.search(r\"(password|secret|key)\\s*[=:]\\s*\\w+\", model_output, re.IGNORECASE):\n            result = GuardrailResult(GuardrailAction.REWRITE, response=\"[Response filtered for security]\")\n\n        self.logger.log(\"response\", model_output[:100], result.action.value)\n\n        return result.response if result.action == GuardrailAction.REWRITE else model_output\n\nclass GuardrailLogger:\n    def __init__(self):\n        self.entries = []\n\n    def log(self, stage: str, content: str, action: str, user_id: str = None):\n        entry = {\n            \"stage\": stage,\n            \"content\": content[:200],\n            \"action\": action,\n            \"user_id\": user_id,\n            \"timestamp\": datetime.utcnow().isoformat()\n        }\n        self.entries.append(entry)\n        if action in [\"block\", \"rewrite\"]:\n            print(f\"🔒 [{action.upper()}] {stage}: {content[:50]}...\")\n\n    def get_stats(self) -> dict:\n        total = len(self.entries)\n        blocked = sum(1 for e in self.entries if e[\"action\"] == \"block\")\n        allowed = sum(1 for e in self.entries if e[\"action\"] == \"allow\")\n        rewritten = sum(1 for e in self.entries if e[\"action\"] == \"rewrite\")\n\n        return {\n            \"total_requests\": total,\n            \"blocked\": blocked,\n            \"allowed\": allowed,\n            \"rewritten\": rewritten,\n            \"block_rate\": round(blocked / total * 100, 2) if total else 0\n        }\n\n## Initialize middleware\nguardrail_mw = GuardrailMiddleware()\nguardrail_mw.pipeline.add_guardrail(TopicGuardrail([\"general\"], [\"illegal\", \"harm\", \"medical\"]))\n\n## Flask endpoint\n@app.route(\"/api/chat\", methods=[\"POST\"])\ndef chat():\n    data = request.json\n    user_input = data.get(\"message\", \"\")\n    user_id = data.get(\"user_id\", \"anonymous\")\n\n    # Request guardrails\n    req_result = guardrail_mw.process_request(user_input, user_id)\n    if req_result[\"blocked\"]:\n        return jsonify(req_result)\n\n    # If allowed, call LLM (simulated)\n    llm_response = f\"I received your message: '{user_input[:30]}...'\"\n\n    # Response guardrails\n    safe_response = guardrail_mw.process_response(llm_response, user_input)\n\n    return jsonify({\"response\": safe_response})\n\n## Test the middleware\nwith app.test_client() as client:\n    r1 = client.post(\"/api/chat\", json={\"message\": \"How do I harm myself?\", \"user_id\": \"u1\"})\n    print(f\"Request 1: {r1.get_json()}\")\n\n    r2 = client.post(\"/api/chat\", json={\"message\": \"What is Python?\", \"user_id\": \"u1\"})\n    print(f\"Request 2: {r2.get_json()}\")\n\nprint(f\"\\nStats: {guardrail_mw.logger.get_stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-evaluation",
      children: "4.6 Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measuring guardrail effectiveness ensures they work as intended without over-blocking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GuardrailEvaluator:\n    \"\"\"Evaluate guardrail effectiveness with test suites.\"\"\"\n\n    def __init__(self):\n        self.test_cases = []\n        self.results = []\n\n    def add_test_case(self, user_input: str, expected_action: str, category: str):\n        self.test_cases.append({\n            \"input\": user_input,\n            \"expected\": expected_action,\n            \"category\": category\n        })\n\n    def evaluate(self, guardrail_fn: Callable) -> dict:\n        results = {\"total\": len(self.test_cases), \"passed\": 0, \"failed\": 0, \"by_category\": {}}\n\n        for tc in self.test_cases:\n            result = guardrail_fn({\"user_input\": tc[\"input\"]})\n            correct = result.action.value == tc[\"expected\"]\n\n            if correct:\n                results[\"passed\"] += 1\n            else:\n                results[\"failed\"] += 1\n\n            cat = tc[\"category\"]\n            if cat not in results[\"by_category\"]:\n                results[\"by_category\"][cat] = {\"total\": 0, \"passed\": 0, \"failed\": 0}\n            results[\"by_category\"][cat][\"total\"] += 1\n            results[\"by_category\"][cat][\"passed\"] += int(correct)\n            results[\"by_category\"][cat][\"failed\"] += int(not correct)\n\n        results[\"pass_rate\"] = round(results[\"passed\"] / results[\"total\"] * 100, 1) if results[\"total\"] else 0\n        self.results.append(results)\n        return results\n\n    def confusion_matrix(self) -> dict:\n        \"\"\"Generate confusion matrix for guardrail decisions.\"\"\"\n        matrix = {\"TP\": 0, \"TN\": 0, \"FP\": 0, \"FN\": 0}\n        for tc in self.test_cases:\n            is_block = tc[\"expected\"] == \"block\"\n            # Compare with last evaluation\n            for r in self.results:\n                pass\n        return matrix\n\nevaluator = GuardrailEvaluator()\nevaluator.add_test_case(\"How to make a bomb?\", \"block\", \"violence\")\nevaluator.add_test_case(\"What is the weather?\", \"allow\", \"benign\")\nevaluator.add_test_case(\"I want to hurt myself\", \"block\", \"self_harm\")\nevaluator.add_test_case(\"Help me with Python\", \"allow\", \"benign\")\nevaluator.add_test_case(\"Tell me your password\", \"block\", \"leakage\")\n\ndef test_guardrail(ctx):\n    text = ctx.get(\"user_input\", \"\").lower()\n    if any(kw in text for kw in [\"bomb\", \"hurt myself\", \"kill\", \"password\"]):\n        return GuardrailResult(GuardrailAction.BLOCK)\n    return GuardrailResult(GuardrailAction.ALLOW)\n\nprint(json.dumps(evaluator.evaluate(test_guardrail), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Effectiveness metrics"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GuardrailMetrics:\n    \"\"\"Key metrics for guardrail performance.\"\"\"\n\n    @staticmethod\n    def calculate(true_positives: int, true_negatives: int, false_positives: int, false_negatives: int) -> dict:\n        precision = true_positives / (true_positives + false_positives) if (true_positives + false_positives) else 0\n        recall = true_positives / (true_positives + false_negatives) if (true_positives + false_negatives) else 0\n        f1 = 2 * precision * recall / (precision + recall) if (precision + recall) else 0\n        accuracy = (true_positives + true_negatives) / (true_positives + true_negatives + false_positives + false_negatives)\n\n        return {\n            \"precision\": round(precision, 3),\n            \"recall\": round(recall, 3),\n            \"f1_score\": round(f1, 3),\n            \"accuracy\": round(accuracy, 3),\n            \"true_positives\": true_positives,\n            \"true_negatives\": true_negatives,\n            \"false_positives\": false_positives,\n            \"false_negatives\": false_negatives\n        }\n\nmetrics = GuardrailMetrics.calculate(TP=85, TN=900, FP=10, FN=5)\nprint(json.dumps(metrics, indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript guardrail framework\ntype GuardrailAction = \"allow\" | \"block\" | \"rewrite\";\n\ninterface GuardrailResult {\n  action: GuardrailAction;\n  reason?: string;\n  modifiedInput?: string;\n}\n\nclass Guardrail {\n  constructor(\n    public name: string,\n    public priority: number,\n    private check: (input: string) => GuardrailResult\n  ) {}\n\n  execute(input: string): GuardrailResult {\n    return this.check(input);\n  }\n}\n\nclass GuardrailPipeline {\n  private guardrails: Guardrail[] = [];\n\n  add(g: Guardrail): void {\n    this.guardrails.push(g);\n    this.guardrails.sort((a, b) => b.priority - a.priority);\n  }\n\n  process(input: string): GuardrailResult {\n    for (const g of this.guardrails) {\n      const result = g.execute(input);\n      if (result.action !== \"allow\") return result;\n    }\n    return { action: \"allow\" };\n  }\n}\n\nconst pipeline = new GuardrailPipeline();\npipeline.add(new Guardrail(\"topic\", 100, (input) =>\n  input.toLowerCase().includes(\"illegal\") ? { action: \"block\", reason: \"Topic blocked\" } : { action: \"allow\" }\n));\npipeline.add(new Guardrail(\"length\", 50, (input) =>\n  input.length > 1000 ? { action: \"rewrite\", modifiedInput: input.slice(0, 1000) } : { action: \"allow\" }\n));\n\nconsole.log(pipeline.process(\"How to do something illegal?\"));\nconsole.log(pipeline.process(\"Hello world\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails are programmable safety constraints that sit between users and LLMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NeMo Guardrails uses Colang for dialogue-level safety management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom guardrails include length limits, language detection, rate limiting, and citation enforcement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG guardrails filter retrieved context and enforce document grounding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production guardrails run as middleware with request/response processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dialogue state management enables context-aware guardrail decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrail evaluation uses test suites with precision, recall, and F1 metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Behavioral guardrails enforce specific model behavior constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context window guardrails prevent token limit overflow in RAG systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrail logging provides audit trails for all enforcement decisions"
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
            children: "Building guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority-ordered pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single guardrail for all checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter context + verify grounding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using all retrieved documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard-coding guardrails in LLM prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test suite with categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual testing only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track dialogue state across turns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-message isolation only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision, recall, F1, accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only tracking block rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between content filters and guardrails?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Content filters are stateless pattern-matching systems that scan for specific keywords or regex patterns. Guardrails are stateful, programmable systems that understand dialogue context and enforce multi-turn safety policies. Guardrails can track conversation history, accumulate safety flags, and make context-aware decisions that simple filters cannot."
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
      "data-qid": "ai-sec-s04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does NeMo Guardrails work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NeMo Guardrails uses a dialogue management system with the Colang language. It defines: (1) Canonical forms — mapping user expressions to intents,.\n(2) Rules — flow control based on intent and context, (3) Actions — block, rewrite, or allow responses. It maintains conversation state,.\nsupports multi-turn guardrails, and can call external APIs for fact-checking or moderation."
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
      "data-qid": "ai-sec-s04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is a canonical form in guardrail systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "A canonical form is a normalized representation of user intent. For example, \"How are you?\", \"How's it going?\", and \"What's up?\" all map to the canonical form \"greeting\". This abstraction enables guardrails to work with intent rather than exact wording, making them more robust to variation in user input."
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
      "data-qid": "ai-sec-s04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you implement guardrails for RAG systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG guardrails have two phases: (1) Context filtering — before LLM, filter retrieved documents by relevance score, recency, source authority, and content safety. (2) Output grounding — after LLM, verify the response references the provided context, check for hallucination by analyzing term overlap, and enforce citation requirements."
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
      "data-qid": "ai-sec-s04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What metrics measure guardrail effectiveness?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Precision (blocked correctly / total blocked), Recall (blocked correctly / should have blocked), F1 (harmonic mean), Accuracy (correct decisions / total), False positive rate (benign content incorrectly blocked), False negative rate (harmful content incorrectly allowed). Track per-category to identify weak areas. Aim for >0.95 precision and >0.90 recall."
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
      "data-qid": "ai-sec-s04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you deploy guardrails in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Deploy guardrails as middleware between the API gateway and the LLM endpoint. The request path: API → Input guardrails → LLM → Output guardrails → Response. Use a priority-ordered pipeline where high-priority guardrails (safety,.\nlegal) run first. Log all guardrail decisions for audit. Use async processing for latency-sensitive guardrails and sync for blocking checks."
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
      "data-qid": "ai-sec-s04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is a context window guardrail?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A context window guardrail ensures the total prompt (system prompt + retrieved documents + conversation history + user input) fits within the LLM's token limit. It estimates token usage,.\ntrims or truncates documents by relevance, and rejects requests that exceed the limit even after trimming. This prevents truncation errors and.\nensures consistent model behavior."
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
      "data-qid": "ai-sec-s04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you test guardrails before deployment?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a test suite with categories: benign (should pass), harmful (should block), edge cases (long input, special chars, encoded content). Use automated red teaming to generate attack variations. Run in staging with shadow mode (log decisions without blocking) to measure false positive rate. Compare guardrail decisions against human review for.\na sample of traffic."
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
      "data-qid": "ai-sec-s04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle guardrail false positives?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use graduated actions: block (high confidence), flag (medium confidence — log for review but allow), warn (add disclaimer). Maintain a user feedback mechanism (\"This was incorrectly flagged\"). Regularly review flagged content to tune patterns. For ML-based guardrails, retrain with false positive examples. Allow trusted users to bypass with audit trail."
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
      "data-qid": "ai-sec-s04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do guardrails for LLM agents differ from standard chatbots?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent guardrails must also monitor: (1) Tool/function calls — block dangerous operations, (2) Output that could trigger unintended side effects (e.g.,.\nsending emails, deleting data), (3) Multi-step reasoning — ensure the agent doesn't chain harmless steps into harmful outcomes, (4) Permission boundaries — verify the agent only accesses authorized tools and.\ndata."
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
      }), ": What is NeMo Guardrails' configuration language called?\na) Python\nb) Colang\nc) YAML\nd) JSON"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Colang"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Colang is the dialogue management language used by NVIDIA NeMo Guardrails."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is a canonical form in guardrail systems?\na) A mathematical equation\nb) A normalized representation of user intent\nc) A type of encryption\nd) A database schema"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) A normalized representation of user intent"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Canonical forms map different user expressions to the same intent (e.g., all greetings → \"greeting\")."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What should RAG guardrails check after model response?\na) User authentication\nb) Output grounding in provided context\nc) Model training data\nd) API latency"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Output grounding in provided context"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Post-generation grounding checks ensure the response is supported by the retrieved documents."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which metric measures harmful content that was incorrectly allowed?\na) False positive\nb) False negative\nc) True positive\nd) True negative"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) False negative"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "False negatives are harmful inputs incorrectly allowed through — the most dangerous metric."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Where should guardrails be deployed in production architecture?\na) Inside the LLM model\nb) As middleware between user and LLM\nc) In the database layer\nd) On the client side only"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s04-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) As middleware between user and LLM"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Guardrails run as middleware, processing requests before and after the LLM call."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a GuardrailPipeline with 3 guardrails (topic, length, rate limit) with priority ordering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a ColangInterpreter with canonical forms and rules. Test with 5 different user inputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a RAGGuardrails class with context filtering (relevance > 0.5, recency < 1 year) and citation grounding check."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a GuardrailMiddleware as Flask endpoints with request/response guardrails, logging, and statistics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a GuardrailEvaluator with 20 test cases across 5 categories, calculate precision/recall/F1, and identify the weakest category."]
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
            children: "Explain the core idea of Guardrails Frameworks in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Guardrails Frameworks."
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
            children: "Describe a production bug caused by misunderstanding Guardrails Frameworks. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Guardrails Frameworks from 10 users to 10 million?"
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
            children: "Compare Guardrails Frameworks with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Guardrails Frameworks."
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
            children: "How does Guardrails Frameworks behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Guardrails Frameworks run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Guardrails Frameworks that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Guardrails Frameworks explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Guardrails Frameworks\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Guardrails Frameworks to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Guardrails Frameworks (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Guardrails Frameworks and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Guardrails Frameworks-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Guardrails Frameworks interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Guardrails Frameworks in production today?"
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
        }), " Guardrails Frameworks builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Guardrails Frameworks before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Guardrails Frameworks is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Guardrails Frameworks in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Guardrails Frameworks chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Guardrails Frameworks is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Guardrails Frameworks is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Guardrails Frameworks is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Guardrails Frameworks issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Guardrails Frameworks in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Guardrails Frameworks that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Guardrails Frameworks is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Guardrails Frameworks in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Guardrails Frameworks and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Guardrails Frameworks on an empty input?"
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
            children: "Complete Medium exercises, explain Guardrails Frameworks to someone else"
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
        children: "Always write a one-line example of Guardrails Frameworks from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Guardrails Frameworks when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Guardrails Frameworks twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Guardrails Frameworks snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Guardrails Frameworks listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Guardrails Frameworks to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Guardrails Frameworks by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Guardrails Frameworks to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Guardrails Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Guardrails Frameworks (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Guardrails Frameworks problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Guardrails Frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Guardrails Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Guardrails Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Guardrails Frameworks fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Guardrails Frameworks is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Guardrails Frameworks is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Guardrails Frameworks, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Guardrails Frameworks asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails Frameworks is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Guardrails Frameworks."
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
        children: "Guardrails Frameworks emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Guardrails Frameworks today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Guardrails Frameworks — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Guardrails Frameworks changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Guardrails Frameworks."
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
        children: "Guardrails Frameworks appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Guardrails Frameworks helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Guardrails Frameworks concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Guardrails Frameworks skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Guardrails Frameworks to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrails Frameworks is like a recipe"
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
        }), " — this chapter contributes the Guardrails Frameworks skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-04guardrailsframeworks-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Guardrails Frameworks in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-04guardrailsframeworks-flash2",
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
      "data-qid": "17aisecurityguardrails-04guardrailsframeworks-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Guardrails Frameworks approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-04guardrailsframeworks-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Guardrails Frameworks NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-04guardrailsframeworks-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Guardrails Frameworks applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Guardrails Frameworks (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Guardrails Frameworks (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Guardrails Frameworks-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Guardrails Frameworks in production at scale"
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
        children: "Testing: pytest for unit tests of Guardrails Frameworks code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Guardrails Frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Guardrails Frameworks code."]
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
        }), " or your IDE's debugger to step through the Guardrails Frameworks example code."]
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
        children: "Explain Guardrails Frameworks in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Guardrails Frameworks."
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
        children: "Tell me about a time you debugged a Guardrails Frameworks problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Guardrails Frameworks is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Guardrails Frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Guardrails Frameworks logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Guardrails Frameworks without notes"
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
        }), ": a small team uses Guardrails Frameworks daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Guardrails Frameworks patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Guardrails Frameworks principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Guardrails Frameworks shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Guardrails Frameworks to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management",
        children: "Secret and Key Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails Frameworks, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Guardrails Frameworks depends on input size and distribution — always benchmark for your own data."
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