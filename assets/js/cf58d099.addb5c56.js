"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93605],{

/***/ 31803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_64_interview_design_patterns_md_cf5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-64-interview-design-patterns-md-cf5.json
const site_docs_courses_java_64_interview_design_patterns_md_cf5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/64-interview-design-patterns","title":"64. Design Patterns → Interview Q&A","description":"Previous System Design Interview Q&amp;A","source":"@site/docs/courses/java/64-interview-design-patterns.md","sourceDirName":"courses/java","slug":"/java/64-interview-design-patterns","permalink":"/ai-engineering-journey/java/64-interview-design-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":72,"frontMatter":{"id":"64-interview-design-patterns","slug":"/java/64-interview-design-patterns","title":"64. Design Patterns → Interview Q&A","sidebar_label":"64. Design Patterns → Interview Q&A","sidebar_position":72},"sidebar":"coursesSidebar","previous":{"title":"63. Tools & DevOps — Interview Q&A","permalink":"/ai-engineering-journey/java/63-interview-tools"},"next":{"title":"65. System Design → Interview Q&A","permalink":"/ai-engineering-journey/java/65-interview-system-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/64-interview-design-patterns.md


const frontMatter = {
	id: '64-interview-design-patterns',
	slug: '/java/64-interview-design-patterns',
	title: '64. Design Patterns → Interview Q&A',
	sidebar_label: '64. Design Patterns → Interview Q&A',
	sidebar_position: 72
};
const contentTitle = '64. Design Patterns → Interview Q&A';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q1: What are the three categories of design patterns in the GoF book?",
  "id": "q1-what-are-the-three-categories-of-design-patterns-in-the-gof-book",
  "level": 3
}, {
  "value": "Q2: What is the Singleton pattern and how do you implement it in Java?",
  "id": "q2-what-is-the-singleton-pattern-and-how-do-you-implement-it-in-java",
  "level": 3
}, {
  "value": "Q3: What is the Factory Method pattern?",
  "id": "q3-what-is-the-factory-method-pattern",
  "level": 3
}, {
  "value": "Q4: What is the Abstract Factory pattern?",
  "id": "q4-what-is-the-abstract-factory-pattern",
  "level": 3
}, {
  "value": "Q5: What is the Builder pattern and when do you use it?",
  "id": "q5-what-is-the-builder-pattern-and-when-do-you-use-it",
  "level": 3
}, {
  "value": "Q6: What is the Prototype pattern?",
  "id": "q6-what-is-the-prototype-pattern",
  "level": 3
}, {
  "value": "Q7: What is the Adapter pattern?",
  "id": "q7-what-is-the-adapter-pattern",
  "level": 3
}, {
  "value": "Q8: What is the Decorator pattern?",
  "id": "q8-what-is-the-decorator-pattern",
  "level": 3
}, {
  "value": "Q9: What is the Proxy pattern?",
  "id": "q9-what-is-the-proxy-pattern",
  "level": 3
}, {
  "value": "Q10: What is the Facade pattern?",
  "id": "q10-what-is-the-facade-pattern",
  "level": 3
}, {
  "value": "Q11: What is the Strategy pattern?",
  "id": "q11-what-is-the-strategy-pattern",
  "level": 3
}, {
  "value": "Q12: What is the Observer pattern?",
  "id": "q12-what-is-the-observer-pattern",
  "level": 3
}, {
  "value": "Q13: What is the Template Method pattern?",
  "id": "q13-what-is-the-template-method-pattern",
  "level": 3
}, {
  "value": "Q14: What is the Command pattern?",
  "id": "q14-what-is-the-command-pattern",
  "level": 3
}, {
  "value": "Q15: What is the Chain of Responsibility pattern?",
  "id": "q15-what-is-the-chain-of-responsibility-pattern",
  "level": 3
}, {
  "value": "Q16: What is the State pattern?",
  "id": "q16-what-is-the-state-pattern",
  "level": 3
}, {
  "value": "Q17: What is the Composite pattern?",
  "id": "q17-what-is-the-composite-pattern",
  "level": 3
}, {
  "value": "Q18: What is the Flyweight pattern?",
  "id": "q18-what-is-the-flyweight-pattern",
  "level": 3
}, {
  "value": "Q19: What is the Proxy pattern used for in Spring AOP?",
  "id": "q19-what-is-the-proxy-pattern-used-for-in-spring-aop",
  "level": 3
}, {
  "value": "Q20: What is the Mediator pattern?",
  "id": "q20-what-is-the-mediator-pattern",
  "level": 3
}, {
  "value": "Q21: What is the Memento pattern?",
  "id": "q21-what-is-the-memento-pattern",
  "level": 3
}, {
  "value": "Q22: What is the Interpreter pattern?",
  "id": "q22-what-is-the-interpreter-pattern",
  "level": 3
}, {
  "value": "Q23: What is the Visitor pattern?",
  "id": "q23-what-is-the-visitor-pattern",
  "level": 3
}, {
  "value": "Q24: What enterprise integration patterns are most relevant for Spring Boot?",
  "id": "q24-what-enterprise-integration-patterns-are-most-relevant-for-spring-boot",
  "level": 3
}, {
  "value": "Q25: What is the Saga pattern in distributed transactions?",
  "id": "q25-what-is-the-saga-pattern-in-distributed-transactions",
  "level": 3
}, {
  "value": "Q26: What are the most common anti-patterns in Java/Spring applications?",
  "id": "q26-what-are-the-most-common-anti-patterns-in-javaspring-applications",
  "level": 3
}, {
  "value": "Q27: What are concurrency patterns in Java?",
  "id": "q27-what-are-concurrency-patterns-in-java",
  "level": 3
}, {
  "value": "Q28: What is the Data Access Object (DAO) pattern?",
  "id": "q28-what-is-the-data-access-object-dao-pattern",
  "level": 3
}, {
  "value": "Q29: What is the DTO (Data Transfer Object) pattern?",
  "id": "q29-what-is-the-dto-data-transfer-object-pattern",
  "level": 3
}, {
  "value": "Q30: What are functional programming patterns used in Java 8+?",
  "id": "q30-what-are-functional-programming-patterns-used-in-java-8",
  "level": 3
}, {
  "value": "Q31: What design patterns are used in Spring Framework itself?",
  "id": "q31-what-design-patterns-are-used-in-spring-framework-itself",
  "level": 3
}, {
  "value": "Q32: What is the difference between Strategy and State patterns?",
  "id": "q32-what-is-the-difference-between-strategy-and-state-patterns",
  "level": 3
}, {
  "value": "Q33: What is the difference between Factory Method and Abstract Factory?",
  "id": "q33-what-is-the-difference-between-factory-method-and-abstract-factory",
  "level": 3
}, {
  "value": "Q34: What is the difference between Proxy and Decorator patterns?",
  "id": "q34-what-is-the-difference-between-proxy-and-decorator-patterns",
  "level": 3
}, {
  "value": "Q35: When would you use Template Method vs Strategy?",
  "id": "q35-when-would-you-use-template-method-vs-strategy",
  "level": 3
}, {
  "value": "Q36: What is the difference between Adapter and Facade patterns?",
  "id": "q36-what-is-the-difference-between-adapter-and-facade-patterns",
  "level": 3
}, {
  "value": "Q37: What is the difference between Command and Strategy patterns?",
  "id": "q37-what-is-the-difference-between-command-and-strategy-patterns",
  "level": 3
}, {
  "value": "Q38: What is the difference between Composite and Decorator patterns?",
  "id": "q38-what-is-the-difference-between-composite-and-decorator-patterns",
  "level": 3
}, {
  "value": "Q39: What is the difference between Singleton and Prototype bean scopes in Spring?",
  "id": "q39-what-is-the-difference-between-singleton-and-prototype-bean-scopes-in-spring",
  "level": 3
}, {
  "value": "Q40: What is the difference between JPA Entity and DTO?",
  "id": "q40-what-is-the-difference-between-jpa-entity-and-dto",
  "level": 3
}, {
  "value": "Q41: What is the specification pattern?",
  "id": "q41-what-is-the-specification-pattern",
  "level": 3
}, {
  "value": "Q42: What is the Null Object pattern?",
  "id": "q42-what-is-the-null-object-pattern",
  "level": 3
}, {
  "value": "Q43: What is the Builder pattern&#39;s relationship with Immutable objects?",
  "id": "q43-what-is-the-builder-patterns-relationship-with-immutable-objects",
  "level": 3
}, {
  "value": "Q44: What is the difference between Service Layer and Repository pattern?",
  "id": "q44-what-is-the-difference-between-service-layer-and-repository-pattern",
  "level": 3
}, {
  "value": "Q45: What is the difference between Inversion of Control and Dependency Injection?",
  "id": "q45-what-is-the-difference-between-inversion-of-control-and-dependency-injection",
  "level": 3
}, {
  "value": "Q46: What is the Law of Demeter (Principle of Least Knowledge)?",
  "id": "q46-what-is-the-law-of-demeter-principle-of-least-knowledge",
  "level": 3
}, {
  "value": "Q47: What is the difference between Inheritance and Composition?",
  "id": "q47-what-is-the-difference-between-inheritance-and-composition",
  "level": 3
}, {
  "value": "Q48: What are marker interfaces in Java?",
  "id": "q48-what-are-marker-interfaces-in-java",
  "level": 3
}, {
  "value": "Q49: What is the difference between checked and unchecked exceptions in Java design?",
  "id": "q49-what-is-the-difference-between-checked-and-unchecked-exceptions-in-java-design",
  "level": 3
}, {
  "value": "Q50: How do you handle cross-cutting concerns with AOP?",
  "id": "q50-how-do-you-handle-cross-cutting-concerns-with-aop",
  "level": 3
}, {
  "value": "Q51: What is the difference between a framework and a library?",
  "id": "q51-what-is-the-difference-between-a-framework-and-a-library",
  "level": 3
}, {
  "value": "Q52: What is the difference between Cohesion and Coupling?",
  "id": "q52-what-is-the-difference-between-cohesion-and-coupling",
  "level": 3
}, {
  "value": "Q53: What is DRY (Don&#39;t Repeat Yourself)?",
  "id": "q53-what-is-dry-dont-repeat-yourself",
  "level": 3
}, {
  "value": "Q54: What is YAGNI (You Aren&#39;t Gonna Need It)?",
  "id": "q54-what-is-yagni-you-arent-gonna-need-it",
  "level": 3
}, {
  "value": "Q55: How do you refactor a God Class?",
  "id": "q55-how-do-you-refactor-a-god-class",
  "level": 3
}, {
  "value": "Q56: What patterns help with writing testable code?",
  "id": "q56-what-patterns-help-with-writing-testable-code",
  "level": 3
}, {
  "value": "Q57: What patterns are used in event-driven architectures?",
  "id": "q57-what-patterns-are-used-in-event-driven-architectures",
  "level": 3
}, {
  "value": "Q58: What are the most common architectural patterns for microservices?",
  "id": "q58-what-are-the-most-common-architectural-patterns-for-microservices",
  "level": 3
}, {
  "value": "Q59: What is the difference between a monolith and a modular monolith?",
  "id": "q59-what-is-the-difference-between-a-monolith-and-a-modular-monolith",
  "level": 3
}, {
  "value": "Q60: What is a hexagonal architecture (Ports and Adapters)?",
  "id": "q60-what-is-a-hexagonal-architecture-ports-and-adapters",
  "level": 3
}, {
  "value": "Q61: What is the difference between Domain-Driven Design (DDD) and traditional entity/service architecture?",
  "id": "q61-what-is-the-difference-between-domain-driven-design-ddd-and-traditional-entityservice-architecture",
  "level": 3
}, {
  "value": "Q62: What is the difference between an Aggregate and an Aggregate Root in DDD?",
  "id": "q62-what-is-the-difference-between-an-aggregate-and-an-aggregate-root-in-ddd",
  "level": 3
}, {
  "value": "Q63: What is an anti-corruption layer?",
  "id": "q63-what-is-an-anti-corruption-layer",
  "level": 3
}, {
  "value": "Q64: What is a domain event?",
  "id": "q64-what-is-a-domain-event",
  "level": 3
}, {
  "value": "Q65: What is a value object?",
  "id": "q65-what-is-a-value-object",
  "level": 3
}, {
  "value": "Q66: What are the most common Java EE / Jakarta EE patterns?",
  "id": "q66-what-are-the-most-common-java-ee--jakarta-ee-patterns",
  "level": 3
}, {
  "value": "Q67: What is the difference between a framework pattern and an application pattern?",
  "id": "q67-what-is-the-difference-between-a-framework-pattern-and-an-application-pattern",
  "level": 3
}, {
  "value": "Q68: What is the difference between a pattern and an anti-pattern?",
  "id": "q68-what-is-the-difference-between-a-pattern-and-an-anti-pattern",
  "level": 3
}, {
  "value": "Q69: What patterns help with performance optimization?",
  "id": "q69-what-patterns-help-with-performance-optimization",
  "level": 3
}, {
  "value": "Q70: How do patterns relate to software architecture?",
  "id": "q70-how-do-patterns-relate-to-software-architecture",
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
        id: "64-design-patterns--interview-qa",
        children: "64. Design Patterns → Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/63-interview-tools",
          children: "Tools & DevOps Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/65-interview-system-design",
          children: "System Design Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the most important design patterns for Java backend development: creational, structural, behavioral, enterprise integration, concurrency patterns, and anti-patterns. Each pattern includes a real-world Spring Boot usage example."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/64-interview-design-patterns.png",
        alt: "Design Patterns Interview - Mindmap"
      })
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
        href: "../../assets/images/lessons/java/64-interview-design-patterns/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/64-interview-design-patterns/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/64-interview-design-patterns/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/64-interview-design-patterns/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/64-interview-design-patterns/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/64-interview-design-patterns/visual-explanation.png",
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
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-are-the-three-categories-of-design-patterns-in-the-gof-book",
      children: "Q1: What are the three categories of design patterns in the GoF book?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Gang of Four (GoF) book categorizes 23 design patterns into three groups:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Creational patterns"
          }), " → deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. Examples: Singleton, Factory Method, Abstract Factory, Builder, Prototype."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structural patterns"
          }), " → deal with object composition, identifying simple ways to realize relationships between entities. Examples: Adapter, Decorator, Proxy, Facade, Composite, Bridge, Flyweight."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Behavioral patterns"
          }), " → deal with communication between objects, identifying patterns of communication. Examples: Strategy, Observer, Template Method, Command, Chain of Responsibility, State, Visitor, Mediator, Iterator, Memento, Interpreter."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-singleton-pattern-and-how-do-you-implement-it-in-java",
      children: "Q2: What is the Singleton pattern and how do you implement it in Java?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Singleton ensures a class has only one instance and provides a global access point to it. In Spring, beans are singletons by default (one instance per IoC container)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classic thread-safe implementation (bill-pugh / initialization-on-demand holder):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DatabaseConnectionPool {\n    private DatabaseConnectionPool() {\n        // private constructor\n    }\n\n    private static class Holder {\n        static final DatabaseConnectionPool INSTANCE = new DatabaseConnectionPool();\n    }\n\n    public static DatabaseConnectionPool getInstance() {\n        return Holder.INSTANCE;\n    }\n\n    public Connection getConnection() {\n        // return pooled connection\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enum singleton (most robust, prevents reflection attack):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum ConfigManager {\n    INSTANCE;\n\n    private Properties properties = new Properties();\n\n    public String get(String key) {\n        return properties.getProperty(key);\n    }\n\n    public void load(String path) throws IOException {\n        try (InputStream is = new FileInputStream(path)) {\n            properties.load(is);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot, beans are singleton by default:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service  // Singleton scope (default)\npublic class OrderService {\n    // Single instance shared across the application\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Singleton is the default Spring bean scope. Other scopes: prototype, request, session, application, websocket."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-factory-method-pattern",
      children: "Q3: What is the Factory Method pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Factory Method defines an interface for creating an object, but lets subclasses decide which class to instantiate. It lets a class defer instantiation to subclasses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Product interface\npublic interface PaymentProcessor {\n    PaymentResult process(PaymentRequest request);\n}\n\n// Concrete products\npublic class CreditCardProcessor implements PaymentProcessor {\n    public PaymentResult process(PaymentRequest request) {\n        // process credit card payment\n    }\n}\n\npublic class PayPalProcessor implements PaymentProcessor {\n    public PaymentResult process(PaymentRequest request) {\n        // process PayPal payment\n    }\n}\n\n// Factory method in the creator\npublic abstract class PaymentService {\n    public PaymentResult executePayment(PaymentRequest request) {\n        PaymentProcessor processor = createProcessor(request.method());\n        return processor.process(request);\n    }\n\n    // Factory method → subclasses implement this\n    protected abstract PaymentProcessor createProcessor(String method);\n}\n\n// Concrete creator\n@Component\npublic class StandardPaymentService extends PaymentService {\n    @Override\n    protected PaymentProcessor createProcessor(String method) {\n        return switch (method) {\n            case \"CREDIT_CARD\" -> new CreditCardProcessor();\n            case \"PAYPAL\" -> new PayPalProcessor();\n            default -> throw new IllegalArgumentException(\"Unknown method: \" + method);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["In Spring, Factory Method is commonly seen in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Bean"
        }), " methods in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), " classes:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class AppConfig {\n    @Bean\n    public PaymentProcessor paymentProcessor() {\n        return new CreditCardProcessor();  // factory method\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-abstract-factory-pattern",
      children: "Q4: What is the Abstract Factory pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Abstract Factory provides an interface for creating families of related or dependent objects without specifying their concrete classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Abstract factory\npublic interface UIFactory {\n    Button createButton();\n    TextField createTextField();\n    Checkbox createCheckbox();\n}\n\n// Concrete factory 1\npublic class DarkThemeFactory implements UIFactory {\n    public Button createButton() { return new DarkButton(); }\n    public TextField createTextField() { return new DarkTextField(); }\n    public Checkbox createCheckbox() { return new DarkCheckbox(); }\n}\n\n// Concrete factory 2\npublic class LightThemeFactory implements UIFactory {\n    public Button createButton() { return new LightButton(); }\n    public TextField createTextField() { return new LightTextField(); }\n    public Checkbox createCheckbox() { return new LightCheckbox(); }\n}\n\n// Client\npublic class Application {\n    private final UIFactory uiFactory;\n\n    public Application(UIFactory uiFactory) {\n        this.uiFactory = uiFactory;\n    }\n\n    public void render() {\n        Button button = uiFactory.createButton();\n        TextField field = uiFactory.createTextField();\n        // render UI\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["In Spring Boot, Abstract Factory is seen in Spring Cloud's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableDiscoveryClient"
        }), " which auto-configures families of discovery implementations (Eureka, Consul, ZooKeeper)."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-builder-pattern-and-when-do-you-use-it",
      children: "Q5: What is the Builder pattern and when do you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Builder separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Used when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objects have many optional parameters (telescoping constructor problem)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construction involves multiple steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objects should be immutable after construction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Order {\n    private final String orderId;\n    private final String userId;\n    private final List<OrderItem> items;\n    private final Address shippingAddress;\n    private final String couponCode;\n    private final boolean giftWrap;\n    private final String deliveryInstructions;\n\n    private Order(Builder builder) {\n        this.orderId = builder.orderId;\n        this.userId = builder.userId;\n        this.items = Collections.unmodifiableList(builder.items);\n        this.shippingAddress = builder.shippingAddress;\n        this.couponCode = builder.couponCode;\n        this.giftWrap = builder.giftWrap;\n        this.deliveryInstructions = builder.deliveryInstructions;\n    }\n\n    // Getters (no setters → immutable)\n\n    public static class Builder {\n        private String orderId;\n        private String userId;\n        private List<OrderItem> items = new ArrayList<>();\n        private Address shippingAddress;\n        private String couponCode;\n        private boolean giftWrap;\n        private String deliveryInstructions;\n\n        public Builder(String orderId, String userId) {\n            this.orderId = orderId;\n            this.userId = userId;\n        }\n\n        public Builder items(List<OrderItem> items) {\n            this.items = items;\n            return this;\n        }\n\n        public Builder shippingAddress(Address address) {\n            this.shippingAddress = address;\n            return this;\n        }\n\n        public Builder couponCode(String code) {\n            this.couponCode = code;\n            return this;\n        }\n\n        public Builder giftWrap(boolean giftWrap) {\n            this.giftWrap = giftWrap;\n            return this;\n        }\n\n        public Order build() {\n            return new Order(this);\n        }\n    }\n}\n\n// Usage\nOrder order = new Order.Builder(\"ord-123\", \"usr-456\")\n    .items(List.of(new OrderItem(\"p1\", 2)))\n    .shippingAddress(address)\n    .couponCode(\"SAVE10\")\n    .giftWrap(true)\n    .build();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RestClient.builder()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UriComponentsBuilder"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityFilterChain"
      }), " with Lambda DSL, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockMvcRequestBuilders"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-prototype-pattern",
      children: "Q6: What is the Prototype pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prototype creates new objects by cloning an existing object (prototype) rather than instantiating a new class. Useful when object creation is expensive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Scope(\"prototype\")\npublic class ReportTemplate implements Cloneable {\n    private String header;\n    private String footer;\n    private String format;\n    private Map<String, String> styles = new HashMap<>();\n\n    // setters and configuration...\n\n    @Override\n    public ReportTemplate clone() {\n        try {\n            ReportTemplate cloned = (ReportTemplate) super.clone();\n            cloned.styles = new HashMap<>(this.styles);  // deep copy mutable fields\n            return cloned;\n        } catch (CloneNotSupportedException e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      }), " Creating multiple HTTP request objects from a template, document generation, test data factories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-adapter-pattern",
      children: "Q7: What is the Adapter pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Adapter allows incompatible interfaces to work together. It converts the interface of a class into another interface that the client expects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Target interface (what the client expects)\npublic interface PaymentGateway {\n    PaymentResponse charge(String token, BigDecimal amount);\n}\n\n// Adaptee (existing class with different interface)\npublic class StripeApi {\n    public StripeCharge createCharge(Double amount, String sourceId, String currency) {\n        // Stripe-specific implementation\n    }\n}\n\n// Adapter\n@Component\npublic class StripePaymentAdapter implements PaymentGateway {\n    private final StripeApi stripeApi;\n\n    public StripePaymentAdapter(StripeApi stripeApi) {\n        this.stripeApi = stripeApi;\n    }\n\n    @Override\n    public PaymentResponse charge(String token, BigDecimal amount) {\n        StripeCharge charge = stripeApi.createCharge(\n            amount.doubleValue(),\n            token,\n            \"USD\"\n        );\n        return new PaymentResponse(charge.getId(), charge.getStatus());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Security filter chains (", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityFilterChain"
      }), " adapts multiple security configurations), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandlerAdapter"
      }), " (adapts controllers to the framework)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-decorator-pattern",
      children: "Q8: What is the Decorator pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Decorator allows behavior to be added to an individual object dynamically, without affecting other objects of the same class. An alternative to subclassing for extending functionality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Component interface\npublic interface DataSource {\n    void writeData(String data);\n    String readData();\n}\n\n// Concrete component\npublic class FileDataSource implements DataSource {\n    private final String filename;\n\n    public FileDataSource(String filename) {\n        this.filename = filename;\n    }\n\n    public void writeData(String data) {\n        Files.writeString(Path.of(filename), data);\n    }\n\n    public String readData() {\n        return Files.readString(Path.of(filename));\n    }\n}\n\n// Base decorator\npublic abstract class DataSourceDecorator implements DataSource {\n    protected DataSource wrappee;\n\n    public DataSourceDecorator(DataSource source) {\n        this.wrappee = source;\n    }\n\n    public void writeData(String data) {\n        wrappee.writeData(data);\n    }\n\n    public String readData() {\n        return wrappee.readData();\n    }\n}\n\n// Concrete decorator 1\npublic class EncryptionDecorator extends DataSourceDecorator {\n    public EncryptionDecorator(DataSource source) {\n        super(source);\n    }\n\n    @Override\n    public void writeData(String data) {\n        super.writeData(encrypt(data));\n    }\n\n    @Override\n    public String readData() {\n        return decrypt(super.readData());\n    }\n\n    private String encrypt(String data) { /* AES encrypt */ }\n    private String decrypt(String data) { /* AES decrypt */ }\n}\n\n// Concrete decorator 2\npublic class CompressionDecorator extends DataSourceDecorator {\n    public CompressionDecorator(DataSource source) {\n        super(source);\n    }\n\n    @Override\n    public void writeData(String data) {\n        super.writeData(compress(data));\n    }\n\n    @Override\n    public String readData() {\n        return decompress(super.readData());\n    }\n}\n\n// Usage\nDataSource source = new FileDataSource(\"data.txt\");\nsource = new CompressionDecorator(source);\nsource = new EncryptionDecorator(source);\nsource.writeData(\"Hello, World!\");  // encrypted + compressed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Servlet filters (", (0,jsx_runtime.jsx)(_components.code, {
        children: "OncePerRequestFilter"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandlerInterceptor"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CacheAspect"
      }), " (AOP decorates methods)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-proxy-pattern",
      children: "Q9: What is the Proxy pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Proxy provides a surrogate or placeholder for another object to control access to it. Types: virtual proxy (lazy loading), protection proxy (access control), remote proxy (RPC)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Subject interface\npublic interface InventoryService {\n    InventoryCheckResult checkStock(String productId, int quantity);\n}\n\n// Real subject\npublic class RemoteInventoryService implements InventoryService {\n    @Override\n    public InventoryCheckResult checkStock(String productId, int quantity) {\n        // Expensive API call to external warehouse system\n    }\n}\n\n// Protection proxy\n@Component\npublic class InventoryServiceProxy implements InventoryService {\n    private final RemoteInventoryService realService;\n    private final CacheManager cacheManager;\n\n    @Override\n    public InventoryCheckResult checkStock(String productId, int quantity) {\n        // Check cache first (lazy + caching)\n        String cacheKey = \"stock:\" + productId;\n        InventoryCheckResult cached = cacheManager.get(cacheKey);\n        if (cached != null) {\n            return cached;\n        }\n\n        // Delegate to real service\n        InventoryCheckResult result = realService.checkStock(productId, quantity);\n\n        // Cache for 5 minutes\n        cacheManager.put(cacheKey, result, Duration.ofMinutes(5));\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " AOP proxies (when you annotate a method with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Cacheable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.reflect.Proxy"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CGLIB"
      }), " proxies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-the-facade-pattern",
      children: "Q10: What is the Facade pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Facade provides a simplified interface to a complex subsystem. It hides the complexity of multiple interdependent classes behind a single, easy-to-use API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Complex subsystem classes\npublic class OrderValidator { /* validates order */ }\npublic class PaymentProcessor { /* processes payment */ }\npublic class InventoryManager { /* updates inventory */ }\npublic class ShippingService { /* arranges shipment */ }\npublic class NotificationService { /* sends emails */ }\n\n// Facade\n@Service\npublic class OrderFacade {\n    private final OrderValidator validator;\n    private final PaymentProcessor paymentProcessor;\n    private final InventoryManager inventoryManager;\n    private final ShippingService shippingService;\n    private final NotificationService notificationService;\n\n    public OrderResult placeOrder(OrderRequest request) {\n        // Step 1: Validate\n        validator.validate(request);\n\n        // Step 2: Process payment\n        PaymentResult payment = paymentProcessor.charge(request.total());\n\n        // Step 3: Update inventory\n        inventoryManager.deduct(request.items());\n\n        // Step 4: Arrange shipping\n        Shipping shipping = shippingService.schedule(request.address());\n\n        // Step 5: Notify\n        notificationService.sendConfirmation(request.userEmail());\n\n        return new OrderResult(request.orderId(), payment, shipping);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JdbcTemplate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RestTemplate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KafkaTemplate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RedisTemplate"
      }), " → all facades over complex underlying APIs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-the-strategy-pattern",
      children: "Q11: What is the Strategy pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable. The algorithm can vary independently from the clients that use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Strategy interface\npublic interface PricingStrategy {\n    BigDecimal calculatePrice(BigDecimal basePrice, OrderContext context);\n}\n\n// Concrete strategies\npublic class StandardPricing implements PricingStrategy {\n    public BigDecimal calculatePrice(BigDecimal basePrice, OrderContext context) {\n        return basePrice;  // no discount\n    }\n}\n\npublic class LoyaltyPricing implements PricingStrategy {\n    public BigDecimal calculatePrice(BigDecimal basePrice, OrderContext context) {\n        return basePrice.multiply(BigDecimal.valueOf(0.9));  // 10% off\n    }\n}\n\npublic class BulkPricing implements PricingStrategy {\n    public BigDecimal calculatePrice(BigDecimal basePrice, OrderContext context) {\n        return basePrice.multiply(BigDecimal.valueOf(0.85));  // 15% off for bulk\n    }\n}\n\n// Context\n@Service\npublic class PricingService {\n    private final Map<String, PricingStrategy> strategies;\n\n    public PricingService() {\n        this.strategies = new HashMap<>();\n        strategies.put(\"STANDARD\", new StandardPricing());\n        strategies.put(\"LOYALTY\", new LoyaltyPricing());\n        strategies.put(\"BULK\", new BulkPricing());\n    }\n\n    public BigDecimal calculatePrice(Order order) {\n        PricingStrategy strategy = strategies.get(order.getCustomerTier());\n        if (strategy == null) {\n            strategy = strategies.get(\"STANDARD\");\n        }\n        return strategy.calculatePrice(order.getTotal(), order.toContext());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " (different auth strategies), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PasswordEncoder"
      }), " (different encoding algorithms), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceHandler"
      }), " in security config."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "With dependency injection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class PricingService {\n    private final Map<String, PricingStrategy> strategies;\n\n    public PricingService(List<PricingStrategy> strategyList) {\n        this.strategies = strategyList.stream()\n            .collect(Collectors.toMap(\n                s -> s.getClass().getAnnotation(Component.class).value(),\n                Function.identity()\n            ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-is-the-observer-pattern",
      children: "Q12: What is the Observer pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Observer defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Event (the notification object)\npublic record OrderCreatedEvent(String orderId, String userId, BigDecimal total) {}\n\n// Observable / Subject\n@Component\npublic class EventPublisher {\n    private final List<EventListener> listeners = new CopyOnWriteArrayList<>();\n\n    public void subscribe(EventListener listener) {\n        listeners.add(listener);\n    }\n\n    public void unsubscribe(EventListener listener) {\n        listeners.remove(listener);\n    }\n\n    public void publish(OrderCreatedEvent event) {\n        listeners.forEach(listener -> listener.onEvent(event));\n    }\n}\n\n// Observer interface\npublic interface EventListener {\n    void onEvent(OrderCreatedEvent event);\n}\n\n// Concrete observers\n@Component\npublic class EmailNotificationListener implements EventListener {\n    @Override\n    public void onEvent(OrderCreatedEvent event) {\n        // Send confirmation email\n    }\n}\n\n@Component\npublic class InventoryUpdateListener implements EventListener {\n    @Override\n    public void onEvent(OrderCreatedEvent event) {\n        // Update inventory\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative → Guava EventBus:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderEventBus {\n    private final EventBus eventBus = new EventBus();\n\n    public void post(Object event) {\n        eventBus.post(event);\n    }\n\n    public void register(Object listener) {\n        eventBus.register(listener);\n    }\n}\n\n@Component\npublic class EmailService {\n    @Subscribe\n    public void handleOrderCreated(OrderCreatedEvent event) {\n        // send email\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationEventPublisher"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " is the canonical Observer implementation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderCreatedPublisher {\n    @Autowired\n    private ApplicationEventPublisher publisher;\n\n    public void createOrder(OrderRequest request) {\n        Order order = doCreate(request);\n        publisher.publishEvent(new OrderCreatedEvent(order.getId()));\n    }\n}\n\n@Component\npublic class EmailService {\n    @EventListener\n    public void handle(OrderCreatedEvent event) {\n        // send email asynchronously\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-is-the-template-method-pattern",
      children: "Q13: What is the Template Method pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Template Method defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Subclasses can redefine certain steps without changing the algorithm's structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public abstract class DataExporter {\n    // Template method → defines the algorithm skeleton\n    public final File export(DataRequest request) {\n        validate(request);\n        List<Data> data = fetchData(request);\n        String formattedData = format(data);\n        File file = writeToFile(formattedData);\n        postProcess(file);\n        return file;\n    }\n\n    protected void validate(DataRequest request) {\n        if (request == null) throw new IllegalArgumentException();\n    }\n\n    protected abstract List<Data> fetchData(DataRequest request);\n    protected abstract String format(List<Data> data);\n\n    protected File writeToFile(String content) {\n        // Common implementation → write to temp file\n    }\n\n    protected void postProcess(File file) {\n        // Hook method → subclasses can override, default does nothing\n    }\n}\n\n@Component\npublic class CsvExporter extends DataExporter {\n    @Override\n    protected List<Data> fetchData(DataRequest request) {\n        return repository.findAllByDateRange(request.startDate(), request.endDate());\n    }\n\n    @Override\n    protected String format(List<Data> data) {\n        StringBuilder sb = new StringBuilder(\"id,name,amount,date\\n\");\n        data.forEach(d -> sb.append(d.toCsvRow()).append(\"\\n\"));\n        return sb.toString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JdbcTemplate"
      }), " (template methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RestTemplate"
      }), " (request execution flow), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebSocketHandler"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AbstractAuthenticationProcessingFilter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-the-command-pattern",
      children: "Q14: What is the Command pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Command encapsulates a request as an object, allowing parameterization of clients with different requests, queuing of requests, and support for undoable operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Command interface\npublic interface Command {\n    void execute();\n    void undo();\n}\n\n// Concrete commands\npublic class CreateOrderCommand implements Command {\n    private final OrderService orderService;\n    private final OrderRequest request;\n    private Order createdOrder;\n\n    public CreateOrderCommand(OrderService orderService, OrderRequest request) {\n        this.orderService = orderService;\n        this.request = request;\n    }\n\n    @Override\n    public void execute() {\n        this.createdOrder = orderService.createOrder(request);\n    }\n\n    @Override\n    public void undo() {\n        if (createdOrder != null) {\n            orderService.cancelOrder(createdOrder.getId());\n        }\n    }\n}\n\n// Invoker\npublic class OrderCommandInvoker {\n    private final List<Command> history = new ArrayList<>();\n\n    public void executeCommand(Command command) {\n        command.execute();\n        history.add(command);\n    }\n\n    public void undoLast() {\n        if (!history.isEmpty()) {\n            Command command = history.remove(history.size() - 1);\n            command.undo();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Runnable"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Callable"
      }), " (thread pool commands), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MessagePostProcessor"
      }), " in RabbitMQ/Kafka, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestMapping"
      }), " handlers (each request is essentially a command execution)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-what-is-the-chain-of-responsibility-pattern",
      children: "Q15: What is the Chain of Responsibility pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Chain of Responsibility lets you pass requests along a chain of handlers. Each handler decides either to process the request or pass it to the next handler in the chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Handler interface\npublic abstract class ValidationHandler {\n    protected ValidationHandler next;\n\n    public ValidationHandler linkWith(ValidationHandler next) {\n        this.next = next;\n        return next;\n    }\n\n    public abstract boolean validate(OrderRequest request);\n\n    protected boolean validateNext(OrderRequest request) {\n        if (next == null) return true;\n        return next.validate(request);\n    }\n}\n\n// Concrete handlers\npublic class UserExistsValidator extends ValidationHandler {\n    @Override\n    public boolean validate(OrderRequest request) {\n        if (!userRepository.existsById(request.userId())) {\n            throw new ValidationException(\"User not found\");\n        }\n        return validateNext(request);\n    }\n}\n\npublic class ProductAvailableValidator extends ValidationHandler {\n    @Override\n    public boolean validate(OrderRequest request) {\n        for (OrderItem item : request.items()) {\n            if (!inventoryService.isAvailable(item.productId(), item.quantity())) {\n                throw new ValidationException(\"Product not available: \" + item.productId());\n            }\n        }\n        return validateNext(request);\n    }\n}\n\npublic class PaymentMethodValidator extends ValidationHandler {\n    @Override\n    public boolean validate(OrderRequest request) {\n        if (!paymentService.isValidMethod(request.paymentMethod())) {\n            throw new ValidationException(\"Invalid payment method\");\n        }\n        return validateNext(request);\n    }\n}\n\n// Building the chain\nValidationHandler chain = new UserExistsValidator();\nchain.linkWith(new ProductAvailableValidator())\n     .linkWith(new PaymentMethodValidator());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Spring Security filter chain (", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityFilterChain"
      }), "), servlet filters, HandlerInterceptor with custom ordering, Java ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger"
      }), " (log level propagation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-what-is-the-state-pattern",
      children: "Q16: What is the State pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " State allows an object to alter its behavior when its internal state changes. The object will appear to change its class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// State interface\npublic interface OrderState {\n    void next(Order order);\n    void cancel(Order order);\n    String getStatus();\n}\n\n// Concrete states\npublic class PendingState implements OrderState {\n    public void next(Order order) {\n        order.setState(new ConfirmedState());\n    }\n    public void cancel(Order order) {\n        order.setState(new CancelledState());\n    }\n    public String getStatus() { return \"PENDING\"; }\n}\n\npublic class ConfirmedState implements OrderState {\n    public void next(Order order) {\n        order.setState(new ShippedState());\n    }\n    public void cancel(Order order) {\n        order.setState(new CancelledState());\n    }\n    public String getStatus() { return \"CONFIRMED\"; }\n}\n\npublic class ShippedState implements OrderState {\n    public void next(Order order) {\n        order.setState(new DeliveredState());\n    }\n    public void cancel(Order order) {\n        throw new IllegalStateException(\"Cannot cancel shipped order\");\n    }\n    public String getStatus() { return \"SHIPPED\"; }\n}\n\n// Context\n@Entity\npublic class Order {\n    @Id private Long id;\n    @Transient\n    private OrderState state = new PendingState();\n\n    public void next() { state.next(this); }\n    public void cancel() { state.cancel(this); }\n    public String getStatus() { return state.getStatus(); }\n\n    public void setState(OrderState state) {\n        this.state = state;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Resource"
      }), " lifecycle management, Spring Security's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityContextHolder"
      }), " (authentication state), batch job execution states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-is-the-composite-pattern",
      children: "Q17: What is the Composite pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Composite composes objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions uniformly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Component\npublic interface MenuItem {\n    String getName();\n    void render();\n    BigDecimal getPrice();\n}\n\n// Leaf\npublic class Dish implements MenuItem {\n    private String name;\n    private BigDecimal price;\n\n    @Override\n    public void render() {\n        System.out.println(\"  \" + name + \" - $\" + price);\n    }\n\n    @Override\n    public BigDecimal getPrice() { return price; }\n}\n\n// Composite\npublic class MenuCategory implements MenuItem {\n    private String name;\n    private List<MenuItem> items = new ArrayList<>();\n\n    public void add(MenuItem item) {\n        items.add(item);\n    }\n\n    public void remove(MenuItem item) {\n        items.remove(item);\n    }\n\n    @Override\n    public void render() {\n        System.out.println(name + \":\");\n        items.forEach(MenuItem::render);\n    }\n\n    @Override\n    public BigDecimal getPrice() {\n        return items.stream()\n            .map(MenuItem::getPrice)\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n    }\n}\n\n// Usage\nMenuCategory menu = new MenuCategory(\"Main Menu\");\nMenuCategory appetizers = new MenuCategory(\"Appetizers\");\nappetizers.add(new Dish(\"Spring Rolls\", BigDecimal.valueOf(5.99)));\nappetizers.add(new Dish(\"Soup\", BigDecimal.valueOf(4.99)));\n\nMenuCategory mains = new MenuCategory(\"Main Courses\");\nmains.add(new Dish(\"Steak\", BigDecimal.valueOf(24.99)));\nmains.add(new Dish(\"Salmon\", BigDecimal.valueOf(18.99)));\n\nmenu.add(appetizers);\nmenu.add(mains);\nmenu.render();  // Renders entire menu tree\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanDefinition"
      }), " hierarchy, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PropertySource"
      }), " hierarchy, Spring Security's filter chain structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-what-is-the-flyweight-pattern",
      children: "Q18: What is the Flyweight pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Flyweight minimizes memory usage by sharing as much data as possible with similar objects. It's useful when a large number of nearly identical objects are needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Flyweight → intrinsic state (shared)\npublic class FontStyle {\n    private final String fontFamily;\n    private final int fontSize;\n    private final boolean bold;\n    private final boolean italic;\n\n    // Constructed with intrinsic state only\n    public FontStyle(String fontFamily, int fontSize, boolean bold, boolean italic) {\n        this.fontFamily = fontFamily;\n        this.fontSize = fontSize;\n        this.bold = bold;\n        this.italic = italic;\n    }\n}\n\n// Flyweight factory\n@Component\npublic class FontStyleFactory {\n    private final Map<String, FontStyle> cache = new HashMap<>();\n\n    public FontStyle getFontStyle(String fontFamily, int fontSize, boolean bold, boolean italic) {\n        String key = fontFamily + \":\" + fontSize + \":\" + bold + \":\" + italic;\n        return cache.computeIfAbsent(key, k ->\n            new FontStyle(fontFamily, fontSize, bold, italic));\n    }\n}\n\n// Client → extrinsic state (unique per character)\npublic class Character {\n    private final char ch;\n    private final int position;\n    private final FontStyle fontStyle;  // shared flyweight\n\n    public Character(char ch, int position, FontStyle fontStyle) {\n        this.ch = ch;\n        this.position = position;\n        this.fontStyle = fontStyle;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Bean caching (singleton scope), connection pooling (shared database connections), thread pools (shared worker threads)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-what-is-the-proxy-pattern-used-for-in-spring-aop",
      children: "Q19: What is the Proxy pattern used for in Spring AOP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Spring AOP uses proxy objects to implement cross-cutting concerns. When you annotate a bean with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Cacheable"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), ", Spring creates a proxy that wraps the original bean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JDK Dynamic Proxy (for interfaces):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderService {\n    Order createOrder(OrderRequest request);\n}\n\n// Spring creates a proxy that wraps this bean\n@Service\n@Transactional\npublic class OrderServiceImpl implements OrderService {\n    public Order createOrder(OrderRequest request) {\n        // Business logic\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring generates a proxy implementing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderService"
      }), ". The proxy starts a transaction before delegating to the real method, then commits or rolls back after."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CGLIB Proxy (for concrete classes):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Cacheable(\"orders\")\npublic class OrderService {\n    public Order getOrder(Long id) {\n        // If not cached, execute method\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the class doesn't implement an interface, Spring uses CGLIB to create a subclass proxy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important caveat → self-invocation doesn't work:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    @Transactional\n    public void createOrder(OrderRequest req) {\n        saveOrder(req);\n        // Direct call → no transactional behavior!\n        updateInventory(req.items());\n    }\n\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\n    public void updateInventory(List<Item> items) {\n        // This runs in the SAME transaction, not a new one\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Self-inject the proxy, or restructure the code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-what-is-the-mediator-pattern",
      children: "Q20: What is the Mediator pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Mediator reduces coupling between communicating objects by having them communicate indirectly through a mediator object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Mediator interface\npublic interface ChatMediator {\n    void sendMessage(String message, User sender);\n    void addUser(User user);\n}\n\n// Concrete mediator\npublic class ChatRoom implements ChatMediator {\n    private final List<User> users = new ArrayList<>();\n\n    @Override\n    public void addUser(User user) {\n        users.add(user);\n    }\n\n    @Override\n    public void sendMessage(String message, User sender) {\n        for (User user : users) {\n            if (user != sender) {\n                user.receive(message, sender.getName());\n            }\n        }\n    }\n}\n\n// Colleague\npublic class User {\n    private String name;\n    private ChatMediator mediator;\n\n    public User(String name, ChatMediator mediator) {\n        this.name = name;\n        this.mediator = mediator;\n    }\n\n    public void send(String message) {\n        mediator.sendMessage(message, this);\n    }\n\n    public void receive(String message, String from) {\n        System.out.println(name + \" received from \" + from + \": \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Spring MVC's DispatcherServlet (acts as mediator between controllers, views, and model), message brokers (RabbitMQ/Kafka act as mediators between services)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-what-is-the-memento-pattern",
      children: "Q21: What is the Memento pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Memento captures and externalizes an object's internal state so the object can be restored to this state later, without violating encapsulation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Memento\npublic record OrderMemento(String state, BigDecimal total, List<OrderItem> items) {}\n\n// Originator\n@Entity\npublic class Order {\n    private String status;\n    private BigDecimal total;\n    private List<OrderItem> items;\n\n    public OrderMemento save() {\n        return new OrderMemento(status, total, new ArrayList<>(items));\n    }\n\n    public void restore(OrderMemento memento) {\n        this.status = memento.state();\n        this.total = memento.total();\n        this.items = new ArrayList<>(memento.items());\n    }\n}\n\n// Caretaker\n@Component\npublic class OrderHistory {\n    private final Map<Long, Stack<OrderMemento>> history = new HashMap<>();\n\n    public void save(Long orderId, Order order) {\n        history.computeIfAbsent(orderId, k -> new Stack<>())\n               .push(order.save());\n    }\n\n    public OrderMemento undo(Long orderId) {\n        Stack<OrderMemento> stack = history.get(orderId);\n        if (stack != null && !stack.isEmpty()) {\n            return stack.pop();\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Optimistic locking with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), ", entity versioning for data recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-what-is-the-interpreter-pattern",
      children: "Q22: What is the Interpreter pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Interpreter defines a grammar for a language and an interpreter that uses the grammar to interpret sentences in the language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Expression interface\npublic interface Expression {\n    boolean interpret(String context);\n}\n\n// Terminal expressions\npublic class ContainsExpression implements Expression {\n    private String substring;\n\n    public ContainsExpression(String substring) {\n        this.substring = substring;\n    }\n\n    @Override\n    public boolean interpret(String context) {\n        return context.contains(substring);\n    }\n}\n\n// Non-terminal expressions\npublic class AndExpression implements Expression {\n    private Expression expr1;\n    private Expression expr2;\n\n    public AndExpression(Expression expr1, Expression expr2) {\n        this.expr1 = expr1;\n        this.expr2 = expr2;\n    }\n\n    @Override\n    public boolean interpret(String context) {\n        return expr1.interpret(context) && expr2.interpret(context);\n    }\n}\n\npublic class OrExpression implements Expression {\n    private Expression expr1;\n    private Expression expr2;\n\n    public OrExpression(Expression expr1, Expression expr2) {\n        this.expr1 = expr1;\n        this.expr2 = expr2;\n    }\n\n    @Override\n    public boolean interpret(String context) {\n        return expr1.interpret(context) || expr2.interpret(context);\n    }\n}\n\n// Usage\nExpression java = new ContainsExpression(\"Java\");\nExpression spring = new ContainsExpression(\"Spring\");\nExpression javaAndSpring = new AndExpression(java, spring);\n\nboolean matches = javaAndSpring.interpret(\"Java Spring Boot\");  // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " Spring Expression Language (SpEL), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value(\"#{...}\")"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreAuthorize"
      }), " with security expressions, query DSLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-what-is-the-visitor-pattern",
      children: "Q23: What is the Visitor pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Visitor lets you define a new operation on a set of objects without changing the objects' classes. It separates the algorithm from the objects it operates on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Visitor interface\npublic interface ReportVisitor {\n    String visit(User user);\n    String visit(Order order);\n    String visit(Product product);\n}\n\n// Concrete visitor\npublic class JsonReportVisitor implements ReportVisitor {\n    @Override\n    public String visit(User user) {\n        return String.format(\"{\\\"id\\\":%d,\\\"name\\\":\\\"%s\\\"}\", user.getId(), user.getName());\n    }\n\n    @Override\n    public String visit(Order order) {\n        return String.format(\"{\\\"id\\\":%d,\\\"total\\\":%.2f}\", order.getId(), order.getTotal());\n    }\n\n    @Override\n    public String visit(Product product) {\n        return String.format(\"{\\\"id\\\":%d,\\\"price\\\":%.2f}\", product.getId(), product.getPrice());\n    }\n}\n\n// Visitable interface\npublic interface Reportable {\n    String accept(ReportVisitor visitor);\n}\n\n// Concrete elements\npublic class User implements Reportable {\n    private Long id;\n    private String name;\n\n    @Override\n    public String accept(ReportVisitor visitor) {\n        return visitor.visit(this);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanPostProcessor"
      }), " (visits beans after creation), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PropertyEditorSupport"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Resource"
      }), " implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-what-enterprise-integration-patterns-are-most-relevant-for-spring-boot",
      children: "Q24: What enterprise integration patterns are most relevant for Spring Boot?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Enterprise Integration Patterns (EIP) that are commonly used in Spring Boot microservices:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Message Channel / Message Endpoint"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n\n    // Message Endpoint\n    public void sendOrder(Order order) {\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"order.created\", order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Message Router"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderRouter {\n    @Bean\n    public IntegrationFlow routeOrders() {\n        return IntegrationFlows.from(\"orders.input\")\n            .<Order, String>route(\n                order -> order.total().compareTo(BigDecimal.valueOf(1000)) > 0\n                    ? \"high-value-orders\"\n                    : \"standard-orders\",\n                mapping -> mapping\n                    .subFlowMapping(\"high-value-orders\", sf -> sf.handle(highValueHandler))\n                    .subFlowMapping(\"standard-orders\", sf -> sf.handle(standardHandler))\n            )\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Aggregator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderAggregator {\n    @Bean\n    public IntegrationFlow aggregateOrders() {\n        return IntegrationFlows.from(\"order.partial\")\n            .aggregate(a -> a\n                .releaseStrategy(group -> group.size() >= 3)\n                .correlationStrategy(m -> m.getHeaders().get(\"orderGroup\"))\n            )\n            .handle(completeOrderHandler)\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Splitter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class BatchOrderSplitter {\n    @Bean\n    public IntegrationFlow splitOrders() {\n        return IntegrationFlows.from(\"batch.orders\")\n            .split(BatchOrder.class, BatchOrder::orders)\n            .handle(individualOrderHandler)\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Dead Letter Channel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  rabbitmq:\n    listener:\n      simple:\n        retry:\n          enabled: true\n          max-attempts: 3\n    template:\n      retry:\n        enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Messages that fail after retries are sent to a dead letter queue for manual inspection."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-what-is-the-saga-pattern-in-distributed-transactions",
      children: "Q25: What is the Saga pattern in distributed transactions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Saga is a microservices pattern for managing distributed transactions. Instead of a single ACID transaction across services, a saga is a sequence of local transactions where each step publishes an event to trigger the next step. If a step fails, compensating transactions undo the previous steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of Saga:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choreography (event-based):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Order Service: step 1\n@Service\npublic class OrderService {\n    @EventListener\n    public void handle(OrderCreatedEvent event) {\n        // Create order\n        publisher.publishEvent(new OrderCreatedEvent(event.orderId()));\n    }\n\n    @EventListener\n    public void handle(OrderFailedEvent event) {\n        // Compensate → cancel order\n    }\n}\n\n// Payment Service: step 2 (triggered by OrderCreatedEvent)\n@Service\npublic class PaymentService {\n    @EventListener\n    public void handle(OrderCreatedEvent event) {\n        try {\n            processPayment(event);\n            publisher.publishEvent(new PaymentProcessedEvent(event.orderId()));\n        } catch (Exception e) {\n            publisher.publishEvent(new PaymentFailedEvent(event.orderId()));\n        }\n    }\n}\n\n// Inventory Service: step 3 (compensating if payment fails)\n@Service\npublic class InventoryService {\n    @EventListener\n    public void handle(PaymentProcessedEvent event) { /* reserve inventory */ }\n\n    @EventListener\n    public void handle(PaymentFailedEvent event) { /* release inventory */ }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration (central coordinator):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderSagaOrchestrator {\n    public void executeOrderSaga(CreateOrderRequest request) {\n        // Step 1: Create order\n        Order order = orderService.createOrder(request);\n\n        try {\n            // Step 2: Reserve inventory\n            inventoryService.reserve(order.items());\n\n            // Step 3: Process payment\n            paymentService.charge(order.total());\n\n            // Step 4: Confirm order\n            orderService.confirm(order.getId());\n        } catch (Exception e) {\n            // Compensate in reverse order\n            paymentService.refund(order.getId());\n            inventoryService.release(order.items());\n            orderService.cancel(order.getId());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-are-the-most-common-anti-patterns-in-javaspring-applications",
      children: "Q26: What are the most common anti-patterns in Java/Spring applications?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. God Class"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern: One class does everything\n@Service\npublic class OrderManager {\n    public void validate(Order o) { /* ... */ }\n    public void processPayment(Order o) { /* ... */ }\n    public void sendEmail(Order o) { /* ... */ }\n    public void updateInventory(Order o) { /* ... */ }\n    public void generateInvoice(Order o) { /* ... */ }\n    public void arrangeShipping(Order o) { /* ... */ }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Split into focused services (OrderValidator, PaymentService, NotificationService, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Circular Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern\n@Service\npublic class OrderService {\n    @Autowired private InventoryService inventoryService;\n}\n\n@Service\npublic class InventoryService {\n    @Autowired private OrderService orderService;  // Circular!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Extract the shared dependency into a third service, or use events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Lazy Loading in Transactions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern: N+1 queries in transaction\n@Service\n@Transactional\npublic class OrderService {\n    public List<Order> getOrders() {\n        return orderRepository.findAll();  // N+1: one query for orders, N for items\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN FETCH"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EntityGraph"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@BatchSize"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Using Field Injection (prefer constructor injection)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern: Field injection\n@Service\npublic class OrderService {\n    @Autowired private OrderRepository orderRepository;  // Can't be final\n}\n\n// ✅ Better: Constructor injection\n@Service\npublic class OrderService {\n    private final OrderRepository orderRepository;\n\n    public OrderService(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Throwaway Service Layer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern: Service that just delegates\n@Service\npublic class OrderService {\n    @Autowired private OrderRepository repo;\n\n    public Order findById(Long id) { return repo.findById(id).orElseThrow(); }\n    public List<Order> findAll() { return repo.findAll(); }\n    public void delete(Long id) { repo.deleteById(id); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Add business logic to the service, or use repository directly in controllers for simple CRUD."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Catch and Ignore"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern\ntry {\n    paymentService.charge(order);\n} catch (Exception e) {\n    // Swallowing the exception → completely silent failure\n}\n\n// ✅ Better\ntry {\n    paymentService.charge(order);\n} catch (PaymentException e) {\n    log.error(\"Payment failed for order: {}\", order.getId(), e);\n    throw new OrderProcessingException(\"Payment failed\", e);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Using exceptions for flow control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Anti-pattern\ntry {\n    userService.findByEmail(email);\n    throw new DuplicateEmailException(\"Email already exists\");\n} catch (UserNotFoundException e) {\n    // Expected: email is available\n    userService.create(email, password);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Return a result object or boolean, or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-what-are-concurrency-patterns-in-java",
      children: "Q27: What are concurrency patterns in Java?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Thread Pool Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderProcessor {\n    private final ExecutorService executor = Executors.newFixedThreadPool(10);\n\n    public CompletableFuture<Order> processAsync(OrderRequest request) {\n        return CompletableFuture.supplyAsync(() -> {\n            return processOrder(request);\n        }, executor);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Producer-Consumer Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderQueue {\n    private final BlockingQueue<Order> queue = new LinkedBlockingQueue<>(1000);\n\n    // Producer\n    public void produce(Order order) throws InterruptedException {\n        queue.put(order);\n    }\n\n    // Consumer\n    public Order consume() throws InterruptedException {\n        return queue.take();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Read-Write Lock Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class CacheStore<K, V> {\n    private final Map<K, V> cache = new HashMap<>();\n    private final ReadWriteLock lock = new ReentrantReadWriteLock();\n\n    public V get(K key) {\n        lock.readLock().lock();\n        try {\n            return cache.get(key);\n        } finally {\n            lock.readLock().unlock();\n        }\n    }\n\n    public void put(K key, V value) {\n        lock.writeLock().lock();\n        try {\n            cache.put(key, value);\n        } finally {\n            lock.writeLock().unlock();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Future / CompletableFuture Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class AsyncOrderService {\n    @Async\n    public CompletableFuture<Order> processOrder(OrderRequest request) {\n        Order order = doProcess(request);\n        return CompletableFuture.completedFuture(order);\n    }\n\n    public void processMultiple() {\n        CompletableFuture<Order> f1 = processOrder(req1);\n        CompletableFuture<Order> f2 = processOrder(req2);\n\n        CompletableFuture<Void> all = CompletableFuture.allOf(f1, f2);\n        all.thenRun(() -> log.info(\"Both orders processed\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. ThreadLocal Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RequestContextHolder {\n    private static final ThreadLocal<RequestContext> CONTEXT = new ThreadLocal<>();\n\n    public static void setContext(RequestContext ctx) {\n        CONTEXT.set(ctx);\n    }\n\n    public static RequestContext getContext() {\n        return CONTEXT.get();\n    }\n\n    public static void clear() {\n        CONTEXT.remove();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-what-is-the-data-access-object-dao-pattern",
      children: "Q28: What is the Data Access Object (DAO) pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " DAO abstracts and encapsulates all access to a data source. The DAO manages the connection to the data source and provides CRUD operations without exposing data source details to the caller."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// DAO interface\npublic interface OrderDao {\n    Optional<Order> findById(Long id);\n    List<Order> findByUserId(String userId);\n    Order save(Order order);\n    void deleteById(Long id);\n    PaginatedResult<Order> findAll(PageRequest pageRequest);\n}\n\n// Implementation (JPA-based)\n@Repository\npublic class JpaOrderDao implements OrderDao {\n    @PersistenceContext\n    private EntityManager entityManager;\n\n    @Override\n    public Order save(Order order) {\n        if (order.getId() == null) {\n            entityManager.persist(order);\n            return order;\n        }\n        return entityManager.merge(order);\n    }\n\n    @Override\n    public Optional<Order> findById(Long id) {\n        return Optional.ofNullable(entityManager.find(Order.class, id));\n    }\n\n    @Override\n    public PaginatedResult<Order> findAll(PageRequest pageRequest) {\n        // Implement paginated query\n    }\n}\n\n// Alternative: JDBC-based implementation (switch without changing callers)\n@Repository\npublic class JdbcOrderDao implements OrderDao {\n    private final JdbcTemplate jdbcTemplate;\n\n    public JdbcOrderDao(JdbcTemplate jdbcTemplate) {\n        this.jdbcTemplate = jdbcTemplate;\n    }\n\n    @Override\n    public Order save(Order order) {\n        // JDBC implementation\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JpaRepository"
      }), " fulfills the DAO role (Spring Data JPA generates the implementation at runtime). The DAO pattern is largely replaced by Spring Data repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-what-is-the-dto-data-transfer-object-pattern",
      children: "Q29: What is the DTO (Data Transfer Object) pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " DTO is an object that carries data between processes (usually between the API layer and the client). It prevents exposing internal entities and allows control over what data is sent over the wire."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Entity (internal → never expose directly)\n@Entity\npublic class User {\n    @Id private Long id;\n    private String email;\n    private String passwordHash;  // Don't expose!\n    private String ssn;            // Don't expose!\n    private LocalDateTime createdAt;\n    private boolean active;\n}\n\n// DTO (what the client sees)\npublic record UserResponse(\n    Long id,\n    String email,\n    String fullName,\n    LocalDateTime createdAt\n) {}\n\n// Controller uses DTO\n@RestController\npublic class UserController {\n    @GetMapping(\"/users/{id}\")\n    public UserResponse getUser(@PathVariable Long id) {\n        User user = userService.findById(id);\n        return new UserResponse(\n            user.getId(),\n            user.getEmail(),\n            user.getFirstName() + \" \" + user.getLastName(),\n            user.getCreatedAt()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security: sensitive fields (password, SSN) are never exposed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decoupling: API contract changes independently of the entity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance: only necessary fields are serialized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning: different DTOs for different API versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-what-are-functional-programming-patterns-used-in-java-8",
      children: "Q30: What are functional programming patterns used in Java 8+?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Map-Reduce Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Map: transform each element, Reduce: aggregate results\nBigDecimal totalRevenue = orders.stream()\n    .map(Order::getTotal)\n    .reduce(BigDecimal.ZERO, BigDecimal::add);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Filter-Map-Collect Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<OrderDTO> highValueOrders = orders.stream()\n    .filter(o -> o.getTotal().compareTo(BigDecimal.valueOf(1000)) > 0)\n    .map(o -> new OrderDTO(o.getId(), o.getTotal()))\n    .collect(Collectors.toList());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Optional Chain (avoid null checks)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public BigDecimal getDiscount(String userId) {\n    return findUser(userId)\n        .flatMap(User::getMembership)\n        .map(Membership::getDiscountRate)\n        .orElse(BigDecimal.ZERO);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Function Composition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Function<Order, Boolean> isValid = order -> order.getItems() != null && !order.getItems().isEmpty();\nFunction<Order, Boolean> isPaid = order -> order.getPaymentStatus() == PaymentStatus.COMPLETED;\n\nFunction<Order, Boolean> isProcessable = isValid.andThen(valid -> valid && isPaid);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Supplier Pattern (lazy initialization)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ExpensiveResource {\n    private Supplier<Connection> connectionSupplier =\n        () -> createConnection();  // Created only on first get()\n\n    public Connection getConnection() {\n        return connectionSupplier.get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-what-design-patterns-are-used-in-spring-framework-itself",
      children: "Q31: What design patterns are used in Spring Framework itself?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Spring Uses It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singleton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default bean scope → one instance per container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean"
            }), " methods in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            }), " classes, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BeanFactory"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract Factory"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FactoryBean"
            }), " implementations, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PlatformTransactionManager"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Builder"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UriComponentsBuilder"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RestClient.builder()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityFilterChain"
            }), " DSL"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AOP proxies for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Transactional"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Cacheable"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Method"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "JdbcTemplate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RestTemplate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JmsTemplate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TransactionTemplate"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AuthenticationProvider"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PasswordEncoder"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DataSource"
            }), " lookup"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationEventPublisher"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chain of Responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Security filter chain, servlet filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adapter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "HandlerAdapter"
            }), " (adapts controllers), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HandlerMapping"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decorator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "HttpHeaders"
            }), " wrapper, servlet request/response wrappers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facade"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "JdbcTemplate"
            }), " (hides JDBC complexity), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RestTemplate"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototype"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Scope(\"prototype\")"
            }), " beans"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ViewResolver"
            }), " hierarchy, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MessageSource"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mediator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DispatcherServlet"
            }), " (mediates request processing)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVC (pattern)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Model-View-Controller"
            }), " in Spring MVC"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-what-is-the-difference-between-strategy-and-state-patterns",
      children: "Q32: What is the difference between Strategy and State patterns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate interchangeable algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate state-dependent behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client selects which strategy to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State transitions are internal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple ways to do the same thing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object behavior changes with internal state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No state transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State transitions are core to the pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing strategies, encryption algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order status workflow (pending → confirmed → shipped)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-what-is-the-difference-between-factory-method-and-abstract-factory",
      children: "Q33: What is the difference between Factory Method and Abstract Factory?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Factory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates one product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates families of related products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single method in a class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple factory methods in a class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclasses decide which class to instantiate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition → factory is injected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product variety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One product type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple related product types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "createPaymentProcessor()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "createButton()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "createTextField()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "createCheckbox()"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-what-is-the-difference-between-proxy-and-decorator-patterns",
      children: "Q34: What is the difference between Proxy and Decorator patterns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proxy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decorator"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control access to an object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add behavior to an object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ownership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy creates/manages the real object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client creates and passes the wrapped object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as the subject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as the component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical uses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy loading, access control, logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding features dynamically (compression, encryption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of wrappers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple decorators in a chain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-when-would-you-use-template-method-vs-strategy",
      children: "Q35: When would you use Template Method vs Strategy?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Method"
      }), " when you have a fixed algorithm skeleton but want subclasses to override specific steps. Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy"
      }), " when you want to completely swap out an algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Method:"
      }), " \"Here's the recipe → you just choose the toppings.\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " \"Just give me the cooking algorithm → I don't care how you do it.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Template Method uses inheritance (base class defines algorithm, subclasses implement steps). Strategy uses composition (context delegates to strategy object)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Spring: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JdbcTemplate"
      }), " uses Template Method. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PasswordEncoder"
      }), " uses Strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-what-is-the-difference-between-adapter-and-facade-patterns",
      children: "Q36: What is the difference between Adapter and Facade patterns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Facade"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make two incompatible interfaces work together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide a simplified interface to a complex subsystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts one interface to another expected by the client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides a new, simpler interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of classes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually two (Adaptee and Target)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (entire subsystem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapping a third-party library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding complex internal logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adapter example:"
      }), " Converting Stripe API to your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentGateway"
      }), " interface.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facade example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderFacade.placeOrder()"
      }), " that handles validation, payment, inventory, shipping, and notifications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-what-is-the-difference-between-command-and-strategy-patterns",
      children: "Q37: What is the difference between Command and Strategy patterns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate a request as an object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate an algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has state (parameters of the request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undo support"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "undo()"
            }), " method"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queuing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be queued and logged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No queuing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations with undo, transaction logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interchangeable algorithms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-what-is-the-difference-between-composite-and-decorator-patterns",
      children: "Q38: What is the difference between Composite and Decorator patterns?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both use recursive composition, but for different purposes:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decorator"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Represent part-whole hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add responsibilities dynamically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform treatment of leaf and composite objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding features to individual objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-like with children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear chain (wrapping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Components"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container has children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapper has one wrapped object"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite example:"
      }), " Menu with categories containing dishes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decorator example:"
      }), " DataSource wrapped with Encryption, then Compression."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-what-is-the-difference-between-singleton-and-prototype-bean-scopes-in-spring",
      children: "Q39: What is the difference between Singleton and Prototype bean scopes in Spring?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Singleton"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prototype"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instances"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per Spring container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New instance for every injection/get"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container manages full lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container creates but doesn't manage destruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be thread-safe (shared state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No thread-safety concerns (new instance each time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless services, repositories, utilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful beans, user-specific objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lazy init"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always lazy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component  // singleton (default)\npublic class OrderService {\n    // Thread-safe stateless service\n}\n\n@Component\n@Scope(\"prototype\")\npublic class OrderProcessingContext {\n    // New instance per injection\n    private List<OrderStep> completedSteps = new ArrayList<>();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important: Injecting a prototype into a singleton causes the prototype to be created once and shared."
      }), " To get a new prototype every time, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Lookup"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectFactory"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Scope(\"singleton\")\npublic class OrderService {\n    @Autowired\n    private ObjectFactory<OrderContext> contextFactory;\n\n    public void processOrder(OrderRequest request) {\n        OrderContext context = contextFactory.getObject();  // New instance each time\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-what-is-the-difference-between-jpa-entity-and-dto",
      children: "Q40: What is the difference between JPA Entity and DTO?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DTO"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mapped to"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has persistent identity (@Id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable (tracked by JPA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable preferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May include lazy proxies, circular refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, predictable JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed by EntityManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-lived request/response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependencies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotated with JPA-specific annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain data carrier"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always use DTOs for API responses. Exposing entities directly risks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lazy loading exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circular references (infinite JSON)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accidental data exposure (password hashes, internal IDs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-what-is-the-specification-pattern",
      children: "Q41: What is the specification pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The specification pattern allows business rules to be combined using boolean logic (AND, OR, NOT) in a reusable way."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Specification interface\npublic interface OrderSpecification {\n    boolean isSatisfiedBy(Order order);\n    default OrderSpecification and(OrderSpecification other) {\n        return order -> this.isSatisfiedBy(order) && other.isSatisfiedBy(order);\n    }\n    default OrderSpecification or(OrderSpecification other) {\n        return order -> this.isSatisfiedBy(order) || other.isSatisfiedBy(order);\n    }\n}\n\n// Specifications\npublic class HighValueSpecification implements OrderSpecification {\n    private BigDecimal threshold;\n    public boolean isSatisfiedBy(Order order) {\n        return order.getTotal().compareTo(threshold) >= 0;\n    }\n}\n\npublic class RecentOrderSpecification implements OrderSpecification {\n    private Duration within;\n    public boolean isSatisfiedBy(Order order) {\n        return order.getCreatedAt().isAfter(LocalDateTime.now().minus(within));\n    }\n}\n\n// Usage\nOrderSpecification spec = new HighValueSpecification(BigDecimal.valueOf(1000))\n    .and(new RecentOrderSpecification(Duration.ofDays(7)));\n\nboolean matches = spec.isSatisfiedBy(order);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Data JPA:"
      }), " The same concept is implemented via Specifications with JPA Criteria API:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long>,\n    JpaSpecificationExecutor<Order> {}\n\n// Query\nList<Order> orders = orderRepository.findAll(\n    Specification\n        .where(hasTotalAbove(BigDecimal.valueOf(1000)))\n        .and(createdWithin(Duration.ofDays(7)))\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-what-is-the-null-object-pattern",
      children: "Q42: What is the Null Object pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Null Object provides a surrogate for null by implementing a no-op version of an interface, eliminating null checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Instead of returning null, return a Null Object\npublic interface DiscountPolicy {\n    BigDecimal applyDiscount(BigDecimal amount);\n}\n\n// Real implementation\npublic class PercentageDiscount implements DiscountPolicy {\n    private BigDecimal percent;\n    public BigDecimal applyDiscount(BigDecimal amount) {\n        return amount.multiply(BigDecimal.ONE.subtract(percent));\n    }\n}\n\n// Null Object → implements the interface with no-op behavior\npublic class NoDiscount implements DiscountPolicy {\n    public BigDecimal applyDiscount(BigDecimal amount) {\n        return amount;  // No discount applied\n    }\n}\n\n// Usage → no null check needed\n@Service\npublic class OrderService {\n    public BigDecimal calculateTotal(Order order) {\n        DiscountPolicy discount = findDiscountPolicy(order);\n        // No null check → NoDiscount handles the \"no discount\" case\n        return discount.applyDiscount(order.getTotal());\n    }\n\n    private DiscountPolicy findDiscountPolicy(Order order) {\n        return order.hasCoupon()\n            ? new PercentageDiscount(order.getCoupon().getDiscountPercent())\n            : new NoDiscount();  // Null Object instead of null\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-what-is-the-builder-patterns-relationship-with-immutable-objects",
      children: "Q43: What is the Builder pattern's relationship with Immutable objects?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Builder is the standard way to construct immutable objects with many parameters. The object is built through a mutable Builder and then the final ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build()"
      }), " method creates the immutable object. The immutability is enforced by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All fields ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No setters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Collections defensively copied or wrapped with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collections.unmodifiableList()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructor is private (only accessible through Builder)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class OrderRequest {\n    private final String userId;\n    private final List<OrderItem> items;\n    private final Address shippingAddress;\n\n    private OrderRequest(Builder builder) {\n        this.userId = builder.userId;\n        this.items = Collections.unmodifiableList(new ArrayList<>(builder.items));\n        this.shippingAddress = builder.shippingAddress;\n    }\n\n    // Getters only → no setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-what-is-the-difference-between-service-layer-and-repository-pattern",
      children: "Q44: What is the difference between Service Layer and Repository pattern?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access and persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic and orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-entity data operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-entity business operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can manage transactions for single entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages transactions spanning multiple entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependencies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on data source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on repositories and other services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderRepository.save(order)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "OrderService.placeOrder(request)"
            }), " (validates, saves, sends email)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service uses Repository, not the other way around:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    private final OrderRepository orderRepo;\n    private final InventoryRepository inventoryRepo;\n    private final PaymentGateway paymentGateway;\n    private final EmailService emailService;\n\n    @Transactional\n    public Order placeOrder(OrderRequest request) {\n        // Business logic\n        validate(request);\n        reserveInventory(request);\n        processPayment(request);\n        Order order = orderRepo.save(request.toOrder());\n        emailService.sendConfirmation(order);\n        return order;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-what-is-the-difference-between-inversion-of-control-and-dependency-injection",
      children: "Q45: What is the difference between Inversion of Control and Dependency Injection?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " IoC (Inversion of Control) is a broad principle where the framework controls the flow of the program and calls into your code. DI (Dependency Injection) is a specific implementation of IoC where dependencies are provided to an object rather than the object creating them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IoC:"
      }), " \"Don't call us, we'll call you.\" (The framework calls your code.)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DI:"
      }), " \"I'll give you what you need.\" (Dependencies are injected.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Framework implements IoC through the Container (controls bean lifecycle, calls methods). DI is the mechanism → dependencies are injected via constructor, setter, or field injection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Without DI: object creates its own dependencies\n@Service\npublic class OrderService {\n    private PaymentGateway paymentGateway = new StripePaymentGateway();\n    private EmailService emailService = new SmtpEmailService();\n}\n\n// With DI: dependencies are injected\n@Service\npublic class OrderService {\n    private final PaymentGateway paymentGateway;\n    private final EmailService emailService;\n\n    public OrderService(PaymentGateway paymentGateway, EmailService emailService) {\n        this.paymentGateway = paymentGateway;  // Injected → easy to mock, swap\n        this.emailService = emailService;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-what-is-the-law-of-demeter-principle-of-least-knowledge",
      children: "Q46: What is the Law of Demeter (Principle of Least Knowledge)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A design guideline that says an object should only communicate with its immediate collaborators, not with their sub-components. \"Only talk to your immediate friends.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Violates Law of Demeter\npublic class OrderService {\n    public BigDecimal calculateTotal(Order order) {\n        return order.getCustomer()        // friend\n            .getAddress()                 // not a friend\n            .getCountry()                 // not a friend\n            .getTaxRate();               // not a friend\n    }\n}\n\n// ✅ Follows Law of Demeter\npublic class OrderService {\n    public BigDecimal calculateTotal(Order order) {\n        return order.calculateTotalWithTax();\n    }\n}\n\n// In Order class\npublic class Order {\n    public BigDecimal calculateTotalWithTax() {\n        return itemsTotal.add(\n            customer.getAddress().getCountry().getTaxRate().apply(itemsTotal)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benefits: reduced coupling, easier refactoring, more maintainable code. Costs: more methods on intermediate objects (delegation methods)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-what-is-the-difference-between-inheritance-and-composition",
      children: "Q47: What is the difference between Inheritance and Composition?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"is-a\" (Car extends Vehicle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"has-a\" (Car has Engine)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coupling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight → child depends on parent implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose → components are interchangeable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code is reused via subclassing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code is reused by delegating to components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change impacts subclasses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Components can be swapped at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Override"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can override parent behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can wrap/extend behavior via delegation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Favor composition over inheritance"
      }), " is a key GoF principle:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Inheritance (brittle)\npublic class OrderService extends BaseService {\n    // Can't change behavior without affecting BaseService\n}\n\n// ✅ Composition (flexible)\n@Component\npublic class OrderService {\n    private final BaseService baseService;  // Injected\n\n    public OrderService(BaseService baseService) {\n        this.baseService = baseService;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-what-are-marker-interfaces-in-java",
      children: "Q48: What are marker interfaces in Java?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A marker interface is an interface with no methods or fields. It serves as metadata for the JVM or compiler to signal that a class has a certain property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Built-in examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Serializable"
        }), " → class can be serialized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Cloneable"
        }), " → class can be cloned via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object.clone()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RandomAccess"
        }), " → List supports fast random access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Custom marker interface\npublic interface Auditable {\n    // No methods → marks entities for audit logging\n}\n\n// Usage\n@Entity\npublic class Order implements Auditable {\n    @Id private Long id;\n    // Fields\n}\n\n// AOP aspect checks for the marker\n@Aspect\n@Component\npublic class AuditAspect {\n    @Before(\"execution(* save*(..)) && target(auditable)\")\n    public void auditSave(Auditable auditable) {\n        log.info(\"Saving auditable entity: {}\", auditable.getClass().getSimpleName());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In modern Java, annotations are typically preferred over marker interfaces (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entity"
      }), " instead of a marker interface)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-what-is-the-difference-between-checked-and-unchecked-exceptions-in-java-design",
      children: "Q49: What is the difference between checked and unchecked exceptions in Java design?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Checked Exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unchecked Exception"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extends"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Exception"
            }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RuntimeException"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RuntimeException"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enforcement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be caught or declared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not enforced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected to be recoverable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually programming errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IOException"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SQLException"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "NullPointerException"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalArgumentException"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design considerations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ Good: checked exception when caller can reasonably recover\npublic class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(BigDecimal balance, BigDecimal required) {\n        super(\"Balance: \" + balance + \", required: \" + required);\n    }\n}\n\n// Caller can recover → offer to use alternative payment method\npublic void processPayment(Order order) throws InsufficientFundsException {\n    // ...\n}\n\n// ✅ Good: unchecked exception when caller cannot recover\npublic class OrderNotFoundException extends RuntimeException {\n    public OrderNotFoundException(Long orderId) {\n        super(\"Order not found: \" + orderId);\n    }\n}\n\n// Usually handled by global exception handler, not caller\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In Spring Boot:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ResponseStatus"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RuntimeException"
        }), " subclasses for HTTP error mapping"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use checked exceptions for recoverable business errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use unchecked exceptions for programming errors and validation failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-how-do-you-handle-cross-cutting-concerns-with-aop",
      children: "Q50: How do you handle cross-cutting concerns with AOP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AOP (Aspect-Oriented Programming) modularizes cross-cutting concerns (logging, security, transactions) into reusable aspects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Aspect\n@Aspect\n@Component\npublic class LoggingAspect {\n\n    // Before advice\n    @Before(\"execution(* com.example.service.*.*(..))\")\n    public void logBefore(JoinPoint joinPoint) {\n        log.info(\"Entering: {} with args {}\",\n            joinPoint.getSignature().toShortString(),\n            joinPoint.getArgs());\n    }\n\n    // AfterReturning advice\n    @AfterReturning(pointcut = \"execution(* com.example.service.*.*(..))\",\n                    returning = \"result\")\n    public void logAfterReturning(JoinPoint joinPoint, Object result) {\n        log.info(\"Exiting: {} with result {}\",\n            joinPoint.getSignature().toShortString(), result);\n    }\n\n    // AfterThrowing advice\n    @AfterThrowing(pointcut = \"execution(* com.example.service.*.*(..))\",\n                   throwing = \"error\")\n    public void logAfterThrowing(JoinPoint joinPoint, Throwable error) {\n        log.error(\"Exception in: {} with message: {}\",\n            joinPoint.getSignature().toShortString(), error.getMessage());\n    }\n\n    // Around advice (most powerful)\n    @Around(\"@annotation(TrackExecutionTime)\")\n    public Object measureExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {\n        long start = System.nanoTime();\n        Object result = joinPoint.proceed();\n        long duration = System.nanoTime() - start;\n        log.info(\"{} executed in {} ms\",\n            joinPoint.getSignature().toShortString(),\n            TimeUnit.NANOSECONDS.toMillis(duration));\n        return result;\n    }\n}\n\n// Custom annotation for targeted pointcuts\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface TrackExecutionTime {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common AOP use cases in Spring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional"
        }), " → transaction management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Cacheable"
        }), " → caching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Async"
        }), " → asynchronous execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Secured"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        }), " → security checks"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom: logging, audit, performance monitoring, rate limiting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-what-is-the-difference-between-a-framework-and-a-library",
      children: "Q51: What is the difference between a framework and a library?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You call the library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The framework calls your code (IoC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your code controls the flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework controls the flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use what you need, ignore the rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must follow framework conventions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Commons Lang, Guava"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot, Jakarta EE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No IoC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inversion of Control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Library:"
      }), " \"Here are useful utilities → call them when needed.\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " \"Here's the structure → fill in the blanks.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot is a framework: it calls your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " methods, your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Service"
      }), " beans, your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " handlers. You don't control the main loop → the framework does."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-what-is-the-difference-between-cohesion-and-coupling",
      children: "Q52: What is the difference between Cohesion and Coupling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cohesion"
      }), " measures how related the responsibilities of a single module/class are. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "High cohesion"
      }), " = related things are together.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coupling"
      }), " measures how dependent one module is on another. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low coupling"
      }), " = modules are independent."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "High Cohesion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Low Cohesion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Good"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class has one clear responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ God class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderValidator.validate(order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderManager.validate() + sendEmail() + processPayment()"
            })
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Low Coupling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "High Coupling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Good"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class depends on interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Class depends on concrete implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderService(PaymentGateway gateway)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderService(StripePaymentGateway gateway)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal: High cohesion + Low coupling."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ High cohesion + low coupling\n@Service\npublic class OrderService {\n    private final PaymentGateway gateway;  // Interface = low coupling\n    private final OrderRepository repo;\n\n    public OrderService(PaymentGateway gateway, OrderRepository repo) {\n        this.gateway = gateway;  // Constructor injection\n        this.repo = repo;\n    }\n\n    // Single responsibility: order processing\n    @Transactional\n    public Order placeOrder(OrderRequest request) {\n        // Business logic only → not data access, not email\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-what-is-dry-dont-repeat-yourself",
      children: "Q53: What is DRY (Don't Repeat Yourself)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " DRY states that every piece of knowledge must have a single, unambiguous representation within a system. Avoid duplication in code through abstraction, but don't force premature abstraction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Violates DRY → repeated validation logic\n@PostMapping(\"/orders\")\npublic ResponseEntity<Order> createOrder(@RequestBody @Valid OrderRequest request) {\n    if (request.getUserId() == null) {\n        throw new IllegalArgumentException(\"User ID required\");\n    }\n    // ...\n}\n\n@PostMapping(\"/drafts\")\npublic ResponseEntity<Draft> saveDraft(@RequestBody @Valid OrderRequest request) {\n    if (request.getUserId() == null) {\n        throw new IllegalArgumentException(\"User ID required\");\n    }\n    // ...\n}\n\n// ✅ DRY → extract validation\npublic class OrderValidator {\n    public void validate(OrderRequest request) {\n        if (request.getUserId() == null) {\n            throw new IllegalArgumentException(\"User ID required\");\n        }\n        // Other validations\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caveat:"
      }), " A little duplication is better than a wrong abstraction. The \"Rule of Three\" suggests waiting until code is duplicated three times before abstracting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-what-is-yagni-you-arent-gonna-need-it",
      children: "Q54: What is YAGNI (You Aren't Gonna Need It)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " YAGNI states that you should not add functionality until it's actually needed. Premature abstraction and over-engineering are wastes of time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ YAGNI violation → building for hypothetical future needs\npublic interface OrderRepository extends\n    JpaRepository<Order, Long>,\n    JpaSpecificationExecutor<Order>,\n    QuerydslPredicateExecutor<Order>,\n    RevisionRepository<Order, Long, Integer> {\n    // User only needs save() and findById() today\n}\n\n// ✅ Build what's needed now\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n    // Add specification support only when actually needed\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-how-do-you-refactor-a-god-class",
      children: "Q55: How do you refactor a God Class?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A God Class is a class that has too many responsibilities. Refactoring steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify responsibilities"
        }), " → list everything the class does"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extract classes"
        }), " → create focused classes for each responsibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Facade"
        }), " → optionally keep the original class as a facade delegating to smaller classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove dependencies"
        }), " → each new class should have minimal dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Before: God Class\n@Service\npublic class OrderManager {\n    public void validate(Order o) { /* ... */ }\n    public void processPayment(Order o) { /* ... */ }\n    public void sendEmail(Order o) { /* ... */ }\n    public void updateInventory(Order o) { /* ... */ }\n    public void generateInvoice(Order o) { /* ... */ }\n    public void arrangeShipping(Order o) { /* ... */ }\n}\n\n// ✅ After: Separated responsibilities\n@Service\npublic class OrderService {\n    private final OrderValidator validator;\n    private final PaymentService paymentService;\n    private final NotificationService notificationService;\n    private final InventoryService inventoryService;\n\n    public Order placeOrder(OrderRequest request) {\n        validator.validate(request);\n        paymentService.charge(request.getPaymentInfo());\n        inventoryService.reserve(request.getItems());\n        Order order = save(request);\n        notificationService.sendConfirmation(order);\n        return order;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-what-patterns-help-with-writing-testable-code",
      children: "Q56: What patterns help with writing testable code?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Dependency Injection (DI)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ Testable: dependencies are injected, can be mocked\n@Service\npublic class OrderService {\n    private final PaymentGateway gateway;\n    public OrderService(PaymentGateway gateway) { this.gateway = gateway; }\n}\n\n// Test\n@ExtendWith(MockitoExtension.class)\nclass OrderServiceTest {\n    @Mock PaymentGateway gateway;\n    @InjectMocks OrderService service;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Repository Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data access is abstracted behind interfaces → easily mockable in tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Strategy Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Algorithms can be swapped for test implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Factory Method"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allows creating test doubles instead of real objects."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Observer/Event-Driven"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decoupled components can be tested independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Null Object Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eliminates null checks and special cases in tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Anti-corruption Layer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isolates your domain from external dependencies (third-party APIs, legacy systems), making them mockable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-what-patterns-are-used-in-event-driven-architectures",
      children: "Q57: What patterns are used in event-driven architectures?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Event Sourcing"
      }), " → Store state changes as a sequence of events. The current state is derived by replaying events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderEventSourcing {\n    private final List<DomainEvent> events = new ArrayList<>();\n\n    public void apply(DomainEvent event) {\n        events.add(event);\n        when(event);\n    }\n\n    public OrderStatus getCurrentStatus() {\n        OrderStatus status = new OrderStatus();\n        events.forEach(event -> when(event));  // replay all events\n        return status;\n    }\n\n    private void when(DomainEvent event) {\n        if (event instanceof OrderCreatedEvent e) { /* set status to PENDING */ }\n        if (event instanceof PaymentReceivedEvent e) { /* set status to PAID */ }\n        if (event instanceof OrderShippedEvent e) { /* set status to SHIPPED */ }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. CQRS (Command Query Responsibility Segregation)"
      }), " → Separate read models from write models. Commands change state, queries read state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Command side (write)\npublic interface OrderCommand {\n    void execute();\n}\n\npublic class CreateOrderCommand implements OrderCommand {\n    // Full validation, business logic\n}\n\n// Query side (read → separate optimized data model)\n@RestController\npublic class OrderQueryController {\n    @GetMapping(\"/orders/{id}\")\n    public OrderSummary getOrder(@PathVariable Long id) {\n        // Read from optimized read model, not from domain entities\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Event-Driven Consumer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderConsumer {\n    @EventListener\n    @Async\n    public void on(OrderCreatedEvent event) {\n        // Process asynchronously\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. SAGA Pattern"
      }), " → Distributed transaction management via events (covered in Q25)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-what-are-the-most-common-architectural-patterns-for-microservices",
      children: "Q58: What are the most common architectural patterns for microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Strangler Fig Pattern"
      }), " → Gradually replace a monolithic system by creating new microservices alongside it, routing traffic to the new services incrementally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class RoutingConfig {\n    @Bean\n    public RouterFunction<ServerResponse> route() {\n        return RouterFunctions.route()\n            .path(\"/api/v2/**\", route -> route\n                .GET(\"/orders\", request -> forwardTo(\"http://order-service\"))\n                .POST(\"/orders\", request -> forwardTo(\"http://order-service\")))\n            .path(\"/api/v1/**\", route -> route\n                .GET(\"/orders\", request -> forwardTo(\"http://monolith\")))\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. API Gateway Pattern"
      }), " → Single entry point for all services, handling routing, aggregation, authentication, rate limiting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Backend for Frontend (BFF)"
      }), " → Dedicated backend per client type (mobile, web, third-party)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Database per Service"
      }), " → Each service owns its data. No shared databases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Saga Pattern"
      }), " → Distributed transactions via events (Q25)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. CQRS"
      }), " → Separate read and write models (Q57)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Event Sourcing"
      }), " → State as event stream (Q57)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Sidecar Pattern"
      }), " → Deploy helper components (logging agent, proxy) alongside the main service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "9. Circuit Breaker"
      }), " → Prevents cascading failures (Q42 in chapter 63)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10. Bulkhead"
      }), " → Isolates resources per service (Q44)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-what-is-the-difference-between-a-monolith-and-a-modular-monolith",
      children: "Q59: What is the difference between a monolith and a modular monolith?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monolith:"
      }), " All code in a single deployable unit with no module boundaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modular Monolith:"
      }), " All code in a single deployable unit, but with strict module boundaries enforced at compile time and runtime. Modules communicate through well-defined interfaces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Modular monolith with Java modules (JPMS) or package boundaries\n// Modules: order-management, payment-processing, inventory\n\n// Module 1: order-management (exports API, hides implementation)\nmodule order.management {\n    exports com.example.order.api;\n    requires payment.processing.api;\n}\n\n// Module 2: payment-processing (exports API, hides implementation)\nmodule payment.processing {\n    exports com.example.payment.api;\n}\n\n// Module 3: inventory (all internal)\nmodule inventory {\n    // Only accessed through order-management\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits over microservices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler deployment (one artifact)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No network calls between modules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easier refactoring (can rebreak later)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong typing across module boundaries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits over monolithic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforced boundaries prevent tight coupling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easier to extract microservices later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modules can be developed independently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-what-is-a-hexagonal-architecture-ports-and-adapters",
      children: "Q60: What is a hexagonal architecture (Ports and Adapters)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Hexagonal architecture (Alistair Cockburn) isolates the core business logic from external concerns (database, web, messaging). The core communicates through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ports"
      }), " (interfaces) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adapters"
      }), " (implementations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Core domain → no external dependencies\npublic class Order {\n    private String id;\n    private List<OrderItem> items;\n    private OrderStatus status;\n\n    public void confirm() {\n        if (status != OrderStatus.PENDING) {\n            throw new IllegalStateException(\"Only pending orders can be confirmed\");\n        }\n        this.status = OrderStatus.CONFIRMED;\n    }\n}\n\n// Port (interface in core domain package)\npublic interface OrderRepository {\n    void save(Order order);\n    Optional<Order> findById(String id);\n}\n\n// Port (interface in core domain package)\npublic interface PaymentGateway {\n    PaymentResult charge(String token, Money amount);\n}\n\n// Adapter (in infrastructure package) → implements port\n@Repository\npublic class JpaOrderRepository implements OrderRepository {\n    // JPA-specific implementation\n}\n\n// Adapter (in infrastructure package)\n@Component\npublic class StripePaymentAdapter implements PaymentGateway {\n    // Stripe-specific implementation\n}\n\n// Core service (uses ports, doesn't know about adapters)\n@Service\npublic class OrderService {\n    private final OrderRepository orderRepo;\n    private final PaymentGateway paymentGateway;\n\n    public OrderService(OrderRepository orderRepo, PaymentGateway paymentGateway) {\n        this.orderRepo = orderRepo;\n        this.paymentGateway = paymentGateway;\n    }\n\n    public Order createOrder(CreateOrderRequest request) {\n        // Pure business logic → no infrastructure concern\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business logic is testable without infrastructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap databases, payment gateways, or UI without changing core logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework-agnostic core (Spring Boot is an adapter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation of concerns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-what-is-the-difference-between-domain-driven-design-ddd-and-traditional-entityservice-architecture",
      children: "Q61: What is the difference between Domain-Driven Design (DDD) and traditional entity/service architecture?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional (Anemic Domain)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DDD (Rich Domain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just data (getters/setters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data + behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Business logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In domain entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ubiquitous language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database-driven names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business-driven names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Repositories"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per aggregate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anemic domain model (anti-pattern):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Just data → no behavior\n@Entity\npublic class Order {\n    private Long id;\n    private BigDecimal total;\n    private OrderStatus status;\n\n    // Only getters and setters\n    public void setStatus(OrderStatus status) {\n        this.status = status;\n    }\n}\n\n// All logic in service\n@Service\npublic class OrderService {\n    @Transactional\n    public void confirmOrder(Long orderId) {\n        Order order = orderRepo.findById(orderId).orElseThrow();\n        if (order.getStatus() != OrderStatus.PENDING) {\n            throw new IllegalStateException(\"...\");\n        }\n        order.setStatus(OrderStatus.CONFIRMED);\n        // Business rules scattered across services\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rich domain model (DDD):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Order {\n    @Id private Long id;\n    @Embedded private Money total;\n    private OrderStatus status;\n    @Embedded private List<OrderItem> items;\n\n    // Behavior is on the entity\n    public void confirm() {\n        if (status != OrderStatus.PENDING) {\n            throw new OrderAlreadyConfirmedException(id);\n        }\n        if (items.isEmpty()) {\n            throw new EmptyOrderException(id);\n        }\n        this.status = OrderStatus.CONFIRMED;\n    }\n\n    public void cancel() {\n        if (status == OrderStatus.SHIPPED) {\n            throw new CannotCancelShippedOrderException(id);\n        }\n        this.status = OrderStatus.CANCELLED;\n    }\n}\n\n// Service coordinates but doesn't contain business logic\n@Service\npublic class OrderApplicationService {\n    @Transactional\n    public void confirmOrder(Long orderId) {\n        Order order = orderRepo.findById(orderId).orElseThrow();\n        order.confirm();  // Business logic in the entity\n        orderRepo.save(order);\n        eventPublisher.publish(new OrderConfirmedEvent(orderId));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-what-is-the-difference-between-an-aggregate-and-an-aggregate-root-in-ddd",
      children: "Q62: What is the difference between an Aggregate and an Aggregate Root in DDD?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate"
      }), " is a cluster of domain objects that can be treated as a single unit. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate Root"
      }), " is the root entity within an aggregate → the only object accessible from outside."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Aggregate Root → Order is the only entry point to this aggregate\n@Entity\npublic class Order {\n    @Id private Long id;\n    private String customerId;\n\n    // OrderItems are part of the aggregate but NOT aggregate roots\n    @OneToMany(mappedBy = \"order\", cascade = CascadeType.ALL)\n    private List<OrderItem> items;\n\n    // External code can only interact through the root\n    public void addItem(Product product, int quantity) {\n        this.items.add(new OrderItem(this, product, quantity));\n    }\n\n    public Money calculateTotal() {\n        return items.stream()\n            .map(OrderItem::getSubtotal)\n            .reduce(Money.ZERO, Money::add);\n    }\n}\n\n// Part of the aggregate → not accessible from outside\n@Embeddable\npublic class OrderItem {\n    private String productId;\n    private int quantity;\n    private Money price;\n\n    // package-private constructor → only the aggregate root creates these\n    OrderItem(Order order, Product product, int quantity) {\n        this.productId = product.getId();\n        this.quantity = quantity;\n        this.price = product.getPrice();\n    }\n}\n\n// Repository only for the aggregate root, not for OrderItem\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n    // No OrderItemRepository → items are accessed through Order\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only aggregate roots can have repositories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External objects can only reference the aggregate root (by ID)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactions must not span aggregates within the same transaction (eventual consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes to an aggregate are applied atomically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-what-is-an-anti-corruption-layer",
      children: "Q63: What is an anti-corruption layer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An anti-corruption layer (ACL) protects your domain from external systems. It translates between the external system's model and your domain model, preventing external concepts from leaking into your core business logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// External system's model (must not leak into our domain)\npublic class ExternalPaymentResponse {\n    private String transactionId;\n    private int code;  // External codes\n    private String rawResponse;\n    private String errorMessage;\n}\n\n// Our domain model\npublic class PaymentResult {\n    private String transactionId;\n    private PaymentStatus status;  // Clean domain enum\n    private Money amount;\n}\n\n// Anti-corruption layer\n@Component\npublic class PaymentAcl {\n    private final ExternalPaymentClient externalClient;\n\n    public PaymentResult processPayment(Money amount, PaymentMethod method) {\n        // Translate domain request to external format\n        ExternalPaymentRequest externalRequest = toExternalRequest(amount, method);\n\n        // Call external system\n        ExternalPaymentResponse externalResponse = externalClient.charge(externalRequest);\n\n        // Translate external response back to domain format\n        return toDomainResult(externalResponse);\n    }\n\n    private ExternalPaymentRequest toExternalRequest(Money amount, PaymentMethod method) {\n        // Domain → external translation\n    }\n\n    private PaymentResult toDomainResult(ExternalPaymentResponse response) {\n        // External → domain translation\n        return new PaymentResult(\n            response.getTransactionId(),\n            switch (response.getCode()) {\n                case 0 -> PaymentStatus.SUCCESS;\n                case 1 -> PaymentStatus.FAILED;\n                case 2 -> PaymentStatus.PENDING;\n                default -> PaymentStatus.UNKNOWN;\n            },\n            Money.parse(response.getRawResponse())  // Protect domain\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-what-is-a-domain-event",
      children: "Q64: What is a domain event?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A domain event is a record of something that happened in the domain that domain experts care about. It's immutable, named in past tense, and carries relevant data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Domain event\npublic record OrderConfirmedEvent(\n    String orderId,\n    String customerId,\n    Money total,\n    Instant occurredOn\n) {\n    public OrderConfirmedEvent {\n        // Compact constructor for validation\n        Objects.requireNonNull(orderId);\n        Objects.requireNonNull(customerId);\n    }\n\n    // Factory method with clear intent\n    public static OrderConfirmedEvent of(Order order) {\n        return new OrderConfirmedEvent(\n            order.getId(),\n            order.getCustomerId(),\n            order.getTotal(),\n            Instant.now()\n        );\n    }\n}\n\n// Publishing in domain entity\n@Entity\npublic class Order {\n    @Transient\n    private final List<DomainEvent> events = new ArrayList<>();\n\n    public void confirm() {\n        // ... business logic ...\n        events.add(OrderConfirmedEvent.of(this));\n    }\n\n    public List<DomainEvent> getEvents() {\n        return List.copyOf(events);  // Defensive copy\n    }\n}\n\n// Service publishes after saving\n@Service\npublic class OrderService {\n    private final ApplicationEventPublisher publisher;\n\n    @Transactional\n    public void confirmOrder(Long id) {\n        Order order = orderRepo.findById(id).orElseThrow();\n        order.confirm();\n        orderRepo.save(order);\n\n        // Publish events after successful save\n        order.getEvents().forEach(publisher::publishEvent);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-what-is-a-value-object",
      children: "Q65: What is a value object?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A value object is an immutable object defined by its attributes, not its identity. Two value objects with the same attributes are considered equal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Value object → immutable, no identity\n@Embeddable\npublic record Money(BigDecimal amount, Currency currency) {\n\n    public Money {\n        if (amount.compareTo(BigDecimal.ZERO) < 0) {\n            throw new IllegalArgumentException(\"Amount must be non-negative\");\n        }\n        Objects.requireNonNull(currency);\n    }\n\n    public Money add(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new CurrencyMismatchException(this.currency, other.currency);\n        }\n        return new Money(this.amount.add(other.amount), this.currency);\n    }\n\n    public Money multiply(BigDecimal multiplier) {\n        return new Money(this.amount.multiply(multiplier), this.currency);\n    }\n\n    public static Money zero(Currency currency) {\n        return new Money(BigDecimal.ZERO, currency);\n    }\n}\n\n// Usage in entity\n@Entity\npublic class Order {\n    @Id private Long id;\n\n    @Embedded\n    @AttributeOverrides({\n        @AttributeOverride(name = \"amount\", column = @Column(name = \"total_amount\")),\n        @AttributeOverride(name = \"currency\", column = @Column(name = \"total_currency\"))\n    })\n    private Money total;\n\n    public Money getTotal() {\n        return total;  // Value objects can be safely shared (immutable)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value object characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immutable (all fields final)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Equality based on all attributes (implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No identity (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Id"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-validating (constructor validates invariants)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contains behavior (business methods that return new instances)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-what-are-the-most-common-java-ee--jakarta-ee-patterns",
      children: "Q66: What are the most common Java EE / Jakarta EE patterns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Service Locator Pattern"
      }), " (largely replaced by DI in Spring)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Traditional Service Locator\npublic class ServiceLocator {\n    private static final InitialContext context = new InitialContext();\n\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T lookup(String jndiName) {\n        return (T) context.lookup(jndiName);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Front Controller Pattern"
      }), " (Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DispatcherServlet"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Spring's Front Controller\n@WebServlet(\"/\")\npublic class DispatcherServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        HandlerExecutionChain handler = getHandler(req);\n        HandlerAdapter adapter = getHandlerAdapter(handler);\n        ModelAndView mv = adapter.handle(req, resp, handler.getHandler());\n        // Render view\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Transfer Object Assembler"
      }), " → Combines data from multiple sources into a single DTO."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Business Delegate"
      }), " → Reduces coupling between presentation and business tiers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Session Facade"
      }), " → Wraps business-tier components in a coarse-grained facade."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Context Object Pattern"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestContextHolder"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityContextHolder"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RequestContextFilter implements Filter {\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {\n        try {\n            RequestContext context = new RequestContext(\n                request.getAttribute(\"correlationId\"),\n                request.getAttribute(\"userId\")\n            );\n            RequestContextHolder.setContext(context);\n            chain.doFilter(request, response);\n        } finally {\n            RequestContextHolder.clear();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-what-is-the-difference-between-a-framework-pattern-and-an-application-pattern",
      children: "Q67: What is the difference between a framework pattern and an application pattern?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework patterns"
      }), " are built into the framework and you use them by following conventions (Singleton beans, Template Method in JdbcTemplate, Observer via ApplicationEventPublisher)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application patterns"
      }), " are design choices you make in your code (Repository, Service Layer, DTO, Strategy for business rules)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Framework patterns are usually invisible → you benefit from them without implementing them. Application patterns are structural decisions that shape your codebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-what-is-the-difference-between-a-pattern-and-an-anti-pattern",
      children: "Q68: What is the difference between a pattern and an anti-pattern?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pattern"
      }), " is a proven solution to a recurring problem in a context. It's reusable, well-documented, and has known trade-offs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anti-pattern"
      }), " is a commonly used but ineffective solution that creates more problems than it solves. Anti-patterns often start as patterns applied in the wrong context."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Opposite Anti-pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "God Class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anemic Domain Model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Locator overuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch statement duplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive if-else chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste code variation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight event coupling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaky abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telescoping constructor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste tree traversal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-what-patterns-help-with-performance-optimization",
      children: "Q69: What patterns help with performance optimization?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Flyweight Pattern"
      }), " → Share common objects to reduce memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Proxy Pattern (Lazy Loading)"
      }), " → Delay expensive object creation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Lazy\npublic class ExpensiveService {\n    // Created only when first used\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Object Pool Pattern"
      }), " → Reuse expensive objects (database connections, threads)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Cache-Aside Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Cacheable(\"orders\")\npublic Order getOrder(Long id) {\n    return repository.findById(id)\n        .orElseThrow(() -> new OrderNotFoundException(id));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Read-Write Lock Pattern"
      }), " → Allow concurrent reads with exclusive writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Batch Processing Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Transactional\npublic void processOrders(List<Order> orders) {\n    // Process in batches of 1000\n    for (List<Order> batch : Lists.partition(orders, 1000)) {\n        repository.saveAll(batch);\n        entityManager.flush();\n        entityManager.clear();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Pagination Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Page<Order> page = repository.findAll(PageRequest.of(0, 20, Sort.by(\"createdAt\").descending()));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Write-Behind / Write-Through Cache"
      }), " → Defer or batch database writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-how-do-patterns-relate-to-software-architecture",
      children: "Q70: How do patterns relate to software architecture?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Patterns exist at different levels of abstraction:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architectural patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System-wide structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, Layered, Hexagonal, CQRS, Event Sourcing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design patterns (GoF)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class/object relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Factory, Strategy, Observer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message Router, Aggregator, Saga, Circuit Breaker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Idioms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language-specific conventions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaBeans conventions, try-with-resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-architected system uses patterns at multiple levels. The architectural patterns define the overall structure, design patterns solve specific problems within that structure, and idioms ensure consistent code at the implementation level."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: patterns are tools, not goals. Using patterns for their own sake (pattern fever) is itself an anti-pattern. Every pattern introduction should solve a concrete problem."
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
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract without state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance, shared state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template method pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
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
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
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