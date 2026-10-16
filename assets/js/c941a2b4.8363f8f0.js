"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6781],{

/***/ 774
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_index_md_c94_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-index-md-c94.json
const site_docs_courses_machine_learning_index_md_c94_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/index","title":"Machine Learning — Complete University Textbook","description":"Course Description","source":"@site/docs/courses/machine-learning/index.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning","permalink":"/ai-engineering-journey/machine-learning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"index","slug":"/machine-learning","title":"Machine Learning — Complete University Textbook","sidebar_label":"Machine Learning — Complete University Textbook","sidebar_position":11},"sidebar":"course-machine-learning","previous":{"title":"Chapter 10: Model Selection and Evaluation","permalink":"/ai-engineering-journey/machine-learning/10-model-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/machine-learning/index.md


const frontMatter = {
	id: 'index',
	slug: '/machine-learning',
	title: 'Machine Learning — Complete University Textbook',
	sidebar_label: 'Machine Learning — Complete University Textbook',
	sidebar_position: 11
};
const contentTitle = 'Machine Learning — Complete University Textbook';

const assets = {

};



const toc = [{
  "value": "Course Description",
  "id": "course-description",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Study Path",
  "id": "study-path",
  "level": 2
}, {
  "value": "Chapter Listing",
  "id": "chapter-listing",
  "level": 2
}, {
  "value": "Supplementary Resources",
  "id": "supplementary-resources",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "machine-learning--complete-university-textbook",
        children: "Machine Learning — Complete University Textbook"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-description",
      children: "Course Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This textbook provides a rigorous, university-level introduction to the fundamental concepts, algorithms, and mathematical frameworks of machine learning. Students progress from core regression and classification techniques through advanced topics including ensemble methods, support vector machines, neural networks, unsupervised learning, and dimensionality reduction. Each chapter balances theoretical foundations with practical implementation insights."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The course emphasizes the systematic evaluation of models through cross-validation, performance metrics, and hyperparameter tuning. By the end of the curriculum, students will possess both the mathematical intuition and the applied skills necessary to select, train, evaluate, and deploy machine learning models for real-world problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multivariable calculus (derivatives, partial derivatives, gradients)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear algebra (vectors, matrices, eigenvalues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic probability and statistics (distributions, expectation, variance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proficiency in Python programming with NumPy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "study-path",
      children: "Study Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chapters 1–3 establish the supervised learning paradigm through regression and probabilistic classification. Chapters 4–6 introduce more sophisticated models including decision trees, ensemble methods, and support vector machines. Chapter 7 covers neural networks, the foundation of modern deep learning. Chapters 8–9 explore unsupervised learning and dimensionality reduction. Chapter 10 concludes with model evaluation, selection, and the bias-variance tradeoff."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-listing",
      children: "Chapter Listing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "01-introduction.md",
              children: "Introduction to Machine Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML vs traditional programming, supervised/unsupervised/reinforcement learning, ML pipeline, generalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "02-linear-regression.md",
              children: "Linear Regression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple & multiple linear regression, cost function (MSE), gradient descent, parameter optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "03-logistic-regression.md",
              children: "Logistic Regression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, sigmoid function, cross-entropy loss, decision thresholds, probabilistic interpretation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "04-decision-trees.md",
              children: "Decision Trees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree structure, entropy & information gain, Gini impurity, ID3/CART algorithms, pruning, overfitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "05-ensemble-methods.md",
              children: "Ensemble Methods"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bagging vs boosting, Random Forests, Gradient Boosting, AdaBoost, wisdom of the crowd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "06-support-vector-machines.md",
              children: "Support Vector Machines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum margin hyperplane, support vectors, hard & soft margin, kernel trick, non-linear separation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "07-neural-networks.md",
              children: "Neural Networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptron, multi-layer perceptron, activation functions (ReLU, Sigmoid, Tanh), backpropagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "08-unsupervised-learning.md",
              children: "Unsupervised Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means clustering, hierarchical clustering, dendrograms, clustering evaluation metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "09-dimensionality-reduction.md",
              children: "Dimensionality Reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curse of dimensionality, PCA, explained variance ratio, feature extraction, preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "10-model-evaluation.md",
              children: "Model Selection and Evaluation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias-variance tradeoff, K-fold cross-validation, precision/recall/F1, ROC-AUC, hyperparameter tuning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supplementary-resources",
      children: "Supplementary Resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "An Introduction to Statistical Learning"
        }), " by James, Witten, Hastie & Tibshirani"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Pattern Recognition and Machine Learning"
        }), " by Christopher Bishop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "The Elements of Statistical Learning"
        }), " by Hastie, Tibshirani & Friedman"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scikit-learn documentation and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kaggle competitions for applied practice"
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



/***/ }

}]);