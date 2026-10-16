"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2484],{

/***/ 2535
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "flowchart TD\r\n    A[Data Collection] --> B{Data exists<br>in the wild?}\r\n    B -->|Yes| C{Is data<br>publicly available?}\r\n    B -->|No| D[Generate synthetic data<br>using foundation models]\r\n    C -->|Yes| E{Is API available?}\r\n    C -->|No| F{Can you collect<br>from users?}\r\n    E -->|Yes| G[Use API integration<br>REST / WebSocket]\r\n    E -->|No| H{Commercially<br>available?}\r\n    H -->|Yes| I[Data marketplace<br>Riverside / Snowflake Marketplace]\r\n    H -->|No| J[Web scraping<br>with legal review]\r\n    F -->|Yes| K[User-generated data<br>with consent]\r\n    F -->|No| L[Third-party data<br>partnership agreement]\r\n    G --> M[Structured pipeline]\r\n    J --> N{Scraping legal?}\r\n    N -->|Yes| M\r\n    N -->|No| I\r\n    K --> M\r\n    D --> M\r\n    I --> M\r\n    L --> M\n"
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
        children: "radar\r\n    title Data Quality Radar\r\n    x-axis Accuracy, Completeness, Consistency, Timeliness, Uniqueness, Validity\r\n    \"Dataset A\": [85, 92, 78, 95, 88, 80]\r\n    \"Dataset B\": [95, 70, 90, 60, 95, 85]\r\n    \"Dataset C\": [60, 95, 60, 50, 70, 55]\n"
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
        children: "flowchart LR\r\n    subgraph Raw[Raw Data]\r\n        R1[Unstructured<br>text, PDFs, HTML]\r\n        R2[Noisy<br>logs, scraped data]\r\n        R3[Raw user<br>generated content]\r\n    end\r\n    subgraph Cleaning[Cleaning]\r\n        C1[Remove HTML tags<br>& special chars]\r\n        C2[Fix encoding errors<br>UTF-8 normalization]\r\n        C3[Spell checking<br>& typo correction]\r\n        C4[Outlier detection<br>& handling]\r\n    end\r\n    subgraph Normalization[Normalization]\r\n        N1[Lowercasing]\r\n        N2[Unicode normalization<br>NFKC]\r\n        N3[Whitespace<br>standardization]\r\n        N4[Date/time format<br>ISO 8601]\r\n    end\r\n    subgraph Dedup[Deduplication]\r\n        D1[Exact match<br>dedup]\r\n        D2[Fuzzy match<br>dedup]\r\n        D3[Semantic<br>dedup]\r\n    end\r\n    subgraph Formatting[Formatting & PII]\r\n        F1[Chunking &<br>splitting]\r\n        F2[Schema<br>validation]\r\n        F3[PII detection<br>& removal]\r\n        F4[Consent flag<br>& retention metadata]\r\n    end\r\n\r\n    Raw --> Cleaning\r\n    Cleaning --> Normalization\r\n    Normalization --> Dedup\r\n    Dedup --> Formatting\r\n    Formatting --> CleanData[Clean<br>Dataset]\n"
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
        children: "/**\r\n * SyntheticDataGenerator — Generates synthetic training and evaluation data\r\n * using foundation model calls. Supports multiple output formats, constraints,\r\n * and diversity controls.\r\n */\r\n\r\ninterface GenerationConfig {\r\n  topic: string;\r\n  numExamples: number;\r\n  outputFields: string[];\r\n  constraints?: string[];\r\n  diversityTemperature?: number;\r\n  labelDistribution?: Record<string, number>;\r\n  language?: string;\r\n}\r\n\r\ninterface GeneratedExample {\r\n  id: string;\r\n  fields: Record<string, string>;\r\n  label?: string;\r\n  metadata: {\r\n    generatedAt: Date;\r\n    temperature: number;\r\n    promptTokens: number;\r\n    completionTokens: number;\r\n  };\r\n}\r\n\r\ninterface QualityCheckResult {\r\n  isValid: boolean;\r\n  issues: string[];\r\n  fieldQuality: Record<string, number>;\r\n}\r\n\r\nclass SyntheticDataGenerator {\r\n  private config: GenerationConfig;\r\n  private examples: GeneratedExample[] = [];\r\n  private validationSet: GeneratedExample[] = [];\r\n  private apiCallCount: number = 0;\r\n  private totalTokensUsed: number = 0;\r\n\r\n  constructor(config: GenerationConfig) {\r\n    this.config = config;\r\n  }\r\n\r\n  private buildGenerationPrompt(): string {\r\n    const constraints = this.config.constraints\r\n      ? this.config.constraints.map((c) => `- ${c}`).join('\\n')\r\n      : '';\r\n\r\n    const distributionNote = this.config.labelDistribution\r\n      ? `\\nEnsure the following label distribution: ${JSON.stringify(this.config.labelDistribution)}`\r\n      : '';\r\n\r\n    return `Generate ${this.config.numExamples} examples about \"${this.config.topic}\".\r\nFor each example, provide the following fields: ${this.config.outputFields.join(', ')}.\r\n${constraints}\r\n${distributionNote}\r\nEnsure diversity across examples. Avoid repetition.\r\nLanguage: ${this.config.language || 'English'}\r\nOutput each example as a JSON object.`;\r\n  }\r\n\r\n  async generate(fmCall: (prompt: string) => Promise<{\r\n    content: string;\r\n    promptTokens: number;\r\n    completionTokens: number;\r\n  }>): Promise<GeneratedExample[]> {\r\n    this.examples = [];\r\n    const batchSize = Math.min(this.config.numExamples, 10);\r\n    const batches = Math.ceil(this.config.numExamples / batchSize);\r\n    const temperature = this.config.diversityTemperature ?? 0.7;\r\n\r\n    for (let batch = 0; batch < batches; batch++) {\r\n      const batchPrompt = this.buildGenerationPrompt() +\r\n        `\\nBatch ${batch + 1} of ${batches}. Generate ${batchSize} examples.`;\r\n\r\n      const response = await fmCall(batchPrompt);\r\n\r\n      this.apiCallCount++;\r\n      this.totalTokensUsed += response.promptTokens + response.completionTokens;\r\n\r\n      const parsed = this.parseGeneratedContent(response.content);\r\n      for (const example of parsed) {\r\n        this.examples.push({\r\n          id: `synth-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,\r\n          fields: example.fields,\r\n          label: example.label,\r\n          metadata: {\r\n            generatedAt: new Date(),\r\n            temperature,\r\n            promptTokens: response.promptTokens,\r\n            completionTokens: response.completionTokens,\r\n          },\r\n        });\r\n      }\r\n\r\n      if (this.examples.length >= this.config.numExamples) {\r\n        break;\r\n      }\r\n    }\r\n\r\n    return this.examples.slice(0, this.config.numExamples);\r\n  }\r\n\r\n  private parseGeneratedContent(content: string): Array<{\r\n    fields: Record<string, string>;\r\n    label?: string;\r\n  }> {\r\n    const results: Array<{ fields: Record<string, string>; label?: string }> = [];\r\n    const jsonRegex = /\\{[^}]+\\}/g;\r\n    const matches = content.match(jsonRegex);\r\n\r\n    if (matches) {\r\n      for (const match of matches) {\r\n        try {\r\n          const parsed = JSON.parse(match);\r\n          const fields: Record<string, string> = {};\r\n          let label: string | undefined;\r\n\r\n          for (const field of this.config.outputFields) {\r\n            if (field === 'label' && parsed[field] !== undefined) {\r\n              label = String(parsed[field]);\r\n            } else if (parsed[field] !== undefined) {\r\n              fields[field] = String(parsed[field]);\r\n            }\r\n          }\r\n\r\n          results.push({ fields, label });\r\n        } catch {\r\n          continue;\r\n        }\r\n      }\r\n    }\r\n\r\n    return results;\r\n  }\r\n\r\n  qualityCheck(): QualityCheckResult {\r\n    const issues: string[] = [];\r\n    const fieldQuality: Record<string, number> = {};\r\n\r\n    if (this.examples.length === 0) {\r\n      return { isValid: false, issues: ['No examples generated'], fieldQuality: {} };\r\n    }\r\n\r\n    for (const field of this.config.outputFields) {\r\n      const populatedCount = this.examples.filter((e) =>\r\n        (field === 'label' && e.label !== undefined) ||\r\n        (field !== 'label' && e.fields[field] !== undefined && e.fields[field].length > 0)\r\n      ).length;\r\n      fieldQuality[field] = Math.round((populatedCount / this.examples.length) * 100);\r\n    }\r\n\r\n    const emptyFields = Object.entries(fieldQuality)\r\n      .filter(([, q]) => q < 80)\r\n      .map(([f]) => f);\r\n    if (emptyFields.length > 0) {\r\n      issues.push(`Fields with low completion: ${emptyFields.join(', ')}`);\r\n    }\r\n\r\n    const uniqueCombinations = new Set(\r\n      this.examples.map((e) => JSON.stringify(e.fields))\r\n    );\r\n    if (uniqueCombinations.size < this.examples.length * 0.8) {\r\n      issues.push('Low diversity: more than 20% of examples appear to be duplicates');\r\n    }\r\n\r\n    if (this.config.labelDistribution && this.examples.filter((e) => e.label).length > 0) {\r\n      const labelCounts: Record<string, number> = {};\r\n      for (const e of this.examples) {\r\n        if (e.label) {\r\n          labelCounts[e.label] = (labelCounts[e.label] || 0) + 1;\r\n        }\r\n      }\r\n      for (const [label, targetPct] of Object.entries(this.config.labelDistribution)) {\r\n        const actualPct = ((labelCounts[label] || 0) / this.examples.length) * 100;\r\n        if (Math.abs(actualPct - targetPct) > 10) {\r\n          issues.push(`Label \"${label}\" distribution off: expected ${targetPct}%, got ${actualPct}%`);\r\n        }\r\n      }\r\n    }\r\n\r\n    return {\r\n      isValid: issues.length === 0,\r\n      issues,\r\n      fieldQuality,\r\n    };\r\n  }\r\n\r\n  split(trainPct: number = 0.8, valPct: number = 0.1): {\r\n    train: GeneratedExample[];\r\n    validation: GeneratedExample[];\r\n    test: GeneratedExample[];\r\n  } {\r\n    const shuffled = [...this.examples].sort(() => Math.random() - 0.5);\r\n    const trainIdx = Math.floor(shuffled.length * trainPct);\r\n    const valIdx = trainIdx + Math.floor(shuffled.length * valPct);\r\n\r\n    return {\r\n      train: shuffled.slice(0, trainIdx),\r\n      validation: shuffled.slice(trainIdx, valIdx),\r\n      test: shuffled.slice(valIdx),\r\n    };\r\n  }\r\n\r\n  getStats(): { totalExamples: number; apiCalls: number; totalTokens: number; estimatedCostUsd: number } {\r\n    return {\r\n      totalExamples: this.examples.length,\r\n      apiCalls: this.apiCallCount,\r\n      totalTokens: this.totalTokensUsed,\r\n      estimatedCostUsd: Math.round((this.totalTokensUsed / 1000000) * 15 * 100) / 100,\r\n    };\r\n  }\r\n}\n"
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
        children: "/**\r\n * DataPipeline — A configurable data processing pipeline for AI engineering.\r\n * Supports collection strategies, quality scoring, preprocessing stages,\r\n * and transformation chaining.\r\n */\r\n\r\ntype PipelineStage =\r\n  | 'collect'\r\n  | 'clean'\r\n  | 'normalize'\r\n  | 'deduplicate'\r\n  | 'validate'\r\n  | 'anonymize'\r\n  | 'chunk'\r\n  | 'embed'\r\n  | 'store';\r\n\r\ninterface PipelineConfig {\r\n  name: string;\r\n  stages: PipelineStage[];\r\n  sourceConfig?: Record<string, unknown>;\r\n  qualityThresholds?: Partial<Record<string, number>>;\r\n  chunkSize?: number;\r\n  chunkOverlap?: number;\r\n}\r\n\r\ninterface DataRecord {\r\n  id: string;\r\n  content: string;\r\n  metadata: Record<string, unknown>;\r\n  source: string;\r\n  collectedAt: Date;\r\n  qualityScore?: number;\r\n  processedAt?: Date;\r\n}\r\n\r\ntype StageHandler = (records: DataRecord[]) => DataRecord[] | Promise<DataRecord[]>;\r\n\r\nclass DataPipeline {\r\n  private config: PipelineConfig;\r\n  private stageHandlers: Map<PipelineStage, StageHandler> = new Map();\r\n  private records: DataRecord[] = [];\r\n  private stageTimings: Record<string, number> = {};\r\n  private errorCount: number = 0;\r\n\r\n  constructor(config: PipelineConfig) {\r\n    this.config = config;\r\n    this.registerDefaultHandlers();\r\n  }\r\n\r\n  private registerDefaultHandlers(): void {\r\n    this.stageHandlers.set('clean', this.defaultCleanStage.bind(this));\r\n    this.stageHandlers.set('normalize', this.defaultNormalizeStage.bind(this));\r\n    this.stageHandlers.set('deduplicate', this.defaultDeduplicateStage.bind(this));\r\n    this.stageHandlers.set('validate', this.defaultValidateStage.bind(this));\r\n    this.stageHandlers.set('anonymize', this.defaultAnonymizeStage.bind(this));\r\n  }\r\n\r\n  registerStage(name: PipelineStage, handler: StageHandler): void {\r\n    this.stageHandlers.set(name, handler);\r\n  }\r\n\r\n  async ingest(records: DataRecord[]): Promise<number> {\r\n    this.records.push(...records);\r\n    return this.records.length;\r\n  }\r\n\r\n  private defaultCleanStage(records: DataRecord[]): DataRecord[] {\r\n    return records.map((record) => {\r\n      let cleaned = record.content;\r\n      cleaned = cleaned.replace(/<[^>]*>/g, '');\r\n      cleaned = cleaned.replace(/\\s+/g, ' ').trim();\r\n      cleaned = cleaned.replace(/[\\u0000-\\u001F\\u007F-\\u009F]/g, '');\r\n      return { ...record, content: cleaned };\r\n    });\r\n  }\r\n\r\n  private defaultNormalizeStage(records: DataRecord[]): DataRecord[] {\r\n    return records.map((record) => {\r\n      let normalized = record.content;\r\n      normalized = normalized.toLowerCase();\r\n      normalized = normalized.normalize('NFKC');\r\n      normalized = normalized.replace(/\\u2018|\\u2019/g, \"'\");\r\n      normalized = normalized.replace(/\\u201C|\\u201D/g, '\"');\r\n      normalized = normalized.replace(/[\\u2013\\u2014]/g, '--');\r\n      return { ...record, content: normalized };\r\n    });\r\n  }\r\n\r\n  private defaultDeduplicateStage(records: DataRecord[]): DataRecord[] {\r\n    const seen = new Set<string>();\r\n    return records.filter((record) => {\r\n      const fingerprint = record.content.slice(0, 100).replace(/\\s+/g, '');\r\n      if (seen.has(fingerprint)) {\r\n        return false;\r\n      }\r\n      seen.add(fingerprint);\r\n      return true;\r\n    });\r\n  }\r\n\r\n  private defaultValidateStage(records: DataRecord[]): DataRecord[] {\r\n    return records.filter((record) => {\r\n      if (!record.content || record.content.length < 10) {\r\n        return false;\r\n      }\r\n      if (record.content.length > 1000000) {\r\n        return false;\r\n      }\r\n      return true;\r\n    });\r\n  }\r\n\r\n  private defaultAnonymizeStage(records: DataRecord[]): DataRecord[] {\r\n    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g;\r\n    const phoneRegex = /(\\+?\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}/g;\r\n    const ssnRegex = /\\b\\d{3}[-]\\d{2}[-]\\d{4}\\b/g;\r\n\r\n    return records.map((record) => {\r\n      let anonymized = record.content;\r\n      anonymized = anonymized.replace(emailRegex, '[EMAIL_REMOVED]');\r\n      anonymized = anonymized.replace(phoneRegex, '[PHONE_REMOVED]');\r\n      anonymized = anonymized.replace(ssnRegex, '[SSN_REMOVED]');\r\n      return {\r\n        ...record,\r\n        content: anonymized,\r\n        metadata: {\r\n          ...record.metadata,\r\n          anonymized: true,\r\n          anonymizedAt: new Date().toISOString(),\r\n        },\r\n      };\r\n    });\r\n  }\r\n\r\n  async run(): Promise<{\r\n    success: boolean;\r\n    totalRecords: number;\r\n    stageResults: Array<{ stage: string; input: number; output: number; durationMs: number }>;\r\n    errors: number;\r\n  }> {\r\n    const stageResults: Array<{ stage: string; input: number; output: number; durationMs: number }> = [];\r\n    this.errorCount = 0;\r\n\r\n    for (const stage of this.config.stages) {\r\n      const inputCount = this.records.length;\r\n      const startTime = Date.now();\r\n      const handler = this.stageHandlers.get(stage);\r\n\r\n      if (!handler) {\r\n        console.warn(`No handler registered for stage: ${stage}, skipping`);\r\n        continue;\r\n      }\r\n\r\n      try {\r\n        this.records = await handler(this.records);\r\n      } catch (error) {\r\n        this.errorCount++;\r\n        console.error(`Stage \"${stage}\" failed:`, error);\r\n        break;\r\n      }\r\n\r\n      const duration = Date.now() - startTime;\r\n      this.stageTimings[stage] = duration;\r\n      stageResults.push({\r\n        stage,\r\n        input: inputCount,\r\n        output: this.records.length,\r\n        durationMs: duration,\r\n      });\r\n    }\r\n\r\n    const finalRecords = this.records.map((r) => ({\r\n      ...r,\r\n      processedAt: new Date(),\r\n    }));\r\n    this.records = finalRecords;\r\n\r\n    return {\r\n      success: this.errorCount === 0,\r\n      totalRecords: this.records.length,\r\n      stageResults,\r\n      errors: this.errorCount,\r\n    };\r\n  }\r\n\r\n  getRecords(): DataRecord[] {\r\n    return this.records.map((r) => ({ ...r }));\r\n  }\r\n\r\n  getPipelineStats(): {\r\n    totalStages: number;\r\n    completedStages: number;\r\n    totalDurationMs: number;\r\n    recordsProcessed: number;\r\n  } {\r\n    const totalDuration = Object.values(this.stageTimings).reduce((a, b) => a + b, 0);\r\n    return {\r\n      totalStages: this.config.stages.length,\r\n      completedStages: Object.keys(this.stageTimings).length,\r\n      totalDurationMs: totalDuration,\r\n      recordsProcessed: this.records.length,\r\n    };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-dataqualityscorer",
      children: "TypeScript: DataQualityScorer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A reusable utility for computing data quality metrics across the six quality dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\r\n * DataQualityScorer — Computes quality metrics across six dimensions\r\n * for a given dataset. Returns normalized scores (0–100) for each dimension.\r\n */\r\n\r\ninterface QualityScores {\r\n  accuracy: number;\r\n  completeness: number;\r\n  consistency: number;\r\n  timeliness: number;\r\n  uniqueness: number;\r\n  validity: number;\r\n  overall: number;\r\n}\r\n\r\ninterface QualityWeights {\r\n  accuracy: number;\r\n  completeness: number;\r\n  consistency: number;\r\n  timeliness: number;\r\n  uniqueness: number;\r\n  validity: number;\r\n}\r\n\r\nclass DataQualityScorer {\r\n  private weights: QualityWeights;\r\n\r\n  constructor(weights?: Partial<QualityWeights>) {\r\n    this.weights = {\r\n      accuracy: 0.2,\r\n      completeness: 0.2,\r\n      consistency: 0.15,\r\n      timeliness: 0.15,\r\n      uniqueness: 0.15,\r\n      validity: 0.15,\r\n      ...weights,\r\n    };\r\n  }\r\n\r\n  scoreCompleteness(records: Array<Record<string, unknown>>, requiredFields: string[]): number {\r\n    if (records.length === 0) {\r\n      return 0;\r\n    }\r\n    let totalScore = 0;\r\n    for (const record of records) {\r\n      let presentFields = 0;\r\n      for (const field of requiredFields) {\r\n        const value = record[field];\r\n        if (value !== null && value !== undefined && value !== '') {\r\n          presentFields++;\r\n        }\r\n      }\r\n      totalScore += presentFields / requiredFields.length;\r\n    }\r\n    return Math.round((totalScore / records.length) * 100);\r\n  }\r\n\r\n  scoreUniqueness(records: Array<Record<string, unknown>>, keyFields: string[]): number {\r\n    if (records.length === 0) {\r\n      return 100;\r\n    }\r\n    const seen = new Set<string>();\r\n    let duplicates = 0;\r\n    for (const record of records) {\r\n      const key = keyFields.map((f) => String(record[f] ?? '')).join('||');\r\n      if (seen.has(key)) {\r\n        duplicates++;\r\n      }\r\n      seen.add(key);\r\n    }\r\n    return Math.round(((records.length - duplicates) / records.length) * 100);\r\n  }\r\n\r\n  scoreValidity(\r\n    records: Array<Record<string, unknown>>,\r\n    validators: Record<string, (value: unknown) => boolean>,\r\n  ): number {\r\n    if (records.length === 0 || Object.keys(validators).length === 0) {\r\n      return 100;\r\n    }\r\n    let validCount = 0;\r\n    let totalChecks = 0;\r\n    for (const record of records) {\r\n      for (const [field, validator] of Object.entries(validators)) {\r\n        totalChecks++;\r\n        if (validator(record[field])) {\r\n          validCount++;\r\n        }\r\n      }\r\n    }\r\n    return totalChecks > 0 ? Math.round((validCount / totalChecks) * 100) : 100;\r\n  }\r\n\r\n  scoreTimeliness(\r\n    records: Array<{ timestamp?: Date | string }>,\r\n    maxAgeDays: number = 365,\r\n  ): number {\r\n    if (records.length === 0) {\r\n      return 100;\r\n    }\r\n    const now = new Date();\r\n    let freshCount = 0;\r\n    for (const record of records) {\r\n      if (!record.timestamp) {\r\n        continue;\r\n      }\r\n      const ts = typeof record.timestamp === 'string'\r\n        ? new Date(record.timestamp)\r\n        : record.timestamp;\r\n      const ageDays = (now.getTime() - ts.getTime()) / (1000 * 60 * 60 * 24);\r\n      if (ageDays <= maxAgeDays) {\r\n        freshCount++;\r\n      }\r\n    }\r\n    return Math.round((freshCount / records.length) * 100);\r\n  }\r\n\r\n  scoreConsistency(\r\n    records: Array<Record<string, unknown>>,\r\n    consistencyRules: Array<{\r\n      fields: string[];\r\n      check: (values: unknown[]) => boolean;\r\n    }>,\r\n  ): number {\r\n    if (records.length === 0 || consistencyRules.length === 0) {\r\n      return 100;\r\n    }\r\n    let consistentCount = 0;\r\n    let totalChecks = 0;\r\n    for (const record of records) {\r\n      for (const rule of consistencyRules) {\r\n        totalChecks++;\r\n        const values = rule.fields.map((f) => record[f]);\r\n        if (rule.check(values)) {\r\n          consistentCount++;\r\n        }\r\n      }\r\n    }\r\n    return totalChecks > 0 ? Math.round((consistentCount / totalChecks) * 100) : 100;\r\n  }\r\n\r\n  scoreAccuracy(\r\n    records: Array<Record<string, unknown>>,\r\n    groundTruth: Array<Record<string, unknown>>,\r\n    compareFields: string[],\r\n  ): number {\r\n    if (records.length === 0 || groundTruth.length === 0) {\r\n      return 0;\r\n    }\r\n    const minLen = Math.min(records.length, groundTruth.length);\r\n    let correctCount = 0;\r\n    let totalChecks = 0;\r\n    for (let i = 0; i < minLen; i++) {\r\n      for (const field of compareFields) {\r\n        totalChecks++;\r\n        if (String(records[i][field] ?? '') === String(groundTruth[i][field] ?? '')) {\r\n          correctCount++;\r\n        }\r\n      }\r\n    }\r\n    return totalChecks > 0 ? Math.round((correctCount / totalChecks) * 100) : 0;\r\n  }\r\n\r\n  computeOverall(scores: Omit<QualityScores, 'overall'>): QualityScores {\r\n    const overall = Math.round(\r\n      scores.accuracy * this.weights.accuracy +\r\n      scores.completeness * this.weights.completeness +\r\n      scores.consistency * this.weights.consistency +\r\n      scores.timeliness * this.weights.timeliness +\r\n      scores.uniqueness * this.weights.uniqueness +\r\n      scores.validity * this.weights.validity\r\n    );\r\n    return { ...scores, overall };\r\n  }\r\n\r\n  generateReport(\r\n    records: Array<Record<string, unknown> & { timestamp?: Date | string }>,\r\n    options: {\r\n      requiredFields: string[];\r\n      keyFields: string[];\r\n      validators: Record<string, (value: unknown) => boolean>;\r\n      consistencyRules: Array<{ fields: string[]; check: (values: unknown[]) => boolean }>;\r\n      maxAgeDays?: number;\r\n      groundTruth?: Array<Record<string, unknown>>;\r\n      compareFields?: string[];\r\n    },\r\n  ): QualityScores {\r\n    const completeness = this.scoreCompleteness(records, options.requiredFields);\r\n    const uniqueness = this.scoreUniqueness(records, options.keyFields);\r\n    const validity = this.scoreValidity(records, options.validators);\r\n    const timeliness = this.scoreTimeliness(records, options.maxAgeDays);\r\n    const consistency = this.scoreConsistency(records, options.consistencyRules);\r\n\r\n    let accuracy = 0;\r\n    if (options.groundTruth && options.compareFields) {\r\n      accuracy = this.scoreAccuracy(records, options.groundTruth, options.compareFields);\r\n    }\r\n\r\n    return this.computeOverall({ accuracy, completeness, consistency, timeliness, uniqueness, validity });\r\n  }\r\n}\n"
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
      children: "A) The model architecture is too small\r\nB) Learning rate is incorrectly set\r\nC) Data issues such as incorrect labels or distribution mismatch\r\nD) The training loop has a bug"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which data quality dimension measures whether all required data fields are present?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Accuracy\r\nB) Completeness\r\nC) Consistency\r\nD) Validity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the primary risk associated with using synthetic data for AI training?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It is always more expensive than real data\r\nB) Distribution mismatch or mode collapse between synthetic and real data\r\nC) Synthetic data cannot be generated for text tasks\r\nD) It violates GDPR by definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which regulation requires the right to deletion of personal data and applies to EU residents?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) CCPA\r\nB) PIPEDA\r\nC) GDPR\r\nD) LGPD"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataQualityScorer"
      }), " class, which method computes whether records have duplicate values across key fields?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreCompleteness"
      }), "\r\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreUniqueness"
      }), "\r\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoreConsistency"
      }), "\r\nD) ", (0,jsx_runtime.jsx)(_components.code, {
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
          children: "async function runDocumentPipeline(): Promise<void> {\r\n  const pipeline = new DataPipeline({\r\n    name: 'document-processing',\r\n    stages: ['clean', 'normalize', 'deduplicate', 'anonymize'],\r\n    qualityThresholds: {\r\n      completeness: 80,\r\n      uniqueness: 90,\r\n    },\r\n  });\r\n\r\n  const sampleDocs: DataRecord[] = Array.from({ length: 100 }, (_, i) => ({\r\n    id: `doc-${i}`,\r\n    content: `<html><body><p>Patient John Doe (john@example.com) was seen on 01/15/2026. ` +\r\n      `Phone: 555-123-4567. Diagnosis: ${['hypertension', 'diabetes', 'asthma', 'arthritis'][i % 4]}. ` +\r\n      `SSN: 123-45-${String(6789 + i).padStart(4, '0')}.${i % 2 === 0 ? '\\n' + 'Patient Jane Smith (jane@example.com) was also seen.' : ''}</p></body></html>`,\r\n    metadata: { source: 'web', index: i },\r\n    source: 'web-scraper',\r\n    collectedAt: new Date(),\r\n  }));\r\n\r\n  await pipeline.ingest(sampleDocs);\r\n  const result = await pipeline.run();\r\n\r\n  console.log('Pipeline result:', result);\r\n  console.log('Stats:', pipeline.getPipelineStats());\r\n\r\n  const processed = pipeline.getRecords();\r\n  console.log(`Records after processing: ${processed.length}`);\r\n  console.log('Sample processed record:', processed[0].content.substring(0, 200));\r\n}\n"
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
          children: "function evaluateDataset(): void {\r\n  interface CustomerRecord {\r\n    name: string;\r\n    email: string;\r\n    phone: string;\r\n    address: string;\r\n    signup_date: string;\r\n  }\r\n\r\n  const scorer = new DataQualityScorer();\r\n\r\n  const records: Array<CustomerRecord & { timestamp?: Date | string }> = [];\r\n  for (let i = 0; i < 10000; i++) {\r\n    const hasName = Math.random() > 0.02;\r\n    const hasEmail = Math.random() > 0.05;\r\n    const hasPhone = Math.random() > 0.1;\r\n    const hasAddress = Math.random() > 0.15;\r\n    const daysAgo = Math.floor(Math.random() * 400);\r\n\r\n    records.push({\r\n      name: hasName ? `Customer ${i}` : '',\r\n      email: hasEmail ? `cust${i}@example.com` : '',\r\n      phone: hasPhone ? `555-${String(1000 + Math.floor(Math.random() * 9000)).padStart(4, '0')}` : '',\r\n      address: hasAddress ? `${100 + i} Main St, City, State` : '',\r\n      signup_date: new Date(Date.now() - daysAgo * 86400000).toISOString(),\r\n      timestamp: new Date(Date.now() - daysAgo * 86400000),\r\n    });\r\n  }\r\n\r\n  const report = scorer.generateReport(records, {\r\n    requiredFields: ['name', 'email', 'phone', 'address', 'signup_date'],\r\n    keyFields: ['email'],\r\n    validators: {\r\n      email: (v) => typeof v === 'string' && v.includes('@') && v.includes('.'),\r\n      phone: (v) => typeof v === 'string' && v.length >= 10,\r\n    },\r\n    consistencyRules: [\r\n      {\r\n        fields: ['signup_date', 'name'],\r\n        check: ([date, name]) => {\r\n          if (!date || !name) return true;\r\n          return new Date(date as string) <= new Date();\r\n        },\r\n      },\r\n    ],\r\n    maxAgeDays: 365,\r\n  });\r\n\r\n  console.log('Quality report:', report);\r\n\r\n  if (report.overall < 80) {\r\n    console.log('Data quality needs improvement. Focus on:', report);\r\n  } else {\r\n    console.log('Data quality is acceptable.');\r\n  }\r\n}\n"
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
          children: "async function generateSupportDataset(): Promise<void> {\r\n  const generator = new SyntheticDataGenerator({\r\n    topic: 'customer service email exchanges',\r\n    numExamples: 500,\r\n    outputFields: ['incoming_email', 'outgoing_response', 'category', 'priority', 'resolution_time_hours'],\r\n    constraints: [\r\n      'Emails must be realistic business correspondence',\r\n      'Incoming emails should describe a specific problem',\r\n      'Outgoing responses should provide a specific resolution',\r\n      'Include dates, order numbers, and product names',\r\n      'Cover a range of customer tones (frustrated, calm, urgent)',\r\n    ],\r\n    diversityTemperature: 0.8,\r\n    labelDistribution: { billing: 0.35, technical: 0.40, account: 0.25 },\r\n    language: 'English',\r\n  });\r\n\r\n  const fmCallMock = async (prompt: string) => ({\r\n    content: JSON.stringify({\r\n      incoming_email: 'Dear Support, I was charged twice for my subscription. Order #12345.',\r\n      outgoing_response: 'Dear Customer, I have refunded the duplicate charge. It will appear in 3-5 business days.',\r\n      category: 'billing',\r\n      priority: 'high',\r\n      resolution_time_hours: 2,\r\n    }),\r\n    promptTokens: prompt.length,\r\n    completionTokens: 200,\r\n  });\r\n\r\n  const examples = await generator.generate(fmCallMock);\r\n  const quality = generator.qualityCheck();\r\n\r\n  console.log('Generation stats:', generator.getStats());\r\n  console.log('Quality check:', quality);\r\n\r\n  // Validation strategy:\r\n  // 1. Manual review: Sample 50 examples for human evaluation (realism, resolution quality)\r\n  // 2. Diversity check: Cluster embeddings of incoming emails, ensure >10 clusters\r\n  // 3. Label balance: Verify category distribution is within 5% of target\r\n  // 4. Data leakage check: Confirm no examples are exact matches of public support datasets\r\n  // 5. Use split(): 400 train, 50 validation, 50 test — validate model on real data\r\n  const { train, validation, test } = generator.split(0.8, 0.1);\r\n  console.log(`Train: ${train.length}, Val: ${validation.length}, Test: ${test.length}`);\r\n}\n"
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



/***/ }

}]);