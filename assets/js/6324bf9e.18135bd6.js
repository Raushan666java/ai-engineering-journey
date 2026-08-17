"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59838],{

/***/ 16909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_07_type_checking_md_632_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-07-type-checking-md-632.json
const site_docs_courses_compiler_design_07_type_checking_md_632_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/07-type-checking","title":"Chapter 7: Type Checking","description":"? Previous Intermediate Code Generation | Next Runtime Environment","source":"@site/docs/courses/compiler-design/07-type-checking.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/07-type-checking","permalink":"/ai-engineering-journey/compiler-design/07-type-checking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-type-checking","slug":"/compiler-design/07-type-checking","title":"Chapter 7: Type Checking","sidebar_label":"Chapter 7: Type Checking","sidebar_position":7},"sidebar":"course-compiler-design","previous":{"title":"Chapter 6: Intermediate Code Generation","permalink":"/ai-engineering-journey/compiler-design/06-intermediate-code"},"next":{"title":"Chapter 8: Runtime Environment","permalink":"/ai-engineering-journey/compiler-design/08-runtime-env"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/07-type-checking.md


const frontMatter = {
	id: '07-type-checking',
	slug: '/compiler-design/07-type-checking',
	title: 'Chapter 7: Type Checking',
	sidebar_label: 'Chapter 7: Type Checking',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Type Checking';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Type Systems",
  "id": "type-systems",
  "level": 3
}, {
  "value": "Type Expressions",
  "id": "type-expressions",
  "level": 3
}, {
  "value": "Type Equivalence",
  "id": "type-equivalence",
  "level": 3
}, {
  "value": "Synthesized Type Checking",
  "id": "synthesized-type-checking",
  "level": 3
}, {
  "value": "Type Inference",
  "id": "type-inference",
  "level": 3
}, {
  "value": "Complete TypeScript Type Checker",
  "id": "complete-typescript-type-checker",
  "level": 3
}, {
  "value": "Hindley-Milner Type Inference (Full Implementation)",
  "id": "hindley-milner-type-inference-full-implementation",
  "level": 3
}, {
  "value": "Overloading",
  "id": "overloading",
  "level": 3
}, {
  "value": "Polymorphism",
  "id": "polymorphism",
  "level": 3
}, {
  "value": "Subtyping and Variance",
  "id": "subtyping-and-variance",
  "level": 3
}, {
  "value": "Unification",
  "id": "unification",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "chapter-7-type-checking",
        children: "Chapter 7: Type Checking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/06-intermediate-code",
        children: "Chapter 6: Intermediate Code Generation"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/08-runtime-env",
        children: "Chapter 8: Runtime Environment"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: define type systems and type expressions; distinguish structural from name type equivalence; implement synthesized and inferred type checking; resolve overloaded operators and functions; handle polymorphic functions with parametric and subtype polymorphism; apply unification to type inference in the Hindley-Milner style; implement a complete type checker and a Hindley-Milner inference engine in TypeScript; and understand variance rules for subtyping."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal classification of program phrases by kind"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructing types from basic types and constructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name vs structural equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synthesized Type Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up attribute-based type computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equation generation and unification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overloading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple meanings for the same symbol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parametric and subtype polymorphism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solving type equations via substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subtyping and Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covariance and contravariance of type constructors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[AST with Types?] -->|Yes| B[Type Equivalence Check]\n    A -->|No| C[Type Inference]\n    C --> D[Generate Constraints]\n    D --> E[Unification]\n    E --> F[Most General Type]\n    B --> G{Equivalence Type}\n    G -->|Name| H[Same Type Name?]\n    G -->|Structural| I[Same Tree Structure?]\n    H --> J[Type OK / Error]\n    I --> J\n    F --> J\n    style A fill:#e1f5fe\n    style J fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-systems",
      children: "Type Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type system"
      }), " is a tractable syntactic method for proving the absence of certain program behaviors by classifying program phrases according to the kinds of values they compute. A type system consists of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "types"
        }), " (domains of values)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typing rules"
        }), " assigning types to program phrases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "proof system"
        }), " ensuring consistency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The primary purpose of a type system is to detect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type errors"
      }), ": operations applied to arguments of inappropriate types. A type checker is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sound"
      }), " if it accepts only programs that will not encounter type errors at runtime. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), " if it accepts all such programs. For realistic languages, soundness is achievable but completeness is not, due to the undecidability of halting-equivalent program properties."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Type systems are always a trade-off between soundness (catching all real errors) and completeness (not rejecting valid programs) ? and completeness is provably impossible for Turing-complete languages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-expressions",
      children: "Type Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Types are represented as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type expressions"
      }), ", constructed from basic types and type constructors:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primitive domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "array(T, I)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed collection of T elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(S1 ? ... ? S?) ? T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping from argument types to return type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ name1: T1, name2: T2, ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named field structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pointer(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type variables"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "?"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "?"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placeholders in polymorphism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generic types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "List<T>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<K,V>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized type constructors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-equivalence",
      children: "Type Equivalence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two type expressions may be considered equivalent in one of two ways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Name equivalence"
      }), " holds if two types are defined using the same type name. Under name equivalence, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type meters = int"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type yards = int"
      }), " are distinct types even though both expand to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structural equivalence"
      }), " holds if the two expressions expand to the same tree structure. Under structural equivalence, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "meters"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yards"
      }), " are identical."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Name equivalence: these are DISTINCT\ntype Meters = number;\ntype Yards = number;\nlet m: Meters = 10;\nlet y: Yards = m;  // TYPE ERROR under name equivalence\n\n// Structural equivalence: these are IDENTICAL\n// Both are {x: number, y: number}\n// Under name: might be different; under structural: same\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most languages use a hybrid: name equivalence for user-defined types and structural equivalence for built-in types."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "synthesized-type-checking",
      children: "Synthesized Type Checking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Synthesized type checking computes the type of a construct from its subconstructs in a bottom-up fashion. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E1 + E2"
      }), ", the checker determines types of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E1"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2"
      }), ", looks up operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " in the symbol table, and computes the result type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Type representations\ntype Type =\n    | { kind: \"int\" }\n    | { kind: \"float\" }\n    | { kind: \"bool\" }\n    | { kind: \"string\" }\n    | { kind: \"void\" }\n    | { kind: \"array\"; elem: Type }\n    | { kind: \"func\"; params: Type[]; ret: Type }\n    | { kind: \"var\"; name: string }        // type variable\n    | { kind: \"named\"; name: string }       // user-defined type name\n    ;\n\n// Type environment\nclass TypeEnv {\n    private map = new Map<string, Type>();\n\n    get(name: string): Type | undefined {\n        return this.map.get(name);\n    }\n\n    set(name: string, type: Type): void {\n        this.map.set(name, type);\n    }\n\n    // Look up operator overloads\n    static readonly binaryOps: Record<string, { param: Type; result: Type }[]> = {\n        \"+\": [\n            { param: { kind: \"int\" }, result: { kind: \"int\" } },\n            { param: { kind: \"float\" }, result: { kind: \"float\" } },\n            { param: { kind: \"string\" }, result: { kind: \"string\" } },\n        ],\n        \"-\": [\n            { param: { kind: \"int\" }, result: { kind: \"int\" } },\n            { param: { kind: \"float\" }, result: { kind: \"float\" } },\n        ],\n        \"*\": [\n            { param: { kind: \"int\" }, result: { kind: \"int\" } },\n            { param: { kind: \"float\" }, result: { kind: \"float\" } },\n        ],\n        \"/\": [\n            { param: { kind: \"int\" }, result: { kind: \"float\" } },\n            { param: { kind: \"float\" }, result: { kind: \"float\" } },\n        ],\n        \"<\": [\n            { param: { kind: \"int\" }, result: { kind: \"bool\" } },\n            { param: { kind: \"float\" }, result: { kind: \"bool\" } },\n        ],\n        \"==\": [\n            { param: { kind: \"int\" }, result: { kind: \"bool\" } },\n            { param: { kind: \"float\" }, result: { kind: \"bool\" } },\n            { param: { kind: \"bool\" }, result: { kind: \"bool\" } },\n            { param: { kind: \"string\" }, result: { kind: \"bool\" } },\n        ],\n    };\n\n    // Overload resolution\n    resolveBinaryOp(op: string, leftType: Type, rightType: Type): Type | undefined {\n        const overloads = TypeEnv.binaryOps[op];\n        if (!overloads) return undefined;\n\n        for (const overload of overloads) {\n            if (this.structurallyEqual(leftType, overload.param) &&\n                this.structurallyEqual(rightType, overload.param)) {\n                return overload.result;\n            }\n        }\n        return undefined;\n    }\n\n    // Structural equality check\n    structurallyEqual(a: Type, b: Type): boolean {\n        if (a.kind !== b.kind) return false;\n        switch (a.kind) {\n            case \"int\": case \"float\": case \"bool\": case \"string\": case \"void\":\n                return true;\n            case \"array\":\n                return this.structurallyEqual(\n                    (a as any).elem, (b as any).elem\n                );\n            case \"func\": {\n                const fa = a as any, fb = b as any;\n                if (fa.params.length !== fb.params.length) return false;\n                return fa.params.every((p: Type, i: number) =>\n                    this.structurallyEqual(p, fb.params[i])\n                ) && this.structurallyEqual(fa.ret, fb.ret);\n            }\n            case \"named\":\n                return (a as any).name === (b as any).name;\n            default:\n                return false;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-inference",
      children: "Type Inference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type inference determines types without explicit source annotations. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hindley-Milner"
      }), " inference system, used in ML and Haskell, proceeds in two passes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint generation"
        }), ": Assign a fresh type variable to every subexpression and generate equality constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint solving (unification)"
        }), ": Solve constraints by producing a substitution mapping type variables to types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fun f(x) = x + 1"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Assign ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " operator has type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? ? ? ? ?"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate constraints: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = ?"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int = ?"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Solve: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? = int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = int"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Result: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f : int ? int"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-type-checker",
      children: "Complete TypeScript Type Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ASTNode {\n    kind: string;\n    value?: string | number;\n    children: ASTNode[];\n    type?: Type;\n}\n\n// Factory functions\nconst IntLit = (v: number): ASTNode => ({ kind: \"int\", value: v, children: [] });\nconst FloatLit = (v: number): ASTNode => ({ kind: \"float\", value: v, children: [] });\nconst BoolLit = (v: boolean): ASTNode => ({ kind: \"bool\", value: v ? 1 : 0, children: [] });\nconst StrLit = (v: string): ASTNode => ({ kind: \"string\", value: v, children: [] });\nconst Id = (n: string): ASTNode => ({ kind: \"id\", value: n, children: [] });\nconst BinOp = (op: string, l: ASTNode, r: ASTNode): ASTNode =>\n    ({ kind: \"binop\", value: op, children: [l, r] });\nconst UnaryOp = (op: string, c: ASTNode): ASTNode =>\n    ({ kind: \"unary\", value: op, children: [c] });\nconst Assign = (t: ASTNode, e: ASTNode): ASTNode =>\n    ({ kind: \"assign\", children: [t, e] });\nconst If = (c: ASTNode, t: ASTNode, e?: ASTNode): ASTNode =>\n    ({ kind: \"if\", children: e ? [c, t, e] : [c, t] });\nconst Let = (n: string, e: ASTNode, b: ASTNode): ASTNode =>\n    ({ kind: \"let\", value: n, children: [e, b] });\nconst Fun = (param: string, body: ASTNode): ASTNode =>\n    ({ kind: \"fun\", value: param, children: [body] });\nconst App = (fn: ASTNode, arg: ASTNode): ASTNode =>\n    ({ kind: \"app\", children: [fn, arg] });\n\nclass TypeChecker {\n    private env = new TypeEnv();\n\n    constructor() {\n        // Predefine basic operators in environment\n        this.env.set(\"+\", { kind: \"func\" as any } as Type); // handled via resolveBinaryOp\n    }\n\n    // Type check a node, returning its inferred type\n    check(node: ASTNode): Type {\n        switch (node.kind) {\n            case \"int\": {\n                const t: Type = { kind: \"int\" };\n                node.type = t;\n                return t;\n            }\n            case \"float\": {\n                const t: Type = { kind: \"float\" };\n                node.type = t;\n                return t;\n            }\n            case \"bool\": {\n                const t: Type = { kind: \"bool\" };\n                node.type = t;\n                return t;\n            }\n            case \"string\": {\n                const t: Type = { kind: \"string\" };\n                node.type = t;\n                return t;\n            }\n            case \"id\": {\n                const name = String(node.value);\n                const resolved = this.env.get(name);\n                if (!resolved) {\n                    throw new Error(`Undefined variable: ${name}`);\n                }\n                node.type = resolved;\n                return resolved;\n            }\n            case \"binop\": {\n                const left = this.check(node.children[0]);\n                const right = this.check(node.children[1]);\n                const op = String(node.value);\n                const resolved = this.env.resolveBinaryOp(op, left, right);\n                if (!resolved) {\n                    throw new Error(\n                        `Type error: operator '${op}' not applicable to ` +\n                        `${this.typeToString(left)} and ${this.typeToString(right)}`\n                    );\n                }\n                node.type = resolved;\n                return resolved;\n            }\n            case \"unary\": {\n                const operand = this.check(node.children[0]);\n                // Unary minus: works on int and float\n                if (node.value === \"-\") {\n                    if (operand.kind === \"int\" || operand.kind === \"float\") {\n                        node.type = operand;\n                        return operand;\n                    }\n                }\n                // Logical not: works on bool\n                if (node.value === \"!\") {\n                    if (operand.kind === \"bool\") {\n                        node.type = operand;\n                        return operand;\n                    }\n                }\n                throw new Error(\n                    `Type error: unary operator '${node.value}' not applicable to ` +\n                    this.typeToString(operand)\n                );\n            }\n            case \"assign\": {\n                const target = this.check(node.children[0]);\n                const expr = this.check(node.children[1]);\n                if (!this.env.structurallyEqual(target, expr)) {\n                    throw new Error(\n                        `Type error: cannot assign ${this.typeToString(expr)} to ` +\n                        this.typeToString(target)\n                    );\n                }\n                node.type = target;\n                return target;\n            }\n            case \"if\": {\n                const cond = this.check(node.children[0]);\n                if (cond.kind !== \"bool\") {\n                    throw new Error(\n                        `Type error: if condition must be bool, got ` +\n                        this.typeToString(cond)\n                    );\n                }\n                const thenT = this.check(node.children[1]);\n                if (node.children.length === 3) {\n                    const elseT = this.check(node.children[2]);\n                    // Both branches must have same type\n                    if (!this.env.structurallyEqual(thenT, elseT)) {\n                        throw new Error(\n                            `Type error: if branches have different types: ` +\n                            `${this.typeToString(thenT)} vs ${this.typeToString(elseT)}`\n                        );\n                    }\n                    node.type = thenT;\n                    return thenT;\n                }\n                node.type = thenT;\n                return thenT;\n            }\n            case \"let\": {\n                const name = String(node.value);\n                const exprType = this.check(node.children[0]);\n                this.env.set(name, exprType);\n                const bodyType = this.check(node.children[1]);\n                node.type = bodyType;\n                // NOTE: In a full implementation, scope is restored here\n                return bodyType;\n            }\n            case \"fun\": {\n                const paramName = String(node.value);\n                // Create a function type with a fresh type variable for the parameter\n                const paramVar: Type = { kind: \"var\", name: `a${++varCounter}` };\n                this.env.set(paramName, paramVar);\n                const bodyType = this.check(node.children[0]);\n                const funcType: Type = {\n                    kind: \"func\",\n                    params: [paramVar],\n                    ret: bodyType,\n                } as Type;\n                node.type = funcType;\n                // NOTE: In a full implementation, scope is restored here\n                return funcType;\n            }\n            case \"app\": {\n                const fnType = this.check(node.children[0]);\n                const argType = this.check(node.children[1]);\n                if (fnType.kind !== \"func\") {\n                    throw new Error(\n                        `Type error: ${this.typeToString(fnType)} is not a function`\n                    );\n                }\n                const func = fnType as any;\n                if (func.params.length !== 1) {\n                    throw new Error(\n                        `Type error: function expects ${func.params.length} arguments, got 1`\n                    );\n                }\n                if (!this.env.structurallyEqual(func.params[0], argType)) {\n                    throw new Error(\n                        `Type error: argument type ${this.typeToString(argType)} ` +\n                        `does not match parameter type ${this.typeToString(func.params[0])}`\n                    );\n                }\n                node.type = func.ret;\n                return func.ret;\n            }\n            case \"block\": {\n                let lastType: Type = { kind: \"void\" };\n                for (const child of node.children) {\n                    lastType = this.check(child);\n                }\n                node.type = lastType;\n                return lastType;\n            }\n            case \"vardecl\": {\n                const name = String(node.value);\n                const declaredType = this.parseType(String(node.children[0].value));\n                const initType = this.check(node.children[1]);\n                if (!this.env.structurallyEqual(declaredType, initType)) {\n                    throw new Error(\n                        `Type error: variable '${name}' declared as ` +\n                        `${this.typeToString(declaredType)} but initialized with ` +\n                        this.typeToString(initType)\n                    );\n                }\n                this.env.set(name, declaredType);\n                node.type = declaredType;\n                return declaredType;\n            }\n            default:\n                throw new Error(`Unknown AST kind: ${node.kind}`);\n        }\n    }\n\n    // Print type in readable form\n    typeToString(t: Type): string {\n        switch (t.kind) {\n            case \"int\": return \"int\";\n            case \"float\": return \"float\";\n            case \"bool\": return \"bool\";\n            case \"string\": return \"string\";\n            case \"void\": return \"void\";\n            case \"var\": return `'${(t as any).name}`;\n            case \"named\": return (t as any).name;\n            case \"array\": return `${this.typeToString((t as any).elem)}[]`;\n            case \"func\": {\n                const f = t as any;\n                const params = f.params.map((p: Type) => this.typeToString(p)).join(\", \");\n                return `(${params}) => ${this.typeToString(f.ret)}`;\n            }\n            default: return \"?\";\n        }\n    }\n\n    private parseType(value: string): Type {\n        const map: Record<string, Type> = {\n            \"int\": { kind: \"int\" },\n            \"float\": { kind: \"float\" },\n            \"bool\": { kind: \"bool\" },\n            \"string\": { kind: \"string\" },\n            \"void\": { kind: \"void\" },\n        };\n        if (value.endsWith(\"[]\")) {\n            return { kind: \"array\", elem: this.parseType(value.slice(0, -2)) } as Type;\n        }\n        return map[value] ?? { kind: \"named\", name: value };\n    }\n}\n\nlet varCounter = 0;\n\n// === Demo: Basic Type Checking ===\nconsole.log(\"=== Type Checker Demo ===\");\nconst checker = new TypeChecker();\n\n// Simple arithmetic\nconst expr1 = BinOp(\"+\", IntLit(3), IntLit(5));\nconst t1 = checker.check(expr1);\nconsole.log(`3 + 5 : ${checker.typeToString(t1)}`);\n\n// Mixed types (int + float ? float)\nconst expr2 = BinOp(\"+\", IntLit(3), FloatLit(2.5));\nconst t2 = checker.check(expr2);\nconsole.log(`3 + 2.5 : ${checker.typeToString(t2)}`);\n\n// Type error\ntry {\n    const expr3 = BinOp(\"+\", IntLit(3), BoolLit(true));\n    checker.check(expr3);\n} catch (e: any) {\n    console.log(`3 + true ? Error: ${e.message}`);\n}\n\n// If-then-else\nconst expr4 = If(BoolLit(true), IntLit(1), IntLit(0));\nconst t4 = checker.check(expr4);\nconsole.log(`if true then 1 else 0 : ${checker.typeToString(t4)}`);\n\n// Let binding\nconst expr5 = Let(\"x\", IntLit(10), BinOp(\"+\", Id(\"x\"), IntLit(1)));\nconst t5 = checker.check(expr5);\nconsole.log(`let x = 10 in x + 1 : ${checker.typeToString(t5)}`);\n\n// String concatenation\nconst expr6 = BinOp(\"+\", StrLit(\"Hello, \"), StrLit(\"World!\"));\nconst t6 = checker.check(expr6);\nconsole.log(`\"Hello, \" + \"World!\" : ${checker.typeToString(t6)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hindley-milner-type-inference-full-implementation",
      children: "Hindley-Milner Type Inference (Full Implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Hindley-Milner Type Inference ===\n\ninterface Constraint {\n    left: Type;\n    right: Type;\n}\n\n// Generate fresh type variable\nfunction freshVar(): Type {\n    const letters = \"a??de??????????p?st?f???\";\n    const idx = varCounter % letters.length;\n    const suffix = Math.floor(varCounter / letters.length);\n    const name = suffix === 0\n        ? letters[idx]\n        : `${letters[idx]}${suffix}`;\n    varCounter++;\n    return { kind: \"var\", name } as Type;\n}\n\n// Generate type constraints from an AST\nfunction generateConstraints(\n    node: ASTNode,\n    env: Map<string, Type>\n): { type: Type; constraints: Constraint[] } {\n    switch (node.kind) {\n        case \"int\":\n            return { type: { kind: \"int\" }, constraints: [] };\n        case \"float\":\n            return { type: { kind: \"float\" }, constraints: [] };\n        case \"bool\":\n            return { type: { kind: \"bool\" }, constraints: [] };\n        case \"string\":\n            return { type: { kind: \"string\" }, constraints: [] };\n        case \"id\": {\n            const name = String(node.value);\n            const type = env.get(name);\n            if (!type) {\n                throw new Error(`Unbound variable: ${name}`);\n            }\n            return { type, constraints: [] };\n        }\n        case \"binop\": {\n            const left = generateConstraints(node.children[0], env);\n            const right = generateConstraints(node.children[1], env);\n            const resultVar = freshVar();\n            const constraints: Constraint[] = [\n                ...left.constraints,\n                ...right.constraints,\n                { left: left.type, right: { kind: \"var\", name: `op_${node.value}` } as Type },\n                { left: right.type, right: { kind: \"var\", name: `op_${node.value}` } as Type },\n                { left: resultVar, right: { kind: \"var\", name: `res_${node.value}` } as Type },\n            ];\n            return { type: resultVar, constraints };\n        }\n        case \"fun\": {\n            const paramName = String(node.value);\n            const paramVar = freshVar();\n            const newEnv = new Map(env);\n            newEnv.set(paramName, paramVar);\n            const body = generateConstraints(node.children[0], newEnv);\n            const funcType: Type = {\n                kind: \"func\",\n                params: [paramVar],\n                ret: body.type,\n            } as Type;\n            return { type: funcType, constraints: body.constraints };\n        }\n        case \"app\": {\n            const fn = generateConstraints(node.children[0], env);\n            const arg = generateConstraints(node.children[1], env);\n            const resultVar = freshVar();\n            const expectedFn: Type = {\n                kind: \"func\",\n                params: [arg.type],\n                ret: resultVar,\n            } as Type;\n            const constraints: Constraint[] = [\n                ...fn.constraints,\n                ...arg.constraints,\n                { left: fn.type, right: expectedFn },\n            ];\n            return { type: resultVar, constraints };\n        }\n        case \"let\": {\n            const name = String(node.value);\n            const expr = generateConstraints(node.children[0], env);\n            const newEnv = new Map(env);\n            newEnv.set(name, expr.type);\n            const body = generateConstraints(node.children[1], newEnv);\n            return {\n                type: body.type,\n                constraints: [...expr.constraints, ...body.constraints],\n            };\n        }\n        case \"if\": {\n            const cond = generateConstraints(node.children[0], env);\n            const thenB = generateConstraints(node.children[1], env);\n            const elseB = node.children.length > 2\n                ? generateConstraints(node.children[2], env)\n                : { type: { kind: \"void\" }, constraints: [] };\n            const constraints: Constraint[] = [\n                ...cond.constraints,\n                ...thenB.constraints,\n                ...elseB.constraints,\n                { left: cond.type, right: { kind: \"bool\" } },\n                { left: thenB.type, right: elseB.type },\n            ];\n            return { type: thenB.type, constraints };\n        }\n        default:\n            throw new Error(`Unknown AST kind: ${node.kind}`);\n    }\n}\n\n// Apply a substitution to a type\nfunction applySubst(subst: Map<string, Type>, type: Type): Type {\n    if (type.kind === \"var\") {\n        const name = (type as any).name;\n        if (subst.has(name)) {\n            const resolved = subst.get(name)!;\n            return applySubst(subst, resolved);\n        }\n        return type;\n    }\n    if (type.kind === \"func\") {\n        const f = type as any;\n        return {\n            kind: \"func\",\n            params: f.params.map((p: Type) => applySubst(subst, p)),\n            ret: applySubst(subst, f.ret),\n        } as Type;\n    }\n    if (type.kind === \"array\") {\n        return {\n            kind: \"array\",\n            elem: applySubst(subst, (type as any).elem),\n        } as Type;\n    }\n    return type;\n}\n\n// Unification: find substitution making two types equal\nfunction unify(\n    t1: Type,\n    t2: Type,\n    subst: Map<string, Type>\n): void {\n    const a = applySubst(subst, t1);\n    const b = applySubst(subst, t2);\n\n    if (a.kind === \"var\") {\n        const nameA = (a as any).name;\n        if (b.kind === \"var\" && (b as any).name === nameA) return;\n        // Occurs check\n        if (occursIn(nameA, b, subst)) {\n            throw new Error(`Occurs check: ${nameA} occurs in ${typeToString(b)}`);\n        }\n        subst.set(nameA, b);\n        return;\n    }\n\n    if (b.kind === \"var\") {\n        const nameB = (b as any).name;\n        if (occursIn(nameB, a, subst)) {\n            throw new Error(`Occurs check: ${nameB} occurs in ${typeToString(a)}`);\n        }\n        subst.set(nameB, a);\n        return;\n    }\n\n    if (a.kind !== b.kind) {\n        throw new Error(\n            `Type mismatch: cannot unify ${typeToString(a)} with ${typeToString(b)}`\n        );\n    }\n\n    switch (a.kind) {\n        case \"int\": case \"float\": case \"bool\": case \"string\": case \"void\":\n            return; // identical kinds\n        case \"func\": {\n            const fa = a as any, fb = b as any;\n            if (fa.params.length !== fb.params.length) {\n                throw new Error(\n                    `Function arity mismatch: ${fa.params.length} vs ${fb.params.length}`\n                );\n            }\n            for (let i = 0; i < fa.params.length; i++) {\n                unify(fa.params[i], fb.params[i], subst);\n            }\n            unify(fa.ret, fb.ret, subst);\n            return;\n        }\n        case \"array\":\n            unify((a as any).elem, (b as any).elem, subst);\n            return;\n        default:\n            throw new Error(`Cannot unify unknown type kind: ${a.kind}`);\n    }\n}\n\nfunction occursIn(name: string, type: Type, subst: Map<string, Type>): boolean {\n    const resolved = applySubst(subst, type);\n    if (resolved.kind === \"var\") {\n        return (resolved as any).name === name;\n    }\n    if (resolved.kind === \"func\") {\n        const f = resolved as any;\n        return f.params.some((p: Type) => occursIn(name, p, subst)) ||\n               occursIn(name, f.ret, subst);\n    }\n    if (resolved.kind === \"array\") {\n        return occursIn(name, (resolved as any).elem, subst);\n    }\n    return false;\n}\n\n// Solve all constraints\nfunction solveConstraints(\n    constraints: Constraint[]\n): Map<string, Type> {\n    const subst = new Map<string, Type>();\n    for (const c of constraints) {\n        unify(c.left, c.right, subst);\n    }\n    return subst;\n}\n\n// Full inference pipeline\nfunction inferType(node: ASTNode): Type {\n    varCounter = 0;\n    const env = new Map<string, Type>();\n    const { type, constraints } = generateConstraints(node, env);\n    const subst = solveConstraints(constraints);\n    return applySubst(subst, type);\n}\n\nfunction typeToString(t: Type): string {\n    if (t.kind === \"var\") return `'${(t as any).name}`;\n    if (t.kind === \"func\") {\n        const f = t as any;\n        const params = f.params.map((p: Type) => typeToString(p)).join(\", \");\n        return `(${params}) => ${typeToString(f.ret)}`;\n    }\n    if (t.kind === \"array\") return `${typeToString((t as any).elem)}[]`;\n    return t.kind;\n}\n\n// === Hindley-Milner Demos ===\nconsole.log(\"\\n=== Hindley-Milner Inference Demos ===\");\n\n// Demo 1: Identity function\nconst idFunc = Fun(\"x\", Id(\"x\"));\nconst idType = inferType(idFunc);\nconsole.log(`fun x => x : ${typeToString(idType)}`);\n\n// Demo 2: Constant function\nconst constFunc = Fun(\"x\", Fun(\"y\", Id(\"x\")));\nconst constType = inferType(constFunc);\nconsole.log(`fun x => fun y => x : ${typeToString(constType)}`);\n\n// Demo 3: Application (call identity)\nconst appExpr = App(idFunc, IntLit(42));\nconst appType = inferType(appExpr);\nconsole.log(`(fun x => x)(42) : ${typeToString(appType)}`);\n\n// Demo 4: Let-polymorphism\nconst letExpr = Let(\"id\", idFunc, App(Id(\"id\"), App(Id(\"id\"), IntLit(10))));\nconst letType = inferType(letExpr);\nconsole.log(`let id = fun x => x in id(id(10)) : ${typeToString(letType)}`);\n\n// Demo 5: If-then-else\nconst ifExpr = If(BoolLit(true), IntLit(1), IntLit(0));\nconst ifType = inferType(ifExpr);\nconsole.log(`if true then 1 else 0 : ${typeToString(ifType)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overloading",
      children: "Overloading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An operator or function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "overloaded"
      }), " if it has multiple meanings depending on argument types. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " operator is overloaded for integer addition, floating-point addition, and string concatenation in many languages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution strategy"
      }), ": Collect all visible candidates. Filter by arity and argument types. If exactly one candidate matches, select it. If multiple match, report ambiguity. If none match, report type error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function resolveOverloadedFunction(\n    name: string,\n    argTypes: Type[],\n    candidates: { params: Type[]; ret: Type }[]\n): { params: Type[]; ret: Type } | undefined {\n    const matching = candidates.filter(c => {\n        if (c.params.length !== argTypes.length) return false;\n        return c.params.every((p, i) => {\n            // Simplified: check structural equality\n            const env = new TypeEnv();\n            return env.structurallyEqual(p, argTypes[i]);\n        });\n    });\n\n    if (matching.length === 1) return matching[0];\n    if (matching.length === 0) {\n        throw new Error(`No matching overload for ${name}`);\n    }\n    // Ambiguous ? would need further disambiguation\n    console.warn(`Warning: ambiguous overload for ${name}, ${matching.length} candidates`);\n    return matching[0];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "polymorphism",
      children: "Polymorphism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parametric polymorphism"
      }), " allows a function to operate uniformly on values of any type, with type variables standing for actual types. The ML function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fun length x = ..."
      }), " has type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a list ? int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subtype polymorphism"
      }), " allows a function expecting type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " to accept any subtype of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ", as in object-oriented inheritance. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Liskov substitution principle"
      }), " governs subtype relationships: if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " is a subtype of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ", objects of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " may be replaced by objects of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " without altering program correctness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subtyping-and-variance",
      children: "Subtyping and Variance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "variance"
      }), " of a type constructor determines how subtyping propagates:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covariant"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "S = T"
            }), " ? ", (0,jsx_runtime.jsx)(_components.code, {
              children: "C<S> = C<T>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read-only collections (TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReadonlyArray"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contravariant"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "S = T"
            }), " ? ", (0,jsx_runtime.jsx)(_components.code, {
              children: "C<T> = C<S>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invariant"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "S = T"
            }), " does NOT imply ", (0,jsx_runtime.jsx)(_components.code, {
              children: "C<S> = C<T>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mutable arrays (Java ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ArrayStoreException"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Function types are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contravariant in arguments"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "covariant in results"
      }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S = T"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(T ? U) = (S ? U)"
      }), " for arguments, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(U ? S) = (U ? T)"
      }), " for results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Variance demonstration in TypeScript\ntype Animal = { name: string };\ntype Dog = Animal & { bark(): void };\n\n// Covariant: function return type\ntype Getter<T> = () => T;\ndeclare let animalGetter: Getter<Animal>;\ndeclare let dogGetter: Getter<Dog>;\n// dogGetter = animalGetter;    // NOT safe: might return non-Dog\n// animalGetter = dogGetter;    // Safe: returns Dog which is Animal\n\n// Contravariant: function argument type\ntype Setter<T> = (x: T) => void;\ndeclare let animalSetter: Setter<Animal>;\ndeclare let dogSetter: Setter<Dog>;\n// animalSetter = dogSetter;    // NOT safe: dogSetter only handles Dog\n// dogSetter = animalSetter;    // Safe: animalSetter handles any Animal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unification",
      children: "Unification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unification finds a substitution that makes two type expressions equal. The algorithm recursively matches structures:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function unify(t1, t2):\n    t1 = applySubst(subst, t1)\n    t2 = applySubst(subst, t2)\n\n    if t1 is type variable a:\n        if a == t2: return\n        if occurs(a, t2): error\n        bind(a, t2)\n    elif t2 is type variable ?:\n        bind(?, t1)\n    elif both have same constructor (?, array, etc.):\n        unify children pairwise\n    else:\n        type error\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "occurs check"
      }), " prevents infinite recursion: if unifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a ? int"
      }), ", binding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a = a ? int"
      }), " would create an infinite type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(((a ? int) ? int) ? int...)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types equal only if same name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java class types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structural Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types equal if same tree structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef"
            }), " (expanded)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synthesized Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up attribute computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pascal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint-Based Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate + solve equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML, Haskell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expressive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parametric Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type variables abstract over types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java generics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subtype Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hindley-Milner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint gen + unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most general types"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synthesized Type Check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed AST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Untyped AST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n?a(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overload Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression + context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single meaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-hard (general case)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type system design for new languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soundness vs expressiveness trade-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rust borrow checker, C++ templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced type systems prevent memory bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript type inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hindley-Milner concepts apply directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDE intellisense, type-aware refactoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type information powers smart tooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proof assistants (Coq, Lean)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type systems encode program properties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type checking verifies that operations receive expected operand types. Type expressions describe the complete type of a language construct. Name and structural equivalence provide alternative equality criteria. Type inference automates type discovery through equation generation and unification. Overloading and polymorphism increase expressive power while requiring more sophisticated checking. Unification is the computational engine underlying Hindley-Milner inference, and the occurs check prevents infinite types. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeChecker"
      }), " and Hindley-Milner inference engine demonstrate both synthesized checking and constraint-based inference with working demos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name equivalence catches more bugs"
        }), ": Structural equivalence silently merges types that the programmer intended to be distinct. Use name equivalence for user-defined types."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type inference reduces annotation burden"
        }), ": Hindley-Milner inference can infer most types automatically, but top-level annotations still help with documentation and error messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overload resolution is NP-hard in general"
        }), ": The full problem with subtyping, multiple dispatch, and context-sensitive resolution is expensive. Keep the overload set small."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance annotations matter"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in"
        }), " (contravariant) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "out"
        }), " (covariant) annotations in generic types (Kotlin, TypeScript) to preserve subtype relationships safely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unification with occurs check is essential"
        }), ": Without the occurs check, the inference algorithm can loop infinitely or produce unsound substitutions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// type checking\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'type checking', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// type checking - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'type checking' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Name equivalence means two types are equal if and only if:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Their structures are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) They have the same name or are defined in the same type declaration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) They occupy the same memory size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) They have the same alignment requirements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the occurs check used for in unification?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To verify all variables are initialized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To prevent infinite recursion by checking a variable does not appear in the expression being assigned to it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To ensure function arguments are evaluated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To resolve overloaded functions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Function types are contravariant in their argument types. Which statement is correct?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) If S = T, then (S ? U) = (T ? U)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) If S = T, then (T ? U) = (S ? U)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Variance does not apply to function types"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Function arguments are covariant"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Hindley-Milner inference, what does the constraint generation phase produce?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A typed AST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A set of equality constraints between type expressions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Assembly code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Runtime type information"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes parametric polymorphism from subtype polymorphism?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Parametric uses type variables abstracted over types; subtype uses inheritance hierarchies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Parametric only works with integers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Subtype only works with classes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. B, 5. A\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish name from structural equivalence. Provide an example producing different results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between synthesized type checking and type inference?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of type variables in parametric polymorphism."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the unification algorithm and the purpose of the occurs check."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Liskov substitution principle and its relationship to subtypes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the trade-off between soundness and completeness in type systems?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine structural equivalence for each pair: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array(integer)"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array(integer)"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(int ? int) ? int"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(int ? int) ? int"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array(pointer(int))"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "array(pointer(float))"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform inference on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fun g(x, y) = if x > 0 then y else 0"
        }), ". Show constraint generation and unification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write the type expression for a C function taking a pointer to a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(int ? char)"
        }), " and returning a pointer to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve overloading in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"Count: \" + 42"
        }), " in Java. Which ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " applies and what is the result type?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given type hierarchy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Float = Number = Object"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Integer = Number"
        }), ", determine validity of: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Number n = new Integer(5)"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Integer i = new Float(3.14)"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object o = new Number(10)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain why mutable arrays in Java must be invariant. Show an example that would produce an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArrayStoreException"
        }), " if they were covariant."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a type checker for a small expression language with integers, booleans, operators (+, -, *, <, =), if-then-else, and let-bindings. Use an L-attributed SDD with a symbol table. Report meaningful errors for type mismatches. Extend with Hindley-Milner inference: use type variables, generate constraints during a first pass, and solve via unification. Demonstrate correct typing of a polymorphic identity function and correct rejection of adding boolean to integer. Use the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TypeChecker"
        }), " and Hindley-Milner engine from this chapter as your base implementation. Extend the checker to handle recursive functions by pre-populating the environment with the function name before checking its body."]
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