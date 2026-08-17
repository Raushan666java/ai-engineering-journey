"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44190],{

/***/ 64721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_big_data_01_introduction_md_a63_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-big-data-01-introduction-md-a63.json
const site_docs_courses_big_data_01_introduction_md_a63_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/big-data/01-introduction","title":"Chapter 1: Introduction to Big Data","description":"Previous Chapter 2: Hadoop ? HDFS, MapReduce & YARN","source":"@site/docs/courses/big-data/01-introduction.md","sourceDirName":"courses/big-data","slug":"/big-data/01-introduction","permalink":"/ai-engineering-journey/big-data/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/big-data/01-introduction","title":"Chapter 1: Introduction to Big Data","sidebar_label":"Chapter 1: Introduction to Big Data","sidebar_position":1},"sidebar":"course-big-data","next":{"title":"Chapter 2: Hadoop ? HDFS, MapReduce & YARN","permalink":"/ai-engineering-journey/big-data/02-hadoop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/big-data/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/big-data/01-introduction',
	title: 'Chapter 1: Introduction to Big Data',
	sidebar_label: 'Chapter 1: Introduction to Big Data',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Big Data';

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
  "value": "1.1 The 3 V&#39;s of Big Data",
  "id": "11-the-3-vs-of-big-data",
  "level": 2
}, {
  "value": "1.2 The Scale Problem",
  "id": "12-the-scale-problem",
  "level": 2
}, {
  "value": "1.3 Distributed Computing Challenges",
  "id": "13-distributed-computing-challenges",
  "level": 2
}, {
  "value": "1.3.1 Data Locality",
  "id": "131-data-locality",
  "level": 3
}, {
  "value": "1.3.2 Fault Tolerance",
  "id": "132-fault-tolerance",
  "level": 3
}, {
  "value": "1.3.3 Consistency vs Availability",
  "id": "133-consistency-vs-availability",
  "level": 3
}, {
  "value": "1.4 The Hadoop Ecosystem",
  "id": "14-the-hadoop-ecosystem",
  "level": 2
}, {
  "value": "1.5 Batch vs Stream Processing",
  "id": "15-batch-vs-stream-processing",
  "level": 2
}, {
  "value": "1.6 Spark vs MapReduce",
  "id": "16-spark-vs-mapreduce",
  "level": 2
}, {
  "value": "1.7 Setting Up a Local Development Environment",
  "id": "17-setting-up-a-local-development-environment",
  "level": 2
}, {
  "value": "1.7.1 Installing PySpark",
  "id": "171-installing-pyspark",
  "level": 3
}, {
  "value": "1.7.2 Running Spark Locally",
  "id": "172-running-spark-locally",
  "level": 3
}, {
  "value": "1.7.3 Docker Cluster for Development",
  "id": "173-docker-cluster-for-development",
  "level": 3
}, {
  "value": "1.8 Data Formats for Big Data",
  "id": "18-data-formats-for-big-data",
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
  "value": "TypeScript Example: Distributed Data Processing Concept",
  "id": "typescript-example-distributed-data-processing-concept",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Decision Flowchart",
  "id": "decision-flowchart",
  "level": 3
}, {
  "value": "TypeScript: Big Data Concepts Simulator",
  "id": "typescript-big-data-concepts-simulator",
  "level": 3
}, {
  "value": "Case Study: Real-Time Fraud Detection Pipeline",
  "id": "case-study-real-time-fraud-detection-pipeline",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Answer Key (Additional)",
  "id": "answer-key-additional",
  "level": 3
}, {
  "value": "TypeScript: Big Data Ecosystem Component Selector",
  "id": "typescript-big-data-ecosystem-component-selector",
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
        id: "chapter-1-introduction-to-big-data",
        children: "Chapter 1: Introduction to Big Data"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None (First Chapter) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/big-data/02-hadoop",
          children: "Chapter 2: Hadoop ? HDFS, MapReduce & YARN"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the 3 V's of big data and their implications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why traditional databases fail at petabyte scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Hadoop ecosystem and its components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between batch and stream processing paradigms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up a local Spark environment for development"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "The 3 V's of Big Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume, velocity, and variety define big data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose storage and processing based on which V dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Scale Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional RDBMS fails at petabyte scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal scaling beats vertical scaling for big data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data locality and fault tolerance are critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move computation to data, not data to computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hadoop Ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFS, MapReduce, YARN formed the foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concepts survive in modern cloud data platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch vs Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-off between latency and throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use batch for hourly reports, stream for real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spark vs MapReduce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory processing is 10-100x faster than disk-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spark is the default choice for new big data projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar formats (Parquet) optimize analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always choose Parquet over CSV/JSON for analytical workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[3 V's of Big Data] --> B[Scale Problem]\n    B --> C[Distributed Computing]\n    C --> D[Hadoop Ecosystem]\n    D --> E[Batch vs Stream]\n    E --> F[Spark vs MapReduce]\n    F --> G[Dev Environment Setup]\n    G --> H[Data Formats]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-the-3-vs-of-big-data",
      children: "1.1 The 3 V's of Big Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Big data is defined by three dimensions that break traditional tools:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Volume"
      }), " ? The quantity of data. A single dataset can be terabytes or petabytes. At this scale, moving data to the compute engine is impossible; compute must move to the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulating volume: 1 billion rows\n# Traditional DB: hours for a simple aggregation\n# Spark: minutes with 100 executors\nrows = 1_000_000_000\nestimated_time_db = rows / 100_000  # ~10,000 seconds = 2.7 hours\nestimated_time_spark = rows / 10_000_000  # ~100 seconds\nprint(f\"DB: {estimated_time_db:.0f}s, Spark: {estimated_time_spark:.0f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Velocity"
      }), " ? The speed at which data arrives. IoT sensors emit millions of events per second. Batch processing is too slow; stream processing is required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 10,000 IoT devices sending 1 reading/second\nevents_per_second = 10_000 * 1\nevents_per_day = events_per_second * 86400\nprint(f\"{events_per_second} events/sec, {events_per_day:,} events/day\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variety"
      }), " ? Data arrives in multiple formats: structured (CSV, Parquet), semi-structured (JSON, XML), and unstructured (images, text, video)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/big-data/ch01-three-vs.png",
        alt: "The 3 V's of Big Data"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Big data breaks traditional tools across three dimensions ? size, speed, and variety ? demanding distributed, schema-flexible approaches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-the-scale-problem",
      children: "1.2 The Scale Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional RDBMS fails at big data scale for fundamental architectural reasons:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Single-node memory limit\nnode_ram_gb = 256\ndataset_size_tb = 10\ndataset_size_gb = dataset_size_tb * 1024\n\nif dataset_size_gb > node_ram_gb:\n    print(f\"Dataset ({dataset_size_gb}GB) exceeds single-node RAM ({node_ram_gb}GB)\")\n    print(\"Solution: distributed processing across a cluster\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core insight: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "horizontal scaling"
      }), " (adding more commodity machines) is cheaper and more practical than ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vertical scaling"
      }), " (buying a bigger machine). Google published the MapReduce paper (2004) and GFS paper (2003), which inspired Hadoop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Horizontal scaling with commodity hardware is the only economically viable path to petabyte-scale data processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-distributed-computing-challenges",
      children: "1.3 Distributed Computing Challenges"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-data-locality",
      children: "1.3.1 Data Locality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Moving data over the network is the bottleneck. The principle of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data locality"
      }), " means sending computation to where the data resides, not the reverse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Network transfer cost for 1 TB over 10 GbE\ndata_tb = 1\ndata_gb = data_tb * 1024\nbandwidth_gbps = 10 / 8  # 1.25 GB/s\ntransfer_time_seconds = data_gb / bandwidth_gbps\nprint(f\"Transfer {data_tb}TB over {bandwidth_gbps*8}GbE: {transfer_time_seconds:.0f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-fault-tolerance",
      children: "1.3.2 Fault Tolerance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a cluster of 1000 commodity servers, hardware failures are routine, not exceptional. Every framework must handle node failure transparently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "mtbf_per_node_days = 30  # Mean time between failures\ncluster_size = 1000\nexpected_failures_per_day = cluster_size / mtbf_per_node_days\nprint(f\"Expected failures/day: {expected_failures_per_day:.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-consistency-vs-availability",
      children: "1.3.3 Consistency vs Availability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed storage systems face the CAP theorem trade-off. HDFS chooses consistency (strong, via namenode). Cassandra chooses availability (eventual consistency)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Distributed systems must navigate the CAP theorem ? choosing between consistency, availability, and partition tolerance ? and every big data framework makes this trade-off differently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-the-hadoop-ecosystem",
      children: "1.4 The Hadoop Ecosystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At its peak, Hadoop was the center of the big data universe. While cloud-native tools have overtaken it, the concepts survive in every modern data platform."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modern Alternative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HDFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed filesystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, GCS, Azure Blob"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MapReduce"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spark, Presto, Trino"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YARN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster resource manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL-on-Hadoop (data warehouse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snowflake, BigQuery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HBase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-family NoSQL on HDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bigtable, DynamoDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kafka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(still Kafka or Pulsar)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oozie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airflow, Dagster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sqoop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDBMS ? Hadoop data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(replaced by Spark JDBC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log ingestion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filebeat, Fluentd"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Don't learn Hadoop tools in isolation. Learn the concepts (distributed FS, resource management, SQL-on-data) ? cloud-native services like S3, EMR, and Athena implement the same ideas without the operational overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Hadoop ecosystem introduced every major concept in modern big data processing, even if cloud-native tools have replaced the original implementations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-batch-vs-stream-processing",
      children: "1.5 Batch vs Stream Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import timedelta\n\n# Batch: process all data at once, periodic\nbatch_interval = timedelta(hours=1)\nbatch_latency = timedelta(minutes=5)  # Processing time\n\n# Stream: process each event as it arrives\nper_event_latency = timedelta(seconds=5)\n\nprint(f\"Batch: new data every {batch_interval}, latency ~{batch_latency}\")\nprint(f\"Stream: latency ~{per_event_latency}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use batch:"
      }), " Daily/hourly reports, backfill, ETL jobs where latency tolerance is minutes-to-hours."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use stream:"
      }), " Real-time dashboards, fraud detection, monitoring alerts, recommendation updates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Choose batch processing when latency tolerance is measured in minutes or hours; choose stream processing when sub-second response is required."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-spark-vs-mapreduce",
      children: "1.6 Spark vs MapReduce"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Spark replaced MapReduce as the dominant big data engine because:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MapReduce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spark"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk-based (write intermediate results to HDFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory (cache RDDs/DataFrames)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes (warm start)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds (JVM reuse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java (verbose)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python/SQL/Scala/R (expressive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each stage writes to disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelined in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (Mahout)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (MLlib)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# MapReduce word count: ~50 lines of Java\n# Spark word count:\nfrom pyspark.sql import SparkSession\n\nspark = SparkSession.builder.appName(\"wordcount\").getOrCreate()\ntext_file = spark.sparkContext.textFile(\"s3://bucket/input/*.txt\")\ncounts = (text_file.flatMap(lambda line: line.split())\n          .map(lambda word: (word, 1))\n          .reduceByKey(lambda a, b: a + b))\ncounts.saveAsTextFile(\"s3://bucket/output/\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " MapReduce is rarely the right choice for new projects. Spark's in-memory model delivers 10-100x speedups, and its unified API (SQL, streaming, ML) eliminates the need to stitch together multiple Hadoop tools."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Apache Spark replaced MapReduce as the industry standard by moving computation from disk to memory and providing a unified API for batch, streaming, and ML workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-setting-up-a-local-development-environment",
      children: "1.7 Setting Up a Local Development Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-installing-pyspark",
      children: "1.7.1 Installing PySpark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install pyspark jupyter\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-running-spark-locally",
      children: "1.7.2 Running Spark Locally"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\n\nspark = SparkSession.builder \\\n    .appName(\"local-dev\") \\\n    .config(\"spark.master\", \"local[*]\") \\\n    .config(\"spark.sql.adaptive.enabled\", \"true\") \\\n    .getOrCreate()\n\ndf = spark.range(1_000_000)\nprint(f\"Count: {df.count()}\")\ndf.show(5)\n\nspark.stop()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "local[*]"
      }), " mode runs on your machine using all available cores. This is sufficient for development and testing on datasets up to a few GB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-docker-cluster-for-development",
      children: "1.7.3 Docker Cluster for Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.8\"\nservices:\n  spark-master:\n    image: bitnami/spark:3.5\n    environment:\n      - SPARK_MODE=master\n    ports:\n      - \"8080:8080\"\n      - \"7077:7077\"\n  spark-worker:\n    image: bitnami/spark:3.5\n    environment:\n      - SPARK_MODE=worker\n      - SPARK_MASTER_URL=spark://spark-master:7077\n      - SPARK_WORKER_MEMORY=2G\n      - SPARK_WORKER_CORES=2\n    depends_on:\n      - spark-master\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-data-formats-for-big-data",
      children: "1.8 Data Formats for Big Data"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Splittable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (gzip)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (gzip)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APIs, semi-structured"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parquet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (snappy/zstd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analytics (default)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hive workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Avro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (in file)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialization, Kafka"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Reading Parquet in Spark\ndf = spark.read.parquet(\"s3://bucket/events/*.parquet\")\ndf.createOrReplaceTempView(\"events\")\nresult = spark.sql(\"\"\"\n    SELECT event_type, count(*) as cnt\n    FROM events\n    WHERE date >= '2026-01-01'\n    GROUP BY event_type\n    ORDER BY cnt DESC\n\"\"\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parquet is the recommended default for analytical workloads. It stores columnar data with embedded schema and predicate pushdown ? Spark reads only the columns and row groups needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Parquet is not a database ? it's a file format. You still need a query engine (Spark, Presto, DuckDB) to read it. But choosing Parquet over CSV is the single easiest performance win in big data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Parquet is the default file format for big data analytics ? always prefer it over CSV/JSON for production workloads."]
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
            children: "Horizontal Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding more machines to a cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds capacity linearly, cost-effective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed storage and processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Making a single machine larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hits hardware limits, expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-node databases, legacy apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process data in scheduled intervals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput, minutes-hours latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily reports, ETL, backfill jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process events as they arrive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, seconds-subseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud detection, real-time dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move computation to where data resides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces network transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MapReduce, Spark tasks on HDFS/S3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-on-Read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infer schema when reading data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, no upfront schema design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data lakes, JSON/Parquet analytics"
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
            children: "Key Tools/Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFS, S3, GCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFS requires cluster; S3/GCS are serverless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MapReduce, Spark, Flink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spark is the default; Flink for true streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YARN, Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K8s is the modern standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Formats"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet, ORC, Avro, CSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet for analytics, Avro for streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hive, Spark SQL, Presto/Trino"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presto for interactive, Spark for ETL+ML"
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
            children: "Horizontal Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed ETL pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed model training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Co-locate compute with HDFS/S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache training data on workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 + EMR compute proximity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query engine proximity to data lake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hourly/daily ingestion jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline feature computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch analytics with Athena"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time data ingestion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online feature serving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient compression for ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column pruning for feature access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3/Parquet in data lakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast aggregation queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-Memory Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spark DataFrame operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MLlib distributed training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-optimized instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive BI tools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the 3 V's is most responsible for breaking traditional RDBMS tools?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Variety"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Velocity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Volume"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All three equally"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Volume.** While variety and velocity pose challenges, it's the sheer volume of data at petabyte scale that overwhelms single-node architectures and forces the shift to distributed processing.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What makes Parquet better than CSV for analytical workloads?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It's human-readable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Columnar storage with predicate pushdown"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It requires no schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It's faster to write"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Columnar storage with predicate pushdown.** Parquet stores data by column, allowing query engines to read only the needed columns and skip irrelevant row groups based on min/max statistics.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why did Spark replace MapReduce as the dominant big data engine?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Spark uses a simpler programming model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Spark processes data in memory instead of writing intermediate results to disk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Spark is written in Python instead of Java"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Spark runs on Kubernetes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Spark processes data in memory instead of writing intermediate results to disk.** This eliminates the disk I/O bottleneck that made MapReduce 10-100x slower for multi-stage jobs.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-example-distributed-data-processing-concept",
      children: "TypeScript Example: Distributed Data Processing Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Conceptual simulation of distributed data processing\ninterface DataPartition {\n  id: number;\n  records: Record<string, unknown>[];\n}\n\nclass DistributedProcessor {\n  private nodes: number;\n\n  constructor(nodes: number) { this.nodes = nodes; }\n\n  // Simulate Map phase: each node processes its partition independently\n  mapPhase(data: DataPartition[]): Map<string, number>[] {\n    return data.map((partition, i) => {\n      const result = new Map<string, number>();\n      // Each node independently processes its partition\n      for (const record of partition.records) {\n        const key = String(record.category ?? \"unknown\");\n        result.set(key, (result.get(key) ?? 0) + 1);\n      }\n      return result;\n    });\n  }\n\n  // Simulate Reduce phase: aggregate results from all nodes\n  reducePhase(mappedResults: Map<string, number>[]): Map<string, number> {\n    const final = new Map<string, number>();\n    for (const nodeResult of mappedResults) {\n      for (const [key, count] of nodeResult) {\n        final.set(key, (final.get(key) ?? 0) + count);\n      }\n    }\n    return final;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Big Data Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Means"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Apply"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data too large for single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use distributed storage (HDFS/S3) + compute (Spark)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Velocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data arrives continuously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose stream processing (Kafka + Flink/Spark Streaming)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in many formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use schema-on-read (Parquet, JSON, Avro)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move code to data, not data to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Co-locate compute clusters with storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add more machines, not bigger ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for commodity hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store by column for analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use Parquet for analytical workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-flowchart",
      children: "Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Data Size?] -->|\"< 1 TB\"| B[Single Node: PostgreSQL, DuckDB]\n    A -->|\"> 1 TB\"| C[Distributed System Needed]\n    C --> D[Latency Requirement?]\n    D -->|\"Seconds-Minutes\"| E[Batch: Spark]\n    D -->|\"Sub-second\"| F[Stream: Kafka + Flink]\n    E --> G[Storage Format?]\n    F --> G\n    G -->|Analytics| H[Parquet]\n    G -->|Serialization| I[Avro]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-big-data-concepts-simulator",
      children: "TypeScript: Big Data Concepts Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === 3 V's Simulator ===\ninterface BigDataScenario {\n  volumeTB: number;\n  eventsPerSecond: number;\n  dataTypes: string[];\n  latencyMS: number;\n}\n\nclass BigDataAnalyzer {\n  static classify(scenario: BigDataScenario): { primaryV: string; engine: string; storage: string } {\n    const volumeScore = scenario.volumeTB / 10;\n    const velocityScore = scenario.eventsPerSecond / 10000;\n    const varietyScore = scenario.dataTypes.length / 3;\n\n    const scores = [\n      { v: \"Volume\", score: volumeScore },\n      { v: \"Velocity\", score: velocityScore },\n      { v: \"Variety\", score: varietyScore },\n    ];\n    scores.sort((a, b) => b.score - a.score);\n    const primary = scores[0].v;\n\n    let engine: string, storage: string;\n    if (primary === \"Velocity\") {\n      engine = scenario.latencyMS < 100 ? \"Apache Flink / Spark Streaming\" : \"Apache Spark (micro-batch)\";\n      storage = \"Apache Kafka + Parquet on S3\";\n    } else if (primary === \"Volume\") {\n      engine = \"Apache Spark (batch)\";\n      storage = \"Parquet on S3 / HDFS\";\n    } else {\n      engine = \"Spark with schema-on-read\";\n      storage = \"JSON + Parquet on S3 / Data Lake\";\n    }\n\n    return { primaryV: primary, engine, storage };\n  }\n\n  static estimateCost(volumeTB: number, computeHours: number): { hdfs: number; s3: number; spark: number } {\n    const hdfsStorage = volumeTB * 3 * 10; // 3x replication, $10/TB/month\n    const s3Storage = volumeTB * 23; // $0.023/GB ? $23/TB/month\n    const sparkCompute = computeHours * 0.5 * 10; // 10 nodes at $0.50/hour\n    return {\n      hdfs: Math.round(hdfsStorage),\n      s3: Math.round(s3Storage),\n      spark: Math.round(sparkCompute),\n    };\n  }\n\n  static simulateProcessing(dataSizeGB: number, numNodes: number): void {\n    console.log(`\\nProcessing ${dataSizeGB}GB across ${numNodes} nodes:`);\n    const perNode = dataSizeGB / numNodes;\n    const timeWithLocality = perNode * 0.1; // 100 MB/s read with locality\n    const timeWithoutLocality = dataSizeGB * 0.15; // network bottleneck\n\n    console.log(`  Data per node: ${perNode.toFixed(1)}GB`);\n    console.log(`  With data locality: ~${timeWithLocality.toFixed(1)}s`);\n    console.log(`  Without data locality (moving data): ~${timeWithoutLocality.toFixed(1)}s`);\n    console.log(`  Speedup from locality: ${(timeWithoutLocality / timeWithLocality).toFixed(1)}x`);\n  }\n}\n\n// === Streaming vs Batch Simulator ===\nclass ProcessingSimulator {\n  static simulateBatch(dataSizeGB: number, throughputGBps: number): { time: number; recordsPerSec: number } {\n    const time = dataSizeGB / throughputGBps;\n    return {\n      time: Math.round(time * 100) / 100,\n      recordsPerSec: Math.round((dataSizeGB * 1e6) / time), // assuming ~1KB records\n    };\n  }\n\n  static simulateStream(eventsPerSec: number, windowSeconds: number): { throughput: number; maxDelay: number } {\n    return {\n      throughput: eventsPerSec * windowSeconds,\n      maxDelay: windowSeconds * 1000, // ms\n    };\n  }\n\n  static compare(scenario: { dataGB: number; throughput: number; eventsPerSec: number; windowSec: number }): void {\n    const batch = this.simulateBatch(scenario.dataGB, scenario.throughput);\n    const stream = this.simulateStream(scenario.eventsPerSec, scenario.windowSec);\n\n    console.log(\"\\nBatch vs Stream Comparison:\");\n    console.log(`  Batch: ${batch.time}s to process ${scenario.dataGB}GB`);\n    console.log(`  Stream: ${(stream.maxDelay / 1000).toFixed(1)}s max delay, process ${stream.throughput} events/window`);\n    console.log(`  Recommendation: ${batch.time < 60 ? \"Batch sufficient\" : stream.maxDelay < 5000 ? \"Stream required\" : \"Lambda architecture (batch + stream)\"}`);\n  }\n}\n\n// === CAP Theorem Simulator ===\nclass CAPSimulator {\n  static simulate(options: { consistency: boolean; availability: boolean; partitionTolerance: boolean }): string {\n    const { consistency: C, availability: A, partitionTolerance: P } = options;\n\n    if (C && A && !P) return \"CA System (e.g., Traditional RDBMS) ? Single-site only, no partition tolerance\";\n    if (C && !A && P) return \"CP System (e.g., HDFS, MongoDB) ? Consistent under partition, may reject writes\";\n    if (!C && A && P) return \"AP System (e.g., Cassandra, DynamoDB) ? Available under partition, eventual consistency\";\n    return \"Invalid ? must pick 2 of 3 in a distributed system\";\n  }\n\n  static comparison(): void {\n    const systems = [\n      { name: \"HDFS\", consistency: true, availability: false, partitionTolerance: true },\n      { name: \"Cassandra\", consistency: false, availability: true, partitionTolerance: true },\n      { name: \"PostgreSQL (single)\", consistency: true, availability: true, partitionTolerance: false },\n    ];\n    for (const sys of systems) {\n      console.log(`  ${sys.name}: ${this.simulate(sys)}`);\n    }\n  }\n}\n\n// === Data Format Benchmarker ===\nclass DataFormatBenchmark {\n  static benchmark(format: string, columns: number, rows: number): { sizeMB: number; readTime: number } {\n    const compressionRatio: Record<string, number> = {\n      csv: 1, json: 1.3, parquet: 0.25, orc: 0.22, avro: 0.45,\n    };\n    const readSpeed: Record<string, number> = {\n      csv: 100, json: 80, parquet: 500, orc: 450, avro: 200,\n    };\n\n    const rowSize = columns * 8; // bytes per row (8 bytes per numeric column)\n    const rawSizeMB = (rows * rowSize) / (1024 * 1024);\n    const compressedSizeMB = rawSizeMB * (compressionRatio[format] ?? 1);\n    const readTime = (compressedSizeMB / (readSpeed[format] ?? 100)) * 1000; // ms\n\n    return {\n      sizeMB: Math.round(compressedSizeMB * 100) / 100,\n      readTime: Math.round(readTime * 100) / 100,\n    };\n  }\n\n  static compareAll(columns: number, rows: number): void {\n    const formats = [\"csv\", \"json\", \"parquet\", \"orc\", \"avro\"];\n    console.log(`\\nData Format Comparison (${rows.toLocaleString()} rows, ${columns} cols):`);\n    for (const fmt of formats) {\n      const result = this.benchmark(fmt, columns, rows);\n      console.log(`  ${fmt.padEnd(10)} ${result.sizeMB.toFixed(1)}MB | read: ${result.readTime.toFixed(0)}ms`);\n    }\n    const parquet = this.benchmark(\"parquet\", columns, rows);\n    const csv = this.benchmark(\"csv\", columns, rows);\n    console.log(`\\n  Parquet vs CSV: ${(csv.sizeMB / parquet.sizeMB).toFixed(1)}x smaller, ${(parquet.readTime < csv.readTime ? (csv.readTime / parquet.readTime).toFixed(1) + \"x faster\" : \"similar read speed\")}`);\n  }\n}\n\n// === Demo ===\nconst scenario: BigDataScenario = {\n  volumeTB: 50, eventsPerSecond: 500000,\n  dataTypes: [\"CSV\", \"JSON\", \"Images\", \"Logs\"],\n  latencyMS: 200,\n};\nconsole.log(\"=== Scenario Classification ===\");\nconsole.log(BigDataAnalyzer.classify(scenario));\n\nconsole.log(\"\\n=== Cost Estimation ===\");\nconsole.log(\"Monthly costs:\", BigDataAnalyzer.estimateCost(100, 500));\n\nBigDataAnalyzer.simulateProcessing(500, 10);\n\nProcessingSimulator.compare({\n  dataGB: 100, throughput: 1,\n  eventsPerSec: 10000, windowSec: 60,\n});\n\nconsole.log(\"\\n=== CAP Theorem ===\");\nCAPSimulator.comparison();\n\nDataFormatBenchmark.compareAll(20, 10_000_000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-real-time-fraud-detection-pipeline",
      children: "Case Study: Real-Time Fraud Detection Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A payment processing company handles 1M transactions/day. They need to detect fraud within 100ms. Current system uses a PostgreSQL database with batch ML scoring, taking ~5 minutes per batch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposed Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Payment Events] --> B[Kafka: transactions topic]\n    B --> C[Spark Structured Streaming]\n    C --> D[Feature Lookup: Redis]\n    D --> E[ML Model: ONNX Runtime]\n    E --> F{Score > Threshold?}\n    F -->|Yes| G[Block: Kafka fraud topic]\n    F -->|No| H[Approve: Kafka approved topic]\n    G --> I[Alert Team: PagerDuty]\n    H --> J[Write to S3: Parquet]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Results after migration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fraud detection latency: 5 min ? 350ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fraud capture rate: 60% ? 94%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Annual savings: $2.4M in fraud losses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const transactionsPerDay = 1_000_000;\nconst peakTPS = transactionsPerDay / 86400 * 10; // 10x peak factor\nconst oldLatency = 5 * 60 * 1000; // ms\nconst newLatency = 350; // ms\nconsole.log(`Peak throughput: ${peakTPS.toFixed(0)} TPS`);\nconsole.log(`Latency reduction: ${(oldLatency / newLatency).toFixed(0)}x`);\nconsole.log(`Fraud capture improvement: 60% ? 94%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Lambda architecture for a social media analytics platform processing 10TB/day with both real-time trending topics and daily aggregated reports."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the cost of running a 20-node Spark cluster (10TB data, 500 compute hours/month) on-premise vs AWS EMR vs Databricks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulate a data locality scenario: 10 nodes with 100GB data on each. Calculate the time difference between sending code to data vs moving 100GB data to a central processing node over 10GbE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a CSV dataset of 500GB with 100 columns, estimate the storage savings and query speedup by converting to Parquet with snappy compression."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how the CAP theorem applies to a distributed data lake architecture using S3 (AP) + Spark (CP during shuffles)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answer-key-additional",
      children: "Answer Key (Additional)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch layer: Spark hourly jobs ? Parquet; Speed layer: Kafka + Flink ? Redis for real-time; Serving layer: Presto on Parquet + API on Redis | 7. On-prem: ~$15K/mo, EMR: ~$5K/mo, Databricks: ~$8K/mo | 8. With locality: ~100s; without: ~800s (8x slower) | 9. ~75% storage savings, ~5x faster queries | 10. S3 is AP (available during partition), Spark shuffle is CP (blocks if partition)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-big-data-ecosystem-component-selector",
      children: "TypeScript: Big Data Ecosystem Component Selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EcosystemComponent {\n  name: string;\n  category: \"storage\" | \"processing\" | \"messaging\" | \"sql\" | \"nosql\";\n  dataModel?: \"key-value\" | \"document\" | \"column-family\" | \"graph\";\n  capProfile?: \"CP\" | \"AP\" | \"CA\";\n  strengths: string[];\n  weaknesses: string[];\n}\n\nclass EcosystemMapper {\n  private catalog: Map<string, EcosystemComponent> = new Map();\n\n  register(comp: EcosystemComponent): this { this.catalog.set(comp.name, comp); return this; }\n\n  query(opts: { consistency: \"strong\" | \"eventual\"; latency: \"low\" | \"high\" }): EcosystemComponent[] {\n    return [...this.catalog.values()].filter(c => {\n      if (opts.consistency === \"strong\" && c.capProfile === \"AP\") return false;\n      if (opts.latency === \"low\" && c.category === \"storage\" && c.name !== \"HBase\") return false;\n      return true;\n    });\n  }\n\n  recommend(workload: { type: \"batch\" | \"stream\" | \"interactive\"; sizeTB: number }): string[] {\n    const picks: string[] = [];\n    if (workload.type === \"batch\") picks.push(\"Spark\", \"HDFS\");\n    if (workload.type === \"stream\") picks.push(\"Kafka\", \"Flink\", \"Cassandra\");\n    if (workload.type === \"interactive\") picks.push(\"Presto\", \"HBase\", \"Parquet\");\n    if (workload.sizeTB > 100) picks.push(\"S3\", \"Spark\", \"HDFS\");\n    return [...new Set(picks)];\n  }\n}\n\nconst mapper = new EcosystemMapper()\n  .register({ name: \"HDFS\", category: \"storage\", strengths: [\"Large files\", \"Streaming\"], weaknesses: [\"Small files\"] })\n  .register({ name: \"HBase\", category: \"nosql\", dataModel: \"column-family\", capProfile: \"CP\", strengths: [\"Random R/W\", \"Strong consistency\"], weaknesses: [\"Row key design\"] })\n  .register({ name: \"Cassandra\", category: \"nosql\", dataModel: \"column-family\", capProfile: \"AP\", strengths: [\"Linear scale\", \"Multi-DC\"], weaknesses: [\"No joins\"] })\n  .register({ name: \"Kafka\", category: \"messaging\", strengths: [\"High throughput\", \"Durable\"], weaknesses: [\"ZooKeeper dep\"] })\n  .register({ name: \"Spark\", category: \"processing\", strengths: [\"Speed\", \"Unified\"], weaknesses: [\"Memory hungry\"] });\n\nconsole.log(\"CP-compatible:\", mapper.query({ consistency: \"strong\", latency: \"low\" }).map(c => c.name).join(\", \"));\nconsole.log(\"Streaming stack:\", mapper.recommend({ type: \"stream\", sizeTB: 50 }).join(\" ? \"));\nconsole.log(\"Batch stack:\", mapper.recommend({ type: \"batch\", sizeTB: 500 }).join(\" ? \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// introduction\n// hadoop-spark-ecosystem implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'introduction', data: { topic: 'hadoop-spark-ecosystem' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// introduction - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'big-data-ecosystem demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'big-data', chapter: 'introduction' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('big-data-ecosystem'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- Big data is defined by volume, velocity, and variety ? traditional tools break at petabyte scale.\n- Distributed computing requires new approaches to data locality, fault tolerance, and consistency.\n- The Hadoop ecosystem introduced HDFS, MapReduce, and YARN as foundational components.\n- Apache Spark replaced MapReduce as the primary big data engine due to in-memory processing and expressive APIs.\n- Parquet is the default file format for analytics (columnar, splittable, compressed).\n- Local Spark development is easy with PySpark and Docker, scaling from `local[*]` to a full cluster.\n\n## Exercises\n\n1. Install PySpark and run a word count on a 100 MB text file. Time it with 1 core vs all cores.\n2. Explain why gzip-compressed CSV files cannot be split across Spark partitions.\n3. Compare the latency of batch vs stream processing for a fraud detection system that must flag transactions within 100ms.\n4. Set up a 3-node Spark cluster with Docker Compose and verify it works with `spark.range(100000000).count()`.\n5. Convert a 1 GB CSV to Parquet and compare query performance (`SELECT count(*), avg(x)`) between the two formats.\n"
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