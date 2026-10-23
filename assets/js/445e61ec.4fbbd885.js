"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6258],{

/***/ 30750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_06_bert_and_fine_tuning_md_445_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-06-bert-and-fine-tuning-md-445.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_06_bert_and_fine_tuning_md_445_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/06-bert-and-fine-tuning","title":"BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":143,"frontMatter":{"id":"06-bert-and-fine-tuning","slug":"/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning","title":"BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants","sidebar_label":"BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants","sidebar_position":143},"sidebar":"placementSidebar","previous":{"title":"Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture"},"next":{"title":"Hugging Face Ecosystem — Transformers, Pipelines, Datasets, Tokenizers","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/07-hugging-face-ecosystem"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning.md


const frontMatter = {
	id: '06-bert-and-fine-tuning',
	slug: '/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning',
	title: 'BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants',
	sidebar_label: 'BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants',
	sidebar_position: 143
};
const contentTitle = 'BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants';

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
  "value": "6.1 Pre-Training Overview",
  "id": "61-pre-training-overview",
  "level": 2
}, {
  "value": "6.2 Masked Language Modeling",
  "id": "62-masked-language-modeling",
  "level": 2
}, {
  "value": "6.3 Next Sentence Prediction",
  "id": "63-next-sentence-prediction",
  "level": 2
}, {
  "value": "6.4 Fine-Tuning Tasks",
  "id": "64-fine-tuning-tasks",
  "level": 2
}, {
  "value": "6.5 GLUE Benchmark",
  "id": "65-glue-benchmark",
  "level": 2
}, {
  "value": "6.6 BERT Variants",
  "id": "66-bert-variants",
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
        id: "bert--fine-tuning--masked-lm-nsp-glue-model-variants",
        children: "BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants"
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
            children: "Explain BERT's pre-training objectives: masked language modeling (MLM) and next sentence prediction (NSP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement the MLM training loop with random masking strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tune BERT for text classification, named entity recognition, and question answering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate models using the GLUE benchmark and understand each task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare BERT variants: RoBERTa, ALBERT, DistilBERT, SpanBERT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply knowledge distillation to compress transformer models"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural language processing is how machines understand human text. Transformers revolutionized NLP and enabled modern LLMs. This module covers tokenization, attention, BERT, and the Hugging Face ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding bert and fine tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how bert and fine tuning works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-Training Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale unsupervised pre-training on BookCorpus + Wikipedia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masked Language Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15% masking, 80/10/10 strategy, bidirectional context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next Sentence Prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50/50 positive/negative pairs, relationship understanding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-Tuning Tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, NER, QA with task-specific heads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLUE Benchmark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-task evaluation (9 tasks), leaderboard, metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT Variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoBERTa, ALBERT, DistilBERT, SpanBERT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Pre-training Corpus] --> B[MLM + NSP]\r\n    B --> C[Pre-trained BERT]\r\n    C --> D{Fine-tuning Task}\r\n    D -->|Classification| E[CLS Token + Classifier]\r\n    D -->|NER| F[Token-level Classifier]\r\n    D -->|QA| G[Span Prediction Head]\r\n    D -->|GLUE| H[Task-Specific Head]\r\n    E --> I[Trained Model]\r\n    F --> I\r\n    G --> I\r\n    H --> I"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-pre-training-overview",
      children: "6.1 Pre-Training Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BERT (Bidirectional Encoder Representations from Transformers) is pre-trained on 3.3 billion words (BooksCorpus 800M + English Wikipedia 2.5B). Two objectives are optimized jointly: MLM and NSP."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BERTPreTrainingConfig {\r\n  dModel = 768;\r\n  numLayers = 12;\r\n  numHeads = 12;\r\n  dff = 3072;\r\n  vocabSize = 30522;\r\n  maxSeqLen = 512;\r\n  dropout = 0.1;\r\n  maskProb = 0.15;\r\n  maxPredictions = 20; // max masked tokens per sequence\r\n}\r\n\r\nclass BERTPretrainingInput {\r\n  inputIds: number[];\r\n  attentionMask: number[];\r\n  tokenTypeIds: number[];\r\n  maskedLmPositions: number[];   // positions of masked tokens\r\n  maskedLmIds: number[];         // original token IDs at masked positions\r\n  nextSentenceLabel: number;     // 0 = not next, 1 = is next\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre-training requires enormous compute: BERT-base took 4 days on 16 TPUs. The masked language model allows BERT to learn bidirectional representations, unlike GPT's left-to-right approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-masked-language-modeling",
      children: "6.2 Masked Language Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MLM randomly masks 15% of tokens in each sequence. The model predicts the original token at each masked position using the final hidden states of the masked positions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MLMHead {\r\n  private dModel: number;\r\n  private vocabSize: number;\r\n  private dense: number[][];  // (dModel x dModel)\r\n  private layerNorm: LayerNorm;\r\n  private outputWeights: number[][]; // (vocabSize x dModel)\r\n  private outputBias: number[];\r\n\r\n  constructor(dModel: number, vocabSize: number) {\r\n    this.dModel = dModel;\r\n    this.vocabSize = vocabSize;\r\n    this.dense = Array.from({ length: dModel }, () =>\r\n      Array.from({ length: dModel }, () => (Math.random() - 0.5) * 0.1)\r\n    );\r\n    this.layerNorm = new LayerNorm(dModel);\r\n    const scale = Math.sqrt(2 / (dModel + vocabSize));\r\n    this.outputWeights = Array.from({ length: vocabSize }, () =>\r\n      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)\r\n    );\r\n    this.outputBias = new Array(vocabSize).fill(0);\r\n  }\r\n\r\n  forward(hiddenStates: number[][], maskedPositions: number[]): number[][] {\r\n    const maskedHiddens = maskedPositions.map((pos) => hiddenStates[pos]);\r\n\r\n    // Dense + GELU\r\n    const denseOut = maskedHiddens.map((h) => {\r\n      const out = this.dense.map((row) =>\r\n        row.reduce((s, w, j) => s + w * h[j], 0)\r\n      );\r\n      return out.map((v) => this.gelu(v));\r\n    });\r\n\r\n    // Layer norm\r\n    const normOut = this.layerNorm.forward(denseOut);\r\n\r\n    // Project to vocabulary (using tied embeddings or separate weights)\r\n    const logits = normOut.map((h) =>\r\n      this.outputWeights.map((row) => {\r\n        let dot = 0;\r\n        for (let j = 0; j < this.dModel; j++) dot += row[j] * h[j];\r\n        return dot;\r\n      }).map((v, i) => v + this.outputBias[i])\r\n    );\r\n\r\n    return logits;\r\n  }\r\n\r\n  private gelu(x: number): number {\r\n    return 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));\r\n  }\r\n}\r\n\r\nclass MaskingGenerator {\r\n  private maskProb: number;\r\n  private maxPredictions: number;\r\n  private maskTokenId: number;\r\n  private vocabSize: number;\r\n  private specialTokenIds: Set<number>;\r\n\r\n  constructor(\r\n    maskProb: number,\r\n    maxPredictions: number,\r\n    maskTokenId: number,\r\n    vocabSize: number,\r\n    specialTokenIds: Set<number>\r\n  ) {\r\n    this.maskProb = maskProb;\r\n    this.maxPredictions = maxPredictions;\r\n    this.maskTokenId = maskTokenId;\r\n    this.vocabSize = vocabSize;\r\n    this.specialTokenIds = specialTokenIds;\r\n  }\r\n\r\n  maskTokens(\r\n    inputIds: number[]\r\n  ): { inputIds: number[]; lmLabels: number[]; maskedPositions: number[] } {\r\n    const maskedInput = [...inputIds];\r\n    const lmLabels = new Array(inputIds.length).fill(-100); // -100 = ignore in loss\r\n    const maskedPositions: number[] = [];\r\n\r\n    // Select tokens to mask (excluding special tokens)\r\n    const candidates = inputIds\r\n      .map((id, idx) => ({ id, idx }))\r\n      .filter(({ id, idx }) => !this.specialTokenIds.has(id) && idx > 0 && idx < inputIds.length - 1);\r\n\r\n    // Shuffle and select up to maxPredictions\r\n    const shuffled = candidates.sort(() => Math.random() - 0.5);\r\n    const numMasks = Math.min(\r\n      Math.max(1, Math.floor(inputIds.length * this.maskProb)),\r\n      this.maxPredictions,\r\n      candidates.length\r\n    );\r\n\r\n    const selected = shuffled.slice(0, numMasks);\r\n\r\n    for (const { id, idx } of selected) {\r\n      lmLabels[idx] = id; // store original token\r\n      maskedPositions.push(idx);\r\n      const rand = Math.random();\r\n      if (rand < 0.8) {\r\n        // 80%: replace with [MASK]\r\n        maskedInput[idx] = this.maskTokenId;\r\n      } else if (rand < 0.9) {\r\n        // 10%: replace with random token\r\n        maskedInput[idx] = Math.floor(Math.random() * this.vocabSize);\r\n      }\r\n      // 10%: keep unchanged (helps model handle no-mask at fine-tuning)\r\n    }\r\n\r\n    return { inputIds: maskedInput, lmLabels, maskedPositions };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 80/10/10 strategy (80% mask, 10% random, 10% unchanged) prevents a mismatch between pre-training (where [MASK] tokens appear) and fine-tuning (where they never appear). Without this, BERT would not learn to handle unmasked input during fine-tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-next-sentence-prediction",
      children: "6.3 Next Sentence Prediction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NSP trains BERT to understand sentence relationships. For each training example, two sentences A and B are chosen: 50% of the time B follows A (IsNext label=1), 50% of the time B is random (NotNext label=0)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NSPHead {\r\n  private dModel: number;\r\n  private dense: number[][];\r\n  private bias: number[];\r\n\r\n  constructor(dModel: number) {\r\n    this.dModel = dModel;\r\n    this.dense = Array.from({ length: 2 }, () =>\r\n      Array.from({ length: dModel }, () => (Math.random() - 0.5) * 0.1)\r\n    );\r\n    this.bias = new Array(2).fill(0);\r\n  }\r\n\r\n  forward(clsTokenHidden: number[]): number[] {\r\n    const logits = this.dense.map((row, i) => {\r\n      let sum = this.bias[i];\r\n      for (let j = 0; j < this.dModel; j++) sum += row[j] * clsTokenHidden[j];\r\n      return sum;\r\n    });\r\n    // Softmax\r\n    const max = Math.max(...logits);\r\n    const exp = logits.map((l) => Math.exp(l - max));\r\n    const sum = exp.reduce((a, b) => a + b, 0);\r\n    return exp.map((e) => e / sum);\r\n  }\r\n}\r\n\r\nclass NSPDataGenerator {\r\n  generatePair(\r\n    sentences: string[],\r\n    tokenizer: { encode: (s: string) => number[] }\r\n  ): { inputIds: number[]; tokenTypeIds: number[]; label: number } {\r\n    const idx = Math.floor(Math.random() * sentences.length);\r\n    const sentenceA = sentences[idx];\r\n\r\n    // 50% next, 50% random\r\n    let sentenceB: string;\r\n    let label: number;\r\n    if (Math.random() < 0.5 && idx < sentences.length - 1) {\r\n      sentenceB = sentences[idx + 1];\r\n      label = 1; // IsNext\r\n    } else {\r\n      const randomIdx = Math.floor(Math.random() * sentences.length);\r\n      sentenceB = sentences[randomIdx];\r\n      label = 0; // NotNext\r\n    }\r\n\r\n    const tokensA = tokenizer.encode(sentenceA);\r\n    const tokensB = tokenizer.encode(sentenceB);\r\n\r\n    // [CLS] tokensA [SEP] tokensB [SEP]\r\n    const inputIds = [101, ...tokensA, 102, ...tokensB, 102]; // 101=[CLS], 102=[SEP]\r\n    const tokenTypeIds = [\r\n      0, ...tokensA.map(() => 0), 0,\r\n      1, ...tokensB.map(() => 1), 1,\r\n    ];\r\n\r\n    return { inputIds, tokenTypeIds, label };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Later research (RoBERTa) showed that NSP is not essential: removing NSP and using longer training with larger batches and more data improved performance. However, NSP remains useful for tasks requiring sentence pair understanding (NLI, QA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-fine-tuning-tasks",
      children: "6.4 Fine-Tuning Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adds a small task-specific head on top of the pre-trained BERT and updates all parameters end-to-end."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BERTForClassification {\r\n  private bert: EncoderOnlyTransformer; // pre-trained BERT\r\n  private classifier: number[][];  // (numClasses x dModel)\r\n  private bias: number[];\r\n\r\n  constructor(\r\n    bert: EncoderOnlyTransformer,\r\n    numClasses: number\r\n  ) {\r\n    this.bert = bert;\r\n    this.classifier = Array.from({ length: numClasses }, () =>\r\n      Array.from({ length: bert['dModel'] }, () => (Math.random() - 0.5) * 0.01)\r\n    );\r\n    this.bias = new Array(numClasses).fill(0);\r\n  }\r\n\r\n  forward(inputIds: number[][]): number[][] {\r\n    const hiddenStates = this.bert.forward(inputIds);\r\n    const clsToken = hiddenStates.map((seq) => seq[0]); // [CLS] token\r\n\r\n    return clsToken.map((h) => {\r\n      const logits = this.classifier.map((row, i) => {\r\n        let sum = this.bias[i];\r\n        for (let j = 0; j < row.length; j++) sum += row[j] * h[j];\r\n        return sum;\r\n      });\r\n      const max = Math.max(...logits);\r\n      const exp = logits.map((l) => Math.exp(l - max));\r\n      const sum = exp.reduce((a, b) => a + b, 0);\r\n      return exp.map((e) => e / sum);\r\n    });\r\n  }\r\n}\r\n\r\nclass BERTForTokenClassification {\r\n  private bert: EncoderOnlyTransformer;\r\n  private classifier: number[][];  // (numLabels x dModel)\r\n  private bias: number[];\r\n\r\n  constructor(bert: EncoderOnlyTransformer, numLabels: number) {\r\n    this.bert = bert;\r\n    this.classifier = Array.from({ length: numLabels }, () =>\r\n      Array.from({ length: bert['dModel'] }, () => (Math.random() - 0.5) * 0.01)\r\n    );\r\n    this.bias = new Array(numLabels).fill(0);\r\n  }\r\n\r\n  forward(inputIds: number[][]): number[][][] {\r\n    const hiddenStates = this.bert.forward(inputIds);\r\n    // Apply classifier to each token\r\n    return hiddenStates.map((seq) =>\r\n      seq.map((h) => {\r\n        const logits = this.classifier.map((row, i) => {\r\n          let sum = this.bias[i];\r\n          for (let j = 0; j < row.length; j++) sum += row[j] * h[j];\r\n          return sum;\r\n        });\r\n        const max = Math.max(...logits);\r\n        const exp = logits.map((l) => Math.exp(l - max));\r\n        const sum = exp.reduce((a, b) => a + b, 0);\r\n        return exp.map((e) => e / sum);\r\n      })\r\n    );\r\n  }\r\n}\r\n\r\nclass BERTForQuestionAnswering {\r\n  private bert: EncoderOnlyTransformer;\r\n  private startProjection: number[];  // (dModel)\r\n  private endProjection: number[];    // (dModel)\r\n\r\n  constructor(bert: EncoderOnlyTransformer) {\r\n    this.bert = bert;\r\n    this.startProjection = Array.from({ length: bert['dModel'] }, () =>\r\n      (Math.random() - 0.5) * 0.01\r\n    );\r\n    this.endProjection = Array.from({ length: bert['dModel'] }, () =>\r\n      (Math.random() - 0.5) * 0.01\r\n    );\r\n  }\r\n\r\n  forward(inputIds: number[][]): {\r\n    startLogits: number[][];\r\n    endLogits: number[][];\r\n  } {\r\n    const hiddenStates = this.bert.forward(inputIds);\r\n\r\n    const startLogits = hiddenStates.map((seq) =>\r\n      seq.map((h) => h.reduce((s, v, i) => s + v * this.startProjection[i], 0))\r\n    );\r\n\r\n    const endLogits = hiddenStates.map((seq) =>\r\n      seq.map((h) => h.reduce((s, v, i) => s + v * this.endProjection[i], 0))\r\n    );\r\n\r\n    return { startLogits, endLogits };\r\n  }\r\n\r\n  predict(\r\n    inputIds: number[][],\r\n    maxAnswerLen = 30\r\n  ): Array<{ start: number; end: number; score: number }> {\r\n    const { startLogits, endLogits } = this.forward(inputIds);\r\n    const results: Array<{ start: number; end: number; score: number }> = [];\r\n\r\n    for (let b = 0; b < startLogits.length; b++) {\r\n      let bestScore = -Infinity;\r\n      let bestStart = 0;\r\n      let bestEnd = 0;\r\n\r\n      for (let i = 0; i < startLogits[b].length; i++) {\r\n        for (let j = i; j < Math.min(i + maxAnswerLen, endLogits[b].length); j++) {\r\n          const score = startLogits[b][i] + endLogits[b][j];\r\n          if (score > bestScore) {\r\n            bestScore = score;\r\n            bestStart = i;\r\n            bestEnd = j;\r\n          }\r\n        }\r\n      }\r\n      results.push({ start: bestStart, end: bestEnd, score: bestScore });\r\n    }\r\n    return results;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fine-tuning learning rates"
      }), ": 2e-5 to 5e-5 with linear warmup (first 10% of steps) and linear decay. BERT fine-tuning typically requires 2-10 epochs. The learning rate is much smaller than pre-training (5e-4) because pre-trained weights are already near-optimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-glue-benchmark",
      children: "6.5 GLUE Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The General Language Understanding Evaluation (GLUE) benchmark consists of 9 tasks covering diverse NLP phenomena."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface GLUETask {\r\n  name: string;\r\n  type: \"classification\" | \"regression\" | \"similarity\";\r\n  numLabels: number;\r\n  metric: string;\r\n  description: string;\r\n}\r\n\r\nconst GLUE_TASKS: GLUETask[] = [\r\n  { name: \"CoLA\", type: \"classification\", numLabels: 2, metric: \"MCC\",\r\n    description: \"Acceptability: is this sentence grammatically correct?\" },\r\n  { name: \"SST-2\", type: \"classification\", numLabels: 2, metric: \"Accuracy\",\r\n    description: \"Sentiment: positive or negative movie review?\" },\r\n  { name: \"MRPC\", type: \"classification\", numLabels: 2, metric: \"F1/Accuracy\",\r\n    description: \"Paraphrase: are these two sentences semantically equivalent?\" },\r\n  { name: \"STS-B\", type: \"regression\", numLabels: 1, metric: \"Pearson/Spearman\",\r\n    description: \"Similarity: rate similarity from 0 to 5.\" },\r\n  { name: \"QQP\", type: \"classification\", numLabels: 2, metric: \"F1/Accuracy\",\r\n    description: \"Quora Question Pairs: are questions duplicates?\" },\r\n  { name: \"MNLI\", type: \"classification\", numLabels: 3, metric: \"Accuracy\",\r\n    description: \"NLI: entailment, contradiction, or neutral?\" },\r\n  { name: \"QNLI\", type: \"classification\", numLabels: 2, metric: \"Accuracy\",\r\n    description: \"QA/NLI: does the sentence contain the answer?\" },\r\n  { name: \"RTE\", type: \"classification\", numLabels: 2, metric: \"Accuracy\",\r\n    description: \"Recognizing Textual Entailment.\" },\r\n  { name: \"WNLI\", type: \"classification\", numLabels: 2, metric: \"Accuracy\",\r\n    description: \"Winograd NLI: pronoun resolution.\" },\r\n];\r\n\r\nclass GLUEEvaluator {\r\n  evaluate(\r\n    model: BERTForClassification,\r\n    taskName: string,\r\n    inputs: number[][],\r\n    labels: number[]\r\n  ): number {\r\n    const predictions = model.forward(inputs);\r\n    const predLabels = predictions.map(\r\n      (probs) => probs.indexOf(Math.max(...probs))\r\n    );\r\n\r\n    switch (taskName) {\r\n      case \"CoLA\": {\r\n        // Matthews Correlation Coefficient\r\n        const tp = predLabels.filter((p, i) => p === 1 && labels[i] === 1).length;\r\n        const tn = predLabels.filter((p, i) => p === 0 && labels[i] === 0).length;\r\n        const fp = predLabels.filter((p, i) => p === 1 && labels[i] === 0).length;\r\n        const fn = predLabels.filter((p, i) => p === 0 && labels[i] === 1).length;\r\n        const denom = Math.sqrt((tp + fp) * (tp + fn) * (tn + fp) * (tn + fn));\r\n        return denom === 0 ? 0 : (tp * tn - fp * fn) / denom;\r\n      }\r\n      case \"SST-2\":\r\n      case \"QNLI\":\r\n      case \"RTE\": {\r\n        return predLabels.filter((p, i) => p === labels[i]).length / labels.length;\r\n      }\r\n      case \"MRPC\":\r\n      case \"QQP\": {\r\n        const correct = predLabels.filter((p, i) => p === labels[i]).length;\r\n        return correct / labels.length;\r\n      }\r\n      default:\r\n        return 0;\r\n    }\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GLUE scores improved dramatically with BERT: BERT-base achieved 80.5 average (compared to 72.8 for ELMo + BiLSTM). SuperGLUE (more difficult tasks) replaced GLUE as the standard benchmark."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-bert-variants",
      children: "6.6 BERT Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Several important variants improve upon BERT in different ways."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// RoBERTa: Robustly Optimized BERT\r\n// Key changes vs BERT:\r\n// - Removed NSP loss\r\n// - Dynamic masking (mask differently each epoch)\r\n// - Larger batch sizes (8K vs 256)\r\n// - More data (160GB vs 16GB)\r\n// - Longer training (500K vs 100K steps)\r\n// Result: matches or exceeds BERT on all GLUE tasks\r\nclass RoBERTaConfig extends BERTPreTrainingConfig {\r\n  dynamicMasking = true;\r\n  removeNSP = true;\r\n  batchSize = 8000;\r\n  trainingSteps = 500000;\r\n}\r\n\r\n// ALBERT: A Lite BERT\r\n// Key changes:\r\n// - Factorized embedding: embedding parameters = V * E + E * H (instead of V * H)\r\n//   where E=128, H=768. For BERT vocab 30K: 30K*128 + 128*768 = 3.9M + 98K ≈ 4M\r\n//   vs 30K*768 = 23M. Saves ~18M parameters.\r\n// - Cross-layer parameter sharing: all 12 layers share same attention + FFN weights\r\n//   This saves ~90% of layer parameters.\r\n// - Inter-sentence coherence loss (SOP) instead of NSP\r\n// ALBERT-xxlarge has 12M parameters but 24 layers (shared), matching BERT-large performance\r\nclass ALBERTConfig extends BERTPreTrainingConfig {\r\n  embeddingSize = 128; // factorized embedding\r\n  sharedParameters = true; // cross-layer sharing\r\n  lossType: \"SOP\" = \"SOP\"; // sentence order prediction\r\n}\r\n\r\n// DistilBERT: Distilled BERT\r\n// Uses knowledge distillation to train a smaller (40% smaller, 60% faster) model\r\n// - Student: 6 layers (vs BERT-base 12)\r\n// - Loss: distillation loss (soft targets) + MLM loss + cosine embedding loss\r\n// Retains 97% of BERT performance on GLUE\r\nclass DistillationTrainer {\r\n  private teacher: EncoderOnlyTransformer; // BERT-base\r\n  private student: EncoderOnlyTransformer; // DistilBERT (6 layers)\r\n  private temperature: number;\r\n  private alpha: number; // distillation weight\r\n\r\n  constructor(\r\n    teacher: EncoderOnlyTransformer,\r\n    student: EncoderOnlyTransformer,\r\n    temperature = 2.0,\r\n    alpha = 0.5\r\n  ) {\r\n    this.teacher = teacher;\r\n    this.student = student;\r\n    this.temperature = temperature;\r\n    this.alpha = alpha;\r\n  }\r\n\r\n  trainStep(\r\n    inputIds: number[][],\r\n    attentionMask: number[][]\r\n  ): number {\r\n    // Teacher forward (no gradients)\r\n    const teacherOut = this.teacher.forward(inputIds);\r\n    const teacherLogits = teacherOut.map((seq) =>\r\n      seq.map((h) => h.map((v) => v / this.temperature))\r\n    );\r\n\r\n    // Student forward\r\n    const studentOut = this.student.forward(inputIds);\r\n    const studentLogits = studentOut.map((seq) =>\r\n      seq.map((h) => h.map((v) => v / this.temperature))\r\n    );\r\n\r\n    // Distillation loss: KL divergence between softened probabilities\r\n    let distillLoss = 0;\r\n    for (let b = 0; b < inputIds.length; b++) {\r\n      for (let t = 0; t < inputIds[b].length; t++) {\r\n        const tSoftmax = this.softmax(teacherLogits[b][t]);\r\n        const sSoftmax = this.softmax(studentLogits[b][t]);\r\n        for (let v = 0; v < tSoftmax.length; v++) {\r\n          distillLoss += tSoftmax[v] * Math.log((tSoftmax[v] + 1e-8) / (sSoftmax[v] + 1e-8));\r\n        }\r\n      }\r\n    }\r\n\r\n    // Combined loss\r\n    const mlmLoss = 0; // computed separately from MLM head\r\n    return this.alpha * distillLoss + (1 - this.alpha) * mlmLoss;\r\n  }\r\n\r\n  private softmax(logits: number[]): number[] {\r\n    const max = Math.max(...logits);\r\n    const exp = logits.map((l) => Math.exp(l - max));\r\n    const sum = exp.reduce((a, b) => a + b, 0);\r\n    return exp.map((e) => e / sum);\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Other notable variants"
      }), ": SpanBERT (masks contiguous spans for span prediction tasks), ELECTRA (replaces tokens with generator/discriminator), BART (denoising autoencoder), DeBERTa (disentangled attention, relative position)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BERT introduced bidirectional pre-training using masked language modeling and next-sentence prediction. The masked LM objective randomly masks tokens and trains the model to predict them from full bidirectional context. Next-sentence prediction learns relationships between sentence pairs for.\r\ndownstream tasks like question answering and natural language inference. Fine-tuning adapts the pre-trained BERT model to specific tasks by adding task-specific heads and.\r\ntraining on labeled data. Variants like RoBERTa optimize pre-training with dynamic masking and larger batches, ALBERT reduces parameters through factorized embeddings and.\r\ncross-layer sharing, and DistilBERT uses knowledge distillation for 40% smaller but 95% effective models. The GLUE benchmark provides a standardized evaluation across diverse NLU tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT pre-training uses MLM (15% masking, 80/10/10 strategy) + NSP (removed in RoBERTa)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tuning adds a lightweight task head and updates all parameters with a low learning rate (2e-5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GLUE benchmark evaluates 9 tasks; BERT-base scores 80.5 average"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RoBERTa optimizes BERT's training (dynamic masking, larger batches, more data, no NSP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ALBERT reduces parameters 18— via factorized embeddings and cross-layer sharing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DistilBERT is 40% smaller and 60% faster while retaining 97% of performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge distillation transfers knowledge from a large teacher model to a smaller student model"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[CLS]"
        }), " token for classification, token-level heads for NER, and span prediction for QA"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does BERT's masked language model work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BERT masks 15% of tokens in each input sequence. Of these masked tokens: 80% are replaced with the [MASK] token, 10% are replaced with a random token,.\nand 10% are left unchanged. The model must predict the original token at each masked position using the final hidden state at that position. A feed-forward classifier (dense + GELU + LayerNorm + projection to vocab) is applied to the.\nhidden state of each masked position. The loss is cross-entropy between predicted and.\noriginal tokens. The 80/10/10 strategy prevents mismatch between pre-training (where [MASK] appears) and fine-tuning (where it never appears). If all masked tokens were [MASK],.\nthe model would not learn to handle unmasked text during fine-tuning."
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
      "data-qid": "nlp06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is Next Sentence Prediction and why was it removed in RoBERTa?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NSP is a binary classification task: given two sentences A and B, predict whether B is the actual next sentence after A (50% of pairs) or.\na random sentence (50% of pairs). The [CLS] token's hidden state is fed to a binary classifier. NSP was designed to help BERT understand.\nsentence relationships for tasks like QA and NLI. RoBERTa found that NSP is not essential: (1) Training without NSP matched or.\nexceeded BERT on all GLUE tasks. (2) The single-sentence approach (always one contiguous document) performed better. (3) NSP's random negatives are too easy — the model learns topic mismatch rather than discourse coherence. ALBERT replaced NSP with SOP (Sentence Order Prediction),.\nwhich requires actual discourse understanding."
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
      "data-qid": "nlp06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you fine-tune BERT for text classification?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Steps: (1) Add a classification head: a linear layer that takes the [CLS] token's final hidden state and projects to num_classes. (2) Format input as [CLS] text [SEP] with padding to max_seq_len. (3) Use token_type_ids = 0 for.\nsingle sentence, 0/1 for sentence pairs. (4) Initialize BERT with pre-trained weights and the classification head randomly. (5) Fine-tune all parameters end-to-end with learning rate 2e-5 to 5e-5 (AdamW). (6) Use linear warmup (10% of steps) followed by linear decay. (7) Train for.\n2-10 epochs with early stopping based on validation loss. (8) Batch size: 16-32 for BERT-base on a single GPU. The classification head is tiny (num_classes — 768 parameters) compared to BERT's 110M,.\nso fine-tuning is fast (1-2 hours on a single GPU)."
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
      "data-qid": "nlp06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does BERT handle question answering (SQuAD)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For extractive QA (SQuAD), BERT predicts a span in the context that answers the question. The input is [CLS] question [SEP] context [SEP]. Two additional vectors (start and.\nend projection) are learned on top of the hidden states. For each token position i, the start score = S^T * h_i and.\nend score = E^T * h_i, where S and E are learned vectors of size d_model. The answer span is the pair (i,.\nj) with i ≤ j and maximum S^T·h_i + E^T·h_j. Constraints: i must be in the context (not question), and j - i + 1 ≤ max_answer_length (typically 30). BERT-base achieves F1=88.5 on SQuAD 1.1 (EM=81.0). For.\nSQuAD 2.0 with unanswerable questions, a no-answer class is added."
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
      "data-qid": "nlp06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the GLUE benchmark and what tasks does it include?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GLUE (General Language Understanding Evaluation) is a collection of 9 NLP tasks for evaluating general-purpose language understanding models. Tasks: CoLA (grammatical acceptability),.\nSST-2 (sentiment), MRPC (paraphrase detection), STS-B (text similarity regression), QQP (duplicate question detection), MNLI (natural language inference, 3-way), QNLI (question-answering NLI),.\nRTE (textual entailment), WNLI (Winograd schema). The overall score is the average of all task metrics. BERT-base achieved 80.5, RoBERTa 88.5,.\nand human baseline is 87.1. SuperGLUE (2019) replaced GLUE with 8 harder tasks after BERT saturated GLUE scores."
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
      "data-qid": "nlp06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does ALBERT reduce parameters while maintaining performance?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ALBERT uses two parameter reduction techniques: (1) Factorized embedding parameterization: decomposes the vocabulary embedding matrix into two smaller matrices (V — E) and.\n(E — H) instead of (V — H). With V=30K, E=128, H=768, embedding parameters go from 23M to 3.9M. (2) Cross-layer parameter sharing: all 12 or.\n24 layers share the same attention parameters and FFN parameters. This reduces layer parameters by ~90% (from 12—14M=168M to 14M total). ALBERT-xxlarge has 223M parameters vs BERT-large's 340M,.\nbut achieves comparable or better GLUE scores. ALBERT also uses SOP (Sentence Order Prediction) instead of NSP, which requires true discourse understanding."
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
      "data-qid": "nlp06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is knowledge distillation and how is it applied to BERT?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Knowledge distillation trains a smaller student model to mimic a larger teacher model. For DistilBERT: (1) Architecture: student has 6 layers (half of BERT-base's 12),.\ninitialized from every other layer of the teacher. (2) Loss = α * distillation_loss + β * MLM_loss + γ * cosine_embedding_loss. Distillation loss uses the teacher's softened probabilities (temperature T=2.0) as soft targets. (3) Training uses the same data.\nas BERT (Wikipedia + BookCorpus). DistilBERT is 40% smaller (66M vs 110M),.\n60% faster, and retains 97% of BERT's GLUE performance. TinyBERT and MobileBERT push this further, achieving 96% performance with 7.5— smaller models."
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
      "data-qid": "nlp06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is the difference between BERT and RoBERTa?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RoBERTa (Robustly Optimized BERT Approach) makes several training optimizations: (1) Removes NSP loss — trains on single contiguous documents. (2) Dynamic masking — masks tokens differently each epoch (BERT uses static masking once). (3) Larger batch sizes — 8K vs.\nBERT's 256. (4) More training data — 160GB (BookCorpus+Wikipedia+CommonCrawl+News) vs BERT's 16GB. (5) Longer training — 500K steps vs BERT's 100K. (6) Larger learning rate with different warmup schedule. RoBERTa outperforms BERT on all GLUE tasks (88.5 vs 80.5 average)..\nThe key insight: BERT was significantly undertrained;.\nmost improvements come from longer training with more data, not architectural changes."
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
      "data-qid": "nlp06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle long sequences (>512 tokens) with BERT?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BERT's maximum sequence length is 512 tokens (limited by O(n^2) self-attention). Strategies for longer texts: (1) Truncation: keep the first 512 tokens (most important for.\nclassification). (2) Hierarchical: split into 512-token chunks, encode each separately, aggregate with pooling or an additional transformer layer. (3) Longformer/BigBird: replace full attention with sparse attention patterns (sliding window + global tokens). Longformer handles 4096 tokens. (4) Reformer: uses locality-sensitive hashing for.\nO(n log n) attention. (5) Sliding window: use overlapping windows and a secondary model to combine predictions. For most classification tasks,.\ntruncating to 512 tokens loses <1% accuracy because important information is typically at the start."
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
      "data-qid": "nlp06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What learning rate schedule is recommended for BERT fine-tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Recommended: AdamW optimizer (ε=1e-8, β1=0.9, β2=0.999) with learning rate 2e-5 to 5e-5. Use a linear warmup for the first 10% of training steps (increasing LR from 0 to the max),.\nthen linear decay to 0. Weight decay: 0.01 (applied to all non-bias and non-norm parameters). The learning rate for fine-tuning is 10-25— lower than pre-training (5e-4) because the pre-trained weights are already near-optimal. Higher LR during fine-tuning can cause catastrophic forgetting. For.\nbatch size: 16 or 32 works well. For epochs: 2-10 depending on dataset size (small datasets need more epochs, large datasets need fewer). Use the dev set for.\nearly stopping."
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
      children: "Q1: What percentage of tokens are masked in BERT pre-training?\r\na) 5%\r\nb) 10%\r\nc) 15%\r\nd) 20%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 15%"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BERT masks 15% of tokens. Of these, 80% are replaced with [MASK], 10% with random tokens, and 10% are left unchanged."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q2: What is the typical learning rate for BERT fine-tuning?\r\na) 1e-3\r\nb) 2e-5\r\nc) 5e-4\r\nd) 1e-2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 2e-5"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Fine-tuning BERT uses a much lower learning rate (2e-5 to 5e-5) vs pre-training (5e-4) to avoid catastrophic forgetting of pre-trained knowledge."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q3: Which BERT variant uses factorized embedding parameterization?\r\na) RoBERTa\r\nb) ALBERT\r\nc) DistilBERT\r\nd) SpanBERT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) ALBERT"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ALBERT decomposes the embedding matrix into V—E and E—H (with E << H), reducing embedding parameters from 23M to 4M."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q4: What does DistilBERT use as its training loss?\r\na) MLM only\r\nb) Distillation loss only\r\nc) Distillation + MLM + cosine embedding loss\r\nd) NSP + MLM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Distillation + MLM + cosine embedding loss"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "DistilBERT combines distillation loss (soft targets from teacher), masked language modeling loss, and cosine embedding loss (for hidden state alignment)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q5: How many transformer layers does DistilBERT have?\r\na) 3\r\nb) 6\r\nc) 8\r\nd) 12"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp06-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 6"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "DistilBERT has 6 layers (half of BERT-base's 12), initialized from every other layer of the teacher."
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
        }), " — Write a script to prepare data for BERT pre-training: tokenize text, create masked LM instances using the 80/10/10 strategy, and create NSP pairs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Fine-tune BERT-base on SST-2 for sentiment classification. Report validation accuracy after 3 epochs using learning rates 2e-5, 3e-5, and 5e-5."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement span extraction for SQuAD-style QA on top of BERT. Evaluate using Exact Match (EM) and F1 scores on the SQuAD 2.0 dev set."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Compare the GLUE scores of BERT-base, DistilBERT, and ALBERT-base. Create a table showing performance vs inference time and model size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement knowledge distillation: train a 3-layer student BERT to mimic a 12-layer teacher. Vary the temperature (1.0, 2.0, 5.0) and alpha (0.3, 0.5, 0.7). Report which configuration best preserves teacher performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture",
          children: "Transformer Architecture"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [Hugging Face Ecosystem](07-hugging-face-ecos"]
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
            children: "Explain the core idea of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter-Tuning — Masked LM, NSP, GLUE, Model Variants."
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
            children: "Describe a production bug caused by misunderstanding this technique-Tuning — Masked LM, NSP, GLUE, Model Variants. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique-Tuning — Masked LM, NSP, GLUE, Model Variants from 10 users to 10 million?"
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
            children: "Compare BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this-Tuning — Masked LM, NSP, GLUE, Model Variants."
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
            children: "How does BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique-Tuning — Masked LM, NSP, GLUE, Model Variants run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique-Tuning — Masked LM, NSP, GLUE, Model Variants that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in production today?"
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
        }), " BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Bert And Fine Tuning is ___. — Answer: O(n^2) self-attention, O(n) feed-forward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Bert And Fine Tuning is ___. — Answer: long sequences, padding, attention overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique-Tuning — Masked LM, NSP, GLUE, Model Variants is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique-Tuning — Masked LM, NSP, GLUE, Model Variants on an empty input?"
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
            children: "Complete Medium exercises, explain BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants to someone else"
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
        children: "Always write a one-line example of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 10 — builds the foundation for 06 Bert And Fine Tuning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Bert And Fine Tuning with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Bert And Fine Tuning fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Bert And Fine Tuning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Bert And Fine Tuning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Bert And Fine Tuning?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Bert And Fine Tuning?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Bert And Fine Tuning asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Bert And Fine Tuning?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants."
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
        children: "BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "06 Bert And Fine Tuning is like a GPS navigation system"
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
          }), " — this chapter contributes the BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-06bertandfinetuning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-06bertandfinetuning-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-06bertandfinetuning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-06bertandfinetuning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-06bertandfinetuning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants"
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
        }), ": Add structured logging at each stage of the 06 Bert And Fine Tuning pipeline to identify exactly where the failure occurs."]
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
        children: "Explain BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants."
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
        children: "Tell me about a time you debugged a BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_bert_and_fine_tuning(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Bert And Fine Tuning.\r\n\r\n    Key concepts: attention, positional encoding, feed-forward, layer norm\r\n    Complexity: O(n^2) self-attention, O(n) feed-forward\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Bert And Fine Tuning here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/07-hugging-face-ecosystem",
        children: "Hugging Face Ecosystem — Transformers, Pipelines, Datasets, Tokenizers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants depends on input size and distribution — always benchmark for your own data."
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