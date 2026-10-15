"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4589],{

/***/ 79543
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_13_pandas_advanced_md_7dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-13-pandas-advanced-md-7dc.json
const site_docs_courses_ai_engineering_placement_01_python_programming_13_pandas_advanced_md_7dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/13-pandas-advanced","title":"Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/13-pandas-advanced.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/13-pandas-advanced","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/13-pandas-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"13-pandas-advanced","slug":"/ai-engineering-placement/01-python-programming/13-pandas-advanced","title":"Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance","sidebar_label":"Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance","sidebar_position":22},"sidebar":"placementSidebar","previous":{"title":"Pandas Basics — Series, DataFrame, Indexing, GroupBy, Merge","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/12-pandas-basics"},"next":{"title":"Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/14-data-visualization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/13-pandas-advanced.md


const frontMatter = {
	id: '13-pandas-advanced',
	slug: '/ai-engineering-placement/01-python-programming/13-pandas-advanced',
	title: 'Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance',
	sidebar_label: 'Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance',
	sidebar_position: 22
};
const contentTitle = 'Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance';

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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "13.1 Pivot Tables",
  "id": "131-pivot-tables",
  "level": 2
}, {
  "value": "13.2 MultiIndex",
  "id": "132-multiindex",
  "level": 2
}, {
  "value": "13.3 Window Functions",
  "id": "133-window-functions",
  "level": 2
}, {
  "value": "13.4 String Operations",
  "id": "134-string-operations",
  "level": 2
}, {
  "value": "13.5 Performance",
  "id": "135-performance",
  "level": 2
}, {
  "value": "13.6 Time Series",
  "id": "136-time-series",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
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
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "pandas-advanced--pivot-tables-multi-index-window-functions-performance",
        children: "Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance"
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
            children: "Create and reshape pivot tables and cross-tabulations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work with MultiIndex DataFrames for hierarchical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply window functions: rolling, expanding, and ewm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use vectorized string operations with .str accessor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize DataFrame performance with categoricals and eval/query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle time series data with resample, shift, and date ranges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding pandas advanced is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pandas advanced works in practice."
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
            children: "13.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pivot Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pivot, pivot_table, crosstab, margins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MultiIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set_index, swaplevel, xs, stack/unstack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rolling, expanding, ewm, shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".str accessor, regex, extract, replace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eval, query, categoricals, numba integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time Series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resample, date_range, to_datetime, tz handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Advanced Pandas] --> B[Pivot Tables]\r\n    A --> C[MultiIndex]\r\n    A --> D[Window Functions]\r\n    A --> E[String Ops]\r\n    A --> F[Performance]\r\n    A --> G[Time Series]\r\n    B --> H[pivot_table / crosstab]\r\n    C --> I[stack / unstack / xs]\r\n    D --> J[rolling / expanding / ewm]\r\n    E --> K[.str / regex]\r\n    F --> L[eval / query / categorical]\r\n    G --> M[resample / date_range]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-pivot-tables",
      children: "13.1 Pivot Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pivot tables summarize data by grouping and aggregating across multiple dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\r\nimport numpy as np\r\n\r\n## Sample sales data\r\ndf = pd.DataFrame({\r\n    \"date\": pd.date_range(\"2024-01-01\", periods=12, freq=\"ME\"),\r\n    \"product\": [\"A\", \"B\", \"A\", \"B\", \"A\", \"B\", \"A\", \"B\", \"A\", \"B\", \"A\", \"B\"],\r\n    \"region\": [\"North\", \"North\", \"South\", \"South\", \"North\", \"North\",\r\n               \"South\", \"South\", \"East\", \"East\", \"West\", \"West\"],\r\n    \"sales\": np.random.randint(100, 500, 12),\r\n    \"quantity\": np.random.randint(5, 50, 12)\r\n})\r\n\r\n## Simple pivot\r\npivot = df.pivot_table(\r\n    values=\"sales\",\r\n    index=\"product\",\r\n    columns=\"region\",\r\n    aggfunc=\"sum\",\r\n    margins=True,\r\n    margins_name=\"Total\"\r\n)\r\nprint(pivot)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pivot_table parameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Multiple values and aggregations\r\npivot = df.pivot_table(\r\n    values=[\"sales\", \"quantity\"],\r\n    index=\"product\",\r\n    columns=\"region\",\r\n    aggfunc={\"sales\": \"sum\", \"quantity\": \"mean\"},\r\n    fill_value=0\r\n)\r\n\r\n## Custom aggregation function\r\npivot = df.pivot_table(\r\n    values=\"sales\",\r\n    index=\"product\",\r\n    columns=\"region\",\r\n    aggfunc=lambda x: x.max() - x.min()\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "crosstab"
      }), " computes a frequency table of two or more factors:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Simple frequency table\r\nct = pd.crosstab(df[\"product\"], df[\"region\"])\r\nprint(ct)\r\n\r\n## With margins and normalization\r\nct = pd.crosstab(\r\n    df[\"product\"], df[\"region\"],\r\n    values=df[\"sales\"],\r\n    aggfunc=\"sum\",\r\n    margins=True,\r\n    normalize=\"index\"  # normalize by row\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Melting"
      }), " converts wide to long format (reverse of pivot):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "wide_df = pd.DataFrame({\r\n    \"id\": [1, 2, 3],\r\n    \"Q1\": [100, 200, 150],\r\n    \"Q2\": [110, 190, 160],\r\n    \"Q3\": [120, 180, 170],\r\n    \"Q4\": [130, 170, 180]\r\n})\r\n\r\nlong_df = wide_df.melt(\r\n    id_vars=[\"id\"],\r\n    value_vars=[\"Q1\", \"Q2\", \"Q3\", \"Q4\"],\r\n    var_name=\"quarter\",\r\n    value_name=\"revenue\"\r\n)\r\nprint(long_df)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-multiindex",
      children: "13.2 MultiIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MultiIndex allows hierarchical indexing for complex data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arrays = [[\"A\", \"A\", \"B\", \"B\"], [2023, 2024, 2023, 2024]]\r\nindex = pd.MultiIndex.from_arrays(arrays, names=[\"product\", \"year\"])\r\n\r\ndf = pd.DataFrame({\r\n    \"sales\": [100, 120, 150, 140],\r\n    \"profit\": [20, 25, 30, 28]\r\n}, index=index)\r\n\r\nprint(df)\r\n\r\n##               sales  profit\r\n\r\n## product year\r\n\r\n## A       2023    100      20\r\n\r\n##         2024    120      25\r\n\r\n## B       2023    150      30\r\n\r\n##         2024    140      28\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selecting from MultiIndex"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Select all rows for product A\r\nprint(df.loc[\"A\"])\r\n\r\n## Select specific cross-section\r\nprint(df.loc[(\"A\", 2024)])\r\n\r\n## xs() for cross-sectional selection\r\nprint(df.xs(key=\"A\", level=\"product\"))\r\nprint(df.xs(key=2024, level=\"year\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "swaplevel and reorder_levels"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Swap index levels\r\nswapped = df.swaplevel()\r\nprint(swapped)\r\n\r\n## Reorder levels\r\nreordered = df.reorder_levels([\"year\", \"product\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "stack and unstack"
      }), " convert between wide and long formats:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## unstack: innermost index level → columns\r\nunstacked = df.unstack()\r\nprint(unstacked)\r\n\r\n##         sales         profit\r\n\r\n## year    2023  2024    2023  2024\r\n\r\n## product\r\n\r\n## A        100   120      20    25\r\n\r\n## B        150   140      30    28\r\n\r\n## stack: columns → innermost index level\r\nrestacked = unstacked.stack()\r\nprint(restacked)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "set_index and reset_index"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Move columns to index\r\ndf_indexed = df.reset_index().set_index([\"product\", \"year\"])\r\n\r\n## Flatten MultiIndex\r\nflattened = df_indexed.reset_index()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MultiIndex columns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "cols = pd.MultiIndex.from_tuples([\r\n    (\"Sales\", \"Q1\"), (\"Sales\", \"Q2\"),\r\n    (\"Profit\", \"Q1\"), (\"Profit\", \"Q2\")\r\n])\r\ndf_multi_cols = pd.DataFrame(\r\n    np.random.randint(100, 200, (3, 4)),\r\n    columns=cols\r\n)\r\nprint(df_multi_cols[\"Sales\"][\"Q1\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-window-functions",
      children: "13.3 Window Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Window functions operate on a sliding or expanding window of rows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rolling window"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## 3-day rolling mean\r\nseries = pd.Series(np.random.randn(10))\r\nrolling_mean = series.rolling(window=3).mean()\r\n\r\n## Rolling with min_periods\r\nrolling = series.rolling(window=5, min_periods=2).mean()\r\n\r\n## Multiple aggregations\r\nstats = series.rolling(3).agg([\"mean\", \"std\", \"min\", \"max\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expanding window"
      }), " (uses all data from start):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Cumulative statistics\r\nexpanding_mean = series.expanding().mean()\r\nexpanding_std = series.expanding().std()\r\n\r\n## Expanding with min_periods\r\nexpanding = series.expanding(min_periods=2).sum()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exponentially weighted moving average (ewm)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "ewm_mean = series.ewm(span=3, adjust=False).mean()\r\newm_std = series.ewm(span=3).std()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "shift and diff"
      }), " for lag/lead computations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "df = pd.DataFrame({\"value\": [1, 3, 6, 10, 15]})\r\ndf[\"lag_1\"] = df[\"value\"].shift(1)        # previous row\r\ndf[\"lead_1\"] = df[\"value\"].shift(-1)       # next row\r\ndf[\"diff_1\"] = df[\"value\"].diff(1)         # period-over-period change\r\ndf[\"pct_change\"] = df[\"value\"].pct_change()  # fractional change\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applying custom functions"
      }), " over windows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def custom_window(x):\r\n    return x.max() - x.min() if len(x) > 0 else np.nan\r\n\r\nresult = series.rolling(3).apply(custom_window, raw=False)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-string-operations",
      children: "13.4 String Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The .str accessor provides vectorized string operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = pd.Series([\"Hello World\", \"  python  \", \"DATA SCIENCE\", None])\r\n\r\n## Basic transformations\r\nprint(s.str.lower())        # all lowercase\r\nprint(s.str.upper())        # all uppercase\r\nprint(s.str.strip())        # remove whitespace\r\nprint(s.str.len())          # string length\r\nprint(s.str.contains(\"python\"))  # boolean mask\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Splitting and replacing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "emails = pd.Series([\"alice@example.com\", \"bob@test.org\", \"charlie@co.uk\"])\r\n\r\n## Split by delimiter\r\nparts = emails.str.split(\"@\", expand=True)\r\nparts.columns = [\"user\", \"domain\"]\r\n\r\n## Replace\r\ncleaned = emails.str.replace(\"@\", \" [at] \", regex=False)\r\n\r\n## Replace with regex\r\nmasked = emails.str.replace(r\"(?<=.).(?=.*@)\", \"*\", regex=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Extracting with regex"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "text = pd.Series([\r\n    \"Order #12345: $99.99\",\r\n    \"Order #67890: $149.50\",\r\n    \"Order #11111: $200.00\"\r\n])\r\n\r\n## Extract with named groups\r\nextracted = text.str.extract(\r\n    r\"Order #(?P<order_id>\\d+):\\s\\$(?P<amount>[\\d.]+)\"\r\n)\r\n\r\n## Extract all matches\r\ndates = pd.Series([\"2024-01-15\", \"2024-02-20\", \"2024-03-25\"])\r\nparts = dates.str.extractall(r\"(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Checking string patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Startswith / endswith\r\nmask = s.str.startswith(\"H\")\r\nmask = s.str.endswith(\".com\")\r\n\r\n## Count occurrences\r\ncounts = s.str.count(\"a\")\r\n\r\n## Find position\r\npositions = s.str.find(\"World\")\r\n\r\n## Pad, center, slice\r\npadded = s.str.pad(width=20, side=\"both\", fillchar=\"-\")\r\ncentered = s.str.center(20, \"-\")\r\nsliced = s.str.slice(0, 5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-performance",
      children: "13.5 Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large DataFrames benefit from optimization techniques."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "eval and query"
      }), " use numexpr for fast evaluation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "n = 1_000_000\r\ndf = pd.DataFrame({\r\n    \"A\": np.random.randn(n),\r\n    \"B\": np.random.randn(n),\r\n    \"C\": np.random.randn(n)\r\n})\r\n\r\n## query — efficient boolean indexing\r\nresult = df.query(\"A > 0 and B < 0 and C > -1\")\r\n\r\n## eval — compute expressions without temporary arrays\r\ndf[\"D\"] = df.eval(\"A + B * 2 - C / 3\")\r\n\r\n## Multi-line eval\r\ndf.eval(\"\"\"\r\n    E = A + B\r\n    F = E * C\r\n\"\"\", inplace=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorical data"
      }), " reduces memory for repeated strings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Convert object column to categorical\r\ndf[\"category\"] = pd.Categorical(\r\n    np.random.choice([\"low\", \"medium\", \"high\", \"critical\"], n)\r\n)\r\n\r\n## Memory comparison\r\nprint(df[\"category\"].memory_usage(deep=True))\r\n\r\n## vs\r\nidentical_df = pd.DataFrame({\r\n    \"category\": np.random.choice([\"low\", \"medium\", \"high\", \"critical\"], n)\r\n})\r\nprint(identical_df[\"category\"].memory_usage(deep=True))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "numba integration"
      }), " for custom vectorized functions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numba\r\n\r\n@numba.jit(nopython=True)\r\ndef numba_sum(arr):\r\n    total = 0.0\r\n    for x in arr:\r\n        total += x\r\n    return total\r\n\r\n## Apply with engine='numba'\r\nresult = df[\"A\"].rolling(100).apply(\r\n    lambda x: numba_sum(x.values),\r\n    engine=\"numba\",\r\n    raw=True\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Other performance tips"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Use inplace=False (default) chain operations\r\ndf = (df\r\n    .query(\"A > 0\")\r\n    .assign(D=lambda x: x.A + x.B)\r\n    .groupby(\"category\")\r\n    .agg({\"A\": \"mean\", \"D\": \"sum\"})\r\n)\r\n\r\n## Specify dtypes at read time\r\ndf = pd.read_csv(\"large.csv\", dtype={\"id\": \"int32\", \"value\": \"float32\"})\r\n\r\n## Use usecols to load only needed columns\r\ndf = pd.read_csv(\"large.csv\", usecols=[\"id\", \"value\", \"date\"])\r\n\r\n## Use chunksize for large files\r\nchunks = []\r\nfor chunk in pd.read_csv(\"large.csv\", chunksize=10000):\r\n    filtered = chunk.query(\"value > 0\")\r\n    chunks.append(filtered)\r\nresult = pd.concat(chunks)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-time-series",
      children: "13.6 Time Series"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pandas excels at time series data manipulation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date ranges and frequencies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Create date ranges\r\ndates = pd.date_range(\r\n    start=\"2024-01-01\",\r\n    end=\"2024-12-31\",\r\n    freq=\"D\"  # daily\r\n)\r\n\r\n## Business days\r\nb_dates = pd.bdate_range(start=\"2024-01-01\", end=\"2024-12-31\")\r\n\r\n## Custom frequencies\r\nhourly = pd.date_range(\"2024-01-01\", periods=24, freq=\"h\")\r\nevery_6h = pd.date_range(\"2024-01-01\", periods=4, freq=\"6h\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "to_datetime and parsing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Parse string columns to datetime\r\ndf = pd.DataFrame({\"date_str\": [\"2024-01-15\", \"2024-02-20\", \"invalid\"]})\r\ndf[\"date\"] = pd.to_datetime(df[\"date_str\"], errors=\"coerce\")\r\n\r\n## Custom format\r\ndf[\"date\"] = pd.to_datetime(\r\n    df[\"date_str\"],\r\n    format=\"%Y-%m-%d\",\r\n    errors=\"coerce\"\r\n)\r\n\r\n## Infer datetime format\r\ndf[\"date\"] = pd.to_datetime(df[\"date_str\"], infer_datetime_format=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "resample"
      }), " changes the frequency of time series:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Create minute-level data\r\nidx = pd.date_range(\"2024-01-01\", periods=1440, freq=\"min\")\r\nts = pd.Series(np.random.randn(1440), index=idx)\r\n\r\n## Downsample to hourly\r\nhourly_mean = ts.resample(\"h\").mean()\r\nhourly_ohlc = ts.resample(\"h\").agg([\"mean\", \"std\", \"min\", \"max\"])\r\n\r\n## Upsample with interpolation\r\ndaily = pd.Series([100, 150, 130], index=pd.date_range(\"2024-01-01\", periods=3, freq=\"D\"))\r\nhourly = daily.resample(\"h\").interpolate(method=\"linear\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time zone handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Localize naive timestamps\r\nts_utc = ts.tz_localize(\"UTC\")\r\n\r\n## Convert timezone\r\nts_est = ts_utc.tz_convert(\"US/Eastern\")\r\nts_pst = ts_utc.tz_convert(\"US/Pacific\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Window functions on time series"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Rolling with time-based window\r\nts.rolling(\"1h\").mean()        # 1-hour rolling mean\r\nts.rolling(\"30min\").std()      # 30-minute rolling std\r\nts.rolling(\"2h\", min_periods=10).max()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Pivot table equivalent in TypeScript\r\ninterface Sale {\r\n    product: string;\r\n    region: string;\r\n    sales: number;\r\n    quantity: number;\r\n}\r\n\r\nfunction pivotTable(\r\n    data: Sale[],\r\n    values: keyof Sale,\r\n    index: keyof Sale,\r\n    columns: keyof Sale,\r\n    aggFn: (vals: number[]) => number\r\n): Record<string, Record<string, number>> {\r\n    const groups: Record<string, Record<string, number[]>> = {};\r\n    for (const row of data) {\r\n        const idx = String(row[index]);\r\n        const col = String(row[columns]);\r\n        (groups[idx] ??= {})[col] ??= [];\r\n        groups[idx][col].push(Number(row[values]));\r\n    }\r\n    const result: Record<string, Record<string, number>> = {};\r\n    for (const [idx, colGroups] of Object.entries(groups)) {\r\n        result[idx] = {};\r\n        for (const [col, vals] of Object.entries(colGroups)) {\r\n            result[idx][col] = aggFn(vals);\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// Window function equivalent\r\nfunction rollingMean(values: number[], window: number): (number | null)[] {\r\n    return values.map((_, i) => {\r\n        if (i < window - 1) return null;\r\n        const slice = values.slice(i - window + 1, i + 1);\r\n        return slice.reduce((a, b) => a + b, 0) / window;\r\n    });\r\n}\r\n\r\n// String operations (vectorized)\r\nfunction strContains(series: (string | null)[], pattern: string): boolean[] {\r\n    return series.map(s => s !== null && s.includes(pattern));\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pivot_table reshapes DataFrames by grouping index/columns and aggregating values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "crosstab computes frequency tables; melt converts wide to long format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MultiIndex enables hierarchical row/column indexing for complex data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "xs, swaplevel, stack/unstack navigate and reshape MultiIndex DataFrames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rolling, expanding, and ewm provide sliding window calculations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shift, diff, and pct_change compute lag/lead and period-over-period changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The .str accessor provides vectorized string operations with regex support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eval and query use numexpr for fast expression evaluation on large DataFrames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorical dtype reduces memory usage for columns with repeated string values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "resample changes time series frequency with various aggregation methods"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summary table across dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pivot_table with margins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual groupby and unstack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MultiIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flattened with redundant columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moving average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rolling().mean()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual loops over windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative statistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "expanding()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated full-data cumsum calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text cleaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".str.replace / .str.extract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "apply() with Python string methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large DataFrame filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "query() with numexpr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean indexing on full copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated string column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical dtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object dtype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time series resampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resample().agg()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual reindexing loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom rolling functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".apply() with raw=True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python-level loops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Difference between pivot and pivot_table?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "pivot() requires unique index/column combinations and cannot aggregate. pivot_table() handles duplicates by applying an aggregation function (default: mean). pivot() is syntactic sugar for unstack(), while pivot_table() is a full-featured groupby + reshape operation with margins, fill_value, and multiple aggfuncs."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How to select from a MultiIndex DataFrame?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use .loc with tuples: df.loc[(\"A\", 2024)]. Use .xs() for cross-sections: df.xs(key=\"A\", level=\"product\"). Use query() for complex conditions. Use swaplevel() followed by .loc to select by different level order. For columns MultiIndex, chain column access: df[\"Sales\"][\"Q1\"]."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What does stack() do?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "stack() pivots columns into the innermost row index level, converting wide format to long format. unstack() does the reverse, pivoting the innermost index level to columns. Together they enable efficient reshaping between representational forms."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: Rolling vs expanding windows?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Rolling windows have a fixed size and slide over the data, dropping old observations. Expanding windows grow over time, using all data from the start. Rolling is used for.\nmoving averages and short-term trends. Expanding is used for cumulative statistics like running mean or standard deviation."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: How does eval improve performance?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "eval() uses the numexpr library to evaluate expressions without creating intermediate arrays. It operates on contiguous memory blocks, leverages multiple CPU cores via multithreading,.\nand reduces memory bandwidth. For expressions like \"A + B * C - D\", eval can be 2-5x faster than Pandas' standard evaluation."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: When to use Categorical dtype?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use Categorical when a column has a limited number of unique string values relative to the total row count (e.g.,.\ngender, country code, status). It stores an integer codes array plus a mapping, reducing memory by 5-10x for highly repeated strings. Also enables ordered categories for.\nsorting and groupby operations."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How does resample work?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "resample() groups time series data by a new frequency (e.g., 'h' for hourly, 'D' for daily, 'W' for weekly, 'ME' for.\nmonth-end). It requires a DatetimeIndex. After resampling, apply aggregation (mean, sum, ohlc), interpolation, or forward/backward fill. Use .asfreq() to see NaN for.\nmissing periods."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: melt vs pivot?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "melt() converts wide format to long (unpivot), turning multiple columns into rows. pivot() converts long to wide. melt is useful when data is in spreadsheet format with columns representing variable values. pivot is useful for.\ncreating summary tables. Use melt + pivot for round-trip reshaping."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How to handle missing time series data?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use fillna() with method='ffill' (forward fill), method='bfill' (backward fill), or interpolate(). For resampling, use .asfreq() to introduce missing periods then fill. Use .reindex() with a complete date range to ensure all periods exist. For.\nirregular time series, consider using interpolation methods like linear or spline."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: Query vs boolean indexing performance?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "query() uses numexpr for fast evaluation, especially beneficial for large DataFrames (100k+ rows) with multiple conditions. Boolean indexing (df[(df.A > 0) & (df.B < 0)]) creates intermediate boolean arrays,.\nincreasing memory and time. For small DataFrames, the difference is negligible. query() also supports Python-style variable references with @."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What does pivot_table do with duplicate index/column pairs? a) raises an error b) drops duplicates c) applies an aggregation function d) returns NaN"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) applies an aggregation function (default mean)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which method converts the innermost index level to columns? a) stack() b) unstack() c) pivot() d) melt()"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) unstack()"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the window size effect of expanding()? a) fixed b) grows over time c) shrinks d) variable"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) grows over time, using all data from the start"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which Pandas feature uses numexpr under the hood? a) str accessor b) pivot_table c) eval/query d) merge"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) eval/query use numexpr for fast expression evaluation"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": resample('W') aggregates data by what frequency? a) daily b) weekly c) monthly d) yearly"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s13-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) weekly"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a pivot table showing average sales per product per region from a sales DataFrame with at least 20 rows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use melt() to convert a wide DataFrame with quarterly columns (Q1-Q4) to long format."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a MultiIndex DataFrame for stock prices (ticker, date) and compute a 5-day rolling mean for each ticker."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use .str.extract() to parse phone numbers in the format (123) 456-7890 from a text column into area code, prefix, and line number columns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Load a large CSV (1M+ rows) using chunksize and process it in chunks, filtering rows and writing results to a new file without loading the entire dataset into memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Simulate a trading strategy: generate minute-level price data for a week, compute 30-minute and 2-hour rolling means, and generate buy/sell signals when the short MA crosses the long MA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Pivot Tables, Multi-Index, Window Functions, Performance."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding this technique — Pivot Tables, Multi-Index, Window Functions, Performance. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Pivot Tables, Multi-Index, Window Functions, Performance from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Pivot Tables, Multi-Index, Window Functions, Performance."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Pivot Tables, Multi-Index, Window Functions, Performance run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of this technique — Pivot Tables, Multi-Index, Window Functions, Performance that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 13 Pandas Advanced is ___. — Answer: O(n) for iteration, O(1) for dict lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 13 Pandas Advanced is ___. — Answer: empty input, None values, type mismatches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Pivot Tables, Multi-Index, Window Functions, Performance is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Pivot Tables, Multi-Index, Window Functions, Performance on an empty input?"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Fluent Python' by Luciano Ramalho — the definitive advanced Python book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Python Cookbook' by David Beazley — practical recipes for real problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real Python tutorials: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://realpython.com",
          children: "https://realpython.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python official docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3",
          children: "https://docs.python.org/3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PEP 8 style guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0008",
          children: "https://peps.python.org/pep-0008"
        }), " Advanced — Pivot Tables, Multi-Index, Window Functions, Performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 01 — builds the foundation for 13 Pandas Advanced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 13 Pandas Advanced with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 13 Pandas Advanced fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 13 Pandas Advanced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 13 Pandas Advanced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 13 Pandas Advanced?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 13 Pandas Advanced?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 13 Pandas Advanced asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 13 Pandas Advanced?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance."
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
        children: "Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "secrets"
        }), " module instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "random"
        }), " for cryptographic operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs with Pydantic before processing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subprocess.run()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shell=False"
        }), " to prevent shell injection"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store secrets in environment variables or secret managers, never in source code"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin dependency versions in requirements.txt and scan with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip-audit"
        }), " for vulnerabilities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's GIL limits CPU parallelism — use multiprocessing for CPU-bound ML preprocessing, asyncio for I/O-bound API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy vectorization replaces Python loops with C-level operations — 100-1000x speedup for array operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generators enable processing datasets larger than RAM by yielding one batch at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type hints with mypy catch shape mismatches in tensor operations before runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling with cProfile identifies bottlenecks before optimizing — never optimize without measuring first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "13 Pandas Advanced is like a GPS navigation system"
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
          }), " — this chapter contributes the Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-13pandasadvanced-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is a high-level, dynamically-typed, interpreted language known for its readable syntax, extensive standard library, and dominant position in data science, ML, and backend development."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-13pandasadvanced-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common Python mistake: mutable default arguments. `def f(x=[])` shares the list across all calls. Use `def f(x=None): x = x or []` instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-13pandasadvanced-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "List comprehension: O(n). Dict lookup: O(1) average. Sorting: O(n log n). Generator: O(1) memory vs O(n) for list. String concatenation in loop: O(n^2) — use join() instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-13pandasadvanced-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is NOT the right choice when: (1) you need bare-metal performance (use C/Rust), (2) mobile app development, (3) real-time systems requiring microsecond latency."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-13pandasadvanced-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production Python stack: FastAPI for APIs, Pydantic for validation, SQLAlchemy for ORM, Celery for task queues, pytest for testing, ruff+black for linting, uv for package management."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ruff"
        }), " — extremely fast Python linter (replaces flake8, isort, pyupgrade)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "black"
        }), " — opinionated code formatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mypy"
        }), " — static type checker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pytest"
        }), " — testing framework with fixtures and parametrize"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "uv"
        }), " — fast Python package installer and resolver Advanced — Pivot Tables, Multi-Index, Window Functions, Performance"]
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
        }), ": Add structured logging at each stage of the 13 Pandas Advanced pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance."
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
        children: "Tell me about a time you debugged a Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_13_pandas_advanced(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 13 Pandas Advanced.\r\n\r\n    Key concepts: variables, functions, OOP, modules\r\n    Complexity: O(n) for iteration, O(1) for dict lookup\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 13 Pandas Advanced here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance without notes"
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
          children: "Instagram"
        }), " serves 2B users with a Python/Django backend, proving Python scales with the right architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dropbox"
        }), " uses Python for their desktop client and backend services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NASA"
        }), " uses Python for scientific computing and mission analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " uses Python extensively for internal tooling, ML pipelines, and YouTube's backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": demonstrate Pythonic code — list comprehensions, context managers, generators, and dataclasses show senior-level fluency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/14-data-visualization",
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance depends on input size and distribution — always benchmark for your own data."
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