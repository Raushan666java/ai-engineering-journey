"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89773],{

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
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_07_knowledge_distillation_md_aa8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/07-knowledge-distillation","title":"Knowledge Distillation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":302,"frontMatter":{"id":"07-knowledge-distillation","slug":"/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation","title":"Knowledge Distillation","sidebar_label":"Knowledge Distillation","sidebar_position":302},"sidebar":"placementSidebar","previous":{"title":"Model Pruning","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/06-model-pruning"},"next":{"title":"Attention & KV Cache Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache"}}');
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
	sidebar_position: 302
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Teacher[\"Teacher Model (Large)\"]\n        T1[Pre-trained LLM<br/>e.g., Llama 3.1 70B]\n        T2[High-capacity<br/>Slower inference]\n    end\n    subgraph Student[\"Student Model (Small)\"]\n        S1[Tiny model<br/>e.g., TinyLLM 1.1B]\n        S2[Low-capacity<br/>Fast inference]\n    end\n    subgraph Distillation[\"Distillation Process\"]\n        D1[Logit Distillation<br/>Soft targets + KL div]\n        D2[Feature Distillation<br/>Hidden state matching]\n        D3[Seq-Level Distillation<br/>Autoregressive matching]\n    end\n    subgraph Data[\"Data Curation\"]\n        Data1[Teacher-generated<br/>On-policy data]\n        Data2[Student-generated<br/>Off-policy data]\n        Data3[Hybrid<br/>Both sources]\n    end\n    subgraph Eval[\"Evaluation\"]\n        E1[Task accuracy]\n        E2[Inference speed]\n        E3[Model size]\n    end\n\n    Teacher --> Distillation\n    Student --> Distillation\n    Data --> Distillation\n    Distillation --> Eval\n    Eval -->|Deploy| Student\n    T1 -->|Soft labels| D1\n    T2 -->|Hidden states| D2\n    T1 -->|Token probs| D3\n"
      })
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
        children: "import numpy as np\n\ndef softmax_with_temperature(logits, temperature=1.0):\n    \"\"\"Apply softmax with temperature scaling.\n\n    Higher temperature produces softer probability distributions.\n    Lower temperature makes distributions sharper (more confident).\n\n    Args:\n        logits: Raw model outputs (shape: [batch_size, num_classes])\n        temperature: Scaling factor (T > 0). T=1 is standard softmax.\n\n    Returns:\n        Softened probability distribution\n    \"\"\"\n    logits = np.array(logits, dtype=np.float64)\n    scaled_logits = logits / temperature\n    exp_logits = np.exp(scaled_logits - np.max(scaled_logits, axis=-1, keepdims=True))\n    probs = exp_logits / np.sum(exp_logits, axis=-1, keepdims=True)\n    return probs\n\n# Demonstrate temperature effects\nlogits = np.array([2.0, 1.0, 0.1, -0.5, -2.0])\n\nprint(\"Temperature effect on softmax probabilities:\")\nprint(\"-\" * 60)\nfor T in [0.5, 1.0, 2.0, 5.0]:\n    probs = softmax_with_temperature(logits, T)\n    print(f\"T={T:.1f}: {np.round(probs, 4)}  \"\n          f\"Entropy={np.round(-np.sum(probs * np.log(probs + 1e-10)), 4)}\")\n\n# Output:\n# T=0.5: Sharp distribution — dominant class gets most probability\n# T=1.0: Standard softmax\n# T=2.0: Softer distribution — secondary classes get more weight\n# T=5.0: Nearly uniform — all classes equally likely\n"
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
        children: "def kl_divergence(p, q, eps=1e-10):\n    \"\"\"Compute KL divergence D_KL(P || Q).\n\n    Measures how much information is lost when Q approximates P.\n    Asymmetric: D_KL(P || Q) != D_KL(Q || P).\n\n    Args:\n        p: Target distribution (teacher)\n        q: Predicted distribution (student)\n        eps: Small epsilon for numerical stability\n\n    Returns:\n        KL divergence value\n    \"\"\"\n    p = np.clip(np.array(p), eps, 1.0)\n    q = np.clip(np.array(q), eps, 1.0)\n    return np.sum(p * np.log(p / q))\n\ndef distillation_loss(student_logits, teacher_logits, temperature, alpha=0.5):\n    \"\"\"Compute total distillation loss.\n\n    Combines hard loss (cross-entropy with labels) and\n    soft loss (KL divergence with teacher).\n\n    Args:\n        student_logits: Raw outputs from student model\n        teacher_logits: Raw outputs from teacher model\n        temperature: Temperature for softening distributions\n        alpha: Weight for soft loss. Total = alpha * soft_loss + (1-alpha) * hard_loss\n\n    Returns:\n        Total loss, soft_loss, hard_loss components\n    \"\"\"\n    # Soften both distributions with same temperature\n    student_soft = softmax_with_temperature(student_logits, temperature)\n    teacher_soft = softmax_with_temperature(teacher_logits, temperature)\n\n    # Compute soft loss using KL divergence\n    soft_loss = kl_divergence(teacher_soft, student_soft)\n\n    # Hard loss uses standard softmax (T=1) with ground-truth labels\n    student_probs = softmax_with_temperature(student_logits, 1.0)\n    # Simplified: assume first class is correct (one-hot label)\n    hard_loss = -np.log(student_probs[0] + 1e-10)\n\n    # Combined loss\n    total = alpha * (temperature ** 2) * soft_loss + (1 - alpha) * hard_loss\n\n    return total, soft_loss, hard_loss\n\n# Demonstrate distillation loss\nteacher_logits = np.array([3.5, 2.1, 1.0, 0.3, -1.2])\nstudent_logits = np.array([2.8, 2.5, 0.8, 0.5, -0.8])\n\nprint(\"\\nDistillation loss components at different temperatures:\")\nprint(\"-\" * 60)\nfor T in [1.0, 2.0, 4.0, 8.0]:\n    total, soft, hard = distillation_loss(student_logits, teacher_logits, T, alpha=0.7)\n    print(f\"T={T:.1f}: total={total:.4f}, soft={soft:.4f}, hard={hard:.4f}\")\n\n# Output shows:\n# At T=1: Soft loss is small because distributions are already similar\n# At T=4: Soft loss increases because distributions are flattened\n# Alpha * T^2 balances the gradient magnitudes between soft and hard losses\n"
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
        children: "def train_distillation_step(teacher_logits_fn, student_model,\n                            batch_inputs, labels, temperature, alpha):\n    \"\"\"Single training step for logit distillation.\n\n    Args:\n        teacher_logits_fn: Function that returns teacher logits (frozen)\n        student_model: Student model with forward() and backward()\n        batch_inputs: Input data batch\n        labels: Ground-truth labels\n        temperature: Softening temperature\n        alpha: Soft loss weight\n\n    Returns:\n        Total loss for this step\n    \"\"\"\n    # Teacher forward pass (no gradients — teacher is frozen)\n    with torch.no_grad():\n        teacher_logits = teacher_logits_fn(batch_inputs)\n\n    # Student forward pass\n    student_logits = student_model(batch_inputs)\n\n    # Compute distillation loss\n    total_loss, soft_loss, hard_loss = distillation_loss(\n        student_logits, teacher_logits, temperature, alpha\n    )\n\n    # Backward pass — only student parameters update\n    # (In real PyTorch: total_loss.backward())\n    # optimizer.step()\n\n    return total_loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Input[\"Input x\"]\n        X[Image / Text]\n    end\n    subgraph TeacherPath[\"Teacher (frozen)\"]\n        T[Large Model] --> T_l[Logits z_t]\n        T_l --> T_s[Softmax T]\n        T_s --> T_p[Soft targets p_t]\n    end\n    subgraph StudentPath[\"Student (trainable)\"]\n        S[Small Model] --> S_l[Logits z_s]\n        S_l --> S_s[Softmax T]\n        S_s --> S_p[Soft targets p_s]\n    end\n    subgraph Loss[\"Loss Computation\"]\n        KL[KL Divergence<br/>D_KL(p_t || p_s)]\n        CE[Cross-Entropy<br/>with labels]\n        Combined[Combined Loss<br/>alpha * T^2 * KL + (1-alpha) * CE]\n    end\n\n    X --> T\n    X --> S\n    T_p --> KL\n    S_p --> KL\n    CE --> Combined\n    KL --> Combined\n    Combined -->|Backprop| S\n"
      })
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
        children: "import numpy as np\n\ndef hint_loss(student_hidden, teacher_hidden, student_hint_layer, teacher_hint_layer):\n    \"\"\"Compute hint-based feature distillation loss.\n\n    Aligns student hidden state at hint layer with teacher hidden state.\n\n    Args:\n        student_hidden: List of student hidden states per layer\n        teacher_hidden: List of teacher hidden states per layer\n        student_hint_layer: Index of student layer to match\n        teacher_hint_layer: Index of teacher layer to match\n\n    Returns:\n        MSE loss between matched representations\n    \"\"\"\n    student_feats = student_hidden[student_hint_layer]\n    teacher_feats = teacher_hidden[teacher_hint_layer]\n\n    # Handle dimension mismatch (teacher hidden size ≠ student hidden size)\n    if student_feats.shape[-1] != teacher_feats.shape[-1]:\n        # In practice, use a learnable projection layer\n        # projection = nn.Linear(student_dim, teacher_dim)\n        # student_feats = projection(student_feats)\n        print(\"Dimension mismatch — add projection layer\")\n\n    # Mean squared error between representations\n    mse_loss = np.mean((student_feats - teacher_feats) ** 2)\n    return mse_loss\n\ndef attention_transfer_loss(student_attention, teacher_attention):\n    \"\"\"Compute attention transfer loss.\n\n    Matches attention maps between teacher and student.\n\n    Args:\n        student_attention: Student attention weights [batch, heads, seq, seq]\n        teacher_attention: Teacher attention weights [batch, heads, seq, seq]\n\n    Returns:\n        MSE loss between attention maps\n    \"\"\"\n    # Normalize attention maps\n    def normalize_attention(attn):\n        attn = np.array(attn)\n        attn = attn / (np.linalg.norm(attn, axis=-1, keepdims=True) + 1e-10)\n        return attn\n\n    student_norm = normalize_attention(student_attention)\n    teacher_norm = normalize_attention(teacher_attention)\n\n    # MSE between normalized attention maps\n    loss = np.mean((student_norm - teacher_norm) ** 2)\n    return loss\n\n# Simulate feature distillation\nbatch_size, seq_len, teacher_dim, student_dim = 2, 10, 768, 384\nnum_heads = 12\n\n# Generate simulated hidden states\nnp.random.seed(42)\nteacher_hidden = [np.random.randn(batch_size, seq_len, teacher_dim) for _ in range(12)]\nstudent_hidden = [np.random.randn(batch_size, seq_len, student_dim) for _ in range(6)]\n\n# Generate simulated attention maps\nteacher_attention = np.random.randn(batch_size, num_heads, seq_len, seq_len)\nstudent_attention = np.random.randn(batch_size, num_heads, seq_len, seq_len)\n\n# Compute losses\nhint = hint_loss(student_hidden, teacher_hidden, hint_layer=3, teacher_layer=6)\nattn_loss = attention_transfer_loss(student_attention, teacher_attention)\n\nprint(f\"Feature Distillation Loss Components:\")\nprint(f\"  Hint loss (layer 3 -> layer 6): {hint:.4f}\")\nprint(f\"  Attention transfer loss: {attn_loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attention Transfer:"
      }), "\nZagoruyko et al. proposed attention transfer. The student matches the teacher's attention maps. Attention maps reveal which parts of the input the model focuses on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph TeacherFeat[\"Teacher Feature Extraction\"]\n        T1[Layer 1] --> T2[Layer 2]\n        T2 --> T3[Layer 3]\n        T3 --> T4[...]\n        T4 --> T5[Layer 12<br/>Final hidden]\n    end\n    subgraph StudentFeat[\"Student Feature Extraction\"]\n        S1[Layer 1] --> S2[Layer 2]\n        S2 --> S3[Layer 3]\n        S3 --> S4[...]\n        S4 --> S5[Layer 6<br/>Final hidden]\n    end\n    subgraph Matching[\"Layer Matching\"]\n        M1[Hint Loss<br/>T3 <-> S2]\n        M2[Attention Loss<br/>T attn <-> S attn]\n        M3[Logit Loss<br/>T logits <-> S logits]\n    end\n\n    T3 -.->|MSE| M1\n    T2 -.->|Attn map| M2\n    S2 -.->|MSE| M1\n    S1 -.->|Attn map| M2\n    T5 -.->|KL div| M3\n    S5 -.->|KL div| M3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Distillation Loss with Feature Matching:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def total_feature_distillation_loss(\n    student_logits, teacher_logits,\n    student_hidden, teacher_hidden,\n    student_attention, teacher_attention,\n    labels, temperature=2.0, alpha=0.5, beta=0.3, gamma=0.2\n):\n    \"\"\"Compute combined distillation loss with feature matching.\n\n    Total = alpha * logit_loss + beta * hint_loss + gamma * attn_loss\n\n    Args:\n        student_logits: Student output logits\n        teacher_logits: Teacher output logits\n        student_hidden: List of student hidden states\n        teacher_hidden: List of teacher hidden states\n        student_attention: Student attention maps\n        teacher_attention: Teacher attention maps\n        labels: Ground-truth labels\n        temperature: Softening temperature\n        alpha: Logit distillation weight\n        beta: Feature distillation weight\n        gamma: Attention transfer weight\n\n    Returns:\n        Dictionary with all loss components\n    \"\"\"\n    # Logit distillation component\n    student_soft = softmax_with_temperature(student_logits, temperature)\n    teacher_soft = softmax_with_temperature(teacher_logits, temperature)\n    logit_loss = kl_divergence(teacher_soft, student_soft)\n\n    # Feature (hint) distillation component\n    # Match student layer 3 with teacher layer 6\n    hint = hint_loss(student_hidden, teacher_hidden, 3, 6)\n\n    # Attention transfer component\n    attn = attention_transfer_loss(student_attention, teacher_attention)\n\n    # Standard cross-entropy with labels\n    student_probs = softmax_with_temperature(student_logits, 1.0)\n    hard_loss = -np.log(student_probs[0] + 1e-10)\n\n    total = (\n        alpha * (temperature ** 2) * logit_loss +\n        beta * hint +\n        gamma * attn +\n        (1 - alpha - beta - gamma) * hard_loss\n    )\n\n    return {\n        \"total\": total,\n        \"logit_loss\": logit_loss,\n        \"hint_loss\": hint,\n        \"attention_loss\": attn,\n        \"hard_loss\": hard_loss\n    }\n\nlosses = total_feature_distillation_loss(\n    student_logits=np.array([2.8, 2.5, 0.8]),\n    teacher_logits=np.array([3.5, 2.1, 1.0]),\n    student_hidden=[np.random.randn(2, 10, 384) for _ in range(6)],\n    teacher_hidden=[np.random.randn(2, 10, 768) for _ in range(12)],\n    student_attention=np.random.randn(2, 12, 10, 10),\n    teacher_attention=np.random.randn(2, 12, 10, 10),\n    labels=np.array([1, 0])\n)\n\nprint(f\"\\nTotal Distillation Loss: {losses['total']:.4f}\")\nprint(f\"  Logit (KL) loss: {losses['logit_loss']:.4f}\")\nprint(f\"  Hint (MSE) loss: {losses['hint_loss']:.4f}\")\nprint(f\"  Attention loss: {losses['attention_loss']:.4f}\")\nprint(f\"  Hard (CE) loss: {losses['hard_loss']:.4f}\")\n"
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
        children: "def off_policy_distillation(teacher_model, student_model, dataset,\n                            num_epochs=3, temperature=2.0):\n    \"\"\"Off-policy distillation pipeline.\n\n    Teacher generates soft targets for all data upfront.\n    Student trains on these fixed targets.\n\n    Args:\n        teacher_model: Pre-trained teacher (frozen)\n        student_model: Student to train\n        dataset: Training dataset (inputs without labels needed)\n        num_epochs: Number of training epochs\n        temperature: Softening temperature\n\n    Returns:\n        Trained student model\n    \"\"\"\n    print(\"Phase 1: Teacher generates soft targets for all data.\")\n    soft_targets = []\n    for batch in dataset:\n        # Teacher forward pass (frozen)\n        with torch.no_grad():\n            teacher_logits = teacher_model(batch)\n            soft_probs = softmax_with_temperature(teacher_logits, temperature)\n        soft_targets.append(soft_probs)\n\n    print(f\"Phase 2: Train student on {len(soft_targets)} batches.\")\n    for epoch in range(num_epochs):\n        epoch_loss = 0.0\n        for batch, target in zip(dataset, soft_targets):\n            # Student forward pass\n            student_logits = student_model(batch)\n            student_probs = softmax_with_temperature(student_logits, temperature)\n\n            # KL divergence against fixed teacher targets\n            loss = kl_divergence(target, student_probs)\n            epoch_loss += loss\n\n            # Backward pass\n            # loss.backward()\n            # optimizer.step()\n\n        print(f\"Epoch {epoch+1}: Loss = {epoch_loss/len(dataset):.4f}\")\n\n    return student_model\n"
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
        children: "def on_policy_distillation(teacher_model, student_model, seed_prompts,\n                           num_steps=1000, temperature=2.0):\n    \"\"\"On-policy distillation pipeline.\n\n    Student generates sequences.\n    Teacher provides soft targets for those sequences.\n\n    Args:\n        teacher_model: Pre-trained teacher (frozen)\n        student_model: Student to train\n        seed_prompts: Initial prompts for generation\n        num_steps: Number of training steps\n        temperature: Softening temperature\n\n    Returns:\n        Trained student model\n    \"\"\"\n    print(\"Phase 1: Student generates sequences from prompts.\")\n    print(\"Phase 2: Teacher labels student-generated sequences.\")\n\n    for step in range(num_steps):\n        # Sample a prompt\n        prompt = seed_prompts[step % len(seed_prompts)]\n\n        # Student generates continuation\n        # student_output = student_model.generate(prompt)\n        student_input = f\"{prompt} student_continuation\"\n\n        # Teacher labels the student's output\n        with torch.no_grad():\n            teacher_logits = teacher_model(student_input)\n            soft_targets = softmax_with_temperature(teacher_logits, temperature)\n\n        # Student learns from its own generation distribution\n        student_logits = student_model(student_input)\n        student_probs = softmax_with_temperature(student_logits, temperature)\n\n        loss = kl_divergence(soft_targets, student_probs)\n        # loss.backward()\n        # optimizer.step()\n\n        if step % 200 == 0:\n            print(f\"Step {step}: Loss = {loss:.4f}\")\n\n    return student_model\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph OffPolicy[\"Off-Policy Distillation\"]\n        OP1[Dataset] --> OP2[Teacher generates soft targets]\n        OP2 --> OP3[Student trains on fixed targets]\n        OP3 --> OP4[Student learns teacher distribution]\n    end\n    subgraph OnPolicy[\"On-Policy Distillation\"]\n        OP5[Prompt] --> OP6[Student generates output]\n        OP6 --> OP7[Teacher labels student output]\n        OP7 --> OP8[Student trains on own distribution]\n        OP8 --> OP6\n    end\n    subgraph Hybrid[\"Hybrid Strategy\"]\n        H1[Phase 1: Off-Policy<br/>Fast pretraining]\n        H1 --> H2[Phase 2: On-Policy<br/>Distribution alignment]\n        H2 --> H3[Phase 3: Task-specific<br/>Fine-tune on target task]\n    end\n"
      })
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
        children: "import numpy as np\n\ndef seqkd_loss(student_logits_sequence, teacher_tokens, temperature=1.0):\n    \"\"\"Compute SeqKD loss.\n\n    Student learns to predict teacher-generated tokens.\n\n    Args:\n        student_logits_sequence: Student logits for each position [seq_len, vocab_size]\n        teacher_tokens: Teacher-generated token IDs [seq_len]\n        temperature: Softening temperature\n\n    Returns:\n        Cross-entropy loss over teacher-generated tokens\n    \"\"\"\n    seq_len = len(teacher_tokens)\n    total_loss = 0.0\n\n    for pos in range(seq_len):\n        # Student logits at this position\n        logits = student_logits_sequence[pos]\n        token_id = teacher_tokens[pos]\n\n        # Softmax to get probabilities\n        probs = softmax_with_temperature(logits, temperature)\n\n        # Negative log-likelihood of teacher token\n        token_prob = probs[token_id]\n        loss = -np.log(token_prob + 1e-10)\n        total_loss += loss\n\n    return total_loss / seq_len\n\ndef minimum_bayes_risk_decoding(logits_list, num_samples=5):\n    \"\"\"Minimum Bayes Risk (MBR) decoding for distillation.\n\n    Selects the output with minimum expected risk under the\n    teacher's probability distribution.\n\n    Args:\n        logits_list: List of logit sequences from different decoding paths\n        num_samples: Number of candidate sequences\n\n    Returns:\n        Index of the best candidate sequence\n    \"\"\"\n    candidates = []\n\n    # Generate diverse candidate sequences\n    # (In practice use beam search or sampling with different temperatures)\n    for i in range(num_samples):\n        # Sample a sequence from logits\n        probs = softmax_with_temperature(logits_list[i], temperature=1.0)\n        # tokens = np.random.choice(vocab_size, p=probs)\n        # candidates.append(tokens)\n        candidates.append(f\"candidate_{i}\")\n\n    # Compute pairwise similarity (e.g., BLEU, ROUGE)\n    def similarity(seq1, seq2):\n        \"\"\"Simplified similarity — in practice use BLEU or ROUGE.\"\"\"\n        return 1.0 if seq1 == seq2 else 0.5\n\n    # Compute expected risk for each candidate\n    risks = []\n    for i, candidate in enumerate(candidates):\n        risk = 0.0\n        for j, other in enumerate(candidates):\n            if i != j:\n                sim = similarity(candidate, other)\n                # Risk = negative similarity (we want min risk)\n                risk -= sim\n        risks.append(risk)\n\n    best_idx = int(np.argmin(risks))\n    return best_idx, risks\n\n# Simulate SeqKD training\nvocab_size = 1000\nseq_length = 20\nnp.random.seed(42)\n\n# Teacher-generated tokens\nteacher_gen_tokens = np.random.randint(0, vocab_size, size=seq_length)\nstudent_logits = np.random.randn(seq_length, vocab_size)\n\nloss = seqkd_loss(student_logits, teacher_gen_tokens, temperature=1.0)\nprint(f\"SeqKD Loss: {loss:.4f}\")\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant D as Dataset\n    participant T as Teacher Model\n    participant M as MBR Decoder\n    participant S as Student Model\n\n    D->>T: Input prompt\n    T->>T: Generate candidate sequences\n    T->>M: Multiple candidates\n    M->>M: Compute pairwise BLEU\n    M->>M: Select min-risk candidate\n    M->>S: Best sequence as target\n    S->>S: Learn to predict teacher tokens\n    Note over S: Cross-entropy on teacher tokens\n"
      })
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
        children: "def llm_distillation_recipe():\n    \"\"\"Recipe for LLM distillation — TinyLLM-style.\n\n    Combines multiple distillation techniques for best results.\n    \"\"\"\n    recipe = {\n        \"teacher_model\": \"Llama 3.1 8B\",\n        \"student_architecture\": \"TinyLLM 1.1B (24 layers, 2048 hidden)\",\n        \"distillation_stages\": [\n            {\n                \"stage\": 1,\n                \"method\": \"Logit distillation on pretrain data\",\n                \"data\": \"C4, Wikipedia (100B tokens)\",\n                \"temperature\": 2.0,\n                \"alpha\": 0.5,\n                \"epochs\": 1\n            },\n            {\n                \"stage\": 2,\n                \"method\": \"Feature distillation on hidden states\",\n                \"data\": \"Same as stage 1\",\n                \"matching_layers\": {\n                    \"teacher\": [4, 8, 12, 16, 20, 24, 28, 32],\n                    \"student\": [3, 6, 9, 12, 15, 18, 21, 24]\n                },\n                \"beta\": 0.3,\n                \"epochs\": 1\n            },\n            {\n                \"stage\": 3,\n                \"method\": \"On-policy distillation with MBR\",\n                \"data\": \"Student-generated continuations\",\n                \"temperature\": 1.5,\n                \"mbr_samples\": 5,\n                \"epochs\": 0.5\n            },\n            {\n                \"stage\": 4,\n                \"method\": \"Task-specific fine-tuning\",\n                \"data\": \"Instruction datasets (Alpaca, Dolly)\",\n                \"temperature\": 1.0,\n                \"alpha\": 0.2,\n                \"epochs\": 0.5\n            }\n        ],\n        \"evaluation_metrics\": [\n            \"Perplexity on held-out data\",\n            \"MMLU accuracy (5-shot)\",\n            \"HumanEval pass@1\",\n            \"Inference speed (tokens/sec)\",\n            \"Model size (GB)\"\n        ]\n    }\n    return recipe\n\ndef simulate_distillation_scaling(teacher_size=7, student_sizes=None):\n    \"\"\"Simulate how distillation performance scales with student size.\n\n    Args:\n        teacher_size: Teacher model size in billions\n        student_sizes: List of student sizes to evaluate\n\n    Returns:\n        Dictionary with performance estimates\n    \"\"\"\n    if student_sizes is None:\n        student_sizes = [0.5, 1.1, 3.0, 7.0]\n\n    results = {}\n    for student_size in student_sizes:\n        # Simulated performance retention\n        # Larger students retain more teacher performance\n        size_ratio = student_size / teacher_size\n        perf_retention = min(1.0, 0.75 + 0.25 * np.log(1 + size_ratio / 0.1))\n\n        speedup = teacher_size / student_size * 1.2  # 1.2x architectural efficiency\n\n        results[student_size] = {\n            \"teacher_size_b\": teacher_size,\n            \"student_size_b\": student_size,\n            \"size_ratio\": size_ratio,\n            \"performance_retention\": round(perf_retention, 3),\n            \"inference_speedup_x\": round(speedup, 1),\n            \"memory_reduction_x\": round(teacher_size / student_size, 1)\n        }\n\n    return results\n\nscaling = simulate_distillation_scaling(teacher_size=7.0)\n\nprint(f\"{'Student Size':<20} {'Ratio':<8} {'Perf Retention':<18} {'Speedup':<10} {'Mem Redux':<10}\")\nprint(\"=\"*70)\nfor size, metrics in scaling.items():\n    print(f\"{size}B {'':<16} {metrics['size_ratio']:<8.2f} \"\n          f\"{metrics['performance_retention']:<18.2f} \"\n          f\"{metrics['inference_speedup_x']:<10.1f}x \"\n          f\"{metrics['memory_reduction_x']:<10.1f}x\")\n\n# Output shows:\n# 1.1B student retains ~90% performance, 6.4x faster, 6.4x less memory\n# 3B student retains ~95% performance, 2.3x faster\n"
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
        children: "def curate_distillation_data(data_sources, quality_filters):\n    \"\"\"Curate high-quality data for LLM distillation.\n\n    Args:\n        data_sources: Dict of data source names and paths\n        quality_filters: List of filter functions\n\n    Returns:\n        Filtered dataset statistics\n    \"\"\"\n    total_tokens = 0\n    filtered_tokens = 0\n\n    for source_name, source_data in data_sources.items():\n        source_tokens = source_data.get(\"tokens\", 0)\n        total_tokens += source_tokens\n\n        # Apply quality filters\n        for filter_fn in quality_filters:\n            source_tokens = filter_fn(source_name, source_tokens)\n\n        filtered_tokens += source_tokens\n\n    curation_stats = {\n        \"total_tokens_before\": total_tokens,\n        \"total_tokens_after\": filtered_tokens,\n        \"filter_rate\": (total_tokens - filtered_tokens) / (total_tokens + 1e-10) * 100,\n        \"sources\": list(data_sources.keys())\n    }\n\n    return curation_stats\n\n# Example data sources for distillation\ndistillation_data = {\n    \"c4\": {\"tokens\": 100_000_000_000, \"description\": \"Colossal Clean Crawled Corpus\"},\n    \"wikipedia\": {\"tokens\": 10_000_000_000, \"description\": \"English Wikipedia\"},\n    \"code\": {\"tokens\": 20_000_000_000, \"description\": \"GitHub code (The Stack)\"},\n    \"instruction\": {\"tokens\": 5_000_000_000, \"description\": \"Instruction-following data\"},\n}\n\ndef high_quality_filter(source_name, token_count):\n    \"\"\"Filter for high-quality data only.\"\"\"\n    # Code and instruction data is high quality\n    if source_name in [\"code\", \"instruction\"]:\n        return token_count\n    # General web data — keep 70%\n    return int(token_count * 0.7)\n\nfilters = [high_quality_filter]\nstats = curate_distillation_data(distillation_data, filters)\n\nprint(f\"\\nDistillation Data Curation:\")\nprint(f\"  Total tokens before: {stats['total_tokens_before']/1e9:.1f}B\")\nprint(f\"  Total tokens after: {stats['total_tokens_after']/1e9:.1f}B\")\nprint(f\"  Filter rate: {stats['filter_rate']:.1f}%\")\nprint(f\"  Data sources: {', '.join(stats['sources'])}\")\n"
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
        children: "def prepare_teacher(teacher_config):\n    \"\"\"Prepare and freeze teacher model.\n\n    Args:\n        teacher_config: Dict with teacher model specs\n\n    Returns:\n        Frozen teacher model function\n    \"\"\"\n    print(f\"Loading teacher: {teacher_config['name']}\")\n    print(f\"  Parameters: {teacher_config['params_b']}B\")\n    print(f\"  Architecture: {teacher_config['architecture']}\")\n    print(\"  Freezing teacher parameters...\")\n\n    # In production:\n    # teacher = AutoModelForCausalLM.from_pretrained(teacher_config['name'])\n    # teacher.eval()\n    # for param in teacher.parameters():\n    #     param.requires_grad = False\n\n    def teacher_forward(inputs):\n        \"\"\"Teacher forward pass (no gradients).\"\"\"\n        # return teacher(inputs).logits\n        return np.random.randn(inputs.shape[0], 100, 32000)\n\n    return teacher_forward\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 2: Student Architecture Selection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def select_student_architecture(constraints):\n    \"\"\"Select student architecture based on deployment constraints.\n\n    Args:\n        constraints: Dict with deployment requirements:\n            - max_params: Maximum parameter count\n            - max_latency_ms: Maximum inference latency\n            - target_device: CPU, GPU mobile, etc.\n            - task: Task type (classification, generation, etc.)\n\n    Returns:\n        Student architecture config\n    \"\"\"\n    print(f\"\\nSelecting student architecture for deployment:\")\n    print(f\"  Constraints: max_params={constraints['max_params']}M, \"\n          f\"latency={constraints['max_latency_ms']}ms\")\n    print(f\"  Device: {constraints['target_device']}, Task: {constraints['task']}\")\n\n    # Architecture selection logic\n    if constraints['max_params'] <= 100:\n        # Very small student for mobile\n        arch = {\n            \"type\": \"mobile_llm\",\n            \"layers\": 12,\n            \"hidden_dim\": 512,\n            \"num_heads\": 8,\n            \"params_m\": 85,\n            \"expected_latency_ms\": 15\n        }\n    elif constraints['max_params'] <= 1000:\n        # Medium student for server\n        arch = {\n            \"type\": \"tiny_llm\",\n            \"layers\": 24,\n            \"hidden_dim\": 2048,\n            \"num_heads\": 16,\n            \"params_m\": 1100,\n            \"expected_latency_ms\": 30\n        }\n    else:\n        # Larger student for high-performance server\n        arch = {\n            \"type\": \"small_llm\",\n            \"layers\": 32,\n            \"hidden_dim\": 4096,\n            \"num_heads\": 32,\n            \"params_m\": 3000,\n            \"expected_latency_ms\": 50\n        }\n\n    return arch\n\n# Example: select for mobile deployment\nmobile_config = select_student_architecture({\n    \"max_params\": 100,\n    \"max_latency_ms\": 20,\n    \"target_device\": \"iPhone 15\",\n    \"task\": \"text_generation\"\n})\n\nprint(f\"  Selected: {mobile_config['type']} \"\n      f\"({mobile_config['params_m']}M params, \"\n      f\"{mobile_config['expected_latency_ms']}ms latency)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 3: Data Preparation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def prepare_distillation_data(teacher_fn, student_arch, data_sources,\n                              strategy=\"off_policy\", temperature=2.0):\n    \"\"\"Prepare data for distillation training.\n\n    Args:\n        teacher_fn: Frozen teacher forward function\n        student_arch: Student architecture config\n        data_sources: List of data sources\n        strategy: 'off_policy', 'on_policy', or 'hybrid'\n        temperature: Softening temperature\n\n    Returns:\n        Data loader with teacher soft targets\n    \"\"\"\n    print(f\"\\nPreparing data for {strategy} distillation...\")\n\n    if strategy == \"off_policy\":\n        # Teacher generates all targets upfront\n        print(f\"  Generating teacher soft targets at T={temperature}\")\n        for source in data_sources:\n            print(f\"  Processing {source}...\")\n            # teacher_logits = teacher_fn(source_data)\n            # soft_targets = softmax_with_temperature(teacher_logits, temperature)\n            # Save to disk for student training\n            print(f\"    Stored teacher soft targets for {source}\")\n\n    elif strategy == \"on_policy\":\n        # Student generates, teacher labels\n        print(f\"  Student will generate sequences\")\n        print(f\"  Teacher will label student outputs\")\n\n    elif strategy == \"hybrid\":\n        # Both\n        print(f\"  Phase 1: Off-policy with teacher-generated targets\")\n        print(f\"  Phase 2: On-policy with student-generated data\")\n\n    return {\"strategy\": strategy, \"ready\": True}\n\n# Example data preparation\n# prepare_distillation_data(teacher_fn, mobile_config,\n#                           [\"c4\", \"wikipedia\", \"code\"],\n#                           strategy=\"hybrid\", temperature=2.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 4: Distillation Schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_distillation_schedule(total_steps, config):\n    \"\"\"Create a distillation training schedule.\n\n    Controls how temperature, alpha, and data strategy change\n    over the course of training.\n\n    Args:\n        total_steps: Total training steps\n        config: Schedule configuration\n\n    Returns:\n        Schedule function that returns params at each step\n    \"\"\"\n    def schedule(step):\n        \"\"\"Return distillation parameters at given step.\n\n        Args:\n            step: Current training step (0 to total_steps-1)\n\n        Returns:\n            Dict with temperature, alpha, strategy\n        \"\"\"\n        progress = step / total_steps\n\n        # Temperature: start high (4.0), decay to low (1.0)\n        temperature = 4.0 - 3.0 * min(progress, 1.0)\n\n        # Alpha: start high (0.7), decay to low (0.3)\n        alpha = 0.7 - 0.4 * min(progress, 1.0)\n\n        # Strategy: off-policy first half, on-policy second half\n        if progress < 0.5:\n            strategy = \"off_policy\"\n        elif progress < 0.8:\n            strategy = \"on_policy\"\n        else:\n            strategy = \"task_specific\"\n\n        return {\n            \"temperature\": round(temperature, 2),\n            \"alpha\": round(alpha, 2),\n            \"strategy\": strategy,\n            \"progress_pct\": round(progress * 100, 1)\n        }\n\n    return schedule\n\n# Create and test schedule\nscheduler = create_distillation_schedule(total_steps=10000)\n\nprint(f\"\\nDistillation Schedule (10000 steps):\")\nprint(f\"{'Step':<8} {'Progress':<10} {'Temp':<8} {'Alpha':<8} {'Strategy':<18}\")\nprint(\"-\"*55)\nfor step in [0, 1000, 2500, 5000, 7500, 9000, 10000]:\n    params = scheduler(step)\n    print(f\"{step:<8} {params['progress_pct']+'%':<10} \"\n          f\"{params['temperature']:<8} {params['alpha']:<8} \"\n          f\"{params['strategy']:<18}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage 5: Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_distillation(teacher_model, student_model, eval_data):\n    \"\"\"Evaluate the distilled student model.\n\n    Args:\n        teacher_model: Original teacher (for baseline)\n        student_model: Distilled student\n        eval_data: Evaluation dataset\n\n    Returns:\n        Dict with evaluation metrics\n    \"\"\"\n    metrics = {}\n\n    # Task accuracy\n    # student_accuracy = compute_accuracy(student_model, eval_data)\n    # teacher_accuracy = compute_accuracy(teacher_model, eval_data)\n    student_accuracy = 0.92\n    teacher_accuracy = 0.96\n\n    metrics[\"student_accuracy\"] = student_accuracy\n    metrics[\"teacher_accuracy\"] = teacher_accuracy\n    metrics[\"accuracy_gap\"] = teacher_accuracy - student_accuracy\n    metrics[\"retention_rate\"] = student_accuracy / teacher_accuracy\n\n    # Inference speed\n    # student_latency = measure_latency(student_model)\n    # teacher_latency = measure_latency(teacher_model)\n    student_latency = 12.5  # ms\n    teacher_latency = 85.0  # ms\n\n    metrics[\"student_latency_ms\"] = student_latency\n    metrics[\"teacher_latency_ms\"] = teacher_latency\n    metrics[\"speedup\"] = teacher_latency / student_latency\n\n    # Model size\n    # student_size = get_model_size(student_model)\n    # teacher_size = get_model_size(teacher_model)\n    student_size = 0.5  # GB\n    teacher_size = 4.5  # GB\n\n    metrics[\"student_size_gb\"] = student_size\n    metrics[\"teacher_size_gb\"] = teacher_size\n    metrics[\"compression_ratio\"] = teacher_size / student_size\n\n    return metrics\n\nresults = evaluate_distillation(None, None, None)\n\nprint(f\"\\n{'Metric':<22} {'Student':<12} {'Teacher':<12} {'Ratio':<10}\")\nprint(\"=\"*60)\nprint(f\"{'Task Accuracy':<22} {results['student_accuracy']:<12.3f} \"\n      f\"{results['teacher_accuracy']:<12.3f} \"\n      f\"{results['retention_rate']:<10.3f}\")\nprint(f\"{'Latency (ms)':<22} {results['student_latency_ms']:<12.1f} \"\n      f\"{results['teacher_latency_ms']:<12.1f} \"\n      f\"{results['speedup']:<10.1f}x\")\nprint(f\"{'Model Size (GB)':<22} {results['student_size_gb']:<12.1f} \"\n      f\"{results['teacher_size_gb']:<12.1f} \"\n      f\"{results['compression_ratio']:<10.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Pipeline Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Stage1[\"Stage 1: Teacher Preparation\"]\n        S1A[Select teacher model<br/>e.g., Llama 3.1 70B]\n        S1B[Freeze all parameters]\n        S1C[Set to eval mode]\n    end\n    subgraph Stage2[\"Stage 2: Student Architecture\"]\n        S2A[Define constraints<br/>size, latency, device]\n        S2B[Select architecture<br/>e.g., TinyLLM 1.1B]\n        S2C[Initialize student<br/>weights (random)]\n    end\n    subgraph Stage3[\"Stage 3: Data Preparation\"]\n        S3A[Curate training data]\n        S3B[Generate teacher<br/>soft targets]\n        S3C[Create data loader<br/>with temperature scaling]\n    end\n    subgraph Stage4[\"Stage 4: Distillation Training\"]\n        S4A[Off-policy phase<br/>T=4.0, alpha=0.7]\n        S4B[On-policy phase<br/>T=2.0, alpha=0.5]\n        S4C[Task-specific phase<br/>T=1.0, alpha=0.3]\n    end\n    subgraph Stage5[\"Stage 5: Evaluation & Deployment\"]\n        S5A[Evaluate accuracy]\n        S5B[Benchmark latency]\n        S5C[Measure model size]\n        S5D[Export to ONNX/TensorRT]\n        S5E[Deploy to production]\n    end\n\n    Stage1 --> Stage2\n    Stage2 --> Stage3\n    Stage3 --> Stage4\n    Stage4 --> Stage5\n"
      })
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
      children: "a) It speeds up training convergence\nb) It reveals inter-class relationships by softening the distribution\nc) It reduces memory usage during training\nd) It eliminates the need for ground-truth labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nb) It reveals inter-class relationships by softening the distribution. Temperature > 1 spreads probability mass across classes, showing which classes are similar.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What problem does on-policy distillation solve that off-policy distillation does not?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Teacher model is too large to run\nb) Student model overfits to training data\nc) Distribution mismatch between training and inference\nd) Vanishing gradients in deep networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nc) Distribution mismatch between training and inference. On-policy distillation trains on student-generated data, matching the student's inference distribution.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Which of the following is NOT a component of the total distillation loss?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) KL divergence between teacher and student soft targets\nb) MSE between intermediate hidden states\nc) Cosine similarity between teacher and student model weights\nd) Cross-entropy with ground-truth labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nc) Cosine similarity between model weights. Distillation compares outputs and hidden states, not weights.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: SeqKD is specifically designed for which type of model?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Convolutional neural networks for image classification\nb) Autoregressive models for sequence generation\nc) Autoencoders for dimensionality reduction\nd) Graph neural networks for node classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nb) Autoregressive models for sequence generation. SeqKD handles the sequential dependency where each token depends on previous tokens.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: In a distillation pipeline, what is the purpose of the alpha parameter?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) It controls the learning rate of the student model\nb) It balances the weight between soft loss (teacher) and hard loss (labels)\nc) It determines the temperature scaling factor\nd) It controls the number of teacher layers to match"
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
        children: "import numpy as np\n\ndef temperature_softmax(logits, temperature):\n    \"\"\"Implement temperature-scaled softmax.\"\"\"\n    # Your code here\n    pass\n"
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
        children: "# Hints:\n# 1. Generate random data: X = np.random.randn(1000, 50)\n# 2. Generate synthetic labels\n# 3. Teacher: W1 @ ReLU @ W2 (hidden size 256)\n# 4. Student: Single linear layer\n# 5. Train student with KL divergence against teacher\n# 6. Compare against training with hard labels only\n"
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
        children: "# Hints:\n# 1. Extract intermediate activations from both teacher and student\n# 2. Add a projection layer if dimensions differ\n# 3. Add MSE loss weighted by beta parameter\n# 4. Sweep beta from 0.0 to 1.0 and report accuracy\n"
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
        children: "# Hints:\n# 1. Teacher: 4-layer LSTM with hidden size 512\n# 2. Student: 2-layer LSTM with hidden size 128\n# 3. Off-policy: Teacher generates all training sequences\n# 4. On-policy: Student generates sequences, teacher labels them\n# 5. Report perplexity for both methods\n"
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
        children: "def design_schedule():\n    \"\"\"Design a 4-phase distillation schedule.\n\n    Returns a list of phase configs.\n    \"\"\"\n    schedule = []\n    # Phase 1: Off-policy logit distillation\n    # Phase 2: Feature distillation with hint loss\n    # Phase 3: On-policy refinement\n    # Phase 4: Task-specific fine-tuning\n    return schedule\n"
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
            children: "Explain the core idea of Knowledge Distillation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Knowledge Distillation."
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
            children: "Describe a production bug caused by misunderstanding Knowledge Distillation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Knowledge Distillation from 10 users to 10 million?"
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
            children: "Compare Knowledge Distillation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Knowledge Distillation."
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
            children: "How would you make an implementation of Knowledge Distillation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Knowledge Distillation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Knowledge Distillation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Knowledge Distillation\")."
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
        children: "Review complexity and edge cases for the classic Knowledge Distillation interview problem."
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
        }), " You should memorize the Knowledge Distillation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to Knowledge Distillation is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Knowledge Distillation is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of Knowledge Distillation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of Knowledge Distillation on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Knowledge Distillation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Knowledge Distillation (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Knowledge Distillation problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Knowledge Distillation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Knowledge Distillation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Knowledge Distillation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Knowledge Distillation fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Knowledge Distillation is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Knowledge Distillation is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Knowledge Distillation, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Knowledge Distillation asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing Knowledge Distillation."
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
        children: "Knowledge Distillation appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Knowledge Distillation helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Knowledge Distillation concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Knowledge Distillation skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Knowledge Distillation to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge Distillation is like a recipe"
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
        }), " — this chapter contributes the Knowledge Distillation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Knowledge Distillation code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Knowledge Distillation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Knowledge Distillation code."]
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
        }), " or your IDE's debugger to step through the Knowledge Distillation example code."]
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
        children: "Explain Knowledge Distillation in 60 seconds."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Knowledge Distillation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Knowledge Distillation logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Knowledge Distillation daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Knowledge Distillation patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Knowledge Distillation principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Knowledge Distillation shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Knowledge Distillation to the business outcome, not just the code."]
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