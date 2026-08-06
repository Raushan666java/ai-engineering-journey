"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59233],{

/***/ 95778
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_17_modern_ai_md_7e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-17-modern-ai-md-7e3.json
const site_docs_courses_artificial_intelligence_17_modern_ai_md_7e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/17-modern-ai","title":"Chapter 17: Modern Artificial Intelligence","description":"Previous Expert Systems | Next Applications of AI","source":"@site/docs/courses/artificial-intelligence/17-modern-ai.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/17-modern-ai","permalink":"/ai-engineering-journey/artificial-intelligence/17-modern-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"id":"17-modern-ai","slug":"/artificial-intelligence/17-modern-ai","title":"Chapter 17: Modern Artificial Intelligence","sidebar_label":"Chapter 17: Modern Artificial Intelligence","sidebar_position":25},"sidebar":"coursesSidebar","previous":{"title":"Chapter 16: Expert Systems","permalink":"/ai-engineering-journey/artificial-intelligence/16-expert-systems"},"next":{"title":"Chapter 18: Applications of Artificial Intelligence","permalink":"/ai-engineering-journey/artificial-intelligence/18-ai-applications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/17-modern-ai.md


const frontMatter = {
	id: '17-modern-ai',
	slug: '/artificial-intelligence/17-modern-ai',
	title: 'Chapter 17: Modern Artificial Intelligence',
	sidebar_label: 'Chapter 17: Modern Artificial Intelligence',
	sidebar_position: 25
};
const contentTitle = 'Chapter 17: Modern Artificial Intelligence';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Modern AI Matters",
  "id": "why-modern-ai-matters",
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
  "value": "17.1 The Deep Learning Revolution",
  "id": "171-the-deep-learning-revolution",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "What is Deep Learning?",
  "id": "what-is-deep-learning",
  "level": 3
}, {
  "value": "Algorithm: Training a Neural Network via Gradient Descent",
  "id": "algorithm-training-a-neural-network-via-gradient-descent",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run Trace Table: Forward Pass",
  "id": "dry-run-trace-table-forward-pass",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "17.2 Generative AI",
  "id": "172-generative-ai",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "What is Generative AI?",
  "id": "what-is-generative-ai",
  "level": 3
}, {
  "value": "Algorithm: Autoregressive Text Generation",
  "id": "algorithm-autoregressive-text-generation",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run Trace Table: Generating &quot;The cat&quot;",
  "id": "dry-run-trace-table-generating-the-cat",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "17.3 Large Language Models (LLMs)",
  "id": "173-large-language-models-llms",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "What are Large Language Models?",
  "id": "what-are-large-language-models",
  "level": 3
}, {
  "value": "Algorithm: Next-Token Prediction Training (GPT-style)",
  "id": "algorithm-next-token-prediction-training-gpt-style",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run Trace Table: Self-Attention for &quot;I love AI&quot;",
  "id": "dry-run-trace-table-self-attention-for-i-love-ai",
  "level": 3
}, {
  "value": "Python Implementation: Single-Head Self-Attention",
  "id": "python-implementation-single-head-self-attention",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "17.4 Foundation Models",
  "id": "174-foundation-models",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "What are Foundation Models?",
  "id": "what-are-foundation-models",
  "level": 3
}, {
  "value": "Algorithm: Pre-train → Fine-tune → RLHF Pipeline",
  "id": "algorithm-pre-train--fine-tune--rlhf-pipeline",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run Trace Table: Pre-training Loss over Steps",
  "id": "dry-run-trace-table-pre-training-loss-over-steps",
  "level": 3
}, {
  "value": "Python Implementation: Simplified Fine-tuning Loop",
  "id": "python-implementation-simplified-fine-tuning-loop",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "17.5 Multimodal AI",
  "id": "175-multimodal-ai",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "What is Multimodal AI?",
  "id": "what-is-multimodal-ai",
  "level": 3
}, {
  "value": "Algorithm: CLIP Contrastive Pre-training",
  "id": "algorithm-clip-contrastive-pre-training",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run Trace Table: CLIP Contrastive Loss",
  "id": "dry-run-trace-table-clip-contrastive-loss",
  "level": 3
}, {
  "value": "Python Implementation: CLIP-style Contrastive Loss",
  "id": "python-implementation-clip-style-contrastive-loss",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "17.6 AI Agents",
  "id": "176-ai-agents",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "What are AI Agents?",
  "id": "what-are-ai-agents",
  "level": 3
}, {
  "value": "Algorithm: ReAct (Reason + Act)",
  "id": "algorithm-react-reason--act",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Dry Run Trace Table: &quot;What is the current population of Tokyo and what is its area?&quot;",
  "id": "dry-run-trace-table-what-is-the-current-population-of-tokyo-and-what-is-its-area",
  "level": 3
}, {
  "value": "Python Implementation: Simple ReAct Agent",
  "id": "python-implementation-simple-react-agent",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "17.7 MCP (Model Context Protocol)",
  "id": "177-mcp-model-context-protocol",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "What is MCP?",
  "id": "what-is-mcp",
  "level": 3
}, {
  "value": "Algorithm: MCP Tool Call Lifecycle",
  "id": "algorithm-mcp-tool-call-lifecycle",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Dry Run Trace Table: MCP Communication Flow",
  "id": "dry-run-trace-table-mcp-communication-flow",
  "level": 3
}, {
  "value": "Python Implementation: Minimal MCP Server",
  "id": "python-implementation-minimal-mcp-server",
  "level": 3
}, {
  "value": "Python Implementation: Minimal MCP Client",
  "id": "python-implementation-minimal-mcp-client",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "17.8 AutoGPT and Autonomous Agent Systems",
  "id": "178-autogpt-and-autonomous-agent-systems",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "What are AutoGPT / Autonomous Agent Systems?",
  "id": "what-are-autogpt--autonomous-agent-systems",
  "level": 3
}, {
  "value": "Algorithm: Autonomous Agent Loop",
  "id": "algorithm-autonomous-agent-loop",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 3
}, {
  "value": "Dry Run Trace Table: &quot;Plan a birthday party&quot;",
  "id": "dry-run-trace-table-plan-a-birthday-party",
  "level": 3
}, {
  "value": "Python Implementation: Simplified AutoGPT",
  "id": "python-implementation-simplified-autogpt",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "Generative AI Types Comparison",
  "id": "generative-ai-types-comparison",
  "level": 2
}, {
  "value": "Detailed Comparison Dimensions",
  "id": "detailed-comparison-dimensions",
  "level": 3
}, {
  "value": "LLM Architecture Comparison",
  "id": "llm-architecture-comparison",
  "level": 2
}, {
  "value": "Key Architectural Differences Explained",
  "id": "key-architectural-differences-explained",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: What is prompt engineering and what are the key techniques?",
  "id": "q1-what-is-prompt-engineering-and-what-are-the-key-techniques",
  "level": 3
}, {
  "value": "Q2: Explain RAG (Retrieval-Augmented Generation) patterns.",
  "id": "q2-explain-rag-retrieval-augmented-generation-patterns",
  "level": 3
}, {
  "value": "Q3: How do you design an AI agent system for production?",
  "id": "q3-how-do-you-design-an-ai-agent-system-for-production",
  "level": 3
}, {
  "value": "Q4: What are safety considerations in modern AI systems?",
  "id": "q4-what-are-safety-considerations-in-modern-ai-systems",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. ChatGPT (OpenAI)",
  "id": "1-chatgpt-openai",
  "level": 3
}, {
  "value": "2. GitHub Copilot (Microsoft/GitHub)",
  "id": "2-github-copilot-microsoftgithub",
  "level": 3
}, {
  "value": "3. Midjourney",
  "id": "3-midjourney",
  "level": 3
}, {
  "value": "4. AutoGPT (Significant Gravitas)",
  "id": "4-autogpt-significant-gravitas",
  "level": 3
}, {
  "value": "5. Claude (Anthropic)",
  "id": "5-claude-anthropic",
  "level": 3
}, {
  "value": "How These Systems Use Modern AI Concepts",
  "id": "how-these-systems-use-modern-ai-concepts",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Modern AI Concepts",
  "id": "quick-reference--modern-ai-concepts",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
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
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Research Questions",
  "id": "research-questions",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-17-modern-artificial-intelligence",
        children: "Chapter 17: Modern Artificial Intelligence"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/16-expert-systems",
        children: "Chapter 16: Expert Systems"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/18-ai-applications",
        children: "Chapter 18: Applications of AI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) describe the transformer architecture and its significance; (2) explain foundation models and their emergent abilities; (3) implement in-context learning and prompt engineering; (4) understand multimodal model architectures; (5) describe AI agent architectures including ReAct, MCP, and AutoGPT; (6) implement generative AI algorithms from scratch; (7) design autonomous agent systems; (8) evaluate modern AI systems across real-world applications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/17-modern-ai/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-modern-ai-matters",
      children: "Why Modern AI Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional AI was like a cookbook — every recipe (rule) had to be written by hand, ingredient by ingredient. If you wanted the system to recognize a cat, you had to manually define whisker length, ear shape, fur texture, and eye color. Modern AI is like a chef who learns to cook by eating thousands of meals — the system discovers the patterns itself from data, generalizes to new dishes, and even creates novel recipes no human ever wrote."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The shift from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "symbolic AI"
      }), " (rules, logic, expert systems) to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modern AI"
      }), " (deep learning, foundation models, generative AI) represents a paradigm change:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional AI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modern AI"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hand-crafted rules by domain experts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven pattern discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear effort for each new capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power-law improvement with scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrow, single-task only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad, multi-task, zero-shot transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Development cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Months of feature engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks of data curation + pre-training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Human involvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every rule written by programmers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data labeling + RLHF feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brittle — breaks on unseen inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful degradation — confidence calibrated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern AI systems — ChatGPT, Claude, Gemini, Midjourney, Copilot — are not academic curiosities. They power products used by billions daily. Understanding their architectures, training methodologies, and limitations is essential for any AI engineer in the 2020s."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep Learning Revolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural networks, backpropagation, gradient descent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backprop, vanishing gradient, ReLU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generative AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive models, diffusion, GANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token, temperature, sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large Language Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT, BERT, T5, scaling laws, RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attention, KV cache, pretraining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-train then adapt, emergence, in-context learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning, few-shot, zero-shot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multimodal AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLIP, DALL-E, Sora, vision-language models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-modal, contrastive, alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct, function calling, tool use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent loop, reasoning, action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Context Protocol, standardized tool interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool schema, handshake, server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AutoGPT / Agent Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task decomposition, autonomous execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning, iteration, sub-tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"17.1 Deep Learning Revolution\"] --> B[\"17.2 Generative AI\"]\n    B --> C[\"17.3 Large Language Models\"]\n    C --> D[\"17.4 Foundation Models\"]\n    D --> E[\"17.5 Multimodal AI\"]\n    E --> F[\"17.6 AI Agents\"]\n    F --> G[\"17.7 MCP Protocol\"]\n    G --> H[\"17.8 AutoGPT / Agent Systems\"]\n    H --> I[\"Generative AI Types Comparison\"]\n    I --> J[\"Interview Corner\"]\n    J --> K[\"Applications in Real Systems\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "171-the-deep-learning-revolution",
      children: "17.1 The Deep Learning Revolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of teaching a child to identify animals. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traditional machine learning"
      }), " is like giving the child a checklist: \"If it has whiskers, pointy ears, and says meow, it's a cat.\" Every rule must be explicitly defined. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep learning"
      }), " is like showing the child 10,000 pictures of cats and dogs without any rules — the child's brain automatically learns the distinguishing features. The \"deep\" refers to many layers of neurons, each building on simpler patterns (edges → shapes → parts → whole object)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-deep-learning",
      children: "What is Deep Learning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep learning uses multi-layer artificial neural networks to model complex patterns. Each layer transforms its input into progressively more abstract representations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 1: Detects edges and corners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 2: Combines edges into shapes (circles, rectangles)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 3: Combines shapes into parts (eyes, wheels, windows)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 4: Combines parts into whole objects (face, car, house)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-training-a-neural-network-via-gradient-descent",
      children: "Algorithm: Training a Neural Network via Gradient Descent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Training data (X, y), network architecture (layers, activation functions), learning rate (eta), epochs (E)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Trained network weights (W, b)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize weights W randomly (small values near zero) and biases b to zero"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each epoch e = 1 to E:\na. For each batch of training examples:\ni. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward pass:"
        }), " Compute predictions by passing input through each layer\nz^{(1)} = X · W^{(1)} + b^{(1)}\na^{(1)} = ReLU(z^{(1)})\nz^{(2)} = a^{(1)} · W^{(2)} + b^{(2)}\ny_pred = softmax(z^{(2)})\nii. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute loss:"
        }), " Measure error between predictions and true labels\nL = -sum(y_true * log(y_pred))  (cross-entropy)\niii. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward pass (backpropagation):"
        }), " Compute gradients of loss with respect to each weight\ndL/dW^{(2)} = a^{(1)}^T · (y_pred - y_true)\ndL/dW^{(1)} = X^T · ((y_pred - y_true) · W^{(2)}^T · ReLU'(z^{(1)}))\niv. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Update weights:"
        }), " Adjust weights in direction opposite to gradient\nW = W - eta * dL/dW"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return trained weights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION TRAIN_NEURAL_NETWORK(X, y, hidden_size, learning_rate, epochs):\n    // Initialize weights\n    W1 = RANDOM(-0.01, 0.01, size=(INPUT_DIM, hidden_size))\n    b1 = ZEROS(hidden_size)\n    W2 = RANDOM(-0.01, 0.01, size=(hidden_size, OUTPUT_DIM))\n    b2 = ZEROS(OUTPUT_DIM)\n    \n    FOR epoch = 1 TO epochs:\n        // Forward pass\n        z1 = X · W1 + b1\n        a1 = RELU(z1)\n        z2 = a1 · W2 + b2\n        y_pred = SOFTMAX(z2)\n        \n        // Loss\n        loss = CROSS_ENTROPY(y, y_pred)\n        \n        // Backward pass\n        dz2 = y_pred - y\n        dW2 = a1^T · dz2\n        db2 = SUM(dz2, axis=0)\n        da1 = dz2 · W2^T\n        dz1 = da1 * RELU_DERIVATIVE(z1)\n        dW1 = X^T · dz1\n        db1 = SUM(dz1, axis=0)\n        \n        // Update\n        W1 = W1 - learning_rate * dW1\n        b1 = b1 - learning_rate * db1\n        W2 = W2 - learning_rate * dW2\n        b2 = b2 - learning_rate * db2\n    \n    RETURN W1, b1, W2, b2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-forward-pass",
      children: "Dry Run Trace Table: Forward Pass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Input X=[0.5, -0.3], target y=[0,1,0] (class 1). Hidden layer size=3. Random initialized weights:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "W1 = [[0.1, -0.2, 0.3], [0.4, 0.1, -0.5]], b1=[0.0, 0.0, 0.0]\nW2 = [[0.2, -0.3, 0.1], [0.5, 0.2, -0.4], [-0.1, 0.6, 0.3]], b2=[0.0, 0.0, 0.0]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z1 = X·W1+b1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[0.5", (0,jsx_runtime.jsxs)(_components.em, {
              children: ["0.1+(-0.3)", (0,jsx_runtime.jsx)(_components.em, {
                children: "0.4, 0.5"
              }), "(-0.2)+(-0.3)", (0,jsx_runtime.jsx)(_components.em, {
                children: "0.1, 0.5"
              }), "0.3+(-0.3)"]
            }), "(-0.5)] + [0,0,0]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-0.07, -0.13, 0.30]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a1 = ReLU(z1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(0,-0.07), max(0,-0.13), max(0,0.30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.00, 0.00, 0.30]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z2 = a1·W2+b2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[0", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.2+0"
            }), "0.5+0.3*(-0.1), 0*(-0.3)+0", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.2+0.3"
            }), "0.6, 0", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.1+0"
            }), "(-0.4)+0.3*0.3]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-0.03, 0.18, 0.09]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y_pred = softmax(z2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exp: [0.97, 1.20, 1.09], sum=3.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.30, 0.37, 0.33]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss = -sum(y*log(y_pred))"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["-[0", (0,jsx_runtime.jsx)(_components.em, {
              children: "log(0.30)+1"
            }), "log(0.37)+0*log(0.33)]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.994"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model predicts class 1 with 37% confidence (correct class has highest probability but low confidence). Backpropagation would adjust weights to increase this to ~90%+ over many epochs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef relu(x):\n    return np.maximum(0, x)\n\ndef relu_derivative(x):\n    return (x > 0).astype(float)\n\ndef softmax(x):\n    e_x = np.exp(x - np.max(x, axis=1, keepdims=True))\n    return e_x / np.sum(e_x, axis=1, keepdims=True)\n\ndef cross_entropy(y_true, y_pred):\n    return -np.mean(np.sum(y_true * np.log(y_pred + 1e-8), axis=1))\n\nclass NeuralNetwork:\n    def __init__(self, input_dim, hidden_dim, output_dim, lr=0.01):\n        self.lr = lr\n        self.W1 = np.random.randn(input_dim, hidden_dim) * 0.01\n        self.b1 = np.zeros((1, hidden_dim))\n        self.W2 = np.random.randn(hidden_dim, output_dim) * 0.01\n        self.b2 = np.zeros((1, output_dim))\n\n    def forward(self, X):\n        self.z1 = X @ self.W1 + self.b1\n        self.a1 = relu(self.z1)\n        self.z2 = self.a1 @ self.W2 + self.b2\n        self.y_pred = softmax(self.z2)\n        return self.y_pred\n\n    def backward(self, X, y):\n        m = X.shape[0]\n        dz2 = self.y_pred - y\n        dW2 = self.a1.T @ dz2 / m\n        db2 = np.sum(dz2, axis=0, keepdims=True) / m\n        da1 = dz2 @ self.W2.T\n        dz1 = da1 * relu_derivative(self.z1)\n        dW1 = X.T @ dz1 / m\n        db1 = np.sum(dz1, axis=0, keepdims=True) / m\n        return dW1, db1, dW2, db2\n\n    def update(self, dW1, db1, dW2, db2):\n        self.W1 -= self.lr * dW1\n        self.b1 -= self.lr * db1\n        self.W2 -= self.lr * dW2\n        self.b2 -= self.lr * db2\n\n    def train(self, X, y, epochs=100):\n        for epoch in range(epochs):\n            y_pred = self.forward(X)\n            loss = cross_entropy(y, y_pred)\n            grads = self.backward(X, y)\n            self.update(*grads)\n            if epoch % 20 == 0:\n                acc = np.mean(np.argmax(y_pred, axis=1) == np.argmax(y, axis=1))\n                print(f\"Epoch {epoch}: loss={loss:.4f}, acc={acc:.4f}\")\n\n# Demo\nX = np.array([[0.5, -0.3], [0.1, 0.9], [-0.8, -0.2], [0.3, 0.1]])\ny = np.array([[1,0,0], [0,1,0], [0,0,1], [0,1,0]])\nnn = NeuralNetwork(input_dim=2, hidden_dim=4, output_dim=3, lr=0.1)\nnn.train(X, y, epochs=100)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward pass (per layer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m * n_in * n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n_in * n_out + n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiply of (m x n_in) · (n_in x n_out) — each of m examples does n_in * n_out operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m * n_in * n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n_in * n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same matrix dimensions as forward — gradient computation is another matrix multiply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full epoch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m * n_in * n_hidden + m * n_hidden * n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n_in * n_hidden + n_hidden * n_out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines all layers: input→hidden and hidden→output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training (E epochs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E * m * n_in * n_hidden)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as epoch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in epochs — each pass identical work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Deep learning's computational cost is dominated by matrix multiplications, which GPUs parallelize extremely well. The O(E * m * n * n) scaling means doubling the hidden dimension quadruples compute — this is why model scale is expensive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learns hierarchical features automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires massive labeled datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art on vision, language, audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive to train"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transferable across tasks via pre-training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black box — hard to interpret decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles high-dimensional raw data (pixels, audio)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable to adversarial examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with data — more data = better performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prone to overfitting on small datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end learning (no manual feature engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vanishing/exploding gradients in deep networks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vanishing Gradients:"
          }), " In deep networks with sigmoid/tanh, gradients become near-zero in early layers — the network stops learning. Solution: ReLU, residual connections, batch normalization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exploding Gradients:"
          }), " Gradients grow exponentially in deep networks, causing NaN weights. Solution: gradient clipping, proper weight initialization (Xavier/He)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dead ReLU Units:"
          }), " If a neuron's weights push all inputs to negative, ReLU outputs 0 and gradients are 0 — the neuron never recovers. Solution: Leaky ReLU, ELU, careful initialization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Class Imbalance:"
          }), " If 99% of data is class A, the network learns to always predict A. Solution: weighted loss, oversampling, focal loss."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Overfitting on Small Data:"
          }), " With <1000 examples per class, the network memorizes rather than generalizes. Solution: dropout, data augmentation, transfer learning."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "172-generative-ai",
      children: "17.2 Generative AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a composer who has listened to every symphony ever written. When asked to compose a new symphony, they don't copy any single one — they've internalized the patterns: how themes develop, how tension builds, how instruments combine. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generative AI"
      }), " works the same way: it learns the probability distribution of training data and samples new instances from that distribution. It's not \"remembering\" — it's generating novel outputs that follow the learned patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-generative-ai",
      children: "What is Generative AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generative AI models learn the joint probability distribution P(data) and can sample new data points. This contrasts with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discriminative"
      }), " models that learn P(label|data) for classification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key paradigm: instead of predicting a label, predict the next piece of data — next word, next pixel, next audio sample."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-autoregressive-text-generation",
      children: "Algorithm: Autoregressive Text Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Starting prompt (list of tokens), pre-trained model (transformer), temperature (T), max_length (L), top_k (K)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Generated sequence (list of tokens)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode prompt into token IDs using tokenizer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For step = 1 to L:\na. Feed token sequence through transformer model\nb. Get logits for next token from final layer (vocabulary-sized vector)\nc. Scale logits by temperature: logits = logits / T\nd. Apply top-k filtering: zero out all logits except top K\ne. Apply softmax to get probability distribution\nf. Sample next token from this distribution\ng. Append sampled token to sequence\nh. If sampled token is END token, stop early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decode token IDs back to text"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return generated text"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION GENERATE_TEXT(prompt, model, temperature, max_length, top_k):\n    tokens = TOKENIZE(prompt)\n    \n    FOR step = 1 TO max_length:\n        // Forward pass through transformer\n        logits = model.FORWARD(tokens)      // shape: (vocab_size,)\n        \n        // Temperature scaling\n        logits = logits / temperature\n        \n        // Top-k filtering\n        indices = ARGSORT(logits)[-top_k:]\n        filtered = array of -infinity of size vocab_size\n        filtered[indices] = logits[indices]\n        \n        // Softmax\n        probs = SOFTMAX(filtered)\n        \n        // Sample\n        next_token = SAMPLE(probs)           // random weighted by probs\n        \n        // Append\n        tokens.APPEND(next_token)\n        \n        // Early stopping\n        IF next_token == END_TOKEN:\n            BREAK\n    \n    RETURN DETOKENIZE(tokens)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-generating-the-cat",
      children: "Dry Run Trace Table: Generating \"The cat\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Tiny vocabulary = {\"The\":0, \"cat\":1, \"sat\":2, \"mat\":3, \"END\":4}. Prompt=\"The\". GPT with embedding_dim=4, hidden_dim=8."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Input tokens=[0] (\"The\")"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed \"The\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup embedding table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emb = [0.5, -0.1, 0.3, 0.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single token — no cross-attention needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attn_out = [0.5, -0.1, 0.3, 0.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFN projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU(attn·W1+b1)·W2+b2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hidden = [0.8, -0.2, 0.5, 1.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output projection to vocab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hidden·W_out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logits = [1.5, 2.1, -0.3, 0.7, -0.5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature scaling T=0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logits/0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaled = [1.87, 2.62, -0.37, 0.87, -0.62]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k (k=3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep indices 0,1,3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "filtered = [1.87, 2.62, -inf, 0.87, -inf]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exp/sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "probs = [0.32, 0.55, 0, 0.13, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted random based on probs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "next_token = 1 (\"cat\")"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Input tokens=[0, 1] (\"The cat\")"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed both tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emb = [[0.5,-0.1,0.3,0.2], [-0.2,0.6,0.1,-0.3]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute attention weights between \"The\" and \"cat\" — \"sat\" gets highest weight (cats sit on mats)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attn_out = [[0.4,0.1,0.3,0.1], [-0.1,0.5,0.2,-0.2]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFN projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-token FFN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hidden = [[0.7,-0.1,0.4,1.0], [0.3,0.8,-0.1,0.6]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output (use last token's logits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hidden[-1]·W_out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logits = [-0.8, 0.5, 1.8, 2.3, -1.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature T=0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-1.0, 0.62, 2.25, 2.87, -1.5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep indices 1,2,3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-inf, 0.62, 2.25, 2.87, -inf]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0.05, 0.40, 0.55, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest prob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "next_token = 3 (\"mat\")"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " \"The cat mat\" — with \"sat\" likely inserted between \"cat\" and \"mat\" in a larger model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\nclass TinyAutoregressiveModel:\n    def __init__(self, vocab_size=10, embed_dim=8, hidden_dim=16):\n        self.embed = np.random.randn(vocab_size, embed_dim) * 0.1\n        self.W_attn = np.random.randn(embed_dim, embed_dim) * 0.1\n        self.W1 = np.random.randn(embed_dim, hidden_dim) * 0.1\n        self.b1 = np.zeros(hidden_dim)\n        self.W2 = np.random.randn(hidden_dim, embed_dim) * 0.1\n        self.b2 = np.zeros(embed_dim)\n        self.W_out = np.random.randn(embed_dim, vocab_size) * 0.1\n        self.b_out = np.zeros(vocab_size)\n\n    def forward(self, token_ids):\n        emb = self.embed[token_ids]\n        # Simplified self-attention (mean pooling for tiny demo)\n        context = np.mean(emb, axis=0)\n        # FFN\n        hidden = np.maximum(0, context @ self.W1 + self.b1)\n        out = hidden @ self.W2 + self.b2\n        logits = out @ self.W_out + self.b_out\n        return logits\n\ndef generate(model, prompt_ids, max_len=10, temperature=1.0, top_k=5):\n    tokens = list(prompt_ids)\n    for _ in range(max_len):\n        logits = model.forward(np.array(tokens))\n        logits = logits / temperature\n        # Top-k\n        indices = np.argsort(logits)[-top_k:]\n        filtered = np.full_like(logits, -np.inf)\n        filtered[indices] = logits[indices]\n        # Softmax\n        exp_l = np.exp(filtered - np.max(filtered))\n        probs = exp_l / np.sum(exp_l)\n        # Sample\n        next_tok = np.random.choice(len(probs), p=probs)\n        tokens.append(next_tok)\n        if next_tok == 0:  # END token = 0\n            break\n    return tokens\n\n# Demo\nmodel = TinyAutoregressiveModel()\nprompt = np.array([1, 2, 3])  # some token IDs\noutput = generate(model, prompt, max_len=5)\nprint(\"Generated tokens:\", output)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single forward pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L * d^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L=sequence length, d=embedding dim — self-attention computes L² pairs, each O(d)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating L tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L² * d^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each new token attends to all previous tokens, so total is sum of squares"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With KV cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L * d^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached key/value vectors avoid recomputing previous token representations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sampling step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V=vocab size — just softmax over V logits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why KV cache matters:"
      }), " Without it, generating token t requires O(t * d^2). With it, each step is O(d^2), making generation O(L * d^2) instead of O(L² * d^2). This is the difference between a 2-second response and a 2-minute response for long texts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generates novel, high-quality content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can hallucinate — produce plausible but false information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controllable via prompting, temperature, top-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful prompt engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single model handles many tasks (few-shot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biased by training data distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports multiple modalities (text, image, code, music)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive for inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Improves with scale (more data, larger models)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to attribute or explain specific outputs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Repetition:"
          }), " Model generates the same phrase repeatedly. Solution: repetition penalty, top-k/top-p sampling, frequency penalty."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hallucination:"
          }), " Model confidently states false information. Solution: RAG (retrieval-augmented generation), factual consistency checking, lower temperature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Window Overflow:"
          }), " Input exceeds model's maximum sequence length. Solution: truncation, sliding window, summarization of older context."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tokenization Artifacts:"
          }), " Rare words split into unexpected subwords (\"defeated\" → \"def\" + \"eated\"). Solution: BPE tokenization with careful handling, byte-level tokenization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bias Amplification:"
          }), " Model perpetuates stereotypes from training data. Solution: RLHF, data filtering, bias evaluation benchmarks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Injection Attacks:"
          }), " Malicious prompts override model instructions. Solution: prompt guardrails, input validation, instruction hierarchy."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "173-large-language-models-llms",
      children: "17.3 Large Language Models (LLMs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a librarian who has read every book ever published — novels, textbooks, scientific papers, websites, poems. If you start a sentence, the librarian can finish it because they know the statistical patterns of language: which words follow which, how arguments are structured, what makes a coherent paragraph. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LLMs"
      }), " are this librarian — a transformer trained on massive text corpora to predict the next token. The magic is that next-token prediction, when trained at sufficient scale, produces models that can summarize, translate, code, reason, and even write poetry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-large-language-models",
      children: "What are Large Language Models?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMs are transformer-based neural networks with billions of parameters trained on trillions of tokens. The three dominant architectures:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directional"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Generative?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only (GPT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4, LLaMA, Claude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next token prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left-to-right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-only (BERT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT, RoBERTa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masked language modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-Decoder (T5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5, BART"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-next-token-prediction-training-gpt-style",
      children: "Algorithm: Next-Token Prediction Training (GPT-style)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Text corpus (tokenized), transformer model with parameters theta, batch size B, learning rate eta"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Trained model parameters"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenize corpus into sequences of length L using BPE tokenizer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each training step:\na. Sample batch of B sequences from corpus\nb. For each sequence, create input = tokens[0:L-1], target = tokens[1:L]\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward pass:"
        }), " Run input through transformer:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Embed each token (positional + token embedding)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "L layers of: multi-head self-attention → layer norm → FFN → layer norm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Final layer norm → linear projection to vocabulary"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Output logits of shape (B, L, V)\nd. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute loss:"
            }), " Cross-entropy between predicted logits and target tokens"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only compute loss on target tokens (ignore padding)\ne. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backward pass:"
            }), " Compute gradients of loss wrt all parameters\nf. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimizer step:"
            }), " Update parameters using AdamW optimizer"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "theta = theta - eta * AdamW(gradients, running_moments)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return trained model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION TRAIN_GPT(corpus, vocab_size, d_model, num_layers, num_heads, batch_size, lr):\n    model = TRANSFORMER(vocab_size, d_model, num_layers, num_heads)\n    optimizer = ADAMW(model.parameters, lr)\n    \n    FOR step = 0 TO max_steps:\n        batch = SAMPLE_BATCH(corpus, batch_size, seq_len)\n        \n        // Input = tokens[0:-1], Target = tokens[1:]\n        input_ids = batch[:, :-1]\n        target_ids = batch[:, 1:]\n        \n        // Forward\n        logits = model(input_ids)           // (B, L-1, V)\n        \n        // Loss\n        loss = CROSS_ENTROPY(logits, target_ids, ignore_index=PAD)\n        \n        // Backward\n        gradients = COMPUTE_GRADIENTS(loss, model.parameters)\n        \n        // Update\n        optimizer.STEP(gradients)\n        \n        IF step % 1000 == 0:\n            LOG(\"Step\", step, \"Loss\", loss)\n    \n    RETURN model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-self-attention-for-i-love-ai",
      children: "Dry Run Trace Table: Self-Attention for \"I love AI\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Sequence=[\"I\", \"love\", \"AI\"]. d_model=4. Single head. Q, K, V are 3x4 matrices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input embeddings (after positional encoding):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "X_I = [0.2, 0.5, -0.1, 0.3]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "X_love = [0.8, -0.3, 0.6, 0.1]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "X_AI = [-0.4, 0.7, 0.2, -0.5]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight matrices (random initial):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W_Q = 4x4 identity (simplified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W_K = 4x4 identity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W_V = 4x4 identity"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute Q=X·W_Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q = [[0.2,0.5,-0.1,0.3], [0.8,-0.3,0.6,0.1], [-0.4,0.7,0.2,-0.5]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute K=X·W_K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K = same as Q"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute V=X·W_V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V = same as Q"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q·K^T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3x3 matrix multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = [[0.39, 0.02, -0.08], [0.02, 1.10, -0.43], [-0.08, -0.43, 0.94]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale by sqrt(d_k) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S_scaled = [[0.195, 0.01, -0.04], [0.01, 0.55, -0.215], [-0.04, -0.215, 0.47]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 0: exp/sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = [[0.34, 0.34, 0.32], [0.21, 0.52, 0.27], [0.28, 0.27, 0.45]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A·V (weighted sum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each output = weighted V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output = [[0.22, 0.30, 0.24, 0.00], [0.32, 0.14, 0.35, -0.02], [0.06, 0.44, 0.05, -0.13]]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      }), " Token \"love\" (row 1) has attention weight 0.52 on itself (highest) — the model learns that \"love\" is important context for predicting the next word. Token \"I\" attends fairly evenly since it provides weak context for what follows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-single-head-self-attention",
      children: "Python Implementation: Single-Head Self-Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef softmax(x, axis=-1):\n    e_x = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e_x / np.sum(e_x, axis=axis, keepdims=True)\n\nclass SelfAttention:\n    def __init__(self, d_model=64):\n        self.d_model = d_model\n        self.W_q = np.random.randn(d_model, d_model) * 0.01\n        self.W_k = np.random.randn(d_model, d_model) * 0.01\n        self.W_v = np.random.randn(d_model, d_model) * 0.01\n\n    def forward(self, X):\n        # X shape: (batch, seq_len, d_model)\n        Q = X @ self.W_q\n        K = X @ self.W_k\n        V = X @ self.W_v\n        scores = Q @ K.transpose(0, 2, 1) / np.sqrt(self.d_model)\n        attn_weights = softmax(scores, axis=-1)\n        output = attn_weights @ V\n        return output, attn_weights\n\n    def forward_single(self, X):\n        # X: (seq_len, d_model) — single sequence\n        Q = X @ self.W_q\n        K = X @ self.W_k\n        V = X @ self.W_v\n        scores = Q @ K.T / np.sqrt(self.d_model)\n        attn_weights = softmax(scores, axis=-1)\n        output = attn_weights @ V\n        return output, attn_weights\n\n# Demo\nnp.random.seed(42)\nseq_len, d_model = 4, 8\nX = np.random.randn(seq_len, d_model)\nattn = SelfAttention(d_model)\noutput, weights = attn.forward_single(X)\nprint(\"Attention weights shape:\", weights.shape)\nprint(\"Sample row (token 0 attending to all):\", np.round(weights[0], 3))\nprint(\"Output shape:\", output.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention (single layer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L² * d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of L tokens compares to all L tokens with O(d) dot products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FFN (single layer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L * d²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d²)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Two linear projections: d→4d and 4d→d, each O(L", (0,jsx_runtime.jsx)(_components.em, {
              children: "d"
            }), "4d)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full forward (N layers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * (L² * d + L * d²))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * (L² + d²))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N layers stacked, each with attention + FFN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KV-cached generation (per token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * (L * d + d²))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * L * d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only compute new Q, reuse cached K,V; avoids O(L²) recomputation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why self-attention is O(L²):"
      }), " The quadratic cost in sequence length is the fundamental bottleneck. A 4096-token context requires 16M attention pairs; 128K tokens requires 16B pairs. This drives the need for efficient attention variants (FlashAttention, sparse attention, sliding window)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Captures long-range dependencies (unlike RNNs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L²) memory in sequence length — expensive for long contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable training across all tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires massive compute (1000s of GPUs for weeks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot learning without fine-tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination — generates plausible falsehoods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling laws predict improvement with size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data memorization and privacy concerns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One model handles text, code, math, reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brittle to prompt phrasing — different outputs for similar prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF alignment improves helpfulness and safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment can reduce model capability on some tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Long-Range Dependency Failure:"
          }), " With L=128K, the model may \"forget\" information from the first sentence. Solution: sliding window attention, RAG, summarization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Catastrophic Forgetting During Fine-Tuning:"
          }), " Fine-tuning on new tasks degrades general capabilities. Solution: LoRA (low-rank adaptation), multitask learning, elastic weight consolidation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tokenizer Edge Cases:"
          }), " Numbers tokenized inconsistently (123 → [\"12\",\"3\"] or [\"1\",\"23\"]). Solution: byte-level tokenization (GPT-4 uses cl100k_base which handles this better)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt Injection:"
          }), " User input overrides system instructions. Solution: prompt isolation, input validation, delimiter-based separation, instruction hierarchy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Confabulation:"
          }), " When given contradictory context, the model may hallucinate rather than acknowledge confusion. Solution: uncertainty estimation, refusal on low-confidence outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "174-foundation-models",
      children: "17.4 Foundation Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A foundation model is like a Swiss Army knife that starts as a plain block of steel. Through massive pre-training (forging and tempering), it becomes a versatile tool that can be adapted into a blade, screwdriver, corkscrew, or scissors — each a specialized fine-tuning task. The key insight: the forging process (pre-training) is expensive but done once. The shaping (fine-tuning) is cheap and done many times for different tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-foundation-models",
      children: "What are Foundation Models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "foundation model"
      }), " (Bommasani et al., 2021) is a large neural network pre-trained on broad data via self-supervision, then adapted to downstream tasks. The term captures the idea that this model serves as a foundation upon which many task-specific models can be built."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-training:"
        }), " Train on massive unlabeled data (next-token prediction, masked LM, contrastive learning)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fine-tuning:"
        }), " Adapt pre-trained model to specific task with labeled data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In-context learning:"
        }), " Perform task from prompt examples without parameter update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emergence:"
        }), " Capabilities that appear only at sufficient model scale"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-pre-train--fine-tune--rlhf-pipeline",
      children: "Algorithm: Pre-train → Fine-tune → RLHF Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Large text corpus (pre-training), task-specific labeled data (fine-tuning), human preference data (RLHF)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Aligned, task-capable model"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-training Phase:"
          }), "\na. Collect and deduplicate large text corpus (trillions of tokens)\nb. Tokenize corpus using BPE or SentencePiece\nc. Initialize transformer with random weights\nd. Train on next-token prediction using AdamW optimizer\ne. Train for optimal tokens ≈ 6× parameters (Chinchilla scaling)\nf. Save base model checkpoint"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Supervised Fine-Tuning (SFT) Phase:"
          }), "\na. Collect instruction-response pairs (human demonstrations)\nb. Format as conversational turns with system/user/assistant roles\nc. Initialize from pre-trained checkpoint\nd. Train with standard cross-entropy loss on response tokens only\ne. Train for 1-3 epochs on 10K-100K examples"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RLHF (Reinforcement Learning from Human Feedback) Phase:"
          }), "\na. Train reward model: human preferences on model outputs → reward score\nb. Sample responses from SFT model, get reward scores\nc. Optimize PPO objective: maximize reward - KL divergence from SFT model\nd. Iterate: generate → evaluate → update"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION PRE_TRAIN(corpus, model, vocab_size, d_model, num_layers, max_steps):\n    optimizer = ADAMW(model.parameters, lr=3e-4)\n    \n    FOR step = 1 TO max_steps:\n        batch = SAMPLE_TOKENS(corpus, batch_size=512, seq_len=2048)\n        input_ids = batch[:, :-1]\n        target_ids = batch[:, 1:]\n        \n        logits = model(input_ids)\n        loss = CROSS_ENTROPY(logits.view(-1, vocab_size), target_ids.view(-1))\n        \n        loss.BACKWARD()\n        GRADIENT_CLIP(model.parameters, max_norm=1.0)\n        optimizer.STEP()\n        \n        IF step % 1000 == 0:\n            SAVE_CHECKPOINT(model, step)\n    \n    RETURN model\n\n\nFUNCTION FINE_TUNE(base_model, sft_data, vocab_size, epochs=3):\n    model = LOAD_WEIGHTS(base_model)\n    optimizer = ADAMW(model.parameters, lr=2e-5)    // Lower lr for fine-tuning\n    \n    FOR epoch = 1 TO epochs:\n        FOR batch in sft_data:\n            // Format as conversation\n            prompt = FORMAT_CONVERSATION(batch.input)\n            response = batch.output\n            \n            logits = model(prompt)\n            // Only compute loss on response tokens\n            loss = CROSS_ENTROPY(logits[:, -len(response):], response)\n            \n            loss.BACKWARD()\n            optimizer.STEP()\n    \n    RETURN model\n\n\nFUNCTION RLHF(model, reward_model, prompts, ppo_epochs=4):\n    FOR epoch = 1 TO ppo_epochs:\n        FOR prompt in prompts:\n            // Generate response\n            response = model.GENERATE(prompt)\n            \n            // Get reward\n            reward = reward_model(prompt, response)\n            \n            // PPO update\n            // Maximize reward while staying close to original model\n            loss = -reward * LIKELIHOOD_RATIO + KL_PENALTY\n            \n            loss.BACKWARD()\n            optimizer.STEP()\n    \n    RETURN model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-pre-training-loss-over-steps",
      children: "Dry Run Trace Table: Pre-training Loss over Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " 1B parameter GPT-style model trained on 250B tokens. Learning rate 3e-4 with cosine schedule. Batch size 512, seq_len 2048 (1M tokens/step)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Training Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tokens Seen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Perplexity (exp(loss))"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "57,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random initialization — uniform over 57K vocab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "917"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid initial learning — learning common bigrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model learns syntax and common patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good grasp of grammar, factual knowledge emerging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain-of-thought reasoning begins to emerge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong across-domain capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "250,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.87"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final checkpoint — diminishing returns near Chinchilla-optimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-simplified-fine-tuning-loop",
      children: "Python Implementation: Simplified Fine-tuning Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef simple_fine_tune(base_weights, train_data, vocab_size=1000, d_model=64,\n                     lr=2e-5, epochs=3, num_layers=4):\n    \"\"\"\n    Simplified fine-tuning simulation.\n    In practice, this would run on GPUs with a full transformer.\n    \"\"\"\n    # Load pre-trained weights (simulated)\n    model = base_weights  # dict of W_q, W_k, W_v, W1, W2, etc.\n    losses = []\n\n    for epoch in range(epochs):\n        epoch_loss = 0.0\n        for i, (input_text, target_text) in enumerate(train_data):\n            # Tokenize (simplified)\n            input_ids = np.array([hash(w) % vocab_size for w in input_text.split()])\n            target_ids = np.array([hash(w) % vocab_size for w in target_text.split()])\n\n            # Forward pass (conceptual — not a full transformer)\n            loss = 0.0\n            for t in range(min(len(input_ids), 32)):\n                # Simplified: random prediction to simulate\n                pred = np.random.randn(vocab_size)\n                pred = np.exp(pred - np.max(pred))\n                pred = pred / np.sum(pred)\n                loss += -np.log(pred[target_ids[t]] + 1e-8)\n\n            loss /= len(input_ids)\n            epoch_loss += loss\n\n            # Gradient update (conceptual: W -= lr * grad)\n            for key in model:\n                gradient = np.random.randn(*model[key].shape) * 0.001\n                model[key] -= lr * gradient\n\n        avg_loss = epoch_loss / len(train_data)\n        losses.append(avg_loss)\n        print(f\"Epoch {epoch+1}: Average Loss = {avg_loss:.4f}\")\n\n    return model, losses\n\n# Simulated pre-trained weights\nnp.random.seed(42)\nbase_weights = {\n    f\"layer_{l}_W\": np.random.randn(d_model, d_model) * 0.01\n    for l in range(8)\n}\ntrain_examples = [\n    (\"What is the capital of France?\", \"The capital of France is Paris.\"),\n    (\"Explain gravity\", \"Gravity is a force that attracts objects with mass.\"),\n]\nfine_tuned, losses = simple_fine_tune(base_weights, train_examples)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compute (est.)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N_param * N_tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^23 - 10^25 FLOPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward + backward pass through all layers for every token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning (SFT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N_param * N_sft_tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^19 - 10^21 FLOPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same per-token cost but far fewer tokens (10K-100K samples × ~500 tokens)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N_param) per token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^12 - 10^14 FLOPs/token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single forward pass only — about 1-2 FLOPs per parameter per token"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why pre-training is expensive:"
      }), " A 70B parameter model trained on 2 trillion tokens requires roughly 2 * 70B * 2T = 2.8 × 10^23 FLOPs. On 10,000 A100 GPUs (312 TFLOPS each), this takes about 90 days. Fine-tuning the same model on 100K examples is thousands of times cheaper."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single model adapts to thousands of tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training costs tens of millions of dollars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-shot and few-shot capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires massive infrastructure (thousands of GPUs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emergent abilities at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to predict which capabilities will emerge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source models (LLaMA, Mistral) democratize access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed models create vendor dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continual improvement with RLHF alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment tax — reduces performance on some metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Catastrophic Forgetting:"
          }), " Fine-tuning on new tasks overwrites pre-trained knowledge. Solution: LoRA (train small adapters instead of full weights), elastic weight consolidation (penalize changes to important weights)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain Gap:"
          }), " Pre-training distribution differs from deployment distribution (e.g., pre-trained on English Wikipedia, deployed on medical texts). Solution: domain-adaptive pre-training (continued pre-training on domain data)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Contamination:"
          }), " Test data leaked into pre-training corpus inflates benchmark scores. Solution: decontamination (removing test-set overlaps), canary strings in benchmarks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reward Hacking in RLHF:"
          }), " The model learns to maximize reward score in unintended ways (e.g., writing longer responses regardless of quality). Solution: KL penalty, diverse reward signals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale Collapse:"
          }), " At extreme scales, models can become less sample-efficient or develop harmful behaviors. Solution: careful scaling studies, ethical review gates."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "175-multimodal-ai",
      children: "17.5 Multimodal AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a person who speaks English and also understands visual language — they can look at a photo and describe it in words, or read a description and sketch what they see. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multimodal AI"
      }), " bridges these modalities: aligning text representations with image, audio, or video representations in a shared embedding space so the model can reason across them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-multimodal-ai",
      children: "What is Multimodal AI?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multimodal models process and generate content across multiple data types. Key architectures:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modalities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual encoders + contrastive loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DALL-E 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text → Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion + LLM text encoder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified transformer decoder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text → Video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion transformer (DiT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ImageBind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 modalities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single shared embedding space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-clip-contrastive-pre-training",
      children: "Algorithm: CLIP Contrastive Pre-training"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " N image-text pairs (batch), image encoder (ResNet/ViT), text encoder (transformer), temperature tau"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Aligned embedding matrices (image and text encoders)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For batch of N image-text pairs:\na. Encode images: I_emb = image_encoder(images)  — shape (N, d)\nb. Encode texts: T_emb = text_encoder(texts)     — shape (N, d)\nc. L2-normalize both embeddings: I_emb = I_emb / ||I_emb||, T_emb = T_emb / ||T_emb||"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute similarity matrix: S = I_emb · T_emb^T / tau — shape (N, N)\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Entry S[i][j] = cosine similarity between image i and text j"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute contrastive loss:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image→Text loss: cross_entropy(S, labels) where labels[i] = i (diagonal)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Text→Image loss: cross_entropy(S^T, labels) where labels[i] = i"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Total loss = (image_loss + text_loss) / 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backpropagate through both encoders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update parameters of image and text encoders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CLIP_TRAIN_BATCH(images, texts, img_encoder, txt_encoder, tau):\n    // 1. Encode\n    I = img_encoder(images)       // (N, d)\n    T = txt_encoder(texts)        // (N, d)\n    \n    // 2. Normalize\n    I = I / NORM(I, dim=1)\n    T = T / NORM(T, dim=1)\n    \n    // 3. Similarity matrix\n    S = I @ T.T / tau             // (N, N)\n    \n    // 4. Labels: diagonal pairs are correct\n    labels = [0, 1, 2, ..., N-1]\n    \n    // 5. Loss (symmetric)\n    loss_i2t = CROSS_ENTROPY(S, labels)      // image→text\n    loss_t2i = CROSS_ENTROPY(S.T, labels)    // text→image\n    loss = (loss_i2t + loss_t2i) / 2\n    \n    // 6. Backward\n    loss.BACKWARD()\n    optimizer.STEP()\n    \n    RETURN loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-clip-contrastive-loss",
      children: "Dry Run Trace Table: CLIP Contrastive Loss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Batch of 4 image-text pairs. d=2 (tiny embedding). tau=0.07."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Image embeddings (after normalization):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I0 = [0.8, 0.6] (dog photo)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I1 = [0.3, -0.95] (car photo)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I2 = [-0.7, 0.7] (sunset photo)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I3 = [-0.2, -0.98] (cat photo)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text embeddings (after normalization):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T0 = [0.9, 0.4] (\"a photo of a dog\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1 = [0.2, -0.98] (\"a red car\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2 = [-0.6, 0.8] (\"sunset over ocean\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T3 = [-0.3, -0.95] (\"a cute cat\")"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = I·T^T / 0.07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dot products scaled by 1/0.07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = 4x4 matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[0][0] = I0·T0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(0.8", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.9 + 0.6"
            }), "0.4) / 0.07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.96) / 0.07 = 13.7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[0][1] = I0·T1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(0.8", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.2 + 0.6"
            }), "(-0.98)) / 0.07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-0.43) / 0.07 = -6.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[1][1] = I1·T1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(0.3", (0,jsx_runtime.jsx)(_components.em, {
              children: "0.2 + (-0.95)"
            }), "(-0.98)) / 0.07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.99) / 0.07 = 14.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[2][2] = I2·T2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["((-0.7)", (0,jsx_runtime.jsx)(_components.em, {
              children: "(-0.6) + 0.7"
            }), "0.8) / 0.07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.98) / 0.07 = 14.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[3][3] = I3·T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["((-0.2)", (0,jsx_runtime.jsx)(_components.em, {
              children: "(-0.3) + (-0.98)"
            }), "(-0.95)) / 0.07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.99) / 0.07 = 14.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax of S rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exp(S[i]) / sum(exp(S[i]))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonal entries dominate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-entropy loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-log(diagonal probability)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss ≈ 0.01 (very low — model is confident about correct pairs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If off-diagonal entries were higher (e.g., \"dog\" matched \"cat\" text), loss would be higher, forcing the model to better separate these concepts in embedding space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-clip-style-contrastive-loss",
      children: "Python Implementation: CLIP-style Contrastive Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef contrastive_loss(image_embeds, text_embeds, temperature=0.07):\n    \"\"\"\n    image_embeds: (batch_size, embed_dim)\n    text_embeds: (batch_size, embed_dim)\n    \"\"\"\n    batch_size = image_embeds.shape[0]\n\n    # Normalize\n    img_norm = image_embeds / np.linalg.norm(image_embeds, axis=1, keepdims=True)\n    txt_norm = text_embeds / np.linalg.norm(text_embeds, axis=1, keepdims=True)\n\n    # Similarity matrix\n    logits = img_norm @ txt_norm.T / temperature  # (B, B)\n\n    # Labels: diagonal is correct\n    labels = np.arange(batch_size)\n\n    # Cross-entropy for image->text direction\n    exp_logits = np.exp(logits - np.max(logits, axis=1, keepdims=True))\n    probs_i2t = exp_logits / np.sum(exp_logits, axis=1, keepdims=True)\n    loss_i2t = -np.mean(np.log(probs_i2t[np.arange(batch_size), labels] + 1e-8))\n\n    # Cross-entropy for text->image direction\n    probs_t2i = exp_logits.T / np.sum(exp_logits.T, axis=1, keepdims=True)\n    loss_t2i = -np.mean(np.log(probs_t2i[np.arange(batch_size), labels] + 1e-8))\n\n    return (loss_i2t + loss_t2i) / 2\n\n# Demo: aligned pairs\nnp.random.seed(42)\nd = 64\n# Create embeddings where image[i] is similar to text[i]\nimage_embeds = np.random.randn(8, d)\ntext_embeds = image_embeds + np.random.randn(8, d) * 0.1  # slight noise\n\nloss = contrastive_loss(image_embeds, text_embeds)\nprint(f\"Contrastive loss (aligned): {loss:.4f}\")\n\n# Misaligned: shuffle text\nnp.random.shuffle(text_embeds)\nloss_bad = contrastive_loss(image_embeds, text_embeds)\nprint(f\"Contrastive loss (shuffled): {loss_bad:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image encoding (ViT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * L_img * d²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N images, L_img patches per image, d² for attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * L_txt * d²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N texts, L_txt tokens per text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contrastive similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N² * d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise dot products between all N images and N texts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total per batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * (L_img + L_txt) * d² + N² * d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding dominates for large images; N² dominates for large batches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why contrastive loss is O(N²):"
      }), " Computing the full similarity matrix requires comparing every image to every text in the batch. This is why CLIP uses relatively small batches (32,768 is huge for CLIP; most models use 256-1024)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-shot classification on any visual concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires aligned image-text pairs (expensive to collect)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared embedding space for cross-modal retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each modality adds quadratic training cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to many modalities (ImageBind: 6 modalities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain gap between modalities (e.g., text \"cold\" ≠ thermal image \"cold\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables image generation (DALL-E) and understanding (GPT-4V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modality imbalance — one modality dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports fine-grained alignment (region-word)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution and granularity mismatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modality Mismatch:"
          }), " Image of a \"dog\" with text \"cat\" — contrastive loss pushes embeddings apart, but if systematic (many mislabeled pairs), the model learns wrong alignments. Solution: careful data cleaning, robust contrastive loss."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolution Sensitivity:"
          }), " Low-resolution images lose fine detail; high-resolution images are computationally expensive. Solution: multi-scale training, patch-based processing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cultural Bias:"
          }), " CLIP trained on web data inherits Western-centric visual concepts. Solution: geographically diverse training data, cultural adaptation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modality Missing During Inference:"
          }), " Text-only input to image-generation model must still produce coherent output. Solution: classifier-free guidance, text dropout during training."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fine-Grained Understanding Failure:"
          }), " CLIP can tell a \"dog\" from a \"car\" but struggles with \"gray Siberian Husky with blue eyes\". Solution: dense captioning models, region-level contrastive learning."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "176-ai-agents",
      children: "17.6 AI Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "personal assistant"
      }), " doesn't just answer questions — they pick up the phone, search the web, schedule meetings, send emails, and coordinate with others. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI agents"
      }), " extend language models the same way: the model can call external tools (search engines, calculators, APIs, databases), observe the results, and decide what to do next. The key is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reason-act loop"
      }), ": think about what to do, do it, observe the result, and repeat until the task is complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-ai-agents",
      children: "What are AI Agents?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An AI agent is a system where an LLM controls the execution loop: it perceives context, reasons about next actions, invokes tools, and interprets results. The canonical architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[User Input] → [LLM Reasoner] → [Action Decision]\n                                      ↓\n                               [Tool Execution]\n                                      ↓\n                            [Observation → LLM]\n                                      ↓\n                              [Final Response]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-react-reason--act",
      children: "Algorithm: ReAct (Reason + Act)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " User query, list of available tools (with descriptions and schemas), LLM, max iterations"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Final response to user"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System prompt: provide tool descriptions and instructions for the ReAct format"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For iteration = 1 to max_iterations:\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Think:"
        }), " LLM analyzes current state and determines what to do next\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " LLM generates a tool call in structured format (JSON)\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Parse:"
        }), " Extract tool name and arguments from LLM output\nd. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute:"
        }), " Call the tool function with extracted arguments\ne. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Observe:"
        }), " Get tool output and append to context\nf. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Check:"
        }), " If the question can be answered, go to step 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " LLM generates final response synthesizing observations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return final response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION REACT_AGENT(query, tools, llm, max_iter=10):\n    messages = [SYSTEM_PROMPT(tools), USER(query)]\n    \n    FOR iter = 1 TO max_iter:\n        response = llm.GENERATE(messages)\n        messages.APPEND(ASSISTANT(response))\n        \n        IF \"FINAL ANSWER:\" in response:\n            RETURN EXTRACT_ANSWER(response)\n        \n        IF \"THOUGHT:\" in response AND \"ACTION:\" in response:\n            thought = EXTRACT_THOUGHT(response)\n            action_json = EXTRACT_ACTION(response)\n            tool_name = action_json[\"tool\"]\n            tool_args = action_json[\"args\"]\n            \n            IF tool_name in tools:\n                observation = EXECUTE(tools[tool_name], tool_args)\n            ELSE:\n                observation = \"Error: Unknown tool\"\n            \n            messages.APPEND(OBSERVATION(observation))\n    \n    RETURN \"Max iterations reached.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-what-is-the-current-population-of-tokyo-and-what-is-its-area",
      children: "Dry Run Trace Table: \"What is the current population of Tokyo and what is its area?\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      }), " search(q), calculator(expression). Max iterations = 5."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LLM Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool/Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thought"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I need to find the population of Tokyo. Let me search for it."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{\"tool\": \"search\", \"args\": {\"q\": \"Tokyo population 2025\"}}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search(\"Tokyo population 2025\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Tokyo has an estimated population of 14.0 million (2025)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thought"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Now I need to find the area of Tokyo."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{\"tool\": \"search\", \"args\": {\"q\": \"Tokyo area square kilometers\"}}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search(\"Tokyo area square kilometers\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Tokyo covers an area of 2,194 square kilometers\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thought"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I have both values. Let me calculate the population density."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{\"tool\": \"calculator\", \"args\": {\"expression\": \"14_000_000 / 2_194\"}}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calculator(\"14_000_000 / 2_194\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Result: 6,381.04\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The population of Tokyo is approximately 14.0 million, its area is 2,194 km², giving a population density of about 6,381 people per km²."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return to user"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-simple-react-agent",
      children: "Python Implementation: Simple ReAct Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport re\n\n# Tool definitions\nTOOLS = {\n    \"search\": {\n        \"description\": \"Search the web for information\",\n        \"handler\": lambda q: {\n            \"weather\": \"The weather is 22°C and sunny\",\n            \"tokyo population 2025\": \"Tokyo has 14.0 million people (2025)\",\n            \"tokyo area\": \"Tokyo covers 2,194 km²\",\n            \"capital of france\": \"Paris is the capital of France\",\n        }.get(q.lower(), f\"Search results for: {q}\")\n    },\n    \"calculator\": {\n        \"description\": \"Perform mathematical calculations\",\n        \"handler\": lambda expr: eval(expr, {\"__builtins__\": {}}),\n    }\n}\n\ndef react_agent(query, max_iter=5):\n    \"\"\"Simple ReAct agent simulation.\"\"\"\n    messages = [\n        {\"role\": \"system\", \"content\": \"You are a ReAct agent. Output THOUGHT, ACTION (JSON), or FINAL ANSWER.\"},\n        {\"role\": \"user\", \"content\": query}\n    ]\n    context = \"\"\n\n    for iteration in range(max_iter):\n        # Simulate LLM reasoning (in reality, call an LLM API)\n        # Here we use a simple parser on the context to simulate\n        if \"population\" in query.lower() and not context:\n            thought = \"I need to find the population first.\"\n            action = '{\"tool\": \"search\", \"args\": {\"q\": \"Tokyo population 2025\"}}'\n        elif \"area\" in query.lower() and \"population\" in context:\n            thought = \"Now I need the area.\"\n            action = '{\"tool\": \"search\", \"args\": {\"q\": \"Tokyo area\"}}'\n        elif \"density\" in context.lower() or \"km\" in context:\n            thought = \"I have all the data. Here is the answer.\"\n            print(f\"THOUGHT: {thought}\")\n            final = f\"FINAL ANSWER: {query}\\nPopulation: 14.0 million\\nArea: 2,194 km²\"\n            print(final)\n            return final\n        else:\n            thought = \"Let me search.\"\n            action = '{\"tool\": \"search\", \"args\": {\"q\": query}}'\n\n        print(f\"ITERATION {iteration+1}\")\n        print(f\"THOUGHT: {thought}\")\n\n        # Parse action\n        action_data = json.loads(action)\n        tool_name = action_data[\"tool\"]\n        tool_args = action_data[\"args\"]\n        print(f\"ACTION: {tool_name}({tool_args})\")\n\n        # Execute tool\n        if tool_name in TOOLS:\n            observation = str(TOOLS[tool_name][\"handler\"](tool_args[\"q\"]))\n        else:\n            observation = \"Error: unknown tool\"\n        print(f\"OBSERVATION: {observation}\")\n        context += observation + \" \"\n\n    return \"Max iterations reached.\"\n\n# Demo\nresult = react_agent(\"What is the population of Tokyo and its area?\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM call per iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L * d²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration requires a full forward pass through the transformer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total agent run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I * (L * d² + T))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I iterations, each: LLM call + tool execution time T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T) — tool-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search O(log N) for indexed data, calculator O(1), API calls O(network latency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context accumulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I * L_total)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration appends to context — can grow large, increasing LLM cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why iteration count matters:"
      }), " Each ReAct iteration adds tokens to the context window. After 5 iterations with 200 tokens each, the context grows by 1000 tokens, making subsequent LLM calls more expensive. This is why efficient agents aim for 3-5 iterations maximum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solves tasks requiring external knowledge (search, APIs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency — each iteration adds response time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent reasoning — thought traces are interpretable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error propagation — early mistakes compound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool use extends model capabilities beyond training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token cost — each iteration adds to context window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular — tools can be added/removed independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool reliability — model may call tools with wrong arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles multi-step tasks with feedback loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security — tool misuse, prompt injection through tool outputs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Infinite Loop:"
          }), " Agent keeps calling tools without reaching an answer. Solution: max iteration limit, loop detection (repeated identical actions)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tool Hallucination:"
          }), " Agent calls a tool that doesn't exist. Solution: validate tool names against registry, give clear error messages."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Incorrect Arguments:"
          }), " Agent generates wrong JSON syntax or missing required fields. Solution: schema validation, re-prompt with error message, function calling API."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dangerous Tool Calls:"
          }), " Agent tries to execute system commands or modify production data. Solution: tool permissions, allowlist of safe tools, human-in-the-loop for destructive actions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Overload:"
          }), " After many iterations, the context exceeds the model's window. Solution: summarization of earlier iterations, sliding window, truncation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Observation Overflow:"
          }), " Tool returns very long output (e.g., full webpage). Solution: truncate observations, extract key information, chunked processing."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "177-mcp-model-context-protocol",
      children: "17.7 MCP (Model Context Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["USB-C is a universal connector standard — any USB-C device can plug into any USB-C port and exchange data using the same physical interface. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MCP (Model Context Protocol)"
      }), " is the same concept for AI tools: a standardized protocol that lets any LLM connect to any tool or data source using the same API contract. Instead of every model needing custom integrations for every tool, MCP defines a common language for tool discovery, invocation, and response."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-mcp",
      children: "What is MCP?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP (Model Context Protocol), introduced by Anthropic, is an open protocol that standardizes how AI applications connect to external tools and data sources. It follows a client-server architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Client:"
        }), " The AI application (e.g., Claude Desktop, Cline, custom app) that initiates requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Server:"
        }), " A lightweight server that exposes tools, resources, and prompts through a standard JSON-RPC interface"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transport:"
        }), " Communication happens over stdin/stdout (local) or SSE/HTTP (remote)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key MCP primitives:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Primitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client → Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions the LLM can call (search, database query, file read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sources exposed to the LLM (files, API responses, database rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-written prompt templates the LLM can use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server → Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server requests LLM completions (for agent-to-agent communication)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-mcp-tool-call-lifecycle",
      children: "Algorithm: MCP Tool Call Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " User request requiring a tool, MCP client configuration with server endpoints"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Tool execution result integrated into LLM response"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization:"
        }), " Client connects to MCP server, negotiates protocol version, authenticates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovery:"
        }), " Client requests server capabilities (list_tools, list_resources)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM decides:"
        }), " The LLM receives tool descriptions in its system prompt, decides which tool to call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool call request:"
        }), " Client sends JSON-RPC request to MCP server:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Method: \"tools/call\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Params: {name: \"search_tool\", arguments: {query: \"Tokyo population\"}}"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server executes:"
        }), " MCP server executes the tool function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response:"
        }), " Server returns JSON-RPC response with tool result"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM consumes:"
        }), " Client feeds tool output back to LLM as an observation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM responds:"
        }), " LLM synthesizes final answer incorporating tool output"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// MCP Server\nFUNCTION MCP_SERVER(tool_registry):\n    LISTEN_FOR_MESSAGES():\n        message = RECEIVE_JSON_RPC()\n        \n        SWITCH message.method:\n            CASE \"initialize\":\n                RETURN {protocolVersion: \"2025-03-26\", capabilities: [\"tools\"]}\n            \n            CASE \"tools/list\":\n                RETURN {\n                    tools: [\n                        {name: \"search\", description: \"Web search\", \n                         inputSchema: {type: \"object\", properties: {q: {type: \"string\"}}}},\n                        {name: \"calculator\", description: \"Math\",\n                         inputSchema: {type: \"object\", properties: {expr: {type: \"string\"}}}}\n                    ]\n                }\n            \n            CASE \"tools/call\":\n                tool_name = message.params.name\n                args = message.params.arguments\n                result = tool_registry[tool_name](args)\n                RETURN {content: [{type: \"text\", text: result}]}\n\n\n// MCP Client\nFUNCTION MCP_CLIENT(llm, server_url):\n    tools = SEND_REQUEST(\"tools/list\")\n    system_prompt = BUILD_PROMPT_WITH_TOOLS(tools)\n    \n    user_input = WAIT_FOR_INPUT()\n    messages = [{role: \"system\", content: system_prompt}, {role: \"user\", content: user_input}]\n    \n    WHILE True:\n        response = llm.GENERATE(messages)\n        \n        IF response.type == \"final_answer\":\n            RETURN response.text\n        \n        IF response.type == \"tool_call\":\n            result = SEND_REQUEST(\"tools/call\", response.tool_name, response.args)\n            messages.APPEND({role: \"tool\", content: result})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-mcp-communication-flow",
      children: "Dry Run Trace Table: MCP Communication Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " User asks \"What was the GDP of Japan in 2024?\" Client has \"search\" and \"calculator\" MCP tools."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message (JSON-RPC)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Receiver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"method\":\"initialize\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"protocolVersion\":\"2025-03-26\",\"capabilities\":[\"tools\"]}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"method\":\"tools/list\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"tools\":[...search, calculator...]}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds system prompt with tool schemas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I need to search for Japan GDP 2024\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"method\":\"tools/call\",\"params\":{\"name\":\"search\",\"arguments\":{\"q\":\"Japan GDP 2024 USD\"}}}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes search API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"content\":[{\"type\":\"text\",\"text\":\"Japan GDP 2024: $4.21 trillion\"}]}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feeds observation to LLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synthesizes final answer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns \"Japan's GDP in 2024 was approximately $4.21 trillion\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-minimal-mcp-server",
      children: "Python Implementation: Minimal MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport sys\n\n# Tool implementations\ndef handle_search(args):\n    query = args.get(\"q\", \"\")\n    results = {\n        \"japan gdp 2024\": \"Japan GDP 2024: $4.21 trillion\",\n        \"tokyo population\": \"Tokyo population: 14.0 million\",\n    }\n    return results.get(query.lower(), f\"Searched for: {query}\")\n\ndef handle_calculator(args):\n    expr = args.get(\"expression\", \"\")\n    try:\n        return f\"Result: {eval(expr)}\"\n    except Exception as e:\n        return f\"Error: {e}\"\n\nTOOLS = {\n    \"search\": {\"handler\": handle_search, \"schema\": {\"q\": \"string\"}},\n    \"calculator\": {\"handler\": handle_calculator, \"schema\": {\"expression\": \"string\"}},\n}\n\ndef handle_request(request):\n    method = request.get(\"method\")\n    params = request.get(\"params\", {})\n\n    if method == \"initialize\":\n        return {\"protocolVersion\": \"2025-03-26\", \"capabilities\": [\"tools\"]}\n\n    elif method == \"tools/list\":\n        return {\n            \"tools\": [\n                {\n                    \"name\": name,\n                    \"description\": f\"A {name} tool\",\n                    \"inputSchema\": {\"type\": \"object\", \"properties\": t[\"schema\"]}\n                }\n                for name, t in TOOLS.items()\n            ]\n        }\n\n    elif method == \"tools/call\":\n        tool = TOOLS.get(params.get(\"name\"))\n        if not tool:\n            return {\"isError\": True, \"content\": [{\"type\": \"text\", \"text\": \"Unknown tool\"}]}\n        result = tool[\"handler\"](params.get(\"arguments\", {}))\n        return {\"content\": [{\"type\": \"text\", \"text\": str(result)}]}\n\n    return {\"isError\": True, \"content\": [{\"type\": \"text\", \"text\": \"Unknown method\"}]}\n\n# Main server loop\ndef run_server():\n    print(\"MCP Server running...\", file=sys.stderr)\n    for line in sys.stdin:\n        try:\n            request = json.loads(line.strip())\n            response = handle_request(request)\n            print(json.dumps(response), flush=True)\n        except json.JSONDecodeError as e:\n            print(json.dumps({\"isError\": True, \"content\": [{\"type\": \"text\", \"text\": str(e)}]}), flush=True)\n\nif __name__ == \"__main__\":\n    run_server()  # Usage: python server.py\n`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-minimal-mcp-client",
      children: "Python Implementation: Minimal MCP Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport subprocess\n\nclass MCPClient:\n    def __init__(self, server_script):\n        self.proc = subprocess.Popen(\n            [\"python\", server_script],\n            stdin=subprocess.PIPE,\n            stdout=subprocess.PIPE,\n            text=True, bufsize=1\n        )\n\n    def send_request(self, method, params=None):\n        request = {\"method\": method, \"params\": params or {}}\n        self.proc.stdin.write(json.dumps(request) + \"\\n\")\n        self.proc.stdin.flush()\n        response = self.proc.stdin.readline()  # In real impl, read from stdout\n        return json.loads(response)\n\n    def list_tools(self):\n        # Simplified: in real MCP, send tools/list request\n        return [\"search\", \"calculator\"]\n\n    def call_tool(self, name, args):\n        print(f\"Calling tool: {name}({json.dumps(args)})\")\n        # In real MCP, this sends tools/call request\n        return f\"Result from {name}\"\n\n    def close(self):\n        self.proc.terminate()\n\n# Demo\n# client = MCPClient(\"mcp_server.py\")\n# tools = client.list_tools()\n# print(f\"Available tools: {tools}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single request returns all tool definitions — constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(T) — tool dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The protocol overhead is O(1) JSON serialization, but tool execution varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tool orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N tool calls in sequence — each adds round-trip latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-RPC overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) message size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message size proportional to M (arguments + results)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why MCP is efficient:"
      }), " The protocol itself adds negligible overhead (microseconds for JSON serialization). The bottleneck is always the tool execution and LLM reasoning, not the protocol layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardizes tool interfaces across all AI apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relatively new protocol — ecosystem still evolving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to add new tools — write one MCP server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead for simple tool calls (JSON-RPC may be excessive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language-agnostic (any language can implement)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in authentication/authorization standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports local (stdio) and remote (SSE) transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging distributed MCP systems is complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool schemas and descriptions are discoverable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting and error handling left to implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Timeout:"
          }), " Tool execution exceeds timeout limit. Solution: async tool execution, timeout parameter, cancellation tokens."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Malformed Schema:"
          }), " Tool returns data that doesn't match its declared schema. Solution: response validation, error wrapping."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auth Failure:"
          }), " MCP server requires authentication but client hasn't provided credentials. Solution: auth handshake at initialization, token refresh."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Crash:"
          }), " MCP server process dies mid-request. Solution: health checks, automatic restart, retry logic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Mismatch:"
          }), " Client and server support different protocol versions. Solution: version negotiation during initialization, backward compatibility."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource Exhaustion:"
          }), " Too many concurrent tool calls overwhelm the server. Solution: connection pooling, rate limiting, queue management."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "178-autogpt-and-autonomous-agent-systems",
      children: "17.8 AutoGPT and Autonomous Agent Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "startup founder"
      }), " who has a big goal (\"build a profitable SaaS business\"). They don't execute every task themselves — they decompose the goal into steps (research → build → market → sell), delegate sub-tasks, check progress, and adjust strategy based on results. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AutoGPT"
      }), " works the same way: given a high-level goal, it creates sub-tasks, executes them using tools, evaluates results, and iterates until the goal is achieved or it hits limits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-autogpt--autonomous-agent-systems",
      children: "What are AutoGPT / Autonomous Agent Systems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AutoGPT, BabyAGI, and similar systems are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "autonomous AI agents"
      }), " that operate in a continuous loop: set goals, create sub-tasks, execute tasks with tools, evaluate outcomes, and re-prioritize. Unlike ReAct (which handles individual queries), these systems maintain persistent state and long-running execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Queue:"
        }), " A priority queue of sub-tasks to execute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution Engine:"
        }), " LLM + tools for each task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory:"
        }), " Short-term (context window) and long-term (vector database)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Creator:"
        }), " LLM that decomposes goals and creates new sub-tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization:"
        }), " Dynamically reorder tasks based on progress"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-autonomous-agent-loop",
      children: "Algorithm: Autonomous Agent Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " High-level goal (e.g., \"Research and summarize quantum computing breakthroughs in 2025\"), available tools, max_steps"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Completed goal or partial progress"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Create initial task from the goal \"Understand the goal and plan approach\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop"
        }), " for step = 1 to max_steps:\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dequeue:"
        }), " Get highest-priority task from task queue\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Context builder:"
        }), " Compile relevant context (goal, previous results, recent memories)\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute:"
        }), " Send task + context to LLM; LLM may use tools\nd. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Store result:"
        }), " Save execution result to memory (short-term + vector DB)\ne. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create new tasks:"
        }), " Based on result, generate next sub-tasks\nf. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritize:"
        }), " Reorder task queue based on importance and dependencies\ng. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate:"
        }), " Check if goal is complete; if so, break"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synthesize:"
        }), " Summarize all results into final output"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return final result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION AUTONOMOUS_AGENT(goal, tools, max_steps=20):\n    task_queue = PRIORITY_QUEUE()\n    task_queue.ADD(Task(description=\"Plan approach for: \" + goal, priority=1))\n    completed_tasks = []\n    context = \"\"\n    \n    FOR step = 1 TO max_steps:\n        IF task_queue.IS_EMPTY():\n            BREAK\n        \n        current_task = task_queue.POP()      // Highest priority\n        LOG(\"Step\", step, \"Executing:\", current_task)\n        \n        // Build context\n        context = BUILD_CONTEXT(goal, completed_tasks[-5:], current_task)\n        \n        // Execute with LLM\n        result = LLM_EXECUTE(context, current_task, tools)\n        \n        // Store\n        completed_tasks.APPEND({task: current_task, result: result})\n        MEMORY_STORE(current_task, result)\n        \n        // Create next tasks\n        new_tasks = LLM_CREATE_TASKS(goal, current_task, result)\n        FOR task in new_tasks:\n            task_queue.ADD(task)\n        \n        // Re-prioritize\n        task_queue = LLM_PRIORITIZE(task_queue, goal)\n        \n        // Check completion\n        IF LLM_IS_COMPLETE(goal, completed_tasks):\n            LOG(\"Goal achieved!\")\n            BREAK\n    \n    RETURN SYNTHESIZE(goal, completed_tasks)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-plan-a-birthday-party",
      children: "Dry Run Trace Table: \"Plan a birthday party\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Initial task: \"Plan the overall party approach.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LLM Response / Tool Calls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Tasks Created"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority Queue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Party for 20 people, budget $500, outdoor BBQ theme\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research venues, Plan menu, Guest list, Budget breakdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Research:1, Menu:2, Guest:2, Budget:1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research venues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search(\"park BBQ rental [city]\") → \"Public park: $50, backyard: free\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check weather, Buy decorations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Budget:1, CheckWeather:1, Menu:2, Guest:2, Decor:2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check weather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search(\"weather forecast [date]\") → \"75°F, sunny, 10% rain\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rain backup plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Budget:1, Menu:2, Guest:2, Decor:2, RainPlan:2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget breakdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calculator(\"500 - 50 = 450, /4 = 112.50 per category\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (redundant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Menu:2, Guest:2, Decor:2, RainPlan:2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan menu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"BBQ: burgers, hot dogs, salad, cake. $120 total\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create shopping list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Guest:2, Decor:2, RainPlan:2, Shopping:3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"20 names → send invites\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send invitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Decor:2, RainPlan:2, Shopping:3, Invites:3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send invitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Auto-generated email drafts complete\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(task complete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Decor:2, RainPlan:2, Shopping:3]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Complete party plan with venue, budget, menu, guest list, and weather backup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-simplified-autogpt",
      children: "Python Implementation: Simplified AutoGPT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nfrom collections import deque\n\nclass Task:\n    def __init__(self, description, priority=5, dependencies=None):\n        self.description = description\n        self.priority = priority\n        self.dependencies = dependencies or []\n\n    def __repr__(self):\n        return f\"[P{self.priority}] {self.description[:50]}\"\n\nclass AutonomousAgent:\n    def __init__(self, goal, tools=None):\n        self.goal = goal\n        self.tools = tools or {}\n        self.task_queue = deque()\n        self.completed = []\n        self.memory = []\n        self.max_steps = 10\n\n    def add_task(self, description, priority=5):\n        self.task_queue.append(Task(description, priority))\n\n    def execute_task(self, task):\n        \"\"\"Simulate LLM execution of a task.\"\"\"\n        print(f\"  Executing: {task.description}\")\n\n        # Simulate tool usage\n        for keyword, tool in self.tools.items():\n            if keyword in task.description.lower():\n                result = tool()\n                print(f\"    Tool result: {result}\")\n                return f\"Completed. {result}\"\n\n        return f\"Completed: {task.description}\"\n\n    def create_subtasks(self, last_task, result):\n        \"\"\"Simulate LLM creating next tasks.\"\"\"\n        words = self.goal.lower().split()\n        ignore = {\"a\", \"an\", \"the\", \"and\", \"or\", \"in\", \"of\", \"to\", \"for\", \"with\"}\n        keywords = [w for w in words if w not in ignore][:3]\n\n        new_tasks = []\n        for kw in keywords:\n            new_tasks.append(f\"Research {kw} details\")\n        return new_tasks\n\n    def synthesize_results(self):\n        output = f\"Goal: {self.goal}\\n\\nCompleted Tasks:\\n\"\n        for t, r in self.completed:\n            output += f\"- {t.description}: {r}\\n\"\n        return output\n\n    def run(self):\n        self.add_task(f\"Create plan for: {self.goal}\", priority=1)\n        print(f\"Starting autonomous agent for: {self.goal}\")\n\n        for step in range(self.max_steps):\n            if not self.task_queue:\n                print(\"Task queue empty. Goal complete!\")\n                break\n\n            task = self.task_queue.popleft()\n            print(f\"\\nStep {step+1}: {task}\")\n\n            result = self.execute_task(task)\n            self.completed.append((task, result))\n            self.memory.append(f\"{task.description}: {result}\")\n\n            subtasks = self.create_subtasks(task, result)\n            for s in subtasks:\n                self.add_task(s, priority=step + 5)\n\n        return self.synthesize_results()\n\n# Demo\nagent = AutonomousAgent(\n    goal=\"Research quantum computing breakthroughs in 2025\",\n    tools={\"search\": lambda: \"Found 3 major breakthroughs in 2025\"}\n)\nfinal = agent.run()\nprint(\"\\n\" + final)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K) per step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K new tasks created — constant per iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L * d²) per task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each task requires LLM forward pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log M) or O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M memory entries — depends on indexing (vector DB vs. flat scan)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S * (L * d² + K))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S steps, each with LLM call + task creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-prioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N tasks in queue sorted by priority"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why autonomous agents are slow:"
      }), " Each step requires a full LLM call (seconds), tool execution (variable), and task creation (another LLM call). A 10-step agent might take 30-60 seconds for a single goal. This makes them unsuitable for real-time applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles complex, multi-step goals autonomously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow — each step takes seconds to minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent memory across execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error propagation — early mistakes derail the whole plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool use enables real-world interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource intensive — many LLM calls per goal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts to new information dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety concerns — autonomous actions without human oversight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decomposes problems into manageable sub-tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task drift — agent may go off-topic or create irrelevant sub-tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Infinite Subtask Generation:"
          }), " The agent keeps creating new sub-tasks without completing the main goal. Solution: max step limit, goal completion check, task cycle detection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Drift:"
          }), " Agent goes off-topic (e.g., instead of planning a party, starts researching party hat manufacturing). Solution: constraint prompts, goal re-anchoring, relevance scoring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource Exhaustion:"
          }), " Agent calls expensive APIs repeatedly. Solution: cost tracking, API call limits, caching results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inconsistent State:"
          }), " Different parallel tasks produce contradictory information. Solution: resolution protocol, confidence-based filtering, human-in-the-loop for conflicts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Loop Detection:"
          }), " Agent repeats the same task with minor variations. Solution: deduplication of task descriptions, similarity checking, loop detection heuristics."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security:"
          }), " Agent reads or modifies files it shouldn't. Solution: sandboxing, permission prompts, restricted execution environment."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hallucination Propagation:"
          }), " One incorrect result cascades through all subsequent tasks. Solution: verification steps, cross-checking, uncertainty estimation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generative-ai-types-comparison",
      children: "Generative AI Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Quality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4, Claude, LLaMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer decoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trillions of text tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High coherence, may hallucinate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-5s per response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination, bias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DALL-E 3, Stable Diffusion, Midjourney"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion transformer (DiT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billions of text-image pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photorealistic, artistic styles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-10s per image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency, anatomy failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Copilot, Codex, Cursor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer + code corpus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billions of code tokens (GitHub)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional, idiomatic code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1-2s per suggestion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security vulnerabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Music"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suno, Udio, MusicLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion + audio tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of audio tracks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coherent melodies, lyrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-30s per track"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-form coherence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Video"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sora, Runway Gen-3, Pika"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion transformer (3D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of video clips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60s photorealistic video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 min per clip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal consistency, physics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-comparison-dimensions",
      children: "Detailed Comparison Dimensions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Image"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Music"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Video"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latent pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete tokens + AST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spectrogram tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latent video frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sampling method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive / softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse diffusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language + context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + melody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + reference video"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 200K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024×1024 pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1000+ lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-180 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-60 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10-100M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1-10M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1-10M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.5-5M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10-100M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.01/query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.01-0.10/image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.001/suggestion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.10/track"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$1-10/clip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perplexity, human eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FID, CLIP score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass@k, functional tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOS, genre accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FVD, human eval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Current best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4o, Claude 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DALL-E 3, SDXL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude Code, Copilot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suno V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sora, Veo 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "llm-architecture-comparison",
      children: "LLM Architecture Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPT-4 Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LLaMA 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claude 4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gemini"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Developer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google DeepMind"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only with RoPE + GQA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only with HHH alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only with MoE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.8T (MoE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8B / 70B / 405B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown (est. >100B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown (est. >1T MoE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context window"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2M tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokenization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cl100k_base (BPE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SentencePiece (BPE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom tokenizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SentencePiece"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Positional encoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoPE (Rotary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attention variant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped-query (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Activation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GELU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SwiGLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GELU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet + licensed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15T tokens (mostly public)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet + RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet + Google data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + image + audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text only (3.1: multilingual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + image + audio + video"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key innovation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instruction tuning, RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constitutional AI, safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MoE, massive context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open-source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (weights available)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API cost (1M tokens)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$10-30 (input)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.20-2.00 (via providers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$3-15 (input)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$1.50-7.50 (input)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strongest at"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad reasoning, coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency, multilingual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety, nuanced reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long context, multimodality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-architectural-differences-explained",
      children: "Key Architectural Differences Explained"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Grouped-Query Attention (GQA):"
      }), " LLaMA 3 uses GQA where multiple query heads share a single key/value head. This reduces the KV cache size by ~4x during inference, enabling longer context and faster generation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Mixture of Experts (MoE):"
      }), " GPT-4 and Gemini use MoE layers where only a subset of parameters activates per token. GPT-4 has ~1.8T total parameters but only ~280B active per token. This allows larger models without proportional compute increase."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Rotary Position Embedding (RoPE):"
      }), " LLaMA, Claude, and Gemini use RoPE which encodes position by rotating the query/key vectors. This enables the model to handle arbitrary sequence lengths (up to context limit) without learned position parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Constitutional AI:"
      }), " Claude uses constitutional AI during RLHF — the model is trained to self-correct based on a constitution of principles, reducing harmful outputs while maintaining capability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-prompt-engineering-and-what-are-the-key-techniques",
      children: "Q1: What is prompt engineering and what are the key techniques?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prompt engineering is the practice of designing input prompts to elicit desired outputs from LLMs. Key techniques:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-shot prompting:"
        }), " Describe the task directly — \"Translate to French: hello\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Few-shot prompting:"
        }), " Provide 2-5 examples before the query"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain-of-thought (CoT):"
        }), " Encourage step-by-step reasoning — \"Let's think step by step\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree-of-thought (ToT):"
        }), " Explore multiple reasoning paths simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role prompting:"
        }), " Assign a persona — \"You are a senior software engineer\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structured output:"
        }), " Request JSON, markdown, or specific format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative prompting:"
        }), " Specify what NOT to do"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delimiter separation:"
        }), " Use clear delimiters (```, ---) to separate instructions from input"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Start with zero-shot, add few-shot examples if quality is poor, use CoT for reasoning tasks, and always validate outputs for structured formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-rag-retrieval-augmented-generation-patterns",
      children: "Q2: Explain RAG (Retrieval-Augmented Generation) patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RAG combines a retrieval system with an LLM to ground generation in external knowledge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Naive RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query → Retrieve (vector DB) → Concatenate chunks + query → LLM → Answer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple, single retrieval step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good for factual Q&A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited by single-pass retrieval quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Advanced RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query → Query rewriting → Retrieve → Re-rank → Concatenate → LLM → Answer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves retrieval via query rewriting (LLM restates the query)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-ranker filters irrelevant chunks before LLM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Much higher accuracy than naive RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Agentic RAG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query → Agent → (Search → Critic → Refine) loop → Answer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent iteratively retrieves and critiques results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can ask follow-up retrieval questions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for complex, multi-step research queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RAG vs Fine-tuning:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fine-tuning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge freshness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static at training time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$100-10,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (retrieval step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facts, dynamic data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style, behavior, format"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-design-an-ai-agent-system-for-production",
      children: "Q3: How do you design an AI agent system for production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A production AI agent requires these elements:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool Registry:"
        }), " All tools defined with name, description, input schema (JSON Schema), output format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestrator:"
        }), " Controls the agent loop — think → act → observe → repeat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context Manager:"
        }), " Tracks conversation history, tool outputs, relevant memories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrails:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input guard: Validate user queries for injection or harmful content"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Output guard: Validate LLM outputs before execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tool guard: Verify tool calls against allowlist, rate limits"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Retry with backoff for transient failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Graceful degradation — answer without tools if unavailable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Human handoff for uncertain or high-stakes decisions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observability:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Log every thought, action, observation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trace visualization for debugging"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cost tracking per request"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluation:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task completion rate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tool call accuracy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Harmlessness score"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-safety-considerations-in-modern-ai-systems",
      children: "Q4: What are safety considerations in modern AI systems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AI safety spans multiple dimensions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alignment:"
          }), " Ensuring model goals align with human intentions"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RLHF: Train reward model from human preferences"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Constitutional AI: Model self-corrects based on principles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Debate: Models critique each other's outputs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red-teaming:"
          }), " Systematic adversarial testing"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated: LLM-based red team generates attack prompts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual: Human experts probe for vulnerabilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structural: Find systematic failure modes (e.g., all math errors, all bias cases)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Guardrails:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pre-filter: Block harmful inputs before they reach the model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Post-filter: Validate outputs before displaying to user"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Continuous: Monitor for drift in model behavior"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Privacy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Training data extraction attacks — model memorizes sensitive data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mitigation: deduplication, differential privacy, data audit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inference privacy — users' queries should not leak"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Emergent Risks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Capability amplification: Model improves its own capabilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reward hacking: Model optimizes for proxy metrics instead of true goal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Power-seeking: Model takes actions to maintain control"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-chatgpt-openai",
      children: "1. ChatGPT (OpenAI)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4o, o3, o4-mini"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only transformer with MoE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training + SFT + RLHF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversational AI, coding, analysis, vision, browsing, DALL-E integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K tokens (GPT-4o)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web search, code interpreter (Python sandbox), DALL-E, file upload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time streaming with speculative decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100M+ weekly active users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-github-copilot-microsoftgithub",
      children: "2. GitHub Copilot (Microsoft/GitHub)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codex (GPT-3 derived) → GPT-4o based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only transformer fine-tuned on code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-trained on natural language + fine-tuned on public GitHub repos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code completion, chat-based code generation, refactoring, debugging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VS Code, JetBrains, Neovim, Visual Studio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confidence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows multiple suggestions ranked by confidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current file, open tabs, recent edits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency requirement — <500ms for completions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-midjourney",
      children: "3. Midjourney"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion transformer (proprietary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text encoder (CLIP) → diffusion model → upscaler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of text-image pairs (licensed + curated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photorealistic image generation, style transfer, inpainting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text prompt (natural language + parameters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024×1024 images, 4 variations per prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upscaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x, 4x upscale with detail enhancement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU clusters — ~10s per generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discord-based interface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-autogpt-significant-gravitas",
      children: "4. AutoGPT (Significant Gravitas)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4 (backbone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct loop + task queue + vector memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous goal completion, web browsing, file I/O, code execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pinecone vector DB for long-term storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Plugins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensible plugin system for custom tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limitations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context window fills up during long runs, error compounding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research automation, content generation, data analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be $1-10+ for a single goal completion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-claude-anthropic",
      children: "5. Claude (Anthropic)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude 3.5 Sonnet → Claude 4 Opus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only with Constitutional AI alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training + Constitutional AI + RLHF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long document analysis (200K tokens), code generation, safe dialogue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-class MCP support for tool integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computer use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can operate computer interfaces (beta)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered harmlessness — refuses harmful requests gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow but thorough — designed for quality over speed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-these-systems-use-modern-ai-concepts",
      children: "How These Systems Use Modern AI Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "LLM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Multimodal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Agent Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Tool Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChatGPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "GPT-4o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vision, DALL-E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Search browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Basic (code interpreter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Search, Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copilot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Codex/GPT-4o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Context-aware FIM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "IDE integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Midjourney"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Image generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AutoGPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "GPT-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full autonomous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Diverse plugins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Claude 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "MCP-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "MCP tool server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Modality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Training Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Capability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Transformer decoder (MoE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text, image, audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Massive text + vision + audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot, reasoning, coding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Dual encoder (ViT + text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text + Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "400M text-image pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-shot classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DALL-E 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Diffusion + LLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text → Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text-image pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-image generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Multimodal transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text, image, audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Multi-modal web data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time cross-modal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLaMA 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Decoder-only (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text (multilingual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15T tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claude 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Decoder-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text, image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Curated + RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety, long context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gemini"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Decoder-only (MoE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text, image, audio, video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Google-scale data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive context (2M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Diffusion transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text → Video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Millions of video clips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photorealistic video gen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "o3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Reasoner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "RL + CoT tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--modern-ai-concepts",
      children: "Quick Reference — Modern AI Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network using self-attention instead of recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel processing of all tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each token computes weighted sum of all tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L²) — quadratic in sequence length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic unit of text (word/subword/character)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.75 words per token in English"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KV cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached key/value vectors for efficient generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turns O(L²) generation into O(L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Train on unlabeled data with self-supervised objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning universal patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapt pre-trained model to specific task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small data, low learning rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn from human feedback via reward model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aligns model with human values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-context learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn from examples in the prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No gradient updates needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capabilities appearing only at sufficient scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualitative jumps at threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power-law relationship between compute and performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable improvement with scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chinchilla optimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal ratio of tokens to parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~6:1 tokens:parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls randomness in generation (0=deterministic, 1=creative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher = more diverse output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only sample from top K highest-probability tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents unlikely token selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top-p (nucleus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample from smallest set of tokens whose cumulative prob > p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive version of top-k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval-Augmented Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grounds LLM in external knowledge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reason + Act loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaves thinking with tool use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Context Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardize AI-tool communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MoE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixture of Experts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active subset of parameters per token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GQA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped-Query Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared KV heads reduce memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RoPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotary Position Embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encodes position via rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DiT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces U-Net with transformer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Audio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-Context Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multimodal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generative AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What makes the transformer architecture different from RNNs for sequence processing?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Transformers use recurrence; RNNs use attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Transformers process all tokens in parallel via self-attention; RNNs process tokens sequentially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Transformers are smaller than RNNs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Transformers cannot handle long sequences"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Self-attention enables parallel token processing, eliminating the sequential bottleneck of RNNs and allowing efficient training on much longer sequences."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " In-context learning allows LLMs to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Learn new concepts during training with no examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Perform tasks from examples provided in the prompt without parameter updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only answer questions about the training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Generate code without any input"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) In-context learning uses examples (few-shot) or instructions (zero-shot) in the prompt itself — no gradient updates or fine-tuning is needed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " The Chinchilla scaling law findings suggest that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) More parameters always improve performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) For optimal training, the number of training tokens should be roughly 6× the number of model parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Larger models are always more sample-efficient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Compute optimality is irrelevant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Chinchilla showed that many large models were undertrained — optimal performance for a given compute budget comes from balancing model size and training tokens (~6:1 tokens-to-parameters ratio)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In the ReAct agent framework, what happens after the model generates an action?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The model immediately gives the final answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The action is saved for future training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The tool is executed, observation is returned, and reasoning continues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The model terminates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) In ReAct, actions lead to tool execution, the observation feeds back into the reasoning loop, and the model decides whether to take another action or produce the final answer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the primary purpose of MCP (Model Context Protocol)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To replace the transformer architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To standardize how AI applications connect to external tools and data sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To train models faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To encrypt model weights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) MCP provides a standard JSON-RPC protocol for AI applications to discover and invoke tools, making tool integration plug-and-play across different AI systems."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Which component of CLIP enables zero-shot image classification?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The diffusion process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The shared embedding space between text and images learned via contrastive loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The reinforcement learning loop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The image upsampling layers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) CLIP learns to align text and image embeddings in a shared space. For zero-shot classification, it compares an image embedding against text embeddings of class names — the closest match is the prediction."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " What is the time complexity of self-attention in a transformer?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(L)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(L log L)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(L² × d)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(d²)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Self-attention computes pairwise dot products between all L tokens, each of dimension d, giving O(L² × d) time and O(L²) memory. This quadratic cost is the main bottleneck for long sequences."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " What causes the quadratic complexity in autonomous agent systems like AutoGPT?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The number of tokens in each tool call"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The iterative loop of task creation, execution, and re-prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The model size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The training data size"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Each iteration in AutoGPT requires LLM calls for task execution, result analysis, and new task creation. The number of steps multiplied by the complexity of each step creates multiplicative overhead — O(S × L × d²) for S steps."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9:"
      }), " Which attention variant do LLaMA 3 models use to reduce KV cache memory?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Multi-head attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Grouped-query attention (GQA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Cross-attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Linear attention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) GQA allows multiple query heads to share a single key/value head, reducing the KV cache size by ~4x compared to standard multi-head attention while maintaining most of the quality."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10:"
      }), " In autonomous agents, what is \"task drift\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The agent learns new tasks faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The agent goes off-topic and creates irrelevant sub-tasks instead of progressing toward the goal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Tasks are completed automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The model forgets previous tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Task drift occurs when the agent creates sub-tasks that are tangential or irrelevant to the main goal, such as researching party hat manufacturing when planning a birthday party. Mitigation includes goal re-anchoring and relevance scoring."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how self-attention enables parallel token processing in transformers. Why is this better than the sequential processing of RNNs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish emergent abilities from capabilities explicitly trained. Provide three examples of emergent abilities in LLMs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare in-context learning with fine-tuning. What are the trade-offs in terms of cost, data requirements, and capability?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between zero-shot, one-shot, and few-shot prompting. When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how the KV cache improves transformer inference efficiency. What is the complexity improvement?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare encoder-only (BERT), decoder-only (GPT), and encoder-decoder (T5) architectures. What are their respective strengths?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does temperature affect text generation? What happens at T=0 vs T=1 vs T=2?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the ReAct loop. How does it differ from simple prompting for question answering?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is MCP and why is it important for AI tool integration? Compare it with custom function calling APIs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between naive RAG, advanced RAG, and agentic RAG. Which one would you use for a customer support chatbot?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simplified single-head self-attention mechanism in Python. Demonstrate how attention weights depend on input similarity. Create a trace table for a 3-token sequence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a ReAct prompt for a scientific question-answering agent. Include at least three tool-use examples. Implement the tool execution loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a CLIP-style contrastive loss function. Generate sample image and text embeddings and show how the loss changes when pairs are misaligned."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an MCP server with at least two tools. Show the initialization, discovery, and tool call lifecycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a minimal AutoGPT system that takes a goal, creates sub-tasks, executes them with simulated LLM calls, and synthesizes results."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a multimodal search system: implement a simplified CLIP that takes image and text embeddings, computes similarity scores, and returns ranked results. Create a test set of at least 5 image-text pairs and evaluate retrieval accuracy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a production agent loop with: (a) tool registry with schema validation, (b) ReAct reasoning loop with max iteration guard, (c) error handling for tool failures, (d) token cost tracking, (e) observability logging. Test with a multi-step research query."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement a RAG pipeline that: (a) chunks a document, (b) embeds chunks using a sentence transformer, (c) retrieves top-k relevant chunks for a query, (d) generates an answer using an LLM. Compare naive RAG with advanced RAG (query rewriting + re-ranking)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a few-shot chain-of-thought prompt for a multi-step reasoning task (e.g., calculating compound interest, solving a logic puzzle, or planning a trip with constraints). Analyze the model's reasoning path and identify any errors. Then implement the task as an autonomous agent that uses a calculator tool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "research-questions",
      children: "Research Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "20",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the \"Attention Is All You Need\" paper (Vaswani et al., 2017). Explain how the transformer architecture improves upon the seq2seq model with attention."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare scaling laws from Kaplan et al. (2020) and Hoffmann et al. (2022, Chinchilla). Why did Chinchilla conclude that most models were undertrained?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research emergent abilities in LLMs (Wei et al., 2022). Which abilities are truly emergent vs. continuously improving with scale?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern AI represents a paradigm shift from hand-crafted rule-based systems to data-driven deep learning. The transformer architecture, with its parallel self-attention mechanism, is the foundation upon which modern AI is built. This chapter covered the full spectrum:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Foundations:"
      }), " The deep learning revolution replaced manual feature engineering with end-to-end learning through backpropagation. Generative AI extends this by learning the data distribution itself rather than just decision boundaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Large Language Models:"
      }), " Decoder-only transformers (GPT, LLaMA, Claude) predict the next token, producing models with emergent abilities including in-context learning, chain-of-thought reasoning, and instruction following. The pre-train → fine-tune → RLHF pipeline produces increasingly capable and aligned models."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multimodal AI:"
      }), " Models like CLIP bridge text and vision through contrastive learning in shared embedding spaces. This enables zero-shot classification, text-to-image generation (DALL-E, Midjourney), and video generation (Sora)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Agents and Protocols:"
      }), " The ReAct pattern (interleaved reasoning and action) enables LLMs to use tools. MCP standardizes tool integration across applications. Autonomous agent systems like AutoGPT extend this to long-running, multi-step goal completion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key themes running through modern AI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale is a feature:"
        }), " Larger models + more data = better capabilities, often with sharp emergent transitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transfer is universal:"
        }), " Pre-train once, adapt everywhere (fine-tuning, in-context learning, instruction tuning)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alignment is essential:"
        }), " Raw capability without alignment produces harmful outputs — RLHF, constitutional AI, and guardrails are not optional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The agent paradigm dominates:"
        }), " Modern AI is moving from \"answer-only\" to \"perceive-reason-act\" systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standardization is emerging:"
        }), " Protocols like MCP enable interoperable tool ecosystems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The fastest way to gain practical modern AI skills is to build: implement a simple transformer from scratch, build a RAG pipeline, create a ReAct agent, and experiment with fine-tuning via LoRA. Theory + practice together build genuine understanding."]
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