"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5996],{

/***/ 52357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_06_recurrence_md_af5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-06-recurrence-md-af5.json
const site_docs_courses_discrete_mathematics_06_recurrence_md_af5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/06-recurrence","title":"Chapter 6: Recurrence Relations","description":"Previous Combinatorics | Next Relations","source":"@site/docs/courses/discrete-mathematics/06-recurrence.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/06-recurrence","permalink":"/ai-engineering-journey/discrete-mathematics/06-recurrence","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-recurrence","slug":"/discrete-mathematics/06-recurrence","title":"Chapter 6: Recurrence Relations","sidebar_label":"Chapter 6: Recurrence Relations","sidebar_position":6},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 5: Combinatorics","permalink":"/ai-engineering-journey/discrete-mathematics/05-combinatorics"},"next":{"title":"Chapter 7: Relations","permalink":"/ai-engineering-journey/discrete-mathematics/07-relations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/06-recurrence.md


const frontMatter = {
	id: '06-recurrence',
	slug: '/discrete-mathematics/06-recurrence',
	title: 'Chapter 6: Recurrence Relations',
	sidebar_label: 'Chapter 6: Recurrence Relations',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Recurrence Relations';

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
  "value": "6.1 Definitions",
  "id": "61-definitions",
  "level": 3
}, {
  "value": "6.2 Solving by Iteration (Forward Substitution)",
  "id": "62-solving-by-iteration-forward-substitution",
  "level": 3
}, {
  "value": "6.3 Solving by Backward Substitution",
  "id": "63-solving-by-backward-substitution",
  "level": 3
}, {
  "value": "6.4 Linear Homogeneous Recurrences",
  "id": "64-linear-homogeneous-recurrences",
  "level": 3
}, {
  "value": "6.5 Linear Nonhomogeneous Recurrences",
  "id": "65-linear-nonhomogeneous-recurrences",
  "level": 3
}, {
  "value": "6.6 Generating Functions",
  "id": "66-generating-functions",
  "level": 3
}, {
  "value": "6.7 The Master Theorem",
  "id": "67-the-master-theorem",
  "level": 3
}, {
  "value": "6.8 Recurrences in Algorithm Analysis",
  "id": "68-recurrences-in-algorithm-analysis",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "6.7 Solving Recurrences with TypeScript",
  "id": "67-solving-recurrences-with-typescript",
  "level": 3
}, {
  "value": "6.8 Master Theorem ? Extended Cases",
  "id": "68-master-theorem--extended-cases",
  "level": 3
}, {
  "value": "6.9 Generating Functions ? Extended Examples",
  "id": "69-generating-functions--extended-examples",
  "level": 3
}, {
  "value": "6.10 Nonhomogeneous Recurrences ? Root Conflict Handling",
  "id": "610-nonhomogeneous-recurrences--root-conflict-handling",
  "level": 3
}, {
  "value": "6.11 Recurrence Applications in Algorithms",
  "id": "611-recurrence-applications-in-algorithms",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-6-recurrence-relations",
        children: "Chapter 6: Recurrence Relations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/05-combinatorics",
          children: "Chapter 5: Combinatorics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/07-relations",
          children: "Chapter 7: Relations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/06-recurrence.png",
        alt: "Recurrence Relations Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model sequences using recurrence relations and initial conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve linear recurrences by iteration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve homogeneous linear recurrences with constant coefficients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve nonhomogeneous recurrences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use generating functions to solve recurrences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze algorithm complexity via recurrences and the Master theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply recurrence solving to divide-and-conquer algorithms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Recurrence Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequences defined by earlier terms and initial conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model problems where current state depends on previous states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iteration Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute terms forward or backward until a pattern emerges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for simple recurrences; always prove closed form by induction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Homogeneous Recurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solved via characteristic polynomial roots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solution is a linear combination of $r^n$ terms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nonhomogeneous Recurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add particular solution to homogeneous solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guess the form of $f(n)$ and solve for coefficients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform recurrence into algebraic equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful for complex recurrences; use partial fractions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer yields recurrences for time complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master theorem bypasses full recurrence solving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed-form for $T(n) = aT(n/b) + f(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three cases based on $f(n)$ vs $n^{\\log_b a}$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Recurrence Definitions] --> B[Iteration Methods]\n    A --> C[Backward Substitution]\n    C --> D[Linear Homogeneous Recurrences]\n    D --> E[Characteristic Equation]\n    E --> F{Distinct or Repeated Roots?}\n    F -->|Distinct| G[a_n = S a_i r_i^n]\n    F -->|Repeated| H[a_n = (S a_i n^i) r^n]\n    D --> I[Nonhomogeneous Recurrences]\n    I --> J[Particular + Homogeneous Solution]\n    A --> K[Generating Functions]\n    K --> L[Algebraic Equation ? Coefficients]\n    D --> M[Algorithm Analysis]\n    M --> N[Master Theorem]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-definitions",
      children: "6.1 Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recurrence relation"
      }), " for a sequence ${a_n}$ is an equation relating $a_n$ to one or more preceding terms $a_{n-1}, a_{n-2}, \\ldots, a_{n-k}$ for $n \\geq k$. A sequence is called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "solution"
      }), " if its terms satisfy the recurrence for all $n \\geq k$. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "initial conditions"
      }), " specify $a_0, a_1, \\ldots, a_{k-1}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example."
      }), " The Fibonacci recurrence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = 1, F_2 = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order"
      }), " (or degree) of a recurrence is the difference between the largest and smallest index in the equation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A recurrence relation defines each term using previous terms; without initial conditions the sequence is not uniquely determined."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always specify initial conditions clearly ? the recurrence alone is insufficient to determine a unique sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-solving-by-iteration-forward-substitution",
      children: "6.2 Solving by Iteration (Forward Substitution)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Work forward from initial conditions, computing terms until a pattern emerges, then prove by induction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " $a_n = a_{n-1} + 3$, $a_0 = 2$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a_1 = 5$, $a_2 = 8$, $a_3 = 11$, $a_4 = 14$. Pattern: $a_n = 2 + 3n$. Prove by induction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Forward iteration builds terms explicitly until a pattern appears; always verify the guessed closed form by induction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-solving-by-backward-substitution",
      children: "6.3 Solving by Backward Substitution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Express $a_n$ in terms of $a_{n-1}$, then $a_{n-1}$ in terms of $a_{n-2}$, continuing until reaching the base case. This often reveals a closed form."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " $a_n = 2a_{n-1}$, $a_0 = 3$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a_n = 2a_{n-1} = 2(2a_{n-2}) = 2^2 a_{n-2} = \\cdots = 2^n a_0 = 3 \\cdot 2^n$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Backward substitution repeatedly expands the current term into previous terms until the base case is reached, exposing a pattern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-linear-homogeneous-recurrences",
      children: "6.4 Linear Homogeneous Recurrences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear homogeneous recurrence of degree $k$ with constant coefficients"
      }), " has the form:\n$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\cdots + c_k a_{n-k}$$\nwhere $c_1, \\ldots, c_k \\in \\mathbb{R}$ and $c_k \\neq 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "characteristic equation"
      }), " is:\n$$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\cdots - c_k = 0$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.1 (Distinct roots)."
      }), " If the characteristic equation has distinct roots $r_1, r_2, \\ldots, r_k$, then:\n$$a_n = \\alpha_1 r_1^n + \\alpha_2 r_2^n + \\cdots + \\alpha_k r_k^n$$\nwhere $\\alpha_i$ are constants determined by initial conditions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.2 (Repeated roots)."
      }), " If a root $r$ has multiplicity $m$, then the solution includes $(\\alpha_1 + \\alpha_2 n + \\cdots + \\alpha_m n^{m-1}) r^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.3 (Complex roots)."
      }), " If the characteristic equation has complex conjugate roots $re^{\\pm i\\theta}$, then the solution includes $\\alpha r^n \\cos(n\\theta) + \\beta r^n \\sin(n\\theta)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Solve linear homogeneous recurrence of degree 2\nfunction solveLinearRecurrence(\n  c1: number, c2: number,        // coefficients: a_n = c1*a_{n-1} + c2*a_{n-2}\n  a0: number, a1: number,        // initial conditions\n  n: number                       // term to compute\n): number {\n  // Characteristic equation: r^2 - c1*r - c2 = 0\n  const discriminant = c1 * c1 + 4 * c2;\n  if (discriminant > 0) {\n    // Distinct real roots\n    const r1 = (c1 + Math.sqrt(discriminant)) / 2;\n    const r2 = (c1 - Math.sqrt(discriminant)) / 2;\n    // Solve for alpha, beta: a0 = a + ?, a1 = a*r1 + ?*r2\n    const beta = (a1 - a0 * r1) / (r2 - r1);\n    const alpha = a0 - beta;\n    return alpha * r1 ** n + beta * r2 ** n;\n  } else if (discriminant === 0) {\n    // Repeated root\n    const r = c1 / 2;\n    const beta = (a1 - a0 * r) / r; // n=1 case: a1 = (a + ?*1)*r\n    const alpha = a0;\n    return (alpha + beta * n) * r ** n;\n  } else {\n    // Complex roots ? return Fibonacci-style via iteration\n    let prev2 = a0, prev1 = a1;\n    for (let i = 2; i <= n; i++) {\n      const curr = c1 * prev1 + c2 * prev2;\n      prev2 = prev1;\n      prev1 = curr;\n    }\n    return prev1;\n  }\n}\n\n// Fibonacci: F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1\nconsole.log(solveLinearRecurrence(1, 1, 0, 1, 10)); // 55\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Linear homogeneous recurrences are solved via the characteristic polynomial; distinct roots give independent $r^n$ terms while repeated roots multiply by powers of $n$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always write the characteristic equation as $r^k - c_1 r^{k-1} - \\dots - c_k = 0$, not $r^k = c_1 r^{k-1} + \\dots$ ? the sign convention matters when roots are negative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-linear-nonhomogeneous-recurrences",
      children: "6.5 Linear Nonhomogeneous Recurrences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear nonhomogeneous recurrence"
      }), " has the form:\n$$a_n = c_1 a_{n-1} + \\cdots + c_k a_{n-k} + f(n)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The solution is $a_n = a_n^{(h)} + a_n^{(p)}$, where $a_n^{(h)}$ solves the homogeneous part and $a_n^{(p)}$ is a particular solution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding $a_n^{(p)}$ when $f(n)$ is a polynomial:"
      }), " Try a polynomial of the same degree.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When $f(n)$ is exponential $r^n$:"
      }), " Try $A \\cdot r^n$. If $r$ is a characteristic root, try $A n^m r^n$ where $m$ is the multiplicity."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$f(n)$ Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Initial Guess for $a_n^{(p)}$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "If Root Conflict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant $C$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cdot n^m$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear $an + b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$An + B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(An + B) \\cdot n^m$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic $an^2 + bn + c$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$An^2 + Bn + C$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(An^2 + Bn + C) \\cdot n^m$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential $C \\cdot r^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cdot r^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cdot n^m \\cdot r^n$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Nonhomogeneous recurrences are solved by adding a particular solution (guessed from $f(n)$'s form) to the homogeneous solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " When $f(n)$ already appears as a characteristic root, the standard particular solution guess must be multiplied by $n^m$ to avoid duplication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-generating-functions",
      children: "6.6 Generating Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "(ordinary) generating function"
      }), " of a sequence ${a_n}$ is:\n$$G(x) = \\sum_{n=0}^{\\infty} a_n x^n$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.4 (Basic generating functions)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a_n = \\alpha^n$: $G(x) = \\frac{1}{1 - \\alpha x}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a_n = n$: $G(x) = \\frac{x}{(1 - x)^2}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a_n = n^2$: $G(x) = \\frac{x(1+x)}{(1-x)^3}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a_n = \\binom{n+k}{k}$: $G(x) = \\frac{1}{(1-x)^{k+1}}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solving with generating functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express the recurrence as an equation in $G(x)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve for $G(x)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract coefficients via partial fractions to get $a_n$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Solve $a_n = 2a_{n-1} + 1$, $a_0 = 0$ using generating functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $G(x) = \\sum_{n \\geq 0} a_n x^n$. Then $a_n x^n = 2a_{n-1} x^n + x^n$. Summing $n \\geq 1$:\n$G(x) - a_0 = 2xG(x) + \\frac{x}{1-x}$. Since $a_0 = 0$, we have $G(x) = 2xG(x) + \\frac{x}{1-x}$.\n$G(x)(1 - 2x) = \\frac{x}{1-x} \\implies G(x) = \\frac{x}{(1-x)(1-2x)}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partial fractions: $\\frac{x}{(1-x)(1-2x)} = \\frac{-1}{1-x} + \\frac{1}{1-2x}$.\nThus $G(x) = -\\sum x^n + \\sum (2x)^n = \\sum (2^n - 1) x^n$, so $a_n = 2^n - 1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Extract coefficients from generating function via Taylor expansion\nfunction generatingFunctionCoefficients(\n  numerator: number[],\n  denominatorRoots: number[],\n  limit: number\n): number[] {\n  // Simple case: G(x) = S a_n x^n ? use recurrence\n  const result: number[] = [];\n  // If we know the closed form via partial fractions, compute directly\n  for (let n = 0; n <= limit; n++) {\n    let sum = 0;\n    for (const root of denominatorRoots) {\n      const coeff = 1 / denominatorRoots.reduce((p, r) => r === root ? p : p * (root - r), 1);\n      sum += coeff * (1 / root) ** (n + 1); // Simplified ? actual formula depends on partial fraction decomposition\n    }\n    result.push(sum);\n  }\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Generating functions turn recurrence relations into algebraic equations by encoding the entire sequence as a power series."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-the-master-theorem",
      children: "6.7 The Master Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.5 (Master Theorem)."
      }), " Let $T(n) = a T(n/b) + f(n)$ where $a \\geq 1$, $b > 1$, and $f(n)$ is asymptotically positive. Then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f(n) = O(n^{\\log_b a - \\epsilon})$ for some $\\epsilon > 0$, then $T(n) = \\Theta(n^{\\log_b a})$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f(n) = \\Theta(n^{\\log_b a})$, then $T(n) = \\Theta(n^{\\log_b a} \\log n)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ for some $\\epsilon > 0$ and $a f(n/b) \\leq c f(n)$ for some $c < 1$ and large $n$, then $T(n) = \\Theta(f(n))$."
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$a$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$b$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$f(n)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$\\log_b a$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = T(n-1) + 1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Theta(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = T(n/2) + 1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n^0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Theta(\\log n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = 2T(n/2) + n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n^1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Theta(n \\log n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strassen's matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = 7T(n/2) + n^2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n^2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\log_2 7 \\approx 2.81$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Theta(n^{2.81})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Median of medians"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = T(n/5) + T(7n/10) + n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Theta(n)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Master theorem provides immediate closed-form solutions for recurrences of the form $T(n) = aT(n/b) + f(n)$ by comparing $f(n)$ to $n^{\\log_b a}$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-recurrences-in-algorithm-analysis",
      children: "6.8 Recurrences in Algorithm Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simulate divide-and-conquer recurrence T(n) = 2T(n/2) + n\nfunction simulateMergeSortCost(n: number): number {\n  if (n <= 1) return 1;\n  const half = Math.floor(n / 2);\n  return simulateMergeSortCost(half) + simulateMergeSortCost(n - half) + n;\n}\n\nfunction masterTheorem(a: number, b: number, fExponent: number, logBA: number): string {\n  if (fExponent < logBA) return `T(n^${logBA})`;\n  if (fExponent === logBA) return `T(n^${logBA} log n)`;\n  return `T(n^${fExponent})`;\n}\n\nconsole.log(masterTheorem(2, 2, 1, 1)); // T(n log n) ? merge sort\nconsole.log(masterTheorem(1, 2, 0, 0)); // T(log n) ? binary search\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Forward Iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute terms sequentially from initial conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds terms explicitly; guess then prove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple recurrences like $a_n = a_{n-1} + d$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand $a_n$ repeatedly until base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces closed form directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply-through recurrences like $a_n = c a_{n-1}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Characteristic Equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial whose roots define the solution"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only works for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "linear homogeneous"
            }), " recurrences"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-coefficient recurrences of any degree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Particular Solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single solution to the nonhomogeneous recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be added to the homogeneous solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrences with polynomial or exponential $f(n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$G(x) = \\sum a_n x^n$ encodes the sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms recurrence into algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex recurrences, combinatorial sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm Recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n)$ models runtime as a function of input size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often uses divide-and-conquer patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyzing sorting, searching, and divide-and-conquer algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed-form for $T(n) = aT(n/b) + f(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three cases based on comparison of $f(n)$ to $n^{\\log_b a}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick complexity analysis of divide-and-conquer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear homogeneous (degree 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = c a_{n-1}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = a_0 c^n$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear homogeneous (degree 2, distinct roots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = c_1 a_{n-1} + c_2 a_{n-2}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = \\alpha r_1^n + \\beta r_2^n$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear homogeneous (degree 2, repeated root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = c_1 a_{n-1} + c_2 a_{n-2}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = (\\alpha + \\beta n) r^n$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nonhomogeneous (polynomial $f(n)$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = c a_{n-1} + f(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Homogeneous + particular (try polynomial of same degree)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nonhomogeneous (exponential $f(n)$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a_n = c a_{n-1} + r^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Homogeneous + $A r^n$ (or $A n^m r^n$ if root)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any linear recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$G(x)$ algebraic equation $\\rightarrow$ partial fractions $\\rightarrow$ coefficients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem Case 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(n) = O(n^{\\log_b a - \\epsilon})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = \\Theta(n^{\\log_b a})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem Case 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(n) = \\Theta(n^{\\log_b a})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = \\Theta(n^{\\log_b a} \\log n)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem Case 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(n) = \\Omega(n^{\\log_b a + \\epsilon})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T(n) = \\Theta(f(n))$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Combinatorics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrence Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm complexity analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sequences, Catalan numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital signal processing (IIR filters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loan amortization, compound interest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Characteristic Equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solving divide-and-conquer recurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, derangements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vibration analysis, differential equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Population growth models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinatorial generation, partition problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence manipulation, closed forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability generating functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moment-generating functions in statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort, binary search runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded system timing analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick complexity class determination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time system scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the degree of the recurrence $a_n = 3a_{n-2} + 5a_{n-5}$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 7"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** 5 ? the degree is the furthest back term referenced ($n-5$)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which recurrence corresponds to merge sort's time complexity?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $T(n) = T(n-1) + 1$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $T(n) = T(n/2) + 1$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $T(n) = 2T(n/2) + n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $T(n) = 2T(n-1) + 1$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $T(n) = 2T(n/2) + n$ ? splitting into two halves with linear merge cost gives $\\Theta(n \\log n)$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A recurrence has characteristic roots $r=3$ (multiplicity 2). The general solution is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $a_n = \\alpha 3^n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $a_n = (\\alpha + \\beta n) 3^n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $a_n = \\alpha 3^n + \\beta (-3)^n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $a_n = \\alpha 3^n + \\beta n 3^n$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $a_n = (\\alpha + \\beta n) 3^n$ ? repeated roots multiply the $r^n$ term by a polynomial in $n$ of degree one less than multiplicity. (Note: D is also equivalent since $(\\alpha + \\beta n)3^n$ and $\\alpha 3^n + \\beta n 3^n$ are the same ? but B is the standard form.)</details>\n"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the recurrence $T(n) = 4T(n/2) + n$, the Master theorem gives:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\Theta(n^2)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\Theta(n^2 \\log n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\Theta(n \\log n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\Theta(n)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $\\Theta(n^2)$ ? $a=4$, $b=2$, $\\log_2 4 = 2$, $f(n) = n = O(n^{2-\\epsilon})$, case 1."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The generating function for $a_n = 3 \\cdot 5^n$ is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $G(x) = 3/(1 - 5x)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $G(x) = 5/(1 - 3x)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $G(x) = 1/(1 - 5x)^3$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $G(x) = 3/(5 - x)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $G(x) = \\sum_{n \\geq 0} 3 \\cdot 5^n x^n = 3 \\sum (5x)^n = 3/(1 - 5x)$."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.1"
      }), " (Iteration). Solve $a_n = a_{n-1} + 3$, $a_0 = 2$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $a_1 = 5$, $a_2 = 8$, $a_3 = 11$ ? pattern $a_n = 2 + 3n$. Induction confirms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.2"
      }), " (Backward substitution). Solve $a_n = 2a_{n-1}$, $a_0 = 3$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $a_n = 2a_{n-1} = 2(2a_{n-2}) = \\cdots = 2^n a_0 = 3 \\cdot 2^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.3"
      }), " (Characteristic equation ? distinct roots). Solve $a_n = a_{n-1} + 2a_{n-2}$, $a_0 = 2$, $a_1 = 3$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Characteristic: $r^2 - r - 2 = 0 \\implies r = 2$ or $r = -1$. General: $a_n = \\alpha 2^n + \\beta (-1)^n$. Using $a_0 = 2 \\implies \\alpha + \\beta = 2$. $a_1 = 3 \\implies 2\\alpha - \\beta = 3$. Solving: $\\alpha = 5/3$, $\\beta = 1/3$. So $a_n = \\frac{5}{3} 2^n + \\frac{1}{3} (-1)^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.4"
      }), " (Characteristic ? repeated root). Solve $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $r^2 - 4r + 4 = 0 \\implies (r-2)^2 = 0 \\implies r = 2$ (multiplicity 2). General: $a_n = (\\alpha + \\beta n)2^n$. $a_0 = \\alpha = 1$. $a_1 = (\\alpha + \\beta)2 = (1+\\beta)2 = 4 \\implies \\beta = 1$. So $a_n = (1 + n)2^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.5"
      }), " (Nonhomogeneous). Solve $a_n = a_{n-1} + 2n$, $a_0 = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Homogeneous part: $a_n^{(h)} = \\alpha \\cdot 1^n = \\alpha$. Particular: try $a_n^{(p)} = An + B$:\n$An + B = A(n-1) + B + 2n \\implies An + B = An - A + B + 2n \\implies 0 = -A + 2n \\implies A = 2n$ (contradiction ? degree mismatch). Try $a_n^{(p)} = An^2 + Bn$:\n$An^2 + Bn = A(n-1)^2 + B(n-1) + 2n = A(n^2 - 2n + 1) + Bn - B + 2n$\nSimplify: $An^2 + Bn = An^2 + (-2A + B + 2)n + (A - B)$\nCompare coefficients: $A = A$ (ok); $B = -2A + B + 2 \\implies 0 = -2A + 2 \\implies A = 1$; $0 = A - B \\implies B = 1$.\nSo $a_n^{(p)} = n^2 + n$. Thus $a_n = \\alpha + n^2 + n$. $a_0 = \\alpha = 1 \\implies a_n = n^2 + n + 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.6"
      }), " (Generating function). Solve $a_n = 3a_{n-1}$, $a_0 = 2$ using generating functions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $G(x) = \\sum a_n x^n$, so $G(x) - 2 = 3xG(x)$, thus $G(x)(1 - 3x) = 2$, $G(x) = 2/(1 - 3x) = 2\\sum (3x)^n = \\sum 2\\cdot 3^n x^n$, so $a_n = 2\\cdot 3^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.7"
      }), " (Master theorem ? binary search). $T(n) = T(n/2) + 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a = 1$, $b = 2$, $\\log_2 1 = 0$, $f(n) = 1 = \\Theta(n^0)$. Case 2: $T(n) = \\Theta(\\log n)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.8"
      }), " (Nonhomogeneous with root conflict). Solve $a_n = 2a_{n-1} + 3^n$, $a_0 = 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Homogeneous: $a_n^{(h)} = \\alpha \\cdot 2^n$. For the particular, try $A \\cdot 3^n$ (3 is not a characteristic root). $A \\cdot 3^n = 2A \\cdot 3^{n-1} + 3^n \\implies A \\cdot 3^n = 2A \\cdot 3^{n-1} + 3^n$. Divide by $3^{n-1}$: $3A = 2A + 3 \\implies A = 3$. So $a_n^{(p)} = 3 \\cdot 3^n = 3^{n+1}$. Thus $a_n = \\alpha \\cdot 2^n + 3^{n+1}$. $a_0 = \\alpha + 3 = 0 \\implies \\alpha = -3$. So $a_n = -3 \\cdot 2^n + 3^{n+1} = 3(3^n - 2^n)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-solving-recurrences-with-typescript",
      children: "6.7 Solving Recurrences with TypeScript"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General Linear Recurrence Solver"
      }), " (for homogeneous recurrences with constant coefficients)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function solveLinearRecurrence(\n  coeffs: number[],\n  initial: number[],\n  n: number\n): number[] {\n  const k = coeffs.length;\n  const seq = [...initial];\n\n  for (let i = k; i <= n; i++) {\n    let next = 0;\n    for (let j = 0; j < k; j++) {\n      next += coeffs[j] * seq[i - 1 - j];\n    }\n    seq.push(next);\n  }\n  return seq;\n}\n\n// Fibonacci: a_n = a_{n-1} + a_{n-2}, a_0 = 0, a_1 = 1\nconsole.log(solveLinearRecurrence([1, 1], [0, 1], 10));\n// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]\n\n// a_n = 2a_{n-1} + 3a_{n-2}, a_0 = 1, a_1 = 2\nconsole.log(solveLinearRecurrence([2, 3], [1, 2], 8));\n// [1, 2, 7, 20, 61, 182, 547, 1640, 4921]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Divide-and-Conquer Recurrence Simulator."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function simulateDivideConquer(\n  a: number,\n  b: number,\n  f: (n: number) => number,\n  base: (n: number) => number,\n  n: number\n): number {\n  if (n <= 1) return base(n);\n  return a * simulateDivideConquer(a, b, f, base, Math.floor(n / b)) + f(n);\n}\n\n// Merge sort: T(n) = 2T(n/2) + n, T(1) = 0\nconst mergeSortCost = (n: number) => simulateDivideConquer(2, 2, n => n, n => 0, n);\nconsole.log(mergeSortCost(8));  // 24 operations\n\n// Binary search: T(n) = T(n/2) + 1, T(1) = 0\nconst binarySearchCost = (n: number) => simulateDivideConquer(1, 2, n => 1, n => 0, n);\nconsole.log(binarySearchCost(16)); // 4 comparisons\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-master-theorem--extended-cases",
      children: "6.8 Master Theorem ? Extended Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 6.3 (Master Theorem)."
      }), " For recurrences of the form $T(n) = aT(n/b) + f(n)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $\\alpha = \\log_b a$. Compare $f(n)$ to $n^\\alpha$:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 1:"
        }), " $f(n) = O(n^{\\alpha - \\epsilon})$ ? $T(n) = \\Theta(n^\\alpha)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 2:"
        }), " $f(n) = \\Theta(n^\\alpha \\log^k n)$ ? $T(n) = \\Theta(n^\\alpha \\log^{k+1} n)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case 3:"
        }), " $f(n) = \\Omega(n^{\\alpha + \\epsilon})$ and $af(n/b) \\leq c f(n)$ for some $c < 1$ ? $T(n) = \\Theta(f(n))$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function masterTheorem(\n  a: number,\n  b: number,\n  fExponent: number,\n  fLogPower: number\n): string {\n  const alpha = Math.log(a) / Math.log(b);\n  const diff = fExponent - alpha;\n\n  if (Math.abs(diff) < 1e-10) {\n    if (fLogPower === -1) return `T(n^${alpha} log log n)`;\n    return `T(n^${alpha} log^${fLogPower + 1} n)`;\n  }\n  if (diff < 0) return `T(n^${alpha.toFixed(2)})`;\n  if (diff > 0) return `T(n^${fExponent})`;\n  return \"Check regularity condition\";\n}\n\nconsole.log(masterTheorem(2, 2, 1, 0));   // Merge sort: T(n log n)\nconsole.log(masterTheorem(1, 2, 0, 0));   // Binary search: T(log n)\nconsole.log(masterTheorem(4, 2, 2, 0));   // Case 2: T(n? log n)\nconsole.log(masterTheorem(2, 2, 2, 0));   // Case 3: T(n?)\nconsole.log(masterTheorem(3, 4, 1, 0));   // Case 1: T(n^0.79)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "69-generating-functions--extended-examples",
      children: "6.9 Generating Functions ? Extended Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "generating function"
      }), " encodes a sequence as coefficients of a power series: $G(x) = \\sum_{n=0}^\\infty a_n x^n$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function generatingFunction(\n  coeffFn: (n: number) => number,\n  terms: number\n): number[] {\n  return Array.from({ length: terms }, (_, i) => coeffFn(i));\n}\n\nfunction seqToGeneratingFunction(seq: number[]): string {\n  return seq.map((a, i) => a === 0 ? \"\" : `${a}x^${i}`).filter(s => s).join(\" + \");\n}\n\nconst fib = solveLinearRecurrence([1, 1], [0, 1], 8);\nconsole.log(seqToGeneratingFunction(fib));\n// \"0 + 1x^1 + 1x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7 + 21x^8\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.9"
      }), " (Generating function for Fibonacci numbers). The generating function $F(x) = \\sum F_n x^n$ satisfies $F(x) = x + xF(x) + x^2F(x)$, giving:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$F(x) = \\frac{x}{1 - x - x^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "610-nonhomogeneous-recurrences--root-conflict-handling",
      children: "6.10 Nonhomogeneous Recurrences ? Root Conflict Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the nonhomogeneous term matches a characteristic root, multiply the particular solution by $n^m$ where $m$ is the root multiplicity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.10"
      }), " (Root conflict). Solve $a_n = 5a_{n-1} - 6a_{n-2} + 2^n$, $a_0 = 0$, $a_1 = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Characteristic: $r^2 - 5r + 6 = 0 \\to r = 2, 3$. Homogeneous: $a_n^{(h)} = \\alpha \\cdot 2^n + \\beta \\cdot 3^n$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since $2$ is a characteristic root, the particular solution attempts $A \\cdot n \\cdot 2^n$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A n 2^n = 5A (n-1)2^{n-1} - 6A (n-2)2^{n-2} + 2^n$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide through by $2^{n-2}$: $4An = 10A(n-1) - 6A(n-2) + 4$\n$4An = 10An - 10A - 6An + 12A + 4 = 4An + 2A + 4$\nThus $0 = 2A + 4 \\implies A = -2$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Particular: $a_n^{(p)} = -2n \\cdot 2^n$. General: $a_n = \\alpha \\cdot 2^n + \\beta \\cdot 3^n - 2n \\cdot 2^n$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using $a_0 = \\alpha + \\beta = 0$, $a_1 = 2\\alpha + 3\\beta - 4 = 1$, we get $\\alpha = 1$, $\\beta = -1$.\nThus $a_n = 2^n - 3^n - 2n \\cdot 2^n$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.11"
      }), " (Master theorem ? Strassen's matrix multiplication). $T(n) = 7T(n/2) + O(n^2)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a = 7$, $b = 2$, $\\alpha = \\log_2 7 \\approx 2.807$, $f(n) = n^2 = O(n^{2.807 - 0.807})$. Case 1: $T(n) = \\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2.807})$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-recurrence-applications-in-algorithms",
      children: "6.11 Recurrence Applications in Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Tower of Hanoi: T(n) = 2T(n-1) + 1, T(1) = 1\nfunction hanoi(n: number, from: string, to: string, aux: string): string[] {\n  if (n === 0) return [];\n  const moves: string[] = [];\n  moves.push(...hanoi(n - 1, from, aux, to));\n  moves.push(`Move disk ${n} from ${from} to ${to}`);\n  moves.push(...hanoi(n - 1, aux, to, from));\n  return moves;\n}\n\nconsole.log(hanoi(3, \"A\", \"C\", \"B\"));\n// Move disk 1 from A to C, disk 2 from A to B, ...\nconsole.log(`Total moves for 3 disks: ${Math.pow(2, 3) - 1}`); // 7\n\n// Quicksort worst case: T(n) = T(n-1) + n\nfunction quicksortCost(n: number): number {\n  if (n <= 1) return 0;\n  return n + quicksortCost(n - 1);\n}\nconsole.log(quicksortCost(10)); // 55 comparisons (n(n+1)/2 - n = n?/2 - n/2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Recurrence Solving Strategy\"\n        A[Tn = ...] --> B{Linear?}\n        B -->|Yes| C{Constant<br/>Coefficients?}\n        B -->|No| D[Iteration or<br/>Substitution]\n        C -->|Yes| E{Homogeneous?}\n        C -->|No| F[Generating<br/>Functions]\n        E -->|Yes| G[Characteristic<br/>Equation]\n        E -->|No| H[Homogeneous +<br/>Particular]\n        G --> I[r^k - c1r^{k-1} - ... = 0]\n        I --> J[Roots ? General Form]\n        H --> K[Root Conflict?]\n        K -->|Yes| L[Multiply by n^m]\n        K -->|No| M[Standard Form]\n        D --> N[Guess then<br/>Induction Proof]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.12"
      }), " (Divide-and-conquer ? maximum subarray). The divide-and-conquer approach for Kadane's problem can be analyzed as $T(n) = 2T(n/2) + O(n) = O(n \\log n)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 6.5"
      }), " (Correctness of Master theorem case 2). Let $T(n) = aT(n/b) + cn^\\alpha \\log^k n$ where $\\alpha = \\log_b a$. Expanding the recurrence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$T(n) = n^\\alpha \\sum_{j=0}^{\\log_b n} c \\log^k\\left(\\frac{n}{b^j}\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sum approximates $\\int_0^{\\log_b n} c(\\log_b n - x)^k ,dx = \\frac{c}{k+1} (\\log_b n)^{k+1}$, giving $T(n) = \\Theta(n^\\alpha \\log^{k+1} n)$. $\\square$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6.13"
      }), " (Solving $a_n = a_{n-1} + a_{n-2}$ ? Fibonacci closed form)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fibonacciClosedForm(n: number): number {\n  const phi = (1 + Math.sqrt(5)) / 2;\n  const psi = (1 - Math.sqrt(5)) / 2;\n  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));\n}\n\nfor (let i = 0; i <= 10; i++) {\n  console.log(`F_${i} = ${fibonacciClosedForm(i)}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$ (double root case)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the Master theorem to analyze $T(n) = 8T(n/2) + n^3$. Which case applies?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve the recurrence $a_n = 2a_{n-1} - a_{n-2} + 2^n$, $a_0 = 0$, $a_1 = 2$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that the solution to $T(n) = 2T(\\lfloor n/2 \\rfloor) + n$ (merge sort) is $\\Theta(n \\log n)$ by induction."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that uses generating functions to compute the first 10 terms of any linear recurrence with constant coefficients."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Fibonacci via Dynamic Programming ---\nfunction fibonacciDP(n: number): number {\n  if (n <= 1) return n;\n  const dp = [0, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\nconsole.log('Fibonacci(10):', fibonacciDP(10)); // 55\n\n// Space-optimized version\nfunction fibonacciOpt(n: number): number {\n  if (n <= 1) return n;\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) { const t = a + b; a = b; b = t; }\n  return b;\n}\nconsole.log('Fibonacci(50):', fibonacciOpt(50)); // 12586269025\n\n// --- Tower of Hanoi Solver ---\nfunction hanoiSteps(n: number, from: string, to: string, aux: string): string[] {\n  if (n === 0) return [];\n  const steps: string[] = [];\n  steps.push(...hanoiSteps(n - 1, from, aux, to));\n  steps.push(`Move disk ${n} from ${from} to ${to}`);\n  steps.push(...hanoiSteps(n - 1, aux, to, from));\n  return steps;\n}\nconsole.log('Hanoi(3):', hanoiSteps(3, 'A', 'C', 'B'));\n\n// --- Linear Recurrence Solver ---\nfunction linearRecurrence(\n  coeffs: number[],    // c_1, c_2, ..., c_k\n  initials: number[],  // a_0, a_1, ..., a_{k-1}\n  n: number\n): number {\n  const k = coeffs.length;\n  if (n < k) return initials[n];\n  const seq = [...initials];\n  for (let i = k; i <= n; i++) {\n    let term = 0;\n    for (let j = 0; j < k; j++) term += coeffs[j] * seq[i - 1 - j];\n    seq.push(term);\n  }\n  return seq[n];\n}\n// a_n = 3a_{n-1} - 2a_{n-2}, a_0=1, a_1=2\nconsole.log('Recurrence a_5:', linearRecurrence([3, -2], [1, 2], 5)); // ?\n\n// --- Master Theorem Analyzer ---\nfunction masterTheorem(a: number, b: number, fExponent: number): string {\n  const logBA = Math.log(a) / Math.log(b);\n  if (Math.abs(fExponent - logBA) < 1e-10) return `T(n^${logBA} log n)`;\n  if (fExponent < logBA) return `T(n^${logBA.toFixed(2)})`;\n  return `T(n^${fExponent})`; // assumes regularity condition holds\n}\n// T(n) = 2T(n/2) + n\nconsole.log('T(n)=2T(n/2)+n:', masterTheorem(2, 2, 1)); // T(n log n)\n// T(n) = 8T(n/2) + n^3\nconsole.log('T(n)=8T(n/2)+n?:', masterTheorem(8, 2, 3)); // T(n^3)\n\n// --- Divide-and-Conquer Recurrence Simulator ---\nfunction mergeSortComparisons(arr: number[]): number {\n  if (arr.length <= 1) return 0;\n  const mid = Math.floor(arr.length / 2);\n  const left = arr.slice(0, mid), right = arr.slice(mid);\n  let comps = mergeSortComparisons(left) + mergeSortComparisons(right);\n  let i = 0, j = 0, k = 0;\n  while (i < left.length && j < right.length) {\n    comps++;\n    if (left[i] <= right[j]) arr[k++] = left[i++];\n    else arr[k++] = right[j++];\n  }\n  while (i < left.length) arr[k++] = left[i++];\n  while (j < right.length) arr[k++] = right[j++];\n  return comps;\n}\nconsole.log('Merge sort comparisons:', mergeSortComparisons([5, 2, 4, 7, 1, 3, 6, 8])); // ~n log n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Matrix Exponentiation for Recurrences ---\nfunction matMul(A: number[][], B: number[][]): number[][] {\n  const n = A.length, m = B[0].length, p = A[0].length;\n  const C = Array.from({length: n}, () => new Array(m).fill(0));\n  for (let i = 0; i < n; i++)\n    for (let k = 0; k < p; k++)\n      if (A[i][k] !== 0)\n        for (let j = 0; j < m; j++)\n          C[i][j] += A[i][k] * B[k][j];\n  return C;\n}\nfunction matPow(M: number[][], exp: number): number[][] {\n  const n = M.length;\n  let result = Array.from({length: n}, (_, i) => Array.from({length: n}, (_, j) => i === j ? 1 : 0));\n  let base = M.map(r => [...r]);\n  let e = exp;\n  while (e > 0) { if (e & 1) result = matMul(result, base); base = matMul(base, base); e >>= 1; }\n  return result;\n}\n// Fibonacci via matrix exponentiation: [[1,1],[1,0]]^n\nfunction fibMatrix(n: number): number {\n  if (n === 0) return 0;\n  const M = [[1, 1], [1, 0]];\n  const Mn = matPow(M, n - 1);\n  return Mn[0][0];\n}\nconsole.log('Fib(50) via matrix exp:', fibMatrix(50));\nconsole.log('Fib(100) via matrix exp:', fibMatrix(100));\n\n// --- Linear Recurrence Solver ---\nfunction linearRecurrence(coeffs: number[], initial: number[], n: number): number {\n  const k = coeffs.length;\n  const seq = [...initial];\n  for (let i = seq.length; i <= n; i++) {\n    let next = 0;\n    for (let j = 0; j < k; j++) next += coeffs[j] * seq[i - 1 - j];\n    seq.push(next);\n  }\n  return seq[n];\n}\n// a_n = 2*a_{n-1} + 3*a_{n-2}, a_0=1, a_1=2\nconsole.log('\\nLinear recurrence a_n=2a_{n-1}+3a_{n-2}: a_5 =', linearRecurrence([2, 3], [1, 2], 5));\n\n// --- Divide-and-Conquer Master Theorem Verifier ---\nfunction masterTheorem(a: number, b: number, f_n_degree: number): string {\n  const logba = Math.log(a) / Math.log(b);\n  const epsilon = 0.0001;\n  if (f_n_degree < logba - epsilon) return `T(n^${logba.toFixed(2)}) (case 1)`;\n  if (Math.abs(f_n_degree - logba) < epsilon) return `T(n^${logba.toFixed(2)} log n) (case 2)`;\n  if (f_n_degree > logba + epsilon) return `T(n^${f_n_degree.toFixed(2)}) (case 3)`;\n  return 'complexity ambiguous';\n}\nconsole.log('\\nMaster theorem T(n)=2T(n/2)+O(n):', masterTheorem(2, 2, 1));  // case 2: T(n log n)\nconsole.log('Master theorem T(n)=4T(n/2)+O(n):', masterTheorem(4, 2, 1));  // case 1: T(n?)\nconsole.log('Master theorem T(n)=2T(n/2)+O(n?):', masterTheorem(2, 2, 2)); // case 3: T(n?)\n\n// --- Generating Function Term Calculator ---\nfunction genFuncCoeff(seq: number[], n: number): number[] {\n  const result = new Array(n + 1).fill(0);\n  result[0] = 1;\n  for (const s of seq) {\n    for (let i = s; i <= n; i++) result[i] += result[i - s];\n  }\n  return result;\n}\n// Generating function for coins {1, 2, 5}: number of ways to make change\nconsole.log('\\nCoin change ways (coins 1,2,5) up to n=10:', genFuncCoeff([1, 2, 5], 10).join(', '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// recurrence\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'recurrence', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// recurrence - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'recurrence' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurrence relations define sequences from initial terms and a dependency rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear homogeneous recurrences are solved via characteristic polynomials."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nonhomogeneous recurrences add a particular solution to the homogeneous solution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generating functions transform recurrences into algebraic equations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Master theorem provides immediate complexity classes for divide-and-conquer recurrences."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurrences model algorithm time complexity in computer science."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterate for simple recurrences"
        }), " ? forward or backward, then prove by induction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Characteristic equation for homogeneous"
        }), " ? solve $r^k - c_1 r^{k-1} - \\cdots - c_k = 0$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Particular solutions need the right form"
        }), " ? if $f(n)$ matches a characteristic root, multiply by $n^m$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate for complex sequences"
        }), " ? generating functions handle recurrences that resist other methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Master theorem for algorithms"
        }), " ? $T(n) = aT(n/b) + f(n)$ covers most divide-and-conquer algorithms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always verify solutions"
        }), " ? plug the closed form back into the recurrence to check correctness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the degree of $a_n = 3a_{n-2} + 5a_{n-5}$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the characteristic equation for $a_n = 3a_{n-1} - 2a_{n-3}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When does a recurrence require a particular solution?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the general form of solution when $r=3$ is a double root?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give the generating function for $a_n = 5^n$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 5a_{n-1} - 6a_{n-2}$, $a_0 = 1$, $a_1 = 3$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = a_{n-1} + n$, $a_0 = 0$ by iteration, then verify."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 6a_{n-1} - 9a_{n-2}$, $a_0 = 2$, $a_1 = 6$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 3a_{n-1} + 2^n$, $a_0 = 1$ (nonhomogeneous)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use generating functions to solve $a_n = 3a_{n-1}$, $a_0 = 2$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apply the Master theorem to $T(n) = 4T(n/2) + n^2$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 2a_{n-1} + 3$, $a_0 = 1$ by both iteration and characteristic methods."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tower of Hanoi"
          }), " has recurrence $T_n = 2T_{n-1} + 1$, $T_1 = 1$. Solve this recurrence using the characteristic root method (with the nonhomogeneous term as $1$) and verify that $T_n = 2^n - 1$. Then prove by induction that $T_n \\geq 2^n - 1$ for all $n \\geq 1$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $a_n = 5a_{n-1} - 8a_{n-2} + 4a_{n-3}$, $a_0 = 1$, $a_1 = 2$, $a_2 = 4$ (hint: the characteristic equation has a triple root)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the Master theorem to analyze $T(n) = 3T(n/4) + n \\log n$. Which case applies, and what is the complexity?"
        }), "\n"]
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