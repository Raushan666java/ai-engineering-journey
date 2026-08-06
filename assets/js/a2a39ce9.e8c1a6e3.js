"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30052],{

/***/ 31382
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_big_data_05_ecosystem_md_a2a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-big-data-05-ecosystem-md-a2a.json
const site_docs_courses_big_data_05_ecosystem_md_a2a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/big-data/05-ecosystem","title":"Chapter 5: Big Data Ecosystem Tools","description":"Previous Spark MLlib | Next: None (Last Chapter)","source":"@site/docs/courses/big-data/05-ecosystem.md","sourceDirName":"courses/big-data","slug":"/big-data/05-ecosystem","permalink":"/ai-engineering-journey/big-data/05-ecosystem","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-ecosystem","slug":"/big-data/05-ecosystem","title":"Chapter 5: Big Data Ecosystem Tools","sidebar_label":"Chapter 5: Big Data Ecosystem Tools","sidebar_position":5},"sidebar":"coursesSidebar","previous":{"title":"Chapter 4: Spark MLlib","permalink":"/ai-engineering-journey/big-data/04-spark-mllib"},"next":{"title":"Computer Organisation & Architecture — IBPS SO & Govt Exam Prep","permalink":"/ai-engineering-journey/computer-architecture/index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/big-data/05-ecosystem.md


const frontMatter = {
	id: '05-ecosystem',
	slug: '/big-data/05-ecosystem',
	title: 'Chapter 5: Big Data Ecosystem Tools',
	sidebar_label: 'Chapter 5: Big Data Ecosystem Tools',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Big Data Ecosystem Tools';

const assets = {

};

/*End Image Gallery*/


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
  "value": "5.1 Hive ? SQL-on-Hadoop",
  "id": "51-hive--sql-on-hadoop",
  "level": 2
}, {
  "value": "5.1.1 Hive Architecture",
  "id": "511-hive-architecture",
  "level": 3
}, {
  "value": "5.1.2 Hive vs Spark SQL vs Presto",
  "id": "512-hive-vs-spark-sql-vs-presto",
  "level": 3
}, {
  "value": "5.2 HBase ? Column-Family NoSQL",
  "id": "52-hbase--column-family-nosql",
  "level": 2
}, {
  "value": "5.2.1 HBase Data Model",
  "id": "521-hbase-data-model",
  "level": 3
}, {
  "value": "5.2.2 HBase Operations",
  "id": "522-hbase-operations",
  "level": 3
}, {
  "value": "5.2.3 HBase Row Key Design",
  "id": "523-hbase-row-key-design",
  "level": 3
}, {
  "value": "5.3 Apache Kafka",
  "id": "53-apache-kafka",
  "level": 2
}, {
  "value": "5.3.1 Kafka Core Concepts",
  "id": "531-kafka-core-concepts",
  "level": 3
}, {
  "value": "5.3.2 Kafka CLI",
  "id": "532-kafka-cli",
  "level": 3
}, {
  "value": "5.3.3 Kafka with Python",
  "id": "533-kafka-with-python",
  "level": 3
}, {
  "value": "5.3.4 Kafka + Spark Streaming",
  "id": "534-kafka--spark-streaming",
  "level": 3
}, {
  "value": "5.4 Data Serialization Formats",
  "id": "54-data-serialization-formats",
  "level": 2
}, {
  "value": "5.4.1 Parquet (Analytics)",
  "id": "541-parquet-analytics",
  "level": 3
}, {
  "value": "5.4.2 Avro (Serialization)",
  "id": "542-avro-serialization",
  "level": 3
}, {
  "value": "5.5 Cloud-Native Alternatives",
  "id": "55-cloud-native-alternatives",
  "level": 2
}, {
  "value": "5.6 When to Use Each Tool",
  "id": "56-when-to-use-each-tool",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Cloud Migration Decision Guide",
  "id": "cloud-migration-decision-guide",
  "level": 3
}, {
  "value": "5.7 Ecosystem Architecture Overview",
  "id": "57-ecosystem-architecture-overview",
  "level": 2
}, {
  "value": "5.8 Hive Query Execution Flow",
  "id": "58-hive-query-execution-flow",
  "level": 2
}, {
  "value": "5.9 Kafka Producer-Consumer TypeScript Simulator",
  "id": "59-kafka-producer-consumer-typescript-simulator",
  "level": 2
}, {
  "value": "Kafka + Spark Streaming Data Flow",
  "id": "kafka--spark-streaming-data-flow",
  "level": 3
}, {
  "value": "5.10 HBase Column-Family TypeScript Simulator",
  "id": "510-hbase-column-family-typescript-simulator",
  "level": 2
}, {
  "value": "Row Key Design Comparison",
  "id": "row-key-design-comparison",
  "level": 3
}, {
  "value": "5.11 Data Format Benchmark Simulator",
  "id": "511-data-format-benchmark-simulator",
  "level": 2
}, {
  "value": "5.12 Cloud Migration Strategy Flow",
  "id": "512-cloud-migration-strategy-flow",
  "level": 2
}, {
  "value": "TypeScript: Kafka Consumer Group Balancer &amp; HBase Schema Designer",
  "id": "typescript-kafka-consumer-group-balancer--hbase-schema-designer",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "chapter-5-big-data-ecosystem-tools",
        children: "Chapter 5: Big Data Ecosystem Tools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/big-data/04-spark-mllib",
          children: "Chapter 4: Spark MLlib"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None (Last Chapter)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe Hive, HBase, Kafka, and their roles in the ecosystem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between SQL-on-Hadoop tools (Hive vs Presto vs Spark SQL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain when to use column-family stores (HBase) vs columnar formats (Parquet)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up and use Kafka for streaming data ingestion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare legacy Hadoop tools with modern cloud-native alternatives"
      }), "\n"]
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
        href: "../../assets/images/lessons/big-data/05-ecosystem/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/big-data/05-ecosystem/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/big-data/05-ecosystem/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/big-data/05-ecosystem/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/big-data/05-ecosystem/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/big-data/05-ecosystem/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hive ? SQL-on-Hadoop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates HiveQL into MapReduce/Tez jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Being replaced by Spark SQL and Presto for most use cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase ? Column-Family NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency random read/write on HDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row key design is critical ? avoid monotonically increasing keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed streaming platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The de-facto standard for data ingestion and event-driven architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet for analytics, Avro for streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing the right format is a 10x performance decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-Native Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 + Spark + Kafka MSK replaces Hadoop ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn concepts, not specific tools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Hive SQL-on-Hadoop] --> B[HBase NoSQL]\n    B --> C[Apache Kafka]\n    C --> D[Data Serialization Formats]\n    D --> E[Cloud-Native Alternatives]\n    E --> F[Tool Selection Guide]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/big-data/ch05-ecosystem.png",
        alt: "Hadoop Ecosystem"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-hive--sql-on-hadoop",
      children: "5.1 Hive ? SQL-on-Hadoop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Hive provides a SQL interface to data stored in HDFS. It translates HiveQL queries into MapReduce (or Tez/Spark) jobs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-hive-architecture",
      children: "5.1.1 Hive Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create a Hive table backed by HDFS\nCREATE EXTERNAL TABLE logs (\n    log_ts TIMESTAMP,\n    level STRING,\n    message STRING\n)\nROW FORMAT DELIMITED\nFIELDS TERMINATED BY \",\"\nLOCATION \"/data/logs/\";\n\n-- Query (translated to MapReduce/Tez)\nSELECT level, count(*) as cnt\nFROM logs\nWHERE log_ts >= \"2026-01-01\"\nGROUP BY level\nORDER BY cnt DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-hive-vs-spark-sql-vs-presto",
      children: "5.1.2 Hive vs Spark SQL vs Presto"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spark SQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Presto/Trino"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MapReduce/Tez"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom MPP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDFs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java/Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python/SQL/Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Transactions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch ETL, legacy pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified batch+ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc interactive queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Hive provides SQL access to HDFS data but is being outpaced by Spark SQL (for batch) and Presto/Trino (for interactive queries) ? choose the engine based on latency requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-hbase--column-family-nosql",
      children: "5.2 HBase ? Column-Family NoSQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache HBase is a distributed, column-oriented NoSQL database modeled after Google Bigtable. It runs on top of HDFS."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-hbase-data-model",
      children: "5.2.1 HBase Data Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Table: events\nRow Key         | Column Family: meta          | Column Family: payload\n----------------|------------------------------|------------------------------\nuser_001_ts_abc | meta:user_id = \"001\"         | payload:event_type = \"click\"\n                | meta:timestamp = 1700000000  | payload:page_url = \"/home\"\n\nuser_001_ts_abd | meta:user_id = \"001\"         | payload:event_type = \"purchase\"\n                | meta:timestamp = 1700000005  | payload:amount = 29.99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-hbase-operations",
      children: "5.2.2 HBase Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# HBase shell\nhbase shell\n\n# Create table\ncreate \"events\", \"meta\", \"payload\"\n\n# Insert\nput \"events\", \"row1\", \"meta:user_id\", \"001\"\nput \"events\", \"row1\", \"payload:event_type\", \"click\"\n\n# Scan with filter\nscan \"events\", {LIMIT => 10}\n\n# Get single row\nget \"events\", \"row1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-hbase-row-key-design",
      children: "5.2.3 HBase Row Key Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Row key design is critical for performance. Monotonically increasing keys cause hot spotting on a single region server."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\n\n# Bad: timestamp prefix causes hot spotting\nbad_key = f\"2026-06-12T10:30:00_user_001\"\n\n# Good: salted key distributes writes\nsalt = hashlib.md5(b\"user_001\").hexdigest()[:2]\ngood_key = f\"{salt}_2026-06-12T10:30:00_user_001\"\nprint(f\"Bad: {bad_key}\")\nprint(f\"Good: {good_key}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Row key design is the #1 cause of HBase performance problems in production. Monotonically increasing keys (like timestamps) create hot spots on a single region server. Always salt or hash the key prefix to distribute write load across all region servers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " HBase offers low-latency random access on HDFS, but row key design (salted, not monotonically increasing) determines whether it performs well or collapses under load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-apache-kafka",
      children: "5.3 Apache Kafka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-kafka-core-concepts",
      children: "5.3.1 Kafka Core Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A category/feed name to which records are published"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A topic is split into ordered, immutable sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Kafka server that stores data and serves clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Producer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishes records to a topic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscribes to topics and processes records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer Group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple consumers that divide partitions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-kafka-cli",
      children: "5.3.2 Kafka CLI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Start Kafka (with ZooKeeper)\nbin/zookeeper-server-start.sh config/zookeeper.properties\nbin/kafka-server-start.sh config/server.properties\n\n# Create a topic\nbin/kafka-topics.sh --create \\\n  --topic events \\\n  --partitions 10 \\\n  --replication-factor 3 \\\n  --bootstrap-server localhost:9092\n\n# Produce messages\nbin/kafka-console-producer.sh \\\n  --topic events \\\n  --bootstrap-server localhost:9092\n\n# Consume messages\nbin/kafka-console-consumer.sh \\\n  --topic events \\\n  --from-beginning \\\n  --bootstrap-server localhost:9092\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-kafka-with-python",
      children: "5.3.3 Kafka with Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from kafka import KafkaProducer, KafkaConsumer\nimport json\n\n# Producer\nproducer = KafkaProducer(\n    bootstrap_servers=[\"localhost:9092\"],\n    value_serializer=lambda v: json.dumps(v).encode()\n)\n\nfor i in range(100):\n    producer.send(\"events\", {\"id\": i, \"value\": i * 2})\nproducer.flush()\n\n# Consumer (with auto-commit)\nconsumer = KafkaConsumer(\n    \"events\",\n    bootstrap_servers=[\"localhost:9092\"],\n    auto_offset_reset=\"earliest\",\n    group_id=\"my-group\",\n    value_deserializer=lambda v: json.loads(v.decode())\n)\n\nfor message in consumer:\n    print(f\"Partition: {message.partition}, Offset: {message.offset}, Value: {message.value}\")\n    if message.offset >= 10:\n        break\n\nconsumer.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "534-kafka--spark-streaming",
      children: "5.3.4 Kafka + Spark Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\nfrom pyspark.sql.functions import from_json, col\nfrom pyspark.sql.types import StructType, StringType, IntegerType\n\nspark = SparkSession.builder \\\n    .appName(\"kafka-streaming\") \\\n    .config(\"spark.sql.streaming.checkpointLocation\", \"/tmp/checkpoint\") \\\n    .getOrCreate()\n\nschema = StructType() \\\n    .add(\"id\", IntegerType()) \\\n    .add(\"value\", IntegerType())\n\ndf = spark \\\n    .readStream \\\n    .format(\"kafka\") \\\n    .option(\"kafka.bootstrap.servers\", \"localhost:9092\") \\\n    .option(\"subscribe\", \"events\") \\\n    .load()\n\nparsed = df.select(from_json(col(\"value\").cast(\"string\"), schema).alias(\"data\")) \\\n    .select(\"data.*\")\n\nquery = parsed.writeStream \\\n    .outputMode(\"append\") \\\n    .format(\"console\") \\\n    .trigger(processingTime=\"5 seconds\") \\\n    .start()\n\nquery.awaitTermination()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For Kafka consumers, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto_offset_reset"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"earliest\""
        }), " in development (to replay all data) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"latest\""
        }), " in production (to avoid reprocessing old messages). Always set a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "group_id"
        }), " ? it's what enables checkpoint-based recovery after a consumer restart."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Kafka is the industry standard for streaming data ingestion, providing durable, ordered, partitioned message queues that integrate natively with Spark Streaming for real-time processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-data-serialization-formats",
      children: "5.4 Data Serialization Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-parquet-analytics",
      children: "5.4.1 Parquet (Analytics)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Columnar storage with predicate pushdown and schema enforcement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Spark reads only the columns and row groups needed\ndf = spark.read.parquet(\"data/*.parquet\")\ndf.filter(df.year == 2026).select(\"month\", \"revenue\").show()\n# Parquet's min/max stats skip irrelevant row groups\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-avro-serialization",
      children: "5.4.2 Avro (Serialization)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Row-oriented format with embedded schema, ideal for Kafka and streaming."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import fastavro\n\nschema = {\n    \"type\": \"record\",\n    \"name\": \"Event\",\n    \"fields\": [\n        {\"name\": \"id\", \"type\": \"int\"},\n        {\"name\": \"timestamp\", \"type\": \"long\"},\n        {\"name\": \"payload\", \"type\": \"string\"}\n    ]\n}\n\nrecords = [\n    {\"id\": 1, \"timestamp\": 1700000000, \"payload\": \"login\"},\n    {\"id\": 2, \"timestamp\": 1700000001, \"payload\": \"click\"},\n]\n\nwith open(\"events.avro\", \"wb\") as f:\n    fastavro.writer(f, schema, records)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-cloud-native-alternatives",
      children: "5.5 Cloud-Native Alternatives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hadoop Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Alternative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 / GCS / Azure Blob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-GB, infinite scale, 11 9's durability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MapReduce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMR / Dataproc / HDInsight (Spark)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-100x faster, SQL API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Athena / BigQuery / Redshift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless, zero ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB / Bigtable / Cosmos DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed, auto-scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSK / Confluent Cloud / PubSub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed brokers, no ZooKeeper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oozie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airflow / Dagster / Prefect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern DAGs, Python-native"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-when-to-use-each-tool",
      children: "5.6 When to Use Each Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "decision = {\n    \"Need interactive SQL on data lake\": \"Presto / Trino\",\n    \"Need batch ETL with ML\": \"Spark\",\n    \"Need real-time stream processing\": \"Spark Streaming / Flink\",\n    \"Need low-latency key-value lookup\": \"HBase / DynamoDB / Bigtable\",\n    \"Need reliable message queue\": \"Kafka\",\n    \"Need data warehouse with ACID\": \"Hive (ACID) / Snowflake / Redshift\",\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The right tool depends on the workload pattern ? there is no one-size-fits-all in the big data ecosystem. Interactive SQL needs Presto, batch ETL needs Spark, streaming needs Kafka/Flink, and low-latency KV stores need HBase/DynamoDB."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL-on-Hadoop with MapReduce/Tez engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch-oriented, ACID support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy ETL pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-family NoSQL on HDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random read/write, low latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time lookups, time-series"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed streaming platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durable, ordered message log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event ingestion, streaming pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar storage format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema embedded, predicate pushdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytical queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Avro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-oriented serialization format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema embedded in each file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka messages, streaming data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presto/Trino"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed SQL query engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPP architecture, sub-second latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive ad-hoc queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL-on-Hadoop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hive, Spark SQL, Presto/Trino"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hive for batch, Presto for interactive, Spark for unified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NoSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBase, Cassandra, DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBase on HDFS; Cassandra for multi-DC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka, Spark Streaming, Flink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka for transport; Flink = true streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Formats"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet (analytics), Avro (streaming), ORC (Hive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never CSV/JSON for production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 ? HDFS, EMR ? MapReduce, Athena ? Hive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Hadoop tool has a cloud-native equivalent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Business Analytics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hive SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch ELT transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature extraction queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Athena/Glue ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time event storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature store serving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB/Bigtable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User profile lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event data pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online feature computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSK/Confluent Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet/Avro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized ETL output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3/Data Lake storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BI data format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka + Spark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time feature engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 + EMR pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SageMaker + EMR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud data mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redshift/BigQuery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is Parquet preferred over CSV for analytical workloads in big data?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Parquet is human-readable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Parquet stores data column-wise with predicate pushdown and schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Parquet is faster to write than CSV"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Parquet supports ACID transactions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Parquet stores data column-wise with predicate pushdown and schema.** Columnar storage allows query engines to read only the needed columns and skip irrelevant row groups based on statistics, dramatically reducing I/O.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary role of ZooKeeper in a Kafka cluster?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To store messages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To manage cluster metadata, leader election, and consumer group coordination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To compress message data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To provide SQL access to Kafka topics"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To manage cluster metadata, leader election, and consumer group coordination.** ZooKeeper maintains the cluster state, tracks broker membership, and manages partition leader elections (though newer Kafka versions use KRaft instead).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What makes HBase row key design critical for performance?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Row keys are encrypted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Monotonically increasing keys cause hot spotting on a single region server"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Row keys must be exactly 16 bytes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Row keys cannot contain numbers"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Monotonically increasing keys cause hot spotting on a single region server.** Sequential keys (like timestamps) route all writes to one region, creating a bottleneck. Salting or hashing the key prefix distributes writes across all region servers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When NOT to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy batch ETL on HDFS, ACID requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive queries, ML workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency KV lookups, time-series (salted keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-table scans, complex joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event ingestion, streaming pipeline, decoupling microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple point-to-point messaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spark SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified batch + streaming + ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure SQL (use Presto), low-latency KV (use HBase/DynamoDB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presto/Trino"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive ad-hoc SQL on data lake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy ETL, long-running batch jobs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-migration-decision-guide",
      children: "Cloud Migration Decision Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start small:"
        }), " Migrate one pipeline at a time (Hive ? Spark SQL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage first:"
        }), " Move HDFS to S3/GCS (retain data format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute second:"
        }), " Replace MapReduce with Spark (EMR/Dataproc)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streaming:"
        }), " Keep Kafka or use managed MSK/Confluent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQL layer:"
        }), " Replace Hive with Athena/Presto for interactive queries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-ecosystem-architecture-overview",
      children: "5.7 Ecosystem Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Ingestion[\"Data Ingestion\"]\n        K[Kafka<br>Streaming Events]\n        F[Flume / Sqoop<br>Batch Import]\n    end\n    subgraph Storage[\"Data Storage\"]\n        HDFS[HDFS<br>Distributed FS]\n        S3[S3 / GCS<br>Cloud Object Store]\n        HB[HBase<br>Column-Family NoSQL]\n    end\n    subgraph Processing[\"Data Processing\"]\n        SP[Spark<br>Batch + Streaming + ML]\n        MR[MapReduce<br>Legacy Batch]\n        HIVE[Hive<br>SQL-on-Hadoop]\n        PRESTO[Presto / Trino<br>Interactive SQL]\n    end\n    subgraph Formats[\"Serialization Formats\"]\n        PARQ[Parquet<br>Columnar Analytics]\n        AVRO[Avro<br>Row-Oriented Streaming]\n        ORC[ORC<br>Hive Optimized]\n    end\n    subgraph Orchestration[\"Orchestration & Scheduling\"]\n        OOZIE[Oozie<br>Legacy DAG Scheduler]\n        AIR[Airflow<br>Modern DAG Orchestrator]\n        YARN[YARN<br>Resource Manager]\n    end\n    Ingestion --> Storage\n    Storage --> Formats\n    Formats --> Processing\n    Processing --> Orchestration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-hive-query-execution-flow",
      children: "5.8 Hive Query Execution Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[HiveQL Query] --> B[Parser<br>AST Generation]\n    B --> C[Semantic Analyzer<br>Schema Validation]\n    C --> D[Logical Plan<br>Operator Tree]\n    D --> E[Optimizer<br>Predicate Pushdown]\n    E --> F[Physical Plan<br>MapReduce / Tez]\n    F --> G[Execution Engine]\n    G --> H1[Map Phase<br>Filter + Project]\n    G --> H2[Reduce Phase<br>Aggregate + Sort]\n    H1 & H2 --> I[HDFS Output]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "59-kafka-producer-consumer-typescript-simulator",
      children: "5.9 Kafka Producer-Consumer TypeScript Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Kafka Topic & Partition Simulator ---------------------\n\ninterface KafkaMessage {\n  key: string;\n  value: unknown;\n  partition: number;\n  offset: number;\n  timestamp: number;\n}\n\nclass TopicPartition {\n  private messages: KafkaMessage[] = [];\n  private currentOffset = 0;\n\n  constructor(readonly id: number) {}\n\n  append(key: string, value: unknown): KafkaMessage {\n    const msg: KafkaMessage = {\n      key,\n      value,\n      partition: this.id,\n      offset: this.currentOffset++,\n      timestamp: Date.now(),\n    };\n    this.messages.push(msg);\n    return msg;\n  }\n\n  read(fromOffset: number, maxCount: number): KafkaMessage[] {\n    return this.messages.slice(fromOffset, fromOffset + maxCount);\n  }\n\n  get endOffset() { return this.messages.length; }\n}\n\nclass KafkaTopic {\n  private partitions: TopicPartition[] = [];\n\n  constructor(readonly name: string, numPartitions: number) {\n    for (let i = 0; i < numPartitions; i++) {\n      this.partitions.push(new TopicPartition(i));\n    }\n  }\n\n  getPartition(key: string): TopicPartition {\n    const hash = [...key].reduce((h, c) => h * 31 + c.charCodeAt(0), 0);\n    return this.partitions[Math.abs(hash) % this.partitions.length];\n  }\n\n  produce(key: string, value: unknown): KafkaMessage {\n    const part = this.getPartition(key);\n    return part.append(key, value);\n  }\n\n  getPartitions() { return this.partitions; }\n}\n\n// --- Kafka Producer ----------------------------------------\n\nclass KafkaProducer {\n  constructor(private topic: KafkaTopic) {}\n\n  send(key: string, value: unknown): KafkaMessage {\n    const msg = this.topic.produce(key, value);\n    console.log(`Produced [p${msg.partition}@o${msg.offset}]: ${JSON.stringify(value)}`);\n    return msg;\n  }\n\n  sendBatch(records: { key: string; value: unknown }[]): KafkaMessage[] {\n    return records.map(r => this.send(r.key, r.value));\n  }\n}\n\n// --- Kafka Consumer ----------------------------------------\n\nclass KafkaConsumer {\n  private offsets: number[] = [];\n  private groupId: string;\n\n  constructor(private topic: KafkaTopic, groupId: string) {\n    this.offsets = topic.getPartitions().map(() => 0);\n    this.groupId = groupId;\n  }\n\n  poll(maxMessages = 10): KafkaMessage[] {\n    const messages: KafkaMessage[] = [];\n    for (const [i, part] of this.topic.getPartitions().entries()) {\n      const batch = part.read(this.offsets[i], maxMessages);\n      messages.push(...batch);\n      this.offsets[i] += batch.length;\n    }\n    return messages.sort((a, b) => a.timestamp - b.timestamp).slice(0, maxMessages);\n  }\n\n  commit() {\n    console.log(`[${this.groupId}] Committed offsets: ${this.offsets}`);\n  }\n\n  seek(partition: number, offset: number) {\n    this.offsets[partition] = offset;\n  }\n}\n\n// --- Demo --------------------------------------------------\n\nconst topic = new KafkaTopic(\"events\", 3);\nconst producer = new KafkaProducer(topic);\n\nproducer.sendBatch([\n  { key: \"user_001\", value: { event: \"page_view\", page: \"/home\" } },\n  { key: \"user_002\", value: { event: \"purchase\", amount: 29.99 } },\n  { key: \"user_001\", value: { event: \"click\", element: \"signup\" } },\n  { key: \"user_003\", value: { event: \"login\" } },\n  { key: \"user_002\", value: { event: \"logout\" } },\n]);\n\nconst consumer = new KafkaConsumer(topic, \"analytics-group\");\nconst batch = consumer.poll(10);\nconsole.log(`\\nConsumer got ${batch.length} messages:`);\nbatch.forEach(m => {\n  console.log(`  [p${m.partition}@o${m.offset}] ${JSON.stringify(m.value)}`);\n});\nconsumer.commit();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kafka--spark-streaming-data-flow",
      children: "Kafka + Spark Streaming Data Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Producers[\"Producers\"]\n        P1[Web App]\n        P2[Mobile App]\n        P3[IoT Devices]\n    end\n    subgraph Kafka[\"Kafka Cluster\"]\n        B1[Broker 1]\n        B2[Broker 2]\n        B3[Broker 3]\n        T[Topic: events<br>6 Partitions x 3 Replicas]\n    end\n    subgraph Spark[\"Spark Streaming\"]\n        S[Structured Stream]\n        W[Windowed Aggregation<br>5 min tumbling]\n        SINK[(Parquet Output<br>S3 / HDFS)]\n    end\n    P1 & P2 & P3 --> T\n    T --> B1 & B2 & B3\n    B1 & B2 & B3 --> S\n    S --> W --> SINK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "510-hbase-column-family-typescript-simulator",
      children: "5.10 HBase Column-Family TypeScript Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- HBase Column-Family Store Simulator -------------------\n\ntype ColumnFamily = Map<string, unknown>;\ntype HBaseRow = Map<string, ColumnFamily>;\n\nclass HBaseTable {\n  private rows = new Map<string, HBaseRow>();\n\n  constructor(\n    readonly tableName: string,\n    readonly columnFamilies: string[]\n  ) {}\n\n  // Row key design: salted prefix to avoid hot spotting\n  static saltKey(key: string, saltChars = 2): string {\n    let hash = 0;\n    for (const ch of key) hash = hash * 31 + ch.charCodeAt(0);\n    const salt = Math.abs(hash % 256).toString(16).padStart(saltChars, \"0\");\n    return `${salt}_${key}`;\n  }\n\n  put(rowKey: string, family: string, qualifier: string, value: unknown) {\n    if (!this.columnFamilies.includes(family)) {\n      throw new Error(`Column family '${family}' not in table schema`);\n    }\n    const saltedKey = HBaseTable.saltKey(rowKey);\n    if (!this.rows.has(saltedKey)) {\n      this.rows.set(saltedKey, new Map());\n    }\n    const row = this.rows.get(saltedKey)!;\n    if (!row.has(family)) row.set(family, new Map());\n    const cf = row.get(family)! as Map<string, unknown>;\n    cf.set(qualifier, value);\n    console.log(`Put: ${saltedKey} | ${family}:${qualifier} = ${JSON.stringify(value)}`);\n  }\n\n  get(rowKey: string, family?: string, qualifier?: string): unknown {\n    const saltedKey = HBaseTable.saltKey(rowKey);\n    const row = this.rows.get(saltedKey);\n    if (!row) return null;\n\n    if (!family) {\n      // Return all families\n      const result: Record<string, Record<string, unknown>> = {};\n      for (const [cfName, cf] of row) {\n        result[cfName] = Object.fromEntries(cf);\n      }\n      return result;\n    }\n\n    const cf = row.get(family);\n    if (!cf) return null;\n\n    if (!qualifier) return Object.fromEntries(cf);\n    return (cf as Map<string, unknown>).get(qualifier) ?? null;\n  }\n\n  scan(limit = 10): { rowKey: string; data: Record<string, Record<string, unknown>> }[] {\n    const results: { rowKey: string; data: Record<string, Record<string, unknown>> }[] = [];\n    for (const [saltedKey, row] of this.rows) {\n      if (results.length >= limit) break;\n      const data: Record<string, Record<string, unknown>> = {};\n      for (const [cfName, cf] of row) {\n        data[cfName] = Object.fromEntries(cf);\n      }\n      results.push({ rowKey: saltedKey, data });\n    }\n    return results;\n  }\n\n  get stats() {\n    return {\n      table: this.tableName,\n      rowCount: this.rows.size,\n      columnFamilies: this.columnFamilies,\n    };\n  }\n}\n\n// --- Demo --------------------------------------------------\n\nconst events = new HBaseTable(\"events\", [\"meta\", \"payload\"]);\n\n// Timestamp-based keys (with salt to distribute writes)\nconst t1 = \"2026-06-24T10:00:00Z\";\nconst t2 = \"2026-06-24T10:00:01Z\";\n\nevents.put(\"sensor_001\", \"meta\", \"timestamp\", t1);\nevents.put(\"sensor_001\", \"payload\", \"temperature\", 22.5);\nevents.put(\"sensor_001\", \"payload\", \"humidity\", 65);\n\nevents.put(\"sensor_002\", \"meta\", \"timestamp\", t2);\nevents.put(\"sensor_002\", \"payload\", \"temperature\", 18.3);\nevents.put(\"sensor_002\", \"payload\", \"pressure\", 1013);\n\nconsole.log(\"\\nRow scan:\", JSON.stringify(events.scan(), null, 2));\nconsole.log(\"\\nSingle get:\", events.get(\"sensor_001\", \"payload\", \"temperature\"));\nconsole.log(\"\\nTable stats:\", events.stats);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "row-key-design-comparison",
      children: "Row Key Design Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function simulateWriteDistribution(numWrites: number): void {\n  const badKeys = new Map<string, number>();\n  const goodKeys = new Map<string, number>();\n\n  for (let i = 0; i < numWrites; i++) {\n    const ts = new Date(Date.now() + i * 1000).toISOString();\n    const userId = `user_${String(i % 100).padStart(3, \"0\")}`;\n\n    // Bad: timestamp prefix\n    const badKey = `${ts}_${userId}`;\n    badKeys.set(\"single-region\", (badKeys.get(\"single-region\") ?? 0) + 1);\n\n    // Good: salted prefix\n    const salt = HBaseTable.saltKey(userId);\n    const goodKey = `${salt}_${ts}_${userId}`;\n    const region = salt.split(\"_\")[0];\n    goodKeys.set(region, (goodKeys.get(region) ?? 0) + 1);\n  }\n\n  console.log(\"Bad key design (timestamp prefix):\");\n  console.log(`  All writes to 1 region: ${badKeys.get(\"single-region\")}`);\n\n  console.log(\"Good key design (salted prefix):\");\n  console.log(`  Writes distributed across ${goodKeys.size} regions:`);\n  for (const [region, count] of goodKeys) {\n    console.log(`    Region ${region}: ${count} writes`);\n  }\n}\n\nsimulateWriteDistribution(1000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "511-data-format-benchmark-simulator",
      children: "5.11 Data Format Benchmark Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FormatBenchmark {\n  name: string;\n  readTimeMs: number;\n  storageGB: number;\n  supportsPredicatePushdown: boolean;\n  supportsSchema: boolean;\n}\n\nfunction benchmarkFormats(dataSizeGB: number, selectColumns: number, totalColumns: number): FormatBenchmark[] {\n  const formats: FormatBenchmark[] = [\n    {\n      name: \"CSV\",\n      readTimeMs: dataSizeGB * 1200,  // reads all columns, no pushdown\n      storageGB: dataSizeGB,\n      supportsPredicatePushdown: false,\n      supportsSchema: false,\n    },\n    {\n      name: \"JSON\",\n      readTimeMs: dataSizeGB * 1500,  // slower parsing\n      storageGB: dataSizeGB * 1.3,    // verbose format\n      supportsPredicatePushdown: false,\n      supportsSchema: false,\n    },\n    {\n      name: \"Avro\",\n      readTimeMs: dataSizeGB * 800,   // row-oriented, fast serialization\n      storageGB: dataSizeGB * 0.6,    // compact binary\n      supportsPredicatePushdown: false,\n      supportsSchema: true,\n    },\n    {\n      name: \"Parquet\",\n      readTimeMs: dataSizeGB * 200 * (selectColumns / totalColumns), // column pruning\n      storageGB: dataSizeGB * 0.4,    // columnar compression\n      supportsPredicatePushdown: true,\n      supportsSchema: true,\n    },\n    {\n      name: \"ORC\",\n      readTimeMs: dataSizeGB * 180 * (selectColumns / totalColumns),\n      storageGB: dataSizeGB * 0.35,\n      supportsPredicatePushdown: true,\n      supportsSchema: true,\n    },\n  ];\n\n  return formats.sort((a, b) => a.readTimeMs - b.readTimeMs);\n}\n\nconst results = benchmarkFormats(100, 3, 20);\nconsole.log(\"Data format benchmark (100 GB, 3 of 20 columns selected):\");\nconsole.table(results.map(r => ({\n  format: r.name,\n  \"readTime (s)\": (r.readTimeMs / 1000).toFixed(1),\n  \"storage (GB)\": r.storageGB.toFixed(1),\n  pushdown: r.supportsPredicatePushdown ? \"yes\" : \"no\",\n  schema: r.supportsSchema ? \"yes\" : \"no\",\n})));\n// +-----------------------------------------------------------+\n// ?  format  ? readTime (s) ? storage (GB) ? pushdown ? schema?\n// +----------+--------------+--------------+----------+-------?\n// ?  ORC     ?     2.7      ?    35.0      ?   yes    ?  yes  ?\n// ? Parquet  ?     3.0      ?    40.0      ?   yes    ?  yes  ?\n// ?  Avro    ?    80.0      ?    60.0      ?    no    ?  yes  ?\n// ?  CSV     ?   120.0      ?   100.0      ?    no    ?  no   ?\n// ?  JSON    ?   150.0      ?   130.0      ?    no    ?  no   ?\n// +-----------------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " With column pruning, Parquet reads only 3 of 20 columns ? a 6.7x I/O reduction versus CSV. For analytical queries over wide tables, columnar formats deliver 10-50x performance gains."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "512-cloud-migration-strategy-flow",
      children: "5.12 Cloud Migration Strategy Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Legacy[\"On-Premises Hadoop\"]\n        L1[HDFS Storage]\n        L2[MapReduce Processing]\n        L3[Hive SQL]\n        L4[Oozie Scheduling]\n    end\n    subgraph Phase1[\"Phase 1: Storage Migration\"]\n        P1[S3 / GCS<br>Retain Avro/Parquet]\n    end\n    subgraph Phase2[\"Phase 2: Compute Migration\"]\n        P2[EMR / Dataproc<br>Spark replaces MapReduce]\n    end\n    subgraph Phase3[\"Phase 3: SQL & Orchestration\"]\n        P3[Athena / BigQuery<br>replaces Hive]\n        P4[Airflow / Dagster<br>replaces Oozie]\n    end\n    Legacy --> Phase1\n    Phase1 --> Phase2\n    Phase2 --> Phase3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-kafka-consumer-group-balancer--hbase-schema-designer",
      children: "TypeScript: Kafka Consumer Group Balancer & HBase Schema Designer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PartitionAssignment { consumerId: string; partitions: number[]; }\n\nclass ConsumerGroupBalancer {\n  balance(consumers: string[], totalPartitions: number): PartitionAssignment[] {\n    const perConsumer = Math.floor(totalPartitions / consumers.length);\n    const remainder = totalPartitions % consumers.length;\n    const assignments: PartitionAssignment[] = [];\n    let start = 0;\n    for (let i = 0; i < consumers.length; i++) {\n      const count = perConsumer + (i < remainder ? 1 : 0);\n      const partitions = Array.from({ length: count }, (_, j) => start + j);\n      assignments.push({ consumerId: consumers[i], partitions });\n      start += count;\n    }\n    return assignments;\n  }\n\n  rebalanceOnFailure(assignments: PartitionAssignment[], failedConsumer: string, newConsumer: string): PartitionAssignment[] {\n    return assignments.map(a =>\n      a.consumerId === failedConsumer\n        ? { consumerId: newConsumer, partitions: a.partitions }\n        : a\n    );\n  }\n}\n\nclass HBaseSchemaDesigner {\n  designTimeSeries(prefix: string, sensors: number, payloadBytes: number): { rowKey: string; columnFamily: string; estimatedRowSize: number; regions: number } {\n    const rowKey = `${prefix}_${\"{sensorId}\"}_${\"{timestamp}\"}`;\n    const estimatedRowSize = 8 + payloadBytes + 16; // key + value + metadata\n    const regions = Math.max(1, Math.ceil((sensors * estimatedRowSize * 86400) / (256 * 1024 * 1024 * 1024)));\n    return { rowKey, columnFamily: \"cf\", estimatedRowSize, regions };\n  }\n}\n\nconst balancer = new ConsumerGroupBalancer();\nconst assigned = balancer.balance([\"consumer-1\", \"consumer-2\", \"consumer-3\"], 12);\nconsole.log(\"Partition assignments:\", JSON.stringify(assigned, null, 2));\n\nconst rebalanced = balancer.rebalanceOnFailure(assigned, \"consumer-2\", \"consumer-4\");\nconsole.log(\"After failure:\", JSON.stringify(rebalanced, null, 2));\n\nconst schema = new HBaseSchemaDesigner();\nconst tsSchema = schema.designTimeSeries(\"iot\", 1000, 64);\nconsole.log(\"Time-series schema:\", tsSchema);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// ecosystem\n// hadoop-spark-ecosystem implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'ecosystem', data: { topic: 'hadoop-spark-ecosystem' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// ecosystem - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'big-data-ecosystem demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'big-data', chapter: 'ecosystem' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('big-data-ecosystem'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Hive provides SQL-on-HDFS but is being replaced by Spark SQL and Presto for most use cases.\n- HBase offers low-latency random read/write access on HDFS with careful row key design.\n- Kafka is the de-facto standard for streaming data ingestion and event-driven architectures.\n- Parquet is the default analytical storage format; Avro is preferred for streaming serialization.\n- The trend is cloud-native: S3 + Spark + Kafka MSK replaces most of the Hadoop ecosystem.\n\n## Exercises\n\n1. Set up a Kafka cluster with 3 brokers and create a topic with 6 partitions. Produce 1M messages and consume them with a consumer group of 3 instances.\n2. Write a Spark Structured Streaming job that reads from Kafka, aggregates event counts per minute, and writes to Parquet.\n3. Compare the read performance of Parquet vs Avro vs CSV for a 10 GB dataset with a selective column query.\n4. Design a HBase row key strategy for a time-series table receiving 100K writes/second from 1000 sensors.\n5. Translate a legacy Hive ETL pipeline (3 HiveQL queries, 2 intermediate tables) into a Spark SQL job.\n6. Extend the TypeScript `KafkaTopic` class to support `replicationFactor` ? simulate broker failure and verify that messages are still readable from replicas.\n7. Use the `HBaseTable` simulator to design a time-series schema for 1000 IoT sensors writing temperature every second, and verify the salted key distribution.\n8. Implement a `KafkaConsumerGroup` class that distributes partitions across multiple consumer instances (round-robin), then test with 3 consumers and 6 partitions.\n9. Write a function that benchmarks Parquet vs Avro vs CSV for a 50 GB dataset with 50 columns, selecting 2 columns, and report estimated read times.\n10. Build a TypeScript `SchemaRegistry` class that stores Avro schemas by subject and validates messages against their schema before producing to Kafka.\n"
      })
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