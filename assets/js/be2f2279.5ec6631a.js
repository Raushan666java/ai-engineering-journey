"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9112],{

/***/ 9217
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    mermaid: "mermaid",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    A[CSS Selectors]\r\n    B[Box Model & Display]\r\n    A --> B\r\n    C[Flexbox Layouts]\r\n    B --> C\r\n    D[CSS Grid]\r\n    C --> D\r\n    E[Responsive Design]\r\n    D --> E\r\n    F[Custom Properties]\r\n    E --> F\r\n    G[Animations & Transitions]\r\n    F --> G\r\n    H[\"@font-face\"]\r\n    G --> H"
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
        children: "/* Select all disabled input elements inside a form with class \"register\" */\r\nform.register input:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Style the first paragraph following any h2 */\r\nh2 + p {\r\n  font-size: 1.125rem;\r\n  color: #444;\r\n}\r\n\r\n/* Style a figure that contains an image with alt text */\r\nfigure:has(img[alt]) {\r\n  border: 2px solid green;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-box-model",
      children: "2.2 Box Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every element in CSS generates a rectangular box consisting of four areas: content, padding, border, and margin."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Visual formatting */\r\n.box {\r\n  width: 300px;\r\n  padding: 16px;\r\n  border: 2px solid #333;\r\n  margin: 24px;\r\n}\n"
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
        children: "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\n"
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
        children: ".container {\r\n  display: flex;\r\n  flex-direction: row;        /* row | row-reverse | column | column-reverse */\r\n  flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */\r\n  justify-content: center;    /* main-axis alignment: flex-start | flex-end | center | space-between | space-around | space-evenly */\r\n  align-items: stretch;       /* cross-axis alignment: stretch | flex-start | flex-end | center | baseline */\r\n  gap: 16px;                  /* Row and column gap (replaces margin hacks) */\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Item properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".item {\r\n  flex: 1 1 200px;        /* grow shrink basis (shorthand) */\r\n  flex-grow: 1;           /* Proportion of available space to absorb */\r\n  flex-shrink: 1;         /* Proportion to shrink when space is insufficient */\r\n  flex-basis: 200px;      /* Initial main-axis size */\r\n  align-self: center;     /* Override container's align-items for this item */\r\n  order: 0;               /* Visual order (not DOM order) */\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common layout patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Centered content (both axes) */\r\n.centered {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* Sticky footer (footer always at bottom) */\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\nmain {\r\n  flex: 1;\r\n}\r\n\r\n/* Equal-height columns */\r\n.row {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n.row > * {\r\n  flex: 1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-css-grid",
      children: "2.4 CSS Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid is a two-dimensional layout system that controls both rows and columns simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);  /* Three equal columns */\r\n  grid-template-rows: auto 1fr auto;       /* Header, content, footer */\r\n  gap: 24px;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Grid properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".grid {\r\n  display: grid;\r\n  grid-template-columns: 200px 1fr 200px;           /* Fixed + flexible + fixed */\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* Responsive columns */\r\n  grid-template-rows: auto minmax(200px, auto) auto;\r\n  grid-template-areas:\r\n    \"header header header\"\r\n    \"sidebar main aside\"\r\n    \"footer footer footer\";\r\n  gap: 16px;\r\n}\r\n\r\n.header { grid-area: header; }\r\n.sidebar { grid-area: sidebar; }\r\n.main { grid-area: main; }\r\n.aside { grid-area: aside; }\r\n.footer { grid-area: footer; }\n"
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
        children: ".card-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r\n  gap: 24px;\r\n}\n"
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
        children: "/* Mobile-first approach: base styles are for narrow screens */\r\nbody {\r\n  font-size: 16px;\r\n  padding: 16px;\r\n}\r\n\r\n/* Tablet */\r\n@media (width >= 768px) {\r\n  body {\r\n    padding: 32px;\r\n  }\r\n  .sidebar {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* Desktop */\r\n@media (width >= 1024px) {\r\n  .layout {\r\n    display: grid;\r\n    grid-template-columns: 250px 1fr;\r\n  }\r\n}\r\n\r\n/* Reduced motion preference */\r\n@media (prefers-reduced-motion: reduce) {\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\r\n\r\n/* Dark mode */\r\n@media (prefers-color-scheme: dark) {\r\n  :root {\r\n    --bg: #1a1a2e;\r\n    --text: #e0e0e0;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-css-custom-properties",
      children: "2.6 CSS Custom Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom properties (CSS variables) enable reusable, themeable values that cascade and can be changed at runtime via JavaScript."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ":root {\r\n  --color-primary: #3b82f6;\r\n  --color-primary-hover: #2563eb;\r\n  --color-surface: #ffffff;\r\n  --color-text: #1e293b;\r\n  --spacing-unit: 8px;\r\n  --border-radius: 6px;\r\n  --font-sans: 'Inter', system-ui, sans-serif;\r\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.card {\r\n  background: var(--color-surface);\r\n  color: var(--color-text);\r\n  border-radius: var(--border-radius);\r\n  padding: calc(var(--spacing-unit) * 3);\r\n  box-shadow: var(--shadow-sm);\r\n  font-family: var(--font-sans);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Override variables for theming:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "[data-theme=\"dark\"] {\r\n  --color-surface: #1e293b;\r\n  --color-text: #f1f5f9;\r\n}\n"
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
        children: ".button {\r\n  background: var(--color-primary);\r\n  transition: background 0.2s ease, transform 0.15s ease;\r\n}\r\n\r\n.button:hover {\r\n  background: var(--color-primary-hover);\r\n  transform: translateY(-1px);\r\n}\n"
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
        children: "@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.hero-title {\r\n  animation: fadeInUp 0.6s ease-out both;\r\n}\n"
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
        children: "/* Define a containment context */\r\n.card-container {\r\n  container-type: inline-size;\r\n  container-name: card;\r\n}\r\n\r\n/* Style based on container width */\r\n@container card (min-width: 400px) {\r\n  .card {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    gap: 16px;\r\n  }\r\n  .card-image {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@container card (max-width: 399px) {\r\n  .card {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .card-image {\r\n    width: 100%;\r\n    height: 200px;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n/* Container query units */\r\n.card-title {\r\n  font-size: clamp(1rem, 5cqw, 2rem); /* 5% of container width */\r\n}\r\n.card {\r\n  padding: 2cqw; /* 2% of container width */\r\n  margin-bottom: 2cqh; /* 2% of container height */\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-font-face",
      children: "2.9 @font-face"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embed custom fonts for consistent typography:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@font-face {\r\n  font-family: 'Inter';\r\n  src: url('/fonts/Inter-Variable.woff2') format('woff2');\r\n  font-weight: 100 900;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\nbody {\r\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "font-display: swap"
      }), " ensures text remains visible while the custom font loads, preventing flash-of-invisible-text (FOIT)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clamp(min, preferred, max)"
        }), " for fluid typography: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "font-size: clamp(1rem, 2.5vw, 2rem)"
        }), " scales smoothly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\r\nMargin collapsing only affects vertical margins. Horizontal margins never collapse."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\r\n", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "class SpecificityCalc {\r\n  static compute(sel: string): { id: number; class: number; tag: number } {\r\n    return {\r\n      id: (sel.match(/#[\\w-]+/g) || []).length,\r\n      class: (sel.match(/\\.[\\w-]+/g) || []).length + (sel.match(/\\[[^\\]]+\\]/g) || []).length,\r\n      tag: (sel.match(/(?:^|[^.#\\[:\\s])([a-z][\\w-]*)(?=[\\s,.#\\[:\\s]|$)/gi) || []).length,\r\n    };\r\n  }\r\n  static compare(a: string, b: string): string {\r\n    const score = (s: string) => {\r\n      const c = SpecificityCalc.compute(s);\r\n      return c.id * 100 + c.class * 10 + c.tag;\r\n    };\r\n    const sa = score(a), sb = score(b);\r\n    return sa > sb ? `${a} wins (${sa})` : sb > sa ? `${b} wins (${sb})` : \"Equal\";\r\n  }\r\n}\r\n\r\nclass FlexboxSimulator {\r\n  static distributeItems(container: number, items: number[], gap: number): number[] {\r\n    const totalGap = gap * (items.length - 1);\r\n    const available = container - totalGap;\r\n    const totalSize = items.reduce((a, b) => a + b, 0);\r\n    return items.map(s => (s / totalSize) * available);\r\n  }\r\n  static wrap(items: number[], maxWidth: number): number[][] {\r\n    const rows: number[][] = [[]];\r\n    items.forEach(s => {\r\n      const row = rows[rows.length - 1];\r\n      row.reduce((a, b) => a + b, 0) + s > maxWidth ? rows.push([s]) : row.push(s);\r\n    });\r\n    return rows.filter(r => r.length);\r\n  }\r\n}\r\n\r\nclass GridSimulator {\r\n  static templateColumns(cols: number, gap: number, width: number): number {\r\n    return (width - gap * (cols - 1)) / cols;\r\n  }\r\n}\r\n\r\nconsole.log(\"Specificity:\", SpecificityCalc.compare(\"div .container#main\", \"nav ul li\"));\r\nconsole.log(\"Flex:\", FlexboxSimulator.distributeItems(800, [200, 150, 100], 20));\r\nconsole.log(\"Grid:\", GridSimulator.templateColumns(3, 16, 1200));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-specificity-calculator-breakpoints-and-color-contrast",
      children: "TypeScript Implementation: Specificity Calculator, Breakpoints, and Color Contrast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CSSSpecificity {\r\n    static calculate(selector: string): { id: number; class: number; tag: number; total: number } {\r\n        const id = (selector.match(/#[a-zA-Z0-9_-]+/g) || []).length;\r\n        const cls = (selector.match(/\\.[a-zA-Z0-9_-]+/g) || []).length;\r\n        const attr = (selector.match(/\\[[^\\]]+\\]/g) || []).length;\r\n        const pseudo = (selector.match(/::?[a-zA-Z-]+/g) || []).filter(p => ![\"::before\",\"::after\",\"::first-line\",\"::first-letter\"].includes(p)).length;\r\n        const tag = (selector.match(/(^|[^.#\\[])[a-zA-Z][a-zA-Z0-9]*/g) || []).filter(s => ![\"hover\",\"focus\",\"active\",\"visited\",\"link\",\"first\",\"last\",\"nth\",\"not\",\"is\",\"where\",\"has\"].includes(s.trim())).length;\r\n        return { id, class: cls + attr + pseudo, tag, total: id * 1000 + (cls + attr + pseudo) * 100 + tag };\r\n    }\r\n\r\n    static compare(a: string, b: string): string {\r\n        const sa = this.calculate(a); const sb = this.calculate(b);\r\n        if (sa.total > sb.total) return `\"${a}\" wins (${sa.total} vs ${sb.total})`;\r\n        if (sb.total > sa.total) return `\"${b}\" wins (${sb.total} vs ${sa.total})`;\r\n        return `\"${a}\" and \"${b}\" tie (${sa.total})`;\r\n    }\r\n\r\n    static explain(selector: string): string {\r\n        const s = this.calculate(selector);\r\n        return `Selector \"${selector}\": ${s.id} ID × 1000 = ${s.id * 1000}, ${s.class} class/attr/pseudo × 100 = ${s.class * 100}, ${s.tag} tags × 1 = ${s.tag}, total = ${s.total}`;\r\n    }\r\n}\r\n\r\nclass ResponsiveBreakpoints {\r\n    static detect(widths: number[]): { name: string; minPx: number }[] {\r\n        const sorted = [...new Set(widths)].sort((a, b) => a - b);\r\n        const names = [\"mobile-s\", \"mobile\", \"tablet\", \"tablet-l\", \"laptop\", \"desktop\", \"wide\"];\r\n        const breakpoints: { name: string; minPx: number; maxPx: number | null }[] = [];\r\n        for (let i = 0; i < sorted.length; i++) {\r\n            const name = names[i] || `custom-${i}`;\r\n            breakpoints.push({\r\n                name,\r\n                minPx: sorted[i],\r\n                maxPx: i < sorted.length - 1 ? sorted[i + 1] - 1 : null\r\n            });\r\n        }\r\n        return breakpoints;\r\n    }\r\n\r\n    static generateCSS(breakpoints: { name: string; minPx: number }[]): string {\r\n        return breakpoints.map(bp =>\r\n            `/* ${bp.name} = ${bp.minPx}px */\\n@media (min-width: ${bp.minPx}px) {\\n  /* ${bp.name} styles */\\n}\\n`\r\n        ).join(\"\\n\");\r\n    }\r\n\r\n    static findActive(width: number, breakpoints: { name: string; minPx: number }[]): string {\r\n        const active = breakpoints.filter(bp => width >= bp.minPx);\r\n        return active.length > 0 ? active[active.length - 1].name : \"below-min\";\r\n    }\r\n}\r\n\r\nclass ColorContrastChecker {\r\n    static hexToRgb(hex: string): [number, number, number] {\r\n        const h = hex.replace(\"#\", \"\");\r\n        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];\r\n    }\r\n\r\n    static luminance(r: number, g: number, b: number): number {\r\n        const [rl, gl, bl] = [r, g, b].map(v => { const s = v / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; });\r\n        return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;\r\n    }\r\n\r\n    static ratio(fg: string, bg: string): number {\r\n        const [r1, g1, b1] = this.hexToRgb(fg); const [r2, g2, b2] = this.hexToRgb(bg);\r\n        const l1 = this.luminance(r1, g1, b1); const l2 = this.luminance(r2, g2, b2);\r\n        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);\r\n    }\r\n\r\n    static meetsAA(fg: string, bg: string, largeText: boolean = false): boolean {\r\n        return this.ratio(fg, bg) >= (largeText ? 3 : 4.5);\r\n    }\r\n\r\n    static meetsAAA(fg: string, bg: string, largeText: boolean = false): boolean {\r\n        return this.ratio(fg, bg) >= (largeText ? 4.5 : 7);\r\n    }\r\n\r\n    static suggest(fg: string, bg: string): string {\r\n        const r = this.ratio(fg, bg);\r\n        if (r >= 7) return \"Excellent (AAA)\";\r\n        if (r >= 4.5) return \"Good (AA)\";\r\n        if (r >= 3) return \"Minimum (AA large text)\";\r\n        return \"FAIL — insufficient contrast\";\r\n    }\r\n}\r\n\r\n// Demo\r\nconsole.log(CSSSpecificity.explain(\"div .container#main a.active\"));\r\nconsole.log(CSSSpecificity.compare(\"div .container#main\", \"nav ul li\"));\r\nconst bps = ResponsiveBreakpoints.detect([320, 480, 768, 1024, 1280, 1440]);\r\nconsole.log(\"Breakpoints:\", bps.map(b => `${b.name}: ${b.minPx}px`).join(\", \"));\r\nconsole.log(\"Active at 900px:\", ResponsiveBreakpoints.findActive(900, bps));\r\nconsole.log(\"Contrast #333/#fff:\", ColorContrastChecker.ratio(\"#333\", \"#fff\").toFixed(2), ColorContrastChecker.suggest(\"#333\", \"#fff\"));\r\nconsole.log(\"Contrast #ccc/#fff:\", ColorContrastChecker.ratio(\"#ccc\", \"#fff\").toFixed(2), ColorContrastChecker.suggest(\"#ccc\", \"#fff\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// css\r\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'css', data: { topic: 'fullstack-frontend-backend' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
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
        children: "/* Declare layer order (first declared = lowest precedence) */\r\n@layer reset, base, components, utilities;\r\n\r\n/* Reset layer — zero specificity wins */\r\n@layer reset {\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n}\r\n\r\n/* Base layer — element defaults */\r\n@layer base {\r\n  body {\r\n    font-family: system-ui, sans-serif;\r\n    line-height: 1.6;\r\n  }\r\n}\r\n\r\n/* Component layer — class-based styles */\r\n@layer components {\r\n  .card {\r\n    background: var(--color-surface);\r\n    border-radius: 0.5rem;\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n/* Utilities layer — highest precedence */\r\n@layer utilities {\r\n  .sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    overflow: hidden;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-queries-deep-dive",
      children: "Container Queries Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container queries let components respond to their parent size, not the viewport."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* Define containment context */\r\n.card-container {\r\n  container-type: inline-size;\r\n  container-name: card;\r\n}\r\n\r\n/* Query the container width */\r\n@container card (min-width: 400px) {\r\n  .card {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@container card (max-width: 399px) {\r\n  .card {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n/* Style queries — check container style values */\r\n@container card style(--theme: dark) {\r\n  .card { background: #222; color: #fff; }\r\n}\n"
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



/***/ }

}]);