"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[84728],{

/***/ 89999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_big_data_03_spark_basics_md_051_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-big-data-03-spark-basics-md-051.json
const site_docs_courses_big_data_03_spark_basics_md_051_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/big-data/03-spark-basics","title":"Chapter 3: Apache Spark Basics","description":"Previous Hadoop ? HDFS, MapReduce & YARN | Next Spark MLlib","source":"@site/docs/courses/big-data/03-spark-basics.md","sourceDirName":"courses/big-data","slug":"/big-data/03-spark-basics","permalink":"/ai-engineering-journey/big-data/03-spark-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-spark-basics","slug":"/big-data/03-spark-basics","title":"Chapter 3: Apache Spark Basics","sidebar_label":"Chapter 3: Apache Spark Basics","sidebar_position":3},"sidebar":"course-big-data","previous":{"title":"Chapter 2: Hadoop ? HDFS, MapReduce & YARN","permalink":"/ai-engineering-journey/big-data/02-hadoop"},"next":{"title":"Chapter 4: Spark MLlib","permalink":"/ai-engineering-journey/big-data/04-spark-mllib"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/big-data/03-spark-basics.md


const frontMatter = {
	id: '03-spark-basics',
	slug: '/big-data/03-spark-basics',
	title: 'Chapter 3: Apache Spark Basics',
	sidebar_label: 'Chapter 3: Apache Spark Basics',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Apache Spark Basics';

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
  "value": "3.1 Spark Architecture",
  "id": "31-spark-architecture",
  "level": 2
}, {
  "value": "3.2 RDDs (Resilient Distributed Datasets)",
  "id": "32-rdds-resilient-distributed-datasets",
  "level": 2
}, {
  "value": "3.2.1 Creating RDDs",
  "id": "321-creating-rdds",
  "level": 3
}, {
  "value": "3.2.2 RDD Transformations (Lazy)",
  "id": "322-rdd-transformations-lazy",
  "level": 3
}, {
  "value": "3.2.3 RDD Actions (Eager)",
  "id": "323-rdd-actions-eager",
  "level": 3
}, {
  "value": "3.3 DataFrames",
  "id": "33-dataframes",
  "level": 2
}, {
  "value": "3.3.1 Creating DataFrames",
  "id": "331-creating-dataframes",
  "level": 3
}, {
  "value": "3.3.2 DataFrame Operations",
  "id": "332-dataframe-operations",
  "level": 3
}, {
  "value": "3.3.3 User-Defined Functions (UDFs)",
  "id": "333-user-defined-functions-udfs",
  "level": 3
}, {
  "value": "3.4 Spark SQL",
  "id": "34-spark-sql",
  "level": 2
}, {
  "value": "3.5 Catalyst Optimizer",
  "id": "35-catalyst-optimizer",
  "level": 2
}, {
  "value": "3.6 Tungsten Execution Engine",
  "id": "36-tungsten-execution-engine",
  "level": 2
}, {
  "value": "3.7 Joins in Spark",
  "id": "37-joins-in-spark",
  "level": 2
}, {
  "value": "3.8 Spark Configuration &amp; Tuning",
  "id": "38-spark-configuration--tuning",
  "level": 2
}, {
  "value": "3.8.1 Key Configuration Parameters",
  "id": "381-key-configuration-parameters",
  "level": 3
}, {
  "value": "3.8.2 Partition Size Rule",
  "id": "382-partition-size-rule",
  "level": 3
}, {
  "value": "3.8.3 Caching &amp; Persistence",
  "id": "383-caching--persistence",
  "level": 3
}, {
  "value": "3.9 Reading from S3",
  "id": "39-reading-from-s3",
  "level": 2
}, {
  "value": "3.10 Spark on Kubernetes",
  "id": "310-spark-on-kubernetes",
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
  "value": "3.11 Spark Execution Plan Visualization",
  "id": "311-spark-execution-plan-visualization",
  "level": 2
}, {
  "value": "3.12 Join Strategy Decision Flow",
  "id": "312-join-strategy-decision-flow",
  "level": 2
}, {
  "value": "3.13 TypeScript Spark Simulator",
  "id": "313-typescript-spark-simulator",
  "level": 2
}, {
  "value": "SparkSession Builder",
  "id": "sparksession-builder",
  "level": 3
}, {
  "value": "RDD Simulator with Lazy DAG",
  "id": "rdd-simulator-with-lazy-dag",
  "level": 3
}, {
  "value": "DataFrame Operation Simulator",
  "id": "dataframe-operation-simulator",
  "level": 3
}, {
  "value": "Partition Tuning Worked Example",
  "id": "partition-tuning-worked-example",
  "level": 3
}, {
  "value": "TypeScript: Spark Lineage DAG Builder &amp; Join Strategy Advisor",
  "id": "typescript-spark-lineage-dag-builder--join-strategy-advisor",
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
        id: "chapter-3-apache-spark-basics",
        children: "Chapter 3: Apache Spark Basics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/big-data/02-hadoop",
          children: "Chapter 2: Hadoop ? HDFS, MapReduce & YARN"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/big-data/04-spark-mllib",
          children: "Chapter 4: Spark MLlib"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manipulate RDDs and DataFrames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write Spark SQL queries and optimize them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Catalyst optimizer and Tungsten execution engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Spark applications for performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and write data from S3, HDFS, and local files"
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
            children: "Spark Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver schedules tasks on distributed executors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure executor count, cores, and memory for performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, partitioned collections processed in parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DataFrames over RDDs for production code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataFrames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDDs with schema, optimized via Catalyst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher-level API with automatic query optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spark SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL queries run through Catalyst optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write SQL for readability, DataFrame API for programmatic access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalyst Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms queries into efficient physical plans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".explain()"
            }), " to verify optimization"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tungsten Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-heap memory, cache-aware, code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable whole-stage codegen for 2-5x speedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast for small tables, sort-merge for large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know when each join strategy applies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Spark Architecture] --> B[RDDs Transformations]\n    B --> C[RDDs Actions]\n    C --> D[DataFrames]\n    D --> E[Spark SQL]\n    E --> F[Catalyst Optimizer]\n    F --> G[Tungsten Engine]\n    G --> H[Joins]\n    H --> I[Configuration & Tuning]\n    I --> J[S3 & Kubernetes]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-spark-architecture",
      children: "3.1 Spark Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spark has a master/worker architecture. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "driver"
      }), " runs the user's main program and schedules tasks on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "executors"
      }), " running on worker nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/big-data/ch03-spark-architecture.png",
        alt: "Spark Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/big-data/ch03-spark-execution.png",
        alt: "Spark Execution Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\n\nspark = SparkSession.builder \\\n    .appName(\"architecture-demo\") \\\n    .config(\"spark.executor.instances\", 4) \\\n    .config(\"spark.executor.cores\", 4) \\\n    .config(\"spark.executor.memory\", \"8g\") \\\n    .config(\"spark.driver.memory\", \"4g\") \\\n    .getOrCreate()\n\n# Each executor = 4 cores ? 8 GB memory\n# Total cluster resources: 4 executors ? 4 cores = 16 cores\n#                           4 executors ? 8 GB = 32 GB memory\nprint(f\"Total cores: {spark.sparkContext.defaultParallelism}\")\nspark.stop()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Spark's master/worker architecture runs a driver that schedules parallel tasks on distributed executors, with resource allocation configurable per application."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-rdds-resilient-distributed-datasets",
      children: "3.2 RDDs (Resilient Distributed Datasets)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RDDs are the fundamental data structure in Spark: an immutable, partitioned collection of records that can be processed in parallel."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "321-creating-rdds",
      children: "3.2.1 Creating RDDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\n\nspark = SparkSession.builder.appName(\"rdd-demo\").getOrCreate()\nsc = spark.sparkContext\n\n# From a Python list\nrdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nprint(f\"Partitions: {rdd.getNumPartitions()}\")\nprint(f\"Data: {rdd.collect()}\")\n\n# From a file\nlog_rdd = sc.textFile(\"s3://bucket/logs/*.log\")\nprint(f\"Lines: {log_rdd.count()}\")\n\n# With custom partition count\nrdd_8 = sc.parallelize(range(1000), numSlices=8)\nprint(f\"Partitions: {rdd_8.getNumPartitions()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "322-rdd-transformations-lazy",
      children: "3.2.2 RDD Transformations (Lazy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Transformations are lazy ? nothing happens until an action is called\nrdd = sc.parallelize(range(1, 1001))\n\n# map: apply function to each element\nsquares = rdd.map(lambda x: x * x)\n\n# filter: keep elements matching predicate\nevens = rdd.filter(lambda x: x % 2 == 0)\n\n# flatMap: each input produces 0 or more outputs\nwords = sc.parallelize([\"hello world\", \"spark is fast\"])\nword_list = words.flatMap(lambda line: line.split())\nprint(word_list.collect())\n\n# reduceByKey: aggregate by key\npairs = sc.parallelize([(\"a\", 1), (\"b\", 2), (\"a\", 3), (\"b\", 4)])\nsum_by_key = pairs.reduceByKey(lambda a, b: a + b)\nprint(sum_by_key.collect())  # [(\"a\", 4), (\"b\", 6)]\n\n# sortBy: order by key/value\nsorted_pairs = sum_by_key.sortBy(lambda x: x[1], ascending=False)\nprint(sorted_pairs.collect())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "323-rdd-actions-eager",
      children: "3.2.3 RDD Actions (Eager)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Actions trigger computation and return results\nrdd = sc.parallelize(range(1, 1001))\n\n# collect: return all elements to driver (dangerous for large datasets)\nsmall_sample = sc.parallelize(range(10))\nprint(small_sample.collect())\n\n# take: return first N elements\nprint(rdd.take(5))\n\n# count: total elements\nprint(f\"Count: {rdd.count()}\")\n\n# reduce: aggregate elements\ntotal = rdd.reduce(lambda a, b: a + b)\nprint(f\"Sum: {total}\")\n\n# foreach: execute side-effecting function on each element\nrdd.foreach(lambda x: x * x)  # No return value\n\n# saveAsTextFile: write to disk\nrdd.filter(lambda x: x % 2 == 0).saveAsTextFile(\"output/evens\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " RDDs are lazy-evaluated immutable collections ? transformations build a DAG and actions trigger execution, enabling fault-tolerant distributed computation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-dataframes",
      children: "3.3 DataFrames"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataFrames are RDDs with a schema. They provide a higher-level API with better optimization through the Catalyst optimizer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "331-creating-dataframes",
      children: "3.3.1 Creating DataFrames"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql import SparkSession\nfrom pyspark.sql.types import StructType, StructField, StringType, IntegerType\n\nspark = SparkSession.builder.appName(\"df-demo\").getOrCreate()\n\n# From a list of dicts\ndata = [{\"name\": \"Alice\", \"age\": 30}, {\"name\": \"Bob\", \"age\": 25}]\ndf = spark.createDataFrame(data)\ndf.show()\n\n# With explicit schema\nschema = StructType([\n    StructField(\"id\", IntegerType(), nullable=False),\n    StructField(\"name\", StringType(), nullable=True),\n])\ndf2 = spark.createDataFrame([(1, \"Alice\"), (2, \"Bob\")], schema)\ndf2.printSchema()\n\n# From CSV\ndf_csv = spark.read \\\n    .option(\"header\", \"true\") \\\n    .option(\"inferSchema\", \"true\") \\\n    .csv(\"data/*.csv\")\n\n# From Parquet (preferred)\ndf_parquet = spark.read.parquet(\"data/*.parquet\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "332-dataframe-operations",
      children: "3.3.2 DataFrame Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "df = spark.createDataFrame([\n    (\"Alice\", 30, \"Engineering\"),\n    (\"Bob\", 25, \"Sales\"),\n    (\"Charlie\", 35, \"Engineering\"),\n    (\"Diana\", 28, \"Marketing\"),\n], [\"name\", \"age\", \"dept\"])\n\n# Select columns\ndf.select(\"name\", \"age\").show()\n\n# Filter rows\ndf.filter(df.age > 28).show()\n\n# Add column\ndf.withColumn(\"age_next_year\", df.age + 1).show()\n\n# Group by aggregation\ndf.groupBy(\"dept\").agg(\n    {\"age\": \"avg\", \"name\": \"count\"}\n).show()\n\n# Order by\ndf.orderBy(df.age.desc()).show()\n\n# Multiple aggregations\nfrom pyspark.sql import functions as F\ndf.groupBy(\"dept\").agg(\n    F.avg(\"age\").alias(\"avg_age\"),\n    F.count(\"*\").alias(\"employee_count\"),\n    F.max(\"age\").alias(\"oldest\")\n).show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "333-user-defined-functions-udfs",
      children: "3.3.3 User-Defined Functions (UDFs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.sql.functions import udf\nfrom pyspark.sql.types import StringType\n\ndef age_category(age: int) -> str:\n    if age < 25:\n        return \"junior\"\n    elif age < 35:\n        return \"mid\"\n    else:\n        return \"senior\"\n\nage_category_udf = udf(age_category, StringType())\n\ndf.withColumn(\"level\", age_category_udf(df.age)).show()\n\n# Pandas UDF (vectorized, much faster)\nimport pandas as pd\nfrom pyspark.sql.functions import pandas_udf\n\n@pandas_udf(StringType())\ndef age_category_pandas(ages: pd.Series) -> pd.Series:\n    return ages.apply(lambda a: \"junior\" if a < 25 else \"mid\" if a < 35 else \"senior\")\n\ndf.withColumn(\"level\", age_category_pandas(df.age)).show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pandas UDFs are 10-100x faster than row-based UDFs because they operate on batches (Arrow serialization) instead of individual rows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always prefer Pandas UDFs over regular UDFs. The Arrow-based batch processing makes them 10-100x faster. For simple transformations, try to express the logic using built-in Spark SQL functions first ? they're optimized by Catalyst."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DataFrames provide a schema-aware, optimizer-driven API ? use them over RDDs for 95% of Spark workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-spark-sql",
      children: "3.4 Spark SQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "df.createOrReplaceTempView(\"employees\")\n\nresult = spark.sql(\"\"\"\n    SELECT dept,\n           avg(age) as avg_age,\n           count(*) as employee_count,\n           collect_list(name) as names\n    FROM employees\n    WHERE age > 25\n    GROUP BY dept\n    HAVING count(*) > 1\n    ORDER BY avg_age DESC\n\"\"\")\nresult.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spark SQL supports all standard SQL: JOINs, subqueries, window functions, CTEs, and set operations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Spark SQL unifies programmatic DataFrame operations with ANSI SQL, allowing teams to choose the interface that suits their skills while sharing the same optimized execution engine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-catalyst-optimizer",
      children: "3.5 Catalyst Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spark SQL uses the Catalyst optimizer to transform queries into efficient execution plans."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# View the optimized physical plan\ndf = spark.read.parquet(\"data/*.parquet\")\ndf_filtered = df.filter(df.age > 25).select(\"name\", \"dept\")\ndf_filtered.explain(\"cost\")     # Cost-based optimization\ndf_filtered.explain(\"extended\") # Full logical and physical plan\n\n# Catalyst applies:\n# 1. Predicate pushdown (filter before join)\n# 2. Projection pruning (select only needed columns)\n# 3. Constant folding (evaluate constant expressions at compile time)\n# 4. Join reordering (smaller tables first)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example of Catalyst optimization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Your query:\nSELECT name FROM employees WHERE age > 25 AND dept = 'Engineering'\n\n-- After predicate pushdown (filter applied at Parquet scan level):\n-- ParquetScan [name, age, dept] - Only reads 3 columns (projection pruning)\n--   + Filter (age > 25 AND dept = 'Engineering') - Applied during scan\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Catalyst optimizes Spark SQL through predicate pushdown, projection pruning, constant folding, and join reordering ? always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".explain(\"extended\")"
        }), " to verify your query plan."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-tungsten-execution-engine",
      children: "3.6 Tungsten Execution Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tungsten improves performance through three mechanisms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Off-heap memory:"
      }), " Bypasses JVM garbage collection overhead for intermediate data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Cache-aware computation:"
      }), " Data structures optimized for CPU cache lines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Code generation:"
      }), " Generates optimized Java bytecode at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Tungsten settings\nspark.conf.set(\"spark.sql.codegen.wholeStage\", \"true\")  # Default: true\nspark.conf.set(\"spark.memory.offHeap.enabled\", \"true\")\nspark.conf.set(\"spark.memory.offHeap.size\", \"4g\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-joins-in-spark",
      children: "3.7 Joins in Spark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "df1 = spark.createDataFrame([(1, \"Alice\"), (2, \"Bob\")], [\"id\", \"name\"])\ndf2 = spark.createDataFrame([(1, \"Engineering\"), (2, \"Sales\")], [\"id\", \"dept\"])\n\n# Broadcast join (for small tables ? avoids shuffle)\nfrom pyspark.sql.functions import broadcast\njoined = df1.join(broadcast(df2), \"id\")\njoined.explain()\n# Result: BroadcastHashJoin ? no shuffle, df2 sent to all executors\n\n# Sort-merge join (for large tables ? default)\njoined_large = large_df1.join(large_df2, \"id\")\njoined_large.explain()\n# Result: SortMergeJoin ? both sides sorted by key, then merged\n\n# Shuffle hash join (for partitioned data)\nspark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")\n# AQE will automatically choose the best join strategy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Join strategy selection:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shuffle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BroadcastHashJoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One side < 10 MB (default threshold)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SortMergeJoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides large, equi-join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShuffledHashJoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One side much smaller than the other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "broadcast()"
        }), " hint for dimension tables under 10 MB. This eliminates the shuffle entirely. For large fact-to-fact joins, Adaptive Query Execution (AQE) automatically selects the best join strategy ? enable it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spark.sql.adaptive.enabled=true"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Spark join strategy selection is critical ? broadcast joins avoid shuffles for small tables, while sort-merge joins handle large equi-joins with AQE automatically choosing the optimal strategy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-spark-configuration--tuning",
      children: "3.8 Spark Configuration & Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "381-key-configuration-parameters",
      children: "3.8.1 Key Configuration Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "spark = SparkSession.builder \\\n    .appName(\"tuned-app\") \\\n    .config(\"spark.sql.adaptive.enabled\", \"true\") \\\n    .config(\"spark.sql.adaptive.coalescePartitions.enabled\", \"true\") \\\n    .config(\"spark.sql.adaptive.skewJoin.enabled\", \"true\") \\\n    .config(\"spark.sql.shuffle.partitions\", 200) \\\n    .config(\"spark.executor.memory\", \"8g\") \\\n    .config(\"spark.executor.cores\", 4) \\\n    .config(\"spark.dynamicAllocation.enabled\", \"true\") \\\n    .config(\"spark.dynamicAllocation.maxExecutors\", 50) \\\n    .config(\"spark.serializer\", \"org.apache.spark.serializer.KryoSerializer\") \\\n    .getOrCreate()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "382-partition-size-rule",
      children: "3.8.2 Partition Size Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aim for 100-200 MB per partition after shuffles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Adjust shuffle partitions based on data size\ntotal_data_gb = 200\ntarget_mb_per_partition = 128\nideal_partitions = (total_data_gb * 1024) // target_mb_per_partition\nprint(f\"Ideal shuffle partitions: {ideal_partitions}\")\nspark.conf.set(\"spark.sql.shuffle.partitions\", ideal_partitions)\n\n# Repartition and coalesce\ndf = spark.read.parquet(\"data/*.parquet\")\n\n# Coalesce (no shuffle) ? reduce partitions\ndf_coalesced = df.coalesce(10)\n\n# Repartition (with shuffle) ? increase or redistribute\ndf_repartitioned = df.repartition(100, \"dept\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "383-caching--persistence",
      children: "3.8.3 Caching & Persistence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pyspark.storagelevel import StorageLevel\n\n# Cache in memory (default)\ndf_cached = df.cache()\ndf_cached.count()  # Materializes the cache\n\n# Explicit persistence levels\ndf.persist(StorageLevel.MEMORY_ONLY)          # Default\ndf.persist(StorageLevel.MEMORY_AND_DISK)      # Spill to disk if too large\ndf.persist(StorageLevel.DISK_ONLY)            # Always disk (for large datasets)\n\n# Unpersist when done\ndf.unpersist()\n\n# Check what is cached\nprint(spark.catalog.listTables())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "39-reading-from-s3",
      children: "3.9 Reading from S3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "spark = SparkSession.builder \\\n    .appName(\"s3-demo\") \\\n    .config(\"spark.hadoop.fs.s3a.impl\", \"org.apache.hadoop.fs.s3a.S3AFileSystem\") \\\n    .config(\"spark.hadoop.fs.s3a.access.key\", os.getenv(\"AWS_ACCESS_KEY_ID\")) \\\n    .config(\"spark.hadoop.fs.s3a.secret.key\", os.getenv(\"AWS_SECRET_ACCESS_KEY\")) \\\n    .config(\"spark.hadoop.fs.s3a.endus\", \"s3.amazonaws.com\") \\\n    .getOrCreate()\n\ndf = spark.read.parquet(\"s3a://my-bucket/analytics/*.parquet\")\ndf.write.mode(\"overwrite\").parquet(\"s3a://my-bucket/output/\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "310-spark-on-kubernetes",
      children: "3.10 Spark on Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# spark-submit to Kubernetes\n# spark-submit \\\n#   --master k8s://https://<k8s-api>:6443 \\\n#   --deploy-mode cluster \\\n#   --conf spark.kubernetes.container.image=bitnami/spark:3.5 \\\n#   --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark \\\n#   --conf spark.executor.instances=5 \\\n#   local:///app/my-job.py\n"
      })
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
            children: "RDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, partitioned collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level API, no schema optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom transformations, legacy code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataFrame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDD with schema + Catalyst optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-level API, query optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95% of Spark production code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalyst Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query plan optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule-based + cost-based optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Spark SQL and DataFrame queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tungsten Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical execution engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-heap memory, code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory processing acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small table sent to all executors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No shuffle, fast for small dimension tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star schema joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort-Merge Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides sorted and merged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles large tables, requires shuffle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fact-to-fact equi-joins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RDD Operations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map, filter, flatMap, reduceByKey (transformations); collect, take, count (actions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy evaluation ? nothing runs until an action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DataFrame API"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select, filter, withColumn, groupBy, agg, join, orderBy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "F.col()"
            }), " for column references"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spark Config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shuffle.partitions, executor.memory, adaptive.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer AQE defaults, tune partition count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "broadcast (hint), sort-merge (default), shuffled-hash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check with ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".explain()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cache(), persist(MEMORY_AND_DISK), unpersist()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache datasets reused across multiple actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-200 MB/partition after shuffle, enable AQE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many partitions = scheduling overhead"
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
            children: "RDD Transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom ETL logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature engineering pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 file processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data cleansing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataFrames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured ETL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML pipeline input preparation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parquet/S3 analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BI data preparation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalyst Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic query tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature column pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-based execution planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate pushdown for fast queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimension table lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature-key joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small config table joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup table enrichment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tungsten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient shuffle for training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced GC overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster aggregation execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AQE (Adaptive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic partition coalescing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skew join handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling query plans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed data handling in reports"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the key difference between a Spark transformation and an action?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Transformations return DataFrames; actions return RDDs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Transformations are lazily evaluated; actions trigger computation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Actions are faster than transformations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Transformations are lazily evaluated; actions trigger computation.** Transformations build a DAG of operations, but nothing executes until an action (like `count()`, `collect()`, or `save()`) is called.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you use a broadcast join in Spark?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) When both tables are large and need shuffling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When one table is small enough to fit in each executor's memory (< 10 MB default)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) When joining on non-key columns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) When the data is sorted"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When one table is small enough to fit in each executor's memory.** Spark sends the small table to every executor, avoiding an expensive shuffle. The threshold is configurable via `spark.sql.autoBroadcastJoinThreshold`.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does Catalyst's projection pruning optimize?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It removes unused columns from the scan"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It prunes partitions from the filesystem"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It removes duplicate rows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It compresses intermediate data"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) It removes unused columns from the scan.** If a query only needs 3 of 100 columns, Catalyst ensures only those 3 columns are read from the data source, dramatically reducing I/O.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "311-spark-execution-plan-visualization",
      children: "3.11 Spark Execution Plan Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph User[\"User Code\"]\n        A1[df.filter.age > 25.select name, dept]\n    end\n    subgraph Catalyst[\"Catalyst Optimizer\"]\n        B1[Unresolved Logical Plan]\n        B2[Analyzed Logical Plan]\n        B3[Optimized Logical Plan<br>predicate pushdown<br>projection pruning]\n        B4[Physical Plan]\n        B1 --> B2 --> B3 --> B4\n    end\n    subgraph Tungsten[\"Tungsten Execution\"]\n        C1[Whole-Stage CodeGen]\n        C2[Off-Heap Memory]\n        C3[Cache-Aware Layout]\n        C1 --> D1[Generated Java Bytecode]\n    end\n    subgraph Execution[\"Cluster Execution\"]\n        E1[Task Scheduler]\n        E2[Executor 1]\n        E3[Executor 2]\n        E4[Executor N]\n        E1 --> E2 & E3 & E4\n    end\n    User --> Catalyst\n    B4 --> Tungsten\n    D1 --> Execution\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "312-join-strategy-decision-flow",
      children: "3.12 Join Strategy Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Join Required] --> B{One side<br> < 10 MB?}\n    B -->|Yes| C[BroadcastHashJoin<br>No Shuffle]\n    B -->|No| D{Equi-Join?}\n    D -->|Yes| E[SortMergeJoin<br>Both Sides Shuffled]\n    D -->|No| F[NestedLoopJoin<br>Expensive]\n    C & E --> G[AQE Enabled?]\n    G -->|Yes| H[Adaptive Optimization<br>Skew Join Handling]\n    G -->|No| I[Fixed Plan]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "313-typescript-spark-simulator",
      children: "3.13 TypeScript Spark Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript classes simulate core Spark concepts ? DAG building, lazy evaluation, partition-aware execution ? to deepen understanding without a cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sparksession-builder",
      children: "SparkSession Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SparkConfig {\n  appName: string;\n  executorInstances: number;\n  executorCores: number;\n  executorMemory: string;\n  driverMemory: string;\n}\n\nclass SparkSession {\n  private config: SparkConfig;\n  private constructor(config: SparkConfig) { this.config = config; }\n\n  static builder() {\n    return new (class Builder {\n      private cfg: Partial<SparkConfig> = {};\n      appName(n: string) { this.cfg.appName = n; return this; }\n      config(k: string, v: unknown) {\n        if (k === \"spark.executor.instances\") this.cfg.executorInstances = v as number;\n        if (k === \"spark.executor.cores\") this.cfg.executorCores = v as number;\n        if (k === \"spark.executor.memory\") this.cfg.executorMemory = v as string;\n        if (k === \"spark.driver.memory\") this.cfg.driverMemory = v as string;\n        return this;\n      }\n      getOrCreate() {\n        return new SparkSession(this.cfg as SparkConfig);\n      }\n    })();\n  }\n\n  get totalCores() {\n    return (this.config.executorInstances ?? 1) * (this.config.executorCores ?? 1);\n  }\n\n  get totalMemoryGB() {\n    const parseGB = (s: string) => parseInt(s) || 1;\n    return (this.config.executorInstances ?? 1) * parseGB(this.config.executorMemory ?? \"1g\");\n  }\n\n  status() {\n    return {\n      appName: this.config.appName,\n      totalCores: this.totalCores,\n      totalMemoryGB: this.totalMemoryGB,\n    };\n  }\n}\n\n// Demo\nconst spark = SparkSession.builder()\n  .appName(\"architecture-demo\")\n  .config(\"spark.executor.instances\", 4)\n  .config(\"spark.executor.cores\", 4)\n  .config(\"spark.executor.memory\", \"8g\")\n  .config(\"spark.driver.memory\", \"4g\")\n  .getOrCreate();\n\nconsole.log(spark.status());\n// { appName: \"architecture-demo\", totalCores: 16, totalMemoryGB: 32 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rdd-simulator-with-lazy-dag",
      children: "RDD Simulator with Lazy DAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TransformFn<T, U> = (x: T) => U;\ntype Predicate<T> = (x: T) => boolean;\ntype ReduceFn<T> = (a: T, b: T) => T;\n\nclass RDD<T> {\n  private partitions: T[][];\n  private lineage: string[] = [];\n\n  constructor(data: T[], numPartitions = 2) {\n    const size = Math.ceil(data.length / numPartitions);\n    this.partitions = [];\n    for (let i = 0; i < numPartitions; i++) {\n      this.partitions.push(data.slice(i * size, (i + 1) * size));\n    }\n    this.lineage.push(`Parallelize(${data.length} items, ${numPartitions} parts)`);\n  }\n\n  private fromParts(parts: T[][], desc: string): RDD<T> {\n    const rdd = new RDD<T>([]);\n    rdd.partitions = parts;\n    rdd.lineage = [...this.lineage, desc];\n    return rdd;\n  }\n\n  // Transformation: map (lazy)\n  map<U>(fn: TransformFn<T, U>): RDD<U> {\n    const rdd = new RDD<U>([]);\n    rdd.partitions = this.partitions.map(p => p.map(fn));\n    rdd.lineage = [...this.lineage, `Map`];\n    return rdd;\n  }\n\n  // Transformation: filter (lazy)\n  filter(pred: Predicate<T>): RDD<T> {\n    return this.fromParts(\n      this.partitions.map(p => p.filter(pred)),\n      `Filter`\n    );\n  }\n\n  // Transformation: flatMap (lazy)\n  flatMap<U>(fn: (x: T) => U[]): RDD<U> {\n    const rdd = new RDD<U>([]);\n    rdd.partitions = this.partitions.map(p => p.flatMap(fn));\n    rdd.lineage = [...this.lineage, `FlatMap`];\n    return rdd;\n  }\n\n  // Transformation: reduceByKey (simulated for pair RDDs)\n  reduceByKey(fn: ReduceFn<number>): RDD<[string, number]> {\n    const reduced = this.partitions.map(p => {\n      const map = new Map<string, number>();\n      for (const [k, v] of p as unknown as [string, number][]) {\n        map.set(k, (map.get(k) ?? 0) + v);\n      }\n      return Array.from(map.entries());\n    });\n    const rdd = new RDD<[string, number]>([]);\n    rdd.partitions = reduced;\n    rdd.lineage = [...this.lineage, `ReduceByKey`];\n    return rdd;\n  }\n\n  // Action: collect (eager ? triggers computation)\n  collect(): T[] {\n    console.log(`Collect triggered. Lineage: ${this.lineage.join(\" ? \")}`);\n    return this.partitions.flat();\n  }\n\n  // Action: count\n  count(): number {\n    const n = this.partitions.reduce((s, p) => s + p.length, 0);\n    console.log(`Count: ${n}`);\n    return n;\n  }\n\n  // Action: take\n  take(n: number): T[] {\n    const result: T[] = [];\n    for (const p of this.partitions) {\n      for (const item of p) {\n        if (result.length >= n) return result;\n        result.push(item);\n      }\n    }\n    return result;\n  }\n\n  // Action: reduce\n  reduce(fn: ReduceFn<T>): T | undefined {\n    const all = this.collect();\n    if (all.length === 0) return undefined;\n    return all.reduce(fn);\n  }\n\n  getNumPartitions() { return this.partitions.length; }\n  getLineage() { return this.lineage; }\n}\n\n// Demo: Word Count\nconst lines = new RDD([\"hello world\", \"spark is fast\", \"hello spark\"]);\nconst words = lines.flatMap(line => line.split(\" \"));\nconst pairs = words.map(w => [w, 1] as [string, number]);\nconst counts = pairs.reduceByKey((a, b) => a + b);\nconst sorted = counts\n  .map(([w, c]) => ({ word: w, count: c }))\n  .collect()\n  .sort((a, b) => b.count - a.count);\n\nconsole.table(sorted);\n// +--------------------------+\n// ? (index) ?  word  ? count ?\n// +---------+--------+-------?\n// ?    0    ? hello  ?   2   ?\n// ?    1    ? spark  ?   2   ?\n// ?    2    ?  world ?   1   ?\n// ?    3    ?   is   ?   1   ?\n// ?    4    ?  fast  ?   1   ?\n// +--------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dataframe-operation-simulator",
      children: "DataFrame Operation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Row = Record<string, unknown>;\n\nclass DataFrame {\n  private rows: Row[];\n\n  constructor(rows: Row[]) { this.rows = rows; }\n\n  select(...cols: string[]): DataFrame {\n    return new DataFrame(this.rows.map(r => {\n      const selected: Row = {};\n      for (const c of cols) selected[c] = r[c];\n      return selected;\n    }));\n  }\n\n  filter(pred: (r: Row) => boolean): DataFrame {\n    return new DataFrame(this.rows.filter(pred));\n  }\n\n  withColumn(name: string, fn: (r: Row) => unknown): DataFrame {\n    return new DataFrame(this.rows.map(r => ({ ...r, [name]: fn(r) })));\n  }\n\n  groupBy(col: string): GroupedData {\n    return new GroupedData(this.rows, col);\n  }\n\n  orderBy(col: string, desc = false): DataFrame {\n    const sorted = [...this.rows].sort((a, b) => {\n      const va = a[col] as number, vb = b[col] as number;\n      return desc ? vb - va : va - vb;\n    });\n    return new DataFrame(sorted);\n  }\n\n  join(other: DataFrame, on: string): DataFrame {\n    const joined: Row[] = [];\n    for (const r1 of this.rows) {\n      for (const r2 of other.rows) {\n        if (r1[on] === r2[on]) {\n          joined.push({ ...r1, ...r2 });\n        }\n      }\n    }\n    return new DataFrame(joined);\n  }\n\n  show() { console.table(this.rows); }\n  count() { return this.rows.length; }\n}\n\nclass GroupedData {\n  constructor(private rows: Row[], private col: string) {}\n\n  agg(aggregations: Record<string, string>): DataFrame {\n    const groups = new Map<string, Row[]>();\n    for (const r of this.rows) {\n      const key = String(r[this.col]);\n      if (!groups.has(key)) groups.set(key, []);\n      groups.get(key)!.push(r);\n    }\n    const result: Row[] = [];\n    for (const [key, group] of groups) {\n      const entry: Row = { [this.col]: key };\n      for (const [targetCol, op] of Object.entries(aggregations)) {\n        if (op === \"count\") entry[`count_${targetCol}`] = group.length;\n        if (op === \"avg\") entry[`avg_${targetCol}`] = group.reduce((s, r) => s + (r[targetCol] as number), 0) / group.length;\n        if (op === \"max\") entry[`max_${targetCol}`] = Math.max(...group.map(r => r[targetCol] as number));\n      }\n      result.push(entry);\n    }\n    return new DataFrame(result);\n  }\n}\n\n// Demo\nconst df = new DataFrame([\n  { name: \"Alice\", age: 30, dept: \"Engineering\" },\n  { name: \"Bob\", age: 25, dept: \"Sales\" },\n  { name: \"Charlie\", age: 35, dept: \"Engineering\" },\n  { name: \"Diana\", age: 28, dept: \"Marketing\" },\n]);\n\ndf.filter(r => (r.age as number) > 28).select(\"name\", \"age\").show();\n// +-------------------------+\n// ? (index) ?  name   ? age ?\n// +---------+---------+-----?\n// ?    0    ? Alice   ? 30  ?\n// ?    1    ? Charlie ? 35  ?\n// +-------------------------+\n\ndf.groupBy(\"dept\").agg({ age: \"avg\", name: \"count\" }).show();\n// +--------------------------------------+\n// ?   dept      ? avg_age  ? count_name  ?\n// +-------------+----------+-------------?\n// ? Engineering ?   32.5   ?      2      ?\n// ?   Sales     ?   25.0   ?      1      ?\n// ?  Marketing  ?   28.0   ?      1      ?\n// +--------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partition-tuning-worked-example",
      children: "Partition Tuning Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function optimalPartitions(dataSizeGB: number, targetMBPerPartition = 128) {\n  const partitions = Math.ceil((dataSizeGB * 1024) / targetMBPerPartition);\n  const schedulingOverhead = partitions * 0.005; // 5ms scheduling per partition\n  const ioTimePerPartition = targetMBPerPartition / 200; // 200 MB/s read\n  const totalTime = schedulingOverhead + partitions * ioTimePerPartition;\n  return { partitions, estimatedTimeMinutes: (totalTime / 60).toFixed(2) };\n}\n\nconsole.log(optimalPartitions(200));   // ~1600 partitions, ~10.67 min\nconsole.log(optimalPartitions(50));    // ~400 partitions, ~2.67 min\nconsole.log(optimalPartitions(1024));  // ~8192 partitions, ~54.62 min\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " Too few partitions wastes cluster parallelism; too many adds scheduling overhead. The 100-200 MB/partition rule balances both."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-spark-lineage-dag-builder--join-strategy-advisor",
      children: "TypeScript: Spark Lineage DAG Builder & Join Strategy Advisor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type JoinType = \"broadcast\" | \"sort-merge\" | \"shuffle-hash\";\ntype StorageLevel = \"MEMORY_ONLY\" | \"MEMORY_AND_DISK\" | \"DISK_ONLY\";\n\ninterface LineageNode {\n  id: string; operation: string; parents: string[]; estimatedSizeGB: number; storageLevel?: StorageLevel;\n}\n\nclass LineageDAG {\n  private nodes: Map<string, LineageNode> = new Map();\n\n  add(id: string, op: string, parents: string[], sizeGB: number, storage?: StorageLevel): void {\n    this.nodes.set(id, { id, operation: op, parents, estimatedSizeGB: sizeGB, storageLevel: storage });\n  }\n\n  recommendJoin(leftSizeGB: number, rightSizeGB: number, broadcastThresholdGB: number = 10): JoinType {\n    if (Math.min(leftSizeGB, rightSizeGB) <= broadcastThresholdGB) return \"broadcast\";\n    return \"sort-merge\";\n  }\n\n  estimateShuffleSizeGB(): number {\n    let total = 0;\n    this.nodes.forEach(n => {\n      if ([\"groupBy\", \"reduceByKey\", \"join\", \"repartition\"].some(op => n.operation.includes(op))) {\n        total += n.estimatedSizeGB;\n      }\n    });\n    return Math.round(total * 100) / 100;\n  }\n\n  lineage(id: string, depth: number = 0): string {\n    const node = this.nodes.get(id); if (!node) return \"\";\n    const indent = \"  \".repeat(depth);\n    const storage = node.storageLevel ? ` [${node.storageLevel}]` : \"\";\n    let result = `${indent}${node.id}: ${node.operation} (${node.estimatedSizeGB}GB)${storage}\\n`;\n    node.parents.forEach(p => result += this.lineage(p, depth + 1));\n    return result;\n  }\n}\n\nconst dag = new LineageDAG();\ndag.add(\"1\", \"read.parquet(path=transactions)\", [], 200);\ndag.add(\"2\", \"filter(status=completed)\", [\"1\"], 150);\ndag.add(\"3\", \"groupBy(category).count()\", [\"2\"], 5);\ndag.add(\"4\", \"read.parquet(path=customers)\", [], 2);\ndag.add(\"5\", \"join(customerId)\", [\"3\", \"4\"], 5.1);\n\nconsole.log(\"Lineage DAG:\\n\" + dag.lineage(\"5\"));\nconsole.log(\"Join (5GB vs 2GB):\", dag.recommendJoin(5, 2)); // broadcast\nconsole.log(\"Join (200GB vs 150GB):\", dag.recommendJoin(200, 150)); // sort-merge\nconsole.log(\"Estimated shuffle:\", dag.estimateShuffleSizeGB(), \"GB\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// spark basics\n// hadoop-spark-ecosystem implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'spark basics', data: { topic: 'hadoop-spark-ecosystem' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// spark basics - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'big-data-ecosystem demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'big-data', chapter: 'spark basics' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('big-data-ecosystem'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- RDDs are the low-level building block; DataFrames provide a higher-level, optimized API.\n- Catalyst optimizer converts SQL/DataFrame operations into efficient physical plans.\n- Tungsten engine uses off-heap memory, cache-aware computation, and code generation.\n- Choose join strategies carefully: broadcast for small tables, sort-merge for large equi-joins.\n- Aim for 100-200 MB per partition and cache datasets reused across multiple queries.\n- Spark runs on YARN, Kubernetes, or standalone ? config is key for performance.\n\n## Exercises\n\n1. Create a DataFrame from 1 billion synthetic rows and measure the time for `groupBy().count()`. Optimize with partitioning and caching.\n2. Compare the performance of a broadcast join vs sort-merge join for a 1 GB table joining a 10 MB table.\n3. Use `df.explain(\"extended\")` to trace Catalyst optimizations for a query with filter, join, and aggregation.\n4. Write a PySpark job that reads 100 GB of Parquet from S3, filters to the last 7 days, and writes the result partitioned by date.\n5. Configure a Spark cluster on Kubernetes and run a word count job. Tune executor memory, cores, and parallelism for optimal throughput.\n6. Extend the TypeScript `RDD` class with a `distinct()` transformation that removes duplicates across partitions, then test it on `[1,1,2,3,3,4,5,5]`.\n7. Use the `DataFrame` simulator to join two tables (orders and customers) on `customerId`, filter orders above $100, and display the result.\n8. Implement a `coalesce` method in the TypeScript `RDD` class that merges partitions without a full shuffle (just concatenates adjacent partitions).\n9. Write a function that calculates the ideal number of shuffle partitions for a 500 GB dataset with 200 executors (4 cores each), targeting 128 MB/partition.\n10. Using the `SparkSession` builder, configure a cluster with 100 executors (8 GB, 4 cores each) and compute total cluster memory and cores.\n"
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