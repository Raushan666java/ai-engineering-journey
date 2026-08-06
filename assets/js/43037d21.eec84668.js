"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[58497],{

/***/ 25673
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_02_laravel_blade_components_md_430_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-15-the-art-of-reusable-components-02-laravel-blade-components-md-430.json
const site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_02_laravel_blade_components_md_430_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/Laravel_Blade_Components","title":"🔪 Laravel Blade Components","description":"📂 The Pro Folder Structure","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components","slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components","title":"🔪 Laravel Blade Components","sidebar_label":"🔪 Laravel Blade Components","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"🧩 Thinking In Components","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components"},"next":{"title":"🔄 The Universal Form Engine","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/03_The_Universal_Form_Engine"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components',
	title: '🔪 Laravel Blade Components',
	sidebar_label: '🔪 Laravel Blade Components',
	sidebar_position: 2
};
const contentTitle = '🔪 Laravel Blade Components';

const assets = {

};



const toc = [{
  "value": "📂 The Pro Folder Structure",
  "id": "-the-pro-folder-structure",
  "level": 3
}, {
  "value": "🧱 Building The Core Form Engine",
  "id": "-building-the-core-form-engine",
  "level": 3
}, {
  "value": "1. The Input Component (<code>components/form/input.blade.php</code>)",
  "id": "1-the-input-component-componentsforminputbladephp",
  "level": 4
}, {
  "value": "2. The Select Dropdown (<code>components/form/select.blade.php</code>)",
  "id": "2-the-select-dropdown-componentsformselectbladephp",
  "level": 4
}, {
  "value": "3. The Reusable Button (<code>components/form/button.blade.php</code>)",
  "id": "3-the-reusable-button-componentsformbuttonbladephp",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-laravel-blade-components",
        children: "🔪 Laravel Blade Components"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-pro-folder-structure",
      children: "📂 The Pro Folder Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To write elite-level, enterprise Laravel applications, you must organize your component architecture cleanly. Do not dump every component into the root ", (0,jsx_runtime.jsx)(_components.code, {
        children: "components"
      }), " folder. Group them by their domain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Golden Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "resources/views/\n├── layouts/\n│   └── app.blade.php\n│\n├── components/\n│   ├── form/                   <-- Centralize your form engine here\n│   │   ├── input.blade.php\n│   │   ├── textarea.blade.php\n│   │   ├── select.blade.php\n│   │   ├── checkbox.blade.php\n│   │   └── button.blade.php\n│   │\n│   ├── ui/                     <-- General Visual Elements\n│   │   ├── alert.blade.php\n│   │   ├── card.blade.php\n│   │   └── modal.blade.php\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To automatically generate these files, use the Artisan command:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:component Form/Input --view"
      }), " (The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--view"
      }), " flag creates anonymous components, avoiding bulky PHP classes when unnecessary)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-building-the-core-form-engine",
      children: "🧱 Building The Core Form Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the exact code a Senior SaaS Engineer uses to build their forms."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1-the-input-component-componentsforminputbladephp",
      children: ["1. The Input Component (", (0,jsx_runtime.jsx)(_components.code, {
        children: "components/form/input.blade.php"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This handles everything: the label, the asterisk for required fields, the preservation of data if the validation fails (", (0,jsx_runtime.jsx)(_components.code, {
        children: "old()"
      }), "), the dynamic CSS classes, and the error display."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@props([\n    'label' => false,\n    'name',\n    'type' => 'text',\n    'required' => false,\n    'value' => null\n])\n\n<div class=\"mb-4\">\n    @if($label)\n        <label for=\"{{ $name }}\" class=\"block text-sm font-medium text-gray-700\">\n            {{ $label }}\n            @if($required) <span class=\"text-red-500\">*</span> @endif\n        </label>\n    @endif\n\n    <input\n        type=\"{{ $type }}\"\n        name=\"{{ $name }}\"\n        id=\"{{ $name }}\"\n        value=\"{{ old($name, $value) }}\"\n        {{ $attributes->merge([\n            'class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ' . ($errors->has($name) ? 'border-red-500 ring-red-500' : '')\n        ]) }}\n    >\n\n    @error($name)\n        <p class=\"mt-2 text-sm text-red-600\">{{ $message }}</p>\n    @enderror\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-form.input label=\"Email Address\" name=\"email\" type=\"email\" required placeholder=\"john@doe.com\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Note the incredible power of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$attributes->merge()"
        }), ". Even though we didn't define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "placeholder"
        }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@props"
        }), ", passing it to the component automatically merges it onto the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<input>"
        }), " tag!"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2-the-select-dropdown-componentsformselectbladephp",
      children: ["2. The Select Dropdown (", (0,jsx_runtime.jsx)(_components.code, {
        children: "components/form/select.blade.php"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managing \"selected\" states in raw HTML dropdowns is a nightmare. This component automates it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@props([\n    'label' => false,\n    'name',\n    'options' => [],\n    'value' => null\n])\n\n<div class=\"mb-4\">\n    @if($label)\n        <label for=\"{{ $name }}\" class=\"block text-sm font-medium text-gray-700\">{{ $label }}</label>\n    @endif\n\n    <select \n        name=\"{{ $name }}\" \n        id=\"{{ $name }}\" \n        {{ $attributes->merge(['class' => 'mt-1 block w-full rounded-md border-gray-300']) }}\n    >\n        <option value=\"\">Select an option...</option>\n        @foreach($options as $key => $text)\n            <option value=\"{{ $key }}\" {{ old($name, $value) == $key ? 'selected' : '' }}>\n                {{ $text }}\n            </option>\n        @endforeach\n    </select>\n\n    @error($name)\n        <p class=\"mt-2 text-sm text-red-600\">{{ $message }}</p>\n    @enderror\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<x-form.select label=\"User Role\" name=\"role\" :options=\"['admin' => 'Administrator', 'user' => 'Standard User']\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "3-the-reusable-button-componentsformbuttonbladephp",
      children: ["3. The Reusable Button (", (0,jsx_runtime.jsx)(_components.code, {
        children: "components/form/button.blade.php"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@props(['type' => 'submit'])\n\n<button type=\"{{ $type }}\" {{ $attributes->merge([\n    'class' => 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'\n]) }}>\n    {{ $slot }}\n</button>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " By utilizing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@props"
      }), ", dynamic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$attributes->merge()"
      }), ", and the magical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$slot"
      }), " variable, you abstract hundreds of lines of visual HTML complexity into single, incredibly powerful API tags. This is how enterprise Laravel is written."]
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