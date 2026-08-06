"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[73731],{

/***/ 59266
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_04_react_and_inertia_translation_md_416_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-15-the-art-of-reusable-components-04-react-and-inertia-translation-md-416.json
const site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_04_react_and_inertia_translation_md_416_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/React_And_Inertia_Translation","title":"⚛️ React & Inertia Translation","description":"🌉 The Paradigm Shift to JavaScript","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components","slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation","title":"⚛️ React & Inertia Translation","sidebar_label":"⚛️ React & Inertia Translation","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"🔄 The Universal Form Engine","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine"},"next":{"title":"🏗️ System Architecture & Features (Single-User Jira Clone)","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation',
	title: '⚛️ React & Inertia Translation',
	sidebar_label: '⚛️ React & Inertia Translation',
	sidebar_position: 4
};
const contentTitle = '⚛️ React & Inertia Translation';

const assets = {

};



const toc = [{
  "value": "🌉 The Paradigm Shift to JavaScript",
  "id": "-the-paradigm-shift-to-javascript",
  "level": 3
}, {
  "value": "1. The React Input Component",
  "id": "1-the-react-input-component",
  "level": 3
}, {
  "value": "2. Form Usage in Inertia.js",
  "id": "2-form-usage-in-inertiajs",
  "level": 3
}, {
  "value": "🏆 The Real World Impact",
  "id": "-the-real-world-impact",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "️-react--inertia-translation",
        children: "⚛️ React & Inertia Translation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-paradigm-shift-to-javascript",
      children: "🌉 The Paradigm Shift to JavaScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While Laravel Blade Components provide elite encapsulation on the server, the modern SaaS industry is rapidly moving toward Single Page Applications (SPAs) powered by React, Vue, and Inertia.js."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The magnificent truth? ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The exact same Pro Developer component mindset applies 100% to React."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@props"
      }), " and Blade Directives, you use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destructured Arguments"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JSX"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-react-input-component",
      children: "1. The React Input Component"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the exact equivalent of the Laravel Blade Input Component, translated into a modern React functional component (often used alongside Inertia.js to handle Laravel's validation errors natively)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// resources/js/Components/Form/Input.jsx\n\nimport React from 'react';\n\nexport default function Input({ \n    label, \n    name, \n    type = 'text', \n    value, \n    onChange, \n    error, \n    required = false, \n    ...props // Attribute forwarding!\n}) {\n    return (\n        <div className=\"mb-4\">\n            {label && (\n                <label htmlFor={name} className=\"block text-sm font-medium text-gray-700\">\n                    {label}\n                    {required && <span className=\"text-red-500 ml-1\">*</span>}\n                </label>\n            )}\n\n            <input\n                id={name}\n                type={type}\n                name={name}\n                value={value}\n                onChange={onChange}\n                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm \n                    ${error \n                        ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' \n                        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'\n                    }`}\n                {...props} // Spreading extra attributes like placeholder, disabled, etc.\n            />\n\n            {error && (\n                <p className=\"mt-2 text-sm text-red-600\">{error}</p>\n            )}\n        </div>\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Differences vs Blade:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["State Management (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onChange"
          }), "):"]
        }), " In Blade, the server generates the raw HTML string once. In React, the input is \"Controlling\" the UI. You must pass an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onChange"
        }), " handler so the parent form knows when the user types a character."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Explicit Errors (", (0,jsx_runtime.jsx)(_components.code, {
            children: "error"
          }), " prop):"]
        }), " Blade can magically pull errors out of the global Session (", (0,jsx_runtime.jsx)(_components.code, {
          children: "$errors->has()"
        }), "). React is isolated. You must explicitly pass the error text downward from the Inertia page props."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Forwarding Props (", (0,jsx_runtime.jsx)(_components.code, {
            children: "...props"
          }), "):"]
        }), " This is the React equivalent of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$attributes->merge()"
        }), ". It takes any extra HTML attribute (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "placeholder=\"Enter email\""
        }), ") and spreads it directly onto the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<input>"
        }), " element."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-form-usage-in-inertiajs",
      children: "2. Form Usage in Inertia.js"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using our newly created React component inside a modern Laravel/Inertia page is identical to the universal Create/Edit pattern we used in Blade, but leveraging Inertia's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useForm"
      }), " hook for state management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// resources/js/Pages/Users/Form.jsx\n\nimport React from 'react';\nimport { useForm } from '@inertiajs/react';\nimport Input from '@/Components/Form/Input';\nimport Button from '@/Components/Form/Button';\n\nexport default function UserForm({ user = null }) {\n    // Determine mode based on if the controller passed a 'user' prop\n    const isEditMode = !!user;\n\n    // Inertia's useForm hook handles data, errors, and loading states!\n    const { data, setData, post, put, processing, errors } = useForm({\n        name: user?.name || '',\n        email: user?.email || '',\n    });\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        \n        if (isEditMode) {\n            put(route('users.update', user.id));\n        } else {\n            post(route('users.store'));\n        }\n    };\n\n    return (\n        <div className=\"p-6 bg-white rounded shadow max-w-xl mx-auto mt-10\">\n            <h2 className=\"text-xl font-bold mb-6\">\n                {isEditMode ? `Edit User: ${user.name}` : 'Create New User'}\n            </h2>\n\n            <form onSubmit={handleSubmit}>\n                <Input \n                    label=\"Full Name\"\n                    name=\"name\"\n                    value={data.name}\n                    onChange={(e) => setData('name', e.target.value)}\n                    error={errors.name}\n                    required\n                />\n\n                <Input \n                    label=\"Email Address\"\n                    name=\"email\"\n                    type=\"email\"\n                    value={data.email}\n                    onChange={(e) => setData('email', e.target.value)}\n                    error={errors.email}\n                    required\n                />\n\n                <div className=\"mt-6 flex justify-end\">\n                    <Button type=\"submit\" disabled={processing}>\n                        {processing ? 'Saving...' : (isEditMode ? 'Save Changes' : 'Create User')}\n                    </Button>\n                </div>\n            </form>\n        </div>\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-real-world-impact",
      children: "🏆 The Real World Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice how perfectly clean the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserForm"
      }), " file is."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There are no raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<label>"
        }), " tags."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There are no conditional red borders cluttering the form logic."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["We use the exact same file to Create a new user or Update an existing one, just by checking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isEditMode"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the ultimate intersection of modern JavaScript (React) and the Pro Developer Architecture!"
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