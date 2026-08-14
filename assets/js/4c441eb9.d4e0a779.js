"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74457],{

/***/ 19247
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_02_word_embeddings_md_4c4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-02-word-embeddings-md-4c4.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_02_word_embeddings_md_4c4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/02-word-embeddings","title":"Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/02-word-embeddings.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/02-word-embeddings","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/02-word-embeddings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":135,"frontMatter":{"id":"02-word-embeddings","slug":"/ai-engineering-placement/10-nlp-transformers/02-word-embeddings","title":"Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization","sidebar_label":"Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization","sidebar_position":135},"sidebar":"placementSidebar","previous":{"title":"Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing"},"next":{"title":"Sequence Models — RNN, LSTM, GRU, Bidirectional, Encoder-Decoder","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/03-sequence-models"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/02-word-embeddings.md


const frontMatter = {
	id: '02-word-embeddings',
	slug: '/ai-engineering-placement/10-nlp-transformers/02-word-embeddings',
	title: 'Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization',
	sidebar_label: 'Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization',
	sidebar_position: 135
};
const contentTitle = 'Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization';

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
  "value": "2.1 Distributional Hypothesis",
  "id": "21-distributional-hypothesis",
  "level": 2
}, {
  "value": "2.2 Word2Vec CBOW",
  "id": "22-word2vec-cbow",
  "level": 2
}, {
  "value": "2.3 Word2Vec Skip-gram",
  "id": "23-word2vec-skip-gram",
  "level": 2
}, {
  "value": "2.4 GloVe",
  "id": "24-glove",
  "level": 2
}, {
  "value": "2.5 FastText",
  "id": "25-fasttext",
  "level": 2
}, {
  "value": "2.6 Embedding Visualization",
  "id": "26-embedding-visualization",
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
        id: "word-embeddings--word2vec-glove-fasttext-subword-tokenization",
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
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
            children: "Understand the difference between sparse (one-hot, TF-IDF) and dense (word embedding) representations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement CBOW and Skip-gram architectures for Word2Vec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain GloVe's co-occurrence matrix factorization approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply FastText for subword-level embeddings and OOV handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualize embeddings using PCA and t-SNE for exploratory analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle OOV words with subword n-gram embeddings and post-hoc approximation"
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
      children: "Understanding word embeddings is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how word embeddings works in practice."
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributional Hypothesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Words with similar contexts have similar meanings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word2Vec CBOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict target from context using average embedding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word2Vec Skip-gram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict context from target, better for rare words"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GloVe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global matrix factorization of word co-occurrence counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character n-gram embeddings for rich morphology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding Visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA, t-SNE, analogies, nearest neighbors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Corpus] --> B{Embedding Method}\n    B -->|Word2Vec| C[CBOW / Skip-gram]\n    B -->|GloVe| D[Co-occurrence Matrix]\n    B -->|FastText| E[Char N-grams + Word]\n    C --> F[Dense Vectors d=100-300]\n    D --> F\n    E --> F\n    F --> G[Visualization: PCA/t-SNE]\n    F --> H[Downstream Tasks]\n    H --> I[Classification / NER / QA]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-distributional-hypothesis",
      children: "2.1 Distributional Hypothesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The distributional hypothesis states that words appearing in similar contexts have similar meanings. Word embeddings operationalize this by learning low-dimensional vectors where semantic similarity corresponds to cosine similarity."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EmbeddingVector {\n  word: string;\n  values: number[];\n}\n\nclass CosineSimilarity {\n  static compute(a: number[], b: number[]): number {\n    if (a.length !== b.length) throw new Error(\"Dimension mismatch\");\n    let dot = 0, normA = 0, normB = 0;\n    for (let i = 0; i < a.length; i++) {\n      dot += a[i] * b[i];\n      normA += a[i] * a[i];\n      normB += b[i] * b[i];\n    }\n    const denom = Math.sqrt(normA) * Math.sqrt(normB);\n    return denom === 0 ? 0 : dot / denom;\n  }\n\n  static nearestNeighbors(\n    target: number[],\n    embeddings: Map<string, number[]>,\n    k = 5\n  ): Array<{ word: string; score: number }> {\n    const results: Array<{ word: string; score: number }> = [];\n    for (const [word, vec] of embeddings) {\n      const score = this.compute(target, vec);\n      results.push({ word, score });\n    }\n    results.sort((a, b) => b.score - a.score);\n    return results.slice(0, k);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dense embeddings (50-300 dimensions) solve the sparsity and semantic gap problems of one-hot encodings. One-hot vectors of size 50K have no notion of similarity; embeddings do."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-word2vec-cbow",
      children: "2.2 Word2Vec CBOW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continuous Bag-of-Words (CBOW) predicts a target word given its surrounding context words. The context embeddings are averaged, and the model learns to maximize the probability of the true target."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CBOWModel {\n  private embeddingDim: number;\n  private vocabSize: number;\n  private windowSize: number;\n  private W1: number[][] = [];  // Embedding matrix (vocabSize x d)\n  private W2: number[][] = [];  // Output matrix (d x vocabSize)\n  private vocab: Map<string, number> = new Map();\n  private idToToken: Map<number, string> = new Map();\n\n  constructor(vocabSize: number, embeddingDim = 100, windowSize = 2) {\n    this.vocabSize = vocabSize;\n    this.embeddingDim = embeddingDim;\n    this.windowSize = windowSize;\n    this.initWeights();\n  }\n\n  private initWeights(): void {\n    const scale = Math.sqrt(2 / (this.vocabSize + this.embeddingDim));\n    for (let i = 0; i < this.vocabSize; i++) {\n      this.W1[i] = Array.from({ length: this.embeddingDim }, () =>\n        (Math.random() * 2 - 1) * scale\n      );\n    }\n    for (let i = 0; i < this.embeddingDim; i++) {\n      this.W2[i] = Array.from({ length: this.vocabSize }, () =>\n        (Math.random() * 2 - 1) * scale\n      );\n    }\n  }\n\n  buildVocab(corpus: string[], minFreq = 2): void {\n    const counts = new Map<string, number>();\n    for (const doc of corpus) {\n      const tokens = doc.toLowerCase().split(/\\s+/);\n      for (const t of tokens) {\n        counts.set(t, (counts.get(t) || 0) + 1);\n      }\n    }\n    let id = 0;\n    for (const [token, count] of counts) {\n      if (count >= minFreq) {\n        this.vocab.set(token, id);\n        this.idToToken.set(id, token);\n        id++;\n      }\n    }\n  }\n\n  private getContextWindows(\n    tokens: string[]\n  ): Array<{ context: number[]; target: number }> {\n    const windows: Array<{ context: number[]; target: number }> = [];\n    const ids = tokens\n      .map((t) => this.vocab.get(t))\n      .filter((id) => id !== undefined) as number[];\n    for (let i = 0; i < ids.length; i++) {\n      const context: number[] = [];\n      for (let j = i - this.windowSize; j <= i + this.windowSize; j++) {\n        if (j >= 0 && j < ids.length && j !== i) {\n          context.push(ids[j]);\n        }\n      }\n      if (context.length > 0) {\n        windows.push({ context, target: ids[i] });\n      }\n    }\n    return windows;\n  }\n\n  forward(context: number[]): number[] {\n    const hidden = new Array(this.embeddingDim).fill(0);\n    for (const ctxId of context) {\n      for (let j = 0; j < this.embeddingDim; j++) {\n        hidden[j] += this.W1[ctxId][j];\n      }\n    }\n    // Average\n    for (let j = 0; j < this.embeddingDim; j++) {\n      hidden[j] /= context.length;\n    }\n    // Output layer\n    const scores = new Array(this.vocabSize).fill(0);\n    for (let j = 0; j < this.vocabSize; j++) {\n      for (let k = 0; k < this.embeddingDim; k++) {\n        scores[j] += hidden[k] * this.W2[k][j];\n      }\n    }\n    // Softmax\n    const max = Math.max(...scores);\n    const expScores = scores.map((s) => Math.exp(s - max));\n    const sumExp = expScores.reduce((a, b) => a + b, 0);\n    return expScores.map((s) => s / sumExp);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CBOW is faster to train than Skip-gram and works well for frequent words. However, it treats the context as a bag of words, ignoring word order within the window."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-word2vec-skip-gram",
      children: "2.3 Word2Vec Skip-gram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skip-gram inverts CBOW: given a target word, predict surrounding context words. Each (target, context) pair is treated as a separate training example."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SkipGramModel {\n  private embeddingDim: number;\n  private vocabSize: number;\n  private learningRate: number;\n  private embeddings: number[][] = [];\n  private outputVectors: number[][] = [];\n  private vocab: Map<string, number> = new Map();\n\n  constructor(vocabSize: number, embeddingDim = 100, learningRate = 0.01) {\n    this.vocabSize = vocabSize;\n    this.embeddingDim = embeddingDim;\n    this.learningRate = learningRate;\n    this.initWeights();\n  }\n\n  private initWeights(): void {\n    for (let i = 0; i < this.vocabSize; i++) {\n      this.embeddings[i] = Array.from({ length: this.embeddingDim }, () =>\n        (Math.random() - 0.5) / this.embeddingDim\n      );\n    }\n    this.outputVectors = this.embeddings.map((e) => [...e]);\n  }\n\n  // Negative sampling loss approximation\n  trainPair(targetId: number, contextId: number, negSamples = 5): void {\n    const h = this.embeddings[targetId];\n    // Positive sample\n    const vc = this.outputVectors[contextId];\n    const dot = h.reduce((s, v, i) => s + v * vc[i], 0);\n    const sig = 1 / (1 + Math.exp(-dot));\n    const grad = (sig - 1) * this.learningRate;\n    for (let i = 0; i < this.embeddingDim; i++) {\n      h[i] -= grad * vc[i];\n      vc[i] -= grad * h[i];\n    }\n    // Negative samples\n    for (let n = 0; n < negSamples; n++) {\n      const negId = Math.floor(Math.random() * this.vocabSize);\n      if (negId === contextId) continue;\n      const vn = this.outputVectors[negId];\n      const negDot = h.reduce((s, v, i) => s + v * vn[i], 0);\n      const negSig = 1 / (1 + Math.exp(-negDot));\n      const negGrad = negSig * this.learningRate;\n      for (let i = 0; i < this.embeddingDim; i++) {\n        h[i] -= negGrad * vn[i];\n        vn[i] -= negGrad * h[i];\n      }\n    }\n  }\n\n  getEmbedding(word: string): number[] | null {\n    const id = this.vocab.get(word);\n    return id !== undefined ? this.embeddings[id] : null;\n  }\n\n  // Classic analogy: king - man + woman = queen\n  analogies(a: string, b: string, c: string, k = 5): Array<{ word: string; score: number }> {\n    const va = this.getEmbedding(a);\n    const vb = this.getEmbedding(b);\n    const vc = this.getEmbedding(c);\n    if (!va || !vb || !vc) return [];\n    const target = va.map((v, i) => v - vb[i] + vc[i]);\n    const results: Array<{ word: string; score: number }> = [];\n    for (const [word, id] of this.vocab) {\n      if (word === a || word === b || word === c) continue;\n      const score = CosineSimilarity.compute(target, this.embeddings[id]);\n      results.push({ word, score });\n    }\n    results.sort((a, b) => b.score - a.score);\n    return results.slice(0, k);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skip-gram works better for rare words because each training pair is treated independently, giving more weight to infrequent co-occurrences. Training time is O(window_size — vocab_size), making negative sampling essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-glove",
      children: "2.4 GloVe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GloVe (Global Vectors) factorizes the word co-occurrence count matrix. Unlike Word2Vec's local windows, GloVe uses global corpus statistics. The loss function is: J = sum f(X_ij) (w_i^T w_j + b_i + b_j - log X_ij)^2 where X_ij is the co-occurrence count and f is a weighting function."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GloVeModel {\n  private embeddingDim: number;\n  private vocabSize: number;\n  private cooccurrence: Map<string, Map<string, number>> = new Map();\n  private wordVectors: Map<string, number[]> = new Map();\n  private biasVectors: Map<string, number> = new Map();\n  private vocab: string[] = [];\n\n  constructor(embeddingDim = 100) {\n    this.embeddingDim = embeddingDim;\n  }\n\n  buildCooccurrence(corpus: string[], windowSize = 10): void {\n    const wordCounts = new Map<string, number>();\n    for (const doc of corpus) {\n      const tokens = doc.toLowerCase().split(/\\s+/);\n      for (const t of tokens) {\n        wordCounts.set(t, (wordCounts.get(t) || 0) + 1);\n      }\n      for (let i = 0; i < tokens.length; i++) {\n        const start = Math.max(0, i - windowSize);\n        const end = Math.min(tokens.length - 1, i + windowSize);\n        for (let j = start; j <= end; j++) {\n          if (i === j) continue;\n          const dist = Math.abs(i - j);\n          const weight = 1 / dist;\n          if (!this.cooccurrence.has(tokens[i])) {\n            this.cooccurrence.set(tokens[i], new Map());\n          }\n          const inner = this.cooccurrence.get(tokens[i])!;\n          inner.set(tokens[j], (inner.get(tokens[j]) || 0) + weight);\n        }\n      }\n    }\n    this.vocab = [...wordCounts.keys()].filter(\n      (w) => (wordCounts.get(w) || 0) >= 5\n    );\n  }\n\n  train(epochs = 50, learningRate = 0.05): void {\n    // Initialize vectors\n    for (const word of this.vocab) {\n      this.wordVectors.set(\n        word,\n        Array.from({ length: this.embeddingDim }, () =>\n          (Math.random() - 0.5) / this.embeddingDim\n        )\n      );\n      this.biasVectors.set(word, 0);\n    }\n\n    const xMax = 100;\n    const alpha = 0.75;\n\n    for (let epoch = 0; epoch < epochs; epoch++) {\n      for (const [wordI, contexts] of this.cooccurrence) {\n        if (!this.wordVectors.has(wordI)) continue;\n        for (const [wordJ, count] of contexts) {\n          if (!this.wordVectors.has(wordJ)) continue;\n          const wi = this.wordVectors.get(wordI)!;\n          const wj = this.wordVectors.get(wordJ)!;\n          const bi = this.biasVectors.get(wordI)!;\n          const bj = this.biasVectors.get(wordJ)!;\n\n          let dot = 0;\n          for (let k = 0; k < this.embeddingDim; k++) diff += wi[k] * wj[k];\n          dot = 0;\n          for (let k = 0; k < this.embeddingDim; k++) dot += wi[k] * wj[k];\n          const diff = dot + bi + bj - Math.log(count);\n\n          // Weighting function\n          const weight = count < xMax ? Math.pow(count / xMax, alpha) : 1;\n          const grad = weight * diff * learningRate;\n\n          for (let k = 0; k < this.embeddingDim; k++) {\n            wi[k] -= grad * wj[k];\n            wj[k] -= grad * wi[k];\n          }\n          let bi_adj = this.biasVectors.get(wordI)! - grad;\n          let bj_adj = this.biasVectors.get(wordJ)! - grad;\n          this.biasVectors.set(wordI, bi_adj);\n          this.biasVectors.set(wordJ, bj_adj);\n        }\n      }\n    }\n  }\n\n  getEmbedding(word: string): number[] | null {\n    const vec = this.wordVectors.get(word);\n    if (!vec) return null;\n    // Return w + w~ (sum of main and context vectors as per GloVe paper)\n    const contextVec = this.wordVectors.get(word + \"_context\");\n    return contextVec\n      ? vec.map((v, i) => (v + contextVec[i]) / 2)\n      : vec;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GloVe embeddings capture both local context and global statistics. On word analogy tasks (king:queen :: man:woman), GloVe often outperforms Word2Vec because global co-occurrence better captures semantic relationships."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-fasttext",
      children: "2.5 FastText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastText (by Facebook AI) represents each word as a bag of character n-grams plus the full word. This captures morphological information and enables OOV embedding construction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FastTextModel {\n  private embeddingDim: number;\n  private minN = 3;\n  private maxN = 6;\n  private ngramVectors: Map<string, number[]> = new Map();\n  private wordVectors: Map<string, number[]> = new Map();\n  private vocab: Set<string> = new Set();\n\n  constructor(embeddingDim = 100) {\n    this.embeddingDim = embeddingDim;\n  }\n\n  private getCharNgrams(word: string): string[] {\n    const padded = \"<\" + word + \">\";\n    const ngrams: string[] = [];\n    for (let n = this.minN; n <= this.maxN; n++) {\n      for (let i = 0; i <= padded.length - n; i++) {\n        ngrams.push(padded.substring(i, i + n));\n      }\n    }\n    return ngrams;\n  }\n\n  private initVector(key: string): number[] {\n    if (!this.ngramVectors.has(key)) {\n      this.ngramVectors.set(\n        key,\n        Array.from({ length: this.embeddingDim }, () =>\n          (Math.random() - 0.5) / this.embeddingDim\n        )\n      );\n    }\n    return this.ngramVectors.get(key)!;\n  }\n\n  train(corpus: string[], epochs = 5, lr = 0.05): void {\n    const tokens = corpus.flatMap((doc) =>\n      doc.toLowerCase().split(/\\s+/)\n    );\n    tokens.forEach((t) => this.vocab.add(t));\n\n    // Initialize n-gram vectors\n    for (const word of this.vocab) {\n      const ngrams = this.getCharNgrams(word);\n      for (const ng of ngrams) {\n        this.initVector(ng);\n      }\n    }\n\n    // Train with Skip-gram\n    for (let epoch = 0; epoch < epochs; epoch++) {\n      for (const word of tokens) {\n        const ngrams = this.getCharNgrams(word);\n        const wordVec = this.getWordVector(word);\n        // Simplified training: update n-gram vectors\n        for (const ng of ngrams) {\n          const ngVec = this.ngramVectors.get(ng)!;\n          for (let i = 0; i < this.embeddingDim; i++) {\n            ngVec[i] -= lr * wordVec[i];\n          }\n        }\n      }\n    }\n  }\n\n  getWordVector(word: string): number[] {\n    const cached = this.wordVectors.get(word);\n    if (cached) return cached;\n    const ngrams = this.getCharNgrams(word);\n    if (ngrams.length === 0) {\n      return new Array(this.embeddingDim).fill(0);\n    }\n    const vec = new Array(this.embeddingDim).fill(0);\n    let count = 0;\n    for (const ng of ngrams) {\n      const ngVec = this.ngramVectors.get(ng);\n      if (ngVec) {\n        for (let i = 0; i < this.embeddingDim; i++) vec[i] += ngVec[i];\n        count++;\n      }\n    }\n    if (count > 0) {\n      for (let i = 0; i < this.embeddingDim; i++) vec[i] /= count;\n    }\n    this.wordVectors.set(word, vec);\n    return vec;\n  }\n\n  // OOV words still get embeddings via n-gram composition\n  getOOVEmbedding(word: string): number[] {\n    return this.getWordVector(word);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastText excels at morphologically rich languages (German, Turkish, Finnish) where OOV is common. Its character n-gram approach (3-6 grams) captures prefixes, suffixes, and roots. In word analogy tasks, FastText outperforms Word2Vec on syntactic analogies (speak:spoke :: eat:ate)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-embedding-visualization",
      children: "2.6 Embedding Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Visualizing high-dimensional embeddings helps debug quality and understand semantic structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PCAReducer {\n  private components: number[][] = [];\n\n  fit(data: number[][], nComponents = 2): void {\n    const n = data.length;\n    const dim = data[0].length;\n    // Center the data\n    const mean = new Array(dim).fill(0);\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < dim; j++) mean[j] += data[i][j];\n    }\n    for (let j = 0; j < dim; j++) mean[j] /= n;\n    const centered = data.map((row) => row.map((v, j) => v - mean[j]));\n\n    // Compute covariance matrix\n    const cov: number[][] = Array.from({ length: dim }, () => new Array(dim).fill(0));\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < dim; j++) {\n        for (let k = 0; k < dim; k++) {\n          cov[j][k] += centered[i][j] * centered[i][k];\n        }\n      }\n    }\n    for (let j = 0; j < dim; j++) {\n      for (let k = 0; k < dim; k++) cov[j][k] /= n - 1;\n    }\n\n    // Power iteration for top components\n    for (let c = 0; c < nComponents; c++) {\n      let vec = Array.from({ length: dim }, () => Math.random());\n      for (let iter = 0; iter < 100; iter++) {\n        const newVec = new Array(dim).fill(0);\n        for (let i = 0; i < dim; i++) {\n          for (let j = 0; j < dim; j++) newVec[i] += cov[i][j] * vec[j];\n        }\n        const norm = Math.sqrt(newVec.reduce((s, v) => s + v * v, 0));\n        for (let i = 0; i < dim; i++) vec[i] = newVec[i] / norm;\n      }\n      this.components.push(vec);\n    }\n  }\n\n  transform(data: number[][]): number[][] {\n    return data.map((row) =>\n      this.components.map((comp) =>\n        row.reduce((s, v, i) => s + v * comp[i], 0)\n      )\n    );\n  }\n}\n\nclass EmbeddingExplorer {\n  private embeddings: Map<string, number[]> = new Map();\n\n  addEmbedding(word: string, vec: number[]): void {\n    this.embeddings.set(word, vec);\n  }\n\n  findAnalogies(a: string, b: string, c: string, k = 5): Array<{ word: string; score: number }> {\n    const va = this.embeddings.get(a);\n    const vb = this.embeddings.get(b);\n    const vc = this.embeddings.get(c);\n    if (!va || !vb || !vc) return [];\n    const target = va.map((v, i) => v - vb[i] + vc[i]);\n    const results: Array<{ word: string; score: number }> = [];\n    for (const [word, vec] of this.embeddings) {\n      if ([a, b, c].includes(word)) continue;\n      results.push({ word, score: CosineSimilarity.compute(target, vec) });\n    }\n    results.sort((a, b) => b.score - a.score);\n    return results.slice(0, k);\n  }\n\n  getClusterCenters(k: number): Map<number, string[]> {\n    const words = [...this.embeddings.keys()];\n    const vecs = words.map((w) => this.embeddings.get(w)!);\n    // Simple K-means\n    const centroids = vecs.slice(0, k).map((v) => [...v]);\n    const assignments = new Array(words.length).fill(0);\n    for (let iter = 0; iter < 20; iter++) {\n      for (let i = 0; i < words.length; i++) {\n        let bestDist = Infinity;\n        for (let j = 0; j < k; j++) {\n          const dist = vecs[i].reduce(\n            (s, v, d) => s + (v - centroids[j][d]) ** 2,\n            0\n          );\n          if (dist < bestDist) {\n            bestDist = dist;\n            assignments[i] = j;\n          }\n        }\n      }\n      for (let j = 0; j < k; j++) {\n        const members = vecs.filter((_, i) => assignments[i] === j);\n        if (members.length > 0) {\n          centroids[j] = members[0].map((_, d) =>\n            members.reduce((s, m) => s + m[d], 0) / members.length\n          );\n        }\n      }\n    }\n    const clusters = new Map<number, string[]>();\n    for (let i = 0; i < words.length; i++) {\n      const cid = assignments[i];\n      if (!clusters.has(cid)) clusters.set(cid, []);\n      clusters.get(cid)!.push(words[i]);\n    }\n    return clusters;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common visualization techniques"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA: Linear projection, preserves global structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t-SNE: Non-linear, preserves local neighborhoods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UMAP: Faster than t-SNE, better global structure preservation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TensorBoard Embedding Projector: Interactive 3D visualization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Word embeddings map discrete tokens into dense vector spaces where semantic relationships correspond to vector arithmetic. Word2Vec uses either continuous bag-of-words (CBOW) or.\nskip-gram architectures with negative sampling to learn embeddings from local context. GloVe combines global matrix factorization with local context windows for.\nefficient training. FastText extends Word2Vec by incorporating subword n-gram information, enabling embeddings for out-of-vocabulary words. Subword tokenization methods like BPE and.\nSentencePiece bridge the gap between character-level and word-level representations. Embedding visualization using PCA or t-SNE reveals clustering patterns and analogical relationships. Handling OOV words requires fallback strategies like subword composition or.\nrandom initialization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Word2Vec (Skip-gram) is preferred for rare words; CBOW is faster and better for frequent words"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GloVe captures global corpus statistics and excels on analogy benchmarks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FastText solves OOV by composing character n-gram embeddings, essential for morphologically rich languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subword information (FastText, BPE) consistently improves embeddings for languages with complex morphology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always normalize embedding vectors to unit length before computing cosine similarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedding dimension is a hyperparameter: 100-300 works well; higher dimensions increase risk of overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negative sampling (5-20 negatives per positive) is crucial for efficient Skip-gram training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-trained embeddings (Google News 300d, GloVe 840B, FastText crawl) should be the default starting point"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between CBOW and Skip-gram in Word2Vec?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CBOW predicts the target word from surrounding context words by averaging context embeddings. It is faster and works well for frequent words,.\nbut treats context as a bag ignoring order. Skip-gram predicts context words from a target word, treating each (target, context) pair as a separate training example. It is slower but.\ncaptures rare words better because rare words get more training weight during gradient updates. Skip-gram also tends to produce better quality embeddings for.\nsemantic tasks. Google's published Word2Vec model uses Skip-gram."
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
      "data-qid": "nlp02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does negative sampling speed up Word2Vec training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Negative sampling replaces the full softmax (which requires computing probabilities over the entire vocabulary, O(V)) with a binary classification task: distinguish the true context word from k randomly sampled negative words. For.\neach positive (target, context) pair, we draw k negative samples (e.g., k=5 for small datasets, k=20 for large) from a unigram distribution raised to the 3/4 power. Training becomes O(k) instead of O(V),.\nwhere V is the vocabulary size (typically 50K-1M). Despite the approximation, embeddings retain high quality."
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
      "data-qid": "nlp02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What makes GloVe different from Word2Vec?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Word2Vec is a predictive model trained on local context windows using neural networks. GloVe is a count-based model that factorizes the global word co-occurrence matrix. GloVe's loss function directly models the ratio of co-occurrence probabilities: F(w_i,.\nw_j, w_k) = P_ik / P_jk where P_ik = X_ik / X_i. This captures meaning through co-occurrence ratios: e.g., for ice vs steam with word solid,.\nP(solid|ice)/P(solid|steam) is large, while with word gas it is small. GloVe consistently outperforms Word2Vec on word analogy tasks but takes more memory due to the co-occurrence matrix."
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
      "data-qid": "nlp02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does FastText handle out-of-vocabulary words?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FastText represents each word as a bag of character n-grams (3-6) plus the full word. For an OOV word, it generates the character n-grams and.\nsums/averages their embeddings. For example, for the OOV word \"unhappiness\", FastText produces n-grams like \"<un\", \"unh\", \"nha\", \"hap\", ..., \"ess>\", each having a trained embedding. The final embedding is the average of all n-gram vectors. This works because morphological patterns are shared: \"un-\" prefix appears in many words,.\nand \"-ness\" suffix appears in many nouns. No OOV is ever truly unknown."
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
      "data-qid": "nlp02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you evaluate the quality of word embeddings?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Three evaluation approaches: (1) Intrinsic evaluation — Word analogy tasks (king:queen :: man:woman) using semantic and syntactic categories. WordSim-353 and SimLex-999 measure correlation with human similarity judgments. (2) Extrinsic evaluation — Use embeddings as features for.\ndownstream tasks (NER, sentiment, POS tagging) and measure accuracy improvement. (3) Visualization — t-SNE or PCA plots should show semantic clustering (countries,.\nfruits, verbs cluster separately). Analogy accuracy of 75%+ on Google analogy dataset indicates high-quality embeddings, while downstream task improvements of 1-5% F1 are meaningful."
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
      "data-qid": "nlp02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the ideal embedding dimension and how do you choose it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "There is no universal ideal dimension. Typical ranges: Word2Vec/GloVe: 100-300. FastText: 100-300. BERT: 768 (base), 1024 (large). Rule of thumb: larger dimensions capture more nuanced relationships but.\nrequire more data and risk overfitting. For small corpora (<10M tokens), use 50-100. For large corpora (>100M tokens), use 200-300. Beyond 300,.\ngains diminish. To choose: train embeddings at 50, 100, 200, 300 and evaluate on an intrinsic benchmark. Use the smallest dimension where performance plateaus."
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
      "data-qid": "nlp02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Explain the distributional hypothesis and its limitations.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The distributional hypothesis (Harris, 1954) states that words appearing in similar contexts have similar meanings. Firth's 1957 formulation: \"You shall know a word by the company it keeps.\" Limitations: (1) Polysemy — \"bank\" (river vs. financial) has one embedding that averages both meanings. (2) Antonymy — \"hot\" and.\n\"cold\" appear in similar contexts but have opposite meanings; embeddings place them close despite semantic opposition. (3) Rare words have poor.\nembeddings due to insufficient context. (4) Non-compositionality — \"hot dog\" is not the sum of \"hot\" and \"dog\". Contextual embeddings (BERT,.\nELMo) address some of these issues."
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
      "data-qid": "nlp02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle polysemy in word embeddings?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Traditional static embeddings (Word2Vec, GloVe, FastText) give one vector per word, conflating multiple senses. Solutions: (1) Contextual embeddings (BERT, ELMo, GPT) produce different vectors for.\nthe same word in different contexts. (2) Sense embeddings — train separate vectors for each sense (e.g., bank_river, bank_financial) using clustering of context windows (Multi-Sense Embeddings,.\nSensEmbed). (3) Adaptive embeddings — learn a weighted combination of sense vectors based on context (MST, MCC). The dominant modern approach is contextual embeddings,.\nwhich solve polysemy implicitly through the self-attention mechanism."
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
      "data-qid": "nlp02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the role of subsampling in Word2Vec training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Subsampling discards frequent words with probability P(w_i) = 1 - sqrt(t / f(w_i)) where t is a threshold (default 1e-5) and.\nf(w_i) is frequency. Very frequent words (\"the\", \"and\", \"of\") are discarded in 80-99% of occurrences. This speeds training by reducing processed tokens by 2-10x and.\nimproves embedding quality because discriminative co-occurrences (between content words) get proportionally more weight. Without subsampling, frequent words dominate updates and rare word representations suffer from insufficient training signal."
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
      "data-qid": "nlp02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you choose between Word2Vec, GloVe, and FastText for a project?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Choose based on your data and task: (1) Word2Vec (Skip-gram) — good general-purpose option. Works best on large corpora (>100M tokens). Fast training with negative sampling. (2) GloVe — better on analogy tasks,.\nuseful when you need consistent global statistics. Requires more memory (co-occurrence matrix). Good for medium-sized corpora. (3) FastText — best for.\nmorphologically rich languages (German, Turkish, Arabic), for domains with many rare/technical terms, or when OOV handling is critical. Embeddings are larger and.\ntraining is slower. For English with ample data, Word2Vec or GloVe work well. For multilingual or specialized domains, use FastText."
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
      children: "Q1: Which Word2Vec architecture is better for rare words?\na) CBOW\nb) Skip-gram\nc) GloVe\nd) FastText"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Skip-gram"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Skip-gram treats each (target, context) pair independently, giving rare words proportionally more training weight than CBOW, which averages context."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q2: What technique speeds up Word2Vec training by avoiding full softmax?\na) Subsampling\nb) Negative sampling\nc) Hierarchical softmax\nd) Both b and c"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) Both b and c"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Both negative sampling and hierarchical softmax approximate the full softmax to avoid O(V) computation per training step."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q3: How does FastText compute embeddings for OOV words?\na) Returns a zero vector\nb) Averages character n-gram embeddings\nc) Uses the nearest known word\nd) Falls back to GloVe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Averages character n-gram embeddings"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "FastText generates character n-grams (3-6) of the OOV word, then averages their embeddings to produce the word embedding."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q4: What does GloVe's loss function model?\na) Local context window predictions\nb) Ratio of co-occurrence probabilities\nc) Character n-gram composition\nd) Binary classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Ratio of co-occurrence probabilities"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "GloVe models ratios of co-occurrence probabilities to capture meaning differences between words."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q5: What subsampling threshold t is typical for Word2Vec?\na) 1e-3\nb) 1e-5\nc) 1e-1\nd) 1e-10"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 1e-5"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The default subsampling threshold t=1e-5 discards frequent words with probability 1 - sqrt(t/f(w)), speeding training and improving quality."
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
        }), " — Compute cosine similarity between 5 pairs of words using pre-trained GloVe vectors (download the 50d set). Report the most similar pair."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Train a CBOW model on a small corpus of 10 sentences. Extract the embedding for each word and print nearest neighbors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement the t-SNE algorithm for embedding visualization. Visualize GloVe vectors for 200 words colored by POS tag. Interpret clusters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a FastText model on a morphologically rich corpus (e.g., German news). Test OOV word generation on 10 unseen compound nouns. Report whether the composed vectors are semantically meaningful."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a multi-sense embedding model: cluster Word2Vec context windows for ambiguous words (bank, rock, light) and produce separate sense vectors. Evaluate on a word sense disambiguation benchmark."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing",
          children: "Text Preprocessing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [Sequence Models](03-sequence-m"]
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
            children: "Explain the core idea of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
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
            children: "Describe a production bug caused by misunderstanding Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization from 10 users to 10 million?"
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
            children: "Compare Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
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
            children: "How does Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in production today?"
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
        }), " Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization on an empty input?"
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
            children: "Complete Medium exercises, explain Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to someone else"
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
        children: "Always write a one-line example of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
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
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
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
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is like a recipe"
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
        }), " — this chapter contributes the Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-02wordembeddings-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-02wordembeddings-flash2",
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
      "data-qid": "10nlptransformers-02wordembeddings-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-02wordembeddings-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-02wordembeddings-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in production at scale"
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
        children: "Testing: pytest for unit tests of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization code."]
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
        }), " or your IDE's debugger to step through the Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization example code."]
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
        children: "Explain Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
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
        children: "Tell me about a time you debugged a Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization without notes"
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
        }), ": a small team uses Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/03-sequence-models",
        children: "Sequence Models — RNN, LSTM, GRU, Bidirectional, Encoder-Decoder"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization depends on input size and distribution — always benchmark for your own data."
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