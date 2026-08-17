"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[47252],{

/***/ 98912
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_p_3_java_collections_md_ab6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-p-3-java-collections-md-ab6.json
const site_docs_courses_java_p_3_java_collections_md_ab6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/p3-java-collections","title":"Java Collections Framework","description":"Learning Objectives","source":"@site/docs/courses/java/p3-java-collections.md","sourceDirName":"courses/java","slug":"/java/p3-java-collections","permalink":"/ai-engineering-journey/java/p3-java-collections","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":78,"frontMatter":{"id":"p3-java-collections","slug":"/java/p3-java-collections","title":"Java Collections Framework","sidebar_label":"Java Collections Framework","sidebar_position":78},"sidebar":"course-java","previous":{"title":"Object-Oriented Programming in Java","permalink":"/ai-engineering-journey/java/p2-java-oop"},"next":{"title":"Exception Handling & I/O","permalink":"/ai-engineering-journey/java/p4-exceptions-io"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/p3-java-collections.md


const frontMatter = {
	id: 'p3-java-collections',
	slug: '/java/p3-java-collections',
	title: 'Java Collections Framework',
	sidebar_label: 'Java Collections Framework',
	sidebar_position: 78
};
const contentTitle = 'Java Collections Framework';

const assets = {

};



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
  "value": "1. Collections Framework Overview",
  "id": "1-collections-framework-overview",
  "level": 2
}, {
  "value": "1.1 Interface Hierarchy",
  "id": "11-interface-hierarchy",
  "level": 3
}, {
  "value": "1.2 The <code>Collection</code> Interface",
  "id": "12-the-collection-interface",
  "level": 3
}, {
  "value": "1.3 The <code>Collections</code> Utility Class",
  "id": "13-the-collections-utility-class",
  "level": 3
}, {
  "value": "2. List Interface &amp; Implementations",
  "id": "2-list-interface--implementations",
  "level": 2
}, {
  "value": "2.1 ArrayList",
  "id": "21-arraylist",
  "level": 3
}, {
  "value": "2.2 LinkedList",
  "id": "22-linkedlist",
  "level": 3
}, {
  "value": "2.3 Vector &amp; Stack → Legacy Classes",
  "id": "23-vector--stack--legacy-classes",
  "level": 3
}, {
  "value": "2.4 List.of, List.copyOf, and Unmodifiable Lists",
  "id": "24-listof-listcopyof-and-unmodifiable-lists",
  "level": 3
}, {
  "value": "3. Set Interface &amp; Implementations",
  "id": "3-set-interface--implementations",
  "level": 2
}, {
  "value": "3.1 HashSet",
  "id": "31-hashset",
  "level": 3
}, {
  "value": "3.2 LinkedHashSet",
  "id": "32-linkedhashset",
  "level": 3
}, {
  "value": "3.3 TreeSet",
  "id": "33-treeset",
  "level": 3
}, {
  "value": "3.4 EnumSet",
  "id": "34-enumset",
  "level": 3
}, {
  "value": "3.5 Set.of and Set.copyOf",
  "id": "35-setof-and-setcopyof",
  "level": 3
}, {
  "value": "4. Map Interface &amp; Implementations",
  "id": "4-map-interface--implementations",
  "level": 2
}, {
  "value": "4.1 HashMap",
  "id": "41-hashmap",
  "level": 3
}, {
  "value": "4.2 LinkedHashMap",
  "id": "42-linkedhashmap",
  "level": 3
}, {
  "value": "4.3 TreeMap",
  "id": "43-treemap",
  "level": 3
}, {
  "value": "4.4 EnumMap",
  "id": "44-enummap",
  "level": 3
}, {
  "value": "4.5 WeakHashMap",
  "id": "45-weakhashmap",
  "level": 3
}, {
  "value": "4.6 IdentityHashMap",
  "id": "46-identityhashmap",
  "level": 3
}, {
  "value": "4.7 Map.Entry",
  "id": "47-mapentry",
  "level": 3
}, {
  "value": "4.8 computeIfAbsent, merge, and Modern Map Methods",
  "id": "48-computeifabsent-merge-and-modern-map-methods",
  "level": 3
}, {
  "value": "4.9 Map.of, Map.copyOf, and Immutable Maps",
  "id": "49-mapof-mapcopyof-and-immutable-maps",
  "level": 3
}, {
  "value": "5. Queue &amp; Deque",
  "id": "5-queue--deque",
  "level": 2
}, {
  "value": "5.1 Queue Interface",
  "id": "51-queue-interface",
  "level": 3
}, {
  "value": "5.2 PriorityQueue",
  "id": "52-priorityqueue",
  "level": 3
}, {
  "value": "5.3 ArrayDeque",
  "id": "53-arraydeque",
  "level": 3
}, {
  "value": "5.4 LinkedList as Queue",
  "id": "54-linkedlist-as-queue",
  "level": 3
}, {
  "value": "5.5 BlockingQueue Overview",
  "id": "55-blockingqueue-overview",
  "level": 3
}, {
  "value": "6. Comparable vs Comparator",
  "id": "6-comparable-vs-comparator",
  "level": 2
}, {
  "value": "6.1 Comparable → Natural Ordering",
  "id": "61-comparable--natural-ordering",
  "level": 3
}, {
  "value": "6.2 Comparator → Custom Ordering",
  "id": "62-comparator--custom-ordering",
  "level": 3
}, {
  "value": "6.3 Comparator Method Chaining",
  "id": "63-comparator-method-chaining",
  "level": 3
}, {
  "value": "6.4 Comparator Predefined Helpers",
  "id": "64-comparator-predefined-helpers",
  "level": 3
}, {
  "value": "7. Collections Utility Methods → Deep Dive",
  "id": "7-collections-utility-methods--deep-dive",
  "level": 2
}, {
  "value": "7.1 Unmodifiable and Synchronized Wrappers",
  "id": "71-unmodifiable-and-synchronized-wrappers",
  "level": 3
}, {
  "value": "8. Stream API",
  "id": "8-stream-api",
  "level": 2
}, {
  "value": "8.1 Stream Creation",
  "id": "81-stream-creation",
  "level": 3
}, {
  "value": "8.2 Intermediate Operations",
  "id": "82-intermediate-operations",
  "level": 3
}, {
  "value": "8.3 Terminal Operations",
  "id": "83-terminal-operations",
  "level": 3
}, {
  "value": "8.4 Putting It All Together",
  "id": "84-putting-it-all-together",
  "level": 3
}, {
  "value": "9. Collectors",
  "id": "9-collectors",
  "level": 2
}, {
  "value": "9.1 Basic Collectors",
  "id": "91-basic-collectors",
  "level": 3
}, {
  "value": "9.2 toMap → Various Strategies",
  "id": "92-tomap--various-strategies",
  "level": 3
}, {
  "value": "9.3 Advanced Collectors",
  "id": "93-advanced-collectors",
  "level": 3
}, {
  "value": "9.4 Custom Collector",
  "id": "94-custom-collector",
  "level": 3
}, {
  "value": "10. Optional",
  "id": "10-optional",
  "level": 2
}, {
  "value": "10.1 Creation",
  "id": "101-creation",
  "level": 3
}, {
  "value": "10.2 Operations",
  "id": "102-operations",
  "level": 3
}, {
  "value": "10.3 OptionalInt, OptionalLong, OptionalDouble",
  "id": "103-optionalint-optionallong-optionaldouble",
  "level": 3
}, {
  "value": "10.4 Optional Best Practices",
  "id": "104-optional-best-practices",
  "level": 3
}, {
  "value": "11. Parallel Streams",
  "id": "11-parallel-streams",
  "level": 2
}, {
  "value": "11.1 ForkJoinPool Architecture",
  "id": "111-forkjoinpool-architecture",
  "level": 3
}, {
  "value": "11.2 Performance Considerations",
  "id": "112-performance-considerations",
  "level": 3
}, {
  "value": "11.3 Thread Safety and Shared State",
  "id": "113-thread-safety-and-shared-state",
  "level": 3
}, {
  "value": "11.4 unordered() for Performance",
  "id": "114-unordered-for-performance",
  "level": 3
}, {
  "value": "11.5 Parallel Stream Decision Framework",
  "id": "115-parallel-stream-decision-framework",
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
}, {
  "value": "Key Terms",
  "id": "key-terms",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "java-collections-framework",
        children: "Java Collections Framework"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "Navigate the Java Collections Framework hierarchy and select the correct interface/implementation for any problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze ArrayList, LinkedList, HashSet, TreeSet, HashMap, and TreeMap with full understanding of their internal data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare objects using Comparable and Comparator with method-chaining and null-safe comparators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Stream API with intermediate and terminal operations to express data transformations declaratively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build custom Collectors and use advanced collectors (groupingBy, partitioningBy, teeing) for complex reductions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write null-safe code with Optional and understand its monadic operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use parallel streams correctly with awareness of thread safety, the ForkJoinPool, and performance trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between synchronized, unmodifiable, and concurrent collections based on thread-safety requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-collections-framework-overview",
      children: "1. Collections Framework Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p3-java-collections.png",
        alt: "Java Collections Framework - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Collections Framework"
      }), " (JCF) is a unified architecture for storing, retrieving, and manipulating groups of objects. It was introduced in JDK 1.2 and has been enhanced in every major release since. The framework provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interfaces"
        }), ": Abstract data types representing collections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementations"
        }), ": Concrete classes that implement the interfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithms"
        }), ": Static methods in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collections"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Arrays"
        }), " that operate on collections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-interface-hierarchy",
      children: "1.1 Interface Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The framework is built around two top-level interfaces: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Iterable (java.lang)\n  └── Collection (modifiable, optional operations)\n        ├── List (ordered, indexed, allows duplicates)\n        ├── Set (no duplicates)\n        │     └── SortedSet → NavigableSet\n        └── Queue (FIFO typically)\n              └── Deque (double-ended)\n\nMap (separate hierarchy, not a Collection)\n  └── SortedMap → NavigableMap\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Iterable<E>"
      }), " is in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang"
      }), " and is the root of the entire framework. It provides the enhanced for-each loop:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Iterable<T> {\n    Iterator<T> iterator();\n    default void forEach(Consumer<? super T> action) { ... }\n    default Spliterator<T> spliterator() { ... }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Iterable"
      }), ", so every collection can be iterated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (var e : collection)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "12-the-collection-interface",
      children: ["1.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), " Interface"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Collection<E>"
      }), " is the root interface of the collection hierarchy (excluding Map). Key methods:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Collection<E> extends Iterable<E> {\n    int size();\n    boolean isEmpty();\n    boolean contains(Object o);\n    Iterator<E> iterator();\n    Object[] toArray();\n    <T> T[] toArray(T[] a);\n\n    // Modification (optional operations)\n    boolean add(E e);\n    boolean remove(Object o);\n    boolean addAll(Collection<? extends E> c);\n    boolean removeAll(Collection<?> c);\n    boolean retainAll(Collection<?> c);  // intersection\n    void clear();\n\n    // Bulk + views\n    boolean containsAll(Collection<?> c);\n    default Stream<E> stream() { return StreamSupport.stream(spliterator(), false); }\n    default Stream<E> parallelStream() { return StreamSupport.stream(spliterator(), true); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implementations may throw ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnsupportedOperationException"
      }), " for optional operations. For example, an unmodifiable collection throws on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remove"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clear"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "13-the-collections-utility-class",
      children: ["1.3 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collections"
      }), " Utility Class"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.Collections"
      }), " provides static algorithms that operate on collections. Every method works with the interfaces, not implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.overview;\n\nimport java.util.*;\n\npublic class CollectionsUtilityDemo {\n    public static void main(String[] args) {\n        List<Integer> numbers = new ArrayList<>(List.of(3, 1, 4, 1, 5, 9, 2, 6, 5));\n\n        Collections.sort(numbers);\n        System.out.println(\"Sorted: \" + numbers);\n\n        int idx = Collections.binarySearch(numbers, 5);\n        System.out.println(\"Index of 5: \" + idx);\n\n        Collections.reverse(numbers);\n        System.out.println(\"Reversed: \" + numbers);\n\n        Collections.shuffle(numbers);\n        System.out.println(\"Shuffled: \" + numbers);\n\n        Integer max = Collections.max(numbers);\n        Integer min = Collections.min(numbers);\n        System.out.println(\"Max: \" + max + \", Min: \" + min);\n\n        int freq = Collections.frequency(numbers, 5);\n        System.out.println(\"Frequency of 5: \" + freq);\n\n        // Unmodifiable view → wraps, does not copy\n        List<Integer> readOnly = Collections.unmodifiableList(numbers);\n        // readOnly.add(42); // throws UnsupportedOperationException\n\n        // Synchronized wrapper for legacy thread safety\n        Collection<Integer> sync = Collections.synchronizedCollection(new ArrayList<>(numbers));\n        synchronized (sync) {  // must synchronize on wrapper during iteration\n            for (var n : sync) System.out.print(n + \" \");\n        }\n        System.out.println();\n\n        // Check for disjoint sets\n        List<String> list1 = List.of(\"A\", \"B\", \"C\");\n        List<String> list2 = List.of(\"D\", \"E\", \"F\");\n        System.out.println(\"Disjoint: \" + Collections.disjoint(list1, list2));\n\n        // Singleton → optimized single-element set\n        Set<String> singleton = Collections.singleton(\"Java\");\n        System.out.println(\"Singleton: \" + singleton);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design principle"
      }), ": The framework programs to interfaces, not implementations. Your code should accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map"
      }), " as parameter types, not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArrayList"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-list-interface--implementations",
      children: "2. List Interface & Implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "List<E>"
      }), " is an ordered collection (sequence). Elements can be accessed by integer index, and duplicates are allowed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface List<E> extends Collection<E> {\n    E get(int index);\n    E set(int index, E element);  // returns old value\n    void add(int index, E element);\n    E remove(int index);\n    int indexOf(Object o);\n    int lastIndexOf(Object o);\n    ListIterator<E> listIterator();\n    ListIterator<E> listIterator(int index);\n    List<E> subList(int fromIndex, int toIndex);  // view, not copy\n    default void replaceAll(UnaryOperator<E> operator) { ... }\n    default void sort(Comparator<? super E> c) { ... }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-arraylist",
      children: "2.1 ArrayList"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ArrayList<E>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resizable array"
      }), " implementation. It is the most commonly used List."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backed by an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object[] elementData"
        }), " array"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default initial capacity is 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elements are stored contiguously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access by index is O(1)→fast random access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insertion/removal at an arbitrary index is O(n)→shifts elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insertion at the end is amortized O(1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Growth factor"
      }), ": When the array is full, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grow()"
      }), " creates a new array of size ", (0,jsx_runtime.jsx)(_components.code, {
        children: "oldCapacity + (oldCapacity >> 1)"
      }), "→a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.5x growth factor"
      }), ". This balances memory waste against insertion cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Internal growth logic (JDK 21+)\nprivate Object[] grow(int minCapacity) {\n    int oldCapacity = elementData.length;\n    int newCapacity = oldCapacity + (oldCapacity >> 1);  // 1.5x\n    if (newCapacity - minCapacity < 0)\n        newCapacity = minCapacity;\n    if (newCapacity - MAX_ARRAY_SIZE > 0)\n        newCapacity = hugeCapacity(minCapacity);\n    return elementData = Arrays.copyOf(elementData, newCapacity);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.list;\n\nimport java.util.*;\n\npublic class ArrayListDemo {\n    public static void main(String[] args) {\n        // Creation\n        List<String> list1 = new ArrayList<>();                    // capacity 10\n        List<String> list2 = new ArrayList<>(1_000_000);           // pre-size known\n        List<String> list3 = new ArrayList<>(List.of(\"A\", \"B\"));  // from another collection\n\n        // Demonstrate growth → watch for resizing cost\n        List<Integer> growing = new ArrayList<>(2);\n        growing.add(1);\n        growing.add(2);\n        growing.add(3); // triggers grow(): 2 + (2>>1) = 3, now capacity 3\n        growing.add(4); // triggers grow(): 3 + (3>>1) = 5, now capacity 5\n        System.out.println(\"Grown list: \" + growing);\n\n        // Access vs. modification speed\n        List<String> names = new ArrayList<>(List.of(\"Alice\", \"Bob\", \"Charlie\", \"Diana\"));\n        System.out.println(\"Name at [2]: \" + names.get(2)); // O(1)\n\n        names.add(1, \"Brianna\"); // O(n) → shifts Bob, Charlie, Diana right\n        System.out.println(\"After insert: \" + names);\n\n        names.remove(0); // O(n) → shifts Brianna, Bob, Charlie, Diana left\n        System.out.println(\"After remove first: \" + names);\n\n        // Bulk operations\n        names.retainAll(List.of(\"Bob\", \"Charlie\")); // keep only these\n        System.out.println(\"After retain: \" + names);\n\n        // Replace all with unary operator\n        names.replaceAll(String::toUpperCase);\n        System.out.println(\"Upper: \" + names);\n\n        // SubList → live view\n        List<Integer> numbers = new ArrayList<>(\n            new java.util.stream.IntStream().rangeClosed(1, 10).boxed().toList()\n        );\n        List<Integer> sub = numbers.subList(3, 7); // [4,5,6,7]\n        System.out.println(\"SubList: \" + sub);\n        sub.replaceAll(n -> n * 10);\n        System.out.println(\"After modifying sub (numbers too): \" + numbers);\n\n        // Clear sublist's parent first = ConcurrentModificationException\n        // numbers.clear();   // uncomment → sub iteration throws ConcurrentModificationException\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use ArrayList"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random access by index is common"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You append far more often than you insert or remove from the middle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory locality matters (contiguous storage is CPU-cache-friendly)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-linkedlist",
      children: "2.2 LinkedList"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedList<E>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doubly-linked list"
      }), " implementation. It also implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque<E>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each element is a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Node<E>"
        }), " containing data + prev + next pointers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintains references to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "last"
        }), " nodes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access by index is O(n)→must traverse from head or tail"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insertion/removal at either end is O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insertion/removal in the middle is O(n) to find the position, O(1) to relink"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.list;\n\nimport java.util.*;\n\npublic class LinkedListDemo {\n    public static void main(String[] args) {\n        Deque<String> deque = new LinkedList<>();\n\n        // Use as a queue (FIFO)\n        deque.offer(\"First\");\n        deque.offer(\"Second\");\n        deque.offer(\"Third\");\n        System.out.println(\"Queue poll: \" + deque.poll()); // First\n\n        // Use as a stack (LIFO) → better than legacy Stack\n        Deque<String> stack = new LinkedList<>();\n        stack.push(\"Bottom\");\n        stack.push(\"Middle\");\n        stack.push(\"Top\");\n        System.out.println(\"Stack pop: \" + stack.pop()); // Top\n\n        // List-specific operations\n        List<String> list = new LinkedList<>(List.of(\"A\", \"B\", \"C\", \"D\", \"E\"));\n        // getFirst / getLast → O(1)\n        System.out.println(\"First: \" + list.getFirst() + \", Last: \" + list.getLast());\n\n        // Access by index → O(n), traverses from nearer end\n        System.out.println(\"Element at [2]: \" + list.get(2));\n\n        // ListIterator supports reverse traversal\n        var it = list.listIterator(list.size());\n        while (it.hasPrevious()) {\n            System.out.print(it.previous() + \" \");\n        }\n        System.out.println();\n\n        // Memory overhead: each node stores 3 references + padding\n        // vs ArrayList's single array + waste from growth\n        // LinkedList uses ~24 extra bytes per element on 64-bit JVMs\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use LinkedList"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frequent insertion/removal at both ends (use as Deque)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need a queue or stack and want list operations too"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You rarely access elements by index"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Otherwise prefer ArrayList"
        }), " → LinkedList has higher memory overhead and worse cache locality"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-vector--stack--legacy-classes",
      children: "2.3 Vector & Stack → Legacy Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Vector"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack"
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "legacy"
      }), " classes from Java 1.0. They were retrofitted to implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " in Java 2 but remain synchronized on every operation, which causes unnecessary overhead in single-threaded code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.list;\n\nimport java.util.*;\n\npublic class LegacyDemo {\n    public static void main(String[] args) {\n        // Vector → synchronized ArrayList equivalent\n        Vector<String> vector = new Vector<>();\n        vector.add(\"A\");\n        vector.add(\"B\");\n        System.out.println(\"Vector capacity: \" + vector.capacity()); // default 10, grows 2x\n\n        // Stack → extends Vector, LIFO\n        Stack<Integer> stack = new Stack<>();\n        stack.push(1);\n        stack.push(2);\n        stack.push(3);\n        System.out.println(\"Stack pop: \" + stack.pop()); // 3\n        System.out.println(\"Stack peek: \" + stack.peek()); // 2\n        System.out.println(\"Stack search(1): \" + stack.search(1)); // distance from top, 1-based\n\n        // Prefer these replacements:\n        List<String> arrayList = new ArrayList<>();          // instead of Vector\n        Deque<Integer> arrayDeque = new ArrayDeque<>();     // instead of Stack\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-listof-listcopyof-and-unmodifiable-lists",
      children: "2.4 List.of, List.copyOf, and Unmodifiable Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 9+ introduced convenient factory methods for creating ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unmodifiable lists"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.list;\n\nimport java.util.*;\n\npublic class UnmodifiableListDemo {\n    public static void main(String[] args) {\n        // List.of → compact, unmodifiable, null-hostile\n        List<String> fruits = List.of(\"Apple\", \"Banana\", \"Cherry\");\n        System.out.println(\"List.of: \" + fruits);\n        // fruits.add(\"Date\"); // throws UnsupportedOperationException\n        // List.of(\"A\", null); // throws NullPointerException\n\n        // List.copyOf → copies and wraps as unmodifiable\n        List<String> mutable = new ArrayList<>(List.of(\"X\", \"Y\", \"Z\"));\n        List<String> copy = List.copyOf(mutable);\n        System.out.println(\"List.copyOf: \" + copy);\n        mutable.set(0, \"Modified\"); // changes original, NOT the copy\n        System.out.println(\"After modifying original: copy = \" + copy);\n\n        // JDK 16+ → toList() on streams returns unmodifiable list\n        List<Integer> squares = java.util.stream.Stream.of(1, 2, 3, 4, 5)\n            .map(n -> n * n)\n            .toList(); // unmodifiable since Java 16\n        System.out.println(\"Stream.toList(): \" + squares);\n\n        // Collections.unmodifiableList → wraps any list, still reflects changes\n        List<String> backing = new ArrayList<>(List.of(\"A\", \"B\"));\n        List<String> unmod = Collections.unmodifiableList(backing);\n        backing.add(\"C\"); // unmod now sees it\n        System.out.println(\"Unmodifiable view after backing change: \" + unmod);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "List.of(...)"
        }), " → creates a fixed-size list directly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "List.copyOf(coll)"
        }), " → copies elements from any collection to an unmodifiable list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Collections.unmodifiableList(list)"
        }), " → provides a view; changes to the backing list are visible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All three reject ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " elements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-set-interface--implementations",
      children: "3. Set Interface & Implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Set<E>"
      }), " is a collection that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot contain duplicate elements"
      }), ". It models the mathematical set abstraction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Set<E> extends Collection<E> {\n    // No additional methods → purely semantic contract\n    // Adds are not idempotent; add(e) returns false if e already exists\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-hashset",
      children: "3.1 HashSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HashSet<E>"
      }), " is backed by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap<E, Object>"
      }), " hash table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Elements are stored as keys in a HashMap with a shared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PRESENT"
        }), " sentinel value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "equals()"
        }), " for element identity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add, remove, contains are O(1) average, O(n) worst (hash collisions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Load factor"
      }), ": Default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.75"
      }), ". When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size > capacity * loadFactor"
      }), ", the table is resized (doubled). A lower load factor trades memory for fewer collisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.set;\n\nimport java.util.*;\n\npublic class HashSetDemo {\n    public static void main(String[] args) {\n        // Creation\n        Set<String> set1 = new HashSet<>();                    // capacity 16, load 0.75\n        Set<String> set2 = new HashSet<>(1_000_000);           // pre-size\n        Set<String> set3 = new HashSet<>(1_000_000, 0.8f);     // custom load factor\n\n        Set<String> names = new HashSet<>();\n        names.add(\"Alice\");\n        names.add(\"Bob\");\n        names.add(\"Alice\"); // ignored → duplicate\n        System.out.println(\"HashSet: \" + names);  // order is NOT guaranteed\n\n        // Hash code matters → a poor hashCode ruins performance\n        Set<BadHash> bad = new HashSet<>();\n        for (int i = 0; i < 10000; i++) bad.add(new BadHash(i));\n        System.out.println(\"Contains 5000: \" + bad.contains(new BadHash(5000))); // slow!\n\n        // Removing\n        names.remove(\"Bob\");\n        System.out.println(\"After remove: \" + names);\n    }\n}\n\nclass BadHash {\n    int id;\n    BadHash(int id) { this.id = id; }\n    // int hashCode() { return id; }      // fix: uncomment for O(1)\n    public int hashCode() { return 42; }   // every object in same bucket → O(n)\n    public boolean equals(Object o) {\n        if (!(o instanceof BadHash other)) return false;\n        return this.id == other.id;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal expansion"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Simplified view of HashMap's resize logic\nfinal Node<K,V>[] resize() {\n    Node<K,V>[] oldTab = table;\n    int oldCap = (oldTab == null) ? 0 : oldTab.length;\n    int oldThr = threshold;\n    int newCap, newThr = 0;\n    if (oldCap > 0) {\n        if (oldCap >= MAXIMUM_CAPACITY) { threshold = Integer.MAX_VALUE; return oldTab; }\n        else if ((newCap = oldCap << 1) <= MAXIMUM_CAPACITY) {\n            newThr = oldThr << 1;    // double threshold\n        }\n    }\n    threshold = newThr;\n    Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];\n    table = newTab;\n    // rehash all existing entries into new table\n    return newTab;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-linkedhashset",
      children: "3.2 LinkedHashSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedHashSet<E>"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashSet<E>"
      }), " with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doubly-linked list"
      }), " running through all entries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "insertion order"
        }), " (and access order if configured via LinkedHashMap)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only slightly slower than HashSet for operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predictable iteration order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.set;\n\nimport java.util.*;\n\npublic class LinkedHashSetDemo {\n    public static void main(String[] args) {\n        Set<String> ordered = new LinkedHashSet<>();\n        ordered.add(\"Zulu\");\n        ordered.add(\"Alpha\");\n        ordered.add(\"Bravo\");\n        ordered.add(\"Delta\");\n        System.out.println(\"LinkedHashSet (insertion order): \" + ordered);\n\n        // Re-inserting an element does NOT change its position\n        ordered.add(\"Alpha\");\n        System.out.println(\"After re-add Alpha: \" + ordered); // Alpha stays at position 1\n\n        // Practical use: dedup while preserving order\n        List<Integer> input = List.of(3, 1, 2, 1, 3, 4, 5, 2);\n        Set<Integer> deduped = new LinkedHashSet<>(input);\n        System.out.println(\"Deduped preserving order: \" + deduped);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-treeset",
      children: "3.3 TreeSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TreeSet<E>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Red-Black Tree"
      }), " implementation that stores elements in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted order"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Elements must implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Comparable"
        }), ", or a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Comparator"
        }), " must be provided"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add, remove, contains are O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains sorted iteration order"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "first()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "last()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "headSet(to)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tailSet(from)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subSet(from, to)"
        }), " are useful"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.set;\n\nimport java.util.*;\n\npublic class TreeSetDemo {\n    public static void main(String[] args) {\n        // Natural ordering (Comparable)\n        NavigableSet<Integer> numbers = new TreeSet<>();\n        numbers.addAll(Set.of(5, 3, 7, 1, 9, 4, 6, 8, 2));\n        System.out.println(\"TreeSet: \" + numbers); // [1,2,3,4,5,6,7,8,9]\n\n        // Navigation methods\n        System.out.println(\"First: \" + numbers.first());      // 1\n        System.out.println(\"Last: \" + numbers.last());        // 9\n        System.out.println(\"Lower than 5: \" + numbers.lower(5));   // 4 (<5)\n        System.out.println(\"Floor of 5: \" + numbers.floor(5));      // 5 (<=5)\n        System.out.println(\"Ceiling of 5: \" + numbers.ceiling(5));  // 5 (>=5)\n        System.out.println(\"Higher than 5: \" + numbers.higher(5));  // 6 (>5)\n\n        // Descending view\n        NavigableSet<Integer> desc = numbers.descendingSet();\n        System.out.println(\"Descending: \" + desc);\n\n        // Subsets\n        System.out.println(\"HeadSet (<5): \" + numbers.headSet(5));       // [1,2,3,4]\n        System.out.println(\"TailSet (>=5): \" + numbers.tailSet(5));      // [5,6,7,8,9]\n        System.out.println(\"SubSet [3,7): \" + numbers.subSet(3, 7));     // [3,4,5,6]\n\n        // Custom comparator → reverse order\n        NavigableSet<String> reverse = new TreeSet<>(Comparator.reverseOrder());\n        reverse.addAll(Set.of(\"Alpha\", \"Bravo\", \"Charlie\", \"Delta\"));\n        System.out.println(\"Reverse TreeSet: \" + reverse);\n\n        // With a custom type\n        NavigableSet<Person> byAge = new TreeSet<>(Comparator.comparingInt(Person::age));\n        byAge.add(new Person(\"Alice\", 30));\n        byAge.add(new Person(\"Bob\", 25));\n        byAge.add(new Person(\"Charlie\", 35));\n        System.out.println(\"By age: \" + byAge);\n    }\n}\n\nrecord Person(String name, int age) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-enumset",
      children: "3.4 EnumSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EnumSet<E extends Enum<E>>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "highly optimized"
      }), " bit-vector implementation for enum types. It is one of the most performant collection types in Java."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key characteristics"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backed by a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long[]"
        }), " (RegularEnumSet uses a single long for <64 values, JumboEnumSet for >64)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All operations are bitwise → extremely fast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iteration order follows enum declaration order"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cannot have ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " elements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.set;\n\nimport java.util.*;\n\nenum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }\n\npublic class EnumSetDemo {\n    public static void main(String[] args) {\n        // Factory methods\n        EnumSet<Day> weekdays = EnumSet.range(Day.MONDAY, Day.FRIDAY);\n        System.out.println(\"Weekdays: \" + weekdays);\n\n        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);\n        System.out.println(\"Weekend: \" + weekend);\n\n        EnumSet<Day> all = EnumSet.allOf(Day.class);\n        System.out.println(\"All days: \" + all);\n\n        EnumSet<Day> none = EnumSet.noneOf(Day.class);\n        System.out.println(\"None: \" + none);\n\n        // Bitwise operations\n        EnumSet<Day> midWeek = EnumSet.of(Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY);\n        weekdays.removeAll(midWeek);\n        System.out.println(\"Weekdays without mid-week: \" + weekdays);\n\n        // Complement\n        EnumSet<Day> complement = EnumSet.complementOf(weekend);\n        System.out.println(\"Complement of weekend: \" + complement);\n\n        // Use case: grouping enum values\n        Set<Day> workFromHome = EnumSet.of(Day.WEDNESDAY, Day.FRIDAY);\n        Map<Day, String> schedule = new EnumMap<>(Day.class);\n        for (Day d : Day.values()) {\n            schedule.put(d, workFromHome.contains(d) ? \"WFH\" : \"Office\");\n        }\n        System.out.println(\"Schedule: \" + schedule);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-setof-and-setcopyof",
      children: "3.5 Set.of and Set.copyOf"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), ", Java 9+ provides immutable set factories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.set;\n\nimport java.util.*;\n\npublic class ImmutableSetDemo {\n    public static void main(String[] args) {\n        // Set.of → compact, unmodifiable, no nulls\n        Set<String> colors = Set.of(\"Red\", \"Green\", \"Blue\");\n        System.out.println(\"Set.of: \" + colors);\n        // colors.add(\"Yellow\"); // throws UnsupportedOperationException\n        // Set.of(\"Red\", null);   // throws NullPointerException\n\n        // Duplicates at creation time\n        // Set.of(\"A\", \"A\");         // IllegalArgumentException! → duplicate\n        // Set<String> dedup = new HashSet<>(List.of(\"A\", \"A\")); // no exception → deduplicates\n\n        // Set.copyOf → copies to unmodifiable set\n        Set<String> mutable = new HashSet<>(Set.of(\"X\", \"Y\", \"Z\"));\n        Set<String> frozen = Set.copyOf(mutable);\n        System.out.println(\"Set.copyOf: \" + frozen);\n\n        // EnumSet is already compact → prefer EnumSet.of for enum types\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-map-interface--implementations",
      children: "4. Map Interface & Implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Map<K, V>"
      }), " stores ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "key-value pairs"
      }), " with unique keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Map<K, V> {\n    int size();\n    boolean isEmpty();\n    boolean containsKey(Object key);\n    boolean containsValue(Object value);\n    V get(Object key);\n    V put(K key, V value);        // returns old value or null\n    V remove(Object key);\n    void putAll(Map<? extends K, ? extends V> m);\n    void clear();\n\n    // Views (all reflect changes to the map)\n    Set<K> keySet();\n    Collection<V> values();\n    Set<Map.Entry<K, V>> entrySet();\n\n    // Default methods (Java 8+)\n    V getOrDefault(Object key, V defaultValue);\n    V putIfAbsent(K key, V value);\n    boolean remove(Object key, Object value);\n    boolean replace(K key, V oldValue, V newValue);\n    V replace(K key, V value);\n    V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction);\n    V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);\n    V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);\n    V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction);\n    void forEach(BiConsumer<? super K, ? super V> action);\n    void replaceAll(BiFunction<? super K, ? super V, ? extends V> function);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-hashmap",
      children: "4.1 HashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap<K, V>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hash table"
      }), " implementation. It is the most commonly used Map."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure (JDK 8+)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array of buckets:  Node<K,V>[] table\n\nEach bucket is initially a linked list.\nWhen a bucket reaches TREEIFY_THRESHOLD (8), it converts to a red-black tree.\nWhen a bucket shrinks below UNTREEIFY_THRESHOLD (6), it converts back to a list.\n\nNode<K,V> structure:\n  int hash     → cached hash code\n  K key\n  V value\n  Node<K,V> next\n\nTreeNode<K,V> structure (red-black):\n  TreeNode<K,V> parent, left, right, prev\n  boolean red\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class HashMapInternalDemo {\n    public static void main(String[] args) {\n        // Initial capacity = 16, load factor = 0.75\n        // When size > 16*0.75 = 12, table doubles to 32\n        Map<String, Integer> scores = new HashMap<>();\n\n        scores.put(\"Alice\", 95);\n        scores.put(\"Bob\", 87);\n        scores.put(\"Charlie\", 92);\n        scores.put(\"Diana\", 88);\n\n        // Put returns previous value\n        Integer prev = scores.put(\"Alice\", 96);\n        System.out.println(\"Previous score for Alice: \" + prev); // 95\n\n        // Compute if absent → only computes if key is missing\n        scores.computeIfAbsent(\"Eve\", k -> 85);\n        scores.computeIfAbsent(\"Alice\", k -> 0); // ignored → already present\n        System.out.println(\"Scores: \" + scores);\n\n        // Merge → combines existing value with new one\n        Map<String, List<String>> multiMap = new HashMap<>();\n        multiMap.computeIfAbsent(\"fruits\", k -> new ArrayList<>()).add(\"Apple\");\n        multiMap.computeIfAbsent(\"fruits\", k -> new ArrayList<>()).add(\"Banana\");\n        System.out.println(\"Multi-map: \" + multiMap);\n\n        // forEach\n        scores.forEach((name, score) ->\n            System.out.println(name + \": \" + score));\n\n        // Views\n        Set<String> keys = scores.keySet();\n        for (String k : keys) System.out.print(k + \" \");\n\n        Collection<Integer> values = scores.values();\n\n        // Entry views\n        for (Map.Entry<String, Integer> entry : scores.entrySet()) {\n            if (entry.getValue() >= 90) {\n                entry.setValue(entry.getValue() + 5); // bonus\n            }\n        }\n        System.out.println(\"After bonus: \" + scores);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Treeification logic (simplified)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// In HashMap.putVal:\nfor (int binCount = 0; ; ++binCount) {\n    if ((e = p.next) == null) {\n        p.next = newNode(hash, key, value, null);\n        if (binCount >= TREEIFY_THRESHOLD - 1)  // -1 for first element\n            treeifyBin(tab, hash);  // convert bucket to red-black tree\n        break;\n    }\n    if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))\n        break;\n    p = e;\n}\n// Treeification only occurs if table.length >= MIN_TREEIFY_CAPACITY (64)\n// Otherwise, the table is resized instead.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-linkedhashmap",
      children: "4.2 LinkedHashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedHashMap<K, V>"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), " with a doubly-linked list running through entries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two ordering modes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insertion order"
        }), " (default) → iteration order matches insertion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access order"
        }), " → iteration order matches access pattern (most recently accessed last)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access-order mode is perfect for implementing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LRU caches"
      }), " when combined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "removeEldestEntry()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class LinkedHashMapDemo {\n    public static void main(String[] args) {\n        // Insertion order (default)\n        LinkedHashMap<String, Integer> insertion = new LinkedHashMap<>();\n        insertion.put(\"Z\", 1);\n        insertion.put(\"A\", 2);\n        insertion.put(\"M\", 3);\n        System.out.println(\"Insertion order: \" + insertion);\n\n        // Access order → for LRU cache\n        LinkedHashMap<String, Integer> access = new LinkedHashMap<>(16, 0.75f, true);\n        access.put(\"A\", 1);\n        access.put(\"B\", 2);\n        access.put(\"C\", 3);\n        access.get(\"A\");          // A is now most recently accessed\n        access.put(\"D\", 4);\n        System.out.println(\"Access order: \" + access); // B, C, A, D (A moved to end)\n    }\n}\n\n// LRU Cache example\nclass LRUCache<K, V> extends LinkedHashMap<K, V> {\n    private final int maxCapacity;\n\n    public LRUCache(int maxCapacity) {\n        super(16, 0.75f, true);   // access-order = true\n        this.maxCapacity = maxCapacity;\n    }\n\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\n        return size() > maxCapacity;\n    }\n\n    public static void main(String[] args) {\n        LRUCache<String, String> cache = new LRUCache<>(3);\n        cache.put(\"A\", \"Alpha\");\n        cache.put(\"B\", \"Beta\");\n        cache.put(\"C\", \"Gamma\");\n        System.out.println(\"Cache: \" + cache); // A, B, C\n        cache.get(\"A\");                         // A accessed → becomes most recent\n        cache.put(\"D\", \"Delta\");                // B is oldest → evicted\n        System.out.println(\"After evict: \" + cache); // C, A, D\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-treemap",
      children: "4.3 TreeMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TreeMap<K, V>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Red-Black Tree"
      }), " implementation. Keys are stored in sorted order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["O(log n) for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "put"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "containsKey"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keys must implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Comparable"
        }), " or a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Comparator"
        }), " must be provided"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigation methods: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "firstKey()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lastKey()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lowerKey()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "higherKey()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "floorKey()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ceilingKey()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Partial views: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "headMap()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tailMap()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subMap()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class TreeMapDemo {\n    public static void main(String[] args) {\n        NavigableMap<String, Integer> population = new TreeMap<>();\n        population.put(\"USA\", 331_000_000);\n        population.put(\"India\", 1_380_000_000);\n        population.put(\"China\", 1_410_000_000);\n        population.put(\"Brazil\", 213_000_000);\n        population.put(\"Nigeria\", 206_000_000);\n\n        System.out.println(\"Sorted by key: \" + population);\n\n        // Navigation\n        System.out.println(\"First key: \" + population.firstKey());\n        System.out.println(\"Last key: \" + population.lastKey());\n        System.out.println(\"Lower than Nigeria: \" + population.lowerKey(\"Nigeria\"));\n        System.out.println(\"Higher than Nigeria: \" + population.higherKey(\"Nigeria\"));\n\n        // Partial views\n        System.out.println(\"Countries before Nigeria: \" + population.headMap(\"Nigeria\", false));\n        System.out.println(\"Countries >= India: \" + population.tailMap(\"India\"));\n\n        // Descending order\n        System.out.println(\"Descending: \" + population.descendingMap());\n\n        // Custom comparator → sort by value descending\n        // (requires copying to another TreeMap; TreeMap only sorts by key)\n        NavigableMap<Integer, String> byPopulation = new TreeMap<>(Comparator.reverseOrder());\n        population.forEach((k, v) -> byPopulation.put(v, k));\n        System.out.println(\"By population descending: \" + byPopulation);\n\n        // Polling\n        var first = population.pollFirstEntry();\n        System.out.println(\"Removed first: \" + first.getKey() + \"=\" + first.getValue());\n        System.out.println(\"Remaining: \" + population);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-enummap",
      children: "4.4 EnumMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EnumMap<K extends Enum<K>, V>"
      }), " is a highly optimized map for enum keys."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backed by a plain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Object[]"
        }), " array indexed by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ordinal()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No hashing needed → direct array lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterates in enum declaration order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster than HashMap for enum keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\nenum Priority { LOW, MEDIUM, HIGH, CRITICAL }\n\nrecord Task(String description, Priority priority) {}\n\npublic class EnumMapDemo {\n    public static void main(String[] args) {\n        Map<Priority, List<Task>> taskBoard = new EnumMap<>(Priority.class);\n        for (Priority p : Priority.values()) {\n            taskBoard.put(p, new ArrayList<>());\n        }\n\n        taskBoard.get(Priority.HIGH).add(new Task(\"Fix login bug\", Priority.HIGH));\n        taskBoard.get(Priority.CRITICAL).add(new Task(\"Production outage\", Priority.CRITICAL));\n        taskBoard.get(Priority.MEDIUM).add(new Task(\"Refactor service\", Priority.MEDIUM));\n        taskBoard.get(Priority.LOW).add(new Task(\"Update docs\", Priority.LOW));\n        taskBoard.get(Priority.HIGH).add(new Task(\"Security patch\", Priority.HIGH));\n\n        // Iteration follows enum declaration order\n        taskBoard.forEach((priority, tasks) -> {\n            System.out.println(priority + \": \" + tasks.size() + \" tasks\");\n            tasks.forEach(t -> System.out.println(\"  - \" + t.description()));\n        });\n\n        // Compact performance → no hash computation\n        EnumMap<Priority, String> labels = new EnumMap<>(Priority.class);\n        labels.put(Priority.HIGH, \"Urgent\");\n        labels.put(Priority.LOW, \"Whenever\");\n        System.out.println(\"Labels: \" + labels);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-weakhashmap",
      children: "4.5 WeakHashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "WeakHashMap<K, V>"
      }), " uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weak references"
      }), " for keys. When a key is only weakly reachable (no strong references outside the map), it is eligible for GC and will be removed from the map."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use case"
      }), ": Caches or metadata that should not prevent garbage collection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class WeakHashMapDemo {\n    public static void main(String[] args) {\n        WeakHashMap<UniqueKey, String> cache = new WeakHashMap<>();\n\n        UniqueKey key1 = new UniqueKey(1);\n        UniqueKey key2 = new UniqueKey(2);\n\n        cache.put(key1, \"Value 1\");\n        cache.put(key2, \"Value 2\");\n        System.out.println(\"Before GC: \" + cache.size()); // 2\n\n        key1 = null; // remove strong reference\n\n        System.gc(); // request GC (not guaranteed, but usually works in this demo)\n\n        // Sleep briefly to allow GC to run\n        try { Thread.sleep(100); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n\n        System.out.println(\"After GC: \" + cache.size()); // likely 1 (key1 was reclaimed)\n        System.out.println(\"Remaining: \" + cache);\n    }\n}\n\nclass UniqueKey {\n    private final int id;\n    UniqueKey(int id) { this.id = id; }\n    public boolean equals(Object o) {\n        if (!(o instanceof UniqueKey other)) return false;\n        return this.id == other.id;\n    }\n    public int hashCode() { return Integer.hashCode(id); }\n    public String toString() { return \"Key-\" + id; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-identityhashmap",
      children: "4.6 IdentityHashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "IdentityHashMap<K, V>"
      }), " uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reference equality"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ") instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals()"
      }), " for key comparisons."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal"
      }), ": Backed by a linear-probing hash table (not separate chaining like HashMap)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use case"
      }), ": Serialization, graph algorithms, or maintaining per-instance metadata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class IdentityHashMapDemo {\n    public static void main(String[] args) {\n        IdentityHashMap<String, Integer> identityMap = new IdentityHashMap<>();\n\n        String s1 = \"hello\";\n        String s2 = new String(\"hello\"); // different object\n\n        identityMap.put(s1, 1);\n        identityMap.put(s2, 2);          // different reference, different entry\n\n        System.out.println(\"IdentityHashMap size: \" + identityMap.size()); // 2\n        System.out.println(\"s1 value: \" + identityMap.get(s1));\n        System.out.println(\"s2 value: \" + identityMap.get(s2));\n\n        // Compare with HashMap → uses .equals()\n        Map<String, Integer> hashMap = new HashMap<>();\n        hashMap.put(s1, 1);\n        hashMap.put(s2, 2);              // same logical key, overwrites\n        System.out.println(\"HashMap size: \" + hashMap.size()); // 1\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-mapentry",
      children: "4.7 Map.Entry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map.Entry"
      }), " interface represents a single key-value pair. It provides methods for accessing and (on modifiable maps) updating entries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class MapEntryDemo {\n    public static void main(String[] args) {\n        Map<String, Double> prices = new HashMap<>(Map.of(\n            \"Laptop\", 1299.99,\n            \"Phone\", 799.99,\n            \"Tablet\", 449.99\n        ));\n\n        // Iterate with Entry\n        for (Map.Entry<String, Double> entry : prices.entrySet()) {\n            String key = entry.getKey();\n            Double value = entry.getValue();\n            System.out.printf(\"%s: $%.2f%n\", key, value);\n        }\n\n        // Modify values through entry\n        var it = prices.entrySet().iterator();\n        while (it.hasNext()) {\n            var entry = it.next();\n            if (entry.getValue() > 1000) {\n                entry.setValue(entry.getValue() * 0.9); // 10% discount\n            }\n        }\n        System.out.println(\"After discounts: \" + prices);\n\n        // Creating a simple entry\n        Map.Entry<String, Integer> entry = Map.entry(\"Key\", 42);\n        System.out.println(\"Simple entry: \" + entry.getKey() + \"=\" + entry.getValue());\n\n        // Entry comparators\n        prices.entrySet().stream()\n            .sorted(Map.Entry.comparingByValue())\n            .forEach(e -> System.out.println(e.getKey() + \": \" + e.getValue()));\n\n        prices.entrySet().stream()\n            .sorted(Map.Entry.<String, Double>comparingByKey().reversed())\n            .forEach(e -> System.out.println(e.getKey() + \": \" + e.getValue()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-computeifabsent-merge-and-modern-map-methods",
      children: "4.8 computeIfAbsent, merge, and Modern Map Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java 8 added functional methods that eliminate the common \"check then act\" boilerplate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class ModernMapDemo {\n    public static void main(String[] args) {\n        // ---- computeIfAbsent ----\n        // Before Java 8:\n        Map<String, List<Integer>> oldWay = new HashMap<>();\n        String key = \"scores\";\n        List<Integer> list = oldWay.get(key);\n        if (list == null) {\n            list = new ArrayList<>();\n            oldWay.put(key, list);\n        }\n        list.add(42);\n\n        // With computeIfAbsent:\n        Map<String, List<Integer>> modern = new HashMap<>();\n        modern.computeIfAbsent(\"scores\", k -> new ArrayList<>()).add(42);\n        modern.computeIfAbsent(\"scores\", k -> new ArrayList<>()).add(100);\n        System.out.println(\"computeIfAbsent: \" + modern);\n\n        // ---- merge ----\n        // Word count with merge\n        String text = \"the quick brown fox jumps over the lazy dog the\";\n        Map<String, Integer> wordCount = new HashMap<>();\n        for (String word : text.split(\" \")) {\n            wordCount.merge(word, 1, Integer::sum);\n        }\n        System.out.println(\"Word count: \" + wordCount);\n\n        // Merge for combining maps\n        Map<String, String> m1 = new HashMap<>(Map.of(\"a\", \"alpha\", \"b\", \"beta\"));\n        Map<String, String> m2 = new HashMap<>(Map.of(\"b\", \"bravo\", \"c\", \"charlie\"));\n        m2.forEach((k, v) -> m1.merge(k, v, (oldVal, newVal) -> oldVal + \"|\" + newVal));\n        System.out.println(\"Merged: \" + m1); // a=alpha, b=beta|bravo, c=charlie\n\n        // ---- computeIfPresent ----\n        Map<String, Integer> stock = new HashMap<>(Map.of(\"Apples\", 10, \"Oranges\", 0));\n        stock.computeIfPresent(\"Apples\", (k, v) -> v - 3); // deduct\n        stock.computeIfPresent(\"Oranges\", (k, v) -> v - 1); // stays 0\n        System.out.println(\"Stock: \" + stock);\n\n        // ---- putIfAbsent vs computeIfAbsent ----\n        // putIfAbsent inserts the value even if it requires computation (eager)\n        // computeIfAbsent only computes if absent (lazy) → use this for expensive computations\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-mapof-mapcopyof-and-immutable-maps",
      children: "4.9 Map.of, Map.copyOf, and Immutable Maps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.map;\n\nimport java.util.*;\n\npublic class ImmutableMapDemo {\n    public static void main(String[] args) {\n        // Map.of → up to 10 key-value pairs, no nulls\n        Map<String, Integer> small = Map.of(\n            \"Alice\", 95,\n            \"Bob\", 87,\n            \"Charlie\", 92\n        );\n        System.out.println(\"Map.of: \" + small);\n\n        // Map.ofEntries → arbitrary number of entries\n        Map<String, Integer> larger = Map.ofEntries(\n            Map.entry(\"A\", 1),\n            Map.entry(\"B\", 2),\n            Map.entry(\"C\", 3),\n            Map.entry(\"D\", 4)\n            // ... any number\n        );\n        System.out.println(\"Map.ofEntries: \" + larger);\n\n        // Map.copyOf → unmodifiable copy\n        Map<String, Integer> mutable = new HashMap<>();\n        mutable.put(\"X\", 10);\n        Map<String, Integer> frozen = Map.copyOf(mutable);\n        System.out.println(\"Map.copyOf: \" + frozen);\n        // frozen.put(\"Y\", 20); // throws UnsupportedOperationException\n\n        // Nested immutability note: the map is shallowly immutable\n        // Values that are mutable collections can still be modified\n        Map<String, List<Integer>> nestedMutable = Map.of(\n            \"scores\", new ArrayList<>(List.of(1, 2, 3))\n        );\n        nestedMutable.get(\"scores\").add(4); // allowed! → list is mutable\n        System.out.println(\"Modified nested: \" + nestedMutable);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-queue--deque",
      children: "5. Queue & Deque"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-queue-interface",
      children: "5.1 Queue Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Queue<E>"
      }), " represents a collection for holding elements prior to processing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two groups of methods"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throws exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns special value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "add(e)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "offer(e)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "poll()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "element()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "peek()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Queue<E> extends Collection<E> {\n    boolean offer(E e);   // insert\n    E poll();             // retrieve and remove (null if empty)\n    E peek();             // retrieve without remove (null if empty)\n    // Inherited from Collection:\n    // boolean add(E e);  // insert (throws IllegalStateException on capacity limit)\n    // E remove();        // retrieve and remove (throws NoSuchElementException)\n    // E element();       // retrieve without remove (throws NoSuchElementException)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-priorityqueue",
      children: "5.2 PriorityQueue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PriorityQueue<E>"
      }), " is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unbounded priority queue"
      }), " backed by a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary heap"
      }), " (min-heap by default)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["O(log n) for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "offer"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "poll"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["O(1) for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "peek"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not thread-safe (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PriorityBlockingQueue"
        }), " for concurrent access)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iteration order is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not sorted"
        }), " → you must poll to get elements in priority order"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.queue;\n\nimport java.util.*;\n\npublic class PriorityQueueDemo {\n    public static void main(String[] args) {\n        // Min-heap (default) → natural ordering\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n        minHeap.offer(5);\n        minHeap.offer(1);\n        minHeap.offer(9);\n        minHeap.offer(3);\n        minHeap.offer(7);\n\n        System.out.println(\"PriorityQueue (polling in order):\");\n        while (!minHeap.isEmpty()) {\n            System.out.print(minHeap.poll() + \" \"); // 1 3 5 7 9\n        }\n        System.out.println();\n\n        // Max-heap via Comparator.reverseOrder()\n        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());\n        maxHeap.offerAll(List.of(5, 1, 9, 3, 7));\n\n        // Custom comparator → shorter jobs first\n        record Job(int priority, String name) {}\n        PriorityQueue<Job> jobQueue = new PriorityQueue<>(\n            Comparator.comparingInt(Job::priority)\n        );\n        jobQueue.offer(new Job(3, \"Low urgency\"));\n        jobQueue.offer(new Job(1, \"Critical fix\"));\n        jobQueue.offer(new Job(2, \"Important feature\"));\n\n        while (!jobQueue.isEmpty()) {\n            Job j = jobQueue.poll();\n            System.out.println(\"Processing: \" + j.name() + \" (priority \" + j.priority() + \")\");\n        }\n\n        // Important: iteration order is NOT sorted\n        PriorityQueue<Integer> pq = new PriorityQueue<>(List.of(5, 1, 9, 3, 7));\n        System.out.println(\"Iteration order (unsorted): \" + pq);\n        // Poll to get sorted output\n        var temp = new ArrayList<Integer>();\n        while (!pq.isEmpty()) temp.add(pq.poll());\n        System.out.println(\"Polled order (sorted): \" + temp);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-arraydeque",
      children: "5.3 ArrayDeque"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ArrayDeque<E>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resizable array"
      }), " implementation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque<E>"
      }), ". It is faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedList"
      }), " as a queue or stack and has no capacity restrictions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["O(1) amortized for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addFirst"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addLast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "removeFirst"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "removeLast"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never backed by a linked list → uses a circular array"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not thread-safe"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.queue;\n\nimport java.util.*;\n\npublic class ArrayDequeDemo {\n    public static void main(String[] args) {\n        // As a stack → preferred over Stack class\n        Deque<String> stack = new ArrayDeque<>();\n        stack.push(\"Bottom\");\n        stack.push(\"Middle\");\n        stack.push(\"Top\");\n        System.out.println(\"Stack:\");\n        while (!stack.isEmpty()) {\n            System.out.println(\"  \" + stack.pop());\n        }\n\n        // As a queue (FIFO)\n        Deque<String> queue = new ArrayDeque<>();\n        queue.offer(\"First\");\n        queue.offer(\"Second\");\n        queue.offer(\"Third\");\n        System.out.println(\"Queue:\");\n        while (!queue.isEmpty()) {\n            System.out.println(\"  \" + queue.poll());\n        }\n\n        // Double-ended operations\n        Deque<Integer> deque = new ArrayDeque<>();\n        deque.addFirst(1);\n        deque.addLast(2);\n        deque.addFirst(0);\n        deque.addLast(3);\n        System.out.println(\"Deque: \" + deque); // [0, 1, 2, 3]\n\n        System.out.println(\"First: \" + deque.getFirst()); // 0\n        System.out.println(\"Last: \" + deque.getLast());   // 3\n        deque.removeFirst();\n        deque.removeLast();\n        System.out.println(\"After remove first/last: \" + deque); // [1, 2]\n\n        // Process in a work-stealing pattern\n        Deque<Runnable> workQueue = new ArrayDeque<>();\n        workQueue.addLast(() -> System.out.println(\"Task 1\"));\n        workQueue.addLast(() -> System.out.println(\"Task 2\"));\n\n        // Worker thread takes from head\n        Runnable task = workQueue.pollFirst();\n        task.run();\n\n        // Internal: circular array\n        // Elements stored in Object[] elements\n        // head and tail pointers wrap around the array\n        // Array doubles when full\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-linkedlist-as-queue",
      children: "5.4 LinkedList as Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedList"
      }), " implements both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque"
      }), ", so it can serve as a FIFO queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.queue;\n\nimport java.util.*;\n\npublic class LinkedListAsQueueDemo {\n    public static void main(String[] args) {\n        // Using LinkedList as a queue\n        Queue<String> queue = new LinkedList<>();\n        queue.offer(\"A\");\n        queue.offer(\"B\");\n        queue.offer(\"C\");\n\n        System.out.println(\"Queue peek: \" + queue.peek()); // A\n        System.out.println(\"Queue poll: \" + queue.poll()); // A\n        System.out.println(\"Queue after poll: \" + queue);  // [B, C]\n\n        // Deque methods on LinkedList\n        Deque<String> deque = (Deque<String>) queue;\n        deque.addFirst(\"First\");\n        deque.addLast(\"Last\");\n        System.out.println(\"As Deque: \" + deque);\n\n        // Performance note:\n        // ArrayDeque outperforms LinkedList as queue/stack in almost all scenarios\n        // LinkedList only wins for frequent middle insertion\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-blockingqueue-overview",
      children: "5.5 BlockingQueue Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BlockingQueue<E>"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Queue"
      }), " with blocking operations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "put(e)"
        }), " → inserts, blocks if full (bounded queues)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "take()"
        }), " → retrieves and removes, blocks if empty"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "offer(e, timeout, TimeUnit)"
        }), " → inserts with timeout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "poll(timeout, TimeUnit)"
        }), " → retrieves with timeout"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.queue;\n\nimport java.util.concurrent.*;\nimport java.util.*;\n\npublic class BlockingQueueDemo {\n    public static void main(String[] args) throws InterruptedException {\n        // ---- ArrayBlockingQueue - bounded, fair or unfair ----\n        BlockingQueue<Integer> bounded = new ArrayBlockingQueue<>(2);\n        bounded.put(1);\n        bounded.put(2);\n        // bounded.put(3); // blocks until space is available\n\n        System.out.println(\"Bounded queue take: \" + bounded.take());\n        System.out.println(\"Bounded queue take: \" + bounded.take());\n\n        // ---- LinkedBlockingQueue - optionally bounded ----\n        BlockingQueue<String> linked = new LinkedBlockingQueue<>();\n        linked.put(\"A\");\n        linked.put(\"B\");\n        System.out.println(\"LinkedBlockingQueue: \" + linked.take());\n\n        // ---- PriorityBlockingQueue - unbounded, heap-based ----\n        BlockingQueue<Integer> pqb = new PriorityBlockingQueue<>();\n        pqb.put(3);\n        pqb.put(1);\n        pqb.put(2);\n        System.out.println(\"PriorityBlockingQueue poll: \" + pqb.take()); // 1\n\n        // ---- DelayQueue - elements must implement Delayed ----\n        BlockingQueue<Delayed> delayQueue = new DelayQueue<>();\n\n        // ---- SynchronousQueue - handoff queue (zero capacity) ----\n        SynchronousQueue<String> handoff = new SynchronousQueue<>();\n\n        // Producer in one thread, consumer in another\n        // handoff.put(\"message\");  // blocks until another thread calls take()\n        // String msg = handoff.take();\n\n        // Producer-consumer example with ExecutorService\n        BlockingQueue<Integer> buffer = new LinkedBlockingQueue<>(5);\n        Runnable producer = () -> {\n            try {\n                for (int i = 0; i < 10; i++) {\n                    buffer.put(i);\n                    System.out.println(\"Produced: \" + i);\n                }\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n        };\n        Runnable consumer = () -> {\n            try {\n                for (int i = 0; i < 10; i++) {\n                    int value = buffer.take();\n                    System.out.println(\"Consumed: \" + value);\n                }\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n        };\n\n        var executor = Executors.newFixedThreadPool(2);\n        executor.submit(producer);\n        executor.submit(consumer);\n        executor.shutdown();\n        executor.awaitTermination(1, TimeUnit.SECONDS);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-comparable-vs-comparator",
      children: "6. Comparable vs Comparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ability to compare objects is fundamental to sorting and ordering in collections."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-comparable--natural-ordering",
      children: "6.1 Comparable → Natural Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Comparable<T>"
      }), " defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "natural ordering"
      }), " of a class. A class implements Comparable to indicate its elements have a default sort order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface Comparable<T> {\n    int compareTo(T other);\n    // Returns:\n    //   negative → this < other\n    //   zero     → this == other\n    //   positive → this > other\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.compare;\n\nimport java.util.*;\n\nrecord Employee(int id, String name, double salary) implements Comparable<Employee> {\n    // Natural ordering by ID\n    @Override\n    public int compareTo(Employee other) {\n        return Integer.compare(this.id, other.id);\n    }\n}\n\npublic class ComparableDemo {\n    public static void main(String[] args) {\n        var employees = new ArrayList<>(List.of(\n            new Employee(3, \"Alice\", 95000),\n            new Employee(1, \"Bob\", 85000),\n            new Employee(2, \"Charlie\", 75000)\n        ));\n\n        Collections.sort(employees); // uses compareTo\n        System.out.println(\"Sorted by ID: \" + employees);\n\n        // TreeSet uses Comparable\n        Set<Employee> byId = new TreeSet<>(employees);\n        System.out.println(\"TreeSet by ID: \" + byId);\n\n        // Some standard classes that implement Comparable:\n        // String (lexicographic), Integer, Double, BigDecimal\n        // Date, LocalDate, LocalDateTime, UUID\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-comparator--custom-ordering",
      children: "6.2 Comparator → Custom Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Comparator<T>"
      }), " defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "custom comparison logic"
      }), " outside the compared class. Use it when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The natural ordering is inappropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need multiple sort orders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The class doesn't implement Comparable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.compare;\n\nimport java.util.*;\n\nrecord Product(int id, String name, double price, int quantity) {}\n\npublic class ComparatorDemo {\n    public static void main(String[] args) {\n        var products = new ArrayList<>(List.of(\n            new Product(1, \"Laptop\", 1299.99, 5),\n            new Product(2, \"Mouse\", 29.99, 100),\n            new Product(3, \"Keyboard\", 99.99, 30),\n            new Product(4, \"Monitor\", 399.99, 15)\n        ));\n\n        // Sort by price ascending\n        products.sort(Comparator.comparingDouble(Product::price));\n        System.out.println(\"By price: \" + products);\n\n        // Sort by price descending\n        products.sort(Comparator.comparingDouble(Product::price).reversed());\n        System.out.println(\"By price descending: \" + products);\n\n        // Sort by name (alphabetical)\n        products.sort(Comparator.comparing(Product::name));\n        System.out.println(\"By name: \" + products);\n\n        // Sort by quantity, then by price (if equal)\n        products.sort(Comparator\n            .comparingInt(Product::quantity)\n            .thenComparingDouble(Product::price)\n        );\n        System.out.println(\"By qty then price: \" + products);\n\n        // Sort by name length, then reverse by price\n        products.sort(Comparator\n            .<Product, Integer>comparing(p -> p.name().length())\n            .thenComparing(Comparator.comparingDouble(Product::price).reversed())\n        );\n        System.out.println(\"By name length then price desc: \" + products);\n\n        // Using a custom comparator for TreeMap\n        Map<Product, String> byNameReverse = new TreeMap<>(\n            Comparator.comparing(Product::name).reversed()\n        );\n        for (var p : products) byNameReverse.put(p, p.name());\n        System.out.println(\"TreeMap name reverse: \" + byNameReverse);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-comparator-method-chaining",
      children: "6.3 Comparator Method Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Comparator"
      }), " interface provides a rich set of static and default methods for building comparators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.compare;\n\nimport java.util.*;\n\nrecord Person(String firstName, String lastName, int age) {}\n\npublic class ComparatorChainDemo {\n    public static void main(String[] args) {\n        var people = new ArrayList<>(List.of(\n            new Person(\"Alice\", \"Smith\", 30),\n            new Person(\"Bob\", \"Jones\", 25),\n            new Person(\"Alice\", \"Brown\", 35),\n            new Person(\"Charlie\", \"Smith\", 25),\n            new Person(\"Alice\", \"Smith\", 25)\n        ));\n\n        // Chain: last name, then first name, then age\n        Comparator<Person> chain = Comparator\n            .comparing(Person::lastName)\n            .thenComparing(Person::firstName)\n            .thenComparingInt(Person::age);\n\n        people.sort(chain);\n        people.forEach(System.out::println);\n\n        // Reverse entire chain\n        people.sort(chain.reversed());\n        System.out.println(\"\\nReversed chain:\");\n\n        // nullsFirst / nullsLast → handle null values\n        List<String> names = new ArrayList<>(Arrays.asList(\"Charlie\", null, \"Alice\", \"Bob\", null));\n        names.sort(Comparator.nullsFirst(Comparator.naturalOrder()));\n        System.out.println(\"nullsFirst: \" + names);\n\n        names.sort(Comparator.nullsLast(Comparator.naturalOrder()));\n        System.out.println(\"nullsLast: \" + names);\n\n        // null-safe with custom comparator\n        Comparator<String> nullSafe = Comparator\n            .nullsLast(Comparator.comparingInt(String::length));\n        names.sort(nullSafe);\n        System.out.println(\"null-safe by length: \" + names);\n\n        // Extracting keys that may be null\n        record Item(String category, String name) {}\n        List<Item> items = Arrays.asList(\n            new Item(null, \"Thing\"),\n            new Item(\"A\", \"Alpha\"),\n            new Item(\"B\", \"Beta\"),\n            new Item(null, \"Other\")\n        );\n\n        items.sort(Comparator\n            .nullsLast(Comparator.comparing(Item::category))\n            .thenComparing(Item::name)\n        );\n        System.out.println(\"Items: \" + items);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-comparator-predefined-helpers",
      children: "6.4 Comparator Predefined Helpers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.compare;\n\nimport java.util.*;\n\npublic class ComparatorHelpersDemo {\n    public static void main(String[] args) {\n        // Natural order and reverse\n        Comparator<Integer> natural = Comparator.naturalOrder();\n        Comparator<Integer> reversed = Comparator.reverseOrder();\n\n        List<Integer> nums = List.of(3, 1, 4, 1, 5, 9);\n        nums.sort(natural);\n        System.out.println(\"Natural: \" + nums);\n        nums.sort(reversed);\n        System.out.println(\"Reversed: \" + nums);\n\n        // comparingInt, comparingLong, comparingDouble\n        List<String> strings = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n        strings.sort(Comparator.comparingInt(String::length));\n        System.out.println(\"By length: \" + strings);\n\n        // thenComparing with non-Comparable keys\n        record Point(int x, int y) {}\n        List<Point> points = List.of(new Point(1, 5), new Point(2, 3), new Point(1, 2));\n        points.sort(Comparator\n            .comparingInt(Point::x)\n            .thenComparing(Comparator.comparingInt(Point::y).reversed())\n        );\n        System.out.println(\"Points: \" + points);\n\n        // Comparing by the result of a function\n        Map<String, Integer> scores = new HashMap<>(Map.of(\"Alice\", 95, \"Bob\", 87, \"Charlie\", 92));\n        List<String> names = new ArrayList<>(scores.keySet());\n        names.sort(Comparator.comparing(scores::get).reversed());\n        System.out.println(\"Sorted by score: \" + names);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-collections-utility-methods--deep-dive",
      children: "7. Collections Utility Methods → Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.Collections"
      }), " class contains algorithms that operate on or return collections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.utility;\n\nimport java.util.*;\n\npublic class CollectionsAlgorithmDemo {\n    public static void main(String[] args) {\n        var numbers = new ArrayList<>(List.of(5, 3, 1, 4, 2, 6, 8, 7));\n\n        // ---- Sorting ----\n        Collections.sort(numbers);\n        System.out.println(\"Sorted: \" + numbers);\n\n        // ---- Binary Search (list must be sorted) ----\n        int idx = Collections.binarySearch(numbers, 5);\n        System.out.println(\"Binary search for 5: \" + idx); // positive = found\n        int notFound = Collections.binarySearch(numbers, 9);\n        System.out.println(\"Binary search for 9: \" + notFound); // negative = insertion point - 1\n\n        // ---- Reverse ----\n        Collections.reverse(numbers);\n        System.out.println(\"Reversed: \" + numbers);\n\n        // ---- Shuffle ----\n        Collections.shuffle(numbers);\n        System.out.println(\"Shuffled: \" + numbers);\n\n        // Shuffle with a controlled random seed for reproducibility\n        Random rng = new Random(42);\n        Collections.shuffle(numbers, rng);\n        System.out.println(\"Reproducible shuffle: \" + numbers);\n\n        // ---- Min / Max ----\n        System.out.println(\"Min: \" + Collections.min(numbers));\n        System.out.println(\"Max: \" + Collections.max(numbers));\n\n        // ---- Frequency ----\n        var withDups = List.of(1, 2, 3, 2, 4, 2, 5);\n        System.out.println(\"Frequency of 2: \" + Collections.frequency(withDups, 2));\n\n        // ---- Disjoint (no common elements) ----\n        List<String> group1 = List.of(\"A\", \"B\", \"C\");\n        List<String> group2 = List.of(\"D\", \"E\", \"F\");\n        List<String> group3 = List.of(\"C\", \"D\", \"E\");\n        System.out.println(\"Disjoint (g1, g2): \" + Collections.disjoint(group1, group2)); // true\n        System.out.println(\"Disjoint (g1, g3): \" + Collections.disjoint(group1, group3)); // false\n\n        // ---- fill ----\n        var placeholder = new ArrayList<>(Collections.nCopies(5, 0));\n        Collections.fill(placeholder, 42);\n        System.out.println(\"Filled: \" + placeholder);\n\n        // ---- copy (source -> dest) ----\n        var dest = new ArrayList<>(Collections.nCopies(5, 0));\n        var src = List.of(1, 2, 3, 4, 5);\n        Collections.copy(dest, src);  // dest must be at least as long as src\n        System.out.println(\"Copied: \" + dest);\n\n        // ---- rotate ----\n        var rotated = new ArrayList<>(List.of(1, 2, 3, 4, 5));\n        Collections.rotate(rotated, 2);\n        System.out.println(\"Rotated by 2: \" + rotated); // [4, 5, 1, 2, 3]\n        Collections.rotate(rotated, -2);\n        System.out.println(\"Rotated back: \" + rotated);\n\n        // ---- replaceAll ----\n        var replaceDemo = new ArrayList<>(List.of(\"A\", \"B\", \"A\", \"C\", \"A\"));\n        Collections.replaceAll(replaceDemo, \"A\", \"Z\");\n        System.out.println(\"Replaced all A with Z: \" + replaceDemo);\n\n        // ---- swap ----\n        var swapDemo = new ArrayList<>(List.of(1, 2, 3, 4, 5));\n        Collections.swap(swapDemo, 0, 4);\n        System.out.println(\"Swapped first and last: \" + swapDemo);\n\n        // ---- indexOfSubList / lastIndexOfSubList ----\n        var fullList = List.of(1, 2, 3, 4, 5, 3, 4, 5);\n        var subList = List.of(3, 4);\n        System.out.println(\"First occurrence of [3,4]: \" + Collections.indexOfSubList(fullList, subList));\n        System.out.println(\"Last occurrence of [3,4]: \" + Collections.lastIndexOfSubList(fullList, subList));\n\n        // ---- nCopies (immutable list of repeated value) ----\n        List<String> repeated = Collections.nCopies(3, \"Repeat\");\n        System.out.println(\"nCopies: \" + repeated);\n        // repeated.add(\"X\"); // UnsupportedOperationException\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-unmodifiable-and-synchronized-wrappers",
      children: "7.1 Unmodifiable and Synchronized Wrappers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.utility;\n\nimport java.util.*;\n\npublic class WrapperDemo {\n    public static void main(String[] args) {\n        var original = new ArrayList<>(List.of(1, 2, 3));\n\n        // Unmodifiable view → changes to original are reflected\n        List<Integer> unmod = Collections.unmodifiableList(original);\n        original.add(4); // unmod now sees it\n        System.out.println(\"Unmodifiable view: \" + unmod);\n        // unmod.remove(0); // throws UnsupportedOperationException\n\n        // Synchronized wrapper → for safe concurrent access\n        List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());\n\n        // Must synchronize on wrapper during iteration!\n        synchronized (syncList) {\n            for (int n : syncList) {\n                System.out.println(n);\n            }\n        }\n\n        // Wrapping a map key/values set\n        var map = new HashMap<>(Map.of(\"A\", 1, \"B\", 2));\n        Set<String> unmodKeys = Collections.unmodifiableSet(map.keySet());\n        // map.put(\"C\", 3); // unmodKeys reflects this change (view)\n\n        // Checked collections → type-safe at runtime\n        List<String> checked = Collections.checkedList(new ArrayList<>(), String.class);\n        checked.add(\"Safe\");\n        // checked.add(42); // ClassCastException at runtime (generic info erased otherwise)\n\n        // Empty collections → type-safe, immutable\n        List<String> empty = Collections.emptyList();\n        Set<Integer> emptySet = Collections.emptySet();\n        Map<String, Integer> emptyMap = Collections.emptyMap();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-stream-api",
      children: "8. Stream API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stream API"
      }), " (Java 8+) provides a functional approach to sequence operations on collections. A stream is a sequence of elements supporting sequential and parallel aggregate operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-stream-creation",
      children: "8.1 Stream Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.streams;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class StreamCreationDemo {\n    public static void main(String[] args) {\n        // From a Collection\n        List<String> list = List.of(\"a\", \"b\", \"c\");\n        Stream<String> stream1 = list.stream();\n        Stream<String> parallel1 = list.parallelStream();\n\n        // From an array\n        String[] array = {\"x\", \"y\", \"z\"};\n        Stream<String> stream2 = Arrays.stream(array);\n        Stream<String> stream3 = Stream.of(array);\n\n        // Of individual values\n        Stream<Integer> ints = Stream.of(1, 2, 3, 4, 5);\n\n        // Generate / iterate (infinite streams)\n        Stream<Double> randoms = Stream.generate(Math::random).limit(5);\n        Stream<Integer> evens = Stream.iterate(0, n -> n + 2).limit(10);\n\n        // From Java 9+ → iterate with predicate\n        Stream<Integer> below100 = Stream.iterate(0, n -> n < 100, n -> n + 1);\n\n        // From Builder\n        Stream<String> built = Stream.<String>builder()\n            .add(\"A\").add(\"B\").add(\"C\").build();\n\n        // From a range (IntStream)\n        IntStream range = IntStream.rangeClosed(1, 10);\n        IntStream rangeOpen = IntStream.range(1, 10); // 1..9\n\n        // From a string\n        IntStream chars = \"hello\".chars(); // IntStream of char codes\n\n        // From random\n        new Random().ints(5, 0, 100).forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        // Concatenating streams\n        Stream<String> concat = Stream.concat(\n            Stream.of(\"A\", \"B\"),\n            Stream.of(\"C\", \"D\")\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-intermediate-operations",
      children: "8.2 Intermediate Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Intermediate operations return a new stream. They are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lazy"
      }), " → nothing is evaluated until a terminal operation is called."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.streams;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class IntermediateOpsDemo {\n    public static void main(String[] args) {\n        List<String> words = List.of(\n            \"apple\", \"banana\", \"cherry\", \"date\", \"elderberry\",\n            \"fig\", \"grape\", \"apple\", \"banana\"\n        );\n\n        // ---- filter ----\n        List<String> filtered = words.stream()\n            .filter(w -> w.length() > 4)\n            .toList();\n        System.out.println(\"Filtered (>4 chars): \" + filtered);\n\n        // ---- map ----\n        List<Integer> lengths = words.stream()\n            .map(String::length)\n            .toList();\n        System.out.println(\"Lengths: \" + lengths);\n\n        // ---- flatMap ----\n        List<List<Integer>> nested = List.of(\n            List.of(1, 2), List.of(3, 4, 5), List.of(6)\n        );\n        List<Integer> flattened = nested.stream()\n            .flatMap(Collection::stream)\n            .toList();\n        System.out.println(\"FlatMap: \" + flattened);\n\n        // flatMap for strings to characters\n        List<String> words2 = List.of(\"hello\", \"world\");\n        List<String> chars2 = words2.stream()\n            .flatMap(s -> Arrays.stream(s.split(\"\")))\n            .distinct()\n            .toList();\n        System.out.println(\"Unique chars: \" + chars2);\n\n        // ---- distinct ----\n        List<String> unique = words.stream()\n            .distinct()\n            .toList();\n        System.out.println(\"Distinct: \" + unique);\n\n        // ---- sorted ----\n        List<String> alphaSorted = words.stream()\n            .distinct()\n            .sorted()\n            .toList();\n        System.out.println(\"Sorted: \" + alphaSorted);\n\n        // sorted with comparator\n        List<String> byLength = words.stream()\n            .distinct()\n            .sorted(Comparator.comparingInt(String::length))\n            .toList();\n        System.out.println(\"Sorted by length: \" + byLength);\n\n        // ---- peek (debugging) ----\n        long count = words.stream()\n            .peek(w -> System.out.println(\"Processing: \" + w))\n            .filter(w -> w.startsWith(\"b\"))\n            .peek(w -> System.out.println(\"  -> kept: \" + w))\n            .count();\n        System.out.println(\"Count starting with 'b': \" + count);\n\n        // ---- limit ----\n        List<Integer> first3 = Stream.iterate(1, n -> n + 1)\n            .limit(3)\n            .toList();\n        System.out.println(\"First 3 naturals: \" + first3);\n\n        // ---- skip ----\n        List<Integer> after5 = Stream.iterate(1, n -> n + 1)\n            .skip(5)\n            .limit(3)\n            .toList();\n        System.out.println(\"After skipping 5: \" + after5);\n\n        // ---- takeWhile / dropWhile (Java 9+) ----\n        List<Integer> takeWhile = Stream.of(2, 4, 6, 7, 8, 10)\n            .takeWhile(n -> n % 2 == 0)\n            .toList();\n        System.out.println(\"TakeWhile even: \" + takeWhile); // [2, 4, 6]\n\n        List<Integer> dropWhile = Stream.of(2, 4, 6, 7, 8, 10)\n            .dropWhile(n -> n % 2 == 0)\n            .toList();\n        System.out.println(\"DropWhile even: \" + dropWhile); // [7, 8, 10]\n\n        // ---- mapMulti (Java 16+) → flatMap alternative ----\n        List<Integer> expanded = Stream.of(1, 2, 3)\n            .<Integer>mapMulti((n, consumer) -> {\n                consumer.accept(n);\n                consumer.accept(n * 10);\n            })\n            .toList();\n        System.out.println(\"MapMulti: \" + expanded); // [1, 10, 2, 20, 3, 30]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-terminal-operations",
      children: "8.3 Terminal Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Terminal operations produce a result or side-effect. After a terminal operation, the stream is consumed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.streams;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class TerminalOpsDemo {\n    public static void main(String[] args) {\n        var numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n        // ---- forEach ----\n        System.out.print(\"forEach: \");\n        numbers.stream().forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        // forEachOrdered → preserves encounter order in parallel streams\n        System.out.print(\"Parallel forEachOrdered: \");\n        numbers.parallelStream().forEachOrdered(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        // ---- collect ----\n        List<Integer> collected = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(\"Collected evens: \" + collected);\n\n        // ---- toList (Java 16+, unmodifiable) ----\n        List<Integer> toListResult = numbers.stream()\n            .map(n -> n * 2)\n            .toList(); // unmodifiable\n        System.out.println(\"Stream.toList(): \" + toListResult);\n\n        // ---- reduce ----\n        // Sum → identity is the initial value\n        int sum = numbers.stream().reduce(0, Integer::sum);\n        System.out.println(\"Sum: \" + sum);\n\n        // Product\n        int product = numbers.stream().reduce(1, (a, b) -> a * b);\n        System.out.println(\"Product of 1-5: \" +\n            numbers.stream().limit(5).reduce(1, (a, b) -> a * b));\n\n        // Optional reduce (no identity)\n        Optional<Integer> maxOpt = numbers.stream().reduce(Integer::max);\n        maxOpt.ifPresent(m -> System.out.println(\"Max: \" + m));\n\n        // ---- count ----\n        long cnt = numbers.stream().filter(n -> n > 5).count();\n        System.out.println(\"Count >5: \" + cnt);\n\n        // ---- anyMatch / allMatch / noneMatch ----\n        boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);\n        boolean allPositive = numbers.stream().allMatch(n -> n > 0);\n        boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);\n        System.out.println(\"Has even: \" + hasEven);\n        System.out.println(\"All positive: \" + allPositive);\n        System.out.println(\"None negative: \" + noneNegative);\n\n        // ---- findFirst / findAny ----\n        Optional<Integer> firstEven = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .findFirst();\n        firstEven.ifPresent(n -> System.out.println(\"First even: \" + n));\n\n        // findAny → non-deterministic in parallel streams, prefer when order not needed\n        Optional<Integer> anyEven = numbers.parallelStream()\n            .filter(n -> n % 2 == 0)\n            .findAny();\n        anyEven.ifPresent(n -> System.out.println(\"Any even: \" + n));\n\n        // ---- min / max ----\n        Optional<Integer> min = numbers.stream().min(Integer::compareTo);\n        Optional<Integer> max = numbers.stream().max(Integer::compareTo);\n        System.out.println(\"Min: \" + min.orElseThrow() + \", Max: \" + max.orElseThrow());\n\n        // ---- toArray ----\n        Integer[] array = numbers.stream()\n            .filter(n -> n > 3)\n            .toArray(Integer[]::new);\n        System.out.println(\"Array: \" + Arrays.toString(array));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-putting-it-all-together",
      children: "8.4 Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.streams;\n\nimport java.util.*;\nimport java.util.stream.*;\n\nrecord Transaction(String id, String category, double amount, boolean completed) {}\n\npublic class StreamPipelineDemo {\n    public static void main(String[] args) {\n        var transactions = List.of(\n            new Transaction(\"T1\", \"GROCERY\", 45.50, true),\n            new Transaction(\"T2\", \"ELECTRONICS\", 1299.99, true),\n            new Transaction(\"T3\", \"GROCERY\", 32.00, false),\n            new Transaction(\"T4\", \"CLOTHING\", 89.95, true),\n            new Transaction(\"T5\", \"ELECTRONICS\", 29.99, true),\n            new Transaction(\"T6\", \"GROCERY\", 150.00, true),\n            new Transaction(\"T7\", \"CLOTHING\", 200.00, false)\n        );\n\n        // Pipeline: completed, non-grocery, sorted by amount descending\n        List<String> result = transactions.stream()\n            .filter(Transaction::completed)\n            .filter(t -> !t.category().equals(\"GROCERY\"))\n            .sorted(Comparator.comparingDouble(Transaction::amount).reversed())\n            .map(t -> t.id() + \": $\" + t.amount() + \" [\" + t.category() + \"]\")\n            .toList();\n\n        System.out.println(\"Completed non-grocery transactions (by amount):\");\n        result.forEach(System.out::println);\n\n        // Nested pipelines: group completed by category, count\n        Map<String, Long> completedByCategory = transactions.stream()\n            .filter(Transaction::completed)\n            .collect(Collectors.groupingBy(\n                Transaction::category,\n                Collectors.counting()\n            ));\n        System.out.println(\"\\nCompleted by category: \" + completedByCategory);\n\n        // Find the most expensive completed transaction\n        Optional<Transaction> mostExpensive = transactions.stream()\n            .filter(Transaction::completed)\n            .max(Comparator.comparingDouble(Transaction::amount));\n        mostExpensive.ifPresent(t ->\n            System.out.println(\"\\nMost expensive completed: \" + t));\n\n        // Total completed amount\n        double totalCompleted = transactions.stream()\n            .filter(Transaction::completed)\n            .mapToDouble(Transaction::amount)\n            .sum();\n        System.out.printf(\"Total completed: $%.2f%n\", totalCompleted);\n\n        // Any expensive pending?\n        boolean hasExpensivePending = transactions.stream()\n            .filter(t -> !t.completed())\n            .anyMatch(t -> t.amount() > 100);\n        System.out.println(\"Has expensive pending: \" + hasExpensivePending);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-collectors",
      children: "9. Collectors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Collectors"
      }), " utility class provides implementations of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector"
      }), " for common reduction operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-basic-collectors",
      children: "9.1 Basic Collectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.collectors;\n\nimport java.util.*;\nimport java.util.stream.*;\n\nrecord Book(String title, String author, int year, double price) {}\n\npublic class BasicCollectorsDemo {\n    public static void main(String[] args) {\n        var books = List.of(\n            new Book(\"1984\", \"George Orwell\", 1949, 14.99),\n            new Book(\"Brave New World\", \"Aldous Huxley\", 1932, 13.99),\n            new Book(\"Fahrenheit 451\", \"Ray Bradbury\", 1953, 12.99),\n            new Book(\"The Handmaid's Tale\", \"Margaret Atwood\", 1985, 15.99),\n            new Book(\"Animal Farm\", \"George Orwell\", 1945, 9.99),\n            new Book(\"The Road\", \"Cormac McCarthy\", 2006, 11.99)\n        );\n\n        // ---- toList ----\n        List<String> titles = books.stream()\n            .map(Book::title)\n            .collect(Collectors.toList());\n        System.out.println(\"Titles: \" + titles);\n\n        // ---- toSet ----\n        Set<String> authors = books.stream()\n            .map(Book::author)\n            .collect(Collectors.toSet());\n        System.out.println(\"Authors (set): \" + authors);\n\n        // ---- toCollection (specify implementation) ----\n        TreeSet<String> sortedAuthors = books.stream()\n            .map(Book::author)\n            .collect(Collectors.toCollection(TreeSet::new));\n        System.out.println(\"Sorted authors: \" + sortedAuthors);\n\n        // ---- joining ----\n        String joined = books.stream()\n            .map(Book::title)\n            .collect(Collectors.joining(\", \"));\n        System.out.println(\"Joined: \" + joined);\n\n        String withPrefixSuffix = books.stream()\n            .map(Book::title)\n            .collect(Collectors.joining(\", \", \"[\", \"]\"));\n        System.out.println(\"Joined (decorated): \" + withPrefixSuffix);\n\n        // ---- summarizing (statistics) ----\n        DoubleSummaryStatistics stats = books.stream()\n            .collect(Collectors.summarizingDouble(Book::price));\n        System.out.println(\"Price stats: count=\" + stats.getCount() +\n            \", avg=$\" + String.format(\"%.2f\", stats.getAverage()) +\n            \", total=$\" + String.format(\"%.2f\", stats.getSum()));\n\n        // ---- mapping ----\n        List<Integer> titleLengths = books.stream()\n            .collect(Collectors.mapping(\n                b -> b.title().length(),\n                Collectors.toList()\n            ));\n        System.out.println(\"Title lengths: \" + titleLengths);\n\n        // ---- filtering (Java 9+) ----\n        List<Book> post1950Books = books.stream()\n            .collect(Collectors.filtering(\n                b -> b.year() > 1950,\n                Collectors.toList()\n            ));\n        System.out.println(\"Post-1950 books: \" +\n            post1950Books.stream().map(Book::title).toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-tomap--various-strategies",
      children: "9.2 toMap → Various Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.collectors;\n\nimport java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\nrecord Product(int id, String name, double price, int quantity) {}\n\npublic class ToMapDemo {\n    public static void main(String[] args) {\n        var products = List.of(\n            new Product(1, \"Laptop\", 1299.99, 5),\n            new Product(2, \"Mouse\", 29.99, 100),\n            new Product(3, \"Keyboard\", 99.99, 30)\n        );\n\n        // Simple toMap → key mapper, value mapper\n        Map<Integer, String> idToName = products.stream()\n            .collect(Collectors.toMap(Product::id, Product::name));\n        System.out.println(\"ID to name: \" + idToName);\n\n        // Value mapper as the product itself\n        Map<Integer, Product> idToProduct = products.stream()\n            .collect(Collectors.toMap(Product::id, Function.identity()));\n        System.out.println(\"Product 2: \" + idToProduct.get(2));\n\n        // toMap with merge function → handle duplicate keys\n        Map<String, Double> highestPriceByName = products.stream()\n            .collect(Collectors.toMap(\n                Product::name,\n                Product::price,\n                (existing, incoming) -> Math.max(existing, incoming)\n            ));\n        System.out.println(\"Highest prices: \" + highestPriceByName);\n\n        // toMap with merge + TreeMap supplier\n        TreeMap<String, Double> sortedPrices = products.stream()\n            .collect(Collectors.toMap(\n                Product::name,\n                Product::price,\n                (a, b) -> a,\n                TreeMap::new\n            ));\n        System.out.println(\"Sorted prices: \" + sortedPrices);\n\n        // ---- groupingBy ----\n        Map<String, List<Product>> byNameFirstChar = products.stream()\n            .collect(Collectors.groupingBy(\n                p -> p.name().substring(0, 1)\n            ));\n        System.out.println(\"Grouped by first letter: \" + byNameFirstChar);\n\n        // groupingBy with downstream collector\n        Map<String, Long> countByFirstChar = products.stream()\n            .collect(Collectors.groupingBy(\n                p -> p.name().substring(0, 1),\n                Collectors.counting()\n            ));\n        System.out.println(\"Count by first letter: \" + countByFirstChar);\n\n        // groupingBy with sum\n        Map<String, Double> totalValueByName = products.stream()\n            .collect(Collectors.groupingBy(\n                Product::name,\n                Collectors.summingDouble(p -> p.price() * p.quantity())\n            ));\n        System.out.println(\"Total value: \" + totalValueByName);\n\n        // groupingBy with mapping\n        Map<String, List<String>> namesByFirstChar = products.stream()\n            .collect(Collectors.groupingBy(\n                p -> p.name().substring(0, 1),\n                Collectors.mapping(Product::name, Collectors.toList())\n            ));\n        System.out.println(\"Names by first char: \" + namesByFirstChar);\n\n        // Multi-level grouping\n        record Sale(String product, String region, double amount) {}\n        var sales = List.of(\n            new Sale(\"Laptop\", \"US\", 1500),\n            new Sale(\"Phone\", \"US\", 800),\n            new Sale(\"Laptop\", \"EU\", 1400),\n            new Sale(\"Phone\", \"EU\", 750),\n            new Sale(\"Laptop\", \"US\", 2000)\n        );\n\n        Map<String, Map<String, List<Sale>>> byProductAndRegion = sales.stream()\n            .collect(Collectors.groupingBy(\n                Sale::product,\n                Collectors.groupingBy(Sale::region)\n            ));\n        System.out.println(\"\\nMulti-level grouping:\");\n        byProductAndRegion.forEach((product, regionMap) -> {\n            System.out.println(\"  \" + product + \": \" + regionMap);\n        });\n\n        // ---- partitioningBy ----\n        Map<Boolean, List<Product>> partitioned = products.stream()\n            .collect(Collectors.partitioningBy(p -> p.price() > 100));\n        System.out.println(\"\\nPartitioned by price > 100:\");\n        System.out.println(\"  Expensive: \" + partitioned.get(true));\n        System.out.println(\"  Cheap: \" + partitioned.get(false));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-advanced-collectors",
      children: "9.3 Advanced Collectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.collectors;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class AdvancedCollectorsDemo {\n    public static void main(String[] args) {\n        var numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n        // ---- teeing (Java 12+) → two collectors in parallel ----\n        record Stats(double sum, double average) {}\n\n        Stats stats = numbers.stream()\n            .collect(Collectors.teeing(\n                Collectors.summingDouble(n -> n),\n                Collectors.averagingDouble(n -> n),\n                Stats::new\n            ));\n        System.out.println(\"Teeing: sum=\" + stats.sum() + \", avg=\" + stats.average());\n\n        // teeing → min and max\n        record MinMax(Integer min, Integer max) {}\n        MinMax minMax = numbers.stream()\n            .collect(Collectors.teeing(\n                Collectors.minBy(Integer::compareTo),\n                Collectors.maxBy(Integer::compareTo),\n                (min, max) -> new MinMax(min.orElse(0), max.orElse(0))\n            ));\n        System.out.println(\"MinMax: \" + minMax);\n\n        // teeing → count and sum simultaneously\n        record CountSum(long count, double sum) {}\n        CountSum countSum = numbers.stream()\n            .collect(Collectors.teeing(\n                Collectors.counting(),\n                Collectors.summingDouble(n -> n),\n                CountSum::new\n            ));\n        System.out.println(\"CountSum: \" + countSum);\n\n        // ---- collectingAndThen → transform after collect ----\n        List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\", \"elderberry\");\n\n        TreeSet<String> sortedByLength = words.stream()\n            .collect(Collectors.collectingAndThen(\n                Collectors.toCollection(() -> new TreeSet<>(Comparator.comparingInt(String::length))),\n                Collections::unmodifiableNavigableSet\n            ));\n        System.out.println(\"Unmodifiable sorted by length: \" + sortedByLength);\n\n        // ---- reducing collector → custom reduction ----\n        Optional<String> longest = words.stream()\n            .collect(Collectors.reducing((a, b) -> a.length() >= b.length() ? a : b));\n        longest.ifPresent(w -> System.out.println(\"Longest word: \" + w));\n\n        // Reducing with identity\n        String concatenatedReduced = words.stream()\n            .collect(Collectors.reducing(\"\", (a, b) -> a + b.toUpperCase()));\n        System.out.println(\"Reduced concat: \" + concatenatedReduced);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-custom-collector",
      children: "9.4 Custom Collector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.collectors;\n\nimport java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class CustomCollectorDemo {\n    public static void main(String[] args) {\n        var words = List.of(\"apple\", \"banana\", \"cherry\", \"date\", \"elderberry\",\n            \"fig\", \"grape\", \"kiwi\", \"lemon\", \"mango\");\n\n        // Custom collector: build a comma-separated string with counter\n        Collector<String, ?, String> numberedCollector = Collector.of(\n            // Supplier: accumulate in a List\n            ArrayList::new,\n            // Accumulator: add element\n            List::add,\n            // Combiner: merge two lists (for parallel)\n            (left, right) -> { left.addAll(right); return left; },\n            // Finisher: transform list to numbered string\n            list -> {\n                var sb = new StringBuilder();\n                for (int i = 0; i < list.size(); i++) {\n                    if (i > 0) sb.append(\", \");\n                    sb.append(i + 1).append(\". \").append(list.get(i));\n                }\n                return sb.toString();\n            },\n            // Characteristics\n            Collector.Characteristics.CONCURRENT\n        );\n\n        String numbered = words.stream().collect(numberedCollector);\n        System.out.println(\"Numbered: \" + numbered);\n\n        // Custom collector: Histogram (frequency map)\n        Collector<String, ?, Map<Character, Long>> firstCharHistogram = Collector.of(\n            HashMap::new,\n            (map, word) -> map.merge(word.charAt(0), 1L, Long::sum),\n            (m1, m2) -> {\n                m2.forEach((k, v) -> m1.merge(k, v, Long::sum));\n                return m1;\n            }\n        );\n\n        Map<Character, Long> histogram = words.stream().collect(firstCharHistogram);\n        System.out.println(\"First char histogram: \" + histogram);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-optional",
      children: "10. Optional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Optional<T>"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "value-based container"
      }), " that may or may not contain a non-null value. It provides a functional alternative to null checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-creation",
      children: "10.1 Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.optional;\n\nimport java.util.*;\n\npublic class OptionalCreationDemo {\n    public static void main(String[] args) {\n        // of → wraps non-null value, NPE if null\n        Optional<String> present = Optional.of(\"Hello\");\n        System.out.println(\"Optional.of: \" + present);\n\n        // ofNullable → wraps possibly-null value\n        Optional<String> nullable1 = Optional.ofNullable(\"World\");\n        Optional<String> nullable2 = Optional.ofNullable(null);\n        System.out.println(\"ofNullable(non-null): \" + nullable1);\n        System.out.println(\"ofNullable(null): \" + nullable2);\n\n        // empty → represents absence\n        Optional<String> empty = Optional.empty();\n        System.out.println(\"Empty: \" + empty);\n\n        // Practical creation from a lookup\n        Map<String, Integer> scores = new HashMap<>(Map.of(\"Alice\", 95));\n        Optional<Integer> aliceScore = Optional.ofNullable(scores.get(\"Alice\"));\n        Optional<Integer> bobScore = Optional.ofNullable(scores.get(\"Bob\"));\n        System.out.println(\"Alice: \" + aliceScore + \", Bob: \" + bobScore);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-operations",
      children: "10.2 Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.optional;\n\nimport java.util.*;\n\nrecord Person(String name, String email, Address address) {}\nrecord Address(String city, String zipCode) {}\n\npublic class OptionalOperationsDemo {\n    public static void main(String[] args) {\n        // ---- ifPresent ----\n        Optional<String> value = Optional.of(\"Hello\");\n        value.ifPresent(s -> System.out.println(\"Value: \" + s));\n\n        // ---- ifPresentOrElse (Java 9+) ----\n        Optional<String> empty = Optional.empty();\n        empty.ifPresentOrElse(\n            s -> System.out.println(\"Value: \" + s),\n            () -> System.out.println(\"No value present\")\n        );\n\n        // ---- orElse / orElseGet ----\n        String result1 = value.orElse(\"Default\");\n        String result2 = empty.orElse(\"Default\");\n        System.out.println(\"orElse: \" + result1 + \", \" + result2);\n\n        // orElseGet → lazy evaluation (prefer over orElse for expensive defaults)\n        String result3 = empty.orElseGet(() -> {\n            System.out.println(\"Computing default...\");\n            return \"ComputedDefault\";\n        });\n        System.out.println(\"orElseGet: \" + result3);\n\n        // orElse vs orElseGet → subtle difference:\n        // orElse evaluates the argument even if the Optional is present\n        String eager = value.orElse(computeExpensiveDefault());   // always called!\n        String lazy  = value.orElseGet(() -> computeExpensiveDefault()); // only if empty\n\n        // ---- orElseThrow ----\n        String safe = value.orElseThrow();\n        // String unsafe = empty.orElseThrow(); // NoSuchElementException\n        String custom = empty.orElseThrow(() -> new IllegalArgumentException(\"Missing value\"));\n\n        // ---- map ----\n        Optional<Integer> length = value.map(String::length);\n        System.out.println(\"Mapped length: \" + length);\n\n        // ---- flatMap → avoid nested Optional ----\n        Optional<String> cityFromFlatMap = getPerson()\n            .flatMap(Person::email)\n            .flatMap(OptionalOperationsDemo::findUserByEmail)\n            .map(Person::address)\n            .map(Address::city);\n        System.out.println(\"City from flatMap chain: \" + cityFromFlatMap);\n\n        // ---- filter ----\n        Optional<String> filtered = value.filter(s -> s.length() > 3);\n        System.out.println(\"Filtered (>3 chars): \" + filtered);\n\n        Optional<String> filteredOut = value.filter(s -> s.length() > 10);\n        System.out.println(\"Filtered (>10 chars): \" + filteredOut);\n\n        // ---- stream (Java 9+) → convert to 0-1 element stream ----\n        long streamCount = value.stream().count(); // 1\n        long emptyStreamCount = Optional.<String>empty().stream().count(); // 0\n        System.out.println(\"Stream count: \" + streamCount + \", \" + emptyStreamCount);\n\n        // ---- Chaining example ----\n        String result = getPerson()\n            .flatMap(p -> Optional.ofNullable(p.address()))\n            .map(Address::zipCode)\n            .filter(zip -> zip.length() == 5)\n            .orElse(\"UNKNOWN\");\n        System.out.println(\"Zip code: \" + result);\n    }\n\n    static String computeExpensiveDefault() {\n        System.out.println(\"Computing expensive default...\");\n        return \"Expensive\";\n    }\n\n    static Optional<Person> getPerson() {\n        return Optional.of(new Person(\"Alice\", \"alice@example.com\",\n            new Address(\"Portland\", \"97201\")));\n    }\n\n    static Optional<Person> findUserByEmail(String email) {\n        return Optional.of(new Person(\"Alice\", email,\n            new Address(\"Portland\", \"97201\")));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-optionalint-optionallong-optionaldouble",
      children: "10.3 OptionalInt, OptionalLong, OptionalDouble"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Primitive-specialized versions avoid boxing overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.optional;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class PrimitiveOptionalDemo {\n    public static void main(String[] args) {\n        IntStream stream = IntStream.of(3, 7, 2, 9, 5);\n\n        OptionalInt max = stream.max();\n        System.out.println(\"Max: \" + max.orElse(-1));\n\n        // Creation\n        OptionalInt present = OptionalInt.of(42);\n        OptionalInt empty = OptionalInt.empty();\n\n        // Operations\n        System.out.println(\"Present: \" + present.getAsInt());\n        System.out.println(\"orElse: \" + empty.orElse(0));\n        System.out.println(\"orElseThrow: \" + present.orElseThrow());\n\n        // OptionalLong\n        OptionalLong large = OptionalLong.of(1_000_000_000_000L);\n        System.out.println(\"Long: \" + large.orElseThrow());\n\n        // OptionalDouble\n        OptionalDouble avg = OptionalDouble.of(3.14);\n        avg.ifPresent(d -> System.out.printf(\"Double: %.2f%n\", d));\n\n        // Common pattern: reduce returning primitive optional\n        OptionalDouble average = IntStream.of(1, 2, 3, 4, 5).average();\n        System.out.println(\"Average: \" + average.orElse(0.0));\n\n        // Conversion from Optional to OptionalInt\n        Optional<Integer> boxed = Optional.of(42);\n        OptionalInt unboxed = boxed.map(OptionalInt::of).orElse(OptionalInt.empty());\n        System.out.println(\"Converted: \" + unboxed);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-optional-best-practices",
      children: "10.4 Optional Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.optional;\n\nimport java.util.*;\n\npublic class OptionalBestPracticesDemo {\n    public static void main(String[] args) {\n        // GOOD: Use Optional as a return type from methods\n        Optional<String> result = findUser(42);\n\n        // BAD: Optional as a parameter type\n        // void setName(Optional<String> name) { ... }  // avoid\n\n        // BAD: Optional as a field type\n        // public class Person { Optional<String> middleName; ... } // avoid\n\n        // BAD: Optional in collections\n        // List<Optional<String>> names = ...; // avoid → collection of Optional\n\n        // GOOD: Use Optional for terminal operations\n        Map<String, Integer> cache = new HashMap<>();\n        String key = \"test\";\n        Integer val = Optional.ofNullable(cache.get(key))\n            .orElseGet(() -> {\n                int computed = computeExpensive(key);\n                cache.put(key, computed);\n                return computed;\n            });\n        System.out.println(\"Cached value: \" + val);\n\n        // GOOD: Chaining Optionals\n        String env = System.getenv(\"MY_VAR\");\n        String resolved = Optional.ofNullable(env)\n            .filter(s -> !s.isBlank())\n            .orElse(\"default_value\");\n\n        // GOOD: Optional and streams\n        List<Optional<Integer>> optionals = List.of(\n            Optional.of(1), Optional.empty(), Optional.of(3), Optional.of(5)\n        );\n        List<Integer> flat = optionals.stream()\n            .flatMap(Optional::stream)\n            .toList();\n        System.out.println(\"Flat mapped: \" + flat);\n    }\n\n    static Optional<String> findUser(int id) {\n        if (id > 0) {\n            return Optional.of(\"User-\" + id);\n        }\n        return Optional.empty();\n    }\n\n    static int computeExpensive(String key) {\n        return key.hashCode() * 31;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-parallel-streams",
      children: "11. Parallel Streams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parallel streams leverage multiple CPU cores by splitting the workload across threads managed by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "common ForkJoinPool"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-forkjoinpool-architecture",
      children: "11.1 ForkJoinPool Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.parallel;\n\nimport java.util.concurrent.*;\nimport java.util.stream.*;\n\npublic class ForkJoinPoolDemo {\n    public static void main(String[] args) {\n        // Default pool size = Runtime.getRuntime().availableProcessors() - 1\n        System.out.println(\"Available processors: \" + Runtime.getRuntime().availableProcessors());\n        System.out.println(\"Common pool parallelism: \" + ForkJoinPool.getCommonPoolParallelism());\n\n        // Custom pool for specific workloads\n        var customPool = new ForkJoinPool(4);\n        try {\n            long count = customPool.submit(() ->\n                LongStream.rangeClosed(1, 10_000_000)\n                    .parallel()\n                    .filter(n -> n % 2 == 0)\n                    .count()\n            ).get();\n            System.out.println(\"Even count from custom pool: \" + count);\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            customPool.shutdown();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-performance-considerations",
      children: "11.2 Performance Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.parallel;\n\nimport java.util.*;\nimport java.util.concurrent.*;\nimport java.util.stream.*;\n\npublic class ParallelPerformanceDemo {\n    public static void main(String[] args) {\n        var largeList = new Random().ints(10_000_000, 0, 1000)\n            .boxed().toList();\n\n        // Warmup\n        measure(\"Sequential\", () -> processSequential(largeList));\n        measure(\"Parallel\", () -> processParallel(largeList));\n        measure(\"Sequential\", () -> processSequential(largeList));\n        measure(\"Parallel\", () -> processParallel(largeList));\n\n        // --- When parallel helps ---\n        // CPU-intensive work on large datasets\n        var numbers = LongStream.rangeClosed(1, 100_000).boxed().toList();\n\n        long seqTime = measure(\"Sequential prime count\", () ->\n            numbers.stream()\n                .filter(ParallelPerformanceDemo::isPrime)\n                .count()\n        );\n\n        long parTime = measure(\"Parallel prime count\", () ->\n            numbers.parallelStream()\n                .filter(ParallelPerformanceDemo::isPrime)\n                .count()\n        );\n\n        System.out.println(\"Speedup: \" + (seqTime / (double) Math.max(parTime, 1)) + \"x\");\n\n        // --- When parallel does NOT help ---\n        // Small dataset\n        var small = List.of(1, 2, 3, 4, 5);\n        measure(\"Small sequential\", () -> small.stream().map(n -> n * 2).toList());\n        measure(\"Small parallel\", () -> small.parallelStream().map(n -> n * 2).toList());\n\n        // Sequential operations (findFirst)\n        measure(\"findFirst sequential\", () ->\n            largeList.stream().filter(n -> n > 500).findFirst());\n        measure(\"findFirst parallel\", () ->\n            largeList.parallelStream().filter(n -> n > 500).findFirst());\n    }\n\n    private static long measure(String label, Runnable task) {\n        long start = System.nanoTime();\n        task.run();\n        long elapsed = System.nanoTime() - start;\n        System.out.printf(\"%s: %.2f ms%n\", label, elapsed / 1_000_000.0);\n        return elapsed;\n    }\n\n    private static long measure(String label, java.util.function.LongSupplier task) {\n        long start = System.nanoTime();\n        long result = task.getAsLong();\n        long elapsed = System.nanoTime() - start;\n        System.out.printf(\"%s (%d): %.2f ms%n\", label, result, elapsed / 1_000_000.0);\n        return elapsed;\n    }\n\n    static void processSequential(List<Integer> list) {\n        list.stream()\n            .map(n -> n * n)\n            .filter(n -> n % 2 == 0)\n            .sorted()\n            .count();\n    }\n\n    static void processParallel(List<Integer> list) {\n        list.parallelStream()\n            .map(n -> n * n)\n            .filter(n -> n % 2 == 0)\n            .sorted()\n            .count();\n    }\n\n    static boolean isPrime(long n) {\n        if (n < 2) return false;\n        if (n == 2) return true;\n        if (n % 2 == 0) return false;\n        for (long i = 3; i * i <= n; i += 2) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-thread-safety-and-shared-state",
      children: "11.3 Thread Safety and Shared State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.parallel;\n\nimport java.util.*;\nimport java.util.concurrent.*;\nimport java.util.stream.*;\n\npublic class ThreadSafetyDemo {\n    public static void main(String[] args) {\n        var numbers = IntStream.rangeClosed(1, 10_000).boxed().toList();\n\n        // BAD: shared mutable state in parallel stream\n        List<Integer> badResults = new ArrayList<>(); // not thread-safe\n        numbers.parallelStream()\n            .filter(n -> n % 2 == 0)\n            .forEach(badResults::add);  // RACE CONDITION!\n        System.out.println(\"Bad size (may be wrong): \" + badResults.size());\n\n        // GOOD: collect into thread-safe container\n        List<Integer> goodResults = numbers.parallelStream()\n            .filter(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(\"Good size: \" + goodResults.size());\n\n        // GOOD: use ConcurrentHashMap\n        ConcurrentMap<Integer, List<String>> concurrent = new ConcurrentHashMap<>();\n        List.of(\"apple\", \"banana\", \"cherry\").parallelStream()\n            .forEach(s -> {\n                int len = s.length();\n                concurrent.computeIfAbsent(len, k -> new CopyOnWriteArrayList<>()).add(s);\n            });\n        System.out.println(\"Concurrent result: \" + concurrent);\n\n        // BAD: shared state in map operation\n        long[] counter = {0};\n        IntStream.rangeClosed(1, 1000).parallel()\n            .forEach(i -> counter[0]++); // RACE CONDITION\n        System.out.println(\"Counter (should be 1000): \" + counter[0]);\n\n        // GOOD: use reduce instead\n        long correctCount = IntStream.rangeClosed(1, 1000).parallel()\n            .mapToObj(i -> 1L)\n            .reduce(0L, Long::sum);\n        System.out.println(\"Reduce count: \" + correctCount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-unordered-for-performance",
      children: "11.4 unordered() for Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.pai.collections.parallel;\n\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class UnorderedDemo {\n    public static void main(String[] args) {\n        var largeList = new Random().ints(10_000_000, 0, 1000)\n            .boxed().toList();\n\n        // distinct() is more expensive on ordered streams\n        long start = System.nanoTime();\n        long orderedCount = largeList.parallelStream()\n            .distinct()\n            .count();\n        long orderedTime = System.nanoTime() - start;\n\n        start = System.nanoTime();\n        long unorderedCount = largeList.parallelStream()\n            .unordered()\n            .distinct()\n            .count();\n        long unorderedTime = System.nanoTime() - start;\n\n        System.out.println(\"Ordered distinct: \" + orderedCount + \" in \" +\n            (orderedTime / 1_000_000) + \" ms\");\n        System.out.println(\"Unordered distinct: \" + unorderedCount + \" in \" +\n            (unorderedTime / 1_000_000) + \" ms\");\n\n        // Also: skip + limit on unordered parallel streams is faster\n        start = System.nanoTime();\n        List<Integer> ordered = largeList.parallelStream()\n            .skip(1_000_000)\n            .limit(100)\n            .toList();\n        long oTime = System.nanoTime() - start;\n\n        start = System.nanoTime();\n        List<Integer> unordered = largeList.parallelStream()\n            .unordered()\n            .skip(1_000_000)\n            .limit(100)\n            .toList();\n        long uTime = System.nanoTime() - start;\n\n        System.out.println(\"Ordered skip+limit: \" + (oTime / 1_000_000) + \" ms\");\n        System.out.println(\"Unordered skip+limit: \" + (uTime / 1_000_000) + \" ms\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-parallel-stream-decision-framework",
      children: "11.5 Parallel Stream Decision Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use parallel streams when"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dataset is large (10,000+ elements)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operations are CPU-intensive per element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stream has no stateful dependencies"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Order is not important (or you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".unordered()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need results from a single operation, not repeated small queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid parallel streams when"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dataset is small (overhead dominates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operations involve blocking I/O (use CompletableFuture instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You share mutable state between threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You rely on deterministic ordering (findFirst, limit with ordered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The stream is pipelined into many small intermediate ops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are inside a bounded thread pool (like web server request threads)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Java Collections Framework provides a cohesive set of interfaces and implementations for managing groups of objects:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Core Interfaces"
          }), ": Iterable → Collection → List (ordered), Set (unique), Queue (FIFO), Deque (double-ended), Map (key-value pairs). Each interface defines a contract; implementations provide the behavior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "List"
          }), ": ArrayList (resizable array, 1.5x growth, O(1) get, O(n) insert/remove-middle), LinkedList (doubly-linked, O(1) ends, O(n) index), ArrayDeque (preferred over Stack and LinkedList for queue/stack). Unmodifiable lists via List.of/copyOf."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set"
          }), ": HashSet (hash table, O(1), no order), LinkedHashSet (O(1), insertion order), TreeSet (red-black tree, O(log n), sorted). EnumSet is a highly optimized bit-vector for enums."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Map"
          }), ": HashMap (hash table with treeification at bucket size 8, O(1)), LinkedHashMap (insertion or access order, LRU cache via removeEldestEntry), TreeMap (red-black tree, O(log n)), EnumMap (array index by ordinal, extremely fast). computeIfAbsent and merge eliminate boilerplate. IdentityHashMap uses reference equality; WeakHashMap allows key GC."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Comparable vs Comparator"
          }), ": Comparable defines natural ordering (compareTo). Comparator defines custom ordering with chaining (thenComparing), null-safe variants (nullsFirst/nullsLast), and primitive helpers (comparingInt/comparingDouble)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Collections Utility"
          }), ": sort, binarySearch, reverse, shuffle, max/min, frequency, disjoint, nCopies, unmodifiable/synchronized/checked wrappers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stream API"
          }), ": Lazy pipeline of operations. Intermediate ops (filter, map, flatMap, distinct, sorted, peek, limit, skip, takeWhile/dropWhile) are lazy. Terminal ops (collect, toList, forEach, reduce, count, anyMatch/allMatch/noneMatch, findFirst/findAny, min/max) trigger execution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Collectors"
          }), ": toList/toSet/toCollection for collection creation; joining for strings; groupingBy/partitioningBy for classification; toMap with merge functions; summarizingDouble for statistics; teeing (Java 12+) for parallel dual reduction; collectingAndThen for post-processing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optional"
          }), ": Container for 0 or 1 value. map, flatMap, filter for transformations; orElse/orElseGet/orElseThrow for fallbacks; ifPresent/ifPresentOrElse for side-effects. OptionalInt/Long/Double avoid boxing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parallel Streams"
          }), ": Common ForkJoinPool, thread safety requirements, unordered optimization, performance trade-offs. Best for CPU-intensive, large datasets with independent element processing."]
        }), "\n"]
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the growth factor of ArrayList. Starting from capacity 10, what are the capacities after adding the 11th, 16th, and 22nd elements?"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What is the time complexity (Big-O) of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get(i)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "add(e)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "add(i, e)"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove(i)"
            }), " for ArrayList vs LinkedList?"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "When does HashMap convert a bucket from a linked list to a red-black tree? What is the minimum bucket count for treeification?"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How does LinkedHashMap support LRU caching? Which method must be overridden?"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "List.of(...)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "List.copyOf(...)"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collections.unmodifiableList(...)"
            }), " regarding mutation of the backing collection?"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Comparable"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Comparator"
            }), " with code examples of each."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collectors.teeing()"
            }), " do? Give a realistic use case."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["When should you use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "findFirst()"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "findAny()"
            }), " in a parallel stream?"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Optional"
            }), "? List three methods for retrieving the value from an Optional and explain when each is appropriate."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Why can ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EnumSet"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EnumMap"
            }), " be faster than their hash-based counterparts?"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 1: Frequency Counter"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a method that takes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<String>"
      }), " and returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map<String, Long>"
      }), " where each key is a word and the value is its frequency. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merge"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collectors.groupingBy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Map<String, Long> countWords(List<String> words) {\n    // Your implementation here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 2: Top N by Value"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map<String, Integer>"
      }), " of scores, return the top 3 entries in descending order of value as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Map.Entry<String, Integer>>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<Map.Entry<String, Integer>> topThree(Map<String, Integer> scores) {\n    // Your implementation here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 3: Intersection of Two Lists"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a method that returns the intersection of two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Integer>"
      }), " values using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set"
      }), " operations. The result should preserve the order from the first list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<Integer> intersection(List<Integer> a, List<Integer> b) {\n    // Your implementation here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 4: LRU Cache"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a generic LRU cache using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LinkedHashMap"
      }), " that supports a maximum capacity, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get(key)"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "put(key, value)"
      }), ". Test it with capacity 3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 5: Group By Category"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a list of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction"
      }), " objects (with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "category"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "amount"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "date"
      }), " fields), produce a report that groups transactions by category, summing the amounts and sorting categories alphabetically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "record Transaction(String category, double amount, LocalDate date) {}\n\nMap<String, Double> totalByCategory(List<Transaction> transactions) {\n    // Your implementation here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 6: Custom Comparator Chain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Person>"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "firstName"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastName"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "age"
      }), ", sort by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last name ascending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then first name descending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then age ascending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle nulls for all three fields"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 7: Parallel Stream for Prime Search"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate a list of the first 10,000 integers, then use a parallel stream to count how many are prime. Compare the execution time with a sequential stream. Print the timing difference."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 8: FlatMap for Nested Structures"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<List<Optional<Integer>>"
      }), ", write a stream pipeline that produces a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Integer>"
      }), " containing only the present values, flattened."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<List<Optional<Integer>>> nested = List.of(\n    List.of(Optional.of(1), Optional.empty(), Optional.of(3)),\n    List.of(Optional.of(4), Optional.of(5)),\n    List.of(Optional.empty(), Optional.empty())\n);\n// Result: [1, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 9: Custom Collector for Median"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector<Integer, ?, Double>"
      }), " that computes the median value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 10: Partitioning by Predicate"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a list of strings, partition them into two groups: those that start with a vowel and those that don't. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collectors.partitioningBy"
      }), ". Print both groups."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 1: Multimap from flatMap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Multimap<K, V>"
      }), " (one key maps to multiple values) using a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map<K, List<V>>"
      }), ". Provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "put"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remove"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keys()"
      }), " methods. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "computeIfAbsent"
      }), " in your implementation. Then build a method that takes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<String>"
      }), " and indexes them by their first character:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Multimap<Character, String> indexByFirstChar(List<String> words) {\n    // Your implementation here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 2: Stream-Based CSV Parser"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a method that parses a CSV string into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<Map<String, String>>"
      }), " using streams. The first row contains headers. Each subsequent row becomes a map from header to value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<Map<String, String>> parseCsv(String csv) {\n    // Parse using streams; handle quoted values containing commas\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 3: Custom TreeMap with Proximity Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProximityMap"
      }), " using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TreeMap"
      }), " that stores words and their positions. Provide a method ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wordsNear(String word, int distance)"
      }), " that returns all words within the given edit distance (Levenshtein) of the query word, using the TreeMap for efficient prefix/range filtering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 4: Parallel Stream → Matrix Multiplication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement parallel matrix multiplication for large matrices (e.g., 1024x1024). Use parallel streams to split the workload across available processors. Compare performance against sequential multiplication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "double[][] multiply(double[][] a, double[][] b) {\n    // Parallel stream implementation\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 5: Phased Batch Processor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a system that processes batches of items through three phases: validation, enrichment, and persistence. Each phase uses a different collection type:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LinkedHashSet"
        }), " (preserves order, deduplicates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enrichment: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HashMap"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merge"
        }), " to aggregate enrichments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Persistence: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TreeMap"
        }), " sorted by priority"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use parallel streams for independent enrichment operations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), " to represent potentially absent enrichment data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terms",
      children: "Key Terms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Load Factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold (default 0.75) at which a hash table resizes, trading memory for collision probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Treeification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converting a HashMap bucket from a linked list to a red-black tree when collisions exceed threshold (8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fail-Fast Iterator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Iterator that throws ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ConcurrentModificationException"
            }), " if the collection is structurally modified during iteration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structural Modification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any operation that changes the size of a collection or modifies it in a way that would affect iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A collection backed by another; changes to either are reflected in the other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream operation that combines all elements into a single result (reduce, collect)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Short-Circuiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal operation that can terminate without processing the entire stream (findFirst, anyMatch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stateful Operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream operation that requires processing all elements before it can produce any output (sorted, distinct)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encounter Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The order in which elements appear in a source collection or are generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Ordering"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The default sort order defined by a class' ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compareTo"
            }), " method (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Comparable"
            }), " interface)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This chapter is part of the Java & Spring Boot University Textbook. Next: P4 → Exception Handling & I/O."
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