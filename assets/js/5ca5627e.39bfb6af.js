"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[70561],{

/***/ 87765
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_01_linear_algebra_md_5ca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-01-linear-algebra-md-5ca.json
const site_docs_courses_engineering_mathematics_01_linear_algebra_md_5ca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/01-linear-algebra","title":"Chapter 1: Linear Algebra","description":"Previous Chapter 2: Single Variable Calculus","source":"@site/docs/courses/engineering-mathematics/01-linear-algebra.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/01-linear-algebra","permalink":"/ai-engineering-journey/engineering-mathematics/01-linear-algebra","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-linear-algebra","slug":"/engineering-mathematics/01-linear-algebra","title":"Chapter 1: Linear Algebra","sidebar_label":"Chapter 1: Linear Algebra","sidebar_position":1},"sidebar":"course-engineering-mathematics","next":{"title":"Chapter 2: Single Variable Calculus","permalink":"/ai-engineering-journey/engineering-mathematics/02-calculus-i"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/01-linear-algebra.md


const frontMatter = {
	id: '01-linear-algebra',
	slug: '/engineering-mathematics/01-linear-algebra',
	title: 'Chapter 1: Linear Algebra',
	sidebar_label: 'Chapter 1: Linear Algebra',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Linear Algebra';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1.1 Matrices and Matrix Operations",
  "id": "11-matrices-and-matrix-operations",
  "level": 3
}, {
  "value": "1.2 Determinants",
  "id": "12-determinants",
  "level": 3
}, {
  "value": "1.3 Systems of Linear Equations",
  "id": "13-systems-of-linear-equations",
  "level": 3
}, {
  "value": "1.4 Vector Spaces",
  "id": "14-vector-spaces",
  "level": 3
}, {
  "value": "1.5 Linear Transformations",
  "id": "15-linear-transformations",
  "level": 3
}, {
  "value": "1.6 Eigenvalues and Eigenvectors",
  "id": "16-eigenvalues-and-eigenvectors",
  "level": 3
}, {
  "value": "1.7 Singular Value Decomposition (SVD)",
  "id": "17-singular-value-decomposition-svd",
  "level": 3
}, {
  "value": "1.8 Matrix Calculus",
  "id": "18-matrix-calculus",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Matrix Operations and Solving Linear Systems",
  "id": "example-1-matrix-operations-and-solving-linear-systems",
  "level": 3
}, {
  "value": "Example 2: Computing Eigenvalues and Eigenvectors",
  "id": "example-2-computing-eigenvalues-and-eigenvectors",
  "level": 3
}, {
  "value": "Example 3: SVD for Dimensionality Reduction",
  "id": "example-3-svd-for-dimensionality-reduction",
  "level": 3
}, {
  "value": "Example 4: Gram-Schmidt Orthogonalization",
  "id": "example-4-gram-schmidt-orthogonalization",
  "level": 3
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Matrix Operations",
  "id": "matrix-operations",
  "level": 3
}, {
  "value": "SVD via Power Iteration",
  "id": "svd-via-power-iteration",
  "level": 3
}, {
  "value": "Real-World Application: Principal Component Analysis (PCA)",
  "id": "real-world-application-principal-component-analysis-pca",
  "level": 2
}, {
  "value": "TypeScript Implementation: QR Decomposition via Gram-Schmidt",
  "id": "typescript-implementation-qr-decomposition-via-gram-schmidt",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "TypeScript: Linear Algebra Operations",
  "id": "typescript-linear-algebra-operations",
  "level": 3
}, {
  "value": "Notation Reference",
  "id": "notation-reference",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-1-linear-algebra",
        children: "Chapter 1: Linear Algebra"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/02-calculus-i",
          children: "Chapter 2: Single Variable Calculus"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform matrix operations including multiplication, inversion, and decomposition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute determinants and understand their geometric interpretation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve systems of linear equations using Gaussian elimination and matrix methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine vector spaces, subspaces, bases, and dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find eigenvalues and eigenvectors and apply diagonalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Singular Value Decomposition and its applications in data science"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply linear algebra to problems in computer graphics, ML, and engineering"
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
            children: "Matrices & Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrices are linear transformations represented as arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication encodes composition of transformations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determinant measures volume scaling factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero determinant = singular matrix = information loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Ax = b$ has unique solution iff $A$ is invertible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian elimination is the workhorse algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A vector space is any set closed under linear combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding dimensions reveals degrees of freedom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eigenvalues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Av = \\lambda v$: special vectors that don't change direction under $A$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA, PageRank, quantum mechanics all use eigen-decomposition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SVD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any matrix factors as $A = U\\Sigma V^T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The fundamental theorem of linear algebra for data science"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Matrices & Operations] --> B[Determinants]\n    B --> C[Linear Systems]\n    C --> D[Vector Spaces]\n    D --> E[Linear Transformations]\n    E --> F[Eigenvalues & Eigenvectors]\n    F --> G[Diagonalization]\n    G --> H[SVD & Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-matrices-and-matrix-operations",
      children: "1.1 Matrices and Matrix Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "matrix"
      }), " is a rectangular array of numbers arranged in rows and columns. An $m \\times n$ matrix has $m$ rows and $n$ columns:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\ a_{21} & a_{22} & \\cdots & a_{2n} \\ \\vdots & \\vdots & \\ddots & \\vdots \\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We denote the entry in row $i$, column $j$ as $a_{ij}$ or $A[i,j]$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix Addition:"
      }), " Matrices of the same dimensions are added element-wise:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(A + B)[i,j] = a_{ij} + b_{ij}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Multiplication:"
      }), " Multiply every entry by the scalar:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(cA)[i,j] = c \\cdot a_{ij}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix Multiplication:"
      }), " $A$ ($m \\times n$) times $B$ ($n \\times p$) yields $C$ ($m \\times p$):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$C[i,j] = \\sum_{k=1}^{n} a_{ik} \\cdot b_{kj}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "row-by-column"
      }), " rule. Each entry $c_{ij}$ is the dot product of row $i$ of $A$ with column $j$ of $B$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of Matrix Multiplication:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Associative: $(AB)C = A(BC)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributive: $A(B + C) = AB + AC$"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not commutative:"
        }), " $AB \\neq BA$ in general"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity matrix $I$ satisfies $AI = IA = A$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transpose:"
      }), " The transpose $A^T$ swaps rows and columns: $(A^T)[i,j] = A[j,i]$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace:"
      }), " The sum of diagonal entries: $\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Special Matrices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric:"
        }), " $A = A^T$ (entries symmetric across diagonal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skew-symmetric:"
        }), " $A = -A^T$ (diagonal entries are zero)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orthogonal:"
        }), " $A^T A = AA^T = I$ (columns are orthonormal vectors)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagonal:"
        }), " $a_{ij} = 0$ for $i \\neq j$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upper triangular:"
        }), " $a_{ij} = 0$ for $i > j$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower triangular:"
        }), " $a_{ij} = 0$ for $i < j$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-determinants",
      children: "1.2 Determinants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The determinant is a scalar value that encodes key properties of a square matrix."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a $2 \\times 2$ matrix:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\det\\begin{pmatrix} a & b \\ c & d \\end{pmatrix} = ad - bc$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a $3 \\times 3$ matrix (Sarrus' rule):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\det\\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For general $n \\times n$, we use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cofactor expansion"
      }), " along any row or column:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\cdot C_{ij}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["where $C_{ij} = (-1)^{i+j} \\cdot M_{ij}$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cofactor"
      }), ", and $M_{ij}$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minor"
      }), " (determinant of the matrix obtained by deleting row $i$ and column $j$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of Determinants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\det(AB) = \\det(A) \\cdot \\det(B)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\det(A^T) = \\det(A)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\det(A^{-1}) = 1/\\det(A)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swapping two rows flips the sign of the determinant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiplying a row by scalar $c$ multiplies the determinant by $c$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding a multiple of one row to another does not change the determinant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\det(A) = 0$ iff $A$ is singular (not invertible)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Geometric Interpretation:"
      }), " The absolute value of the determinant equals the volume scaling factor of the linear transformation represented by the matrix. For a $2 \\times 2$ matrix, $|\\det(A)|$ is the area of the parallelogram formed by the column vectors. For $3 \\times 3$, it's the volume of the parallelepiped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-systems-of-linear-equations",
      children: "1.3 Systems of Linear Equations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A system of $m$ linear equations in $n$ unknowns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1$$\n$$a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2$$\n$$\\vdots$$\n$$a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In matrix form: $Ax = b$, where $A$ is the $m \\times n$ coefficient matrix, $x$ is the $n \\times 1$ unknown vector, and $b$ is the $m \\times 1$ right-hand side."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gaussian Elimination"
      }), " transforms the augmented matrix $[A|b]$ into row-echelon form using elementary row operations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swap"
        }), " two rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiply"
        }), " a row by a nonzero scalar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add"
        }), " a multiple of one row to another"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rank:"
      }), " The rank of a matrix is the number of linearly independent rows (or columns). A solution exists iff $\\text{rank}(A) = \\text{rank}([A|b])$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Classification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique solution:"
        }), " $\\text{rank}(A) = \\text{rank}([A|b]) = n$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infinite solutions:"
        }), " $\\text{rank}(A) = \\text{rank}([A|b]) < n$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No solution:"
        }), " $\\text{rank}(A) < \\text{rank}([A|b])$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix Inverse:"
      }), " For a square matrix $A$, the inverse $A^{-1}$ satisfies $A A^{-1} = A^{-1} A = I$. The solution to $Ax = b$ is $x = A^{-1}b$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$A$ is invertible iff $\\det(A) \\neq 0$, equivalently $\\text{rank}(A) = n$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-vector-spaces",
      children: "1.4 Vector Spaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vector space"
      }), " $V$ over a field $\\mathbb{F}$ (typically $\\mathbb{R}$ or $\\mathbb{C}$) is a set closed under vector addition and scalar multiplication, satisfying eight axioms (associativity, commutativity, distributivity, existence of zero vector, existence of additive inverses, and closure under both operations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{R}^n$: all n-tuples of real numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{R}^{m \\times n}$: all $m \\times n$ matrices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathcal{P}_n$: all polynomials of degree $\\leq n$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$C[a,b]$: all continuous functions on $[a,b]$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subspace:"
      }), " A subset $W \\subseteq V$ that is itself a vector space. $W$ must contain the zero vector and be closed under addition and scalar multiplication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear Independence:"
      }), " Vectors $v_1, v_2, \\ldots, v_k$ are linearly independent if:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k = 0 \\implies c_1 = c_2 = \\cdots = c_k = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basis:"
      }), " A set of linearly independent vectors that span the entire space. Every vector in the space can be written uniquely as a linear combination of basis vectors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dimension:"
      }), " The number of vectors in any basis of $V$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Span:"
      }), " The set of all linear combinations of a given set of vectors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Column Space:"
      }), " $\\text{Col}(A)$ = span of columns of $A$. Dimension = rank."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Null Space:"
      }), " $\\text{Null}(A) = {x : Ax = 0}$. Dimension = $n - \\text{rank}(A)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rank-Nullity Theorem:"
      }), " $\\dim(\\text{Col}(A)) + \\dim(\\text{Null}(A)) = n$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-linear-transformations",
      children: "1.5 Linear Transformations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear transformation"
      }), " $T: V \\to W$ satisfies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$T(u + v) = T(u) + T(v)$ (additivity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$T(cv) = cT(v)$ (homogeneity)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ can be represented by an $m \\times n$ matrix $A$ such that $T(x) = Ax$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernel (Null Space):"
      }), " $\\ker(T) = {v \\in V : T(v) = 0}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image (Range):"
      }), " $\\text{Im}(T) = {T(v) : v \\in V}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Change of Basis:"
      }), " If $P$ is the change-of-basis matrix from basis $B$ to basis $B'$, then the matrix of transformation $T$ in basis $B'$ is $A' = P^{-1} A P$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Orthogonal Projections:"
      }), " The projection of vector $v$ onto subspace $W$ with orthonormal basis ${u_1, \\ldots, u_k}$ is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$$\\text{proj}", (0,jsx_runtime.jsx)(_components.em, {
        children: "W(v) = \\sum"
      }), "{i=1}^{k} (v \\cdot u_i) u_i$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-eigenvalues-and-eigenvectors",
      children: "1.6 Eigenvalues and Eigenvectors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a square matrix $A$, a nonzero vector $v$ is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eigenvector"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eigenvalue"
      }), " $\\lambda$ if:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$Av = \\lambda v$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Geometrically, $v$ is a direction that $A$ only stretches (not rotates)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristic Equation:"
      }), " $\\det(A - \\lambda I) = 0$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The roots of this polynomial are the eigenvalues."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eigenspace:"
      }), " The null space of $A - \\lambda I$ ? all eigenvectors corresponding to $\\lambda$ (plus the zero vector)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\text{tr}(A) = \\sum \\lambda_i$ (sum of eigenvalues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\det(A) = \\prod \\lambda_i$ (product of eigenvalues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eigenvalues of a triangular matrix are its diagonal entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A symmetric matrix has all real eigenvalues and orthogonal eigenvectors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagonalization:"
      }), " If $A$ has $n$ linearly independent eigenvectors, then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A = PDP^{-1}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $D$ is diagonal with eigenvalues on the diagonal and $P$ has eigenvectors as columns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Principal Component Analysis:"
        }), " Eigenvectors of the covariance matrix give principal components"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PageRank:"
        }), " The dominant eigenvector of the Google matrix gives page ranks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Markov Chains:"
        }), " Stationary distribution is the eigenvector with eigenvalue 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Differential Equations:"
        }), " Decouple systems using diagonalization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spectral Clustering:"
        }), " Graph Laplacian eigenvectors reveal cluster structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-singular-value-decomposition-svd",
      children: "1.7 Singular Value Decomposition (SVD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SVD is the factorization of ANY matrix $A$ (not just square):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A_{m \\times n} = U_{m \\times m} \\Sigma_{m \\times n} V_{n \\times n}^T$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$U$ has orthonormal columns (left singular vectors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$V$ has orthonormal columns (right singular vectors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\Sigma$ is diagonal with singular values $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection to Eigenvalues:"
      }), " $\\sigma_i^2$ are eigenvalues of $A^T A$ and $AA^T$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-Rank Approximation (Eckart-Young Theorem):"
      }), " The best rank-$k$ approximation to $A$ is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A_k = \\sum_{i=1}^{k} \\sigma_i u_i v_i^T$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimensionality Reduction:"
        }), " Truncate small singular values (like PCA)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compression:"
        }), " Store only top-$k$ singular values and vectors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommender Systems:"
        }), " Matrix factorization via SVD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latent Semantic Analysis:"
        }), " SVD on term-document matrices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pseudoinverse:"
        }), " $A^+ = V\\Sigma^+ U^T$ for solving least squares"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-matrix-calculus",
      children: "1.8 Matrix Calculus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For ML and optimization, we need derivatives with respect to matrices and vectors."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient:"
      }), " For scalar function $f: \\mathbb{R}^n \\to \\mathbb{R}$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\frac{\\partial f}{\\partial x_2}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)^T$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jacobian:"
      }), " For vector function $f: \\mathbb{R}^n \\to \\mathbb{R}^m$, the Jacobian $J$ has entries $J_{ij} = \\frac{\\partial f_i}{\\partial x_j}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hessian:"
      }), " Matrix of second partial derivatives: $H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Matrix Derivatives:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\frac{\\partial}{\\partial x} (a^T x) = a$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\frac{\\partial}{\\partial x} (x^T A x) = (A + A^T)x$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\frac{\\partial}{\\partial X} \\text{tr}(AX) = A^T$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\frac{\\partial}{\\partial X} \\det(X) = \\det(X) (X^{-1})^T$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-matrix-operations-and-solving-linear-systems",
      children: "Example 1: Matrix Operations and Solving Linear Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve the system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$2x + y - z = 8$$\n$$-3x - y + 2z = -11$$\n$$-2x + y + 2z = -3$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution using Gaussian Elimination:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write the augmented matrix:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{pmatrix} 2 & 1 & -1 & | & 8 \\ -3 & -1 & 2 & | & -11 \\ -2 & 1 & 2 & | & -3 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1: Make $a_{11} = 1$ by dividing row 1 by 2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{pmatrix} 1 & 0.5 & -0.5 & | & 4 \\ -3 & -1 & 2 & | & -11 \\ -2 & 1 & 2 & | & -3 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 2: Eliminate $x$ from rows 2 and 3:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$R_2 \\leftarrow R_2 + 3R_1$: $\\begin{pmatrix} 0 & 0.5 & 0.5 & | & 1 \\end{pmatrix}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$R_3 \\leftarrow R_3 + 2R_1$: $\\begin{pmatrix} 0 & 2 & 1 & | & 5 \\end{pmatrix}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{pmatrix} 1 & 0.5 & -0.5 & | & 4 \\ 0 & 0.5 & 0.5 & | & 1 \\ 0 & 2 & 1 & | & 5 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3: Make $a_{22} = 1$ by multiplying row 2 by 2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{pmatrix} 1 & 0.5 & -0.5 & | & 4 \\ 0 & 1 & 1 & | & 2 \\ 0 & 2 & 1 & | & 5 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 4: Eliminate $y$ from row 3: $R_3 \\leftarrow R_3 - 2R_2$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{pmatrix} 1 & 0.5 & -0.5 & | & 4 \\ 0 & 1 & 1 & | & 2 \\ 0 & 0 & -1 & | & 1 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 5: Back-substitution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From $R_3$: $-z = 1 \\implies z = -1$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From $R_2$: $y + z = 2 \\implies y - 1 = 2 \\implies y = 3$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From $R_1$: $x + 0.5y - 0.5z = 4 \\implies x + 1.5 + 0.5 = 4 \\implies x = 2$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $x = 2, y = 3, z = -1$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " $2(2) + 3 - (-1) = 4 + 3 + 1 = 8 \\checkmark$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-computing-eigenvalues-and-eigenvectors",
      children: "Example 2: Computing Eigenvalues and Eigenvectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the eigenvalues and eigenvectors of $A = \\begin{pmatrix} 4 & 1 \\ 2 & 3 \\end{pmatrix}$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Set up characteristic equation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\det(A - \\lambda I) = \\det\\begin{pmatrix} 4-\\lambda & 1 \\ 2 & 3-\\lambda \\end{pmatrix} = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(4-\\lambda)(3-\\lambda) - 2 = 0$$\n$$12 - 7\\lambda + \\lambda^2 - 2 = 0$$\n$$\\lambda^2 - 7\\lambda + 10 = 0$$\n$$(\\lambda - 5)(\\lambda - 2) = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eigenvalues:"
      }), " $\\lambda_1 = 5$, $\\lambda_2 = 2$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Find eigenvector for $\\lambda_1 = 5$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(A - 5I)v = 0 \\implies \\begin{pmatrix} -1 & 1 \\ 2 & -2 \\end{pmatrix} \\begin{pmatrix} v_1 \\ v_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\ 0 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$-v_1 + v_2 = 0 \\implies v_1 = v_2$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $v_1 = \\begin{pmatrix} 1 \\ 1 \\end{pmatrix}$ (any scalar multiple works)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Find eigenvector for $\\lambda_2 = 2$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(A - 2I)v = 0 \\implies \\begin{pmatrix} 2 & 1 \\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} v_1 \\ v_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\ 0 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$2v_1 + v_2 = 0 \\implies v_2 = -2v_1$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $v_2 = \\begin{pmatrix} 1 \\ -2 \\end{pmatrix}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " $A \\begin{pmatrix} 1 \\ 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\ 5 \\end{pmatrix} = 5 \\begin{pmatrix} 1 \\ 1 \\end{pmatrix} \\checkmark$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-svd-for-dimensionality-reduction",
      children: "Example 3: SVD for Dimensionality Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given matrix $A = \\begin{pmatrix} 3 & 1 & 1 \\ -1 & 3 & 1 \\end{pmatrix}$, find its SVD and rank-1 approximation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Compute $A^T A$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A^T A = \\begin{pmatrix} 3 & -1 \\ 1 & 3 \\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 3 & 1 & 1 \\ -1 & 3 & 1 \\end{pmatrix} = \\begin{pmatrix} 10 & 0 & 2 \\ 0 & 10 & 4 \\ 2 & 4 & 2 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Find eigenvalues of $A^T A$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\det(A^T A - \\lambda I) = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The characteristic polynomial is $-\\lambda^3 + 22\\lambda^2 - 120\\lambda = 0$ with roots $\\lambda = 12, 10, 0$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Singular values are $\\sigma_i = \\sqrt{\\lambda_i}$: $\\sigma_1 = \\sqrt{12} \\approx 3.46$, $\\sigma_2 = \\sqrt{10} \\approx 3.16$, $\\sigma_3 = 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Rank-1 approximation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A_1 = \\sigma_1 u_1 v_1^T$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This captures the dominant pattern in the data. For a data science application, if $A$ represents 2 data points in 3D space, the rank-1 approximation finds the best 1D subspace (line) that captures the most variance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-gram-schmidt-orthogonalization",
      children: "Example 4: Gram-Schmidt Orthogonalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find an orthonormal basis for the subspace spanned by $v_1 = \\begin{pmatrix} 1 \\ 1 \\ 0 \\end{pmatrix}$ and $v_2 = \\begin{pmatrix} 1 \\ 0 \\ 1 \\end{pmatrix}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Set $u_1 = v_1 = \\begin{pmatrix} 1 \\ 1 \\ 0 \\end{pmatrix}$, normalize: $e_1 = \\frac{u_1}{|u_1|} = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\ 1 \\ 0 \\end{pmatrix}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Project $v_2$ onto $u_1$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{proj}_{u_1}(v_2) = \\frac{v_2 \\cdot u_1}{u_1 \\cdot u_1} u_1 = \\frac{1}{2} \\begin{pmatrix} 1 \\ 1 \\ 0 \\end{pmatrix} = \\begin{pmatrix} 0.5 \\ 0.5 \\ 0 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " $u_2 = v_2 - \\text{proj}_{u_1}(v_2) = \\begin{pmatrix} 1 \\ 0 \\ 1 \\end{pmatrix} - \\begin{pmatrix} 0.5 \\ 0.5 \\ 0 \\end{pmatrix} = \\begin{pmatrix} 0.5 \\ -0.5 \\ 1 \\end{pmatrix}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Normalize: $e_2 = \\frac{u_2}{|u_2|} = \\frac{1}{\\sqrt{1.5}} \\begin{pmatrix} 0.5 \\ -0.5 \\ 1 \\end{pmatrix}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ${e_1, e_2}$ is an orthonormal basis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "matrix-operations",
      children: "Matrix Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Matrix = number[][];\ntype Vector = number[];\n\nfunction matMul(A: Matrix, B: Matrix): Matrix {\n  const m = A.length, n = A[0].length, p = B[0].length;\n  const C: Matrix = Array.from({ length: m }, () => Array(p).fill(0));\n  for (let i = 0; i < m; i++)\n    for (let k = 0; k < n; k++)\n      for (let j = 0; j < p; j++)\n        C[i][j] += A[i][k] * B[k][j];\n  return C;\n}\n\nfunction matVecMul(A: Matrix, v: Vector): Vector {\n  return A.map(row => row.reduce((sum, a, j) => sum + a * v[j], 0));\n}\n\nfunction transpose(A: Matrix): Matrix {\n  return A[0].map((_, i) => A.map(row => row[i]));\n}\n\n// 2x2 determinant\nfunction det2x2(A: Matrix): number {\n  return A[0][0] * A[1][1] - A[0][1] * A[1][0];\n}\n\n// Power iteration for dominant eigenvalue\nfunction powerIteration(\n  A: Matrix,\n  iterations: number = 100\n): { eigenvalue: number; eigenvector: Vector } {\n  const n = A.length;\n  let v: Vector = Array.from({ length: n }, () => Math.random());\n  for (let iter = 0; iter < iterations; iter++) {\n    v = matVecMul(A, v);\n    const norm = Math.sqrt(v.reduce((s, x) => s + x * x, 0));\n    v = v.map(x => x / norm);\n  }\n  const Av = matVecMul(A, v);\n  const eigenvalue = v.reduce((s, x, i) => s + Av[i] * x, 0);\n  return { eigenvalue, eigenvector: v };\n}\n\n// Gram-Schmidt orthogonalization\nfunction gramSchmidt(V: Matrix): Matrix {\n  const n = V.length;\n  const U: Matrix = V.map(v => [...v]);\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < i; j++) {\n      const dot = U[i].reduce((s, x, k) => s + x * U[j][k], 0);\n      const norm2 = U[j].reduce((s, x) => s + x * x, 0);\n      const coeff = dot / norm2;\n      U[i] = U[i].map((x, k) => x - coeff * U[j][k]);\n    }\n    const norm = Math.sqrt(U[i].reduce((s, x) => s + x * x, 0));\n    U[i] = U[i].map(x => x / norm);\n  }\n  return U;\n}\n\n// Example: power iteration\nconst A: Matrix = [[4, 1], [1, 3]];\nconst { eigenvalue, eigenvector } = powerIteration(A);\nconsole.log(`Dominant eigenvalue: ${eigenvalue.toFixed(4)}`);\nconsole.log(`Eigenvector: [${eigenvector.map(x => x.toFixed(4)).join(', ')}]`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "svd-via-power-iteration",
      children: "SVD via Power Iteration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function svd2x2(A: Matrix): { U: Matrix; S: Matrix; V: Matrix } {\n  // Compute A^T A\n  const At = transpose(A);\n  const AtA = matMul(At, A);\n  const AAt = matMul(A, At);\n\n  // Eigenvectors of A^T A = V columns\n  const { eigenvector: v1 } = powerIteration(AtA);\n  // Orthogonal complement\n  const v2: Vector = [-v1[1], v1[0]];\n\n  // Singular values\n  const Av1 = matVecMul(A, v1);\n  const Av2 = matVecMul(A, v2);\n  const sigma1 = Math.sqrt(Av1.reduce((s, x) => s + x * x, 0));\n  const sigma2 = Math.sqrt(Av2.reduce((s, x) => s + x * x, 0));\n\n  // U columns\n  const u1 = Av1.map(x => x / sigma1);\n  const u2 = Av2.map(x => x / sigma2);\n\n  return {\n    U: [u1, u2],\n    S: [[sigma1, 0], [0, sigma2]],\n    V: [v1, v2],\n  };\n}\n\nconst B: Matrix = [[3, 1], [1, 3]];\nconst { U, S, V } = svd2x2(B);\nconsole.log(`s1 = ${S[0][0].toFixed(4)}, s2 = ${S[1][1].toFixed(4)}`);\nconsole.log(`U1 = [${U[0].map(x => x.toFixed(4)).join(', ')}]`);\nconsole.log(`V1 = [${V[0].map(x => x.toFixed(4)).join(', ')}]`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-principal-component-analysis-pca",
      children: "Real-World Application: Principal Component Analysis (PCA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PCA is a dimensionality reduction technique that uses eigendecomposition of the covariance matrix to find the directions of maximum variance in data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Center the data: subtract the mean $\\bar{x}$ from each observation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute covariance matrix: $\\Sigma = \\frac{1}{n-1} X^T X$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find eigenvalues and eigenvectors of $\\Sigma$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project data onto top-$k$ eigenvectors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why SVD Works Better:"
      }), " In practice, PCA is computed via SVD of the centered data matrix $X = U\\Sigma V^T$, which is numerically more stable than forming $\\Sigma$ explicitly. The right singular vectors $V$ equal the eigenvectors of $\\Sigma$, and the singular values $\\sigma_i$ relate to eigenvalues by $\\lambda_i = \\sigma_i^2 / (n-1)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Image Compression Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Approximate: rank-k approximation via truncated SVD\nfunction rankKApprox(A: Matrix, k: number): Matrix {\n  const { U, S, V } = svd2x2(A);\n  const approx: Matrix = Array.from(\n    { length: A.length },\n    () => Array(A[0].length).fill(0)\n  );\n  for (let r = 0; r < k; r++) {\n    const sigma = S[r][r];\n    const u = U[r];\n    const v = V[r];\n    for (let i = 0; i < A.length; i++)\n      for (let j = 0; j < A[0].length; j++)\n        approx[i][j] += sigma * u[i] * v[j];\n  }\n  return approx;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storage savings: $m \\times n$ original ? $k(m + n + 1)$ with SVD. For $1000 \\times 1000$ at $k = 100$: $1,000,000$ ? $100(1000 + 1000 + 1) = 200,100$, a 5x compression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-qr-decomposition-via-gram-schmidt",
      children: "TypeScript Implementation: QR Decomposition via Gram-Schmidt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vec = number[];\ntype Mat = Vec[];\n\nfunction dot(u: Vec, v: Vec): number {\n  return u.reduce((s, ui, i) => s + ui * v[i], 0);\n}\nfunction norm(u: Vec): number { return Math.sqrt(dot(u, u)); }\nfunction scale(u: Vec, c: number): Vec { return u.map(x => x * c); }\nfunction sub(u: Vec, v: Vec): Vec { return u.map((x, i) => x - v[i]); }\nfunction transpose(M: Mat): Mat { return M[0].map((_, i) => M.map(row => row[i])); }\nfunction eye(n: number): Mat { return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 1 : 0)); }\n\nfunction qrDec(A: Mat): { Q: Mat; R: Mat } {\n  const m = A[0].length;\n  const Q: Mat = [], R: Mat = Array.from({ length: m }, () => Array(m).fill(0));\n  for (let k = 0; k < m; k++) {\n    const col = A.map(row => row[k]);\n    let v = col;\n    for (let j = 0; j < k; j++) {\n      const qj = Q[j]; R[j][k] = dot(qj, col);\n      v = sub(v, scale(qj, R[j][k]));\n    }\n    R[k][k] = norm(v);\n    Q[k] = scale(v, 1 / R[k][k]);\n  }\n  return { Q: transpose(Q), R };\n}\n\n// LU Decomposition with partial pivoting\nfunction luDec(A: Mat): { L: Mat; U: Mat; P: Mat } {\n  const n = A.length;\n  let L = eye(n), U = A.map(r => [...r]), P = eye(n);\n  for (let k = 0; k < n - 1; k++) {\n    let mi = k;\n    for (let i = k + 1; i < n; i++) if (Math.abs(U[i][k]) > Math.abs(U[mi][k])) mi = i;\n    if (mi !== k) { [U[k], U[mi]] = [U[mi], U[k]]; [P[k], P[mi]] = [P[mi], P[k]]; if (k > 0) [L[k], L[mi]] = [L[mi], L[k]]; }\n    for (let i = k + 1; i < n; i++) { L[i][k] = U[i][k] / U[k][k]; for (let j = k; j < n; j++) U[i][j] -= L[i][k] * U[k][j]; }\n  }\n  return { L, U, P };\n}\n\n// Power iteration for dominant eigenvalue\nfunction powerIter(A: Mat, maxIter: number = 1000, tol: number = 1e-10): { eigenvalue: number; eigenvector: Vec } {\n  const n = A.length;\n  let v = Array.from({ length: n }, () => Math.random());\n  let eigenvalue = 0;\n  for (let iter = 0; iter < maxIter; iter++) {\n    const w = v.map((_, i) => v.reduce((s, vj, j) => s + A[i][j] * vj, 0));\n    const normW = Math.sqrt(w.reduce((s, wi) => s + wi * wi, 0));\n    v = w.map(wi => wi / normW);\n    const newEigen = v.reduce((s, vi, i) => {\n      const Av = A[i].reduce((sum, aij, j) => sum + aij * v[j], 0);\n      return s + vi * Av;\n    }, 0);\n    if (Math.abs(newEigen - eigenvalue) < tol) break;\n    eigenvalue = newEigen;\n  }\n  return { eigenvalue, eigenvector: v };\n}\n\n// Demos\nconst A: Mat = [[1, 1, 1], [1, 0, 2], [1, 2, 0]];\nconst { Q, R } = qrDec(A);\nconsole.log(\"QR: Q ? R ? A?\", Q.map((r, i) => r.reduce((s, _, k) => s + (R[i].reduce((ss, rr, kk) => ss + rr * Q[kk][i], 0) - A[i][k]) ** 2, 0)).every(e => e < 1e-10) ? \"YES ?\" : \"NO ?\");\n\nconst { eigenvalue } = powerIter([[2, 1], [1, 2]]);\nconsole.log(`Power iteration ??${eigenvalue.toFixed(4)} (expected: 3 ? max eigenvalue of [[2,1],[1,2]])`);\n\nconst { L, U } = luDec([[4, 3], [6, 3]]);\nconsole.log(`LU: det = ${L.map((r, i) => r.reduce((p, l, j) => p * (i === j ? U[i][j] : 1), 1)).reduce((a, b) => a * b, 1)} (should be -6)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Cofactor Expansion for Determinant ---\nfunction determinantCofactor(A: number[][]): number {\n  const n = A.length;\n  if (n === 1) return A[0][0];\n  if (n === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];\n  let det = 0;\n  for (let j = 0; j < n; j++) {\n    const minor = A.slice(1).map(r => [...r.slice(0, j), ...r.slice(j + 1)]);\n    det += (j % 2 === 0 ? 1 : -1) * A[0][j] * determinantCofactor(minor);\n  }\n  return det;\n}\nconst M = [[1, 2, 3], [4, 5, 6], [7, 8, 10]];\nconsole.log('det M (cofactor):', determinantCofactor(M), '(expected: -3)');\n\n// --- Gram-Schmidt Orthogonalization ---\nfunction gramSchmidt(vectors: number[][]): number[][] {\n  const ortho: number[][] = [];\n  for (const v of vectors) {\n    let proj = v.map(x => x);\n    for (const u of ortho) {\n      const dotUV = u.reduce((s, _, i) => s + v[i] * u[i], 0);\n      const dotUU = u.reduce((s, _, i) => s + u[i] * u[i], 0);\n      if (dotUU === 0) continue;\n      proj = proj.map((x, i) => x - (dotUV / dotUU) * u[i]);\n    }\n    const norm = Math.sqrt(proj.reduce((s, x) => s + x * x, 0));\n    if (norm > 1e-10) ortho.push(proj.map(x => x / norm));\n  }\n  return ortho;\n}\nconst vecs = [[1, 1, 0], [1, 0, 1], [0, 1, 1]];\nconst gs = gramSchmidt(vecs);\nconsole.log('\\nGram-Schmidt orthonormal basis:');\ngs.forEach((v, i) => console.log(`  u${i + 1}: [${v.map(x => x.toFixed(4)).join(', ')}]`));\n\n// --- Least Squares Solver ---\nfunction leastSquares(A: number[][], b: number[]): number[] {\n  const AT = A[0].map((_, i) => A.map(r => r[i]));\n  const ATA = AT.map(r => A[0].map((_, j) => r.reduce((s, v, k) => s + v * A[k][j], 0)));\n  const ATb = AT.map(r => r.reduce((s, v, k) => s + v * b[k], 0));\n  return solveGauss(ATA, ATb);\n}\nfunction solveGauss(A: number[][], b: number[]): number[] {\n  const n = A.length;\n  const aug = A.map((r, i) => [...r, b[i]]);\n  for (let col = 0; col < n; col++) {\n    let maxRow = col;\n    for (let row = col + 1; row < n; row++) if (Math.abs(aug[row][col]) > Math.abs(aug[maxRow][col])) maxRow = row;\n    [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];\n    for (let row = col + 1; row < n; row++) {\n      const factor = aug[row][col] / aug[col][col];\n      for (let j = col; j <= n; j++) aug[row][j] -= factor * aug[col][j];\n    }\n  }\n  const x = new Array(n).fill(0);\n  for (let i = n - 1; i >= 0; i--) {\n    x[i] = (aug[i][n] - aug[i].slice(i + 1, n).reduce((s, v, j) => s + v * x[i + 1 + j], 0)) / aug[i][i];\n  }\n  return x;\n}\nconst lsA = [[1, 0], [1, 1], [1, 2]]; // fit y = a + bx\nconst lsB = [1, 3, 5];\nconst lsX = leastSquares(lsA, lsB);\nconsole.log('\\nLeast squares fit: y =', lsX[0].toFixed(2), '+', lsX[1].toFixed(2), 'x');\n\n// --- Column Space Basis ---\nfunction columnSpace(A: number[][]): number[][] {\n  const m = A.length, n = A[0].length;\n  const rref = A.map(r => [...r]);\n  let pivotCols: number[] = [];\n  for (let col = 0, row = 0; col < n && row < m; col++) {\n    let pivot = row;\n    while (pivot < m && Math.abs(rref[pivot][col]) < 1e-10) pivot++;\n    if (pivot === m) continue;\n    pivotCols.push(col);\n    [rref[row], rref[pivot]] = [rref[pivot], rref[row]];\n    const scale = rref[row][col];\n    for (let j = col; j < n; j++) rref[row][j] /= scale;\n    for (let i = 0; i < m; i++) if (i !== row) { const f = rref[i][col]; for (let j = col; j < n; j++) rref[i][j] -= f * rref[row][j]; }\n    row++;\n  }\n  return pivotCols.map(j => A.map(r => r[j]));\n}\nconst colA = [[1, 2, 3], [2, 4, 6], [0, 0, 1]];\nconsole.log('Column space basis vectors:', columnSpace(colA).length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// linear algebra\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'linear algebra', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// linear algebra - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'linear algebra' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A matrix is a linear transformation; matrix multiplication composes transformations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The determinant measures volume scaling; zero determinant means singular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gaussian elimination solves $Ax = b$ via row operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector spaces are sets closed under linear combinations; bases are minimal spanning sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eigenvalues and eigenvectors satisfy $Av = \\lambda v$; they reveal invariant directions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagonalization $A = PDP^{-1}$ simplifies matrix powers and DE systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVD $A = U\\Sigma V^T$ works for any matrix and is the foundation of data-driven linear algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rank-nullity theorem: column space dimension + null space dimension = number of columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matrix calculus extends derivatives to vector/matrix functions, essential for ML"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the determinant of a product equals the product of determinants: $\\det(AB) = \\det(A)\\det(B)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that if $\\lambda$ is an eigenvalue of $A$, then $\\lambda^2$ is an eigenvalue of $A^2$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the geometric meaning of a zero eigenvalue? Of a negative eigenvalue?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why the columns of $U$ in SVD are eigenvectors of $AA^T$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that similar matrices ($B = P^{-1}AP$) have the same eigenvalues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PageRank Simulation:"
          }), " A web has 3 pages with links: Page 1 links to 2 and 3, Page 2 links to 3, Page 3 links to 1. Find the dominant eigenvector of the Google matrix (damping factor 0.85)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PCA on 2D Data:"
          }), " Given data points $(1,1), (2,2), (3,3), (1,3), (2,4)$, compute the covariance matrix, find its eigenvectors, and determine the principal component."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Compression via SVD:"
          }), " Explain how you would compress a $1000 \\times 1000$ grayscale image using SVD. How many singular values would you keep for 10x compression?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Linear Regression via QR:"
          }), " Show how to solve the least squares problem $\\min_x |Ax - b|_2$ using QR decomposition of $A$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Markov Chain Stationary Distribution:"
          }), " A Markov chain has transition matrix $P = \\begin{pmatrix} 0.7 & 0.2 & 0.1 \\ 0.3 & 0.5 & 0.2 \\ 0.1 & 0.4 & 0.5 \\end{pmatrix}$. Find the stationary distribution $\\pi$ satisfying $\\pi P = \\pi$ and $\\sum \\pi_i = 1$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kernel Trick:"
          }), " Show that using the feature map $\\phi(x_1, x_2) = (x_1^2, \\sqrt{2}x_1x_2, x_2^2)$ and the dot product in feature space is equivalent to the kernel $K(x, y) = (x \\cdot y)^2$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix Exponential:"
      }), " The matrix exponential $e^A = \\sum_{k=0}^\\infty \\frac{A^k}{k!}$ is used to solve systems of ODEs. For the matrix $A = \\begin{pmatrix} 0 & 1 \\ -1 & 0 \\end{pmatrix}$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Compute $A^2, A^3, A^4$ and identify the pattern\nb) Use the series definition to find $e^A$ in closed form\nc) Verify that your result satisfies $(e^A)^{-1} = e^{-A}$ and $e^{A+B} = e^A e^B$ for this $A$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-linear-algebra-operations",
      children: "TypeScript: Linear Algebra Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Matrix = number[][];\n\nclass LinearAlgebra {\n  multiply(A: Matrix, B: Matrix): Matrix {\n    const m = A.length, n = A[0].length, p = B[0].length;\n    const C: Matrix = Array.from({ length: m }, () => new Array(p).fill(0));\n    for (let i = 0; i < m; i++)\n      for (let k = 0; k < n; k++)\n        for (let j = 0; j < p; j++)\n          C[i][j] += A[i][k] * B[k][j];\n    return C;\n  }\n\n  svd2x2(M: Matrix): { U: Matrix; S: number[]; V: Matrix } {\n    const a = M[0][0], b = M[0][1], c = M[1][0], d = M[1][1];\n    const theta = 0.5 * Math.atan2(2 * b + 2 * c, a - d + a - d); // simplified\n    const cos = Math.cos(theta), sin = Math.sin(theta);\n    const U = [[cos, -sin], [sin, cos]];\n    const V = [[cos, sin], [-sin, cos]];\n    const s1 = Math.abs(a * cos + c * sin);\n    const s2 = Math.abs(d * cos + b * sin);\n    return { U, S: [s1, s2].sort((x, y) => y - x), V };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A^T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transpose of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\det(A)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "determinant of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{tr}(A)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trace of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A^{-1}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inverse of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A^+$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pseudoinverse of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$|v|$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euclidean norm of $v$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{span}{v_i}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set of all linear combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{Col}(A)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{Null}(A)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{rank}(A)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rank of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathbb{R}^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n-dimensional Euclidean space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{P}_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "polynomials of degree $\\leq n$"
          })]
        })]
      })]
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