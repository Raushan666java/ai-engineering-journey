"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[27583],{

/***/ 19322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_06_retrieval_augmented_generation_md_760_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-06-retrieval-augmented-generation-md-760.json
const site_docs_courses_modern_ai_engineering_06_retrieval_augmented_generation_md_760_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/06-retrieval-augmented-generation","title":"Chapter 6: Retrieval-Augmented Generation","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/06-retrieval-augmented-generation.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/06-retrieval-augmented-generation","permalink":"/ai-engineering-journey/modern-ai-engineering/06-retrieval-augmented-generation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-retrieval-augmented-generation","slug":"/modern-ai-engineering/06-retrieval-augmented-generation","title":"Chapter 6: Retrieval-Augmented Generation","sidebar_label":"Chapter 6: Retrieval-Augmented Generation","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Prompt Engineering","permalink":"/ai-engineering-journey/modern-ai-engineering/05-prompt-engineering"},"next":{"title":"Chapter 7: Fine-Tuning","permalink":"/ai-engineering-journey/modern-ai-engineering/07-fine-tuning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/modern-ai-engineering/06-retrieval-augmented-generation.md


const frontMatter = {
	id: '06-retrieval-augmented-generation',
	slug: '/modern-ai-engineering/06-retrieval-augmented-generation',
	title: 'Chapter 6: Retrieval-Augmented Generation',
	sidebar_label: 'Chapter 6: Retrieval-Augmented Generation',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Retrieval-Augmented Generation';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "6.1 RAG Architecture",
  "id": "61-rag-architecture",
  "level": 2
}, {
  "value": "6.1.1 When RAG Beats Pure Prompting",
  "id": "611-when-rag-beats-pure-prompting",
  "level": 3
}, {
  "value": "6.1.2 The RAG Pipeline",
  "id": "612-the-rag-pipeline",
  "level": 3
}, {
  "value": "6.2 Chunking Strategies",
  "id": "62-chunking-strategies",
  "level": 2
}, {
  "value": "6.2.1 Fixed-Size with Overlap",
  "id": "621-fixed-size-with-overlap",
  "level": 3
}, {
  "value": "6.2.2 Semantic Chunking",
  "id": "622-semantic-chunking",
  "level": 3
}, {
  "value": "6.2.3 Recursive Splitting",
  "id": "623-recursive-splitting",
  "level": 3
}, {
  "value": "6.2.4 Document-Aware Chunking",
  "id": "624-document-aware-chunking",
  "level": 3
}, {
  "value": "6.2.5 Chunking Strategy Comparison",
  "id": "625-chunking-strategy-comparison",
  "level": 3
}, {
  "value": "6.3 Embedding Models",
  "id": "63-embedding-models",
  "level": 2
}, {
  "value": "6.3.1 OpenAI Embeddings",
  "id": "631-openai-embeddings",
  "level": 3
}, {
  "value": "6.3.2 Embedding Quality Dimensions",
  "id": "632-embedding-quality-dimensions",
  "level": 3
}, {
  "value": "6.3.3 MTEB Benchmark",
  "id": "633-mteb-benchmark",
  "level": 3
}, {
  "value": "6.4 Retrieval Techniques",
  "id": "64-retrieval-techniques",
  "level": 2
}, {
  "value": "6.4.1 Dense Retrieval",
  "id": "641-dense-retrieval",
  "level": 3
}, {
  "value": "6.4.2 Sparse Retrieval (BM25)",
  "id": "642-sparse-retrieval-bm25",
  "level": 3
}, {
  "value": "6.4.3 Hybrid Retrieval",
  "id": "643-hybrid-retrieval",
  "level": 3
}, {
  "value": "6.4.4 Re-Ranking",
  "id": "644-re-ranking",
  "level": 3
}, {
  "value": "6.5 Response Synthesis",
  "id": "65-response-synthesis",
  "level": 2
}, {
  "value": "6.5.1 Concatenation",
  "id": "651-concatenation",
  "level": 3
}, {
  "value": "6.5.2 Summarization",
  "id": "652-summarization",
  "level": 3
}, {
  "value": "6.5.3 Conditional Fusion",
  "id": "653-conditional-fusion",
  "level": 3
}, {
  "value": "6.5.4 Multi-Source Synthesis",
  "id": "654-multi-source-synthesis",
  "level": 3
}, {
  "value": "6.6 Evaluating RAG Systems",
  "id": "66-evaluating-rag-systems",
  "level": 2
}, {
  "value": "6.6.1 Faithfulness",
  "id": "661-faithfulness",
  "level": 3
}, {
  "value": "6.6.2 Answer Relevance",
  "id": "662-answer-relevance",
  "level": 3
}, {
  "value": "6.6.3 Context Relevance",
  "id": "663-context-relevance",
  "level": 3
}, {
  "value": "6.6.4 Retrieval Metrics",
  "id": "664-retrieval-metrics",
  "level": 3
}, {
  "value": "6.7 Advanced RAG Patterns",
  "id": "67-advanced-rag-patterns",
  "level": 2
}, {
  "value": "6.7.1 Self-RAG",
  "id": "671-self-rag",
  "level": 3
}, {
  "value": "6.7.2 HyDE (Hypothetical Document Embeddings)",
  "id": "672-hyde-hypothetical-document-embeddings",
  "level": 3
}, {
  "value": "6.7.3 Agentic RAG",
  "id": "673-agentic-rag",
  "level": 3
}, {
  "value": "6.7.4 Multi-Hop RAG",
  "id": "674-multi-hop-rag",
  "level": 3
}, {
  "value": "6.7.5 Graph RAG",
  "id": "675-graph-rag",
  "level": 3
}, {
  "value": "6.7.6 Pattern Comparison Table",
  "id": "676-pattern-comparison-table",
  "level": 3
}, {
  "value": "TypeScript Implementation",
  "id": "typescript-implementation",
  "level": 2
}, {
  "value": "RAGPipeline Class",
  "id": "ragpipeline-class",
  "level": 3
}, {
  "value": "RAGEvaluator Class",
  "id": "ragevaluator-class",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Answer Key",
  "id": "answer-key",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    chunkingconfig: "chunkingconfig",
    code: "code",
    details: "details",
    em: "em",
    failurereport: "failurereport",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    number: "number",
    ol: "ol",
    p: "p",
    pre: "pre",
    ragresponse: "ragresponse",
    retrievalresult: "retrievalresult",
    section: "section",
    span: "span",
    string: "string",
    strong: "strong",
    summary: "summary",
    synthesisconfig: "synthesisconfig",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    void: "void",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-6-retrieval-augmented-generation",
        children: "Chapter 6: Retrieval-Augmented Generation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "By the end of this chapter, you will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design a complete RAG architecture with retriever, augmenter, and generator components"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Select appropriate chunking strategies for different document types and retrieval tasks"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Evaluate and choose embedding models based on the MTEB benchmark and task requirements"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement dense, sparse, hybrid, and re-ranking retrieval pipelines"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build response synthesis strategies including concatenation, summarization, and conditional fusion"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Measure RAG system quality with faithfulness, relevance, hit rate, MRR, and NDCG"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Choose between advanced RAG patterns (Self-RAG, HyDE, agentic RAG, multi-hop, Graph RAG)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Construct a complete RAGPipeline and RAGEvaluator in TypeScript"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/06-retrieval-augmented-generation/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-rag-architecture",
      children: "6.1 RAG Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation (RAG) combines a retrieval system with a generative model to produce responses grounded in external knowledge. Instead of relying solely on the model's parametric memory, RAG first retrieves relevant documents from a knowledge base and conditions the generation on those documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-when-rag-beats-pure-prompting",
      children: "6.1.1 When RAG Beats Pure Prompting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pure prompting (providing all context in the prompt) has fundamental limitations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context window size:"
        }), " Most models have 4K-200K token context windows. Large knowledge bases cannot fit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " Longer prompts cost more in API calls and latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recency:"
        }), " The model's parametric knowledge is frozen at training time. RAG accesses up-to-date information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attribution:"
        }), " RAG can cite specific source documents, enabling verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hallucination reduction:"
        }), " Grounding generation in retrieved documents dramatically reduces factual errors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG is the preferred approach when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The knowledge base is larger than the context window."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Information changes frequently (news, documentation, products)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Factual accuracy and attribution are critical (legal, medical, financial)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system needs to cite specific sources."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "612-the-rag-pipeline",
      children: "6.1.2 The RAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard RAG pipeline has three stages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieve:"
        }), " Given a query, retrieve the top-k relevant documents from a vector database or search index."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Augment:"
        }), " Combine the query with the retrieved documents into a structured prompt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate:"
        }), " Pass the augmented prompt to an LLM to produce the final response."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`mermaid\ngraph LR\nsubgraph Input[\"Input\"]\nA[User Query]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph Index[\"Indexing Pipeline\"]\n    B[Documents] --> C[Chunking]\n    C --> D[Embedding Model]\n    D --> E[Vector Database]\n    E --> F[BM25 Index]\nend\n\nsubgraph Retrieve[\"Retrieval\"]\n    A --> G[Query Embedding]\n    G --> H[Vector Search]\n    A --> I[BM25 Search]\n    H --> J[Hybrid Fusion]\n    I --> J\n    J --> K[Re-Ranking]\n    K --> L[Top-K Chunks]\nend\n\nsubgraph Generate[\"Generation\"]\n    L --> M[Augment Prompt]\n    M --> N[LLM]\n    N --> O[Final Response]\n    O --> P[Source Citations]\nend\n\nE -.-> H\nF -.-> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-chunking-strategies",
      children: "6.2 Chunking Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chunking divides documents into retrievable units. The chunking strategy directly impacts retrieval quality - too large chunks contain irrelevant information, while too small chunks lose context."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-fixed-size-with-overlap",
      children: "6.2.1 Fixed-Size with Overlap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest strategy: split text into chunks of a fixed number of tokens (e.g., 512) with overlap (e.g., 128 tokens). Overlap ensures that sentences or concepts spanning chunk boundaries are not lost."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple, deterministic, fast to compute.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Splits mid-sentence, loses document structure, ignores semantic boundaries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-semantic-chunking",
      children: "6.2.2 Semantic Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantic chunking uses embedding similarity to detect topic boundaries. Text is split at points where the semantic shift between adjacent sentences exceeds a threshold."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embed each sentence individually."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute cosine similarity between consecutive sentences."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When similarity drops below a threshold, start a new chunk."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge small chunks with neighboring chunks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Preserves semantic coherence, improves retrieval precision.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Slower, requires embedding model, threshold tuning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "623-recursive-splitting",
      children: "6.2.3 Recursive Splitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive splitting applies increasingly fine-grained separators in order: paragraphs, sentences, clauses. If a chunk exceeds the maximum size, it is split at the next separator level."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Respects document structure, produces natural break points.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " May produce uneven chunk sizes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "624-document-aware-chunking",
      children: "6.2.4 Document-Aware Chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Document-aware chunking leverages document structure - headings, sections, tables, code blocks, and metadata. Chunks preserve structural context. Metadata is prepended to each chunk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Best for structured documents, preserves hierarchy, enables precise citation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires document parsing, format-specific."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "625-chunking-strategy-comparison",
      children: "6.2.5 Chunking Strategy Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coherence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size + overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple text, prototyping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstructured prose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document-aware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDFs, HTML, wikis, code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-embedding-models",
      children: "6.3 Embedding Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedding models convert text into dense vector representations. The quality of these embeddings directly determines retrieval accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-openai-embeddings",
      children: "6.3.1 OpenAI Embeddings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "text-embedding-3-small:"
      }), " 1536 dimensions, optimized for speed and cost. Suitable for high-throughput applications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "text-embedding-3-large:"
      }), " 3072 dimensions, highest accuracy. Can be truncated to 256 dimensions with minimal quality loss."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ada-002:"
      }), " The previous generation (1536 dimensions). Still widely used but superseded by v3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-embedding-quality-dimensions",
      children: "6.3.2 Embedding Quality Dimensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic similarity:"
        }), " Do similar texts have similar embeddings?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-task generalization:"
        }), " Does the model perform well across retrieval, clustering, classification?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language coverage:"
        }), " How many languages does the model support?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context length:"
        }), " What is the maximum input length for the embedding model?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimensionality:"
        }), " Higher dimensions capture more information but increase storage and search costs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "633-mteb-benchmark",
      children: "6.3.3 MTEB Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Massive Text Embedding Benchmark (MTEB) evaluates embedding models across 8 task types and 58 datasets:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Metric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search relevance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDCG@10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic grouping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-Measure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pair Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevance ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spearman"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summary-structure similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spearman"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-shot classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Top models on MTEB (as of 2025): intfloat/e5-mistral-7b-instruct, BAAI/bge-large-en-v1.5, text-embedding-3-large."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-retrieval-techniques",
      children: "6.4 Retrieval Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-dense-retrieval",
      children: "6.4.1 Dense Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dense retrieval uses embedding models to represent both queries and documents as vectors. Search is performed by cosine similarity or dot product in vector space."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      }), " Captures semantic similarity, handles synonyms and paraphrasing.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      }), " Computationally expensive at scale, requires ANN indexing (HNSW, IVF), may miss exact keyword matches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-sparse-retrieval-bm25",
      children: "6.4.2 Sparse Retrieval (BM25)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BM25 is a bag-of-words retrieval algorithm that scores documents based on term frequency and inverse document frequency. It uses exact keyword matching."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      }), " Fast, interpretable, handles rare terms well, zero training cost.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      }), " Fails on semantic matching (synonyms, paraphrases), vocabulary mismatch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "643-hybrid-retrieval",
      children: "6.4.3 Hybrid Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid retrieval combines dense and sparse scores, typically with weighted reciprocal rank fusion (RRF). RRF normalizes scores from different systems before combining:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RRF_score(d) = 1 / (k + rank_dense(d)) + 1 / (k + rank_sparse(d))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid retrieval consistently outperforms either method alone, especially for queries requiring both semantic understanding and exact term matching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "644-re-ranking",
      children: "6.4.4 Re-Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After initial retrieval (top-100 to top-1000), a cross-encoder re-ranker scores each retrieved document against the query. Cross-encoders are slower but more accurate than bi-encoders because they process query and document together through attention."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two-stage retrieval:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First stage:"
        }), " Fast bi-encoder retrieves top-100 candidates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second stage:"
        }), " Cross-encoder re-ranks top-100 to produce top-5 to top-10."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This balances speed and accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`mermaid\nflowchart LR\nsubgraph Query[\"Query Processing\"]\nA[Raw Query]\nB[Query Expansion]\nC[HyDE Generated Document]\nD[Final Query Vector]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph Dense[\"Dense Retrieval\"]\n    E[Embedding Model]\n    F[Vector DB Search]\n    G[Dense Scores]\nend\n\nsubgraph Sparse[\"Sparse Retrieval\"]\n    H[BM25 Tokenizer]\n    I[Inverted Index Search]\n    J[Sparse Scores]\nend\n\nsubgraph Fusion[\"Fusion and Re-rank\"]\n    K[RRF Score Fusion]\n    L[Cross-Encoder Re-rank]\n    M[Final Top-K]\nend\n\nA --> B\nB --> C\nC --> D\nD --> E\nE --> F\nF --> G\nA --> H\nH --> I\nI --> J\nG --> K\nJ --> K\nK --> L\nL --> M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-response-synthesis",
      children: "6.5 Response Synthesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After retrieving relevant chunks, the system must combine them with the query into a prompt for generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-concatenation",
      children: "6.5.1 Concatenation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest approach: concatenate all retrieved chunks into the prompt, separated by delimiters, with the query appended or prepended."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple, preserves full information.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " May exceed context window, irrelevant chunks distract the model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-summarization",
      children: "6.5.2 Summarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the context is too large, summarize each chunk before concatenation. A smaller, faster model can summarize chunks in parallel, then the main LLM generates from the summaries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Reduces token usage, extracts key information.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Summarization may lose detail, potential information loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "653-conditional-fusion",
      children: "6.5.3 Conditional Fusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditional fusion selects a synthesis strategy based on query characteristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-chunk queries:"
        }), " Pass only the best chunk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-fact queries:"
        }), " Pass top-k chunks and instruct the model to integrate information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comparison queries:"
        }), " Pass chunks from different sources with a comparison instruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation queries:"
        }), " Pass all chunks and ask for a summary."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "654-multi-source-synthesis",
      children: "6.5.4 Multi-Source Synthesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When chunks come from different sources (web pages, PDFs, databases, APIs), include source metadata in the prompt. This enables the model to differentiate and cite sources, improving traceability and trust."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-evaluating-rag-systems",
      children: "6.6 Evaluating RAG Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG evaluation requires specialized metrics beyond standard text generation metrics because the system has two components (retrieval and generation) each contributing to quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "661-faithfulness",
      children: "6.6.1 Faithfulness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Faithfulness measures whether the generated response is factually supported by the retrieved context. This is distinct from factual accuracy in general - the response may be factually correct but unsupported by the provided context."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation approach:"
      }), " Decompose the response into atomic claims. For each claim, verify whether it is supported by the retrieved chunks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "662-answer-relevance",
      children: "6.6.2 Answer Relevance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer relevance measures whether the response addresses the user's query. An irrelevant response may be factually correct but off-topic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation approach:"
      }), " Use an LLM to score relevance on a 1-5 scale, or compute semantic similarity between the query and the response embedding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "663-context-relevance",
      children: "6.6.3 Context Relevance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context relevance measures whether the retrieved chunks are relevant to the query. Irrelevant context not only wastes context window but may distract the model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation approach:"
      }), " Compute the percentage of retrieved chunks that are actually relevant to answering the query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "664-retrieval-metrics",
      children: "6.6.4 Retrieval Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hit Rate (Recall@k):"
      }), " The proportion of queries for which at least one relevant document is in the top-k results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mean Reciprocal Rank (MRR):"
      }), " The average of reciprocal ranks of the first relevant document. MRR@10 = mean(1 / rank_of_first_relevant). If no relevant document is found, the reciprocal rank is 0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Normalized Discounted Cumulative Gain (NDCG):"
      }), " A ranking metric that accounts for graded relevance (not just binary relevant/irrelevant). NDCG penalizes relevant documents appearing lower in the ranking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`mermaid\nflowchart LR\nsubgraph Data[\"Data Preparation\"]\nA[Query Set]\nB[Retrieved Chunks]\nC[Ground Truth Judgments]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph RetrieverEval[\"Retrieval Metrics\"]\n    D[Compute Hit Rate@k]\n    E[Compute MRR@k]\n    F[Compute NDCG@k]\n    G[Context Relevance]\nend\n\nsubgraph GeneratorEval[\"Generation Metrics\"]\n    H[Decompose into Claims]\n    I[Check Faithfulness]\n    J[Score Answer Relevance]\n    K[Score Helpfulness]\nend\n\nsubgraph Aggregate[\"Aggregation\"]\n    L[Overall RAG Score]\n    M[Retrieval Quality Summary]\n    N[Generation Quality Summary]\n    O[Failure Case Analysis]\nend\n\nA --> D\nB --> D\nA --> E\nB --> E\nA --> F\nC --> F\nB --> G\nC --> G\n\nA --> H\nB --> H\nH --> I\nC --> I\nA --> J\nD --> L\nE --> L\nF --> L\nG --> L\nI --> L\nJ --> L\nK --> L\n\nL --> M\nL --> N\nL --> O\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-advanced-rag-patterns",
      children: "6.7 Advanced RAG Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "671-self-rag",
      children: "6.7.1 Self-RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Self-RAG introduces an internal reflection step where the model retrieves documents on demand, evaluates their relevance, and decides whether to use them. The model generates reflection tokens that signal retrieval need, relevance, and support level."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Open-domain Q&A where retrieval is not always needed. Self-RAG can skip retrieval for simple questions, saving cost and latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "672-hyde-hypothetical-document-embeddings",
      children: "6.7.2 HyDE (Hypothetical Document Embeddings)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HyDE generates a hypothetical document that answers the query, then uses that document's embedding for retrieval. The intuition: embeddings of ideal answer documents are closer to relevant documents in vector space than the query itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use an LLM to generate a hypothetical answer to the query."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embed the hypothetical answer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use that embedding for vector search."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Short or ambiguous queries where query-document semantic gap is large."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "673-agentic-rag",
      children: "6.7.3 Agentic RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agentic RAG uses an LLM agent to plan and execute multi-step retrieval strategies. The agent can decide to reformulate the query, retrieve from different sources, perform iterative retrieval with feedback, or combine results from multiple search steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Complex research questions requiring multiple rounds of retrieval and synthesis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "674-multi-hop-rag",
      children: "6.7.4 Multi-Hop RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-hop RAG answers questions that require information from multiple documents connected through intermediate entities."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Which company founded by Elon Musk acquired the company that produced the first electric car with a lithium-ion battery?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This requires: (1) identify the first electric car with Li-ion battery, (2) company that produced it, (3) who acquired that company, (4) founded by Elon Musk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-hop RAG routes each sub-question to the appropriate retriever and chains the results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "675-graph-rag",
      children: "6.7.5 Graph RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph RAG constructs a knowledge graph from documents, with entities as nodes and relationships as edges. Retrieval traverses the graph to find relevant information, capturing connections that vector similarity alone would miss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "676-pattern-comparison-table",
      children: "6.7.6 Pattern Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive retrieval, cost savings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-domain QA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HyDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles query-document gap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucinated docs may mislead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short/ambiguous queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agentic RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, multi-step reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High latency, cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-hop RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-document reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-step questions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship-aware retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph construction cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-rich domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation",
      children: "TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ragpipeline-class",
      children: "RAGPipeline Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RAGPipeline class implements the complete RAG pipeline: chunking, embedding, retrieval, and response synthesis with source citation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\ninterface Chunk {\nid: string;\ntext: string;\nmetadata: Record<string, unknown>;\nembedding?: number[];\nsource: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface ChunkingConfig {\nstrategy: 'fixed' | 'semantic' | 'recursive' | 'document-aware';\nchunkSize: number;\nchunkOverlap: number;\nseparators?: string[];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface RetrievalResult {\nchunks: Chunk[];\nscores: number[];\nmethod: 'dense' | 'sparse' | 'hybrid';\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface SynthesisConfig {\nstrategy: 'concatenation' | 'summarization' | 'conditional';\nmaxContextTokens: number;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface RAGResponse {\nanswer: string;\nsources: Array<{ text: string; source: string; score: number }>;\ntokensUsed: number;\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["type EmbeddingFn = (text: string) => Promise<number[]>;\ntype LLMFn = (prompt: string) => Promise", (0,jsx_runtime.jsx)(_components.string, {
        children: ";\ntype SimilarityFn = (a: number[], b: number[]) => number;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class RAGPipeline {\nprivate chunks: Chunk[] = [];\nprivate embeddings: Map<string, number[]> = new Map();\nprivate chunkConfig: ChunkingConfig;\nprivate synthesisConfig: SynthesisConfig;"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["constructor(\nprivate embeddingFn: EmbeddingFn,\nprivate llmFn: LLMFn,\nprivate similarityFn: SimilarityFn = RAGPipeline.cosineSimilarity,\nconfig?: { chunking?: Partial", (0,jsx_runtime.jsxs)(_components.chunkingconfig, {
        children: ["; synthesis?: Partial", (0,jsx_runtime.jsx)(_components.synthesisconfig, {
          children: " }\n) {\nthis.chunkConfig = {\nstrategy: 'recursive',\nchunkSize: 512,\nchunkOverlap: 128,\nseparators: ['\\n\\n', '\\n', '.', ' '],\n...config?.chunking,\n};\nthis.synthesisConfig = {\nstrategy: 'concatenation',\nmaxContextTokens: 3000,\n...config?.synthesis,\n};\n}"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static cosineSimilarity(a: number[], b: number[]): number {\nlet dot = 0, na = 0, nb = 0;\nfor (let i = 0; i < a.length; i++) {\ndot += a[i] * b[i];\nna += a[i] * a[i];\nnb += b[i] * b[i];\n}\nreturn dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-10);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "indexDocument(text: string, source: string, metadata: Record<string, unknown> = {}): Chunk[] {\nconst docChunks = this.chunkText(text, source, metadata);\nthis.chunks.push(...docChunks);\nreturn docChunks;\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["async embedAll(): Promise", (0,jsx_runtime.jsx)(_components.void, {
        children: " {\nfor (const chunk of this.chunks) {\nif (!chunk.embedding) {\nchunk.embedding = await this.embeddingFn(chunk.text);\nthis.embeddings.set(chunk.id, chunk.embedding);\n}\n}\n}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private chunkText(text: string, source: string, metadata: Record<string, unknown>): Chunk[] {\nswitch (this.chunkConfig.strategy) {\ncase 'fixed': return this.fixedSizeChunk(text, source, metadata);\ncase 'semantic': return this.semanticChunk(text, source, metadata);\ncase 'recursive': return this.recursiveChunk(text, source, metadata);\ncase 'document-aware': return this.documentAwareChunk(text, source, metadata);\ndefault: return this.recursiveChunk(text, source, metadata);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private fixedSizeChunk(text: string, source: string, metadata: Record<string, unknown>): Chunk[] {\nconst chunks: Chunk[] = [];\nconst words = text.split(/\\s+/);\nconst size = this.chunkConfig.chunkSize;\nconst overlap = this.chunkConfig.chunkOverlap;\nconst step = size - overlap;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0; i < words.length; i += step) {\n  const chunkWords = words.slice(i, i + size);\n  if (chunkWords.length === 0) break;\n  chunks.push({\n    id: source + ':' + i,\n    text: chunkWords.join(' '),\n    metadata: { ...metadata, startIndex: i, endIndex: i + chunkWords.length },\n    source,\n  });\n}\n\nreturn chunks;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private recursiveChunk(text: string, source: string, metadata: Record<string, unknown>): Chunk[] {\nconst chunks: Chunk[] = [];\nconst separators = this.chunkConfig.separators ?? ['\\n\\n', '\\n', '.', ' '];\nconst maxSize = this.chunkConfig.chunkSize;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const splitRecursive = (t: string, depth: number): string[] => {\n  if (depth >= separators.length) {\n    const words = t.split(/\\s+/);\n    const result: string[] = [];\n    for (let i = 0; i < words.length; i += maxSize) {\n      result.push(words.slice(i, i + maxSize).join(' '));\n    }\n    return result;\n  }\n\n  const parts = t.split(separators[depth]);\n  const result: string[] = [];\n  let current = '';\n\n  for (const part of parts) {\n    const candidate = current ? current + separators[depth] + part : part;\n    if (candidate.split(/\\s+/).length <= maxSize) {\n      current = candidate;\n    } else {\n      if (current) result.push(current);\n      const subParts = splitRecursive(part, depth + 1);\n      result.push(...subParts);\n      current = '';\n    }\n  }\n\n  if (current) result.push(current);\n  return result;\n};\n\nconst parts = splitRecursive(text, 0);\nfor (let i = 0; i < parts.length; i++) {\n  chunks.push({\n    id: source + ':recursive:' + i,\n    text: parts[i],\n    metadata: { ...metadata, chunkIndex: i, totalChunks: parts.length },\n    source,\n  });\n}\n\nreturn chunks;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private semanticChunk(text: string, source: string, metadata: Record<string, unknown>): Chunk[] {\nconst sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];\nif (sentences.length <= 1) {\nreturn [{\nid: source + ':semantic:0',\ntext,\nmetadata,\nsource,\n}];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const sentenceScores: number[] = [];\nfor (let i = 1; i < sentences.length; i++) {\n  const a = sentences[i - 1].trim();\n  const b = sentences[i].trim();\n  const tokensA = new Set(a.toLowerCase().split(/\\s+/));\n  const tokensB = new Set(b.toLowerCase().split(/\\s+/));\n  let intersection = 0;\n  tokensA.forEach((t) => { if (tokensB.has(t)) intersection++; });\n  const union = new Set([...tokensA, ...tokensB]);\n  sentenceScores.push(union.size > 0 ? intersection / union.size : 0);\n}\n\nconst threshold = 0.3;\nconst chunks: Chunk[] = [];\nlet currentChunk: string[] = [sentences[0]];\nlet chunkIdx = 0;\n\nfor (let i = 1; i < sentences.length; i++) {\n  if (sentenceScores[i - 1] < threshold) {\n    chunks.push({\n      id: source + ':semantic:' + chunkIdx,\n      text: currentChunk.join(' '),\n      metadata: { ...metadata, chunkIndex: chunkIdx },\n      source,\n    });\n    currentChunk = [];\n    chunkIdx++;\n  }\n  currentChunk.push(sentences[i]);\n}\n\nif (currentChunk.length > 0) {\n  chunks.push({\n    id: source + ':semantic:' + chunkIdx,\n    text: currentChunk.join(' '),\n    metadata: { ...metadata, chunkIndex: chunkIdx },\n    source,\n  });\n}\n\nreturn chunks;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["private documentAwareChunk(text: string, source: string, metadata: Record<string, unknown>): Chunk[] {\nconst headingRegex = /^(#{1,6}\\s+|(?:\\w+\\s)", (0,jsx_runtime.jsx)(_components.em, {
        children: "\\n[-=]+\\s"
      }), "$)/gm;\nconst sections = text.split(headingRegex);\nconst chunks: Chunk[] = [];\nlet currentHeading = '';"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const section of sections) {\n  const trimmed = section.trim();\n  if (!trimmed) continue;\n  if (/^#{1,6}\\s/.test(trimmed) || /^[-=]+\\s*$/.test(trimmed)) {\n    currentHeading = trimmed.replace(/^#{1,6}\\s*/, '').replace(/[-=]+\\s*$/, '').trim();\n    continue;\n  }\n  const maxSize = this.chunkConfig.chunkSize;\n  const words = trimmed.split(/\\s+/);\n  for (let i = 0; i < words.length; i += maxSize) {\n    const chunkText = words.slice(i, i + maxSize).join(' ');\n    chunks.push({\n      id: source + ':' + currentHeading + ':' + i,\n      text: chunkText,\n      metadata: { ...metadata, heading: currentHeading, sectionStart: i },\n      source,\n    });\n  }\n}\n\nreturn chunks.length > 0 ? chunks : this.recursiveChunk(text, source, metadata);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["async retrieve(query: string, topK: number = 5, method: 'dense' | 'hybrid' = 'hybrid'): Promise", (0,jsx_runtime.jsx)(_components.retrievalresult, {
        children: " {\nconst queryEmb = await this.embeddingFn(query);"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const denseScores = this.chunks.map((chunk, idx) => {\n  const emb = this.embeddings.get(chunk.id) ?? chunk.embedding;\n  if (!emb) return { chunk, score: 0, idx };\n  return { chunk, score: this.similarityFn(queryEmb, emb), idx };\n});\n\ndenseScores.sort((a, b) => b.score - a.score);\n\nif (method === 'dense') {\n  const top = denseScores.slice(0, topK);\n  return {\n    chunks: top.map((t) => t.chunk),\n    scores: top.map((t) => t.score),\n    method: 'dense',\n  };\n}\n\nconst queryTerms = query.toLowerCase().split(/\\s+/).filter((t) => t.length > 1);\nconst sparseScores = this.chunks.map((chunk) => {\n  const chunkLower = chunk.text.toLowerCase();\n  const termFrequency = queryTerms.reduce((sum, term) => {\n    const regex = new RegExp(term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g');\n    const matches = chunkLower.match(regex);\n    return sum + (matches ? matches.length : 0);\n  }, 0);\n  return { chunk, score: termFrequency / (1 + 0.5 * chunk.text.split(/\\s+/).length) };\n});\n\nconst k = 60;\nconst combined = denseScores.map((d, idx) => {\n  const sparse = sparseScores.find((s) => s.chunk.id === d.chunk.id);\n  const rrfScore = (1 / (k + idx + 1)) + (1 / (k + (sparse ? sparseScores.indexOf(sparse) + 1 : 1000)));\n  return { chunk: d.chunk, score: rrfScore };\n});\n\ncombined.sort((a, b) => b.score - a.score);\nconst top = combined.slice(0, topK);\n\nreturn {\n  chunks: top.map((t) => t.chunk),\n  scores: top.map((t) => t.score),\n  method: 'hybrid',\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["}\nasync generate(query: string, topK: number = 5): Promise", (0,jsx_runtime.jsx)(_components.ragresponse, {
        children: " {\nconst retrieval = await this.retrieve(query, topK);\nconst context = this.synthesizeContext(query, retrieval.chunks);"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const prompt = [\n  'You are a helpful assistant. Answer the user\\'s question based on the provided context.',\n  'If the context does not contain enough information, say so.',\n  'Cite sources by their source labels.',\n  '',\n  'Context:',\n  context,\n  '',\n  'Question: ' + query,\n  '',\n  'Answer:',\n].join('\\n');\n\nconst answer = await this.llmFn(prompt);\n\nreturn {\n  answer,\n  sources: retrieval.chunks.map((c, i) => ({\n    text: c.text.slice(0, 200),\n    source: c.source,\n    score: retrieval.scores[i],\n  })),\n  tokensUsed: prompt.split(/\\s+/).length + answer.split(/\\s+/).length,\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private synthesizeContext(query: string, chunks: Chunk[]): string {\nswitch (this.synthesisConfig.strategy) {\ncase 'concatenation':\nreturn chunks.map((c, i) =>\n'[Source ' + (i + 1) + ': ' + c.source + ']\\n' + c.text\n).join('\\n\\n---\\n\\n');"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  case 'summarization':\n    return chunks.map((c, i) =>\n      '[Source ' + (i + 1) + ': ' + c.source + ']\\n(' + c.text.slice(0, 200) + '...)'\n    ).join('\\n\\n---\\n\\n');\n\n  case 'conditional': {\n    if (chunks.length <= 2) {\n      return chunks.map((c, i) =>\n        '[Source ' + (i + 1) + ': ' + c.source + ']\\n' + c.text\n      ).join('\\n\\n');\n    }\n    return chunks.map((c, i) =>\n      '[Source ' + (i + 1) + ': ' + c.source + ']\\n' + c.text.slice(0, 300)\n    ).join('\\n\\n---\\n\\n');\n  }\n\n  default:\n    return chunks.map((c, i) =>\n      '[Source ' + (i + 1) + ': ' + c.source + ']\\n' + c.text\n    ).join('\\n\\n---\\n\\n');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChunks(): Chunk[] {\nreturn [...this.chunks];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStats(): { totalChunks: number; totalTokens: number; strategies: string[] } {\nconst totalTokens = this.chunks.reduce((sum, c) => sum + c.text.split(/\\s+/).length, 0);\nreturn {\ntotalChunks: this.chunks.length,\ntotalTokens,\nstrategies: [this.chunkConfig.strategy, this.synthesisConfig.strategy],\n};\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ragevaluator-class",
      children: "RAGEvaluator Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RAGEvaluator class computes faithfulness, relevance, hit rate, MRR, and NDCG for RAG systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EvalQuery {\n  query: string;\n  relevantDocIds: string[];\n  expectedAnswer?: string;\n}\n\ninterface RAGEvalResult {\n  faithfulness: number;\n  answerRelevance: number;\n  contextRelevance: number;\n  hitRate: number;\n  mrr: number;\n  ndcg: number;\n  details: Array<{\n    query: string;\n    faithfulness: number;\n    hit: boolean;\n    reciprocalRank: number;\n    ndcg: number;\n  }>;\n}\n\nclass RAGEvaluator {\n  constructor(\n    private pipeline: RAGPipeline,\n    private judgeFn: (prompt: string) => Promise<Record<string, number>>\n  ) {}\n\n  async evaluate(\n    queries: EvalQuery[],\n    topK: number = 10\n  ): Promise<RAGEvalResult> {\n    let totalFaithfulness = 0;\n    let totalAnswerRelevance = 0;\n    let totalContextRelevance = 0;\n    let totalHitRate = 0;\n    let totalMRR = 0;\n    let totalNDCG = 0;\n    const details: RAGEvalResult['details'] = [];\n\n    for (const eq of queries) {\n      const retrieval = await this.pipeline.retrieve(eq.query, topK);\n      const retrievedChunks = retrieval.chunks;\n\n      // Hit rate\n      const hit = retrievedChunks.some((c) => eq.relevantDocIds.includes(c.id));\n      if (hit) totalHitRate++;\n\n      // MRR\n      let reciprocalRank = 0;\n      for (let i = 0; i < retrievedChunks.length; i++) {\n        if (eq.relevantDocIds.includes(retrievedChunks[i].id)) {\n          reciprocalRank = 1 / (i + 1);\n          break;\n        }\n      }\n      totalMRR += reciprocalRank;\n\n      // NDCG\n      const dcg = retrievedChunks.reduce((sum, chunk, i) => {\n        const rel = eq.relevantDocIds.includes(chunk.id) ? 1 : 0;\n        return sum + rel / Math.log2(i + 2);\n      }, 0);\n      const idealRanks = eq.relevantDocIds.slice(0, topK);\n      const idcg = idealRanks.reduce((sum, _, i) => {\n        return sum + 1 / Math.log2(i + 2);\n      }, 0);\n      const ndcg = idcg > 0 ? dcg / idcg : 0;\n      totalNDCG += ndcg;\n\n      // Context relevance\n      const relevantCount = retrievedChunks.filter(\n        (c) => eq.relevantDocIds.includes(c.id)\n      ).length;\n      const ctxRelevance = retrievedChunks.length > 0\n        ? relevantCount / retrievedChunks.length\n        : 0;\n      totalContextRelevance += ctxRelevance;\n\n      // Faithfulness and answer relevance (using LLM judge)\n      let faith = 0;\n      let ansRel = 0;\n      if (eq.expectedAnswer && eq.relevantDocIds.length > 0) {\n        const response = await this.pipeline.generate(eq.query, topK);\n        const relevantContexts = retrievedChunks\n          .filter((c) => eq.relevantDocIds.includes(c.id))\n          .map((c) => c.text);\n        const evalPrompt = [\n          'Evaluate the following RAG response.',\n          '',\n          'Query: ' + eq.query,\n          'Expected answer: ' + eq.expectedAnswer,\n          'Generated answer: ' + response.answer,\n          'Relevant contexts: ' + relevantContexts.join('\\n---\\n'),\n          '',\n          'Score faithfulness (0-1): claims supported by context.',\n          'Score answer relevance (0-1): response addresses the query.',\n          'Output JSON: { \"faithfulness\": number, \"answerRelevance\": number }',\n        ].join('\\n');\n        const scores = await this.judgeFn(evalPrompt);\n        faith = scores.faithfulness ?? 0;\n        ansRel = scores.answerRelevance ?? 0;\n      }\n\n      totalFaithfulness += faith;\n      totalAnswerRelevance += ansRel;\n\n      details.push({\n        query: eq.query,\n        faithfulness: faith,\n        hit,\n        reciprocalRank,\n        ndcg,\n      });\n    }\n\n    const n = queries.length;\n    return {\n      faithfulness: totalFaithfulness / n,\n      answerRelevance: totalAnswerRelevance / n,\n      contextRelevance: totalContextRelevance / n,\n      hitRate: totalHitRate / n,\n      mrr: totalMRR / n,\n      ndcg: totalNDCG / n,\n      details,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation bridges the gap between the vast knowledge stored in documents and the limited context window of LLMs. By combining dense and sparse retrieval with a generative model, RAG systems produce responses that are factual, attributable, and up-to-date. Effective chunking balances granularity with semantic coherence. Embedding model selection significantly impacts retrieval quality, with the MTEB benchmark providing a standardized comparison framework. Hybrid retrieval with re-ranking achieves the best balance of speed and accuracy. Response synthesis strategies range from simple concatenation to conditional fusion, depending on the query type. RAG evaluation requires specialized metrics: faithfulness measures factual grounding, hit rate and MRR assess retrieval accuracy, and NDCG captures ranking quality. Advanced patterns like Self-RAG, HyDE, agentic RAG, multi-hop RAG, and Graph RAG extend the basic RAG paradigm for specific use cases. The RAGPipeline and RAGEvaluator classes provide production-ready implementations of the core concepts."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always index with a chunking strategy that preserves document structure - recursive splitting is a good default for general-purpose RAG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use hybrid retrieval (dense + BM25 with RRF fusion) for the best balance of semantic understanding and exact match."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a cross-encoder re-ranking step between initial retrieval and generation to improve relevance of the top-k context."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always evaluate faithfulness separately from overall quality - a response can be fluent and relevant while containing factual hallucinations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For production RAG, monitor hit rate and MRR over time to detect embedding drift or knowledge base staleness."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What is the primary advantage of RAG over pure prompting for knowledge-intensive tasks?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Lower latency and computational cost\nB) Access to external, up-to-date knowledge with source attribution\nC) Better creative writing capabilities\nD) Simpler implementation and deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Which chunking strategy preserves document structure and hierarchy best?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Fixed-size with overlap\nB) Semantic chunking\nC) Recursive splitting\nD) Document-aware chunking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What does RRF (Reciprocal Rank Fusion) accomplish in hybrid retrieval?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It re-ranks results using a cross-encoder model\nB) It combines dense and sparse retrieval scores into a single ranking\nC) It generates hypothetical documents to improve query embeddings\nD) It decomposes queries into sub-questions for multi-hop search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which metric measures whether a generated response is factually supported by the retrieved context?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Answer relevance\nB) Hit rate\nC) Faithfulness\nD) NDCG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. HyDE (Hypothetical Document Embeddings) is most useful when:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The query is long and detailed\nB) The query is short or ambiguous with a large query-document semantic gap\nC) The knowledge base contains mostly structured data\nD) The generation model requires few-shot examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answer-key",
      children: "Answer Key"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Extend the RAGPipeline class with a re-ranking step using a mock cross-encoder. After initial retrieval of top-50 chunks, re-rank them and return only the top-5."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["`\typescript\nclass RAGPipelineWithReRank extends RAGPipeline {\nprivate async mockCrossEncoder(query: string, chunk: Chunk): Promise", (0,jsx_runtime.jsx)(_components.number, {
          children: " {\nconst queryTerms = new Set(query.toLowerCase().split(/\\s+/));\nconst chunkTerms = new Set(chunk.text.toLowerCase().split(/\\s+/));\nlet intersection = 0;\nqueryTerms.forEach((t) => { if (chunkTerms.has(t)) intersection++; });\nconst jaccard = intersection / (queryTerms.size + chunkTerms.size - intersection);\nconst lengthPenalty = Math.min(1, chunk.text.split(/\\s+/).length / 200);\nreturn jaccard * 0.7 + lengthPenalty * 0.3;\n}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["async retrieveWithReRank(\nquery: string,\ninitialK: number = 50,\nfinalK: number = 5\n): Promise", (0,jsx_runtime.jsx)(_components.retrievalresult, {
          children: " {\nconst initial = await this.retrieve(query, initialK, 'hybrid');\nconst reRanked = await Promise.all(\ninitial.chunks.map(async (chunk) => ({\nchunk,\nscore: await this.mockCrossEncoder(query, chunk),\n}))\n);\nreRanked.sort((a, b) => b.score - a.score);\nconst top = reRanked.slice(0, finalK);\nreturn {\nchunks: top.map((t) => t.chunk),\nscores: top.map((t) => t.score),\nmethod: 'hybrid',\n};\n}\n}\n`"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Implement a SelfRAGEngine class that decides whether retrieval is needed for a given query. If the query can be answered from parametric knowledge, skip retrieval entirely."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`\typescript\nclass SelfRAGEngine {\nprivate retrievalThreshold: number;"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["constructor(\nprivate pipeline: RAGPipeline,\nprivate confidenceFn: (query: string) => Promise", (0,jsx_runtime.jsx)(_components.number, {
          children: ",\nretrievalThreshold: number = 0.4\n) {\nthis.retrievalThreshold = retrievalThreshold;\n}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "async answer(query: string): Promise<{ answer: string; usedRetrieval: boolean }> {\nconst confidence = await this.confidenceFn(query);\nif (confidence >= this.retrievalThreshold) {\nconst response = await this.pipeline.generate(query);\nreturn { answer: response.answer, usedRetrieval: true };\n}\nconst prompt = 'Answer the following question from your knowledge:\\n' + query;\nconst directAnswer = await (this.pipeline as unknown as { llmFn: LLMFn }).llmFn(prompt);\nreturn { answer: directAnswer, usedRetrieval: false };\n}\n}\n`"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " Create a MultiHopRAGEngine that decomposes a complex question into sub-questions, retrieves for each, and synthesizes a final answer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`\typescript\nclass MultiHopRAGEngine {\nconstructor(private pipeline: RAGPipeline, private llmFn: LLMFn) {}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "async answerMultiHop(question: string): Promise<{ subQuestions: string[]; finalAnswer: string }> {\nconst decompositionPrompt = [\n'Decompose this question into simpler sub-questions that can be answered independently.',\n'Question: ' + question,\n'Output each sub-question on a new line, numbered.',\n].join('\\n');"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "const decomposition = await this.llmFn(decompositionPrompt);\nconst subQuestions = decomposition\n  .split('\\n')\n  .filter((line) => /^\\d+[.\\)]/.test(line))\n  .map((line) => line.replace(/^\\d+[.\\)]\\s*/, '').trim())\n  .filter(Boolean);\n\nconst subAnswers: string[] = [];\nfor (const sq of subQuestions) {\n  const response = await this.pipeline.generate(sq);\n  subAnswers.push(response.answer);\n}\n\nconst synthesisPrompt = [\n  'Answer the original question based on the sub-question answers.',\n  'Original: ' + question,\n  '',\n  subQuestions.map((q, i) => 'Q: ' + q + '\\nA: ' + subAnswers[i]).join('\\n\\n'),\n  '',\n  'Final answer:',\n].join('\\n');\n\nconst finalAnswer = await this.llmFn(synthesisPrompt);\nreturn { subQuestions, finalAnswer };\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "}\n}\n`"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Build a RAGCache class that caches retrieval results for repeated queries using embedding similarity to detect near-duplicate queries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`\typescript\ninterface CacheEntry {\nquery: string;\nqueryEmbedding: number[];\nresult: RetrievalResult;\ntimestamp: number;\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class RAGCache {\nprivate cache: CacheEntry[] = [];\nprivate similarityThreshold: number;\nprivate maxSize: number;"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "constructor(\nprivate embeddingFn: EmbeddingFn,\nsimilarityThreshold: number = 0.92,\nmaxSize: number = 1000\n) {\nthis.similarityThreshold = similarityThreshold;\nthis.maxSize = maxSize;\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "async lookup(query: string): Promise<RetrievalResult | null> {\nconst queryEmb = await this.embeddingFn(query);\nlet bestMatch: CacheEntry | null = null;\nlet bestScore = 0;"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "for (const entry of this.cache) {\n  const score = RAGPipeline.cosineSimilarity(queryEmb, entry.queryEmbedding);\n  if (score > bestScore) {\n    bestScore = score;\n    bestMatch = entry;\n  }\n}\n\nif (bestMatch && bestScore >= this.similarityThreshold) {\n  return bestMatch.result;\n}\n\nreturn null;\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "store(query: string, queryEmbedding: number[], result: RetrievalResult): void {\nif (this.cache.length >= this.maxSize) {\nthis.cache.sort((a, b) => a.timestamp - b.timestamp);\nthis.cache = this.cache.slice(-Math.floor(this.maxSize / 2));\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "this.cache.push({ query, queryEmbedding, result, timestamp: Date.now() });\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "clear(): void {\nthis.cache = [];\n}"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "get size(): number {\nreturn this.cache.length;\n}\n}\n`"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Write a RAGFailureAnalyzer that categorizes RAG failures into retrieval failures (missed relevant docs), context failures (retrieved but irrelevant), and generation failures (hallucination despite good context)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`\typescript\ninterface FailureReport {\nretrievalFailures: Array<{ query: string; missedDocs: string[] }>;\ncontextFailures: Array<{ query: string; irrelevantChunks: string[] }>;\ngenerationFailures: Array<{ query: string; expectedAnswer: string; generatedAnswer: string }>;\nsummary: string;\n}"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class RAGFailureAnalyzer {\nasync analyze(\nqueries: EvalQuery[],\npipeline: RAGPipeline,\njudgeFn: (prompt: string) => Promise<Record<string, number>>,\ntopK: number = 10\n): Promise", (0,jsx_runtime.jsx)(_components.failurereport, {
          children: " {\nconst retrievalFailures: FailureReport['retrievalFailures'] = [];\nconst contextFailures: FailureReport['contextFailures'] = [];\nconst generationFailures: FailureReport['generationFailures'] = [];"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "for (const eq of queries) {\n  const retrieval = await pipeline.retrieve(eq.query, topK);\n  const retrievedIds = new Set(retrieval.chunks.map((c) => c.id));\n  const missedDocs = eq.relevantDocIds.filter((id) => !retrievedIds.has(id));\n  if (missedDocs.length > 0) {\n    retrievalFailures.push({ query: eq.query, missedDocs });\n  }\n\n  const irrelevantChunks = retrieval.chunks\n    .filter((c) => !eq.relevantDocIds.includes(c.id))\n    .map((c) => c.id);\n  if (irrelevantChunks.length > retrieval.chunks.length * 0.5) {\n    contextFailures.push({ query: eq.query, irrelevantChunks });\n  }\n\n  if (eq.expectedAnswer) {\n    const response = await pipeline.generate(eq.query);\n    const evalPrompt = [\n      'Does the generated answer match the expected answer?',\n      'Query: ' + eq.query,\n      'Expected: ' + eq.expectedAnswer,\n      'Generated: ' + response.answer,\n      'Output: \"YES\" if correct, \"NO\" if incorrect.',\n    ].join('\\n');\n    const matchResult = await judgeFn(evalPrompt);\n    if (matchResult.faithfulness && matchResult.faithfulness < 0.5) {\n      generationFailures.push({\n        query: eq.query,\n        expectedAnswer: eq.expectedAnswer,\n        generatedAnswer: response.answer,\n      });\n    }\n  }\n}\n\nconst summary = [\n  'RAG Failure Analysis Report',\n  'Total queries: ' + queries.length,\n  'Retrieval failures: ' + retrievalFailures.length + ' (' + ((retrievalFailures.length / queries.length) * 100).toFixed(1) + '%)',\n  'Context failures: ' + contextFailures.length + ' (' + ((contextFailures.length / queries.length) * 100).toFixed(1) + '%)',\n  'Generation failures: ' + generationFailures.length + ' (' + ((generationFailures.length / queries.length) * 100).toFixed(1) + '%)',\n].join('\\n');\n\nreturn { retrievalFailures, contextFailures, generationFailures, summary };\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "}\n}\n`"
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