"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9773],{

/***/ 29760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_07_knowledge_distillation_md_aa8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-07-knowledge-distillation-md-aa8.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_07_knowledge_distillation_md_aa8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/07-knowledge-distillation","title":"Knowledge Distillation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":329,"frontMatter":{"id":"07-knowledge-distillation","slug":"/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","title":"Knowledge Distillation","sidebar_label":"Knowledge Distillation","sidebar_position":329},"sidebar":"placementSidebar","previous":{"title":"Model Pruning","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/06-model-pruning"},"next":{"title":"Attention & KV Cache Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation.md


const frontMatter = {
	id: '07-knowledge-distillation',
	slug: '/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation',
	title: 'Knowledge Distillation',
	sidebar_label: 'Knowledge Distillation',
	sidebar_position: 329
};
const contentTitle = 'Knowledge Distillation';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "1.1 Logit Distillation — Softmax Temperature and KL Divergence",
  "id": "11-logit-distillation--softmax-temperature-and-kl-divergence",
  "level": 3
}, {
  "value": "1.2 Feature Distillation — Intermediate Layer Matching",
  "id": "12-feature-distillation--intermediate-layer-matching",
  "level": 3
}, {
  "value": "1.3 On-Policy vs Off-Policy Distillation",
  "id": "13-on-policy-vs-off-policy-distillation",
  "level": 3
}, {
  "value": "1.4 Sequence-Level Distillation",
  "id": "14-sequence-level-distillation",
  "level": 3
}, {
  "value": "1.5 Distillation for LLMs",
  "id": "15-distillation-for-llms",
  "level": 3
}, {
  "value": "1.6 Practical Distillation Pipeline",
  "id": "16-practical-distillation-pipeline",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
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
    mermaid: "mermaid",
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
        id: "knowledge-distillation",
        children: "Knowledge Distillation"
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
            children: "Explain the teacher-student framework and why smaller models learn from larger ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement logit distillation with temperature scaling and KL divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply feature distillation using intermediate layer matching and attention transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare on-policy and off-policy distillation strategies for data generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design sequence-level distillation for autoregressive language models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a practical distillation pipeline for production deployment"
          })]
        })]
      })]
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logit Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax temperature, KL divergence, teacher-student framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate layer matching, attention transfer, hint-based training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-Policy vs Off-Policy Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data generation strategies, student-generated vs teacher-generated data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence-Level Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive distillation, minimum Bayes risk, SeqKD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distillation for LLMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TinyLLM, distillation data curation, task-specific vs task-agnostic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher training, student architecture, distillation schedule, evaluation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Teacher[\"Teacher Model (Large)\"]\r\n        T1[Pre-trained LLM<br/>e.g., Llama 3.1 70B]\r\n        T2[High-capacity<br/>Slower inference]\r\n    end\r\n    subgraph Student[\"Student Model (Small)\"]\r\n        S1[Tiny model<br/>e.g., TinyLLM 1.1B]\r\n        S2[Low-capacity<br/>Fast inference]\r\n    end\r\n    subgraph Distillation[\"Distillation Process\"]\r\n        D1[Logit Distillation<br/>Soft targets + KL div]\r\n        D2[Feature Distillation<br/>Hidden state matching]\r\n        D3[Seq-Level Distillation<br/>Autoregressive matching]\r\n    end\r\n    subgraph Data[\"Data Curation\"]\r\n        Data1[Teacher-generated<br/>On-policy data]\r\n        Data2[Student-generated<br/>Off-policy data]\r\n        Data3[Hybrid<br/>Both sources]\r\n    end\r\n    subgraph Eval[\"Evaluation\"]\r\n        E1[Task accuracy]\r\n        E2[Inference speed]\r\n        E3[Model size]\r\n    end\r\n\r\n    Teacher --> Distillation\r\n    Student --> Distillation\r\n    Data --> Distillation\r\n    Distillation --> Eval\r\n    Eval -->|Deploy| Student\r\n    T1 -->|Soft labels| D1\r\n    T2 -->|Hidden states| D2\r\n    T1 -->|Token probs| D3"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge distillation transfers knowledge from a large teacher model to a small student model. The student learns to mimic the teacher's behavior. This produces a compact model with near-teacher accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models (LLMs) have billions of parameters. They are expensive to deploy. Distillation reduces model size by 5-10x while retaining 90-95% of performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distillation is essential for production AI engineering. It enables on-device deployment, lower latency, and reduced compute costs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning) — neural networks, backpropagation, loss functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 27 Chapter 06 (Pruning) — model compression concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformer architecture: attention, hidden states, logits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability basics: softmax, KL divergence, cross-entropy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large pre-trained model that provides knowledge signals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Student Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small model trained to mimic the teacher's behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw unnormalized scores before softmax activation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling parameter that softens or sharpens probability distributions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KL Divergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure of how one probability distribution diverges from another"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft Targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher's softened probability distribution used as training labels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hard Targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ground-truth labels from the original dataset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching intermediate representations between teacher and student"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attention Transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching attention maps from teacher to student"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hint Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate layer in student that matches a teacher layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On-Policy Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student generates data, teacher labels it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-Policy Distillation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher generates data, student learns from it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SeqKD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence-level knowledge distillation for autoregressive models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Bayes Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoding strategy that minimizes expected loss under a distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TinyLLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Family of small LLMs (1.1B parameters) trained via distillation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-logit-distillation--softmax-temperature-and-kl-divergence",
      children: "1.1 Logit Distillation — Softmax Temperature and KL Divergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logit distillation is the foundational distillation method. The student learns from the teacher's softened probability distribution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Core Idea:"
      }), " A teacher network produces logits z_t for each class. Instead of training the student on hard labels (one-hot vectors), we train it on the teacher's soft probabilities. These soft targets contain richer information — they show similarity between classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temperature Scaling:"
      }), " Temperature T controls how soft the probability distribution becomes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\n\r\ndef softmax_with_temperature(logits, temperature=1.0):\r\n    \"\"\"Apply softmax with temperature scaling.\r\n\r\n    Higher temperature produces softer probability distributions.\r\n    Lower temperature makes distributions sharper (more confident).\r\n\r\n    Args:\r\n        logits: Raw model outputs (shape: [batch_size, num_classes])\r\n        temperature: Scaling factor (T > 0). T=1 is standard softmax.\r\n\r\n    Returns:\r\n        Softened probability distribution\r\n    \"\"\"\r\n    logits = np.array(logits, dtype=np.float64)\r\n    scaled_logits = logits / temperature\r\n    exp_logits = np.exp(scaled_logits - np.max(scaled_logits, axis=-1, keepdims=True))\r\n    probs = exp_logits / np.sum(exp_logits, axis=-1, keepdims=True)\r\n    return probs\r\n\r\n# Demonstrate temperature effects\r\nlogits = np.array([2.0, 1.0, 0.1, -0.5, -2.0])\r\n\r\nprint(\"Temperature effect on softmax probabilities:\")\r\nprint(\"-\" * 60)\r\nfor T in [0.5, 1.0, 2.0, 5.0]:\r\n    probs = softmax_with_temperature(logits, T)\r\n    print(f\"T={T:.1f}: {np.round(probs, 4)}  \"\r\n          f\"Entropy={np.round(-np.sum(probs * np.log(probs + 1e-10)), 4)}\")\r\n\r\n# Output:\r\n# T=0.5: Sharp distribution — dominant class gets most probability\r\n# T=1.0: Standard softmax\r\n# T=2.0: Softer distribution — secondary classes get more weight\r\n# T=5.0: Nearly uniform — all classes equally likely\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temperature effect insight:"
      }), " At T=0.5, the distribution is sharp. The dominant class (index 0) dominates. At T=5.0, the distribution approaches uniform. The student learns less from a uniform distribution. Typical training uses T=2.0 to T=4.0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KL Divergence Loss:"
      }), " The student minimizes KL divergence between its softened distribution and the teacher's softened distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def kl_divergence(p, q, eps=1e-10):\r\n    \"\"\"Compute KL divergence D_KL(P || Q).\r\n\r\n    Measures how much information is lost when Q approximates P.\r\n    Asymmetric: D_KL(P || Q) != D_KL(Q || P).\r\n\r\n    Args:\r\n        p: Target distribution (teacher)\r\n        q: Predicted distribution (student)\r\n        eps: Small epsilon for numerical stability\r\n\r\n    Returns:\r\n        KL divergence value\r\n    \"\"\"\r\n    p = np.clip(np.array(p), eps, 1.0)\r\n    q = np.clip(np.array(q), eps, 1.0)\r\n    return np.sum(p * np.log(p / q))\r\n\r\ndef distillation_loss(student_logits, teacher_logits, temperature, alpha=0.5):\r\n    \"\"\"Compute total distillation loss.\r\n\r\n    Combines hard loss (cross-entropy with labels) and\r\n    soft loss (KL divergence with teacher).\r\n\r\n    Args:\r\n        student_logits: Raw outputs from student model\r\n        teacher_logits: Raw outputs from teacher model\r\n        temperature: Temperature for softening distributions\r\n        alpha: Weight for soft loss. Total = alpha * soft_loss + (1-alpha) * hard_loss\r\n\r\n    Returns:\r\n        Total loss, soft_loss, hard_loss components\r\n    \"\"\"\r\n    # Soften both distributions with same temperature\r\n    student_soft = softmax_with_temperature(student_logits, temperature)\r\n    teacher_soft = softmax_with_temperature(teacher_logits, temperature)\r\n\r\n    # Compute soft loss using KL divergence\r\n    soft_loss = kl_divergence(teacher_soft, student_soft)\r\n\r\n    # Hard loss uses standard softmax (T=1) with ground-truth labels\r\n    student_probs = softmax_with_temperature(student_logits, 1.0)\r\n    # Simplified: assume first class is correct (one-hot label)\r\n    hard_loss = -np.log(student_probs[0] + 1e-10)\r\n\r\n    # Combined loss\r\n    total = alpha * (temperature ** 2) * soft_loss + (1 - alpha) * hard_loss\r\n\r\n    return total, soft_loss, hard_loss\r\n\r\n# Demonstrate distillation loss\r\nteacher_logits = np.array([3.5, 2.1, 1.0, 0.3, -1.2])\r\nstudent_logits = np.array([2.8, 2.5, 0.8, 0.5, -0.8])\r\n\r\nprint(\"\\nDistillation loss components at different temperatures:\")\r\nprint(\"-\" * 60)\r\nfor T in [1.0, 2.0, 4.0, 8.0]:\r\n    total, soft, hard = distillation_loss(student_logits, teacher_logits, T, alpha=0.7)\r\n    print(f\"T={T:.1f}: total={total:.4f}, soft={soft:.4f}, hard={hard:.4f}\")\r\n\r\n# Output shows:\r\n# At T=1: Soft loss is small because distributions are already similar\r\n# At T=4: Soft loss increases because distributions are flattened\r\n# Alpha * T^2 balances the gradient magnitudes between soft and hard losses\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The alpha * T^2 factor:"
      }), " Hinton et al. multiply the soft loss by temperature squared. This keeps gradient magnitudes consistent when temperature changes. Without this factor, higher temperatures would reduce the gradient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Teacher-Student Framework — Complete Training Loop:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def train_distillation_step(teacher_logits_fn, student_model,\r\n                            batch_inputs, labels, temperature, alpha):\r\n    \"\"\"Single training step for logit distillation.\r\n\r\n    Args:\r\n        teacher_logits_fn: Function that returns teacher logits (frozen)\r\n        student_model: Student model with forward() and backward()\r\n        batch_inputs: Input data batch\r\n        labels: Ground-truth labels\r\n        temperature: Softening temperature\r\n        alpha: Soft loss weight\r\n\r\n    Returns:\r\n        Total loss for this step\r\n    \"\"\"\r\n    # Teacher forward pass (no gradients — teacher is frozen)\r\n    with torch.no_grad():\r\n        teacher_logits = teacher_logits_fn(batch_inputs)\r\n\r\n    # Student forward pass\r\n    student_logits = student_model(batch_inputs)\r\n\r\n    # Compute distillation loss\r\n    total_loss, soft_loss, hard_loss = distillation_loss(\r\n        student_logits, teacher_logits, temperature, alpha\r\n    )\r\n\r\n    # Backward pass — only student parameters update\r\n    # (In real PyTorch: total_loss.backward())\r\n    # optimizer.step()\r\n\r\n    return total_loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Input[\"Input x\"]\r\n        X[Image / Text]\r\n    end\r\n    subgraph TeacherPath[\"Teacher (frozen)\"]\r\n        T[Large Model] --> T_l[Logits z_t]\r\n        T_l --> T_s[Softmax T]\r\n        T_s --> T_p[Soft targets p_t]\r\n    end\r\n    subgraph StudentPath[\"Student (trainable)\"]\r\n        S[Small Model] --> S_l[Logits z_s]\r\n        S_l --> S_s[Softmax T]\r\n        S_s --> S_p[Soft targets p_s]\r\n    end\r\n    subgraph Loss[\"Loss Computation\"]\r\n        KL[\"KL Divergence<br/>D_KL(p_t || p_s)\"]\r\n        CE[\"Cross-Entropy<br/>with labels\"]\r\n        Combined[\"Combined Loss<br/>alpha * T^2 * KL + (1-alpha) * CE\"]\r\n    end\r\n\r\n    X --> T\r\n    X --> S\r\n    T_p --> KL\r\n    S_p --> KL\r\n    CE --> Combined\r\n    KL --> Combined\r\n    Combined -->|Backprop| S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-feature-distillation--intermediate-layer-matching",
      children: "1.2 Feature Distillation — Intermediate Layer Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature distillation transfers knowledge from intermediate layers. Logit distillation only uses the final output. Feature distillation uses hidden representations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why intermediate layers matter:"
      }), " Hidden layers capture hierarchical features. Early layers detect edges and textures. Middle layers detect shapes and parts. Late layers detect semantic concepts. Matching these layers transfers richer knowledge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hint-Based Training:"
      }), " Romero et al. proposed hint learning. The student matches a teacher's intermediate representation. A regression loss (MSE) aligns the two representations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\n\r\ndef hint_loss(student_hidden, teacher_hidden, student_hint_layer, teacher_hint_layer):\r\n    \"\"\"Compute hint-based feature distillation loss.\r\n\r\n    Aligns student hidden state at hint layer with teacher hidden state.\r\n\r\n    Args:\r\n        student_hidden: List of student hidden states per layer\r\n        teacher_hidden: List of teacher hidden states per layer\r\n        student_hint_layer: Index of student layer to match\r\n        teacher_hint_layer: Index of teacher layer to match\r\n\r\n    Returns:\r\n        MSE loss between matched representations\r\n    \"\"\"\r\n    student_feats = student_hidden[student_hint_layer]\r\n    teacher_feats = teacher_hidden[teacher_hint_layer]\r\n\r\n    # Handle dimension mismatch (teacher hidden size ≠ student hidden size)\r\n    if student_feats.shape[-1] != teacher_feats.shape[-1]:\r\n        # In practice, use a learnable projection layer\r\n        # projection = nn.Linear(student_dim, teacher_dim)\r\n        # student_feats = projection(student_feats)\r\n        print(\"Dimension mismatch — add projection layer\")\r\n\r\n    # Mean squared error between representations\r\n    mse_loss = np.mean((student_feats - teacher_feats) ** 2)\r\n    return mse_loss\r\n\r\ndef attention_transfer_loss(student_attention, teacher_attention):\r\n    \"\"\"Compute attention transfer loss.\r\n\r\n    Matches attention maps between teacher and student.\r\n\r\n    Args:\r\n        student_attention: Student attention weights [batch, heads, seq, seq]\r\n        teacher_attention: Teacher attention weights [batch, heads, seq, seq]\r\n\r\n    Returns:\r\n        MSE loss between attention maps\r\n    \"\"\"\r\n    # Normalize attention maps\r\n    def normalize_attention(attn):\r\n        attn = np.array(attn)\r\n        attn = attn / (np.linalg.norm(attn, axis=-1, keepdims=True) + 1e-10)\r\n        return attn\r\n\r\n    student_norm = normalize_attention(student_attention)\r\n    teacher_norm = normalize_attention(teacher_attention)\r\n\r\n    # MSE between normalized attention maps\r\n    loss = np.mean((student_norm - teacher_norm) ** 2)\r\n    return loss\r\n\r\n# Simulate feature distillation\r\nbatch_size, seq_len, teacher_dim, student_dim = 2, 10, 768, 384\r\nnum_heads = 12\r\n\r\n# Generate simulated hidden states\r\nnp.random.seed(42)\r\nteacher_hidden = [np.random.randn(batch_size, seq_len, teacher_dim) for _ in range(12)]\r\nstudent_hidden = [np.random.randn(batch_size, seq_len, student_dim) for _ in range(6)]\r\n\r\n# Generate simulated attention maps\r\nteacher_attention = np.random.randn(batch_size, num_heads, seq_len, seq_len)\r\nstudent_attention = np.random.randn(batch_size, num_heads, seq_len, seq_len)\r\n\r\n# Compute losses\r\nhint = hint_loss(student_hidden, teacher_hidden, hint_layer=3, teacher_layer=6)\r\nattn_loss = attention_transfer_loss(student_attention, teacher_attention)\r\n\r\nprint(f\"Feature Distillation Loss Components:\")\r\nprint(f\"  Hint loss (layer 3 -> layer 6): {hint:.4f}\")\r\nprint(f\"  Attention transfer loss: {attn_loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attention Transfer:"
      }), "\r\nZagoruyko et al. proposed attention transfer. The student matches the teacher's attention maps. Attention maps reveal which parts of the input the model focuses on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph TeacherFeat[\"Teacher Feature Extraction\"]\r\n        T1[Layer 1] --> T2[Layer 2]\r\n        T2 --> T3[Layer 3]\r\n        T3 --> T4[...]\r\n        T4 --> T5[Layer 12<br/>Final hidden]\r\n    end\r\n    subgraph StudentFeat[\"Student Feature Extraction\"]\r\n        S1[Layer 1] --> S2[Layer 2]\r\n        S2 --> S3[Layer 3]\r\n        S3 --> S4[...]\r\n        S4 --> S5[Layer 6<br/>Final hidden]\r\n    end\r\n    subgraph Matching[\"Layer Matching\"]\r\n        M1[Hint Loss<br/>T3 <-> S2]\r\n        M2[Attention Loss<br/>T attn <-> S attn]\r\n        M3[Logit Loss<br/>T logits <-> S logits]\r\n    end\r\n\r\n    T3 -.->|MSE| M1\r\n    T2 -.->|Attn map| M2\r\n    S2 -.->|MSE| M1\r\n    S1 -.->|Attn map| M2\r\n    T5 -.->|KL div| M3\r\n    S5 -.->|KL div| M3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Distillation Loss with Feature Matching:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def total_feature_distillation_loss(\r\n    student_logits, teacher_logits,\r\n    student_hidden, teacher_hidden,\r\n    student_attention, teacher_attention,\r\n    labels, temperature=2.0, alpha=0.5, beta=0.3, gamma=0.2\r\n):\r\n    \"\"\"Compute combined distillation loss with feature matching.\r\n\r\n    Total = alpha * logit_loss + beta * hint_loss + gamma * attn_loss\r\n\r\n    Args:\r\n        student_logits: Student output logits\r\n        teacher_logits: Teacher output logits\r\n        student_hidden: List of student hidden states\r\n        teacher_hidden: List of teacher hidden states\r\n        student_attention: Student attention maps\r\n        teacher_attention: Teacher attention maps\r\n        labels: Ground-truth labels\r\n        temperature: Softening temperature\r\n        alpha: Logit distillation weight\r\n        beta: Feature distillation weight\r\n        gamma: Attention transfer weight\r\n\r\n    Returns:\r\n        Dictionary with all loss components\r\n    \"\"\"\r\n    # Logit distillation component\r\n    student_soft = softmax_with_temperature(student_logits, temperature)\r\n    teacher_soft = softmax_with_temperature(teacher_logits, temperature)\r\n    logit_loss = kl_divergence(teacher_soft, student_soft)\r\n\r\n    # Feature (hint) distillation component\r\n    # Match student layer 3 with teacher layer 6\r\n    hint = hint_loss(student_hidden, teacher_hidden, 3, 6)\r\n\r\n    # Attention transfer component\r\n    attn = attention_transfer_loss(student_attention, teacher_attention)\r\n\r\n    # Standard cross-entropy with labels\r\n    student_probs = softmax_with_temperature(student_logits, 1.0)\r\n    hard_loss = -np.log(student_probs[0] + 1e-10)\r\n\r\n    total = (\r\n        alpha * (temperature ** 2) * logit_loss +\r\n        beta * hint +\r\n        gamma * attn +\r\n        (1 - alpha - beta - gamma) * hard_loss\r\n    )\r\n\r\n    return {\r\n        \"total\": total,\r\n        \"logit_loss\": logit_loss,\r\n        \"hint_loss\": hint,\r\n        \"attention_loss\": attn,\r\n        \"hard_loss\": hard_loss\r\n    }\r\n\r\nlosses = total_feature_distillation_loss(\r\n    student_logits=np.array([2.8, 2.5, 0.8]),\r\n    teacher_logits=np.array([3.5, 2.1, 1.0]),\r\n    student_hidden=[np.random.randn(2, 10, 384) for _ in range(6)],\r\n    teacher_hidden=[np.random.randn(2, 10, 768) for _ in range(12)],\r\n    student_attention=np.random.randn(2, 12, 10, 10),\r\n    teacher_attention=np.random.randn(2, 12, 10, 10),\r\n    labels=np.array([1, 0])\r\n)\r\n\r\nprint(f\"\\nTotal Distillation Loss: {losses['total']:.4f}\")\r\nprint(f\"  Logit (KL) loss: {losses['logit_loss']:.4f}\")\r\nprint(f\"  Hint (MSE) loss: {losses['hint_loss']:.4f}\")\r\nprint(f\"  Attention loss: {losses['attention_loss']:.4f}\")\r\nprint(f\"  Hard (CE) loss: {losses['hard_loss']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-on-policy-vs-off-policy-distillation",
      children: "1.3 On-Policy vs Off-Policy Distillation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data generation strategy affects distillation quality. Two main approaches exist: on-policy and off-policy distillation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Off-Policy Distillation (Teacher-Generated Data):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The teacher generates all training data. The student learns from the teacher's outputs. This is the standard approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def off_policy_distillation(teacher_model, student_model, dataset,\r\n                            num_epochs=3, temperature=2.0):\r\n    \"\"\"Off-policy distillation pipeline.\r\n\r\n    Teacher generates soft targets for all data upfront.\r\n    Student trains on these fixed targets.\r\n\r\n    Args:\r\n        teacher_model: Pre-trained teacher (frozen)\r\n        student_model: Student to train\r\n        dataset: Training dataset (inputs without labels needed)\r\n        num_epochs: Number of training epochs\r\n        temperature: Softening temperature\r\n\r\n    Returns:\r\n        Trained student model\r\n    \"\"\"\r\n    print(\"Phase 1: Teacher generates soft targets for all data.\")\r\n    soft_targets = []\r\n    for batch in dataset:\r\n        # Teacher forward pass (frozen)\r\n        with torch.no_grad():\r\n            teacher_logits = teacher_model(batch)\r\n            soft_probs = softmax_with_temperature(teacher_logits, temperature)\r\n        soft_targets.append(soft_probs)\r\n\r\n    print(f\"Phase 2: Train student on {len(soft_targets)} batches.\")\r\n    for epoch in range(num_epochs):\r\n        epoch_loss = 0.0\r\n        for batch, target in zip(dataset, soft_targets):\r\n            # Student forward pass\r\n            student_logits = student_model(batch)\r\n            student_probs = softmax_with_temperature(student_logits, temperature)\r\n\r\n            # KL divergence against fixed teacher targets\r\n            loss = kl_divergence(target, student_probs)\r\n            epoch_loss += loss\r\n\r\n            # Backward pass\r\n            # loss.backward()\r\n            # optimizer.step()\r\n\r\n        print(f\"Epoch {epoch+1}: Loss = {epoch_loss/len(dataset):.4f}\")\r\n\r\n    return student_model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "On-Policy Distillation (Student-Generated Data):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The student generates its own data. The teacher then labels it. This addresses distribution mismatch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def on_policy_distillation(teacher_model, student_model, seed_prompts,\r\n                           num_steps=1000, temperature=2.0):\r\n    \"\"\"On-policy distillation pipeline.\r\n\r\n    Student generates sequences.\r\n    Teacher provides soft targets for those sequences.\r\n\r\n    Args:\r\n        teacher_model: Pre-trained teacher (frozen)\r\n        student_model: Student to train\r\n        seed_prompts: Initial prompts for generation\r\n        num_steps: Number of training steps\r\n        temperature: Softening temperature\r\n\r\n    Returns:\r\n        Trained student model\r\n    \"\"\"\r\n    print(\"Phase 1: Student generates sequences from prompts.\")\r\n    print(\"Phase 2: Teacher labels student-generated sequences.\")\r\n\r\n    for step in range(num_steps):\r\n        # Sample a prompt\r\n        prompt = seed_prompts[step % len(seed_prompts)]\r\n\r\n        # Student generates continuation\r\n        # student_output = student_model.generate(prompt)\r\n        student_input = f\"{prompt} student_continuation\"\r\n\r\n        # Teacher labels the student's output\r\n        with torch.no_grad():\r\n            teacher_logits = teacher_model(student_input)\r\n            soft_targets = softmax_with_temperature(teacher_logits, temperature)\r\n\r\n        # Student learns from its own generation distribution\r\n        student_logits = student_model(student_input)\r\n        student_probs = softmax_with_temperature(student_logits, temperature)\r\n\r\n        loss = kl_divergence(soft_targets, student_probs)\r\n        # loss.backward()\r\n        # optimizer.step()\r\n\r\n        if step % 200 == 0:\r\n            print(f\"Step {step}: Loss = {loss:.4f}\")\r\n\r\n    return student_model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Off-Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On-Policy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher generates all data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student generates data, teacher labels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teacher distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student distribution (matched)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (teacher is creative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (student explores)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exposure bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student sees teacher-quality data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student sees own-quality data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass per epoch per batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate + label each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early training, stable targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Late training, distribution alignment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution mismatch problem:"
      }), " The student never sees its own mistakes during off-policy training. At inference time, the student operates in its own distribution. This mismatch hurts performance. On-policy training fixes this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid approach:"
      }), " Start with off-policy for fast convergence. Switch to on-policy for fine-tuning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph OffPolicy[\"Off-Policy Distillation\"]\r\n        OP1[Dataset] --> OP2[Teacher generates soft targets]\r\n        OP2 --> OP3[Student trains on fixed targets]\r\n        OP3 --> OP4[Student learns teacher distribution]\r\n    end\r\n    subgraph OnPolicy[\"On-Policy Distillation\"]\r\n        OP5[Prompt] --> OP6[Student generates output]\r\n        OP6 --> OP7[Teacher labels student output]\r\n        OP7 --> OP8[Student trains on own distribution]\r\n        OP8 --> OP6\r\n    end\r\n    subgraph Hybrid[\"Hybrid Strategy\"]\r\n        H1[Phase 1: Off-Policy<br/>Fast pretraining]\r\n        H1 --> H2[Phase 2: On-Policy<br/>Distribution alignment]\r\n        H2 --> H3[Phase 3: Task-specific<br/>Fine-tune on target task]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-sequence-level-distillation",
      children: "1.4 Sequence-Level Distillation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence-level distillation handles autoregressive models. Language models generate tokens one at a time. Distilling at the token level is insufficient for generation quality."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Challenge:"
      }), " Each token depends on previous tokens. Teacher-logit matching at each position ignores the sequential nature. Errors accumulate during student generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SeqKD (Sequence-Level Knowledge Distillation):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kim and Rush proposed SeqKD. The teacher generates entire sequences. The student learns from these sequences using maximum likelihood."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\n\r\ndef seqkd_loss(student_logits_sequence, teacher_tokens, temperature=1.0):\r\n    \"\"\"Compute SeqKD loss.\r\n\r\n    Student learns to predict teacher-generated tokens.\r\n\r\n    Args:\r\n        student_logits_sequence: Student logits for each position [seq_len, vocab_size]\r\n        teacher_tokens: Teacher-generated token IDs [seq_len]\r\n        temperature: Softening temperature\r\n\r\n    Returns:\r\n        Cross-entropy loss over teacher-generated tokens\r\n    \"\"\"\r\n    seq_len = len(teacher_tokens)\r\n    total_loss = 0.0\r\n\r\n    for pos in range(seq_len):\r\n        # Student logits at this position\r\n        logits = student_logits_sequence[pos]\r\n        token_id = teacher_tokens[pos]\r\n\r\n        # Softmax to get probabilities\r\n        probs = softmax_with_temperature(logits, temperature)\r\n\r\n        # Negative log-likelihood of teacher token\r\n        token_prob = probs[token_id]\r\n        loss = -np.log(token_prob + 1e-10)\r\n        total_loss += loss\r\n\r\n    return total_loss / seq_len\r\n\r\ndef minimum_bayes_risk_decoding(logits_list, num_samples=5):\r\n    \"\"\"Minimum Bayes Risk (MBR) decoding for distillation.\r\n\r\n    Selects the output with minimum expected risk under the\r\n    teacher's probability distribution.\r\n\r\n    Args:\r\n        logits_list: List of logit sequences from different decoding paths\r\n        num_samples: Number of candidate sequences\r\n\r\n    Returns:\r\n        Index of the best candidate sequence\r\n    \"\"\"\r\n    candidates = []\r\n\r\n    # Generate diverse candidate sequences\r\n    # (In practice use beam search or sampling with different temperatures)\r\n    for i in range(num_samples):\r\n        # Sample a sequence from logits\r\n        probs = softmax_with_temperature(logits_list[i], temperature=1.0)\r\n        # tokens = np.random.choice(vocab_size, p=probs)\r\n        # candidates.append(tokens)\r\n        candidates.append(f\"candidate_{i}\")\r\n\r\n    # Compute pairwise similarity (e.g., BLEU, ROUGE)\r\n    def similarity(seq1, seq2):\r\n        \"\"\"Simplified similarity — in practice use BLEU or ROUGE.\"\"\"\r\n        return 1.0 if seq1 == seq2 else 0.5\r\n\r\n    # Compute expected risk for each candidate\r\n    risks = []\r\n    for i, candidate in enumerate(candidates):\r\n        risk = 0.0\r\n        for j, other in enumerate(candidates):\r\n            if i != j:\r\n                sim = similarity(candidate, other)\r\n                # Risk = negative similarity (we want min risk)\r\n                risk -= sim\r\n        risks.append(risk)\r\n\r\n    best_idx = int(np.argmin(risks))\r\n    return best_idx, risks\r\n\r\n# Simulate SeqKD training\r\nvocab_size = 1000\r\nseq_length = 20\r\nnp.random.seed(42)\r\n\r\n# Teacher-generated tokens\r\nteacher_gen_tokens = np.random.randint(0, vocab_size, size=seq_length)\r\nstudent_logits = np.random.randn(seq_length, vocab_size)\r\n\r\nloss = seqkd_loss(student_logits, teacher_gen_tokens, temperature=1.0)\r\nprint(f\"SeqKD Loss: {loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Bayes Risk (MBR) for Sequence Distillation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MBR decoding selects the output with minimum expected risk. It works by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generating multiple candidate sequences from the teacher"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computing pairwise similarity between candidates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selecting the candidate most representative of the teacher's distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The student trains on this MBR-selected output. This avoids learning from low-quality teacher outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autoregressive Distillation Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant D as Dataset\r\n    participant T as Teacher Model\r\n    participant M as MBR Decoder\r\n    participant S as Student Model\r\n\r\n    D->>T: Input prompt\r\n    T->>T: Generate candidate sequences\r\n    T->>M: Multiple candidates\r\n    M->>M: Compute pairwise BLEU\r\n    M->>M: Select min-risk candidate\r\n    M->>S: Best sequence as target\r\n    S->>S: Learn to predict teacher tokens\r\n    Note over S: Cross-entropy on teacher tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-distillation-for-llms",
      children: "1.5 Distillation for LLMs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language model distillation has unique challenges. LLMs are huge (70B+ parameters). The student must be small but capable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TinyLLM:"
      }), " The TinyLLM family (1.1B parameters) is distilled from Llama 2 7B or similar. It retains strong reasoning while being 6x smaller."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def llm_distillation_recipe():\r\n    \"\"\"Recipe for LLM distillation — TinyLLM-style.\r\n\r\n    Combines multiple distillation techniques for best results.\r\n    \"\"\"\r\n    recipe = {\r\n        \"teacher_model\": \"Llama 3.1 8B\",\r\n        \"student_architecture\": \"TinyLLM 1.1B (24 layers, 2048 hidden)\",\r\n        \"distillation_stages\": [\r\n            {\r\n                \"stage\": 1,\r\n                \"method\": \"Logit distillation on pretrain data\",\r\n                \"data\": \"C4, Wikipedia (100B tokens)\",\r\n                \"temperature\": 2.0,\r\n                \"alpha\": 0.5,\r\n                \"epochs\": 1\r\n            },\r\n            {\r\n                \"stage\": 2,\r\n                \"method\": \"Feature distillation on hidden states\",\r\n                \"data\": \"Same as stage 1\",\r\n                \"matching_layers\": {\r\n                    \"teacher\": [4, 8, 12, 16, 20, 24, 28, 32],\r\n                    \"student\": [3, 6, 9, 12, 15, 18, 21, 24]\r\n                },\r\n                \"beta\": 0.3,\r\n                \"epochs\": 1\r\n            },\r\n            {\r\n                \"stage\": 3,\r\n                \"method\": \"On-policy distillation with MBR\",\r\n                \"data\": \"Student-generated continuations\",\r\n                \"temperature\": 1.5,\r\n                \"mbr_samples\": 5,\r\n                \"epochs\": 0.5\r\n            },\r\n            {\r\n                \"stage\": 4,\r\n                \"method\": \"Task-specific fine-tuning\",\r\n                \"data\": \"Instruction datasets (Alpaca, Dolly)\",\r\n                \"temperature\": 1.0,\r\n                \"alpha\": 0.2,\r\n                \"epochs\": 0.5\r\n            }\r\n        ],\r\n        \"evaluation_metrics\": [\r\n            \"Perplexity on held-out data\",\r\n            \"MMLU accuracy (5-shot)\",\r\n            \"HumanEval pass@1\",\r\n            \"Inference speed (tokens/sec)\",\r\n            \"Model size (GB)\"\r\n        ]\r\n    }\r\n    return recipe\r\n\r\ndef simulate_distillation_scaling(teacher_size=7, student_sizes=None):\r\n    \"\"\"Simulate how distillation performance scales with student size.\r\n\r\n    Args:\r\n        teacher_size: Teacher model size in billions\r\n        student_sizes: List of student sizes to evaluate\r\n\r\n    Returns:\r\n        Dictionary with performance estimates\r\n    \"\"\"\r\n    if student_sizes is None:\r\n        student_sizes = [0.5, 1.1, 3.0, 7.0]\r\n\r\n    results = {}\r\n    for student_size in student_sizes:\r\n        # Simulated performance retention\r\n        # Larger students retain more teacher performance\r\n        size_ratio = student_size / teacher_size\r\n        perf_retention = min(1.0, 0.75 + 0.25 * np.log(1 + size_ratio / 0.1))\r\n\r\n        speedup = teacher_size / student_size * 1.2  # 1.2x architectural efficiency\r\n\r\n        results[student_size] = {\r\n            \"teacher_size_b\": teacher_size,\r\n            \"student_size_b\": student_size,\r\n            \"size_ratio\": size_ratio,\r\n            \"performance_retention\": round(perf_retention, 3),\r\n            \"inference_speedup_x\": round(speedup, 1),\r\n            \"memory_reduction_x\": round(teacher_size / student_size, 1)\r\n        }\r\n\r\n    return results\r\n\r\nscaling = simulate_distillation_scaling(teacher_size=7.0)\r\n\r\nprint(f\"{'Student Size':<20} {'Ratio':<8} {'Perf Retention':<18} {'Speedup':<10} {'Mem Redux':<10}\")\r\nprint(\"=\"*70)\r\nfor size, metrics in scaling.items():\r\n    print(f\"{size}B {'':<16} {metrics['size_ratio']:<8.2f} \"\r\n          f\"{metrics['performance_retention']:<18.2f} \"\r\n          f\"{metrics['inference_speedup_x']:<10.1f}x \"\r\n          f\"{metrics['memory_reduction_x']:<10.1f}x\")\r\n\r\n# Output shows:\r\n# 1.1B student retains ~90% performance, 6.4x faster, 6.4x less memory\r\n# 3B student retains ~95% performance, 2.3x faster\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distillation Data Curation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data quality matters more than quantity for LLM distillation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def curate_distillation_data(data_sources, quality_filters):\r\n    \"\"\"Curate high-quality data for LLM distillation.\r\n\r\n    Args:\r\n        data_sources: Dict of data source names and paths\r\n        quality_filters: List of filter functions\r\n\r\n    Returns:\r\n        Filtered dataset statistics\r\n    \"\"\"\r\n    total_tokens = 0\r\n    filtered_tokens = 0\r\n\r\n    for source_name, source_data in data_sources.items():\r\n        source_tokens = source_data.get(\"tokens\", 0)\r\n        total_tokens += source_tokens\r\n\r\n        # Apply quality filters\r\n        for filter_fn in quality_filters:\r\n            source_tokens = filter_fn(source_name, source_tokens)\r\n\r\n        filtered_tokens += source_tokens\r\n\r\n    curation_stats = {\r\n        \"total_tokens_before\": total_tokens,\r\n        \"total_tokens_after\": filtered_tokens,\r\n        \"filter_rate\": (total_tokens - filtered_tokens) / (total_tokens + 1e-10) * 100,\r\n        \"sources\": list(data_sources.keys())\r\n    }\r\n\r\n    return curation_stats\r\n\r\n# Example data sources for distillation\r\ndistillation_data = {\r\n    \"c4\": {\"tokens\": 100_000_000_000, \"description\": \"Colossal Clean Crawled Corpus\"},\r\n    \"wikipedia\": {\"tokens\": 10_000_000_000, \"description\": \"English Wikipedia\"},\r\n    \"code\": {\"tokens\": 20_000_000_000, \"description\": \"GitHub code (The Stack)\"},\r\n    \"instruction\": {\"tokens\": 5_000_000_000, \"description\": \"Instruction-following data\"},\r\n}\r\n\r\ndef high_quality_filter(source_name, token_count):\r\n    \"\"\"Filter for high-quality data only.\"\"\"\r\n    # Code and instruction data is high quality\r\n    if source_name in [\"code\", \"instruction\"]:\r\n        return token_count\r\n    # General web data — keep 70%\r\n    return int(token_count * 0.7)\r\n\r\nfilters = [high_quality_filter]\r\nstats = curate_distillation_data(distillation_data, filters)\r\n\r\nprint(f\"\\nDistillation Data Curation:\")\r\nprint(f\"  Total tokens before: {stats['total_tokens_before']/1e9:.1f}B\")\r\nprint(f\"  Total tokens after: {stats['total_tokens_after']/1e9:.1f}B\")\r\nprint(f\"  Filter rate: {stats['filter_rate']:.1f}%\")\r\nprint(f\"  Data sources: {', '.join(stats['sources'])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task-Specific vs Task-Agnostic Distillation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task-Specific"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task-Agnostic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled task data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlabeled general corpus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximize task accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve general capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Student size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be very small (10-100x compression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must retain capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distill BERT for sentiment classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distill Llama into TinyLLM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task metrics only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMLU, HumanEval, perplexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production classifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose small LLMs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-practical-distillation-pipeline",
      children: "1.6 Practical Distillation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production distillation pipeline has five stages: teacher preparation, student architecture, data preparation, training schedule, and evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 1: Teacher Preparation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def prepare_teacher(teacher_config):\r\n    \"\"\"Prepare and freeze teacher model.\r\n\r\n    Args:\r\n        teacher_config: Dict with teacher model specs\r\n\r\n    Returns:\r\n        Frozen teacher model function\r\n    \"\"\"\r\n    print(f\"Loading teacher: {teacher_config['name']}\")\r\n    print(f\"  Parameters: {teacher_config['params_b']}B\")\r\n    print(f\"  Architecture: {teacher_config['architecture']}\")\r\n    print(\"  Freezing teacher parameters...\")\r\n\r\n    # In production:\r\n    # teacher = AutoModelForCausalLM.from_pretrained(teacher_config['name'])\r\n    # teacher.eval()\r\n    # for param in teacher.parameters():\r\n    #     param.requires_grad = False\r\n\r\n    def teacher_forward(inputs):\r\n        \"\"\"Teacher forward pass (no gradients).\"\"\"\r\n        # return teacher(inputs).logits\r\n        return np.random.randn(inputs.shape[0], 100, 32000)\r\n\r\n    return teacher_forward\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 2: Student Architecture Selection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def select_student_architecture(constraints):\r\n    \"\"\"Select student architecture based on deployment constraints.\r\n\r\n    Args:\r\n        constraints: Dict with deployment requirements:\r\n            - max_params: Maximum parameter count\r\n            - max_latency_ms: Maximum inference latency\r\n            - target_device: CPU, GPU mobile, etc.\r\n            - task: Task type (classification, generation, etc.)\r\n\r\n    Returns:\r\n        Student architecture config\r\n    \"\"\"\r\n    print(f\"\\nSelecting student architecture for deployment:\")\r\n    print(f\"  Constraints: max_params={constraints['max_params']}M, \"\r\n          f\"latency={constraints['max_latency_ms']}ms\")\r\n    print(f\"  Device: {constraints['target_device']}, Task: {constraints['task']}\")\r\n\r\n    # Architecture selection logic\r\n    if constraints['max_params'] <= 100:\r\n        # Very small student for mobile\r\n        arch = {\r\n            \"type\": \"mobile_llm\",\r\n            \"layers\": 12,\r\n            \"hidden_dim\": 512,\r\n            \"num_heads\": 8,\r\n            \"params_m\": 85,\r\n            \"expected_latency_ms\": 15\r\n        }\r\n    elif constraints['max_params'] <= 1000:\r\n        # Medium student for server\r\n        arch = {\r\n            \"type\": \"tiny_llm\",\r\n            \"layers\": 24,\r\n            \"hidden_dim\": 2048,\r\n            \"num_heads\": 16,\r\n            \"params_m\": 1100,\r\n            \"expected_latency_ms\": 30\r\n        }\r\n    else:\r\n        # Larger student for high-performance server\r\n        arch = {\r\n            \"type\": \"small_llm\",\r\n            \"layers\": 32,\r\n            \"hidden_dim\": 4096,\r\n            \"num_heads\": 32,\r\n            \"params_m\": 3000,\r\n            \"expected_latency_ms\": 50\r\n        }\r\n\r\n    return arch\r\n\r\n# Example: select for mobile deployment\r\nmobile_config = select_student_architecture({\r\n    \"max_params\": 100,\r\n    \"max_latency_ms\": 20,\r\n    \"target_device\": \"iPhone 15\",\r\n    \"task\": \"text_generation\"\r\n})\r\n\r\nprint(f\"  Selected: {mobile_config['type']} \"\r\n      f\"({mobile_config['params_m']}M params, \"\r\n      f\"{mobile_config['expected_latency_ms']}ms latency)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 3: Data Preparation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def prepare_distillation_data(teacher_fn, student_arch, data_sources,\r\n                              strategy=\"off_policy\", temperature=2.0):\r\n    \"\"\"Prepare data for distillation training.\r\n\r\n    Args:\r\n        teacher_fn: Frozen teacher forward function\r\n        student_arch: Student architecture config\r\n        data_sources: List of data sources\r\n        strategy: 'off_policy', 'on_policy', or 'hybrid'\r\n        temperature: Softening temperature\r\n\r\n    Returns:\r\n        Data loader with teacher soft targets\r\n    \"\"\"\r\n    print(f\"\\nPreparing data for {strategy} distillation...\")\r\n\r\n    if strategy == \"off_policy\":\r\n        # Teacher generates all targets upfront\r\n        print(f\"  Generating teacher soft targets at T={temperature}\")\r\n        for source in data_sources:\r\n            print(f\"  Processing {source}...\")\r\n            # teacher_logits = teacher_fn(source_data)\r\n            # soft_targets = softmax_with_temperature(teacher_logits, temperature)\r\n            # Save to disk for student training\r\n            print(f\"    Stored teacher soft targets for {source}\")\r\n\r\n    elif strategy == \"on_policy\":\r\n        # Student generates, teacher labels\r\n        print(f\"  Student will generate sequences\")\r\n        print(f\"  Teacher will label student outputs\")\r\n\r\n    elif strategy == \"hybrid\":\r\n        # Both\r\n        print(f\"  Phase 1: Off-policy with teacher-generated targets\")\r\n        print(f\"  Phase 2: On-policy with student-generated data\")\r\n\r\n    return {\"strategy\": strategy, \"ready\": True}\r\n\r\n# Example data preparation\r\n# prepare_distillation_data(teacher_fn, mobile_config,\r\n#                           [\"c4\", \"wikipedia\", \"code\"],\r\n#                           strategy=\"hybrid\", temperature=2.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 4: Distillation Schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_distillation_schedule(total_steps, config):\r\n    \"\"\"Create a distillation training schedule.\r\n\r\n    Controls how temperature, alpha, and data strategy change\r\n    over the course of training.\r\n\r\n    Args:\r\n        total_steps: Total training steps\r\n        config: Schedule configuration\r\n\r\n    Returns:\r\n        Schedule function that returns params at each step\r\n    \"\"\"\r\n    def schedule(step):\r\n        \"\"\"Return distillation parameters at given step.\r\n\r\n        Args:\r\n            step: Current training step (0 to total_steps-1)\r\n\r\n        Returns:\r\n            Dict with temperature, alpha, strategy\r\n        \"\"\"\r\n        progress = step / total_steps\r\n\r\n        # Temperature: start high (4.0), decay to low (1.0)\r\n        temperature = 4.0 - 3.0 * min(progress, 1.0)\r\n\r\n        # Alpha: start high (0.7), decay to low (0.3)\r\n        alpha = 0.7 - 0.4 * min(progress, 1.0)\r\n\r\n        # Strategy: off-policy first half, on-policy second half\r\n        if progress < 0.5:\r\n            strategy = \"off_policy\"\r\n        elif progress < 0.8:\r\n            strategy = \"on_policy\"\r\n        else:\r\n            strategy = \"task_specific\"\r\n\r\n        return {\r\n            \"temperature\": round(temperature, 2),\r\n            \"alpha\": round(alpha, 2),\r\n            \"strategy\": strategy,\r\n            \"progress_pct\": round(progress * 100, 1)\r\n        }\r\n\r\n    return schedule\r\n\r\n# Create and test schedule\r\nscheduler = create_distillation_schedule(total_steps=10000)\r\n\r\nprint(f\"\\nDistillation Schedule (10000 steps):\")\r\nprint(f\"{'Step':<8} {'Progress':<10} {'Temp':<8} {'Alpha':<8} {'Strategy':<18}\")\r\nprint(\"-\"*55)\r\nfor step in [0, 1000, 2500, 5000, 7500, 9000, 10000]:\r\n    params = scheduler(step)\r\n    print(f\"{step:<8} {params['progress_pct']+'%':<10} \"\r\n          f\"{params['temperature']:<8} {params['alpha']:<8} \"\r\n          f\"{params['strategy']:<18}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 5: Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_distillation(teacher_model, student_model, eval_data):\r\n    \"\"\"Evaluate the distilled student model.\r\n\r\n    Args:\r\n        teacher_model: Original teacher (for baseline)\r\n        student_model: Distilled student\r\n        eval_data: Evaluation dataset\r\n\r\n    Returns:\r\n        Dict with evaluation metrics\r\n    \"\"\"\r\n    metrics = {}\r\n\r\n    # Task accuracy\r\n    # student_accuracy = compute_accuracy(student_model, eval_data)\r\n    # teacher_accuracy = compute_accuracy(teacher_model, eval_data)\r\n    student_accuracy = 0.92\r\n    teacher_accuracy = 0.96\r\n\r\n    metrics[\"student_accuracy\"] = student_accuracy\r\n    metrics[\"teacher_accuracy\"] = teacher_accuracy\r\n    metrics[\"accuracy_gap\"] = teacher_accuracy - student_accuracy\r\n    metrics[\"retention_rate\"] = student_accuracy / teacher_accuracy\r\n\r\n    # Inference speed\r\n    # student_latency = measure_latency(student_model)\r\n    # teacher_latency = measure_latency(teacher_model)\r\n    student_latency = 12.5  # ms\r\n    teacher_latency = 85.0  # ms\r\n\r\n    metrics[\"student_latency_ms\"] = student_latency\r\n    metrics[\"teacher_latency_ms\"] = teacher_latency\r\n    metrics[\"speedup\"] = teacher_latency / student_latency\r\n\r\n    # Model size\r\n    # student_size = get_model_size(student_model)\r\n    # teacher_size = get_model_size(teacher_model)\r\n    student_size = 0.5  # GB\r\n    teacher_size = 4.5  # GB\r\n\r\n    metrics[\"student_size_gb\"] = student_size\r\n    metrics[\"teacher_size_gb\"] = teacher_size\r\n    metrics[\"compression_ratio\"] = teacher_size / student_size\r\n\r\n    return metrics\r\n\r\nresults = evaluate_distillation(None, None, None)\r\n\r\nprint(f\"\\n{'Metric':<22} {'Student':<12} {'Teacher':<12} {'Ratio':<10}\")\r\nprint(\"=\"*60)\r\nprint(f\"{'Task Accuracy':<22} {results['student_accuracy']:<12.3f} \"\r\n      f\"{results['teacher_accuracy']:<12.3f} \"\r\n      f\"{results['retention_rate']:<10.3f}\")\r\nprint(f\"{'Latency (ms)':<22} {results['student_latency_ms']:<12.1f} \"\r\n      f\"{results['teacher_latency_ms']:<12.1f} \"\r\n      f\"{results['speedup']:<10.1f}x\")\r\nprint(f\"{'Model Size (GB)':<22} {results['student_size_gb']:<12.1f} \"\r\n      f\"{results['teacher_size_gb']:<12.1f} \"\r\n      f\"{results['compression_ratio']:<10.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Pipeline Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Stage1[\"Stage 1: Teacher Preparation\"]\r\n        S1A[\"Select teacher model<br/>e.g., Llama 3.1 70B\"]\r\n        S1B[Freeze all parameters]\r\n        S1C[Set to eval mode]\r\n    end\r\n    subgraph Stage2[\"Stage 2: Student Architecture\"]\r\n        S2A[\"Define constraints<br/>size, latency, device\"]\r\n        S2B[\"Select architecture<br/>e.g., TinyLLM 1.1B\"]\r\n        S2C[\"Initialize student<br/>weights (random)\"]\r\n    end\r\n    subgraph Stage3[\"Stage 3: Data Preparation\"]\r\n        S3A[Curate training data]\r\n        S3B[\"Generate teacher<br/>soft targets\"]\r\n        S3C[\"Create data loader<br/>with temperature scaling\"]\r\n    end\r\n    subgraph Stage4[\"Stage 4: Distillation Training\"]\r\n        S4A[\"Off-policy phase<br/>T=4.0, alpha=0.7\"]\r\n        S4B[\"On-policy phase<br/>T=2.0, alpha=0.5\"]\r\n        S4C[\"Task-specific phase<br/>T=1.0, alpha=0.3\"]\r\n    end\r\n    subgraph Stage5[\"Stage 5: Evaluation & Deployment\"]\r\n        S5A[Evaluate accuracy]\r\n        S5B[Benchmark latency]\r\n        S5C[Measure model size]\r\n        S5D[Export to ONNX/TensorRT]\r\n        S5E[Deploy to production]\r\n    end\r\n\r\n    Stage1 --> Stage2\r\n    Stage2 --> Stage3\r\n    Stage3 --> Stage4\r\n    Stage4 --> Stage5"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain how temperature scaling affects the distillation process. Why do we use T > 1?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Temperature scaling softens the teacher's probability distribution. Higher T (2-4) spreads probability mass across more classes. This reveals inter-class relationships (e.g., \"cat\" is more similar to \"dog\" than to \"car\"). The student learns these relationships. Without temperature (T=1), the distribution is sharp and information-poor. The student only sees the winning class."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Compare logit distillation with feature distillation. When would you use each?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logit distillation matches final output probabilities. It is simple and works well for classification tasks. Feature distillation matches intermediate hidden states. It transfers richer hierarchical knowledge. Use logit distillation when the task is simple and the student has enough capacity. Use feature distillation for complex tasks (translation, generation) or when the student needs structural knowledge."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the distribution mismatch problem in off-policy distillation? How does on-policy distillation fix it?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Off-policy distillation trains the student on teacher-generated data. At inference, the student processes its own outputs. If the student makes errors, it enters states the teacher never generated. The student has no training data for those states. On-policy distillation fixes this by having the student generate data, then the teacher labels it. The student trains on its own distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Describe SeqKD and how it handles autoregressive model distillation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SeqKD (Sequence-Level Knowledge Distillation) treats the entire output sequence as the unit of transfer. The teacher generates complete sequences. The student learns to predict these sequences via maximum likelihood. This avoids token-level mismatch where student errors at position t affect position t+1. SeqKD preserves the sequential dependencies in language generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is Minimum Bayes Risk (MBR) decoding and why is it useful for distillation?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MBR decoding selects the output that minimizes expected loss under the teacher's distribution. It generates multiple candidate sequences, computes pairwise similarity, and picks the most representative output. This avoids training the student on low-quality or outlier teacher outputs. The student learns from high-confidence, representative sequences."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does the TinyLLM family use distillation? What techniques are combined?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TinyLLM uses multi-stage distillation from Llama 2 7B. Stage 1 uses logit distillation on general corpus. Stage 2 uses feature distillation matching hidden states every 4 layers. Stage 3 uses on-policy refinement. Stage 4 uses task-specific fine-tuning. It combines temperature scaling, hint-based training, and instruction tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: Explain why the alpha * T^2 factor is used in the distillation loss formula."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The alpha * T^2 factor keeps gradient magnitudes consistent across temperatures. When temperature increases, the softmax outputs become more uniform. Gradients from KL divergence scale as 1/T^2. Multiplying by T^2 cancels this effect. Without it, high temperatures would produce tiny gradients and slow learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What factors determine the optimal student architecture for a given deployment?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key factors are: (1) latency budget — how fast must inference be, (2) memory budget — how much RAM/VRAM is available, (3) accuracy requirement — minimum acceptable performance, (4) target device — CPU, GPU, mobile, edge, (5) task complexity — classification vs generation, (6) batch size — online (batch=1) vs offline (large batch). The student must be small enough for constraints but large enough to retain teacher performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How does attention transfer differ from hint-based feature distillation?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hint-based feature distillation matches raw hidden states between teacher and student layers. It uses MSE loss on the activations. Attention transfer matches attention maps — the probability distribution over input positions. Attention maps show which input elements the model focuses on. Attention transfer is more about structural knowledge (where to look) rather than representational knowledge (what features to have)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: What metrics should you track during a distillation training run?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track (1) teacher loss — KL divergence between student and teacher, (2) hard loss — cross-entropy with ground truth, (3) student perplexity on held-out data, (4) task accuracy on validation set, (5) distribution similarity — Jensen-Shannon divergence between student and teacher output distributions, (6) gradient norms — ensure stable training, (7) temperature and alpha schedule adherence, (8) inference speed and memory usage at checkpoints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge distillation compresses large teacher models into small student models while retaining most performance. Logit distillation transfers class relationships via temperature-scaled soft targets. Feature distillation transfers intermediate representations through layer matching and attention transfer. On-policy distillation aligns training with inference distributions. Sequence-level distillation handles autoregressive generation. The complete pipeline includes teacher preparation, student architecture selection, data curation, a multi-stage training schedule, and thorough evaluation. Distillation is a critical tool for deploying AI models within production latency and memory budgets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the primary benefit of using temperature > 1 in logit distillation?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) It speeds up training convergence\r\nb) It reveals inter-class relationships by softening the distribution\r\nc) It reduces memory usage during training\r\nd) It eliminates the need for ground-truth labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nb) It reveals inter-class relationships by softening the distribution. Temperature > 1 spreads probability mass across classes, showing which classes are similar.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What problem does on-policy distillation solve that off-policy distillation does not?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Teacher model is too large to run\r\nb) Student model overfits to training data\r\nc) Distribution mismatch between training and inference\r\nd) Vanishing gradients in deep networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nc) Distribution mismatch between training and inference. On-policy distillation trains on student-generated data, matching the student's inference distribution.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Which of the following is NOT a component of the total distillation loss?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) KL divergence between teacher and student soft targets\r\nb) MSE between intermediate hidden states\r\nc) Cosine similarity between teacher and student model weights\r\nd) Cross-entropy with ground-truth labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nc) Cosine similarity between model weights. Distillation compares outputs and hidden states, not weights.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: SeqKD is specifically designed for which type of model?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Convolutional neural networks for image classification\r\nb) Autoregressive models for sequence generation\r\nc) Autoencoders for dimensionality reduction\r\nd) Graph neural networks for node classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nb) Autoregressive models for sequence generation. SeqKD handles the sequential dependency where each token depends on previous tokens.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: In a distillation pipeline, what is the purpose of the alpha parameter?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) It controls the learning rate of the student model\r\nb) It balances the weight between soft loss (teacher) and hard loss (labels)\r\nc) It determines the temperature scaling factor\r\nd) It controls the number of teacher layers to match"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nb) It balances the weight between soft loss (teacher) and hard loss (labels). Total loss = alpha * soft_loss + (1-alpha) * hard_loss.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1: Implement Temperature-Aware Softmax"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python function that takes logits and temperature as input. Return the softened probability distribution. Demonstrate that T=0.5 produces a sharper distribution than T=2.0."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\n\r\ndef temperature_softmax(logits, temperature):\r\n    \"\"\"Implement temperature-scaled softmax.\"\"\"\r\n    # Your code here\r\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2: Build a Simple Teacher-Student Distillation Loop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a synthetic dataset of 1000 samples with 10 classes. Train a \"teacher\" network (2-layer MLP with hidden size 256). Train a \"student\" network (1-layer linear model) using logit distillation. Compare student accuracy with and without distillation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Hints:\r\n# 1. Generate random data: X = np.random.randn(1000, 50)\r\n# 2. Generate synthetic labels\r\n# 3. Teacher: W1 @ ReLU @ W2 (hidden size 256)\r\n# 4. Student: Single linear layer\r\n# 5. Train student with KL divergence against teacher\r\n# 6. Compare against training with hard labels only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3: Implement Feature Distillation with Layer Matching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend Exercise 2. Add a hint loss that matches the student's hidden representation to the teacher's. Use MSE loss on the hidden states. Vary the hint layer index. Report how hint loss improves student accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Hints:\r\n# 1. Extract intermediate activations from both teacher and student\r\n# 2. Add a projection layer if dimensions differ\r\n# 3. Add MSE loss weighted by beta parameter\r\n# 4. Sweep beta from 0.0 to 1.0 and report accuracy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4: Compare On-Policy vs Off-Policy for a Language Task"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set up a small character-level language model (e.g., 2-layer LSTM). Implement both off-policy and on-policy distillation using a larger teacher (4-layer LSTM). Measure perplexity on a held-out test set for both strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Hints:\r\n# 1. Teacher: 4-layer LSTM with hidden size 512\r\n# 2. Student: 2-layer LSTM with hidden size 128\r\n# 3. Off-policy: Teacher generates all training sequences\r\n# 4. On-policy: Student generates sequences, teacher labels them\r\n# 5. Report perplexity for both methods\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5: Design a Distillation Schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a function that creates a training schedule for the four phases: off-policy (logit), feature distillation, on-policy refinement, and task-specific tuning. Define temperature, alpha, beta, and gamma for each phase. Justify your choices."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def design_schedule():\r\n    \"\"\"Design a 4-phase distillation schedule.\r\n\r\n    Returns a list of phase configs.\r\n    \"\"\"\r\n    schedule = []\r\n    # Phase 1: Off-policy logit distillation\r\n    # Phase 2: Feature distillation with hint loss\r\n    # Phase 3: On-policy refinement\r\n    # Phase 4: Task-specific fine-tuning\r\n    return schedule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logit distillation"
        }), " uses temperature-scaled softmax and KL divergence. The student learns from the teacher's softened probability distribution. The alpha parameter balances soft and hard loss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature distillation"
        }), " matches intermediate representations. Hint loss aligns hidden states. Attention transfer matches attention maps. Both transfer structural knowledge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-policy distillation"
        }), " solves the distribution mismatch problem. The student generates its own data. The teacher labels it. This matches training and inference distributions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequence-level distillation"
        }), " handles autoregressive models. SeqKD transfers complete output sequences. MBR decoding selects high-quality teacher outputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM distillation"
        }), " creates models like TinyLLM (1.1B). Multi-stage training combines logit, feature, on-policy, and task-specific distillation. Data curation quality matters more than quantity."]
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
            children: "How does Knowledge Distillation behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Knowledge Distillation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Knowledge Distillation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Knowledge Distillation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Knowledge Distillation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Knowledge Distillation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Knowledge Distillation in production today?"
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
        }), " Knowledge Distillation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Knowledge Distillation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Knowledge Distillation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Knowledge Distillation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Knowledge Distillation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 Knowledge Distillation is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Knowledge Distillation is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Knowledge Distillation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Knowledge Distillation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Knowledge Distillation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Knowledge Distillation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Knowledge Distillation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Knowledge Distillation to someone else"
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
        children: "Always write a one-line example of Knowledge Distillation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Knowledge Distillation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Knowledge Distillation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Knowledge Distillation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Knowledge Distillation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Knowledge Distillation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Knowledge Distillation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Knowledge Distillation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations Distillation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 27 — builds the foundation for 07 Knowledge Distillation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Knowledge Distillation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Knowledge Distillation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Knowledge Distillation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Knowledge Distillation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Knowledge Distillation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Knowledge Distillation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Knowledge Distillation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Knowledge Distillation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Distillation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Knowledge Distillation."
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
        children: "Knowledge Distillation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Knowledge Distillation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Knowledge Distillation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Knowledge Distillation changes quickly; focus on fundamentals that remain stable."
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
            children: "07 Knowledge Distillation is like a GPS navigation system"
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
          }), " — this chapter contributes the Knowledge Distillation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-07knowledgedistillation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Knowledge Distillation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-07knowledgedistillation-flash2",
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
      "data-qid": "27aiinfrastructure-07knowledgedistillation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Knowledge Distillation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-07knowledgedistillation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Knowledge Distillation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-07knowledgedistillation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Knowledge Distillation applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Knowledge Distillation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Knowledge Distillation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Knowledge Distillation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Knowledge Distillation in production at scale"
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
        children: "cProfile / py-spy for performance profiling Distillation"
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
        }), ": Add structured logging at each stage of the 07 Knowledge Distillation pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Knowledge Distillation."
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
        children: "Tell me about a time you debugged a Knowledge Distillation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Knowledge Distillation is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_knowledge_distillation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Knowledge Distillation.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Knowledge Distillation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Knowledge Distillation without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache",
        children: "Attention & KV Cache Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Distillation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Knowledge Distillation depends on input size and distribution — always benchmark for your own data."
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