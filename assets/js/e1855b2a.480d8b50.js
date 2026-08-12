"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18586],{

/***/ 35651
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_14_data_visualization_md_e18_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-14-data-visualization-md-e18.json
const site_docs_courses_ai_engineering_placement_01_python_programming_14_data_visualization_md_e18_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/14-data-visualization","title":"Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/14-data-visualization.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/14-data-visualization","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/14-data-visualization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"14-data-visualization","slug":"/ai-engineering-placement/01-python-programming/14-data-visualization","title":"Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards","sidebar_label":"Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards","sidebar_position":22},"sidebar":"coursesSidebar","previous":{"title":"Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/13-pandas-advanced"},"next":{"title":"02 — SQL & Databases","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/14-data-visualization.md


const frontMatter = {
	id: '14-data-visualization',
	slug: '/ai-engineering-placement/01-python-programming/14-data-visualization',
	title: 'Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards',
	sidebar_label: 'Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards',
	sidebar_position: 22
};
const contentTitle = 'Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards';

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
  "value": "14.1 Matplotlib Pyplot",
  "id": "141-matplotlib-pyplot",
  "level": 2
}, {
  "value": "14.2 Customization",
  "id": "142-customization",
  "level": 2
}, {
  "value": "14.3 Subplots",
  "id": "143-subplots",
  "level": 2
}, {
  "value": "14.4 Seaborn",
  "id": "144-seaborn",
  "level": 2
}, {
  "value": "14.5 Plotly Interactive",
  "id": "145-plotly-interactive",
  "level": 2
}, {
  "value": "14.6 Dashboards",
  "id": "146-dashboards",
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
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
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
        id: "data-visualization--matplotlib-seaborn-plotly-dashboards",
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
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
            children: "Create publication-quality plots with Matplotlib's pyplot API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Seaborn for statistical visualizations with attractive defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build interactive visualizations with Plotly and Plotly Express"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create multi-plot figures with subplots and custom layouts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customize plot aesthetics: colors, styles, annotations, themes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design simple dashboards for data exploration and communication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding data visualization is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how data visualization works in practice."
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
            children: "14.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matplotlib Pyplot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "figure, axes, plot, scatter, bar, hist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "colors, styles, annotations, legends, spines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subplots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "subplots, GridSpec, inset_axes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seaborn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "relplot, displot, catplot, heatmap, pairplot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plotly Interactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "plotly.express, go.Figure, animations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ipywidgets, panel, dashboard layout design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Data Visualization] --> B[Matplotlib]\n    A --> C[Seaborn]\n    A --> D[Plotly]\n    A --> E[Dashboards]\n    B --> F[pyplot API]\n    B --> G[Customization]\n    B --> H[Subplots]\n    C --> I[Statistical Plots]\n    C --> J[Heatmaps / Pairplots]\n    D --> K[Interactive Charts]\n    D --> L[Animations]\n    E --> M[ipywidgets]\n    E --> N[Panel Dashboards]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-matplotlib-pyplot",
      children: "14.1 Matplotlib Pyplot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Matplotlib is the foundational visualization library in Python. The pyplot API provides a MATLAB-like interface for creating figures."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\nplt.figure(figsize=(8, 4))\nplt.plot(x, y, label=\"sin(x)\", color=\"steelblue\", linewidth=2)\nplt.plot(x, np.cos(x), label=\"cos(x)\", color=\"coral\", linestyle=\"--\")\nplt.xlabel(\"X axis\")\nplt.ylabel(\"Y axis\")\nplt.title(\"Trigonometric Functions\")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common plot types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Scatter plot\nplt.figure(figsize=(6, 4))\nx = np.random.randn(100)\ny = np.random.randn(100)\ncolors = np.random.randn(100)\nsizes = np.random.randint(20, 200, 100)\nplt.scatter(x, y, c=colors, s=sizes, alpha=0.6, cmap=\"viridis\")\nplt.colorbar(label=\"Value\")\nplt.show()\n\n## Bar chart\ncategories = [\"A\", \"B\", \"C\", \"D\", \"E\"]\nvalues = [23, 45, 12, 67, 34]\nplt.bar(categories, values, color=\"skyblue\", edgecolor=\"navy\")\nplt.title(\"Bar Chart Example\")\nplt.show()\n\n## Histogram\ndata = np.random.randn(1000)\nplt.hist(data, bins=30, density=True, alpha=0.7, color=\"steelblue\")\nplt.xlabel(\"Value\")\nplt.ylabel(\"Density\")\nplt.title(\"Histogram with Density\")\nplt.show()\n\n## Box plot\ngroups = [np.random.randn(100) for _ in range(4)]\nplt.boxplot(groups, labels=[\"A\", \"B\", \"C\", \"D\"])\nplt.title(\"Box Plot Comparison\")\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Saving figures"
      }), " to disk:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "plt.savefig(\"plot.png\", dpi=300, bbox_inches=\"tight\")\nplt.savefig(\"plot.pdf\", format=\"pdf\")\nplt.savefig(\"plot.svg\", format=\"svg\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Figure and Axes API"
      }), " gives more control:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, ax = plt.subplots(figsize=(8, 4))\nax.plot(x, y, label=\"sin(x)\")\nax.plot(x, np.cos(x), label=\"cos(x)\")\nax.set_xlabel(\"X\")\nax.set_ylabel(\"Y\")\nax.set_title(\"Using Axes API\")\nax.legend()\nax.grid(True)\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-customization",
      children: "14.2 Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tune every element of your plots for publication quality."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Colors and colormaps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Named colors and hex codes\nplt.plot(x, y, color=\"tab:blue\")\nplt.plot(x, y, color=\"#2E86AB\")\nplt.plot(x, y, color=(0.2, 0.4, 0.6))\n\n## Colormaps\ncmap = plt.cm.viridis\ncmap = plt.cm.plasma\ncmap = plt.cm.coolwarm\ncmap = plt.cm.RdYlBu\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Line and marker styles"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "styles = [\n    {\"ls\": \"-\", \"marker\": \"o\", \"label\": \"solid\"},\n    {\"ls\": \"--\", \"marker\": \"s\", \"label\": \"dashed\"},\n    {\"ls\": \"-.\", \"marker\": \"^\", \"label\": \"dash-dot\"},\n    {\"ls\": \":\", \"marker\": \"d\", \"label\": \"dotted\"},\n]\nfor style in styles:\n    plt.plot(x, y, **style)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Annotations and text"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "plt.figure(figsize=(8, 4))\nplt.plot(x, y, color=\"steelblue\", linewidth=2)\n\nplt.annotate(\n    \"Peak\",\n    xy=(np.pi / 2, 1),\n    xytext=(np.pi / 2 + 1, 1.5),\n    arrowprops=dict(arrowstyle=\"->\", color=\"red\", linewidth=2),\n    fontsize=12, fontweight=\"bold\"\n)\n\nplt.text(0, -1.5, \"y = sin(x)\", fontsize=10, style=\"italic\")\n\n## Highlight regions\nplt.axvspan(2, 4, alpha=0.2, color=\"yellow\")\nplt.axhline(0, color=\"black\", linewidth=0.5)\nplt.axvline(np.pi, color=\"red\", linestyle=\"--\", alpha=0.5)\n\n## Reference lines\nplt.axhline(y=0.5, xmin=0.25, xmax=0.75, color=\"green\", linestyle=\":\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spine and tick customization"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, ax = plt.subplots()\nax.plot(x, y)\n\n## Remove top and right spines\nax.spines[\"top\"].set_visible(False)\nax.spines[\"right\"].set_visible(False)\n\n## Move bottom spine\nax.spines[\"bottom\"].set_position((\"data\", 0))\n\n## Custom ticks\nax.set_xticks([0, np.pi / 2, np.pi, 3 * np.pi / 2, 2 * np.pi])\nax.set_xticklabels([\"0\", r\"$\\pi/2$\", r\"$\\pi$\", r\"$3\\pi/2$\", r\"$2\\pi$\"])\n\n## Rotate tick labels\nplt.xticks(rotation=45)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Style sheets"
      }), " provide consistent theming:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(plt.style.available)\n\n## ['ggplot', 'seaborn-v0_8', 'fivethirtyeight', 'dark_background', ...]\n\nplt.style.use(\"seaborn-v0_8\")\n\n## Or use context manager for temporary style\nwith plt.style.context(\"ggplot\"):\n    plt.plot(x, y)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Customizing legends"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "plt.legend(\n    loc=\"upper right\",\n    frameon=True,\n    fancybox=True,\n    shadow=True,\n    fontsize=10,\n    title=\"Legend Title\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-subplots",
      children: "14.3 Subplots"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple plots in a single figure for comparative analysis."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic subplots"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, axes = plt.subplots(2, 3, figsize=(12, 6))\naxes[0, 0].plot(x, y)\naxes[0, 1].scatter(np.random.randn(50), np.random.randn(50))\naxes[0, 2].hist(np.random.randn(100), bins=20)\naxes[1, 0].bar([\"A\", \"B\", \"C\"], [10, 20, 15])\naxes[1, 1].boxplot([np.random.randn(50) for _ in range(3)])\naxes[1, 2].imshow(np.random.randn(10, 10), cmap=\"viridis\")\n\nplt.tight_layout()\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GridSpec for irregular layouts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from matplotlib.gridspec import GridSpec\n\nfig = plt.figure(figsize=(10, 8))\ngs = GridSpec(3, 3, figure=fig)\n\nax1 = fig.add_subplot(gs[0, :])\nax2 = fig.add_subplot(gs[1, :-1])\nax3 = fig.add_subplot(gs[1:, -1])\nax4 = fig.add_subplot(gs[2, 0])\nax5 = fig.add_subplot(gs[2, 1])\n\nax1.plot(x, y)\nax2.scatter(np.random.randn(50), np.random.randn(50))\nax3.hist(np.random.randn(100), bins=20, orientation=\"horizontal\")\nax4.bar([\"A\", \"B\"], [10, 20])\nax5.plot(np.sin(x), np.cos(x))\n\nplt.tight_layout()\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inset axes"
      }), " for zoom-in details:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, ax = plt.subplots(figsize=(8, 4))\nax.plot(x, y)\n\ninset = ax.inset_axes([0.6, 0.6, 0.3, 0.3])\ninset.plot(x[:20], y[:20], color=\"red\", linewidth=2)\ninset.set_title(\"Zoom\", fontsize=8)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared axes"
      }), " for aligned subplots:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, axes = plt.subplots(2, 1, sharex=True, sharey=True, figsize=(8, 5))\naxes[0].plot(x, np.sin(x))\naxes[0].set_title(\"sin(x)\")\naxes[1].plot(x, np.cos(x))\naxes[1].set_title(\"cos(x)\")\nplt.xlabel(\"X (shared)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Twin axes"
      }), " for dual y-axes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig, ax1 = plt.subplots()\nax1.plot(x, np.sin(x), color=\"steelblue\")\nax1.set_ylabel(\"sin(x)\", color=\"steelblue\")\n\nax2 = ax1.twinx()\nax2.plot(x, np.exp(x / 5), color=\"coral\")\nax2.set_ylabel(\"exp(x/5)\", color=\"coral\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-seaborn",
      children: "14.4 Seaborn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seaborn provides high-level statistical visualizations with attractive defaults and Pandas integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import seaborn as sns\nimport pandas as pd\n\ntips = sns.load_dataset(\"tips\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational plots"
      }), " show relationships between variables:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Scatter with hue and style\nsns.scatterplot(\n    data=tips, x=\"total_bill\", y=\"tip\",\n    hue=\"time\", style=\"sex\", size=\"size\",\n    palette=\"deep\"\n)\n\n## relplot with facets\nsns.relplot(\n    data=tips, x=\"total_bill\", y=\"tip\",\n    col=\"time\", hue=\"sex\", kind=\"scatter\"\n)\n\n## Line plot with confidence interval\nsns.lineplot(\n    data=tips, x=\"size\", y=\"tip\",\n    hue=\"time\", errorbar=(\"ci\", 95)\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution plots"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Histogram with KDE\nsns.histplot(tips[\"tip\"], bins=20, kde=True)\n\n## KDE plot\nsns.kdeplot(tips[\"tip\"], fill=True, alpha=0.5)\n\n## Displot with facets\nsns.displot(\n    data=tips, x=\"tip\",\n    col=\"time\", row=\"sex\",\n    kind=\"hist\", bins=15\n)\n\n## ECDF plot\nsns.ecdfplot(tips[\"tip\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorical plots"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Box plot\nsns.boxplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\")\n\n## Violin plot\nsns.violinplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\", split=True)\n\n## Strip / swarm plot\nsns.stripplot(data=tips, x=\"day\", y=\"total_bill\", jitter=True)\nsns.swarmplot(data=tips, x=\"day\", y=\"total_bill\", color=\"black\")\n\n## Bar plot with error bars\nsns.barplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\")\n\n## Count plot\nsns.countplot(data=tips, x=\"day\", hue=\"sex\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heatmap and correlation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "corr = tips.select_dtypes(\"number\").corr()\n\nsns.heatmap(\n    corr, annot=True, cmap=\"coolwarm\", center=0,\n    square=True, fmt=\".2f\", linewidths=0.5\n)\n\n## Cluster heatmap with dendrograms\nsns.clustermap(corr, annot=True, cmap=\"coolwarm\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pairplot and jointplot"
      }), " for multivariate exploration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "sns.pairplot(\n    tips, hue=\"time\",\n    diag_kind=\"kde\",\n    corner=True\n)\n\nsns.jointplot(\n    data=tips, x=\"total_bill\", y=\"tip\",\n    kind=\"hex\"\n)\n\nsns.jointplot(\n    data=tips, x=\"total_bill\", y=\"tip\",\n    kind=\"reg\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FacetGrid"
      }), " for custom multi-plot layouts:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "g = sns.FacetGrid(tips, col=\"time\", row=\"sex\", margin_titles=True)\ng.map(sns.scatterplot, \"total_bill\", \"tip\", alpha=0.6)\ng.add_legend()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Regression plots"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "sns.regplot(data=tips, x=\"total_bill\", y=\"tip\", ci=95)\nsns.lmplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"sex\", col=\"time\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-plotly-interactive",
      children: "14.5 Plotly Interactive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plotly creates interactive, web-based visualizations that support hover, zoom, and pan."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import plotly.express as px\nimport plotly.graph_objects as go\n\n## Plotly Express (high-level API)\ndf = px.data.iris()\nfig = px.scatter(\n    df, x=\"sepal_width\", y=\"sepal_length\",\n    color=\"species\", size=\"petal_length\",\n    hover_data=[\"petal_width\"],\n    title=\"Iris Dataset\"\n)\nfig.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chart types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Line chart\nfig = px.line(\n    x=pd.date_range(\"2024-01-01\", periods=100),\n    y=np.random.randn(100).cumsum(),\n    title=\"Random Walk\"\n)\n\n## Bar chart\nfig = px.bar(\n    tips, x=\"day\", y=\"total_bill\",\n    color=\"sex\", barmode=\"group\",\n    title=\"Average Bill by Day\"\n)\n\n## Histogram\nfig = px.histogram(tips, x=\"tip\", nbins=20, color=\"time\")\n\n## Box plot\nfig = px.box(tips, x=\"day\", y=\"total_bill\", color=\"sex\")\n\n## Heatmap\nfig = px.imshow(\n    corr.values, text_auto=\".2f\",\n    x=corr.columns, y=corr.columns,\n    color_continuous_scale=\"RdBu_r\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph Objects"
      }), " (low-level API) for full control:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fig = go.Figure()\n\nfig.add_trace(go.Scatter(\n    x=x, y=np.sin(x),\n    mode=\"lines+markers\",\n    name=\"sin(x)\",\n    line=dict(color=\"steelblue\", width=3),\n    marker=dict(size=6)\n))\n\nfig.add_trace(go.Bar(\n    x=categories, y=values,\n    name=\"Values\",\n    marker_color=\"skyblue\"\n))\n\nfig.update_layout(\n    title=\"Custom Figure\",\n    xaxis_title=\"X\",\n    yaxis_title=\"Y\",\n    template=\"plotly_dark\",\n    hovermode=\"x unified\"\n)\n\nfig.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Animation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "gapminder = px.data.gapminder()\nfig = px.scatter(\n    gapminder, x=\"gdpPercap\", y=\"lifeExp\",\n    size=\"pop\", color=\"continent\",\n    animation_frame=\"year\",\n    animation_group=\"country\",\n    log_x=True, size_max=60,\n    title=\"Gapminder Over Time\"\n)\nfig.show()\n\n## Animated line\npx.line(\n    gapminder[gapminder[\"country\"] == \"India\"],\n    x=\"year\", y=\"lifeExp\",\n    animation_frame=\"year\",\n    title=\"India Life Expectancy\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3D plots and faceted layouts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## 3D scatter\nfig = px.scatter_3d(\n    df, x=\"sepal_width\", y=\"sepal_length\", z=\"petal_length\",\n    color=\"species\", size=\"petal_width\"\n)\n\n## Faceted histogram\nfig = px.histogram(\n    tips, x=\"tip\", facet_col=\"time\",\n    facet_row=\"sex\", nbins=15\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subplots in Plotly"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from plotly.subplots import make_subplots\n\nfig = make_subplots(rows=2, cols=2, subplot_titles=[\"Scatter\", \"Bar\", \"Hist\", \"Box\"])\nfig.add_trace(go.Scatter(x=x, y=np.sin(x), mode=\"lines\"), row=1, col=1)\nfig.add_trace(go.Bar(x=categories, y=values), row=1, col=2)\nfig.add_trace(go.Histogram(x=np.random.randn(200)), row=2, col=1)\nfig.add_trace(go.Box(y=np.random.randn(200)), row=2, col=2)\nfig.update_layout(height=600, showlegend=False)\nfig.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-dashboards",
      children: "14.6 Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine visualizations into interactive dashboards for data exploration."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ipywidgets for interactive controls"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import ipywidgets as widgets\nfrom IPython.display import display\n\n@widgets.interact(\n    x_column=tips.select_dtypes(\"number\").columns,\n    y_column=tips.select_dtypes(\"number\").columns,\n    color=tips.columns.tolist()\n)\ndef interactive_plot(x_column, y_column, color):\n    fig, ax = plt.subplots(figsize=(8, 5))\n    for val in tips[color].unique():\n        subset = tips[tips[color] == val]\n        ax.scatter(subset[x_column], subset[y_column],\n                   label=val, alpha=0.6)\n    ax.set_xlabel(x_column)\n    ax.set_ylabel(y_column)\n    ax.set_title(f\"{y_column} vs {x_column}\")\n    ax.legend()\n    plt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Panel dashboard"
      }), " for more complex layouts:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import panel as pn\nimport holoviews as hv\n\npn.extension()\n\n## Widgets\nx_select = pn.widgets.Select(\n    name=\"X axis\",\n    options=tips.select_dtypes(\"number\").columns.tolist()\n)\ny_select = pn.widgets.Select(\n    name=\"Y axis\",\n    options=tips.select_dtypes(\"number\").columns.tolist(),\n    value=\"tip\"\n)\ncolor_select = pn.widgets.Select(\n    name=\"Color\",\n    options=[\"sex\", \"time\", \"day\"]\n)\n\n## Reactive plot\n@pn.depends(x_select, y_select, color_select)\ndef scatter_plot(x, y, color):\n    return tips.hvplot.scatter(x=x, y=y, by=color,\n                                width=600, height=400)\n\ndashboard = pn.Column(\n    pn.Row(x_select, y_select, color_select),\n    scatter_plot\n)\ndashboard.servable()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matplotlib-based dashboard with ipywidgets"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from ipywidgets import VBox, HBox\n\nday_selector = widgets.SelectMultiple(\n    options=tips[\"day\"].unique().tolist(),\n    value=[\"Sun\", \"Sat\"],\n    description=\"Days\"\n)\n\nsex_selector = widgets.ToggleButtons(\n    options=[\"All\", \"Male\", \"Female\"],\n    value=\"All\"\n)\n\n@widgets.interact(\n    days=widgets.SelectMultiple(\n        options=tips[\"day\"].unique().tolist(),\n        value=tips[\"day\"].unique().tolist()\n    ),\n    sex=widgets.ToggleButtons(\n        options=[\"All\", \"Male\", \"Female\"]\n    )\n)\ndef dashboard(days, sex):\n    filtered = tips[tips[\"day\"].isin(days)]\n    if sex != \"All\":\n        filtered = filtered[filtered[\"sex\"] == sex.lower()]\n\n    fig, axes = plt.subplots(1, 3, figsize=(14, 4))\n\n    axes[0].scatter(filtered[\"total_bill\"], filtered[\"tip\"], alpha=0.6)\n    axes[0].set_xlabel(\"Total Bill\")\n    axes[0].set_ylabel(\"Tip\")\n    axes[0].set_title(\"Tips vs Total Bill\")\n\n    axes[1].hist(filtered[\"total_bill\"], bins=15, color=\"skyblue\", edgecolor=\"white\")\n    axes[1].set_xlabel(\"Total Bill\")\n    axes[1].set_ylabel(\"Frequency\")\n    axes[1].set_title(\"Bill Distribution\")\n\n    filtered.boxplot(column=\"tip\", by=\"day\", ax=axes[2])\n    axes[2].set_title(\"Tips by Day\")\n    axes[2].set_xlabel(\"Day\")\n\n    plt.tight_layout()\n    plt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Voilà"
      }), " converts notebooks to standalone dashboards:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "voila dashboard.ipynb --port 8866\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simple chart renderer using HTML Canvas\nfunction renderLineChart(\n    canvasId: string,\n    data: { x: number[]; y: number[] },\n    options: { color?: string; title?: string } = {}\n) {\n    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;\n    const ctx = canvas.getContext(\"2d\")!;\n    const { width, height } = canvas;\n    const padding = 40;\n\n    ctx.clearRect(0, 0, width, height);\n\n    // Scale\n    const xMin = Math.min(...data.x);\n    const xMax = Math.max(...data.x);\n    const yMin = Math.min(...data.y);\n    const yMax = Math.max(...data.y);\n\n    // Draw axes\n    ctx.strokeStyle = \"#333\";\n    ctx.beginPath();\n    ctx.moveTo(padding, padding);\n    ctx.lineTo(padding, height - padding);\n    ctx.lineTo(width - padding, height - padding);\n    ctx.stroke();\n\n    // Draw line\n    ctx.strokeStyle = options.color || \"steelblue\";\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    for (let i = 0; i < data.x.length; i++) {\n        const px = padding + (data.x[i] - xMin) / (xMax - xMin) * (width - 2 * padding);\n        const py = height - padding - (data.y[i] - yMin) / (yMax - yMin) * (height - 2 * padding);\n        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);\n    }\n    ctx.stroke();\n}\n\n// Bar chart\nfunction renderBarChart(\n    canvasId: string,\n    categories: string[],\n    values: number[]\n) {\n    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;\n    const ctx = canvas.getContext(\"2d\")!;\n    const { width, height } = canvas;\n    const padding = 40;\n    const barWidth = (width - 2 * padding) / categories.length - 5;\n\n    const maxVal = Math.max(...values);\n    ctx.clearRect(0, 0, width, height);\n\n    categories.forEach((cat, i) => {\n        const x = padding + i * (barWidth + 5);\n        const barHeight = (values[i] / maxVal) * (height - 2 * padding);\n        const y = height - padding - barHeight;\n\n        ctx.fillStyle = \"skyblue\";\n        ctx.fillRect(x, y, barWidth, barHeight);\n        ctx.strokeStyle = \"navy\";\n        ctx.strokeRect(x, y, barWidth, barHeight);\n\n        ctx.fillStyle = \"#333\";\n        ctx.textAlign = \"center\";\n        ctx.fillText(cat, x + barWidth / 2, height - padding + 15);\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matplotlib's pyplot API provides a MATLAB-like interface for creating static plots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Figure + Axes API gives finer control over plot elements and layout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Colors, line styles, annotations, and style sheets customize plot appearance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "subplots(), GridSpec, and inset_axes create complex multi-plot layouts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seaborn offers high-level statistical visualizations with Pandas integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pairplot, heatmap, and FacetGrid enable multivariate data exploration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plotly Express creates interactive web-based visualizations with minimal code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plotly Graph Objects provide full control over interactive chart properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ipywidgets and Panel enable interactive dashboard creation from notebooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Voilà converts Jupyter notebooks into standalone dashboard applications"
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
            children: "Quick exploration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seaborn pairplot / displot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual subplot configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Publication figure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matplotlib with Axes API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default styles and colors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plotly Express"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static Matplotlib images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seaborn regplot / lmplot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual regression plotting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-plot comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GridSpec or FacetGrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping subplot axes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plotly line with hover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static line plots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Correlation analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seaborn heatmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual colored tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panel + hvplot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy JavaScript frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plotly with datashader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plotting 1M+ raw points"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Difference between pyplot and Axes API?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "pyplot uses a global state machine (plt.plot(), plt.xlabel()) and is convenient for quick plots. The Axes API (fig, ax = plt.subplots(); ax.plot()) provides object-oriented control over individual subplots, enabling precise customization, reusable code, and complex layouts."
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
      "data-qid": "p02-s14-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: When to use Seaborn vs Matplotlib?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use Seaborn for statistical visualizations (distributions, regressions, categorical data) with minimal code and attractive defaults. Use Matplotlib for fine-grained control over every plot element, custom layouts, and publication-quality figures. They work well together: Seaborn plots can be customized with the Matplotlib Axes API."
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
      "data-qid": "p02-s14-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: How to create a figure with 3 rows and 4 columns?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fig, axes = plt.subplots(3, 4, figsize=(12, 8))"
          }), ". axes is a 2D array indexed by row and column. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "plt.tight_layout()"
          }), " to prevent overlap. For irregular layouts, use GridSpec: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gs = GridSpec(3, 4); ax1 = fig.add_subplot(gs[0, :])"
          }), "."]
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
      "data-qid": "p02-s14-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does FacetGrid work in Seaborn?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FacetGrid creates a grid of subplots based on categorical variables. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "g = sns.FacetGrid(data, col=\"time\", row=\"sex\")"
          }), " creates one subplot per combination. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "g.map(sns.scatterplot, \"x\", \"y\")"
          }), " draws a scatter plot in each subplot. It automatically shares axes for comparability."]
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
      "data-qid": "p02-s14-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: Plotly Express vs Graph Objects?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Plotly Express (px) is a high-level API that creates complete figures from Pandas DataFrames in one line. It auto-generates layout,.\nlegend, and hover information. Graph Objects (go) is a low-level API for building figures trace by trace, offering full control over every aspect. Use Express for.\nexploration, Graph Objects for production."
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
      "data-qid": "p02-s14-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How to add animation to a Plotly chart?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "animation_frame"
          }), " parameter in Plotly Express. For scatter: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "px.scatter(data, x, y, animation_frame=\"year\")"
          }), ". Each unique value in animation_frame becomes a frame. Plotly interpolates between frames for smooth transitions. Works with scatter, bar, line, and other Express chart types."]
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
      "data-qid": "p02-s14-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How to combine Matplotlib and ipywidgets?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use @widgets.interact decorator on a function that takes widget values as parameters and creates Matplotlib plots. Each widget change calls the function, updating the plot. Common widgets: Select, Slider, SelectMultiple, ToggleButtons. Use plt.clf() to clear before redrawing, or update Axes data directly for performance."
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
      "data-qid": "p02-s14-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How to handle large datasets in visualizations?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "For 100k+ points: use hexbin plots in Matplotlib, Seaborn's kind=\"hex\" in jointplot, or Plotly with datashader for rasterized rendering. Subsampling (random sample of 10k) works for exploration. Histograms and KDE plots aggregate data into a fixed number of bins regardless of data size."
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
      "data-qid": "p02-s14-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How to create a dashboard from a Jupyter notebook?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use Voilà to convert notebooks to standalone web apps: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "voila notebook.ipynb"
          }), ". Use ipywidgets for interactivity within notebooks. Use Panel for more sophisticated dashboards with reactive programming. Both support Matplotlib, Bokeh, and Plotly visualizations. For production, consider Dash by Plotly."]
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
      "data-qid": "p02-s14-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How to save a figure with high resolution?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "plt.savefig(\"figure.png\", dpi=300, bbox_inches=\"tight\")"
          }), ". dpi=300 is standard for print. bbox_inches=\"tight\" removes extra whitespace. For vector formats, use PDF (", (0,jsx_runtime.jsx)(_components.code, {
            children: "plt.savefig(\"figure.pdf\")"
          }), ") or SVG (", (0,jsx_runtime.jsx)(_components.code, {
            children: "plt.savefig(\"figure.svg\")"
          }), ") for resolution-independent publication figures."]
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
      }), ": Which Matplotlib API gives the most control over subplot elements? a) pyplot b) Axes c) pylab d) inline"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Axes API provides object-oriented control"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does sns.pairplot() display? a) pairwise scatter plots b) bar charts c) time series d) pie charts"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) pairwise scatter plots for all numeric columns"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which Plotly API is best for quick exploration? a) Graph Objects b) Plotly Express c) Plotly Dash d) Plotly Figure"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Plotly Express (px) for one-line interactive charts"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": How to create an animated scatter plot in Plotly? a) animation_frame parameter b) animate=True c) loop=True d) VideoWriter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) use animation_frame parameter in px.scatter"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What converts a Jupyter notebook to a standalone dashboard? a) Voilà b) nbconvert c) Panel d) ipywidgets"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s14-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Voilà converts notebooks to standalone dashboards"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a line plot of sin(x) and cos(x) on the same figure with custom colors, line styles, and a legend."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use Seaborn to create a box plot comparing total_bill across days from the tips dataset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a 2x2 subplot layout with: scatter plot, histogram, bar chart, and box plot. Customize each with titles and axis labels."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use Plotly Express to create an animated scatter plot of the gapminder dataset, showing life expectancy vs GDP per capita over time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete interactive dashboard using ipywidgets that lets users filter a dataset by multiple categorical columns and view three coordinated plots (scatter, histogram, box plot) that update on filter change."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a custom chart renderer in TypeScript using HTML Canvas that draws a scatter plot with axis labels, gridlines, and tooltips on hover."]
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
            children: "Explain the core idea of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
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
            children: "Describe a production bug caused by misunderstanding Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards from 10 users to 10 million?"
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
            children: "Compare Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
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
            children: "How does Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in production today?"
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
        }), " Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards on an empty input?"
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
            children: "Complete Medium exercises, explain Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to someone else"
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
        children: "Always write a one-line example of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
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
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
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
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is like a recipe"
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
        }), " — this chapter contributes the Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-14datavisualization-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-14datavisualization-flash2",
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
      "data-qid": "01pythonprogramming-14datavisualization-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-14datavisualization-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-14datavisualization-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in production at scale"
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
        children: "Testing: pytest for unit tests of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards code."]
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
        }), " or your IDE's debugger to step through the Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards example code."]
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
        children: "Explain Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
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
        children: "Tell me about a time you debugged a Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards without notes"
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
        }), ": a small team uses Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards depends on input size and distribution — always benchmark for your own data."
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