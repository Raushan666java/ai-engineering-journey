"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[97637],{

/***/ 96736
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_03_the_universal_form_engine_md_0b8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-15-the-art-of-reusable-components-03-the-universal-form-engine-md-0b8.json
const site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_03_the_universal_form_engine_md_0b8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/The_Universal_Form_Engine","title":"🔄 The Universal Form Engine","description":"♻️ Infinite Reuse (Create & Edit)","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components","slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine","title":"🔄 The Universal Form Engine","sidebar_label":"🔄 The Universal Form Engine","sidebar_position":3},"sidebar":"course-learning-course","previous":{"title":"🔪 Laravel Blade Components","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components"},"next":{"title":"⚛️ React & Inertia Translation","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine',
	title: '🔄 The Universal Form Engine',
	sidebar_label: '🔄 The Universal Form Engine',
	sidebar_position: 3
};
const contentTitle = '🔄 The Universal Form Engine';

const assets = {

};



const toc = [{
  "value": "♻️ Infinite Reuse (Create &amp; Edit)",
  "id": "️-infinite-reuse-create--edit",
  "level": 3
}, {
  "value": "1. The Controller Architecture",
  "id": "1-the-controller-architecture",
  "level": 3
}, {
  "value": "2. The Dynamic Blade Form (<code>users/form.blade.php</code>)",
  "id": "2-the-dynamic-blade-form-usersformbladephp",
  "level": 3
}, {
  "value": "🕵️‍♂️ How The Fallback Logic Works",
  "id": "️️-how-the-fallback-logic-works",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
        id: "-the-universal-form-engine",
        children: "🔄 The Universal Form Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-infinite-reuse-create--edit",
      children: "♻️ Infinite Reuse (Create & Edit)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the most profound markers of a Junior Developer is having two separate views for managing a database record: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create.blade.php"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edit.blade.php"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have a User model with 15 fields, that means you have written 30 raw input fields. When the business requires a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phone_number"
      }), " field, you must remember to add it to both the Create form and the Edit form. You are begging for human error."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Senior Developer uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Form"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-controller-architecture",
      children: "1. The Controller Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To reuse a form, the Controller must pass a consistent context to the View."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// UserController.php\n\npublic function create() \n{\n    // We pass nothing, or a generic new instance if preferred.\n    return view('users.form');\n}\n\npublic function edit(User $user) \n{\n    // We pass the existing model bound from the route.\n    return view('users.form', compact('user'));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "2-the-dynamic-blade-form-usersformbladephp",
      children: ["2. The Dynamic Blade Form (", (0,jsx_runtime.jsx)(_components.code, {
        children: "users/form.blade.php"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, we build a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form.blade.php"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This file uses PHP's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isset()"
      }), " or Blade's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@isset()"
      }), " directive to dynamically determine its own state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$user"
        }), " exists, it knows it is in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit Mode"
        }), ". It will change the Form Action URL to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update"
        }), " route, spoof the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUT"
        }), " method, and pre-fill the input values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$user"
        }), " does not exist, it acts as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create form"
        }), ", using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "store"
        }), " route and leaving values blank (unless there is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "old()"
        }), " data from a failed validation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-ui.card>\n    <x-slot name=\"header\">\n        <h2 class=\"text-xl font-bold\">\n            {{ isset($user) ? 'Edit User: ' . $user->name : 'Create New User' }}\n        </h2>\n    </x-slot>\n\n    {{-- DYNAMIC ROUTING & METHOD SPOOFING --}}\n    <form method=\"POST\" action=\"{{ isset($user) ? route('users.update', $user->id) : route('users.store') }}\">\n        @csrf\n        @isset($user) \n            @method('PUT') \n        @endisset\n\n        {{-- COMPONENT VALUE BINDING --}}\n        <x-form.input \n            label=\"Full Name\" \n            name=\"name\" \n            :value=\"$user->name ?? ''\" \n            required \n        />\n        \n        <x-form.input \n            label=\"Email Address\" \n            name=\"email\" \n            type=\"email\" \n            :value=\"$user->email ?? ''\" \n            required \n        />\n\n        <x-form.select \n            label=\"Account Status\" \n            name=\"status\" \n            :options=\"['active' => 'Active', 'suspended' => 'Suspended']\"\n            :value=\"$user->status ?? 'active'\" \n        />\n\n        {{-- DYNAMIC BUTTON TEXT --}}\n        <div class=\"mt-6 flex justify-end\">\n            <x-form.button>\n                {{ isset($user) ? 'Save Changes' : 'Create Account' }}\n            </x-form.button>\n        </div>\n    </form>\n</x-ui.card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️️-how-the-fallback-logic-works",
      children: "🕵️‍♂️ How The Fallback Logic Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Look closely at this specific piece of code from the example above:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: ":value=\"$user->name ?? ''\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Creation Mode:"
          }), " If you are visiting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/users/create"
          }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$user"
          }), " variable does not exist. The Null Coalescing Operator (", (0,jsx_runtime.jsx)(_components.code, {
            children: "??"
          }), ") trips, and passes an empty string ", (0,jsx_runtime.jsx)(_components.code, {
            children: "''"
          }), " explicitly to the component. The input box is blank."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Validation Failure:"
            }), " If the user submits the create form but forgets an email, Laravel redirects back. The Blade Input Component (from the previous section) specifically checks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value=\"{{ old($name, $value) }}\""
            }), ". It intelligently ignores the empty string and repopulates the raw name the user just typed!"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit Mode:"
          }), " If you are visiting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/users/1/edit"
          }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$user"
          }), " exists. It passes \"John Doe\" to the component. The input box is filled, ready to be updated."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " The combination of Encapsulated Components and Dynamic State Evaluation allows you to build massive, 50-field CRM software while only actually typing out the forms a single time. Maintainability skyrockets."]
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