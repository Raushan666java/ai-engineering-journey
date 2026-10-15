"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5779],{

/***/ 54945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_26_ai_product_thinking_02_ux_for_ai_md_b8b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-26-ai-product-thinking-02-ux-for-ai-md-b8b.json
const site_docs_courses_ai_engineering_placement_26_ai_product_thinking_02_ux_for_ai_md_b8b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-product-thinking/02-ux-for-ai","title":"User Experience for AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai.md","sourceDirName":"courses/ai-engineering-placement/26-ai-product-thinking","slug":"/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":317,"frontMatter":{"id":"02-ux-for-ai","slug":"/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","title":"User Experience for AI","sidebar_label":"User Experience for AI","sidebar_position":317},"sidebar":"placementSidebar","previous":{"title":"01 — AI Product Strategy","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/01-ai-product-strategy"},"next":{"title":"03 — Experiment Design & Metrics for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai.md


const frontMatter = {
	id: '02-ux-for-ai',
	slug: '/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai',
	title: 'User Experience for AI',
	sidebar_label: 'User Experience for AI',
	sidebar_position: 317
};
const contentTitle = 'User Experience for AI';

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
  "value": "1.1 Interaction Design for AI",
  "id": "11-interaction-design-for-ai",
  "level": 2
}, {
  "value": "1.1.1 Input Modalities",
  "id": "111-input-modalities",
  "level": 3
}, {
  "value": "1.1.2 Conversational UI Design",
  "id": "112-conversational-ui-design",
  "level": 3
}, {
  "value": "1.1.3 Uncertainty Communication",
  "id": "113-uncertainty-communication",
  "level": 3
}, {
  "value": "1.2 Trust Calibration",
  "id": "12-trust-calibration",
  "level": 2
}, {
  "value": "1.2.1 The Trust Spectrum",
  "id": "121-the-trust-spectrum",
  "level": 3
}, {
  "value": "1.2.2 Transparency and Explainability",
  "id": "122-transparency-and-explainability",
  "level": 3
}, {
  "value": "1.2.3 Calibration UI Patterns",
  "id": "123-calibration-ui-patterns",
  "level": 3
}, {
  "value": "1.3 Feedback Loops",
  "id": "13-feedback-loops",
  "level": 2
}, {
  "value": "1.3.1 Implicit and Explicit Feedback",
  "id": "131-implicit-and-explicit-feedback",
  "level": 3
}, {
  "value": "1.3.2 Preference Learning",
  "id": "132-preference-learning",
  "level": 3
}, {
  "value": "1.3.3 Reinforcement Learning from Human Feedback (RLHF)",
  "id": "133-reinforcement-learning-from-human-feedback-rlhf",
  "level": 3
}, {
  "value": "1.4 Handling AI Errors",
  "id": "14-handling-ai-errors",
  "level": 2
}, {
  "value": "1.4.1 Graceful Degradation",
  "id": "141-graceful-degradation",
  "level": 3
}, {
  "value": "1.4.2 Confidence Thresholds and Human-in-the-Loop",
  "id": "142-confidence-thresholds-and-human-in-the-loop",
  "level": 3
}, {
  "value": "1.4.3 Error Messaging for AI Systems",
  "id": "143-error-messaging-for-ai-systems",
  "level": 3
}, {
  "value": "1.5 Designing for Different AI Modes",
  "id": "15-designing-for-different-ai-modes",
  "level": 2
}, {
  "value": "1.5.1 Streaming Responses",
  "id": "151-streaming-responses",
  "level": 3
}, {
  "value": "1.5.2 Batch Processing",
  "id": "152-batch-processing",
  "level": 3
}, {
  "value": "1.5.3 Real-Time and Background Processing",
  "id": "153-real-time-and-background-processing",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is trust calibration in AI UX and why is it important?",
  "id": "q1-what-is-trust-calibration-in-ai-ux-and-why-is-it-important",
  "level": 3
}, {
  "value": "Q2: How do you design a conversational UI for an AI assistant?",
  "id": "q2-how-do-you-design-a-conversational-ui-for-an-ai-assistant",
  "level": 3
}, {
  "value": "Q3: What is the difference between implicit and explicit feedback?",
  "id": "q3-what-is-the-difference-between-implicit-and-explicit-feedback",
  "level": 3
}, {
  "value": "Q4: Explain graceful degradation in AI systems.",
  "id": "q4-explain-graceful-degradation-in-ai-systems",
  "level": 3
}, {
  "value": "Q5: How do confidence thresholds work in human-in-the-loop systems?",
  "id": "q5-how-do-confidence-thresholds-work-in-human-in-the-loop-systems",
  "level": 3
}, {
  "value": "Q6: What UX patterns work best for streaming AI responses?",
  "id": "q6-what-ux-patterns-work-best-for-streaming-ai-responses",
  "level": 3
}, {
  "value": "Q7: How do you communicate AI uncertainty to non-technical users?",
  "id": "q7-how-do-you-communicate-ai-uncertainty-to-non-technical-users",
  "level": 3
}, {
  "value": "Q8: What is preference learning in the context of AI UX?",
  "id": "q8-what-is-preference-learning-in-the-context-of-ai-ux",
  "level": 3
}, {
  "value": "Q9: How should you handle batch AI processing in the UI?",
  "id": "q9-how-should-you-handle-batch-ai-processing-in-the-ui",
  "level": 3
}, {
  "value": "Q10: What metrics measure AI UX quality?",
  "id": "q10-what-metrics-measure-ai-ux-quality",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "MCQ 1",
  "id": "mcq-1",
  "level": 3
}, {
  "value": "MCQ 2",
  "id": "mcq-2",
  "level": 3
}, {
  "value": "MCQ 3",
  "id": "mcq-3",
  "level": 3
}, {
  "value": "MCQ 4",
  "id": "mcq-4",
  "level": 3
}, {
  "value": "MCQ 5",
  "id": "mcq-5",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Build a Confidence-Aware Chat UI",
  "id": "exercise-1-build-a-confidence-aware-chat-ui",
  "level": 3
}, {
  "value": "Exercise 2: Implement Graceful Degradation",
  "id": "exercise-2-implement-graceful-degradation",
  "level": 3
}, {
  "value": "Exercise 3: Design a Feedback Collection Pipeline",
  "id": "exercise-3-design-a-feedback-collection-pipeline",
  "level": 3
}, {
  "value": "Exercise 4: Implement Preference Ranking",
  "id": "exercise-4-implement-preference-ranking",
  "level": 3
}, {
  "value": "Exercise 5: Build a Multi-Modal Input Fusion System",
  "id": "exercise-5-build-a-multi-modal-input-fusion-system",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    code: "code",
    details: "details",
    div: "div",
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
        id: "user-experience-for-ai",
        children: "User Experience for AI"
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
            children: "Design interaction patterns for AI-powered interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calibrate user trust through transparency and explainability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build feedback loops that improve model behavior over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement graceful error handling with human-in-the-loop fallbacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design interfaces for streaming, batch, real-time, and background AI modes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI products fail when users do not trust them or cannot understand them. Great UX bridges the gap between model capability and human expectation. This chapter teaches you to design interfaces that make AI feel helpful, transparent, and reliable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of LLM APIs and model inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with REST API design patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experience with frontend-backend integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding user experience for AI is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how UX for AI works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interaction Design for AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input methods, multi-modal, conversational UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust Calibration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency, explainability, appropriate trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit/explicit feedback, RLHF, preference learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handling AI Errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful degradation, fallback, confidence thresholds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designing for AI Modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming, batch, real-time, background processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph Input[User Input Layer]\r\n        A[Text] --> E\r\n        B[Voice] --> E\r\n        C[Image] --> E\r\n        D[Gesture] --> E\r\n        E[Multi-modal Fusion]\r\n    end\r\n    subgraph Trust[Trust Layer]\r\n        F[Confidence Display] --> G[Explanation]\r\n        G --> H[Uncertainty Communication]\r\n    end\r\n    subgraph Feedback[Feedback Layer]\r\n        I[Implicit Signals] --> K[Preference Store]\r\n        J[Explicit Ratings] --> K\r\n        K --> L[Model Update]\r\n    end\r\n    subgraph Error[Error Handling]\r\n        M{Confidence > Threshold?}\r\n        M -->|Yes| N[Show Result]\r\n        M -->|No| O[Graceful Fallback]\r\n        O --> P[Human-in-the-loop]\r\n    end\r\n    Input --> Trust --> M --> Feedback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-interaction-design-for-ai",
      children: "1.1 Interaction Design for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-input-modalities",
      children: "1.1.1 Input Modalities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI products accept input through multiple channels. Users expect to interact via text, voice, images, and gestures. Each modality has trade-offs in accuracy, latency, and user effort."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Any\r\nfrom enum import Enum\r\nimport time\r\nimport json\r\n\r\nclass InputModality(Enum):\r\n    TEXT = \"text\"\r\n    VOICE = \"voice\"\r\n    IMAGE = \"image\"\r\n    DOCUMENT = \"document\"\r\n    GESTURE = \"gesture\"\r\n\r\n@dataclass\r\nclass UserInput:\r\n    content: Any\r\n    modality: InputModality\r\n    timestamp: float = field(default_factory=time.time)\r\n    metadata: Dict[str, Any] = field(default_factory=dict)\r\n\r\nclass MultiModalFusion:\r\n    \"\"\"Combines inputs from multiple modalities into a unified intent.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.modality_weight: Dict[InputModality, float] = {\r\n            InputModality.TEXT: 1.0,\r\n            InputModality.VOICE: 0.8,\r\n            InputModality.IMAGE: 0.7,\r\n            InputModality.DOCUMENT: 0.9,\r\n            InputModality.GESTURE: 0.4,\r\n        }\r\n\r\n    def fuse(self, inputs: List[UserInput]) -> Dict[str, Any]:\r\n        \"\"\"Merge multiple inputs into a single interpretation.\"\"\"\r\n        if not inputs:\r\n            return {\"intent\": None, \"confidence\": 0.0}\r\n\r\n        interpretations = []\r\n        for inp in inputs:\r\n            score = self.modality_weight.get(inp.modality, 0.5)\r\n            interpretations.append({\r\n                \"source\": inp.modality.value,\r\n                \"content\": inp.content,\r\n                \"weight\": score,\r\n            })\r\n\r\n        best = max(interpretations, key=lambda x: x[\"weight\"])\r\n        return {\r\n            \"intent\": best[\"content\"],\r\n            \"confidence\": best[\"weight\"],\r\n            \"all_inputs\": interpretations,\r\n        }\r\n\r\n    def detect_conflict(self, inputs: List[UserInput]) -> Optional[str]:\r\n        \"\"\"Check if different modalities contradict each other.\"\"\"\r\n        texts = [str(inp.content).lower() for inp in inputs]\r\n        unique_texts = set(texts)\r\n        if len(unique_texts) > 1:\r\n            return f\"Conflict detected across {len(unique_texts)} interpretations\"\r\n        return None\r\n\r\nfusion = MultiModalFusion()\r\ntest_inputs = [\r\n    UserInput(content=\"Show me sales data\", modality=InputModality.TEXT),\r\n    UserInput(content=\"display quarterly report\", modality=InputModality.VOICE),\r\n]\r\nresult = fusion.fuse(test_inputs)\r\nprint(f\"Fused intent: {result['intent']}\")\r\nprint(f\"Confidence: {result['confidence']}\")\r\nconflict = fusion.detect_conflict(test_inputs)\r\nprint(f\"Conflict: {conflict}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-conversational-ui-design",
      children: "1.1.2 Conversational UI Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conversational interfaces differ from traditional GUIs. Users cannot see available options. The system must guide the conversation, handle ambiguities, and recover from misunderstandings gracefully."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Optional\r\nfrom enum import Enum\r\n\r\nclass DialogState(Enum):\r\n    GREETING = \"greeting\"\r\n    COLLECTING_INPUT = \"collecting_input\"\r\n    CLARIFYING = \"clarifying\"\r\n    PROCESSING = \"processing\"\r\n    CONFIRMING = \"confirming\"\r\n    COMPLETE = \"complete\"\r\n    ERROR = \"error\"\r\n\r\n@dataclass\r\nclass ConversationTurn:\r\n    user_message: str\r\n    assistant_message: str\r\n    state: DialogState\r\n    confidence: float = 1.0\r\n\r\nclass ConversationalAgent:\r\n    \"\"\"Manages multi-turn dialogue with clarification loops.\"\"\"\r\n\r\n    def __init__(self, system_prompt: str):\r\n        self.system_prompt = system_prompt\r\n        self.history: List[ConversationTurn] = []\r\n        self.current_state: DialogState = DialogState.GREETING\r\n        self.slots: dict = {}\r\n\r\n    def process_input(self, user_input: str, confidence: float) -> str:\r\n        \"\"\"Process user input and generate appropriate response.\"\"\"\r\n        self.current_state = DialogState.COLLECTING_INPUT\r\n\r\n        if confidence < 0.6:\r\n            return self._request_clarification(user_input)\r\n\r\n        if self._needs_confirmation(user_input):\r\n            self.current_state = DialogState.CONFIRMING\r\n            return self._generate_confirmation(user_input)\r\n\r\n        response = self._execute_intent(user_input)\r\n        self.current_state = DialogState.COMPLETE\r\n        self.history.append(\r\n            ConversationTurn(user_input, response, self.current_state, confidence)\r\n        )\r\n        return response\r\n\r\n    def _request_clarification(self, user_input: str) -> str:\r\n        \"\"\"Ask user to rephrase when confidence is low.\"\"\"\r\n        self.current_state = DialogState.CLARIFYING\r\n        return (\r\n            f\"I'm not sure I understood. Did you mean:\\n\"\r\n            f\"1. {user_input} (as typed)\\n\"\r\n            f\"2. Something else?\\n\"\r\n            f\"Please rephrase.\"\r\n        )\r\n\r\n    def _needs_confirmation(self, user_input: str) -> bool:\r\n        \"\"\"Check if the input is ambiguous.\"\"\"\r\n        ambiguous_phrases = [\"it\", \"that\", \"this\", \"there\", \"the one\"]\r\n        words = user_input.lower().split()\r\n        return any(phrase in words for phrase in ambiguous_phrases)\r\n\r\n    def _generate_confirmation(self, user_input: str) -> str:\r\n        \"\"\"Ask user to confirm interpretation.\"\"\"\r\n        return f\"Just to confirm: you mean '{user_input}'? (yes/no)\"\r\n\r\n    def _execute_intent(self, user_input: str) -> str:\r\n        \"\"\"Execute the understood intent.\"\"\"\r\n        return f\"Processing: {user_input}. Results will appear shortly.\"\r\n\r\nagent = ConversationalAgent(\"You are a helpful data assistant.\")\r\nprint(agent.process_input(\"Show dashboard\", 0.95))\r\nprint(agent.process_input(\"Show that\", 0.85))\r\nprint(agent.process_input(\"blah blah\", 0.30))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-uncertainty-communication",
      children: "1.1.3 Uncertainty Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems should communicate uncertainty. Users trust systems that admit when they are unsure. Display confidence scores, alternative interpretations, or request clarification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\nfrom typing import List, Dict, Any\r\n\r\nclass UncertaintyCommunicator:\r\n    \"\"\"Translates model confidence into user-facing messages.\"\"\"\r\n\r\n    def __init__(self, high_threshold: float = 0.9,\r\n                 medium_threshold: float = 0.7):\r\n        self.high_threshold = high_threshold\r\n        self.medium_threshold = medium_threshold\r\n\r\n    def get_confidence_label(self, score: float) -> str:\r\n        \"\"\"Map numeric confidence to human-readable label.\"\"\"\r\n        if score >= self.high_threshold:\r\n            return \"High confidence\"\r\n        elif score >= self.medium_threshold:\r\n            return \"Medium confidence\"\r\n        else:\r\n            return \"Low confidence\"\r\n\r\n    def get_user_message(self, score: float, prediction: str,\r\n                          alternatives: List[str] = None) -> str:\r\n        \"\"\"Generate user-facing message based on confidence.\"\"\"\r\n        label = self.get_confidence_label(score)\r\n\r\n        if score >= self.high_threshold:\r\n            return f\"I am confident this is {prediction}.\"\r\n\r\n        elif score >= self.medium_threshold:\r\n            alt_text = \"\"\r\n            if alternatives:\r\n                alt_text = f\" Could also be: {', '.join(alternatives[:2])}.\"\r\n            return (\r\n                f\"I think this is {prediction}, but I'm not certain.{alt_text} \"\r\n                f\"Please verify.\"\r\n            )\r\n\r\n        else:\r\n            return (\r\n                f\"I'm unsure about this. My best guess is {prediction}, \"\r\n                f\"but confidence is low. Please review manually.\"\r\n            )\r\n\r\n    def calibrate_display(self, score: float) -> Dict[str, Any]:\r\n        \"\"\"Generate visual calibration data for frontend.\"\"\"\r\n        color = (\r\n            \"#22c55e\" if score >= self.high_threshold\r\n            else \"#eab308\" if score >= self.medium_threshold\r\n            else \"#ef4444\"\r\n        )\r\n        bar_width = int(score * 100)\r\n        return {\r\n            \"color\": color,\r\n            \"bar_width_percent\": bar_width,\r\n            \"label\": self.get_confidence_label(score),\r\n            \"show_warning\": score < self.medium_threshold,\r\n        }\r\n\r\ncomm = UncertaintyCommunicator()\r\nfor confidence in [0.95, 0.78, 0.45]:\r\n    display = comm.calibrate_display(confidence)\r\n    message = comm.get_user_message(\r\n        confidence, \"fraudulent transaction\",\r\n        [\"legitimate transaction\", \"flagged for review\"]\r\n    )\r\n    print(f\"Conf: {confidence:.2f} | Color: {display['color']} | Msg: {message}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-trust-calibration",
      children: "1.2 Trust Calibration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-the-trust-spectrum",
      children: "1.2.1 The Trust Spectrum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users exhibit three trust states: undertrust (ignore correct AI), appropriate trust (rely when correct, override when wrong), and overtrust (follow AI blindly into errors). The goal is to calibrate trust to match actual model capability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph Undertrust[Undertrust]\r\n        A1[AI is correct] --> A2[User ignores]\r\n        A2 --> A3[User outcome worsens]\r\n    end\r\n    subgraph Appropriate[Appropriate Trust]\r\n        B1[AI is correct] --> B2[User accepts]\r\n        B1 --> B3[AI is wrong]\r\n        B3 --> B4[User overrides]\r\n    end\r\n    subgraph Overtrust[Overtrust]\r\n        C1[AI is wrong] --> C2[User accepts blindly]\r\n        C2 --> C3[User outcome worsens]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import List, Tuple\r\n\r\n@dataclass\r\nclass TrustCalibrationResult:\r\n    trust_state: str  # undertrust | appropriate | overtrust\r\n    accuracy: float\r\n    user_follow_rate: float\r\n    gap_score: float  # difference between trust and capability\r\n\r\nclass TrustCalibrator:\r\n    \"\"\"Measures and calibrates user trust against model capability.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.interactions: List[Tuple[bool, bool]] = []\r\n        \"\"\"List of (model_was_correct, user_followed_advice)\"\"\"\r\n\r\n    def record_interaction(self, model_correct: bool,\r\n                           user_followed: bool) -> None:\r\n        \"\"\"Log a single user-AI interaction.\"\"\"\r\n        self.interactions.append((model_correct, user_followed))\r\n\r\n    def analyze_trust(self) -> TrustCalibrationResult:\r\n        \"\"\"Analyze trust patterns from interaction history.\"\"\"\r\n        if not self.interactions:\r\n            return TrustCalibrationResult(\"unknown\", 0, 0, 0)\r\n\r\n        total = len(self.interactions)\r\n        correct = sum(1 for c, _ in self.interactions if c)\r\n        followed = sum(1 for _, f in self.interactions if f)\r\n\r\n        accuracy = correct / total\r\n        follow_rate = followed / total\r\n        gap_score = follow_rate - accuracy\r\n\r\n        if gap_score < -0.2:\r\n            trust_state = \"undertrust\"\r\n        elif gap_score > 0.2:\r\n            trust_state = \"overtrust\"\r\n        else:\r\n            trust_state = \"appropriate\"\r\n\r\n        return TrustCalibrationResult(trust_state, accuracy,\r\n                                       follow_rate, gap_score)\r\n\r\n    def generate_recommendation(self) -> str:\r\n        \"\"\"Generate UX recommendation based on trust analysis.\"\"\"\r\n        result = self.analyze_trust()\r\n\r\n        if result.trust_state == \"undertrust\":\r\n            return (\r\n                \"Show accuracy metrics and success stories. \"\r\n                \"Use smoother animations to build confidence.\"\r\n            )\r\n        elif result.trust_state == \"overtrust\":\r\n            return (\r\n                \"Increase friction on low-confidence outputs. \"\r\n                \"Show uncertainty indicators prominently.\"\r\n            )\r\n        else:\r\n            return \"Trust is well-calibrated. Maintain current UX.\"\r\n\r\ncalibrator = TrustCalibrator()\r\n# Simulate interactions: (model_correct, user_followed)\r\nsimulated = [(True, True), (True, True), (False, True),\r\n             (True, False), (True, True), (False, False)]\r\nfor c, f in simulated:\r\n    calibrator.record_interaction(c, f)\r\n\r\nresult = calibrator.analyze_trust()\r\nprint(f\"Trust state: {result.trust_state}\")\r\nprint(f\"Accuracy: {result.accuracy:.2f}\")\r\nprint(f\"Follow rate: {result.follow_rate:.2f}\")\r\nprint(f\"Gap: {result.gap_score:.2f}\")\r\nprint(f\"Recommendation: {calibrator.generate_recommendation()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-transparency-and-explainability",
      children: "1.2.2 Transparency and Explainability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users trust what they understand. Every AI output should include context about how the system arrived at the result. Transparency mechanisms include feature attribution, example-based explanations, and confidence regions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional\r\n\r\n@dataclass\r\nclass Explanation:\r\n    prediction: str\r\n    confidence: float\r\n    top_factors: List[Dict[str, float]]\r\n    similar_examples: List[str] = field(default_factory=list)\r\n    limitations: List[str] = field(default_factory=list)\r\n\r\nclass ExplainableAI:\r\n    \"\"\"Generates human-readable explanations for model outputs.\"\"\"\r\n\r\n    def __init__(self, feature_names: List[str]):\r\n        self.feature_names = feature_names\r\n\r\n    def explain_prediction(self, features: List[float],\r\n                           prediction: str,\r\n                           confidence: float) -> Explanation:\r\n        \"\"\"Generate explanation with top contributing factors.\"\"\"\r\n        contributions = list(zip(self.feature_names, features))\r\n        contributions.sort(key=lambda x: abs(x[1]), reverse=True)\r\n        top = [\r\n            {\"feature\": name, \"importance\": round(val, 3)}\r\n            for name, val in contributions[:3]\r\n        ]\r\n\r\n        limitations = self._get_limitations(confidence, features)\r\n\r\n        return Explanation(\r\n            prediction=prediction,\r\n            confidence=confidence,\r\n            top_factors=top,\r\n            similar_examples=self._find_examples(features),\r\n            limitations=limitations,\r\n        )\r\n\r\n    def _get_limitations(self, confidence: float,\r\n                          features: List[float]) -> List[str]:\r\n        \"\"\"Identify limitations of the current prediction.\"\"\"\r\n        limits = []\r\n        if confidence < 0.7:\r\n            limits.append(\"Low confidence: prediction may be unreliable\")\r\n        if max(features) < 0.3:\r\n            limits.append(\"No strong signal detected in input features\")\r\n        return limits\r\n\r\n    def _find_examples(self, features: List[float]) -> List[str]:\r\n        \"\"\"Retrieve similar examples from a reference set.\"\"\"\r\n        return [\r\n            \"Example A: similar pattern, correct prediction\",\r\n            \"Example B: similar pattern, review recommended\",\r\n        ]\r\n\r\n    def format_for_user(self, explanation: Explanation) -> str:\r\n        \"\"\"Format explanation for display in UI.\"\"\"\r\n        factors = \"\\n\".join(\r\n            f\"  - {f['feature']}: {f['importance']:.3f}\"\r\n            for f in explanation.top_factors\r\n        )\r\n        limits = \"\"\r\n        if explanation.limitations:\r\n            limits = \"\\nLimitations:\\n\" + \"\\n\".join(\r\n                f\"  - {l}\" for l in explanation.limitations\r\n            )\r\n        return (\r\n            f\"Prediction: {explanation.prediction}\\n\"\r\n            f\"Confidence: {explanation.confidence:.0%}\\n\"\r\n            f\"Top factors:\\n{factors}{limits}\"\r\n        )\r\n\r\nxai = ExplainableAI([\"amount\", \"frequency\", \"location\", \"device_score\"])\r\nfeatures = [0.85, 0.12, 0.67, 0.93]\r\nexplanation = xai.explain_prediction(features, \"Fraud Likely\", 0.88)\r\nprint(xai.format_for_user(explanation))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-calibration-ui-patterns",
      children: "1.2.3 Calibration UI Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different UI patterns communicate different trust levels. Use color, iconography, and placement to signal confidence without overwhelming users."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass TrustSignal:\r\n    \"\"\"Configuration for trust-related UI signals.\"\"\"\r\n    show_confidence_badge: bool = True\r\n    show_explanation_button: bool = True\r\n    show_alternative_options: bool = False\r\n    require_confirmation: bool = False\r\n    show_uncertainty_range: bool = False\r\n\r\ndef get_trust_ui_config(confidence: float,\r\n                         domain_risk: str = \"low\") -> TrustSignal:\r\n    \"\"\"Dynamically configure UI elements based on confidence and risk.\"\"\"\r\n    config = TrustSignal()\r\n\r\n    if confidence >= 0.95:\r\n        config.show_confidence_badge = True\r\n        config.show_explanation_button = True\r\n        config.show_alternative_options = False\r\n        config.require_confirmation = False\r\n\r\n    elif confidence >= 0.80:\r\n        config.show_confidence_badge = True\r\n        config.show_explanation_button = True\r\n        config.show_alternative_options = True\r\n        config.show_uncertainty_range = True\r\n\r\n    elif confidence >= 0.60:\r\n        config.show_confidence_badge = True\r\n        config.show_explanation_button = True\r\n        config.show_alternative_options = True\r\n        config.show_uncertainty_range = True\r\n        config.require_confirmation = (domain_risk == \"high\")\r\n\r\n    else:\r\n        config.show_confidence_badge = True\r\n        config.show_explanation_button = True\r\n        config.show_alternative_options = True\r\n        config.require_confirmation = True\r\n        config.show_uncertainty_range = True\r\n\r\n    return config\r\n\r\nfor conf, risk in [(0.97, \"low\"), (0.85, \"medium\"), (0.55, \"high\")]:\r\n    cfg = get_trust_ui_config(conf, risk)\r\n    print(f\"\\nConf={conf:.2f}, Risk={risk}:\")\r\n    print(f\"  Badge={cfg.show_confidence_badge}, \"\r\n          f\"Explain={cfg.show_explanation_button}, \"\r\n          f\"Confirm={cfg.require_confirmation}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-feedback-loops",
      children: "1.3 Feedback Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-implicit-and-explicit-feedback",
      children: "1.3.1 Implicit and Explicit Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feedback powers AI improvement. Explicit feedback (thumbs up/down, ratings) is direct but sparse. Implicit feedback (time spent, scroll depth, retention) is abundant but noisy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional\r\nfrom enum import Enum\r\nimport time\r\nimport statistics\r\n\r\nclass FeedbackType(Enum):\r\n    EXPLICIT_THUMBS = \"explicit_thumbs\"\r\n    EXPLICIT_RATING = \"explicit_rating\"\r\n    IMPLICIT_CLICK = \"implicit_click\"\r\n    IMPLICIT_DWELL = \"implicit_dwell_time\"\r\n    IMPLICIT_SCROLL = \"implicit_scroll_depth\"\r\n    IMPLICIT_CONVERSION = \"implicit_conversion\"\r\n\r\n@dataclass\r\nclass FeedbackSignal:\r\n    feedback_type: FeedbackType\r\n    value: float\r\n    user_id: str\r\n    item_id: str\r\n    timestamp: float = field(default_factory=time.time)\r\n    context: Dict[str, str] = field(default_factory=dict)\r\n\r\nclass FeedbackCollector:\r\n    \"\"\"Collects and normalizes feedback from multiple sources.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.signals: List[FeedbackSignal] = []\r\n\r\n    def record(self, signal: FeedbackSignal) -> None:\r\n        \"\"\"Record a feedback signal.\"\"\"\r\n        self.signals.append(signal)\r\n\r\n    def get_explicit_score(self, item_id: str) -> Optional[float]:\r\n        \"\"\"Calculate average explicit rating for an item.\"\"\"\r\n        relevant = [\r\n            s for s in self.signals\r\n            if s.item_id == item_id\r\n            and s.feedback_type in (FeedbackType.EXPLICIT_THUMBS,\r\n                                     FeedbackType.EXPLICIT_RATING)\r\n        ]\r\n        if not relevant:\r\n            return None\r\n        scores = [s.value for s in relevant]\r\n        return statistics.mean(scores)\r\n\r\n    def get_implicit_score(self, item_id: str) -> Optional[float]:\r\n        \"\"\"Calculate implicit engagement score for an item.\"\"\"\r\n        relevant = [\r\n            s for s in self.signals if s.item_id == item_id\r\n        ]\r\n        if not relevant:\r\n            return None\r\n        normalized = []\r\n        for s in relevant:\r\n            if s.feedback_type == FeedbackType.IMPLICIT_DWELL:\r\n                normalized.append(min(s.value / 30.0, 1.0))\r\n            elif s.feedback_type == FeedbackType.IMPLICIT_CLICK:\r\n                normalized.append(1.0 if s.value > 0 else 0.0)\r\n            elif s.feedback_type == FeedbackType.IMPLICIT_SCROLL:\r\n                normalized.append(min(s.value, 1.0))\r\n        return statistics.mean(normalized) if normalized else None\r\n\r\n    def hybrid_score(self, item_id: str,\r\n                      explicit_weight: float = 0.6) -> float:\r\n        \"\"\"Combine explicit and implicit signals into one score.\"\"\"\r\n        explicit = self.get_explicit_score(item_id)\r\n        implicit = self.get_implicit_score(item_id)\r\n        if explicit is not None and implicit is not None:\r\n            return explicit * explicit_weight + implicit * (1 - explicit_weight)\r\n        return explicit or implicit or 0.5\r\n\r\ncollector = FeedbackCollector()\r\ncollector.record(FeedbackSignal(FeedbackType.EXPLICIT_THUMBS, 1.0,\r\n                                 \"user1\", \"item_42\"))\r\ncollector.record(FeedbackSignal(FeedbackType.IMPLICIT_DWELL, 45.0,\r\n                                 \"user2\", \"item_42\"))\r\ncollector.record(FeedbackSignal(FeedbackType.IMPLICIT_SCROLL, 0.8,\r\n                                 \"user3\", \"item_42\"))\r\nprint(f\"Explicit: {collector.get_explicit_score('item_42')}\")\r\nprint(f\"Implicit: {collector.get_implicit_score('item_42')}\")\r\nprint(f\"Hybrid: {collector.hybrid_score('item_42'):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-preference-learning",
      children: "1.3.2 Preference Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond simple ratings, preference learning captures relative comparisons. Users find it easier to say \"A is better than B\" than to assign absolute scores."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Tuple\r\nimport random\r\n\r\n@dataclass\r\nclass PreferencePair:\r\n    item_a: str\r\n    item_b: str\r\n    preferred: str  # \"a\", \"b\", or \"tie\"\r\n    user_id: str\r\n    context: str = \"\"\r\n\r\nclass PreferenceLearner:\r\n    \"\"\"Learn user preferences from pairwise comparisons.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.pairs: List[PreferencePair] = []\r\n        self.scores: Dict[str, float] = {}\r\n\r\n    def record_preference(self, pair: PreferencePair) -> None:\r\n        \"\"\"Record a single pairwise preference.\"\"\"\r\n        self.pairs.append(pair)\r\n        self._update_scores()\r\n\r\n    def _update_scores(self) -> None:\r\n        \"\"\"Recalculate Elo-like scores from all comparisons.\"\"\"\r\n        items = set()\r\n        for p in self.pairs:\r\n            items.add(p.item_a)\r\n            items.add(p.item_b)\r\n\r\n        self.scores = {item: 1000.0 for item in items}\r\n        k_factor = 32\r\n\r\n        for p in self.pairs:\r\n            if p.preferred == \"tie\":\r\n                continue\r\n\r\n            expected_a = 1.0 / (1.0 + 10 ** (\r\n                (self.scores[p.item_b] - self.scores[p.item_a]) / 400.0\r\n            ))\r\n            expected_b = 1.0 - expected_a\r\n\r\n            if p.preferred == \"a\":\r\n                self.scores[p.item_a] += k_factor * (1.0 - expected_a)\r\n                self.scores[p.item_b] += k_factor * (0.0 - expected_b)\r\n            else:\r\n                self.scores[p.item_a] += k_factor * (0.0 - expected_a)\r\n                self.scores[p.item_b] += k_factor * (1.0 - expected_b)\r\n\r\n    def get_ranking(self) -> List[Tuple[str, float]]:\r\n        \"\"\"Return items sorted by preference score.\"\"\"\r\n        return sorted(self.scores.items(),\r\n                       key=lambda x: x[1], reverse=True)\r\n\r\n    def get_top_n(self, n: int = 5) -> List[str]:\r\n        \"\"\"Return top N preferred items.\"\"\"\r\n        ranking = self.get_ranking()\r\n        return [item for item, _ in ranking[:n]]\r\n\r\nlearner = PreferenceLearner()\r\nitems = [\"response_A\", \"response_B\", \"response_C\",\r\n         \"response_D\", \"response_E\"]\r\nfor _ in range(20):\r\n    a, b = random.sample(items, 2)\r\n    preferred = random.choice([\"a\", \"b\", \"tie\"])\r\n    learner.record_preference(PreferencePair(a, b, preferred, \"user1\"))\r\n\r\nranking = learner.get_ranking()\r\nprint(\"Preference ranking:\")\r\nfor item, score in ranking:\r\n    print(f\"  {item}: {score:.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-reinforcement-learning-from-human-feedback-rlhf",
      children: "1.3.3 Reinforcement Learning from Human Feedback (RLHF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RLHF aligns model outputs with human preferences. The UX layer collects comparisons that feed into the reward model training pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Tuple\r\nimport json\r\n\r\n@dataclass\r\nclass RLHFSample:\r\n    prompt: str\r\n    response_a: str\r\n    response_b: str\r\n    preferred: str  # \"a\" or \"b\"\r\n    rater_id: str\r\n    metadata: Dict = field(default_factory=dict)\r\n\r\nclass RLHFDataPipeline:\r\n    \"\"\"Prepares human preference data for reward model training.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.samples: List[RLHFSample] = []\r\n\r\n    def add_comparison(self, sample: RLHFSample) -> None:\r\n        \"\"\"Add a human comparison to the dataset.\"\"\"\r\n        self.samples.append(sample)\r\n\r\n    def export_for_training(self) -> str:\r\n        \"\"\"Export data in standard RLHF JSONL format.\"\"\"\r\n        records = []\r\n        for s in self.samples:\r\n            chosen = s.response_a if s.preferred == \"a\" else s.response_b\r\n            rejected = s.response_b if s.preferred == \"a\" else s.response_a\r\n            records.append({\r\n                \"prompt\": s.prompt,\r\n                \"chosen\": chosen,\r\n                \"rejected\": rejected,\r\n                \"rater\": s.rater_id,\r\n            })\r\n        return json.dumps(records, indent=2)\r\n\r\n    def compute_inter_rater_agreement(self) -> float:\r\n        \"\"\"Simple agreement score when multiple raters judge same pair.\"\"\"\r\n        prompt_groups: Dict[str, List[str]] = {}\r\n        for s in self.samples:\r\n            key = f\"{s.prompt}|{s.response_a}|{s.response_b}\"\r\n            if key not in prompt_groups:\r\n                prompt_groups[key] = []\r\n            prompt_groups[key].append(s.preferred)\r\n\r\n        agreements = 0\r\n        total = 0\r\n        for key, prefs in prompt_groups.items():\r\n            if len(prefs) < 2:\r\n                continue\r\n            total += 1\r\n            if len(set(prefs)) == 1:\r\n                agreements += 1\r\n\r\n        return agreements / total if total > 0 else 0.0\r\n\r\npipeline = RLHFDataPipeline()\r\npipeline.add_comparison(RLHFSample(\r\n    \"Explain quantum computing\",\r\n    \"Quantum computing uses qubits...\",\r\n    \"Quantum computers are fast...\",\r\n    \"a\", \"rater_1\"\r\n))\r\npipeline.add_comparison(RLHFSample(\r\n    \"Explain quantum computing\",\r\n    \"Quantum computing uses qubits...\",\r\n    \"Quantum computers are fast...\",\r\n    \"a\", \"rater_2\"\r\n))\r\nprint(f\"Inter-rater agreement: {pipeline.compute_inter_rater_agreement()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-handling-ai-errors",
      children: "1.4 Handling AI Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-graceful-degradation",
      children: "1.4.1 Graceful Degradation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems will fail. Graceful degradation means the system continues functioning at reduced capability instead of crashing or showing nonsense."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Optional, Callable, Any\r\nfrom enum import Enum\r\nimport time\r\n\r\nclass ServiceLevel(Enum):\r\n    FULL = \"full\"            # AI operating at peak\r\n    DEGRADED = \"degraded\"    # AI partially available\r\n    FALLBACK = \"fallback\"    # Rule-based or cached response\r\n    OFFLINE = \"offline\"      # No AI, return error message\r\n\r\n@dataclass\r\nclass AIResponse:\r\n    content: Any\r\n    service_level: ServiceLevel\r\n    latency_ms: float\r\n    warning: Optional[str] = None\r\n\r\nclass GracefulDegradation:\r\n    \"\"\"Manages service level transitions when AI components fail.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.current_level: ServiceLevel = ServiceLevel.FULL\r\n        self.fallback_handlers: Dict[ServiceLevel, Callable] = {}\r\n        self.consecutive_failures: int = 0\r\n        self.failure_threshold: int = 3\r\n\r\n    def register_fallback(self, level: ServiceLevel,\r\n                           handler: Callable) -> None:\r\n        \"\"\"Register a handler for a specific service level.\"\"\"\r\n        self.fallback_handlers[level] = handler\r\n\r\n    def process_request(self, primary_fn: Callable,\r\n                         user_input: str) -> AIResponse:\r\n        \"\"\"Process request with automatic degradation on failure.\"\"\"\r\n        start = time.time()\r\n\r\n        if self.current_level == ServiceLevel.OFFLINE:\r\n            return AIResponse(\r\n                content=\"AI service is temporarily unavailable.\",\r\n                service_level=ServiceLevel.OFFLINE,\r\n                latency_ms=(time.time() - start) * 1000,\r\n                warning=\"Service offline. Please try again later.\"\r\n            )\r\n\r\n        try:\r\n            result = primary_fn(user_input)\r\n\r\n            if self.current_level != ServiceLevel.FULL:\r\n                self.consecutive_failures = 0\r\n                self.current_level = ServiceLevel.FULL\r\n\r\n            return AIResponse(\r\n                content=result,\r\n                service_level=self.current_level,\r\n                latency_ms=(time.time() - start) * 1000,\r\n            )\r\n\r\n        except Exception as e:\r\n            self.consecutive_failures += 1\r\n            level = self._determine_level()\r\n            self.current_level = level\r\n\r\n            if level in self.fallback_handlers:\r\n                fallback_result = self.fallback_handlers[level](user_input)\r\n                return AIResponse(\r\n                    content=fallback_result,\r\n                    service_level=level,\r\n                    latency_ms=(time.time() - start) * 1000,\r\n                    warning=f\"AI unavailable. Using fallback. ({str(e)})\"\r\n                )\r\n\r\n            return AIResponse(\r\n                content=\"Unable to process. Please try again.\",\r\n                service_level=level,\r\n                latency_ms=(time.time() - start) * 1000,\r\n                warning=f\"Error: {str(e)}\"\r\n            )\r\n\r\n    def _determine_level(self) -> ServiceLevel:\r\n        \"\"\"Determine service level based on failure count.\"\"\"\r\n        if self.consecutive_failures >= 5:\r\n            return ServiceLevel.OFFLINE\r\n        elif self.consecutive_failures >= self.failure_threshold:\r\n            return ServiceLevel.FALLBACK\r\n        return ServiceLevel.DEGRADED\r\n\r\ndef ai_call(text: str) -> str:\r\n    \"\"\"Simulate an AI call that sometimes fails.\"\"\"\r\n    if hash(text) % 3 == 0:\r\n        raise TimeoutError(\"AI model timed out\")\r\n    return f\"AI response to: {text}\"\r\n\r\ndef cached_fallback(text: str) -> str:\r\n    \"\"\"Return a cached or template response.\"\"\"\r\n    return f\"Cached response for similar query.\"\r\n\r\ndegrader = GracefulDegradation()\r\ndegrader.register_fallback(ServiceLevel.DEGRADED, cached_fallback)\r\ndegrader.register_fallback(ServiceLevel.FALLBACK, cached_fallback)\r\n\r\nfor query in [\"hello\", \"test\", \"fail1\", \"fail2\", \"fail3\",\r\n              \"fail4\", \"fail5\"]:\r\n    response = degrader.process_request(ai_call, query)\r\n    print(f\"[{response.service_level.value:10s}] {response.content[:40]:40s} \"\r\n          f\"| {response.latency_ms:.0f}ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-confidence-thresholds-and-human-in-the-loop",
      children: "1.4.2 Confidence Thresholds and Human-in-the-Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not every decision belongs to AI. Define confidence thresholds below which human review is required. This is critical in high-stakes domains like healthcare, finance, and legal."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Optional, Tuple\r\nfrom enum import Enum\r\n\r\nclass DecisionType(Enum):\r\n    AUTO_APPROVE = \"auto_approve\"\r\n    HUMAN_REVIEW = \"human_review\"\r\n    ESCALATE = \"escalate\"\r\n\r\n@dataclass\r\nclass DecisionResult:\r\n    decision: str\r\n    confidence: float\r\n    decision_type: DecisionType\r\n    reason: str\r\n    requires_human: bool = True\r\n\r\nclass HumanInTheLoop:\r\n    \"\"\"Manages AI vs human decision routing based on confidence.\"\"\"\r\n\r\n    def __init__(self, auto_threshold: float = 0.95,\r\n                 review_threshold: float = 0.80):\r\n        self.auto_threshold = auto_threshold\r\n        self.review_threshold = review_threshold\r\n        self.human_review_queue: List[dict] = []\r\n        self.auto_decisions: int = 0\r\n        self.human_reviews: int = 0\r\n\r\n    def evaluate(self, prediction: str, confidence: float,\r\n                  context: dict = None) -> DecisionResult:\r\n        \"\"\"Route decision based on model confidence.\"\"\"\r\n        if confidence >= self.auto_threshold:\r\n            self.auto_decisions += 1\r\n            return DecisionResult(\r\n                decision=prediction,\r\n                confidence=confidence,\r\n                decision_type=DecisionType.AUTO_APPROVE,\r\n                reason=\"Confidence above auto-approval threshold\",\r\n                requires_human=False,\r\n            )\r\n\r\n        elif confidence >= self.review_threshold:\r\n            self.human_reviews += 1\r\n            entry = {\r\n                \"prediction\": prediction,\r\n                \"confidence\": confidence,\r\n                \"context\": context or {},\r\n                \"status\": \"pending_review\",\r\n            }\r\n            self.human_review_queue.append(entry)\r\n            return DecisionResult(\r\n                decision=prediction,\r\n                confidence=confidence,\r\n                decision_type=DecisionType.HUMAN_REVIEW,\r\n                reason=(\r\n                    f\"Confidence {confidence:.2f} requires human review. \"\r\n                    f\"Queued for review.\"\r\n                ),\r\n                requires_human=True,\r\n            )\r\n\r\n        else:\r\n            self.human_reviews += 1\r\n            return DecisionResult(\r\n                decision=\"REJECTED\",\r\n                confidence=confidence,\r\n                decision_type=DecisionType.ESCALATE,\r\n                reason=(\r\n                    f\"Confidence too low ({confidence:.2f}). \"\r\n                    f\"Escalated to human decision.\"\r\n                ),\r\n                requires_human=True,\r\n            )\r\n\r\n    def resolve_review(self, review_id: int,\r\n                        human_decision: Optional[str]) -> None:\r\n        \"\"\"Resolve a human review queue item.\"\"\"\r\n        if 0 <= review_id < len(self.human_review_queue):\r\n            self.human_review_queue[review_id][\"status\"] = \"resolved\"\r\n            self.human_review_queue[review_id][\"human_decision\"] = human_decision\r\n\r\n    def stats(self) -> dict:\r\n        \"\"\"Return routing statistics.\"\"\"\r\n        total = self.auto_decisions + self.human_reviews\r\n        return {\r\n            \"total\": total,\r\n            \"auto_approved\": self.auto_decisions,\r\n            \"human_reviewed\": self.human_reviews,\r\n            \"auto_rate\": self.auto_decisions / total if total else 0,\r\n        }\r\n\r\nhitl = HumanInTheLoop()\r\nscenarios = [(\"Approve\", 0.97), (\"Flag\", 0.85), (\"Review\", 0.65),\r\n              (\"Approve\", 0.99), (\"Flag\", 0.72)]\r\nfor pred, conf in scenarios:\r\n    result = hitl.evaluate(pred, conf)\r\n    print(f\"{pred:10s} conf={conf:.2f} -> \"\r\n          f\"{result.decision_type.value:15s} human={result.requires_human}\")\r\n\r\nprint(f\"\\nStats: {hitl.stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-error-messaging-for-ai-systems",
      children: "1.4.3 Error Messaging for AI Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error messages in AI systems must be more informative than traditional software errors. Users need to know what went wrong, why it went wrong, and what to do next."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass AIErrorMessage:\r\n    title: str\r\n    description: str\r\n    recovery_action: str\r\n    error_code: str\r\n    is_actionable: bool = True\r\n    show_details: bool = False\r\n\r\nclass AIErrorMessenger:\r\n    \"\"\"Generates user-friendly error messages for AI failures.\"\"\"\r\n\r\n    ERROR_TEMPLATES = {\r\n        \"model_timeout\": AIErrorMessage(\r\n            title=\"AI is taking longer than expected\",\r\n            description=\"The model needs more time to process your request.\",\r\n            recovery_action=\"Please try again or simplify your query.\",\r\n            error_code=\"E001\",\r\n            is_actionable=True,\r\n        ),\r\n        \"low_confidence\": AIErrorMessage(\r\n            title=\"AI is uncertain about this result\",\r\n            description=\"Confidence is below our safety threshold.\",\r\n            recovery_action=\"A human reviewer will verify this result.\",\r\n            error_code=\"E002\",\r\n            is_actionable=False,\r\n        ),\r\n        \"context_overflow\": AIErrorMessage(\r\n            title=\"Input is too long\",\r\n            description=\"Your request exceeds the AI's context window.\",\r\n            recovery_action=\"Shorten your input or split it into parts.\",\r\n            error_code=\"E003\",\r\n            is_actionable=True,\r\n        ),\r\n        \"offensive_content\": AIErrorMessage(\r\n            title=\"Input flagged by safety filters\",\r\n            description=\"Content may violate usage policies.\",\r\n            recovery_action=\"Modify your input and try again.\",\r\n            error_code=\"E004\",\r\n            is_actionable=True,\r\n        ),\r\n        \"model_unavailable\": AIErrorMessage(\r\n            title=\"AI service is temporarily unavailable\",\r\n            description=\"The model server is experiencing issues.\",\r\n            recovery_action=\"Please try again in a few minutes.\",\r\n            error_code=\"E005\",\r\n            is_actionable=True,\r\n            show_details=True,\r\n        ),\r\n    }\r\n\r\n    def get_message(self, error_key: str,\r\n                     details: Optional[str] = None) -> dict:\r\n        \"\"\"Get a formatted error message for the user.\"\"\"\r\n        template = self.ERROR_TEMPLATES.get(\r\n            error_key,\r\n            AIErrorMessage(\r\n                title=\"Unexpected error\",\r\n                description=\"Something went wrong.\",\r\n                recovery_action=\"Please try again or contact support.\",\r\n                error_code=\"E999\",\r\n            )\r\n        )\r\n\r\n        message = {\r\n            \"title\": template.title,\r\n            \"description\": template.description,\r\n            \"recovery_action\": template.recovery_action,\r\n            \"error_code\": template.error_code,\r\n            \"is_actionable\": template.is_actionable,\r\n        }\r\n\r\n        if template.show_details and details:\r\n            message[\"details\"] = details\r\n\r\n        return message\r\n\r\nmessenger = AIErrorMessenger()\r\nfor error_type in [\"model_timeout\", \"low_confidence\", \"offensive_content\"]:\r\n    msg = messenger.get_message(error_type)\r\n    print(f\"\\n[{msg['error_code']}] {msg['title']}\")\r\n    print(f\"  {msg['description']}\")\r\n    print(f\"  Action: {msg['recovery_action']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-designing-for-different-ai-modes",
      children: "1.5 Designing for Different AI Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-streaming-responses",
      children: "1.5.1 Streaming Responses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming delivers AI output token-by-token. The UX must handle partial content, provide early value, and show progress without confusing the user."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Generator, List\r\nimport time\r\n\r\nclass StreamHandler:\r\n    \"\"\"Manages streaming AI response UX.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.buffer: str = \"\"\r\n        self.chunks_received: int = 0\r\n        self.total_latency_ms: float = 0.0\r\n\r\n    def simulate_stream(self, text: str,\r\n                         chunk_size: int = 5) -> Generator[str, None, None]:\r\n        \"\"\"Simulate token-by-token streaming.\"\"\"\r\n        words = text.split()\r\n        for i in range(0, len(words), chunk_size):\r\n            chunk = \" \".join(words[i:i + chunk_size])\r\n            time.sleep(0.05)\r\n            yield chunk + \" \"\r\n\r\n    def process_stream(self, stream: Generator[str, None, None]) -> List[dict]:\r\n        \"\"\"Process stream and generate UX events.\"\"\"\r\n        events = []\r\n        start = time.time()\r\n\r\n        for chunk in stream:\r\n            self.buffer += chunk\r\n            self.chunks_received += 1\r\n            elapsed = (time.time() - start) * 1000\r\n            self.total_latency_ms = elapsed\r\n\r\n            events.append({\r\n                \"type\": \"stream_chunk\",\r\n                \"content\": chunk,\r\n                \"buffer_length\": len(self.buffer),\r\n                \"elapsed_ms\": round(elapsed, 1),\r\n                \"is_final\": False,\r\n            })\r\n\r\n        events.append({\r\n            \"type\": \"stream_complete\",\r\n            \"full_content\": self.buffer,\r\n            \"total_chunks\": self.chunks_received,\r\n            \"total_latency_ms\": round(self.total_latency_ms, 1),\r\n            \"is_final\": True,\r\n        })\r\n\r\n        return events\r\n\r\n    def get_ux_state(self) -> dict:\r\n        \"\"\"Return current UX state for frontend rendering.\"\"\"\r\n        return {\r\n            \"display_text\": self.buffer,\r\n            \"is_streaming\": self.chunks_received > 0,\r\n            \"progress_indicators\": {\r\n                \"dots\": \".\" * (self.chunks_received % 4),\r\n                \"spinner_rotation\": (self.chunks_received * 45) % 360,\r\n            },\r\n        }\r\n\r\nhandler = StreamHandler()\r\nresponse = \"User experience design for AI systems requires careful attention.\"\r\nstream = handler.simulate_stream(response, chunk_size=3)\r\nevents = handler.process_stream(stream)\r\nfor e in events:\r\n    if e[\"type\"] == \"stream_chunk\":\r\n        print(f\"[{e['elapsed_ms']:6.1f}ms] Chunk: '{e['content'].strip()}'\")\r\n    else:\r\n        print(f\"\\nComplete in {e['total_latency_ms']}ms | \"\r\n              f\"{e['total_chunks']} chunks\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-batch-processing",
      children: "1.5.2 Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch AI processes inputs asynchronously. UX must show queued status, progress, and results without blocking the user."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional, Callable\r\nfrom enum import Enum\r\nimport time\r\nimport uuid\r\n\r\nclass BatchStatus(Enum):\r\n    QUEUED = \"queued\"\r\n    PROCESSING = \"processing\"\r\n    COMPLETED = \"completed\"\r\n    FAILED = \"failed\"\r\n\r\n@dataclass\r\nclass BatchJob:\r\n    job_id: str = field(default_factory=lambda: uuid.uuid4().hex[:8])\r\n    status: BatchStatus = BatchStatus.QUEUED\r\n    progress: float = 0.0\r\n    items_total: int = 0\r\n    items_completed: int = 0\r\n    result: Optional[Dict] = None\r\n    error: Optional[str] = None\r\n    created_at: float = field(default_factory=time.time)\r\n    completed_at: Optional[float] = None\r\n\r\nclass BatchProcessorUX:\r\n    \"\"\"Manages UX state for batch AI processing.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.jobs: Dict[str, BatchJob] = {}\r\n\r\n    def submit_job(self, items: List[str]) -> BatchJob:\r\n        \"\"\"Submit a batch job and return tracking info.\"\"\"\r\n        job = BatchJob(items_total=len(items))\r\n        self.jobs[job.job_id] = job\r\n        return job\r\n\r\n    def process_item(self, job_id: str, processor: Callable) -> None:\r\n        \"\"\"Process one item and update UX state.\"\"\"\r\n        job = self.jobs.get(job_id)\r\n        if not job:\r\n            return\r\n\r\n        job.status = BatchStatus.PROCESSING\r\n        job.items_completed += 1\r\n        job.progress = job.items_completed / job.items_total\r\n\r\n    def complete_job(self, job_id: str, result: Dict) -> None:\r\n        \"\"\"Mark job as completed.\"\"\"\r\n        job = self.jobs.get(job_id)\r\n        if not job:\r\n            return\r\n        job.status = BatchStatus.COMPLETED\r\n        job.result = result\r\n        job.completed_at = time.time()\r\n\r\n    def get_ux_display(self, job_id: str) -> Dict:\r\n        \"\"\"Generate progress display data for frontend.\"\"\"\r\n        job = self.jobs.get(job_id)\r\n        if not job:\r\n            return {\"error\": \"Job not found\"}\r\n\r\n        eta_seconds = None\r\n        if job.status == BatchStatus.PROCESSING and job.items_completed > 0:\r\n            elapsed = time.time() - job.created_at\r\n            rate = job.items_completed / elapsed\r\n            remaining = job.items_total - job.items_completed\r\n            eta_seconds = remaining / rate if rate > 0 else None\r\n\r\n        return {\r\n            \"job_id\": job.job_id,\r\n            \"status\": job.status.value,\r\n            \"progress_percent\": round(job.progress * 100, 1),\r\n            \"items\": f\"{job.items_completed}/{job.items_total}\",\r\n            \"eta_seconds\": round(eta_seconds) if eta_seconds else None,\r\n            \"progress_bar\": \"█\" * int(job.progress * 20) +\r\n                            \"░\" * (20 - int(job.progress * 20)),\r\n        }\r\n\r\nbatch_ux = BatchProcessorUX()\r\njob = batch_ux.submit_job([\"item1\", \"item2\", \"item3\", \"item4\", \"item5\"])\r\nfor i in range(5):\r\n    batch_ux.process_item(job.job_id, lambda x: x)\r\n    display = batch_ux.get_ux_display(job.job_id)\r\n    print(f\"[{display['status']:12s}] {display['progress_bar']} \"\r\n          f\"{display['progress_percent']}% ({display['items']})\")\r\n\r\nbatch_ux.complete_job(job.job_id, {\"summary\": \"All items processed\"})\r\nprint(f\"\\nFinal: {batch_ux.get_ux_display(job.job_id)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-real-time-and-background-processing",
      children: "1.5.3 Real-Time and Background Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time AI (chat, recommendations) needs sub-second latency. Background AI (content moderation, data enrichment) can take minutes. UX patterns differ significantly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional\r\nfrom enum import Enum\r\nimport time\r\nimport asyncio\r\n\r\nclass ProcessingMode(Enum):\r\n    REALTIME = \"realtime\"      # < 1 second\r\n    NEAR_REALTIME = \"near_realtime\"  # 1-5 seconds\r\n    BACKGROUND = \"background\"  # > 5 seconds\r\n\r\n@dataclass\r\nclass AIRequest:\r\n    query: str\r\n    mode: ProcessingMode\r\n    submitted_at: float = field(default_factory=time.time)\r\n    completed_at: Optional[float] = None\r\n    result: Optional[str] = None\r\n    estimated_duration_ms: float = 100.0\r\n\r\nclass ModeAwareUX:\r\n    \"\"\"Adapts UX patterns based on processing mode.\"\"\"\r\n\r\n    MODE_PATTERNS = {\r\n        ProcessingMode.REALTIME: {\r\n            \"show_spinner\": False,\r\n            \"show_skeleton\": True,\r\n            \"allow_refetch\": False,\r\n            \"timeout_ms\": 2000,\r\n            \"ux_pattern\": \"instant_result\",\r\n        },\r\n        ProcessingMode.NEAR_REALTIME: {\r\n            \"show_spinner\": True,\r\n            \"show_skeleton\": True,\r\n            \"allow_refetch\": True,\r\n            \"timeout_ms\": 8000,\r\n            \"ux_pattern\": \"progress_indicator\",\r\n        },\r\n        ProcessingMode.BACKGROUND: {\r\n            \"show_spinner\": False,\r\n            \"show_skeleton\": False,\r\n            \"allow_refetch\": True,\r\n            \"timeout_ms\": 300000,\r\n            \"ux_pattern\": \"notification_on_complete\",\r\n        },\r\n    }\r\n\r\n    def get_ux_instructions(self, request: AIRequest) -> dict:\r\n        \"\"\"Return UX instructions based on processing mode.\"\"\"\r\n        return self.MODE_PATTERNS.get(request.mode, self.MODE_PATTERNS[ProcessingMode.BACKGROUND])\r\n\r\n    def simulate_processing(self, request: AIRequest) -> AIRequest:\r\n        \"\"\"Simulate processing with appropriate UX state.\"\"\"\r\n        delay = request.estimated_duration_ms / 1000.0\r\n        time.sleep(min(delay, 2.0))\r\n        request.completed_at = time.time()\r\n        request.result = f\"Result for: {request.query[:30]}\"\r\n        return request\r\n\r\nux = ModeAwareUX()\r\nfor mode in ProcessingMode:\r\n    req = AIRequest(query=f\"Test query for {mode.value}\",\r\n                     mode=mode,\r\n                     estimated_duration_ms={\r\n                         ProcessingMode.REALTIME: 200,\r\n                         ProcessingMode.NEAR_REALTIME: 3000,\r\n                         ProcessingMode.BACKGROUND: 60000,\r\n                     }[mode])\r\n    instructions = ux.get_ux_instructions(req)\r\n    print(f\"\\nMode: {mode.value}\")\r\n    print(f\"  Pattern: {instructions['ux_pattern']}\")\r\n    print(f\"  Spinner: {instructions['show_spinner']}\")\r\n    print(f\"  Timeout: {instructions['timeout_ms']}ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-trust-calibration-in-ai-ux-and-why-is-it-important",
      children: "Q1: What is trust calibration in AI UX and why is it important?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trust calibration ensures users trust AI appropriately — not too little (undertrust) and not too much (overtrust). Undertrust causes users to ignore correct AI suggestions. Overtrust causes users to accept wrong suggestions without verification. Appropriate trust maximizes user outcomes by matching reliance to actual model capability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-you-design-a-conversational-ui-for-an-ai-assistant",
      children: "Q2: How do you design a conversational UI for an AI assistant?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design conversational UI with clear state management (greeting, collecting input, clarifying, processing, confirming, complete, error). Implement clarification loops when confidence is low. Use confirmation turns for ambiguous inputs. Show available actions since users cannot see options in a chat interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-implicit-and-explicit-feedback",
      children: "Q3: What is the difference between implicit and explicit feedback?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explicit feedback comes from direct user actions like thumbs up/down, star ratings, or surveys. It is high-quality but sparse. Implicit feedback comes from observed behavior like dwell time, click-through rate, scroll depth, or retention. It is abundant but noisy. Hybrid approaches combine both for robust preference signals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-graceful-degradation-in-ai-systems",
      children: "Q4: Explain graceful degradation in AI systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graceful degradation means an AI system continues operating at reduced capability when components fail. Instead of crashing or returning nonsense, it falls back to simpler models, cached responses, or rule-based logic. The system communicates its degraded state to users and provides clear recovery actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-confidence-thresholds-work-in-human-in-the-loop-systems",
      children: "Q5: How do confidence thresholds work in human-in-the-loop systems?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define two thresholds: auto-approve (e.g., confidence > 0.95) for fully automated decisions, and review (e.g., confidence > 0.80) requiring human verification. Below the review threshold, decisions are escalated or rejected. Thresholds should vary by domain risk — healthcare and finance need higher bars than content recommendations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-ux-patterns-work-best-for-streaming-ai-responses",
      children: "Q6: What UX patterns work best for streaming AI responses?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show partial content as it arrives using a typewriter effect. Provide a visual progress indicator (pulsing cursor, token count). Allow users to read and interact with early content while the rest streams in. Include a stop button to cancel generation. Prevent layout shifts by reserving space for the full response."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-communicate-ai-uncertainty-to-non-technical-users",
      children: "Q7: How do you communicate AI uncertainty to non-technical users?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use plain language labels (\"High confidence\", \"Medium confidence\", \"Low confidence\") instead of scores. Show colored confidence bars (green/yellow/red). Provide alternative interpretations when confidence is medium. Request confirmation when confidence is low. Never expose raw probabilities or logits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-preference-learning-in-the-context-of-ai-ux",
      children: "Q8: What is preference learning in the context of AI UX?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preference learning captures relative comparisons (\"A is better than B\") rather than absolute ratings. Users find pairwise comparisons more intuitive than numeric scales. The system builds an Elo-like ranking from comparisons. This ranking feeds into RLHF pipelines to align model outputs with user preferences."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-should-you-handle-batch-ai-processing-in-the-ui",
      children: "Q9: How should you handle batch AI processing in the UI?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show queue status immediately after submission. Display progress as a percentage with item counts. Provide estimated completion time based on processing rate. Allow users to navigate away and receive notifications on completion. Show partial results as they become available for long-running batches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-metrics-measure-ai-ux-quality",
      children: "Q10: What metrics measure AI UX quality?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key metrics include: task completion rate (did users succeed?), time-to-value (how fast did they get results?), trust calibration score (gap between follow rate and accuracy), feedback submission rate (are users providing signals?), abandonment rate (do users leave mid-interaction?), and human review ratio (how often is AI overridden?)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User experience for AI goes beyond traditional UX by addressing trust, uncertainty, and error handling. AI engineers must design interaction patterns that communicate confidence, collect feedback, and degrade gracefully when models fail. The best AI products feel transparent — users understand what the AI knows, what it does not know, and what to do when things go wrong. Mastering these UX patterns separates AI products that users love from those they abandon."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-1",
      children: "MCQ 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What does trust calibration aim to achieve?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A. Make users trust AI as much as possible\r\nB. Align user reliance with actual AI capability\r\nC. Eliminate all human oversight of AI decisions\r\nD. Maximize the number of AI auto-approvals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": B. Trust calibration aligns user reliance with actual model capability, preventing both undertrust and overtrust."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-2",
      children: "MCQ 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which feedback type is considered implicit?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A. Star rating\r\nB. Thumbs up/down\r\nC. Dwell time on content\r\nD. Survey response"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": C. Dwell time is implicit feedback because it is observed from user behavior, not explicitly provided."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-3",
      children: "MCQ 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the correct UX pattern for streaming AI responses?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A. Show a loading spinner until complete\r\nB. Display content incrementally as it arrives\r\nC. Batch all output and show at once\r\nD. Only show the final summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": B. Streaming UX should display content incrementally as tokens arrive, allowing users to read and interact with partial content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-4",
      children: "MCQ 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What should happen when AI confidence is below the review threshold?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A. Auto-approve the decision\r\nB. Return an error message\r\nC. Route to human review or reject\r\nD. Lower the threshold dynamically"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": C. Decisions below the review threshold should be routed to human reviewers or rejected outright to prevent incorrect outcomes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-5",
      children: "MCQ 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which approach best captures user preferences for RLHF?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A. Absolute numeric ratings (1-10)\r\nB. Pairwise comparisons (A vs B)\r\nC. Free-text feedback analysis\r\nD. Click-through rate tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": B. Pairwise comparisons provide cleaner preference signals than absolute ratings and are the standard input format for RLHF training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-a-confidence-aware-chat-ui",
      children: "Exercise 1: Build a Confidence-Aware Chat UI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a Python class that wraps an LLM API call and returns structured responses with confidence labels. Implement three tiers: high (show result directly), medium (show with qualification), low (request user confirmation). Include a mock LLM function."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-implement-graceful-degradation",
      children: "Exercise 2: Implement Graceful Degradation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a system that tries a primary AI model and falls back to smaller models on failure. Use three tiers: GPT-4 → GPT-3.5 → cached response. Track failure counts and escalate only after consecutive failures. Return service level information with each response."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-design-a-feedback-collection-pipeline",
      children: "Exercise 3: Design a Feedback Collection Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a system that collects both implicit (dwell time, scroll depth) and explicit (thumbs up/down) feedback. Implement a hybrid scoring function that combines both signals with configurable weights. Export data in JSONL format for reward model training."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-implement-preference-ranking",
      children: "Exercise 4: Implement Preference Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a class that manages pairwise comparisons between AI responses. Use an Elo rating system to maintain scores. Simulate 30 comparisons between 5 different responses and output the final ranking. Identify the top-2 preferred responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-build-a-multi-modal-input-fusion-system",
      children: "Exercise 5: Build a Multi-Modal Input Fusion System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a system that accepts text, voice transcription, and image inputs. Implement conflict detection when modalities disagree. Use a weighting scheme to fuse inputs into a single intent. Display confidence scores for each modality and the fused result."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI UX requires explicit trust calibration — users need to know when to trust and when to doubt the system."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feedback loops (implicit + explicit) are essential for continuous model improvement and user alignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graceful degradation and human-in-the-loop fallbacks prevent catastrophic failures when AI is wrong."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different processing modes (streaming, batch, real-time) demand different UX patterns and progress indicators."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparency and explainability build user trust — every AI output should include context about its confidence and reasoning."
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
            children: "Explain the core idea of User Experience for AI in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates User Experience for AI."
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
            children: "Describe a production bug caused by misunderstanding User Experience for AI. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on User Experience for AI from 10 users to 10 million?"
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
            children: "Compare User Experience for AI with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on User Experience for AI."
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
            children: "How does User Experience for AI behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of User Experience for AI run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of User Experience for AI that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name User Experience for AI explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using User Experience for AI\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies User Experience for AI to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside User Experience for AI (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of User Experience for AI and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a User Experience for AI-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic User Experience for AI interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply User Experience for AI in production today?"
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
        }), " User Experience for AI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for User Experience for AI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for User Experience for AI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for User Experience for AI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the User Experience for AI chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers User Experience for AI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 02 Ux For Ai is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 02 Ux For Ai is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug User Experience for AI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to User Experience for AI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving User Experience for AI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of User Experience for AI is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain User Experience for AI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for User Experience for AI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of User Experience for AI on an empty input?"
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
            children: "Complete Medium exercises, explain User Experience for AI to someone else"
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
        children: "Always write a one-line example of User Experience for AI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered User Experience for AI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining User Experience for AI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own User Experience for AI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of User Experience for AI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link User Experience for AI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of User Experience for AI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain User Experience for AI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations Experience for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 26 — builds the foundation for 02 Ux For Ai"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 02 Ux For Ai with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 02 Ux For Ai fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 02 Ux For Ai"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 02 Ux For Ai"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 02 Ux For Ai?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 02 Ux For Ai?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 02 Ux For Ai asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 02 Ux For Ai?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User Experience for AI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with User Experience for AI."
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
        children: "User Experience for AI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for User Experience for AI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about User Experience for AI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around User Experience for AI changes quickly; focus on fundamentals that remain stable."
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
            children: "02 Ux For Ai is like a GPS navigation system"
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
          }), " — this chapter contributes the User Experience for AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-02uxforai-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of User Experience for AI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-02uxforai-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-02uxforai-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard User Experience for AI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-02uxforai-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is User Experience for AI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-02uxforai-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is User Experience for AI applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for User Experience for AI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing User Experience for AI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for User Experience for AI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running User Experience for AI in production at scale"
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
        children: "cProfile / py-spy for performance profiling Experience for AI"
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
        }), ": Add structured logging at each stage of the 02 Ux For Ai pipeline to identify exactly where the failure occurs."]
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
        children: "Explain User Experience for AI in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of User Experience for AI."
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
        children: "Tell me about a time you debugged a User Experience for AI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where User Experience for AI is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_02_ux_for_ai(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 02 Ux For Ai.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 02 Ux For Ai here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain User Experience for AI without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics",
        children: "03 — Experiment Design & Metrics for AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User Experience for AI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of User Experience for AI depends on input size and distribution — always benchmark for your own data."
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