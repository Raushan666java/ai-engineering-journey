"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60074],{

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
const site_docs_courses_ai_engineering_placement_25_data_engineering_04_streaming_real_time_md_754_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-engineering/04-streaming-real-time","title":"04 — Streaming & Real-Time Data","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/25-data-engineering/04-streaming-real-time.md","sourceDirName":"courses/ai-engineering-placement/25-data-engineering","slug":"/ai-engineering-placement/25-data-engineering/04-streaming-real-time","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/04-streaming-real-time","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":286,"frontMatter":{"id":"04-streaming-real-time","slug":"/ai-engineering-placement/25-data-engineering/04-streaming-real-time","title":"04 — Streaming & Real-Time Data","sidebar_label":"04 — Streaming & Real-Time Data","sidebar_position":286},"sidebar":"coursesSidebar","previous":{"title":"03 — Apache Spark Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/03-apache-spark-basics"},"next":{"title":"05 — Feature Stores","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering/05-feature-stores"}}');
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
	sidebar_position: 286
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
        children: "flowchart LR\n    subgraph Producers[Data Producers]\n        WEB[Web Events]\n        APP[App Logs]\n        IOT[IoT Sensors]\n        DB[Database CDC]\n    end\n    subgraph Kafka[Apache Kafka Cluster]\n        subgraph Topic1[Topic: user-clicks]\n            P1[Partition 0]\n            P2[Partition 1]\n            P3[Partition 2]\n        end\n        subgraph Topic2[Topic: transactions]\n            P4[Partition 0]\n            P5[Partition 1]\n        end\n    end\n    subgraph StreamProcessing[Stream Processors]\n        KS[Kafka Streams]\n        SS[Spark Streaming]\n        FLINK[Apache Flink]\n    end\n    subgraph Consumers[Data Consumers]\n        ML[ML Inference]\n        DASH[Real-time Dashboards]\n        LAKE[Data Lake Sink]\n        ALERT[Alerting System]\n    end\n    WEB --> P1\n    APP --> P2\n    IOT --> P3\n    DB --> P4\n    DB --> P5\n    P1 --> KS\n    P2 --> SS\n    P3 --> FLINK\n    P4 --> KS\n    P5 --> FLINK\n    KS --> ML\n    SS --> DASH\n    FLINK --> LAKE\n    KS --> ALERT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-batch-vs-stream-processing",
      children: "1.1 Batch vs Stream Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch processing runs on bounded data at scheduled intervals. Stream processing runs continuously on unbounded data, producing results with sub-second latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport random\nfrom datetime import datetime\nfrom typing import List, Dict, Callable\n\nclass BatchProcessor:\n    \"\"\"Process data in fixed batches at scheduled intervals.\"\"\"\n\n    def __init__(self, batch_interval_hours: int = 24):\n        self.batch_interval = batch_interval_hours\n        self.batch_id = 0\n\n    def process_batch(self, data: List[Dict]) -> List[Dict]:\n        self.batch_id += 1\n        print(f\"[Batch #{self.batch_id}] Processing {len(data)} records \"\n              f\"(interval: {self.batch_interval}h)\")\n        # Simulate computation\n        time.sleep(0.5)\n        results = [{\"batch_id\": self.batch_id, **record, \"processed\": True} for record in data]\n        print(f\"[Batch #{self.batch_id}] Complete: {len(results)} results\")\n        return results\n\nclass StreamProcessor:\n    \"\"\"Process data continuously as it arrives.\"\"\"\n\n    def __init__(self, window_seconds: int = 10):\n        self.window = window_seconds\n        self.buffer: List[Dict] = []\n        self.total_processed = 0\n\n    def on_event(self, event: Dict) -> Dict:\n        \"\"\"Process a single event as it arrives.\"\"\"\n        latency_ms = random.uniform(5, 50)\n        self.total_processed += 1\n        result = {**event, \"processing_time_ms\": round(latency_ms, 2), \"processed\": True}\n        print(f\"[Stream] Event #{self.total_processed}: {event.get('event_type', 'unknown')} \"\n              f\"in {latency_ms:.1f}ms\")\n        return result\n\n    def process_window(self, events: List[Dict]) -> List[Dict]:\n        \"\"\"Process a micro-batch window of events.\"\"\"\n        print(f\"[Window {self.window}s] Processing {len(events)} events\")\n        results = []\n        for event in events:\n            result = self.on_event(event)\n            results.append(result)\n        print(f\"[Window] Complete: {len(results)} events in window\")\n        return results\n\n# Compare batch vs stream\nbatch = BatchProcessor(batch_interval_hours=24)\nstream = StreamProcessor(window_seconds=10)\n\n# Simulate 100 events arriving over time\nall_events = [\n    {\"event_id\": i, \"event_type\": random.choice([\"click\", \"view\", \"purchase\"]),\n     \"timestamp\": datetime.now().isoformat(), \"value\": random.randint(1, 100)}\n    for i in range(100)\n]\n\nprint(\"=== Batch Processing ===\")\nbatch.process_batch(all_events)\n\nprint(\"\\n=== Stream Processing ===\")\nfor event in all_events[:10]:  # Process first 10 as stream\n    stream.on_event(event)\n    time.sleep(0.05)\n# Expected output contrasts batch latency (hours) vs stream latency (ms)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-apache-kafka-fundamentals",
      children: "1.2 Apache Kafka Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka is a distributed event streaming platform. Producers write events to topics; topics are divided into partitions for parallelism; consumers read from partitions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Optional, Dict, Any\nimport json\nimport time\nimport uuid\nfrom collections import defaultdict\n\n@dataclass\nclass KafkaMessage:\n    key: str\n    value: Dict\n    topic: str\n    partition: int = 0\n    offset: int = 0\n    timestamp: float = field(default_factory=time.time)\n\nclass KafkaBroker:\n    \"\"\"Simulate a single Kafka broker for learning.\"\"\"\n\n    def __init__(self, broker_id: int = 0):\n        self.broker_id = broker_id\n        self.topics: Dict[str, Dict[int, List[KafkaMessage]]] = {}\n        self.partition_offsets: Dict[str, Dict[int, int]] = {}\n\n    def create_topic(self, topic: str, partitions: int = 1, replication_factor: int = 1):\n        self.topics[topic] = {i: [] for i in range(partitions)}\n        self.partition_offsets[topic] = {i: 0 for i in range(partitions)}\n        print(f\"Topic '{topic}' created: {partitions} partitions, RF={replication_factor}\")\n\n    def produce(self, topic: str, key: str, value: Dict) -> KafkaMessage:\n        if topic not in self.topics:\n            raise ValueError(f\"Topic {topic} does not exist\")\n        num_partitions = len(self.topics[topic])\n        partition = abs(hash(key)) % num_partitions\n        offset = self.partition_offsets[topic][partition]\n        message = KafkaMessage(\n            key=key, value=value, topic=topic,\n            partition=partition, offset=offset,\n        )\n        self.topics[topic][partition].append(message)\n        self.partition_offsets[topic][partition] += 1\n        print(f\"Produced -> {topic}[p{partition}@o{offset}]: key={key}\")\n        return message\n\n    def consume(self, topic: str, partition: int, offset: int = 0) -> Optional[KafkaMessage]:\n        if topic not in self.topics or partition not in self.topics[topic]:\n            return None\n        partition_data = self.topics[topic][partition]\n        if offset >= len(partition_data):\n            return None\n        msg = partition_data[offset]\n        print(f\"Consumed <- {topic}[p{partition}@o{offset}]: key={msg.key}\")\n        return msg\n\n    def get_high_watermark(self, topic: str, partition: int) -> int:\n        return self.partition_offsets.get(topic, {}).get(partition, 0)\n\nclass KafkaProducer:\n    \"\"\"Simulate Kafka producer with configurable partitioning.\"\"\"\n\n    def __init__(self, broker: KafkaBroker):\n        self.broker = broker\n        self.acks = 0\n        self.retries = 0\n\n    def send(self, topic: str, key: str, value: Dict) -> KafkaMessage:\n        try:\n            msg = self.broker.produce(topic, key, value)\n            self.acks += 1\n            return msg\n        except Exception as e:\n            self.retries += 1\n            print(f\"Send failed (retry {self.retries}): {e}\")\n            raise\n\nclass KafkaConsumer:\n    \"\"\"Simulate Kafka consumer with partition assignment and offset tracking.\"\"\"\n\n    def __init__(self, broker: KafkaBroker, group_id: str, auto_offset_reset: str = \"earliest\"):\n        self.broker = broker\n        self.group_id = group_id\n        self.auto_offset_reset = auto_offset_reset\n        self.assigned_partitions: List[tuple] = []\n        self.current_offsets: Dict[tuple, int] = {}\n        self.commit_offsets: Dict[tuple, int] = {}\n\n    def assign(self, topic: str, partitions: List[int]):\n        self.assigned_partitions = [(topic, p) for p in partitions]\n        for tp in self.assigned_partitions:\n            if self.auto_offset_reset == \"earliest\":\n                self.current_offsets[tp] = 0\n            elif self.auto_offset_reset == \"latest\":\n                self.current_offsets[tp] = self.broker.get_high_watermark(tp[0], tp[1])\n            self.commit_offsets[tp] = self.current_offsets[tp]\n        topics_str = \", \".join(f\"{t}[p{p}]\" for t, p in self.assigned_partitions)\n        print(f\"Consumer (group={self.group_id}) assigned: {topics_str}\")\n\n    def poll(self) -> Optional[KafkaMessage]:\n        for tp in self.assigned_partitions:\n            topic, partition = tp\n            offset = self.current_offsets.get(tp, 0)\n            msg = self.broker.consume(topic, partition, offset)\n            if msg:\n                self.current_offsets[tp] = offset + 1\n                return msg\n        return None\n\n    def commit(self):\n        self.commit_offsets = self.current_offsets.copy()\n        print(f\"Consumer (group={self.group_id}) committed offsets: {self.commit_offsets}\")\n\n# Example\nbroker = KafkaBroker(broker_id=1)\nbroker.create_topic(\"user-clicks\", partitions=3, replication_factor=3)\nbroker.create_topic(\"transactions\", partitions=2, replication_factor=3)\n\nproducer = KafkaProducer(broker)\nfor i in range(10):\n    producer.send(\"user-clicks\", f\"user_{i % 5}\", {\n        \"user_id\": i % 5,\n        \"event_type\": random.choice([\"click\", \"view\"]),\n        \"page\": f\"/product/{random.randint(1, 100)}\",\n        \"timestamp\": time.time(),\n    })\n\nconsumer = KafkaConsumer(broker, group_id=\"click-processor\")\nconsumer.assign(\"user-clicks\", [0, 1, 2])\nfor _ in range(5):\n    msg = consumer.poll()\n    if msg:\n        print(f\"  Received: {msg.key} -> {msg.value['event_type']}\")\nconsumer.commit()\n# Expected output shows Kafka produce/consume flow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-consumer-groups--parallelism",
      children: "1.3 Consumer Groups & Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consumer groups enable horizontal scaling. Each partition is consumed by exactly one consumer in a group, enabling parallel processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConsumerGroup:\n    \"\"\"Simulate Kafka consumer group rebalancing.\"\"\"\n\n    def __init__(self, group_id: str):\n        self.group_id = group_id\n        self.members: List[KafkaConsumer] = []\n        self._assignment_strategy = \"range\"\n\n    def add_member(self, consumer: KafkaConsumer):\n        self.members.append(consumer)\n        self._rebalance()\n        print(f\"Consumer group '{self.group_id}': {len(self.members)} members\")\n\n    def remove_member(self, consumer_id: str):\n        self.members = [m for m in self.members if m.group_id != consumer_id]\n        self._rebalance()\n        print(f\"Consumer removed. Group '{self.group_id}': {len(self.members)} members\")\n\n    def _rebalance(self):\n        \"\"\"Assign partitions to consumers (range assign strategy).\"\"\"\n        num_members = len(self.members)\n        if num_members == 0:\n            return\n        # Simplified range assignment\n        all_partitions = [(f\"topic-{t}\", p) for t in range(1) for p in range(6)]\n        partitions_per_member = len(all_partitions) // num_members\n        remainder = len(all_partitions) % num_members\n        start = 0\n        for i, member in enumerate(self.members):\n            extra = 1 if i < remainder else 0\n            member_partitions = all_partitions[start:start + partitions_per_member + extra]\n            start += partitions_per_member + extra\n            # Clear and reassign\n            topics_seen = set()\n            for t, p in member_partitions:\n                topics_seen.add(t)\n            for t in topics_seen:\n                ps = [p for tp, p in member_partitions if tp == t]\n                member.assign(t, ps)\n        print(f\"Rebalanced {len(all_partitions)} partitions across {num_members} consumers\")\n\n    def process_all(self, messages: List[KafkaMessage]):\n        \"\"\"Distribute messages to consumers.\"\"\"\n        for msg in messages:\n            for member in self.members:\n                if (msg.topic, msg.partition) in member.current_offsets:\n                    member.poll()\n                    member.commit()\n\n# Example\nbroker2 = KafkaBroker(broker_id=2)\nbroker2.create_topic(\"events\", partitions=6)\n\ngroup = ConsumerGroup(\"my-group\")\nfor i in range(3):\n    c = KafkaConsumer(broker2, f\"consumer-{i}\")\n    group.add_member(c)\n\nproducer2 = KafkaProducer(broker2)\nfor i in range(12):\n    producer2.send(\"events\", f\"key_{i}\", {\"event_id\": i, \"value\": f\"data_{i}\"})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-exactly-once-semantics",
      children: "1.4 Exactly-Once Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exactly-once semantics (EOS) ensures each event is processed exactly once — no duplicates, no gaps. Kafka achieves this through idempotent producers and transactional consumers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ExactlyOnceProcessor:\n    \"\"\"Simulate Kafka exactly-once semantics.\"\"\"\n\n    def __init__(self):\n        self.processed_ids: set = set()\n        self.pending_transactions: Dict[str, List] = {}\n        self.idempotent_producer = IdempotentProducer()\n\n    def process_with_eos(self, event: Dict, transaction_id: str) -> bool:\n        \"\"\"Process event with exactly-once guarantee.\"\"\"\n        event_id = event.get(\"event_id\")\n        if not event_id:\n            return False\n\n        # Deduplication: skip if already processed\n        if event_id in self.processed_ids:\n            print(f\"  [EOS] Duplicate detected, skipping: {event_id}\")\n            return True\n\n        # Begin transaction\n        self.pending_transactions[transaction_id] = [event]\n\n        try:\n            # Process the event\n            result = self._execute_transaction(event)\n            # Commit: mark as processed\n            self.processed_ids.add(event_id)\n            self.idempotent_producer.send(event)\n            del self.pending_transactions[transaction_id]\n            print(f\"  [EOS] Committed: {event_id}\")\n            return True\n        except Exception as e:\n            # Abort: rollback\n            print(f\"  [EOS] Aborted: {event_id} ({e})\")\n            del self.pending_transactions[transaction_id]\n            return False\n\n    def _execute_transaction(self, event: Dict) -> Any:\n        \"\"\"Simulate business logic execution.\"\"\"\n        if random.random() < 0.1:\n            raise ValueError(\"Simulated failure\")\n        return {\"status\": \"success\", \"event\": event}\n\nclass IdempotentProducer:\n    \"\"\"Idempotent producer prevents duplicates at the broker level.\"\"\"\n\n    def __init__(self):\n        self.seen_ids: set = set()\n\n    def send(self, event: Dict) -> bool:\n        event_id = event.get(\"event_id\")\n        if event_id in self.seen_ids:\n            return True  # Already sent\n        self.seen_ids.add(event_id)\n        return True\n\n# Example\nprocessor = ExactlyOnceProcessor()\nevents = [\n    {\"event_id\": f\"evt_{i}\", \"type\": \"transaction\", \"amount\": random.randint(10, 1000)}\n    for i in range(20)\n]\n# Introduce a duplicate\nevents.append(events[0])\n\nfor i, event in enumerate(events):\n    success = processor.process_with_eos(event, f\"txn-{uuid.uuid4()}\")\n    time.sleep(0.01)\nprint(f\"\\nProcessed {len(processor.processed_ids)} unique events (1 duplicate skipped)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-stream-processing-with-pyspark-structured-streaming",
      children: "1.5 Stream Processing with PySpark Structured Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PySpark Structured Streaming treats streams as unbounded DataFrames with continuous processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SparkStructuredStreaming:\n    \"\"\"Simulate Spark Structured Streaming concepts.\"\"\"\n\n    def __init__(self):\n        self.batch_duration = 10  # seconds\n        self.processing_details = []\n\n    def read_stream(self, source: str = \"kafka\") -> 'StreamingDataFrame':\n        print(f\"Reading stream from {source}\")\n        return StreamingDataFrame(source)\n\n    def process(self, df: 'StreamingDataFrame', query: str) -> List[Dict]:\n        \"\"\"Simulate running a streaming query.\"\"\"\n        results = []\n        for batch_id in range(3):  # Simulate 3 micro-batches\n            batch_data = df.next_batch(batch_id)\n            print(f\"\\nBatch {batch_id}: processing {len(batch_data)} events\")\n\n            if \"filter\" in query:\n                batch_data = [e for e in batch_data if e.get(\"value\", 0) > 50]\n                print(f\"  After filter: {len(batch_data)} events\")\n\n            if \"groupBy\" in query:\n                from collections import Counter\n                counts = Counter(e.get(\"type\", \"unknown\") for e in batch_data)\n                for t, c in counts.most_common():\n                    print(f\"  Type '{t}': {c} events\")\n\n            results.extend(batch_data)\n        return results\n\nclass StreamingDataFrame:\n    \"\"\"Simulate an unbounded streaming DataFrame.\"\"\"\n\n    def __init__(self, source: str):\n        self.source = source\n        self.generated_data = self._generate_data()\n\n    def _generate_data(self) -> List[Dict]:\n        data = []\n        for i in range(30):\n            data.append({\n                \"event_id\": i,\n                \"type\": random.choice([\"click\", \"view\", \"purchase\"]),\n                \"value\": random.randint(1, 100),\n                \"timestamp\": time.time() - random.uniform(0, 60),\n            })\n        return data\n\n    def next_batch(self, batch_id: int) -> List[Dict]:\n        start = batch_id * 10\n        end = start + 10\n        return self.generated_data[start:end]\n\n    def writeStream(self, output_mode: str = \"append\") -> 'StreamingQuery':\n        return StreamingQuery(output_mode)\n\n    def selectExpr(self, *exprs) -> 'StreamingDataFrame':\n        return self\n\n    def groupBy(self, col: str) -> 'GroupedStream':\n        return GroupedStream(self, col)\n\nclass StreamingQuery:\n    \"\"\"Simulate a continuous streaming query.\"\"\"\n\n    def __init__(self, output_mode: str):\n        self.output_mode = output_mode\n        self.is_active = True\n\n    def start(self) -> 'StreamingQuery':\n        print(f\"Streaming query started (output_mode={self.output_mode})\")\n        return self\n\n    def awaitTermination(self):\n        print(\"Query running... (awaitTermination)\")\n\n    def stop(self):\n        self.is_active = False\n        print(\"Query stopped\")\n\nclass GroupedStream:\n    def __init__(self, df: StreamingDataFrame, col: str):\n        self.df = df\n        self.col = col\n\n    def count(self) -> StreamingDataFrame:\n        print(f\"Grouped by {self.col}, counting...\")\n        return self.df\n\n# Example\nss = SparkStructuredStreaming()\ndf = ss.read_stream(\"kafka\")\nresults = ss.process(df, \"filter+groupBy\")\nprint(f\"\\nTotal results: {len(results)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-windowing--watermarks",
      children: "1.6 Windowing & Watermarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows group events by time. Tumbling windows are fixed non-overlapping intervals. Sliding windows have overlap. Session windows group bursts of activity. Watermarks handle late data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\nfrom datetime import datetime, timedelta\n\nclass WindowOperation:\n    \"\"\"Simulate streaming window operations.\"\"\"\n\n    def tumbling_window(self, events: List[Dict], window_size_s: int) -> Dict[int, List]:\n        \"\"\"Fixed non-overlapping windows.\"\"\"\n        windows = defaultdict(list)\n        for event in events:\n            ts = event.get(\"timestamp\", 0)\n            window_start = (ts // window_size_s) * window_size_s\n            windows[window_start].append(event)\n        print(f\"Tumbling window ({window_size_s}s): {len(windows)} windows\")\n        for w_start in sorted(windows.keys()):\n            print(f\"  [{w_start}s - {w_start + window_size_s}s]: {len(windows[w_start])} events\")\n        return dict(windows)\n\n    def sliding_window(self, events: List[Dict], window_size_s: int, slide_s: int) -> Dict[tuple, List]:\n        \"\"\"Overlapping windows.\"\"\"\n        windows = defaultdict(list)\n        for event in events:\n            ts = event.get(\"timestamp\", 0)\n            start = ((ts - window_size_s) // slide_s) * slide_s\n            while start <= ts - slide_s:\n                start += slide_s\n            for s in range(start, ts + 1, slide_s):\n                if s <= ts < s + window_size_s:\n                    windows[(s, s + window_size_s)].append(event)\n        print(f\"Sliding window ({window_size_s}s size, {slide_s}s slide): {len(windows)} windows\")\n        for (s, e) in sorted(windows.keys()):\n            print(f\"  [{s}s - {e}s]: {len(windows[(s, e)])} events\")\n        return dict(windows)\n\n    def session_window(self, events: List[Dict], gap_s: int) -> Dict[int, List]:\n        \"\"\"Group events by inactivity gap.\"\"\"\n        sorted_events = sorted(events, key=lambda e: e.get(\"timestamp\", 0))\n        windows = {}\n        current_session = []\n        session_start = None\n        session_id = 0\n        for event in sorted_events:\n            ts = event.get(\"timestamp\", 0)\n            if session_start is None:\n                session_start = ts\n            if current_session and ts - current_session[-1].get(\"timestamp\", 0) > gap_s:\n                windows[session_id] = current_session\n                session_id += 1\n                current_session = []\n                session_start = ts\n            current_session.append(event)\n        if current_session:\n            windows[session_id] = current_session\n        print(f\"Session window (gap={gap_s}s): {len(windows)} sessions\")\n        for sid, events_list in windows.items():\n            print(f\"  Session {sid}: {len(events_list)} events\")\n        return windows\n\n    def watermark(self, events: List[Dict], max_lateness_s: int) -> int:\n        \"\"\"Determine watermark threshold for late data.\"\"\"\n        event_times = [e.get(\"timestamp\", 0) for e in events]\n        max_event_time = max(event_times) if event_times else 0\n        watermark = max_event_time - max_lateness_s\n        late = [e for e in events if e.get(\"timestamp\", 0) < watermark]\n        on_time = [e for e in events if e.get(\"timestamp\", 0) >= watermark]\n        print(f\"Watermark at {watermark}s (max_lateness={max_lateness_s}s)\")\n        print(f\"  On-time events: {len(on_time)}\")\n        print(f\"  Late events (dropped/fired late): {len(late)}\")\n        return watermark\n\n# Example\nnow = int(time.time())\nevents = [\n    {\"event_id\": i, \"timestamp\": now + (i * 2) - random.randint(0, 5)}\n    for i in range(20)\n]\n\nw = WindowOperation()\nw.tumbling_window(events, 10)\nprint()\nw.sliding_window(events, 15, 5)\nprint()\nw.session_window(events, 5)\nprint()\nw.watermark(events, 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-event-time-vs-processing-time",
      children: "1.7 Event Time vs Processing Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event time is when the event actually occurred. Processing time is when the stream processor sees it. Handling this distinction correctly is critical for accurate results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TimeHandling:\n    \"\"\"Compare event-time vs processing-time semantics.\"\"\"\n\n    def __init__(self):\n        self.arrival_times: Dict[str, float] = {}\n\n    def simulate_processing_delay(self, events: List[Dict], max_delay_s: int = 10):\n        \"\"\"Simulate events arriving with variable delays.\"\"\"\n        processed = []\n        for event in events:\n            delay = random.uniform(0, max_delay_s)\n            processing_time = time.time()\n            self.arrival_times[event[\"event_id\"]] = processing_time\n            processed.append({\n                **event,\n                \"processing_time\": processing_time,\n                \"delay_s\": round(delay, 2),\n            })\n        return processed\n\n    def compare_windowing(\n        self, events: List[Dict], window_size: int = 10\n    ) -> Dict[str, Dict]:\n        \"\"\"Compare event-time vs processing-time window assignments.\"\"\"\n        event_time_windows = defaultdict(list)\n        processing_time_windows = defaultdict(list)\n\n        for event in events:\n            # Event-time window\n            et = event.get(\"timestamp\", 0)\n            et_win = (et // window_size) * window_size\n            event_time_windows[et_win].append(event)\n\n            # Processing-time window\n            pt = event.get(\"processing_time\", 0)\n            pt_win = (pt // window_size) * window_size\n            processing_time_windows[pt_win].append(event)\n\n        print(f\"Event-time vs Processing-time (window={window_size}s):\")\n        all_windows = set(list(event_time_windows.keys()) + list(processing_time_windows.keys()))\n        for w in sorted(all_windows):\n            et_count = len(event_time_windows.get(w, []))\n            pt_count = len(processing_time_windows.get(w, []))\n            print(f\"  [{w}s]: event-time={et_count}, processing-time={pt_count}\")\n            if et_count != pt_count:\n                print(f\"    -> DIFFERENCE: events assigned to different windows!\")\n\n        return {\n            \"event_time\": dict(event_time_windows),\n            \"processing_time\": dict(processing_time_windows),\n        }\n\n# Example\nnow = time.time()\ninput_events = [\n    {\"event_id\": f\"e{i}\", \"timestamp\": now + (i * 3) - 2, \"value\": i}\n    for i in range(10)\n]\nth = TimeHandling()\ndelayed = th.simulate_processing_delay(input_events, max_delay_s=8)\nth.compare_windowing(delayed, 10)\n# Shows how delayed events get mis-assigned in processing-time windowing\n"
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
          children: "What is the key difference between event time and processing time?\na) Event time is always earlier than processing time\nb) Event time is when the event occurred; processing time is when the system processes it\nc) Processing time is more accurate for analytics\nd) Event time is set by the stream processor"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Kafka, what guarantees that a partition's messages are read in order?\na) Consumer group coordination\nb) The partition leader ensures sequential reads\nc) Each partition is ordered; messages within a partition have monotonically increasing offsets\nd) The producer assigns sequence numbers"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which window type groups events based on periods of inactivity?\na) Tumbling window\nb) Sliding window\nc) Session window\nd) Calendar window"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of a watermark in stream processing?\na) To compress event data for storage\nb) To determine how long to wait for late-arriving events before closing a window\nc) To partition events across consumer groups\nd) To encrypt messages in transit"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a Kafka consumer group achieve horizontal scalability?\na) Each consumer in the group reads from all partitions\nb) Partitions are dynamically split for more consumers\nc) Each partition is assigned to exactly one consumer in the group\nd) Consumers share offsets through ZooKeeper"
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
        children: "The time complexity of the standard approach to 04 — Streaming & Real-Time Data is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 — Streaming & Real-Time Data is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
      }), ": Advanced\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 70 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 04 — Streaming & Real-Time Data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 04 — Streaming & Real-Time Data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 04 — Streaming & Real-Time Data fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 04 — Streaming & Real-Time Data is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 04 — Streaming & Real-Time Data is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 — Streaming & Real-Time Data, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 — Streaming & Real-Time Data asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing 04 — Streaming & Real-Time Data."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04 — Streaming & Real-Time Data appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 04 — Streaming & Real-Time Data helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 04 — Streaming & Real-Time Data concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 04 — Streaming & Real-Time Data skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 04 — Streaming & Real-Time Data to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "04 — Streaming & Real-Time Data is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the 04 — Streaming & Real-Time Data skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of 04 — Streaming & Real-Time Data code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 04 — Streaming & Real-Time Data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 04 — Streaming & Real-Time Data code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the 04 — Streaming & Real-Time Data example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 04 — Streaming & Real-Time Data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 04 — Streaming & Real-Time Data logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses 04 — Streaming & Real-Time Data daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 04 — Streaming & Real-Time Data patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 04 — Streaming & Real-Time Data principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 04 — Streaming & Real-Time Data shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 04 — Streaming & Real-Time Data to the business outcome, not just the code."]
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