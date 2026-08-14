"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[69610],{

/***/ 12515
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_56_interview_java_md_b86_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-56-interview-java-md-b86.json
const site_docs_courses_java_56_interview_java_md_b86_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/56-interview-java","title":"Java Core Interview Q&A","description":"Previous Spring Framework Interview Q&amp;A","source":"@site/docs/courses/java/56-interview-java.md","sourceDirName":"courses/java","slug":"/java/56-interview-java","permalink":"/ai-engineering-journey/java/56-interview-java","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":56,"frontMatter":{"id":"56-interview-java","slug":"/java/56-interview-java","title":"Java Core Interview Q&A","sidebar_label":"Java Core Interview Q&A","sidebar_position":56},"sidebar":"course-java","previous":{"title":"Observability (Micrometer, Prometheus, Grafana)","permalink":"/ai-engineering-journey/java/55-observability"},"next":{"title":"Spring & Spring Boot Interview Q&A","permalink":"/ai-engineering-journey/java/57-interview-spring"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/56-interview-java.md


const frontMatter = {
	id: '56-interview-java',
	slug: '/java/56-interview-java',
	title: 'Java Core Interview Q&A',
	sidebar_label: 'Java Core Interview Q&A',
	sidebar_position: 56
};
const contentTitle = 'Java Core Interview Q&A';

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
  "value": "Q1: How does Java implement polymorphism?",
  "id": "q1-how-does-java-implement-polymorphism",
  "level": 3
}, {
  "value": "Q2: Inheritance vs Composition → when to use which?",
  "id": "q2-inheritance-vs-composition--when-to-use-which",
  "level": 3
}, {
  "value": "Q3: SOLID principles.",
  "id": "q3-solid-principles",
  "level": 3
}, {
  "value": "Q4: HashMap internals.",
  "id": "q4-hashmap-internals",
  "level": 3
}, {
  "value": "Q5: ConcurrentHashMap thread-safety.",
  "id": "q5-concurrenthashmap-thread-safety",
  "level": 3
}, {
  "value": "Q6: TreeMap vs HashMap vs LinkedHashMap.",
  "id": "q6-treemap-vs-hashmap-vs-linkedhashmap",
  "level": 3
}, {
  "value": "Q7: Fail-fast vs fail-safe iterators.",
  "id": "q7-fail-fast-vs-fail-safe-iterators",
  "level": 3
}, {
  "value": "Q8: Comparable vs Comparator.",
  "id": "q8-comparable-vs-comparator",
  "level": 3
}, {
  "value": "Q9: Thread lifecycle states.",
  "id": "q9-thread-lifecycle-states",
  "level": 3
}, {
  "value": "Q10: synchronized keyword.",
  "id": "q10-synchronized-keyword",
  "level": 3
}, {
  "value": "Q11: volatile keyword.",
  "id": "q11-volatile-keyword",
  "level": 3
}, {
  "value": "Q12: Lock vs synchronized.",
  "id": "q12-lock-vs-synchronized",
  "level": 3
}, {
  "value": "Q13: ReentrantLock features.",
  "id": "q13-reentrantlock-features",
  "level": 3
}, {
  "value": "Q14: CountDownLatch vs CyclicBarrier vs Semaphore.",
  "id": "q14-countdownlatch-vs-cyclicbarrier-vs-semaphore",
  "level": 3
}, {
  "value": "Q15: ExecutorService thread pools.",
  "id": "q15-executorservice-thread-pools",
  "level": 3
}, {
  "value": "Q16: ForkJoinPool and work-stealing.",
  "id": "q16-forkjoinpool-and-work-stealing",
  "level": 3
}, {
  "value": "Q17: CompletableFuture → chaining, composition, error handling.",
  "id": "q17-completablefuture--chaining-composition-error-handling",
  "level": 3
}, {
  "value": "Q18: Virtual Threads (Project Loom).",
  "id": "q18-virtual-threads-project-loom",
  "level": 3
}, {
  "value": "Q19: JVM memory model.",
  "id": "q19-jvm-memory-model",
  "level": 3
}, {
  "value": "Q20: GC algorithms.",
  "id": "q20-gc-algorithms",
  "level": 3
}, {
  "value": "Q21: Class loading mechanism.",
  "id": "q21-class-loading-mechanism",
  "level": 3
}, {
  "value": "Q22: String pool and interning.",
  "id": "q22-string-pool-and-interning",
  "level": 3
}, {
  "value": "Q23: Lambda expressions and functional interfaces.",
  "id": "q23-lambda-expressions-and-functional-interfaces",
  "level": 3
}, {
  "value": "Q24: Streams API.",
  "id": "q24-streams-api",
  "level": 3
}, {
  "value": "Q25: Optional best practices.",
  "id": "q25-optional-best-practices",
  "level": 3
}, {
  "value": "Q26: Method references.",
  "id": "q26-method-references",
  "level": 3
}, {
  "value": "Q27: Generics → type erasure.",
  "id": "q27-generics--type-erasure",
  "level": 3
}, {
  "value": "Q28: Wildcards and PECS.",
  "id": "q28-wildcards-and-pecs",
  "level": 3
}, {
  "value": "Q29: Checked vs unchecked exceptions.",
  "id": "q29-checked-vs-unchecked-exceptions",
  "level": 3
}, {
  "value": "Q30: Try-with-resources.",
  "id": "q30-try-with-resources",
  "level": 3
}, {
  "value": "Q31: Exception handling best practices.",
  "id": "q31-exception-handling-best-practices",
  "level": 3
}, {
  "value": "Q32: Performance profiling.",
  "id": "q32-performance-profiling",
  "level": 3
}, {
  "value": "Q33: JIT compilation.",
  "id": "q33-jit-compilation",
  "level": 3
}, {
  "value": "Q34: Escape analysis and stack allocation.",
  "id": "q34-escape-analysis-and-stack-allocation",
  "level": 3
}, {
  "value": "Q35: Record classes (Java 14+).",
  "id": "q35-record-classes-java-14",
  "level": 3
}, {
  "value": "Q36: Sealed classes (Java 17+).",
  "id": "q36-sealed-classes-java-17",
  "level": 3
}, {
  "value": "Q37: Pattern matching (Java 16+).",
  "id": "q37-pattern-matching-java-16",
  "level": 3
}, {
  "value": "Q38: Switch expressions (Java 14+).",
  "id": "q38-switch-expressions-java-14",
  "level": 3
}, {
  "value": "Q39: Text blocks (Java 15+).",
  "id": "q39-text-blocks-java-15",
  "level": 3
}, {
  "value": "Q40: Memory leak detection.",
  "id": "q40-memory-leak-detection",
  "level": 3
}, {
  "value": "Q41: Concurrent collections beyond ConcurrentHashMap.",
  "id": "q41-concurrent-collections-beyond-concurrenthashmap",
  "level": 3
}, {
  "value": "Q42: Atomic classes and CAS.",
  "id": "q42-atomic-classes-and-cas",
  "level": 3
}, {
  "value": "Q43: String, StringBuilder, StringBuffer.",
  "id": "q43-string-stringbuilder-stringbuffer",
  "level": 3
}, {
  "value": "Q44: equals() and hashCode() contract.",
  "id": "q44-equals-and-hashcode-contract",
  "level": 3
}, {
  "value": "Q45: NIO and NIO.2 (Java 7+).",
  "id": "q45-nio-and-nio2-java-7",
  "level": 3
}, {
  "value": "Q46: Reflection API → use cases and performance implications.",
  "id": "q46-reflection-api--use-cases-and-performance-implications",
  "level": 3
}, {
  "value": "Q47: WeakReference, SoftReference, PhantomReference.",
  "id": "q47-weakreference-softreference-phantomreference",
  "level": 3
}, {
  "value": "Q48: Garbage collection deep dive → G1, ZGC, Shenandoah.",
  "id": "q48-garbage-collection-deep-dive--g1-zgc-shenandoah",
  "level": 3
}, {
  "value": "Q49: Java Module System (JPMS).",
  "id": "q49-java-module-system-jpms",
  "level": 3
}, {
  "value": "Q50: java.time API (JSR-310).",
  "id": "q50-javatime-api-jsr-310",
  "level": 3
}, {
  "value": "Q51: Local variable type inference (var).",
  "id": "q51-local-variable-type-inference-var",
  "level": 3
}, {
  "value": "Q52: Annotations → retention policies, processing, and runtime access.",
  "id": "q52-annotations--retention-policies-processing-and-runtime-access",
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
        id: "java-core-interview-qa",
        children: "Java Core Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/55-observability",
          children: "Observability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/57-interview-spring",
          children: "Spring Framework Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers 40+ essential Java Core interview questions ranging from OOP fundamentals to advanced concurrency, JVM internals, and Java 8+ features. Each answer includes complete, compilable code examples. These questions target senior and staff-level Java backend roles."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/56-interview-java.png",
        alt: "Java Core Interview Topics - Mindmap"
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
        href: "../../assets/images/lessons/java/56-interview-java/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/56-interview-java/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/56-interview-java/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/56-interview-java/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/56-interview-java/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/56-interview-java/visual-explanation.png",
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
      id: "q1-how-does-java-implement-polymorphism",
      children: "Q1: How does Java implement polymorphism?"
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
      }), " Polymorphism means \"many forms.\" Java supports compile-time (method overloading) and runtime (method overriding via dynamic method dispatch)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PolymorphismExample {\n    static class Calculator {\n        public int add(int a, int b) { return a + b; }\n        public int add(int a, int b, int c) { return a + b + c; }\n        public double add(double a, double b) { return a + b; }\n    }\n    static abstract class Animal {\n        public abstract String speak();\n    }\n    static class Dog extends Animal {\n        @Override public String speak() { return \"Woof!\"; }\n    }\n    static class Cat extends Animal {\n        @Override public String speak() { return \"Meow!\"; }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(calc.add(2, 3));\n        System.out.println(calc.add(2, 3, 4));\n        System.out.println(calc.add(2.5, 3.7));\n        Animal myDog = new Dog();\n        Animal myCat = new Cat();\n        System.out.println(myDog.speak());\n        System.out.println(myCat.speak());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM uses a vtable per class. At runtime, it looks up the method in the actual object's class. Static/private/final methods and fields are not polymorphic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-inheritance-vs-composition--when-to-use-which",
      children: "Q2: Inheritance vs Composition → when to use which?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Inheritance models is-a (Dog extends Animal). Composition models has-a (Car has Engine). Favor composition over inheritance because inheritance breaks encapsulation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass InstrumentedHashSetInheritance<E> extends HashSet<E> {\n    private int addCount = 0;\n    @Override public boolean add(E e) { addCount++; return super.add(e); }\n    @Override public boolean addAll(Collection<? extends E> c) {\n        addCount += c.size(); return super.addAll(c);\n    }\n    public int getAddCount() { return addCount; }\n}\n\nclass InstrumentedHashSetComposition<E> {\n    private final Set<E> set;\n    private int addCount = 0;\n    public InstrumentedHashSetComposition(Set<E> set) { this.set = Objects.requireNonNull(set); }\n    public boolean add(E e) { addCount++; return set.add(e); }\n    public boolean addAll(Collection<? extends E> c) { addCount += c.size(); return set.addAll(c); }\n    public int getAddCount() { return addCount; }\n}\n\npublic class InheritanceVsComposition {\n    public static void main(String[] args) {\n        InstrumentedHashSetInheritance<String> bad = new InstrumentedHashSetInheritance<>();\n        bad.addAll(List.of(\"a\", \"b\", \"c\"));\n        System.out.println(\"Inheritance: \" + bad.getAddCount());\n\n        InstrumentedHashSetComposition<String> good = new InstrumentedHashSetComposition<>(new HashSet<>());\n        good.addAll(List.of(\"a\", \"b\", \"c\"));\n        System.out.println(\"Composition: \" + good.getAddCount());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use inheritance for true is-a with Liskov substitution. Use composition for has-a, runtime swap behavior, or extending classes not designed for inheritance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-solid-principles",
      children: "Q3: SOLID principles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SOLID is five design principles by Robert C. Martin."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SRP:"
      }), " One reason to change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class InvoiceCalculator { public BigDecimal calculateTotal(List<LineItem> items) { return BigDecimal.ZERO; } }\nclass InvoiceRepository { public void save(Invoice invoice) { } }\nclass NotificationService { public void sendInvoiceEmail(Invoice invoice, String email) { } }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OCP:"
      }), " Open for extension, closed for modification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "interface Shape { double area(); }\nrecord Circle(double r) implements Shape { public double area() { return Math.PI * r * r; } }\nrecord Rectangle(double w, double h) implements Shape { public double area() { return w * h; } }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LSP:"
      }), " Subtypes substitutable for base types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Bad: Square extends Rectangle, breaks width/height independence\ninterface Shape2 { int area(); }\nclass GoodRect implements Shape2 { private final int w,h; GoodRect(int w,int h){this.w=w;this.h=h;} public int area(){return w*h;} }\nclass GoodSquare implements Shape2 { private final int s; GoodSquare(int s){this.s=s;} public int area(){return s*s;} }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ISP:"
      }), " Don't depend on interfaces you don't use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "interface Workable { void work(); }\ninterface Eatable { void eat(); }\nclass Robot implements Workable { public void work() { } }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DIP:"
      }), " Depend on abstractions, not concretions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "interface UserRepository { void save(User u); }\nclass MySqlRepo implements UserRepository { public void save(User u) { } }\nclass UserService { private final UserRepository r; UserService(UserRepository r){this.r=r;} }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-hashmap-internals",
      children: "Q4: HashMap internals."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HashMap stores entries in a Node array. Uses hashCode() for bucket, equals() for entry within bucket. Default capacity 16, load factor 0.75, threshold 12."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class HashMapInternals {\n    static class Node<K,V> {\n        final int hash; final K key; V value; Node<K,V> next;\n        Node(int h, K k, V v, Node<K,V> n) { hash=h; key=k; value=v; next=n; }\n    }\n    public static void main(String[] args) {\n        Map<String,Integer> map = new HashMap<>(4, 0.75f);\n        map.put(\"Aa\",1); map.put(\"BB\",2);\n        map.put(null,100);\n        System.out.println(\"Null: \"+map.get(null));\n        // hash = key.hashCode() ^ (h >>> 16)\n        // index = (n - 1) & hash  (power-of-2 optimization)\n        // If collision: linked list or tree (>=8 entries, TREEIFY_THRESHOLD)\n        // resize at size > threshold, capacity * 2\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "put(): hash spread -> index -> if empty, place; else traverse list/tree -> replace or append. After insert, check resize. Java 8+ uses trees for >=8 entries in a bucket (O(log n)). Load factor 0.75 balances space and time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-concurrenthashmap-thread-safety",
      children: "Q5: ConcurrentHashMap thread-safety."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Java 8+ CHM uses CAS on individual nodes, synchronized only for tree ops, volatile reads. Java 7 used 16 segments with separate locks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.ConcurrentHashMap;\n\npublic class CHMDeepDive {\n    public static void main(String[] args) {\n        ConcurrentHashMap<String,Integer> map = new ConcurrentHashMap<>();\n        map.putIfAbsent(\"counter\",0);\n        map.compute(\"counter\",(k,v)->v+1);\n        String r = map.computeIfAbsent(\"key\", k -> { System.out.println(\"Computing\"); return \"value\"; });\n        System.out.println(\"Cached: \"+r);\n\n        map.put(\"a\",1); map.put(\"b\",2);\n        int sum = map.reduceValues(1L, Integer::intValue, Integer::sum);\n        System.out.println(\"Sum: \"+sum);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key ops: putIfAbsent, compute, computeIfAbsent, merge. Reads lock-free. Iterators weakly consistent. Null keys/values not allowed. Size uses LongAdder-style counters."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-treemap-vs-hashmap-vs-linkedhashmap",
      children: "Q6: TreeMap vs HashMap vs LinkedHashMap."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " All implement Map but differ in ordering, performance, and memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class MapComparison {\n    public static void main(String[] args) {\n        Map<String,Integer> hm = new HashMap<>();\n        hm.put(\"z\",1); hm.put(\"a\",2); hm.put(\"m\",3);\n        System.out.println(\"HashMap: \"+hm);\n\n        Map<String,Integer> lm = new LinkedHashMap<>(16,0.75f,true);\n        lm.put(\"z\",1); lm.put(\"a\",2); lm.put(\"m\",3);\n        lm.get(\"z\");\n        System.out.println(\"LinkedHashMap (access): \"+lm);\n\n        TreeMap<String,Integer> tm = new TreeMap<>();\n        tm.put(\"z\",1); tm.put(\"a\",2); tm.put(\"m\",3);\n        System.out.println(\"TreeMap: \"+tm);\n        System.out.println(\"SubMap: \"+tm.subMap(\"a\",\"n\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HashMap O(1), no order, allows null. LinkedHashMap O(1), insertion/access order, LRU cache via removeEldestEntry. TreeMap O(log n), sorted, range queries, no null. EnumMap is most performant (array by ordinal)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-fail-fast-vs-fail-safe-iterators",
      children: "Q7: Fail-fast vs fail-safe iterators."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fail-fast: throw ConcurrentModificationException on structural mod after iterator creation. Fail-safe: tolerant of concurrent mods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\npublic class FailFastFailSafe {\n    public static void main(String[] args) {\n        List<String> l = new ArrayList<>(List.of(\"a\",\"b\",\"c\"));\n        Iterator<String> it = l.iterator();\n        l.remove(\"a\");\n        try { it.next(); } catch (ConcurrentModificationException e) { System.out.println(\"Fail-fast\"); }\n\n        List<String> cow = new CopyOnWriteArrayList<>(List.of(\"a\",\"b\",\"c\"));\n        Iterator<String> cit = cow.iterator();\n        cow.add(\"d\");\n        System.out.println(\"COW iterator: \"+cit.next()+\" list: \"+cow);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayList checks modCount on next()/remove(). CopyOnWriteArrayList snapshots array at creation. ConcurrentHashMap weakly consistent."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-comparable-vs-comparator",
      children: "Q8: Comparable vs Comparator."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Comparable defines natural order (a.compareTo(b)). Comparator defines external order. A class has one Comparable but many Comparators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nrecord Person(String name, int age) implements Comparable<Person> {\n    public int compareTo(Person o) {\n        int c = name.compareTo(o.name);\n        return c != 0 ? c : Integer.compare(age, o.age);\n    }\n}\n\npublic class CompDemo {\n    public static void main(String[] args) {\n        var people = List.of(new Person(\"Alice\",30), new Person(\"Bob\",25), new Person(\"Alice\",20));\n        var list = new ArrayList<>(people);\n        Collections.sort(list);\n        System.out.println(\"Natural: \"+list);\n\n        list.sort(Comparator.comparing(Person::name).thenComparingInt(Person::age).reversed());\n        System.out.println(\"Custom: \"+list);\n\n        List<String> n = new ArrayList<>(Arrays.asList(\"b\",null,\"a\"));\n        n.sort(Comparator.nullsLast(String::compareTo));\n        System.out.println(\"Nulls last: \"+n);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If compareTo() inconsistent with equals(), TreeSet/TreeMap use compareTo() for uniqueness. Objects equal by equals() but compareTo() != 0 both stored."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-thread-lifecycle-states",
      children: "Q9: Thread lifecycle states."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ThreadLifecycle {\n    public static void main(String[] args) throws Exception {\n        Object lock = new Object();\n        Thread t = new Thread(() -> {\n            synchronized(lock) { try { lock.wait(); } catch(InterruptedException e) {} }\n        });\n        System.out.println(\"NEW: \"+t.getState());\n        t.start();\n        System.out.println(\"RUNNABLE: \"+t.getState());\n        synchronized(lock) {\n            System.out.println(\"WAITING: \"+t.getState());\n            lock.notify();\n        }\n        t.join();\n        System.out.println(\"TERMINATED: \"+t.getState());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BLOCKED = waiting for monitor. WAITING = wait/park/join without timeout. TIMED_WAITING = sleep/wait(timeout). InterruptedException: always restore interrupt flag."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-synchronized-keyword",
      children: "Q10: synchronized keyword."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " synchronized provides mutual exclusion and happens-before visibility. Instance methods lock on this. Static methods lock on Class object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SyncDemo {\n    static class Counter {\n        private int count = 0;\n        public synchronized void inc() { count++; }\n        public synchronized int get() { return count; }\n    }\n    static class Reentrant { public synchronized void a() { b(); } public synchronized void b() {} }\n\n    public static void main(String[] args) throws Exception {\n        Counter c = new Counter();\n        Thread[] ts = new Thread[10];\n        for(int t=0;t<10;t++) { ts[t]=new Thread(()->{for(int i=0;i<10000;i++)c.inc();}); ts[t].start(); }\n        for(Thread t:ts) t.join();\n        System.out.println(\"Expected 100000 Got: \"+c.get());\n        new Reentrant().a();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object header lock states: biased -> lightweight -> heavyweight (one-way escalation). synchronized is reentrant (same thread can re-acquire). Lock on mutable fields/String literals is dangerous."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-volatile-keyword",
      children: "Q11: volatile keyword."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " volatile guarantees visibility across threads. Write happens-before subsequent read. Does NOT provide atomicity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.atomic.AtomicInteger;\n\npublic class VolatileDemo {\n    private static volatile boolean running = true;\n    public static void main(String[] args) throws Exception {\n        Thread w = new Thread(()->{ while(running) {} System.out.println(\"Stopped\"); });\n        w.start();\n        Thread.sleep(1000);\n        running = false;\n        w.join();\n    }\n}\n\nclass VolatileNotAtomic {\n    private volatile int count = 0;\n    public void inc() { count++; } // broken: read-inc-write\n    private final AtomicInteger safe = new AtomicInteger(0);\n    public void safeInc() { safe.incrementAndGet(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prevents reordering (memory barriers). Acquire semantics on read. Release semantics on write. Double-checked locking requires volatile."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-lock-vs-synchronized",
      children: "Q12: Lock vs synchronized."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Lock provides try-lock with timeout, interruptible locking, fairness, multiple Conditions. synchronized is simpler and JVM-optimized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.locks.*;\nimport java.util.concurrent.TimeUnit;\n\npublic class LockVsSync {\n    static class BoundedBuffer<T> {\n        final ReentrantLock lock = new ReentrantLock();\n        final Condition notFull = lock.newCondition();\n        final Condition notEmpty = lock.newCondition();\n        final T[] items;\n        int putIdx, takeIdx, count;\n\n        @SuppressWarnings(\"unchecked\")\n        BoundedBuffer(int cap) { items = (T[])new Object[cap]; }\n\n        public void put(T item) throws InterruptedException {\n            lock.lock();\n            try {\n                while(count == items.length) notFull.await();\n                items[putIdx]=item; if(++putIdx==items.length) putIdx=0;\n                count++; notEmpty.signal();\n            } finally { lock.unlock(); }\n        }\n\n        public T take() throws InterruptedException {\n            lock.lock();\n            try {\n                while(count == 0) notEmpty.await();\n                T item = items[takeIdx]; items[takeIdx]=null;\n                if(++takeIdx==items.length) takeIdx=0;\n                count--; notFull.signal();\n                return item;\n            } finally { lock.unlock(); }\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        BoundedBuffer<String> buf = new BoundedBuffer<>(3);\n        Thread p = new Thread(()->{ try { for(char c='A';c<='F';c++) buf.put(String.valueOf(c)); } catch(Exception e){} });\n        Thread c = new Thread(()->{ try { Thread.sleep(500); for(int i=0;i<6;i++) buf.take(); } catch(Exception e){} });\n        p.start(); c.start(); p.join(); c.join();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use synchronized for simple mutex with short critical sections. Use ReentrantLock for timeout, interruptible locking, fairness, multiple Conditions. ReentrantLock builds on AQS (AbstractQueuedSynchronizer)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-reentrantlock-features",
      children: "Q13: ReentrantLock features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Reentrancy, fairness, Conditions, tryLock with timeout, lock introspection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.TimeUnit;\nimport java.util.concurrent.locks.ReentrantLock;\n\npublic class ReentrantLockFeatures {\n    private final ReentrantLock lock = new ReentrantLock(true);\n\n    public void work() {\n        lock.lock();\n        try {\n            System.out.println(Thread.currentThread().getName()+\" locked. Hold: \"+lock.getHoldCount());\n            Thread.sleep(50);\n        } catch(InterruptedException e) { Thread.currentThread().interrupt(); }\n        finally { lock.unlock(); }\n    }\n\n    public boolean tryAcquire(long timeout, TimeUnit unit) throws InterruptedException {\n        return lock.tryLock(timeout, unit);\n    }\n\n    public static void main(String[] args) {\n        var demo = new ReentrantLockFeatures();\n        for(int i=0;i<5;i++) new Thread(demo::work).start();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getHoldCount(), isHeldByCurrentThread(), isLocked(), getQueueLength(). Condition.await() releases lock atomically, re-acquires on signal. Fair lock: FIFO. Unfair: barging (better throughput)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-countdownlatch-vs-cyclicbarrier-vs-semaphore",
      children: "Q14: CountDownLatch vs CyclicBarrier vs Semaphore."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " All AQS-based with different use cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class SyncCompare {\n    public static void main(String[] args) throws Exception {\n        // CountDownLatch: one-shot, await count=0\n        CountDownLatch latch = new CountDownLatch(3);\n        for(int i=0;i<3;i++) { int id=i; new Thread(()->{ try{Thread.sleep(200);}catch(Exception e){} latch.countDown(); }).start(); }\n        latch.await();\n        System.out.println(\"Latch done\");\n\n        // CyclicBarrier: reusable barrier\n        CyclicBarrier bar = new CyclicBarrier(3, ()->System.out.println(\"Barrier tripped\"));\n        for(int i=0;i<3;i++) { int id=i; new Thread(()->{\n            try{ System.out.println(\"Phase1:\"+id); bar.await(); System.out.println(\"Phase2:\"+id); bar.await(); }\n            catch(Exception e){}\n        }).start(); }\n        Thread.sleep(500);\n\n        // Semaphore: permits\n        Semaphore sem = new Semaphore(2);\n        for(int i=0;i<6;i++) { int id=i; new Thread(()->{\n            try{ sem.acquire(); System.out.println(\"Permit:\"+id); Thread.sleep(200); sem.release(); }\n            catch(Exception e){}\n        }).start(); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Latch: one-shot, cannot reset. Barrier: reusable, BrokenBarrierException on failure. Semaphore: acquire/release, supports multiple permits, binary (count=1) acts as mutex without ownership."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-executorservice-thread-pools",
      children: "Q15: ExecutorService thread pools."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ExecutorService decouples task submission from execution. Five pool types via Executors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.*;\n\npublic class ExecutorServiceDemo {\n    public static void main(String[] args) {\n        ExecutorService fixed = Executors.newFixedThreadPool(4);\n        ExecutorService cached = Executors.newCachedThreadPool();\n        ExecutorService single = Executors.newSingleThreadExecutor();\n        ScheduledExecutorService sched = Executors.newScheduledThreadPool(4);\n        ExecutorService stealing = Executors.newWorkStealingPool(4);\n\n        ThreadPoolExecutor custom = new ThreadPoolExecutor(\n            4, 8, 60L, TimeUnit.SECONDS,\n            new ArrayBlockingQueue<>(100),\n            new ThreadPoolExecutor.CallerRunsPolicy());\n\n        List<Future<Integer>> futures = new ArrayList<>();\n        for(int i=0;i<10;i++) { int id=i; futures.add(fixed.submit(()->{ Thread.sleep(200); return id*2; })); }\n        int total = futures.stream().mapToInt(f->{ try{return f.get();}catch(Exception e){throw new RuntimeException(e);} }).sum();\n        System.out.println(\"Total: \"+total);\n\n        fixed.shutdown();\n        try { if(!fixed.awaitTermination(5,TimeUnit.SECONDS)) fixed.shutdownNow(); }\n        catch(InterruptedException e) { fixed.shutdownNow(); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU-bound: cores+1. I/O-bound: cores*(1+wait/compute). Rejection: AbortPolicy, CallerRunsPolicy, DiscardPolicy, DiscardOldestPolicy. Thread starvation deadlock: task submits to same pool and blocks on get()."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-forkjoinpool-and-work-stealing",
      children: "Q16: ForkJoinPool and work-stealing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ForkJoinPool implements work-stealing for divide-and-conquer parallelism. Each worker has a deque. Owner pushes/pops one end (LIFO/cache locality). Idle threads steal from the other end (FIFO/minimizes contention)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class ForkJoinDemo {\n    static class Fib extends RecursiveTask<Long> {\n        final long n;\n        Fib(long n) { this.n = n; }\n        protected Long compute() {\n            if(n <= 20) return fibDirect(n);\n            Fib f1 = new Fib(n-1); f1.fork();\n            return new Fib(n-2).compute() + f1.join();\n        }\n        long fibDirect(long x) {\n            if(x<=1) return x;\n            long a=0,b=1;\n            for(long i=2;i<=x;i++){long t=a+b;a=b;b=t;}\n            return b;\n        }\n    }\n\n    public static void main(String[] args) {\n        ForkJoinPool pool = new ForkJoinPool(4);\n        long r = pool.invoke(new Fib(40));\n        System.out.println(\"Fib(40)=\"+r+\" steals:\"+pool.getStealCount());\n        System.out.println(\"Common pool:\"+ForkJoinPool.commonPool().getParallelism());\n        pool.shutdown();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invokeAll() is optimized: forks tasks, runs current thread's task while waiting (stealing). ManagedBlocker handles blocking tasks within FJP. ForkJoinPool.commonPool() is default for parallel streams and CompletableFuture."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-completablefuture--chaining-composition-error-handling",
      children: "Q17: CompletableFuture → chaining, composition, error handling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CompletableFuture enables declarative non-blocking async composition with transformation, combination, and error recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.*;\n\npublic class CFDemo {\n    static ExecutorService pool = Executors.newFixedThreadPool(8);\n\n    public static void main(String[] args) {\n        // thenApply: transform\n        CompletableFuture.supplyAsync(() -> \"42\")\n            .thenApply(Integer::parseInt).thenApply(n->n*2)\n            .thenAccept(r->System.out.println(\"thenApply: \"+r));\n\n        // thenCompose: flatten\n        CompletableFuture.supplyAsync(() -> \"user:1\")\n            .thenCompose(id -> CompletableFuture.supplyAsync(() -> \"Profile:\"+id))\n            .thenAccept(p->System.out.println(\"compose: \"+p));\n\n        // thenCombine: parallel independent\n        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(()->{ sleep(200); return \"Hello\"; });\n        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(()->{ sleep(300); return \"World\"; });\n        f1.thenCombine(f2, (a,b)->a+\" \"+b).thenAccept(r->System.out.println(\"combine: \"+r));\n\n        // allOf\n        List<CompletableFuture<String>> futures = new ArrayList<>();\n        for(int i=0;i<5;i++) { int id=i;\n            futures.add(CompletableFuture.supplyAsync(()->{ sleep(200); return \"T\"+id; })); }\n        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))\n            .thenApply(v->futures.stream().map(CompletableFuture::join).toList())\n            .thenAccept(r->System.out.println(\"allOf: \"+r));\n\n        // exceptionally: recover\n        CompletableFuture.supplyAsync(()->{ throw new RuntimeException(\"fail\"); })\n            .exceptionally(ex->\"recovered: \"+ex.getMessage())\n            .thenAccept(r->System.out.println(\"exceptionally: \"+r));\n\n        // handle: both success and failure\n        CompletableFuture.supplyAsync(()->\"ok\")\n            .handle((r,ex)->ex!=null?\"fail\":\"success: \"+r)\n            .thenAccept(r->System.out.println(\"handle: \"+r));\n\n        pool.shutdown();\n    }\n    static void sleep(long ms) { try{Thread.sleep(ms);}catch(Exception e){} }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "thenApply vs thenApplyAsync: thenApply runs on completing thread; thenApplyAsync on pool. Custom executor avoids bottlenecking on common pool. Never block in threads also serving common pool."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-virtual-threads-project-loom",
      children: "Q18: Virtual Threads (Project Loom)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Virtual threads (Java 21+) are lightweight JVM-managed threads. No 1:1 OS mapping → millions on one platform thread. Blocking yields the carrier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.stream.*;\n\npublic class VTDeepDive {\n    public static void main(String[] args) throws Exception {\n        // Create\n        Thread vt = Thread.ofVirtual().name(\"vt-1\").start(()->System.out.println(Thread.currentThread()));\n        vt.join();\n\n        // Executor per task\n        try(var exec = Executors.newVirtualThreadPerTaskExecutor()) {\n            exec.submit(()->System.out.println(\"VT exec\"));\n        }\n\n        // Scale: 100k with sleep\n        CountDownLatch latch = new CountDownLatch(100_000);\n        long start = System.nanoTime();\n        for(int i=0;i<100_000;i++) Thread.ofVirtual().start(()->{\n            try{Thread.sleep(100);}catch(Exception e){} latch.countDown();\n        });\n        latch.await();\n        System.out.println(\"100k VT sleep(100): \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        // Structured concurrency\n        try(var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n            Future<String> u = scope.fork(()->\"Alice\");\n            Future<Integer> a = scope.fork(()->30);\n            scope.join(); scope.throwIfFailed();\n            System.out.println(u.resultNow()+\", \"+a.resultNow());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pinning: when VT can't unmount (synchronized block, native method). Use ReentrantLock instead. ScopedValue (Java 21+) is safer than ThreadLocal - immutable per scope. Not for CPU-bound tasks (no blocking = no benefit)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-jvm-memory-model",
      children: "Q19: JVM memory model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Per-thread: PC register and stack. Shared: heap and metaspace."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.management.*;\n\npublic class JVMMemoryDemo {\n    public static void main(String[] args) {\n        MemoryMXBean mem = ManagementFactory.getMemoryMXBean();\n        System.out.println(\"Heap init: \"+mem.getHeapMemoryUsage().getInit()/1024/1024+\"MB\");\n        System.out.println(\"Heap used: \"+mem.getHeapMemoryUsage().getUsed()/1024/1024+\"MB\");\n        System.out.println(\"Metaspace: \"+mem.getNonHeapMemoryUsage().getUsed()/1024/1024+\"MB\");\n\n        // Stack: per-thread, frames with locals + operand stack\n        // -Xss (default ~1MB). Deep recursion -> StackOverflowError\n        // Heap: Young Gen (Eden+S0+S1) + Old Gen\n        // Metaspace (Java 8+): native memory, class metadata. Replaces PermGen.\n        // -Xms, -Xmx, -Xmn, -XX:MetaspaceSize, -XX:MaxMetaspaceSize\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack stores primitives and object references. Heap stores objects. Metaspace stores class metadata in native memory. String pool moved from PermGen to heap in Java 7. -XX:StringTableSize (default 60013)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-gc-algorithms",
      children: "Q20: GC algorithms."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Serial (single-threaded), Parallel (throughput), G1 (low-pause, default), ZGC (sub-ms), Shenandoah (concurrent compaction)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.management.*;\nimport java.util.*;\n\npublic class GCDemo {\n    public static void main(String[] args) {\n        System.out.println(\"GC collectors:\");\n        for(var bean : ManagementFactory.getGarbageCollectorMXBeans())\n            System.out.println(\"  \"+bean.getName()+\": \"+bean.getCollectionCount()+\" collections \"+bean.getCollectionTime()+\"ms\");\n\n        List<byte[]> g = new ArrayList<>();\n        for(int i=0;i<100;i++) g.add(new byte[1024*1024]);\n        g.clear(); System.gc();\n\n        System.out.println(\"G1: region-based, ~200ms pause target\");\n        System.out.println(\"ZGC: colored pointers, <1ms pauses, multi-TB heap\");\n        System.out.println(\"Shenandoah: forwarding pointers, concurrent compaction\");\n        System.out.println(\"Parallel: throughput-oriented, STW for both young+old\");\n        System.out.println(\"Serial: single-thread, small heaps <100MB\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Throughput -> ParallelGC. Latency -> ZGC/Shenandoah. Footprint limited -> SerialGC. G1 balances both. ZGC requires 64-bit OS, higher CPU overhead for load barriers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-class-loading-mechanism",
      children: "Q21: Class loading mechanism."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Bootstrap -> Platform -> Application. Parent delegation model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ClassLoaderDemo {\n    public static void main(String[] args) throws Exception {\n        ClassLoader cl = ClassLoaderDemo.class.getClassLoader();\n        System.out.println(\"App: \"+cl);\n        System.out.println(\"Platform: \"+cl.getParent());\n        System.out.println(\"Bootstrap: \"+cl.getParent().getParent());\n        System.out.println(\"String: \"+String.class.getClassLoader());\n\n        Class<?> c = Class.forName(\"java.util.ArrayList\");\n        System.out.println(\"Loaded: \"+c.getName());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delegation: child delegates to parent first. Only if parent can't load does child try. Linking: verification -> preparation -> resolution. Initialization: static blocks. Custom CLs can break delegation (security risk)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-string-pool-and-interning",
      children: "Q22: String pool and interning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " String literals are interned in the pool (heap since Java 7). String.intern() adds heap strings to pool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class StringPoolDemo {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = \"hello\";\n        String s3 = new String(\"hello\");\n        String s4 = s3.intern();\n        System.out.println(\"s1==s2: \"+(s1==s2));\n        System.out.println(\"s1==s3: \"+(s1==s3));\n        System.out.println(\"s1==s4: \"+(s1==s4));\n\n        String concat = \"he\"+\"llo\";\n        System.out.println(\"s1==concat: \"+(s1==concat));\n\n        String a = \"he\";\n        String b = a+\"llo\";\n        System.out.println(\"s1==b: \"+(s1==b));\n        System.out.println(\"s1.equals(b): \"+s1.equals(b));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile-time constants interned. Runtime concat creates new String. Always use equals() for comparison unless you control interning."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-lambda-expressions-and-functional-interfaces",
      children: "Q23: Lambda expressions and functional interfaces."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Lambdas implement SAM (Single Abstract Method) interfaces. Compiled to invokedynamic, not anonymous inner classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class LambdaDemo {\n    @FunctionalInterface interface Processor { String process(String s); }\n\n    public static void main(String[] args) {\n        Processor upper = s -> s.toUpperCase();\n        Processor reverse = s -> new StringBuilder(s).reverse().toString();\n        System.out.println(upper.process(\"hello\"));\n\n        // Built-in functional interfaces\n        Predicate<String> isEmpty = String::isEmpty;\n        Function<String,Integer> length = String::length;\n        Supplier<Long> time = System::currentTimeMillis;\n        Consumer<String> print = System.out::println;\n        UnaryOperator<Integer> square = x->x*x;\n        BinaryOperator<Integer> sum = Integer::sum;\n\n        // Capture must be effectively final\n        String prefix = \"User: \";\n        Function<String,String> addP = name -> prefix+name;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lambdas compile to invokedynamic with LambdaMetafactory. Runtime generates implementation once. No anonymous class overhead per call site."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-streams-api",
      children: "Q24: Streams API."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Streams process sequences with functional operations. Intermediate ops are lazy. Terminal ops are eager."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamsDemo {\n    record Emp(String name, String dept, double salary) {}\n\n    public static void main(String[] args) {\n        List<Emp> emps = List.of(\n            new Emp(\"Alice\",\"Eng\",120000), new Emp(\"Bob\",\"Eng\",95000),\n            new Emp(\"Charlie\",\"Mkt\",80000), new Emp(\"Diana\",\"Mkt\",110000));\n\n        List<String> high = emps.stream()\n            .filter(e -> e.salary() > 100000)\n            .sorted(Comparator.comparingDouble(Emp::salary).reversed())\n            .map(Emp::name)\n            .collect(Collectors.toList());\n        System.out.println(\"High: \"+high);\n\n        Map<String,List<Emp>> byDept = emps.stream()\n            .collect(Collectors.groupingBy(Emp::dept));\n        System.out.println(\"By dept: \"+byDept);\n\n        DoubleSummaryStatistics stats = emps.stream()\n            .collect(Collectors.summarizingDouble(Emp::salary));\n        System.out.println(\"Stats: \"+stats);\n\n        // flatMap\n        List<List<Integer>> nested = List.of(List.of(1,2), List.of(3,4));\n        List<Integer> flat = nested.stream().flatMap(Collection::stream).collect(Collectors.toList());\n        System.out.println(\"Flat: \"+flat);\n\n        // Parallel\n        long sum = LongStream.rangeClosed(1,10_000_000).parallel().sum();\n        System.out.println(\"Parallel sum: \"+sum);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stream pipeline: source -> intermediate ops (filter, map, sorted, distinct, limit) -> terminal op (collect, forEach, reduce, count, anyMatch, findFirst). findAny vs findFirst in parallel: findAny is non-deterministic for parallelism."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-optional-best-practices",
      children: "Q25: Optional best practices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Optional is a return type container for nullable values. Never as field, parameter, or in collections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalDemo {\n    record User(String name, String email) {}\n\n    static Optional<User> findUser(String id) {\n        if(\"exists\".equals(id)) return Optional.of(new User(\"Alice\",\"a@x.com\"));\n        return Optional.empty();\n    }\n\n    public static void main(String[] args) {\n        User u1 = findUser(\"exists\").orElse(new User(\"d\",\"d@x.com\"));\n        User u2 = findUser(\"missing\").orElseGet(()->new User(\"d\",\"d@x.com\"));\n        User u3 = findUser(\"missing\").orElseThrow(()->new NoSuchElementException(\"not found\"));\n\n        // orElse vs orElseGet: orElse evaluates even if present\n        Optional<String> p = Optional.of(\"hello\");\n        String r1 = p.orElse(expensive());  // runs!\n        String r2 = p.orElseGet(()->expensive()); // lazy\n\n        Optional<String> email = findUser(\"exists\").map(User::email);\n        System.out.println(\"Email: \"+email);\n\n        Optional<User> filtered = findUser(\"exists\").filter(u->u.name().startsWith(\"A\"));\n        System.out.println(\"Filtered: \"+filtered);\n    }\n    static String expensive() { System.out.println(\"expensive\"); return \"d\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never use Optional.get() without isPresent(). Not serializable. orElse vs orElseGet: orElse always evaluates. Use orElseGet for expensive defaults."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-method-references",
      children: "Q26: Method references."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Four types: static method, instance of particular object, instance of arbitrary object of a type, constructor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class MethodRefDemo {\n    record Person(String name) {}\n\n    public static void main(String[] args) {\n        // Static method: Class::staticMethod\n        Comparator<Person> byName = Comparator.comparing(Person::name);\n\n        // Instance of particular object: instance::method\n        String prefix = \"P: \";\n        Function<Person,String> label = prefix::concat;\n\n        // Instance of arbitrary object: Class::instanceMethod\n        List.of(\"b\",\"a\").stream().sorted(String::compareTo).forEach(System.out::println);\n\n        // Constructor: Class::new\n        Supplier<Person> factory = () -> new Person(\"default\");\n        Function<String,Person> named = Person::new;\n        Function<Integer,Person[]> array = Person[]::new;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Method references require compatible functional interface. Constructor refs work with any matching functional interface. Array constructor ref: Type[]::new."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-generics--type-erasure",
      children: "Q27: Generics → type erasure."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Java generics use erasure → type info only at compile time. Erased to bounds (or Object) in bytecode. Compiler inserts casts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.lang.reflect.*;\n\npublic class ErasureDemo {\n    public static void main(String[] args) {\n        List<String> s = new ArrayList<>();\n        List<Integer> i = new ArrayList<>();\n        System.out.println(\"Same class: \"+s.getClass().equals(i.getClass()));\n\n        // Cannot: instanceof with parameterized type\n        // Cannot: arrays of parameterized type\n        // Cannot: primitive type arguments\n\n        class Holder<T> { T v; Holder(T v){this.v=v;} }\n        Holder<String> h = new Holder<>(\"test\");\n        String v = h.v; // compiler inserts (String)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No generic type at runtime. Bridge methods generated for parameterized subtypes. Cannot use instanceof, arrays, or primitives with generics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-wildcards-and-pecs",
      children: "Q28: Wildcards and PECS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PECS: Producer Extends, Consumer Super. ? extends T for reading (covariant). ? super T for writing (contravariant)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class WildcardDemo {\n    static double sum(Collection<? extends Number> nums) {\n        double s=0; for(Number n:nums) s+=n.doubleValue(); return s;\n    }\n\n    static void fill(Collection<? super Integer> sink) {\n        sink.add(1); sink.add(2); sink.add(3);\n    }\n\n    static <T> void copy(List<? extends T> src, List<? super T> dest) {\n        for(T item:src) dest.add(item);\n    }\n\n    public static void main(String[] args) {\n        double s = sum(List.of(1,2,3));\n        System.out.println(\"Sum: \"+s);\n\n        List<Number> nums = new ArrayList<>();\n        fill(nums);\n\n        List<Integer> src = List.of(1,2,3);\n        List<Object> dest = new ArrayList<>();\n        copy(src, dest);\n        System.out.println(\"Copied: \"+dest);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read-only: ? extends T. Write-only: ? super T. Both read+write: T. Unbounded ?: any type. Wildcard capture: method can capture ? as T."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-checked-vs-unchecked-exceptions",
      children: "Q29: Checked vs unchecked exceptions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Checked (extends Exception) must be handled/declared. Unchecked (RuntimeException) do not. Checked for recoverable, unchecked for bugs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.io.*;\n\npublic class CheckedVsUnchecked {\n    // Checked: must handle or declare\n    static void readFile(String path) throws IOException {\n        try(BufferedReader br = new BufferedReader(new FileReader(path))) {\n            System.out.println(br.readLine());\n        }\n    }\n\n    // Unchecked: no declaration needed\n    static void validate(int age) {\n        if(age < 0) throw new IllegalArgumentException(\"Negative: \"+age);\n    }\n\n    static class InsufficientFundsException extends Exception {\n        InsufficientFundsException(double bal, double amt) {\n            super(\"Need \"+amt+\", have \"+bal);\n        }\n    }\n\n    public static void main(String[] args) {\n        try { readFile(\"test.txt\"); }\n        catch(IOException e) { System.out.println(\"Handled: \"+e.getMessage()); }\n\n        try { validate(-5); }\n        catch(IllegalArgumentException e) { System.out.println(\"Caught: \"+e.getMessage()); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checked for recoverable (caller retries). Unchecked for programming errors. Never swallow exceptions in empty catch. Always log or rethrow with context."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-try-with-resources",
      children: "Q30: Try-with-resources."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Auto-closes AutoCloseable resources in reverse order. Suppressed exceptions attached if both try and close throw."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.io.*;\n\npublic class TwrDemo {\n    static class Res implements AutoCloseable {\n        final String name;\n        Res(String n) { name=n; }\n        public void close() { System.out.println(\"Close: \"+name); }\n    }\n\n    static class FailRes implements AutoCloseable {\n        final boolean fail;\n        FailRes(boolean f) { fail=f; }\n        public void close() throws IOException {\n            if(fail) throw new IOException(\"close failed\");\n        }\n    }\n\n    public static void main(String[] args) {\n        try(Res a=new Res(\"A\"); Res b=new Res(\"B\")) {\n            System.out.println(\"Work\");\n        } // closes B, A\n\n        try {\n            try(FailRes r = new FailRes(true)) {\n                throw new RuntimeException(\"primary\");\n            }\n        } catch(RuntimeException e) {\n            System.out.println(\"Primary: \"+e.getMessage());\n            for(Throwable t : e.getSuppressed())\n                System.out.println(\"Suppressed: \"+t.getMessage());\n        }\n\n        // Java 9+: effectively final variable\n        Res r = new Res(\"ef\");\n        try(r) { System.out.println(\"EF\"); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before Java 7: finally blocks with null checks. try-with-resources eliminates boilerplate. Suppressed exceptions: call getSuppressed()."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-exception-handling-best-practices",
      children: "Q31: Exception handling best practices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Design for recoverability, clarity, and diagnostic value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.logging.*;\n\npublic class ExceptionBestPractices {\n    private static final Logger log = Logger.getLogger(ExceptionBestPractices.class.getName());\n\n    // BAD: empty catch\n    void bad() { try { risky(); } catch(Exception e) {} }\n\n    // GOOD: log and rethrow\n    void good() {\n        try { risky(); }\n        catch(IOException e) {\n            log.log(Level.SEVERE, \"failed\", e);\n            throw new BusinessException(\"Can't complete\", e);\n        }\n    }\n\n    // GOOD: top-level handler\n    void handle() {\n        try { bizLogic(); }\n        catch(BusinessException e) { log.warning(e.getMessage()); notifyUser(e); }\n        catch(SystemException e) { log.severe(\"system failure\"); notifyAdmin(e); }\n    }\n\n    // Exception translation\n    User find(String id) {\n        try { return repo.findById(id); }\n        catch(EntityNotFoundException e) { throw new UserNotFound(id, e); }\n    }\n\n    void risky() throws IOException {}\n    void bizLogic() {}\n    void notifyUser(Exception e) {}\n    void notifyAdmin(Exception e) {}\n\n    static class BusinessException extends RuntimeException {\n        BusinessException(String m, Throwable c) { super(m,c); }\n    }\n    static class SystemException extends RuntimeException {\n        SystemException(String m, Throwable c) { super(m,c); }\n    }\n    static class UserNotFound extends RuntimeException {\n        UserNotFound(String id, Throwable c) { super(\"User: \"+id, c); }\n    }\n    static class UserRepository { User findById(String id) { throw new EntityNotFoundException(); } }\n    static class EntityNotFoundException extends RuntimeException {}\n    static class User {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Catch specific exceptions. Never swallow. Log full exception with stack trace. Exception translation wraps low-level in high-level. Prefer unchecked for most apps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-performance-profiling",
      children: "Q32: Performance profiling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Profile CPU, memory, I/O, lock contention. Tools: jstack, jmap, jstat, async-profiler, JFR, VisualVM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ProfilingDemo {\n    static class Leak {\n        static final Map<String,byte[]> cache = new HashMap<>(); // never evicted\n        static void add(String k, byte[] d) { cache.put(k,d); }\n    }\n\n    public static void main(String[] args) {\n        // Warmup JIT\n        for(int i=0;i<10000;i++) Math.sqrt(i);\n\n        long start = System.nanoTime();\n        int sum = IntStream.range(0,1_000_000).parallel().map(i->i*2).sum();\n        long t = (System.nanoTime()-start)/1_000_000;\n        System.out.println(\"Time: \"+t+\"ms\");\n\n        System.out.println(\"Profile: CPU, heap alloc rate, GC, lock contention, I/O\");\n        System.out.println(\"Tools: async-profiler, JFR, VisualVM, JMC\");\n        System.out.println(\"jstack for deadlocks, jmap for heap dumps\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflow: baseline -> identify bottleneck -> hypothesis -> measure -> validate. Focus on P99 latency, not average. async-profiler for CPU/alloc (production-safe). JFR for comprehensive. -XX:+HeapDumpOnOutOfMemoryError in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-jit-compilation",
      children: "Q33: JIT compilation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " JIT compiles hot methods to native code. Tiered compilation: 0 (interpreted) -> 1-3 (C1 profiling) -> 4 (C2 fully optimized)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class JITDemo {\n    static double compute(int iters) {\n        double r = 0;\n        for(int i=0;i<iters;i++) r += Math.sin(i)*Math.cos(i);\n        return r;\n    }\n\n    public static void main(String[] args) {\n        // Warmup for JIT\n        for(int i=0;i<15000;i++) compute(100);\n\n        long start = System.nanoTime();\n        double r = compute(10000);\n        long t = System.nanoTime()-start;\n        System.out.println(\"Result: \"+r+\" time: \"+t+\"ns\");\n\n        System.out.println(\"JIT opts: inlining, loop unrolling, lock coarsening\");\n        System.out.println(\"escape analysis, dead code elimination, vectorization\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-XX:+PrintCompilation shows compilation. -XX:CompileThreshold (default 10000). C2 is most aggressive. Tiered compilation default since Java 8."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-escape-analysis-and-stack-allocation",
      children: "Q34: Escape analysis and stack allocation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " If object reference doesn't escape method/thread, JIT can stack-allocate or scalar-replace, eliminating GC pressure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EscapeAnalysisDemo {\n    static class Point { double x,y; Point(double x,double y){this.x=x;this.y=y;} double dist(){return Math.sqrt(x*x+y*y);} }\n\n    // No escape: can be stack-allocated or scalar replaced\n    static double compute(double x, double y) {\n        Point p = new Point(x, y); // doesn't escape\n        return p.dist();\n    }\n\n    // Escapes via return\n    static Point create(double x, double y) { return new Point(x, y); }\n\n    // Escapes via global\n    static final Point[] pts = new Point[10];\n    static void store(int i, double x, double y) { pts[i] = new Point(x, y); }\n\n    public static void main(String[] args) {\n        for(int i=0;i<10000;i++) compute(i,i+1);\n\n        long start = System.nanoTime();\n        double sum = 0;\n        for(int i=0;i<10_000_000;i++) sum += compute(i, i+1);\n        long t = (System.nanoTime()-start)/1_000_000;\n        System.out.println(\"EA time: \"+t+\"ms\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enabled by default in C2. -XX:+DoEscapeAnalysis. Stack allocation eliminates GC. Scalar replacement: fields replaced with locals/registers. Lock coarsening: non-escaping sync ops eliminated."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-record-classes-java-14",
      children: "Q35: Record classes (Java 14+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Records are transparent immutable data carriers. Auto-generate constructor, accessors, equals, hashCode, toString."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class RecordDemo {\n    record Point(int x, int y) {}\n\n    record Person(String name, int age) {\n        Person { // compact constructor\n            Objects.requireNonNull(name);\n            if(age < 0) throw new IllegalArgumentException(\"age: \"+age);\n        }\n        boolean isAdult() { return age >= 18; }\n    }\n\n    record Pair<A,B>(A first, B second) {}\n\n    record Color(int r, int g, int b) {\n        static final Color BLACK = new Color(0,0,0);\n        String toHex() { return String.format(\"#%02x%02x%02x\", r,g,b); }\n    }\n\n    static List<String> process(List<Person> people) {\n        record AgeGroup(String label, int min, int max) {\n            boolean matches(Person p) { return p.age()>=min && p.age()<=max; }\n        }\n        var young = new AgeGroup(\"Young\",0,17);\n        var adult = new AgeGroup(\"Adult\",18,64);\n        List<String> res = new ArrayList<>();\n        for(Person p : people) {\n            if(young.matches(p)) res.add(p.name()+\" is \"+young.label());\n            else if(adult.matches(p)) res.add(p.name()+\" is \"+adult.label());\n        }\n        return res;\n    }\n\n    public static void main(String[] args) {\n        Point p1 = new Point(3,4);\n        Point p2 = new Point(3,4);\n        System.out.println(\"p1: \"+p1+\" equals: \"+p1.equals(p2));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Records are final. Cannot extend other classes. Can implement interfaces. Accessor: name() not getName(). Local records reduce boilerplate for intermediate data. Compact constructor for validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-sealed-classes-java-17",
      children: "Q36: Sealed classes (Java 17+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sealed classes restrict which classes can extend/implement them. Permitted subclasses declared at definition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class SealedDemo {\n    sealed interface Shape permits Circle, Rectangle, Triangle {}\n    record Circle(double r) implements Shape {}\n    record Rectangle(double w, double h) implements Shape {}\n    record Triangle(double a, double b, double c) implements Shape {}\n\n    static double area(Shape s) {\n        return switch(s) {\n            case Circle c -> Math.PI*c.r()*c.r();\n            case Rectangle r -> r.w()*r.h();\n            case Triangle t -> { double s2=(t.a()+t.b()+t.c())/2; yield Math.sqrt(s2*(s2-t.a())*(s2-t.b())*(s2-t.c())); }\n        };\n    }\n\n    public static void main(String[] args) {\n        Shape c = new Circle(5);\n        Shape r = new Rectangle(3,4);\n        System.out.println(\"Circle: \"+area(c));\n        System.out.println(\"Rect: \"+area(r));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Permitted subclasses: final, sealed, or non-sealed. Enables exhaustive pattern matching without default. Compiler confirms all permits are covered."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-pattern-matching-java-16",
      children: "Q37: Pattern matching (Java 16+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Eliminates type check + cast boilerplate. Pattern variable scoped to applicable block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class PatternMatching {\n    static int length(Object o) {\n        if(o instanceof String s) return s.length();\n        if(o instanceof List<?> l) return l.size();\n        return 0;\n    }\n\n    static String describe(Object o) {\n        return switch(o) {\n            case String s when s.length()>10 -> \"Long: \"+s;\n            case String s -> \"Short: \"+s;\n            case Integer i when i<0 -> \"Neg: \"+i;\n            case Integer i -> \"Pos: \"+i;\n            case null -> \"null\";\n            default -> o.getClass().getSimpleName();\n        };\n    }\n\n    record Point(int x, int y) {}\n    record Line(Point s, Point e) {}\n\n    static int lineLen(Object o) {\n        return switch(o) {\n            case Line(Point(var x1,var y1), Point(var x2,var y2)) ->\n                (int)Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));\n            default -> 0;\n        };\n    }\n\n    public static void main(String[] args) {\n        System.out.println(describe(\"hello world\"));\n        System.out.println(describe(42));\n        System.out.println(describe(null));\n        System.out.println(lineLen(new Line(new Point(0,0),new Point(3,4))));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pattern variables in scope when pattern matches AND condition passes. Switch evaluated top-to-bottom. null requires explicit handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-switch-expressions-java-14",
      children: "Q38: Switch expressions (Java 14+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Switch expressions return a value, are exhaustive, eliminate fall-through. Arrow syntax or yield for blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SwitchExprDemo {\n    enum Day { MON,TUE,WED,THU,FRI,SAT,SUN }\n\n    static String type(Day d) {\n        return switch(d) {\n            case MON,TUE,WED,THU,FRI -> \"Weekday\";\n            case SAT,SUN -> \"Weekend\";\n        };\n    }\n\n    static int daysUntilFri(Day d) {\n        return switch(d) {\n            case SAT -> 6; case SUN -> 5; case MON -> 4;\n            case TUE -> 3; case WED -> 2; case THU -> 1;\n            case FRI -> { System.out.println(\"Friday!\"); yield 0; }\n        };\n    }\n\n    static String classify(Number n) {\n        return switch(n) {\n            case Integer i when i>0 -> \"Pos int: \"+i;\n            case Integer i -> \"Non-pos int: \"+i;\n            case Double d when d==0 -> \"Zero\";\n            case Double d -> \"Double: \"+d;\n            case null -> \"null\";\n            default -> \"Other: \"+n.getClass().getSimpleName();\n        };\n    }\n\n    public static void main(String[] args) {\n        System.out.println(type(Day.MON));\n        System.out.println(daysUntilFri(Day.WED));\n        System.out.println(classify(42));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arrow (->) no fall-through. yield returns from block case. Must be exhaustive: all enum values, sealed types, or default."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-text-blocks-java-15",
      children: "Q39: Text blocks (Java 15+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Multi-line string literals with automatic indentation stripping. Delimited by triple quotes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TextBlockDemo {\n    public static void main(String[] args) {\n        String json = \"\"\"\n            {\n              \"name\": \"Alice\",\n              \"age\": 30,\n              \"city\": \"NYC\"\n            }\n            \"\"\";\n        System.out.println(json);\n\n        String html = \"\"\"\n            <html>\n              <body>\n                <h1>Hello, %s</h1>\n              </body>\n            </html>\n            \"\"\".formatted(\"Alice\");\n        System.out.println(html);\n\n        String single = \"\"\"\n            This is a \\\n            single logical line.\n            \"\"\";\n        System.out.println(single);\n\n        String sql = \"\"\"\n            SELECT u.name, o.total\n            FROM users u\n            JOIN orders o ON o.user_id = u.id\n            WHERE o.status = 'ACTIVE'\n            ORDER BY o.total DESC\n            \"\"\";\n        System.out.println(sql);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common whitespace stripped based on closing delimiter position. Trailing whitespace stripped (use \\s to preserve). \\ at end suppresses newline (continuation). formatted() for interpolation. No escape needed for double quotes inside."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-memory-leak-detection",
      children: "Q40: Memory leak detection."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Memory leaks occur when objects are unintentionally reachable from GC roots. Common causes: static collections, ThreadLocal, unclosed resources, inner class refs, class loader leaks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.lang.ref.*;\n\npublic class MemoryLeakDemo {\n    // 1. Static collection - never cleared\n    static final List<byte[]> cache = new ArrayList<>();\n    static void add(byte[] d) { cache.add(d); }\n\n    // 2. ThreadLocal in thread pool\n    static final ThreadLocal<byte[]> tl = new ThreadLocal<>();\n    static void process() {\n        tl.set(new byte[1024*1024]);\n        // Always tl.remove() in finally\n    }\n\n    // 3. Inner class holds outer reference\n    static class Outer {\n        byte[] data = new byte[1024*1024];\n        class Inner { void work() {} } // holds Outer.this\n    }\n\n    public static void main(String[] args) {\n        Runtime rt = Runtime.getRuntime();\n        for(int i=0;i<50;i++) {\n            add(new byte[1024*1024]);\n            long used = (rt.totalMemory()-rt.freeMemory())/1024/1024;\n            System.out.println(\"Iter \"+i+\": \"+used+\"MB\");\n        }\n\n        System.out.println(\"Tools: jmap -dump:format=b,file=heap.hprof <pid>\");\n        System.out.println(\"MAT: dominator tree, GC root paths\");\n        System.out.println(\"-XX:+HeapDumpOnOutOfMemoryError\");\n    }\n}\n\nclass LeakPrevention {\n    static class WeakCache<K,V> {\n        final Map<K,WeakReference<V>> cache = new HashMap<>();\n        void put(K k, V v) { cache.put(k, new WeakReference<>(v)); }\n        V get(K k) { var ref = cache.get(k); return ref != null ? ref.get() : null; }\n    }\n\n    static class SafeTL {\n        static final ThreadLocal<String> ctx = new ThreadLocal<>();\n        void work() {\n            try { ctx.set(\"val\"); }\n            finally { ctx.remove(); }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detection: jmap heap dump, Eclipse MAT dominator tree, VisualVM. Enable HeapDumpOnOutOfMemoryError. Common leaks: JDBC connections not returned, IO streams not closed, unregistered listeners, custom class loaders."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-concurrent-collections-beyond-concurrenthashmap",
      children: "Q41: Concurrent collections beyond ConcurrentHashMap."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " java.util.concurrent provides CopyOnWriteArrayList, CopyOnWriteArraySet, ConcurrentLinkedQueue, ConcurrentLinkedDeque, BlockingQueue implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.*;\n\npublic class ConcurrentCollections {\n    public static void main(String[] args) {\n        // CopyOnWriteArrayList: snapshot iterator, thread-safe, writes create new array\n        CopyOnWriteArrayList<String> cow = new CopyOnWriteArrayList<>();\n        cow.add(\"a\"); cow.add(\"b\");\n        // Best for: read > write, small collections, listener lists\n\n        // ConcurrentLinkedQueue: lock-free, CAS-based, unbounded\n        ConcurrentLinkedQueue<String> clq = new ConcurrentLinkedQueue<>();\n        clq.offer(\"a\"); clq.offer(\"b\");\n        String val = clq.poll(); // non-blocking\n\n        // BlockingQueue: bounded, blocks on empty/full\n        BlockingQueue<String> bq = new ArrayBlockingQueue<>(10);\n        bq.put(\"a\");    // blocks if full\n        String v = bq.take(); // blocks if empty\n\n        // DelayQueue: elements available after delay\n        // LinkedTransferQueue: transfer() waits for consumer\n        // SynchronousQueue: each put waits for take (handoff)\n\n        // ConcurrentSkipListMap: sorted concurrent map (TreeMap equivalent)\n        ConcurrentSkipListMap<String,Integer> sorted = new ConcurrentSkipListMap<>();\n        sorted.put(\"b\",1); sorted.put(\"a\",2);\n        System.out.println(\"Sorted: \"+sorted); // {a=2, b=1}\n        System.out.println(\"Ceiling: \"+sorted.ceilingKey(\"a\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CopyOnWriteArrayList: iterator reflects snapshots at creation, write O(n) copies array. ConcurrentLinkedQueue: CAS-based, unbounded, no blocking. BlockingQueue: bounded, blocking put/take. ConcurrentSkipListMap: O(log n), sorted, concurrent, range queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-atomic-classes-and-cas",
      children: "Q42: Atomic classes and CAS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Atomic classes (AtomicInteger, AtomicReference, LongAdder, etc.) provide lock-free thread-safe operations using Compare-And-Swap CPU instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.atomic.*;\nimport java.util.concurrent.*;\nimport java.util.function.*;\n\npublic class AtomicDemo {\n    static class Counter {\n        private final AtomicInteger count = new AtomicInteger(0);\n        void inc() { count.incrementAndGet(); }\n        int get() { return count.get(); }\n    }\n\n    static class Stack<T> {\n        private final AtomicReference<Node<T>> top = new AtomicReference<>();\n        record Node<T>(T value, Node<T> next) {}\n\n        void push(T value) {\n            Node<T> newTop, oldTop;\n            do {\n                oldTop = top.get();\n                newTop = new Node<>(value, oldTop);\n            } while(!top.compareAndSet(oldTop, newTop)); // CAS retry loop\n        }\n\n        T pop() {\n            Node<T> oldTop, newTop;\n            do {\n                oldTop = top.get();\n                if(oldTop == null) return null;\n                newTop = oldTop.next();\n            } while(!top.compareAndSet(oldTop, newTop));\n            return oldTop.value();\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        // AtomicInteger: incrementAndGet, addAndGet, compareAndSet, updateAndGet\n        AtomicInteger ai = new AtomicInteger(10);\n        ai.updateAndGet(x -> x * 2);\n        System.out.println(\"Update: \"+ai.get());\n\n        // LongAdder: higher throughput under contention (striped counters)\n        LongAdder adder = new LongAdder();\n        ExecutorService pool = Executors.newFixedThreadPool(8);\n        for(int t=0;t<8;t++) pool.submit(()->{ for(int i=0;i<100000;i++) adder.increment(); });\n        pool.shutdown(); pool.awaitTermination(5,TimeUnit.SECONDS);\n        System.out.println(\"LongAdder: \"+adder.sum());\n\n        // AtomicReference: CAS on object references\n        Stack<String> stack = new Stack<>();\n        stack.push(\"a\"); stack.push(\"b\");\n        System.out.println(\"Pop: \"+stack.pop());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CAS: CPU instruction (CMPXCHG on x86). Three operands: memory location, expected value, new value. If current == expected, replace; else fail. ABA problem: AtomicStampedReference solves with version. LongAdder uses striping for high-contention counters."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-string-stringbuilder-stringbuffer",
      children: "Q43: String, StringBuilder, StringBuffer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " String is immutable. StringBuilder is mutable, not thread-safe. StringBuffer is mutable, thread-safe (synchronized). StringBuilder is 2-3x faster than StringBuffer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class StringPerf {\n    public static void main(String[] args) {\n        // String concatenation in loop → O(n^2)\n        long start = System.nanoTime();\n        String s = \"\";\n        for(int i=0;i<10000;i++) s += i;\n        System.out.println(\"String +=: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        // StringBuilder → O(n)\n        start = System.nanoTime();\n        StringBuilder sb = new StringBuilder(50000);\n        for(int i=0;i<10000;i++) sb.append(i);\n        System.out.println(\"StringBuilder: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        // StringBuffer (synchronized, slower)\n        start = System.nanoTime();\n        StringBuffer buf = new StringBuffer(50000);\n        for(int i=0;i<10000;i++) buf.append(i);\n        System.out.println(\"StringBuffer: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        // Compiler optimization: String + is StringBuilder under the hood\n        // Only for single expression: \"a\"+i+\"b\" compiles to new StringBuilder().append(\"a\").append(i).append(\"b\")\n        // In loops: compiles creates new StringBuilder per iteration → terrible\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "String immutability enables string pool, safe HashMap keys, thread-safety. StringBuilder: default capacity 16, grows when needed (newCapacity = old*2+2). Pre-size StringBuilder when possible (50000 in example avoids resizes)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-equals-and-hashcode-contract",
      children: "Q44: equals() and hashCode() contract."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " If equals() returns true for two objects, hashCode() MUST return the same value. If equals() returns false, hashCode() SHOULD (but not required) return different values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class EqualsHashCode {\n    // Correct implementation\n    static class User {\n        final String email;\n        final String name;\n        User(String email, String name) { this.email=email; this.name=name; }\n\n        @Override\n        public boolean equals(Object o) {\n            if(this == o) return true;\n            if(!(o instanceof User other)) return false;\n            return Objects.equals(email, other.email)\n                && Objects.equals(name, other.name);\n        }\n\n        @Override\n        public int hashCode() {\n            return Objects.hash(email, name);\n        }\n    }\n\n    // Broken: no hashCode → HashMap lookup fails\n    static class BadUser {\n        String id;\n        BadUser(String id) { this.id=id; }\n        @Override public boolean equals(Object o) {\n            if(!(o instanceof BadUser other)) return false;\n            return Objects.equals(id, other.id);\n        }\n        // No hashCode → uses Object.hashCode() (identity)\n    }\n\n    public static void main(String[] args) {\n        // Correct works\n        Map<User,String> good = new HashMap<>();\n        User u1 = new User(\"a@x.com\",\"Alice\");\n        User u2 = new User(\"a@x.com\",\"Alice\");\n        good.put(u1, \"found\");\n        System.out.println(\"Good: \"+good.get(u2));\n\n        // Broken: HashMap uses hashCode() for bucket, equals() for match\n        Map<BadUser,String> bad = new HashMap<>();\n        BadUser b1 = new BadUser(\"1\");\n        BadUser b2 = new BadUser(\"1\");\n        bad.put(b1, \"found\");\n        System.out.println(\"Bad: \"+bad.get(b2)); // null!\n\n        // Records have correct equals/hashCode automatically\n        record Point(int x, int y) {}\n        Map<Point,String> rec = new HashMap<>();\n        rec.put(new Point(1,2), \"found\");\n        System.out.println(\"Record: \"+rec.get(new Point(1,2)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always override both equals() AND hashCode(). Use Objects.equals() and Objects.hash(). Records generate both correctly. If hashCode() depends on mutable fields, never use as HashMap key."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-nio-and-nio2-java-7",
      children: "Q45: NIO and NIO.2 (Java 7+)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " java.nio.file provides modern file I/O with Path, Files, Paths, FileVisitor, WatchService. Non-blocking NIO channels for networking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.nio.file.*;\nimport java.nio.charset.*;\nimport java.io.*;\nimport java.util.stream.*;\n\npublic class NIO2Demo {\n    public static void main(String[] args) throws IOException {\n        // Path and Files\n        Path p = Path.of(\"test.txt\");\n        Files.writeString(p, \"Hello NIO.2\\nLine 2\", StandardOpenOption.CREATE, StandardOpenOption.WRITE);\n        String content = Files.readString(p);\n        System.out.println(\"Read: \"+content);\n\n        // Stream operations\n        try(var lines = Files.lines(p)) {\n            lines.forEach(System.out::println);\n        }\n\n        // Walk directory tree\n        try(var walk = Files.walk(Path.of(\".\"), 2)) {\n            walk.filter(Files::isRegularFile)\n                .limit(10)\n                .forEach(System.out::println);\n        }\n\n        // Watch service for file changes\n        WatchService watcher = FileSystems.getDefault().newWatchService();\n        p.getParent().register(watcher,\n            StandardWatchEventKinds.ENTRY_MODIFY,\n            StandardWatchEventKinds.ENTRY_CREATE);\n\n        // Channel-based file copy (zero-copy)\n        try(var src = new FileInputStream(\"source.txt\").getChannel();\n            var dest = new FileOutputStream(\"dest.txt\").getChannel()) {\n            dest.transferFrom(src, 0, src.size()); // OS-level zero-copy\n        }\n\n        // MappedByteBuffer: memory-mapped file\n        try(var ch = new RandomAccessFile(\"large.dat\",\"rw\").getChannel()) {\n            var buf = ch.map(FileChannel.MapMode.READ_WRITE, 0, 1024);\n            buf.putInt(0, 42);\n            System.out.println(\"Mapped int: \"+buf.getInt(0));\n        }\n\n        Files.deleteIfExists(p);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Path.of() / Paths.get(). Files.readString/writeString (Java 11+). Files.walk for directory tree traversal. WatchService monitors directory changes. FileChannel.transferTo/transferFrom for zero-copy (OS-level, no user-space buffering). MappedByteBuffer for memory-mapped files."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-reflection-api--use-cases-and-performance-implications",
      children: "Q46: Reflection API → use cases and performance implications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Reflection enables runtime inspection and invocation of classes, methods, fields, and constructors. Used by frameworks (Spring, Hibernate, Jackson), serialization, and dependency injection. Performance is slower due to JIT deoptimization, bounds checks, and boxing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.reflect.*;\nimport java.util.*;\n\npublic class ReflectionDemo {\n    static class User {\n        private String name;\n        public User() {}\n        public User(String name) { this.name = name; }\n        public String getName() { return name; }\n        public void setName(String n) { this.name = n; }\n        private String secret() { return \"classified\"; }\n    }\n\n    public static void main(String[] args) throws Exception {\n        Class<?> clazz = Class.forName(\"ReflectionDemo$User\");\n\n        // Constructor invocation\n        Constructor<?> ctor = clazz.getDeclaredConstructor();\n        Object user = ctor.newInstance();\n\n        // Field access\n        Field field = clazz.getDeclaredField(\"name\");\n        field.setAccessible(true);\n        field.set(user, \"Alice\");\n        System.out.println(\"Field: \" + field.get(user));\n\n        // Method invocation\n        Method getter = clazz.getMethod(\"getName\");\n        System.out.println(\"Getter: \" + getter.invoke(user));\n\n        // Private method\n        Method secret = clazz.getDeclaredMethod(\"secret\");\n        secret.setAccessible(true);\n        System.out.println(\"Private: \" + secret.invoke(user));\n\n        // Performance benchmark\n        User direct = new User(\"Bob\");\n        long start = System.nanoTime();\n        for(int i=0;i<1_000_000;i++) direct.getName();\n        System.out.println(\"Direct: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        Method refGet = clazz.getMethod(\"getName\");\n        start = System.nanoTime();\n        for(int i=0;i<1_000_000;i++) refGet.invoke(user);\n        System.out.println(\"Reflection: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n\n        // MethodHandle: faster alternative\n        MethodHandles.Lookup lookup = MethodHandles.lookup();\n        MethodHandle mh = lookup.findVirtual(User.class, \"getName\", MethodType.methodType(String.class));\n        start = System.nanoTime();\n        for(int i=0;i<1_000_000;i++) mh.invoke(user);\n        System.out.println(\"MethodHandle: \"+(System.nanoTime()-start)/1_000_000+\"ms\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use reflection for framework code only. Cache Method/Field/Constructor lookups (reuse, don't reacquire each call). MethodHandle is faster than core reflection. setAccessible has module restrictions (Java 16+). --add-opens for deep reflection across module boundaries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-weakreference-softreference-phantomreference",
      children: "Q47: WeakReference, SoftReference, PhantomReference."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Reference types allow interaction with GC. SoftReference: cleared only under memory pressure (cache). WeakReference: cleared at next GC (canonical mappings, WeakHashMap). PhantomReference: post-mortem cleanup before finalization, must be polled via ReferenceQueue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.ref.*;\nimport java.util.*;\n\npublic class ReferenceTypes {\n    public static void main(String[] args) {\n        Object strong = new Object();\n        System.gc(); // strong not collected\n\n        // SoftReference: cleared before OOM\n        SoftReference<byte[]> soft = new SoftReference<>(new byte[1024*1024]);\n        System.out.println(\"Soft before GC: \" + soft.get());\n        System.gc();\n        System.out.println(\"Soft after GC: \" + soft.get()); // may survive\n\n        // WeakReference: cleared eagerly on GC\n        WeakReference<Object> weak = new WeakReference<>(new Object());\n        System.out.println(\"Weak before GC: \" + weak.get());\n        System.gc();\n        System.out.println(\"Weak after GC: \" + weak.get()); // null\n\n        // WeakHashMap: keys held weakly, auto-evicted on GC\n        WeakHashMap<Object,String> map = new WeakHashMap<>();\n        Object key = new Object();\n        map.put(key, \"value\");\n        System.out.println(\"Map before: \" + map.size());\n        key = null;\n        System.gc();\n        System.out.println(\"Map after: \" + map.size()); // 0\n\n        // PhantomReference: must use ReferenceQueue\n        ReferenceQueue<Object> queue = new ReferenceQueue<>();\n        PhantomReference<Object> phantom = new PhantomReference<>(new Object(), queue);\n        System.gc();\n        Reference<?> ref = queue.poll();\n        System.out.println(\"Phantom enqueued: \" + (ref != null)); // true\n        System.out.println(\"Phantom get: \" + phantom.get()); // always null\n    }\n\n    static class FinalizeGuardian {\n        private final Object finalizerGuardian = new Object() {\n            @Override protected void finalize() {\n                System.out.println(\"Cleanup: release native resource\");\n            }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SoftReference: memory-sensitive caches (e.g., image cache evicted before OOM). WeakReference: WeakHashMap, canonical mappings (class Metadata -> ClassLoader). PhantomReference: deterministic cleanup of native resources (vs unreliable finalize()). ReferenceQueue: allows polling or blocking wait for cleared references."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-garbage-collection-deep-dive--g1-zgc-shenandoah",
      children: "Q48: Garbage collection deep dive → G1, ZGC, Shenandoah."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " G1 (default): region-based, concurrent marking, compaction. ZGC: colored pointers, load barriers, multi-TB heaps, sub-1ms pauses. Shenandoah: forwarding pointers, concurrent compaction, no stop-the-world evacuation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.management.*;\nimport java.util.*;\n\npublic class GCDeepDive {\n    static final List<byte[]> holder = new ArrayList<>();\n\n    // G1 flags:\n    // -XX:+UseG1GC (default), -XX:MaxGCPauseMillis=200\n    // -XX:G1HeapRegionSize=4m, -XX:G1NewSizePercent=5\n    // -XX:+G1HeapWastePercent=5, -XX:G1MixedGCLiveThresholdPercent=85\n    // -XX:G1ReservePercent=10\n\n    // ZGC flags:\n    // -XX:+UseZGC, -XX:ZAllocationSpikeTolerance=2.0\n    // -XX:SoftMaxHeapSize=4g, -XX:ZCollectionInterval=300\n\n    // Shenandoah flags:\n    // -XX:+UseShenandoahGC, -XX:ShenandoahGCMode=iu (aggressive)\n    // -XX:ShenandoahAllocationThreshold=50, -XX:ShenandoahUncommitDelay=300000\n\n    public static void main(String[] args) {\n        System.out.println(\"Available collectors:\");\n        for(var bean : ManagementFactory.getGarbageCollectorMXBeans())\n            System.out.println(\"  \" + bean.getName());\n\n        // Simulate allocation pressure\n        Random rnd = new Random();\n        for(int i=0;i<100;i++) {\n            holder.add(new byte[rnd.nextInt(1024*1024)]);\n            if(holder.size() > 80) holder.subList(0, 40).clear();\n        }\n\n        System.out.println(\"--- GC Comparison ---\");\n        System.out.println(\"G1: region-based young/old, concurrent marking, 200ms pause target\");\n        System.out.println(\"    RSet (Remembered Set) tracks cross-region refs\");\n        System.out.println(\"    Mixed GC cleans old gen incrementally\");\n        System.out.println(\"ZGC: colored pointers (42-bit heap, 22-bit offset)\");\n        System.out.println(\"     Concurrent every phase (mark, reference processing, relocation)\");\n        System.out.println(\"     Load barriers instead of write barriers\");\n        System.out.println(\"     Multi-TB heap, sub-1ms pause, ~15% CPU overhead\");\n        System.out.println(\"Shenandoah: Brooks forwarding pointers\");\n        System.out.println(\"     Concurrent compaction (no STW evacuation)\");\n        System.out.println(\"     Controllable GC cycle via allocation threshold\");\n        System.out.println(\"     Lower CPU overhead than ZGC, similar pause profile\");\n\n        System.out.println(\"--- Phase breakdown ---\");\n        System.out.println(\"Young GC: Eden -> Survivor, promoted to Old after tenure\");\n        System.out.println(\"Old GC: concurrent marking -> remark -> (G1: mixed) -> compact\");\n        System.out.println(\"Full GC: Serial fallback (G1), none (ZGC/Shenandoah)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G1: default since Java 9, best balance. ZGC: max throughput with latency, requires 64-bit, large heaps (4TB+). Shenandoah: concurrent compaction with lower CPU cost than ZGC. Tuning: -Xlog:gc* for diagnostics, G1HeapRegionSize=4m (default 2048 regions). ZGC unsupported on 32-bit."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-java-module-system-jpms",
      children: "Q49: Java Module System (JPMS)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " JPMS (Java 9+) provides module descriptors (module-info.java) with requires, exports, opens, provides, uses. Encapsulates packages, enforces dependency contracts, eliminates classpath hell."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// module-info.java (in module 'com.example.app')\n// module com.example.app {\n//     requires java.sql;\n//     requires transitive com.example.lib;\n//     exports com.example.api;\n//     exports com.example.dto to com.example.client;\n//     opens com.example.internal to com.fasterxml.jackson.databind;\n//     provides com.example.spi.Plugin with com.example.plugins.DefaultPlugin;\n//     uses com.example.spi.Plugin;\n// }\n\n// module-info for library\n// module com.example.lib {\n//     exports com.example.lib.api;\n// }\n\nimport java.lang.module.*;\nimport java.util.*;\n\npublic class JPMSDemo {\n    public static void main(String[] args) {\n        // List available module layers\n        ModuleLayer boot = ModuleLayer.boot();\n        System.out.println(\"Boot layer modules: \" + boot.modules().size());\n\n        Module ourModule = JPMSDemo.class.getModule();\n        System.out.println(\"Our module: \" + ourModule.getName());\n        System.out.println(\"Is named: \" + ourModule.isNamed());\n        System.out.println(\"Packages: \" + ourModule.getPackages());\n\n        // Module descriptor info\n        ourModule.getDescriptor().ifPresentOrElse(\n            desc -> {\n                System.out.println(\"Requires: \" + desc.requires());\n                System.out.println(\"Exports: \" + desc.exports());\n                desc.opens().forEach(o -> System.out.println(\"Opens: \" + o));\n            },\n            () -> System.out.println(\"Unnamed module\")\n        );\n\n        // --add-exports: command line workaround for reflective access\n        // --add-opens: for deep reflection (setAccessible)\n        // --add-reads: add module dependency at runtime\n        System.out.println(\"--- JPMS properties ---\");\n        System.out.println(\"Explicit dependencies: no transitive surprises\");\n        System.out.println(\"Strong encapsulation: internal packages not accessible\");\n        System.out.println(\"Service loading: provides/uses replaces META-INF/services\");\n    }\n}\n\n/* Example module-info.java for a service provider:\nmodule com.example.db {\n    requires java.sql;\n    exports com.example.db.api;\n    provides java.sql.Driver with com.example.db.DriverImpl;\n}\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Named modules (module-info.java) vs unnamed module (classpath). Automatic module: JAR on module path with name from MANIFEST.MF. --add-exports, --add-opens for migration. jlink creates custom runtime with only needed modules. Migration: unnamed -> automatic -> named."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-javatime-api-jsr-310",
      children: "Q50: java.time API (JSR-310)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Modern date/time library replacing java.util.Date and Calendar. Core classes: LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Instant, Duration, Period. All immutable and thread-safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.time.*;\nimport java.time.format.*;\nimport java.time.temporal.*;\nimport java.util.*;\n\npublic class JavaTimeAPI {\n    public static void main(String[] args) {\n        // LocalDate, LocalTime, LocalDateTime\n        LocalDate today = LocalDate.now();\n        LocalDate independenceDay = LocalDate.of(2026, Month.JULY, 4);\n        System.out.println(\"Days until July 4: \" + today.until(independenceDay, ChronoUnit.DAYS));\n\n        LocalTime now = LocalTime.now();\n        LocalTime lunch = LocalTime.of(12, 30);\n        System.out.println(\"Minutes to lunch: \" + now.until(lunch, ChronoUnit.MINUTES));\n\n        LocalDateTime meeting = LocalDateTime.of(2026, 6, 15, 14, 30);\n        System.out.println(\"Meeting: \" + meeting.format(DateTimeFormatter.ofPattern(\"EEEE, MMM d 'at' HH:mm\")));\n\n        // ZonedDateTime and offsets\n        ZonedDateTime nyTime = ZonedDateTime.now(ZoneId.of(\"America/New_York\"));\n        ZonedDateTime londonTime = nyTime.withZoneSameInstant(ZoneId.of(\"Europe/London\"));\n        System.out.println(\"NY: \" + nyTime + \" London: \" + londonTime);\n\n        // Instant: machine timestamp\n        Instant epoch = Instant.EPOCH;\n        Instant now2 = Instant.now();\n        System.out.println(\"Epoch ms: \" + now2.toEpochMilli());\n        System.out.println(\"Seconds since epoch: \" + now2.getEpochSecond());\n\n        // Duration: seconds/nanos based time amount\n        Duration taskTime = Duration.ofMinutes(90);\n        System.out.println(\"Task: \" + taskTime.toHours() + \"h \" + taskTime.toMinutesPart() + \"m\");\n\n        // Period: date-based amount\n        Period tenure = Period.between(LocalDate.of(2020, 1, 1), today);\n        System.out.println(\"Tenure: \" + tenure.getYears() + \"y \" + tenure.getMonths() + \"m \" + tenure.getDays() + \"d\");\n\n        // Parsing and formatting\n        LocalDate parsed = LocalDate.parse(\"2026-12-25\");\n        System.out.println(\"Parsed: \" + parsed);\n\n        DateTimeFormatter fmt = DateTimeFormatter.ofPattern(\"yyyy/MM/dd\");\n        System.out.println(\"Formatted: \" + today.format(fmt));\n\n        // TemporalAdjusters\n        LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));\n        LocalDate lastDay = today.with(TemporalAdjusters.lastDayOfMonth());\n        System.out.println(\"Next Mon: \" + nextMonday + \" Last day: \" + lastDay);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All java.time classes are immutable and thread-safe. Duration = seconds/nanos, Period = years/months/days. Parsing is strict by default (DateTimeFormatter.ofPattern for lenient). ZoneOffset for fixed offsets, ZoneId for full rules (DST aware). Instant for timestamps, ZonedDateTime for human display."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-local-variable-type-inference-var",
      children: "Q51: Local variable type inference (var)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " var (Java 10+) infers type from initializer on local variables, enhanced for loops, and lambda parameters. Improves readability by eliminating redundant type declarations. Not for fields, method params, or return types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\nimport java.net.*;\n\npublic class VarDemo {\n    // NOT allowed: fields, method params, return types\n    // var field = \"bad\";\n\n    public static void main(String[] args) {\n        // Replaces explicit type\n        var list = new ArrayList<String>();\n        list.add(\"hello\");\n\n        // Complex generic types are more readable\n        var stream = list.stream()\n            .filter(s -> s.length() > 2)\n            .map(String::toUpperCase);\n        System.out.println(stream.collect(Collectors.toList()));\n\n        // Diamond + var\n        var map = new HashMap<String, List<Integer>>();\n        map.put(\"a\", List.of(1, 2, 3));\n\n        // For-each with var\n        for(var entry : map.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n\n        // With anonymous class (inferred type includes extra method)\n        var obj = new Object() { String greet() { return \"hi\"; } };\n        System.out.println(obj.greet());\n\n        // Lambda parameter type inference\n        Function<String, Integer> len = (var s) -> s.length();\n\n        // Pitfalls\n        var count = 0;           // int, not long\n        var items = new byte[0]; // byte[]\n        // var x;                // ERROR: must have initializer\n        // var n = null;         // ERROR: can't infer null\n        // var p = (String)null; // OK with cast\n    }\n\n    // OK in lambda expressions\n    interface Processor {\n        void process(var input); // Not allowed → lambda params only!\n    }\n\n    // OK with anonymous class\n    static void example() {\n        // var in try-with-resources\n        try(var scanner = new java.util.Scanner(System.in)) {\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "var requires initializer on same line. Cannot infer to null, cannot use without assignment. Diamond operator with var: var list = new ArrayList<>() infers ArrayList<Object>. Use var when it improves readability, not for primitive-like types (int, long) where reader needs to see exact type. Good for complex generics, streams, anonymous classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-annotations--retention-policies-processing-and-runtime-access",
      children: "Q52: Annotations → retention policies, processing, and runtime access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Annotations provide metadata for code. Retention: SOURCE (compile only, @Override), CLASS (in bytecode but not runtime, @NonNull), RUNTIME (accessible via reflection, @RequestMapping). Processed by annotation processors (compile-time) or reflection (runtime)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.annotation.*;\nimport java.lang.reflect.*;\nimport java.util.*;\n\npublic class AnnotationDemo {\n    // Custom annotation definitions\n    @Retention(RetentionPolicy.RUNTIME)\n    @Target({ElementType.FIELD, ElementType.METHOD})\n    @interface JsonField {\n        String name() default \"\";\n        boolean required() default false;\n    }\n\n    @Retention(RetentionPolicy.RUNTIME)\n    @Target(ElementType.TYPE)\n    @interface ApiVersion {\n        int major() default 1;\n        int minor() default 0;\n    }\n\n    @Retention(RetentionPolicy.SOURCE)\n    @interface Builder {} // compile-time only, not in bytecode\n\n    @Retention(RetentionPolicy.CLASS)\n    @interface NotNull {} // in bytecode, not reflectable\n\n    // Usage\n    @ApiVersion(major = 2)\n    static class UserDto {\n        @JsonField(required = true)\n        private String email;\n\n        @JsonField(name = \"full_name\")\n        private String name;\n\n        public UserDto(String email, String name) {\n            this.email = email;\n            this.name = name;\n        }\n\n        @JsonField\n        public String getEmail() { return email; }\n    }\n\n    // Runtime annotation reader\n    static Map<String, Object> serialize(Object obj) throws Exception {\n        Map<String, Object> result = new LinkedHashMap<>();\n        Class<?> clazz = obj.getClass();\n\n        // Class-level annotation\n        ApiVersion ver = clazz.getAnnotation(ApiVersion.class);\n        if(ver != null) {\n            result.put(\"@apiVersion\", ver.major() + \".\" + ver.minor());\n        }\n\n        // Field-level annotations\n        for(Field field : clazz.getDeclaredFields()) {\n            JsonField jf = field.getAnnotation(JsonField.class);\n            if(jf != null) {\n                field.setAccessible(true);\n                String key = jf.name().isEmpty() ? field.getName() : jf.name();\n                result.put(key, field.get(obj));\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) throws Exception {\n        UserDto user = new UserDto(\"a@x.com\", \"Alice\");\n        System.out.println(\"Serialized: \" + serialize(user));\n\n        // Repeatable annotations (Java 8+)\n        @Repeatable(Schedules.class)\n        @interface Schedule { String day(); }\n        @interface Schedules { Schedule[] value(); }\n\n        @Schedule(day=\"MON\") @Schedule(day=\"WED\")\n        static class Task {}\n\n        Schedule[] scheds = Task.class.getAnnotationsByType(Schedule.class);\n        System.out.println(\"Schedules: \" + Arrays.toString(scheds));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RetentionPolicy.SOURCE: @Override, @SuppressWarnings → discarded after compile. CLASS: bytecode only, no reflection (lombok @Getter, @Setter). RUNTIME: retained for reflection (Spring, JPA, Jackson). @Target: TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, ANNOTATION_TYPE, PACKAGE. Annotation processor (AbstractProcessor) generates code at compile time → used by lombok, MapStruct, Dagger."
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