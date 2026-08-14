"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46659],{

/***/ 29827
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_05_transformer_architecture_md_d96_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-05-transformer-architecture-md-d96.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_05_transformer_architecture_md_d96_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/05-transformer-architecture","title":"Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":142,"frontMatter":{"id":"05-transformer-architecture","slug":"/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture","title":"Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm","sidebar_label":"Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm","sidebar_position":142},"sidebar":"placementSidebar","previous":{"title":"Attention Mechanism — Bahdanau, Luong, Self-Attention, Multi-Head Attention","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism"},"next":{"title":"BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture.md


const frontMatter = {
	id: '05-transformer-architecture',
	slug: '/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture',
	title: 'Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm',
	sidebar_label: 'Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm',
	sidebar_position: 142
};
const contentTitle = 'Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm';

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
  "value": "5.1 Architecture Overview",
  "id": "51-architecture-overview",
  "level": 2
}, {
  "value": "5.2 Positional Encoding",
  "id": "52-positional-encoding",
  "level": 2
}, {
  "value": "5.3 Layer Normalization",
  "id": "53-layer-normalization",
  "level": 2
}, {
  "value": "5.4 Feed-Forward Network",
  "id": "54-feed-forward-network",
  "level": 2
}, {
  "value": "5.5 Residual Connections",
  "id": "55-residual-connections",
  "level": 2
}, {
  "value": "5.6 Transformer Variants",
  "id": "56-transformer-variants",
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
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pad: "pad",
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
        id: "transformer-architecture--encoder-decoder-positional-encoding-layer-norm",
        children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LO#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain the full transformer encoder-decoder architecture with all sub-components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement sinusoidal and learned positional encodings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply layer normalization with learnable affine parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build the feed-forward network with ReLU/GELU activation and expansion factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement residual connections with pre-norm and post-norm variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish encoder-only, decoder-only, and encoder-decoder transformer variants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural language processing is how machines understand human text. Transformers revolutionized NLP and enabled modern LLMs. This module covers tokenization, attention, BERT, and the Hugging Face ecosystem."
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
      children: "Understanding transformer architecture is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how transformer architecture works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder stack, decoder stack, N=6 layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positional Encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sinusoidal PE, learned PE, relative position biases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean/variance normalization, affine parameters, pre/post-norm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feed-Forward Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-layer MLP with ReLU/GELU, expansion factor 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Residual Connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip connections with pre-norm and post-norm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer Variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT (encoder-only), GPT (decoder-only), T5 (encoder-decoder)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Encoder\n        A[Input Tokens] --> B[Token Embeddings]\n        B --> C[+ Positional Encoding]\n        C --> D[Multi-Head Self-Attention]\n        D --> E[+ Residual & LayerNorm]\n        E --> F[Feed-Forward Network]\n        F --> G[+ Residual & LayerNorm]\n        G --> H[— N layers]\n    end\n    subgraph Decoder\n        I[Target Tokens] --> J[Token Embeddings]\n        J --> K[+ Positional Encoding]\n        K --> L[Masked Multi-Head Self-Attention]\n        L --> M[+ Residual & LayerNorm]\n        M --> N[Cross-Attention over Encoder Output]\n        N --> O[+ Residual & LayerNorm]\n        O --> P[Feed-Forward Network]\n        P --> Q[+ Residual & LayerNorm]\n        Q --> R[— N layers]\n    end\n    H --> N\n    R --> S[Linear + Softmax]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-architecture-overview",
      children: "5.1 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Transformer (Vaswani et al., 2017) eschews recurrence entirely, using attention as the sole operation. The encoder has N=6 identical layers; the decoder has N=6 identical layers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TransformerConfig {\n  vocabSize: number;\n  dModel: number;     // 512 in base, 768 in BERT-base\n  numHeads: number;   // 8 in base, 12 in BERT-base\n  dff: number;        // 2048 in base (4 * dModel)\n  numLayers: number;  // 6 in base, 12 in BERT-base\n  maxSeqLen: number;  // 512\n  dropout: number;    // 0.1\n}\n\nclass TransformerBlock {\n  private selfAttention: MultiHeadAttention;\n  private crossAttention: MultiHeadAttention;\n  private ffn: FeedForwardNetwork;\n  private norm1: LayerNorm;\n  private norm2: LayerNorm;\n  private norm3: LayerNorm;\n  private dropout: number;\n  private dModel: number;\n\n  constructor(config: TransformerConfig) {\n    this.dModel = config.dModel;\n    this.dropout = config.dropout;\n    this.selfAttention = new MultiHeadAttention(config.dModel, config.numHeads);\n    this.crossAttention = new MultiHeadAttention(config.dModel, config.numHeads);\n    this.ffn = new FeedForwardNetwork(config.dModel, config.dff);\n    this.norm1 = new LayerNorm(config.dModel);\n    this.norm2 = new LayerNorm(config.dModel);\n    this.norm3 = new LayerNorm(config.dModel);\n  }\n\n  // Post-norm variant (original Transformer)\n  encoderForward(x: number[][]): number[][] {\n    // Self-attention with residual\n    const attnOut = this.selfAttention.forward(x).output;\n    const x1 = this.applyResidual(x, attnOut);\n    const x1Norm = this.norm1.forward(x1);\n\n    // FFN with residual\n    const ffnOut = this.ffn.forward(x1Norm);\n    const x2 = this.applyResidual(x1, ffnOut);\n    return this.norm2.forward(x2);\n  }\n\n  decoderForward(x: number[][], encoderOutput: number[][]): number[][] {\n    // Masked self-attention\n    const selfOut = this.selfAttention.forward(x).output;\n    const x1 = this.applyResidual(x, selfOut);\n    const x1Norm = this.norm1.forward(x1);\n\n    // Cross-attention over encoder output\n    const crossOut = this.crossAttention.forward(x1Norm, encoderOutput).output;\n    const x2 = this.applyResidual(x1Norm, crossOut);\n    const x2Norm = this.norm2.forward(x2);\n\n    // FFN\n    const ffnOut = this.ffn.forward(x2Norm);\n    const x3 = this.applyResidual(x2Norm, ffnOut);\n    return this.norm3.forward(x3);\n  }\n\n  private applyResidual(input: number[][], sublayer: number[][]): number[][] {\n    return input.map((row, i) => {\n      const dropped = sublayer[i].map(\n        (v) => (Math.random() < this.dropout ? 0 : v / (1 - this.dropout))\n      );\n      return row.map((v, j) => v + dropped[j]);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The encoder processes the input sequence; the decoder generates output autoregressively. Cross-attention in the decoder queries the encoder's final output using the decoder's self-attention output as the query."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-positional-encoding",
      children: "5.2 Positional Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since self-attention is permutation-invariant (no notion of order), positional encoding injects sequence position information."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SinusoidalPositionalEncoding {\n  private dModel: number;\n  private maxLen: number;\n  private encoding: number[][];\n\n  constructor(dModel: number, maxLen: number = 512) {\n    this.dModel = dModel;\n    this.maxLen = maxLen;\n    this.encoding = this.computeEncoding();\n  }\n\n  private computeEncoding(): number[][] {\n    const encoding: number[][] = [];\n    for (let pos = 0; pos < this.maxLen; pos++) {\n      const pe = new Array(this.dModel).fill(0);\n      for (let i = 0; i < this.dModel; i += 2) {\n        const divTerm = Math.pow(10000, (2 * i) / this.dModel);\n        pe[i] = Math.sin(pos / divTerm);\n        if (i + 1 < this.dModel) {\n          pe[i + 1] = Math.cos(pos / divTerm);\n        }\n      }\n      encoding.push(pe);\n    }\n    return encoding;\n  }\n\n  addPositionalInfo(embeddings: number[][]): number[][] {\n    return embeddings.map((emb, pos) =>\n      emb.map((v, i) => v + (pos < this.maxLen ? this.encoding[pos][i] : 0))\n    );\n  }\n\n  getEncoding(pos: number): number[] {\n    return [...this.encoding[pos]];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of sinusoidal PE"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each dimension corresponds to a sinusoid with frequency 1/10000^(2i/d_model)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower dimensions (small i) encode high-frequency position information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher dimensions encode low-frequency patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The encoding for position pos+k can be represented as a linear function of the encoding for position pos, allowing the model to learn relative positions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LearnedPositionalEncoding {\n  private dModel: number;\n  private maxLen: number;\n  private embeddings: number[][];\n\n  constructor(dModel: number, maxLen: number = 512) {\n    this.dModel = dModel;\n    this.maxLen = maxLen;\n    const scale = Math.sqrt(2 / dModel);\n    this.embeddings = Array.from({ length: maxLen }, () =>\n      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)\n    );\n  }\n\n  addPositionalInfo(tokenEmbeddings: number[][]): number[][] {\n    return tokenEmbeddings.map((emb, pos) =>\n      emb.map((v, i) => v + this.embeddings[pos][i])\n    );\n  }\n\n  getEmbedding(pos: number): number[] {\n    return [...this.embeddings[pos]];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relative position encoding"
      }), " (used in Transformer-XL, T5) encodes the offset between positions rather than absolute positions. This generalizes better to sequence lengths unseen during training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-layer-normalization",
      children: "5.3 Layer Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Layer normalization normalizes activations across the feature dimension, stabilizing training and reducing sensitivity to hyperparameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LayerNorm {\n  private dModel: number;\n  private gamma: number[]; // scale\n  private beta: number[];  // shift\n  private eps: number;\n\n  constructor(dModel: number, eps: number = 1e-6) {\n    this.dModel = dModel;\n    this.eps = eps;\n    this.gamma = new Array(dModel).fill(1);\n    this.beta = new Array(dModel).fill(0);\n  }\n\n  forward(x: number[][]): number[][] {\n    return x.map((row) => {\n      // Compute mean and variance\n      const mean = row.reduce((s, v) => s + v, 0) / this.dModel;\n      const variance =\n        row.reduce((s, v) => s + (v - mean) ** 2, 0) / this.dModel;\n\n      // Normalize, scale, shift\n      return row.map(\n        (v, i) => this.gamma[i] * ((v - mean) / Math.sqrt(variance + this.eps)) + this.beta[i]\n      );\n    });\n  }\n\n  // Compute gradients for backprop\n  backward(\n    x: number[][],\n    dout: number[][]\n  ): {\n    dx: number[][];\n    dgamma: number[];\n    dbeta: number[];\n  } {\n    const dgamma = new Array(this.dModel).fill(0);\n    const dbeta = new Array(this.dModel).fill(0);\n    const dx: number[][] = [];\n\n    for (let b = 0; b < x.length; b++) {\n      const row = x[b];\n      const drow = dout[b];\n      const mean = row.reduce((s, v) => s + v, 0) / this.dModel;\n      const variance =\n        row.reduce((s, v) => s + (v - mean) ** 2, 0) / this.dModel;\n      const stdInv = 1 / Math.sqrt(variance + this.eps);\n\n      const xhat = row.map((v) => (v - mean) * stdInv);\n\n      // Gradient for gamma and beta\n      for (let i = 0; i < this.dModel; i++) {\n        dgamma[i] += drow[i] * xhat[i];\n        dbeta[i] += drow[i];\n      }\n\n      // Gradient for input\n      const dxhat = drow.map((d, i) => d * this.gamma[i]);\n      const dxhatSum = dxhat.reduce((s, v) => s + v, 0);\n      const dxhatXhatSum = dxhat.reduce((s, v, i) => s + v * xhat[i], 0);\n\n      const dxRow = new Array(this.dModel).fill(0);\n      for (let i = 0; i < this.dModel; i++) {\n        dxRow[i] =\n          (1 / x.length) *\n          stdInv *\n          (dxhatSum - dxhat[i] - xhat[i] * dxhatXhatSum);\n      }\n      dx.push(dxRow);\n    }\n\n    return { dx, dgamma, dbeta };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-norm vs post-norm"
      }), ": In the original Transformer (post-norm), residual connections flow around the sublayer, followed by layer norm: output = LayerNorm(x + Sublayer(x)). GPT and modern implementations use pre-norm: output = x + Sublayer(LayerNorm(x)). Pre-norm stabilizes training at higher learning rates and is more common in modern architectures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-feed-forward-network",
      children: "5.4 Feed-Forward Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The FFN applies two linear transformations with a ReLU (or GELU) activation in between. The inner dimension d_ff is typically 4x d_model."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FeedForwardNetwork {\n  private dModel: number;\n  private dff: number;\n\n  // W1: (dff x dModel), W2: (dModel x dff)\n  private W1: number[][];\n  private b1: number[];\n  private W2: number[][];\n  private b2: number[];\n\n  constructor(dModel: number, dff: number) {\n    this.dModel = dModel;\n    this.dff = dff;\n\n    const scale1 = Math.sqrt(2 / (dModel + dff));\n    const scale2 = Math.sqrt(2 / (dff + dModel));\n\n    this.W1 = Array.from({ length: dff }, () =>\n      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale1)\n    );\n    this.b1 = new Array(dff).fill(0);\n    this.W2 = Array.from({ length: dModel }, () =>\n      Array.from({ length: dff }, () => (Math.random() * 2 - 1) * scale2)\n    );\n    this.b2 = new Array(dModel).fill(0);\n  }\n\n  private relu(x: number): number {\n    return Math.max(0, x);\n  }\n\n  // GELU approximation: 0.5 * x * (1 + tanh(sqrt(2/pi) * (x + 0.044715 * x^3)))\n  private gelu(x: number): number {\n    const sqrt2pi = Math.sqrt(2 / Math.PI);\n    return 0.5 * x * (1 + Math.tanh(sqrt2pi * (x + 0.044715 * Math.pow(x, 3))));\n  }\n\n  forward(x: number[][]): number[][] {\n    return x.map((row) => {\n      // First linear: dModel -> dff\n      const hidden = this.W1.map((wRow, i) => {\n        let sum = 0;\n        for (let j = 0; j < this.dModel; j++) sum += wRow[j] * row[j];\n        return this.gelu(sum + this.b1[i]);\n      });\n\n      // Second linear: dff -> dModel\n      const output = this.W2.map((wRow) => {\n        let sum = 0;\n        for (let j = 0; j < this.dff; j++) sum += wRow[j] * hidden[j];\n        return sum;\n      });\n\n      return output.map((v, i) => v + this.b2[i]);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The FFN operates independently on each position (same weights, different inputs). It captures non-linear feature interactions that self-attention misses. The expansion factor of 4 means the FFN contains ~2/3 of the model's parameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-residual-connections",
      children: "5.5 Residual Connections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Residual connections (skip connections) add the input of a sublayer to its output. This creates a direct gradient highway, allowing training of very deep networks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ResidualConnection {\n  private dModel: number;\n  private dropout: number;\n\n  constructor(dModel: number, dropout: number = 0.1) {\n    this.dModel = dModel;\n    this.dropout = dropout;\n  }\n\n  // Post-norm: LayerNorm(x + Sublayer(x))\n  postNorm(\n    x: number[][],\n    sublayerOutput: number[][],\n    norm: LayerNorm\n  ): number[][] {\n    const residual = x.map((row, i) =>\n      row.map((v, j) => v + this.dropoutForward(sublayerOutput[i][j]))\n    );\n    return norm.forward(residual);\n  }\n\n  // Pre-norm: x + Sublayer(LayerNorm(x))\n  preNorm(\n    x: number[][],\n    norm: LayerNorm,\n    sublayer: (input: number[][]) => number[][]\n  ): number[][] {\n    const normalized = norm.forward(x);\n    const sublayerOut = sublayer(normalized);\n    return x.map((row, i) =>\n      row.map((v, j) => v + this.dropoutForward(sublayerOut[i][j]))\n    );\n  }\n\n  private dropoutForward(v: number): number {\n    if (Math.random() < this.dropout) return 0;\n    return v / (1 - this.dropout);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why residuals matter"
      }), ": In a 12-layer transformer encoder, without residual connections, the gradient at layer 1 would be ∏_{l=2}^{12} (I + d(Sublayer_l)/dx). Each sublayer's Jacobian is close to zero initially,.\nso the product vanishes. With residuals, the Jacobian is I + d(Sublayer_l)/dx, and the product asymptotically approaches I (identity), preserving gradient flow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-transformer-variants",
      children: "5.6 Transformer Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three main architectural families exist. Each removes components suited to its task."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Encoder-only (BERT, RoBERTa, ALBERT): bidirectional context\nclass EncoderOnlyTransformer {\n  private layers: TransformerBlock[];\n  private embedding: TokenEmbedding;\n  private posEncoding: LearnedPositionalEncoding;\n  private finalNorm: LayerNorm;\n\n  constructor(config: TransformerConfig) {\n    this.embedding = new TokenEmbedding(config.vocabSize, config.dModel);\n    this.posEncoding = new LearnedPositionalEncoding(config.dModel, config.maxSeqLen);\n    this.layers = Array.from(\n      { length: config.numLayers },\n      () => new TransformerBlock(config)\n    );\n    this.finalNorm = new LayerNorm(config.dModel);\n  }\n\n  forward(inputIds: number[][]): number[][] {\n    let x = inputIds.map((seq) => this.embedding.forward(seq));\n    x = this.posEncoding.addPositionalInfo(x);\n    for (const layer of this.layers) {\n      x = layer.encoderForward(x);\n    }\n    return this.finalNorm.forward(x);\n  }\n}\n\n// Decoder-only (GPT, LLaMA, Mistral): left-to-right autoregressive\nclass DecoderOnlyTransformer {\n  private layers: TransformerBlock[];\n  private embedding: TokenEmbedding;\n  private posEncoding: SinusoidalPositionalEncoding;\n  private finalNorm: LayerNorm;\n  private lmHead: number[][]; // projection to vocab\n\n  constructor(config: TransformerConfig) {\n    this.embedding = new TokenEmbedding(config.vocabSize, config.dModel);\n    this.posEncoding = new SinusoidalPositionalEncoding(config.dModel, config.maxSeqLen);\n    this.layers = Array.from(\n      { length: config.numLayers },\n      () => new TransformerBlock(config)\n    );\n    this.finalNorm = new LayerNorm(config.dModel);\n    this.lmHead = Array.from({ length: config.vocabSize }, () =>\n      Array.from({ length: config.dModel }, () => (Math.random() - 0.5) * 0.1)\n    );\n  }\n\n  forward(inputIds: number[][]): number[][] {\n    let x = inputIds.map((seq) => this.embedding.forward(seq));\n    x = this.posEncoding.addPositionalInfo(x);\n    for (const layer of this.layers) {\n      x = layer.decoderForward(x, []); // No encoder output\n    }\n    x = this.finalNorm.forward(x);\n\n    // Project to vocabulary\n    return x.map((seq) =>\n      this.lmHead.map((row) =>\n        row.reduce((s, w, i) => s + w * seq[i], 0)\n      )\n    );\n  }\n}\n\n// Encoder-Decoder (T5, BART): full seq2seq\nclass EncoderDecoderTransformer {\n  private encoder: EncoderOnlyTransformer;\n  private decoder: DecoderOnlyTransformer;\n\n  constructor(config: TransformerConfig) {\n    this.encoder = new EncoderOnlyTransformer(config);\n    this.decoder = new DecoderOnlyTransformer(config);\n  }\n\n  forward(sourceIds: number[][], targetIds: number[][]): number[][] {\n    const encoderOutput = this.encoder.forward(sourceIds);\n    // Decoder uses encoder output for cross-attention\n    return this.decoder.forward(targetIds, encoderOutput);\n  }\n}\n\nclass TokenEmbedding {\n  private vocabSize: number;\n  private dModel: number;\n  private embeddings: number[][];\n\n  constructor(vocabSize: number, dModel: number) {\n    this.vocabSize = vocabSize;\n    this.dModel = dModel;\n    const scale = Math.sqrt(2 / dModel);\n    this.embeddings = Array.from({ length: vocabSize }, () =>\n      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)\n    );\n  }\n\n  forward(tokenIds: number[]): number[][] {\n    return tokenIds.map((id) => [...this.embeddings[id]]);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model comparison"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT (encoder-only): 340M params, 12/24 layers, bidirectional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPT-3 (decoder-only): 175B params, 96 layers, autoregressive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T5 (encoder-decoder): 11B params, 24+24 layers, text-to-text"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Transformer architecture replaced recurrent networks with parallelizable self-attention for sequence processing. The encoder stacks identical layers with multi-head self-attention and.\nfeed-forward networks, while the decoder adds cross-attention to encoder outputs. Positional encoding injects sequence order information using sinusoidal functions or learned embeddings. Layer normalization stabilizes training by normalizing across feature dimensions. The feed-forward network applies two linear transformations with a ReLU activation,.\nexpanding and contracting the representation dimensionality. Residual connections with pre-normalization improve gradient flow in deep stacks. Transformer variants include encoder-only (BERT),.\ndecoder-only (GPT), and encoder-decoder (T5) architectures for different task families."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transformer replaces recurrence entirely with attention, enabling parallel computation and direct long-range connections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positional encoding (sinusoidal or learned) is essential because self-attention is permutation-invariant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer normalization stabilizes training; pre-norm (GPT style) is more stable than post-norm (original Transformer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The FFN expansion factor 4— means ~2/3 of parameters are in FFN layers, not attention layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Residual connections with dropout (0.1) are critical for training deep (12-96 layer) transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoder-only models (BERT) excel at understanding tasks; decoder-only models (GPT) excel at generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The O(n^2) self-attention complexity limits context length; efficient attention variants are active research"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-trained transformers with fine-tuning dominate nearly every NLP benchmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Why does the transformer use sinusoidal positional encoding instead of a learned embedding?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The sinusoidal encoding has several advantages: (1) It can extrapolate to sequence lengths not seen during training — for any position pos+k,.\nthe encoding is a linear function of position pos, allowing the model to learn relative position patterns that generalize. (2) It doesn't require learning parameters,.\nreducing model size. (3) The varying frequencies across dimensions (low dimensions encode high-frequency patterns, high dimensions encode low-frequency patterns) give the model both fine-grained and.\ncoarse positional information. However, many modern models (BERT, GPT-2) use learned positional embeddings because they perform slightly better when max sequence length is fixed and.\nknown in advance (typically 512)."
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
      "data-qid": "nlp05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the difference between pre-norm and post-norm in transformer layers.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Post-norm (original Transformer): output = LayerNorm(x + Sublayer(x)). Layer norm is applied after the residual addition. Pre-norm (GPT, modern transformers): output = x + Sublayer(LayerNorm(x)). Layer norm is applied before each sublayer. Pre-norm has several benefits: (1) More stable training.\nat higher learning rates (LR can be 2-4x higher). (2) Warmup steps can be reduced or.\neliminated. (3) The final layer output doesn't go through a norm, preserving scale. (4) Gradient flow through the residual path is closer to identity. Post-norm can achieve slightly better final performance with optimal hyperparameters but.\nis harder to tune. Most modern implementations (GPT, LLaMA, Mistral) use pre-norm."
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
      "data-qid": "nlp05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the role of the feed-forward network in transformer layers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The FFN applies two linear transformations with a ReLU/GELU activation: FFN(x) = W2 * GELU(W1 * x + b1) + b2. The inner dimension d_ff = 4*d_model (2048 for.\nd_model=512). The FFN (1) introduces non-linear transformations that self-attention lacks (attention is purely linear in the value dimension). (2) Allows each position to independently process information aggregated by attention. (3) Contains ~2/3 of all model parameters. Without FFN,.\nthe transformer would be a purely linear model in the token embedding space, seriously limiting representational power. Different FFN neurons seem to specialize: some activate for.\nspecific syntactic patterns, others for semantic features."
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
      "data-qid": "nlp05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Why is the transformer more parallelizable than RNNs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RNNs process sequences one token at a time — the computation of h_t depends on h_{t-1}, creating a sequential dependency that prevents parallelization across timesteps. Training a 100-token sequence requires 100 sequential operations. Transformers compute attention between all pairs of positions simultaneously using matrix multiplications: Q,.\nK, V are computed in parallel via X * W_q, X * W_k, X * W_v (all tokens at once), and.\nattention scores = softmax(Q * K^T / sqrt(d_k)) are a single matrix operation. This reduces the sequential operation path to O(1) (a fixed number of matrix multiplies per layer),.\nregardless of sequence length. This parallelism is why transformers can be trained efficiently on GPU hardware despite their O(n^2) per-layer complexity."
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
      "data-qid": "nlp05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the difference between encoder-only, decoder-only, and encoder-decoder transformers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Encoder-only (BERT, RoBERTa): Uses the encoder stack with bidirectional self-attention (no masking). Outputs contextualized token representations. Best for understanding tasks: classification,.\nNER, QA, sentence similarity. Decoder-only (GPT, LLaMA): Uses the decoder stack with causal masking (each token can only attend to itself and.\nprevious tokens). Generates text autoregressively. Best for generation tasks: language modeling, story generation, code completion. Encoder-decoder (T5, BART): Full stack with encoder (bidirectional) and.\ndecoder (causal with cross-attention). Best for seq2seq tasks: translation, summarization, text-to-text problems. The choice depends on whether the task requires understanding (encoder-only),.\ngeneration (decoder-only), or both with input-output transformation (encoder-decoder)."
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
      "data-qid": "nlp05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How many parameters are in each component of a transformer layer?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For a layer with d_model=512, h=8 heads (d_k=64), d_ff=2048: Multi-head attention: 4 * d_model^2 = 4 * 512^2 = 1,048,576 parameters (W_q,.\nW_k, W_v, W_O each 512x512 = 262,144). Layer norm: 2 * d_model = 1,024 (gamma + beta). FFN: 2 * d_model * d_ff = 2 * 512 * 2048 = 2,097,152 (W1: 2048x512,.\nW2: 512x2048). Plus biases: 2048 + 512 = 2,560. Total per layer: ~3.15M. Attention has ~33% of parameters, FFN has ~67%. For.\na 6-layer base Transformer: ~19M parameters. For BERT-base (12 layers, d_model=768, d_ff=3072): ~110M parameters. GPT-3 (96 layers, d_model=12288, d_ff=49152): ~175B parameters."
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
      "data-qid": "nlp05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is label smoothing and why is it used in transformer training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Label smoothing replaces hard targets (0 or 1) with softened targets: y_smooth = (1 - epsilon) * y_hard + epsilon / V where V is vocabulary size and.\nepsilon=0.1 typically. For example, the correct word \"chat\" would have target 0.9 instead of 1.0, and all other V-1 words get 0.1/V instead of 0. This prevents the model from becoming over-confident,.\nwhich improves generalization and calibration. In transformer training, label smoothing of 0.1 consistently improves BLEU scores by 0.5-1.0 points and is standard in the Transformer paper. Without it,.\nthe model's softmax outputs become too sharp (near one-hot), and the model doesn't learn to assign nonzero probability to plausible alternatives."
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
      "data-qid": "nlp05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does the transformer handle variable-length sequences?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Transformers handle variable-length sequences through: (1) Padding — sequences shorter than max_len are padded with a special ", (0,jsx_runtime.jsx)(_components.pad, {
            children: " token. (2) Attention masking — padding positions are masked out (set to -Infinity before softmax) so they don't contribute to attention. (3).\nBucketing — sequences of similar lengths are grouped into batches to minimize padding waste. (4) The learned positional encoding (if used) must be sized for.\nthe maximum expected sequence length. Sinusoidal encoding (T5) can extrapolate beyond training lengths. In production, sequences are typically clipped or truncated to a maximum length (512 for.\nBERT, 2048 for GPT-3, 4096 for GPT-4). Packing multiple sequences into one training example is also common for efficiency."
          })]
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
      "data-qid": "nlp05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is cross-attention in the transformer decoder?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cross-attention allows the decoder to attend to the encoder's output. In the decoder's cross-attention sublayer: Query comes from the decoder's previous self-attention output,.\nwhile Key and Value come from the encoder's final output. This lets each decoder position attend to all input positions and.\nselectively retrieve information. For example, in machine translation, when generating the French word \"maison\", the decoder queries the English sentence and.\nattends most to \"house\". Cross-attention is the key difference between encoder and decoder layers: encoder layers use only self-attention, decoder layers use masked self-attention followed by cross-attention. Cross-attention has no causal mask — the decoder can attend to any encoder position regardless of decoding step."
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
      "data-qid": "nlp05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What is the \"Attention is All You Need\" paper's main contribution?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The paper (Vaswani et al., 2017) proposed the Transformer, the first sequence transduction model relying entirely on attention, with no recurrence or.\nconvolution. Key contributions: (1) Scaled dot-product attention with softmax normalization. (2) Multi-head attention allowing the model to attend to information from different representation subspaces. (3) Positional encoding for.\nsequence order. (4) The complete encoder-decoder architecture with residual connections and layer normalization. (5) Demonstrating that the Transformer trains significantly faster (3.5 days on 8 GPUs) while achieving 28.4 BLEU on WMT 2014 English-to-German translation,.\nand 41.8 on English-to-French — the best results at the time. This paper is the foundation of virtually all modern NLP systems (BERT,.\nGPT, T5, XLNet, etc.)."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: What is the typical expansion factor of the FFN inner dimension in transformers?\na) 2—\nb) 3—\nc) 4—\nd) 8—"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 4—"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The FFN inner dimension d_ff is typically 4— d_model. For d_model=512, d_ff=2048. For d_model=768, d_ff=3072."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q2: How many layers does BERT-base have?\na) 6\nb) 8\nc) 12\nd) 24"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 12"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BERT-base has 12 transformer layers (encoder blocks), with d_model=768 and 12 attention heads. BERT-large has 24 layers."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q3: Which normalization does GPT use?\na) Batch norm\nb) Layer norm (post-norm)\nc) Layer norm (pre-norm)\nd) Group norm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Layer norm (pre-norm)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "GPT and most modern decoder-only transformers (GPT-2, GPT-3, LLaMA) use pre-norm: layer normalization before each sublayer."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q4: What is the time complexity of one transformer encoder layer?\na) O(n)\nb) O(n^2)\nc) O(n^2 * d)\nd) O(n * d^2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) O(n^2 * d) or more precisely O(n^2 * d)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Self-attention is O(n^2 * d_k) and FFN is O(n * d_model * d_ff). For n > d_k (typical), attention dominates with O(n^2 * d_k). More precisely the total is O(n^2 * d_k + n * d_model * d_ff)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q5: What property of self-attention necessitates positional encoding?\na) Non-linearity\nb) Permutation invariance\nc) Quadratic complexity\nd) Layer-dependent scale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp05-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Permutation invariance"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Self-attention computes weighted sums over all positions; shuffling the input tokens produces the same output per token (just permuted), so positional encoding is needed to inject order information."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not practicing enough problems to build pattern recognition", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Implement sinusoidal positional encoding. Verify that the dot product of PE(pos) and PE(pos+k) depends primarily on k, not pos (relative position property)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compute the parameter count of one transformer layer with d_model=512, h=8, d_ff=2048. Confirm attention has 33% of parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a single encoder layer from scratch (self-attention + FFN + residual + layer norm). Test it on a random sequence of 10 tokens, d_model=64."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement both pre-norm and post-norm variants. Train each on a small language modeling task and compare training loss curves."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a decoder-only transformer (like GPT-2 small) with 6 layers, d_model=512, 8 heads. Train it on a text corpus (e.g., Shakespeare). Implement temperature sampling and top-k sampling for generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism",
          children: "Attention Mechanism"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [BERT & Fine-Tuning](06-bert-and-fine-t"]
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
            children: "Explain the core idea of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
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
            children: "Describe a production bug caused by misunderstanding Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm from 10 users to 10 million?"
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
            children: "Compare Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
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
            children: "How does Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in production today?"
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
        }), " Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm on an empty input?"
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
            children: "Complete Medium exercises, explain Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to someone else"
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
        children: "Always write a one-line example of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
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
        children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
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
        children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is like a recipe"
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
        }), " — this chapter contributes the Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-05transformerarchitecture-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-05transformerarchitecture-flash2",
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
      "data-qid": "10nlptransformers-05transformerarchitecture-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-05transformerarchitecture-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-05transformerarchitecture-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in production at scale"
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
        children: "Testing: pytest for unit tests of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm code."]
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
        }), " or your IDE's debugger to step through the Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm example code."]
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
        children: "Explain Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
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
        children: "Tell me about a time you debugged a Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm without notes"
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
        }), ": a small team uses Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning",
        children: "BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm depends on input size and distribution — always benchmark for your own data."
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