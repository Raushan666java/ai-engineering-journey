"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10435],{

/***/ 10171
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_08_unsupervised_learning_md_c6a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-08-unsupervised-learning-md-c6a.json
const site_docs_courses_machine_learning_08_unsupervised_learning_md_c6a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/08-unsupervised-learning","title":"Chapter 8: Unsupervised Learning","description":"Previous Dimensionality Reduction","source":"@site/docs/courses/machine-learning/08-unsupervised-learning.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/08-unsupervised-learning","permalink":"/ai-engineering-journey/machine-learning/08-unsupervised-learning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-unsupervised-learning","slug":"/machine-learning/08-unsupervised-learning","title":"Chapter 8: Unsupervised Learning","sidebar_label":"Chapter 8: Unsupervised Learning","sidebar_position":8},"sidebar":"course-machine-learning","previous":{"title":"Chapter 7: Neural Networks","permalink":"/ai-engineering-journey/machine-learning/07-neural-networks"},"next":{"title":"Chapter 9: Dimensionality Reduction","permalink":"/ai-engineering-journey/machine-learning/09-dimensionality-reduction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/08-unsupervised-learning.md


const frontMatter = {
	id: '08-unsupervised-learning',
	slug: '/machine-learning/08-unsupervised-learning',
	title: 'Chapter 8: Unsupervised Learning',
	sidebar_label: 'Chapter 8: Unsupervised Learning',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Unsupervised Learning';

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
  "value": "What is Unsupervised Learning?",
  "id": "what-is-unsupervised-learning",
  "level": 3
}, {
  "value": "K-means Clustering",
  "id": "k-means-clustering",
  "level": 3
}, {
  "value": "K-means++ Initialization",
  "id": "k-means-initialization",
  "level": 3
}, {
  "value": "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
  "id": "dbscan-density-based-spatial-clustering-of-applications-with-noise",
  "level": 3
}, {
  "value": "Gaussian Mixture Models (GMM)",
  "id": "gaussian-mixture-models-gmm",
  "level": 3
}, {
  "value": "Cluster Validation",
  "id": "cluster-validation",
  "level": 3
}, {
  "value": "Feature Scaling for Clustering",
  "id": "feature-scaling-for-clustering",
  "level": 3
}, {
  "value": "Curse of Dimensionality for Clustering",
  "id": "curse-of-dimensionality-for-clustering",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: K-means for Customer Segmentation with K-means++",
  "id": "example-1-k-means-for-customer-segmentation-with-k-means",
  "level": 3
}, {
  "value": "Example 2: Silhouette Score Calculator",
  "id": "example-2-silhouette-score-calculator",
  "level": 3
}, {
  "value": "Example 3: Anomaly Detection with DBSCAN Concept",
  "id": "example-3-anomaly-detection-with-dbscan-concept",
  "level": 3
}, {
  "value": "Example 4: Market Segmentation Report Generation",
  "id": "example-4-market-segmentation-report-generation",
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
  "value": "TypeScript Implementation: K-Means, DBSCAN, and Silhouette Score",
  "id": "typescript-implementation-k-means-dbscan-and-silhouette-score",
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
    header: "header",
    hr: "hr",
    li: "li",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msqrt: "msqrt",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    summary: "summary",
    svg: "svg",
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
        id: "chapter-8-unsupervised-learning",
        children: "Chapter 8: Unsupervised Learning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/07-neural-networks",
          children: "Neural Networks"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/09-dimensionality-reduction",
          children: "Dimensionality Reduction"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Unsupervised Learning and identify its common use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze the K-means Clustering algorithm with K-means++ initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Hierarchical Clustering and interpret Dendrograms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand DBSCAN density-based clustering and noise point identification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Gaussian Mixture Models for soft clustering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate clustering performance using silhouette score, Davies-Bouldin index, and Calinski-Harabasz index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize the curse of dimensionality and feature scaling effects on clustering"
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
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models find patterns in data without labeled targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for customer segmentation, anomaly detection, and exploratory analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-means Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitions data into K groups by minimizing within-cluster distances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always scale features first; use K-means++ initialization and the Elbow Method to choose K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds a tree of clusters without pre-specifying K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dendrograms provide visual insight into cluster relationships at multiple granularities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dendrogram Interpretation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch lengths show dissimilarity between merged clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut the dendrogram at a chosen height to get any desired number of clusters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Density-based clustering that identifies noise points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not require K; handles arbitrary shapes and outliers naturally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian Mixture Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic soft clustering via the EM algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when points may belong to multiple clusters with varying membership probabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal metrics (silhouette score, Davies-Bouldin) vs. external metrics (adjusted Rand index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer silhouette score when ground truth labels are unavailable; lower Davies-Bouldin is better"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-means Limitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes spherical clusters of equal size; sensitive to outliers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DBSCAN or GMM for non-spherical or overlapping cluster shapes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Unlabeled Data] --> B[Preprocess: Scale Features]\n    B --> C{Choose Algorithm}\n    C --> D{K-means or Hierarchical?}\n    D --> E[K-means: K-means++ Init]\n    D --> F[Hierarchical: Choose Linkage]\n    D --> G[DBSCAN: Choose eps & minPts]\n    D --> H[GMM: Choose N Components]\n    E --> I[Assign Points to Nearest Centroid]\n    I --> J[Update Centroids]\n    J --> K{Converged?}\n    K -- No --> I\n    K -- Yes --> L[Evaluate Clusters]\n    F --> M[Compute Distance Matrix]\n    M --> N[Merge Closest Clusters]\n    N --> O{Dendrogram Complete?}\n    O -- No --> N\n    O -- Yes --> L\n    G --> P[Label Core, Border, Noise Points]\n    P --> L\n    H --> Q[Expectation Step: Compute Responsibilities]\n    Q --> R[Maximization Step: Update Parameters]\n    R --> S{Log-Likelihood Converged?}\n    S -- No --> Q\n    S -- Yes --> L\n    L --> T[Interpret Results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-unsupervised-learning",
      children: "What is Unsupervised Learning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupervised Learning involves training models on data that does not have explicit labels or targets. The goal is to discover underlying structures, patterns, or groupings within the data. Unlike supervised learning, there is no \"correct\" answer to compare against; instead, we look for data-driven insights. Common use cases include customer segmentation, anomaly detection, dimensionality reduction, and exploratory data analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "k-means-clustering",
      children: "K-means Clustering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["K-means is a popular centroid-based clustering algorithm. It partitions ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "n"
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
              children: "n"
            })]
          })
        })]
      }), " observations into ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "K"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "K"
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
                marginRight: "0.0715em"
              },
              children: "K"
            })]
          })
        })]
      }), " clusters, where each observation belongs to the cluster with the nearest mean (centroid)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), ": Choose ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
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
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " initial centroids."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign"
        }), ": Assign each data point to the nearest centroid based on Euclidean distance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update"
        }), ": Calculate the mean of all points assigned to each cluster and move the centroid to this new mean."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), ": Steps 2 and 3 until the centroids no longer move significantly (convergence) or a maximum number of iterations is reached."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing K"
      }), ": The \"Elbow Method\" is often used, where we plot the Within-Cluster Sum of Squares (WCSS) against different values of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "K"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "K"
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
                marginRight: "0.0715em"
              },
              children: "K"
            })]
          })
        })]
      }), " and look for the \"elbow\" point where adding more clusters provides diminishing returns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "k-means-initialization",
      children: "K-means++ Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard K-means initializes centroids randomly, which can lead to poor convergence or suboptimal local minima. K-means++ provides a smarter initialization that spreads out the initial centroids:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the first centroid uniformly at random from the data points."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each remaining point ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x"
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
                children: "x"
              })]
            })
          })]
        }), ", compute ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D(x)"
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
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ", the distance to the nearest already-chosen centroid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select the next centroid with probability proportional to ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D(x)^2"
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
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
        }), " (weighted random selection)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat steps 2-3 until all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
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
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " centroids are chosen."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This weighted selection ensures that centroids are spread across the dataset, reducing the chance of initial centroids clumping together. K-means++ is the default initialization in most modern implementations (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KMeans(init='k-means++')"
      }), " in scikit-learn)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Start: K centroids needed] --> B[Pick 1st centroid uniformly at random]\n    B --> C[For each remaining point x, compute Dx: distance to nearest chosen centroid]\n    C --> D[Select next centroid with probability ? Dx?]\n    D --> E{K centroids chosen?}\n    E -- No --> C\n    E -- Yes --> F[Run standard K-means with these centroids]\n    F --> G[Converge faster and to better minima]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dbscan-density-based-spatial-clustering-of-applications-with-noise",
      children: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DBSCAN groups points that are closely packed together, marking points in low-density regions as noise. It does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " require specifying K in advance and can discover arbitrarily shaped clusters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["eps (", (0,jsx_runtime.jsxs)(_components.span, {
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
          }), ")"]
        }), ": The maximum distance between two points for them to be considered neighbors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "minPts"
        }), ": The minimum number of points required to form a dense region (typically ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\ge"
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
                  height: "0.7719em",
                  verticalAlign: "-0.136em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≥"
              })]
            })
          })]
        }), " dimensionality ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "+ 1"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              })]
            })
          })]
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Point Types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Point"
        }), ": A point with at least ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minPts"
        }), " points within distance ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eps"
        }), " (including itself)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Border Point"
        }), ": A point within distance ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eps"
        }), " of a core point but with fewer than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minPts"
        }), " neighbors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Noise Point"
        }), ": A point that is neither a core point nor reachable from any core point."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each point, find all neighbors within ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eps"
        }), " distance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Label points with ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\ge"
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
                  height: "0.7719em",
                  verticalAlign: "-0.136em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≥"
              })]
            })
          })]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minPts"
        }), " neighbors as core points."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Form clusters by connecting core points that are within ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eps"
        }), " of each other."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign border points to the nearest core point's cluster."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark remaining unassigned points as noise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Unlabeled Points] --> B[For each point, find eps-neighborhood]\n    B --> C{Neighbors = minPts?}\n    C -- Yes --> D[Label as Core Point]\n    C -- No --> E{Adjacent to a Core Point?}\n    E -- Yes --> F[Label as Border Point, assign to cluster]\n    E -- No --> G[Label as Noise Point]\n    D --> H[Connect core points within eps of each other]\n    H --> I[Form clusters from connected core + border points]\n    G --> J[Noise remains unlabeled]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"eps-neighborhood\"\n        A[Core<br/>Point] --- B[Border<br/>Point]\n        C[Noise<br/>Point]\n    end\n    A -->|within eps| B\n    A x--x C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gaussian-mixture-models-gmm",
      children: "Gaussian Mixture Models (GMM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GMM assumes the data is generated from a mixture of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "K"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "K"
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
                marginRight: "0.0715em"
              },
              children: "K"
            })]
          })
        })]
      }), " Gaussian distributions, each with its own mean ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "μ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mu_k"
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
                children: "μ"
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
            })]
          })
        })]
      }), " and covariance ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "Σ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\Sigma_k"
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
      }), ". Unlike K-means, GMM performs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "soft clustering"
      }), " ? each point has a probability of belonging to each cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The EM Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), ": Parameters ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "μ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mu_k"
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
                  children: "μ"
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
              })]
            })
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "Σ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\Sigma_k"
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
        }), ", and mixing coefficients ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "π"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\pi_k"
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
                  children: "π"
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
              })]
            })
          })]
        }), " for each component."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expectation Step (E-Step)"
        }), ": Compute the responsibility ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "γ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "z"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\gamma(z_{nk})"
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
                  marginRight: "0.0556em"
                },
                children: "γ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.044em"
                  },
                  children: "z"
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
                            marginLeft: "-0.044em",
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
                                  marginRight: "0.0315em"
                                },
                                children: "nk"
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
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " ? the probability that point ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
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
                children: "n"
              })]
            })
          })]
        }), " belongs to component ", (0,jsx_runtime.jsxs)(_components.span, {
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
        }), ":\n", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "γ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "z"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "π"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "script",
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∣"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "μ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "Σ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
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
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "π"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "script",
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∣"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "μ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "Σ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\gamma(z_{nk}) = \\frac{\\pi_k \\mathcal{N}(x_n \\mid \\mu_k, \\Sigma_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(x_n \\mid \\mu_j, \\Sigma_j)}"
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
                  marginRight: "0.0556em"
                },
                children: "γ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.044em"
                  },
                  children: "z"
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
                            marginLeft: "-0.044em",
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
                                  marginRight: "0.0315em"
                                },
                                children: "nk"
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
                  height: "1.7619em",
                  verticalAlign: "-0.7519em"
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
                          height: "1.01em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.5703em"
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
                                          height: "0.8852em"
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
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.0715em"
                                              },
                                              children: "K"
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
                                  style: {
                                    marginRight: "0.0359em"
                                  },
                                  children: "π"
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
                                            marginLeft: "-0.0359em",
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
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathcal mtight",
                                style: {
                                  marginRight: "0.1474em"
                                },
                                children: "N"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
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
                                          height: "0.1645em"
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
                                              children: "n"
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
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "∣"
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "μ"
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
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
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
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                            top: "-3.485em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0359em"
                                  },
                                  children: "π"
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
                                            top: "-2.3488em",
                                            marginLeft: "-0.0359em",
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
                                          height: "0.1512em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathcal mtight",
                                style: {
                                  marginRight: "0.1474em"
                                },
                                children: "N"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
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
                                          height: "0.1645em"
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
                                              children: "n"
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
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "∣"
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "μ"
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
                                            top: "-2.3488em",
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
                                          height: "0.1512em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
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
                                          height: "0.3448em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.3488em",
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
                                          height: "0.1512em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                          height: "0.7519em"
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
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximization Step (M-Step)"
        }), ": Update parameters using the weighted responsibilities:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
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
                          children: "μ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "γ"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "z"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "k"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "γ"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "z"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "k"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\mu_k = \\frac{\\sum_n \\gamma(z_{nk}) x_n}{\\sum_n \\gamma(z_{nk})}"
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
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "μ"
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
                      height: "1.63em",
                      verticalAlign: "-0.57em"
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
                              height: "1.06em"
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
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "-0.0139em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "n"
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
                                              height: "0.3214em"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0556em"
                                    },
                                    children: "γ"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                top: "-2.3488em",
                                                marginLeft: "-0.044em",
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
                                                    style: {
                                                      marginRight: "0.0315em"
                                                    },
                                                    children: "nk"
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                top: "-3.535em"
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
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "-0.0139em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "n"
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
                                              height: "0.3214em"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0556em"
                                    },
                                    children: "γ"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                top: "-2.3488em",
                                                marginLeft: "-0.044em",
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
                                                    style: {
                                                      marginRight: "0.0315em"
                                                    },
                                                    children: "nk"
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  children: "n"
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
                              height: "0.57em"
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
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
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
                          mathvariant: "normal",
                          children: "Σ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "γ"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "z"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "k"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "k"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "k"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "T"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "γ"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "z"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "k"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\Sigma_k = \\frac{\\sum_n \\gamma(z_{nk}) (x_n - \\mu_k)(x_n - \\mu_k)^T}{\\sum_n \\gamma(z_{nk})}"
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
                      height: "1.7484em",
                      verticalAlign: "-0.57em"
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
                              height: "1.1784em"
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
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "-0.0139em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "n"
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
                                              height: "0.3214em"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0556em"
                                    },
                                    children: "γ"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                top: "-2.3488em",
                                                marginLeft: "-0.044em",
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
                                                    style: {
                                                      marginRight: "0.0315em"
                                                    },
                                                    children: "nk"
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                top: "-3.535em"
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
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "-0.0139em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "n"
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
                                              height: "0.3214em"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0556em"
                                    },
                                    children: "γ"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                top: "-2.3488em",
                                                marginLeft: "-0.044em",
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
                                                    style: {
                                                      marginRight: "0.0315em"
                                                    },
                                                    children: "nk"
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  children: "n"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                                top: "-2.3488em",
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  children: "n"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                                top: "-2.3488em",
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mclose mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mclose mtight",
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
                              height: "0.57em"
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
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
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
                          children: "π"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "N"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "γ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "z"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "k"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\pi_k = \\frac{1}{N} \\sum_n \\gamma(z_{nk})"
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
                      children: "π"
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
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
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
                              height: "0.0017em"
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
                                  children: "n"
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
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0556em"
                    },
                    children: "γ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.044em"
                      },
                      children: "z"
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
                                marginLeft: "-0.044em",
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
                                      marginRight: "0.0315em"
                                    },
                                    children: "nk"
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
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), ": E-step and M-step until the log-likelihood converges."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard vs Soft Clustering"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K-means (Hard)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GMM (Soft)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each point belongs to exactly one cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each point has a probability distribution over clusters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster Shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spherical (isotropic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elliptical (full covariance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No measure of assignment confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides posterior probabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Outlier Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forces assignment to nearest cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have low probability for all clusters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cluster-validation",
      children: "Cluster Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ground truth labels are unavailable (the usual case in unsupervised learning), we rely on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "internal validation metrics"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Silhouette Score"
      }), ":\nFor each point ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), ":"]
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
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "a(i)"
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
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " = mean distance to all other points in the same cluster (intra-cluster distance)."]
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
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "b(i)"
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
                children: "b"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " = mean distance to all points in the nearest neighboring cluster (inter-cluster distance)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "b"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "max"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      separator: "true",
                      children: ","
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "b"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}"
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
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
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
                height: "1.53em",
                verticalAlign: "-0.52em"
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
                        height: "1.01em"
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
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mop mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mtight",
                                children: "m"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mtight",
                                children: "a"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mtight",
                                children: "x"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "b"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: "))"
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
                          top: "-3.485em"
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
                              children: "b"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                        height: "0.52em"
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
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≈"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s(i) \\approx 1"
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
                children: "s"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
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
                children: "≈"
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
        }), ": Point is well-clustered (far from other clusters)."]
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
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≈"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s(i) \\approx 0"
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
                children: "s"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
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
                children: "≈"
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
        }), ": Point lies on the boundary between two clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-error",
          title: "ParseError: KaTeX parse error: Expected 'EOF', got '&' at position 6: s(i) &̲lt; 0",
          style: {
            color: "#cc0000"
          },
          children: "s(i) &lt; 0"
        }), ": Point may be assigned to the wrong cluster."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The overall silhouette score is the mean ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "s(i)"
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
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " across all points, ranging from ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "]"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "[-1, 1]"
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
              children: "["
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
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
              children: "]"
            })]
          })
        })]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Davies-Bouldin Index"
      }), ":\nMeasures the average similarity between each cluster and its most similar one:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "B"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
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
                    children: "K"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "max"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      children: "≠"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "μ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      separator: "true",
                      children: ","
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "μ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "DB = \\frac{1}{K} \\sum_{i=1}^K \\max_{j \\neq i} \\frac{\\sigma_i + \\sigma_j}{d(\\mu_i, \\mu_j)}"
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
                marginRight: "0.0278em"
              },
              children: "D"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0502em"
              },
              children: "B"
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
                height: "1.5236em",
                verticalAlign: "-0.5423em"
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
                              style: {
                                marginRight: "0.0715em"
                              },
                              children: "K"
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
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9812em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0715em"
                            },
                            children: "K"
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
              className: "mop",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mop",
                children: "max"
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
                        height: "0.9157em"
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
                              children: "d"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "μ"
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
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "μ"
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
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                          top: "-3.5073em"
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
                                className: "mord mathnormal mtight",
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
                                        height: "0.3281em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0359em",
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
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "+"
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3281em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0359em",
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
                        height: "0.5423em"
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
      children: ["Where ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " is the average distance of points in cluster ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " to its centroid ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "μ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mu_i"
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
                children: "μ"
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
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lower values indicate better clustering"
      }), " (clusters are compact and well-separated)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Calinski-Harabasz Index"
      }), " (Variance Ratio Criterion):\n", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "H"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "tr"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "B"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "tr"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "×"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "N"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "K"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "K"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "CH = \\frac{\\text{tr}(B_K)}{\\text{tr}(W_K)} \\times \\frac{N - K}{K - 1}"
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
                marginRight: "0.0715em"
              },
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0813em"
              },
              children: "H"
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
                height: "1.53em",
                verticalAlign: "-0.52em"
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
                        height: "1.01em"
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
                              className: "mord text mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "tr"
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3448em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.3567em",
                                          marginLeft: "-0.1389em",
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
                                              marginRight: "0.0715em"
                                            },
                                            children: "K"
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
                                        height: "0.1433em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                          top: "-3.485em"
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
                              className: "mord text mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "tr"
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0502em"
                                },
                                children: "B"
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
                                          top: "-2.3567em",
                                          marginLeft: "-0.0502em",
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
                                              marginRight: "0.0715em"
                                            },
                                            children: "K"
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
                                        height: "0.1433em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                        height: "0.52em"
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
                height: "1.2757em",
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
                        height: "0.8723em"
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
                              style: {
                                marginRight: "0.0715em"
                              },
                              children: "K"
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
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.109em"
                              },
                              children: "N"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0715em"
                              },
                              children: "K"
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
                        height: "0.4033em"
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
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "B"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "B_K"
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
                  marginRight: "0.0502em"
                },
                children: "B"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3283em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0502em",
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
                              marginRight: "0.0715em"
                            },
                            children: "K"
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
      }), " is the between-cluster dispersion matrix and ", (0,jsx_runtime.jsxs)(_components.span, {
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
                    children: "K"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "W_K"
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
                        height: "0.3283em"
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
                              marginRight: "0.0715em"
                            },
                            children: "K"
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
      }), " is the within-cluster dispersion matrix. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Higher values indicate better clustering"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Clustering Result] --> B[Compute Silhouette Score]\n    A --> C[Compute Davies-Bouldin Index]\n    A --> D[Compute Calinski-Harabasz Index]\n    B --> E{Score near 1?}\n    C --> F{Low value?}\n    D --> G{High value?}\n    E -- Yes --> H[Well-separated clusters]\n    F -- Yes --> H\n    G -- Yes --> H\n    E -- No --> I[Overlapping or poor clusters]\n    F -- No --> I\n    G -- No --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-scaling-for-clustering",
      children: "Feature Scaling for Clustering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distance-based clustering algorithms (K-means, DBSCAN, hierarchical) are highly sensitive to the scale of features. If one feature has a range 100x larger than another, it will dominate the distance calculation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example effect"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Income (range $15K-$150K) vs. Age (range 18-80)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Without scaling, the Euclidean distance is almost entirely determined by Income, making Age irrelevant to clustering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common scaling approaches"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardization (Z-score)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          lspace: "0em",
                          rspace: "0em",
                          children: "′"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "μ"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "σ"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x' = \\frac{x - \\mu}{\\sigma}"
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
                      height: "0.7519em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7519em"
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
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "′"
                                  })
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
                      height: "1.1994em",
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
                              height: "0.8544em"
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
                                    style: {
                                      marginRight: "0.0359em"
                                    },
                                    children: "σ"
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
                                top: "-3.4461em"
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
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "μ"
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
                              height: "0.345em"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centers to mean 0, variance 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Max Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          lspace: "0em",
                          rspace: "0em",
                          children: "′"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "min"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "⁡"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "max"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "⁡"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "min"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "⁡"
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}"
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
                      height: "0.7519em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7519em"
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
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "′"
                                  })
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
                      height: "1.2635em",
                      verticalAlign: "-0.4451em"
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
                              height: "0.8184em"
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
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "mop mtight",
                                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "m"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "a"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "x"
                                                    })]
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
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.334em"
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
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "mop mtight",
                                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "m"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "i"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "n"
                                                    })]
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
                                              height: "0.143em"
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.334em"
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
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "mop mtight",
                                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "m"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "i"
                                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                                      className: "mtight",
                                                      children: "n"
                                                    })]
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
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
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
                              height: "0.4451em"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to [0, 1] range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robust Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          lspace: "0em",
                          rspace: "0em",
                          children: "′"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mtext, {
                            children: "median"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "IQR"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x' = \\frac{x - \\text{median}}{\\text{IQR}}"
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
                      height: "0.7519em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7519em"
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
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "′"
                                  })
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
                      height: "1.3612em",
                      verticalAlign: "-0.4811em"
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
                              height: "0.8801em"
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
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "IQR"
                                    })
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "median"
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
                              height: "0.4811em"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resistant to outliers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Which distance metrics are affected"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Euclidean, Manhattan, Minkowski ? all affected (scale-sensitive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cosine similarity ? unaffected by magnitude (normalized vectors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlation distance ? unaffected (uses centered data)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "curse-of-dimensionality-for-clustering",
      children: "Curse of Dimensionality for Clustering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As dimensionality increases, distance metrics become less meaningful ? a phenomenon known as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "curse of dimensionality"
      }), ". This severely impacts clustering algorithms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why distances fail"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In high dimensions, the ratio between the nearest and farthest point distance converges to 1 (Beyer et al., 1999)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point pairs become almost equally far apart, making proximity-based grouping unreliable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": For a unit cube in ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " dimensions, the fraction of volume near the surface is ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "1 - 0.5^d"
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
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8491em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0."
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5"
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
      }), ". At ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "10"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d = 10"
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
              className: "mord mathnormal",
              children: "d"
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
              children: "10"
            })]
          })]
        })]
      }), ", over 99.9% of the volume is in the outer shell ? points are nearly all \"far apart\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimensionality reduction"
        }), " first (PCA, t-SNE, UMAP ? see Chapter 9)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature selection"
        }), " to retain only informative features."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subspace clustering"
        }), " methods that cluster in different feature subsets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increase minPts"
        }), " in DBSCAN (rule of thumb: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mtext, {
                    children: "minPts"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\text{minPts} \\ge 2 \\times d"
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
                  height: "0.8193em",
                  verticalAlign: "-0.136em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "minPts"
                })
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2"
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
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cosine distance"
        }), " instead of Euclidean for sparse high-dimensional data (e.g., text)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-k-means-for-customer-segmentation-with-k-means",
      children: "Example 1: K-means for Customer Segmentation with K-means++"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grouping customers based on \"Annual Income\" and \"Spending Score\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Point {\n  income: number;\n  score: number;\n  cluster?: number;\n}\n\nfunction euclideanDistance(a: number[], b: number[]): number {\n  if (a.length !== b.length) throw new Error(\"Dimension mismatch\");\n  let sum = 0;\n  for (let i = 0; i < a.length; i++) {\n    sum += (a[i] - b[i]) ** 2;\n  }\n  return Math.sqrt(sum);\n}\n\nclass KMeans {\n  private k: number;\n  private maxIter: number;\n  private centroids: number[][];\n\n  constructor(k: number, maxIter = 100) {\n    this.k = k;\n    this.maxIter = maxIter;\n    this.centroids = [];\n  }\n\n  private initializePlusPlus(data: number[][]): void {\n    // Step 1: Pick first centroid uniformly at random\n    const firstIdx = Math.floor(Math.random() * data.length);\n    this.centroids = [[...data[firstIdx]]];\n\n    // Step 2-4: Weighted selection for remaining centroids\n    for (let c = 1; c < this.k; c++) {\n      const distances: number[] = [];\n      for (const point of data) {\n        const minDist = Math.min(\n          ...this.centroids.map((cent) => euclideanDistance(point, cent))\n        );\n        distances.push(minDist);\n      }\n      const squaredDists = distances.map((d) => d * d);\n      const total = squaredDists.reduce((a, b) => a + b, 0);\n      const threshold = Math.random() * total;\n      let cumulative = 0;\n      for (let i = 0; i < data.length; i++) {\n        cumulative += squaredDists[i];\n        if (cumulative >= threshold) {\n          this.centroids.push([...data[i]]);\n          break;\n        }\n      }\n    }\n  }\n\n  fit(data: number[][]): { centroids: number[][]; assignments: number[] } {\n    this.initializePlusPlus(data);\n    const assignments: number[] = new Array(data.length).fill(0);\n\n    for (let iter = 0; iter < this.maxIter; iter++) {\n      // Assign each point to nearest centroid\n      for (let i = 0; i < data.length; i++) {\n        let bestDist = Infinity;\n        let bestCluster = 0;\n        for (let j = 0; j < this.k; j++) {\n          const d = euclideanDistance(data[i], this.centroids[j]);\n          if (d < bestDist) {\n            bestDist = d;\n            bestCluster = j;\n          }\n        }\n        assignments[i] = bestCluster;\n      }\n\n      // Update centroids\n      const newCentroids: number[][] = Array.from(\n        { length: this.k },\n        () => new Array(data[0].length).fill(0)\n      );\n      const counts: number[] = new Array(this.k).fill(0);\n\n      for (let i = 0; i < data.length; i++) {\n        const cluster = assignments[i];\n        counts[cluster]++;\n        for (let d = 0; d < data[i].length; d++) {\n          newCentroids[cluster][d] += data[i][d];\n        }\n      }\n\n      for (let j = 0; j < this.k; j++) {\n        if (counts[j] > 0) {\n          for (let d = 0; d < newCentroids[j].length; d++) {\n            newCentroids[j][d] /= counts[j];\n          }\n        } else {\n          // Empty cluster: reinitialize centroid\n          newCentroids[j] = [\n            ...data[Math.floor(Math.random() * data.length)],\n          ];\n        }\n      }\n\n      // Check convergence (centroids unchanged)\n      let converged = true;\n      for (let j = 0; j < this.k; j++) {\n        if (euclideanDistance(this.centroids[j], newCentroids[j]) > 1e-6) {\n          converged = false;\n          break;\n        }\n      }\n\n      this.centroids = newCentroids;\n      if (converged) break;\n    }\n\n    return { centroids: this.centroids, assignments };\n  }\n}\n\n// Sample data: [Income (scaled), Score (scaled)]\nconst customerData: number[][] = [\n  [0.15, 0.39], [0.16, 0.81], [0.17, 0.06], [0.18, 0.77],\n  [0.19, 0.40], [0.20, 0.76], [0.70, 0.50], [0.72, 0.60],\n  [0.75, 0.45], [0.80, 0.55],\n];\n\nconst kmeans = new KMeans(2);\nconst result = kmeans.fit(customerData);\n\n// Group points by cluster\nconst clusters: Point[][] = [[], []];\nfor (let i = 0; i < customerData.length; i++) {\n  const clusterIdx = result.assignments[i];\n  clusters[clusterIdx].push({\n    income: customerData[i][0],\n    score: customerData[i][1],\n  });\n}\n\nconsole.log(\"Cluster 0 (Low Income):\", clusters[0]);\nconsole.log(\"Cluster 1 (High Income):\", clusters[1]);\nconsole.log(\"Final Centroids:\", result.centroids);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Effectively separates low-income individuals from high-income individuals based on the provided metrics. The K-means++ initialization ensures stable convergence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-silhouette-score-calculator",
      children: "Example 2: Silhouette Score Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function silhouetteScore(\n  data: number[][],\n  assignments: number[]\n): number {\n  const n = data.length;\n  const k = Math.max(...assignments) + 1;\n  const scores: number[] = [];\n\n  for (let i = 0; i < n; i++) {\n    const clusterI = assignments[i];\n    let a_i = 0;\n    let countA = 0;\n\n    // Intra-cluster distance a(i)\n    for (let j = 0; j < n; j++) {\n      if (i !== j && assignments[j] === clusterI) {\n        a_i += euclideanDistance(data[i], data[j]);\n        countA++;\n      }\n    }\n    a_i = countA > 0 ? a_i / countA : 0;\n\n    // Inter-cluster distance b(i) ? smallest mean distance to another cluster\n    let b_i = Infinity;\n    for (let c = 0; c < k; c++) {\n      if (c === clusterI) continue;\n      let distSum = 0;\n      let countB = 0;\n      for (let j = 0; j < n; j++) {\n        if (assignments[j] === c) {\n          distSum += euclideanDistance(data[i], data[j]);\n          countB++;\n        }\n      }\n      const meanDist = countB > 0 ? distSum / countB : 0;\n      if (meanDist < b_i) b_i = meanDist;\n    }\n\n    const s_i =\n      a_i === 0 && b_i === Infinity\n        ? 0\n        : (b_i - a_i) / Math.max(a_i, b_i);\n    scores.push(s_i);\n  }\n\n  return scores.reduce((sum, s) => sum + s, 0) / n;\n}\n\n// Test on our customer data\nconst silScore = silhouetteScore(customerData, result.assignments);\nconsole.log(\"Silhouette Score:\", silScore.toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-anomaly-detection-with-dbscan-concept",
      children: "Example 3: Anomaly Detection with DBSCAN Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DBSCAN naturally identifies outliers as noise points. Here is a TypeScript implementation that detects fraudulent transactions in a payment dataset."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DBSCANPoint {\n  features: number[];\n  cluster: number; // -1 = noise\n  isCore: boolean;\n}\n\nclass DBSCAN {\n  private eps: number;\n  private minPts: number;\n\n  constructor(eps: number, minPts: number) {\n    this.eps = eps;\n    this.minPts = minPts;\n  }\n\n  private regionQuery(\n    points: number[][],\n    idx: number\n  ): number[] {\n    const neighbors: number[] = [];\n    for (let i = 0; i < points.length; i++) {\n      if (\n        euclideanDistance(points[idx], points[i]) <= this.eps\n      ) {\n        neighbors.push(i);\n      }\n    }\n    return neighbors;\n  }\n\n  fit(points: number[][]): DBSCANPoint[] {\n    const n = points.length;\n    const labels: number[] = new Array(n).fill(-2); // -2 = unvisited\n    let clusterId = 0;\n\n    for (let i = 0; i < n; i++) {\n      if (labels[i] !== -2) continue; // Already visited\n\n      const neighbors = this.regionQuery(points, i);\n\n      if (neighbors.length < this.minPts) {\n        labels[i] = -1; // Noise (tentative ? may become border point later)\n        continue;\n      }\n\n      // Core point ? start new cluster\n      const queue = [...neighbors];\n      labels[i] = clusterId;\n\n      while (queue.length > 0) {\n        const q = queue.shift()!;\n        if (labels[q] === -1) {\n          labels[q] = clusterId; // Border point found through core\n        }\n        if (labels[q] >= 0) continue; // Already assigned to a cluster\n\n        labels[q] = clusterId;\n        const qNeighbors = this.regionQuery(points, q);\n        if (qNeighbors.length >= this.minPts) {\n          queue.push(...qNeighbors);\n        }\n      }\n\n      clusterId++;\n    }\n\n    return points.map((p, i) => ({\n      features: p,\n      cluster: labels[i],\n      isCore: labels[i] >= 0 && this.regionQuery(points, i).length >= this.minPts,\n    }));\n  }\n}\n\n// Transaction amounts (scaled) and frequency (scaled)\nconst transactions: number[][] = [\n  [0.02, 0.30], [0.03, 0.28], [0.02, 0.35], // Normal small txns\n  [0.01, 0.32], [0.04, 0.29], [0.03, 0.31],\n  [0.02, 0.40], [0.05, 0.25], [0.03, 0.33],\n  [0.90, 0.95], // Fraudulent: large amount, unusual frequency\n  [0.85, 0.92], // Fraudulent: similar outlier pattern\n  [0.03, 0.30], // Normal\n];\n\nconst dbscan = new DBSCAN(0.15, 2);\nconst results = dbscan.fit(transactions);\n\nconst normal = results.filter((p) => p.cluster >= 0);\nconst anomalies = results.filter((p) => p.cluster === -1);\n\nconsole.log(\"Normal transactions:\", normal.length);\nconsole.log(\"Anomalies detected:\", anomalies.length);\nanomalies.forEach((a) =>\n  console.log(\"  Suspicious:\", a.features)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": DBSCAN labels the two high-value irregular transactions as noise points (", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mtext, {
                  children: "cluster"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{cluster} = -1"
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
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "cluster"
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            })]
          })]
        })]
      }), "), flagging them as potential fraud without any labeled training data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-market-segmentation-report-generation",
      children: "Example 4: Market Segmentation Report Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A practical use case combining clustering with business reporting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Segment {\n  id: number;\n  size: number;\n  avgIncome: number;\n  avgScore: number;\n  label: string;\n}\n\nfunction generateSegmentationReport(\n  data: number[][],\n  assignments: number[],\n  centroids: number[][]\n): Segment[] {\n  const k = centroids.length;\n  const segments: Segment[] = [];\n\n  for (let c = 0; c < k; c++) {\n    const memberIndices = assignments\n      .map((a, i) => (a === c ? i : -1))\n      .filter((i) => i >= 0);\n    const members = memberIndices.map((i) => data[i]);\n\n    const avgIncome =\n      members.reduce((sum, m) => sum + m[0], 0) / members.length;\n    const avgScore =\n      members.reduce((sum, m) => sum + m[1], 0) / members.length;\n\n    let label: string;\n    if (centroids[c][0] < 0.3) {\n      label = avgScore > 0.5 ? \"Young Spenders\" : \"Budget Shoppers\";\n    } else {\n      label = avgScore > 0.5 ? \"Premium Loyalists\" : \"High-Earning Minimalists\";\n    }\n\n    segments.push({\n      id: c,\n      size: members.length,\n      avgIncome,\n      avgScore,\n      label,\n    });\n  }\n\n  return segments;\n}\n\nconst report = generateSegmentationReport(\n  customerData,\n  result.assignments,\n  result.centroids\n);\n\nconsole.table(report);\n// +---------------------------------------------------------------------+\n// ? (index) ?  id  ? size ? avgIncome ? avgScore ?        label         ?\n// +---------+------+------+-----------+----------+----------------------?\n// ?    0    ?  0   ?  6   ?   0.175   ?  0.5317  ?   'Young Spenders'   ?\n// ?    1    ?  1   ?  4   ?   0.7425  ?   0.525  ? 'Premium Loyalists'  ?\n// +---------------------------------------------------------------------+\n"
      })
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
            children: "K-means"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition-based clustering minimizing WCSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires K in advance; fast on large datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer segmentation, image compression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Agglomerative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up merging of closest pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces dendrogram; no K needed upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploratory analysis, taxonomy construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Divisive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down recursive splitting of clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive; rarely used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Niche applications with clear top-level split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance = min distance between points in two clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can chain noise points into long clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detecting elongated, non-spherical clusters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance = max distance between points in two clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces compact, balanced clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most general-purpose hierarchical use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ward Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes within-cluster variance increase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tends to produce equal-sized spherical clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice; works well with Euclidean distance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Density-based clustering with noise identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not require K; handles arbitrary shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geographical data with noise, anomaly detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic mixture of Gaussians via EM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft assignments with covariance shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Density estimation, soft clustering with uncertainty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Euclidean Distance"
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
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "q"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.msqrt, {
                        children: (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            children: "∑"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "p"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "q"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          })]
                        })
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d(\\mathbf{p}, \\mathbf{q}) = \\sqrt{\\sum(p_i - q_i)^2}"
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
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "q"
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
                      height: "1.24em",
                      verticalAlign: "-0.305em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord sqrt",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.935em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "svg-align",
                            style: {
                              top: "-3.2em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.2em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              style: {
                                paddingLeft: "1em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mop op-symbol small-op",
                                style: {
                                  position: "relative",
                                  top: "0em"
                                },
                                children: "∑"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen",
                                children: "("
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
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.895em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.2em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "hide-tail",
                              style: {
                                minWidth: "1.02em",
                                height: "1.28em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "400em",
                                height: "1.28em",
                                viewBox: "0 0 400000 1296",
                                preserveAspectRatio: "xMinYMin slice",
                                children: (0,jsx_runtime.jsx)(_components.path, {
                                  d: "M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"
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
                            height: "0.305em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WCSS (Inertia)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "μ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∥"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sum_{i=1}^{K}\\sum_{\\mathbf{x} \\in C_i} \\|\\mathbf{x} - \\mu_i\\|^2"
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
                      height: "1.381em",
                      verticalAlign: "-0.3998em"
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
                              height: "0.9812em"
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
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
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
                              height: "0.1786em"
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
                                    className: "mord mathbf mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                              height: "0.3998em"
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
                    className: "mord mathbf",
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
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "μ"
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
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Silhouette Score"
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
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "b"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "a"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "max"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "a"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "b"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "s = \\frac{b - a}{\\max(a, b)}"
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
                    children: "s"
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
                      height: "1.4001em",
                      verticalAlign: "-0.52em"
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
                              height: "0.8801em"
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
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mop mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "m"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "a"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "x"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "b"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "b"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
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
                              height: "0.52em"
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
            }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "a"
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
                    children: "a"
                  })]
                })
              })]
            }), " = intra-cluster distance, ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "b"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "b"
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
                    children: "b"
                  })]
                })
              })]
            }), " = nearest-cluster distance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Davies-Bouldin Index"
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
                        children: "D"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "B"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
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
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "max"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            mathvariant: "normal",
                            children: "≠"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "DB = \\frac{1}{K} \\sum_{i=1}^K \\max_{j \\neq i} \\frac{\\sigma_i + \\sigma_j}{d(\\mu_i, \\mu_j)}"
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
                      marginRight: "0.0278em"
                    },
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0502em"
                    },
                    children: "B"
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
                      height: "1.5236em",
                      verticalAlign: "-0.5423em"
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
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
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
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.9812em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0715em"
                                  },
                                  children: "K"
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
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop",
                      children: "max"
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
                              height: "0.9157em"
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
                                    children: "d"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                top: "-3.5073em"
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
                                      className: "mord mathnormal mtight",
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
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "-0.0359em",
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "-0.0359em",
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
                              height: "0.5423em"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calinski-Harabasz Index"
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
                        children: "C"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "H"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mtext, {
                            children: "tr"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "B"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "K"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mtext, {
                            children: "tr"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "W"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "K"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "K"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "K"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "CH = \\frac{\\text{tr}(B_K)}{\\text{tr}(W_K)} \\times \\frac{N - K}{K - 1}"
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
                      marginRight: "0.0715em"
                    },
                    children: "C"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0813em"
                    },
                    children: "H"
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
                      height: "1.53em",
                      verticalAlign: "-0.52em"
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
                              height: "1.01em"
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
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "tr"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.3448em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.3567em",
                                                marginLeft: "-0.1389em",
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
                                                    marginRight: "0.0715em"
                                                  },
                                                  children: "K"
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
                                              height: "0.1433em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                top: "-3.485em"
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
                                    className: "mord text mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: "tr"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0502em"
                                      },
                                      children: "B"
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
                                                top: "-2.3567em",
                                                marginLeft: "-0.0502em",
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
                                                    marginRight: "0.0715em"
                                                  },
                                                  children: "K"
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
                                              height: "0.1433em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                              height: "0.52em"
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
                      height: "1.2757em",
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
                              height: "0.8723em"
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
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
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
                              height: "0.4033em"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-means Objective"
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
                        children: "min"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
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
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "μ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∥"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\min \\sum_{i=1}^{K} \\sum_{\\mathbf{x} \\in C_i} \\|\\mathbf{x} - \\mu_i\\|^2"
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
                      height: "1.381em",
                      verticalAlign: "-0.3998em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop",
                    children: "min"
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
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.9812em"
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
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
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
                              height: "0.1786em"
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
                                    className: "mord mathbf mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                              height: "0.3998em"
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
                    className: "mord mathbf",
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
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "μ"
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
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Linkage"
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
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "min"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d(C_i, C_j) = \\min_{\\mathbf{x} \\in C_i, \\mathbf{y} \\in C_j} \\|\\mathbf{x} - \\mathbf{y}\\|"
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
                      height: "1.0361em",
                      verticalAlign: "-0.2861em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
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
                                marginLeft: "-0.0715em",
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
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
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
                                marginLeft: "-0.0715em",
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
                      height: "1.0973em",
                      verticalAlign: "-0.3473em"
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
                              height: "0.3283em"
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathbf mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathbf mtight",
                                    style: {
                                      marginRight: "0.016em"
                                    },
                                    children: "y"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                              height: "0.3473em"
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
                    className: "mord mathbf",
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Linkage"
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
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "max"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∈"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "C"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d(C_i, C_j) = \\max_{\\mathbf{x} \\in C_i, \\mathbf{y} \\in C_j} \\|\\mathbf{x} - \\mathbf{y}\\|"
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
                      height: "1.0361em",
                      verticalAlign: "-0.2861em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
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
                                marginLeft: "-0.0715em",
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
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
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
                                marginLeft: "-0.0715em",
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
                      height: "1.0973em",
                      verticalAlign: "-0.3473em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop",
                      children: "max"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3283em"
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathbf mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathbf mtight",
                                    style: {
                                      marginRight: "0.016em"
                                    },
                                    children: "y"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∈"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0715em"
                                      },
                                      children: "C"
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
                                                marginLeft: "-0.0715em",
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
                              height: "0.3473em"
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
                    className: "mord mathbf",
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    style: {
                      marginRight: "0.016em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ward Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Delta = \\frac{| \\mu_i - \\mu_j |^2}{1/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GMM Responsibility"
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
                        children: "γ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "z"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "k"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "π"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "k"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "script",
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∣"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "k"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              mathvariant: "normal",
                              children: "Σ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "k"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
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
                              children: "K"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "π"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "script",
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "∣"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "μ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            separator: "true",
                            children: ","
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              mathvariant: "normal",
                              children: "Σ"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\gamma(z_{nk}) = \\frac{\\pi_k \\mathcal{N}(x_n \\mid \\mu_k, \\Sigma_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(x_n \\mid \\mu_j, \\Sigma_j)}"
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
                      marginRight: "0.0556em"
                    },
                    children: "γ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.044em"
                      },
                      children: "z"
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
                                marginLeft: "-0.044em",
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
                                      marginRight: "0.0315em"
                                    },
                                    children: "nk"
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
                      height: "1.7619em",
                      verticalAlign: "-0.7519em"
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
                              height: "1.01em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.5703em"
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
                                              height: "0.8852em"
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
                                                  className: "mord mathnormal mtight",
                                                  style: {
                                                    marginRight: "0.0715em"
                                                  },
                                                  children: "K"
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
                                      style: {
                                        marginRight: "0.0359em"
                                      },
                                      children: "π"
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
                                                marginLeft: "-0.0359em",
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathcal mtight",
                                    style: {
                                      marginRight: "0.1474em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  children: "n"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∣"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                                top: "-3.485em"
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
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0359em"
                                      },
                                      children: "π"
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
                                                top: "-2.3488em",
                                                marginLeft: "-0.0359em",
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathcal mtight",
                                    style: {
                                      marginRight: "0.1474em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.1645em"
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
                                                  children: "n"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "∣"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "μ"
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
                                                top: "-2.3488em",
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mpunct mtight",
                                    children: ","
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
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
                                              height: "0.3448em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.3488em",
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
                                              height: "0.1512em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                              height: "0.7519em"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusted Rand Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures similarity of clustering to ground truth, corrected for chance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standardization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          mathvariant: "normal",
                          lspace: "0em",
                          rspace: "0em",
                          children: "′"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "μ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x' = (x - \\mu) / \\sigma"
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
                      height: "0.7519em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7519em"
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
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "′"
                                  })
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "μ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "σ"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Unsupervised Learning Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Marketing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer segmentation, persona discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means on purchase history and demographic data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene expression clustering, species taxonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical clustering on expression profiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image compression, color quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means reduces color palette to K representative colors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud detection, network intrusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN labels outliers as noise points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Network Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Community detection, recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spectral clustering on graph adjacency matrices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic modeling, document categorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means on TF-IDF vectors for document clustering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient subgroup discovery, disease phenotyping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical clustering on patient symptom profiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk profiling, market regime detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GMM for identifying bull/bear/correction market states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-k-means-dbscan-and-silhouette-score",
      children: "TypeScript Implementation: K-Means, DBSCAN, and Silhouette Score"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function euclidean(a: number[], b: number[]): number {\n    return Math.sqrt(a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0));\n}\n\nclass KMeans {\n    private k: number;\n    private maxIter: number;\n    private centroids: number[][] = [];\n    private labels: number[] = [];\n\n    constructor(k: number, maxIter: number = 100) { this.k = k; this.maxIter = maxIter; }\n\n    fit(data: number[][]): void {\n        this.centroids = data.slice(0, this.k).map(c => [...c]);\n        for (let iter = 0; iter < this.maxIter; iter++) {\n            this.labels = data.map(point => {\n                const dists = this.centroids.map(c => euclidean(point, c));\n                return dists.indexOf(Math.min(...dists));\n            });\n            const newCentroids = Array.from({ length: this.k }, (_, i) => {\n                const points = data.filter((_, j) => this.labels[j] === i);\n                if (points.length === 0) return [...this.centroids[i]];\n                return points[0].map((_, d) => points.reduce((s, p) => s + p[d], 0) / points.length);\n            });\n            const moved = newCentroids.some((c, i) => euclidean(c, this.centroids[i]) > 1e-6);\n            this.centroids = newCentroids;\n            if (!moved) break;\n        }\n    }\n\n    predict(point: number[]): number {\n        const dists = this.centroids.map(c => euclidean(point, c));\n        return dists.indexOf(Math.min(...dists));\n    }\n\n    inertia(data: number[][]): number {\n        return data.reduce((sum, point, i) => sum + euclidean(point, this.centroids[this.labels[i]]) ** 2, 0);\n    }\n\n    static elbowMethod(data: number[][], maxK: number = 10): { k: number; inertias: number[] } {\n        const inertias: number[] = [];\n        for (let k = 1; k <= maxK; k++) {\n            const km = new KMeans(k, 50);\n            km.fit(data);\n            inertias.push(km.inertia(data));\n        }\n        const diffs = inertias.map((v, i) => i > 0 ? inertias[i - 1] - v : 0);\n        const secondDiffs = diffs.map((v, i) => i > 1 ? diffs[i - 1] - v : 0);\n        const optimalK = secondDiffs.indexOf(Math.max(...secondDiffs)) + 1;\n        return { k: optimalK, inertias };\n    }\n}\n\nclass DBSCAN {\n    private epsilon: number;\n    private minPts: number;\n    private labels: number[] = [];\n\n    constructor(epsilon: number = 0.5, minPts: number = 3) { this.epsilon = epsilon; this.minPts = minPts; }\n\n    fit(data: number[][]): number[] {\n        const n = data.length;\n        this.labels = new Array(n).fill(-1);\n        let clusterId = 0;\n\n        const neighbors = (idx: number): number[] => {\n            const result: number[] = [];\n            for (let j = 0; j < n; j++) {\n                if (euclidean(data[idx], data[j]) < this.epsilon) result.push(j);\n            }\n            return result;\n        };\n\n        for (let i = 0; i < n; i++) {\n            if (this.labels[i] !== -1) continue;\n            const nbs = neighbors(i);\n            if (nbs.length < this.minPts) { this.labels[i] = -2; continue; }\n            this.labels[i] = clusterId;\n            const queue = nbs.filter(n => n !== i);\n            while (queue.length > 0) {\n                const q = queue.shift()!;\n                if (this.labels[q] === -2) this.labels[q] = clusterId;\n                if (this.labels[q] !== -1) continue;\n                this.labels[q] = clusterId;\n                const nbs2 = neighbors(q);\n                if (nbs2.length >= this.minPts) queue.push(...nbs2.filter(n => this.labels[n] === -1));\n            }\n            clusterId++;\n        }\n        return this.labels;\n    }\n\n    getNoiseCount(): number { return this.labels.filter(l => l === -2).length; }\n    getClusterCount(): number { return Math.max(...this.labels) + 1; }\n}\n\nfunction silhouetteScore(data: number[][], labels: number[]): number {\n    const n = data.length;\n    const scores: number[] = [];\n    for (let i = 0; i < n; i++) {\n        const sameCluster = data.filter((_, j) => labels[j] === labels[i] && j !== i);\n        const a = sameCluster.length > 0\n            ? sameCluster.reduce((s, p) => s + euclidean(data[i], p), 0) / sameCluster.length\n            : 0;\n        const otherClusters = [...new Set(labels)].filter(l => l !== labels[i]);\n        const b = otherClusters.length > 0\n            ? Math.min(...otherClusters.map(l => {\n                const pts = data.filter((_, j) => labels[j] === l);\n                return pts.reduce((s, p) => s + euclidean(data[i], p), 0) / pts.length;\n            }))\n            : 0;\n        const max = Math.max(a, b);\n        scores.push(max === 0 ? 0 : (b - a) / max);\n    }\n    return scores.reduce((s, v) => s + v, 0) / n;\n}\n\n// Demo\nconst data = [[1, 1], [1.5, 2], [2, 1], [8, 8], [8.5, 9], [9, 8], [25, 26], [26, 25]];\nconst km = new KMeans(3);\nkm.fit(data);\nconsole.log(\"K-Means inertia:\", km.inertia(data).toFixed(2));\nconsole.log(\"Elbow method optimal K:\", KMeans.elbowMethod(data, 8).k);\n\nconst dbscan = new DBSCAN(3, 2);\nconst dbLabels = dbscan.fit(data);\nconsole.log(\"DBSCAN clusters:\", dbscan.getClusterCount(), \"noise:\", dbscan.getNoiseCount());\nconsole.log(\"Silhouette score:\", silhouetteScore(data, dbLabels).toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// unsupervised learning\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'unsupervised learning', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// unsupervised learning - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'unsupervised learning' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unsupervised learning finds patterns in unlabeled data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "K-means is an iterative algorithm that minimizes the distance between points and their cluster centroids. Use K-means++ initialization to improve convergence quality."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The choice of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
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
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " in K-means is critical and can be guided by the Elbow Method or silhouette score analysis."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hierarchical clustering provides a multi-level view of data relationships through dendrograms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DBSCAN identifies clusters based on density, handling arbitrary shapes and naturally labeling outliers as noise points."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gaussian Mixture Models extend clustering to the probabilistic domain, providing soft assignments with covariance modeling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal validation metrics (silhouette score, Davies-Bouldin, Calinski-Harabasz) help evaluate cluster quality when ground truth is unavailable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature scaling is essential before clustering ? all distance-based methods are sensitive to feature magnitudes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The curse of dimensionality makes distance metrics less meaningful in high dimensions; dimensionality reduction is recommended as a preprocessing step."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always scale features first."
        }), " K-means and DBSCAN use Euclidean distance; a feature with a larger range will dominate the distance calculation and distort clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use K-means++ initialization."
        }), " Random initialization can converge to poor local minima. K-means++ spreads initial centroids across the data, producing better and more reproducible results."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose DBSCAN for noisy or irregular data."
        }), " If your clusters are non-spherical (elongated, concave, interlocking) or you expect outliers, DBSCAN handles both gracefully without needing K upfront."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate clusters with multiple metrics."
        }), " A single metric can be misleading. Cross-reference silhouette score, Davies-Bouldin index, and visual inspection (2D/3D projection) before committing to a clustering solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer GMM when uncertainty matters."
        }), " If you need to know how confident a point's cluster assignment is, or if clusters have different shapes/sizes, GMM's probabilistic framework provides richer insight than K-means."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tune DBSCAN's eps with a k-distance plot."
        }), " Plot sorted distances to the k-th nearest neighbor (where ", (0,jsx_runtime.jsxs)(_components.span, {
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
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mtext, {
                    children: "minPts"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k = \\text{minPts}"
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
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "minPts"
                })
              })]
            })]
          })]
        }), "). The \"elbow\" in this plot is a good starting value for eps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand the curse of dimensionality."
        }), " Beyond 20-30 features, distance-based clustering becomes unreliable. Always reduce dimensionality first with PCA, t-SNE, or UMAP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beware of the \"all-inertia\" trap."
        }), " WCSS always decreases as K increases. Never choose K solely by minimizing WCSS ? use silhouette score or domain knowledge as a counterbalance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does K-means differ from K-Nearest Neighbors (KNN)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the limitations of the K-means algorithm? (Hint: Consider cluster shapes and outliers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between \"Centroid-based\" and \"Density-based\" clustering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What information does a dendrogram provide that a K-means result does not?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does K-means++ initialization improve upon random centroid initialization?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What distinguishes a core point from a border point in DBSCAN?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does GMM produce \"soft\" cluster assignments while K-means produces \"hard\" assignments?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the curse of dimensionality, and why does it affect distance-based clustering?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manually perform one iteration of K-means on the points ", (0,jsx_runtime.jsxs)(_components.span, {
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
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "4"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "12"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "20"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "22"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\{2, 4, 10, 12, 20, 22\\}"
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
                children: "4"
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
                children: "12"
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
                children: "20"
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
                children: "22"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })
          })]
        }), " with initial centroids ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C_1=3"
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
                    marginRight: "0.0715em"
                  },
                  children: "C"
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
                            marginLeft: "-0.0715em",
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "3"
              })]
            })]
          })]
        }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "11"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C_2=11"
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
                    marginRight: "0.0715em"
                  },
                  children: "C"
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
                            marginLeft: "-0.0715em",
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
                children: "11"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given two clusters ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C_1 = \\{1, 2\\}"
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
                    marginRight: "0.0715em"
                  },
                  children: "C"
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
                            marginLeft: "-0.0715em",
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
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
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "6"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C_2 = \\{5, 6\\}"
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
                    marginRight: "0.0715em"
                  },
                  children: "C"
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
                            marginLeft: "-0.0715em",
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
                className: "mopen",
                children: "{"
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
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), ", calculate the distance between them using \"Single Linkage\" (min distance) and \"Complete Linkage\" (max distance)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If WCSS for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K=1"
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
                  marginRight: "0.0715em"
                },
                children: "K"
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
        }), " is 500, ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K=2"
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
                  marginRight: "0.0715em"
                },
                children: "K"
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
                children: "2"
              })]
            })]
          })]
        }), " is 200, ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K=3"
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
                  marginRight: "0.0715em"
                },
                children: "K"
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
                children: "3"
              })]
            })]
          })]
        }), " is 150, and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "4"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K=4"
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
                  marginRight: "0.0715em"
                },
                children: "K"
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
                children: "4"
              })]
            })]
          })]
        }), " is 140, what is the most likely \"elbow\" point?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For a dataset with points ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A(0,0)"
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
                children: "A"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "B"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "B(1,0)"
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
                  marginRight: "0.0502em"
                },
                children: "B"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
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
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "C"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C(5,5)"
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
                  marginRight: "0.0715em"
                },
                children: "C"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
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
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "6"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "6"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D(6,6)"
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
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "6"
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
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "E(10,10)"
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
                  marginRight: "0.0576em"
                },
                children: "E"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
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
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ": run DBSCAN with ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\epsilon = 3"
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
                children: "ϵ"
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
                children: "3"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mtext, {
                    children: "minPts"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\text{minPts} = 2"
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
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "minPts"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2"
              })]
            })]
          })]
        }), ". Identify core points, border points, and noise points. How many clusters form?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You run K-means on a 50-dimensional dataset and get poor silhouette scores. After PCA reduction to 5 dimensions, clustering improves significantly. Explain what happened and why."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function in TypeScript that computes the Davies-Bouldin index given a dataset and cluster assignments."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the impact of feature scaling on K-means. Why is it important to normalize data before clustering if the features have different units (e.g., Age in years vs. Income in dollars)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A streaming music service wants to build a dynamic playlist clustering system. User sessions produce high-dimensional feature vectors (100+ features: genre ratios, skip rates, time-of-day, listening duration, etc.). Design a clustering pipeline that: (a) reduces dimensionality to 10 features, (b) identifies 5-8 listening personas with soft assignments, and (c) detects anomalous listening sessions (e.g., a shared account used by multiple people). Which algorithms would you choose at each step and why?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of Unsupervised Learning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " What is the primary difference between K-means clustering and the K-Nearest Neighbors (KNN) algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** K-means is an unsupervised clustering algorithm that groups unlabeled data, while KNN is a supervised classification algorithm that requires labeled training data to make predictions.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) K-means is slower than KNN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) K-means is unsupervised; KNN is supervised"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) K-means requires labeled data; KNN does not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) K-means can only handle two clusters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Which linkage criterion for hierarchical clustering tends to produce the most balanced, spherical clusters?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**C)** Ward linkage minimizes the increase in within-cluster variance at each merge, which tends to produce compact, balanced, spherical clusters similar to K-means.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Single linkage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Complete linkage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Ward linkage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Average linkage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " A silhouette score close to 1 indicates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**A)** A silhouette score near 1 means each point is much closer to its own cluster than to neighboring clusters ? indicating well-separated, compact clusters.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Well-separated, dense clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Overlapping clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Poor clustering with points assigned to wrong clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The optimal number of clusters has been found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Which of the following is NOT a property of DBSCAN?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** DBSCAN does not require K in advance, it handles arbitrary shapes, and it identifies noise. However, it does NOT assume spherical clusters ? that limitation belongs to K-means.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It can identify noise points as outliers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It assumes clusters are spherical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It does not require the user to specify K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It can find arbitrarily shaped clusters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " In Gaussian Mixture Models, what does the Expectation (E) step compute?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**C)** The E-step computes the responsibility $\\gamma(z_{nk})$, which is the posterior probability that data point $n$ belongs to component $k$, given the current parameter estimates.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The maximum likelihood estimate of the means"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The covariance matrix for each component"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The responsibility of each component for each data point"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) The mixing coefficients ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "π"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\pi_k"
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
                  children: "π"
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
              })]
            })
          })]
        })]
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