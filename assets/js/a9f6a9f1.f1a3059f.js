"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2484],{

/***/ 32535
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_02_data_engineering_for_ai_md_a9f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-02-data-engineering-for-ai-md-a9f.json
const site_docs_courses_modern_ai_engineering_02_data_engineering_for_ai_md_a9f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/02-data-engineering-for-ai","title":"Chapter 2: Data Engineering for AI","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/02-data-engineering-for-ai.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/02-data-engineering-for-ai","permalink":"/ai-engineering-journey/modern-ai-engineering/02-data-engineering-for-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-data-engineering-for-ai","slug":"/modern-ai-engineering/02-data-engineering-for-ai","title":"Chapter 2: Data Engineering for AI","sidebar_label":"Chapter 2: Data Engineering for AI","sidebar_position":2},"sidebar":"course-modern-ai-engineering","previous":{"title":"Chapter 1: Introduction to AI Engineering","permalink":"/ai-engineering-journey/modern-ai-engineering/01-introduction-to-ai-engineering"},"next":{"title":"Chapter 3: Understanding Foundation Models","permalink":"/ai-engineering-journey/modern-ai-engineering/03-understanding-foundation-models"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/modern-ai-engineering/02-data-engineering-for-ai.md


const frontMatter = {
	id: '02-data-engineering-for-ai',
	slug: '/modern-ai-engineering/02-data-engineering-for-ai',
	title: 'Chapter 2: Data Engineering for AI',
	sidebar_label: 'Chapter 2: Data Engineering for AI',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Data Engineering for AI';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "2.1 The Critical Role of Data in AI",
  "id": "21-the-critical-role-of-data-in-ai",
  "level": 2
}, {
  "value": "2.2 Data Collection Strategies",
  "id": "22-data-collection-strategies",
  "level": 2
}, {
  "value": "2.3 Data Quality Dimensions",
  "id": "23-data-quality-dimensions",
  "level": 2
}, {
  "value": "2.4 Data Preprocessing",
  "id": "24-data-preprocessing",
  "level": 2
}, {
  "value": "2.5 Data Curation and Labeling",
  "id": "25-data-curation-and-labeling",
  "level": 2
}, {
  "value": "2.6 Synthetic Data Generation",
  "id": "26-synthetic-data-generation",
  "level": 2
}, {
  "value": "2.7 Privacy and Legal Considerations",
  "id": "27-privacy-and-legal-considerations",
  "level": 2
}, {
  "value": "TypeScript: DataPipeline",
  "id": "typescript-datapipeline",
  "level": 2
}, {
  "value": "TypeScript: DataQualityScorer",
  "id": "typescript-dataqualityscorer",
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
    a: "a",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
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
        id: "chapter-2-data-engineering-for-ai",
        children: "Chapter 2: Data Engineering for AI"
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
            children: "Explain why data quality is more critical than model choice for AI application performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate data collection strategies including APIs, web scraping, synthetic data, and data marketplaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure and improve data quality across six dimensions: accuracy, completeness, consistency, timeliness, uniqueness, validity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design preprocessing pipelines for cleaning, normalization, deduplication, and PII removal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply curation methods including active learning, weak supervision, and programmatic labeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigate privacy regulations (GDPR, CCPA) and implement responsible data handling practices"
          })]
        })]
      })]
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
        href: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/modern-ai-engineering/02-data-engineering-for-ai/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-the-critical-role-of-data-in-ai",
      children: "2.1 The Critical Role of Data in AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most widely cited lesson from production AI systems is that data quality matters more than model choice. A 2023 survey of AI practitioners found that 60% of project failures traced back to data issues, not model issues. This section explains why data is the dominant factor in AI application performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Data-Centric AI Movement"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Andrew Ng's data-centric AI thesis argues that improving data quality yields more reliable gains than architecture innovations for most production use cases. When a model underperforms, the root cause is typically:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incorrect or inconsistent labels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distribution mismatch between training data and production data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insufficient coverage of edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data leakage from the future into the training set"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Data Dominates Model Choice"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact of Data Quality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact of Model Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor data caps maximum achievable accuracy regardless of model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better models approach the data ceiling faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robustness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases are defined by data coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture matters less than training data diversity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias originates in training data distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models amplify existing data biases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data drift is the #1 cause of production degradation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model updates are secondary to data pipeline maintenance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Garbage-In-Garbage-Out Principle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every foundation model is trained on its pretraining corpus. When you build an AI application, you add your own data through RAG, fine-tuning, or prompt context. The quality of that additional data directly determines application quality. If your vector store contains contradictory documents, your RAG application will produce contradictory answers. If your fine-tuning dataset has label errors, your fine-tuned model will learn those errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-data-collection-strategies",
      children: "2.2 Data Collection Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right data collection strategy depends on the application domain, budget, timeline, and quality requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Data Collection] --> B{Data exists<br>in the wild?}\n    B -->|Yes| C{Is data<br>publicly available?}\n    B -->|No| D[Generate synthetic data<br>using foundation models]\n    C -->|Yes| E{Is API available?}\n    C -->|No| F{Can you collect<br>from users?}\n    E -->|Yes| G[Use API integration<br>REST / WebSocket]\n    E -->|No| H{Commercially<br>available?}\n    H -->|Yes| I[Data marketplace<br>Riverside / Snowflake Marketplace]\n    H -->|No| J[Web scraping<br>with legal review]\n    F -->|Yes| K[User-generated data<br>with consent]\n    F -->|No| L[Third-party data<br>partnership agreement]\n    G --> M[Structured pipeline]\n    J --> N{Scraping legal?}\n    N -->|Yes| M\n    N -->|No| I\n    K --> M\n    D --> M\n    I --> M\n    L --> M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Strategy Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Timeline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risks"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media, knowledge bases, weather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limits, TOS changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web scraping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce, news, public records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal challenges, blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-generated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS products, feedback, behavior logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy regulation, consent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synthetic data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare events, edge cases, privacy-safe testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution mismatch, artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data marketplaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-specific labeled data, financial data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost, exclusivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crowdsourcing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labeling, annotation, judgment tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality control, cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-data-quality-dimensions",
      children: "2.3 Data Quality Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data quality is multi-dimensional. A dataset may be accurate but incomplete, or complete but inconsistent. The six dimensions below provide a comprehensive quality framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "radar\n    title Data Quality Radar\n    x-axis Accuracy, Completeness, Consistency, Timeliness, Uniqueness, Validity\n    \"Dataset A\": [85, 92, 78, 95, 88, 80]\n    \"Dataset B\": [95, 70, 90, 60, 95, 85]\n    \"Dataset C\": [60, 95, 60, 50, 70, 55]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Dimensions Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Issue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctness of data values relative to the real world"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate, mislabeling percentage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A product listed as \"in stock\" when inventory is zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The degree to which all required data is present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null rate, missing field percentage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer records missing phone numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data values are coherent across records and systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contradiction rate, format uniformity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same customer address formatted differently in two systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeliness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data reflects the current state of the world"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recency, staleness window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock prices from last month used in today's analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No duplicate records exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate rate, exact/fuzzy match rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same customer registered twice with different email addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data conforms to defined schemas, types, and ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema violation rate, domain error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Age field containing the value 350"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-data-preprocessing",
      children: "2.4 Data Preprocessing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data preprocessing transforms raw data into a clean, structured format suitable for downstream AI pipelines. The preprocessing pipeline typically involves five stages."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Raw[Raw Data]\n        R1[Unstructured<br>text, PDFs, HTML]\n        R2[Noisy<br>logs, scraped data]\n        R3[Raw user<br>generated content]\n    end\n    subgraph Cleaning[Cleaning]\n        C1[Remove HTML tags<br>& special chars]\n        C2[Fix encoding errors<br>UTF-8 normalization]\n        C3[Spell checking<br>& typo correction]\n        C4[Outlier detection<br>& handling]\n    end\n    subgraph Normalization[Normalization]\n        N1[Lowercasing]\n        N2[Unicode normalization<br>NFKC]\n        N3[Whitespace<br>standardization]\n        N4[Date/time format<br>ISO 8601]\n    end\n    subgraph Dedup[Deduplication]\n        D1[Exact match<br>dedup]\n        D2[Fuzzy match<br>dedup]\n        D3[Semantic<br>dedup]\n    end\n    subgraph Formatting[Formatting & PII]\n        F1[Chunking &<br>splitting]\n        F2[Schema<br>validation]\n        F3[PII detection<br>& removal]\n        F4[Consent flag<br>& retention metadata]\n    end\n\n    Raw --> Cleaning\n    Cleaning --> Normalization\n    Normalization --> Dedup\n    Dedup --> Formatting\n    Formatting --> CleanData[Clean<br>Dataset]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Preprocessing Techniques"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chunking Strategy"
          }), ": For RAG applications, document chunking is critical. Semantic chunking (splitting at natural boundaries like paragraphs or sections) outperforms fixed-size token chunking for retrieval quality."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PII Detection and Removal"
          }), ": Use named entity recognition (NER) models or regex patterns to detect personally identifiable information before sending data to FM APIs. Classification of PII includes:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Direct identifiers: names, email addresses, phone numbers, SSNs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Indirect identifiers: ZIP codes + birthdates, job titles at small companies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Behavioral identifiers: IP addresses, device fingerprints, browsing patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Versioning"
          }), ": Treat data as code. Use tools like DVC, LakeFS, or Git LFS to version datasets, enabling reproducibility and rollback."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-data-curation-and-labeling",
      children: "2.5 Data Curation and Labeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High-quality labeled data is the bottleneck for supervised fine-tuning and evaluation. This section covers four approaches to building labeled datasets."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Human Labeling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human annotation remains the gold standard but is expensive and slow. Best practices include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple annotators per item"
        }), ": 3+ annotators with majority voting reduces individual bias"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inter-annotator agreement"
        }), ": Track Cohen's kappa or Fleiss' kappa to measure labeling consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Golden test questions"
        }), ": Insert known-answer questions to detect lazy or malicious annotators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative guidelines"
        }), ": Refine annotation instructions based on disagreement analysis"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Learning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of labeling random samples, active learning selects the most informative examples for human labeling. Common acquisition strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uncertainty sampling"
        }), ": Label examples where the model is least confident"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diversity sampling"
        }), ": Select examples that are most representative of the data distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected model change"
        }), ": Choose examples that would most change the model parameters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Active learning reduces labeling costs by 50–80% compared to random sampling while maintaining or improving model performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weak Supervision"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Weak supervision uses heuristics, rules, and knowledge bases to generate noisy labels automatically. The Snorkel framework pioneered this approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Labeling functions"
        }), ": Python functions that assign labels based on patterns (e.g., regex match, database lookup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Label model"
        }), ": A generative model that estimates the accuracy of each labeling function and combines their outputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "denoising"
        }), ": The label model resolves conflicts between labeling functions and produces probabilistic training labels"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Programmatic Labeling with Foundation Models"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In 2024–2026, foundation models themselves have become powerful labelers. Using FMs for labeling:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a labeling prompt with clear rubrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the FM to each example"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate against a small human-labeled held-out set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use FMs with high temperature for diverse labels or low temperature for consistent labels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-synthetic-data-generation",
      children: "2.6 Synthetic Data Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foundation models can generate training and evaluation data for virtually any domain. Synthetic data is particularly valuable for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rare events"
        }), ": Fraud detection, safety-critical failures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy-safe sharing"
        }), ": Generating data that resembles real data without exposing actual user information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge case coverage"
        }), ": Systematically generating variations that test model boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data augmentation"
        }), ": Expanding small datasets for fine-tuning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * SyntheticDataGenerator — Generates synthetic training and evaluation data\n * using foundation model calls. Supports multiple output formats, constraints,\n * and diversity controls.\n */\n\ninterface GenerationConfig {\n  topic: string;\n  numExamples: number;\n  outputFields: string[];\n  constraints?: string[];\n  diversityTemperature?: number;\n  labelDistribution?: Record<string, number>;\n  language?: string;\n}\n\ninterface GeneratedExample {\n  id: string;\n  fields: Record<string, string>;\n  label?: string;\n  metadata: {\n    generatedAt: Date;\n    temperature: number;\n    promptTokens: number;\n    completionTokens: number;\n  };\n}\n\ninterface QualityCheckResult {\n  isValid: boolean;\n  issues: string[];\n  fieldQuality: Record<string, number>;\n}\n\nclass SyntheticDataGenerator {\n  private config: GenerationConfig;\n  private examples: GeneratedExample[] = [];\n  private validationSet: GeneratedExample[] = [];\n  private apiCallCount: number = 0;\n  private totalTokensUsed: number = 0;\n\n  constructor(config: GenerationConfig) {\n    this.config = config;\n  }\n\n  private buildGenerationPrompt(): string {\n    const constraints = this.config.constraints\n      ? this.config.constraints.map((c) => `- ${c}`).join('\\n')\n      : '';\n\n    const distributionNote = this.config.labelDistribution\n      ? `\\nEnsure the following label distribution: ${JSON.stringify(this.config.labelDistribution)}`\n      : '';\n\n    return `Generate ${this.config.numExamples} examples about \"${this.config.topic}\".\nFor each example, provide the following fields: ${this.config.outputFields.join(', ')}.\n${constraints}\n${distributionNote}\nEnsure diversity across examples. Avoid repetition.\nLanguage: ${this.config.language || 'English'}\nOutput each example as a JSON object.`;\n  }\n\n  async generate(fmCall: (prompt: string) => Promise<{\n    content: string;\n    promptTokens: number;\n    completionTokens: number;\n  }>): Promise<GeneratedExample[]> {\n    this.examples = [];\n    const batchSize = Math.min(this.config.numExamples, 10);\n    const batches = Math.ceil(this.config.numExamples / batchSize);\n    const temperature = this.config.diversityTemperature ?? 0.7;\n\n    for (let batch = 0; batch < batches; batch++) {\n      const batchPrompt = this.buildGenerationPrompt() +\n        `\\nBatch ${batch + 1} of ${batches}. Generate ${batchSize} examples.`;\n\n      const response = await fmCall(batchPrompt);\n\n      this.apiCallCount++;\n      this.totalTokensUsed += response.promptTokens + response.completionTokens;\n\n      const parsed = this.parseGeneratedContent(response.content);\n      for (const example of parsed) {\n        this.examples.push({\n          id: `synth-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,\n          fields: example.fields,\n          label: example.label,\n          metadata: {\n            generatedAt: new Date(),\n            temperature,\n            promptTokens: response.promptTokens,\n            completionTokens: response.completionTokens,\n          },\n        });\n      }\n\n      if (this.examples.length >= this.config.numExamples) {\n        break;\n      }\n    }\n\n    return this.examples.slice(0, this.config.numExamples);\n  }\n\n  private parseGeneratedContent(content: string): Array<{\n    fields: Record<string, string>;\n    label?: string;\n  }> {\n    const results: Array<{ fields: Record<string, string>; label?: string }> = [];\n    const jsonRegex = /\\{[^}]+\\}/g;\n    const matches = content.match(jsonRegex);\n\n    if (matches) {\n      for (const match of matches) {\n        try {\n          const parsed = JSON.parse(match);\n          const fields: Record<string, string> = {};\n          let label: string | undefined;\n\n          for (const field of this.config.outputFields) {\n            if (field === 'label' && parsed[field] !== undefined) {\n              label = String(parsed[field]);\n            } else if (parsed[field] !== undefined) {\n              fields[field] = String(parsed[field]);\n            }\n          }\n\n          results.push({ fields, label });\n        } catch {\n          continue;\n        }\n      }\n    }\n\n    return results;\n  }\n\n  qualityCheck(): QualityCheckResult {\n    const issues: string[] = [];\n    const fieldQuality: Record<string, number> = {};\n\n    if (this.examples.length === 0) {\n      return { isValid: false, issues: ['No examples generated'], fieldQuality: {} };\n    }\n\n    for (const field of this.config.outputFields) {\n      const populatedCount = this.examples.filter((e) =>\n        (field === 'label' && e.label !== undefined) ||\n        (field !== 'label' && e.fields[field] !== undefined && e.fields[field].length > 0)\n      ).length;\n      fieldQuality[field] = Math.round((populatedCount / this.examples.length) * 100);\n    }\n\n    const emptyFields = Object.entries(fieldQuality)\n      .filter(([, q]) => q < 80)\n      .map(([f]) => f);\n    if (emptyFields.length > 0) {\n      issues.push(`Fields with low completion: ${emptyFields.join(', ')}`);\n    }\n\n    const uniqueCombinations = new Set(\n      this.examples.map((e) => JSON.stringify(e.fields))\n    );\n    if (uniqueCombinations.size < this.examples.length * 0.8) {\n      issues.push('Low diversity: more than 20% of examples appear to be duplicates');\n    }\n\n    if (this.config.labelDistribution && this.examples.filter((e) => e.label).length > 0) {\n      const labelCounts: Record<string, number> = {};\n      for (const e of this.examples) {\n        if (e.label) {\n          labelCounts[e.label] = (labelCounts[e.label] || 0) + 1;\n        }\n      }\n      for (const [label, targetPct] of Object.entries(this.config.labelDistribution)) {\n        const actualPct = ((labelCounts[label] || 0) / this.examples.length) * 100;\n        if (Math.abs(actualPct - targetPct) > 10) {\n          issues.push(`Label \"${label}\" distribution off: expected ${targetPct}%, got ${actualPct}%`);\n        }\n      }\n    }\n\n    return {\n      isValid: issues.length === 0,\n      issues,\n      fieldQuality,\n    };\n  }\n\n  split(trainPct: number = 0.8, valPct: number = 0.1): {\n    train: GeneratedExample[];\n    validation: GeneratedExample[];\n    test: GeneratedExample[];\n  } {\n    const shuffled = [...this.examples].sort(() => Math.random() - 0.5);\n    const trainIdx = Math.floor(shuffled.length * trainPct);\n    const valIdx = trainIdx + Math.floor(shuffled.length * valPct);\n\n    return {\n      train: shuffled.slice(0, trainIdx),\n      validation: shuffled.slice(trainIdx, valIdx),\n      test: shuffled.slice(valIdx),\n    };\n  }\n\n  getStats(): { totalExamples: number; apiCalls: number; totalTokens: number; estimatedCostUsd: number } {\n    return {\n      totalExamples: this.examples.length,\n      apiCalls: this.apiCallCount,\n      totalTokens: this.totalTokensUsed,\n      estimatedCostUsd: Math.round((this.totalTokensUsed / 1000000) * 15 * 100) / 100,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risks of Synthetic Data"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mode collapse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator produces limited diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use higher temperature, diverse prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synthetic data doesn't match real distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate against real data distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model artifacts get baked into training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple generators, human review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model trained on its own generations degrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain human-generated holdout set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation inflation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models perform better on synthetic evals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include real-world test data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-privacy-and-legal-considerations",
      children: "2.7 Privacy and Legal Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data engineering for AI must navigate an increasingly complex regulatory landscape."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Major Regulations"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Requirements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact on AI Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GDPR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU / EEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consent, data minimization, right to deletion, data portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must document consent, enable data deletion, minimize PII in AI pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CCPA / CPRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "California (USA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right to know, right to delete, opt-out of sale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle opt-out requests, disclose data collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIPEDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canada"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meaningful consent, limited collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to GDPR but less prescriptive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "China PIPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "China"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consent, purpose limitation, cross-border restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits training data from China, restricts model exports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LGPD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brazil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to GDPR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applicable to Brazilian residents' data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consent Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every data collection pipeline must include consent management:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collect consent"
        }), " at the point of data collection with clear, specific language"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Store consent records"
        }), " with timestamps, version of consent language, and scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Honor consent changes"
        }), " within a defined SLA (typically 30 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support granular consent"
        }), " (e.g., consent for analytics but not for model training)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Anonymization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before sending data to foundation model APIs, apply anonymization techniques:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k-anonymity"
        }), ": Ensure each record is indistinguishable from at least k-1 other records"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "l-diversity"
        }), ": Ensure sensitive attributes have at least l distinct values within each group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Differential privacy"
        }), ": Add calibrated noise to queries to bound information leakage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pseudonymization"
        }), ": Replace direct identifiers with tokens (distinct from full anonymization)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-datapipeline",
      children: "TypeScript: DataPipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-ready data pipeline class that handles collection, quality scoring, and preprocessing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DataPipeline — A configurable data processing pipeline for AI engineering.\n * Supports collection strategies, quality scoring, preprocessing stages,\n * and transformation chaining.\n */\n\ntype PipelineStage =\n  | 'collect'\n  | 'clean'\n  | 'normalize'\n  | 'deduplicate'\n  | 'validate'\n  | 'anonymize'\n  | 'chunk'\n  | 'embed'\n  | 'store';\n\ninterface PipelineConfig {\n  name: string;\n  stages: PipelineStage[];\n  sourceConfig?: Record<string, unknown>;\n  qualityThresholds?: Partial<Record<string, number>>;\n  chunkSize?: number;\n  chunkOverlap?: number;\n}\n\ninterface DataRecord {\n  id: string;\n  content: string;\n  metadata: Record<string, unknown>;\n  source: string;\n  collectedAt: Date;\n  qualityScore?: number;\n  processedAt?: Date;\n}\n\ntype StageHandler = (records: DataRecord[]) => DataRecord[] | Promise<DataRecord[]>;\n\nclass DataPipeline {\n  private config: PipelineConfig;\n  private stageHandlers: Map<PipelineStage, StageHandler> = new Map();\n  private records: DataRecord[] = [];\n  private stageTimings: Record<string, number> = {};\n  private errorCount: number = 0;\n\n  constructor(config: PipelineConfig) {\n    this.config = config;\n    this.registerDefaultHandlers();\n  }\n\n  private registerDefaultHandlers(): void {\n    this.stageHandlers.set('clean', this.defaultCleanStage.bind(this));\n    this.stageHandlers.set('normalize', this.defaultNormalizeStage.bind(this));\n    this.stageHandlers.set('deduplicate', this.defaultDeduplicateStage.bind(this));\n    this.stageHandlers.set('validate', this.defaultValidateStage.bind(this));\n    this.stageHandlers.set('anonymize', this.defaultAnonymizeStage.bind(this));\n  }\n\n  registerStage(name: PipelineStage, handler: StageHandler): void {\n    this.stageHandlers.set(name, handler);\n  }\n\n  async ingest(records: DataRecord[]): Promise<number> {\n    this.records.push(...records);\n    return this.records.length;\n  }\n\n  private defaultCleanStage(records: DataRecord[]): DataRecord[] {\n    return records.map((record) => {\n      let cleaned = record.content;\n      cleaned = cleaned.replace(/<[^>]*>/g, '');\n      cleaned = cleaned.replace(/\\s+/g, ' ').trim();\n      cleaned = cleaned.replace(/[\\u0000-\\u001F\\u007F-\\u009F]/g, '');\n      return { ...record, content: cleaned };\n    });\n  }\n\n  private defaultNormalizeStage(records: DataRecord[]): DataRecord[] {\n    return records.map((record) => {\n      let normalized = record.content;\n      normalized = normalized.toLowerCase();\n      normalized = normalized.normalize('NFKC');\n      normalized = normalized.replace(/\\u2018|\\u2019/g, \"'\");\n      normalized = normalized.replace(/\\u201C|\\u201D/g, '\"');\n      normalized = normalized.replace(/[\\u2013\\u2014]/g, '--');\n      return { ...record, content: normalized };\n    });\n  }\n\n  private defaultDeduplicateStage(records: DataRecord[]): DataRecord[] {\n    const seen = new Set<string>();\n    return records.filter((record) => {\n      const fingerprint = record.content.slice(0, 100).replace(/\\s+/g, '');\n      if (seen.has(fingerprint)) {\n        return false;\n      }\n      seen.add(fingerprint);\n      return true;\n    });\n  }\n\n  private defaultValidateStage(records: DataRecord[]): DataRecord[] {\n    return records.filter((record) => {\n      if (!record.content || record.content.length < 10) {\n        return false;\n      }\n      if (record.content.length > 1000000) {\n        return false;\n      }\n      return true;\n    });\n  }\n\n  private defaultAnonymizeStage(records: DataRecord[]): DataRecord[] {\n    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g;\n    const phoneRegex = /(\\+?\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}/g;\n    const ssnRegex = /\\b\\d{3}[-]\\d{2}[-]\\d{4}\\b/g;\n\n    return records.map((record) => {\n      let anonymized = record.content;\n      anonymized = anonymized.replace(emailRegex, '[EMAIL_REMOVED]');\n      anonymized = anonymized.replace(phoneRegex, '[PHONE_REMOVED]');\n      anonymized = anonymized.replace(ssnRegex, '[SSN_REMOVED]');\n      return {\n        ...record,\n        content: anonymized,\n        metadata: {\n          ...record.metadata,\n          anonymized: true,\n          anonymizedAt: new Date().toISOString(),\n        },\n      };\n    });\n  }\n\n  async run(): Promise<{\n    success: boolean;\n    totalRecords: number;\n    stageResults: Array<{ stage: string; input: number; output: number; durationMs: number }>;\n    errors: number;\n  }> {\n    const stageResults: Array<{ stage: string; input: number; output: number; durationMs: number }> = [];\n    this.errorCount = 0;\n\n    for (const stage of this.config.stages) {\n      const inputCount = this.records.length;\n      const startTime = Date.now();\n      const handler = this.stageHandlers.get(stage);\n\n      if (!handler) {\n        console.warn(`No handler registered for stage: ${stage}, skipping`);\n        continue;\n      }\n\n      try {\n        this.records = await handler(this.records);\n      } catch (error) {\n        this.errorCount++;\n        console.error(`Stage \"${stage}\" failed:`, error);\n        break;\n      }\n\n      const duration = Date.now() - startTime;\n      this.stageTimings[stage] = duration;\n      stageResults.push({\n        stage,\n        input: inputCount,\n        output: this.records.length,\n        durationMs: duration,\n      });\n    }\n\n    const finalRecords = this.records.map((r) => ({\n      ...r,\n      processedAt: new Date(),\n    }));\n    this.records = finalRecords;\n\n    return {\n      success: this.errorCount === 0,\n      totalRecords: this.records.length,\n      stageResults,\n      errors: this.errorCount,\n    };\n  }\n\n  getRecords(): DataRecord[] {\n    return this.records.map((r) => ({ ...r }));\n  }\n\n  getPipelineStats(): {\n    totalStages: number;\n    completedStages: number;\n    totalDurationMs: number;\n    recordsProcessed: number;\n  } {\n    const totalDuration = Object.values(this.stageTimings).reduce((a, b) => a + b, 0);\n    return {\n      totalStages: this.config.stages.length,\n      completedStages: Object.keys(this.stageTimings).length,\n      totalDurationMs: totalDuration,\n      recordsProcessed: this.records.length,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-dataqualityscorer",
      children: "TypeScript: DataQualityScorer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A reusable utility for computing data quality metrics across the six quality dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DataQualityScorer — Computes quality metrics across six dimensions\n * for a given dataset. Returns normalized scores (0–100) for each dimension.\n */\n\ninterface QualityScores {\n  accuracy: number;\n  completeness: number;\n  consistency: number;\n  timeliness: number;\n  uniqueness: number;\n  validity: number;\n  overall: number;\n}\n\ninterface QualityWeights {\n  accuracy: number;\n  completeness: number;\n  consistency: number;\n  timeliness: number;\n  uniqueness: number;\n  validity: number;\n}\n\nclass DataQualityScorer {\n  private weights: QualityWeights;\n\n  constructor(weights?: Partial<QualityWeights>) {\n    this.weights = {\n      accuracy: 0.2,\n      completeness: 0.2,\n      consistency: 0.15,\n      timeliness: 0.15,\n      uniqueness: 0.15,\n      validity: 0.15,\n      ...weights,\n    };\n  }\n\n  scoreCompleteness(records: Array<Record<string, unknown>>, requiredFields: string[]): number {\n    if (records.length === 0) {\n      return 0;\n    }\n    let totalScore = 0;\n    for (const record of records) {\n      let presentFields = 0;\n      for (const field of requiredFields) {\n        const value = record[field];\n        if (value !== null && value !== undefined && value !== '') {\n          presentFields++;\n        }\n      }\n      totalScore += presentFields / requiredFields.length;\n    }\n    return Math.round((totalScore / records.length) * 100);\n  }\n\n  scoreUniqueness(records: Array<Record<string, unknown>>, keyFields: string[]): number {\n    if (records.length === 0) {\n      return 100;\n    }\n    const seen = new Set<string>();\n    let duplicates = 0;\n    for (const record of records) {\n      const key = keyFields.map((f) => String(record[f] ?? '')).join('||');\n      if (seen.has(key)) {\n        duplicates++;\n      }\n      seen.add(key);\n    }\n    return Math.round(((records.length - duplicates) / records.length) * 100);\n  }\n\n  scoreValidity(\n    records: Array<Record<string, unknown>>,\n    validators: Record<string, (value: unknown) => boolean>,\n  ): number {\n    if (records.length === 0 || Object.keys(validators).length === 0) {\n      return 100;\n    }\n    let validCount = 0;\n    let totalChecks = 0;\n    for (const record of records) {\n      for (const [field, validator] of Object.entries(validators)) {\n        totalChecks++;\n        if (validator(record[field])) {\n          validCount++;\n        }\n      }\n    }\n    return totalChecks > 0 ? Math.round((validCount / totalChecks) * 100) : 100;\n  }\n\n  scoreTimeliness(\n    records: Array<{ timestamp?: Date | string }>,\n    maxAgeDays: number = 365,\n  ): number {\n    if (records.length === 0) {\n      return 100;\n    }\n    const now = new Date();\n    let freshCount = 0;\n    for (const record of records) {\n      if (!record.timestamp) {\n        continue;\n      }\n      const ts = typeof record.timestamp === 'string'\n        ? new Date(record.timestamp)\n        : record.timestamp;\n      const ageDays = (now.getTime() - ts.getTime()) / (1000 * 60 * 60 * 24);\n      if (ageDays <= maxAgeDays) {\n        freshCount++;\n      }\n    }\n    return Math.round((freshCount / records.length) * 100);\n  }\n\n  scoreConsistency(\n    records: Array<Record<string, unknown>>,\n    consistencyRules: Array<{\n      fields: string[];\n      check: (values: unknown[]) => boolean;\n    }>,\n  ): number {\n    if (records.length === 0 || consistencyRules.length === 0) {\n      return 100;\n    }\n    let consistentCount = 0;\n    let totalChecks = 0;\n    for (const record of records) {\n      for (const rule of consistencyRules) {\n        totalChecks++;\n        const values = rule.fields.map((f) => record[f]);\n        if (rule.check(values)) {\n          consistentCount++;\n        }\n      }\n    }\n    return totalChecks > 0 ? Math.round((consistentCount / totalChecks) * 100) : 100;\n  }\n\n  scoreAccuracy(\n    records: Array<Record<string, unknown>>,\n    groundTruth: Array<Record<string, unknown>>,\n    compareFields: string[],\n  ): number {\n    if (records.length === 0 || groundTruth.length === 0) {\n      return 0;\n    }\n    const minLen = Math.min(records.length, groundTruth.length);\n    let correctCount = 0;\n    let totalChecks = 0;\n    for (let i = 0; i < minLen; i++) {\n      for (const field of compareFields) {\n        totalChecks++;\n        if (String(records[i][field] ?? '') === String(groundTruth[i][field] ?? '')) {\n          correctCount++;\n        }\n      }\n    }\n    return totalChecks > 0 ? Math.round((correctCount / totalChecks) * 100) : 0;\n  }\n\n  computeOverall(scores: Omit<QualityScores, 'overall'>): QualityScores {\n    const overall = Math.round(\n      scores.accuracy * this.weights.accuracy +\n      scores.completeness * this.weights.completeness +\n      scores.consistency * this.weights.consistency +\n      scores.timeliness * this.weights.timeliness +\n      scores.uniqueness * this.weights.uniqueness +\n      scores.validity * this.weights.validity\n    );\n    return { ...scores, overall };\n  }\n\n  generateReport(\n    records: Array<Record<string, unknown> & { timestamp?: Date | string }>,\n    options: {\n      requiredFields: string[];\n      keyFields: string[];\n      validators: Record<string, (value: unknown) => boolean>;\n      consistencyRules: Array<{ fields: string[]; check: (values: unknown[]) => boolean }>;\n      maxAgeDays?: number;\n      groundTruth?: Array<Record<string, unknown>>;\n      compareFields?: string[];\n    },\n  ): QualityScores {\n    const completeness = this.scoreCompleteness(records, options.requiredFields);\n    const uniqueness = this.scoreUniqueness(records, options.keyFields);\n    const validity = this.scoreValidity(records, options.validators);\n    const timeliness = this.scoreTimeliness(records, options.maxAgeDays);\n    const consistency = this.scoreConsistency(records, options.consistencyRules);\n\n    let accuracy = 0;\n    if (options.groundTruth && options.compareFields) {\n      accuracy = this.scoreAccuracy(records, options.groundTruth, options.compareFields);\n    }\n\n    return this.computeOverall({ accuracy, completeness, consistency, timeliness, uniqueness, validity });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data engineering is the foundation of successful AI applications, with data quality consistently proving more impactful than model choice. Effective data collection requires matching strategies — APIs, web scraping, user-generated data, synthetic data, or data marketplaces — to the specific use case, timeline, and budget. Data quality must be measured across six dimensions: accuracy, completeness, consistency, timeliness, uniqueness, and validity. Preprocessing pipelines transform raw data through cleaning, normalization, deduplication, formatting, and PII removal stages. Labeling strategies range from human annotation with inter-annotator agreement metrics to active learning, weak supervision, and programmatic labeling with foundation models. Synthetic data generation offers powerful capabilities for rare events and edge cases but carries risks including mode collapse, distribution mismatch, and feedback loops. All data engineering must operate within an increasingly complex regulatory landscape (GDPR, CCPA, PIPEDA) with proper consent management, anonymization, and data retention practices. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataPipeline"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataQualityScorer"
      }), " TypeScript implementations provide production-ready foundations for building data systems that power AI applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invest in data quality infrastructure before model selection"
        }), ": Build data validation, monitoring, and quality scoring into your pipeline from day one — fixing data issues downstream is exponentially more expensive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use multiple collection strategies"
        }), ": Relying on a single data source creates fragility; combine public APIs, user-generated data, and synthetic data for robustness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement automated quality gates"
        }), ": Every data pipeline should have quality thresholds that stop processing when scores drop below acceptable levels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan for PII removal before data touches an API"
        }), ": Build redaction into the preprocessing pipeline so no sensitive data reaches third-party model providers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version your data like you version your code"
        }), ": Use data versioning tools (DVC, LakeFS) to enable reproduction, rollback, and audit of training datasets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": According to the data-centric AI thesis, what is typically the root cause when a model underperforms?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The model architecture is too small\nB) Learning rate is incorrectly set\nC) Data issues such as incorrect labels or distribution mismatch\nD) The training loop has a bug"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which data quality dimension measures whether all required data fields are present?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Accuracy\nB) Completeness\nC) Consistency\nD) Validity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the primary risk associated with using synthetic data for AI training?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It is always more expensive than real data\nB) Distribution mismatch or mode collapse between synthetic and real data\nC) Synthetic data cannot be generated for text tasks\nD) It violates GDPR by definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which regulation requires the right to deletion of personal data and applies to EU residents?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) CCPA\nB) PIPEDA\nC) GDPR\nD) LGPD"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataQualityScorer"
      }), " class, which method computes whether records have duplicate values across key fields?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreCompleteness"
      }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreUniqueness"
      }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreConsistency"
      }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreValidity"
      })]
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
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
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
      children: "You are building a RAG application for a hospital's medical record system. The data includes patient notes, lab results, and prescriptions. Identify the privacy regulations that apply, list the PII types present, and design a preprocessing pipeline that complies with regulations while preserving medical utility."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Applicable Regulations:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "GDPR (if patients are EU residents)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "HIPAA (US healthcare data)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "CCPA (if any patients are California residents)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "PII Types Present:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Direct: Patient names, addresses, SSN, email, phone numbers"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Medical: Diagnoses, medications, lab values (protected health information under HIPAA)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Indirect: Date of birth + ZIP code (can re-identify patients)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compliant Preprocessing Pipeline:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detection layer"
          }), ": Use a medical NER model (e.g., BioBERT, Stanza clinical NER) to identify PHI fields"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pseudonymization"
          }), ": Replace patient names and IDs with tokens, storing mapping in a secure HSM"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Aggregation"
          }), ": For lab results, bin exact values into ranges (e.g., \"glucose 95-105 mg/dL\" rather than \"glucose 102 mg/dL\")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Consent check"
          }), ": Query consent management system — redact any records where patient has opted out of AI processing"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Differential privacy"
          }), ": Add calibrated noise to aggregate statistics for population-level queries"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Audit logging"
          }), ": Log every access to the data pipeline for compliance reporting"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserving Medical Utility:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep diagnosis codes intact (ICD-10 codes are not PII)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep medication names (they are not patient-specific identifiers)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep lab value ranges (preserves clinical meaning without exact values)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Preserve temporal ordering (important for treatment effect analysis)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your team has collected 50,000 customer support conversations. You need to label them for sentiment analysis (positive, negative, neutral). You have a budget for 5,000 human labels. Design an active learning strategy to maximize model performance with the limited labeling budget."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Learning Strategy:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial training"
            }), ": Label 1,000 randomly selected conversations. Train a preliminary sentiment classifier. This establishes a baseline and provides uncertainty estimates."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Uncertainty sampling loop"
            }), " (4 iterations of 1,000 labels each):"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For each unlabeled conversation, compute the model's prediction entropy"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Select the 1,000 conversations with highest entropy (where the model is most uncertain)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Have human annotators label these conversations"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Retrain the model with the expanded labeled set"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Diversity sampling"
            }), ": In each batch, ensure geographic and product category diversity by clustering unlabeled data and selecting from each cluster."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality control"
            }), ":"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use 3 annotators per conversation with Fleiss' kappa > 0.7"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Insert 5% golden test questions to detect annotator drift"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review disagreements weekly with a senior annotator"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Expected improvement"
            }), ":"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Random sampling with 5,000 labels: ~75% accuracy"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Active learning with 5,000 labels: ~88% accuracy"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Equivalent to random sampling with ~15,000 labels (3x efficiency)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataQualityScorer"
        }), " class can be used to monitor label consistency (accuracy dimension) throughout the process."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataPipeline"
      }), " class, implement a pipeline that: (1) ingests 100 HTML documents, (2) cleans HTML tags, (3) normalizes text, (4) deduplicates near-identical content, (5) removes PII, and (6) reports statistics. Show the configuration and a sample run."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "async function runDocumentPipeline(): Promise<void> {\n  const pipeline = new DataPipeline({\n    name: 'document-processing',\n    stages: ['clean', 'normalize', 'deduplicate', 'anonymize'],\n    qualityThresholds: {\n      completeness: 80,\n      uniqueness: 90,\n    },\n  });\n\n  const sampleDocs: DataRecord[] = Array.from({ length: 100 }, (_, i) => ({\n    id: `doc-${i}`,\n    content: `<html><body><p>Patient John Doe (john@example.com) was seen on 01/15/2026. ` +\n      `Phone: 555-123-4567. Diagnosis: ${['hypertension', 'diabetes', 'asthma', 'arthritis'][i % 4]}. ` +\n      `SSN: 123-45-${String(6789 + i).padStart(4, '0')}.${i % 2 === 0 ? '\\n' + 'Patient Jane Smith (jane@example.com) was also seen.' : ''}</p></body></html>`,\n    metadata: { source: 'web', index: i },\n    source: 'web-scraper',\n    collectedAt: new Date(),\n  }));\n\n  await pipeline.ingest(sampleDocs);\n  const result = await pipeline.run();\n\n  console.log('Pipeline result:', result);\n  console.log('Stats:', pipeline.getPipelineStats());\n\n  const processed = pipeline.getRecords();\n  console.log(`Records after processing: ${processed.length}`);\n  console.log('Sample processed record:', processed[0].content.substring(0, 200));\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compute the quality scores for a dataset of 10,000 customer records using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataQualityScorer"
      }), ". The dataset has fields: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "email"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phone"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "address"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "signup_date"
      }), ". Define validators, consistency rules, and key fields, then interpret the overall quality score."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function evaluateDataset(): void {\n  interface CustomerRecord {\n    name: string;\n    email: string;\n    phone: string;\n    address: string;\n    signup_date: string;\n  }\n\n  const scorer = new DataQualityScorer();\n\n  const records: Array<CustomerRecord & { timestamp?: Date | string }> = [];\n  for (let i = 0; i < 10000; i++) {\n    const hasName = Math.random() > 0.02;\n    const hasEmail = Math.random() > 0.05;\n    const hasPhone = Math.random() > 0.1;\n    const hasAddress = Math.random() > 0.15;\n    const daysAgo = Math.floor(Math.random() * 400);\n\n    records.push({\n      name: hasName ? `Customer ${i}` : '',\n      email: hasEmail ? `cust${i}@example.com` : '',\n      phone: hasPhone ? `555-${String(1000 + Math.floor(Math.random() * 9000)).padStart(4, '0')}` : '',\n      address: hasAddress ? `${100 + i} Main St, City, State` : '',\n      signup_date: new Date(Date.now() - daysAgo * 86400000).toISOString(),\n      timestamp: new Date(Date.now() - daysAgo * 86400000),\n    });\n  }\n\n  const report = scorer.generateReport(records, {\n    requiredFields: ['name', 'email', 'phone', 'address', 'signup_date'],\n    keyFields: ['email'],\n    validators: {\n      email: (v) => typeof v === 'string' && v.includes('@') && v.includes('.'),\n      phone: (v) => typeof v === 'string' && v.length >= 10,\n    },\n    consistencyRules: [\n      {\n        fields: ['signup_date', 'name'],\n        check: ([date, name]) => {\n          if (!date || !name) return true;\n          return new Date(date as string) <= new Date();\n        },\n      },\n    ],\n    maxAgeDays: 365,\n  });\n\n  console.log('Quality report:', report);\n\n  if (report.overall < 80) {\n    console.log('Data quality needs improvement. Focus on:', report);\n  } else {\n    console.log('Data quality is acceptable.');\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You are asked to generate a synthetic dataset of 500 customer service email pairs (incoming issue → outgoing resolution). Using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SyntheticDataGenerator"
      }), " class pattern, design the configuration and evaluate the quality against three criteria: diversity, realism, and label balance across three categories (billing, technical, account). Explain how you would validate the generated data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "async function generateSupportDataset(): Promise<void> {\n  const generator = new SyntheticDataGenerator({\n    topic: 'customer service email exchanges',\n    numExamples: 500,\n    outputFields: ['incoming_email', 'outgoing_response', 'category', 'priority', 'resolution_time_hours'],\n    constraints: [\n      'Emails must be realistic business correspondence',\n      'Incoming emails should describe a specific problem',\n      'Outgoing responses should provide a specific resolution',\n      'Include dates, order numbers, and product names',\n      'Cover a range of customer tones (frustrated, calm, urgent)',\n    ],\n    diversityTemperature: 0.8,\n    labelDistribution: { billing: 0.35, technical: 0.40, account: 0.25 },\n    language: 'English',\n  });\n\n  const fmCallMock = async (prompt: string) => ({\n    content: JSON.stringify({\n      incoming_email: 'Dear Support, I was charged twice for my subscription. Order #12345.',\n      outgoing_response: 'Dear Customer, I have refunded the duplicate charge. It will appear in 3-5 business days.',\n      category: 'billing',\n      priority: 'high',\n      resolution_time_hours: 2,\n    }),\n    promptTokens: prompt.length,\n    completionTokens: 200,\n  });\n\n  const examples = await generator.generate(fmCallMock);\n  const quality = generator.qualityCheck();\n\n  console.log('Generation stats:', generator.getStats());\n  console.log('Quality check:', quality);\n\n  // Validation strategy:\n  // 1. Manual review: Sample 50 examples for human evaluation (realism, resolution quality)\n  // 2. Diversity check: Cluster embeddings of incoming emails, ensure >10 clusters\n  // 3. Label balance: Verify category distribution is within 5% of target\n  // 4. Data leakage check: Confirm no examples are exact matches of public support datasets\n  // 5. Use split(): 400 train, 50 validation, 50 test — validate model on real data\n  const { train, validation, test } = generator.split(0.8, 0.1);\n  console.log(`Train: ${train.length}, Val: ${validation.length}, Test: ${test.length}`);\n}\n"
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