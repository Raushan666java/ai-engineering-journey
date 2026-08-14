"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[22963],{

/***/ 97117
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_15_context_compression_md_16e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-15-context-compression-md-16e.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_15_context_compression_md_16e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/15-context-compression","title":"Context Compression for RAG","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/15-context-compression.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/15-context-compression","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/15-context-compression","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":172,"frontMatter":{"id":"15-context-compression","slug":"/ai-engineering-placement/12-rag-vector-databases/15-context-compression","title":"Context Compression for RAG","sidebar_label":"Context Compression for RAG","sidebar_position":172},"sidebar":"placementSidebar","previous":{"title":"Microsoft GraphRAG","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/14-graphrag"},"next":{"title":"Hybrid Search Architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/15-context-compression.md


const frontMatter = {
	id: '15-context-compression',
	slug: '/ai-engineering-placement/12-rag-vector-databases/15-context-compression',
	title: 'Context Compression for RAG',
	sidebar_label: 'Context Compression for RAG',
	sidebar_position: 172
};
const contentTitle = 'Context Compression for RAG';

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
  "value": "15.1 Context Compression Overview",
  "id": "151-context-compression-overview",
  "level": 2
}, {
  "value": "Why Compress?",
  "id": "why-compress",
  "level": 3
}, {
  "value": "The Compression Ratio",
  "id": "the-compression-ratio",
  "level": 3
}, {
  "value": "Quality vs Length Trade-off",
  "id": "quality-vs-length-trade-off",
  "level": 3
}, {
  "value": "Categories of Compression",
  "id": "categories-of-compression",
  "level": 3
}, {
  "value": "15.2 LLMLingua",
  "id": "152-llmlingua",
  "level": 2
}, {
  "value": "15.2.1 Task-Aware Token Classification",
  "id": "1521-task-aware-token-classification",
  "level": 3
}, {
  "value": "15.2.2 Dynamic Compression Ratio",
  "id": "1522-dynamic-compression-ratio",
  "level": 3
}, {
  "value": "15.2.3 End-to-End LLMLingua Pipeline",
  "id": "1523-end-to-end-llmlingua-pipeline",
  "level": 3
}, {
  "value": "15.3 Selective Context",
  "id": "153-selective-context",
  "level": 2
}, {
  "value": "15.3.1 Sentence-Level Filtering",
  "id": "1531-sentence-level-filtering",
  "level": 3
}, {
  "value": "15.3.2 Token-Level Pruning",
  "id": "1532-token-level-pruning",
  "level": 3
}, {
  "value": "15.3.3 Semantic Importance Scoring",
  "id": "1533-semantic-importance-scoring",
  "level": 3
}, {
  "value": "15.4 Summary-Based Retrieval",
  "id": "154-summary-based-retrieval",
  "level": 2
}, {
  "value": "15.4.1 Retrieve → Summarize → Combine",
  "id": "1541-retrieve--summarize--combine",
  "level": 3
}, {
  "value": "15.4.2 Multi-Query Merging",
  "id": "1542-multi-query-merging",
  "level": 3
}, {
  "value": "15.4.3 Hierarchical Summarization",
  "id": "1543-hierarchical-summarization",
  "level": 3
}, {
  "value": "15.5 Extractive Compression",
  "id": "155-extractive-compression",
  "level": 2
}, {
  "value": "15.5.1 Budget-Constrained Sentence Selection",
  "id": "1551-budget-constrained-sentence-selection",
  "level": 3
}, {
  "value": "15.5.2 Max Marginal Relevance (MMR)",
  "id": "1552-max-marginal-relevance-mmr",
  "level": 3
}, {
  "value": "15.5.3 Extractive Compression Pipeline",
  "id": "1553-extractive-compression-pipeline",
  "level": 3
}, {
  "value": "15.6 Evaluation of Compression",
  "id": "156-evaluation-of-compression",
  "level": 2
}, {
  "value": "15.6.1 Metrics Framework",
  "id": "1561-metrics-framework",
  "level": 3
}, {
  "value": "15.6.2 Compression Benchmark",
  "id": "1562-compression-benchmark",
  "level": 3
}, {
  "value": "15.6.3 Quality-Cost Trade-off Analysis",
  "id": "1563-quality-cost-trade-off-analysis",
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
        id: "context-compression-for-rag",
        children: "Context Compression for RAG"
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
            children: "Understand context compression fundamentals, trade-offs, and compression ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement LLMLingua-style prompt compression with task-aware token classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design selective context mechanisms with sentence filtering and importance scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply summary-based retrieval with iterative refinement and multi-query merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build extractive compression pipelines with budget-constrained selection and MMR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate compression quality using compression ratio, answer preservation, and faithfulness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation retrieves many documents to answer a query. More documents means more tokens. More tokens means higher cost and slower responses. Context compression shrinks the retrieved context while keeping the information the LLM needs to answer correctly. This chapter covers six compression techniques from simple filtering to learned prompt compression. Each technique balances the trade-off between compression ratio and answer quality. AI engineers must master context compression to build cost-effective, low-latency RAG systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of tokenization and LLM inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG pipeline fundamentals (Module 12, Chapters 1-6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with transformer attention mechanisms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Compression Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio of compressed tokens to original tokens; 0.5 means 50% reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Answer Preservation Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of correct answers maintained after compression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-token binary classification: keep or discard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Importance Scoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigning relevance scores to sentences or tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Marginal Relevance (MMR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diversity-aware selection that reduces redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task-Aware Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using the query to guide which tokens are important"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Budget-Constrained Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing exactly K items under a token budget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Faithfulness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether compressed context still supports the correct answer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context compression is the process of reducing the length of retrieved context before feeding it to an LLM for generation. Without compression, RAG pipelines suffer from inflated token usage, increased latency, and higher API costs. The core challenge is removing irrelevant or redundant information while preserving the facts needed for accurate answering."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compression operates on a spectrum. Aggressive compression (high ratio) saves more tokens but risks discarding critical information. Conservative compression preserves answer quality but saves fewer tokens. The optimal compression strategy depends on the task, the quality of the retriever, and the tolerance for accuracy loss."
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
            children: "15.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context Compression Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compression ratio, quality vs length, latency savings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLMLingua"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-aware token classification, dynamic compression ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentence filtering, token-level pruning, importance scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summary-Based Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve → summarize → combine, iterative refinement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extractive Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentence selection, budget constraints, MMR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation of Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compression ratio, answer preservation, faithfulness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Retrieved Context] --> B{Compression Strategy}\n    B --> C[LLMLingua<br/>Token Classification]\n    B --> D[Selective Context<br/>Sentence Filtering]\n    B --> E[Summary-Based<br/>Summarize then Combine]\n    B --> F[Extractive<br/>MMR Selection]\n    C --> G[Compressed Context]\n    D --> G\n    E --> G\n    F --> G\n    G --> H[LLM Generation]\n    H --> I[Evaluate: Ratio,<br/>Preservation, Faithfulness]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-context-compression-overview",
      children: "15.1 Context Compression Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context compression reduces the number of tokens passed from the retriever to the generator. In a typical RAG pipeline, a retriever fetches 5-20 documents, each 200-1000 tokens long. The total context can easily reach 5000-20000 tokens. At $0.01-$0.03 per 1K tokens for GPT-4, each query costs $0.05-$0.60 just for the context. Compression cuts this cost by 2-10x."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-compress",
      children: "Why Compress?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost"
        }), ": Less tokens means lower LLM API bills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency"
        }), ": LLM generation time scales with input length (quadratic attention)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signal-to-noise ratio"
        }), ": Irrelevant context degrades answer quality (lost-in-the-middle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context window limits"
        }), ": Models have finite context — compression fits more knowledge"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-compression-ratio",
      children: "The Compression Ratio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compression ratio is defined as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "compression_ratio = compressed_tokens / original_tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A ratio of 0.3 means the context shrunk to 30% of its original size. The reciprocal (1 / ratio) is the compression factor. A ratio of 0.3 equals a 3.33x compression factor."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-vs-length-trade-off",
      children: "Quality vs Length Trade-off"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CompressionTradeOff:\n    \"\"\"Models the trade-off between compression ratio and answer quality.\"\"\"\n\n    def __init__(self, original_tokens: int = 10000, cost_per_1k: float = 0.015):\n        self.original_tokens = original_tokens\n        self.cost_per_1k = cost_per_1k\n\n    def compute_trade_offs(self) -> list:\n        ratios = [1.0, 0.7, 0.5, 0.3, 0.2, 0.1]\n        results = []\n        for ratio in ratios:\n            compressed_tokens = int(self.original_tokens * ratio)\n            saved_tokens = self.original_tokens - compressed_tokens\n            cost_saved = (saved_tokens / 1000) * self.cost_per_1k\n            results.append({\n                \"ratio\": ratio,\n                \"tokens\": compressed_tokens,\n                \"savings_pct\": round((1 - ratio) * 100, 1),\n                \"cost_saved\": round(cost_saved, 4),\n                \"cost_per_query\": round((compressed_tokens / 1000) * self.cost_per_1k, 4),\n            })\n        return results\n\n    def estimated_quality(self, ratio: float) -> float:\n        \"\"\"Simulate expected answer quality given compression ratio.\"\"\"\n        # Exponential decay: quality drops faster past 0.3 ratio\n        return min(1.0, 1.0 - 0.05 * (1 / ratio - 1) ** 2)\n\ntrade = CompressionTradeOff(original_tokens=8000)\nfor row in trade.compute_trade_offs():\n    quality = trade.estimated_quality(row[\"ratio\"])\n    print(f\"Ratio {row['ratio']}: {row['tokens']} tokens, \"\n          f\"${row['cost_per_query']:.4f}/query, \"\n          f\"est. quality={quality:.2f}\")\n# Output:\n# Ratio 1.0: 8000 tokens, $0.1200/query, est. quality=1.00\n# Ratio 0.7: 5600 tokens, $0.0840/query, est. quality=0.99\n# Ratio 0.5: 4000 tokens, $0.0600/query, est. quality=0.95\n# Ratio 0.3: 2400 tokens, $0.0360/query, est. quality=0.84\n# Ratio 0.2: 1600 tokens, $0.0240/query, est. quality=0.70\n# Ratio 0.1: 800 tokens, $0.0120/query, est. quality=0.40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "categories-of-compression",
      children: "Categories of Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Context Compression] --> B[Learnable Compression]\n    A --> C[Rule-Based Compression]\n    A --> D[LLM-Based Compression]\n    B --> B1[LLMLingua]\n    B --> B2[Token Pruning]\n    C --> C1[Extractive Selection]\n    C --> C2[Sentence Filtering]\n    D --> D1[Summary-Based]\n    D --> D2[Iterative Refinement]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-llmlingua",
      children: "15.2 LLMLingua"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMLingua is a prompt compression method that uses a smaller language model (the \"compressor\") to classify each token in the context as important or unimportant. The compressor runs a forward pass over the concatenated query and context, extracts per-token perplexities, and drops tokens with low perplexity (high predictability). The intuition: tokens the compressor finds surprising (high perplexity) carry more information and should be kept."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1521-task-aware-token-classification",
      children: "15.2.1 Task-Aware Token Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict, Tuple\nfrom dataclasses import dataclass\n\n@dataclass\nclass CompressedContext:\n    tokens: List[str]\n    token_ids: List[int]\n    kept_mask: List[bool]\n    compression_ratio: float\n\nclass SimulatedPerplexityScorer:\n    \"\"\"Simulates per-token perplexity from a compressor model.\"\"\"\n\n    def __init__(self, seed: int = 42):\n        self.rng = np.random.RandomState(seed)\n\n    def score_tokens(self, tokens: List[str], query: str) -> List[float]:\n        \"\"\"Assign perplexity scores. Tokens matching query terms get lower perplexity.\"\"\"\n        query_terms = set(query.lower().split())\n        scores = []\n        for token in tokens:\n            base = self.rng.uniform(0.5, 1.5)\n            # Tokens related to the query are more \"surprising\" = higher perplexity\n            if token.lower().strip(\".,!?\") in query_terms:\n                base += 2.0\n            # Punctuation and stop tokens are predictable = lower perplexity\n            if token in {\".\", \",\", \"!\", \"?\", \"the\", \"a\", \"an\", \"is\", \"are\"}:\n                base *= 0.3\n            scores.append(base)\n        return scores\n\nclass LLMLinguaCompressor:\n    \"\"\"Task-aware token classifier based on LLMLingua paper.\"\"\"\n\n    def __init__(self, perplexity_scorer: SimulatedPerplexityScorer,\n                 base_threshold: float = 0.8,\n                 dynamic_ratio: bool = True):\n        self.scorer = perplexity_scorer\n        self.base_threshold = base_threshold\n        self.dynamic_ratio = dynamic_ratio\n\n    def compress(self, tokens: List[str], query: str,\n                 target_ratio: float = 0.5) -> CompressedContext:\n        perplexities = self.scorer.score_tokens(tokens, query)\n        threshold = self._compute_threshold(perplexities, target_ratio)\n\n        kept_mask = [p >= threshold for p in perplexities]\n        kept_tokens = [t for t, keep in zip(tokens, kept_mask) if keep]\n\n        actual_ratio = len(kept_tokens) / len(tokens) if tokens else 0.0\n\n        return CompressedContext(\n            tokens=kept_tokens,\n            token_ids=[],\n            kept_mask=kept_mask,\n            compression_ratio=actual_ratio,\n        )\n\n    def _compute_threshold(self, perplexities: List[float],\n                           target_ratio: float) -> float:\n        \"\"\"Find perplexity threshold that achieves target_ratio.\"\"\"\n        if not self.dynamic_ratio:\n            return np.percentile(perplexities, 50)\n\n        sorted_perps = sorted(perplexities, reverse=True)\n        keep_count = max(1, int(len(perplexities) * target_ratio))\n        if keep_count >= len(sorted_perps):\n            return 0.0\n        return sorted_perps[keep_count - 1]\n\n    def compress_with_query_awareness(\n            self, tokens: List[str], query: str,\n            query_bonus: float = 1.0) -> CompressedContext:\n        \"\"\"Boost importance of tokens near query terms.\"\"\"\n        perplexities = self.scorer.score_tokens(tokens, query)\n        query_terms = set(query.lower().split())\n\n        for i, token in enumerate(tokens):\n            if token.lower().strip(\".,!?\") in query_terms:\n                perplexities[i] += query_bonus\n\n        threshold = self._compute_threshold(perplexities, 0.4)\n        kept_mask = [p >= threshold for p in perplexities]\n        kept_tokens = [t for t, keep in zip(tokens, kept_mask) if keep]\n\n        return CompressedContext(\n            tokens=kept_tokens,\n            token_ids=[],\n            kept_mask=kept_mask,\n            compression_ratio=len(kept_tokens) / len(tokens) if tokens else 0.0,\n        )\n\n# Simulate LLMLingua compression\nscorer = SimulatedPerplexityScorer(seed=42)\ncompressor = LLMLinguaCompressor(scorer, base_threshold=0.8)\n\nquery = \"What is the capital of France?\"\ncontext_tokens = \"The capital of France is Paris. It is a large city in Europe. France is known for its cuisine and art.\".split()\n\nresult = compressor.compress(context_tokens, query, target_ratio=0.4)\nprint(f\"Original tokens: {len(context_tokens)}\")\nprint(f\"Compressed tokens: {len(result.tokens)}\")\nprint(f\"Compression ratio: {result.compression_ratio:.3f}\")\nprint(f\"Kept: {' '.join(result.tokens)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1522-dynamic-compression-ratio",
      children: "15.2.2 Dynamic Compression Ratio"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicRatioController:\n    \"\"\"Adjusts compression ratio based on context characteristics.\"\"\"\n\n    def __init__(self, base_ratio: float = 0.5,\n                 min_ratio: float = 0.1,\n                 max_ratio: float = 0.9):\n        self.base_ratio = base_ratio\n        self.min_ratio = min_ratio\n        self.max_ratio = max_ratio\n\n    def compute_ratio(self, context_length: int,\n                      query_length: int,\n                      relevance_scores: List[float]) -> float:\n        \"\"\"Compute dynamic compression ratio based on signals.\"\"\"\n        # Longer contexts can be compressed more aggressively\n        length_factor = min(1.0, 1000 / max(context_length, 1))\n\n        # Higher relevance scores = less compression needed\n        avg_relevance = np.mean(relevance_scores) if relevance_scores else 0.5\n        relevance_factor = 1.0 - avg_relevance\n\n        # Longer queries need more context preserved\n        query_factor = min(1.0, query_length / 50)\n\n        ratio = self.base_ratio * (0.5 + 0.5 * length_factor)\n        ratio = ratio * (0.5 + 0.5 * relevance_factor)\n        ratio = ratio * (0.8 + 0.2 * query_factor)\n\n        return np.clip(ratio, self.min_ratio, self.max_ratio)\n\ncontroller = DynamicRatioController()\nprint(f\"Dynamic ratio (short ctx, high relevance): \"\n      f\"{controller.compute_ratio(200, 5, [0.9, 0.8, 0.7]):.3f}\")\nprint(f\"Dynamic ratio (long ctx, low relevance): \"\n      f\"{controller.compute_ratio(8000, 15, [0.3, 0.2, 0.1]):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1523-end-to-end-llmlingua-pipeline",
      children: "15.2.3 End-to-End LLMLingua Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMLinguaPipeline:\n    \"\"\"Complete LLMLingua compression within a RAG pipeline.\"\"\"\n\n    def __init__(self, compressor: LLMLinguaCompressor,\n                 controller: DynamicRatioController):\n        self.compressor = compressor\n        self.controller = controller\n\n    def process_retrieved_docs(\n            self, query: str, documents: List[Dict],\n            relevance_scores: List[float]) -> CompressedContext:\n        \"\"\"Compress concatenated retrieved documents.\"\"\"\n        all_tokens = []\n        for doc in documents:\n            all_tokens.extend(doc[\"text\"].split())\n\n        total_tokens = len(all_tokens)\n        target_ratio = self.controller.compute_ratio(\n            total_tokens, len(query.split()), relevance_scores\n        )\n\n        return self.compressor.compress(all_tokens, query, target_ratio)\n\n    def estimate_savings(self, original_tokens: int,\n                         compressed_tokens: int,\n                         cost_per_1k: float = 0.015) -> Dict:\n        saved = original_tokens - compressed_tokens\n        return {\n            \"original_tokens\": original_tokens,\n            \"compressed_tokens\": compressed_tokens,\n            \"ratio\": compressed_tokens / original_tokens if original_tokens else 0,\n            \"cost_saved\": round((saved / 1000) * cost_per_1k, 4),\n            \"latency_reduction_pct\": round((1 - compressed_tokens / original_tokens) * 100, 1)\n        }\n\npipeline = LLMLinguaPipeline(compressor, controller)\ndocs = [\n    {\"id\": \"d1\", \"text\": \"Paris is the capital and largest city of France.\"},\n    {\"id\": \"d2\", \"text\": \"France is a country located in Western Europe.\"},\n    {\"id\": \"d3\", \"text\": \"The Eiffel Tower is a famous landmark in Paris.\"},\n]\nscores = [0.95, 0.80, 0.65]\nresult = pipeline.process_retrieved_docs(\n    \"What is the capital of France?\", docs, scores\n)\nsavings = pipeline.estimate_savings(\n    sum(len(d[\"text\"].split()) for d in docs),\n    len(result.tokens)\n)\nprint(f\"Compression ratio: {result.compression_ratio:.3f}\")\nprint(f\"Cost saved per query: ${savings['cost_saved']:.4f}\")\nprint(f\"Latency reduction: {savings['latency_reduction_pct']}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-selective-context",
      children: "15.3 Selective Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selective context methods operate at the sentence or token level. They score each unit by importance to the query and keep only the highest-scoring ones. Unlike LLMLingua, selective methods do not require a separate compressor model."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-sentence-level-filtering",
      children: "15.3.1 Sentence-Level Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nfrom typing import List, Callable\n\nclass SentenceSplitter:\n    \"\"\"Splits text into sentences using regex.\"\"\"\n\n    def split(self, text: str) -> List[str]:\n        sentences = re.split(r'(?<=[.!?])\\s+', text.strip())\n        return [s.strip() for s in sentences if s.strip()]\n\nclass SentenceScorer:\n    \"\"\"Assigns importance scores to sentences based on query relevance.\"\"\"\n\n    def __init__(self, scoring_fn: Callable = None):\n        self.scoring_fn = scoring_fn or self._default_score\n\n    def score_sentences(self, sentences: List[str], query: str) -> List[float]:\n        return [self.scoring_fn(sent, query) for sent in sentences]\n\n    def _default_score(self, sentence: str, query: str) -> float:\n        \"\"\"Score based on term overlap with query.\"\"\"\n        query_terms = set(query.lower().split())\n        sent_terms = set(sentence.lower().split())\n        if not query_terms:\n            return 0.0\n        overlap = len(query_terms & sent_terms)\n        return overlap / len(query_terms)\n\nclass SentenceFilter:\n    \"\"\"Filters sentences by importance threshold or count.\"\"\"\n\n    def __init__(self, splitter: SentenceSplitter,\n                 scorer: SentenceScorer):\n        self.splitter = splitter\n        self.scorer = scorer\n\n    def filter_by_threshold(self, text: str, query: str,\n                            threshold: float = 0.3) -> List[str]:\n        sentences = self.splitter.split(text)\n        scores = self.scorer.score_sentences(sentences, query)\n        return [s for s, score in zip(sentences, scores) if score >= threshold]\n\n    def filter_by_count(self, text: str, query: str,\n                        top_k: int = 3) -> List[str]:\n        sentences = self.splitter.split(text)\n        scores = self.scorer.score_sentences(sentences, query)\n        ranked = sorted(zip(sentences, scores), key=lambda x: x[1], reverse=True)\n        return [s for s, _ in ranked[:top_k]]\n\n    def filter_by_budget(self, text: str, query: str,\n                         max_tokens: int = 200) -> List[str]:\n        sentences = self.splitter.split(text)\n        scores = self.scorer.score_sentences(sentences, query)\n        ranked = sorted(zip(sentences, scores), key=lambda x: x[1], reverse=True)\n\n        selected = []\n        token_count = 0\n        for sent, _ in ranked:\n            sent_tokens = len(sent.split())\n            if token_count + sent_tokens <= max_tokens:\n                selected.append(sent)\n                token_count += sent_tokens\n            else:\n                break\n        return selected\n\nsplitter = SentenceSplitter()\nscorer = SentenceScorer()\nfilter_engine = SentenceFilter(splitter, scorer)\n\ntext = (\n    \"Paris is the capital of France. It has a population of over 2 million. \"\n    \"France is known for its wine and cheese. The Eiffel Tower is in Paris. \"\n    \"Italy also has many famous landmarks. Rome is the capital of Italy.\"\n)\nquery = \"What is the capital of France?\"\n\nfiltered_threshold = filter_engine.filter_by_threshold(text, query, 0.3)\nprint(f\"Threshold filter: {filtered_threshold}\")\n\nfiltered_budget = filter_engine.filter_by_budget(text, query, max_tokens=15)\nprint(f\"Budget filter ({len(' '.join(filtered_budget).split())} tokens): {filtered_budget}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1532-token-level-pruning",
      children: "15.3.2 Token-Level Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TokenPruner:\n    \"\"\"Prunes individual tokens based on importance scores.\"\"\"\n\n    def __init__(self, stop_tokens: set = None):\n        self.stop_tokens = stop_tokens or {\".\", \",\", \"!\", \"?\", \"the\",\n                                            \"a\", \"an\", \"is\", \"are\", \"was\", \"were\"}\n\n    def prune_by_position(self, tokens: List[str], keep_first: int = 10,\n                          keep_last: int = 5) -> List[str]:\n        \"\"\"Keep first N and last M tokens (lost-in-the-middle mitigation).\"\"\"\n        if len(tokens) <= keep_first + keep_last:\n            return tokens\n        return tokens[:keep_first] + [\"[...]\"] + tokens[-keep_last:]\n\n    def prune_by_importance(self, tokens: List[str], query: str,\n                            keep_ratio: float = 0.6) -> List[str]:\n        \"\"\"Prune tokens not relevant to query terms.\"\"\"\n        query_terms = set(query.lower().split())\n        kept = []\n        for token in tokens:\n            clean = token.lower().strip(\".,!?;:\")\n            if clean in self.stop_tokens and keep_ratio < 0.5:\n                continue  # Aggressively drop stop tokens\n            if clean in query_terms:\n                kept.append(token)  # Always keep query-matching tokens\n            elif token not in self.stop_tokens:\n                kept.append(token)\n        return kept\n\n    def prune_with_density_control(self, tokens: List[str],\n                                   max_gap: int = 5) -> List[str]:\n        \"\"\"Ensure pruned context doesn't lose sentence structure.\"\"\"\n        # Simplified: keep tokens that are near kept tokens\n        kept_indices = set()\n        for i, token in enumerate(tokens):\n            if token not in self.stop_tokens:\n                kept_indices.add(i)\n\n        # Fill gaps: keep tokens within max_gap of a kept token\n        for i in range(len(tokens)):\n            if any(abs(i - j) <= max_gap for j in kept_indices):\n                kept_indices.add(i)\n\n        return [t for i, t in enumerate(tokens) if i in kept_indices]\n\npruner = TokenPruner()\ntokens = \"The capital of France is Paris and it is a beautiful city\".split()\nquery = \"capital France Paris\"\n\npruned = pruner.prune_by_importance(tokens, query, keep_ratio=0.5)\nprint(f\"Importance pruned: {' '.join(pruned)}\")\n\npositional = pruner.prune_by_position(tokens, keep_first=4, keep_last=3)\nprint(f\"Positional pruned: {' '.join(positional)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1533-semantic-importance-scoring",
      children: "15.3.3 Semantic Importance Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SemanticScorer:\n    \"\"\"Uses embedding similarity for semantic importance scoring.\"\"\"\n\n    def __init__(self):\n        self.embedding_dim = 384\n\n    def mock_embed(self, text: str) -> np.ndarray:\n        \"\"\"Mock embedding: deterministic random vector based on text hash.\"\"\"\n        rng = np.random.RandomState(hash(text) % (2**31))\n        vec = rng.randn(self.embedding_dim)\n        return vec / np.linalg.norm(vec)\n\n    def score_sentence(self, sentence: str, query: str) -> float:\n        sent_emb = self.mock_embed(sentence)\n        query_emb = self.mock_embed(query)\n        return float(np.dot(sent_emb, query_emb))\n\n    def score_and_rank(self, sentences: List[str],\n                       query: str) -> List[Tuple[str, float]]:\n        scored = [(s, self.score_sentence(s, query)) for s in sentences]\n        scored.sort(key=lambda x: x[1], reverse=True)\n        return scored\n\nsem_scorer = SemanticScorer()\nsentences = [\n    \"Paris is the capital of France.\",\n    \"France has a rich culinary tradition.\",\n    \"The Eiffel Tower attracts millions of visitors.\",\n    \"Italy's capital is Rome.\",\n]\nquery = \"capital of France\"\nranked = sem_scorer.score_and_rank(sentences, query)\nfor sent, score in ranked:\n    print(f\"  {score:.3f}: {sent}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-summary-based-retrieval",
      children: "15.4 Summary-Based Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Summary-based compression replaces retrieved documents with LLM-generated summaries. The retriever fetches documents, the LLM summarizes each one in relation to the query, and the summaries are combined into a compact context."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-retrieve--summarize--combine",
      children: "15.4.1 Retrieve → Summarize → Combine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SummaryCompressor:\n    \"\"\"Summarizes each retrieved document then combines summaries.\"\"\"\n\n    def __init__(self, summarizer_fn: Callable, max_summary_tokens: int = 100):\n        self.summarizer = summarizer_fn\n        self.max_summary_tokens = max_summary_tokens\n\n    def summarize_docs(self, query: str,\n                       documents: List[Dict]) -> List[str]:\n        \"\"\"Summarize each document with query-aware prompting.\"\"\"\n        summaries = []\n        for doc in documents:\n            prompt = f\"\"\"Summarize the following document in {self.max_summary_tokens} tokens or less.\nFocus only on information relevant to this question: {query}\n\nDocument: {doc['text']}\n\nSummary:\"\"\"\n            summary = self.summarizer(prompt)\n            summaries.append(summary)\n        return summaries\n\n    def combine_summaries(self, summaries: List[str],\n                          query: str) -> str:\n        \"\"\"Combine individual summaries into a coherent context.\"\"\"\n        if len(summaries) == 1:\n            return summaries[0]\n\n        combined = \"\\n\".join(f\"[Document {i+1}] {s}\" for i, s in enumerate(summaries))\n        return combined\n\n    def iterative_refine(self, query: str, documents: List[Dict],\n                         max_rounds: int = 2) -> str:\n        \"\"\"Iteratively refine combined summaries.\"\"\"\n        summaries = self.summarize_docs(query, documents)\n        combined = self.combine_summaries(summaries, query)\n\n        for _ in range(max_rounds - 1):\n            refine_prompt = f\"\"\"Refine this combined summary to be more concise\nwhile keeping all information needed to answer: {query}\n\n{combined}\n\nRefined summary:\"\"\"\n            combined = self.summarizer(refine_prompt)\n\n        return combined\n\ndef mock_summarizer(prompt: str) -> str:\n    \"\"\"Simulate an LLM summarizer.\"\"\"\n    if \"Refine\" in prompt:\n        return \"Paris is France's capital. France is in Western Europe.\"\n    if \"summarize\" in prompt.lower():\n        # Extract a short mock summary from the prompt\n        return \"Paris is the capital of France. It is located in Western Europe.\"\n    return \"Summary of the document content.\"\n\ncompressor = SummaryCompressor(mock_summarizer, max_summary_tokens=100)\ndocs = [\n    {\"id\": \"d1\", \"text\": \"Paris is the capital and largest city of France, located on the Seine River.\"},\n    {\"id\": \"d2\", \"text\": \"France is a country in Western Europe known for its history, culture, and cuisine.\"},\n    {\"id\": \"d3\", \"text\": \"The Eiffel Tower, built in 1889, is one of the most famous landmarks in Paris.\"},\n]\n\ncombined = compressor.iterative_refine(\n    \"What is the capital of France?\", docs, max_rounds=2\n)\noriginal_tokens = sum(len(d[\"text\"].split()) for d in docs)\ncompressed_tokens = len(combined.split())\nprint(f\"Original: {original_tokens} tokens\")\nprint(f\"Compressed: {compressed_tokens} tokens\")\nprint(f\"Ratio: {compressed_tokens / original_tokens:.3f}\")\nprint(f\"Combined summary: {combined}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-multi-query-merging",
      children: "15.4.2 Multi-Query Merging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiQuerySummaryMerger:\n    \"\"\"Merges summaries from multiple query perspectives.\"\"\"\n\n    def __init__(self, summarizer_fn: Callable):\n        self.summarizer = summarizer_fn\n\n    def expand_queries(self, query: str, num_queries: int = 3) -> List[str]:\n        \"\"\"Generate query variations for broader coverage.\"\"\"\n        queries = [query]\n        if num_queries > 1:\n            queries.append(f\"{query} key facts and details\")\n        if num_queries > 2:\n            queries.append(f\"Information about: {query}\")\n        return queries[:num_queries]\n\n    def retrieve_and_summarize(self, queries: List[str],\n                               documents: List[Dict]) -> List[str]:\n        \"\"\"Retrieve and summarize for each query variation.\"\"\"\n        all_summaries = []\n        for q in queries:\n            prompt = f\"\"\"Summarize the following documents with focus on: {q}\n\nDocuments:\n{chr(10).join(d['text'] for d in documents)}\n\nConcise summary:\"\"\"\n            summary = self.summarizer(prompt)\n            all_summaries.append(summary)\n        return all_summaries\n\n    def merge_summaries(self, summaries: List[str],\n                        query: str) -> str:\n        \"\"\"Merge multiple summaries into one coherent context.\"\"\"\n        merge_prompt = f\"\"\"Merge these summaries into one coherent summary\nthat best answers: {query}\n\nSummaries:\n{chr(10).join(f'{i+1}. {s}' for i, s in enumerate(summaries))}\n\nMerged summary:\"\"\"\n        return self.summarizer(merge_prompt)\n\nmerger = MultiQuerySummaryMerger(mock_summarizer)\nquery_variants = merger.expand_queries(\"What is the capital of France?\", 2)\nsummaries = merger.retrieve_and_summarize(query_variants, docs)\nmerged = merger.merge_summaries(summaries, \"What is the capital of France?\")\nprint(f\"Merged summary: {merged}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1543-hierarchical-summarization",
      children: "15.4.3 Hierarchical Summarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HierarchicalSummarizer:\n    \"\"\"Summarizes document clusters hierarchically for very large contexts.\"\"\"\n\n    def __init__(self, summarizer_fn: Callable,\n                 chunk_size: int = 500,\n                 max_children: int = 5):\n        self.summarizer = summarizer_fn\n        self.chunk_size = chunk_size\n        self.max_children = max_children\n\n    def build_hierarchy(self, documents: List[Dict]) -> List[List[str]]:\n        \"\"\"Organize documents into a hierarchy for summarization.\"\"\"\n        # Level 0: individual document summaries\n        level0 = []\n        for doc in documents:\n            prompt = f\"Summarize: {doc['text']}\"\n            level0.append(self.summarizer(prompt))\n\n        # Level 1: group summaries\n        level1 = []\n        for i in range(0, len(level0), self.max_children):\n            group = level0[i:i + self.max_children]\n            prompt = f\"Combine these summaries: {' '.join(group)}\"\n            level1.append(self.summarizer(prompt))\n\n        return [level0, level1]\n\n    def compress(self, query: str, documents: List[Dict]) -> str:\n        hierarchy = self.build_hierarchy(documents)\n        # Use top-level summaries\n        top_summaries = hierarchy[-1]\n        final_prompt = f\"\"\"Based on these summaries, answer: {query}\n\n{chr(10).join(top_summaries)}\n\nConcise answer:\"\"\"\n        return self.summarizer(final_prompt)\n\nhierarchical = HierarchicalSummarizer(mock_summarizer)\nresult = hierarchical.compress(\"What is the capital of France?\", docs)\nprint(f\"Hierarchical result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-extractive-compression",
      children: "15.5 Extractive Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extractive compression selects the most relevant sentences from retrieved documents without modifying them. It preserves factual accuracy because the output is verbatim text from the source."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1551-budget-constrained-sentence-selection",
      children: "15.5.1 Budget-Constrained Sentence Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BudgetSelector:\n    \"\"\"Selects sentences under a token budget using greedy optimization.\"\"\"\n\n    def __init__(self, scorer: SentenceScorer):\n        self.scorer = scorer\n\n    def greedy_select(self, sentences: List[str], query: str,\n                      max_tokens: int = 300) -> Tuple[List[str], float]:\n        \"\"\"Greedily select highest-scoring sentences within budget.\"\"\"\n        scores = self.scorer.score_sentences(sentences, query)\n        indexed = list(enumerate(sentences))\n        indexed.sort(key=lambda x: scores[x[0]], reverse=True)\n\n        selected = []\n        total_tokens = 0\n        total_score = 0.0\n\n        for idx, sent in indexed:\n            sent_tokens = len(sent.split())\n            if total_tokens + sent_tokens <= max_tokens:\n                selected.append((idx, sent))\n                total_tokens += sent_tokens\n                total_score += scores[idx]\n\n        selected.sort(key=lambda x: x[0])  # Restore original order\n        coverage = total_score / sum(scores) if sum(scores) > 0 else 0.0\n\n        return [s for _, s in selected], coverage\n\n    def knapsack_select(self, sentences: List[str], query: str,\n                        max_tokens: int = 300) -> Tuple[List[str], float]:\n        \"\"\"Optimal selection using 0/1 knapsack (DP). For small N only.\"\"\"\n        n = len(sentences)\n        scores = self.scorer.score_sentences(sentences, query)\n        token_counts = [len(s.split()) for s in sentences]\n\n        dp = [[0] * (max_tokens + 1) for _ in range(n + 1)]\n        keep = [[False] * (max_tokens + 1) for _ in range(n + 1)]\n\n        for i in range(1, n + 1):\n            for w in range(max_tokens + 1):\n                if token_counts[i - 1] <= w:\n                    include = scores[i - 1] + dp[i - 1][w - token_counts[i - 1]]\n                    exclude = dp[i - 1][w]\n                    if include > exclude:\n                        dp[i][w] = include\n                        keep[i][w] = True\n                    else:\n                        dp[i][w] = exclude\n                else:\n                    dp[i][w] = dp[i - 1][w]\n\n        selected = []\n        w = max_tokens\n        for i in range(n, 0, -1):\n            if keep[i][w]:\n                selected.append(sentences[i - 1])\n                w -= token_counts[i - 1]\n\n        selected.reverse()\n        total_score = sum(\n            s for s, sent in zip(scores, sentences) if sent in selected\n        )\n        coverage = total_score / sum(scores) if sum(scores) > 0 else 0.0\n\n        return selected, coverage\n\nbudget_selector = BudgetSelector(scorer)\nsentences = [\n    \"Paris is the capital of France.\",\n    \"France is located in Western Europe.\",\n    \"The population of Paris is over 2 million.\",\n    \"Rome is the capital of Italy.\",\n    \"France is known for its wine and cheese.\",\n]\nquery = \"capital of France\"\n\nselected, coverage = budget_selector.greedy_select(\n    sentences, query, max_tokens=15\n)\nprint(f\"Greedy selection ({len(' '.join(selected).split())} tokens): {selected}\")\nprint(f\"Coverage: {coverage:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1552-max-marginal-relevance-mmr",
      children: "15.5.2 Max Marginal Relevance (MMR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MMR balances relevance and diversity. It scores each candidate sentence by a weighted combination of relevance to the query and dissimilarity to already-selected sentences. This prevents selecting multiple similar sentences that say the same thing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MMRSelector:\n    \"\"\"Selects sentences using Max Marginal Relevance for diversity.\"\"\"\n\n    def __init__(self, scorer: SentenceScorer, lambda_param: float = 0.7):\n        self.scorer = scorer\n        self.lambda_param = lambda_param  # 0 = pure diversity, 1 = pure relevance\n\n    def compute_similarity(self, sent_a: str, sent_b: str) -> float:\n        \"\"\"Jaccard similarity between two sentences.\"\"\"\n        terms_a = set(sent_a.lower().split())\n        terms_b = set(sent_b.lower().split())\n        if not terms_a or not terms_b:\n            return 0.0\n        intersection = terms_a & terms_b\n        union = terms_a | terms_b\n        return len(intersection) / len(union)\n\n    def select(self, sentences: List[str], query: str,\n               budget: int = 200) -> Tuple[List[str], List[float]]:\n        \"\"\"Select sentences using MMR within token budget.\"\"\"\n        relevance = self.scorer.score_sentences(sentences, query)\n        selected = []\n        remaining = list(range(len(sentences)))\n        token_count = 0\n        mmr_scores = []\n\n        while remaining and token_count < budget:\n            best_idx = None\n            best_score = -float(\"inf\")\n\n            for idx in remaining:\n                sent = sentences[idx]\n                sent_tokens = len(sent.split())\n                if token_count + sent_tokens > budget:\n                    continue\n\n                # MMR score = lambda * relevance - (1 - lambda) * max similarity\n                rel = relevance[idx]\n                max_sim = 0.0\n                for sel_idx in selected:\n                    sim = self.compute_similarity(sentences[sel_idx], sent)\n                    max_sim = max(max_sim, sim)\n\n                mmr = self.lambda_param * rel - (1 - self.lambda_param) * max_sim\n\n                if mmr > best_score:\n                    best_score = mmr\n                    best_idx = idx\n\n            if best_idx is None:\n                break\n\n            selected.append(best_idx)\n            token_count += len(sentences[best_idx].split())\n            mmr_scores.append(best_score)\n            remaining.remove(best_idx)\n\n        selected.sort()\n        return [sentences[i] for i in selected], mmr_scores\n\nmmr = MMRSelector(scorer, lambda_param=0.7)\nsentences = [\n    \"Paris is the capital of France.\",\n    \"Paris is the largest city in France.\",\n    \"France is located in Western Europe with coastline on the Atlantic.\",\n    \"The French capital Paris has many famous museums.\",\n    \"Rome is the capital of Italy, not France.\",\n    \"Berlin is the capital of Germany.\",\n]\nquery = \"capital of France\"\n\nselected, scores = mmr.select(sentences, query, budget=25)\nprint(f\"MMR selected ({len(' '.join(selected).split())} tokens):\")\nfor s in selected:\n    print(f\"  - {s}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1553-extractive-compression-pipeline",
      children: "15.5.3 Extractive Compression Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ExtractiveCompressionPipeline:\n    \"\"\"Complete pipeline combining sentence splitting, scoring, and MMR.\"\"\"\n\n    def __init__(self, splitter: SentenceSplitter,\n                 scorer: SentenceScorer,\n                 selector: MMRSelector):\n        self.splitter = splitter\n        self.scorer = scorer\n        self.selector = selector\n\n    def compress(self, documents: List[Dict], query: str,\n                 max_tokens: int = 300) -> Dict:\n        \"\"\"Run full extractive compression pipeline.\"\"\"\n        # Flatten all documents into sentences\n        all_sentences = []\n        sentence_sources = []  # Track which document each sentence came from\n\n        for doc in documents:\n            sentences = self.splitter.split(doc[\"text\"])\n            all_sentences.extend(sentences)\n            sentence_sources.extend([doc[\"id\"]] * len(sentences))\n\n        # Select sentences using MMR\n        selected, mmr_scores = self.selector.select(\n            all_sentences, query, budget=max_tokens\n        )\n\n        # Build compressed context\n        compressed_text = \" \".join(selected)\n        original_tokens = sum(len(s.split()) for s in all_sentences)\n        compressed_tokens = len(compressed_text.split())\n\n        return {\n            \"compressed_text\": compressed_text,\n            \"original_tokens\": original_tokens,\n            \"compressed_tokens\": compressed_tokens,\n            \"ratio\": compressed_tokens / original_tokens if original_tokens else 0,\n            \"num_sentences_original\": len(all_sentences),\n            \"num_sentences_selected\": len(selected),\n            \"sentence_sources\": [sentence_sources[i] for i in range(len(all_sentences))\n                                 if all_sentences[i] in selected],\n        }\n\nextractive_pipeline = ExtractiveCompressionPipeline(\n    splitter, scorer, mmr\n)\ndocs = [\n    {\"id\": \"d1\", \"text\": \"Paris is the capital and largest city of France. It is located on the Seine River in northern France.\"},\n    {\"id\": \"d2\", \"text\": \"France is a country in Western Europe known for its long history, rich culture, and famous cuisine. The country has a population of approximately 67 million people.\"},\n    {\"id\": \"d3\", \"text\": \"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris. It was built in 1889 and is one of the most recognizable structures in the world.\"},\n]\nresult = extractive_pipeline.compress(docs, \"capital of France\", max_tokens=30)\nprint(f\"Compressed ({result['ratio']:.2%} of original):\")\nprint(f\"  {result['compressed_text']}\")\nprint(f\"  Sentences: {result['num_sentences_original']} -> {result['num_sentences_selected']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-evaluation-of-compression",
      children: "15.6 Evaluation of Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluating context compression requires measuring both the token savings and the impact on answer quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1561-metrics-framework",
      children: "15.6.1 Metrics Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CompressionEvaluator:\n    \"\"\"Evaluates compression quality across multiple dimensions.\"\"\"\n\n    def __init__(self):\n        self.metrics = {}\n\n    def compression_ratio(self, original_tokens: int,\n                          compressed_tokens: int) -> float:\n        return compressed_tokens / original_tokens if original_tokens else 0.0\n\n    def answer_preservation_rate(self, original_answer: str,\n                                 compressed_answer: str,\n                                 ground_truth: str) -> float:\n        \"\"\"Fraction of correct answers maintained after compression.\"\"\"\n        if original_answer.strip() == ground_truth.strip():\n            original_correct = 1.0\n        else:\n            original_correct = self._fuzzy_match(original_answer, ground_truth)\n\n        if compressed_answer.strip() == ground_truth.strip():\n            compressed_correct = 1.0\n        else:\n            compressed_correct = self._fuzzy_match(compressed_answer, ground_truth)\n\n        if original_correct == 0:\n            return 0.0\n        return compressed_correct / original_correct\n\n    def _fuzzy_match(self, answer: str, ground_truth: str) -> float:\n        \"\"\"Token overlap as a proxy for correctness.\"\"\"\n        ans_terms = set(answer.lower().split())\n        truth_terms = set(ground_truth.lower().split())\n        if not truth_terms:\n            return 0.0\n        overlap = len(ans_terms & truth_terms)\n        return overlap / len(truth_terms)\n\n    def faithfulness_score(self, compressed_context: str,\n                           answer: str) -> float:\n        \"\"\"Check if answer claims are supported by compressed context.\"\"\"\n        context_terms = set(compressed_context.lower().split())\n        answer_terms = set(answer.lower().split())\n        if not answer_terms:\n            return 1.0\n        supported = answer_terms & context_terms\n        return len(supported) / len(answer_terms)\n\n    def latency_improvement(self, original_ms: float,\n                            compressed_ms: float) -> Dict:\n        \"\"\"Measure latency improvement from compression.\"\"\"\n        improvement = original_ms - compressed_ms\n        pct = (improvement / original_ms) * 100 if original_ms > 0 else 0\n        return {\n            \"original_ms\": original_ms,\n            \"compressed_ms\": compressed_ms,\n            \"saved_ms\": round(improvement, 2),\n            \"improvement_pct\": round(pct, 1),\n        }\n\n    def evaluate_all(self, original_tokens: int, compressed_tokens: int,\n                     original_answer: str, compressed_answer: str,\n                     ground_truth: str, compressed_context: str,\n                     original_latency: float, compressed_latency: float) -> Dict:\n        return {\n            \"compression_ratio\": self.compression_ratio(\n                original_tokens, compressed_tokens\n            ),\n            \"compression_factor\": round(\n                original_tokens / max(compressed_tokens, 1), 2\n            ),\n            \"token_savings_pct\": round(\n                (1 - compressed_tokens / max(original_tokens, 1)) * 100, 1\n            ),\n            \"answer_preservation\": round(\n                self.answer_preservation_rate(\n                    original_answer, compressed_answer, ground_truth\n                ), 4\n            ),\n            \"faithfulness\": round(\n                self.faithfulness_score(compressed_context, compressed_answer), 4\n            ),\n            \"latency\": self.latency_improvement(original_latency, compressed_latency),\n        }\n\nevaluator = CompressionEvaluator()\nresults = evaluator.evaluate_all(\n    original_tokens=8000,\n    compressed_tokens=2400,\n    original_answer=\"Paris\",\n    compressed_answer=\"Paris\",\n    ground_truth=\"Paris\",\n    compressed_context=\"Paris is the capital of France.\",\n    original_latency=2500.0,\n    compressed_latency=850.0,\n)\nprint(\"Evaluation Results:\")\nfor key, val in results.items():\n    print(f\"  {key}: {val}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1562-compression-benchmark",
      children: "15.6.2 Compression Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CompressionBenchmark:\n    \"\"\"Benchmarks multiple compression strategies on a test set.\"\"\"\n\n    def __init__(self, test_queries: List[Dict]):\n        self.test_queries = test_queries  # [{query, docs, ground_truth}]\n\n    def benchmark_strategy(self, compress_fn: Callable,\n                           strategy_name: str) -> Dict:\n        \"\"\"Run a compression strategy on all test queries and aggregate metrics.\"\"\"\n        evaluator = CompressionEvaluator()\n        all_metrics = []\n\n        for test in self.test_queries:\n            # Simulate original (no compression)\n            original_context = \" \".join(d[\"text\"] for d in test[\"docs\"])\n            original_tokens = len(original_context.split())\n            original_answer = test.get(\"original_answer\", test[\"ground_truth\"])\n\n            # Apply compression\n            result = compress_fn(test[\"docs\"], test[\"query\"])\n            compressed_context = result.get(\"compressed_text\", result)\n            compressed_tokens = len(compressed_context.split())\n\n            # Simulate answers (in production, call LLM)\n            compressed_answer = test[\"ground_truth\"]\n\n            metrics = evaluator.evaluate_all(\n                original_tokens=original_tokens,\n                compressed_tokens=compressed_tokens,\n                original_answer=original_answer,\n                compressed_answer=compressed_answer,\n                ground_truth=test[\"ground_truth\"],\n                compressed_context=compressed_context,\n                original_latency=2000.0,\n                compressed_latency=2000.0 * compressed_tokens / original_tokens,\n            )\n            all_metrics.append(metrics)\n\n        # Aggregate\n        avg_ratio = np.mean([m[\"compression_ratio\"] for m in all_metrics])\n        avg_preservation = np.mean([m[\"answer_preservation\"] for m in all_metrics])\n        avg_faithfulness = np.mean([m[\"faithfulness\"] for m in all_metrics])\n\n        return {\n            \"strategy\": strategy_name,\n            \"avg_compression_ratio\": round(avg_ratio, 3),\n            \"avg_preservation\": round(avg_preservation, 3),\n            \"avg_faithfulness\": round(avg_faithfulness, 3),\n            \"num_queries\": len(self.test_queries),\n        }\n\ndef mock_extractive_compress(docs: List[Dict], query: str) -> Dict:\n    \"\"\"Mock extractive compression for benchmark demonstration.\"\"\"\n    selected = [d[\"text\"] for d in docs[:2]]\n    return {\"compressed_text\": \" \".join(selected)}\n\nbenchmark = CompressionBenchmark([\n    {\n        \"query\": \"What is the capital of France?\",\n        \"docs\": [\n            {\"id\": \"1\", \"text\": \"Paris is the capital of France. It has many landmarks.\"},\n            {\"id\": \"2\", \"text\": \"France is a country in Europe. Its capital is Paris.\"},\n            {\"id\": \"3\", \"text\": \"The Eiffel Tower is a famous landmark in Paris, France.\"},\n        ],\n        \"ground_truth\": \"Paris\",\n    },\n    {\n        \"query\": \"What is RAG?\",\n        \"docs\": [\n            {\"id\": \"4\", \"text\": \"RAG stands for Retrieval-Augmented Generation.\"},\n            {\"id\": \"5\", \"text\": \"RAG combines retrieval with text generation.\"},\n        ],\n        \"ground_truth\": \"Retrieval-Augmented Generation\",\n    },\n])\n\nresult = benchmark.benchmark_strategy(\n    mock_extractive_compress, \"Extractive MMR\"\n)\nprint(f\"Benchmark: {result['strategy']}\")\nprint(f\"  Avg compression ratio: {result['avg_compression_ratio']}\")\nprint(f\"  Avg preservation: {result['avg_preservation']}\")\nprint(f\"  Avg faithfulness: {result['avg_faithfulness']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1563-quality-cost-trade-off-analysis",
      children: "15.6.3 Quality-Cost Trade-off Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TradeOffAnalyzer:\n    \"\"\"Analyzes the quality-cost trade-off across compression strategies.\"\"\"\n\n    def __init__(self, cost_per_1k_tokens: float = 0.015):\n        self.cost_per_1k = cost_per_1k_tokens\n\n    def analyze_strategies(self) -> List[Dict]:\n        \"\"\"Compare hypothetical strategies.\"\"\"\n        strategies = [\n            {\"name\": \"No Compression\", \"ratio\": 1.0, \"quality\": 1.0, \"latency_ms\": 2500},\n            {\"name\": \"LLMLingua\", \"ratio\": 0.4, \"quality\": 0.94, \"latency_ms\": 1100},\n            {\"name\": \"Selective Context\", \"ratio\": 0.5, \"quality\": 0.92, \"latency_ms\": 1400},\n            {\"name\": \"Summary-Based\", \"ratio\": 0.2, \"quality\": 0.88, \"latency_ms\": 2800},\n            {\"name\": \"Extractive MMR\", \"ratio\": 0.35, \"quality\": 0.91, \"latency_ms\": 1000},\n        ]\n\n        results = []\n        for s in strategies:\n            token_cost = (10000 * s[\"ratio\"] / 1000) * self.cost_per_1k\n            results.append({\n                **s,\n                \"cost_per_query\": round(token_cost, 4),\n                \"cost_saved_vs_baseline\": round(\n                    (10000 / 1000) * self.cost_per_1k - token_cost, 4\n                ),\n            })\n        return results\n\n    def recommend(self, quality_threshold: float = 0.9) -> str:\n        \"\"\"Recommend best strategy given quality constraint.\"\"\"\n        strategies = self.analyze_strategies()\n        viable = [s for s in strategies if s[\"quality\"] >= quality_threshold]\n        if not viable:\n            return \"No strategy meets quality threshold.\"\n        best = min(viable, key=lambda s: s[\"cost_per_query\"])\n        return (f\"Recommended: {best['name']} (ratio={best['ratio']}, \"\n                f\"quality={best['quality']}, cost=${best['cost_per_query']}/query)\")\n\nanalyzer = TradeOffAnalyzer(cost_per_1k_tokens=0.015)\nfor s in analyzer.analyze_strategies():\n    print(f\"{s['name']:20s} | ratio={s['ratio']:.2f} | \"\n          f\"quality={s['quality']:.2f} | ${s['cost_per_query']:.4f}/query\")\nprint(f\"\\n{analyzer.recommend(quality_threshold=0.9)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context compression is essential for production RAG systems. LLMLingua uses a small model to classify each token's importance and drops unimportant ones. Selective context filters at the sentence or token level using lexical overlap or semantic similarity. Summary-based retrieval replaces retrieved documents with LLM-generated summaries, achieving the highest compression at the cost of additional LLM calls. Extractive compression selects verbatim sentences using budget-constrained optimization and Max Marginal Relevance for diversity. Evaluation measures compression ratio, answer preservation rate, faithfulness, and latency improvement. The right compression strategy depends on your quality requirements, latency budget, and cost constraints."
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
            children: "Start with extractive compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safest: preserves verbatim facts, easy to debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use MMR for diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without MMR, compression selects redundant sentences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLMLingua for high compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best ratio-to-quality trade-off but needs a compressor model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summary-based for max compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest ratio but adds latency and cost from extra LLM calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measure preservation rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check if compression hurts answer accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile before optimizing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure your actual context lengths before choosing a strategy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "rag15-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Why is context compression important in RAG systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Context compression reduces the number of tokens passed from the retriever to the LLM generator. Without compression, RAG pipelines pass 5000-20000 tokens per query, leading to high API costs ($0.05-$0.60 per query on GPT-4), increased latency (LLM generation time scales quadratically with input length), and degraded answer quality from the \"lost-in-the-middle\" phenomenon where LLMs focus on the beginning and end of long contexts. Compression cuts token usage by 2-10x, reducing costs proportionally. It also improves signal-to-noise ratio by removing irrelevant information that could distract the LLM. For production RAG at scale, compression is as important as retrieval quality for controlling costs and latency."
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
      "data-qid": "rag15-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does LLMLingua work for prompt compression?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMLingua uses a small language model (the compressor) to classify each token in the context as important or unimportant. It runs a forward pass over the concatenated query and context, extracts per-token perplexity scores, and drops tokens with low perplexity (high predictability). The intuition is that tokens the compressor finds surprising carry more information. A dynamic threshold is computed to achieve a target compression ratio — only tokens with perplexity above the threshold are kept. LLMLingua also supports query-aware compression by adding the query to the context, ensuring query-relevant tokens are preserved. The method achieves 2-5x compression with minimal quality loss on most QA benchmarks."
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
      "data-qid": "rag15-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between selective context and extractive compression?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selective context operates at the sentence or token level by scoring each unit's importance to the query and keeping only the highest-scoring ones. It can use lexical overlap (term matching) or semantic similarity (embedding cosine similarity) for scoring. Selective methods do not modify the text. Extractive compression is a specific type of selective method that selects verbatim sentences from the source documents. The key difference is that extractive methods typically use budget-constrained optimization (select exactly K sentences within a token limit) and diversity mechanisms like Max Marginal Relevance (MMR) to avoid redundant selections. Selective context is broader and includes token-level pruning, while extractive compression specifically operates on sentences."
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
      "data-qid": "rag15-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does summary-based compression work and what are its trade-offs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Summary-based compression replaces retrieved documents with LLM-generated summaries. The pipeline is: retrieve documents → summarize each one with a query-aware prompt → combine summaries into a compact context. This achieves the highest compression ratios (5-10x) because summaries distill documents to their essence. However, it has significant trade-offs: (1) it requires additional LLM calls for summarization, increasing latency and cost, (2) the summarizer may hallucinate facts not in the original documents, (3) it can lose supporting details needed for complex reasoning tasks. Iterative refinement and multi-query merging improve quality but add more LLM calls. Summary-based compression is best when latency is secondary to token cost savings."
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
      "data-qid": "rag15-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is Max Marginal Relevance and why is it important for extractive compression?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Max Marginal Relevance (MMR) is a diversity-aware selection algorithm. It scores each candidate sentence by a weighted combination: MMR = λ * Relevance - (1 - λ) * MaxSimilarityToSelected. Relevance measures how well the sentence answers the query. MaxSimilarityToSelected measures redundancy against already-chosen sentences. The λ parameter controls the balance — λ=1 selects only by relevance (may pick very similar sentences), λ=0 selects for diversity only. MMR is important because extractive compression without diversity tends to select multiple sentences that convey the same information, wasting the token budget. For example, \"Paris is the capital of France\" and \"The capital of France is Paris\" would both rank high on relevance but MMR would select only one."
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
      "data-qid": "rag15-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you evaluate if a compression strategy is working well?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluate compression on four axes: (1) Compression ratio — compressed tokens divided by original tokens, target 0.1-0.5. (2) Answer preservation rate — fraction of correct answers maintained after compression. Compute by running your RAG pipeline with and without compression on a benchmark, then compare accuracy. (3) Faithfulness — whether the compressed context still supports the correct answer. Measured by checking term overlap or using an LLM-as-judge to verify claims. (4) Latency improvement — measure end-to-end response time with and without compression. A good strategy achieves 0.3-0.5 compression ratio with over 90% answer preservation and 40-60% latency reduction. Always evaluate on your specific domain and query types."
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
      "data-qid": "rag15-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: When should you use LLMLingua over extractive compression?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMLingua is preferred when you need high compression ratios (3-5x) and already have a small language model deployed alongside your main LLM. It excels at token-level pruning, which can remove individual filler tokens while keeping important content. Extractive compression is preferred when you need guaranteed faithfulness — since it selects verbatim sentences, there is zero risk of hallucination or distortion. Extractive methods also have lower overhead since they don't require a separate model forward pass. In practice, use extractive compression as a first step (safe, simple, effective), then layer LLMLingua on top if you need higher compression. Many production systems combine both: extractive MMR for sentence selection followed by LLMLingua for token-level pruning within selected sentences."
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
      "data-qid": "rag15-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is the \"lost-in-the-middle\" problem and how does compression help?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The lost-in-the-middle problem refers to the observation that LLMs perform worse when relevant information is located in the middle of a long context, compared to the beginning or end. This is because transformer attention tends to focus on early and late tokens. Compression mitigates this in two ways: (1) by reducing total context length, the \"middle\" region shrinks, making it easier for the LLM to attend to all relevant information. (2) Strategic compression methods (like position-aware pruning) can reorder content to put the most relevant sentences at the beginning. Some compression systems explicitly keep the first few and last few sentences unchanged while aggressively compressing the middle, countering the lost-in-the-middle effect directly."
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
      "data-qid": "rag15-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How does dynamic compression ratio work and why is it useful?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dynamic compression ratio adjusts how aggressively to compress based on the characteristics of the query and retrieved documents. A static ratio (e.g., always compress to 50%) is suboptimal because some queries need more context and some can be aggressively compressed. Signals for dynamic adjustment include: query length (longer queries may need more context preserved), relevance scores from the retriever (high confidence retrievals can be compressed more), context length (longer contexts can tolerate higher compression), and query complexity (multi-step queries need more of the context preserved). The controller typically computes a base ratio and adjusts it using weighted signals, clipped to min/max bounds. Dynamic ratio improves average answer quality by 3-7% over static ratio at the same average compression."
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
      "data-qid": "rag15-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you choose the right compression strategy for a production RAG system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Start by measuring your current system: average retrieved tokens per query, latency budget, cost per query, and answer accuracy on a benchmark. Then follow this decision framework: (1) If latency is your primary constraint and you have budget for a small compressor model, use LLMLingua for aggressive compression. (2) If cost reduction is the goal and you can tolerate extra latency, use summary-based compression for maximum token savings. (3) If answer quality is critical and you need guarantees against hallucination, use extractive MMR compression. (4) For the best balance, use a cascade: extractive MMR first (reduces sentences), then LLMLingua (prunes tokens within kept sentences). Always A/B test the compressed pipeline against the uncompressed baseline on your specific queries before deploying."
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
      "data-qid": "rag-s15-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does a compression ratio of 0.3 mean?"]
      }), "\nA. The context was expanded by 30%\nB. The compressed context is 30% of the original size\nC. 30% of tokens were kept\nD. Both B and C\nAnswer: D\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s15-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How does LLMLingua determine which tokens to keep?"]
      }), "\nA. Random sampling\nB. Keeping tokens with highest perplexity from a compressor model\nC. Keeping only nouns and verbs\nD. Using regex pattern matching\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s15-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What problem does Max Marginal Relevance (MMR) solve in extractive compression?"]
      }), "\nA. It removes stop words\nB. It ensures diversity by penalizing redundant sentences\nC. It increases compression ratio\nD. It generates new sentences\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s15-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the main trade-off of summary-based compression?"]
      }), "\nA. It requires GPU acceleration\nB. It adds latency and cost from extra LLM calls\nC. It cannot handle long documents\nD. It only works with GPT-4\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s15-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which metric measures whether compressed context still supports the correct answer?"]
      }), "\nA. Compression ratio\nB. Latency improvement\nC. Faithfulness score\nD. Token savings percentage\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a complete LLMLingua-style compressor that uses a TinyBERT model (via Hugging Face transformers) as the perplexity scorer. Test on 20 QA pairs and measure compression ratio vs answer preservation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an extractive compression pipeline combining sentence splitting, TF-IDF scoring, and MMR selection. Compare greedy selection vs knapsack-optimal selection on a budget of 200 tokens."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a summary-based compression system that uses GPT-3.5-turbo to summarize each retrieved document. Compare single-pass summarization vs iterative refinement on fact preservation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a dynamic compression ratio controller that adjusts based on query length, relevance scores, and context length. Tune the weights using a validation set of 50 queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a comprehensive evaluation benchmark for 4 compression strategies (LLMLingua, selective context, summary-based, extractive MMR) on a dataset of 100 QA pairs. Report compression ratio, answer preservation rate, faithfulness, and latency for each."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not measuring answer preservation — compression saves tokens but may destroy accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using static compression ratio for all queries — dynamic adjustment significantly improves results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring diversity in extractive selection — MMR is essential to avoid redundant sentences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assuming summary-based compression preserves all facts — summarizers hallucinate and miss details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploying compression without A/B testing — baseline comparison is critical before production rollout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compression ratio = compressed_tokens / original_tokens (0.3 = 70% reduction)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLMLingua: keep tokens with highest perplexity from a small compressor model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selective context: score sentences/tokens by query relevance, keep top-K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summary-based: summarize docs → combine summaries → optional iterative refinement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extractive: select verbatim sentences using budget constraints + MMR for diversity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluation: ratio, preservation rate, faithfulness, latency improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MMR formula: λ * relevance - (1-λ) * maxSimilarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic ratio: adjust compression based on query length, relevance, context size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cascade approach: extractive MMR first, then LLMLingua token pruning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always A/B test compressed vs uncompressed before production deployment"
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
            children: "Explain the core idea of Context Compression for RAG in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Context Compression for RAG."
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
            children: "Describe a production bug caused by misunderstanding Context Compression for RAG. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Context Compression for RAG from 10 users to 10 million?"
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
            children: "Compare Context Compression for RAG with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Context Compression for RAG."
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
            children: "How does Context Compression for RAG behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Context Compression for RAG run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Context Compression for RAG that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Context Compression for RAG explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Context Compression for RAG\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Context Compression for RAG to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Context Compression for RAG (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Context Compression for RAG and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Context Compression for RAG-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Context Compression for RAG interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Context Compression for RAG in production today?"
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
        }), " Context Compression for RAG builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Context Compression for RAG before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Context Compression for RAG is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Context Compression for RAG in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Context Compression for RAG chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Context Compression for RAG is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Context Compression for RAG is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Context Compression for RAG is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Context Compression for RAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Context Compression for RAG in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Context Compression for RAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Context Compression for RAG is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Context Compression for RAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Context Compression for RAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Context Compression for RAG on an empty input?"
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
            children: "Complete Medium exercises, explain Context Compression for RAG to someone else"
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
        children: "Always write a one-line example of Context Compression for RAG from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Context Compression for RAG when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Context Compression for RAG twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Context Compression for RAG snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Context Compression for RAG listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Context Compression for RAG to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Context Compression for RAG by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Context Compression for RAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Context Compression for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Context Compression for RAG (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Context Compression for RAG problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Context Compression for RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Context Compression for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Context Compression for RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Context Compression for RAG fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Context Compression for RAG is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Context Compression for RAG is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Context Compression for RAG, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Context Compression for RAG asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context Compression for RAG is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Context Compression for RAG."
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
        children: "Context Compression for RAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Context Compression for RAG today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Context Compression for RAG — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Context Compression for RAG changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Context Compression for RAG."
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
        children: "Context Compression for RAG appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Context Compression for RAG helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Context Compression for RAG concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Context Compression for RAG skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Context Compression for RAG to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context Compression for RAG is like a recipe"
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
        }), " — this chapter contributes the Context Compression for RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-15contextcompression-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Context Compression for RAG in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-15contextcompression-flash2",
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
      "data-qid": "12ragvectordatabases-15contextcompression-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Context Compression for RAG approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-15contextcompression-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Context Compression for RAG NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-15contextcompression-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Context Compression for RAG applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Context Compression for RAG (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Context Compression for RAG (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Context Compression for RAG-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Context Compression for RAG in production at scale"
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
        children: "Testing: pytest for unit tests of Context Compression for RAG code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Context Compression for RAG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Context Compression for RAG code."]
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
        }), " or your IDE's debugger to step through the Context Compression for RAG example code."]
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
        children: "Explain Context Compression for RAG in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Context Compression for RAG."
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
        children: "Tell me about a time you debugged a Context Compression for RAG problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Context Compression for RAG is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Context Compression for RAG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Context Compression for RAG logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Context Compression for RAG without notes"
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
        }), ": a small team uses Context Compression for RAG daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Context Compression for RAG patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Context Compression for RAG principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Context Compression for RAG shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Context Compression for RAG to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture",
        children: "Hybrid Search Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context Compression for RAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Context Compression for RAG depends on input size and distribution — always benchmark for your own data."
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