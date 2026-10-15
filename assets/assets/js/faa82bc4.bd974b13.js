"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2026],{

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
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_11_query_rewriting_decomposition_md_faa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/11-query-rewriting-decomposition","title":"Query Rewriting & Decomposition for RAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":168,"frontMatter":{"id":"11-query-rewriting-decomposition","slug":"/ai-engineering-placement/12-rag-vector-databases/11-query-rewriting-decomposition","title":"Query Rewriting & Decomposition for RAG","sidebar_label":"Query Rewriting & Decomposition for RAG","sidebar_position":168},"sidebar":"placementSidebar","previous":{"title":"Hybrid Search and Reranking","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking"},"next":{"title":"Parent-Child & Multi-Vector Retrieval","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector"}}');
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
	sidebar_position: 168
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
        children: "LLM APIs (Module 11)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python async programming (Module 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL and databases (Module 02)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with embedding models and vector search (Chapter 12.2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of basic RAG pipeline (Chapter 12.1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
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
        children: "flowchart TD\r\n    A[Raw User Query] --> B{Query Optimizer}\r\n    B --> C[Query Rewriting]\r\n    B --> D[HyDE]\r\n    B --> E[Multi-Query]\r\n    B --> F[Step-Back]\r\n    B --> G[Decomposition]\r\n\r\n    C --> C1[Expanded Query]\r\n    D --> D1[Hypothetical Doc]\r\n    E --> E1[N Query Variants]\r\n    F --> F1[Step-Back Question]\r\n    G --> G1[Sub-Queries]\r\n\r\n    C1 --> H[Retrieval]\r\n    D1 --> H\r\n    E1 --> H\r\n    F1 --> H\r\n    G1 --> H\r\n\r\n    H --> I[Merge & Rerank]\r\n    I --> J[Final Context]\n"
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
        children: "import numpy as np\r\nfrom typing import List, Dict, Optional, Callable\r\nfrom collections import defaultdict\r\nimport json\r\nimport re\r\n\r\nclass QueryExpander:\r\n    \"\"\"Expand queries with synonyms and related terms.\"\"\"\r\n\r\n    def __init__(self, synonym_dict: Dict[str, List[str]] = None):\r\n        self.synonyms = synonym_dict or self._default_synonyms()\r\n\r\n    def _default_synonyms(self) -> Dict[str, List[str]]:\r\n        return {\r\n            \"ai\": [\"artificial intelligence\", \"machine learning\", \"deep learning\"],\r\n            \"rag\": [\"retrieval augmented generation\", \"retrieval-augmented generation\"],\r\n            \"llm\": [\"large language model\", \"language model\", \"foundation model\"],\r\n            \"embedding\": [\"vector representation\", \"embedding vector\", \"dense vector\"],\r\n            \"retrieval\": [\"search\", \"fetch\", \"information retrieval\"],\r\n            \"train\": [\"fine-tune\", \"learn\", \"fit\", \"optimize\"],\r\n            \"model\": [\"neural network\", \"transformer\", \"architecture\"],\r\n            \"data\": [\"dataset\", \"corpus\", \"information\", \"knowledge\"],\r\n            \"fast\": [\"efficient\", \"quick\", \"rapid\", \"high-performance\"],\r\n            \"accuracy\": [\"precision\", \"recall\", \"f1\", \"performance\"],\r\n        }\r\n\r\n    def expand(self, query: str, top_k: int = 3) -> str:\r\n        \"\"\"Expand query by appending synonyms for key terms.\"\"\"\r\n        words = query.lower().split()\r\n        expanded_terms = set(words)\r\n\r\n        for word in words:\r\n            clean = word.strip(\".,!?;:\")\r\n            if clean in self.synonyms:\r\n                expanded_terms.update(self.synonyms[clean][:top_k])\r\n\r\n        return \" \".join(expanded_terms)\r\n\r\n    def weighted_expansion(self, query: str, original_weight: float = 2.0) -> str:\r\n        \"\"\"Expansion with term weighting (repeat original terms).\"\"\"\r\n        expanded = self.expand(query)\r\n        original_parts = query.split()\r\n        weighted = \" \".join(original_parts * int(original_weight))\r\n        return f\"{weighted} {expanded}\"\r\n\r\nexpander = QueryExpander()\r\noriginal = \"How does RAG model train on private data?\"\r\nexpanded = expander.expand(original)\r\nprint(f\"Original: {original}\")\r\nprint(f\"Expanded: {expanded}\")\r\nprint(f\"Weighted: {expander.weighted_expansion(original)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-synonym-expansion-with-wordnet-backoff",
      children: "11.1.2 Synonym Expansion with WordNet Backoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a dedicated synonym dictionary is unavailable, we can use embedding similarity to find related terms dynamically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EmbeddingSynonymExpander:\r\n    \"\"\"Expand queries using embedding similarity for synonym discovery.\"\"\"\r\n\r\n    def __init__(self, embed_fn: Callable, top_k_synonyms: int = 5):\r\n        self.embed = embed_fn\r\n        self.top_k = top_k_synonyms\r\n        self.vocab_cache = {}\r\n\r\n    def get_similar_terms(self, word: str, vocab: List[str]) -> List[str]:\r\n        \"\"\"Find semantically similar terms from a vocabulary.\"\"\"\r\n        word_emb = self.embed(word)\r\n        similarities = []\r\n        for v in vocab:\r\n            v_emb = self.embed(v)\r\n            sim = float(np.dot(word_emb, v_emb))\r\n            similarities.append((v, sim))\r\n\r\n        similarities.sort(key=lambda x: x[1], reverse=True)\r\n        # Skip the word itself\r\n        return [v for v, s in similarities[1:self.top_k + 1]]\r\n\r\n    def expand(self, query: str, corpus_vocab: List[str]) -> str:\r\n        \"\"\"Expand query with embedding-similar terms.\"\"\"\r\n        words = set(query.lower().split())\r\n        synonyms = set(words)\r\n\r\n        for word in words:\r\n            clean = word.strip(\".,!?;:\")\r\n            similar = self.get_similar_terms(clean, corpus_vocab)\r\n            synonyms.update(similar)\r\n\r\n        return \" \".join(synonyms)\r\n\r\ndef mock_embed(text: str) -> np.ndarray:\r\n    \"\"\"Mock embedding function for demonstration.\"\"\"\r\n    rng = np.random.RandomState(hash(text) % (2**31))\r\n    emb = rng.randn(384)\r\n    return emb / np.linalg.norm(emb)\r\n\r\ncorpus = [\"retrieval\", \"generation\", \"augmented\", \"embedding\",\r\n          \"transformer\", \"attention\", \"fine-tuning\", \"training\"]\r\nexpander_emb = EmbeddingSynonymExpander(mock_embed, top_k_synonyms=3)\r\nresult = expander_emb.expand(\"retrieval model\", corpus)\r\nprint(f\"Embedding-expanded query: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1113-back-translation-for-paraphrasing",
      children: "11.1.3 Back-Translation for Paraphrasing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Back-translation translates a query to an intermediate language and back to the original. This generates natural paraphrases that improve recall."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BackTranslationRewriter:\r\n    \"\"\"Rewrite queries by translating through a pivot language.\"\"\"\r\n\r\n    def __init__(self, translate_fn: Callable):\r\n        self.translate = translate_fn\r\n\r\n    def rewrite(self, query: str, pivot_lang: str = \"fr\") -> str:\r\n        \"\"\"Translate query to pivot language and back.\"\"\"\r\n        forward = self.translate(query, target=pivot_lang)\r\n        backward = self.translate(forward, target=\"en\")\r\n        return backward\r\n\r\n    def multi_pivot_rewrite(self, query: str,\r\n                            pivots: List[str] = None) -> List[str]:\r\n        \"\"\"Generate paraphrases through multiple pivot languages.\"\"\"\r\n        pivots = pivots or [\"fr\", \"de\", \"es\", \"ja\", \"zh\"]\r\n        variants = [query]\r\n\r\n        for lang in pivots:\r\n            try:\r\n                variant = self.rewrite(query, lang)\r\n                if variant.lower() != query.lower():\r\n                    variants.append(variant)\r\n            except Exception:\r\n                continue\r\n\r\n        return variants\r\n\r\ndef mock_translate(text: str, target: str) -> str:\r\n    \"\"\"Mock translation service.\"\"\"\r\n    translations = {\r\n        (\"How does RAG work?\", \"fr\"): \"Comment fonctionne le RAG?\",\r\n        (\"Comment fonctionne le RAG?\", \"en\"): \"How does RAG function?\",\r\n        (\"How does RAG work?\", \"de\"): \"Wie funktioniert RAG?\",\r\n        (\"Wie funktioniert RAG?\", \"en\"): \"How does RAG operate?\",\r\n    }\r\n    return translations.get((text, target), text)\r\n\r\nbacktranslator = BackTranslationRewriter(mock_translate)\r\nparaphrases = backtranslator.multi_pivot_rewrite(\"How does RAG work?\", [\"fr\", \"de\"])\r\nprint(\"Back-translation paraphrases:\")\r\nfor i, p in enumerate(paraphrases):\r\n    print(f\"  [{i}] {p}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1114-llm-based-query-rewriting",
      children: "11.1.4 LLM-Based Query Rewriting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMs can rewrite queries with context awareness, intent preservation, and style adaptation. This is the most flexible approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMQueryRewriter:\r\n    \"\"\"Use an LLM to rewrite queries for better retrieval.\"\"\"\r\n\r\n    def __init__(self, llm_fn: Callable):\r\n        self.llm = llm_fn\r\n\r\n    def rewrite_for_retrieval(self, query: str) -> str:\r\n        \"\"\"Rewrite query to be more effective for vector search.\"\"\"\r\n        prompt = f\"\"\"Rewrite this user query to make it more effective for semantic search retrieval.\r\n\r\nGuidelines:\r\n- Use precise, descriptive language\r\n- Include key domain terms\r\n- Expand abbreviations on first use\r\n- Remove ambiguous pronouns\r\n- Add context if the query is too brief\r\n\r\nOriginal query: {query}\r\n\r\nRewritten query (return only the rewritten text):\"\"\"\r\n        return self.llm(prompt).strip()\r\n\r\n    def rewrite_for_web_search(self, query: str) -> str:\r\n        \"\"\"Rewrite query optimized for web/BM25 search.\"\"\"\r\n        prompt = f\"\"\"Rewrite this query for keyword-based (BM25) web search.\r\n\r\nGuidelines:\r\n- Use exact terms likely to appear in documents\r\n- Add alternative phrasings in parentheses\r\n- Include quoted phrases for exact matching\r\n\r\nOriginal query: {query}\r\n\r\nRewritten query:\"\"\"\r\n        return self.llm(prompt).strip()\r\n\r\n    def generate_search_terms(self, query: str, num_terms: int = 5) -> List[str]:\r\n        \"\"\"Generate individual search terms/phrases from the query.\"\"\"\r\n        prompt = f\"\"\"Extract {num_terms} key search terms or short phrases from this query.\r\nEach term should be useful for a keyword search.\r\n\r\nQuery: {query}\r\n\r\nReturn as a comma-separated list:\"\"\"\r\n        response = self.llm(prompt)\r\n        return [t.strip() for t in response.split(\",\") if t.strip()]\r\n\r\n    def decompose_intent(self, query: str) -> Dict:\r\n        \"\"\"Analyze query intent and produce directed rewrites.\"\"\"\r\n        prompt = f\"\"\"Analyze this query and produce:\r\n1. The core information need (1 sentence)\r\n2. Key entities mentioned\r\n3. Suggested search queries (3 variants at different specificity levels)\r\n\r\nQuery: {query}\r\n\r\nReturn as JSON:\r\n{{\"intent\": \"...\", \"entities\": [...], \"search_queries\": [...]}}\"\"\"\r\n        response = self.llm(prompt)\r\n        try:\r\n            return json.loads(response)\r\n        except json.JSONDecodeError:\r\n            return {\"intent\": query, \"entities\": [], \"search_queries\": [query]}\r\n\r\ndef mock_llm(prompt: str) -> str:\r\n    \"\"\"Mock LLM for demonstration.\"\"\"\r\n    if \"rewrite\" in prompt.lower() and \"semantic\" in prompt:\r\n        return \"What are the mechanisms and applications of Retrieval-Augmented Generation (RAG) in large language models?\"\r\n    if \"rewrite\" in prompt.lower() and \"keyword\" in prompt.lower():\r\n        return '\"RAG mechanism\" \"retrieval augmented generation\" LLM knowledge retrieval'\r\n    if \"search terms\" in prompt.lower():\r\n        return \"RAG, retrieval-augmented generation, LLM, knowledge retrieval, document search\"\r\n    if \"intent\" in prompt.lower():\r\n        return '{\"intent\": \"Understand how RAG works in LLMs\", \"entities\": [\"RAG\", \"LLM\"], \"search_queries\": [\"RAG mechanism explained\", \"How retrieval augmented generation works\", \"RAG in LLM applications\"]}'\r\n    return query\r\n\r\nrewriter = LLMQueryRewriter(mock_llm)\r\nquery = \"How does RAG work?\"\r\nprint(f\"Semantic rewrite: {rewriter.rewrite_for_retrieval(query)}\")\r\nprint(f\"Keyword rewrite: {rewriter.rewrite_for_web_search(query)}\")\r\nprint(f\"Search terms: {rewriter.generate_search_terms(query)}\")\r\n\r\nintent = rewriter.decompose_intent(query)\r\nprint(f\"Intent: {intent['intent']}\")\r\nprint(f\"Entities: {intent['entities']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1115-rewriting-pipeline",
      children: "11.1.5 Rewriting Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine multiple rewriting strategies into a configurable pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RewritingPipeline:\r\n    \"\"\"Composable pipeline of rewriting strategies.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.steps = []\r\n\r\n    def add_step(self, name: str, fn: Callable, weight: float = 1.0):\r\n        \"\"\"Add a rewriting step with optional weight.\"\"\"\r\n        self.steps.append({\"name\": name, \"fn\": fn, \"weight\": weight})\r\n\r\n    def rewrite(self, query: str) -> List[Dict[str, str]]:\r\n        \"\"\"Execute all rewriting steps and collect variants.\"\"\"\r\n        variants = [{\"variant\": query, \"method\": \"original\", \"weight\": 1.0}]\r\n\r\n        for step in self.steps:\r\n            try:\r\n                result = step[\"fn\"](query)\r\n                if isinstance(result, str):\r\n                    if result != query:\r\n                        variants.append({\r\n                            \"variant\": result,\r\n                            \"method\": step[\"name\"],\r\n                            \"weight\": step[\"weight\"],\r\n                        })\r\n                elif isinstance(result, list):\r\n                    for r in result:\r\n                        if r != query:\r\n                            variants.append({\r\n                                \"variant\": r,\r\n                                \"method\": step[\"name\"],\r\n                                \"weight\": step[\"weight\"],\r\n                            })\r\n            except Exception as e:\r\n                print(f\"  Step '{step['name']}' failed: {e}\")\r\n\r\n        return variants\r\n\r\npipeline = RewritingPipeline()\r\npipeline.add_step(\"expand\", lambda q: expander.expand(q), weight=1.0)\r\npipeline.add_step(\"backtranslate\", lambda q: backtranslator.multi_pivot_rewrite(q, [\"fr\"]), weight=1.2)\r\npipeline.add_step(\"llm_rewrite\", lambda q: rewriter.rewrite_for_retrieval(q), weight=1.5)\r\n\r\nvariants = pipeline.rewrite(\"How does RAG work?\")\r\nprint(\"Rewriting pipeline variants:\")\r\nfor v in variants:\r\n    print(f\"  [{v['method']}] (w={v['weight']}): {v['variant']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-hypothetical-document-embeddings-hyde",
      children: "11.2 Hypothetical Document Embeddings (HyDE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HyDE generates a hypothetical document that would answer the query, embeds that document, and uses the embedding to retrieve real documents. The key insight: a document that answers the question is more similar to real relevant documents than the question itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Query] --> B[LLM Generates Hypothetical Doc]\r\n    B --> C[Hypothetical Document]\r\n    C --> D[Embedder]\r\n    D --> E[HyDE Embedding]\r\n    E --> F[Vector Search]\r\n    F --> G[Real Documents]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1121-basic-hyde",
      children: "11.2.1 Basic HyDE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HyDE:\r\n    \"\"\"Hypothetical Document Embeddings for improved retrieval.\"\"\"\r\n\r\n    def __init__(self, generator_fn: Callable, embedder_fn: Callable,\r\n                 retriever_fn: Callable):\r\n        self.generator = generator_fn\r\n        self.embedder = embedder_fn\r\n        self.retriever = retriever_fn\r\n\r\n    def generate_hypothetical_doc(self, query: str,\r\n                                  style: str = \"textbook\") -> str:\r\n        \"\"\"Generate a hypothetical document that answers the query.\"\"\"\r\n        prompts = {\r\n            \"textbook\": f\"\"\"Write a detailed textbook paragraph that answers this question.\r\nUse factual, explanatory style with precise terminology.\r\n\r\nQuestion: {query}\r\n\r\nTextbook paragraph:\"\"\",\r\n            \"abstract\": f\"\"\"Write a research paper abstract that addresses this topic.\r\n\r\nResearch question: {query}\r\n\r\nAbstract:\"\"\",\r\n            \"summary\": f\"\"\"Write a concise summary that contains the answer to this question.\r\n\r\nQuestion: {query}\r\n\r\nSummary:\"\"\",\r\n            \"qa\": f\"\"\"Write a detailed answer to this question as if explaining to a colleague.\r\n\r\nQuestion: {query}\r\n\r\nDetailed answer:\"\"\",\r\n        }\r\n\r\n        prompt = prompts.get(style, prompts[\"textbook\"])\r\n        return self.generator(prompt)\r\n\r\n    def embed_hypothetical(self, hypothetical_doc: str) -> np.ndarray:\r\n        \"\"\"Embed the hypothetical document.\"\"\"\r\n        return self.embedder(hypothetical_doc)\r\n\r\n    def retrieve(self, query: str, top_k: int = 5,\r\n                 style: str = \"textbook\") -> List[Dict]:\r\n        \"\"\"Full HyDE pipeline: generate, embed, retrieve.\"\"\"\r\n        hypo_doc = self.generate_hypothetical_doc(query, style)\r\n        hypo_emb = self.embed_hypothetical(hypo_doc)\r\n        results = self.retriever(hypo_emb, top_k=top_k)\r\n\r\n        return results\r\n\r\n    def retrieve_with_original(self, query: str, query_embedder: Callable,\r\n                                top_k: int = 5,\r\n                                style: str = \"textbook\",\r\n                                fusion: str = \"rrf\") -> List[Dict]:\r\n        \"\"\"Retrieve using both HyDE and original query, then fuse.\"\"\"\r\n        # HyDE path\r\n        hypo_doc = self.generate_hypothetical_doc(query, style)\r\n        hypo_emb = self.embed_hypothetical(hypo_doc)\r\n        hyde_results = self.retriever(hypo_emb, top_k=top_k * 2)\r\n\r\n        # Original query path\r\n        query_emb = query_embedder(query)\r\n        query_results = self.retriever(query_emb, top_k=top_k * 2)\r\n\r\n        # Fusion\r\n        if fusion == \"rrf\":\r\n            return self._rrf_fuse(hyde_results, query_results, top_k)\r\n        elif fusion == \"interleave\":\r\n            return self._interleave(hyde_results, query_results, top_k)\r\n        return hyde_results[:top_k]\r\n\r\n    def _rrf_fuse(self, hyde: List[Dict], query: List[Dict],\r\n                  top_k: int, k_const: int = 60) -> List[Dict]:\r\n        scores = defaultdict(float)\r\n        for rank, doc in enumerate(hyde, 1):\r\n            scores[doc[\"id\"]] += 1.0 / (k_const + rank)\r\n        for rank, doc in enumerate(query, 1):\r\n            scores[doc[\"id\"]] += 1.0 / (k_const + rank)\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [{\"id\": doc_id, \"score\": score, \"method\": \"hyde_fused\"}\r\n                for doc_id, score in sorted_docs[:top_k]]\r\n\r\n    def _interleave(self, hyde: List[Dict], query: List[Dict],\r\n                    top_k: int) -> List[Dict]:\r\n        \"\"\"Interleave results, alternating between lists.\"\"\"\r\n        result = []\r\n        seen = set()\r\n        max_len = max(len(hyde), len(query))\r\n\r\n        for i in range(max_len):\r\n            if i < len(hyde) and hyde[i][\"id\"] not in seen:\r\n                result.append(hyde[i])\r\n                seen.add(hyde[i][\"id\"])\r\n            if i < len(query) and query[i][\"id\"] not in seen:\r\n                result.append(query[i])\r\n                seen.add(query[i][\"id\"])\r\n            if len(result) >= top_k:\r\n                break\r\n\r\n        return result[:top_k]\r\n\r\nclass MockDocumentStore:\r\n    \"\"\"Mock document store for demonstration.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.docs = [\r\n            {\"id\": \"doc1\", \"text\": \"RAG combines retrieval with generative models to produce grounded responses.\"},\r\n            {\"id\": \"doc2\", \"text\": \"Retrieval-Augmented Generation (RAG) is a technique for grounding LLM outputs.\"},\r\n            {\"id\": \"doc3\", \"text\": \"Vector databases store embeddings for efficient similarity search.\"},\r\n            {\"id\": \"doc4\", \"text\": \"HyDE generates hypothetical documents to bridge query-document gap.\"},\r\n            {\"id\": \"doc5\", \"text\": \"Multi-query retrieval generates multiple query variants for better coverage.\"},\r\n        ]\r\n\r\n    def search_by_embedding(self, emb: np.ndarray, top_k: int) -> List[Dict]:\r\n        \"\"\"Search by embedding similarity.\"\"\"\r\n        scores = []\r\n        for doc in self.docs:\r\n            doc_emb = mock_embed(doc[\"text\"])\r\n            sim = float(np.dot(emb, doc_emb))\r\n            scores.append({**doc, \"score\": sim})\r\n        scores.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return scores[:top_k]\r\n\r\ndef hyde_generator(prompt: str) -> str:\r\n    \"\"\"Generate hypothetical document.\"\"\"\r\n    if \"RAG\" in prompt:\r\n        return \"Retrieval-Augmented Generation (RAG) is a technique that combines a retrieval system with a generative language model. The retriever finds relevant documents from a knowledge base, and the generator uses those documents to produce grounded, factual responses. RAG reduces hallucinations by providing the LLM with actual source material.\"\r\n    return \"This is a hypothetical document that would contain information relevant to answering the question.\"\r\n\r\nstore = MockDocumentStore()\r\nhyde = HyDE(\r\n    generator_fn=hyde_generator,\r\n    embedder_fn=mock_embed,\r\n    retriever_fn=lambda emb, top_k: store.search_by_embedding(emb, top_k),\r\n)\r\n\r\nhypo_doc = hyde.generate_hypothetical_doc(\"What is RAG?\")\r\nprint(f\"Hypothetical document:\\n{hypo_doc}\\n\")\r\n\r\nresults = hyde.retrieve(\"What is RAG?\", top_k=3, style=\"textbook\")\r\nprint(\"HyDE retrieval results:\")\r\nfor r in results:\r\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1122-multi-style-hyde",
      children: "11.2.2 Multi-Style HyDE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different document styles capture different aspects of relevance. Multi-style HyDE generates multiple hypothetical documents and averages their embeddings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiStyleHyDE:\r\n    \"\"\"Generate multiple hypothetical documents in different styles.\"\"\"\r\n\r\n    def __init__(self, hyde: HyDE, styles: List[str] = None):\r\n        self.hyde = hyde\r\n        self.styles = styles or [\"textbook\", \"abstract\", \"summary\", \"qa\"]\r\n\r\n    def retrieve(self, query: str, top_k: int = 5,\r\n                 fusion: str = \"mean\") -> List[Dict]:\r\n        \"\"\"Generate multiple hypothetical docs and fuse their retrievals.\"\"\"\r\n        all_results = []\r\n\r\n        for style in self.styles:\r\n            hypo_doc = self.hyde.generate_hypothetical_doc(query, style)\r\n            hypo_emb = self.hyde.embed_hypothetical(hypo_doc)\r\n            results = self.hyde.retriever(hypo_emb, top_k=top_k * 2)\r\n            all_results.append(results)\r\n\r\n        if fusion == \"mean\":\r\n            return self._mean_fuse(all_results, top_k)\r\n        elif fusion == \"vote\":\r\n            return self._vote_fuse(all_results, top_k)\r\n        return all_results[0][:top_k]\r\n\r\n    def _mean_fuse(self, results_list: List[List[Dict]],\r\n                   top_k: int) -> List[Dict]:\r\n        \"\"\"Average scores across all HyDE variations.\"\"\"\r\n        scores = defaultdict(list)\r\n        for results in results_list:\r\n            for doc in results:\r\n                scores[doc[\"id\"]].append(doc[\"score\"])\r\n\r\n        averaged = []\r\n        for doc_id, score_list in scores.items():\r\n            avg_score = sum(score_list) / len(score_list)\r\n            averaged.append({\"id\": doc_id, \"score\": avg_score, \"method\": \"multi_hyde_mean\"})\r\n\r\n        averaged.sort(key=lambda x: x[\"score\"], reverse=True)\r\n        return averaged[:top_k]\r\n\r\n    def _vote_fuse(self, results_list: List[List[Dict]],\r\n                   top_k: int) -> List[Dict]:\r\n        \"\"\"Count how many styles retrieved each document.\"\"\"\r\n        vote_counts = defaultdict(int)\r\n        score_sums = defaultdict(float)\r\n\r\n        for results in results_list:\r\n            for rank, doc in enumerate(results):\r\n                vote_counts[doc[\"id\"]] += 1\r\n                score_sums[doc[\"id\"]] += doc[\"score\"]\r\n\r\n        voted = []\r\n        for doc_id in vote_counts:\r\n            voted.append({\r\n                \"id\": doc_id,\r\n                \"votes\": vote_counts[doc_id],\r\n                \"avg_score\": score_sums[doc_id] / vote_counts[doc_id],\r\n                \"method\": \"multi_hyde_vote\",\r\n            })\r\n\r\n        voted.sort(key=lambda x: (x[\"votes\"], x[\"avg_score\"]), reverse=True)\r\n        return voted[:top_k]\r\n\r\nmulti_hyde = MultiStyleHyDE(hyde, styles=[\"textbook\", \"summary\"])\r\nresults = multi_hyde.retrieve(\"What is RAG?\", top_k=3, fusion=\"mean\")\r\nprint(\"Multi-style HyDE results (mean fusion):\")\r\nfor r in results:\r\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1123-hyde-with-query-feedback",
      children: "11.2.3 HyDE with Query Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the retrieved documents to refine the hypothetical document iteratively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IterativeHyDE:\r\n    \"\"\"Iterative HyDE with retrieval feedback.\"\"\"\r\n\r\n    def __init__(self, hyde: HyDE, max_iterations: int = 3):\r\n        self.hyde = hyde\r\n        self.max_iterations = max_iterations\r\n\r\n    def retrieve(self, query: str, top_k: int = 5,\r\n                 style: str = \"textbook\") -> List[Dict]:\r\n        \"\"\"Iteratively refine the hypothetical document using retrieved content.\"\"\"\r\n        current_query = query\r\n        all_results = []\r\n        seen_ids = set()\r\n\r\n        for iteration in range(self.max_iterations):\r\n            hypo_doc = self.hyde.generate_hypothetical_doc(current_query, style)\r\n            hypo_emb = self.hyde.embed_hypothetical(hypo_doc)\r\n            results = self.hyde.retriever(hypo_emb, top_k=top_k * 2)\r\n\r\n            new_results = [r for r in results if r[\"id\"] not in seen_ids]\r\n            for r in new_results:\r\n                seen_ids.add(r[\"id\"])\r\n                all_results.append(r)\r\n\r\n            if not new_results:\r\n                break\r\n\r\n            top_text = new_results[0].get(\"text\", \"\")\r\n            current_query = f\"{query} Based on: {top_text[:100]}\"\r\n\r\n        all_results.sort(key=lambda x: x.get(\"score\", 0), reverse=True)\r\n        return all_results[:top_k]\r\n\r\niter_hyde = IterativeHyDE(hyde, max_iterations=2)\r\nresults = iter_hyde.retrieve(\"What is RAG?\", top_k=3)\r\nprint(\"Iterative HyDE results:\")\r\nfor r in results:\r\n    print(f\"  {r['id']}: score={r['score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-multi-query-retrieval",
      children: "11.3 Multi-Query Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-query retrieval generates N different variants of the user query, retrieves documents for each variant, and merges the results. This increases recall by covering different phrasings and perspectives."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Original Query] --> B[Query Variant Generator]\r\n    B --> C[Variant 1]\r\n    B --> D[Variant 2]\r\n    B --> E[Variant N]\r\n    C --> F[Retrieve]\r\n    D --> G[Retrieve]\r\n    E --> H[Retrieve]\r\n    F --> I[RRF Merger]\r\n    G --> I\r\n    H --> I\r\n    I --> J[Deduplicated Results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1131-multi-query-variant-generator",
      children: "11.3.1 Multi-Query Variant Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQueryGenerator:\r\n    \"\"\"Generate multiple query variants for broader retrieval coverage.\"\"\"\r\n\r\n    def __init__(self, llm_fn: Callable, num_queries: int = 5):\r\n        self.llm = llm_fn\r\n        self.num_queries = num_queries\r\n\r\n    def generate_variants(self, query: str) -> List[str]:\r\n        \"\"\"Generate diverse query variants using an LLM.\"\"\"\r\n        prompt = f\"\"\"Generate {self.num_queries} different versions of this search query.\r\nEach version should:\r\n- Use different phrasing and synonyms\r\n- Target different aspects of the information need\r\n- Vary in specificity (broad to narrow)\r\n- Be self-contained and searchable\r\n\r\nOriginal query: {query}\r\n\r\nReturn one query per line, numbered 1 to {self.num_queries}:\"\"\"\r\n        response = self.llm(prompt)\r\n        variants = self._parse_variants(response)\r\n        return variants[:self.num_queries]\r\n\r\n    def _parse_variants(self, response: str) -> List[str]:\r\n        variants = []\r\n        for line in response.strip().split(\"\\n\"):\r\n            line = line.strip()\r\n            line = re.sub(r\"^\\d+[\\.\\)]\\s*\", \"\", line)\r\n            if line and len(line) > 5:\r\n                variants.append(line)\r\n        return variants\r\n\r\n    def template_variants(self, query: str, templates: List[str] = None) -> List[str]:\r\n        \"\"\"Generate variants using predefined templates.\"\"\"\r\n        templates = templates or [\r\n            \"What is {query}?\",\r\n            \"Explain {query} in detail\",\r\n            \"How does {query} work?\",\r\n            \"{query} definition and examples\",\r\n            \"Overview of {query}\",\r\n            \"{query} applications and use cases\",\r\n            \"Benefits of {query}\",\r\n            \"How to implement {query}\",\r\n        ]\r\n        return [t.format(query=query) for t in templates]\r\n\r\n    def diversity_variants(self, query: str, aspects: List[str] = None) -> List[str]:\r\n        \"\"\"Generate variants targeting different aspects.\"\"\"\r\n        aspects = aspects or [\r\n            \"definition\",\r\n            \"mechanism\",\r\n            \"applications\",\r\n            \"limitations\",\r\n            \"comparison\",\r\n        ]\r\n        variants = []\r\n        for aspect in aspects:\r\n            variants.append(f\"{query} {aspect}\")\r\n        return variants\r\n\r\ndef mock_multi_query_llm(prompt: str) -> str:\r\n    \"\"\"Mock LLM for multi-query generation.\"\"\"\r\n    return \"\"\"1. What is Retrieval-Augmented Generation and how does it work?\r\n2. RAG mechanism explained in simple terms\r\n3. How does RAG combine retrieval with generation?\r\n4. RAG vs traditional language model approaches\r\n5. Benefits and limitations of RAG systems\"\"\"\r\n\r\nmq_generator = MultiQueryGenerator(mock_multi_query_llm, num_queries=5)\r\nvariants = mq_generator.generate_variants(\"How does RAG work?\")\r\nprint(\"Generated query variants:\")\r\nfor i, v in enumerate(variants, 1):\r\n    print(f\"  [{i}] {v}\")\r\n\r\ntemplate_variants = mq_generator.template_variants(\"RAG\")\r\nprint(\"\\nTemplate variants:\")\r\nfor i, v in enumerate(template_variants[:4], 1):\r\n    print(f\"  [{i}] {v}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1132-multi-query-retriever",
      children: "11.3.2 Multi-Query Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQueryRetriever:\r\n    \"\"\"Execute retrieval for multiple query variants and merge results.\"\"\"\r\n\r\n    def __init__(self, base_retriever_fn: Callable,\r\n                 merger: str = \"rrf\"):\r\n        self.retriever = base_retriever_fn\r\n        self.merger = merger\r\n\r\n    def retrieve(self, queries: List[str], top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Retrieve documents for each query variant and merge.\"\"\"\r\n        all_results = []\r\n\r\n        for q_idx, query in enumerate(queries):\r\n            results = self.retriever(query, top_k=top_k * 2)\r\n            for r in results:\r\n                r[\"query_index\"] = q_idx\r\n                r[\"source_query\"] = query\r\n            all_results.append(results)\r\n\r\n        if self.merger == \"rrf\":\r\n            return self._rrf_merge(all_results, top_k)\r\n        elif self.merger == \"unique\":\r\n            return self._unique_merge(all_results, top_k)\r\n        elif self.merger == \"round_robin\":\r\n            return self._round_robin(all_results, top_k)\r\n        return all_results[0][:top_k]\r\n\r\n    def _rrf_merge(self, results_list: List[List[Dict]],\r\n                   top_k: int, k_const: int = 60) -> List[Dict]:\r\n        \"\"\"Reciprocal Rank Fusion across all query variants.\"\"\"\r\n        scores = defaultdict(float)\r\n        doc_details = {}\r\n\r\n        for results in results_list:\r\n            for rank, doc in enumerate(results, 1):\r\n                doc_id = doc[\"id\"]\r\n                scores[doc_id] += 1.0 / (k_const + rank)\r\n                if doc_id not in doc_details:\r\n                    doc_details[doc_id] = doc\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        merged = []\r\n        for doc_id, score in sorted_docs[:top_k]:\r\n            detail = dict(doc_details.get(doc_id, {}))\r\n            detail[\"merged_score\"] = score\r\n            detail[\"method\"] = \"multi_query_rrf\"\r\n            merged.append(detail)\r\n\r\n        return merged\r\n\r\n    def _unique_merge(self, results_list: List[List[Dict]],\r\n                      top_k: int) -> List[Dict]:\r\n        \"\"\"Deduplicate and interleave results.\"\"\"\r\n        seen = set()\r\n        merged = []\r\n\r\n        for results in results_list:\r\n            for doc in results:\r\n                if doc[\"id\"] not in seen:\r\n                    seen.add(doc[\"id\"])\r\n                    doc[\"method\"] = \"multi_query_unique\"\r\n                    merged.append(doc)\r\n                    if len(merged) >= top_k:\r\n                        return merged\r\n        return merged\r\n\r\n    def _round_robin(self, results_list: List[List[Dict]],\r\n                     top_k: int) -> List[Dict]:\r\n        \"\"\"Alternate between query variant result lists.\"\"\"\r\n        merged = []\r\n        seen = set()\r\n        max_len = max(len(r) for r in results_list)\r\n\r\n        for position in range(max_len):\r\n            for results in results_list:\r\n                if position < len(results):\r\n                    doc = results[position]\r\n                    if doc[\"id\"] not in seen:\r\n                        seen.add(doc[\"id\"])\r\n                        doc[\"method\"] = \"multi_query_rr\"\r\n                        merged.append(doc)\r\n                        if len(merged) >= top_k:\r\n                            return merged\r\n        return merged\r\n\r\n    def retrieve_with_weights(self, queries: List[float],\r\n                              weights: List[float],\r\n                              top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Retrieve with per-query weights for RRF fusion.\"\"\"\r\n        all_results = []\r\n\r\n        for query, weight in zip(queries, weights):\r\n            results = self.retriever(query, top_k=top_k * 2)\r\n            all_results.append((results, weight))\r\n\r\n        scores = defaultdict(float)\r\n        doc_details = {}\r\n\r\n        for results, weight in all_results:\r\n            for rank, doc in enumerate(results, 1):\r\n                doc_id = doc[\"id\"]\r\n                scores[doc_id] += weight / (60 + rank)\r\n                if doc_id not in doc_details:\r\n                    doc_details[doc_id] = doc\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [dict(doc_details.get(doc_id, {}), merged_score=score)\r\n                for doc_id, score in sorted_docs[:top_k]]\r\n\r\nclass MockMultiQueryRetriever:\r\n    \"\"\"Mock retriever that returns different results for different queries.\"\"\"\r\n\r\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\r\n        query_hash = hash(query) % 100\r\n        results = []\r\n        for i in range(top_k):\r\n            results.append({\r\n                \"id\": f\"doc_{(query_hash + i) % 20}\",\r\n                \"score\": 0.9 - i * 0.08,\r\n                \"text\": f\"Content related to: {query[:30]}...\",\r\n            })\r\n        return results\r\n\r\nmq_retriever = MultiQueryRetriever(MockMultiQueryRetriever(), merger=\"rrf\")\r\nresults = mq_retriever.retrieve(variants, top_k=5)\r\nprint(\"Multi-query merged results:\")\r\nfor r in results:\r\n    print(f\"  {r['id']}: merged_score={r['merged_score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1133-multi-query-with-deduplication-and-filtering",
      children: "11.3.3 Multi-Query with Deduplication and Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdvancedMultiQueryRetriever:\r\n    \"\"\"Multi-query retriever with dedup, score normalization, and filtering.\"\"\"\r\n\r\n    def __init__(self, base_retriever_fn: Callable):\r\n        self.retriever = base_retriever_fn\r\n\r\n    def retrieve(self, queries: List[str], top_k: int = 5,\r\n                 min_score: float = 0.0,\r\n                 diversify: bool = False) -> List[Dict]:\r\n        \"\"\"Retrieve with optional score threshold and diversification.\"\"\"\r\n        all_docs = {}  # doc_id -> {doc, max_score, source_queries, ranks}\r\n\r\n        for q_idx, query in enumerate(queries):\r\n            results = self.retriever(query, top_k=top_k * 3)\r\n\r\n            for rank, doc in enumerate(results, 1):\r\n                doc_id = doc[\"id\"]\r\n                if doc_id not in all_docs:\r\n                    all_docs[doc_id] = {\r\n                        \"doc\": doc,\r\n                        \"max_score\": doc[\"score\"],\r\n                        \"avg_score\": doc[\"score\"],\r\n                        \"source_queries\": [q_idx],\r\n                        \"best_rank\": rank,\r\n                        \"count\": 1,\r\n                        \"scores\": [doc[\"score\"]],\r\n                    }\r\n                else:\r\n                    entry = all_docs[doc_id]\r\n                    entry[\"max_score\"] = max(entry[\"max_score\"], doc[\"score\"])\r\n                    entry[\"scores\"].append(doc[\"score\"])\r\n                    entry[\"avg_score\"] = sum(entry[\"scores\"]) / len(entry[\"scores\"])\r\n                    entry[\"source_queries\"].append(q_idx)\r\n                    entry[\"best_rank\"] = min(entry[\"best_rank\"], rank)\r\n                    entry[\"count\"] += 1\r\n\r\n        results = []\r\n        for doc_id, entry in all_docs.items():\r\n            if entry[\"max_score\"] >= min_score:\r\n                results.append({\r\n                    \"id\": doc_id,\r\n                    \"text\": entry[\"doc\"].get(\"text\", \"\"),\r\n                    \"max_score\": entry[\"max_score\"],\r\n                    \"avg_score\": entry[\"avg_score\"],\r\n                    \"num_sources\": entry[\"count\"],\r\n                    \"best_rank\": entry[\"best_rank\"],\r\n                    \"source_queries\": entry[\"source_queries\"],\r\n                })\r\n\r\n        # Sort by (num_sources, avg_score) - documents found by more variants rank higher\r\n        results.sort(key=lambda x: (x[\"num_sources\"], x[\"avg_score\"]), reverse=True)\r\n\r\n        if diversify:\r\n            results = self._diversify(results, top_k)\r\n\r\n        return results[:top_k]\r\n\r\n    def _diversify(self, results: List[Dict], top_k: int) -> List[Dict]:\r\n        \"\"\"Maximize result diversity by source coverage.\"\"\"\r\n        selected = []\r\n        selected_ids = set()\r\n        covered_queries = set()\r\n\r\n        while len(selected) < top_k and results:\r\n            best_idx = 0\r\n            best_new_queries = 0\r\n\r\n            for i, r in enumerate(results):\r\n                if r[\"id\"] in selected_ids:\r\n                    continue\r\n                new_queries = len(set(r[\"source_queries\"]) - covered_queries)\r\n                if new_queries > best_new_queries:\r\n                    best_new_queries = new_queries\r\n                    best_idx = i\r\n\r\n            candidate = results.pop(best_idx)\r\n            selected.append(candidate)\r\n            selected_ids.add(candidate[\"id\"])\r\n            covered_queries.update(candidate[\"source_queries\"])\r\n\r\n        return selected\r\n\r\nadv_mq = AdvancedMultiQueryRetriever(MockMultiQueryRetriever())\r\nresults = adv_mq.retrieve(variants, top_k=5, min_score=0.3, diversify=True)\r\nprint(\"Advanced multi-query results:\")\r\nfor r in results:\r\n    print(f\"  {r['id']}: avg_score={r['avg_score']:.3f}, sources={r['num_sources']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1134-multi-query-with-query-clustering",
      children: "11.3.4 Multi-Query with Query Clustering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For very large numbers of variants (10-20), cluster similar queries to reduce redundant retrievals."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ClusteredMultiQuery:\r\n    \"\"\"Cluster similar query variants to reduce redundant retrievals.\"\"\"\r\n\r\n    def __init__(self, embed_fn: Callable, retriever_fn: Callable,\r\n                 similarity_threshold: float = 0.85):\r\n        self.embed = embed_fn\r\n        self.retriever = retriever_fn\r\n        self.threshold = similarity_threshold\r\n\r\n    def cluster_queries(self, queries: List[str]) -> List[List[str]]:\r\n        \"\"\"Group similar queries into clusters.\"\"\"\r\n        clusters = []\r\n        assigned = set()\r\n\r\n        for i, q1 in enumerate(queries):\r\n            if i in assigned:\r\n                continue\r\n            cluster = [q1]\r\n            assigned.add(i)\r\n            emb1 = self.embed(q1)\r\n\r\n            for j, q2 in enumerate(queries):\r\n                if j in assigned or i == j:\r\n                    continue\r\n                emb2 = self.embed(q2)\r\n                sim = float(np.dot(emb1, emb2))\r\n                if sim >= self.threshold:\r\n                    cluster.append(q2)\r\n                    assigned.add(j)\r\n\r\n            clusters.append(cluster)\r\n\r\n        return clusters\r\n\r\n    def retrieve(self, queries: List[str], top_k: int = 5) -> List[Dict]:\r\n        \"\"\"Retrieve using cluster representatives to reduce calls.\"\"\"\r\n        clusters = self.cluster_queries(queries)\r\n        all_results = []\r\n\r\n        for cluster in clusters:\r\n            representative = cluster[0]\r\n            results = self.retriever(representative, top_k=top_k * 2)\r\n            for r in results:\r\n                r[\"cluster_size\"] = len(cluster)\r\n                r[\"cluster_representative\"] = representative\r\n            all_results.append(results)\r\n\r\n        # RRF merge across cluster results\r\n        return self._cluster_rrf(all_results, top_k)\r\n\r\n    def _cluster_rrf(self, results_list: List[List[Dict]],\r\n                     top_k: int) -> List[Dict]:\r\n        \"\"\"RRF merge weighted by cluster size.\"\"\"\r\n        scores = defaultdict(float)\r\n        doc_details = {}\r\n\r\n        for results in results_list:\r\n            cluster_size = results[0].get(\"cluster_size\", 1) if results else 1\r\n            weight = np.log1p(cluster_size)\r\n\r\n            for rank, doc in enumerate(results, 1):\r\n                doc_id = doc[\"id\"]\r\n                scores[doc_id] += weight / (60 + rank)\r\n                if doc_id not in doc_details:\r\n                    doc_details[doc_id] = doc\r\n\r\n        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)\r\n        return [dict(doc_details.get(doc_id, {}),\r\n                     merged_score=score,\r\n                     method=\"clustered_multi_query\")\r\n                for doc_id, score in sorted_docs[:top_k]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-step-back-prompting",
      children: "11.4 Step-Back Prompting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step-back prompting asks a broader, more abstract question before retrieving. This surfaces general context that helps answer specific queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Specific Query] --> B[Step-Back Generator]\r\n    B --> C[Abstract/Step-Back Question]\r\n    C --> D[Retrieve Broad Context]\r\n    D --> E[General Knowledge]\r\n    A --> F[Retrieve Specific Context]\r\n    F --> G[Specific Results]\r\n    E --> H[Merge Contexts]\r\n    G --> H\r\n    H --> I[LLM Generation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1141-step-back-question-generator",
      children: "11.4.1 Step-Back Question Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StepBackGenerator:\r\n    \"\"\"Generate step-back (abstract) questions from specific queries.\"\"\"\r\n\r\n    def __init__(self, llm_fn: Callable):\r\n        self.llm = llm_fn\r\n\r\n    def generate_step_back(self, query: str) -> str:\r\n        \"\"\"Generate a broader step-back question.\"\"\"\r\n        prompt = f\"\"\"You are given a specific question. Your task is to ask a broader, more fundamental \"step-back\" question that would help answer the original question.\r\n\r\nThe step-back question should:\r\n- Be more general and abstract\r\n- Ask about underlying principles or concepts\r\n- Provide context that the specific question needs\r\n- Be answerable from general knowledge sources\r\n\r\nOriginal question: {query}\r\n\r\nStep-back question:\"\"\"\r\n        return self.llm(prompt).strip()\r\n\r\n    def generate_multi_level(self, query: str,\r\n                             levels: int = 3) -> List[str]:\r\n        \"\"\"Generate questions at multiple abstraction levels.\"\"\"\r\n        prompts = {\r\n            1: f\"What general concept or principle does this question relate to?\\n\\nQuestion: {query}\",\r\n            2: f\"What underlying mechanisms or frameworks are relevant?\\n\\nQuestion: {query}\",\r\n            3: f\"What broader field or domain provides context?\\n\\nQuestion: {query}\",\r\n        }\r\n\r\n        step_backs = [query]\r\n        for level in range(1, levels + 1):\r\n            prompt = f\"\"\"Generate a step-back question at abstraction level {level}.\r\n\r\nLevel {level} definition: {prompts[level]}\r\n\r\nOriginal: {query}\r\n\r\nStep-back question:\"\"\"\r\n            sb = self.llm(prompt).strip()\r\n            if sb and sb != query:\r\n                step_backs.append(sb)\r\n\r\n        return step_backs\r\n\r\ndef mock_stepback_llm(prompt: str) -> str:\r\n    \"\"\"Mock LLM for step-back generation.\"\"\"\r\n    if \"step-back question\" in prompt.lower():\r\n        return \"What is Retrieval-Augmented Generation and what problem does it solve in AI?\"\r\n    if \"abstraction level\" in prompt.lower():\r\n        if \"Level 1\" in prompt:\r\n            return \"What is the concept of grounding AI responses in external knowledge?\"\r\n        elif \"Level 2\" in prompt:\r\n            return \"How do hybrid AI systems combine retrieval and generation?\"\r\n        else:\r\n            return \"What are the fundamental approaches to reducing AI hallucinations?\"\r\n    return \"What is the broader context of this topic?\"\r\n\r\nstepback_gen = StepBackGenerator(mock_stepback_llm)\r\nquery = \"How does the RAG retriever find relevant documents?\"\r\nstepback_q = stepback_gen.generate_step_back(query)\r\nprint(f\"Original: {query}\")\r\nprint(f\"Step-back: {stepback_q}\")\r\n\r\nmulti_level = stepback_gen.generate_multi_level(query, levels=3)\r\nprint(\"\\nMulti-level step-back:\")\r\nfor i, q in enumerate(multi_level):\r\n    print(f\"  Level {i}: {q}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1142-step-back-retriever",
      children: "11.4.2 Step-Back Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StepBackRetriever:\r\n    \"\"\"Retrieve using both the original query and step-back question.\"\"\"\r\n\r\n    def __init__(self, base_retriever_fn: Callable,\r\n                 stepback_gen: StepBackGenerator):\r\n        self.retriever = base_retriever_fn\r\n        self.stepback_gen = stepback_gen\r\n\r\n    def retrieve(self, query: str, top_k: int = 5,\r\n                 stepback_top_k: int = 3,\r\n                 ratio: float = 0.5) -> List[Dict]:\r\n        \"\"\"Retrieve from both specific and step-back queries.\"\"\"\r\n        stepback = self.stepback_gen.generate_step_back(query)\r\n\r\n        specific_results = self.retriever(query, top_k=top_k)\r\n        broad_results = self.retriever(stepback, top_k=stepback_top_k)\r\n\r\n        # Merge with deduplication\r\n        seen = set()\r\n        merged = []\r\n\r\n        # Interleave: specific and broad\r\n        specific_ratio = int(top_k * ratio)\r\n        broad_ratio = top_k - specific_ratio\r\n\r\n        for doc in specific_results[:specific_ratio]:\r\n            if doc[\"id\"] not in seen:\r\n                seen.add(doc[\"id\"])\r\n                doc[\"source\"] = \"specific\"\r\n                merged.append(doc)\r\n\r\n        for doc in broad_results[:broad_ratio]:\r\n            if doc[\"id\"] not in seen:\r\n                seen.add(doc[\"id\"])\r\n                doc[\"source\"] = \"step_back\"\r\n                merged.append(doc)\r\n\r\n        # Fill remaining slots\r\n        for doc in specific_results[specific_ratio:]:\r\n            if doc[\"id\"] not in seen and len(merged) < top_k:\r\n                seen.add(doc[\"id\"])\r\n                doc[\"source\"] = \"specific\"\r\n                merged.append(doc)\r\n\r\n        return merged\r\n\r\n    def retrieve_with_context(self, query: str, top_k: int = 5) -> Dict:\r\n        \"\"\"Return both the retrieved docs and the step-back question used.\"\"\"\r\n        stepback = self.stepback_gen.generate_step_back(query)\r\n        results = self.retrieve(query, top_k=top_k)\r\n\r\n        return {\r\n            \"original_query\": query,\r\n            \"step_back_question\": stepback,\r\n            \"results\": results,\r\n            \"num_specific\": sum(1 for r in results if r.get(\"source\") == \"specific\"),\r\n            \"num_broad\": sum(1 for r in results if r.get(\"source\") == \"step_back\"),\r\n        }\r\n\r\nclass MockStepBackRetriever:\r\n    \"\"\"Mock retriever that returns different docs for different queries.\"\"\"\r\n\r\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\r\n        if \"retrieval-augmented\" in query.lower() or \"grounding\" in query.lower():\r\n            return [\r\n                {\"id\": \"broad1\", \"score\": 0.95, \"text\": \"RAG grounds LLM responses in external knowledge sources.\"},\r\n                {\"id\": \"broad2\", \"score\": 0.90, \"text\": \"External knowledge grounding reduces hallucinations in AI systems.\"},\r\n                {\"id\": \"broad3\", \"score\": 0.85, \"text\": \"Retrieval-based approaches provide factual grounding for generative models.\"},\r\n            ][:top_k]\r\n        return [\r\n            {\"id\": \"spec1\", \"score\": 0.92, \"text\": \"The RAG retriever uses embedding similarity to find relevant documents.\"},\r\n            {\"id\": \"spec2\", \"score\": 0.88, \"text\": \"Vector databases enable efficient semantic search in RAG retrieval.\"},\r\n            {\"id\": \"spec3\", \"score\": 0.82, \"text\": \"BM25 and dense retrievers are commonly used in RAG pipelines.\"},\r\n        ][:top_k]\r\n\r\nsb_retriever = StepBackRetriever(\r\n    MockStepBackRetriever(),\r\n    stepback_gen,\r\n)\r\nresults = sb_retriever.retrieve(query, top_k=4, ratio=0.5)\r\nprint(\"Step-back retrieval results:\")\r\nfor r in results:\r\n    print(f\"  {r['id']} (source={r.get('source')}): {r['text'][:60]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1143-step-back-with-multi-level-context",
      children: "11.4.3 Step-Back with Multi-Level Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiLevelStepBack:\r\n    \"\"\"Retrieve context at multiple abstraction levels.\"\"\"\r\n\r\n    def __init__(self, base_retriever_fn: Callable,\r\n                 stepback_gen: StepBackGenerator,\r\n                 levels: int = 3):\r\n        self.retriever = base_retriever_fn\r\n        self.stepback_gen = stepback_gen\r\n        self.levels = levels\r\n\r\n    def retrieve(self, query: str, top_k: int = 5) -> Dict:\r\n        \"\"\"Retrieve context at each abstraction level and merge.\"\"\"\r\n        questions = self.stepback_gen.generate_multi_level(query, self.levels)\r\n        level_results = {}\r\n\r\n        for level, q in enumerate(questions):\r\n            results = self.retriever(q, top_k=max(2, top_k // len(questions)))\r\n            level_results[level] = {\r\n                \"question\": q,\r\n                \"results\": results,\r\n            }\r\n\r\n        # Merge with deduplication, preference for lower levels\r\n        seen = set()\r\n        merged = []\r\n        max_per_level = top_k // len(questions) + 1\r\n\r\n        for level in range(len(questions)):\r\n            results = level_results[level][\"results\"]\r\n            for doc in results[:max_per_level]:\r\n                if doc[\"id\"] not in seen:\r\n                    seen.add(doc[\"id\"])\r\n                    doc[\"abstraction_level\"] = level\r\n                    doc[\"source_question\"] = level_results[level][\"question\"]\r\n                    merged.append(doc)\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"levels\": [\r\n                {\"level\": l, \"question\": level_results[l][\"question\"],\r\n                 \"num_results\": len(level_results[l][\"results\"])}\r\n                for l in range(len(questions))\r\n            ],\r\n            \"results\": merged[:top_k],\r\n        }\r\n\r\nmlsb = MultiLevelStepBack(MockStepBackRetriever(), stepback_gen, levels=3)\r\ncontext = mlsb.retrieve(\"How does RAG retrieval work?\", top_k=4)\r\nprint(\"Multi-level step-back context:\")\r\nfor level in context[\"levels\"]:\r\n    print(f\"  Level {level['level']}: {level['question'][:50]}...\")\r\nprint(\"Results:\")\r\nfor r in context[\"results\"]:\r\n    print(f\"  [{r['abstraction_level']}] {r['id']}: {r['text'][:50]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-query-decomposition",
      children: "11.5 Query Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query decomposition breaks a complex query into simpler sub-queries that can be answered independently. Results are then synthesized into a final answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Complex Query] --> B[Decomposer]\r\n    B --> C[Sub-Query 1]\r\n    B --> D[Sub-Query 2]\r\n    B --> E[Sub-Query N]\r\n    C --> F[Retrieve & Answer 1]\r\n    D --> G[Retrieve & Answer 2]\r\n    E --> H[Retrieve & Answer N]\r\n    F --> I[Result Synthesizer]\r\n    G --> I\r\n    H --> I\r\n    I --> J[Final Answer]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1151-query-decomposer",
      children: "11.5.1 Query Decomposer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QueryDecomposer:\r\n    \"\"\"Decompose complex queries into simpler sub-queries.\"\"\"\r\n\r\n    def __init__(self, llm_fn: Callable):\r\n        self.llm = llm_fn\r\n\r\n    def decompose(self, query: str, max_sub_queries: int = 5) -> List[str]:\r\n        \"\"\"Break a complex query into independent sub-queries.\"\"\"\r\n        prompt = f\"\"\"Decompose this complex question into simpler, independent sub-questions.\r\nEach sub-question should:\r\n- Be self-contained and answerable independently\r\n- Cover one aspect or subtopic\r\n- Be suitable for standalone document retrieval\r\n\r\nComplex question: {query}\r\n\r\nReturn {max_sub_queries} sub-questions as a numbered list. Fewer is fine if the question is simple:\"\"\"\r\n        response = self.llm(prompt)\r\n        return self._parse_sub_queries(response)[:max_sub_queries]\r\n\r\n    def _parse_sub_queries(self, response: str) -> List[str]:\r\n        sub_queries = []\r\n        for line in response.strip().split(\"\\n\"):\r\n            line = line.strip()\r\n            line = re.sub(r\"^\\d+[\\.\\)]\\s*\", \"\", line)\r\n            if line and line.endswith(\"?\") and len(line) > 10:\r\n                sub_queries.append(line)\r\n        return sub_queries\r\n\r\n    def hierarchical_decompose(self, query: str,\r\n                               max_depth: int = 2) -> Dict:\r\n        \"\"\"Recursively decompose into a hierarchy of sub-queries.\"\"\"\r\n        structure = {\r\n            \"question\": query,\r\n            \"sub_questions\": [],\r\n            \"depth\": 0,\r\n        }\r\n\r\n        if max_depth <= 0:\r\n            return structure\r\n\r\n        sub_queries = self.decompose(query, max_sub_queries=3)\r\n\r\n        for sq in sub_queries:\r\n            child = self.hierarchical_decompose(sq, max_depth - 1)\r\n            structure[\"sub_questions\"].append(child)\r\n\r\n        return structure\r\n\r\n    def dependency_graph(self, query: str) -> Dict[str, List[str]]:\r\n        \"\"\"Identify dependencies between sub-queries.\"\"\"\r\n        sub_queries = self.decompose(query, max_sub_queries=4)\r\n        dependencies = {sq: [] for sq in sub_queries}\r\n\r\n        for i, sq_a in enumerate(sub_queries):\r\n            for j, sq_b in enumerate(sub_queries):\r\n                if i != j:\r\n                    prompt = f\"\"\"Does answering this question require the answer to the second question?\r\n\r\nFirst question: {sq_a}\r\nSecond question: {sq_b}\r\n\r\nAnswer only YES or NO:\"\"\"\r\n                    response = self.llm(prompt).strip().upper()\r\n                    if \"YES\" in response:\r\n                        dependencies[sq_a].append(sq_b)\r\n\r\n        return dependencies\r\n\r\ndef mock_decompose_llm(prompt: str) -> str:\r\n    \"\"\"Mock LLM for query decomposition.\"\"\"\r\n    if \"decompose\" in prompt.lower():\r\n        return \"\"\"1. What is the retriever component in RAG?\r\n2. How do vector databases store embeddings for retrieval?\r\n3. What are the different retrieval strategies used in RAG?\r\n4. How does the retrieval quality affect RAG output?\"\"\"\r\n    if \"YES or NO\" in prompt:\r\n        return \"NO\"\r\n    return \"What is retrieval in AI systems?\"\r\n\r\ndecomposer = QueryDecomposer(mock_decompose_llm)\r\ncomplex_query = \"How does the RAG retriever work and what embedding models does it use?\"\r\nsub_queries = decomposer.decompose(complex_query, max_sub_queries=4)\r\nprint(f\"Complex query: {complex_query}\")\r\nprint(\"Decomposed sub-queries:\")\r\nfor i, sq in enumerate(sub_queries, 1):\r\n    print(f\"  [{i}] {sq}\")\r\n\r\ndep_graph = decomposer.dependency_graph(complex_query)\r\nprint(\"\\nDependency graph:\")\r\nfor sq, deps in dep_graph.items():\r\n    print(f\"  {sq[:40]}... depends on: {[d[:30] for d in deps] if deps else 'nothing'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1152-hierarchical-retrieval-executor",
      children: "11.5.2 Hierarchical Retrieval Executor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HierarchicalRetrievalExecutor:\r\n    \"\"\"Execute retrieval for each sub-query and synthesize results.\"\"\"\r\n\r\n    def __init__(self, retriever_fn: Callable, generator_fn: Callable):\r\n        self.retriever = retriever_fn\r\n        self.generator = generator_fn\r\n\r\n    def execute(self, query: str, sub_queries: List[str],\r\n                top_k_per_query: int = 3) -> Dict:\r\n        \"\"\"Execute retrieval for each sub-query and collect results.\"\"\"\r\n        sub_results = {}\r\n\r\n        for sq in sub_queries:\r\n            results = self.retriever(sq, top_k=top_k_per_query)\r\n            sub_results[sq] = results\r\n\r\n        # Merge all unique documents\r\n        all_docs = {}\r\n        for sq, results in sub_results.items():\r\n            for doc in results:\r\n                if doc[\"id\"] not in all_docs:\r\n                    all_docs[doc[\"id\"]] = {\r\n                        **doc,\r\n                        \"matched_queries\": [sq],\r\n                        \"num_matches\": 1,\r\n                    }\r\n                else:\r\n                    all_docs[doc[\"id\"]][\"num_matches\"] += 1\r\n                    all_docs[doc[\"id\"]][\"matched_queries\"].append(sq)\r\n\r\n        ranked = sorted(all_docs.values(),\r\n                        key=lambda x: (x[\"num_matches\"], x.get(\"score\", 0)),\r\n                        reverse=True)\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"sub_queries\": sub_queries,\r\n            \"sub_results\": {sq: [r[\"id\"] for r in results]\r\n                           for sq, results in sub_results.items()},\r\n            \"merged_docs\": ranked,\r\n            \"num_unique_docs\": len(ranked),\r\n        }\r\n\r\n    def execute_with_synthesis(self, query: str, sub_queries: List[str],\r\n                               top_k_per_query: int = 3) -> str:\r\n        \"\"\"Execute retrieval and synthesize a final answer.\"\"\"\r\n        result = self.execute(query, sub_queries, top_k_per_query)\r\n\r\n        docs_for_context = result[\"merged_docs\"][:5]\r\n        context_text = \"\\n\\n\".join([\r\n            f\"Document {i+1}: {d.get('text', '')}\"\r\n            for i, d in enumerate(docs_for_context)\r\n        ])\r\n\r\n        synthesis_prompt = f\"\"\"You have retrieved documents to answer sub-questions of a complex query.\r\n\r\nOriginal query: {query}\r\n\r\nSub-questions:\r\n{chr(10).join(f'- {sq}' for sq in sub_queries)}\r\n\r\nRetrieved context:\r\n{context_text}\r\n\r\nSynthesize a comprehensive answer to the original query based on the retrieved documents:\"\"\"\r\n        answer = self.generator(synthesis_prompt)\r\n\r\n        return answer\r\n\r\nclass MockDecompositionRetriever:\r\n    def __call__(self, query: str, top_k: int) -> List[Dict]:\r\n        hash_val = hash(query) % 100\r\n        return [\r\n            {\"id\": f\"d_{hash_val % 10}\", \"score\": 0.9, \"text\": f\"Content about: {query[:40]}\"},\r\n            {\"id\": f\"d_{(hash_val+1) % 10}\", \"score\": 0.8, \"text\": f\"Related content for: {query[:40]}\"},\r\n        ][:top_k]\r\n\r\ndef mock_generator(prompt: str) -> str:\r\n    return \"Based on the retrieved documents, the RAG retriever uses embedding similarity search in vector databases to find relevant documents.\"\r\n\r\nexecutor = HierarchicalRetrievalExecutor(\r\n    MockDecompositionRetriever(),\r\n    mock_generator,\r\n)\r\nresult = executor.execute(complex_query, sub_queries, top_k_per_query=2)\r\nprint(f\"Sub-query results:\")\r\nfor sq, doc_ids in result[\"sub_results\"].items():\r\n    print(f\"  {sq[:40]}... -> {doc_ids}\")\r\nprint(f\"\\nUnique documents found: {result['num_unique_docs']}\")\r\n\r\nanswer = executor.execute_with_synthesis(complex_query, sub_queries)\r\nprint(f\"\\nSynthesized answer: {answer}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1153-sequential-decomposition-for-dependent-sub-queries",
      children: "11.5.3 Sequential Decomposition (for Dependent Sub-Queries)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SequentialDecompositionExecutor:\r\n    \"\"\"Execute sub-queries sequentially when they have dependencies.\"\"\"\r\n\r\n    def __init__(self, retriever_fn: Callable, generator_fn: Callable):\r\n        self.retriever = retriever_fn\r\n        self.generator = generator_fn\r\n\r\n    def execute_sequential(self, query: str,\r\n                           sub_queries: List[str],\r\n                           dependency_order: List[int]) -> Dict:\r\n        \"\"\"Execute sub-queries in dependency order, passing context forward.\"\"\"\r\n        accumulated_context = []\r\n        intermediate_answers = []\r\n\r\n        for idx in dependency_order:\r\n            sq = sub_queries[idx]\r\n            enriched_query = sq\r\n\r\n            if accumulated_context:\r\n                context_summary = \" \".join(accumulated_context[-3:])\r\n                enriched_query = f\"{sq}\\nPrevious context: {context_summary[:200]}\"\r\n\r\n            results = self.retriever(enriched_query, top_k=2)\r\n            doc_texts = [r.get(\"text\", \"\") for r in results]\r\n            accumulated_context.extend(doc_texts)\r\n\r\n            answer_prompt = f\"\"\"Context: {' '.join(doc_texts)}\r\n\r\nQuestion: {sq}\r\n\r\nAnswer briefly:\"\"\"\r\n            answer = self.generator(answer_prompt)\r\n            intermediate_answers.append({\r\n                \"sub_query\": sq,\r\n                \"documents\": [r[\"id\"] for r in results],\r\n                \"answer\": answer,\r\n            })\r\n\r\n        final_context = \"\\n\\n\".join(accumulated_context)\r\n        final_prompt = f\"\"\"Based on all the gathered information:\r\n\r\n{final_context}\r\n\r\nOriginal question: {query}\r\n\r\nSynthesize a complete answer:\"\"\"\r\n        final_answer = self.generator(final_prompt)\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"execution_order\": dependency_order,\r\n            \"intermediate\": intermediate_answers,\r\n            \"final_answer\": final_answer,\r\n        }\r\n\r\nseq_executor = SequentialDecompositionExecutor(\r\n    MockDecompositionRetriever(),\r\n    mock_generator,\r\n)\r\nseq_result = seq_executor.execute_sequential(\r\n    complex_query,\r\n    sub_queries,\r\n    dependency_order=[0, 1, 2, 3],\r\n)\r\nprint(\"Sequential decomposition complete.\")\r\nfor step in seq_result[\"intermediate\"]:\r\n    print(f\"  {step['sub_query'][:35]}... -> {step['answer'][:40]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1154-comparative-query-decomposition",
      children: "11.5.4 Comparative Query Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For comparison questions (\"Compare X and Y\"), decomposition naturally splits into \"explain X\", \"explain Y\", and \"compare\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ComparativeDecomposition:\r\n    \"\"\"Specialized decomposition for comparison queries.\"\"\"\r\n\r\n    def __init__(self, llm_fn: Callable):\r\n        self.llm = llm_fn\r\n\r\n    def decompose_comparison(self, query: str) -> Dict:\r\n        \"\"\"Extract comparison entities and generate comparative sub-queries.\"\"\"\r\n        analysis_prompt = f\"\"\"Analyze this comparison question and extract:\r\n\r\n1. Entity A: First item being compared\r\n2. Entity B: Second item being compared\r\n3. Comparison dimensions: What aspects are being compared?\r\n4. Sub-questions needed to fully answer\r\n\r\nQuestion: {query}\r\n\r\nReturn as JSON:\r\n{{\"entity_a\": \"...\", \"entity_b\": \"...\", \"dimensions\": [...], \"sub_queries\": [...]}}\"\"\"\r\n        response = self.llm(analysis_prompt)\r\n        try:\r\n            return json.loads(response)\r\n        except json.JSONDecodeError:\r\n            return {\r\n                \"entity_a\": \"unknown\",\r\n                \"entity_b\": \"unknown\",\r\n                \"dimensions\": [\"overview\"],\r\n                \"sub_queries\": [query],\r\n            }\r\n\r\n    def generate_comparison_context(self, query: str,\r\n                                     retriever_fn: Callable) -> Dict:\r\n        \"\"\"Retrieve context for both entities separately.\"\"\"\r\n        analysis = self.decompose_comparison(query)\r\n        entity_a = analysis.get(\"entity_a\", \"\")\r\n        entity_b = analysis.get(\"entity_b\", \"\")\r\n\r\n        # Retrieve for each entity\r\n        a_context = retriever_fn(f\"Explain {entity_a}\", top_k=3)\r\n        b_context = retriever_fn(f\"Explain {entity_b}\", top_k=3)\r\n\r\n        # Retrieve for comparison-specific queries\r\n        comparison_contexts = {}\r\n        for dim in analysis.get(\"dimensions\", []):\r\n            dim_results = retriever_fn(\r\n                f\"Compare {entity_a} and {entity_b} in terms of {dim}\",\r\n                top_k=2,\r\n            )\r\n            comparison_contexts[dim] = [r[\"id\"] for r in dim_results]\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"analysis\": analysis,\r\n            \"entity_a_context\": [r[\"id\"] for r in a_context],\r\n            \"entity_b_context\": [r[\"id\"] for r in b_context],\r\n            \"dimension_contexts\": comparison_contexts,\r\n        }\r\n\r\ndef mock_comparison_llm(prompt: str) -> str:\r\n    if \"JSON\" in prompt:\r\n        return json.dumps({\r\n            \"entity_a\": \"RAG (Retrieval-Augmented Generation)\",\r\n            \"entity_b\": \"Fine-tuning\",\r\n            \"dimensions\": [\"approach\", \"data requirements\", \"use cases\", \"limitations\"],\r\n            \"sub_queries\": [\r\n                \"What is RAG and how does it work?\",\r\n                \"What is fine-tuning and how does it work?\",\r\n                \"What are the differences between RAG and fine-tuning?\",\r\n                \"When should you use RAG vs fine-tuning?\",\r\n            ],\r\n        })\r\n    return query\r\n\r\ncomp_decomp = ComparativeDecomposition(mock_comparison_llm)\r\nanalysis = comp_decomp.decompose_comparison(\r\n    \"Compare RAG and fine-tuning for LLM customization\"\r\n)\r\nprint(\"Comparison analysis:\")\r\nprint(f\"  Entity A: {analysis['entity_a']}\")\r\nprint(f\"  Entity B: {analysis['entity_b']}\")\r\nprint(f\"  Dimensions: {analysis['dimensions']}\")\r\nprint(f\"  Sub-queries: {analysis['sub_queries']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1155-full-decomposition-pipeline",
      children: "11.5.5 Full Decomposition Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DecompositionPipeline:\r\n    \"\"\"End-to-end query decomposition and retrieval pipeline.\"\"\"\r\n\r\n    def __init__(self, decomposer: QueryDecomposer,\r\n                 executor: HierarchicalRetrievalExecutor):\r\n        self.decomposer = decomposer\r\n        self.executor = executor\r\n\r\n    def run(self, query: str, max_sub_queries: int = 5,\r\n            top_k_per_query: int = 3) -> Dict:\r\n        \"\"\"Full pipeline: decompose -> execute -> synthesize.\"\"\"\r\n        sub_queries = self.decomposer.decompose(query, max_sub_queries)\r\n        result = self.executor.execute_with_synthesis(\r\n            query, sub_queries, top_k_per_query\r\n        )\r\n\r\n        return {\r\n            \"original_query\": query,\r\n            \"num_sub_queries\": len(sub_queries),\r\n            \"sub_queries\": sub_queries,\r\n            \"synthesized_answer\": result,\r\n        }\r\n\r\n    def run_with_metadata(self, query: str, max_sub_queries: int = 5,\r\n                          top_k_per_query: int = 3) -> Dict:\r\n        \"\"\"Full pipeline with detailed metadata.\"\"\"\r\n        sub_queries = self.decomposer.decompose(query, max_sub_queries)\r\n        execution = self.executor.execute(query, sub_queries, top_k_per_query)\r\n        answer = self.executor.execute_with_synthesis(\r\n            query, sub_queries, top_k_per_query\r\n        )\r\n\r\n        return {\r\n            \"query\": query,\r\n            \"decomposition\": {\r\n                \"strategy\": \"llm_based\",\r\n                \"sub_queries\": sub_queries,\r\n                \"dependency_type\": \"independent\",\r\n            },\r\n            \"retrieval\": {\r\n                \"total_sub_queries_executed\": len(sub_queries),\r\n                \"unique_documents_retrieved\": execution[\"num_unique_docs\"],\r\n                \"documents_per_sub_query\": {\r\n                    sq: doc_ids\r\n                    for sq, doc_ids in execution[\"sub_results\"].items()\r\n                },\r\n            },\r\n            \"answer\": answer,\r\n        }\r\n\r\npipeline = DecompositionPipeline(decomposer, executor)\r\nresult = pipeline.run(\r\n    \"How does RAG retrieval work and what makes it different from traditional search?\",\r\n    max_sub_queries=4,\r\n    top_k_per_query=2,\r\n)\r\nprint(f\"Decomposition pipeline complete.\")\r\nprint(f\"Sub-queries: {result['num_sub_queries']}\")\r\nprint(f\"Answer: {result['synthesized_answer'][:100]}...\")\n"
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
            children: "How does Query Rewriting & Decomposition for RAG behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Query Rewriting & Decomposition for RAG\")."
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
        children: "Review complexity and edge cases for the classic problem in this chapter."
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
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to 11 Query Rewriting Decomposition is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 11 Query Rewriting Decomposition is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
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
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) Rewriting & Decomposition for RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 11 Query Rewriting Decomposition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 11 Query Rewriting Decomposition with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 11 Query Rewriting Decomposition fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 11 Query Rewriting Decomposition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 11 Query Rewriting Decomposition"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 11 Query Rewriting Decomposition?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 11 Query Rewriting Decomposition?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 11 Query Rewriting Decomposition asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 11 Query Rewriting Decomposition?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "11 Query Rewriting Decomposition is like a GPS navigation system"
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
          }), " — this chapter contributes the Query Rewriting & Decomposition for RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
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
          children: "Retrieving too many chunks (k>10) dilutes relevance and exceeds token limits. Always start with k=3-5 and tune based on recall@k on a validation set."
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
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
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
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
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
          children: "Production RAG: LangChain/LlamaIndex for orchestration, Pinecone/Weaviate/Qdrant for vector storage, sentence-transformers for embeddings, RAGAS for evaluation."
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
        }), " — Facebook's fast similarity search library Rewriting & Decomposition for RAG"]
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
        }), ": Add structured logging at each stage of the 11 Query Rewriting Decomposition pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_11_query_rewriting_decomposition(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 11 Query Rewriting Decomposition.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 11 Query Rewriting Decomposition here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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