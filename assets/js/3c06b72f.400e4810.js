"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20594],{

/***/ 90748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_p_5_generics_reflection_md_3c0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-p-5-generics-reflection-md-3c0.json
const site_docs_courses_java_p_5_generics_reflection_md_3c0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/p5-generics-reflection","title":"Generics, Annotations & Reflection","description":"Java\'s type system extends far beyond the simple class-and-interface hierarchy. Three powerful mechanisms→generics, annotations, and reflection→give developers the ability to write type-safe, self-describing, and introspectable code. Generics enable compile-time type checking for collections and algorithms. Annotations attach metadata to code elements without changing their behavior. Reflection opens the runtime structure of classes for frameworks and tools. Together, they form the foundation of every major Java framework, including Spring Boot, JPA/Hibernate, and Jackson.","source":"@site/docs/courses/java/p5-generics-reflection.md","sourceDirName":"courses/java","slug":"/java/p5-generics-reflection","permalink":"/ai-engineering-journey/java/p5-generics-reflection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":80,"frontMatter":{"id":"p5-generics-reflection","slug":"/java/p5-generics-reflection","title":"Generics, Annotations & Reflection","sidebar_label":"Generics, Annotations & Reflection","sidebar_position":80},"sidebar":"course-java","previous":{"title":"Exception Handling & I/O","permalink":"/ai-engineering-journey/java/p4-exceptions-io"},"next":{"title":"Lambda Expressions & Functional Programming","permalink":"/ai-engineering-journey/java/p6-lambdas-streams"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/p5-generics-reflection.md


const frontMatter = {
	id: 'p5-generics-reflection',
	slug: '/java/p5-generics-reflection',
	title: 'Generics, Annotations & Reflection',
	sidebar_label: 'Generics, Annotations & Reflection',
	sidebar_position: 80
};
const contentTitle = 'Generics, Annotations & Reflection';

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
  "value": "Generics",
  "id": "generics",
  "level": 2
}, {
  "value": "Generic Classes",
  "id": "generic-classes",
  "level": 3
}, {
  "value": "Raw Types and Compatibility",
  "id": "raw-types-and-compatibility",
  "level": 3
}, {
  "value": "Generic Methods",
  "id": "generic-methods",
  "level": 3
}, {
  "value": "Bounded Type Parameters",
  "id": "bounded-type-parameters",
  "level": 3
}, {
  "value": "Multiple Bounds",
  "id": "multiple-bounds",
  "level": 3
}, {
  "value": "Type Inference and the Diamond Operator",
  "id": "type-inference-and-the-diamond-operator",
  "level": 3
}, {
  "value": "Wildcards",
  "id": "wildcards",
  "level": 2
}, {
  "value": "Unbounded Wildcard (<code>?</code>)",
  "id": "unbounded-wildcard-",
  "level": 3
}, {
  "value": "Upper Bounded Wildcard (<code>? extends T</code>)",
  "id": "upper-bounded-wildcard--extends-t",
  "level": 3
}, {
  "value": "Lower Bounded Wildcard (<code>? super T</code>)",
  "id": "lower-bounded-wildcard--super-t",
  "level": 3
}, {
  "value": "The PECS Principle",
  "id": "the-pecs-principle",
  "level": 3
}, {
  "value": "Type Erasure",
  "id": "type-erasure",
  "level": 2
}, {
  "value": "How Erasure Works",
  "id": "how-erasure-works",
  "level": 3
}, {
  "value": "Bridge Methods",
  "id": "bridge-methods",
  "level": 3
}, {
  "value": "Heap Pollution",
  "id": "heap-pollution",
  "level": 3
}, {
  "value": "@SafeVarargs",
  "id": "safevarargs",
  "level": 3
}, {
  "value": "Reifiable Types",
  "id": "reifiable-types",
  "level": 3
}, {
  "value": "Limitations of Generics",
  "id": "limitations-of-generics",
  "level": 3
}, {
  "value": "Custom Annotations",
  "id": "custom-annotations",
  "level": 2
}, {
  "value": "Defining an Annotation",
  "id": "defining-an-annotation",
  "level": 3
}, {
  "value": "Meta-Annotations",
  "id": "meta-annotations",
  "level": 3
}, {
  "value": "Complete Custom Annotation Example",
  "id": "complete-custom-annotation-example",
  "level": 3
}, {
  "value": "Annotation Processing at Compile Time (APT)",
  "id": "annotation-processing-at-compile-time-apt",
  "level": 3
}, {
  "value": "Reflection API",
  "id": "reflection-api",
  "level": 2
}, {
  "value": "The Class Object",
  "id": "the-class-object",
  "level": 3
}, {
  "value": "Inspecting Constructors, Methods, and Fields",
  "id": "inspecting-constructors-methods-and-fields",
  "level": 3
}, {
  "value": "Invoking Constructors, Methods, and Fields",
  "id": "invoking-constructors-methods-and-fields",
  "level": 3
}, {
  "value": "Runtime Annotation Access",
  "id": "runtime-annotation-access",
  "level": 3
}, {
  "value": "Reflection Patterns",
  "id": "reflection-patterns",
  "level": 2
}, {
  "value": "Dynamic Proxies",
  "id": "dynamic-proxies",
  "level": 3
}, {
  "value": "Dependency Injection via Reflection",
  "id": "dependency-injection-via-reflection",
  "level": 3
}, {
  "value": "ORM Mapping via Reflection",
  "id": "orm-mapping-via-reflection",
  "level": 3
}, {
  "value": "Annotations in Spring Boot",
  "id": "annotations-in-spring-boot",
  "level": 2
}, {
  "value": "Stereotype Annotations",
  "id": "stereotype-annotations",
  "level": 3
}, {
  "value": "@Autowired",
  "id": "autowired",
  "level": 3
}, {
  "value": "Meta-Annotations and Composed Annotations",
  "id": "meta-annotations-and-composed-annotations",
  "level": 3
}, {
  "value": "How Spring Processes Annotations",
  "id": "how-spring-processes-annotations",
  "level": 3
}, {
  "value": "Module System Impact on Reflection",
  "id": "module-system-impact-on-reflection",
  "level": 2
}, {
  "value": "The <code>opens</code> Directive",
  "id": "the-opens-directive",
  "level": 3
}, {
  "value": "Command-Line Workaround: <code>--add-opens</code>",
  "id": "command-line-workaround---add-opens",
  "level": 3
}, {
  "value": "Reflection Under the Module System",
  "id": "reflection-under-the-module-system",
  "level": 3
}, {
  "value": "Type Tokens",
  "id": "type-tokens",
  "level": 2
}, {
  "value": "Super Type Token Pattern (Gson <code>TypeToken</code>)",
  "id": "super-type-token-pattern-gson-typetoken",
  "level": 3
}, {
  "value": "Jackson&#39;s TypeReference",
  "id": "jacksons-typereference",
  "level": 3
}, {
  "value": "Generic DAO with TypeReference",
  "id": "generic-dao-with-typereference",
  "level": 3
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
        id: "generics-annotations--reflection",
        children: "Generics, Annotations & Reflection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java's type system extends far beyond the simple class-and-interface hierarchy. Three powerful mechanisms→", (0,jsx_runtime.jsx)(_components.strong, {
        children: "generics"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "annotations"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reflection"
      }), "→give developers the ability to write type-safe, self-describing, and introspectable code. Generics enable compile-time type checking for collections and algorithms. Annotations attach metadata to code elements without changing their behavior. Reflection opens the runtime structure of classes for frameworks and tools. Together, they form the foundation of every major Java framework, including Spring Boot, JPA/Hibernate, and Jackson."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter explores each mechanism in depth, from the type-parameter syntax of generic classes through the runtime introspection of the Reflection API, and concludes with a look at how Spring Boot leverages these features to build its auto-configuration and dependency-injection machinery."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        href: "../../assets/images/lessons/java/p5-generics-reflection/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p5-generics-reflection/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/p5-generics-reflection/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p5-generics-reflection/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/p5-generics-reflection/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/p5-generics-reflection/visual-explanation.png",
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
        children: "Define generic classes, interfaces, and methods using standard type-parameter conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply bounded type parameters and wildcards to design flexible, type-safe APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the PECS (Producer Extends, Consumer Super) principle and use it correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the type-erasure process and its consequences, including bridge methods and heap pollution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create custom annotations with appropriate retention and target policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process annotations at compile time with the Annotation Processing Tool (APT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introspect classes at runtime using the Reflection API to invoke constructors, methods, and fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement dynamic proxies and understand how reflection powers dependency injection and ORM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize Spring Boot's meta-annotation and composed-annotation patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand how the Java module system restricts reflection and how to open modules"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use super type tokens and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TypeReference"
        }), " to preserve generic type information at runtime"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generics",
      children: "Generics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p5-generics-reflection.png",
        alt: "Generics, Annotations and Reflection - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generics were introduced in Java 5 (JSR 14) to enable ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type parameterization"
      }), ". Before generics, collections held ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Object"
      }), " references, requiring explicit casts on every retrieval and providing zero compile-time safety. Generics shift type-checking from runtime to compile time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-classes",
      children: "Generic Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A generic class declares one or more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type parameters"
      }), " in angle brackets after the class name. By convention, single uppercase letters are used:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element (collections)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "K"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key (maps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "V"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value (maps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Objects;\n\npublic class Box<T> {\n\n    private T value;\n\n    public Box() {\n    }\n\n    public Box(T value) {\n        this.value = value;\n    }\n\n    public T getValue() {\n        return value;\n    }\n\n    public void setValue(T value) {\n        this.value = value;\n    }\n\n    public boolean isEmpty() {\n        return value == null;\n    }\n\n    @Override\n    public String toString() {\n        return \"Box{\" + value + \"}\";\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Box<?> box = (Box<?>) o;\n        return Objects.equals(value, box.value);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hashCode(value);\n    }\n\n    public static <T> Box<T> of(T value) {\n        return new Box<>(value);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A generic interface follows the same pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Repository<T, ID> {\n\n    T findById(ID id);\n\n    Iterable<T> findAll();\n\n    T save(T entity);\n\n    void delete(T entity);\n\n    boolean existsById(ID id);\n\n    long count();\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concrete implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicLong;\n\npublic class InMemoryRepository<T, ID> implements Repository<T, ID> {\n\n    private final Map<ID, T> store = new ConcurrentHashMap<>();\n    private final IdGenerator<ID> idGenerator;\n    private final AtomicLong counter = new AtomicLong(0);\n\n    public InMemoryRepository(IdGenerator<ID> idGenerator) {\n        this.idGenerator = idGenerator;\n    }\n\n    @Override\n    public T findById(ID id) {\n        return store.get(id);\n    }\n\n    @Override\n    public Iterable<T> findAll() {\n        return store.values();\n    }\n\n    @Override\n    public T save(T entity) {\n        ID id = idGenerator.generate(counter.incrementAndGet());\n        store.put(id, entity);\n        return entity;\n    }\n\n    @Override\n    public void delete(T entity) {\n        store.values().remove(entity);\n    }\n\n    @Override\n    public boolean existsById(ID id) {\n        return store.containsKey(id);\n    }\n\n    @Override\n    public long count() {\n        return store.size();\n    }\n\n}\n\ninterface IdGenerator<ID> {\n    ID generate(long value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class GenericsDemo {\n\n    public static void main(String[] args) {\n        Box<String> stringBox = new Box<>(\"Hello, Generics!\");\n        String value = stringBox.getValue();\n        System.out.println(value);\n\n        Box<Integer> integerBox = new Box<>(42);\n        int number = integerBox.getValue();\n        System.out.println(number);\n\n        Repository<String, Long> repo = new InMemoryRepository<>(v -> v);\n        repo.save(\"Alpha\");\n        repo.save(\"Beta\");\n        repo.save(\"Gamma\");\n\n        System.out.println(\"Count: \" + repo.count());\n\n        for (String item : repo.findAll()) {\n            System.out.println(\"Item: \" + item);\n        }\n\n        Box<Integer> box1 = new Box<>(100);\n        Box<Integer> box2 = new Box<>(100);\n        System.out.println(\"Equal: \" + box1.equals(box2));\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raw-types-and-compatibility",
      children: "Raw Types and Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "raw type"
      }), " is a generic class or interface used without its type parameters. Raw types exist only for backward compatibility with pre-Java-5 code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class RawTypeDemo {\n\n    public static void main(String[] args) {\n        @SuppressWarnings(\"rawtypes\")\n        Box rawBox = new Box(\"raw\");               // raw type → compiler warning\n        rawBox.setValue(42);                        // no type safety\n\n        Box<String> safeBox = rawBox;               // unchecked assignment warning\n        String val = safeBox.getValue();            // ClassCastException at runtime!\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler emits an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unchecked warning"
      }), " for any raw-type usage. You should never use raw types in new code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-methods",
      children: "Generic Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Methods can declare their own type parameters independently of the class-level parameters. A generic method declares type parameters ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before the return type"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\n\npublic class GenericMethodExamples {\n\n    public static <T> T getMiddle(T... args) {\n        if (args.length == 0) {\n            throw new IllegalArgumentException(\"At least one argument required\");\n        }\n        return args[args.length / 2];\n    }\n\n    public static <T extends Comparable<T>> T max(T first, T second) {\n        return first.compareTo(second) >= 0 ? first : second;\n    }\n\n    public static <T> void swap(T[] array, int i, int j) {\n        T temp = array[i];\n        array[i] = array[j];\n        array[j] = temp;\n    }\n\n    public static <T> List<T> asList(T... elements) {\n        return java.util.Arrays.asList(elements);\n    }\n\n    public static <T, R> R transform(T input, Transformer<T, R> transformer) {\n        return transformer.transform(input);\n    }\n\n}\n\n@FunctionalInterface\ninterface Transformer<T, R> {\n    R transform(T input);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class GenericMethodDemo {\n\n    public static void main(String[] args) {\n        String middle = GenericMethodExamples.getMiddle(\"A\", \"B\", \"C\", \"D\", \"E\");\n        System.out.println(\"Middle: \" + middle);\n\n        Integer maxInt = GenericMethodExamples.max(42, 17);\n        System.out.println(\"Max: \" + maxInt);\n\n        String maxStr = GenericMethodExamples.max(\"apple\", \"zebra\");\n        System.out.println(\"Max: \" + maxStr);\n\n        String[] fruits = {\"cherry\", \"banana\", \"apple\"};\n        GenericMethodExamples.swap(fruits, 0, 2);\n        System.out.println(\"Swapped: \" + java.util.Arrays.toString(fruits));\n\n        int length = GenericMethodExamples.transform(\"Hello, World!\", (String s) -> s.length());\n        System.out.println(\"Length: \" + length);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bounded-type-parameters",
      children: "Bounded Type Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bounded type parameter"
      }), " restricts the types that can be used as type arguments. The bound is specified with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extends"
      }), " keyword (which includes both classes and interfaces)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\n\npublic class BoundedTypeExamples {\n\n    public static <T extends Number> double sumOfNumbers(List<T> numbers) {\n        double sum = 0.0;\n        for (T number : numbers) {\n            sum += number.doubleValue();\n        }\n        return sum;\n    }\n\n    public static <T extends Comparable<T>> T maxInList(List<T> items) {\n        if (items == null || items.isEmpty()) {\n            throw new IllegalArgumentException(\"List must not be empty\");\n        }\n        T max = items.get(0);\n        for (int i = 1; i < items.size(); i++) {\n            T current = items.get(i);\n            if (current.compareTo(max) > 0) {\n                max = current;\n            }\n        }\n        return max;\n    }\n\n    public static <T extends Number & Comparable<T>> double computeMedian(List<T> items) {\n        List<T> sorted = items.stream()\n                .sorted()\n                .toList();\n        int size = sorted.size();\n        if (size % 2 == 0) {\n            double left = sorted.get(size / 2 - 1).doubleValue();\n            double right = sorted.get(size / 2).doubleValue();\n            return (left + right) / 2.0;\n        } else {\n            return sorted.get(size / 2).doubleValue();\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class BoundedTypeDemo {\n\n    public static void main(String[] args) {\n        java.util.List<Integer> ints = java.util.List.of(3, 7, 1, 9, 4);\n        double sum = BoundedTypeExamples.sumOfNumbers(ints);\n        System.out.println(\"Sum: \" + sum);\n\n        int maxInt = BoundedTypeExamples.maxInList(ints);\n        System.out.println(\"Max int: \" + maxInt);\n\n        java.util.List<String> words = java.util.List.of(\"dog\", \"cat\", \"elephant\", \"bird\");\n        String maxWord = BoundedTypeExamples.maxInList(words);\n        System.out.println(\"Max word: \" + maxWord);\n\n        java.util.List<Double> doubles = java.util.List.of(3.5, 1.2, 9.8, 4.1, 7.3);\n        double median = BoundedTypeExamples.computeMedian(doubles);\n        System.out.println(\"Median: \" + median);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-bounds",
      children: "Multiple Bounds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A type parameter can have multiple bounds using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " operator. The class bound (if any) must come ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first"
      }), "; interface bounds follow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.io.Serializable;\n\npublic class MultipleBoundsExamples {\n\n    public static <T extends Number & Comparable<T> & Serializable>\n    T process(T value) {\n        System.out.println(\"Class: \" + value.getClass().getName());\n        System.out.println(\"Comparable: \" + value.compareTo(value));\n        System.out.println(\"Serializable: \" + (value instanceof Serializable));\n        return value;\n    }\n\n    public static <T extends Appendable & Comparable<T>>\n    void appendWithOrder(T appender, String value) throws java.io.IOException {\n        appender.append(value);\n        System.out.println(\"Order: \" + appender.compareTo(appender));\n    }\n\n}\n\nclass NumberProcessor {\n\n    public <T extends Number & Comparable<T>> T half(T value) {\n        double halved = value.doubleValue() / 2.0;\n        @SuppressWarnings(\"unchecked\")\n        T result = (T) Double.valueOf(halved);\n        return result;\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MultipleBoundsDemo {\n\n    public static void main(String[] args) throws java.io.IOException {\n        Integer result = MultipleBoundsExamples.process(42);\n        System.out.println(\"Processed: \" + result);\n\n        StringBuilder sb = new StringBuilder();\n        MultipleBoundsExamples.appendWithOrder(sb, \"Hello, \");\n        MultipleBoundsExamples.appendWithOrder(sb, \"World!\");\n        System.out.println(\"StringBuilder content: \" + sb);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-inference-and-the-diamond-operator",
      children: "Type Inference and the Diamond Operator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 7 introduced the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "diamond operator"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<>"
      }), ") to reduce verbosity when instantiating generic classes. The compiler infers the type arguments from the context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class DiamondOperatorDemo {\n\n    public static void main(String[] args) {\n        // Before Java 7 → redundant type on both sides\n        Map<String, List<Integer>> oldWay = new HashMap<String, List<Integer>>();\n\n        // Java 7+ → diamond operator infers the type\n        Map<String, List<Integer>> diamond = new HashMap<>();\n\n        // Works in assignment contexts\n        List<String> strings = new ArrayList<>();\n\n        // Works in method invocation contexts\n        Set<Integer> numbers = new HashSet<>(Set.of(1, 2, 3));\n\n        // Works with anonymous classes (Java 9+)\n        Comparator<String> byLength = new Comparator<>() {\n            @Override\n            public int compare(String a, String b) {\n                return Integer.compare(a.length(), b.length());\n            }\n        };\n\n        List<String> names = List.of(\"Alice\", \"Bob\", \"Charlie\");\n        names.sort(byLength);\n        System.out.println(\"Sorted by length: \" + names);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 8 improved type inference through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "target-type inference"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "poly expressions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TypeInferenceDemo {\n\n    public static <T> T identity(T value) {\n        return value;\n    }\n\n    public static <T> List<T> emptyList() {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        // Target-type inference: compiler infers T = String\n        String result = identity(\"Hello\");\n\n        // Inferred from assignment target\n        List<Integer> ints = emptyList();\n        ints.add(1);\n        ints.add(2);\n\n        // Inferred from method argument\n        printList(emptyList());\n    }\n\n    private static void printList(List<String> list) {\n        System.out.println(\"List: \" + list);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wildcards",
      children: "Wildcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wildcards (", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), ") introduce ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "usage-site variance"
      }), "→the ability to specify how a generic type parameter may vary at the point of use, rather than at the point of declaration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "unbounded-wildcard-",
      children: ["Unbounded Wildcard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The unbounded wildcard represents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any type"
      }), ". It is useful when the logic does not depend on the actual type parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\n\npublic class UnboundedWildcardDemo {\n\n    public static void printList(List<?> list) {\n        for (Object element : list) {\n            System.out.print(element + \" \");\n        }\n        System.out.println();\n    }\n\n    public static int sizeOf(List<?> list) {\n        return list.size();\n    }\n\n    public static boolean containsNull(List<?> list) {\n        for (Object element : list) {\n            if (element == null) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static double averageLength(List<?> list) {\n        if (list.isEmpty()) return 0.0;\n        double total = 0;\n        for (Object element : list) {\n            total += element.toString().length();\n        }\n        return total / list.size();\n    }\n\n    public static void main(String[] args) {\n        List<Integer> ints = List.of(1, 2, 3);\n        List<String> strings = List.of(\"a\", \"b\", \"c\");\n        List<Double> doubles = List.of(1.5, 2.5, 3.5);\n\n        System.out.print(\"Integers: \");\n        printList(ints);\n\n        System.out.print(\"Strings: \");\n        printList(strings);\n\n        System.out.println(\"Size: \" + sizeOf(doubles));\n        System.out.println(\"Contains null: \" + containsNull(strings));\n        System.out.println(\"Avg length: \" + averageLength(ints));\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot"
      }), " add elements (except ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), ") to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection<?>"
      }), " because the compiler cannot verify type safety."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "upper-bounded-wildcard--extends-t",
      children: ["Upper Bounded Wildcard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "? extends T"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An upper bounded wildcard restricts the unknown type to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subtype"
      }), " of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ". This is used when you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "produce"
      }), " values from a structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\n\npublic class UpperBoundedWildcardDemo {\n\n    public static double sum(List<? extends Number> numbers) {\n        double total = 0.0;\n        for (Number number : numbers) {\n            total += number.doubleValue();\n        }\n        return total;\n    }\n\n    public static <T extends Comparable<? super T>> T max(List<? extends T> list) {\n        if (list == null || list.isEmpty()) {\n            throw new IllegalArgumentException(\"List must not be empty\");\n        }\n        T max = list.get(0);\n        for (int i = 1; i < list.size(); i++) {\n            T current = list.get(i);\n            if (current.compareTo(max) > 0) {\n                max = current;\n            }\n        }\n        return max;\n    }\n\n    public static Number getAny(List<? extends Number> numbers) {\n        return numbers.isEmpty() ? 0 : numbers.get(0);\n    }\n\n    public static void main(String[] args) {\n        List<Integer> ints = List.of(1, 2, 3, 4, 5);\n        List<Double> doubles = List.of(1.5, 2.5, 3.5);\n        List<Number> numbers = List.<Number>of(10, 20L, 30.5);\n\n        System.out.println(\"Sum ints: \" + sum(ints));\n        System.out.println(\"Sum doubles: \" + sum(doubles));\n        System.out.println(\"Sum numbers: \" + sum(numbers));\n\n        System.out.println(\"Max ints: \" + max(ints));\n        System.out.println(\"Max doubles: \" + max(doubles));\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<? extends Number>"
      }), ", you can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Number"
      }), " values, but you cannot safely ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "add"
      }), " anything (except ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), "), because the actual type might be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Integer>"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Double>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "lower-bounded-wildcard--super-t",
      children: ["Lower Bounded Wildcard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "? super T"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lower bounded wildcard restricts the unknown type to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "supertype"
      }), " of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ". This is used when you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "consume"
      }), " (add) values into a structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.ArrayList;\n\npublic class LowerBoundedWildcardDemo {\n\n    public static void addNumbers(List<? super Integer> list) {\n        for (int i = 1; i <= 10; i++) {\n            list.add(i);\n        }\n    }\n\n    public static void copy(List<? extends Number> source, List<? super Number> dest) {\n        for (Number element : source) {\n            dest.add(element);\n        }\n    }\n\n    public static void fill(List<? super Integer> list, int value, int count) {\n        for (int i = 0; i < count; i++) {\n            list.add(value);\n        }\n    }\n\n    public static void main(String[] args) {\n        List<Number> numbers = new ArrayList<>();\n        addNumbers(numbers);\n        System.out.println(\"Numbers: \" + numbers);\n\n        List<Integer> ints = List.of(1, 2, 3);\n        List<Object> objects = new ArrayList<>();\n        copy(ints, objects);\n        System.out.println(\"Copied: \" + objects);\n\n        List<Object> filled = new ArrayList<>();\n        fill(filled, 42, 5);\n        System.out.println(\"Filled: \" + filled);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<? super Integer>"
      }), ", you can safely ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "add"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Integer"
      }), " instances, but when reading, you can only guarantee ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Object"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-pecs-principle",
      children: "The PECS Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PECS"
      }), " stands for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Producer Extends, Consumer Super"
      }), ", formulated by Joshua Bloch in ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Effective Java"
      }), ". It is the rule for choosing which wildcard type to use:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a parameter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "produces"
        }), " values (you read from it), use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? extends T"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a parameter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "consumes"
        }), " values (you write to it), use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? super T"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both, don't use wildcards→use a plain type parameter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.Collection;\nimport java.util.ArrayList;\n\npublic class PECSDemo {\n\n    // Producer: copy reads from source → ? extends T\n    // Consumer: copy writes to dest → ? super T\n    public static <T> void copy(\n            List<? extends T> source,\n            List<? super T> dest) {\n        for (T item : source) {\n            dest.add(item);\n        }\n    }\n\n    // Producer: src supplies elements\n    // Consumer: dest receives elements\n    public static <T> void merge(\n            Collection<? extends T> src,\n            Collection<? super T> dest) {\n        dest.addAll(src);\n    }\n\n    // Consumer: we fill it\n    public static <T> void fillWithDefault(\n            List<? super T> list,\n            T defaultValue,\n            int count) {\n        for (int i = 0; i < count; i++) {\n            list.add(defaultValue);\n        }\n    }\n\n    // Producer: we take the max\n    public static <T extends Comparable<? super T>> T max(\n            Collection<? extends T> coll) {\n        if (coll.isEmpty()) {\n            throw new IllegalArgumentException(\"Collection is empty\");\n        }\n        T candidate = null;\n        for (T elem : coll) {\n            if (candidate == null || elem.compareTo(candidate) > 0) {\n                candidate = elem;\n            }\n        }\n        return candidate;\n    }\n\n    public static void main(String[] args) {\n        List<Integer> ints = List.of(1, 4, 2, 8, 5, 7);\n        List<Number> nums = new ArrayList<>();\n\n        // Producer: ints (? extends Integer) → produces Integers (read)\n        // Consumer: nums (? super Number) → consumes Numbers (write)\n        copy(ints, nums);\n        System.out.println(\"Copied: \" + nums);\n\n        List<String> strings = List.of(\"a\", \"z\", \"m\", \"q\");\n        String maxStr = max(strings);\n        System.out.println(\"Max: \" + maxStr);\n\n        List<Object> objects = new ArrayList<>();\n        fillWithDefault(objects, \"default\", 3);\n        System.out.println(\"Filled: \" + objects);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variance cheat sheet:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wildcard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read safety"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write safety"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "? extends T"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " (safe)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing (except null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer (read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "? super T"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Object"
            }), " only"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " (safe)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer (write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Object"
            }), " only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing (except null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both or neither"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " (safe)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " (safe)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both read and write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type-erasure",
      children: "Type Erasure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type erasure is the process by which the Java compiler removes generic type information and translates generic code into non-generic bytecode compatible with pre-Java-5 runtimes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-erasure-works",
      children: "How Erasure Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler replaces type parameters with their ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leftmost bound"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Object"
      }), " if unbounded) and inserts appropriate casts where necessary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.ArrayList;\n\npublic class TypeErasureDemo {\n\n    // Compile-time type: public static <T> T identity(T value)\n    // Erased type:      public static Object identity(Object value)\n    public static <T> T identity(T value) {\n        return value;\n    }\n\n    // Compile-time type: public static <T extends Number> double sum(List<T> list)\n    // Erased type:      public static double sum(List list)\n    public static <T extends Number> double sum(List<T> list) {\n        double total = 0.0;\n        for (T item : list) {\n            total += item.doubleValue();\n        }\n        return total;\n    }\n\n    // Compile-time type: public static <T extends Comparable<T>> T max(T a, T b)\n    // Erased type:      public static Comparable max(Comparable a, Comparable b)\n    public static <T extends Comparable<T>> T max(T a, T b) {\n        return a.compareTo(b) >= 0 ? a : b;\n    }\n\n    public static void main(String[] args) {\n        // After erasure + auto-casting:\n        String s = (String) identity(\"Hello\");\n        System.out.println(s);\n\n        List<Integer> numbers = List.of(1, 2, 3);\n        double total = sum(numbers);\n        System.out.println(\"Sum: \" + total);\n\n        int m = max(10, 20);\n        System.out.println(\"Max: \" + m);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bridge-methods",
      children: "Bridge Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When erasure causes a type conflict in a subclass, the compiler generates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bridge method"
      }), "→a synthetic method with erased signatures that delegates to the typed method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Objects;\n\npublic class BridgeMethodDemo {\n\n    public static class Node<T> {\n\n        private T data;\n\n        public Node(T data) {\n            this.data = data;\n        }\n\n        public void setData(T data) {\n            this.data = data;\n        }\n\n        public T getData() {\n            return data;\n        }\n\n        @Override\n        public boolean equals(Object o) {\n            if (this == o) return true;\n            if (o == null || getClass() != o.getClass()) return false;\n            Node<?> node = (Node<?>) o;\n            return Objects.equals(data, node.data);\n        }\n\n        @Override\n        public int hashCode() {\n            return Objects.hashCode(data);\n        }\n\n    }\n\n    public static class StringNode extends Node<String> {\n\n        public StringNode(String data) {\n            super(data);\n        }\n\n        @Override\n        public void setData(String data) {\n            System.out.println(\"StringNode.setData: \" + data);\n            super.setData(data);\n        }\n\n        // Compiler generates bridge:\n        // public void setData(Object data) {\n        //     setData((String) data);\n        // }\n    }\n\n    public static void main(String[] args) {\n        StringNode stringNode = new StringNode(\"original\");\n\n        // Direct typed call\n        stringNode.setData(\"hello\");\n\n        // Call via erased type → invokes bridge method\n        Node<String> node = stringNode;\n        node.setData(\"world\");\n\n        System.out.println(\"Data: \" + node.getData());\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without the bridge method, calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node.setData(\"world\")"
      }), " through the erased ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Node"
      }), " reference would resolve to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Node.setData(Object)"
      }), ", which does not have the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StringNode"
      }), " override."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-pollution",
      children: "Heap Pollution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heap pollution"
      }), " occurs when a variable of a parameterized type references an object of a different parameterized type. This creates an implicit type mismatch that may surface as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassCastException"
      }), " far from the actual error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.ArrayList;\n\npublic class HeapPollutionDemo {\n\n    @SuppressWarnings(\"unchecked\")\n    public static void main(String[] args) {\n        List<String>[] arrayOfLists = new List[1];      // unchecked warning\n        arrayOfLists[0] = List.of(\"hello\", \"world\");\n\n        // Heap pollution: assign List<Integer> into a List<String> slot\n        Object[] objects = arrayOfLists;\n        objects[0] = List.of(1, 2, 3);                   // heap pollution\n\n        // This line throws ClassCastException at runtime\n        try {\n            String s = arrayOfLists[0].get(0);           // Integer → String cast\n            System.out.println(s);\n        } catch (ClassCastException e) {\n            System.err.println(\"Heap pollution detected: \" + e.getMessage());\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safevarargs",
      children: "@SafeVarargs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SafeVarargs"
      }), " annotation suppresses heap-pollution warnings on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "varargs"
      }), " methods with generic types. It asserts that the method does not perform unsafe operations on the varargs array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class SafeVarargsDemo {\n\n    @SafeVarargs\n    public static <T> List<T> flatten(List<? extends T>... lists) {\n        List<T> result = new ArrayList<>();\n        for (List<? extends T> list : lists) {\n            result.addAll(list);\n        }\n        return result;\n    }\n\n    @SafeVarargs\n    public static <T> List<T> concat(T... elements) {\n        return new ArrayList<>(Arrays.asList(elements));\n    }\n\n    @SafeVarargs\n    public static <T> void addAll(List<? super T> dest, T... sources) {\n        for (T source : sources) {\n            dest.add(source);\n        }\n    }\n\n    // NOT @SafeVarargs → this method is unsafe!\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T[] toArray(List<T> list, T[] template) {\n        List<?>[] arr = new List<?>[1];   // generic array creation\n        arr[0] = list;\n        return (T[]) arr[0].toArray();\n    }\n\n    public static void main(String[] args) {\n        List<String> a = List.of(\"a\", \"b\");\n        List<String> b = List.of(\"c\", \"d\");\n        List<String> flattened = flatten(a, b);\n        System.out.println(\"Flattened: \" + flattened);\n\n        List<Integer> concatted = concat(1, 2, 3);\n        System.out.println(\"Concatted: \" + concatted);\n\n        List<Object> dest = new ArrayList<>();\n        addAll(dest, \"Hello\", 42, 3.14);\n        System.out.println(\"Dest: \" + dest);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SafeVarargs"
      }), " can be applied to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " instance methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), " instance methods (Java 9+)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reifiable-types",
      children: "Reifiable Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A type is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reifiable"
      }), " if its type information is fully available at runtime. Non-reifiable types lose information through erasure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reifiable types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primitive types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Non-generic class/interface types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "String"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Integer"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Raw types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "List"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unbounded wildcard parameterized types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<?>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map<?, ?>"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-reifiable types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Type variables (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Concrete parameterized types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<String>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map<String, Integer>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bounded wildcards (", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<? extends Number>"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\n\npublic class ReifiableTypesDemo {\n\n    @SuppressWarnings(\"unchecked\")\n    public static void main(String[] args) {\n        // instanceof works for reifiable types only\n        Object obj = \"hello\";\n\n        System.out.println(obj instanceof String);          // OK → reifiable\n        System.out.println(obj instanceof List);            // OK → raw type\n        System.out.println(obj instanceof List<?>);         // OK → unbounded wildcard\n\n        // These do NOT compile:\n        // System.out.println(obj instanceof List<String>);   // Error → non-reifiable\n        // System.out.println(obj instanceof List<? extends Number>); // Error → non-reifiable\n\n        // Generic array creation → only for reifiable types\n        String[] strings = new String[10];                   // OK\n        List<?>[] lists = new List<?>[10];                   // OK → unbounded wildcard\n\n        // This does NOT compile:\n        // List<String>[] arrayOfLists = new List<String>[10]; // Error\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitations-of-generics",
      children: "Limitations of Generics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generics in Java have several well-known limitations stemming from type erasure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.List;\nimport java.util.ArrayList;\n\npublic class GenericsLimitationsDemo {\n\n    private List<String> exampleField;\n\n    @SuppressWarnings(\"unchecked\")\n    public static void main(String[] args) {\n        // 1. Cannot instantiate with type parameter\n        // T item = new T(); // Compile error\n\n        // 2. Cannot create arrays of parameterized types\n        // List<String>[] arrays = new List<String>[10]; // Compile error\n\n        // 3. Cannot use instanceof with parameterized types\n        Object obj = new ArrayList<String>();\n        // System.out.println(obj instanceof ArrayList<String>); // Compile error\n\n        // 4. Cannot use primitive type arguments\n        // List<int> primitiveList; // Compile error → use List<Integer>\n\n        // 5. Cannot overload methods with same erasure\n        // See the overloaded methods below → only one compiles\n\n        // 6. Cannot catch or throw generic types\n        // try { } catch (T e) { } // Compile error\n\n        // 7. Type information not available at runtime\n        List<Integer> ints = List.of(1, 2, 3);\n        List<String> strings = List.of(\"a\", \"b\", \"c\");\n        System.out.println(ints.getClass() == strings.getClass()); // true\n    }\n\n    // These two methods have the same erasure → only one can exist:\n    // public void process(List<String> items) { }\n    // public void process(List<Integer> items) { } // Error: same erasure\n\n    public void process(List<?> items) {\n        System.out.println(\"Processing \" + items.size() + \" items\");\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-annotations",
      children: "Custom Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Annotations (also called metadata) provide a way to associate information with program elements without directly affecting their semantics. Java has supported annotations since Java 5 (JSR 175)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "defining-an-annotation",
      children: "Defining an Annotation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Annotations are defined using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface"
      }), " keyword. Elements are declared as abstract methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface Loggable {\n\n    String level() default \"INFO\";\n\n    boolean includeArgs() default true;\n\n    boolean includeResult() default true;\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meta-annotations",
      children: "Meta-Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Meta-annotations annotate other annotations. The key meta-annotations in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.annotation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.*;\n\n// @Retention → how long the annotation is retained\n@Retention(RetentionPolicy.RUNTIME)   // Available at runtime via reflection\n// @Retention(RetentionPolicy.CLASS)  // Stored in .class file but not at runtime (default)\n// @Retention(RetentionPolicy.SOURCE) // Discarded by compiler\n\n// @Target → what program elements can be annotated\n@Target({\n    ElementType.TYPE,                  // Classes, interfaces, enums, records\n    ElementType.FIELD,                 // Fields\n    ElementType.METHOD,                // Methods\n    ElementType.PARAMETER,             // Method/constructor parameters\n    ElementType.CONSTRUCTOR,           // Constructors\n    ElementType.LOCAL_VARIABLE,        // Local variables\n    ElementType.ANNOTATION_TYPE,       // Annotation types\n    ElementType.PACKAGE,               // Packages\n    ElementType.TYPE_PARAMETER,        // Type parameter declarations (Java 8+)\n    ElementType.TYPE_USE,              // All uses of types (Java 8+)\n    ElementType.MODULE                 // Modules (Java 9+)\n})\npublic @interface MetaAnnotationDemo {\n\n    // Elements with defaults\n    String author() default \"unknown\";\n\n    String lastModified() default \"2026-01-01\";\n\n    int priority() default 0;\n\n    String[] tags() default {};\n\n}\n\n// @Documented → includes this annotation in generated Javadoc\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface DocumentedAnnotation {\n    String value();\n}\n\n// @Inherited → annotation is inherited by subclasses\n@Inherited\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface Inheritable {\n    boolean enabled() default true;\n}\n\n// @Repeatable → allows multiple instances on the same element (Java 8+)\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Repeatable(Schedules.class)\npublic @interface Schedule {\n    String cron();\n    String timezone() default \"UTC\";\n}\n\n// Container annotation for @Repeatable\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface Schedules {\n    Schedule[] value();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage of the repeatable annotation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Schedule(cron = \"0 0 8 * * ?\")\n@Schedule(cron = \"0 0 18 * * ?\")\npublic class DailyReportJob {\n\n    public void generateReport() {\n        System.out.println(\"Generating daily report...\");\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-custom-annotation-example",
      children: "Complete Custom Annotation Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.*;\nimport java.lang.reflect.Method;\n\n// --- Annotation Definitions ---\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Inherited\npublic @interface Entity {\n    String tableName() default \"\";\n}\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.FIELD)\npublic @interface Column {\n    String name();\n    boolean nullable() default true;\n    int length() default 255;\n    boolean unique() default false;\n}\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.FIELD)\npublic @interface Id {\n    boolean autoGenerated() default true;\n}\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface Transactional {\n    Propagation propagation() default Propagation.REQUIRED;\n    Isolation isolation() default Isolation.READ_COMMITTED;\n    boolean readOnly() default false;\n}\n\nenum Propagation {\n    REQUIRED, REQUIRES_NEW, NESTED, SUPPORTS, NOT_SUPPORTED, MANDATORY, NEVER\n}\n\nenum Isolation {\n    READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity(tableName = \"users\")\npublic class User {\n\n    @Id\n    @Column(name = \"user_id\", nullable = false, unique = true)\n    private Long id;\n\n    @Column(name = \"username\", length = 50, nullable = false, unique = true)\n    private String username;\n\n    @Column(name = \"email\", length = 100, nullable = false, unique = true)\n    private String email;\n\n    @Column(name = \"age\", nullable = true)\n    private Integer age;\n\n    public User() {\n    }\n\n    public User(Long id, String username, String email, Integer age) {\n        this.id = id;\n        this.username = username;\n        this.email = email;\n        this.age = age;\n    }\n\n    @Transactional(readOnly = true)\n    public Long getId() {\n        return id;\n    }\n\n    @Transactional(readOnly = true)\n    public String getUsername() {\n        return username;\n    }\n\n    @Transactional\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    @Transactional(readOnly = true)\n    public String getEmail() {\n        return email;\n    }\n\n    @Transactional\n    public void setEmail(String email) {\n        this.email = email;\n    }\n\n    @Transactional(readOnly = true)\n    public Integer getAge() {\n        return age;\n    }\n\n    @Transactional\n    public void setAge(Integer age) {\n        this.age = age;\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotation-processing-at-compile-time-apt",
      children: "Annotation Processing at Compile Time (APT)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Annotation Processing Tool"
      }), " (APT), standardized via JSR 269 and available in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javax.annotation.processing"
      }), ", generates code at compile time. Processors run in the compiler and can produce new source files, detect errors, or emit warnings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import javax.annotation.processing.*;\nimport javax.lang.model.SourceVersion;\nimport javax.lang.model.element.*;\nimport javax.lang.model.type.TypeMirror;\nimport javax.tools.Diagnostic;\nimport java.util.Set;\n\n@SupportedAnnotationTypes(\"Entity\")\n@SupportedSourceVersion(SourceVersion.RELEASE_21)\npublic class EntityProcessor extends AbstractProcessor {\n\n    @Override\n    public boolean process(Set<? extends TypeElement> annotations,\n                           RoundEnvironment roundEnv) {\n        for (TypeElement annotation : annotations) {\n            for (Element element : roundEnv.getElementsAnnotatedWith(annotation)) {\n                if (element.getKind() != ElementKind.CLASS) {\n                    processingEnv.getMessager().printMessage(\n                            Diagnostic.Kind.ERROR,\n                            \"@Entity can only be applied to classes\",\n                            element\n                    );\n                    continue;\n                }\n\n                TypeElement typeElement = (TypeElement) element;\n                String className = typeElement.getSimpleName().toString();\n                String packageName = processingEnv.getElementUtils()\n                        .getPackageOf(typeElement).getQualifiedName().toString();\n\n                processingEnv.getMessager().printMessage(\n                        Diagnostic.Kind.NOTE,\n                        \"Generating repository for entity: \" + className + \" in package \" + packageName,\n                        element\n                );\n\n                generateRepositoryFile(packageName, className);\n            }\n        }\n        return true;\n    }\n\n    private void generateRepositoryFile(String packageName, String className) {\n        String repositoryClassName = className + \"Repository\";\n        String content = String.format(\"\"\"\n                package %s;\n                \n                import java.util.*;\n                import java.util.concurrent.ConcurrentHashMap;\n                \n                public class %s {\n                \n                    private final Map<%s, %s> store = new ConcurrentHashMap<>();\n                    \n                    public %s findById(String id) {\n                        return store.get(id);\n                    }\n                    \n                    public %s save(%s entity) {\n                        store.put(UUID.randomUUID().toString(), entity);\n                        return entity;\n                    }\n                    \n                    public Collection<%s> findAll() {\n                        return store.values();\n                    }\n                    \n                    public void delete(String id) {\n                        store.remove(id);\n                    }\n                    \n                    public long count() {\n                        return store.size();\n                    }\n                    \n                }\n                \"\"\",\n                packageName, repositoryClassName, className, className,\n                repositoryClassName, className, className, className,\n                repositoryClassName\n        );\n\n        try {\n            var file = processingEnv.getFiler().createSourceFile(\n                    packageName + \".\" + repositoryClassName\n            );\n            try (var writer = file.openWriter()) {\n                writer.write(content);\n            }\n        } catch (java.io.IOException e) {\n            processingEnv.getMessager().printMessage(\n                    Diagnostic.Kind.ERROR,\n                    \"Failed to generate repository: \" + e.getMessage()\n            );\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register the processor in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/services/javax.annotation.processing.Processor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "com.example.processor.EntityProcessor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reflection-api",
      children: "Reflection API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Reflection API, in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.reflect"
      }), ", provides the ability to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "introspect"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modify"
      }), " class behavior at runtime. While powerful, reflection has performance overhead and should not be used in hot paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-class-object",
      children: "The Class Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every type in Java has an instance of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.Class<T>"
      }), " that represents its structure at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\n\npublic class ClassObjectDemo {\n\n    public static void main(String[] args) throws Exception {\n        // Three ways to obtain a Class object\n        Class<?> byStaticField = String.class;\n        Class<?> byInstance = \"hello\".getClass();\n        Class<?> byForName = Class.forName(\"java.lang.String\");\n\n        System.out.println(\"Same class: \" + (byStaticField == byInstance));\n        System.out.println(\"Same class: \" + (byStaticField == byForName));\n\n        // Class name components\n        System.out.println(\"Simple name: \" + String.class.getSimpleName());\n        System.out.println(\"Canonical name: \" + String.class.getCanonicalName());\n        System.out.println(\"Type name: \" + String.class.getTypeName());\n        System.out.println(\"Package: \" + String.class.getPackageName());\n\n        // Type information\n        Class<?> superclass = String.class.getSuperclass();\n        System.out.println(\"Superclass: \" + superclass.getName());\n\n        Class<?>[] interfaces = String.class.getInterfaces();\n        System.out.println(\"Interfaces: \" + java.util.Arrays.toString(interfaces));\n\n        int modifiers = String.class.getModifiers();\n        System.out.println(\"Is public: \" + Modifier.isPublic(modifiers));\n        System.out.println(\"Is final: \" + Modifier.isFinal(modifiers));\n\n        // Primitives and arrays\n        System.out.println(\"int.class: \" + int.class);\n        System.out.println(\"int[].class: \" + int[].class);\n        System.out.println(\"String[].class: \" + String[].class);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inspecting-constructors-methods-and-fields",
      children: "Inspecting Constructors, Methods, and Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\n\npublic class ReflectionInspectionDemo {\n\n    public static void main(String[] args) {\n        Class<?> clazz = User.class;\n\n        System.out.println(\"=== Constructors ===\");\n        for (Constructor<?> ctor : clazz.getConstructors()) {\n            System.out.println(formatConstructor(ctor));\n        }\n\n        System.out.println(\"\\n=== Declared Constructors (includes private) ===\");\n        for (Constructor<?> ctor : clazz.getDeclaredConstructors()) {\n            System.out.println(formatConstructor(ctor));\n        }\n\n        System.out.println(\"\\n=== Public Methods ===\");\n        for (Method method : clazz.getMethods()) {\n            System.out.println(formatMethod(method));\n        }\n\n        System.out.println(\"\\n=== Declared Methods (excludes inherited) ===\");\n        for (Method method : clazz.getDeclaredMethods()) {\n            System.out.println(formatMethod(method));\n        }\n\n        System.out.println(\"\\n=== Public Fields ===\");\n        for (Field field : clazz.getFields()) {\n            System.out.println(formatField(field));\n        }\n\n        System.out.println(\"\\n=== Declared Fields ===\");\n        for (Field field : clazz.getDeclaredFields()) {\n            System.out.println(formatField(field));\n        }\n    }\n\n    private static String formatConstructor(Constructor<?> ctor) {\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"  \").append(ctor.getName());\n        sb.append(\"(\");\n        Class<?>[] params = ctor.getParameterTypes();\n        for (int i = 0; i < params.length; i++) {\n            if (i > 0) sb.append(\", \");\n            sb.append(params[i].getSimpleName());\n        }\n        sb.append(\")\");\n        int mod = ctor.getModifiers();\n        sb.append(\" [\").append(Modifier.toString(mod)).append(\"]\");\n        return sb.toString();\n    }\n\n    private static String formatMethod(Method method) {\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"  \").append(Modifier.toString(method.getModifiers()));\n        if (method.getModifiers() != 0) sb.append(\" \");\n        sb.append(method.getReturnType().getSimpleName()).append(\" \");\n        sb.append(method.getName()).append(\"(\");\n        Class<?>[] params = method.getParameterTypes();\n        for (int i = 0; i < params.length; i++) {\n            if (i > 0) sb.append(\", \");\n            sb.append(params[i].getSimpleName());\n        }\n        sb.append(\")\");\n        return sb.toString();\n    }\n\n    private static String formatField(Field field) {\n        StringBuilder sb = new StringBuilder();\n        sb.append(\"  \").append(Modifier.toString(field.getModifiers()));\n        if (field.getModifiers() != 0) sb.append(\" \");\n        sb.append(field.getType().getSimpleName()).append(\" \");\n        sb.append(field.getName());\n        return sb.toString();\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invoking-constructors-methods-and-fields",
      children: "Invoking Constructors, Methods, and Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\n\npublic class ReflectionInvocationDemo {\n\n    public static void main(String[] args) throws Exception {\n        // --- Invoking constructors ---\n        Class<?> clazz = User.class;\n\n        Constructor<?> noArgCtor = clazz.getDeclaredConstructor();\n        Object user = noArgCtor.newInstance();\n        System.out.println(\"User created via reflection: \" + user);\n\n        Constructor<?> paramCtor = clazz.getDeclaredConstructor(\n                Long.class, String.class, String.class, Integer.class\n        );\n        Object alice = paramCtor.newInstance(1L, \"alice\", \"alice@example.com\", 30);\n        System.out.println(\"Alice: \" + alice);\n\n        // --- Invoking methods ---\n        Method setUsername = clazz.getDeclaredMethod(\"setUsername\", String.class);\n        setUsername.invoke(user, \"bob\");\n\n        Method getUsername = clazz.getDeclaredMethod(\"getUsername\");\n        String username = (String) getUsername.invoke(user);\n        System.out.println(\"Username: \" + username);\n\n        // --- Methods with return values ---\n        Method setAge = clazz.getDeclaredMethod(\"setAge\", Integer.class);\n        setAge.invoke(user, 25);\n\n        Method getAge = clazz.getDeclaredMethod(\"getAge\");\n        int age = (int) getAge.invoke(user);\n        System.out.println(\"Age: \" + age);\n\n        // --- Accessing fields ---\n        System.out.println(\"\\n=== Field Access ===\");\n        for (Field field : clazz.getDeclaredFields()) {\n            field.setAccessible(true);\n            String fieldName = field.getName();\n            Object fieldValue = field.get(user);\n            System.out.println(fieldName + \" = \" + fieldValue);\n        }\n\n        // --- Modifying private fields ---\n        Field emailField = clazz.getDeclaredField(\"email\");\n        emailField.setAccessible(true);\n        emailField.set(user, \"bob@example.com\");\n\n        Method getEmail = clazz.getDeclaredMethod(\"getEmail\");\n        String email = (String) getEmail.invoke(user);\n        System.out.println(\"Updated email: \" + email);\n\n        // --- Working with annotations on methods ---\n        System.out.println(\"\\n=== Annotations on Methods ===\");\n        for (Method method : clazz.getDeclaredMethods()) {\n            Transactional tx = method.getAnnotation(Transactional.class);\n            if (tx != null) {\n                System.out.println(method.getName()\n                        + \" → propagation: \" + tx.propagation()\n                        + \", readOnly: \" + tx.readOnly());\n            }\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "runtime-annotation-access",
      children: "Runtime Annotation Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Annotations with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Retention(RetentionPolicy.RUNTIME)"
      }), " can be inspected at runtime using the Reflection API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\nimport java.util.*;\n\npublic class RuntimeAnnotationAccessDemo {\n\n    public static void main(String[] args) {\n        Class<?> clazz = User.class;\n\n        // --- Class-level annotations ---\n        System.out.println(\"=== Class Annotations ===\");\n        Entity entity = clazz.getAnnotation(Entity.class);\n        if (entity != null) {\n            System.out.println(\"Table: \" +\n                    (entity.tableName().isEmpty()\n                            ? clazz.getSimpleName()\n                            : entity.tableName()));\n        }\n\n        // Get all annotations\n        System.out.println(\"\\nAll annotations on \" + clazz.getSimpleName() + \":\");\n        for (java.lang.annotation.Annotation ann : clazz.getAnnotations()) {\n            System.out.println(\"  @\" + ann.annotationType().getSimpleName());\n        }\n\n        // --- Field-level annotations ---\n        System.out.println(\"\\n=== Field Annotations ===\");\n        Map<String, String> columnMappings = new LinkedHashMap<>();\n        String idField = null;\n\n        for (Field field : clazz.getDeclaredFields()) {\n            Id id = field.getAnnotation(Id.class);\n            Column column = field.getAnnotation(Column.class);\n\n            if (id != null) {\n                idField = field.getName();\n                System.out.println(\"@Id on \" + field.getName()\n                        + \" (auto: \" + id.autoGenerated() + \")\");\n            }\n\n            if (column != null) {\n                columnMappings.put(field.getName(), column.name());\n                System.out.println(\"@\" + Column.class.getSimpleName()\n                        + \" on \" + field.getName()\n                        + \" → column '\" + column.name() + \"'\"\n                        + \" (nullable: \" + column.nullable()\n                        + \", length: \" + column.length()\n                        + \", unique: \" + column.unique() + \")\");\n            }\n        }\n\n        // --- Method-level annotations ---\n        System.out.println(\"\\n=== Method Annotations ===\");\n        for (Method method : clazz.getDeclaredMethods()) {\n            Transactional tx = method.getAnnotation(Transactional.class);\n            if (tx != null) {\n                System.out.println(\"@\" + Transactional.class.getSimpleName()\n                        + \" on \" + method.getName()\n                        + \" (propagation: \" + tx.propagation()\n                        + \", isolation: \" + tx.isolation()\n                        + \", readOnly: \" + tx.readOnly() + \")\");\n            }\n        }\n\n        System.out.println(\"\\nColumn mappings: \" + columnMappings);\n        System.out.println(\"ID field: \" + idField);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reflection-patterns",
      children: "Reflection Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-proxies",
      children: "Dynamic Proxies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic proxy"
      }), " implements one or more interfaces at runtime by delegating method calls to an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvocationHandler"
      }), ". This is the foundation of AOP in Spring (declarative transactions, caching, security)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\n\npublic interface Service {\n\n    String process(String input);\n\n    int calculate(int a, int b);\n\n}\n\npublic class RealService implements Service {\n\n    @Override\n    public String process(String input) {\n        return \"Processed: \" + input.toUpperCase();\n    }\n\n    @Override\n    public int calculate(int a, int b) {\n        return a + b;\n    }\n\n}\n\npublic class LoggingInvocationHandler implements InvocationHandler {\n\n    private final Object target;\n\n    public LoggingInvocationHandler(Object target) {\n        this.target = target;\n    }\n\n    @Override\n    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n        String methodName = method.getName();\n        System.out.println(\"[LOG] Entering: \" + methodName\n                + \" with args: \" + java.util.Arrays.toString(args));\n\n        long start = System.nanoTime();\n        try {\n            Object result = method.invoke(target, args);\n            long elapsed = (System.nanoTime() - start) / 1_000_000;\n            System.out.println(\"[LOG] Exiting: \" + methodName\n                    + \" result: \" + result\n                    + \" (\" + elapsed + \"ms)\");\n            return result;\n        } catch (InvocationTargetException e) {\n            System.out.println(\"[LOG] Error in \" + methodName\n                    + \": \" + e.getTargetException().getMessage());\n            throw e.getTargetException();\n        }\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T createProxy(T target, Class<T> interfaceClass) {\n        return (T) Proxy.newProxyInstance(\n                interfaceClass.getClassLoader(),\n                new Class<?>[]{interfaceClass},\n                new LoggingInvocationHandler(target)\n        );\n    }\n\n}\n\npublic class TransactionalInvocationHandler implements InvocationHandler {\n\n    private final Object target;\n\n    public TransactionalInvocationHandler(Object target) {\n        this.target = target;\n    }\n\n    @Override\n    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n        Transactional tx = method.getAnnotation(Transactional.class);\n        if (tx != null) {\n            System.out.println(\"[TX] Beginning transaction\"\n                    + \" (propagation: \" + tx.propagation()\n                    + \", readOnly: \" + tx.readOnly() + \")\");\n            try {\n                Object result = method.invoke(target, args);\n                System.out.println(\"[TX] Committing transaction\");\n                return result;\n            } catch (Exception e) {\n                System.out.println(\"[TX] Rolling back transaction due to: \" + e.getMessage());\n                throw e.getCause() != null ? e.getCause() : e;\n            }\n        } else {\n            return method.invoke(target, args);\n        }\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T createProxy(T target, Class<T> interfaceClass) {\n        return (T) Proxy.newProxyInstance(\n                interfaceClass.getClassLoader(),\n                new Class<?>[]{interfaceClass},\n                new TransactionalInvocationHandler(target)\n        );\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DynamicProxyDemo {\n\n    public static void main(String[] args) {\n        RealService realService = new RealService();\n\n        // Logging proxy\n        Service loggedService = LoggingInvocationHandler.createProxy(\n                realService, Service.class\n        );\n        System.out.println(\"=== Logging Proxy ===\");\n        String result = loggedService.process(\"hello world\");\n        int sum = loggedService.calculate(10, 20);\n\n        System.out.println();\n\n        // Transactional proxy\n        Service transactionalService = TransactionalInvocationHandler.createProxy(\n                realService, Service.class\n        );\n        System.out.println(\"=== Transactional Proxy ===\");\n        transactionalService.process(\"tx test\");\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-injection-via-reflection",
      children: "Dependency Injection via Reflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A minimal DI container that scans for annotated fields and injects dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.*;\nimport java.lang.reflect.*;\nimport java.util.*;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.FIELD)\npublic @interface Inject {\n}\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface Component {\n    String name() default \"\";\n}\n\n@Component\npublic class Logger {\n\n    public void info(String message) {\n        System.out.println(\"[INFO] \" + message);\n    }\n\n}\n\n@Component\npublic class OrderRepository {\n\n    private final List<String> orders = new ArrayList<>();\n\n    public void save(String order) {\n        orders.add(order);\n        System.out.println(\"Saved order: \" + order);\n    }\n\n    public List<String> findAll() {\n        return new ArrayList<>(orders);\n    }\n\n}\n\n@Component\npublic class OrderService {\n\n    @Inject\n    private Logger logger;\n\n    @Inject\n    private OrderRepository orderRepository;\n\n    public void placeOrder(String item) {\n        logger.info(\"Placing order for: \" + item);\n        orderRepository.save(item);\n    }\n\n    public List<String> getOrders() {\n        return orderRepository.findAll();\n    }\n\n}\n\npublic class SimpleDiContainer {\n\n    private final Map<Class<?>, Object> beans = new HashMap<>();\n\n    public void register(Class<?>... componentClasses) throws Exception {\n        for (Class<?> clazz : componentClasses) {\n            Object instance = clazz.getDeclaredConstructor().newInstance();\n            beans.put(clazz, instance);\n        }\n    }\n\n    public <T> T getBean(Class<T> clazz) {\n        return clazz.cast(beans.get(clazz));\n    }\n\n    public void injectDependencies() throws Exception {\n        for (Object bean : beans.values()) {\n            Class<?> clazz = bean.getClass();\n            for (Field field : clazz.getDeclaredFields()) {\n                if (field.isAnnotationPresent(Inject.class)) {\n                    Class<?> fieldType = field.getType();\n                    Object dependency = beans.get(fieldType);\n                    if (dependency == null) {\n                        throw new RuntimeException(\n                                \"No bean of type \" + fieldType.getName()\n                                        + \" found for injection into \" + clazz.getName()\n                        );\n                    }\n                    field.setAccessible(true);\n                    field.set(bean, dependency);\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        SimpleDiContainer container = new SimpleDiContainer();\n        container.register(Logger.class, OrderRepository.class, OrderService.class);\n        container.injectDependencies();\n\n        OrderService orderService = container.getBean(OrderService.class);\n        orderService.placeOrder(\"Laptop\");\n        orderService.placeOrder(\"Mouse\");\n\n        System.out.println(\"All orders: \" + orderService.getOrders());\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orm-mapping-via-reflection",
      children: "ORM Mapping via Reflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A simple ORM mapper that reads annotations and generates SQL:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class SimpleOrmMapper {\n\n    public String generateInsert(Object entity) throws Exception {\n        Class<?> clazz = entity.getClass();\n        Entity entityAnn = clazz.getAnnotation(Entity.class);\n        String tableName = entityAnn.tableName().isEmpty()\n                ? clazz.getSimpleName().toLowerCase()\n                : entityAnn.tableName();\n\n        List<String> columns = new ArrayList<>();\n        List<String> values = new ArrayList<>();\n\n        for (Field field : clazz.getDeclaredFields()) {\n            Column column = field.getAnnotation(Column.class);\n            if (column == null) continue;\n\n            field.setAccessible(true);\n            Object value = field.get(entity);\n\n            columns.add(column.name());\n            if (value == null) {\n                values.add(\"NULL\");\n            } else if (value instanceof String || value instanceof Enum) {\n                values.add(\"'\" + value.toString().replace(\"'\", \"''\") + \"'\");\n            } else if (value instanceof Number || value instanceof Boolean) {\n                values.add(value.toString());\n            } else {\n                values.add(\"'\" + value.toString() + \"'\");\n            }\n        }\n\n        String columnList = String.join(\", \", columns);\n        String valueList = String.join(\", \", values);\n\n        return \"INSERT INTO \" + tableName\n                + \" (\" + columnList + \") VALUES (\" + valueList + \");\";\n    }\n\n    public String generateSelectById(Class<?> clazz, Object idValue) {\n        Entity entityAnn = clazz.getAnnotation(Entity.class);\n        String tableName = entityAnn.tableName().isEmpty()\n                ? clazz.getSimpleName().toLowerCase()\n                : entityAnn.tableName();\n\n        String idColumn = null;\n        for (Field field : clazz.getDeclaredFields()) {\n            if (field.isAnnotationPresent(Id.class)) {\n                Column column = field.getAnnotation(Column.class);\n                idColumn = (column != null) ? column.name() : field.getName();\n                break;\n            }\n        }\n\n        if (idColumn == null) {\n            throw new RuntimeException(\"No @Id field found in \" + clazz.getSimpleName());\n        }\n\n        String idFormatted = (idValue instanceof String)\n                ? \"'\" + idValue + \"'\"\n                : idValue.toString();\n\n        return \"SELECT * FROM \" + tableName + \" WHERE \" + idColumn + \" = \" + idFormatted + \";\";\n    }\n\n    public <T> T mapToEntity(Class<T> clazz, Map<String, Object> row) throws Exception {\n        Constructor<T> ctor = clazz.getDeclaredConstructor();\n        T entity = ctor.newInstance();\n\n        for (Field field : clazz.getDeclaredFields()) {\n            Column column = field.getAnnotation(Column.class);\n            if (column == null) continue;\n\n            field.setAccessible(true);\n            Object value = row.get(column.name());\n            if (value != null) {\n                field.set(entity, convertValue(value, field.getType()));\n            }\n        }\n\n        return entity;\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    private Object convertValue(Object value, Class<?> targetType) {\n        if (targetType.isInstance(value)) return value;\n        if (targetType == Integer.class || targetType == int.class) {\n            return ((Number) value).intValue();\n        }\n        if (targetType == Long.class || targetType == long.class) {\n            return ((Number) value).longValue();\n        }\n        if (targetType == Double.class || targetType == double.class) {\n            return ((Number) value).doubleValue();\n        }\n        if (targetType == Boolean.class || targetType == boolean.class) {\n            return Boolean.valueOf(value.toString());\n        }\n        if (targetType == String.class) {\n            return value.toString();\n        }\n        return value;\n    }\n\n    public static void main(String[] args) throws Exception {\n        SimpleOrmMapper mapper = new SimpleOrmMapper();\n\n        User user = new User(1L, \"jane\", \"jane@example.com\", 28);\n\n        String insertSQL = mapper.generateInsert(user);\n        System.out.println(\"Generated INSERT:\");\n        System.out.println(insertSQL);\n\n        String selectSQL = mapper.generateSelectById(User.class, 1L);\n        System.out.println(\"\\nGenerated SELECT:\");\n        System.out.println(selectSQL);\n\n        Map<String, Object> row = new LinkedHashMap<>();\n        row.put(\"user_id\", 2L);\n        row.put(\"username\", \"john\");\n        row.put(\"email\", \"john@example.com\");\n        row.put(\"age\", 35);\n\n        User mapped = mapper.mapToEntity(User.class, row);\n        System.out.println(\"\\nMapped entity:\");\n        System.out.println(\"  ID: \" + mapped.getId());\n        System.out.println(\"  Username: \" + mapped.getUsername());\n        System.out.println(\"  Email: \" + mapped.getEmail());\n        System.out.println(\"  Age: \" + mapped.getAge());\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "annotations-in-spring-boot",
      children: "Annotations in Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot makes extensive use of annotations for configuration, dependency injection, and component discovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stereotype-annotations",
      children: "Stereotype Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// @Component → generic stereotype for any Spring-managed bean\n@Component\npublic class GenericComponent {\n\n    public String execute() {\n        return \"Generic component executed\";\n    }\n\n}\n\n// @Service → specialization of @Component for service-layer classes\n@Service\npublic class UserService {\n\n    public String getUserName(Long id) {\n        return \"User-\" + id;\n    }\n\n}\n\n// @Repository → specialization for persistence-layer classes\n// Adds automatic persistence exception translation\n@Repository\npublic class JdbcUserRepository {\n\n    public User findById(Long id) {\n        // In real code, would query a database\n        return new User(id, \"found\", \"found@example.com\", 25);\n    }\n\n}\n\n// @Controller → specialization for web-layer classes (MVC)\n@Controller\npublic class UserController {\n\n    @GetMapping(\"/users/{id}\")\n    public String getUser(@PathVariable Long id) {\n        return \"user-detail\";\n    }\n\n}\n\n// @RestController → convenience combination of @Controller + @ResponseBody\n// @RestController\n// public class ApiUserController {\n//\n//     @GetMapping(\"/api/users/{id}\")\n//     public User getUser(@PathVariable Long id) {\n//         return new User(id, \"api-user\", \"api@example.com\", 30);\n//     }\n//\n// }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autowired",
      children: "@Autowired"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Service;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\n\n@Service\npublic class AutowiredDemoService {\n\n    // Field injection\n    @Autowired\n    private UserRepository userRepository;\n\n    // Constructor injection → preferred approach in modern Spring\n    private final NotificationService notificationService;\n\n    public AutowiredDemoService(NotificationService notificationService) {\n        this.notificationService = notificationService;\n    }\n\n    // Setter injection\n    private AuditService auditService;\n\n    @Autowired\n    public void setAuditService(AuditService auditService) {\n        this.auditService = auditService;\n    }\n\n    // Qualifier-based disambiguation\n    @Autowired\n    @Qualifier(\"primaryCache\")\n    private CacheManager cacheManager;\n\n    // Optional dependency\n    @Autowired(required = false)\n    private MetricsCollector metricsCollector;\n\n    public void performAction(Long userId) {\n        User user = userRepository.findById(userId);\n        notificationService.notify(user);\n        auditService.log(\"Action performed by user: \" + userId);\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meta-annotations-and-composed-annotations",
      children: "Meta-Annotations and Composed Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring heavily uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meta-annotations"
      }), "→annotations that are themselves annotated with other annotations. This enables ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composed annotations"
      }), " where a single annotation encapsulates multiple behaviors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Component;\nimport org.springframework.core.annotation.AliasFor;\nimport org.springframework.transaction.annotation.Transactional;\nimport org.springframework.web.bind.annotation.RestController;\nimport java.lang.annotation.*;\n\n// --- Meta-annotation basics ---\n\n// @RestController is itself a composed annotation:\n// @Target(ElementType.TYPE)\n// @Retention(RetentionPolicy.RUNTIME)\n// @Documented\n// @Controller\n// @ResponseBody\n// public @interface RestController {\n//     @AliasFor(annotation = Controller.class)\n//     String value() default \"\";\n// }\n\n// Creating a custom composed annotation\n@Component\n@Transactional\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface ServiceWithTransaction {\n\n    @AliasFor(annotation = Component.class, attribute = \"value\")\n    String beanName() default \"\";\n\n    @AliasFor(annotation = Transactional.class, attribute = \"readOnly\")\n    boolean readOnly() default false;\n\n}\n\n// Usage\n@ServiceWithTransaction(beanName = \"orderMgmt\", readOnly = false)\npublic class OrderManagementService {\n\n    public void createOrder(String item) {\n        System.out.println(\"Creating order for: \" + item);\n    }\n\n}\n\n// --- Conditional annotations ---\n// Spring's @Conditional family uses annotations extensively:\n//\n// @ConditionalOnClass(name = \"org.postgresql.Driver\")\n// @ConditionalOnProperty(name = \"app.feature.x.enabled\", havingValue = \"true\")\n// @ConditionalOnMissingBean(DataSource.class)\n// These are meta-annotations processed by the auto-configuration engine.\n\n// --- @AliasFor example ---\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface FeatureFlag {\n\n    @AliasFor(\"name\")\n    String value() default \"\";\n\n    @AliasFor(\"value\")\n    String name() default \"\";\n\n    boolean enabled() default true;\n\n}\n\n@FeatureFlag(name = \"dark-mode\", enabled = true)\npublic class DarkModeConfig {\n\n    public boolean isDarkMode() {\n        return true;\n    }\n\n}\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-spring-processes-annotations",
      children: "How Spring Processes Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring uses the Reflection API combined with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ASM"
      }), " bytecode library to discover and process annotations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classpath scanning"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ClassPathScanningCandidateComponentProvider"
        }), " scans packages for classes annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Component"
        }), " (and its meta-annotations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bean post-processing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BeanPostProcessor"
        }), " implementations (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutowiredAnnotationBeanPostProcessor"
        }), ") use reflection to inject dependencies into fields annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Autowired"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Inject"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Value"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AOP proxies"
        }), ": When a bean is annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Cacheable"
        }), ", Spring wraps it in a dynamic proxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-configuration"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnClass"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnMissingBean"
        }), ", etc., are evaluated at startup using reflection to decide which beans to register."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;\nimport org.springframework.core.type.filter.AnnotationTypeFilter;\nimport org.springframework.stereotype.Component;\n\npublic class SpringAnnotationProcessingSimulation {\n\n    public static void main(String[] args) {\n        // This simulates how Spring detects annotated components\n        ClassPathScanningCandidateComponentProvider scanner =\n                new ClassPathScanningCandidateComponentProvider(false);\n\n        scanner.addIncludeFilter(new AnnotationTypeFilter(Component.class));\n\n        var beans = scanner.findCandidateComponents(\"com.example\");\n        System.out.println(\"Discovered \" + beans.size() + \" components:\");\n        for (var bean : beans) {\n            System.out.println(\"  - \" + bean.getBeanClassName());\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module-system-impact-on-reflection",
      children: "Module System Impact on Reflection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 9 introduced the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Platform Module System"
      }), " (JPMS), which adds strong encapsulation. By default, reflection cannot access ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private"
      }), " members of types in other modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "the-opens-directive",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opens"
      }), " Directive"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A module must explicitly allow runtime access with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opens"
      }), " directive:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// module-info.java → module declaration\n\nmodule com.example.myapp {\n    // Opens specific packages for reflection\n    opens com.example.myapp.model;\n    opens com.example.myapp.service;\n\n    // Opens a package for reflection only by specific modules\n    opens com.example.myapp.internal to com.example.framework;\n\n    // Opens all packages in the module (use sparingly)\n    // open module com.example.myapp {\n    //     requires spring.core;\n    //     requires spring.beans;\n    // }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "command-line-workaround---add-opens",
      children: ["Command-Line Workaround: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--add-opens"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For frameworks that need to reflect on internal JDK types, use JVM flags:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// --add-opens module/package=reflecting.module\n//\n// java --add-opens java.base/java.lang=ALL-UNNAMED \\\n//      --add-opens java.base/java.util=ALL-UNNAMED \\\n//      -jar myapp.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reflection-under-the-module-system",
      children: "Reflection Under the Module System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\n\npublic class ModuleReflectionDemo {\n\n    public static void main(String[] args) throws Exception {\n        // Check if a class is in a named module\n        Class<?> stringClass = String.class;\n        Module stringModule = stringClass.getModule();\n        System.out.println(\"String module: \" + stringModule.getName());\n        System.out.println(\"String module is named: \" + stringModule.isNamed());\n\n        // Open module → all packages are fully accessible via reflection\n        // @SuppressWarnings(\"unchecked\")\n        // Class<OpenModuleClass> clazz = (Class<OpenModuleClass>)\n        //         Class.forName(\"com.example.openmodule.OpenModuleClass\");\n        // for (Method method : clazz.getDeclaredMethods()) {\n        //     method.setAccessible(true); // Works because module is open\n        // }\n\n        // Non-open module → reflection is restricted\n        Class<?> systemClass = Class.forName(\"java.lang.reflect.Proxy\");\n        try {\n            // This will throw InaccessibleObjectException in recent JDKs\n            // for packages not opened for reflection\n            for (Field field : systemClass.getDeclaredFields()) {\n                field.setAccessible(true);\n                System.out.println(\"Field: \" + field.getName());\n            }\n        } catch (InaccessibleObjectException e) {\n            System.out.println(\"Cannot access fields: \" + e.getMessage());\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type-tokens",
      children: "Type Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Due to erasure, generic type information is lost at runtime. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type tokens"
      }), " capture that information as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class<?>"
      }), " references until you need a reified form. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Super type tokens"
      }), " go further: they capture concrete parameterized types by exploiting the fact that the generic superclass information is stored in bytecode."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "super-type-token-pattern-gson-typetoken",
      children: ["Super Type Token Pattern (Gson ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeToken"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\nimport java.util.*;\n\npublic abstract class TypeReference<T> {\n\n    private final Type type;\n\n    @SuppressWarnings(\"unchecked\")\n    protected TypeReference() {\n        Type superclass = getClass().getGenericSuperclass();\n        if (superclass instanceof Class<?>) {\n            throw new RuntimeException(\"Missing type parameter: \"\n                    + \"specify a concrete type like new TypeReference<List<String>>() {}\");\n        }\n        this.type = ((ParameterizedType) superclass).getActualTypeArguments()[0];\n    }\n\n    public Type getType() {\n        return type;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        return (o instanceof TypeReference<?> tr)\n                && type.equals(tr.type);\n    }\n\n    @Override\n    public int hashCode() {\n        return type.hashCode();\n    }\n\n    @Override\n    public String toString() {\n        return type.toString();\n    }\n\n    public Class<?> getRawType() {\n        if (type instanceof ParameterizedType pt) {\n            return (Class<?>) pt.getRawType();\n        }\n        return (Class<?>) type;\n    }\n\n    public Type[] getActualTypeArguments() {\n        if (type instanceof ParameterizedType pt) {\n            return pt.getActualTypeArguments();\n        }\n        return new Type[0];\n    }\n\n}\n\npublic class SuperTypeTokenDemo {\n\n    private static final Map<TypeReference<?>, Object> registry = new HashMap<>();\n\n    public static <T> void register(TypeReference<T> ref, T instance) {\n        registry.put(ref, instance);\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public static <T> T get(TypeReference<T> ref) {\n        return (T) registry.get(ref);\n    }\n\n    public static void main(String[] args) throws Exception {\n        // Captures List<String> at runtime via anonymous subclass\n        TypeReference<List<String>> stringListRef = new TypeReference<>() {};\n        System.out.println(\"Type: \" + stringListRef.getType());\n        System.out.println(\"Raw type: \" + stringListRef.getRawType());\n        System.out.println(\"Type args: \" + Arrays.toString(stringListRef.getActualTypeArguments()));\n\n        // Register instances by their parameterized type\n        register(new TypeReference<List<String>>() {}, List.of(\"a\", \"b\", \"c\"));\n        register(new TypeReference<Map<Integer, String>>() {}, Map.of(1, \"one\", 2, \"two\"));\n\n        // Retrieve with full type safety\n        List<String> strings = get(new TypeReference<List<String>>() {});\n        System.out.println(\"Strings: \" + strings);\n\n        Map<Integer, String> map = get(new TypeReference<Map<Integer, String>>() {});\n        System.out.println(\"Map: \" + map);\n\n        // These are distinct types → won't conflict\n        register(new TypeReference<List<Integer>>() {}, List.of(1, 2, 3));\n        List<Integer> ints = get(new TypeReference<List<Integer>>() {});\n        System.out.println(\"Integers: \" + ints);\n\n        // Demonstrate that parameterized types are preserved\n        System.out.println(\"\\n=== Type Preservation ===\");\n        showTypeInfo(new TypeReference<List<Set<String>>>() {});\n        showTypeInfo(new TypeReference<Map<String, List<Integer>>>() {});\n    }\n\n    private static void showTypeInfo(TypeReference<?> ref) {\n        System.out.println(\"Type: \" + ref.getType());\n        System.out.println(\"  Raw: \" + ref.getRawType());\n        for (int i = 0; i < ref.getActualTypeArguments().length; i++) {\n            Type arg = ref.getActualTypeArguments()[i];\n            System.out.println(\"  Arg \" + i + \": \" + arg\n                    + \" (class: \" + arg.getClass().getName() + \")\");\n        }\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jacksons-typereference",
      children: "Jackson's TypeReference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Jackson provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.fasterxml.jackson.core.type.TypeReference"
      }), " with the same pattern:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport java.util.*;\n\npublic class JacksonTypeReferenceDemo {\n\n    public static void main(String[] args) throws Exception {\n        ObjectMapper mapper = new ObjectMapper();\n\n        String json = \"\"\"\n                [\n                    {\"id\": 1, \"name\": \"Alice\"},\n                    {\"id\": 2, \"name\": \"Bob\"}\n                ]\n                \"\"\";\n\n        // Without TypeReference → returns List<Map> (raw types)\n        List<Map<String, Object>> raw = mapper.readValue(\n                json, List.class\n        );\n        System.out.println(\"Raw type: \" + raw.getClass());\n\n        // With TypeReference → preserves generic type\n        List<User> users = mapper.readValue(\n                json,\n                new TypeReference<List<User>>() {}\n        );\n        System.out.println(\"Users: \" + users);\n        System.out.println(\"User class: \" + users.get(0).getClass().getName());\n\n        // Complex nested generics\n        String complexJson = \"\"\"\n                {\n                    \"results\": [\n                        {\"id\": 10, \"name\": \"Charlie\"},\n                        {\"id\": 20, \"name\": \"Diana\"}\n                    ],\n                    \"totalCount\": 2,\n                    \"page\": 1\n                }\n                \"\"\";\n\n        var pageResult = mapper.readValue(\n                complexJson,\n                new TypeReference<PageResult<User>>() {}\n        );\n        System.out.println(\"Page: \" + pageResult.results()\n                + \", total: \" + pageResult.totalCount()\n                + \", page: \" + pageResult.page());\n    }\n\n    record PageResult<T>(\n            List<T> results,\n            int totalCount,\n            int page\n    ) {}\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-dao-with-typereference",
      children: "Generic DAO with TypeReference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\nimport java.util.*;\n\npublic abstract class GenericDao<T, ID> {\n\n    private final Class<T> entityClass;\n    private final Map<ID, T> store = new LinkedHashMap<>();\n\n    @SuppressWarnings(\"unchecked\")\n    protected GenericDao() {\n        Type superclass = getClass().getGenericSuperclass();\n        if (superclass instanceof ParameterizedType pt) {\n            this.entityClass = (Class<T>) pt.getActualTypeArguments()[0];\n        } else {\n            throw new RuntimeException(\"Missing type parameter for GenericDao\");\n        }\n    }\n\n    public Class<T> getEntityClass() {\n        return entityClass;\n    }\n\n    public T save(ID id, T entity) {\n        store.put(id, entity);\n        return entity;\n    }\n\n    public Optional<T> findById(ID id) {\n        return Optional.ofNullable(store.get(id));\n    }\n\n    public List<T> findAll() {\n        return new ArrayList<>(store.values());\n    }\n\n    public void delete(ID id) {\n        store.remove(id);\n    }\n\n    public long count() {\n        return store.size();\n    }\n\n    public static void main(String[] args) {\n        GenericDao<User, Long> userDao = new GenericDao<>() {};\n        System.out.println(\"Entity class: \" + userDao.getEntityClass().getName());\n\n        userDao.save(1L, new User(1L, \"alice\", \"alice@example.com\", 25));\n        userDao.save(2L, new User(2L, \"bob\", \"bob@example.com\", 30));\n\n        userDao.findById(1L).ifPresent(u ->\n                System.out.println(\"Found: \" + u.getUsername())\n        );\n\n        System.out.println(\"All users: \" + userDao.findAll().size());\n    }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered three deeply interconnected mechanisms that define advanced Java programming."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generics"
      }), " provide compile-time type safety for collections, algorithms, and data structures. Type parameters (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V"
      }), ") allow classes and methods to operate on types specified by the caller. Bounded type parameters (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<T extends Comparable<T>>"
      }), ") and multiple bounds (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<T extends A & B>"
      }), ") constrain the types that can be used. Wildcards introduce usage-site variance: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "? extends T"
      }), " for producers, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "? super T"
      }), " for consumers→the fundamental PECS principle. Type erasure removes generic information at compile time, inserting casts and generating bridge methods as needed. This erasure imposes limitations: no generic array creation, no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instanceof"
      }), " with parameterized types, and potential heap pollution, which ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SafeVarargs"
      }), " helps mitigate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Annotations"
      }), " attach metadata to Java code elements. Custom annotations are defined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface"
      }), " and controlled by meta-annotations: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Retention"
      }), " (when available), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Target"
      }), " (where applicable), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Documented"
      }), " (Javadoc inclusion), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Inherited"
      }), " (subclass propagation), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Repeatable"
      }), " (multiple instances). Annotation processing can occur at compile time via APT (JSR 269) or at runtime via reflection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reflection"
      }), " enables runtime inspection and invocation of constructors, methods, and fields. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class"
      }), " object is the entry point, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.reflect"
      }), " provides the tools for introspection. Dynamic proxies (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Proxy.newProxyInstance"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvocationHandler"
      }), ") delegate interface calls, forming the basis of AOP and declarative transactions. Spring Boot builds on all three: stereotype annotations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Service"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Repository"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), ") mark beans for auto-discovery, meta-annotations compose behavior, and reflection powers dependency injection and auto-configuration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Java module system (JPMS) restricts reflection by default, requiring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opens"
      }), " directives or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--add-opens"
      }), " flags for reflective access. Super type tokens (", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeReference"
      }), ") overcome erasure to preserve concrete parameterized types at runtime, essential for frameworks like Jackson and Gson."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Together, generics, annotations, and reflection form a triad that enables the framework-driven development model of modern Java: generics provide safety, annotations provide intent, and reflection provides the machinery to interpret and act on that intent at runtime."
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between a generic class and a generic method? When would you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain what happens during type erasure for the method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<T extends Comparable<T>> T max(T a, T b)"
          }), ". What is the erased signature?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a bridge method and when does the compiler generate one?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "List<?>"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "List<Object>"
          }), "? Can you add elements to either?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "State the PECS principle and give one example of a correct use for each wildcard type."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What meta-annotations control annotation behavior? What does each do?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Repeatable"
          }), " annotation work? What is the container annotation?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What are the three ways to obtain a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Class<?>"
          }), " object in Java?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getMethods()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getDeclaredMethods()"
          }), " on a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Class"
          }), " object?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a dynamic proxy work? What are the key components?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why do frameworks need ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--add-opens"
          }), " flags with modern JDK versions?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What problem do super type tokens solve that ordinary ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Class<?>"
          }), " objects cannot?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generic Stack"
          }), ": Implement a generic ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Stack<T>"
          }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "push"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pop"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "peek"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isEmpty"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "size"
          }), " methods. Ensure it is type-safe and does not leak its internal array type."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wildcard Utility"
          }), ": Write a utility class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collections2"
          }), " with a static method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "copy"
          }), " that copies elements from a source collection to a destination collection using appropriate wildcards."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Annotation Processor"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@NotNull"
          }), " annotation that can be applied to method parameters. Write an annotation processor that emits a compile-time error for any method parameter annotated with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@NotNull"
          }), " that is a primitive type."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reflective Object Printer"
          }), ": Write a method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "printObject(Object obj)"
          }), " that uses reflection to print all non-null field names and values of an object, including inherited fields."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring-Style Proxy"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Cacheable"
          }), " annotation and an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InvocationHandler"
          }), " that caches return values of annotated methods based on their arguments. Demonstrate with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FibonacciService"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generic Repository"
          }), ": Using the super type token pattern, create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericRepository<T, ID>"
          }), " base class that knows its entity type at runtime and can generate type-safe queries."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "19",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimal DI Container"
          }), ": Build a complete dependency injection container that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Scans a given package for classes annotated with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Component"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Discovers ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Inject"
            }), "-annotated fields and constructors"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resolves the dependency graph (including circular dependency detection)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Qualifier"
            }), " for disambiguation"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates and returns fully wired instances"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Object-Relational Mapper"
          }), ": Implement a mini ORM that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Entity"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Table"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Column"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Id"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@GeneratedValue"
            }), " annotations"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Generates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE"
            }), " SQL from annotated classes"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Persists objects as JSON for simplicity (instead of a real database)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports basic CRUD operations via reflection"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Handles inheritance with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@MappedSuperclass"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generic Type-safe Builder"
          }), ": Implement a generic builder pattern that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses a type-safe step builder (prevents calling ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build()"
            }), " before required fields are set)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserves generic type information at runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses bounded type parameters to ensure compile-time safety"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PersonBuilder.name(\"Alice\").age(30).build()"
            }), " where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "age"
            }), " is optional but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " is required"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AOP Framework Simulation"
          }), ": Build a small AOP framework that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Defines ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Before"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@After"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Around"
            }), " advice annotations"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses dynamic proxies to weave advice around methods"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports pointcut expressions via a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Pointcut"
            }), " annotation"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can compose multiple aspects on the same target"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module-Aware Plugin System"
          }), ": Create a plugin system that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Loads plugin JARs from a directory at runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses JPMS to isolate plugins in separate modules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Opens specific service interfaces for reflection"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Discovers plugin implementations via a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Plugin"
            }), " annotation"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows plugins to contribute new endpoints to a REST API"
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