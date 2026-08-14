"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77040],{

/***/ 83499
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_19_performance_tuning_md_fac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-19-performance-tuning-md-fac.json
const site_docs_courses_database_management_systems_19_performance_tuning_md_fac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/19-performance-tuning","title":"Chapter 19: Performance Tuning","description":"Prev Database Security | Next: (Last Chapter)","source":"@site/docs/courses/database-management-systems/19-performance-tuning.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/19-performance-tuning","permalink":"/ai-engineering-journey/database-management-systems/19-performance-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"19-performance-tuning","slug":"/database-management-systems/19-performance-tuning","title":"Chapter 19: Performance Tuning","sidebar_label":"Chapter 19: Performance Tuning","sidebar_position":19},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 18: Database Security","permalink":"/ai-engineering-journey/database-management-systems/18-security"},"next":{"title":"Database Management Systems — Complete Textbook","permalink":"/ai-engineering-journey/database-management-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/19-performance-tuning.md


const frontMatter = {
	id: '19-performance-tuning',
	slug: '/database-management-systems/19-performance-tuning',
	title: 'Chapter 19: Performance Tuning',
	sidebar_label: 'Chapter 19: Performance Tuning',
	sidebar_position: 19
};
const contentTitle = 'Chapter 19: Performance Tuning';

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
  "value": "Performance Bottlenecks",
  "id": "performance-bottlenecks",
  "level": 2
}, {
  "value": "Optimization Techniques Comparison",
  "id": "optimization-techniques-comparison",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "19.1 Performance Tuning Overview",
  "id": "191-performance-tuning-overview",
  "level": 2
}, {
  "value": "Real-World Analogy: Car Engine Tuning",
  "id": "real-world-analogy-car-engine-tuning",
  "level": 3
}, {
  "value": "Steps for Systematic Performance Tuning",
  "id": "steps-for-systematic-performance-tuning",
  "level": 3
}, {
  "value": "Pseudocode: Performance Tuning Loop",
  "id": "pseudocode-performance-tuning-loop",
  "level": 3
}, {
  "value": "19.2 Query Analysis with EXPLAIN",
  "id": "192-query-analysis-with-explain",
  "level": 2
}, {
  "value": "Real-World Analogy: Diagnostic Scanner",
  "id": "real-world-analogy-diagnostic-scanner",
  "level": 3
}, {
  "value": "EXPLAIN Output Anatomy",
  "id": "explain-output-anatomy",
  "level": 3
}, {
  "value": "Dry Run Trace: EXPLAIN Output Analysis",
  "id": "dry-run-trace-explain-output-analysis",
  "level": 3
}, {
  "value": "EXPLAIN ANALYZE Key Metrics Table",
  "id": "explain-analyze-key-metrics-table",
  "level": 3
}, {
  "value": "C++ Implementation: Query Plan Analyzer",
  "id": "c-implementation-query-plan-analyzer",
  "level": 3
}, {
  "value": "Python Implementation: Slow Query Debugger",
  "id": "python-implementation-slow-query-debugger",
  "level": 3
}, {
  "value": "19.3 Index Optimization",
  "id": "193-index-optimization",
  "level": 2
}, {
  "value": "Real-World Analogy: Library Catalog System",
  "id": "real-world-analogy-library-catalog-system",
  "level": 3
}, {
  "value": "Covering Index",
  "id": "covering-index",
  "level": 3
}, {
  "value": "Index Hints",
  "id": "index-hints",
  "level": 3
}, {
  "value": "C++ Implementation: Index Selectivity Calculator",
  "id": "c-implementation-index-selectivity-calculator",
  "level": 3
}, {
  "value": "Python Implementation: Over-Indexing Detector",
  "id": "python-implementation-over-indexing-detector",
  "level": 3
}, {
  "value": "Edge Cases in Index Optimization",
  "id": "edge-cases-in-index-optimization",
  "level": 3
}, {
  "value": "19.4 Query Optimization Techniques",
  "id": "194-query-optimization-techniques",
  "level": 2
}, {
  "value": "Real-World Analogy: GPS Route Planning",
  "id": "real-world-analogy-gps-route-planning",
  "level": 3
}, {
  "value": "Numbered Steps: Query Rewrite Methodology",
  "id": "numbered-steps-query-rewrite-methodology",
  "level": 3
}, {
  "value": "Query Rewrite Techniques with Before/After",
  "id": "query-rewrite-techniques-with-beforeafter",
  "level": 3
}, {
  "value": "A&amp;D Table: Query Rewrite Approaches",
  "id": "ad-table-query-rewrite-approaches",
  "level": 3
}, {
  "value": "Pseudocode: Query Rewrite Engine",
  "id": "pseudocode-query-rewrite-engine",
  "level": 3
}, {
  "value": "19.5 Schema Optimization",
  "id": "195-schema-optimization",
  "level": 2
}, {
  "value": "Real-World Analogy: Warehouse Organization",
  "id": "real-world-analogy-warehouse-organization",
  "level": 3
}, {
  "value": "Normalization vs Denormalization Decision Table",
  "id": "normalization-vs-denormalization-decision-table",
  "level": 3
}, {
  "value": "Anti-Pattern: The Over-Normalized Schema",
  "id": "anti-pattern-the-over-normalized-schema",
  "level": 3
}, {
  "value": "Schema Optimization Patterns",
  "id": "schema-optimization-patterns",
  "level": 3
}, {
  "value": "19.6 Configuration Tuning",
  "id": "196-configuration-tuning",
  "level": 2
}, {
  "value": "Real-World Analogy: Engine Control Unit",
  "id": "real-world-analogy-engine-control-unit",
  "level": 3
}, {
  "value": "Key Configuration Parameters",
  "id": "key-configuration-parameters",
  "level": 3
}, {
  "value": "Buffer Pool Hit Ratio Analysis",
  "id": "buffer-pool-hit-ratio-analysis",
  "level": 3
}, {
  "value": "Configuration Tuning Steps",
  "id": "configuration-tuning-steps",
  "level": 3
}, {
  "value": "Python Implementation: Configuration Tuner",
  "id": "python-implementation-configuration-tuner",
  "level": 3
}, {
  "value": "19.7 Connection Pooling",
  "id": "197-connection-pooling",
  "level": 2
}, {
  "value": "Real-World Analogy: Valet Parking",
  "id": "real-world-analogy-valet-parking",
  "level": 3
}, {
  "value": "Connection Pool vs Direct Connection",
  "id": "connection-pool-vs-direct-connection",
  "level": 3
}, {
  "value": "C++ Implementation: Thread-Safe Connection Pool",
  "id": "c-implementation-thread-safe-connection-pool",
  "level": 3
}, {
  "value": "Python Implementation: Async Connection Pool",
  "id": "python-implementation-async-connection-pool",
  "level": 3
}, {
  "value": "Edge Cases in Connection Pooling",
  "id": "edge-cases-in-connection-pooling",
  "level": 3
}, {
  "value": "19.8 Partitioning Deep Dive",
  "id": "198-partitioning-deep-dive",
  "level": 2
}, {
  "value": "Real-World Analogy: Filing Cabinet System",
  "id": "real-world-analogy-filing-cabinet-system",
  "level": 3
}, {
  "value": "Partitioning Types Comparison",
  "id": "partitioning-types-comparison",
  "level": 3
}, {
  "value": "Partition Pruning Dry Run Trace",
  "id": "partition-pruning-dry-run-trace",
  "level": 3
}, {
  "value": "C++ Implementation: Partition Pruning Simulator",
  "id": "c-implementation-partition-pruning-simulator",
  "level": 3
}, {
  "value": "Python Implementation: Partition Manager",
  "id": "python-implementation-partition-manager",
  "level": 3
}, {
  "value": "19.9 Materialized Views",
  "id": "199-materialized-views",
  "level": 2
}, {
  "value": "Real-World Analogy: Weekly Meal Prep",
  "id": "real-world-analogy-weekly-meal-prep",
  "level": 3
}, {
  "value": "Materialized View vs View vs Temp Table",
  "id": "materialized-view-vs-view-vs-temp-table",
  "level": 3
}, {
  "value": "C++ Implementation: Materialized View Refresh Scheduler",
  "id": "c-implementation-materialized-view-refresh-scheduler",
  "level": 3
}, {
  "value": "19.10 Query Caching",
  "id": "1910-query-caching",
  "level": 2
}, {
  "value": "Real-World Analogy: Coffee Thermoses",
  "id": "real-world-analogy-coffee-thermoses",
  "level": 3
}, {
  "value": "Query Cache vs Application Cache",
  "id": "query-cache-vs-application-cache",
  "level": 3
}, {
  "value": "PostgreSQL Buffer Cache Inspection",
  "id": "postgresql-buffer-cache-inspection",
  "level": 3
}, {
  "value": "Python Implementation: Query Cache Simulator",
  "id": "python-implementation-query-cache-simulator",
  "level": 3
}, {
  "value": "Edge Cases in Caching",
  "id": "edge-cases-in-caching",
  "level": 3
}, {
  "value": "Index vs Full Scan Decision Criteria",
  "id": "index-vs-full-scan-decision-criteria",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. How to Read an EXPLAIN Plan",
  "id": "1-how-to-read-an-explain-plan",
  "level": 3
}, {
  "value": "2. Slow Query Debugging Process",
  "id": "2-slow-query-debugging-process",
  "level": 3
}, {
  "value": "3. Index Maintenance Strategy",
  "id": "3-index-maintenance-strategy",
  "level": 3
}, {
  "value": "4. N+1 Query Problem",
  "id": "4-n1-query-problem",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "MySQL Slow Query Log Analysis",
  "id": "mysql-slow-query-log-analysis",
  "level": 3
}, {
  "value": "PostgreSQL pg_stat_statements",
  "id": "postgresql-pg_stat_statements",
  "level": 3
}, {
  "value": "AWS Performance Insights (RDS)",
  "id": "aws-performance-insights-rds",
  "level": 3
}, {
  "value": "Real-World Monitoring Dashboard Query",
  "id": "real-world-monitoring-dashboard-query",
  "level": 3
}, {
  "value": "Existing Content (Sections 19.1-19.9)",
  "id": "existing-content-sections-191-199",
  "level": 2
}, {
  "value": "19.11 Specialized Index Types",
  "id": "1911-specialized-index-types",
  "level": 3
}, {
  "value": "19.11.1 BRIN (Block Range INdex)",
  "id": "19111-brin-block-range-index",
  "level": 3
}, {
  "value": "19.11.2 GiST (Generalized Search Tree)",
  "id": "19112-gist-generalized-search-tree",
  "level": 3
}, {
  "value": "19.11.3 GIN (Generalized Inverted Index)",
  "id": "19113-gin-generalized-inverted-index",
  "level": 3
}, {
  "value": "19.11.4 SP-GiST (Space-Partitioned GiST)",
  "id": "19114-sp-gist-space-partitioned-gist",
  "level": 3
}, {
  "value": "19.12 Index Maintenance &amp; Monitoring",
  "id": "1912-index-maintenance--monitoring",
  "level": 2
}, {
  "value": "19.12.1 Detecting Index Bloat",
  "id": "19121-detecting-index-bloat",
  "level": 3
}, {
  "value": "19.12.2 Finding Unused Indexes",
  "id": "19122-finding-unused-indexes",
  "level": 3
}, {
  "value": "19.12.3 Rebuilding Indexes",
  "id": "19123-rebuilding-indexes",
  "level": 3
}, {
  "value": "19.12.4 Zero-Downtime Index Creation",
  "id": "19124-zero-downtime-index-creation",
  "level": 3
}, {
  "value": "19.13 Statistics &amp; Cardinality Estimation",
  "id": "1913-statistics--cardinality-estimation",
  "level": 2
}, {
  "value": "19.13.1 ANALYZE Deep Dive",
  "id": "19131-analyze-deep-dive",
  "level": 3
}, {
  "value": "19.13.2 Extended Statistics for Correlated Columns",
  "id": "19132-extended-statistics-for-correlated-columns",
  "level": 3
}, {
  "value": "19.13.3 Manual Statistics Tuning",
  "id": "19133-manual-statistics-tuning",
  "level": 3
}, {
  "value": "19.14 Table Partitioning",
  "id": "1914-table-partitioning",
  "level": 2
}, {
  "value": "19.14.1 Partition Types",
  "id": "19141-partition-types",
  "level": 3
}, {
  "value": "19.14.2 Partition Pruning",
  "id": "19142-partition-pruning",
  "level": 3
}, {
  "value": "19.14.3 Managing Partitions",
  "id": "19143-managing-partitions",
  "level": 3
}, {
  "value": "19.15 Materialized Views",
  "id": "1915-materialized-views",
  "level": 2
}, {
  "value": "19.15.1 Basic Usage",
  "id": "19151-basic-usage",
  "level": 3
}, {
  "value": "19.15.2 Real-World Pattern: Reporting Aggregates",
  "id": "19152-real-world-pattern-reporting-aggregates",
  "level": 3
}, {
  "value": "19.16 Common Query Rewrite Anti-Patterns",
  "id": "1916-common-query-rewrite-anti-patterns",
  "level": 2
}, {
  "value": "19.17 Parallel Query Execution",
  "id": "1917-parallel-query-execution",
  "level": 2
}, {
  "value": "19.18 Slow Query Analysis",
  "id": "1918-slow-query-analysis",
  "level": 2
}, {
  "value": "19.18.1 auto_explain (PostgreSQL)",
  "id": "19181-auto_explain-postgresql",
  "level": 3
}, {
  "value": "19.18.2 PostgreSQL Log Analysis with pgBadger",
  "id": "19182-postgresql-log-analysis-with-pgbadger",
  "level": 3
}, {
  "value": "19.18.3 MySQL Slow Query Log",
  "id": "19183-mysql-slow-query-log",
  "level": 3
}, {
  "value": "19.18.4 Index Usage Metrics",
  "id": "19184-index-usage-metrics",
  "level": 3
}, {
  "value": "19.19 Real-World Case Studies",
  "id": "1919-real-world-case-studies",
  "level": 2
}, {
  "value": "Case Study A: E-Commerce Catalog",
  "id": "case-study-a-e-commerce-catalog",
  "level": 3
}, {
  "value": "Case Study B: SaaS Multi-Tenant Analytics",
  "id": "case-study-b-saas-multi-tenant-analytics",
  "level": 3
}, {
  "value": "Case Study C: High-Write Logging System",
  "id": "case-study-c-high-write-logging-system",
  "level": 3
}, {
  "value": "19.12 TypeSQL Index &amp; Query Performance Advisor",
  "id": "1912-typesql-index--query-performance-advisor",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "chapter-19-performance-tuning",
        children: "Chapter 19: Performance Tuning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/18-security",
          children: "Chapter 18: Database Security"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Last Chapter)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/database-management-systems/19-performance-tuning/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/19-performance-tuning/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/19-performance-tuning/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/19-performance-tuning/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/19-performance-tuning/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/19-performance-tuning/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the right index type (BRIN, GiST, GIN, SP-GiST) for real-world workloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor and maintain indexes to prevent bloat and fragmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design indexes based on actual query patterns, not theory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use table partitioning and materialized views for query acceleration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose slow queries using practical tools and metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply performance tuning patterns to common database scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify slow queries, analyze plans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use slow query logs and EXPLAIN ANALYZE iteratively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused, add missing, avoid over-indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor index usage with pg_stat_user_indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema Design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize for writes, denormalize for reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each extra JOIN can add 10-100x to query time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection Pooling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse connections to avoid setup overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set pool size to (core_count * 2 + disk_count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce database load with application-level cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache at the application tier, not just the database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory, disk I/O, and network configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More RAM reduces disk I/O more than any query optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance-bottlenecks",
      children: "Performance Bottlenecks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bottleneck"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diagnostic Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries slower under load, high process list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%CPU > 80%, high context switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing indexes causing full scans, heavy sorts, complex joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add indexes, rewrite queries, increase parallel workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk queue grows, queries wait on data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iowait > 20%, avg read latency > 10ms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full table scans on large tables, insufficient ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_buffers"
            }), ", checkpoint spikes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add indexes, increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_buffers"
            }), ", tune checkpoint intervals"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page faults, swapping, OOM kills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available RAM < 10%, swap usage > 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "work_mem"
            }), " too high per connection (multiplies by connections), leaky queries"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lower ", (0,jsx_runtime.jsx)(_components.code, {
              children: "work_mem"
            }), ", use connection pooling, profile memory per query"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries stuck in \"waiting\" state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock wait > 1s, deadlocks in logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running transactions, DDL blocking DML, row-lock contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use NOWAIT/SKIP LOCKED, reduce transaction duration, partition hot rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High latency, slow data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP retransmits > 0.1%, throughput < expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetching too many rows, chatty queries (N+1), insufficient bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use LIMIT, batch operations, move computation to database, compress"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimization-techniques-comparison",
      children: "Optimization Techniques Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow SELECT with full scans, known filter columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy tables, low-cardinality columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Rewrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single slow query, anti-patterns (function wrap, OR, NOT IN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already optimal queries, hardware-bound cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema Redesign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent JOINs across large tables, repetitive calculations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable system with no performance SLA breach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Config Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-box defaults, obvious resource imbalance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already tuned, bottleneck is query logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables > 100 GB, time-range queries, old-data cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables < 10 GB, no natural partition key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialized Views"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive aggregations, dashboards, reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time requirements, frequently updated base data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy workloads, repeated identical queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy, cache invalidation complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Slow Query] --> B[Identify via Slow Log]\n    B --> C[EXPLAIN ANALYZE]\n    C --> D{Cause?}\n    D -->|Missing Index| E[Add Index]\n    D -->|Bad Schema| F[Denormalize]\n    D -->|Config Issue| G[Tune Buffers]\n    D -->|Hardware| H[Scale Up/Out]\n    E & F & G & H --> I[Re-test]\n    I -->|Still Slow| C\n    I -->|Fast| J[Done]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "191-performance-tuning-overview",
      children: "19.1 Performance Tuning Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-car-engine-tuning",
      children: "Real-World Analogy: Car Engine Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database performance tuning is like tuning a race car engine. The engine (database) has many components that must work together:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Carburetor = Query Optimizer"
        }), ": Mixes fuel (data) and air (query plan) for combustion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pistons = Indexes"
        }), ": Each piston fires at the right moment to extract power (data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fuel Pump = I/O Subsystem"
        }), ": Delivers fuel (data pages) to the engine at the right pressure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cooling System = Buffer Pool"
        }), ": Prevents overheating (disk thrashing) by circulating coolant (cached pages)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transmission = Connection Pool"
        }), ": Gears (connections) must match speed (concurrency) to avoid stalling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exhaust = Query Logs"
        }), ": Reveals what the engine is actually doing under load"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bad query plan is like firing pistons out of order → the engine misfires, loses power, and wastes fuel."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-systematic-performance-tuning",
      children: "Steps for Systematic Performance Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: MEASURE → Establish baseline metrics (response time, throughput, resource usage)\nStep 2: IDENTIFY → Find slowest queries via logs (slow_query_log, pg_stat_statements)\nStep 3: ANALYZE → Run EXPLAIN (ANALYZE, BUFFERS) to find the bottleneck node\nStep 4: HYPOTHESIZE → Form hypothesis: missing index? bloated table? bad join order?\nStep 5: CHANGE → Apply one change at a time (index, rewrite, config)\nStep 6: MEASURE AGAIN → Compare against baseline; revert if no improvement\nStep 7: ITERATE → Repeat until SLA is met or diminishing returns\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-performance-tuning-loop",
      children: "Pseudocode: Performance Tuning Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE tune_database(slow_query_log):\n    queries = parse_slow_log(slow_query_log)\n    sort queries BY total_time DESC\n    \n    FOR each query IN queries:\n        plan = EXPLAIN(query)\n        bottleneck = find_most_expensive_node(plan)\n        \n        SWITCH bottleneck.type:\n            CASE \"Seq Scan\":\n                recommended_index = suggest_index(bottleneck.columns, bottleneck.predicates)\n                log(\"ADD INDEX:\", recommended_index)\n            CASE \"Nested Loop\":\n                log(\"CONSIDER: hash join, increase work_mem, add index on inner table\")\n            CASE \"Sort\":\n                log(\"CONSIDER: index on sort columns, increase work_mem\")\n            CASE \"HashAggregate\":\n                log(\"CONSIDER: materialized view, increase work_mem\")\n        \n        IF query.estimated_rows != query.actual_rows:\n            log(\"RUN ANALYZE on\", bottleneck.table)\n            IF discrepancy > 10x:\n                log(\"INCREASE statistics target for\", bottleneck.columns)\n        \n        IF query.rows_returned > query.rows_needed * 100:\n            log(\"APPEND LIMIT clause to reduce result set\")\n    \n    report = generate_tuning_report()\n    save(report)\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "192-query-analysis-with-explain",
      children: "19.2 Query Analysis with EXPLAIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-diagnostic-scanner",
      children: "Real-World Analogy: Diagnostic Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EXPLAIN is like a car's OBD-II diagnostic scanner. The mechanic connects the scanner, runs the engine, and reads the diagnostic trouble codes: \"Cylinder 3 misfire detected.\" Each line in EXPLAIN output is a sensor reading showing where time is spent, how many rows flow through each node, and whether the execution plan matches reality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explain-output-anatomy",
      children: "EXPLAIN Output Anatomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         QUERY PLAN\n--------------------------------------------------------------\n Gather  (cost=1000.00..15765.43 rows=100 width=32)\n   Workers Planned: 2\n   ->  Parallel Seq Scan on orders  (cost=0.00..14755.43 rows=42 width=32)\n         Filter: (total > 1000)\n         Rows Removed by Filter: 99958\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to Check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated cost (startup..total)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First number: startup before first row. Second: total cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated row count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare with actual rows from ANALYZE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "width"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average row width in bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High width = full row fetch; consider column selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workers Planned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel worker count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 = no parallelism; check max_parallel_workers_per_gather"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE clause applied here"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows Removed by Filter tells selectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rows Removed by Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows that didn't match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High number = missing index or non-selective filter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-explain-output-analysis",
      children: "Dry Run Trace: EXPLAIN Output Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Query on orders table (100K rows) filtering by customer_id"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "EXPLAIN (ANALYZE, BUFFERS)\nSELECT * FROM orders WHERE customer_id = 42;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXPLAIN Output Before Index:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seq Scan on orders  (cost=0.00..2341.00 rows=1 width=64)\n                   (actual time=0.012..23.451 rows=15 loops=1)\n  Filter: (customer_id = 42)\n  Rows Removed by Filter: 99985\n  Buffers: shared hit=840 read=0\nPlanning Time: 0.085 ms\nExecution Time: 23.512 ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Act Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00..2341.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23.451"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "840"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scanned all 100K rows to find 15; 99,985 rows filtered out"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      }), " Estimated rows (1) ≈ actual rows (15) → statistics OK. Problem: sequential scan on 100K rows for 15 results = 99.97% wasted I/O. Buffer hit: 840 pages scanned → index would read ~3 pages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXPLAIN Output After Index:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index Scan using idx_orders_customer on orders\n  (cost=0.29..12.31 rows=15 width=64)\n  (actual time=0.023..0.089 rows=15 loops=1)\n  Index Cond: (customer_id = 42)\n  Buffers: shared hit=3 read=0\nPlanning Time: 0.091 ms\nExecution Time: 0.134 ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table (After):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Act Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.29..12.31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.089"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index lookup: cost drops from 2341 to 12, buffers from 840 to 3"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvement:"
      }), " 23.5 ms → 0.13 ms (180x faster). Buffers: 840 → 3 (280x less I/O)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explain-analyze-key-metrics-table",
      children: "EXPLAIN ANALYZE Key Metrics Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Healthy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Critical"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated vs Actual rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 2x difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-10x difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 10x difference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rows Removed by Filter / Total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 90%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer hits (shared_hit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 90% of total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70-90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 70%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 10 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.01 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01-1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 1 ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-query-plan-analyzer",
      children: "C++ Implementation: Query Plan Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <map>\n#include <sstream>\n#include <cmath>\n#include <iomanip>\n\nstruct PlanNode {\n    std::string nodeType;\n    double startupCost;\n    double totalCost;\n    long estimatedRows;\n    long actualRows;\n    double actualTime;\n    long buffersHit;\n    long buffersRead;\n    std::string filter;\n    std::string condition;\n};\n\nclass QueryPlanAnalyzer {\nprivate:\n    std::vector<PlanNode> nodes;\n\npublic:\n    double calculateSelectivity(const PlanNode& node) {\n        return (double)node.actualRows / (double)node.actualRows;\n    }\n\n    void analyze() {\n        std::cout << \"\\n=== QUERY PLAN ANALYSIS ===\\n\";\n        for (auto& node : nodes) {\n            double costPerRow = node.actualRows > 0\n                ? node.actualTime / node.actualRows : 0;\n            double estimationError = node.estimatedRows > 0\n                ? (double)node.actualRows / node.estimatedRows : 1.0;\n            double hitRatio = (node.buffersHit + node.buffersRead) > 0\n                ? (100.0 * node.buffersHit) / (node.buffersHit + node.buffersRead) : 0;\n\n            std::cout << \"Node: \" << node.nodeType << \"\\n\";\n            std::cout << \"  Cost: \" << node.startupCost << \"..\" << node.totalCost << \"\\n\";\n            std::cout << \"  Cost per row: \" << costPerRow << \" ms\\n\";\n            std::cout << \"  Estimation error: \" << std::fixed << std::setprecision(2)\n                      << estimationError << \"x\\n\";\n            std::cout << \"  Buffer hit ratio: \" << hitRatio << \"%\\n\";\n            std::cout << \"  Condition: \" << node.condition << \"\\n\";\n            std::cout << \"  Filter: \" << node.filter << \"\\n\";\n\n            if (estimationError > 10.0)\n                std::cout << \"  [WARN] Bad cardinality estimate -- RUN ANALYZE\\n\";\n            if (hitRatio < 70.0)\n                std::cout << \"  [WARN] Low cache hit -- increase shared_buffers\\n\";\n            if (costPerRow > 1.0)\n                std::cout << \"  [WARN] High cost per row -- check index\\n\";\n            std::cout << \"---\\n\";\n        }\n    }\n\n    void addNode(const PlanNode& node) {\n        nodes.push_back(node);\n    }\n};\n\nint main() {\n    QueryPlanAnalyzer analyzer;\n\n    // Before index scenario\n    analyzer.addNode({\n        \"Seq Scan\", 0.0, 2341.0, 1, 15, 23.451, 840, 0,\n        \"(customer_id = 42)\", \"orders\"\n    });\n\n    analyzer.analyze();\n\n    std::cout << \"\\n=== RECOMMENDATION ===\\n\";\n    std::cout << \"Add index: CREATE INDEX idx_orders_customer ON orders (customer_id);\\n\";\n    std::cout << \"Predicted improvement: 180x faster, 280x less I/O\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(N) where N = number of plan nodes (typically < 50). Each node is processed once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(N) to store plan tree. Each node stores cost, row estimates, buffer stats."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Plan tree depth is bounded by query complexity. A 50-JOIN query produces ~100 nodes maximum. Linear scan is optimal since each node needs exactly one pass for analysis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-slow-query-debugger",
      children: "Python Implementation: Slow Query Debugger"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nimport time\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass SlowQuery:\n    query_text: str\n    duration_ms: float\n    rows_sent: int\n    rows_examined: int\n    lock_time_ms: float\n    timestamp: float = 0.0\n    query_hash: str = \"\"\n    index_hint: str = \"\"\n\nclass SlowQueryDebugger:\n    def __init__(self, slow_query_threshold_ms: float = 1000.0):\n        self.threshold = slow_query_threshold_ms\n        self.queries: list[SlowQuery] = []\n        self.index_patterns = {\n            r\"WHERE\\s+(\\w+)\\.(\\w+)\\s*=\": \"Consider B-tree index on {}.{}\",\n            r\"ORDER BY\\s+(\\w+)\\.(\\w+)\": \"Consider index on {} {} for sort elimination\",\n            r\"LIKE\\s+'%\": \"Leading wildcard -- consider pg_trgm GIN index\",\n            r\"JOIN\\s+(\\w+)\\s+ON\": \"Verify index on {}.join_column for the join\",\n            r\"COUNT\\(\\*\\)\": \"Consider materialized view for repeated aggregations\",\n        }\n\n    def ingest_slow_log(self, log_lines: list[str]) -> None:\n        current = SlowQuery(query_text=\"\", duration_ms=0, rows_sent=0,\n                           rows_examined=0, lock_time_ms=0)\n        for line in log_lines:\n            dur_match = re.search(r\"Query_time:\\s+([\\d.]+)\", line)\n            if dur_match:\n                current.duration_ms = float(dur_match.group(1)) * 1000\n            rows_match = re.search(r\"Rows_sent:\\s+(\\d+)\", line)\n            if rows_match:\n                current.rows_sent = int(rows_match.group(1))\n            rows_ex = re.search(r\"Rows_examined:\\s+(\\d+)\", line)\n            if rows_ex:\n                current.rows_examined = int(rows_ex.group(1))\n            lock_match = re.search(r\"Lock_time:\\s+([\\d.]+)\", line)\n            if lock_match:\n                current.lock_time_ms = float(lock_match.group(1)) * 1000\n            if line.startswith(\"SELECT\") or line.startswith(\"UPDATE\") or line.startswith(\"DELETE\"):\n                current.query_text = line.strip()[:200]\n                if current.duration_ms > 0:\n                    self.analyze_query(current)\n                    current = SlowQuery(query_text=\"\", duration_ms=0, rows_sent=0,\n                                       rows_examined=0, lock_time_ms=0)\n\n    def analyze_query(self, q: SlowQuery) -> None:\n        efficiency = q.rows_sent / max(q.rows_examined, 1) * 100\n        print(f\"\\n[SLOW QUERY] {q.duration_ms:.1f}ms | \"\n              f\"Rows: {q.rows_sent}/{q.rows_examined} ({efficiency:.1f}% efficient)\")\n        print(f\"  Query: {q.query_text[:80]}...\")\n\n        if efficiency < 1.0:\n            print(f\"  [ISSUE] Only {efficiency:.1f}% of examined rows returned. \"\n                  f\"Missing index or excessive data fetch.\")\n        if q.lock_time_ms > q.duration_ms * 0.5:\n            print(f\"  [ISSUE] Lock time {q.lock_time_ms:.1f}ms is {q.lock_time_ms/q.duration_ms*100:.0f}% \"\n                  f\"of total. Check concurrent access patterns.\")\n        if q.rows_examined > 10000 and q.rows_sent < 100:\n            print(f\"  [ACTION] Add index for filter columns to reduce scan from \"\n                  f\"{q.rows_examined} to ~{q.rows_sent} rows.\")\n\n        for pattern, hint in self.index_patterns.items():\n            match = re.search(pattern, q.query_text, re.IGNORECASE)\n            if match:\n                print(f\"  [HINT] {hint.format(*match.groups())}\")\n\n        self.queries.append(q)\n\n    def generate_report(self) -> str:\n        if not self.queries:\n            return \"No slow queries found.\"\n\n        total_time = sum(q.duration_ms for q in self.queries)\n        worst = max(self.queries, key=lambda q: q.duration_ms)\n\n        report = f\"\"\"\n=== SLOW QUERY REPORT ===\nTotal queries: {len(self.queries)}\nTotal time lost: {total_time / 1000:.2f}s\nWorst query: {worst.duration_ms:.0f}ms - {worst.query_text[:60]}...\nAverage duration: {total_time / len(self.queries):.0f}ms\nRecommendation: {worst.index_hint or 'Run EXPLAIN ANALYZE on worst query'}\n\"\"\"\n        return report\n\nlogger = SlowQueryDebugger(500.0)\nlogs = [\n    \"Query_time: 2.345  Rows_sent: 15  Rows_examined: 100000  Lock_time: 0.001\",\n    \"SELECT * FROM orders WHERE customer_id = 42 ORDER BY created_at;\",\n]\nlogger.ingest_slow_log(logs)\nprint(logger.generate_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L × P) where L = log lines, P = pattern count. Each line is matched against all patterns. Typically L < 10000, P < 10 → fine for batch analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(Q) where Q = slow queries stored. Each query stores ~500 bytes of metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Pattern-matching is the fastest general approach for log parsing; regex engines are optimized with DFA compilation. For production at scale, stream the parser instead of storing all queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "193-index-optimization",
      children: "19.3 Index Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-library-catalog-system",
      children: "Real-World Analogy: Library Catalog System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Indexes are like a library's catalog system. Without a catalog (full scan), you walk every aisle looking at every book. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "B-tree index"
      }), " is the standard Dewey Decimal catalog → fast for exact lookups and sorted ranges. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "covering index"
      }), " is like a catalog card that includes the book's summary → you don't need to pull the book off the shelf. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "index hint"
      }), " is a librarian's recommendation: \"Use the author catalog, not the title catalog, for this search.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "covering-index",
      children: "Covering Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A covering index includes all columns needed by a query, so the database never touches the table (heap). This is the fastest possible access path."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Without covering index (needs heap lookup)\nCREATE INDEX idx_email ON users (email);\nEXPLAIN ANALYZE SELECT email, name FROM users WHERE email = 'a@b.com';\n-- Index Scan on users (Index Cond: (email = 'a@b.com'))\n-- -> Heap access to fetch 'name' column\n\n-- Covering index (includes name)\nCREATE INDEX idx_email_cover ON users (email) INCLUDE (name);\nEXPLAIN ANALYZE SELECT email, name FROM users WHERE email = 'a@b.com';\n-- Index Only Scan on users (Index Cond: (email = 'a@b.com'))\n-- -> No heap access needed!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before/After Performance:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Covering Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Covering Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.08 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffers (hit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (index) + 3 (heap) = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (index only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Fetches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.6x faster, 62% less I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index-hints",
      children: "Index Hints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL does not support index hints (the planner ignores them). MySQL and Oracle do. Behind the hint is a directive: \"Trust me, use this index even if your cost model disagrees.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL: Force index hint\nSELECT * FROM orders\nFORCE INDEX (idx_orders_customer)\nWHERE customer_id = 42;\n\n-- MySQL: Ignore index hint\nSELECT * FROM orders\nIGNORE INDEX (idx_orders_created)\nWHERE created_at > '2026-01-01';\n\n-- MySQL: USE INDEX (weaker suggestion)\nSELECT * FROM orders\nUSE INDEX (idx_orders_customer)\nWHERE customer_id = 42;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Index Hint Decision Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Index Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rows Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No hint, wrong index chosen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idx_orders_created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.3s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planner error (outdated stats)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FORCE INDEX (idx_customer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idx_orders_customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.12s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19x faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IGNORE INDEX (all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.4s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case → no index at all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANALYZE + no hint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idx_orders_customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.11s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct plan without hint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Prefer fixing statistics over using hints. Hints mask the root problem (stale stats) and become tech debt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-index-selectivity-calculator",
      children: "C++ Implementation: Index Selectivity Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <algorithm>\n#include <numeric>\n\nstruct IndexCandidate {\n    std::string name;\n    std::vector<std::string> columns;\n    long estimatedRows;\n    long totalRows;\n    double selectivity;\n    double costPerQuery;\n    long maintenanceWriteCost;\n    long sizeBytes;\n};\n\nclass IndexOptimizer {\nprivate:\n    std::vector<IndexCandidate> candidates;\n    const long AVG_ROW_SIZE = 200;\n    const long DISK_PAGE_SIZE = 8192;\n\n    double calculateSelectivity(long estimatedRows, long totalRows) {\n        return totalRows > 0 ? (double)estimatedRows / totalRows : 0;\n    }\n\n    long estimateIndexSize(const IndexCandidate& idx) {\n        long keySize = 0;\n        for (auto& col : idx.columns) {\n            keySize += 8; // approximate: 8 bytes per key column\n        }\n        long entriesPerPage = DISK_PAGE_SIZE / (keySize + 6); // 6 byte overhead\n        return (idx.totalRows / entriesPerPage) * DISK_PAGE_SIZE;\n    }\n\npublic:\n    void evaluateCandidate(const std::string& name,\n                          const std::vector<std::string>& cols,\n                          long estimatedRows, long totalRows,\n                          double queryFrequency) {\n        IndexCandidate cand;\n        cand.name = name;\n        cand.columns = cols;\n        cand.estimatedRows = estimatedRows;\n        cand.totalRows = totalRows;\n        cand.selectivity = calculateSelectivity(estimatedRows, totalRows);\n        cand.sizeBytes = estimateIndexSize(cand);\n        cand.costPerQuery = cand.selectivity < 0.01\n            ? 0.02  // Index scan: ~0.02ms\n            : cand.selectivity < 0.1\n                ? 0.10  // Partial scan: ~0.1ms\n                : 5.0;  // Full scan territory: ~5ms\n        cand.maintenanceWriteCost = (long)(queryFrequency * 0.05); // 5% overhead per write\n        candidates.push_back(cand);\n    }\n\n    void printRecommendations() {\n        std::cout << \"\\n=== INDEX OPTIMIZATION REPORT ===\\n\";\n        std::cout << std::string(80, '-') << \"\\n\";\n        std::cout.setf(std::ios::left);\n        std::cout.width(25);\n        std::cout << \"Index Name\";\n        std::cout.width(20);\n        std::cout << \"Selectivity\";\n        std::cout.width(15);\n        std::cout << \"Size (MB)\";\n        std::cout.width(15);\n        std::cout << \"Cost/Query\";\n        std::cout << \"Verdict\\n\";\n        std::cout << std::string(80, '-') << \"\\n\";\n\n        for (auto& c : candidates) {\n            std::cout.width(25);\n            std::cout << c.name;\n            std::cout.width(20);\n            std::cout << c.selectivity;\n            std::cout.width(15);\n            std::cout << c.sizeBytes / (1024 * 1024);\n            std::cout.width(15);\n            std::cout << c.costPerQuery << \"ms\";\n\n            if (c.selectivity < 0.01)\n                std::cout << \" [CREATE] High selectivity, low cost\\n\";\n            else if (c.selectivity < 0.1)\n                std::cout << \" [CONSIDER] Moderate selectivity\\n\";\n            else\n                std::cout << \" [AVOID] Poor selectivity, prefer full scan\\n\";\n        }\n\n        std::cout << \"\\nRULES:\\n\";\n        std::cout << \"  selectivity < 1%  -> B-tree index is very effective\\n\";\n        std::cout << \"  selectivity 1-10% -> Index may help; test with workload\\n\";\n        std::cout << \"  selectivity > 10% -> Full sequential scan likely faster\\n\";\n        std::cout << \"  Over-indexing cost: each additional index adds\\n\";\n        std::cout << \"    ~5% write overhead per INSERT/UPDATE/DELETE\\n\";\n    }\n};\n\nint main() {\n    IndexOptimizer opt;\n\n    // High selectivity: customer_id lookup (15 of 100K)\n    opt.evaluateCandidate(\"idx_customer\", {\"customer_id\"}, 15, 100000, 500);\n    // Medium selectivity: status filter (30K of 100K)\n    opt.evaluateCandidate(\"idx_status\", {\"status\"}, 30000, 100000, 200);\n    // Low selectivity: gender filter (50K of 100K)\n    opt.evaluateCandidate(\"idx_gender\", {\"gender\"}, 50000, 100000, 50);\n\n    opt.printRecommendations();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(C) where C = index candidates. Each candidate evaluated in constant time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(C) for storing candidate metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Index evaluation is a cost-model calculation, not a search problem. Each candidate is independent. The hard work is done by the query planner's cost model; this tool surfaces the planner's implicit selectivity assumptions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-over-indexing-detector",
      children: "Python Implementation: Over-Indexing Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\nfrom collections import defaultdict\n\nclass OverIndexingDetector:\n    def __init__(self):\n        self.indexes: dict[str, dict] = {}\n        self.write_ops = defaultdict(int)\n\n    def add_index(self, table: str, name: str, columns: list[str],\n                  size_mb: float, write_overhead_pct: float = 5.0) -> None:\n        key = f\"{table}.{name}\"\n        self.indexes[key] = {\n            \"table\": table,\n            \"name\": name,\n            \"columns\": columns,\n            \"size_mb\": size_mb,\n            \"write_overhead_pct\": write_overhead_pct,\n            \"scans\": 0,\n            \"tuple_fetches\": 0,\n        }\n\n    def record_scan(self, table: str, name: str, scans: int = 1,\n                    fetches: int = 0) -> None:\n        key = f\"{table}.{name}\"\n        if key in self.indexes:\n            self.indexes[key][\"scans\"] += scans\n            self.indexes[key][\"tuple_fetches\"] += fetches\n\n    def record_write(self, table: str) -> None:\n        self.write_ops[table] += 1\n\n    def detect(self) -> list[dict]:\n        issues = []\n        for key, idx in self.indexes.items():\n            if idx[\"scans\"] == 0 and idx[\"size_mb\"] > 10:\n                issues.append({\n                    \"index\": key,\n                    \"severity\": \"HIGH\",\n                    \"issue\": f\"Unused index ({idx['size_mb']} MB), wasting \"\n                             f\"write performance and cache space\",\n                    \"action\": f\"DROP INDEX {idx['name']};\"\n                })\n            elif idx[\"scans\"] < 10 and idx[\"size_mb\"] > 50:\n                issues.append({\n                    \"index\": key,\n                    \"severity\": \"MEDIUM\",\n                    \"issue\": f\"Rarely used index: only {idx['scans']} scans \"\n                             f\"but {idx['size_mb']} MB\",\n                    \"action\": f\"Consider DROP INDEX {idx['name']} \"\n                              f\"if workload doesn't increase\"\n                })\n            overlap = self._check_column_overlap(idx)\n            if overlap:\n                issues.append({\n                    \"index\": key,\n                    \"severity\": \"MEDIUM\",\n                    \"issue\": f\"Column overlap with {overlap}: \"\n                             f\"{', '.join(idx['columns'])}\",\n                    \"action\": f\"Consider merging indexes or using \"\n                              f\"covering index INCLUDE clause\"\n                })\n\n            writes = self.write_ops.get(idx[\"table\"], 0)\n            write_waste = writes * idx[\"write_overhead_pct\"] / 100.0\n            if write_waste > 1000 and idx[\"scans\"] < write_waste / 10:\n                issues.append({\n                    \"index\": key,\n                    \"severity\": \"LOW\",\n                    \"issue\": f\"Write overhead ({write_waste:.0f} ops) \"\n                             f\"exceeds read benefit ({idx['scans']} scans)\",\n                    \"action\": \"Drop if this pattern continues\"\n                })\n\n        return sorted(issues, key=lambda x: {\"HIGH\": 0, \"MEDIUM\": 1, \"LOW\": 2}[x[\"severity\"]])\n\n    def _check_column_overlap(self, idx: dict) -> str:\n        for key, other in self.indexes.items():\n            if other is idx:\n                continue\n            shared = set(idx[\"columns\"]) & set(other[\"columns\"])\n            if shared and len(shared) == len(idx[\"columns\"]):\n                return f\"{other['table']}.{other['name']}\"\n        return \"\"\n\ndetector = OverIndexingDetector()\ndetector.add_index(\"orders\", \"idx_orders_customer\", [\"customer_id\"], 45)\ndetector.add_index(\"orders\", \"idx_orders_customer_created\",\n                   [\"customer_id\", \"created_at\"], 68)\ndetector.add_index(\"orders\", \"idx_orders_status\", [\"status\"], 120)\ndetector.add_index(\"orders\", \"idx_orders_created\", [\"created_at\"], 90)\ndetector.add_index(\"logs\", \"idx_logs_level\", [\"level\"], 200)\ndetector.add_index(\"logs\", \"idx_logs_ts\", [\"logged_at\"], 150)\n\ndetector.record_scan(\"orders\", \"idx_orders_customer\", 1500, 12000)\ndetector.record_scan(\"orders\", \"idx_orders_customer_created\", 12, 45)\ndetector.record_scan(\"orders\", \"idx_orders_created\", 800, 5000)\ndetector.record_scan(\"logs\", \"idx_logs_ts\", 5, 200)\n\nfor _ in range(5000):\n    detector.record_write(\"logs\")\n\nissues = detector.detect()\nfor issue in issues:\n    print(f\"[{issue['severity']}] {issue['index']}: {issue['issue']}\")\n    print(f\"  Action: {issue['action']}\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(N²) for overlap detection where N = index count. Each index compared with every other. For typical systems (N < 50), this is fast."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(N) for index metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Overlap detection is inherently pairwise; no hash structure can avoid the comparison since column overlap is a set-intersection problem. N < 50 makes N² acceptable (2500 comparisons < 1ms)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-index-optimization",
      children: "Edge Cases in Index Optimization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Over-indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ indexes on one table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write amplification: each INSERT updates ALL indexes. Bulk load drops to 1/10th throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep ≤ 5 indexes per table; drop unused ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale Statistics"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "n_distinct"
            }), " is wrong after large data change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planner chooses wrong index or full scan"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ANALYZE after bulk operations; increase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "default_statistics_target"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter Sniffing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First execution caches plan for specific param values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequent different params get suboptimal plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use plan guides (SQL Server), prepared statements with generic plans (PG), or forced parameterization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index on Expression"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Index on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lower(email)"
            }), " but query uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "email"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index never used → silent waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match query to index expression exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Index Column Order"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INDEX(a,b)"
            }), " but query filters only on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["B-tree prefix rule: column order matters. Query on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " alone cannot use the index"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create separate index on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(b)"
            }), " or reorder columns"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nulls in Indexed Column"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE col IS NULL"
            }), " may not use index"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL can index NULLs; MySQL may not use index for IS NULL queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test with your database; consider functional index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very Large Index Keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on TEXT column (up to 1KB per entry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index becomes large, slow, and fragmented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hash index for equality, or prefix compression"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "194-query-optimization-techniques",
      children: "19.4 Query Optimization Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-gps-route-planning",
      children: "Real-World Analogy: GPS Route Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query optimization is like GPS route planning. A naive query is a GPS that recalculates from scratch at every intersection. An optimized query pre-computes the best route, avoids traffic (unnecessary rows), takes express lanes (indexes), and combines trips (batch operations). The query planner is the GPS algorithm → it evaluates multiple routes and picks the cheapest based on its map (statistics)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-query-rewrite-methodology",
      children: "Numbered Steps: Query Rewrite Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. IDENTIFY the slow query (from logs, pg_stat_statements, or user report)\n2. READ the query: understand intent, table relationships, expected result size\n3. CHECK for anti-patterns:\n   a. Function-wrapped indexed columns (WHERE DATE(col) = ...)\n   b. Leading wildcard LIKE patterns (LIKE '%text')\n   c. OR across different columns\n   d. NOT IN with subqueries\n   e. Implicit type conversions\n   f. SELECT * when only 2 of 20 columns needed\n4. ANALYZE join order: are smaller tables driving the join?\n5. EXAMINE subqueries: can they be rewritten as JOINs or CTEs?\n6. TEST the rewrite: compare EXPLAIN plans before and after\n7. VERIFY correctness: same result set, same ordering\n8. DEPLOY: add to migration, monitor performance for regressions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-rewrite-techniques-with-beforeafter",
      children: "Query Rewrite Techniques with Before/After"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technique 1: Transform Correlated Subquery to JOIN"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- BEFORE (correlated subquery, runs once per outer row)\nSELECT p.*, (\n    SELECT SUM(amount) FROM orders o WHERE o.product_id = p.id\n) AS total_sales\nFROM products p\nWHERE p.category = 'Electronics';\n-- For 10K products, runs 10K subqueries!\n\n-- AFTER (JOIN with GROUP BY, runs once)\nSELECT p.*, COALESCE(SUM(o.amount), 0) AS total_sales\nFROM products p\nLEFT JOIN orders o ON o.product_id = p.id\nWHERE p.category = 'Electronics'\nGROUP BY p.id;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before (Correlated)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After (JOIN)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,450 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rows Examined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5,200,000 (10K × avg 520)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "520,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IO Reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3,400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "340"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Improvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "16x faster"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technique 2: Replace OR with UNION"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- BEFORE: OR across columns (hard for planner to use multiple indexes)\nSELECT * FROM users\nWHERE email = 'a@b.com' OR phone = '555-0001';\n\n-- AFTER: UNION each branch uses its own index\nSELECT * FROM users WHERE email = 'a@b.com'\nUNION\nSELECT * FROM users WHERE phone = '555-0001';\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before (OR)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After (UNION)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.4 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan or BitmapOr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index Scan on email + Index Scan on phone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Improvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "15x faster"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technique 3: Aggregation Pushdown"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- BEFORE: aggregate after join (joins large intermediate result)\nSELECT d.name, COUNT(e.id)\nFROM departments d\nJOIN employees e ON e.department_id = d.id\nGROUP BY d.id, d.name;\n\n-- AFTER: aggregate before join with subquery\nSELECT d.name, e.cnt\nFROM departments d\nJOIN (SELECT department_id, COUNT(*) AS cnt\n      FROM employees\n      GROUP BY department_id) e ON e.department_id = d.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Query Rewrite"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query: SELECT * FROM orders WHERE customer_id = 42 AND status = 'shipped';\n\nStep 1 → Original EXPLAIN:\n  Seq Scan on orders (cost=0.00..2341.00 rows=1)\n  Filter: (customer_id = 42) AND (status = 'shipped'::text)\n\nStep 2 → Add composite index:\n  CREATE INDEX idx_orders_cust_status ON orders (customer_id, status);\n\nStep 3 → After index, re-EXPLAIN:\n  Index Scan using idx_orders_cust_status on orders\n  (cost=0.29..8.31 rows=5)\n  Index Cond: (customer_id = 42) AND (status = 'shipped'::text)\n\nStep 4 → Verify with ANALYZE:\n  EXPLAIN ANALYZE SELECT * FROM orders ...;\n  Actual time=0.045ms (was 23.4ms → 520x faster!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-query-rewrite-approaches",
      children: "A&D Table: Query Rewrite Approaches"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subquery → JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single scan, no correlation overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May change semantics with NULLs, duplicates need DISTINCT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OR → UNION"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses separate indexes per branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION deduplication overhead; use UNION ALL if no dupes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT IN → NOT EXISTS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles NULLs correctly, anti-join plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly less readable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation Pushdown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less data in JOIN, smaller intermediate sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More nested subqueries, harder to debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Window Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids self-joins, single scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher memory for sort, not always faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CTE Materialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clearer logic, can materialize intermediate results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL ≤11 materializes CTEs always; can prevent pushdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXISTS → JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit on first match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must deduplicate if 1:M relationship"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-query-rewrite-engine",
      children: "Pseudocode: Query Rewrite Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION optimize_query(query):\n    parsed = parse_sql(query)\n\n    // Rule 1: Expand SELECT * to explicit columns\n    IF parsed.select_list CONTAINS \"*\":\n        column_list = get_columns(parsed.from_tables)\n        parsed.select_list = column_list\n\n    // Rule 2: Replace function-wrapped columns with range predicates\n    FOR each predicate IN parsed.where_clause:\n        IF predicate.left IS function_call AND\n           predicate.left.inner IS column_ref:\n            IF predicate.function == \"DATE\" OR \"date_trunc\":\n                new_pred = convert_to_range(predicate)\n                REPLACE predicate WITH new_pred\n\n    // Rule 3: Convert OR across different tables to UNION\n    IF parsed.where_clause CONTAINS \"OR\":\n        or_terms = split_on_OR(parsed.where_clause)\n        IF all references different indexes:\n            REWRITE query AS UNION of per-index queries\n\n    // Rule 4: Replace NOT IN with NOT EXISTS\n    IF parsed.where_clause CONTAINS \"NOT IN (SELECT ...)\":\n        subquery = extract_subquery()\n        REWRITE AS NOT EXISTS with correlated condition\n\n    // Rule 5: Push predicates into subqueries\n    FOR each subquery IN parsed:\n        IF outer_where CONTAINS predicates ON subquery.table:\n            COPY predicate INTO subquery.where_clause\n\n    RETURN generate_sql(parsed)\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "195-schema-optimization",
      children: "19.5 Schema Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-warehouse-organization",
      children: "Real-World Analogy: Warehouse Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Schema optimization is like organizing a warehouse. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Normalization"
      }), " is like storing each type of item in its own aisle (3NF: every item has one home). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Denormalization"
      }), " is like placing frequently-picked-together items in the same bin (redundancy for speed). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "star schema"
      }), " is like having a central receiving dock (fact table) surrounded by dedicated storage zones (dimension tables). The right schema depends on whether workers are stocking shelves (OLTP writes) or picking orders (OLAP reads)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "normalization-vs-denormalization-decision-table",
      children: "Normalization vs Denormalization Decision Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normalize (3NF/BCNF)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalize"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (OLTP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (OLAP/reporting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JOIN cost tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low/medium (small tables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (large tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept stale/redundant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a concern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-row CRUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation, reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order entry system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse fact tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-pattern-the-over-normalized-schema",
      children: "Anti-Pattern: The Over-Normalized Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- BEFORE: Over-normalized (6 tables for a product page)\nCREATE TABLE products (id INT PRIMARY KEY, name TEXT);\nCREATE TABLE product_attributes (product_id INT, attribute_id INT);\nCREATE TABLE attributes (id INT PRIMARY KEY, name TEXT);\nCREATE TABLE attribute_values (id INT PRIMARY KEY, attribute_id INT, value TEXT);\nCREATE TABLE product_prices (product_id INT, price NUMERIC);\nCREATE TABLE product_inventory (product_id INT, stock INT);\n\n-- Query needs 6 JOINs for a simple product page:\nSELECT p.name, av.value, pr.price, i.stock\nFROM products p\nLEFT JOIN product_attributes pa ON pa.product_id = p.id\nLEFT JOIN attributes a ON a.id = pa.attribute_id\nLEFT JOIN attribute_values av ON av.id = a.id\nLEFT JOIN product_prices pr ON pr.product_id = p.id\nLEFT JOIN product_inventory i ON i.product_id = p.id\nWHERE p.id = 42;\n-- 6 tables joined, 6 index lookups, complex plan\n\n-- AFTER: Denormalized for read performance\nCREATE TABLE product_display (\n    id INT PRIMARY KEY,\n    name TEXT,\n    attributes JSONB,\n    price NUMERIC,\n    stock INT\n);\n\nSELECT name, attributes, price, stock\nFROM product_display WHERE id = 42;\n-- 1 table, 1 index lookup, trivial plan\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Over-normalized (6 JOINs)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalized"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.12 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan Nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 (6 scans + 6 joins)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (index scan + heap fetch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 tables, each with indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 table, 1 index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates cascade across 6 tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single row update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Improvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "20x faster"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema-optimization-patterns",
      children: "Schema Optimization Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Pattern 1: Store computed columns (avoid runtime calculation)\nALTER TABLE orders ADD COLUMN total_with_tax NUMERIC\n    GENERATED ALWAYS AS (total * 1.08) STORED;\n\n-- Pattern 2: Use appropriate data types\n-- BEFORE: VARCHAR(255) for everything\nALTER TABLE users ALTER COLUMN age TYPE INT USING age::integer;\n\n-- Pattern 3: Partial indexes for common filters\nCREATE INDEX idx_orders_active ON orders (created_at)\n    WHERE status NOT IN ('cancelled', 'returned');\n\n-- Pattern 4: Cluster table on frequently-used index\nCLUSTER orders USING idx_orders_created;\n-- Physically reorders rows to match index order (1-time)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "196-configuration-tuning",
      children: "19.6 Configuration Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-engine-control-unit",
      children: "Real-World Analogy: Engine Control Unit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Database configuration is like tuning a car's ECU (Engine Control Unit). The factory defaults are safe but leave performance on the table. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_buffers"
      }), " is the engine's displacement (how much fuel-air mix fits in the cylinders). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "work_mem"
      }), " is the turbo boost (per-operation burst power). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "effective_cache_size"
      }), " is the intake manifold's capacity estimate. Wrong settings cause detonation (swap), starvation (I/O wait), or wasted potential (idle resources)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-configuration-parameters",
      children: "Key Configuration Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL configuration tuning (postgresql.conf)\n-- Memory settings (assumes 16 GB RAM, 8 cores)\n\n-- Buffer pool: 25% of RAM\nshared_buffers = '4GB'\n\n-- Sort/hash memory per operation (not per connection!)\nwork_mem = '64MB'\n\n-- Maintenance (VACUUM, CREATE INDEX)\nmaintenance_work_mem = '1GB'\n\n-- Planner's OS cache estimate (70% of RAM)\neffective_cache_size = '12GB'\n\n-- SSD tuning (default assumes spinning disk)\nrandom_page_cost = 1.1\n\n-- Parallel query (set to CPU count)\nmax_parallel_workers_per_gather = 4\nmax_parallel_workers = 8\nmax_parallel_maintenance_workers = 4\n\n-- WAL and checkpoint tuning\nwal_buffers = '16MB'\ncheckpoint_completion_target = 0.9\nmax_wal_size = '4GB'\nmin_wal_size = '1GB'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer-pool-hit-ratio-analysis",
      children: "Buffer Pool Hit Ratio Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: check buffer cache hit ratio\nSELECT\n    'buffer hit ratio' AS metric,\n    round(100.0 * sum(blks_hit) / nullif(sum(blks_hit + blks_read), 0), 2) AS value\nFROM pg_stat_database\nWHERE datname = current_database();\n\n-- Per-table buffer usage\nSELECT\n    schemaname || '.' || relname AS table,\n    heap_blks_hit,\n    heap_blks_read,\n    round(100.0 * heap_blks_hit / nullif(heap_blks_hit + heap_blks_read, 0), 1) AS hit_pct\nFROM pg_statio_user_tables\nWHERE heap_blks_read + heap_blks_hit > 0\nORDER BY heap_blks_read DESC\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before/After Configuration Tuning:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Config"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuned Config"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shared_buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effective_cache_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer Hit Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.2%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average Query Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "340 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpoint Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every 5 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Reads/sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "840"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-tuning-steps",
      children: "Configuration Tuning Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: MEASURE baseline → pg_stat_database buffer hit ratio, iostat, free -m\nStep 2: SET shared_buffers = 25% of RAM (but not exceed 8GB on Linux without huge pages)\nStep 3: SET effective_cache_size = 70% of remaining RAM (OS file cache estimate)\nStep 4: SET work_mem = (RAM - shared_buffers) / (max_connections * 16)\n         Example: (16GB - 4GB) / (100 * 16) = 12GB / 1600 = 7.6MB → set to 8MB\nStep 5: SET maintenance_work_mem = 5-10% of RAM for faster index/VACUUM\nStep 6: SET random_page_cost = 1.1 (SSD) or 4.0 (HDD)\nStep 7: SET wal_buffers = -1 (auto: 1/32 of shared_buffers, max 16MB)\nStep 8: MONITOR changes → if buffer hit ratio < 95%, increase shared_buffers\nStep 9: ITERATE → check pg_stat_statements for top wait events\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-configuration-tuner",
      children: "Python Implementation: Configuration Tuner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DatabaseConfigTuner:\n    def __init__(self, total_ram_gb: float, cpu_cores: int,\n                 max_connections: int = 100, storage_type: str = \"ssd\"):\n        self.ram = total_ram_gb\n        self.cores = cpu_cores\n        self.connections = max_connections\n        self.storage = storage_type.lower()\n        self.recommendations = {}\n\n    def tune_memory(self) -> dict:\n        shared_buffers = min(self.ram * 0.25, 8.0)  # cap at 8GB on Linux\n        remaining = self.ram - shared_buffers\n        effective_cache = remaining * 0.70\n        work_mem = max(4, (remaining * 1024) / (self.connections * 16))\n        maintenance_work = max(64, min(self.ram * 0.05, 2048))\n\n        self.recommendations.update({\n            \"shared_buffers\": f\"{shared_buffers:.0f}GB\",\n            \"effective_cache_size\": f\"{effective_cache:.0f}GB\",\n            \"work_mem\": f\"{work_mem:.0f}MB\",\n            \"maintenance_work_mem\": f\"{maintenance_work:.0f}MB\",\n            \"wal_buffers\": f\"{min(16, max(1, int(shared_buffers * 32)))}MB\",\n        })\n        return self.recommendations\n\n    def tune_io(self) -> dict:\n        if self.storage == \"ssd\" or self.storage == \"nvme\":\n            random_page_cost = 1.1\n        elif self.storage == \"hdd\":\n            random_page_cost = 4.0\n        else:\n            random_page_cost = 1.5\n\n        self.recommendations.update({\n            \"random_page_cost\": random_page_cost,\n            \"effective_io_concurrency\": 200 if \"nvme\" in self.storage else 2,\n        })\n        return self.recommendations\n\n    def tune_parallelism(self) -> dict:\n        self.recommendations.update({\n            \"max_parallel_workers_per_gather\": self.cores // 2,\n            \"max_parallel_workers\": self.cores,\n            \"max_parallel_maintenance_workers\": min(self.cores // 2, 4),\n            \"parallel_tuple_cost\": 0.01,\n            \"parallel_setup_cost\": 100,\n        })\n        return self.recommendations\n\n    def tune_checkpoint(self) -> dict:\n        wal_gb = min(max(self.ram * 0.05, 1), 64)\n        self.recommendations.update({\n            \"checkpoint_completion_target\": 0.9,\n            \"max_wal_size\": f\"{wal_gb:.0f}GB\",\n            \"min_wal_size\": f\"{max(1, wal_gb / 4):.0f}GB\",\n            \"checkpoint_timeout\": \"15min\",\n        })\n        return self.recommendations\n\n    def generate_report(self) -> str:\n        self.tune_memory()\n        self.tune_io()\n        self.tune_parallelism()\n        self.tune_checkpoint()\n\n        report = f\"\"\"\n=== PostgreSQL CONFIGURATION TUNING REPORT ===\nSystem: {self.ram:.0f}GB RAM, {self.cores} CPUs, {self.connections} max_conn, {self.storage.upper()}\n\nRecommended postgresql.conf settings:\n\n# MEMORY\nshared_buffers = '{self.recommendations[\"shared_buffers\"]}'\neffective_cache_size = '{self.recommendations[\"effective_cache_size\"]}'\nwork_mem = '{self.recommendations[\"work_mem\"]}'\nmaintenance_work_mem = '{self.recommendations[\"maintenance_work_mem\"]}'\nwal_buffers = '{self.recommendations[\"wal_buffers\"]}'\n\n# I/O\nrandom_page_cost = {self.recommendations[\"random_page_cost\"]}\neffective_io_concurrency = {self.recommendations[\"effective_io_concurrency\"]}\n\n# PARALLELISM\nmax_parallel_workers_per_gather = {self.recommendations[\"max_parallel_workers_per_gather\"]}\nmax_parallel_workers = {self.recommendations[\"max_parallel_workers\"]}\nmax_parallel_maintenance_workers = {self.recommendations[\"max_parallel_maintenance_workers\"]}\n\n# CHECKPOINT\ncheckpoint_completion_target = {self.recommendations[\"checkpoint_completion_target\"]}\nmax_wal_size = '{self.recommendations[\"max_wal_size\"]}'\nmin_wal_size = '{self.recommendations[\"min_wal_size\"]}'\ncheckpoint_timeout = '{self.recommendations[\"checkpoint_timeout\"]}'\n\nEdge Cases:\n- If < 2GB RAM: disable parallelism (max_parallel_workers_per_gather = 0)\n- If storage is NVMe: set random_page_cost = 1.0\n- If using replication: reduce checkpoint tuning aggressiveness\n- If containerized: cap shared_buffers at container memory limit, not host\n\"\"\"\n        return report\n\ntuner = DatabaseConfigTuner(total_ram_gb=16, cpu_cores=8,\n                           max_connections=100, storage_type=\"nvme\")\nprint(tuner.generate_report())\n\ntuner_small = DatabaseConfigTuner(total_ram_gb=2, cpu_cores=2,\n                                 max_connections=25, storage_type=\"hdd\")\nprint(tuner_small.generate_report())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) → all calculations are arithmetic formulas with no iteration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → fixed number of configuration parameters (~15)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Configuration tuning is a one-pass calculation based on hardware specs. No search, no iteration. Complexity is constant because the number of config parameters is fixed per database engine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "197-connection-pooling",
      children: "19.7 Connection Pooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-valet-parking",
      children: "Real-World Analogy: Valet Parking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connection pooling is like a valet parking service. Without a pool, every application thread parks its own car (opens a database connection): find a spot (TCP handshake), walk to the entrance (authentication), park (session setup), then reverse the whole process after shopping (query). With a pool, valets (pooler) keep 10-50 cars ready at the entrance. When you arrive (query request), you get a car instantly. When done, the valet parks it for the next person."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connection-pool-vs-direct-connection",
      children: "Connection Pool vs Direct Connection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct Connection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connection Pool"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20-50ms (TCP + SSL + auth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0ms (pre-established)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Concurrent Connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N (unbounded, crashes DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (pool_size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5-10 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5-10 MB (shared across pool)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DB Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (fork+auth per connection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (reuse existing sessions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset on checkout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~500 connections on mid-range DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000s of app threads on 50 DB connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application must reconnect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool transparently reconnects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-thread-safe-connection-pool",
      children: "C++ Implementation: Thread-Safe Connection Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <mutex>\n#include <condition_variable>\n#include <chrono>\n#include <memory>\n#include <string>\n#include <atomic>\n#include <thread>\n\nstruct DatabaseConnection {\n    int id;\n    bool inUse;\n    std::string host;\n    int port;\n    std::chrono::steady_clock::time_point createdAt;\n\n    DatabaseConnection(int id, std::string h, int p)\n        : id(id), inUse(false), host(h), port(p) {\n        createdAt = std::chrono::steady_clock::now();\n    }\n\n    bool isHealthy() {\n        return true; // Simulated health check\n    }\n\n    bool isStale(int maxLifetimeSec = 300) {\n        auto now = std::chrono::steady_clock::now();\n        auto age = std::chrono::duration_cast<std::chrono::seconds>(\n            now - createdAt).count();\n        return age > maxLifetimeSec;\n    }\n};\n\nclass ConnectionPool {\nprivate:\n    std::queue<std::shared_ptr<DatabaseConnection>> available;\n    std::vector<std::shared_ptr<DatabaseConnection>> allConnections;\n    std::mutex mtx;\n    std::condition_variable cv;\n    int maxSize;\n    int currentId;\n    std::atomic<bool> shutdownFlag;\n    std::atomic<int> activeCount;\n    std::atomic<int> hitCount;\n    std::atomic<int> missCount;\n\npublic:\n    ConnectionPool(int minSize, int maxSize, std::string host, int port)\n        : maxSize(maxSize), currentId(0), shutdownFlag(false),\n          activeCount(0), hitCount(0), missCount(0) {\n        for (int i = 0; i < minSize; ++i) {\n            auto conn = std::make_shared<DatabaseConnection>(\n                ++currentId, host, port);\n            allConnections.push_back(conn);\n            available.push(conn);\n        }\n        std::cout << \"Pool initialized with \" << minSize\n                  << \" connections\\n\";\n    }\n\n    ~ConnectionPool() {\n        shutdown();\n    }\n\n    std::shared_ptr<DatabaseConnection> acquire(int timeoutMs = 5000) {\n        std::unique_lock<std::mutex> lock(mtx);\n        auto deadline = std::chrono::steady_clock::now()\n                      + std::chrono::milliseconds(timeoutMs);\n\n        // Return available connection if exists\n        if (!available.empty()) {\n            auto conn = available.front();\n            available.pop();\n            conn->inUse = true;\n            activeCount++;\n            hitCount++;\n            std::cout << \"[ACQUIRE] Connection \" << conn->id\n                      << \" (hit). Active: \" << activeCount.load() << \"\\n\";\n            return conn;\n        }\n\n        // Create new connection if under max size\n        if ((int)allConnections.size() < maxSize) {\n            auto conn = std::make_shared<DatabaseConnection>(\n                ++currentId, \"dbhost\", 5432);\n            allConnections.push_back(conn);\n            conn->inUse = true;\n            activeCount++;\n            missCount++;\n            std::cout << \"[ACQUIRE] Connection \" << conn->id\n                      << \" (new). Active: \" << activeCount.load() << \"\\n\";\n            return conn;\n        }\n\n        // Wait for a connection to be released\n        bool acquired = cv.wait_until(lock, deadline, [this]() {\n            return shutdownFlag.load() || !available.empty();\n        });\n\n        if (!acquired || shutdownFlag.load()) {\n            std::cout << \"[TIMEOUT] No connection available within \"\n                      << timeoutMs << \"ms\\n\";\n            return nullptr;\n        }\n\n        auto conn = available.front();\n        available.pop();\n        conn->inUse = true;\n        activeCount++;\n        hitCount++;\n        return conn;\n    }\n\n    void release(std::shared_ptr<DatabaseConnection> conn) {\n        std::lock_guard<std::mutex> lock(mtx);\n\n        if (!conn || shutdownFlag.load()) return;\n\n        conn->inUse = false;\n\n        // Replace stale connections\n        if (conn->isStale()) {\n            std::cout << \"[RELEASE] Connection \" << conn->id\n                      << \" is stale, creating replacement\\n\";\n            auto newConn = std::make_shared<DatabaseConnection>(\n                ++currentId, \"dbhost\", 5432);\n            allConnections.push_back(newConn);\n            available.push(newConn);\n        } else {\n            available.push(conn);\n        }\n\n        activeCount--;\n        cv.notify_one();\n    }\n\n    void shutdown() {\n        shutdownFlag.store(true);\n        cv.notify_all();\n        std::cout << \"Pool shutdown. Stats: hits=\" << hitCount.load()\n                  << \", misses=\" << missCount.load()\n                  << \", active=\" << activeCount.load() << \"\\n\";\n    }\n\n    int getActiveCount() { return activeCount.load(); }\n    int getHitRate() {\n        int total = hitCount.load() + missCount.load();\n        return total > 0 ? (hitCount.load() * 100) / total : 0;\n    }\n};\n\nint main() {\n    ConnectionPool pool(5, 20, \"localhost\", 5432);\n\n    std::vector<std::thread> workers;\n    for (int i = 0; i < 10; ++i) {\n        workers.emplace_back([&pool, i]() {\n            for (int j = 0; j < 5; ++j) {\n                auto conn = pool.acquire(2000);\n                if (conn) {\n                    std::this_thread::sleep_for(\n                        std::chrono::milliseconds(100));\n                    pool.release(conn);\n                }\n            }\n        });\n    }\n\n    for (auto& t : workers) t.join();\n\n    std::cout << \"\\nFinal stats: hit rate = \" << pool.getHitRate() << \"%\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for acquire/release → queue operations are O(1) amortized. Condition variable wait is O(1). The pool size is bounded by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxSize"
        }), " (typically 10-50)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(maxSize) for storing connection objects. Each connection holds socket buffer (~200KB) and connection state (~100KB)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " A queue is the natural structure for LIFO pool access (hot connections stay hot). Mutex contention is minimized because connections are held for query duration (5-500ms), not microseconds. Condition variable signals only one waiting thread (not broadcast)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-async-connection-pool",
      children: "Python Implementation: Async Connection Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nimport time\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass PoolConnection:\n    id: int\n    created_at: float = field(default_factory=time.time)\n    in_use: bool = False\n    query_count: int = 0\n\nclass AsyncConnectionPool:\n    def __init__(self, min_size: int = 5, max_size: int = 20,\n                 max_lifetime: int = 300, max_queries_per_conn: int = 1000):\n        self.min_size = min_size\n        self.max_size = max_size\n        self.max_lifetime = max_lifetime\n        self.max_queries = max_queries_per_conn\n        self._pool: asyncio.Queue[PoolConnection] = asyncio.Queue()\n        self._all_conns: list[PoolConnection] = []\n        self._active = 0\n        self._hits = 0\n        self._misses = 0\n        self._closed = False\n        self._next_id = 1\n\n    async def initialize(self):\n        for _ in range(self.min_size):\n            conn = PoolConnection(self._next_id)\n            self._next_id += 1\n            self._all_conns.append(conn)\n            await self._pool.put(conn)\n        print(f\"Pool initialized with {self.min_size} connections\")\n\n    def _create_connection(self) -> PoolConnection:\n        conn = PoolConnection(self._next_id)\n        self._next_id += 1\n        self._all_conns.append(conn)\n        return conn\n\n    async def acquire(self, timeout: float = 5.0) -> Optional[PoolConnection]:\n        if self._closed:\n            raise RuntimeError(\"Pool is closed\")\n\n        try:\n            conn = await asyncio.wait_for(self._pool.get(), timeout)\n            self._hits += 1\n        except asyncio.TimeoutError:\n            if len(self._all_conns) < self.max_size:\n                conn = self._create_connection()\n                self._misses += 1\n                print(f\"[NEW] Connection {conn.id} created (miss)\")\n            else:\n                print(f\"[TIMEOUT] No available connection in {timeout}s\")\n                return None\n\n        conn.in_use = True\n        self._active += 1\n        return conn\n\n    async def release(self, conn: PoolConnection):\n        conn.in_use = False\n        conn.query_count += 1\n        self._active -= 1\n\n        age = time.time() - conn.created_at\n        should_replace = (\n            age > self.max_lifetime or\n            conn.query_count > self.max_queries\n        )\n\n        if not self._closed and not should_replace:\n            await self._pool.put(conn)\n        elif not self._closed:\n            replacement = self._create_connection()\n            await self._pool.put(replacement)\n            print(f\"[REPLACE] Connection {conn.id} replaced \"\n                  f\"(age={age:.0f}s, queries={conn.query_count})\")\n\n    async def health_check(self):\n        while not self._closed:\n            await asyncio.sleep(30)\n            for conn in self._all_conns:\n                if (not conn.in_use and\n                    time.time() - conn.created_at > self.max_lifetime):\n                    print(f\"[EVICT] Stale connection {conn.id}\")\n            print(f\"Pool: {self._pool.qsize()}/{len(self._all_conns)} available, \"\n                  f\"{self._active} active, \"\n                  f\"hit rate={self.hit_rate:.0f}%\")\n\n    @property\n    def hit_rate(self):\n        total = self._hits + self._misses\n        return (self._hits / total * 100) if total > 0 else 0\n\n    async def close(self):\n        self._closed = True\n        self._all_conns.clear()\n        while not self._pool.empty():\n            await self._pool.get()\n\nasync def simulate_workload():\n    pool = AsyncConnectionPool(min_size=5, max_size=15)\n    await pool.initialize()\n\n    async def worker(wid: int):\n        for i in range(10):\n            conn = await pool.acquire()\n            if conn:\n                print(f\"  Worker {wid} using conn {conn.id}\")\n                await asyncio.sleep(0.05 + (i * 0.01))\n                await pool.release(conn)\n\n    workers = [worker(i) for i in range(20)]\n    await asyncio.gather(*workers)\n    print(f\"\\nFinal hit rate: {pool.hit_rate:.0f}%\")\n    await pool.close()\n\nasyncio.run(simulate_workload())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for acquire/release. Async queue operations are O(1). Health check runs every 30s as O(N) where N = total connections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(maxSize) for connection pool + event loop overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Async pool leverages Python's asyncio.Queue (built on collections.deque, O(1) push/pop). The health check is amortized over 30s intervals so it costs ~0.001% CPU. Connection replacement happens on release to avoid blocking acquire."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-connection-pooling",
      children: "Edge Cases in Connection Pooling"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection Leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application acquires but never releases"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pool tracks connections; timeout eviction; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__del__"
            }), " safety net"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale Connections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network timeout, firewall closes idle connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool tests connection before returning (SELECT 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pool Exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All connections in use, new requests queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor pool utilization; add alert at 80% utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication Storm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool restart floods DB with auth requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stagger reconnection; exponential backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Held Connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long transaction ties up connection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "statement_timeout"
            }), "; pool-level transaction timeout"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Split-Brain Pool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two instances each create max connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralize pool with PgBouncer or similar; cap per-instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection Sniping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast worker hogs connections from slow workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair queuing; per-connection timeout"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "198-partitioning-deep-dive",
      children: "19.8 Partitioning Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-filing-cabinet-system",
      children: "Real-World Analogy: Filing Cabinet System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partitioning is like organizing documents into separate filing cabinets by year. Instead of one giant cabinet with 100,000 folders (one table), you have one cabinet per year (partition). When you need Q1 2026 documents, you open only that drawer (partition pruning). Range partitioning is \"by year/month/day\". List partitioning is \"by department → Sales/Engineering/HR\". Hash partitioning is \"by employee ID → file cabinet 0-3\" when there's no natural grouping."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partitioning-types-comparison",
      children: "Partitioning Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partition Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Distribution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pruning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time, numeric range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered, contiguous ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent: WHERE ts BETWEEN ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, logs, events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random insert patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enumerated value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good: WHERE region = 'US'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant, geographic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-cardinality keys (e.g. UUID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any value (hash function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even distribution across N partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited: = only (no range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing, avoiding hot spots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries, sequential access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-level (list + range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent: both keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant + time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partition-pruning-dry-run-trace",
      children: "Partition Pruning Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Schema: measurements PARTITION BY RANGE (ts)\n-- Partitions: m_2024 (rows: 20M), m_2025 (rows: 25M), m_2026 (rows: 5M)\n\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT avg(value) FROM measurements\nWHERE ts >= '2026-01-01' AND ts < '2026-04-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without Partition Pruning (non-partitioned table):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan on measurements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,200,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3,450"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42,000"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "With Partition Pruning:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (ms)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan on m_2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "425,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "890"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2,100"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Pruning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Pruning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rows Scanned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5,000,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partitions Accessed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3,450 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "890 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O (Buffers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2,100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Improvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.9x faster, 20x less I/O"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-partition-pruning-simulator",
      children: "C++ Implementation: Partition Pruning Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <algorithm>\n\nstruct Partition {\n    std::string name;\n    std::string type; // range, list, hash\n    long rowCount;\n    std::string rangeStart; // for range\n    std::string rangeEnd;\n    std::vector<std::string> listValues; // for list\n    int hashModulus; // for hash\n    int hashRemainder;\n};\n\nclass PartitionPruningSimulator {\nprivate:\n    std::vector<Partition> partitions;\n    long totalRows;\n\npublic:\n    void addRangePartition(const std::string& name, long rows,\n                          const std::string& start, const std::string& end) {\n        partitions.push_back({name, \"range\", rows, start, end, {}, 0, 0});\n        totalRows += rows;\n    }\n\n    std::vector<std::string> pruneRange(const std::string& queryStart,\n                                       const std::string& queryEnd) {\n        std::vector<std::string> matched;\n        long scannedRows = 0;\n\n        for (auto& p : partitions) {\n            if (p.type != \"range\") continue;\n            // Check overlap: partition range intersects query range\n            if (queryEnd > p.rangeStart && queryStart < p.rangeEnd) {\n                matched.push_back(p.name);\n                scannedRows += p.rowCount;\n            }\n        }\n\n        double pruningEfficiency = totalRows > 0\n            ? (1.0 - (double)scannedRows / totalRows) * 100 : 0;\n\n        std::cout << \"\\n=== PARTITION PRUNING ANALYSIS ===\\n\";\n        std::cout << \"Total partitions: \" << partitions.size() << \"\\n\";\n        std::cout << \"Partitions scanned: \" << matched.size()\n                  << \" (\" << pruningEfficiency << \"% pruning)\\n\";\n        std::cout << \"Rows scanned: \" << scannedRows\n                  << \" / \" << totalRows << \"\\n\";\n\n        if (pruningEfficiency > 95.0)\n            std::cout << \"Verdict: EXCELLENT pruning\\n\";\n        else if (pruningEfficiency > 80.0)\n            std::cout << \"Verdict: GOOD pruning\\n\";\n        else if (pruningEfficiency > 50.0)\n            std::cout << \"Verdict: MODERATE pruning - consider repartitioning\\n\";\n        else\n            std::cout << \"Verdict: POOR pruning - partition key doesn't match filter\\n\";\n\n        return matched;\n    }\n\n    void analyzeDistribution() {\n        std::cout << \"\\n=== PARTITION DISTRIBUTION ===\\n\";\n        for (auto& p : partitions) {\n            double pct = totalRows > 0\n                ? (double)p.rowCount / totalRows * 100 : 0;\n            std::cout << p.name << \": \" << p.rowCount << \" rows (\"\n                      << pct << \"%)\";\n            if (pct > 40.0)\n                std::cout << \" [SKEW WARNING]\";\n            std::cout << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    PartitionPruningSimulator sim;\n\n    // 3 years of data, 50M rows total\n    sim.addRangePartition(\"m_2024\", 20000000, \"2024-01-01\", \"2025-01-01\");\n    sim.addRangePartition(\"m_2025\", 25000000, \"2025-01-01\", \"2026-01-01\");\n    sim.addRangePartition(\"m_2026\", 5000000, \"2026-01-01\", \"2027-01-01\");\n\n    sim.analyzeDistribution();\n    sim.pruneRange(\"2026-01-01\", \"2026-04-01\");\n\n    std::cout << \"\\n[COST CALCULATION]\\n\";\n    long beforeTotal = 50000000;\n    long afterTotal = 5000000;\n    double savings = (1.0 - (double)afterTotal / beforeTotal) * 100;\n    std::cout << \"Without pruning: \" << beforeTotal << \" rows scanned\\n\";\n    std::cout << \"With pruning: \" << afterTotal << \" rows scanned\\n\";\n    std::cout << \"Savings: \" << savings << \"% fewer rows\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(P) where P = partition count. Each partition checked once for range overlap. Typically P < 1000."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(P) for partition metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Partition pruning is a linear scan over partitions because each partition has a non-overlapping range. Binary search could improve to O(log P) but the overhead of maintaining sorted partitions and the small P count makes O(P) simpler and fast enough."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-partition-manager",
      children: "Python Implementation: Partition Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime, timedelta\nfrom typing import Optional\nimport abc\n\nclass Partition(abc.ABC):\n    def __init__(self, name: str, table: str):\n        self.name = name\n        self.table = table\n        self.row_count = 0\n\n    @abc.abstractmethod\n    def contains(self, key) -> bool: ...\n\n    @property\n    @abc.abstractmethod\n    def ddl(self) -> str: ...\n\nclass RangePartition(Partition):\n    def __init__(self, name: str, table: str,\n                 start: datetime, end: datetime):\n        super().__init__(name, table)\n        self.start = start\n        self.end = end\n\n    def contains(self, key: datetime) -> bool:\n        return self.start <= key < self.end\n\n    @property\n    def ddl(self) -> str:\n        start_str = self.start.strftime(\"%Y-%m-%d\")\n        end_str = self.end.strftime(\"%Y-%m-%d\")\n        return (f\"CREATE TABLE {self.name} PARTITION OF {self.table}\\n\"\n                f\"  FOR VALUES FROM ('{start_str}') TO ('{end_str}');\")\n\nclass ListPartition(Partition):\n    def __init__(self, name: str, table: str, values: list[str]):\n        super().__init__(name, table)\n        self.values = values\n\n    def contains(self, key: str) -> bool:\n        return key in self.values\n\n    @property\n    def ddl(self) -> str:\n        vals = \", \".join(f\"'{v}'\" for v in self.values)\n        return (f\"CREATE TABLE {self.name} PARTITION OF {self.table}\\n\"\n                f\"  FOR VALUES IN ({vals});\")\n\nclass HashPartition(Partition):\n    def __init__(self, name: str, table: str,\n                 modulus: int, remainder: int):\n        super().__init__(name, table)\n        self.modulus = modulus\n        self.remainder = remainder\n\n    def contains(self, key: int) -> bool:\n        return hash(key) % self.modulus == self.remainder\n\n    @property\n    def ddl(self) -> str:\n        return (f\"CREATE TABLE {self.name} PARTITION OF {self.table}\\n\"\n                f\"  FOR VALUES WITH (MODULUS {self.modulus}, \"\n                f\"REMAINDER {self.remainder});\")\n\nclass PartitionManager:\n    def __init__(self, table: str, partition_type: str):\n        self.table = table\n        self.partition_type = partition_type\n        self.partitions: list[Partition] = []\n\n    def add_partition(self, partition: Partition) -> None:\n        self.partitions.append(partition)\n        print(f\"Added partition: {partition.name}\")\n        print(partition.ddl)\n        print()\n\n    def find_partition(self, key) -> Optional[Partition]:\n        for p in self.partitions:\n            if p.contains(key):\n                return p\n        return None\n\n    def suggest_new_range_partitions(self, future_months: int = 6):\n        if not self.partitions:\n            return\n        last = self.partitions[-1]\n        if isinstance(last, RangePartition):\n            current = last.end\n            for _ in range(future_months):\n                next_end = current + timedelta(days=30)\n                name = f\"{self.table}_\"\n                name += current.strftime(\"%Y_%m\")\n                p = RangePartition(name, self.table, current, next_end)\n                print(f\"[SUGGEST] Create future partition: {p.ddl}\")\n                current = next_end\n\n    def maintenance_report(self) -> str:\n        report = f\"\\n=== PARTITION MAINTENANCE: {self.table} ===\\n\"\n        total_rows = sum(p.row_count for p in self.partitions)\n        report += f\"Partitions: {len(self.partitions)}\\n\"\n        report += f\"Total rows: {total_rows:,}\\n\\n\"\n\n        for p in self.partitions:\n            pct = (p.row_count / max(total_rows, 1)) * 100\n            report += f\"  {p.name}: {p.row_count:,} rows ({pct:.1f}%)\\n\"\n            if isinstance(p, RangePartition):\n                report += f\"    Range: {p.start.date()} → {p.end.date()}\\n\"\n\n        return report\n\npm = PartitionManager(\"measurements\", \"range\")\n\ntoday = datetime(2026, 1, 1)\nfor i in range(4):\n    start = today + timedelta(days=i * 91)\n    end = today + timedelta(days=(i + 1) * 91)\n    name = f\"measurements_q{i + 1}_2026\"\n    rp = RangePartition(name, \"measurements\", start, end)\n    rp.row_count = 5000000\n    pm.add_partition(rp)\n\nprint(pm.maintenance_report())\npm.suggest_new_range_partitions(2)\n\nquery_date = datetime(2026, 4, 15)\nfound = pm.find_partition(query_date)\nif found:\n    print(f\"\\nQuery date {query_date.date()} prunes to partition: {found.name}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(P) for find_partition (linear scan). O(1) for add_partition. O(F) for suggest_new_partitions where F = future months."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(P) for partition list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Linear scan is acceptable for find_partition because P is small (typically < 365 for daily partitions, < 100 for monthly). The database's actual partition pruning uses hash-based or binary-search lookups, but the manager's linear scan is simpler and sufficient for management tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "199-materialized-views",
      children: "19.9 Materialized Views"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-weekly-meal-prep",
      children: "Real-World Analogy: Weekly Meal Prep"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A materialized view is like meal prepping for the week. On Sunday, you cook 20 meals (run the heavy query), portion them into containers (store in a physical table), and refrigerate. During the week, you grab a container and reheat in 2 minutes (query the materialized view) instead of spending 45 minutes cooking each meal from scratch. The trade-off: the meal is from Sunday's groceries (stale data), but you saved 43 minutes per meal (performance gain)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "materialized-view-vs-view-vs-temp-table",
      children: "Materialized View vs View vs Temp Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Materialized View"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Temp Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (virtual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical table (disk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical (session-scoped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Freshness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale until refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current for session duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computed (fast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base (if populated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to run query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to run query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refresh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (REFRESH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (DROP/CREATE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking or concurrent refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (can add indexes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control, wrapping complex joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, dashboards, aggregations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETL staging, complex multi-step analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-materialized-view-refresh-scheduler",
      children: "C++ Implementation: Materialized View Refresh Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <chrono>\n#include <thread>\n#include <atomic>\n#include <functional>\n#include <iomanip>\n#include <ctime>\n\nenum class RefreshStrategy {\n    FULL_REFRESH,    // DROP + CREATE (blocking)\n    CONCURRENT,      // REFRESH CONCURRENTLY (non-blocking)\n    INCREMENTAL      // Apply changes only (materialized view log)\n};\n\nstruct MaterializedView {\n    std::string name;\n    std::string query;\n    RefreshStrategy strategy;\n    long rowCount;\n    long refreshDurationMs;\n    std::chrono::system_clock::time_point lastRefresh;\n    std::atomic<bool> isRefreshing;\n\n    MaterializedView(std::string n, std::string q, RefreshStrategy s)\n        : name(n), query(q), strategy(s), rowCount(0),\n          refreshDurationMs(0), isRefreshing(false) {}\n};\n\nclass MVRefreshScheduler {\nprivate:\n    std::vector<MaterializedView> views;\n    std::atomic<int> activeRefreshes{0};\n\npublic:\n    void registerView(const std::string& name, const std::string& query,\n                     RefreshStrategy strategy = RefreshStrategy::CONCURRENT) {\n        views.emplace_back(name, query, strategy);\n        std::cout << \"Registered MV: \" << name << \"\\n\";\n    }\n\n    void refreshView(MaterializedView& mv) {\n        if (mv.isRefreshing.exchange(true)) {\n            std::cout << \"[SKIP] \" << mv.name\n                      << \" is already refreshing\\n\";\n            return;\n        }\n\n        auto start = std::chrono::steady_clock::now();\n        activeRefreshes++;\n\n        std::cout << \"[REFRESH] \" << mv.name << \" (\"\n                  << (mv.strategy == RefreshStrategy::CONCURRENT\n                      ? \"CONCURRENTLY\" : \"FULL\")\n                  << \")...\\n\";\n\n        // Simulate refresh time based on row count\n        int simTimeMs = mv.rowCount > 0\n            ? std::min(5000, (int)(mv.rowCount / 10000))\n            : 1000;\n        std::this_thread::sleep_for(std::chrono::milliseconds(simTimeMs));\n\n        auto end = std::chrono::steady_clock::now();\n        mv.refreshDurationMs = std::chrono::duration_cast<\n            std::chrono::milliseconds>(end - start).count();\n        mv.lastRefresh = std::chrono::system_clock::now();\n        mv.isRefreshing = false;\n        activeRefreshes--;\n\n        auto now = std::chrono::system_clock::to_time_t(mv.lastRefresh);\n        std::cout << \"[DONE] \" << mv.name << \" refreshed in \"\n                  << mv.refreshDurationMs << \"ms (\"\n                  << std::put_time(std::localtime(&now), \"%H:%M:%S\")\n                  << \")\\n\";\n    }\n\n    void refreshAll() {\n        std::cout << \"\\n=== REFRESHING ALL MATERIALIZED VIEWS ===\\n\";\n        for (auto& mv : views) {\n            refreshView(mv);\n        }\n    }\n\n    void refreshConcurrent() {\n        std::cout << \"\\n=== CONCURRENT REFRESH ===\\n\";\n        std::vector<std::thread> workers;\n        for (auto& mv : views) {\n            workers.emplace_back(\n                [this, &mv]() { refreshView(mv); });\n        }\n        for (auto& t : workers) t.join();\n    }\n\n    void simulateStaleness() {\n        std::cout << \"\\n=== MATERIALIZED VIEW STALENESS REPORT ===\\n\";\n        auto now = std::chrono::system_clock::now();\n\n        for (auto& mv : views) {\n            auto age = std::chrono::duration_cast<std::chrono::seconds>(\n                now - mv.lastRefresh).count();\n            auto now_t = std::chrono::system_clock::to_time_t(now);\n            auto refresh_t = std::chrono::system_clock::to_time_t(\n                mv.lastRefresh);\n\n            std::cout << mv.name << \": last refreshed \"\n                      << std::put_time(std::localtime(&refresh_t),\n                                       \"%H:%M:%S\")\n                      << \" (\" << age << \"s ago)\";\n\n            if (age > 3600)\n                std::cout << \" [STALE > 1hr]\";\n            else if (age > 900)\n                std::cout << \" [MODERATELY STALE]\";\n            else\n                std::cout << \" [FRESH]\";\n            std::cout << \"\\n\";\n        }\n    }\n\n    std::string estimateStorage(std::string mvName, long baseRows,\n                               int columnCount) {\n        // Estimate: 50 bytes per row overhead + data\n        long bytesPerRow = 50 + columnCount * 8;\n        long totalBytes = baseRows * bytesPerRow;\n        double mb = totalBytes / (1024.0 * 1024.0);\n\n        char buf[128];\n        snprintf(buf, sizeof(buf),\n                 \"MV '%s': ~%.1f MB for %ld rows (%d cols)\",\n                 mvName.c_str(), mb, baseRows, columnCount);\n        return std::string(buf);\n    }\n};\n\nint main() {\n    MVRefreshScheduler scheduler;\n\n    scheduler.registerView(\n        \"mv_monthly_sales\",\n        \"SELECT date_trunc('month', order_date), SUM(amount) ...\",\n        RefreshStrategy::CONCURRENT);\n\n    scheduler.registerView(\n        \"mv_dashboard_hourly\",\n        \"SELECT date_trunc('hour', created_at), COUNT(*) ...\",\n        RefreshStrategy::CONCURRENT);\n\n    scheduler.registerView(\n        \"mv_inventory_summary\",\n        \"SELECT product_id, SUM(stock) ...\",\n        RefreshStrategy::FULL_REFRESH);\n\n    // Set initial row counts\n    scheduler.views[0].rowCount = 500000;\n    scheduler.views[1].rowCount = 200000;\n    scheduler.views[2].rowCount = 100000;\n\n    // Initial refresh\n    scheduler.refreshAll();\n\n    // Concurrent refresh simulation\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    scheduler.refreshConcurrent();\n\n    // Storage estimate\n    std::cout << \"\\n\" << scheduler.estimateStorage(\n        \"mv_monthly_sales\", 500000, 8) << \"\\n\";\n\n    scheduler.simulateStaleness();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(N) for full refresh where N = base table rows scanned. O(U) for incremental refresh where U = changed rows since last refresh. Typically U << N, making incremental 10-100x faster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(R) for stored result set where R = materialized view row count. Indexes on the MV add additional space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Full refresh re-runs the entire query (must scan base tables). Concurrent refresh needs a unique index to create a diff. Incremental refresh (via materialized view logs) only scans changes but requires trigger-based capture."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1910-query-caching",
      children: "19.10 Query Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-coffee-thermoses",
      children: "Real-World Analogy: Coffee Thermoses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query caching is like having coffee thermoses vs brewing fresh coffee each time. Without cache, every coffee request goes through the full process: grind beans (parse SQL), boil water (plan query), brew (execute), pour (fetch results). With a cache, if someone just made the same coffee (same query), you pour from the thermos (cache). The challenge: how long do you keep the thermos before the coffee goes stale (cache invalidation)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-cache-vs-application-cache",
      children: "Query Cache vs Application Cache"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database Query Cache"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Cache"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside DB memory (buffer pool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application tier (Redis, Memcached, in-memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query text → result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary key → value (can cache rendered HTML)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invalidation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table writes flush all related cache entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-controlled TTL, event-driven eviction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Volatility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory, lost on restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hit Rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to repeated identical queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High for hot data with well-designed keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.1ms (shared memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.5-2ms (network to Redis) to ~0.01ms (in-process)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DB-local; replicas have separate caches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared across all application instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Staleness Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (cache updated on same transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (TTL trade-off)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postgresql-buffer-cache-inspection",
      children: "PostgreSQL Buffer Cache Inspection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Which tables/pages are in the buffer cache?\nSELECT c.relname, count(*) AS buffers,\n       pg_size_pretty(count(*) * 8192) AS bytes\nFROM pg_class c\nJOIN pg_buffercache b ON b.relfilenode = c.relfilenode\nGROUP BY c.relname\nORDER BY buffers DESC\nLIMIT 10;\n\n-- Cache hit rate for specific table\nSELECT\n    relname,\n    heap_blks_hit,\n    heap_blks_read,\n    round(100.0 * heap_blks_hit /\n          nullif(heap_blks_hit + heap_blks_read, 0), 2) AS hit_pct\nFROM pg_statio_user_tables\nWHERE relname = 'orders';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-query-cache-simulator",
      children: "Python Implementation: Query Cache Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport hashlib\nimport threading\nfrom collections import OrderedDict\nfrom dataclasses import dataclass, field\nfrom typing import Any, Optional\n\n@dataclass\nclass CacheEntry:\n    key: str\n    value: Any\n    created_at: float = field(default_factory=time.time)\n    accessed_at: float = field(default_factory=time.time)\n    access_count: int = 0\n    size_bytes: int = 0\n    ttl_seconds: float = 60.0\n\n    def is_expired(self) -> bool:\n        return time.time() - self.created_at > self.ttl_seconds\n\nclass QueryCache:\n    def __init__(self, max_size_mb: float = 100.0,\n                 default_ttl: float = 60.0):\n        self.max_bytes = int(max_size_mb * 1024 * 1024)\n        self.default_ttl = default_ttl\n        self._cache: OrderedDict[str, CacheEntry] = OrderedDict()\n        self._current_bytes = 0\n        self._lock = threading.RLock()\n        self._hits = 0\n        self._misses = 0\n        self._evictions = 0\n\n    def _make_key(self, query: str, params: tuple = ()) -> str:\n        normalized = \" \".join(query.split())\n        key = f\"{normalized}|{params}\"\n        return hashlib.md5(key.encode()).hexdigest()\n\n    def get(self, query: str, params: tuple = ()) -> Optional[Any]:\n        key = self._make_key(query, params)\n        with self._lock:\n            entry = self._cache.get(key)\n            if not entry or entry.is_expired():\n                if entry:\n                    del self._cache[key]\n                    self._current_bytes -= entry.size_bytes\n                self._misses += 1\n                return None\n\n            entry.access_count += 1\n            entry.accessed_at = time.time()\n            # Move to end (most recently used)\n            self._cache.move_to_end(key)\n            self._hits += 1\n            return entry.value\n\n    def set(self, query: str, params: tuple, value: Any,\n            ttl: Optional[float] = None,\n            size_bytes: int = 1024) -> None:\n        key = self._make_key(query, params)\n        with self._lock:\n            entry = CacheEntry(\n                key=key,\n                value=value,\n                ttl_seconds=ttl or self.default_ttl,\n                size_bytes=size_bytes\n            )\n\n            # Evict if full (LRU)\n            while self._current_bytes + size_bytes > self.max_bytes:\n                if not self._cache:\n                    return\n                oldest_key, oldest = self._cache.popitem(last=False)\n                self._current_bytes -= oldest.size_bytes\n                self._evictions += 1\n\n            self._cache[key] = entry\n            self._current_bytes += size_bytes\n\n    def invalidate_table(self, table_name: str) -> int:\n        \"\"\"Invalidate all cache entries referencing a table.\"\"\"\n        count = 0\n        with self._lock:\n            keys_to_delete = [\n                k for k, v in self._cache.items()\n                if table_name in v.key\n            ]\n            for k in keys_to_delete:\n                self._current_bytes -= self._cache[k].size_bytes\n                del self._cache[k]\n                count += 1\n        return count\n\n    @property\n    def stats(self) -> dict:\n        total = self._hits + self._misses\n        return {\n            \"hits\": self._hits,\n            \"misses\": self._misses,\n            \"hit_rate\": (self._hits / total * 100) if total > 0 else 0,\n            \"entries\": len(self._cache),\n            \"size_mb\": self._current_bytes / (1024 * 1024),\n            \"max_mb\": self.max_bytes / (1024 * 1024),\n            \"evictions\": self._evictions,\n        }\n\n    def warmup(self, queries: list[tuple[str, tuple, Any]]) -> None:\n        \"\"\"Pre-populate cache with common queries.\"\"\"\n        for query, params, result in queries:\n            self.set(query, params, result)\n        print(f\"[WARMUP] Loaded {len(queries)} entries into cache\")\n\ncache = QueryCache(max_size_mb=50, default_ttl=120)\n\n# Simulate workload\nfor i in range(100):\n    result = cache.get(\n        \"SELECT * FROM orders WHERE id = ?\", (i,)\n    )\n    if result is None:\n        cache.set(\n            \"SELECT * FROM orders WHERE id = ?\", (i,),\n            {\"id\": i, \"total\": 100.0 + i},\n            size_bytes=256\n        )\n\n# Invalidate on write\nevicted = cache.invalidate_table(\"orders\")\nprint(f\"Evicted {evicted} entries on table modification\")\n\nprint(f\"\\nCache stats: {cache.stats}\")\nprint(f\"Hit rate: {cache.stats['hit_rate']:.1f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for get/set (hash table lookup + OrderedDict move_to_end). O(E) for invalidation where E = entries matching table pattern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(N) where N = cache entries. Each entry stores key (32 bytes hash), value (variable), and metadata (~80 bytes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Hash table with MD5 key provides O(1) average-case lookup. OrderedDict enables O(1) LRU eviction. TTL expiry is checked on access (not background thread) to avoid overhead. Invalidation is O(E) because it scans all entries → acceptable for small caches (< 10K entries)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-caching",
      children: "Edge Cases in Caching"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache Stampede"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 requests miss simultaneously, all hit DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic early expiration (random TTL jitter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thundering Herd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache expires, all replicas recompute at once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex on cache miss; only one recomputes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale Read After Write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read replica has old cache, new data invisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven invalidation; short TTL on sensitive data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache Poisoning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malformed query cached, bad results served"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate before caching; cache key includes params"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Pressure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache evicts hot entries for cold ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proper sizing: 10-20% of working set; monitor eviction rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialization Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large result sets slow down cache read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compress; cache page keys not full rows; consider partial results"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "index-vs-full-scan-decision-criteria",
      children: "Index vs Full Scan Decision Criteria"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefer Index Scan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefer Full/Seq Scan"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selectivity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10% of rows returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 25% of rows returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Table Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large table (> 100K rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small table (< 1000 rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point lookup, small range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unfiltered aggregation, bulk read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches filter exactly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No matching index exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY matches index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable (index scans are single-thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq scan parallelizes across workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index-only scan possible (covering index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap access required anyway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD (low random_page_cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDD (random_page_cost = 4x)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Formula (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "index_cost = index_height * random_page_cost + matching_pages * random_page_cost\nseq_cost = total_pages * seq_page_cost / parallel_workers\n\nIf index_cost < seq_cost → Index Scan\nElse → Sequential Scan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-how-to-read-an-explain-plan",
      children: "1. How to Read an EXPLAIN Plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " \"Explain how you would read and diagnose a PostgreSQL EXPLAIN plan.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Read bottom-up, right-to-left (execution order)\nStep 2: For each node, compare actual rows vs estimated rows\n  - Match (< 2x difference): statistics are accurate\n  - Mismatch (> 10x): stale statistics or correlated columns\nStep 3: Look for expensive nodes (highest actual time)\nStep 4: Check join strategy:\n  - Nested Loop: good for small inner tables\n  - Hash Join: good for medium tables\n  - Merge Join: good for pre-sorted data\nStep 5: Check for problem patterns:\n  - Seq Scan on large table with WHERE filter → missing index\n  - Rows Removed by Filter > 90% → poor index selectivity\n  - Sort node without index → consider index on ORDER BY columns\n  - Multiple nested loop joins → check join order and indexes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-slow-query-debugging-process",
      children: "2. Slow Query Debugging Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " \"Walk me through how you debug a slow query in production.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. CAPTURE: Enable slow query log (long_query_time=1s in MySQL,\n   log_min_duration=1000ms in PG) or query pg_stat_statements\n\n2. IDENTIFY: Find the worst query by total_time / calls\n\n3. ISOLATE: Run the query with EXPLAIN (ANALYZE, BUFFERS)\n   - Never run on production primary if avoidable\n   - Use pg_stat_statements normalization to see parameterized version\n\n4. DIAGNOSE: Look for these patterns:\n   - Seq Scan on large table → missing index\n   - Row estimate 10x off → stale statistics → ANALYZE\n   - Nested Loop with large inner scan → wrong join order\n   - Sort on large dataset → missing index on sort columns\n   - Temp file for hash/hash aggregate → increase work_mem\n\n5. FIX: Apply the targeted fix:\n   - Missing index → CREATE INDEX\n   - Stale stats → ANALYZE\n   - Bad query plan → rewrite query or update statistics\n   - Temp file sort → increase work_mem (check per-operation limit)\n\n6. VERIFY: Re-run EXPLAIN ANALYZE, confirm improvement\n   - Before: 5.2s → After: 0.015s\n\n7. PREVENT: Add index to migration, schedule ANALYZE after bulk loads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-index-maintenance-strategy",
      children: "3. Index Maintenance Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " \"What is your index maintenance strategy for a production database?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DAILY:\n  - Query pg_stat_user_indexes for zero-scan indexes > 50MB\n  - Drop confirmed unused indexes (coordinate with dev team)\n\nWEEKLY:\n  - Run index bloat query (avg_leaf_density < 70%)\n  - REINDEX CONCURRENTLY indexes with > 30% bloat\n  - Update statistics with ANALYZE on heavily modified tables\n\nMONTHLY:\n  - Review new query patterns via pg_stat_statements\n  - Add indexes for new slow queries\n  - Composite index audit: column order still optimal?\n  - Check for overlapping indexes that could be merged\n\nQUARTERLY:\n  - Full index audit: 30+ indexes? Drop bottom 20% by usage\n  - Review covering index opportunities\n  - Rebuild most-heavily-used indexes during maintenance window\n\nRULES:\n  - Never drop an index without 7+ days of usage data\n  - Always use CONCURRENTLY for production index operations\n  - Test new indexes on staging with production traffic replay\n  - Add indexes before data load, drop indexes before bulk operations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-n1-query-problem",
      children: "4. N+1 Query Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " \"What is the N+1 query problem and how do you fix it?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " An application queries a parent record, then loops through N children, executing N additional queries. Total: 1 + N queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- BAD (N+1): Get 10 orders, then 10 separate queries for items\n-- App code:\n-- orders = db.query(\"SELECT * FROM orders WHERE customer_id = 42 LIMIT 10\")\n-- for order in orders:\n--     items = db.query(\"SELECT * FROM order_items WHERE order_id = ?\", order.id)\n\n-- GOOD (1 query with JOIN):\nSELECT o.id, o.total, oi.product_id, oi.quantity, oi.price\nFROM orders o\nLEFT JOIN order_items oi ON oi.order_id = o.id\nWHERE o.customer_id = 42\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " 10 orders × 5 items = 11 queries vs 1 query. 10-50ms per query = 110-550ms vs 5-15ms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["High ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_examined"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_sent"
        }), " ratio in slow query log"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many nearly-identical queries in pg_stat_statements differing only by parameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application profiler showing repetitive DB calls in a loop"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eager Loading (JOIN)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single query with JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small to medium datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Batch Loading (IN clause)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single query: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id IN (1,2,...,10)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets, paginated results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subquery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT *, (SELECT ...) AS sub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple 1:N relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GraphQL/DataLoader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batching + caching layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex graphs, API-driven apps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mysql-slow-query-log-analysis",
      children: "MySQL Slow Query Log Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Enable detailed slow query logging\nSET GLOBAL slow_query_log = ON;\nSET GLOBAL slow_query_log_file = '/var/log/mysql/slow-queries.log';\nSET GLOBAL long_query_time = 1;        -- Capture queries > 1 second\nSET GLOBAL log_queries_not_using_indexes = ON;\nSET GLOBAL log_slow_admin_statements = ON;\nSET GLOBAL min_examined_row_limit = 1000;  -- Skip tiny queries\n\n-- Query the slow log directly (MySQL 8.0+)\nSELECT * FROM mysql.slow_log\nWHERE query_time > 1\nORDER BY query_time DESC\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Analyze with pt-query-digest (Percona Toolkit)\npt-query-digest /var/log/mysql/slow-queries.log > /tmp/slow_report.html\n\n# Filter by database or time range\npt-query-digest --since \"2026-06-01 00:00:00\" \\\n    --until \"2026-06-24 23:59:59\" \\\n    --database myapp \\\n    /var/log/mysql/slow-queries.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postgresql-pg_stat_statements",
      children: "PostgreSQL pg_stat_statements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Enable (postgresql.conf):\n-- shared_preload_libraries = 'pg_stat_statements'\n-- pg_stat_statements.track = all\n\n-- Top 10 queries by total execution time\nSELECT\n    queryid,\n    left(query, 80) AS query_preview,\n    calls,\n    round(total_exec_time::numeric, 1) AS total_ms,\n    round(mean_exec_time::numeric, 1) AS avg_ms,\n    round((100 * total_exec_time / sum(total_exec_time) OVER ())::numeric, 1) AS pct,\n    rows,\n    shared_blks_hit,\n    shared_blks_read,\n    shared_blks_dirtied,\n    shared_blks_written\nFROM pg_stat_statements\nWHERE query NOT LIKE '%pg_%'\nORDER BY total_exec_time DESC\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-performance-insights-rds",
      children: "AWS Performance Insights (RDS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Top SQL by load (waits)\n-- Query Performance Insights dashboard shows:\n-- 1. Top waits: CPU, IO:DataFileRead, Lock:tuple\n-- 2. Top SQL by avg latency, calls, rows\n-- 3. DB Load vs CPU chart (normalized to vCPUs)\n\n-- Key metrics to watch in CloudWatch:\nSELECT\n    'DB Connections' AS metric,\n    COUNT(*) AS value\nFROM pg_stat_activity\nWHERE state = 'active';\n\n-- Per-second transaction rate\nSELECT\n    'TPS' AS metric,\n    xact_commit + xact_rollback AS txn_count,\n    extract(epoch from now() - pg_postmaster_start_time()) AS uptime_sec\nFROM pg_stat_database\nWHERE datname = current_database();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-monitoring-dashboard-query",
      children: "Real-World Monitoring Dashboard Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Comprehensive health check (run every 60s)\nSELECT\n    -- Cache efficiency\n    (SELECT round(100.0 * sum(blks_hit) / nullif(sum(blks_hit + blks_read), 0), 1)\n     FROM pg_stat_database WHERE datname = current_database()) AS cache_hit_pct,\n\n    -- Index usage\n    (SELECT round(100.0 * sum(idx_scan) / nullif(sum(seq_scan + idx_scan), 0), 1)\n     FROM pg_stat_user_tables) AS index_usage_pct,\n\n    -- Active connections\n    (SELECT count(*) FROM pg_stat_activity\n     WHERE state = 'active' AND pid <> pg_backend_pid()) AS active_conns,\n\n    -- Long-running transactions (> 5 min)\n    (SELECT count(*) FROM pg_stat_activity\n     WHERE state = 'active'\n       AND now() - query_start > interval '5 minutes') AS long_txns,\n\n    -- Replication lag\n    (SELECT round(pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) / 1024 / 1024, 1)\n     FROM pg_stat_replication LIMIT 1) AS repl_lag_mb;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "existing-content-sections-191-199",
      children: "Existing Content (Sections 19.1-19.9)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1911-specialized-index-types",
      children: "19.11 Specialized Index Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch19-performance-tuning.png",
        alt: "Performance Tuning Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chapter 12 covered B+ trees and hash indexes. Production databases demand more."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19111-brin-block-range-index",
      children: "19.11.1 BRIN (Block Range INdex)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BRIN indexes are ideal for sorted, append-heavy data like time-series logs, audit trails, or IoT sensor readings. They store min/max values per block range (typically 128 pages = 1 MB)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Ideal for timestamp columns on insert-only tables\nCREATE INDEX idx_orders_created_brin\n  ON orders USING BRIN (created_at)\n  WITH (pages_per_range = 32);\n\n-- Query example that benefits:\nSELECT * FROM orders\nWHERE created_at >= '2026-01-01'\n  AND created_at < '2026-02-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BRIN indexes are 100-1000x smaller than B-tree equivalents. For a 100 GB table, a BRIN index might be 50 MB while a B-tree would be 2 GB. The trade-off is slower scan (more false positives) but vastly less storage and maintenance overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use BRIN:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Append-only or mostly-append workloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Natural correlation between physical row order and indexed column"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tables larger than memory where index size matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns with high cardinality and monotonic ordering (timestamps, auto-increment IDs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random insert/update patterns destroy the correlation BRIN relies on"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns with low cardinality (booleans, tiny enums)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point lookups (BRIN always does a sequential scan of qualifying ranges)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " BRIN indexes store min/max per page range → ideal for append-heavy time-series and log data where physical order matches insertion order."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19112-gist-generalized-search-tree",
      children: "19.11.2 GiST (Generalized Search Tree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GiST enables indexing of geometric, full-text, and range types that B-trees cannot handle naturally."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Geospatial (PostGIS)\nCREATE INDEX idx_locations_geo\n  ON locations USING GIST (geom);\n\n-- Range types (daterange, int4range)\nCREATE INDEX idx_booking_period\n  ON bookings USING GIST (period);\n\n-- Full-text search (alternative to GIN for some workloads)\nCREATE INDEX idx_doc_vectors\n  ON documents USING GIST (to_tsvector('english', body));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GiST supports nearest-neighbor (ORDER BY distance) and overlap queries efficiently:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find restaurants within 5 km, sorted by distance\nSELECT name, geom <-> ST_MakePoint(-73.9857, 40.7484) AS dist\nFROM locations\nWHERE ST_DWithin(geom, ST_MakePoint(-73.9857, 40.7484), 5000)\nORDER BY dist\nLIMIT 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " GiST indexes support complex data types like geometric shapes, full-text search, and range types with a balanced tree structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19113-gin-generalized-inverted-index",
      children: "19.11.3 GIN (Generalized Inverted Index)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GIN indexes are designed for composite and multi-valued types: arrays, JSONB, and full-text search vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- JSONB indexing (PostgreSQL 12+)\nCREATE INDEX idx_metadata_tags\n  ON products USING GIN (metadata jsonb_path_ops);\n\n-- Array containment queries\nCREATE INDEX idx_article_tags\n  ON articles USING GIN (tags);\n\n-- Full-text search (preferred over GiST for static text)\nCREATE INDEX idx_article_fts\n  ON articles USING GIN (to_tsvector('english', title || ' ' || body));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN vs GiST for full-text search:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GIN: faster lookups, larger index, slower writes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GiST: faster writes, larger maintenance, slower lookups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " GIN for mostly-read workloads, GiST for write-heavy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " GIN indexes accelerate searches within composite values such as arrays, JSONB, and full-text documents."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19114-sp-gist-space-partitioned-gist",
      children: "19.11.4 SP-GiST (Space-Partitioned GiST)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SP-GiST indexes are designed for quad-trees, k-d trees, and radix trees -- ideal for point clouds, IP range lookups, and prefix searches."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- IP network containment (inet/cidr types)\nCREATE INDEX idx_networks_spgist\n  ON networks USING SPGIST (ip_range);\n\n-- Phone number prefix lookups (text)\nCREATE INDEX idx_phone_prefix\n  ON contacts USING SPGIST (phone_number);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SP-GiST indexes partition data into space-separated regions for k-dimensional and quad-tree queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1912-index-maintenance--monitoring",
      children: "19.12 Index Maintenance & Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexes degrade over time. B-tree pages fragment, dead tuples accumulate, and statistics become stale."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19121-detecting-index-bloat",
      children: "19.12.1 Detecting Index Bloat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: find bloated indexes\nSELECT\n  schemaname || '.' || tablename AS table_name,\n  indexname AS index_name,\n  pg_size_pretty(pg_relation_size(i.indexrelid)) AS index_size,\n  round(100 * (1 - avg_leaf_density)::numeric, 2) AS bloat_pct\nFROM pg_stat_user_indexes i\nJOIN pg_index USING (indexrelid)\nWHERE idx_scan > 0\n  AND pg_relation_size(i.indexrelid) > 10 * 1024 * 1024;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This query identifies indexes with low leaf density (high bloat). Indexes with >30% bloat are candidates for rebuilding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Index bloat occurs from dead tuples and page fragmentation → monitor with pg_stat_user_tables and rebuild periodically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19122-finding-unused-indexes",
      children: "19.12.2 Finding Unused Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\n  schemaname || '.' || tablename AS table_name,\n  indexname AS index_name,\n  pg_size_pretty(pg_relation_size(indexrelid)) AS size,\n  idx_scan AS scans,\n  idx_tup_read,\n  idx_tup_fetch\nFROM pg_stat_user_indexes\nWHERE idx_scan = 0\n  AND pg_relation_size(indexrelid) > 10 * 1024 * 1024\nORDER BY pg_relation_size(indexrelid) DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unused indexes waste write overhead and cache space. Each index on a table adds write amplification -- every INSERT, UPDATE, and DELETE must update every index."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Unused indexes waste write performance and storage → use pg_stat_user_indexes to identify and drop them safely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19123-rebuilding-indexes",
      children: "19.12.3 Rebuilding Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL offers three strategies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 1. Standard REINDEX (blocks writes on the table)\nREINDEX INDEX idx_orders_created;\nREINDEX TABLE orders;\n\n-- 2. CONCURRENTLY (no lock, but slower and more resource-intensive)\nREINDEX INDEX CONCURRENTLY idx_orders_created;\n\n-- 3. Drop + Create (requires exclusive lock but fastest)\nDROP INDEX idx_orders_created;\nCREATE INDEX CONCURRENTLY idx_orders_created ON orders (created_at);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use CONCURRENTLY in production → it allows reads and writes during the rebuild. The trade-off is it takes 2-3x longer and consumes more temporary storage."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " REINDEX CONCURRENTLY rebuilds indexes without blocking writes → essential for production systems with uptime requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19124-zero-downtime-index-creation",
      children: "19.12.4 Zero-Downtime Index Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX CONCURRENTLY idx_users_email_new\n  ON users (email);\n\nBEGIN;\nALTER TABLE users DROP CONSTRAINT users_email_key;\nDROP INDEX CONCURRENTLY IF EXISTS users_email_key;\nALTER TABLE users ADD CONSTRAINT users_email_key UNIQUE USING INDEX idx_users_email_new;\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CREATE INDEX CONCURRENTLY allows zero-downtime index creation without blocking concurrent writes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1913-statistics--cardinality-estimation",
      children: "19.13 Statistics & Cardinality Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The query planner relies on statistics to estimate row counts. Wrong estimates produce bad query plans."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19131-analyze-deep-dive",
      children: "19.13.1 ANALYZE Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Manual analyze\nANALYZE orders;\n\n-- Analyze with specific column\nANALYZE orders (status, created_at);\n\n-- View statistics\nSELECT tablename, attname, n_distinct, null_frac,\n       avg_width, most_common_vals, most_common_freqs\nFROM pg_stats\nWHERE tablename = 'orders';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL auto-analyzes when a table's pg_class.reltuples differs from actual count by more than the autovacuum_analyze_scale_factor (default 0.1, meaning 10% of rows changed)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " EXPLAIN ANALYZE runs the query and shows actual vs. estimated row counts → the most critical tool for understanding optimizer decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19132-extended-statistics-for-correlated-columns",
      children: "19.13.2 Extended Statistics for Correlated Columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The planner assumes independence between columns. When columns are correlated, estimates are wildly wrong:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Table with correlated columns\nCREATE TABLE orders (\n  region TEXT,\n  warehouse TEXT,\n  amount NUMERIC\n);\n\n-- Without extended stats, planner assumes region='East' AND warehouse='WH-EAST'\n-- are independent: 50% * 10% = 5%. Actual: 50% * 50% = 25%.\n-- Creates a 5x underestimation.\n\nCREATE STATISTICS orders_region_warehouse (dependencies)\n  ON region, warehouse FROM orders;\n\nCREATE STATISTICS orders_region_mv (ndistinct)\n  ON region, warehouse FROM orders;\n\nCREATE STATISTICS orders_region_mcv (mcv)\n  ON region, warehouse FROM orders;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Extended statistics capture dependencies between correlated columns, helping the optimizer make better cardinality estimates for composite predicates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19133-manual-statistics-tuning",
      children: "19.13.3 Manual Statistics Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Increase sample size for accuracy (default = 100)\nALTER TABLE orders ALTER COLUMN amount SET STATISTICS 1000;\nANALYZE orders;\n\n-- For very large tables, increase the default statistics target globally\nSET default_statistics_target = 500;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Higher statistics targets improve plan quality but increase ANALYZE time and memory usage. Start with 250-500 on critical columns with skewed distributions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Manual statistics tuning adjusts target columns and sample sizes to improve query plans when auto-analyze is insufficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1914-table-partitioning",
      children: "19.14 Table Partitioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partitioning splits a large table into smaller physical segments while maintaining a single logical interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19141-partition-types",
      children: "19.14.1 Partition Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Range partitioning (most common -- time-series)\nCREATE TABLE measurements (\n  id BIGSERIAL,\n  ts TIMESTAMPTZ NOT NULL,\n  sensor_id INT,\n  value FLOAT8\n) PARTITION BY RANGE (ts);\n\nCREATE TABLE measurements_2024_q1 PARTITION OF measurements\n  FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');\nCREATE TABLE measurements_2024_q2 PARTITION OF measurements\n  FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');\n\n-- List partitioning (enumerated categories)\nCREATE TABLE customers (\n  id BIGSERIAL,\n  region TEXT NOT NULL,\n  name TEXT\n) PARTITION BY LIST (region);\n\nCREATE TABLE customers_na PARTITION OF customers\n  FOR VALUES IN ('US', 'CA', 'MX');\nCREATE TABLE customers_eu PARTITION OF customers\n  FOR VALUES IN ('GB', 'DE', 'FR', 'IT');\n\n-- Hash partitioning (uniform distribution, no natural key)\nCREATE TABLE sessions (\n  session_id UUID NOT NULL,\n  payload JSONB\n) PARTITION BY HASH (session_id);\n\nCREATE TABLE sessions_0 PARTITION OF sessions\n  FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE sessions_1 PARTITION OF sessions\n  FOR VALUES WITH (MODULUS 4, REMAINDER 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Table partitioning divides large tables into smaller physical pieces → range, list, and hash partitions cover most use cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19142-partition-pruning",
      children: "19.14.2 Partition Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The query planner skips irrelevant partitions automatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL planner prunes to 2024_q1 only\nSELECT avg(value) FROM measurements\nWHERE ts >= '2024-02-01' AND ts < '2024-03-01';\n\n-- Check if pruning is working\nEXPLAIN (VERBOSE, ANALYZE)\nSELECT avg(value) FROM measurements\nWHERE ts >= '2024-02-01' AND ts < '2024-03-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partition pruning works only when the partition key is used in the WHERE clause with an immutable expression. Never wrap the partition key in a function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Partition pruning eliminates irrelevant partitions from query plans, dramatically reducing data scanned for range-filtered queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19143-managing-partitions",
      children: "19.14.3 Managing Partitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Detach old data (instant -- no data movement)\nALTER TABLE measurements DETACH PARTITION measurements_2024_q1;\n\n-- Attach as a standalone table (for archival)\nALTER TABLE measurements_2024_q1 SET SCHEMA archive;\n\n-- Add new partitions ahead of time (automate with pg_partman)\nCREATE TABLE measurements_2024_q3 PARTITION OF measurements\n  FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');\n\n-- Create indexes on each partition (or use a template)\nCREATE INDEX ON measurements_2024_q3 (sensor_id, ts);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For automated partition management, consider pg_partman extension:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION pg_partman;\n\nSELECT partman.create_parent(\n  p_parent_table := 'public.measurements',\n  p_control := 'ts',\n  p_type := 'range',\n  p_interval := '3 months',\n  p_premake := 4\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Managing partitions involves ATTACH/DETACH operations, partition exchange for data loading, and scheduled maintenance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1915-materialized-views",
      children: "19.15 Materialized Views"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Materialized views cache query results as physical tables. They are refreshed on demand."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19151-basic-usage",
      children: "19.15.1 Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE MATERIALIZED VIEW mv_monthly_sales AS\nSELECT\n  date_trunc('month', order_date) AS month,\n  product_category,\n  sum(amount) AS revenue,\n  count(*) AS orders,\n  avg(amount) AS avg_order_value\nFROM orders o\nJOIN products p ON o.product_id = p.id\nGROUP BY 1, 2\nWITH DATA;\n\n-- Refresh (blocks reads during refresh)\nREFRESH MATERIALIZED VIEW mv_monthly_sales;\n\n-- Concurrent refresh (no read blocking -- requires unique index)\nCREATE UNIQUE INDEX ON mv_monthly_sales (month, product_category);\nREFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_sales;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Materialized views store pre-computed query results as physical tables, refreshed on demand or via scheduled jobs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19152-real-world-pattern-reporting-aggregates",
      children: "19.15.2 Real-World Pattern: Reporting Aggregates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- E-commerce dashboard view refreshed every 15 minutes\nCREATE MATERIALIZED VIEW mv_dashboard_hourly AS\nSELECT\n  date_trunc('hour', created_at) AS hour,\n  count(DISTINCT user_id) AS active_users,\n  count(*) AS total_orders,\n  sum(amount) AS revenue,\n  count(*) FILTER (WHERE status = 'cancelled') AS cancellations\nFROM orders\nWHERE created_at >= now() - interval '30 days'\nGROUP BY 1\nWITH DATA;\n\n-- Refresh via cron or pg_cron\nSELECT cron.schedule('refresh-dashboard', '*/15 * * * *',\n  $$REFRESH MATERIALIZED VIEW CONCURRENTLY mv_dashboard_hourly$$\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Reporting aggregates use materialized views to avoid re-scanning millions of rows each time a dashboard loads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1916-common-query-rewrite-anti-patterns",
      children: "19.16 Common Query Rewrite Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The way you write a query affects whether the planner can use indexes. These patterns defeat index usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ANTI-PATTERN 1: Leading wildcard (cannot use B-tree prefix)\nSELECT * FROM users WHERE email LIKE '%@gmail.com';\n-- FIX: Use trigram index (pg_trgm)\nCREATE INDEX idx_users_email_trgm ON users USING GIN (email gin_trgm_ops);\nSELECT * FROM users WHERE email LIKE '%@gmail.com';\n\n-- ANTI-PATTERN 2: Function wrapping column\nSELECT * FROM orders WHERE date_trunc('month', created_at) = '2026-06-01';\n-- FIX: Range query (sargable)\nSELECT * FROM orders\nWHERE created_at >= '2026-06-01' AND created_at < '2026-07-01';\n\n-- ANTI-PATTERN 3: OR across different columns\nSELECT * FROM users WHERE email = 'a@b.com' OR phone = '555-0100';\n-- FIX: UNION (each branch uses its own index)\nSELECT * FROM users WHERE email = 'a@b.com'\nUNION\nSELECT * FROM users WHERE phone = '555-0100';\n\n-- ANTI-PATTERN 4: NOT IN with subquery\nSELECT * FROM products WHERE id NOT IN (SELECT product_id FROM orders);\n-- FIX: NOT EXISTS (handles NULLs correctly, often faster)\nSELECT * FROM products p\nWHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.product_id = p.id);\n\n-- ANTI-PATTERN 5: Implicit type conversion\nSELECT * FROM orders WHERE order_id = '42';\n-- FIX: Explicit typing\nSELECT * FROM orders WHERE order_id = 42;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1917-parallel-query-execution",
      children: "19.17 Parallel Query Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL can parallelize sequential scans, index scans, joins, and aggregates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Check parallel configuration\nSHOW max_parallel_workers_per_gather;\nSHOW parallel_tuple_cost;\nSHOW parallel_setup_cost;\n\n-- Force parallel plan for large aggregate\nSET max_parallel_workers_per_gather = 4;\n\nSELECT department_id, count(*), avg(salary)\nFROM employees\nGROUP BY department_id;\n\n-- EXPLAIN will show: Partial Aggregate, Gather, Parallel Seq Scan\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT department_id, count(*), avg(salary)\nFROM employees\nGROUP BY department_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parallel query works best for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full table scans and large sequential reads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregation (COUNT, SUM, AVG)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JOINs with large tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ANALYZE and CREATE INDEX"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parallel query does NOT help with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point lookups (already fast)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-row operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write operations (INSERT, UPDATE, DELETE)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1918-slow-query-analysis",
      children: "19.18 Slow Query Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19181-auto_explain-postgresql",
      children: "19.18.1 auto_explain (PostgreSQL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "LOAD 'auto_explain';\nSET auto_explain.log_min_duration = 1000;\nSET auto_explain.log_analyze = on;\nSET auto_explain.log_buffers = on;\nSET auto_explain.log_nested_statements = on;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " auto_explain logs execution plans for slow queries automatically → set log_min_duration to capture the right threshold."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19182-postgresql-log-analysis-with-pgbadger",
      children: "19.18.2 PostgreSQL Log Analysis with pgBadger"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pgbadger /var/log/postgresql/postgresql.log -o report.html\npgbadger --follow /var/log/postgresql/postgresql.log\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " pgBadger parses PostgreSQL logs to generate HTML performance reports showing slow queries, errors, and checkpoint activity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19183-mysql-slow-query-log",
      children: "19.18.3 MySQL Slow Query Log"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SET GLOBAL slow_query_log = ON;\nSET GLOBAL long_query_time = 2;\nSET GLOBAL log_queries_not_using_indexes = ON;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Analyze with pt-query-digest:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pt-query-digest /var/log/mysql/mysql-slow.log > slow_report.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The MySQL slow query log captures queries exceeding long_query_time → enable it with log_queries_not_using_indexes for full coverage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19184-index-usage-metrics",
      children: "19.18.4 Index Usage Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\n  schemaname || '.' || tablename AS table,\n  seq_scan,\n  seq_tup_read,\n  idx_scan,\n  idx_tup_fetch,\n  round(100.0 * idx_scan / NULLIF(seq_scan + idx_scan, 0), 1) AS idx_pct\nFROM pg_stat_user_tables\nWHERE seq_scan + idx_scan > 0\nORDER BY idx_pct ASC\nLIMIT 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tables with high sequential scans and low index usage are performance tuning targets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Index usage metrics from pg_stat_user_indexes reveal which indexes are actually used versus maintained but never referenced."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1919-real-world-case-studies",
      children: "19.19 Real-World Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-a-e-commerce-catalog",
      children: "Case Study A: E-Commerce Catalog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Product listing queries (search, filter, sort) took 3-8 seconds on a 10M-row products table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Sequential scans on every page load."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagnosis:"
      }), " EXPLAIN (ANALYZE, BUFFERS) showed Seq Scan on products with 300MB read. Only index was primary key. Filters: category_id = X AND price BETWEEN Y AND Z AND in_stock = true."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_products_catalog\n  ON products (category_id, price, in_stock)\n  WHERE in_stock = true;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Queries dropped from 3 seconds to 15 milliseconds. Index was 120 MB vs 2 GB table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-b-saas-multi-tenant-analytics",
      children: "Case Study B: SaaS Multi-Tenant Analytics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Tenant-level reporting queries timed out at 30 seconds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagnosis:"
      }), " Table had 500M rows with tenant_id and event_timestamp. Partitioned by range on timestamp only. Each tenant's data was spread across all partitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE analytics_events (\n  tenant_id INT NOT NULL,\n  event_ts TIMESTAMPTZ NOT NULL,\n  payload JSONB\n) PARTITION BY LIST (tenant_id);\n\nCREATE TABLE analytics_events_tenant_42 PARTITION OF analytics_events\n  FOR VALUES IN (42)\n  PARTITION BY RANGE (event_ts);\n\nCREATE TABLE analytics_events_42_2026_q1 PARTITION OF analytics_events_tenant_42\n  FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Queries pruned to single partition. 30-second timeout became 200ms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-c-high-write-logging-system",
      children: "Case Study C: High-Write Logging System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Insert throughput capped at 5K rows/second on a log table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagnosis:"
      }), " Multiple indexes on log_timestamp, source, level. Each INSERT updated all indexes (write amplification). B-tree maintenance overhead slowed writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Replace B-tree with BRIN on timestamp\nDROP INDEX idx_logs_timestamp;\nCREATE INDEX idx_logs_timestamp_brin\n  ON logs USING BRIN (logged_at) WITH (pages_per_range = 16);\n\n-- Remove low-value indexes\nDROP INDEX idx_logs_level;\n\n-- Batch inserts into 100-row transactions\nBEGIN;\nINSERT INTO logs (...) VALUES (...), (...), ...;\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Writes scaled to 50K rows/second. BRIN index was 1/200th the size of the B-tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1912-typesql-index--query-performance-advisor",
      children: "19.12 TypeSQL Index & Query Performance Advisor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TypeScript code analyzes queries, suggests indexes, estimates performance gains, and identifies common anti-patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Performance Advisor — TypeScript\n// ============================================================\n\ninterface IndexRecommendation {\n  table: string;\n  columns: string[];\n  type: 'B-TREE' | 'HASH' | 'COMPOSITE';\n  reason: string;\n  estimatedImprovement: string;\n}\n\ninterface QueryAnalysis {\n  query: string;\n  tables: string[];\n  joinConditions: number;\n  filterConditions: number;\n  missingIndexes: IndexRecommendation[];\n  antiPatterns: string[];\n}\n\nclass PerformanceAdvisor {\n  private tableStats = new Map<string, { rows: number; indexes: string[][] }>();\n\n  addTableStats(name: string, rows: number, indexes: string[][]): void {\n    this.tableStats.set(name, { rows, indexes });\n  }\n\n  analyzeQuery(query: string, tables: string[], joins: string[], filters: string[]): QueryAnalysis {\n    const missingIndexes: IndexRecommendation[] = [];\n    const antiPatterns: string[] = [];\n\n    // Check for missing indexes on join columns\n    for (const join of joins) {\n      const [table, col] = join.split('.');\n      const stats = this.tableStats.get(table);\n      if (stats && stats.rows > 1000) {\n        const hasIndex = stats.indexes.some(idx => idx.includes(col));\n        if (!hasIndex) {\n          missingIndexes.push({\n            table,\n            columns: [col],\n            type: 'B-TREE',\n            reason: 'Join column ' + join + ' used without index',\n            estimatedImprovement: stats.rows > 10000 ? '80-95% reduction' : '50-80% reduction'\n          });\n        }\n      }\n    }\n\n    // Check for missing indexes on filter columns\n    for (const filter of filters) {\n      const parts = filter.split(/[=<>!]/);\n      const col = parts[0]?.trim().split('.')?.pop() || '';\n      const table = tables[0]; // Assume first table\n      const stats = this.tableStats.get(table);\n      if (stats && stats.rows > 500) {\n        const hasIndex = stats.indexes.some(idx => idx.includes(col));\n        if (!hasIndex) {\n          missingIndexes.push({\n            table,\n            columns: [col],\n            type: 'B-TREE',\n            reason: 'Filter column ' + col + ' used without index',\n            estimatedImprovement: '70-90% reduction'\n          });\n        }\n      }\n    }\n\n    // Anti-pattern detection\n    if (query.match(/SELECT \\*/) && tables.length > 1) {\n      antiPatterns.push('SELECT * with JOINs — specify only needed columns');\n    }\n    if (query.match(/LIKE '%.+%'/) || query.match(/LIKE '.+%[^%]'/) && !query.match(/LIKE '.+%'/)) {\n      antiPatterns.push('Leading wildcard LIKE — cannot use index efficiently');\n    }\n    if (query.match(/NOT IN\\s*\\(/)) {\n      antiPatterns.push('NOT IN with subquery — use NOT EXISTS or LEFT JOIN / NULL instead');\n    }\n    if (query.match(/OR\\s+[^\\s]+\\s+IN\\s*\\(/) || query.match(/OR\\s+[^\\s]+\\s+=\\s*\\(/)) {\n      antiPatterns.push('Multiple OR conditions — consider UNION ALL or IN list');\n    }\n    if (query.match(/ORDER BY RAND\\(\\)/)) {\n      antiPatterns.push('ORDER BY RAND() — sorts all rows; use random sampling instead');\n    }\n\n    return {\n      query,\n      tables,\n      joinConditions: joins.length,\n      filterConditions: filters.length,\n      missingIndexes,\n      antiPatterns\n    };\n  }\n\n  estimateQueryCost(query: string, table: string, predicateSelectivity: number): number {\n    const stats = this.tableStats.get(table);\n    if (!stats) return Infinity;\n    const fullScanCost = stats.rows;\n    const indexCost = Math.log2(stats.rows) + predicateSelectivity * stats.rows;\n    return Math.min(fullScanCost, indexCost);\n  }\n}\n\n// Demo\nconsole.log('=== Performance Advisor ===\\n');\nconst advisor = new PerformanceAdvisor();\nadvisor.addTableStats('orders', 1000000, [['order_id'], ['customer_id']]);\nadvisor.addTableStats('customers', 50000, [['customer_id'], ['email']]);\nadvisor.addTableStats('order_items', 3000000, [['order_id']]);\n\nconst analysis = advisor.analyzeQuery(\n  'SELECT * FROM orders o JOIN customers c ON o.customer_id = c.customer_id WHERE c.email LIKE \\'%@example.com\\' AND o.total > 100',\n  ['orders', 'customers'],\n  ['o.customer_id'],\n  ['c.email', 'o.total']\n);\n\nconsole.log('Query Analysis:');\nconsole.log('  Tables: ' + analysis.tables.join(', '));\nconsole.log('  Joins: ' + analysis.joinConditions + ' conditions');\nconsole.log('  Filters: ' + analysis.filterConditions + ' conditions');\nconsole.log('');\n\nif (analysis.missingIndexes.length > 0) {\n  console.log('Missing Index Recommendations:');\n  for (const idx of analysis.missingIndexes) {\n    console.log('  - ' + idx.type + ' on ' + idx.table + '(' + idx.columns.join(', ') + ')');\n    console.log('    Reason: ' + idx.reason);\n    console.log('    Est. improvement: ' + idx.estimatedImprovement);\n  }\n}\n\nif (analysis.antiPatterns.length > 0) {\n  console.log('\\nAnti-patterns detected:');\n  for (const ap of analysis.antiPatterns) console.log('  - ' + ap);\n}\n\n// Cost estimation\nconst costFull = advisor.estimateQueryCost('SELECT * FROM orders WHERE total > 100', 'orders', 0.3);\nconsole.log('\\nEstimated cost with full scan: ' + costFull.toFixed(0));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Performance Tuning Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Slow[Slow Query Reported] --> Capture[Capture Query & Plan]\n    Capture --> Analyze[Analyze EXPLAIN ANALYZE output]\n    Analyze --> Identify{Identify bottleneck}\n    Identify -->|Full Table Scan| MissingIndex[Missing Index?]\n    Identify -->|Nested Loop| JoinOrder[Join Order / Stats]\n    Identify -->|Sort / Temp| Memory[Memory / Work Mem settings]\n    Identify -->|Lock Contention| Concurrency[Concurrency / Isolation]\n    MissingIndex --> AddIndex[Add appropriate index]\n    JoinOrder --> UpdateStats[Update statistics / Rewrite query]\n    Memory --> TuneMem[Increase work_mem / Optimize sorts]\n    Concurrency --> TuneIso[Adjust isolation level / Connection pool]\n    AddIndex --> Retest[Retest]\n    UpdateStats --> Retest\n    TuneMem --> Retest\n    TuneIso --> Retest\n    Retest --> Result{Fast enough?}\n    Result -->|Yes| Done[Deploy]\n    Result -->|No| Capture\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common cause of slow queries is:\na) Insufficient RAM\nb) Missing or incorrect indexes\nc) Slow network\nd) Too many users"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A query using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHERE func(column) = value"
          }), " cannot use an index because:\na) Functions are always slow\nb) The index stores the raw column value, not the function result\nc) Functions cannot be used in WHERE clauses\nd) Indexes ignore all WHERE conditions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The EXPLAIN ANALYZE command shows:\na) The actual execution plan with timing\nb) Only the estimated plan\nc) The SQL syntax tree\nd) The table structure"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Connection pooling improves performance by:\na) Increasing query speed\nb) Reusing database connections instead of creating new ones\nc) Reducing the number of tables\nd) Caching query results"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A covering index is one that:\na) Covers all tables in the database\nb) Contains all columns needed by a query, avoiding table access\nc) Is created on all columns of a table\nd) Uses multiple index types"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-a, 14-b, 15-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which index type is best for a time-series table with append-only inserts and timestamp-range queries?\na) B-tree\nb) BRIN\nc) Hash\nd) GIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The query ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHERE DATE(order_date) = '2026-01-01'"
          }), " is problematic because:\na) It returns incorrect results\nb) The function wrapping prevents index usage on order_date\nc) It only works in PostgreSQL\nd) It requires a full table scan"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index bloat is caused by:\na) Too many INSERTs\nb) Deletions and updates creating empty B-tree pages\nc) Running ANALYZE too frequently\nd) Using too many indexes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extended statistics are needed when:\na) A table has more than 100 columns\nb) WHERE conditions have correlated columns\nc) A table has no indexes\nd) Queries use ORDER BY"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "work_mem"
          }), " parameter controls:\na) The total memory for database connections\nb) Memory per sort/hash operation\nc) The buffer cache size\nd) Write-ahead log buffer size"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Partition pruning means:\na) The optimizer only scans relevant partitions based on WHERE conditions\nb) Old partitions are automatically deleted\nc) Indexes are rebuilt per partition\nd) Data is moved between partitions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which extension tracks query execution statistics?\na) auto_explain\nb) pg_stat_statements\nc) pg_buffercache\nd) pageinspect"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A materialized view is most useful when:\na) The source data changes every second\nb) An expensive query is executed frequently and can tolerate some staleness\nc) The query is simple and fast\nd) Real-time accuracy is required"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Connection pooling solves which problem?\na) Slow query execution\nb) High connection setup overhead\nc) Cache invalidation\nd) Deadlock detection"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Query caching is most effective when:\na) The same query runs repeatedly with different parameters\nb) Writes outnumber reads 10:1\nc) The database buffer hit ratio is already >99%\nd) The application tier has spare memory"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-a, 7-b, 8-b, 9-b, 10-a"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B-tree indexes are not always the answer. BRIN (time-series), GiST (geospatial), GIN (JSONB/text), and SP-GiST (tree/prefix) solve specific workloads better."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index maintenance is not optional. Monitor bloat, find unused indexes, and rebuild with CONCURRENTLY in production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The query planner needs good statistics. Use extended statistics for correlated columns and raise STATISTICS targets for skewed data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partitioning transforms large-table problems into small-table solutions. Prune partitions early and detach old data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Materialized views push expensive reporting queries to a refresh schedule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow queries are usually caused by bad index selection, function-wrapped columns, or poor statistics. Diagnosis tools like auto_explain, pg_stat_user_indexes, and EXPLAIN (ANALYZE, BUFFERS) pinpoint the fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection pooling reduces overhead from repeated TCP handshake and authentication. Set pool size based on core count, not max connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query caching at the application tier reduces database load more effectively than the database query cache alone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration tuning (shared_buffers, work_mem, effective_cache_size) must match hardware. Defaults are conservative."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance optimization is iterative: measure, identify, change, re-measure. One change at a time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a table events (id, event_type, created_at, payload), create the most space-efficient index for querying WHERE created_at BETWEEN '2026-01-01' AND '2026-03-31'."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a query to find indexes that have zero scans and are larger than 50 MB."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain why WHERE lower(email) = '", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:user@example.com",
          children: "user@example.com"
        }), "' cannot use a standard B-tree index on email, and provide a fix."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A table orders (region, warehouse, total) has correlated columns: each warehouse serves a single region. Write extended statistics to help the planner estimate row counts accurately."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a partitioning strategy for a 2TB analytics_events table where each of 100 tenants inserts 1M events/day and queries always filter on tenant_id and a date range."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given SELECT * FROM logs WHERE source NOT IN (SELECT source_id from blacklist), rewrite it to use an anti-join pattern."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A 500 GB time-series table has a B-tree on timestamp. Writes have degraded to 2K rows/second. Diagnose the problem and propose a solution with specific index changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy a monitoring query that alerts when any index on a critical table exceeds 30% estimated bloat, without using external tools."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a reporting materialized view for a SaaS dashboard that shows daily active users, revenue, and churn rate by plan tier. Include a refresh strategy that minimizes load on the primary database."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given 16 GB RAM, 8-core server running PostgreSQL with 200 max connections and NVMe storage, calculate recommended shared_buffers, work_mem, effective_cache_size, and random_page_cost."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EXPLAIN (ANALYZE, BUFFERS) is your primary diagnostic tool"
        }), " → run it on slow queries first. It shows actual vs. estimated rows, revealing bad statistics, missing indexes, and wrong join strategies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BRIN indexes are magic for append-only time-series data"
        }), " → they are 100-1000× smaller than B-tree indexes on timestamp columns and just as fast for range queries on naturally ordered data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never wrap indexed columns in functions"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE DATE(created_at) = '2026-01-01'"
        }), " makes the index useless. Write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE created_at >= '2026-01-01' AND created_at < '2026-01-02'"
        }), " instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor index bloat"
        }), " → over time, B-tree indexes accumulate empty pages from deletions and updates. Rebuild them with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REINDEX CONCURRENTLY"
        }), " to reclaim space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use extended statistics for correlated columns"
        }), " → if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE city = 'NYC' AND status = 'active'"
        }), " has correlated columns, the optimizer assumes independence and underestimates. Extended statistics fix this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache at the application tier, not just the database"
        }), " → 90% of repeated queries can be served from Redis/Memcached, reducing database connections and buffer pool pressure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition before you need it"
        }), " → partitioning a 500 GB table takes hours. Set up partitions when the table reaches 10 GB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection pool size is NOT max connections"
        }), " → set it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(2 * core_count) + effective_spindle_count"
        }), ". Too many connections causes context switching thrash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tune in this order"
        }), ": queries → indexes → schema → config → hardware. Each step fixes 80% of remaining problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One change at a time"
        }), " → change → measure → revert if worse. Multiple simultaneous changes mask cause and effect."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.1:"
        }), " Index type selection matters → BRIN for time-series, GiST for geospatial, GIN for JSONB/full-text, SP-GiST for tree/prefix structures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.2:"
        }), " Index maintenance (rebuild, bloat monitoring, unused index removal) is essential for sustained performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.3:"
        }), " Accurate cardinality estimation depends on up-to-date statistics → ANALYZE regularly and increase STATISTICS targets for skewed data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.4:"
        }), " Table partitioning transforms large-table problems into small-table solutions with partition pruning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.5:"
        }), " Materialized views pre-compute expensive aggregations for reporting queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "19.6:"
        }), " Performance diagnosis tools → auto_explain, pg_stat_statements, pg_stat_user_indexes, and EXPLAIN (ANALYZE, BUFFERS) → pinpoint the root cause of slowdowns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size vs. B-tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported Operations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B-tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<, <=, =, >=, >, BETWEEN, LIKE (prefix)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BRIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000× smaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, naturally ordered data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries on correlated physical order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GiST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geospatial, full-text search, ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric operators, @>, <->"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONB, full-text search, arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@>, ?, ?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SP-GiST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree structures, prefix search, GIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quad-tree, k-d tree, radix tree operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= only"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Performance Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slow SELECT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High seq scan, low rows returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add appropriate index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slow INSERT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High write latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce indexes, use batch inserts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bad plan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated rows ≠ actual rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale statistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANALYZE, increase STATISTICS target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index bloat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large index, same row count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletes/updates without cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REINDEX CONCURRENTLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slow reporting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scans on large tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing materialized view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create materialized view + refresh schedule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries stuck waiting for connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool too small or connection leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase pool size, fix leaks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache trashing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer hit ratio < 90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared_buffers too small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase shared_buffers, add indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PostgreSQL Extension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "auto_explain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs query plans for slow queries automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pg_stat_statements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracks query execution statistics (calls, total time, rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pg_buffercache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows buffer cache contents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pg_stat_user_indexes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index usage statistics (scans, reads fetched)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pageinspect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level page content inspection"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tuning Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "shared_buffers"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for data caching (25% of RAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "work_mem"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for sorts and hash tables per operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "maintenance_work_mem"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory for VACUUM, CREATE INDEX (higher is faster)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "effective_cache_size"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-level cache estimate for cost calculations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "random_page_cost"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of random I/O (lower for SSDs → set to 1.1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "default_statistics_target"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of histogram buckets (default 100, raise to 1000)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tuning Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applied In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BRIN Indexes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoT sensor data, log tables, audit trails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000× smaller indexes for append-only timestamp data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event tables, time-series, multi-tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast partition pruning, easy old-data removal (DETACH)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialized Views"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BI dashboards, monthly reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computed aggregates eliminate expensive runtime queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extended Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated column filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accurate cardinality for city+status, age+salary combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REINDEX CONCURRENTLY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-write production tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuild bloated indexes without locking the table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection Pooling (PgBouncer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-concurrency web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce connection overhead; essential for serverless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pg_stat_statements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify top-N slow queries across the database"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(End of file)"
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