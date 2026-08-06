"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74211],{

/***/ 79768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_07_react_advanced_md_91e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-07-react-advanced-md-91e.json
const site_docs_courses_web_development_07_react_advanced_md_91e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/07-react-advanced","title":"Chapter 7 → React Advanced","description":"Previous 08-node-express","source":"@site/docs/courses/web-development/07-react-advanced.md","sourceDirName":"courses/web-development","slug":"/web-development/07-react-advanced","permalink":"/ai-engineering-journey/web-development/07-react-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-react-advanced","slug":"/web-development/07-react-advanced","title":"Chapter 7 → React Advanced","sidebar_label":"Chapter 7 → React Advanced","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6 → React Basics","permalink":"/ai-engineering-journey/web-development/06-react-basics"},"next":{"title":"Chapter 8 → Node.js and Express","permalink":"/ai-engineering-journey/web-development/08-node-express"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/07-react-advanced.md


const frontMatter = {
	id: '07-react-advanced',
	slug: '/web-development/07-react-advanced',
	title: 'Chapter 7 → React Advanced',
	sidebar_label: 'Chapter 7 → React Advanced',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7 → React Advanced';

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
  "value": "7.1 useRef",
  "id": "71-useref",
  "level": 3
}, {
  "value": "7.2 useMemo and useCallback",
  "id": "72-usememo-and-usecallback",
  "level": 3
}, {
  "value": "7.3 useReducer",
  "id": "73-usereducer",
  "level": 3
}, {
  "value": "7.4 useContext",
  "id": "74-usecontext",
  "level": 3
}, {
  "value": "7.5 Custom Hooks",
  "id": "75-custom-hooks",
  "level": 3
}, {
  "value": "7.6 React Router",
  "id": "76-react-router",
  "level": 3
}, {
  "value": "7.7 Error Boundaries",
  "id": "77-error-boundaries",
  "level": 3
}, {
  "value": "7.8 Portals",
  "id": "78-portals",
  "level": 3
}, {
  "value": "7.9 Performance Optimization",
  "id": "79-performance-optimization",
  "level": 3
}, {
  "value": "7.10 React DevTools",
  "id": "710-react-devtools",
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
  "value": "TypeScript: Custom Hook Builder &amp; Context Generator",
  "id": "typescript-custom-hook-builder--context-generator",
  "level": 3
}, {
  "value": "TypeScript Implementation: Redux-Style State Manager, Context Provider, Custom Hook Creator",
  "id": "typescript-implementation-redux-style-state-manager-context-provider-custom-hook-creator",
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
        id: "chapter-7--react-advanced",
        children: "Chapter 7 → React Advanced"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/06-react-basics",
          children: "06-react-basics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/08-node-express",
          children: "08-node-express"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), " persists mutable values across renders without causing re-renders when mutated."]
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
        href: "../../assets/images/lessons/web-development/07-react-advanced/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/07-react-advanced/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/07-react-advanced/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/07-react-advanced/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/07-react-advanced/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/07-react-advanced/visual-explanation.png",
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), " cache computations and function references to avoid wasted work."]
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
            children: "useRef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable references that persist across renders without causing re-renders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for DOM access, previous values, and render count tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useMemo/useCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memoize expensive computations and function references"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only memoize after measuring — premature optimization adds complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useReducer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles complex state transitions with a reducer function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for state that depends on previous state with multiple sub-values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides dependency injection across the component tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create custom hooks with context validation for better developer experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate reusable stateful logic into functions that can use other hooks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefix custom hooks with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use"
            }), " and compose them from built-in hooks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative client-side routing with nested routes and navigation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Outlet"
            }), " for nested layouts and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavLink"
            }), " for active link styling"]
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useReducer"
        }), " manages complex state logic with a reducer function and action dispatches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[useRef]\n    B[useMemo & useCallback]\n    A --> B\n    C[useReducer]\n    B --> C\n    D[Context API & useContext]\n    C --> D\n    E[Custom Hooks]\n    D --> E\n    F[React Router]\n    E --> F\n    G[Error Boundaries]\n    F --> G\n    H[Portals]\n    G --> H\n    I[Performance Optimization]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage mutable references and DOM access using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Memoize expensive computations with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " and callback identity with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage complex state transitions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useReducer"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Share state across the component tree using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useContext"
        }), " and the Context API."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build custom hooks that encapsulate reusable logic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement client-side routing using React Router."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use error boundaries, portals, and performance optimization techniques."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Context API with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useContext"
        }), " provides dependency injection across the component tree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/07-react-advanced.png",
        alt: "React Advanced Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-useref",
      children: "7.1 useRef"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "useRef"
      }), " creates a mutable object that persists across renders without causing re-renders when mutated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useRef, useEffect } from 'react';\n\nfunction AutoFocusInput() {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current?.focus();\n  }, []);\n\n  return <input ref={inputRef} type=\"text\" />;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function VideoPlayer({ src }) {\n  const videoRef = useRef(null);\n  const [isPlaying, setIsPlaying] = useState(false);\n\n  const togglePlay = () => {\n    if (videoRef.current.paused) {\n      videoRef.current.play();\n      setIsPlaying(true);\n    } else {\n      videoRef.current.pause();\n      setIsPlaying(false);\n    }\n  };\n\n  return (\n    <div>\n      <video ref={videoRef} src={src} />\n      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>\n    </div>\n  );\n}\n\n// Storing previous value\nfunction usePrevious(value) {\n  const ref = useRef();\n  useEffect(() => {\n    ref.current = value;\n  }, [value]);\n  return ref.current;\n}\n\n// Tracking render count\nfunction RenderCounter() {\n  const count = useRef(0);\n  count.current++;\n  return <p>Rendered {count.current} times</p>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-usememo-and-usecallback",
      children: "7.2 useMemo and useCallback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "useMemo"
      }), " caches the result of a computation; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useCallback"
      }), " caches a function reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useMemo, useCallback } from 'react';\n\n// useMemo → cache computed values\nfunction ExpensiveList({ items, filter }) {\n  const filtered = useMemo(() => {\n    console.log('Filtering...');\n    return items.filter((item) =>\n      item.name.toLowerCase().includes(filter.toLowerCase())\n    );\n  }, [items, filter]);\n\n  const total = useMemo(\n    () => items.reduce((sum, item) => sum + item.price, 0),\n    [items]\n  );\n\n  return (\n    <div>\n      <ul>\n        {filtered.map((item) => (\n          <li key={item.id}>{item.name} → ${item.price}</li>\n        ))}\n      </ul>\n      <p>Total: ${total.toFixed(2)}</p>\n    </div>\n  );\n}\n\n// useCallback → cache function references\nfunction ProductPage({ productId, onAddToCart }) {\n  const [product, setProduct] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/products/${productId}`)\n      .then((r) => r.json())\n      .then(setProduct);\n  }, [productId]);\n\n  // Stable reference → does not re-create unless productId changes\n  const handleAdd = useCallback(() => {\n    onAddToCart(productId);\n  }, [productId, onAddToCart]);\n\n  if (!product) return <p>Loading...</p>;\n\n  return (\n    <div>\n      <h2>{product.name}</h2>\n      <AddToCartButton onAdd={handleAdd} />\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " for genuinely expensive computations (iterations, complex transforms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), " when passing callbacks to optimized child components (wrapped in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "React.memo"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Premature optimization adds complexity → measure first, then memoize."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-usereducer",
      children: "7.3 useReducer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "useReducer"
      }), " handles complex state logic with multiple sub-values or transitions that depend on previous state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useReducer } from 'react';\n\nconst initialState = {\n  items: [],\n  total: 0,\n  discount: 0,\n};\n\nfunction cartReducer(state, action) {\n  switch (action.type) {\n    case 'ADD_ITEM': {\n      const newItems = [...state.items, action.payload];\n      return {\n        ...state,\n        items: newItems,\n        total: newItems.reduce((sum, item) => sum + item.price, 0),\n      };\n    }\n    case 'REMOVE_ITEM': {\n      const newItems = state.items.filter((_, i) => i !== action.index);\n      return {\n        ...state,\n        items: newItems,\n        total: newItems.reduce((sum, item) => sum + item.price, 0),\n      };\n    }\n    case 'APPLY_DISCOUNT': {\n      return {\n        ...state,\n        discount: Math.min(action.percentage, 50), // Cap at 50%\n      };\n    }\n    case 'CLEAR_CART':\n      return initialState;\n    default:\n      throw new Error(`Unknown action: ${action.type}`);\n  }\n}\n\nfunction ShoppingCart() {\n  const [cart, dispatch] = useReducer(cartReducer, initialState);\n\n  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });\n  const removeItem = (index) => dispatch({ type: 'REMOVE_ITEM', index });\n  const applyDiscount = (pct) => dispatch({ type: 'APPLY_DISCOUNT', percentage: pct });\n\n  const finalTotal = cart.total * (1 - cart.discount / 100);\n\n  return (\n    <div>\n      {cart.items.map((item, i) => (\n        <div key={i}>\n          {item.name} → ${item.price}\n          <button onClick={() => removeItem(i)}>Remove</button>\n        </div>\n      ))}\n      <p>Subtotal: ${cart.total.toFixed(2)}</p>\n      <p>Discount: {cart.discount}%</p>\n      <p>Total: ${finalTotal.toFixed(2)}</p>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-usecontext",
      children: "7.4 useContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context provides a way to pass data through the component tree without manually threading props at every level."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { createContext, useContext, useState } from 'react';\n\n// Create context\nconst AuthContext = createContext(null);\n\n// Provider component\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  const login = async (email, password) => {\n    const response = await fetch('/api/auth/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ email, password }),\n    });\n    if (!response.ok) throw new Error('Login failed');\n    const userData = await response.json();\n    setUser(userData);\n    return userData;\n  };\n\n  const logout = () => {\n    setUser(null);\n    localStorage.removeItem('token');\n  };\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Custom hook for consuming\nfunction useAuth() {\n  const context = useContext(AuthContext);\n  if (!context) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n  return context;\n}\n\n// Using the context\nfunction ProfileButton() {\n  const { user, logout } = useAuth();\n  return (\n    <div>\n      <span>{user?.name}</span>\n      <button onClick={logout}>Logout</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <AuthProvider>\n      <Navbar />\n      <MainContent />\n    </AuthProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-custom-hooks",
      children: "7.5 Custom Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom hooks extract reusable stateful logic into functions that may use other hooks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// useFetch → generic data fetching\nfunction useFetch(url, options = {}) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let cancelled = false;\n    setLoading(true);\n    setError(null);\n\n    fetch(url, options)\n      .then((res) => {\n        if (!res.ok) throw new Error(`HTTP ${res.status}`);\n        return res.json();\n      })\n      .then((json) => {\n        if (!cancelled) setData(json);\n      })\n      .catch((err) => {\n        if (!cancelled) setError(err.message);\n      })\n      .finally(() => {\n        if (!cancelled) setLoading(false);\n      });\n\n    return () => { cancelled = true; };\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// useLocalStorage → synced with localStorage\nfunction useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    const valueToStore = value instanceof Function ? value(storedValue) : value;\n    setStoredValue(valueToStore);\n    localStorage.setItem(key, JSON.stringify(valueToStore));\n  };\n\n  return [storedValue, setValue];\n}\n\n// useMediaQuery → responsive breakpoints\nfunction useMediaQuery(query) {\n  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);\n\n  useEffect(() => {\n    const mql = window.matchMedia(query);\n    const handler = (e) => setMatches(e.matches);\n    mql.addEventListener('change', handler);\n    return () => mql.removeEventListener('change', handler);\n  }, [query]);\n\n  return matches;\n}\n\n// Usage\nfunction ResponsiveComponent() {\n  const { data: users, loading } = useFetch('/api/users');\n  const isMobile = useMediaQuery('(max-width: 768px)');\n  const [theme, setTheme] = useLocalStorage('theme', 'light');\n\n  if (loading) return <p>Loading...</p>;\n\n  return (\n    <div className={isMobile ? 'mobile' : 'desktop'}>\n      <h1>Users ({theme} mode)</h1>\n      <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>\n        Toggle Theme\n      </button>\n      <ul>\n        {users?.map((user) => <li key={user.id}>{user.name}</li>)}\n      </ul>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-react-router",
      children: "7.6 React Router"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React Router provides declarative client-side routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <NavLink to=\"/\" end>Home</NavLink>\n        <NavLink to=\"/products\">Products</NavLink>\n        <NavLink to=\"/about\">About</NavLink>\n      </nav>\n\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/products\" element={<Products />}>\n          <Route index element={<ProductList />} />\n          <Route path=\":id\" element={<ProductDetail />} />\n        </Route>\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"*\" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\n// Nested routes with Outlet\nfunction Products() {\n  return (\n    <div>\n      <h1>Products</h1>\n      <Outlet /> {/* Child routes render here */}\n    </div>\n  );\n}\n\n// Route parameters\nfunction ProductDetail() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <h2>Product {id}</h2>\n      <button onClick={() => navigate('/products')}>Back to Products</button>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-error-boundaries",
      children: "7.7 Error Boundaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error boundaries catch JavaScript errors in their child component tree, log the error, and display a fallback UI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, info) {\n    console.error('Error caught by boundary:', error, info.componentStack);\n    // Send to error tracking service\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return this.props.fallback || (\n        <div role=\"alert\">\n          <h2>Something went wrong.</h2>\n          <p>{this.state.error?.message}</p>\n          <button onClick={() => this.setState({ hasError: false, error: null })}>\n            Try again\n          </button>\n        </div>\n      );\n    }\n\n    return this.props.children;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "78-portals",
      children: "7.8 Portals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Portals render children into a different DOM node outside the parent hierarchy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { createPortal } from 'react-dom';\n\nfunction Modal({ open, onClose, children }) {\n  if (!open) return null;\n\n  return createPortal(\n    <div className=\"modal-overlay\" onClick={onClose} role=\"dialog\" aria-modal=\"true\">\n      <div className=\"modal-content\" onClick={(e) => e.stopPropagation()}>\n        <button onClick={onClose} aria-label=\"Close\">X</button>\n        {children}\n      </div>\n    </div>,\n    document.getElementById('modal-root')\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "79-performance-optimization",
      children: "7.9 Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { memo } from 'react';\n\n// React.memo → prevent re-render when props haven't changed (shallow comparison)\nconst ExpensiveChart = memo(function ExpensiveChart({ data, config }) {\n  return <svg>{/* Complex rendering */}</svg>;\n});\n\n// Usage with useCallback ensures memoized children don't re-render\nfunction Dashboard() {\n  const [filter, setFilter] = useState('all');\n  const [data, setData] = useState([]);\n\n  const handleFilterChange = useCallback((newFilter) => {\n    setFilter(newFilter);\n  }, []);\n\n  const filteredData = useMemo(\n    () => data.filter((d) => filter === 'all' || d.category === filter),\n    [data, filter]\n  );\n\n  return (\n    <div>\n      <FilterBar onChange={handleFilterChange} />\n      <ExpensiveChart data={filteredData} config={chartConfig} />\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "710-react-devtools",
      children: "7.10 React DevTools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React DevTools (browser extension) provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Components tab"
        }), ": Inspect component tree, props, state, hooks values in real time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profiler tab"
        }), ": Record performance flamegraphs showing render duration and reason."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source maps"
        }), ": Navigate from component to source file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nCreate a custom hook for every piece of reusable stateful logic. Extract ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useFetch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useLocalStorage"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMediaQuery"
        }), " early — they pay for themselves."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), " add complexity. Only use them when you've measured a performance problem — React is fast without them in most cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nError boundaries catch errors during rendering, in lifecycle methods, and in constructors. They do NOT catch errors in event handlers, async code, or SSR."
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
              children: "useRef"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useState"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable, no re-render on change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable setter, triggers re-render"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cached value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cached function reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useReducer"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useState"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex state, action-based updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple independent values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context vs Props Drilling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global state without manual threading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passes through every intermediate layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Boundary vs try/catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative, catches render errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imperative, catches synchronous code"
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
            children: "Hooks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useRef"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "useCallback"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "useReducer"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "useContext"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "React.memo(Component)"
            }), " for props comparison, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            }), " for values, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useCallback"
            }), " for functions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "createContext"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Context.Provider"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "useContext()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router Components"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BrowserRouter"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Routes"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Route"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Link"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavLink"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Outlet"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Error boundaries, Portals, React.memo, Code splitting with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "React.lazy"
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
            children: "Shopping Cart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useReducer for cart state, Context for user data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex state transitions with predictable actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useMemo for filtered data, React.memo for charts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth rendering with large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context for user session, custom useAuth hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global user state accessible from any component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Form Wizard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useReducer for multi-step form state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step navigation with validation at each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom useWebSocket hook, useRef for instance tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated WebSocket lifecycle management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q1. When should you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useReducer"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Always — it's more powerful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When state has multiple sub-values or complex transition logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When you need synchronous updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Never — useReducer is deprecated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useReducer"
            }), " excels when state logic involves multiple sub-values, complex transitions, or when the next state depends on the previous one."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "React.memo"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To memoize function results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To prevent re-renders when props haven't changed (shallow comparison)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To memoize API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To track render count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "React.memo"
            }), " is a higher-order component that prevents re-rendering when the component's props haven't changed according to shallow comparison."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. What types of errors do Error Boundaries NOT catch?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Render errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Errors in lifecycle methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Errors in event handlers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Constructor errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "C) Error boundaries do not catch errors in event handlers, asynchronous code (setTimeout, fetch), or server-side rendering."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. How do you prevent unnecessary re-renders when passing callbacks to memoized children?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "React.Fragment"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useCallback"
            }), " returns a stable function reference that only changes when its dependencies change, preventing unnecessary re-renders of memoized children."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-custom-hook-builder--context-generator",
      children: "TypeScript: Custom Hook Builder & Context Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CustomHookGenerator {\n  static createReducer<S extends Record<string, any>>(\n    initial: S, handlers: Record<string, (state: S, action: any) => S>\n  ): { initialState: S; reducer: (state: S, action: { type: string; payload?: any }) => S } {\n    return {\n      initialState: initial,\n      reducer: (state, action) => handlers[action.type]?.(state, action.payload) ?? state,\n    };\n  }\n\n  static contextTemplate<T>(name: string, defaultValue: T): string {\n    return `import { createContext, useContext, useState, ReactNode } from \"react\";\n\ninterface ${name}ContextType {\n  value: ${typeof defaultValue};\n  setValue: (val: ${typeof defaultValue}) => void;\n}\n\nconst ${name}Context = createContext<${name}ContextType | undefined>(undefined);\n\nexport const ${name}Provider: React.FC<{ children: ReactNode }> = ({ children }) => {\n  const [value, setValue] = useState<${typeof defaultValue}>(${JSON.stringify(defaultValue)});\n  return <${name}Context.Provider value={{ value, setValue }}>{children}</${name}Context.Provider>;\n};\n\nexport const use${name} = (): ${name}ContextType => {\n  const ctx = useContext(${name}Context);\n  if (!ctx) throw new Error(\"use${name} must be used within ${name}Provider\");\n  return ctx;\n};`;\n  }\n}\n\nclass PerformanceOptimizer {\n  static memoCompare<T>(prev: T, next: T, deps: (keyof T)[]): boolean {\n    return deps.every(d => prev[d] === next[d]);\n  }\n  static debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {\n    let timer: ReturnType<typeof setTimeout>;\n    return ((...args: any[]) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); }) as T;\n  }\n}\n\nconsole.log(CustomHookGenerator.createReducer({ count: 0 }, { increment: (s) => ({ count: s.count + 1 }) }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-redux-style-state-manager-context-provider-custom-hook-creator",
      children: "TypeScript Implementation: Redux-Style State Manager, Context Provider, Custom Hook Creator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Reducer<S, A> = (state: S, action: A) => S;\ntype Listener = () => void;\n\nclass ReduxStore<S, A> {\n    private state: S;\n    private reducer: Reducer<S, A>;\n    private listeners: Set<Listener> = new Set();\n\n    constructor(reducer: Reducer<S, A>, initialState: S) {\n        this.reducer = reducer;\n        this.state = initialState;\n    }\n\n    getState(): S { return this.state; }\n\n    dispatch(action: A): void {\n        this.state = this.reducer(this.state, action);\n        this.listeners.forEach(l => l());\n    }\n\n    subscribe(listener: Listener): () => void {\n        this.listeners.add(listener);\n        return () => this.listeners.delete(listener);\n    }\n\n    combineReducers<R extends Record<string, Reducer<any, any>>>(reducers: R): Reducer<{ [K in keyof R]: ReturnType<R[K]> }, any> {\n        return (state: any, action: any) => {\n            const nextState: any = {};\n            for (const key of Object.keys(reducers)) {\n                nextState[key] = reducers[key](state?.[key], action);\n            }\n            return nextState;\n        };\n    }\n\n    static applyMiddleware<S, A>(...middlewares: ((store: ReduxStore<S, A>) => (next: (action: A) => void) => (action: A) => void)[]) {\n        return (store: ReduxStore<S, A>) => {\n            let dispatch = store.dispatch.bind(store);\n            for (const middleware of [...middlewares].reverse()) {\n                dispatch = middleware(store)(dispatch);\n            }\n            return { ...store, dispatch };\n        };\n    }\n}\n\nclass ContextProvider<T> {\n    private value: T;\n    private subscribers: Set<() => void> = new Set();\n\n    constructor(defaultValue: T) { this.value = defaultValue; }\n\n    getValue(): T { return this.value; }\n\n    setValue(newValue: T): void {\n        this.value = newValue;\n        this.subscribers.forEach(cb => cb());\n    }\n\n    subscribe(cb: () => void): () => void {\n        this.subscribers.add(cb);\n        return () => this.subscribers.delete(cb);\n    }\n\n    static createContext<T>(defaultValue: T): { Provider: ContextProvider<T>; useContext: () => T } {\n        const provider = new ContextProvider(defaultValue);\n        return {\n            Provider: provider,\n            useContext: () => provider.getValue()\n        };\n    }\n}\n\ntype AnyHook = (...args: any[]) => any;\n\nclass CustomHookCreator {\n    static compose(...hooks: ((...args: any[]) => any)[]): (...args: any[]) => any[] {\n        return (...args: any[]) => hooks.map(h => h(...args));\n    }\n\n    static createStateful<T>(initialValue: T): { get: () => T; set: (v: T) => void; subscribe: (cb: (v: T) => void) => () => void } {\n        let value = initialValue;\n        const subscribers = new Set<(v: T) => void>();\n        return {\n            get: () => value,\n            set: (v: T) => { value = v; subscribers.forEach(cb => cb(value)); },\n            subscribe: (cb: (v: T) => void) => { subscribers.add(cb); return () => subscribers.delete(cb); }\n        };\n    }\n\n    static createDebounced<T>(delay: number): { get: () => T | undefined; set: (v: T) => void } {\n        let value: T | undefined;\n        let timer: ReturnType<typeof setTimeout>;\n        return {\n            get: () => value,\n            set: (v: T) => {\n                clearTimeout(timer);\n                timer = setTimeout(() => { value = v; }, delay);\n            }\n        };\n    }\n\n    static createToggle(initial: boolean = false): { value: boolean; toggle: () => void; setTrue: () => void; setFalse: () => void } {\n        let value = initial;\n        return {\n            get value() { return value; },\n            toggle: () => { value = !value; },\n            setTrue: () => { value = true; },\n            setFalse: () => { value = false; }\n        };\n    }\n}\n\n// Demo\nconst counterReducer = (state = 0, action: any) => {\n    switch (action.type) {\n        case \"INCREMENT\": return state + 1;\n        case \"DECREMENT\": return state - 1;\n        case \"RESET\": return 0;\n        default: return state;\n    }\n};\nconst store = new ReduxStore(counterReducer, 0);\nstore.subscribe(() => console.log(\"State:\", store.getState()));\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"DECREMENT\" });\n\nconst toggle = CustomHookCreator.createToggle(false);\nconsole.log(\"Toggle initial:\", toggle.value);\ntoggle.toggle();\nconsole.log(\"Toggle after:\", toggle.value);\n\nconst ctx = ContextProvider.createContext(\"default\");\nconsole.log(\"Context value:\", ctx.useContext());\nctx.Provider.setValue(\"updated\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// react advanced\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'react advanced', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Custom hooks encapsulate reusable stateful logic and must start with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use"
        }), " prefix."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), " persists mutable values across renders without causing re-renders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), " memoize values and functions to avoid wasted work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useReducer"
        }), " handles complex state transitions with a reducer function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Context API with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useContext"
        }), " provides dependency injection across the component tree."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom hooks encapsulate reusable stateful logic following naming conventions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "React Router enables declarative, nested client-side routing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error boundaries catch rendering errors in child trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Portals render content outside the parent DOM hierarchy."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "React.memo"
        }), " and memoization hooks optimize re-renders."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "React DevTools enables real-time inspection and profiling."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " React Router enables declarative nested routing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BrowserRouter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Routes"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Route"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), "? When would you choose one over the other?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of \"lifting state up\" and how Context API changes this pattern."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useCallback"
        }), " help with performance and what happens if its dependency array is incorrect?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the limitations of error boundaries? What types of errors do they not catch?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a custom hook ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useDebounce(value, delay)"
        }), " that returns a debounced version of the value. Demonstrate its use in a search input that waits 300ms before triggering an API call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ThemeProvider"
        }), " context with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useTheme"
        }), " hook that provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "theme"
        }), " (light/dark) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toggleTheme"
        }), " to all descendants. Persist the choice in localStorage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useIntersectionObserver"
        }), " custom hook that takes options and returns a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ref"
        }), " to attach to an element, plus an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isVisible"
        }), " boolean. Use it to build an infinite scroll component."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a complete shopping cart application featuring:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Product listing"
            }), " with add-to-cart functionality"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cart"
            }), " managed with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useReducer"
            }), " supporting add, remove, quantity update, and clear"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Checkout form"
            }), " with field-level validation and form-wide submission"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Theme toggle"
            }), " using Context"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Routing"
            }), " with React Router: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/products"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/cart"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/checkout"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/order-confirmation"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom hook"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useLocalStorage"
            }), " for persisting the cart"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Error boundary"
            }), " wrapping the product detail page"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memoized"
            }), " product list to prevent unnecessary re-renders"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No external state management library → only React built-ins"
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