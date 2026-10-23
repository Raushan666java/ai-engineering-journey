"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1584],{

/***/ 90088
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_25_data_engineering_01_etl_pipelines_md_7ae_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-25-data-engineering-01-etl-pipelines-md-7ae.json
const site_docs_courses_ai_engineering_placement_25_data_engineering_01_etl_pipelines_md_7ae_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-engineering/01-etl-pipelines","title":"01 — ETL & Data Pipelines","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/25-data-engineering/01-etl-pipelines.md","sourceDirName":"courses/ai-engineering-placement/25-data-engineering","slug":"/ai-engineering-placement/25-data-engineering/01-etl-pipelines","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/01-etl-pipelines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":309,"frontMatter":{"id":"01-etl-pipelines","slug":"/ai-engineering-placement/25-data-engineering/01-etl-pipelines","title":"01 — ETL & Data Pipelines","sidebar_label":"01 — ETL & Data Pipelines","sidebar_position":309},"sidebar":"placementSidebar","previous":{"title":"25 — Data Engineering for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering"},"next":{"title":"02 — Data Lakehouse & Warehouse","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/25-data-engineering/01-etl-pipelines.md


const frontMatter = {
	id: '01-etl-pipelines',
	slug: '/ai-engineering-placement/25-data-engineering/01-etl-pipelines',
	title: '01 — ETL & Data Pipelines',
	sidebar_label: '01 — ETL & Data Pipelines',
	sidebar_position: 309
};
const contentTitle = '01 — ETL & Data Pipelines';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1.1 ETL vs ELT",
  "id": "11-etl-vs-elt",
  "level": 2
}, {
  "value": "ETL Flow",
  "id": "etl-flow",
  "level": 3
}, {
  "value": "ELT Flow",
  "id": "elt-flow",
  "level": 3
}, {
  "value": "Trade-off Matrix",
  "id": "trade-off-matrix",
  "level": 3
}, {
  "value": "1.2 Data Extraction",
  "id": "12-data-extraction",
  "level": 2
}, {
  "value": "REST API Extraction",
  "id": "rest-api-extraction",
  "level": 3
}, {
  "value": "Database Extraction",
  "id": "database-extraction",
  "level": 3
}, {
  "value": "Flat File Extraction",
  "id": "flat-file-extraction",
  "level": 3
}, {
  "value": "1.3 Data Transformation",
  "id": "13-data-transformation",
  "level": 2
}, {
  "value": "Data Cleaning",
  "id": "data-cleaning",
  "level": 3
}, {
  "value": "Data Validation",
  "id": "data-validation",
  "level": 3
}, {
  "value": "Normalization",
  "id": "normalization",
  "level": 3
}, {
  "value": "Aggregation",
  "id": "aggregation",
  "level": 3
}, {
  "value": "Deduplication",
  "id": "deduplication",
  "level": 3
}, {
  "value": "1.4 Data Loading",
  "id": "14-data-loading",
  "level": 2
}, {
  "value": "1.5 Pipeline Monitoring",
  "id": "15-pipeline-monitoring",
  "level": 2
}, {
  "value": "Real Example",
  "id": "real-example",
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
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Questions",
  "id": "questions",
  "level": 3
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Build a Mini ETL Pipeline",
  "id": "exercise-1-build-a-mini-etl-pipeline",
  "level": 3
}, {
  "value": "Exercise 2: Implement Incremental Load",
  "id": "exercise-2-implement-incremental-load",
  "level": 3
}, {
  "value": "Exercise 3: Data Quality Framework",
  "id": "exercise-3-data-quality-framework",
  "level": 3
}, {
  "value": "Exercise 4: Parallel Extraction",
  "id": "exercise-4-parallel-extraction",
  "level": 3
}, {
  "value": "Exercise 5: Schema Evolution Handler",
  "id": "exercise-5-schema-evolution-handler",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "PYQs (Previous Year Questions)",
  "id": "pyqs-previous-year-questions",
  "level": 2
}, {
  "value": "Google (2024)",
  "id": "google-2024",
  "level": 3
}, {
  "value": "Amazon (2023)",
  "id": "amazon-2023",
  "level": 3
}, {
  "value": "Microsoft (2024)",
  "id": "microsoft-2024",
  "level": 3
}, {
  "value": "Meta (2023)",
  "id": "meta-2023",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is the difference between ETL and ELT, and when would you choose each?",
  "id": "q1-what-is-the-difference-between-etl-and-elt-and-when-would-you-choose-each",
  "level": 3
}, {
  "value": "Q2: How do you handle schema evolution in ETL pipelines?",
  "id": "q2-how-do-you-handle-schema-evolution-in-etl-pipelines",
  "level": 3
}, {
  "value": "Q3: Design a deduplication strategy for a pipeline that receives duplicate events due to producer retries.",
  "id": "q3-design-a-deduplication-strategy-for-a-pipeline-that-receives-duplicate-events-due-to-producer-retries",
  "level": 3
}, {
  "value": "Q4: How would you monitor data quality in a production ETL pipeline?",
  "id": "q4-how-would-you-monitor-data-quality-in-a-production-etl-pipeline",
  "level": 3
}, {
  "value": "Q5: Compare batch processing vs incremental loading for ML training data.",
  "id": "q5-compare-batch-processing-vs-incremental-loading-for-ml-training-data",
  "level": 3
}, {
  "value": "Q6: How do you handle PII data in ETL pipelines?",
  "id": "q6-how-do-you-handle-pii-data-in-etl-pipelines",
  "level": 3
}, {
  "value": "Q7: What factors determine your choice of file format in an ETL pipeline?",
  "id": "q7-what-factors-determine-your-choice-of-file-format-in-an-etl-pipeline",
  "level": 3
}, {
  "value": "Q8: Explain the Lambda Architecture and when you would use it.",
  "id": "q8-explain-the-lambda-architecture-and-when-you-would-use-it",
  "level": 3
}, {
  "value": "Q9: How do you test ETL pipelines?",
  "id": "q9-how-do-you-test-etl-pipelines",
  "level": 3
}, {
  "value": "Q10: What is a data contract and why is it important for ETL?",
  "id": "q10-what-is-a-data-contract-and-why-is-it-important-for-etl",
  "level": 3
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "Top Companies Asking ETL Questions",
  "id": "top-companies-asking-etl-questions",
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
  "value": "References",
  "id": "references",
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
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    input: "input",
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
        id: "01--etl--data-pipelines",
        children: "01 — ETL & Data Pipelines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design an idempotent ETL pipeline that can be re-run without data duplication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between ELT and ETL and when each fits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract data from REST APIs, databases, and flat files using paginated and chunked readers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply cleaning, validation, normalization, aggregation, and deduplication transformations to raw data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement batch, incremental, and full refresh loading strategies with watermark tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ETL (Extract, Transform, Load) is the process of moving data from source systems to a target database or data warehouse. Every AI engineer must understand ETL because model training pipelines, feature engineering, and data validation all depend on reliable data movement and transformation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern data teams have shifted from traditional ETL to ELT (Extract, Load, Transform), where raw data is loaded first and transformed later using the power of cloud warehouses. This chapter covers both approaches, their trade-offs, and how to implement them with Python."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python programming, functions, and file I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with pandas DataFrames and Series"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of SQL SELECT, JOIN, GROUP BY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic knowledge of REST APIs and JSON"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract-Transform-Load — transform before loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ELT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract-Load-Transform — load raw, transform in warehouse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process data in fixed-size chunks at scheduled intervals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental Load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only load new or changed records since last run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncate and reload all data from source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, completeness, consistency of data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing duplicate records from datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling values to a standard range"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ETL vs ELT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform-before-load vs transform-after-load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APIs, databases, flat files, web scraping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Transformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaning, validation, normalization, aggregation, dedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch, incremental, full refresh strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging, alerting, data quality checks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Sources[Data Sources]\r\n        A[APIs]\r\n        B[(Databases)]\r\n        C[Flat Files]\r\n        D[Web Scraping]\r\n    end\r\n    subgraph Extract[Extract Layer]\r\n        E1[REST Clients]\r\n        E2[SQL Queries]\r\n        E3[File Parsers]\r\n        E4[Scrapers]\r\n    end\r\n    subgraph Transform[Transform Layer]\r\n        T1[Clean]\r\n        T2[Validate]\r\n        T3[Normalize]\r\n        T4[Aggregate]\r\n        T5[Deduplicate]\r\n    end\r\n    subgraph Load[Load Layer]\r\n        L1[Batch]\r\n        L2[Incremental]\r\n        L3[Full Refresh]\r\n    end\r\n    subgraph Target[Target]\r\n        WH[(Warehouse)]\r\n        LAKE[(Data Lake)]\r\n        DB[(Database)]\r\n    end\r\n    A --> E1\r\n    B --> E2\r\n    C --> E3\r\n    D --> E4\r\n    E1 --> T1\r\n    E2 --> T1\r\n    E3 --> T1\r\n    E4 --> T1\r\n    T1 --> T2 --> T3 --> T4 --> T5\r\n    T5 --> L1\r\n    T5 --> L2\r\n    T5 --> L3\r\n    L1 --> WH\r\n    L1 --> LAKE\r\n    L2 --> WH\r\n    L3 --> DB"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-etl-vs-elt",
      children: "1.1 ETL vs ELT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional ETL transforms data before loading, ensuring only high-quality data enters the warehouse. This works well when storage was expensive and compute was limited. Modern ELT flips this: load raw data first (cheap cloud storage), then transform using the warehouse engine (BigQuery, Snowflake, Redshift)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "etl-flow",
      children: "ETL Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S[Source] --> |Extract| E[Raw Extract]\r\n    E --> |Transform| T[Cleaned Data]\r\n    T --> |Load| W[Warehouse]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elt-flow",
      children: "ELT Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S[Source] --> |Extract| E[Raw Extract]\r\n    E --> |Load| L[Raw Lake]\r\n    L --> |Transform| W[Modeled Warehouse]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-off-matrix",
      children: "Trade-off Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ETL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ELT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (store only clean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (store all raw)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (schema fixed before load)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (transform as needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data volume limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline memory bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need to re-extract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can re-transform raw data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (schema-on-read)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-data-extraction",
      children: "1.2 Data Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extraction is the first stage — pulling data from source systems. Common sources include REST APIs, relational databases, flat files (CSV, JSON, Parquet), and web scraping."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rest-api-extraction",
      children: "REST API Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import requests\r\nimport pandas as pd\r\nimport time\r\nfrom typing import List, Dict, Optional\r\n\r\nclass APIExtractor:\r\n    \"\"\"Extract data from paginated REST APIs.\"\"\"\r\n\r\n    def __init__(self, base_url: str, headers: Optional[Dict] = None):\r\n        self.base_url = base_url\r\n        self.headers = headers or {}\r\n\r\n    def extract_paginated(\r\n        self,\r\n        endpoint: str,\r\n        params: Optional[Dict] = None,\r\n        page_size: int = 100,\r\n        max_pages: int = 100,\r\n    ) -> pd.DataFrame:\r\n        all_records: List[Dict] = []\r\n        params = params or {}\r\n        params[\"limit\"] = page_size\r\n        for page in range(1, max_pages + 1):\r\n            params[\"offset\"] = (page - 1) * page_size\r\n            response = requests.get(\r\n                f\"{self.base_url}/{endpoint}\",\r\n                headers=self.headers,\r\n                params=params,\r\n            )\r\n            response.raise_for_status()\r\n            data = response.json()\r\n            records = data.get(\"results\", data.get(\"data\", []))\r\n            if not records:\r\n                break\r\n            all_records.extend(records)\r\n            print(f\"Extracted page {page}: {len(records)} records\")\r\n            time.sleep(0.1)\r\n        df = pd.DataFrame(all_records)\r\n        print(f\"Total extracted: {len(df)} records\")\r\n        return df\r\n\r\n# Example usage\r\nextractor = APIExtractor(\"https://jsonplaceholder.typicode.com\")\r\nusers = extractor.extract_paginated(\"users\", max_pages=1)\r\nprint(users[[\"id\", \"name\", \"email\"]].head())\r\n# Expected output:\r\n#    id              name                   email\r\n# 0   1   Leanne Graham    Sincere@april.biz\r\n# 1   2   Ervin Howell   Shanna@melissa.tv\r\n# 2   3   Clementine Bauch    Nathan@yesenia.net\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-extraction",
      children: "Database Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\r\nfrom sqlalchemy import create_engine, text\r\n\r\nclass DatabaseExtractor:\r\n    \"\"\"Extract data from SQL databases using SQLAlchemy.\"\"\"\r\n\r\n    def __init__(self, connection_string: str):\r\n        self.engine = create_engine(connection_string)\r\n\r\n    def extract_table(self, table: str, schema: str = \"public\") -> pd.DataFrame:\r\n        query = text(f\"SELECT * FROM {schema}.{table}\")\r\n        with self.engine.connect() as conn:\r\n            df = pd.read_sql(query, conn)\r\n        print(f\"Extracted {len(df)} rows from {schema}.{table}\")\r\n        return df\r\n\r\n    def extract_query(self, query: str) -> pd.DataFrame:\r\n        with self.engine.connect() as conn:\r\n            df = pd.read_sql(text(query), conn)\r\n        print(f\"Query returned {len(df)} rows\")\r\n        return df\r\n\r\n# Example usage with SQLite (no external DB needed)\r\nengine = create_engine(\"sqlite:///:memory:\")\r\nengine.execute(\"\"\"\r\n    CREATE TABLE orders (\r\n        id INTEGER PRIMARY KEY,\r\n        user_id INTEGER,\r\n        amount REAL,\r\n        created_at TEXT\r\n    )\r\n\"\"\")\r\nengine.execute(\"\"\"\r\n    INSERT INTO orders VALUES\r\n        (1, 101, 250.0, '2025-01-01'),\r\n        (2, 102, 150.0, '2025-01-02'),\r\n        (3, 101, 300.0, '2025-01-03')\r\n\"\"\")\r\nextractor = DatabaseExtractor(\"sqlite:///:memory:\")\r\ndf = extractor.extract_table(\"orders\")\r\nprint(df)\r\n# Expected output:\r\n#    id  user_id  amount  created_at\r\n# 0   1      101   250.0  2025-01-01\r\n# 1   2      102   150.0  2025-01-02\r\n# 2   3      101   300.0  2025-01-03\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flat-file-extraction",
      children: "Flat File Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\r\nimport json\r\nfrom pathlib import Path\r\n\r\nclass FileExtractor:\r\n    \"\"\"Extract data from CSV, JSON, and Parquet files.\"\"\"\r\n\r\n    def extract_csv(self, path: str, **kwargs) -> pd.DataFrame:\r\n        df = pd.read_csv(path, **kwargs)\r\n        print(f\"Extracted {len(df)} rows from CSV: {path}\")\r\n        return df\r\n\r\n    def extract_json(self, path: str, orient: str = \"records\") -> pd.DataFrame:\r\n        with open(path, \"r\") as f:\r\n            data = json.load(f)\r\n        df = pd.DataFrame(data)\r\n        print(f\"Extracted {len(df)} rows from JSON: {path}\")\r\n        return df\r\n\r\n    def extract_parquet(self, path: str) -> pd.DataFrame:\r\n        df = pd.read_parquet(path)\r\n        print(f\"Extracted {len(df)} rows from Parquet: {path}\")\r\n        return df\r\n\r\n# Example with CSV\r\nimport io\r\ncsv_data = \"\"\"id,name,salary\r\n1,Alice,75000\r\n2,Bob,82000\r\n3,Charlie,68000\"\"\"\r\nfile_extractor = FileExtractor()\r\ndf = file_extractor.extract_csv(io.StringIO(csv_data))\r\nprint(df)\r\n# Expected output:\r\n#    id     name  salary\r\n# 0   1   Alice   75000\r\n# 1   2     Bob   82000\r\n# 2   3 Charlie   68000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-data-transformation",
      children: "1.3 Data Transformation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transformation is the heart of ETL — cleaning dirty data, validating constraints, normalizing values, aggregating metrics, and removing duplicates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-cleaning",
      children: "Data Cleaning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\r\nimport numpy as np\r\n\r\nclass DataCleaner:\r\n    \"\"\"Handle missing values, outliers, and inconsistent formats.\"\"\"\r\n\r\n    def fill_missing(self, df: pd.DataFrame, strategy: str = \"median\") -> pd.DataFrame:\r\n        df = df.copy()\r\n        numeric_cols = df.select_dtypes(include=[np.number]).columns\r\n        for col in numeric_cols:\r\n            if df[col].isna().any():\r\n                if strategy == \"median\":\r\n                    fill_value = df[col].median()\r\n                elif strategy == \"mean\":\r\n                    fill_value = df[col].mean()\r\n                else:\r\n                    fill_value = 0\r\n                df[col].fillna(fill_value, inplace=True)\r\n                print(f\"Filled {col} missing values with {strategy}: {fill_value}\")\r\n        return df\r\n\r\n    def remove_outliers(\r\n        self, df: pd.DataFrame, columns: List[str], method: str = \"iqr\", threshold: float = 1.5\r\n    ) -> pd.DataFrame:\r\n        df = df.copy()\r\n        for col in columns:\r\n            if method == \"iqr\":\r\n                Q1 = df[col].quantile(0.25)\r\n                Q3 = df[col].quantile(0.75)\r\n                IQR = Q3 - Q1\r\n                lower = Q1 - threshold * IQR\r\n                upper = Q3 + threshold * IQR\r\n                mask = (df[col] >= lower) & (df[col] <= upper)\r\n                removed = (~mask).sum()\r\n                df = df[mask]\r\n                print(f\"Removed {removed} outliers from {col}\")\r\n        return df\r\n\r\n    def standardize_dates(\r\n        self, df: pd.DataFrame, columns: List[str], format: str = \"%Y-%m-%d\"\r\n    ) -> pd.DataFrame:\r\n        df = df.copy()\r\n        for col in columns:\r\n            df[col] = pd.to_datetime(df[col], format=format, errors=\"coerce\")\r\n            print(f\"Standardized {col} to datetime\")\r\n        return df\r\n\r\n# Example\r\ncleaner = DataCleaner()\r\ndirty_df = pd.DataFrame({\r\n    \"value\": [10, 20, 30, 1000, 25, None, 35],\r\n    \"date\": [\"2025-01-01\", \"2025-01-02\", \"invalid\", \"2025-01-04\", \"2025-01-05\", None, \"2025-01-07\"],\r\n})\r\nclean_df = cleaner.fill_missing(dirty_df)\r\nclean_df = cleaner.remove_outliers(clean_df, [\"value\"])\r\nclean_df = cleaner.standardize_dates(clean_df, [\"date\"])\r\nprint(clean_df)\r\n# Expected output:\r\n#    value       date\r\n# 0   10.0 2025-01-01\r\n# 1   20.0 2025-01-02\r\n# 2   30.0        NaT\r\n# 3   25.0 2025-01-05\r\n# 4   35.0 2025-01-07\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-validation",
      children: "Data Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Callable, Any\r\n\r\nclass DataValidator:\r\n    \"\"\"Validate data against schema rules.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.rules: List[Dict] = []\r\n\r\n    def add_rule(self, column: str, check: Callable, message: str):\r\n        self.rules.append({\"column\": column, \"check\": check, \"message\": message})\r\n\r\n    def validate(self, df: pd.DataFrame) -> pd.DataFrame:\r\n        results = []\r\n        for idx, row in df.iterrows():\r\n            row_errors = []\r\n            for rule in self.rules:\r\n                value = row.get(rule[\"column\"])\r\n                try:\r\n                    if not rule[\"check\"](value):\r\n                        row_errors.append(rule[\"message\"])\r\n                except Exception:\r\n                    row_errors.append(f\"Error checking {rule['column']}\")\r\n            results.append({\"row\": idx, \"errors\": row_errors, \"valid\": len(row_errors) == 0})\r\n        report = pd.DataFrame(results)\r\n        valid_count = report[\"valid\"].sum()\r\n        print(f\"Validation complete: {valid_count}/{len(df)} rows valid\")\r\n        return report\r\n\r\n# Example\r\nvalidator = DataValidator()\r\nvalidator.add_rule(\"email\", lambda v: \"@\" in str(v), \"Invalid email format\")\r\nvalidator.add_rule(\"age\", lambda v: isinstance(v, (int, float)) and 0 <= v <= 150, \"Age out of range\")\r\nvalidator.add_rule(\"salary\", lambda v: v is not None and v >= 0, \"Salary must be non-negative\")\r\n\r\ntest_df = pd.DataFrame({\r\n    \"email\": [\"alice@example.com\", \"invalid-email\", \"bob@example.com\"],\r\n    \"age\": [30, 200, 25],\r\n    \"salary\": [75000, 50000, None],\r\n})\r\nreport = validator.validate(test_df)\r\nprint(report)\r\n# Expected output:\r\n#    row                                             errors  valid\r\n# 0    0                                                []   True\r\n# 1    1  [Invalid email format, Age out of range]         False\r\n# 2    2  [Salary must be non-negative]                    False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "normalization",
      children: "Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.preprocessing import MinMaxScaler, StandardScaler\r\n\r\nclass DataNormalizer:\r\n    \"\"\"Normalize numeric features for ML pipelines.\"\"\"\r\n\r\n    def __init__(self, method: str = \"minmax\"):\r\n        if method == \"minmax\":\r\n            self.scaler = MinMaxScaler()\r\n        elif method == \"zscore\":\r\n            self.scaler = StandardScaler()\r\n        else:\r\n            raise ValueError(\"Unsupported method\")\r\n        self.method = method\r\n\r\n    def fit_transform(self, df: pd.DataFrame, columns: List[str]) -> pd.DataFrame:\r\n        df = df.copy()\r\n        scaled = self.scaler.fit_transform(df[columns])\r\n        for i, col in enumerate(columns):\r\n            df[col] = scaled[:, i]\r\n        print(f\"Normalized {columns} using {self.method}\")\r\n        print(f\"  Min values: {scaled.min(axis=0)}\")\r\n        print(f\"  Max values: {scaled.max(axis=0)}\")\r\n        return df\r\n\r\n    def transform(self, df: pd.DataFrame, columns: List[str]) -> pd.DataFrame:\r\n        df = df.copy()\r\n        scaled = self.scaler.transform(df[columns])\r\n        for i, col in enumerate(columns):\r\n            df[col] = scaled[:, i]\r\n        return df\r\n\r\n# Example\r\nnormalizer = DataNormalizer(\"minmax\")\r\nraw_df = pd.DataFrame({\"feature\": [10, 20, 30, 40, 100]})\r\nnormalized_df = normalizer.fit_transform(raw_df, [\"feature\"])\r\nprint(normalized_df)\r\n# Expected output:\r\n#    feature\r\n# 0   0.0000\r\n# 1   0.1111\r\n# 2   0.2222\r\n# 3   0.3333\r\n# 4   1.0000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aggregation",
      children: "Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataAggregator:\r\n    \"\"\"Aggregate data for feature computation.\"\"\"\r\n\r\n    def aggregate(\r\n        self,\r\n        df: pd.DataFrame,\r\n        group_by: List[str],\r\n        aggregations: Dict[str, List[str]],\r\n    ) -> pd.DataFrame:\r\n        result = df.groupby(group_by).agg(aggregations)\r\n        result.columns = [\"_\".join(col).strip() for col in result.columns.values]\r\n        result = result.reset_index()\r\n        print(f\"Aggregated {len(df)} rows into {len(result)} groups\")\r\n        return result\r\n\r\n# Example\r\ntransactions = pd.DataFrame({\r\n    \"user_id\": [101, 101, 102, 102, 102],\r\n    \"amount\": [100, 200, 150, 300, 50],\r\n    \"category\": [\"food\", \"food\", \"food\", \"travel\", \"food\"],\r\n})\r\naggregator = DataAggregator()\r\nagg_df = aggregator.aggregate(transactions, [\"user_id\"], {\"amount\": [\"sum\", \"mean\", \"count\"]})\r\nprint(agg_df)\r\n# Expected output:\r\n#    user_id  amount_sum  amount_mean  amount_count\r\n# 0      101         300        150.0             2\r\n# 1      102         500        166.7             3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deduplication",
      children: "Deduplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataDeduplicator:\r\n    \"\"\"Remove duplicate records with configurable strategy.\"\"\"\r\n\r\n    def deduplicate(\r\n        self,\r\n        df: pd.DataFrame,\r\n        subset: Optional[List[str]] = None,\r\n        keep: str = \"first\",\r\n    ) -> pd.DataFrame:\r\n        before = len(df)\r\n        df = df.drop_duplicates(subset=subset, keep=keep)\r\n        deduped = before - len(df)\r\n        print(f\"Removed {deduped} duplicate rows ({before} -> {len(df)})\")\r\n        return df\r\n\r\n# Example\r\ndup_df = pd.DataFrame({\r\n    \"id\": [1, 2, 2, 3, 3, 3],\r\n    \"value\": [\"a\", \"b\", \"b\", \"c\", \"c\", \"c\"],\r\n})\r\ndeduplicator = DataDeduplicator()\r\nclean = deduplicator.deduplicate(dup_df, subset=[\"id\"])\r\nprint(clean)\r\n# Expected output:\r\n#    id value\r\n# 0   1     a\r\n# 1   2     b\r\n# 3   3     c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-data-loading",
      children: "1.4 Data Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loading writes transformed data to the target system. Strategy depends on data volume, latency requirements, and target capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataLoader:\r\n    \"\"\"Load data using batch, incremental, or full refresh strategies.\"\"\"\r\n\r\n    def batch_load(\r\n        self,\r\n        df: pd.DataFrame,\r\n        target_conn: str,\r\n        table: str,\r\n        chunksize: int = 10000,\r\n        if_exists: str = \"replace\",\r\n    ) -> None:\r\n        engine = create_engine(target_conn)\r\n        total_rows = len(df)\r\n        written = 0\r\n        for start in range(0, total_rows, chunksize):\r\n            chunk = df.iloc[start : start + chunksize]\r\n            chunk.to_sql(table, engine, if_exists=if_exists if start == 0 else \"append\", index=False)\r\n            written += len(chunk)\r\n            print(f\"Loaded {written}/{total_rows} rows to {table}\")\r\n        print(f\"Batch load to {table} complete: {total_rows} rows\")\r\n\r\n    def incremental_load(\r\n        self,\r\n        new_df: pd.DataFrame,\r\n        target_conn: str,\r\n        table: str,\r\n        key_column: str,\r\n        schema: str = \"public\",\r\n    ) -> int:\r\n        engine = create_engine(target_conn)\r\n        existing_ids = set()\r\n        try:\r\n            existing = pd.read_sql(f\"SELECT {key_column} FROM {schema}.{table}\", engine)\r\n            existing_ids = set(existing[key_column].tolist())\r\n        except Exception:\r\n            print(f\"Table {table} does not exist, creating new\")\r\n        new_records = new_df[~new_df[key_column].isin(existing_ids)]\r\n        if not new_records.empty:\r\n            new_records.to_sql(table, engine, if_exists=\"append\", index=False)\r\n        print(f\"Incremental load: {len(new_records)} new records inserted\")\r\n        return len(new_records)\r\n\r\n    def full_refresh(\r\n        self,\r\n        df: pd.DataFrame,\r\n        target_conn: str,\r\n        table: str,\r\n    ) -> None:\r\n        self.batch_load(df, target_conn, table, if_exists=\"replace\")\r\n\r\n# Example\r\nloader = DataLoader()\r\nsample_df = pd.DataFrame({\"id\": [1, 2, 3], \"value\": [\"a\", \"b\", \"c\"]})\r\nloader.batch_load(sample_df, \"sqlite:///:memory:\", \"test_table\")\r\n# Expected output:\r\n# Loaded 3/3 rows to test_table\r\n# Batch load to test_table complete: 3 rows\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-pipeline-monitoring",
      children: "1.5 Pipeline Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import logging\r\nfrom datetime import datetime\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass PipelineMetrics:\r\n    rows_extracted: int\r\n    rows_transformed: int\r\n    rows_loaded: int\r\n    extraction_time_s: float\r\n    transform_time_s: float\r\n    load_time_s: float\r\n    errors: List[str]\r\n\r\nclass PipelineMonitor:\r\n    \"\"\"Monitor pipeline health and data quality.\"\"\"\r\n\r\n    def __init__(self, pipeline_name: str):\r\n        self.pipeline_name = pipeline_name\r\n        self.logger = logging.getLogger(pipeline_name)\r\n        logging.basicConfig(level=logging.INFO)\r\n\r\n    def log_start(self) -> datetime:\r\n        start = datetime.now()\r\n        self.logger.info(f\"Pipeline {self.pipeline_name} started at {start}\")\r\n        return start\r\n\r\n    def log_end(self, start: datetime, metrics: PipelineMetrics) -> None:\r\n        duration = (datetime.now() - start).total_seconds()\r\n        self.logger.info(f\"Pipeline {self.pipeline_name} completed in {duration:.2f}s\")\r\n        self.logger.info(f\"  Extracted: {metrics.rows_extracted}\")\r\n        self.logger.info(f\"  Transformed: {metrics.rows_transformed}\")\r\n        self.logger.info(f\"  Loaded: {metrics.rows_loaded}\")\r\n        if metrics.errors:\r\n            self.logger.error(f\"  Errors: {len(metrics.errors)}\")\r\n            for err in metrics.errors[:5]:\r\n                self.logger.error(f\"    - {err}\")\r\n\r\n    def check_data_quality(self, df: pd.DataFrame, rules: Dict) -> List[str]:\r\n        issues = []\r\n        for col, check in rules.items():\r\n            if check.get(\"not_null\") and df[col].isna().any():\r\n                issues.append(f\"Column {col} has null values\")\r\n            if check.get(\"unique\") and df[col].duplicated().any():\r\n                issues.append(f\"Column {col} has duplicate values\")\r\n            if check.get(\"min\") is not None and df[col].min() < check[\"min\"]:\r\n                issues.append(f\"Column {col} below minimum value\")\r\n        return issues\r\n\r\n# Example\r\nmonitor = PipelineMonitor(\"user_etl\")\r\nstart = monitor.log_start()\r\ndf = pd.DataFrame({\"id\": [1, 2, None], \"email\": [\"a@b.com\", \"a@b.com\", \"c@d.com\"]})\r\nissues = monitor.check_data_quality(df, {\"id\": {\"not_null\": True}, \"email\": {\"unique\": True}})\r\nmetrics = PipelineMetrics(\r\n    rows_extracted=3, rows_transformed=3, rows_loaded=3,\r\n    extraction_time_s=1.2, transform_time_s=0.5, load_time_s=0.3,\r\n    errors=issues,\r\n)\r\nmonitor.log_end(start, metrics)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a food delivery platform like Zomato or Uber Eats. Raw data arrives from multiple sources: restaurant menus (JSON API), delivery tracking (Kafka stream), customer reviews (database), and payment logs (CSV exports)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ETL pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extracts"
        }), " restaurant data from the API every hour (batch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transforms"
        }), " by cleaning restaurant names, normalizing cuisines into categories, computing average rating per restaurant, and deduplicating menu items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loads"
        }), " the clean data into a PostgreSQL warehouse for ML models that predict delivery times and recommend restaurants"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without this pipeline, data scientists would waste 60% of their time manually cleaning data instead of building models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ETL pipelines form the backbone of data infrastructure for AI systems. The choice between ETL and ELT depends on storage costs, processing flexibility, and target system capabilities. Extraction handles APIs, databases, and files; transformation covers cleaning, validation, normalization, aggregation, and deduplication; loading supports batch, incremental, and full refresh strategies. Pipeline monitoring with data quality checks ensures reliable operation. Understanding these fundamentals is essential before moving to distributed processing with Spark and streaming with Kafka."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with ELT for ML pipelines — raw data in a data lake gives maximum flexibility for feature exploration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement data quality checks at every stage — garbage in, garbage out applies strongly to ML"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use incremental loads for large tables; full refreshes only for small dimension tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normalize features as part of the pipeline, not in the model training script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log pipeline metrics (row counts, timing, error rates) for observability and debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "questions",
      children: "Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the key difference between ETL and ELT?\r\na) ETL is faster than ELT\r\nb) Transformation happens before loading in ETL, after loading in ELT\r\nc) ELT only works with cloud databases\r\nd) ETL cannot handle JSON data"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which loading strategy is best for a 10-billion-row fact table that grows by 5 million rows daily?\r\na) Full refresh\r\nb) Incremental load\r\nc) Batch load every hour\r\nd) Stream directly to warehouse"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A column has outliers at 6 standard deviations from the mean. Which transformation method is most robust?\r\na) MinMax scaling\r\nb) Z-score standardization\r\nc) IQR-based removal\r\nd) Log transformation followed by IQR removal"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary advantage of ELT over ETL in modern cloud architectures?\r\na) Lower network bandwidth usage\r\nb) Raw data is preserved for future reprocessing\r\nc) No need for transformation logic\r\nd) Works without any schema definition"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When extracting from a paginated REST API, which parameter pattern is most common for cursor-based pagination?\r\na) page_number and page_size\r\nb) offset and limit\r\nc) cursor and limit\r\nd) start and end"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — ETL transforms before loading; ELT loads raw and transforms in the warehouse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Incremental load avoids re-processing billions of existing rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "d"
        }), " — Log transformation compresses extreme values; IQR removal handles remaining outliers robustly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Raw data persistence enables re-transformation without re-extraction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — Cursor-based pagination uses a cursor token and limit; offset-based pagination is less stable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-a-mini-etl-pipeline",
      children: "Exercise 1: Build a Mini ETL Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python script that extracts data from a CSV file (1000 rows, synthetic sales data), transforms by cleaning nulls, normalizing prices, and aggregating by region, then loads to a SQLite database. Verify with a SELECT query."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-implement-incremental-load",
      children: "Exercise 2: Implement Incremental Load"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify Exercise 1 to support incremental loads. Maintain a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "last_processed_id"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "last_processed_timestamp"
      }), " file. On each run, only extract rows newer than the watermark. Verify that duplicates are not inserted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-data-quality-framework",
      children: "Exercise 3: Data Quality Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a data quality checker that validates a DataFrame against a YAML config file specifying column constraints (type, nullability, unique, min, max, regex). Generate a JSON report with pass/fail per rule."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-parallel-extraction",
      children: "Exercise 4: Parallel Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a multi-threaded extractor that fetches data from 3 different API endpoints simultaneously and combines the results into a single DataFrame. Measure speedup compared to sequential extraction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-schema-evolution-handler",
      children: "Exercise 5: Schema Evolution Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a function that compares an incoming DataFrame schema to a registered schema (stored as JSON). If new columns appear, log a warning and add them. If columns are missing, fill with NULL. If types changed, attempt safe casting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing late-arriving data handling"
        }), ": Pipelines that assume data arrives in chronological order will produce incorrect results. Always implement watermarking or re-processing logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not deduplicating at the pipeline level"
        }), ": Upserts and duplicate events from retries can corrupt downstream models. Deduplicate before loading to the warehouse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-normalizing in ETL instead of ELT"
        }), ": Applying complex transformations during extraction slows pipelines and loses raw data. Load raw and transform later."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignoring schema evolution"
        }), ": APIs change, new columns appear, data types shift. Use schema-on-read with a schema registry to handle evolution gracefully."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Without incremental load for large tables"
        }), ": Full refreshes on billion-row tables waste compute and time. Always implement watermark-based incremental loading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ETL: extract -> transform -> load (transform before store)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ELT: extract -> load -> transform (transform in warehouse)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extraction sources: REST APIs (paginated), databases (SQL queries), flat files (CSV/JSON/Parquet), web scraping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformation operations: cleaning (fill nulls, remove outliers), validation (schema checks), normalization (minmax/zscore), aggregation (groupby), deduplication (drop_duplicates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loading strategies: batch (scheduled chunks), incremental (only new/changed rows), full refresh (truncate-and-reload)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline monitoring: track row counts, timing, error rates, data quality scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data quality rules: not-null, unique, range, referential integrity, format validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Late data handling: watermarking, re-processing window, lambda architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema evolution: schema registry, Avro/Protobuf, schema-on-read for lakes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ML best practice: separate feature computation from model training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs-previous-year-questions",
      children: "PYQs (Previous Year Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-2024",
      children: "Google (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design an ETL pipeline that processes 500 GB of daily log data from 200 microservices. The pipeline must handle late-arriving data (up to 48 hours), deduplicate events, and produce both real-time dashboards and daily training datasets. Discuss trade-offs between batch and micro-batch approaches."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Use a Lambda architecture — Kafka for real-time ingestion, Spark Structured Streaming for micro-batch (1-minute windows) for dashboard, and hourly Spark batch jobs for training data. Deduplicate using event IDs with a 48-hour window store. Late data lands in the batch layer; streaming layer uses watermarking to handle lateness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amazon-2023",
      children: "Amazon (2023)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You need to migrate a legacy ETL pipeline that runs on a single PostgreSQL instance to a cloud-native architecture. The pipeline processes 50 GB of clickstream data daily. Design the migration strategy, addressing data extraction, transformation, and loading for ML training data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Stage 1: Extract to S3 (Parquet format) using AWS DMS. Stage 2: Transform using Spark on EMR or Glue — partition by date for efficient querying. Stage 3: Load to Redshift for structured analytics and keep Parquet in S3 for ML training. Implement incremental loads using last-modified timestamps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microsoft-2024",
      children: "Microsoft (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your ML team spends 70% of time on data preparation. Design a data pipeline framework that reduces this to under 30%. Focus on reusability, testing, and validation across multiple model training pipelines."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Build a shared ETL framework with: (1) reusable transformation components (clean, validate, normalize), (2) data quality tests run as CI steps, (3) schema registry for versioned data contracts, (4) feature computation as configurable DAGs, (5) data profiling dashboards for early anomaly detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meta-2023",
      children: "Meta (2023)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How would you design a real-time ETL pipeline for Facebook's news feed ranking features? The pipeline must process 10 million events/second with sub-5-minute freshness for model features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Use Apache Kafka as ingestion layer with 100+ partitions per topic. Stream processing with Apache Flink for windowed aggregations (tumbling windows, 1-minute). Feature values computed in Flink and written to a key-value store (RocksDB) for online serving. Batch layer computes historical features daily with Spark. Feature store ensures consistency between online and offline features."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-etl-and-elt-and-when-would-you-choose-each",
      children: "Q1: What is the difference between ETL and ELT, and when would you choose each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": ETL transforms data before loading, ensuring clean data in the target. Use when target storage is expensive or compute-limited. ELT loads raw data first, transforms later using warehouse compute. Use with cloud warehouses (BigQuery, Snowflake) for flexibility and raw data preservation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-you-handle-schema-evolution-in-etl-pipelines",
      children: "Q2: How do you handle schema evolution in ETL pipelines?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Use a schema registry (Apache Avro, Confluent Schema Registry) to track schema versions. Implement schema-on-read for data lakes. Add new columns as nullable. Maintain backward compatibility. Run validation checks on schema changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-design-a-deduplication-strategy-for-a-pipeline-that-receives-duplicate-events-due-to-producer-retries",
      children: "Q3: Design a deduplication strategy for a pipeline that receives duplicate events due to producer retries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Assign unique event IDs to each record. Maintain a deduplication window (e.g., 7 days) using a key-value store (Redis, DynamoDB). Deduplicate at the transformation stage before aggregation. For streaming, use Kafka's idempotent producer and exactly-once semantics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-monitor-data-quality-in-a-production-etl-pipeline",
      children: "Q4: How would you monitor data quality in a production ETL pipeline?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement row-count checks between stages, schema validation, null-rate monitoring, distribution drift detection, and freshness SLA alerts. Use tools like Great Expectations or Deequ for automated data quality testing with pass/fail thresholds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-compare-batch-processing-vs-incremental-loading-for-ml-training-data",
      children: "Q5: Compare batch processing vs incremental loading for ML training data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Batch processing is simpler and suitable for daily model retraining. Incremental loading is essential for real-time features and large tables. Batch has higher latency but lower complexity. Incremental requires watermark tracking but provides fresher data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-handle-pii-data-in-etl-pipelines",
      children: "Q6: How do you handle PII data in ETL pipelines?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Identify and classify PII columns at extraction. Apply tokenization or hashing during transformation. Encrypt sensitive columns at rest. Implement access control at the warehouse level. Mask data in logs and monitoring. Follow GDPR/CCPA compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-factors-determine-your-choice-of-file-format-in-an-etl-pipeline",
      children: "Q7: What factors determine your choice of file format in an ETL pipeline?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": CSV for interoperability (slow, no schema), JSON for nested data, Parquet for analytics (columnar, compressed, schema-rich), Avro for streaming (row-oriented, fast serialization). ML pipelines favor Parquet due to column pruning and predicate pushdown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-the-lambda-architecture-and-when-you-would-use-it",
      children: "Q8: Explain the Lambda Architecture and when you would use it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Lambda Architecture has batch and speed layers. Batch layer computes accurate views from all data. Speed layer compensates for batch latency with approximate real-time views. Serving layer merges both. Use when you need both accuracy (batch) and low latency (streaming)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-test-etl-pipelines",
      children: "Q9: How do you test ETL pipelines?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Unit test transformation functions with known inputs/outputs. Integration test with sample data in a test environment. Data quality tests run after each stage. End-to-end tests compare pipeline output to expected results. Use data diff tools to compare production vs test datasets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-a-data-contract-and-why-is-it-important-for-etl",
      children: "Q10: What is a data contract and why is it important for ETL?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": A data contract is a formal agreement between data producers and consumers specifying schema, semantics, quality SLAs, and ownership. It prevents breaking changes, enables schema evolution, and establishes clear ownership. Implemented via schema registries and CI checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": ETL, ELT, data pipeline, batch processing, incremental load, data quality, pandas, SQL, data warehouse, data lake"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Designed and implemented ETL pipelines processing 10M+ daily records, reducing data preparation time by 60% and enabling real-time ML feature computation\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certifications"
        }), ": Apache Kafka, AWS Data Analytics, GCP Data Engineer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review ETL vs ELT trade-offs with examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice designing pipelines for specific latency/volume requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know common file formats (CSV, JSON, Parquet, Avro) and their use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare a real-world pipeline architecture you can draw on a whiteboard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Understand schema evolution, data quality, and monitoring approaches"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-companies-asking-etl-questions",
      children: "Top Companies Asking ETL Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google, Amazon, Microsoft, Meta, Uber, Airbnb, Stripe, Snowflake, Databricks, Confluent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " 01 — ETL & Data Pipelines builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 01 — ETL & Data Pipelines before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 01 — ETL & Data Pipelines is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 01 — ETL & Data Pipelines in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 01 — ETL & Data Pipelines chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 01 — ETL & Data Pipelines is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 01 Etl Pipelines is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 01 Etl Pipelines is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 01 — ETL & Data Pipelines issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 01 — ETL & Data Pipelines in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 01 — ETL & Data Pipelines that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 01 — ETL & Data Pipelines is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 01 — ETL & Data Pipelines in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 01 — ETL & Data Pipelines and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 01 — ETL & Data Pipelines on an empty input?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Intermediate\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 60 minutes\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Python, SQL, basic pandas"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Always persist raw data before transformation — you can't re-engineer what you've discarded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Use Parquet over CSV for any production pipeline. 10x faster reads, 4x better compression."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Implement idempotent pipelines — running the same pipeline twice should produce the same result."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 01 — ETL & Data Pipelines listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 01 — ETL & Data Pipelines to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 01 — ETL & Data Pipelines by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 01 — ETL & Data Pipelines to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The Data Warehouse Toolkit\" by Ralph Kimball"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apache Airflow documentation for pipeline orchestration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Great Expectations docs for data quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dbt documentation for ELT transformations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 25 — builds the foundation for 01 Etl Pipelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 01 Etl Pipelines with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 01 Etl Pipelines fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 01 Etl Pipelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 01 Etl Pipelines"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 01 Etl Pipelines?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 01 Etl Pipelines?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 01 Etl Pipelines asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 01 Etl Pipelines?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 — ETL & Data Pipelines is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 01 — ETL & Data Pipelines."
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
        children: "01 — ETL & Data Pipelines emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 01 — ETL & Data Pipelines today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 01 — ETL & Data Pipelines — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 01 — ETL & Data Pipelines changes quickly; focus on fundamentals that remain stable."
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
            children: "01 Etl Pipelines is like a GPS navigation system"
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
          }), " — this chapter contributes the 01 — ETL & Data Pipelines skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-01etlpipelines-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 01 — ETL & Data Pipelines in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-01etlpipelines-flash2",
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
      "data-qid": "25dataengineering-01etlpipelines-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 01 — ETL & Data Pipelines approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-01etlpipelines-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 01 — ETL & Data Pipelines NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-01etlpipelines-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 01 — ETL & Data Pipelines applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 01 — ETL & Data Pipelines (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 01 — ETL & Data Pipelines (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 01 — ETL & Data Pipelines-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 01 — ETL & Data Pipelines in production at scale"
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
        children: "cProfile / py-spy for performance profiling — ETL & Data Pipelines"
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
        }), ": Add structured logging at each stage of the 01 Etl Pipelines pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 01 — ETL & Data Pipelines in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 01 — ETL & Data Pipelines."
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
        children: "Tell me about a time you debugged a 01 — ETL & Data Pipelines problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 01 — ETL & Data Pipelines is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_01_etl_pipelines(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 01 Etl Pipelines.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 01 Etl Pipelines here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kimball, R., & Caserta, J. (2004). The Data Warehouse ETL Toolkit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kleppmann, M. (2017). Designing Data-Intensive Applications."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apache Airflow: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://airflow.apache.org/",
          children: "https://airflow.apache.org/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Great Expectations: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://greatexpectations.io/",
          children: "https://greatexpectations.io/"
        })]
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
            children: "Explain 01 — ETL & Data Pipelines without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse",
        children: "02 — Data Lakehouse & Warehouse"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 — ETL & Data Pipelines, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 01 — ETL & Data Pipelines depends on input size and distribution — always benchmark for your own data."
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