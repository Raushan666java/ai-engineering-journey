"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35595],{

/***/ 44933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_09_dimensionality_reduction_md_e5c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-09-dimensionality-reduction-md-e5c.json
const site_docs_courses_machine_learning_09_dimensionality_reduction_md_e5c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/09-dimensionality-reduction","title":"Chapter 9: Dimensionality Reduction","description":"Previous Model Evaluation","source":"@site/docs/courses/machine-learning/09-dimensionality-reduction.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/09-dimensionality-reduction","permalink":"/ai-engineering-journey/machine-learning/09-dimensionality-reduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-dimensionality-reduction","slug":"/machine-learning/09-dimensionality-reduction","title":"Chapter 9: Dimensionality Reduction","sidebar_label":"Chapter 9: Dimensionality Reduction","sidebar_position":9},"sidebar":"course-machine-learning","previous":{"title":"Chapter 8: Unsupervised Learning","permalink":"/ai-engineering-journey/machine-learning/08-unsupervised-learning"},"next":{"title":"Chapter 10: Model Selection and Evaluation","permalink":"/ai-engineering-journey/machine-learning/10-model-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/09-dimensionality-reduction.md


const frontMatter = {
	id: '09-dimensionality-reduction',
	slug: '/machine-learning/09-dimensionality-reduction',
	title: 'Chapter 9: Dimensionality Reduction',
	sidebar_label: 'Chapter 9: Dimensionality Reduction',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Dimensionality Reduction';

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
  "value": "The Curse of Dimensionality",
  "id": "the-curse-of-dimensionality",
  "level": 3
}, {
  "value": "Principal Component Analysis (PCA)",
  "id": "principal-component-analysis-pca",
  "level": 3
}, {
  "value": "PCA Derivation",
  "id": "pca-derivation",
  "level": 4
}, {
  "value": "Explained Variance Ratio",
  "id": "explained-variance-ratio",
  "level": 3
}, {
  "value": "SVD for PCA",
  "id": "svd-for-pca",
  "level": 3
}, {
  "value": "t-SNE (t-Distributed Stochastic Neighbor Embedding)",
  "id": "t-sne-t-distributed-stochastic-neighbor-embedding",
  "level": 3
}, {
  "value": "UMAP (Uniform Manifold Approximation and Projection)",
  "id": "umap-uniform-manifold-approximation-and-projection",
  "level": 3
}, {
  "value": "Feature Selection Methods",
  "id": "feature-selection-methods",
  "level": 3
}, {
  "value": "Autoencoders for Non-linear Dimensionality Reduction",
  "id": "autoencoders-for-non-linear-dimensionality-reduction",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: PCA on Iris Dataset (TypeScript)",
  "id": "example-1-pca-on-iris-dataset-typescript",
  "level": 3
}, {
  "value": "Example 2: Reconstructing an Image with PCA (TypeScript)",
  "id": "example-2-reconstructing-an-image-with-pca-typescript",
  "level": 3
}, {
  "value": "Example 3: Eigenfaces ? Face Recognition via PCA",
  "id": "example-3-eigenfaces--face-recognition-via-pca",
  "level": 3
}, {
  "value": "Example 4: Feature Selection for High-Dimensional Genomic Data",
  "id": "example-4-feature-selection-for-high-dimensional-genomic-data",
  "level": 3
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
  "value": "TypeScript Implementation: PCA, t-SNE Similarity, and Explained Variance",
  "id": "typescript-implementation-pca-t-sne-similarity-and-explained-variance",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtext: "mtext",
    munder: "munder",
    munderover: "munderover",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-9-dimensionality-reduction",
        children: "Chapter 9: Dimensionality Reduction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/08-unsupervised-learning",
          children: "Unsupervised Learning"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/10-model-evaluation",
          children: "Model Evaluation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the \"Curse of Dimensionality\" and its impact on machine learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the geometric and algebraic intuition behind Principal Component Analysis (PCA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive PCA from the covariance matrix eigendecomposition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand SVD as the computational engine for PCA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate and interpret the \"Explained Variance Ratio\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare linear (PCA) vs non-linear (t-SNE, UMAP, autoencoders) techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish feature selection from feature extraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify scenarios for using dimensionality reduction in preprocessing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Curse of Dimensionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As dimensions increase, data becomes sparse and distances become less meaningful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce dimensions before modeling to avoid overfitting and improve performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Principal Component Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA finds directions of maximum variance in the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PCA for feature extraction, noise reduction, and visualization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explained Variance Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures how much information each principal component retains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose enough components to capture 90?95% of total variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eigenvectors & Eigenvalues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eigenvectors define the new axes; eigenvalues measure variance along each axis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by eigenvalue magnitude to identify the most important components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear technique preserving local neighborhood structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for visualization (2D/3D) of high-dimensional data, not for preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear technique balancing local and global structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than t-SNE; scales better to large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Selection vs. Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection chooses existing features; extraction creates new ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use extraction (PCA) when features are correlated; use selection for interpretability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autoencoders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network learning compressed latent representations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures non-linear manifolds ? useful for images, text embeddings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[High-Dimensional Data] --> B[Center the Data]\n    B --> C[Compute Covariance Matrix]\n    C --> D[Eigendecomposition]\n    D --> E[Sort Eigenvectors by Eigenvalue]\n    E --> F[Select Top K Components]\n    F --> G[Project Data onto New Subspace]\n    G --> H[Reduced-Dimension Representation]\n    H --> I[Visualize or Train Model]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-curse-of-dimensionality",
      children: "The Curse of Dimensionality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As the number of features (dimensions) increases, the volume of the feature space grows exponentially. For a dataset with uniform distribution in ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " dimensions, the fraction of points within a hypercube of side ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "ϵ"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\epsilon"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ϵ"
            })]
          })
        })]
      }), " is only ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\epsilon^d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8491em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "ϵ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8491em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "d"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " ? this vanishes exponentially as ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " grows. Distances between any two points converge to the same value, making nearest-neighbor and distance-based algorithms unreliable. Dimensionality reduction mitigates this by projecting data into a lower-dimensional subspace that retains the most meaningful structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "principal-component-analysis-pca",
      children: "Principal Component Analysis (PCA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PCA is a linear transformation technique used for feature extraction and dimensionality reduction. It identifies the directions (principal components) along which the variation in the data is maximal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algebraic Intuition"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Center the Data"
        }), ": Subtract the mean from each feature."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute Covariance Matrix"
        }), ": Calculate how much each feature varies with every other feature."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eigen-decomposition"
        }), ": Find the eigenvectors and eigenvalues of the covariance matrix.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Eigenvectors"
            }), " represent the directions of the new feature space."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Eigenvalues"
            }), " represent the magnitude of variance in those directions."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Data"
        }), ": Choose the top ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " eigenvectors with the largest eigenvalues and project the original data onto them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pca-derivation",
      children: "PCA Derivation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "∈"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "×"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X \\in \\mathbb{R}^{n \\times d}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7224em",
                verticalAlign: "-0.0391em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∈"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8491em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbb",
                children: "R"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8491em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "d"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      }), " be the centered data matrix (each column has mean zero). The covariance matrix is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\Sigma = \\frac{1}{n-1} X^T X"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.0908em",
                verticalAlign: "-0.7693em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "1"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.7693em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We seek a unit vector ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{v}_1"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5944em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " that maximizes the variance of the projected data:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: (0,jsx_runtime.jsxs)(_components.munder, {
                    children: [(0,jsx_runtime.jsxs)(_components.mo, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "arg"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "Var"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: (0,jsx_runtime.jsxs)(_components.munder, {
                    children: [(0,jsx_runtime.jsxs)(_components.mo, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "arg"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "v"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{v}_1 = \\underset{\\|\\mathbf{v}\\|=1}{\\arg\\max} \\; \\text{Var}(X\\mathbf{v}) = \\underset{\\|\\mathbf{v}\\|=1}{\\arg\\max} \\; \\mathbf{v}^T \\Sigma \\mathbf{v}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5944em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.9104em",
                verticalAlign: "-1.1604em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-limits",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.4306em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.1146em",
                          marginLeft: "0em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathbf mtight",
                              style: {
                                marginRight: "0.016em"
                              },
                              children: "v"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })]
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mop",
                              children: ["ar", (0,jsx_runtime.jsx)(_components.span, {
                                style: {
                                  marginRight: "0.0139em"
                                },
                                children: "g"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mop",
                              children: "max"
                            })]
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1604em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Var"
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              style: {
                marginRight: "0.016em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.0518em",
                verticalAlign: "-1.1604em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-limits",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.4306em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.1146em",
                          marginLeft: "0em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathbf mtight",
                              style: {
                                marginRight: "0.016em"
                              },
                              children: "v"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })]
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mop",
                              children: ["ar", (0,jsx_runtime.jsx)(_components.span, {
                                style: {
                                  marginRight: "0.0139em"
                                },
                                children: "g"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mop",
                              children: "max"
                            })]
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1604em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              style: {
                marginRight: "0.016em"
              },
              children: "v"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using the Rayleigh quotient, the maximum is achieved when ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{v}_1"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5944em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is the eigenvector corresponding to the largest eigenvalue ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "λ"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\lambda_1"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8444em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "λ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\Sigma"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            })]
          })
        })]
      }), ". The second component ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{v}_2"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5944em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " maximizes variance subject to ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⊥"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{v}_2 \\perp \\mathbf{v}_1"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8444em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "⊥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5944em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.016em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      }), ", giving the second eigenvector. By induction, the top ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "k"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            })]
          })
        })]
      }), " eigenvectors of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\Sigma"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            })]
          })
        })]
      }), " form the projection matrix ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "∈"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "×"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "W_k \\in \\mathbb{R}^{d \\times k}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0315em"
                            },
                            children: "k"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∈"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8491em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbb",
                children: "R"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8491em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "d"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0315em"
                              },
                              children: "k"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reduced representation is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "reduced"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X_{\\text{reduced}} = X W_k"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "reduced"
                              })
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0315em"
                            },
                            children: "k"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "and the approximate reconstruction is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "approx"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "reduced"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X_{\\text{approx}} = X_{\\text{reduced}} W_k^T = X W_k W_k^T"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.9694em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "approx"
                              })
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.1383em",
                verticalAlign: "-0.247em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "reduced"
                              })
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0315em"
                            },
                            children: "k"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.1383em",
                verticalAlign: "-0.247em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0315em"
                            },
                            children: "k"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0315em"
                            },
                            children: "k"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explained-variance-ratio",
      children: "Explained Variance Ratio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The total variance in the data is the sum of all eigenvalues: ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "λ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "tr"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sum_{j=1}^{d} \\lambda_j = \\text{tr}(\\Sigma)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.4248em",
                verticalAlign: "-0.4358em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mop",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "∑"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.989em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.4003em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })]
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2029em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "d"
                            })
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.4358em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "λ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "tr"
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      }), ". The explained variance ratio of component ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "j"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "j"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0572em"
              },
              children: "j"
            })]
          })
        })]
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.munderover, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "λ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\frac{\\lambda_j}{\\sum_{i=1}^{d} \\lambda_i}"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.5502em",
                verticalAlign: "-1.1787em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3714em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.121em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.989em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4003em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "i"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mrel mtight",
                                            children: "="
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "1"
                                          })]
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2029em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "d"
                                          })
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2997em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "λ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "λ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0572em"
                                          },
                                          children: "j"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2861em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1787em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The cumulative ratio for the top ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "k"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            })]
          })
        })]
      }), " components tells us the fraction of total variance preserved. This directly guides the choice of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "k"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            })]
          })
        })]
      }), " ? we typically select ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "k"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            })]
          })
        })]
      }), " such that the cumulative ratio exceeds 0.90 or 0.95."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Eigenvalues:       [10.0, 5.0, 2.0, 1.0, 0.5]\nExplained Ratio:   [0.54, 0.27, 0.11, 0.05, 0.03]\nCumulative Ratio:  [0.54, 0.81, 0.92, 0.97, 1.00]\n---> k=3 captures 92% of total variance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "bar\n    title PCA Projection (2D to 1D)\n    x-axis Data Points\n    y-axis Feature Value\n    \"P1 Original\": 3.2\n    \"P1 Original\": 1.8\n    \"P1 Projected\": 3.6\n    \"P2 Original\": 5.1\n    \"P2 Original\": 3.9\n    \"P2 Projected\": 5.4\n    \"P3 Original\": 6.8\n    \"P3 Original\": 7.2\n    \"P3 Projected\": 6.9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph SVD[\"Singular Value Decomposition\"]\n        direction LR\n        A[\"X (n?d)\"] --> B[\"U (n?n)\"]\n        A --> C[\"S (n?d)\"]\n        A --> D[\"V^T (d?d)\"]\n    end\n    B --> E[\"Left singular vectors<br/>(columns of U)\"]\n    C --> F[\"Singular values s_i<br/>on diagonal\"]\n    D --> G[\"Right singular vectors<br/>(columns of V)\"]\n    F --> H[\"s_i? = ?_i<br/>(eigenvalues of cov)\"]\n    G --> I[\"Principal directions<br/>(eigenvectors of cov)\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "svd-for-pca",
      children: "SVD for PCA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Singular Value Decomposition (SVD) provides a computationally superior route to PCA. The centered data matrix ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            })]
          })
        })]
      }), " (shape ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "×"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "n \\times d"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6667em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "×"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })]
        })]
      }), ") is decomposed as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "U"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X = U \\Sigma V^T"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8913em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "U"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "U \\in \\mathbb{R}^{n \\times n}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7224em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "U"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7713em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.7713em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "×"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })]
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " ? orthonormal columns (left singular vectors)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\Sigma \\in \\mathbb{R}^{n \\times d}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7224em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8491em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8491em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "×"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "d"
                              })]
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " ? diagonal matrix of singular values ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋯"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.786em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.786em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7719em",
                  verticalAlign: "-0.136em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "⋯"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V \\in \\mathbb{R}^{d \\times d}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7224em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8491em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8491em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "d"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "×"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "d"
                              })]
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " ? orthonormal columns (right singular vectors)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key relationship"
      }), ": The covariance matrix eigendecomposition connects directly to SVD:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "U"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "U"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "V"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Σ"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "V"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "Λ"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X^T X = (U \\Sigma V^T)^T (U \\Sigma V^T) = V \\Sigma^T \\Sigma V^T = V \\Lambda V^T"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8913em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.1413em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "U"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mclose",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "U"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8913em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.2222em"
              },
              children: "V"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Σ"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8913em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.2222em"
              },
              children: "V"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "Λ"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8913em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The right singular vectors ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })
          })]
        }), " are the eigenvectors of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X^T X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), " (principal components)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The singular values satisfy ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma_i^2 = \\lambda_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0728em",
                  verticalAlign: "-0.2587em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4413em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2587em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8444em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "λ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), ", where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\lambda_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8444em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "λ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " are the eigenvalues of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\Sigma = \\frac{1}{n-1} X^T X"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2484em",
                  verticalAlign: "-0.4033em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8451em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.394em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.4033em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages of SVD over eigendecomposition"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Numerically more stable (avoids forming ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X^T X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), ", which squares the condition number)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works directly on the data matrix ? no covariance matrix needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles rectangular and sparse matrices efficiently"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truncated SVD (keeping only top ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " singular values) is faster for large ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "t-sne-t-distributed-stochastic-neighbor-embedding",
      children: "t-SNE (t-Distributed Stochastic Neighbor Embedding)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "t-SNE converts pairwise distances into probability distributions and minimizes the divergence between the high-dimensional and low-dimensional distributions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "High-dimensional space"
      }), ": For each point ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), ", the conditional probability that ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x_j"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7167em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is its neighbor is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∣"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "exp"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "/"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.munder, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          children: "≠"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "exp"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "/"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "p_{j|i} = \\frac{\\exp(-\\|x_i - x_j\\|^2 / 2\\sigma_i^2)}{\\sum_{k \\ne i} \\exp(-\\|x_i - x_k\\|^2 / 2\\sigma_i^2)}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7858em",
                verticalAlign: "-0.3552em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3448em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.5198em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "∣"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })]
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3552em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.6129em",
                verticalAlign: "-1.1218em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.4911em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1864em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4003em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0315em"
                                            },
                                            children: "k"
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mrel mtight",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mrel mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord vbox mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "thinbox mtight",
                                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "rlap mtight",
                                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                                      className: "strut",
                                                      style: {
                                                        height: "0.8889em",
                                                        verticalAlign: "-0.1944em"
                                                      }
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "inner",
                                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                                        className: "mord mtight",
                                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mrel mtight",
                                                          children: ""
                                                        })
                                                      })
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "fix"
                                                    })]
                                                  })
                                                })
                                              })
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace nobreak mtight"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mrel mtight",
                                              children: "="
                                            })]
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "i"
                                          })]
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.4358em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mop",
                            children: "exp"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3361em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0315em"
                                          },
                                          children: "k"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.7401em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "/2"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.7959em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4231em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.0448em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2769em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mop",
                            children: "exp"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0572em"
                                          },
                                          children: "j"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2861em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.8141em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "/2"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.8141em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4413em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2587em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1218em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The perplexity parameter (typically 5?50) controls ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0359em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " by specifying the effective number of neighbors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-dimensional space"
      }), ": A Student t-distribution with one degree of freedom (Cauchy) is used:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "q"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.munder, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          children: "≠"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "l"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "q_{ij} = \\frac{(1 + \\|y_i - y_j\\|^2)^{-1}}{\\sum_{k \\ne l} (1 + \\|y_k - y_l\\|^2)^{-1}}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7167em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0359em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "ij"
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.6129em",
                verticalAlign: "-1.1218em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.4911em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1864em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4003em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0315em"
                                            },
                                            children: "k"
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mrel mtight",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mrel mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord vbox mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "thinbox mtight",
                                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "rlap mtight",
                                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                                      className: "strut",
                                                      style: {
                                                        height: "0.8889em",
                                                        verticalAlign: "-0.1944em"
                                                      }
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "inner",
                                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                                        className: "mord mtight",
                                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mrel mtight",
                                                          children: ""
                                                        })
                                                      })
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "fix"
                                                    })]
                                                  })
                                                })
                                              })
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace nobreak mtight"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mrel mtight",
                                              children: "="
                                            })]
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0197em"
                                            },
                                            children: "l"
                                          })]
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.4358em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "1"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3361em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0315em"
                                          },
                                          children: "k"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3361em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0197em"
                                          },
                                          children: "l"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.7401em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mclose",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.7401em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "−"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "1"
                                          })]
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "1"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0572em"
                                          },
                                          children: "j"
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2861em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "∥"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.8141em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: "2"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mclose",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.8141em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "−"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "1"
                                          })]
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1218em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The heavy tails of the t-distribution alleviate the \"crowding problem\" ? moderate distances in high-dimension are mapped to larger distances in low-dimension, preventing points from collapsing into each other."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization"
      }), ": t-SNE minimizes the Kullback?Leibler divergence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "K"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "L"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "Q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.munder, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      children: "≠"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "log"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "q"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "KL(P \\| Q) = \\sum_{i \\ne j} p_{ij} \\log \\frac{p_{ij}}{q_{ij}}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0715em"
              },
              children: "K"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "P"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "Q"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.5458em",
                verticalAlign: "-1.4382em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.05em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8479em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mrel mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord vbox mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "thinbox mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "rlap mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "strut",
                                      style: {
                                        height: "0.8889em",
                                        verticalAlign: "-0.1944em"
                                      }
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "inner",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mrel mtight",
                                          children: ""
                                        })
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "fix"
                                    })]
                                  })
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace nobreak mtight"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.4382em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "ij"
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mop",
              children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  marginRight: "0.0139em"
                },
                children: "g"
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.1076em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "q"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0572em"
                                            },
                                            children: "ij"
                                          })
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2861em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "p"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.3117em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.55em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0572em"
                                            },
                                            children: "ij"
                                          })
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.2861em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9721em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The asymmetry of KL divergence means t-SNE strongly penalizes putting nearby points far apart (failing to preserve local structure) while being more forgiving of placing distant points close together."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences from PCA"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA is deterministic; t-SNE is stochastic (different runs give different results)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA preserves global variance; t-SNE preserves local neighborhoods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t-SNE output is not suitable as input to downstream models (no out-of-sample mapping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA is much faster and scales to more features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph PCA[\"PCA (Linear)\"]\n        direction LR\n        A1[\"Global variance<br/>maximization\"] --> B1[\"Preserves large<br/>pairwise distances\"]\n        B1 --> C1[\"Deterministic\"]\n        C1 --> D1[\"Fast, O(d?n)\"]\n    end\n    subgraph TSNE[\"t-SNE (Non-linear)\"]\n        direction LR\n        A2[\"Local neighbor<br/>probabilities\"] --> B2[\"Preserves small<br/>pairwise distances\"]\n        B2 --> C2[\"Stochastic\"]\n        C2 --> D2[\"Slow, O(n?)\"]\n    end\n    A1 -.-> A2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "umap-uniform-manifold-approximation-and-projection",
      children: "UMAP (Uniform Manifold Approximation and Projection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UMAP is built on three assumptions from manifold theory and topological data analysis:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data is uniformly sampled from a Riemannian manifold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The manifold is locally connected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The manifold's intrinsic dimension is lower than the embedding dimension"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction"
      }), ": UMAP builds a fuzzy topological representation of the high-dimensional data using a graph of nearest neighbors. Each point is connected to its ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "k"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            })]
          })
        })]
      }), "-nearest neighbors with a weight that depends on the local distance scale. The weight function decays exponentially:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "exp"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "d"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "ρ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: ")"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "w_{ij} = \\exp\\left(-\\frac{\\max(0, d_{ij} - \\rho_i)}{\\sigma_i}\\right)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7167em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0269em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0269em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "ij"
                            })
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.4em",
                verticalAlign: "-0.95em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop",
              children: "exp"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size3",
                  children: "("
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.427em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.314em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "σ"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-r",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3117em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.55em",
                                          marginLeft: "-0.0359em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "i"
                                          })
                                        })]
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.15em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.677em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mop",
                              children: "max"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "0"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mpunct",
                              children: ","
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-r",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3117em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.55em",
                                          marginLeft: "0em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.0572em"
                                              },
                                              children: "ij"
                                            })
                                          })
                                        })]
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2861em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "ρ"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-r",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3117em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.55em",
                                          marginLeft: "0em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "i"
                                          })
                                        })]
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.15em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.836em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size3",
                  children: ")"
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "ρ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\rho_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.625em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "ρ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is the distance to the nearest neighbor of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6595em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            })]
          })
        })]
      }), ", and ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0359em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is chosen so the sum of weights equals ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "log"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\log_2(k)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mop",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                  style: {
                    marginRight: "0.0139em"
                  },
                  children: "g"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.207em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.4559em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2441em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedding"
      }), ": UMAP minimizes the cross-entropy between the high-dimensional fuzzy set representation and the low-dimensional analog:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "E"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "A"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "B"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.munder, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      children: "≠"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "["
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "log"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⁡"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "b"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "log"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⁡"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "a"
                          }), (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "b"
                          }), (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "]"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "CE(A, B) = \\sum_{i \\ne j} \\left[ a_{ij} \\log\\left(\\frac{a_{ij}}{b_{ij}}\\right) + (1 - a_{ij}) \\log\\left(\\frac{1 - a_{ij}}{1 - b_{ij}}\\right) \\right]"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0715em"
              },
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0576em"
              },
              children: "E"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0502em"
              },
              children: "B"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.8882em",
                verticalAlign: "-1.4382em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.05em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8479em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mrel mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord vbox mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "thinbox mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "rlap mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "strut",
                                      style: {
                                        height: "0.8889em",
                                        verticalAlign: "-0.1944em"
                                      }
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "inner",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mrel mtight",
                                          children: ""
                                        })
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "fix"
                                    })]
                                  })
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace nobreak mtight"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel mtight",
                              children: "="
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.4382em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size3",
                  children: "["
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0572em"
                                },
                                children: "ij"
                              })
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                  style: {
                    marginRight: "0.0139em"
                  },
                  children: "g"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "minner",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size3",
                    children: "("
                  })
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.1076em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.314em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "b"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0572em"
                                                },
                                                children: "ij"
                                              })
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.2861em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.677em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "a"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0572em"
                                                },
                                                children: "ij"
                                              })
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.2861em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9721em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size3",
                    children: ")"
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0572em"
                                },
                                children: "ij"
                              })
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                  style: {
                    marginRight: "0.0139em"
                  },
                  children: "g"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "minner",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size3",
                    children: "("
                  })
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.3214em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.314em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "b"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0572em"
                                                },
                                                children: "ij"
                                              })
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.2861em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              })]
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.677em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "a"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0572em"
                                                },
                                                children: "ij"
                                              })
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.2861em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              })]
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9721em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size3",
                    children: ")"
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size3",
                  children: "]"
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first term encourages preserving the presence of edges (local structure), while the second term encourages preserving the absence of edges (global structure)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison with t-SNE"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "t-SNE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UMAP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n^2)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), " ? slow on large datasets"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\log n)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                      style: {
                        marginRight: "0.0139em"
                      },
                      children: "g"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), " with approximate neighbors"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poorly preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better preserved (second term in loss)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles above 100K points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles millions of points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to perplexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robust to n_neighbors choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ? multiple runs differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes ? fixed seed gives same output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-selection-methods",
      children: "Feature Selection Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike feature extraction (PCA, autoencoders), feature selection retains the original features, preserving interpretability."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Filter Methods"
      }), " (pre-model, univariate):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance Threshold"
        }), ": Remove features whose variance falls below a threshold. A feature with near-zero variance contains almost no information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chi-Square Test"
        }), ": For categorical targets, measure independence between each feature and the target. Features with the highest ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "χ"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\chi^2"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0085em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "χ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })
          })]
        }), " statistic are most relevant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutual Information"
        }), ": Measures dependency between feature and target without assuming linearity:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "I"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ";"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "Y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.munder, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "∈"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.munder, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "∈"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "Y"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "log"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      separator: "true",
                      children: ","
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "I(X; Y) = \\sum_{x \\in X} \\sum_{y \\in Y} p(x,y) \\log \\frac{p(x,y)}{p(x)p(y)}"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "I"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ";"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.2222em"
              },
              children: "Y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.8574em",
                verticalAlign: "-1.4304em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.05em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8557em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mrel mtight",
                            children: "∈"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0785em"
                            },
                            children: "X"
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.3217em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.05em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8557em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0359em"
                            },
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mrel mtight",
                            children: "∈"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.2222em"
                            },
                            children: "Y"
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.4304em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mop",
              children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  marginRight: "0.0139em"
                },
                children: "g"
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen nulldelimiter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mfrac",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.427em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.0359em"
                            },
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mopen",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mpunct",
                            children: ","
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.0359em"
                            },
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.936em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wrapper Methods"
      }), " (model-dependent, iterative):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive Feature Elimination (RFE)"
        }), ": Train a model, rank features by importance, remove the weakest, and repeat. The optimal subset is found by searching the feature space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward Selection"
        }), ": Start with zero features, iteratively add the feature that most improves the model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Elimination"
        }), ": Start with all features, iteratively remove the feature whose removal least degrades performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedded Methods"
      }), " (regularization during training):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lasso (L1 Regularization)"
        }), ": Forces less important feature coefficients to zero:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.munder, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "min"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "α"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\min_w \\|y - Xw\\|_2^2 + \\alpha \\|w\\|_1"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.45em",
                verticalAlign: "-0.7em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.6679em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-2.4em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal mtight",
                          style: {
                            marginRight: "0.0269em"
                          },
                          children: "w"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop",
                          children: "min"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.7em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "−"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.1141em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8641em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "+"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0037em"
              },
              children: "α"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree-based Importance"
        }), ": Random Forests and Gradient Boosted Trees compute feature importance scores from how often a feature is used for splitting and how much it reduces impurity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Filter[\"Filter Methods\"]\n        F1[\"Variance<br/>Threshold\"] --> F2[\"Chi-Square\"] --> F3[\"Mutual<br/>Information\"]\n    end\n    subgraph Wrapper[\"Wrapper Methods\"]\n        W1[\"RFE\"] --> W2[\"Forward<br/>Selection\"] --> W3[\"Backward<br/>Elimination\"]\n    end\n    subgraph Embedded[\"Embedded Methods\"]\n        E1[\"Lasso<br/>(L1)\"] --> E2[\"Tree<br/>Importance\"] --> E3[\"Elastic Net\"]\n    end\n    Filter --> Wrapper --> Embedded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoencoders-for-non-linear-dimensionality-reduction",
      children: "Autoencoders for Non-linear Dimensionality Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An autoencoder is a neural network trained to reconstruct its input through a bottleneck layer of lower dimension."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encoder"
        }), ": Compresses the input ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in \\mathbb{R}^d"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8491em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8491em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "d"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " through one or more hidden layers to a latent code ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z \\in \\mathbb{R}^k"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8491em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8491em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0315em"
                              },
                              children: "k"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≪"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k \\ll d"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7335em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≪"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })]
          })]
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "z = f_e(x) = \\sigma_e(W_e x + b_e)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.044em"
              },
              children: "z"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1076em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "e"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0359em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "e"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "e"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "+"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "b"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "e"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bottleneck"
          }), ": The latent code ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsx)(_components.mi, {
                      children: "z"
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "z"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.4306em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.044em"
                  },
                  children: "z"
                })]
              })
            })]
          }), " is the reduced-dimension representation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decoder"
          }), ": Reconstructs ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "^"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\hat{x}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6944em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord accent",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6944em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "x"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "accent-body",
                            style: {
                              left: "-0.2222em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "^"
                            })
                          })]
                        })]
                      })
                    })
                  })
                })]
              })
            })]
          }), " from ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsx)(_components.mi, {
                      children: "z"
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "z"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.4306em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.044em"
                  },
                  children: "z"
                })]
              })
            })]
          }), ":"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.mover, {
                  accent: "true",
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "^"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{x} = f_d(z) = \\sigma_d(W_d z + b_d)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord accent",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "vlist-t",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  })
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1076em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "d"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.044em"
              },
              children: "z"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0359em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "d"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.1389em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "d"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.044em"
              },
              children: "z"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "+"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "b"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "d"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model minimizes reconstruction error:"
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "script",
                  children: "L"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsxs)(_components.mover, {
                  accent: "true",
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "^"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mover, {
                  accent: "true",
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "^"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathcal{L}(x, \\hat{x}) = \\|x - \\hat{x}\\|_2^2"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathcal",
              children: "L"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord accent",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "vlist-t",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  })
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "−"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.1141em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord accent",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "vlist-t",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  })
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8641em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.113em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With linear activation functions (", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "σ"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "σ"
            })]
          })
        })]
      }), " = identity) and mean squared error loss, the autoencoder learns the same subspace as PCA. The advantage comes from non-linear activations, which allow the network to unfold curved manifolds ? something PCA cannot capture."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variants"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denoising Autoencoder"
        }), ": Corrupt input during training; forces robust latent representations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variational Autoencoder (VAE)"
        }), ": Regularizes the latent space to follow a prior distribution, enabling generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stacked Autoencoder"
        }), ": Multiple hidden layers for hierarchical feature learning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/machine-learning/ch09-pca.png",
        alt: "PCA Process"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " PCA reduces dimensionality by projecting data onto orthogonal axes of maximum variance, effectively compressing information while preserving the most meaningful structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always standardize your data (zero mean, unit variance) before applying PCA. If features are on different scales, the components will be dominated by the features with the largest absolute values rather than the most informative ones."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The explained variance ratio is your guide to choosing the number of components. Plot the cumulative explained variance and look for the point where the curve flattens ? this is your \"variance elbow.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " PCA assumes linear relationships between features. If your data lies on a non-linear manifold (e.g., a curved surface), t-SNE or UMAP will produce more meaningful low-dimensional representations than PCA."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-pca-on-iris-dataset-typescript",
      children: "Example 1: PCA on Iris Dataset (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reducing 4 dimensions to 2 using a custom PCA implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * StandardScaler ? centers and scales each feature to unit variance.\n */\nclass StandardScaler {\n  private means: number[] = [];\n  private stds: number[] = [];\n\n  fitTransform(data: number[][]): number[][] {\n    const n = data.length;\n    const d = data[0].length;\n\n    for (let j = 0; j < d; j++) {\n      const col = data.map(row => row[j]);\n      const mean = col.reduce((a, b) => a + b) / n;\n      const variance = col.reduce((sum, v) => sum + (v - mean) ** 2, 0) / (n - 1);\n      this.means.push(mean);\n      this.stds.push(Math.sqrt(variance));\n    }\n\n    return data.map(row =>\n      row.map((val, j) => (val - this.means[j]) / this.stds[j])\n    );\n  }\n}\n\n/**\n * PCA ? principal component analysis via covariance eigendecomposition.\n */\nclass PCA {\n  private components: number[][] = [];\n  private explainedVariance: number[] = [];\n  private mean: number[] = [];\n\n  fit(data: number[][], k: number): void {\n    const n = data.length;\n    const d = data[0].length;\n\n    // 1. Center the data\n    this.mean = Array(d).fill(0);\n    for (let j = 0; j < d; j++) {\n      this.mean[j] = data.reduce((s, row) => s + row[j], 0) / n;\n    }\n    const centered = data.map(row => row.map((v, j) => v - this.mean[j]));\n\n    // 2. Compute covariance matrix (d x d)\n    const cov = Array.from({ length: d }, () => Array(d).fill(0));\n    for (let i = 0; i < d; i++) {\n      for (let j = i; j < d; j++) {\n        let c = 0;\n        for (let r = 0; r < n; r++) {\n          c += centered[r][i] * centered[r][j];\n        }\n        cov[i][j] = c / (n - 1);\n        cov[j][i] = cov[i][j];\n      }\n    }\n\n    // 3. Power iteration to find top-k eigenvectors\n    this.components = [];\n    this.explainedVariance = [];\n    let residual = cov.map(row => [...row]);\n\n    for (let pc = 0; pc < k; pc++) {\n      let v = Array(d).fill(1).map(() => Math.random());\n      for (let iter = 0; iter < 100; iter++) {\n        const w = Array(d).fill(0);\n        for (let i = 0; i < d; i++) {\n          for (let j = 0; j < d; j++) {\n            w[i] += residual[i][j] * v[j];\n          }\n        }\n        const norm = Math.sqrt(w.reduce((s, x) => s + x * x, 0));\n        v = w.map(x => x / norm);\n      }\n      this.components.push(v);\n\n      // Rayleigh quotient: eigenvalue = v^T cov v\n      let eig = 0;\n      for (let i = 0; i < d; i++) {\n        for (let j = 0; j < d; j++) {\n          eig += v[i] * cov[i][j] * v[j];\n        }\n      }\n      this.explainedVariance.push(eig);\n\n      // Deflate: remove this component from residual\n      for (let i = 0; i < d; i++) {\n        for (let j = 0; j < d; j++) {\n          residual[i][j] -= eig * v[i] * v[j];\n        }\n      }\n    }\n  }\n\n  transform(data: number[][], k: number): number[][] {\n    const centered = data.map(row => row.map((v, j) => v - this.mean[j]));\n    return centered.map(row =>\n      this.components.slice(0, k).map(pc =>\n        pc.reduce((s, c, i) => s + c * row[i], 0)\n      )\n    );\n  }\n\n  explainedVarianceRatio(): number[] {\n    const total = this.explainedVariance.reduce((a, b) => a + b);\n    return this.explainedVariance.map(v => v / total);\n  }\n}\n\n// --- Iris simulation: 4 features, 150 samples ---\nconst X: number[][] = Array.from({ length: 150 }, () =>\n  Array.from({ length: 4 }, () => Math.random() * 10)\n);\n\nconst scaler = new StandardScaler();\nconst X_scaled = scaler.fitTransform(X);\n\nconst pca = new PCA();\npca.fit(X_scaled, 2);\nconst X_pca = pca.transform(X_scaled, 2);\n\nconst ratios = pca.explainedVarianceRatio();\nconsole.log(`Original shape: 150 x 4`);\nconsole.log(`Reduced shape: ${X_pca.length} x ${X_pca[0].length}`);\nconsole.log(`Explained variance: [${ratios.map(r => r.toFixed(3)).join(', ')}]`);\nconsole.log(`Cumulative: ${ratios.reduce((a, b) => a + b).toFixed(3)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": The 4D Iris-like data is reduced to 2D, with the first two components typically explaining over 90% of variance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-reconstructing-an-image-with-pca-typescript",
      children: "Example 2: Reconstructing an Image with PCA (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using PCA to compress and reconstruct an image (conceptual digit recognition example)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Reconstruct an image from its top-k principal components.\n * Demonstrates lossy compression quality vs. component count.\n */\nfunction reconstructImage(\n  pixels: number[][],\n  pca: PCA,\n  k: number\n): number[][] {\n  // Project then inverse-project\n  const projected = pca.transform(pixels, k);\n  const reconstructed = projected.map(row => {\n    const reconstructed: number[] = [];\n    for (let j = 0; j < pixels[0].length; j++) {\n      let val = 0;\n      for (let pc = 0; pc < k; pc++) {\n        val += row[pc] * pca.components[pc][j];\n      }\n      reconstructed.push(val);\n    }\n    return reconstructed;\n  });\n  return reconstructed;\n}\n\n// Simulate: 8x8 digit (64 pixel features), 100 samples\nconst digitPixels: number[][] = Array.from({ length: 100 }, () =>\n  Array.from({ length: 64 }, () => Math.random() * 255)\n);\n\nconst imagePca = new PCA();\nimagePca.fit(digitPixels, 64);\nconst ratios = imagePca.explainedVarianceRatio();\n\n// Measure how many components preserve 95% variance\nlet cumulative = 0;\nlet k95 = 0;\nfor (let i = 0; i < ratios.length; i++) {\n  cumulative += ratios[i];\n  if (cumulative >= 0.95) { k95 = i + 1; break; }\n}\n\nconsole.log(`Components for 95% variance: ${k95}`);\nconsole.log(`Compression ratio: ${(64 / k95).toFixed(1)}x`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": With 64 features, typically only 6?10 components are needed for 95% variance ? achieving 6?10x compression."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-eigenfaces--face-recognition-via-pca",
      children: "Example 3: Eigenfaces ? Face Recognition via PCA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Eigenfaces method applies PCA to a database of face images. Each face image (e.g., ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "100"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "×"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "100"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "100 \\times 100"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "100"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "×"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6444em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "100"
            })]
          })]
        })]
      }), " pixels = 10,000 dimensions) is flattened into a vector. PCA identifies the principal axes of the face space ? the \"eigenfaces\" ? which capture the most significant variations among faces (lighting, expression, facial hair, glasses)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recognition pipeline"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Flatten all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "m"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              })]
            })
          })]
        }), " training face images into a matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "m"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X \\in \\mathbb{R}^{m \\times p}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7224em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7713em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbb",
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.7713em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "m"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "×"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "p"
                              })]
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "width"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "height"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "p = \\text{width} \\times \\text{height}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7778em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "width"
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "×"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "height"
                })
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform PCA on ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), ", keeping ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " components (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≪"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k \\ll p"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7335em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≪"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              })]
            })]
          })]
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Project each training face into the ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), "-dimensional face space"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a new face, project it using the same components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify by nearest neighbor in the reduced face space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": 10,000 pixel dimensions reduce to 20?100 eigenface coefficients while maintaining >90% recognition accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-feature-selection-for-high-dimensional-genomic-data",
      children: "Example 4: Feature Selection for High-Dimensional Genomic Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A genomic dataset has 20,000 gene expression features but only 200 patient samples. Overfitting is guaranteed with standard classifiers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface GeneDataset {\n  expression: number[][]; // 200 x 20000\n  labels: number[];       // 200\n}\n\n/**\n * Wrapper-based RFE: recursively eliminates least important features.\n */\nfunction recursiveFeatureElimination(\n  data: GeneDataset,\n  nFeatures: number\n): number[] {\n  const n = data.expression.length;\n  const d = data.expression[0].length;\n  let selected = Array.from({ length: d }, (_, i) => i);\n\n  while (selected.length > nFeatures) {\n    // Train a simple classifier on selected features\n    // Compute importance scores via absolute correlation with labels\n    const scores = selected.map(f => {\n      const col = data.expression.map(row => row[f]);\n      const meanX = col.reduce((a, b) => a + b) / n;\n      const meanY = data.labels.reduce((a, b) => a + b) / n;\n      let num = 0, denomX = 0, denomY = 0;\n      for (let i = 0; i < n; i++) {\n        num += (col[i] - meanX) * (data.labels[i] - meanY);\n        denomX += (col[i] - meanX) ** 2;\n        denomY += (data.labels[i] - meanY) ** 2;\n      }\n      return Math.abs(num / Math.sqrt(denomX * denomY));\n    });\n\n    // Remove the weakest feature\n    const minIdx = scores.indexOf(Math.min(...scores));\n    selected.splice(minIdx, 1);\n  }\n\n  return selected;\n}\n\nconst genome: GeneDataset = {\n  expression: Array.from({ length: 200 }, () =>\n    Array.from({ length: 20000 }, () => Math.random())\n  ),\n  labels: Array.from({ length: 200 }, () => Math.round(Math.random()))\n};\n\nconst topFeatures = recursiveFeatureElimination(genome, 50);\nconsole.log(`Selected ${topFeatures.length} features from 20,000`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": From 20,000 genes, RFE selects 50 biomarkers that are most predictive of the disease. Model performance improves dramatically because the 50-dimensional space has reasonable density for 200 samples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " PCA compresses correlated features into principal components; t-SNE/UMAP visualize non-linear structure; feature selection preserves interpretability ? choose the right tool for the task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear transformation maximizing variance in orthogonal directions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global structure preservation; fast and deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessing, noise reduction, feature extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear embedding preserving local pairwise distances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures local neighborhood structure; stochastic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualization of high-dimensional data in 2D/3D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear embedding based on manifold theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than t-SNE; preserves more global structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale visualization, exploratory analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chooses a subset of original features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains interpretability; features remain unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When model interpretability is critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates new features from combinations of originals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces dimensionality but loses original meaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When features are highly correlated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SVD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Matrix factorization method: ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "U"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "Σ"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "V"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "X = U\\Sigma V^T"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8413em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "U"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Σ"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.2222em"
                      },
                      children: "V"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  })]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally stable; works on the data matrix directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numerical implementation of PCA; handles sparse data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autoencoders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network that learns compressed representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear dimensionality reduction; requires training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex high-dimensional data (images, text embeddings)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lasso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1-regularized regression for embedded selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinks coefficients to zero automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretable models with automatic feature selection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula / Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "Σ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "μ"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "μ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\Sigma = \\frac{1}{n-1} (X - \\mu)^T (X - \\mu)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2484em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0913em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "μ"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mclose",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "μ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCA Objective"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maximize ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "v"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "Σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\mathbf{v}^T \\Sigma \\mathbf{v}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8413em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathbf",
                      style: {
                        marginRight: "0.016em"
                      },
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "v"
                  })]
                })
              })]
            }), " subject to ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\|\\mathbf{v}\\| = 1"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6444em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eigenvalue Equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "Σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "λ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\Sigma \\mathbf{v} = \\lambda \\mathbf{v}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "λ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "v"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explained Variance Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "λ"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "j"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "="
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "1"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "d"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "λ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{\\lambda_i}{\\sum_{j=1}^{d} \\lambda_j}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.6537em",
                      verticalAlign: "-0.7574em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8962em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.5648em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mop mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mop op-symbol small-op mtight",
                                      style: {
                                        position: "relative",
                                        top: "0em"
                                      },
                                      children: "∑"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.8932em"
                                            },
                                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.1786em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "mord mtight",
                                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mathnormal mtight",
                                                    style: {
                                                      marginRight: "0.0572em"
                                                    },
                                                    children: "j"
                                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mrel mtight",
                                                    children: "="
                                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "1"
                                                  })]
                                                })
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.8971em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mathnormal mtight",
                                                    children: "d"
                                                  })
                                                })
                                              })]
                                            })]
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.4603em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mspace mtight",
                                    style: {
                                      marginRight: "0.1952em"
                                    }
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "λ"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  style: {
                                                    marginRight: "0.0572em"
                                                  },
                                                  children: "j"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.2819em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.4101em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "λ"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "i"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7574em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "X"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "reduced"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "W"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "X_{\\text{reduced}} = X W_k"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0785em"
                      },
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0785em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "reduced"
                                    })
                                  })
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.1389em"
                      },
                      children: "W"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.1389em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0315em"
                                  },
                                  children: "k"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "W"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "W_k"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.1389em"
                      },
                      children: "W"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.1389em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0315em"
                                  },
                                  children: "k"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })
              })]
            }), " has top ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "k"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0315em"
                    },
                    children: "k"
                  })]
                })
              })]
            }), " eigenvectors"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "X"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "approx"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "X"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "reduced"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "W"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "X_{\\text{approx}} = X_{\\text{reduced}} W_k^T"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.9694em",
                      verticalAlign: "-0.2861em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0785em"
                      },
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0785em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "approx"
                                    })
                                  })
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2861em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1244em",
                      verticalAlign: "-0.2831em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0785em"
                      },
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0785em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "reduced"
                                    })
                                  })
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.1389em"
                      },
                      children: "W"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4169em",
                                marginLeft: "-0.1389em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0315em"
                                  },
                                  children: "k"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2831em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SVD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "X"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "×"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "U"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "×"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "Σ"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "×"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "V"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "×"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "X_{n \\times d} = U_{n \\times n} \\Sigma_{n \\times d} V^T_{d \\times d}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8917em",
                      verticalAlign: "-0.2083em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0785em"
                      },
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0785em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "×"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "d"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2083em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1828em",
                      verticalAlign: "-0.3414em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.109em"
                      },
                      children: "U"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2583em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.109em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "×"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2083em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "Σ"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3361em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "×"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "d"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2083em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.2222em"
                      },
                      children: "V"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4169em",
                                marginLeft: "-0.2222em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "d"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "×"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "d"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3414em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            }), "; ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "σ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "λ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sigma_i^2 = n \\cdot \\lambda_i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0728em",
                      verticalAlign: "-0.2587em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0359em"
                      },
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4413em",
                                marginLeft: "-0.0359em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2587em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.4445em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "⋅"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8444em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t-SNE Perplexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typical range: 5?50; controls balance between local and global aspects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UMAP n_neighbors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typical range: 5?100; controls balance between local and global structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autoencoder Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "script",
                        children: "L"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∥"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\mathcal{L} = \\frac{1}{n}\\sum_i \\|x_i - \\hat{x}_i\\|_2^2"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathcal",
                    children: "L"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1901em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.162em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord accent",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.6944em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "x"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "accent-body",
                                style: {
                                  left: "-0.2222em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "^"
                                })
                              })]
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4519em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2481em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lasso Objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "min"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∥"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "α"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∥"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\min_w \\|y - Xw\\|_2^2 + \\alpha\\|w\\|_1"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop",
                      children: "min"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0269em"
                                  },
                                  children: "w"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4519em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2481em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0037em"
                    },
                    children: "α"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3011em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Dimensionality Reduction Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Genomics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene expression analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA reduces thousands of gene dimensions to visualize patient clusters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portfolio risk modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA identifies principal risk factors from correlated asset returns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Language Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic modeling, document embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncated SVD on TF-IDF matrices (LSA) for semantic space discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computer Vision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face recognition (Eigenfaces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA on pixel space creates \"face space\" for efficient recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise reduction, compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA separates signal from noise by discarding low-variance components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaborative filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVD-based matrix factorization predicts user-item preferences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical imaging analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCA on MRI/CT scans reduces dimensionality for faster diagnosis models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein structure analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoencoders learn latent representations of molecular conformations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction error in PCA/autoencoder flags anomalous data points"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-pca-t-sne-similarity-and-explained-variance",
      children: "TypeScript Implementation: PCA, t-SNE Similarity, and Explained Variance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PCA {\n    private components: number[][] = [];\n    private mean: number[] = [];\n    private explainedVariance: number[] = [];\n    private explainedVarianceRatio: number[] = [];\n\n    fit(data: number[][]): void {\n        const n = data.length;\n        const d = data[0].length;\n        this.mean = data[0].map((_, j) => data.reduce((s, row) => s + row[j], 0) / n);\n        const centered = data.map(row => row.map((v, j) => v - this.mean[j]));\n\n        const cov = Array.from({ length: d }, (_, i) =>\n            Array.from({ length: d }, (_, j) =>\n                centered.reduce((s, row) => s + row[i] * row[j], 0) / (n - 1)\n            )\n        );\n\n        const eigen = this.powerIteration(cov, d);\n        this.components = eigen.vectors;\n        this.explainedVariance = eigen.values;\n        const totalVar = this.explainedVariance.reduce((a, b) => a + b, 0);\n        this.explainedVarianceRatio = this.explainedVariance.map(v => v / totalVar);\n    }\n\n    private powerIteration(matrix: number[][], k: number): { values: number[]; vectors: number[][] } {\n        const d = matrix.length;\n        const values: number[] = [];\n        const vectors: number[][] = [];\n\n        let residual = matrix.map(row => [...row]);\n\n        for (let comp = 0; comp < k; comp++) {\n            let v = new Array(d).fill(0).map(() => Math.random());\n            for (let iter = 0; iter < 100; iter++) {\n                let w = new Array(d).fill(0);\n                for (let i = 0; i < d; i++) {\n                    for (let j = 0; j < d; j++) w[i] += residual[i][j] * v[j];\n                }\n                const norm = Math.sqrt(w.reduce((s, val) => s + val * val, 0));\n                v = w.map(val => val / (norm || 1));\n            }\n            vectors.push(v);\n            const eigenvalue = v.reduce((s, vi, i) => s + vi * residual[0].reduce((sum, _, j) => sum + residual[i][j] * v[j], 0), 0);\n            values.push(eigenvalue);\n\n            for (let i = 0; i < d; i++) {\n                for (let j = 0; j < d; j++) {\n                    residual[i][j] -= eigenvalue * v[i] * v[j];\n                }\n            }\n        }\n        return { values, vectors };\n    }\n\n    transform(data: number[][], nComponents: number): number[][] {\n        const centered = data.map(row => row.map((v, j) => v - this.mean[j]));\n        return centered.map(row =>\n            this.components.slice(0, nComponents).map(comp =>\n                row.reduce((s, v, j) => s + v * comp[j], 0)\n            )\n        );\n    }\n\n    getExplainedVarianceRatio(): number[] { return this.explainedVarianceRatio; }\n\n    cumulativeVariance(nComponents: number): number {\n        return this.explainedVarianceRatio.slice(0, nComponents).reduce((a, b) => a + b, 0);\n    }\n}\n\nclass TSNESimilarity {\n    static pairwiseDistances(data: number[][]): number[][] {\n        const n = data.length;\n        return data.map(row1 => data.map(row2 =>\n            Math.sqrt(row1.reduce((s, v, i) => s + (v - row2[i]) ** 2, 0))\n        ));\n    }\n\n    static similarityMatrix(distances: number[][], perplexity: number = 30): number[][] {\n        const n = distances.length;\n        const P: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));\n        for (let i = 0; i < n; i++) {\n            const neighbors = distances[i].map((d, j) => ({ d, j })).filter((_, j) => j !== i).sort((a, b) => a.d - b.d);\n            const sigma = neighbors[Math.min(perplexity, neighbors.length - 1)].d / 2 || 1;\n            let sum = 0;\n            for (let j = 0; j < n; j++) {\n                if (i === j) continue;\n                P[i][j] = Math.exp(-distances[i][j] ** 2 / (2 * sigma * sigma));\n                sum += P[i][j];\n            }\n            for (let j = 0; j < n; j++) {\n                if (i !== j) P[i][j] /= sum || 1;\n            }\n        }\n        for (let i = 0; i < n; i++) {\n            for (let j = 0; j < n; j++) {\n                P[i][j] = (P[i][j] + P[j][i]) / (2 * n);\n            }\n        }\n        return P;\n    }\n\n    static klDivergence(P: number[][], Q: number[][]): number {\n        let kl = 0;\n        for (let i = 0; i < P.length; i++) {\n            for (let j = 0; j < P.length; j++) {\n                if (P[i][j] > 0 && Q[i][j] > 0) {\n                    kl += P[i][j] * Math.log(P[i][j] / Q[i][j]);\n                }\n            }\n        }\n        return kl;\n    }\n}\n\n// Demo\nconst iris3D = [\n    [5.1, 3.5, 1.4], [4.9, 3.0, 1.4], [7.0, 3.2, 4.7],\n    [6.4, 3.2, 4.5], [6.3, 3.3, 6.0], [5.8, 2.7, 5.1]\n];\nconst pca = new PCA();\npca.fit(iris3D);\nconsole.log(\"Explained variance ratio:\", pca.getExplainedVarianceRatio().map(v => v.toFixed(4)));\nconsole.log(\"2D projection:\", pca.transform(iris3D, 2).map(r => r.map(v => v.toFixed(2))));\nconsole.log(\"Cumulative variance (2):\", pca.cumulativeVariance(2).toFixed(4));\n\nconst dist = TSNESimilarity.pairwiseDistances(iris3D);\nconst sim = TSNESimilarity.similarityMatrix(dist, 2);\nconsole.log(\"t-SNE KL divergence (random Q):\", TSNESimilarity.klDivergence(sim, Array.from({ length: 6 }, () => new Array(6).fill(1 / 6))).toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dimensionality reduction\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'dimensionality reduction', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dimensionality reduction - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'dimensionality reduction' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimensionality reduction mitigates the curse of dimensionality and improves model efficiency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCA is a linear technique that finds the directions of maximum variance in the data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Principal components are orthogonal to each other."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The explained variance ratio helps in choosing the optimal number of components."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reducing dimensions can help in data visualization and removing noise from the signal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVD provides the numerically stable implementation for large-scale PCA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t-SNE and UMAP capture non-linear structure ? use them for visualization, not preprocessing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature selection (filter, wrapper, embedded) preserves interpretability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autoencoders extend dimensionality reduction to non-linear manifolds."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always standardize before PCA"
        }), " ? without scaling, features with larger units dominate the principal components regardless of informativeness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the cumulative explained variance plot"
        }), " to choose ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " ? look for the \"elbow\" where adding more components yields diminishing returns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer SVD over eigendecomposition"
        }), " for numerical stability ? SVD avoids computing ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X^T X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), " and works on sparse matrices directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "t-SNE is for visualization only"
        }), " ? the output is stochastic, has no out-of-sample mapping, and distances in t-SNE space are not meaningful."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature selection beats PCA for interpretability"
        }), " ? when stakeholders ask \"which features matter?\", a subset of original columns is far easier to explain than linear combinations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autoencoders handle non-linearity"
        }), " ? if your data lives on a curved manifold (images, text embeddings, molecular structures), a deep autoencoder will outperform PCA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine filter + wrapper for robust selection"
        }), " ? use a cheap filter (variance threshold, chi-square) to cull obvious duds, then apply RFE or forward selection on the remaining candidates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reconstruction error as an anomaly detector"
        }), " ? both PCA and autoencoders produce high reconstruction error on outliers, making them effective unsupervised anomaly detectors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is it important to center and scale the data before performing PCA?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between the first and second principal components?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In what way does PCA act as a \"lossy\" compression technique?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you prefer t-SNE over PCA for visualization?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the Lasso penalty achieve feature selection? Explain the geometry of the L1 constraint."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What makes UMAP faster than t-SNE for large datasets?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what conditions would a linear autoencoder learn a different subspace than PCA?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A dataset has eigenvalues ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\{10, 5, 2, 1\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })
          })]
        }), ". Calculate the percentage of variance explained by the first two principal components."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you have 100 features and you keep 10 principal components, how much compression (as a ratio) have you achieved?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw a 2D plot with points elongated along the line ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y=x"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              })]
            })]
          })]
        }), ". Where would the first principal component point?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A genomics study measures 50,000 gene expressions across 100 patients. You need to find the 30 most relevant genes for a disease classification task. Which feature selection strategy do you recommend and why?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have 1 million 128?128 grayscale images (16,384 pixels each). You must visualize the dataset structure in 2D. Which dimensionality reduction technique would you choose? Justify your answer in terms of scalability and visualization quality."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chiSquareSelection(data, labels, k)"
        }), " function in TypeScript that selects the ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " features with the highest chi-square statistic against a binary label. Use the expected vs. observed contingency table for each feature."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mathematically, PCA can be solved using Singular Value Decomposition (SVD). Explain the relationship between the singular values of the data matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "X"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbf{X}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                children: "X"
              })]
            })
          })]
        }), " and the eigenvalues of the covariance matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbf{X}^T\\mathbf{X}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbf",
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                children: "X"
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prove that for centered data ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), ", the first principal component ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbf{v}_1"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.5944em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbf",
                  style: {
                    marginRight: "0.016em"
                  },
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.016em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " maximizes ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "v"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "X"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "v"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "v"
                      })]
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{\\mathbf{v}^T X^T X \\mathbf{v}}{\\mathbf{v}^T \\mathbf{v}}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.3892em",
                  verticalAlign: "-0.3519em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.0374em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.6481em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathbf mtight",
                                  style: {
                                    marginRight: "0.016em"
                                  },
                                  children: "v"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.7741em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.786em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.1389em"
                                              },
                                              children: "T"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathbf mtight",
                                style: {
                                  marginRight: "0.016em"
                                },
                                children: "v"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.394em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathbf mtight",
                                  style: {
                                    marginRight: "0.016em"
                                  },
                                  children: "v"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.9191em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.931em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.1389em"
                                              },
                                              children: "T"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0785em"
                                  },
                                  children: "X"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.9191em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.931em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.1389em"
                                              },
                                              children: "T"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0785em"
                                },
                                children: "X"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathbf mtight",
                                style: {
                                  marginRight: "0.016em"
                                },
                                children: "v"
                              })]
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3519em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              })]
            })
          })]
        }), ". Show that this leads to the eigenvector equation ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X^T X \\mathbf{v}_1 = \\lambda_1 \\mathbf{v}_1"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9913em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbf",
                  style: {
                    marginRight: "0.016em"
                  },
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.016em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8444em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "λ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbf",
                  style: {
                    marginRight: "0.016em"
                  },
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.016em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of Dimensionality Reduction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " What is the correct order of steps in PCA?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**C)** The correct sequence is: center the data ? compute covariance matrix ? eigen-decomposition ? sort eigenvectors by eigenvalue ? select top K ? project data.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Project data ? compute covariance ? eigen-decomposition ? center data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Compute covariance ? center data ? eigen-decomposition ? select top K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Center data ? compute covariance ? eigen-decomposition ? sort ? select ? project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Select top K ? eigen-decomposition ? project ? compute covariance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " If the first principal component explains 70% of the variance and the second explains 20%, what is the cumulative explained variance of the first two components?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**A)** The cumulative explained variance is the sum: 70% + 20% = 90%. This means 90% of the total variance is captured by the first two components.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 90%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 50%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 70%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 20%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " When would you choose t-SNE over PCA for dimensionality reduction?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**C)** t-SNE excels at preserving local neighborhood structure in data that lies on non-linear manifolds, making it superior for visualizing complex high-dimensional data like word embeddings or image features.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When you need a deterministic, reproducible transformation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When you need to use the reduced features as input to a model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When visualizing non-linear structure in high-dimensional data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When working with small datasets only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Which statement correctly describes the relationship between SVD and PCA?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** The right singular vectors $V$ from SVD of the centered data matrix are exactly the principal components (eigenvectors of the covariance matrix). The singular values squared equal the eigenvalues scaled by $n-1$.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) SVD and PCA are unrelated ? they solve different optimization problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) The right singular vectors of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), " equal the eigenvectors of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X^T X"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              })]
            })
          })]
        }), ", linking SVD directly to PCA"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) SVD is only applicable to square matrices, so it cannot be used for PCA on rectangular data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) PCA requires the covariance matrix, while SVD requires the correlation matrix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " A dataset lies on a spiral manifold in 3D space. Which technique will produce the most meaningful 2D visualization?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**D)** A spiral is a non-linear manifold ? PCA would flatten it and destroy the spiral structure. t-SNE preserves local neighborhood order along the spiral, revealing the true geometry.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) PCA ? it captures global variance best"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Linear autoencoder ? it reconstructs with the lowest error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Feature selection ? it picks the two most informative original axes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) t-SNE ? it preserves local neighborhood structure on non-linear manifolds"
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