"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76742],{

/***/ 77317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_07_unsupervised_learning_md_848_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-07-unsupervised-learning-md-848.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_07_unsupervised_learning_md_848_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/07-unsupervised-learning","title":"Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/07-unsupervised-learning.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/07-unsupervised-learning","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/07-unsupervised-learning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":110,"frontMatter":{"id":"07-unsupervised-learning","slug":"/ai-engineering-placement/08-machine-learning/07-unsupervised-learning","title":"Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures","sidebar_label":"Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures","sidebar_position":110},"sidebar":"placementSidebar","previous":{"title":"Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/06-ensemble-methods"},"next":{"title":"Dimensionality Reduction — PCA, t-SNE, UMAP, LDA","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/07-unsupervised-learning.md


const frontMatter = {
	id: '07-unsupervised-learning',
	slug: '/ai-engineering-placement/08-machine-learning/07-unsupervised-learning',
	title: 'Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures',
	sidebar_label: 'Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures',
	sidebar_position: 110
};
const contentTitle = 'Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures';

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
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
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
  "value": "7.1 K-Means Clustering",
  "id": "71-k-means-clustering",
  "level": 2
}, {
  "value": "7.2 K-Means++ and Variants",
  "id": "72-k-means-and-variants",
  "level": 2
}, {
  "value": "7.3 DBSCAN",
  "id": "73-dbscan",
  "level": 2
}, {
  "value": "7.4 Hierarchical Clustering",
  "id": "74-hierarchical-clustering",
  "level": 2
}, {
  "value": "7.5 Gaussian Mixture Models",
  "id": "75-gaussian-mixture-models",
  "level": 2
}, {
  "value": "7.6 Clustering Evaluation",
  "id": "76-clustering-evaluation",
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
    number: "number",
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
        id: "unsupervised-learning--k-means-dbscan-hierarchical-gaussian-mixtures",
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
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
            children: "Understand clustering: K-means, DBSCAN, hierarchical, GMM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement K-means: initialization, assignment, update, inertia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply DBSCAN: density-based, eps, minPts, noise handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perform hierarchical clustering: linkage criteria, dendrograms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Gaussian Mixture Models: EM algorithm, responsibilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate clustering: silhouette score, Davies-Bouldin index, inertia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning is the core of AI engineering. From linear regression to ensemble methods, understanding these algorithms lets you build, debug, and improve models. This module covers the math and code behind ML."
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
      children: "Understanding unsupervised learning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how unsupervised learning works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Input Data] --> B[Processing]\n    B --> C[Output]\n    C --> D[Feedback Loop]\n    D --> B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of unsupervised learning like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delivery system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " = Package to deliver"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Processing"
        }), " = Route planning and optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output"
        }), " = Package delivered to destination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback"
        }), " = Delivery confirmation and tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This analogy helps because unsupervised learning, like a delivery system, involves transforming inputs into outputs efficiently while handling constraints and edge cases."
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-Means Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centroid-based, inertia, initialization, K selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-Means++ and Variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart initialization, Mini-Batch K-Means"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Density-based, eps neighborhood, core/border/noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agglomerative, divisive, linkage, dendrograms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian Mixture Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft clustering, EM algorithm, covariance types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal vs external metrics, silhouette, stability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Unlabeled Data] --> B{Clustering Type}\nB --> C[Centroid-Based: K-Means]\nB --> D[Density-Based: DBSCAN]\nB --> E[Hierarchical: Agglomerative]\nB --> F[Distribution-Based: GMM]\nC --> G[K Clusters]\nD --> H[Clusters + Noise]\nE --> I[Dendrogram]\nF --> J[Soft Probabilities]\nstyle C fill:#4a90d9,color:#fff\nstyle D fill:#e85d75,color:#fff\nstyle E fill:#50b86c,color:#fff\nstyle F fill:#f5a623,color:#fff\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-k-means-clustering",
      children: "7.1 K-Means Clustering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "K-means partitions data into K clusters, each represented by its centroid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python\nimport numpy as np\nfrom typing import List, Tuple, Dict, Optional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class KMeans:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n_clusters: int = 8, max_iter: int = 300,\ntol: float = 1e-4, random_state: int = 42):\nself.n_clusters = n_clusters\nself.max_iter = max_iter\nself.tol = tol\nself.random_state = random_state\nself.centroids: np.ndarray = None\nself.labels_: np.ndarray = None\nself.inertia_: float = None\nself.n_iter_: int = 0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def fit(self, X: np.ndarray) -> 'KMeans':\n    np.random.seed(self.random_state)\n    n_samples = X.shape[0]\n    indices = np.random.choice(n_samples, self.n_clusters, replace=False)\n    self.centroids = X[indices].copy()\n\n    for iteration in range(self.max_iter):\n        distances = self._compute_distances(X)\n        self.labels_ = np.argmin(distances, axis=1)\n\n        new_centroids = np.zeros_like(self.centroids)\n        for k in range(self.n_clusters):\n            mask = self.labels_ == k\n            if np.sum(mask) > 0:\n                new_centroids[k] = np.mean(X[mask], axis=0)\n            else:\n                new_centroids[k] = self.centroids[k]\n\n        shift = np.sum((new_centroids - self.centroids) ** 2)\n        self.centroids = new_centroids\n        self.n_iter_ = iteration + 1\n        if shift < self.tol:\n            break\n\n    distances = self._compute_distances(X)\n    min_distances = np.min(distances, axis=1)\n    self.inertia_ = np.sum(min_distances ** 2)\n    return self\n\ndef _compute_distances(self, X: np.ndarray) -> np.ndarray:\n    n = X.shape[0]\n    distances = np.zeros((n, self.n_clusters))\n    for k in range(self.n_clusters):\n        distances[:, k] = np.sum((X - self.centroids[k]) ** 2, axis=1)\n    return distances\n\ndef predict(self, X: np.ndarray) -> np.ndarray:\n    distances = self._compute_distances(X)\n    return np.argmin(distances, axis=1)\n\ndef fit_predict(self, X: np.ndarray) -> np.ndarray:\n    self.fit(X)\n    return self.labels_\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "from sklearn.datasets import make_blobs\nX_blobs, _ = make_blobs(n_samples=300, centers=4, cluster_std=1.5, random_state=42)\nkmeans = KMeans(n_clusters=4)\nkmeans.fit(X_blobs)\nprint(f\"Inertia: {kmeans.inertia_:.2f}, Iterations: {kmeans.n_iter_}\")\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-k-means-and-variants",
      children: "7.2 K-Means++ and Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "K-means++ spread initial centroids to improve convergence quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python\nclass KMeansPlusPlus(KMeans):\ndef fit(self, X: np.ndarray) -> 'KMeansPlusPlus':\nnp.random.seed(self.random_state)\nn_samples, n_features = X.shape\nself.centroids = np.zeros((self.n_clusters, n_features))\nfirst_idx = np.random.randint(n_samples)\nself.centroids[0] = X[first_idx]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    for k in range(1, self.n_clusters):\n        dist = np.min([\n            np.sum((X - self.centroids[j]) ** 2, axis=1) for j in range(k)\n        ], axis=0)\n        probs = dist / np.sum(dist)\n        self.centroids[k] = X[np.random.choice(n_samples, p=probs)]\n\n    for iteration in range(self.max_iter):\n        distances = self._compute_distances(X)\n        self.labels_ = np.argmin(distances, axis=1)\n        new_centroids = np.zeros_like(self.centroids)\n        for k in range(self.n_clusters):\n            mask = self.labels_ == k\n            if np.sum(mask) > 0:\n                new_centroids[k] = np.mean(X[mask], axis=0)\n        shift = np.sum((new_centroids - self.centroids) ** 2)\n        self.centroids = new_centroids\n        if shift < self.tol:\n            break\n    return self\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class MiniBatchKMeans:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n_clusters=8, batch_size=100, max_iter=100, random_state=42):\nself.n_clusters = n_clusters\nself.batch_size = batch_size\nself.max_iter = max_iter\nself.random_state = random_state\nself.centroids = None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def fit(self, X):\n    np.random.seed(self.random_state)\n    n, d = X.shape\n    self.centroids = np.zeros((self.n_clusters, d))\n    self.centroids[0] = X[np.random.randint(n)]\n    for k in range(1, self.n_clusters):\n        dist = np.min([np.sum((X - self.centroids[j])**2, axis=1) for j in range(k)], axis=0)\n        self.centroids[k] = X[np.random.choice(n, p=dist/dist.sum())]\n    counts = np.zeros(self.n_clusters)\n    for _ in range(self.max_iter):\n        idx = np.random.choice(n, self.batch_size, replace=False)\n        Xb = X[idx]\n        dist = np.zeros((self.batch_size, self.n_clusters))\n        for k in range(self.n_clusters):\n            dist[:, k] = np.sum((Xb - self.centroids[k])**2, axis=1)\n        labels = np.argmin(dist, axis=1)\n        for k in range(self.n_clusters):\n            mask = labels == k\n            if mask.sum() > 0:\n                counts[k] += mask.sum()\n                lr = 1.0 / counts[k]\n                self.centroids[k] += lr * (np.mean(Xb[mask], axis=0) - self.centroids[k])\n    return self\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-dbscan",
      children: "7.3 DBSCAN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DBSCAN groups dense regions and marks sparse points as noise."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\python\nclass DBSCAN:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, eps=0.5, min_samples=5):\nself.eps = eps\nself.min_samples = min_samples\nself.labels_ = None\nself.core_sample_indices_ = None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def fit(self, X):\n    n = X.shape[0]\n    labels = np.full(n, -1)\n    distances = np.sqrt(np.sum(X**2, axis=1)[:, None] + np.sum(X**2, axis=1)[None, :] - 2 * X @ X.T)\n    neighbors = [np.where(distances[i] <= self.eps)[0] for i in range(n)]\n\n    cluster_id = 0\n    for i in range(n):\n        if labels[i] != -1:\n            continue\n        if len(neighbors[i]) < self.min_samples:\n            labels[i] = -2  # noise\n            continue\n\n        labels[i] = cluster_id\n        seed = neighbors[i].tolist()\n        while seed:\n            q = seed.pop(0)\n            if labels[q] == -2:\n                labels[q] = cluster_id\n            if labels[q] != -1:\n                continue\n            labels[q] = cluster_id\n            if len(neighbors[q]) >= self.min_samples:\n                seed.extend([nb for nb in neighbors[q] if labels[nb] in [-1, -2]])\n        cluster_id += 1\n\n    self.labels_ = labels\n    self.core_sample_indices_ = np.where([len(n) >= self.min_samples for n in neighbors])[0]\n    return self\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dbscan = DBSCAN(eps=0.8, min_samples=5)\nlabels = dbscan.fit_predict(X_blobs) if hasattr(dbscan, 'fit_predict') else dbscan.fit(X_blobs).labels_\nprint(f\"DBSCAN clusters: {len(set(labels)) - (1 if -2 in labels else 0)}, noise: {np.sum(labels == -2)}\")\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-hierarchical-clustering",
      children: "7.4 Hierarchical Clustering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agglomerative clustering builds a hierarchy bottom-up."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\python\nclass AgglomerativeClustering:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n_clusters=2, linkage='ward'):\nself.n_clusters = n_clusters\nself.linkage = linkage\nself.labels_ = None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def fit(self, X):\n    n = X.shape[0]\n    distances = np.sqrt(np.sum(X**2, axis=1)[:, None] + np.sum(X**2, axis=1)[None, :] - 2 * X @ X.T)\n    clusters = [[i] for i in range(n)]\n\n    while len(clusters) > self.n_clusters:\n        min_dist = float('inf')\n        merge_pair = (0, 0)\n        for i in range(len(clusters)):\n            for j in range(i + 1, len(clusters)):\n                d = self._linkage_dist(clusters[i], clusters[j], distances)\n                if d < min_dist:\n                    min_dist = d\n                    merge_pair = (i, j)\n        i, j = merge_pair\n        clusters[i].extend(clusters[j])\n        clusters.pop(j)\n\n    self.labels_ = np.zeros(n, dtype=int)\n    for cid, cluster in enumerate(clusters):\n        for idx in cluster:\n            self.labels_[idx] = cid\n    return self\n\ndef _linkage_dist(self, c1, c2, distances):\n    if self.linkage == 'single':\n        return min(distances[i][j] for i in c1 for j in c2)\n    elif self.linkage == 'complete':\n        return max(distances[i][j] for i in c1 for j in c2)\n    else:\n        return np.mean([distances[i][j] for i in c1 for j in c2])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "agg = AgglomerativeClustering(n_clusters=4)\nagg.fit(X_blobs)\nprint(f\"Agglomerative clusters: {np.unique(agg.labels_)}\")\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-gaussian-mixture-models",
      children: "7.5 Gaussian Mixture Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GMM uses the EM algorithm to estimate mixture of Gaussian distributions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\python\nclass GaussianMixtureModel:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n_components=3, max_iter=100, tol=1e-3, random_state=42):\nself.n_components = n_components\nself.max_iter = max_iter\nself.tol = tol\nself.random_state = random_state\nself.weights_ = None\nself.means_ = None\nself.covariances_ = None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def fit(self, X):\n    np.random.seed(self.random_state)\n    n, d = X.shape\n    idx = np.random.choice(n, self.n_components, replace=False)\n    self.means_ = X[idx].copy()\n    self.weights_ = np.ones(self.n_components) / self.n_components\n    self.covariances_ = np.array([np.eye(d) * np.var(X) for _ in range(self.n_components)])\n\n    for _ in range(self.max_iter):\n        # E-step: compute responsibilities\n        resp = self._e_step(X)\n        old_means = self.means_.copy()\n\n        # M-step: update parameters\n        Nk = np.sum(resp, axis=0)\n        self.weights_ = Nk / n\n        self.means_ = (resp.T @ X) / Nk[:, None]\n        for k in range(self.n_components):\n            diff = X - self.means_[k]\n            self.covariances_[k] = (resp[:, k:k+1] * diff).T @ diff / Nk[k]\n            self.covariances_[k] += np.eye(d) * 1e-6\n\n        if np.linalg.norm(self.means_ - old_means) < self.tol:\n            break\n\n    self.labels_ = np.argmax(resp, axis=1) if hasattr(self, 'labels_') else np.argmax(self._e_step(X), axis=1)\n    return self\n\ndef _e_step(self, X):\n    n = X.shape[0]\n    resp = np.zeros((n, self.n_components))\n    for k in range(self.n_components):\n        diff = X - self.means_[k]\n        inv_cov = np.linalg.inv(self.covariances_[k])\n        norm_const = np.sqrt(np.linalg.det(2 * np.pi * self.covariances_[k]))\n        resp[:, k] = self.weights_[k] * np.exp(-0.5 * np.sum(diff @ inv_cov * diff, axis=1)) / norm_const\n    resp /= resp.sum(axis=1, keepdims=True)\n    return resp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gmm = GaussianMixtureModel(n_components=4)\ngmm.fit(X_blobs)\nprint(f\"GMM means shape: {gmm.means_.shape}, weights: {gmm.weights_}\")\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-clustering-evaluation",
      children: "7.6 Clustering Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\python\nclass ClusteringMetrics:\ndef silhouette_score(self, X, labels):\nn = X.shape[0]\ndistances = np.sqrt(np.sum(X", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2, axis=1)[:, None] + np.sum(X"
      }), "2, axis=1)[None, :] - 2 * X @ X.T)\nscores = np.zeros(n)\nfor i in range(n):\nsame_cluster = labels == labels[i]\nother_clusters = np.unique(labels[labels != labels[i]])\nif np.sum(same_cluster) <= 1 or len(other_clusters) == 0:\nscores[i] = 0\ncontinue\na = np.mean(distances[i, same_cluster & (np.arange(n) != i)])\nb = min(np.mean(distances[i, labels == c]) for c in other_clusters)\nscores[i] = (b - a) / max(a, b)\nreturn np.mean(scores)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def davies_bouldin(self, X, labels):\n    unique = np.unique(labels)\n    k = len(unique)\n    if k <= 1:\n        return 0.0\n    centroids = np.array([np.mean(X[labels == c], axis=0) for c in unique])\n    scatter = np.zeros(k)\n    for i, c in enumerate(unique):\n        scatter[i] = np.mean(np.sqrt(np.sum((X[labels == c] - centroids[i])**2, axis=1)))\n    db = 0.0\n    for i in range(k):\n        max_ratio = 0.0\n        for j in range(k):\n            if i == j: continue\n            ratio = (scatter[i] + scatter[j]) / np.linalg.norm(centroids[i] - centroids[j])\n            max_ratio = max(max_ratio, ratio)\n        db += max_ratio\n    return db / k\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "metrics = ClusteringMetrics()\nprint(f\"K-Means Silhouette: {metrics.silhouette_score(X_blobs, kmeans.labels_):.3f}\")\nprint(f\"K-Means Davies-Bouldin: {metrics.davies_bouldin(X_blobs, kmeans.labels_):.3f}\")\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface ClusterResult {\nlabels: number[];\ncentroids?: number[][];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class KMeansTS {\nprivate centroids: number[][] = [];"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["fit(X: number[][], k: number, maxIter = 100): ClusterResult {\n// Random initialization\nthis.centroids = [];\nconst indices = new Set", (0,jsx_runtime.jsx)(_components.number, {
        children: "();\nwhile (indices.size < k) indices.add(Math.floor(Math.random() * X.length));\nfor (const idx of indices) this.centroids.push([...X[idx]]);"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let iter = 0; iter < maxIter; iter++) {\n  const labels = X.map((x) => {\n    let minDist = Infinity, minIdx = 0;\n    this.centroids.forEach((c, j) => {\n      const dist = c.reduce((s, cv, i) => s + (x[i] - cv) ** 2, 0);\n      if (dist < minDist) { minDist = dist; minIdx = j; }\n    });\n    return minIdx;\n  });\n  const newCentroids = this.centroids.map((_, k) => {\n    const members = X.filter((_, i) => labels[i] === k);\n    if (members.length === 0) return this.centroids[k];\n    return members[0].map((_, j) => members.reduce((s, m) => s + m[j], 0) / members.length);\n  });\n  this.centroids = newCentroids;\n}\nreturn { labels: X.map(() => 0), centroids: this.centroids };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "K-means partitions data into K clusters minimizing inertia; sensitive to initialization and assumes spherical clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "K-means++ initialization improves convergence quality with spread-out initial centroids"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DBSCAN finds arbitrarily shaped clusters and identifies noise; requires careful eps tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hierarchical clustering produces dendrograms; no K needed but O(n^2) complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GMM provides soft probabilities via EM; handles elliptical cluster shapes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Silhouette score ranges from -1 to 1; higher means better separated clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Davies-Bouldin index measures cluster similarity; lower is better"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No single clustering algorithm works for all data shapes; K-means for spherical, DBSCAN for arbitrary shapes, GMM for elliptical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always standardize features before clustering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the elbow method + silhouette score to determine optimal K"
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
            children: "Spherical clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means with K-means++ init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN (unnecessary complexity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means (assumes spherical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical + dendrogram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means with random K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft assignments needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means (hard assignments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mini-Batch K-Means"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical (O(n^2))"
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
        }), "Q1: What is the difference between K-means and GMM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "K-means assigns each point to exactly one cluster (hard assignment) and assumes spherical clusters of equal size. GMM assigns probabilities to each cluster (soft assignment) and can model elliptical clusters of different sizes and orientations via covariance matrices. K-means is a special case of GMM where covariances are identity and equal. GMM uses EM algorithm while K-means uses iterative centroid updates."
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
        }), "Q2: How does DBSCAN differ from K-means?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "K-means requires specifying K and finds spherical clusters of similar size. DBSCAN finds clusters based on density connectivity without needing K. DBSCAN can find arbitrarily shaped clusters, identify noise points, and handle varying cluster densities (with appropriate eps tuning). K-means assigns every point to a cluster; DBSCAN can label points as noise. DBSCAN is more robust to outliers."
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
        }), "Q3: What is the elbow method for choosing K?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The elbow method plots inertia (within-cluster sum of squares) vs number of clusters K. As K increases, inertia always decreases. The \"elbow\" is the point where the rate of decrease sharply changes — this suggests the optimal K. In practice, elbows are often unclear. Use the silhouette score as a complementary metric: plot silhouette score vs K and choose the K with the highest score."
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
        }), "Q4: What are core, border, and noise points in DBSCAN?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Core point"
          }), ": Has at least min_samples points within distance eps (including itself). Core points form the dense interior of clusters. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Border point"
          }), ": Within eps of a core point but has fewer than min_samples neighbors. Border points are on the cluster edge. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Noise point"
          }), ": Neither core nor border — isolated in low-density region. DBSCAN builds clusters by connecting core points within eps of each other and including their border points."]
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
        }), "Q5: What is the EM algorithm in GMM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The Expectation-Maximization (EM) algorithm iteratively estimates GMM parameters: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "E-step"
          }), ": Compute responsibilities (probability each point belongs to each component) using current parameters. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "M-step"
          }), ": Update parameters (means, covariances, weights) by maximizing the likelihood weighted by responsibilities. Repeat until convergence. EM guarantees monotonic increase in log-likelihood but may converge to local optima. Multiple restarts with different initializations are recommended."]
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
        }), "Q6: How do you evaluate clustering results?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Internal metrics"
          }), " (no ground truth needed): Silhouette score ([-1,1], higher better), Davies-Bouldin index (lower better), Calinski-Harabasz index (higher better), inertia (lower better, but decreases with K). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "External metrics"
          }), " (ground truth available): Adjusted Rand Index (ARI), Normalized Mutual Information (NMI), homogeneity, completeness, V-measure. Use multiple metrics because each has biases — silhouette prefers spherical clusters, DB prefers compact clusters."]
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
        }), "Q7: What are the limitations of K-means?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Requires K to be specified beforehand. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Assumes spherical clusters (Euclidean distance). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Sensitive to initialization (solved partially by K-means++). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Converges to local optimum, not global. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Poor with varying cluster sizes and densities. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6)"
          }), " Sensitive to outliers (every point assigned to a cluster). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7)"
          }), " Struggles with high-dimensional data (curse of dimensionality). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8)"
          }), " Assumes all features are equally important."]
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
        }), "Q8: What linkage criteria are used in hierarchical clustering?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Single linkage"
          }), ": Minimum distance between clusters — can form long chain-like clusters. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete linkage"
          }), ": Maximum distance — produces compact clusters. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Average linkage"
          }), ": Mean distance — balances single and complete. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ward's linkage"
          }), ": Minimizes within-cluster variance — similar to K-means objective. Ward's is generally preferred for continuous data. Single linkage is good for non-elliptical shapes but sensitive to noise."]
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
        }), "Q9: How do you choose eps for DBSCAN?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Plot the k-distance graph: for each point, compute distance to its k-th nearest neighbor (k = min_samples), sort distances, look for the \"elbow\" — the distance where the curve sharply rises. This elbow value is a good eps. Too small eps: many points become noise. Too large eps: clusters merge. Rule of thumb: start with eps = 0.5 and adjust based on k-distance plot. For standardized data, eps = 0.5-1.5 is typical."
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
        }), "Q10: When would you use clustering for anomaly detection?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "DBSCAN naturally identifies noise points as anomalies. For K-means, points far from all centroids (high distance to nearest centroid) can be flagged as anomalies. For GMM, points with low likelihood under all components are anomalous. Clustering-based anomaly detection works well when normal data forms dense clusters and anomalies are isolated. It fails when anomalies also form clusters or normal data has high variance."
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
      }), ": Which clustering algorithm does NOT require specifying the number of clusters a priori?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) K-means\nb) GMM\nc) DBSCAN\nd) Mini-Batch K-Means"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) DBSCAN"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "DBSCAN determines clusters based on density; K is determined automatically."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does the silhouette score measure?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Cluster compactness\nb) How similar a point is to its own cluster vs other clusters\nc) Distance between centroids\nd) Number of noise points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) How similar a point is to its own cluster vs other clusters"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Silhouette = (b - a) / max(a, b) where a is intra-cluster distance and b is nearest-cluster distance."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is a core point in DBSCAN?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) A point with at least min_samples neighbors within eps\nb) The centroid of a cluster\nc) The first point assigned to a cluster\nd) A noise point"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) A point with at least min_samples neighbors within eps"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Core points have enough neighbors in their eps neighborhood to form dense regions."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which GMM step computes the probability that each point belongs to each component?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) M-step\nb) E-step\nc) Initialization\nd) Convergence check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) E-step"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The Expectation step computes responsibilities (posterior probabilities)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which linkage criterion minimizes the within-cluster variance?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Single\nb) Complete\nc) Average\nd) Ward"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) Ward"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Ward's linkage merges clusters that minimize the increase in total within-cluster variance."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement K-means clustering on the Iris dataset (use only petal features). Find optimal K using the elbow method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Apply DBSCAN to a dataset with moons-like structure. Compare results with K-means."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement hierarchical clustering with single, complete, and average linkage. Compare dendrograms on a small dataset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a clustering evaluation pipeline: apply K-means, DBSCAN, GMM, and hierarchical clustering to the same data. Compare using silhouette score, Davies-Bouldin index, and visual inspection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement GMM from scratch with EM algorithm. Test on a dataset with overlapping elliptical clusters and compare with sklearn's GMM."]
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
            children: "Explain the core idea of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
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
            children: "Describe a production bug caused by misunderstanding Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures from 10 users to 10 million?"
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
            children: "Compare Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
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
            children: "How does Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in production today?"
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
        }), " Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures on an empty input?"
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
            children: "Complete Medium exercises, explain Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to someone else"
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
        children: "Always write a one-line example of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
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
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
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
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is like a recipe"
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
        }), " — this chapter contributes the Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-07unsupervisedlearning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which clustering algorithm does NOT require specifying the number of clusters a priori?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) DBSCAN"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-07unsupervisedlearning-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the silhouette score measure?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) How similar a point is to its own cluster vs other clusters"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-07unsupervisedlearning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is a core point in DBSCAN?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) A point with at least min_samples neighbors within eps"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-07unsupervisedlearning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which GMM step computes the probability that each point belongs to each component?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) E-step"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-07unsupervisedlearning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which linkage criterion minimizes the within-cluster variance?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "d) Ward"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in production at scale"
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
        children: "Testing: pytest for unit tests of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures code."]
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
        }), " or your IDE's debugger to step through the Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures example code."]
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
        children: "Explain Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
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
        children: "Tell me about a time you debugged a Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures without notes"
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
        }), ": a small team uses Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/08-dimensionality-reduction",
        children: "Dimensionality Reduction — PCA, t-SNE, UMAP, LDA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures depends on input size and distribution — always benchmark for your own data."
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