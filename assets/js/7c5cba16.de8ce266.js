"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80767],{

/***/ 78531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_01_introduction_to_rag_md_7c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-01-introduction-to-rag-md-7c5.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_01_introduction_to_rag_md_7c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/01-introduction-to-rag","title":"Introduction to RAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":145,"frontMatter":{"id":"01-introduction-to-rag","slug":"/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag","title":"Introduction to RAG","sidebar_label":"Introduction to RAG","sidebar_position":145},"sidebar":"coursesSidebar","previous":{"title":"12 — RAG & Vector Databases","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases"},"next":{"title":"Embedding Models","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/02-embedding-models"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag.md


const frontMatter = {
	id: '01-introduction-to-rag',
	slug: '/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag',
	title: 'Introduction to RAG',
	sidebar_label: 'Introduction to RAG',
	sidebar_position: 145
};
const contentTitle = 'Introduction to RAG';

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
  "value": "1.1 LLM Limitations",
  "id": "11-llm-limitations",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "1.2 RAG Paradigm",
  "id": "12-rag-paradigm",
  "level": 3
}, {
  "value": "The Three-Step Flow",
  "id": "the-three-step-flow",
  "level": 3
}, {
  "value": "1.3 Core Components",
  "id": "13-core-components",
  "level": 3
}, {
  "value": "1.3.1 Retriever",
  "id": "131-retriever",
  "level": 3
}, {
  "value": "1.3.2 Index",
  "id": "132-index",
  "level": 3
}, {
  "value": "1.3.3 Augmenter",
  "id": "133-augmenter",
  "level": 3
}, {
  "value": "1.3.4 Generator",
  "id": "134-generator",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "1.4 RAG vs Alternatives",
  "id": "14-rag-vs-alternatives",
  "level": 3
}, {
  "value": "1.5 Basic RAG Pipeline",
  "id": "15-basic-rag-pipeline",
  "level": 3
}, {
  "value": "1.5.1 Document Preparation",
  "id": "151-document-preparation",
  "level": 3
}, {
  "value": "1.5.2 Embedding and Indexing",
  "id": "152-embedding-and-indexing",
  "level": 3
}, {
  "value": "1.5.3 Complete Pipeline",
  "id": "153-complete-pipeline",
  "level": 3
}, {
  "value": "1.6 Evaluation Dimensions",
  "id": "16-evaluation-dimensions",
  "level": 3
}, {
  "value": "Comprehensive RAG Score",
  "id": "comprehensive-rag-score",
  "level": 3
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
  "level": 2
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
  "value": "True/False",
  "id": "truefalse",
  "level": 3
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 3
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 3
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 3
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
  "id": "truefalse-1",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank-1",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions-1",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions-1",
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
        id: "introduction-to-rag",
        children: "Introduction to RAG"
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
            children: "Understand the RAG paradigm and why it addresses LLM limitations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the core components of a RAG system (retriever, augmenter, generator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare RAG with fine-tuning and prompt engineering approaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a basic retrieval-augmented generation pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate RAG output quality using faithfulness and relevance metrics"
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
            children: "LLM Limitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge cutoff, hallucination, lack of private data access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve, Augment, Generate — grounding LLM responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retriever, index, augmenter, generator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG vs Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison with fine-tuning, prompt engineering, agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic RAG Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end implementation with embeddings and vector search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faithfulness, answer relevance, context precision"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[User Query] --> B[Embed Query]\n    B --> C[Vector Search]\n    C --> D[Retrieved Chunks]\n    D --> E[Augment Prompt]\n    E --> F[LLM Generator]\n    F --> G[Grounded Response]\n    G --> H[Evaluation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation (RAG) is the most practical technique for making LLMs useful with private, domain-specific, or up-to-date knowledge. Instead of retraining a model on new data — expensive and.\nslow — RAG retrieves relevant documents at query time and grounds the LLM's response in that context. This chapter covers the full RAG paradigm: why it works,.\nits core components, how it compares to fine-tuning, and how to evaluate output quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 11 (LLMs & Prompt Engineering) — understanding of foundation models, context windows, and hallucination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python (functions, classes, list operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with what embeddings are (helpful but introduced in Module 10)"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-llm-limitations",
      children: "1.1 LLM Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models have inherent limitations that RAG addresses."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Cutoff"
      }), ": LLMs are trained on static datasets and have no knowledge of events after their training cutoff. A model trained in 2023 cannot answer questions about events in 2025."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hallucination"
      }), ": Without grounding, LLMs may generate plausible but incorrect information. Studies show hallucination rates of 15-40% depending on domain and task complexity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Private Data"
      }), ": LLMs have no access to private enterprise data, user-specific information, or proprietary documents without explicit inclusion in the context window."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Staleness"
      }), ": Even if retrained periodically, LLMs cannot reflect real-time changes (stock prices, inventory, news)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List, Optional\n\n@dataclass\nclass LLMLimitation:\n    name: str\n    description: str\n    severity: str  # high, medium, low\n    rag_mitigation: str\n\nlimitations = [\n    LLMLimitation(\n        name=\"Knowledge Cutoff\",\n        description=\"Model only knows up to training date\",\n        severity=\"high\",\n        rag_mitigation=\"Retrieve up-to-date documents at query time\",\n    ),\n    LLMLimitation(\n        name=\"Hallucination\",\n        description=\"Model generates factually incorrect information\",\n        severity=\"high\",\n        rag_mitigation=\"Ground response in retrieved evidence\",\n    ),\n    LLMLimitation(\n        name=\"Private Data Access\",\n        description=\"Model cannot access enterprise or personal data\",\n        severity=\"high\",\n        rag_mitigation=\"Index private documents for retrieval\",\n    ),\n    LLMLimitation(\n        name=\"Domain Specificity\",\n        description=\"General models lack deep domain expertise\",\n        severity=\"medium\",\n        rag_mitigation=\"Retrieve from domain-specific knowledge base\",\n    ),\n]\n\nfor lim in limitations:\n    print(f\"{lim.name} ({lim.severity}): {lim.rag_mitigation}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-rag-paradigm",
      children: "1.2 RAG Paradigm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation (RAG) enhances LLM outputs by retrieving relevant information from an external knowledge base before generating a response."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-three-step-flow",
      children: "The Three-Step Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieve"
        }), ": Given a user query, search a knowledge base for relevant documents or chunks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Augment"
        }), ": Insert the retrieved context into the LLM prompt alongside the original query."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        }), ": The LLM produces a response grounded in the provided context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Callable\nimport json\n\ndef rag_pipeline(\n    query: str,\n    retriever: Callable,\n    augmenter: Callable,\n    generator: Callable,\n) -> Dict:\n    retrieved_chunks = retriever(query)\n    augmented_prompt = augmenter(query, retrieved_chunks)\n    response = generator(augmented_prompt)\n    return {\n        \"query\": query,\n        \"retrieved_chunks\": retrieved_chunks,\n        \"augmented_prompt\": augmented_prompt[:200],\n        \"response\": response,\n    }\n\ndef mock_retriever(query: str) -> List[str]:\n    knowledge_base = {\n        \"python\": [\"Python is a high-level programming language created by Guido van Rossum.\"],\n        \"rag\": [\"RAG stands for Retrieval-Augmented Generation, a technique to ground LLM outputs.\"],\n    }\n    for key, chunks in knowledge_base.items():\n        if key in query.lower():\n            return chunks\n    return [\"No relevant documents found.\"]\n\ndef mock_augmenter(query: str, chunks: List[str]) -> str:\n    context = \"\\n\\n\".join(chunks)\n    return f\"\"\"Answer the question based ONLY on the provided context.\n\nContext:\n{context}\n\nQuestion: {query}\n\nAnswer:\"\"\"\n\ndef mock_generator(prompt: str) -> str:\n    return \"Based on the context provided, here is the answer.\"\n\nresult = rag_pipeline(\"What is RAG?\", mock_retriever, mock_augmenter, mock_generator)\nprint(json.dumps(result, indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-core-components",
      children: "1.3 Core Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-retriever",
      children: "1.3.1 Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The retriever finds relevant documents from the knowledge base. Common approaches include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse retrieval"
        }), ": BM25, TF-IDF — keyword-based, fast but misses semantic matches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense retrieval"
        }), ": Embedding-based vector search — captures semantic meaning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid retrieval"
        }), ": Combines sparse and dense for best results"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple\n\nclass Retriever:\n    def __init__(self, documents: List[str]):\n        self.documents = documents\n\n    def retrieve(self, query: str, top_k: int = 3) -> List[Tuple[str, float]]:\n        \"\"\"Simple keyword-based retrieval for demonstration.\"\"\"\n        scores = []\n        query_terms = set(query.lower().split())\n        for doc in self.documents:\n            doc_terms = set(doc.lower().split())\n            overlap = len(query_terms & doc_terms)\n            score = overlap / len(query_terms) if query_terms else 0\n            scores.append((doc, score))\n\n        scores.sort(key=lambda x: x[1], reverse=True)\n        return scores[:top_k]\n\ndocs = [\n    \"RAG combines retrieval with generation for grounded AI responses.\",\n    \"Vector databases store embeddings for efficient similarity search.\",\n    \"Chunking strategies affect retrieval quality in RAG systems.\",\n    \"Fine-tuning adapts model weights while RAG adapts model context.\",\n    \"Embeddings convert text into numerical vectors for comparison.\",\n]\n\nretriever = Retriever(docs)\nresults = retriever.retrieve(\"How does RAG work?\", top_k=2)\nfor doc, score in results:\n    print(f\"Score: {score:.2f} | Doc: {doc}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-index",
      children: "1.3.2 Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The index is the searchable representation of the knowledge base. It consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document chunks"
        }), ": Split documents into manageable pieces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embeddings"
        }), ": Numerical vector representations of each chunk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata"
        }), ": Source, date, title, author for filtering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass IndexChunk:\n    chunk_id: str\n    text: str\n    metadata: Dict\n    embedding: Optional[List[float]] = None\n\nclass DocumentIndex:\n    def __init__(self):\n        self.chunks: List[IndexChunk] = []\n\n    def add_chunk(self, text: str, metadata: Dict):\n        chunk = IndexChunk(\n            chunk_id=f\"chunk-{len(self.chunks) + 1}\",\n            text=text,\n            metadata=metadata,\n        )\n        self.chunks.append(chunk)\n\n    def filter_by_metadata(self, key: str, value: str) -> List[IndexChunk]:\n        return [c for c in self.chunks if c.metadata.get(key) == value]\n\n    def size(self) -> int:\n        return len(self.chunks)\n\nindex = DocumentIndex()\nindex.add_chunk(\"RAG fundamentals\", {\"source\": \"textbook\", \"chapter\": 1})\nindex.add_chunk(\"Vector search techniques\", {\"source\": \"paper\", \"year\": 2024})\nprint(f\"Index size: {index.size()}\")\nprint(f\"Filtered: {len(index.filter_by_metadata('source', 'textbook'))} chunks\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-augmenter",
      children: "1.3.3 Augmenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The augmenter constructs the prompt that includes retrieved context. Key design decisions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Position"
        }), ": Context before or after the query (prepend vs append)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formatting"
        }), ": Structured context with clear separators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction"
        }), ": Explicit grounding instruction to prevent hallucination"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PromptAugmenter:\n    def __init__(self, instruction: str = None):\n        self.instruction = instruction or \"\"\"Answer the question based ONLY on the provided context. If the context does not contain enough information, say \"I don't have enough information to answer.\"\"\"\"\n\n    def augment(self, query: str, chunks: List[str]) -> str:\n        context = self._format_chunks(chunks)\n        return f\"\"\"{self.instruction}\n\nContext:\n{context}\n\nQuestion: {query}\n\nAnswer:\"\"\"\n\n    def _format_chunks(self, chunks: List[str]) -> str:\n        formatted = []\n        for i, chunk in enumerate(chunks, 1):\n            formatted.append(f\"[{i}] {chunk}\")\n        return \"\\n\\n\".join(formatted)\n\naugmenter = PromptAugmenter()\nquery = \"What is vector search?\"\nchunks = [\"Vector search finds similar items using embedding similarity.\"]\nprint(augmenter.augment(query, chunks))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-generator",
      children: "1.3.4 Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The generator is typically an LLM that produces the final answer. Choices include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API-based"
        }), ": GPT-4o, Claude, Gemini — high quality, per-token cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-hosted"
        }), ": Llama, Mistral, Qwen — lower latency, fixed cost"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\n\nclass Generator:\n    def __init__(self, model: str = \"gpt-4o-mini\", client=None):\n        self.model = model\n        self.client = client or OpenAI()\n\n    def generate(self, augmented_prompt: str, temperature: float = 0) -> str:\n        response = self.client.chat.completions.create(\n            model=self.model,\n            messages=[{\"role\": \"user\", \"content\": augmented_prompt}],\n            temperature=temperature,\n        )\n        return response.choices[0].message.content\n\n## For offline/demo use without API:\nclass MockGenerator(Generator):\n    def generate(self, augmented_prompt: str, temperature: float = 0) -> str:\n        return \"This is a generated response grounded in the provided context.\"\n\ngen = MockGenerator()\nprint(gen.generate(\"mock prompt\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-rag-vs-alternatives",
      children: "1.4 RAG vs Alternatives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fine-Tuning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prompt Engineering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires retraining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual prompt changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (grounded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private data stays in index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data used in training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in prompt window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval + generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training + inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ApproachComparator:\n    def __init__(self):\n        self.approaches = {\n            \"RAG\": {\n                \"knowledge_freshness\": \"Real-time\",\n                \"hallucination_risk\": \"Low\",\n                \"implementation_complexity\": 6,\n                \"cost_per_query\": \"Medium\",\n                \"flexibility\": 9,\n            },\n            \"Fine-Tuning\": {\n                \"knowledge_freshness\": \"Static (needs retraining)\",\n                \"hallucination_risk\": \"Medium\",\n                \"implementation_complexity\": 8,\n                \"cost_per_query\": \"Low\",\n                \"flexibility\": 4,\n            },\n            \"Prompt Engineering\": {\n                \"knowledge_freshness\": \"Manual updates\",\n                \"hallucination_risk\": \"High\",\n                \"implementation_complexity\": 3,\n                \"cost_per_query\": \"Low\",\n                \"flexibility\": 6,\n            },\n        }\n\n    def recommend(self, requirements: Dict) -> str:\n        \"\"\"Simple recommendation based on requirements.\"\"\"\n        if requirements.get(\"freshness\") == \"critical\":\n            return \"RAG\"\n        if requirements.get(\"latency_sensitive\") and not requirements.get(\"needs_updates\"):\n            return \"Prompt Engineering\"\n        if requirements.get(\"deep_domain_knowledge\"):\n            return \"Fine-Tuning\"\n        return \"RAG\"  # Default recommendation\n\ncomparator = ApproachComparator()\nreqs = {\"freshness\": \"critical\", \"latency_sensitive\": False}\nprint(f\"Recommended: {comparator.recommend(reqs)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-basic-rag-pipeline",
      children: "1.5 Basic RAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementing a complete RAG pipeline from scratch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-document-preparation",
      children: "1.5.1 Document Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nfrom typing import List\n\ndef chunk_document(text: str, chunk_size: int = 500, overlap: int = 50) -> List[str]:\n    chunks = []\n    start = 0\n    while start < len(text):\n        end = start + chunk_size\n        chunk = text[start:end]\n        if end < len(text):\n            # Try to break at sentence boundary\n            last_period = chunk.rfind(\".\")\n            if last_period > chunk_size // 2:\n                end = start + last_period + 1\n                chunk = text[start:end]\n\n        chunks.append(chunk.strip())\n        start = end - overlap\n\n    return chunks\n\ndocument = \"\"\"Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval with text generation. RAG addresses key limitations of large language models by grounding their outputs in external knowledge. The RAG pipeline consists of three main stages: retrieval, augmentation, and generation. During retrieval, relevant documents are fetched from a knowledge base. During augmentation, those documents are inserted into the LLM prompt. During generation, the LLM produces a response informed by the retrieved context.\"\"\"\n\nchunks = chunk_document(document, chunk_size=200, overlap=30)\nfor i, chunk in enumerate(chunks, 1):\n    print(f\"Chunk {i} ({len(chunk)} chars): {chunk[:80]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-embedding-and-indexing",
      children: "1.5.2 Embedding and Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nfrom typing import List\n\nclass SimpleEmbedder:\n    def __init__(self, dimension: int = 384):\n        self.dimension = dimension\n\n    def embed(self, text: str) -> List[float]:\n        \"\"\"Simple hash-based embedding for demonstration (not for production).\"\"\"\n        hash_obj = hashlib.sha256(text.encode())\n        hex_digest = hash_obj.hexdigest()\n        vector = [int(hex_digest[i:i + 2], 16) / 255.0 for i in range(0, min(len(hex_digest), self.dimension * 2), 2)]\n        # Pad or truncate to dimension\n        while len(vector) < self.dimension:\n            vector.append(0.0)\n        return vector[:self.dimension]\n\nembedded = SimpleEmbedder(384).embed(\"RAG pipeline\")\nprint(f\"Embedding dimension: {len(embedded)}\")\nprint(f\"First 5 values: {embedded[:5]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-complete-pipeline",
      children: "1.5.3 Complete Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Tuple\n\nclass BasicRAGPipeline:\n    def __init__(self, documents: List[str]):\n        self.documents = documents\n        self.embeddings: List[np.ndarray] = []\n        self.embedder = SimpleEmbedder(384)\n\n        for doc in documents:\n            vec = self.embedder.embed(doc)\n            self.embeddings.append(np.array(vec))\n\n    def retrieve(self, query: str, top_k: int = 2) -> List[Tuple[str, float]]:\n        query_vec = np.array(self.embedder.embed(query))\n\n        similarities = []\n        for i, doc_emb in enumerate(self.embeddings):\n            sim = self._cosine_similarity(query_vec, doc_emb)\n            similarities.append((self.documents[i], sim))\n\n        similarities.sort(key=lambda x: x[1], reversed=True)\n        return similarities[:top_k]\n\n    def _cosine_similarity(self, a: np.ndarray, b: np.ndarray) -> float:\n        dot = float(np.dot(a, b))\n        norm = float(np.linalg.norm(a) * np.linalg.norm(b))\n        return dot / norm if norm > 0 else 0.0\n\n    def answer(self, query: str, generator_fn) -> str:\n        chunks = self.retrieve(query)\n        context = \"\\n\\n\".join([c[0] for c in chunks])\n        prompt = f\"\"\"Answer based on this context:\n\n{context}\n\nQuestion: {query}\n\nAnswer:\"\"\"\n        return generator_fn(prompt)\n\npipeline = BasicRAGPipeline([\n    \"RAG grounds LLM responses in retrieved documents.\",\n    \"Vector databases store embeddings for similarity search.\",\n    \"Chunking strategies impact retrieval quality significantly.\",\n])\n\ndef mock_llm(prompt: str) -> str:\n    return \"Grounded answer based on the context provided.\"\n\nanswer = pipeline.answer(\"How does RAG work?\", mock_llm)\nprint(f\"Answer: {answer}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-evaluation-dimensions",
      children: "1.6 Evaluation Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG output quality requires specialized metrics beyond standard LLM evaluation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Faithfulness"
      }), ": Does the response stay true to the retrieved context? Factual consistency between response and provided chunks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Relevance"
      }), ": Does the response directly address the user's question? Irrelevant but accurate information degrades quality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context Precision"
      }), ": Are the retrieved chunks relevant to the query? Retrieval quality directly impacts generation quality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context Recall"
      }), ": Are all necessary chunks retrieved? Missing context leads to incomplete answers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RAGEvaluator:\n    def __init__(self):\n        self.metrics = {}\n\n    def evaluate_faithfulness(\n        self, response: str, context_chunks: List[str]\n    ) -> float:\n        response_claims = set(response.lower().split(\".\"))\n        context_text = \" \".join(context_chunks).lower()\n\n        supported = 0\n        total = 0\n        for claim in response_claims:\n            if len(claim.strip()) < 10:\n                continue\n            total += 1\n            if claim in context_text or any(\n                chunk.lower().find(claim) >= 0 for chunk in context_chunks\n            ):\n                supported += 1\n\n        return supported / total if total > 0 else 1.0\n\n    def evaluate_relevance(self, query: str, response: str) -> float:\n        query_terms = set(query.lower().split())\n        response_terms = set(response.lower().split())\n        overlap = len(query_terms & response_terms)\n        return overlap / len(query_terms) if query_terms else 0\n\n    def evaluate_context_precision(\n        self, query: str, retrieved_chunks: List[str]\n    ) -> float:\n        if not retrieved_chunks:\n            return 0.0\n        relevant = sum(\n            1 for chunk in retrieved_chunks\n            if any(term in chunk.lower() for term in query.lower().split())\n        )\n        return relevant / len(retrieved_chunks)\n\nevaluator = RAGEvaluator()\nresponse = \"RAG stands for Retrieval-Augmented Generation. It grounds LLM outputs.\"\ncontext = [\"RAG stands for Retrieval-Augmented Generation.\"]\nquery = \"What does RAG stand for?\"\n\nfaith = evaluator.evaluate_faithfulness(response, context)\nrel = evaluator.evaluate_relevance(query, response)\nprec = evaluator.evaluate_context_precision(query, context)\n\nprint(f\"Faithfulness: {faith:.2%}\")\nprint(f\"Relevance: {rel:.2%}\")\nprint(f\"Context Precision: {prec:.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-rag-score",
      children: "Comprehensive RAG Score"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rag_score(\n    response: str,\n    query: str,\n    context: List[str],\n    weights: Dict[str, float] = None,\n) -> float:\n    if weights is None:\n        weights = {\"faithfulness\": 0.4, \"relevance\": 0.3, \"precision\": 0.3}\n\n    eval = RAGEvaluator()\n    scores = {\n        \"faithfulness\": eval.evaluate_faithfulness(response, context),\n        \"relevance\": eval.evaluate_relevance(query, response),\n        \"precision\": eval.evaluate_context_precision(query, context),\n    }\n\n    weighted = sum(scores[k] * weights[k] for k in weights)\n    return {\"scores\": scores, \"weighted\": round(weighted, 3)}\n\nprint(rag_score(response, query, context))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of RAG like taking an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open-book exam with your own notes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAG"
        }), " = Open-book exam — instead of memorizing everything (training the model), you bring your notes (documents) and look up answers during the test. The LLM is the student; the retrieved documents are the open textbook."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embeddings"
        }), " = Highlighted and labeled notes — each passage is converted to a vector (a list of numbers) that captures its meaning. \"This paragraph is about Python decorators\" is encoded as a vector close to other decorator-related content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vector database"
        }), " = An organized notebook with tabs — instead of searching through 500 pages manually, you flip to the right tab (similarity search) and find the most relevant section instantly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieval"
        }), " = Looking up the answer in your notes before writing it — the system finds the 3 most relevant passages and hands them to the LLM along with the question."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Augmentation"
        }), " = Adding your notes to the exam question — \"Based on these 3 passages, answer: What is a decorator?\" The LLM now has context it wouldn't have otherwise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generation"
        }), " = Writing your answer using the notes — the LLM synthesizes the retrieved passages into a coherent response, grounded in real evidence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This helps because RAG solves the LLM's biggest weakness — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge that's private, recent, or domain-specific"
      }), " — without retraining. Just like an open-book exam rewards understanding over memorization, RAG rewards good retrieval over massive model training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation (RAG) addresses fundamental LLM limitations by grounding responses in external knowledge. The RAG paradigm follows a three-step pipeline: retrieve relevant documents,.\naugment the prompt with context, and generate a grounded response. Core components include the retriever (sparse or dense), the document index (chunks + embeddings + metadata),.\nthe prompt augmenter (formatting + instruction), and the LLM generator. RAG offers advantages over fine-tuning and prompt engineering in knowledge freshness,.\nhallucination reduction, and private data access. Evaluating RAG quality requires specialized metrics measuring faithfulness, answer relevance, and context precision."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Start with simple retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyword search (BM25) often works well before investing in embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ground explicitly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include clear instructions in prompts to base answers only on provided context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measure retrieval quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context precision and recall directly impact answer quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk thoughtfully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document chunk size and overlap significantly affect retrieval accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate faithfulness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check that generated answers stay true to retrieved context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the three main steps of a RAG pipeline and how do they interact?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG follows a three-step flow: Retrieve, Augment, Generate. First, the retriever searches a knowledge base for documents or chunks relevant to the user's query using either sparse (BM25) or.\ndense (embedding similarity) methods. Second, the augmenter inserts the retrieved context into the LLM prompt alongside a grounding instruction. Third, the generator.\n(an LLM) produces a response strictly based on the provided context. The interaction is sequential — poor retrieval directly degrades augmentation and.\ngeneration quality. This design grounds the LLM's output in external knowledge, reducing hallucination by 40-80% compared to zero-shot generation."
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
      "data-qid": "rag01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does RAG compare to fine-tuning for incorporating new knowledge into an LLM?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG provides real-time knowledge updates by retrieving from an external index at query time — you can add new documents and.\nimmediately make them accessible. Fine-tuning requires collecting labeled data, retraining the model (hours to days), and redeploying. RAG also offers better data privacy since private documents remain in the index rather than being memorized in model weights. Fine-tuning is better when you need the model to learn new behavioral patterns,.\nwriting styles, or domain-specific formats that retrieval cannot inject. Many production systems combine both: RAG for factual grounding and fine-tuning for.\nbehavior alignment."
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
      "data-qid": "rag01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What are the core components of a RAG system and what design decisions does each require?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The four core components are: Retriever (sparse vs dense vs hybrid, top-k tuning), Index (chunking strategy, embedding model, metadata schema), Augmenter (context position — prepend/sandwich/append,.\ninstruction design — strict/citation/creative), and Generator (model selection — GPT-4o vs self-hosted Llama, temperature, max tokens). Each component has independently tunable parameters that affect the overall system's faithfulness,.\nlatency, and cost. The retriever is often the most impactful — improving retrieval quality from precision@5 = 0.6 to 0.9 can double the final answer accuracy."
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
      "data-qid": "rag01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What LLM limitations does RAG address and which ones remain unsolved?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG addresses knowledge cutoff (by retrieving up-to-date documents), hallucination (by grounding responses in retrieved evidence), private data access (by indexing proprietary documents),.\nand domain specificity (by retrieving from domain-specific knowledge bases). Limitations that RAG does NOT solve: the generator can still misinterpret or.\nignore retrieved context, the retrieval itself can fail (returning irrelevant chunks), and latency increases due to the extra retrieval step. RAG also does not improve the model's reasoning capability — it only provides better information. Combining RAG with chain-of-thought prompting can partially address the reasoning gap."
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
      "data-qid": "rag01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you measure the quality of a RAG system beyond standard LLM metrics?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG evaluation requires specialized metrics: Faithfulness (are claims in the response supported by retrieved context?), Answer Relevance (does the response address the query?),.\nContext Precision (are the retrieved chunks relevant?), and Context Recall (are all necessary chunks retrieved?). These four metrics form the RAGAS framework. For.\nretrieval specifically, measure precision@k, recall@k, MRR, and NDCG against a relevance-annotated test set. A weighted composite score (e.g., 0.3 faithfulness + 0.3 relevance + 0.2 context precision + 0.2 context recall) gives a single RAG quality score for.\nregression tracking."
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
      "data-qid": "rag01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the difference between sparse and dense retrieval in RAG?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sparse retrieval (BM25, TF-IDF) uses keyword matching with an inverted index — it excels at exact term matching, handles rare terms well,.\nand is fast with low storage cost. Dense retrieval uses embedding models to convert text into dense vectors and performs similarity search (cosine,.\ndot product) — it captures semantic meaning, handles synonyms, and works across vocabulary gaps. Sparse retrieval fails on queries like \"automotive vehicle\" when the document says \"car\" (vocabulary mismatch). Dense retrieval fails on queries requiring specific term presence,.\nlike finding \"Python 3.12\" when \"programming language\" is the semantic match. Hybrid retrieval combines both."
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
      "data-qid": "rag01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What prompt augmentation strategies prevent the LLM from ignoring retrieved context?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use explicit grounding instructions like \"Answer ONLY based on the provided context. If the context lacks information, say you don't know.\" Position the context before the query (prepend) — studies show LLMs use prepended context more effectively than appended. Use numbered chunk references [1],.\n[2] and instruct the model to cite sources. The sandwich strategy (context, then question, then reminder to use context) reinforces the grounding instruction. For.\nstrict tasks, use citation-style augmentation:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def augment(self, ctx):\n    context = \"\\n\\n\".join([f\"[{i+1}] {c.text}\" for i, c in enumerate(ctx.chunks)])\n    return f\"{instruction}\\n\\nContext:\\n{context}\\n\\nQuestion: {ctx.query}\\n\\nAnswer:\""
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
      "data-qid": "rag01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you choose the number of chunks to retrieve (top-k) in a RAG system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Top-k selection involves a trade-off: too few chunks (k=1-2) may miss critical information (low recall), while too many (k=10-15) can exceed the LLM's context window,.\ndilute relevance, and increase cost. Start with k=5 as a default, then tune based on chunk size and task complexity. For.\nchunk sizes of 200-500 tokens, k=3-5 typically balances recall and precision. Evaluate recall@k on a validation set to determine the minimum k that captures all relevant information. Use dynamic selection: retrieve more candidates initially (k=10) but.\nselect only the top-k by relevance score that fit within your token budget."
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
      "data-qid": "rag01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the role of the augmenter in RAG and how does prompt engineering apply?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The augmenter transforms retrieved chunks into a structured prompt that the LLM can consume effectively. Key prompt engineering decisions include: clear separation between context and.\nquery (using \"Context:\" and \"Question:\" labels), explicit grounding instructions (\"Answer only from context\"), formatting chunks with source numbers for citation, and.\nhandling edge cases like empty context or contradictory information. The augmentation prompt is often the most iterated-on component in production RAG systems — small wording changes can significantly affect faithfulness. A well-designed augmenter reduces hallucination by 30-50% compared to naive concatenation."
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
      "data-qid": "rag01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does RAG help with private or enterprise data that an LLM has never seen?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG allows an LLM to answer questions about private data by indexing that data into a vector database at the enterprise's infrastructure. The data never enters the LLM's training set or.\nmodel weights — it is only injected into the context window at query time. This provides data privacy and access control: you can restrict which documents each user can retrieve via metadata filters. It also enables real-time updates — new internal documents,.\ncustomer records, or product specs are immediately available after indexing without any model retraining. This makes RAG the standard architecture for.\nenterprise knowledge bases, internal documentation Q&A, and customer support systems."
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
      "data-qid": "rag-s1-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does RAG stand for?"]
      }), "\nA. Recurrent Action Gradient\nB. Retrieval-Augmented Generation\nC. Random Access Generator\nD. Recursive Attention Gate\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s1-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Which LLM limitation does RAG primarily address?"]
      }), "\nA. Context window size\nB. Knowledge cutoff and hallucination\nC. Training cost\nD. Token generation speed\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s1-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the correct order of operations in a RAG pipeline?"]
      }), "\nA. Generate, Retrieve, Augment\nB. Augment, Retrieve, Generate\nC. Retrieve, Augment, Generate\nD. Generate, Augment, Retrieve\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s1-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What distinguishes dense retrieval from sparse retrieval?"]
      }), "\nA. Dense uses keyword matching\nB. Dense uses embedding-based semantic search\nC. Sparse is always faster\nD. Dense requires no indexing\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s1-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which metric measures whether a RAG response stays true to the provided context?"]
      }), "\nA. Answer relevance\nB. Context precision\nC. Faithfulness\nD. Perplexity\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding rag vector databases is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to rag vector databases.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": rag vector databases concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — Most concepts build on each other and are interconnected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 5"
      }), ": Real-world applications often combine multiple concepts from this chapter.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Production systems use combinations of these fundamental concepts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 1"
      }), ": The key concept in this chapter is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Review the chapter's Learning Objectives for the specific answer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 2"
      }), ": In rag vector databases, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Depends on the specific operation — check the Theory section]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1"
      }), ": How would you apply the concepts from this chapter in a real AI engineering project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output 1"
      }), ": What is the time complexity of the main algorithm discussed in this chapter?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Check the Theory section for the specific complexity analysis]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a complete RAG pipeline that retrieves from a set of 10 documents, augments the prompt, and generates answers using any LLM. Test with 5 queries and report faithfulness scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare sparse retrieval (keyword overlap) with dense retrieval (embedding similarity) on a dataset of 50 scientific abstracts. Measure mean reciprocal rank (MRR) for both approaches."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a RAG evaluator that computes faithfulness, answer relevance, context precision, and context recall for a given pipeline. Use it to identify which of 3 chunking strategies produces the best RAG scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a prompt augmentation strategy that handles multi-chunk contexts (5+ chunks). Include deduplication, relevance ranking, and token budget management."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Analyze a sample of 10 LLM responses with and without RAG grounding. Count hallucinated facts in each case and report the reduction rate achieved by RAG."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieving too many chunks (k > 10) — excessive context exceeds token limits, dilutes relevance, and increases cost; start with k=3-5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not grounding the LLM prompt with explicit instructions — without \"answer only from context\" instructions, the LLM will hallucinate despite having relevant retrieved documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using word-level tokenization for embeddings — BPE or SentencePiece tokenization produces better semantic representations for dense retrieval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring chunk size and overlap — chunks too small lose context; chunks too large dilute relevance; 200-500 tokens with 50-token overlap is a strong starting point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluating RAG with standard LLM metrics only — faithfulness and context precision are RAG-specific metrics that standard BLEU/ROUGE miss entirely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG = Retrieve relevant documents, Augment the prompt with context, Generate a grounded response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Addresses LLM limitations: knowledge cutoff, hallucination, private data access, domain specificity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core components: Retriever (sparse/dense/hybrid), Index (chunks + embeddings + metadata), Augmenter (prompt formatting), Generator (LLM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sparse retrieval (BM25): keyword-based, fast, misses semantic matches; Dense retrieval: embedding-based, captures semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG vs Fine-Tuning: RAG updates knowledge in real-time, better for privacy; fine-tuning better for behavior/style changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key evaluation metrics: faithfulness (response matches context), answer relevance (response addresses query), context precision (retrieved chunks are relevant)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking strategies: fixed-size, sentence-based, recursive, semantic — each affects retrieval quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prompt augmentation: explicit grounding instructions, numbered chunk references, context before query"
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
            children: "Explain the core idea of Introduction to RAG in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Introduction to RAG."
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
            children: "Describe a production bug caused by misunderstanding Introduction to RAG. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Introduction to RAG from 10 users to 10 million?"
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
            children: "Compare Introduction to RAG with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Introduction to RAG."
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
            children: "How does Introduction to RAG behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Introduction to RAG run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Introduction to RAG that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Introduction to RAG explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Introduction to RAG\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Introduction to RAG to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Introduction to RAG (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Introduction to RAG and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Introduction to RAG-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Introduction to RAG interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Introduction to RAG in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse-1",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Introduction to RAG builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Introduction to RAG before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Introduction to RAG is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Introduction to RAG in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Introduction to RAG chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Introduction to RAG is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Introduction to RAG is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Introduction to RAG is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Introduction to RAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Introduction to RAG in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Introduction to RAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Introduction to RAG is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Introduction to RAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Introduction to RAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Introduction to RAG on an empty input?"
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
            children: "Complete Medium exercises, explain Introduction to RAG to someone else"
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
        children: "Always write a one-line example of Introduction to RAG from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Introduction to RAG when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Introduction to RAG twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Introduction to RAG snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Introduction to RAG listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Introduction to RAG to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Introduction to RAG by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Introduction to RAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Introduction to RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Introduction to RAG (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Introduction to RAG problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Introduction to RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Introduction to RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Introduction to RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Introduction to RAG fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Introduction to RAG is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Introduction to RAG is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Introduction to RAG, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Introduction to RAG asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduction to RAG is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Introduction to RAG."
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
        children: "Introduction to RAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Introduction to RAG today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Introduction to RAG — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Introduction to RAG changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Introduction to RAG."
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
        children: "Introduction to RAG appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Introduction to RAG helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Introduction to RAG concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Introduction to RAG skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Introduction to RAG to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Introduction to RAG is like a recipe"
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
        }), " — this chapter contributes the Introduction to RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-01introductiontorag-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Introduction to RAG in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-01introductiontorag-flash2",
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
      "data-qid": "12ragvectordatabases-01introductiontorag-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Introduction to RAG approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-01introductiontorag-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Introduction to RAG NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-01introductiontorag-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Introduction to RAG applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Introduction to RAG (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Introduction to RAG (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Introduction to RAG-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Introduction to RAG in production at scale"
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
        children: "Testing: pytest for unit tests of Introduction to RAG code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Introduction to RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Introduction to RAG code."]
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
        }), " or your IDE's debugger to step through the Introduction to RAG example code."]
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
        children: "Explain Introduction to RAG in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Introduction to RAG."
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
        children: "Tell me about a time you debugged a Introduction to RAG problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Introduction to RAG is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Introduction to RAG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Introduction to RAG logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Introduction to RAG without notes"
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
        }), ": a small team uses Introduction to RAG daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Introduction to RAG patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Introduction to RAG principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Introduction to RAG shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Introduction to RAG to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/02-embedding-models",
        children: "Embedding Models"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduction to RAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Introduction to RAG depends on input size and distribution — always benchmark for your own data."
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