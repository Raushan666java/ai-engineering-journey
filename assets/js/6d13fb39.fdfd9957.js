"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8461],{

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
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_08_nlp_applications_md_6d1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/08-nlp-applications","title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/08-nlp-applications.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":145,"frontMatter":{"id":"08-nlp-applications","slug":"/ai-engineering-placement/10-nlp-transformers/08-nlp-applications","title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","sidebar_label":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","sidebar_position":145},"sidebar":"placementSidebar","previous":{"title":"Hugging Face Ecosystem — Transformers, Pipelines, Datasets, Tokenizers","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/07-hugging-face-ecosystem"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/visual-notes"}}');
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
	sidebar_position: 145
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
      id: "key-terminology",
      children: "Key Terminology"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Input Text] --> B{Application Type}\r\n    B -->|Classification| C[BERT Classifier]\r\n    B -->|NER| D[Token Classifier]\r\n    B -->|QA| E[Span Predictor]\r\n    B -->|Summarization| F[Seq2Seq Model]\r\n    B -->|Translation| G[Encoder-Decoder]\r\n    B -->|Spam| H[FastText / BERT]\r\n    C --> I[Label Output]\r\n    D --> J[Entity Tags]\r\n    E --> K[Answer Span]\r\n    F --> L[Summary Text]\r\n    G --> M[Translated Text]\r\n    H --> N[Spam/Ham Label]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-text-classification",
      children: "8.1 Text Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text classification assigns a label (or multiple labels) to a document. Approaches range from simple TF-IDF + logistic regression to fine-tuned BERT."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TextClassifier {\r\n  private model: any; // BERT or TF-IDF + LR\r\n  private method: \"tfidf\" | \"bert\";\r\n  private classes: string[] = [];\r\n  private vectorizer: TfidfVectorizer | null = null;\r\n  private weights: number[][] = [];\r\n  private bias: number[] = [];\r\n\r\n  constructor(method: \"tfidf\" | \"bert\" = \"bert\") {\r\n    this.method = method;\r\n  }\r\n\r\n  train(samples: Array<{ text: string; label: string }>): void {\r\n    const uniqueLabels = [...new Set(samples.map((s) => s.label))];\r\n    this.classes = uniqueLabels;\r\n    const numClasses = uniqueLabels.length;\r\n    const labelToIdx = new Map(uniqueLabels.map((l, i) => [l, i]));\r\n    const labels = samples.map((s) => labelToIdx.get(s.label)!);\r\n\r\n    if (this.method === \"tfidf\") {\r\n      this.trainTfidf(samples.map((s) => s.text), labels, numClasses);\r\n    } else {\r\n      this.trainBert(samples, labels);\r\n    }\r\n  }\r\n\r\n  private trainTfidf(texts: string[], labels: number[], numClasses: number): void {\r\n    this.vectorizer = new TfidfVectorizer(5000);\r\n    this.vectorizer.fit(texts);\r\n    const X = this.vectorizer.transform(texts);\r\n    const n = X.length;\r\n    const dim = X[0].length;\r\n\r\n    // One-vs-rest logistic regression\r\n    this.weights = Array.from({ length: numClasses }, (_, c) => {\r\n      const binaryLabels = labels.map((l) => (l === c ? 1 : 0));\r\n      // Simplified SGD training\r\n      const w = new Array(dim).fill(0);\r\n      for (let epoch = 0; epoch < 100; epoch++) {\r\n        for (let i = 0; i < n; i++) {\r\n          const dot = X[i].reduce((s, v, j) => s + v * w[j], 0);\r\n          const sigmoid = 1 / (1 + Math.exp(-dot));\r\n          const error = sigmoid - binaryLabels[i];\r\n          for (let j = 0; j < dim; j++) {\r\n            w[j] -= 0.01 * error * X[i][j];\r\n          }\r\n        }\r\n      }\r\n      return w;\r\n    });\r\n    this.bias = new Array(numClasses).fill(0);\r\n  }\r\n\r\n  private trainBert(samples: Array<{ text: string; label: string }>, labels: number[]): void {\r\n    // Simulate BERT fine-tuning\r\n    console.log(\"Fine-tuning BERT for classification...\");\r\n    this.weights = Array.from({ length: this.classes.length }, () =>\r\n      Array.from({ length: 768 }, () => (Math.random() - 0.5) * 0.01)\r\n    );\r\n    this.bias = new Array(this.classes.length).fill(0);\r\n  }\r\n\r\n  predict(text: string): { label: string; confidence: number } {\r\n    if (this.method === \"tfidf\" && this.vectorizer) {\r\n      const X = this.vectorizer.transform([text]);\r\n      const scores = this.weights.map((w, c) => {\r\n        let sum = this.bias[c];\r\n        for (let j = 0; j < X[0].length; j++) sum += w[j] * X[0][j];\r\n        return sum;\r\n      });\r\n      const maxIdx = scores.indexOf(Math.max(...scores));\r\n      const probs = this.softmax(scores);\r\n      return {\r\n        label: this.classes[maxIdx],\r\n        confidence: probs[maxIdx],\r\n      };\r\n    } else {\r\n      // BERT prediction (simplified)\r\n      const scores = this.weights.map((w) =>\r\n        w.reduce((s, v) => s + v * (text.length % 10), 0)\r\n      );\r\n      const maxIdx = scores.indexOf(Math.max(...scores));\r\n      const probs = this.softmax(scores);\r\n      return {\r\n        label: this.classes[maxIdx],\r\n        confidence: probs[maxIdx],\r\n      };\r\n    }\r\n  }\r\n\r\n  predictBatch(texts: string[]): Array<{ label: string; confidence: number }> {\r\n    return texts.map((t) => this.predict(t));\r\n  }\r\n\r\n  private softmax(scores: number[]): number[] {\r\n    const max = Math.max(...scores);\r\n    const exp = scores.map((s) => Math.exp(s - max));\r\n    const sum = exp.reduce((a, b) => a + b, 0);\r\n    return exp.map((e) => e / sum);\r\n  }\r\n}\r\n\r\nclass MultiLabelClassifier {\r\n  private classifiers: Map<string, TextClassifier> = new Map();\r\n  private labels: string[] = [];\r\n\r\n  train(samples: Array<{ text: string; labels: string[] }>): void {\r\n    const allLabels = new Set<string>();\r\n    samples.forEach((s) => s.labels.forEach((l) => allLabels.add(l)));\r\n    this.labels = [...allLabels];\r\n\r\n    for (const label of this.labels) {\r\n      const binarySamples = samples.map((s) => ({\r\n        text: s.text,\r\n        label: s.labels.includes(label) ? label : \"__other__\",\r\n      }));\r\n      const classifier = new TextClassifier(\"tfidf\");\r\n      classifier.train(binarySamples);\r\n      this.classifiers.set(label, classifier);\r\n    }\r\n  }\r\n\r\n  predict(text: string): string[] {\r\n    const predictions: string[] = [];\r\n    for (const [label, classifier] of this.classifiers) {\r\n      const result = classifier.predict(text);\r\n      if (result.label === label && result.confidence > 0.5) {\r\n        predictions.push(label);\r\n      }\r\n    }\r\n    return predictions;\r\n  }\r\n}\n"
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
        children: "interface NEREntity {\r\n  text: string;\r\n  label: string;\r\n  start: number;\r\n  end: number;\r\n  confidence: number;\r\n}\r\n\r\nclass NERTagger {\r\n  private static IOB_LABELS = [\r\n    \"O\", \"B-PER\", \"I-PER\", \"B-ORG\", \"I-ORG\",\r\n    \"B-LOC\", \"I-LOC\", \"B-DATE\", \"I-DATE\", \"B-MISC\", \"I-MISC\",\r\n  ] as const;\r\n\r\n  private numLabels = NERTagger.IOB_LABELS.length;\r\n  private model: any; // BERT token classifier\r\n\r\n  constructor() {\r\n    // Initialize with pre-trained weights\r\n    console.log(\"Loading NER model...\");\r\n  }\r\n\r\n  private iobEncode(labels: string[]): string[] {\r\n    const iob: string[] = [];\r\n    let prevLabel = \"O\";\r\n    for (const label of labels) {\r\n      if (label === \"O\") {\r\n        iob.push(\"O\");\r\n        prevLabel = \"O\";\r\n      } else {\r\n        if (prevLabel !== label) {\r\n          iob.push(`B-${label}`);\r\n        } else {\r\n          iob.push(`I-${label}`);\r\n        }\r\n        prevLabel = label;\r\n      }\r\n    }\r\n    return iob;\r\n  }\r\n\r\n  private iobDecode(tokens: string[], iobTags: string[]): NEREntity[] {\r\n    const entities: NEREntity[] = [];\r\n    let currentEntity: { text: string; label: string; start: number } | null = null;\r\n    let tokenStart = 0;\r\n\r\n    for (let i = 0; i < tokens.length; i++) {\r\n      const tag = iobTags[i];\r\n      const token = tokens[i];\r\n\r\n      if (tag.startsWith(\"B-\")) {\r\n        if (currentEntity) {\r\n          entities.push({\r\n            text: currentEntity.text,\r\n            label: currentEntity.label,\r\n            start: currentEntity.start,\r\n            end: tokenStart - 1,\r\n            confidence: 0.95,\r\n          });\r\n        }\r\n        currentEntity = {\r\n          text: token,\r\n          label: tag.substring(2),\r\n          start: tokenStart,\r\n        };\r\n      } else if (tag.startsWith(\"I-\")) {\r\n        if (\r\n          currentEntity &&\r\n          currentEntity.label === tag.substring(2)\r\n        ) {\r\n          currentEntity.text += \" \" + token;\r\n        }\r\n      } else {\r\n        if (currentEntity) {\r\n          entities.push({\r\n            text: currentEntity.text,\r\n            label: currentEntity.label,\r\n            start: currentEntity.start,\r\n            end: tokenStart + token.length - 1,\r\n            confidence: 0.95,\r\n          });\r\n          currentEntity = null;\r\n        }\r\n      }\r\n      tokenStart += token.length + 1;\r\n    }\r\n\r\n    if (currentEntity) {\r\n      entities.push({\r\n        text: currentEntity.text,\r\n        label: currentEntity.label,\r\n        start: currentEntity.start,\r\n        end: tokenStart > 0 ? tokenStart - 1 : 0,\r\n        confidence: 0.95,\r\n      });\r\n    }\r\n\r\n    return entities;\r\n  }\r\n\r\n  extractEntities(text: string): NEREntity[] {\r\n    const tokens = text.split(/\\s+/);\r\n\r\n    // Simulate BERT NER predictions\r\n    const iobTags = tokens.map((token) => {\r\n      const rand = Math.random();\r\n      if (rand > 0.9) return \"B-PER\";\r\n      if (rand > 0.85) return \"I-PER\";\r\n      if (rand > 0.8) return \"B-ORG\";\r\n      if (rand > 0.75) return \"I-ORG\";\r\n      if (rand > 0.7) return \"B-LOC\";\r\n      if (rand > 0.65) return \"I-LOC\";\r\n      return \"O\";\r\n    });\r\n\r\n    return this.iobDecode(tokens, iobTags);\r\n  }\r\n\r\n  // BiLSTM-CRF alternative\r\n  extractWithCRF(text: string): NEREntity[] {\r\n    // CRF adds transition constraints (e.g., B-PER cannot follow I-ORG)\r\n    // Viterbi decoding finds the most likely tag sequence\r\n    const tokens = text.split(/\\s+/);\r\n    const emissionScores = tokens.map(() =>\r\n      this.numLabels.map(() => Math.random() - 0.5)\r\n    );\r\n\r\n    // Transition matrix (simplified valid transitions)\r\n    const transScores: number[][] = Array.from({ length: this.numLabels }, () =>\r\n      new Array(this.numLabels).fill(-1000)\r\n    );\r\n\r\n    // Allow: O -> any B, B-X -> I-X or O, I-X -> I-X or O\r\n    for (let i = 0; i < this.numLabels; i++) {\r\n      transScores[0][i] = 0; // O -> any\r\n      const label = NERTagger.IOB_LABELS[i];\r\n      if (label.startsWith(\"B-\") || label === \"O\") {\r\n        for (let j = 0; j < this.numLabels; j++) {\r\n          if (NERTagger.IOB_LABELS[j] === \"O\") transScores[i][j] = 0;\r\n          if (NERTagger.IOB_LABELS[j] === `I-${label.substring(2)}`) transScores[i][j] = 0;\r\n        }\r\n      }\r\n      if (label.startsWith(\"I-\")) {\r\n        for (let j = 0; j < this.numLabels; j++) {\r\n          if (NERTagger.IOB_LABELS[j] === \"O\") transScores[i][j] = 0;\r\n          if (NERTagger.IOB_LABELS[j] === `I-${label.substring(2)}`) transScores[i][j] = 0;\r\n          if (NERTagger.IOB_LABELS[j] === `B-${label.substring(2)}`) transScores[i][j] = 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    // Viterbi decoding (simplified)\r\n    const bestTags = tokens.map(() => {\r\n      const scores = emissionScores[0].map((_, i) => transScores[0][i]);\r\n      const maxIdx = scores.indexOf(Math.max(...scores));\r\n      return NERTagger.IOB_LABELS[maxIdx];\r\n    });\r\n\r\n    return this.iobDecode(tokens, bestTags);\r\n  }\r\n}\n"
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
        children: "interface QAInput {\r\n  question: string;\r\n  context?: string; // for extractive QA\r\n}\r\n\r\ninterface QAOutput {\r\n  answer: string;\r\n  confidence: number;\r\n  start?: number;\r\n  end?: number;\r\n  supportingFacts?: string[];\r\n}\r\n\r\nclass QuestionAnsweringSystem {\r\n  private method: \"extractive\" | \"abstractive\" | \"hybrid\";\r\n\r\n  constructor(method: \"extractive\" | \"abstractive\" | \"hybrid\" = \"hybrid\") {\r\n    this.method = method;\r\n  }\r\n\r\n  answer(input: QAInput): QAOutput {\r\n    switch (this.method) {\r\n      case \"extractive\":\r\n        return this.extractiveQA(input.question, input.context || \"\");\r\n      case \"abstractive\":\r\n        return this.abstractiveQA(input.question);\r\n      case \"hybrid\":\r\n        return this.hybridQA(input.question, input.context || \"\");\r\n    }\r\n  }\r\n\r\n  private extractiveQA(question: string, context: string): QAOutput {\r\n    // Step 1: Identify the best sentence (retrieval)\r\n    const sentences = context.split(/[.!?]+/).filter((s) => s.trim().length > 0);\r\n    const qTokens = new Set(question.toLowerCase().split(/\\s+/));\r\n\r\n    let bestSentence = \"\";\r\n    let bestOverlap = 0;\r\n    for (const sentence of sentences) {\r\n      const sTokens = sentence.toLowerCase().split(/\\s+/);\r\n      const overlap = sTokens.filter((t) => qTokens.has(t)).length;\r\n      if (overlap > bestOverlap) {\r\n        bestOverlap = overlap;\r\n        bestSentence = sentence.trim();\r\n      }\r\n    }\r\n\r\n    // Step 2: Identify start and end span within the sentence (simplified)\r\n    const sLower = bestSentence.toLowerCase();\r\n    const qLower = question.toLowerCase();\r\n\r\n    // Find position where question words overlap with sentence\r\n    let bestStart = 0;\r\n    let bestEnd = bestSentence.length;\r\n    let bestScore = 0;\r\n\r\n    for (let i = 0; i < bestSentence.length; i++) {\r\n      for (let j = i + 1; j <= Math.min(i + 100, bestSentence.length); j++) {\r\n        const span = sLower.substring(i, j);\r\n        const spanTokens = span.split(/\\s+/);\r\n        const overlap = spanTokens.filter((t) => qTokens.has(t)).length;\r\n        const score = overlap - (j - i) * 0.01; // prefer shorter spans\r\n        if (score > bestScore) {\r\n          bestScore = score;\r\n          bestStart = i;\r\n          bestEnd = j;\r\n        }\r\n      }\r\n    }\r\n\r\n    const answer = bestSentence.substring(bestStart, bestEnd).trim();\r\n\r\n    return {\r\n      answer: answer || \"No answer found.\",\r\n      confidence: bestScore > 0 ? 0.7 + Math.random() * 0.2 : 0.3,\r\n      start: bestStart,\r\n      end: bestEnd,\r\n    };\r\n  }\r\n\r\n  private abstractiveQA(question: string): QAOutput {\r\n    // Abstractive QA generates answer from parametric knowledge\r\n    // (knowledge stored in model weights)\r\n    const knowledge: Record<string, string> = {\r\n      \"who invented the transformer\":\r\n        \"The Transformer was introduced by Vaswani et al. in the 2017 paper 'Attention is All You Need'.\",\r\n      \"what is the capital of france\":\r\n        \"The capital of France is Paris, located in the north-central part of the country.\",\r\n      \"what is nlp\":\r\n        \"Natural language processing (NLP) is a subfield of AI focused on enabling computers to understand, interpret, and generate human language.\",\r\n    };\r\n\r\n    const qLower = question.toLowerCase();\r\n    for (const [key, value] of Object.entries(knowledge)) {\r\n      if (qLower.includes(key) || key.includes(qLower.split(\" \").slice(0, 3).join(\" \"))) {\r\n        return {\r\n          answer: value,\r\n          confidence: 0.9,\r\n        };\r\n      }\r\n    }\r\n\r\n    return {\r\n      answer: \"I don't have knowledge about that specific question.\",\r\n      confidence: 0.1,\r\n    };\r\n  }\r\n\r\n  private hybridQA(question: string, context: string): QAOutput {\r\n    // First try extractive, fall back to abstractive\r\n    const extractive = this.extractiveQA(question, context);\r\n    if (extractive.confidence > 0.6 && extractive.answer !== \"No answer found.\") {\r\n      return extractive;\r\n    }\r\n    const abstractive = this.abstractiveQA(question);\r\n    return {\r\n      ...abstractive,\r\n      confidence: abstractive.confidence * 0.8,\r\n    };\r\n  }\r\n}\r\n\r\n// Retrieval-Augmented Generation (RAG)\r\nclass RAGSystem {\r\n  private documentStore: string[] = [];\r\n  private embedder: any;\r\n\r\n  constructor(documents: string[]) {\r\n    this.documentStore = documents;\r\n  }\r\n\r\n  retrieve(query: string, k = 3): string[] {\r\n    const qTokens = new Set(query.toLowerCase().split(/\\s+/));\r\n    const scored = this.documentStore.map((doc) => {\r\n      const dTokens = doc.toLowerCase().split(/\\s+/);\r\n      const overlap = dTokens.filter((t) => qTokens.has(t)).length;\r\n      return { doc, score: overlap / Math.max(dTokens.length, 1) };\r\n    });\r\n    scored.sort((a, b) => b.score - a.score);\r\n    return scored.slice(0, k).map((s) => s.doc);\r\n  }\r\n\r\n  generateAnswer(query: string, retrievedDocs: string[]): string {\r\n    // In production: concatenate retrieved docs with query and feed to T5/BART\r\n    const context = retrievedDocs.join(\" \");\r\n    // Simplified: return best matching sentence\r\n    const sentences = context.split(/[.!?]+/);\r\n    const qTokens = new Set(query.toLowerCase().split(/\\s+/));\r\n    let bestSentence = \"\";\r\n    let bestScore = 0;\r\n    for (const s of sentences) {\r\n      const sTokens = s.toLowerCase().split(/\\s+/);\r\n      const overlap = sTokens.filter((t) => qTokens.has(t)).length;\r\n      if (overlap > bestScore) {\r\n        bestScore = overlap;\r\n        bestSentence = s.trim();\r\n      }\r\n    }\r\n    return bestSentence || \"No answer found.\";\r\n  }\r\n}\n"
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
        children: "class ExtractiveSummarizer {\r\n  summarize(\r\n    text: string,\r\n    maxSentences = 3,\r\n    method: \"tfidf\" | \"textrank\" = \"textrank\"\r\n  ): string {\r\n    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];\r\n    if (sentences.length <= maxSentences) return text;\r\n\r\n    if (method === \"tfidf\") {\r\n      return this.tfidfSummarize(sentences, maxSentences);\r\n    }\r\n    return this.textRankSummarize(sentences, maxSentences);\r\n  }\r\n\r\n  private tfidfSummarize(sentences: string[], maxSents: number): string {\r\n    // Compute TF-IDF for each sentence\r\n    const terms = sentences.map((s) =>\r\n      s.toLowerCase().split(/\\s+/).filter((t) => t.length > 2)\r\n    );\r\n\r\n    // Document frequency\r\n    const df = new Map<string, number>();\r\n    for (const st of terms) {\r\n      const seen = new Set(st);\r\n      for (const t of seen) {\r\n        df.set(t, (df.get(t) || 0) + 1);\r\n      }\r\n    }\r\n\r\n    const n = sentences.length;\r\n    // Score each sentence by average TF-IDF\r\n    const scores = terms.map((st) => {\r\n      let score = 0;\r\n      for (const t of st) {\r\n        const tf = st.filter((w) => w === t).length / st.length;\r\n        const idf = Math.log(n / (df.get(t) || 1));\r\n        score += tf * idf;\r\n      }\r\n      return score / st.length;\r\n    });\r\n\r\n    const ranked = sentences\r\n      .map((s, i) => ({ sentence: s, score: scores[i] }))\r\n      .sort((a, b) => b.score - a.score);\r\n\r\n    return ranked\r\n      .slice(0, maxSents)\r\n      .sort((a, b) => sentences.indexOf(a.sentence) - sentences.indexOf(b.sentence))\r\n      .map((s) => s.sentence)\r\n      .join(\" \");\r\n  }\r\n\r\n  private textRankSummarize(sentences: string[], maxSents: number): string {\r\n    // TextRank: PageRank on sentence similarity graph\r\n    const n = sentences.length;\r\n\r\n    // Compute pairwise similarity matrix (word overlap)\r\n    const sim: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));\r\n    const sentTokens = sentences.map((s) => new Set(s.toLowerCase().split(/\\s+/)));\r\n\r\n    for (let i = 0; i < n; i++) {\r\n      for (let j = i + 1; j < n; j++) {\r\n        const intersection = [...sentTokens[i]].filter((t) => sentTokens[j].has(t)).length;\r\n        const union = new Set([...sentTokens[i], ...sentTokens[j]]).size;\r\n        sim[i][j] = sim[j][i] = union > 0 ? intersection / union : 0;\r\n      }\r\n    }\r\n\r\n    // PageRank iteration\r\n    const damping = 0.85;\r\n    let scores = new Array(n).fill(1 / n);\r\n\r\n    for (let iter = 0; iter < 50; iter++) {\r\n      const newScores = new Array(n).fill(0);\r\n      for (let i = 0; i < n; i++) {\r\n        let sum = 0;\r\n        for (let j = 0; j < n; j++) {\r\n          if (i !== j) {\r\n            const rowSum = sim[j].reduce((a, b) => a + b, 0);\r\n            sum += (sim[j][i] / (rowSum || 1)) * scores[j];\r\n          }\r\n        }\r\n        newScores[i] = (1 - damping) / n + damping * sum;\r\n      }\r\n      scores = newScores;\r\n    }\r\n\r\n    const ranked = sentences\r\n      .map((s, i) => ({ sentence: s, score: scores[i], idx: i }))\r\n      .sort((a, b) => b.score - a.score);\r\n\r\n    return ranked\r\n      .slice(0, maxSents)\r\n      .sort((a, b) => a.idx - b.idx)\r\n      .map((s) => s.sentence)\r\n      .join(\" \");\r\n  }\r\n}\r\n\r\nclass AbstractiveSummarizer {\r\n  private model: any;\r\n\r\n  constructor(modelType: \"bart\" | \"t5\" = \"bart\") {\r\n    console.log(`Loading ${modelType} for summarization...`);\r\n  }\r\n\r\n  summarize(\r\n    text: string,\r\n    maxLength = 150,\r\n    minLength = 40,\r\n    numBeams = 4\r\n  ): string {\r\n    // In production: use BART/T5 model\r\n    // Simplified extract + abstractive pipeline\r\n    const extractive = new ExtractiveSummarizer();\r\n    const extracted = extractive.summarize(text, 5, \"tfidf\");\r\n\r\n    // Abstractive compression (simplified)\r\n    const sentences = extracted.split(/[.!?]+/).filter((s) => s.trim().length > 0);\r\n    if (sentences.length === 0) return \"\";\r\n\r\n    // Keep only the most important parts of each sentence\r\n    const compressed = sentences.map((s) => {\r\n      const words = s.split(/\\s+/);\r\n      const kept = words.filter((w) => w.length > 3 || [\"is\", \"was\", \"are\", \"were\"].includes(w));\r\n      if (kept.length <= 3) return s;\r\n      return kept.join(\" \");\r\n    });\r\n\r\n    let summary = compressed.join(\". \");\r\n    if (summary.length > maxLength) {\r\n      summary = summary.substring(0, maxLength);\r\n      const lastPeriod = summary.lastIndexOf(\".\");\r\n      if (lastPeriod > minLength) summary = summary.substring(0, lastPeriod + 1);\r\n    }\r\n\r\n    return summary;\r\n  }\r\n}\n"
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
        children: "class TranslationModel {\r\n  private srcLang: string;\r\n  private tgtLang: string;\r\n  private vocabulary: Map<string, number>;\r\n  private reverseVocab: Map<number, string>;\r\n\r\n  constructor(srcLang: string, tgtLang: string) {\r\n    this.srcLang = srcLang;\r\n    this.tgtLang = tgtLang;\r\n    this.vocabulary = new Map();\r\n    this.reverseVocab = new Map();\r\n    this.initVocab();\r\n  }\r\n\r\n  private initVocab(): void {\r\n    // Simplified vocabulary (in production: 32K BPE tokens)\r\n    const tokenTypes = [\r\n      \"<pad>\", \"<unk>\", \"<bos>\", \"<eos>\", \"the\", \"a\", \"an\", \"is\", \"was\",\r\n      \"hello\", \"world\", \"good\", \"morning\", \"how\", \"are\", \"you\", \"i\", \"am\",\r\n      \"this\", \"that\", \"these\", \"those\", \"and\", \"or\", \"but\", \"in\", \"on\", \"at\",\r\n      \"to\", \"from\", \"with\", \"without\", \"for\", \"of\", \"by\", \"about\", \"as\", \"into\",\r\n      \"through\", \"during\", \"before\", \"after\", \"above\", \"below\", \"between\",\r\n      \"out\", \"off\", \"over\", \"under\", \"again\", \"further\", \"then\", \"once\",\r\n      \"bonjour\", \"le\", \"monde\", \"tres\", \"bien\", \"merci\", \"comment\", \"allez\",\r\n      \"vous\", \"je\", \"suis\", \"ce\", \"cet\", \"cette\", \"ces\", \"et\", \"ou\", \"mais\",\r\n    ] as const;\r\n\r\n    tokenTypes.forEach((token, id) => {\r\n      this.vocabulary.set(token, id);\r\n      this.reverseVocab.set(id, token);\r\n    });\r\n  }\r\n\r\n  translate(text: string): string {\r\n    // Tokenize source\r\n    const srcTokens = text.toLowerCase().split(/\\s+/).slice(0, 50);\r\n    const srcIds = srcTokens.map((t) =>\r\n      this.vocabulary.get(t) ?? this.vocabulary.get(\"<unk>\")!\r\n    );\r\n\r\n    // Encoder processes source (simulated)\r\n    const encoderStates = srcIds.map(() =>\r\n      Array.from({ length: 512 }, () => Math.random() - 0.5)\r\n    );\r\n\r\n    // Decoder generates target (greedy, simplified)\r\n    const tgtIds: number[] = [this.vocabulary.get(\"<bos>\")!];\r\n    const maxLen = 50;\r\n    const eosId = this.vocabulary.get(\"<eos>\")!;\r\n    const unkId = this.vocabulary.get(\"<unk>\")!;\r\n\r\n    for (let step = 0; step < maxLen; step++) {\r\n      const lastId = tgtIds[tgtIds.length - 1];\r\n      if (lastId === eosId) break;\r\n\r\n      // Simulate decoder with attention over encoder\r\n      const decoderState = Array.from({ length: 512 }, () => Math.random());\r\n      const attentionWeights = encoderStates.map(() => Math.random());\r\n      const attSum = attentionWeights.reduce((a, b) => a + b, 0);\r\n      const normWeights = attentionWeights.map((w) => w / attSum);\r\n\r\n      const context = encoderStates[0].map((_, dim) =>\r\n        encoderStates.reduce((s, es, i) => s + es[dim] * normWeights[i], 0)\r\n      );\r\n\r\n      // Project to vocabulary (simplified)\r\n      const logits = [...this.vocabulary.keys()].map((token) => {\r\n        const tokenId = this.vocabulary.get(token)!;\r\n        return Math.random();\r\n      });\r\n\r\n      // Greedy: pick highest probability token\r\n      const bestTgtIdx = logits.indexOf(Math.max(...logits));\r\n\r\n      // Map back to target language (simple lookup)\r\n      const sourceToTarget: Record<string, string> = {\r\n        \"hello\": \"bonjour\",\r\n        \"world\": \"monde\",\r\n        \"good\": \"bon\",\r\n        \"morning\": \"matin\",\r\n        \"how\": \"comment\",\r\n        \"are\": \"allez\",\r\n        \"you\": \"vous\",\r\n        \"i\": \"je\",\r\n        \"am\": \"suis\",\r\n      };\r\n\r\n      const srcWord = srcTokens[step] || \"\";\r\n      const tgtWord = sourceToTarget[srcWord] || reverseDict(this.reverseVocab).get(bestTgtIdx) || srcWord;\r\n      tgtIds.push(this.vocabulary.get(tgtWord) ?? unkId);\r\n\r\n      if (tgtIds.length > maxLen) break;\r\n    }\r\n\r\n    // Decode target IDs to text\r\n    const tgtTokens = tgtIds\r\n      .slice(1) // skip <bos>\r\n      .filter((id) => id !== eosId && id !== this.vocabulary.get(\"<pad>\")!)\r\n      .map((id) => this.reverseVocab.get(id) ?? \"<unk>\");\r\n\r\n    return tgtTokens.filter((t) => !t.startsWith(\"<\")).join(\" \");\r\n  }\r\n\r\n  evaluateBLEU(hypotheses: string[], references: string[]): number {\r\n    // Simplified BLEU score computation\r\n    let totalPrecision = 0;\r\n    for (let i = 0; i < hypotheses.length; i++) {\r\n      const hyp = hypotheses[i].split(/\\s+/);\r\n      const ref = references[i].split(/\\s+/);\r\n\r\n      const hypNGrams = new Map<string, number>();\r\n      const refNGrams = new Map<string, number>();\r\n\r\n      for (let n = 1; n <= 4; n++) {\r\n        for (let j = 0; j <= hyp.length - n; j++) {\r\n          const gram = hyp.slice(j, j + n).join(\" \");\r\n          hypNGrams.set(gram, (hypNGrams.get(gram) || 0) + 1);\r\n        }\r\n        for (let j = 0; j <= ref.length - n; j++) {\r\n          const gram = ref.slice(j, j + n).join(\" \");\r\n          refNGrams.set(gram, (refNGrams.get(gram) || 0) + 1);\r\n        }\r\n\r\n        let match = 0;\r\n        let total = 0;\r\n        for (const [gram, count] of hypNGrams) {\r\n          const refCount = refNGrams.get(gram) || 0;\r\n          match += Math.min(count, refCount);\r\n          total += count;\r\n        }\r\n        totalPrecision += total > 0 ? match / total : 0;\r\n      }\r\n    }\r\n    totalPrecision /= hypotheses.length * 4;\r\n\r\n    // Brevity penalty\r\n    const hypLen = hypotheses.reduce((s, h) => s + h.split(/\\s+/).length, 0);\r\n    const refLen = references.reduce((s, r) => s + r.split(/\\s+/).length, 0);\r\n    const bp = refLen > 0 ? Math.exp(1 - refLen / (hypLen || 1)) : 0;\r\n\r\n    return totalPrecision * bp * 100;\r\n  }\r\n}\r\n\r\nfunction reverseDict(map: Map<number, string>): Map<string, number> {\r\n  const rev = new Map<string, number>();\r\n  for (const [k, v] of map) rev.set(v, k);\r\n  return rev;\r\n}\n"
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
        children: "interface SpamFeatures {\r\n  wordCount: number;\r\n  uppercaseRatio: number;\r\n  exclamationCount: number;\r\n  moneySymbolCount: number;\r\n  urlCount: number;\r\n  spamKeywordCount: number;\r\n  containsFree: boolean;\r\n  containsGuarantee: boolean;\r\n  containsWinner: boolean;\r\n}\r\n\r\nclass SpamDetector {\r\n  private threshold: number;\r\n  private featureWeights: SpamFeatures;\r\n\r\n  constructor() {\r\n    this.threshold = 0.5;\r\n    this.featureWeights = {\r\n      wordCount: 0.01,\r\n      uppercaseRatio: 3.0,\r\n      exclamationCount: 0.3,\r\n      moneySymbolCount: 2.0,\r\n      urlCount: 0.5,\r\n      spamKeywordCount: 1.5,\r\n      containsFree: 2.0,\r\n      containsGuarantee: 2.5,\r\n      containsWinner: 3.0,\r\n    };\r\n  }\r\n\r\n  private extractFeatures(text: string): SpamFeatures {\r\n    const lower = text.toLowerCase();\r\n    const words = text.split(/\\s+/);\r\n    const uppercaseCount = words.filter((w) =>\r\n      w === w.toUpperCase() && w.length > 1\r\n    ).length;\r\n\r\n    const spamKeywords = [\r\n      \"free\", \"win\", \"winner\", \"congratulations\", \"click here\",\r\n      \"limited offer\", \"act now\", \"exclusive deal\", \"buy now\",\r\n      \"guarantee\", \"no risk\", \"million dollars\", \"urgent\",\r\n      \"call now\", \"subscribe\", \"limited time\", \"bonus\",\r\n    ];\r\n\r\n    return {\r\n      wordCount: words.length,\r\n      uppercaseRatio: words.length > 0 ? uppercaseCount / words.length : 0,\r\n      exclamationCount: (text.match(/!/g) || []).length,\r\n      moneySymbolCount: (text.match(/[$€£¥]/g) || []).length,\r\n      urlCount: (text.match(/https?:\\/\\/[^\\s]+/g) || []).length,\r\n      spamKeywordCount: spamKeywords.filter((kw) => lower.includes(kw)).length,\r\n      containsFree: lower.includes(\"free\"),\r\n      containsGuarantee: lower.includes(\"guarantee\"),\r\n      containsWinner: lower.includes(\"winner\"),\r\n    };\r\n  }\r\n\r\n  predict(text: string): { isSpam: boolean; confidence: number } {\r\n    const features = this.extractFeatures(text);\r\n    let score = 0;\r\n\r\n    score += features.wordCount * this.featureWeights.wordCount;\r\n    score += features.uppercaseRatio * this.featureWeights.uppercaseRatio;\r\n    score += features.exclamationCount * this.featureWeights.exclamationCount;\r\n    score += features.moneySymbolCount * this.featureWeights.moneySymbolCount;\r\n    score += features.urlCount * this.featureWeights.urlCount;\r\n    score += features.spamKeywordCount * this.featureWeights.spamKeywordCount;\r\n    score += (features.containsFree ? 1 : 0) * this.featureWeights.containsFree;\r\n    score += (features.containsGuarantee ? 1 : 0) * this.featureWeights.containsGuarantee;\r\n    score += (features.containsWinner ? 1 : 0) * this.featureWeights.containsWinner;\r\n\r\n    const probability = 1 / (1 + Math.exp(-score));\r\n\r\n    return {\r\n      isSpam: probability > this.threshold,\r\n      confidence: probability,\r\n    };\r\n  }\r\n\r\n  predictBatch(texts: string[]): Array<{ isSpam: boolean; confidence: number }> {\r\n    return texts.map((t) => this.predict(t));\r\n  }\r\n}\r\n\r\nclass SentimentAnalyzer {\r\n  private classifier: TextClassifier;\r\n\r\n  constructor() {\r\n    this.classifier = new TextClassifier(\"tfidf\");\r\n    const trainingData = [\r\n      { text: \"This movie was amazing and wonderful\", label: \"positive\" },\r\n      { text: \"I loved this product, it works great\", label: \"positive\" },\r\n      { text: \"Excellent service and fast delivery\", label: \"positive\" },\r\n      { text: \"The experience was fantastic\", label: \"positive\" },\r\n      { text: \"This is terrible and awful\", label: \"negative\" },\r\n      { text: \"I hated this movie, waste of time\", label: \"negative\" },\r\n      { text: \"Poor quality, very disappointed\", label: \"negative\" },\r\n      { text: \"The worst purchase I ever made\", label: \"negative\" },\r\n    ];\r\n    this.classifier.train(trainingData);\r\n  }\r\n\r\n  analyze(text: string): {\r\n    sentiment: \"positive\" | \"negative\" | \"neutral\";\r\n    confidence: number;\r\n    scores: Record<string, number>;\r\n  } {\r\n    const result = this.classifier.predict(text);\r\n    const positiveWords = [\"good\", \"great\", \"amazing\", \"excellent\", \"love\", \"wonderful\", \"fantastic\"];\r\n    const negativeWords = [\"bad\", \"terrible\", \"awful\", \"hate\", \"worst\", \"poor\", \"disappointed\"];\r\n\r\n    const tokens = text.toLowerCase().split(/\\s+/);\r\n    let posScore = tokens.filter((t) => positiveWords.includes(t)).length;\r\n    let negScore = tokens.filter((t) => negativeWords.includes(t)).length;\r\n    const total = posScore + negScore;\r\n    const sentiment = total === 0 ? \"neutral\" : posScore > negScore ? \"positive\" : \"negative\";\r\n\r\n    const scores = {\r\n      positive: (total > 0 ? posScore / total : 0) * result.confidence,\r\n      negative: (total > 0 ? negScore / total : 0) * result.confidence,\r\n      neutral: total === 0 ? 1.0 : 1 - Math.abs(posScore - negScore) / total,\r\n    };\r\n\r\n    return { sentiment, confidence: result.confidence, scores };\r\n  }\r\n\r\n  // LIME-style explanation\r\n  explain(text: string): Array<{ feature: string; weight: number }> {\r\n    const words = text.split(/\\s+/);\r\n    const baseScore = this.analyze(text);\r\n    const explanations: Array<{ feature: string; weight: number }> = [];\r\n\r\n    for (const word of words) {\r\n      const without = text.replace(word, \"\");\r\n      const score = this.analyze(without);\r\n      const weight = baseScore.confidence - score.confidence;\r\n      explanations.push({ feature: word, weight: Math.round(weight * 100) / 100 });\r\n    }\r\n\r\n    explanations.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));\r\n    return explanations.slice(0, 5);\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production sentiment systems use BERT fine-tuned on domain data, achieving 95%+ accuracy. LIME and SHAP provide word-level explanations for model decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NLP applications span text classification, named entity recognition, question answering, summarization, and machine translation. Text classification assigns categories to documents using encoder-based models fine-tuned on labeled examples. Named entity recognition identifies entities like persons,.\r\norganizations, and locations using token-level classification heads. Question answering extracts answer spans from context passages using SQuAD-style fine-tuning. Summarization generates concise versions of longer texts using encoder-decoder models with beam search decoding. Machine translation translates between languages using sequence-to-sequence architectures. Sentiment analysis and.\r\nspam detection apply classification at document or sentence level, often using lightweight models distilled from larger transformers."
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
      children: "Q1: What does the B- prefix mean in IOB tagging?\r\na) Best entity\r\nb) Beginning of entity\r\nc) Background token\r\nd) Binary label"
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
      children: "Q2: Which metric is standard for machine translation evaluation?\r\na) F1\r\nb) ROUGE\r\nc) BLEU\r\nd) Perplexity"
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
      children: "Q3: What is the main risk of abstractive summarization?\r\na) Slow inference\r\nb) Hallucination\r\nc) Need for large vocabulary\r\nd) Poor grammar"
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
      children: "Q4: What does RAG stand for?\r\na) Recurrent Attention Graph\r\nb) Retrieval-Augmented Generation\r\nc) Random Access Gradient\r\nd) Rapid Autoencoder Generation"
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
      children: "Q5: Which algorithm is used for extractive summarization with sentence graphs?\r\na) PageRank (TextRank)\r\nb) K-means\r\nc) Naive Bayes\r\nd) PCA"
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
        children: "The time complexity of the standard approach to 08 Nlp Applications is ___. — Answer: O(n^2) self-attention, O(n) feed-forward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Nlp Applications is ___. — Answer: long sequences, padding, attention overflow"
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
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Applications — Text Classification, NER, QA, Summarization, Translation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 10 — builds the foundation for 08 Nlp Applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Nlp Applications with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Nlp Applications fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Nlp Applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Nlp Applications"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Nlp Applications?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Nlp Applications?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Nlp Applications asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Nlp Applications?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "08 Nlp Applications is like a GPS navigation system"
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
          }), " — this chapter contributes the NLP Applications — Text Classification, NER, QA, Summarization, Translation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
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
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
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
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
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
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
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
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
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
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Applications — Text Classification, NER, QA, Summarization, Translation"
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
        }), ": Add structured logging at each stage of the 08 Nlp Applications pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_nlp_applications(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Nlp Applications.\r\n\r\n    Key concepts: attention, positional encoding, feed-forward, layer norm\r\n    Complexity: O(n^2) self-attention, O(n) feed-forward\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Nlp Applications here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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