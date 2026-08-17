"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52743],{

/***/ 48746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_06_react_basics_md_ce9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-06-react-basics-md-ce9.json
const site_docs_courses_web_development_06_react_basics_md_ce9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/06-react-basics","title":"Chapter 6 → React Basics","description":"Previous 07-react-advanced","source":"@site/docs/courses/web-development/06-react-basics.md","sourceDirName":"courses/web-development","slug":"/web-development/06-react-basics","permalink":"/ai-engineering-journey/web-development/06-react-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-react-basics","slug":"/web-development/06-react-basics","title":"Chapter 6 → React Basics","sidebar_label":"Chapter 6 → React Basics","sidebar_position":6},"sidebar":"course-web-development","previous":{"title":"Chapter 5 — ES6+ JavaScript","permalink":"/ai-engineering-journey/web-development/05-es6-plus"},"next":{"title":"Chapter 7 → React Advanced","permalink":"/ai-engineering-journey/web-development/07-react-advanced"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/06-react-basics.md


const frontMatter = {
	id: '06-react-basics',
	slug: '/web-development/06-react-basics',
	title: 'Chapter 6 → React Basics',
	sidebar_label: 'Chapter 6 → React Basics',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6 → React Basics';

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
  "value": "6.1 JSX",
  "id": "61-jsx",
  "level": 3
}, {
  "value": "6.2 Components",
  "id": "62-components",
  "level": 3
}, {
  "value": "6.3 Props",
  "id": "63-props",
  "level": 3
}, {
  "value": "6.4 State (useState)",
  "id": "64-state-usestate",
  "level": 3
}, {
  "value": "6.5 Effects (useEffect)",
  "id": "65-effects-useeffect",
  "level": 3
}, {
  "value": "6.6 Conditional Rendering",
  "id": "66-conditional-rendering",
  "level": 3
}, {
  "value": "6.7 Lists and Keys",
  "id": "67-lists-and-keys",
  "level": 3
}, {
  "value": "6.8 Forms",
  "id": "68-forms",
  "level": 3
}, {
  "value": "6.9 Lifting State Up",
  "id": "69-lifting-state-up",
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
  "value": "TypeScript: React Component Generator &amp; Hook Tester",
  "id": "typescript-react-component-generator--hook-tester",
  "level": 3
}, {
  "value": "TypeScript Implementation: Virtual DOM Reconciler, Component Tree, Hooks Dependency Checker",
  "id": "typescript-implementation-virtual-dom-reconciler-component-tree-hooks-dependency-checker",
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
        id: "chapter-6--react-basics",
        children: "Chapter 6 → React Basics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/05-es6-plus",
          children: "05-es6-plus"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/07-react-advanced",
          children: "07-react-advanced"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " JSX is syntactic sugar for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "React.createElement"
        }), " with rules like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "className"
        }), " and camelCase styles."]
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
        }), " Function components are the standard way to define reusable UI pieces in modern React."]
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
            children: "JSX"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTML-like syntax that compiles to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "React.createElement"
            }), " calls"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "className"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), ", camelCase for style properties"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function components are the modern standard for defining reusable UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep components small and focused on a single responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Props"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only inputs passed from parent to child components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use default parameter values for optional props"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State (useState)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable data that triggers re-renders when changed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never mutate state directly — always use the setter function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effects (useEffect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize components with external systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include proper cleanup functions and correct dependency arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Rendering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ternaries, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", and conditional variables to render different UI"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid ternary nesting — extract into variables for complex conditions"
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
        }), " Props are immutable inputs from parent to child — never modify them directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[JSX Syntax & Rules]\n    B[Function Components]\n    A --> B\n    C[Props & Children]\n    B --> C\n    D[useState Hook]\n    C --> D\n    E[useEffect Hook]\n    D --> E\n    F[Conditional Rendering]\n    E --> F\n    G[Lists & Keys]\n    F --> G\n    H[Controlled Forms]\n    G --> H\n    I[Lifting State Up]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and render React components using both function and class syntax."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass data through components using props with proper type expectations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage component state using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " hook."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage side effects using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " hook with proper dependency arrays."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditionally render content using ternaries, logical AND, and conditional variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Render lists with keys for efficient reconciliation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build controlled forms with validation and submission handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lift shared state to a common ancestor component."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " returns a state value and a setter; always use the functional update form for derived state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-jsx",
      children: "6.1 JSX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/06-react-basics.png",
        alt: "React Component Lifecycle Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSX is a syntax extension for JavaScript that resembles HTML. It compiles to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React.createElement"
      }), " calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const element = <h1>Hello, World!</h1>;\n// Compiles to: React.createElement('h1', null, 'Hello, World!')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JSX rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Single root element (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Fragment>"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>...</>"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Close all tags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<br />"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<img />"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "className"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "htmlFor"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["JavaScript expressions in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline styles use camelCase keys with string or number values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const name = 'Alice';\nconst styles = { color: 'blue', fontSize: 16 };\n\nconst greeting = (\n  <div className=\"greeting\" style={styles}>\n    <h1>Hello, {name}!</h1>\n    <p>{2 + 2} years of experience</p>\n    <img src=\"/avatar.png\" alt=\"Avatar\" />\n  </div>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-components",
      children: "6.2 Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function components"
      }), " (modern, recommended):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function Welcome({ name, age }) {\n  return (\n    <div>\n      <h1>Welcome, {name}!</h1>\n      {age >= 18 && <p>You are of legal age.</p>}\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Class components"
      }), " (legacy → maintained for historical context):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "class Welcome extends React.Component {\n  render() {\n    const { name, age } = this.props;\n    return (\n      <div>\n        <h1>Welcome, {name}!</h1>\n        {age >= 18 && <p>You are of legal age.</p>}\n      </div>\n    );\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-props",
      children: "6.3 Props"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Props (properties) are read-only inputs passed from parent to child."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// Parent\nfunction App() {\n  return <UserProfile name=\"Alice\" email=\"alice@example.com\" roles={['admin', 'editor']} />;\n}\n\n// Child\nfunction UserProfile({ name, email, roles }) {\n  return (\n    <div className=\"profile\">\n      <h2>{name}</h2>\n      <p>{email}</p>\n      <ul>\n        {roles.map((role) => (\n          <li key={role}>{role}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\n// Default props\nfunction Button({ variant = 'primary', children, ...rest }) {\n  return (\n    <button className={`btn btn--${variant}`} {...rest}>\n      {children}\n    </button>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-state-usestate",
      children: "6.4 State (useState)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State represents mutable data that, when changed, triggers a re-render."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount((prev) => prev + 1); // Functional update → safe in concurrent mode\n  };\n\n  const reset = () => setCount(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+1</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not mutate state directly → always use the setter function."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State updates are asynchronous → reading state immediately after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setState"
        }), " yields the old value."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For objects and arrays, create new references:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function UserForm() {\n  const [user, setUser] = useState({ name: '', email: '', roles: [] });\n\n  const updateName = (name) => {\n    setUser((prev) => ({ ...prev, name }));\n  };\n\n  const addRole = (role) => {\n    setUser((prev) => ({ ...prev, roles: [...prev.roles, role] }));\n  };\n\n  return (\n    <form>\n      <input value={user.name} onChange={(e) => updateName(e.target.value)} />\n    </form>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-effects-useeffect",
      children: "6.5 Effects (useEffect)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "useEffect"
      }), " synchronizes a component with external systems (API calls, subscriptions, DOM manipulation, timers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let cancelled = false;\n\n    async function fetchUsers() {\n      try {\n        setLoading(true);\n        const response = await fetch('/api/users');\n        if (!response.ok) throw new Error(`HTTP ${response.status}`);\n        const data = await response.json();\n        if (!cancelled) {\n          setUsers(data);\n          setError(null);\n        }\n      } catch (err) {\n        if (!cancelled) setError(err.message);\n      } finally {\n        if (!cancelled) setLoading(false);\n      }\n    }\n\n    fetchUsers();\n\n    return () => {\n      cancelled = true; // Cleanup → prevents state updates on unmounted component\n    };\n  }, []); // Empty dependency array = run once on mount\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p className=\"error\">{error}</p>;\n\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency array behavior:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Deps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When effect runs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On mount only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data fetching, subscriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[a, b]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["On mount + when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React to prop/state changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "omitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On mount + every render"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely useful, usually a mistake"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-conditional-rendering",
      children: "6.6 Conditional Rendering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function Dashboard({ user }) {\n  // If/else\n  if (!user) return <LoginPrompt />;\n\n  // Ternary\n  return (\n    <div>\n      <h1>{user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h1>\n\n      {/* Logical AND */}\n      {user.isVerified && <Badge type=\"verified\" />}\n\n      {/* Conditional variable */}\n      {(() => {\n        switch (user.plan) {\n          case 'premium':\n            return <PremiumFeatures />;\n          case 'basic':\n            return <BasicFeatures />;\n          default:\n            return <FreeFeatures />;\n        }\n      })()}\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-lists-and-keys",
      children: "6.7 Lists and Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Render dynamic collections using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), ". Every item needs a stable, unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key"
      }), " for React's reconciliation algorithm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function TodoList({ items }) {\n  return (\n    <ul>\n      {items.map((todo) => (\n        <li key={todo.id}>\n          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>\n            {todo.text}\n          </span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use stable IDs from data (", (0,jsx_runtime.jsx)(_components.code, {
          children: "item.id"
        }), "), never array index unless the list is static and will not be reordered."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys must be unique among siblings, not globally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys are not passed as props → use a separate prop if the child needs the original ID."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-forms",
      children: "6.8 Forms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Controlled components: form state lives in React state, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<input>"
      }), " reflects that state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { useState } from 'react';\n\nfunction RegistrationForm() {\n  const [form, setForm] = useState({\n    username: '',\n    email: '',\n    password: '',\n  });\n  const [errors, setErrors] = useState({});\n  const [submitted, setSubmitted] = useState(false);\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setForm((prev) => ({ ...prev, [name]: value }));\n    // Clear error for this field on change\n    setErrors((prev) => ({ ...prev, [name]: '' }));\n  };\n\n  const validate = () => {\n    const newErrors = {};\n    if (!form.username.trim()) newErrors.username = 'Username is required';\n    if (!form.email.includes('@')) newErrors.email = 'Valid email is required';\n    if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';\n    return newErrors;\n  };\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    const validationErrors = validate();\n    setErrors(validationErrors);\n\n    if (Object.keys(validationErrors).length > 0) return;\n\n    try {\n      const response = await fetch('/api/register', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(form),\n      });\n      if (response.ok) {\n        setSubmitted(true);\n      }\n    } catch (err) {\n      setErrors({ form: err.message });\n    }\n  };\n\n  if (submitted) return <p>Thank you for registering!</p>;\n\n  return (\n    <form onSubmit={handleSubmit} noValidate>\n      <div>\n        <label htmlFor=\"username\">Username</label>\n        <input\n          id=\"username\"\n          name=\"username\"\n          value={form.username}\n          onChange={handleChange}\n          aria-invalid={!!errors.username}\n          aria-describedby={errors.username ? 'username-error' : undefined}\n        />\n        {errors.username && <p id=\"username-error\" role=\"alert\">{errors.username}</p>}\n      </div>\n\n      <div>\n        <label htmlFor=\"email\">Email</label>\n        <input id=\"email\" name=\"email\" type=\"email\" value={form.email} onChange={handleChange} />\n        {errors.email && <p role=\"alert\">{errors.email}</p>}\n      </div>\n\n      <div>\n        <label htmlFor=\"password\">Password</label>\n        <input\n          id=\"password\"\n          name=\"password\"\n          type=\"password\"\n          value={form.password}\n          onChange={handleChange}\n        />\n        {errors.password && <p role=\"alert\">{errors.password}</p>}\n      </div>\n\n      {errors.form && <p role=\"alert\" className=\"error\">{errors.form}</p>}\n\n      <button type=\"submit\" disabled={submitted}>Register</button>\n    </form>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "69-lifting-state-up",
      children: "6.9 Lifting State Up"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When multiple components need to share the same state, move the state to their nearest common ancestor."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "function TemperatureConverter() {\n  const [celsius, setCelsius] = useState(0);\n\n  const fahrenheit = (celsius * 9) / 5 + 32;\n\n  return (\n    <div>\n      <CelsiusInput value={celsius} onChange={setCelsius} />\n      <FahrenheitDisplay value={fahrenheit} />\n    </div>\n  );\n}\n\nfunction CelsiusInput({ value, onChange }) {\n  return (\n    <label>\n      Celsius:\n      <input\n        type=\"number\"\n        value={value}\n        onChange={(e) => onChange(Number(e.target.value))}\n      />\n    </label>\n  );\n}\n\nfunction FahrenheitDisplay({ value }) {\n  return <p>Fahrenheit: {value.toFixed(1)}</p>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse the functional update form ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setCount(prev => prev + 1)"
        }), " when the new state depends on the previous state — it's safe in concurrent mode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nNever use array index as a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key"
        }), " prop for dynamic lists that can be reordered, filtered, or have items inserted/removed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nEffects run after every render by default. Always specify the dependency array — omitting it can cause infinite loops or stale closures."
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
            children: "Function vs Class Component"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Simpler, hooks-based, no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["More verbose, lifecycle methods, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " binding"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useState"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useReducer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple independent values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex state logic with sub-values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled vs Uncontrolled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React manages the input value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOM manages its own value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Props vs State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, passed from parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable, managed by component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useEffect"
            }), " with [] vs [deps]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs once on mount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on mount and when deps change"
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
            children: "JSX Rules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single root, close all tags, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "className"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "htmlFor"
            }), ", camelCase styles"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "useState(init)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useEffect(fn, deps)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't mutate, use setters, create new references for objects/arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List Keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable unique IDs, never array index, unique among siblings only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ternary ", (0,jsx_runtime.jsx)(_components.code, {
              children: "? :"
            }), ", logical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", IIFE, early return"]
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
            children: "Form-heavy Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled components + useState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time validation and dynamic form state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useEffect for data fetching, conditional rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loading/error/data state management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List rendering with keys, lifting cart state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient re-renders and shared cart state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Props drilling for deeply nested data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass data through component hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useEffect with subscriptions and cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent memory leaks on unmount"
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
        children: "Q1. Why must React keys be stable and unique?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To avoid TypeScript errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) For React's reconciliation algorithm to efficiently identify items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To enable server-side rendering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To satisfy the linter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Stable keys help React identify which items changed, were added, or removed during reconciliation."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What happens when the dependency array is omitted from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The effect never runs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The effect runs after every render"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The effect runs only on mount"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The component throws an error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Without a dependency array, the effect runs after every render, which often causes infinite re-render loops."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. How do you share state between two sibling components?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Lift the state up to their common ancestor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Pass props directly between siblings"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Lifting state up means moving the shared state to the nearest common ancestor and passing it down via props."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. What is the correct way to update an object in state?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state.user.name = 'Alice'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setState({user: {name: 'Alice'}})"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setState(prev => ({...prev, user: {...prev.user, name: 'Alice'}}))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object.assign(state.user, {name: 'Alice'})"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "C) Always create a new reference when updating objects in state — spread the previous state and override the specific property."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-react-component-generator--hook-tester",
      children: "TypeScript: React Component Generator & Hook Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ComponentConfig {\n  name: string; props?: Record<string, string>; state?: Record<string, string>;\n  children?: boolean; hooks?: string[];\n}\nclass ComponentGenerator {\n  static generateJSX(config: ComponentConfig): string {\n    const props = config.props ? Object.keys(config.props).map(k => `${k}: ${config.props[k]}`).join(\"; \") : \"\";\n    const state = config.state ? Object.keys(config.state).map(k => {\n      return `const [${k}, set${k.charAt(0).toUpperCase() + k.slice(1)}] = useState<${config.state![k]}>(initial${k.charAt(0).toUpperCase() + k.slice(1)});`;\n    }).join(\"\\n  \") : \"\";\n    const hooks = config.hooks?.map(h => `use${h}();`).join(\"\\n  \") ?? \"\";\n    return `import { useState, useEffect } from \"react\";\n\ninterface ${config.name}Props { ${props} }\n\nexport const ${config.name}: React.FC<${config.name}Props> = ({ ${Object.keys(config.props ?? {}).join(\", \")} }) => {\n  ${state}\n  ${hooks}\n  return <div>{/* ${config.name} content */}</div>;\n};`;\n  }\n\n  static formField(name: string, type: string, label: string): string {\n    return `const [${name}, set${name.charAt(0).toUpperCase() + name.slice(1)}] = useState(\"\");`;\n  }\n}\n\nclass HookSimulator {\n  static useState<T>(initial: T): [T, (val: T) => void] {\n    let state = initial;\n    const setState = (val: T) => { state = val; };\n    return [state, setState];\n  }\n  static useReducer<S, A>(reducer: (state: S, action: A) => S, initial: S): [S, (action: A) => void] {\n    let state = initial;\n    return [state, (action: A) => { state = reducer(state, action); }];\n  }\n}\n\nconsole.log(ComponentGenerator.generateJSX({ name: \"UserCard\", props: { name: \"string\", age: \"number\" }, state: { editing: \"boolean\" } }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-virtual-dom-reconciler-component-tree-hooks-dependency-checker",
      children: "TypeScript Implementation: Virtual DOM Reconciler, Component Tree, Hooks Dependency Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FiberNode {\n    tag: string;\n    props: Record<string, any>;\n    children: FiberNode[];\n    state: Record<string, any>;\n    effects: { deps: any[]; cleanup?: () => void }[];\n    hooks: { type: string; value: any; deps?: any[] }[];\n}\n\nclass VirtualDOMReconciler {\n    static reconcile(\n        parent: { children: FiberNode[] },\n        oldNode: FiberNode | null,\n        newNode: FiberNode | null,\n        index: number = 0\n    ): { actions: string[]; updated: boolean } {\n        const actions: string[] = [];\n        if (!oldNode && newNode) {\n            actions.push(`CREATE ${newNode.tag}[${index}]`);\n            return { actions, updated: true };\n        }\n        if (oldNode && !newNode) {\n            actions.push(`REMOVE ${oldNode.tag}[${index}]`);\n            return { actions, updated: true };\n        }\n        if (!oldNode || !newNode) return { actions: [], updated: false };\n\n        if (oldNode.tag !== newNode.tag) {\n            actions.push(`REPLACE ${oldNode.tag} ? ${newNode.tag}[${index}]`);\n            return { actions, updated: true };\n        }\n\n        const maxLen = Math.max(oldNode.children.length, newNode.children.length);\n        for (let i = 0; i < maxLen; i++) {\n            const childResult = this.reconcile(\n                oldNode, oldNode.children[i] || null, newNode.children[i] || null, i\n            );\n            actions.push(...childResult.actions);\n        }\n\n        return { actions: actions.length > 0 ? actions : [\"NO-OP\"], updated: actions.length > 0 };\n    }\n}\n\nclass ComponentTreeBuilder {\n    static build(definition: { name: string; props: Record<string, string>; children?: any[] }, depth: number = 0): FiberNode {\n        const node: FiberNode = {\n            tag: definition.name,\n            props: definition.props,\n            children: (definition.children || []).map((c: any) => this.build(c, depth + 1)),\n            state: {},\n            effects: [],\n            hooks: []\n        };\n        return node;\n    }\n\n    static flatten(root: FiberNode): { name: string; depth: number; propCount: number; childCount: number }[] {\n        const nodes: { name: string; depth: number; propCount: number; childCount: number }[] = [];\n        const walk = (node: FiberNode, depth: number) => {\n            nodes.push({ name: node.tag, depth, propCount: Object.keys(node.props).length, childCount: node.children.length });\n            for (const child of node.children) walk(child, depth + 1);\n        };\n        walk(root, 0);\n        return nodes;\n    }\n}\n\nclass HooksDependencyChecker {\n    static validate(effects: { deps: any[]; name?: string }[]): { valid: boolean; warnings: string[] } {\n        const warnings: string[] = [];\n        for (let i = 0; i < effects.length; i++) {\n            const effect = effects[i];\n            if (effect.deps.length === 0) {\n                warnings.push(`Effect #${i}: Empty deps = run once (mount only)`);\n            }\n            const hasUndefined = effect.deps.some(d => d === undefined);\n            if (hasUndefined) {\n                warnings.push(`Effect #${i}: Contains undefined dependency — may cause infinite loop`);\n            }\n            const hasObjects = effect.deps.some(d => typeof d === \"object\" && d !== null);\n            if (hasObjects) {\n                warnings.push(`Effect #${i}: Object/reference dependency — referentially unstable, wrap in useMemo`);\n            }\n        }\n        return { valid: warnings.length === 0, warnings };\n    }\n\n    static compareDeps(oldDeps: any[], newDeps: any[]): { changed: boolean; changedIndices: number[] } {\n        const changedIndices: number[] = [];\n        for (let i = 0; i < Math.max(oldDeps.length, newDeps.length); i++) {\n            if (!Object.is(oldDeps[i], newDeps[i])) changedIndices.push(i);\n        }\n        return { changed: changedIndices.length > 0, changedIndices };\n    }\n}\n\n// Demo\nconst appTree = ComponentTreeBuilder.build({\n    name: \"App\",\n    props: { theme: \"dark\" },\n    children: [\n        { name: \"Header\", props: { title: \"My App\" }, children: [\n            { name: \"Nav\", props: { items: \"3\" } }\n        ]},\n        { name: \"Main\", props: { role: \"content\" }, children: [\n            { name: \"Sidebar\", props: { collapsed: \"false\" } },\n            { name: \"Content\", props: { loading: \"true\" }, children: [\n                { name: \"Card\", props: { id: \"1\" } },\n                { name: \"Card\", props: { id: \"2\" } }\n            ]}\n        ]},\n        { name: \"Footer\", props: { year: \"2026\" } }\n    ]\n});\n\nconsole.log(\"Component tree:\", ComponentTreeBuilder.flatten(appTree).map(n =>\n    `${\"  \".repeat(n.depth)}${n.name} (props:${n.propCount}, children:${n.childCount})`\n).join(\"\\n\"));\n\nconst oldVNode: FiberNode = { tag: \"div\", props: {}, children: [\n    { tag: \"h1\", props: {}, children: [], state: {}, effects: [], hooks: [] },\n    { tag: \"p\", props: {}, children: [], state: {}, effects: [], hooks: [] }\n], state: {}, effects: [], hooks: [] };\nconst newVNode: FiberNode = { tag: \"div\", props: {}, children: [\n    { tag: \"h1\", props: {}, children: [], state: {}, effects: [], hooks: [] },\n    { tag: \"span\", props: {}, children: [], state: {}, effects: [], hooks: [] }\n], state: {}, effects: [], hooks: [] };\n\nconsole.log(\"Reconciliation:\", VirtualDOMReconciler.reconcile({ children: [oldVNode] }, oldVNode, newVNode));\nconsole.log(\"Hook check:\", JSON.stringify(HooksDependencyChecker.validate([\n    { deps: [1, 2, 3] }, { deps: [] }, { deps: [undefined] }, { deps: [{}] }\n])));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// react basics\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'react basics', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " handles side effects with a cleanup function and dependency array for precise execution control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["JSX compiles to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "React.createElement"
        }), " and enables HTML-like syntax in JavaScript."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function components are the standard approach; props are read-only inputs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " manages mutable state; state updates must use the setter with new references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " handles side effects with proper cleanup and dependency tracking."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional rendering uses ternaries, logical AND, and conditional variables."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["List rendering requires stable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key"
        }), " props for efficient reconciliation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controlled forms keep form state in React, enabling validation and submission handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifting state up shares state across sibling components via a common ancestor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Lifting state up shares data between sibling components via a common ancestor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must React keys be stable, unique, and not rely on array indices?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the cleanup function returned by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between controlled and uncontrolled components."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you omit the dependency array in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Stopwatch"
        }), " component with start, stop, and reset buttons using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setInterval"
        }), ". Clean up the interval on unmount."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProductList"
        }), " component that fetches from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/api/products"
        }), ", displays loading/error/data states, and renders each product as a card with image, name, and price."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SearchFilter"
        }), " component that takes a list of items and renders a search input that filters the list in real time as the user types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Components return JSX trees"
        }), " — every component is a function returning a single root element. Use fragments (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>...</>"
        }), ") to avoid extra DOM nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State drives the UI"
        }), " — never mutate state directly. Use the setter function and treat state as immutable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep components small"
        }), " — if a component does more than one thing, split it. Aim for single-responsibility components under 50 lines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lift state up, drill props down"
        }), " — shared state lives in the closest common ancestor. Pass data via props, not global state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effects have cleanup"
        }), " — every ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " that subscribes, timers, or event listeners must return a cleanup function to prevent memory leaks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a multi-step checkout form with the following steps: (1) Shipping Address, (2) Payment Method, (3) Order Review, (4) Confirmation. Use a single parent component (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Checkout"
        }), ") that holds all form state as a single object and passes down only the relevant slice to each step component. Implement:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Navigation between steps with \"Back\" and \"Next\" buttons"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Per-step validation before allowing progression"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "An order summary sidebar that updates as data is entered"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A progress indicator showing steps completed vs remaining"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Form data persistence across step transitions (not cleared on back)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A final submission handler that logs the complete data to the console"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Disabled \"Next\" when the current step's data is invalid"
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