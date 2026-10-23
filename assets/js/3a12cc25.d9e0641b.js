"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4871],{

/***/ 74105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_25_data_engineering_02_data_lakehouse_warehouse_md_3a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-25-data-engineering-02-data-lakehouse-warehouse-md-3a1.json
const site_docs_courses_ai_engineering_placement_25_data_engineering_02_data_lakehouse_warehouse_md_3a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-engineering/02-data-lakehouse-warehouse","title":"02 — Data Lakehouse & Warehouse","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse.md","sourceDirName":"courses/ai-engineering-placement/25-data-engineering","slug":"/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":310,"frontMatter":{"id":"02-data-lakehouse-warehouse","slug":"/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse","title":"02 — Data Lakehouse & Warehouse","sidebar_label":"02 — Data Lakehouse & Warehouse","sidebar_position":310},"sidebar":"placementSidebar","previous":{"title":"01 — ETL & Data Pipelines","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/01-etl-pipelines"},"next":{"title":"03 — Apache Spark Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/03-apache-spark-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse.md


const frontMatter = {
	id: '02-data-lakehouse-warehouse',
	slug: '/ai-engineering-placement/25-data-engineering/02-data-lakehouse-warehouse',
	title: '02 — Data Lakehouse & Warehouse',
	sidebar_label: '02 — Data Lakehouse & Warehouse',
	sidebar_position: 310
};
const contentTitle = '02 — Data Lakehouse & Warehouse';

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
  "value": "1.1 Data Lake",
  "id": "11-data-lake",
  "level": 2
}, {
  "value": "Characteristics",
  "id": "characteristics",
  "level": 3
}, {
  "value": "Data Lake Pros and Cons",
  "id": "data-lake-pros-and-cons",
  "level": 3
}, {
  "value": "1.2 Data Warehouse",
  "id": "12-data-warehouse",
  "level": 2
}, {
  "value": "Warehouse Pros and Cons",
  "id": "warehouse-pros-and-cons",
  "level": 3
}, {
  "value": "1.3 Lakehouse Architecture",
  "id": "13-lakehouse-architecture",
  "level": 2
}, {
  "value": "Lakehouse Architecture",
  "id": "lakehouse-architecture",
  "level": 3
}, {
  "value": "Delta Lake Implementation",
  "id": "delta-lake-implementation",
  "level": 3
}, {
  "value": "1.4 Star Schema &amp; Snowflake Schema",
  "id": "14-star-schema--snowflake-schema",
  "level": 2
}, {
  "value": "Star Schema",
  "id": "star-schema",
  "level": 3
}, {
  "value": "Snowflake Schema",
  "id": "snowflake-schema",
  "level": 3
}, {
  "value": "1.5 Data Cataloging",
  "id": "15-data-cataloging",
  "level": 2
}, {
  "value": "1.6 Data Versioning",
  "id": "16-data-versioning",
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
  "value": "Exercise 1: Build a Lakehouse Simulator",
  "id": "exercise-1-build-a-lakehouse-simulator",
  "level": 3
}, {
  "value": "Exercise 2: Star Schema Design",
  "id": "exercise-2-star-schema-design",
  "level": 3
}, {
  "value": "Exercise 3: Delta Lake Merge Simulation",
  "id": "exercise-3-delta-lake-merge-simulation",
  "level": 3
}, {
  "value": "Exercise 4: Data Catalog Search",
  "id": "exercise-4-data-catalog-search",
  "level": 3
}, {
  "value": "Exercise 5: Time Travel Query",
  "id": "exercise-5-time-travel-query",
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
  "value": "Meta (2024)",
  "id": "meta-2024",
  "level": 3
}, {
  "value": "Microsoft (2023)",
  "id": "microsoft-2023",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Compare data lake, warehouse, and lakehouse. When would you choose each?",
  "id": "q1-compare-data-lake-warehouse-and-lakehouse-when-would-you-choose-each",
  "level": 3
}, {
  "value": "Q2: Explain the medallion architecture (bronze/silver/gold).",
  "id": "q2-explain-the-medallion-architecture-bronzesilvergold",
  "level": 3
}, {
  "value": "Q3: How does Delta Lake provide ACID transactions on blob storage?",
  "id": "q3-how-does-delta-lake-provide-acid-transactions-on-blob-storage",
  "level": 3
}, {
  "value": "Q4: What is a slowly changing dimension (SCD) and how do you handle Type 2?",
  "id": "q4-what-is-a-slowly-changing-dimension-scd-and-how-do-you-handle-type-2",
  "level": 3
}, {
  "value": "Q5: Design a star schema for an e-commerce recommendation system.",
  "id": "q5-design-a-star-schema-for-an-e-commerce-recommendation-system",
  "level": 3
}, {
  "value": "Q6: How would you handle schema evolution in a production lakehouse?",
  "id": "q6-how-would-you-handle-schema-evolution-in-a-production-lakehouse",
  "level": 3
}, {
  "value": "Q7: What partitioning strategy would you use for a 100 TB event table with queries filtering by user_id and date?",
  "id": "q7-what-partitioning-strategy-would-you-use-for-a-100-tb-event-table-with-queries-filtering-by-user_id-and-date",
  "level": 3
}, {
  "value": "Q8: Explain how Iceberg&#39;s hidden partitioning works.",
  "id": "q8-explain-how-icebergs-hidden-partitioning-works",
  "level": 3
}, {
  "value": "Q9: How do data catalogs help ML teams?",
  "id": "q9-how-do-data-catalogs-help-ml-teams",
  "level": 3
}, {
  "value": "Q10: Compare DVC vs lakeFS for data versioning.",
  "id": "q10-compare-dvc-vs-lakefs-for-data-versioning",
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
        id: "02--data-lakehouse--warehouse",
        children: "02 — Data Lakehouse & Warehouse"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between a data lake (schema-on-read) and a data warehouse (schema-on-write) and when each fits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how the lakehouse architecture combines lake flexibility with warehouse reliability using Delta Lake and Iceberg"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design star and snowflake schemas with fact tables and dimensions for analytical queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use data catalogs to manage metadata, discovery, and lineage of datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply data versioning with DVC and lakeFS to reproduce and roll back ML experiments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right storage architecture is one of the most consequential decisions an AI engineer makes. Data lakes store raw data in native formats (schema-on-read), data warehouses store structured data optimized for analytics (schema-on-write), and the lakehouse combines both — bringing ACID transactions and schema enforcement to data lakes. This chapter covers when to use each, how to model data with star and snowflake schemas, and how modern formats like Delta Lake and Iceberg enable reliable ML on data lakes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of ETL/ELT from Chapter 01"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL proficiency with JOINs, GROUP BY, subqueries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic knowledge of file formats (CSV, Parquet, Avro)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with cloud storage concepts (S3, GCS, ADLS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Data Lake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage system storing raw data in native format, schema-on-read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Warehouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured repository optimized for analytical queries, schema-on-write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lakehouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified architecture combining lake flexibility with warehouse reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fact table surrounded by dimension tables (denormalized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snowflake Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensions normalized into multiple related tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fact Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central table with measurable events (sales, clicks, logs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dimension Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descriptive attributes (time, customer, product, location)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delta Lake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source storage layer adding ACID transactions to data lakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Iceberg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open table format for large analytic datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change Data Capture — tracking row-level changes in databases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata management system for discovering and governing data"
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
            children: "Data Lake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-on-read, raw storage, cheap and flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Warehouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-on-write, structured, analytics-optimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lakehouse Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delta Lake, Iceberg, ACID on object storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star & Snowflake Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fact tables, dimensions, normalization trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Cataloging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery, governance, lineage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVC, lakeFS, time travel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Sources[Data Sources]\r\n        OLTP[(OLTP DBs)]\r\n        LOGS[App Logs]\r\n        API[REST APIs]\r\n        IOT[IoT Sensors]\r\n    end\r\n    subgraph Ingestion[Ingestion]\r\n        BATCH[Batch / ETL]\r\n        STREAM[Streaming / CDC]\r\n    end\r\n    subgraph Lake[Data Lake]\r\n        RAW[Raw Zone]\r\n        CURATED[Curated Zone]\r\n    end\r\n    subgraph Warehouse[Warehouse]\r\n        STAGING[Staging]\r\n        DWH[Dimensional Model]\r\n        MART[Data Marts]\r\n    end\r\n    subgraph Lakehouse[Lakehouse]\r\n        BRONZE[Bronze - Raw]\r\n        SILVER[Silver - Cleaned]\r\n        GOLD[Gold - Aggregated]\r\n    end\r\n    subgraph Consumers[Consumers]\r\n        ML[ML Training]\r\n        BI[BI Dashboards]\r\n        DS[Data Science]\r\n    end\r\n    Sources --> Ingestion\r\n    Ingestion --> Lake\r\n    Ingestion --> Warehouse\r\n    Ingestion --> Lakehouse\r\n    Lake --> BI\r\n    Warehouse --> BI\r\n    Lakehouse --> ML\r\n    Lakehouse --> BI\r\n    Lakehouse --> DS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-data-lake",
      children: "1.1 Data Lake"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A data lake stores data in its native/raw format. You write data as-is and interpret its structure when reading (schema-on-read). This makes data lakes flexible for exploration but requires careful governance to avoid becoming a \"data swamp.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "characteristics",
      children: "Characteristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\r\nimport numpy as np\r\nfrom datetime import datetime\r\n\r\nclass DataLakeSimulator:\r\n    \"\"\"Simulate storing raw data in a data lake.\"\"\"\r\n\r\n    def store_raw(self, data: pd.DataFrame, path: str, format: str = \"parquet\"):\r\n        \"\"\"Store data in native format with minimal processing.\"\"\"\r\n        if format == \"parquet\":\r\n            data.to_parquet(path)\r\n        elif format == \"json\":\r\n            data.to_json(path, orient=\"records\")\r\n        elif format == \"csv\":\r\n            data.to_csv(path, index=False)\r\n        print(f\"Stored {len(data)} rows to {path} ({format})\")\r\n\r\n    def read_raw(self, path: str, format: str = \"parquet\") -> pd.DataFrame:\r\n        \"\"\"Read data with schema-on-read (interpret structure at read time).\"\"\"\r\n        if format == \"parquet\":\r\n            df = pd.read_parquet(path)\r\n        elif format == \"json\":\r\n            df = pd.read_json(path)\r\n        elif format == \"csv\":\r\n            df = pd.read_csv(path)\r\n        # Schema-on-read: we can project only needed columns\r\n        print(f\"Read {len(df)} rows from {path}\")\r\n        print(f\"  Inferred schema: {dict(df.dtypes)}\")\r\n        return df\r\n\r\n# Example\r\nlake = DataLakeSimulator()\r\nraw_data = pd.DataFrame({\r\n    \"event_id\": range(1000),\r\n    \"event_type\": np.random.choice([\"click\", \"view\", \"purchase\"], 1000),\r\n    \"timestamp\": pd.date_range(\"2025-01-01\", periods=1000, freq=\"5min\"),\r\n    \"user_id\": np.random.randint(1, 100, 1000),\r\n    \"payload\": [{\"page\": f\"/product/{i}\"} for i in range(1000)],\r\n})\r\nlake.store_raw(raw_data, \"/tmp/events.parquet\", \"parquet\")\r\n# Stored 1000 rows to /tmp/events.parquet (parquet)\r\n\r\nreloaded = lake.read_raw(\"/tmp/events.parquet\")\r\nprint(reloaded[[\"event_id\", \"event_type\"]].head())\r\n# Expected output:\r\n#    event_id event_type\r\n# 0         1      click\r\n# 1         2       view\r\n# 2         3   purchase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-lake-pros-and-cons",
      children: "Data Lake Pros and Cons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap storage (S3 ~$23/TB/month)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ACID transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can become data swamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store any format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor read performance for analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raw data preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No indexing or statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Great for ML exploration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance challenges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports unstructured data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No SQL query optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-data-warehouse",
      children: "1.2 Data Warehouse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A data warehouse stores structured, processed data optimized for analytical queries. Data is transformed before loading (schema-on-write), ensuring consistency and query performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataWarehouseSimulator:\r\n    \"\"\"Simulate structured dimensional warehouse.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.tables = {}\r\n\r\n    def create_table(self, name: str, schema: Dict[str, type]):\r\n        \"\"\"Create table with enforced schema (schema-on-write).\"\"\"\r\n        self.tables[name] = pd.DataFrame({col: pd.Series(dtype=typ) for col, typ in schema.items()})\r\n        print(f\"Created table '{name}' with schema: {schema}\")\r\n\r\n    def insert(self, table: str, data: pd.DataFrame):\r\n        \"\"\"Insert data with schema validation.\"\"\"\r\n        if table not in self.tables:\r\n            raise ValueError(f\"Table {table} not found\")\r\n        existing_schema = self.tables[table].dtypes.to_dict()\r\n        for col, expected_dtype in existing_schema.items():\r\n            if col in data.columns and data[col].dtype != expected_dtype:\r\n                try:\r\n                    data[col] = data[col].astype(expected_dtype)\r\n                except Exception as e:\r\n                    raise TypeError(f\"Column {col}: cannot cast {data[col].dtype} to {expected_dtype}\")\r\n        self.tables[table] = pd.concat([self.tables[table], data], ignore_index=True)\r\n        print(f\"Inserted {len(data)} rows into '{table}'. Total: {len(self.tables[table])}\")\r\n\r\n    def query(self, sql: str) -> pd.DataFrame:\r\n        \"\"\"Simulate SQL query execution.\"\"\"\r\n        print(f\"Executing: {sql}\")\r\n        return pd.DataFrame()\r\n\r\n# Example\r\nwh = DataWarehouseSimulator()\r\nwh.create_table(\"sales_fact\", {\r\n    \"sale_id\": int, \"product_id\": int, \"customer_id\": int,\r\n    \"store_id\": int, \"amount\": float, \"quantity\": int, \"date_id\": int,\r\n})\r\nwh.create_table(\"product_dim\", {\r\n    \"product_id\": int, \"product_name\": str, \"category\": str, \"price\": float,\r\n})\r\nwh.create_table(\"customer_dim\", {\r\n    \"customer_id\": int, \"name\": str, \"city\": str, \"segment\": str,\r\n})\r\nwh.create_table(\"date_dim\", {\r\n    \"date_id\": int, \"date\": str, \"year\": int, \"month\": int, \"day\": int, \"quarter\": int,\r\n})\r\n# Expected output shows schema enforcement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "warehouse-pros-and-cons",
      children: "Warehouse Pros and Cons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High storage cost (~$1000/TB/month)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes are expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast query performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't store raw/unstructured data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires ETL to load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BI tool compatible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in risk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-lakehouse-architecture",
      children: "1.3 Lakehouse Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The lakehouse combines data lake flexibility with warehouse reliability. Key innovations: ACID transactions on object storage, schema enforcement, and time travel. Implemented by Delta Lake (Databricks), Apache Iceberg (Netflix/Apple), and Apache Hudi (Uber)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lakehouse-architecture",
      children: "Lakehouse Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Storage[Cloud Object Storage - S3 / ADLS / GCS]\r\n        BRONZE[Bronze - Raw Ingestion]\r\n        SILVER[Silver - Cleaned & Validated]\r\n        GOLD[Gold - Aggregated & Modeled]\r\n    end\r\n    subgraph LakehouseMetadata[Lakehouse Metadata Layer]\r\n        TRANSACTIONS[ACID Transactions]\r\n        SCHEMA[Schema Registry]\r\n        TIME_TRAVEL[Time Travel / Versioning]\r\n        INDEX[Indexing & Statistics]\r\n    end\r\n    subgraph Engines[Query Engines]\r\n        SPARK[Apache Spark]\r\n        PRESTO[Presto / Trino]\r\n        FLINK[Apache Flink]\r\n        SQL[SQL Endpoint]\r\n    end\r\n    subgraph ML[ML Workloads]\r\n        TRAIN[Model Training]\r\n        INFER[Batch Inference]\r\n        FEATURES[Feature Engineering]\r\n    end\r\n    BRONZE --> TRANSACTIONS\r\n    SILVER --> TRANSACTIONS\r\n    GOLD --> TRANSACTIONS\r\n    TRANSACTIONS --> SPARK\r\n    TRANSACTIONS --> PRESTO\r\n    TRANSACTIONS --> FLINK\r\n    TRANSACTIONS --> SQL\r\n    SPARK --> TRAIN\r\n    SPARK --> FEATURES\r\n    PRESTO --> BI[BI Dashboards]\r\n    SQL --> INFER"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delta-lake-implementation",
      children: "Delta Lake Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\r\nfrom pyspark.sql.functions import col, current_timestamp, lit\r\n\r\nclass DeltaLakehouse:\r\n    \"\"\"Simulate Delta Lake operations with PySpark.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.spark = SparkSession.builder \\\r\n            .appName(\"LakehouseDemo\") \\\r\n            .config(\"spark.sql.extensions\", \"io.delta.sql.DeltaSparkSessionExtension\") \\\r\n            .config(\"spark.sql.catalog.spark_catalog\", \"org.apache.spark.sql.delta.catalog.DeltaCatalog\") \\\r\n            .getOrCreate()\r\n\r\n    def ingest_bronze(self, data: pd.DataFrame, path: str):\r\n        \"\"\"Store raw data in bronze layer.\"\"\"\r\n        sdf = self.spark.createDataFrame(data)\r\n        sdf.write.format(\"delta\").mode(\"append\").save(path)\r\n        print(f\"Bronze ingest: {data.count()} rows to {path}\")\r\n\r\n    def transform_silver(self, bronze_path: str, silver_path: str):\r\n        \"\"\"Clean and validate data into silver layer.\"\"\"\r\n        df = self.spark.read.format(\"delta\").load(bronze_path)\r\n        silver_df = df.dropDuplicates([\"event_id\"]) \\\r\n            .filter(col(\"value\").isNotNull()) \\\r\n            .withColumn(\"processed_at\", current_timestamp())\r\n        silver_df.write.format(\"delta\").mode(\"overwrite\").save(silver_path)\r\n        print(f\"Silver transform: {silver_df.count()} rows\")\r\n\r\n    def aggregate_gold(self, silver_path: str, gold_path: str):\r\n        \"\"\"Compute aggregates for gold layer.\"\"\"\r\n        df = self.spark.read.format(\"delta\").load(silver_path)\r\n        gold_df = df.groupBy(\"category\").agg({\"value\": \"avg\", \"event_id\": \"count\"})\r\n        gold_df.write.format(\"delta\").mode(\"overwrite\").save(gold_path)\r\n        print(f\"Gold aggregate: {gold_df.count()} categories\")\r\n\r\n    def time_travel_query(self, path: str, version: int) -> pd.DataFrame:\r\n        \"\"\"Query historical version of data (time travel).\"\"\"\r\n        df = self.spark.read.format(\"delta\") \\\r\n            .option(\"versionAsOf\", version) \\\r\n            .load(path)\r\n        print(f\"Time travel: version {version}, {df.count()} rows\")\r\n        return df.toPandas()\r\n\r\n# Note: This requires a Delta Lake Spark cluster to execute.\r\n# Below is a pandas-based simulation of concepts.\r\n\r\nclass LakehousePandas:\r\n    \"\"\"Simulate lakehouse concepts with pandas for learning.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.versions = {}  # version -> DataFrame\r\n        self.current_version = 0\r\n\r\n    def write(self, df: pd.DataFrame, table: str):\r\n        \"\"\"Write with versioning (simulating ACID).\"\"\"\r\n        self.current_version += 1\r\n        key = f\"{table}_v{self.current_version}\"\r\n        self.versions[key] = df.copy()\r\n        print(f\"Wrote v{self.current_version} of '{table}': {len(df)} rows\")\r\n\r\n    def read(self, table: str, version: Optional[int] = None) -> pd.DataFrame:\r\n        \"\"\"Read with time travel.\"\"\"\r\n        v = version or self.current_version\r\n        key = f\"{table}_v{v}\"\r\n        if key not in self.versions:\r\n            raise ValueError(f\"Version {v} not found for {table}\")\r\n        print(f\"Reading '{table}' at version {v}\")\r\n        return self.versions[key].copy()\r\n\r\n    def merge(self, table: str, updates: pd.DataFrame, key_col: str):\r\n        \"\"\"Upsert (merge) operation — ACID feature.\"\"\"\r\n        current = self.read(table)\r\n        merged = current.set_index(key_col)\r\n        update_indexed = updates.set_index(key_col)\r\n        merged.update(update_indexed)\r\n        new_rows = update_indexed[~update_indexed.index.isin(current[key_col])]\r\n        result = pd.concat([merged.reset_index(), new_rows.reset_index()], ignore_index=True)\r\n        self.write(result, table)\r\n        print(f\"Merge: {len(updates)} records upserted\")\r\n\r\n# Example\r\nlh = LakehousePandas()\r\ndf1 = pd.DataFrame({\"id\": [1, 2, 3], \"value\": [\"a\", \"b\", \"c\"]})\r\nlh.write(df1, \"events\")\r\ndf2 = pd.DataFrame({\"id\": [2, 3, 4], \"value\": [\"x\", \"y\", \"z\"]})\r\nlh.merge(\"events\", df2, \"id\")\r\nprint(lh.read(\"events\"))\r\n# Expected output:\r\n#    id value\r\n# 0   1     a\r\n# 1   2     x\r\n# 2   3     y\r\n# 3   4     z\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-star-schema--snowflake-schema",
      children: "1.4 Star Schema & Snowflake Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dimensional modeling organizes data for analytics. Star schema has a central fact table with directly joined dimensions. Snowflake schema normalizes dimensions into sub-dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "star-schema",
      children: "Star Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Fact[Fact Table - Sales]\r\n        FID[sale_id PK]\r\n        PID[product_id FK]\r\n        CID[customer_id FK]\r\n        SID[store_id FK]\r\n        DID[date_id FK]\r\n        AMT[amount]\r\n        QTY[quantity]\r\n    end\r\n    subgraph Dims[Dimension Tables]\r\n        P[product_dim]\r\n        C[customer_dim]\r\n        S[store_dim]\r\n        D[date_dim]\r\n    end\r\n    PID --> P\r\n    CID --> C\r\n    SID --> S\r\n    DID --> D"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StarSchemaBuilder:\r\n    \"\"\"Build and query star schema models.\"\"\"\r\n\r\n    def create_fact_table(self, data: pd.DataFrame) -> pd.DataFrame:\r\n        \"\"\"Create fact table with foreign keys to dimensions.\"\"\"\r\n        fact_cols = [c for c in data.columns if c.endswith(\"_id\") or c in [\"amount\", \"quantity\"]]\r\n        return data[fact_cols].copy()\r\n\r\n    def create_dimension(self, data: pd.DataFrame, id_col: str, desc_cols: List[str]) -> pd.DataFrame:\r\n        \"\"\"Create dimension table with unique attributes.\"\"\"\r\n        dim = data[[id_col] + desc_cols].drop_duplicates(subset=[id_col]).reset_index(drop=True)\r\n        return dim\r\n\r\n    def star_query(self, fact: pd.DataFrame, dims: Dict[str, pd.DataFrame]) -> pd.DataFrame:\r\n        \"\"\"Simulate star schema JOIN query.\"\"\"\r\n        result = fact.copy()\r\n        for name, dim in dims.items():\r\n            fk = [c for c in fact.columns if c.endswith(\"_id\") and c.startswith(name.split(\"_\")[0])]\r\n            if fk:\r\n                result = result.merge(dim, left_on=fk[0], right_on=dim.columns[0], how=\"left\")\r\n        return result\r\n\r\n# Example\r\nimport pandas as pd\r\nimport numpy as np\r\n\r\ndates = pd.date_range(\"2025-01-01\", periods=100, freq=\"D\")\r\nraw_data = pd.DataFrame({\r\n    \"product_id\": np.random.randint(1, 20, 1000),\r\n    \"customer_id\": np.random.randint(1, 50, 1000),\r\n    \"store_id\": np.random.randint(1, 5, 1000),\r\n    \"date_id\": np.random.randint(1, 100, 1000),\r\n    \"amount\": np.random.uniform(10, 500, 1000).round(2),\r\n    \"quantity\": np.random.randint(1, 10, 1000),\r\n})\r\n\r\nbuilder = StarSchemaBuilder()\r\nfact = builder.create_fact_table(raw_data)\r\n\r\nproducts = pd.DataFrame({\r\n    \"product_id\": range(1, 21),\r\n    \"product_name\": [f\"Product_{i}\" for i in range(1, 21)],\r\n    \"category\": np.random.choice([\"Electronics\", \"Clothing\", \"Food\", \"Books\"], 20),\r\n    \"price\": np.random.uniform(5, 200, 20).round(2),\r\n})\r\nproduct_dim = builder.create_dimension(products, \"product_id\", [\"product_name\", \"category\", \"price\"])\r\n\r\ncustomers = pd.DataFrame({\r\n    \"customer_id\": range(1, 51),\r\n    \"name\": [f\"Customer_{i}\" for i in range(1, 51)],\r\n    \"city\": np.random.choice([\"NYC\", \"LA\", \"Chicago\", \"Houston\", \"SF\"], 50),\r\n    \"segment\": np.random.choice([\"Premium\", \"Standard\", \"Budget\"], 50),\r\n})\r\ncustomer_dim = builder.create_dimension(customers, \"customer_id\", [\"name\", \"city\", \"segment\"])\r\n\r\nstores = pd.DataFrame({\r\n    \"store_id\": range(1, 6),\r\n    \"store_name\": [f\"Store_{i}\" for i in range(1, 6)],\r\n    \"region\": np.random.choice([\"East\", \"West\", \"North\", \"South\"], 5),\r\n})\r\nstore_dim = builder.create_dimension(stores, \"store_id\", [\"store_name\", \"region\"])\r\n\r\ndate_dim = pd.DataFrame({\r\n    \"date_id\": range(1, 101),\r\n    \"date\": dates[:100],\r\n    \"year\": dates[:100].year,\r\n    \"month\": dates[:100].month,\r\n    \"day\": dates[:100].day,\r\n    \"quarter\": dates[:100].quarter,\r\n})\r\n\r\ndims = {\"product_dim\": product_dim, \"customer_dim\": customer_dim, \"store_dim\": store_dim, \"date_dim\": date_dim}\r\njoined = builder.star_query(fact, dims)\r\nprint(f\"Star query result: {len(joined)} rows, {len(joined.columns)} columns\")\r\nprint(joined[[\"amount\", \"product_name\", \"category\", \"city\", \"region\"]].head())\r\n# Expected output:\r\n#    amount product_name     category       city  region\r\n# 0  123.45    Product_5  Electronics  ...        ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "snowflake-schema",
      children: "Snowflake Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SnowflakeSchemaBuilder:\r\n    \"\"\"Normalize dimensions into sub-dimensions (snowflake).\"\"\"\r\n\r\n    def normalize_dimension(\r\n        self, dim: pd.DataFrame, hierarchy: List[str]\r\n    ) -> Dict[str, pd.DataFrame]:\r\n        \"\"\"Split a dimension into hierarchy levels.\"\"\"\r\n        tables = {}\r\n        current = dim.copy()\r\n        for i, level in enumerate(hierarchy):\r\n            level_cols = [hierarchy[i]] if i < len(hierarchy) - 1 else dim.columns.tolist()\r\n            sub_dim = current[level_cols].drop_duplicates().reset_index(drop=True)\r\n            tables[level] = sub_dim\r\n        return tables\r\n\r\n# Example\r\nsnow = SnowflakeSchemaBuilder()\r\nproduct_dim = pd.DataFrame({\r\n    \"product_id\": range(1, 21),\r\n    \"product_name\": [f\"Product_{i}\" for i in range(1, 21)],\r\n    \"sub_category\": np.random.choice([\"Laptop\", \"Phone\", \"Shirt\", \"Novel\"], 20),\r\n    \"category\": np.random.choice([\"Electronics\", \"Clothing\", \"Food\", \"Books\"], 20),\r\n    \"department\": np.random.choice([\"Consumer\", \"Industrial\"], 20),\r\n})\r\nhierarchy = snow.normalize_dimension(product_dim, [\"department\", \"category\", \"sub_category\", \"product_id\"])\r\nfor name, table in hierarchy.items():\r\n    print(f\"{name}: {table.shape}\")\r\n# Shows how snowflake splits into multiple tables\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-data-cataloging",
      children: "1.5 Data Cataloging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data catalogs help teams discover, understand, and govern data assets. Tools like Apache Atlas and DataHub provide metadata management, data lineage, and search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataCatalog:\r\n    \"\"\"Simple data catalog for metadata management.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.datasets: Dict[str, Dict] = {}\r\n\r\n    def register(self, name: str, schema: Dict, description: str, owner: str, tags: List[str]):\r\n        self.datasets[name] = {\r\n            \"schema\": schema,\r\n            \"description\": description,\r\n            \"owner\": owner,\r\n            \"tags\": tags,\r\n            \"created_at\": datetime.now(),\r\n            \"lineage\": [],\r\n        }\r\n        print(f\"Registered dataset: {name}\")\r\n\r\n    def add_lineage(self, source: str, target: str, transformation: str):\r\n        if source in self.datasets and target in self.datasets:\r\n            self.datasets[source][\"lineage\"].append({\r\n                \"target\": target,\r\n                \"transformation\": transformation,\r\n                \"timestamp\": datetime.now(),\r\n            })\r\n            print(f\"Lineage: {source} -> {target} via {transformation}\")\r\n\r\n    def search(self, query: str) -> List[str]:\r\n        results = []\r\n        for name, meta in self.datasets.items():\r\n            if query.lower() in name.lower() or query.lower() in meta[\"description\"].lower():\r\n                results.append(name)\r\n            elif any(query.lower() in tag.lower() for tag in meta[\"tags\"]):\r\n                results.append(name)\r\n        return results\r\n\r\n    def get_schema(self, name: str) -> Optional[Dict]:\r\n        return self.datasets.get(name, {}).get(\"schema\")\r\n\r\n# Example\r\ncatalog = DataCatalog()\r\ncatalog.register(\r\n    \"user_events\",\r\n    {\"user_id\": int, \"event_type\": str, \"timestamp\": datetime, \"page\": str},\r\n    \"Clickstream events from web application\",\r\n    \"data-platform-team\",\r\n    [\"clickstream\", \"web\", \"events\"],\r\n)\r\ncatalog.register(\r\n    \"user_features\",\r\n    {\"user_id\": int, \"total_clicks\": int, \"avg_session_duration\": float, \"last_active\": datetime},\r\n    \"Aggregated user features for ML models\",\r\n    \"ml-team\",\r\n    [\"features\", \"ml\", \"user\"],\r\n)\r\ncatalog.add_lineage(\"user_events\", \"user_features\", \"daily Spark aggregation job\")\r\n\r\nprint(\"Search 'features':\", catalog.search(\"features\"))\r\nprint(\"Schema of user_events:\", catalog.get_schema(\"user_events\"))\r\n# Expected output:\r\n# Search 'features': ['user_features']\r\n# Schema of user_events: { ... column types ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-data-versioning",
      children: "1.6 Data Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data versioning tools like DVC (Data Version Control) and lakeFS enable Git-like semantics for data — commit, branch, merge, revert."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport json\r\nfrom pathlib import Path\r\n\r\nclass SimpleDVC:\r\n    \"\"\"Simulate data version control for ML datasets.\"\"\"\r\n\r\n    def __init__(self, storage_dir: str = \".dvcstore\"):\r\n        self.storage_dir = Path(storage_dir)\r\n        self.storage_dir.mkdir(exist_ok=True)\r\n        self.versions: Dict[str, List[Dict]] = {}\r\n\r\n    def _hash_file(self, df: pd.DataFrame) -> str:\r\n        content = json.dumps(df.to_dict(), sort_keys=True, default=str)\r\n        return hashlib.sha256(content.encode()).hexdigest()[:12]\r\n\r\n    def add(self, name: str, df: pd.DataFrame, message: str) -> str:\r\n        hash_id = self._hash_file(df)\r\n        version = {\r\n            \"hash\": hash_id,\r\n            \"message\": message,\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"rows\": len(df),\r\n            \"columns\": list(df.columns),\r\n        }\r\n        if name not in self.versions:\r\n            self.versions[name] = []\r\n        self.versions[name].append(version)\r\n        # Store actual data\r\n        path = self.storage_dir / f\"{name}_{hash_id}.parquet\"\r\n        df.to_parquet(path)\r\n        print(f\"Added v{len(self.versions[name])} of '{name}': {version}\")\r\n        return hash_id\r\n\r\n    def log(self, name: str) -> List[Dict]:\r\n        versions = self.versions.get(name, [])\r\n        for i, v in enumerate(versions):\r\n            print(f\"v{i+1}: {v['hash']} | {v['message']} | {v['rows']} rows | {v['timestamp']}\")\r\n        return versions\r\n\r\n    def checkout(self, name: str, version: int = -1) -> pd.DataFrame:\r\n        versions = self.versions.get(name, [])\r\n        if not versions:\r\n            raise ValueError(f\"No versions for {name}\")\r\n        v = versions[version]\r\n        path = self.storage_dir / f\"{name}_{v['hash']}.parquet\"\r\n        df = pd.read_parquet(path)\r\n        print(f\"Checked out v{version + 1} of '{name}': {len(df)} rows\")\r\n        return df\r\n\r\n# Example\r\ndvc = SimpleDVC()\r\nv1_df = pd.DataFrame({\"id\": [1, 2, 3], \"value\": [10, 20, 30]})\r\ndvc.add(\"training_data\", v1_df, \"Initial dataset\")\r\n\r\nv2_df = pd.DataFrame({\"id\": [1, 2, 3, 4], \"value\": [10, 20, 30, 40]})\r\ndvc.add(\"training_data\", v2_df, \"Added new row\")\r\n\r\nv3_df = pd.DataFrame({\"id\": [1, 2, 3, 4], \"value\": [100, 200, 300, 400]})\r\ndvc.add(\"training_data\", v3_df, \"Scaled values by 10x\")\r\n\r\nprint(\"\\nVersion history:\")\r\ndvc.log(\"training_data\")\r\n# Expected output:\r\n# v1: ... | Initial dataset | 3 rows | ...\r\n# v2: ... | Added new row | 4 rows | ...\r\n# v3: ... | Scaled values by 10x | 4 rows | ...\r\n\r\nreloaded = dvc.checkout(\"training_data\", 0)\r\nprint(reloaded)\r\n# Expected output:\r\n#    id  value\r\n# 0   1     10\r\n# 1   2     20\r\n# 2   3     30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider Netflix's recommendation system. Raw user interaction data (views, pauses, skips, searches) arrives as semi-structured JSON logs and is stored in S3 as a data lake. Netflix built a lakehouse using Apache Iceberg on top of S3 to provide ACID transactions, schema evolution, and time travel for ML training datasets."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The data is organized in three zones:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bronze"
        }), ": Raw JSON logs as-is"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Silver"
        }), ": Parsed, validated, and deduplicated events with schema enforcement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gold"
        }), ": Aggregated user features (watch time per genre, completion rate, binge patterns)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML teams access gold-level features for training recommendation models, while data scientists explore bronze data for new feature ideas. Before the lakehouse, separate pipelines fed the warehouse (for BI) and the lake (for ML), causing inconsistency. Now both workloads share the same data with consistent semantics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The lakehouse architecture unifies data lakes and warehouses by adding ACID transactions, schema enforcement, and versioning to cheap object storage. Star and snowflake schemas provide intuitive dimensional models for analytics. Data catalogs enable discovery and governance, while versioning tools like DVC and lakeFS bring software engineering best practices to data. Modern table formats (Delta Lake, Iceberg, Hudi) make the lakehouse production-ready for AI workloads by supporting concurrent reads and writes, time travel, and efficient upserts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a medallion architecture (bronze/silver/gold) for lakehouse deployments — separates raw, clean, and aggregated data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer star schemas over snowflake for BI tools; snowflake reduces redundancy but complicates queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register all datasets in a data catalog from day one — discovery becomes exponentially harder as teams grow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ML training datasets with DVC or lakeFS to enable experiment reproducibility and rollback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Delta Lake or Iceberg for any production lakehouse — ACID transactions prevent corruption from concurrent writes"
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
          children: "What is the key difference between schema-on-read (data lake) and schema-on-write (warehouse)?\r\na) Schema-on-read is faster for queries\r\nb) Schema-on-write enforces structure at write time, schema-on-read at read time\r\nc) Schema-on-read allows only Parquet files\r\nd) Schema-on-write stores data in object storage"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a star schema, which table contains the measurable metrics?\r\na) Dimension table\r\nb) Fact table\r\nc) Bridge table\r\nd) Lookup table"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What problem does the lakehouse architecture primarily solve?\r\na) Reducing storage costs\r\nb) Unifying batch and streaming processing\r\nc) Bringing ACID transactions and schema enforcement to data lakes\r\nd) Replacing Spark with SQL querying"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Delta Lake feature allows querying data as it existed at a previous point in time?\r\na) Schema enforcement\r\nb) Time travel\r\nc) Upsert\r\nd) Change data feed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of a data catalog?\r\na) Storing raw data files\r\nb) Managing metadata, discovery, and lineage of datasets\r\nc) Running ETL transformations\r\nd) Enforcing data retention policies"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Schema-on-write enforces structure at write time (warehouse); schema-on-read interprets structure at read time (lake)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Fact tables contain measurable metrics (amount, quantity, count). Dimension tables contain descriptive attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — The lakehouse brings ACID transactions, schema enforcement, and versioning to data lake storage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Time travel (versionAsOf option) queries historical snapshots of Delta tables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Data catalogs manage metadata, enable discovery, track lineage, and provide governance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-build-a-lakehouse-simulator",
      children: "Exercise 1: Build a Lakehouse Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a Python class that simulates bronze/silver/gold layers with pandas. Write functions for bronze ingestion, silver cleaning (drop nulls, dedup, type casting), and gold aggregation (groupby with mean/count)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-star-schema-design",
      children: "Exercise 2: Star Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given raw sales CSV with columns (sale_id, product_name, product_category, customer_name, customer_city, store_name, store_region, amount, quantity, sale_date), design and build a star schema. Create fact and dimension tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-delta-lake-merge-simulation",
      children: "Exercise 3: Delta Lake Merge Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement an upsert operation that merges new data into an existing table using a key column. Simulate the ACID transaction log by keeping versioned JSON manifests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-data-catalog-search",
      children: "Exercise 4: Data Catalog Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a basic search engine over a catalog of 100+ datasets (generate synthetic metadata). Support full-text search, tag filtering, and lineage graph traversal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-time-travel-query",
      children: "Exercise 5: Time Travel Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a data versioning system where each write creates a new version. Support querying data at any version using a timestamp or version number. Include a diff function showing what changed between versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data swamp without governance"
        }), ": Storing everything in a data lake without cataloging, naming conventions, or cleanup leads to unusable data. Always register datasets in a catalog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-normalization in warehouse"
        }), ": Snowflake schemas with 10+ levels of hierarchy make queries unreadable. Prefer star schemas with denormalized dimensions for analytical queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No partitioning strategy"
        }), ": Unpartitioned Delta/Iceberg tables cause full-table scans on every query. Partition by high-cardinality filter columns (date, region)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignoring small file problem"
        }), ": Streaming data written as small Parquet files creates read amplification. Run compaction jobs to merge files into optimal size (128-256 MB)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema evolution without testing"
        }), ": Adding columns is safe; renaming or changing types breaks downstream consumers. Use schema registry with compatibility checks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data lake: raw data, schema-on-read, cheap, no ACID, risk of data swamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data warehouse: structured, schema-on-write, expensive, ACID, fast analytics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lakehouse: lake flexibility + warehouse reliability via Delta/Iceberg/Hudi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medallion architecture: Bronze (raw) -> Silver (clean) -> Gold (aggregated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Star schema: 1 fact table + N dimension tables (denormalized)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Snowflake schema: dimensions normalized into sub-dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fact table: measures/events (sales, clicks). Dimension: attributes (product, customer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delta Lake features: ACID, time travel, schema enforcement, upsert/merge, CDC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apache Iceberg features: partition evolution, hidden partitioning, multi-engine support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data catalog: metadata mgmt, discovery, lineage, ownership, governance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data versioning: DVC (Git-like for data), lakeFS (branch/merge/rollback on data lakes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partitioning: divides data by column values for query pruning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compaction: merges small files into optimal size for read performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs-previous-year-questions",
      children: "PYQs (Previous Year Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-2024",
      children: "Google (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a unified storage architecture for YouTube's recommendation system. The system needs: (a) raw video metadata and user interaction logs, (b) structured features for ML training, (c) real-time feature access for inference, and (d) BI dashboards. Propose a lakehouse architecture with specific technologies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Use GCS as the object store with the medallion architecture. Bronze: raw Avro logs (video views, likes, shares). Silver: Spark jobs parse and validate data into Delta Lake format with schema enforcement. Gold: aggregated user/video features as Delta tables. ML training reads gold features via Spark; real-time inference reads from Bigtable (populated by streaming pipeline). BI uses BigQuery queries on gold Delta tables via BigQuery Omni."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amazon-2023",
      children: "Amazon (2023)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You need to migrate 200 TB of data from an on-premises data warehouse to a lakehouse on AWS. The data includes 5 years of sales transactions, customer profiles, and product catalogs. Design the migration strategy with minimal downtime."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Phase 1: Set up S3 data lake with DMS continuous CDC replication. Phase 2: Convert existing warehouse schema to Iceberg tables using Spark — partition by year/month. Phase 3: Set up AWS Glue catalog for metadata. Phase 4: Run dual-writes during cutover (30 days). Phase 5: Decommission old warehouse. Use Redshift Spectrum or Athena for queries during transition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meta-2024",
      children: "Meta (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facebook's ranking features are computed from Petabyte-scale raw event data. Currently, data scientists use Hive tables on the data lake, but face slow queries and no ACID. Migrate to a lakehouse. Address schema evolution, concurrent writes, and query performance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Migrate from Hive tables to Apache Iceberg format. Benefits: (1) schema evolution with add/drop/rename columns without rewriting data, (2) optimistic concurrency for concurrent job writes, (3) hidden partitioning for faster queries. Use Presto/Trino as query engine (already in Meta's stack). Implement compaction jobs to merge small files. Add Z-ordering on frequently filtered columns (user_id, date)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microsoft-2023",
      children: "Microsoft (2023)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a data cataloging strategy for a large enterprise with 10,000+ datasets across 200 teams. The catalog must support discovery, lineage, ownership, and governance for ML and BI workloads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Implement Apache Atlas or Microsoft Purview. Auto-register datasets from ADLS, Azure SQL, Synapse. Extract lineage from ADF pipelines and Databricks notebooks. Assign data owners automatically based on AD group membership. Implement data quality scoring. Provide search with faceted filtering (team, format, sensitivity). Enforce access control through Azure AD integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-compare-data-lake-warehouse-and-lakehouse-when-would-you-choose-each",
      children: "Q1: Compare data lake, warehouse, and lakehouse. When would you choose each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Data lake for raw storage and ML exploration (cheap, flexible). Warehouse for structured analytics and BI (fast, governed). Lakehouse when you need both — most modern AI systems use lakehouse to avoid silos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-medallion-architecture-bronzesilvergold",
      children: "Q2: Explain the medallion architecture (bronze/silver/gold)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Bronze stores raw ingested data as-is. Silver cleans, validates, and deduplicates data. Gold contains business-level aggregates and features. Each layer uses the same storage format (Delta/Iceberg) but progressively refined data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-delta-lake-provide-acid-transactions-on-blob-storage",
      children: "Q3: How does Delta Lake provide ACID transactions on blob storage?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Delta Lake maintains a transaction log (_delta_log/) as JSON files recording every change. Reads check the log for the latest version. Writes use optimistic concurrency control — if two writers conflict, one retries. This enables serializable isolation on S3/GCS/ADLS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-a-slowly-changing-dimension-scd-and-how-do-you-handle-type-2",
      children: "Q4: What is a slowly changing dimension (SCD) and how do you handle Type 2?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": SCD tracks changes to dimension attributes over time. Type 2 preserves history by creating new rows with a validity range (effective_date, end_date). Current record has end_date = NULL. Queries use date filters to get the correct dimension state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-design-a-star-schema-for-an-e-commerce-recommendation-system",
      children: "Q5: Design a star schema for an e-commerce recommendation system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Fact table: purchase_fact (purchase_id, user_id, product_id, store_id, date_id, amount, quantity). Dimensions: user_dim (demographics), product_dim (category, price, brand), store_dim (location, region), date_dim (year, quarter, month, day). Additional fact: click_fact for view events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-handle-schema-evolution-in-a-production-lakehouse",
      children: "Q6: How would you handle schema evolution in a production lakehouse?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Add columns as nullable. Never rename or drop columns without deprecation warnings. Use schema registry (Confluent/AVRO) for streaming. Iceberg supports partition evolution without rewriting. Test schema changes against downstream compatibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-partitioning-strategy-would-you-use-for-a-100-tb-event-table-with-queries-filtering-by-user_id-and-date",
      children: "Q7: What partitioning strategy would you use for a 100 TB event table with queries filtering by user_id and date?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Partition by date (daily/monthly) for time-range pruning, then use Z-ordering on user_id for locality within partitions. This minimizes scan size for common query patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-how-icebergs-hidden-partitioning-works",
      children: "Q8: Explain how Iceberg's hidden partitioning works."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Iceberg tracks partition values independently from data files. Users specify partition transforms (day(timestamp), bucket(user_id, 16)). Iceberg automatically routes data to partitions. Unlike Hive, changing partition specs doesn't require rewriting data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-data-catalogs-help-ml-teams",
      children: "Q9: How do data catalogs help ML teams?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Discovery (find relevant datasets), lineage (trace data origin through transformations), quality (data profiling scores), ownership (know who to contact), governance (sensitivity labels, access control), and versioning (track dataset changes over time)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-compare-dvc-vs-lakefs-for-data-versioning",
      children: "Q10: Compare DVC vs lakeFS for data versioning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": DVC is Git-based, stores data pointers in Git, actual data in remote storage. Good for ML experiments with small-to-medium datasets. lakeFS is a separate storage layer providing Git semantics (branch, merge, revert) directly on data lakes. Better for large-scale collaborative data engineering."]
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
        }), ": Data lake, warehouse, lakehouse, Delta Lake, Iceberg, star schema, dimensional modeling, data catalog, ACID, partitioning, medallion architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented lakehouse architecture processing 50TB of event data, reducing storage costs by 40% and enabling ML training on consistent data\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certifications"
        }), ": Databricks Lakehouse, AWS Data Analytics, GCP Data Engineer"]
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
        }), " Draw medallion architecture from memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain star vs snowflake with a concrete e-commerce example"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Describe Delta Lake transaction log mechanism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Compare Iceberg vs Delta Lake vs Hudi"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know partitioning strategies for common query patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " 02 — Data Lakehouse & Warehouse builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 02 — Data Lakehouse & Warehouse before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 02 — Data Lakehouse & Warehouse is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 02 — Data Lakehouse & Warehouse in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 02 — Data Lakehouse & Warehouse chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 02 — Data Lakehouse & Warehouse is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 02 Data Lakehouse Warehouse is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 02 Data Lakehouse Warehouse is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 02 — Data Lakehouse & Warehouse issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 02 — Data Lakehouse & Warehouse in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 02 — Data Lakehouse & Warehouse that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Data Lakehouse & Warehouse is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 02 — Data Lakehouse & Warehouse in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 02 — Data Lakehouse & Warehouse and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Data Lakehouse & Warehouse on an empty input?"
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
      }), ": Chapter 01 (ETL), SQL"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of 02 — Data Lakehouse & Warehouse from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 02 — Data Lakehouse & Warehouse when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 02 — Data Lakehouse & Warehouse twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 02 — Data Lakehouse & Warehouse snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 02 — Data Lakehouse & Warehouse listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 02 — Data Lakehouse & Warehouse to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 02 — Data Lakehouse & Warehouse by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 02 — Data Lakehouse & Warehouse to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The Data Warehouse Toolkit\" by Ralph Kimball"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delta Lake documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.delta.io/",
          children: "https://docs.delta.io/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apache Iceberg spec: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://iceberg.apache.org/spec/",
          children: "https://iceberg.apache.org/spec/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Lakehouse: A New Generation of Open Platforms\" (CIDR 2021 paper)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 25 — builds the foundation for 02 Data Lakehouse Warehouse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 02 Data Lakehouse Warehouse with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 02 Data Lakehouse Warehouse fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 02 Data Lakehouse Warehouse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 02 Data Lakehouse Warehouse"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 02 Data Lakehouse Warehouse?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 02 Data Lakehouse Warehouse?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 02 Data Lakehouse Warehouse asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 02 Data Lakehouse Warehouse?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "02 — Data Lakehouse & Warehouse is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 02 — Data Lakehouse & Warehouse."
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
        children: "02 — Data Lakehouse & Warehouse emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 02 — Data Lakehouse & Warehouse today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 02 — Data Lakehouse & Warehouse — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 02 — Data Lakehouse & Warehouse changes quickly; focus on fundamentals that remain stable."
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
            children: "02 Data Lakehouse Warehouse is like a GPS navigation system"
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
          }), " — this chapter contributes the 02 — Data Lakehouse & Warehouse skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-02datalakehousewarehouse-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 02 — Data Lakehouse & Warehouse in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-02datalakehousewarehouse-flash2",
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
      "data-qid": "25dataengineering-02datalakehousewarehouse-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 02 — Data Lakehouse & Warehouse approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-02datalakehousewarehouse-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 02 — Data Lakehouse & Warehouse NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-02datalakehousewarehouse-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 02 — Data Lakehouse & Warehouse applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 02 — Data Lakehouse & Warehouse (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 02 — Data Lakehouse & Warehouse (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 02 — Data Lakehouse & Warehouse-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 02 — Data Lakehouse & Warehouse in production at scale"
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
        children: "cProfile / py-spy for performance profiling — Data Lakehouse & Warehouse"
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
        }), ": Add structured logging at each stage of the 02 Data Lakehouse Warehouse pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 02 — Data Lakehouse & Warehouse in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 02 — Data Lakehouse & Warehouse."
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
        children: "Tell me about a time you debugged a 02 — Data Lakehouse & Warehouse problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 02 — Data Lakehouse & Warehouse is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_02_data_lakehouse_warehouse(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 02 Data Lakehouse Warehouse.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 02 Data Lakehouse Warehouse here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
        children: "Armbrust, M. et al. (2021). Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics. CIDR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kimball, R., & Ross, M. (2013). The Data Warehouse Toolkit."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apache Iceberg Documentation. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://iceberg.apache.org/",
          children: "https://iceberg.apache.org/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delta Lake Documentation. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.delta.io/",
          children: "https://docs.delta.io/"
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
            children: "Explain 02 — Data Lakehouse & Warehouse without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/25-data-engineering/03-apache-spark-basics",
        children: "03 — Apache Spark Basics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "02 — Data Lakehouse & Warehouse, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 02 — Data Lakehouse & Warehouse depends on input size and distribution — always benchmark for your own data."
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