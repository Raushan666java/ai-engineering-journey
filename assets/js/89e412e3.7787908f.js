"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[86128],{

/***/ 11995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_04_evaluation_of_ai_systems_md_89e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-04-evaluation-of-ai-systems-md-89e.json
const site_docs_courses_modern_ai_engineering_04_evaluation_of_ai_systems_md_89e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/04-evaluation-of-ai-systems","title":"Chapter 4: Evaluation of AI Systems","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/04-evaluation-of-ai-systems.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/04-evaluation-of-ai-systems","permalink":"/ai-engineering-journey/modern-ai-engineering/04-evaluation-of-ai-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-evaluation-of-ai-systems","slug":"/modern-ai-engineering/04-evaluation-of-ai-systems","title":"Chapter 4: Evaluation of AI Systems","sidebar_label":"Chapter 4: Evaluation of AI Systems","sidebar_position":4},"sidebar":"course-modern-ai-engineering","previous":{"title":"Chapter 3: Understanding Foundation Models","permalink":"/ai-engineering-journey/modern-ai-engineering/03-understanding-foundation-models"},"next":{"title":"Chapter 5: Prompt Engineering","permalink":"/ai-engineering-journey/modern-ai-engineering/05-prompt-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/modern-ai-engineering/04-evaluation-of-ai-systems.md


const frontMatter = {
	id: '04-evaluation-of-ai-systems',
	slug: '/modern-ai-engineering/04-evaluation-of-ai-systems',
	title: 'Chapter 4: Evaluation of AI Systems',
	sidebar_label: 'Chapter 4: Evaluation of AI Systems',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Evaluation of AI Systems';

const assets = {

};



const toc = [{
  "value": "4.1 Why Evaluation is Hard for Generative AI",
  "id": "41-why-evaluation-is-hard-for-generative-ai",
  "level": 2
}, {
  "value": "4.2 Automatic Metrics",
  "id": "42-automatic-metrics",
  "level": 2
}, {
  "value": "4.2.1 Classification Metrics",
  "id": "421-classification-metrics",
  "level": 3
}, {
  "value": "4.2.2 Text Generation Metrics",
  "id": "422-text-generation-metrics",
  "level": 3
}, {
  "value": "4.2.3 Metric Comparison Table",
  "id": "423-metric-comparison-table",
  "level": 3
}, {
  "value": "4.3 LLM-as-Judge Evaluation",
  "id": "43-llm-as-judge-evaluation",
  "level": 2
}, {
  "value": "4.3.1 G-Eval",
  "id": "431-g-eval",
  "level": 3
}, {
  "value": "4.3.2 Prometheus",
  "id": "432-prometheus",
  "level": 3
}, {
  "value": "4.3.3 MT-Bench",
  "id": "433-mt-bench",
  "level": 3
}, {
  "value": "4.3.4 Rubric-Based Evaluation",
  "id": "434-rubric-based-evaluation",
  "level": 3
}, {
  "value": "4.3.5 Calibration and Bias Mitigation",
  "id": "435-calibration-and-bias-mitigation",
  "level": 3
}, {
  "value": "4.4 Human Evaluation",
  "id": "44-human-evaluation",
  "level": 2
}, {
  "value": "4.4.1 Annotation Guidelines",
  "id": "441-annotation-guidelines",
  "level": 3
}, {
  "value": "4.4.2 Likert Scales",
  "id": "442-likert-scales",
  "level": 3
}, {
  "value": "4.4.3 Pairwise Comparison",
  "id": "443-pairwise-comparison",
  "level": 3
}, {
  "value": "4.4.4 Inter-Annotator Agreement",
  "id": "444-inter-annotator-agreement",
  "level": 3
}, {
  "value": "4.4.5 Crowdsourcing",
  "id": "445-crowdsourcing",
  "level": 3
}, {
  "value": "4.5 Task-Specific Evaluation",
  "id": "45-task-specific-evaluation",
  "level": 2
}, {
  "value": "4.5.1 Question Answering",
  "id": "451-question-answering",
  "level": 3
}, {
  "value": "4.5.2 Summarization",
  "id": "452-summarization",
  "level": 3
}, {
  "value": "4.5.3 Code Generation",
  "id": "453-code-generation",
  "level": 3
}, {
  "value": "4.5.4 Machine Translation",
  "id": "454-machine-translation",
  "level": 3
}, {
  "value": "4.6 Building Evaluation Datasets",
  "id": "46-building-evaluation-datasets",
  "level": 2
}, {
  "value": "4.6.1 Golden Dataset Creation",
  "id": "461-golden-dataset-creation",
  "level": 3
}, {
  "value": "4.6.2 Stratification",
  "id": "462-stratification",
  "level": 3
}, {
  "value": "4.6.3 Coverage",
  "id": "463-coverage",
  "level": 3
}, {
  "value": "4.6.4 Difficulty Tiers",
  "id": "464-difficulty-tiers",
  "level": 3
}, {
  "value": "4.7 Continuous Evaluation",
  "id": "47-continuous-evaluation",
  "level": 2
}, {
  "value": "4.7.1 Evaluation in Production",
  "id": "471-evaluation-in-production",
  "level": 3
}, {
  "value": "4.7.2 Monitoring Drift",
  "id": "472-monitoring-drift",
  "level": 3
}, {
  "value": "4.7.3 A/B Testing",
  "id": "473-ab-testing",
  "level": 3
}, {
  "value": "4.7.4 Canary Evaluation",
  "id": "474-canary-evaluation",
  "level": 3
}, {
  "value": "TypeScript Implementation",
  "id": "typescript-implementation",
  "level": 2
}, {
  "value": "EvaluationPipeline Class",
  "id": "evaluationpipeline-class",
  "level": 3
}, {
  "value": "EvalDataset Class",
  "id": "evaldataset-class",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "chapter-4-evaluation-of-ai-systems",
        children: "Chapter 4: Evaluation of AI Systems"
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
          children: "Explain why evaluating generative AI systems is fundamentally harder than evaluating traditional ML models"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Select appropriate automatic metrics for different AI tasks and understand their limitations"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement LLM-as-judge evaluation using rubric-based scoring and frameworks like G-Eval"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design human evaluation studies with proper annotation guidelines and inter-annotator agreement"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build and maintain golden evaluation datasets with stratified sampling and difficulty tiers"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Set up continuous evaluation pipelines for monitoring production AI systems"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Construct a complete ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EvaluationPipeline"
          }), " in TypeScript for metric computation and results aggregation"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-why-evaluation-is-hard-for-generative-ai",
      children: "4.1 Why Evaluation is Hard for Generative AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional machine learning evaluation relies on a single ground-truth label per example. A classifier either predicts correctly or it does not. Accuracy, precision, recall, and F1 score are well-understood and directly comparable across studies. Generative AI breaks this paradigm in several fundamental ways."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Open-ended outputs."
      }), " A language model asked to \"write a poem about spring\" can produce thousands of valid responses. There is no single correct answer. Even for constrained tasks like summarization, two equally faithful summaries may use completely different phrasing. This makes exact-match metrics nearly meaningless for creative or generative tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple valid answers."
      }), " When a user asks \"What are good ways to reduce carbon emissions?\", an AI might list policy changes, technological innovations, or behavioral shifts — all of which can be correct. Evaluators must judge not just whether the answer is right, but whether it is comprehensive, well-structured, and appropriately scoped."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subjective quality dimensions."
      }), " Quality in generative AI is multi-dimensional: helpfulness, harmlessness, honesty, coherence, fluency, relevance, creativity, instruction-following, and safety are all separate concerns. Two human raters may disagree on whether a response is \"helpful\" depending on their background, expectations, or cultural context."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Position bias and verbosity bias."
      }), " When using LLMs as evaluators, the order in which responses appear affects scores. Models tend to prefer longer, more verbose responses even when shorter ones are equally correct. They also exhibit self-enhancement bias, rating their own outputs higher."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation metric saturation."
      }), " Many standard benchmarks have become saturated as models improve. GPT-4 and Claude 3 achieve near-perfect scores on metrics like BLEU for translation and ROUGE for summarization, yet qualitative differences remain. Metrics that once distinguished good from bad models now fail to capture meaningful variation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph Challenges[\"Evaluation Challenges\"]\n        A[Open-Ended Outputs] --> D[No Single Ground Truth]\n        B[Multiple Valid Answers] --> D\n        C[Subjective Quality] --> E[Rater Disagreement]\n        F[Saturation of Metrics] --> G[Need for New Metrics]\n        H[Position / Verbosity Bias] --> I[Judge Calibration Needed]\n        D --> J[Statistical Robustness]\n        E --> J\n        G --> J\n        I --> J\n    end\n    \n    J --> K[\"Evaluation Strategy Stack\"]\n    K --> L[Automatic Metrics]\n    K --> M[LLM-as-Judge]\n    K --> N[Human Evaluation]\n    K --> O[Continuous Monitoring]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-automatic-metrics",
      children: "4.2 Automatic Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatic metrics provide a reproducible, low-cost signal for model evaluation. However, each metric makes assumptions about what constitutes \"good\" output, and these assumptions often break down for generative tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "421-classification-metrics",
      children: "4.2.1 Classification Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy"
      }), " measures the proportion of correct predictions. It is simple and intuitive but fails for imbalanced classes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Precision"
      }), " (true positives / predicted positives) measures how many selected items are relevant. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recall"
      }), " (true positives / actual positives) measures how many relevant items are selected. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F1 score"
      }), " is the harmonic mean of precision and recall, providing a single balanced measure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For generative tasks, these metrics apply when the output is categorical — for example, classifying whether a generated response contains harmful content (yes/no) or whether it correctly follows an instruction (pass/fail)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "422-text-generation-metrics",
      children: "4.2.2 Text Generation Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BLEU"
      }), " (Bilingual Evaluation Understudy) measures n-gram precision between generated and reference texts, with a brevity penalty to discourage short outputs. It was designed for machine translation and correlates poorly with human judgment for creative text."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ROUGE"
      }), " (Recall-Oriented Understudy for Gisting Evaluation) measures n-gram recall. ROUGE-1, ROUGE-2, and ROUGE-L (longest common subsequence) are standard for summarization. ROUGE correlates moderately with human judgment but cannot capture factual accuracy or semantic equivalence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "METEOR"
      }), " improves on BLEU by incorporating synonym matching, stemming, and word order. It has higher correlation with human judgment for translation and summarization tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BERTScore"
      }), " uses contextual embeddings from BERT to compute token-level similarity between generated and reference texts. It captures semantic similarity even when surface forms differ. BERTScore correlates well with human judgment but requires GPU inference for each evaluation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "chrF"
      }), " (character n-gram F-score) operates at the character level, making it robust for morphologically rich languages. It is language-agnostic and captures sub-word-level quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "423-metric-comparison-table",
      children: "4.2.3 Metric Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, interpretable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails on imbalanced data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision/Recall/F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification, content filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles imbalance, balanced view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires binary decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized, reproducible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor correlation with human judgment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple variants, widely used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect factual errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "METEOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation, summarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synonym handling, good correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BERTScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any text generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic matching, strong correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU needed, expensive at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chrF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multilingual text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language-agnostic, robust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores semantics entirely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-llm-as-judge-evaluation",
      children: "4.3 LLM-as-Judge Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using a strong language model to evaluate the outputs of another model has become one of the most popular evaluation strategies. An LLM judge can assess quality along multiple dimensions, handle open-ended outputs, and scale to thousands of examples without human annotators."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "431-g-eval",
      children: "4.3.1 G-Eval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G-Eval uses chain-of-thought reasoning and a rubric to score model outputs. The evaluator LLM follows a step-by-step process:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand the rubric"
        }), " — The judge reads the evaluation criteria (e.g., \"coherence: logical flow and structure\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze the output"
        }), " — The judge examines the generated text in the context of the input prompt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign a score"
        }), " — The judge outputs a score on a Likert scale (1-5), often with a justification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G-Eval achieves higher correlation with human judgment than automatic metrics, especially for coherence, consistency, and relevance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "432-prometheus",
      children: "4.3.2 Prometheus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prometheus is a specialized evaluation model fine-tuned to act as a judge. It uses a \"reference-based\" approach where the evaluator compares the generated output against a reference answer. Prometheus can also evaluate without a reference when none is available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tuned on 1M+ evaluation examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports custom scoring rubrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides detailed feedback and justifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles both absolute scoring and pairwise comparison"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "433-mt-bench",
      children: "4.3.3 MT-Bench"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MT-Bench is a multi-turn benchmark with 80 questions across 8 categories (writing, roleplay, reasoning, math, coding, extraction, STEM, humanities). Each conversation is scored by an LLM judge on a 1-10 scale. MT-Bench has become a standard for comparing chat models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "434-rubric-based-evaluation",
      children: "4.3.4 Rubric-Based Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rather than asking \"rate this response from 1-10\", rubric-based evaluation decomposes quality into specific, measurable criteria:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relevance:"
        }), " Does the response address the user's request?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correctness:"
        }), " Is the factual content accurate?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completeness:"
        }), " Does the response cover all necessary aspects?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clarity:"
        }), " Is the response well-structured and easy to understand?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety:"
        }), " Does the response avoid harmful or biased content?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each dimension is scored independently, allowing fine-grained analysis of model strengths and weaknesses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "435-calibration-and-bias-mitigation",
      children: "4.3.5 Calibration and Bias Mitigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM judges exhibit several biases that must be mitigated:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Position bias:"
        }), " Randomize the order of responses in pairwise comparison."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verbosity bias:"
        }), " Control for response length or penalize overly verbose outputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-enhancement bias:"
        }), " Use a different model as judge than the one being evaluated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format bias:"
        }), " Standardize input formatting and evaluation prompts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Input[\"Inputs\"]\n        A[Prompt]\n        B[Generated Output]\n        C[Reference Output]\n        D[Scoring Rubric]\n    end\n    \n    subgraph Judge[\"LLM Judge Pipeline\"]\n        E[Format Evaluation Prompt]\n        F[Chain-of-Thought Reasoning]\n        G[Score Assignment]\n        H[Calibration & Bias Check]\n    end\n    \n    subgraph Output[\"Outputs\"]\n        I[Dimensional Scores]\n        J[Justification]\n        K[Confidence Estimate]\n    end\n    \n    A --> E\n    B --> E\n    C --> E\n    D --> E\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n    H --> J\n    H --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-human-evaluation",
      children: "4.4 Human Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human evaluation remains the gold standard for assessing generative AI quality, especially for subjective dimensions like creativity, helpfulness, and safety. Despite being expensive and slow, human evaluation captures nuances that automated methods miss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "441-annotation-guidelines",
      children: "4.4.1 Annotation Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effective human evaluation requires detailed annotation guidelines that define:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task description:"
        }), " What evaluators should assess and why."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rating scale:"
        }), " Clear anchors for each score level (e.g., \"1 = completely irrelevant, 5 = perfectly addresses the query\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases:"
        }), " Examples of ambiguous or borderline responses and how to handle them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality control:"
        }), " Requirements for attention checks, minimum time per annotation, and inter-rater reliability targets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-constructed guideline includes annotated examples at each score level to calibrate raters before they begin."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "442-likert-scales",
      children: "4.4.2 Likert Scales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Likert scales (e.g., 1-5 or 1-7) are the most common rating format. The scale should be balanced with an odd number of options to allow a neutral midpoint. Each point must have a clear verbal anchor:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1: Completely unsatisfactory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2: Poor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3: Acceptable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4: Good"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5: Excellent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "443-pairwise-comparison",
      children: "4.4.3 Pairwise Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pairwise comparison (A vs. B) often produces more reliable results than absolute scoring. Raters see two responses side by side and choose which is better (or declare a tie). This is simpler than assigning absolute scores and produces ordinal rankings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pairwise comparisons can be aggregated using the Bradley-Terry model or Elo scoring to produce a global ranking of model outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "444-inter-annotator-agreement",
      children: "4.4.4 Inter-Annotator Agreement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inter-annotator agreement measures how consistently different raters evaluate the same outputs. Common metrics include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cohen's Kappa:"
        }), " Agreement between two raters, corrected for chance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fleiss' Kappa:"
        }), " Agreement among three or more raters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Krippendorff's Alpha:"
        }), " Handles any number of raters and any scale type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Kappa above 0.6 is considered substantial agreement. Low agreement indicates that guidelines need refinement or the evaluation criteria are too subjective."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "445-crowdsourcing",
      children: "4.4.5 Crowdsourcing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Platforms like Amazon Mechanical Turk, Surge AI, and Scale AI enable large-scale human evaluation. Best practices include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using qualification tests to select competent raters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Including gold-standard examples as attention checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collecting multiple ratings per example for statistical robustness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring rater performance over time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-task-specific-evaluation",
      children: "4.5 Task-Specific Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different AI tasks require different evaluation approaches. A single metric rarely captures all relevant quality dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "451-question-answering",
      children: "4.5.1 Question Answering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exact Match (EM):"
      }), " The proportion of generated answers that exactly match the reference answer. EM is strict — a single character difference counts as incorrect."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "F1 Score:"
      }), " Token-level overlap between the generated and reference answers, averaged across all examples. F1 is more forgiving than EM and captures partial correctness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For open-domain QA, evaluation must also consider ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "answer coverage"
      }), " (does the response address all implicit questions?) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "attribution"
      }), " (are claims supported by the provided context?)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "452-summarization",
      children: "4.5.2 Summarization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ROUGE"
      }), " remains the standard automatic metric, but it has significant limitations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It cannot detect factual hallucinations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It penalizes creative but valid rephrasing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It favors extractive summaries over abstractive ones."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Factuality evaluation"
      }), " requires specialized approaches: entailment models, fact extraction pipelines, or human verification. A summary may achieve high ROUGE while containing factual errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "453-code-generation",
      children: "4.5.3 Code Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pass@k:"
      }), " The probability that at least one of k generated samples passes unit tests. pass@1 is standard for correctness; pass@k (with k > 1) measures the model's ability to generate diverse correct solutions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional correctness:"
      }), " Whether generated code compiles, runs without errors, and produces correct outputs for held-out test cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code evaluation also considers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "style and efficiency"
      }), ", though these are harder to automate. Static analysis tools can enforce style guidelines, and algorithmic complexity can be verified against known optimal solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "454-machine-translation",
      children: "4.5.4 Machine Translation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BLEU"
      }), " is the most reported metric, despite its flaws. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMET"
      }), " (a neural metric using cross-lingual embeddings) correlates significantly better with human judgment. COMET-WMT (the version trained on WMT data) is the current state-of-the-art for translation evaluation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "radarChart\n    title \"Task-Specific Evaluation Coverage\"\n    axisLabels [\"QA: Factual Accuracy\", \"Summarization: Faithfulness\", \"Code: Correctness\", \"Translation: Fluency\", \"Creative: Originality\", \"Safety: Harmlessness\"]\n    data [\"Model A\", \"Model B\"]\n    values [\n        [0.95, 0.72, 0.88, 0.91, 0.45, 0.98],\n        [0.85, 0.68, 0.92, 0.83, 0.72, 0.91]\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-building-evaluation-datasets",
      children: "4.6 Building Evaluation Datasets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A high-quality evaluation dataset is the foundation of trustworthy evaluation. Poor dataset construction can invalidate all downstream metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-golden-dataset-creation",
      children: "4.6.1 Golden Dataset Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A \"golden\" evaluation dataset is a curated collection of input-output pairs that represent the full spectrum of real-world usage. Creation steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collect real user queries"
        }), " from logs, beta testers, or domain experts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stratify by category"
        }), " to ensure coverage of all use cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write high-quality reference answers"
        }), " using domain experts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate each example"
        }), " through peer review or consensus."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document difficult cases"
        }), " and edge-case handling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "462-stratification",
      children: "4.6.2 Stratification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stratified sampling ensures the evaluation dataset reflects the distribution of real-world queries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topic stratification:"
        }), " Equal representation of each domain category."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difficulty stratification:"
        }), " Tiered difficulty levels (easy, medium, hard)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Length stratification:"
        }), " Short, medium, and long input/output pairs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task type stratification:"
        }), " Different task types (qa, summarization, creative, coding)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "463-coverage",
      children: "4.6.3 Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coverage measures how well the dataset represents the space of possible inputs. Coverage gaps can lead to overestimation of model quality. Techniques for improving coverage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Taxonomy-based sampling:"
        }), " Create a hierarchical taxonomy of query types and sample from each leaf node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adversarial sampling:"
        }), " Intentionally collect edge cases and failure modes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributional coverage:"
        }), " Match the statistical properties of the production distribution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "464-difficulty-tiers",
      children: "4.6.4 Difficulty Tiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Organizing evaluation examples by difficulty enables more nuanced analysis:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy:"
        }), " Questions answerable from a single paragraph or common knowledge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Questions requiring multi-step reasoning or domain expertise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard:"
        }), " Questions requiring deep expertise, complex reasoning, or handling of ambiguity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This tiered structure allows tracking of model improvements at different capability levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-continuous-evaluation",
      children: "4.7 Continuous Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluation is not a one-time activity. Models degrade over time due to data drift, emerging edge cases, and changing user expectations. Continuous evaluation monitors model quality in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "471-evaluation-in-production",
      children: "4.7.1 Evaluation in Production"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production evaluation pipelines score every model response against automatic metrics and sample a subset for human or LLM-as-judge evaluation. Key components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time metric computation:"
        }), " Track response latency, length, detected refusals, and safety scores."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shadow evaluation:"
        }), " Run a champion model and a challenger model in parallel, comparing outputs without affecting user experience."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback loop:"
        }), " Incorporate explicit user feedback (thumbs up/down) and implicit signals (conversation length, rephrasing, abandonment)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "472-monitoring-drift",
      children: "4.7.2 Monitoring Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift detection compares current evaluation scores against historical baselines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score drift:"
        }), " Average BLEU/ROUGE/BERTScore drops below threshold."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution drift:"
        }), " Output length distribution, topic distribution, or refusal rate changes significantly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality drift:"
        }), " LLM-as-judge scores or human evaluation ratings decline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statistical tests (Kolmogorov-Smirnov, chi-squared, Z-tests) trigger alerts when drift is detected."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "473-ab-testing",
      children: "4.7.3 A/B Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing compares two model versions (or prompt strategies) on live traffic:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random assignment:"
        }), " Users are randomly assigned to control (current) and treatment (new) groups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric tracking:"
        }), " Both groups are scored on the same evaluation framework."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistical significance:"
        }), " A t-test or bootstrap analysis determines whether differences are meaningful."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback plan:"
        }), " The new version is progressively rolled out, with automatic rollback on metric regression."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "474-canary-evaluation",
      children: "4.7.4 Canary Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canary releases route a small percentage of traffic (e.g., 1-5%) to a new model version before full rollout. Canary evaluation monitors all metrics for a defined observation period. If no regressions are detected, traffic is gradually increased. This minimizes blast radius from quality regressions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation",
      children: "TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluationpipeline-class",
      children: "EvaluationPipeline Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EvaluationPipeline"
      }), " class orchestrates metric computation, LLM-as-judge scoring, and results aggregation into a single pipeline. It supports multiple metrics simultaneously and produces structured evaluation reports."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EvalSample {\n  id: string;\n  prompt: string;\n  generated: string;\n  reference?: string;\n  taskType: 'qa' | 'summarization' | 'code' | 'translation' | 'creative';\n  metadata?: Record<string, unknown>;\n}\n\ninterface EvaluationResult {\n  sampleId: string;\n  metrics: Record<string, number>;\n  llmScores?: Record<string, number>;\n  llmJustification?: string;\n  passed: boolean;\n  timestamp: number;\n}\n\ninterface MetricConfig {\n  name: string;\n  enabled: boolean;\n  weight: number;\n}\n\ninterface EvaluationConfig {\n  metrics: MetricConfig[];\n  llmJudge: {\n    enabled: boolean;\n    model: string;\n    rubric: Record<string, string>;\n    temperature: number;\n  };\n  thresholds: Record<string, number>;\n}\n\ntype MetricFn = (generated: string, reference?: string, prompt?: string) => number;\n\nclass EvaluationPipeline {\n  private metrics: Map<string, MetricFn> = new Map();\n  private config: EvaluationConfig;\n  private results: EvaluationResult[] = [];\n\n  constructor(config: EvaluationConfig) {\n    this.config = config;\n    this.registerDefaultMetrics();\n  }\n\n  private registerDefaultMetrics(): void {\n    this.metrics.set('bleu', (gen, ref) => {\n      if (!ref) return 0;\n      const genTokens = gen.toLowerCase().split(/\\s+/);\n      const refTokens = ref.toLowerCase().split(/\\s+/);\n      const genNgrams = new Map<string, number>();\n      for (let i = 0; i < genTokens.length - 1; i++) {\n        const ng = genTokens[i] + '_' + genTokens[i + 1];\n        genNgrams.set(ng, (genNgrams.get(ng) ?? 0) + 1);\n      }\n      const refNgrams = new Map<string, number>();\n      for (let i = 0; i < refTokens.length - 1; i++) {\n        const ng = refTokens[i] + '_' + refTokens[i + 1];\n        refNgrams.set(ng, (refNgrams.get(ng) ?? 0) + 1);\n      }\n      let matches = 0;\n      let total = 0;\n      genNgrams.forEach((count, ngram) => {\n        const refCount = refNgrams.get(ngram) ?? 0;\n        matches += Math.min(count, refCount);\n        total += count;\n      });\n      if (total === 0) return 0;\n      const precision = matches / total;\n      const bp = genTokens.length < refTokens.length\n        ? Math.exp(1 - refTokens.length / genTokens.length)\n        : 1;\n      return precision * bp;\n    });\n\n    this.metrics.set('rougeL', (gen, ref) => {\n      if (!ref) return 0;\n      const genTokens = gen.split(/\\s+/);\n      const refTokens = ref.split(/\\s+/);\n      const m = genTokens.length;\n      const n = refTokens.length;\n      const dp: number[][] = Array.from({ length: m + 1 }, () =>\n        Array(n + 1).fill(0)\n      );\n      for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n          if (genTokens[i - 1] === refTokens[j - 1]) {\n            dp[i][j] = dp[i - 1][j - 1] + 1;\n          } else {\n            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n          }\n        }\n      }\n      const lcs = dp[m][n];\n      if (m === 0 || n === 0) return 0;\n      const prec = lcs / m;\n      const rec = lcs / n;\n      if (prec + rec === 0) return 0;\n      return (2 * prec * rec) / (prec + rec);\n    });\n\n    this.metrics.set('exactMatch', (gen, ref) => {\n      if (!ref) return 0;\n      return gen.trim().toLowerCase() === ref.trim().toLowerCase() ? 1 : 0;\n    });\n\n    this.metrics.set('f1', (gen, ref) => {\n      if (!ref) return 0;\n      const genTokens = new Set(gen.toLowerCase().split(/\\s+/));\n      const refTokens = new Set(ref.toLowerCase().split(/\\s+/));\n      let intersection = 0;\n      genTokens.forEach((t) => { if (refTokens.has(t)) intersection++; });\n      const prec = genTokens.size > 0 ? intersection / genTokens.size : 0;\n      const rec = refTokens.size > 0 ? intersection / refTokens.size : 0;\n      if (prec + rec === 0) return 0;\n      return (2 * prec * rec) / (prec + rec);\n    });\n  }\n\n  registerCustomMetric(name: string, fn: MetricFn): void {\n    this.metrics.set(name, fn);\n  }\n\n  async evaluateSample(sample: EvalSample): Promise<EvaluationResult> {\n    const metrics: Record<string, number> = {};\n    for (const mc of this.config.metrics) {\n      if (!mc.enabled) continue;\n      const fn = this.metrics.get(mc.name);\n      if (fn) {\n        metrics[mc.name] = fn(sample.generated, sample.reference, sample.prompt);\n      }\n    }\n\n    let llmScores: Record<string, number> | undefined;\n    let llmJustification: string | undefined;\n\n    if (this.config.llmJudge.enabled) {\n      const judgeResult = await this.callLLMJudge(sample);\n      llmScores = judgeResult.scores;\n      llmJustification = judgeResult.justification;\n    }\n\n    const passed = this.evaluateThresholds(metrics, llmScores);\n\n    const result: EvaluationResult = {\n      sampleId: sample.id,\n      metrics,\n      llmScores,\n      llmJustification,\n      passed,\n      timestamp: Date.now(),\n    };\n\n    this.results.push(result);\n    return result;\n  }\n\n  private async callLLMJudge(\n    sample: EvalSample\n  ): Promise<{ scores: Record<string, number>; justification: string }> {\n    const rubricText = Object.entries(this.config.llmJudge.rubric)\n      .map(([dim, desc]) => `- ${dim}: ${desc}`)\n      .join('\\n');\n\n    const evalPrompt = [\n      'You are an expert evaluator. Assess the following response.',\n      `Task type: ${sample.taskType}`,\n      '',\n      `Prompt: ${sample.prompt}`,\n      `Response: ${sample.generated}`,\n      sample.reference ? `Reference: ${sample.reference}` : '',\n      '',\n      'Evaluation rubric:',\n      rubricText,\n      '',\n      'Score each dimension on a scale of 1-5.',\n      'Provide a brief justification for your scores.',\n      'Output as JSON: { \"scores\": { \"dimension\": number }, \"justification\": \"...\" }',\n    ].filter(Boolean).join('\\n');\n\n    // In production, this would call an LLM API\n    const mockScores: Record<string, number> = {};\n    for (const dim of Object.keys(this.config.llmJudge.rubric)) {\n      mockScores[dim] = 3 + Math.random() * 2;\n    }\n\n    return {\n      scores: mockScores,\n      justification: 'Simulated LLM judge evaluation (mock).',\n    };\n  }\n\n  private evaluateThresholds(\n    metrics: Record<string, number>,\n    llmScores?: Record<string, number>\n  ): boolean {\n    for (const [key, threshold] of Object.entries(this.config.thresholds)) {\n      if (key in metrics && metrics[key] < threshold) return false;\n      if (llmScores && key in llmScores && llmScores[key] < threshold) return false;\n    }\n    return true;\n  }\n\n  async evaluateBatch(samples: EvalSample[]): Promise<EvaluationResult[]> {\n    const results: EvaluationResult[] = [];\n    for (const sample of samples) {\n      results.push(await this.evaluateSample(sample));\n    }\n    return results;\n  }\n\n  aggregateResults(): {\n    mean: Record<string, number>;\n    std: Record<string, number>;\n    passRate: number;\n    totalSamples: number;\n  } {\n    const metricKeys = Object.keys(this.results[0]?.metrics ?? {});\n    const means: Record<string, number> = {};\n    const stds: Record<string, number> = {};\n\n    for (const key of metricKeys) {\n      const values = this.results.map((r) => r.metrics[key]);\n      const mean = values.reduce((a, b) => a + b, 0) / values.length;\n      const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;\n      means[key] = mean;\n      stds[key] = Math.sqrt(variance);\n    }\n\n    const passCount = this.results.filter((r) => r.passed).length;\n\n    return {\n      mean: means,\n      std: stds,\n      passRate: passCount / this.results.length,\n      totalSamples: this.results.length,\n    };\n  }\n\n  getResultsByThreshold(threshold: number): EvaluationResult[] {\n    return this.results.filter((r) => {\n      const avgMetric = Object.values(r.metrics).reduce((a, b) => a + b, 0) / Object.values(r.metrics).length;\n      return avgMetric >= threshold;\n    });\n  }\n\n  reset(): void {\n    this.results = [];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaldataset-class",
      children: "EvalDataset Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EvalDataset"
      }), " class manages golden evaluation datasets with stratified sampling, difficulty tiering, and coverage analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type DifficultyTier = 'easy' | 'medium' | 'hard';\n\ninterface DatasetSample {\n  id: string;\n  prompt: string;\n  reference: string;\n  category: string;\n  difficulty: DifficultyTier;\n  tags: string[];\n}\n\ninterface StratificationConfig {\n  categories: Record<string, number>;\n  difficulties: Record<DifficultyTier, number>;\n  minSamplesPerStratum: number;\n}\n\nclass EvalDataset {\n  private samples: DatasetSample[] = [];\n\n  constructor(private config?: StratificationConfig) {}\n\n  addSample(sample: DatasetSample): void {\n    this.samples.push(sample);\n  }\n\n  addBatch(samples: DatasetSample[]): void {\n    this.samples.push(...samples);\n  }\n\n  getStratifiedSplit(\n    trainRatio: number,\n    valRatio: number\n  ): { train: DatasetSample[]; val: DatasetSample[]; test: DatasetSample[] } {\n    const stratified = this.stratify();\n    const train: DatasetSample[] = [];\n    const val: DatasetSample[] = [];\n    const test: DatasetSample[] = [];\n\n    for (const stratum of stratified.values()) {\n      const shuffled = [...stratum].sort(() => Math.random() - 0.5);\n      const trainEnd = Math.floor(shuffled.length * trainRatio);\n      const valEnd = trainEnd + Math.floor(shuffled.length * valRatio);\n      train.push(...shuffled.slice(0, trainEnd));\n      val.push(...shuffled.slice(trainEnd, valEnd));\n      test.push(...shuffled.slice(valEnd));\n    }\n\n    return { train, val, test };\n  }\n\n  stratify(): Map<string, DatasetSample[]> {\n    const groups = new Map<string, DatasetSample[]>();\n    for (const s of this.samples) {\n      const key = `${s.category}:${s.difficulty}`;\n      if (!groups.has(key)) groups.set(key, []);\n      groups.get(key)!.push(s);\n    }\n    return groups;\n  }\n\n  getCoverageReport(): {\n    totalSamples: number;\n    categories: Record<string, number>;\n    difficulties: Record<string, number>;\n    categoryDifficultyMatrix: Record<string, Record<string, number>>;\n    tags: Record<string, number>;\n  } {\n    const categories: Record<string, number> = {};\n    const difficulties: Record<string, number> = {};\n    const matrix: Record<string, Record<string, number>> = {};\n    const tagCounts: Record<string, number> = {};\n\n    for (const s of this.samples) {\n      categories[s.category] = (categories[s.category] ?? 0) + 1;\n      difficulties[s.difficulty] = (difficulties[s.difficulty] ?? 0) + 1;\n      if (!matrix[s.category]) matrix[s.category] = {};\n      matrix[s.category][s.difficulty] = (matrix[s.category][s.difficulty] ?? 0) + 1;\n      for (const tag of s.tags) {\n        tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;\n      }\n    }\n\n    return {\n      totalSamples: this.samples.length,\n      categories,\n      difficulties,\n      categoryDifficultyMatrix: matrix,\n      tags: tagCounts,\n    };\n  }\n\n  filterByDifficulty(tier: DifficultyTier): DatasetSample[] {\n    return this.samples.filter((s) => s.difficulty === tier);\n  }\n\n  filterByCategory(category: string): DatasetSample[] {\n    return this.samples.filter((s) => s.category === category);\n  }\n\n  shuffle(seed?: number): void {\n    const rng = seed ? this.seededRandom(seed) : () => Math.random();\n    for (let i = this.samples.length - 1; i > 0; i--) {\n      const j = Math.floor(rng() * (i + 1));\n      [this.samples[i], this.samples[j]] = [this.samples[j], this.samples[i]];\n    }\n  }\n\n  private seededRandom(seed: number): () => number {\n    let s = seed;\n    return () => {\n      s = (s * 16807 + 0) % 2147483647;\n      return (s - 1) / 2147483646;\n    };\n  }\n\n  get size(): number {\n    return this.samples.length;\n  }\n\n  exportAsJSON(): string {\n    return JSON.stringify({ samples: this.samples, total: this.samples.length }, null, 2);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Evaluation of AI systems has fundamentally changed with the rise of generative models. The traditional metrics and pipelines that worked for classification and regression are insufficient for open-ended, multi-dimensional quality assessment. Modern evaluation requires a layered approach: automatic metrics for fast, reproducible signals; LLM-as-judge methods for scalable, rubric-based scoring; and human evaluation for gold-standard quality measurement. Building robust evaluation datasets with stratified coverage and difficulty tiers is essential for trustworthy assessment. Continuous evaluation in production — combining drift detection, A/B testing, and canary releases — ensures that quality is maintained over time. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EvaluationPipeline"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EvalDataset"
      }), " classes provide a concrete foundation for implementing these concepts in TypeScript-based AI systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never rely on a single metric; use a portfolio of automatic, LLM-based, and human evaluations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM-as-judge evaluation requires careful bias mitigation — randomize response order, control for length, and use separate judge models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build golden evaluation datasets early with stratified coverage across categories, difficulties, and task types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track inter-annotator agreement (Cohen's Kappa, Fleiss' Kappa) for all human evaluation studies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up continuous evaluation in production with drift detection, shadow evaluation, and canary releases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which of the following is NOT a challenge specific to evaluating generative AI systems?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Open-ended outputs with no single correct answer\nB) Multiple valid responses for the same prompt\nC) High computational cost of model training\nD) Subjective quality dimensions like helpfulness and safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. BERTScore differs from BLEU and ROUGE primarily because:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It requires human annotators for evaluation\nB) It uses contextual embeddings for semantic matching\nC) It is limited to translation tasks only\nD) It measures character-level n-gram overlap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What is the main purpose of inter-annotator agreement metrics like Cohen's Kappa?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) To measure how quickly annotators complete their work\nB) To determine the cost-effectiveness of human evaluation\nC) To assess how consistently different raters evaluate the same outputs\nD) To compare model performance against human baselines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. In LLM-as-judge evaluation, position bias refers to:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The judge model consistently preferring shorter responses\nB) The order in which responses appear affecting evaluation scores\nC) The judge model scoring its own outputs higher than other models\nD) The evaluator favoring responses with specific formatting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. pass@k is a standard evaluation metric for:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Machine translation quality\nB) Summarization faithfulness\nC) Code generation correctness\nD) Question answering accuracy"
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
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Extend the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EvaluationPipeline"
      }), " class with a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bertscore"
      }), " metric that computes token-level embedding similarity using a placeholder embedding function. Implement the metric registration and ensure it integrates with the existing pipeline configuration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class ExtendedEvaluationPipeline extends EvaluationPipeline {\n  constructor(config: EvaluationConfig) {\n    super(config);\n    this.registerBERTScore();\n  }\n\n  private registerBERTScore(): void {\n    this.registerCustomMetric('bertscore', (generated, reference) => {\n      if (!reference) return 0;\n      const genEmbeddings = this.simulateEmbeddings(generated);\n      const refEmbeddings = this.simulateEmbeddings(reference);\n      let similaritySum = 0;\n      let count = 0;\n      for (const [token, genEmb] of genEmbeddings) {\n        const refEmb = refEmbeddings.get(token);\n        if (refEmb) {\n          similaritySum += this.cosineSimilarity(genEmb, refEmb);\n          count++;\n        }\n      }\n      return count > 0 ? similaritySum / count : 0;\n    });\n  }\n\n  private simulateEmbeddings(text: string): Map<string, number[]> {\n    const tokens = text.toLowerCase().split(/\\s+/);\n    const map = new Map<string, number[]>();\n    for (const token of tokens) {\n      map.set(token, [token.length, token.charCodeAt(0) % 100 / 100]);\n    }\n    return map;\n  }\n\n  private cosineSimilarity(a: number[], b: number[]): number {\n    let dot = 0, na = 0, nb = 0;\n    for (let i = 0; i < a.length; i++) {\n      dot += a[i] * b[i];\n      na += a[i] * a[i];\n      nb += b[i] * b[i];\n    }\n    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PairwiseJudge"
      }), " class that compares two model outputs (A vs. B) and returns a winner, using an LLM judge. Include position bias mitigation by randomizing the order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface PairwiseResult {\n  winner: 'A' | 'B' | 'tie';\n  justification: string;\n  aFirst: boolean;\n}\n\nclass PairwiseJudge {\n  constructor(private model: string, private rubric: Record<string, string>) {}\n\n  async compare(\n    prompt: string,\n    outputA: string,\n    outputB: string\n  ): Promise<PairwiseResult> {\n    const aFirst = Math.random() > 0.5;\n    const first = aFirst ? outputA : outputB;\n    const second = aFirst ? outputB : outputA;\n\n    const rubricText = Object.entries(this.rubric)\n      .map(([d, desc]) => `- ${d}: ${desc}`).join('\\n');\n\n    const evalPrompt = [\n      'Compare the two responses below. Which is better?',\n      '',\n      `Prompt: ${prompt}`,\n      '',\n      `Response 1: ${first}`,\n      '',\n      `Response 2: ${second}`,\n      '',\n      'Rubric:',\n      rubricText,\n      '',\n      'Output JSON: { \"winner\": \"1\" | \"2\" | \"tie\", \"justification\": \"...\" }',\n    ].join('\\n');\n\n    // Simulated LLM call\n    const mockWinner = Math.random() > 0.33 ? '1' : '2';\n    const winnerFirst = mockWinner === '1';\n    const winner = aFirst\n      ? (winnerFirst ? 'A' : 'B')\n      : (winnerFirst ? 'B' : 'A');\n\n    return {\n      winner: winner as 'A' | 'B',\n      justification: 'Simulated pairwise comparison (mock).',\n      aFirst,\n    };\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DriftDetector"
      }), " class that monitors evaluation metric scores over time and triggers alerts when statistically significant drift is detected using a Z-test."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface DriftAlert {\n  metric: string;\n  previousMean: number;\n  currentMean: number;\n  zScore: number;\n  timestamp: number;\n}\n\nclass DriftDetector {\n  private history: Map<string, number[]> = new Map();\n  private alerts: DriftAlert[] = [];\n  private threshold: number;\n\n  constructor(threshold: number = 2.0) {\n    this.threshold = threshold;\n  }\n\n  addObservation(metrics: Record<string, number>): void {\n    for (const [key, value] of Object.entries(metrics)) {\n      if (!this.history.has(key)) this.history.set(key, []);\n      this.history.get(key)!.push(value);\n    }\n  }\n\n  checkForDrift(): DriftAlert[] {\n    const newAlerts: DriftAlert[] = [];\n    const windowSize = 100;\n\n    for (const [metric, values] of this.history) {\n      if (values.length < windowSize + 10) continue;\n      const previous = values.slice(-windowSize - 10, -10);\n      const current = values.slice(-10);\n      const prevMean = previous.reduce((a, b) => a + b, 0) / previous.length;\n      const currMean = current.reduce((a, b) => a + b, 0) / current.length;\n      const prevStd = Math.sqrt(\n        previous.reduce((a, b) => a + (b - prevMean) ** 2, 0) / previous.length\n      );\n      if (prevStd === 0) continue;\n      const zScore = Math.abs((currMean - prevMean) / prevStd);\n      if (zScore > this.threshold) {\n        const alert: DriftAlert = {\n          metric,\n          previousMean: prevMean,\n          currentMean: currMean,\n          zScore,\n          timestamp: Date.now(),\n        };\n        newAlerts.push(alert);\n        this.alerts.push(alert);\n      }\n    }\n\n    return newAlerts;\n  }\n\n  getAlerts(): DriftAlert[] {\n    return [...this.alerts];\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MetricCorrelationAnalyzer"
      }), " that computes the Pearson correlation between automatic metrics and LLM-judge scores across evaluation samples to identify which automatic metrics best predict human judgment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class MetricCorrelationAnalyzer {\n  analyze(\n    results: EvaluationResult[]\n  ): Record<string, { pearsonR: number; pValue: number }> {\n    const llmDimensions = new Set<string>();\n    for (const r of results) {\n      if (r.llmScores) Object.keys(r.llmScores).forEach((d) => llmDimensions.add(d));\n    }\n\n    const correlations: Record<string, { pearsonR: number; pValue: number }> = {};\n\n    for (const metric of Object.keys(results[0]?.metrics ?? {})) {\n      const metricVals: number[] = [];\n      const llmVals: number[] = [];\n      for (const r of results) {\n        if (!r.llmScores) continue;\n        const avgLlm = Object.values(r.llmScores).reduce((a, b) => a + b, 0) / Object.values(r.llmScores).length;\n        metricVals.push(r.metrics[metric]);\n        llmVals.push(avgLlm);\n      }\n      if (metricVals.length < 3) continue;\n      const n = metricVals.length;\n      const mx = metricVals.reduce((a, b) => a + b, 0) / n;\n      const my = llmVals.reduce((a, b) => a + b, 0) / n;\n      let num = 0, dx2 = 0, dy2 = 0;\n      for (let i = 0; i < n; i++) {\n        const dx = metricVals[i] - mx;\n        const dy = llmVals[i] - my;\n        num += dx * dy;\n        dx2 += dx * dx;\n        dy2 += dy * dy;\n      }\n      const denom = Math.sqrt(dx2 * dy2);\n      const r = denom === 0 ? 0 : num / denom;\n      const tStat = r * Math.sqrt((n - 2) / (1 - r * r + 1e-10));\n      const pValue = 2 * (1 - this.studentT_CDF(Math.abs(tStat), n - 2));\n      correlations[metric] = { pearsonR: r, pValue };\n    }\n\n    return correlations;\n  }\n\n  private studentT_CDF(t: number, df: number): number {\n    const x = df / (df + t * t);\n    return 1 - 0.5 * this.betaInc(x, df / 2, 0.5);\n  }\n\n  private betaInc(x: number, a: number, b: number): number {\n    if (x < 0 || x > 1) return 0;\n    if (x === 0 || x === 1) return x;\n    const bt = Math.exp(\n      this.lgamma(a + b) - this.lgamma(a) - this.lgamma(b) +\n      a * Math.log(x) + b * Math.log(1 - x)\n    );\n    if (x < (a + 1) / (a + b + 2)) {\n      return bt * this.betaCF(x, a, b) / a;\n    }\n    return 1 - bt * this.betaCF(1 - x, b, a) / b;\n  }\n\n  private lgamma(n: number): number {\n    if (n <= 1) return 0;\n    return (n - 0.5) * Math.log(n + 4.5) - (n + 4.5) + 2.5;\n  }\n\n  private betaCF(x: number, a: number, b: number): number {\n    const MAX_ITER = 100;\n    const EPS = 3e-7;\n    let qab = a + b;\n    let qap = a + 1;\n    let qam = a - 1;\n    let c = 1.0;\n    let d = 1.0 - qab * x / qap;\n    if (Math.abs(d) < 1e-20) d = 1e-20;\n    d = 1.0 / d;\n    let h = d;\n    for (let m = 1; m <= MAX_ITER; m++) {\n      const m2 = 2 * m;\n      let aa = m * (b - m) * x / ((qam + m2) * (a + m2));\n      d = 1.0 + aa * d;\n      if (Math.abs(d) < 1e-20) d = 1e-20;\n      c = 1.0 + aa / c;\n      if (Math.abs(c) < 1e-20) c = 1e-20;\n      d = 1.0 / d;\n      h *= d * c;\n      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));\n      d = 1.0 + aa * d;\n      if (Math.abs(d) < 1e-20) d = 1e-20;\n      c = 1.0 + aa / c;\n      if (Math.abs(c) < 1e-20) c = 1e-20;\n      d = 1.0 / d;\n      const del = d * c;\n      h *= del;\n      if (Math.abs(del - 1.0) < EPS) break;\n    }\n    return h;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CanaryEvaluator"
      }), " class that progressively increases traffic to a new model version while monitoring metrics. If any metric drops below a threshold, the canary is automatically rolled back."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface CanaryConfig {\n  modelName: string;\n  trafficSteps: number[];\n  minObservationsPerStep: number;\n  metricThresholds: Record<string, number>;\n  rollbackOnFailure: boolean;\n}\n\ninterface CanaryStatus {\n  currentTraffic: number;\n  step: number;\n  observations: number;\n  passed: boolean;\n  failureReason?: string;\n}\n\nclass CanaryEvaluator {\n  private config: CanaryConfig;\n  private step = 0;\n  private stepMetrics: Record<string, number[]> = {};\n  private status: CanaryStatus;\n\n  constructor(config: CanaryConfig) {\n    this.config = config;\n    this.status = {\n      currentTraffic: config.trafficSteps[0] ?? 0,\n      step: 0,\n      observations: 0,\n      passed: true,\n    };\n  }\n\n  recordObservation(metrics: Record<string, number>): CanaryStatus {\n    for (const [key, value] of Object.entries(metrics)) {\n      if (!this.stepMetrics[key]) this.stepMetrics[key] = [];\n      this.stepMetrics[key].push(value);\n    }\n    this.status.observations++;\n\n    if (this.status.observations >= this.config.minObservationsPerStep) {\n      const failed = this.evaluateStep();\n      if (failed) {\n        this.status.passed = false;\n        this.status.failureReason = `Metrics below thresholds at step ${this.step}`;\n        if (this.config.rollbackOnFailure) {\n          this.rollback();\n        }\n        return { ...this.status };\n      }\n      this.advanceStep();\n    }\n\n    return { ...this.status };\n  }\n\n  private evaluateStep(): boolean {\n    for (const [metric, values] of Object.entries(this.stepMetrics)) {\n      const threshold = this.config.metricThresholds[metric];\n      if (threshold === undefined) continue;\n      const mean = values.reduce((a, b) => a + b, 0) / values.length;\n      if (mean < threshold) return true;\n    }\n    return false;\n  }\n\n  private advanceStep(): void {\n    this.step++;\n    this.stepMetrics = {};\n    this.status.observations = 0;\n    this.status.step = this.step;\n    this.status.currentTraffic = this.config.trafficSteps[this.step] ?? 100;\n  }\n\n  private rollback(): void {\n    this.status.currentTraffic = 0;\n  }\n\n  getStatus(): CanaryStatus {\n    return { ...this.status };\n  }\n}\n"
        })
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