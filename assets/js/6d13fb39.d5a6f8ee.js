"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[28461],{

/***/ 12641
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_08_nlp_applications_md_6d1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-08-nlp-applications-md-6d1.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_08_nlp_applications_md_6d1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/08-nlp-applications","title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/08-nlp-applications.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":141,"frontMatter":{"id":"08-nlp-applications","slug":"/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","sidebar_label":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","sidebar_position":141},"sidebar":"placementSidebar","previous":{"title":"Hugging Face Ecosystem — Transformers, Pipelines, Datasets, Tokenizers","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/07-hugging-face-ecosystem"},"next":{"title":"11 — LLMs & Prompt Engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/08-nlp-applications.md


const frontMatter = {
	id: '08-nlp-applications',
	slug: '/ai-engineering-placement/10-nlp-transformers/08-nlp-applications',
	title: 'NLP Applications — Text Classification, NER, QA, Summarization, Translation',
	sidebar_label: 'NLP Applications — Text Classification, NER, QA, Summarization, Translation',
	sidebar_position: 141
};
const contentTitle = 'NLP Applications — Text Classification, NER, QA, Summarization, Translation';

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
  "value": "8.1 Text Classification",
  "id": "81-text-classification",
  "level": 2
}, {
  "value": "8.2 Named Entity Recognition",
  "id": "82-named-entity-recognition",
  "level": 2
}, {
  "value": "8.3 Question Answering",
  "id": "83-question-answering",
  "level": 2
}, {
  "value": "8.4 Text Summarization",
  "id": "84-text-summarization",
  "level": 2
}, {
  "value": "8.5 Machine Translation",
  "id": "85-machine-translation",
  "level": 2
}, {
  "value": "8.6 Spam Detection &amp; Sentiment Analysis",
  "id": "86-spam-detection--sentiment-analysis",
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
        id: "nlp-applications--text-classification-ner-qa-summarization-translation",
        children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation"
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
            children: "Build end-to-end text classification systems for sentiment, spam, and topic detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement named entity recognition using sequence labeling with IOB tagging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct extractive and abstractive question answering pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply text summarization with extractive (TF-IDF) and abstractive (transformer) methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build machine translation systems with encoder-decoder transformers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Develop spam detection with feature engineering and ensemble approaches"
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
      children: "Understanding nlp applications is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how nlp applications works in practice."
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT fine-tuning, TF-IDF + linear, multi-label classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named Entity Recognition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IOB tagging, BiLSTM-CRF, BERT token classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Question Answering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extractive (SQuAD), abstractive (RAG), open-book/closed-book"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text Summarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extractive (TextRank), abstractive (BART, T5), length control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine Translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-decoder, BLEU scoring, subword regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam & Sentiment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastText, LSTM, BERT, explainability via LIME"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Input Text] --> B{Application Type}\n    B -->|Classification| C[BERT Classifier]\n    B -->|NER| D[Token Classifier]\n    B -->|QA| E[Span Predictor]\n    B -->|Summarization| F[Seq2Seq Model]\n    B -->|Translation| G[Encoder-Decoder]\n    B -->|Spam| H[FastText / BERT]\n    C --> I[Label Output]\n    D --> J[Entity Tags]\n    E --> K[Answer Span]\n    F --> L[Summary Text]\n    G --> M[Translated Text]\n    H --> N[Spam/Ham Label]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-text-classification",
      children: "8.1 Text Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text classification assigns a label (or multiple labels) to a document. Approaches range from simple TF-IDF + logistic regression to fine-tuned BERT."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TextClassifier {\n  private model: any; // BERT or TF-IDF + LR\n  private method: \"tfidf\" | \"bert\";\n  private classes: string[] = [];\n  private vectorizer: TfidfVectorizer | null = null;\n  private weights: number[][] = [];\n  private bias: number[] = [];\n\n  constructor(method: \"tfidf\" | \"bert\" = \"bert\") {\n    this.method = method;\n  }\n\n  train(samples: Array<{ text: string; label: string }>): void {\n    const uniqueLabels = [...new Set(samples.map((s) => s.label))];\n    this.classes = uniqueLabels;\n    const numClasses = uniqueLabels.length;\n    const labelToIdx = new Map(uniqueLabels.map((l, i) => [l, i]));\n    const labels = samples.map((s) => labelToIdx.get(s.label)!);\n\n    if (this.method === \"tfidf\") {\n      this.trainTfidf(samples.map((s) => s.text), labels, numClasses);\n    } else {\n      this.trainBert(samples, labels);\n    }\n  }\n\n  private trainTfidf(texts: string[], labels: number[], numClasses: number): void {\n    this.vectorizer = new TfidfVectorizer(5000);\n    this.vectorizer.fit(texts);\n    const X = this.vectorizer.transform(texts);\n    const n = X.length;\n    const dim = X[0].length;\n\n    // One-vs-rest logistic regression\n    this.weights = Array.from({ length: numClasses }, (_, c) => {\n      const binaryLabels = labels.map((l) => (l === c ? 1 : 0));\n      // Simplified SGD training\n      const w = new Array(dim).fill(0);\n      for (let epoch = 0; epoch < 100; epoch++) {\n        for (let i = 0; i < n; i++) {\n          const dot = X[i].reduce((s, v, j) => s + v * w[j], 0);\n          const sigmoid = 1 / (1 + Math.exp(-dot));\n          const error = sigmoid - binaryLabels[i];\n          for (let j = 0; j < dim; j++) {\n            w[j] -= 0.01 * error * X[i][j];\n          }\n        }\n      }\n      return w;\n    });\n    this.bias = new Array(numClasses).fill(0);\n  }\n\n  private trainBert(samples: Array<{ text: string; label: string }>, labels: number[]): void {\n    // Simulate BERT fine-tuning\n    console.log(\"Fine-tuning BERT for classification...\");\n    this.weights = Array.from({ length: this.classes.length }, () =>\n      Array.from({ length: 768 }, () => (Math.random() - 0.5) * 0.01)\n    );\n    this.bias = new Array(this.classes.length).fill(0);\n  }\n\n  predict(text: string): { label: string; confidence: number } {\n    if (this.method === \"tfidf\" && this.vectorizer) {\n      const X = this.vectorizer.transform([text]);\n      const scores = this.weights.map((w, c) => {\n        let sum = this.bias[c];\n        for (let j = 0; j < X[0].length; j++) sum += w[j] * X[0][j];\n        return sum;\n      });\n      const maxIdx = scores.indexOf(Math.max(...scores));\n      const probs = this.softmax(scores);\n      return {\n        label: this.classes[maxIdx],\n        confidence: probs[maxIdx],\n      };\n    } else {\n      // BERT prediction (simplified)\n      const scores = this.weights.map((w) =>\n        w.reduce((s, v) => s + v * (text.length % 10), 0)\n      );\n      const maxIdx = scores.indexOf(Math.max(...scores));\n      const probs = this.softmax(scores);\n      return {\n        label: this.classes[maxIdx],\n        confidence: probs[maxIdx],\n      };\n    }\n  }\n\n  predictBatch(texts: string[]): Array<{ label: string; confidence: number }> {\n    return texts.map((t) => this.predict(t));\n  }\n\n  private softmax(scores: number[]): number[] {\n    const max = Math.max(...scores);\n    const exp = scores.map((s) => Math.exp(s - max));\n    const sum = exp.reduce((a, b) => a + b, 0);\n    return exp.map((e) => e / sum);\n  }\n}\n\nclass MultiLabelClassifier {\n  private classifiers: Map<string, TextClassifier> = new Map();\n  private labels: string[] = [];\n\n  train(samples: Array<{ text: string; labels: string[] }>): void {\n    const allLabels = new Set<string>();\n    samples.forEach((s) => s.labels.forEach((l) => allLabels.add(l)));\n    this.labels = [...allLabels];\n\n    for (const label of this.labels) {\n      const binarySamples = samples.map((s) => ({\n        text: s.text,\n        label: s.labels.includes(label) ? label : \"__other__\",\n      }));\n      const classifier = new TextClassifier(\"tfidf\");\n      classifier.train(binarySamples);\n      this.classifiers.set(label, classifier);\n    }\n  }\n\n  predict(text: string): string[] {\n    const predictions: string[] = [];\n    for (const [label, classifier] of this.classifiers) {\n      const result = classifier.predict(text);\n      if (result.label === label && result.confidence > 0.5) {\n        predictions.push(label);\n      }\n    }\n    return predictions;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world classifiers use BERT-like models achieving 95%+ accuracy on standard benchmarks. The key challenge is usually data quality and class imbalance, not model architecture."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-named-entity-recognition",
      children: "8.2 Named Entity Recognition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NER identifies entities (person, organization, location, date, etc.) in text using sequence labeling with the IOB (Inside-Outside-Beginning) tagging scheme."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NEREntity {\n  text: string;\n  label: string;\n  start: number;\n  end: number;\n  confidence: number;\n}\n\nclass NERTagger {\n  private static IOB_LABELS = [\n    \"O\", \"B-PER\", \"I-PER\", \"B-ORG\", \"I-ORG\",\n    \"B-LOC\", \"I-LOC\", \"B-DATE\", \"I-DATE\", \"B-MISC\", \"I-MISC\",\n  ] as const;\n\n  private numLabels = NERTagger.IOB_LABELS.length;\n  private model: any; // BERT token classifier\n\n  constructor() {\n    // Initialize with pre-trained weights\n    console.log(\"Loading NER model...\");\n  }\n\n  private iobEncode(labels: string[]): string[] {\n    const iob: string[] = [];\n    let prevLabel = \"O\";\n    for (const label of labels) {\n      if (label === \"O\") {\n        iob.push(\"O\");\n        prevLabel = \"O\";\n      } else {\n        if (prevLabel !== label) {\n          iob.push(`B-${label}`);\n        } else {\n          iob.push(`I-${label}`);\n        }\n        prevLabel = label;\n      }\n    }\n    return iob;\n  }\n\n  private iobDecode(tokens: string[], iobTags: string[]): NEREntity[] {\n    const entities: NEREntity[] = [];\n    let currentEntity: { text: string; label: string; start: number } | null = null;\n    let tokenStart = 0;\n\n    for (let i = 0; i < tokens.length; i++) {\n      const tag = iobTags[i];\n      const token = tokens[i];\n\n      if (tag.startsWith(\"B-\")) {\n        if (currentEntity) {\n          entities.push({\n            text: currentEntity.text,\n            label: currentEntity.label,\n            start: currentEntity.start,\n            end: tokenStart - 1,\n            confidence: 0.95,\n          });\n        }\n        currentEntity = {\n          text: token,\n          label: tag.substring(2),\n          start: tokenStart,\n        };\n      } else if (tag.startsWith(\"I-\")) {\n        if (\n          currentEntity &&\n          currentEntity.label === tag.substring(2)\n        ) {\n          currentEntity.text += \" \" + token;\n        }\n      } else {\n        if (currentEntity) {\n          entities.push({\n            text: currentEntity.text,\n            label: currentEntity.label,\n            start: currentEntity.start,\n            end: tokenStart + token.length - 1,\n            confidence: 0.95,\n          });\n          currentEntity = null;\n        }\n      }\n      tokenStart += token.length + 1;\n    }\n\n    if (currentEntity) {\n      entities.push({\n        text: currentEntity.text,\n        label: currentEntity.label,\n        start: currentEntity.start,\n        end: tokenStart > 0 ? tokenStart - 1 : 0,\n        confidence: 0.95,\n      });\n    }\n\n    return entities;\n  }\n\n  extractEntities(text: string): NEREntity[] {\n    const tokens = text.split(/\\s+/);\n\n    // Simulate BERT NER predictions\n    const iobTags = tokens.map((token) => {\n      const rand = Math.random();\n      if (rand > 0.9) return \"B-PER\";\n      if (rand > 0.85) return \"I-PER\";\n      if (rand > 0.8) return \"B-ORG\";\n      if (rand > 0.75) return \"I-ORG\";\n      if (rand > 0.7) return \"B-LOC\";\n      if (rand > 0.65) return \"I-LOC\";\n      return \"O\";\n    });\n\n    return this.iobDecode(tokens, iobTags);\n  }\n\n  // BiLSTM-CRF alternative\n  extractWithCRF(text: string): NEREntity[] {\n    // CRF adds transition constraints (e.g., B-PER cannot follow I-ORG)\n    // Viterbi decoding finds the most likely tag sequence\n    const tokens = text.split(/\\s+/);\n    const emissionScores = tokens.map(() =>\n      this.numLabels.map(() => Math.random() - 0.5)\n    );\n\n    // Transition matrix (simplified valid transitions)\n    const transScores: number[][] = Array.from({ length: this.numLabels }, () =>\n      new Array(this.numLabels).fill(-1000)\n    );\n\n    // Allow: O -> any B, B-X -> I-X or O, I-X -> I-X or O\n    for (let i = 0; i < this.numLabels; i++) {\n      transScores[0][i] = 0; // O -> any\n      const label = NERTagger.IOB_LABELS[i];\n      if (label.startsWith(\"B-\") || label === \"O\") {\n        for (let j = 0; j < this.numLabels; j++) {\n          if (NERTagger.IOB_LABELS[j] === \"O\") transScores[i][j] = 0;\n          if (NERTagger.IOB_LABELS[j] === `I-${label.substring(2)}`) transScores[i][j] = 0;\n        }\n      }\n      if (label.startsWith(\"I-\")) {\n        for (let j = 0; j < this.numLabels; j++) {\n          if (NERTagger.IOB_LABELS[j] === \"O\") transScores[i][j] = 0;\n          if (NERTagger.IOB_LABELS[j] === `I-${label.substring(2)}`) transScores[i][j] = 0;\n          if (NERTagger.IOB_LABELS[j] === `B-${label.substring(2)}`) transScores[i][j] = 0;\n        }\n      }\n    }\n\n    // Viterbi decoding (simplified)\n    const bestTags = tokens.map(() => {\n      const scores = emissionScores[0].map((_, i) => transScores[0][i]);\n      const maxIdx = scores.indexOf(Math.max(...scores));\n      return NERTagger.IOB_LABELS[maxIdx];\n    });\n\n    return this.iobDecode(tokens, bestTags);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern NER systems (BERT-based) achieve F1 > 92% on CoNLL-2003. Domain adaptation (medical, legal, financial) requires annotated data or few-shot learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-question-answering",
      children: "8.3 Question Answering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QA systems can be extractive (find answer span in context) or abstractive (generate answer from knowledge)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface QAInput {\n  question: string;\n  context?: string; // for extractive QA\n}\n\ninterface QAOutput {\n  answer: string;\n  confidence: number;\n  start?: number;\n  end?: number;\n  supportingFacts?: string[];\n}\n\nclass QuestionAnsweringSystem {\n  private method: \"extractive\" | \"abstractive\" | \"hybrid\";\n\n  constructor(method: \"extractive\" | \"abstractive\" | \"hybrid\" = \"hybrid\") {\n    this.method = method;\n  }\n\n  answer(input: QAInput): QAOutput {\n    switch (this.method) {\n      case \"extractive\":\n        return this.extractiveQA(input.question, input.context || \"\");\n      case \"abstractive\":\n        return this.abstractiveQA(input.question);\n      case \"hybrid\":\n        return this.hybridQA(input.question, input.context || \"\");\n    }\n  }\n\n  private extractiveQA(question: string, context: string): QAOutput {\n    // Step 1: Identify the best sentence (retrieval)\n    const sentences = context.split(/[.!?]+/).filter((s) => s.trim().length > 0);\n    const qTokens = new Set(question.toLowerCase().split(/\\s+/));\n\n    let bestSentence = \"\";\n    let bestOverlap = 0;\n    for (const sentence of sentences) {\n      const sTokens = sentence.toLowerCase().split(/\\s+/);\n      const overlap = sTokens.filter((t) => qTokens.has(t)).length;\n      if (overlap > bestOverlap) {\n        bestOverlap = overlap;\n        bestSentence = sentence.trim();\n      }\n    }\n\n    // Step 2: Identify start and end span within the sentence (simplified)\n    const sLower = bestSentence.toLowerCase();\n    const qLower = question.toLowerCase();\n\n    // Find position where question words overlap with sentence\n    let bestStart = 0;\n    let bestEnd = bestSentence.length;\n    let bestScore = 0;\n\n    for (let i = 0; i < bestSentence.length; i++) {\n      for (let j = i + 1; j <= Math.min(i + 100, bestSentence.length); j++) {\n        const span = sLower.substring(i, j);\n        const spanTokens = span.split(/\\s+/);\n        const overlap = spanTokens.filter((t) => qTokens.has(t)).length;\n        const score = overlap - (j - i) * 0.01; // prefer shorter spans\n        if (score > bestScore) {\n          bestScore = score;\n          bestStart = i;\n          bestEnd = j;\n        }\n      }\n    }\n\n    const answer = bestSentence.substring(bestStart, bestEnd).trim();\n\n    return {\n      answer: answer || \"No answer found.\",\n      confidence: bestScore > 0 ? 0.7 + Math.random() * 0.2 : 0.3,\n      start: bestStart,\n      end: bestEnd,\n    };\n  }\n\n  private abstractiveQA(question: string): QAOutput {\n    // Abstractive QA generates answer from parametric knowledge\n    // (knowledge stored in model weights)\n    const knowledge: Record<string, string> = {\n      \"who invented the transformer\":\n        \"The Transformer was introduced by Vaswani et al. in the 2017 paper 'Attention is All You Need'.\",\n      \"what is the capital of france\":\n        \"The capital of France is Paris, located in the north-central part of the country.\",\n      \"what is nlp\":\n        \"Natural language processing (NLP) is a subfield of AI focused on enabling computers to understand, interpret, and generate human language.\",\n    };\n\n    const qLower = question.toLowerCase();\n    for (const [key, value] of Object.entries(knowledge)) {\n      if (qLower.includes(key) || key.includes(qLower.split(\" \").slice(0, 3).join(\" \"))) {\n        return {\n          answer: value,\n          confidence: 0.9,\n        };\n      }\n    }\n\n    return {\n      answer: \"I don't have knowledge about that specific question.\",\n      confidence: 0.1,\n    };\n  }\n\n  private hybridQA(question: string, context: string): QAOutput {\n    // First try extractive, fall back to abstractive\n    const extractive = this.extractiveQA(question, context);\n    if (extractive.confidence > 0.6 && extractive.answer !== \"No answer found.\") {\n      return extractive;\n    }\n    const abstractive = this.abstractiveQA(question);\n    return {\n      ...abstractive,\n      confidence: abstractive.confidence * 0.8,\n    };\n  }\n}\n\n// Retrieval-Augmented Generation (RAG)\nclass RAGSystem {\n  private documentStore: string[] = [];\n  private embedder: any;\n\n  constructor(documents: string[]) {\n    this.documentStore = documents;\n  }\n\n  retrieve(query: string, k = 3): string[] {\n    const qTokens = new Set(query.toLowerCase().split(/\\s+/));\n    const scored = this.documentStore.map((doc) => {\n      const dTokens = doc.toLowerCase().split(/\\s+/);\n      const overlap = dTokens.filter((t) => qTokens.has(t)).length;\n      return { doc, score: overlap / Math.max(dTokens.length, 1) };\n    });\n    scored.sort((a, b) => b.score - a.score);\n    return scored.slice(0, k).map((s) => s.doc);\n  }\n\n  generateAnswer(query: string, retrievedDocs: string[]): string {\n    // In production: concatenate retrieved docs with query and feed to T5/BART\n    const context = retrievedDocs.join(\" \");\n    // Simplified: return best matching sentence\n    const sentences = context.split(/[.!?]+/);\n    const qTokens = new Set(query.toLowerCase().split(/\\s+/));\n    let bestSentence = \"\";\n    let bestScore = 0;\n    for (const s of sentences) {\n      const sTokens = s.toLowerCase().split(/\\s+/);\n      const overlap = sTokens.filter((t) => qTokens.has(t)).length;\n      if (overlap > bestScore) {\n        bestScore = overlap;\n        bestSentence = s.trim();\n      }\n    }\n    return bestSentence || \"No answer found.\";\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real RAG systems use dense retrieval (DPR, Contriever) with FAISS for billions of documents and T5/BART for answer generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-text-summarization",
      children: "8.4 Text Summarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Summarization condenses documents while preserving key information. Extractive methods select sentences; abstractive methods generate new text."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ExtractiveSummarizer {\n  summarize(\n    text: string,\n    maxSentences = 3,\n    method: \"tfidf\" | \"textrank\" = \"textrank\"\n  ): string {\n    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];\n    if (sentences.length <= maxSentences) return text;\n\n    if (method === \"tfidf\") {\n      return this.tfidfSummarize(sentences, maxSentences);\n    }\n    return this.textRankSummarize(sentences, maxSentences);\n  }\n\n  private tfidfSummarize(sentences: string[], maxSents: number): string {\n    // Compute TF-IDF for each sentence\n    const terms = sentences.map((s) =>\n      s.toLowerCase().split(/\\s+/).filter((t) => t.length > 2)\n    );\n\n    // Document frequency\n    const df = new Map<string, number>();\n    for (const st of terms) {\n      const seen = new Set(st);\n      for (const t of seen) {\n        df.set(t, (df.get(t) || 0) + 1);\n      }\n    }\n\n    const n = sentences.length;\n    // Score each sentence by average TF-IDF\n    const scores = terms.map((st) => {\n      let score = 0;\n      for (const t of st) {\n        const tf = st.filter((w) => w === t).length / st.length;\n        const idf = Math.log(n / (df.get(t) || 1));\n        score += tf * idf;\n      }\n      return score / st.length;\n    });\n\n    const ranked = sentences\n      .map((s, i) => ({ sentence: s, score: scores[i] }))\n      .sort((a, b) => b.score - a.score);\n\n    return ranked\n      .slice(0, maxSents)\n      .sort((a, b) => sentences.indexOf(a.sentence) - sentences.indexOf(b.sentence))\n      .map((s) => s.sentence)\n      .join(\" \");\n  }\n\n  private textRankSummarize(sentences: string[], maxSents: number): string {\n    // TextRank: PageRank on sentence similarity graph\n    const n = sentences.length;\n\n    // Compute pairwise similarity matrix (word overlap)\n    const sim: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));\n    const sentTokens = sentences.map((s) => new Set(s.toLowerCase().split(/\\s+/)));\n\n    for (let i = 0; i < n; i++) {\n      for (let j = i + 1; j < n; j++) {\n        const intersection = [...sentTokens[i]].filter((t) => sentTokens[j].has(t)).length;\n        const union = new Set([...sentTokens[i], ...sentTokens[j]]).size;\n        sim[i][j] = sim[j][i] = union > 0 ? intersection / union : 0;\n      }\n    }\n\n    // PageRank iteration\n    const damping = 0.85;\n    let scores = new Array(n).fill(1 / n);\n\n    for (let iter = 0; iter < 50; iter++) {\n      const newScores = new Array(n).fill(0);\n      for (let i = 0; i < n; i++) {\n        let sum = 0;\n        for (let j = 0; j < n; j++) {\n          if (i !== j) {\n            const rowSum = sim[j].reduce((a, b) => a + b, 0);\n            sum += (sim[j][i] / (rowSum || 1)) * scores[j];\n          }\n        }\n        newScores[i] = (1 - damping) / n + damping * sum;\n      }\n      scores = newScores;\n    }\n\n    const ranked = sentences\n      .map((s, i) => ({ sentence: s, score: scores[i], idx: i }))\n      .sort((a, b) => b.score - a.score);\n\n    return ranked\n      .slice(0, maxSents)\n      .sort((a, b) => a.idx - b.idx)\n      .map((s) => s.sentence)\n      .join(\" \");\n  }\n}\n\nclass AbstractiveSummarizer {\n  private model: any;\n\n  constructor(modelType: \"bart\" | \"t5\" = \"bart\") {\n    console.log(`Loading ${modelType} for summarization...`);\n  }\n\n  summarize(\n    text: string,\n    maxLength = 150,\n    minLength = 40,\n    numBeams = 4\n  ): string {\n    // In production: use BART/T5 model\n    // Simplified extract + abstractive pipeline\n    const extractive = new ExtractiveSummarizer();\n    const extracted = extractive.summarize(text, 5, \"tfidf\");\n\n    // Abstractive compression (simplified)\n    const sentences = extracted.split(/[.!?]+/).filter((s) => s.trim().length > 0);\n    if (sentences.length === 0) return \"\";\n\n    // Keep only the most important parts of each sentence\n    const compressed = sentences.map((s) => {\n      const words = s.split(/\\s+/);\n      const kept = words.filter((w) => w.length > 3 || [\"is\", \"was\", \"are\", \"were\"].includes(w));\n      if (kept.length <= 3) return s;\n      return kept.join(\" \");\n    });\n\n    let summary = compressed.join(\". \");\n    if (summary.length > maxLength) {\n      summary = summary.substring(0, maxLength);\n      const lastPeriod = summary.lastIndexOf(\".\");\n      if (lastPeriod > minLength) summary = summary.substring(0, lastPeriod + 1);\n    }\n\n    return summary;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BART achieves ROUGE-L scores of 40+ on CNN/DailyMail. Key challenges: factual consistency (hallucination), length control, and handling very long documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-machine-translation",
      children: "8.5 Machine Translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine translation translates text from one language to another. Encoder-decoder transformers with BPE subword tokenization are the standard approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TranslationModel {\n  private srcLang: string;\n  private tgtLang: string;\n  private vocabulary: Map<string, number>;\n  private reverseVocab: Map<number, string>;\n\n  constructor(srcLang: string, tgtLang: string) {\n    this.srcLang = srcLang;\n    this.tgtLang = tgtLang;\n    this.vocabulary = new Map();\n    this.reverseVocab = new Map();\n    this.initVocab();\n  }\n\n  private initVocab(): void {\n    // Simplified vocabulary (in production: 32K BPE tokens)\n    const tokenTypes = [\n      \"<pad>\", \"<unk>\", \"<bos>\", \"<eos>\", \"the\", \"a\", \"an\", \"is\", \"was\",\n      \"hello\", \"world\", \"good\", \"morning\", \"how\", \"are\", \"you\", \"i\", \"am\",\n      \"this\", \"that\", \"these\", \"those\", \"and\", \"or\", \"but\", \"in\", \"on\", \"at\",\n      \"to\", \"from\", \"with\", \"without\", \"for\", \"of\", \"by\", \"about\", \"as\", \"into\",\n      \"through\", \"during\", \"before\", \"after\", \"above\", \"below\", \"between\",\n      \"out\", \"off\", \"over\", \"under\", \"again\", \"further\", \"then\", \"once\",\n      \"bonjour\", \"le\", \"monde\", \"tres\", \"bien\", \"merci\", \"comment\", \"allez\",\n      \"vous\", \"je\", \"suis\", \"ce\", \"cet\", \"cette\", \"ces\", \"et\", \"ou\", \"mais\",\n    ] as const;\n\n    tokenTypes.forEach((token, id) => {\n      this.vocabulary.set(token, id);\n      this.reverseVocab.set(id, token);\n    });\n  }\n\n  translate(text: string): string {\n    // Tokenize source\n    const srcTokens = text.toLowerCase().split(/\\s+/).slice(0, 50);\n    const srcIds = srcTokens.map((t) =>\n      this.vocabulary.get(t) ?? this.vocabulary.get(\"<unk>\")!\n    );\n\n    // Encoder processes source (simulated)\n    const encoderStates = srcIds.map(() =>\n      Array.from({ length: 512 }, () => Math.random() - 0.5)\n    );\n\n    // Decoder generates target (greedy, simplified)\n    const tgtIds: number[] = [this.vocabulary.get(\"<bos>\")!];\n    const maxLen = 50;\n    const eosId = this.vocabulary.get(\"<eos>\")!;\n    const unkId = this.vocabulary.get(\"<unk>\")!;\n\n    for (let step = 0; step < maxLen; step++) {\n      const lastId = tgtIds[tgtIds.length - 1];\n      if (lastId === eosId) break;\n\n      // Simulate decoder with attention over encoder\n      const decoderState = Array.from({ length: 512 }, () => Math.random());\n      const attentionWeights = encoderStates.map(() => Math.random());\n      const attSum = attentionWeights.reduce((a, b) => a + b, 0);\n      const normWeights = attentionWeights.map((w) => w / attSum);\n\n      const context = encoderStates[0].map((_, dim) =>\n        encoderStates.reduce((s, es, i) => s + es[dim] * normWeights[i], 0)\n      );\n\n      // Project to vocabulary (simplified)\n      const logits = [...this.vocabulary.keys()].map((token) => {\n        const tokenId = this.vocabulary.get(token)!;\n        return Math.random();\n      });\n\n      // Greedy: pick highest probability token\n      const bestTgtIdx = logits.indexOf(Math.max(...logits));\n\n      // Map back to target language (simple lookup)\n      const sourceToTarget: Record<string, string> = {\n        \"hello\": \"bonjour\",\n        \"world\": \"monde\",\n        \"good\": \"bon\",\n        \"morning\": \"matin\",\n        \"how\": \"comment\",\n        \"are\": \"allez\",\n        \"you\": \"vous\",\n        \"i\": \"je\",\n        \"am\": \"suis\",\n      };\n\n      const srcWord = srcTokens[step] || \"\";\n      const tgtWord = sourceToTarget[srcWord] || reverseDict(this.reverseVocab).get(bestTgtIdx) || srcWord;\n      tgtIds.push(this.vocabulary.get(tgtWord) ?? unkId);\n\n      if (tgtIds.length > maxLen) break;\n    }\n\n    // Decode target IDs to text\n    const tgtTokens = tgtIds\n      .slice(1) // skip <bos>\n      .filter((id) => id !== eosId && id !== this.vocabulary.get(\"<pad>\")!)\n      .map((id) => this.reverseVocab.get(id) ?? \"<unk>\");\n\n    return tgtTokens.filter((t) => !t.startsWith(\"<\")).join(\" \");\n  }\n\n  evaluateBLEU(hypotheses: string[], references: string[]): number {\n    // Simplified BLEU score computation\n    let totalPrecision = 0;\n    for (let i = 0; i < hypotheses.length; i++) {\n      const hyp = hypotheses[i].split(/\\s+/);\n      const ref = references[i].split(/\\s+/);\n\n      const hypNGrams = new Map<string, number>();\n      const refNGrams = new Map<string, number>();\n\n      for (let n = 1; n <= 4; n++) {\n        for (let j = 0; j <= hyp.length - n; j++) {\n          const gram = hyp.slice(j, j + n).join(\" \");\n          hypNGrams.set(gram, (hypNGrams.get(gram) || 0) + 1);\n        }\n        for (let j = 0; j <= ref.length - n; j++) {\n          const gram = ref.slice(j, j + n).join(\" \");\n          refNGrams.set(gram, (refNGrams.get(gram) || 0) + 1);\n        }\n\n        let match = 0;\n        let total = 0;\n        for (const [gram, count] of hypNGrams) {\n          const refCount = refNGrams.get(gram) || 0;\n          match += Math.min(count, refCount);\n          total += count;\n        }\n        totalPrecision += total > 0 ? match / total : 0;\n      }\n    }\n    totalPrecision /= hypotheses.length * 4;\n\n    // Brevity penalty\n    const hypLen = hypotheses.reduce((s, h) => s + h.split(/\\s+/).length, 0);\n    const refLen = references.reduce((s, r) => s + r.split(/\\s+/).length, 0);\n    const bp = refLen > 0 ? Math.exp(1 - refLen / (hypLen || 1)) : 0;\n\n    return totalPrecision * bp * 100;\n  }\n}\n\nfunction reverseDict(map: Map<number, string>): Map<string, number> {\n  const rev = new Map<string, number>();\n  for (const [k, v] of map) rev.set(v, k);\n  return rev;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State-of-the-art translation achieves BLEU 35+ for high-resource pairs and uses back-translation for low-resource language pairs."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-spam-detection--sentiment-analysis",
      children: "8.6 Spam Detection & Sentiment Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spam detection classifies messages as spam or ham. Sentiment analysis identifies emotional tone (positive, negative, neutral)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SpamFeatures {\n  wordCount: number;\n  uppercaseRatio: number;\n  exclamationCount: number;\n  moneySymbolCount: number;\n  urlCount: number;\n  spamKeywordCount: number;\n  containsFree: boolean;\n  containsGuarantee: boolean;\n  containsWinner: boolean;\n}\n\nclass SpamDetector {\n  private threshold: number;\n  private featureWeights: SpamFeatures;\n\n  constructor() {\n    this.threshold = 0.5;\n    this.featureWeights = {\n      wordCount: 0.01,\n      uppercaseRatio: 3.0,\n      exclamationCount: 0.3,\n      moneySymbolCount: 2.0,\n      urlCount: 0.5,\n      spamKeywordCount: 1.5,\n      containsFree: 2.0,\n      containsGuarantee: 2.5,\n      containsWinner: 3.0,\n    };\n  }\n\n  private extractFeatures(text: string): SpamFeatures {\n    const lower = text.toLowerCase();\n    const words = text.split(/\\s+/);\n    const uppercaseCount = words.filter((w) =>\n      w === w.toUpperCase() && w.length > 1\n    ).length;\n\n    const spamKeywords = [\n      \"free\", \"win\", \"winner\", \"congratulations\", \"click here\",\n      \"limited offer\", \"act now\", \"exclusive deal\", \"buy now\",\n      \"guarantee\", \"no risk\", \"million dollars\", \"urgent\",\n      \"call now\", \"subscribe\", \"limited time\", \"bonus\",\n    ];\n\n    return {\n      wordCount: words.length,\n      uppercaseRatio: words.length > 0 ? uppercaseCount / words.length : 0,\n      exclamationCount: (text.match(/!/g) || []).length,\n      moneySymbolCount: (text.match(/[$€£¥]/g) || []).length,\n      urlCount: (text.match(/https?:\\/\\/[^\\s]+/g) || []).length,\n      spamKeywordCount: spamKeywords.filter((kw) => lower.includes(kw)).length,\n      containsFree: lower.includes(\"free\"),\n      containsGuarantee: lower.includes(\"guarantee\"),\n      containsWinner: lower.includes(\"winner\"),\n    };\n  }\n\n  predict(text: string): { isSpam: boolean; confidence: number } {\n    const features = this.extractFeatures(text);\n    let score = 0;\n\n    score += features.wordCount * this.featureWeights.wordCount;\n    score += features.uppercaseRatio * this.featureWeights.uppercaseRatio;\n    score += features.exclamationCount * this.featureWeights.exclamationCount;\n    score += features.moneySymbolCount * this.featureWeights.moneySymbolCount;\n    score += features.urlCount * this.featureWeights.urlCount;\n    score += features.spamKeywordCount * this.featureWeights.spamKeywordCount;\n    score += (features.containsFree ? 1 : 0) * this.featureWeights.containsFree;\n    score += (features.containsGuarantee ? 1 : 0) * this.featureWeights.containsGuarantee;\n    score += (features.containsWinner ? 1 : 0) * this.featureWeights.containsWinner;\n\n    const probability = 1 / (1 + Math.exp(-score));\n\n    return {\n      isSpam: probability > this.threshold,\n      confidence: probability,\n    };\n  }\n\n  predictBatch(texts: string[]): Array<{ isSpam: boolean; confidence: number }> {\n    return texts.map((t) => this.predict(t));\n  }\n}\n\nclass SentimentAnalyzer {\n  private classifier: TextClassifier;\n\n  constructor() {\n    this.classifier = new TextClassifier(\"tfidf\");\n    const trainingData = [\n      { text: \"This movie was amazing and wonderful\", label: \"positive\" },\n      { text: \"I loved this product, it works great\", label: \"positive\" },\n      { text: \"Excellent service and fast delivery\", label: \"positive\" },\n      { text: \"The experience was fantastic\", label: \"positive\" },\n      { text: \"This is terrible and awful\", label: \"negative\" },\n      { text: \"I hated this movie, waste of time\", label: \"negative\" },\n      { text: \"Poor quality, very disappointed\", label: \"negative\" },\n      { text: \"The worst purchase I ever made\", label: \"negative\" },\n    ];\n    this.classifier.train(trainingData);\n  }\n\n  analyze(text: string): {\n    sentiment: \"positive\" | \"negative\" | \"neutral\";\n    confidence: number;\n    scores: Record<string, number>;\n  } {\n    const result = this.classifier.predict(text);\n    const positiveWords = [\"good\", \"great\", \"amazing\", \"excellent\", \"love\", \"wonderful\", \"fantastic\"];\n    const negativeWords = [\"bad\", \"terrible\", \"awful\", \"hate\", \"worst\", \"poor\", \"disappointed\"];\n\n    const tokens = text.toLowerCase().split(/\\s+/);\n    let posScore = tokens.filter((t) => positiveWords.includes(t)).length;\n    let negScore = tokens.filter((t) => negativeWords.includes(t)).length;\n    const total = posScore + negScore;\n    const sentiment = total === 0 ? \"neutral\" : posScore > negScore ? \"positive\" : \"negative\";\n\n    const scores = {\n      positive: (total > 0 ? posScore / total : 0) * result.confidence,\n      negative: (total > 0 ? negScore / total : 0) * result.confidence,\n      neutral: total === 0 ? 1.0 : 1 - Math.abs(posScore - negScore) / total,\n    };\n\n    return { sentiment, confidence: result.confidence, scores };\n  }\n\n  // LIME-style explanation\n  explain(text: string): Array<{ feature: string; weight: number }> {\n    const words = text.split(/\\s+/);\n    const baseScore = this.analyze(text);\n    const explanations: Array<{ feature: string; weight: number }> = [];\n\n    for (const word of words) {\n      const without = text.replace(word, \"\");\n      const score = this.analyze(without);\n      const weight = baseScore.confidence - score.confidence;\n      explanations.push({ feature: word, weight: Math.round(weight * 100) / 100 });\n    }\n\n    explanations.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));\n    return explanations.slice(0, 5);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production sentiment systems use BERT fine-tuned on domain data, achieving 95%+ accuracy. LIME and SHAP provide word-level explanations for model decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NLP applications span text classification, named entity recognition, question answering, summarization, and machine translation. Text classification assigns categories to documents using encoder-based models fine-tuned on labeled examples. Named entity recognition identifies entities like persons,.\norganizations, and locations using token-level classification heads. Question answering extracts answer spans from context passages using SQuAD-style fine-tuning. Summarization generates concise versions of longer texts using encoder-decoder models with beam search decoding. Machine translation translates between languages using sequence-to-sequence architectures. Sentiment analysis and.\nspam detection apply classification at document or sentence level, often using lightweight models distilled from larger transformers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune BERT/DistilBERT for classification tasks; use TF-IDF + LR as a strong baseline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NER requires IOB tagging format; BiLSTM-CRF or BERT token classification are the standard approaches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extractive QA selects spans; abstractive QA generates new text; RAG combines retrieval with generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extractive summarization (TextRank) is fast and factual; abstractive (BART/T5) is more fluent but can hallucinate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Machine translation requires large parallel corpora; BPE tokenization is critical for handling rare words"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spam detection benefits from feature engineering (URL counts, keyword presence) and BERT fine-tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sentiment analysis should handle negation (\"not good\" = negative), aspect-level detection, and sarcasm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always evaluate with appropriate metrics: F1 for classification, ROUGE for summarization, BLEU for translation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the IOB tagging scheme for NER?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IOB (Inside-Outside-Beginning) tags each token with one of three prefixes: B- (Beginning of an entity), I- (Inside/continuation of an entity), O (Outside/no entity). For.\nexample, \"Barack Obama was born in Hawaii\" is tagged as [B-PER, I-PER, O, O, O, B-LOC]. The B tag marks the first token of a multi-token entity. I tags continue the same entity type. O means no entity. Constraints enforced by CRF: B-PER can be followed by I-PER or.\nO (not I-ORG). This scheme handles nested entities poorly (a variant called BIOES adds E=End and S=Single). Most NER datasets (CoNLL-2003,.\nOntoNotes) use the IOB or BIOES format."
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
      "data-qid": "nlp08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does BERT handle extractive question answering?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For extractive QA (SQuAD), BERT takes the input [CLS] question [SEP] context [SEP]. Two vectors S and E (size d_model) are learned. For.\neach position i, the start score = S^T * h_i and end score = E^T * h_i, where h_i is BERT's hidden state at position i. The answer span (i,j) is selected by maximizing S^T·h_i + E^T·h_j subject to 0 ≤ i ≤ j < length and.\nj-i+1 ≤ max_answer_length (typically 30). During training, cross-entropy loss is computed for start and end positions independently. BERT-base achieves 88.5 F1 on SQuAD 1.1. For.\nSQuAD 2.0 (unanswerable questions), a no-answer score is added as an additional learnable vector."
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
      "data-qid": "nlp08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between extractive and abstractive summarization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extractive summarization selects existing sentences from the source document and concatenates them. It uses sentence scoring methods like TextRank (graph-based PageRank on sentence similarity) or.\nTF-IDF centroid selection. Pros: factual (no hallucination), grammatically perfect sentences. Cons: may not capture the essence, redundant, lack of coherence between selected sentences. Abstractive summarization generates new sentences that may not appear in the source,.\nusing seq2seq models (BART, T5, Pegasus). Pros: more fluent, concise, can paraphrase. Cons: can hallucinate facts, requires more training data. Modern systems (BART) achieve ROUGE-L of 40+ on CNN/DailyMail. Hybrid approaches extract key sentences then rewrite them abstractively."
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
      "data-qid": "nlp08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does BLEU score work for machine translation evaluation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BLEU (Bilingual Evaluation Understudy) compares n-gram overlap between machine-translated text (hypothesis) and human translations (references). It computes precision for unigrams, bigrams,.\ntrigrams, and 4-grams, then averages them geometrically. A brevity penalty (BP) is applied: if the hypothesis is shorter than the reference,.\nBLEU is penalized. BLEU = BP * exp(∑_{n=1}^{4} w_n * log p_n) where p_n is n-gram precision and w_n = 0.25. Score range: 0-100. Human-level translation is ~40-60 BLEU. BLEU correlates reasonably with human judgment at the corpus level but.\nis unreliable for individual sentences. Limitations: ignores meaning, prefers surface form matching, doesn't handle synonyms."
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
      "data-qid": "nlp08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you build a spam detection system for emails?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Steps: (1) Collect labeled data (spam/ham emails). (2) Feature engineering: word count, uppercase ratio, exclamation/money symbol counts, URL count, presence of spam keywords (\"free\",.\n\"winner\", \"guarantee\"), email header analysis (SPF, DKIM). (3) Train a classifier: logistic regression with TF-IDF features is a strong baseline reaching 95%+ accuracy. (4) Advanced: fine-tune BERT/DistilBERT on email text,.\nachieving 99%+ accuracy. (5) Handle imbalanced data: use weighted loss or oversampling (spam is typically 20% of emails). (6) Deployment: use streaming classification with regular model updates. (7) Evaluation: precision matters more than recall for.\nspam (false positives = lost emails)."
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
      "data-qid": "nlp08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is Retrieval-Augmented Generation (RAG)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG combines a retriever (e.g., Dense Passage Retriever, BM25) with a generator (e.g., BART, T5, LLaMA). Given a query, the retriever fetches the top-k relevant documents from a knowledge base. The generator.\nconditions on both the query and the retrieved documents to produce an answer. This allows the system to access up-to-date or.\ndomain-specific knowledge without retraining. RAG reduces hallucination compared to pure generation because the model has factual grounding. Variants: RAG-Sequence (retrieved docs used across all tokens) and.\nRAG-Token (different docs per token). RAG with BART-base achieves state-of-the-art results on open-domain QA (Natural Questions, TriviaQA). Modern RAG systems use vector.\ndatabases (FAISS, Pinecone) for billion-scale retrieval."
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
      "data-qid": "nlp08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle aspect-based sentiment analysis?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aspect-based sentiment identifies sentiment toward specific aspects/features. Example: \"The food was great but the service was slow\" → food: positive, service: negative. Approaches: (1) Pipeline: first extract aspects (NER-style),.\nthen classify sentiment per aspect. (2) Joint models: BERT with aspect embeddings — concatenate aspect with sentence and classify. (3) Sequence labeling with sentiment tags: label each token with aspect-sentiment (e.g.,.\nB-FOOD-POS, I-FOOD-POS). (4) Span-based: predict aspect and sentiment spans together. The SemEval ABSA datasets are standard benchmarks. Fine-tuned BERT with aspect-specific attention achieves 90%+ accuracy on laptop/restaurant reviews."
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
      "data-qid": "nlp08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does TextRank work for extractive summarization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TextRank is a graph-based algorithm adapted from PageRank. Sentences are nodes, and edges represent sentence similarity (typically cosine similarity of TF-IDF vectors or.\nword overlap Jaccard index). The PageRank algorithm iteratively computes sentence importance: each sentence's score is redistributed to connected sentences. After convergence (typically 20-50 iterations),.\ntop-k sentences by score are selected. The damping factor d=0.85 controls the probability of random jumps. Selected sentences are ordered by their original position in the document (not by score). Variants include using BERT embeddings for.\nsimilarity and adding positional bias (first sentences often contain topic information). TextRank works well for news articles but less so for.\nhighly-structured documents."
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
      "data-qid": "nlp08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What challenges arise in low-resource machine translation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Low-resource languages face: (1) Limited parallel data — <10M sentence pairs. (2) Morphological complexity — Turkish, Finnish, Hungarian have rich inflection. (3) Domain mismatch — available parallel data may be religious/legal text,.\nnot conversational. (4) No standard tokenization — SentencePiece/BPE must be trained on small data. Mitigations: (1) Transfer learning — pre-train on high-resource,.\nfine-tune on low-resource. (2) Back-translation — translate target-side monolingual data to source, add synthetic pairs. (3) Multilingual models — mBART, M2M-100 share parameters across 100+ languages,.\nimproving low-resource via cross-lingual transfer. (4) Unsupervised NMT — cross-lingual embeddings + denoising autoencoders. (5) Data augmentation — code-switching, word replacement."
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
      "data-qid": "nlp08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you evaluate a text classification model beyond accuracy?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Beyond accuracy: (1) Precision, Recall, F1-score — essential for imbalanced datasets. Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = 2*P*R/(P+R). (2) Confusion matrix — shows which classes are confused. (3) Macro vs micro vs weighted F1: macro averages per-class F1 equally,.\nmicro counts global TP/FP/FN, weighted averages by class support. (4) ROC-AUC — tradeoff between TPR and FPR across thresholds. (5) Log-loss — probabilistic measure of uncertainty. (6) Calibration curve — does 90% predicted probability correspond to 90% actual accuracy? (7) Per-class metrics — rare classes often perform worse. (8) Error.\nanalysis — manually inspect misclassifications to identify patterns (annotation errors, ambiguous cases, missing features)."
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
      children: "Q1: What does the B- prefix mean in IOB tagging?\na) Best entity\nb) Beginning of entity\nc) Background token\nd) Binary label"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Beginning of entity"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The B- prefix marks the first token of a multi-token entity. I- marks continuations, and O marks non-entity tokens."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q2: Which metric is standard for machine translation evaluation?\na) F1\nb) ROUGE\nc) BLEU\nd) Perplexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) BLEU"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BLEU (Bilingual Evaluation Understudy) measures n-gram overlap between machine and human translations, with a brevity penalty."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q3: What is the main risk of abstractive summarization?\na) Slow inference\nb) Hallucination\nc) Need for large vocabulary\nd) Poor grammar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Hallucination"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Abstractive models can generate factual errors or information not present in the source document (hallucination). Extractive models are inherently factual."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q4: What does RAG stand for?\na) Recurrent Attention Graph\nb) Retrieval-Augmented Generation\nc) Random Access Gradient\nd) Rapid Autoencoder Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Retrieval-Augmented Generation"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG combines a document retriever with a text generator to ground answers in retrieved knowledge, reducing hallucination."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q5: Which algorithm is used for extractive summarization with sentence graphs?\na) PageRank (TextRank)\nb) K-means\nc) Naive Bayes\nd) PCA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) PageRank (TextRank)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "TextRank applies the PageRank algorithm to a sentence similarity graph, scoring and selecting the most important sentences."
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
        }), " — Build a TF-IDF + Logistic Regression classifier for the 20 Newsgroups dataset. Report F1 per category."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a simple NER system using regex patterns to extract emails, phone numbers, and URLs from text."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Fine-tune DistilBERT for sentiment analysis on the IMDB dataset. Compare accuracy, precision, recall, and F1 with the TF-IDF baseline."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build an extractive QA system using BERT (SQuAD format). Evaluate F1 and EM scores on a subset of SQuAD 2.0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a RAG system: use BM25 or TF-IDF as the retriever and a BART model as the generator. Compare end-to-end QA accuracy on Natural Questions against a BERT-only extractive QA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
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
            children: "Explain the core idea of NLP Applications — Text Classification, NER, QA, Summarization, Translation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates NLP Applications — Text Classification, NER, QA, Summarization, Translation."
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
            children: "Describe a production bug caused by misunderstanding NLP Applications — Text Classification, NER, QA, Summarization, Translation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on NLP Applications — Text Classification, NER, QA, Summarization, Translation from 10 users to 10 million?"
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
            children: "Compare NLP Applications — Text Classification, NER, QA, Summarization, Translation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on NLP Applications — Text Classification, NER, QA, Summarization, Translation."
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
            children: "How does NLP Applications — Text Classification, NER, QA, Summarization, Translation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of NLP Applications — Text Classification, NER, QA, Summarization, Translation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of NLP Applications — Text Classification, NER, QA, Summarization, Translation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name NLP Applications — Text Classification, NER, QA, Summarization, Translation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using NLP Applications — Text Classification, NER, QA, Summarization, Translation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies NLP Applications — Text Classification, NER, QA, Summarization, Translation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside NLP Applications — Text Classification, NER, QA, Summarization, Translation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of NLP Applications — Text Classification, NER, QA, Summarization, Translation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a NLP Applications — Text Classification, NER, QA, Summarization, Translation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic NLP Applications — Text Classification, NER, QA, Summarization, Translation interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply NLP Applications — Text Classification, NER, QA, Summarization, Translation in production today?"
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
        }), " NLP Applications — Text Classification, NER, QA, Summarization, Translation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for NLP Applications — Text Classification, NER, QA, Summarization, Translation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for NLP Applications — Text Classification, NER, QA, Summarization, Translation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for NLP Applications — Text Classification, NER, QA, Summarization, Translation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the NLP Applications — Text Classification, NER, QA, Summarization, Translation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers NLP Applications — Text Classification, NER, QA, Summarization, Translation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to NLP Applications — Text Classification, NER, QA, Summarization, Translation is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing NLP Applications — Text Classification, NER, QA, Summarization, Translation is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug NLP Applications — Text Classification, NER, QA, Summarization, Translation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to NLP Applications — Text Classification, NER, QA, Summarization, Translation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving NLP Applications — Text Classification, NER, QA, Summarization, Translation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of NLP Applications — Text Classification, NER, QA, Summarization, Translation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain NLP Applications — Text Classification, NER, QA, Summarization, Translation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for NLP Applications — Text Classification, NER, QA, Summarization, Translation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of NLP Applications — Text Classification, NER, QA, Summarization, Translation on an empty input?"
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
            children: "Complete Medium exercises, explain NLP Applications — Text Classification, NER, QA, Summarization, Translation to someone else"
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
        children: "Always write a one-line example of NLP Applications — Text Classification, NER, QA, Summarization, Translation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered NLP Applications — Text Classification, NER, QA, Summarization, Translation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining NLP Applications — Text Classification, NER, QA, Summarization, Translation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own NLP Applications — Text Classification, NER, QA, Summarization, Translation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of NLP Applications — Text Classification, NER, QA, Summarization, Translation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link NLP Applications — Text Classification, NER, QA, Summarization, Translation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of NLP Applications — Text Classification, NER, QA, Summarization, Translation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain NLP Applications — Text Classification, NER, QA, Summarization, Translation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of NLP Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on NLP Applications — Text Classification, NER, QA, Summarization, Translation (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real NLP Applications — Text Classification, NER, QA, Summarization, Translation problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements NLP Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for NLP Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on NLP Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how NLP Applications — Text Classification, NER, QA, Summarization, Translation fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how NLP Applications — Text Classification, NER, QA, Summarization, Translation is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where NLP Applications — Text Classification, NER, QA, Summarization, Translation is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of NLP Applications — Text Classification, NER, QA, Summarization, Translation, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is NLP Applications — Text Classification, NER, QA, Summarization, Translation asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with NLP Applications — Text Classification, NER, QA, Summarization, Translation."
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
        children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for NLP Applications — Text Classification, NER, QA, Summarization, Translation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about NLP Applications — Text Classification, NER, QA, Summarization, Translation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around NLP Applications — Text Classification, NER, QA, Summarization, Translation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing NLP Applications — Text Classification, NER, QA, Summarization, Translation."
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
        children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding NLP Applications — Text Classification, NER, QA, Summarization, Translation helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the NLP Applications — Text Classification, NER, QA, Summarization, Translation concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, NLP Applications — Text Classification, NER, QA, Summarization, Translation skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply NLP Applications — Text Classification, NER, QA, Summarization, Translation to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation is like a recipe"
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
        }), " — this chapter contributes the NLP Applications — Text Classification, NER, QA, Summarization, Translation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-08nlpapplications-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of NLP Applications — Text Classification, NER, QA, Summarization, Translation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-08nlpapplications-flash2",
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
      "data-qid": "10nlptransformers-08nlpapplications-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard NLP Applications — Text Classification, NER, QA, Summarization, Translation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-08nlpapplications-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is NLP Applications — Text Classification, NER, QA, Summarization, Translation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-08nlpapplications-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is NLP Applications — Text Classification, NER, QA, Summarization, Translation applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for NLP Applications — Text Classification, NER, QA, Summarization, Translation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing NLP Applications — Text Classification, NER, QA, Summarization, Translation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for NLP Applications — Text Classification, NER, QA, Summarization, Translation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running NLP Applications — Text Classification, NER, QA, Summarization, Translation in production at scale"
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
        children: "Testing: pytest for unit tests of NLP Applications — Text Classification, NER, QA, Summarization, Translation code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on NLP Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in NLP Applications — Text Classification, NER, QA, Summarization, Translation code."]
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
        }), " or your IDE's debugger to step through the NLP Applications — Text Classification, NER, QA, Summarization, Translation example code."]
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
        children: "Explain NLP Applications — Text Classification, NER, QA, Summarization, Translation in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of NLP Applications — Text Classification, NER, QA, Summarization, Translation."
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
        children: "Tell me about a time you debugged a NLP Applications — Text Classification, NER, QA, Summarization, Translation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where NLP Applications — Text Classification, NER, QA, Summarization, Translation is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for NLP Applications — Text Classification, NER, QA, Summarization, Translation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core NLP Applications — Text Classification, NER, QA, Summarization, Translation logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain NLP Applications — Text Classification, NER, QA, Summarization, Translation without notes"
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
        }), ": a small team uses NLP Applications — Text Classification, NER, QA, Summarization, Translation daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": NLP Applications — Text Classification, NER, QA, Summarization, Translation patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": NLP Applications — Text Classification, NER, QA, Summarization, Translation principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": NLP Applications — Text Classification, NER, QA, Summarization, Translation shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect NLP Applications — Text Classification, NER, QA, Summarization, Translation to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NLP Applications — Text Classification, NER, QA, Summarization, Translation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of NLP Applications — Text Classification, NER, QA, Summarization, Translation depends on input size and distribution — always benchmark for your own data."
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