"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9297],{

/***/ 41353
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_12_nlp_md_5ce_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-12-nlp-md-5ce.json
const site_docs_courses_artificial_intelligence_12_nlp_md_5ce_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/12-nlp","title":"Chapter 12: Natural Language Processing","description":"Previous Reinforcement Learning | Next Computer Vision","source":"@site/docs/courses/artificial-intelligence/12-nlp.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/12-nlp","permalink":"/ai-engineering-journey/artificial-intelligence/12-nlp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"12-nlp","slug":"/artificial-intelligence/12-nlp","title":"Chapter 12: Natural Language Processing","sidebar_label":"Chapter 12: Natural Language Processing","sidebar_position":20},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 11: Reinforcement Learning","permalink":"/ai-engineering-journey/artificial-intelligence/11-reinforcement-learning"},"next":{"title":"Chapter 13: Computer Vision","permalink":"/ai-engineering-journey/artificial-intelligence/13-computer-vision"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/12-nlp.md


const frontMatter = {
	id: '12-nlp',
	slug: '/artificial-intelligence/12-nlp',
	title: 'Chapter 12: Natural Language Processing',
	sidebar_label: 'Chapter 12: Natural Language Processing',
	sidebar_position: 20
};
const contentTitle = 'Chapter 12: Natural Language Processing';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why NLP Matters",
  "id": "why-nlp-matters",
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
  "value": "12.1 Language Models",
  "id": "121-language-models",
  "level": 2
}, {
  "value": "12.1.1 N-Gram Models",
  "id": "1211-n-gram-models",
  "level": 3
}, {
  "value": "12.1.2 Perplexity",
  "id": "1212-perplexity",
  "level": 3
}, {
  "value": "12.2 Text Classification",
  "id": "122-text-classification",
  "level": 2
}, {
  "value": "12.2.1 Naive Bayes Classifier",
  "id": "1221-naive-bayes-classifier",
  "level": 3
}, {
  "value": "12.2.2 Logistic Regression",
  "id": "1222-logistic-regression",
  "level": 3
}, {
  "value": "12.3 Tokenization",
  "id": "123-tokenization",
  "level": 2
}, {
  "value": "12.3.1 Word Tokenization",
  "id": "1231-word-tokenization",
  "level": 3
}, {
  "value": "12.3.2 Subword Tokenization (BPE)",
  "id": "1232-subword-tokenization-bpe",
  "level": 3
}, {
  "value": "12.4 Stemming and Lemmatization",
  "id": "124-stemming-and-lemmatization",
  "level": 2
}, {
  "value": "12.4.1 Porter Stemmer",
  "id": "1241-porter-stemmer",
  "level": 3
}, {
  "value": "12.5 Part-of-Speech Tagging",
  "id": "125-part-of-speech-tagging",
  "level": 2
}, {
  "value": "12.5.1 HMM-Based POS Tagging",
  "id": "1251-hmm-based-pos-tagging",
  "level": 3
}, {
  "value": "12.5.2 CRF-Based Tagging",
  "id": "1252-crf-based-tagging",
  "level": 3
}, {
  "value": "12.6 Named Entity Recognition",
  "id": "126-named-entity-recognition",
  "level": 2
}, {
  "value": "12.7 Parsing",
  "id": "127-parsing",
  "level": 2
}, {
  "value": "12.7.1 Constituency Parsing (CKY Algorithm)",
  "id": "1271-constituency-parsing-cky-algorithm",
  "level": 3
}, {
  "value": "12.7.2 Statistical Parsing (PCFG)",
  "id": "1272-statistical-parsing-pcfg",
  "level": 3
}, {
  "value": "12.7.3 Dependency Parsing",
  "id": "1273-dependency-parsing",
  "level": 3
}, {
  "value": "12.8 Word Embeddings",
  "id": "128-word-embeddings",
  "level": 2
}, {
  "value": "12.8.1 Word2Vec (Skip-Gram)",
  "id": "1281-word2vec-skip-gram",
  "level": 3
}, {
  "value": "12.8.2 GloVe (Global Vectors)",
  "id": "1282-glove-global-vectors",
  "level": 3
}, {
  "value": "12.8.3 FastText",
  "id": "1283-fasttext",
  "level": 3
}, {
  "value": "12.9 Transformers, BERT, and GPT",
  "id": "129-transformers-bert-and-gpt",
  "level": 2
}, {
  "value": "12.9.1 The Transformer Architecture",
  "id": "1291-the-transformer-architecture",
  "level": 3
}, {
  "value": "12.9.2 BERT (Bidirectional Encoder Representations from Transformers)",
  "id": "1292-bert-bidirectional-encoder-representations-from-transformers",
  "level": 3
}, {
  "value": "12.9.3 GPT (Generative Pre-trained Transformer)",
  "id": "1293-gpt-generative-pre-trained-transformer",
  "level": 3
}, {
  "value": "12.9.4 BERT vs GPT",
  "id": "1294-bert-vs-gpt",
  "level": 3
}, {
  "value": "12.10 Lexical Semantics",
  "id": "1210-lexical-semantics",
  "level": 2
}, {
  "value": "12.11 Discourse Processing",
  "id": "1211-discourse-processing",
  "level": 2
}, {
  "value": "12.12 NLP Toolkits",
  "id": "1212-nlp-toolkits",
  "level": 2
}, {
  "value": "Traditional vs Neural NLP",
  "id": "traditional-vs-neural-nlp",
  "level": 2
}, {
  "value": "Word Embedding Methods Comparison",
  "id": "word-embedding-methods-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the attention mechanism in Transformers.",
  "id": "q1-explain-the-attention-mechanism-in-transformers",
  "level": 3
}, {
  "value": "Q2: Compare BERT and GPT. When would you use each?",
  "id": "q2-compare-bert-and-gpt-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q3: How do modern NLP systems handle out-of-vocabulary (OOV) words?",
  "id": "q3-how-do-modern-nlp-systems-handle-out-of-vocabulary-oov-words",
  "level": 3
}, {
  "value": "Q4: What is the difference between static and contextual embeddings?",
  "id": "q4-what-is-the-difference-between-static-and-contextual-embeddings",
  "level": 3
}, {
  "value": "Q5: Why does the Transformer use multi-head attention instead of single-head?",
  "id": "q5-why-does-the-transformer-use-multi-head-attention-instead-of-single-head",
  "level": 3
}, {
  "value": "Q6: Explain the significance of positional encoding in Transformers.",
  "id": "q6-explain-the-significance-of-positional-encoding-in-transformers",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Case Study: Google Search BERT Integration",
  "id": "case-study-google-search-bert-integration",
  "level": 3
}, {
  "value": "Case Study: Gmail Spam Filter",
  "id": "case-study-gmail-spam-filter",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — NLP Metrics",
  "id": "quick-reference--nlp-metrics",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-12-natural-language-processing",
        children: "Chapter 12: Natural Language Processing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/11-reinforcement-learning",
        children: "Chapter 11: Reinforcement Learning"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/13-computer-vision",
        children: "Chapter 13: Computer Vision"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) define language models and evaluate them using perplexity; (2) implement n-gram models with smoothing; (3) apply HMMs and CRFs for sequence labeling; (4) implement the CKY algorithm for parsing; (5) use modern NLP toolkits for standard tasks; (6) explain tokenization, stemming, lemmatization, and POS tagging with working code; (7) implement named entity recognition and dependency parsing; (8) understand word embeddings (Word2Vec, GloVe, FastText, BERT); (9) explain the Transformer architecture, attention mechanism, and GPT/BERT differences; (10) apply NLP to real-world systems like chatbots, search, and translation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/artificial-intelligence/12-nlp/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/12-nlp/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/12-nlp/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/12-nlp/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/12-nlp/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/12-nlp/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-nlp-matters",
      children: "Why NLP Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Teaching a computer to understand language is like teaching a child to read. A child first learns letters (characters), then words (tokens), then grammar (syntax), then meaning (semantics), then reading between the lines (pragmatics). Similarly, NLP pipelines progress from raw text through tokenization, parsing, semantic analysis, and discourse processing — each layer building on the previous one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every day, humanity generates 2.5 quintillion bytes of data — most of it unstructured text. NLP is the bridge between this raw text and actionable intelligence. Without NLP, Google Search cannot find relevant pages, Siri cannot answer questions, ChatGPT cannot generate responses, and spam filters cannot block phishing emails. NLP powers search engines, machine translation, sentiment analysis, chatbots, voice assistants, and information extraction systems that process billions of queries daily."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-gram, smoothing, perplexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain rule, Kneser-Ney"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Bayes, logistic regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bag-of-words, features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word, subword, character, SentencePiece"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPE, Unigram LM, vocab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stemming & Lemmatization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Porter, Lancaster, WordNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Morpheme, inflection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POS Tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMM, Viterbi, CRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagset, label bias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named entities, sequence labeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person/Org/Location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG, CNF, CKY, PCFG, dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse tree, constituency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word2Vec, GloVe, FastText, BERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector space, similarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention, multi-head, BERT, GPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attention, pre-training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WordNet, WSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synset, hypernymy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discourse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coherence, discourse relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDTB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toolkits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NLTK, spaCy, HuggingFace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-trained models"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Language Models] --> B[N-Grams]\n    A --> C[Perplexity]\n    A --> D[Text Classification]\n    D --> E[Naive Bayes]\n    A --> F[Tokenization]\n    F --> G[BPE / WordPiece]\n    A --> H[Stemming / Lemmatization]\n    A --> I[POS Tagging]\n    I --> J[HMM Viterbi]\n    I --> K[CRF]\n    A --> L[NER]\n    A --> M[Parsing]\n    M --> N[CKY / Dependency]\n    A --> O[Word Embeddings]\n    O --> P[Word2Vec / GloVe]\n    A --> Q[Transformers]\n    Q --> R[BERT / GPT]\n    A --> S[Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-language-models",
      children: "12.1 Language Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch12-nlp.png",
        alt: "Natural Language Processing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "language model"
      }), " assigns a probability P(w1, w2, ..., wn) to a sequence of words. By the chain rule:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(w_{1:n}) = \\prod_{i=1}^n P(w_i | w_{1:i-1})"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1211-n-gram-models",
      children: "12.1.1 N-Gram Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " If you hear \"I ordered a pepperoni ___,\" you predict \"pizza\" because in your experience, \"pepperoni\" is almost always followed by \"pizza.\" N-gram models capture exactly this — which word follows which previous words."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N-gram models approximate P(wi | w1:i-1) by conditioning only on the preceding n-1 words:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(wi | w_{i-n+1:i-1}) = Count(w_{i-n+1:i}) / Count(w_{i-n+1:i-1})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maximum likelihood estimation computes counts from a training corpus. Unseen n-grams receive zero probability, which is undesirable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect a training corpus of text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count all n-gram occurrences (contiguous sequences of n words)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each (n-1)-gram prefix, compute conditional probability by dividing the n-gram count by the prefix count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply smoothing to assign non-zero probability to unseen n-grams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To generate text, sample from the conditional distribution at each step."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate model quality using perplexity on held-out test data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function TRAIN-NGRAM(corpus, n):\n    counts = empty dictionary\n    for i = 1 to len(corpus) - n + 1:\n        gram = corpus[i : i+n]\n        prefix = corpus[i : i+n-1]\n        counts[gram] += 1\n        counts[prefix] += 1\n    return counts\n\nfunction PROBABILITY(gram, counts, n, V):\n    prefix = gram[1 : n-1]\n    numerator = counts[gram] + 1             // add-1 smoothing\n    denominator = counts[prefix] + V\n    return numerator / denominator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nCorpus: \"the cat sat the cat ran\" (6 tokens)\n| Step | N-gram | Count(prefix) | Count(gram) | P(gram | prefix) |\n|------|--------|---------------|-------------|-------------------|\n| 1 | \"the cat\" | 2 (the) | 2 | 2/2 = 1.0 |\n| 2 | \"cat sat\" | 2 (cat) | 1 | 1/2 = 0.5 |\n| 3 | \"sat the\" | 1 (sat) | 1 | 1/1 = 1.0 |\n| 4 | \"cat ran\" | 2 (cat) | 1 | 1/2 = 0.5 |\n| 5 | \"the dog\" (unseen) | 2 (the) | 0 | 0/2 = 0.0 (before smoothing) |\n| 6 | \"the dog\" (after add-1) | 2 + V | 0 + 1 | 1/(2+V) with V=4: 1/6 ≈ 0.17 |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\nimport math\n\nclass NGramLanguageModel:\n    def __init__(self, n=2):\n        self.n = n\n        self.counts = defaultdict(int)\n        self.vocab = set()\n\n    def train(self, corpus):\n        tokens = corpus.split()\n        self.vocab = set(tokens)\n        V = len(self.vocab)\n        for i in range(len(tokens) - self.n + 1):\n            gram = tuple(tokens[i:i+self.n])\n            prefix = tuple(tokens[i:i+self.n-1])\n            self.counts[gram] += 1\n            self.counts[prefix] += 1\n\n    def probability(self, gram):\n        V = len(self.vocab)\n        prefix = gram[:-1]\n        num = self.counts[gram] + 1\n        den = self.counts[prefix] + V\n        return num / den\n\n    def perplexity(self, test_corpus):\n        tokens = test_corpus.split()\n        log_prob = 0.0\n        N = len(tokens) - self.n + 1\n        for i in range(N):\n            gram = tuple(tokens[i:i+self.n])\n            log_prob += math.log2(self.probability(gram))\n        return 2 ** (-log_prob / N)\n\nlm = NGramLanguageModel(n=2)\nlm.train(\"the cat sat the cat ran the dog sat\")\nprint(\"P(the|cat):\", lm.probability((\"cat\", \"the\")))\nprint(\"P(ran|cat):\", lm.probability((\"cat\", \"ran\")))\nprint(\"Perplexity:\", lm.perplexity(\"the cat ran\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Training O(T) where T is corpus size. Inference O(1) per query via hash table lookup. Storage O(V^n) in worst case — a trigram model with 50K vocabulary would need 125 trillion entries (impossible in practice), which is why n > 5 is never used. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Larger n captures more context but suffers from data sparsity — most possible n-grams never appear in any finite corpus, no matter how large."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Smoothing Techniques:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace (add-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 1 to all counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severely over-estimates low-probability events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kneser-Ney"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discount seen counts, interpolate with lower-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art for n-grams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stupid backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use lower-order model for unseen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient, scales to Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a true probability distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good-Turing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust counts based on frequency of frequencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretically grounded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less effective for large vocabularies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages vs Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot capture long-range dependencies beyond n-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast training and inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sparsity at higher n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretable probabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No notion of word similarity (\"dog\" and \"cat\" treated independently)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for small, domain-specific corpora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential growth of parameters with n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " OOV words receive zero unsmoothed probability; out-of-domain text produces poor perplexity; compound words in German cause sparsity; numbers and punctuation create artificial sparsity; sentence boundaries require special start/end tokens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1212-perplexity",
      children: "12.1.2 Perplexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Perplexity"
      }), " measures how \"surprised\" the model is by test data — lower = better."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perplexity(w_{1:n}) = P(w_{1:n})^{-1/n} = pow(prod_{i=1}^n 1/P(wi | w_{1:i-1}), 1/n)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human text perplexity typically ranges 50–1000. Modern neural LMs (GPT-3) achieve below 20 on some benchmarks. A model assigning uniform random probability over V words would have perplexity = V (useless baseline)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-text-classification",
      children: "12.2 Text Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Text classification is like a mail carrier sorting envelopes — is this a bill, a personal letter, or junk mail? The system learns patterns (words like \"invoice\", \"dear\", \"free money\") that distinguish categories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text classification assigns a document to one or more predefined categories."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1221-naive-bayes-classifier",
      children: "12.2.1 Naive Bayes Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute prior P(c) for each class: count(docs with label c) / total_docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each class c, compute P(w|c) = (count(w in c) + 1) / (total words in c + V) — Laplace smoothing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a new document d with words w1...wn, compute score(c) = log P(c) + sum log P(wi|c)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the class with maximum score."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function TRAIN-NAIVE-BAYES(docs, labels):\n    classes = unique(labels)\n    for each class c:\n        prior[c] = count(docs with label c) / len(docs)\n    for each class c:\n        concat all docs in c\n        for each word w in vocab:\n            P(w|c) = (count(w in c) + 1) / (total_words_in_c + V)\n    return prior, P(w|c)\n\nfunction CLASSIFY(doc, prior, P_w_given_c, classes):\n    scores = {}\n    for each class c:\n        scores[c] = log(prior[c])\n        for each word w in doc:\n            scores[c] += log(P(w|c))\n    return argmax_c scores[c]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nTraining: \"good movie\" (pos), \"bad film\" (neg), \"great acting\" (pos), \"terrible plot\" (neg)\nTest: \"good film\"\n| Step | Class | Prior | log(prior) | P(good|c) | log P(good) | P(film|c) | log P(film) | Total |\n|------|-------|-------|------------|-----------|-------------|-----------|-------------|-------|\n| 0 | pos | 0.5 | -0.301 | — | — | — | — | -0.301 |\n| 1 | pos | — | — | (1+1)/(4+8)=0.167 | -0.778 | (0+1)/(4+8)=0.083 | -1.079 | -2.158 |\n| 2 | neg | 0.5 | -0.301 | — | — | — | — | -0.301 |\n| 3 | neg | — | — | (0+1)/(4+8)=0.083 | -1.079 | (1+1)/(4+8)=0.167 | -0.778 | -2.158 |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tie (both -2.158) — symmetrical case; in practice, more data breaks ties."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\nimport math\n\nclass NaiveBayesClassifier:\n    def __init__(self):\n        self.priors = {}\n        self.word_probs = defaultdict(lambda: defaultdict(float))\n        self.classes = []\n        self.vocab = set()\n\n    def train(self, docs, labels):\n        self.classes = list(set(labels))\n        total_docs = len(docs)\n        class_word_counts = defaultdict(lambda: defaultdict(int))\n        class_total_words = defaultdict(int)\n\n        for doc, label in zip(docs, labels):\n            words = doc.lower().split()\n            for w in words:\n                self.vocab.add(w)\n                class_word_counts[label][w] += 1\n                class_total_words[label] += 1\n            self.priors[label] = self.priors.get(label, 0) + 1\n\n        V = len(self.vocab)\n        for c in self.classes:\n            self.priors[c] /= total_docs\n            for w in self.vocab:\n                self.word_probs[c][w] = (class_word_counts[c][w] + 1) / (class_total_words[c] + V)\n\n    def predict(self, doc):\n        scores = {}\n        words = doc.lower().split()\n        for c in self.classes:\n            scores[c] = math.log(self.priors[c]) if self.priors[c] > 0 else float('-inf')\n            for w in words:\n                p = self.word_probs[c].get(w, 1 / (len(self.vocab) + 1))\n                scores[c] += math.log(p)\n        return max(scores, key=scores.get)\n\nnb = NaiveBayesClassifier()\nnb.train(\n    [\"good movie\", \"bad film\", \"great acting\", \"terrible plot\"],\n    [\"pos\", \"neg\", \"pos\", \"neg\"]\n)\nprint(\"Prediction:\", nb.predict(\"amazing movie\"))\nprint(\"Prediction:\", nb.predict(\"awful film\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Training O(D × L) where D = docs, L = avg doc length. Inference O(C × L) where C = classes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Pre-computed probabilities make prediction a simple sum of log-likelihoods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages vs Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast to train and predict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independence assumption is unrealistic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well with small data (100s of docs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot capture negation (\"not good\" ≈ \"bad\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incrementally updatable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to feature distribution shifts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles many features (100K+ words)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero probabilities require smoothing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Empty documents (return prior); out-of-vocabulary words (ignored with smoothing); severe class imbalance (priors dominate); multi-label classification requires one-vs-rest adaptation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1222-logistic-regression",
      children: "12.2.2 Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logistic regression learns weights θ for feature vector φ(d):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(c | d) = exp(θc^T φ(d)) / sum_{c'} exp(θ_{c'}^T φ(d))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike Naive Bayes, logistic regression makes no independence assumptions and automatically learns feature correlations. However, it requires more data and gradient-based training."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import Pipeline\n\ndocs = [\"good movie\", \"bad film\", \"great acting\", \"terrible plot\", \"awesome\", \"boring\"]\nlabels = [\"pos\", \"neg\", \"pos\", \"neg\", \"pos\", \"neg\"]\n\npipeline = Pipeline([\n    (\"vect\", CountVectorizer()),\n    (\"clf\", LogisticRegression(max_iter=1000))\n])\n\npipeline.fit(docs, labels)\nprint(pipeline.predict([\"fantastic movie\"]))\nprint(pipeline.predict([\"boring film\"]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-tokenization",
      children: "12.3 Tokenization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Breaking a sentence into tokens is like a chef chopping vegetables — each piece must be the right size for the recipe. Too big (whole sentence) and the model cannot see patterns. Too small (individual characters) and word-level meaning is lost. The right granularity (words or subwords) depends on the dish."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokenization is the process of splitting text into smaller units called tokens (words, subwords, or characters)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1231-word-tokenization",
      children: "12.3.1 Word Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split text on whitespace into preliminary tokens."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate punctuation from adjacent words (split \"hello!\" → \"hello\", \"!\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle contractions (\"don't\" → \"do\", \"n't\") using language-specific rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle special tokens: URLs, emails, hashtags, numbers, emoji."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the list of token strings."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function WORD-TOKENIZE(text):\n    tokens = []\n    word = \"\"\n    for char in text:\n        if char is alphanumeric or char == \"'\" or char == \"-\":\n            word += char\n        else:\n            if word != \"\":\n                tokens.append(word)\n                word = \"\"\n            if not (char == \" \" or char == \"\\t\" or char == \"\\n\"):\n                tokens.append(char)\n    if word != \"\":\n        tokens.append(word)\n    return tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nInput: \"I don't like pizza!\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Word"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'I'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "' '"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit \"I\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'d'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"d\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'o'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"do\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"n\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"don\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"'\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"don'\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'t'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"don't\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "' '"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit \"don't\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\", \"don't\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l' → 'i' → 'k' → 'e'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"like\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\", \"don't\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "' '"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit \"like\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\", \"don't\", \"like\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'p' → 'i' → 'z' → 'z' → 'a'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"pizza\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\", \"don't\", \"like\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'!'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit \"pizza\", append \"!\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"I\", \"don't\", \"like\", \"pizza\", \"!\"]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nimport nltk\nimport spacy\n\nnltk.download(\"punkt_tab\", quiet=True)\nnlp = spacy.load(\"en_core_web_sm\", disable=[\"tagger\", \"parser\", \"ner\", \"lemmatizer\"])\n\ntext = \"I don't like pizza! Visit https://example.com #NLP\"\n\n# NLTK word tokenization\nnltk_tokens = nltk.word_tokenize(text)\nprint(\"NLTK tokens:\", nltk_tokens)\n\n# spaCy tokenization\ndoc = nlp(text)\nspacy_tokens = [token.text for token in doc]\nprint(\"spaCy tokens:\", spacy_tokens)\n\n# Regex word tokenization (simple)\nregex_tokens = re.findall(r\"\\b\\w+\\b|[^\\w\\s]\", text)\nprint(\"Regex tokens:\", regex_tokens)\n\n# Character tokenization\nchar_tokens = list(text)\nprint(\"Char tokens (first 15):\", char_tokens[:15])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(N) where N = input length. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Each character is visited exactly once. Tokenization is the cheapest NLP operation."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple and fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOV words break downstream models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves word boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large vocabulary (50K-500K)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive for humans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"New York\" should be one token but split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"can't\" and \"cannot\" produce different token sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " URLs (", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), "), emoji sequences, hashtags (#NLP), at-mentions (@user), multi-word entities (\"New York\"), languages without spaces (Chinese, Japanese, Thai), mixed-script text, numbers with commas (1,234,567)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1232-subword-tokenization-bpe",
      children: "12.3.2 Subword Tokenization (BPE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Byte-Pair Encoding (BPE) merges the most frequent character pairs iteratively. Used by GPT, BERT, RoBERTa."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize vocabulary with all individual characters in the corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count all adjacent character/subword pairs across the corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge the most frequent pair into a new subword token."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the new token to the vocabulary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat steps 2-4 until target vocabulary size (e.g., 50K)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To tokenize new text, apply learned merges greedily (longest match first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function LEARN-BPE(corpus, num_merges):\n    vocab = all unique characters in corpus\n    splits = {word: list of characters for each word in corpus}\n    merges = []\n    for step in 1 to num_merges:\n        pairs = count all adjacent token pairs in all word splits\n        best = most frequent pair\n        merges.append(best)\n        for each word split:\n            replace adjacent best pair with merged symbol\n    return merges\n\nfunction APPLY-BPE(word, merges):\n    tokens = list of characters in word\n    for each merge in merges:\n        for i = 0 to len(tokens)-1:\n            if tokens[i] == merge[0] and tokens[i+1] == merge[1]:\n                tokens[i] = merge[0] + merge[1]\n                delete tokens[i+1]\n                restart loop\n    return tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nCorpus: \"low lower lowest\" (token counts: low=1, lower=1, lowest=1)\nInitial vocab: l, o, w, e, r, s, t"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Merge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pair"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Merged"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Vocab Entry"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(l,o)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"lo\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(lo,w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"low\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(e,r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"er\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "er"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(low,er)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"lower\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(e,s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"es\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "es"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(low,es)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"lowes\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lowes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(lowes,t)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"lowest\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lowest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After merges: \"lowest\" = [\"low\", \"es\", \"t\"] if we stop after merge 5 (vocab = 13). BPE learns that \"low\" is a useful shared unit across all three words."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\nclass BPE:\n    def __init__(self, vocab_size=50):\n        self.vocab_size = vocab_size\n        self.merges = {}\n\n    def train(self, corpus):\n        word_freqs = defaultdict(int)\n        for line in corpus.lower().split():\n            word = \" \".join(list(line)) + \" </w>\"\n            word_freqs[word] += 1\n\n        for i in range(self.vocab_size - 256):\n            pairs = defaultdict(int)\n            for word, freq in word_freqs.items():\n                symbols = word.split()\n                for j in range(len(symbols) - 1):\n                    pairs[(symbols[j], symbols[j+1])] += freq\n            if not pairs:\n                break\n            best = max(pairs, key=pairs.get)\n            self.merges[best] = i\n            new_word_freqs = defaultdict(int)\n            for word, freq in word_freqs.items():\n                new_word = word.replace(\" \".join(best), \"\".join(best))\n                new_word_freqs[new_word] = freq\n            word_freqs = new_word_freqs\n\n    def tokenize(self, text):\n        words = text.lower().split()\n        result = []\n        for word in words:\n            word = \" \".join(list(word)) + \" </w>\"\n            while True:\n                pairs = defaultdict(int)\n                symbols = word.split()\n                for j in range(len(symbols) - 1):\n                    pairs[(symbols[j], symbols[j+1])] += 1\n                candidates = [(p, self.merges.get(p, float('inf'))) for p in pairs]\n                candidates.sort(key=lambda x: x[1])\n                if not candidates or candidates[0][1] == float('inf'):\n                    break\n                best = candidates[0][0]\n                word = word.replace(\" \".join(best), \"\".join(best))\n            result.extend(word.split())\n        return result\n\nbpe = BPE(vocab_size=30)\nbpe.train(\"low lower lowest low low low\")\nprint(bpe.tokenize(\"lowest\"))\nprint(bpe.tokenize(\"lowering\"))  # OOV!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Training O(M × T) where M = merges, T = corpus tokens. Encoding O(L) per word with merge lookup. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Merge order is pre-computed; encoding greedily applies merges in a single pass."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles OOV words (breaks into known subwords)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merges are irreversible decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works across languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed vocabulary after training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compact representation (vs. characters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May create non-morphological splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used by GPT-4, BERT, LLaMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Rare Unicode glyphs (Chinese characters, emoji); numbers tokenize awkwardly (123 → \"1\", \"2\", \"3\"); code-switching between languages; whitespace-sensitive languages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-stemming-and-lemmatization",
      children: "12.4 Stemming and Lemmatization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Stemming is like a butcher cutting meat — rough, fast, loses detail. Lemmatization is like a surgeon making precise cuts — slower but preserves essential structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stemming chops off affixes heuristically; lemmatization uses vocabulary and morphological analysis to return the base dictionary form."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1241-porter-stemmer",
      children: "12.4.1 Porter Stemmer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove plural suffixes (-sses → -ss, -ies → -i, -s → remove if short)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove -ed, -ing, -ly with vowel-consonant (VC) checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove derivational suffixes (-al, -ance, -ence, -er, -ic, -able, -tion)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle special cases (double consonants, -ization → -ize, -fulness → -ful)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean final -e, -l, -al, -tion endings."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function PORTER-STEM(word):\n    // Step 1a: Plurals and past participles\n    if word ends with \"sses\": word = word[0:-4] + \"ss\"\n    elif word ends with \"ies\" and len(word) > 4: word = word[0:-3] + \"i\"\n    elif word ends with \"ss\": word = word  // unchanged\n    elif word ends with \"s\": word = word[0:-1]\n\n    // Step 1b: -ed, -ing\n    if word ends with \"eed\": word = word[0:-3] + \"ee\" if measure > 0\n    elif word ends with \"ed\" and word[0:-2] has VC:\n        word = word[0:-2]; handle double consonant/special endings\n    elif word ends with \"ing\" and word[0:-3] has VC:\n        word = word[0:-3]; handle double consonant/special endings\n\n    // Further steps omitted for brevity\n    return word\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nInput: \"processing\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not ending in sses/ies/ss/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ends in \"ing\"? Check VC in \"process\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "has VC? yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "process ends in \"ss\"? No special handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace \"ss\" with nothing? No suffix match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input: \"happiness\""
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "happiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ends in \"s\" and not \"ss\"? Remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "happines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "length check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace \"ness\" with nothing if measure>0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "happi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "measure(happi)=2 > 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace \"i\" with \"y\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import nltk\nfrom nltk.stem import PorterStemmer, LancasterStemmer, WordNetLemmatizer, SnowballStemmer\n\nnltk.download(\"wordnet\", quiet=True)\nnltk.download(\"omw-1.4\", quiet=True)\n\nporter = PorterStemmer()\nlancaster = LancasterStemmer()\nsnowball = SnowballStemmer(\"english\")\nlemmatizer = WordNetLemmatizer()\n\nwords = [\"running\", \"runner\", \"ran\", \"easily\", \"fairness\", \"studies\", \"better\", \"ate\", \"corpora\"]\nprint(f\"{'Word':12s} {'Porter':12s} {'Lancaster':12s} {'Snowball':12s} {'Lemma(v)':12s}\")\nprint(\"-\"*60)\nfor w in words:\n    p = porter.stem(w)\n    l = lancaster.stem(w)\n    s = snowball.stem(w)\n    m = lemmatizer.lemmatize(w, pos=\"v\")\n    print(f\"{w:12s} {p:12s} {l:12s} {s:12s} {m:12s}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(L) per word where L = word length. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Each suffix check is O(1) pattern matching; at most 5-6 sequential passes through the word. Porter runs in microseconds per word."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stemming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lemmatization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (O(L))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (dictionary + POS lookup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-stems (\"universe\" → \"univers\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precise (\"better\" → \"good\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not necessarily a real word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid dictionary word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requires POS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (for best results)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"studies\" → \"studi\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"studies\" → \"study\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple (Porter, Snowball)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only those with WordNet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search indexing, tf-idf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbots, translation, QA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Proper names stemmed incorrectly (\"Johnson\" → \"john\"); irregular English forms (\"went\" lemma → \"go\"); acronyms (\"NLP\") should NOT be stemmed; cross-lingual stemming requires language-specific stemmers; words with multiple valid base forms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-part-of-speech-tagging",
      children: "12.5 Part-of-Speech Tagging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " POS tagging is like a sports announcer calling out player positions — \"The quarterback (NOUN) throws (VERB) the ball (NOUN) quickly (ADV).\" Every word gets a role label that helps explain its function and relationship to other words."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "POS tagging assigns a grammatical tag (e.g., noun, verb, adjective, adverb) to each word in a sentence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1251-hmm-based-pos-tagging",
      children: "12.5.1 HMM-Based POS Tagging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the tag set (e.g., 12 universal tags or 45 Penn Treebank tags)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate transition probabilities P(ti | t_{i-1}) from a tagged corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate emission probabilities P(wi | ti) from a tagged corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For an untagged sentence, run the Viterbi algorithm to find the most probable tag sequence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viterbi uses dynamic programming: for each position, keep the best probability for each tag and the backpointer to the previous tag."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function VITERBI(words, trans, emit, tags):\n    n = len(words)\n    V = dict of dicts        // V[tag][pos] = best log probability\n    back = dict of dicts     // back[tag][pos] = previous tag\n\n    for each tag in tags:\n        V[tag][0] = log(trans[\"START\"][tag]) + log(emit[words[0]][tag])\n\n    for i = 1 to n-1:\n        for each tag t in tags:\n            best_prev = argmax over pt of V[pt][i-1] + log(trans[pt][t])\n            V[t][i] = V[best_prev][i-1] + log(trans[best_prev][t]) + log(emit[words[i]][t])\n            back[t][i] = best_prev\n\n    // Backtrace\n    last_tag = argmax over t of V[t][n-1]\n    sequence = [last_tag]\n    for i = n-1 down to 1:\n        sequence = [back[sequence[0]][i]] + sequence\n    return sequence\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nSentence: \"the cat sat\" (expected: DT NN VB)\nTransition matrix (log probabilities):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "from→to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "END"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emission matrix (log probs, only for words present):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "word→tag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "the"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.22"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Viterbi table (position → best scores per tag):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Word"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-12.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-12.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.96 (from DT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.31 (from DT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.20 (from DT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-4.08 (from NN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-3.43 (from NN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2.04 (from NN)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best path: DT(pos=0) → NN(pos=1) → VB(pos=2)\nResult: \"the/DT cat/NN sat/VB\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import nltk\nfrom nltk import pos_tag, word_tokenize\nfrom nltk.corpus import brown\nimport spacy\n\nnltk.download(\"brown\", quiet=True)\nnltk.download(\"universal_tagset\", quiet=True)\nnltk.download(\"averaged_perceptron_tagger_eng\", quiet=True)\n\nnlp = spacy.load(\"en_core_web_sm\")\nsentence = \"The quick brown fox jumps over the lazy dog\"\n\n# NLTK POS tagging\ntokens = word_tokenize(sentence)\nnltk_tags = pos_tag(tokens, tagset=\"universal\")\nprint(\"NLTK universal tags:\")\nfor word, tag in nltk_tags:\n    print(f\"  {word:10s} → {tag}\")\n\n# spaCy POS tagging\ndoc = nlp(sentence)\nprint(\"\\nspaCy POS tags:\")\nfor token in doc:\n    print(f\"  {token.text:10s} → {token.pos_:6s} (fine: {token.tag_:6s})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Viterbi O(T^2 × n) where T = number of tags, n = words. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " For each of n positions, we consider T tags, and each tag computes a max over T previous tags — hence T^2 per position."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1252-crf-based-tagging",
      children: "12.5.2 CRF-Based Tagging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CRF models P(t_{1:n} | w_{1:n}) directly and allows arbitrary overlapping features:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(t | w) = (1/Z(w)) * exp(∑λj * fj(t_{i-1}, ti, w, i))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Features can include word shape, capitalization, prefixes, suffixes, context words. CRFs avoid HMM label bias."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (Conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# sklearn-crfsuite interface (requires pip install sklearn-crfsuite)\ndef word2features(sent, i):\n    word = sent[i][0]\n    return {\n        \"word.lower\": word.lower(),\n        \"word.isupper\": word.isupper(),\n        \"word.istitle\": word.istitle(),\n        \"word.isdigit\": word.isdigit(),\n        \"suffix(-3)\": word[-3:],\n        \"suffix(-2)\": word[-2:],\n        \"prefix(2)\": word[:2],\n        \"prev_word\": sent[i-1][0].lower() if i > 0 else \"BOS\",\n        \"next_word\": sent[i+1][0].lower() if i < len(sent)-1 else \"EOS\",\n        \"prev_tag\": sent[i-1][1] if i > 0 else \"BOS\",\n    }\n\n# Training: crf.fit([sent2features(s) for s in train_sents], [sent2labels(s) for s in train_sents])\n# Inference: crf.predict([sent2features(s) for s in test_sents])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Unknown words (use suffix/prefix features); ambiguous words (\"bank\" = NOUN or VB); code-switching; punctuation; online/social media text with non-standard capitalization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-named-entity-recognition",
      children: "12.6 Named Entity Recognition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " NER is like a highlighter marking important names in a document — yellow for people, blue for places, green for organizations. Just as you scan a news article for names, NER automatically identifies and classifies named entities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NER identifies proper nouns and classifies them (Person, Organization, Location, Date, etc.) using BIO encoding (B(eginning), I(nside), O(utside) of an entity)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign BIO tags to each token (B-PER, I-PER, B-ORG, I-ORG, B-LOC, I-LOC, O)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract per-token features: capitalization, word shape, prefix, suffix, context, gazetteer membership."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train a sequence model (CRF or neural) on the tagged corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For new text, predict the tag sequence per token."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decode: group consecutive B-type + I-type tokens into named entities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function NER-DECODE(tokens, tags):\n    entities = []\n    i = 0\n    while i < len(tags):\n        if tags[i] starts with \"B-\":\n            entity_type = tags[i][2:]\n            start = i\n            i += 1\n            while i < len(tags) and tags[i] == \"I-\" + entity_type:\n                i += 1\n            entity_text = join(tokens[start:i])\n            entities.append((entity_type, entity_text))\n        else:\n            i += 1\n    return entities\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nInput: \"Apple CEO Tim Cook visited New York\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "is_title"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "in_gazetteer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prev_word"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "next_word"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Predicted Tag"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORG:Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-ORG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION:No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PER:Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-PER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PER:Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I-PER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOC:Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "York"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-LOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "York"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOC:Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I-LOC"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: [ORG: \"Apple\"] [PER: \"Tim Cook\"] [LOC: \"New York\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import nltk\nimport spacy\n\nnltk.download(\"maxent_ne_chunker_tab\", quiet=True)\nnltk.download(\"words\", quiet=True)\nnltk.download(\"punkt_tab\", quiet=True)\n\ntext = \"Apple Inc. was founded by Steve Jobs in Cupertino, California. Microsoft CEO Satya Nadella announced Azure AI.\"\n\n# NLTK NER\nprint(\"=== NLTK NER ===\")\ntokens = nltk.word_tokenize(text)\npos_tags = nltk.pos_tag(tokens)\nnltk_entities = nltk.ne_chunk(pos_tags)\nfor subtree in nltk_entities:\n    if hasattr(subtree, \"label\"):\n        print(f\"  {subtree.label()}: {' '.join(c[0] for c in subtree)}\")\n\n# spaCy NER\nprint(\"\\n=== spaCy NER ===\")\nnlp = spacy.load(\"en_core_web_sm\")\ndoc = nlp(text)\nfor ent in doc.ents:\n    print(f\"  {ent.label_:15s} → {ent.text}\")\n\n# Extract person names\nprint(\"\\n=== All Person Entities ===\")\npeople = [ent.text for ent in doc.ents if ent.label_ == \"PERSON\"]\nprint(\"\\n\".join(f\"  - {p}\" for p in people))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Inference O(n × T²) for CRF, O(n × d) for Transformer where d = hidden dim. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " CRF computes forward-backward over the tag lattice; Transformers process all tokens in parallel via self-attention."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extracts structured info from unstructured text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguous entities (\"Jordan\" = country or person)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for IE, QA, knowledge graph construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested entities (\"University of California, Berkeley\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SpaCy achieves 85-90% F1 on news text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain shift (news model fails on medical text)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires annotated training data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Overlapping entities (\"President George Washington of the United States\"); lowercase entities in social media; fictional entities; entity disambiguation (same name, different entities); partial entity mentions (\"the Bank\" when \"World Bank\" is the full entity)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-parsing",
      children: "12.7 Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Parsing is like diagramming sentences in grammar class — you draw tree structures showing how \"the cat\" forms a noun phrase that combines with \"sat\" to form a sentence. The parse tree reveals who did what to whom — the grammatical backbone of the sentence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1271-constituency-parsing-cky-algorithm",
      children: "12.7.1 Constituency Parsing (CKY Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Like assembling a puzzle — you start with pieces (words), combine into larger pieces (phrases), until the whole picture (sentence) emerges from the bottom up."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert grammar to Chomsky Normal Form (CNF): A → BC or A → w."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create triangular table of size n × n."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill diagonal with POS tags from words (lexical rules)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill cells rightward and upward: for each split point k between i and j, check if grammar has rule A → BC where B in table[i][k] and C in table[k+1][j]."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If S (start symbol) in table[0][n-1], sentence is grammatical."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backtrace through table to recover parse tree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function CKY(words, grammar):\n    n = len(words)\n    table = n x n array of empty sets\n\n    // Initialize diagonals with lexical rules\n    for j = 0 to n-1:\n        for each rule (A -> words[j]) in grammar:\n            table[j][j].add(A)\n\n    // Fill remaining cells\n    for j = 1 to n-1:                    // column (end position)\n        for i = j-1 down to 0:            // row (start position)\n            for k = i to j-1:             // split point\n                for each rule (A -> B C):\n                    if B in table[i][k] and C in table[k+1][j]:\n                        table[i][j].add(A)\n    return table\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nGrammar (CNF): S→NP VP, NP→Det N, NP→N, VP→V NP, VP→VP PP, PP→P NP, Det→\"the\", N→\"cat\"|\"dog\"|\"mat\", V→\"sat\"|\"chased\", P→\"on\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sentence: \"the cat sat on the mat\" (6 words, n=6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Table after diagonal (j=0 to 5):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i/j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0:the"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1:cat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2:sat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3:on"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4:the"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5:mat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Det"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Det"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After filling (j=1, then j=2, ..., j=5):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i/j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Det"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Det"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step-by-step combination trace:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(0,1): Det(0,0)+N(1,1) → NP (rule: NP→Det N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(4,5): Det(4,4)+N(5,5) → NP (rule: NP→Det N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(3,5): P(3,3)+NP(4,5) → PP (rule: PP→P NP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(2,5): V(2,2)+NP(3,5) → VP (rule: VP→V NP; but wait: VP→VP PP also applies via V[2,2]+PP[3,5])"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let me correct a proper trace:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(0,1): Det+N → NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(4,5): Det+N → NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(3,5): P+NP → PP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(2,3): V alone — no rule directly matches V alone at (2,2) to produce something at (2,2)... Actually (2,2) stays V."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hold — let me redo this more carefully with the correct grammar rules applied:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grammar includes: NP→Det N, VP→V NP, VP→VP PP, PP→P NP, S→NP VP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Valid derivations found in cells:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[0][1] = {NP}    (NP → Det N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[4][5] = {NP}    (NP → Det N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[3][5] = {PP}    (PP → P NP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[2][5] = {VP}    (VP → V NP) — but cats V at (2,2) with NP at (3,5)? No."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OK, the sentence \"the cat sat on the mat\" has \"sat\" as a intransitive verb? No, \"sat\" here is transitive? Actually \"the cat sat on the mat\" — \"sat\" doesn't take a direct object. Let me reconsider."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually: \"the cat sat on the mat\" — \"sat\" is intransitive, \"on the mat\" is a PP adjunct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grammar should have: VP→V, VP→V PP, PP→P NP, NP→Det N"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[0][1] = {NP} from Det+N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[1][1] = {N} already"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[2][2] = {V} already"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[3][4] can't combine directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[4][5] = {NP} from Det+N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[3][5] = {PP} from P+NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[2][5] = {VP} from V+PP (rule: VP→V PP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table[0][5] = {S} from NP+VP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let me just let the trace show a simpler sentence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"the cat chased the dog\" (5 words)\nGrammar: S→NP VP, NP→Det N, VP→V NP, Det→\"the\", N→\"cat\"|\"dog\", V→\"chased\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cells filled:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(0,1): Det(0,0)+N(1,1) → NP [NP→Det N]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(3,4): Det(3,3)+N(4,4) → NP [NP→Det N]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(2,4): V(2,2)+NP(3,4) → VP [VP→V NP]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(0,4): NP(0,1)+VP(2,4) → S [S→NP VP]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S in table[0][4]: sentence ACCEPTED."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import nltk\nfrom nltk import CFG\nfrom nltk.parse import ChartParser\n\ngrammar = CFG.fromstring(\"\"\"\n    S -> NP VP\n    NP -> Det N | 'John' | 'Mary'\n    VP -> V NP | V PP\n    PP -> P NP\n    Det -> 'the' | 'a'\n    N -> 'cat' | 'dog' | 'ball' | 'mat'\n    V -> 'chased' | 'sat'\n    P -> 'on' | 'with'\n\"\"\")\n\nparser = ChartParser(grammar)\nsentence = \"the cat chased the dog\".split()\n\nprint(\"Parse trees:\")\nfor tree in parser.parse(sentence):\n    tree.pretty_print()\n    print(tree)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n³ × |G|) where n = sentence length, |G| = grammar size. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Three nested loops (i,j,k) each O(n), plus iterating grammar rules. For n=20, O(8000) operations. For n=100, O(1M) — too slow for real-time use."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete structural analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires CNF grammar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finds all possible parses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) limits sentence length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood, proven algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brittle on ungrammatical input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extensible to PCFG (probabilistic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not rank parses (needs PCFG)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Garden-path sentences (\"The horse raced past the barn fell\"); fragments; very long sentences (timeout > 30 words); missing grammar rules produce no parse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1272-statistical-parsing-pcfg",
      children: "12.7.2 Statistical Parsing (PCFG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Probabilistic CFGs assign probabilities to rules. The probability of a parse tree is the product of its rule probabilities. CKY+ finds the most probable parse."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lexicalized PCFGs"
      }), " condition rules on head words. The Collins parser (1999) showed that lexicalization dramatically improves attachment accuracy (from 75% to 88%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from nltk.corpus import treebank\nfrom nltk import PCFG, Nonterminal\n\n# Learn a PCFG from treebank data\nproductions = []\nfor tree in treebank.parsed_sents()[:100]:\n    tree.chomsky_normal_form()\n    productions += tree.productions()\n\n# Create PCFG\ngrammar = PCFG.starting_with(productions)\nprint(f\"Learned {len(grammar.productions())} productions from Treebank\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1273-dependency-parsing",
      children: "12.7.3 Dependency Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Dependency parsing is like a family tree where each person has exactly one parent. \"I saw the cat\" — \"saw\" is the root, \"I\" depends on \"saw\" (nsubj), \"cat\" depends on \"saw\" (dobj), \"the\" depends on \"cat\" (det)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Transition-based):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with all words in a buffer, empty stack, empty arc set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At each step, choose: SHIFT (move word from buffer to stack), LEFT-ARC (add arc from buffer to stack top, pop stack), or RIGHT-ARC (add arc from stack to buffer, push)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue until buffer empty and stack size = 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The remaining word is the root."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import spacy\nfrom spacy import displacy\n\nnlp = spacy.load(\"en_core_web_sm\")\ndoc = nlp(\"I saw the cat with a telescope\")\n\nprint(f\"{'Token':10s} {'Dep':12s} {'Head':10s} {'Children'}\")\nprint(\"-\" * 45)\nfor token in doc:\n    children = [c.text for c in token.children]\n    print(f\"{token.text:10s} {token.dep_:12s} {token.head.text:10s} {str(children):20s}\")\n\n# Visualize\ndisplacy.render(doc, style=\"dep\", jupyter=False)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-word-embeddings",
      children: "12.8 Word Embeddings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Word embeddings are like arranging a library where similar books are shelved together — fiction, history, science each have their own section. In vector space, \"king\" - \"man\" + \"woman\" ≈ \"queen\". Proximity encodes semantic similarity; vector arithmetic captures analogies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1281-word2vec-skip-gram",
      children: "12.8.1 Word2Vec (Skip-Gram)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Skip-Gram):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window over text: for each center word, collect context words within ±k positions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each (center, context) pair, treat as positive training example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Randomly sample k negative examples (center, random_word) for each positive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train a shallow neural network: one hidden layer of size d (100-300)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objective: maximize P(context|center) = sigmoid(embedding(center) · embedding(context))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The hidden layer weight matrix (×d) becomes the word embedding table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the embedding table for all words."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function WORD2VEC(corpus, d=100, window=5, neg_samples=5):\n    vocab = unique words in corpus\n    V = len(vocab)\n    W = random V x d matrix    // word embeddings\n    W_c = random d x V matrix  // context embeddings\n\n    for each position t in corpus:\n        center_word = corpus[t]\n        for context_word in corpus[t-window : t+window]:\n            // Positive example\n            gradient = sigmoid(-dot(W[center], W_c[context]))\n            W[center] += lr * gradient * W_c[context]\n            W_c[context] += lr * gradient * W[center]\n            // Negative samples\n            for _ in range(neg_samples):\n                neg_word = random word from vocab\n                gradient = sigmoid(dot(W[center], W_c[neg_word]))\n                W[center] -= lr * gradient * W_c[neg_word]\n                W_c[neg_word] -= lr * gradient * W[center]\n    return W    // word embedding matrix\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nCorpus: \"the cat sat on the mat\" (window=2, d=3, simplified)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Center"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update Direction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move vectors closer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move vectors closer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move vectors closer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative (sampled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push vectors apart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "book"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative (sampled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push vectors apart"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 100 epochs over corpus:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"cat\" and \"dog\" vectors are similar (co-occur in similar contexts: \"the __ sat\", \"the __ ran\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"cat\" and \"mat\" vectors are similar (appear together: \"on the mat\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"the\" vector is dissimilar from content words (frequent function word)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from gensim.models import Word2Vec\nimport nltk\n\nnltk.download(\"punkt_tab\", quiet=True)\n\nsentences = [\n    \"the cat sat on the mat\".split(),\n    \"the dog sat on the log\".split(),\n    \"cats and dogs are pets\".split(),\n    \"the cat chased the mouse\".split(),\n    \"the dog chased the ball\".split(),\n]\n\nmodel = Word2Vec(sentences, vector_size=50, window=3, min_count=1, sg=1, epochs=200)\nprint(\"Vector dim:\", model.wv[\"cat\"].shape)\nprint(\"Most similar to 'cat':\", model.wv.most_similar(\"cat\", topn=5))\nprint(\"Similarity(cat, dog):\", model.wv.similarity(\"cat\", \"dog\"))\nprint(\"Similarity(cat, the):\", model.wv.similarity(\"cat\", \"the\"))\n\n# Analogy: \"king - man + woman = queen\"\n# Requires a larger corpus for meaningful analogies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1282-glove-global-vectors",
      children: "12.8.2 GloVe (Global Vectors)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GloVe learns embeddings by factorizing the word co-occurrence matrix."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build matrix X where Xij = times word j appears in context of word i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply weighting function f(Xij) = (Xij / 100)^0.75 if Xij < 100, else 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn vectors wi, w̃j and biases bi, b̃j to satisfy:\nwi · w̃j + bi + b̃j ≈ log(Xij)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize weighted least squares error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final embedding = wi + w̃j (combine word and context vectors)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(V²) memory if storing full matrix — GloVe prunes to top k co-occurrences per word (k=100-200). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " The co-occurrence matrix is sparse but still very large; pruning is essential for tractability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1283-fasttext",
      children: "12.8.3 FastText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastText extends Word2Vec by representing each word as a bag of character n-grams (3-6 characters)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " FastText is like recognizing \"unhappiness\" by knowing the meaning of \"un-\", \"happy\", and \"-ness\" separately — it captures subword morphology, so rare/misspelled words still get meaningful vectors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each word, extract all character n-grams (n=3,4,5,6)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the full word as a special n-gram."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train a Skip-Gram model where the word's embedding = sum of its n-gram embeddings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For OOV words at inference: extract n-grams, sum their vectors."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from gensim.models import FastText\n\nsentences = [\n    \"the cat sat on the mat\".split(),\n    \"the dog sat on the log\".split(),\n    \"the cats ran quickly\".split(),\n]\n\nft_model = FastText(sentences, vector_size=50, window=3, min_count=1, epochs=200)\nprint(\"OOV word 'cats':\", ft_model.wv[\"cats\"][:5])\nprint(\"OOV word 'quicky':\", ft_model.wv[\"quicky\"][:5])  # misspelling of \"quickly\"\nprint(\"Most similar to 'cat':\", ft_model.wv.most_similar(\"cat\", topn=3))\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Word2Vec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GloVe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FastText"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BERT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shallow NN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix factorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shallow NN + subword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local (window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (corpus stats)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local (window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOV Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (subword)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BPE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polysemy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (once matrix built)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (days on GPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "768-1024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analogy tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Morphology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All NLP tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-transformers-bert-and-gpt",
      children: "12.9 Transformers, BERT, and GPT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " If RNNs read a sentence one word at a time (left to right), the Transformer reads ALL words at once and figures out which relate to which — like looking at a photograph where you see the whole scene simultaneously, not pixel by pixel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1291-the-transformer-architecture",
      children: "12.9.1 The Transformer Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert each input token to a d-dimensional embedding vector."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add positional encoding (sinusoidal or learned) so the model knows word order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each of L layers (12 for BERT-base, 96 for GPT-3):\na. Multi-head self-attention: each token computes attention to every other token.\nb. Layer normalization + residual connection.\nc. Feed-forward network (FFN): two linear layers with ReLU/GELU activation.\nd. Layer normalization + residual connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output: contextualized embeddings for each token."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-Attention Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each token embedding x, compute: Q = x·W_Q, K = x·W_K, V = x·W_V."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute attention scores: S = Q × K^T / sqrt(d_k) — scales dot products."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply softmax: A = softmax(S, dim=-1) — row-wise probability distribution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute output: O = A × V — weighted sum of values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function SELF-ATTENTION(X, W_Q, W_K, W_V):\n    // X: n x d matrix\n    Q = X @ W_Q            // n x d_k\n    K = X @ W_K            // n x d_k\n    V = X @ W_V            // n x d_v\n    scores = Q @ K.T       // n x n\n    scores = scores / sqrt(d_k)       // scale to prevent softmax saturation\n    weights = softmax(scores, dim=-1) // n x n\n    output = weights @ V              // n x d_v\n    return output\n\nfunction MULTI-HEAD-ATTENTION(X, heads, W_Q, W_K, W_V, W_O):\n    // Split into heads\n    Q = split(X @ W_Q, heads)  // each: n x (d_k/heads)\n    K = split(X @ W_K, heads)\n    V = split(X @ W_V, heads)\n    heads_out = []\n    for h in range(heads):\n        heads_out.append(ATTENTION(Q[h], K[h], V[h]))\n    concat = concatenate(heads_out)  // n x d_v\n    output = concat @ W_O            // n x d\n    return output\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      }), "\nInput: \"The cat sat\" (3 tokens, simplified 4-dim vectors)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1: Embeddings (3 × 4 matrix):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 2: Compute Q, K, V (assume W_Q = W_K = W_V = I, d_k = 4 for simplicity)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3: Dot product attention scores (Q × K^T):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.71"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.07"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 4: Scale by sqrt(4) = 2:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.54"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 5: Softmax per row (attention weights):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.42"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interpretation: \"cat\" attends 49% to itself, 28% to \"The\", 23% to \"sat\".\n\"The\" attends roughly equally (34%, 31%, 35%) — function words spread attention.\n\"sat\" attends most to itself (42%) and to \"The\" (31%)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nfrom transformers import AutoTokenizer, AutoModel\n\ntokenizer = AutoTokenizer.from_pretrained(\"bert-base-uncased\")\nmodel = AutoModel.from_pretrained(\"bert-base-uncased\")\n\ntext = \"The cat sat on the mat\"\ninputs = tokenizer(text, return_tensors=\"pt\")\n\nwith torch.no_grad():\n    outputs = model(**inputs)\n\nlast_hidden = outputs.last_hidden_state\nprint(f\"Input: [{text}]\")\nprint(f\"Input IDs shape: {inputs['input_ids'].shape}\")\nprint(f\"Output shape: {last_hidden.shape}\")\nprint(f\"CLS vector (first 10 dims): {last_hidden[0, 0, :10].numpy()}\")\n\n# Extract model config\nconfig = model.config\nprint(f\"\\nLayers: {config.num_hidden_layers}\")\nprint(f\"Attention heads: {config.num_attention_heads}\")\nprint(f\"Hidden size: {config.hidden_size}\")\nprint(f\"Vocab size: {config.vocab_size}\")\nprint(f\"Max position embeddings: {config.max_position_embeddings}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Self-attention O(n² × d) where n = sequence length, d = hidden dim. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " Every pair of tokens computes a dot product → n² comparisons. This is the Transformer's main limitation and why long documents need sparse attention (Longformer, BigBird) or linear attention (Performer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1292-bert-bidirectional-encoder-representations-from-transformers",
      children: "12.9.2 BERT (Bidirectional Encoder Representations from Transformers)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " BERT is like a student who reads sentences with blanks and must fill them using surrounding context — it learns language by playing \"fill in the masked word\" on billions of sentences."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoder-only architecture (bidirectional context)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-trained with MLM (15% tokens masked, predict them) and NSP (next sentence prediction)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune for: classification, QA, NER, semantic similarity, entailment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT-base: 110M params, 12 layers, 12 heads, 768 hidden dim."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BERT-large: 340M params, 24 layers, 16 heads, 1024 hidden dim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import pipeline\n\n# Sentiment classification\nclassifier = pipeline(\n    \"text-classification\",\n    model=\"distilbert-base-uncased-finetuned-sst-2-english\"\n)\nprint(classifier(\"This movie was absolutely fantastic!\"))\nprint(classifier(\"I hated every second of this film.\"))\n\n# NER with BERT\nner_pipeline = pipeline(\"ner\", model=\"dslim/bert-base-NER\")\ntext = \"Apple Inc. was founded by Steve Jobs in Cupertino.\"\nfor entity in ner_pipeline(text):\n    print(f\"  {entity['word']:15s} → {entity['entity']:10s} (score: {entity['score']:.3f})\")\n\n# Question Answering\nqa_pipeline = pipeline(\"question-answering\", model=\"distilbert-base-cased-distilled-squad\")\nresult = qa_pipeline(\n    question=\"Who founded Apple?\",\n    context=\"Steve Jobs and Steve Wozniak founded Apple Inc. in 1976.\"\n)\nprint(f\"\\nAnswer: {result['answer']} (confidence: {result['score']:.3f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1293-gpt-generative-pre-trained-transformer",
      children: "12.9.3 GPT (Generative Pre-trained Transformer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " GPT is like a student who reads left-to-right and must predict the next word — it learns language by generating continuations. Starting with GPT-1 (117M), scaling to GPT-3 (175B), it discovers grammar, reasoning, and world knowledge purely from next-token prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decoder-only architecture (causal/unidirectional attention)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each token can only attend to tokens on its left."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-trained with autoregressive language modeling (predict next token)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No fine-tuning needed — uses few-shot or zero-shot prompting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPT-3: 175B params, 96 layers, 96 heads, 12288 hidden dim, 2048 context length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPT-4: Estimated 1.7T params, MoE architecture, 128K context."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import pipeline\n\ngenerator = pipeline(\"text-generation\", model=\"gpt2\")\nprompt = \"Natural language processing is a field of\"\nresult = generator(\n    prompt,\n    max_length=100,\n    num_return_sequences=1,\n    temperature=0.8,\n    do_sample=True,\n    top_k=50\n)\nprint(\"Generated text:\")\nprint(result[0][\"generated_text\"])\n\n# GPT-2 for text completion (zero-shot)\nunmasker = pipeline(\"fill-mask\", model=\"distilbert-base-uncased\")\n# Note: GPT-2 cannot do fill-mask; BERT does. GPT generates.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1294-bert-vs-gpt",
      children: "12.9.4 BERT vs GPT"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BERT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unidirectional (causal mask)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MLM + NSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive LM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best At"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required per task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero/few-shot via prompting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, QA, NER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text generation, code, dialogue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT-large: 340M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-3: 175B, GPT-4: ~1.7T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096-128K tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel (all tokens)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential (one token at a time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next Token Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-100ms per token on GPU"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1210-lexical-semantics",
      children: "12.10 Lexical Semantics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WordNet"
      }), " is a lexical database organizing words into synsets (sets of synonyms) with semantic relations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hypernymy"
        }), " (is-a): \"dog\" → \"canine\" → \"mammal\" → \"animal\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hyponymy"
        }), " (kind-of): \"animal\" → \"bird\" → \"sparrow\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meronymy"
        }), " (part-of): \"hand\" → \"finger\" → \"knuckle\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Antonymy"
        }), " (opposite): \"hot\" ↔ \"cold\", \"fast\" ↔ \"slow\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Word Sense Disambiguation (WSD)"
      }), " determines which sense of a polysemous word is used in context. Example: \"The bank issued a loan\" — bank = financial institution, NOT river bank."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from nltk.corpus import wordnet\nfrom nltk.wsd import lesk\n\n# WordNet synsets\nsynsets = wordnet.synsets(\"bank\")\nprint(f\"'bank' has {len(synsets)} senses:\")\nfor i, syn in enumerate(synsets[:5]):\n    print(f\"  {i+1}. {syn.name():20s} → {syn.definition()}\")\n\n# Hypernym chain\ndog = wordnet.synsets(\"dog\")[0]\nprint(f\"\\nHypernym chain for '{dog.name()}':\")\ncurrent = dog\nwhile current.hypernyms():\n    print(f\"  {current.name():20s} is-a {current.hypernyms()[0].name()}\")\n    current = current.hypernyms()[0]\n\n# Lesk algorithm for WSD\nsentence = \"The bank issued a loan for the new house\"\nbest_synset = lesk(sentence.split(), \"bank\")\nprint(f\"\\nWSD for 'bank' in '{sentence}':\")\nprint(f\"  Best sense: {best_synset.name()}\")\nprint(f\"  Definition: {best_synset.definition()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1211-discourse-processing",
      children: "12.11 Discourse Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Discourse analysis is like understanding a movie plot, not just individual scenes — sentences connect via relations like Elaboration (\"For example...\"), Contrast (\"However...\"), and Result (\"Therefore...\"). These relations form the narrative structure of text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Discourse Relations (PDTB):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connective"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"She ate. Then she left.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Then, After, Before"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contrast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"He tried. However, he failed.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "However, But, Yet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cause/Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"It rained. Therefore, the game was canceled.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Therefore, Because, So"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"She bought a car. It was a red Tesla.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For example, Specifically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"If it rains, the game will be canceled.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If, Unless, Provided that"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Centering Theory"
      }), " models how attention shifts between entities across sentences, predicting which entity is most \"salient\" (the discourse topic)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1212-nlp-toolkits",
      children: "12.12 NLP Toolkits"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Toolkit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Features"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLTK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenizers, stemmers, taggers, parsers, corpora, classifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning and prototyping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaCy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast tokenization, POS, NER, dependency parsing, vectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HuggingFace Transformers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT, GPT, T5, LLaMA — 500K+ models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern NLP (all tasks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stanford Stanza"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70+ languages, full pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multilingual NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gensim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word2Vec, FastText, LDA, similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AllenNLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep learning NLP toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CoreNLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java-based, robust pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java, Python"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Comparison (NLTK vs spaCy vs HuggingFace):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import nltk\nimport spacy\nfrom transformers import pipeline\n\nnltk.download(\"punkt_tab\", quiet=True)\nnltk.download(\"averaged_perceptron_tagger_eng\", quiet=True)\n\ntext = \"Apple Inc. was founded by Steve Jobs in Cupertino, California in 1976.\"\n\n# NLTK\ntokens = nltk.word_tokenize(text)\ntags = nltk.pos_tag(tokens)\nprint(\"NLTK:\", tags[:3])\n\n# spaCy\nnlp = spacy.load(\"en_core_web_sm\")\ndoc = nlp(text)\nprint(\"spaCy:\", [(t.text, t.pos_) for t in doc][:3])\n\n# HuggingFace BERT NER\nner = pipeline(\"ner\", model=\"dslim/bert-base-NER\", aggregation_strategy=\"simple\")\nprint(\"BERT:\", ner(text)[:3])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "traditional-vs-neural-nlp",
      children: "Traditional vs Neural NLP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Neural NLP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (hand-crafted features: word shape, gazetteers, prefixes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned automatically from data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMM, CRF, SVM, Naive Bayes, Decision Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNN, LSTM, GRU, Transformer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with small data (100-10K examples)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires large data (100K+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — train from scratch per task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-trained on massive corpora (billions of tokens)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to n-gram range (2-5 words)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full context (512-128K tokens)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOV Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff, smoothing, character features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subword tokenization (BPE, WordPiece)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multilingual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate models, pipelines per language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-lingual transfer via multilingual pre-training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — feature weights are directly readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — attention weights ≠ full explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance (F1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80-85% on standard benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90-98% on standard benchmarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes on CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Days on GPU/TPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, 4-16GB RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU, 16-80GB VRAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenize → POS → NER → Rules → Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenize → BERT → Fine-tune → Output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLUE Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~70 (no pre-training)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90+ (BERT), Human baseline: 87"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500-2000 for full system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-50 (using pre-trained models via HuggingFace)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "word-embedding-methods-comparison",
      children: "Word Embedding Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Word2Vec (2013)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "GloVe (2014)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "FastText (2016)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "BERT (2018)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Shallow NN (2 layers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Matrix factorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Shallow NN + char n-grams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Transformer (12+ layers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local (±5-10 words)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Global (full corpus co-occurrence)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local (±5-10 words)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bidirectional (full sentence)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOV Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (n-gram composition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (BPE subword tokens)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polysemy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Single vector per word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Single vector per word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Single vector per word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Contextual (different per usage)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training Data Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1B tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6B tokens (Wikipedia+Gigaword)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16B tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.3B tokens (Books+Wikipedia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fast (CPU hours)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (matrix build + SGD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (CPU hours)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Slow (GPU/TPU days)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Dynamic (contextual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "768 (base), 1024 (large)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (V=50K, d=300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~60 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~60 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~120 MB (n-grams)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~440 MB (BERT-base)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (PCA on co-occurrence)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Semantic similarity, analogies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Analogy accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Morphologically rich languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fine-tuning for all NLP tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-attention-mechanism-in-transformers",
      children: "Q1: Explain the attention mechanism in Transformers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Attention computes a weighted sum of values, where weights are determined by the compatibility between a query and keys. Given input embeddings, each token projects to three vectors: Query (what am I looking for?), Key (what do I contain?), and Value (what information do I carry?). The process:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute similarity between each Query and all Keys via dot product: S = QK^T."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale by 1/√d_k to prevent softmax saturation (vanishing gradients)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply softmax to get probability weights (how much to focus on each token)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weighted sum of Values: Output = softmax(QK^T/√d_k) × V."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scaling factor is critical — without it, large values push softmax to near-one-hot distributions, providing almost zero gradient. Multi-head attention runs this in parallel with h=12-96 different learned projections, allowing each head to capture different relationships (syntax, semantics, position)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-compare-bert-and-gpt-when-would-you-use-each",
      children: "Q2: Compare BERT and GPT. When would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " BERT is an encoder-only model with bidirectional attention — it sees the full context left and right. GPT is decoder-only with causal (masked) attention — it only sees left context. BERT excels at understanding tasks: classification, NER, QA, entailment. GPT excels at generation: text completion, creative writing, code generation, dialogue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose BERT for: sentiment analysis, spam detection, entity extraction, document classification, any task where you need to analyze existing text. Choose GPT for: chatbots, content generation, summarization, translation, code generation, any task where you need to produce new text."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BERT requires fine-tuning per task; GPT works with prompting (few-shot or zero-shot)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-modern-nlp-systems-handle-out-of-vocabulary-oov-words",
      children: "Q3: How do modern NLP systems handle out-of-vocabulary (OOV) words?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Four main approaches:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subword tokenization (BPE/WordPiece/Unigram):"
        }), " Split OOV words into known subwords. \"unhappiness\" → [\"un\", \"happiness\"] or [\"un\", \"happi\", \"ness\"]. Every word is representable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Character-level fallback:"
        }), " If subword tokenization still fails (rare with BPE), fall to individual characters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FastText composition:"
        }), " Sum character n-gram vectors to create OOV embeddings on the fly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextual guessing:"
        }), " In Transformer models, the context surrounding the OOV word (which is now several subword tokens) helps infer its meaning through attention."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-static-and-contextual-embeddings",
      children: "Q4: What is the difference between static and contextual embeddings?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static embeddings (Word2Vec, GloVe, FastText) assign one fixed vector per word regardless of context. \"bank\" has the same vector in \"river bank\" and \"investment bank.\" Contextual embeddings (BERT, GPT, ELMo) assign different vectors based on surrounding words — \"bank\" in \"river bank\" and \"investment bank\" get different representations because self-attention incorporates the full sentence context."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-why-does-the-transformer-use-multi-head-attention-instead-of-single-head",
      children: "Q5: Why does the Transformer use multi-head attention instead of single-head?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different attention heads learn different relationship types. In \"The cat sat on the mat,\" one head might capture subject-verb dependency (\"cat\" → \"sat\"), another captures adjective-noun or determiner-noun (\"the\" → \"cat\"), another captures spatial relation (\"on\" → \"mat\"), another captures self-attention for positional encoding. The concatenation of all heads provides a richer representation than any single head."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-the-significance-of-positional-encoding-in-transformers",
      children: "Q6: Explain the significance of positional encoding in Transformers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike RNNs which process tokens sequentially (inherently ordered), Transformers process all tokens in parallel and have no built-in notion of position. Positional encoding adds a unique signal for each position. The original Transformer used sinusoidal functions: PE(pos, 2i) = sin(pos/10000^(2i/d)) and PE(pos, 2i+1) = cos(pos/10000^(2i/d)). This allows the model to learn relative positions (PE(pos+k) is a linear function of PE(pos)), enabling length generalization beyond the training context window."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NLP Techniques Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scale / Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT ranking (since 2019), NER, tokenization, n-gram models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT powers 1 in 10 queries; trillions of searches/year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Siri / Alexa"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASR → Tokenization → NER → Intent classification → Slot filling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Set a timer for 10 minutes\" → Intent: SetTimer, Slot: 10 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ChatGPT / GPT-4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BPE tokenization → Transformer decoder → RLHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100M+ users, generates billions of tokens daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gmail Smart Compose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-style autoregressive LM with user context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suggests completions, saves users 10% typing time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Translate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-decoder Transformer (Google Neural Machine Translation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ languages, 500M+ users, 143B words translated daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sentiment Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BERT fine-tuning, Naive Bayes, LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brands monitor Twitter/Reddit sentiment in real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spam Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Bayes, logistic regression, BERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gmail blocks 99.9% of 10M+ daily spam emails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grammarly / LanguageTool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POS tagging, dependency parsing, BERT, sequence labeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30M+ daily users, corrects grammar/style/tone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amazon Product Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query understanding, NER (brands/products), embedding similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"wireless noise-canceling headphones under $100\" → filtered results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthcare NLP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NER (diseases, drugs, procedures), relation extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract diagnoses from clinical notes, ICD-10 coding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Legal Document Review"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NER (parties, dates, clauses), text classification, information extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% reduction in document review time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Media Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentiment analysis, topic modeling, entity extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brand crisis detection, election monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-google-search-bert-integration",
      children: "Case Study: Google Search BERT Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before BERT, Google Search struggled with prepositions. For \"2019 brazil traveler to USA need visa,\" the system ignored \"to\" and returned results about Brazilians visiting other countries. After BERT's 2019 integration, the model correctly understood the directional relationship — a Brazilian wanting to travel TO the USA. This single change improved 1 in 10 search queries, the largest improvement in Google Search history."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-gmail-spam-filter",
      children: "Case Study: Gmail Spam Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gmail's spam filter processes billions of messages daily using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive Bayes classifier (first-line, fast filtering — catches 50% of spam)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep learning models (second-line — catches 99.9%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph-based analysis (third-line — detects spam campaigns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback signals (reported spam/ham)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system adapts to new spam patterns within minutes, crucial for rapidly evolving phishing campaigns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Generative/Discriminative?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Features"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N-gram LM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Word counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(V^n) vocab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language modeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Bayes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Word features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(V × C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Tag transitions+emissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(T² n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POS tagging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Discriminative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Arbitrary overlapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(T² n) training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NER, shallow parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCFG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule probabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n³"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word2Vec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Neural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Context windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(V × d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Neural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Self-attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n² × d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All modern NLP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Neural (encoder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bidirectional attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n² × d) per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Neural (decoder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Causal attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n² × d) per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generation tasks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--nlp-metrics",
      children: "Quick Reference — NLP Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Measures"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perplexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(w1...wn)^{-1/n}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LM quality (lower = better)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP / (TP + FP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many selected are relevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP / (TP + FN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many relevant are selected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1 Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × P × R / (P + R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harmonic mean of P and R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct tags / Total tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence labeling quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BP × exp(∑ log P_n / N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine translation quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE-L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS-based recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BERTScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine similarity of BERT embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic text similarity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N-gram LMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Bayes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMM/Viterbi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CKY Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BERT/GPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What problem does Kneser-Ney smoothing solve that Laplace (add-1) smoothing does not?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is faster to compute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It better handles unseen n-grams by discounting and interpolating with lower-order models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It only works for bigrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It guarantees integer counts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Kneser-Ney uses absolute discounting and interpolation with lower-order models, producing much better probability estimates for unseen n-grams than add-1 smoothing."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the key advantage of CRFs over HMMs for sequence labeling?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) CRFs are faster to train"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) CRFs model P(t|w) directly and support arbitrary overlapping features without independence assumptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) CRFs require less training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) CRFs always produce higher accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) CRFs are discriminative and can use arbitrary overlapping features, while HMMs require independence assumptions between observations given the state."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " The CKY algorithm requires the grammar to be in what normal form?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Greibach Normal Form"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Chomsky Normal Form"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Kuroda Normal Form"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Backus-Naur Form"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) CKY parsing requires the CFG to be in Chomsky Normal Form (rules are A → BC or A → w)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which word embedding method can produce vectors for out-of-vocabulary words at inference time?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Word2Vec"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) GloVe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) FastText"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both A and B"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) FastText uses character n-grams, so it can compose embeddings for unseen words even if the full word was not in the training vocabulary."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the primary advantage of the Transformer architecture over RNNs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Lower memory usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Parallel computation across all positions and no vanishing gradient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Smaller model size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Better for streaming data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The Transformer processes all tokens in parallel (no sequential recurrence) and avoids vanishing gradients through direct attention connections between any two positions."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " BERT is pre-trained using which two objectives?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Language modeling and translation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Masked Language Modeling (MLM) and Next Sentence Prediction (NSP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Classification and generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Autoencoding and autoregression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) BERT uses MLM (predict masked tokens) and NSP (predict if two sentences are consecutive) for pre-training."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " What does BIO encoding stand for in sequence labeling?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Binary, Inside, Outside"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Beginning, Inside, Outside"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Beginning, Inward, Outward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Basic, Indexed, Ordered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) BIO: Beginning marks the first token of an entity, Inside marks continuation, Outside marks non-entity tokens."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " Why does the Transformer use multi-head attention instead of single-head?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Multi-head is faster computationally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Each head can learn different attention patterns (syntax, semantics, position)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Multi-head uses less memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It allows smaller hidden dimensions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Different heads specialize in different relationships — one head may capture syntactic dependencies, another captures semantic similarity, another captures positional information."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9:"
      }), " What is the role of positional encoding in Transformers?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It encodes the position of the sentence in the document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It provides position information since self-attention is permutation-invariant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It helps with memory management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It encodes the length of the sequence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Self-attention processes all tokens simultaneously with no inherent order. Positional encoding injects sequence position information into the model."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10:"
      }), " Which of the following best describes the difference between stemming and lemmatization?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Stemming is faster but less accurate; lemmatization is slower but produces real words"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Stemming requires POS tags; lemmatization does not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Stemming is only for English; lemmatization works for all languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no practical difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>A) Stemming uses heuristic rules (fast, rough), lemmatization uses vocabulary/morphology (slower, precise output is a real word)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NLP spans the full pipeline from raw text through tokenization, language modeling, classification, sequence labeling, parsing, word embeddings, and Transformer-based deep learning. Modern NLP has undergone a paradigm shift:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistical era"
        }), " (1990s-2010s): N-gram LMs, HMMs, CRFs, SVM — hand-crafted features, small data, interpretable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embedding era"
        }), " (2013-2017): Word2Vec, GloVe, FastText — distributed representations, vector arithmetic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-training era"
        }), " (2018-present): BERT, GPT, T5 — massive pre-training, fine-tuning, few-shot learning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Transformer solved the fundamental limitations of RNNs (parallelization, long-range dependencies), and scaling laws show that larger models with more data consistently improve performance. The shift from static embeddings (Word2Vec) to contextual embeddings (BERT/GPT) was particularly transformative — enabling models to understand that \"bank\" means different things in \"river bank\" vs \"investment bank.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key toolkits (NLTK for learning, spaCy for production, HuggingFace Transformers for modern NLP) provide accessible implementations. The future is trending toward even larger models, multimodal NLP (text + images + speech), efficient architectures (sparse attention, mixture of experts), and improved reasoning capabilities through chain-of-thought and tool use."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the relationship between n-gram order and model quality. What are the practical limits on n-gram order?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why do CRFs often outperform HMMs for sequence labeling tasks?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does lexicalization improve PCFG parsing accuracy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare stemming and lemmatization. When would you use each in a search engine?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how BPE tokenization handles OOV words. Why is this critical for modern NLP?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between static word embeddings (Word2Vec) and contextual embeddings (BERT)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the Transformer use scaled dot-product attention instead of raw dot-product?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between BERT and GPT architectures and when you would choose each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the label bias problem in HMMs, and how do CRFs solve it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between constituency parsing and dependency parsing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train a trigram language model with Kneser-Ney smoothing on a 100K-word corpus. Compute perplexity on a held-out test set of 10K words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an HMM-based POS tagger with 12 universal tags using the Viterbi algorithm. Evaluate accuracy on the Brown corpus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a Python script using spaCy to extract all person, organization, and location entities from a news article. Compute precision and recall against a gold standard of 10 annotated articles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a naive Bayes classifier for sentiment analysis on the IMDB movie review dataset (25K train, 25K test). Compare with a logistic regression baseline."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train Word2Vec embeddings on a domain-specific corpus (e.g., medical abstracts) and evaluate using analogy tasks (doctor:hospital :: teacher:?)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement BPE tokenization from scratch on a small corpus. Show how the vocabulary evolves across merges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a text classification pipeline using BERT fine-tuning. Compare accuracy with naive Bayes on the same dataset."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the CKY algorithm for a PCFG in Chomsky Normal Form. Apply it to the ATIS corpus. Report the most probable parse for a test sentence containing at least 8 words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a minimal Transformer with one head of self-attention from scratch using NumPy (no PyTorch/TF). Demonstrate it on a tiny language modeling task with a vocabulary of 10 tokens."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune BERT for a multi-class text classification task (e.g., 20 Newsgroups). Analyze which layers encode the most task-specific information by probing intermediate representations (probing classifier at each layer)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete NLP pipeline for a question-answering system: document retrieval → passage ranking → answer extraction using BERT. Evaluate on SQuAD 2.0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare perplexity of GPT-2, a trigram model, and a unigram model on the same test set. Analyze the sources of improvement at each level."
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