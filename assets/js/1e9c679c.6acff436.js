"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[50116],{

/***/ 6107
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_05_linear_algebra_essentials_md_1e9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-05-linear-algebra-essentials-md-1e9.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_05_linear_algebra_essentials_md_1e9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/05-linear-algebra-essentials","title":"Chapter 05: Linear Algebra Essentials","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":285,"frontMatter":{"id":"05-linear-algebra-essentials","slug":"/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials","title":"Chapter 05: Linear Algebra Essentials","sidebar_label":"Chapter 05: Linear Algebra Essentials","sidebar_position":285},"sidebar":"placementSidebar","previous":{"title":"Chapter 04: Correlation & Regression Analysis","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis"},"next":{"title":"Chapter 06: Calculus for ML","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/06-calculus-for-ml"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials.md


const frontMatter = {
	id: '05-linear-algebra-essentials',
	slug: '/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials',
	title: 'Chapter 05: Linear Algebra Essentials',
	sidebar_label: 'Chapter 05: Linear Algebra Essentials',
	sidebar_position: 285
};
const contentTitle = 'Chapter 05: Linear Algebra Essentials';

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
  "value": "Concept",
  "id": "concept",
  "level": 2
}, {
  "value": "Vectors",
  "id": "vectors",
  "level": 3
}, {
  "value": "Matrices",
  "id": "matrices",
  "level": 3
}, {
  "value": "Eigenvalues and Eigenvectors",
  "id": "eigenvalues-and-eigenvectors",
  "level": 3
}, {
  "value": "Matrix Decomposition",
  "id": "matrix-decomposition",
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
  "value": "Exercise 1: Vector and Matrix Operations with NumPy",
  "id": "exercise-1-vector-and-matrix-operations-with-numpy",
  "level": 3
}, {
  "value": "Exercise 2: Eigendecomposition and PCA from Scratch",
  "id": "exercise-2-eigendecomposition-and-pca-from-scratch",
  "level": 3
}, {
  "value": "Exercise 3: Low-Rank SVD Approximation",
  "id": "exercise-3-low-rank-svd-approximation",
  "level": 3
}, {
  "value": "PYQs",
  "id": "pyqs",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-05-linear-algebra-essentials",
        children: "Chapter 05: Linear Algebra Essentials"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand vectors, matrices, and the core operations (addition, multiplication, transpose, inverse, determinant) with their geometric meaning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute dot products, norms, and angles between vectors and determine orthogonality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain eigenvalues and eigenvectors and how PCA uses eigenvectors of the covariance matrix for dimensionality reduction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply SVD to factorize any matrix and use low-rank approximations for compression and denoising."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze matrix properties (rank, condition number, singularity) and their impact on numerical stability in ML."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linear algebra is the mathematical language of modern machine learning and AI. Every neural network layer is a matrix multiplication, word embeddings are vector spaces, and dimensionality reduction methods like PCA are built on eigendecomposition. This chapter covers vectors, matrices, eigenvalues/eigenvectors, SVD, and matrix calculus — the essential linear algebra that powers deep learning, recommendation systems, and natural language processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic algebra (solving equations, arithmetic operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate geometry (points in 2D/3D space)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python basics (lists, functions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vectors",
      children: "Vectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A vector is an ordered collection of numbers representing a point or direction in space."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Operations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Addition"
        }), ": (a₁, a₂) + (b₁, b₂) = (a₁+b₁, a₂+b₂)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalar Multiplication"
        }), ": c × (a₁, a₂) = (c×a₁, c×a₂)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dot Product"
        }), ": a · b = Σ a_i × b_i = |a||b|cos(θ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Norm (Magnitude)"
        }), ": ||a|| = √(Σ a_i²)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit Vector"
        }), ": â = a / ||a||"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orthogonality"
        }), ": a · b = 0 (perpendicular vectors)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "matrices",
      children: "Matrices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A matrix is a rectangular array of numbers arranged in rows and columns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Operations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplication"
        }), ": (m×n) × (n×p) = (m×p). Element (i,j) = Σ A[i,k] × B[k,j]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transpose"
        }), ": Swap rows and columns. (A^T)[i,j] = A[j,i]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse"
        }), ": A × A⁻¹ = I (only for square, non-singular matrices)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determinant"
        }), ": Scalar that represents volume scaling factor. det(A) = 0 means singular (not invertible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace"
        }), ": Sum of diagonal elements: tr(A) = Σ A[i,i]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eigenvalues-and-eigenvectors",
      children: "Eigenvalues and Eigenvectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a square matrix A, if A·v = λ·v, then v is an eigenvector and λ is an eigenvalue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "λ represents how much the direction v is stretched/compressed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in PCA: covariance matrix eigenvectors = principal components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in spectral clustering, PageRank, dimensionality reduction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "matrix-decomposition",
      children: "Matrix Decomposition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SVD (Singular Value Decomposition)"
      }), ": A = U·Σ·V^T"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "U: left singular vectors (m×m)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σ: diagonal matrix of singular values (m×n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V^T: right singular vectors (n×n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in: PCA, matrix completion, recommendation systems, image compression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCA Connection"
      }), ": PCA = SVD on centered data. Principal components are eigenvectors of the covariance matrix. Singular values are proportional to the variance explained by each component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph VectorOps[Vector Operations]\n        A[Vector v] --> B[Addition: u + v]\n        A --> C[Scalar mult: cv]\n        A --> D[Dot product: u · v]\n        A --> E[Norm: ||v||]\n        D --> F[Orthogonal if u · v = 0]\n        E --> G[Unit vector: v / ||v||]\n    end\n    \n    subgraph MatrixOps[Matrix Operations]\n        H[Matrix A m×n] --> I[Multiply: A × B]\n        H --> J[Transpose: A^T]\n        H --> K[Inverse: A⁻¹]\n        H --> L[Determinant: det A]\n        H --> M[Eigendecomposition: A = VΛV⁻¹]\n        H --> N[SVD: A = UΣV^T]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Transformations[Matrix Transformations]\n        A[Identity I] --> B[No change]\n        C[Rotation Matrix] --> D[Rotates vectors by θ]\n        E[Scaling Matrix] --> F[Stretches/compresses axes]\n        G[Projection Matrix] --> H[Projects onto subspace]\n    end\n    \n    subgraph Applications[ML Applications]\n        I[Word Embeddings] --> J[Vector space of words]\n        K[Neural Networks] --> L[Weight matrices + activations]\n        M[PCA] --> N[Eigenvectors of covariance]\n        O[Recommendation] --> P[Matrix factorization SVD]\n        Q[Computer Vision] --> R[Images as matrices]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Music Recommendation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spotify represents each user as a vector of song preferences [pop, rock, jazz, classical, electronic]. Each user is a vector in 5-dimensional space."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dot product"
        }), ": Find users similar to you. High dot product = similar taste. cos(θ) = normalized similarity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Matrix factorization (SVD)"
        }), ": The user×song matrix is decomposed into user-feature and song-feature matrices. The \"features\" discovered might be genre, tempo, mood, era — learned automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eigenvectors"
        }), ": The principal directions of variation in listening habits. First eigenvector might be \"acoustic vs electronic,\" second might be \"vocal vs instrumental,\" etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Neural Network Layer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fully connected layer in a neural network: h = σ(W·x + b)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x: input vector (e.g., 512-dimensional word embedding)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W: weight matrix (e.g., 256×512 — projects 512-dim input to 256-dim hidden)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b: bias vector (256-dim)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "σ: non-linear activation function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is pure linear algebra! The network learns the optimal W and b through training."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom numpy.linalg import eig, svd, det, inv, norm, qr\nimport math\n\nnp.random.seed(42)\nprint(\"=== Linear Algebra Essentials ===\\n\")\n\n# ============================================\n# 1. VECTOR OPERATIONS\n# ============================================\nprint(\"--- Vector Operations ---\")\nv1 = np.array([3, 4])\nv2 = np.array([1, 2])\n\nprint(f\"v1 = {v1}\")\nprint(f\"v2 = {v2}\")\nprint(f\"v1 + v2 = {v1 + v2}\")\nprint(f\"v1 - v2 = {v1 - v2}\")\nprint(f\"3 * v1 = {3 * v1}\")\n\n# Dot product\ndot_product = np.dot(v1, v2)\nprint(f\"v1 · v2 = {dot_product}\")\n\n# Cross-check with formula: |v1||v2|cos(θ)\nnorm_v1 = norm(v1)\nnorm_v2 = norm(v2)\ncos_theta = dot_product / (norm_v1 * norm_v2)\nangle = math.degrees(math.acos(cos_theta))\nprint(f\"||v1|| = {norm_v1}\")\nprint(f\"||v2|| = {norm_v2}\")\nprint(f\"cos(θ) = {cos_theta:.4f}\")\nprint(f\"Angle between v1 and v2: {angle:.2f}°\")\n\n# Orthogonality check\nv3 = np.array([2, -1])\nv4 = np.array([1, 2])\ndot_34 = np.dot(v3, v4)\nprint(f\"\\nv3 = {v3}, v4 = {v4}\")\nprint(f\"v3 · v4 = {dot_34} -> {'Orthogonal!' if abs(dot_34) < 1e-10 else 'Not orthogonal'}\")\n\n# Unit vector\nunit_v1 = v1 / norm_v1\nprint(f\"\\nUnit vector of v1: {unit_v1}\")\nprint(f\"Length of unit vector: {norm(unit_v1):.4f}\")\n\n# ============================================\n# 2. MATRIX OPERATIONS\n# ============================================\nprint(\"\\n--- Matrix Operations ---\")\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = np.array([[1, 0], [0, 1]])  # Identity-like\n\nprint(f\"A =\\n{A}\")\nprint(f\"B =\\n{B}\")\n\n# Matrix multiplication\nprint(f\"\\nA × B =\\n{A @ B}\")\nprint(f\"B × A =\\n{B @ A}\")  # Note: matrix multiplication is NOT commutative!\n\n# Transpose\nprint(f\"\\nA^T =\\n{A.T}\")\n\n# Identity matrix\nI = np.eye(3)\nprint(f\"\\nI₃ =\\n{I}\")\n\n# Determinant\ndet_A = det(A)\nprint(f\"\\ndet(A) = {det_A:.4f}\")\nprint(f\"A is {'invertible' if det_A != 0 else 'singular'}\")\n\n# Inverse\nA_inv = inv(A)\nprint(f\"\\nA⁻¹ =\\n{A_inv}\")\nprint(f\"A × A⁻¹ =\\n{A @ A_inv}\")  # Should be identity\n\n# Trace\nprint(f\"\\ntr(A) = {np.trace(A)}\")\n\n# ============================================\n# 3. SOLVING LINEAR SYSTEMS\n# ============================================\nprint(\"\\n--- Solving Linear Systems ---\")\n# Solve: 2x + 3y = 8, x - y = -1\nA_sys = np.array([[2, 3], [1, -1]])\nb_sys = np.array([8, -1])\nx_sol = np.linalg.solve(A_sys, b_sys)\nprint(f\"System: 2x + 3y = 8, x - y = -1\")\nprint(f\"Solution: x = {x_sol[0]:.2f}, y = {x_sol[1]:.2f}\")\nprint(f\"Verification: 2*{x_sol[0]:.2f} + 3*{x_sol[1]:.2f} = {2*x_sol[0]+3*x_sol[1]:.2f}\")\n\n# ============================================\n# 4. EIGENVALUES AND EIGENVECTORS\n# ============================================\nprint(\"\\n--- Eigenvalues and Eigenvectors ---\")\nA_eig = np.array([[4, -2], [1, 1]])\neigvals, eigvecs = eig(A_eig)\n\nprint(f\"A =\\n{A_eig}\")\nprint(f\"Eigenvalues: {eigvals}\")\nprint(f\"Eigenvectors (columns):\\n{eigvecs}\")\n\n# Verification: A·v = λ·v\nfor i in range(len(eigvals)):\n    v = eigvecs[:, i]\n    lam = eigvals[i]\n    left = A_eig @ v\n    right = lam * v\n    print(f\"\\nλ = {lam:.4f}:\")\n    print(f\"  A·v = {left}\")\n    print(f\"  λ·v = {right}\")\n    print(f\"  Match: {np.allclose(left, right)}\")\n\n# ============================================\n# 5. SVD (SINGULAR VALUE DECOMPOSITION)\n# ============================================\nprint(\"\\n--- Singular Value Decomposition (SVD) ---\")\nA_svd = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]], dtype=float)\nU, S, Vt = svd(A_svd)\n\nprint(f\"A =\\n{A_svd}\")\nprint(f\"U (left singular vectors):\\n{U}\")\nprint(f\"Σ (singular values): {S}\")\nprint(f\"V^T (right singular vectors):\\n{Vt}\")\n\n# Reconstruction: A = U × Σ × V^T\nSigma = np.zeros_like(A_svd, dtype=float)\nSigma[:len(S), :len(S)] = np.diag(S)\nA_reconstructed = U @ Sigma @ Vt\nprint(f\"\\nReconstructed A:\\n{A_reconstructed}\")\nprint(f\"Reconstruction error: {np.max(np.abs(A_reconstructed - A_svd)):.10f}\")\n\n# Low-rank approximation (keep top 1 singular value)\nSigma_rank1 = np.zeros_like(A_svd, dtype=float)\nSigma_rank1[0, 0] = S[0]\nA_rank1 = U @ Sigma_rank1 @ Vt\nprint(f\"\\nRank-1 approximation:\\n{A_rank1}\")\nprint(f\"Explained variance ratio: {S[0]**2 / np.sum(S**2):.4f}\")\n\n# ============================================\n# 6. PCA FROM SCRATCH USING SVD\n# ============================================\nprint(\"\\n--- PCA from Scratch ---\")\n# Generate correlated data\nn_samples = 100\nX_raw = np.random.multivariate_normal(\n    mean=[5, 10],\n    cov=[[4, 3], [3, 9]],\n    size=n_samples\n)\n\n# Center the data\nX_centered = X_raw - np.mean(X_raw, axis=0)\n\n# Method 1: Using covariance matrix eigendecomposition\ncov_matrix = np.cov(X_centered, rowvar=False)\neigvals_cov, eigvecs_cov = eig(cov_matrix)\n# Sort by eigenvalue (descending)\nidx = np.argsort(eigvals_cov)[::-1]\neigvals_cov = eigvals_cov[idx]\neigvecs_cov = eigvecs_cov[:, idx]\n\nprint(f\"Original data shape: {X_raw.shape}\")\nprint(f\"Covariance matrix:\\n{cov_matrix}\")\nprint(f\"Eigenvalues (variance explained): {eigvals_cov}\")\nprint(f\"First principal component (PC1): {eigvecs_cov[:, 0]}\")\nprint(f\"Second principal component (PC2): {eigvecs_cov[:, 1]}\")\n\n# Variance explained\nvar_explained = eigvals_cov / np.sum(eigvals_cov)\nprint(f\"Variance explained by PC1: {var_explained[0]:.4f}\")\nprint(f\"Variance explained by PC2: {var_explained[1]:.4f}\")\nprint(f\"Total variance explained by PC1: {var_explained[0]*100:.1f}%\")\n\n# Project data onto PC1 (dimensionality reduction)\nX_pca = X_centered @ eigvecs_cov[:, 0]\nprint(f\"\\nProjected data (first 5 values): {X_pca[:5]}\")\n\n# Method 2: Using SVD on centered data\nU_svd, S_svd, Vt_svd = svd(X_centered / np.sqrt(n_samples - 1))\nprint(f\"\\nSVD-based singular values: {S_svd}\")\n\n# ============================================\n# 7. MATRIX NORMS\n# ============================================\nprint(\"\\n--- Matrix Norms ---\")\nA_norm = np.array([[2, -1], [1, 3]])\nprint(f\"A =\\n{A_norm}\")\nprint(f\"Frobenius norm: {norm(A_norm, 'fro'):.4f}\")\nprint(f\"Spectral norm (largest singular value): {norm(A_norm, 2):.4f}\")\nprint(f\"1-norm (max column sum): {norm(A_norm, 1):.4f}\")\nprint(f\"Inf-norm (max row sum): {norm(A_norm, np.inf):.4f}\")\n\n# ============================================\n# 8. RANK AND NULL SPACE\n# ============================================\nprint(\"\\n--- Rank and Matrix Properties ---\")\nA_rank_check = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])\nrank_A = np.linalg.matrix_rank(A_rank_check)\nprint(f\"A =\\n{A_rank_check}\")\nprint(f\"Rank of A: {rank_A} (rows/columns are linearly dependent)\")\nprint(f\"Is A full rank? {rank_A == min(A_rank_check.shape)}\")\n\n# ============================================\n# 9. QR DECOMPOSITION\n# ============================================\nprint(\"\\n--- QR Decomposition ---\")\nA_qr = np.array([[1, 2], [3, 4], [5, 6]], dtype=float)\nQ, R = qr(A_qr)\nprint(f\"A =\\n{A_qr}\")\nprint(f\"Q (orthogonal):\\n{Q}\")\nprint(f\"R (upper triangular):\\n{R}\")\nprint(f\"Q^T × Q =\\n{Q.T @ Q:.4f}\")  # Should be identity\n\n# Expected Output (approximate):\n# --- Vector Operations ---\n# v1 = [3 4]\n# v1 · v2 = 11\n# ||v1|| = 5.0\n# Angle between v1 and v2: 10.30°\n#\n# --- Eigenvalues and Eigenvectors ---\n# Eigenvalues: [3. 2.]\n# Variance explained by PC1: 0.8182\n# SVD-based singular values: [3. 2.]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain the geometric meaning of eigenvalues and eigenvectors. How are they used in ML?"
      }), "\nA: An eigenvector v of matrix A is a direction that is only scaled (not rotated) when transformed by A. The eigenvalue λ tells the scaling factor. In ML: PCA finds eigenvectors of the covariance matrix (principal components = directions of maximum variance). PageRank's eigenvector gives page importance scores. Spectral clustering uses graph Laplacian eigenvectors. In recommendation systems, eigenvectors of the user-item matrix reveal latent factors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is SVD and why is it important for machine learning?"
      }), "\nA: SVD (Singular Value Decomposition) factorizes any matrix A into U·Σ·V^T, where U and V are orthogonal matrices and Σ contains singular values (sorted descending). Importance: (1) Matrix completion — Netflix Prize winning algorithm used SVD for recommendations, (2) Dimensionality reduction — PCA is equivalent to SVD on centered data, (3) Low-rank approximation — keep only top k singular values, (4) Solving linear systems — especially useful for ill-conditioned problems, (5) Image compression — JPEG-like compression using truncated SVD."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the curse of dimensionality? How does linear algebra help?"
      }), "\nA: As dimensions increase, data becomes sparse, distances become meaningless (all points are far apart), and models need exponentially more data. Linear algebra solutions: (1) PCA — project high-dimensional data onto top principal components, (2) Random projection (Johnson-Lindenstrauss lemma) — preserve distances with high probability, (3) Matrix factorization — learn low-rank representations, (4) Feature selection — remove irrelevant dimensions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Explain the dot product and its role in ML."
      }), "\nA: Dot product a·b = Σ a_i b_i = |a||b|cos(θ). In ML: (1) Neural network layer output = W·x + b — each neuron computes a dot product between weights and input, (2) Attention mechanism: query·key = attention score, (3) Cosine similarity: cos(θ) = (a·b)/(||a|| ||b||) — used for document similarity, embedding similarity, (4) Linear regression: prediction = dot product of features and coefficients."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is a positive definite matrix and why does it matter?"
      }), "\nA: A symmetric matrix A is positive definite if x^T·A·x > 0 for all non-zero x. Properties: all eigenvalues > 0, invertible, has a unique Cholesky decomposition. In ML: (1) Covariance matrices are positive semidefinite, (2) Hessian matrices are positive definite at local minima of convex functions, (3) Kernel matrices in SVMs and Gaussian processes must be positive definite, (4) Quadratic forms in optimization rely on definiteness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does matrix multiplication relate to neural network forward propagation?"
      }), "\nA: In a neural network with input x, weight matrix W, and bias b: h = σ(Wx + b). Each neuron computes a dot product between its weights and the input. The full layer is a matrix multiply: Wx computes all neuron outputs simultaneously. Batch processing: X_batch (batch_size × input_dim) × W (input_dim × hidden_dim) = H (batch_size × hidden_dim). GPU acceleration is essentially fast matrix multiplication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is the difference between a vector norm and a matrix norm?"
      }), "\nA: Vector norm measures vector magnitude (L1 = sum of absolute values, L2 = Euclidean, L∞ = max element). Matrix norm measures matrix \"size\" — Frobenius norm (sqrt of sum of squared elements, like vector L2 on flattened matrix) and spectral norm (largest singular value, equals the maximum stretch factor). In ML: L1 and L2 regularization penalize weight vector norms. Spectral norm regularization controls Lipschitz constant of neural networks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: Explain low-rank approximation and its applications."
      }), "\nA: A rank-k approximation of matrix A keeps only the k largest singular values (sets rest to zero). A ≈ U_k·Σ_k·V_k^T. Applications: (1) Image compression — store k singular values instead of full pixel matrix, (2) Recommendation systems — approximate user-item matrix with k latent factors, (3) Denoising — noise often lives in small singular values, (4) Faster inference — replace large weight matrices with low-rank approximations, (5) Topic modeling — LSA (Latent Semantic Analysis) uses truncated SVD on document-term matrices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is the condition number of a matrix and why should ML engineers care?"
      }), "\nA: Condition number κ(A) = σ_max / σ_min (ratio of largest to smallest singular value). High κ means the matrix is ill-conditioned — small changes in input cause large changes in output. In ML: (1) Ill-conditioned Hessian causes slow convergence in optimization, (2) Feature matrices with high condition number cause unstable linear regression coefficients, (3) Normalization and whitening improve condition number, (4) Preconditioning in optimization reduces condition number."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: How are vectors and matrices used in natural language processing?"
      }), "\nA: (1) Word embeddings (Word2Vec, GloVe): each word is a dense vector (300-dim). Similar words have similar vectors. (2) Document embeddings: average of word vectors or TF-IDF weighted. (3) Attention: query, key, value vectors computed from embeddings via matrix multiply. (4) Transformer: self-attention = softmax(Q·K^T/√d)·V — all matrix operations. (5) Sentiment analysis: word vectors → LSTM/Transformer → classification. (6) Semantic search: encode query and documents as vectors, find nearest neighbors via dot product."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Which of the following is NOT a valid vector operation?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Dot product of two vectors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Cross product of two 2D vectors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Adding a scalar to a vector"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Computing the norm of a vector"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Adding a scalar to a vector"
        }), " (Scalar-vector addition is not defined in standard linear algebra)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: If det(A) = 0, what can we conclude?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A is invertible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A is singular (not invertible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A is symmetric"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A has all positive eigenvalues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) A is singular (not invertible)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: In SVD A = UΣV^T, the columns of V represent:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Singular values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Left singular vectors (data points in PCA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Right singular vectors (feature directions in PCA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The original data matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Right singular vectors (feature directions in PCA)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Two vectors are orthogonal if:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Their dot product is 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Their dot product is 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Their norms are equal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) One is a scalar multiple of the other"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Their dot product is 0"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: PCA finds eigenvectors of which matrix?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The data matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The inverse covariance matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The covariance matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The Gram matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) The covariance matrix"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-vector-and-matrix-operations-with-numpy",
      children: "Exercise 1: Vector and Matrix Operations with NumPy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (NumPy) implementation that performs vector addition, dot product, norm, angle, and orthogonality checks, then matrix multiplication, transpose, determinant, and inverse with verification."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use numpy only; verify A @ A_inv equals the identity with np.allclose; confirm the angle via the dot-product formula cos(theta) = a.b / (||a|| ||b||); print every result."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: printed values for each operation including the angle in degrees and a True/False verification that the inverse is correct."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-eigendecomposition-and-pca-from-scratch",
      children: "Exercise 2: Eigendecomposition and PCA from Scratch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that generates correlated 2D data, centers it, computes the covariance matrix, and extracts principal components via eigendecomposition."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: verify A.v = lambda.v with np.allclose for each eigenpair; sort eigenvalues in descending order; compute variance explained per component; project the data onto PC1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: eigenvalues, eigenvectors, the A.v vs lambda.v verification result, and the percentage of variance explained by the first principal component."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-low-rank-svd-approximation",
      children: "Exercise 3: Low-Rank SVD Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that takes a numeric matrix, computes its SVD with numpy.linalg.svd, and reconstructs rank-k approximations for k = 1, 2, and 3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: build the Sigma matrix with np.diag and zero-fill; measure the reconstruction error (max absolute difference) and the explained variance ratio (sum of top k squared singular values over total); print a table per k."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: an error and variance table showing the error shrinking and explained variance growing as k increases, with a one-line interpretation of how many components capture most of the signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " You have a user-item rating matrix with 100K users and 50K items (highly sparse, 1% filled). How would you use linear algebra to build a recommendation system?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Use matrix factorization via SVD: factorize R ≈ U·Σ·V^T, then approximate as P·Q^T where P = U_k·√Σ_k (user factors) and Q = V_k·√Σ_k (item factors). Each user and item is represented as a k-dimensional latent vector (typically k=20-200). Prediction: r̂_ui = p_u · q_i. Handle missing values by only computing error on observed entries (weighted alternating least squares or stochastic gradient descent). This is the core of collaborative filtering and was the winning approach for the Netflix Prize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " Explain how eigenvectors are used in PageRank algorithm or spectral clustering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": PageRank: The web is a directed graph. The PageRank vector is the principal eigenvector of the Google matrix G = α·A + (1-α)·E, where A is the adjacency matrix (normalized), α is the damping factor (typically 0.85), and E is a uniform teleportation matrix. The eigenvector centrality scores represent the stationary distribution of a random surfer. Spectral clustering: Construct the Laplacian L = D - A (D = degree matrix, A = adjacency matrix). The eigenvectors corresponding to the smallest non-zero eigenvalues of L encode cluster membership. K-means on these eigenvectors reveals clusters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " A colleague says \"I can just use PCA to reduce 1000 features to 50 components.\" What questions should you ask about this approach?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": (1) Are the features numeric and continuous? PCA assumes numeric data. (2) Are features scaled? PCA is sensitive to scale — standardize first. (3) What is the cumulative variance explained by 50 components? If too low, PCA may lose important signal. (4) Is interpretability important? PCA components are linear combinations of all features — hard to explain. (5) Is the data linear? PCA assumes linear relationships — for non-linear data, use t-SNE or UMAP. (6) Are there outliers? PCA is sensitive to outliers. (7) How will you use the components? For regression, PCR (PCA + regression) may not select components most predictive of y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " What does it mean for a matrix to be singular, and how can you handle it in linear regression when X^T X is not invertible?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": A singular matrix has zero determinant and is not invertible. In regression, X^T X is singular when there are linearly dependent columns (perfect multicollinearity). Solutions: (1) Remove redundant features — keep only linearly independent columns, (2) Use pseudoinverse (Moore-Penrose inverse) via SVD — X⁺ = VΣ⁺U^T, where Σ⁺ inverts non-zero singular values, (3) Use Ridge regression (L2 regularization) — adds λI to X^T X, making it invertible, (4) Use PCA first, then regress on principal components, (5) Check for constant or near-constant columns (near-zero variance)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing matrix multiplication order"
          }), ": A × B ≠ B × A generally. When applying transformations, the rightmost matrix is applied first. In neural nets: h = Wx (W applied to x), not xW. Always check dimensions: (m×n) × (n×p) = (m×p)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Forgetting to center data for PCA"
          }), ": PCA finds eigenvectors of the covariance matrix. If you skip centering, the first component will point toward the mean instead of the direction of maximum variance. Always subtract the mean before PCA or SVD."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Assuming matrix invertibility"
          }), ": Not all square matrices have inverses. Before using inv(A), check det(A) ≠ 0 or use np.linalg.solve for linear systems instead of computing the inverse explicitly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing eigenvectors of covariance with data values"
          }), ": Eigenvectors are unit vectors indicating direction, not actual data points. They represent patterns, not examples. Eigenvalues indicate importance (variance explained)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignoring numerical stability"
          }), ": Computing inverses of large matrices is numerically unstable. Use SVD, QR decomposition, or Cholesky decomposition for stable computations. For regression, always use np.linalg.lstsq instead of manually computing (X^T X)⁻¹ X^T y."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vector"
        }), ": ordered collection of numbers; operations: +, -, scalar *, dot, norm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dot product"
        }), ": Σ a_i b_i = |a||b|cos(θ); orthogonal if = 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Matrix"
        }), ": rectangular array; dimensions (rows × columns)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Matrix multiplication"
        }), ": (m×n) × (n×p) = (m×p); NOT commutative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transpose A^T"
        }), ": swap rows and columns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse A⁻¹"
        }), ": A × A⁻¹ = I; only square, non-singular (det ≠ 0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determinant"
        }), ": volume scaling factor; det = 0 means singular"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eigenvalue λ, eigenvector v"
        }), ": A·v = λ·v; direction preserved, magnitude scaled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SVD"
        }), ": A = U·Σ·V^T; any matrix, any dimensions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCA"
        }), ": SVD on centered data; components = eigenvectors of covariance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low-rank approximation"
        }), ": keep top k singular values; denoising, compression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Condition number"
        }), ": σ_max / σ_min; high = unstable system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Norms"
        }), ": L1 (sum abs), L2 (Euclidean), Frobenius (matrix), spectral (max SV)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linear algebra is the foundational mathematical language for representing and computing with high-dimensional data in AI and machine learning. Vectors represent data points and features, matrices represent transformations and datasets, and matrix operations (multiplication, transpose, inverse) form the computational core of neural networks. Eigenvalues and eigenvectors reveal intrinsic structure in data and are used in PCA for dimensionality reduction. SVD generalizes eigendecomposition to any matrix and enables recommendation systems, image compression, and low-rank approximation. Mastery of these concepts is essential for understanding deep learning architectures, optimization algorithms, and representation learning methods throughout AI engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Matrix Multiplication Order"
        }), ": A x B does not equal B x A - always verify dimensions (m x n) x (n x p) = (m x p); in neural nets, h = Wx means the weight matrix is applied to the input on the right."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determinant"
        }), ": det(A) = 0 means the matrix is singular and not invertible - check this before calling inv(), or use np.linalg.solve and the pseudoinverse via SVD."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eigenvectors in PCA"
        }), ": Principal components are eigenvectors of the covariance matrix on centered data - skipping centering makes the first component point toward the mean instead of maximum variance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SVD"
        }), ": SVD works on any matrix (unlike eigendecomposition) and is the basis for matrix factorization in recommendation systems and truncated low-rank approximations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numerical Stability"
        }), ": Computing (X^T X)^-1 X^T y directly is unstable - prefer np.linalg.lstsq, QR, or Cholesky; the condition number sigma_max/sigma_min tells you how ill-conditioned a system is."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rank"
        }), ": A matrix with linearly dependent rows or columns is rank-deficient - check np.linalg.matrix_rank before solving systems to avoid silent failures."]
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
            children: "Explain the core idea of Chapter 05: Linear Algebra Essentials in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 05: Linear Algebra Essentials."
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
            children: "Describe a production bug caused by misunderstanding Chapter 05: Linear Algebra Essentials. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 05: Linear Algebra Essentials from 10 users to 10 million?"
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
            children: "Compare Chapter 05: Linear Algebra Essentials with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 05: Linear Algebra Essentials."
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
            children: "How does Chapter 05: Linear Algebra Essentials behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 05: Linear Algebra Essentials run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 05: Linear Algebra Essentials that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 05: Linear Algebra Essentials explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 05: Linear Algebra Essentials\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 05: Linear Algebra Essentials to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 05: Linear Algebra Essentials (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 05: Linear Algebra Essentials and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 05: Linear Algebra Essentials-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 05: Linear Algebra Essentials interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 05: Linear Algebra Essentials in production today?"
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
        }), " Chapter 05: Linear Algebra Essentials builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 05: Linear Algebra Essentials before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 05: Linear Algebra Essentials is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 05: Linear Algebra Essentials in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 05: Linear Algebra Essentials chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 05: Linear Algebra Essentials is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 05: Linear Algebra Essentials is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 05: Linear Algebra Essentials is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 05: Linear Algebra Essentials issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 05: Linear Algebra Essentials in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 05: Linear Algebra Essentials that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 05: Linear Algebra Essentials is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 05: Linear Algebra Essentials in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 05: Linear Algebra Essentials and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 05: Linear Algebra Essentials on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 05: Linear Algebra Essentials to someone else"
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
        children: "Always write a one-line example of Chapter 05: Linear Algebra Essentials from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 05: Linear Algebra Essentials when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 05: Linear Algebra Essentials twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 05: Linear Algebra Essentials snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 05: Linear Algebra Essentials listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 05: Linear Algebra Essentials to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 05: Linear Algebra Essentials by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 05: Linear Algebra Essentials to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 05: Linear Algebra Essentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 05: Linear Algebra Essentials (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 05: Linear Algebra Essentials problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 05: Linear Algebra Essentials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 05: Linear Algebra Essentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 05: Linear Algebra Essentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 05: Linear Algebra Essentials fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 05: Linear Algebra Essentials is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 05: Linear Algebra Essentials is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 05: Linear Algebra Essentials, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 05: Linear Algebra Essentials asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 05: Linear Algebra Essentials is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 05: Linear Algebra Essentials."
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
        children: "Chapter 05: Linear Algebra Essentials emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 05: Linear Algebra Essentials today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 05: Linear Algebra Essentials — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 05: Linear Algebra Essentials changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 05: Linear Algebra Essentials."
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
        children: "Chapter 05: Linear Algebra Essentials appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 05: Linear Algebra Essentials helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 05: Linear Algebra Essentials concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 05: Linear Algebra Essentials skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 05: Linear Algebra Essentials to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 05: Linear Algebra Essentials is like a recipe"
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
        }), " — this chapter contributes the Chapter 05: Linear Algebra Essentials skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-05linearalgebraessentials-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 05: Linear Algebra Essentials in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-05linearalgebraessentials-flash2",
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
      "data-qid": "24statisticsmathematics-05linearalgebraessentials-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 05: Linear Algebra Essentials approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-05linearalgebraessentials-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 05: Linear Algebra Essentials NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-05linearalgebraessentials-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 05: Linear Algebra Essentials applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 05: Linear Algebra Essentials (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 05: Linear Algebra Essentials (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 05: Linear Algebra Essentials-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 05: Linear Algebra Essentials in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 05: Linear Algebra Essentials code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 05: Linear Algebra Essentials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 05: Linear Algebra Essentials code."]
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
        }), " or your IDE's debugger to step through the Chapter 05: Linear Algebra Essentials example code."]
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
        children: "Explain Chapter 05: Linear Algebra Essentials in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 05: Linear Algebra Essentials."
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
        children: "Tell me about a time you debugged a Chapter 05: Linear Algebra Essentials problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 05: Linear Algebra Essentials is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 05: Linear Algebra Essentials."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 05: Linear Algebra Essentials logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 05: Linear Algebra Essentials without notes"
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
        }), ": a small team uses Chapter 05: Linear Algebra Essentials daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 05: Linear Algebra Essentials patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 05: Linear Algebra Essentials principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 05: Linear Algebra Essentials shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 05: Linear Algebra Essentials to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/06-calculus-for-ml",
        children: "Chapter 06: Calculus for ML"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 05: Linear Algebra Essentials, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 05: Linear Algebra Essentials depends on input size and distribution — always benchmark for your own data."
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