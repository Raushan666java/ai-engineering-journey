"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8604],{

/***/ 92498
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_07_human_in_the_loop_md_ac0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-07-human-in-the-loop-md-ac0.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_07_human_in_the_loop_md_ac0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/07-human-in-the-loop","title":"Human-in-the-Loop","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":182,"frontMatter":{"id":"07-human-in-the-loop","slug":"/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop","title":"Human-in-the-Loop","sidebar_label":"Human-in-the-Loop","sidebar_position":182},"sidebar":"placementSidebar","previous":{"title":"Multi-Agent Systems","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems"},"next":{"title":"Agent Observability","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/08-agent-observability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop.md


const frontMatter = {
	id: '07-human-in-the-loop',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/07-human-in-the-loop',
	title: 'Human-in-the-Loop',
	sidebar_label: 'Human-in-the-Loop',
	sidebar_position: 182
};
const contentTitle = 'Human-in-the-Loop';

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
  "value": "7.1 HITL Patterns",
  "id": "71-hitl-patterns",
  "level": 2
}, {
  "value": "When to Involve Humans",
  "id": "when-to-involve-humans",
  "level": 3
}, {
  "value": "7.2 Approval Workflows",
  "id": "72-approval-workflows",
  "level": 2
}, {
  "value": "7.2.1 Approval Gate",
  "id": "721-approval-gate",
  "level": 3
}, {
  "value": "7.2.2 Multi-Step Approval",
  "id": "722-multi-step-approval",
  "level": 3
}, {
  "value": "7.2.3 Timeout-Based Approval",
  "id": "723-timeout-based-approval",
  "level": 3
}, {
  "value": "7.3 Escalation Handling",
  "id": "73-escalation-handling",
  "level": 2
}, {
  "value": "7.3.1 Escalation Manager",
  "id": "731-escalation-manager",
  "level": 3
}, {
  "value": "7.3.2 Confidence-Based Escalation",
  "id": "732-confidence-based-escalation",
  "level": 3
}, {
  "value": "7.4 Feedback Collection",
  "id": "74-feedback-collection",
  "level": 2
}, {
  "value": "7.4.1 Feedback Collector",
  "id": "741-feedback-collector",
  "level": 3
}, {
  "value": "7.4.2 Preference Learning",
  "id": "742-preference-learning",
  "level": 3
}, {
  "value": "7.4.3 Corrections",
  "id": "743-corrections",
  "level": 3
}, {
  "value": "7.5 Interrupt &amp; Resume",
  "id": "75-interrupt--resume",
  "level": 2
}, {
  "value": "7.5.1 Workflow Interruption",
  "id": "751-workflow-interruption",
  "level": 3
}, {
  "value": "7.5.2 Context Preservation",
  "id": "752-context-preservation",
  "level": 3
}, {
  "value": "7.6 Design Patterns",
  "id": "76-design-patterns",
  "level": 2
}, {
  "value": "7.6.1 Pattern Selection",
  "id": "761-pattern-selection",
  "level": 3
}, {
  "value": "7.6.2 HITL Integration",
  "id": "762-hitl-integration",
  "level": 3
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "human-in-the-loop",
        children: "Human-in-the-Loop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand human-in-the-loop (HITL) patterns for agent systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement approval workflows for high-stakes agent actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design escalation paths when agent confidence is low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build feedback collection mechanisms for agent improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement graceful interruption and resumption of agent workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents autonomously use tools to complete tasks. LangGraph builds stateful, multi-step agent workflows. This module covers agent architectures, tool use, memory, and production deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding human in the loop is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how human in the loop works in practice."
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HITL Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval gates, escalation, feedback loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval Workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human authorization for sensitive actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escalation Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-confidence detection, human takeover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human ratings, corrections, preferences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt & Resume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pausing execution, context preservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When and how to involve humans"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Agent Processing] --> B{Confidence Check}\r\n    B -->|High| C[Execute Action]\r\n    B -->|Medium| D[Request Human Approval]\r\n    B -->|Low| E[Escalate to Human]\r\n    D -->|Approved| C\r\n    D -->|Rejected| F[Alternative Action]\r\n    E --> G[Human Takes Over]\r\n    C --> H[Collect Feedback]\r\n    H --> I[Learn & Improve]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-hitl-patterns",
      children: "7.1 HITL Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human-in-the-loop patterns define when and how humans participate in agent workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-involve-humans",
      children: "When to Involve Humans"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Any, Callable\r\nimport json\r\nimport time\r\n\r\nclass ConfidenceLevel(Enum):\r\n    HIGH = \"high\"\r\n    MEDIUM = \"medium\"\r\n    LOW = \"low\"\r\n    UNKNOWN = \"unknown\"\r\n\r\nclass HITLAction(Enum):\r\n    PROCEED = \"proceed\"\r\n    REQUEST_APPROVAL = \"request_approval\"\r\n    ESCALATE = \"escalate\"\r\n    ASK_CLARIFICATION = \"ask_clarification\"\r\n\r\n@dataclass\r\nclass HITLDecision:\r\n    action: HITLAction\r\n    reason: str\r\n    confidence: float\r\n    context: Dict = field(default_factory=dict)\r\n\r\nclass HITLPolicy:\r\n    def __init__(self, approval_threshold: float = 0.7, escalation_threshold: float = 0.4):\r\n        self.approval_threshold = approval_threshold\r\n        self.escalation_threshold = escalation_threshold\r\n\r\n    def evaluate(self, action_type: str, confidence: float, risk_level: str = \"low\") -> HITLDecision:\r\n        if risk_level == \"high\" and confidence < self.approval_threshold:\r\n            return HITLDecision(HITLAction.REQUEST_APPROVAL, f\"High-risk action needs approval\", confidence)\r\n\r\n        if risk_level == \"critical\" or confidence < self.escalation_threshold:\r\n            return HITLDecision(HITLAction.ESCALATE, f\"Confidence too low ({confidence:.2f})\", confidence)\r\n\r\n        if confidence < self.approval_threshold and risk_level != \"low\":\r\n            return HITLDecision(HITLAction.REQUEST_APPROVAL, f\"Moderate confidence ({confidence:.2f})\", confidence)\r\n\r\n        if action_type == \"unknown\":\r\n            return HITLDecision(HITLAction.ASK_CLARIFICATION, \"Unknown action type\", confidence)\r\n\r\n        return HITLDecision(HITLAction.PROCEED, \"Sufficient confidence\", confidence)\r\n\r\npolicy = HITLPolicy(approval_threshold=0.7, escalation_threshold=0.4)\r\nprint(policy.evaluate(\"send_email\", 0.85, \"low\"))\r\nprint(policy.evaluate(\"delete_record\", 0.65, \"high\"))\r\nprint(policy.evaluate(\"unknown_action\", 0.3, \"critical\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-approval-workflows",
      children: "7.2 Approval Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-approval-gate",
      children: "7.2.1 Approval Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ApprovalGate:\r\n    def __init__(self, approver_fn: Callable):\r\n        self.approver_fn = approver_fn\r\n        self.pending_approvals: Dict[str, Dict] = {}\r\n        self.approval_history: List[Dict] = []\r\n\r\n    def request_approval(self, request_id: str, action: str, details: Dict) -> str:\r\n        self.pending_approvals[request_id] = {\r\n            \"action\": action,\r\n            \"details\": details,\r\n            \"status\": \"pending\",\r\n            \"created_at\": time.time(),\r\n        }\r\n        return request_id\r\n\r\n    def approve(self, request_id: str, approver: str = \"human\") -> bool:\r\n        if request_id in self.pending_approvals:\r\n            self.pending_approvals[request_id][\"status\"] = \"approved\"\r\n            self.pending_approvals[request_id][\"approved_by\"] = approver\r\n            self.approval_history.append({\"request_id\": request_id, \"action\": \"approve\", \"approver\": approver})\r\n            return True\r\n        return False\r\n\r\n    def reject(self, request_id: str, reason: str = \"\", approver: str = \"human\") -> bool:\r\n        if request_id in self.pending_approvals:\r\n            self.pending_approvals[request_id][\"status\"] = \"rejected\"\r\n            self.pending_approvals[request_id][\"reason\"] = reason\r\n            self.pending_approvals[request_id][\"approved_by\"] = approver\r\n            self.approval_history.append({\"request_id\": request_id, \"action\": \"reject\", \"reason\": reason, \"approver\": approver})\r\n            return True\r\n        return False\r\n\r\n    def check_status(self, request_id: str) -> str:\r\n        request = self.pending_approvals.get(request_id)\r\n        return request[\"status\"] if request else \"not_found\"\r\n\r\n    def get_pending(self) -> List[Dict]:\r\n        return [\r\n            {\"id\": rid, **req}\r\n            for rid, req in self.pending_approvals.items()\r\n            if req[\"status\"] == \"pending\"\r\n        ]\r\n\r\ngate = ApprovalGate(lambda rid, action: True)\r\nrid = gate.request_approval(\"req-1\", \"send_email\", {\"to\": \"user@example.com\", \"body\": \"Welcome!\"})\r\nprint(f\"Before: {gate.check_status(rid)}\")\r\ngate.approve(rid)\r\nprint(f\"After approval: {gate.check_status(rid)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-multi-step-approval",
      children: "7.2.2 Multi-Step Approval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiStepApproval:\r\n    def __init__(self, required_approvers: int = 2):\r\n        self.required = required_approvers\r\n        self.approvals: Dict[str, List[str]] = {}\r\n\r\n    def request(self, request_id: str, action: str, details: Dict) -> Dict:\r\n        self.approvals[request_id] = []\r\n        return {\r\n            \"request_id\": request_id,\r\n            \"action\": action,\r\n            \"details\": details,\r\n            \"approvals_needed\": self.required,\r\n            \"approvals_obtained\": 0,\r\n        }\r\n\r\n    def approve(self, request_id: str, approver: str) -> Dict:\r\n        if request_id not in self.approvals:\r\n            return {\"status\": \"error\", \"message\": \"Request not found\"}\r\n\r\n        if approver in self.approvals[request_id]:\r\n            return {\"status\": \"duplicate\", \"message\": f\"{approver} already approved\"}\r\n\r\n        self.approvals[request_id].append(approver)\r\n        obtained = len(self.approvals[request_id])\r\n\r\n        if obtained >= self.required:\r\n            return {\"status\": \"approved\", \"approvals\": obtained}\r\n        return {\"status\": \"partial\", \"approvals_remaining\": self.required - obtained}\r\n\r\nmsa = MultiStepApproval(required_approvers=2)\r\nreq = msa.request(\"req-2\", \"delete_data\", {\"table\": \"users\"})\r\nprint(msa.approve(\"req-2\", \"manager-1\"))\r\nprint(msa.approve(\"req-2\", \"compliance-1\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "723-timeout-based-approval",
      children: "7.2.3 Timeout-Based Approval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TimeoutApproval:\r\n    def __init__(self, timeout_seconds: float = 3600, auto_approve: bool = False):\r\n        self.timeout = timeout_seconds\r\n        self.auto_approve = auto_approve\r\n        self.requests: Dict[str, Dict] = {}\r\n\r\n    def submit(self, request_id: str, action: str, details: Dict) -> Dict:\r\n        self.requests[request_id] = {\r\n            \"action\": action,\r\n            \"details\": details,\r\n            \"status\": \"pending\",\r\n            \"submitted_at\": time.time(),\r\n        }\r\n        return {\"request_id\": request_id, \"status\": \"pending\", \"timeout\": self.timeout}\r\n\r\n    def check(self, request_id: str) -> str:\r\n        req = self.requests.get(request_id)\r\n        if not req:\r\n            return \"not_found\"\r\n\r\n        if req[\"status\"] != \"pending\":\r\n            return req[\"status\"]\r\n\r\n        elapsed = time.time() - req[\"submitted_at\"]\r\n        if elapsed > self.timeout:\r\n            if self.auto_approve:\r\n                req[\"status\"] = \"auto_approved\"\r\n                return \"auto_approved\"\r\n            else:\r\n                req[\"status\"] = \"timed_out\"\r\n                return \"timed_out\"\r\n\r\n        return \"pending\"\r\n\r\n    def approve(self, request_id: str) -> bool:\r\n        if request_id in self.requests:\r\n            self.requests[request_id][\"status\"] = \"approved\"\r\n            return True\r\n        return False\r\n\r\ntoa = TimeoutApproval(timeout_seconds=5, auto_approve=False)\r\ntoa.submit(\"req-3\", \"update_settings\", {\"setting\": \"theme\"})\r\nprint(f\"Immediately: {toa.check('req-3')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-escalation-handling",
      children: "7.3 Escalation Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-escalation-manager",
      children: "7.3.1 Escalation Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EscalationManager:\r\n    def __init__(self, human_handoff_fn: Callable):\r\n        self.human_handoff = human_handoff_fn\r\n        self.escalations: List[Dict] = []\r\n        self.escalation_tiers = {\r\n            \"tier1\": [\"can_handle_simple\", \"can_answer_faq\"],\r\n            \"tier2\": [\"needs_analysis\", \"needs_research\"],\r\n            \"tier3\": [\"critical_decision\", \"policy_violation\", \"legal\"],\r\n        }\r\n\r\n    def escalate(self, agent_name: str, issue: str, context: Dict, tier: str = \"tier1\") -> Dict:\r\n        escalation = {\r\n            \"id\": f\"esc-{len(self.escalations) + 1}\",\r\n            \"agent\": agent_name,\r\n            \"issue\": issue,\r\n            \"context\": context,\r\n            \"tier\": tier,\r\n            \"status\": \"open\",\r\n            \"created_at\": time.time(),\r\n        }\r\n        self.escalations.append(escalation)\r\n\r\n        if tier == \"tier3\" or self._needs_immediate_human(issue):\r\n            result = self.human_handoff(escalation)\r\n            escalation[\"status\"] = \"handled\"\r\n            escalation[\"resolution\"] = result\r\n            return {\"escalation\": escalation, \"action\": \"handed_to_human\"}\r\n\r\n        return {\"escalation\": escalation, \"action\": \"queued\"}\r\n\r\n    def _needs_immediate_human(self, issue: str) -> bool:\r\n        critical_keywords = [\"emergency\", \"legal\", \"compliance\", \"security\", \"privacy\"]\r\n        return any(kw in issue.lower() for kw in critical_keywords)\r\n\r\n    def resolve(self, escalation_id: str, resolution: str):\r\n        for esc in self.escalations:\r\n            if esc[\"id\"] == escalation_id:\r\n                esc[\"status\"] = \"resolved\"\r\n                esc[\"resolution\"] = resolution\r\n                break\r\n\r\n    def get_open_escalations(self) -> List[Dict]:\r\n        return [e for e in self.escalations if e[\"status\"] == \"open\"]\r\n\r\ndef human_handoff(escalation: Dict) -> str:\r\n    return f\"Human reviewed: {escalation['issue']} handled.\"\r\n\r\nesc_mgr = EscalationManager(human_handoff)\r\nresult = esc_mgr.escalate(\"agent-1\", \"Security concern detected\", {\"action\": \"delete_user\"}, \"tier3\")\r\nprint(f\"Escalation result: {result['action']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-confidence-based-escalation",
      children: "7.3.2 Confidence-Based Escalation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConfidenceEscalator:\r\n    def __init__(self, low_confidence_threshold: float = 0.4):\r\n        self.threshold = low_confidence_threshold\r\n\r\n    def evaluate_confidence(self, agent_output: Dict) -> bool:\r\n        confidence = agent_output.get(\"confidence\", 1.0)\r\n        return confidence >= self.threshold\r\n\r\n    def check_and_escalate(self, query: str, agent_response: Dict, escalator: EscalationManager) -> Dict:\r\n        if not self.evaluate_confidence(agent_response):\r\n            return escalator.escalate(\r\n                agent_name=\"agent\",\r\n                issue=f\"Low confidence ({agent_response.get('confidence', 0):.2f})\",\r\n                context={\"query\": query, \"response\": agent_response},\r\n                tier=\"tier2\",\r\n            )\r\n        return {\"action\": \"proceed\", \"response\": agent_response}\r\n\r\nce = ConfidenceEscalator(0.4)\r\nprint(ce.check_and_escalate(\"complex question\", {\"confidence\": 0.3}, esc_mgr))\r\nprint(ce.check_and_escalate(\"simple question\", {\"confidence\": 0.9}, esc_mgr))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-feedback-collection",
      children: "7.4 Feedback Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-feedback-collector",
      children: "7.4.1 Feedback Collector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FeedbackCollector:\r\n    def __init__(self):\r\n        self.feedback: List[Dict] = []\r\n\r\n    def collect(self, agent_name: str, query: str, response: str, rating: int, comments: str = \"\"):\r\n        entry = {\r\n            \"agent\": agent_name,\r\n            \"query\": query,\r\n            \"response\": response,\r\n            \"rating\": rating,\r\n            \"comments\": comments,\r\n            \"timestamp\": time.time(),\r\n        }\r\n        self.feedback.append(entry)\r\n        return entry\r\n\r\n    def get_average_rating(self, agent_name: str = None) -> float:\r\n        entries = self.feedback\r\n        if agent_name:\r\n            entries = [e for e in entries if e[\"agent\"] == agent_name]\r\n        if not entries:\r\n            return 0.0\r\n        return sum(e[\"rating\"] for e in entries) / len(entries)\r\n\r\n    def get_recent_feedback(self, n: int = 10) -> List[Dict]:\r\n        sorted_feedback = sorted(self.feedback, key=lambda f: f[\"timestamp\"], reverse=True)\r\n        return sorted_feedback[:n]\r\n\r\n    def get_low_rated(self, threshold: int = 2) -> List[Dict]:\r\n        return [f for f in self.feedback if f[\"rating\"] <= threshold]\r\n\r\nfc = FeedbackCollector()\r\nfc.collect(\"agent-1\", \"What is RAG?\", \"RAG is...\", 5, \"Great explanation!\")\r\nfc.collect(\"agent-1\", \"Complex math\", \"I don't know\", 2, \"Not helpful\")\r\nprint(f\"Average rating: {fc.get_average_rating('agent-1'):.2f}\")\r\nprint(f\"Low-rated responses: {len(fc.get_low_rated(2))}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-preference-learning",
      children: "7.4.2 Preference Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PreferenceLearner:\r\n    def __init__(self):\r\n        self.preferences: Dict[str, Any] = {}\r\n\r\n    def record_preference(self, user_id: str, key: str, value: Any):\r\n        if user_id not in self.preferences:\r\n            self.preferences[user_id] = {}\r\n        self.preferences[user_id][key] = value\r\n\r\n    def get_preference(self, user_id: str, key: str, default=None):\r\n        return self.preferences.get(user_id, {}).get(key, default)\r\n\r\n    def learn_from_feedback(self, feedback_list: List[Dict]) -> Dict:\r\n        insights = {}\r\n        # Extract patterns from feedback\r\n        positive = [f for f in feedback_list if f.get(\"rating\", 0) >= 4]\r\n        negative = [f for f in feedback_list if f.get(\"rating\", 0) <= 2]\r\n\r\n        insights[\"positive_patterns\"] = len(positive)\r\n        insights[\"negative_patterns\"] = len(negative)\r\n\r\n        if positive:\r\n            insights[\"common_topics\"] = [p[\"query\"][:50] for p in positive[:3]]\r\n\r\n        return insights\r\n\r\npl = PreferenceLearner()\r\npl.record_preference(\"user-1\", \"tone\", \"professional\")\r\npl.record_preference(\"user-1\", \"detail_level\", \"high\")\r\nprint(f\"User preference: {pl.get_preference('user-1', 'tone')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-corrections",
      children: "7.4.3 Corrections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CorrectionTracker:\r\n    def __init__(self):\r\n        self.corrections: List[Dict] = []\r\n\r\n    def record_correction(self, agent_name: str, original: str, corrected: str, correction_type: str):\r\n        self.corrections.append({\r\n            \"agent\": agent_name,\r\n            \"original\": original,\r\n            \"corrected\": corrected,\r\n            \"type\": correction_type,\r\n            \"timestamp\": time.time(),\r\n        })\r\n\r\n    def get_correction_rate(self, agent_name: str = None) -> float:\r\n        entries = self.corrections\r\n        if agent_name:\r\n            entries = [e for e in entries if e[\"agent\"] == agent_name]\r\n        if not entries:\r\n            return 0.0\r\n        return len(entries)\r\n\r\n    def get_common_corrections(self) -> Dict:\r\n        types = {}\r\n        for c in self.corrections:\r\n            types[c[\"type\"]] = types.get(c[\"type\"], 0) + 1\r\n        return dict(sorted(types.items(), key=lambda x: x[1], reverse=True))\r\n\r\nct = CorrectionTracker()\r\nct.record_correction(\"agent-1\", \"Wrong fact\", \"Correct fact\", \"factual_error\")\r\nct.record_correction(\"agent-1\", \"Bad formatting\", \"Good formatting\", \"formatting\")\r\nprint(f\"Common errors: {ct.get_common_corrections()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-interrupt--resume",
      children: "7.5 Interrupt & Resume"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "751-workflow-interruption",
      children: "7.5.1 Workflow Interruption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WorkflowInterrupt:\r\n    def __init__(self):\r\n        self.paused_workflows: Dict[str, Dict] = {}\r\n\r\n    def pause(self, workflow_id: str, state: Dict, reason: str) -> str:\r\n        self.paused_workflows[workflow_id] = {\r\n            \"state\": state,\r\n            \"reason\": reason,\r\n            \"paused_at\": time.time(),\r\n            \"status\": \"paused\",\r\n        }\r\n        return workflow_id\r\n\r\n    def resume(self, workflow_id: str, updates: Dict = None) -> Optional[Dict]:\r\n        workflow = self.paused_workflows.get(workflow_id)\r\n        if not workflow or workflow[\"status\"] != \"paused\":\r\n            return None\r\n\r\n        state = workflow[\"state\"]\r\n        if updates:\r\n            state.update(updates)\r\n\r\n        workflow[\"status\"] = \"resumed\"\r\n        return state\r\n\r\n    def cancel(self, workflow_id: str) -> bool:\r\n        if workflow_id in self.paused_workflows:\r\n            self.paused_workflows[workflow_id][\"status\"] = \"cancelled\"\r\n            return True\r\n        return False\r\n\r\n    def get_paused(self) -> List[Dict]:\r\n        return [\r\n            {\"id\": wid, **wf}\r\n            for wid, wf in self.paused_workflows.items()\r\n            if wf[\"status\"] == \"paused\"\r\n        ]\r\n\r\ninterrupt = WorkflowInterrupt()\r\nstate = {\"step\": 3, \"data\": \"partial\", \"results\": []}\r\ninterrupt.pause(\"wf-1\", state, \"Human review needed\")\r\nprint(f\"Paused workflows: {len(interrupt.get_paused())}\")\r\nresumed_state = interrupt.resume(\"wf-1\", {\"approved\": True})\r\nprint(f\"Resumed state: {resumed_state}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "752-context-preservation",
      children: "7.5.2 Context Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextPreserver:\r\n    def __init__(self):\r\n        self.contexts: Dict[str, Dict] = {}\r\n\r\n    def save_context(self, workflow_id: str, context: Dict):\r\n        self.contexts[workflow_id] = {\r\n            \"context\": context,\r\n            \"saved_at\": time.time(),\r\n            \"version\": self.contexts.get(workflow_id, {}).get(\"version\", 0) + 1,\r\n        }\r\n\r\n    def restore_context(self, workflow_id: str) -> Optional[Dict]:\r\n        entry = self.contexts.get(workflow_id)\r\n        if entry:\r\n            return entry[\"context\"]\r\n        return None\r\n\r\n    def get_versions(self, workflow_id: str) -> int:\r\n        entry = self.contexts.get(workflow_id)\r\n        return entry[\"version\"] if entry else 0\r\n\r\n    def diff_context(self, workflow_id: str, version_a: int, version_b: int) -> Dict:\r\n        return {\"diff\": \"context changes between versions\"}\r\n\r\npreserver = ContextPreserver()\r\npreserver.save_context(\"wf-1\", {\"step\": 1, \"messages\": [\"hello\"]})\r\npreserver.save_context(\"wf-1\", {\"step\": 2, \"messages\": [\"hello\", \"world\"]})\r\nrestored = preserver.restore_context(\"wf-1\")\r\nprint(f\"Restored context: {restored}\")\r\nprint(f\"Versions: {preserver.get_versions('wf-1')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-design-patterns",
      children: "7.6 Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-pattern-selection",
      children: "7.6.1 Pattern Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HITLPatternSelector:\r\n    def __init__(self):\r\n        self.patterns = {\r\n            \"approval_gate\": \"Require human approval before executing high-risk actions\",\r\n            \"escalation\": \"Transfer control to human when confidence is low\",\r\n            \"feedback_loop\": \"Collect human feedback to improve agent\",\r\n            \"correction\": \"Allow humans to correct agent outputs\",\r\n            \"interrupt\": \"Allow humans to pause and modify workflows\",\r\n            \"supervision\": \"Human monitors agent and can intervene at any time\",\r\n        }\r\n\r\n    def recommend(self, risk_level: str, autonomy_level: str, task_type: str) -> List[str]:\r\n        recommended = []\r\n\r\n        if risk_level == \"high\":\r\n            recommended.append(\"approval_gate\")\r\n        if autonomy_level == \"low\":\r\n            recommended.append(\"supervision\")\r\n        if task_type == \"creative\" or task_type == \"subjective\":\r\n            recommended.append(\"feedback_loop\")\r\n        if task_type == \"critical\":\r\n            recommended.append(\"escalation\")\r\n        if autonomy_level == \"medium\":\r\n            recommended.append(\"interrupt\")\r\n\r\n        if not recommended:\r\n            recommended.append(\"feedback_loop\")\r\n\r\n        return recommended\r\n\r\nselector = HITLPatternSelector()\r\npatterns = selector.recommend(\"high\", \"medium\", \"critical\")\r\nprint(f\"Recommended patterns: {[p for p in patterns]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "762-hitl-integration",
      children: "7.6.2 HITL Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HITLIntegratedAgent:\r\n    def __init__(self, approval_gate: ApprovalGate, feedback_collector: FeedbackCollector, interrupt: WorkflowInterrupt):\r\n        self.approval = approval_gate\r\n        self.feedback = feedback_collector\r\n        self.interrupt = interrupt\r\n\r\n    def process_with_hitl(self, task: str, risk_level: str = \"low\") -> Dict:\r\n        if risk_level == \"high\":\r\n            rid = self.approval.request_approval(f\"req-{time.time()}\", task, {\"risk\": risk_level})\r\n            status = self.approval.check_status(rid)\r\n            if status != \"approved\":\r\n                return {\"status\": \"blocked\", \"message\": \"Awaiting human approval\"}\r\n\r\n        workflow_id = f\"wf-{time.time()}\"\r\n        state = {\"task\": task, \"progress\": 0}\r\n\r\n        if risk_level == \"medium\":\r\n            self.interrupt.pause(workflow_id, state, \"Human checkpoint\")\r\n            return {\"status\": \"paused\", \"workflow_id\": workflow_id}\r\n\r\n        result = {\"status\": \"completed\", \"result\": f\"Task done: {task}\"}\r\n\r\n        self.feedback.collect(\"agent\", task, str(result), 5)\r\n        return result\r\n\r\nhitl_agent = HITLIntegratedAgent(gate, fc, interrupt)\r\nprint(hitl_agent.process_with_hitl(\"High risk task\", \"high\"))\r\nprint(hitl_agent.process_with_hitl(\"Simple task\", \"low\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human-in-the-loop patterns ensure appropriate human involvement in agent workflows. Approval gates require human authorization for high-risk actions, with multi-step and timeout-based variants. Escalation managers route low-confidence situations to human operators with tiered priority. Feedback collection captures ratings,.\r\ncorrections, and preferences for continuous improvement. Interrupt and resume mechanisms enable pausing workflows while preserving context. The choice of HITL pattern depends on risk level,.\r\nautonomy requirements, and task type. Well-designed HITL integration balances agent autonomy with human oversight."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always gate high-risk actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require human approval for destructive or expensive actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Escalate on low confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route uncertain situations to humans rather than guessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collect feedback continuously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratings and corrections are the best source of improvement data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Save context on interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve full workflow state for seamless resumption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Choose patterns by risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher risk tasks need more human involvement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is human-in-the-loop and why is it important for AI agents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Human-in-the-loop (HITL) is a design pattern where a human participates in the agent's workflow at critical decision points, providing approval, guidance,.\nor correction. It's important because AI agents can make mistakes, act on incomplete information, or encounter situations that require human judgment. HITL prevents costly errors in high-stakes actions (sending emails,.\nmaking payments, deleting data) and provides a safety layer for autonomous systems. It also enables the agent to learn from human feedback. The three main HITL patterns are: approval workflows (human must approve before action),.\nescalation (agent asks for help when uncertain), and feedback collection (human provides improvement suggestions after observing agent actions). Production agent systems should implement all three patterns with appropriate fallbacks when the human is unavailable."
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
      "data-qid": "ag07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you implement an approval workflow in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An approval workflow in LangGraph uses interrupt nodes that pause graph execution before a high-stakes action. The pattern: (1) the agent proposes an action (e.g.,.\n\"send email to user@example.com with subject 'Invoice'\") and stores it in the state; (2) an interrupt node pauses execution and returns the proposed action to the caller;.\n(3) the caller (the application layer) presents the action to a human via a UI notification, email, or dashboard; (4) the human reviews and.\nresponds (approve, reject, or modify); (5) the caller calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resume()"
          }), " with the human's decision; (6) the graph continues — if approved,.\nthe action executes; if rejected, the agent must find an alternative. The interrupt node captures all context needed for the human to make an informed decision,.\nincluding the reasoning behind the proposed action. Timeout handling is also important — if the human doesn't respond within a configurable period,.\na fallback action (like auto-reject) is triggered."]
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
      "data-qid": "ag07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What are escalation paths and how do you design them?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Escalation paths define what an agent should do when it cannot handle a request — due to low confidence, missing capabilities,.\nor policy violations. The path specifies a hierarchy of fallback options: first, try a different approach or tool; second, ask for.\nclarification from the user; third, escalate to a more capable agent; fourth, escalate to a human operator with full context. Design principles: (1) detect escalation triggers proactively — monitor.\nconfidence scores, request complexity, and policy checks; (2) pass full context with the escalation — the human operator should see the conversation history,.\nwhat the agent tried, and why it's escalating; (3) close the loop — after the human resolves the escalation, the agent should learn from the resolution. A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PolicyEnforcer"
          }), " checks actions against defined policies and.\nautomatically escalates policy violations. Escalation timers ensure the human operator responds within SLA — if not, the escalation goes to the next tier."]
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
      "data-qid": "ag07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you collect and use human feedback for agent improvement?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Human feedback collection captures user reactions to agent actions — thumbs up/down, ratings (1-5 stars), explicit corrections, or free-text comments. Feedback is collected after each agent action (tool call,.\nresponse, decision) and stored with the execution context (user query, agent's reasoning, action taken, outcome). Usage patterns: (1) online learning — the agent adjusts its behavior.\nin real-time based on feedback (e.g., \"never use email for this user\" becomes a memory); (2) offline training — collected feedback is used to fine-tune the underlying model or.\noptimize prompts; (3) dashboard monitoring — feedback trends show which actions or topics need improvement. Implementation includes a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FeedbackCollector"
          }), " that attaches to the agent output stream,.\nstores feedback in a database with the execution trace ID, and provides APIs for analysis. Explicit feedback is more valuable but.\nharder to get — design feedback collection to be minimal-friction (single click, inline)."]
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
      "data-qid": "ag07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you implement graceful interruption and resumption?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Graceful interruption and resumption allows a user to pause an agent mid-task and later continue from the same point. Implementation: (1) checkpointing — the agent saves its full state (conversation history,.\nintermediate results, current step) to persistent storage after each action; (2) interruption trigger — the user sends an interrupt signal (e.g.,.\n\"pause\", \"stop\", or via a UI button); (3) save interrupt state — the agent records the interrupt point with a resume token;.\n(4) resume — the user provides the resume token, and the agent loads the checkpoint and continues execution from the saved step. The system handles timeout — if the user doesn't resume within a configurable period,.\na cleanup process archives the checkpoint. In LangGraph, this is built into the checkpointer — the graph state is saved after every node,.\nand you can resume any thread at any time. This pattern is essential for long-running tasks, multi-session conversations, and handling connectivity interruptions."
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
      "data-qid": "ag07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is a policy enforcer and how does it work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A policy enforcer validates every agent action against a set of predefined rules before execution, blocking or flagging violations. Policies are defined as a set of rules with: (1) conditions — what triggers the rule (e.g.,.\naction type equals \"send_email\" AND recipient domain is external); (2) action — what to do when triggered (block, flag for review,.\nrequire escalation); (3) severity — low (log), medium (flag), high (block). The enforcer sits between the agent's decision and the tool execution — it checks each proposed action,.\nevaluates all rules, and returns a verdict (allow, deny, flag). Implementation uses a rules engine where each rule is a function that receives the proposed action and.\ncontext, returning a policy verdict. Policies are loaded from configuration, enabling changes without code deployment. Critical for production agents that interact with external systems — prevents data leaks,.\nunauthorized actions, and policy violations."
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
      "data-qid": "ag07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What strategies help reduce human intervention frequency?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reducing human intervention frequency makes agents more autonomous while maintaining safety. Strategies: (1) confidence-based thresholds — set a minimum confidence score;.\nactions above the threshold proceed automatically, below require human approval; (2) action categorization — low-risk actions (search, read) are fully automatic,.\nmedium-risk (create draft) are auto-approved but flagged, high-risk (send, delete) require explicit approval; (3) learning from past approvals — if the human has approved similar actions multiple times,.\nthe agent gains permission to auto-approve within those patterns; (4) batch approvals — show multiple pending actions in a single dashboard view rather than one-by-one notifications;.\n(5) progressive autonomy — as the agent builds a track record of correct decisions, its autonomy level increases. The autonomy level is tracked per-agent and.\nper-task-type, providing granular control. Monitoring tracks intervention rate over time — decreasing trend indicates the agent is improving."
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
      "data-qid": "ag07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you design feedback-driven learning for agents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Feedback-driven learning uses human feedback to continuously improve agent performance. The learning loop: (1) the agent performs an action and logs it with context;.\n(2) the human provides feedback (approve, correct, rate) which is stored with the action; (3) a feedback processor analyzes patterns — if the agent consistently makes the same type of error,.\nit generates a correction rule (e.g., \"when user asks for X, always use tool Y instead of Z\"); (4) correction rules are stored in a rule library that the agent checks before executing actions;.\n(5) the agent also updates its long-term memory with user preferences inferred from feedback (e.g., \"user prefers concise responses\"). Implementation uses a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FeedbackProcessor"
          }), " that runs on a schedule,.\nanalyzes unprocessed feedback batches, and generates rule updates. This pattern enables continuous improvement without model retraining — the agent gets smarter with every human interaction by building a personalized knowledge base for.\neach user."]
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
      "data-qid": "ag07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is a policy verdict and how is it structured?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A policy verdict is the result of evaluating an action against all policy rules. It typically includes: (1) decision — allow,.\ndeny, flag, or escalate; (2) matched rules — which rules triggered and their severity; (3) explanation — human-readable reason for the decision;.\n(4) suggested actions — for deny/flag verdicts, suggestions for how to modify the action to be compliant. The verdict is generated by a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PolicyEngine"
          }), " that iterates through all active rules,.\nevaluates each against the proposed action, and applies the highest-severity result (deny overrides flag, flag overrides allow). The verdict is returned to the agent,.\nwhich must handle it appropriately — if denied, the agent must modify its plan; if flagged, it continues but the action is logged for.\nreview; if escalated, it triggers the escalation path. Verdict metadata is logged for audit trails and policy effectiveness analysis."]
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
      "data-qid": "ag07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are autonomous levels for agents with HITL?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Autonomous levels define how much independence an agent has in different contexts. A typical levels framework: Level 0 (Manual) — every action requires human approval;.\nLevel 1 (Assisted) — low-risk actions auto-approved, high-risk requires approval; Level 2 (Semi-autonomous) — most actions auto-approved, only novel or high-risk actions need approval;.\nLevel 3 (Conditionally autonomous) — the agent operates independently within defined boundaries, escalating only when out of scope; Level 4 (Fully autonomous) — no human involvement,.\nthe agent handles everything autonomously. Each level has different requirements for logging, monitoring, and fallback procedures. The level can be set per user,.\nper task type, or per domain — a research agent might have Level 3 for search tasks but Level 1 for.\nwrite tasks. Autonomous levels are stored in user configuration and reviewed periodically based on agent performance metrics (error rate, feedback score,.\nescalation frequency)."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s7-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " When should an agent request human approval?"]
      }), "\nA. For every action\nB. For high-risk actions or low-confidence decisions\nC. Never\nD. Only at the end of a workflow\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s7-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What happens during escalation in HITL?"]
      }), "\nA. The agent works faster\nB. Control is transferred to a human operator\nC. The task is deleted\nD. The agent retries automatically\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s7-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Why is context preservation important when interrupting a workflow?"]
      }), "\nA. It saves storage space\nB. It enables seamless resumption from the same state\nC. It speeds up the agent\nD. It reduces human workload\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s7-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the primary purpose of collecting human feedback?"]
      }), "\nA. To store data\nB. To improve agent performance through learning from corrections\nC. To track user identity\nD. To bill customers\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s7-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which factor MOST influences which HITL pattern to use?"]
      }), "\nA. Programming language\nB. Risk level of the task\nC. Agent name\nD. Time of day\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement an approval workflow with three levels: automatic (confidence > 0.8), requires one approver (0.5-0.8), requires two approvers (< 0.5). Simulate requests at each level."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an escalation handler that detects when agent confidence drops below 0.4, captures the full context, and routes to a human operator. Show the escalation data structure."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a feedback collection system that captures ratings (1-5), text corrections, and preference changes. Aggregate feedback across 10 interactions and generate improvement suggestions."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an interrupt/resume mechanism for a multi-step workflow. Save state after each step, pause at step 3, modify the state, resume, and verify continuity."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a HITL pattern recommendation system that takes task risk, autonomy preference, and task type as input and recommends specific patterns with confi"
        }), "\n"]
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
            children: "Explain the core idea of Human-in-the-Loop in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Human-in-the-Loop."
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
            children: "Describe a production bug caused by misunderstanding Human-in-the-Loop. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Human-in-the-Loop from 10 users to 10 million?"
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
            children: "Compare Human-in-the-Loop with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Human-in-the-Loop."
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
            children: "How does Human-in-the-Loop behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Human-in-the-Loop run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Human-in-the-Loop that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Human-in-the-Loop explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Human-in-the-Loop\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Human-in-the-Loop to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Human-in-the-Loop (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Human-in-the-Loop and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Human-in-the-Loop-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Human-in-the-Loop interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Human-in-the-Loop in production today?"
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
        }), " Human-in-the-Loop builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Human-in-the-Loop before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Human-in-the-Loop is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Human-in-the-Loop in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Human-in-the-Loop chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Human-in-the-Loop is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 Human In The Loop is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Human In The Loop is ___. — Answer: disconnected graph, cycles, negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Human-in-the-Loop issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Human-in-the-Loop in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Human-in-the-Loop that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Human-in-the-Loop is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Human-in-the-Loop in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Human-in-the-Loop and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Human-in-the-Loop on an empty input?"
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
            children: "Complete Medium exercises, explain Human-in-the-Loop to someone else"
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
        children: "Always write a one-line example of Human-in-the-Loop from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Human-in-the-Loop when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Human-in-the-Loop twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Human-in-the-Loop snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Human-in-the-Loop listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Human-in-the-Loop to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Human-in-the-Loop by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Human-in-the-Loop to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yao et al. (2022) 'ReAct: Synergizing Reasoning and Acting in Language Models' — the foundational ReAct paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shinn et al. (2023) 'Reflexion: Language Agents with Verbal Reinforcement Learning'"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangGraph documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://langchain-ai.github.io/langgraph",
          children: "https://langchain-ai.github.io/langgraph"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI function calling guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs/guides/function-calling",
          children: "https://platform.openai.com/docs/guides/function-calling"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 13 — builds the foundation for 07 Human In The Loop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Human In The Loop with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Human In The Loop fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Human In The Loop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Human In The Loop"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Human In The Loop?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Human In The Loop?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Human In The Loop asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Human In The Loop?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-in-the-Loop is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Human-in-the-Loop."
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["07 Human In The Loop evolved from academic research into production engineering practice over the last decade — knowing this history helps you explain ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " it works in interviews."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used today (transformers, vector databases, containerization) replaced earlier approaches that failed at scale — understanding the failures makes the solutions intuitive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The field moves fast: what was cutting-edge in 2022 is now table stakes in 2025 — focus on fundamentals that remain stable across tool generations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Interviewers value historical context because it shows you understand ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " a technique exists, not just ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how"
        }), " to use it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all tool inputs with JSON Schema before execution — LLMs can generate malformed arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tool-level permissions — agents should not have access to destructive operations (DELETE, DROP TABLE) without human approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log every tool call with inputs and outputs for audit trails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use sandboxed execution environments for code-running agents (Docker containers, E2B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement prompt injection defenses — malicious tool outputs can hijack agent behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent loop is a form of test-time compute scaling — more steps = more reasoning capacity at inference time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool selection is a classification problem: the LLM assigns probability to each tool given the current context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory compression (summarizing old steps) is analogous to attention truncation in transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent success rate improves with better system prompts — treat the system prompt as a hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent systems parallelize reasoning the same way distributed computing parallelizes computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "07 Human In The Loop is like a GPS navigation system"
        }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a restaurant kitchen"
        }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like stress tests"
        }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a subway map"
        }), ": each section is a station, and skipping one means you miss the connection to the next destination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Human-in-the-Loop skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-07humanintheloop-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Human-in-the-Loop in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-07humanintheloop-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-07humanintheloop-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Human-in-the-Loop approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-07humanintheloop-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Human-in-the-Loop NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-07humanintheloop-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Human-in-the-Loop applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Human-in-the-Loop (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Human-in-the-Loop (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Human-in-the-Loop-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Human-in-the-Loop in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph"
        }), " — stateful multi-step agent framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain AgentExecutor"
        }), " — ReAct agent implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Assistants API"
        }), " — managed agent with code interpreter and file search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangSmith"
        }), " — agent tracing, debugging, and evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic tool use"
        }), " — Claude's native function calling interface"]
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
        }), ": Add structured logging at each stage of the 07 Human In The Loop pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Human-in-the-Loop in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Human-in-the-Loop."
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
        children: "Tell me about a time you debugged a Human-in-the-Loop problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Human-in-the-Loop is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_human_in_the_loop(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Human In The Loop.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Human In The Loop here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Human-in-the-Loop without notes"
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
          children: "Devin"
        }), " (Cognition AI) uses a coding agent that writes, runs, and debugs code autonomously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor"
        }), " uses agents to refactor entire codebases based on natural language instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Salesforce Einstein"
        }), " uses agents to autonomously update CRM records and draft emails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harvey AI"
        }), " uses legal agents that research case law, draft contracts, and flag risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the ReAct loop (Thought → Action → Observation) and explain how you'd add observability with LangSmith traces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/08-agent-observability",
        children: "Agent Observability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-in-the-Loop, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Human-in-the-Loop depends on input size and distribution — always benchmark for your own data."
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