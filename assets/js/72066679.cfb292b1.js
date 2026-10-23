"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4070],{

/***/ 10488
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_08_dimensionality_reduction_md_720_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-08-dimensionality-reduction-md-720.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_08_dimensionality_reduction_md_720_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/08-dimensionality-reduction","title":"Dimensionality Reduction — PCA, t-SNE, UMAP, LDA","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":119,"frontMatter":{"id":"08-dimensionality-reduction","slug":"/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction","title":"Dimensionality Reduction — PCA, t-SNE, UMAP, LDA","sidebar_label":"Dimensionality Reduction — PCA, t-SNE, UMAP, LDA","sidebar_position":119},"sidebar":"placementSidebar","previous":{"title":"Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/07-unsupervised-learning"},"next":{"title":"Model Evaluation — Cross-Validation, ROC-AUC, Confusion Matrix, Metrics","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/09-model-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction.md


const frontMatter = {
	id: '08-dimensionality-reduction',
	slug: '/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction',
	title: 'Dimensionality Reduction — PCA, t-SNE, UMAP, LDA',
	sidebar_label: 'Dimensionality Reduction — PCA, t-SNE, UMAP, LDA',
	sidebar_position: 119
};
const contentTitle = 'Dimensionality Reduction — PCA, t-SNE, UMAP, LDA';

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
  "value": "8.1 Curse of Dimensionality",
  "id": "81-curse-of-dimensionality",
  "level": 2
}, {
  "value": "8.2 PCA (Principal Component Analysis)",
  "id": "82-pca-principal-component-analysis",
  "level": 2
}, {
  "value": "8.3 t-SNE",
  "id": "83-t-sne",
  "level": 2
}, {
  "value": "8.4 LDA (Linear Discriminant Analysis)",
  "id": "84-lda-linear-discriminant-analysis",
  "level": 2
}, {
  "value": "8.5 UMAP",
  "id": "85-umap",
  "level": 2
}, {
  "value": "8.6 Feature Selection vs Extraction",
  "id": "86-feature-selection-vs-extraction",
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
        id: "dimensionality-reduction--pca-t-sne-umap-lda",
        children: "Dimensionality Reduction — PCA, t-SNE, UMAP, LDA"
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
            children: "Understand the curse of dimensionality and when reduction is needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement PCA: eigenvalue decomposition, explained variance, projection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply t-SNE for non-linear visualization of high-dimensional data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement LDA for supervised dimensionality reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand UMAP: manifold learning, topological foundations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate dimensionality reduction: reconstruction error, trustworthiness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning is the core of AI engineering. From linear regression to ensemble methods, understanding these algorithms lets you build, debug, and improve models. This module covers the math and code behind ML."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding dimensionality reduction is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how dimensionality reduction works in practice."
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curse of Dimensionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparsity, distance concentration, overfitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance matrix, eigenvectors, explained variance ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stochastic neighbor embedding, perplexity, KL divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between-class vs within-class scatter, discriminant vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform manifold approximation, fuzzy simplicial sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Selection vs Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter, wrapper, embedded, PCA vs LDA vs autoencoders"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[High-Dim Data] --> B{Dimensionality Reduction}\r\n    B --> C[Linear: PCA, LDA]\r\n    B --> D[Non-Linear: t-SNE, UMAP]\r\n    C --> E[Eigenvalue Decomposition]\r\n    D --> F[Manifold Learning]\r\n    E --> G[Projected Features]\r\n    F --> H[Low-Dim Embedding]\r\n    G --> I[Visualization / Modeling]\r\n    H --> I\r\n    style C fill:#4a90d9,color:#fff\r\n    style D fill:#e85d75,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-curse-of-dimensionality",
      children: "8.1 Curse of Dimensionality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As dimensions increase, data becomes sparse and distances become less meaningful. The volume of space grows exponentially, requiring exponentially more data to maintain density."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import List, Tuple, Dict, Optional\r\nfrom scipy import linalg\r\nfrom sklearn.datasets import make_classification, load_digits, fetch_openml\r\nfrom sklearn.decomposition import PCA as SklearnPCA\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.neighbors import KNeighborsClassifier\r\nfrom sklearn.metrics import accuracy_score\r\n\r\nclass CurseOfDimensionality:\r\n    @staticmethod\r\n    def volume_ratio(d: int, r: float = 0.5) -> float:\r\n        \"\"\"Fraction of volume in a shell at the surface of a d-dimensional sphere\"\"\"\r\n        return 1 - r ** d\r\n\r\n    @staticmethod\r\n    def avg_distance_ratio(n: int, d: int) -> float:\r\n        \"\"\"Ratio of farthest to nearest point (concentration of distance)\"\"\"\r\n        X = np.random.randn(n, d)\r\n        dists = np.sqrt(np.sum((X[:, None] - X[None, :]) ** 2, axis=-1))\r\n        np.fill_diagonal(dists, np.nan)\r\n        return np.nanmax(dists) / np.nanmin(dists)\r\n\r\n    def demonstrate_curse(self, max_dim: int = 50):\r\n        for d in [1, 2, 5, 10, 20, 50]:\r\n            vr = self.volume_ratio(d)\r\n            dist_ratio = self.avg_distance_ratio(100, d)\r\n            print(f\"d={d:3d}: volume_ratio={vr:.4f}, farthest/nearest={dist_ratio:.3f}\")\r\n\r\ncod = CurseOfDimensionality()\r\ncod.demonstrate_curse()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical implications"
      }), ": KNN degrades in high dimensions (distance becomes meaningless). Regularization becomes essential. Dimensionality reduction is often needed before modeling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-pca-principal-component-analysis",
      children: "8.2 PCA (Principal Component Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PCA finds orthogonal directions of maximum variance by decomposing the covariance matrix."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PCA:\r\n    def __init__(self, n_components: int = 2):\r\n        self.n_components = n_components\r\n        self.components_: np.ndarray = None\r\n        self.mean_: np.ndarray = None\r\n        self.explained_variance_ratio_: np.ndarray = None\r\n        self.singular_values_: np.ndarray = None\r\n\r\n    def fit(self, X: np.ndarray) -> 'PCA':\r\n        self.mean_ = np.mean(X, axis=0)\r\n        X_centered = X - self.mean_\r\n\r\n        # SVD approach (more numerically stable than eigendecomposition)\r\n        U, S, Vt = np.linalg.svd(X_centered, full_matrices=False)\r\n\r\n        self.components_ = Vt[:self.n_components]\r\n        self.singular_values_ = S[:self.n_components]\r\n\r\n        # Explained variance ratio\r\n        total_variance = np.sum(S ** 2)\r\n        self.explained_variance_ratio_ = (S[:self.n_components] ** 2) / total_variance\r\n\r\n        return self\r\n\r\n    def transform(self, X: np.ndarray) -> np.ndarray:\r\n        X_centered = X - self.mean_\r\n        return X_centered @ self.components_.T\r\n\r\n    def fit_transform(self, X: np.ndarray) -> np.ndarray:\r\n        self.fit(X)\r\n        return self.transform(X)\r\n\r\n    def inverse_transform(self, X_pca: np.ndarray) -> np.ndarray:\r\n        return X_pca @ self.components_ + self.mean_\r\n\r\n    def cumulative_variance(self, threshold: float = 0.95) -> int:\r\n        cumsum = np.cumsum(self.explained_variance_ratio_)\r\n        return int(np.searchsorted(cumsum, threshold) + 1)\r\n\r\n## Generate correlated data\r\nnp.random.seed(42)\r\nn = 200\r\nX_high = np.random.randn(n, 10)\r\n\r\n## Create correlations\r\ntransform = np.random.randn(10, 10)\r\nX_high = X_high @ transform\r\n\r\npca = PCA(n_components=4)\r\npca.fit(X_high)\r\nprint(f\"Components shape: {pca.components_.shape}\")\r\nprint(f\"Explained variance ratio: {pca.explained_variance_ratio_}\")\r\nprint(f\"Cumulative: {np.cumsum(pca.explained_variance_ratio_)}\")\r\nprint(f\"Components needed for 95%: {pca.cumulative_variance()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing n_components"
      }), ": Plot cumulative explained variance vs components. Choose the elbow or the number that reaches a threshold (e.g., 95%)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCA for visualization"
      }), ": 2D or 3D projection of high-dimensional data. Useful for exploring cluster structure, outliers, and data quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-t-sne",
      children: "8.3 t-SNE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "t-SNE (t-distributed Stochastic Neighbor Embedding) preserves local structure by minimizing KL divergence between high-dimensional and low-dimensional pairwise similarities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TSNESimple:\r\n    def __init__(self, n_components: int = 2, perplexity: float = 30.0,\r\n                 n_iter: int = 1000, learning_rate: float = 200.0):\r\n        self.n_components = n_components\r\n        self.perplexity = perplexity\r\n        self.n_iter = n_iter\r\n        self.learning_rate = learning_rate\r\n        self.embedding_: np.ndarray = None\r\n\r\n    def fit_transform(self, X: np.ndarray) -> np.ndarray:\r\n        n = X.shape[0]\r\n\r\n        # Compute pairwise distances\r\n        distances = np.sqrt(np.sum(X ** 2, axis=1)[:, None] + np.sum(X ** 2, axis=1)[None, :] - 2 * X @ X.T)\r\n        np.fill_diagonal(distances, 0)\r\n\r\n        # Compute high-dimensional affinities (Gaussian kernel)\r\n        P = self._compute_affinities(distances)\r\n        P = (P + P.T) / (2 * n)  # Symmetrize and normalize\r\n\r\n        # Initialize low-dimensional embedding\r\n        np.random.seed(42)\r\n        Y = np.random.randn(n, self.n_components) * 0.01\r\n\r\n        # Gradient descent\r\n        for iteration in range(self.n_iter):\r\n            # Compute low-dimensional affinities (t-distribution)\r\n            dist_Y = np.sqrt(np.sum(Y ** 2, axis=1)[:, None] + np.sum(Y ** 2, axis=1)[None, :] - 2 * Y @ Y.T)\r\n            Q = 1.0 / (1.0 + dist_Y ** 2)\r\n            np.fill_diagonal(Q, 0)\r\n            Q = Q / np.sum(Q)\r\n\r\n            # Gradient\r\n            PQ_diff = P - Q\r\n            grad = np.zeros_like(Y)\r\n            for i in range(n):\r\n                grad[i] = 4 * np.sum(\r\n                    PQ_diff[i:i+1, :].T * (Y[i] - Y) * (1.0 / (1.0 + dist_Y[i:i+1, :].T ** 2)),\r\n                    axis=0\r\n                )\r\n\r\n            # Update\r\n            Y -= self.learning_rate * grad\r\n\r\n            # Early exaggeration (first 250 iterations)\r\n            if iteration < 250:\r\n                Y -= self.learning_rate * 4 * grad\r\n\r\n            # Center\r\n            Y -= np.mean(Y, axis=0)\r\n\r\n        self.embedding_ = Y\r\n        return Y\r\n\r\n    def _compute_affinities(self, distances: np.ndarray) -> np.ndarray:\r\n        n = distances.shape[0]\r\n        P = np.zeros((n, n))\r\n        target_entropy = np.log(self.perplexity)\r\n\r\n        for i in range(n):\r\n            # Binary search for sigma\r\n            beta_min, beta_max = -np.inf, np.inf\r\n            beta = 1.0\r\n\r\n            for _ in range(50):\r\n                dist_i = distances[i, np.arange(n) != i]\r\n                p = np.exp(-dist_i * beta)\r\n                p_sum = np.sum(p)\r\n                if p_sum == 0:\r\n                    break\r\n                p = p / p_sum\r\n\r\n                entropy = -np.sum(p * np.log(p + 1e-15))\r\n                entropy_diff = entropy - target_entropy\r\n\r\n                if abs(entropy_diff) < 1e-5:\r\n                    break\r\n\r\n                if entropy_diff > 0:\r\n                    beta_min = beta\r\n                    beta = beta * 2 if beta_max == np.inf else (beta + beta_max) / 2\r\n                else:\r\n                    beta_max = beta\r\n                    beta = beta / 2 if beta_min == -np.inf else (beta + beta_min) / 2\r\n\r\n            P[i, np.arange(n) != i] = p\r\n\r\n        return P\r\n\r\n## Test t-SNE on digits\r\nfrom sklearn.datasets import load_digits\r\ndigits = load_digits()\r\nX_digits = digits.data[:300]\r\ny_digits = digits.target[:300]\r\n\r\n## Use sklearn's implementation (faster)\r\nfrom sklearn.manifold import TSNE\r\ntsne = TSNE(n_components=2, perplexity=30, random_state=42)\r\nX_tsne = tsne.fit_transform(X_digits)\r\nprint(f\"t-SNE embedding shape: {X_tsne.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Perplexity"
      }), ": Controls balance between local and global structure. Typical range: 5-50. Lower = focuses on local structure. Higher = considers more global structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "t-SNE vs PCA"
      }), ": t-SNE captures non-linear manifolds and reveals clusters that PCA misses. However, t-SNE is stochastic (different runs give different results), distances are not meaningful, and it's computationally expensive (O(n²))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-lda-linear-discriminant-analysis",
      children: "8.4 LDA (Linear Discriminant Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LDA finds projections that maximize class separability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LDA:\r\n    def __init__(self, n_components: int = 2):\r\n        self.n_components = n_components\r\n        self.scalings_: np.ndarray = None\r\n        self.explained_variance_ratio_: np.ndarray = None\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> 'LDA':\r\n        n, d = X.shape\r\n        classes = np.unique(y)\r\n        n_classes = len(classes)\r\n\r\n        # Compute overall mean\r\n        mean_total = np.mean(X, axis=0)\r\n\r\n        # Compute within-class and between-class scatter\r\n        Sw = np.zeros((d, d))\r\n        Sb = np.zeros((d, d))\r\n\r\n        for c in classes:\r\n            Xc = X[y == c]\r\n            mean_c = np.mean(Xc, axis=0)\r\n            n_c = Xc.shape[0]\r\n\r\n            # Within-class scatter\r\n            Xc_centered = Xc - mean_c\r\n            Sw += Xc_centered.T @ Xc_centered\r\n\r\n            # Between-class scatter\r\n            mean_diff = (mean_c - mean_total).reshape(-1, 1)\r\n            Sb += n_c * (mean_diff @ mean_diff.T)\r\n\r\n        # Solve generalized eigenvalue problem\r\n        eigvals, eigvecs = linalg.eigh(Sb, Sw)\r\n        idx = np.argsort(eigvals)[::-1]  # Descending order\r\n        eigvals = eigvals[idx]\r\n        eigvecs = eigvecs[:, idx]\r\n\r\n        self.scalings_ = eigvecs[:, :self.n_components]\r\n        total_variance = np.sum(eigvals)\r\n        self.explained_variance_ratio_ = eigvals[:self.n_components] / total_variance\r\n\r\n        return self\r\n\r\n    def transform(self, X: np.ndarray) -> np.ndarray:\r\n        return X @ self.scalings_\r\n\r\n    def fit_transform(self, X: np.ndarray, y: np.ndarray) -> np.ndarray:\r\n        self.fit(X, y)\r\n        return self.transform(X)\r\n\r\n## Create 3-class data\r\nnp.random.seed(42)\r\nX_lda = np.vstack([\r\n    np.random.multivariate_normal([0, 0, 0], np.eye(3), 50),\r\n    np.random.multivariate_normal([3, 3, 3], np.eye(3), 50),\r\n    np.random.multivariate_normal([-2, 5, -2], np.eye(3), 50),\r\n])\r\ny_lda = np.repeat([0, 1, 2], 50)\r\n\r\nlda = LDA(n_components=2)\r\nX_lda_proj = lda.fit_transform(X_lda, y_lda)\r\nprint(f\"LDA projection shape: {X_lda_proj.shape}\")\r\nprint(f\"LDA explained variance ratio: {lda.explained_variance_ratio_}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LDA vs PCA"
      }), ": LDA is supervised (uses class labels) and maximizes class separation. PCA is unsupervised and maximizes variance. LDA has at most C-1 components (C = number of classes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-umap",
      children: "8.5 UMAP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UMAP (Uniform Manifold Approximation and Projection) constructs a fuzzy topological representation and optimizes a low-dimensional embedding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class UMAPAwareness:\r\n    \"\"\"Conceptual overview of UMAP — use umap-learn library for actual implementation\"\"\"\r\n\r\n    @staticmethod\r\n    def explain_umap():\r\n        principles = {\r\n            \"Manifold assumption\": \"Data lies on a low-dimensional manifold\",\r\n            \"Fuzzy topology\": \"Constructs a fuzzy simplicial set representation\",\r\n            \"Cross-entropy\": \"Minimizes cross-entropy between high and low-dim representations\",\r\n            \"Speed\": \"Uses approximate k-NN (via NND) for O(n log n) complexity\",\r\n            \"Preservation\": \"Preserves both local and global structure better than t-SNE\",\r\n        }\r\n        for key, value in principles.items():\r\n            print(f\"  {key}: {value}\")\r\n\r\n    @staticmethod\r\n    def umap_vs_tsne():\r\n        comparisons = [\r\n            (\"Speed\", \"Fast (O(n log n))\", \"Slow (O(n^2))\"),\r\n            (\"Global structure\", \"Preserved better\", \"Less preserved\"),\r\n            (\"Initialization\", \"Spectral embedding\", \"Random\"),\r\n            (\"Reproducibility\", \"More consistent\", \"Varies between runs\"),\r\n            (\"Distance preservation\", \"Better\", \"Distorted\"),\r\n        ]\r\n        print(f\"{'Aspect':20s} {'UMAP':20s} {'t-SNE':20s}\")\r\n        print(\"-\" * 60)\r\n        for aspect, umap, tsne in comparisons:\r\n            print(f\"{aspect:20s} {umap:20s} {tsne:20s}\")\r\n\r\nUMAPAwareness.explain_umap()\r\nUMAPAwareness.umap_vs_tsne()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-feature-selection-vs-extraction",
      children: "8.6 Feature Selection vs Extraction"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supervised?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove constant features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature scores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank feature relevance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SelectKBest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top K features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RFE (Recursive Feature Elimination)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-specific selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lasso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE/UMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FeatureSelector:\r\n    def variance_threshold(self, X: np.ndarray, threshold: float = 0.0) -> np.ndarray:\r\n        variances = np.var(X, axis=0)\r\n        return np.where(variances > threshold)[0]\r\n\r\n    def mutual_info_selection(self, X: np.ndarray, y: np.ndarray,\r\n                               k: int = 5) -> Tuple[np.ndarray, np.ndarray]:\r\n        from sklearn.feature_selection import mutual_info_classif\r\n        mi = mutual_info_classif(X, y)\r\n        top_k = np.argsort(mi)[-k:][::-1]\r\n        return top_k, mi[top_k]\r\n\r\n    def recursive_feature_elimination(self, X: np.ndarray, y: np.ndarray,\r\n                                       n_features: int = 5) -> np.ndarray:\r\n        from sklearn.feature_selection import RFE\r\n        from sklearn.linear_model import LogisticRegression\r\n        rfe = RFE(estimator=LogisticRegression(max_iter=1000), n_features_to_select=n_features)\r\n        rfe.fit(X, y)\r\n        return np.where(rfe.support_)[0]\r\n\r\nselector = FeatureSelector()\r\nX_sel, y_sel = make_classification(n_samples=200, n_features=20, n_informative=5, random_state=42)\r\nvt_features = selector.variance_threshold(X_sel)\r\nmi_features, mi_scores = selector.mutual_info_selection(X_sel, y_sel, k=5)\r\nprint(f\"Variance threshold features: {len(vt_features)}/{X_sel.shape[1]}\")\r\nprint(f\"Mutual info top-5 features: {mi_features}\")\r\nprint(f\"Mutual info scores: {mi_scores}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function pca(X: number[][], nComponents: number): {\r\n  components: number[][];\r\n  explainedVariance: number[];\r\n  transform: (X: number[][]) => number[][];\r\n} {\r\n  const n = X.length;\r\n  const d = X[0].length;\r\n  const mean = Array(d).fill(0).map((_, j) => X.reduce((s, r) => s + r[j], 0) / n);\r\n  const centered = X.map((row) => row.map((v, j) => v - mean[j]));\r\n\r\n  // Covariance matrix\r\n  const cov = Array.from({ length: d }, (_, i) =>\r\n    Array.from({ length: d }, (_, j) =>\r\n      centered.reduce((s, row) => s + row[i] * row[j], 0) / (n - 1)\r\n    )\r\n  );\r\n\r\n  // Power iteration for top eigenvalues (simplified)\r\n  const components: number[][] = [];\r\n  const explainedVariance: number[] = [];\r\n\r\n  for (let k = 0; k < nComponents; k++) {\r\n    let v = Array(d).fill(1).map(() => Math.random() - 0.5);\r\n    for (let iter = 0; iter < 100; iter++) {\r\n      const vNew = v.map((_, i) => cov[i].reduce((s, c, j) => s + c * v[j], 0));\r\n      const norm = Math.sqrt(vNew.reduce((s, x) => s + x * x, 0));\r\n      v = vNew.map((x) => x / norm);\r\n    }\r\n    components.push(v);\r\n    const projected = centered.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));\r\n    explainedVariance.push(projected.reduce((s, x) => s + x * x, 0) / (n - 1));\r\n\r\n    // Deflate\r\n    for (let i = 0; i < n; i++) {\r\n      const proj = centered[i].reduce((s, x, j) => s + x * v[j], 0);\r\n      for (let j = 0; j < d; j++) {\r\n        centered[i][j] -= proj * v[j];\r\n      }\r\n    }\r\n  }\r\n\r\n  return {\r\n    components,\r\n    explainedVariance,\r\n    transform: (X: number[][]) => {\r\n      const c = X.map((row) => row.map((v, j) => v - mean[j]));\r\n      return c.map((row) => components.map((comp) =>\r\n        row.reduce((s, x, j) => s + x * comp[j], 0)\r\n      ));\r\n    },\r\n  };\r\n}\r\n\r\nconst pcaResult = pca(X_high.tolist(), 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Curse of dimensionality: data becomes sparse and distances concentrate as dimensions increase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA finds directions of maximum variance via SVD/eigendecomposition; unsupervised, linear, fast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t-SNE preserves local neighborhood structure using heavy-tailed t-distribution in low dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LDA maximizes between-class vs within-class scatter; supervised, linear, at most C-1 components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UMAP is faster than t-SNE with better global structure preservation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use PCA for preprocessing, t-SNE/UMAP for visualization, LDA for classification preprocessing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explained variance ratio helps choose the number of PCA components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perplexity in t-SNE controls the balance between local and global structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always standardize data before PCA (features on different scales distort results)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autoencoders provide non-linear dimensionality reduction but require more data and tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessing before modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA (retain 95% variance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE (stochastic, no inverse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visualization (2D/3D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE or UMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA (misses non-linear structure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification preprocessing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA (ignores class labels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-dim sparse data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature selection (mutual info)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA (dense components hard to interpret)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Largest possible dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA (O(n) with randomized SVD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE (O(n^2))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: How does PCA work and what are its limitations?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PCA computes the eigenvalues and eigenvectors of the covariance matrix. Eigenvectors with largest eigenvalues are the principal components — directions of maximum variance. Limitations: linear (cannot capture non-linear manifolds), sensitive to feature scaling, assumes orthogonality of components, components are dense linear combinations (hard to interpret), and PCA maximizes variance which may not align with class separation."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: What is the difference between PCA and t-SNE?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PCA is a linear, deterministic method that maximizes variance. t-SNE is a non-linear, stochastic method that preserves local neighborhood structure. PCA gives interpretable components (loadings) and has an inverse transform. t-SNE is for visualization only — distances and density are not meaningful. PCA is fast (O(n·d²)), t-SNE is slow (O(n²)). PCA captures global structure, t-SNE captures local clusters."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: How do you choose the number of components in PCA?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Three common approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Explained variance threshold"
          }), ": Choose components until cumulative explained variance exceeds 90-95%. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Kaiser rule"
          }), ": Keep components with eigenvalue > 1 (for standardized data). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Scree plot"
          }), ": Look for the elbow in the eigenvalue plot. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Cross-validation"
          }), ": Choose components that minimize reconstruction error on held-out data. For visualization, always use 2 or 3 components."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is the curse of dimensionality?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The curse of dimensionality refers to various phenomena that emerge in high-dimensional spaces: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Sparsity"
          }), ": Data becomes sparse as volume grows exponentially. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Distance concentration"
          }), ": All points become equally distant (nearest/ farthest ratio → 1). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Overfitting"
          }), ": Model complexity grows with dimensions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Computational cost"
          }), ": Many algorithms scale poorly with dimensions. Solutions: dimensionality reduction, feature selection, regularization."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: How does LDA differ from PCA for classification?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "LDA is supervised — it finds projections that maximize between-class scatter relative to within-class scatter. PCA is unsupervised — it finds directions of maximum variance ignoring class labels. LDA can have at most C-1 components (C = number of classes). PCA can have up to n-components. LDA often outperforms PCA for classification preprocessing because it explicitly optimizes for class separation."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: What is the role of perplexity in t-SNE?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Perplexity controls the effective number of neighbors used to compute the Gaussian kernel bandwidth for each point. Low perplexity (5-10): focuses on very local structure, can create many small clusters. High perplexity (30-50): considers more global structure, produces more spread-out embeddings. Typical range: 5-50. The perplexity should be smaller than the number of points. Different perplexities can lead to very different visualizations."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What are the advantages of UMAP over t-SNE?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Speed"
          }), ": UMAP is O(n log n) vs t-SNE's O(n²) using approximate k-NN. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Global structure"
          }), ": UMAP preserves more global structure. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Reproducibility"
          }), ": UMAP is more consistent across runs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Scalability"
          }), ": UMAP handles millions of points; t-SNE struggles with >10K. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Embedding size"
          }), ": UMAP can produce embeddings in any dimension (not just 2-3). UMAP is generally preferred for large-scale visualization and exploration."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: When would you use feature selection instead of feature extraction?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "feature selection"
          }), " when: interpretability is critical (you need to know which original features matter), features have semantic meaning, data is sparse, or you have domain knowledge about feature relevance. Choose ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "feature extraction"
          }), " when: features are highly correlated, you need to reduce dimensionality while preserving information, data has redundant measurements, or visualization is the goal."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: Why must data be standardized before PCA?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PCA is sensitive to the scale of features because it maximizes variance. If one feature has variance 100 and another has variance 1, PCA will focus almost entirely on the first feature, regardless of its actual importance. Standardization (z-score) gives all features equal weight. Without standardization, PCA results are dominated by features with large scales. Exceptions: all features are on the same scale (pixels, percentages)."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is the reconstruction error in PCA and how is it used?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Reconstruction error = ||X - X̂||² where X̂ = PCA_projection @ PCA_components + mean. It measures how much information is lost by projecting to lower dimensions. Lower reconstruction error means better preservation of the original data. Use reconstruction error to: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Choose n_components (elbow method). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Detect outliers (high reconstruction error). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Compare dimensionality reduction methods."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the maximum number of components LDA can produce for a 5-class problem?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 5\r\nb) 4\r\nc) 10\r\nd) Unlimited"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 4"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LDA has at most C-1 components where C is the number of classes."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which dimensionality reduction method is deterministic?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) t-SNE\r\nb) PCA\r\nc) UMAP\r\nd) Both a and c"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) PCA"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "PCA gives the same result each run. t-SNE and UMAP are stochastic."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What does perplexity control in t-SNE?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Number of components\r\nb) Effective number of neighbors\r\nc) Learning rate\r\nd) Number of iterations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Effective number of neighbors"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Perplexity adjusts the Gaussian kernel bandwidth to consider a certain number of neighbors."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which method is supervised?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) PCA\r\nb) t-SNE\r\nc) LDA\r\nd) UMAP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) LDA"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LDA uses class labels to maximize between-class separation."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does explained variance ratio measure in PCA?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Model accuracy\r\nb) Proportion of total variance captured by each component\r\nc) Reconstruction error\r\nd) Number of components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Proportion of total variance captured by each component"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Each component's eigenvalue divided by the sum of all eigenvalues."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Apply PCA to the Iris dataset. Plot the 2D projection colored by species. Report the explained variance ratio for the first 2 components."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement feature selection using mutual information. Find the top 5 features from a 20-feature dataset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Compare PCA, t-SNE, and UMAP on the MNIST digits dataset. Visualize the 2D embeddings for each method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement PCA from scratch using SVD. Verify your implementation matches sklearn's PCA on random data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build an LDA classifier from scratch. Implement both the dimensionality reduction and classification steps. Test on a 3-class dataset."]
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
            children: "Explain the core idea of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — PCA, t-SNE, UMAP, LDA."
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
            children: "Describe a production bug caused by misunderstanding this technique — PCA, t-SNE, UMAP, LDA. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — PCA, t-SNE, UMAP, LDA from 10 users to 10 million?"
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
            children: "Compare Dimensionality Reduction — PCA, t-SNE, UMAP, LDA with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — PCA, t-SNE, UMAP, LDA."
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
            children: "How does Dimensionality Reduction — PCA, t-SNE, UMAP, LDA behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — PCA, t-SNE, UMAP, LDA run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — PCA, t-SNE, UMAP, LDA that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Dimensionality Reduction — PCA, t-SNE, UMAP, LDA explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Dimensionality Reduction — PCA, t-SNE, UMAP, LDA\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Dimensionality Reduction — PCA, t-SNE, UMAP, LDA to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Dimensionality Reduction — PCA, t-SNE, UMAP, LDA (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Dimensionality Reduction — PCA, t-SNE, UMAP, LDA-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Dimensionality Reduction — PCA, t-SNE, UMAP, LDA interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in production today?"
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
        }), " Dimensionality Reduction — PCA, t-SNE, UMAP, LDA builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Dimensionality Reduction — PCA, t-SNE, UMAP, LDA chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Dimensionality Reduction — PCA, t-SNE, UMAP, LDA is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Dimensionality Reduction is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Dimensionality Reduction is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Dimensionality Reduction — PCA, t-SNE, UMAP, LDA issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Dimensionality Reduction — PCA, t-SNE, UMAP, LDA that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — PCA, t-SNE, UMAP, LDA is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — PCA, t-SNE, UMAP, LDA on an empty input?"
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
            children: "Complete Medium exercises, explain Dimensionality Reduction — PCA, t-SNE, UMAP, LDA to someone else"
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
        children: "Always write a one-line example of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Dimensionality Reduction — PCA, t-SNE, UMAP, LDA when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Dimensionality Reduction — PCA, t-SNE, UMAP, LDA twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Dimensionality Reduction — PCA, t-SNE, UMAP, LDA snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Dimensionality Reduction — PCA, t-SNE, UMAP, LDA to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Dimensionality Reduction — PCA, t-SNE, UMAP, LDA to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Reduction — PCA, t-SNE, UMAP, LDA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 08 — builds the foundation for 08 Dimensionality Reduction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Dimensionality Reduction with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Dimensionality Reduction fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Dimensionality Reduction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Dimensionality Reduction"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Dimensionality Reduction?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Dimensionality Reduction?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Dimensionality Reduction asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Dimensionality Reduction?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimensionality Reduction — PCA, t-SNE, UMAP, LDA is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Dimensionality Reduction — PCA, t-SNE, UMAP, LDA."
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
        children: "Dimensionality Reduction — PCA, t-SNE, UMAP, LDA emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Dimensionality Reduction — PCA, t-SNE, UMAP, LDA — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Dimensionality Reduction — PCA, t-SNE, UMAP, LDA changes quickly; focus on fundamentals that remain stable."
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
            children: "08 Dimensionality Reduction is like a GPS navigation system"
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
          }), " — this chapter contributes the Dimensionality Reduction — PCA, t-SNE, UMAP, LDA skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-08dimensionalityreduction-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the maximum number of components LDA can produce for a 5-class problem?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) 4"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-08dimensionalityreduction-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which dimensionality reduction method is deterministic?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) PCA"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-08dimensionalityreduction-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does perplexity control in t-SNE?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Effective number of neighbors"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-08dimensionalityreduction-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which method is supervised?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) LDA"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-08dimensionalityreduction-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does explained variance ratio measure in PCA?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Proportion of total variance captured by each component"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Dimensionality Reduction — PCA, t-SNE, UMAP, LDA (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Dimensionality Reduction — PCA, t-SNE, UMAP, LDA-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in production at scale"
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
        children: "cProfile / py-spy for performance profiling Reduction — PCA, t-SNE, UMAP, LDA"
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
        }), ": Add structured logging at each stage of the 08 Dimensionality Reduction pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Dimensionality Reduction — PCA, t-SNE, UMAP, LDA in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA."
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
        children: "Tell me about a time you debugged a Dimensionality Reduction — PCA, t-SNE, UMAP, LDA problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Dimensionality Reduction — PCA, t-SNE, UMAP, LDA is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_dimensionality_reduction(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Dimensionality Reduction.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Dimensionality Reduction here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Dimensionality Reduction — PCA, t-SNE, UMAP, LDA without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/09-model-evaluation",
        children: "Model Evaluation — Cross-Validation, ROC-AUC, Confusion Matrix, Metrics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimensionality Reduction — PCA, t-SNE, UMAP, LDA, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Dimensionality Reduction — PCA, t-SNE, UMAP, LDA depends on input size and distribution — always benchmark for your own data."
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