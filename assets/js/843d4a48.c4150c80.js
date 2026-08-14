"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76235],{

/***/ 29947
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_04_js_dom_md_843_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-04-js-dom-md-843.json
const site_docs_courses_web_development_04_js_dom_md_843_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/04-js-dom","title":"Chapter 4 → JavaScript and the DOM","description":"Previous 05-es6-plus","source":"@site/docs/courses/web-development/04-js-dom.md","sourceDirName":"courses/web-development","slug":"/web-development/04-js-dom","permalink":"/ai-engineering-journey/web-development/04-js-dom","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-js-dom","slug":"/web-development/04-js-dom","title":"Chapter 4 → JavaScript and the DOM","sidebar_label":"Chapter 4 → JavaScript and the DOM","sidebar_position":4},"sidebar":"course-web-development","previous":{"title":"Chapter 3 → JavaScript Basics","permalink":"/ai-engineering-journey/web-development/03-js-basics"},"next":{"title":"Chapter 5 — ES6+ JavaScript","permalink":"/ai-engineering-journey/web-development/05-es6-plus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/04-js-dom.md


const frontMatter = {
	id: '04-js-dom',
	slug: '/web-development/04-js-dom',
	title: 'Chapter 4 → JavaScript and the DOM',
	sidebar_label: 'Chapter 4 → JavaScript and the DOM',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4 → JavaScript and the DOM';

const assets = {

};

/*End Image Gallery*/


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
  "value": "4.1 Selecting Elements",
  "id": "41-selecting-elements",
  "level": 3
}, {
  "value": "4.2 Traversal",
  "id": "42-traversal",
  "level": 3
}, {
  "value": "4.3 Manipulation",
  "id": "43-manipulation",
  "level": 3
}, {
  "value": "4.4 Events",
  "id": "44-events",
  "level": 3
}, {
  "value": "4.5 FormData",
  "id": "45-formdata",
  "level": 3
}, {
  "value": "4.6 IntersectionObserver",
  "id": "46-intersectionobserver",
  "level": 3
}, {
  "value": "4.7 MutationObserver",
  "id": "47-mutationobserver",
  "level": 3
}, {
  "value": "4.8 Custom Element Lifecycle",
  "id": "48-custom-element-lifecycle",
  "level": 3
}, {
  "value": "4.9 ResizeObserver",
  "id": "49-resizeobserver",
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
  "value": "TypeScript: DOM Tree Analyzer &amp; Event Delegation Helper",
  "id": "typescript-dom-tree-analyzer--event-delegation-helper",
  "level": 3
}, {
  "value": "TypeScript Implementation: DOM Tree Walker, Event Delegation, Virtual DOM Diff",
  "id": "typescript-implementation-dom-tree-walker-event-delegation-virtual-dom-diff",
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
  "value": "Application Problems",
  "id": "application-problems-1",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    section: "section",
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
        id: "chapter-4--javascript-and-the-dom",
        children: "Chapter 4 → JavaScript and the DOM"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/03-js-basics",
          children: "03-js-basics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/05-es6-plus",
          children: "05-es6-plus"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Modern DOM selection uses CSS-selector-based methods like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelector"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelectorAll"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/04-js-dom/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/04-js-dom/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/04-js-dom/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/04-js-dom/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/04-js-dom/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/04-js-dom/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DOM traversal properties allow navigation among parent, child, and sibling nodes."]
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
            children: "Selecting Elements"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "querySelector"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "querySelectorAll"
            }), " use CSS selector syntax"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "closest()"
            }), " to find the nearest ancestor matching a selector"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOM Traversal"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Properties like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "parentElement"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "children"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nextElementSibling"
            }), " navigate the tree"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain traversal methods cautiously — check for null at each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "createElement"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "appendChild"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "prepend"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), " modify the DOM tree"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insertAdjacentHTML"
            }), " as a safer alternative to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "innerHTML"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The event lifecycle has capture, target, and bubble phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use event delegation to handle many child elements with one listener"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FormData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures form field values and file uploads programmatically"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FormData"
            }), " directly to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fetch()"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Content-Type"
            }), " auto-sets to multipart"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntersectionObserver"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResizeObserver"
            }), " enable performant reactive behaviors"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IntersectionObserver"
            }), " for lazy loading and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResizeObserver"
            }), " for responsive components"]
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
        }), " Create, insert, remove, and clone elements using modern methods like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prepend()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "after()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Selecting DOM Elements]\n    B[Traversing the Tree]\n    A --> B\n    C[Creating & Inserting Elements]\n    B --> C\n    D[Attributes, Classes & Styles]\n    C --> D\n    E[Event Phases & Delegation]\n    D --> E\n    F[FormData API]\n    E --> F\n    G[IntersectionObserver]\n    F --> G\n    H[ResizeObserver]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select DOM nodes using modern selector methods (", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelector"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelectorAll"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "closest"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the DOM tree among parent, child, and sibling nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create, insert, remove, and clone DOM elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulate element content, attributes, classes, and inline styles."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle events using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addEventListener"
        }), ", understand event phases (capture, target, bubble), implement event delegation, and create custom events."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FormData"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IntersectionObserver"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResizeObserver"
        }), " for modern DOM interactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Events propagate through capture, target, and bubble phases — delegation exploits bubbling for efficiency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/04-dom.png",
        alt: "DOM Manipulation Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-selecting-elements",
      children: "4.1 Selecting Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern DOM selection uses CSS-selector-based methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const root = document.querySelector('#root');           // First matching element\nconst items = document.querySelectorAll('.item');        // Static NodeList\nconst form = document.querySelector('form[data-type]');\nconst parent = element.closest('.container');            // Nearest ancestor matching selector\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Legacy methods (still widely supported):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "document.getElementById('app');\ndocument.getElementsByClassName('item');\ndocument.getElementsByTagName('div');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "querySelectorAll"
      }), " returns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static NodeList"
      }), ". For a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live"
      }), " collection, use:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const liveItems = document.getElementsByClassName('item');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-traversal",
      children: "4.2 Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const el = document.querySelector('.target');\n\n// Children\nel.children;                    // HTMLCollection (elements only)\nel.childNodes;                  // NodeList (including text/comment nodes)\nel.firstElementChild;           // First child element\nel.lastElementChild;            // Last child element\n\n// Parent\nel.parentElement;               // Parent element node\nel.closest('.container');       // Nearest ancestor matching selector\n\n// Siblings\nel.previousElementSibling;\nel.nextElementSibling;\n\n// Check\nel.contains(otherEl);           // Is otherEl a descendant?\nel.matches('.active');          // Does el match selector?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-manipulation",
      children: "4.3 Manipulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating and inserting elements:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const div = document.createElement('div');\ndiv.textContent = 'Hello, World!';\ndiv.className = 'greeting';\ndiv.dataset.index = '1';\n\n// Insertion methods\nparent.appendChild(div);                    // Appends at end\nparent.prepend(div);                        // Inserts at beginning\nparent.insertBefore(div, referenceChild);   // Before reference child\nreference.after(div);                       // Inserts after reference\nreference.before(div);                      // Inserts before reference\n\n// HTML injection (use with caution → XSS risk)\nelement.innerHTML = '<strong>Bold text</strong>';\n\n// Safer alternative\nelement.insertAdjacentHTML('beforeend', '<strong>Bold text</strong>');\n// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Removing elements:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "element.remove();          // Removes from DOM (modern)\nparent.removeChild(child); // Traditional method\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attributes and properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const input = document.querySelector('input');\n\n// Standard attributes\ninput.id = 'email-field';\ninput.type = 'email';\ninput.value = 'alice@example.com';\n\n// Data attributes\ninput.dataset.validation = 'required';          // data-validation=\"required\"\nconsole.log(input.dataset.validation);           // 'required'\n\n// ARIA attributes\ninput.setAttribute('aria-label', 'Email address');\ninput.getAttribute('aria-label');                // 'Email address'\ninput.removeAttribute('disabled');\n\n// Class manipulation\ndiv.classList.add('active', 'highlighted');\ndiv.classList.remove('hidden');\ndiv.classList.toggle('expanded');\ndiv.classList.replace('old', 'new');\ndiv.classList.contains('active');               // true/false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Style manipulation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "element.style.color = '#3b82f6';\nelement.style.backgroundColor = '#f0f0f0';\nelement.style.setProperty('--custom-var', 'value');\nconst existing = element.style.getPropertyValue('--custom-var');\n\n// For computed styles\nconst computed = getComputedStyle(element);\nconsole.log(computed.fontSize);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-events",
      children: "4.4 Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "addEventListener:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "element.addEventListener('click', handler, options);\n\nfunction handler(event) {\n  console.log(event.type);       // 'click'\n  console.log(event.target);     // Element that triggered the event\n  console.log(event.currentTarget); // Element the listener is attached to\n  event.preventDefault();        // Cancel default behavior\n  event.stopPropagation();       // Stop further propagation\n  // event.stopImmediatePropagation(); // Also prevents other listeners on same element\n}\n\n// Options object\nelement.addEventListener('click', handler, {\n  capture: false,    // Run during capture phase?\n  once: true,        // Auto-remove after first invocation\n  passive: true,     // Indicates preventDefault will not be called (scroll optimization)\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event phases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a DOM event fires, it travels in three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capture phase"
        }), " → Event travels from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document"
        }), " down to the target element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target phase"
        }), " → Event reaches the target element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bubble phase"
        }), " → Event travels from target back up to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "document.addEventListener('click', () => console.log('capture: document'), true);\nparent.addEventListener('click', () => console.log('capture: parent'), true);\nchild.addEventListener('click', () => console.log('bubble: child'), false); // default\nparent.addEventListener('click', () => console.log('bubble: parent'), false);\ndocument.addEventListener('click', () => console.log('bubble: document'), false);\n\n// Click on child outputs:\n// capture: document\n// capture: parent\n// bubble: child\n// bubble: parent\n// bubble: document\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Event delegation"
      }), " exploits bubbling: attach a single listener to a parent to handle events from many children."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "document.querySelector('table').addEventListener('click', (event) => {\n  const row = event.target.closest('tr');\n  if (!row) return;\n\n  const action = row.dataset.action;\n  switch (action) {\n    case 'edit':\n      editRecord(row.dataset.id);\n      break;\n    case 'delete':\n      deleteRecord(row.dataset.id);\n      break;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom events:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Create\nconst event = new CustomEvent('userLogin', {\n  detail: { userId: 123, username: 'alice' },\n  bubbles: true,\n  cancelable: true,\n});\n\n// Dispatch\ndocument.dispatchEvent(event);\n\n// Listen\ndocument.addEventListener('userLogin', (e) => {\n  console.log(`User logged in: ${e.detail.username}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-formdata",
      children: "4.5 FormData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FormData"
      }), " API captures form data programmatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const form = document.querySelector('#registration-form');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n\n  const data = new FormData(form);\n\n  // Iterate entries\n  for (const [name, value] of data) {\n    console.log(name, value);\n  }\n\n  // Get single value\n  const email = data.get('email');\n\n  // Get all values for a key (checkboxes, multi-select)\n  const roles = data.getAll('role');\n\n  // Check if key exists\n  const hasAvatar = data.has('avatar');\n\n  // Append additional data\n  data.append('submitted_at', new Date().toISOString());\n\n  // Send as multipart/form-data\n  fetch('/api/users', {\n    method: 'POST',\n    body: data, // Content-Type automatically set\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-intersectionobserver",
      children: "4.6 IntersectionObserver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "IntersectionObserver"
      }), " asynchronously observes visibility changes of elements relative to a parent or the viewport → essential for lazy loading, infinite scroll, and animation triggers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const observer = new IntersectionObserver(\n  (entries) => {\n    for (const entry of entries) {\n      if (entry.isIntersecting) {\n        const img = entry.target;\n        img.src = img.dataset.src;   // Lazy load\n        img.classList.add('loaded');\n        observer.unobserve(img);     // Stop observing\n      }\n    }\n  },\n  {\n    root: null,              // Viewport (default)\n    rootMargin: '200px',     // Trigger 200px before element enters viewport\n    threshold: 0.1,          // Trigger when 10% visible\n  }\n);\n\ndocument.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-mutationobserver",
      children: "4.7 MutationObserver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MutationObserver"
      }), " watches for DOM changes — useful for detecting when content is dynamically added."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const observer = new MutationObserver((mutations) => {\n  for (const mutation of mutations) {\n    if (mutation.type === 'childList') {\n      mutation.addedNodes.forEach((node) => {\n        if (node.nodeType === Node.ELEMENT_NODE) {\n          console.log('Element added:', node);\n          // Apply behavior to dynamically added elements\n          if (node.matches('[data-lazy]')) {\n            loadLazyContent(node);\n          }\n        }\n      });\n    }\n\n    if (mutation.type === 'attributes') {\n      console.log(`Attribute ${mutation.attributeName} changed`);\n    }\n\n    if (mutation.type === 'characterData') {\n      console.log('Text content changed');\n    }\n  }\n});\n\nobserver.observe(document.getElementById('comments-section'), {\n  childList: true,      // Watch for added/removed children\n  subtree: true,        // Watch entire subtree\n  attributes: false,    // Watch attribute changes\n  characterData: false, // Watch text changes\n});\n\n// Disconnect when done\n// observer.disconnect();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-custom-element-lifecycle",
      children: "4.8 Custom Element Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom elements (Web Components) provide lifecycle callbacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "class TooltipElement extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n    this._tooltipVisible = false;\n    this._tooltipText = 'Default tooltip text';\n  }\n\n  // Called when element is added to DOM\n  connectedCallback() {\n    this._tooltipText = this.getAttribute('text') || this._tooltipText;\n    this.render();\n    this.addEventListener('mouseenter', this._showTooltip.bind(this));\n    this.addEventListener('mouseleave', this._hideTooltip.bind(this));\n  }\n\n  // Called when element is removed from DOM\n  disconnectedCallback() {\n    this.removeEventListener('mouseenter', this._showTooltip);\n    this.removeEventListener('mouseleave', this._hideTooltip);\n  }\n\n  // Called when observed attributes change\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (name === 'text') {\n      this._tooltipText = newValue;\n      this.render();\n    }\n  }\n\n  static get observedAttributes() {\n    return ['text'];\n  }\n\n  _showTooltip() { this._tooltipVisible = true; this.render(); }\n  _hideTooltip() { this._tooltipVisible = false; this.render(); }\n\n  render() {\n    this.shadowRoot.innerHTML = `\n      <style>\n        .tooltip { position: relative; display: inline-block; }\n        .tooltip-text {\n          visibility: ${this._tooltipVisible ? 'visible' : 'hidden'};\n          background: #333; color: #fff; padding: 4px 8px;\n          border-radius: 4px; position: absolute; bottom: 100%;\n        }\n      </style>\n      <div class=\"tooltip\">\n        <slot></slot>\n        <div class=\"tooltip-text\">${this._tooltipText}</div>\n      </div>\n    `;\n  }\n}\n\ncustomElements.define('my-tooltip', TooltipElement);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage in HTML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<my-tooltip text=\"Click to save your changes\">\n  <button>Save</button>\n</my-tooltip>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-resizeobserver",
      children: "4.9 ResizeObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const resizeObserver = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width, height } = entry.contentBoxSize[0];\n    console.log(`Element is now ${width}px Ã— ${height}px`);\n\n    // Adjust layout or behavior based on size\n    entry.target.classList.toggle('compact', width < 400);\n  }\n});\n\nresizeObserver.observe(document.querySelector('.responsive-panel'));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event delegation"
        }), " for dynamic lists: attach one listener to a parent and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.target.closest()"
        }), " to identify the affected child."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "innerHTML"
        }), " poses an XSS risk. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "textContent"
        }), " for text and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "insertAdjacentHTML"
        }), " when you must insert HTML from trusted sources."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelectorAll"
        }), " returns a static NodeList — changes to the DOM after selection are not reflected. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getElementsByClassName"
        }), " for a live collection."]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "querySelectorAll"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getElementsByClassName"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static NodeList (snapshot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live HTMLCollection (updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "appendChild"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "append"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepts one node, returns it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepts multiple nodes/strings, returns undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "innerHTML"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insertAdjacentHTML"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces all child content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inserts at a specified position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "event.target"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "event.currentTarget"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element that triggered the event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element the listener is attached to"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntersectionObserver"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResizeObserver"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects visibility changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects dimension changes"
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
            children: "Selection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "document.querySelector()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "document.querySelectorAll()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "element.closest()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traversal"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "parentElement"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "children"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "firstElementChild"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "lastElementChild"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "nextElementSibling"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "previousElementSibling"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "createElement()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "appendChild()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "prepend()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "after()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "before()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "classList.add()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "classList.remove()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "classList.toggle()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "classList.replace()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "classList.contains()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "addEventListener(event, handler, options)"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "event.preventDefault()"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "event.stopPropagation()"
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
            children: "Image Gallery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IntersectionObserver for lazy loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster initial page load, saved bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event delegation for row actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single listener handles all rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drag-and-Drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drag and Drop API with dataTransfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive file and item reordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Form Submission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FormData + fetch API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified multipart form handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResizeObserver for breakpoint-specific UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element-level responsive design"
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
        children: "Q1. What is the key advantage of event delegation?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It runs in the capture phase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A single listener handles events from many child elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It prevents event bubbling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It works only for click events"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Event delegation uses a single parent listener to handle events from current and future child elements via bubbling."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. Which method safely inserts HTML without replacing existing content?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "innerHTML"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "textContent"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "insertAdjacentHTML"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "outerHTML"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insertAdjacentHTML"
            }), " inserts HTML at a specified position without disturbing existing child nodes."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "passive: true"
        }), " option on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addEventListener"
        }), " indicate?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The listener runs only once"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) The listener will not call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preventDefault()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The listener runs in the capture phase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The listener is debounced"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "passive: true"
            }), " is a performance optimization that tells the browser ", (0,jsx_runtime.jsx)(_components.code, {
              children: "preventDefault()"
            }), " will never be called, enabling smoother scrolling."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. How do you stop an event from traveling up the DOM tree?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.preventDefault()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.stopPropagation()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.stopImmediatePropagation()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both B and C"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["D) Both B and C stop propagation; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stopImmediatePropagation()"
            }), " also prevents other listeners on the same element from firing."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-dom-tree-analyzer--event-delegation-helper",
      children: "TypeScript: DOM Tree Analyzer & Event Delegation Helper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DOMTreeAnalyzer {\n  static countTags(html: string): Record<string, number> {\n    const counts: Record<string, number> = {};\n    const re = /<(\\w+)[^>]*>/g;\n    let m: RegExpExecArray | null;\n    while ((m = re.exec(html)) !== null) {\n      const t = m[1].toLowerCase();\n      counts[t] = (counts[t] || 0) + 1;\n    }\n    return counts;\n  }\n  static findDepth(html: string): number {\n    let depth = 0, max = 0;\n    const selfClosing = new Set([\"br\", \"hr\", \"img\", \"input\", \"meta\", \"link\"]);\n    const re = /<\\/?(\\w+)[^>]*>/g;\n    let m: RegExpExecArray | null;\n    while ((m = re.exec(html)) !== null) {\n      if (m[0][1] === \"/\") depth--;\n      else if (!selfClosing.has(m[1].toLowerCase())) max = Math.max(max, ++depth);\n    }\n    return max;\n  }\n}\n\nclass EventDelegator {\n  static selector(eventType: string, selector: string, handler: string): string {\n    return `document.addEventListener(\"${eventType}\", (e) => {\n  const target = e.target.closest(\"${selector}\");\n  if (target) { ${handler} }\n});`;\n  }\n  static throttle<T extends (...args: any[]) => void>(fn: T, ms: number): T {\n    let last = 0;\n    return ((...args: any[]) => {\n      const now = Date.now();\n      if (now - last >= ms) { last = now; fn(...args); }\n    }) as T;\n  }\n}\n\nclass FormDataSimulator {\n  static serialize(form: Record<string, string>): string {\n    return Object.entries(form).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join(\"&\");\n  }\n}\n\nconsole.log(\"Tags:\", DOMTreeAnalyzer.countTags(\"<div><p><span>Hi</span></p><img></div>\"));\nconsole.log(\"Depth:\", DOMTreeAnalyzer.findDepth(\"<div><section><article><p>Deep</p></article></section></div>\"));\nconsole.log(\"Throttled:\", EventDelegator.throttle(() => console.log(\"ok\"), 1000).toString().slice(0, 50) + \"...\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-dom-tree-walker-event-delegation-virtual-dom-diff",
      children: "TypeScript Implementation: DOM Tree Walker, Event Delegation, Virtual DOM Diff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VNode {\n    tag: string;\n    props: Record<string, any>;\n    children: (VNode | string)[];\n    key?: string;\n}\n\nfunction h(tag: string, props: Record<string, any> = {}, children: (VNode | string)[] = []): VNode {\n    return { tag, props, children, key: props?.key };\n}\n\nclass VirtualDOM {\n    static diff(oldNode: VNode | string | null, newNode: VNode | string | null): { type: string; path: string; oldVal?: any; newVal?: any }[] {\n        const patches: { type: string; path: string; oldVal?: any; newVal?: any }[] = [];\n\n        if (oldNode === newNode) return patches;\n        if (oldNode === null || oldNode === undefined) {\n            patches.push({ type: \"CREATE\", path: \"\", newVal: newNode });\n            return patches;\n        }\n        if (newNode === null || newNode === undefined) {\n            patches.push({ type: \"REMOVE\", path: \"\", oldVal: oldNode });\n            return patches;\n        }\n        if (typeof oldNode === \"string\" || typeof newNode === \"string\") {\n            if (oldNode !== newNode) patches.push({ type: \"TEXT\", path: \"\", oldVal: oldNode, newVal: newNode });\n            return patches;\n        }\n        if (oldNode.tag !== newNode.tag) {\n            patches.push({ type: \"REPLACE\", path: \"\", oldVal: oldNode.tag, newVal: newNode.tag });\n            return patches;\n        }\n\n        const allKeys = [...new Set([...Object.keys(oldNode.props), ...Object.keys(newNode.props)])];\n        for (const key of allKeys) {\n            if (oldNode.props[key] !== newNode.props[key]) {\n                patches.push({ type: \"PROP\", path: key, oldVal: oldNode.props[key], newVal: newNode.props[key] });\n            }\n        }\n\n        const maxLen = Math.max(oldNode.children.length, newNode.children.length);\n        for (let i = 0; i < maxLen; i++) {\n            const childPatches = VirtualDOM.diff(\n                oldNode.children[i] as VNode | string | null,\n                newNode.children[i] as VNode | string | null\n            );\n            for (const p of childPatches) {\n                patches.push({ ...p, path: `[${i}]${p.path ? \".\" + p.path : \"\"}` });\n            }\n        }\n\n        return patches;\n    }\n\n    static patch(node: Element, patches: { type: string; path: string; oldVal?: any; newVal?: any }[]): void {\n        for (const p of patches) {\n            console.log(`[${p.type}] ${p.path}:`, p.oldVal, \"?\", p.newVal);\n        }\n    }\n}\n\nclass DOMTreeWalker {\n    static walk(element: Element, depth: number = 0): { tag: string; id: string; classes: string; depth: number; children: number }[] {\n        const result: { tag: string; id: string; classes: string; depth: number; children: number }[] = [];\n        result.push({\n            tag: element.tagName.toLowerCase(),\n            id: element.id || \"\",\n            classes: Array.from(element.classList).join(\".\"),\n            depth,\n            children: element.children.length\n        });\n        for (let i = 0; i < element.children.length; i++) {\n            result.push(...DOMTreeWalker.walk(element.children[i] as Element, depth + 1));\n        }\n        return result;\n    }\n\n    static queryAll(element: Element, selector: string): Element[] {\n        const results: Element[] = [];\n        if (element.matches && element.matches(selector)) results.push(element);\n        for (let i = 0; i < element.children.length; i++) {\n            results.push(...DOMTreeWalker.queryAll(element.children[i] as Element, selector));\n        }\n        return results;\n    }\n}\n\nclass EventDelegation {\n    static delegate(parent: Element, selector: string, eventType: string, handler: (target: Element, e: Event) => void): () => void {\n        const listener = (e: Event) => {\n            const target = e.target as Element;\n            const matched = target.closest(selector);\n            if (matched && parent.contains(matched)) {\n                handler(matched as Element, e);\n            }\n        };\n        parent.addEventListener(eventType, listener);\n        return () => parent.removeEventListener(eventType, listener);\n    }\n\n    static throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {\n        let lastCall = 0;\n        return (...args: Parameters<T>) => {\n            const now = Date.now();\n            if (now - lastCall >= delay) { lastCall = now; fn(...args); }\n        };\n    }\n\n    static debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {\n        let timer: ReturnType<typeof setTimeout>;\n        return (...args: Parameters<T>) => {\n            clearTimeout(timer);\n            timer = setTimeout(() => fn(...args), delay);\n        };\n    }\n}\n\n// Demo\nconst oldTree = h(\"div\", { class: \"container\" }, [\n    h(\"h1\", {}, [\"Title\"]),\n    h(\"p\", { class: \"desc\" }, [\"Description\"]),\n    h(\"ul\", {}, [h(\"li\", { key: \"1\" }, [\"Item 1\"]), h(\"li\", { key: \"2\" }, [\"Item 2\"])])\n]);\nconst newTree = h(\"div\", { class: \"container wide\" }, [\n    h(\"h1\", {}, [\"New Title\"]),\n    h(\"p\", { class: \"desc\" }, [\"Updated description\"]),\n    h(\"ul\", {}, [h(\"li\", { key: \"1\" }, [\"Item 1\"]), h(\"li\", { key: \"2\" }, [\"Item 2\"]), h(\"li\", { key: \"3\" }, [\"Item 3\"])])\n]);\n\nconsole.log(\"VDOM Diffs:\", VirtualDOM.diff(oldTree, newTree).length, \"changes\");\nfor (const d of VirtualDOM.diff(oldTree, newTree)) console.log(`  ${d.type} at ${d.path}`);\n\nconsole.log(\"Throttled:\", EventDelegation.throttle(() => {}, 1000).toString().slice(0, 50) + \"...\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// js dom\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'js dom', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FormData"
        }), " provides a convenient interface for capturing form data including file uploads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelector"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelectorAll"
        }), " for CSS-selector-based element selection."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DOM manipulation involves creating elements, inserting them, modifying attributes/classes/styles, and removing them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Events propagate in capture-target-bubble phases; delegation leverages bubbling for efficient listener management."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FormData"
        }), " provides a convenient interface for capturing and submitting form data, including file uploads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IntersectionObserver"
        }), " enables performant visibility-based features like lazy loading and infinite scroll."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ResizeObserver"
        }), " allows responsive components to react to dimension changes at the element level."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IntersectionObserver"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResizeObserver"
        }), " enable performant visibility and dimension-based behaviors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "querySelectorAll"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getElementsByClassName"
        }), " in terms of return value liveness?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "passive"
        }), " option in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addEventListener"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "innerHTML"
        }), " dangerous for inserting user-generated content?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.target"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.currentTarget"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a tab panel component using event delegation. A single click listener on the tablist should handle switching between panels based on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-controls"
        }), " attribute."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build an image gallery that uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IntersectionObserver"
        }), " to lazy-load images as the user scrolls, with a 100px rootMargin."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a form with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FormData"
        }), " that collects a user's name, email, profile picture (file), and selected interests (checkboxes). Log the complete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FormData"
        }), " on submit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems-1",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<my-avatar>"
        }), " Web Component that displays a user avatar with initials fallback. It should accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size"
        }), " attributes and render initials (first letter of name) as a fallback when the image fails to load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a fully accessible custom dropdown select (replacing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<select>"
        }), ") using ARIA roles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use event delegation for dynamic content"
        }), " — attach one listener to a parent and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.target.closest()"
        }), " to handle events from elements added after initial render."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "textContent"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "innerHTML"
          })]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "textContent"
        }), " is safe from XSS and faster because it does not parse HTML. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "insertAdjacentHTML"
        }), " when you must insert safe HTML."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IntersectionObserver"
          }), " for lazy loading"]
        }), " — it is more performant than scroll event listeners because it is browser-native and does not block the main thread."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Passive event listeners improve scroll performance"
        }), " — add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ passive: true }"
        }), " to scroll and touch event listeners when you do not need ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preventDefault()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Elements encapsulate reusable behavior"
        }), " — use Shadow DOM for style isolation and lifecycle callbacks for setup/cleanup. (", (0,jsx_runtime.jsx)(_components.code, {
          children: "listbox"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "option"
        }), "), keyboard navigation (arrow keys, Enter, Escape), and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResizeObserver"
        }), " to ensure the dropdown panel stays within the viewport. The component must:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expand and collapse on click and Enter/Space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Navigate options with arrow keys (circular wrapping)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-selected"
            }), " on the active option"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Announce selection changes to screen readers using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-live"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Close on Escape and click outside"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Recalculate dropdown direction (above or below) when viewport changes using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResizeObserver"
            })]
          }), "\n"]
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