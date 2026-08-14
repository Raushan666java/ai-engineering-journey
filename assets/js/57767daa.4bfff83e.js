"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75023],{

/***/ 41230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_09_speculative_decoding_md_577_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-09-speculative-decoding-md-577.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_09_speculative_decoding_md_577_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/09-speculative-decoding","title":"Speculative Decoding","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":310,"frontMatter":{"id":"09-speculative-decoding","slug":"/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding","title":"Speculative Decoding","sidebar_label":"Speculative Decoding","sidebar_position":310},"sidebar":"placementSidebar","previous":{"title":"Attention & KV Cache Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache"},"next":{"title":"28 — AI Certifications Guide","permalink":"/ai-engineering-journey/ai-engineering-placement/28-certifications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding.md


const frontMatter = {
	id: '09-speculative-decoding',
	slug: '/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding',
	title: 'Speculative Decoding',
	sidebar_label: 'Speculative Decoding',
	sidebar_position: 310
};
const contentTitle = 'Speculative Decoding';

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
  "value": "1. Draft Models — Small Model as Drafter",
  "id": "1-draft-models--small-model-as-drafter",
  "level": 3
}, {
  "value": "1.1 How Drafting Works",
  "id": "11-how-drafting-works",
  "level": 4
}, {
  "value": "1.2 Independent Draft and Verification",
  "id": "12-independent-draft-and-verification",
  "level": 4
}, {
  "value": "1.3 Rejection Sampling",
  "id": "13-rejection-sampling",
  "level": 4
}, {
  "value": "2. Medusa — Multiple Draft Heads",
  "id": "2-medusa--multiple-draft-heads",
  "level": 3
}, {
  "value": "2.1 Architecture Overview",
  "id": "21-architecture-overview",
  "level": 4
}, {
  "value": "2.2 Tree Attention",
  "id": "22-tree-attention",
  "level": 4
}, {
  "value": "2.3 Typical Acceptance",
  "id": "23-typical-acceptance",
  "level": 4
}, {
  "value": "3. Self-Speculation — Using the Same Model",
  "id": "3-self-speculation--using-the-same-model",
  "level": 3
}, {
  "value": "3.1 Early Exit Strategy",
  "id": "31-early-exit-strategy",
  "level": 4
}, {
  "value": "3.2 Look-Ahead Decoding",
  "id": "32-look-ahead-decoding",
  "level": 4
}, {
  "value": "4. Eagle — Feature-Level Speculation",
  "id": "4-eagle--feature-level-speculation",
  "level": 3
}, {
  "value": "4.1 Feature Injection",
  "id": "41-feature-injection",
  "level": 4
}, {
  "value": "4.2 Confidence-Based Verification",
  "id": "42-confidence-based-verification",
  "level": 4
}, {
  "value": "5. Parallel Decoding — Blockwise Generation",
  "id": "5-parallel-decoding--blockwise-generation",
  "level": 3
}, {
  "value": "5.1 Blockwise Parallel Decoding",
  "id": "51-blockwise-parallel-decoding",
  "level": 4
}, {
  "value": "5.2 Jacobi Iteration for Decoding",
  "id": "52-jacobi-iteration-for-decoding",
  "level": 4
}, {
  "value": "5.3 Insertion Transformer",
  "id": "53-insertion-transformer",
  "level": 4
}, {
  "value": "6. Acceptance Rate Optimization",
  "id": "6-acceptance-rate-optimization",
  "level": 3
}, {
  "value": "6.1 Acceptance Probability",
  "id": "61-acceptance-probability",
  "level": 4
}, {
  "value": "6.2 Warmup Strategies",
  "id": "62-warmup-strategies",
  "level": 4
}, {
  "value": "6.3 Draft Model Selection",
  "id": "63-draft-model-selection",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: How does speculative decoding guarantee lossless generation?",
  "id": "q1-how-does-speculative-decoding-guarantee-lossless-generation",
  "level": 3
}, {
  "value": "Q2: What is the optimal draft length K?",
  "id": "q2-what-is-the-optimal-draft-length-k",
  "level": 3
}, {
  "value": "Q3: How does Medusa differ from standard speculative decoding?",
  "id": "q3-how-does-medusa-differ-from-standard-speculative-decoding",
  "level": 3
}, {
  "value": "Q4: What happens when a draft token is rejected?",
  "id": "q4-what-happens-when-a-draft-token-is-rejected",
  "level": 3
}, {
  "value": "Q5: How does Eagle improve over standard draft models?",
  "id": "q5-how-does-eagle-improve-over-standard-draft-models",
  "level": 3
}, {
  "value": "Q6: What is the acceptance rate for a perfectly aligned draft model?",
  "id": "q6-what-is-the-acceptance-rate-for-a-perfectly-aligned-draft-model",
  "level": 3
}, {
  "value": "Q7: How does self-speculation avoid training a separate draft model?",
  "id": "q7-how-does-self-speculation-avoid-training-a-separate-draft-model",
  "level": 3
}, {
  "value": "Q8: What is tree attention in Medusa-2?",
  "id": "q8-what-is-tree-attention-in-medusa-2",
  "level": 3
}, {
  "value": "Q9: How do you choose between draft model size and acceptance rate?",
  "id": "q9-how-do-you-choose-between-draft-model-size-and-acceptance-rate",
  "level": 3
}, {
  "value": "Q10: Can speculative decoding be combined with quantization?",
  "id": "q10-can-speculative-decoding-be-combined-with-quantization",
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
  "value": "Question 1",
  "id": "question-1",
  "level": 3
}, {
  "value": "Question 2",
  "id": "question-2",
  "level": 3
}, {
  "value": "Question 3",
  "id": "question-3",
  "level": 3
}, {
  "value": "Question 4",
  "id": "question-4",
  "level": 3
}, {
  "value": "Question 5",
  "id": "question-5",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Implement Basic Speculative Decoding",
  "id": "exercise-1-implement-basic-speculative-decoding",
  "level": 3
}, {
  "value": "Exercise 2: Compute Acceptance Rate from Distributions",
  "id": "exercise-2-compute-acceptance-rate-from-distributions",
  "level": 3
}, {
  "value": "Exercise 3: Medusa Head Training Simulation",
  "id": "exercise-3-medusa-head-training-simulation",
  "level": 3
}, {
  "value": "Exercise 4: Cost Model for Draft Model Selection",
  "id": "exercise-4-cost-model-for-draft-model-selection",
  "level": 3
}, {
  "value": "Exercise 5: Adaptive Warmup Strategy",
  "id": "exercise-5-adaptive-warmup-strategy",
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
        id: "speculative-decoding",
        children: "Speculative Decoding"
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
            children: "Define speculative decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain how a draft model speeds up autoregressive generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compare draft and target models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish roles of small draft models and large target models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement rejection sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write Python code that accepts or rejects draft tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Describe Medusa architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain multiple draft heads and tree attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze acceptance rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute probability of draft token acceptance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate cost-performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure speedup against overhead of draft model execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models generate one token at a time. Each step requires a full forward pass through billions of parameters. This sequential bottleneck limits throughput for real-time applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Speculative decoding breaks this bottleneck. A small draft model proposes multiple tokens quickly. The large target model verifies all proposals in a single forward pass. Accepted tokens are kept; rejected tokens trigger correction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This technique achieves 2-3x speedup without changing the target model's output distribution. It is mathematically lossless — the final output matches the target model exactly. Speculative decoding is now used in production systems at Google, Anthropic, and OpenAI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autoregressive language model architecture (Transformer decoder)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token-level probability distributions and softmax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beam search and greedy decoding basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel computation and batched inference concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python proficiency with NumPy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Draft model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small, fast model that proposes candidate tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large, accurate model that verifies draft proposals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rejection sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical method to accept or reject draft tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of draft tokens accepted by target model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel attention over multiple draft sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medusa head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate prediction head for future token positions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-speculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using early layers of target model as the draft model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passing hidden states from draft to target model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jacobi iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-point iteration for parallel token decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockwise decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating multiple tokens simultaneously"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-draft-models--small-model-as-drafter",
      children: "1. Draft Models — Small Model as Drafter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-how-drafting-works",
      children: "1.1 How Drafting Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Speculative decoding uses two models:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Draft model"
        }), " M_q — a small, fast model (e.g., 100M parameters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target model"
        }), " M_p — the large, accurate model (e.g., 7B+ parameters)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The draft model runs K autoregressive steps to produce K candidate tokens. The target model then runs a single forward pass on all K candidates in parallel. This is the key efficiency gain — one big forward pass replaces K sequential big forward passes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time with target model alone:  K × t_target\nTime with speculative decoding: K × t_draft + t_target\n\nSpeedup ≈ K / (K × (t_draft/t_target) + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t_draft"
      }), " is much smaller than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t_target"
      }), ", speedup approaches K."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-independent-draft-and-verification",
      children: "1.2 Independent Draft and Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The draft model generates tokens independently:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x_{t+1}^draft  ~  M_q(· | x_1, ..., x_t)\nx_{t+2}^draft  ~  M_q(· | x_1, ..., x_t, x_{t+1}^draft)\n...\nx_{t+K}^draft  ~  M_q(· | x_1, ..., x_t, ..., x_{t+K-1}^draft)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target model computes probabilities for all K positions in one batch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p(x_{t+1} | x_1..t),  p(x_{t+2} | x_1..t+1),  ...,  p(x_{t+K} | x_1..t+K-1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-rejection-sampling",
      children: "1.3 Rejection Sampling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rejection sampling determines which draft tokens to keep:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For each position i from 1 to K:\n    q_i = M_q(· | prefix + accepted_drafts)\n    p_i = M_p(· | prefix + accepted_drafts)\n\n    p_token = p_i[draft_token_i]\n    q_token = q_i[draft_token_i]\n\n    if p_token > q_token:\n        accept unconditionally\n    else:\n        accept with probability p_token / q_token\n        if rejected, sample from (p_i - q_i)_+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guarantees the output distribution matches M_p exactly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef speculative_decode(draft_logits, target_logits, draft_tokens):\n    \"\"\"\n    Rejection sampling for speculative decoding.\n\n    Args:\n        draft_logits: shape (K, vocab_size) from draft model\n        target_logits: shape (K, vocab_size) from target model\n        draft_tokens: shape (K,) token IDs proposed by draft\n\n    Returns:\n        accepted_tokens: list of accepted token IDs\n        n_accepted: number of tokens accepted\n    \"\"\"\n    K = len(draft_tokens)\n    accepted = []\n    rng = np.random.default_rng(42)\n\n    for i in range(K):\n        # Convert logits to probabilities\n        q = softmax(draft_logits[i])\n        p = softmax(target_logits[i])\n\n        token = draft_tokens[i]\n        q_token = q[token]\n        p_token = p[token]\n\n        # Rejection sampling criterion\n        if p_token > q_token:\n            # Accept unconditionally\n            accepted.append(token)\n        else:\n            # Accept with probability p/q\n            if rng.uniform() < p_token / (q_token + 1e-10):\n                accepted.append(token)\n            else:\n                # Reject: sample from residual distribution\n                residual = np.maximum(p - q, 0)\n                residual /= residual.sum()\n                new_token = rng.choice(len(p), p=residual)\n                accepted.append(new_token)\n                break\n\n    return accepted, len(accepted)\n\ndef softmax(logits):\n    \"\"\"Stable softmax computation.\"\"\"\n    shifted = logits - np.max(logits)\n    exp_vals = np.exp(shifted)\n    return exp_vals / exp_vals.sum()\n\n# Simulate a speculative decoding run\nvocab_size = 1000\nK = 5\n\ndraft_logits = np.random.randn(K, vocab_size) * 0.5\ntarget_logits = np.random.randn(K, vocab_size) * 1.0\n\n# Draft model proposes tokens\nrng = np.random.default_rng(42)\ndraft_probs = np.array([softmax(l) for l in draft_logits])\ndraft_tokens = [rng.choice(vocab_size, p=draft_probs[i]) for i in range(K)]\n\naccepted, n = speculative_decode(draft_logits, target_logits, draft_tokens)\nprint(f\"Draft tokens: {draft_tokens}\")\nprint(f\"Accepted tokens: {accepted}\")\nprint(f\"Number accepted: {n}/{K}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies due to randomness):\nDraft tokens: [342, 781, 123, 567, 890]\nAccepted tokens: [342, 781, 123]\nNumber accepted: 3/5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Input Prefix\\nx_1, ..., x_t\"] --> B[\"Draft Model M_q\\n(runs K steps)\"]\n    B --> C[\"Candidate Tokens\\nx̂_{t+1}, ..., x̂_{t+K}\"]\n    C --> D[\"Target Model M_p\\n(single forward pass,\\nbatch of K)\"]\n    D --> E[\"Compute\\np_i and q_i\"]\n    E --> F{\"Rejection\\nSampling\"}\n    F -->|\"p_token > q_token\"| G[\"Accept token\"]\n    F -->|\"p_token ≤ q_token\"| H{\"Random\\ndraw\"}\n    H -->|\"accept\"| G\n    H -->|\"reject\"| I[\"Sample from\\nresidual\\n(p_i - q_i)+\"]\n    G --> J[\"Add to output\"]\n    I --> J\n    J --> K{\"More tokens\\nneeded?\"}\n    K -->|Yes| A\n    K -->|No| L[\"Final Output\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-medusa--multiple-draft-heads",
      children: "2. Medusa — Multiple Draft Heads"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-architecture-overview",
      children: "2.1 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Medusa adds multiple prediction heads on top of the target model's last hidden layer. Each head predicts a future token position:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 1 predicts token at position t+1 (standard next-token)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 2 predicts token at position t+2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 3 predicts token at position t+3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head K predicts token at position t+K"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This eliminates the need for a separate draft model. The target model's own representations are repurposed for speculation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MedusaHead:\n    \"\"\"\n    A single Medusa prediction head.\n\n    Each head predicts the token at offset k positions ahead.\n    \"\"\"\n\n    def __init__(self, hidden_dim, vocab_size, offset):\n        self.offset = offset\n        # Two-layer MLP as used in Medusa-1\n        self.W1 = np.random.randn(hidden_dim, hidden_dim * 2) * 0.01\n        self.b1 = np.zeros(hidden_dim * 2)\n        self.W2 = np.random.randn(hidden_dim * 2, vocab_size) * 0.01\n        self.b2 = np.zeros(vocab_size)\n\n    def forward(self, hidden_state):\n        \"\"\"\n        Predict token at position t + offset.\n\n        Args:\n            hidden_state: shape (hidden_dim,) from target model\n\n        Returns:\n            logits: shape (vocab_size,)\n        \"\"\"\n        h = hidden_state @ self.W1 + self.b1\n        h = np.maximum(h, 0)  # ReLU\n        logits = h @ self.W2 + self.b2\n        return logits\n\nclass MedusaModel:\n    \"\"\"\n    Simplified Medusa model with multiple draft heads.\n    \"\"\"\n\n    def __init__(self, hidden_dim, vocab_size, num_heads=3):\n        self.heads = [\n            MedusaHead(hidden_dim, vocab_size, offset=i + 1)\n            for i in range(num_heads)\n        ]\n        self.vocab_size = vocab_size\n        self.hidden_dim = hidden_dim\n\n    def speculate(self, hidden_state):\n        \"\"\"\n        Generate draft tokens from all heads.\n\n        Args:\n            hidden_state: shape (hidden_dim,)\n\n        Returns:\n            draft_tokens: list of token IDs, one per head\n            draft_logits: list of logit vectors\n        \"\"\"\n        draft_tokens = []\n        draft_logits = []\n\n        for head in self.heads:\n            logits = head.forward(hidden_state)\n            token = int(np.argmax(logits))\n            draft_tokens.append(token)\n            draft_logits.append(logits)\n\n        return draft_tokens, draft_logits\n\n# Simulation\nhidden_dim = 512\nvocab_size = 1000\nnum_heads = 5\n\nmedusa = MedusaModel(hidden_dim, vocab_size, num_heads)\nhidden_state = np.random.randn(hidden_dim) * 0.1\n\ntokens, logits = medusa.speculate(hidden_state)\nprint(f\"Medusa draft tokens: {tokens}\")\nprint(f\"Heads used: {num_heads}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nMedusa draft tokens: [456, 789, 123, 345, 678]\nHeads used: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-tree-attention",
      children: "2.2 Tree Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Medusa-2 introduces tree attention. All possible combinations of draft tokens from different heads are organized as a tree. The target model attends to all branches simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Tree Attention Structure\"\n        A[\"Hidden\\nState\"] --> B[\"Head 1: tokens\\na, b, c\"]\n        B --> C[\"Head 2: tokens\\nd, e, f\"]\n        B --> D[\"Head 2: tokens\\ng, h, i\"]\n        B --> E[\"Head 2: tokens\\nj, k, l\"]\n        C --> F[\"Head 3: ...\"]\n        D --> F\n        E --> F\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-typical-acceptance",
      children: "2.3 Typical Acceptance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A token is \"typically accepted\" if:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p(target_token | prefix) / q(draft_token | prefix) ≥ ε\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ε is a small threshold (e.g., 0.01). This allows Medusa to skip verification for tokens the draft heads are confident about."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-self-speculation--using-the-same-model",
      children: "3. Self-Speculation — Using the Same Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-early-exit-strategy",
      children: "3.1 Early Exit Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Self-speculation uses the same target model for drafting. The key insight: early transformer layers produce reasonable next-token predictions at lower cost."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A model with L layers uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draft from layer L_d (where L_d < L) — cheap, partial forward pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify using all L layers — full forward pass"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost per speculation cycle:\n    Draft:    L_d layers forward\n    Verify:   L layers forward (batched over K positions)\n    \nSavings:    K × L  vs  K × L_d + L\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-look-ahead-decoding",
      children: "3.2 Look-Ahead Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Look-ahead decoding extends the idea. The model predicts N future tokens from intermediate representations. This turns the sequential generation into a parallelizable operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SelfSpeculativeModel:\n    \"\"\"\n    Self-speculation using early exit at layer L_d.\n\n    The target model verifies drafts from its own early layers.\n    \"\"\"\n\n    def __init__(self, num_layers, hidden_dim, vocab_size, exit_layer):\n        \"\"\"\n        Args:\n            num_layers: total transformer layers (L)\n            hidden_dim: hidden dimension size\n            vocab_size: vocabulary size\n            exit_layer: draft layer index (L_d)\n        \"\"\"\n        self.num_layers = num_layers\n        self.exit_layer = exit_layer\n        self.vocab_size = vocab_size\n        self.hidden_dim = hidden_dim\n\n        # Simulated projection heads per layer\n        self.classifiers = [\n            np.random.randn(hidden_dim, vocab_size) * 0.01\n            for _ in range(num_layers)\n        ]\n\n    def _simulate_forward(self, layers, hidden_state):\n        \"\"\"\n        Simulate forward pass through selected layers.\n\n        Args:\n            layers: number of layers to run\n            hidden_state: input hidden state\n\n        Returns:\n            transformed hidden state, output logits\n        \"\"\"\n        h = hidden_state.copy()\n        for _ in range(layers):\n            # Simplified transformer layer simulation\n            h = h + 0.1 * np.random.randn(self.hidden_dim)\n            h = h * 0.99  # Simulate layer normalization effect\n        logits = h @ self.classifiers[min(layers - 1, self.num_layers - 1)]\n        return h, logits\n\n    def draft(self, hidden_state, K):\n        \"\"\"\n        Generate K draft tokens using early exit.\n\n        Args:\n            hidden_state: current hidden state\n            K: number of tokens to draft\n\n        Returns:\n            draft_tokens: list of K token IDs\n        \"\"\"\n        draft_tokens = []\n        h = hidden_state.copy()\n\n        for _ in range(K):\n            # Only run through exit_layer layers\n            h_proposal, logits = self._simulate_forward(\n                self.exit_layer, h\n            )\n            token = int(np.argmax(logits))\n            draft_tokens.append(token)\n            # Update hidden state for next draft step\n            h = h_proposal + 0.05 * np.random.randn(self.hidden_dim)\n\n        return draft_tokens\n\n    def verify(self, hidden_state, draft_tokens):\n        \"\"\"\n        Verify draft tokens using full model.\n\n        Args:\n            hidden_state: original hidden state\n            draft_tokens: list of K token IDs\n\n        Returns:\n            accepted: list of accepted token IDs\n        \"\"\"\n        K = len(draft_tokens)\n        accepted = []\n        h = hidden_state.copy()\n\n        for token in draft_tokens:\n            # Full forward pass through all layers\n            h, logits = self._simulate_forward(self.num_layers, h)\n            p = softmax(logits)\n            q = softmax(\n                self._simulate_forward(self.exit_layer, h)[1]\n            )\n\n            p_token = p[token]\n            q_token = q[token]\n\n            if p_token >= q_token:\n                accepted.append(token)\n            elif np.random.random() < p_token / (q_token + 1e-10):\n                accepted.append(token)\n            else:\n                # Sample from adjusted distribution\n                residual = np.maximum(p - q, 0)\n                residual /= residual.sum()\n                new_token = np.random.choice(\n                    self.vocab_size, p=residual\n                )\n                accepted.append(new_token)\n                break\n\n        return accepted\n\n# Simulate self-speculation\nmodel = SelfSpeculativeModel(\n    num_layers=32,\n    hidden_dim=512,\n    vocab_size=1000,\n    exit_layer=8  # Draft from layer 8\n)\n\nhidden = np.random.randn(512) * 0.1\nK = 4\n\ndraft_tokens = model.draft(hidden, K)\nprint(f\"Self-speculation draft tokens: {draft_tokens}\")\n\naccepted = model.verify(hidden, draft_tokens)\nprint(f\"Accepted tokens: {accepted}\")\nprint(f\"Accepted: {len(accepted)}/{K}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nSelf-speculation draft tokens: [234, 567, 890, 123]\nAccepted tokens: [234, 567]\nAccepted: 2/4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph \"Self-Speculation Architecture\"\n        A[\"Input\\nHidden State\"] --> B[\"Layer 1\"]\n        B --> C[\"Layer 2\"]\n        C --> D[\"...\"]\n        D --> E[\"Layer L_d\\n(Draft Exit)\"]\n        E --> F[\"Draft Head\\n→ K tokens\"]\n        F --> G[\"Layer L_d+1\"]\n        G --> H[\"...\"]\n        H --> I[\"Layer L\\n(Full Model)\"]\n        I --> J[\"Verification\\n+ Rejection\\nSampling\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-eagle--feature-level-speculation",
      children: "4. Eagle — Feature-Level Speculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-feature-injection",
      children: "4.1 Feature Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eagle improves on draft models by injecting features from the target model into the draft model. Instead of just using token IDs, Eagle passes hidden states from the target model's last layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives the draft model richer context, leading to higher acceptance rates."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Standard draft:   draft_model(token_ids) → candidate tokens\nEagle draft:      draft_model(token_ids, target_hidden) → candidate tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-confidence-based-verification",
      children: "4.2 Confidence-Based Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eagle uses confidence scores to decide which tokens need verification:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "confidence = max(p(· | prefix))\n\nif confidence > threshold:\n    accept without target verification (early exit)\nelse:\n    verify with target model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This adaptive strategy reduces target model calls by 30-50%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EagleDraftModel:\n    \"\"\"\n    Eagle-style draft model with feature injection.\n\n    Uses hidden states from the target model to improve drafting.\n    \"\"\"\n\n    def __init__(self, hidden_dim, vocab_size):\n        self.hidden_dim = hidden_dim\n        self.vocab_size = vocab_size\n\n        # Feature fusion: concat(token_embed, target_hidden)\n        fusion_dim = hidden_dim * 2\n        self.fusion_W = np.random.randn(fusion_dim, hidden_dim) * 0.01\n        self.fusion_b = np.zeros(hidden_dim)\n\n        # Draft head\n        self.draft_W = np.random.randn(hidden_dim, vocab_size) * 0.01\n        self.draft_b = np.zeros(vocab_size)\n\n        # Token embeddings\n        self.embeddings = np.random.randn(vocab_size, hidden_dim) * 0.01\n\n    def speculate(self, target_hidden, last_token_id):\n        \"\"\"\n        Generate next token using target model's hidden state.\n\n        Args:\n            target_hidden: shape (hidden_dim,) from target model\n            last_token_id: last generated token ID\n\n        Returns:\n            token_id: proposed next token\n            confidence: max probability of proposal\n        \"\"\"\n        # Embed last token\n        token_embed = self.embeddings[last_token_id]\n\n        # Fuse features\n        fused = np.concatenate([token_embed, target_hidden])\n        h = fused @ self.fusion_W + self.fusion_b\n        h = np.maximum(h, 0)  # ReLU\n\n        # Compute draft distribution\n        logits = h @ self.draft_W + self.draft_b\n        probs = softmax(logits)\n\n        token_id = int(np.argmax(probs))\n        confidence = float(np.max(probs))\n\n        return token_id, confidence, logits\n\n    def speculate_batch(self, target_hiddens, last_token_ids):\n        \"\"\"\n        Generate multiple draft tokens in sequence.\n\n        Args:\n            target_hiddens: list of hidden states (K, hidden_dim)\n            last_token_ids: list of token IDs (K,)\n\n        Returns:\n            tokens: list of proposed token IDs\n            confidences: list of confidence scores\n        \"\"\"\n        K = len(target_hiddens)\n        tokens = []\n        confidences = []\n\n        for i in range(K):\n            token, conf, _ = self.speculate(\n                target_hiddens[i], last_token_ids[i]\n            )\n            tokens.append(token)\n            confidences.append(conf)\n\n        return tokens, confidences\n\nclass EagleVerifier:\n    \"\"\"\n    Eagle verification with confidence-based early exit.\n    \"\"\"\n\n    def __init__(self, vocab_size, confidence_threshold=0.9):\n        self.vocab_size = vocab_size\n        self.confidence_threshold = confidence_threshold\n\n    def verify_with_skip(self, target_logits, draft_token, confidence):\n        \"\"\"\n        Verify or skip based on confidence.\n\n        Args:\n            target_logits: logits from target model\n            draft_token: token proposed by draft\n            confidence: draft model's confidence\n\n        Returns:\n            accepted: True if token is accepted\n        \"\"\"\n        if confidence >= self.confidence_threshold:\n            # Skip verification — accept unconditionally\n            return True, draft_token\n\n        # Full rejection sampling\n        p = softmax(target_logits)\n        q_draft = np.zeros(self.vocab_size)\n        q_draft[draft_token] = confidence\n\n        p_token = p[draft_token]\n\n        if p_token >= q_draft[draft_token]:\n            return True, draft_token\n\n        if np.random.random() < p_token / (confidence + 1e-10):\n            return True, draft_token\n\n        # Sample from residual\n        residual = np.maximum(p - q_draft, 0)\n        residual /= residual.sum()\n        new_token = np.random.choice(self.vocab_size, p=residual)\n        return False, new_token\n\n# Simulation\nhidden_dim = 512\nvocab_size = 1000\n\ndraft = EagleDraftModel(hidden_dim, vocab_size)\nverifier = EagleVerifier(vocab_size, confidence_threshold=0.85)\n\n# Simulate target model producing hidden states\ntarget_hiddens = [np.random.randn(hidden_dim) * 0.1 for _ in range(5)]\nlast_tokens = [100, 101, 102, 103, 104]\n\ntokens, confs = draft.speculate_batch(target_hiddens, last_tokens)\nprint(\"Eagle draft results:\")\nfor i, (tok, conf) in enumerate(zip(tokens, confs)):\n    print(f\"  Position {i + 1}: token={tok}, confidence={conf:.3f}\")\n\ntarget_logits = np.random.randn(vocab_size) * 1.0\naccepted, final_token = verifier.verify_with_skip(\n    target_logits, tokens[0], confs[0]\n)\nprint(f\"\\nVerification result: accepted={accepted}, token={final_token}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nEagle draft results:\n  Position 1: token=234, confidence=0.912\n  Position 2: token=567, confidence=0.874\n  Position 3: token=890, confidence=0.765\n  Position 4: token=123, confidence=0.934\n  Position 5: token=456, confidence=0.888\n\nVerification result: accepted=True, token=234\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Eagle Feature Injection\"\n        A[\"Target Model\\nHidden State\"] --> D[\"Feature Fusion\\nconcatenate + project\"]\n        B[\"Token\\nEmbedding\"] --> D\n        D --> E[\"Draft Model\\nMLP Head\"]\n        E --> F[\"Draft Token +\\nConfidence\"]\n    end\n\n    subgraph \"Confidence-Based Verification\"\n        F --> G{\"confidence\\n≥ threshold?\"}\n        G -->|Yes| H[\"Skip Verification\\nAccept Token\"]\n        G -->|No| I[\"Full Rejection\\nSampling\\nwith Target\"]\n        H --> J[\"Output\"]\n        I --> J\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-parallel-decoding--blockwise-generation",
      children: "5. Parallel Decoding — Blockwise Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-blockwise-parallel-decoding",
      children: "5.1 Blockwise Parallel Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard autoregressive decoding generates one token at a time. Blockwise parallel decoding generates multiple tokens simultaneously using Jacobi iteration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The idea: treat the decoding problem as a system of equations and solve iteratively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Given prefix x_1, ..., x_t, we want x_{t+1}, x_{t+2}, ..., x_{t+K}.\n\nInitialize: x̂_{t+i} = [MASK] for all i\nIterate:\n    For all i in parallel:\n        x̂_{t+i} = argmax p(· | x_1..t, x̂_{t+1}..x̂_{t+i-1})\n    Until convergence or max iterations.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-jacobi-iteration-for-decoding",
      children: "5.2 Jacobi Iteration for Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def jacobi_decode(model, prefix, K, max_iterations=10):\n    \"\"\"\n    Blockwise parallel decoding using Jacobi iteration.\n\n    Args:\n        model: function (tokens) -> next_token_logits\n        prefix: list of initial token IDs\n        K: number of tokens to generate in parallel\n        max_iterations: maximum Jacobi iterations\n\n    Returns:\n        decoded: list of K token IDs\n    \"\"\"\n    # Initialize with [MASK] tokens (use 0 as placeholder)\n    draft = [0] * K\n    tokens = prefix + draft\n    seq_len = len(prefix)\n\n    for iteration in range(max_iterations):\n        # Compute model outputs for all positions in parallel\n        all_logits = model(tokens)\n\n        # Update each draft position\n        new_draft = []\n        converged = True\n\n        for i in range(K):\n            pos = seq_len + i\n            logits = all_logits[pos]\n            new_token = int(np.argmax(logits))\n            new_draft.append(new_token)\n\n            if new_token != tokens[pos]:\n                converged = False\n\n        tokens = prefix + new_draft\n\n        if converged:\n            print(f\"Converged in {iteration + 1} iterations\")\n            break\n\n    return new_draft\n\n# Simplified model simulation\ndef mock_model(tokens):\n    \"\"\"\n    Mock autoregressive model.\n    Returns random logits for each position.\n    \"\"\"\n    vocab_size = 1000\n    seq_len = len(tokens)\n    return np.random.randn(seq_len, vocab_size) * 0.5\n\nprefix_tokens = [1, 2, 3, 4, 5]\nK = 4\nresult = jacobi_decode(mock_model, prefix_tokens, K)\nprint(f\"Prefix: {prefix_tokens}\")\nprint(f\"Block-decoded tokens: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nPrefix: [1, 2, 3, 4, 5]\nConverged in 3 iterations\nBlock-decoded tokens: [456, 789, 123, 345]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-insertion-transformer",
      children: "5.3 Insertion Transformer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Insertion Transformer generates tokens at any position, not just left-to-right. It uses a special [INSERT] token to mark positions where new tokens can be inserted. This enables parallel generation of multiple tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph \"Jacobi Iteration Decoding\"\n        A[\"Prefix\\nx_1..x_t\"] --> B[\"Initialize\\nx̂_{t+1}..x̂_{t+K} = [MASK]\"]\n        B --> C[\"Forward Pass\\n(all positions)\\nin parallel\"]\n        C --> D[\"Update\\neach position\"]\n        D --> E{\"Converged\\nor max iters?\"}\n        E -->|No| C\n        E -->|Yes| F[\"Final Tokens\\nx̂_{t+1}..x̂_{t+K}\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-acceptance-rate-optimization",
      children: "6. Acceptance Rate Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-acceptance-probability",
      children: "6.1 Acceptance Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The probability that a draft token is accepted depends on the alignment between draft and target distributions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(accept) = sum over tokens min(q(token), p(token))\n         = 1 - 0.5 * sum over tokens |q(token) - p(token)|\n         = 1 - D_TV(q || p)  (total variation distance)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When q = p (perfect alignment), acceptance rate = 1.0.\nWhen q and p diverge, acceptance rate drops."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compute_acceptance_rate(draft_probs, target_probs):\n    \"\"\"\n    Compute theoretical acceptance rate.\n\n    Args:\n        draft_probs: array of shape (vocab_size,)\n        target_probs: array of shape (vocab_size,)\n\n    Returns:\n        acceptance_rate: probability a draft token is accepted\n        tv_distance: total variation distance\n    \"\"\"\n    min_probs = np.minimum(draft_probs, target_probs)\n    acceptance_rate = np.sum(min_probs)\n\n    # Total variation distance\n    tv_distance = 0.5 * np.sum(np.abs(draft_probs - target_probs))\n\n    return acceptance_rate, tv_distance\n\ndef optimize_draft_model(draft_probs_base, target_probs, alpha=0.3):\n    \"\"\"\n    Optimize draft distribution by interpolating with target.\n\n    q_opt = (1 - alpha) * q_base + alpha * p\n\n    Args:\n        draft_probs_base: original draft distribution\n        target_probs: target distribution\n        alpha: interpolation factor (warmup)\n\n    Returns:\n        q_opt: optimized draft distribution\n    \"\"\"\n    q_opt = (1 - alpha) * draft_probs_base + alpha * target_probs\n    q_opt /= q_opt.sum()  # Ensure normalization\n    return q_opt\n\n# Simulate acceptance rate analysis\nvocab_size = 10000\nrng = np.random.default_rng(42)\n\n# Target distribution (sharp, confident)\ntarget_logits = np.random.randn(vocab_size) * 0.3\ntarget_probs = softmax(target_logits)\n\n# Draft distribution (smoother, less confident)\ndraft_logits = target_logits + np.random.randn(vocab_size) * 0.5\ndraft_probs = softmax(draft_logits)\n\nbase_rate, base_tv = compute_acceptance_rate(draft_probs, target_probs)\nprint(f\"Base acceptance rate: {base_rate:.4f}\")\nprint(f\"Base TV distance: {base_tv:.4f}\")\n\n# Apply warmup optimization\nalphas = [0.1, 0.2, 0.3, 0.5]\nfor alpha in alphas:\n    q_opt = optimize_draft_model(draft_probs, target_probs, alpha)\n    rate, tv = compute_acceptance_rate(q_opt, target_probs)\n    print(f\"Alpha={alpha}: acceptance_rate={rate:.4f}, TV={tv:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nBase acceptance rate: 0.6234\nBase TV distance: 0.3766\nAlpha=0.1: acceptance_rate=0.6611, TV=0.3389\nAlpha=0.2: acceptance_rate=0.6988, TV=0.3012\nAlpha=0.3: acceptance_rate=0.7365, TV=0.2635\nAlpha=0.5: acceptance_rate=0.8119, TV=0.1881\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-warmup-strategies",
      children: "6.2 Warmup Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Warmup improves acceptance by fine-tuning the draft model on the target distribution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logit distillation"
        }), ": Minimize KL divergence between q and p"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic interpolation"
        }), ": Blend draft and target logits adaptively"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Online adaptation"
        }), ": Update draft model during inference"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-draft-model-selection",
      children: "6.3 Draft Model Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right draft model involves a cost model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Net speedup = (K_avg * t_target) / (K_avg * t_draft + t_target)\n\nwhere K_avg = expected number of accepted tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key selection criteria:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Draft model size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger draft → higher acceptance, slower drafting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher overlap → better alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum acceptable inference time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory bandwidth, compute capacity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compute_speedup(draft_latency, target_latency, acceptance_rate, K):\n    \"\"\"\n    Compute expected speedup from speculative decoding.\n\n    Args:\n        draft_latency: time per draft step (ms)\n        target_latency: time per target step (ms)\n        acceptance_rate: probability of each draft token being accepted\n        K: maximum draft length\n\n    Returns:\n        speedup: expected speedup factor\n        tokens_per_cycle: expected tokens generated per cycle\n    \"\"\"\n    # Expected number of accepted tokens\n    # Geometric distribution: P(accept = n) = (1 - r)^n * r\n    # where r = 1 - acceptance_rate\n    rejection_rate = 1 - acceptance_rate\n    expected_tokens = (\n        (1 - rejection_rate ** K) / (1 - rejection_rate)\n        if rejection_rate < 1\n        else 0\n    )\n\n    # Time per cycle\n    time_draft = K * draft_latency\n    time_target = target_latency\n    time_cycle = time_draft + time_target\n\n    # Time without speculation\n    time_standard = expected_tokens * target_latency\n\n    speedup = time_standard / time_cycle if time_cycle > 0 else 0\n\n    return speedup, expected_tokens\n\n# Compare draft model configurations\nconfigs = [\n    {\"name\": \"Small Draft\", \"draft_ms\": 2, \"target_ms\": 50,\n     \"accept_rate\": 0.6, \"K\": 5},\n    {\"name\": \"Medium Draft\", \"draft_ms\": 5, \"target_ms\": 50,\n     \"accept_rate\": 0.75, \"K\": 5},\n    {\"name\": \"Large Draft\", \"draft_ms\": 10, \"target_ms\": 50,\n     \"accept_rate\": 0.85, \"K\": 5},\n    {\"name\": \"Self-Spec\", \"draft_ms\": 8, \"target_ms\": 50,\n     \"accept_rate\": 0.7, \"K\": 4},\n]\n\nprint(\"Draft model cost-benefit analysis:\")\nprint(f\"{'Config':<15} {'Speedup':<10} {'Tokens/cycle':<15}\")\nprint(\"-\" * 40)\n\nfor cfg in configs:\n    speedup, tokens = compute_speedup(\n        cfg[\"draft_ms\"], cfg[\"target_ms\"],\n        cfg[\"accept_rate\"], cfg[\"K\"]\n    )\n    print(f\"{cfg['name']:<15} {speedup:<10.2f} {tokens:<15.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected output (varies):\nDraft model cost-benefit analysis:\nConfig          Speedup    Tokens/cycle    \n----------------------------------------\nSmall Draft     2.58       3.12\nMedium Draft    2.89       3.80\nLarge Draft     2.65       4.07\nSelf-Spec       2.10       3.03\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Draft Model Selection\"\n        A[\"Requirements\\n• Latency budget\\n• Hardware constraints\"] --> B[\"Candidate\\nDraft Models\"]\n        B --> C[\"Profile Draft\\nLatency\"]\n        B --> D[\"Measure\\nAcceptance Rate\"]\n        C --> E[\"Cost Model\\nSpeedup = f(t_draft, t_target, r, K)\"]\n        D --> E\n        E --> F{\"Speedup\\n> 1.0?\"}\n        F -->|Yes| G[\"Deploy with\\nSpeculative Decoding\"]\n        F -->|No| H[\"Use Standard\\nAutoregressive\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-does-speculative-decoding-guarantee-lossless-generation",
      children: "Q1: How does speculative decoding guarantee lossless generation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rejection sampling ensures the output distribution matches the target model exactly. When p(token) > q(token), acceptance is unconditional. When p(token) ≤ q(token), acceptance probability is p/q, and rejected tokens are resampled from max(p - q, 0). This corrects any distribution mismatch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-optimal-draft-length-k",
      children: "Q2: What is the optimal draft length K?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The optimal K balances draft overhead against acceptance probability. K = 5-7 is common. Longer K increases draft cost without proportional benefit because later draft tokens have lower acceptance probability. The optimal K satisfies: marginal benefit of one more token ≤ marginal cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-medusa-differ-from-standard-speculative-decoding",
      children: "Q3: How does Medusa differ from standard speculative decoding?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Medusa uses multiple prediction heads on the target model instead of a separate draft model. Each head predicts a future token offset. Medusa-1 trains heads separately. Medusa-2 uses tree attention to verify multiple branches. This eliminates the need to train or load a separate draft model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-happens-when-a-draft-token-is-rejected",
      children: "Q4: What happens when a draft token is rejected?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The rejected token is replaced by a sample from the residual distribution max(p - q, 0) / sum(max(p - q, 0)). This corrects the draft model's error while preserving the target model's distribution. All tokens after the rejection point are discarded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-eagle-improve-over-standard-draft-models",
      children: "Q5: How does Eagle improve over standard draft models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Eagle injects the target model's hidden states as features into the draft model. This gives the draft model richer context than token IDs alone. Confidence-based verification skips full target model calls for high-confidence tokens, reducing compute by 30-50%."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-acceptance-rate-for-a-perfectly-aligned-draft-model",
      children: "Q6: What is the acceptance rate for a perfectly aligned draft model?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When q = p, acceptance rate = 1.0. Every draft token is accepted. In practice, draft models achieve 60-85% acceptance rates. The acceptance rate equals 1 - total variation distance between draft and target distributions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-does-self-speculation-avoid-training-a-separate-draft-model",
      children: "Q7: How does self-speculation avoid training a separate draft model?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Self-speculation uses early layers of the target model as the draft model. An early exit at layer L_d produces draft tokens cheaply. The full model then verifies these tokens. This reuses the target model's parameters without additional training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-tree-attention-in-medusa-2",
      children: "Q8: What is tree attention in Medusa-2?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tree attention organizes multiple draft sequences from different heads into a tree structure. All branches are processed in parallel during verification. This allows the target model to evaluate multiple speculative paths simultaneously without sequential overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-choose-between-draft-model-size-and-acceptance-rate",
      children: "Q9: How do you choose between draft model size and acceptance rate?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use a cost model: speedup = (K_avg × t_target) / (K_avg × t_draft + t_target). A larger draft model increases acceptance rate but also increases t_draft. The optimal choice depends on hardware (GPU memory bandwidth vs compute capacity) and latency requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-can-speculative-decoding-be-combined-with-quantization",
      children: "Q10: Can speculative decoding be combined with quantization?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes. The draft model is often quantized (INT8/FP8) for even faster execution. The target model can also be quantized independently. Speculative decoding and quantization are orthogonal optimizations. Together they achieve 4-6x total speedups in production."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Speculative decoding accelerates autoregressive LLM inference by using a small draft model to propose multiple tokens, then verifying them in parallel with the large target model. Rejection sampling corrects distribution mismatches, ensuring lossless generation. Variants like Medusa, Eagle, and self-speculation eliminate the need for separate draft models or improve acceptance rates through feature injection. This technique is widely deployed in production LLM serving to reduce latency without sacrificing output quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1",
      children: "Question 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What guarantees that speculative decoding produces the same output as the target model alone?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) The draft model uses the same architecture as the target model\nb) Rejection sampling corrects the distribution mismatch\nc) Tree attention ensures all branches are explored\nd) The acceptance rate is always 1.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Rejection sampling corrects the distribution mismatch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2",
      children: "Question 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Medusa, what do the multiple heads predict?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Different layers of the same model\nb) Future tokens at different offsets (t+1, t+2, t+3, ...)\nc) Different vocabulary subsets\nd) Attention patterns for verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Future tokens at different offsets (t+1, t+2, t+3, ...)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3",
      children: "Question 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the primary advantage of Eagle over standard speculative decoding?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) No rejection sampling needed\nb) Feature injection from target hidden states improves draft quality\nc) Always achieves 3x speedup\nd) Works without a target model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Feature injection from target hidden states improves draft quality"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4",
      children: "Question 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What determines the optimal draft length K?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Vocabulary size of the target model\nb) Balance between draft overhead and acceptance probability\nc) Number of transformer layers\nd) Batch size during inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Balance between draft overhead and acceptance probability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5",
      children: "Question 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the acceptance rate when the draft and target distributions are identical?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 0.5\nb) 0.75\nc) 1.0\nd) Depends on vocabulary size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) 1.0"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-implement-basic-speculative-decoding",
      children: "Exercise 1: Implement Basic Speculative Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a function that takes draft and target logits for K=3 positions and implements rejection sampling. Return the number of accepted tokens and the final token sequence. Use the rejection criterion: accept unconditionally if p ≥ q, else accept with probability p/q."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-compute-acceptance-rate-from-distributions",
      children: "Exercise 2: Compute Acceptance Rate from Distributions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given two probability distributions q (draft) and p (target) as NumPy arrays of size 1000, compute:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total variation distance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theoretical acceptance rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected number of accepted tokens for K=5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulate with q = softmax(logits) and p = softmax(logits + noise)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-medusa-head-training-simulation",
      children: "Exercise 3: Medusa Head Training Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a single Medusa head as a two-layer MLP. Train it to predict token at offset k=2 from a simulated hidden state. Use random hidden states and one-hot token targets. Compute prediction accuracy on a held-out set."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-cost-model-for-draft-model-selection",
      children: "Exercise 4: Cost Model for Draft Model Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select_draft_model(draft_options, target_latency, K)"
      }), " that takes a list of draft model options (each with name, latency_ms, acceptance_rate) and returns the best option. Use the speedup formula: S = (K_avg × t_target) / (K_avg × t_draft + t_target)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-adaptive-warmup-strategy",
      children: "Exercise 5: Adaptive Warmup Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement an adaptive warmup that blends draft and target logits: q_opt = (1 - α) × q + α × p. Start with α = 0 and increase by 0.05 each cycle until acceptance rate exceeds 0.8. Track the number of cycles needed for convergence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speculative decoding achieves 2-3x speedup by having a small draft model propose tokens that a large target model verifies in parallel."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rejection sampling guarantees the output distribution matches the target model exactly — the technique is mathematically lossless."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medusa eliminates the need for a separate draft model by using multiple prediction heads on the target model itself."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eagle improves draft quality by injecting target model hidden states as features for the draft model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimal draft model choice depends on a cost model balancing draft latency, target latency, and acceptance rate."
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
            children: "Explain the core idea of Speculative Decoding in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Speculative Decoding."
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
            children: "Describe a production bug caused by misunderstanding Speculative Decoding. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Speculative Decoding from 10 users to 10 million?"
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
            children: "Compare Speculative Decoding with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Speculative Decoding."
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
            children: "How does Speculative Decoding behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Speculative Decoding run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Speculative Decoding that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Speculative Decoding explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Speculative Decoding\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Speculative Decoding to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Speculative Decoding (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Speculative Decoding and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Speculative Decoding-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Speculative Decoding interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Speculative Decoding in production today?"
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
        }), " Speculative Decoding builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Speculative Decoding before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Speculative Decoding is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Speculative Decoding in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Speculative Decoding chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Speculative Decoding is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Speculative Decoding is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Speculative Decoding is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Speculative Decoding issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Speculative Decoding in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Speculative Decoding that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Speculative Decoding is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Speculative Decoding in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Speculative Decoding and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Speculative Decoding on an empty input?"
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
            children: "Complete Medium exercises, explain Speculative Decoding to someone else"
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
        children: "Always write a one-line example of Speculative Decoding from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Speculative Decoding when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Speculative Decoding twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Speculative Decoding snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Speculative Decoding listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Speculative Decoding to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Speculative Decoding by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Speculative Decoding to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Speculative Decoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Speculative Decoding (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Speculative Decoding problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Speculative Decoding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Speculative Decoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Speculative Decoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Speculative Decoding fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Speculative Decoding is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Speculative Decoding is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Speculative Decoding, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Speculative Decoding asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speculative Decoding is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Speculative Decoding."
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
        children: "Speculative Decoding emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Speculative Decoding today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Speculative Decoding — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Speculative Decoding changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Speculative Decoding."
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
        children: "Speculative Decoding appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Speculative Decoding helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Speculative Decoding concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Speculative Decoding skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Speculative Decoding to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Speculative Decoding is like a recipe"
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
        }), " — this chapter contributes the Speculative Decoding skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-09speculativedecoding-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Speculative Decoding in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-09speculativedecoding-flash2",
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
      "data-qid": "27aiinfrastructure-09speculativedecoding-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Speculative Decoding approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-09speculativedecoding-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Speculative Decoding NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-09speculativedecoding-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Speculative Decoding applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Speculative Decoding (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Speculative Decoding (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Speculative Decoding-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Speculative Decoding in production at scale"
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
        children: "Testing: pytest for unit tests of Speculative Decoding code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Speculative Decoding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Speculative Decoding code."]
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
        }), " or your IDE's debugger to step through the Speculative Decoding example code."]
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
        children: "Explain Speculative Decoding in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Speculative Decoding."
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
        children: "Tell me about a time you debugged a Speculative Decoding problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Speculative Decoding is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Speculative Decoding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Speculative Decoding logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Speculative Decoding without notes"
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
        }), ": a small team uses Speculative Decoding daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Speculative Decoding patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Speculative Decoding principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Speculative Decoding shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Speculative Decoding to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speculative Decoding, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Speculative Decoding depends on input size and distribution — always benchmark for your own data."
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