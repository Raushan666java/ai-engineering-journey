"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8134],{

/***/ 2946
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_03_understanding_foundation_models_md_140_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-03-understanding-foundation-models-md-140.json
const site_docs_courses_modern_ai_engineering_03_understanding_foundation_models_md_140_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/03-understanding-foundation-models","title":"Chapter 3: Understanding Foundation Models","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/03-understanding-foundation-models.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/03-understanding-foundation-models","permalink":"/ai-engineering-journey/modern-ai-engineering/03-understanding-foundation-models","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-understanding-foundation-models","slug":"/modern-ai-engineering/03-understanding-foundation-models","title":"Chapter 3: Understanding Foundation Models","sidebar_label":"Chapter 3: Understanding Foundation Models","sidebar_position":3},"sidebar":"course-modern-ai-engineering","previous":{"title":"Chapter 2: Data Engineering for AI","permalink":"/ai-engineering-journey/modern-ai-engineering/02-data-engineering-for-ai"},"next":{"title":"Chapter 4: Evaluation of AI Systems","permalink":"/ai-engineering-journey/modern-ai-engineering/04-evaluation-of-ai-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/modern-ai-engineering/03-understanding-foundation-models.md


const frontMatter = {
	id: '03-understanding-foundation-models',
	slug: '/modern-ai-engineering/03-understanding-foundation-models',
	title: 'Chapter 3: Understanding Foundation Models',
	sidebar_label: 'Chapter 3: Understanding Foundation Models',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Understanding Foundation Models';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "3.1 How Transformers Work",
  "id": "31-how-transformers-work",
  "level": 2
}, {
  "value": "3.2 Pretraining",
  "id": "32-pretraining",
  "level": 2
}, {
  "value": "3.3 Types of Foundation Models",
  "id": "33-types-of-foundation-models",
  "level": 2
}, {
  "value": "3.4 Capabilities",
  "id": "34-capabilities",
  "level": 2
}, {
  "value": "3.5 Limitations",
  "id": "35-limitations",
  "level": 2
}, {
  "value": "3.6 Model Selection Framework",
  "id": "36-model-selection-framework",
  "level": 2
}, {
  "value": "3.7 Open vs Closed Models",
  "id": "37-open-vs-closed-models",
  "level": 2
}, {
  "value": "3.8 The Future of Foundation Models",
  "id": "38-the-future-of-foundation-models",
  "level": 2
}, {
  "value": "TypeScript: ModelSelector",
  "id": "typescript-modelselector",
  "level": 2
}, {
  "value": "TypeScript: CostAnalyzer",
  "id": "typescript-costanalyzer",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-3-understanding-foundation-models",
        children: "Chapter 3: Understanding Foundation Models"
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
            children: "Explain how the transformer architecture enables foundation models through self-attention and multi-head attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish pretraining objectives (next token prediction, masked LM) and describe scaling laws"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare types of foundation models: LLMs, multimodal, embedding, code, and vision models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze core capabilities: reasoning, in-context learning, instruction following, code generation, summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify limitations including hallucinations, knowledge cutoff, context window constraints, and bias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply a model selection framework that maps tasks to models based on capability, cost, and latency requirements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-how-transformers-work",
      children: "3.1 How Transformers Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transformer architecture, introduced in the 2017 paper \"Attention Is All You Need,\" is the foundation upon which all modern foundation models are built. Understanding transformers is essential for making informed decisions about model selection, prompt design, and troubleshooting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Attention Mechanism"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attention allows a model to focus on relevant parts of the input when producing each output token. Instead of compressing the entire input into a fixed-size vector, attention creates a weighted combination of all input positions, with weights determined by relevance to the current output position."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph Input[Input Sequence]\r\n        I1[Token 1<br>The]\r\n        I2[Token 2<br>cat]\r\n        I3[Token 3<br>sat]\r\n        I4[Token 4<br>on]\r\n        I5[Token 5<br>the]\r\n        I6[Token 6<br>mat]\r\n    end\r\n    subgraph Embedding[Embedding Layer]\r\n        E1[Vector 1]\r\n        E2[Vector 2]\r\n        E3[Vector 3]\r\n        E4[Vector 4]\r\n        E5[Vector 5]\r\n        E6[Vector 6]\r\n    end\r\n    subgraph Attention[Multi-Head Self-Attention]\r\n        Q[Query<br>Projection]\r\n        K[Key<br>Projection]\r\n        V[Value<br>Projection]\r\n        S[Scaled Dot-Product<br>Attention]\r\n        C[Contextual<br>Vectors]\r\n    end\r\n    subgraph Output[Output]\r\n        O1[Contextual<br>Token 1]\r\n        O2[Contextual<br>Token 2]\r\n        O3[Contextual<br>Token 3]\r\n        O4[Contextual<br>Token 4]\r\n        O5[Contextual<br>Token 5]\r\n        O6[Contextual<br>Token 6]\r\n    end\r\n\r\n    Input --> Embedding\r\n    Embedding --> Q\r\n    Embedding --> K\r\n    Embedding --> V\r\n    Q --> S\r\n    K --> S\r\n    V --> S\r\n    S --> C\r\n    C --> O1\r\n    C --> O2\r\n    C --> O3\r\n    C --> O4\r\n    C --> O5\r\n    C --> O6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-Attention Formula"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a sequence of tokens, self-attention computes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q (Query)"
        }), ": What the current position is looking for"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K (Key)"
        }), ": What each position in the input offers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "V (Value)"
        }), ": The actual content of each position"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "d_k"
        }), ": Dimension of the key vectors (scaling factor to prevent softmax saturation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dot product QK^T produces an attention score matrix where element (i, j) represents how much token i should attend to token j. The softmax normalizes these scores into a probability distribution. The final output is a weighted sum of the value vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Head Attention"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rather than performing a single attention operation, transformers use multiple attention heads in parallel. Each head learns different relationship patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph Input[Input]\r\n        X1[Embedding<br>Vectors]\r\n    end\r\n    subgraph Project[Linear Projection]\r\n        P1[Q₁ K₁ V₁<br>Head 1]\r\n        P2[Q₂ K₂ V₂<br>Head 2]\r\n        P3[...]\r\n        P4[Qₕ Kₕ Vₕ<br>Head H]\r\n    end\r\n    subgraph Attend[Scaled Dot-Product Attention]\r\n        A1[Attention<br>Head 1]\r\n        A2[Attention<br>Head 2]\r\n        A3[...]\r\n        A4[Attention<br>Head H]\r\n    end\r\n    subgraph Concat[Concatenation]\r\n        C[Concat All Heads]\r\n    end\r\n    subgraph Output[Output]\r\n        O[Linear<br>Projection]\r\n        Y[Final<br>Contextual Output]\r\n    end\r\n\r\n    X1 --> P1\r\n    X1 --> P2\r\n    X1 --> P3\r\n    X1 --> P4\r\n    P1 --> A1\r\n    P2 --> A2\r\n    P3 --> A3\r\n    P4 --> A4\r\n    A1 --> C\r\n    A2 --> C\r\n    A3 --> C\r\n    A4 --> C\r\n    C --> O\r\n    O --> Y\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Multi-Head?"
      }), " Each head can specialize:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 1: Syntactic relationships (subject-verb agreement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 2: Semantic relationships (synonymy, entailment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 3: Positional patterns (token distance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Head 4: Entity tracking (coreference resolution)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 8–128 heads in modern models, the combined representations capture rich linguistic and reasoning patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Transformer Block"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single transformer block consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-head self-attention (with residual connection and layer normalization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feed-forward neural network (with residual connection and layer normalization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positional encoding (since attention has no inherent notion of token order)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Models stack 12 (small) to 128+ (large) such blocks. GPT-5 reportedly uses ~120 layers with 96 attention heads per layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-pretraining",
      children: "3.2 Pretraining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pretraining is the process of training a foundation model on a large, diverse corpus of text (and potentially other modalities) using self-supervised objectives. This section covers the key pretraining approaches and the scaling laws that govern them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pretraining Objectives"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used By"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next Token Prediction (Causal LM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict the next token given all previous tokens (autoregressive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT family, Llama, Mistral, Claude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input: \"The cat sat on the\" → Target: \"mat\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Masked Language Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict randomly masked tokens given bidirectional context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT, RoBERTa, DeBERTa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input: \"The [MASK] sat on the mat\" → Target: \"cat\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix LM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attend bidirectionally to prefix, autoregressively generate continuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5, PaLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix: \"translate English to French: The cat\" → Generate: \"Le chat\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Task Pretraining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined objectives across modalities and tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gemini, GPT-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next token prediction + image captioning + code completion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scaling Laws"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Research from Kaplan et al. (2020) and Hoffmann et al. (2022, Chinchilla scaling laws) established three key findings:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Model performance follows a power law"
          }), " with compute, data, and parameters. Doubling compute consistently improves performance, though with diminishing returns."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Chinchilla optimum"
          }), ": For a given compute budget, the optimal model size and data size are roughly equal — a 10B parameter model should be trained on ~200B tokens. Many earlier models (GPT-3, Llama 1) were undertrained by this standard."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Emergent abilities"
          }), ": Certain capabilities (e.g., multi-step reasoning, in-context learning) only appear above a threshold model size. These abilities cannot be predicted by extrapolating from smaller models."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Training Data Composition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern pretraining datasets are massive (15T+ tokens) and diverse:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Proportion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web crawl (CommonCrawl, C4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50–60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtered web pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Books"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Gutenberg, publisher corpora"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Academic papers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arXiv, PubMed, Semantic Scholar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub (permissively licensed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reddit, Wikipedia discussions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multilingual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-English web, translated corpora"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data filtering is critical: deduplication at the document and paragraph level, quality filtering (perplexity-based, heuristic-based), and toxicity filtering all affect downstream performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-types-of-foundation-models",
      children: "3.3 Types of Foundation Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foundation models have diversified beyond text-only LLMs. Each type serves distinct use cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "quadrantChart\r\n    title Foundation Model Types by Modality and Specialization\r\n    x-axis Single Modality --> Multi-Modality\r\n    y-axis General Purpose --> Specialized\r\n    quadrant-1 Multi-Modal Generalists\r\n    quadrant-2 Multi-Modal Specialists\r\n    quadrant-3 Single-Modal Generalists\r\n    quadrant-4 Single-Modal Specialists\r\n    GPT-5: [0.9, 0.1]\r\n    Gemini-3: [0.95, 0.1]\r\n    Llama-4: [0.2, 0.15]\r\n    Mistral: [0.15, 0.15]\r\n    CLIP: [0.7, 0.85]\r\n    CodeLlama: [0.05, 0.9]\r\n    DALL-E-4: [0.85, 0.8]\r\n    Jina-Embeddings: [0.05, 0.75]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Type Comparison"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Models"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Use Cases"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM (Text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-5, Claude 4, Llama 4, Mistral Large, DeepSeek V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat, writing, reasoning, analysis, Q&A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multimodal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gemini 3, GPT-5, Claude 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + Image + Audio + Video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text + Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision QA, document analysis, content generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text-embedding-3-large, Cohere Embed, Jina Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG, semantic search, clustering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code Llama, StarCoder 2, DeepSeek Coder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text (code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text (code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation, completion, debugging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DALL-E 4, Stable Diffusion 3, Midjourney"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text / Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image generation, editing, inpainting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speech"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whisper v3, ElevenLabs, SeamlessM4T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text / Audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speech recognition, synthesis, translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reward / Classifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude Reward Model, GPT-4o Judge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score / Label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation, content moderation, ranking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-capabilities",
      children: "3.4 Capabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foundation models exhibit a remarkable range of capabilities that emerge from pretraining at scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "radar\r\n    title Foundation Model Capability Radar\r\n    x-axis Reasoning, In-Context Learning, Instruction Following, Code Generation, Translation, Summarization, Tool Use, Multimodal Understanding\r\n    \"GPT-5\": [95, 92, 95, 96, 90, 93, 94, 95]\r\n    \"Claude 4\": [93, 88, 94, 88, 92, 95, 90, 89]\r\n    \"Gemini 3\": [90, 85, 88, 91, 95, 91, 85, 96]\r\n    \"Llama 4\": [88, 87, 85, 90, 80, 88, 83, 70]\r\n    \"Mistral Large\": [86, 85, 88, 85, 90, 87, 80, 65]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Capability Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reasoning"
      }), ": Foundation models can perform multi-step logical reasoning, mathematical problem-solving, and common-sense inference. Chain-of-thought prompting (asking the model to \"think step by step\") dramatically improves reasoning performance. GPT-5 and Claude 4 achieve ~95% accuracy on GSM-8K (grade school math) and ~85% on MATH (competition-level math)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In-Context Learning"
      }), ": The ability to learn from examples provided in the prompt without weight updates. A model can perform a new task by seeing 2–5 input-output pairs in the context. This capability is an emergent property of models above 10B parameters and scales with model size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instruction Following"
      }), ": Models trained with RLHF (reinforcement learning from human feedback) or DPO (direct preference optimization) can follow complex, multi-part instructions. This includes format constraints, persona adoption, chain-of-thought instructions, and output structure requirements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Generation"
      }), ": Code-trained models (GPT-5, Code Llama, DeepSeek Coder) can write, debug, explain, and translate code across most programming languages. Performance on HumanEval (functional correctness) exceeds 90% for top models. Code generation extends to SQL, shell scripts, configuration files, and even hardware description languages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Translation"
      }), ": While not specialized translation systems, foundation models achieve competitive BLEU scores across high-resource language pairs. Their strength is handling contextual nuance, idioms, and domain-specific terminology that traditional MT systems struggle with."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summarization"
      }), ": Models generate abstractive summaries that capture key information without extractive copying. Performance degrades with very long documents — this is where long-context models (1M+ tokens) excel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-limitations",
      children: "3.5 Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Despite impressive capabilities, foundation models have fundamental limitations that AI engineers must understand and mitigate."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model generates factually incorrect content with high confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misinformation, legal liability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG with source citation, factual consistency checking, constrained decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Cutoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model only knows information up to its training date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outdated responses for time-sensitive queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG with up-to-date documents, explicit cutoff disclosure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recency Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model overweights recent tokens in context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor performance on tasks requiring long-range reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt structuring (put key info at beginning and end), sliding window attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Window Limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed maximum input length (128K–2M tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot process very long documents or conversations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunking, summarization, sliding windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High per-token inference cost at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsustainable unit economics for high-volume apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, model distillation, smaller models for simple tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow inference (500ms–10s) for real-time use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor UX for interactive applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speculative decoding, KV-cache optimization, smaller models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data biases reflected in outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unfair, stereotyped, or harmful outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF, constitutional AI, bias testing, diverse training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lack of True Understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models manipulate symbols without genuine comprehension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brittle performance on adversarial inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial testing, robust prompt design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Hallucination Problem in Detail"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hallucinations are the single most significant operational challenge. They fall into three categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factual hallucination"
        }), ": Model asserts a false fact (e.g., \"The Eiffel Tower is in London\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faithfulness hallucination"
        }), ": Model contradicts the provided context (e.g., in RAG, the answer contradicts the retrieved document)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction drift"
        }), ": Model performs a different task than instructed (e.g., asked to summarize, it translates instead)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Empirical finding: Even GPT-5 hallucinates on ~3-5% of factual queries. For specialized domains (medicine, law), the rate can be 10-20% without RAG grounding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-model-selection-framework",
      children: "3.6 Model Selection Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right model for a task requires balancing capability, cost, latency, and operational constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    A[Start: Application Requirements] --> B{Task type}\r\n    B -->|Text generation| C{Latency requirement?}\r\n    B -->|Classification / Retrieval| D[Use embedding model + classifier]\r\n    B -->|Code generation| E{Code only?}\r\n    B -->|Vision| F[Use multimodal model]\r\n    C -->|< 500ms| G{Can cache?}\r\n    C -->|500ms - 3s| H[Standard LLM<br>Claude 4 / GPT-5]\r\n    C -->|> 3s| H\r\n    G -->|Yes| H\r\n    G -->|No| I[Use distilled model<br>Llama 4 8B / Mistral 7B]\r\n    E -->|Yes| J[Code-specialized model<br>Code Llama / DeepSeek Coder]\r\n    E -->|No| K[General LLM<br>GPT-5 / Claude 4]\r\n    H --> L{Data privacy?}\r\n    L -->|Can send to API| M{Scale?}\r\n    L -->|Cannot send to API| N[Self-host open model<br>Llama 4 / Mistral]\r\n    M -->|< 1M req/month| O[Use API-based model]\r\n    M -->|> 1M req/month| P[Self-host for cost]\r\n    I --> Q[On-device deployment]\r\n    N --> R{GPU available?}\r\n    R -->|Yes| S[vLLM / TGI deployment]\r\n    R -->|No| T[Use quantized model<br>GGUF / AWQ]\r\n    O --> U[Final model selection]\r\n    P --> U\r\n    S --> U\r\n    T --> U\r\n    Q --> U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Selection Scorecard"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPT-5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claude 4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gemini 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Llama 4 70B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DeepSeek V4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multilingual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency (P50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weighted Score"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7.8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7.3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7.7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8.6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Scores are illustrative. Actual weights depend on specific application requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-open-vs-closed-models",
      children: "3.7 Open vs Closed Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice between open-weight and closed-source foundation models is one of the most consequential decisions in AI engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Closed Models (GPT-5, Claude 4)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Models (Llama 4, Mistral Large, DeepSeek V4)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloadable weights (subject to license)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest overall scores on benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close behind, especially in coding and reasoning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Customization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to prompt engineering, function calling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full fine-tuning, architecture modification, pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sent to external servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data stays on own infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost at low volume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-token, no upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free for < 70B models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost at high volume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive ($0.01–$0.03/1K output tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware cost only (~$1/hr for 70B on A100)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed infrastructure, predictable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable based on hardware, can be optimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vendor Lock-in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — API changes, deprecation risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — full control over deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Licensing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary — outputs may have restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varied — Apache 2.0 (Llama), MIT (Mistral), custom (DeepSeek)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Licensing note"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output ownership varies by provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most open models allow commercial use of outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-managed guardrails, RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-managed safety; capability to remove guardrails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Release cadence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-driven, infrequent major releases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Community-driven, frequent fine-tuned variants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use Each"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototyping an MVP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest time-to-value, no infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing sensitive health data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open, self-hosted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA compliance, data never leaves network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-volume customer-facing chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open, self-hosted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-effective at scale ($0.001/query vs $0.05/query)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed (GPT-5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currently ~5-10% better on complex reasoning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized domain (legal, medical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open, fine-tuned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-specific fine-tuning improves accuracy 15-30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On-device or edge deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open, quantized (Llama 4 8B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small footprint, no network dependency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-the-future-of-foundation-models",
      children: "3.8 The Future of Foundation Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The foundation model landscape continues to evolve rapidly. Several trends will shape the next generation of AI engineering."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multimodal as Default"
      }), ": Future models will natively accept and generate text, images, audio, video, and structured data. The distinction between \"text models\" and \"vision models\" will disappear. Gemini 3 and GPT-5 already demonstrate this convergence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Long Context Becoming Infinite"
      }), ": Context windows have grown from 4K (GPT-3, 2020) to 2M (GPT-5, 2026). Research into linear attention, state space models (Mamba), and recurrent memory mechanisms suggests context may become effectively unbounded, eliminating the need for complex RAG pipelines in many use cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Capabilities"
      }), ": Models are increasingly designed with tool use, planning, and self-reflection as first-class capabilities rather than emergent behaviors. Future models may include built-in code execution, web browsing, and inter-model communication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Specialized Foundation Models"
      }), ": Rather than one model for all tasks, we are seeing models specialized for specific domains (medicine, law, finance, scientific research) and modalities (video, 3D, time series)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference Efficiency"
      }), ": Techniques like speculative decoding, KV-cache quantization, Mixture-of-Experts (MoE), and multi-query attention are driving 10-100x inference cost reductions year-over-year, making foundation model deployment economically viable for a much wider range of applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-modelselector",
      children: "TypeScript: ModelSelector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-ready class that scores models by capability, cost, and latency to recommend the optimal model for a given task."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\r\n * ModelSelector — Scores and recommends foundation models based on\r\n * task requirements, cost constraints, and latency targets.\r\n */\r\n\r\ninterface ModelProfile {\r\n  id: string;\r\n  provider: string;\r\n  capabilities: Record<string, number>;\r\n  costPer1KInputTokens: number;\r\n  costPer1KOutputTokens: number;\r\n  latencyP50Ms: number;\r\n  latencyP99Ms: number;\r\n  contextWindow: number;\r\n  isSelfHostable: boolean;\r\n  maxBatchSize: number;\r\n}\r\n\r\ninterface TaskRequirements {\r\n  requiredCapabilities: Array<{ name: string; minScore: number; weight: number }>;\r\n  maxLatencyMs?: number;\r\n  maxCostPerQuery?: number;\r\n  minContextWindow?: number;\r\n  requiresSelfHosting?: boolean;\r\n  estimatedMonthlyQueries?: number;\r\n}\r\n\r\ninterface ModelRecommendation {\r\n  modelId: string;\r\n  provider: string;\r\n  totalScore: number;\r\n  capabilityScore: number;\r\n  costScore: number;\r\n  latencyScore: number;\r\n  estimatedMonthlyCost: number;\r\n  estimatedP50LatencyMs: number;\r\n  meetsRequirements: boolean;\r\n  missingCapabilities: string[];\r\n}\r\n\r\nclass ModelSelector {\r\n  private models: Map<string, ModelProfile> = new Map();\r\n\r\n  constructor() {\r\n    this.registerDefaultModels();\r\n  }\r\n\r\n  private registerDefaultModels(): void {\r\n    this.registerModel({\r\n      id: 'gpt-5',\r\n      provider: 'openai',\r\n      capabilities: {\r\n        reasoning: 0.95,\r\n        code: 0.96,\r\n        multilingual: 0.85,\r\n        summarization: 0.93,\r\n        translation: 0.90,\r\n        instruction_following: 0.95,\r\n        tool_use: 0.94,\r\n        multimodal: 0.95,\r\n      },\r\n      costPer1KInputTokens: 0.01,\r\n      costPer1KOutputTokens: 0.03,\r\n      latencyP50Ms: 800,\r\n      latencyP99Ms: 3000,\r\n      contextWindow: 2_000_000,\r\n      isSelfHostable: false,\r\n      maxBatchSize: 100,\r\n    });\r\n\r\n    this.registerModel({\r\n      id: 'claude-4',\r\n      provider: 'anthropic',\r\n      capabilities: {\r\n        reasoning: 0.93,\r\n        code: 0.88,\r\n        multilingual: 0.90,\r\n        summarization: 0.95,\r\n        translation: 0.88,\r\n        instruction_following: 0.94,\r\n        tool_use: 0.90,\r\n        multimodal: 0.89,\r\n      },\r\n      costPer1KInputTokens: 0.015,\r\n      costPer1KOutputTokens: 0.045,\r\n      latencyP50Ms: 900,\r\n      latencyP99Ms: 3500,\r\n      contextWindow: 1_000_000,\r\n      isSelfHostable: false,\r\n      maxBatchSize: 50,\r\n    });\r\n\r\n    this.registerModel({\r\n      id: 'gemini-3',\r\n      provider: 'google',\r\n      capabilities: {\r\n        reasoning: 0.90,\r\n        code: 0.91,\r\n        multilingual: 0.95,\r\n        summarization: 0.91,\r\n        translation: 0.93,\r\n        instruction_following: 0.88,\r\n        tool_use: 0.85,\r\n        multimodal: 0.96,\r\n      },\r\n      costPer1KInputTokens: 0.005,\r\n      costPer1KOutputTokens: 0.015,\r\n      latencyP50Ms: 600,\r\n      latencyP99Ms: 2500,\r\n      contextWindow: 2_000_000,\r\n      isSelfHostable: false,\r\n      maxBatchSize: 200,\r\n    });\r\n\r\n    this.registerModel({\r\n      id: 'llama-4-70b',\r\n      provider: 'meta',\r\n      capabilities: {\r\n        reasoning: 0.88,\r\n        code: 0.90,\r\n        multilingual: 0.75,\r\n        summarization: 0.88,\r\n        translation: 0.78,\r\n        instruction_following: 0.85,\r\n        tool_use: 0.83,\r\n        multimodal: 0.70,\r\n      },\r\n      costPer1KInputTokens: 0.002,\r\n      costPer1KOutputTokens: 0.006,\r\n      latencyP50Ms: 1200,\r\n      latencyP99Ms: 5000,\r\n      contextWindow: 512_000,\r\n      isSelfHostable: true,\r\n      maxBatchSize: 100,\r\n    });\r\n\r\n    this.registerModel({\r\n      id: 'mistral-large',\r\n      provider: 'mistral',\r\n      capabilities: {\r\n        reasoning: 0.86,\r\n        code: 0.85,\r\n        multilingual: 0.88,\r\n        summarization: 0.87,\r\n        translation: 0.86,\r\n        instruction_following: 0.88,\r\n        tool_use: 0.80,\r\n        multimodal: 0.65,\r\n      },\r\n      costPer1KInputTokens: 0.002,\r\n      costPer1KOutputTokens: 0.006,\r\n      latencyP50Ms: 700,\r\n      latencyP99Ms: 2800,\r\n      contextWindow: 256_000,\r\n      isSelfHostable: true,\r\n      maxBatchSize: 50,\r\n    });\r\n\r\n    this.registerModel({\r\n      id: 'deepseek-v4',\r\n      provider: 'deepseek',\r\n      capabilities: {\r\n        reasoning: 0.92,\r\n        code: 0.95,\r\n        multilingual: 0.75,\r\n        summarization: 0.85,\r\n        translation: 0.80,\r\n        instruction_following: 0.88,\r\n        tool_use: 0.82,\r\n        multimodal: 0.60,\r\n      },\r\n      costPer1KInputTokens: 0.0005,\r\n      costPer1KOutputTokens: 0.002,\r\n      latencyP50Ms: 1000,\r\n      latencyP99Ms: 4000,\r\n      contextWindow: 1_000_000,\r\n      isSelfHostable: true,\r\n      maxBatchSize: 100,\r\n    });\r\n  }\r\n\r\n  registerModel(profile: ModelProfile): void {\r\n    if (this.models.has(profile.id)) {\r\n      throw new Error(`Model ${profile.id} is already registered`);\r\n    }\r\n    this.models.set(profile.id, { ...profile });\r\n  }\r\n\r\n  recommend(modelsToConsider: string[], requirements: TaskRequirements): ModelRecommendation[] {\r\n    const candidates = modelsToConsider\r\n      .map((id) => this.models.get(id))\r\n      .filter((m): m is ModelProfile => m !== undefined);\r\n\r\n    if (candidates.length === 0) {\r\n      throw new Error('No valid models found in the consideration set');\r\n    }\r\n\r\n    const recommendations: ModelRecommendation[] = candidates.map((model) => {\r\n      const missingCapabilities: string[] = [];\r\n      let capabilityScore = 0;\r\n      let totalCapWeight = 0;\r\n\r\n      for (const cap of requirements.requiredCapabilities) {\r\n        const score = model.capabilities[cap.name] ?? 0;\r\n        totalCapWeight += cap.weight;\r\n        if (score < cap.minScore) {\r\n          missingCapabilities.push(cap.name);\r\n        }\r\n        capabilityScore += score * cap.weight;\r\n      }\r\n\r\n      capabilityScore = totalCapWeight > 0 ? capabilityScore / totalCapWeight : 0;\r\n\r\n      const avgTokensPerQuery = 1000;\r\n      const costPerQuery = (\r\n        (avgTokensPerQuery / 1000) * model.costPer1KInputTokens +\r\n        (avgTokensPerQuery / 1000) * model.costPer1KOutputTokens\r\n      );\r\n\r\n      const monthlyQueries = requirements.estimatedMonthlyQueries ?? 10000;\r\n      const estimatedMonthlyCost = costPerQuery * monthlyQueries;\r\n\r\n      const costScore = Math.max(0, 1 - (costPerQuery / 0.05));\r\n\r\n      const maxLatency = requirements.maxLatencyMs ?? 5000;\r\n      const latencyScore = Math.max(0, 1 - (model.latencyP50Ms / maxLatency));\r\n\r\n      const meetsLatency = requirements.maxLatencyMs\r\n        ? model.latencyP50Ms <= requirements.maxLatencyMs\r\n        : true;\r\n      const meetsCost = requirements.maxCostPerQuery\r\n        ? costPerQuery <= requirements.maxCostPerQuery\r\n        : true;\r\n      const meetsContext = requirements.minContextWindow\r\n        ? model.contextWindow >= requirements.minContextWindow\r\n        : true;\r\n      const meetsHosting = requirements.requiresSelfHosting\r\n        ? model.isSelfHostable\r\n        : true;\r\n      const meetsCapabilities = missingCapabilities.length === 0;\r\n\r\n      const meetsRequirements = meetsLatency && meetsCost && meetsContext && meetsHosting && meetsCapabilities;\r\n\r\n      const totalScore = capabilityScore * 0.5 + costScore * 0.25 + latencyScore * 0.25;\r\n\r\n      return {\r\n        modelId: model.id,\r\n        provider: model.provider,\r\n        totalScore: Math.round(totalScore * 1000) / 1000,\r\n        capabilityScore: Math.round(capabilityScore * 1000) / 1000,\r\n        costScore: Math.round(costScore * 1000) / 1000,\r\n        latencyScore: Math.round(latencyScore * 1000) / 1000,\r\n        estimatedMonthlyCost: Math.round(estimatedMonthlyCost * 100) / 100,\r\n        estimatedP50LatencyMs: model.latencyP50Ms,\r\n        meetsRequirements,\r\n        missingCapabilities,\r\n      };\r\n    });\r\n\r\n    return recommendations.sort((a, b) => b.totalScore - a.totalScore);\r\n  }\r\n\r\n  getModel(id: string): ModelProfile | undefined {\r\n    return this.models.get(id);\r\n  }\r\n\r\n  listModels(): ModelProfile[] {\r\n    return Array.from(this.models.values()).map((m) => ({ ...m }));\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-costanalyzer",
      children: "TypeScript: CostAnalyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A utility for computing per-token costs, total cost projections, and cross-model cost comparisons."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\r\n * CostAnalyzer — Computes and compares inference costs across models.\r\n * Supports detailed cost projections with caching, batch processing,\r\n * and scenario analysis.\r\n */\r\n\r\ninterface CostBreakdown {\r\n  modelId: string;\r\n  provider: string;\r\n  perQueryInputCost: number;\r\n  perQueryOutputCost: number;\r\n  perQueryTotalCost: number;\r\n  estimatedMonthlyCost: number;\r\n  estimatedYearlyCost: number;\r\n  withCacheSavings: number;\r\n  withBatchSavings: number;\r\n}\r\n\r\ninterface CostComparison {\r\n  cheapest: string;\r\n  mostExpensive: string;\r\n  savingsRatio: number;\r\n  breakdowns: CostBreakdown[];\r\n}\r\n\r\nclass CostAnalyzer {\r\n  private modelRegistry: Map<string, { inputPrice: number; outputPrice: number; provider: string }> =\r\n    new Map();\r\n\r\n  constructor() {\r\n    this.registerDefaultPricing();\r\n  }\r\n\r\n  private registerDefaultPricing(): void {\r\n    this.registerModel('gpt-5', 'openai', 0.01, 0.03);\r\n    this.registerModel('gpt-5-8k', 'openai', 0.002, 0.006);\r\n    this.registerModel('claude-4', 'anthropic', 0.015, 0.045);\r\n    this.registerModel('claude-4-haiku', 'anthropic', 0.001, 0.005);\r\n    this.registerModel('gemini-3', 'google', 0.005, 0.015);\r\n    this.registerModel('gemini-3-flash', 'google', 0.0005, 0.0015);\r\n    this.registerModel('llama-4-70b', 'meta', 0.002, 0.006);\r\n    this.registerModel('llama-4-8b', 'meta', 0.0004, 0.0012);\r\n    this.registerModel('mistral-large', 'mistral', 0.002, 0.006);\r\n    this.registerModel('deepseek-v4', 'deepseek', 0.0005, 0.002);\r\n  }\r\n\r\n  registerModel(id: string, provider: string, inputPrice: number, outputPrice: number): void {\r\n    this.modelRegistry.set(id, { inputPrice, outputPrice, provider });\r\n  }\r\n\r\n  estimateCost(\r\n    modelId: string,\r\n    inputTokensPerQuery: number,\r\n    outputTokensPerQuery: number,\r\n    monthlyQueries: number,\r\n    options?: {\r\n      cacheHitRate?: number;\r\n      batchSize?: number;\r\n      overheadFactor?: number;\r\n    },\r\n  ): CostBreakdown {\r\n    const model = this.modelRegistry.get(modelId);\r\n    if (!model) {\r\n      throw new Error(`Unknown model: ${modelId}`);\r\n    }\r\n\r\n    const cacheHitRate = options?.cacheHitRate ?? 0;\r\n    const batchSize = options?.batchSize ?? 1;\r\n    const overhead = options?.overheadFactor ?? 1.0;\r\n\r\n    const effectiveInputTokens = inputTokensPerQuery * (1 - cacheHitRate);\r\n    const effectiveOutputTokens = outputTokensPerQuery * (1 - cacheHitRate);\r\n\r\n    const perQueryInputCost = (effectiveInputTokens / 1000) * model.inputPrice;\r\n    const perQueryOutputCost = (effectiveOutputTokens / 1000) * model.outputPrice;\r\n    const perQueryTotalCost = (perQueryInputCost + perQueryOutputCost) * overhead;\r\n\r\n    const monthlyCost = perQueryTotalCost * monthlyQueries / batchSize;\r\n    const yearlyCost = monthlyCost * 12;\r\n\r\n    const withCache = monthlyCost * (1 - cacheHitRate * 0.5);\r\n    const withBatch = monthlyCost * (batchSize > 1 ? 0.85 / batchSize : 1);\r\n\r\n    return {\r\n      modelId,\r\n      provider: model.provider,\r\n      perQueryInputCost: Math.round(perQueryInputCost * 1000000) / 1000000,\r\n      perQueryOutputCost: Math.round(perQueryOutputCost * 1000000) / 1000000,\r\n      perQueryTotalCost: Math.round(perQueryTotalCost * 1000000) / 1000000,\r\n      estimatedMonthlyCost: Math.round(monthlyCost * 100) / 100,\r\n      estimatedYearlyCost: Math.round(yearlyCost * 100) / 100,\r\n      withCacheSavings: Math.round((monthlyCost - withCache) * 100) / 100,\r\n      withBatchSavings: Math.round((monthlyCost - withBatch) * 100) / 100,\r\n    };\r\n  }\r\n\r\n  compareModels(\r\n    modelIds: string[],\r\n    inputTokensPerQuery: number,\r\n    outputTokensPerQuery: number,\r\n    monthlyQueries: number,\r\n  ): CostComparison {\r\n    const breakdowns = modelIds.map((id) =>\r\n      this.estimateCost(id, inputTokensPerQuery, outputTokensPerQuery, monthlyQueries),\r\n    );\r\n\r\n    breakdowns.sort((a, b) => a.estimatedMonthlyCost - b.estimatedMonthlyCost);\r\n\r\n    const cheapest = breakdowns[0];\r\n    const mostExpensive = breakdowns[breakdowns.length - 1];\r\n    const savingsRatio = mostExpensive.estimatedMonthlyCost / cheapest.estimatedMonthlyCost;\r\n\r\n    return {\r\n      cheapest: cheapest.modelId,\r\n      mostExpensive: mostExpensive.modelId,\r\n      savingsRatio: Math.round(savingsRatio * 100) / 100,\r\n      breakdowns,\r\n    };\r\n  }\r\n\r\n  findBestValue(\r\n    inputTokensPerQuery: number,\r\n    outputTokensPerQuery: number,\r\n    monthlyQueries: number,\r\n    maxLatencyMs?: number,\r\n    minCapabilityScore?: number,\r\n  ): string {\r\n    const allModels = Array.from(this.modelRegistry.keys());\r\n    const comparison = this.compareModels(\r\n      allModels,\r\n      inputTokensPerQuery,\r\n      outputTokensPerQuery,\r\n      monthlyQueries,\r\n    );\r\n\r\n    const valid = comparison.breakdowns.filter((b) => {\r\n      if (maxLatencyMs && b.modelId.includes('flash') === false && b.modelId.includes('haiku') === false) {\r\n        return true;\r\n      }\r\n      return true;\r\n    });\r\n\r\n    valid.sort((a, b) => a.estimatedMonthlyCost - b.estimatedMonthlyCost);\r\n    return valid[0]?.modelId ?? comparison.cheapest;\r\n  }\r\n\r\n  projectCost(\r\n    modelId: string,\r\n    dailyQueries: number,\r\n    growthRateMonthly: number,\r\n    months: number,\r\n    inputTokensPerQuery: number,\r\n    outputTokensPerQuery: number,\r\n  ): Array<{ month: number; queries: number; cost: number; cumulativeCost: number }> {\r\n    const projection: Array<{ month: number; queries: number; cost: number; cumulativeCost: number }> = [];\r\n    let cumulative = 0;\r\n    let currentDailyQueries = dailyQueries;\r\n\r\n    for (let month = 1; month <= months; month++) {\r\n      const monthlyQueries = currentDailyQueries * 30;\r\n      const cost = this.estimateCost(modelId, inputTokensPerQuery, outputTokensPerQuery, monthlyQueries)\r\n        .estimatedMonthlyCost;\r\n      cumulative += cost;\r\n      projection.push({\r\n        month,\r\n        queries: monthlyQueries,\r\n        cost,\r\n        cumulativeCost: Math.round(cumulative * 100) / 100,\r\n      });\r\n      currentDailyQueries *= (1 + growthRateMonthly / 100);\r\n    }\r\n\r\n    return projection;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Foundation models are built on the transformer architecture, whose self-attention mechanism allows each token to attend to all other tokens in the sequence, with multi-head attention enabling parallel learning of diverse relationship patterns. Pretraining at massive scale using next-token prediction or masked language modeling produces models that exhibit emergent capabilities including reasoning, in-context learning, and instruction following. The model landscape has diversified into specialized types — LLMs, multimodal models, embedding models, code models, and vision models — each suited to different tasks. Despite impressive capabilities, foundation models suffer from fundamental limitations including hallucinations, knowledge cutoff, context window constraints, cost, latency, and bias that require deliberate mitigation. Model selection requires a systematic framework that maps task requirements to model capabilities, cost constraints, and deployment context. The open vs closed model decision involves tradeoffs in capability, customization, data privacy, cost, and vendor lock-in. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ModelSelector"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CostAnalyzer"
      }), " TypeScript classes provide production-quality tools for making data-driven model selection decisions and projecting costs across different usage scenarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match the model to the task, not the hype"
        }), ": Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ModelSelector"
        }), " framework to systematically score models on capability, cost, and latency for your specific use case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assume models will hallucinate — design for it"
        }), ": Every production system must have hallucination mitigation (RAG, factual consistency checking, human review) regardless of model choice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost at scale determines architecture"
        }), ": At low volume (<100K queries/month), API-based closed models are ideal. At high volume (>1M queries/month), self-hosted open models save 10-100x."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Know your model's knowledge cutoff"
        }), ": Always supplement model knowledge with up-to-date context via RAG for time-sensitive applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The best model is the one you can evaluate"
        }), ": Model selection is meaningless without task-specific evaluation — build evals before choosing a model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What does the scaled dot-product attention formula compute?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "softmax(V * K^T / sqrt(d_k)) * Q"
      }), "\r\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "softmax(Q * K^T / sqrt(d_k)) * V"
      }), "\r\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "softmax(Q * V^T / sqrt(d_k)) * K"
      }), "\r\nD) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "softmax(K * Q^T / sqrt(d_k)) * V"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": According to the Chinchilla scaling laws, what is the relationship between model parameters and training tokens at the compute-optimal point?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Model size should be 10x the training tokens\r\nB) Training tokens should be 10x the model parameters\r\nC) They should be roughly equal in magnitude\r\nD) Model size should be 100x the training tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which type of foundation model is most appropriate for a semantic search / RAG application?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Multimodal model\r\nB) Code model\r\nC) Embedding model\r\nD) Vision model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the primary mitigation strategy for the knowledge cutoff limitation of foundation models?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Chain-of-thought prompting\r\nB) Fine-tuning on new data\r\nC) RAG with up-to-date documents\r\nD) Using a larger model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In the model selection framework, which scenario favors a self-hosted open model over an API-based closed model?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Prototyping an MVP\r\nB) Processing sensitive health data requiring HIPAA compliance\r\nC) State-of-the-art reasoning tasks\r\nD) Low-volume experimentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key"
      })
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
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a transformer with 96 attention heads and a hidden dimension of 12,288, calculate the dimension per head (d_k). Explain how the number of heads affects the model's ability to capture different types of relationships in the input."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Hidden dimension (d_model): 12,288"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Number of heads (h): 96"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Dimension per head (d_k) = d_model / h = 12,288 / 96 = 128"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Each attention head operates in a 128-dimensional space. With 96 heads, the model can learn 96 different relationship patterns in parallel. Typical patterns include:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Syntactic heads"
          }), ": Capture dependency relationships (subject-verb, noun-adjective agreement)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Positional heads"
          }), ": Attend to adjacent tokens or specific relative positions"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Semantic heads"
          }), ": Capture synonymy, antonymy, and topic coherence"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entity heads"
          }), ": Track entities across long distances in the text"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "With 96 heads, the model has significant redundancy — some heads learn similar patterns, providing robustness if individual heads are pruned. Research shows that 30-50% of heads can often be pruned without significant performance loss, enabling inference speedups."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Larger d_k per head (e.g., 128 vs 64) allows each head to capture more nuanced relationships but increases computational cost quadratically. The trend in modern models is toward more heads with smaller d_k (multi-query attention variants)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are building a financial analysis application that processes quarterly earnings reports. The application needs to extract key financial metrics from 100-page PDFs, compare them to analyst consensus estimates, and generate summary reports. Using the model selection framework, recommend three models and create a scored comparison."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements Analysis:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Long document processing (100 pages ≈ 50K–100K tokens)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Numerical reasoning and comparison"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Structured output generation (table format)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "High accuracy required (financial risk)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Latency: 30 seconds acceptable (not real-time)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cost: Moderate budget (~$5K/month)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scored Comparison:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Criterion"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Weight"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "GPT-5"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Claude 4"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "DeepSeek V4"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Reasoning (numerical)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "25%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Long document comprehension"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "20%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Instruction following (format)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "15%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Cost efficiency"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "15%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Accuracy/reliability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "20%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Data privacy (financial data)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "5%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Weighted Score"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "100%"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "7.5"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "7.7"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "9.1"
              })
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary"
          }), ": DeepSeek V4 for cost efficiency and self-hosting for financial data privacy"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fallback"
          }), ": Claude 4 for highest accuracy on complex numerical reasoning when needed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost projection at 50K queries/month"
          }), ": DeepSeek V4 ≈ $200/month, Claude 4 ≈ $4,500/month"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ModelSelector"
      }), " class, implement a function that takes a task description and automatically recommends the top-3 models. The function should parse capability requirements from the description using keyword matching and apply appropriate weights."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function autoRecommend(taskDescription: string): ModelRecommendation[] {\r\n  const selector = new ModelSelector();\r\n  const allModels = selector.listModels().map((m) => m.id);\r\n\r\n  const keywordToCapability: Record<string, Array<{ name: string; minScore: number; weight: number }>> = {\r\n    'chat|conversation|support': [\r\n      { name: 'instruction_following', minScore: 0.8, weight: 0.4 },\r\n      { name: 'reasoning', minScore: 0.7, weight: 0.2 },\r\n      { name: 'summarization', minScore: 0.6, weight: 0.2 },\r\n      { name: 'tool_use', minScore: 0.5, weight: 0.2 },\r\n    ],\r\n    'code|programming|software|debug': [\r\n      { name: 'code', minScore: 0.85, weight: 0.6 },\r\n      { name: 'reasoning', minScore: 0.8, weight: 0.3 },\r\n      { name: 'instruction_following', minScore: 0.7, weight: 0.1 },\r\n    ],\r\n    'translate|translation|language': [\r\n      { name: 'translation', minScore: 0.8, weight: 0.5 },\r\n      { name: 'multilingual', minScore: 0.8, weight: 0.3 },\r\n      { name: 'summarization', minScore: 0.5, weight: 0.2 },\r\n    ],\r\n    'image|photo|vision|visual|document': [\r\n      { name: 'multimodal', minScore: 0.8, weight: 0.6 },\r\n      { name: 'reasoning', minScore: 0.7, weight: 0.2 },\r\n      { name: 'instruction_following', minScore: 0.6, weight: 0.2 },\r\n    ],\r\n    'analyze|analyze|summarize|report|extract': [\r\n      { name: 'summarization', minScore: 0.8, weight: 0.4 },\r\n      { name: 'reasoning', minScore: 0.8, weight: 0.3 },\r\n      { name: 'instruction_following', minScore: 0.7, weight: 0.3 },\r\n    ],\r\n  };\r\n\r\n  const lowerDesc = taskDescription.toLowerCase();\r\n  let bestMatch: Array<{ name: string; minScore: number; weight: number }> | null = null;\r\n\r\n  for (const [keywords, requirements] of Object.entries(keywordToCapability)) {\r\n    const keywordList = keywords.split('|');\r\n    const matchCount = keywordList.filter((kw) => lowerDesc.includes(kw)).length;\r\n    if (matchCount > 0 && (!bestMatch || matchCount > 0)) {\r\n      bestMatch = requirements;\r\n      break;\r\n    }\r\n  }\r\n\r\n  if (!bestMatch) {\r\n    bestMatch = [\r\n      { name: 'reasoning', minScore: 0.6, weight: 0.4 },\r\n      { name: 'instruction_following', minScore: 0.6, weight: 0.3 },\r\n      { name: 'summarization', minScore: 0.5, weight: 0.3 },\r\n    ];\r\n  }\r\n\r\n  const requirements: TaskRequirements = {\r\n    requiredCapabilities: bestMatch,\r\n    maxLatencyMs: 10000,\r\n    maxCostPerQuery: 0.10,\r\n  };\r\n\r\n  return selector.recommend(allModels, requirements).slice(0, 3);\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your application uses GPT-5 at 1M queries/month with an average of 1,500 input tokens and 350 output tokens per query. Using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CostAnalyzer"
      }), " class, calculate the current monthly cost, compare it against DeepSeek V4, and compute the 12-month cost projection assuming 15% monthly growth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function analyzeAndProject(): void {\r\n  const analyzer = new CostAnalyzer();\r\n\r\n  // Current costs\r\n  const gpt5Cost = analyzer.estimateCost('gpt-5', 1500, 350, 1_000_000);\r\n  const deepseekCost = analyzer.estimateCost('deepseek-v4', 1500, 350, 1_000_000);\r\n\r\n  console.log('=== Current Monthly Cost Comparison ===');\r\n  console.log('GPT-5:     $', gpt5Cost.estimatedMonthlyCost);\r\n  console.log('DeepSeek:  $', deepseekCost.estimatedMonthlyCost);\r\n  console.log('Savings:   $', (gpt5Cost.estimatedMonthlyCost - deepseekCost.estimatedMonthlyCost).toFixed(2));\r\n  console.log('Ratio:     ', (gpt5Cost.estimatedMonthlyCost / deepseekCost.estimatedMonthlyCost).toFixed(1), 'x');\r\n\r\n  // With caching (40% cache hit rate)\r\n  const gpt5Cached = analyzer.estimateCost('gpt-5', 1500, 350, 1_000_000, { cacheHitRate: 0.4 });\r\n  console.log('\\n=== With 40% Cache Hit Rate ===');\r\n  console.log('GPT-5 with cache savings: $', gpt5Cached.withCacheSavings.toFixed(2), '/month');\r\n\r\n  // 12-month projection with 15% growth\r\n  console.log('\\n=== 12-Month Projection (15% monthly growth) ===');\r\n  const projection = analyzer.projectCost('deepseek-v4', 33333, 15, 12, 1500, 350);\r\n  for (const month of projection) {\r\n    console.log(`Month ${month.month.toString().padStart(2, '0')}: ${(month.queries / 1_000_000).toFixed(2)}M queries, $${month.cost.toFixed(2)} cost, $${month.cumulativeCost.toFixed(2)} cumulative`);\r\n  }\r\n\r\n  // Annual savings switching from GPT-5 to DeepSeek V4\r\n  const gptYearly = analyzer.estimateCost('gpt-5', 1500, 350, 1_000_000).estimatedYearlyCost;\r\n  const deepseekYearly = analyzer.estimateCost('deepseek-v4', 1500, 350, 1_000_000).estimatedYearlyCost;\r\n  console.log('\\nAnnual savings: $', (gptYearly - deepseekYearly).toFixed(2));\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare and contrast the open-source ecosystem (Llama 4, Mistral, DeepSeek) with closed-source providers (GPT-5, Claude 4, Gemini 3) across 8 dimensions. For each dimension, specify which approach wins and under what conditions the other approach might still be preferred."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Dimension"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Winner"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "When The Other Is Preferred"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Capability ceiling"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed (GPT-5)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open models are within 5-10% — acceptable for most production use cases"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Customization"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open (full fine-tuning)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed models with prompt engineering suffice for 80% of tasks"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Data privacy"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open (self-hosted)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed models with data retention agreements and anonymization"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cost at scale"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open (hardware cost < API cost above ~100K queries/month)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed APIs are cheaper at low volume (no hardware fixed cost)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Time to market"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed (instant API access)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open models pre-deployed on managed platforms (Together, Fireworks)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Latency"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed (managed infrastructure)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open models with optimized inference (vLLM, TensorRT) on high-end GPUs"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Vendor lock-in"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open (no lock-in)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed models with standardized API surface (OpenAI-compatible APIs reduce switching cost)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Safety / Guardrails"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Closed (provider-managed)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open models with community-developed guardrails (Llama Guard, NeMo)"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision Matrix Summary:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use open models when"
          }), ": Data sensitivity is high, scale is large (>1M queries/month), you need fine-tuning, or you want full control."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use closed models when"
          }), ": Speed of prototyping is critical, volume is low, you need the absolute best reasoning capability, or you lack ML infrastructure."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid approach"
          }), " (recommended): Use closed APIs during prototyping and early deployment, then migrate to self-hosted open models as usage patterns stabilize and scale demands increase. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ModelSelector"
          }), " class supports this phased approach by scoring models differently at each stage."]
        }), "\n"]
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



/***/ }

}]);