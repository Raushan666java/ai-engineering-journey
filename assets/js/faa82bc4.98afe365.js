"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52026],{

/***/ 10378
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_11_query_rewriting_decomposition_md_faa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-11-query-rewriting-decomposition-md-faa.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_11_query_rewriting_decomposition_md_faa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/11-query-rewriting-decomposition","title":"Query Rewriting & Decomposition for RAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":156,"frontMatter":{"id":"11-query-rewriting-decomposition","slug":"/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","title":"Query Rewriting & Decomposition for RAG","sidebar_label":"Query Rewriting & Decomposition for RAG","sidebar_position":156},"sidebar":"placementSidebar","previous":{"title":"Hybrid Search and Reranking","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking"},"next":{"title":"Parent-Child & Multi-Vector Retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition.md


const frontMatter = {
	id: '11-query-rewriting-decomposition',
	slug: '/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition',
	title: 'Query Rewriting & Decomposition for RAG',
	sidebar_label: 'Query Rewriting & Decomposition for RAG',
	sidebar_position: 156
};
const contentTitle = 'Query Rewriting & Decomposition for RAG';

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
  "value": "11.1 Query Rewriting",
  "id": "111-query-rewriting",
  "level": 2
}, {
  "value": "11.1.1 Query Expansion",
  "id": "1111-query-expansion",
  "level": 3
}, {
  "value": "11.1.2 Synonym Expansion with WordNet Backoff",
  "id": "1112-synonym-expansion-with-wordnet-backoff",
  "level": 3
}, {
  "value": "11.1.3 Back-Translation for Paraphrasing",
  "id": "1113-back-translation-for-paraphrasing",
  "level": 3
}, {
  "value": "11.1.4 LLM-Based Query Rewriting",
  "id": "1114-llm-based-query-rewriting",
  "level": 3
}, {
  "value": "11.1.5 Rewriting Pipeline",
  "id": "1115-rewriting-pipeline",
  "level": 3
}, {
  "value": "11.2 Hypothetical Document Embeddings (HyDE)",
  "id": "112-hypothetical-document-embeddings-hyde",
  "level": 2
}, {
  "value": "11.2.1 Basic HyDE",
  "id": "1121-basic-hyde",
  "level": 3
}, {
  "value": "11.2.2 Multi-Style HyDE",
  "id": "1122-multi-style-hyde",
  "level": 3
}, {
  "value": "11.2.3 HyDE with Query Feedback",
  "id": "1123-hyde-with-query-feedback",
  "level": 3
}, {
  "value": "11.3 Multi-Query Retrieval",
  "id": "113-multi-query-retrieval",
  "level": 2
}, {
  "value": "11.3.1 Multi-Query Variant Generator",
  "id": "1131-multi-query-variant-generator",
  "level": 3
}, {
  "value": "11.3.2 Multi-Query Retriever",
  "id": "1132-multi-query-retriever",
  "level": 3
}, {
  "value": "11.3.3 Multi-Query with Deduplication and Filtering",
  "id": "1133-multi-query-with-deduplication-and-filtering",
  "level": 3
}, {
  "value": "11.3.4 Multi-Query with Query Clustering",
  "id": "1134-multi-query-with-query-clustering",
  "level": 3
}, {
  "value": "11.4 Step-Back Prompting",
  "id": "114-step-back-prompting",
  "level": 2
}, {
  "value": "11.4.1 Step-Back Question Generator",
  "id": "1141-step-back-question-generator",
  "level": 3
}, {
  "value": "11.4.2 Step-Back Retriever",
  "id": "1142-step-back-retriever",
  "level": 3
}, {
  "value": "11.4.3 Step-Back with Multi-Level Context",
  "id": "1143-step-back-with-multi-level-context",
  "level": 3
}, {
  "value": "11.5 Query Decomposition",
  "id": "115-query-decomposition",
  "level": 2
}, {
  "value": "11.5.1 Query Decomposer",
  "id": "1151-query-decomposer",
  "level": 3
}, {
  "value": "11.5.2 Hierarchical Retrieval Executor",
  "id": "1152-hierarchical-retrieval-executor",
  "level": 3
}, {
  "value": "11.5.3 Sequential Decomposition (for Dependent Sub-Queries)",
  "id": "1153-sequential-decomposition-for-dependent-sub-queries",
  "level": 3
}, {
  "value": "11.5.4 Comparative Query Decomposition",
  "id": "1154-comparative-query-decomposition",
  "level": 3
}, {
  "value": "11.5.5 Full Decomposition Pipeline",
  "id": "1155-full-decomposition-pipeline",
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
        id: "query-rewriting--decomposition-for-rag",
        children: "Query Rewriting & Decomposition for RAG"
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
            children: "Understand query rewriting techniques: expansion, synonym expansion, back-translation, LLM-based rewriting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Hypothetical Document Embeddings (HyDE) for improved retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build multi-query retrieval systems with N query variants and result merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply step-back prompting for broader context retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design query decomposition pipelines for complex multi-hop queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user's raw query is often poorly phrased, ambiguous, or too complex for direct retrieval. Query rewriting transforms the query into forms that better match relevant documents. Decomposition breaks compound questions into simpler sub-questions. These techniques improve recall by 20-40% in production RAG systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers five query optimization strategies: query rewriting, HyDE, multi-query retrieval, step-back prompting, and query decomposition. Each technique addresses a different failure mode of naive retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with embedding models and vector search (Chapter 12.2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of basic RAG pipeline (Chapter 12.1)"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Query Rewriting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforming a user query into variants that improve retrieval match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query Expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding related terms/synonyms to the original query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HyDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothetical Document Embeddings — generate a fake document, embed it, retrieve similar real ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Query Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating N query variants, retrieving for each, merging results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step-Back Prompting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asking a broader \"step-back\" question to retrieve general context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting a complex query into simpler sub-queries answered independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back-Translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translating query to another language and back to generate paraphrases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding query rewriting and decomposition is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how these techniques work in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The central insight: users express information needs differently than documents express content. Query rewriting bridges this vocabulary gap. Decomposition bridges the complexity gap. Together, they make retrieval robust to both lexical mismatch and compositional complexity."
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
            children: "11.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Rewriting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expansion, synonym, back-translation, LLM rewriting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HyDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothetical document generation for semantic retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Query Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N variants, parallel retrieval, RRF merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-Back Prompting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad context via abstraction questions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-queries, hierarchical execution, result synthesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Raw User Query] --> B{Query Optimizer}\n    B --> C[Query Rewriting]\n    B --> D[HyDE]\n    B --> E[Multi-Query]\n    B --> F[Step-Back]\n    B --> G[Decomposition]\n\n    C --> C1[Expanded Query]\n    D --> D1[Hypothetical Doc]\n    E --> E1[N Query Variants]\n    F --> F1[Step-Back Question]\n    G --> G1[Sub-Queries]\n\n    C1 --> H[Retrieval]\n    D1 --> H\n    E1 --> H\n    F1 --> H\n    G1 --> H\n\n    H --> I[Merge & Rerank]\n    I --> J[Final Context]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-query-rewriting",
      children: "11.1 Query Rewriting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query rewriting transforms a user query into one or more variants that improve retrieval performance. The rewritten queries compensate for vocabulary mismatch, spelling errors, and ambiguous phrasing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-query-expansion",
      children: "11.1.1 Query Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query expansion adds related terms to the original query. This increases the chance of matching relevant documents that use different vocabulary."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict, Optional, Callable\nfrom collections import defaultdict\nimport json\nimport re\n\nclass QueryExpander:\n    \"\"\"Expand queries with synonyms and related terms.\"\"\"\n\n    def __init__(self, synonym_dict: Dict[str, List[str]] = None):\n        self.synonyms = synonym_dict or self._default_synonyms()\n\n    def _default_synonyms(self) -> Dict[str, List[str]]:\n        return {\n            \"ai\": [\"artificial intelligence\", \"machine learning\", \"deep learning\"],\n            \"rag\": [\"retrieval augmented generation\", \"retrieval-augmented generation\"],\n            \"llm\": [\"large language model\", \"language model\", \"foundation model\"],\n            \"embedding\": [\"vector representation\", \"embedding vector\", \"dense vector\"],\n            \"retrieval\": [\"search\", \"fetch\", \"information retrieval\"],\n            \"train\": [\"fine-tune\", \"learn\", \"fit\", \"optimize\"],\n            \"model\": [\"neural network\", \"transformer\", \"architecture\"],\n            \"data\": [\"dataset\", \"corpus\", \"information\", \"knowledge\"],\n            \"fast\": [\"efficient\", \"quick\", \"rapid\", \"high-performance\"],\n            \"accuracy\": [\"precision\", \"recall\", \"f1\", \"performance\"],\n        }\n\n    def expand(self, query: str, top_k: int = 3) -> str:\n        \"\"\"Expand query by appending synonyms for key terms.\"\"\"\n        words = query.lower().split()\n        expanded_terms = set(words)\n\n        for word in words:\n            clean = word.strip(\".,!?;:\")\n            if clean in self.synonyms:\n                expanded_terms.update(self.synonyms[clean][:top_k])\n\n        return \" \".join(expanded_terms)\n\n    def weighted_expansion(self, query: str, original_weight: float = 2.0) -> str:\n        \"\"\"Expansion with term weighting (repeat original terms).\"\"\"\n        expanded = self.expand(query)\n        original_parts = query.split()\n        weighted = \" \".join(original_parts * int(original_weight))\n        return f\"{weighted} {expanded}\"\n\nexpander = QueryExpander()\noriginal = \"How does RAG model train on private data?\"\nexpanded = expander.expand(original)\nprint(f\"Original: {original}\")\nprint(f\"Expanded: {expanded}\")\nprint(f\"Weighted: {expander.weighted_expansion(original)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-synonym-expansion-with-wordnet-backoff",
      children: "11.1.2 Synonym Expansion with WordNet Backoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a dedicated synonym dictionary is unavailable, we can use embedding similarity to find related terms dynamically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EmbeddingSynonymExpander:\n    \"\"\"Expand queries using embedding similarity for synonym discovery.\"\"\"\n\n    def __init__(self, embed_fn: Callable, top_k_synonyms: int = 5):\n        self.embed = embed_fn\n        self.top_k = top_k_synonyms\n        self.vocab_cache = {}\n\n    def get_similar_terms(self, word: str, vocab: List[str]) -> List[str]:\n        \"\"\"Find semantically similar terms from a vocabulary.\"\"\"\n        word_emb = self.embed(word)\n        similarities = []\n        for v in vocab:\n            v_emb = self.embed(v)\n            sim = float(np.dot(word_emb, v_emb))\n            similarities.append((v, sim))\n\n        similarities.sort(key=lambda x: x[1], reverse=True)\n        # Skip the word itself\n        return [v for v, s in similarities[1:self.top_k + 1]]\n\n    def expand(self, query: str, corpus_vocab: List[str]) -> str:\n        \"\"\"Expand query with embedding-similar terms.\"\"\"\n        words = set(query.lower().split())\n        synonyms = set(words)\n\n        for word in words:\n            clean = word.strip(\".,!?;:\")\n            similar = self.get_similar_terms(clean, corpus_vocab)\n            synonyms.update(similar)\n\n        return \" \".join(synonyms)\n\ndef mock_embed(text: str) -> np.ndarray:\n    \"\"\"Mock embedding function for demonstration.\"\"\"\n    rng = np.random.RandomState(hash(text) % (2**31))\n    emb = rng.randn(384)\n    return emb / np.linalg.norm(emb)\n\ncorpus = [\"retrieval\", \"generation\", \"augmented\", \"embedding\",\n          \"transformer\", \"attention\", \"fine-tuning\", \"training\"]\nexpander_emb = EmbeddingSynonymExpander(mock_embed, top_k_synonyms=3)\nresult = expander_emb.expand(\"retrieval model\", corpus)\nprint(f\"Embedding-expanded query: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1113-back-translation-for-paraphrasing",
      children: "11.1.3 Back-Translation for Paraphrasing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Back-translation translates a query to an intermediate language and back to the original. This generates natural paraphrases that improve recall."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BackTranslationRewriter:\n    \"\"\"Rewrite queries by translating through a pivot language.\"\"\"\n\n    def __init__(self, translate_fn: Callable):\n        self.translate = translate_fn\n\n    def rewrite(self, query: str, pivot_lang: str = \"fr\") -> str:\n        \"\"\"Translate query to pivot language and back.\"\"\"\n        forward = self.translate(query, target=pivot_lang)\n        backward = self.translate(forward, target=\"en\")\n        return backward\n\n    def multi_pivot_rewrite(self, query: str,\n                            pivots: List[str] = None) -> List[str]:\n        \"\"\"Generate paraphrases through multiple pivot languages.\"\"\"\n        pivots = pivots or [\"fr\", \"de\", \"es\", \"ja\", \"zh\"]\n        variants = [query]\n\n        for lang in pivots:\n            try:\n                variant = self.rewrite(query, lang)\n                if variant.lower() != query.lower():\n                    variants.append(variant)\n            except Exception:\n                continue\n\n        return variants\n\ndef mock_translate(text: str, target: str) -> str:\n    \"\"\"Mock translation service.\"\"\"\n    translations = {\n        (\"How does RAG work?\", \"fr\"): \"Comment fonctionne le RAG?\",\n        (\"Comment fonctionne le RAG?\", \"en\"): \"How does RAG function?\",\n        (\"How does RAG work?\", \"de\"): \"Wie funktioniert RAG?\",\n        (\"Wie funktioniert RAG?\", \"en\"): \"How does RAG operate?\",\n    }\n    return translations.get((text, target), text)\n\nbacktranslator = BackTranslationRewriter(mock_translate)\nparaphrases = backtranslator.multi_pivot_rewrite(\"How does RAG work?\", [\"fr\", \"de\"])\nprint(\"Back-translation paraphrases:\")\nfor i, p in enumerate(paraphrases):\n    print(f\"  [{i}] {p}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1114-llm-based-query-rewriting",
      children: "11.1.4 LLM-Based Query Rewriting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMs can rewrite queries with context awareness, intent preservation, and style adaptation. This is the most flexible approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMQueryRewriter:\n    \"\"\"Use an LLM to rewrite queries for better retrieval.\"\"\"\n\n    def __init__(self, llm_fn: Callable):\n        self.llm = llm_fn\n\n    def rewrite_for_retrieval(self, query: str) -> str:\n        \"\"\"Rewrite query to be more effective for vector search.\"\"\"\n        prompt = f\"\"\"Rewrite this user query to make it more effective for semantic search retrieval.\n\nGuidelines:\n- Use precise, descriptive language\n- Include key domain terms\n- Expand abbreviations on first use\n- Remove ambiguous pronouns\n- Add context if the query is too brief\n\nOriginal query: {query}\n\nRewritten query (return only the rewritten text):\"\"\"\n        return self.llm(prompt).strip()\n\n    def rewrite_for_web_search(self, query: str) -> str:\n        \"\"\"Rewrite query optimized for web/BM25 search.\"\"\"\n        prompt = f\"\"\"Rewrite this query for keyword-based (BM25) web search.\n\nGuidelines:\n- Use exact terms likely to appear in documents\n- Add alternative phrasings in parentheses\n- Include quoted phrases for exact matching\n\nOriginal query: {query}\n\nRewritten query:\"\"\"\n        return self.llm(prompt).strip()\n\n    def generate_search_terms(self, query: str, num_terms: int = 5) -> List[str]:\n        \"\"\"Generate individual search terms/phrases from the query.\"\"\"\n        prompt = f\"\"\"Extract {num_terms} key search terms or short phrases from this query.\nEach term should be useful for a keyword search.\n\nQuery: {query}\n\nReturn as a comma-separated list:\"\"\"\n        response = self.llm(prompt)\n        return [t.strip() for t in response.split(\",\") if t.strip()]\n\n    def decompose_intent(self, query: str) -> Dict:\n        \"\"\"Analyze query intent and produce directed rewrites.\"\"\"\n        prompt = f\"\"\"Analyze this query and produce:\n1. The core information need (1 sentence)\n2. Key entities mentioned\n3. Suggested search queries (3 variants at different specificity levels)\n\nQuery: {query}\n\nReturn as JSON:\n{{\"intent\": \"...\", \"entities\": [...], \"search_queries\": [...]}}\"\"\"\n        response = self.llm(prompt)\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return {\"intent\": query, \"entities\": [], \"search_queries\": [query]}\n\ndef mock_llm(prompt: str) -> str:\n    \"\"\"Mock LLM for demonstration.\"\"\"\n    if \"rewrite\" in prompt.lower() and \"semantic\" in prompt:\n        return \"What are the mechanisms and applications of Retrieval-Augmented Generation (RAG) in large language models?\"\n    if \"rewrite\" in prompt.lower() and \"keyword\" in prompt.lower():\n        return '\"RAG mechanism\" \"retrieval augmented generation\" LLM knowledge retrieval'\n    if \"search terms\" in prompt.lower():\n        return \"RAG, retrieval-augmented generation, LLM, knowledge retrieval, document search\"\n    if \"intent\" in prompt.lower():\n        return '{\"intent\": \"Understand how RAG works in LLMs\", \"entities\": [\"RAG\", \"LLM\"], \"search_queries\": [\"RAG mechanism explained\", \"How retrieval augmented generation works\", \"RAG in LLM applications\"]}'\n    return query\n\nrewriter = LLMQueryRewriter(mock_llm)\nquery = \"How does RAG work?\"\nprint(f\"Semantic rewrite: {rewriter.rewrite_for_retrieval(query)}\")\nprint(f\"Keyword rewrite: {rewriter.rewrite_for_web_search(query)}\")\nprint(f\"Search terms: {rewriter.generate_search_terms(query)}\")\n\nintent = rewriter.decompose_intent(query)\nprint(f\"Intent: {intent['intent']}\")\nprint(f\"Entities: {intent['entities']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1115-rewriting-pipeline",
      children: "11.1.5 Rewriting Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine multiple rewriting strategies into a configurable pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RewritingPipeline:\n    \"\"\"Composable pipeline of rewriting strategies.\"\"\"\n\n    def __init__(self):\n        self.steps = []\n\n    def add_step(self, name: str, fn: Callable, weight: float = 1.0):\n        \"\"\"Add a rewriting step with optional weight.\"\"\"\n        self.steps.append({\"name\": name, \"fn\": fn, \"weight\": weight})\n\n    def rewrite(self, query: str) -> List[Dict[str, str]]:\n        \"\"\"Execute all rewriting steps and collect variants.\"\"\"\n        variants = [{\"variant\": query, \"method\": \"original\", \"weight\": 1.0}]\n\n        for step in self.steps:\n            try:\n                result = step[\"fn\"](query)\n                if isinstance(result, str):\n                    if result != query:\n                        variants.append({\n                            \"variant\": result,\n                            \"method\": step[\"name\"],\n                            \"weight\": step[\"weight\"],\n                        })\n                elif isinstance(result, list):\n                    for r in result:\n                        if r != query:\n                            variants.append({\n                                \"variant\": r,\n                                \"method\": step[\"name\"],\n                                \"weight\": step[\"weight\"],\n                            })\n            except Exception as e:\n                print(f\"  Step '{step['name']}' failed: {e}\")\n\n        return variants\n\npipeline = RewritingPipeline()\npipeline.add_step(\"expand\", lambda q: expander.expand(q), weight=1.0)\npipeline.add_step(\"backtranslate\", lambda q: backtranslator.multi_pivot_rewrite(q, [\"fr\"]), weight=1.2)\npipeline.add_step(\"llm_rewrite\", lambda q: rewriter.rewrite_for_retrieval(q), weight=1.5)\n\nvariants = pipeline.rewrite(\"How does RAG work?\")\nprint(\"Rewriting pipeline variants:\")\nfor v in variants:\n    print(f\"  [{v['method']}] (w={v['weight']}): {v['variant']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-hypothetical-document-embeddings-hyde",
      children: "11.2 Hypothetical Document Embeddings (HyDE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HyDE generates a hypothetical document that would answer the query, embeds that document, and uses the embedding to retrieve real documents. The key insight: a document that answers the question is more similar to real relevant documents than the question itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Query] --> B[LLM Generates Hypothetical Doc]\n    B --> C[Hypothetical Document]\n    C --> D[Embedder]\n    D --> E[HyDE Embedding]\n    E --> F[Vector Search]\n    F --> G[Real Documents]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1121-basic-hyde",
      children: "11.2.1 Basic HyDE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HyDE:\n    \"\"\"Hypothetical Document Embeddings for improved retrieval.\"\"\"\n\n    def __init__(self, generator_fn: Callable, embedder_fn: Callable,\n                 retriever_fn: Callable):\n        self.generator = generator_fn\n        self.embedder = embedder_fn\n        self.retriever = retriever_fn\n\n    def generate_hypothetical_doc(self, query: str,\n                                  style: str = \"textbook\") -> str:\n        \"\"\"Generate a hypothetical document that answers the query.\"\"\"\n        prompts = {\n            \"textbook\": f\"\"\"Write a detailed textbook paragraph that answers this question.\nUse factual, explanatory style with precise terminology.\n\nQuestion: {query}\n\nTextbook paragraph:\"\"\",\n            \"abstract\": f\"\"\"Write a research paper abstract that addresses this topic.\n\nResearch question: {query}\n\nAbstract:\"\"\",\n            \"summary\": f\"\"\"Write a concise summary that contains the answer to this question.\n\nQuestion: {query}\n\nSummary:\"\"\",\n            \"qa\": f\"\"\"Write a detailed answer to this question as if explaining to a colleague.\n\nQuestion: {query}\n\nDetailed answer:\"\"\",\n        }\n\n        prompt = prompts.get(style, prompts[\"textbook\"])\n        return self.generator(prompt)\n\n    def embed_hypothetical(self, hypothetical_doc: str) -> np.ndarray:\n        \"\"\"Embed the hypothetical document.\"\"\"\n        return self.embedder(hypothetical_doc)\n\n    def retrieve(self, query: str, top_k: int = 5,\n                 style: str = \"textbook\") -> List[Dict]:\n        \"\"\"Full HyDE pipeline: generate, embed, retrieve.\"\"\"\n        hypo_doc = self.generate_hypothetical_doc(query, style)\n        hypo_emb = self.embed_hypothetical(hypo_doc)\n        results = self.retriever(hypo_emb, top_k=top_k)\n\n        return results\n\n    def retrieve_with_original(self, query: str, query_embedder: Callable,\n                                top_k: int = 5,\n                                style: str = \"textbook\",\n                                fusion: str = \"rrf\") -> List[Dict]:\n        \"\"\"Retrieve using both HyDE and original query, then fuse.\"\"\"\n        # HyDE path\n        hypo_doc = self.generate_hypothetical_doc(query, style)\n        hypo_emb = self.embed_hypothetical(hypo_doc)\n        hyde_results = self.retriever(hypo_emb, top_k=top_k * 2)\n\n        # Original query path\n        query_emb = query_embedder(query)\n        query_results = self.retriever(query_emb, top_k=top_k * 2)\n\n        # Fusion\n        if fusion == \"rrf\":\n            return self._rrf_fuse(hyde_results, query_results, top_k)\n        elif fusion == \"interleave\":\n            return self._interleave(hyde_results, query_results, top_k)\n        return hyde_results[:top_k]\n\n    def _rrf_fuse(self, hyde: List[Dict], query: List[Dict],\n                  top_k: int, k_const: int = 60) -> List[Dict]:\n        scores = defaultdict(float)\n        for rank, doc in enumerate(hyde, 1):\n            scores[doc[\"id\"]] += 1.0 / (k_const + rank)\n        for rank, doc in enumerate(query, 1):\n            scores[doc[\"id\"]] += 1.0 / (k_const + rank)\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [{\"id\": doc_id, \"score\": score, \"method\": \"hyde_fused\"}\n                for doc_id, score in sorted_docs[:top_k]]\n\n    def _interleave(self, hyde: List[Dict], query: List[Dict],\n                    top_k: int) -> List[Dict]:\n        \"\"\"Interleave results, alternating between lists.\"\"\"\n        result = []\n        seen = set()\n        max_len = max(len(hyde), len(query))\n\n        for i in range(max_len):\n            if i < len(hyde) and hyde[i][\"id\"] not in seen:\n                result.append(hyde[i])\n                seen.add(hyde[i][\"id\"])\n            if i < len(query) and query[i][\"id\"] not in seen:\n                result.append(query[i])\n                seen.add(query[i][\"id\"])\n            if len(result) >= top_k:\n                break\n\n        return result[:top_k]\n\nclass MockDocumentStore:\n    \"\"\"Mock document store for demonstration.\"\"\"\n\n    def __init__(self):\n        self.docs = [\n            {\"id\": \"doc1\", \"text\": \"RAG combines retrieval with generative models to produce grounded responses.\"},\n            {\"id\": \"doc2\", \"text\": \"Retrieval-Augmented Generation (RAG) is a technique for grounding LLM outputs.\"},\n            {\"id\": \"doc3\", \"text\": \"Vector databases store embeddings for efficient similarity search.\"},\n            {\"id\": \"doc4\", \"text\": \"HyDE generates hypothetical documents to bridge query-document gap.\"},\n            {\"id\": \"doc5\", \"text\": \"Multi-query retrieval generates multiple query variants for better coverage.\"},\n        ]\n\n    def search_by_embedding(self, emb: np.ndarray, top_k: int) -> List[Dict]:\n        \"\"\"Search by embedding similarity.\"\"\"\n        scores = []\n        for doc in self.docs:\n            doc_emb = mock_embed(doc[\"text\"])\n            sim = float(np.dot(emb, doc_emb))\n            scores.append({**doc, \"score\": sim})\n        scores.sort(key=lambda x: x[\"score\"], reverse=True)\n        return scores[:top_k]\n\ndef hyde_generator(prompt: str) -> str:\n    \"\"\"Generate hypothetical document.\"\"\"\n    if \"RAG\" in prompt:\n        return \"Retrieval-Augmented Generation (RAG) is a technique that combines a retrieval system with a generative language model. The retriever finds relevant documents from a knowledge base, and the generator uses those documents to produce grounded, factual responses. RAG reduces hallucinations by providing the LLM with actual source material.\"\n    return \"This is a hypothetical document that would contain information relevant to answering the question.\"\n\nstore = MockDocumentStore()\nhyde = HyDE(\n    generator_fn=hyde_generator,\n    embedder_fn=mock_embed,\n    retriever_fn=lambda emb, top_k: store.search_by_embedding(emb, top_k),\n)\n\nhypo_doc = hyde.generate_hypothetical_doc(\"What is RAG?\")\nprint(f\"Hypothetical document:\\n{hypo_doc}\\n\")\n\nresults = hyde.retrieve(\"What is RAG?\", top_k=3, style=\"textbook\")\nprint(\"HyDE retrieval results:\")\nfor r in results:\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1122-multi-style-hyde",
      children: "11.2.2 Multi-Style HyDE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different document styles capture different aspects of relevance. Multi-style HyDE generates multiple hypothetical documents and averages their embeddings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiStyleHyDE:\n    \"\"\"Generate multiple hypothetical documents in different styles.\"\"\"\n\n    def __init__(self, hyde: HyDE, styles: List[str] = None):\n        self.hyde = hyde\n        self.styles = styles or [\"textbook\", \"abstract\", \"summary\", \"qa\"]\n\n    def retrieve(self, query: str, top_k: int = 5,\n                 fusion: str = \"mean\") -> List[Dict]:\n        \"\"\"Generate multiple hypothetical docs and fuse their retrievals.\"\"\"\n        all_results = []\n\n        for style in self.styles:\n            hypo_doc = self.hyde.generate_hypothetical_doc(query, style)\n            hypo_emb = self.hyde.embed_hypothetical(hypo_doc)\n            results = self.hyde.retriever(hypo_emb, top_k=top_k * 2)\n            all_results.append(results)\n\n        if fusion == \"mean\":\n            return self._mean_fuse(all_results, top_k)\n        elif fusion == \"vote\":\n            return self._vote_fuse(all_results, top_k)\n        return all_results[0][:top_k]\n\n    def _mean_fuse(self, results_list: List[List[Dict]],\n                   top_k: int) -> List[Dict]:\n        \"\"\"Average scores across all HyDE variations.\"\"\"\n        scores = defaultdict(list)\n        for results in results_list:\n            for doc in results:\n                scores[doc[\"id\"]].append(doc[\"score\"])\n\n        averaged = []\n        for doc_id, score_list in scores.items():\n            avg_score = sum(score_list) / len(score_list)\n            averaged.append({\"id\": doc_id, \"score\": avg_score, \"method\": \"multi_hyde_mean\"})\n\n        averaged.sort(key=lambda x: x[\"score\"], reverse=True)\n        return averaged[:top_k]\n\n    def _vote_fuse(self, results_list: List[List[Dict]],\n                   top_k: int) -> List[Dict]:\n        \"\"\"Count how many styles retrieved each document.\"\"\"\n        vote_counts = defaultdict(int)\n        score_sums = defaultdict(float)\n\n        for results in results_list:\n            for rank, doc in enumerate(results):\n                vote_counts[doc[\"id\"]] += 1\n                score_sums[doc[\"id\"]] += doc[\"score\"]\n\n        voted = []\n        for doc_id in vote_counts:\n            voted.append({\n                \"id\": doc_id,\n                \"votes\": vote_counts[doc_id],\n                \"avg_score\": score_sums[doc_id] / vote_counts[doc_id],\n                \"method\": \"multi_hyde_vote\",\n            })\n\n        voted.sort(key=lambda x: (x[\"votes\"], x[\"avg_score\"]), reverse=True)\n        return voted[:top_k]\n\nmulti_hyde = MultiStyleHyDE(hyde, styles=[\"textbook\", \"summary\"])\nresults = multi_hyde.retrieve(\"What is RAG?\", top_k=3, fusion=\"mean\")\nprint(\"Multi-style HyDE results (mean fusion):\")\nfor r in results:\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1123-hyde-with-query-feedback",
      children: "11.2.3 HyDE with Query Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the retrieved documents to refine the hypothetical document iteratively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IterativeHyDE:\n    \"\"\"Iterative HyDE with retrieval feedback.\"\"\"\n\n    def __init__(self, hyde: HyDE, max_iterations: int = 3):\n        self.hyde = hyde\n        self.max_iterations = max_iterations\n\n    def retrieve(self, query: str, top_k: int = 5,\n                 style: str = \"textbook\") -> List[Dict]:\n        \"\"\"Iteratively refine the hypothetical document using retrieved content.\"\"\"\n        current_query = query\n        all_results = []\n        seen_ids = set()\n\n        for iteration in range(self.max_iterations):\n            hypo_doc = self.hyde.generate_hypothetical_doc(current_query, style)\n            hypo_emb = self.hyde.embed_hypothetical(hypo_doc)\n            results = self.hyde.retriever(hypo_emb, top_k=top_k * 2)\n\n            new_results = [r for r in results if r[\"id\"] not in seen_ids]\n            for r in new_results:\n                seen_ids.add(r[\"id\"])\n                all_results.append(r)\n\n            if not new_results:\n                break\n\n            top_text = new_results[0].get(\"text\", \"\")\n            current_query = f\"{query} Based on: {top_text[:100]}\"\n\n        all_results.sort(key=lambda x: x.get(\"score\", 0), reverse=True)\n        return all_results[:top_k]\n\niter_hyde = IterativeHyDE(hyde, max_iterations=2)\nresults = iter_hyde.retrieve(\"What is RAG?\", top_k=3)\nprint(\"Iterative HyDE results:\")\nfor r in results:\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-multi-query-retrieval",
      children: "11.3 Multi-Query Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-query retrieval generates N different variants of the user query, retrieves documents for each variant, and merges the results. This increases recall by covering different phrasings and perspectives."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Original Query] --> B[Query Variant Generator]\n    B --> C[Variant 1]\n    B --> D[Variant 2]\n    B --> E[Variant N]\n    C --> F[Retrieve]\n    D --> G[Retrieve]\n    E --> H[Retrieve]\n    F --> I[RRF Merger]\n    G --> I\n    H --> I\n    I --> J[Deduplicated Results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1131-multi-query-variant-generator",
      children: "11.3.1 Multi-Query Variant Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQueryGenerator:\n    \"\"\"Generate multiple query variants for broader retrieval coverage.\"\"\"\n\n    def __init__(self, llm_fn: Callable, num_queries: int = 5):\n        self.llm = llm_fn\n        self.num_queries = num_queries\n\n    def generate_variants(self, query: str) -> List[str]:\n        \"\"\"Generate diverse query variants using an LLM.\"\"\"\n        prompt = f\"\"\"Generate {self.num_queries} different versions of this search query.\nEach version should:\n- Use different phrasing and synonyms\n- Target different aspects of the information need\n- Vary in specificity (broad to narrow)\n- Be self-contained and searchable\n\nOriginal query: {query}\n\nReturn one query per line, numbered 1 to {self.num_queries}:\"\"\"\n        response = self.llm(prompt)\n        variants = self._parse_variants(response)\n        return variants[:self.num_queries]\n\n    def _parse_variants(self, response: str) -> List[str]:\n        variants = []\n        for line in response.strip().split(\"\\n\"):\n            line = line.strip()\n            line = re.sub(r\"^\\d+[\\.\\)]\\s*\", \"\", line)\n            if line and len(line) > 5:\n                variants.append(line)\n        return variants\n\n    def template_variants(self, query: str, templates: List[str] = None) -> List[str]:\n        \"\"\"Generate variants using predefined templates.\"\"\"\n        templates = templates or [\n            \"What is {query}?\",\n            \"Explain {query} in detail\",\n            \"How does {query} work?\",\n            \"{query} definition and examples\",\n            \"Overview of {query}\",\n            \"{query} applications and use cases\",\n            \"Benefits of {query}\",\n            \"How to implement {query}\",\n        ]\n        return [t.format(query=query) for t in templates]\n\n    def diversity_variants(self, query: str, aspects: List[str] = None) -> List[str]:\n        \"\"\"Generate variants targeting different aspects.\"\"\"\n        aspects = aspects or [\n            \"definition\",\n            \"mechanism\",\n            \"applications\",\n            \"limitations\",\n            \"comparison\",\n        ]\n        variants = []\n        for aspect in aspects:\n            variants.append(f\"{query} {aspect}\")\n        return variants\n\ndef mock_multi_query_llm(prompt: str) -> str:\n    \"\"\"Mock LLM for multi-query generation.\"\"\"\n    return \"\"\"1. What is Retrieval-Augmented Generation and how does it work?\n2. RAG mechanism explained in simple terms\n3. How does RAG combine retrieval with generation?\n4. RAG vs traditional language model approaches\n5. Benefits and limitations of RAG systems\"\"\"\n\nmq_generator = MultiQueryGenerator(mock_multi_query_llm, num_queries=5)\nvariants = mq_generator.generate_variants(\"How does RAG work?\")\nprint(\"Generated query variants:\")\nfor i, v in enumerate(variants, 1):\n    print(f\"  [{i}] {v}\")\n\ntemplate_variants = mq_generator.template_variants(\"RAG\")\nprint(\"\\nTemplate variants:\")\nfor i, v in enumerate(template_variants[:4], 1):\n    print(f\"  [{i}] {v}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1132-multi-query-retriever",
      children: "11.3.2 Multi-Query Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQueryRetriever:\n    \"\"\"Execute retrieval for multiple query variants and merge results.\"\"\"\n\n    def __init__(self, base_retriever_fn: Callable,\n                 merger: str = \"rrf\"):\n        self.retriever = base_retriever_fn\n        self.merger = merger\n\n    def retrieve(self, queries: List[str], top_k: int = 5) -> List[Dict]:\n        \"\"\"Retrieve documents for each query variant and merge.\"\"\"\n        all_results = []\n\n        for q_idx, query in enumerate(queries):\n            results = self.retriever(query, top_k=top_k * 2)\n            for r in results:\n                r[\"query_index\"] = q_idx\n                r[\"source_query\"] = query\n            all_results.append(results)\n\n        if self.merger == \"rrf\":\n            return self._rrf_merge(all_results, top_k)\n        elif self.merger == \"unique\":\n            return self._unique_merge(all_results, top_k)\n        elif self.merger == \"round_robin\":\n            return self._round_robin(all_results, top_k)\n        return all_results[0][:top_k]\n\n    def _rrf_merge(self, results_list: List[List[Dict]],\n                   top_k: int, k_const: int = 60) -> List[Dict]:\n        \"\"\"Reciprocal Rank Fusion across all query variants.\"\"\"\n        scores = defaultdict(float)\n        doc_details = {}\n\n        for results in results_list:\n            for rank, doc in enumerate(results, 1):\n                doc_id = doc[\"id\"]\n                scores[doc_id] += 1.0 / (k_const + rank)\n                if doc_id not in doc_details:\n                    doc_details[doc_id] = doc\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        merged = []\n        for doc_id, score in sorted_docs[:top_k]:\n            detail = dict(doc_details.get(doc_id, {}))\n            detail[\"merged_score\"] = score\n            detail[\"method\"] = \"multi_query_rrf\"\n            merged.append(detail)\n\n        return merged\n\n    def _unique_merge(self, results_list: List[List[Dict]],\n                      top_k: int) -> List[Dict]:\n        \"\"\"Deduplicate and interleave results.\"\"\"\n        seen = set()\n        merged = []\n\n        for results in results_list:\n            for doc in results:\n                if doc[\"id\"] not in seen:\n                    seen.add(doc[\"id\"])\n                    doc[\"method\"] = \"multi_query_unique\"\n                    merged.append(doc)\n                    if len(merged) >= top_k:\n                        return merged\n        return merged\n\n    def _round_robin(self, results_list: List[List[Dict]],\n                     top_k: int) -> List[Dict]:\n        \"\"\"Alternate between query variant result lists.\"\"\"\n        merged = []\n        seen = set()\n        max_len = max(len(r) for r in results_list)\n\n        for position in range(max_len):\n            for results in results_list:\n                if position < len(results):\n                    doc = results[position]\n                    if doc[\"id\"] not in seen:\n                        seen.add(doc[\"id\"])\n                        doc[\"method\"] = \"multi_query_rr\"\n                        merged.append(doc)\n                        if len(merged) >= top_k:\n                            return merged\n        return merged\n\n    def retrieve_with_weights(self, queries: List[float],\n                              weights: List[float],\n                              top_k: int = 5) -> List[Dict]:\n        \"\"\"Retrieve with per-query weights for RRF fusion.\"\"\"\n        all_results = []\n\n        for query, weight in zip(queries, weights):\n            results = self.retriever(query, top_k=top_k * 2)\n            all_results.append((results, weight))\n\n        scores = defaultdict(float)\n        doc_details = {}\n\n        for results, weight in all_results:\n            for rank, doc in enumerate(results, 1):\n                doc_id = doc[\"id\"]\n                scores[doc_id] += weight / (60 + rank)\n                if doc_id not in doc_details:\n                    doc_details[doc_id] = doc\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [dict(doc_details.get(doc_id, {}), merged_score=score)\n                for doc_id, score in sorted_docs[:top_k]]\n\nclass MockMultiQueryRetriever:\n    \"\"\"Mock retriever that returns different results for different queries.\"\"\"\n\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\n        query_hash = hash(query) % 100\n        results = []\n        for i in range(top_k):\n            results.append({\n                \"id\": f\"doc_{(query_hash + i) % 20}\",\n                \"score\": 0.9 - i * 0.08,\n                \"text\": f\"Content related to: {query[:30]}...\",\n            })\n        return results\n\nmq_retriever = MultiQueryRetriever(MockMultiQueryRetriever(), merger=\"rrf\")\nresults = mq_retriever.retrieve(variants, top_k=5)\nprint(\"Multi-query merged results:\")\nfor r in results:\n    print(f\"  {r['id']}: merged_score={r['merged_score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1133-multi-query-with-deduplication-and-filtering",
      children: "11.3.3 Multi-Query with Deduplication and Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdvancedMultiQueryRetriever:\n    \"\"\"Multi-query retriever with dedup, score normalization, and filtering.\"\"\"\n\n    def __init__(self, base_retriever_fn: Callable):\n        self.retriever = base_retriever_fn\n\n    def retrieve(self, queries: List[str], top_k: int = 5,\n                 min_score: float = 0.0,\n                 diversify: bool = False) -> List[Dict]:\n        \"\"\"Retrieve with optional score threshold and diversification.\"\"\"\n        all_docs = {}  # doc_id -> {doc, max_score, source_queries, ranks}\n\n        for q_idx, query in enumerate(queries):\n            results = self.retriever(query, top_k=top_k * 3)\n\n            for rank, doc in enumerate(results, 1):\n                doc_id = doc[\"id\"]\n                if doc_id not in all_docs:\n                    all_docs[doc_id] = {\n                        \"doc\": doc,\n                        \"max_score\": doc[\"score\"],\n                        \"avg_score\": doc[\"score\"],\n                        \"source_queries\": [q_idx],\n                        \"best_rank\": rank,\n                        \"count\": 1,\n                        \"scores\": [doc[\"score\"]],\n                    }\n                else:\n                    entry = all_docs[doc_id]\n                    entry[\"max_score\"] = max(entry[\"max_score\"], doc[\"score\"])\n                    entry[\"scores\"].append(doc[\"score\"])\n                    entry[\"avg_score\"] = sum(entry[\"scores\"]) / len(entry[\"scores\"])\n                    entry[\"source_queries\"].append(q_idx)\n                    entry[\"best_rank\"] = min(entry[\"best_rank\"], rank)\n                    entry[\"count\"] += 1\n\n        results = []\n        for doc_id, entry in all_docs.items():\n            if entry[\"max_score\"] >= min_score:\n                results.append({\n                    \"id\": doc_id,\n                    \"text\": entry[\"doc\"].get(\"text\", \"\"),\n                    \"max_score\": entry[\"max_score\"],\n                    \"avg_score\": entry[\"avg_score\"],\n                    \"num_sources\": entry[\"count\"],\n                    \"best_rank\": entry[\"best_rank\"],\n                    \"source_queries\": entry[\"source_queries\"],\n                })\n\n        # Sort by (num_sources, avg_score) - documents found by more variants rank higher\n        results.sort(key=lambda x: (x[\"num_sources\"], x[\"avg_score\"]), reverse=True)\n\n        if diversify:\n            results = self._diversify(results, top_k)\n\n        return results[:top_k]\n\n    def _diversify(self, results: List[Dict], top_k: int) -> List[Dict]:\n        \"\"\"Maximize result diversity by source coverage.\"\"\"\n        selected = []\n        selected_ids = set()\n        covered_queries = set()\n\n        while len(selected) < top_k and results:\n            best_idx = 0\n            best_new_queries = 0\n\n            for i, r in enumerate(results):\n                if r[\"id\"] in selected_ids:\n                    continue\n                new_queries = len(set(r[\"source_queries\"]) - covered_queries)\n                if new_queries > best_new_queries:\n                    best_new_queries = new_queries\n                    best_idx = i\n\n            candidate = results.pop(best_idx)\n            selected.append(candidate)\n            selected_ids.add(candidate[\"id\"])\n            covered_queries.update(candidate[\"source_queries\"])\n\n        return selected\n\nadv_mq = AdvancedMultiQueryRetriever(MockMultiQueryRetriever())\nresults = adv_mq.retrieve(variants, top_k=5, min_score=0.3, diversify=True)\nprint(\"Advanced multi-query results:\")\nfor r in results:\n    print(f\"  {r['id']}: avg_score={r['avg_score']:.3f}, sources={r['num_sources']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1134-multi-query-with-query-clustering",
      children: "11.3.4 Multi-Query with Query Clustering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For very large numbers of variants (10-20), cluster similar queries to reduce redundant retrievals."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ClusteredMultiQuery:\n    \"\"\"Cluster similar query variants to reduce redundant retrievals.\"\"\"\n\n    def __init__(self, embed_fn: Callable, retriever_fn: Callable,\n                 similarity_threshold: float = 0.85):\n        self.embed = embed_fn\n        self.retriever = retriever_fn\n        self.threshold = similarity_threshold\n\n    def cluster_queries(self, queries: List[str]) -> List[List[str]]:\n        \"\"\"Group similar queries into clusters.\"\"\"\n        clusters = []\n        assigned = set()\n\n        for i, q1 in enumerate(queries):\n            if i in assigned:\n                continue\n            cluster = [q1]\n            assigned.add(i)\n            emb1 = self.embed(q1)\n\n            for j, q2 in enumerate(queries):\n                if j in assigned or i == j:\n                    continue\n                emb2 = self.embed(q2)\n                sim = float(np.dot(emb1, emb2))\n                if sim >= self.threshold:\n                    cluster.append(q2)\n                    assigned.add(j)\n\n            clusters.append(cluster)\n\n        return clusters\n\n    def retrieve(self, queries: List[str], top_k: int = 5) -> List[Dict]:\n        \"\"\"Retrieve using cluster representatives to reduce calls.\"\"\"\n        clusters = self.cluster_queries(queries)\n        all_results = []\n\n        for cluster in clusters:\n            representative = cluster[0]\n            results = self.retriever(representative, top_k=top_k * 2)\n            for r in results:\n                r[\"cluster_size\"] = len(cluster)\n                r[\"cluster_representative\"] = representative\n            all_results.append(results)\n\n        # RRF merge across cluster results\n        return self._cluster_rrf(all_results, top_k)\n\n    def _cluster_rrf(self, results_list: List[List[Dict]],\n                     top_k: int) -> List[Dict]:\n        \"\"\"RRF merge weighted by cluster size.\"\"\"\n        scores = defaultdict(float)\n        doc_details = {}\n\n        for results in results_list:\n            cluster_size = results[0].get(\"cluster_size\", 1) if results else 1\n            weight = np.log1p(cluster_size)\n\n            for rank, doc in enumerate(results, 1):\n                doc_id = doc[\"id\"]\n                scores[doc_id] += weight / (60 + rank)\n                if doc_id not in doc_details:\n                    doc_details[doc_id] = doc\n\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n        return [dict(doc_details.get(doc_id, {}),\n                     merged_score=score,\n                     method=\"clustered_multi_query\")\n                for doc_id, score in sorted_docs[:top_k]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-step-back-prompting",
      children: "11.4 Step-Back Prompting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step-back prompting asks a broader, more abstract question before retrieving. This surfaces general context that helps answer specific queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Specific Query] --> B[Step-Back Generator]\n    B --> C[Abstract/Step-Back Question]\n    C --> D[Retrieve Broad Context]\n    D --> E[General Knowledge]\n    A --> F[Retrieve Specific Context]\n    F --> G[Specific Results]\n    E --> H[Merge Contexts]\n    G --> H\n    H --> I[LLM Generation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1141-step-back-question-generator",
      children: "11.4.1 Step-Back Question Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StepBackGenerator:\n    \"\"\"Generate step-back (abstract) questions from specific queries.\"\"\"\n\n    def __init__(self, llm_fn: Callable):\n        self.llm = llm_fn\n\n    def generate_step_back(self, query: str) -> str:\n        \"\"\"Generate a broader step-back question.\"\"\"\n        prompt = f\"\"\"You are given a specific question. Your task is to ask a broader, more fundamental \"step-back\" question that would help answer the original question.\n\nThe step-back question should:\n- Be more general and abstract\n- Ask about underlying principles or concepts\n- Provide context that the specific question needs\n- Be answerable from general knowledge sources\n\nOriginal question: {query}\n\nStep-back question:\"\"\"\n        return self.llm(prompt).strip()\n\n    def generate_multi_level(self, query: str,\n                             levels: int = 3) -> List[str]:\n        \"\"\"Generate questions at multiple abstraction levels.\"\"\"\n        prompts = {\n            1: f\"What general concept or principle does this question relate to?\\n\\nQuestion: {query}\",\n            2: f\"What underlying mechanisms or frameworks are relevant?\\n\\nQuestion: {query}\",\n            3: f\"What broader field or domain provides context?\\n\\nQuestion: {query}\",\n        }\n\n        step_backs = [query]\n        for level in range(1, levels + 1):\n            prompt = f\"\"\"Generate a step-back question at abstraction level {level}.\n\nLevel {level} definition: {prompts[level]}\n\nOriginal: {query}\n\nStep-back question:\"\"\"\n            sb = self.llm(prompt).strip()\n            if sb and sb != query:\n                step_backs.append(sb)\n\n        return step_backs\n\ndef mock_stepback_llm(prompt: str) -> str:\n    \"\"\"Mock LLM for step-back generation.\"\"\"\n    if \"step-back question\" in prompt.lower():\n        return \"What is Retrieval-Augmented Generation and what problem does it solve in AI?\"\n    if \"abstraction level\" in prompt.lower():\n        if \"Level 1\" in prompt:\n            return \"What is the concept of grounding AI responses in external knowledge?\"\n        elif \"Level 2\" in prompt:\n            return \"How do hybrid AI systems combine retrieval and generation?\"\n        else:\n            return \"What are the fundamental approaches to reducing AI hallucinations?\"\n    return \"What is the broader context of this topic?\"\n\nstepback_gen = StepBackGenerator(mock_stepback_llm)\nquery = \"How does the RAG retriever find relevant documents?\"\nstepback_q = stepback_gen.generate_step_back(query)\nprint(f\"Original: {query}\")\nprint(f\"Step-back: {stepback_q}\")\n\nmulti_level = stepback_gen.generate_multi_level(query, levels=3)\nprint(\"\\nMulti-level step-back:\")\nfor i, q in enumerate(multi_level):\n    print(f\"  Level {i}: {q}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1142-step-back-retriever",
      children: "11.4.2 Step-Back Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StepBackRetriever:\n    \"\"\"Retrieve using both the original query and step-back question.\"\"\"\n\n    def __init__(self, base_retriever_fn: Callable,\n                 stepback_gen: StepBackGenerator):\n        self.retriever = base_retriever_fn\n        self.stepback_gen = stepback_gen\n\n    def retrieve(self, query: str, top_k: int = 5,\n                 stepback_top_k: int = 3,\n                 ratio: float = 0.5) -> List[Dict]:\n        \"\"\"Retrieve from both specific and step-back queries.\"\"\"\n        stepback = self.stepback_gen.generate_step_back(query)\n\n        specific_results = self.retriever(query, top_k=top_k)\n        broad_results = self.retriever(stepback, top_k=stepback_top_k)\n\n        # Merge with deduplication\n        seen = set()\n        merged = []\n\n        # Interleave: specific and broad\n        specific_ratio = int(top_k * ratio)\n        broad_ratio = top_k - specific_ratio\n\n        for doc in specific_results[:specific_ratio]:\n            if doc[\"id\"] not in seen:\n                seen.add(doc[\"id\"])\n                doc[\"source\"] = \"specific\"\n                merged.append(doc)\n\n        for doc in broad_results[:broad_ratio]:\n            if doc[\"id\"] not in seen:\n                seen.add(doc[\"id\"])\n                doc[\"source\"] = \"step_back\"\n                merged.append(doc)\n\n        # Fill remaining slots\n        for doc in specific_results[specific_ratio:]:\n            if doc[\"id\"] not in seen and len(merged) < top_k:\n                seen.add(doc[\"id\"])\n                doc[\"source\"] = \"specific\"\n                merged.append(doc)\n\n        return merged\n\n    def retrieve_with_context(self, query: str, top_k: int = 5) -> Dict:\n        \"\"\"Return both the retrieved docs and the step-back question used.\"\"\"\n        stepback = self.stepback_gen.generate_step_back(query)\n        results = self.retrieve(query, top_k=top_k)\n\n        return {\n            \"original_query\": query,\n            \"step_back_question\": stepback,\n            \"results\": results,\n            \"num_specific\": sum(1 for r in results if r.get(\"source\") == \"specific\"),\n            \"num_broad\": sum(1 for r in results if r.get(\"source\") == \"step_back\"),\n        }\n\nclass MockStepBackRetriever:\n    \"\"\"Mock retriever that returns different docs for different queries.\"\"\"\n\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\n        if \"retrieval-augmented\" in query.lower() or \"grounding\" in query.lower():\n            return [\n                {\"id\": \"broad1\", \"score\": 0.95, \"text\": \"RAG grounds LLM responses in external knowledge sources.\"},\n                {\"id\": \"broad2\", \"score\": 0.90, \"text\": \"External knowledge grounding reduces hallucinations in AI systems.\"},\n                {\"id\": \"broad3\", \"score\": 0.85, \"text\": \"Retrieval-based approaches provide factual grounding for generative models.\"},\n            ][:top_k]\n        return [\n            {\"id\": \"spec1\", \"score\": 0.92, \"text\": \"The RAG retriever uses embedding similarity to find relevant documents.\"},\n            {\"id\": \"spec2\", \"score\": 0.88, \"text\": \"Vector databases enable efficient semantic search in RAG retrieval.\"},\n            {\"id\": \"spec3\", \"score\": 0.82, \"text\": \"BM25 and dense retrievers are commonly used in RAG pipelines.\"},\n        ][:top_k]\n\nsb_retriever = StepBackRetriever(\n    MockStepBackRetriever(),\n    stepback_gen,\n)\nresults = sb_retriever.retrieve(query, top_k=4, ratio=0.5)\nprint(\"Step-back retrieval results:\")\nfor r in results:\n    print(f\"  {r['id']} (source={r.get('source')}): {r['text'][:60]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1143-step-back-with-multi-level-context",
      children: "11.4.3 Step-Back with Multi-Level Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiLevelStepBack:\n    \"\"\"Retrieve context at multiple abstraction levels.\"\"\"\n\n    def __init__(self, base_retriever_fn: Callable,\n                 stepback_gen: StepBackGenerator,\n                 levels: int = 3):\n        self.retriever = base_retriever_fn\n        self.stepback_gen = stepback_gen\n        self.levels = levels\n\n    def retrieve(self, query: str, top_k: int = 5) -> Dict:\n        \"\"\"Retrieve context at each abstraction level and merge.\"\"\"\n        questions = self.stepback_gen.generate_multi_level(query, self.levels)\n        level_results = {}\n\n        for level, q in enumerate(questions):\n            results = self.retriever(q, top_k=max(2, top_k // len(questions)))\n            level_results[level] = {\n                \"question\": q,\n                \"results\": results,\n            }\n\n        # Merge with deduplication, preference for lower levels\n        seen = set()\n        merged = []\n        max_per_level = top_k // len(questions) + 1\n\n        for level in range(len(questions)):\n            results = level_results[level][\"results\"]\n            for doc in results[:max_per_level]:\n                if doc[\"id\"] not in seen:\n                    seen.add(doc[\"id\"])\n                    doc[\"abstraction_level\"] = level\n                    doc[\"source_question\"] = level_results[level][\"question\"]\n                    merged.append(doc)\n\n        return {\n            \"query\": query,\n            \"levels\": [\n                {\"level\": l, \"question\": level_results[l][\"question\"],\n                 \"num_results\": len(level_results[l][\"results\"])}\n                for l in range(len(questions))\n            ],\n            \"results\": merged[:top_k],\n        }\n\nmlsb = MultiLevelStepBack(MockStepBackRetriever(), stepback_gen, levels=3)\ncontext = mlsb.retrieve(\"How does RAG retrieval work?\", top_k=4)\nprint(\"Multi-level step-back context:\")\nfor level in context[\"levels\"]:\n    print(f\"  Level {level['level']}: {level['question'][:50]}...\")\nprint(\"Results:\")\nfor r in context[\"results\"]:\n    print(f\"  [{r['abstraction_level']}] {r['id']}: {r['text'][:50]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-query-decomposition",
      children: "11.5 Query Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query decomposition breaks a complex query into simpler sub-queries that can be answered independently. Results are then synthesized into a final answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Complex Query] --> B[Decomposer]\n    B --> C[Sub-Query 1]\n    B --> D[Sub-Query 2]\n    B --> E[Sub-Query N]\n    C --> F[Retrieve & Answer 1]\n    D --> G[Retrieve & Answer 2]\n    E --> H[Retrieve & Answer N]\n    F --> I[Result Synthesizer]\n    G --> I\n    H --> I\n    I --> J[Final Answer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1151-query-decomposer",
      children: "11.5.1 Query Decomposer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryDecomposer:\n    \"\"\"Decompose complex queries into simpler sub-queries.\"\"\"\n\n    def __init__(self, llm_fn: Callable):\n        self.llm = llm_fn\n\n    def decompose(self, query: str, max_sub_queries: int = 5) -> List[str]:\n        \"\"\"Break a complex query into independent sub-queries.\"\"\"\n        prompt = f\"\"\"Decompose this complex question into simpler, independent sub-questions.\nEach sub-question should:\n- Be self-contained and answerable independently\n- Cover one aspect or subtopic\n- Be suitable for standalone document retrieval\n\nComplex question: {query}\n\nReturn {max_sub_queries} sub-questions as a numbered list. Fewer is fine if the question is simple:\"\"\"\n        response = self.llm(prompt)\n        return self._parse_sub_queries(response)[:max_sub_queries]\n\n    def _parse_sub_queries(self, response: str) -> List[str]:\n        sub_queries = []\n        for line in response.strip().split(\"\\n\"):\n            line = line.strip()\n            line = re.sub(r\"^\\d+[\\.\\)]\\s*\", \"\", line)\n            if line and line.endswith(\"?\") and len(line) > 10:\n                sub_queries.append(line)\n        return sub_queries\n\n    def hierarchical_decompose(self, query: str,\n                               max_depth: int = 2) -> Dict:\n        \"\"\"Recursively decompose into a hierarchy of sub-queries.\"\"\"\n        structure = {\n            \"question\": query,\n            \"sub_questions\": [],\n            \"depth\": 0,\n        }\n\n        if max_depth <= 0:\n            return structure\n\n        sub_queries = self.decompose(query, max_sub_queries=3)\n\n        for sq in sub_queries:\n            child = self.hierarchical_decompose(sq, max_depth - 1)\n            structure[\"sub_questions\"].append(child)\n\n        return structure\n\n    def dependency_graph(self, query: str) -> Dict[str, List[str]]:\n        \"\"\"Identify dependencies between sub-queries.\"\"\"\n        sub_queries = self.decompose(query, max_sub_queries=4)\n        dependencies = {sq: [] for sq in sub_queries}\n\n        for i, sq_a in enumerate(sub_queries):\n            for j, sq_b in enumerate(sub_queries):\n                if i != j:\n                    prompt = f\"\"\"Does answering this question require the answer to the second question?\n\nFirst question: {sq_a}\nSecond question: {sq_b}\n\nAnswer only YES or NO:\"\"\"\n                    response = self.llm(prompt).strip().upper()\n                    if \"YES\" in response:\n                        dependencies[sq_a].append(sq_b)\n\n        return dependencies\n\ndef mock_decompose_llm(prompt: str) -> str:\n    \"\"\"Mock LLM for query decomposition.\"\"\"\n    if \"decompose\" in prompt.lower():\n        return \"\"\"1. What is the retriever component in RAG?\n2. How do vector databases store embeddings for retrieval?\n3. What are the different retrieval strategies used in RAG?\n4. How does the retrieval quality affect RAG output?\"\"\"\n    if \"YES or NO\" in prompt:\n        return \"NO\"\n    return \"What is retrieval in AI systems?\"\n\ndecomposer = QueryDecomposer(mock_decompose_llm)\ncomplex_query = \"How does the RAG retriever work and what embedding models does it use?\"\nsub_queries = decomposer.decompose(complex_query, max_sub_queries=4)\nprint(f\"Complex query: {complex_query}\")\nprint(\"Decomposed sub-queries:\")\nfor i, sq in enumerate(sub_queries, 1):\n    print(f\"  [{i}] {sq}\")\n\ndep_graph = decomposer.dependency_graph(complex_query)\nprint(\"\\nDependency graph:\")\nfor sq, deps in dep_graph.items():\n    print(f\"  {sq[:40]}... depends on: {[d[:30] for d in deps] if deps else 'nothing'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1152-hierarchical-retrieval-executor",
      children: "11.5.2 Hierarchical Retrieval Executor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HierarchicalRetrievalExecutor:\n    \"\"\"Execute retrieval for each sub-query and synthesize results.\"\"\"\n\n    def __init__(self, retriever_fn: Callable, generator_fn: Callable):\n        self.retriever = retriever_fn\n        self.generator = generator_fn\n\n    def execute(self, query: str, sub_queries: List[str],\n                top_k_per_query: int = 3) -> Dict:\n        \"\"\"Execute retrieval for each sub-query and collect results.\"\"\"\n        sub_results = {}\n\n        for sq in sub_queries:\n            results = self.retriever(sq, top_k=top_k_per_query)\n            sub_results[sq] = results\n\n        # Merge all unique documents\n        all_docs = {}\n        for sq, results in sub_results.items():\n            for doc in results:\n                if doc[\"id\"] not in all_docs:\n                    all_docs[doc[\"id\"]] = {\n                        **doc,\n                        \"matched_queries\": [sq],\n                        \"num_matches\": 1,\n                    }\n                else:\n                    all_docs[doc[\"id\"]][\"num_matches\"] += 1\n                    all_docs[doc[\"id\"]][\"matched_queries\"].append(sq)\n\n        ranked = sorted(all_docs.values(),\n                        key=lambda x: (x[\"num_matches\"], x.get(\"score\", 0)),\n                        reverse=True)\n\n        return {\n            \"query\": query,\n            \"sub_queries\": sub_queries,\n            \"sub_results\": {sq: [r[\"id\"] for r in results]\n                           for sq, results in sub_results.items()},\n            \"merged_docs\": ranked,\n            \"num_unique_docs\": len(ranked),\n        }\n\n    def execute_with_synthesis(self, query: str, sub_queries: List[str],\n                               top_k_per_query: int = 3) -> str:\n        \"\"\"Execute retrieval and synthesize a final answer.\"\"\"\n        result = self.execute(query, sub_queries, top_k_per_query)\n\n        docs_for_context = result[\"merged_docs\"][:5]\n        context_text = \"\\n\\n\".join([\n            f\"Document {i+1}: {d.get('text', '')}\"\n            for i, d in enumerate(docs_for_context)\n        ])\n\n        synthesis_prompt = f\"\"\"You have retrieved documents to answer sub-questions of a complex query.\n\nOriginal query: {query}\n\nSub-questions:\n{chr(10).join(f'- {sq}' for sq in sub_queries)}\n\nRetrieved context:\n{context_text}\n\nSynthesize a comprehensive answer to the original query based on the retrieved documents:\"\"\"\n        answer = self.generator(synthesis_prompt)\n\n        return answer\n\nclass MockDecompositionRetriever:\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\n        hash_val = hash(query) % 100\n        return [\n            {\"id\": f\"d_{hash_val % 10}\", \"score\": 0.9, \"text\": f\"Content about: {query[:40]}\"},\n            {\"id\": f\"d_{(hash_val+1) % 10}\", \"score\": 0.8, \"text\": f\"Related content for: {query[:40]}\"},\n        ][:top_k]\n\ndef mock_generator(prompt: str) -> str:\n    return \"Based on the retrieved documents, the RAG retriever uses embedding similarity search in vector databases to find relevant documents.\"\n\nexecutor = HierarchicalRetrievalExecutor(\n    MockDecompositionRetriever(),\n    mock_generator,\n)\nresult = executor.execute(complex_query, sub_queries, top_k_per_query=2)\nprint(f\"Sub-query results:\")\nfor sq, doc_ids in result[\"sub_results\"].items():\n    print(f\"  {sq[:40]}... -> {doc_ids}\")\nprint(f\"\\nUnique documents found: {result['num_unique_docs']}\")\n\nanswer = executor.execute_with_synthesis(complex_query, sub_queries)\nprint(f\"\\nSynthesized answer: {answer}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1153-sequential-decomposition-for-dependent-sub-queries",
      children: "11.5.3 Sequential Decomposition (for Dependent Sub-Queries)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SequentialDecompositionExecutor:\n    \"\"\"Execute sub-queries sequentially when they have dependencies.\"\"\"\n\n    def __init__(self, retriever_fn: Callable, generator_fn: Callable):\n        self.retriever = retriever_fn\n        self.generator = generator_fn\n\n    def execute_sequential(self, query: str,\n                           sub_queries: List[str],\n                           dependency_order: List[int]) -> Dict:\n        \"\"\"Execute sub-queries in dependency order, passing context forward.\"\"\"\n        accumulated_context = []\n        intermediate_answers = []\n\n        for idx in dependency_order:\n            sq = sub_queries[idx]\n            enriched_query = sq\n\n            if accumulated_context:\n                context_summary = \" \".join(accumulated_context[-3:])\n                enriched_query = f\"{sq}\\nPrevious context: {context_summary[:200]}\"\n\n            results = self.retriever(enriched_query, top_k=2)\n            doc_texts = [r.get(\"text\", \"\") for r in results]\n            accumulated_context.extend(doc_texts)\n\n            answer_prompt = f\"\"\"Context: {' '.join(doc_texts)}\n\nQuestion: {sq}\n\nAnswer briefly:\"\"\"\n            answer = self.generator(answer_prompt)\n            intermediate_answers.append({\n                \"sub_query\": sq,\n                \"documents\": [r[\"id\"] for r in results],\n                \"answer\": answer,\n            })\n\n        final_context = \"\\n\\n\".join(accumulated_context)\n        final_prompt = f\"\"\"Based on all the gathered information:\n\n{final_context}\n\nOriginal question: {query}\n\nSynthesize a complete answer:\"\"\"\n        final_answer = self.generator(final_prompt)\n\n        return {\n            \"query\": query,\n            \"execution_order\": dependency_order,\n            \"intermediate\": intermediate_answers,\n            \"final_answer\": final_answer,\n        }\n\nseq_executor = SequentialDecompositionExecutor(\n    MockDecompositionRetriever(),\n    mock_generator,\n)\nseq_result = seq_executor.execute_sequential(\n    complex_query,\n    sub_queries,\n    dependency_order=[0, 1, 2, 3],\n)\nprint(\"Sequential decomposition complete.\")\nfor step in seq_result[\"intermediate\"]:\n    print(f\"  {step['sub_query'][:35]}... -> {step['answer'][:40]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1154-comparative-query-decomposition",
      children: "11.5.4 Comparative Query Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For comparison questions (\"Compare X and Y\"), decomposition naturally splits into \"explain X\", \"explain Y\", and \"compare\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ComparativeDecomposition:\n    \"\"\"Specialized decomposition for comparison queries.\"\"\"\n\n    def __init__(self, llm_fn: Callable):\n        self.llm = llm_fn\n\n    def decompose_comparison(self, query: str) -> Dict:\n        \"\"\"Extract comparison entities and generate comparative sub-queries.\"\"\"\n        analysis_prompt = f\"\"\"Analyze this comparison question and extract:\n\n1. Entity A: First item being compared\n2. Entity B: Second item being compared\n3. Comparison dimensions: What aspects are being compared?\n4. Sub-questions needed to fully answer\n\nQuestion: {query}\n\nReturn as JSON:\n{{\"entity_a\": \"...\", \"entity_b\": \"...\", \"dimensions\": [...], \"sub_queries\": [...]}}\"\"\"\n        response = self.llm(analysis_prompt)\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return {\n                \"entity_a\": \"unknown\",\n                \"entity_b\": \"unknown\",\n                \"dimensions\": [\"overview\"],\n                \"sub_queries\": [query],\n            }\n\n    def generate_comparison_context(self, query: str,\n                                     retriever_fn: Callable) -> Dict:\n        \"\"\"Retrieve context for both entities separately.\"\"\"\n        analysis = self.decompose_comparison(query)\n        entity_a = analysis.get(\"entity_a\", \"\")\n        entity_b = analysis.get(\"entity_b\", \"\")\n\n        # Retrieve for each entity\n        a_context = retriever_fn(f\"Explain {entity_a}\", top_k=3)\n        b_context = retriever_fn(f\"Explain {entity_b}\", top_k=3)\n\n        # Retrieve for comparison-specific queries\n        comparison_contexts = {}\n        for dim in analysis.get(\"dimensions\", []):\n            dim_results = retriever_fn(\n                f\"Compare {entity_a} and {entity_b} in terms of {dim}\",\n                top_k=2,\n            )\n            comparison_contexts[dim] = [r[\"id\"] for r in dim_results]\n\n        return {\n            \"query\": query,\n            \"analysis\": analysis,\n            \"entity_a_context\": [r[\"id\"] for r in a_context],\n            \"entity_b_context\": [r[\"id\"] for r in b_context],\n            \"dimension_contexts\": comparison_contexts,\n        }\n\ndef mock_comparison_llm(prompt: str) -> str:\n    if \"JSON\" in prompt:\n        return json.dumps({\n            \"entity_a\": \"RAG (Retrieval-Augmented Generation)\",\n            \"entity_b\": \"Fine-tuning\",\n            \"dimensions\": [\"approach\", \"data requirements\", \"use cases\", \"limitations\"],\n            \"sub_queries\": [\n                \"What is RAG and how does it work?\",\n                \"What is fine-tuning and how does it work?\",\n                \"What are the differences between RAG and fine-tuning?\",\n                \"When should you use RAG vs fine-tuning?\",\n            ],\n        })\n    return query\n\ncomp_decomp = ComparativeDecomposition(mock_comparison_llm)\nanalysis = comp_decomp.decompose_comparison(\n    \"Compare RAG and fine-tuning for LLM customization\"\n)\nprint(\"Comparison analysis:\")\nprint(f\"  Entity A: {analysis['entity_a']}\")\nprint(f\"  Entity B: {analysis['entity_b']}\")\nprint(f\"  Dimensions: {analysis['dimensions']}\")\nprint(f\"  Sub-queries: {analysis['sub_queries']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1155-full-decomposition-pipeline",
      children: "11.5.5 Full Decomposition Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DecompositionPipeline:\n    \"\"\"End-to-end query decomposition and retrieval pipeline.\"\"\"\n\n    def __init__(self, decomposer: QueryDecomposer,\n                 executor: HierarchicalRetrievalExecutor):\n        self.decomposer = decomposer\n        self.executor = executor\n\n    def run(self, query: str, max_sub_queries: int = 5,\n            top_k_per_query: int = 3) -> Dict:\n        \"\"\"Full pipeline: decompose -> execute -> synthesize.\"\"\"\n        sub_queries = self.decomposer.decompose(query, max_sub_queries)\n        result = self.executor.execute_with_synthesis(\n            query, sub_queries, top_k_per_query\n        )\n\n        return {\n            \"original_query\": query,\n            \"num_sub_queries\": len(sub_queries),\n            \"sub_queries\": sub_queries,\n            \"synthesized_answer\": result,\n        }\n\n    def run_with_metadata(self, query: str, max_sub_queries: int = 5,\n                          top_k_per_query: int = 3) -> Dict:\n        \"\"\"Full pipeline with detailed metadata.\"\"\"\n        sub_queries = self.decomposer.decompose(query, max_sub_queries)\n        execution = self.executor.execute(query, sub_queries, top_k_per_query)\n        answer = self.executor.execute_with_synthesis(\n            query, sub_queries, top_k_per_query\n        )\n\n        return {\n            \"query\": query,\n            \"decomposition\": {\n                \"strategy\": \"llm_based\",\n                \"sub_queries\": sub_queries,\n                \"dependency_type\": \"independent\",\n            },\n            \"retrieval\": {\n                \"total_sub_queries_executed\": len(sub_queries),\n                \"unique_documents_retrieved\": execution[\"num_unique_docs\"],\n                \"documents_per_sub_query\": {\n                    sq: doc_ids\n                    for sq, doc_ids in execution[\"sub_results\"].items()\n                },\n            },\n            \"answer\": answer,\n        }\n\npipeline = DecompositionPipeline(decomposer, executor)\nresult = pipeline.run(\n    \"How does RAG retrieval work and what makes it different from traditional search?\",\n    max_sub_queries=4,\n    top_k_per_query=2,\n)\nprint(f\"Decomposition pipeline complete.\")\nprint(f\"Sub-queries: {result['num_sub_queries']}\")\nprint(f\"Answer: {result['synthesized_answer'][:100]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query rewriting and decomposition are essential techniques for improving RAG retrieval quality. Query rewriting bridges the vocabulary gap between user queries and documents — expansion adds synonyms, back-translation generates paraphrases, and LLM-based rewriting adapts query style for different retrieval systems. HyDE generates hypothetical documents that capture the query's information need more completely than the query itself, then uses their embeddings for retrieval. Multi-query retrieval generates N query variants, runs retrieval for each, and merges results via RRF to maximize recall. Step-back prompting asks broader, abstract questions to retrieve general context that supports specific queries. Query decomposition breaks complex questions into simpler sub-queries, executes retrieval independently for each, and synthesizes answers. These techniques together improve recall by 20-40% and answer completeness by 30-50% in production RAG systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Rewrite before retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw user queries rarely match document vocabulary — always rewrite first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HyDE for semantic bridging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothetical documents capture intent better than raw queries for embedding search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-query boosts recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 query variants with RRF fusion typically improves recall@10 by 15-25%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step-back for context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad context from step-back questions improves answer quality for domain-specific queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose complex queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaking multi-faceted questions into sub-queries improves coverage by 30-50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always deduplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merging results from multiple queries requires dedup and score normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile your rewriting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test which rewriting strategies work best for your domain and retrieval system"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is query rewriting in RAG and why is it important?"]
      }), "\nQuery rewriting transforms a user's raw query into one or more variants that are more likely to retrieve relevant documents. Users naturally phrase queries differently than documents are written — they use vague terms, abbreviations, or ambiguous language. Rewriting bridges this vocabulary gap. For example, \"How does RAG work?\" might be rewritten to \"Retrieval-Augmented Generation mechanism and architecture\" for better document matching. Common techniques include query expansion (adding synonyms), back-translation (paraphrasing through another language), and LLM-based rewriting that adapts the query to the retrieval system's strengths. Rewriting typically improves recall by 20-30% in production RAG systems.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Explain Hypothetical Document Embeddings (HyDE) and how they improve retrieval."]
      }), "\nHyDE generates a hypothetical document that would answer the query, embeds that document, and uses the embedding to retrieve real documents. The core insight is that a document answering a question is more semantically similar to relevant documents than the question itself is. For example, for \"What is RAG?\", HyDE generates a paragraph like \"Retrieval-Augmented Generation is a technique that combines retrieval with generative models...\" and uses its embedding for vector search. This works well because the hypothetical document's embedding lands in the region of the embedding space where real relevant documents reside. HyDE is especially effective for complex or ambiguous queries where the query itself may not embed near relevant documents.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is multi-query retrieval and how does RRF merging work?"]
      }), "\nMulti-query retrieval generates N different variants of the user query (via LLM, templates, or back-translation), performs retrieval for each variant independently, and merges the results. Reciprocal Rank Fusion (RRF) merges by scoring each document as the sum of 1/(k + rank_i) across all result lists, where k is a constant (typically 60) and rank_i is the document's rank in the i-th result list. This gives high weight to documents that appear near the top of multiple result sets. For example, a document ranked 1st in two lists and 10th in a third would score 1/61 + 1/61 + 1/70 ≈ 0.033. RRF requires no score normalization and is robust to different retrieval systems.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " How does step-back prompting work for retrieval?"]
      }), "\nStep-back prompting asks a broader, more abstract question before retrieving specific information. For the specific query \"How does the RAG retriever find relevant documents?\", the step-back question might be \"What is Retrieval-Augmented Generation and what problem does it solve?\" This broader question retrieves general context about RAG that helps ground the specific answer. The technique uses an LLM to generate the step-back question, runs retrieval for both the original and step-back questions, and merges the results. This is particularly useful for domain-specific queries where the answer requires both general domain knowledge and specific details. It typically improves answer completeness by 20-35%.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is query decomposition and when should you use it?"]
      }), "\nQuery decomposition breaks a complex question into simpler sub-questions that can be answered independently. For example, \"Compare RAG and fine-tuning for LLM customization\" decomposes into: \"What is RAG?\", \"What is fine-tuning?\", and \"What are the key differences between RAG and fine-tuning?\" Each sub-question is answered through separate retrieval, and results are synthesized into a final answer. Use decomposition for multi-faceted questions, comparison questions, or questions that require information from different domains. It improves answer completeness by 30-50% compared to single-pass retrieval on the full query, but adds latency proportional to the number of sub-queries.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " What are the trade-offs between different query rewriting strategies?"]
      }), "\nSynonym expansion is fast (no LLM call) but rigid — it can introduce irrelevant terms. Back-translation produces natural paraphrases but requires a translation API and adds latency (500-2000ms per translation). LLM-based rewriting is the most flexible and context-aware but is expensive (1 LLM call per rewrite) and adds 200-1000ms latency. Query expansion with embedding similarity offers a middle ground: it finds semantically similar terms from a corpus vocabulary without an LLM, but requires pre-computed embeddings and a vocabulary. The best strategy depends on your latency budget, cost constraints, and domain specificity. In production, a tiered approach is common: fast expansion for simple queries, LLM rewriting for complex ones.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " How does HyDE compare to multi-query retrieval? When would you choose one over the other?"]
      }), "\nHyDE generates one hypothetical document and uses its embedding for retrieval. Multi-query generates multiple query text variants and retrieves for each. HyDE is more focused — it captures the core information need in document form — but depends on the LLM's ability to generate a realistic hypothetical document. Multi-query is more exploratory — it covers different phrasings and perspectives — but requires merging and deduplication. Choose HyDE when you have a clear, factual query where a hypothetical document would look similar to real relevant documents. Choose multi-query for ambiguous queries, exploratory searches, or queries with multiple valid interpretations. They can also be combined: generate multiple hypothetical documents in different styles and retrieve for each.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " How do you handle deduplication when merging results from multiple query variants?"]
      }), "\nDeduplication is essential because the same document may be retrieved by multiple query variants. The simplest approach uses a document ID set — only add a document if its ID hasn't been seen. After dedup, you need a merging strategy. RRF is preferred because it considers rank information from each result list. Another approach tracks which query variants retrieved each document — documents found by more variants get a higher score. For example, a document found by 4 out of 5 variants should rank above one found by only 1 variant. You can also deduplicate by content similarity (e.g., cosine similarity of document embeddings above 0.95 means duplicate) for cases where the same content appears with different IDs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " What is the difference between query expansion and query rewriting?"]
      }), "\nQuery expansion adds related terms to the original query without changing its basic structure. For example, \"RAG training\" might expand to \"RAG training fine-tuning optimization learning\". Expansion is simple, fast, and doesn't require an LLM — it uses synonym dictionaries, embedding similarity, or statistical co-occurrence. Query rewriting, on the other hand, changes the structure and phrasing of the query entirely. For example, \"How does RAG work?\" might be rewritten to \"Explain the mechanism of Retrieval-Augmented Generation in large language models.\" Rewriting typically requires an LLM or a trained model. Expansion increases recall by covering synonyms; rewriting improves both recall and precision by better expressing the information need.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-q10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " Design a production system that uses query rewriting and decomposition for a customer support RAG system."]
      }), "\nA production system would use a tiered approach. Tier 1: Fast query expansion using a domain-specific synonym dictionary (built from support tickets) — this handles 60% of queries with <10ms overhead. Tier 2: For remaining queries, an LLM rewrites for retrieval specificity, generating 3 variants. Tier 3: For complex multi-part queries (detected by a classifier), the system decomposes into sub-queries. Each tier runs in parallel with a timeout — if Tier 3 takes >500ms, the system falls back to Tier 2 results. A HyDE branch runs in parallel for all queries, and results are fused via RRF. The system uses a cache that maps query hashes to their rewritten forms (TTL: 1 hour). Each query variant retrieves top-20 documents, merged and deduplicated to top-10, then passed to a cross-encoder reranker. Total target latency: <800ms for 95th percentile.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the primary purpose of query rewriting in RAG?"]
      }), "\nA. To make queries longer\nB. To transform queries into forms that better match relevant documents\nC. To translate queries to other languages\nD. To compress queries for faster retrieval\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does HyDE retrieve documents?"]
      }), "\nA. By searching with the original query directly\nB. By generating a hypothetical document, embedding it, and using that embedding for retrieval\nC. By translating the query through multiple languages\nD. By expanding the query with synonyms and acronyms\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What merging strategy does multi-query retrieval typically use?"]
      }), "\nA. Score averaging\nB. Reciprocal Rank Fusion (RRF)\nC. Majority voting\nD. Random selection\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does step-back prompting do?"]
      }), "\nA. Generates more specific sub-questions\nB. Asks a broader, more abstract question to retrieve general context\nC. Rewrites the query backwards\nD. Deletes stop words from the query\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag11-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " When should you use query decomposition?"]
      }), "\nA. For simple, single-fact queries\nB. For complex, multi-faceted questions requiring information from different domains\nC. Only when the query is very short\nD. When you need faster retrieval\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a multi-strategy query rewriter with at least 3 different rewriting methods. Compare the retrieval recall@10 for each method on a set of 20 test queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a HyDE system that generates hypothetical documents in 3 different styles (textbook, abstract, summary). Evaluate whether multi-style HyDE outperforms single-style HyDE on a benchmark of 15 queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a multi-query retrieval system that generates 5 query variants using an LLM, retrieves for each, and merges results using RRF. Compare recall@10 against single-query retrieval."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a step-back retriever that generates a step-back question, retrieves broad context, and combines it with specific retrieval. Test on 10 domain-specific technical queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a query decomposition pipeline for comparison queries. Test on 5 comparison questions and evaluate answer completeness against single-pass retrieval."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Query rewriting bridges vocabulary gap between users and documents"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "HyDE insight: A hypothetical document embedding is closer to real relevant docs than the query"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multi-query: Generate N variants, retrieve each, merge via RRF"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step-back: Broad question first, specific question second"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decomposition: Split complex -> answer parts -> synthesize"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always deduplicate merged results"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Profile your domain to choose the right rewriting strategies"
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
            children: "Explain the core idea of Query Rewriting & Decomposition for RAG in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Query Rewriting & Decomposition for RAG."
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
            children: "Describe a production bug caused by misunderstanding Query Rewriting & Decomposition for RAG. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Query Rewriting & Decomposition for RAG from 10 users to 10 million?"
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
            children: "Compare Query Rewriting & Decomposition for RAG with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Query Rewriting & Decomposition for RAG."
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
            children: "How does Query Rewriting & Decomposition for RAG behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Query Rewriting & Decomposition for RAG run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Query Rewriting & Decomposition for RAG that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Query Rewriting & Decomposition for RAG explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Query Rewriting & Decomposition for RAG\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Query Rewriting & Decomposition for RAG to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Query Rewriting & Decomposition for RAG (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Query Rewriting & Decomposition for RAG and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Query Rewriting & Decomposition for RAG-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Query Rewriting & Decomposition for RAG interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Query Rewriting & Decomposition for RAG in production today?"
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
        }), " Query Rewriting & Decomposition for RAG builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Query Rewriting & Decomposition for RAG before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Query Rewriting & Decomposition for RAG is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Query Rewriting & Decomposition for RAG in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Query Rewriting & Decomposition for RAG chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Query Rewriting & Decomposition for RAG is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Query Rewriting & Decomposition for RAG is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Query Rewriting & Decomposition for RAG is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Query Rewriting & Decomposition for RAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Query Rewriting & Decomposition for RAG in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Query Rewriting & Decomposition for RAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Query Rewriting & Decomposition for RAG is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Query Rewriting & Decomposition for RAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Query Rewriting & Decomposition for RAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Query Rewriting & Decomposition for RAG on an empty input?"
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
            children: "Complete Medium exercises, explain Query Rewriting & Decomposition for RAG to someone else"
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
        children: "Always write a one-line example of Query Rewriting & Decomposition for RAG from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Query Rewriting & Decomposition for RAG when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Query Rewriting & Decomposition for RAG twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Query Rewriting & Decomposition for RAG snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Query Rewriting & Decomposition for RAG listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Query Rewriting & Decomposition for RAG to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Query Rewriting & Decomposition for RAG by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Query Rewriting & Decomposition for RAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Query Rewriting & Decomposition for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Query Rewriting & Decomposition for RAG (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Query Rewriting & Decomposition for RAG problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Query Rewriting & Decomposition for RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Query Rewriting & Decomposition for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Query Rewriting & Decomposition for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Query Rewriting & Decomposition for RAG fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Query Rewriting & Decomposition for RAG is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Query Rewriting & Decomposition for RAG is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Query Rewriting & Decomposition for RAG, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Query Rewriting & Decomposition for RAG asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query Rewriting & Decomposition for RAG is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Query Rewriting & Decomposition for RAG."
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
        children: "Query Rewriting & Decomposition for RAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Query Rewriting & Decomposition for RAG today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Query Rewriting & Decomposition for RAG — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Query Rewriting & Decomposition for RAG changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Query Rewriting & Decomposition for RAG."
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
        children: "Query Rewriting & Decomposition for RAG appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Query Rewriting & Decomposition for RAG helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Query Rewriting & Decomposition for RAG concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Query Rewriting & Decomposition for RAG skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Query Rewriting & Decomposition for RAG to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query Rewriting & Decomposition for RAG is like a recipe"
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
        }), " — this chapter contributes the Query Rewriting & Decomposition for RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-11queryrewritingdecomposition-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Query Rewriting & Decomposition for RAG in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-11queryrewritingdecomposition-flash2",
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
      "data-qid": "12ragvectordatabases-11queryrewritingdecomposition-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Query Rewriting & Decomposition for RAG approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-11queryrewritingdecomposition-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Query Rewriting & Decomposition for RAG NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-11queryrewritingdecomposition-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Query Rewriting & Decomposition for RAG applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Query Rewriting & Decomposition for RAG (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Query Rewriting & Decomposition for RAG (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Query Rewriting & Decomposition for RAG-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Query Rewriting & Decomposition for RAG in production at scale"
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
        children: "Testing: pytest for unit tests of Query Rewriting & Decomposition for RAG code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Query Rewriting & Decomposition for RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Query Rewriting & Decomposition for RAG code."]
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
        }), " or your IDE's debugger to step through the Query Rewriting & Decomposition for RAG example code."]
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
        children: "Explain Query Rewriting & Decomposition for RAG in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Query Rewriting & Decomposition for RAG."
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
        children: "Tell me about a time you debugged a Query Rewriting & Decomposition for RAG problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Query Rewriting & Decomposition for RAG is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Query Rewriting & Decomposition for RAG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Query Rewriting & Decomposition for RAG logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Query Rewriting & Decomposition for RAG without notes"
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
        }), ": a small team uses Query Rewriting & Decomposition for RAG daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Query Rewriting & Decomposition for RAG patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Query Rewriting & Decomposition for RAG principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Query Rewriting & Decomposition for RAG shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Query Rewriting & Decomposition for RAG to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector",
        children: "Parent-Child & Multi-Vector Retrieval"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query Rewriting & Decomposition for RAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Query Rewriting & Decomposition for RAG depends on input size and distribution — always benchmark for your own data."
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