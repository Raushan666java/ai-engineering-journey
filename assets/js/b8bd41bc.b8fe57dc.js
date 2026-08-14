"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85779],{

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
const site_docs_courses_ai_engineering_placement_26_ai_product_thinking_02_ux_for_ai_md_b8b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-product-thinking/02-ux-for-ai","title":"User Experience for AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai.md","sourceDirName":"courses/ai-engineering-placement/26-ai-product-thinking","slug":"/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":291,"frontMatter":{"id":"02-ux-for-ai","slug":"/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai","title":"User Experience for AI","sidebar_label":"User Experience for AI","sidebar_position":291},"sidebar":"placementSidebar","previous":{"title":"01 — AI Product Strategy","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/01-ai-product-strategy"},"next":{"title":"03 — Experiment Design & Metrics for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics"}}');
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
	sidebar_position: 291
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
        children: "flowchart TD\n    subgraph Input[User Input Layer]\n        A[Text] --> E\n        B[Voice] --> E\n        C[Image] --> E\n        D[Gesture] --> E\n        E[Multi-modal Fusion]\n    end\n    subgraph Trust[Trust Layer]\n        F[Confidence Display] --> G[Explanation]\n        G --> H[Uncertainty Communication]\n    end\n    subgraph Feedback[Feedback Layer]\n        I[Implicit Signals] --> K[Preference Store]\n        J[Explicit Ratings] --> K\n        K --> L[Model Update]\n    end\n    subgraph Error[Error Handling]\n        M{Confidence > Threshold?}\n        M -->|Yes| N[Show Result]\n        M -->|No| O[Graceful Fallback]\n        O --> P[Human-in-the-loop]\n    end\n    Input --> Trust --> M --> Feedback\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Any\nfrom enum import Enum\nimport time\nimport json\n\nclass InputModality(Enum):\n    TEXT = \"text\"\n    VOICE = \"voice\"\n    IMAGE = \"image\"\n    DOCUMENT = \"document\"\n    GESTURE = \"gesture\"\n\n@dataclass\nclass UserInput:\n    content: Any\n    modality: InputModality\n    timestamp: float = field(default_factory=time.time)\n    metadata: Dict[str, Any] = field(default_factory=dict)\n\nclass MultiModalFusion:\n    \"\"\"Combines inputs from multiple modalities into a unified intent.\"\"\"\n\n    def __init__(self):\n        self.modality_weight: Dict[InputModality, float] = {\n            InputModality.TEXT: 1.0,\n            InputModality.VOICE: 0.8,\n            InputModality.IMAGE: 0.7,\n            InputModality.DOCUMENT: 0.9,\n            InputModality.GESTURE: 0.4,\n        }\n\n    def fuse(self, inputs: List[UserInput]) -> Dict[str, Any]:\n        \"\"\"Merge multiple inputs into a single interpretation.\"\"\"\n        if not inputs:\n            return {\"intent\": None, \"confidence\": 0.0}\n\n        interpretations = []\n        for inp in inputs:\n            score = self.modality_weight.get(inp.modality, 0.5)\n            interpretations.append({\n                \"source\": inp.modality.value,\n                \"content\": inp.content,\n                \"weight\": score,\n            })\n\n        best = max(interpretations, key=lambda x: x[\"weight\"])\n        return {\n            \"intent\": best[\"content\"],\n            \"confidence\": best[\"weight\"],\n            \"all_inputs\": interpretations,\n        }\n\n    def detect_conflict(self, inputs: List[UserInput]) -> Optional[str]:\n        \"\"\"Check if different modalities contradict each other.\"\"\"\n        texts = [str(inp.content).lower() for inp in inputs]\n        unique_texts = set(texts)\n        if len(unique_texts) > 1:\n            return f\"Conflict detected across {len(unique_texts)} interpretations\"\n        return None\n\nfusion = MultiModalFusion()\ntest_inputs = [\n    UserInput(content=\"Show me sales data\", modality=InputModality.TEXT),\n    UserInput(content=\"display quarterly report\", modality=InputModality.VOICE),\n]\nresult = fusion.fuse(test_inputs)\nprint(f\"Fused intent: {result['intent']}\")\nprint(f\"Confidence: {result['confidence']}\")\nconflict = fusion.detect_conflict(test_inputs)\nprint(f\"Conflict: {conflict}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Optional\nfrom enum import Enum\n\nclass DialogState(Enum):\n    GREETING = \"greeting\"\n    COLLECTING_INPUT = \"collecting_input\"\n    CLARIFYING = \"clarifying\"\n    PROCESSING = \"processing\"\n    CONFIRMING = \"confirming\"\n    COMPLETE = \"complete\"\n    ERROR = \"error\"\n\n@dataclass\nclass ConversationTurn:\n    user_message: str\n    assistant_message: str\n    state: DialogState\n    confidence: float = 1.0\n\nclass ConversationalAgent:\n    \"\"\"Manages multi-turn dialogue with clarification loops.\"\"\"\n\n    def __init__(self, system_prompt: str):\n        self.system_prompt = system_prompt\n        self.history: List[ConversationTurn] = []\n        self.current_state: DialogState = DialogState.GREETING\n        self.slots: dict = {}\n\n    def process_input(self, user_input: str, confidence: float) -> str:\n        \"\"\"Process user input and generate appropriate response.\"\"\"\n        self.current_state = DialogState.COLLECTING_INPUT\n\n        if confidence < 0.6:\n            return self._request_clarification(user_input)\n\n        if self._needs_confirmation(user_input):\n            self.current_state = DialogState.CONFIRMING\n            return self._generate_confirmation(user_input)\n\n        response = self._execute_intent(user_input)\n        self.current_state = DialogState.COMPLETE\n        self.history.append(\n            ConversationTurn(user_input, response, self.current_state, confidence)\n        )\n        return response\n\n    def _request_clarification(self, user_input: str) -> str:\n        \"\"\"Ask user to rephrase when confidence is low.\"\"\"\n        self.current_state = DialogState.CLARIFYING\n        return (\n            f\"I'm not sure I understood. Did you mean:\\n\"\n            f\"1. {user_input} (as typed)\\n\"\n            f\"2. Something else?\\n\"\n            f\"Please rephrase.\"\n        )\n\n    def _needs_confirmation(self, user_input: str) -> bool:\n        \"\"\"Check if the input is ambiguous.\"\"\"\n        ambiguous_phrases = [\"it\", \"that\", \"this\", \"there\", \"the one\"]\n        words = user_input.lower().split()\n        return any(phrase in words for phrase in ambiguous_phrases)\n\n    def _generate_confirmation(self, user_input: str) -> str:\n        \"\"\"Ask user to confirm interpretation.\"\"\"\n        return f\"Just to confirm: you mean '{user_input}'? (yes/no)\"\n\n    def _execute_intent(self, user_input: str) -> str:\n        \"\"\"Execute the understood intent.\"\"\"\n        return f\"Processing: {user_input}. Results will appear shortly.\"\n\nagent = ConversationalAgent(\"You are a helpful data assistant.\")\nprint(agent.process_input(\"Show dashboard\", 0.95))\nprint(agent.process_input(\"Show that\", 0.85))\nprint(agent.process_input(\"blah blah\", 0.30))\n"
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
        children: "import math\nfrom typing import List, Dict, Any\n\nclass UncertaintyCommunicator:\n    \"\"\"Translates model confidence into user-facing messages.\"\"\"\n\n    def __init__(self, high_threshold: float = 0.9,\n                 medium_threshold: float = 0.7):\n        self.high_threshold = high_threshold\n        self.medium_threshold = medium_threshold\n\n    def get_confidence_label(self, score: float) -> str:\n        \"\"\"Map numeric confidence to human-readable label.\"\"\"\n        if score >= self.high_threshold:\n            return \"High confidence\"\n        elif score >= self.medium_threshold:\n            return \"Medium confidence\"\n        else:\n            return \"Low confidence\"\n\n    def get_user_message(self, score: float, prediction: str,\n                          alternatives: List[str] = None) -> str:\n        \"\"\"Generate user-facing message based on confidence.\"\"\"\n        label = self.get_confidence_label(score)\n\n        if score >= self.high_threshold:\n            return f\"I am confident this is {prediction}.\"\n\n        elif score >= self.medium_threshold:\n            alt_text = \"\"\n            if alternatives:\n                alt_text = f\" Could also be: {', '.join(alternatives[:2])}.\"\n            return (\n                f\"I think this is {prediction}, but I'm not certain.{alt_text} \"\n                f\"Please verify.\"\n            )\n\n        else:\n            return (\n                f\"I'm unsure about this. My best guess is {prediction}, \"\n                f\"but confidence is low. Please review manually.\"\n            )\n\n    def calibrate_display(self, score: float) -> Dict[str, Any]:\n        \"\"\"Generate visual calibration data for frontend.\"\"\"\n        color = (\n            \"#22c55e\" if score >= self.high_threshold\n            else \"#eab308\" if score >= self.medium_threshold\n            else \"#ef4444\"\n        )\n        bar_width = int(score * 100)\n        return {\n            \"color\": color,\n            \"bar_width_percent\": bar_width,\n            \"label\": self.get_confidence_label(score),\n            \"show_warning\": score < self.medium_threshold,\n        }\n\ncomm = UncertaintyCommunicator()\nfor confidence in [0.95, 0.78, 0.45]:\n    display = comm.calibrate_display(confidence)\n    message = comm.get_user_message(\n        confidence, \"fraudulent transaction\",\n        [\"legitimate transaction\", \"flagged for review\"]\n    )\n    print(f\"Conf: {confidence:.2f} | Color: {display['color']} | Msg: {message}\")\n"
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
        children: "flowchart LR\n    subgraph Undertrust[Undertrust]\n        A1[AI is correct] --> A2[User ignores]\n        A2 --> A3[User outcome worsens]\n    end\n    subgraph Appropriate[Appropriate Trust]\n        B1[AI is correct] --> B2[User accepts]\n        B1 --> B3[AI is wrong]\n        B3 --> B4[User overrides]\n    end\n    subgraph Overtrust[Overtrust]\n        C1[AI is wrong] --> C2[User accepts blindly]\n        C2 --> C3[User outcome worsens]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List, Tuple\n\n@dataclass\nclass TrustCalibrationResult:\n    trust_state: str  # undertrust | appropriate | overtrust\n    accuracy: float\n    user_follow_rate: float\n    gap_score: float  # difference between trust and capability\n\nclass TrustCalibrator:\n    \"\"\"Measures and calibrates user trust against model capability.\"\"\"\n\n    def __init__(self):\n        self.interactions: List[Tuple[bool, bool]] = []\n        \"\"\"List of (model_was_correct, user_followed_advice)\"\"\"\n\n    def record_interaction(self, model_correct: bool,\n                           user_followed: bool) -> None:\n        \"\"\"Log a single user-AI interaction.\"\"\"\n        self.interactions.append((model_correct, user_followed))\n\n    def analyze_trust(self) -> TrustCalibrationResult:\n        \"\"\"Analyze trust patterns from interaction history.\"\"\"\n        if not self.interactions:\n            return TrustCalibrationResult(\"unknown\", 0, 0, 0)\n\n        total = len(self.interactions)\n        correct = sum(1 for c, _ in self.interactions if c)\n        followed = sum(1 for _, f in self.interactions if f)\n\n        accuracy = correct / total\n        follow_rate = followed / total\n        gap_score = follow_rate - accuracy\n\n        if gap_score < -0.2:\n            trust_state = \"undertrust\"\n        elif gap_score > 0.2:\n            trust_state = \"overtrust\"\n        else:\n            trust_state = \"appropriate\"\n\n        return TrustCalibrationResult(trust_state, accuracy,\n                                       follow_rate, gap_score)\n\n    def generate_recommendation(self) -> str:\n        \"\"\"Generate UX recommendation based on trust analysis.\"\"\"\n        result = self.analyze_trust()\n\n        if result.trust_state == \"undertrust\":\n            return (\n                \"Show accuracy metrics and success stories. \"\n                \"Use smoother animations to build confidence.\"\n            )\n        elif result.trust_state == \"overtrust\":\n            return (\n                \"Increase friction on low-confidence outputs. \"\n                \"Show uncertainty indicators prominently.\"\n            )\n        else:\n            return \"Trust is well-calibrated. Maintain current UX.\"\n\ncalibrator = TrustCalibrator()\n# Simulate interactions: (model_correct, user_followed)\nsimulated = [(True, True), (True, True), (False, True),\n             (True, False), (True, True), (False, False)]\nfor c, f in simulated:\n    calibrator.record_interaction(c, f)\n\nresult = calibrator.analyze_trust()\nprint(f\"Trust state: {result.trust_state}\")\nprint(f\"Accuracy: {result.accuracy:.2f}\")\nprint(f\"Follow rate: {result.follow_rate:.2f}\")\nprint(f\"Gap: {result.gap_score:.2f}\")\nprint(f\"Recommendation: {calibrator.generate_recommendation()}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional\n\n@dataclass\nclass Explanation:\n    prediction: str\n    confidence: float\n    top_factors: List[Dict[str, float]]\n    similar_examples: List[str] = field(default_factory=list)\n    limitations: List[str] = field(default_factory=list)\n\nclass ExplainableAI:\n    \"\"\"Generates human-readable explanations for model outputs.\"\"\"\n\n    def __init__(self, feature_names: List[str]):\n        self.feature_names = feature_names\n\n    def explain_prediction(self, features: List[float],\n                           prediction: str,\n                           confidence: float) -> Explanation:\n        \"\"\"Generate explanation with top contributing factors.\"\"\"\n        contributions = list(zip(self.feature_names, features))\n        contributions.sort(key=lambda x: abs(x[1]), reverse=True)\n        top = [\n            {\"feature\": name, \"importance\": round(val, 3)}\n            for name, val in contributions[:3]\n        ]\n\n        limitations = self._get_limitations(confidence, features)\n\n        return Explanation(\n            prediction=prediction,\n            confidence=confidence,\n            top_factors=top,\n            similar_examples=self._find_examples(features),\n            limitations=limitations,\n        )\n\n    def _get_limitations(self, confidence: float,\n                          features: List[float]) -> List[str]:\n        \"\"\"Identify limitations of the current prediction.\"\"\"\n        limits = []\n        if confidence < 0.7:\n            limits.append(\"Low confidence: prediction may be unreliable\")\n        if max(features) < 0.3:\n            limits.append(\"No strong signal detected in input features\")\n        return limits\n\n    def _find_examples(self, features: List[float]) -> List[str]:\n        \"\"\"Retrieve similar examples from a reference set.\"\"\"\n        return [\n            \"Example A: similar pattern, correct prediction\",\n            \"Example B: similar pattern, review recommended\",\n        ]\n\n    def format_for_user(self, explanation: Explanation) -> str:\n        \"\"\"Format explanation for display in UI.\"\"\"\n        factors = \"\\n\".join(\n            f\"  - {f['feature']}: {f['importance']:.3f}\"\n            for f in explanation.top_factors\n        )\n        limits = \"\"\n        if explanation.limitations:\n            limits = \"\\nLimitations:\\n\" + \"\\n\".join(\n                f\"  - {l}\" for l in explanation.limitations\n            )\n        return (\n            f\"Prediction: {explanation.prediction}\\n\"\n            f\"Confidence: {explanation.confidence:.0%}\\n\"\n            f\"Top factors:\\n{factors}{limits}\"\n        )\n\nxai = ExplainableAI([\"amount\", \"frequency\", \"location\", \"device_score\"])\nfeatures = [0.85, 0.12, 0.67, 0.93]\nexplanation = xai.explain_prediction(features, \"Fraud Likely\", 0.88)\nprint(xai.format_for_user(explanation))\n"
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
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass\nclass TrustSignal:\n    \"\"\"Configuration for trust-related UI signals.\"\"\"\n    show_confidence_badge: bool = True\n    show_explanation_button: bool = True\n    show_alternative_options: bool = False\n    require_confirmation: bool = False\n    show_uncertainty_range: bool = False\n\ndef get_trust_ui_config(confidence: float,\n                         domain_risk: str = \"low\") -> TrustSignal:\n    \"\"\"Dynamically configure UI elements based on confidence and risk.\"\"\"\n    config = TrustSignal()\n\n    if confidence >= 0.95:\n        config.show_confidence_badge = True\n        config.show_explanation_button = True\n        config.show_alternative_options = False\n        config.require_confirmation = False\n\n    elif confidence >= 0.80:\n        config.show_confidence_badge = True\n        config.show_explanation_button = True\n        config.show_alternative_options = True\n        config.show_uncertainty_range = True\n\n    elif confidence >= 0.60:\n        config.show_confidence_badge = True\n        config.show_explanation_button = True\n        config.show_alternative_options = True\n        config.show_uncertainty_range = True\n        config.require_confirmation = (domain_risk == \"high\")\n\n    else:\n        config.show_confidence_badge = True\n        config.show_explanation_button = True\n        config.show_alternative_options = True\n        config.require_confirmation = True\n        config.show_uncertainty_range = True\n\n    return config\n\nfor conf, risk in [(0.97, \"low\"), (0.85, \"medium\"), (0.55, \"high\")]:\n    cfg = get_trust_ui_config(conf, risk)\n    print(f\"\\nConf={conf:.2f}, Risk={risk}:\")\n    print(f\"  Badge={cfg.show_confidence_badge}, \"\n          f\"Explain={cfg.show_explanation_button}, \"\n          f\"Confirm={cfg.require_confirmation}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional\nfrom enum import Enum\nimport time\nimport statistics\n\nclass FeedbackType(Enum):\n    EXPLICIT_THUMBS = \"explicit_thumbs\"\n    EXPLICIT_RATING = \"explicit_rating\"\n    IMPLICIT_CLICK = \"implicit_click\"\n    IMPLICIT_DWELL = \"implicit_dwell_time\"\n    IMPLICIT_SCROLL = \"implicit_scroll_depth\"\n    IMPLICIT_CONVERSION = \"implicit_conversion\"\n\n@dataclass\nclass FeedbackSignal:\n    feedback_type: FeedbackType\n    value: float\n    user_id: str\n    item_id: str\n    timestamp: float = field(default_factory=time.time)\n    context: Dict[str, str] = field(default_factory=dict)\n\nclass FeedbackCollector:\n    \"\"\"Collects and normalizes feedback from multiple sources.\"\"\"\n\n    def __init__(self):\n        self.signals: List[FeedbackSignal] = []\n\n    def record(self, signal: FeedbackSignal) -> None:\n        \"\"\"Record a feedback signal.\"\"\"\n        self.signals.append(signal)\n\n    def get_explicit_score(self, item_id: str) -> Optional[float]:\n        \"\"\"Calculate average explicit rating for an item.\"\"\"\n        relevant = [\n            s for s in self.signals\n            if s.item_id == item_id\n            and s.feedback_type in (FeedbackType.EXPLICIT_THUMBS,\n                                     FeedbackType.EXPLICIT_RATING)\n        ]\n        if not relevant:\n            return None\n        scores = [s.value for s in relevant]\n        return statistics.mean(scores)\n\n    def get_implicit_score(self, item_id: str) -> Optional[float]:\n        \"\"\"Calculate implicit engagement score for an item.\"\"\"\n        relevant = [\n            s for s in self.signals if s.item_id == item_id\n        ]\n        if not relevant:\n            return None\n        normalized = []\n        for s in relevant:\n            if s.feedback_type == FeedbackType.IMPLICIT_DWELL:\n                normalized.append(min(s.value / 30.0, 1.0))\n            elif s.feedback_type == FeedbackType.IMPLICIT_CLICK:\n                normalized.append(1.0 if s.value > 0 else 0.0)\n            elif s.feedback_type == FeedbackType.IMPLICIT_SCROLL:\n                normalized.append(min(s.value, 1.0))\n        return statistics.mean(normalized) if normalized else None\n\n    def hybrid_score(self, item_id: str,\n                      explicit_weight: float = 0.6) -> float:\n        \"\"\"Combine explicit and implicit signals into one score.\"\"\"\n        explicit = self.get_explicit_score(item_id)\n        implicit = self.get_implicit_score(item_id)\n        if explicit is not None and implicit is not None:\n            return explicit * explicit_weight + implicit * (1 - explicit_weight)\n        return explicit or implicit or 0.5\n\ncollector = FeedbackCollector()\ncollector.record(FeedbackSignal(FeedbackType.EXPLICIT_THUMBS, 1.0,\n                                 \"user1\", \"item_42\"))\ncollector.record(FeedbackSignal(FeedbackType.IMPLICIT_DWELL, 45.0,\n                                 \"user2\", \"item_42\"))\ncollector.record(FeedbackSignal(FeedbackType.IMPLICIT_SCROLL, 0.8,\n                                 \"user3\", \"item_42\"))\nprint(f\"Explicit: {collector.get_explicit_score('item_42')}\")\nprint(f\"Implicit: {collector.get_implicit_score('item_42')}\")\nprint(f\"Hybrid: {collector.hybrid_score('item_42'):.3f}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Tuple\nimport random\n\n@dataclass\nclass PreferencePair:\n    item_a: str\n    item_b: str\n    preferred: str  # \"a\", \"b\", or \"tie\"\n    user_id: str\n    context: str = \"\"\n\nclass PreferenceLearner:\n    \"\"\"Learn user preferences from pairwise comparisons.\"\"\"\n\n    def __init__(self):\n        self.pairs: List[PreferencePair] = []\n        self.scores: Dict[str, float] = {}\n\n    def record_preference(self, pair: PreferencePair) -> None:\n        \"\"\"Record a single pairwise preference.\"\"\"\n        self.pairs.append(pair)\n        self._update_scores()\n\n    def _update_scores(self) -> None:\n        \"\"\"Recalculate Elo-like scores from all comparisons.\"\"\"\n        items = set()\n        for p in self.pairs:\n            items.add(p.item_a)\n            items.add(p.item_b)\n\n        self.scores = {item: 1000.0 for item in items}\n        k_factor = 32\n\n        for p in self.pairs:\n            if p.preferred == \"tie\":\n                continue\n\n            expected_a = 1.0 / (1.0 + 10 ** (\n                (self.scores[p.item_b] - self.scores[p.item_a]) / 400.0\n            ))\n            expected_b = 1.0 - expected_a\n\n            if p.preferred == \"a\":\n                self.scores[p.item_a] += k_factor * (1.0 - expected_a)\n                self.scores[p.item_b] += k_factor * (0.0 - expected_b)\n            else:\n                self.scores[p.item_a] += k_factor * (0.0 - expected_a)\n                self.scores[p.item_b] += k_factor * (1.0 - expected_b)\n\n    def get_ranking(self) -> List[Tuple[str, float]]:\n        \"\"\"Return items sorted by preference score.\"\"\"\n        return sorted(self.scores.items(),\n                       key=lambda x: x[1], reverse=True)\n\n    def get_top_n(self, n: int = 5) -> List[str]:\n        \"\"\"Return top N preferred items.\"\"\"\n        ranking = self.get_ranking()\n        return [item for item, _ in ranking[:n]]\n\nlearner = PreferenceLearner()\nitems = [\"response_A\", \"response_B\", \"response_C\",\n         \"response_D\", \"response_E\"]\nfor _ in range(20):\n    a, b = random.sample(items, 2)\n    preferred = random.choice([\"a\", \"b\", \"tie\"])\n    learner.record_preference(PreferencePair(a, b, preferred, \"user1\"))\n\nranking = learner.get_ranking()\nprint(\"Preference ranking:\")\nfor item, score in ranking:\n    print(f\"  {item}: {score:.1f}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Tuple\nimport json\n\n@dataclass\nclass RLHFSample:\n    prompt: str\n    response_a: str\n    response_b: str\n    preferred: str  # \"a\" or \"b\"\n    rater_id: str\n    metadata: Dict = field(default_factory=dict)\n\nclass RLHFDataPipeline:\n    \"\"\"Prepares human preference data for reward model training.\"\"\"\n\n    def __init__(self):\n        self.samples: List[RLHFSample] = []\n\n    def add_comparison(self, sample: RLHFSample) -> None:\n        \"\"\"Add a human comparison to the dataset.\"\"\"\n        self.samples.append(sample)\n\n    def export_for_training(self) -> str:\n        \"\"\"Export data in standard RLHF JSONL format.\"\"\"\n        records = []\n        for s in self.samples:\n            chosen = s.response_a if s.preferred == \"a\" else s.response_b\n            rejected = s.response_b if s.preferred == \"a\" else s.response_a\n            records.append({\n                \"prompt\": s.prompt,\n                \"chosen\": chosen,\n                \"rejected\": rejected,\n                \"rater\": s.rater_id,\n            })\n        return json.dumps(records, indent=2)\n\n    def compute_inter_rater_agreement(self) -> float:\n        \"\"\"Simple agreement score when multiple raters judge same pair.\"\"\"\n        prompt_groups: Dict[str, List[str]] = {}\n        for s in self.samples:\n            key = f\"{s.prompt}|{s.response_a}|{s.response_b}\"\n            if key not in prompt_groups:\n                prompt_groups[key] = []\n            prompt_groups[key].append(s.preferred)\n\n        agreements = 0\n        total = 0\n        for key, prefs in prompt_groups.items():\n            if len(prefs) < 2:\n                continue\n            total += 1\n            if len(set(prefs)) == 1:\n                agreements += 1\n\n        return agreements / total if total > 0 else 0.0\n\npipeline = RLHFDataPipeline()\npipeline.add_comparison(RLHFSample(\n    \"Explain quantum computing\",\n    \"Quantum computing uses qubits...\",\n    \"Quantum computers are fast...\",\n    \"a\", \"rater_1\"\n))\npipeline.add_comparison(RLHFSample(\n    \"Explain quantum computing\",\n    \"Quantum computing uses qubits...\",\n    \"Quantum computers are fast...\",\n    \"a\", \"rater_2\"\n))\nprint(f\"Inter-rater agreement: {pipeline.compute_inter_rater_agreement()}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Optional, Callable, Any\nfrom enum import Enum\nimport time\n\nclass ServiceLevel(Enum):\n    FULL = \"full\"            # AI operating at peak\n    DEGRADED = \"degraded\"    # AI partially available\n    FALLBACK = \"fallback\"    # Rule-based or cached response\n    OFFLINE = \"offline\"      # No AI, return error message\n\n@dataclass\nclass AIResponse:\n    content: Any\n    service_level: ServiceLevel\n    latency_ms: float\n    warning: Optional[str] = None\n\nclass GracefulDegradation:\n    \"\"\"Manages service level transitions when AI components fail.\"\"\"\n\n    def __init__(self):\n        self.current_level: ServiceLevel = ServiceLevel.FULL\n        self.fallback_handlers: Dict[ServiceLevel, Callable] = {}\n        self.consecutive_failures: int = 0\n        self.failure_threshold: int = 3\n\n    def register_fallback(self, level: ServiceLevel,\n                           handler: Callable) -> None:\n        \"\"\"Register a handler for a specific service level.\"\"\"\n        self.fallback_handlers[level] = handler\n\n    def process_request(self, primary_fn: Callable,\n                         user_input: str) -> AIResponse:\n        \"\"\"Process request with automatic degradation on failure.\"\"\"\n        start = time.time()\n\n        if self.current_level == ServiceLevel.OFFLINE:\n            return AIResponse(\n                content=\"AI service is temporarily unavailable.\",\n                service_level=ServiceLevel.OFFLINE,\n                latency_ms=(time.time() - start) * 1000,\n                warning=\"Service offline. Please try again later.\"\n            )\n\n        try:\n            result = primary_fn(user_input)\n\n            if self.current_level != ServiceLevel.FULL:\n                self.consecutive_failures = 0\n                self.current_level = ServiceLevel.FULL\n\n            return AIResponse(\n                content=result,\n                service_level=self.current_level,\n                latency_ms=(time.time() - start) * 1000,\n            )\n\n        except Exception as e:\n            self.consecutive_failures += 1\n            level = self._determine_level()\n            self.current_level = level\n\n            if level in self.fallback_handlers:\n                fallback_result = self.fallback_handlers[level](user_input)\n                return AIResponse(\n                    content=fallback_result,\n                    service_level=level,\n                    latency_ms=(time.time() - start) * 1000,\n                    warning=f\"AI unavailable. Using fallback. ({str(e)})\"\n                )\n\n            return AIResponse(\n                content=\"Unable to process. Please try again.\",\n                service_level=level,\n                latency_ms=(time.time() - start) * 1000,\n                warning=f\"Error: {str(e)}\"\n            )\n\n    def _determine_level(self) -> ServiceLevel:\n        \"\"\"Determine service level based on failure count.\"\"\"\n        if self.consecutive_failures >= 5:\n            return ServiceLevel.OFFLINE\n        elif self.consecutive_failures >= self.failure_threshold:\n            return ServiceLevel.FALLBACK\n        return ServiceLevel.DEGRADED\n\ndef ai_call(text: str) -> str:\n    \"\"\"Simulate an AI call that sometimes fails.\"\"\"\n    if hash(text) % 3 == 0:\n        raise TimeoutError(\"AI model timed out\")\n    return f\"AI response to: {text}\"\n\ndef cached_fallback(text: str) -> str:\n    \"\"\"Return a cached or template response.\"\"\"\n    return f\"Cached response for similar query.\"\n\ndegrader = GracefulDegradation()\ndegrader.register_fallback(ServiceLevel.DEGRADED, cached_fallback)\ndegrader.register_fallback(ServiceLevel.FALLBACK, cached_fallback)\n\nfor query in [\"hello\", \"test\", \"fail1\", \"fail2\", \"fail3\",\n              \"fail4\", \"fail5\"]:\n    response = degrader.process_request(ai_call, query)\n    print(f\"[{response.service_level.value:10s}] {response.content[:40]:40s} \"\n          f\"| {response.latency_ms:.0f}ms\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Optional, Tuple\nfrom enum import Enum\n\nclass DecisionType(Enum):\n    AUTO_APPROVE = \"auto_approve\"\n    HUMAN_REVIEW = \"human_review\"\n    ESCALATE = \"escalate\"\n\n@dataclass\nclass DecisionResult:\n    decision: str\n    confidence: float\n    decision_type: DecisionType\n    reason: str\n    requires_human: bool = True\n\nclass HumanInTheLoop:\n    \"\"\"Manages AI vs human decision routing based on confidence.\"\"\"\n\n    def __init__(self, auto_threshold: float = 0.95,\n                 review_threshold: float = 0.80):\n        self.auto_threshold = auto_threshold\n        self.review_threshold = review_threshold\n        self.human_review_queue: List[dict] = []\n        self.auto_decisions: int = 0\n        self.human_reviews: int = 0\n\n    def evaluate(self, prediction: str, confidence: float,\n                  context: dict = None) -> DecisionResult:\n        \"\"\"Route decision based on model confidence.\"\"\"\n        if confidence >= self.auto_threshold:\n            self.auto_decisions += 1\n            return DecisionResult(\n                decision=prediction,\n                confidence=confidence,\n                decision_type=DecisionType.AUTO_APPROVE,\n                reason=\"Confidence above auto-approval threshold\",\n                requires_human=False,\n            )\n\n        elif confidence >= self.review_threshold:\n            self.human_reviews += 1\n            entry = {\n                \"prediction\": prediction,\n                \"confidence\": confidence,\n                \"context\": context or {},\n                \"status\": \"pending_review\",\n            }\n            self.human_review_queue.append(entry)\n            return DecisionResult(\n                decision=prediction,\n                confidence=confidence,\n                decision_type=DecisionType.HUMAN_REVIEW,\n                reason=(\n                    f\"Confidence {confidence:.2f} requires human review. \"\n                    f\"Queued for review.\"\n                ),\n                requires_human=True,\n            )\n\n        else:\n            self.human_reviews += 1\n            return DecisionResult(\n                decision=\"REJECTED\",\n                confidence=confidence,\n                decision_type=DecisionType.ESCALATE,\n                reason=(\n                    f\"Confidence too low ({confidence:.2f}). \"\n                    f\"Escalated to human decision.\"\n                ),\n                requires_human=True,\n            )\n\n    def resolve_review(self, review_id: int,\n                        human_decision: Optional[str]) -> None:\n        \"\"\"Resolve a human review queue item.\"\"\"\n        if 0 <= review_id < len(self.human_review_queue):\n            self.human_review_queue[review_id][\"status\"] = \"resolved\"\n            self.human_review_queue[review_id][\"human_decision\"] = human_decision\n\n    def stats(self) -> dict:\n        \"\"\"Return routing statistics.\"\"\"\n        total = self.auto_decisions + self.human_reviews\n        return {\n            \"total\": total,\n            \"auto_approved\": self.auto_decisions,\n            \"human_reviewed\": self.human_reviews,\n            \"auto_rate\": self.auto_decisions / total if total else 0,\n        }\n\nhitl = HumanInTheLoop()\nscenarios = [(\"Approve\", 0.97), (\"Flag\", 0.85), (\"Review\", 0.65),\n              (\"Approve\", 0.99), (\"Flag\", 0.72)]\nfor pred, conf in scenarios:\n    result = hitl.evaluate(pred, conf)\n    print(f\"{pred:10s} conf={conf:.2f} -> \"\n          f\"{result.decision_type.value:15s} human={result.requires_human}\")\n\nprint(f\"\\nStats: {hitl.stats()}\")\n"
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
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass\nclass AIErrorMessage:\n    title: str\n    description: str\n    recovery_action: str\n    error_code: str\n    is_actionable: bool = True\n    show_details: bool = False\n\nclass AIErrorMessenger:\n    \"\"\"Generates user-friendly error messages for AI failures.\"\"\"\n\n    ERROR_TEMPLATES = {\n        \"model_timeout\": AIErrorMessage(\n            title=\"AI is taking longer than expected\",\n            description=\"The model needs more time to process your request.\",\n            recovery_action=\"Please try again or simplify your query.\",\n            error_code=\"E001\",\n            is_actionable=True,\n        ),\n        \"low_confidence\": AIErrorMessage(\n            title=\"AI is uncertain about this result\",\n            description=\"Confidence is below our safety threshold.\",\n            recovery_action=\"A human reviewer will verify this result.\",\n            error_code=\"E002\",\n            is_actionable=False,\n        ),\n        \"context_overflow\": AIErrorMessage(\n            title=\"Input is too long\",\n            description=\"Your request exceeds the AI's context window.\",\n            recovery_action=\"Shorten your input or split it into parts.\",\n            error_code=\"E003\",\n            is_actionable=True,\n        ),\n        \"offensive_content\": AIErrorMessage(\n            title=\"Input flagged by safety filters\",\n            description=\"Content may violate usage policies.\",\n            recovery_action=\"Modify your input and try again.\",\n            error_code=\"E004\",\n            is_actionable=True,\n        ),\n        \"model_unavailable\": AIErrorMessage(\n            title=\"AI service is temporarily unavailable\",\n            description=\"The model server is experiencing issues.\",\n            recovery_action=\"Please try again in a few minutes.\",\n            error_code=\"E005\",\n            is_actionable=True,\n            show_details=True,\n        ),\n    }\n\n    def get_message(self, error_key: str,\n                     details: Optional[str] = None) -> dict:\n        \"\"\"Get a formatted error message for the user.\"\"\"\n        template = self.ERROR_TEMPLATES.get(\n            error_key,\n            AIErrorMessage(\n                title=\"Unexpected error\",\n                description=\"Something went wrong.\",\n                recovery_action=\"Please try again or contact support.\",\n                error_code=\"E999\",\n            )\n        )\n\n        message = {\n            \"title\": template.title,\n            \"description\": template.description,\n            \"recovery_action\": template.recovery_action,\n            \"error_code\": template.error_code,\n            \"is_actionable\": template.is_actionable,\n        }\n\n        if template.show_details and details:\n            message[\"details\"] = details\n\n        return message\n\nmessenger = AIErrorMessenger()\nfor error_type in [\"model_timeout\", \"low_confidence\", \"offensive_content\"]:\n    msg = messenger.get_message(error_type)\n    print(f\"\\n[{msg['error_code']}] {msg['title']}\")\n    print(f\"  {msg['description']}\")\n    print(f\"  Action: {msg['recovery_action']}\")\n"
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
        children: "from typing import Generator, List\nimport time\n\nclass StreamHandler:\n    \"\"\"Manages streaming AI response UX.\"\"\"\n\n    def __init__(self):\n        self.buffer: str = \"\"\n        self.chunks_received: int = 0\n        self.total_latency_ms: float = 0.0\n\n    def simulate_stream(self, text: str,\n                         chunk_size: int = 5) -> Generator[str, None, None]:\n        \"\"\"Simulate token-by-token streaming.\"\"\"\n        words = text.split()\n        for i in range(0, len(words), chunk_size):\n            chunk = \" \".join(words[i:i + chunk_size])\n            time.sleep(0.05)\n            yield chunk + \" \"\n\n    def process_stream(self, stream: Generator[str, None, None]) -> List[dict]:\n        \"\"\"Process stream and generate UX events.\"\"\"\n        events = []\n        start = time.time()\n\n        for chunk in stream:\n            self.buffer += chunk\n            self.chunks_received += 1\n            elapsed = (time.time() - start) * 1000\n            self.total_latency_ms = elapsed\n\n            events.append({\n                \"type\": \"stream_chunk\",\n                \"content\": chunk,\n                \"buffer_length\": len(self.buffer),\n                \"elapsed_ms\": round(elapsed, 1),\n                \"is_final\": False,\n            })\n\n        events.append({\n            \"type\": \"stream_complete\",\n            \"full_content\": self.buffer,\n            \"total_chunks\": self.chunks_received,\n            \"total_latency_ms\": round(self.total_latency_ms, 1),\n            \"is_final\": True,\n        })\n\n        return events\n\n    def get_ux_state(self) -> dict:\n        \"\"\"Return current UX state for frontend rendering.\"\"\"\n        return {\n            \"display_text\": self.buffer,\n            \"is_streaming\": self.chunks_received > 0,\n            \"progress_indicators\": {\n                \"dots\": \".\" * (self.chunks_received % 4),\n                \"spinner_rotation\": (self.chunks_received * 45) % 360,\n            },\n        }\n\nhandler = StreamHandler()\nresponse = \"User experience design for AI systems requires careful attention.\"\nstream = handler.simulate_stream(response, chunk_size=3)\nevents = handler.process_stream(stream)\nfor e in events:\n    if e[\"type\"] == \"stream_chunk\":\n        print(f\"[{e['elapsed_ms']:6.1f}ms] Chunk: '{e['content'].strip()}'\")\n    else:\n        print(f\"\\nComplete in {e['total_latency_ms']}ms | \"\n              f\"{e['total_chunks']} chunks\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Callable\nfrom enum import Enum\nimport time\nimport uuid\n\nclass BatchStatus(Enum):\n    QUEUED = \"queued\"\n    PROCESSING = \"processing\"\n    COMPLETED = \"completed\"\n    FAILED = \"failed\"\n\n@dataclass\nclass BatchJob:\n    job_id: str = field(default_factory=lambda: uuid.uuid4().hex[:8])\n    status: BatchStatus = BatchStatus.QUEUED\n    progress: float = 0.0\n    items_total: int = 0\n    items_completed: int = 0\n    result: Optional[Dict] = None\n    error: Optional[str] = None\n    created_at: float = field(default_factory=time.time)\n    completed_at: Optional[float] = None\n\nclass BatchProcessorUX:\n    \"\"\"Manages UX state for batch AI processing.\"\"\"\n\n    def __init__(self):\n        self.jobs: Dict[str, BatchJob] = {}\n\n    def submit_job(self, items: List[str]) -> BatchJob:\n        \"\"\"Submit a batch job and return tracking info.\"\"\"\n        job = BatchJob(items_total=len(items))\n        self.jobs[job.job_id] = job\n        return job\n\n    def process_item(self, job_id: str, processor: Callable) -> None:\n        \"\"\"Process one item and update UX state.\"\"\"\n        job = self.jobs.get(job_id)\n        if not job:\n            return\n\n        job.status = BatchStatus.PROCESSING\n        job.items_completed += 1\n        job.progress = job.items_completed / job.items_total\n\n    def complete_job(self, job_id: str, result: Dict) -> None:\n        \"\"\"Mark job as completed.\"\"\"\n        job = self.jobs.get(job_id)\n        if not job:\n            return\n        job.status = BatchStatus.COMPLETED\n        job.result = result\n        job.completed_at = time.time()\n\n    def get_ux_display(self, job_id: str) -> Dict:\n        \"\"\"Generate progress display data for frontend.\"\"\"\n        job = self.jobs.get(job_id)\n        if not job:\n            return {\"error\": \"Job not found\"}\n\n        eta_seconds = None\n        if job.status == BatchStatus.PROCESSING and job.items_completed > 0:\n            elapsed = time.time() - job.created_at\n            rate = job.items_completed / elapsed\n            remaining = job.items_total - job.items_completed\n            eta_seconds = remaining / rate if rate > 0 else None\n\n        return {\n            \"job_id\": job.job_id,\n            \"status\": job.status.value,\n            \"progress_percent\": round(job.progress * 100, 1),\n            \"items\": f\"{job.items_completed}/{job.items_total}\",\n            \"eta_seconds\": round(eta_seconds) if eta_seconds else None,\n            \"progress_bar\": \"█\" * int(job.progress * 20) +\n                            \"░\" * (20 - int(job.progress * 20)),\n        }\n\nbatch_ux = BatchProcessorUX()\njob = batch_ux.submit_job([\"item1\", \"item2\", \"item3\", \"item4\", \"item5\"])\nfor i in range(5):\n    batch_ux.process_item(job.job_id, lambda x: x)\n    display = batch_ux.get_ux_display(job.job_id)\n    print(f\"[{display['status']:12s}] {display['progress_bar']} \"\n          f\"{display['progress_percent']}% ({display['items']})\")\n\nbatch_ux.complete_job(job.job_id, {\"summary\": \"All items processed\"})\nprint(f\"\\nFinal: {batch_ux.get_ux_display(job.job_id)}\")\n"
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
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional\nfrom enum import Enum\nimport time\nimport asyncio\n\nclass ProcessingMode(Enum):\n    REALTIME = \"realtime\"      # < 1 second\n    NEAR_REALTIME = \"near_realtime\"  # 1-5 seconds\n    BACKGROUND = \"background\"  # > 5 seconds\n\n@dataclass\nclass AIRequest:\n    query: str\n    mode: ProcessingMode\n    submitted_at: float = field(default_factory=time.time)\n    completed_at: Optional[float] = None\n    result: Optional[str] = None\n    estimated_duration_ms: float = 100.0\n\nclass ModeAwareUX:\n    \"\"\"Adapts UX patterns based on processing mode.\"\"\"\n\n    MODE_PATTERNS = {\n        ProcessingMode.REALTIME: {\n            \"show_spinner\": False,\n            \"show_skeleton\": True,\n            \"allow_refetch\": False,\n            \"timeout_ms\": 2000,\n            \"ux_pattern\": \"instant_result\",\n        },\n        ProcessingMode.NEAR_REALTIME: {\n            \"show_spinner\": True,\n            \"show_skeleton\": True,\n            \"allow_refetch\": True,\n            \"timeout_ms\": 8000,\n            \"ux_pattern\": \"progress_indicator\",\n        },\n        ProcessingMode.BACKGROUND: {\n            \"show_spinner\": False,\n            \"show_skeleton\": False,\n            \"allow_refetch\": True,\n            \"timeout_ms\": 300000,\n            \"ux_pattern\": \"notification_on_complete\",\n        },\n    }\n\n    def get_ux_instructions(self, request: AIRequest) -> dict:\n        \"\"\"Return UX instructions based on processing mode.\"\"\"\n        return self.MODE_PATTERNS.get(request.mode, self.MODE_PATTERNS[ProcessingMode.BACKGROUND])\n\n    def simulate_processing(self, request: AIRequest) -> AIRequest:\n        \"\"\"Simulate processing with appropriate UX state.\"\"\"\n        delay = request.estimated_duration_ms / 1000.0\n        time.sleep(min(delay, 2.0))\n        request.completed_at = time.time()\n        request.result = f\"Result for: {request.query[:30]}\"\n        return request\n\nux = ModeAwareUX()\nfor mode in ProcessingMode:\n    req = AIRequest(query=f\"Test query for {mode.value}\",\n                     mode=mode,\n                     estimated_duration_ms={\n                         ProcessingMode.REALTIME: 200,\n                         ProcessingMode.NEAR_REALTIME: 3000,\n                         ProcessingMode.BACKGROUND: 60000,\n                     }[mode])\n    instructions = ux.get_ux_instructions(req)\n    print(f\"\\nMode: {mode.value}\")\n    print(f\"  Pattern: {instructions['ux_pattern']}\")\n    print(f\"  Spinner: {instructions['show_spinner']}\")\n    print(f\"  Timeout: {instructions['timeout_ms']}ms\")\n"
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
      children: "A. Make users trust AI as much as possible\nB. Align user reliance with actual AI capability\nC. Eliminate all human oversight of AI decisions\nD. Maximize the number of AI auto-approvals"
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
      children: "A. Star rating\nB. Thumbs up/down\nC. Dwell time on content\nD. Survey response"
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
      children: "A. Show a loading spinner until complete\nB. Display content incrementally as it arrives\nC. Batch all output and show at once\nD. Only show the final summary"
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
      children: "A. Auto-approve the decision\nB. Return an error message\nC. Route to human review or reject\nD. Lower the threshold dynamically"
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
      children: "A. Absolute numeric ratings (1-10)\nB. Pairwise comparisons (A vs B)\nC. Free-text feedback analysis\nD. Click-through rate tracking"
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
        children: "The time complexity of the standard approach to User Experience for AI is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing User Experience for AI is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of User Experience for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on User Experience for AI (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real User Experience for AI problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements User Experience for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for User Experience for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on User Experience for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how User Experience for AI fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how User Experience for AI is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where User Experience for AI is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of User Experience for AI, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is User Experience for AI asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing User Experience for AI."
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
        children: "User Experience for AI appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding User Experience for AI helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the User Experience for AI concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, User Experience for AI skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply User Experience for AI to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Experience for AI is like a recipe"
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
        }), " — this chapter contributes the User Experience for AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of User Experience for AI code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on User Experience for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in User Experience for AI code."]
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
        }), " or your IDE's debugger to step through the User Experience for AI example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for User Experience for AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core User Experience for AI logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses User Experience for AI daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": User Experience for AI patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": User Experience for AI principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": User Experience for AI shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect User Experience for AI to the business outcome, not just the code."]
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