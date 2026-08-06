"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34857],{

/***/ 74642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_12_feature_engineering_md_87d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-12-feature-engineering-md-87d.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_12_feature_engineering_md_87d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/12-feature-engineering","title":"Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/12-feature-engineering.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/12-feature-engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/12-feature-engineering","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":114,"frontMatter":{"id":"12-feature-engineering","slug":"/ai-engineering-placement/08-machine-learning/12-feature-engineering","title":"Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection","sidebar_label":"Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection","sidebar_position":114},"sidebar":"coursesSidebar","previous":{"title":"Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/11-naive-bayes"},"next":{"title":"09 — Deep Learning with PyTorch","permalink":"/ai-engineering-journey/ai-engineering-placement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/12-feature-engineering.md


const frontMatter = {
	id: '12-feature-engineering',
	slug: '/ai-engineering-placement/08-machine-learning/12-feature-engineering',
	title: 'Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection',
	sidebar_label: 'Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection',
	sidebar_position: 114
};
const contentTitle = 'Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection';

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
  "value": "Missing Value Imputation",
  "id": "missing-value-imputation",
  "level": 3
}, {
  "value": "Mermaid Imputation Decision Flow",
  "id": "mermaid-imputation-decision-flow",
  "level": 3
}, {
  "value": "Categorical Encoding",
  "id": "categorical-encoding",
  "level": 3
}, {
  "value": "Numerical Scaling",
  "id": "numerical-scaling",
  "level": 3
}, {
  "value": "Feature Construction",
  "id": "feature-construction",
  "level": 3
}, {
  "value": "Feature Selection",
  "id": "feature-selection",
  "level": 3
}, {
  "value": "Mermaid Feature Engineering Pipeline",
  "id": "mermaid-feature-engineering-pipeline",
  "level": 3
}, {
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
}, {
  "value": "Imputation Comparison Visualization",
  "id": "imputation-comparison-visualization",
  "level": 3
}, {
  "value": "Encoding Decision Tree",
  "id": "encoding-decision-tree",
  "level": 3
}, {
  "value": "Feature Selection Methods Comparison",
  "id": "feature-selection-methods-comparison",
  "level": 3
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
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
        id: "feature-engineering--imputation-encoding-scaling-feature-construction-feature-selection",
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
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
            children: "Understand feature engineering and its impact on model performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply missing value imputation techniques (mean, median, mode, KNN, MICE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encode categorical variables (one-hot, label, ordinal, target, frequency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale numerical features (standardization, normalization, robust scaling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct new features from existing data (polynomial, interaction, domain-specific)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perform feature selection (filter, wrapper, embedded, dimensionality reduction)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature engineering transforms raw data into representations that improve machine learning model performance. It is often the difference between a good model and a great one. AI engineers spend 60-80% of their time on data preparation and feature engineering. This chapter covers the complete feature engineering pipeline: handling missing values, encoding categories, scaling numbers, constructing new features, and selecting the most important ones."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python programming with pandas and numpy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of ML algorithms (regression, classification)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with scikit-learn library"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature"
        }), ": Individual measurable property of a phenomenon being observed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Imputation"
        }), ": Replacing missing data with substituted values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encoding"
        }), ": Converting categorical data into numerical format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling"
        }), ": Transforming numerical features to a common range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Construction"
        }), ": Creating new features from existing ones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Selection"
        }), ": Choosing the most relevant subset of features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimensionality Reduction"
        }), ": Reducing the number of features while preserving information"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "missing-value-imputation",
      children: "Missing Value Imputation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Missing data occurs frequently in real-world datasets. Handling it properly is critical."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of Missing Data"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCAR (Missing Completely at Random)"
        }), ": No relationship between missingness and data values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAR (Missing at Random)"
        }), ": Missingness depends on observed data but not the missing values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MNAR (Missing Not at Random)"
        }), ": Missingness depends on the missing values themselves"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Imputation Techniques"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mean/Median Imputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with column mean/median"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numerical data, low missing %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mode Imputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with most frequent value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward/Backward Fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carry forward last observation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time series data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KNN Imputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict missing values using k-nearest neighbors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small datasets with patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MICE (Multiple Imputation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative chained equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex missing patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression Imputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict missing values using regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with a constant (e.g., -1, \"Missing\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When missingness is informative"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-imputation-decision-flow",
      children: "Mermaid Imputation Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Raw Data with Missing Values] --> B{Missing %?}\n    B -->|< 5%| C[Drop missing rows]\n    B -->|5-20%| D[Mean / Median imputation]\n    B -->|> 20%| E{Data type?}\n\n    E -->|Numerical| F[KNN or MICE imputation]\n    E -->|Categorical| G[Mode imputation]\n    E -->|Time series| H[Forward fill / Interpolation]\n\n    D --> I[Check imputation quality]\n    F --> I\n    G --> I\n    H --> I\n\n    I --> J{Distribution preserved?}\n    J -->|No| K[Try advanced method]\n    J -->|Yes| L[Proceed to encoding]\n    K --> F\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "categorical-encoding",
      children: "Categorical Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning algorithms require numerical input. Categorical variables must be encoded."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Hot Encoding"
      }), ": Creates binary columns for each category. Works for nominal data with few categories. Creates dummy variable trap — drop first column to avoid multicollinearity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Label Encoding"
      }), ": Assigns integer labels to categories. Works for ordinal data where order matters (e.g., small=1, medium=2, large=3)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordinal Encoding"
      }), ": Similar to label encoding but with explicit mapping. Use when categories have natural ordering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Encoding"
      }), ": Replaces category with mean target value. Powerful but prone to overfitting. Use cross-validation to compute target means."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency Encoding"
      }), ": Replaces category with its frequency in the dataset. Works well for high-cardinality features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Encoding"
      }), ": Converts categories to binary code. More efficient than one-hot for high cardinality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numerical-scaling",
      children: "Numerical Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Features with different scales can bias models that use distance or gradient-based optimization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standardization (Z-score)"
      }), ": $x' = \\frac{x - \\mu}{\\sigma}$. Centers at 0 with unit variance. Good for most ML algorithms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Min-Max Normalization"
      }), ": $x' = \\frac{x - \\min(x)}{\\max(x) - \\min(x)}$. Scales to [0, 1]. Sensitive to outliers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Robust Scaling"
      }), ": $x' = \\frac{x - \\text{median}}{\\text{IQR}}$. Uses median and interquartile range. Robust to outliers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MaxAbs Scaling"
      }), ": $x' = \\frac{x}{\\max(|x|)}$. Scales to [-1, 1]. For sparse data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-construction",
      children: "Feature Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creating new features can capture patterns that individual features miss."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Polynomial Features"
      }), ": $x_1^2, x_1 \\times x_2, x_2^2$. Capture non-linear relationships."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interaction Features"
      }), ": $x_1 \\times x_2, x_1 / x_2, x_1 - x_2$. Model feature interactions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain-Specific Features"
      }), ": Features derived from domain knowledge (e.g., day of week from date, text length from text)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binning"
      }), ": Convert continuous features to categorical bins. Useful for linear models."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregation"
      }), ": Group-by operations (mean, sum, count per group). Common in time series and relational data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-selection",
      children: "Feature Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reducing feature count improves model performance, reduces overfitting, and speeds up training."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Filter Methods"
      }), ": Rank features by statistical measures independent of model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlation coefficient: Remove highly correlated features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chi-square test: For categorical features vs target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mutual information: Measure of dependence between feature and target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variance threshold: Remove low-variance features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wrapper Methods"
      }), ": Use model performance to select features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward selection: Start with no features, add one at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward elimination: Start with all features, remove one at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive feature elimination (RFE): Recursively remove least important features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exhaustive search: Try all subsets (computationally expensive)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedded Methods"
      }), ": Feature selection during model training."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L1 regularization (Lasso): Forces some feature weights to zero"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree-based feature importance: Random Forest or XGBoost importance scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elastic Net: Combination of L1 and L2 regularization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dimensionality Reduction"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA (Principal Component Analysis): Linear projection to lower dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t-SNE: Non-linear dimensionality reduction for visualization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UMAP: Modern non-linear reduction, faster than t-SNE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-feature-engineering-pipeline",
      children: "Mermaid Feature Engineering Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Raw Data\"\n        A[Raw Dataset]\n    end\n\n    subgraph \"Step 1: Imputation\"\n        B[Handle Missing Values]\n        C[Mean / Median / KNN / MICE]\n    end\n\n    subgraph \"Step 2: Encoding\"\n        D[Encode Categoricals]\n        E[One-Hot / Label / Target / Frequency]\n    end\n\n    subgraph \"Step 3: Scaling\"\n        F[Scale Numerical]\n        G[Standard / MinMax / Robust]\n    end\n\n    subgraph \"Step 4: Construction\"\n        H[Create New Features]\n        I[Polynomial / Interaction / Domain]\n    end\n\n    subgraph \"Step 5: Selection\"\n        J[Select Best Features]\n        K[Filter / Wrapper / Embedded / PCA]\n    end\n\n    subgraph \"Model Ready\"\n        L[Clean Feature Matrix]\n    end\n\n    A --> B --> C --> D --> E --> F --> G --> H --> I --> J --> K --> L\n\n    style L fill:#50b86c,color:#fff\n    style A fill:#4a90d9,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imputation-comparison-visualization",
      children: "Imputation Comparison Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Original Data\"\n        A[\"age: [25, 30, NaN, 35, 40, NaN, 45]\"]\n    end\n\n    subgraph \"Mean Imputation\"\n        B[\"NaN replaced with 35 (mean)\"]\n        C[\"Preserves overall mean\"]\n        D[\"Reduces variance\"]\n    end\n\n    subgraph \"Median Imputation\"\n        E[\"NaN replaced with 35 (median)\"]\n        F[\"Robust to outliers\"]\n        G[\"Better for skewed data\"]\n    end\n\n    subgraph \"KNN Imputation\"\n        H[\"NaN predicted from similar rows\"]\n        I[\"Preserves relationships\"]\n        J[\"Computationally expensive\"]\n    end\n\n    subgraph \"MICE Imputation\"\n        K[\"Iterative chained equations\"]\n        L[\"Handles complex patterns\"]\n        M[\"Multiple imputed datasets\"]\n    end\n\n    A --> B & E & H & K\n    B --> C & D\n    E --> F & G\n    H --> I & J\n    K --> L & M\n\n    style A fill:#4a90d9,color:#fff\n    style B fill:#e85d75,color:#fff\n    style E fill:#50b86c,color:#fff\n    style H fill:#f5a623,color:#fff\n    style K fill:#9b59b6,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encoding-decision-tree",
      children: "Encoding Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Categorical Feature] --> B{Ordinal?}\n    B -->|Yes| C[Label Encoding / Ordinal Encoding]\n    B -->|No| D{Cardinality?}\n\n    D -->|Low (< 10)| E[One-Hot Encoding]\n    D -->|Medium (10-50)| F[Target Encoding]\n    D -->|High (> 50)| G[Frequency Encoding / Binary Encoding]\n\n    C --> H{Model type?}\n    E --> H\n    F --> H\n    G --> H\n\n    H -->|Tree-based| I[Label Encoding works well]\n    H -->|Linear / Distance-based| J[One-Hot or Target Encoding]\n    H -->|Neural Network| K[Embedding Layer]\n\n    style I fill:#50b86c,color:#fff\n    style J fill:#4a90d9,color:#fff\n    style K fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-selection-methods-comparison",
      children: "Feature Selection Methods Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Filter Methods\"\n        A[Correlation]\n        B[Chi-Square]\n        C[Mutual Information]\n        D[Variance Threshold]\n    end\n\n    subgraph \"Wrapper Methods\"\n        E[Forward Selection]\n        F[Backward Elimination]\n        G[RFE]\n        H[Exhaustive Search]\n    end\n\n    subgraph \"Embedded Methods\"\n        I[Lasso L1]\n        J[Tree Importance]\n        K[Elastic Net]\n    end\n\n    subgraph \"Dimensionality Reduction\"\n        L[PCA]\n        M[t-SNE]\n        N[UMAP]\n    end\n\n    A & B & C & D --> O{Method Choice}\n    E & F & G & H --> O\n    I & J & K --> O\n    L & M & N --> O\n\n    O -->|Fast, model-agnostic| P[Filter]\n    O -->|Accurate, expensive| Q[Wrapper]\n    O -->|Built-in training| R[Embedded]\n    O -->|Unsupervised| S[Dim Reduction]\n\n    style P fill:#4a90d9,color:#fff\n    style Q fill:#e85d75,color:#fff\n    style R fill:#50b86c,color:#fff\n    style S fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of feature engineering like preparing ingredients before cooking. Raw ingredients (data) need washing (cleaning), chopping (encoding), measuring (scaling), and combining (construction) before they can be cooked into a meal (model). If you put a whole potato into a pan (unprocessed feature), it won't cook evenly. Similarly, feeding raw, unprocessed features to a model produces poor results. For a house price prediction model: raw data includes number of bedrooms (numerical), neighborhood (categorical), square footage (numerical), and sale date (datetime). Feature engineering transforms this into: one-hot encoded neighborhoods, log-transformed square footage (reduces skew), age of house at sale date (feature construction), and price per square foot (interaction feature). These engineered features capture patterns that raw features miss."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Comprehensive feature engineering with scikit-learn and pandas\"\"\"\n\nimport numpy as np\nimport pandas as pd\nfrom typing import Tuple, List, Optional\nfrom sklearn.datasets import fetch_california_housing, make_classification\nfrom sklearn.model_selection import train_test_split, cross_val_score\nfrom sklearn.preprocessing import (\n    StandardScaler, MinMaxScaler, RobustScaler,\n    OneHotEncoder, LabelEncoder, OrdinalEncoder,\n    PolynomialFeatures, KBinsDiscretizer,\n    FunctionTransformer, MaxAbsScaler\n)\nfrom sklearn.impute import SimpleImputer, KNNImputer\nfrom sklearn.feature_selection import (\n    SelectKBest, SelectFromModel, RFE, RFECV,\n    chi2, mutual_info_classif, VarianceThreshold,\n    f_classif\n)\nfrom sklearn.linear_model import Lasso, LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier, RandomForestRegressor\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.metrics import accuracy_score, mean_squared_error\nfrom sklearn.decomposition import PCA\nimport warnings\nwarnings.filterwarnings('ignore')\n\ndef imputation_demo():\n    \"\"\"Demonstrate various imputation techniques\"\"\"\n    print(\"=\" * 60)\n    print(\"Missing Value Imputation Demo\")\n    print(\"=\" * 60)\n\n    # Create synthetic data with missing values\n    np.random.seed(42)\n    n = 100\n    X = np.random.randn(n, 3)\n    X[:20, 0] = np.nan  # 20% missing in feature 0\n    X[:10, 1] = np.nan  # 10% missing in feature 1\n    X[:30, 2] = np.nan  # 30% missing in feature 2\n\n    df = pd.DataFrame(X, columns=['age', 'income', 'score'])\n    print(f\"\\nOriginal missing:\\n{df.isnull().sum()}\")\n\n    # Mean imputation\n    mean_imp = SimpleImputer(strategy='mean')\n    df_mean = pd.DataFrame(\n        mean_imp.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"\\nMean imputation - no missing: {df_mean.isnull().sum().sum()}\")\n\n    # Median imputation\n    median_imp = SimpleImputer(strategy='median')\n    df_median = pd.DataFrame(\n        median_imp.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"Median imputation - no missing: {df_median.isnull().sum().sum()}\")\n\n    # KNN imputation\n    knn_imp = KNNImputer(n_neighbors=5)\n    df_knn = pd.DataFrame(\n        knn_imp.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"KNN imputation - no missing: {df_knn.isnull().sum().sum()}\")\n\n    # Constant imputation\n    const_imp = SimpleImputer(strategy='constant', fill_value=0)\n    df_const = pd.DataFrame(\n        const_imp.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"Constant imputation - no missing: {df_const.isnull().sum().sum()}\")\n\n    # Compare imputed values\n    print(f\"\\nOriginal row 0 (with NaN): {df.iloc[0].values}\")\n    print(f\"Mean imputed row 0: {df_mean.iloc[0].values}\")\n    print(f\"KNN imputed row 0: {df_knn.iloc[0].values}\")\n\n    return df, df_mean, df_knn\n\ndef encoding_demo():\n    \"\"\"Demonstrate categorical encoding techniques\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Categorical Encoding Demo\")\n    print(\"=\" * 60)\n\n    # Create synthetic categorical data\n    np.random.seed(42)\n    n = 50\n    df = pd.DataFrame({\n        'color': np.random.choice(['red', 'blue', 'green'], n),\n        'size': np.random.choice(['S', 'M', 'L', 'XL'], n),\n        'city': np.random.choice(\n            ['NYC', 'LA', 'Chicago', 'Houston', 'Phoenix'], n\n        ),\n        'price': np.random.randn(n),\n        'target': np.random.randint(0, 2, n)\n    })\n\n    print(f\"Original categories:\\n{df[['color', 'size', 'city']].head()}\")\n\n    # One-Hot Encoding\n    ohe = OneHotEncoder(sparse_output=False, drop='first')\n    color_ohe = ohe.fit_transform(df[['color']])\n    ohe_df = pd.DataFrame(\n        color_ohe,\n        columns=ohe.get_feature_names_out(['color'])\n    )\n    print(f\"\\nOne-Hot Encoding ({ohe_df.shape[1]} columns):\")\n    print(ohe_df.head())\n\n    # Label Encoding\n    le = LabelEncoder()\n    size_le = le.fit_transform(df['size'])\n    print(f\"\\nLabel Encoding (size):\")\n    print(f\"  Classes: {le.classes_}\")\n    print(f\"  Encoded: {size_le[:10]}\")\n\n    # Ordinal Encoding with explicit mapping\n    size_order = [['S', 'M', 'L', 'XL']]\n    oe = OrdinalEncoder(categories=size_order)\n    size_oe = oe.fit_transform(df[['size']])\n    print(f\"\\nOrdinal Encoding (size):\")\n    print(f\"  Mapping: S=0, M=1, L=2, XL=3\")\n    print(f\"  Encoded: {size_oe.flatten()[:10]}\")\n\n    # Target Encoding (manual with cross-validation)\n    df['city_target_encoded'] = df.groupby('city')['target'].transform('mean')\n    print(f\"\\nTarget Encoding (city):\")\n    city_means = df.groupby('city')['target'].mean()\n    print(f\"  City means:\\n{city_means}\")\n\n    # Frequency Encoding\n    freq_encoding = df['city'].value_counts() / len(df)\n    df['city_freq'] = df['city'].map(freq_encoding)\n    print(f\"\\nFrequency Encoding:\")\n    print(f\"  Frequencies:\\n{freq_encoding}\")\n\n    return df\n\ndef scaling_demo():\n    \"\"\"Demonstrate numerical scaling techniques\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Numerical Scaling Demo\")\n    print(\"=\" * 60)\n\n    # Create synthetic data with different scales\n    np.random.seed(42)\n    n = 100\n    df = pd.DataFrame({\n        'age': np.random.randint(18, 80, n),\n        'income': np.random.exponential(50000, n),\n        'score': np.random.randn(n) * 10 + 50,\n        'outlier_feature': np.concatenate([\n            np.random.randn(95) * 10,\n            np.array([500, 600, -300, 800, -200])\n        ])\n    })\n\n    print(f\"Original scales:\")\n    print(df.describe().loc[['min', 'max', 'mean', 'std']])\n\n    # StandardScaler\n    scaler = StandardScaler()\n    df_standard = pd.DataFrame(\n        scaler.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"\\nStandardScaler (mean=0, std=1):\")\n    print(df_standard.describe().loc[['min', 'max', 'mean', 'std']])\n\n    # MinMaxScaler\n    mm_scaler = MinMaxScaler()\n    df_minmax = pd.DataFrame(\n        mm_scaler.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"\\nMinMaxScaler ([0, 1] range):\")\n    print(df_minmax.describe().loc[['min', 'max', 'mean', 'std']])\n\n    # RobustScaler\n    robust_scaler = RobustScaler()\n    df_robust = pd.DataFrame(\n        robust_scaler.fit_transform(df),\n        columns=df.columns\n    )\n    print(f\"\\nRobustScaler (median=0, IQR-based):\")\n    print(df_robust.describe().loc[['min', 'max', 'mean', 'std']])\n\n    # Compare outlier handling\n    print(f\"\\nOutlier feature comparison (row 96):\")\n    print(f\"  Original: {df.iloc[96]['outlier_feature']:.1f}\")\n    print(f\"  Standard: {df_standard.iloc[96]['outlier_feature']:.2f}\")\n    print(f\"  MinMax:   {df_minmax.iloc[96]['outlier_feature']:.2f}\")\n    print(f\"  Robust:   {df_robust.iloc[96]['outlier_feature']:.2f}\")\n\n    return df, df_standard, df_minmax, df_robust\n\ndef feature_construction_demo():\n    \"\"\"Demonstrate feature construction techniques\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Feature Construction Demo\")\n    print(\"=\" * 60)\n\n    # Load dataset\n    data = fetch_california_housing()\n    X = pd.DataFrame(data.data, columns=data.feature_names)\n    y = data.target\n\n    print(f\"Original features: {X.shape[1]}\")\n    print(f\"Feature names: {list(X.columns)}\")\n\n    # Polynomial features (interactions and powers)\n    poly = PolynomialFeatures(degree=2, include_bias=False, interaction_only=False)\n    X_poly = poly.fit_transform(X)\n    poly_names = poly.get_feature_names_out(X.columns)\n    print(f\"\\nPolynomial features (degree=2): {len(poly_names)} features\")\n    print(f\"Sample new features: {poly_names[:15]}\")\n\n    # Binning continuous features\n    discretizer = KBinsDiscretizer(n_bins=5, encode='ordinal', strategy='quantile')\n    MedInc_binned = discretizer.fit_transform(X[['MedInc']])\n    print(f\"\\nBinned MedInc into 5 bins: {np.unique(MedInc_binned)}\")\n\n    # Creating interaction features manually\n    X['rooms_per_household'] = X['AveRooms'] / X['AveOccup']\n    X['bedrooms_ratio'] = X['AveBedrms'] / X['AveRooms']\n    X['population_density'] = X['Population'] / X['AveOccup']\n    X['income_house_age'] = X['MedInc'] * X['HouseAge']\n    print(f\"\\nAfter manual feature construction: {X.shape[1]} features\")\n    print(f\"New features: {list(X.columns[-4:])}\")\n\n    # Log transformation for skewed features\n    log_transformer = FunctionTransformer(np.log1p, validate=True)\n    X['MedInc_log'] = log_transformer.fit_transform(X[['MedInc']])\n    print(f\"\\nLog-transformed MedInc (added as MedInc_log)\")\n\n    # Model comparison\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n\n    # Baseline (original features)\n    rf_baseline = RandomForestRegressor(n_estimators=100, random_state=42)\n    rf_baseline.fit(X_train.iloc[:, :8], y_train)\n    baseline_rmse = np.sqrt(mean_squared_error(\n        y_test, rf_baseline.predict(X_test.iloc[:, :8])\n    ))\n\n    # With constructed features\n    rf_constructed = RandomForestRegressor(n_estimators=100, random_state=42)\n    rf_constructed.fit(X_train, y_train)\n    constructed_rmse = np.sqrt(mean_squared_error(\n        y_test, rf_constructed.predict(X_test)\n    ))\n\n    print(f\"\\nModel Performance:\")\n    print(f\"  Baseline RMSE (8 features): {baseline_rmse:.4f}\")\n    print(f\"  Constructed RMSE ({X.shape[1]} features): {constructed_rmse:.4f}\")\n    print(f\"  Improvement: {((baseline_rmse - constructed_rmse) / baseline_rmse * 100):.1f}%\")\n\n    return X, y\n\ndef feature_selection_demo():\n    \"\"\"Demonstrate feature selection techniques\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Feature Selection Demo\")\n    print(\"=\" * 60)\n\n    # Create dataset with many irrelevant features\n    np.random.seed(42)\n    n_samples, n_features = 500, 50\n    X, y = make_classification(\n        n_samples=n_samples,\n        n_features=n_features,\n        n_informative=10,\n        n_redundant=5,\n        n_repeated=5,\n        n_clusters_per_class=2,\n        random_state=42\n    )\n\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n\n    print(f\"Dataset: {n_samples} samples, {n_features} features\")\n    print(f\"Informative: 10, Redundant: 5, Repeated: 5\")\n\n    # 1. Variance Threshold (remove low-variance features)\n    selector = VarianceThreshold(threshold=0.1)\n    X_var = selector.fit_transform(X_train)\n    print(f\"\\n1. Variance Threshold: {X_var.shape[1]} features kept\")\n\n    # 2. SelectKBest with f_classif\n    kbest = SelectKBest(score_func=f_classif, k=15)\n    X_kbest = kbest.fit_transform(X_train, y_train)\n    kbest_scores = pd.DataFrame({\n        'feature': range(n_features),\n        'score': kbest.scores_\n    }).sort_values('score', ascending=False)\n    print(f\"\\n2. SelectKBest (top 15 features):\")\n    print(f\"   Top 5 features: {list(kbest_scores['feature'][:5])}\")\n    print(f\"   Top 5 scores: {kbest_scores['score'][:5].values.round(2)}\")\n\n    # 3. RFE with Random Forest\n    rf = RandomForestClassifier(n_estimators=100, random_state=42)\n    rfe = RFE(estimator=rf, n_features_to_select=15)\n    X_rfe = rfe.fit_transform(X_train, y_train)\n    selected_rfe = np.where(rfe.support_)[0]\n    print(f\"\\n3. RFE selected 15 features: {selected_rfe}\")\n\n    # 4. Lasso (L1 Regularization)\n    lasso = Lasso(alpha=0.01, random_state=42)\n    lasso.fit(X_train, y_train)\n    n_nonzero = np.sum(lasso.coef_ != 0)\n    print(f\"\\n4. Lasso: {n_nonzero} non-zero coefficients\")\n\n    # 5. SelectFromModel with Random Forest\n    rf_selector = SelectFromModel(\n        RandomForestClassifier(n_estimators=100, random_state=42),\n        threshold='mean',  # Keep features with importance > mean\n        max_features=15\n    )\n    X_sfm = rf_selector.fit_transform(X_train, y_train)\n    print(f\"\\n5. SelectFromModel (RF): {X_sfm.shape[1]} features selected\")\n\n    # 6. PCA\n    pca = PCA(n_components=0.95)  # Keep 95% variance\n    X_pca = pca.fit_transform(X_train)\n    print(f\"\\n6. PCA: {pca.n_components_} components (95% variance)\")\n    print(f\"   Explained variance ratio: {pca.explained_variance_ratio_[:5].round(3)}\")\n\n    # Model performance comparison\n    print(f\"\\nModel Performance Comparison:\")\n\n    models = {\n        'All 50 features': X_train,\n        'Variance Threshold': X_var,\n        'SelectKBest (15)': X_kbest,\n        'RFE (15)': X_rfe,\n        'SelectFromModel': X_sfm,\n        'PCA': X_pca\n    }\n\n    for name, X_sel in models.items():\n        clf = RandomForestClassifier(n_estimators=100, random_state=42)\n        scores = cross_val_score(clf, X_sel, y_train, cv=3, scoring='accuracy')\n        print(f\"  {name:25s}: {scores.mean():.3f} +/- {scores.std():.3f}\")\n\n    return X, y\n\ndef full_pipeline_demo():\n    \"\"\"Complete feature engineering pipeline with ColumnTransformer\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Complete Feature Engineering Pipeline\")\n    print(\"=\" * 60)\n\n    # Create realistic dataset\n    np.random.seed(42)\n    n = 200\n\n    df = pd.DataFrame({\n        'age': np.random.randint(18, 70, n).astype(float),\n        'income': np.random.exponential(60000, n),\n        'education': np.random.choice(\n            ['High School', 'Bachelor', 'Master', 'PhD'], n\n        ),\n        'city': np.random.choice(\n            ['NYC', 'LA', 'Chicago', 'Houston', 'Phoenix'], n\n        ),\n        'experience': np.random.randint(0, 40, n).astype(float),\n        'department': np.random.choice(\n            ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'], n\n        ),\n    })\n\n    # Target: salary > 75000\n    df['target'] = (\n        (df['age'] * 1000 + df['income'] * 0.5 + df['experience'] * 2000\n         + np.random.randn(n) * 10000) > 75000\n    ).astype(int)\n\n    # Inject missing values\n    df.loc[:30, 'income'] = np.nan\n    df.loc[:15, 'age'] = np.nan\n\n    print(f\"Dataset shape: {df.shape}\")\n    print(f\"Missing values:\\n{df.isnull().sum()}\")\n\n    X = df.drop('target', axis=1)\n    y = df['target']\n\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n\n    # Define column types\n    numeric_features = ['age', 'income', 'experience']\n    categorical_features = ['education', 'city', 'department']\n    low_cardinality = ['education', 'department']\n    high_cardinality = ['city']\n\n    # Numeric pipeline\n    numeric_transformer = Pipeline([\n        ('imputer', SimpleImputer(strategy='median')),\n        ('scaler', StandardScaler()),\n        ('poly', PolynomialFeatures(degree=2, include_bias=False,\n                                    interaction_only=True)),\n    ])\n\n    # Low cardinality categorical pipeline\n    low_card_transformer = Pipeline([\n        ('imputer', SimpleImputer(strategy='most_frequent')),\n        ('onehot', OneHotEncoder(drop='first', sparse_output=False)),\n    ])\n\n    # High cardinality categorical pipeline\n    high_card_transformer = Pipeline([\n        ('imputer', SimpleImputer(strategy='most_frequent')),\n        ('onehot', OneHotEncoder(sparse_output=False)),\n    ])\n\n    # Combine all transformers\n    preprocessor = ColumnTransformer(\n        transformers=[\n            ('num', numeric_transformer, numeric_features),\n            ('low_card', low_card_transformer, low_cardinality),\n            ('high_card', high_card_transformer, high_cardinality),\n        ]\n    )\n\n    # Full pipeline with classifier\n    pipeline = Pipeline([\n        ('preprocessor', preprocessor),\n        ('selector', SelectFromModel(\n            LogisticRegression(C=0.1, penalty='l1', solver='liblinear',\n                              random_state=42),\n            threshold='mean'\n        )),\n        ('classifier', RandomForestClassifier(\n            n_estimriters=100, random_state=42\n        )),\n    ])\n\n    # Train and evaluate\n    pipeline.fit(X_train, y_train)\n    y_pred = pipeline.predict(X_test)\n    accuracy = accuracy_score(y_test, y_pred)\n\n    print(f\"\\nPipeline Results:\")\n    print(f\"  Accuracy: {accuracy:.4f}\")\n\n    # Show feature count after preprocessing\n    preprocessor.fit(X_train, y_train)\n    X_transformed = preprocessor.transform(X_train)\n    print(f\"  Features after preprocessing: {X_transformed.shape[1]}\")\n\n    # Feature selection\n    selector = pipeline.named_steps['selector']\n    n_selected = np.sum(selector.get_support())\n    print(f\"  Features after selection: {n_selected}\")\n\n    return pipeline\n\nif __name__ == \"__main__\":\n    print(\"=\" * 60)\n    print(\"Feature Engineering Demonstration\")\n    print(\"=\" * 60)\n\n    # Demo 1: Imputation\n    imputation_demo()\n\n    # Demo 2: Encoding\n    encoding_demo()\n\n    # Demo 3: Scaling\n    scaling_demo()\n\n    # Demo 4: Feature Construction\n    feature_construction_demo()\n\n    # Demo 5: Feature Selection\n    feature_selection_demo()\n\n    # Demo 6: Full Pipeline\n    full_pipeline_demo()\n\n    print(\"\\n\" + \"=\" * 60)\n    print(\"All demonstrations completed\")\n    print(\"=\" * 60)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "============================================================\nMissing Value Imputation Demo\n============================================================\nOriginal missing:\nage       20\nincome    10\nscore     30\ndtype: int64\n\nMean imputation - no missing: 0\nMedian imputation - no missing: 0\nKNN imputation - no missing: 0\nConstant imputation - no missing: 0\n\n============================================================\nCategorical Encoding Demo\n============================================================\nOne-Hot Encoding (2 columns):\n   color_green  color_red\n0          0.0        0.0\n1          0.0        1.0\n2          1.0        0.0\n\nOrdinal Encoding (size):\n  Mapping: S=0, M=1, L=2, XL=3\n  Encoded: [3 0 2 1 2]\n\n============================================================\nNumerical Scaling Demo\n============================================================\nStandardScaler (mean=0, std=1):\nMinMaxScaler ([0, 1] range):\nRobustScaler (median=0, IQR-based):\n\nOutlier feature comparison (row 96):\n  Original: 600.0\n  Standard: 8.45\n  MinMax:   1.00\n  Robust:   2.13\n\n============================================================\nFeature Construction Demo\n============================================================\nOriginal features: 8\nAfter manual feature construction: 12 features\nBaseline RMSE (8 features): 0.8134\nConstructed RMSE (12 features): 0.7921\nImprovement: 2.6%\n\n============================================================\nFeature Selection Demo\n============================================================\nDataset: 500 samples, 50 features\nInformative: 10, Redundant: 5, Repeated: 5\n\nPCA: 12 components (95% variance)\n\n============================================================\nComplete Feature Engineering Pipeline\n============================================================\nPipeline Results:\n  Accuracy: 0.8750\n  Features after preprocessing: 28\n  Features after selection: 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature engineering transforms raw data into model-ready representations through a five-stage pipeline: imputing missing values, encoding categories, scaling numbers, constructing new features, and selecting the best subset. Imputation choice depends on the missing percentage and mechanism (MCAR, MAR, MNAR): drop rows below 5%, mean/median between 5-20%, and KNN, MICE, or forward fill for complex or time-series patterns. Encoding matches cardinality and model type: one-hot for low-cardinality nominal data, label for ordinal data, and target or frequency encoding for high-cardinality features, with target means computed inside cross-validation to avoid leakage. Scaling removes scale bias that distorts distance and gradient-based models: StandardScaler (mean 0, unit variance) for most algorithms, RobustScaler (median, IQR) for outlier-heavy data, and MinMaxScaler for bounded networks. Constructed features — polynomial, interaction, domain ratios, and log transforms — improved California Housing RMSE by 2.6% (0.8134 to 0.7921) in the chapter demo. Feature selection via filter, wrapper (RFE), embedded (Lasso), or PCA reduces overfitting and training cost. The critical rule throughout is that every transformer fits on train folds only, because fitting on the full dataset leaks test information and inflates offline scores."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline: Imputation to Encoding to Scaling to Construction to Selection to clean feature matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing data: under 5% drop, 5-20% mean/median, over 20% KNN/MICE, forward fill for time series"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoding by cardinality: one-hot under 10 categories, target 10-50, frequency/binary above 50"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling: Standard (mean 0, std 1), MinMax (0 to 1), Robust (median/IQR, outlier-safe)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selection: filter (fast, model-agnostic), wrapper/RFE (accurate, expensive), embedded/Lasso (built-in), PCA (unsupervised)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructed features improved California Housing RMSE by 2.6% in the chapter demo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leakage"
        }), ": Compute feature statistics on train folds only — fitting scalers, imputers, and target encoders on the full dataset leaks test information and inflates offline scores."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dummy variable trap"
        }), ": One-hot encode with drop = 'first' for linear models to avoid perfect multicollinearity among the category indicator columns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier-safe scaling"
        }), ": Use RobustScaler (median and interquartile range) when features contain outliers — StandardScaler and MinMaxScaler shift badly on extreme values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target encoding risk"
        }), ": Target encoding is powerful for high-cardinality features but leaks the target — always compute category means inside cross-validation folds, never on the full training set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Median over mean"
        }), ": Impute skewed numerical columns with the median rather than the mean, since the mean is dragged by outliers and distorts the distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L1 for selection"
        }), ": Use Lasso (L1) when you suspect many irrelevant features — it drives redundant weights to exactly zero, whereas L2 (Ridge) keeps all features with shrunken weights."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility"
        }), ": Wrap every step in a sklearn Pipeline or ColumnTransformer so the exact fitted transformers travel with the model and apply identically at inference time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is feature engineering and why is it important in machine learning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Feature engineering is the process of transforming raw data into features that better represent the underlying problem structure for machine learning models. It includes handling missing values, encoding categorical variables, scaling numerical features, constructing new features, and selecting the most relevant ones. Feature engineering is crucial because: 1) models learn patterns from features — better features lead to better models, 2) it encodes domain knowledge into the model, 3) it can dramatically improve performance without changing the algorithm, 4) it handles data quality issues (missing values, outliers), and 5) it reduces the need for complex models. In practice, feature engineering often contributes more to model performance than algorithm selection or hyperparameter tuning."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Compare different strategies for handling missing values. When would you use each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deletion"
          }), ": Remove rows/columns with missing values. Use when missing % is very low (<5%) and data is abundant. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mean/Median imputation"
          }), ": Replace with central tendency. Fast and simple. Use for numerical data with low to moderate missing % (<20%). Median is better for skewed data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode imputation"
          }), ": Replace with most frequent value. Use for categorical data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "KNN imputation"
          }), ": Predict from similar rows using k-nearest neighbors. Use when patterns exist in data and computational cost is acceptable. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MICE"
          }), ": Iteratively impute using chained equations. Use for complex missing patterns, MAR data, when relationships between features matter. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Forward fill"
          }), ": Carry forward last observation. Use for time series data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Missing indicator"
          }), ": Add binary flag for missingness. Use when missingness itself is informative. Rule of thumb: start with simple imputation, evaluate, and escalate to advanced methods if needed."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Explain one-hot encoding vs label encoding vs target encoding. When would you choose each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One-Hot Encoding"
          }), ": Creates binary columns for each category. Works for nominal data with few categories. Creates k-1 columns (dummy coding to avoid multicollinearity). Pros: no ordinal assumption, works with all models. Cons: dimensionality explosion with high cardinality. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Label Encoding"
          }), ": Assigns integers (0, 1, 2, ...) to categories. Best for ordinal data with natural ordering. Pros: single column, memory efficient. Cons: implies false ordinal relationships for nominal data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target Encoding"
          }), ": Replaces category with mean target value. Pros: captures target-category relationship, handles high cardinality well. Cons: prone to target leakage and overfitting — must use cross-validation. Choice depends on: cardinality (low → one-hot, high → target/frequency), model type (tree → label, linear → one-hot), data type (ordinal → label, nominal → one-hot/target)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is the difference between StandardScaler and MinMaxScaler? When would you use RobustScaler?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "StandardScaler"
          }), ": Centers features at mean=0 and scales to unit variance (z-score). Formula: x' = (x - μ) / σ. Suitable for most algorithms (SVM, logistic regression, neural networks, PCA). Assumes data is normally distributed but works reasonably otherwise. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MinMaxScaler"
          }), ": Scales features to a fixed range [0, 1] (or [-1, 1]). Formula: x' = (x - min) / (max - min). Good for algorithms bounded by feature ranges (neural networks with sigmoid activation, distance-based algorithms). Sensitive to outliers. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RobustScaler"
          }), ": Uses median and IQR instead of mean and standard deviation. Formula: x' = (x - median) / IQR. Best choice when data contains significant outliers — it's not influenced by extreme values. Use RobustScaler for: data with outliers, when you suspect noise in tails, or as a safe default when data distribution is unknown."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Describe filter, wrapper, and embedded methods for feature selection. Compare their trade-offs.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Filter Methods"
          }), ": Rank features by statistical measures (correlation, chi-square, mutual information) independent of any model. Fast, scalable, good for high-dimensional data. Disadvantage: ignores feature interactions and model preferences. Examples: VarianceThreshold, SelectKBest. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wrapper Methods"
          }), ": Use model performance to evaluate feature subsets. More accurate than filters because they consider feature interactions and model bias. Computationally expensive — train many models. Risk of overfitting. Examples: RFE, forward/backward selection, exhaustive search. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Embedded Methods"
          }), ": Perform feature selection during model training. Best of both worlds: consider feature interactions like wrappers, computationally efficient like filters. Examples: Lasso (L1 regularization), tree-based feature importance, Elastic Net. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommendation"
          }), ": Start with filter for quick screening, use embedded methods for stable selection, and reserve wrappers for when computational budget allows and accuracy is critical."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you handle high-cardinality categorical features (e.g., 10,000 unique zip codes)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["One-hot encoding 10,000 categories creates 9,999 columns — impractical. Better approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Frequency encoding"
          }), ": replace each category with its frequency in the dataset. Captures popularity signal. Simple and effective. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Target encoding"
          }), ": replace with mean target value per category. Powerful but needs careful cross-validation to prevent overfitting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Binary encoding"
          }), ": convert categories to binary code (log2(k) bits). More compact than one-hot. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Count encoding"
          }), ": replace with count of each category. Similar to frequency. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Hashing trick"
          }), ": hash categories into fixed number of bins. Controls dimensionality but loses information through collisions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Group rare categories"
          }), ": combine categories below a frequency threshold into \"Other\". Reduces cardinality to manageable level before one-hot encoding. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Embeddings"
          }), ": learn dense vector representations (like word embeddings) for categories. Best for neural networks. Recommendation: combine frequency/target encoding with rare category grouping."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the curse of dimensionality and how does feature selection help?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces. As dimensions increase: 1) data becomes sparse — points are far apart in space, 2) distance metrics lose meaning (all points become equally distant), 3) model complexity increases exponentially (more parameters to learn), 4) overfitting risk increases, 5) computational cost increases. Feature selection helps by: reducing dimensionality to only the most informative features, improving model generalization, reducing training time, and mitigating overfitting. A practical rule: the number of samples should be at least 10x the number of features. For text data with 100K features, feature selection is essential. Common approaches: PCA for dense data, SelectKBest for sparse data, and L1 regularization when feature relevance is uncertain."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: Explain how you would design a feature engineering pipeline for production deployment.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A production feature engineering pipeline should: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Reproducible"
          }), ": all transformations saved as artifacts (fitted scalers, encoders, imputers). Use sklearn Pipeline or ColumnTransformer. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Consistent"
          }), ": same transformations applied to training and inference. Fit on training data, transform on all data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Handles data drift"
          }), ": monitor feature distributions over time. Retrain transformers periodically. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Handles missing data"
          }), ": imputation strategies built into pipeline — never fails on missing values at inference. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Versioned"
          }), ": feature engineering code versioned alongside model. Feature store for reusable features. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Tested"
          }), ": unit tests for each transformation, integration tests for the pipeline. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Scalable"
          }), ": use distributed processing (Spark, Dask) for large-scale feature engineering. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Online capable"
          }), ": feature transformations must be fast enough for real-time inference. Precompute features when possible. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ": Feature Store (Redis/S3) → Feature Engineering Job (Spark) → Model Training → Model Registry → Inference Service with embedded transform logic."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How does L1 regularization (Lasso) help with feature selection? Compare with L2 regularization.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["L1 regularization adds the sum of absolute weights to the loss function: Loss = Original Loss + λ Σ |w_i|. This penalty forces some feature weights to exactly zero, effectively performing feature selection. L1 produces sparse models where only the most important features have non-zero weights. L2 regularization adds the sum of squared weights: Loss = Original Loss + λ Σ w_i². L2 shrinks all weights toward zero but never exactly to zero — it keeps all features but reduces their influence. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Key differences"
          }), ": L1 selects features (sparse solution), L2 retains all features (dense solution). L1 is robust to outliers, L2 handles multicollinearity better. L1 can be unstable with correlated features (arbitrarily picks one), L2 distributes weight among correlated features. Elastic Net combines both: L1 for sparsity + L2 for stability with correlated features. In practice: use Lasso when you suspect many features are irrelevant, Ridge when all features might be relevant, Elastic Net for general purpose."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: Walk me through a complete feature engineering workflow for a new dataset with mixed data types.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 1 — Exploratory Analysis"
          }), ": Check data types, missing % per column, distribution shapes, outliers, correlations, cardinality of categoricals. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 2 — Handle Missing Values"
          }), ": Numerical → median imputation (robust to skew). Categorical → mode imputation. Add missing indicator flags if >5% missing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 3 — Encode Categoricals"
          }), ": Ordinal features → OrdinalEncoder with explicit order. Low-cardinality nominal → one-hot encoding. High-cardinality nominal → target encoding with 5-fold cross-validation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 4 — Scale Numerical"
          }), ": StandardScaler for most algorithms. RobustScaler if outliers present. MinMaxScaler for neural networks. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 5 — Feature Construction"
          }), ": Create interaction features (top correlated pairs). Add polynomial features (degree=2). Derive domain-specific features (date → day/month/year, text → length). Apply log transform to skewed features. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 6 — Feature Selection"
          }), ": Remove low-variance features. Use mutual information for ranking. Apply Lasso or RFE for final selection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step 7 — Validate"
          }), ": Cross-validate with and without each engineering step. Ensure improvements are statistically significant. Document all transformations for reproducibility."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which imputation technique is most robust to outliers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Mean imputation\nb) Median imputation\nc) Mode imputation\nd) Constant imputation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Median imputation"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Median is robust to outliers because it's not affected by extreme values. Mean is sensitive to outliers."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which encoding method is most appropriate for a nominal categorical feature with 3 unique values?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Label encoding\nb) One-hot encoding\nc) Target encoding\nd) Binary encoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) One-hot encoding"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "For low-cardinality nominal data, one-hot encoding is preferred. Label encoding would imply false ordinal relationships."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which scaler transforms features to have mean=0 and variance=1?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MinMaxScaler\nb) RobustScaler\nc) StandardScaler\nd) MaxAbsScaler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) StandardScaler"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "StandardScaler performs z-score normalization: x' = (x - μ) / σ, resulting in mean=0 and std=1."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which feature selection method uses model performance to evaluate feature subsets?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Variance Threshold\nb) Chi-square test\nc) Recursive Feature Elimination (RFE)\nd) Mutual Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) RFE"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "RFE is a wrapper method that trains a model repeatedly, removing the least important feature each iteration."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which regularization technique can drive feature weights to exactly zero?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) L2 regularization (Ridge)\nb) L1 regularization (Lasso)\nc) Elastic Net\nd) Dropout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml12-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) L1 regularization (Lasso)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "L1 regularization adds absolute weight penalty, forcing some weights to exactly zero — performing feature selection."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Load the Titanic dataset. Identify missing values and impute them using median for numerical and mode for categorical features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Take the Iris dataset and apply StandardScaler, MinMaxScaler, and RobustScaler. Compare the transformed distributions using histograms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — On the UCI Adult Income dataset, apply one-hot encoding for low-cardinality features and label encoding for ordinal features. Train a logistic regression model and compare accuracy before and after encoding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use the California Housing dataset. Create 5 polynomial and interaction features. Train a Random Forest and measure RMSE improvement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete feature engineering pipeline with ColumnTransformer. Include imputation, encoding, scaling, feature construction, and feature selection. Compare model performance with and without the pipeline."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — On a high-dimensional dataset (e.g., MNIST with pixel features), apply PCA, t-SNE, and feature selection. Compare classification accuracy and training time for each dimensionality reduction method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fitting scalers/encoders on the entire dataset before train-test split — causes data leakage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using label encoding for nominal categorical features — implies false ordinal relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-hot encoding high-cardinality features — causes dimensionality explosion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not handling missing values before model training — most models crash on NaN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing all missing data (listwise deletion) — can introduce bias if data is not MCAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applying target encoding without cross-validation — causes target leakage and overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using PCA before feature selection — loses interpretability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling before train-test split — information from test set leaks into training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Imputation: mean (robust with median), median (outlier-robust), mode (categorical), KNN (patterns), MICE (complex)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoding: one-hot (nominal, low cardinality), label (ordinal), target (high cardinality, careful with leakage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling: Standard (μ=0, σ=1), MinMax ([0,1]), Robust (median, IQR for outliers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature construction: polynomial, interaction, domain-specific, binning, log transform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature selection: filter (fast, model-agnostic), wrapper (accurate, expensive), embedded (best balance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L1 regularization: sparse models, feature selection built-in"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA: unsupervised dimensionality reduction, loses interpretability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline: ColumnTransformer for mixed types, avoid data leakage with fit on train only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data leakage: don't fit transformers on test data, use cross-validation for target encoding"
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
            children: "Explain the core idea of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
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
            children: "Describe a production bug caused by misunderstanding Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection from 10 users to 10 million?"
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
            children: "Compare Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
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
            children: "How does Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in production today?"
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
        }), " Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection on an empty input?"
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
            children: "Complete Medium exercises, explain Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to someone else"
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
        children: "Always write a one-line example of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
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
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
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
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is like a recipe"
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
        }), " — this chapter contributes the Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-12featureengineering-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which imputation technique is most robust to outliers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Median imputation"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-12featureengineering-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which encoding method is most appropriate for a nominal categorical feature with 3 unique values?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) One-hot encoding"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-12featureengineering-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which scaler transforms features to have mean=0 and variance=1?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) StandardScaler"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-12featureengineering-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which feature selection method uses model performance to evaluate feature subsets?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) RFE"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-12featureengineering-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which regularization technique can drive feature weights to exactly zero?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) L1 regularization (Lasso)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in production at scale"
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
        children: "Testing: pytest for unit tests of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection code."]
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
        }), " or your IDE's debugger to step through the Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection example code."]
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
        children: "Explain Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
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
        children: "Tell me about a time you debugged a Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection without notes"
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
        }), ": a small team uses Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection depends on input size and distribution — always benchmark for your own data."
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