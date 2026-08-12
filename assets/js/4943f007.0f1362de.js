"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[95820],{

/***/ 83380
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_01_text_preprocessing_md_494_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-01-text-preprocessing-md-494.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_01_text_preprocessing_md_494_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/01-text-preprocessing","title":"Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":128,"frontMatter":{"id":"01-text-preprocessing","slug":"/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing","title":"Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF","sidebar_label":"Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF","sidebar_position":128},"sidebar":"coursesSidebar","previous":{"title":"10 — NLP & Transformers","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers"},"next":{"title":"Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/02-word-embeddings"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing.md


const frontMatter = {
	id: '01-text-preprocessing',
	slug: '/ai-engineering-placement/10-nlp-transformers/01-text-preprocessing',
	title: 'Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF',
	sidebar_label: 'Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF',
	sidebar_position: 128
};
const contentTitle = 'Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF';

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
  "value": "1.1 Word Tokenization",
  "id": "11-word-tokenization",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "1.2 Subword Tokenization",
  "id": "12-subword-tokenization",
  "level": 3
}, {
  "value": "1.3 Stemming &amp; Lemmatization",
  "id": "13-stemming--lemmatization",
  "level": 3
}, {
  "value": "1.4 Stop Words &amp; Normalization",
  "id": "14-stop-words--normalization",
  "level": 3
}, {
  "value": "1.5 Vocabulary Building",
  "id": "15-vocabulary-building",
  "level": 3
}, {
  "value": "1.6 TF-IDF",
  "id": "16-tf-idf",
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
    bos: "bos",
    button: "button",
    cls: "cls",
    code: "code",
    details: "details",
    div: "div",
    eos: "eos",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    mask: "mask",
    ol: "ol",
    p: "p",
    pad: "pad",
    pre: "pre",
    sep: "sep",
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
    unk: "unk",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "text-preprocessing--tokenization-stemming-lemmatization-tf-idf",
        children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
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
            children: "Understand tokenization strategies: word-level, subword (BPE, WordPiece, Unigram), and SentencePiece"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement stemming (Porter, Lancaster, Snowball) and lemmatization for morphological normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove stop words, punctuation, and non-informative content using regex and custom filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a vocabulary with frequency-based truncation and special tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute TF-IDF scores manually and using sklearn for feature extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a complete text preprocessing pipeline that generalizes to new data"
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
            children: "Word Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whitespace, regex, Treebank, Tweet tokenizers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subword Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPE, WordPiece, Unigram, SentencePiece models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stemming & Lemmatization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Porter stemmer, WordNet lemmatizer, morphological analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop Words & Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop word removal, lowercasing, regex cleaning, Unicode normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vocabulary Building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency cutoff, special tokens, OOV handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TF-IDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Term frequency, inverse document frequency, feature matrix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Raw Text] --> B[Regex Cleaning & Normalization]\n    B --> C[Tokenization]\n    C --> D{Token Type?}\n    D -->|Word| E[Word Tokens]\n    D -->|Subword| F[BPE / WordPiece / SentencePiece]\n    E --> G[Stemming / Lemmatization]\n    F --> G\n    G --> H[Stop Word Removal]\n    H --> I[Vocabulary Building]\n    I --> J[TF-IDF Vectorization]\n    J --> K[Feature Matrix for Downstream Tasks]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text preprocessing is the critical first step in every NLP pipeline — before a transformer can understand language, raw text must be tokenized,.\nnormalized, and converted to numerical features. Poor preprocessing directly degrades model performance: wrong tokenization splits words incorrectly, skipping stop word removal adds noise,.\nand ignoring Unicode normalization breaks multilingual support. This chapter equips you with the exact skills needed for every subsequent NLP and.\nLLM module."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python basics (strings, dictionaries, list comprehensions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of what NLP is (processing human language with computers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 08 (ML Fundamentals) for feature extraction concepts"
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
      id: "11-word-tokenization",
      children: "1.1 Word Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokenization splits text into atomic units called tokens. Word tokenization is the simplest form: tokens correspond to words, punctuation, and numbers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TokenizerResult {\n  tokens: string[];\n  spans: Array<{ start: number; end: number }>;\n}\n\nclass WhitespaceTokenizer {\n  tokenize(text: string): TokenizerResult {\n    const tokens: string[] = [];\n    const spans: Array<{ start: number; end: number }> = [];\n    const regex = /\\S+/g;\n    let match: RegExpExecArray | null;\n    while ((match = regex.exec(text)) !== null) {\n      tokens.push(match[0]);\n      spans.push({ start: match.index, end: match.index + match[0].length });\n    }\n    return { tokens, spans };\n  }\n}\n\nclass RegexpTokenizer {\n  private pattern: RegExp;\n\n  constructor(pattern: RegExp = /[a-zA-Z]+|[0-9]+|[^\\w\\s]/g) {\n    this.pattern = pattern;\n  }\n\n  tokenize(text: string): TokenizerResult {\n    const tokens: string[] = [];\n    const spans: Array<{ start: number; end: number }> = [];\n    let match: RegExpExecArray | null;\n    while ((match = this.pattern.exec(text)) !== null) {\n      tokens.push(match[0]);\n      spans.push({ start: match.index, end: match.index + match[0].length });\n    }\n    return { tokens, spans };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Treebank tokenizer (used in NLTK) handles contractions, quotes, and punctuation separately. For example, \"don't\" becomes [\"do\", \"n't\"] and \"I'm\" becomes [\"I\", \"'m\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TreebankTokenizer {\n  private static CONTRACTIONS: Record<string, string[]> = {\n    \"don't\": [\"do\", \"n't\"],\n    \"can't\": [\"ca\", \"n't\"],\n    \"i'm\": [\"i\", \"'m\"],\n    \"you're\": [\"you\", \"'re\"],\n    \"it's\": [\"it\", \"'s\"],\n  };\n\n  tokenize(text: string): string[] {\n    const lower = text.toLowerCase();\n    const words = lower.split(/\\s+/);\n    const tokens: string[] = [];\n    for (const w of words) {\n      if (TreebankTokenizer.CONTRACTIONS[w]) {\n        tokens.push(...TreebankTokenizer.CONTRACTIONS[w]);\n      } else {\n        // Split punctuation from words\n        tokens.push(...w.split(/(?=[.,!?;:()])|(?<=[.,!?;:()])/));\n      }\n    }\n    return tokens.filter((t) => t.length > 0);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tweet tokenizer"
      }), " preserves emoticons, hashtags, mentions, and URLs. This is critical for social media NLP where standard tokenizers destroy semantic content like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#NLP"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@user"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-subword-tokenization",
      children: "1.2 Subword Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subword tokenization bridges words and characters. Byte-Pair Encoding (BPE) iteratively merges the most frequent character pairs. WordPiece (used in BERT) merges based on likelihood gain. Unigram (used in XLNet) starts from a large vocabulary and prunes. SentencePiece treats the input as a raw byte stream without pre-tokenization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type VocabEntry = { token: string; id: number; count: number };\n\nclass BPETokenizer {\n  private vocab: Map<string, number> = new Map();\n  private merges: Map<string, string> = new Map();\n  private vocabSize: number;\n\n  constructor(vocabSize = 30000) {\n    this.vocabSize = vocabSize;\n  }\n\n  // Count character pair frequencies\n  private getPairFreqs(words: string[]): Map<string, number> {\n    const pairs = new Map<string, number>();\n    for (const word of words) {\n      const chars = word.split(\"\");\n      for (let i = 0; i < chars.length - 1; i++) {\n        const pair = chars[i] + \" \" + chars[i + 1];\n        pairs.set(pair, (pairs.get(pair) || 0) + 1);\n      }\n    }\n    return pairs;\n  }\n\n  // Merge the most frequent pair across the corpus\n  fit(corpus: string[]): void {\n    let words = corpus.map((w) => w.split(\"\").join(\" \") + \" </w>\");\n    const initialVocab = new Set<string>();\n    for (const w of corpus) {\n      for (const ch of w) initialVocab.add(ch);\n    }\n    initialVocab.add(\"</w>\");\n    let id = 0;\n    for (const ch of initialVocab) {\n      this.vocab.set(ch, id++);\n    }\n    while (this.vocab.size < this.vocabSize) {\n      const pairs = this.getPairFreqs(words);\n      if (pairs.size === 0) break;\n      let bestPair = \"\";\n      let bestFreq = 0;\n      for (const [pair, freq] of pairs) {\n        if (freq > bestFreq) {\n          bestFreq = freq;\n          bestPair = pair;\n        }\n      }\n      const [a, b] = bestPair.split(\" \");\n      const merged = a + b;\n      this.merges.set(bestPair, merged);\n      words = words.map((w) => w.replaceAll(bestPair, merged));\n      this.vocab.set(merged, id++);\n    }\n  }\n\n  encode(text: string): number[] {\n    let word = text.split(\"\").join(\" \") + \" </w>\";\n    let changed = true;\n    while (changed) {\n      changed = false;\n      const pairs = this.getPairFreqs([word]);\n      for (const [pair, _] of pairs) {\n        if (this.merges.has(pair)) {\n          word = word.replaceAll(pair, this.merges.get(pair)!);\n          changed = true;\n        }\n      }\n    }\n    return word.split(/\\s+/).map((t) => this.vocab.get(t) ?? this.vocab.get(\"<unk>\")!);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SentencePiece extends BPE by treating the input as a raw Unicode byte sequence, removing the need for language-specific pre-tokenization. It supports both BPE and Unigram algorithms and is used by T5, XLNet, and ALBERT."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-stemming--lemmatization",
      children: "1.3 Stemming & Lemmatization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stemming crudely chops affixes; lemmatization uses vocabulary and morphology to return the dictionary base form."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PorterStemmer {\n  private static SUFFIXES: Array<{ pattern: RegExp; replacement: string }> = [\n    { pattern: /ational$/, replacement: \"ate\" },\n    { pattern: /tional$/, replacement: \"tion\" },\n    { pattern: /enci$/, replacement: \"ence\" },\n    { pattern: /anci$/, replacement: \"ance\" },\n    { pattern: /izer$/, replacement: \"ize\" },\n    { pattern: /abli$/, replacement: \"able\" },\n    { pattern: /alli$/, replacement: \"al\" },\n    { pattern: /entli$/, replacement: \"ent\" },\n    { pattern: /eli$/, replacement: \"e\" },\n    { pattern: /ousli$/, replacement: \"ous\" },\n    { pattern: /ization$/, replacement: \"ize\" },\n    { pattern: /ation$/, replacement: \"ate\" },\n    { pattern: /ator$/, replacement: \"ate\" },\n    { pattern: /alism$/, replacement: \"al\" },\n    { pattern: /iveness$/, replacement: \"ive\" },\n    { pattern: /fulness$/, replacement: \"ful\" },\n    { pattern: /ousness$/, replacement: \"ous\" },\n    { pattern: /aliti$/, replacement: \"al\" },\n    { pattern: /iviti$/, replacement: \"ive\" },\n    { pattern: /biliti$/, replacement: \"ble\" },\n  ];\n\n  stem(word: string): string {\n    let result = word.toLowerCase();\n    for (const { pattern, replacement } of PorterStemmer.SUFFIXES) {\n      if (pattern.test(result)) {\n        result = result.replace(pattern, replacement);\n        break;\n      }\n    }\n    // Remove trailing 'e' if stem ends with consonant-vowel-consonant\n    if (result.endsWith(\"e\") && result.length > 3) {\n      result = result.slice(0, -1);\n    }\n    return result;\n  }\n}\n\nclass WordNetLemmatizer {\n  private static WORDNET: Map<string, string> = new Map([\n    [\"running\", \"run\"],\n    [\"ran\", \"run\"],\n    [\"better\", \"good\"],\n    [\"mice\", \"mouse\"],\n    [\"studies\", \"study\"],\n    [\"studying\", \"study\"],\n    [\"cried\", \"cry\"],\n    [\"flying\", \"fly\"],\n    [\"largest\", \"large\"],\n    [\"happier\", \"happy\"],\n  ]);\n\n  lemmatize(word: string, pos: \"n\" | \"v\" | \"a\" | \"r\" = \"n\"): string {\n    const key = pos === \"v\" ? word : word;\n    return WordNetLemmatizer.WORDNET.get(key.toLowerCase()) ?? word;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lemmatizing requires part-of-speech tags: \"meeting\" as a noun should remain \"meeting\", but as a verb should become \"meet\". Stemming \"meeting\" gives \"meet\" regardless, which can discard important semantic distinctions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-stop-words--normalization",
      children: "1.4 Stop Words & Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stop words are high-frequency tokens that carry little semantic weight (e.g., \"the\", \"a\", \"is\", \"and\"). Normalization includes lowercasing, removing punctuation, expanding contractions, and Unicode NFKC normalization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TextNormalizer {\n  private static STOP_WORDS: Set<string> = new Set([\n    \"a\", \"an\", \"the\", \"and\", \"or\", \"but\", \"in\", \"on\", \"at\", \"to\",\n    \"for\", \"of\", \"by\", \"with\", \"from\", \"is\", \"are\", \"was\", \"were\",\n    \"be\", \"been\", \"being\", \"have\", \"has\", \"had\", \"do\", \"does\", \"did\",\n    \"will\", \"would\", \"shall\", \"should\", \"may\", \"might\", \"must\", \"can\",\n    \"could\", \"i\", \"you\", \"he\", \"she\", \"it\", \"we\", \"they\", \"me\", \"him\",\n    \"her\", \"us\", \"them\", \"my\", \"your\", \"his\", \"its\", \"our\", \"their\",\n    \"this\", \"that\", \"these\", \"those\", \"not\", \"no\", \"nor\", \"very\",\n  ]);\n\n  normalize(text: string, removeStopWords = true): string {\n    // Unicode NFKC normalization\n    let normalized = text.normalize(\"NFKC\");\n    // Lowercase\n    normalized = normalized.toLowerCase();\n    // Expand common contractions\n    normalized = normalized\n      .replace(/\\bdon't\\b/g, \"do not\")\n      .replace(/\\bcan't\\b/g, \"cannot\")\n      .replace(/\\bi'm\\b/g, \"i am\")\n      .replace(/\\byou're\\b/g, \"you are\")\n      .replace(/\\bit's\\b/g, \"it is\")\n      .replace(/\\bthey're\\b/g, \"they are\");\n    // Remove punctuation and digits\n    normalized = normalized.replace(/[^\\w\\s]/g, \" \").replace(/\\d+/g, \" \");\n    // Collapse multiple spaces\n    normalized = normalized.replace(/\\s+/g, \" \").trim();\n    if (removeStopWords) {\n      normalized = normalized\n        .split(\" \")\n        .filter((w) => !TextNormalizer.STOP_WORDS.has(w))\n        .join(\" \");\n    }\n    return normalized;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Language-specific stop words"
      }), ": The NLTK corpus provides stop word lists for 22 languages. For specialized domains (medical, legal), domain-specific stop words can be computed by selecting the most frequent tokens across a large in-domain corpus."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-vocabulary-building",
      children: "1.5 Vocabulary Building"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A vocabulary maps tokens to integer IDs. Strategies include frequency-based maximum size, minimum frequency thresholds, and special token slots."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Vocabulary {\n  private tokenToId: Map<string, number> = new Map();\n  private idToToken: Map<number, string> = new Map();\n  private counts: Map<string, number> = new Map();\n\n  static readonly PAD = \"<pad>\";\n  static readonly UNK = \"<unk>\";\n  static readonly BOS = \"<bos>\";\n  static readonly EOS = \"<eos>\";\n\n  constructor() {\n    // Reserve special tokens\n    this.addToken(Vocabulary.PAD);\n    this.addToken(Vocabulary.UNK);\n    this.addToken(Vocabulary.BOS);\n    this.addToken(Vocabulary.EOS);\n  }\n\n  addToken(token: string): number {\n    if (!this.tokenToId.has(token)) {\n      const id = this.tokenToId.size;\n      this.tokenToId.set(token, id);\n      this.idToToken.set(id, token);\n    }\n    return this.tokenToId.get(token)!;\n  }\n\n  build(corpus: string[], maxSize = 30000, minFreq = 2): void {\n    // Count frequencies\n    for (const doc of corpus) {\n      const tokens = doc.split(/\\s+/);\n      for (const t of tokens) {\n        this.counts.set(t, (this.counts.get(t) || 0) + 1);\n      }\n    }\n    const sorted = [...this.counts.entries()]\n      .filter(([_, count]) => count >= minFreq)\n      .sort((a, b) => b[1] - a[1])\n      .slice(0, maxSize);\n    for (const [token] of sorted) {\n      this.addToken(token);\n    }\n  }\n\n  encode(tokens: string[]): number[] {\n    return tokens.map((t) => this.tokenToId.get(t) ?? this.tokenToId.get(Vocabulary.UNK)!);\n  }\n\n  decode(ids: number[]): string[] {\n    return ids.map((id) => this.idToToken.get(id) ?? Vocabulary.UNK);\n  }\n\n  get size(): number {\n    return this.tokenToId.size;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Handling OOV tokens: fallback strategies include character-level decomposition, subword fallback, or using a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<unk>"
      }), " token. BERT's WordPiece returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[UNK]"
      }), " for out-of-vocabulary characters but covers most words through its 30K subword vocabulary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-tf-idf",
      children: "1.6 TF-IDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Term Frequency-Inverse Document Frequency (TF-IDF) weights terms by their importance in a document relative to the corpus. TF = count of term in document / total terms in document. IDF = log(N / df) where N is total documents and df is document frequency."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TfidfVectorizer {\n  private vocabulary: Map<string, number> = new Map();\n  private idf: Map<string, number> = new Map();\n  private maxFeatures: number;\n\n  constructor(maxFeatures = 5000) {\n    this.maxFeatures = maxFeatures;\n  }\n\n  fit(documents: string[]): void {\n    const df = new Map<string, number>();\n    const totalDocs = documents.length;\n\n    for (const doc of documents) {\n      const tokens = doc.split(/\\s+/);\n      const seen = new Set<string>();\n      for (const t of tokens) {\n        if (t.length === 0) continue;\n        df.set(t, (df.get(t) || 0) + 1);\n        if (!seen.has(t)) {\n          seen.add(t);\n        }\n      }\n    }\n\n    const sorted = [...df.entries()]\n      .sort((a, b) => b[1] - a[1])\n      .slice(0, this.maxFeatures);\n\n    sorted.forEach(([term], idx) => {\n      this.vocabulary.set(term, idx);\n      this.idf.set(term, Math.log((totalDocs + 1) / (df.get(term)! + 1)) + 1);\n    });\n  }\n\n  transform(documents: string[]): number[][] {\n    const matrix: number[][] = [];\n    for (const doc of documents) {\n      const tokens = doc.split(/\\s+/);\n      const tf = new Map<string, number>();\n      for (const t of tokens) {\n        if (this.vocabulary.has(t)) {\n          tf.set(t, (tf.get(t) || 0) + 1);\n        }\n      }\n      const total = tokens.length;\n      const vector = new Array(this.vocabulary.size).fill(0);\n      for (const [term, count] of tf) {\n        const idx = this.vocabulary.get(term)!;\n        const tfScore = count / total;\n        const idfScore = this.idf.get(term)!;\n        vector[idx] = tfScore * idfScore;\n      }\n      matrix.push(vector);\n    }\n    return matrix;\n  }\n\n  getFeatureNames(): string[] {\n    const names = new Array(this.vocabulary.size);\n    for (const [term, idx] of this.vocabulary) {\n      names[idx] = term;\n    }\n    return names;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Smooth IDF"
      }), ": Adding 1 to both numerator and denominator (smooth IDF) prevents division by zero for terms that appear in every document. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sklearn"
      }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idf = log((N+1)/(df+1)) + 1"
      }), " by default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of text preprocessing like using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "translation dictionary"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenization"
        }), " = Breaking a sentence into individual words — \"I love cats\" becomes [\"I\", \"love\", \"cats\"]. You're deciding where one word ends and the next begins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vocabulary"
        }), " = The dictionary itself — a complete list of all words the system knows. If you encounter a word not in the dictionary (out-of-vocabulary), you need a strategy (subword tokenization breaks \"unhappiness\" into \"un\" + \"happiness\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stemming"
        }), " = Stripping word endings — \"running\", \"runs\", \"ran\" all become \"run\". It's crude but fast, like a dictionary that only lists root forms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lemmatization"
        }), " = Using an intelligent dictionary — \"better\" becomes \"good\" (not \"better\"). It understands that \"better\" is the comparative form of \"good.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TF-IDF"
        }), " = Highlighting important words — in a document about cats, the word \"cat\" appears frequently but isn't distinctive (it's in every cat document). The word \"siamese\" appears rarely but is very informative. TF-IDF scores measure this distinction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This helps because raw text is messy and unstructured — preprocessing is like organizing your notes before studying. You remove the noise (stop words), organize the key terms (vocabulary), and highlight what matters (TF-IDF) so the model can focus on learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text preprocessing transforms raw text into structured inputs for NLP models. Word tokenization splits text into discrete tokens using whitespace and.\npunctuation rules. Subword tokenization (BPE, WordPiece, SentencePiece) handles out-of-vocabulary words by decomposing them into frequent subword units. Stemming reduces words to root forms using heuristic rules,.\nwhile lemmatization uses vocabulary analysis for more accurate normalization. Stop word removal filters frequent but uninformative words, and text normalization handles case,.\nUnicode, and special characters. Vocabulary building constructs a fixed-size mapping from tokens to integer indices. TF-IDF weighting transforms token counts into relevance scores based on corpus frequency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subword tokenization (BPE, WordPiece, SentencePiece) is preferred for modern NLP because it handles OOV gracefully and captures morphological patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lemmatization preserves meaning better than stemming but requires POS tagging and is slower"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stop word removal can hurt performance on tasks like sentiment analysis where words like \"not\" carry critical meaning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always normalize to NFKC for Unicode text, especially for multilingual datasets with accented characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vocabulary size is a hyperparameter: too small loses information, too large increases sparsity and memory usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TF-IDF weights are corpus-dependent and must be fit on the training set only to prevent data leakage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SentencePiece eliminates the need for language-specific pre-tokenization by operating on raw bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A robust preprocessing pipeline should handle encoding errors, HTML entities, URLs, and emoji uniformly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between stemming and lemmatization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stemming uses heuristic rules to chop affixes (e.g., Porter stemmer reduces \"running\", \"runner\", \"ran\" to \"run\" but \"running\" might become \"runn\"). It is fast but.\ncan produce non-dictionary words. Lemmatization uses a vocabulary and morphological analysis to return the dictionary base form (lemma) by considering POS tags. For.\nexample, \"better\" stemmed becomes \"bet\" (incorrect), but lemmatized to \"good\" (correct). Lemmatization is slower but produces linguistically valid tokens. Use stemming for.\nsearch indexing (speed), lemmatization for NLP tasks requiring semantic accuracy."
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
      "data-qid": "nlp01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does Byte-Pair Encoding (BPE) work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BPE starts with a base vocabulary of individual characters and a special end-of-word token. It iteratively merges the most frequent adjacent pair of tokens in the corpus. For.\nexample, if \"e s\" appears 1000 times and \"t h\" appears 900 times, \"es\" becomes a new token first. This continues until a target vocabulary size is reached. To encode new text,.\nthe learned merge operations are applied greedily. GPT-2 uses BPE with a 50K vocabulary. The key advantage is that any word can be represented as a sequence of subwords,.\neliminating unknown tokens entirely."
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
      "data-qid": "nlp01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is SentencePiece and how is it different from BPE?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SentencePiece is a subword tokenizer that treats the input as a raw Unicode byte sequence without requiring language-specific pre-tokenization (splitting on whitespace). This makes it truly language-agnostic — it works for.\nChinese, Japanese, and Thai where word boundaries are not marked by spaces. SentencePiece supports both BPE and Unigram algorithms. It uses a lossless encoding scheme and.\ncan reverse tokens to the original text exactly. T5, XLNet, and ALBERT all use SentencePiece. BPE typically requires pre-tokenized input, making it language-dependent."
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
      "data-qid": "nlp01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you handle out-of-vocabulary (OOV) words?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Four common strategies: (1) Replace with a special ", (0,jsx_runtime.jsx)(_components.unk, {
            children: " token, which loses information. (2) Use subword tokenization (BPE, WordPiece) so OOV words are decomposed into known subwords — the standard approach for.\ntransformer models. (3) Character-level fallback: encode the word character-by-character. (4) Use a hash-based embedding (fastText) where OOV words use n-gram embeddings. The best approach depends on the task: subword tokenization is preferred for.\nneural models, n-gram fallback for word-level embedding models. BERT's WordPiece covers 99.8% of text in its 30K vocabulary."
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
      "data-qid": "nlp01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Explain TF-IDF and its components.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TF-IDF = Term Frequency — Inverse Document Frequency. TF = (number of times term t appears in document d) / (total terms in document d). IDF = log(N / df) where N = total documents and.\ndf = number of documents containing t. Terms that appear frequently in a single document get high TF. Terms that appear in few documents get high IDF. The product downweights common words (high df → low IDF) while upweighting rare,.\ninformative words. Smooth IDF variant: log((N+1)/(df+1)) + 1. TF-IDF is used for information retrieval, keyword extraction, and as feature input to ML classifiers."
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
      "data-qid": "nlp01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: When should you skip stop word removal?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skip stop word removal when (1) doing sentiment analysis — \"not good\" loses meaning if \"not\" is removed, changing negative to neutral. (2) Analyzing style or.\nauthorship — function words carry author-specific patterns. (3) Machine translation — stop words are essential for grammatical output. (4) Question answering — question words (what,.\nwhere, how) are critical. (5) Any task where word order and function words carry meaning. For topic modeling and information retrieval,.\nstop word removal generally improves results by focusing on content words."
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
      "data-qid": "nlp01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is WordPiece tokenization and how does it differ from BPE?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WordPiece (used by BERT) is similar to BPE but merges tokens based on likelihood gain on the training data rather than frequency. It picks the merge that maximizes the likelihood of the training data,.\nwhich is more principled than the greedy frequency approach of BPE. WordPiece also uses a special ## prefix for subword continuations (e.g.,.\n\"playing\" → [\"play\", \"##ing\"]), while BPE typically uses spaces or  markers. In practice, WordPiece is better at handling morphology because it learns meaningful subword boundaries driven by probability,.\nnot brute frequency."
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
      "data-qid": "nlp01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you build a vocabulary for a neural language model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Steps: (1) Tokenize the training corpus. (2) Count token frequencies. (3) Sort by frequency descending. (4) Select top-K tokens (typically 30K-100K) or.\nset a minimum frequency threshold (e.g., min 3 occurrences). (5) Add special tokens: ", (0,jsx_runtime.jsxs)(_components.pad, {
            children: [" for padding, ", (0,jsx_runtime.jsxs)(_components.unk, {
              children: [" for unknown, ", (0,jsx_runtime.jsxs)(_components.bos, {
                children: ["/", (0,jsx_runtime.jsxs)(_components.cls, {
                  children: [" for.\nbeginning/start, ", (0,jsx_runtime.jsxs)(_components.eos, {
                    children: ["/", (0,jsx_runtime.jsxs)(_components.sep, {
                      children: [" for end/separator, ", (0,jsx_runtime.jsx)(_components.mask, {
                        children: " for masked language modeling. (6) Assign integer IDs. For subword vocabularies, run BPE/WordPiece training on the corpus directly,.\nproducing a merged vocabulary automatically."
                      })]
                    })]
                  })]
                })]
              })]
            })]
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
      "data-qid": "nlp01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What text normalization steps are essential for a production NLP pipeline?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Essential steps: (1) Unicode normalization (NFKC) to handle composed/decomposed characters consistently. (2) Lowercasing for case-insensitive tasks (but not for NER where capitalization signals proper nouns). (3) HTML entity decoding (&.\n→ &). (4) URL and email removal or replacement with special tokens. (5) Contraction expansion (don't → do not). (6) Punctuation normalization (smart quotes to straight quotes). (7) Whitespace normalization. (8) Handling emoji (replace with text descriptions or.\nfilter). (9) Language detection for multilingual pipelines. (10) Encoding detection (UTF-8, ISO-8859-1) to prevent mojibake."
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
      "data-qid": "nlp01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does TF-IDF handle duplicate or near-duplicate documents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TF-IDF does not inherently handle duplicates — duplicate documents inflate their terms' document frequency (df), reducing IDF and making terms appear less important. Solutions: (1) Deduplicate the corpus before computing IDF. (2) Use min_df filtering to ignore terms appearing in.\ntoo many documents. (3) Use sublinear TF scaling (log(1+TF)) to dampen the effect of term repetition within a document. (4) For.\nnear-duplicates (plagiarism, boilerplate), use sentence-level TF-IDF with cosine similarity thresholds to identify and remove near-duplicate content before building the IDF model."
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
      children: "Q1: Which tokenizer was used by BERT and merges tokens by maximizing likelihood?\na) BPE\nb) WordPiece\nc) SentencePiece\nd) Whitespace tokenizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) WordPiece"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BERT uses WordPiece tokenization, which merges subwords based on likelihood gain on training data, not frequency count."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q2: What is the Porter stemmer's output for \"arguing\"?\na) argue\nb) argu\nc) arg\nd) arguing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) argu"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The Porter stemmer applies rules that would reduce \"arguing\" to \"argu\" (removing -ing when the stem ends in a consonant-vowel-consonant pattern)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q3: What does IDF measure in TF-IDF?\na) How often a term appears in a document\nb) How rare a term is across the corpus\nc) The length of the document\nd) The similarity between two documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) How rare a term is across the corpus"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "IDF = log(N/df). Terms appearing in fewer documents get higher IDF, indicating they are more discriminative."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Q4: Which special token is used to represent words not in the vocabulary?\na) ", (0,jsx_runtime.jsxs)(_components.pad, {
        children: ["\nb) ", (0,jsx_runtime.jsxs)(_components.bos, {
          children: ["\nc) ", (0,jsx_runtime.jsxs)(_components.unk, {
            children: ["\nd) ", (0,jsx_runtime.jsx)(_components.eos, {})]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Answer: c) ", (0,jsx_runtime.jsx)(_components.unk, {})]
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The unknown token ", (0,jsx_runtime.jsx)(_components.unk, {
            children: " represents any word not present in the vocabulary during encoding."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q5: What is the main advantage of SentencePiece over BPE?\na) Smaller vocabulary size\nb) Language-agnostic without pre-tokenization\nc) Faster training\nd) Better for English only"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "nlp01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Language-agnostic without pre-tokenization"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SentencePiece works directly on raw text without requiring pre-tokenization, making it suitable for languages without explicit word boundaries."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding nlp transformers is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to nlp transformers.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": nlp transformers concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), ": In nlp transformers, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a function that accepts a string and returns word tokens using regex. Handle punctuation, contractions, and multiple spaces."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a basic TF-IDF calculator on a corpus of 5 documents. Print the top 3 terms per document."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a text preprocessing pipeline that includes Unicode normalization, URL removal, stop word filtering, and Porter stemming. Test it on 20 newsgroup samples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Train a BPE tokenizer on English Wikipedia samples with a vocabulary size of 10K. Encode 10 test sentences and report the average token length per sentence vs. word tokenization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a custom subword regularizer that randomly merges or splits subwords during training (inspired by BART's text infilling). Evaluate how it affects model robustness on a text classification task using a simple classifier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applying stemming when lemmatization is needed — stemming produces non-dictionary words (\"argu\" instead of \"argue\"); use lemmatization for semantic tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing stop words for sentiment analysis — words like \"not\" in \"not good\" carry critical meaning; stop word removal flips the sentiment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fitting TF-IDF on the entire corpus before splitting — document frequency statistics leak from test to train; always fit on train only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring Unicode normalization — accented characters (é vs e + ́) produce different tokens without NFKC normalization, breaking multilingual models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using word tokenization for all languages — Chinese, Japanese, and Thai have no word boundaries; use SentencePiece or subword tokenization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenization splits text into tokens; word-level for English, subword (BPE, WordPiece) for robustness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BPE iteratively merges the most frequent character pairs; WordPiece merges by likelihood gain; SentencePiece is language-agnostic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stemming (fast, heuristic, produces non-dictionary words) vs Lemmatization (slower, vocabulary-aware, linguistically valid)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stop word removal helps topic modeling but hurts sentiment analysis and machine translation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vocabulary building: frequency-based truncation, min frequency threshold, special tokens (", (0,jsx_runtime.jsxs)(_components.pad, {
          children: [", ", (0,jsx_runtime.jsxs)(_components.unk, {
            children: [", ", (0,jsx_runtime.jsxs)(_components.bos, {
              children: [", ", (0,jsx_runtime.jsx)(_components.eos, {
                children: ")"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TF-IDF = TF (term frequency in document) × IDF (log(N/df), rarity across corpus)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SentencePiece eliminates pre-tokenization, making it work for any language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A robust pipeline handles Unicode normalization, HTML entities, URLs, and encoding errors"
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
            children: "Explain the core idea of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
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
            children: "Describe a production bug caused by misunderstanding Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF from 10 users to 10 million?"
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
            children: "Compare Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
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
            children: "How does Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in production today?"
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
        }), " Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF on an empty input?"
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
            children: "Complete Medium exercises, explain Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to someone else"
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
        children: "Always write a one-line example of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
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
        children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
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
        children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is like a recipe"
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
        }), " — this chapter contributes the Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-01textpreprocessing-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-01textpreprocessing-flash2",
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
      "data-qid": "10nlptransformers-01textpreprocessing-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-01textpreprocessing-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "10nlptransformers-01textpreprocessing-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in production at scale"
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
        children: "Testing: pytest for unit tests of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF code."]
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
        }), " or your IDE's debugger to step through the Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF example code."]
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
        children: "Explain Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
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
        children: "Tell me about a time you debugged a Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF without notes"
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
        }), ": a small team uses Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/02-word-embeddings",
        children: "Word Embeddings — Word2Vec, GloVe, FastText, Subword Tokenization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Text Preprocessing — Tokenization, Stemming, Lemmatization, TF-IDF depends on input size and distribution — always benchmark for your own data."
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