"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[45583],{

/***/ 53297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_index_md_98f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-index-md-98f.json
const site_docs_courses_oop_cpp_index_md_98f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/index","title":"Object-Oriented Programming with C++","description":"Course Overview","source":"@site/docs/courses/oop-cpp/index.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp","permalink":"/ai-engineering-journey/oop-cpp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"index","slug":"/oop-cpp","title":"Object-Oriented Programming with C++","sidebar_label":"Object-Oriented Programming with C++","sidebar_position":17},"sidebar":"coursesSidebar","previous":{"title":"Master Glossary","permalink":"/ai-engineering-journey/learning-how-to-learn-practical/ch-14-glossary"},"next":{"title":"Chapter 1: Introduction to Object-Oriented Programming","permalink":"/ai-engineering-journey/oop-cpp/01-introduction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/index.md


const frontMatter = {
	id: 'index',
	slug: '/oop-cpp',
	title: 'Object-Oriented Programming with C++',
	sidebar_label: 'Object-Oriented Programming with C++',
	sidebar_position: 17
};
const contentTitle = 'Object-Oriented Programming with C++';

const assets = {

};



const toc = [{
  "value": "Course Overview",
  "id": "course-overview",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Learning Outcomes",
  "id": "learning-outcomes",
  "level": 2
}, {
  "value": "Chapter List",
  "id": "chapter-list",
  "level": 2
}, {
  "value": "How to Use This Textbook",
  "id": "how-to-use-this-textbook",
  "level": 2
}, {
  "value": "Recommended Reading",
  "id": "recommended-reading",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "object-oriented-programming-with-c",
        children: "Object-Oriented Programming with C++"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This textbook presents a comprehensive treatment of object-oriented programming (OOP) using the C++ programming language. The material is designed for undergraduate computer science students who possess a working knowledge of procedural programming in C or a similar language. The course progresses from fundamental language features through advanced idioms, equipping students with both theoretical understanding and practical implementation skills."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ occupies a unique position in the programming landscape: it offers zero-cost abstractions, direct memory control, and full compatibility with C, while simultaneously supporting modern object-oriented, generic, and functional programming paradigms. The language has undergone significant evolution through the C++11, C++14, and C++17 standards, each introducing features that fundamentally reshape how idiomatic C++ is written."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proficiency in procedural programming (variables, control flow, functions, arrays, pointers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with basic data structures (linked lists, stacks, queues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of memory management concepts (stack vs heap allocation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-outcomes",
      children: "Learning Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upon completing this course, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement class hierarchies using encapsulation, inheritance, and polymorphism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage resource lifetimes through constructors, destructors, and the Rule of Five"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write type-safe generic code using templates and the Standard Template Library (STL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exploit move semantics and perfect forwarding for high-performance code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid common pitfalls including memory leaks, dangling references, and undefined behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply concurrency primitives for safe multi-threaded programs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize and implement fundamental design patterns in idiomatic C++"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-list",
      children: "Chapter List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Introduction to C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ vs C, I/O streams, namespaces, default parameters, function overloading, references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes and Objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class/struct, access specifiers, member functions, this pointer, const members, static members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructors and Destructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default, parameterized, copy constructors, initializer lists, delegating constructors, destructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base/derived classes, access control, inheritance types, diamond problem, virtual inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions, vtable/vptr, pure virtual, abstract classes, virtual destructor, RTTI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator Overloading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overloading rules, binary/unary operators, friend functions, stream operators, conversions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function templates, class templates, specialization, variadic templates, SFINAE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "try/catch/throw, stack unwinding, RAII, noexcept, standard and custom exceptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STL Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, list, deque, map, set, unordered_map, adaptors: stack, queue, priority_queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STL Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort, find, binary_search, accumulate, for_each, transform, copy, lambda integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fstream, ifstream, ofstream, text vs binary, positioning, serialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unique_ptr, shared_ptr, weak_ptr, make_ functions, custom deleters, circular references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lvalues/rvalues, move constructor, move assignment, std::move, std::forward, perfect forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax, capture clauses, generic lambdas, IIFE, STL integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::thread, mutex, lock_guard, condition_variable, async, future, promise, atomics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Factory, Builder, Adapter, Decorator, Facade, Observer, Strategy, Iterator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-textbook",
      children: "How to Use This Textbook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each chapter follows a consistent structure: learning objectives define the goals, theory sections present concepts with rationale and trade-offs, code examples illustrate correct usage, a summary consolidates key points, and graded exercises test comprehension at three levels of difficulty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All code examples are written to the C++17 standard unless otherwise noted. Compilation instructions assume a modern compiler: GCC 8+, Clang 7+, or MSVC 2019+. Example compilation command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "g++ -std=c++17 -Wall -Wextra -o program source.cpp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-reading",
      children: "Recommended Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B. Stroustrup, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "The C++ Programming Language"
        }), ", 4th Edition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["S. Meyers, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Effective Modern C++"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["N. Josuttis, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "The C++ Standard Library"
        }), ", 2nd Edition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["H. Sutter, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Exceptional C++"
        })]
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