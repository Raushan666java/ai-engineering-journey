"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9112],{

/***/ 29217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_02_css_md_be2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-02-css-md-be2.json
const site_docs_courses_web_development_02_css_md_be2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/02-css","title":"Chapter 2 → CSS3","description":"Previous 03-js-basics","source":"@site/docs/courses/web-development/02-css.md","sourceDirName":"courses/web-development","slug":"/web-development/02-css","permalink":"/ai-engineering-journey/web-development/02-css","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-css","slug":"/web-development/02-css","title":"Chapter 2 → CSS3","sidebar_label":"Chapter 2 → CSS3","sidebar_position":2},"sidebar":"course-web-development","previous":{"title":"Chapter 1 → HTML5","permalink":"/ai-engineering-journey/web-development/01-html"},"next":{"title":"Chapter 3 → JavaScript Basics","permalink":"/ai-engineering-journey/web-development/03-js-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/02-css.md


const frontMatter = {
	id: '02-css',
	slug: '/web-development/02-css',
	title: 'Chapter 2 → CSS3',
	sidebar_label: 'Chapter 2 → CSS3',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2 → CSS3';

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
  "value": "2.1 Selectors",
  "id": "21-selectors",
  "level": 3
}, {
  "value": "2.2 Box Model",
  "id": "22-box-model",
  "level": 3
}, {
  "value": "2.3 Flexbox",
  "id": "23-flexbox",
  "level": 3
}, {
  "value": "2.4 CSS Grid",
  "id": "24-css-grid",
  "level": 3
}, {
  "value": "2.5 Responsive Design",
  "id": "25-responsive-design",
  "level": 3
}, {
  "value": "2.6 CSS Custom Properties",
  "id": "26-css-custom-properties",
  "level": 3
}, {
  "value": "2.7 Transitions and Animations",
  "id": "27-transitions-and-animations",
  "level": 3
}, {
  "value": "2.8 Container Queries",
  "id": "28-container-queries",
  "level": 3
}, {
  "value": "2.9 @font-face",
  "id": "29-font-face",
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
  "value": "TypeScript: CSS Specificity Calculator &amp; Layout Simulator",
  "id": "typescript-css-specificity-calculator--layout-simulator",
  "level": 3
}, {
  "value": "TypeScript Implementation: Specificity Calculator, Breakpoints, and Color Contrast",
  "id": "typescript-implementation-specificity-calculator-breakpoints-and-color-contrast",
  "level": 2
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}, {
  "value": "CSS Cascade Layers and @layer",
  "id": "css-cascade-layers-and-layer",
  "level": 3
}, {
  "value": "Container Queries Deep Dive",
  "id": "container-queries-deep-dive",
  "level": 3
}, {
  "value": "Application Problems: at container widths &gt;= 400px show a horizontal layout with image on the left, below 400px show a vertical stacked layout.",
  "id": "application-problems-at-container-widths--400px-show-a-horizontal-layout-with-image-on-the-left-below-400px-show-a-vertical-stacked-layout",
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
        id: "chapter-2--css3",
        children: "Chapter 2 → CSS3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/01-html",
          children: "01-html"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/03-js-basics",
          children: "03-js-basics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CSS selectors allow precise element targeting using combinators, pseudo-classes, and attribute patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The box model consists of content, padding, border, and margin — always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "box-sizing: border-box"
        }), "."]
      }), "\n"]
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
            children: "Selectors"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CSS selectors range from simple types to advanced pseudo-classes like ", (0,jsx_runtime.jsx)(_components.code, {
              children: ":has()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master combinators, pseudo-classes, and attribute selectors for precise targeting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Box Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every element is a box of content, padding, border, and margin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "box-sizing: border-box"
            }), " globally for predictable sizing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-dimensional layout model for distributing space along a row or column"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "justify-content"
            }), " for main-axis and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "align-items"
            }), " for cross-axis alignment"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSS Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-dimensional layout system controlling rows and columns simultaneously"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "grid-template-areas"
            }), " for intuitive named layout regions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative units, media queries, and mobile-first patterns adapt to any screen"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Build mobile-first with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "min-width"
            }), " breakpoints and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clamp()"
            }), " for fluid typography"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS variables cascade and can be updated at runtime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Define theme palettes with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--color-*"
            }), " variables in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ":root"
            }), " for easy theming"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Flexbox excels at one-dimensional layouts while CSS Grid handles two-dimensional page structures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[CSS Selectors]\n    B[Box Model & Display]\n    A --> B\n    C[Flexbox Layouts]\n    B --> C\n    D[CSS Grid]\n    C --> D\n    E[Responsive Design]\n    D --> E\n    F[Custom Properties]\n    E --> F\n    G[Animations & Transitions]\n    F --> G\n    H[@font-face]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select HTML elements using a variety of CSS selectors, including combinators and pseudo-classes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain and apply the CSS box model, including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "box-sizing"
        }), ", margin collapsing, and the visual formatting model."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build flexible layouts using Flexbox and two-dimensional layouts using CSS Grid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement responsive designs using media queries, relative units, and mobile-first principles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use CSS custom properties (variables) to create maintainable, themeable stylesheets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create declarative animations and transitions for interactive feedback and visual flair."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Responsive design requires relative units, media queries, and a mobile-first approach."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-selectors",
      children: "2.1 Selectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/02-css.png",
        alt: "CSS Layout and Selectors Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSS selectors determine which elements a rule set applies to. Modern CSS provides a rich selector syntax."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Selector Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal selector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements of that type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "div"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "h1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".class"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements with that class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".highlight"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The element with that ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#app"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[attr]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements with attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[hidden]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[attr=\"val\"]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact attribute match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[type=\"email\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[attr^=\"val\"]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute begins with"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[href^=\"https\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[attr$=\"val\"]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute ends with"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[src$=\".png\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[attr*=\"val\"]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute contains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[class*=\"btn\"]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B is descendant of A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "article p"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A > B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B is direct child of A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ul > li"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A + B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B immediately follows A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "h2 + p"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A ~ B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B is a sibling after A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "h2 ~ p"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ":hover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element being hovered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a:hover"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ":focus-visible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element focused via keyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "input:focus-visible"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ":nth-child(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nth child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "li:nth-child(odd)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ":not(selector)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "input:not([type=\"hidden\"])"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ":has(selector)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent containing selector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "figure:has(img)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "::before"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "::after"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated content pseudo-elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".card::before"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Select all disabled input elements inside a form with class \"register\" */\nform.register input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* Style the first paragraph following any h2 */\nh2 + p {\n  font-size: 1.125rem;\n  color: #444;\n}\n\n/* Style a figure that contains an image with alt text */\nfigure:has(img[alt]) {\n  border: 2px solid green;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-box-model",
      children: "2.2 Box Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every element in CSS generates a rectangular box consisting of four areas: content, padding, border, and margin."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Visual formatting */\n.box {\n  width: 300px;\n  padding: 16px;\n  border: 2px solid #333;\n  margin: 24px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height"
      }), " apply only to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "content box"
      }), ". Setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "box-sizing: border-box"
      }), " includes padding and border in the specified dimensions, which is almost universally preferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Margin collapsing:"
      }), " Adjacent vertical margins collapse to the larger of the two margins. This does not apply to horizontal margins or elements with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "overflow: hidden"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position: absolute"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flex/grid"
      }), " children."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Display values"
      }), " control how boxes participate in the layout:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "block"
        }), " → Fills available width, respects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "width"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), ", forces new line."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "inline"
        }), " → Shrinks to content, ignores ", (0,jsx_runtime.jsx)(_components.code, {
          children: "width"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), ", flows with text."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "inline-block"
        }), " → Shrinks to content but respects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "width"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "flex"
        }), " → Establishes a flex formatting context for children."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "grid"
        }), " → Establishes a grid formatting context for children."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "none"
        }), " → Removes element from the layout tree entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-flexbox",
      children: "2.3 Flexbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flexbox is a one-dimensional layout model (row or column) designed for distributing space among items in a container."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".container {\n  display: flex;\n  flex-direction: row;        /* row | row-reverse | column | column-reverse */\n  flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */\n  justify-content: center;    /* main-axis alignment: flex-start | flex-end | center | space-between | space-around | space-evenly */\n  align-items: stretch;       /* cross-axis alignment: stretch | flex-start | flex-end | center | baseline */\n  gap: 16px;                  /* Row and column gap (replaces margin hacks) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Item properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".item {\n  flex: 1 1 200px;        /* grow shrink basis (shorthand) */\n  flex-grow: 1;           /* Proportion of available space to absorb */\n  flex-shrink: 1;         /* Proportion to shrink when space is insufficient */\n  flex-basis: 200px;      /* Initial main-axis size */\n  align-self: center;     /* Override container's align-items for this item */\n  order: 0;               /* Visual order (not DOM order) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common layout patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Centered content (both axes) */\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Sticky footer (footer always at bottom) */\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex: 1;\n}\n\n/* Equal-height columns */\n.row {\n  display: flex;\n  gap: 20px;\n}\n.row > * {\n  flex: 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-css-grid",
      children: "2.4 CSS Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid is a two-dimensional layout system that controls both rows and columns simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);  /* Three equal columns */\n  grid-template-rows: auto 1fr auto;       /* Header, content, footer */\n  gap: 24px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Grid properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".grid {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;           /* Fixed + flexible + fixed */\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* Responsive columns */\n  grid-template-rows: auto minmax(200px, auto) auto;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n  gap: 16px;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.aside { grid-area: aside; }\n.footer { grid-area: footer; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fill"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minmax()"
      }), " pattern creates responsive grids without media queries:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fill"
      }), " preserves empty tracks; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " collapses them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-responsive-design",
      children: "2.5 Responsive Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Responsive design ensures content renders well on any device width."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relative units:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " → Relative to parent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "em"
        }), " → Relative to element's font-size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rem"
        }), " → Relative to root font-size (typically 16px)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "vw"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vh"
        }), " → Percentage of viewport width/height"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dvw"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dvh"
        }), " → Dynamic viewport units (account for mobile toolbars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "clamp(min, preferred, max)"
        }), " → Fluid value between bounds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Media queries:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Mobile-first approach: base styles are for narrow screens */\nbody {\n  font-size: 16px;\n  padding: 16px;\n}\n\n/* Tablet */\n@media (width >= 768px) {\n  body {\n    padding: 32px;\n  }\n  .sidebar {\n    display: block;\n  }\n}\n\n/* Desktop */\n@media (width >= 1024px) {\n  .layout {\n    display: grid;\n    grid-template-columns: 250px 1fr;\n  }\n}\n\n/* Reduced motion preference */\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a2e;\n    --text: #e0e0e0;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-css-custom-properties",
      children: "2.6 CSS Custom Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom properties (CSS variables) enable reusable, themeable values that cascade and can be changed at runtime via JavaScript."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ":root {\n  --color-primary: #3b82f6;\n  --color-primary-hover: #2563eb;\n  --color-surface: #ffffff;\n  --color-text: #1e293b;\n  --spacing-unit: 8px;\n  --border-radius: 6px;\n  --font-sans: 'Inter', system-ui, sans-serif;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.card {\n  background: var(--color-surface);\n  color: var(--color-text);\n  border-radius: var(--border-radius);\n  padding: calc(var(--spacing-unit) * 3);\n  box-shadow: var(--shadow-sm);\n  font-family: var(--font-sans);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Override variables for theming:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "[data-theme=\"dark\"] {\n  --color-surface: #1e293b;\n  --color-text: #f1f5f9;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-transitions-and-animations",
      children: "2.7 Transitions and Animations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transitions"
      }), " interpolate between states:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".button {\n  background: var(--color-primary);\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n\n.button:hover {\n  background: var(--color-primary-hover);\n  transform: translateY(-1px);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Transition shorthand: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "property duration timing-function delay"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Animations"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@keyframes"
      }), " for multi-step sequences:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero-title {\n  animation: fadeInUp 0.6s ease-out both;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation"
      }), " shorthand: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name duration timing-function delay iteration-count direction fill-mode play-state"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-container-queries",
      children: "2.8 Container Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container queries allow styling based on a parent container's size rather than the viewport."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Define a containment context */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* Style based on container width */\n@container card (min-width: 400px) {\n  .card {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    gap: 16px;\n  }\n  .card-image {\n    width: 100%;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n  .card-image {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n  }\n}\n\n/* Container query units */\n.card-title {\n  font-size: clamp(1rem, 5cqw, 2rem); /* 5% of container width */\n}\n.card {\n  padding: 2cqw; /* 2% of container width */\n  margin-bottom: 2cqh; /* 2% of container height */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-font-face",
      children: "2.9 @font-face"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embed custom fonts for consistent typography:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@font-face {\n  font-family: 'Inter';\n  src: url('/fonts/Inter-Variable.woff2') format('woff2');\n  font-weight: 100 900;\n  font-style: normal;\n  font-display: swap;\n}\n\nbody {\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "font-display: swap"
      }), " ensures text remains visible while the custom font loads, preventing flash-of-invisible-text (FOIT)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clamp(min, preferred, max)"
        }), " for fluid typography: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "font-size: clamp(1rem, 2.5vw, 2rem)"
        }), " scales smoothly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nMargin collapsing only affects vertical margins. Horizontal margins never collapse."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto-fill"
        }), " preserves empty grid tracks while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto-fit"
        }), " collapses them — choose based on whether ghost columns matter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox vs Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-dimensional (row OR column)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-dimensional (rows AND columns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "em"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative to parent font-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative to root font-size (16px default)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto-fill"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto-fit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves empty grid tracks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collapses empty grid tracks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transition vs Animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-state interpolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-step keyframe sequence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "inline"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inline-block"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores width/height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Respects width/height"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".class, #id, [attr], A > B, A + B, A ~ B, :hover, :nth-child(), :has()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Box Model"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "content-box"
            }), " (default) vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "border-box"
            }), ", margin collapsing rules"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flex Properties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "flex-direction"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "flex-wrap"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "justify-content"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "align-items"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "gap"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "flex: grow shrink basis"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid Properties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "grid-template-columns"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "grid-template-rows"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "grid-template-areas"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "gap"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive Units"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "em"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "rem"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "vw"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "vh"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "dvw"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "dvh"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "clamp()"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Marketing Site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox for navbar, Grid for card layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent, responsive page structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid for overall layout, Flexbox for widget content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-dimensional page shell with one-dimensional components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox for product rows, Grid for category pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible product display at any screen width"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blog"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Grid with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "grid-template-areas"
            }), " for article + sidebar layout"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named regions make layout intent clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom properties for colors, spacing, typography tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source theme that cascades everywhere"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. Which CSS property is the correct way to include padding and border in an element's total width?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "box-sizing: content-box"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "box-sizing: border-box"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "width: auto"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "display: block"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "box-sizing: border-box"
            }), " includes padding and border in the specified dimensions."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "justify-content: center"
        }), " do in a flex container?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Centers items on the cross-axis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Centers items on the main-axis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Centers the entire flex container"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Vertically centers all children"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "justify-content"
            }), " aligns items along the main axis (defined by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "flex-direction"
            }), ")."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. Which media query feature checks for dark mode preference?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@media (dark-mode: true)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@media (prefers-color-scheme: dark)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@media (theme: dark)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@media (color-scheme: dark)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prefers-color-scheme: dark"
            }), " detects the user's system-wide dark mode setting."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "animation: fadeInUp 0.6s ease-out both;"
        }), " do?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Applies the fadeInUp animation once"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Runs the animation with a 0.6s delay"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Applies both forwards and backwards fill modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Repeats the animation infinitely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "both"
            }), " applies both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "forwards"
            }), " (retain end state) and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "backwards"
            }), " (apply initial state before delay) fill modes."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-css-specificity-calculator--layout-simulator",
      children: "TypeScript: CSS Specificity Calculator & Layout Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SpecificityCalc {\n  static compute(sel: string): { id: number; class: number; tag: number } {\n    return {\n      id: (sel.match(/#[\\w-]+/g) || []).length,\n      class: (sel.match(/\\.[\\w-]+/g) || []).length + (sel.match(/\\[[^\\]]+\\]/g) || []).length,\n      tag: (sel.match(/(?:^|[^.#\\[:\\s])([a-z][\\w-]*)(?=[\\s,.#\\[:\\s]|$)/gi) || []).length,\n    };\n  }\n  static compare(a: string, b: string): string {\n    const score = (s: string) => {\n      const c = SpecificityCalc.compute(s);\n      return c.id * 100 + c.class * 10 + c.tag;\n    };\n    const sa = score(a), sb = score(b);\n    return sa > sb ? `${a} wins (${sa})` : sb > sa ? `${b} wins (${sb})` : \"Equal\";\n  }\n}\n\nclass FlexboxSimulator {\n  static distributeItems(container: number, items: number[], gap: number): number[] {\n    const totalGap = gap * (items.length - 1);\n    const available = container - totalGap;\n    const totalSize = items.reduce((a, b) => a + b, 0);\n    return items.map(s => (s / totalSize) * available);\n  }\n  static wrap(items: number[], maxWidth: number): number[][] {\n    const rows: number[][] = [[]];\n    items.forEach(s => {\n      const row = rows[rows.length - 1];\n      row.reduce((a, b) => a + b, 0) + s > maxWidth ? rows.push([s]) : row.push(s);\n    });\n    return rows.filter(r => r.length);\n  }\n}\n\nclass GridSimulator {\n  static templateColumns(cols: number, gap: number, width: number): number {\n    return (width - gap * (cols - 1)) / cols;\n  }\n}\n\nconsole.log(\"Specificity:\", SpecificityCalc.compare(\"div .container#main\", \"nav ul li\"));\nconsole.log(\"Flex:\", FlexboxSimulator.distributeItems(800, [200, 150, 100], 20));\nconsole.log(\"Grid:\", GridSimulator.templateColumns(3, 16, 1200));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-specificity-calculator-breakpoints-and-color-contrast",
      children: "TypeScript Implementation: Specificity Calculator, Breakpoints, and Color Contrast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CSSSpecificity {\n    static calculate(selector: string): { id: number; class: number; tag: number; total: number } {\n        const id = (selector.match(/#[a-zA-Z0-9_-]+/g) || []).length;\n        const cls = (selector.match(/\\.[a-zA-Z0-9_-]+/g) || []).length;\n        const attr = (selector.match(/\\[[^\\]]+\\]/g) || []).length;\n        const pseudo = (selector.match(/::?[a-zA-Z-]+/g) || []).filter(p => ![\"::before\",\"::after\",\"::first-line\",\"::first-letter\"].includes(p)).length;\n        const tag = (selector.match(/(^|[^.#\\[])[a-zA-Z][a-zA-Z0-9]*/g) || []).filter(s => ![\"hover\",\"focus\",\"active\",\"visited\",\"link\",\"first\",\"last\",\"nth\",\"not\",\"is\",\"where\",\"has\"].includes(s.trim())).length;\n        return { id, class: cls + attr + pseudo, tag, total: id * 1000 + (cls + attr + pseudo) * 100 + tag };\n    }\n\n    static compare(a: string, b: string): string {\n        const sa = this.calculate(a); const sb = this.calculate(b);\n        if (sa.total > sb.total) return `\"${a}\" wins (${sa.total} vs ${sb.total})`;\n        if (sb.total > sa.total) return `\"${b}\" wins (${sb.total} vs ${sa.total})`;\n        return `\"${a}\" and \"${b}\" tie (${sa.total})`;\n    }\n\n    static explain(selector: string): string {\n        const s = this.calculate(selector);\n        return `Selector \"${selector}\": ${s.id} ID × 1000 = ${s.id * 1000}, ${s.class} class/attr/pseudo × 100 = ${s.class * 100}, ${s.tag} tags × 1 = ${s.tag}, total = ${s.total}`;\n    }\n}\n\nclass ResponsiveBreakpoints {\n    static detect(widths: number[]): { name: string; minPx: number }[] {\n        const sorted = [...new Set(widths)].sort((a, b) => a - b);\n        const names = [\"mobile-s\", \"mobile\", \"tablet\", \"tablet-l\", \"laptop\", \"desktop\", \"wide\"];\n        const breakpoints: { name: string; minPx: number; maxPx: number | null }[] = [];\n        for (let i = 0; i < sorted.length; i++) {\n            const name = names[i] || `custom-${i}`;\n            breakpoints.push({\n                name,\n                minPx: sorted[i],\n                maxPx: i < sorted.length - 1 ? sorted[i + 1] - 1 : null\n            });\n        }\n        return breakpoints;\n    }\n\n    static generateCSS(breakpoints: { name: string; minPx: number }[]): string {\n        return breakpoints.map(bp =>\n            `/* ${bp.name} = ${bp.minPx}px */\\n@media (min-width: ${bp.minPx}px) {\\n  /* ${bp.name} styles */\\n}\\n`\n        ).join(\"\\n\");\n    }\n\n    static findActive(width: number, breakpoints: { name: string; minPx: number }[]): string {\n        const active = breakpoints.filter(bp => width >= bp.minPx);\n        return active.length > 0 ? active[active.length - 1].name : \"below-min\";\n    }\n}\n\nclass ColorContrastChecker {\n    static hexToRgb(hex: string): [number, number, number] {\n        const h = hex.replace(\"#\", \"\");\n        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];\n    }\n\n    static luminance(r: number, g: number, b: number): number {\n        const [rl, gl, bl] = [r, g, b].map(v => { const s = v / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; });\n        return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;\n    }\n\n    static ratio(fg: string, bg: string): number {\n        const [r1, g1, b1] = this.hexToRgb(fg); const [r2, g2, b2] = this.hexToRgb(bg);\n        const l1 = this.luminance(r1, g1, b1); const l2 = this.luminance(r2, g2, b2);\n        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);\n    }\n\n    static meetsAA(fg: string, bg: string, largeText: boolean = false): boolean {\n        return this.ratio(fg, bg) >= (largeText ? 3 : 4.5);\n    }\n\n    static meetsAAA(fg: string, bg: string, largeText: boolean = false): boolean {\n        return this.ratio(fg, bg) >= (largeText ? 4.5 : 7);\n    }\n\n    static suggest(fg: string, bg: string): string {\n        const r = this.ratio(fg, bg);\n        if (r >= 7) return \"Excellent (AAA)\";\n        if (r >= 4.5) return \"Good (AA)\";\n        if (r >= 3) return \"Minimum (AA large text)\";\n        return \"FAIL — insufficient contrast\";\n    }\n}\n\n// Demo\nconsole.log(CSSSpecificity.explain(\"div .container#main a.active\"));\nconsole.log(CSSSpecificity.compare(\"div .container#main\", \"nav ul li\"));\nconst bps = ResponsiveBreakpoints.detect([320, 480, 768, 1024, 1280, 1440]);\nconsole.log(\"Breakpoints:\", bps.map(b => `${b.name}: ${b.minPx}px`).join(\", \"));\nconsole.log(\"Active at 900px:\", ResponsiveBreakpoints.findActive(900, bps));\nconsole.log(\"Contrast #333/#fff:\", ColorContrastChecker.ratio(\"#333\", \"#fff\").toFixed(2), ColorContrastChecker.suggest(\"#333\", \"#fff\"));\nconsole.log(\"Contrast #ccc/#fff:\", ColorContrastChecker.ratio(\"#ccc\", \"#fff\").toFixed(2), ColorContrastChecker.suggest(\"#ccc\", \"#fff\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// css\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'css', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CSS custom properties enable maintainable, themeable stylesheets that update at runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CSS selectors range from type and class selectors to advanced pseudo-classes like ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":has()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":nth-child()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The box model comprises content, padding, border, and margin; always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "box-sizing: border-box"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexbox excels at one-dimensional layout; Grid handles two-dimensional arrangements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responsive design uses relative units, media queries, and mobile-first strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom properties enable themeable, maintainable values that cascade and update at runtime."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transitions and animations provide declarative motion without JavaScript."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@font-face"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "font-display: swap"
        }), " optimizes typography loading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Transitions and animations provide declarative motion without requiring JavaScript."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "justify-content"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "align-items"
        }), " in Flexbox?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain margin collapsing and list two conditions that prevent it."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grid-template-areas"
        }), " simplify layout definition?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "em"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rem"
        }), " units?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a responsive card grid using Grid with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repeat(auto-fill, minmax(280px, 1fr))"
        }), ". Each card should have an image, title, description, and button. Include hover effects using transitions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a sticky footer layout using Flexbox that keeps the footer at the bottom of the viewport even when content is sparse."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a dark-mode toggle using CSS custom properties: define a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[data-theme=\"dark\"]"
        }), " selector that overrides surface and text colors, and write the JavaScript to toggle the attribute."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "box-sizing: border-box"
          }), " globally"]
        }), " — this single rule prevents countless layout headaches by including padding and border in element width calculations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Master Flexbox for one-dimensional layouts"
        }), " — learn ", (0,jsx_runtime.jsx)(_components.code, {
          children: "justify-content"
        }), " (main axis), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "align-items"
        }), " (cross axis), and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flex: grow shrink basis"
        }), " for 90% of layout needs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use CSS Grid for two-dimensional layouts"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grid-template-areas"
        }), " makes layout intent readable at a glance. Reserve Flexbox for content within grid cells."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Build mobile-first with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "min-width"
          }), " breakpoints"]
        }), " — base styles are for narrow screens; media queries add complexity as space increases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use container queries for reusable components"
        }), " — container queries let a component adapt to its parent's size, not the viewport, making the component truly reusable in any context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "css-cascade-layers-and-layer",
      children: "CSS Cascade Layers and @layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cascade layers let authors control specificity order at the layer level."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Declare layer order (first declared = lowest precedence) */\n@layer reset, base, components, utilities;\n\n/* Reset layer — zero specificity wins */\n@layer reset {\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n}\n\n/* Base layer — element defaults */\n@layer base {\n  body {\n    font-family: system-ui, sans-serif;\n    line-height: 1.6;\n  }\n}\n\n/* Component layer — class-based styles */\n@layer components {\n  .card {\n    background: var(--color-surface);\n    border-radius: 0.5rem;\n    padding: 1rem;\n  }\n}\n\n/* Utilities layer — highest precedence */\n@layer utilities {\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-queries-deep-dive",
      children: "Container Queries Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container queries let components respond to their parent size, not the viewport."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Define containment context */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* Query the container width */\n@container card (min-width: 400px) {\n  .card {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    gap: 1rem;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n/* Style queries — check container style values */\n@container card style(--theme: dark) {\n  .card { background: #222; color: #fff; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems-at-container-widths--400px-show-a-horizontal-layout-with-image-on-the-left-below-400px-show-a-vertical-stacked-layout",
      children: "Application Problems: at container widths >= 400px show a horizontal layout with image on the left, below 400px show a vertical stacked layout."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a CSS-only accordion component using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":target"
        }), " pseudo-class or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "details"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "summary"
        }), " elements with smooth open/close transitions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a complete responsive landing page layout using both Flexbox and Grid with the following constraints: mobile (single column, stacked), tablet (two columns for content, sidebar below), desktop (three-column grid with fixed-width sidebar, main content, and aside). Use only CSS (no JavaScript). Implement a sticky header, a hero section with centered content, a card grid, and a footer. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clamp()"
        }), " for fluid typography. Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prefers-reduced-motion"
        }), " media query that disables all animations. Include custom properties for the entire color scheme."]
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