"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40995],{

/***/ 58815
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_08_rag_evaluation_md_afb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-08-rag-evaluation-md-afb.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_08_rag_evaluation_md_afb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/08-rag-evaluation","title":"RAG Evaluation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":153,"frontMatter":{"id":"08-rag-evaluation","slug":"/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","title":"RAG Evaluation","sidebar_label":"RAG Evaluation","sidebar_position":153},"sidebar":"coursesSidebar","previous":{"title":"Advanced RAG Techniques","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques"},"next":{"title":"Production RAG Systems","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation.md


const frontMatter = {
	id: '08-rag-evaluation',
	slug: '/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation',
	title: 'RAG Evaluation',
	sidebar_label: 'RAG Evaluation',
	sidebar_position: 153
};
const contentTitle = 'RAG Evaluation';

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
  "value": "8.1 RAG Evaluation Dimensions",
  "id": "81-rag-evaluation-dimensions",
  "level": 2
}, {
  "value": "Evaluation Taxonomy",
  "id": "evaluation-taxonomy",
  "level": 3
}, {
  "value": "8.2 Retrieval Metrics",
  "id": "82-retrieval-metrics",
  "level": 2
}, {
  "value": "8.2.1 Precision@k and Recall@k",
  "id": "821-precisionk-and-recallk",
  "level": 3
}, {
  "value": "8.2.2 Mean Reciprocal Rank (MRR)",
  "id": "822-mean-reciprocal-rank-mrr",
  "level": 3
}, {
  "value": "8.2.3 Normalized Discounted Cumulative Gain (NDCG)",
  "id": "823-normalized-discounted-cumulative-gain-ndcg",
  "level": 3
}, {
  "value": "8.2.4 Mean Average Precision (mAP)",
  "id": "824-mean-average-precision-map",
  "level": 3
}, {
  "value": "8.2.5 Comprehensive Retrieval Evaluator",
  "id": "825-comprehensive-retrieval-evaluator",
  "level": 3
}, {
  "value": "8.3 Generation Metrics",
  "id": "83-generation-metrics",
  "level": 2
}, {
  "value": "8.3.1 Faithfulness (Hallucination Detection)",
  "id": "831-faithfulness-hallucination-detection",
  "level": 3
}, {
  "value": "8.3.2 Answer Relevance",
  "id": "832-answer-relevance",
  "level": 3
}, {
  "value": "8.3.3 Context Precision and Recall",
  "id": "833-context-precision-and-recall",
  "level": 3
}, {
  "value": "8.4 End-to-End Metrics (RAGAS)",
  "id": "84-end-to-end-metrics-ragas",
  "level": 2
}, {
  "value": "8.4.1 RAGAS Implementation",
  "id": "841-ragas-implementation",
  "level": 3
}, {
  "value": "8.4.2 RAGAS Batch Evaluation",
  "id": "842-ragas-batch-evaluation",
  "level": 3
}, {
  "value": "8.4.3 TruLens-Style Feedback Functions",
  "id": "843-trulens-style-feedback-functions",
  "level": 3
}, {
  "value": "8.5 Evaluation Frameworks",
  "id": "85-evaluation-frameworks",
  "level": 2
}, {
  "value": "8.5.1 Custom Evaluation Pipeline",
  "id": "851-custom-evaluation-pipeline",
  "level": 3
}, {
  "value": "8.5.2 DeepEval Integration (Conceptual)",
  "id": "852-deepeval-integration-conceptual",
  "level": 3
}, {
  "value": "8.5.3 Regression Tracking",
  "id": "853-regression-tracking",
  "level": 3
}, {
  "value": "8.6 A/B Testing",
  "id": "86-ab-testing",
  "level": 2
}, {
  "value": "8.6.1 Experiment Design",
  "id": "861-experiment-design",
  "level": 3
}, {
  "value": "8.6.2 Statistical Significance",
  "id": "862-statistical-significance",
  "level": 3
}, {
  "value": "8.6.3 Rollout Strategy",
  "id": "863-rollout-strategy",
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
        id: "rag-evaluation",
        children: "RAG Evaluation"
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
            children: "Understand RAG-specific evaluation dimensions beyond standard LLM evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retrieval quality metrics — precision, recall, MRR, NDCG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build generation quality metrics — faithfulness, answer relevance, completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design end-to-end RAG evaluation pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply RAGAS, TruLens, and other evaluation frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement A/B testing for RAG configuration changes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
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
      children: "Understanding rag evaluation is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how rag evaluation works in practice."
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Evaluation Dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval quality, generation quality, end-to-end metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision@k, Recall@k, MRR, NDCG, mAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faithfulness, answer relevance, context recall/precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-End Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAGAS (Faithfulness, Answer Relevancy, Context Precision, Context Recall)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAGAS, TruLens, DeepEval, custom pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Experiment design, statistical significance, rollout strategies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[RAG Pipeline] --> B[Retrieval]\n    A --> C[Generation]\n    B --> D[Retrieval Metrics]\n    C --> E[Generation Metrics]\n    D --> F[RAGAS Score]\n    E --> F\n    F --> G[Regression Check]\n    G --> H{Pass?}\n    H -->|Yes| I[Deploy]\n    H -->|No| J[Rollback]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-rag-evaluation-dimensions",
      children: "8.1 RAG Evaluation Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG evaluation requires assessing two subsystems — retrieval and generation — separately and together."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluation-taxonomy",
      children: "Evaluation Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List, Dict, Optional, Callable\nimport numpy as np\n\n@dataclass\nclass RAGEvaluationResult:\n    query: str\n    response: str\n    retrieved_chunks: List[Dict]\n    retrieval_scores: Dict[str, float]\n    generation_scores: Dict[str, float]\n    end_to_end_scores: Dict[str, float]\n\nclass RAGEvaluator:\n    def __init__(self):\n        self.retrieval_metrics: Dict[str, Callable] = {}\n        self.generation_metrics: Dict[str, Callable] = {}\n\n    def register_retrieval_metric(self, name: str, fn: Callable):\n        self.retrieval_metrics[name] = fn\n\n    def register_generation_metric(self, name: str, fn: Callable):\n        self.generation_metrics[name] = fn\n\n    def evaluate_retrieval(self, query: str, retrieved: list, relevant: list) -> Dict:\n        scores = {}\n        for name, fn in self.retrieval_metrics.items():\n            scores[name] = fn(query, retrieved, relevant)\n        return scores\n\n    def evaluate_generation(self, query: str, response: str, context: list) -> Dict:\n        scores = {}\n        for name, fn in self.generation_metrics.items():\n            scores[name] = fn(query, response, context)\n        return scores\n\nevaluator = RAGEvaluator()\nprint(f\"Registered retrieval metrics: {len(evaluator.retrieval_metrics)}\")\nprint(f\"Registered generation metrics: {len(evaluator.generation_metrics)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-retrieval-metrics",
      children: "8.2 Retrieval Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-precisionk-and-recallk",
      children: "8.2.1 Precision@k and Recall@k"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def precision_at_k(retrieved: List[str], relevant: set, k: int) -> float:\n    if k <= 0 or not retrieved:\n        return 0.0\n    top_k = retrieved[:k]\n    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)\n    return relevant_retrieved / min(k, len(top_k))\n\ndef recall_at_k(retrieved: List[str], relevant: set, k: int) -> float:\n    if not relevant:\n        return 0.0\n    top_k = retrieved[:k]\n    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)\n    return relevant_retrieved / len(relevant)\n\nretrieved_docs = [\"doc1\", \"doc2\", \"doc3\", \"doc4\", \"doc5\"]\nrelevant_docs = {\"doc1\", \"doc3\", \"doc6\", \"doc7\"}\n\nprint(f\"Precision@3: {precision_at_k(retrieved_docs, relevant_docs, 3):.3f}\")\nprint(f\"Recall@3: {recall_at_k(retrieved_docs, relevant_docs, 3):.3f}\")\nprint(f\"Precision@5: {precision_at_k(retrieved_docs, relevant_docs, 5):.3f}\")\nprint(f\"Recall@5: {recall_at_k(retrieved_docs, relevant_docs, 5):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-mean-reciprocal-rank-mrr",
      children: "8.2.2 Mean Reciprocal Rank (MRR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reciprocal_rank(retrieved: List[str], relevant: set) -> float:\n    for rank, doc in enumerate(retrieved, 1):\n        if doc in relevant:\n            return 1.0 / rank\n    return 0.0\n\ndef mean_reciprocal_rank(queries_results: List[tuple]) -> float:\n    rr_sum = sum(reciprocal_rank(retrieved, relevant) for retrieved, relevant in queries_results)\n    return rr_sum / len(queries_results) if queries_results else 0.0\n\nresults = [\n    ([\"doc1\", \"doc2\", \"doc3\"], {\"doc1\"}),\n    ([\"doc4\", \"doc5\", \"doc6\"], {\"doc6\"}),\n    ([\"doc7\", \"doc8\", \"doc9\"], {\"doc10\"}),\n]\nprint(f\"MRR: {mean_reciprocal_rank(results):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-normalized-discounted-cumulative-gain-ndcg",
      children: "8.2.3 Normalized Discounted Cumulative Gain (NDCG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dcg(relevances: List[float], k: int) -> float:\n    return sum(\n        (2**rel - 1) / np.log2(idx + 2)\n        for idx, rel in enumerate(relevances[:k])\n    )\n\ndef ndcg_at_k(retrieved: List[str], relevant: Dict[str, float], k: int) -> float:\n    relevances = [relevant.get(doc, 0.0) for doc in retrieved[:k]]\n    ideal = sorted(relevant.values(), reverse=True)[:k]\n\n    actual_dcg = dcg(relevances, k)\n    ideal_dcg = dcg(ideal, k)\n\n    return actual_dcg / ideal_dcg if ideal_dcg > 0 else 0.0\n\nretrieved = [\"doc1\", \"doc2\", \"doc3\", \"doc4\", \"doc5\"]\nrelevance_grades = {\"doc1\": 3.0, \"doc2\": 2.0, \"doc3\": 0.0, \"doc4\": 1.0, \"doc5\": 0.0}\nprint(f\"NDCG@3: {ndcg_at_k(retrieved, relevance_grades, 3):.4f}\")\nprint(f\"NDCG@5: {ndcg_at_k(retrieved, relevance_grades, 5):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-mean-average-precision-map",
      children: "8.2.4 Mean Average Precision (mAP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def average_precision(retrieved: List[str], relevant: set) -> float:\n    precisions = []\n    relevant_count = 0\n    for k, doc in enumerate(retrieved, 1):\n        if doc in relevant:\n            relevant_count += 1\n            precisions.append(relevant_count / k)\n    return sum(precisions) / len(precisions) if precisions else 0.0\n\ndef mean_average_precision(queries_results: List[tuple]) -> float:\n    ap_sum = sum(\n        average_precision(retrieved, relevant)\n        for retrieved, relevant in queries_results\n    )\n    return ap_sum / len(queries_results) if queries_results else 0.0\n\nresults = [\n    ([\"doc1\", \"doc2\", \"doc3\"], {\"doc1\", \"doc3\"}),\n    ([\"doc4\", \"doc5\", \"doc6\"], {\"doc5\", \"doc6\"}),\n]\nprint(f\"mAP: {mean_average_precision(results):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "825-comprehensive-retrieval-evaluator",
      children: "8.2.5 Comprehensive Retrieval Evaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RetrievalEvaluator:\n    def __init__(self, queries: List[str], retrieved_docs: List[List[str]], relevant_docs: List[set]):\n        self.queries = queries\n        self.retrieved = retrieved_docs\n        self.relevant = relevant_docs\n\n    def evaluate_at_k(self, k: int = 10) -> Dict:\n        precisions = []\n        recalls = []\n        ndcgs = []\n\n        for retrieved, relevant in zip(self.retrieved, self.relevant):\n            precisions.append(precision_at_k(retrieved, relevant, k))\n            recalls.append(recall_at_k(retrieved, relevant, k))\n\n            rel_dict = {doc: 1.0 for doc in relevant}\n            ndcgs.append(ndcg_at_k(retrieved, rel_dict, k))\n\n        return {\n            \"k\": k,\n            \"avg_precision\": round(np.mean(precisions), 4),\n            \"avg_recall\": round(np.mean(recalls), 4),\n            \"avg_ndcg\": round(np.mean(ndcgs), 4),\n        }\n\n    def full_report(self) -> Dict:\n        report = {}\n        for k in [1, 3, 5, 10, 20]:\n            report[f\"@{k}\"] = self.evaluate_at_k(k)\n        report[\"mrr\"] = round(mean_reciprocal_rank(\n            list(zip(self.retrieved, [set(r) for r in self.relevant]))\n        ), 4)\n        report[\"map\"] = round(mean_average_precision(\n            list(zip(self.retrieved, [set(r) for r in self.relevant]))\n        ), 4)\n        return report\n\nretrieval_eval = RetrievalEvaluator(\n    queries=[\"q1\", \"q2\"],\n    retrieved_docs=[[\"doc1\", \"doc2\", \"doc3\"], [\"doc4\", \"doc5\"]],\n    relevant_docs=[{\"doc1\", \"doc3\"}, {\"doc5\"}],\n)\nprint(retrieval_eval.full_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-generation-metrics",
      children: "8.3 Generation Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-faithfulness-hallucination-detection",
      children: "8.3.1 Faithfulness (Hallucination Detection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Faithfulness measures whether the generated response is supported by the retrieved context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FaithfulnessScorer:\n    def __init__(self, entailment_model=None):\n        self.model = entailment_model\n\n    def score(self, response: str, context_chunks: List[str]) -> float:\n        response_claims = self._extract_claims(response)\n        if not response_claims:\n            return 1.0\n\n        supported = 0\n        for claim in response_claims:\n            if self._is_supported(claim, context_chunks):\n                supported += 1\n\n        return supported / len(response_claims)\n\n    def _extract_claims(self, text: str) -> List[str]:\n        sentences = text.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\")\n        return [s.strip() for s in sentences if len(s.strip()) > 10]\n\n    def _is_supported(self, claim: str, context: List[str]) -> bool:\n        claim_terms = set(claim.lower().split())\n        for chunk in context:\n            chunk_terms = set(chunk.lower().split())\n            overlap = len(claim_terms & chunk_terms)\n            if overlap / len(claim_terms) >= 0.5:\n                return True\n        return False\n\nfaithfulness = FaithfulnessScorer()\nresponse = \"RAG combines retrieval with generation. It reduces hallucination.\"\ncontext = [\"RAG is Retrieval-Augmented Generation that combines retrieval with generation.\"]\nprint(f\"Faithfulness: {faithfulness.score(response, context):.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-answer-relevance",
      children: "8.3.2 Answer Relevance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer relevance measures how directly the response addresses the query."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AnswerRelevanceScorer:\n    def __init__(self, model_fn=None):\n        self.model_fn = model_fn\n\n    def score(self, query: str, response: str) -> float:\n        query_terms = set(query.lower().split())\n        response_lower = response.lower()\n\n        term_overlap = sum(1 for t in query_terms if t in response_lower)\n        term_relevance = term_overlap / len(query_terms) if query_terms else 0\n\n        length_ratio = min(len(response) / (len(query) * 3), 1.0)\n\n        return 0.7 * term_relevance + 0.3 * length_ratio\n\n    def score_with_llm(self, query: str, response: str, model_fn) -> float:\n        prompt = f\"\"\"Rate how well this response answers the query from 0 to 1.\n\nQuery: {query}\nResponse: {response}\n\nScore (0.0 to 1.0):\"\"\"\n        result = model_fn(prompt)\n        try:\n            return float(result.strip())\n        except ValueError:\n            return 0.5\n\nrelevance = AnswerRelevanceScorer()\nprint(f\"Answer relevance: {relevance.score('What is RAG?', 'RAG is a technique for grounding LLMs.'):.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-context-precision-and-recall",
      children: "8.3.3 Context Precision and Recall"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextPrecisionRecall:\n    def evaluate(self, query: str, retrieved_chunks: List[str], relevant_chunks: set) -> Dict:\n        query_terms = set(query.lower().split())\n\n        precision_numerator = 0\n        for rank, chunk in enumerate(retrieved_chunks, 1):\n            if any(term in chunk.lower() for term in query_terms):\n                precision_numerator += 1 / rank\n\n        precision_denominator = 0\n        for rank in range(1, len(retrieved_chunks) + 1):\n            precision_denominator += 1 / rank\n\n        context_precision = precision_numerator / precision_denominator if precision_denominator > 0 else 0\n\n        retrieved_relevant = sum(1 for c in retrieved_chunks if c in relevant_chunks)\n        context_recall = retrieved_relevant / len(relevant_chunks) if relevant_chunks else 0\n\n        return {\n            \"context_precision\": round(context_precision, 4),\n            \"context_recall\": round(context_recall, 4),\n        }\n\ncpr = ContextPrecisionRecall()\nresult = cpr.evaluate(\n    \"What is RAG?\",\n    [\"RAG is retrieval augmented generation.\", \"Embeddings are vector representations.\"],\n    {\"RAG is retrieval augmented generation.\"},\n)\nprint(f\"Context precision: {result['context_precision']:.3f}, recall: {result['context_recall']:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-end-to-end-metrics-ragas",
      children: "8.4 End-to-End Metrics (RAGAS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAGAS (RAG Assessment) defines four core metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-ragas-implementation",
      children: "8.4.1 RAGAS Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGAS:\n    def __init__(self):\n        self.faithfulness_scorer = FaithfulnessScorer()\n        self.relevance_scorer = AnswerRelevanceScorer()\n\n    def evaluate(self, query: str, response: str, context: List[str], ground_truth: Optional[str] = None) -> Dict:\n        faithfulness = self.faithfulness_scorer.score(response, context)\n        answer_relevancy = self.relevance_scorer.score(query, response)\n\n        context_precision = self._context_precision(query, context)\n        context_recall = self._context_recall(context, ground_truth) if ground_truth else 0.0\n\n        ragas_score = (\n            faithfulness * 0.3 +\n            answer_relevancy * 0.3 +\n            context_precision * 0.2 +\n            context_recall * 0.2\n        )\n\n        return {\n            \"faithfulness\": round(faithfulness, 4),\n            \"answer_relevancy\": round(answer_relevancy, 4),\n            \"context_precision\": round(context_precision, 4),\n            \"context_recall\": round(context_recall, 4),\n            \"ragas_score\": round(ragas_score, 4),\n        }\n\n    def _context_precision(self, query: str, context: List[str]) -> float:\n        if not context:\n            return 0.0\n        query_terms = set(query.lower().split())\n        relevant = sum(1 for c in context if any(t in c.lower() for t in query_terms))\n        return relevant / len(context)\n\n    def _context_recall(self, context: List[str], ground_truth: str) -> float:\n        gt_terms = set(ground_truth.lower().split())\n        if not gt_terms:\n            return 1.0\n        covered = 0\n        for term in gt_terms:\n            if any(term in c.lower() for c in context):\n                covered += 1\n        return covered / len(gt_terms)\n\nragas = RAGAS()\nresult = ragas.evaluate(\n    query=\"What is RAG?\",\n    response=\"RAG is Retrieval-Augmented Generation.\",\n    context=[\"RAG stands for Retrieval-Augmented Generation.\"],\n    ground_truth=\"RAG is Retrieval-Augmented Generation, a technique for grounding LLMs.\",\n)\nprint(f\"RAGAS scores: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-ragas-batch-evaluation",
      children: "8.4.2 RAGAS Batch Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGASBatchEvaluator:\n    def __init__(self):\n        self.ragas = RAGAS()\n\n    def evaluate_pipeline(self, pipeline, test_set: List[Dict]) -> Dict:\n        results = []\n        for item in test_set:\n            query = item[\"query\"]\n            response = pipeline.query(query)\n            context = [c.text for c in item.get(\"retrieved\", [])]\n            ground_truth = item.get(\"ground_truth\")\n\n            scores = self.ragas.evaluate(query, response, context, ground_truth)\n            results.append(scores)\n\n        avg_scores = {}\n        for key in results[0].keys():\n            avg_scores[f\"avg_{key}\"] = round(\n                sum(r[key] for r in results) / len(results), 4\n            )\n\n        return avg_scores\n\ntest_set = [\n    {\"query\": \"What is RAG?\", \"ground_truth\": \"RAG is Retrieval-Augmented Generation.\", \"retrieved\": []},\n    {\"query\": \"How does retrieval work?\", \"ground_truth\": \"Retrieval finds relevant documents.\", \"retrieved\": []},\n]\n\nevaluator = RAGASBatchEvaluator()\nprint(\"RAGAS batch evaluator ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-trulens-style-feedback-functions",
      children: "8.4.3 TruLens-Style Feedback Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FeedbackFunction:\n    def __init__(self, name: str, fn):\n        self.name = name\n        self.fn = fn\n\n    def __call__(self, *args, **kwargs):\n        return self.fn(*args, **kwargs)\n\nclass TruLensStyleEvaluator:\n    def __init__(self):\n        self.feedbacks = []\n\n    def add_feedback(self, name: str, fn):\n        self.feedbacks.append(FeedbackFunction(name, fn))\n\n    def evaluate(self, query: str, response: str, context: List[str]) -> Dict:\n        results = {}\n        for feedback in self.feedbacks:\n            results[feedback.name] = feedback(query, response, context)\n        return results\n\ndef qa_relevance(query, response, context):\n    return 0.85\n\ndef groundedness(query, response, context):\n    return 0.92\n\ntl = TruLensStyleEvaluator()\ntl.add_feedback(\"qa_relevance\", qa_relevance)\ntl.add_feedback(\"groundedness\", groundedness)\nprint(tl.evaluate(\"What is RAG?\", \"RAG is a technique.\", [\"RAG is a technique.\"]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-evaluation-frameworks",
      children: "8.5 Evaluation Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-custom-evaluation-pipeline",
      children: "8.5.1 Custom Evaluation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EvaluationPipeline:\n    def __init__(self, name: str):\n        self.name = name\n        self.metrics = {}\n        self.test_sets = []\n\n    def add_metric(self, name: str, metric_fn: Callable, requires: List[str] = None):\n        self.metrics[name] = {\"fn\": metric_fn, \"requires\": requires or []}\n\n    def add_test_set(self, name: str, data: List[Dict]):\n        self.test_sets.append({\"name\": name, \"data\": data})\n\n    def run(self, rag_pipeline) -> Dict:\n        all_results = {}\n        for test_set in self.test_sets:\n            set_results = {m: [] for m in self.metrics}\n            for item in test_set[\"data\"]:\n                response = rag_pipeline.query(item[\"query\"])\n                for m_name, m_config in self.metrics.items():\n                    kwargs = {\"query\": item[\"query\"], \"response\": response}\n                    if \"context\" in (m_config[\"requires\"] or []):\n                        kwargs[\"context\"] = item.get(\"context\", [])\n                    if \"ground_truth\" in (m_config[\"requires\"] or []):\n                        kwargs[\"ground_truth\"] = item.get(\"ground_truth\", \"\")\n                    score = m_config[\"fn\"](**kwargs)\n                    set_results[m_name].append(score)\n\n            all_results[test_set[\"name\"]] = {\n                m_name: round(sum(scores) / len(scores), 4)\n                for m_name, scores in set_results.items()\n            }\n        return all_results\n\npipeline = EvaluationPipeline(\"rag-eval-v1\")\npipeline.add_metric(\"faithfulness\", lambda query, response: 0.9, [\"query\"])\npipeline.add_test_set(\"test-qa\", [{\"query\": \"What is RAG?\"}])\nprint(\"Custom evaluation pipeline ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-deepeval-integration-conceptual",
      children: "8.5.2 DeepEval Integration (Conceptual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DeepEvalAdapter:\n    def __init__(self):\n        self.test_cases = []\n\n    def add_test_case(self, query: str, expected: str, context: List[str]):\n        self.test_cases.append({\n            \"query\": query,\n            \"expected_output\": expected,\n            \"retrieval_context\": context,\n        })\n\n    def evaluate(self, rag_pipeline) -> Dict:\n        results = {\"faithfulness\": [], \"answer_relevancy\": [], \"hallucination\": []}\n        for tc in self.test_cases:\n            response = rag_pipeline.query(tc[\"query\"])\n            results[\"faithfulness\"].append(self._faithfulness(response, tc[\"retrieval_context\"]))\n            results[\"answer_relevancy\"].append(self._answer_relevancy(tc[\"query\"], response))\n            results[\"hallucination\"].append(self._hallucination(response, tc[\"retrieval_context\"]))\n        return {\n            metric: round(sum(scores) / len(scores), 4)\n            for metric, scores in results.items()\n        }\n\n    def _faithfulness(self, response: str, context: List[str]) -> float:\n        return 0.88\n\n    def _answer_relevancy(self, query: str, response: str) -> float:\n        return 0.92\n\n    def _hallucination(self, response: str, context: List[str]) -> float:\n        return 0.05\n\ndeep_eval = DeepEvalAdapter()\ndeep_eval.add_test_case(\"What is RAG?\", \"RAG is a technique.\", [\"RAG is a technique.\"])\nprint(\"DeepEval-style adapter ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-regression-tracking",
      children: "8.5.3 Regression Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RegressionTracker:\n    def __init__(self):\n        self.history = []\n\n    def record_evaluation(self, version: str, scores: Dict):\n        entry = {\"version\": version, \"scores\": scores, \"timestamp\": \"now\"}\n        self.history.append(entry)\n\n    def check_regression(self, current_scores: Dict, tolerance: float = 0.05) -> List[str]:\n        if len(self.history) < 1:\n            return []\n\n        prev = self.history[-1][\"scores\"]\n        regressions = []\n        for metric, score in current_scores.items():\n            prev_score = prev.get(metric, score)\n            if score < prev_score - tolerance:\n                regressions.append(f\"{metric}: {prev_score:.3f} -> {score:.3f}\")\n        return regressions\n\n    def report(self) -> Dict:\n        if len(self.history) < 2:\n            return {\"status\": \"need_more_data\"}\n        latest = self.history[-1]\n        prev = self.history[-2]\n        changes = {}\n        for metric in latest[\"scores\"]:\n            if metric in prev[\"scores\"]:\n                changes[metric] = round(latest[\"scores\"][metric] - prev[\"scores\"][metric], 4)\n        return {\"changes\": changes}\n\ntracker = RegressionTracker()\ntracker.record_evaluation(\"v1\", {\"faithfulness\": 0.85, \"relevancy\": 0.80})\ntracker.record_evaluation(\"v2\", {\"faithfulness\": 0.82, \"relevancy\": 0.83})\nprint(f\"Regressions: {tracker.check_regression({'faithfulness': 0.82})}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-ab-testing",
      children: "8.6 A/B Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "861-experiment-design",
      children: "8.6.1 Experiment Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGExperiment:\n    def __init__(self, name: str, control_pipeline, treatment_pipeline):\n        self.name = name\n        self.control = control_pipeline\n        self.treatment = treatment_pipeline\n        self.results = []\n\n    def run(self, queries: List[str], ground_truth: Dict[str, str]):\n        control_scores = []\n        treatment_scores = []\n\n        for query in queries:\n            control_response = self.control.query(query)\n            treatment_response = self.treatment.query(query)\n            truth = ground_truth.get(query, \"\")\n\n            control_score = self._score_response(control_response, truth)\n            treatment_score = self._score_response(treatment_response, truth)\n\n            control_scores.append(control_score)\n            treatment_scores.append(treatment_score)\n\n        return {\n            \"control_avg\": round(np.mean(control_scores), 4),\n            \"treatment_avg\": round(np.mean(treatment_scores), 4),\n            \"improvement\": round((np.mean(treatment_scores) - np.mean(control_scores)) / np.mean(control_scores) * 100, 2),\n        }\n\n    def _score_response(self, response: str, truth: str) -> float:\n        response_terms = set(response.lower().split())\n        truth_terms = set(truth.lower().split())\n        if not truth_terms:\n            return 0.5\n        overlap = len(response_terms & truth_terms)\n        return overlap / max(len(response_terms), len(truth_terms))\n\nclass MockRAG:\n    def query(self, q: str) -> str:\n        return f\"Answer: {q}\"\n\nexperiment = RAGExperiment(\"test-v1\", MockRAG(), MockRAG())\nprint(\"A/B experiment configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "862-statistical-significance",
      children: "8.6.2 Statistical Significance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from scipy import stats\n\ndef significance_test(control_scores: List[float], treatment_scores: List[float]) -> Dict:\n    t_stat, p_value = stats.ttest_ind(control_scores, treatment_scores)\n\n    effect_size = (np.mean(treatment_scores) - np.mean(control_scores)) / np.std(control_scores) if np.std(control_scores) > 0 else 0\n\n    return {\n        \"t_statistic\": round(t_stat, 4),\n        \"p_value\": round(p_value, 4),\n        \"effect_size\": round(effect_size, 4),\n        \"significant\": p_value < 0.05,\n        \"mean_control\": round(np.mean(control_scores), 4),\n        \"mean_treatment\": round(np.mean(treatment_scores), 4),\n    }\n\ncontrol = [0.8, 0.85, 0.82, 0.79, 0.83]\ntreatment = [0.88, 0.91, 0.85, 0.89, 0.87]\nprint(significance_test(control, treatment))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "863-rollout-strategy",
      children: "8.6.3 Rollout Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGRolloutManager:\n    def __init__(self, control_pipeline, treatment_pipeline):\n        self.control = control_pipeline\n        self.treatment = treatment_pipeline\n        self.traffic_percentage = 0\n\n    def set_traffic_percentage(self, treatment_percent: int):\n        self.traffic_percentage = min(100, max(0, treatment_percent))\n\n    def route_query(self, query: str, user_id: str) -> str:\n        import hashlib\n        user_hash = int(hashlib.md5(user_id.encode()).hexdigest(), 16) % 100\n        if user_hash < self.traffic_percentage:\n            return self.treatment.query(query)\n        return self.control.query(query)\n\n    def gradual_rollout(self, steps: List[int]):\n        plan = []\n        for step_percent in steps:\n            if step_percent <= 100:\n                plan.append(f\"Set treatment to {step_percent}%\")\n        return plan\n\nrollout = RAGRolloutManager(MockRAG(), MockRAG())\nrollout.set_traffic_percentage(10)\nprint(f\"Treatment at {rollout.traffic_percentage}%\")\nprint(f\"Rollout plan: {rollout.gradual_rollout([10, 25, 50, 100])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG evaluation requires measuring retrieval quality (precision@k, recall@k, MRR, NDCG, mAP), generation quality (faithfulness, answer relevance, context precision/recall), and end-to-end metrics. RAGAS defines a standardized framework with four core metrics: faithfulness,.\nanswer relevancy, context precision, and context recall. Evaluation frameworks like RAGAS, TruLens, and DeepEval provide automated scoring. A/B testing with statistical significance testing enables data-driven decisions about RAG configuration changes. Regression tracking ensures that pipeline modifications do not degrade quality over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Evaluate retrieval separately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval quality directly bounds generation quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use RAGAS as standard metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four metrics capture the key RAG quality dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Track regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always compare against previous evaluation before deploying changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use statistical tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B test with significance testing before full rollout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build golden test sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100 curated queries with ground truth for consistent evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor in production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log queries, chunks, responses for ongoing evaluation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the four core RAGAS metrics and how do they capture RAG quality?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The four RAGAS metrics are: Faithfulness (whether the generated response is factually supported by the retrieved context — detects hallucination), Answer Relevancy (whether the response directly addresses the query — detects off-topic responses),.\nContext Precision (whether the retrieved chunks are relevant to the query — detects noisy retrieval), and Context Recall (whether the retrieved chunks cover all information needed for.\nthe ground truth answer — detects missing context). Faithfulness and context recall are measured against ground truth or an LLM judge,.\nwhile answer relevancy and context precision are query-centric. A composite RAGAS score weights these four metrics (typically 0.3, 0.3, 0.2, 0.2) to produce a single quality indicator."
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
      "data-qid": "rag08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you compute NDCG and why is it preferred over simple precision for retrieval evaluation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NDCG (Normalized Discounted Cumulative Gain) handles graded relevance (not just binary relevant/irrelevant) and discounts the importance of results at lower ranks. It computes: DCG = sum((2^rel_i - 1) / log2(i+1)),.\nthen normalizes by Ideal DCG (perfect ranking). NDCG is preferred over precision because: (1) it supports multi-level relevance (e.g., 3=highly relevant,.\n2=somewhat relevant, 1=barely relevant), (2) it penalizes relevant results appearing at low ranks, and (3) it handles varying numbers of relevant documents. For.\nbinary relevance, NDCG@k is equivalent to average precision at k. Most retrieval benchmarks (BEIR, MS MARCO) report NDCG@10 as the primary metric."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def ndcg_at_k(retrieved, relevance, k):\n    dcg = sum((2**rel - 1) / log2(i+2) for i, rel in enumerate(relevance[:k]))\n    idcg = sum((2**r - 1) / log2(i+2) for i, r in enumerate(sorted(relevance, reverse=True)[:k]))\n    return dcg / idcg if idcg > 0 else 0"
          })
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
      "data-qid": "rag08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you build a golden test set for RAG evaluation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create 50-100 curated query-answer pairs with these fields: query (from real user logs or domain experts), ground_truth_answer (gold standard), relevant_chunks (list of chunk IDs that contain the answer),.\nand context_relevance (which retrieved chunks are relevant). Use stratified sampling to cover different query types (factual, procedural, comparative) and difficulty levels. Annotate with multiple raters and.\nmeasure inter-rater agreement (Cohen's Kappa > 0.7). Store in JSONL format. The test set serves as the definitive quality benchmark — always evaluate against this set before deploying RAG changes. Refresh quarterly to cover new content and.\nedge cases encountered in production."
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
      "data-qid": "rag08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you implement a faithfulness scorer to detect hallucinations in RAG responses?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A FaithfulnessScorer extracts claims (sentences or atomic facts) from the generated response and checks each against the retrieved context. For each claim,.\ncompute whether it is SUPPORTED (present in or entailed by context), NOT_SUPPORTED (absent), or CONTRADICTED (opposite claims in context). The faithfulness score is the proportion of supported claims. Use an LLM-as-judge for.\nthe entailment check with a prompt like:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def score(self, response, context):\n    claims = extract_claims(response)\n    supported = 0\n    for claim in claims:\n        if self.is_supported(claim, context):\n            supported += 1\n    return supported / len(claims) if claims else 1.0"
          })
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This catches both extrinsic hallucination (claims outside context) and intrinsic hallucination (claims contradicting context). State-of-the-art faithfulness scorers achieve 85-95% agreement with human annotations."
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
      "data-qid": "rag08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you set up an A/B test for comparing two RAG configurations?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Define control (current RAG config) and treatment (new chunking strategy, reranker, or model). Run both on the same set of queries (minimum 30 per variant) from a test set or.\nlogged production traffic. Measure faithfulness, answer relevance, and latency for each response. Use a t-test or Mann-Whitney U test to check if differences are statistically significant (p < 0.05). Also measure effect size (Cohen's d) to assess practical significance. If the treatment improves faithfulness by >5% with p < 0.05,.\nconsider rolling out gradually: start with 5% of traffic, monitor for 24 hours, then increase to 25%, 50%, 100% with regression checks at each step."
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
      "data-qid": "rag08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is context recall and how does it differ from answer faithfulness?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Context recall measures whether all information needed to answer the query is present in the retrieved chunks. It is computed against the ground truth answer: for.\neach claim in the ground truth, check if it is covered by any retrieved chunk. Faithfulness measures the reverse — whether claims in the generated response are supported by context. A system can have high faithfulness (response only uses context) but.\nlow context recall (context is missing key information), leading to incomplete answers. Both metrics are needed for a complete picture: recall identifies retrieval gaps,.\nfaithfulness identifies generation issues. In practice, address low recall first (retrieval optimization) before addressing low faithfulness (prompt engineering)."
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
      "data-qid": "rag08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you track evaluation regressions over multiple RAG pipeline versions?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a RegressionTracker that stores evaluation results for each pipeline version (faithfulness, relevance, context precision, context recall, RAGAS score, and average latency). Each entry includes version name,.\ntimestamp, and full metrics. On each new evaluation, compare against the previous version with configurable tolerance (e.g., >5% degradation triggers alert). Store history in a database or.\nfile for trend visualization. Key regression rules: faithfulness drops >5% = BLOCK deployment, latency increases >20% = FLAG for review, RAGAS composite drops >3% = INVESTIGATE. Automate this check in CI/CD — a failing regression check blocks the deployment pipeline."
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
      "data-qid": "rag08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you evaluate RAG when ground truth answers are not available?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Without ground truth, use reference-free evaluation methods. For retrieval quality, user behavior signals like click-through rate, dwell time, and query reformulation rate can indicate whether retrieved results were useful. For.\ngeneration quality, use an LLM-as-judge with a rubric to score faithfulness (does the answer use only context?), relevance (does it address the query?),.\nand helpfulness (would a user find this useful?). Two complementary approaches: (1) sample 20-50 queries weekly for manual review by domain experts,.\n(2) use automated LLM-based scoring with calibrated thresholds (validate against a small annotated set first). RAGAS frameworks support reference-free operation for.\nfaithfulness and answer relevancy by using the LLM as the evaluator."
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
      "data-qid": "rag08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is mean reciprocal rank (MRR) and when would you use it over precision@k?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MRR computes the average reciprocal rank of the first relevant document across all queries. For example, if the first relevant document is at rank 1 for.\nquery A (RR=1.0), rank 3 for query B (RR=0.33), and rank 5 for query C (RR=0.2), then MRR = (1.0 + 0.33 + 0.2)/3 = 0.51. MRR is preferred over precision@k when you care most about whether the user finds.\na relevant result in the first few positions — it is the standard metric for.\nquestion answering and factoid retrieval where only one relevant result is sufficient. Precision@k is better when users need multiple relevant results (e.g.,.\nsearch results page with 10 links). In practice, MRR@10 and precision@5 complement each other in a retrieval evaluation suite."
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
      "data-qid": "rag08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you design an evaluation pipeline that runs on every RAG deployment?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an EvaluationPipeline that: (1) loads a golden test set of 50-100 queries with ground truth answers and relevance annotations, (2) runs the RAG pipeline on each query,.\n(3) computes retrieval metrics (precision@k, recall@k, MRR, NDCG), (4) computes generation metrics (faithfulness, answer relevance via RAGAS), (5) checks for regressions against the previous deployment's scores. Integrate this into CI/CD so every merge triggers a full evaluation run — block.\ndeployment if any metric drops below threshold. Output a structured JSON report comparing current vs previous scores. Store all evaluation runs in a time-series database for.\ndashboard visualization. This catches quality regressions before they reach production users."
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
      "data-qid": "rag-s8-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which RAGAS metric measures whether the response is supported by the context?"]
      }), "\nA. Answer relevancy\nB. Faithfulness\nC. Context precision\nD. Context recall\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s8-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What does MRR measure?"]
      }), "\nA. Average response quality\nB. The reciprocal rank of the first relevant document\nC. N-gram overlap with reference\nD. Response latency\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s8-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which component of RAGAS evaluates whether the retrieved context covers the ground truth?"]
      }), "\nA. Faithfulness\nB. Answer relevancy\nC. Context precision\nD. Context recall\nAnswer: D\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s8-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What p-value threshold is commonly used for statistical significance in A/B tests?"]
      }), "\nA. p < 0.01\nB. p < 0.05\nC. p < 0.10\nD. p < 0.50\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s8-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Why track evaluation regression before deploying RAG changes?"]
      }), "\nA. To reduce API costs\nB. To catch quality degradation before it affects users\nC. To improve embedding speed\nD. To reduce system complexity\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a full RAGAS evaluation on a RAG pipeline using 20 test queries with ground truth. Report faithfulness, answer relevancy, context precision, and context recall scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a retrieval evaluator that computes precision@1, precision@5, recall@5, MRR, and NDCG@10 for a BM25-based retriever. Test on 30 queries with manually annotated relevance judgments."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an A/B test comparing two chunking strategies (fixed-size 500 chars vs semantic chunking). Run on 50 queries, compute statistical significance, and determine the winner."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a regression tracking system that stores evaluation history, detects regressions beyond a 5% threshold, and generates alerts. Simulate 5 pipeline versions with varying scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a custom faithfulness scorer using LLM-as-judge. Compare automatic scoring against human annotations on 20 RAG responses. Report precision and recall of the automati"
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
            children: "Explain the core idea of RAG Evaluation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates RAG Evaluation."
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
            children: "Describe a production bug caused by misunderstanding RAG Evaluation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on RAG Evaluation from 10 users to 10 million?"
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
            children: "Compare RAG Evaluation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on RAG Evaluation."
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
            children: "How does RAG Evaluation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of RAG Evaluation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of RAG Evaluation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name RAG Evaluation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using RAG Evaluation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies RAG Evaluation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside RAG Evaluation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of RAG Evaluation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a RAG Evaluation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic RAG Evaluation interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply RAG Evaluation in production today?"
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
        }), " RAG Evaluation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for RAG Evaluation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for RAG Evaluation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for RAG Evaluation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the RAG Evaluation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers RAG Evaluation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to RAG Evaluation is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing RAG Evaluation is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug RAG Evaluation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to RAG Evaluation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving RAG Evaluation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of RAG Evaluation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain RAG Evaluation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for RAG Evaluation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of RAG Evaluation on an empty input?"
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
            children: "Complete Medium exercises, explain RAG Evaluation to someone else"
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
        children: "Always write a one-line example of RAG Evaluation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered RAG Evaluation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining RAG Evaluation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own RAG Evaluation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of RAG Evaluation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link RAG Evaluation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of RAG Evaluation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain RAG Evaluation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of RAG Evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on RAG Evaluation (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real RAG Evaluation problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements RAG Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for RAG Evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on RAG Evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how RAG Evaluation fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how RAG Evaluation is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where RAG Evaluation is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of RAG Evaluation, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is RAG Evaluation asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG Evaluation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with RAG Evaluation."
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
        children: "RAG Evaluation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for RAG Evaluation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about RAG Evaluation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around RAG Evaluation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing RAG Evaluation."
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
        children: "RAG Evaluation appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding RAG Evaluation helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the RAG Evaluation concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, RAG Evaluation skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply RAG Evaluation to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAG Evaluation is like a recipe"
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
        }), " — this chapter contributes the RAG Evaluation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-08ragevaluation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of RAG Evaluation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-08ragevaluation-flash2",
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
      "data-qid": "12ragvectordatabases-08ragevaluation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard RAG Evaluation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-08ragevaluation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is RAG Evaluation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-08ragevaluation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is RAG Evaluation applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for RAG Evaluation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing RAG Evaluation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for RAG Evaluation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running RAG Evaluation in production at scale"
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
        children: "Testing: pytest for unit tests of RAG Evaluation code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on RAG Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in RAG Evaluation code."]
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
        }), " or your IDE's debugger to step through the RAG Evaluation example code."]
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
        children: "Explain RAG Evaluation in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of RAG Evaluation."
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
        children: "Tell me about a time you debugged a RAG Evaluation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where RAG Evaluation is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for RAG Evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core RAG Evaluation logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain RAG Evaluation without notes"
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
        }), ": a small team uses RAG Evaluation daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": RAG Evaluation patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": RAG Evaluation principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": RAG Evaluation shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect RAG Evaluation to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems",
        children: "Production RAG Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG Evaluation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of RAG Evaluation depends on input size and distribution — always benchmark for your own data."
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