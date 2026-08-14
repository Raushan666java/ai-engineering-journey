"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87302],{

/***/ 52899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_p_2_java_oop_md_d2a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-p-2-java-oop-md-d2a.json
const site_docs_courses_java_p_2_java_oop_md_d2a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/p2-java-oop","title":"Object-Oriented Programming in Java","description":"Learning Objectives","source":"@site/docs/courses/java/p2-java-oop.md","sourceDirName":"courses/java","slug":"/java/p2-java-oop","permalink":"/ai-engineering-journey/java/p2-java-oop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":77,"frontMatter":{"id":"p2-java-oop","slug":"/java/p2-java-oop","title":"Object-Oriented Programming in Java","sidebar_label":"Object-Oriented Programming in Java","sidebar_position":77},"sidebar":"course-java","previous":{"title":"Java Syntax & Fundamentals","permalink":"/ai-engineering-journey/java/p1-java-syntax"},"next":{"title":"Java Collections Framework","permalink":"/ai-engineering-journey/java/p3-java-collections"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/p2-java-oop.md


const frontMatter = {
	id: 'p2-java-oop',
	slug: '/java/p2-java-oop',
	title: 'Object-Oriented Programming in Java',
	sidebar_label: 'Object-Oriented Programming in Java',
	sidebar_position: 77
};
const contentTitle = 'Object-Oriented Programming in Java';

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
  "value": "1. Classes and Objects",
  "id": "1-classes-and-objects",
  "level": 2
}, {
  "value": "1.1 Defining a Class",
  "id": "11-defining-a-class",
  "level": 3
}, {
  "value": "1.2 Creating Objects",
  "id": "12-creating-objects",
  "level": 3
}, {
  "value": "1.3 Constructors",
  "id": "13-constructors",
  "level": 3
}, {
  "value": "1.4 The <code>this</code> Keyword",
  "id": "14-the-this-keyword",
  "level": 3
}, {
  "value": "1.5 Method Overloading",
  "id": "15-method-overloading",
  "level": 3
}, {
  "value": "1.6 Varargs",
  "id": "16-varargs",
  "level": 3
}, {
  "value": "2. Encapsulation",
  "id": "2-encapsulation",
  "level": 2
}, {
  "value": "2.1 Access Modifiers",
  "id": "21-access-modifiers",
  "level": 3
}, {
  "value": "2.2 Getters and Setters",
  "id": "22-getters-and-setters",
  "level": 3
}, {
  "value": "2.3 JavaBeans Convention",
  "id": "23-javabeans-convention",
  "level": 3
}, {
  "value": "3. Inheritance",
  "id": "3-inheritance",
  "level": 2
}, {
  "value": "3.1 The <code>extends</code> Keyword",
  "id": "31-the-extends-keyword",
  "level": 3
}, {
  "value": "3.2 The <code>super</code> Keyword",
  "id": "32-the-super-keyword",
  "level": 3
}, {
  "value": "3.3 Method Overriding",
  "id": "33-method-overriding",
  "level": 3
}, {
  "value": "3.4 The <code>@Override</code> Annotation",
  "id": "34-the-override-annotation",
  "level": 3
}, {
  "value": "3.5 <code>final</code> Classes and Methods",
  "id": "35-final-classes-and-methods",
  "level": 3
}, {
  "value": "3.6 <code>protected</code> Access in Practice",
  "id": "36-protected-access-in-practice",
  "level": 3
}, {
  "value": "4. Polymorphism",
  "id": "4-polymorphism",
  "level": 2
}, {
  "value": "4.1 Compile-Time Polymorphism (Overloading)",
  "id": "41-compile-time-polymorphism-overloading",
  "level": 3
}, {
  "value": "4.2 Runtime Polymorphism (Overriding)",
  "id": "42-runtime-polymorphism-overriding",
  "level": 3
}, {
  "value": "4.3 Covariant Return Types",
  "id": "43-covariant-return-types",
  "level": 3
}, {
  "value": "5. Abstract Classes",
  "id": "5-abstract-classes",
  "level": 2
}, {
  "value": "5.1 Abstract Methods and Base Implementation",
  "id": "51-abstract-methods-and-base-implementation",
  "level": 3
}, {
  "value": "5.2 Abstract Classes vs. Interfaces",
  "id": "52-abstract-classes-vs-interfaces",
  "level": 3
}, {
  "value": "6. Interfaces",
  "id": "6-interfaces",
  "level": 2
}, {
  "value": "6.1 Basic Interface",
  "id": "61-basic-interface",
  "level": 3
}, {
  "value": "6.2 Default Methods",
  "id": "62-default-methods",
  "level": 3
}, {
  "value": "6.3 Static Methods",
  "id": "63-static-methods",
  "level": 3
}, {
  "value": "6.4 Private Methods",
  "id": "64-private-methods",
  "level": 3
}, {
  "value": "6.5 Constants in Interfaces",
  "id": "65-constants-in-interfaces",
  "level": 3
}, {
  "value": "6.6 Multiple Inheritance of Type",
  "id": "66-multiple-inheritance-of-type",
  "level": 3
}, {
  "value": "6.7 Diamond Problem Resolution",
  "id": "67-diamond-problem-resolution",
  "level": 3
}, {
  "value": "6.8 Functional Interfaces and <code>@FunctionalInterface</code>",
  "id": "68-functional-interfaces-and-functionalinterface",
  "level": 3
}, {
  "value": "7. Sealed Classes",
  "id": "7-sealed-classes",
  "level": 2
}, {
  "value": "7.1 Basic Sealed Class",
  "id": "71-basic-sealed-class",
  "level": 3
}, {
  "value": "7.2 Sealed Interface Hierarchy",
  "id": "72-sealed-interface-hierarchy",
  "level": 3
}, {
  "value": "7.3 Exhaustive <code>switch</code> with Sealed Classes",
  "id": "73-exhaustive-switch-with-sealed-classes",
  "level": 3
}, {
  "value": "8. Records",
  "id": "8-records",
  "level": 2
}, {
  "value": "8.1 Basic Record",
  "id": "81-basic-record",
  "level": 3
}, {
  "value": "8.2 Canonical and Compact Constructors",
  "id": "82-canonical-and-compact-constructors",
  "level": 3
}, {
  "value": "8.3 Custom Methods",
  "id": "83-custom-methods",
  "level": 3
}, {
  "value": "8.4 Records with Pattern Matching",
  "id": "84-records-with-pattern-matching",
  "level": 3
}, {
  "value": "9. Enums",
  "id": "9-enums",
  "level": 2
}, {
  "value": "9.1 Basic Enum",
  "id": "91-basic-enum",
  "level": 3
}, {
  "value": "9.2 Enum with Fields, Constructors, and Methods",
  "id": "92-enum-with-fields-constructors-and-methods",
  "level": 3
}, {
  "value": "9.3 Enum-Specific Body",
  "id": "93-enum-specific-body",
  "level": 3
}, {
  "value": "9.4 EnumMap",
  "id": "94-enummap",
  "level": 3
}, {
  "value": "9.5 EnumSet",
  "id": "95-enumset",
  "level": 3
}, {
  "value": "10. Annotations",
  "id": "10-annotations",
  "level": 2
}, {
  "value": "10.1 Built-In Standard Annotations",
  "id": "101-built-in-standard-annotations",
  "level": 3
}, {
  "value": "10.2 Custom Annotations",
  "id": "102-custom-annotations",
  "level": 3
}, {
  "value": "10.3 Processing Annotations at Runtime",
  "id": "103-processing-annotations-at-runtime",
  "level": 3
}, {
  "value": "11. Nested Classes",
  "id": "11-nested-classes",
  "level": 2
}, {
  "value": "11.1 Static Nested Class",
  "id": "111-static-nested-class",
  "level": 3
}, {
  "value": "11.2 Inner Class (Member Class)",
  "id": "112-inner-class-member-class",
  "level": 3
}, {
  "value": "11.3 Local Class",
  "id": "113-local-class",
  "level": 3
}, {
  "value": "11.4 Anonymous Class",
  "id": "114-anonymous-class",
  "level": 3
}, {
  "value": "11.5 Anonymous Class vs. Lambda",
  "id": "115-anonymous-class-vs-lambda",
  "level": 3
}, {
  "value": "12. equals, hashCode, toString, and clone",
  "id": "12-equals-hashcode-tostring-and-clone",
  "level": 2
}, {
  "value": "12.1 The <code>equals</code>/<code>hashCode</code> Contract",
  "id": "121-the-equalshashcode-contract",
  "level": 3
}, {
  "value": "12.2 Best Practices for <code>equals</code>",
  "id": "122-best-practices-for-equals",
  "level": 3
}, {
  "value": "12.3 <code>toString</code>",
  "id": "123-tostring",
  "level": 3
}, {
  "value": "12.4 <code>clone</code>",
  "id": "124-clone",
  "level": 3
}, {
  "value": "13. Complete Integration Example",
  "id": "13-complete-integration-example",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "object-oriented-programming-in-java",
        children: "Object-Oriented Programming in Java"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/java/p2-java-oop/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p2-java-oop/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/p2-java-oop/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p2-java-oop/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/p2-java-oop/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p2-java-oop/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding for Java development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master these before Spring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runnable, compilable examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type, compile, run, refactor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practice Exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hands-on skill building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply what you learn"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Fundamentals] --> B[Core Concepts]\n    B --> C[Code Examples]\n    C --> D[Practice Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define classes and instantiate objects with fields, methods, and constructors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply encapsulation using access modifiers and the JavaBeans naming convention"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build inheritance hierarchies using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extends"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super"
        }), ", and method overriding"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish compile-time polymorphism (overloading) from runtime polymorphism (overriding)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design abstract base classes and decide when to use abstract classes versus interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage interfaces with default, static, and private methods for multiple inheritance of type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restrict inheritance hierarchies with sealed classes and pattern-match exhaustively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare transparent data carriers with records and customize their behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model fixed sets of constants with enums, including fields, methods, and specialized bodies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use built-in and custom annotations to decorate code with metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose among static nested, inner, local, and anonymous classes, and compare with lambdas"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fulfill the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), " contract, implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toString"
        }), ", and understand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-classes-and-objects",
      children: "1. Classes and Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p2-java-oop.png",
        alt: "Java OOP - Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java is an object-oriented language: every piece of data except primitive types belongs to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class"
      }), ", and every class can produce ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "objects"
      }), " (instances). A class is a blueprint; an object is the concrete thing you create from that blueprint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-defining-a-class",
      children: "1.1 Defining a Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A class bundles ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fields"
      }), " (state) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "methods"
      }), " (behavior) into a single unit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Student {\n    String name;\n    int age;\n    String studentId;\n\n    void study(String subject) {\n        System.out.println(name + \" is studying \" + subject);\n    }\n\n    String getStudentInfo() {\n        return studentId + \": \" + name + \" (\" + age + \")\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fields ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "age"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "studentId"
      }), " hold the state of each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Student"
      }), " object. Methods ", (0,jsx_runtime.jsx)(_components.code, {
        children: "study"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getStudentInfo"
      }), " define its behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-creating-objects",
      children: "1.2 Creating Objects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), " keyword to instantiate a class. The object lives on the heap; the variable holds a reference to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Main {\n    public static void main(String[] args) {\n        Student alice = new Student();\n        alice.name = \"Alice\";\n        alice.age = 20;\n        alice.studentId = \"S1001\";\n\n        alice.study(\"Mathematics\");\n        System.out.println(alice.getStudentInfo());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice is studying Mathematics\nS1001: Alice (20)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-constructors",
      children: "1.3 Constructors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constructor"
      }), " initializes a newly created object. It has the same name as the class and no return type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Student {\n    String name;\n    int age;\n    String studentId;\n\n    // Default constructor (provided automatically if no other constructor exists)\n    public Student() {\n    }\n\n    // Parameterized constructor\n    public Student(String name, int age, String studentId) {\n        this.name = name;\n        this.age = age;\n        this.studentId = studentId;\n    }\n\n    void study(String subject) {\n        System.out.println(name + \" is studying \" + subject);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "14-the-this-keyword",
      children: ["1.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inside an instance method or constructor, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " refers to the current object. It is used to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disambiguate instance fields from parameters with the same name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call another constructor in the same class (constructor chaining)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Rectangle {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;          // disambiguates field from parameter\n        this.height = height;\n    }\n\n    // Constructor chaining: no-arg constructor delegates to parameterized\n    public Rectangle() {\n        this(1.0, 1.0);              // calls Rectangle(double, double)\n    }\n\n    public double area() {\n        return this.width * this.height;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The first statement in a constructor can call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this(...)"
      }), " to invoke a sibling constructor. This avoids code duplication in initialization logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-method-overloading",
      children: "1.5 Method Overloading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A class can have multiple methods with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same name"
      }), " but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different parameter lists"
      }), ". This is called overloading. The compiler selects the correct version based on the arguments at compile time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Calculator {\n\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    public double add(double a, double b) {\n        return a + b;\n    }\n\n    public String add(String a, String b) {\n        return a + b;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class CalculatorDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(calc.add(3, 5));          // 8\n        System.out.println(calc.add(3, 5, 2));        // 10\n        System.out.println(calc.add(2.5, 3.7));       // 6.2\n        System.out.println(calc.add(\"Hello, \", \"World!\")); // Hello, World!\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Overloading rules: methods must differ in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "number"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order"
      }), " of parameters. The return type alone is not sufficient to distinguish overloaded methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-varargs",
      children: "1.6 Varargs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 5 introduced ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "variable arity parameters"
      }), " (varargs), denoted by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Type..."
      }), ". A varargs parameter accepts zero or more arguments of the specified type and is treated as an array inside the method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Printer {\n\n    public static void printAll(String... items) {\n        for (String item : items) {\n            System.out.println(item);\n        }\n    }\n\n    public static <T> void printArray(T... elements) {\n        for (T elem : elements) {\n            System.out.print(elem + \" \");\n        }\n        System.out.println();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class VarargsDemo {\n    public static void main(String[] args) {\n        Printer.printAll(\"apple\", \"banana\", \"cherry\");\n        Printer.printAll();                          // zero arguments is valid\n\n        Printer.printArray(1, 2, 3, 4, 5);\n        Printer.printArray(\"a\", \"b\", \"c\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A method can have at most one varargs parameter."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The varargs parameter must be the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "last"
        }), " parameter."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The caller can pass an array directly or list the elements."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-encapsulation",
      children: "2. Encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encapsulation hides internal state and requires all interaction to happen through public methods. This protects the integrity of an object and allows the implementation to evolve without affecting callers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-access-modifiers",
      children: "2.1 Access Modifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java provides four access levels:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subclass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "default"
            }), " (package-private)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.bank;\n\npublic class BankAccount {\n    private String accountNumber;     // accessible only within this class\n    private double balance;           // accessible only within this class\n    String branchCode;                // default (package-private)\n    protected String ownerName;       // accessible in subclasses\n    public String bankName;           // accessible everywhere\n\n    public BankAccount(String accountNumber, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.balance = initialBalance;\n    }\n\n    private boolean validateSufficientFunds(double amount) {\n        return balance >= amount;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && validateSufficientFunds(amount)) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.bank;\n\npublic class EncapsulationDemo {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(\"ACC-12345\", 1000.0);\n\n        account.deposit(500.0);                      // public method\n        account.withdraw(200.0);                     // public method\n\n        // account.balance = 999999;                 // COMPILE ERROR: private\n        // account.validateSufficientFunds(100);     // COMPILE ERROR: private\n\n        System.out.println(\"Balance: \" + account.getBalance());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-getters-and-setters",
      children: "2.2 Getters and Setters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The standard pattern exposes private fields through public ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accessor"
      }), " (getter) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mutator"
      }), " (setter) methods. This allows validation, lazy initialization, and computed values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Person {\n    private String name;\n    private int age;\n    private String email;\n\n    public Person() {\n    }\n\n    // Getters\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public String getEmail() {\n        return email;\n    }\n\n    // Setters with validation\n    public void setName(String name) {\n        if (name == null || name.isBlank()) {\n            throw new IllegalArgumentException(\"Name must not be blank\");\n        }\n        this.name = name;\n    }\n\n    public void setAge(int age) {\n        if (age < 0 || age > 150) {\n            throw new IllegalArgumentException(\"Age must be between 0 and 150\");\n        }\n        this.age = age;\n    }\n\n    public void setEmail(String email) {\n        if (email != null && !email.contains(\"@\")) {\n            throw new IllegalArgumentException(\"Invalid email format\");\n        }\n        this.email = email;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-javabeans-convention",
      children: "2.3 JavaBeans Convention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JavaBean is a reusable software component that follows these conventions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The class is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), " and has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no-argument constructor"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Properties are accessed through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getXxx()"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setXxx()"
        }), " methods (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isXxx()"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The class implements ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.io.Serializable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.io.Serializable;\nimport java.util.Objects;\n\npublic class ProductBean implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private Long id;\n    private String name;\n    private double price;\n    private boolean active;\n\n    public ProductBean() {\n    }\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n\n    // Boolean getter uses \"is\" prefix\n    public boolean isActive() {\n        return active;\n    }\n\n    public void setActive(boolean active) {\n        this.active = active;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof ProductBean that)) return false;\n        return Double.compare(price, that.price) == 0\n            && active == that.active\n            && Objects.equals(id, that.id)\n            && Objects.equals(name, that.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name, price, active);\n    }\n\n    @Override\n    public String toString() {\n        return \"ProductBean{id=\" + id + \", name='\" + name + \"', price=\" + price + \"}\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot relies heavily on the JavaBeans convention for property binding, configuration classes, and dependency injection."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-inheritance",
      children: "3. Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inheritance models an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "is-a"
      }), " relationship. A subclass inherits fields and methods from its superclass and can add or override behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-the-extends-keyword",
      children: ["3.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extends"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Animal {\n    protected String species;\n    protected int age;\n\n    public Animal(String species, int age) {\n        this.species = species;\n        this.age = age;\n    }\n\n    public void eat() {\n        System.out.println(species + \" is eating\");\n    }\n\n    public void sleep() {\n        System.out.println(species + \" is sleeping\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Dog extends Animal {\n    private String breed;\n\n    public Dog(String breed, int age) {\n        super(\"Canis familiaris\", age);   // calls Animal(String, int)\n        this.breed = breed;\n    }\n\n    public void bark() {\n        System.out.println(breed + \" dog says: Woof!\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class InheritanceDemo {\n    public static void main(String[] args) {\n        Dog dog = new Dog(\"Labrador\", 3);\n        dog.eat();          // inherited from Animal\n        dog.sleep();        // inherited from Animal\n        dog.bark();         // defined in Dog\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-the-super-keyword",
      children: ["3.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "super"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "super"
      }), " refers to the immediate parent class. Use it to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call a parent constructor (", (0,jsx_runtime.jsx)(_components.code, {
          children: "super(...)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access a parent field or method that has been overridden"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Cat extends Animal {\n    private boolean isIndoor;\n\n    public Cat(boolean isIndoor, int age) {\n        super(\"Felis catus\", age);    // must be first statement\n        this.isIndoor = isIndoor;\n    }\n\n    @Override\n    public void eat() {\n        super.eat();                   // calls Animal's eat() first\n        System.out.println(\"...and purrs contentedly\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-method-overriding",
      children: "3.3 Method Overriding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A subclass can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "override"
      }), " a method from its superclass to provide a specialized implementation. The overriding method must have the same signature and a return type that is a subtype of the original (covariant return)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Vehicle {\n    protected String brand;\n    protected int year;\n\n    public Vehicle(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }\n\n    public String getInfo() {\n        return year + \" \" + brand;\n    }\n\n    public void start() {\n        System.out.println(\"Vehicle is starting...\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Car extends Vehicle {\n    private int doors;\n\n    public Car(String brand, int year, int doors) {\n        super(brand, year);\n        this.doors = doors;\n    }\n\n    @Override\n    public String getInfo() {\n        return super.getInfo() + \" (\" + doors + \"-door)\";\n    }\n\n    @Override\n    public void start() {\n        System.out.println(\"Insert key and turn ignition...\");\n        System.out.println(\"Engine started!\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "34-the-override-annotation",
      children: ["3.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Override"
      }), " Annotation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Override"
      }), " tells the compiler that the annotated method is meant to override a superclass method. The compiler will produce an error if no such method exists in the parent, catching typos and signature mismatches early."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Motorcycle extends Vehicle {\n    public Motorcycle(String brand, int year) {\n        super(brand, year);\n    }\n\n    // Compiler error: no such method in Vehicle\n    // @Override\n    // public void startEngine() { ... }\n\n    @Override\n    public void start() {\n        System.out.println(\"Kick-start the engine...\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "35-final-classes-and-methods",
      children: ["3.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " Classes and Methods"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " keyword prevents further inheritance or overriding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "final class"
        }), " cannot be subclassed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "final method"
        }), " cannot be overridden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class MathConstants {\n    public static final double PI = 3.141592653589793;\n\n    private MathConstants() {\n    }\n}\n\n// Compile error: cannot inherit from final class\n// class ExtendedMath extends MathConstants { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Parent {\n    public final void cannotOverride() {\n        System.out.println(\"This method is final\");\n    }\n\n    public void canOverride() {\n        System.out.println(\"This method can be overridden\");\n    }\n}\n\npublic class Child extends Parent {\n    // @Override\n    // public void cannotOverride() { }      // COMPILE ERROR\n\n    @Override\n    public void canOverride() {\n        System.out.println(\"Child provides its own version\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "36-protected-access-in-practice",
      children: ["3.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " Access in Practice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " modifier gives access to subclasses and same-package classes. This is the sweet spot for fields and helper methods that subclasses need but external callers should not see."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.shapes;\n\npublic class Shape {\n    protected String color;\n    protected double area;\n\n    protected void calculateArea() {\n        // subclasses will override\n    }\n\n    public void displayInfo() {\n        System.out.println(\"Color: \" + color + \", Area: \" + area);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.shapes;\n\npublic class Circle extends Shape {\n    private double radius;\n\n    public Circle(String color, double radius) {\n        this.color = color;           // protected field is accessible\n        this.radius = radius;\n        calculateArea();              // protected method is accessible\n    }\n\n    @Override\n    protected void calculateArea() {\n        this.area = Math.PI * radius * radius;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.app;\n\nimport com.example.shapes.Shape;\n\n//    Different package, not a subclass\n//    Shape s = new Shape();\n//    s.color = \"red\";                // COMPILE ERROR: protected not visible\n\npublic class ShapeUser {\n    public static void main(String[] args) {\n        Shape shape = new Circle(\"blue\", 5.0);\n        shape.displayInfo();           // public method works\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-polymorphism",
      children: "4. Polymorphism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Polymorphism means \"many forms.\" Java supports two kinds: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile-time"
      }), " (method overloading) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "runtime"
      }), " (method overriding)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-compile-time-polymorphism-overloading",
      children: "4.1 Compile-Time Polymorphism (Overloading)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler decides which overloaded method to call based on the argument types at compile time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MathUtils {\n\n    public static int square(int value) {\n        System.out.println(\"int version\");\n        return value * value;\n    }\n\n    public static double square(double value) {\n        System.out.println(\"double version\");\n        return value * value;\n    }\n\n    public static long square(long value) {\n        System.out.println(\"long version\");\n        return value * value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OverloadingDemo {\n    public static void main(String[] args) {\n        System.out.println(MathUtils.square(5));        // int version -> 25\n        System.out.println(MathUtils.square(5.0));      // double version -> 25.0\n        System.out.println(MathUtils.square(5L));       // long version -> 25\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overloading resolution follows a precise order: exact match → widening primitive conversion → autoboxing → varargs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OverloadResolution {\n    public void print(int a) {\n        System.out.println(\"int: \" + a);\n    }\n\n    public void print(long a) {\n        System.out.println(\"long: \" + a);\n    }\n\n    public void print(Integer a) {\n        System.out.println(\"Integer: \" + a);\n    }\n\n    public void print(int... a) {\n        System.out.println(\"varargs: \" + Arrays.toString(a));\n    }\n\n    public static void main(String[] args) {\n        OverloadResolution demo = new OverloadResolution();\n\n        demo.print(42);             // exact match -> \"int: 42\"\n        // demo.print(42L);         // exact match -> \"long: 42\"\n        // demo.print((Integer) 42); // exact match -> \"Integer: 42\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-runtime-polymorphism-overriding",
      children: "4.2 Runtime Polymorphism (Overriding)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JVM decides which overridden method to call based on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "runtime type"
      }), " of the object, not the compile-time type of the reference variable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Payment {\n    public void processPayment(double amount) {\n        System.out.println(\"Processing generic payment of $\" + amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class CreditCardPayment extends Payment {\n    @Override\n    public void processPayment(double amount) {\n        System.out.println(\"Processing credit card payment of $\" + amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PayPalPayment extends Payment {\n    @Override\n    public void processPayment(double amount) {\n        System.out.println(\"Processing PayPal payment of $\" + amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PolymorphismDemo {\n    public static void main(String[] args) {\n        Payment[] payments = {\n            new CreditCardPayment(),\n            new PayPalPayment(),\n            new Payment()\n        };\n\n        for (Payment p : payments) {\n            p.processPayment(100.0);           // runtime dispatch\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Processing credit card payment of $100.0\nProcessing PayPal payment of $100.0\nProcessing generic payment of $100.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Despite all three references being of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Payment[]"
      }), ", the JVM calls the actual object's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "processPayment"
      }), " method at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-covariant-return-types",
      children: "4.3 Covariant Return Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 5 introduced covariant return types: an overriding method may return a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subtype"
      }), " of the original return type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Animal {\n    public Animal reproduce() {\n        System.out.println(\"Animal reproduces\");\n        return new Animal();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Dog extends Animal {\n    @Override\n    public Dog reproduce() {            // covariant: Dog is a subtype of Animal\n        System.out.println(\"Dog has puppies\");\n        return new Dog();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class CovariantDemo {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        Dog puppy = (Dog) animal.reproduce();   // no cast needed in Java 5+? Actually still need here\n        // Actually with covariant return types:\n        Animal a = new Dog();\n        Dog d = a.reproduce();                  // ERROR: compile-time type is Animal\n        // Correct:\n        Animal result = a.reproduce();          // returns Dog at runtime\n        System.out.println(result.getClass().getSimpleName()); // Dog\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Covariant return types eliminate the need for explicit casting in the caller when the reference type matches the more specific return type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class CloneableExample implements Cloneable {\n    // Covariant return: narrow the return type\n    @Override\n    public CloneableExample clone() {\n        try {\n            return (CloneableExample) super.clone();\n        } catch (CloneNotSupportedException e) {\n            throw new AssertionError(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-abstract-classes",
      children: "5. Abstract Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract class"
      }), " is a class declared with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract"
      }), " modifier. It may contain abstract methods (without a body) and concrete methods. Abstract classes cannot be instantiated directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-abstract-methods-and-base-implementation",
      children: "5.1 Abstract Methods and Base Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Abstract classes are ideal when related classes share a common base but differ in specific behaviors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public abstract class Employee {\n    protected String name;\n    protected int id;\n\n    public Employee(String name, int id) {\n        this.name = name;\n        this.id = id;\n    }\n\n    // Concrete method: shared behavior\n    public void clockIn() {\n        System.out.println(name + \" clocked in at \" + java.time.LocalTime.now());\n    }\n\n    // Abstract method: subclasses must implement\n    public abstract double calculatePay();\n\n    // Concrete method with template pattern\n    public void printPayStub() {\n        System.out.println(\"=== Pay Stub ===\");\n        System.out.println(\"Employee: \" + name);\n        System.out.println(\"Pay: $\" + String.format(\"%.2f\", calculatePay()));\n        System.out.println(\"================\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SalariedEmployee extends Employee {\n    private double annualSalary;\n\n    public SalariedEmployee(String name, int id, double annualSalary) {\n        super(name, id);\n        this.annualSalary = annualSalary;\n    }\n\n    @Override\n    public double calculatePay() {\n        return annualSalary / 26.0;      // bi-weekly pay\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class HourlyEmployee extends Employee {\n    private double hourlyRate;\n    private double hoursWorked;\n\n    public HourlyEmployee(String name, int id, double hourlyRate) {\n        super(name, id);\n        this.hourlyRate = hourlyRate;\n    }\n\n    public void setHoursWorked(double hoursWorked) {\n        this.hoursWorked = hoursWorked;\n    }\n\n    @Override\n    public double calculatePay() {\n        return hourlyRate * hoursWorked;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class AbstractDemo {\n    public static void main(String[] args) {\n        // Employee e = new Employee(\"Test\", 0);    // COMPILE ERROR: abstract\n\n        SalariedEmployee salaried = new SalariedEmployee(\"Alice\", 101, 78000);\n        HourlyEmployee hourly = new HourlyEmployee(\"Bob\", 102, 35.0);\n        hourly.setHoursWorked(80.0);\n\n        salaried.printPayStub();\n        hourly.printPayStub();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-abstract-classes-vs-interfaces",
      children: "5.2 Abstract Classes vs. Interfaces"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be instantiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be instantiated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "abstract"
            }), " keyword required"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicitly abstract (pre-Java 8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have any concrete methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "default"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " methods (Java 8+)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance fields, any modifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public static final"
            }), " constants"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have constructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can hold state (fields)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot hold state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), " methods"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have final methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot have final methods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract class"
      }), " when classes share a common state or implementation. Choose an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interface"
      }), " when you want to define a capability that many unrelated classes can implement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Abstract class: shared state + behavior\npublic abstract class DatabaseRepository {\n    protected String connectionString;\n\n    public DatabaseRepository(String connectionString) {\n        this.connectionString = connectionString;\n    }\n\n    public void connect() {\n        System.out.println(\"Connecting to \" + connectionString);\n    }\n\n    public abstract void save(Object entity);\n    public abstract Object findById(long id);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Interface: capability contract\npublic interface Loggable {\n    void log(String message);\n\n    default void logInfo(String message) {\n        log(\"[INFO] \" + message);\n    }\n\n    default void logError(String message) {\n        log(\"[ERROR] \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UserRepository extends DatabaseRepository implements Loggable {\n    public UserRepository(String connectionString) {\n        super(connectionString);\n    }\n\n    @Override\n    public void save(Object entity) {\n        logInfo(\"Saving \" + entity);\n    }\n\n    @Override\n    public Object findById(long id) {\n        logInfo(\"Finding by id: \" + id);\n        return null;\n    }\n\n    @Override\n    public void log(String message) {\n        System.out.println(\"LOG: \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-interfaces",
      children: "6. Interfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interface"
      }), " is a reference type that defines a contract: a set of abstract method signatures that implementing classes must fulfill. Since Java 8, interfaces can also include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-basic-interface",
      children: "6.1 Basic Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Drawable {\n    void draw();          // implicitly public abstract\n\n    default void printInfo() {\n        System.out.println(\"This is a drawable object with area: \" + calculateArea());\n    }\n\n    static String getCanvasType() {\n        return \"2D Canvas\";\n    }\n\n    private void log(String msg) {\n        System.out.println(\"[Drawable] \" + msg);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-default-methods",
      children: "6.2 Default Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Default methods provide a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "default implementation"
      }), " that implementing classes can override. They allow interfaces to evolve without breaking existing implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Vehicle {\n    void start();\n    void stop();\n\n    default void honk() {\n        System.out.println(\"Beep beep!\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Bicycle implements Vehicle {\n    @Override\n    public void start() {\n        System.out.println(\"Pedaling...\");\n    }\n\n    @Override\n    public void stop() {\n        System.out.println(\"Applying brakes...\");\n    }\n\n    // honk() inherited with default behavior\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Car2 implements Vehicle {\n    @Override\n    public void start() {\n        System.out.println(\"Engine starting...\");\n    }\n\n    @Override\n    public void stop() {\n        System.out.println(\"Braking...\");\n    }\n\n    @Override\n    public void honk() {\n        System.out.println(\"HOOOONK!\");   // overrides default\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-static-methods",
      children: "6.3 Static Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static methods in interfaces behave like utility methods. They are not inherited by implementing classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface MathOperations {\n    double operate(double a, double b);\n\n    static MathOperations addition() {\n        return (a, b) -> a + b;\n    }\n\n    static MathOperations multiplication() {\n        return (a, b) -> a * b;\n    }\n\n    static MathOperations power() {\n        return (a, b) -> Math.pow(a, b);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class StaticMethodDemo {\n    public static void main(String[] args) {\n        MathOperations add = MathOperations.addition();\n        MathOperations multiply = MathOperations.multiplication();\n\n        System.out.println(add.operate(5, 3));       // 8.0\n        System.out.println(multiply.operate(5, 3));  // 15.0\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-private-methods",
      children: "6.4 Private Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Private methods in interfaces (Java 9+) extract shared code used by default methods without exposing it to implementing classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface DataProcessor {\n\n    default void processJson(String json) {\n        validate(json);\n        System.out.println(\"Processing JSON: \" + json);\n    }\n\n    default void processXml(String xml) {\n        validate(xml);\n        System.out.println(\"Processing XML: \" + xml);\n    }\n\n    private void validate(String data) {\n        if (data == null || data.isBlank()) {\n            throw new IllegalArgumentException(\"Data must not be blank\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-constants-in-interfaces",
      children: "6.5 Constants in Interfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every field in an interface is implicitly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public static final"
      }), ". Interfaces were historically used as constant holders, but this is now considered an anti-pattern→use an enum or a utility class instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface HttpStatusCodes {\n    int OK = 200;\n    int CREATED = 201;\n    int BAD_REQUEST = 400;\n    int UNAUTHORIZED = 401;\n    int FORBIDDEN = 403;\n    int NOT_FOUND = 404;\n    int INTERNAL_SERVER_ERROR = 500;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ConstantsDemo {\n    public static void main(String[] args) {\n        System.out.println(\"OK: \" + HttpStatusCodes.OK);\n        // HttpStatusCodes.OK = 201;     // COMPILE ERROR: final\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-multiple-inheritance-of-type",
      children: "6.6 Multiple Inheritance of Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A class can implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple interfaces"
      }), ", which enables multiple inheritance of type (but not of state)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Readable {\n    String read();\n}\n\npublic interface Writable {\n    void write(String content);\n}\n\npublic interface Storable {\n    void save();\n    void load();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Document implements Readable, Writable, Storable {\n    private StringBuilder content = new StringBuilder();\n\n    @Override\n    public String read() {\n        return content.toString();\n    }\n\n    @Override\n    public void write(String content) {\n        this.content.append(content);\n    }\n\n    @Override\n    public void save() {\n        System.out.println(\"Document saved\");\n    }\n\n    @Override\n    public void load() {\n        System.out.println(\"Document loaded\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-diamond-problem-resolution",
      children: "6.7 Diamond Problem Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When two interfaces define default methods with the same signature, the implementing class ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " resolve the conflict."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface A {\n    default void greet() {\n        System.out.println(\"Hello from A\");\n    }\n}\n\npublic interface B {\n    default void greet() {\n        System.out.println(\"Hello from B\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class C implements A, B {\n    @Override\n    public void greet() {               // mandatory override to resolve conflict\n        A.super.greet();                // can choose which parent to call\n        // B.super.greet();\n        System.out.println(\"Hello from C\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DiamondDemo {\n    public static void main(String[] args) {\n        new C().greet();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "68-functional-interfaces-and-functionalinterface",
      children: ["6.8 Functional Interfaces and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@FunctionalInterface"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "functional interface"
      }), " has exactly one abstract method. It can serve as the target type for lambda expressions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@FunctionalInterface\npublic interface Transformer<T, R> {\n    R transform(T input);\n}\n\n@FunctionalInterface\npublic interface StringProcessor {\n    String process(String input);\n\n    // default methods are allowed\n    default String processAndLog(String input) {\n        String result = process(input);\n        System.out.println(\"Processed: \" + result);\n        return result;\n    }\n\n    // static methods are allowed\n    static StringProcessor toUpperCase() {\n        return String::toUpperCase;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class FunctionalInterfaceDemo {\n    public static void main(String[] args) {\n        // Lambda implementing StringProcessor\n        StringProcessor reverser = input -> new StringBuilder(input).reverse().toString();\n\n        System.out.println(reverser.process(\"hello\"));         // olleh\n        System.out.println(reverser.processAndLog(\"world\"));   // dlrow (and logged)\n\n        // Method reference\n        StringProcessor upper = StringProcessor.toUpperCase();\n        System.out.println(upper.process(\"hello\"));            // HELLO\n\n        // Lambda as Transformer\n        Transformer<String, Integer> lengthCounter = s -> s.length();\n        System.out.println(lengthCounter.transform(\"Java\"));   // 4\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Common built-in functional interfaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Function<T, R>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "R apply(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms T to R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Predicate<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean test(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests a condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Consumer<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void accept(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumes a value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Supplier<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T get()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplies a value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UnaryOperator<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T apply(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T → T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BinaryOperator<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T apply(T, T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(T, T) → T"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-sealed-classes",
      children: "7. Sealed Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sealed classes"
      }), " (Java 17, previewed in 15) give you fine-grained control over inheritance. A sealed class or interface specifies exactly which classes or interfaces may extend or implement it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-basic-sealed-class",
      children: "7.1 Basic Sealed Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public abstract sealed class Shape\n    permits Circle, Rectangle, Triangle {\n\n    public abstract double area();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class Circle extends Shape {\n    private final double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    public double area() {\n        return Math.PI * radius * radius;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class Rectangle extends Shape {\n    private final double width;\n    private final double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    @Override\n    public double area() {\n        return width * height;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public non-sealed class Triangle extends Shape {\n    private final double base;\n    private final double height;\n\n    public Triangle(double base, double height) {\n        this.base = base;\n        this.height = height;\n    }\n\n    @Override\n    public double area() {\n        return 0.5 * base * height;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A permitted subclass must be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sealed"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "non-sealed"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-sealed-interface-hierarchy",
      children: "7.2 Sealed Interface Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interfaces can also be sealed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public sealed interface Command permits CreateUser, DeleteUser, UpdateUser {\n    void execute();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class CreateUser implements Command {\n    private final String username;\n\n    public CreateUser(String username) {\n        this.username = username;\n    }\n\n    @Override\n    public void execute() {\n        System.out.println(\"Creating user: \" + username);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class DeleteUser implements Command {\n    private final long userId;\n\n    public DeleteUser(long userId) {\n        this.userId = userId;\n    }\n\n    @Override\n    public void execute() {\n        System.out.println(\"Deleting user: \" + userId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class UpdateUser implements Command {\n    private final long userId;\n    private final String newName;\n\n    public UpdateUser(long userId, String newName) {\n        this.userId = userId;\n        this.newName = newName;\n    }\n\n    @Override\n    public void execute() {\n        System.out.println(\"Updating user \" + userId + \" to \" + newName);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "73-exhaustive-switch-with-sealed-classes",
      children: ["7.3 Exhaustive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " with Sealed Classes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you switch over a sealed type, the compiler can check that all permitted subtypes are covered."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SealedSwitchDemo {\n    public static String describeShape(Shape shape) {\n        return switch (shape) {\n            case Circle c      -> \"Circle with radius? Not directly accessible here\";\n            case Rectangle r   -> \"Rectangle \" + r.area() + \" sq units\";\n            case Triangle t    -> \"Triangle \" + t.area() + \" sq units\";\n        };\n    }\n\n    public static String describeCommand(Command cmd) {\n        return switch (cmd) {\n            case CreateUser cu -> \"CREATE: \" + cu;\n            case DeleteUser du -> \"DELETE: \" + du;\n            case UpdateUser uu -> \"UPDATE: \" + uu;\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exhaustive switch with sealed types eliminates the need for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default"
      }), " branch when all subtypes are covered→the compiler proves totality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SealedTotalDemo {\n    public static void main(String[] args) {\n        Shape s = new Circle(5.0);\n        System.out.println(describeShape(s));\n\n        Command c = new CreateUser(\"alice\");\n        System.out.println(describeCommand(c));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-records",
      children: "8. Records"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Records"
      }), " (Java 16, finalized) are transparent, immutable data carriers. A record automatically generates the constructor, getters, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hashCode"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toString"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-basic-record",
      children: "8.1 Basic Record"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Point(int x, int y) { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This single line produces:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A constructor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Point(int x, int y)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accessor methods ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y()"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getX()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "getY()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "equals(Object)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toString()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All fields are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private final"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class RecordDemo {\n    public static void main(String[] args) {\n        Point p1 = new Point(3, 4);\n        Point p2 = new Point(3, 4);\n        Point p3 = new Point(5, 6);\n\n        System.out.println(p1);              // Point[x=3, y=4]\n        System.out.println(p1.x());          // 3\n        System.out.println(p1.equals(p2));   // true\n        System.out.println(p1.equals(p3));   // false\n        System.out.println(p1.hashCode() == p2.hashCode()); // true\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-canonical-and-compact-constructors",
      children: "8.2 Canonical and Compact Constructors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical constructor"
      }), " has parameters matching all record components. You can also define a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compact constructor"
      }), " that omits the parameter list, useful for validation or normalization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Person(String name, int age) {\n\n    // Compact constructor: no parameter list needed\n    public Person {\n        if (age < 0) {\n            throw new IllegalArgumentException(\"Age cannot be negative: \" + age);\n        }\n        if (name == null || name.isBlank()) {\n            throw new IllegalArgumentException(\"Name cannot be blank\");\n        }\n        // The implicit assignment happens after this validation\n        // this.name = name;  // NOT needed → the compiler adds it\n    }\n\n    // Custom compact constructor logic: normalization\n    public record Email(String localPart, String domain) {\n        public Email {\n            localPart = localPart.toLowerCase().trim();\n            domain = domain.toLowerCase().trim();\n            if (!domain.contains(\".\")) {\n                throw new IllegalArgumentException(\"Invalid domain: \" + domain);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-custom-methods",
      children: "8.3 Custom Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Records can include instance and static methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record RGBColor(int red, int green, int blue) {\n\n    // validation\n    public RGBColor {\n        if (red < 0 || red > 255) throw new IllegalArgumentException(\"red out of range\");\n        if (green < 0 || green > 255) throw new IllegalArgumentException(\"green out of range\");\n        if (blue < 0 || blue > 255) throw new IllegalArgumentException(\"blue out of range\");\n    }\n\n    // Custom instance method\n    public String toHex() {\n        return String.format(\"#%02X%02X%02X\", red, green, blue);\n    }\n\n    // Custom instance method\n    public RGBColor brighter() {\n        int r = Math.min(255, red + 30);\n        int g = Math.min(255, green + 30);\n        int b = Math.min(255, blue + 30);\n        return new RGBColor(r, g, b);\n    }\n\n    // Static factory method\n    public static RGBColor fromHex(String hex) {\n        if (hex == null || hex.length() != 7 || !hex.startsWith(\"#\")) {\n            throw new IllegalArgumentException(\"Invalid hex color: \" + hex);\n        }\n        int r = Integer.parseInt(hex.substring(1, 3), 16);\n        int g = Integer.parseInt(hex.substring(3, 5), 16);\n        int b = Integer.parseInt(hex.substring(5, 7), 16);\n        return new RGBColor(r, g, b);\n    }\n\n    // Predefined constants\n    public static final RGBColor WHITE = new RGBColor(255, 255, 255);\n    public static final RGBColor BLACK = new RGBColor(0, 0, 0);\n    public static final RGBColor RED = new RGBColor(255, 0, 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class RecordMethodsDemo {\n    public static void main(String[] args) {\n        RGBColor color = new RGBColor(100, 150, 200);\n        System.out.println(color.toHex());                    // #6496C8\n\n        RGBColor brighter = color.brighter();\n        System.out.println(brighter.toHex());                 // #82BEE6\n\n        RGBColor parsed = RGBColor.fromHex(\"#FF5733\");\n        System.out.println(parsed);                           // RGBColor[red=255, green=87, blue=51]\n\n        System.out.println(RGBColor.WHITE.toHex());           // #FFFFFF\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-records-with-pattern-matching",
      children: "8.4 Records with Pattern Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 21 enhanced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pattern matching for records"
      }), ", allowing destructuring of record components directly in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "case"
      }), " labels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public sealed interface Expression permits Constant, Add, Multiply {\n    int evaluate();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Constant(int value) implements Expression {\n    @Override\n    public int evaluate() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Add(Expression left, Expression right) implements Expression {\n    @Override\n    public int evaluate() {\n        return left.evaluate() + right.evaluate();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Multiply(Expression left, Expression right) implements Expression {\n    @Override\n    public int evaluate() {\n        return left.evaluate() * right.evaluate();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PatternMatchingDemo {\n    public static void main(String[] args) {\n        // Expression: (2 + 3) * (4 + 1)\n        Expression expr = new Multiply(\n            new Add(new Constant(2), new Constant(3)),\n            new Add(new Constant(4), new Constant(1))\n        );\n        System.out.println(\"Result: \" + expr.evaluate());     // Result: 25\n    }\n\n    // Pattern matching with record deconstruction\n    public static String describe(Expression e) {\n        return switch (e) {\n            case Constant(var v)         -> \"Constant(\" + v + \")\";\n            case Add(var l, var r)       -> \"Add(\" + describe(l) + \", \" + describe(r) + \")\";\n            case Multiply(var l, var r)  -> \"Multiply(\" + describe(l) + \", \" + describe(r) + \")\";\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-enums",
      children: "9. Enums"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enum"
      }), " (enumeration) defines a fixed set of named constants. Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), " is much more powerful than in most languages→it's a full-fledged class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-basic-enum",
      children: "9.1 Basic Enum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum Day {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EnumBasicDemo {\n    public static void main(String[] args) {\n        Day today = Day.WEDNESDAY;\n\n        System.out.println(today);                // WEDNESDAY\n        System.out.println(today.ordinal());      // 2\n        System.out.println(today.name());         // WEDNESDAY\n\n        // Iterate all values\n        for (Day day : Day.values()) {\n            System.out.println(day + \" (\" + day.ordinal() + \")\");\n        }\n\n        // Parse from string\n        Day parsed = Day.valueOf(\"MONDAY\");\n        System.out.println(parsed);               // MONDAY\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-enum-with-fields-constructors-and-methods",
      children: "9.2 Enum with Fields, Constructors, and Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum Planet {\n    MERCURY(3.303e23, 2.4397e6),\n    VENUS(4.869e24, 6.0518e6),\n    EARTH(5.976e24, 6.37814e6),\n    MARS(6.421e23, 3.3972e6),\n    JUPITER(1.9e27, 7.1492e7),\n    SATURN(5.688e26, 6.0268e7),\n    URANUS(8.686e25, 2.5559e7),\n    NEPTUNE(1.024e26, 2.4746e7);\n\n    private final double mass;       // in kilograms\n    private final double radius;     // in meters\n\n    Planet(double mass, double radius) {\n        this.mass = mass;\n        this.radius = radius;\n    }\n\n    public double mass() {\n        return mass;\n    }\n\n    public double radius() {\n        return radius;\n    }\n\n    // Universal gravitational constant (m^3 kg^-1 s^-2)\n    public static final double G = 6.67430e-11;\n\n    public double surfaceGravity() {\n        return G * mass / (radius * radius);\n    }\n\n    public double surfaceWeight(double otherMass) {\n        return otherMass * surfaceGravity();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EnumPlanetDemo {\n    public static void main(String[] args) {\n        double earthWeight = 70.0;  // 70 kg on Earth\n        double mass = earthWeight / Planet.EARTH.surfaceGravity();\n\n        for (Planet p : Planet.values()) {\n            System.out.printf(\"Weight on %s: %.2f kg%n\", p, p.surfaceWeight(mass));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-enum-specific-body",
      children: "9.3 Enum-Specific Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each enum constant can have its own method implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum Operation {\n    PLUS {\n        @Override\n        public double apply(double x, double y) {\n            return x + y;\n        }\n    },\n    MINUS {\n        @Override\n        public double apply(double x, double y) {\n            return x - y;\n        }\n    },\n    TIMES {\n        @Override\n        public double apply(double x, double y) {\n            return x * y;\n        }\n    },\n    DIVIDE {\n        @Override\n        public double apply(double x, double y) {\n            if (y == 0) throw new ArithmeticException(\"Division by zero\");\n            return x / y;\n        }\n    };\n\n    public abstract double apply(double x, double y);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EnumOperationDemo {\n    public static void main(String[] args) {\n        double x = 10.0;\n        double y = 3.0;\n\n        for (Operation op : Operation.values()) {\n            System.out.printf(\"%.1f %s %.1f = %.1f%n\",\n                x, op.name(), y, op.apply(x, y));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10.0 PLUS 3.0 = 13.0\n10.0 MINUS 3.0 = 7.0\n10.0 TIMES 3.0 = 30.0\n10.0 DIVIDE 3.0 = 3.3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-enummap",
      children: "9.4 EnumMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EnumMap"
      }), " is a highly efficient ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map"
      }), " implementation specialized for enum keys. It uses an array internally and performs better than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), " with enum keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.EnumMap;\nimport java.util.Map;\n\npublic class EnumMapDemo {\n    public static void main(String[] args) {\n        EnumMap<Day, String> schedule = new EnumMap<>(Day.class);\n\n        schedule.put(Day.MONDAY, \"Gym at 6 AM\");\n        schedule.put(Day.WEDNESDAY, \"Team standup at 10 AM\");\n        schedule.put(Day.FRIDAY, \"Weekly review at 3 PM\");\n\n        for (Map.Entry<Day, String> entry : schedule.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n\n        // Access\n        System.out.println(\"Wednesday: \" + schedule.get(Day.WEDNESDAY));\n\n        // Null check\n        System.out.println(\"Has Saturday? \" + schedule.containsKey(Day.SATURDAY));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-enumset",
      children: "9.5 EnumSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EnumSet"
      }), " is a high-performance ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set"
      }), " implementation for enum elements, backed by bit vectors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.EnumSet;\n\npublic class EnumSetDemo {\n    public static void main(String[] args) {\n        // All days\n        EnumSet<Day> allDays = EnumSet.allOf(Day.class);\n        System.out.println(\"All days: \" + allDays);\n\n        // Weekdays\n        EnumSet<Day> weekdays = EnumSet.range(Day.MONDAY, Day.FRIDAY);\n        System.out.println(\"Weekdays: \" + weekdays);\n\n        // Weekend\n        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);\n        System.out.println(\"Weekend: \" + weekend);\n\n        // Complement: weekend from weekdays\n        EnumSet<Day> notWeekend = EnumSet.complementOf(weekend);\n        System.out.println(\"Not weekend: \" + notWeekend);\n\n        // Operations\n        EnumSet<Day> workFromHome = EnumSet.of(Day.MONDAY, Day.FRIDAY);\n        EnumSet<Day> officeDays = EnumSet.copyOf(weekdays);\n        officeDays.removeAll(workFromHome);\n        System.out.println(\"Office days: \" + officeDays);\n\n        // Practical: working days check\n        Day today = Day.WEDNESDAY;\n        if (weekend.contains(today)) {\n            System.out.println(\"It's the weekend!\");\n        } else {\n            System.out.println(\"Time to work.\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-annotations",
      children: "10. Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Annotations provide metadata about code. They can influence compilation, generate code, or be read at runtime via reflection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-built-in-standard-annotations",
      children: "10.1 Built-In Standard Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@Override"
        })
      }), " → ensures a method overrides a superclass or interface method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OverrideExample {\n    @Override\n    public String toString() {\n        return \"OverrideExample instance\";\n    }\n\n    // @Override\n    // public boolean equals(Object o) {  // typo: equals -> equals would fail\n    //     return true;\n    // }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@Deprecated"
        })
      }), " → marks an element as obsolete, causing a compiler warning when used."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DeprecatedExample {\n\n    /**\n     * @deprecated Use {@link #newMethod()} instead\n     */\n    @Deprecated(since = \"2.0\", forRemoval = true)\n    public void oldMethod() {\n        System.out.println(\"This is deprecated\");\n    }\n\n    public void newMethod() {\n        System.out.println(\"Use this instead\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DeprecatedUsageDemo {\n    public static void main(String[] args) {\n        DeprecatedExample ex = new DeprecatedExample();\n        // ex.oldMethod();   // Compiler warning: marked as deprecated\n        ex.newMethod();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@SuppressWarnings"
        })
      }), " → tells the compiler to suppress specific warnings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.ArrayList;\n\npublic class SuppressWarningsDemo {\n\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T unsafeCast(Object obj) {\n        return (T) obj;                       // normally a warning\n    }\n\n    @SuppressWarnings({\"rawtypes\", \"unchecked\"})\n    public static void useRawType() {\n        ArrayList list = new ArrayList();     // raw type warning suppressed\n        list.add(\"hello\");\n        list.add(42);\n\n        for (Object item : list) {\n            System.out.println(item);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@FunctionalInterface"
        })
      }), " → indicates an interface is intended to be functional (one abstract method). The compiler enforces this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@FunctionalInterface\npublic interface SimpleAction {\n    void execute();\n\n    // boolean equals(Object obj);  // OK: Object methods don't count\n    // void doOther();              // COMPILE ERROR: second abstract method\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@SafeVarargs"
        })
      }), " → suppresses heap pollution warnings on varargs with generic types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\nimport java.util.List;\n\npublic class SafeVarargsDemo {\n\n    @SafeVarargs\n    public static <T> List<T> flatten(List<? extends T>... lists) {\n        // @SafeVarargs asserts the method doesn't do anything unsafe with the varargs\n        return Arrays.stream(lists)\n                     .flatMap(List::stream)\n                     .toList();\n    }\n\n    public static void main(String[] args) {\n        List<String> a = List.of(\"a\", \"b\");\n        List<String> b = List.of(\"c\", \"d\");\n\n        List<String> result = flatten(a, b);\n        System.out.println(result);   // [a, b, c, d]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-custom-annotations",
      children: "10.2 Custom Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can define your own annotations using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.*;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface LogExecution {\n    String value() default \"INFO\";\n    boolean includeArgs() default false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface TableName {\n    String value();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.FIELD)\npublic @interface Column {\n    String name();\n    boolean primaryKey() default false;\n    boolean nullable() default true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-processing-annotations-at-runtime",
      children: "10.3 Processing Annotations at Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.Field;\nimport java.lang.reflect.Method;\n\npublic class AnnotationProcessor {\n\n    public static void processEntity(Object entity) {\n        Class<?> clazz = entity.getClass();\n\n        // Class-level annotation\n        TableName table = clazz.getAnnotation(TableName.class);\n        if (table != null) {\n            System.out.println(\"Table: \" + table.value());\n        }\n\n        // Field-level annotations\n        for (Field field : clazz.getDeclaredFields()) {\n            Column column = field.getAnnotation(Column.class);\n            if (column != null) {\n                field.setAccessible(true);\n                try {\n                    Object value = field.get(entity);\n                    System.out.printf(\"  Column: %s (pk=%b, nullable=%b) = %s%n\",\n                        column.name(), column.primaryKey(), column.nullable(), value);\n                } catch (IllegalAccessException e) {\n                    System.out.println(\"  Cannot access field: \" + field.getName());\n                }\n            }\n        }\n\n        // Method-level annotations\n        for (Method method : clazz.getDeclaredMethods()) {\n            LogExecution logExec = method.getAnnotation(LogExecution.class);\n            if (logExec != null) {\n                System.out.printf(\"  Method @LogExecution(level=%s, includeArgs=%b)%n\",\n                    logExec.value(), logExec.includeArgs());\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@TableName(\"users\")\npublic class UserEntity {\n\n    @Column(name = \"user_id\", primaryKey = true)\n    private Long id;\n\n    @Column(name = \"username\", nullable = false)\n    private String username;\n\n    @Column(name = \"email\")\n    private String email;\n\n    public UserEntity(Long id, String username, String email) {\n        this.id = id;\n        this.username = username;\n        this.email = email;\n    }\n\n    @LogExecution(value = \"DEBUG\", includeArgs = true)\n    public void updateEmail(String newEmail) {\n        this.email = newEmail;\n    }\n\n    @LogExecution(\"INFO\")\n    public String getUsername() {\n        return username;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class AnnotationProcessingDemo {\n    public static void main(String[] args) {\n        UserEntity user = new UserEntity(1L, \"alice\", \"alice@example.com\");\n        AnnotationProcessor.processEntity(user);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Table: users\n  Column: user_id (pk=true, nullable=true) = 1\n  Column: username (pk=false, nullable=false) = alice\n  Column: email (pk=false, nullable=true) = alice@example.com\n  Method @LogExecution(level=DEBUG, includeArgs=true)\n  Method @LogExecution(level=INFO, includeArgs=false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-nested-classes",
      children: "11. Nested Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nested class"
      }), " is a class defined inside another class. There are four categories: static nested, inner (member), local, and anonymous classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-static-nested-class",
      children: "11.1 Static Nested Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A static nested class behaves like a top-level class but is scoped within the enclosing class. It does not have access to instance members of the enclosing class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class University {\n    private String name;\n    private String location;\n\n    public University(String name, String location) {\n        this.name = name;\n        this.location = location;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    // Static nested class\n    public static class Department {\n        private String deptName;\n        private String headProfessor;\n\n        public Department(String deptName, String headProfessor) {\n            this.deptName = deptName;\n            this.headProfessor = headProfessor;\n        }\n\n        public String getDeptName() {\n            return deptName;\n        }\n\n        public String getHeadProfessor() {\n            return headProfessor;\n        }\n\n        public void display() {\n            System.out.println(\"Department: \" + deptName + \" (Head: \" + headProfessor + \")\");\n            // System.out.println(name);    // COMPILE ERROR: cannot access enclosing instance\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class StaticNestedDemo {\n    public static void main(String[] args) {\n        // Static nested class does not need enclosing instance\n        University.Department cs = new University.Department(\"Computer Science\", \"Dr. Smith\");\n        cs.display();\n\n        // Grouping: create department objects without owning a University\n        University.Department[] depts = {\n            new University.Department(\"Mathematics\", \"Dr. Jones\"),\n            new University.Department(\"Physics\", \"Dr. Lee\")\n        };\n\n        for (University.Department d : depts) {\n            d.display();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-inner-class-member-class",
      children: "11.2 Inner Class (Member Class)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inner class"
      }), " is associated with an instance of the enclosing class. It can access all members (including private) of the enclosing instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Library {\n    private String libraryName;\n    private Book[] books;\n    private int bookCount;\n\n    public Library(String libraryName, int capacity) {\n        this.libraryName = libraryName;\n        this.books = new Book[capacity];\n        this.bookCount = 0;\n    }\n\n    public void addBook(String title, String author, String isbn) {\n        if (bookCount < books.length) {\n            books[bookCount++] = new Book(title, author, isbn);\n        }\n    }\n\n    // Inner class: each Book belongs to a Library instance\n    public class Book {\n        private String title;\n        private String author;\n        private String isbn;\n\n        public Book(String title, String author, String isbn) {\n            this.title = title;\n            this.author = author;\n            this.isbn = isbn;\n        }\n\n        public String getTitle() {\n            return title;\n        }\n\n        public String getLibraryName() {\n            return libraryName;    // accesses enclosing instance field\n        }\n\n        public void display() {\n            System.out.println(title + \" by \" + author + \" [\" + isbn + \"]\");\n            System.out.println(\"  Located at: \" + libraryName + \" library\");\n        }\n    }\n\n    public void listBooks() {\n        for (int i = 0; i < bookCount; i++) {\n            books[i].display();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class InnerClassDemo {\n    public static void main(String[] args) {\n        Library library = new Library(\"Central Library\", 10);\n        library.addBook(\"Effective Java\", \"Joshua Bloch\", \"978-0-13-468599-1\");\n        library.addBook(\"Clean Code\", \"Robert C. Martin\", \"978-0-13-235088-4\");\n\n        library.listBooks();\n\n        // Creating an inner class instance from outside\n        // Library.Book book = library.new Book(\"Design Patterns\", \"Gang of Four\", \"978-0-201-63361-0\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-local-class",
      children: "11.3 Local Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local class"
      }), " is defined inside a block (typically a method body). It is scoped to that block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.ArrayList;\nimport java.util.List;\n\npublic class LocalClassDemo {\n\n    public static List<String> filterStrings(String[] inputs, String prefix) {\n        // Local class inside method\n        class StringFilter {\n            private final String pfx;\n\n            StringFilter(String pfx) {\n                this.pfx = pfx;\n            }\n\n            boolean matches(String s) {\n                return s != null && s.startsWith(pfx);\n            }\n        }\n\n        StringFilter filter = new StringFilter(prefix);\n        List<String> result = new ArrayList<>();\n\n        for (String s : inputs) {\n            if (filter.matches(s)) {\n                result.add(s);\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        String[] words = {\"apple\", \"banana\", \"apricot\", \"cherry\", \"avocado\"};\n        List<String> filtered = filterStrings(words, \"ap\");\n        System.out.println(filtered);    // [apple, apricot]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-anonymous-class",
      children: "11.4 Anonymous Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anonymous class"
      }), " is a class defined and instantiated in a single expression. It is useful for one-off implementations of interfaces or abstract classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Comparator;\n\npublic class AnonymousClassDemo {\n\n    public static void main(String[] args) {\n        // Anonymous class implementing an interface\n        Runnable task = new Runnable() {\n            @Override\n            public void run() {\n                System.out.println(\"Running in anonymous class\");\n            }\n        };\n        new Thread(task).start();\n\n        // Anonymous class extending a class\n        Object customized = new Object() {\n            @Override\n            public String toString() {\n                return \"Customized object\";\n            }\n        };\n        System.out.println(customized);\n\n        // Anonymous class as a Comparator\n        Comparator<String> lengthComparator = new Comparator<>() {\n            @Override\n            public int compare(String a, String b) {\n                return Integer.compare(a.length(), b.length());\n            }\n        };\n\n        String[] names = {\"Alice\", \"Bob\", \"Christopher\", \"Eve\"};\n        java.util.Arrays.sort(names, lengthComparator);\n        System.out.println(java.util.Arrays.toString(names));\n        // [Bob, Eve, Alice, Christopher]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-anonymous-class-vs-lambda",
      children: "11.5 Anonymous Class vs. Lambda"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Functional interfaces can be implemented with either anonymous classes or lambdas. Lambdas are more concise and are not compiled to separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".class"
      }), " files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.Predicate;\n\npublic class LambdaVsAnonymous {\n\n    public static void main(String[] args) {\n        // Anonymous class\n        Predicate<String> anonymousPredicate = new Predicate<>() {\n            @Override\n            public boolean test(String s) {\n                return s != null && s.length() > 5;\n            }\n        };\n\n        // Lambda (equivalent)\n        Predicate<String> lambdaPredicate = s -> s != null && s.length() > 5;\n\n        // Lambda with method reference\n        Predicate<String> nonNullPredicate = java.util.Objects::nonNull;\n\n        System.out.println(anonymousPredicate.test(\"Hello World\"));  // true\n        System.out.println(lambdaPredicate.test(\"Hi\"));              // false\n        System.out.println(nonNullPredicate.test(null));             // false\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lambda differences from anonymous classes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " in a lambda refers to the enclosing class, not the lambda itself."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambdas cannot declare new fields or instance variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambdas cannot have multiple abstract methods (they are tied to functional interfaces)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambdas capture effectively-final variables; anonymous classes require effectively-final (Java 8+) or explicitly final fields assigned in the constructor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-equals-hashcode-tostring-and-clone",
      children: "12. equals, hashCode, toString, and clone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "121-the-equalshashcode-contract",
      children: ["12.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "hashCode"
      }), " Contract"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The contract defined by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.Object"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.equals(b)"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.hashCode() == b.hashCode()"
        }), " (consistency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.hashCode() == b.hashCode()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a.equals(b)"
        }), " may be true or false (collisions allowed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), " must return the same value across multiple invocations if the object hasn't changed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a class overrides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals"
        }), ", it ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), " to maintain the contract."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Violating this contract breaks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashSet"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), ", and all hash-based collections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Objects;\n\npublic final class Money {\n    private final String currency;\n    private final long amount;          // in smallest unit (cents)\n\n    public Money(String currency, long amount) {\n        this.currency = Objects.requireNonNull(currency);\n        this.amount = amount;\n    }\n\n    public String currency() {\n        return currency;\n    }\n\n    public long amount() {\n        return amount;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Money money)) return false;\n        return amount == money.amount && currency.equals(money.currency);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(currency, amount);\n    }\n\n    @Override\n    public String toString() {\n        return String.format(\"%s %.2f\", currency, amount / 100.0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EqualsDemo {\n    public static void main(String[] args) {\n        Money a = new Money(\"USD\", 1000);      // $10.00\n        Money b = new Money(\"USD\", 1000);      // $10.00\n        Money c = new Money(\"EUR\", 1000);      // EUR 10.00\n\n        System.out.println(a.equals(b));        // true\n        System.out.println(a.equals(c));        // false\n        System.out.println(a.hashCode() == b.hashCode()); // true\n\n        // Works correctly in hash collections\n        java.util.Set<Money> wallet = new java.util.HashSet<>();\n        wallet.add(a);\n        wallet.add(b);          // duplicate (equals), not added\n        wallet.add(c);\n\n        System.out.println(wallet.size());      // 2\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "122-best-practices-for-equals",
      children: ["12.2 Best Practices for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "instanceof"
        }), " pattern (Java 16+) for type check + cast in one step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this == o"
        }), " for identity optimization."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare all significant fields."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For floating-point, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Double.compare"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Float.compare"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For arrays, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Arrays.equals"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For null-safe comparisons, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Objects.equals"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\nimport java.util.Objects;\n\npublic final class ComplexNumber {\n    private final double real;\n    private final double imaginary;\n\n    public ComplexNumber(double real, double imaginary) {\n        this.real = real;\n        this.imaginary = imaginary;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof ComplexNumber that)) return false;\n        return Double.compare(real, that.real) == 0\n            && Double.compare(imaginary, that.imaginary) == 0;\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(real, imaginary);\n    }\n\n    @Override\n    public String toString() {\n        return real + \" + \" + imaginary + \"i\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "123-tostring",
      children: ["12.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toString"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "toString"
      }), " should return a concise, informative representation. For value objects, include all significant fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.StringJoiner;\n\npublic class Address {\n    private String street;\n    private String city;\n    private String zipCode;\n    private String country;\n\n    public Address(String street, String city, String zipCode, String country) {\n        this.street = street;\n        this.city = city;\n        this.zipCode = zipCode;\n        this.country = country;\n    }\n\n    // Getters omitted for brevity\n\n    @Override\n    public String toString() {\n        return new StringJoiner(\", \", Address.class.getSimpleName() + \"[\", \"]\")\n            .add(\"street='\" + street + \"'\")\n            .add(\"city='\" + city + \"'\")\n            .add(\"zipCode='\" + zipCode + \"'\")\n            .add(\"country='\" + country + \"'\")\n            .toString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many build tools (Lombok) and IDEs generate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toString"
      }), " automatically. Records provide it automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "124-clone",
      children: ["12.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "clone"
      }), " is problematic and rarely used in modern Java. It is protected on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Object"
      }), ", and to make it public you must implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cloneable"
      }), " and override ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EmployeeRecord implements Cloneable {\n    private String name;\n    private double salary;\n    private String[] skills;\n\n    public EmployeeRecord(String name, double salary, String[] skills) {\n        this.name = name;\n        this.salary = salary;\n        this.skills = skills;\n    }\n\n    // Shallow clone → primitive fields are copied, reference fields share references\n    @Override\n    public EmployeeRecord clone() {\n        try {\n            return (EmployeeRecord) super.clone();\n        } catch (CloneNotSupportedException e) {\n            throw new AssertionError(e);  // cannot happen since we implement Cloneable\n        }\n    }\n\n    // Deep clone → also clone mutable referenced objects\n    public EmployeeRecord deepClone() {\n        String[] clonedSkills = this.skills.clone();  // array clone\n        return new EmployeeRecord(this.name, this.salary, clonedSkills);\n    }\n\n    public void setSkill(int index, String skill) {\n        if (index >= 0 && index < skills.length) {\n            skills[index] = skill;\n        }\n    }\n\n    public String[] getSkills() {\n        return skills;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" ($\" + salary + \") skills=\" + Arrays.toString(skills);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class CloneDemo {\n    public static void main(String[] args) {\n        String[] skills = {\"Java\", \"Spring\"};\n        EmployeeRecord original = new EmployeeRecord(\"Alice\", 85000, skills);\n\n        // Shallow clone\n        EmployeeRecord shallow = original.clone();\n        shallow.setSkill(0, \"Python\");\n        System.out.println(\"Original: \" + original);    // skills[0] also changed to Python!\n        System.out.println(\"Shallow:  \" + shallow);\n\n        // Deep clone (reset for demo)\n        String[] skills2 = {\"Java\", \"Spring\"};\n        EmployeeRecord original2 = new EmployeeRecord(\"Bob\", 90000, skills2);\n        EmployeeRecord deep = original2.deepClone();\n        deep.setSkill(0, \"Kotlin\");\n        System.out.println(\"Original: \" + original2);    // still Java\n        System.out.println(\"Deep:     \" + deep);          // Kotlin\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern recommendation"
      }), ": For copy semantics, prefer copy constructors, factory methods, or records. Avoid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cloneable"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Person {\n    private final String name;\n    private final int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Copy constructor → preferred over clone\n    public Person(Person other) {\n        this(other.name, other.age);\n    }\n\n    // Static factory copy\n    public static Person copyOf(Person other) {\n        return new Person(other.name, other.age);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-complete-integration-example",
      children: "13. Complete Integration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section ties together all OOP concepts into a single, realistic domain model: a library management system."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.time.LocalDate;\nimport java.time.temporal.ChronoUnit;\nimport java.util.*;\n\n// ===================== ENUMS =====================\n\npublic enum BookStatus {\n    AVAILABLE,\n    CHECKED_OUT,\n    RESERVED,\n    DAMAGED,\n    LOST;\n\n    public boolean isAvailable() {\n        return this == AVAILABLE;\n    }\n}\n\npublic enum MembershipLevel {\n    BASIC(5, 14),\n    PREMIUM(20, 30),\n    VIP(50, 60);\n\n    private final int maxBorrowLimit;\n    private final int loanDurationDays;\n\n    MembershipLevel(int maxBorrowLimit, int loanDurationDays) {\n        this.maxBorrowLimit = maxBorrowLimit;\n        this.loanDurationDays = loanDurationDays;\n    }\n\n    public int maxBorrowLimit() {\n        return maxBorrowLimit;\n    }\n\n    public int loanDurationDays() {\n        return loanDurationDays;\n    }\n}\n\n// ===================== RECORDS =====================\n\npublic record ISBN(String value) {\n    public ISBN {\n        if (value == null || !value.matches(\"\\\\d{13}\")) {\n            throw new IllegalArgumentException(\"ISBN must be 13 digits: \" + value);\n        }\n    }\n\n    public String formatted() {\n        return value.substring(0, 3) + \"-\" +\n               value.substring(3, 4) + \"-\" +\n               value.substring(4, 7) + \"-\" +\n               value.substring(7, 12) + \"-\" +\n               value.substring(12);\n    }\n}\n\npublic record LoanRecord(ISBN isbn, String memberId, LocalDate borrowDate, LocalDate dueDate) {\n\n    public long daysOverdue() {\n        LocalDate today = LocalDate.now();\n        return today.isAfter(dueDate) ? ChronoUnit.DAYS.between(dueDate, today) : 0;\n    }\n\n    public boolean isOverdue() {\n        return daysOverdue() > 0;\n    }\n}\n\n// ===================== ABSTRACT CLASS =====================\n\npublic abstract class LibraryEntity {\n    protected final String id;\n    protected final LocalDate createdDate;\n    protected LocalDate lastModifiedDate;\n\n    protected LibraryEntity(String id) {\n        this.id = Objects.requireNonNull(id);\n        this.createdDate = LocalDate.now();\n        this.lastModifiedDate = this.createdDate;\n    }\n\n    public String id() {\n        return id;\n    }\n\n    public LocalDate createdDate() {\n        return createdDate;\n    }\n\n    public LocalDate lastModifiedDate() {\n        return lastModifiedDate;\n    }\n\n    public abstract String getDisplayName();\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof LibraryEntity that)) return false;\n        return id.equals(that.id);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id);\n    }\n\n    @Override\n    public String toString() {\n        return getClass().getSimpleName() + \"[id=\" + id + \"]\";\n    }\n}\n\n// ===================== INTERFACES =====================\n\npublic interface Searchable {\n    boolean matches(String query);\n}\n\npublic interface Categorizable {\n    String getCategory();\n    void setCategory(String category);\n}\n\n// ===================== CONCRETE CLASS =====================\n\npublic final class Book extends LibraryEntity implements Searchable, Categorizable, Comparable<Book> {\n    private String title;\n    private String author;\n    private ISBN isbn;\n    private BookStatus status;\n    private String category;\n    private final Set<String> tags;\n\n    public Book(String id, String title, String author, ISBN isbn) {\n        super(id);\n        this.title = Objects.requireNonNull(title);\n        this.author = Objects.requireNonNull(author);\n        this.isbn = Objects.requireNonNull(isbn);\n        this.status = BookStatus.AVAILABLE;\n        this.tags = new HashSet<>();\n    }\n\n    // ===== Getters/Setters (encapsulation) =====\n\n    public String title() {\n        return title;\n    }\n\n    public void rename(String title) {\n        this.title = Objects.requireNonNull(title);\n        this.lastModifiedDate = LocalDate.now();\n    }\n\n    public String author() {\n        return author;\n    }\n\n    public ISBN isbn() {\n        return isbn;\n    }\n\n    public BookStatus status() {\n        return status;\n    }\n\n    public void setStatus(BookStatus status) {\n        this.status = Objects.requireNonNull(status);\n        this.lastModifiedDate = LocalDate.now();\n    }\n\n    public Set<String> tags() {\n        return Collections.unmodifiableSet(tags);\n    }\n\n    public void addTag(String tag) {\n        tags.add(Objects.requireNonNull(tag));\n    }\n\n    // ===== Interface implementations =====\n\n    @Override\n    public String getDisplayName() {\n        return title + \" by \" + author;\n    }\n\n    @Override\n    public boolean matches(String query) {\n        if (query == null || query.isBlank()) return false;\n        String q = query.toLowerCase();\n        return title.toLowerCase().contains(q)\n            || author.toLowerCase().contains(q)\n            || isbn.value().contains(q)\n            || tags.stream().anyMatch(t -> t.toLowerCase().contains(q));\n    }\n\n    @Override\n    public String getCategory() {\n        return category;\n    }\n\n    @Override\n    public void setCategory(String category) {\n        this.category = category;\n        this.lastModifiedDate = LocalDate.now();\n    }\n\n    // ===== Comparable =====\n\n    @Override\n    public int compareTo(Book other) {\n        int titleCmp = this.title.compareToIgnoreCase(other.title);\n        return titleCmp != 0 ? titleCmp : this.author.compareToIgnoreCase(other.author);\n    }\n\n    @Override\n    public String toString() {\n        return \"Book{\" + \"id='\" + id + \"', title='\" + title + \"', author='\" + author\n            + \"', isbn=\" + isbn + \", status=\" + status + '}';\n    }\n}\n\n// ===================== SEALED CLASS HIERARCHY =====================\n\npublic sealed abstract class Membership permits BasicMembership, PremiumMembership, VipMembership {\n\n    protected final String memberId;\n    protected final MembershipLevel level;\n\n    protected Membership(String memberId, MembershipLevel level) {\n        this.memberId = memberId;\n        this.level = level;\n    }\n\n    public String memberId() {\n        return memberId;\n    }\n\n    public MembershipLevel level() {\n        return level;\n    }\n\n    public abstract double calculateLateFee(long daysOverdue);\n\n    public abstract int maxBorrowLimit();\n\n    public int loanDurationDays() {\n        return level.loanDurationDays();\n    }\n}\n\npublic final class BasicMembership extends Membership {\n    public BasicMembership(String memberId) {\n        super(memberId, MembershipLevel.BASIC);\n    }\n\n    @Override\n    public double calculateLateFee(long daysOverdue) {\n        return daysOverdue * 0.50;   // $0.50/day\n    }\n\n    @Override\n    public int maxBorrowLimit() {\n        return MembershipLevel.BASIC.maxBorrowLimit();\n    }\n}\n\npublic final class PremiumMembership extends Membership {\n    public PremiumMembership(String memberId) {\n        super(memberId, MembershipLevel.PREMIUM);\n    }\n\n    @Override\n    public double calculateLateFee(long daysOverdue) {\n        return Math.max(0, daysOverdue - 3) * 0.25;  // $0.25/day after 3-day grace\n    }\n\n    @Override\n    public int maxBorrowLimit() {\n        return MembershipLevel.PREMIUM.maxBorrowLimit();\n    }\n}\n\npublic final class VipMembership extends Membership {\n    public VipMembership(String memberId) {\n        super(memberId, MembershipLevel.VIP);\n    }\n\n    @Override\n    public double calculateLateFee(long daysOverdue) {\n        return 0;   // VIPs never pay late fees\n    }\n\n    @Override\n    public int maxBorrowLimit() {\n        return MembershipLevel.VIP.maxBorrowLimit();\n    }\n}\n\n// ===================== INNER CLASS + ANONYMOUS CLASS =====================\n\npublic class LibraryManager {\n    private final Map<String, Book> booksByIsbn = new HashMap<>();\n    private final Map<String, Membership> members = new HashMap<>();\n    private final List<LoanRecord> activeLoans = new ArrayList<>();\n\n    // ===== Inner class: loan transaction =====\n\n    public class LoanTransaction {\n        private final Book book;\n        private final Membership member;\n        private final LocalDate borrowDate;\n\n        private LoanTransaction(Book book, Membership member) {\n            this.book = book;\n            this.member = member;\n            this.borrowDate = LocalDate.now();\n        }\n\n        public LoanRecord execute() {\n            if (book.status() != BookStatus.AVAILABLE) {\n                throw new IllegalStateException(\"Book is not available: \" + book.isbn());\n            }\n\n            long activeCount = activeLoans.stream()\n                .filter(l -> l.memberId().equals(member.memberId()))\n                .count();\n\n            if (activeCount >= member.maxBorrowLimit()) {\n                throw new IllegalStateException(\"Member has reached borrow limit: \"\n                    + member.maxBorrowLimit());\n            }\n\n            book.setStatus(BookStatus.CHECKED_OUT);\n            LocalDate dueDate = borrowDate.plusDays(member.loanDurationDays());\n            LoanRecord record = new LoanRecord(book.isbn(), member.memberId(), borrowDate, dueDate);\n            activeLoans.add(record);\n            return record;\n        }\n    }\n\n    // ===== Public API =====\n\n    public void addBook(Book book) {\n        booksByIsbn.put(book.isbn().value(), book);\n    }\n\n    public void registerMember(String memberId, Membership membership) {\n        members.put(memberId, membership);\n    }\n\n    public LoanRecord borrowBook(String isbnValue, String memberId) {\n        Book book = booksByIsbn.get(isbnValue);\n        Membership member = members.get(memberId);\n\n        if (book == null) throw new IllegalArgumentException(\"Book not found: \" + isbnValue);\n        if (member == null) throw new IllegalArgumentException(\"Member not found: \" + memberId);\n\n        return new LoanTransaction(book, member).execute();\n    }\n\n    public void returnBook(ISBN isbn) {\n        LoanRecord loan = activeLoans.stream()\n            .filter(l -> l.isbn().equals(isbn))\n            .findFirst()\n            .orElseThrow(() -> new IllegalArgumentException(\"No active loan for: \" + isbn));\n\n        activeLoans.remove(loan);\n        Book book = booksByIsbn.get(isbn.value());\n        if (book != null) {\n            book.setStatus(BookStatus.AVAILABLE);\n        }\n\n        if (loan.isOverdue()) {\n            Membership member = members.get(loan.memberId());\n            double fee = member.calculateLateFee(loan.daysOverdue());\n            System.out.printf(\"Late fee for %s: $%.2f%n\", loan.memberId(), fee);\n        }\n    }\n\n    // ===== Polymorphism: runtime dispatch with sealed types =====\n\n    public String getMembershipDescription(String memberId) {\n        Membership m = members.get(memberId);\n        if (m == null) return \"Unknown member\";\n\n        return switch (m) {\n            case BasicMembership bm -> \"Basic → $\" + bm.calculateLateFee(5) + \" fee for 5 days overdue\";\n            case PremiumMembership pm -> \"Premium → $\" + pm.calculateLateFee(10) + \" fee for 10 days overdue\";\n            case VipMembership vm -> \"VIP → No late fees ever!\";\n        };\n    }\n\n    // ===== Search with polymorphism =====\n\n    public List<Book> search(String query) {\n        return booksByIsbn.values().stream()\n            .filter(b -> b.matches(query))\n            .sorted()\n            .toList();\n    }\n\n    // ===== Statistics with EnumMap =====\n\n    public Map<BookStatus, Integer> statusStatistics() {\n        EnumMap<BookStatus, Integer> stats = new EnumMap<>(BookStatus.class);\n        for (BookStatus s : BookStatus.values()) {\n            stats.put(s, 0);\n        }\n        for (Book b : booksByIsbn.values()) {\n            stats.merge(b.status(), 1, Integer::sum);\n        }\n        return stats;\n    }\n}\n\n// ===================== DEMO =====================\n\npublic class OOPIntegrationDemo {\n    public static void main(String[] args) {\n        LibraryManager lib = new LibraryManager();\n\n        // Add books\n        lib.addBook(new Book(\"B001\", \"Effective Java\", \"Joshua Bloch\",\n            new ISBN(\"9780134685991\")));\n        lib.addBook(new Book(\"B002\", \"Clean Code\", \"Robert C. Martin\",\n            new ISBN(\"9780132350884\")));\n        lib.addBook(new Book(\"B003\", \"Design Patterns\", \"Gang of Four\",\n            new ISBN(\"9780201633610\")));\n\n        Book javaBook = new Book(\"B004\", \"Java Concurrency in Practice\",\n            \"Brian Goetz\", new ISBN(\"9780321349606\"));\n        javaBook.addTag(\"multithreading\");\n        javaBook.addTag(\"performance\");\n        javaBook.setCategory(\"Programming\");\n        lib.addBook(javaBook);\n\n        // Register members\n        lib.registerMember(\"M001\", new BasicMembership(\"M001\"));\n        lib.registerMember(\"M002\", new PremiumMembership(\"M002\"));\n        lib.registerMember(\"M003\", new VipMembership(\"M003\"));\n\n        // Borrow books (polymorphism in action)\n        System.out.println(\"=== Borrowing Books ===\");\n        System.out.println(lib.borrowBook(\"9780134685991\", \"M001\"));\n        System.out.println(lib.borrowBook(\"9780132350884\", \"M002\"));\n        System.out.println(lib.borrowBook(\"9780201633610\", \"M003\"));\n\n        // Search\n        System.out.println(\"\\n=== Search for 'Java' ===\");\n        lib.search(\"Java\").forEach(System.out::println);\n\n        // Return with late fee logic\n        System.out.println(\"\\n=== Returning Books ===\");\n        lib.returnBook(new ISBN(\"9780134685991\"));\n\n        // Membership descriptions via sealed class switch\n        System.out.println(\"\\n=== Membership Descriptions ===\");\n        System.out.println(\"M001: \" + lib.getMembershipDescription(\"M001\"));\n        System.out.println(\"M002: \" + lib.getMembershipDescription(\"M002\"));\n        System.out.println(\"M003: \" + lib.getMembershipDescription(\"M003\"));\n\n        // Status statistics\n        System.out.println(\"\\n=== Status Statistics ===\");\n        lib.statusStatistics().forEach((status, count) ->\n            System.out.println(status + \": \" + count));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classes and objects"
        }), ": A class is a blueprint; objects are runtime instances created with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new"
        }), ". Constructors initialize objects; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " disambiguates fields and enables chaining. Overloading lets you define multiple methods with the same name. Varargs accept variable-length arguments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), ": Access modifiers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), ", default, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protected"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), ") control visibility. Getters and setters expose private fields with validation. JavaBeans convention requires a no-arg constructor and property accessors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inheritance"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extends"
        }), " creates a subclass that inherits fields and methods. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super"
        }), " calls the parent constructor or overridden method. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Override"
        }), " catches signature errors. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " prevents inheritance or overriding. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protected"
        }), " grants access to subclasses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), ": Compile-time polymorphism (overloading) resolves at compile time based on argument types. Runtime polymorphism (overriding) resolves at runtime via dynamic dispatch. Covariant return types allow narrowing the return type in overrides."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstract classes"
        }), ": Declared with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "abstract"
        }), ", they can have abstract and concrete methods but cannot be instantiated. Use them for shared state and template method patterns. Choose abstract classes over interfaces when classes share state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interfaces"
        }), ": Define contracts with abstract methods. Default methods provide backward-compatible evolution. Static methods serve as utility factories. Private methods share code among default methods. Multiple inheritance of type is achieved through implementing multiple interfaces. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@FunctionalInterface"
        }), " marks interfaces with a single abstract method."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sealed classes"
        }), ": Control inheritance by specifying permitted subclasses via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "permits"
        }), ". Subclasses must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sealed"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non-sealed"
        }), ". Sealed interfaces enable exhaustive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " pattern matching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Records"
        }), ": Immutable data carriers that automatically generate constructor, accessors, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toString"
        }), ". Compact constructors validate and normalize data. Custom methods add behavior. Pattern matching destructures records directly in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "case"
        }), " labels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enums"
        }), ": Fixed sets of constants backed by a full class. Fields, constructors, and methods enrich behavior. Enum-specific bodies allow per-constant implementations. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnumMap"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnumSet"
        }), " provide high-performance specialized collections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Annotations"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Override"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Deprecated"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SuppressWarnings"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@FunctionalInterface"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SafeVarargs"
        }), " control compiler behavior. Custom annotations with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Retention"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Target"
        }), " can be processed at runtime via reflection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested classes"
        }), ": Static nested (no enclosing instance needed), inner (accesses enclosing instance), local (scoped to a block), and anonymous (one-shot implementation). Lambdas are preferred over anonymous classes for functional interfaces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "equals/hashCode contract"
        }), ": If two objects are equal, they must have equal hash codes. Always override both or neither. Records provide both automatically. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toString"
        }), " should return a concise representation. Prefer copy constructors over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Type every code example yourself → muscle memory for Java syntax is built through active practice, not passive reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Understanding the \"why\" behind Java language features is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primitives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value types stored on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size, pass by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object instances on heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable size, pass by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex data structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot change after creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-safe, cacheable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, keys, configuration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Pitfalls"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java is case-sensitive, class-based, statically typed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing semicolons, case errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 primitives, object wrappers, String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoboxing overhead in loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control Flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if/else, switch (arrow/yield), loops, break/continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch fall-through without break"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mobile"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe visitors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error code mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which is NOT a valid Java primitive type?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) int"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) boolean"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) string"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) char"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) string.** String is a reference type (java.lang.String), not a primitive.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default value of a boolean field in a class?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) true"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) false"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) null"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) undefined"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) false.** Class fields are initialized to default values.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a class and an object? Explain with an example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the four access modifiers in Java from most restrictive to least restrictive. Where is each appropriate?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why must ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), " be overridden whenever ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals"
        }), " is overridden? What happens if you violate this contract?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does runtime polymorphism differ from compile-time polymorphism? Provide a code example of each."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of a sealed class? How does it differ from using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " on a class?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose an abstract class over an interface? When would you choose an interface over an abstract class?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the significance of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@FunctionalInterface"
        }), ". What restrictions does it impose?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a record? What methods does it automatically generate? How do you add validation to a record constructor?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare anonymous classes and lambda expressions. When would you use one over the other?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the JavaBeans convention? Why is it important for Spring Boot?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a Banking System"
          }), " → Create an abstract class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Account"
          }), " with fields ", (0,jsx_runtime.jsx)(_components.code, {
            children: "accountNumber"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "balance"
          }), ", and abstract method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withdraw(double)"
          }), ". Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SavingsAccount"
          }), " (withdrawal fee) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CheckingAccount"
          }), " (overdraft limit). Demonstrate polymorphism by iterating over an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Account[]"
          }), " and calling ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withdraw"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            }), " Season"]
          }), " → Define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Season"
          }), " with fields for average temperature range and typical activities. Add a method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getSeasonByMonth(int month)"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EnumMap"
          }), " to map each season to a list of holidays."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Write a Generic Cache"
          }), " → Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Cache<K, V>"
          }), " interface with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "put"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clear"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "size"
          }), " methods. Provide a default method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getOrDefault(K key, V defaultValue)"
          }), ". Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InMemoryCache"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TimedCache"
          }), " (which expires entries after a configurable duration)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate with Records"
          }), " → Define a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CreditCard"
          }), " record with fields ", (0,jsx_runtime.jsx)(_components.code, {
            children: "number"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "expiryMonth"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "expiryYear"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cvv"
          }), ". In the compact constructor, validate using the Luhn algorithm for the card number, ensure expiry is in the future, and check CVV length."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sealed Expression Evaluator"
          }), " → Create a sealed interface ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Expr"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eval(): int"
          }), ". Permitted subclasses: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Const(int value)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Add(Expr left, Expr right)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Mul(Expr left, Expr right)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Neg(Expr operand)"
          }), ". Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eval()"
          }), " for each and demonstrate with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(3 + 5) * -(2 + 1)"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Minimal ORM"
          }), " → Create a custom annotation ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entity(tableName)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Column(name, primaryKey)"
          }), ". Write an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EntityManager"
          }), " class that uses reflection to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Generate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE"
            }), " SQL statements from annotated classes"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Map ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResultSet"
            }), " rows back to objects using the default constructor and setters"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "findById(Class<T>, Object id)"
            }), " method"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "save(T entity)"
            }), " which inserts or updates based on primary key presence\nTest your ORM with a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Entity"
            }), "-annotated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Product"
            }), " class."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a Visitor Pattern with Sealed Classes"
          }), " → Define a sealed interface ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TreeNode"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "permits Leaf, Branch"
          }), ". ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Leaf(int value)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Branch(TreeNode left, TreeNode right)"
          }), ". Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Visitor<R>"
          }), " interface with methods ", (0,jsx_runtime.jsx)(_components.code, {
            children: "visit(Leaf leaf)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "visit(Branch branch)"
          }), ". Write concrete visitors for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SumVisitor"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DepthVisitor"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ToStringVisitor"
          }), ". Use pattern matching in the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "accept"
          }), " method of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TreeNode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a Thread-Safe Event Bus"
          }), " → Create an event bus using generics, functional interfaces, and annotations. Define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Subscribe"
          }), " annotation. Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "register(Object listener)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unregister(Object listener)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "post(Object event)"
          }), " methods. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Method"
          }), " handles discovered via reflection. Support both synchronous and asynchronous dispatch with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ExecutorService"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a Custom Stream Collector"
          }), " → Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SafeVarargs"
          }), " generic method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mergeAll(Collector<T, A, R>... collectors)"
          }), " that applies multiple collectors in parallel to a single stream and returns a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Map<String, R>"
          }), " keyed by collector name. Test it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collectors.toList()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collectors.counting()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collectors.groupingBy(...)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Refactor with Records and Sealed Types"
          }), " → Take the following poorly designed code and refactor it to use records, sealed classes/interfaces, and enums. Add proper ", (0,jsx_runtime.jsx)(_components.code, {
            children: "equals"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "hashCode"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "toString"
          }), ", and validation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Poor design → needs refactoring\npublic class Animal2 {\n    String type; // \"dog\", \"cat\", \"bird\"\n    String name;\n    int age;\n    String breed; // only for dogs\n    Boolean indoor; // only for cats\n    Double wingspan; // only for birds\n    String sound;\n\n    public Animal2(String type, String name, int age) {\n        this.type = type;\n        this.name = name;\n        this.age = age;\n    }\n\n    public void makeSound() {\n        if (type.equals(\"dog\")) System.out.println(\"Woof\");\n        else if (type.equals(\"cat\")) System.out.println(\"Meow\");\n        else if (type.equals(\"bird\")) System.out.println(\"Chirp\");\n    }\n\n    public String getDescription() {\n        if (type.equals(\"dog\")) return name + \" is a \" + breed + \" dog\";\n        else if (type.equals(\"cat\")) return name + \" is \" + (indoor ? \"indoor\" : \"outdoor\") + \" cat\";\n        else if (type.equals(\"bird\")) return name + \" has wingspan \" + wingspan + \"cm\";\n        else return \"Unknown animal\";\n    }\n}\n"
      })
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