"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74],{

/***/ 236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_25_data_engineering_04_streaming_real_time_md_754_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-25-data-engineering-04-streaming-real-time-md-754.json
const site_docs_courses_ai_engineering_placement_25_data_engineering_04_streaming_real_time_md_754_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-engineering/04-streaming-real-time","title":"04 — Streaming & Real-Time Data","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/25-data-engineering/04-streaming-real-time.md","sourceDirName":"courses/ai-engineering-placement/25-data-engineering","slug":"/ai-engineering-placement/25-data-engineering/04-streaming-real-time","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/04-streaming-real-time","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":312,"frontMatter":{"id":"04-streaming-real-time","slug":"/ai-engineering-placement/25-data-engineering/04-streaming-real-time","title":"04 — Streaming & Real-Time Data","sidebar_label":"04 — Streaming & Real-Time Data","sidebar_position":312},"sidebar":"placementSidebar","previous":{"title":"03 — Apache Spark Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/03-apache-spark-basics"},"next":{"title":"05 — Feature Stores","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/05-feature-stores"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/25-data-engineering/04-streaming-real-time.md


const frontMatter = {
	id: '04-streaming-real-time',
	slug: '/ai-engineering-placement/25-data-engineering/04-streaming-real-time',
	title: '04 — Streaming & Real-Time Data',
	sidebar_label: '04 — Streaming & Real-Time Data',
	sidebar_position: 312
};
const contentTitle = '04 — Streaming & Real-Time Data';

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
  "value": "1.1 Batch vs Stream Processing",
  "id": "11-batch-vs-stream-processing",
  "level": 2
}, {
  "value": "1.2 Apache Kafka Fundamentals",
  "id": "12-apache-kafka-fundamentals",
  "level": 2
}, {
  "value": "1.3 Consumer Groups &amp; Parallelism",
  "id": "13-consumer-groups--parallelism",
  "level": 2
}, {
  "value": "1.4 Exactly-Once Semantics",
  "id": "14-exactly-once-semantics",
  "level": 2
}, {
  "value": "1.5 Stream Processing with PySpark Structured Streaming",
  "id": "15-stream-processing-with-pyspark-structured-streaming",
  "level": 2
}, {
  "value": "1.6 Windowing &amp; Watermarks",
  "id": "16-windowing--watermarks",
  "level": 2
}, {
  "value": "1.7 Event Time vs Processing Time",
  "id": "17-event-time-vs-processing-time",
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
  "value": "Exercise 1: Kafka Producer/Consumer in Python",
  "id": "exercise-1-kafka-producerconsumer-in-python",
  "level": 3
}, {
  "value": "Exercise 2: Tumbling Window Aggregation",
  "id": "exercise-2-tumbling-window-aggregation",
  "level": 3
}, {
  "value": "Exercise 3: Late Data Handling",
  "id": "exercise-3-late-data-handling",
  "level": 3
}, {
  "value": "Exercise 4: Consumer Group Rebalance",
  "id": "exercise-4-consumer-group-rebalance",
  "level": 3
}, {
  "value": "Exercise 5: Exactly-Once Feature Store",
  "id": "exercise-5-exactly-once-feature-store",
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
  "value": "Uber (2024)",
  "id": "uber-2024",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Explain the Lambda and Kappa architectures for stream processing.",
  "id": "q1-explain-the-lambda-and-kappa-architectures-for-stream-processing",
  "level": 3
}, {
  "value": "Q2: How does Kafka achieve high throughput?",
  "id": "q2-how-does-kafka-achieve-high-throughput",
  "level": 3
}, {
  "value": "Q3: What is the difference between Kafka and traditional message queues (RabbitMQ)?",
  "id": "q3-what-is-the-difference-between-kafka-and-traditional-message-queues-rabbitmq",
  "level": 3
}, {
  "value": "Q4: How do you handle out-of-order events in stream processing?",
  "id": "q4-how-do-you-handle-out-of-order-events-in-stream-processing",
  "level": 3
}, {
  "value": "Q5: Design a real-time ML feature computation pipeline with Kafka.",
  "id": "q5-design-a-real-time-ml-feature-computation-pipeline-with-kafka",
  "level": 3
}, {
  "value": "Q6: What is a Kafka rebalance and how does it impact processing?",
  "id": "q6-what-is-a-kafka-rebalance-and-how-does-it-impact-processing",
  "level": 3
}, {
  "value": "Q7: Compare Kafka Streams vs Spark Structured Streaming.",
  "id": "q7-compare-kafka-streams-vs-spark-structured-streaming",
  "level": 3
}, {
  "value": "Q8: How do you migrate from batch to streaming processing?",
  "id": "q8-how-do-you-migrate-from-batch-to-streaming-processing",
  "level": 3
}, {
  "value": "Q9: What is change data capture (CDC) and how does it enable streaming?",
  "id": "q9-what-is-change-data-capture-cdc-and-how-does-it-enable-streaming",
  "level": 3
}, {
  "value": "Q10: How would you test a streaming pipeline?",
  "id": "q10-how-would-you-test-a-streaming-pipeline",
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
        id: "04--streaming--real-time-data",
        children: "04 — Streaming & Real-Time Data"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between batch and stream processing with examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe at-least-once vs exactly-once semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe Kafka topics, partitions, producers, consumers, and consumer groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply tumbling, sliding, and session windows with watermarks to handle late data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish event time from processing time for accurate windowed aggregations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch processing is insufficient when ML models need sub-second updates — fraud detection must flag transactions in milliseconds, recommendation systems must react to user clicks instantly, and monitoring dashboards must display live metrics. Stream processing ingests and processes data continuously, enabling real-time AI. Apache Kafka is the industry-standard event streaming platform, and this chapter covers Kafka fundamentals, stream processing with PySpark Structured Streaming, windowing, watermarks, and exactly-once semantics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of batch ETL from Chapter 01"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with Apache Spark basics from Chapter 03"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic networking concepts (TCP, ports, message queues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python threading and async concepts (helpful)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A record of something that happened (timestamp, payload)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An unbounded sequence of events ordered by time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A named channel in Kafka where events are published"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A division of a topic for parallelism and ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application that publishes events to Kafka topics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application that subscribes to and processes events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of consumers that coordinate to read partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique position of an event within a partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Kafka server that stores and serves data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly-Once Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantee that each event is processed exactly once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watermark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold for handling late-arriving data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping events within time boundaries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Batch vs Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous processing vs scheduled batch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topics, partitions, producers, consumers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable parallel consumption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly-Once Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent producers, transactional consumers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka Streams, PySpark Structured Streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windowing & Watermarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tumbling, sliding, session windows; late data handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event Time vs Processing Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing the right timestamp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph Producers[Data Producers]\r\n        WEB[Web Events]\r\n        APP[App Logs]\r\n        IOT[IoT Sensors]\r\n        DB[Database CDC]\r\n    end\r\n    subgraph Kafka[Apache Kafka Cluster]\r\n        subgraph Topic1[\"Topic: user-clicks\"]\r\n            P1[Partition 0]\r\n            P2[Partition 1]\r\n            P3[Partition 2]\r\n        end\r\n        subgraph Topic2[\"Topic: transactions\"]\r\n            P4[Partition 0]\r\n            P5[Partition 1]\r\n        end\r\n    end\r\n    subgraph StreamProcessing[Stream Processors]\r\n        KS[Kafka Streams]\r\n        SS[Spark Streaming]\r\n        FLINK[Apache Flink]\r\n    end\r\n    subgraph Consumers[Data Consumers]\r\n        ML[ML Inference]\r\n        DASH[Real-time Dashboards]\r\n        LAKE[Data Lake Sink]\r\n        ALERT[Alerting System]\r\n    end\r\n    WEB --> P1\r\n    APP --> P2\r\n    IOT --> P3\r\n    DB --> P4\r\n    DB --> P5\r\n    P1 --> KS\r\n    P2 --> SS\r\n    P3 --> FLINK\r\n    P4 --> KS\r\n    P5 --> FLINK\r\n    KS --> ML\r\n    SS --> DASH\r\n    FLINK --> LAKE\r\n    KS --> ALERT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-batch-vs-stream-processing",
      children: "1.1 Batch vs Stream Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch processing runs on bounded data at scheduled intervals. Stream processing runs continuously on unbounded data, producing results with sub-second latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport random\r\nfrom datetime import datetime\r\nfrom typing import List, Dict, Callable\r\n\r\nclass BatchProcessor:\r\n    \"\"\"Process data in fixed batches at scheduled intervals.\"\"\"\r\n\r\n    def __init__(self, batch_interval_hours: int = 24):\r\n        self.batch_interval = batch_interval_hours\r\n        self.batch_id = 0\r\n\r\n    def process_batch(self, data: List[Dict]) -> List[Dict]:\r\n        self.batch_id += 1\r\n        print(f\"[Batch #{self.batch_id}] Processing {len(data)} records \"\r\n              f\"(interval: {self.batch_interval}h)\")\r\n        # Simulate computation\r\n        time.sleep(0.5)\r\n        results = [{\"batch_id\": self.batch_id, **record, \"processed\": True} for record in data]\r\n        print(f\"[Batch #{self.batch_id}] Complete: {len(results)} results\")\r\n        return results\r\n\r\nclass StreamProcessor:\r\n    \"\"\"Process data continuously as it arrives.\"\"\"\r\n\r\n    def __init__(self, window_seconds: int = 10):\r\n        self.window = window_seconds\r\n        self.buffer: List[Dict] = []\r\n        self.total_processed = 0\r\n\r\n    def on_event(self, event: Dict) -> Dict:\r\n        \"\"\"Process a single event as it arrives.\"\"\"\r\n        latency_ms = random.uniform(5, 50)\r\n        self.total_processed += 1\r\n        result = {**event, \"processing_time_ms\": round(latency_ms, 2), \"processed\": True}\r\n        print(f\"[Stream] Event #{self.total_processed}: {event.get('event_type', 'unknown')} \"\r\n              f\"in {latency_ms:.1f}ms\")\r\n        return result\r\n\r\n    def process_window(self, events: List[Dict]) -> List[Dict]:\r\n        \"\"\"Process a micro-batch window of events.\"\"\"\r\n        print(f\"[Window {self.window}s] Processing {len(events)} events\")\r\n        results = []\r\n        for event in events:\r\n            result = self.on_event(event)\r\n            results.append(result)\r\n        print(f\"[Window] Complete: {len(results)} events in window\")\r\n        return results\r\n\r\n# Compare batch vs stream\r\nbatch = BatchProcessor(batch_interval_hours=24)\r\nstream = StreamProcessor(window_seconds=10)\r\n\r\n# Simulate 100 events arriving over time\r\nall_events = [\r\n    {\"event_id\": i, \"event_type\": random.choice([\"click\", \"view\", \"purchase\"]),\r\n     \"timestamp\": datetime.now().isoformat(), \"value\": random.randint(1, 100)}\r\n    for i in range(100)\r\n]\r\n\r\nprint(\"=== Batch Processing ===\")\r\nbatch.process_batch(all_events)\r\n\r\nprint(\"\\n=== Stream Processing ===\")\r\nfor event in all_events[:10]:  # Process first 10 as stream\r\n    stream.on_event(event)\r\n    time.sleep(0.05)\r\n# Expected output contrasts batch latency (hours) vs stream latency (ms)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-apache-kafka-fundamentals",
      children: "1.2 Apache Kafka Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka is a distributed event streaming platform. Producers write events to topics; topics are divided into partitions for parallelism; consumers read from partitions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Optional, Dict, Any\r\nimport json\r\nimport time\r\nimport uuid\r\nfrom collections import defaultdict\r\n\r\n@dataclass\r\nclass KafkaMessage:\r\n    key: str\r\n    value: Dict\r\n    topic: str\r\n    partition: int = 0\r\n    offset: int = 0\r\n    timestamp: float = field(default_factory=time.time)\r\n\r\nclass KafkaBroker:\r\n    \"\"\"Simulate a single Kafka broker for learning.\"\"\"\r\n\r\n    def __init__(self, broker_id: int = 0):\r\n        self.broker_id = broker_id\r\n        self.topics: Dict[str, Dict[int, List[KafkaMessage]]] = {}\r\n        self.partition_offsets: Dict[str, Dict[int, int]] = {}\r\n\r\n    def create_topic(self, topic: str, partitions: int = 1, replication_factor: int = 1):\r\n        self.topics[topic] = {i: [] for i in range(partitions)}\r\n        self.partition_offsets[topic] = {i: 0 for i in range(partitions)}\r\n        print(f\"Topic '{topic}' created: {partitions} partitions, RF={replication_factor}\")\r\n\r\n    def produce(self, topic: str, key: str, value: Dict) -> KafkaMessage:\r\n        if topic not in self.topics:\r\n            raise ValueError(f\"Topic {topic} does not exist\")\r\n        num_partitions = len(self.topics[topic])\r\n        partition = abs(hash(key)) % num_partitions\r\n        offset = self.partition_offsets[topic][partition]\r\n        message = KafkaMessage(\r\n            key=key, value=value, topic=topic,\r\n            partition=partition, offset=offset,\r\n        )\r\n        self.topics[topic][partition].append(message)\r\n        self.partition_offsets[topic][partition] += 1\r\n        print(f\"Produced -> {topic}[p{partition}@o{offset}]: key={key}\")\r\n        return message\r\n\r\n    def consume(self, topic: str, partition: int, offset: int = 0) -> Optional[KafkaMessage]:\r\n        if topic not in self.topics or partition not in self.topics[topic]:\r\n            return None\r\n        partition_data = self.topics[topic][partition]\r\n        if offset >= len(partition_data):\r\n            return None\r\n        msg = partition_data[offset]\r\n        print(f\"Consumed <- {topic}[p{partition}@o{offset}]: key={msg.key}\")\r\n        return msg\r\n\r\n    def get_high_watermark(self, topic: str, partition: int) -> int:\r\n        return self.partition_offsets.get(topic, {}).get(partition, 0)\r\n\r\nclass KafkaProducer:\r\n    \"\"\"Simulate Kafka producer with configurable partitioning.\"\"\"\r\n\r\n    def __init__(self, broker: KafkaBroker):\r\n        self.broker = broker\r\n        self.acks = 0\r\n        self.retries = 0\r\n\r\n    def send(self, topic: str, key: str, value: Dict) -> KafkaMessage:\r\n        try:\r\n            msg = self.broker.produce(topic, key, value)\r\n            self.acks += 1\r\n            return msg\r\n        except Exception as e:\r\n            self.retries += 1\r\n            print(f\"Send failed (retry {self.retries}): {e}\")\r\n            raise\r\n\r\nclass KafkaConsumer:\r\n    \"\"\"Simulate Kafka consumer with partition assignment and offset tracking.\"\"\"\r\n\r\n    def __init__(self, broker: KafkaBroker, group_id: str, auto_offset_reset: str = \"earliest\"):\r\n        self.broker = broker\r\n        self.group_id = group_id\r\n        self.auto_offset_reset = auto_offset_reset\r\n        self.assigned_partitions: List[tuple] = []\r\n        self.current_offsets: Dict[tuple, int] = {}\r\n        self.commit_offsets: Dict[tuple, int] = {}\r\n\r\n    def assign(self, topic: str, partitions: List[int]):\r\n        self.assigned_partitions = [(topic, p) for p in partitions]\r\n        for tp in self.assigned_partitions:\r\n            if self.auto_offset_reset == \"earliest\":\r\n                self.current_offsets[tp] = 0\r\n            elif self.auto_offset_reset == \"latest\":\r\n                self.current_offsets[tp] = self.broker.get_high_watermark(tp[0], tp[1])\r\n            self.commit_offsets[tp] = self.current_offsets[tp]\r\n        topics_str = \", \".join(f\"{t}[p{p}]\" for t, p in self.assigned_partitions)\r\n        print(f\"Consumer (group={self.group_id}) assigned: {topics_str}\")\r\n\r\n    def poll(self) -> Optional[KafkaMessage]:\r\n        for tp in self.assigned_partitions:\r\n            topic, partition = tp\r\n            offset = self.current_offsets.get(tp, 0)\r\n            msg = self.broker.consume(topic, partition, offset)\r\n            if msg:\r\n                self.current_offsets[tp] = offset + 1\r\n                return msg\r\n        return None\r\n\r\n    def commit(self):\r\n        self.commit_offsets = self.current_offsets.copy()\r\n        print(f\"Consumer (group={self.group_id}) committed offsets: {self.commit_offsets}\")\r\n\r\n# Example\r\nbroker = KafkaBroker(broker_id=1)\r\nbroker.create_topic(\"user-clicks\", partitions=3, replication_factor=3)\r\nbroker.create_topic(\"transactions\", partitions=2, replication_factor=3)\r\n\r\nproducer = KafkaProducer(broker)\r\nfor i in range(10):\r\n    producer.send(\"user-clicks\", f\"user_{i % 5}\", {\r\n        \"user_id\": i % 5,\r\n        \"event_type\": random.choice([\"click\", \"view\"]),\r\n        \"page\": f\"/product/{random.randint(1, 100)}\",\r\n        \"timestamp\": time.time(),\r\n    })\r\n\r\nconsumer = KafkaConsumer(broker, group_id=\"click-processor\")\r\nconsumer.assign(\"user-clicks\", [0, 1, 2])\r\nfor _ in range(5):\r\n    msg = consumer.poll()\r\n    if msg:\r\n        print(f\"  Received: {msg.key} -> {msg.value['event_type']}\")\r\nconsumer.commit()\r\n# Expected output shows Kafka produce/consume flow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-consumer-groups--parallelism",
      children: "1.3 Consumer Groups & Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consumer groups enable horizontal scaling. Each partition is consumed by exactly one consumer in a group, enabling parallel processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConsumerGroup:\r\n    \"\"\"Simulate Kafka consumer group rebalancing.\"\"\"\r\n\r\n    def __init__(self, group_id: str):\r\n        self.group_id = group_id\r\n        self.members: List[KafkaConsumer] = []\r\n        self._assignment_strategy = \"range\"\r\n\r\n    def add_member(self, consumer: KafkaConsumer):\r\n        self.members.append(consumer)\r\n        self._rebalance()\r\n        print(f\"Consumer group '{self.group_id}': {len(self.members)} members\")\r\n\r\n    def remove_member(self, consumer_id: str):\r\n        self.members = [m for m in self.members if m.group_id != consumer_id]\r\n        self._rebalance()\r\n        print(f\"Consumer removed. Group '{self.group_id}': {len(self.members)} members\")\r\n\r\n    def _rebalance(self):\r\n        \"\"\"Assign partitions to consumers (range assign strategy).\"\"\"\r\n        num_members = len(self.members)\r\n        if num_members == 0:\r\n            return\r\n        # Simplified range assignment\r\n        all_partitions = [(f\"topic-{t}\", p) for t in range(1) for p in range(6)]\r\n        partitions_per_member = len(all_partitions) // num_members\r\n        remainder = len(all_partitions) % num_members\r\n        start = 0\r\n        for i, member in enumerate(self.members):\r\n            extra = 1 if i < remainder else 0\r\n            member_partitions = all_partitions[start:start + partitions_per_member + extra]\r\n            start += partitions_per_member + extra\r\n            # Clear and reassign\r\n            topics_seen = set()\r\n            for t, p in member_partitions:\r\n                topics_seen.add(t)\r\n            for t in topics_seen:\r\n                ps = [p for tp, p in member_partitions if tp == t]\r\n                member.assign(t, ps)\r\n        print(f\"Rebalanced {len(all_partitions)} partitions across {num_members} consumers\")\r\n\r\n    def process_all(self, messages: List[KafkaMessage]):\r\n        \"\"\"Distribute messages to consumers.\"\"\"\r\n        for msg in messages:\r\n            for member in self.members:\r\n                if (msg.topic, msg.partition) in member.current_offsets:\r\n                    member.poll()\r\n                    member.commit()\r\n\r\n# Example\r\nbroker2 = KafkaBroker(broker_id=2)\r\nbroker2.create_topic(\"events\", partitions=6)\r\n\r\ngroup = ConsumerGroup(\"my-group\")\r\nfor i in range(3):\r\n    c = KafkaConsumer(broker2, f\"consumer-{i}\")\r\n    group.add_member(c)\r\n\r\nproducer2 = KafkaProducer(broker2)\r\nfor i in range(12):\r\n    producer2.send(\"events\", f\"key_{i}\", {\"event_id\": i, \"value\": f\"data_{i}\"})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-exactly-once-semantics",
      children: "1.4 Exactly-Once Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exactly-once semantics (EOS) ensures each event is processed exactly once — no duplicates, no gaps. Kafka achieves this through idempotent producers and transactional consumers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ExactlyOnceProcessor:\r\n    \"\"\"Simulate Kafka exactly-once semantics.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.processed_ids: set = set()\r\n        self.pending_transactions: Dict[str, List] = {}\r\n        self.idempotent_producer = IdempotentProducer()\r\n\r\n    def process_with_eos(self, event: Dict, transaction_id: str) -> bool:\r\n        \"\"\"Process event with exactly-once guarantee.\"\"\"\r\n        event_id = event.get(\"event_id\")\r\n        if not event_id:\r\n            return False\r\n\r\n        # Deduplication: skip if already processed\r\n        if event_id in self.processed_ids:\r\n            print(f\"  [EOS] Duplicate detected, skipping: {event_id}\")\r\n            return True\r\n\r\n        # Begin transaction\r\n        self.pending_transactions[transaction_id] = [event]\r\n\r\n        try:\r\n            # Process the event\r\n            result = self._execute_transaction(event)\r\n            # Commit: mark as processed\r\n            self.processed_ids.add(event_id)\r\n            self.idempotent_producer.send(event)\r\n            del self.pending_transactions[transaction_id]\r\n            print(f\"  [EOS] Committed: {event_id}\")\r\n            return True\r\n        except Exception as e:\r\n            # Abort: rollback\r\n            print(f\"  [EOS] Aborted: {event_id} ({e})\")\r\n            del self.pending_transactions[transaction_id]\r\n            return False\r\n\r\n    def _execute_transaction(self, event: Dict) -> Any:\r\n        \"\"\"Simulate business logic execution.\"\"\"\r\n        if random.random() < 0.1:\r\n            raise ValueError(\"Simulated failure\")\r\n        return {\"status\": \"success\", \"event\": event}\r\n\r\nclass IdempotentProducer:\r\n    \"\"\"Idempotent producer prevents duplicates at the broker level.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.seen_ids: set = set()\r\n\r\n    def send(self, event: Dict) -> bool:\r\n        event_id = event.get(\"event_id\")\r\n        if event_id in self.seen_ids:\r\n            return True  # Already sent\r\n        self.seen_ids.add(event_id)\r\n        return True\r\n\r\n# Example\r\nprocessor = ExactlyOnceProcessor()\r\nevents = [\r\n    {\"event_id\": f\"evt_{i}\", \"type\": \"transaction\", \"amount\": random.randint(10, 1000)}\r\n    for i in range(20)\r\n]\r\n# Introduce a duplicate\r\nevents.append(events[0])\r\n\r\nfor i, event in enumerate(events):\r\n    success = processor.process_with_eos(event, f\"txn-{uuid.uuid4()}\")\r\n    time.sleep(0.01)\r\nprint(f\"\\nProcessed {len(processor.processed_ids)} unique events (1 duplicate skipped)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-stream-processing-with-pyspark-structured-streaming",
      children: "1.5 Stream Processing with PySpark Structured Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PySpark Structured Streaming treats streams as unbounded DataFrames with continuous processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SparkStructuredStreaming:\r\n    \"\"\"Simulate Spark Structured Streaming concepts.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.batch_duration = 10  # seconds\r\n        self.processing_details = []\r\n\r\n    def read_stream(self, source: str = \"kafka\") -> 'StreamingDataFrame':\r\n        print(f\"Reading stream from {source}\")\r\n        return StreamingDataFrame(source)\r\n\r\n    def process(self, df: 'StreamingDataFrame', query: str) -> List[Dict]:\r\n        \"\"\"Simulate running a streaming query.\"\"\"\r\n        results = []\r\n        for batch_id in range(3):  # Simulate 3 micro-batches\r\n            batch_data = df.next_batch(batch_id)\r\n            print(f\"\\nBatch {batch_id}: processing {len(batch_data)} events\")\r\n\r\n            if \"filter\" in query:\r\n                batch_data = [e for e in batch_data if e.get(\"value\", 0) > 50]\r\n                print(f\"  After filter: {len(batch_data)} events\")\r\n\r\n            if \"groupBy\" in query:\r\n                from collections import Counter\r\n                counts = Counter(e.get(\"type\", \"unknown\") for e in batch_data)\r\n                for t, c in counts.most_common():\r\n                    print(f\"  Type '{t}': {c} events\")\r\n\r\n            results.extend(batch_data)\r\n        return results\r\n\r\nclass StreamingDataFrame:\r\n    \"\"\"Simulate an unbounded streaming DataFrame.\"\"\"\r\n\r\n    def __init__(self, source: str):\r\n        self.source = source\r\n        self.generated_data = self._generate_data()\r\n\r\n    def _generate_data(self) -> List[Dict]:\r\n        data = []\r\n        for i in range(30):\r\n            data.append({\r\n                \"event_id\": i,\r\n                \"type\": random.choice([\"click\", \"view\", \"purchase\"]),\r\n                \"value\": random.randint(1, 100),\r\n                \"timestamp\": time.time() - random.uniform(0, 60),\r\n            })\r\n        return data\r\n\r\n    def next_batch(self, batch_id: int) -> List[Dict]:\r\n        start = batch_id * 10\r\n        end = start + 10\r\n        return self.generated_data[start:end]\r\n\r\n    def writeStream(self, output_mode: str = \"append\") -> 'StreamingQuery':\r\n        return StreamingQuery(output_mode)\r\n\r\n    def selectExpr(self, *exprs) -> 'StreamingDataFrame':\r\n        return self\r\n\r\n    def groupBy(self, col: str) -> 'GroupedStream':\r\n        return GroupedStream(self, col)\r\n\r\nclass StreamingQuery:\r\n    \"\"\"Simulate a continuous streaming query.\"\"\"\r\n\r\n    def __init__(self, output_mode: str):\r\n        self.output_mode = output_mode\r\n        self.is_active = True\r\n\r\n    def start(self) -> 'StreamingQuery':\r\n        print(f\"Streaming query started (output_mode={self.output_mode})\")\r\n        return self\r\n\r\n    def awaitTermination(self):\r\n        print(\"Query running... (awaitTermination)\")\r\n\r\n    def stop(self):\r\n        self.is_active = False\r\n        print(\"Query stopped\")\r\n\r\nclass GroupedStream:\r\n    def __init__(self, df: StreamingDataFrame, col: str):\r\n        self.df = df\r\n        self.col = col\r\n\r\n    def count(self) -> StreamingDataFrame:\r\n        print(f\"Grouped by {self.col}, counting...\")\r\n        return self.df\r\n\r\n# Example\r\nss = SparkStructuredStreaming()\r\ndf = ss.read_stream(\"kafka\")\r\nresults = ss.process(df, \"filter+groupBy\")\r\nprint(f\"\\nTotal results: {len(results)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-windowing--watermarks",
      children: "1.6 Windowing & Watermarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows group events by time. Tumbling windows are fixed non-overlapping intervals. Sliding windows have overlap. Session windows group bursts of activity. Watermarks handle late data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\r\nfrom datetime import datetime, timedelta\r\n\r\nclass WindowOperation:\r\n    \"\"\"Simulate streaming window operations.\"\"\"\r\n\r\n    def tumbling_window(self, events: List[Dict], window_size_s: int) -> Dict[int, List]:\r\n        \"\"\"Fixed non-overlapping windows.\"\"\"\r\n        windows = defaultdict(list)\r\n        for event in events:\r\n            ts = event.get(\"timestamp\", 0)\r\n            window_start = (ts // window_size_s) * window_size_s\r\n            windows[window_start].append(event)\r\n        print(f\"Tumbling window ({window_size_s}s): {len(windows)} windows\")\r\n        for w_start in sorted(windows.keys()):\r\n            print(f\"  [{w_start}s - {w_start + window_size_s}s]: {len(windows[w_start])} events\")\r\n        return dict(windows)\r\n\r\n    def sliding_window(self, events: List[Dict], window_size_s: int, slide_s: int) -> Dict[tuple, List]:\r\n        \"\"\"Overlapping windows.\"\"\"\r\n        windows = defaultdict(list)\r\n        for event in events:\r\n            ts = event.get(\"timestamp\", 0)\r\n            start = ((ts - window_size_s) // slide_s) * slide_s\r\n            while start <= ts - slide_s:\r\n                start += slide_s\r\n            for s in range(start, ts + 1, slide_s):\r\n                if s <= ts < s + window_size_s:\r\n                    windows[(s, s + window_size_s)].append(event)\r\n        print(f\"Sliding window ({window_size_s}s size, {slide_s}s slide): {len(windows)} windows\")\r\n        for (s, e) in sorted(windows.keys()):\r\n            print(f\"  [{s}s - {e}s]: {len(windows[(s, e)])} events\")\r\n        return dict(windows)\r\n\r\n    def session_window(self, events: List[Dict], gap_s: int) -> Dict[int, List]:\r\n        \"\"\"Group events by inactivity gap.\"\"\"\r\n        sorted_events = sorted(events, key=lambda e: e.get(\"timestamp\", 0))\r\n        windows = {}\r\n        current_session = []\r\n        session_start = None\r\n        session_id = 0\r\n        for event in sorted_events:\r\n            ts = event.get(\"timestamp\", 0)\r\n            if session_start is None:\r\n                session_start = ts\r\n            if current_session and ts - current_session[-1].get(\"timestamp\", 0) > gap_s:\r\n                windows[session_id] = current_session\r\n                session_id += 1\r\n                current_session = []\r\n                session_start = ts\r\n            current_session.append(event)\r\n        if current_session:\r\n            windows[session_id] = current_session\r\n        print(f\"Session window (gap={gap_s}s): {len(windows)} sessions\")\r\n        for sid, events_list in windows.items():\r\n            print(f\"  Session {sid}: {len(events_list)} events\")\r\n        return windows\r\n\r\n    def watermark(self, events: List[Dict], max_lateness_s: int) -> int:\r\n        \"\"\"Determine watermark threshold for late data.\"\"\"\r\n        event_times = [e.get(\"timestamp\", 0) for e in events]\r\n        max_event_time = max(event_times) if event_times else 0\r\n        watermark = max_event_time - max_lateness_s\r\n        late = [e for e in events if e.get(\"timestamp\", 0) < watermark]\r\n        on_time = [e for e in events if e.get(\"timestamp\", 0) >= watermark]\r\n        print(f\"Watermark at {watermark}s (max_lateness={max_lateness_s}s)\")\r\n        print(f\"  On-time events: {len(on_time)}\")\r\n        print(f\"  Late events (dropped/fired late): {len(late)}\")\r\n        return watermark\r\n\r\n# Example\r\nnow = int(time.time())\r\nevents = [\r\n    {\"event_id\": i, \"timestamp\": now + (i * 2) - random.randint(0, 5)}\r\n    for i in range(20)\r\n]\r\n\r\nw = WindowOperation()\r\nw.tumbling_window(events, 10)\r\nprint()\r\nw.sliding_window(events, 15, 5)\r\nprint()\r\nw.session_window(events, 5)\r\nprint()\r\nw.watermark(events, 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-event-time-vs-processing-time",
      children: "1.7 Event Time vs Processing Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event time is when the event actually occurred. Processing time is when the stream processor sees it. Handling this distinction correctly is critical for accurate results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TimeHandling:\r\n    \"\"\"Compare event-time vs processing-time semantics.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.arrival_times: Dict[str, float] = {}\r\n\r\n    def simulate_processing_delay(self, events: List[Dict], max_delay_s: int = 10):\r\n        \"\"\"Simulate events arriving with variable delays.\"\"\"\r\n        processed = []\r\n        for event in events:\r\n            delay = random.uniform(0, max_delay_s)\r\n            processing_time = time.time()\r\n            self.arrival_times[event[\"event_id\"]] = processing_time\r\n            processed.append({\r\n                **event,\r\n                \"processing_time\": processing_time,\r\n                \"delay_s\": round(delay, 2),\r\n            })\r\n        return processed\r\n\r\n    def compare_windowing(\r\n        self, events: List[Dict], window_size: int = 10\r\n    ) -> Dict[str, Dict]:\r\n        \"\"\"Compare event-time vs processing-time window assignments.\"\"\"\r\n        event_time_windows = defaultdict(list)\r\n        processing_time_windows = defaultdict(list)\r\n\r\n        for event in events:\r\n            # Event-time window\r\n            et = event.get(\"timestamp\", 0)\r\n            et_win = (et // window_size) * window_size\r\n            event_time_windows[et_win].append(event)\r\n\r\n            # Processing-time window\r\n            pt = event.get(\"processing_time\", 0)\r\n            pt_win = (pt // window_size) * window_size\r\n            processing_time_windows[pt_win].append(event)\r\n\r\n        print(f\"Event-time vs Processing-time (window={window_size}s):\")\r\n        all_windows = set(list(event_time_windows.keys()) + list(processing_time_windows.keys()))\r\n        for w in sorted(all_windows):\r\n            et_count = len(event_time_windows.get(w, []))\r\n            pt_count = len(processing_time_windows.get(w, []))\r\n            print(f\"  [{w}s]: event-time={et_count}, processing-time={pt_count}\")\r\n            if et_count != pt_count:\r\n                print(f\"    -> DIFFERENCE: events assigned to different windows!\")\r\n\r\n        return {\r\n            \"event_time\": dict(event_time_windows),\r\n            \"processing_time\": dict(processing_time_windows),\r\n        }\r\n\r\n# Example\r\nnow = time.time()\r\ninput_events = [\r\n    {\"event_id\": f\"e{i}\", \"timestamp\": now + (i * 3) - 2, \"value\": i}\r\n    for i in range(10)\r\n]\r\nth = TimeHandling()\r\ndelayed = th.simulate_processing_delay(input_events, max_delay_s=8)\r\nth.compare_windowing(delayed, 10)\r\n# Shows how delayed events get mis-assigned in processing-time windowing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider Uber's real-time pricing (surge) system. Millions of ride requests and driver locations arrive every minute as Kafka events. Stream processors (Flink/Spark) compute:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tumbling window (5 minutes)"
        }), ": Ride requests per geohash region"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sliding window (10 minutes, 1-minute slide)"
        }), ": Available drivers per region"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session window (30-minute gap)"
        }), ": User search sessions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When demand exceeds supply in a region, the system updates surge multipliers within 30 seconds. Without stream processing, this would be a batch job running every 15 minutes — too slow for real-time pricing. Uber's Kafka pipeline processes 10M+ events/second with sub-minute feature freshness for ML models that predict ETA and pricing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stream processing with Apache Kafka and PySpark Structured Streaming enables real-time AI. Kafka provides fault-tolerant event storage with topics, partitions, and consumer groups for horizontal scalability. Exactly-once semantics guarantees reliable processing through idempotent producers and transactional consumers. Windowing (tumbling, sliding, session) and watermarks handle time-based aggregations and late data. The choice between event time and processing time determines result accuracy. AI engineers use these patterns for fraud detection, real-time recommendations, adaptive pricing, and live monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use event-time over processing-time for accurate windowed aggregations — always include a timestamp in events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure watermarks based on your maximum expected lateness (start with 2x the observed P99 latency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Kafka's log compaction for keyed event stores and retention-based cleanup for event streams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with PySpark Structured Streaming for Spark-integrated pipelines; use Kafka Streams for JVM-native low-latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement exactly-once semantics for any financial or counting pipeline; at-least-once is acceptable for monitoring"
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
          children: "What is the key difference between event time and processing time?\r\na) Event time is always earlier than processing time\r\nb) Event time is when the event occurred; processing time is when the system processes it\r\nc) Processing time is more accurate for analytics\r\nd) Event time is set by the stream processor"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Kafka, what guarantees that a partition's messages are read in order?\r\na) Consumer group coordination\r\nb) The partition leader ensures sequential reads\r\nc) Each partition is ordered; messages within a partition have monotonically increasing offsets\r\nd) The producer assigns sequence numbers"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which window type groups events based on periods of inactivity?\r\na) Tumbling window\r\nb) Sliding window\r\nc) Session window\r\nd) Calendar window"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of a watermark in stream processing?\r\na) To compress event data for storage\r\nb) To determine how long to wait for late-arriving events before closing a window\r\nc) To partition events across consumer groups\r\nd) To encrypt messages in transit"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a Kafka consumer group achieve horizontal scalability?\r\na) Each consumer in the group reads from all partitions\r\nb) Partitions are dynamically split for more consumers\r\nc) Each partition is assigned to exactly one consumer in the group\r\nd) Consumers share offsets through ZooKeeper"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Event time is when the event occurred (embedded timestamp); processing time is when the system processes it. Event time is preferred for accurate analytics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — Kafka partitions are ordered; each message gets an incremental offset within its partition. This guarantees per-partition ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — Session windows group events separated by a gap of inactivity; ideal for user sessions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Watermarks set a threshold for late data. Events arriving after the watermark are dropped or sent to a late-data stream."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — Each partition is assigned to exactly one consumer in a group, enabling parallel consumption across consumers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-kafka-producerconsumer-in-python",
      children: "Exercise 1: Kafka Producer/Consumer in Python"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a Python script using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kafka-python"
      }), " that: (a) creates a producer sending 1000 events to a topic, (b) creates a consumer group with 2 consumers reading from that topic, (c) prints partition assignments and consumed offsets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-tumbling-window-aggregation",
      children: "Exercise 2: Tumbling Window Aggregation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use PySpark Structured Streaming (local mode) to read from a text stream, compute word counts in 10-second tumbling windows, and output to console. Test with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nc -lk 9999"
      }), " sending data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-late-data-handling",
      children: "Exercise 3: Late Data Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a simulated stream where events arrive up to 20 seconds late. Implement watermarks at 5, 10, and 15 seconds. Measure accuracy of windowed counts at each watermark setting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-consumer-group-rebalance",
      children: "Exercise 4: Consumer Group Rebalance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start 4 consumers in the same group reading from a 12-partition topic. Kill one consumer mid-processing. Observe the rebalance and partition reassignment. Measure processing gap."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-exactly-once-feature-store",
      children: "Exercise 5: Exactly-Once Feature Store"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a stream processor that reads Kafka events, computes per-user features, and writes to a simulated feature store. Ensure exactly-once: handle duplicates and failures without double-counting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Using processing time instead of event time"
        }), ": Always embed a timestamp in events at the source. Processing-time windowing gives wrong results for delayed events."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignoring partitioning strategy"
        }), ": Keying all events with the same key (e.g., constant) overloads one partition. Choose keys with high cardinality (user_id, session_id)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No watermark configuration"
        }), ": Without watermarks, the system either waits forever (infinite latency) or drops all late data. Configure based on observed lateness distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rebalancing without care"
        }), ": Consumer group rebalances can stop processing for seconds to minutes. Use static group membership or cooperative rebalancing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assuming exactly-once comes free"
        }), ": Exactly-once requires idempotent sinks, transactional producers, and careful offset management. Most systems run at-least-once with deduplication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch: bounded data, scheduled, high latency (minutes to hours)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stream: unbounded data, continuous, low latency (milliseconds to seconds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apache Kafka: distributed event store with topics and partitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topic: named channel for related events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition: ordered sequence of messages; unit of parallelism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Producer: publishes events to topics (round-robin or keyed partitioning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumer: reads events from partitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumer group: coordinated consumers sharing partition load"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exactly-once semantics: idempotent producers (no duplicates) + transactional consumers (atomic reads + writes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stream processing: Spark Structured Streaming (micro-batch), Kafka Streams (record-at-a-time), Flink"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tumbling window: fixed non-overlapping intervals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window: overlapping intervals (size + slide)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session window: inactivity-gap grouping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watermark: max expected lateness; events after watermark are late"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Event time: when event occurred (accurate but needs watermark)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Processing time: when system processed (low latency but inaccurate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checkpointing: fault tolerance mechanism saving offset progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs-previous-year-questions",
      children: "PYQs (Previous Year Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-2024",
      children: "Google (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a real-time fraud detection pipeline that processes 100K transactions/second with sub-100ms latency. Use Apache Kafka and stream processing. Discuss exactly-once semantics, windowing, and feature computation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Kafka cluster with 100 partitions across 10 brokers. Transaction events have event-time timestamps. Flink application computes features: (1) tumbling 1-minute window for per-user transaction count and total amount, (2) sliding 5-minute window with 1-minute slide for velocity checks, (3) session window (30-minute gap) for user behavior patterns. Features stored in Redis for online ML model inference. Exactly-once semantics via Kafka's transactional API and idempotent Redis writer. Watermark set at 5 seconds to handle network delays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amazon-2023",
      children: "Amazon (2023)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your recommendation system needs real-time user activity features. Design a Kafka + Spark Streaming pipeline that updates features within 30 seconds of user action. Handle late-arriving click events (up to 5 minutes late)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Kafka topic \"user-actions\" with 50 partitions keyed by user_id. Spark Structured Streaming with 10-second micro-batches. Watermark at 5 minutes. Aggregate user features: click counts, category views, dwell time. Write to a key-value store (DynamoDB/RDS) for online serving. Handle late data by appending to a separate \"late-features\" topic that batch jobs merge hourly. Output mode: update (continuous aggregation updates)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meta-2024",
      children: "Meta (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facebook's feed ranking needs real-time engagement signals. Design a system that processes 50M events/minute with exactly-once semantics and <1-minute feature freshness."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Puma (Facebook's stream processor, similar to Flink) reads from Wormhole (Kafka wrapper). Events keyed by user_id for per-user feature locality. Sliding windows (10-minute with 30-second slides) compute: like rate, comment rate, share rate, dwell time. Exactly-once via transactional checkpointing to HDFS. Watermark at 30 seconds. Feature vectors emitted to Scribble for ML inference. Late data merged via log-compacted Kafka topics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uber-2024",
      children: "Uber (2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design the real-time pricing (surge) pipeline. The system must compute supply/demand ratios per geohash every minute with 10-second latency."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Kafka topics: \"ride-requests\" (keyed by geohash), \"driver-locations\" (keyed by geohash). Flink with 1-minute tumbling windows per geohash. Join requests with driver locations within each window. Surge multiplier = max(1.0, request_count / (driver_count * 10)). Output to Aerospike for low-latency reads. Watermark at 30 seconds. Exactly-once for accurate financial calculations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-lambda-and-kappa-architectures-for-stream-processing",
      children: "Q1: Explain the Lambda and Kappa architectures for stream processing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Lambda has batch and speed layers (accurate but complex). Kappa uses a single stream processing layer with replay capability (simpler, sufficient for most use cases with Kafka's log replay)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-kafka-achieve-high-throughput",
      children: "Q2: How does Kafka achieve high throughput?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Sequential disk I/O (partition files are append-only), zero-copy transfers (sendfile syscall), batching (producer batches records), partitioning (parallel reads/writes), and page cache utilization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-kafka-and-traditional-message-queues-rabbitmq",
      children: "Q3: What is the difference between Kafka and traditional message queues (RabbitMQ)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Kafka is a distributed log (persistent, replayable, ordered per partition). RabbitMQ is a queue (ephemeral, delete-on-consume, priority-based). Kafka excels at high-throughput event streaming; RabbitMQ for task distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-handle-out-of-order-events-in-stream-processing",
      children: "Q4: How do you handle out-of-order events in stream processing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Use event-time processing with watermarks. Configure allowed lateness. Buffer events in the window until watermark advances. Late events can be sent to a separate stream for corrective updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-design-a-real-time-ml-feature-computation-pipeline-with-kafka",
      children: "Q5: Design a real-time ML feature computation pipeline with Kafka."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Kafka topic for raw events. Stream processor (Flink/Spark) reads events, computes windowed features (counts, averages, rates), writes features to online store (Redis/DynamoDB) for serving, and to offline store (S3/Delta) for training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-a-kafka-rebalance-and-how-does-it-impact-processing",
      children: "Q6: What is a Kafka rebalance and how does it impact processing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Rebalance occurs when consumers join/leave a group, redistributing partitions. During rebalance, no processing occurs (stop-the-world). Impact depends on group size and partition count. Mitigate with cooperative rebalancing (incremental)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-compare-kafka-streams-vs-spark-structured-streaming",
      children: "Q7: Compare Kafka Streams vs Spark Structured Streaming."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Kafka Streams: JVM library, record-at-a-time processing, embedded in application, no cluster needed. Spark Streaming: micro-batch model, requires Spark cluster, rich DataFrame API. Choose Kafka Streams for low-latency apps; Spark for ETL-heavy pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-migrate-from-batch-to-streaming-processing",
      children: "Q8: How do you migrate from batch to streaming processing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Start with Lambda architecture (batch + stream). Implement the streaming version in parallel. Verify results between batch and stream. Once stream is trusted, deprecate batch. Use Kafka for the unified log that feeds both."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-change-data-capture-cdc-and-how-does-it-enable-streaming",
      children: "Q9: What is change data capture (CDC) and how does it enable streaming?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": CDC captures database row-level changes (inserts, updates, deletes) as events. Tools like Debezium publish CDC events to Kafka. Enables real-time sync, cache invalidation, and event-driven architectures without dual-writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-test-a-streaming-pipeline",
      children: "Q10: How would you test a streaming pipeline?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Unit test transformation logic with static data. Integration test with embedded Kafka (Testcontainers). Test late-data handling with delayed events. Test fault tolerance by killing consumers. Verify exactly-once with duplicate injection."]
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
        }), ": Apache Kafka, stream processing, real-time, Spark Structured Streaming, Flink, event-time, watermarks, exactly-once, Kafka Streams, CDC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Built real-time ML feature pipeline on Kafka processing 1M+ events/second, reducing feature latency from 6 hours to 10 seconds\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certifications"
        }), ": Confluent Certified Developer, AWS Data Analytics, GCP Data Engineer"]
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
        }), " Draw Kafka architecture (producers, brokers, partitions, consumers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain watermarking and event-time vs processing-time with a diagram"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Describe exactly-once semantics implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Compare tumbling, sliding, session windows with use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice designing a real-time ML pipeline on a whiteboard"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " 04 — Streaming & Real-Time Data builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 04 — Streaming & Real-Time Data before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 04 — Streaming & Real-Time Data is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 04 — Streaming & Real-Time Data in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 04 — Streaming & Real-Time Data chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 04 — Streaming & Real-Time Data is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 Streaming Real Time is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Streaming Real Time is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 04 — Streaming & Real-Time Data issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 04 — Streaming & Real-Time Data in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 04 — Streaming & Real-Time Data that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 04 — Streaming & Real-Time Data is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 04 — Streaming & Real-Time Data in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 04 — Streaming & Real-Time Data and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 04 — Streaming & Real-Time Data on an empty input?"
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
      }), ": Advanced\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 70 minutes\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Chapter 01 (ETL), Chapter 03 (Spark), basic Kafka"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of 04 — Streaming & Real-Time Data from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 04 — Streaming & Real-Time Data when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 04 — Streaming & Real-Time Data twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 04 — Streaming & Real-Time Data snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 04 — Streaming & Real-Time Data listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 04 — Streaming & Real-Time Data to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 04 — Streaming & Real-Time Data by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 04 — Streaming & Real-Time Data to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Kafka: The Definitive Guide\" by Neha Narkhede et al."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Streaming Systems\" by Akidau, Chernyak, Lax"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Confluent documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.confluent.io/",
          children: "https://docs.confluent.io/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spark Structured Streaming guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 25 — builds the foundation for 04 Streaming Real Time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Streaming Real Time with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Streaming Real Time fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Streaming Real Time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Streaming Real Time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Streaming Real Time?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Streaming Real Time?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Streaming Real Time asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Streaming Real Time?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04 — Streaming & Real-Time Data is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 04 — Streaming & Real-Time Data."
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
        children: "04 — Streaming & Real-Time Data emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 04 — Streaming & Real-Time Data today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 04 — Streaming & Real-Time Data — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 04 — Streaming & Real-Time Data changes quickly; focus on fundamentals that remain stable."
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
            children: "04 Streaming Real Time is like a GPS navigation system"
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
          }), " — this chapter contributes the 04 — Streaming & Real-Time Data skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-04streamingrealtime-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 04 — Streaming & Real-Time Data in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-04streamingrealtime-flash2",
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
      "data-qid": "25dataengineering-04streamingrealtime-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 04 — Streaming & Real-Time Data approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-04streamingrealtime-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 04 — Streaming & Real-Time Data NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "25dataengineering-04streamingrealtime-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 04 — Streaming & Real-Time Data applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 04 — Streaming & Real-Time Data (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 04 — Streaming & Real-Time Data (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 04 — Streaming & Real-Time Data-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 04 — Streaming & Real-Time Data in production at scale"
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
        children: "cProfile / py-spy for performance profiling — Streaming & Real-Time Data"
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
        }), ": Add structured logging at each stage of the 04 Streaming Real Time pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 04 — Streaming & Real-Time Data in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 04 — Streaming & Real-Time Data."
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
        children: "Tell me about a time you debugged a 04 — Streaming & Real-Time Data problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 04 — Streaming & Real-Time Data is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_streaming_real_time(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Streaming Real Time.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Streaming Real Time here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
        children: "Kreps, J. et al. (2011). Kafka: A Distributed Messaging System for Log Processing. NetDB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Akidau, T. et al. (2015). The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing. VLDB."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apache Kafka Documentation. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://kafka.apache.org/documentation/",
          children: "https://kafka.apache.org/documentation/"
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
            children: "Explain 04 — Streaming & Real-Time Data without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/25-data-engineering/05-feature-stores",
        children: "05 — Feature Stores"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04 — Streaming & Real-Time Data, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 04 — Streaming & Real-Time Data depends on input size and distribution — always benchmark for your own data."
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