"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[995],{

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
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_08_rag_evaluation_md_afb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/08-rag-evaluation","title":"RAG Evaluation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":165,"frontMatter":{"id":"08-rag-evaluation","slug":"/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation","title":"RAG Evaluation","sidebar_label":"RAG Evaluation","sidebar_position":165},"sidebar":"placementSidebar","previous":{"title":"Advanced RAG Techniques","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/07-advanced-rag-techniques"},"next":{"title":"Production RAG Systems","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems"}}');
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
	sidebar_position: 165
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
      id: "key-terminology",
      children: "Key Terminology"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[RAG Pipeline] --> B[Retrieval]\r\n    A --> C[Generation]\r\n    B --> D[Retrieval Metrics]\r\n    C --> E[Generation Metrics]\r\n    D --> F[RAGAS Score]\r\n    E --> F\r\n    F --> G[Regression Check]\r\n    G --> H{Pass?}\r\n    H -->|Yes| I[Deploy]\r\n    H -->|No| J[Rollback]"
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
        children: "from dataclasses import dataclass\r\nfrom typing import List, Dict, Optional, Callable\r\nimport numpy as np\r\n\r\n@dataclass\r\nclass RAGEvaluationResult:\r\n    query: str\r\n    response: str\r\n    retrieved_chunks: List[Dict]\r\n    retrieval_scores: Dict[str, float]\r\n    generation_scores: Dict[str, float]\r\n    end_to_end_scores: Dict[str, float]\r\n\r\nclass RAGEvaluator:\r\n    def __init__(self):\r\n        self.retrieval_metrics: Dict[str, Callable] = {}\r\n        self.generation_metrics: Dict[str, Callable] = {}\r\n\r\n    def register_retrieval_metric(self, name: str, fn: Callable):\r\n        self.retrieval_metrics[name] = fn\r\n\r\n    def register_generation_metric(self, name: str, fn: Callable):\r\n        self.generation_metrics[name] = fn\r\n\r\n    def evaluate_retrieval(self, query: str, retrieved: list, relevant: list) -> Dict:\r\n        scores = {}\r\n        for name, fn in self.retrieval_metrics.items():\r\n            scores[name] = fn(query, retrieved, relevant)\r\n        return scores\r\n\r\n    def evaluate_generation(self, query: str, response: str, context: list) -> Dict:\r\n        scores = {}\r\n        for name, fn in self.generation_metrics.items():\r\n            scores[name] = fn(query, response, context)\r\n        return scores\r\n\r\nevaluator = RAGEvaluator()\r\nprint(f\"Registered retrieval metrics: {len(evaluator.retrieval_metrics)}\")\r\nprint(f\"Registered generation metrics: {len(evaluator.generation_metrics)}\")\n"
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
        children: "def precision_at_k(retrieved: List[str], relevant: set, k: int) -> float:\r\n    if k <= 0 or not retrieved:\r\n        return 0.0\r\n    top_k = retrieved[:k]\r\n    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)\r\n    return relevant_retrieved / min(k, len(top_k))\r\n\r\ndef recall_at_k(retrieved: List[str], relevant: set, k: int) -> float:\r\n    if not relevant:\r\n        return 0.0\r\n    top_k = retrieved[:k]\r\n    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)\r\n    return relevant_retrieved / len(relevant)\r\n\r\nretrieved_docs = [\"doc1\", \"doc2\", \"doc3\", \"doc4\", \"doc5\"]\r\nrelevant_docs = {\"doc1\", \"doc3\", \"doc6\", \"doc7\"}\r\n\r\nprint(f\"Precision@3: {precision_at_k(retrieved_docs, relevant_docs, 3):.3f}\")\r\nprint(f\"Recall@3: {recall_at_k(retrieved_docs, relevant_docs, 3):.3f}\")\r\nprint(f\"Precision@5: {precision_at_k(retrieved_docs, relevant_docs, 5):.3f}\")\r\nprint(f\"Recall@5: {recall_at_k(retrieved_docs, relevant_docs, 5):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-mean-reciprocal-rank-mrr",
      children: "8.2.2 Mean Reciprocal Rank (MRR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reciprocal_rank(retrieved: List[str], relevant: set) -> float:\r\n    for rank, doc in enumerate(retrieved, 1):\r\n        if doc in relevant:\r\n            return 1.0 / rank\r\n    return 0.0\r\n\r\ndef mean_reciprocal_rank(queries_results: List[tuple]) -> float:\r\n    rr_sum = sum(reciprocal_rank(retrieved, relevant) for retrieved, relevant in queries_results)\r\n    return rr_sum / len(queries_results) if queries_results else 0.0\r\n\r\nresults = [\r\n    ([\"doc1\", \"doc2\", \"doc3\"], {\"doc1\"}),\r\n    ([\"doc4\", \"doc5\", \"doc6\"], {\"doc6\"}),\r\n    ([\"doc7\", \"doc8\", \"doc9\"], {\"doc10\"}),\r\n]\r\nprint(f\"MRR: {mean_reciprocal_rank(results):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-normalized-discounted-cumulative-gain-ndcg",
      children: "8.2.3 Normalized Discounted Cumulative Gain (NDCG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dcg(relevances: List[float], k: int) -> float:\r\n    return sum(\r\n        (2**rel - 1) / np.log2(idx + 2)\r\n        for idx, rel in enumerate(relevances[:k])\r\n    )\r\n\r\ndef ndcg_at_k(retrieved: List[str], relevant: Dict[str, float], k: int) -> float:\r\n    relevances = [relevant.get(doc, 0.0) for doc in retrieved[:k]]\r\n    ideal = sorted(relevant.values(), reverse=True)[:k]\r\n\r\n    actual_dcg = dcg(relevances, k)\r\n    ideal_dcg = dcg(ideal, k)\r\n\r\n    return actual_dcg / ideal_dcg if ideal_dcg > 0 else 0.0\r\n\r\nretrieved = [\"doc1\", \"doc2\", \"doc3\", \"doc4\", \"doc5\"]\r\nrelevance_grades = {\"doc1\": 3.0, \"doc2\": 2.0, \"doc3\": 0.0, \"doc4\": 1.0, \"doc5\": 0.0}\r\nprint(f\"NDCG@3: {ndcg_at_k(retrieved, relevance_grades, 3):.4f}\")\r\nprint(f\"NDCG@5: {ndcg_at_k(retrieved, relevance_grades, 5):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-mean-average-precision-map",
      children: "8.2.4 Mean Average Precision (mAP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def average_precision(retrieved: List[str], relevant: set) -> float:\r\n    precisions = []\r\n    relevant_count = 0\r\n    for k, doc in enumerate(retrieved, 1):\r\n        if doc in relevant:\r\n            relevant_count += 1\r\n            precisions.append(relevant_count / k)\r\n    return sum(precisions) / len(precisions) if precisions else 0.0\r\n\r\ndef mean_average_precision(queries_results: List[tuple]) -> float:\r\n    ap_sum = sum(\r\n        average_precision(retrieved, relevant)\r\n        for retrieved, relevant in queries_results\r\n    )\r\n    return ap_sum / len(queries_results) if queries_results else 0.0\r\n\r\nresults = [\r\n    ([\"doc1\", \"doc2\", \"doc3\"], {\"doc1\", \"doc3\"}),\r\n    ([\"doc4\", \"doc5\", \"doc6\"], {\"doc5\", \"doc6\"}),\r\n]\r\nprint(f\"mAP: {mean_average_precision(results):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "825-comprehensive-retrieval-evaluator",
      children: "8.2.5 Comprehensive Retrieval Evaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RetrievalEvaluator:\r\n    def __init__(self, queries: List[str], retrieved_docs: List[List[str]], relevant_docs: List[set]):\r\n        self.queries = queries\r\n        self.retrieved = retrieved_docs\r\n        self.relevant = relevant_docs\r\n\r\n    def evaluate_at_k(self, k: int = 10) -> Dict:\r\n        precisions = []\r\n        recalls = []\r\n        ndcgs = []\r\n\r\n        for retrieved, relevant in zip(self.retrieved, self.relevant):\r\n            precisions.append(precision_at_k(retrieved, relevant, k))\r\n            recalls.append(recall_at_k(retrieved, relevant, k))\r\n\r\n            rel_dict = {doc: 1.0 for doc in relevant}\r\n            ndcgs.append(ndcg_at_k(retrieved, rel_dict, k))\r\n\r\n        return {\r\n            \"k\": k,\r\n            \"avg_precision\": round(np.mean(precisions), 4),\r\n            \"avg_recall\": round(np.mean(recalls), 4),\r\n            \"avg_ndcg\": round(np.mean(ndcgs), 4),\r\n        }\r\n\r\n    def full_report(self) -> Dict:\r\n        report = {}\r\n        for k in [1, 3, 5, 10, 20]:\r\n            report[f\"@{k}\"] = self.evaluate_at_k(k)\r\n        report[\"mrr\"] = round(mean_reciprocal_rank(\r\n            list(zip(self.retrieved, [set(r) for r in self.relevant]))\r\n        ), 4)\r\n        report[\"map\"] = round(mean_average_precision(\r\n            list(zip(self.retrieved, [set(r) for r in self.relevant]))\r\n        ), 4)\r\n        return report\r\n\r\nretrieval_eval = RetrievalEvaluator(\r\n    queries=[\"q1\", \"q2\"],\r\n    retrieved_docs=[[\"doc1\", \"doc2\", \"doc3\"], [\"doc4\", \"doc5\"]],\r\n    relevant_docs=[{\"doc1\", \"doc3\"}, {\"doc5\"}],\r\n)\r\nprint(retrieval_eval.full_report())\n"
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
        children: "class FaithfulnessScorer:\r\n    def __init__(self, entailment_model=None):\r\n        self.model = entailment_model\r\n\r\n    def score(self, response: str, context_chunks: List[str]) -> float:\r\n        response_claims = self._extract_claims(response)\r\n        if not response_claims:\r\n            return 1.0\r\n\r\n        supported = 0\r\n        for claim in response_claims:\r\n            if self._is_supported(claim, context_chunks):\r\n                supported += 1\r\n\r\n        return supported / len(response_claims)\r\n\r\n    def _extract_claims(self, text: str) -> List[str]:\r\n        sentences = text.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\")\r\n        return [s.strip() for s in sentences if len(s.strip()) > 10]\r\n\r\n    def _is_supported(self, claim: str, context: List[str]) -> bool:\r\n        claim_terms = set(claim.lower().split())\r\n        for chunk in context:\r\n            chunk_terms = set(chunk.lower().split())\r\n            overlap = len(claim_terms & chunk_terms)\r\n            if overlap / len(claim_terms) >= 0.5:\r\n                return True\r\n        return False\r\n\r\nfaithfulness = FaithfulnessScorer()\r\nresponse = \"RAG combines retrieval with generation. It reduces hallucination.\"\r\ncontext = [\"RAG is Retrieval-Augmented Generation that combines retrieval with generation.\"]\r\nprint(f\"Faithfulness: {faithfulness.score(response, context):.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-answer-relevance",
      children: "8.3.2 Answer Relevance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer relevance measures how directly the response addresses the query."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AnswerRelevanceScorer:\r\n    def __init__(self, model_fn=None):\r\n        self.model_fn = model_fn\r\n\r\n    def score(self, query: str, response: str) -> float:\r\n        query_terms = set(query.lower().split())\r\n        response_lower = response.lower()\r\n\r\n        term_overlap = sum(1 for t in query_terms if t in response_lower)\r\n        term_relevance = term_overlap / len(query_terms) if query_terms else 0\r\n\r\n        length_ratio = min(len(response) / (len(query) * 3), 1.0)\r\n\r\n        return 0.7 * term_relevance + 0.3 * length_ratio\r\n\r\n    def score_with_llm(self, query: str, response: str, model_fn) -> float:\r\n        prompt = f\"\"\"Rate how well this response answers the query from 0 to 1.\r\n\r\nQuery: {query}\r\nResponse: {response}\r\n\r\nScore (0.0 to 1.0):\"\"\"\r\n        result = model_fn(prompt)\r\n        try:\r\n            return float(result.strip())\r\n        except ValueError:\r\n            return 0.5\r\n\r\nrelevance = AnswerRelevanceScorer()\r\nprint(f\"Answer relevance: {relevance.score('What is RAG?', 'RAG is a technique for grounding LLMs.'):.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-context-precision-and-recall",
      children: "8.3.3 Context Precision and Recall"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextPrecisionRecall:\r\n    def evaluate(self, query: str, retrieved_chunks: List[str], relevant_chunks: set) -> Dict:\r\n        query_terms = set(query.lower().split())\r\n\r\n        precision_numerator = 0\r\n        for rank, chunk in enumerate(retrieved_chunks, 1):\r\n            if any(term in chunk.lower() for term in query_terms):\r\n                precision_numerator += 1 / rank\r\n\r\n        precision_denominator = 0\r\n        for rank in range(1, len(retrieved_chunks) + 1):\r\n            precision_denominator += 1 / rank\r\n\r\n        context_precision = precision_numerator / precision_denominator if precision_denominator > 0 else 0\r\n\r\n        retrieved_relevant = sum(1 for c in retrieved_chunks if c in relevant_chunks)\r\n        context_recall = retrieved_relevant / len(relevant_chunks) if relevant_chunks else 0\r\n\r\n        return {\r\n            \"context_precision\": round(context_precision, 4),\r\n            \"context_recall\": round(context_recall, 4),\r\n        }\r\n\r\ncpr = ContextPrecisionRecall()\r\nresult = cpr.evaluate(\r\n    \"What is RAG?\",\r\n    [\"RAG is retrieval augmented generation.\", \"Embeddings are vector representations.\"],\r\n    {\"RAG is retrieval augmented generation.\"},\r\n)\r\nprint(f\"Context precision: {result['context_precision']:.3f}, recall: {result['context_recall']:.3f}\")\n"
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
        children: "class RAGAS:\r\n    def __init__(self):\r\n        self.faithfulness_scorer = FaithfulnessScorer()\r\n        self.relevance_scorer = AnswerRelevanceScorer()\r\n\r\n    def evaluate(self, query: str, response: str, context: List[str], ground_truth: Optional[str] = None) -> Dict:\r\n        faithfulness = self.faithfulness_scorer.score(response, context)\r\n        answer_relevancy = self.relevance_scorer.score(query, response)\r\n\r\n        context_precision = self._context_precision(query, context)\r\n        context_recall = self._context_recall(context, ground_truth) if ground_truth else 0.0\r\n\r\n        ragas_score = (\r\n            faithfulness * 0.3 +\r\n            answer_relevancy * 0.3 +\r\n            context_precision * 0.2 +\r\n            context_recall * 0.2\r\n        )\r\n\r\n        return {\r\n            \"faithfulness\": round(faithfulness, 4),\r\n            \"answer_relevancy\": round(answer_relevancy, 4),\r\n            \"context_precision\": round(context_precision, 4),\r\n            \"context_recall\": round(context_recall, 4),\r\n            \"ragas_score\": round(ragas_score, 4),\r\n        }\r\n\r\n    def _context_precision(self, query: str, context: List[str]) -> float:\r\n        if not context:\r\n            return 0.0\r\n        query_terms = set(query.lower().split())\r\n        relevant = sum(1 for c in context if any(t in c.lower() for t in query_terms))\r\n        return relevant / len(context)\r\n\r\n    def _context_recall(self, context: List[str], ground_truth: str) -> float:\r\n        gt_terms = set(ground_truth.lower().split())\r\n        if not gt_terms:\r\n            return 1.0\r\n        covered = 0\r\n        for term in gt_terms:\r\n            if any(term in c.lower() for c in context):\r\n                covered += 1\r\n        return covered / len(gt_terms)\r\n\r\nragas = RAGAS()\r\nresult = ragas.evaluate(\r\n    query=\"What is RAG?\",\r\n    response=\"RAG is Retrieval-Augmented Generation.\",\r\n    context=[\"RAG stands for Retrieval-Augmented Generation.\"],\r\n    ground_truth=\"RAG is Retrieval-Augmented Generation, a technique for grounding LLMs.\",\r\n)\r\nprint(f\"RAGAS scores: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-ragas-batch-evaluation",
      children: "8.4.2 RAGAS Batch Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGASBatchEvaluator:\r\n    def __init__(self):\r\n        self.ragas = RAGAS()\r\n\r\n    def evaluate_pipeline(self, pipeline, test_set: List[Dict]) -> Dict:\r\n        results = []\r\n        for item in test_set:\r\n            query = item[\"query\"]\r\n            response = pipeline.query(query)\r\n            context = [c.text for c in item.get(\"retrieved\", [])]\r\n            ground_truth = item.get(\"ground_truth\")\r\n\r\n            scores = self.ragas.evaluate(query, response, context, ground_truth)\r\n            results.append(scores)\r\n\r\n        avg_scores = {}\r\n        for key in results[0].keys():\r\n            avg_scores[f\"avg_{key}\"] = round(\r\n                sum(r[key] for r in results) / len(results), 4\r\n            )\r\n\r\n        return avg_scores\r\n\r\ntest_set = [\r\n    {\"query\": \"What is RAG?\", \"ground_truth\": \"RAG is Retrieval-Augmented Generation.\", \"retrieved\": []},\r\n    {\"query\": \"How does retrieval work?\", \"ground_truth\": \"Retrieval finds relevant documents.\", \"retrieved\": []},\r\n]\r\n\r\nevaluator = RAGASBatchEvaluator()\r\nprint(\"RAGAS batch evaluator ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-trulens-style-feedback-functions",
      children: "8.4.3 TruLens-Style Feedback Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FeedbackFunction:\r\n    def __init__(self, name: str, fn):\r\n        self.name = name\r\n        self.fn = fn\r\n\r\n    def __call__(self, *args, **kwargs):\r\n        return self.fn(*args, **kwargs)\r\n\r\nclass TruLensStyleEvaluator:\r\n    def __init__(self):\r\n        self.feedbacks = []\r\n\r\n    def add_feedback(self, name: str, fn):\r\n        self.feedbacks.append(FeedbackFunction(name, fn))\r\n\r\n    def evaluate(self, query: str, response: str, context: List[str]) -> Dict:\r\n        results = {}\r\n        for feedback in self.feedbacks:\r\n            results[feedback.name] = feedback(query, response, context)\r\n        return results\r\n\r\ndef qa_relevance(query, response, context):\r\n    return 0.85\r\n\r\ndef groundedness(query, response, context):\r\n    return 0.92\r\n\r\ntl = TruLensStyleEvaluator()\r\ntl.add_feedback(\"qa_relevance\", qa_relevance)\r\ntl.add_feedback(\"groundedness\", groundedness)\r\nprint(tl.evaluate(\"What is RAG?\", \"RAG is a technique.\", [\"RAG is a technique.\"]))\n"
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
        children: "class EvaluationPipeline:\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.metrics = {}\r\n        self.test_sets = []\r\n\r\n    def add_metric(self, name: str, metric_fn: Callable, requires: List[str] = None):\r\n        self.metrics[name] = {\"fn\": metric_fn, \"requires\": requires or []}\r\n\r\n    def add_test_set(self, name: str, data: List[Dict]):\r\n        self.test_sets.append({\"name\": name, \"data\": data})\r\n\r\n    def run(self, rag_pipeline) -> Dict:\r\n        all_results = {}\r\n        for test_set in self.test_sets:\r\n            set_results = {m: [] for m in self.metrics}\r\n            for item in test_set[\"data\"]:\r\n                response = rag_pipeline.query(item[\"query\"])\r\n                for m_name, m_config in self.metrics.items():\r\n                    kwargs = {\"query\": item[\"query\"], \"response\": response}\r\n                    if \"context\" in (m_config[\"requires\"] or []):\r\n                        kwargs[\"context\"] = item.get(\"context\", [])\r\n                    if \"ground_truth\" in (m_config[\"requires\"] or []):\r\n                        kwargs[\"ground_truth\"] = item.get(\"ground_truth\", \"\")\r\n                    score = m_config[\"fn\"](**kwargs)\r\n                    set_results[m_name].append(score)\r\n\r\n            all_results[test_set[\"name\"]] = {\r\n                m_name: round(sum(scores) / len(scores), 4)\r\n                for m_name, scores in set_results.items()\r\n            }\r\n        return all_results\r\n\r\npipeline = EvaluationPipeline(\"rag-eval-v1\")\r\npipeline.add_metric(\"faithfulness\", lambda query, response: 0.9, [\"query\"])\r\npipeline.add_test_set(\"test-qa\", [{\"query\": \"What is RAG?\"}])\r\nprint(\"Custom evaluation pipeline ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-deepeval-integration-conceptual",
      children: "8.5.2 DeepEval Integration (Conceptual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DeepEvalAdapter:\r\n    def __init__(self):\r\n        self.test_cases = []\r\n\r\n    def add_test_case(self, query: str, expected: str, context: List[str]):\r\n        self.test_cases.append({\r\n            \"query\": query,\r\n            \"expected_output\": expected,\r\n            \"retrieval_context\": context,\r\n        })\r\n\r\n    def evaluate(self, rag_pipeline) -> Dict:\r\n        results = {\"faithfulness\": [], \"answer_relevancy\": [], \"hallucination\": []}\r\n        for tc in self.test_cases:\r\n            response = rag_pipeline.query(tc[\"query\"])\r\n            results[\"faithfulness\"].append(self._faithfulness(response, tc[\"retrieval_context\"]))\r\n            results[\"answer_relevancy\"].append(self._answer_relevancy(tc[\"query\"], response))\r\n            results[\"hallucination\"].append(self._hallucination(response, tc[\"retrieval_context\"]))\r\n        return {\r\n            metric: round(sum(scores) / len(scores), 4)\r\n            for metric, scores in results.items()\r\n        }\r\n\r\n    def _faithfulness(self, response: str, context: List[str]) -> float:\r\n        return 0.88\r\n\r\n    def _answer_relevancy(self, query: str, response: str) -> float:\r\n        return 0.92\r\n\r\n    def _hallucination(self, response: str, context: List[str]) -> float:\r\n        return 0.05\r\n\r\ndeep_eval = DeepEvalAdapter()\r\ndeep_eval.add_test_case(\"What is RAG?\", \"RAG is a technique.\", [\"RAG is a technique.\"])\r\nprint(\"DeepEval-style adapter ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-regression-tracking",
      children: "8.5.3 Regression Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RegressionTracker:\r\n    def __init__(self):\r\n        self.history = []\r\n\r\n    def record_evaluation(self, version: str, scores: Dict):\r\n        entry = {\"version\": version, \"scores\": scores, \"timestamp\": \"now\"}\r\n        self.history.append(entry)\r\n\r\n    def check_regression(self, current_scores: Dict, tolerance: float = 0.05) -> List[str]:\r\n        if len(self.history) < 1:\r\n            return []\r\n\r\n        prev = self.history[-1][\"scores\"]\r\n        regressions = []\r\n        for metric, score in current_scores.items():\r\n            prev_score = prev.get(metric, score)\r\n            if score < prev_score - tolerance:\r\n                regressions.append(f\"{metric}: {prev_score:.3f} -> {score:.3f}\")\r\n        return regressions\r\n\r\n    def report(self) -> Dict:\r\n        if len(self.history) < 2:\r\n            return {\"status\": \"need_more_data\"}\r\n        latest = self.history[-1]\r\n        prev = self.history[-2]\r\n        changes = {}\r\n        for metric in latest[\"scores\"]:\r\n            if metric in prev[\"scores\"]:\r\n                changes[metric] = round(latest[\"scores\"][metric] - prev[\"scores\"][metric], 4)\r\n        return {\"changes\": changes}\r\n\r\ntracker = RegressionTracker()\r\ntracker.record_evaluation(\"v1\", {\"faithfulness\": 0.85, \"relevancy\": 0.80})\r\ntracker.record_evaluation(\"v2\", {\"faithfulness\": 0.82, \"relevancy\": 0.83})\r\nprint(f\"Regressions: {tracker.check_regression({'faithfulness': 0.82})}\")\n"
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
        children: "class RAGExperiment:\r\n    def __init__(self, name: str, control_pipeline, treatment_pipeline):\r\n        self.name = name\r\n        self.control = control_pipeline\r\n        self.treatment = treatment_pipeline\r\n        self.results = []\r\n\r\n    def run(self, queries: List[str], ground_truth: Dict[str, str]):\r\n        control_scores = []\r\n        treatment_scores = []\r\n\r\n        for query in queries:\r\n            control_response = self.control.query(query)\r\n            treatment_response = self.treatment.query(query)\r\n            truth = ground_truth.get(query, \"\")\r\n\r\n            control_score = self._score_response(control_response, truth)\r\n            treatment_score = self._score_response(treatment_response, truth)\r\n\r\n            control_scores.append(control_score)\r\n            treatment_scores.append(treatment_score)\r\n\r\n        return {\r\n            \"control_avg\": round(np.mean(control_scores), 4),\r\n            \"treatment_avg\": round(np.mean(treatment_scores), 4),\r\n            \"improvement\": round((np.mean(treatment_scores) - np.mean(control_scores)) / np.mean(control_scores) * 100, 2),\r\n        }\r\n\r\n    def _score_response(self, response: str, truth: str) -> float:\r\n        response_terms = set(response.lower().split())\r\n        truth_terms = set(truth.lower().split())\r\n        if not truth_terms:\r\n            return 0.5\r\n        overlap = len(response_terms & truth_terms)\r\n        return overlap / max(len(response_terms), len(truth_terms))\r\n\r\nclass MockRAG:\r\n    def query(self, q: str) -> str:\r\n        return f\"Answer: {q}\"\r\n\r\nexperiment = RAGExperiment(\"test-v1\", MockRAG(), MockRAG())\r\nprint(\"A/B experiment configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "862-statistical-significance",
      children: "8.6.2 Statistical Significance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from scipy import stats\r\n\r\ndef significance_test(control_scores: List[float], treatment_scores: List[float]) -> Dict:\r\n    t_stat, p_value = stats.ttest_ind(control_scores, treatment_scores)\r\n\r\n    effect_size = (np.mean(treatment_scores) - np.mean(control_scores)) / np.std(control_scores) if np.std(control_scores) > 0 else 0\r\n\r\n    return {\r\n        \"t_statistic\": round(t_stat, 4),\r\n        \"p_value\": round(p_value, 4),\r\n        \"effect_size\": round(effect_size, 4),\r\n        \"significant\": p_value < 0.05,\r\n        \"mean_control\": round(np.mean(control_scores), 4),\r\n        \"mean_treatment\": round(np.mean(treatment_scores), 4),\r\n    }\r\n\r\ncontrol = [0.8, 0.85, 0.82, 0.79, 0.83]\r\ntreatment = [0.88, 0.91, 0.85, 0.89, 0.87]\r\nprint(significance_test(control, treatment))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "863-rollout-strategy",
      children: "8.6.3 Rollout Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGRolloutManager:\r\n    def __init__(self, control_pipeline, treatment_pipeline):\r\n        self.control = control_pipeline\r\n        self.treatment = treatment_pipeline\r\n        self.traffic_percentage = 0\r\n\r\n    def set_traffic_percentage(self, treatment_percent: int):\r\n        self.traffic_percentage = min(100, max(0, treatment_percent))\r\n\r\n    def route_query(self, query: str, user_id: str) -> str:\r\n        import hashlib\r\n        user_hash = int(hashlib.md5(user_id.encode()).hexdigest(), 16) % 100\r\n        if user_hash < self.traffic_percentage:\r\n            return self.treatment.query(query)\r\n        return self.control.query(query)\r\n\r\n    def gradual_rollout(self, steps: List[int]):\r\n        plan = []\r\n        for step_percent in steps:\r\n            if step_percent <= 100:\r\n                plan.append(f\"Set treatment to {step_percent}%\")\r\n        return plan\r\n\r\nrollout = RAGRolloutManager(MockRAG(), MockRAG())\r\nrollout.set_traffic_percentage(10)\r\nprint(f\"Treatment at {rollout.traffic_percentage}%\")\r\nprint(f\"Rollout plan: {rollout.gradual_rollout([10, 25, 50, 100])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG evaluation requires measuring retrieval quality (precision@k, recall@k, MRR, NDCG, mAP), generation quality (faithfulness, answer relevance, context precision/recall), and end-to-end metrics. RAGAS defines a standardized framework with four core metrics: faithfulness,.\r\nanswer relevancy, context precision, and context recall. Evaluation frameworks like RAGAS, TruLens, and DeepEval provide automated scoring. A/B testing with statistical significance testing enables data-driven decisions about RAG configuration changes. Regression tracking ensures that pipeline modifications do not degrade quality over time."
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
        children: "The time complexity of the standard approach to 08 Rag Evaluation is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Rag Evaluation is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
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
        children: "Lewis et al. (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks' — the original RAG paper"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RAGAS framework docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ragas.io",
          children: "https://docs.ragas.io"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangChain RAG tutorial: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://python.langchain.com/docs/tutorials/rag",
          children: "https://python.langchain.com/docs/tutorials/rag"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pinecone learning center: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.pinecone.io/learn",
          children: "https://www.pinecone.io/learn"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 08 Rag Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Rag Evaluation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Rag Evaluation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Rag Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Rag Evaluation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Rag Evaluation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Rag Evaluation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Rag Evaluation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Rag Evaluation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
        children: "Sanitize retrieved content before injecting into prompts — malicious documents can contain prompt injection attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement access control on the vector index — users should only retrieve documents they are authorized to see"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log full retrieved chunks if they contain PII or confidential data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate-limit retrieval endpoints to prevent data exfiltration via repeated queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate chunk metadata (source, date) to prevent poisoned knowledge base attacks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG is essentially a learned retrieval + conditional generation pipeline — the retriever acts as a soft attention over the entire knowledge base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedding quality directly determines retrieval quality: better embeddings (e.g., text-embedding-3-large vs ada-002) improve recall@5 by 10-20%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The LLM generator is conditioned on retrieved context — this is analogous to cross-attention in encoder-decoder transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunk size is a hyperparameter: smaller chunks improve precision, larger chunks improve recall — tune like any ML hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reranking (cross-encoder) is the equivalent of a second-stage classifier that re-scores retrieved candidates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Rag Evaluation is like a GPS navigation system"
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
          }), " — this chapter contributes the RAG Evaluation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
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
          children: "Retrieving too many chunks (k>10) dilutes relevance and exceeds token limits. Always start with k=3-5 and tune based on recall@k on a validation set."
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
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
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
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
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
          children: "Production RAG: LangChain/LlamaIndex for orchestration, Pinecone/Weaviate/Qdrant for vector storage, sentence-transformers for embeddings, RAGAS for evaluation."
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), " — RAG orchestration frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pinecone"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Weaviate"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Qdrant"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Chroma"
        }), " — vector databases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sentence-transformers"
        }), " — open-source embedding models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAGAS"
        }), " — RAG evaluation framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FAISS"
        }), " — Facebook's fast similarity search library Evaluation"]
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
        }), ": Add structured logging at each stage of the 08 Rag Evaluation pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_rag_evaluation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Rag Evaluation.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Rag Evaluation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
          children: "Notion AI"
        }), " uses RAG to answer questions over a user's entire workspace without retraining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Copilot Chat"
        }), " retrieves relevant code snippets from the repo before generating answers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe Docs"
        }), " uses RAG to ground answers in official API documentation, reducing hallucinated API calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Morgan Stanley"
        }), " deployed RAG over 100K+ financial research documents for advisor Q&A"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": describe RAG as 'grounding LLM outputs in evidence' — interviewers want to hear faithfulness and context precision metrics"]
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