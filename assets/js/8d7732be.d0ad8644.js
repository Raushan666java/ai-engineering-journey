"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1029],{

/***/ 32760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_07_llm_evaluation_md_8d7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-11-llms-prompt-engineering-07-llm-evaluation-md-8d7.json
const site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_07_llm_evaluation_md_8d7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/llms-prompt-engineering/07-llm-evaluation","title":"LLM Evaluation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation.md","sourceDirName":"courses/ai-engineering-placement/11-llms-prompt-engineering","slug":"/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":154,"frontMatter":{"id":"07-llm-evaluation","slug":"/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation","title":"LLM Evaluation","sidebar_label":"LLM Evaluation","sidebar_position":154},"sidebar":"placementSidebar","previous":{"title":"Context Management","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/06-context-management"},"next":{"title":"Cost & Latency Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation.md


const frontMatter = {
	id: '07-llm-evaluation',
	slug: '/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation',
	title: 'LLM Evaluation',
	sidebar_label: 'LLM Evaluation',
	sidebar_position: 154
};
const contentTitle = 'LLM Evaluation';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "7.1 Evaluation Dimensions",
  "id": "71-evaluation-dimensions",
  "level": 2
}, {
  "value": "7.2 Automated Metrics",
  "id": "72-automated-metrics",
  "level": 2
}, {
  "value": "7.2.1 ROUGE (Recall-Oriented Understudy for Gisting Evaluation)",
  "id": "721-rouge-recall-oriented-understudy-for-gisting-evaluation",
  "level": 3
}, {
  "value": "7.2.2 BLEU (Bilingual Evaluation Understudy)",
  "id": "722-bleu-bilingual-evaluation-understudy",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "7.2.3 BERTScore",
  "id": "723-bertscore",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "7.2.4 METEOR",
  "id": "724-meteor",
  "level": 3
}, {
  "value": "7.3 Reference-Based Evaluation",
  "id": "73-reference-based-evaluation",
  "level": 2
}, {
  "value": "Building Reference Datasets",
  "id": "building-reference-datasets",
  "level": 3
}, {
  "value": "Scoring with Multiple References",
  "id": "scoring-with-multiple-references",
  "level": 3
}, {
  "value": "7.4 Reference-Free Evaluation",
  "id": "74-reference-free-evaluation",
  "level": 2
}, {
  "value": "7.4.1 Perplexity",
  "id": "741-perplexity",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "7.4.2 Self-Consistency",
  "id": "742-self-consistency",
  "level": 3
}, {
  "value": "7.4.3 LLM-as-Judge",
  "id": "743-llm-as-judge",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "7.4.4 Factual Consistency Check",
  "id": "744-factual-consistency-check",
  "level": 3
}, {
  "value": "7.5 Evaluation Datasets",
  "id": "75-evaluation-datasets",
  "level": 2
}, {
  "value": "Sampling Strategies",
  "id": "sampling-strategies",
  "level": 3
}, {
  "value": "Annotation Guidelines",
  "id": "annotation-guidelines",
  "level": 3
}, {
  "value": "7.6 Human Evaluation",
  "id": "76-human-evaluation",
  "level": 2
}, {
  "value": "7.6.1 Pairwise Comparison",
  "id": "761-pairwise-comparison",
  "level": 3
}, {
  "value": "7.6.2 Likert Scale Ratings",
  "id": "762-likert-scale-ratings",
  "level": 3
}, {
  "value": "7.6.3 Inter-Rater Agreement",
  "id": "763-inter-rater-agreement",
  "level": 3
}, {
  "value": "7.7 Task-Specific Benchmarks",
  "id": "77-task-specific-benchmarks",
  "level": 2
}, {
  "value": "7.8 Evaluation Pipelines",
  "id": "78-evaluation-pipelines",
  "level": 2
}, {
  "value": "CI/CD Integration",
  "id": "cicd-integration",
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
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "llm-evaluation",
        children: "LLM Evaluation"
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
            children: "Understand the dimensions of LLM output quality (accuracy, fluency, relevance, faithfulness)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design evaluation pipelines using reference-based and reference-free metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement automated metrics including ROUGE, BLEU, BERTScore, METEOR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build evaluation datasets with gold-standard annotations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assess model performance on task-specific benchmarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply human evaluation strategies for subjective quality dimensions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models are transforming every industry. Understanding how to prompt, evaluate, and optimize LLMs is a critical skill for AI engineers. This module covers the full LLM lifecycle from API calls to cost optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, faithfulness, relevance, coherence, fluency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE, BLEU, BERTScore, METEOR, chrF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference-Based Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing output against gold-standard answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference-Free Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-as-judge, self-evaluation, consistency checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building benchmarks, annotation guidelines, sampling strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likert scales, pairwise comparisons, inter-rater agreement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-Specific Benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMLU, HumanEval, TruthfulQA, GSM8K, HellaSwag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automation, CI/CD integration, regression tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[LLM Output] --> B{Evaluation Type}\r\n    B --> C[Automated Metrics]\r\n    B --> D[Human Evaluation]\r\n    B --> E[LLM-as-Judge]\r\n    C --> F{Has Reference?}\r\n    F -->|Yes| G[ROGUE / BLEU / BERTScore]\r\n    F -->|No| H[Consistency / Perplexity]\r\n    D --> I[Pairwise Comparison]\r\n    D --> J[Likert Rating]\r\n    E --> K[Scoring Rubric]\r\n    G --> L[Aggregate Scores]\r\n    H --> L\r\n    I --> L\r\n    J --> L\r\n    K --> L\r\n    L --> M[Regression Monitor]\r\n    M --> N[Deploy / Reject / Regress]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-evaluation-dimensions",
      children: "7.1 Evaluation Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM evaluation is multidimensional. No single metric captures all aspects of output quality. The core dimensions are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy"
      }), ": Does the output contain factual correctness? For question answering, accuracy measures whether the answer matches ground truth. For classification, it measures correct label assignment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Faithfulness"
      }), ": Does the output accurately reflect the source material without hallucination? A faithful summary does not introduce information absent from the input context."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relevance"
      }), ": Does the output address the user's query directly? Irrelevant content degrades user experience even if factually correct."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Coherence"
      }), ": Is the output logically structured and internally consistent? Sentences should flow naturally and maintain logical progression."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluency"
      }), ": Is the output grammatically correct and natural-sounding? Poor fluency indicates awkward phrasing or grammatical errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Optional\r\nimport json\r\n\r\n@dataclass\r\nclass EvaluationDimension:\r\n    name: str\r\n    score: float  # 0.0 to 1.0\r\n    weight: float = 1.0\r\n    details: Optional[str] = None\r\n\r\n@dataclass\r\nclass LLMOutputEvaluation:\r\n    prompt: str\r\n    output: str\r\n    reference: Optional[str] = None\r\n    dimensions: List[EvaluationDimension] = field(default_factory=list)\r\n\r\n    def weighted_score(self) -> float:\r\n        if not self.dimensions:\r\n            return 0.0\r\n        total_weight = sum(d.weight for d in self.dimensions)\r\n        if total_weight == 0:\r\n            return 0.0\r\n        weighted = sum(d.score * d.weight for d in self.dimensions)\r\n        return weighted / total_weight\r\n\r\n    def to_report(self) -> Dict:\r\n        return {\r\n            \"prompt\": self.prompt[:100],\r\n            \"output_length\": len(self.output),\r\n            \"dimensions\": {d.name: d.score for d in self.dimensions},\r\n            \"weighted_score\": round(self.weighted_score(), 3),\r\n        }\r\n\r\neval_result = LLMOutputEvaluation(\r\n    prompt=\"Summarize the benefits of renewable energy.\",\r\n    output=\"Renewable energy reduces carbon emissions and provides sustainable power.\",\r\n    reference=\"Renewable energy lowers greenhouse gas emissions and offers long-term sustainability.\",\r\n    dimensions=[\r\n        EvaluationDimension(name=\"accuracy\", score=0.9, weight=2.0),\r\n        EvaluationDimension(name=\"faithfulness\", score=0.95, weight=2.0),\r\n        EvaluationDimension(name=\"relevance\", score=1.0, weight=1.5),\r\n        EvaluationDimension(name=\"coherence\", score=1.0, weight=1.0),\r\n        EvaluationDimension(name=\"fluency\", score=1.0, weight=1.0),\r\n    ],\r\n)\r\nprint(json.dumps(eval_result.to_report(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weighting dimensions"
      }), " allows customization per task. For summarization, faithfulness may receive higher weight. For creative writing, fluency and coherence matter more."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-automated-metrics",
      children: "7.2 Automated Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated metrics enable scalable, reproducible evaluation of LLM outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-rouge-recall-oriented-understudy-for-gisting-evaluation",
      children: "7.2.1 ROUGE (Recall-Oriented Understudy for Gisting Evaluation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROUGE measures n-gram overlap between generated and reference texts. ROUGE-1 (unigrams), ROUGE-2 (bigrams), and ROUGE-L (longest common subsequence) are the most common variants."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\r\nfrom typing import List, Set\r\nimport math\r\n\r\ndef tokenize(text: str) -> List[str]:\r\n    return text.lower().split()\r\n\r\ndef ngrams(tokens: List[str], n: int) -> List[tuple]:\r\n    return [tuple(tokens[i:i + n]) for i in range(len(tokens) - n + 1)]\r\n\r\ndef rouge_n(candidate: str, reference: str, n: int) -> Dict[str, float]:\r\n    cand_ngrams = Counter(ngrams(tokenize(candidate), n))\r\n    ref_ngrams = Counter(ngrams(tokenize(reference), n))\r\n\r\n    overlap = sum((cand_ngrams & ref_ngrams).values())\r\n    cand_count = sum(cand_ngrams.values())\r\n    ref_count = sum(ref_ngrams.values())\r\n\r\n    precision = overlap / cand_count if cand_count > 0 else 0\r\n    recall = overlap / ref_count if ref_count > 0 else 0\r\n    f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0\r\n\r\n    return {\"precision\": round(precision, 4), \"recall\": round(recall, 4), \"f1\": round(f1, 4)}\r\n\r\ndef rouge_l(candidate: str, reference: str) -> Dict[str, float]:\r\n    cand_tokens = tokenize(candidate)\r\n    ref_tokens = tokenize(reference)\r\n\r\n    m, n = len(cand_tokens), len(ref_tokens)\r\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\r\n    for i in range(1, m + 1):\r\n        for j in range(1, n + 1):\r\n            if cand_tokens[i - 1] == ref_tokens[j - 1]:\r\n                dp[i][j] = dp[i - 1][j - 1] + 1\r\n            else:\r\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\r\n\r\n    lcs = dp[m][n]\r\n    precision = lcs / m if m > 0 else 0\r\n    recall = lcs / n if n > 0 else 0\r\n    f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0\r\n\r\n    return {\"precision\": round(precision, 4), \"recall\": round(recall, 4), \"f1\": round(f1, 4)}\r\n\r\ncandidate = \"The cat sat on the mat.\"\r\nreference = \"The cat sat on a mat.\"\r\n\r\nprint(\"ROUGE-1:\", rouge_n(candidate, reference, 1))\r\nprint(\"ROUGE-2:\", rouge_n(candidate, reference, 2))\r\nprint(\"ROUGE-L:\", rouge_l(candidate, reference))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-bleu-bilingual-evaluation-understudy",
      children: "7.2.2 BLEU (Bilingual Evaluation Understudy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BLEU computes precision of n-grams up to length N, with a brevity penalty to discourage short outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\r\n\r\ndef bleu(candidate: str, reference: str, max_n: int = 4) -> float:\r\n    cand_tokens = tokenize(candidate)\r\n    ref_tokens = tokenize(reference)\r\n\r\n    cand_len = len(cand_tokens)\r\n    ref_len = len(ref_tokens)\r\n\r\n    # Brevity penalty\r\n    bp = 1.0\r\n    if cand_len < ref_len:\r\n        bp = math.exp(1 - ref_len / cand_len) if cand_len > 0 else 0\r\n\r\n    log_avg = 0.0\r\n    for n in range(1, max_n + 1):\r\n        cand_ngrams = Counter(ngrams(cand_tokens, n))\r\n        ref_ngrams = Counter(ngrams(ref_tokens, n))\r\n\r\n        overlap = sum((cand_ngrams & ref_ngrams).values())\r\n        cand_count = sum(cand_ngrams.values())\r\n\r\n        if cand_count == 0 or overlap == 0:\r\n            return 0.0\r\n\r\n        precision = overlap / cand_count\r\n        log_avg += math.log(precision)\r\n\r\n    log_avg /= max_n\r\n    return round(bp * math.exp(log_avg), 4)\r\n\r\nprint(f\"BLEU-4: {bleu(candidate, reference)}\")\r\n\r\n## BLEU with multiple references\r\ndef bleu_multiref(candidate: str, references: List[str], max_n: int = 4) -> float:\r\n    cand_tokens = tokenize(candidate)\r\n    cand_len = len(cand_tokens)\r\n\r\n    ref_lens = [len(tokenize(r)) for r in references]\r\n    ref_len = min(ref_lens, key=lambda x: abs(x - cand_len))\r\n\r\n    bp = 1.0\r\n    if cand_len < ref_len:\r\n        bp = math.exp(1 - ref_len / cand_len) if cand_len > 0 else 0\r\n\r\n    log_avg = 0.0\r\n    for n in range(1, max_n + 1):\r\n        cand_ngrams = Counter(ngrams(cand_tokens, n))\r\n\r\n        max_ref_counts = Counter()\r\n        for ref in references:\r\n            ref_ngrams = Counter(ngrams(tokenize(ref), n))\r\n            for ngram, count in ref_ngrams.items():\r\n                if count > max_ref_counts[ngram]:\r\n                    max_ref_counts[ngram] = count\r\n\r\n        overlap = sum((cand_ngrams & max_ref_counts).values())\r\n        cand_count = sum(cand_ngrams.values())\r\n\r\n        if cand_count == 0 or overlap == 0:\r\n            return 0.0\r\n\r\n        precision = overlap / cand_count\r\n        log_avg += math.log(precision)\r\n\r\n    log_avg /= max_n\r\n    return round(bp * math.exp(log_avg), 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "723-bertscore",
      children: "7.2.3 BERTScore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BERTScore uses contextual embeddings from BERT to compute token-level similarity, capturing semantic equivalence beyond surface n-gram overlap."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Conceptual BERTScore implementation using cosine similarity of embeddings\r\nfrom typing import List\r\nimport numpy as np\r\n\r\ndef cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:\r\n    dot = float(np.dot(a, b))\r\n    norm = float(np.linalg.norm(a) * np.linalg.norm(b))\r\n    return dot / norm if norm > 0 else 0.0\r\n\r\ndef bertscore_precision(\r\n    cand_embeddings: List[np.ndarray],\r\n    ref_embeddings: List[np.ndarray],\r\n) -> float:\r\n    total_max = 0.0\r\n    for c_emb in cand_embeddings:\r\n        max_sim = max(cosine_similarity(c_emb, r_emb) for r_emb in ref_embeddings)\r\n        total_max += max_sim\r\n    return total_max / len(cand_embeddings)\r\n\r\ndef bertscore_recall(\r\n    cand_embeddings: List[np.ndarray],\r\n    ref_embeddings: List[np.ndarray],\r\n) -> float:\r\n    total_max = 0.0\r\n    for r_emb in ref_embeddings:\r\n        max_sim = max(cosine_similarity(r_emb, c_emb) for c_emb in cand_embeddings)\r\n        total_max += max_sim\r\n    return total_max / len(ref_embeddings)\r\n\r\ndef bertscore_f1(\r\n    cand_embeddings: List[np.ndarray],\r\n    ref_embeddings: List[np.ndarray],\r\n) -> float:\r\n    p = bertscore_precision(cand_embeddings, ref_embeddings)\r\n    r = bertscore_recall(cand_embeddings, ref_embeddings)\r\n    return 2 * p * r / (p + r) if (p + r) > 0 else 0.0\r\n\r\n## Implementation using HuggingFace transformers\r\n\r\n## pip install transformers torch\r\n\"\"\"\r\nfrom transformers import AutoTokenizer, AutoModel\r\nimport torch\r\n\r\ntokenizer = AutoTokenizer.from_pretrained(\"bert-base-uncased\")\r\nmodel = AutoModel.from_pretrained(\"bert-base-uncased\")\r\n\r\ndef get_embeddings(text: str) -> torch.Tensor:\r\n    inputs = tokenizer(text, return_tensors=\"pt\", truncation=True)\r\n    with torch.no_grad():\r\n        outputs = model(**inputs)\r\n    return outputs.last_hidden_state.squeeze(0)  # (seq_len, hidden_dim)\r\n\r\ncand_emb = get_embeddings(\"The cat sat on the mat.\")\r\nref_emb = get_embeddings(\"The cat sat on a mat.\")\r\n\r\ncand_vecs = cand_emb.numpy()\r\nref_vecs = ref_emb.numpy()\r\nprint(f\"BERTScore F1: {bertscore_f1(list(cand_vecs), list(ref_vecs)):.4f}\")\r\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "724-meteor",
      children: "7.2.4 METEOR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "METEOR improves on BLEU by aligning synonyms and stems, using WordNet and Porter stemming for flexible matching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Simplified METEOR implementation\r\ndef meteor_score(candidate: str, reference: str) -> float:\r\n    cand_unigrams = set(tokenize(candidate))\r\n    ref_unigrams = set(tokenize(reference))\r\n\r\n    matches = cand_unigrams & ref_unigrams\r\n    match_count = len(matches)\r\n\r\n    if match_count == 0:\r\n        return 0.0\r\n\r\n    precision = match_count / len(cand_unigrams) if cand_unigrams else 0\r\n    recall = match_count / len(ref_unigrams) if ref_unigrams else 0\r\n\r\n    if precision + recall == 0:\r\n        return 0.0\r\n\r\n    f_mean = (10 * precision * recall) / (9 * precision + recall)\r\n\r\n    # Fragmentation penalty\r\n    cand_words = tokenize(candidate)\r\n    chunks = 1\r\n    for i in range(len(cand_words) - 1):\r\n        if cand_words[i] in ref_unigrams and cand_words[i + 1] in ref_unigrams:\r\n            pass  # same chunk\r\n        else:\r\n            chunks += 1 if cand_words[i] in ref_unigrams else 0\r\n\r\n    penalty = 0.5 * (chunks / match_count) if match_count > 0 else 0\r\n    return round(f_mean * (1 - penalty), 4)\r\n\r\nprint(f\"METEOR: {meteor_score(candidate, reference)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-reference-based-evaluation",
      children: "7.3 Reference-Based Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference-based evaluation compares LLM output against one or more gold-standard answers. This is the most traditional evaluation approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "building-reference-datasets",
      children: "Building Reference Datasets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import List, Optional\r\nimport json\r\n\r\n@dataclass\r\nclass EvaluationExample:\r\n    input_text: str\r\n    references: List[str]\r\n    task: str\r\n    domain: str\r\n    difficulty: str  # easy, medium, hard\r\n\r\n@dataclass\r\nclass ReferenceDataset:\r\n    name: str\r\n    description: str\r\n    examples: List[EvaluationExample]\r\n\r\n    def filter_by_task(self, task: str) -> List[EvaluationExample]:\r\n        return [ex for ex in self.examples if ex.task == task]\r\n\r\n    def filter_by_difficulty(self, difficulty: str) -> List[EvaluationExample]:\r\n        return [ex for ex in self.examples if ex.difficulty == difficulty]\r\n\r\ndataset = ReferenceDataset(\r\n    name=\"QA-Eval-v1\",\r\n    description=\"Question answering evaluation dataset\",\r\n    examples=[\r\n        EvaluationExample(\r\n            input_text=\"What is the capital of France?\",\r\n            references=[\"Paris\", \"The capital of France is Paris.\"],\r\n            task=\"qa\",\r\n            domain=\"geography\",\r\n            difficulty=\"easy\",\r\n        ),\r\n        EvaluationExample(\r\n            input_text=\"Explain the transformer attention mechanism.\",\r\n            references=[\r\n                \"Attention computes weighted sums of values based on query-key similarity.\",\r\n                \"The attention mechanism allows the model to focus on relevant parts of the input sequence by computing attention weights between queries and keys.\",\r\n            ],\r\n            task=\"explanation\",\r\n            domain=\"machine learning\",\r\n            difficulty=\"hard\",\r\n        ),\r\n    ],\r\n)\r\nprint(json.dumps(dataset.filter_by_difficulty(\"easy\"), indent=2, default=str))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scoring-with-multiple-references",
      children: "Scoring with Multiple References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When multiple references exist, take the maximum score across all references for each metric."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_with_references(\r\n    candidate: str,\r\n    references: List[str],\r\n) -> Dict[str, float]:\r\n    best_scores = {\"bleu\": 0.0, \"rouge1_f1\": 0.0, \"rougeL_f1\": 0.0, \"meteor\": 0.0}\r\n\r\n    for ref in references:\r\n        bleu_score = bleu(candidate, ref)\r\n        rouge1 = rouge_n(candidate, ref, 1)[\"f1\"]\r\n        rougeL = rouge_l(candidate, ref)[\"f1\"]\r\n        meteor = meteor_score(candidate, ref)\r\n\r\n        if bleu_score > best_scores[\"bleu\"]:\r\n            best_scores[\"bleu\"] = bleu_score\r\n        if rouge1 > best_scores[\"rouge1_f1\"]:\r\n            best_scores[\"rouge1_f1\"] = rouge1\r\n        if rougeL > best_scores[\"rougeL_f1\"]:\r\n            best_scores[\"rougeL_f1\"] = rougeL\r\n        if meteor > best_scores[\"meteor\"]:\r\n            best_scores[\"meteor\"] = meteor\r\n\r\n    return best_scores\r\n\r\ncandidate = \"Paris is the capital city of France.\"\r\nreferences = [\r\n    \"Paris is the capital of France.\",\r\n    \"The capital city of France is Paris.\",\r\n]\r\nprint(evaluate_with_references(candidate, references))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-reference-free-evaluation",
      children: "7.4 Reference-Free Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference-free evaluation is necessary when gold-standard answers are unavailable or costly to produce."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-perplexity",
      children: "7.4.1 Perplexity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perplexity measures how well the model predicts the output. Lower perplexity indicates higher confidence, though it does not guarantee correctness."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\n\r\ndef perplexity(log_probs: List[float]) -> float:\r\n    avg_neg_log_likelihood = -sum(log_probs) / len(log_probs)\r\n    return round(math.exp(avg_neg_log_likelihood), 4)\r\n\r\n## Sample log probabilities from a model (lower = better prediction)\r\nlog_probs_good = [-0.1, -0.2, -0.15, -0.3]\r\nlog_probs_bad = [-2.5, -3.0, -1.8, -4.2]\r\n\r\nprint(f\"Good output perplexity: {perplexity(log_probs_good)}\")\r\nprint(f\"Bad output perplexity: {perplexity(log_probs_bad)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-self-consistency",
      children: "7.4.2 Self-Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Self-consistency evaluates reliability by sampling multiple outputs and measuring agreement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\r\nfrom typing import List\r\n\r\ndef self_consistency_score(outputs: List[str]) -> float:\r\n    n = len(outputs)\r\n    if n < 2:\r\n        return 1.0\r\n\r\n    agreement_count = 0\r\n    total_pairs = 0\r\n    for i in range(n):\r\n        for j in range(i + 1, n):\r\n            total_pairs += 1\r\n            # Simple exact match — could use semantic similarity\r\n            if outputs[i].strip().lower() == outputs[j].strip().lower():\r\n                agreement_count += 1\r\n\r\n    return agreement_count / total_pairs if total_pairs > 0 else 1.0\r\n\r\noutputs_same = [\"Paris\", \"Paris\", \"Paris\"]\r\noutputs_mixed = [\"Paris\", \"London\", \"Paris\"]\r\n\r\nprint(f\"Self-consistency (same): {self_consistency_score(outputs_same):.2f}\")\r\nprint(f\"Self-consistency (mixed): {self_consistency_score(outputs_mixed):.2f}\")\r\n\r\ndef consistency_with_semantic_similarity(\r\n    outputs: List[str],\r\n    similarity_fn,\r\n    threshold: float = 0.8,\r\n) -> float:\r\n    n = len(outputs)\r\n    if n < 2:\r\n        return 1.0\r\n\r\n    agreements = 0\r\n    total = 0\r\n    for i in range(n):\r\n        for j in range(i + 1, n):\r\n            total += 1\r\n            sim = similarity_fn(outputs[i], outputs[j])\r\n            if sim >= threshold:\r\n                agreements += 1\r\n\r\n    return agreements / total if total > 0 else 1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-llm-as-judge",
      children: "7.4.3 LLM-as-Judge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using a powerful LLM (e.g., GPT-4, Claude) to evaluate outputs is increasingly popular. The judge receives a scoring rubric and evaluates generated text."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\r\nfrom typing import Dict, List\r\n\r\nclient = OpenAI()\r\n\r\ndef judge_evaluation(\r\n    prompt: str,\r\n    generated: str,\r\n    rubric: str,\r\n    judge_model: str = \"gpt-4o\",\r\n) -> Dict:\r\n    system_prompt = f\"\"\"You are an expert evaluator. Score the generated response on the following rubric:\r\n{rubric}\r\n\r\nProvide scores from 0 to 10 for each criterion. Return JSON.\"\"\"\r\n\r\n    response = client.chat.completions.create(\r\n        model=judge_model,\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": system_prompt},\r\n            {\"role\": \"user\", \"content\": f\"Prompt: {prompt}\\n\\nGenerated: {generated}\\n\\nScore.\"},\r\n        ],\r\n        response_format={\"type\": \"json_object\"},\r\n    )\r\n    return response.choices[0].message.content\r\n\r\nprompt = \"Explain what a vector database is.\"\r\ngenerated = \"A vector database stores embeddings and enables similarity search.\"\r\nrubric = \"\"\"\r\n1. Accuracy (0-10): Is the explanation factually correct?\r\n2. Clarity (0-10): Is the explanation clear and easy to understand?\r\n3. Completeness (0-10): Does it cover the key aspects?\r\n\"\"\"\r\n\r\n## result = judge_evaluation(prompt, generated, rubric)\r\n\r\n## print(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "744-factual-consistency-check",
      children: "7.4.4 Factual Consistency Check"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detect hallucinations by verifying generated claims against the input context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List\r\n\r\ndef extract_claims(text: str) -> List[str]:\r\n    sentences = text.replace(\"?\", \".\").replace(\"!\", \".\").split(\".\")\r\n    return [s.strip() for s in sentences if len(s.strip()) > 10]\r\n\r\ndef verify_claim(claim: str, context: str, client) -> Dict:\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": f\"Context: {context}\\n\\nVerify if the following claim is supported by the context. Answer SUPPORTED, NOT_SUPPORTED, or CONTRADICTED.\"},\r\n            {\"role\": \"user\", \"content\": claim},\r\n        ],\r\n        temperature=0,\r\n    )\r\n    return {\"claim\": claim, \"verdict\": response.choices[0].message.content}\r\n\r\ndef factual_consistency_score(\r\n    generated: str,\r\n    source_context: str,\r\n    client,\r\n) -> float:\r\n    claims = extract_claims(generated)\r\n    if not claims:\r\n        return 1.0\r\n\r\n    results = [verify_claim(c, source_context, client) for c in claims]\r\n    supported = sum(1 for r in results if \"SUPPORTED\" in r[\"verdict\"])\r\n    return supported / len(claims)\r\n\r\n## Example usage (requires API key)\r\n\r\n## context = \"The Eiffel Tower was built in 1889 and is located in Paris, France.\"\r\n\r\n## generated = \"The Eiffel Tower is a famous landmark in Paris. It was built in the 19th century.\"\r\n\r\n## score = factual_consistency_score(generated, context, client)\r\n\r\n## print(f\"Factual consistency: {score:.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-evaluation-datasets",
      children: "7.5 Evaluation Datasets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-constructed evaluation dataset is critical for meaningful assessment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sampling-strategies",
      children: "Sampling Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\r\nfrom typing import List, Callable\r\n\r\n@dataclass\r\nclass DatasetSample:\r\n    input_text: str\r\n    reference: str\r\n    category: str\r\n    metadata: Dict\r\n\r\nclass EvaluationDatasetBuilder:\r\n    def __init__(self):\r\n        self.samples: List[DatasetSample] = []\r\n\r\n    def add_sample(self, sample: DatasetSample):\r\n        self.samples.append(sample)\r\n\r\n    def random_sample(self, n: int, seed: int = 42) -> List[DatasetSample]:\r\n        rng = random.Random(seed)\r\n        return rng.sample(self.samples, min(n, len(self.samples)))\r\n\r\n    def stratified_sample(\r\n        self, n: int, category_field: str = \"category\", seed: int = 42\r\n    ) -> List[DatasetSample]:\r\n        rng = random.Random(seed)\r\n        categories = {}\r\n        for s in self.samples:\r\n            cat = getattr(s, category_field, \"unknown\")\r\n            categories.setdefault(cat, []).append(s)\r\n\r\n        samples_per_cat = max(1, n // len(categories))\r\n        result = []\r\n        for cat, cat_samples in categories.items():\r\n            result.extend(rng.sample(cat_samples, min(samples_per_cat, len(cat_samples))))\r\n\r\n        return result[:n]\r\n\r\n    def export_jsonl(self, filepath: str):\r\n        import json\r\n        with open(filepath, \"w\") as f:\r\n            for s in self.samples:\r\n                f.write(json.dumps({\r\n                    \"input\": s.input_text,\r\n                    \"reference\": s.reference,\r\n                    \"category\": s.category,\r\n                    \"metadata\": s.metadata,\r\n                }) + \"\\n\")\r\n\r\nbuilder = EvaluationDatasetBuilder()\r\nbuilder.add_sample(DatasetSample(\"What is Python?\", \"Python is a programming language.\", \"programming\", {}))\r\nbuilder.add_sample(DatasetSample(\"Explain gravity.\", \"Gravity is a force of attraction.\", \"science\", {}))\r\nbuilder.add_sample(DatasetSample(\"What is a function?\", \"A function is a reusable block of code.\", \"programming\", {}))\r\n\r\nstratified = builder.stratified_sample(2)\r\nprint(f\"Stratified sample size: {len(stratified)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotation-guidelines",
      children: "Annotation Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass AnnotationGuideline:\r\n    task_description: str\r\n    rating_scale: str\r\n    examples: List[Dict[str, object]]\r\n\r\n    def generate_instructions(self) -> str:\r\n        return f\"\"\"\r\n\r\n## Annotation Guidelines: {self.task_description}\r\n\r\n## Rating Scale\r\n{self.rating_scale}\r\n\r\n## Examples\r\n{chr(10).join(f\"- Input: {ex['input']} -> Score: {ex['score']}\" for ex in self.examples)}\r\n\r\n## Rules\r\n1. Score based only on the given criteria.\r\n2. Do not penalize style differences when evaluating factual accuracy.\r\n3. Flag hallucinations with score 0.\r\n\"\"\"\r\n\r\nguidelines = AnnotationGuideline(\r\n    task_description=\"Summarization Quality\",\r\n    rating_scale=\"1 (Poor) to 5 (Excellent) across accuracy, coverage, conciseness\",\r\n    examples=[\r\n        {\"input\": \"Summary A\", \"score\": 5, \"reason\": \"Accurate and concise\"},\r\n        {\"input\": \"Summary B\", \"score\": 2, \"reason\": \"Missing key information\"},\r\n    ],\r\n)\r\nprint(guidelines.generate_instructions())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-human-evaluation",
      children: "7.6 Human Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human evaluation remains the gold standard for subjective quality dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-pairwise-comparison",
      children: "7.6.1 Pairwise Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pairwise comparison (A vs B) yields more reliable judgments than absolute ratings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import combinations\r\nfrom typing import List, Tuple\r\nimport json\r\n\r\ndef pairwise_comparison(\r\n    outputs: List[Tuple[str, str]],\r\n    judge_fn,\r\n) -> Dict[str, int]:\r\n    wins = {output_id: 0 for output_id, _ in outputs}\r\n    total_comparisons = 0\r\n\r\n    for (id_a, text_a), (id_b, text_b) in combinations(outputs, 2):\r\n        winner = judge_fn(text_a, text_b)\r\n        total_comparisons += 1\r\n        if winner == \"A\":\r\n            wins[id_a] += 1\r\n        elif winner == \"B\":\r\n            wins[id_b] += 1\r\n\r\n    # Compute Elo-like scores\r\n    elo_scores = {}\r\n    for output_id, win_count in wins.items():\r\n        elo_scores[output_id] = round(win_count / total_comparisons * 100, 1) if total_comparisons > 0 else 50.0\r\n\r\n    return {\"wins\": wins, \"win_rates\": elo_scores}\r\n\r\ndef judge_fn_simple(text_a: str, text_b: str) -> str:\r\n    if len(text_a) < len(text_b):\r\n        return \"A\"\r\n    elif len(text_b) < len(text_a):\r\n        return \"B\"\r\n    return \"tie\"\r\n\r\noutputs = [\r\n    (\"model-a\", \"Paris is the capital of France.\"),\r\n    (\"model-b\", \"The capital city is Paris in France.\"),\r\n    (\"model-c\", \"France's capital is Paris and it is a beautiful city.\"),\r\n]\r\nprint(json.dumps(pairwise_comparison(outputs, judge_fn_simple), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "762-likert-scale-ratings",
      children: "7.6.2 Likert Scale Ratings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import statistics\r\nfrom typing import List\r\n\r\n@dataclass\r\nclass LikertRating:\r\n    rater_id: str\r\n    accuracy: int  # 1-5\r\n    fluency: int  # 1-5\r\n    relevance: int  # 1-5\r\n    overall: int  # 1-5\r\n\r\n@dataclass\r\nclass HumanEvaluationResult:\r\n    output_id: str\r\n    ratings: List[LikertRating]\r\n\r\n    def aggregate(self) -> Dict[str, float]:\r\n        if not self.ratings:\r\n            return {}\r\n        return {\r\n            \"accuracy\": round(statistics.mean(r.accuracy for r in self.ratings), 2),\r\n            \"fluency\": round(statistics.mean(r.fluency for r in self.ratings), 2),\r\n            \"relevance\": round(statistics.mean(r.relevance for r in self.ratings), 2),\r\n            \"overall\": round(statistics.mean(r.overall for r in self.ratings), 2),\r\n        }\r\n\r\nresult = HumanEvaluationResult(\r\n    output_id=\"summary-1\",\r\n    ratings=[\r\n        LikertRating(\"rater1\", 5, 4, 5, 5),\r\n        LikertRating(\"rater2\", 4, 5, 4, 4),\r\n        LikertRating(\"rater3\", 5, 5, 5, 5),\r\n    ],\r\n)\r\nprint(json.dumps(result.aggregate(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "763-inter-rater-agreement",
      children: "7.6.3 Inter-Rater Agreement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cohen's Kappa and Krippendorff's Alpha measure agreement beyond chance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cohens_kappa(ratings_a: List[int], ratings_b: List[int], num_categories: int = 5) -> float:\r\n    n = len(ratings_a)\r\n    if n == 0:\r\n        return 0.0\r\n\r\n    # Observed agreement\r\n    observed = sum(1 for a, b in zip(ratings_a, ratings_b) if a == b) / n\r\n\r\n    # Expected agreement by chance\r\n    expected = 0.0\r\n    for k in range(1, num_categories + 1):\r\n        pa = ratings_a.count(k) / n\r\n        pb = ratings_b.count(k) / n\r\n        expected += pa * pb\r\n\r\n    if expected == 1.0:\r\n        return 1.0\r\n    return round((observed - expected) / (1 - expected), 4)\r\n\r\nrater_a = [5, 4, 5, 3, 5, 4, 4, 5]\r\nrater_b = [5, 4, 4, 3, 5, 5, 4, 4]\r\nprint(f\"Cohen's Kappa: {cohens_kappa(rater_a, rater_b)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-task-specific-benchmarks",
      children: "7.7 Task-Specific Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard benchmarks allow comparison across models. Key benchmarks include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MMLU (Massive Multitask Language Understanding)"
      }), ": 57 subjects across STEM, humanities, and social sciences. Tests knowledge breadth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HumanEval"
      }), ": Programming problems with unit tests. Measures code generation capability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TruthfulQA"
      }), ": Questions that models often answer incorrectly due to misconceptions. Measures truthfulness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GSM8K"
      }), ": Grade-school math word problems. Tests mathematical reasoning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HellaSwag"
      }), ": Commonsense reasoning about physical scenarios. Tests grounded reasoning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass BenchmarkResult:\r\n    benchmark_name: str\r\n    model_name: str\r\n    accuracy: float\r\n    num_examples: int\r\n\r\nclass BenchmarkRunner:\r\n    def __init__(self, eval_fn):\r\n        self.eval_fn = eval_fn\r\n\r\n    def evaluate(self, benchmark_data: List[Dict], model_name: str) -> BenchmarkResult:\r\n        correct = 0\r\n        total = len(benchmark_data)\r\n        for item in benchmark_data:\r\n            prediction = self.eval_fn(item[\"input\"])\r\n            if prediction == item[\"expected\"]:\r\n                correct += 1\r\n\r\n        return BenchmarkResult(\r\n            benchmark_name=benchmark_data[0].get(\"benchmark\", \"unknown\") if benchmark_data else \"unknown\",\r\n            model_name=model_name,\r\n            accuracy=round(correct / total, 4) if total > 0 else 0,\r\n            num_examples=total,\r\n        )\r\n\r\n## Sample GSM8K-like data\r\ngsm8k_data = [\r\n    {\"input\": \"What is 5 + 3?\", \"expected\": \"8\", \"benchmark\": \"GSM8K\"},\r\n    {\"input\": \"Solve 12 * 15\", \"expected\": \"180\", \"benchmark\": \"GSM8K\"},\r\n    {\"input\": \"A train travels 60 mph for 2 hours. How far?\", \"expected\": \"120\", \"benchmark\": \"GSM8K\"},\r\n]\r\n\r\ndef simple_math_solver(input_text: str) -> str:\r\n    import re\r\n    # Extremely simplified — not for production\r\n    nums = re.findall(r\"\\d+\", input_text)\r\n    if \"mph\" in input_text and \"hours\" in input_text:\r\n        speed = int(nums[0])\r\n        time = int(nums[1])\r\n        return str(speed * time)\r\n    elif \"+\" in input_text:\r\n        return str(sum(int(n) for n in nums))\r\n    elif \"*\" in input_text:\r\n        result = 1\r\n        for n in nums:\r\n            result *= int(n)\r\n        return str(result)\r\n    return \"\"\r\n\r\nrunner = BenchmarkRunner(simple_math_solver)\r\nresult = runner.evaluate(gsm8k_data, \"simple-math-v1\")\r\nprint(f\"Benchmark: {result.benchmark_name}, Accuracy: {result.accuracy:.2%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-evaluation-pipelines",
      children: "7.8 Evaluation Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production evaluation requires automated pipelines that run on every model version."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime\r\nfrom typing import List, Dict, Callable\r\nimport json\r\n\r\nclass EvaluationPipeline:\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.metrics: List[Callable] = []\r\n        self.datasets: List[Dict] = []\r\n        self.results_history: List[Dict] = []\r\n\r\n    def register_metric(self, metric_fn: Callable, name: str):\r\n        self.metrics.append((metric_fn, name))\r\n\r\n    def register_dataset(self, dataset: Dict):\r\n        self.datasets.append(dataset)\r\n\r\n    def run(self, model_fn: Callable) -> Dict:\r\n        run_id = f\"{self.name}-{datetime.now().isoformat()}\"\r\n        all_scores = {}\r\n\r\n        for dataset in self.datasets:\r\n            dataset_name = dataset.get(\"name\", \"unknown\")\r\n            dataset_scores = {}\r\n\r\n            for metric_fn, metric_name in self.metrics:\r\n                scores = []\r\n                for example in dataset.get(\"examples\", []):\r\n                    prediction = model_fn(example[\"input\"])\r\n                    score = metric_fn(prediction, example.get(\"reference\", \"\"))\r\n                    scores.append(score)\r\n\r\n                avg_score = sum(scores) / len(scores) if scores else 0\r\n                dataset_scores[metric_name] = round(avg_score, 4)\r\n\r\n            all_scores[dataset_name] = dataset_scores\r\n\r\n        result = {\"run_id\": run_id, \"timestamp\": datetime.now().isoformat(), \"scores\": all_scores}\r\n        self.results_history.append(result)\r\n        return result\r\n\r\n    def regression_report(self) -> Dict:\r\n        if len(self.results_history) < 2:\r\n            return {\"status\": \"insufficient_data\"}\r\n\r\n        latest = self.results_history[-1][\"scores\"]\r\n        previous = self.results_history[-2][\"scores\"]\r\n\r\n        regressions = []\r\n        improvements = []\r\n        for dataset, metrics in latest.items():\r\n            for metric, score in metrics.items():\r\n                prev_score = previous.get(dataset, {}).get(metric, score)\r\n                diff = score - prev_score\r\n                if diff < -0.02:\r\n                    regressions.append({\"dataset\": dataset, \"metric\": metric, \"diff\": round(diff, 4)})\r\n                elif diff > 0.02:\r\n                    improvements.append({\"dataset\": dataset, \"metric\": metric, \"diff\": round(diff, 4)})\r\n\r\n        return {\r\n            \"num_regressions\": len(regressions),\r\n            \"num_improvements\": len(improvements),\r\n            \"regressions\": regressions,\r\n            \"improvements\": improvements,\r\n        }\r\n\r\npipeline = EvaluationPipeline(\"qa-eval\")\r\npipeline.register_metric(lambda pred, ref: 1.0 if pred.strip() == ref.strip() else 0.0, \"exact_match\")\r\npipeline.register_dataset({\r\n    \"name\": \"test-qa\",\r\n    \"examples\": [\r\n        {\"input\": \"Capital of France?\", \"reference\": \"Paris\"},\r\n        {\"input\": \"Capital of Japan?\", \"reference\": \"Tokyo\"},\r\n    ],\r\n})\r\n\r\nresult1 = pipeline.run(lambda x: \"Paris\" if \"France\" in x else \"Unknown\")\r\nresult2 = pipeline.run(lambda x: \"Tokyo\" if \"Japan\" in x else \"Paris\")\r\n\r\nprint(json.dumps(result1, indent=2))\r\nprint(json.dumps(pipeline.regression_report(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embed evaluation into CI/CD pipelines to catch regressions before deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Conceptual CI/CD evaluation hook\r\ndef evaluate_for_ci(\r\n    model_fn,\r\n    eval_pipeline: EvaluationPipeline,\r\n    threshold: float = 0.8,\r\n) -> int:\r\n    result = eval_pipeline.run(model_fn)\r\n\r\n    # Check minimum scores\r\n    for dataset, metrics in result[\"scores\"].items():\r\n        for metric, score in metrics.items():\r\n            if score < threshold:\r\n                print(f\"FAIL: {dataset}/{metric} = {score} < {threshold}\")\r\n                return 1  # Non-zero exit for CI\r\n\r\n    print(f\"PASS: All metrics above threshold {threshold}\")\r\n    return 0\r\n\r\n## Example: exit_code = evaluate_for_ci(model_fn, pipeline, threshold=0.7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM evaluation is a multifaceted discipline requiring a combination of automated metrics, reference-based comparison, reference-free techniques, and human judgment. Automated metrics like ROUGE,.\r\nBLEU, BERTScore, and METEOR provide scalable n-gram and semantic overlap measurement. Reference-free methods including perplexity, self-consistency, LLM-as-judge, and factual consistency checks enable evaluation when gold standards are unavailable. Human evaluation with pairwise comparisons,.\r\nLikert scales, and inter-rater agreement measures remains essential for subjective quality dimensions. Task-specific benchmarks like MMLU, GSM8K, and TruthfulQA provide standardized comparison across models. Production systems integrate evaluation into automated pipelines with regression tracking to maintain quality across model versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single metric captures all quality aspects — combine n-gram, embedding, and human evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build diverse eval datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include easy/hard examples, multiple domains, and edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Track regressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement automated regression reporting in CI/CD pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calibrate human evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use pairwise comparisons, multiple raters, and measure inter-rater agreement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leverage LLM-as-judge carefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate judge model agreement with human judgments before relying on automated scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmark regularly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run standard benchmarks (MMLU, GSM8K) alongside task-specific tests"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How would you evaluate an LLM's faithfulness in a summarization task without a reference summary?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can use reference-free evaluation methods like factual consistency checking. Extract claims from the generated summary and verify each against the source document using an LLM-as-judge. For.\nexample, split the summary into individual sentences, then prompt a judge model (e.g., GPT-4o) to classify each as SUPPORTED, NOT_SUPPORTED, or.\nCONTRADICTED relative to the source. The faithfulness score is the fraction of supported claims. This approach catches hallucinations even when no gold-standard summary exists."
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
      "data-qid": "llm07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the difference between ROUGE-L and BLEU and when you would use each.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ROUGE-L measures the longest common subsequence (LCS) between candidate and reference, emphasizing recall — it rewards how much of the reference content appears in the output. BLEU computes n-gram precision with a brevity penalty,.\nemphasizing precision — it rewards how much of the candidate output matches the reference. Use ROUGE for summarization (where capturing all key points matters) and.\nBLEU for translation (where fluency and precision of phrasing matters). A practical pipeline might compute both:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "candidate = \"The cat sat on the mat.\"\nreference = \"The cat sat on a mat.\"\nprint(rouge_l(candidate, reference))\nprint(bleu(candidate, reference, max_n=4))"
          })
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
      "data-qid": "llm07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the LLM-as-judge approach and what are its failure modes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM-as-judge uses a powerful language model (e.g., GPT-4o, Claude) to evaluate outputs by providing a scoring rubric and asking it to rate generated text. It is useful for.\nsubjective dimensions like coherence, helpfulness, and instruction-following where automated metrics fall short. However, it has several failure modes: position bias (preferring the first answer in pairwise comparisons),.\nverbosity bias (preferring longer outputs), self-enhancement bias (preferring its own style), and rubric overfitting. Mitigations include swapping presentation order, using chain-of-thought scoring,.\nand calibrating against human judgments with Cohen's Kappa."
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
      "data-qid": "llm07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you build an evaluation dataset for a new domain-specific LLM task?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Start with stratified sampling across sub-categories to ensure coverage. Collect 100-500 examples with input-output pairs. For each example, include multiple references when possible (2-3 per input) to capture valid variations. Create annotation guidelines with clear rating scales and.\nexample annotations. Use inter-rater agreement (Cohen's Kappa or Krippendorff's Alpha) to validate annotation quality — aim for Kappa > 0.7. Store the dataset in JSONL format with fields for.\ninput, references, task, domain, and difficulty. Regularly audit and expand the dataset as new edge cases appear in production."
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
      "data-qid": "llm07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is BERTScore and why does it improve upon n-gram metrics?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BERTScore uses contextual embeddings from BERT to compute token-level similarity via cosine similarity. Unlike ROUGE and BLEU which require exact n-gram overlap,.\nBERTScore captures semantic equivalence — \"car\" and \"vehicle\" would get partial credit since their embeddings are similar. It computes precision, recall,.\nand F1 by matching each token in the candidate to its most similar token in the reference. This makes it more robust to paraphrasing and.\nsynonym usage. However, it requires running a full BERT model, making it computationally more expensive than n-gram metrics."
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
      "data-qid": "llm07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you set up a CI/CD evaluation pipeline for LLM regressions?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an EvaluationPipeline that runs a suite of metrics (ROUGE, BLEU, BERTScore, faithfulness) across multiple test datasets on every model version. Compare results against the previous deployment's scores and.\nflag any metric that drops below a configurable threshold (e.g., 5% relative degradation). Integrate this as a CI step that returns exit code 1 on regression,.\nblocking deployment. Store history in a regression tracker for trend analysis. Here's the core check:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def evaluate_for_ci(model_fn, pipeline, threshold=0.8):\n    result = pipeline.run(model_fn)\n    for dataset, metrics in result[\"scores\"].items():\n        for metric, score in metrics.items():\n            if score < threshold:\n                return 1  # Fail\n    return 0  # Pass"
          })
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
      "data-qid": "llm07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What evaluation dimensions matter most for a chatbot vs a code generation model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For chatbots, prioritize relevance, coherence, fluency, and safety — the response must address the user's intent, read naturally, and avoid harmful content. For.\ncode generation, prioritize functional correctness (passing unit tests), syntactic validity (parsable code), and security (no vulnerabilities). A chatbot evaluation might weight relevance=2.0,.\nfluency=1.5, accuracy=1.0, while code generation might weight correctness=3.0, efficiency=1.0, readability=0.5. Task-specific benchmarks like HumanEval (code) and MMLU (knowledge) provide standardized measurement for.\neach domain."
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
      "data-qid": "llm07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: Explain how perplexity relates to model evaluation and its limitations.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Perplexity measures how well a language model predicts a sequence — it is the exponential of the average negative log-likelihood. Lower perplexity means the model assigns higher probability to the actual tokens. However,.\nperplexity has significant limitations: it does not correlate well with output quality or factual accuracy (a model can have low perplexity while hallucinating),.\nit penalizes creative or diverse outputs, and it is not comparable across different tokenizers or vocabularies. Use perplexity only as a sanity check for.\nmodel calibration, not as a primary quality metric."
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
      "data-qid": "llm07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you measure inter-rater agreement in human evaluation and why does it matter?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cohen's Kappa measures agreement between two raters beyond chance, with values above 0.7 indicating reliable annotation. Krippendorff's Alpha generalizes to multiple raters and.\nhandles missing data. Inter-rater agreement matters because human evaluation is subjective — without high agreement, the ratings are noisy and unreliable as a gold standard. To improve agreement,.\nprovide detailed annotation guidelines with anchor examples, calibrate raters on a shared set before full annotation, and use pairwise comparisons (A vs B) instead of absolute Likert scales,.\nwhich tend to have higher agreement rates."
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
      "data-qid": "llm07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What is METEOR and how does it improve over BLEU for evaluating generated text?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "METEOR improves on BLEU by aligning unigrams using exact match, stemmed match (Porter stemmer), and synonym match (WordNet). It computes a harmonic mean of precision and.\nrecall (with recall weighted higher by a 9:1 ratio) and applies a fragmentation penalty to discourage disordered output. Unlike BLEU which only measures precision,.\nMETEOR's recall component better captures whether all reference content is covered. It also correlates better with human judgment at the sentence level. However,.\nit requires WordNet resources and is language-dependent."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def meteor_score(candidate, reference):\n    # Aligns unigrams via exact + stem + synonym matching\n    precision = match_count / len(cand_unigrams)\n    recall = match_count / len(ref_unigrams)\n    f_mean = (10 * precision * recall) / (9 * precision + recall)\n    return f_mean * (1 - fragmentation_penalty)"
          })
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s7-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which metric computes n-gram precision with a brevity penalty?"]
      }), "\nA. ROUGE\nB. BLEU\nC. METEOR\nD. Perplexity\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s7-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What does self-consistency evaluation measure?"]
      }), "\nA. Fluency of generated text\nB. Agreement across multiple sampled outputs\nC. Overlap with reference text\nD. Token-level cosine similarity\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s7-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which dimension evaluates whether LLM output introduces information absent from the input?"]
      }), "\nA. Accuracy\nB. Fluency\nC. Faithfulness\nD. Coherence\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s7-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " Cohen's Kappa is used to measure what?"]
      }), "\nA. Model accuracy\nB. Inter-rater agreement beyond chance\nC. Output perplexity\nD. N-gram overlap\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s7-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which benchmark focuses on grade-school math reasoning?"]
      }), "\nA. MMLU\nB. HumanEval\nC. HellaSwag\nD. GSM8K\nAnswer: D\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement a complete evaluation pipeline that computes ROUGE-1, ROUGE-2, ROUGE-L, BLEU-4, and METEOR on a set of 10 LLM-generated summaries. Compare the scores and identify which summaries perform best on each metric."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a self-consistency scorer that samples 5 outputs per prompt and computes pairwise agreement. Test with prompts of varying difficulty (factual, creative, ambiguous) and report consistency scores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an LLM-as-judge evaluation system with a detailed rubric for assessing customer support responses. Validate the judge's scores against human ratings using Cohen's Kappa."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a stratified evaluation dataset with 50 examples across 5 categories (code generation, summarization, QA, translation, creative writing). Include metadata for difficulty level and source domain."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a regression monitoring dashboard that tracks evaluation metrics across model deployments and alerts when any metric drops by more than 5%. Use synthetic data to simulate a regression"
        }), "\n"]
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
            children: "Explain the core idea of LLM Evaluation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates LLM Evaluation."
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
            children: "Describe a production bug caused by misunderstanding LLM Evaluation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on LLM Evaluation from 10 users to 10 million?"
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
            children: "Compare LLM Evaluation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on LLM Evaluation."
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
            children: "How does LLM Evaluation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of LLM Evaluation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of LLM Evaluation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name LLM Evaluation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using LLM Evaluation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies LLM Evaluation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside LLM Evaluation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of LLM Evaluation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a LLM Evaluation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic LLM Evaluation interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply LLM Evaluation in production today?"
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
        }), " LLM Evaluation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for LLM Evaluation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for LLM Evaluation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for LLM Evaluation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the LLM Evaluation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers LLM Evaluation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 Llm Evaluation is ___. — Answer: O(n^2) attention, O(n) KV cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Llm Evaluation is ___. — Answer: hallucination, context overflow, rate limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug LLM Evaluation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to LLM Evaluation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving LLM Evaluation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of LLM Evaluation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain LLM Evaluation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for LLM Evaluation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of LLM Evaluation on an empty input?"
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
            children: "Complete Medium exercises, explain LLM Evaluation to someone else"
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
        children: "Always write a one-line example of LLM Evaluation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered LLM Evaluation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining LLM Evaluation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own LLM Evaluation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of LLM Evaluation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link LLM Evaluation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of LLM Evaluation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain LLM Evaluation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vaswani et al. (2017) 'Attention Is All You Need' — the transformer paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Brown et al. (2020) 'Language Models are Few-Shot Learners' — GPT-3 paper introducing in-context learning"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anthropic Claude documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.anthropic.com",
          children: "https://docs.anthropic.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI API reference: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs",
          children: "https://platform.openai.com/docs"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Designing Large Language Model Applications' by Suhas Pai Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 11 — builds the foundation for 07 Llm Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Llm Evaluation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Llm Evaluation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Llm Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Llm Evaluation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Llm Evaluation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Llm Evaluation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Llm Evaluation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Llm Evaluation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM Evaluation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with LLM Evaluation."
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
        children: "LLM Evaluation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for LLM Evaluation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about LLM Evaluation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around LLM Evaluation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log raw LLM prompts in production — they may contain user PII or confidential business data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement output filtering for PII, hate speech, and harmful content before returning to users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rotate API keys regularly and use separate keys per environment (dev/staging/prod)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set spending limits on provider dashboards to prevent runaway costs from prompt injection attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate and sanitize all user inputs before including in LLM prompts to prevent prompt injection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temperature scales logits before softmax: low temperature sharpens the distribution (more deterministic), high temperature flattens it (more random)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Top-p (nucleus sampling) dynamically selects the smallest token set whose cumulative probability exceeds p — more principled than top-k"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context window is the model's working memory — exceeding it causes the model to 'forget' earlier content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenization affects cost: code and non-English text use more tokens per character than English prose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System prompts are processed first and have stronger influence on model behavior than user messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "07 Llm Evaluation is like a GPS navigation system"
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
          }), " — this chapter contributes the LLM Evaluation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-07llmevaluation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of LLM Evaluation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Foundation models are large transformer-based neural networks trained on internet-scale data via next-token prediction, exhibiting emergent abilities like reasoning and in-context learning at scale."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-07llmevaluation-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common LLM mistake: using temperature=1.0 for factual tasks. Use temperature=0 for deterministic factual outputs and temperature=0.7-1.0 only for creative generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-07llmevaluation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard LLM Evaluation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM inference: O(n^2) for self-attention over context length n. KV cache reduces repeated computation to O(n) per new token. Memory: O(n * d * layers) for KV cache."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-07llmevaluation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is LLM Evaluation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMs are NOT the right choice when: (1) a simple rule-based system suffices, (2) you need 100% deterministic outputs, (3) latency < 50ms is required, (4) the task requires real-time data."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-07llmevaluation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is LLM Evaluation applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production LLM stack: OpenAI/Anthropic/Bedrock for inference, tiktoken for token counting, LangSmith for observability, Pydantic for output validation, Redis for response caching."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for LLM Evaluation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing LLM Evaluation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for LLM Evaluation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running LLM Evaluation in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Python SDK"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install openai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic Python SDK"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install anthropic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tiktoken"
        }), " — OpenAI's tokenizer for token counting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LiteLLM"
        }), " — unified interface across 100+ LLM providers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instructor"
        }), " — structured output extraction from LLMs using Pydantic Evaluation"]
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
        }), ": Add structured logging at each stage of the 07 Llm Evaluation pipeline to identify exactly where the failure occurs."]
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
        children: "Explain LLM Evaluation in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of LLM Evaluation."
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
        children: "Tell me about a time you debugged a LLM Evaluation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where LLM Evaluation is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_llm_evaluation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Llm Evaluation.\r\n\r\n    Key concepts: tokens, context window, temperature, top-p, system prompt\r\n    Complexity: O(n^2) attention, O(n) KV cache\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Llm Evaluation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain LLM Evaluation without notes"
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
          children: "GitHub Copilot"
        }), " uses GPT-4 to generate code completions with 46% of code written by AI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duolingo Max"
        }), " uses GPT-4 for personalized language tutoring at scale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Klarna"
        }), " replaced 700 customer service agents with an LLM-powered chatbot handling 2.3M conversations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion AI"
        }), " uses LLMs to summarize, translate, and generate content within documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always quantify LLM impact — 'reduced support tickets by 40%' beats 'improved customer experience'"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization",
        children: "Cost & Latency Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM Evaluation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of LLM Evaluation depends on input size and distribution — always benchmark for your own data."
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