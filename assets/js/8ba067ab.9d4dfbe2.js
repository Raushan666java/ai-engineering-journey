"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[17430],{

/***/ 57736
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_10_lld_solid_oop_md_8ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-10-lld-solid-oop-md-8ba.json
const site_docs_courses_system_design_10_lld_solid_oop_md_8ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/10-lld-solid-oop","title":"Chapter 10: Low-Level Design: SOLID Principles and OOP","description":"Previous 11 Lld Design Patterns","source":"@site/docs/courses/system-design/10-lld-solid-oop.md","sourceDirName":"courses/system-design","slug":"/system-design/10-lld-solid-oop","permalink":"/ai-engineering-journey/system-design/10-lld-solid-oop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-lld-solid-oop","slug":"/system-design/10-lld-solid-oop","title":"Chapter 10: Low-Level Design: SOLID Principles and OOP","sidebar_label":"Chapter 10: Low-Level Design: SOLID Principles and OOP","sidebar_position":10},"sidebar":"course-system-design","previous":{"title":"Chapter 9: Distributed Coordination and Service Discovery","permalink":"/ai-engineering-journey/system-design/09-distributed-coordination"},"next":{"title":"Chapter 11: Low-Level Design: Design Patterns","permalink":"/ai-engineering-journey/system-design/11-lld-design-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/10-lld-solid-oop.md


const frontMatter = {
	id: '10-lld-solid-oop',
	slug: '/system-design/10-lld-solid-oop',
	title: 'Chapter 10: Low-Level Design: SOLID Principles and OOP',
	sidebar_label: 'Chapter 10: Low-Level Design: SOLID Principles and OOP',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Low-Level Design: SOLID Principles and OOP';

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
  "value": "Object-Oriented Programming Foundations",
  "id": "object-oriented-programming-foundations",
  "level": 3
}, {
  "value": "Coupling and Cohesion",
  "id": "coupling-and-cohesion",
  "level": 3
}, {
  "value": "Single Responsibility Principle (SRP)",
  "id": "single-responsibility-principle-srp",
  "level": 3
}, {
  "value": "Open/Closed Principle (OCP)",
  "id": "openclosed-principle-ocp",
  "level": 3
}, {
  "value": "Liskov Substitution Principle (LSP)",
  "id": "liskov-substitution-principle-lsp",
  "level": 3
}, {
  "value": "Interface Segregation Principle (ISP)",
  "id": "interface-segregation-principle-isp",
  "level": 3
}, {
  "value": "Dependency Inversion Principle (DIP)",
  "id": "dependency-inversion-principle-dip",
  "level": 3
}, {
  "value": "Composition Over Inheritance",
  "id": "composition-over-inheritance",
  "level": 3
}, {
  "value": "Package Principles",
  "id": "package-principles",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Refactoring a Violation of Single Responsibility Principle",
  "id": "example-1-refactoring-a-violation-of-single-responsibility-principle",
  "level": 3
}, {
  "value": "Example 2: Applying OCP with the Strategy Pattern",
  "id": "example-2-applying-ocp-with-the-strategy-pattern",
  "level": 3
}, {
  "value": "Example 3: LSP — The Square-Rectangle Problem Resolved",
  "id": "example-3-lsp--the-square-rectangle-problem-resolved",
  "level": 3
}, {
  "value": "Example 4: ISP — Splitting a Fat Interface",
  "id": "example-4-isp--splitting-a-fat-interface",
  "level": 3
}, {
  "value": "Example 5: DIP with Dependency Injection",
  "id": "example-5-dip-with-dependency-injection",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Code Examples",
  "id": "code-examples",
  "level": 2
}, {
  "value": "SOLID Principle Validator",
  "id": "solid-principle-validator",
  "level": 3
}, {
  "value": "OOP Design Quality Checker (LCOM + Coupling)",
  "id": "oop-design-quality-checker-lcom--coupling",
  "level": 3
}, {
  "value": "SOLID Principles Interaction Diagram",
  "id": "solid-principles-interaction-diagram",
  "level": 3
}, {
  "value": "Implementation: SOLID Principles and OOP Design",
  "id": "implementation-solid-principles-and-oop-design",
  "level": 3
}, {
  "value": "TypeScript: SOLIDValidator, ParkingLot, and ElevatorSystem",
  "id": "typescript-solidvalidator-parkinglot-and-elevatorsystem",
  "level": 3
}, {
  "value": "Mermaid: SOLID Principles UML Class Diagram",
  "id": "mermaid-solid-principles-uml-class-diagram",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
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
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "chapter-10-low-level-design-solid-principles-and-oop",
        children: "Chapter 10: Low-Level Design: SOLID Principles and OOP"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/09-distributed-coordination",
          children: "09 Distributed Coordination"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/11-lld-design-patterns",
          children: "11 Lld Design Patterns"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the five SOLID principles to refactor tightly coupled class hierarchies into maintainable designs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between tight coupling and loose coupling using dependency metrics and code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate cohesion within modules using the LCOM (Lack of Cohesion of Methods) heuristic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between inheritance and composition using behavioral delegation trade-off analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement package-level design principles (REP, CCP, CRP) for dependency management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactor monolithic classes into single-responsibility components without breaking existing contracts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/system-design/10-lld-solid-oop/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/10-lld-solid-oop/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/10-lld-solid-oop/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/10-lld-solid-oop/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/10-lld-solid-oop/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/10-lld-solid-oop/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOLID principles, OOP fundamentals, design patterns foundation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single responsibility, open-closed, Liskov substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOLID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Five principles for maintainable object-oriented design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP Design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, inheritance, polymorphism, composition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best Practices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency injection, interface segregation, clean architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applied in all major object-oriented codebases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/10-solid-oop.png",
          alt: "SOLID and OOP Mindmap"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "object-oriented-programming-foundations",
      children: "Object-Oriented Programming Foundations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nObject-Oriented Programming (OOP) rests on four pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism. Encapsulation bundles data with the methods that operate on it, hiding internal state behind a public interface. Abstraction exposes only essential characteristics while concealing implementation details. Inheritance establishes an \"is-a\" relationship between a base class and derived classes, enabling code reuse and hierarchical classification. Polymorphism allows objects of different types to respond to the same interface contract, dispatching the correct method at runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encapsulation"
      }), " is enforced in languages like Java through private fields with public getters and setters. Python uses a naming convention: a single underscore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_protected"
      }), " signals internal use; a double underscore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__private"
      }), " triggers name mangling to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_ClassName__private"
      }), ". Neither provides true access control—Python trusts developers to follow conventions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Abstraction"
      }), " decouples what a system does from how it does it. An abstract base class (ABC) in Python defines a contract without providing implementation; concrete subclasses fulfill that contract."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inheritance"
      }), " introduces the fragile base class problem: changes to a base class can silently break derived classes. Deep inheritance hierarchies (more than 3 levels) become difficult to reason about and test."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Polymorphism"
      }), " enables dependency inversion: high-level modules depend on abstractions, not on concrete implementations. This is the mechanism that makes all five SOLID principles work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coupling-and-cohesion",
      children: "Coupling and Cohesion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Coupling measures the degree of interdependence between modules. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tight coupling"
      }), " occurs when a class knows too much about the internal details of another class—it creates a chain where a change in one module forces cascading changes in many others. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loose coupling"
      }), " is achieved when modules communicate through well-defined interfaces and know nothing about each other's internals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cohesion measures how strongly the responsibilities of a module are related. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "High cohesion"
      }), " means a class's methods and fields are all focused on a single, well-defined purpose. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low cohesion"
      }), " indicates a class does many unrelated things—a classic symptom of a God Object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A useful metric is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCOM"
      }), " (Lack of Cohesion of Methods). LCOM counts pairs of methods that do not share any fields. A high LCOM value suggests the class should be split. Most static analysis tools calculate LCOM4, which counts connected components in a method-field access graph; LCOM4 > 1 indicates the class has multiple responsibilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "single-responsibility-principle-srp",
      children: "Single Responsibility Principle (SRP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A class should have one, and only one, reason to change."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SRP is about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actors"
      }), "—the stakeholders who might request changes. If a class serves three different actors, a change requested by one actor risks breaking the functionality required by the other two. Every class should be responsible to a single actor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Report"
      }), " class that generates content, formats it as HTML and PDF, and sends it via email. Three actors want changes: the content team, the formatting team, and the operations team. A formatting change could break content generation, or an email change could alter formatting. The solution is to split: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportGenerator"
      }), " (content), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportFormatter"
      }), " (output format strategy), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportSender"
      }), " (delivery mechanism)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openclosed-principle-ocp",
      children: "Open/Closed Principle (OCP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Software entities should be open for extension but closed for modification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "New functionality should be added by writing new code, not by modifying existing, tested code. This is achieved through abstraction: define an interface or abstract base class, then implement new behavior in new classes that conform to that interface."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Strategy pattern is a direct application of OCP. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentProcessor"
      }), " class that uses a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " statement on payment type violates OCP—adding a new payment type requires modifying the class. Instead, define a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentStrategy"
      }), " interface with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pay(amount)"
      }), " method, then implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CreditCardPayment"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PayPalPayment"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CryptoPayment"
      }), " separately. New payment types require zero changes to existing code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "liskov-substitution-principle-lsp",
      children: "Liskov Substitution Principle (LSP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Subtypes must be substitutable for their base types without altering the correctness of the program."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " is a subtype of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ", then objects of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " may be replaced with objects of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " without changing any of the desirable properties of the program. LSP is not about syntax—it is about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "behavioral contracts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The classic violation is the Square-Rectangle problem. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Rectangle"
      }), " has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setWidth(w)"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setHeight(h)"
      }), ". A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Square"
      }), " inherits from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Rectangle"
      }), " but overrides both methods to keep width and height equal. Code that works for a rectangle breaks for a square:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def resize(rect: Rectangle):\n    rect.set_width(5)\n    rect.set_height(10)\n    assert rect.area() == 50  # Fails for Square\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The fix: do not model Square as a subtype of Rectangle. Both should inherit from a common ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Shape"
      }), " abstract class with a polymorphic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "area()"
      }), " method. LSP violations often indicate that the \"is-a\" relationship does not hold at the behavioral level."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Design by Contract"
      }), " formalizes LSP: preconditions cannot be strengthened in a subtype, postconditions cannot be weakened, and invariants must be preserved."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interface-segregation-principle-isp",
      children: "Interface Segregation Principle (ISP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "No client should be forced to depend on methods it does not use."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A \"fat interface\" contains methods that are irrelevant to some implementors. Clients that depend on the fat interface must recompile or redeploy even when changes are made to methods they never call."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Worker"
      }), " interface with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "work()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eat()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sleep()"
      }), ". A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Robot"
      }), " class implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Worker"
      }), " but does not eat or sleep. The Robot now has empty or throwing implementations for methods it does not need. Instead, split into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Workable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Eatable"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sleepable"
      }), " interfaces. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HumanWorker"
      }), " implements all three; a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RobotWorker"
      }), " implements only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Workable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The symptom of ISP violation is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"not implemented\" exception"
      }), "—methods that throw ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotImplementedError"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnsupportedOperationException"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-inversion-principle-dip",
      children: "Dependency Inversion Principle (DIP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "High-level modules should not depend on low-level modules. Both should depend on abstractions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The traditional layered architecture has high-level business logic depending directly on low-level database or network modules. This creates tight coupling: changing the database forces changes in the business logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DIP inverts this: define an interface (abstraction) in the high-level module. The low-level module implements that interface. The high-level module controls the contract; the low-level module fulfills it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Injection"
      }), " is the most common technique for implementing DIP. There are three forms:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constructor injection"
        }), ": dependencies are passed through the class constructor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Setter injection"
        }), ": dependencies are set through setter methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interface injection"
        }), ": the dependency provides an injector method that accepts the dependency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class UserService:\n    def __init__(self, repo: UserRepository):\n        self._repo = repo  # Depends on abstraction, not concrete DB impl\n\nclass PostgresUserRepository(UserRepository):\n    def find_by_id(self, uid: str) -> User: ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserService"
      }), " never knows whether it is backed by PostgreSQL, MySQL, or an in-memory store. It depends only on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserRepository"
      }), " interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "composition-over-inheritance",
      children: "Composition Over Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inheritance exposes subclasses to parent implementation details, violating encapsulation. Composition uses delegation: an object holds a reference to another object and forwards calls to it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Inheritance — fragile\nclass OrderedCache(Dict):\n    def __setitem__(self, key, value):\n        super().__setitem__(key, value)\n        self._order.append(key)\n\n# Composition — flexible\nclass OrderedCache:\n    def __init__(self):\n        self._data = {}  # delegate to dict\n        self._order = []\n\n    def __setitem__(self, key, value):\n        self._data[key] = value\n        self._order.append(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The composition version can change its internal storage (e.g., switch to a database) without changing its public contract. Inheritance would require overriding every method that touches the internal dict."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-principles",
      children: "Package Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three principles guide package cohesion:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reuse-Release Equivalence Principle (REP)"
      }), ": The granularity of reuse is the granularity of release. A package cannot be reused unless it is also released and tracked. Packages must be cohesive units that justify a version number."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Closure Principle (CCP)"
      }), ": Classes that change together belong together. If two classes are always modified for the same reasons (same actor, same type of change), they should be in the same package."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Reuse Principle (CRP)"
      }), ": Classes that are used together belong together. A package should contain classes that are inseparable dependencies. If you depend on one class in a package, you should be able to depend on all of them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REP and CRP are in tension with CCP. REP pushes for fine-grained packages (easy to reuse), while CCP pushes for coarse-grained packages (easy to maintain). The resolution depends on the project's maturity stage: early projects favor CCP (change management); mature projects favor REP and CRP (reuse management)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-refactoring-a-violation-of-single-responsibility-principle",
      children: "Example 1: Refactoring a Violation of Single Responsibility Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before"
      }), " — A monolithic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Order"
      }), " class handles database persistence, email notification, and invoice generation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Order:\n    def __init__(self, items: list):\n        self.items = items\n        self.total = sum(item.price for item in items)\n\n    def save_to_database(self):\n        conn = sqlite3.connect(\"orders.db\")\n        conn.execute(\"INSERT INTO orders VALUES (?)\", (self.total,))\n        conn.commit()\n        conn.close()\n\n    def send_confirmation_email(self):\n        server = smtplib.SMTP(\"smtp.example.com\")\n        server.sendmail(\"from@example.com\", \"to@example.com\",\n                        f\"Your order total is ${self.total}\")\n        server.quit()\n\n    def generate_invoice(self):\n        return f\"Invoice\\nTotal: ${self.total}\\nItems: {len(self.items)}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After"
      }), " — Three single-responsibility classes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Order:\n    def __init__(self, items: list):\n        self.items = items\n        self.total = sum(item.price for item in items)\n\nclass OrderRepository:\n    @staticmethod\n    def save(order: Order):\n        with sqlite3.connect(\"orders.db\") as conn:\n            conn.execute(\"INSERT INTO orders VALUES (?)\", (order.total,))\n\nclass EmailService:\n    @staticmethod\n    def send_confirmation(order: Order):\n        with smtplib.SMTP(\"smtp.example.com\") as server:\n            server.sendmail(\"from@example.com\", \"to@example.com\",\n                            f\"Your order total is ${order.total}\")\n\nclass InvoiceGenerator:\n    @staticmethod\n    def generate(order: Order) -> str:\n        return f\"Invoice\\nTotal: ${order.total}\\nItems: {len(order.items)}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three actors (DB team, email team, accounting team) can now change their respective classes without affecting the others."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-applying-ocp-with-the-strategy-pattern",
      children: "Example 2: Applying OCP with the Strategy Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before"
      }), " — A payment processor with a growing switch statement:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PaymentProcessor:\n    def process(self, amount: float, method: str):\n        if method == \"credit_card\":\n            # call credit card API\n            print(f\"Charging ${amount} to credit card\")\n        elif method == \"paypal\":\n            # call PayPal API\n            print(f\"Redirecting to PayPal for ${amount}\")\n        elif method == \"crypto\":\n            print(f\"Processing ${amount} in cryptocurrency\")\n        # Adding a new method requires adding an elif branch\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After"
      }), " — Open for extension:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass PaymentStrategy(ABC):\n    @abstractmethod\n    def pay(self, amount: float): ...\n\nclass CreditCardPayment(PaymentStrategy):\n    def pay(self, amount: float):\n        print(f\"Charging ${amount} to credit card\")\n\nclass PayPalPayment(PaymentStrategy):\n    def pay(self, amount: float):\n        print(f\"Redirecting to PayPal for ${amount}\")\n\nclass CryptoPayment(PaymentStrategy):\n    def pay(self, amount: float):\n        print(f\"Processing ${amount} in cryptocurrency\")\n\nclass PaymentProcessor:\n    def __init__(self, strategy: PaymentStrategy):\n        self._strategy = strategy\n\n    def process(self, amount: float):\n        self._strategy.pay(amount)\n\n# Usage — inject strategy at runtime\nprocessor = PaymentProcessor(CreditCardPayment())\nprocessor.process(100.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adding Google Pay requires only a new class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GooglePayPayment(PaymentStrategy)"
      }), "—zero modification to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentProcessor"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-lsp--the-square-rectangle-problem-resolved",
      children: "Example 3: LSP — The Square-Rectangle Problem Resolved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Rectangle:\n    def __init__(self):\n        self._width = 0\n        self._height = 0\n\n    def set_width(self, w): self._width = w\n    def set_height(self, h): self._height = h\n    def area(self): return self._width * self._height\n\nclass Square(Rectangle):\n    def set_width(self, w):\n        self._width = w\n        self._height = w\n\n    def set_height(self, h):\n        self._width = h\n        self._height = h\n\ndef process_shape(r: Rectangle):\n    r.set_width(5)\n    r.set_height(10)\n    assert r.area() == 50  # Square fails!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution"
      }), " — Both inherit from a common abstraction:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self) -> float: ...\n\nclass Rectangle(Shape):\n    def __init__(self, width: float, height: float):\n        self.width = width\n        self.height = height\n\n    def area(self) -> float:\n        return self.width * self.height\n\nclass Square(Shape):\n    def __init__(self, side: float):\n        self.side = side\n\n    def area(self) -> float:\n        return self.side ** 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Rectangle"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Square"
      }), " are not in an inheritance relationship; both are sibling subtypes of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Shape"
      }), ". Code that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Shape"
      }), " works correctly for either."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-isp--splitting-a-fat-interface",
      children: "Example 4: ISP — Splitting a Fat Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Machine(ABC):\n    @abstractmethod\n    def print(self, doc: str): ...\n    @abstractmethod\n    def fax(self, doc: str): ...\n    @abstractmethod\n    def scan(self, doc: str): ...\n\nclass MultiFunctionPrinter(Machine):\n    def print(self, doc): print(f\"Printing {doc}\")\n    def fax(self, doc): print(f\"Faxing {doc}\")\n    def scan(self, doc): print(f\"Scanning {doc}\")\n\nclass OldPrinter(Machine):\n    def print(self, doc): print(f\"Printing {doc}\")\n    def fax(self, doc): raise NotImplementedError(\"Fax not supported\")\n    def scan(self, doc): raise NotImplementedError(\"Scan not supported\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Printer(ABC):\n    @abstractmethod\n    def print(self, doc: str): ...\n\nclass Fax(ABC):\n    @abstractmethod\n    def fax(self, doc: str): ...\n\nclass Scanner(ABC):\n    @abstractmethod\n    def scan(self, doc: str): ...\n\nclass MultiFunctionPrinter(Printer, Fax, Scanner):\n    def print(self, doc): print(f\"Printing {doc}\")\n    def fax(self, doc): print(f\"Faxing {doc}\")\n    def scan(self, doc): print(f\"Scanning {doc}\")\n\nclass OldPrinter(Printer):\n    def print(self, doc): print(f\"Printing {doc}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No client of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OldPrinter"
      }), " is forced to depend on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fax"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scan"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-dip-with-dependency-injection",
      children: "Example 5: DIP with Dependency Injection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Before"
        }), " — High-level module depends on low-level module directly:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MySQLDatabase:\n    def save_user(self, user: dict):\n        print(f\"Saving {user['name']} to MySQL\")\n\nclass UserService:\n    def __init__(self):\n        self.db = MySQLDatabase()  # Tight coupling\n\n    def register(self, name: str, email: str):\n        self.db.save_user({\"name\": name, \"email\": email})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After"
      }), " — Both depend on abstractions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass UserRepository(ABC):\n    @abstractmethod\n    def save(self, user: dict): ...\n\nclass MySQLUserRepository(UserRepository):\n    def save(self, user: dict):\n        print(f\"Saving {user['name']} to MySQL\")\n\nclass MongoUserRepository(UserRepository):\n    def save(self, user: dict):\n        print(f\"Saving {user['name']} to MongoDB\")\n\nclass UserService:\n    def __init__(self, repo: UserRepository):  # Constructor injection\n        self._repo = repo\n\n    def register(self, name: str, email: str):\n        self._repo.save({\"name\": name, \"email\": email})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Switching databases requires zero changes to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserService"
      }), ". Testing is trivial: inject a mock ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserRepository"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 10: Low-Level Design: SOLID Principles and OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept from Chapter 10: Low-Level Design: SOLID Principles and OOP"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements-driven decisions"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does SRP (Single Responsibility Principle) mean in terms of actors?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) A class should have one instance, B) A class should serve one actor/stakeholder, C) A class should have one method, D) A class should have one field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) A class should serve one actor who would request changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the Strategy pattern embody the Open/Closed Principle?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) By using inheritance, B) By allowing new algorithms as new classes without modifying existing code, C) By using switch statements, D) By making classes final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) By allowing new algorithms as new classes implementing a common interface without modifying existing code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the classic LSP violation?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) A class with too many methods, B) Square inheriting from Rectangle breaking behavioral contract, C) A class depending on concrete implementations, D) An interface with unused methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) Square inheriting from Rectangle where setWidth/setHeight behavior violates the independent dimensions invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What symptom indicates an ISP violation?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Deep inheritance hierarchy, B) Methods throwing NotImplementedError, C) High LCOM4 value, D) Constructor with many parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) Methods throwing NotImplementedError or UnsupportedOperationException"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does Dependency Injection implement DIP?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) By using global variables, B) By passing dependencies through constructor/setters so both layers depend on abstractions, C) By instantiating dependencies in the class, D) By using static methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) By passing dependencies through constructor or setter injection, both high-level and low-level modules depend on interfaces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-examples",
      children: "Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solid-principle-validator",
      children: "SOLID Principle Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class programmatically analyzes class metadata against all five SOLID principles. It detects SRP violations (multiple actors), OCP violations (type-switching), LSP contract gaps, ISP interface bloat, and DIP concrete-dependency coupling."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * SOLID Principle Validator ? analyzes class definitions against\n * the five SOLID principles and returns actionable violations.\n */\ninterface ClassMetadata {\n  name: string;\n  methods: string[];\n  fields: string[];\n  dependencies: string[];\n  inheritedFrom?: string;\n}\n\ninterface InterfaceMetadata {\n  name: string;\n  methods: string[];\n  implementedBy: string;\n}\n\nclass SolidValidator {\n  violations: string[] = [];\n\n  /** SRP: one reason to change = one actor */\n  checkSingleResponsibility(cls: ClassMetadata, actors: string[]): void {\n    if (actors.length > 1) {\n      this.violations.push(\n        `SRP Violation: ${cls.name} serves ${actors.length} actors ` +\n        `(${actors.join(', ')}). Extract responsibilities per actor.`\n      );\n    }\n  }\n\n  /** OCP: extend behavior without modifying existing code */\n  checkOpenClosed(cls: ClassMetadata): void {\n    const switchMethods = cls.methods.filter(\n      (m) => m.startsWith('handle') && (m.includes('Type') || m.includes('switch'))\n    );\n    if (switchMethods.length > 0) {\n      this.violations.push(\n        `OCP Violation: ${cls.name} uses type-dispatch in ` +\n        `${switchMethods.join(', ')}. Replace with polymorphic strategy classes.`\n      );\n    }\n  }\n\n  /** LSP: subtypes must satisfy the base type's behavioral contract */\n  checkLiskovSubstitution(\n    base: ClassMetadata,\n    derived: ClassMetadata\n  ): void {\n    const baseSet = new Set(base.methods);\n    const overridden = derived.methods.filter((m) => baseSet.has(m));\n    const missing = base.methods.length - overridden.length;\n    if (missing > 0) {\n      this.violations.push(\n        `LSP Risk: ${derived.name} overrides ${overridden.length}/${base.methods.length} ` +\n        `of ${base.name}'s methods. ${missing} method(s) inherited without override ? ` +\n        `may violate the base contract.`\n      );\n    }\n  }\n\n  /** ISP: small, focused interfaces */\n  checkInterfaceSegregation(interfaces: InterfaceMetadata[]): void {\n    for (const iface of interfaces) {\n      if (iface.methods.length > 4) {\n        this.violations.push(\n          `ISP Suggestion: ${iface.name} has ${iface.methods.length} methods. ` +\n          `Split into role-specific interfaces (e.g., ${iface.methods.slice(0, 3).join(', ')} ? one group).`\n        );\n      }\n    }\n  }\n\n  /** DIP: depend on abstractions, not concretions */\n  checkDependencyInversion(cls: ClassMetadata): void {\n    const concreteDeps = cls.dependencies.filter(\n      (d) => d.startsWith('Concrete') || d.endsWith('Impl') || d.endsWith('Service')\n    );\n    for (const dep of concreteDeps) {\n      this.violations.push(\n        `DIP Violation: ${cls.name} depends on concrete class ${dep}. ` +\n        `Program to an interface instead.`\n      );\n    }\n  }\n}\n\n// -- Example usage ----------------------------------------------\nconst validator = new SolidValidator();\n\nconst empClass: ClassMetadata = {\n  name: 'EmployeeManager',\n  methods: ['calculatePay', 'saveToDB', 'sendEmail', 'generateReport', 'handleType'],\n  fields: ['name', 'salary', 'email'],\n  dependencies: ['MailServiceImpl', 'ConcreteRepository'],\n};\n\nvalidator.checkSingleResponsibility(empClass, ['Payroll', 'HR', 'IT']);\nvalidator.checkOpenClosed(empClass);\nvalidator.checkDependencyInversion(empClass);\n\nconsole.log(validator.violations);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oop-design-quality-checker-lcom--coupling",
      children: "OOP Design Quality Checker (LCOM + Coupling)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This checker evaluates low-level design quality using the Lack of Cohesion of Methods (LCOM4) metric and the instability metric from Robert C. Martin's package principles."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * OopDesignChecker ? evaluates class cohesion (LCOM4) and\n * coupling (fan-in / fan-out / instability metrics).\n */\nclass OopDesignChecker {\n  /**\n   * LCOM4: number of connected components in the method-field graph.\n   * Two methods share an edge if they access at least one common field.\n   *\n   * LCOM4 = 1 ? high cohesion (ideal)\n   * LCOM4 = 2-3 ? moderate cohesion, consider extracting a helper\n   * LCOM4 > 3   ? low cohesion, should be split\n   */\n  lcom4(methods: { name: string; accessedFields: string[] }[]): number {\n    const n = methods.length;\n    const adj: number[][] = Array.from({ length: n }, () => []);\n\n    for (let i = 0; i < n; i++) {\n      for (let j = i + 1; j < n; j++) {\n        const sharesField = methods[i].accessedFields.some((f) =>\n          methods[j].accessedFields.includes(f)\n        );\n        if (sharesField) {\n          adj[i].push(j);\n          adj[j].push(i);\n        }\n      }\n    }\n\n    const visited = new Set<number>();\n    let components = 0;\n\n    const dfs = (node: number): void => {\n      visited.add(node);\n      for (const neighbor of adj[node]) {\n        if (!visited.has(neighbor)) dfs(neighbor);\n      }\n    };\n\n    for (let i = 0; i < n; i++) {\n      if (!visited.has(i)) {\n        components++;\n        dfs(i);\n      }\n    }\n    return components;\n  }\n\n  /**\n   * Instability = fan-out / (fan-in + fan-out).\n   * 0 ? maximally stable (many depend on it).\n   * 1 ? maximally unstable (depends on many).\n   */\n  instability(fanIn: number, fanOut: number): number {\n    const total = fanIn + fanOut;\n    return total === 0 ? 0 : fanOut / total;\n  }\n\n  /** Human-readable assessment of LCOM4 */\n  assessCohesion(components: number): string {\n    if (components === 1) return 'High cohesion ? all methods share state.';\n    if (components <= 3) return 'Moderate cohesion ? consider extraction.';\n    if (components <= 5) return 'Low cohesion ? strongly recommend splitting.';\n    return 'Very low cohesion ? class does too many unrelated things.';\n  }\n\n  /** Abstractness for package-level analysis (from Martin's metrics) */\n  abstractness(abstractClasses: number, totalClasses: number): number {\n    return totalClasses === 0 ? 0 : abstractClasses / totalClasses;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst checker = new OopDesignChecker();\n\nconst methods = [\n  { name: 'calculatePay', accessedFields: ['salary', 'rate'] },\n  { name: 'saveToDB', accessedFields: ['connection', 'salary'] },\n  { name: 'sendEmail', accessedFields: ['smtpHost', 'email'] },\n  { name: 'generateReport', accessedFields: ['reportData'] },\n];\n\nconst lcom = checker.lcom4(methods);\nconsole.log(`LCOM4: ${lcom} ? ${checker.assessCohesion(lcom)}`);\nconsole.log(`Instability: ${checker.instability(3, 5).toFixed(2)} ` +\n  `(fan-in=3, fan-out=5)`);\nconsole.log(`Abstractness: ${checker.abstractness(2, 8).toFixed(2)} ` +\n  `(2 abstract / 8 total classes)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solid-principles-interaction-diagram",
      children: "SOLID Principles Interaction Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph SOLID_Principles\n        SRP[SRP<br/>Single Responsibility<br/>One actor, one reason to change]\n        OCP[OCP<br/>Open / Closed<br/>Extend via new classes, not modification]\n        LSP[LSP<br/>Liskov Substitution<br/>Subtypes satisfy base contract]\n        ISP[ISP<br/>Interface Segregation<br/>Small role-specific interfaces]\n        DIP[DIP<br/>Dependency Inversion<br/>Both layers depend on abstractions]\n    end\n\n    SRP -->|drives| COHESION[High Cohesion]\n    ISP -->|drives| COHESION\n    OCP -->|enables| EXTENSIBILITY[Extensibility]\n    LSP -->|ensures| RELIABILITY[Behavioral Reliability]\n    DIP -->|enables| LOOSE_COUPLING[Loose Coupling]\n\n    COHESION --> QUALITY[Maintainable Software]\n    EXTENSIBILITY --> QUALITY\n    RELIABILITY --> QUALITY\n    LOOSE_COUPLING --> QUALITY\n\n    SRP -.->|measured by| LCOM[LCOM4 Metric]\n    DIP -.->|measured by| INSTABILITY[Instability Metric]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-solid-principles-and-oop-design",
      children: "Implementation: SOLID Principles and OOP Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SOLIDValidator {\n  checkSingleResponsibility(methods: string[], responsibilities: string[]): { pass: boolean; reason: string } {\n    const pass = responsibilities.length <= 1; return { pass, reason: pass ? \"Single responsibility satisfied\" : `Class has ${responsibilities.length} responsibilities` }; }\n  checkOpenClosed(baseMethods: string[], extendedMethods: string[]): { pass: boolean; reason: string } {\n    return { pass: true, reason: \"Open for extension via inheritance or composition\" }; }\n  checkLiskovSubstitution(baseClass: any, derivedClass: any): { pass: boolean; reason: string } {\n    return { pass: true, reason: \"Derived class can substitute base class\" }; }\n  checkInterfaceSegregation(methodsPerInterface: number[]): { pass: boolean; reason: string } {\n    const allSmall = methodsPerInterface.every(m => m <= 5); return { pass: allSmall, reason: allSmall ? \"Interfaces are focused\" : \"Some interfaces have too many methods\" }; }\n  checkDependencyInversion(dependencies: { abstract: boolean }[]): { pass: boolean; reason: string } {\n    const allAbstract = dependencies.every(d => d.abstract); return { pass: allAbstract, reason: allAbstract ? \"Dependencies on abstractions\" : \"Some dependencies on concretions\" }; }\n}\ninterface IRepository<T> { getAll(): T[]; getById(id: string): T | undefined; add(item: T): void; update(id: string, item: T): void; delete(id: string): void; }\nclass InMemoryRepo<T extends { id: string }> implements IRepository<T> { private items = new Map<string, T>();\n  getAll(): T[] { return [...this.items.values()]; }\n  getById(id: string): T | undefined { return this.items.get(id); }\n  add(item: T): void { this.items.set(item.id, item); }\n  update(id: string, item: T): void { if (this.items.has(id)) this.items.set(id, item); }\n  delete(id: string): void { this.items.delete(id); }\n}\ninterface INotifier { send(message: string, recipient: string): void; }\nclass EmailNotifier implements INotifier { send(m: string, r: string): void { console.log(`EMAIL to ${r}: ${m}`); } }\nclass SMSNotifier implements INotifier { send(m: string, r: string): void { console.log(`SMS to ${r}: ${m}`); } }\nclass PushNotifier implements INotifier { send(m: string, r: string): void { console.log(`PUSH to ${r}: ${m}`); } }\nclass NotificationManager { constructor(private notifier: INotifier) {} sendAlert(msg: string, recipient: string): void { this.notifier.send(msg, recipient); } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld solid oop\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'lld solid oop', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld solid oop - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'lld solid oop' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-solidvalidator-parkinglot-and-elevatorsystem",
      children: "TypeScript: SOLIDValidator, ParkingLot, and ElevatorSystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SOLIDValidator {\n  violations: string[] = [];\n\n  checkSRP(className: string, actorCount: number, actors: string[]): void {\n    if (actorCount > 1) {\n      this.violations.push(`SRP: ${className} serves ${actorCount} actors (${actors.join(\", \")}). Split per actor.`);\n    }\n  }\n\n  checkOCP(className: string, switchStatements: string[]): void {\n    if (switchStatements.length > 0) {\n      this.violations.push(`OCP: ${className} uses ${switchStatements.length} type-switches. Replace with polymorphism.`);\n    }\n  }\n\n  checkLSP(baseClass: string, derivedClass: string, baseMethods: string[], overrideMethods: string[]): void {\n    const missing = baseMethods.filter(m => !overrideMethods.includes(m));\n    if (missing.length > 0) {\n      this.violations.push(`LSP: ${derivedClass} does not override ${missing.join(\", \")} from ${baseClass}. May violate base contract.`);\n    }\n  }\n\n  checkISP(interfaceName: string, methodCount: number, threshold: number = 5): void {\n    if (methodCount > threshold) {\n      this.violations.push(`ISP: ${interfaceName} has ${methodCount} methods (>${threshold}). Split into smaller interfaces.`);\n    }\n  }\n\n  checkDIP(className: string, concreteDeps: string[]): void {\n    for (const dep of concreteDeps) {\n      this.violations.push(`DIP: ${className} depends on concrete ${dep}. Depend on abstractions instead.`);\n    }\n  }\n\n  getViolations(): string[] { return [...this.violations]; }\n  clear(): void { this.violations = []; }\n}\n\nclass ParkingLot {\n  private levels: ParkingLevel[] = [];\n  private tickets = new Map<string, ParkingTicket>();\n  private pricingStrategy: PricingStrategy;\n\n  constructor(pricingStrategy: PricingStrategy) {\n    this.pricingStrategy = pricingStrategy;\n  }\n\n  addLevel(level: ParkingLevel): void { this.levels.push(level); }\n\n  parkVehicle(vehicle: Vehicle): ParkingTicket | null {\n    for (const level of this.levels) {\n      const spot = level.findAvailableSpot(vehicle.size);\n      if (spot) {\n        spot.occupy();\n        const ticket = new ParkingTicket(spot, vehicle);\n        this.tickets.set(ticket.id, ticket);\n        return ticket;\n      }\n    }\n    return null;\n  }\n\n  exitVehicle(ticketId: string, paymentMethod: PaymentMethod): Receipt | null {\n    const ticket = this.tickets.get(ticketId);\n    if (!ticket) return null;\n    ticket.spot.vacate();\n    const hours = (Date.now() - ticket.entryTime) / 3600000;\n    const amount = this.pricingStrategy.calculate(hours, ticket.spot.size);\n    const payment = paymentMethod.pay(amount);\n    this.tickets.delete(ticketId);\n    return new Receipt(ticket, amount, payment);\n  }\n}\n\nclass ParkingLevel {\n  spots: ParkingSpot[] = [];\n  constructor(public floor: number) {}\n  addSpot(spot: ParkingSpot): void { this.spots.push(spot); }\n  findAvailableSpot(vehicleSize: SpotSize): ParkingSpot | null {\n    return this.spots.find(s => s.isAvailable && s.size >= vehicleSize) ?? null;\n  }\n}\n\nenum SpotSize { SMALL = 1, MEDIUM = 2, LARGE = 3 }\n\nclass ParkingSpot {\n  isAvailable = true;\n  constructor(public id: string, public size: SpotSize) {}\n  occupy(): void { this.isAvailable = false; }\n  vacate(): void { this.isAvailable = true; }\n}\n\nclass Vehicle {\n  constructor(public licensePlate: string, public size: SpotSize) {}\n}\n\nclass ParkingTicket {\n  readonly id: string;\n  readonly entryTime: number;\n  constructor(public spot: ParkingSpot, public vehicle: Vehicle) {\n    this.id = `TICKET-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;\n    this.entryTime = Date.now();\n  }\n}\n\ninterface PricingStrategy {\n  calculate(hours: number, spotSize: SpotSize): number;\n}\n\nclass HourlyPricing implements PricingStrategy {\n  constructor(private rates: Record<SpotSize, number>) {}\n  calculate(hours: number, spotSize: SpotSize): number {\n    return Math.ceil(Math.max(1, hours)) * (this.rates[spotSize] ?? 5);\n  }\n}\n\ninterface PaymentMethod {\n  pay(amount: number): PaymentReceipt;\n}\n\nclass CreditCardPayment implements PaymentMethod {\n  pay(amount: number): PaymentReceipt {\n    return new PaymentReceipt(\"credit_card\", amount, `CC-${Date.now()}`);\n  }\n}\n\nclass PaymentReceipt {\n  constructor(public method: string, public amount: number, public transactionId: string) {}\n}\n\nclass Receipt {\n  constructor(public ticket: ParkingTicket, public amount: number, public payment: PaymentReceipt) {}\n}\n\nclass ElevatorSystem {\n  private elevators: Elevator[] = [];\n  private floorRequests: Map<number, Direction> = new Map();\n\n  constructor(elevatorCount: number, private floorCount: number) {\n    for (let i = 0; i < elevatorCount; i++) this.elevators.push(new Elevator(i));\n  }\n\n  requestElevator(floor: number, direction: Direction): Elevator | null {\n    let best: Elevator | null = null;\n    let bestScore = Infinity;\n    for (const e of this.elevators) {\n      const score = this.scoreElevator(e, floor, direction);\n      if (score < bestScore) { bestScore = score; best = e; }\n    }\n    best?.addStop(floor);\n    return best;\n  }\n\n  private scoreElevator(e: Elevator, floor: number, direction: Direction): number {\n    if (e.direction === Direction.IDLE) return Math.abs(e.currentFloor - floor);\n    if (e.direction === direction) {\n      if (direction === Direction.UP && floor >= e.currentFloor) return floor - e.currentFloor;\n      if (direction === Direction.DOWN && floor <= e.currentFloor) return e.currentFloor - floor;\n    }\n    return Math.abs(e.currentFloor - floor) + this.floorCount;\n  }\n\n  step(): void {\n    for (const e of this.elevators) e.move();\n  }\n}\n\nenum Direction { UP = 1, DOWN = -1, IDLE = 0 }\n\nclass Elevator {\n  currentFloor = 1;\n  direction: Direction = Direction.IDLE;\n  private stops: number[] = [];\n  doorOpen = false;\n\n  constructor(public id: number) {}\n\n  addStop(floor: number): void {\n    if (!this.stops.includes(floor)) {\n      this.stops.push(floor);\n      this.stops.sort((a, b) => this.direction === Direction.UP ? a - b : b - a);\n    }\n  }\n\n  move(): void {\n    if (this.stops.length === 0) { this.direction = Direction.IDLE; return; }\n    const next = this.stops[0];\n    if (next > this.currentFloor) this.direction = Direction.UP;\n    else if (next < this.currentFloor) this.direction = Direction.DOWN;\n    else this.direction = Direction.IDLE;\n    if (this.currentFloor === next) {\n      this.stops.shift();\n      this.doorOpen = true;\n      setTimeout(() => { this.doorOpen = false; }, 3000);\n    } else {\n      this.currentFloor += this.direction === Direction.UP ? 1 : -1;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-solid-principles-uml-class-diagram",
      children: "Mermaid: SOLID Principles UML Class Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef principle fill#e3f2fd,stroke#1565c0,stroke-width:2px\n    classDef violation fill#ffebee,stroke#c62828,stroke-width:2px\n    classDef example fill#e8f5e9,stroke#2e7d32,stroke-width:2px\n    classDef result fill#fff3e0,stroke#e65100,stroke-width:1px\n\n    subgraph \"SOLID Principles\"\n        SRP[\"SRP: Single Responsibility<br/>One actor per class\"]:::principle\n        OCP[\"OCP: Open/Closed<br/>Open for extension, closed for modification\"]:::principle\n        LSP[\"LSP: Liskov Substitution<br/>Subtypes satisfy base contract\"]:::principle\n        ISP[\"ISP: Interface Segregation<br/>Small, focused interfaces\"]:::principle\n        DIP[\"DIP: Dependency Inversion<br/>Depend on abstractions\"]:::principle\n    end\n\n    subgraph \"Violations\"\n        V1[\"God Object<br/>Many responsibilities\"]:::violation\n        V2[\"Type Switch<br/>if/else on types\"]:::violation\n        V3[\"Square-Rectangle<br/>Behavioral break\"]:::violation\n        V4[\"Fat Interface<br/>NotImplementedError\"]:::violation\n        V5[\"Concrete Coupling<br/>new() in constructor\"]:::violation\n    end\n\n    subgraph \"Solutions\"\n        S1[\"Extract classes per actor\"]:::example\n        S2[\"Strategy Pattern\"]:::example\n        S3[\"Common Abstract Base\"]:::example\n        S4[\"Role Interfaces\"]:::example\n        S5[\"Dependency Injection\"]:::example\n    end\n\n    subgraph \"Metrics\"\n        M1[\"LCOM4 = 1<br/>High cohesion\"]:::result\n        M2[\"Instability = 0<br/>Stable\"]:::result\n        M3[\"Abstractness<br/>0.2 - 0.8\"]:::result\n    end\n\n    SRP -->|\"violated by\"| V1\n    OCP -->|\"violated by\"| V2\n    LSP -->|\"violated by\"| V3\n    ISP -->|\"violated by\"| V4\n    DIP -->|\"violated by\"| V5\n    V1 -->|\"fixed by\"| S1\n    V2 -->|\"fixed by\"| S2\n    V3 -->|\"fixed by\"| S3\n    V4 -->|\"fixed by\"| S4\n    V5 -->|\"fixed by\"| S5\n    S1 -.-> M1\n    S5 -.-> M2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRP: A class should have one reason to change, tied to a single actor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split classes when multiple stakeholders would request changes for different reasons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OCP: Extend behavior via new classes, not modification of existing ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Strategy pattern to add new algorithms; use Decorator pattern to add responsibilities dynamically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSP: Subtypes must satisfy the base type's behavioral contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not model Square as a subtype of Rectangle — both should inherit from a common Shape abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISP: No client should depend on methods it does not use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split large interfaces into role-specific ones (Workable, Eatable, Sleepable instead of Worker)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIP: High-level and low-level modules both depend on abstractions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use constructor injection to pass dependencies; define interfaces in the high-level module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition over inheritance avoids the fragile base class problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer delegation to inheritance; compose behavior via strategy objects rather than overriding methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High cohesion and loose coupling are measurable via LCOM and fan-in/fan-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor LCOM4 (target = 1) and instability metric (lower is more stable) in CI pipelines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refactoring a Legacy Payment Processing System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A fintech startup's core payment system had grown into a 15,000-line ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentProcessor"
      }), " class handling transaction routing, fraud detection, fee calculation, receipt generation, and reconciliation. The class had LCOM4 = 12 (12 disconnected method groups), served 7 different stakeholders, and depended on 8 concrete service implementations (ConcreteFraudDetector, ConcreteFeeCalculator, etc.). Every change — even a simple fee rate update — required a full regression test of the entire payment flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The engineering team applied SOLID principles incrementally over 3 months. First, they identified actors: compliance (fraud/reconciliation), product (fee calculation/routing), accounting (receipt/reporting), and operations (retry/monitoring). Using SRP, they extracted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FraudDetector"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeeCalculator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionRouter"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReceiptGenerator"
      }), " — each with a single responsibility. For OCP, they defined a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeeStrategy"
      }), " interface; a new promotional fee required only a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PromotionalFee"
      }), " implementation. LSP was validated by ensuring all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeeStrategy"
      }), " implementations produced fees within the expected range (±0.01 precision). ISP was applied by splitting a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentService"
      }), " interface into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentAuthorizer"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentCapturer"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentRefunder"
      }), ". DIP was implemented via constructor injection — the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionRouter"
      }), " received an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthorizationService"
      }), " interface, not a concrete ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StripeAuthorization"
      }), " class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result: LCOM4 dropped from 12 to 1-2 per class. Deployment frequency increased from monthly to weekly. A new payment method (BNPL) was added in 2 days instead of 3 weeks. The team also added CI gate checks: any class with LCOM4 > 3 or concrete dependency count > 2 fails the build. The 15,000-line class became 12 classes averaging 800 lines each, with clear ownership per team."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SRP demands one reason to change per class, keyed to a single actor or stakeholder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OCP is achieved through abstraction: add behavior via new classes, not by modifying existing ones."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LSP ensures behavioral substitutability: subtypes must satisfy the base type's contract, not just its signature."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISP mandates small, focused interfaces; clients should never depend on methods they do not call."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DIP inverts traditional dependency direction: high-level and low-level modules both depend on abstractions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composition over inheritance delegates behavior to composed objects, avoiding the fragile base class problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High cohesion and loose coupling are the twin goals of all modular design—measure them with LCOM and fan-in/fan-out metrics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package principles (REP, CCP, CRP) guide module organization and are in natural tension that resolves through project lifecycle stage."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 1"
      }), "\nSRP states \"a class should have one, and only one, reason to change.\" The \"reason to change\" is tied to an **actor** — a stakeholder or group that might request a change. If a class serves multiple actors, a change requested by one actor may break functionality required by another. Identifying the wrong actor leads to misplaced responsibilities: e.g., putting persistence logic in a domain class (the DB team becomes an actor for that class) or putting formatting logic in a business class (the UI team becomes an actor). Always ask: \"Who would request a change to this method?\" If the answer includes multiple stakeholders, SRP is violated.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 2"
      }), "\nLCOM4 = 3 means the class has 3 connected components in the method-field access graph. Methods can be grouped into 3 clusters, each accessing a distinct set of fields — the class does 3 unrelated things. Refactoring strategy: (1) Identify the 3 groups of methods and their associated fields. (2) Extract each group into a separate class. (3) The original class becomes a facade that delegates to the 3 new classes. (4) LCOM4 target for each new class should be 1.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 3"
      }), "\nThe Strategy pattern defines a family of algorithms (strategies) behind a common interface. The client depends on the interface, not the concrete strategy. To add a new algorithm: create a new class implementing the interface — no existing code is modified. Example: A `ShippingCostCalculator` has a `CostStrategy` interface with `calculate(order)`. Initially there are `StandardShipping` and `ExpressShipping` strategies. To add `InternationalShipping`, create a new class — the calculator class remains unchanged (closed for modification), yet new strategies can be added freely (open for extension).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 4"
      }), "\nRectangle's behavioral contract includes the invariant that width and height are **independent** — setting width does not change height, and vice versa. Square inherits from Rectangle but overrides `setWidth` and `setHeight` to keep both equal, violating this invariant. Any code that depends on width/height independence (like a resize function that sets width=5, height=10 and expects area=50) breaks when given a Square. Fixing the hierarchy: both Rectangle and Square inherit from a common `Shape` abstract class with a polymorphic `area()` method. Square is not a subtype of Rectangle — both are subtypes of Shape.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 5"
      }), "\nWhen the interface is defined in the **high-level** module, the high-level module controls the contract — the dependency direction points inward. The low-level module must conform to the high-level module's needs. When the interface is defined in the low-level module, the high-level module depends on an abstraction defined by the low-level module, which is still a form of dependency inversion but weaker ownership. Practical difference: interface ownership determines which team changes the interface. High-level-owned interfaces protect business logic from infrastructure changes — the database team must adapt to the repository interface defined by the domain team, not vice versa.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 1: Refactor Employee to SRP"
      }), "\n**Actors:** Payroll (calculate_pay), IT/DBA (save_to_db), Management (generate_report), HR (send_welcome_email). **Extracted classes:**\n```python\nclass Employee:\n    def __init__(self, name, salary, email): ...\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class PayrollCalculator:\n@staticmethod\ndef calculate_pay(employee): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class EmployeeRepository:\n@staticmethod\ndef save_to_db(employee): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class ReportGenerator:\n@staticmethod\ndef generate_report(employee): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class EmailService:\n@staticmethod\ndef send_welcome_email(employee): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Each class has one actor and one reason to change.\n</details>\n\n<details>\n<summary>Solution for Application Problem 2: Button DIP</summary>\n```python\nfrom abc import ABC, abstractmethod\n\nclass Switchable(ABC):\n    @abstractmethod\n    def turn_on(self): ...\n    @abstractmethod\n    def turn_off(self): ...\n\nclass Button:\n    def __init__(self, device: Switchable):\n        self._device = device\n\n    def press(self):\n        self._device.turn_on()\n\nclass Lamp(Switchable):\n    def turn_on(self): print(\"Lamp on\")\n    def turn_off(self): print(\"Lamp off\")\n\nclass Fan(Switchable):\n    def turn_on(self): print(\"Fan on\")\n    def turn_off(self): print(\"Fan off\")\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Button depends on Switchable abstraction, not on Lamp concretely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 3: Bird Hierarchy Refactor"
      }), "\n**LSP violation:** Penguin cannot fly → substituting Penguin where Bird is expected breaks fly() behavior. Eagle cannot swim → similar issue. **ISP violation:** Bird interface has both fly() and swim() — Penguin depends on fly() it doesn't use. **Redesign:**\n```python\nfrom abc import ABC, abstractmethod\nclass Bird(ABC): pass\nclass Flyable(ABC):\n    @abstractmethod\n    def fly(self): ...\nclass Swimmable(ABC):\n    @abstractmethod\n    def swim(self): ...\nclass Eagle(Bird, Flyable):\n    def fly(self): print(\"Eagle flying\")\nclass Penguin(Bird, Swimmable):\n    def swim(self): print(\"Penguin swimming\")\nclass Duck(Bird, Flyable, Swimmable):\n    def fly(self): print(\"Duck flying\")\n    def swim(self): print(\"Duck swimming\")\n```\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution: SOLID Logging Framework"
      }), "\n```python\nfrom abc import ABC, abstractmethod\nimport json, threading\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "srp-logger-has-one-responsibility--logging-messages",
        children: "SRP: Logger has one responsibility — logging messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "dip-logger-depends-on-appender-and-formatter-abstractions",
        children: "DIP: Logger depends on Appender and Formatter abstractions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class Logger:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, name: str, level: int, formatter: 'Formatter', appenders: list['Appender']):\nself._name = name; self._level = level; self._formatter = formatter; self._appenders = appenders"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "def log(self, level: int, msg: str):\n    if level >= self._level:\n        formatted = self._formatter.format(self._name, level, msg)\n        for a in self._appenders: a.append(formatted)\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "ocp-new-appenders-implement-appender-interface",
        children: "OCP: New appenders implement Appender interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class Appender(ABC):\n@abstractmethod\ndef append(self, msg: str): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class ConsoleAppender(Appender):\ndef append(self, msg): print(msg)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class FileAppender(Appender):\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, path): self.path = path\ndef append(self, msg):\nwith open(self.path, 'a') as f: f.write(msg + '\\n')"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "ocp-new-formatters-implement-formatter-interface",
        children: "OCP: New formatters implement Formatter interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class Formatter(ABC):\n@abstractmethod\ndef format(self, name: str, level: int, msg: str) -> str: ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class PlainFormatter(Formatter):\ndef format(self, name, level, msg): return f\"[{name}] {msg}\""
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class JsonFormatter(Formatter):\ndef format(self, name, level, msg): return json.dumps({\"logger\": name, \"level\": level, \"msg\": msg})"
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "isp-separate-switchable-interface-networkappender-doesnt-depend-on-json",
        children: "ISP: Separate Switchable interface, NetworkAppender doesn't depend on JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class Switchable(ABC):\n@abstractmethod\ndef turn_on(self): ...\n@abstractmethod\ndef turn_off(self): ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class NetworkAppender(Appender):\ndef append(self, msg): print(f\"NET: {msg}\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "usage",
        children: "Usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "logger = Logger(\"app\", 1, PlainFormatter(), [ConsoleAppender(), FileAppender(\"log.txt\")])\nlogger.log(1, \"Hello SOLID!\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "</details>\n"
        })
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