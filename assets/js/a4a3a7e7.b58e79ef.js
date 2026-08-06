"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[22052],{

/***/ 78064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_03_phase_2_llm_rag_theory_md_a4a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-03-phase-2-llm-rag-theory-md-a4a.json
const site_docs_courses_ai_agent_engineer_03_phase_2_llm_rag_theory_md_a4a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/03-phase2-llm-rag-theory","title":"Phase 2 — LLM Fundamentals + RAG Theory","description":"Duration: Weeks 4-5, ~25 hours","source":"@site/docs/courses/ai-agent-engineer/03-phase2-llm-rag-theory.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/03-phase2-llm-rag-theory","permalink":"/ai-engineering-journey/ai-agent-engineer/03-phase2-llm-rag-theory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"03-phase2-llm-rag-theory","slug":"/ai-agent-engineer/03-phase2-llm-rag-theory","title":"Phase 2 — LLM Fundamentals + RAG Theory","sidebar_label":"Phase 2 — LLM Fundamentals + RAG Theory","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Phase 1 — Python + FastAPI + AsyncIO","permalink":"/ai-engineering-journey/ai-agent-engineer/02-phase1-python-fastapi-async"},"next":{"title":"Phase 3 — AI Agents: LangGraph, CrewAI, MCP","permalink":"/ai-engineering-journey/ai-agent-engineer/04-phase3-agents-langgraph-mcp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/03-phase2-llm-rag-theory.md


const frontMatter = {
	id: '03-phase2-llm-rag-theory',
	slug: '/ai-agent-engineer/03-phase2-llm-rag-theory',
	title: 'Phase 2 — LLM Fundamentals + RAG Theory',
	sidebar_label: 'Phase 2 — LLM Fundamentals + RAG Theory',
	sidebar_position: 4
};
const contentTitle = 'Phase 2 — LLM Fundamentals + RAG Theory';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "2.1 Tokens and Tokenization",
  "id": "21-tokens-and-tokenization",
  "level": 2
}, {
  "value": "BPE (Byte-Pair Encoding)",
  "id": "bpe-byte-pair-encoding",
  "level": 3
}, {
  "value": "Why token count matters for cost",
  "id": "why-token-count-matters-for-cost",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise",
  "level": 3
}, {
  "value": "2.2 Context Window Mechanics",
  "id": "22-context-window-mechanics",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-1",
  "level": 3
}, {
  "value": "2.3 Embeddings — What a Vector Actually Represents",
  "id": "23-embeddings--what-a-vector-actually-represents",
  "level": 2
}, {
  "value": "Cosine Similarity",
  "id": "cosine-similarity",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-2",
  "level": 3
}, {
  "value": "2.4 Embedding Dimensionality Tradeoff",
  "id": "24-embedding-dimensionality-tradeoff",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-3",
  "level": 3
}, {
  "value": "2.5 Prompt Engineering",
  "id": "25-prompt-engineering",
  "level": 2
}, {
  "value": "Zero-shot",
  "id": "zero-shot",
  "level": 3
}, {
  "value": "Few-shot",
  "id": "few-shot",
  "level": 3
}, {
  "value": "Chain-of-Thought",
  "id": "chain-of-thought",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-4",
  "level": 3
}, {
  "value": "2.6 Structured Output / Function Calling",
  "id": "26-structured-output--function-calling",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-5",
  "level": 3
}, {
  "value": "2.7 Vector Search Math",
  "id": "27-vector-search-math",
  "level": 2
}, {
  "value": "Cosine Similarity",
  "id": "cosine-similarity-1",
  "level": 3
}, {
  "value": "Dot Product",
  "id": "dot-product",
  "level": 3
}, {
  "value": "Euclidean Distance",
  "id": "euclidean-distance",
  "level": 3
}, {
  "value": "Why cosine wins for text",
  "id": "why-cosine-wins-for-text",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-6",
  "level": 3
}, {
  "value": "2.8 ANN Indexes: HNSW",
  "id": "28-ann-indexes-hnsw",
  "level": 2
}, {
  "value": "The tradeoff",
  "id": "the-tradeoff",
  "level": 3
}, {
  "value": "ChromaDB default",
  "id": "chromadb-default",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-7",
  "level": 3
}, {
  "value": "2.9 RAG Architecture End-to-End",
  "id": "29-rag-architecture-end-to-end",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-8",
  "level": 3
}, {
  "value": "2.10 Chunking Strategies",
  "id": "210-chunking-strategies",
  "level": 2
}, {
  "value": "Fixed-size (naive)",
  "id": "fixed-size-naive",
  "level": 3
}, {
  "value": "Recursive character splitting (better)",
  "id": "recursive-character-splitting-better",
  "level": 3
}, {
  "value": "Semantic chunking (best for RAG)",
  "id": "semantic-chunking-best-for-rag",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-9",
  "level": 3
}, {
  "value": "2.11 Retrieval Ranking + Re-ranking",
  "id": "211-retrieval-ranking--re-ranking",
  "level": 2
}, {
  "value": "First-pass retrieval",
  "id": "first-pass-retrieval",
  "level": 3
}, {
  "value": "Second-pass re-ranking",
  "id": "second-pass-re-ranking",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-10",
  "level": 3
}, {
  "value": "2.12 Vector DB Comparison",
  "id": "212-vector-db-comparison",
  "level": 2
}, {
  "value": "ChromaDB",
  "id": "chromadb",
  "level": 3
}, {
  "value": "Qdrant",
  "id": "qdrant",
  "level": 3
}, {
  "value": "pgvector",
  "id": "pgvector",
  "level": 3
}, {
  "value": "Your choice",
  "id": "your-choice",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-11",
  "level": 3
}, {
  "value": "2.13 Hallucination in RAG",
  "id": "213-hallucination-in-rag",
  "level": 2
}, {
  "value": "RAG-specific hallucination causes",
  "id": "rag-specific-hallucination-causes",
  "level": 3
}, {
  "value": "Mitigations",
  "id": "mitigations",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-12",
  "level": 3
}, {
  "value": "Phase 2 Project: Public RAG Memory API",
  "id": "phase-2-project-public-rag-memory-api",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 3
}, {
  "value": "Endpoint spec",
  "id": "endpoint-spec",
  "level": 3
}, {
  "value": "Week-by-week build",
  "id": "week-by-week-build",
  "level": 3
}, {
  "value": "README documentation requirements",
  "id": "readme-documentation-requirements",
  "level": 3
}, {
  "value": "Server skeleton",
  "id": "server-skeleton",
  "level": 3
}, {
  "value": "2.14 Fine-Tuning: LoRA, QLoRA, When to Use",
  "id": "214-fine-tuning-lora-qlora-when-to-use",
  "level": 2
}, {
  "value": "RAG vs Fine-Tuning",
  "id": "rag-vs-fine-tuning",
  "level": 3
}, {
  "value": "LoRA (Low-Rank Adaptation)",
  "id": "lora-low-rank-adaptation",
  "level": 3
}, {
  "value": "QLoRA (Quantized LoRA)",
  "id": "qlora-quantized-lora",
  "level": 3
}, {
  "value": "When to fine-tune (and when not to)",
  "id": "when-to-fine-tune-and-when-not-to",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-13",
  "level": 3
}, {
  "value": "2.15 Model Evaluation + Comparison",
  "id": "215-model-evaluation--comparison",
  "level": 2
}, {
  "value": "Building an eval harness",
  "id": "building-an-eval-harness",
  "level": 3
}, {
  "value": "What to measure",
  "id": "what-to-measure",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-14",
  "level": 3
}, {
  "value": "2.16 Guardrails / Content Moderation",
  "id": "216-guardrails--content-moderation",
  "level": 2
}, {
  "value": "Input guardrails: detect harmful queries",
  "id": "input-guardrails-detect-harmful-queries",
  "level": 3
}, {
  "value": "Output guardrails: validate model responses",
  "id": "output-guardrails-validate-model-responses",
  "level": 3
}, {
  "value": "Integrating guardrails into your RAG pipeline",
  "id": "integrating-guardrails-into-your-rag-pipeline",
  "level": 3
}, {
  "value": "Using dedicated guardrail libraries",
  "id": "using-dedicated-guardrail-libraries",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-15",
  "level": 3
}, {
  "value": "Phase 2 Done Checkpoint",
  "id": "phase-2-done-checkpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "phase-2--llm-fundamentals--rag-theory",
        children: "Phase 2 — LLM Fundamentals + RAG Theory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Weeks 4-5, ~25 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Understand embeddings, vector search, chunking strategies, and RAG architecture well enough to defend every design decision in a technical interview. Build a public RAG demo API."]
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
        href: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens and tokenization (BPE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate token count of a paragraph within 20% without a tool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context window mechanics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain why multi-turn chat resends the whole history every call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embeddings — what a vector represents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain cosine similarity in one concrete sentence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding dimensionality (cost/quality tradeoff)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name 2 OpenAI embedding models, their dimensions, pick the right one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt engineering: zero-shot, few-shot, CoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a few-shot prompt that improves output vs zero-shot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured output / function calling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a tool-call schema by hand for both OpenAI and Anthropic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector search math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain why cosine wins for text embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANN indexes: HNSW vs exact search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain speed/accuracy tradeoff HNSW makes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG architecture end-to-end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draw the full pipeline from memory with every arrow labeled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunking strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain a real failure mode of naive fixed-size chunking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval ranking + re-ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain why a re-rancer improves results even with a good retriever"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB comparison (ChromaDB/Qdrant/pgvector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a 1-paragraph honest comparison citing real tradeoffs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination in RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain 2 RAG-specific hallucination causes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning: LoRA, QLoRA, when to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain when fine-tuning beats RAG and vice versa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model evaluation + comparison (GPT vs Claude vs local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run an eval harness comparing 2 models on the same test set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrails / content moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add input + output guardrails to your RAG endpoint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-tokens-and-tokenization",
      children: "2.1 Tokens and Tokenization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LLMs don't see characters or words. They see ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tokens"
      }), " — subword units produced by a tokenizer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bpe-byte-pair-encoding",
      children: "BPE (Byte-Pair Encoding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tiktoken\n\nencoder = tiktoken.encoding_for_model(\"gpt-4\")\ntokens = encoder.encode(\"The cat sat on the mat.\")\nprint(len(tokens))  # ~6 tokens\nprint(tokens)       # [976, 9059, 11739, 402, 279, 21491, 13]\n\n# Decode back\ntext = encoder.decode(tokens)\nprint(text)  # \"The cat sat on the mat.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-token-count-matters-for-cost",
      children: "Why token count matters for cost"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "tiktoken"
      }), " lets you estimate cost before making an API call:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def estimate_cost(prompt: str, model: str = \"gpt-4\") -> float:\n    encoder = tiktoken.encoding_for_model(model)\n    tokens = encoder.encode(prompt)\n    # GPT-4: $30/1M input tokens\n    return len(tokens) * 30 / 1_000_000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take 5 paragraphs from your own writing. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tiktoken"
      }), " to count tokens. Try to estimate before running — see how close you get. Then check: how many tokens does a 500-word article produce? (Answer: ~650-700 tokens, gpt-4)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-context-window-mechanics",
      children: "2.2 Context Window Mechanics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Every LLM call sends the entire conversation history. There is no hidden \"memory.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Each API call sends ALL of this:\nmessages = [\n    {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n    {\"role\": \"user\", \"content\": \"What is RAG?\"},\n    {\"role\": \"assistant\", \"content\": \"RAG is Retrieval-Augmented Generation...\"},\n    {\"role\": \"user\", \"content\": \"Give me a code example\"},\n    # Next call appends here, but sends everything above too\n]\n\nimport tiktoken\ntotal_tokens = sum(len(tiktoken.encoding_for_model(\"gpt-4\").encode(m[\"content\"])) for m in messages)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical implication:"
      }), " At ~100 conversation turns, you hit context limits. This is why:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long conversations need summarization (condense history every N turns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent pipelines that chain multiple calls must track growing token costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A vector memory store (your ChromaDB server) lets agents retrieve relevant history instead of re-sending everything"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a script that simulates 10 conversation turns, counting tokens for each turn. Print total tokens sent per call. This visualizes why \"conversation history\" gets expensive fast."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-embeddings--what-a-vector-actually-represents",
      children: "2.3 Embeddings — What a Vector Actually Represents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An embedding is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semantic compression"
      }), " — a list of N floats (usually 1536 or 768) that represents the \"meaning\" of a piece of text. Similar texts have similar vectors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\n\nclient = OpenAI()\n\ntexts = [\n    \"The cat sat on the mat\",\n    \"A dog played in the park\",\n    \"The stock market crashed today\",\n]\n\nresponses = client.embeddings.create(\n    model=\"text-embedding-3-small\",\n    input=texts,\n)\n\nfor text, embedding in zip(texts, responses.data):\n    print(f\"{text[:30]:30s} ? vector of {len(embedding.embedding)} floats\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cosine-similarity",
      children: "Cosine Similarity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef cosine_similarity(a: list[float], b: list[float]) -> float:\n    a, b = np.array(a), np.array(b)\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\n\n# Text 0 (\"cat on mat\") and Text 1 (\"dog in park\") should be more similar\n# than Text 0 and Text 2 (\"stock market\")\nsim_0_1 = cosine_similarity(embeddings[0], embeddings[1])\nsim_0_2 = cosine_similarity(embeddings[0], embeddings[2])\nprint(f\"cat-dog similarity: {sim_0_1:.3f}\")\nprint(f\"cat-market similarity: {sim_0_2:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a 20-line script: embed 3 sentences (2 similar, 1 unrelated), print cosine similarities, confirm the math matches intuition. This is the foundation exercise — skip nothing in it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-embedding-dimensionality-tradeoff",
      children: "2.4 Embedding Dimensionality Tradeoff"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dimensions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost/1M tokens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "text-embedding-3-small"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1536"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default — best cost/quality balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "text-embedding-3-large"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-accuracy retrieval, semantic search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "text-embedding-3-small"
            }), " (dimensions=256)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-sensitive, good-enough accuracy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Reduce dimensions via the API (saves storage, slight quality loss)\nresponse = client.embeddings.create(\n    model=\"text-embedding-3-small\",\n    input=\"Hello world\",\n    dimensions=256,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Start with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-3-small"
      }), " at full 1536 dimensions. Reduce dimensions only if benchmarked accuracy on your specific data stays above threshold at 256."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embed the same 3 sentences at 1536, 512, and 256 dimensions. Compare cosine similarity outputs — how much does ranking change?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-prompt-engineering",
      children: "2.5 Prompt Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zero-shot",
      children: "Zero-shot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "prompt = \"Translate to French: Hello, how are you?\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "few-shot",
      children: "Few-shot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "prompt = \"\"\"Translate English to French:\n\nEnglish: Hello, how are you?\nFrench: Bonjour, comment allez-vous?\n\nEnglish: What time is it?\nFrench: Quelle heure est-il?\n\nEnglish: Where is the train station?\nFrench:\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-of-thought",
      children: "Chain-of-Thought"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "prompt = \"\"\"Solve this problem step by step.\n\nA customer bought a gym membership for ?12,000/year. \nThey used it for 4 months. What's the prorated refund?\n\nStep 1: Monthly cost = 12000 / 12 = ?1000 per month\nStep 2: Months unused = 12 - 4 = 8 months\nStep 3: Refund = 1000 * 8 = ?8000\n\nA customer bought a gym membership for ?18,000/year.\nThey used it for 7 months. What's the prorated refund?\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take one real prompt from your existing memory server (or a simple Q&A prompt). Write a zero-shot version. Write a few-shot version with 3 examples. Run both. Compare output format consistency and accuracy. Write down the diff."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-structured-output--function-calling",
      children: "2.6 Structured Output / Function Calling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# OpenAI format\ntools = [\n    {\n        \"type\": \"function\",\n        \"function\": {\n            \"name\": \"create_booking\",\n            \"description\": \"Create a booking from a lead\",\n            \"parameters\": {\n                \"type\": \"object\",\n                \"properties\": {\n                    \"lead_id\": {\"type\": \"integer\", \"description\": \"Lead identifier\"},\n                    \"amount\": {\"type\": \"number\", \"description\": \"Booking amount\"},\n                    \"payment_method\": {\n                        \"type\": \"string\",\n                        \"enum\": [\"upi\", \"cash\", \"card\", \"cheque\"]\n                    },\n                },\n                \"required\": [\"lead_id\", \"amount\", \"payment_method\"],\n            },\n        }\n    }\n]\n\nresponse = client.chat.completions.create(\n    model=\"gpt-4\",\n    messages=[{\"role\": \"user\", \"content\": \"Create booking for lead 42, amount 5000 via UPI\"}],\n    tools=tools,\n    tool_choice=\"auto\",\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Anthropic format\ntool_spec = {\n    \"name\": \"create_booking\",\n    \"description\": \"Create a booking from a lead\",\n    \"input_schema\": {\n        \"type\": \"object\",\n        \"properties\": {\n            \"lead_id\": {\"type\": \"integer\"},\n            \"amount\": {\"type\": \"number\"},\n            \"payment_method\": {\"type\": \"string\", \"enum\": [\"upi\", \"cash\", \"card\", \"cheque\"]},\n        },\n        \"required\": [\"lead_id\", \"amount\", \"payment_method\"],\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write the same tool schema (a RAG query tool with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query: str"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top_k: int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collection: str"
      }), ") in both OpenAI and Anthropic formats by hand. Note the structural differences."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-vector-search-math",
      children: "2.7 Vector Search Math"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cosine-similarity-1",
      children: "Cosine Similarity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cosine(A, B) = (A · B) / (|A| * |B|)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Range: -1 (opposite) to 1 (identical). For text embeddings, most values are between 0 and 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dot-product",
      children: "Dot Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without normalization, dot product varies with magnitude. Two identical meanings expressed at different lengths (e.g., \"hello\" vs \"hello, how are you today sir\") would have different dot products but similar cosine similarity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "euclidean-distance",
      children: "Euclidean Distance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "euclidean(A, B) = sqrt(sum((A_i - B_i)^2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Range: 0 to inf. For normalized vectors, this is monotonic with cosine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-cosine-wins-for-text",
      children: "Why cosine wins for text"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text embedding models are trained to normalize embeddings. Cosine similarity is equivalent to dot product on normalized vectors. It's the default because it's unaffected by text length — a short query semantically similar to a long document still scores high."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take 2 similar and 2 dissimilar sentence pairs. Compute all 3 metrics (cosine, dot product, Euclidean). Note that ranking is identical for all 3 on normalized vectors — confirm this empirically."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-ann-indexes-hnsw",
      children: "2.8 ANN Indexes: HNSW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exact search:"
      }), " Compare query vector against every stored vector. Correct, but O(N) — takes 1 second for 1M vectors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HNSW (Hierarchical Navigable Small World):"
      }), " Builds a multi-layer graph. Search starts at the top layer (fewest nodes), navigates neighbors, descends to denser layers. O(log N) — takes ~5ms for 1M vectors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-tradeoff",
      children: "The tradeoff"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exact (Flat)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HNSW"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95-99.9% (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index build time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (graph construction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector + ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector + ID + graph edges (2-3x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic inserts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires rebuilding (or incremental HNSW)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chromadb-default",
      children: "ChromaDB default"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ChromaDB uses HNSW by default. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef_search"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef_construction"
      }), " parameters tune the speed/recall tradeoff."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import chromadb\n\nclient = chromadb.PersistentClient(path=\"./chroma_data\")\ncollection = client.create_collection(\n    name=\"my_docs\",\n    metadata={\"hnsw:space\": \"cosine\", \"hnsw:ef_construction\": 200, \"hnsw:ef_search\": 50},\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Insert 1000 vectors. Search with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef_search=10"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef_search=50"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef_search=200"
      }), ". Measure recall (compared to exact) and latency for each. This is the data you cite when someone asks \"why HNSW?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-rag-architecture-end-to-end",
      children: "2.9 RAG Architecture End-to-End"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    INGESTION PIPELINE\n                    +--------------+\n                    ¦   Document   ¦\n                    ¦   (PDF/TXT)  ¦\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦   Chunking   ¦   500-800 tokens, 50-100 overlap\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦   Embedding  ¦   text-embedding-3-small ? 1536-dim vector\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦  Vector DB   ¦   ChromaDB stores vector + text + metadata\n                    ¦  (ChromaDB)  ¦\n                    +--------------+\n\n                    QUERY PIPELINE\n                    +--------------+\n                    ¦   User query  ¦   \"What is the membership fee?\"\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦   Embedding  ¦   Same model as ingestion\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦  Similarity  ¦   Cosine search ? top_k chunks\n                    ¦   Search     ¦\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦ Build context ¦   Retrieved chunks concatenated\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦   LLM call   ¦   Prompt + context + question ? answer\n                    +--------------+\n                           ?\n                    +--------------+\n                    ¦  Return to   ¦   Answer + cited chunks + scores\n                    ¦   User       ¦\n                    +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Draw this pipeline from memory without looking at the diagram. Every arrow needs a label. Every box needs a data type (vector, string, list). This is the single most important diagram in modern AI engineering — it's asked in almost every interview."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-chunking-strategies",
      children: "2.10 Chunking Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fixed-size-naive",
      children: "Fixed-size (naive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fixed_chunks(text: str, chunk_size: int = 500, overlap: int = 50) -> list[str]:\n    chunks = []\n    start = 0\n    while start < len(text):\n        end = start + chunk_size\n        chunks.append(text[start:end])\n        start = end - overlap\n    return chunks\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure mode:"
      }), " Cuts mid-sentence, mid-table, mid-code-block. The chunk might say \"The price is ?\" and the next chunk continues \"12,000 per year\" — retrieval gets the first chunk and misses the price."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursive-character-splitting-better",
      children: "Recursive character splitting (better)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# LangChain's recursive splitter — split on paragraphs first, then sentences, then characters\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,\n    chunk_overlap=50,\n    separators=[\"\\n\\n\", \"\\n\", \".\", \"!\", \"?\", \",\", \" \", \"\"],\n)\nchunks = splitter.split_text(long_text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantic-chunking-best-for-rag",
      children: "Semantic chunking (best for RAG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def semantic_chunks(sentences: list[str], threshold: float = 0.3) -> list[list[str]]:\n    \"\"\"Group sentences into chunks where adjacent sentences are semantically similar.\"\"\"\n    chunks = [[sentences[0]]]\n    for i in range(1, len(sentences)):\n        sim = cosine_similarity(\n            embed(sentences[i-1]),\n            embed(sentences[i]),\n        )\n        if sim >= threshold:\n            chunks[-1].append(sentences[i])\n        else:\n            chunks.append([sentences[i]])\n    return [\" \".join(c) for c in chunks]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take a real PDF (a Terms of Service document, or the Indian Constitution preamble). Chunk it 3 ways: fixed-size no overlap, fixed-size with overlap, recursive. Manually inspect where each one cuts badly. Note the worst failure for each method."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-retrieval-ranking--re-ranking",
      children: "2.11 Retrieval Ranking + Re-ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "first-pass-retrieval",
      children: "First-pass retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Top-k from vector search. Fast but imperfect — similar-looking chunks may be semantically wrong."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "second-pass-re-ranking",
      children: "Second-pass re-ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A cross-encoder model (e.g., Cohere Rerank, BGE-reranker) scores each retrieved chunk against the user's query explicitly. Slower (O(k) per query) but significantly more accurate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Without re-ranker: retrieve top-5 from vector search\n# Without re-ranker: retrieve top-20 from vector search, then re-rank to top-5\n\nimport cohere\nco = cohere.Client(api_key=\"...\")\nresults = co.rerank(\n    model=\"rerank-english-v3.0\",\n    query=\"What is the membership fee?\",\n    documents=top_20_chunks,  # 20 from first-pass\n    top_n=5,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this works:"
      }), " Vector search compares dense embeddings (semantic). Re-ranking uses cross-attention between query and document — more accurate but too expensive to do on 1M documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run 5 queries through: vector-only top-5 ? LLM answer. Then vector top-20 ? re-rank to top-5 ? LLM answer. Compare answer quality. If you don't have a re-ranker API, just note which chunks the re-ranker would promote/demote based on manual inspection."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-vector-db-comparison",
      children: "2.12 Vector DB Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chromadb",
      children: "ChromaDB"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Con"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Simplest setup (", (0,jsx_runtime.jsx)(_components.code, {
              children: "pip install chromadb"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in hybrid search (keyword + vector)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to ~10M vectors before performance degrades"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW index built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No RBAC, no multi-tenancy built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No external infra needed (embedding DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Personal projects, demos, small-to-medium RAG (your use case exactly)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qdrant",
      children: "Qdrant"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Con"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in hybrid search (BM25 + vector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires running a server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload filtering, geo search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More configuration than ChromaDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Faster at scale (1M+ vectors)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Production RAG with filtering requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pgvector",
      children: "pgvector"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Con"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No separate infra (runs in Postgres)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing is slower than dedicated DBs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional + vector in one DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only exact search or IVF (no HNSW built-in)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL interface for hybrid queries"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " When you already run Postgres and have moderate vector needs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "your-choice",
      children: "Your choice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the RAG demo: ChromaDB is correct. You can spin it up with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install chromadb"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentClient"
      }), ". Later, if the demo takes off, Qdrant or pgvector are natural upgrades."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-11",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read all three \"When to use\" pages. Write a 1-paragraph honest comparison. This paragraph goes in your RAG demo README and is a direct interview talking point."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "213-hallucination-in-rag",
      children: "2.13 Hallucination in RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rag-specific-hallucination-causes",
      children: "RAG-specific hallucination causes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stale chunks:"
          }), " Retrieved chunks are outdated. The user asks \"What's the price?\" and the chunk says \"?10,000\" but the current price is \"?15,000.\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Irrelevant-but-similar chunks:"
          }), " Vector search returns chunks that ", (0,jsx_runtime.jsx)(_components.em, {
            children: "look"
          }), " semantically close but don't actually answer the question. The LLM includes them in context and fabricates an answer rather than saying \"I don't know.\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context overflow:"
          }), " Retrieved chunks exceed context window. The LLM ignores relevant chunks at the end of the context."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mitigations",
      children: "Mitigations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Mitigation 1: Add a \"no answer\" refusal to the system prompt\nSYSTEM_PROMPT = \"\"\"You are a helpful assistant. Use the provided context to answer.\nIf the context does not contain the answer, say \"I don't have enough information to answer this question.\"\nDo not make up information.\"\"\"\n\n# Mitigation 2: Show similarity scores in the UI so users can judge reliability\n# Mitigation 3: Use a re-ranker to filter out low-confidence chunks\n# Mitigation 4: Set a minimum similarity threshold (don't retrieve chunks below 0.7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-12",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take a query that retrieves chunks but none of them answer the question. Run it with and without the \"I don't know\" system prompt instruction. Compare the outputs. Document what happens when you don't include the refusal instruction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-2-project-public-rag-memory-api",
      children: "Phase 2 Project: Public RAG Memory API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client --? FastAPI --? ChromaDB\n               ¦\n               +--? Redis (rate limiting)\n               ¦\n               +--? OpenAI (embeddings + generation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "endpoint-spec",
      children: "Endpoint spec"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST   /v1/collections                    Create a named collection\nGET    /v1/collections                    List collections\nDELETE /v1/collections/{id}               Delete a collection\n\nPOST   /v1/collections/{id}/documents     Upload doc ? chunk ? embed ? store\nGET    /v1/collections/{id}/documents     List documents\nDELETE /v1/collections/{id}/documents/{doc_id}\n\nPOST   /v1/collections/{id}/query         RAG query: answer + cited chunks + scores\n\nPOST   /v1/auth/token                     Issue scoped API key\nGET    /healthz                           Liveness probe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-by-week-build",
      children: "Week-by-week build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Week 1 — Core API"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Days 1-2: Pydantic schemas for all endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 3: Document ingestion (chunk ? embed ? store)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 4: Query endpoint (embed ? search ? augment ? generate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 5: Multi-tenancy + API key auth"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Week 2 — Hardening + deployment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Day 1: Rate limiting with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "slowapi"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 2: Docker + docker-compose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 3: Deploy to Hetzner behind Cloudflare Tunnel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 4: README with architecture diagram + curl examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Day 5: 2-minute demo video"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readme-documentation-requirements",
      children: "README documentation requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture diagram (the one from section 2.9, rendered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking strategy rationale (why 500-800 tokens, why 50 overlap)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Embedding model choice (why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text-embedding-3-small"
        }), " vs large)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector DB choice (your honest comparison from section 2.12)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting and cost-control approach"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "curl"
        }), " example for every endpoint"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-skeleton",
      children: "Server skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# app/main.py\nfrom fastapi import FastAPI\nfrom app.config import settings\nfrom app.routers import collections, documents, query, auth\n\napp = FastAPI(title=\"RAG Demo API\", version=\"1.0.0\")\n\napp.include_router(auth.router, prefix=\"/v1/auth\")\napp.include_router(collections.router, prefix=\"/v1/collections\")\napp.include_router(documents.router, prefix=\"/v1/collections/{id}/documents\")\napp.include_router(query.router, prefix=\"/v1/collections\")\n\n@app.get(\"/healthz\")\nasync def healthz():\n    return {\"status\": \"ok\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "214-fine-tuning-lora-qlora-when-to-use",
      children: "2.14 Fine-Tuning: LoRA, QLoRA, When to Use"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts a pretrained model to your specific task. RAG and fine-tuning are complementary, not replacements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rag-vs-fine-tuning",
      children: "RAG vs Fine-Tuning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fine-Tuning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adds knowledge at query time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bakes knowledge into weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cheaper per query (no training cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive upfront (training cost)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to update (swap documents)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires retraining to update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for: factual Q&A, customer docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for: style, tone, output format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No model weights change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model weights change"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lora-low-rank-adaptation",
      children: "LoRA (Low-Rank Adaptation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of updating all weights, LoRA inserts small trainable matrices:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Full fine-tune:  ?W with shape (d, k) ? 7B parameters updated\nLoRA:           BA with shapes (d, r) × (r, k) ? 0.1% parameters updated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import AutoModelForCausalLM, LoraConfig, TrainingArguments\nfrom peft import get_peft_model\n\nmodel = AutoModelForCausalLM.from_pretrained(\"mistralai/Mistral-7B-v0.1\")\n\nlora_config = LoraConfig(\n    r=8,              # rank — higher = more capacity, more memory\n    lora_alpha=32,    # scaling factor\n    target_modules=[\"q_proj\", \"v_proj\"],\n    lora_dropout=0.05,\n    bias=\"none\",\n    task_type=\"CAUSAL_LM\",\n)\n\nmodel = get_peft_model(model, lora_config)\nprint(f\"Trainable params: {model.num_parameters(only_trainable=True):,}\")\n# ~4.2M params instead of 7B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qlora-quantized-lora",
      children: "QLoRA (Quantized LoRA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QLoRA quantizes the base model to 4-bit, then applies LoRA on top. Fits a 7B model in ~8GB VRAM."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import BitsAndBytesConfig\n\nquant_config = BitsAndBytesConfig(\n    load_in_4bit=True,\n    bnb_4bit_quant_type=\"nf4\",\n    bnb_4bit_compute_dtype=\"float16\",\n)\n\nmodel = AutoModelForCausalLM.from_pretrained(\n    \"mistralai/Mistral-7B-v0.1\",\n    quantization_config=quant_config,\n)\n# Then apply LoRA on top\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-fine-tune-and-when-not-to",
      children: "When to fine-tune (and when not to)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fine-tune for:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output format (always respond in JSON)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tone/style (technical docs, customer support voice)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain vocabulary (medical, legal, financial terms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reducing latency by making smaller models as good as larger ones for your task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't fine-tune for:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding factual knowledge (use RAG)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-off tasks (use prompting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rapidly changing information (RAG is cheaper to update)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-13",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your RAG demo doesn't need fine-tuning — RAG is the right solution for your use case. But as an exercise: download a small model (Mistral-7B), apply LoRA config, and print trainable parameter count. Then argue in writing why RAG beats fine-tuning for a document Q&A system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "215-model-evaluation--comparison",
      children: "2.15 Model Evaluation + Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you have multiple models (GPT-4, Claude, local LLM), you need a systematic way to compare them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "building-an-eval-harness",
      children: "Building an eval harness"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nfrom openai import OpenAI\nfrom anthropic import Anthropic\n\nopenai_client = OpenAI()\nanthropic_client = Anthropic()\n\ntest_cases = [\n    {\"question\": \"What is RAG?\", \"expected_topics\": [\"retrieval\", \"generation\", \"knowledge base\"]},\n    {\"question\": \"Explain cosine similarity\", \"expected_topics\": [\"vector\", \"angle\", \"0 to 1\"]},\n]\n\ndef evaluate_model(model: str, provider: str, test_cases: list) -> dict:\n    results = []\n    for tc in test_cases:\n        if provider == \"openai\":\n            response = openai_client.chat.completions.create(\n                model=model,\n                messages=[{\"role\": \"user\", \"content\": tc[\"question\"]}],\n            )\n            answer = response.choices[0].message.content\n        elif provider == \"anthropic\":\n            response = anthropic_client.messages.create(\n                model=model,\n                max_tokens=500,\n                messages=[{\"role\": \"user\", \"content\": tc[\"question\"]}],\n            )\n            answer = response.content[0].text\n\n        score = sum(1 for t in tc[\"expected_topics\"] if t.lower() in answer.lower())\n        results.append({\n            \"question\": tc[\"question\"],\n            \"score\": score / len(tc[\"expected_topics\"]),\n            \"answer_snippet\": answer[:200],\n        })\n\n    avg_score = sum(r[\"score\"] for r in results) / len(results)\n    return {\"model\": model, \"avg_score\": avg_score, \"results\": results}\n\n# Run comparison\ngpt_score = evaluate_model(\"gpt-4\", \"openai\", test_cases)\nclaude_score = evaluate_model(\"claude-sonnet-4-20250514\", \"anthropic\", test_cases)\n\nprint(f\"GPT-4: {gpt_score['avg_score']:.2%}\")\nprint(f\"Claude: {claude_score['avg_score']:.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-to-measure",
      children: "What to measure"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it captures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to measure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factual accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does the answer contain expected facts?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyword overlap, LLM-as-judge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does the answer fabricate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human review, external fact check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency (TTFT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How fast does it start responding?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "time"
            }), " the first token"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$ per 1K queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token count × pricing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instruction following"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does it obey format constraints?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex/JSON parse success rate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-14",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build an eval harness with 5 test cases. Run the same prompt through GPT-4 and Claude. Score each on a 1-5 rubric. Write a paragraph comparing them for your RAG use case. Which wins and why?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "216-guardrails--content-moderation",
      children: "2.16 Guardrails / Content Moderation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents that talk to users need guardrails — both input (what users can ask) and output (what the model can say)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input-guardrails-detect-harmful-queries",
      children: "Input guardrails: detect harmful queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\n\nHARMLESS_THRESHOLD = 0.7\n\n# Simple keyword-based pre-filter\nBLOCKED_PATTERNS = [\n    r\"ignore.*instructions\",\n    r\"forget.*previous\",\n    r\"system.*prompt.*reveal\",\n    r\"generate.*harmful.*content\",\n]\n\ndef input_guardrail(user_input: str) -> tuple[bool, str]:\n    \"\"\"Returns (blocked, reason)\"\"\"\n    for pattern in BLOCKED_PATTERNS:\n        if re.search(pattern, user_input.lower()):\n            return True, \"Prompt injection attempt detected\"\n    return False, \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-guardrails-validate-model-responses",
      children: "Output guardrails: validate model responses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Block personal information in responses\nPII_PATTERNS = [\n    r\"\\b\\d{3}-\\d{2}-\\d{4}\\b\",           # SSN\n    r\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b\",  # Email\n    r\"\\b(?:\\+?1[-.]?)?\\(?[2-9]\\d{2}\\)?[-.]?\\d{3}[-.]?\\d{4}\\b\",  # Phone\n]\n\ndef output_guardrail(response: str) -> tuple[bool, str]:\n    for pattern in PII_PATTERNS:\n        if re.search(pattern, response):\n            return True, \"Response contains PII\"\n    return False, \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integrating-guardrails-into-your-rag-pipeline",
      children: "Integrating guardrails into your RAG pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.post(\"/v1/query\")\nasync def query_with_guardrails(request: QueryRequest):\n    # Input guardrail\n    blocked, reason = input_guardrail(request.query)\n    if blocked:\n        raise HTTPException(status_code=400, detail=reason)\n\n    # Normal RAG pipeline\n    result = rag_pipeline(request.query)\n\n    # Output guardrail\n    blocked, reason = output_guardrail(result[\"answer\"])\n    if blocked:\n        result[\"answer\"] = \"I can't provide that information.\"\n\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-dedicated-guardrail-libraries",
      children: "Using dedicated guardrail libraries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install guardrails-ai\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from guardrails import Guard\nfrom guardrails.validators import TwoWords, LowerCase\n\nguard = Guard().use_many(\n    TwoWords(),    # Response must be exactly 2 words\n    LowerCase(),   # Response must be lowercase\n)\n\nresponse = guard.validate(\"hello world\")\nprint(response.validation_passed)  # True\n\nresponse = guard.validate(\"Hello World!\")\nprint(response.validation_passed)  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-15",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add input + output guardrails to your RAG demo query endpoint. Test with a prompt injection attempt. Test that the model doesn't return email addresses. Verify the guardrails block the right things and pass normal queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface Tool { name: string; description: string; execute: (args:Record<string,unknown>) => Promise<string> }\ninterface Message { role: \"system\"|\"user\"|\"assistant\"; content: string }\ninterface AgentConfig { model: string; maxTokens: number; temperature: number }\nclass Agent {\nprivate messages: Message[] = []; private tools: Map<string,Tool> = new Map()\nconstructor(private config: AgentConfig) {}\naddTool(t: Tool): void { this.tools.set(t.name, t) }\nasync think(input: string): Promise<string> {\nthis.messages.push({role:\"user\",content:input})\nconst response = await this.llmCall(this.messages)\nconst parsed = this.parseResponse(response)\nif(parsed.toolCall) { const result = await this.tools.get(parsed.toolCall.name)!.execute(parsed.toolCall.args)\nthis.messages.push({role:\"assistant\",content:", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tool ${parsed.toolCall.name}: ${result}"
      }), "}); return this.think(\"\") }\nthis.messages.push({role:\"assistant\",content:parsed.text})\nreturn parsed.text\n}\nprivate parseResponse(r: string): {toolCall?:{name:string,args:Record<string,unknown>};text:string} {\nconst match = r.match(/", (0,jsx_runtime.jsx)(_components.a, {
        href: "tool:(%5Cw+)",
        children: "tool:(\\w+)"
      }), "([\\s\\S]*?)</tool>/)\nif(match) try { return {toolCall:{name"]
    }), (0,jsx_runtime.jsx)(_components.div, {
      children: "1"
    }), ",args:JSON.parse(match[2])},text:\"\"} } catch { return {text:r} }\nreturn {text:r}\n}\nprivate async llmCall(msgs: Message[]): Promise<string> {\nconst res = await fetch(\"", (0,jsx_runtime.jsx)(_components.a, {
      href: "https://api.openai.com/v1/chat/completions",
      children: "https://api.openai.com/v1/chat/completions"
    }), "\", {\nmethod:\"POST\", headers:{\"Content-Type\":\"application/json\",\"Authorization\":", (0,jsx_runtime.jsx)(_components.code, {
      children: "Bearer ${process.env.OPENAI_API_KEY}"
    }), "},\nbody:JSON.stringify({model:this.config.model,messages:msgs,max_tokens:this.config.maxTokens,temperature:this.config.temperature})\n})\nconst data = await res.json()\nreturn data.choices[0].message.content\n}\n}\nclass Planner {\nplan(goal: string): string[] { return goal.split(\". \").map(s => s.trim()).filter(Boolean) }\n}\nexport { Agent, AgentConfig, Tool, Message, Planner }", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-2-done-checkpoint",
      children: "Phase 2 Done Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before moving to Phase 3, you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Estimate token count of any paragraph within 20% without a tool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Draw the full RAG pipeline from memory (ingestion + query)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a few-shot prompt that measurably improves output over zero-shot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a tool schema in both OpenAI and Anthropic formats by hand"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain why cosine similarity wins for text embeddings in one sentence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain a real failure mode of fixed-size chunking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a 1-paragraph comparison of ChromaDB vs Qdrant vs pgvector"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Defend every architectural choice in your RAG demo README"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Public RAG demo API deployed and returning cited answers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Can explain when fine-tuning beats RAG and vice versa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Run an eval harness comparing 2 models on the same test set"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Input + output guardrails added and verified on your RAG endpoint"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated time to checkpoint:"
      }), " 28-32 hours over 2 weeks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-agent-engineer/04-phase3-agents-langgraph-mcp",
        children: "Next: Phase 3 — AI Agents: LangGraph, CrewAI, MCP"
      })
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